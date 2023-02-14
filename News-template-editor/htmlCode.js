let htmlCode_first = `<!DOCTYPE html>
<html lang="en">
<head>
    <title>{ .title }</title>
    <script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@graph": [{
                    "@type": "WebSite",
                    "@id": "https://www.feenixbloom.com#website",
                    "url": "https://www.feenixbloom.com/",
                    "name": "Feenixbloom",
                    "description": "{ .description }",
                    "potentialAction": [{
                        "@type": "SearchAction",
                        "target": {
                            "@type": "EntryPoint",
                            "urlTemplate": "https://www.feenixbloom.com/search-guide/article?s={search_term_string}"
                        },
                        "query-input": "required name=search_term_string"
                    }],
                    "inLanguage": "en-US"
                }],
                "@type": "NewsArticle",
                "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.feenixbloom.com/search-guide/article/{ .current-page-link }" },
                "url": "https://www.feenixbloom.com/search-guide/article/{ .current-page-link }",
                "headline": "{ .title }",
                "description":
                "{ .description }",
                "speakable": {
                    "@type": "SpeakableSpecification",
                    "xpath": ["/html/head/title", "/html/head/meta[@name='description']/@content"]
                },
                "datePublished": "{ .date-schema }",
                "dateModified": "{ .date-schema }",
                "author": [{
                    "@type": "Person",
                    "name": "Onique Campbell",
                    "url": "https://www.feenixbloom.com/search-guide/article/{ .current-page-link }"
                }], 
                "publisher": {
                    "@type": "Organization",
                    "name": "Feenixbloom",
                    "logo": {
                        "@type": "ImageObject",
                        "url": "https://www.feenixbloom.com/images/invest-file-assets/investment-page-home",
                        "width": 600,
                        "height": 60
                    }
                },
                "image": [{
                        "@type": "ImageObject",
                        "url": "https://www.feenixbloom.com/images/invest-file-assets/infographic-1",
                        "width": 1400,
                        "height": 1400
                    },
                    {
                        "@type": "ImageObject",
                        "url": "https://www.feenixbloom.com/images/invest-file-assets/infographic-2",
                        "width": 1400,
                        "height": 1050
                    },
                    {
                        "@type": "ImageObject",
                        "url": "https://www.feenixbloom.com/images/invest-file-assets/infographic-1",
                        "width": 1400,
                        "height": 788
                    }
                ],
                "thumbnailUrl": "https://www.feenixbloom.com/images/invest-file-assets/investment-page-home"
            }
    </script>
    <!-- Only add max 2 Faq q&a per page as it doesnt influence the PAA section on google only to expand the website appearance - preferably the most clickbait/ click worthy ones -->
    <script type="application/ld+json">
        {
          "@context": "https://schema.org/",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "{ .second-h2 }",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "{ .second-h2-paragraph }"
              }
            }
          ]
        }
    </script>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="robots" content="noodp,max-image-preview:large">
    <meta property="article:published_time" content="{ .date-schema }">
    <meta property="article:modified_time" content="{ .date-schema }">
    <meta name="theme-color" content="#151515">
    <meta name="twitter:card" class="metaPageTitle" content="{ .title }">
    <meta name="twitter:site" content="@oniquedaily">
    <meta name="twitter:creator" content="@oniquedaily">
    <meta property="og:site_name" class="metaPageTitle" content="{ .title }">
    <meta property="og:url" content="https://www.feenixbloom.com/search-guide/article/{ .current-page-link }">
    <meta name="og:title" class="metaPageTitle" property="og:title" content="{ .title }">
    <meta property="og:description" content="{ .description }">
    <meta itemprop="url" content="https://www.feenixbloom.com/search-guide/article/{ .current-page-link }">
    <meta itemprop="name" class="metaPageTitle" content="{ .title }">
    <meta itemprop="description" content="{ .description }">
    <meta name="description" content="{ .description }">
    <link rel="canonical" href="https://www.feenixbloom.com/search-guide/article/{ .current-page-link }">
    <link rel="alternate" title="Feenixbloom » Feed" type="application/rss+xml" href="https://www.feenixbloom.com/feed">
    <!-- favicon -->
    <link rel="apple-touch-icon" sizes="180x180" href="/images/game-lounge-img/favicon_io/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/images/game-lounge-img/favicon_io/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/images/game-lounge-img/favicon_io/favicon-16x16.png">
    <link rel="manifest" href="/images/game-lounge-img/favicon_io/site.webmanifest">
    <!-- Preconnects -->
    <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
    <link rel="preconnect" href="https://tpc.googlesyndication.com" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="preconnect" href="https://www.youtube.com" />
    <link rel="preconnect" href="https://i.ytimg.com" />
    <link rel="preconnect" href="https://cdnjs.cloudflare.com">
    <link rel="preconnect" href="https://www.googletagmanager.com">
    <link rel="preload" as="style" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
        crossorigin="anonymous" referrerpolicy="no-referrer" 
        onload="this.onload=null;this.rel='stylesheet'"/>

    <!-- - google font link -->
    <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" onload="this.onload=null;this.rel='stylesheet'">

    <!-- custom css file link  -->
    <link rel="stylesheet" href="/css/news-page.css">

    <!-- Google Ads -->
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7079047961613379"
     crossorigin="anonymous"></script>

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-W6M35XFDJT"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-W6M35XFDJT');
    </script>

    <style>
        .top-picks {
            padding: 4rem 0 !important;
        }
    </style>
</head>

<body>

    <!-- header section starts  -->

    <header class="header">

        <a href="/index" class="logo">Feenixbloom</a>

        <nav class="navbar">
            <a href="/index">Go To Home</a>
        </nav>

        <div class="icons">
            <i class="fas fa-bars" id="menu-bars"></i>
            <i class="fas fa-search" id="search-icon"></i>
        </div>

        <form action="" class="search-form">
            <input type="search" name="" placeholder="search here..." id="search-box">
            <label for="search-box" class="fas fa-search"></label>
        </form>

    </header>

    <!-- header section ends -->

    <main class="main-section">
        <!-- Sticky Siderbar Start -->
        <div class="sidebar">
            <div class="box">
                <h3 class="title">Table of Contents</h3>
                <div class="category">
                    <!-- Include Keyword in Table Of Contents -->
                    <a href="#main-post-1">{ .secondary-title }<span>1</span></a>
                    <a href="#main-post-2"> Choose Your Topic:<span>2</span></a>
                </div>
            </div>
        </div>

        <!-- Sticky Sidebar End -->

        <!-- posts section starts  -->
        <div class="container" id="posts">
            <div class="posts-container">
                <div class="post post-top">
                    <div class="h1-blog">
                        <h1 class="title"><span>Here it is:</span><b id="share-title"> { .title } </b><span class="yearInsert"></span>! </h1>
                        <div class="date">
                            <i class="far fa-clock"></i><a href="#">&nbsp; Onique Campbell</a> &bull; <span><time datetime="{ .date-schema }">{ .dateMM }</time></span>
                        </div>
                        <div class="breadcrumbs-container" itemscope itemtype="https://schema.org/BreadcrumbList">
                            <ul class="breadcrumbs breadcrumbs-alt" aria-label="Breadcrumbs">
                                <li class="breadcrumbs__item" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                                    <a href="/index" class="breadcrumbs__link" itemprop="item"><span itemprop="name">Explore Home!</span></a>
                                    <meta itemprop="position" content="1" />
                                </li>
                                <li class="breadcrumbs__item" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                                    <a href="/search-guide/article/{ .current-page-link }" class="breadcrumbs__link breadcrumbs__link--active" aria-current="page" itemprop="item"><span itemprop="name">{ .secondary-title }</span></a>
                                    <meta itemprop="position" content="2" />
                                </li>
                            </ul>
                        </div>
                        <!-- <h3 class="text" id="advisory">Consumer Notice:</h3>
                         <div class="hide" id="advisory-text">
                             <p class="text">Products mentioned/ listed are reviewed personally and or extensively researched for your benefit and link to the direct product referred for your satisfaction and as a code of conduct and to provide transparency, the contents of this page may or may not contain affiliate links.<a href="#disclosure"> Read More</a></p>
                             <p class="text">Information presented on this post is strictly for educational purposes only. Feenixbloom reserves the right not to offer any advisory or brokerage services, and or recommend/ advise investors to trade or invest in particular stocks, securities or any other investments.</p>
                        </div> -->
                    </div>
                    <br><br>
                    <h2 class="h2-highlight" id="main-post-1"><span>{ .secondary-title } </span></h2>
                    <div class="div-container-main">
                        <p class="text" id="share-description">{ .secondary-title-paragraph }</p>
                        <p class="text">{ .secondary-title-paragraph-2 }</p>
                    </div>
                    <br><br>
                    <figure>
                        <img loading="lazy" title="{ .secondary-title }" srcset="/images/blog-pages/{ .current-image-link } 1200w" alt="{ .secondary-title }" class="image" sizes="(min-width: 1280px) 900px" width="1280" decoding="async">
                        <figcaption>Image Representation: { .secondary-title }</figcaption>
                    </figure>
                    <br><br>
                    <ul class="top-picks" id="main-post-2">
                        <h3 class="related-links" id="related-links-alt"><span>Choose Your Topic:</span> <i class="fa-solid fa-circle-chevron-down"></i></h3>
                        <div class="top-picks-list hide" id="top-picks-list">
                            <h4>Onpage Links &darr;</h4>
                            <li><a href="#review-1">{ .first-h2 }</a></li>
                            <li><a href="#review-2">{ .second-h2 }</a></li>
                            <li><a href="#review-3">{ .third-h2 }</a></li>
                            <li><a href="#review-4">{ .fourth-h2 }</a></li>
                            
                            <!-- Other Pages -->
                            <br><br>
                            <div id="other-pages-list">
                                <h4>Other Related Pages Links &darr;</h4>
                            </div>
                        </div>
                    </ul>
       `;

       
