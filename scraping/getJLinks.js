import fs from "fs";
import * as cheerio from "cheerio";

const jsonData = fs.readFileSync("AllJData.json", "utf-8");
const jsonObject = JSON.parse(jsonData);

console.time("forLoop");
for (var i = 0; i < jsonObject.length; i++) {
  for (var j = 0; j < jsonObject[i].sub.length; j++) {
    try {
      const res = await fetch(jsonObject[i].sub[j].link);
      const data = await res.text();
      console.log(typeof data);
      const $ = cheerio.load(data);

      const baseUrl = "https://www.indianjournals.com/ijor.aspx";
      const journalList = [];

      if (journalList.length == 0) {
        $("#DIVmain")
          .find(".section2paragraph")
          .map((i, el) => {
            const link = $(el).find(".generallink").attr("href");
            // console.log(baseUrl + link);
            journalList.push(baseUrl + link);
          });
      }
      jsonObject[i].sub[j].link = journalList;
    } catch (error) {
      console.log(error);
    }
  }
}
console.timeEnd("forLoop");

console.log(jsonObject);

const jsonString = JSON.stringify(jsonObject, null, 2);

fs.writeFileSync("data2.json", jsonString);

console.log("Object written to file successfully.");
