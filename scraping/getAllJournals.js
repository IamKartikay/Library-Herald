import axios from "axios";
import fs from "fs";
import * as cheerio from "cheerio";

const yearRegex = /Year : (\d+)/;
const volumeRegex = /Volume : (\d+)/;
const issueRegex = /Issue : (\d+)/;
const firstPageRegex = /First page : \(\s*(\d+)\)/;
const lastPageRegex = /Last page : \(\s*(\d+)\)/;
const printISSNRegex = /Print ISSN : (\d{4}-\d{4})/;
const onlineISSNRegex = /Online ISSN : (\d{4}-\d{4})/;
const doiRegex = /Article DOI : (\S+)/;

const extractInfo = (input, regex) => {
  const match = input.match(regex);
  return match ? match[1] : null;
};

//READ
const jsonData = fs.readFileSync("kaam.json", "utf-8");
const jsonObject = JSON.parse(jsonData);

const headers = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
};

console.time("forLoop");

const promises = [];
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const delayBetweenRequests = 1000; // 1 second delay between requests

for (let i = 0; i < jsonObject.length; i++) {
  for (let j = 0; j < jsonObject[i].sub.length; j++) {
    const journalList = jsonObject[i].sub[j].link;

    //fetch requests and return scraped journal data
    const promisesForJournal = journalList.map(async (e, index) => {
      try {
        if (index > 0) {
          // Introduce a delay between requests
          await delay(delayBetweenRequests);
        }
        const res = await axios.get(e, {headers});
        const $ = cheerio.load(res.data);
        if (res.data === null) {
          // Handle the case where the fetch result is null
          console.log(`Fetch result is null for link ${e}`);
          process.exit();
        }

        const Header = $("#DIVmain")
          .find("p.generalHeaderText")
          .text()
          .replace(/['+\n]+/g, " ")
          .replace(/\s+/g, " ")
          .trim();

        const temp = {
          year: extractInfo(Header, yearRegex),
          volume: extractInfo(Header, volumeRegex),
          issue: extractInfo(Header, issueRegex),
          firstPage: extractInfo(Header, firstPageRegex),
          lastPage: extractInfo(Header, lastPageRegex),
          printISSN: extractInfo(Header, printISSNRegex),
          onlineISSN: extractInfo(Header, onlineISSNRegex),
          doi: extractInfo(Header, doiRegex),
          heading: $("#DIVmain").find(".articleTitle").text(),
          authors: $("#DIVmain").find(".authorNames").text(),
          authorDes: $("#DIVmain").find(".authorAffiliation").text(),
          abstract: $("#DIVmain").find(".abstract").text(),
          keywords: $("#DIVmain").find(".keywords").text(),
        };
        return temp;
      } catch (error) {
        console.log(error, "ERRORRRRRRRRRRRRRRRR", i, j);
        process.exit();
      }
    });

    const promiseForIteration = Promise.all(promisesForJournal)
      .then(async (results) => {
        const validResults = results.filter((result) => result !== null);
        jsonObject[i].sub[j].link = validResults;
        jsonObject[i]['length'] = validResults.length;
      })
      .catch((error) => {
        console.error("Error handling promises:", error);
      });

    promises.push(promiseForIteration);
  }
}



Promise.all(promises)
  .then(() => {
    console.timeEnd("forLoop");
    console.log(jsonObject);

    const jsonString = JSON.stringify(jsonObject, null, 2);
    fs.appendFileSync("data3.json", jsonString);

    console.log("Object written to file successfully.");
    process.exit();
  })
  .catch((error) => {
    console.error("Error handling promises:", error);
    process.exit();
  });



