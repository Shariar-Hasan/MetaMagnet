export const generateTheString = (data) => {
  const {
    author,
    contentType,
    description,
    follow,
    image,
    index,
    keywords,
    language,
    revisitAfter,
    title,
    url,
  } = data;
  return `<!-- Primary Meta Tags -->
<meta name="title" content="${title}">
<meta name="description" content="${description}">
<meta name="keywords" content="${keywords}">
<meta name="language" content="${language}">
<meta name="robots" content="${index + "," + follow}">
<meta http-equiv="Content-Type" content="${contentType}">
${revisitAfter ? `<meta name="revisit-after" content="${revisitAfter}">` : ""}
${author ? `<meta name="author" content="${author}">` : ""}

<!--For Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:url" content="${url}" />
<meta property="og:title" content="${title}" />
<meta property="og:description" content="${description}" />
<meta property="og:image" content="${image || "replace-with-your-own-img-link.jpg"}" />

<!--For Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="${url || "www.Your-site-link.com"}" />
<meta property="twitter:title" content="${title}" />
<meta property="twitter:description" content="${description}" />
<meta property="twitter:image" content="${image || "replace-with-your-own-img-link.jpg"}" />

<!--This Meta Tags are Generated with https://metamagnet.netlify.app -->
`;
};
