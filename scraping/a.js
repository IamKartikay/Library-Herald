import * as cheerio from "cheerio";
import fetch from "node-fetch";
import fs from "fs";
import express from "express";
import mongoose, { connect } from "mongoose";
import Journal from "./Models/models.js";

const yearRegex = /Year : (\d+)/;
const volumeRegex = /Volume : (\d+)/;
const issueRegex = /Issue : (\d+)/;
const firstPageRegex = /First page : \(\s*(\d+)\)/;
const lastPageRegex = /Last page : \(\s*(\d+)\)/;
const printISSNRegex = /Print ISSN : (\d{4}-\d{4})/;
const onlineISSNRegex = /Online ISSN : (\d{4}-\d{4})/;
const doiRegex = /Article DOI : (\S+)/;

// Function to extract information using a regular expression

const extractInfo = (input, regex) => {
  const match = input.match(regex);
  return match ? match[1] : null;
};

const headers = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
  // Add other headers if needed
};

const fun = async () => {
  try {
    const res = await fetch(
      "https://www.indianjournals.com/ijor.aspx?target=ijor:lh&volume=59&issue=3&type=toc"
    );
    const data = await res.text();
    const $ = cheerio.load(data);

    const baseUrl = "https://www.indianjournals.com/ijor.aspx";
    const journalList = [];
    var journalData = [];

    if (journalList.length == 0) {
      $("#DIVmain")
        .find(".section2paragraph")
        .map((i, el) => {
          const link = $(el).find(".generallink").attr("href");
          // console.log(baseUrl + link);
          journalList.push(baseUrl + link);
        });
    }
    console.log(journalList);
    var promises = journalList.map(async (e, i) => {
      try {
        await new Promise(resolve => setTimeout(resolve, 6000));
        const res = await fetch(e, { headers, timeout: 6000 });
        const data = await res.text();
        if(data == null)
        {
          console.log(`Fetch result is null for link ${e}`);
        }
        const $ = cheerio.load(data);
        const Header = $("#DIVmain")
          .find("p.generalHeaderText")
          .text()
          .replace(/['+\n]+/g, " ")
          .replace(/\s+/g, " ")
          .trim();


        const j = {
          year: extractInfo(Header, yearRegex),
          volume: extractInfo(Header, volumeRegex),
          issue: extractInfo(Header, issueRegex),
          firstPage: extractInfo(Header, firstPageRegex ),
          lastPage: extractInfo(Header, lastPageRegex ),
          printISSN: extractInfo(Header, printISSNRegex ),
          onlineISSN: extractInfo(Header, onlineISSNRegex ),
          doi: extractInfo(Header, doiRegex ), 
          heading: $("#DIVmain").find(".articleTitle").text(),
          authors: $("#DIVmain").find(".authorNames").text(),
          authorDes: $("#DIVmain").find(".authorAffiliation").text(),
          abstract: $("#DIVmain").find(".abstract").text(),
          keywords: $("#DIVmain").find(".keywords").text(),
        };

        return j;

        // console.log(j);
      } catch (error) {
        console.log(error, "ERRORRRRRRRRRRRRRRRR", i, j);
        process.exit();
      }
    });

    Promise.all(promises)
      .then(async (results) => {
        // Filter out any null values (results of errors)
        const validResults = results.filter((result) => result !== null);
        journalData.push(...validResults);
        journalData.push(validResults.length);

        const jsonString = JSON.stringify(journalData, null, 2);
        fs.appendFileSync("data3.json", jsonString);

        console.log("Object written to file successfully.");
        process.exit();
      })
      .catch((error) => {
        console.error("Error handling promises:", error);
      });

        
  } catch (error) {
    console.log(error);
  }
};

fun();
