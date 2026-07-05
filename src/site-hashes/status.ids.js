const fs = require("fs");
const path = require("path");

async function fetchStatusIds(base) {
  const url = `${base}/selfservice/api/energov/permits/permit/status`;

  const headers = {
    accept: "application/json, text/plain, */*",
    "accept-language": "en-US,en;q=0.9",
    cookie: "Tyler-Tenant-Culture=en-US",
    priority: "u=1, i",
    referer: base,
    "sec-ch-ua":
      '"Google Chrome";v="149", "Chromium";v="149", "Not)A;Brand";v="24"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"Windows"',
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    tenantid: "1",
    tenantname: "WakeCountyNCProd",
    "tyler-tenant-culture": "en-US",
    "tyler-tenanturl": "WakeCountyNCProd",
    "user-agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36",
  };

  try {
    console.log("Fetching Status data");
    const response = await fetch(url, { method: "GET", headers: headers });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Get the raw text (JSON) response
    const data = await response.text();

    // Define directory and file paths
    // GO UP TWO LEVELS: src/site-hashes -> src -> Root -> site.data
    const dirPath = path.join(__dirname, "..", "..", "site.data");
    const filePath = path.join(dirPath, "status.ids.json");

    // Create the 'site.data' directory if it doesn't exist
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    // Write the response to the file
    fs.writeFileSync(filePath, data, "utf8");

    console.log(`Success! Data written to ${filePath}`);
  } catch (error) {
    console.error("Error fetching or writing data:", error);
  }
}

module.exports = { fetchStatusIds };
