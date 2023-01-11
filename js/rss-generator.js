var domain = window.location.hostname;
var links = document.querySelectorAll('a');
var OgDomain = "www.feenixbloom.com";

// Create an RSS header
var rssGen = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"
    xmlns:content="http://purl.org/rss/1.0/modules/content/"
    xmlns:wfw="http://wellformedweb.org/CommentAPI/"
    xmlns:dc="http://purl.org/dc/elements/1.1/"
    xmlns:atom="http://www.w3.org/2005/Atom"
    xmlns:sy="http://purl.org/rss/1.0/modules/syndication/"
    xmlns:slash="http://purl.org/rss/1.0/modules/slash/"

    xmlns:georss="http://www.georss.org/georss"
    xmlns:geo="http://www.w3.org/2003/01/geo/wgs84_pos#"
    >
  <!--Current RSS Feed links: ${anchorsWithHostname.length + 1} -->
  <channel>
    <title>Feenixbloom Website</title>
    <atom:link href="https://${OgDomain}/feed" rel="self" type="application/rss+xml" />
    <link>https://${OgDomain}</link>
    <description>Feenixbloom - Entertainment, Investment | Finance, Informational Content</description>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <sy:updatePeriod>daily</sy:updatePeriod>
    <sy:updateFrequency>1</sy:updateFrequency>
    <image>
       <url>https://${OgDomain}/images/game-lounge-img/favicon_io/favicon-32x32.png</url>
       <title>Feenixbloom Website</title>
       <link>https://${OgDomain}</link>
       <width>32</width>
	<height>32</height>
    </image>
`;

// Count all unique links/ anchor tags related to hostname
var anchors = document.querySelectorAll('a[href]');
var hostname = window.location.hostname;
var anchorsWithHostname = [];

for (var i = 0; i < anchors.length; i++) {
    var anchor = anchors[i];
    var link = anchor.href;
    if (link.includes(hostname) && !link.includes('#')) {
        if (anchorsWithHostname.indexOf(link) === -1) {
            anchorsWithHostname.push(link);
        }
    }
}

// Create an empty set to store the unique links
var uniqueLinks = new Set();

for (let link of links) {
    if (link.hostname == domain && !link.href.includes('#')) {
      var linkHref = link.href.split('.html')[0];
      // Change hostname to OgDomain
      linkHref = linkHref.replace(domain, OgDomain);
      // Remove next 5 characters after www.feenixbloom.com/ OgDomain
      linkHref = linkHref.replace(/www.feenixbloom.com(.{5})/, OgDomain);
      // Replace any instance of http with https
      linkHref = linkHref.replace(/http:/g, 'https:');
      // Check if the link has already been added to the set of unique links
      if (!uniqueLinks.has(linkHref)) {
        // If not, add it to the set and add an <item> to the RSS feed
        uniqueLinks.add(linkHref);
        rssGen += '<item>\n<title>' + link.textContent + '</title>\n<link>' + linkHref + '</link>\n<pubDate>' + new Date().toUTCString() + '</pubDate>\n<guid isPermaLink="false">' + link.textContent + '</guid></item>\n';
      }
    }
  }  

// close the channel and rss
rssGen += '  </channel>\n</rss>';

// Store the RSS data in local storage
localStorage.setItem('rssGen', rssGen);