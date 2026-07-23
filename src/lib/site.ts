const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const siteUrl = (
  configuredSiteUrl ?? "http://localhost:3000"
).replace(/\/$/, "");
