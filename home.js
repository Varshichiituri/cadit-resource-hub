// HOME TAB DATA. Edit links/notices here. Uses the ANSYS constants from resources.js.
// tag shows on each card: PAGE (SharePoint), WEB (public site), DOC (file/template).
const HOME = {
  hero: "A centralized hub for CADIT and its partner resources, with direct links to their original SharePoint pages. Press / to search.",

  quick: { title: "Quick access", note: "for everyone", items: [
    { title: "Partner Portal", url: ANSYS.portal, desc: "Ansys Channel Partner Portal", tag: "PAGE" },
    { title: "Training & Event Calendar", url: ANSYS.calendar, desc: "Upcoming partner sessions", tag: "PAGE" },
    { title: "Vault", url: "https://vault.caditglobal.com", desc: "CADIT internal document repository", tag: "WEB" },
    { title: "AnsysGPT", url: "https://ansysgpt.ansys.com/", desc: "Technical and simulation questions", tag: "WEB" },
    { title: "Partner Certification", url: "https://webapps.ansys.com/partnerscertification/Profile/MyProfile", desc: "Ansys Partner Certification Program", tag: "WEB" },
    { title: "Ansys Customer Portal", url: ANSYS.customerPortal, desc: "Customer support and downloads", tag: "WEB" },
    { title: "Sales GPT", url: ANSYS.salesGPT, desc: "AI assistant for sales", tag: "WEB" },
    { title: "CADIT Events", url: "https://events.caditglobal.com/", desc: "Upcoming and past events", tag: "WEB" }
  ] },

  // Department picker: the cards below change with the chosen department.
  depts: [
    { id: "sales", name: "Sales", items: [
      { title: "Sales Tools", url: ANSYS.salesTools, desc: "Channel partner sales toolkit", tag: "PAGE" },
      { title: "Deal Registration", url: ANSYS.dealReg, desc: "Guidelines and registration tool", tag: "PAGE" },
      { title: "Ansys Pricing", url: ANSYS.pricing, desc: "Pricing and promotions", tag: "PAGE" },
      { title: "Salesforce CRM", url: "https://synopsyspartners.sharepoint.com/sites/SellingatAnsys/SitePages/Salesforce-SFDC.aspx", desc: "Accounts, opportunities, customers", tag: "PAGE" },
    ] },
    { id: "technical", name: "Technical / Presales", items: [
      { title: "Technical resources", url: "https://synopsyspartners.sharepoint.com/sites/cptrc", desc: "Technical Resource Center", tag: "PAGE" },
      { title: "New & Emerging Technologies", url: "https://synopsyspartners.sharepoint.com/sites/cptt/SitePages/Information-on-New-Products.aspx", desc: "New product information", tag: "PAGE" },
      { title: "Product Support", url: ANSYS.support, desc: "How to get product support", tag: "WEB" },
    ] },
    { id: "operations", name: "Operations", items: [
      { title: "Deal Operations Home", url: "https://synopsyspartners.sharepoint.com/sites/DealOperations_Ansys/SitePages/Meet-the-Channel-Partner-Team.aspx", desc: "Channel partner deal team", tag: "PAGE" },
      { title: "Order Processing Policy", url: "https://synopsyspartners.sharepoint.com/sites/DealOperations_Ansys/SitePages/Channel-Partner-Order-Processing-Policy.aspx", desc: "Channel partner orders", tag: "PAGE" },
      { title: "Global Deal Desk", url: ANSYS.dealDesk, desc: "Deal and commercial support", tag: "PAGE" },
      { title: "System Access", url: "https://synopsyspartners.sharepoint.com/sites/cpo/SitePages/System%20Access%20for%20Channel%20Partners.aspx", desc: "System access for channel partners", tag: "PAGE" },
      { title: "Academic Program", url: ANSYS.academic, desc: "Academic licensing", tag: "PAGE" },
      { title: "Startup Program", url: ANSYS.startup, desc: "Startup licensing", tag: "PAGE" }
    ] },
    { id: "marketing", name: "Marketing", items: [
      { title: "Channel Marketing Resource Center", url: "https://synopsyspartners.sharepoint.com/sites/ChannelMarketingResourceCenter", desc: "Marketing center and contacts", tag: "PAGE" },
      { title: "Ansys Logo & Icon Library", url: "https://synopsyspartners.sharepoint.com/sites/ChannelMarketingResourceCenter/SitePages/Ansys-Logo-+-Icon-Library.aspx", desc: "Approved logos and icons", tag: "PAGE" },
      { title: "Partner Guidelines", url: "https://synopsyspartners.sharepoint.com/sites/ChannelMarketingResourceCenter/SitePages/Branding-Guidelines.aspx", desc: "MDF, branding, paid media", tag: "PAGE" },
      { title: "CADIT Blog", url: "https://www.cadit.com/blog", desc: "News and articles", tag: "WEB" },
      { title: "CADIT Events", url: "https://events.caditglobal.com/", desc: "Upcoming and past events", tag: "WEB" },
      { title: "Company Brochures", url: "https://caditglobalcom-my.sharepoint.com/:b:/r/personal/haja_johana_cadit_com/Documents/CADIT%20Marketing/Marketing%20Materials/CADIT%20TH/Trifold%20brochure.pdf?d=w23e16a1ffdc44a279624aa86e95857ad&csf=1&web=1&e=YUGbg0", desc: "Trifold brochure (PDF)", tag: "DOC" }
    ] }
  ],

  notices: [
    { tag: "ACCESS", title: "Ansys links need a partner login", text: "Ansys pages sit on the Synopsys partner SharePoint. Ask the Ansys channel lead if your account cannot open them." },
  ]
};
