import { json2csv } from "json-2-csv";
import  { usersClean }  from "./users-to-exports.js";
import fs from "fs";
import path from "path";


const saveFileCSV = (data) => {
   const dirPath = path.join(process.cwd(), "files")
   const filePath = path.join(dirPath, "users.csv");
   
   fs.writeFile(filePath, data, (err) => {
      if (err) {
         console.error("Error writing CSV file:", err);
      } else {
         console.log("CSV file saved successfully.");
      }
   });
}

export default async function exportCSV(data) {
   try {
      const cleanedData = usersClean(data);
      const csv = await json2csv(cleanedData);
      console.log(csv)
      saveFileCSV(csv);
      return csv;
   } catch (error) {
      console.error("Error converting JSON to CSV:", error);
      throw new Error("CSV conversion failed");
   }
}