CADIT Resource Hub - Phase 1 skeleton   (folder: ResourceHub)

FILES: index.html  resources.js  home.js  app.js  style.css  README.txt
KEEP your files folder (files/Brochures, files/CustomerSuccessStories). The CADIT tab links to those PDFs.
LOGO: save the CADIT logo as files/logo.png. Until then a text "CADIT" mark shows.

RUN: double-click index.html. After any edit, save and press F5.

HOME TAB (first, default tab)
Everything on Home is edited in home.js: quick access cards, department cards (Sales, Technical, Operations, Marketing),
and notices. Partner cards and counts are built automatically from resources.js. Pins are saved in the browser only.

WHERE TO ADD ANSYS LINKS (all in resources.js)
1. SHARED LINKS: the block "const ANSYS = { ... }" at the top. Paste each link ONCE; it is used in every place that needs it.
2. EVERYTHING ELSE: find the item in the Ansys section and replace url: "#" with the link.
   Search the file for "#" to see what is still missing (Campaign Kits currently needs its own link).
Example:  { title: "MEDDIC", url: "#" }   ->   { title: "MEDDIC", url: "https://..." }

HOW THE ANSYS TAB WORKS
Top: Frequently Used cards. Middle: department chips (Sales / Technical / Operations / Marketing); Sales opens by default.
Bottom: Other Resources cards.

url: ""  shows plain text with no link.
ADD A NEW LINK: copy any { title: "...", url: "...", desc: "..." } line in a group and edit it.
ADD A PARTNER TAB: copy one partner block near the bottom of resources.js.
