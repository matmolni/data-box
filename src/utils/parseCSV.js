// src/parseCSV.js
import Papa from 'papaparse';

export function parseCSV(fileURL, onComplete) {
    Papa.parse(fileURL, {
        download: true,
        dynamicTyping: true,
        skipEmptyLines: true,
        complete: function(results) {
            onComplete(results);
        }
    });
}