let htmlCode_last = ` 
        </div>
    </div>

    <!-- posts section ends -->

    <!-- Disclosure Start -->

    <!-- <div class="disclosure" id="disclosure">
                <p>
                    <strong>Disclosure:</strong>
                    This News article was extensively researched and arranged to provide benefit to the intended viewer.
                    The contents of this page may or may not contain affiliate links, in which I may receive a small commission at <span>no absolute cost to you.</span> <br><br>
                    These are products I fully recommend as the best options as of current, clicking a product and saving item to cart will allow you to lock in the best deal for that item.<br><br>
                    You can read more about my full disclosure here in my
                    <a href="/index.html#disclaimer">Privacy Policy</a>
                </p>
         </div> -->

    <!-- Discosure End -->
    </div>
    </main>

    <!-- footer section starts  -->

    <section class="footer">

    <div class="follow">
    <a href="https://twitter.com/oniquedaily?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" class="fab fa-twitter" target="_blank" rel="nofollow"><span class="hide">Twitter</span></a>
    <!-- <a href="#" class="fa-brands fa-discord"></a> -->
    <a href="https://www.linkedin.com/in/onique-campbell-1091b576/" class="fab fa-linkedin" target="_blank" rel="nofollow"><span class="hide">Linkedin</span></a>
    <a href="#share-btn" class="fa fa-paper-plane" id="share-btn"><span class="hide">Share</span></a>
    </div>

    <div class="credit"><span>Feenixbloom</span> | all rights reserved</div>

    <!-- H2 Page Tags -->
    <h2 class="footer-h2-page-tags">
    Here it is: { .title }<span class="yearInsert"></span>!
    </h2>

    </section>

    <!-- footer section ends -->

    <!-- custom js file link  -->
    <script src="/js/news-pages/script.js"></script>

</body>
</html>
`