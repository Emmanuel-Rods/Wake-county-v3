## ⚠️ Important

Whenever you configure a new scraper or create a new scraper project, these files **must** exist.

### File Descriptions

- **site.md** – Documentation for the scraper, including the scraper name, Supabase table, GitHub repository, permit types, and permit statuses.
- **secondary.data.json** – Maps **permit type names** to their corresponding **hashed IDs** required by the website.
- **status_ids.json** – Maps **permit status names** (e.g. Issued, Finaled, Expired) to their corresponding **hashed IDs** required by the website.

These mappings are generated during the scraper configuration process and are required for the scraper to function correctly.
