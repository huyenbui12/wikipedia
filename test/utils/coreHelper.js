import fs from 'fs';
import path from 'path';

export const readFile = (inputPath) => {
// Read the JSON file
const moduleDir = path.dirname(new URL(import.meta.url).pathname);
const jsonFilePath = path.resolve(moduleDir, inputPath);
const jsonContent = fs.readFileSync(jsonFilePath, 'utf-8');

// Parse the JSON data
const jsonData = JSON.parse(jsonContent);

// Read the data from the JSON file
return jsonData;
};



