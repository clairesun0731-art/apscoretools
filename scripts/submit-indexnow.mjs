const SITE_URL = process.env.SITE_URL ?? "https://www.apscoretools.com";
const INDEXNOW_KEY = process.env.INDEXNOW_KEY ?? "ab6a601691adaf8b1056043da6f96977";
const INDEXNOW_ENDPOINT =
  process.env.INDEXNOW_ENDPOINT ?? "https://www.bing.com/indexnow";

const isDryRun = process.argv.includes("--dry-run");
const explicitUrls = process.argv
  .slice(2)
  .filter((arg) => arg !== "--dry-run" && arg.startsWith("https://"));

function normalizeSiteUrl(url) {
  return url.replace(/\/+$/, "");
}

function extractUrlsFromSitemap(xml) {
  return Array.from(xml.matchAll(/<loc>(.*?)<\/loc>/g), (match) => match[1]).filter(
    Boolean,
  );
}

async function getSitemapUrls(siteUrl) {
  const response = await fetch(`${siteUrl}/sitemap.xml`);

  if (!response.ok) {
    throw new Error(
      `Could not fetch sitemap: ${response.status} ${response.statusText}`,
    );
  }

  return extractUrlsFromSitemap(await response.text());
}

async function main() {
  const siteUrl = normalizeSiteUrl(SITE_URL);
  const host = new URL(siteUrl).host;
  const keyLocation = `${siteUrl}/${INDEXNOW_KEY}.txt`;
  const urlList = explicitUrls.length > 0 ? explicitUrls : await getSitemapUrls(siteUrl);

  if (urlList.length === 0) {
    throw new Error("No URLs found for IndexNow submission.");
  }

  const payload = {
    host,
    key: INDEXNOW_KEY,
    keyLocation,
    urlList,
  };

  if (isDryRun) {
    console.log(JSON.stringify(payload, null, 2));
    return;
  }

  const response = await fetch(INDEXNOW_ENDPOINT, {
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    method: "POST",
  });

  const body = await response.text();

  if (!response.ok && response.status !== 202) {
    throw new Error(
      `IndexNow submission failed: ${response.status} ${response.statusText}\n${body}`,
    );
  }

  console.log(
    `IndexNow submitted ${urlList.length} URL(s): ${response.status} ${response.statusText}`,
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
