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



//READ 
const jsonData = fs.readFileSync("AllJData.json", "utf-8");
const jsonObject = JSON.parse(jsonData);


const fun = async () => {
    for(var i = 0; i<jsonObject.length; i++)
    {
        try {
            const res = await fetch(
              "https://www.indianjournals.com/ijor.aspx?target=ijor:lh&volume=41&issue=4&type=toc"
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
        
            var promises = journalList.map(async (e, i) => {
              try {
                const res = await fetch(e);
                const data = await res.text();
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
                console.log(error);
                return null;
              }
            });
        
            Promise.all(promises)
              .then(async (results) => {
                // Filter out any null values (results of errors)
                const validResults = results.filter((result) => result !== null);
                journalData.push(...validResults);
        
                const jsonString = JSON.stringify(journalData, null, 2);
                fs.writeFileSync("d.json", jsonString);
        
                console.log("Object written to file successfully.");
                process.exit();
              })
              .catch((error) => {
                console.error("Error handling promises:", error);
              });
        
                
          } catch (error) {
            console.log(error);
          }
    }

};

fun();
