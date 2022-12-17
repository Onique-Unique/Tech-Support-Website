var domain = window.location.hostname;
var links = document.querySelectorAll('a');
var domainXML = `
<url>
<loc>https://${domain}/</loc>
<lastmod>${new Date().toISOString()}</lastmod>
<priority>1.0</priority>
</url>`;
var sitemapGen = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" \n xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" \n xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 \n http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">\n ${domainXML} \n`;
var linkHrefs = [];

for (let link of links) {
if (link.hostname == domain && !link.href.includes('#')) {
    var linkHref = link.href.split('.html')[0];
    if (!linkHrefs.includes(linkHref)) {
    sitemapGen += '<url>\n<loc>' + linkHref + '</loc>\n<lastmod>' + new Date().toISOString() + '</lastmod>\n<priority>1.0</priority>\n</url>\n';
    linkHrefs.push(linkHref);
    }
}
}

sitemapGen += '</urlset>';

// Store sitemap data in local storage
localStorage.setItem('sitemapGen', sitemapGen);

// Create a link for the sitemap
var linkElement = document.createElement('a');
linkElement.style.color = "aliceblue";
linkElement.href = `https://${domain}/view-sitemap.html`;
linkElement.innerText = 'View Sitemap';
document.body.appendChild(linkElement);