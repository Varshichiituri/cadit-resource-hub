const ANSYS = {
  portal:        "https://synopsyspartners.sharepoint.com/sites/ANSYSChannelPartnerPortal",   // Ansys Channel Partner Portal (main landing page)
  learningHub:   "https://learninghub.ansys.com/learn/signin",  // Ansys Learning Hub (ALH)
  calendar:      "https://synopsyspartners.sharepoint.com/sites/ANSYSChannelPartnerPortal/_layouts/15/Events.aspx?ListGuid=e9ec5bea-783c-45f3-8f77-7a82414a3270&AudienceTarget=false",   // Training & Event Calendar (Ansys main page > right-side menu)
  salesTools:    "https://synopsyspartners.sharepoint.com/sites/cpsrc/SitePages/Channel-Partner-Sales-Tools.aspx",   // Sales Tools (Ansys main page > right-side menu)
  support:       "https://ansys.synopsys.com/support",   // How to Get Product Support (Ansys main page > right-side menu)
  r1Training:    "https://synopsyspartners.sharepoint.com/sites/SalesContent_Ansys/_layouts/15/Events.aspx",   // 2026 R1 Training (Ansys main page > right-side menu)
  r1Highlights:  "https://synopsyspartners.sharepoint.com/sites/SalesContent_Ansys/SitePages/2026-R1-Release-Highlights.aspx",   // 2026 R1 Release Highlights (Training top cards / Sales quick links)
  pricing:       "https://synopsyspartners.sharepoint.com/sites/Pricing",   // Ansys Pricing / Pricing & Promotions
  dealReg:       "https://synopsyspartners.sharepoint.com/sites/cpo/SitePages/Deal-Registration.aspx",   // Deal Registration
  dealDesk:      "https://synopsyspartners.sharepoint.com/sites/GlobalDealDesk2",   // Global Deal Desk
  academic:      "https://synopsyspartners.sharepoint.com/sites/AcademicProgram9",   // Academic Program
  startup:       "https://synopsyspartners.sharepoint.com/sites/StartupProgramSite2",   // Startup Program site
  salesTraining: "https://synopsyspartners.sharepoint.com/sites/cpst",   // Sales Training page
  bestPractices: "https://synopsyspartners.sharepoint.com/sites/cpsrc/SitePages/SalesBestPracticesChannelAmerica.aspx",   // Channel Sales Best Practices (banner on Sales page)
  salesGPT:      "https://salesgpt.ansys.com/",   // Sales GPT
  marketIQ:      "https://synopsyspartners.sharepoint.com/sites/Sales/SitePages/GTM-Strategy-%26-Transformation.aspx",
  customerPortal: "https://support.ansys.com/Home/Index"    // Market IQ
};

const HUB = [

  // ---------------------------------------------------------
  {
    id: "cadit", name: "CADIT",
    home: { title: "Open cadit.com", url: "https://www.cadit.com/" },
    intro: "Resources that belong to CADIT. Website links come from www.cadit.com; documents are linked from SharePoint.",
      featured: {
    title: "Frequently Used Resources",
    items: [
      {
        title: "Vault",
        url: "https://vault.caditglobal.com",
        desc: "CADIT internal document repository"
      }
    ]
  },

    groups: [
      { name: "Products",
        items: [
          { title: "All products on cadit.com", url: "https://www.cadit.com/products", desc: "Full product list" },
          { title: "Ansys products", url: "https://www.cadit.com/products?vendor=ansys", desc: "Ansys for ASEAN and China, trials on request" },
          { title: "Ansys training courses", url: "https://www.cadit.com/products?vendor=cadit-training", desc: "CFD, FEA, EM, Optics, Photonics and more" },
          { title: "PTC products", url: "https://www.cadit.com/products?vendor=ptc", desc: "Windchill, Thingworx and more" },
          { title: "NodeLinx (IIOT)", url: "https://www.cadit.com/solutions/industrial-internet-of-things", desc: "Customizable IIOT applications" },
          { title: "EdgeLinx Telematics", url: "https://www.cadit.com/telematics", desc: "Fleet and asset management" },
          { title: "Autodesk Moldflow", url: "https://www.autodesk.com/products/moldflow/features", desc: "Offered for China" },
        ] },
      { name: "Solutions", note: "CADIT solution areas and their related resources.",
        items: [
          // FIX C1: i4 Centre now points to the AI Data Centre site.
          { title: "AI Data Centre", url: "https://aidatacentre.org/", desc: "AI data centre solutions" },
          // The Industrial IoT page and its NodeLinx links now sit under their own correct label.
          { title: "Industrial IoT (NodeLinx)", url: "https://www.cadit.com/solutions/industrial-internet-of-things", desc: "Industrial IoT solutions, including NodeLinx",
  children: [
              { title: "NodeLinx Energy Monitoring", url: "https://www.cadit.com/solutions/nodelinx-energy-monitoring" },
              { title: "NodeLinx Equipment Performance Monitoring", url: "https://www.cadit.com/solutions/nodelinx-equipment-performance-monitoring" },
              { title: "NodeLinx Integrated Data Center Management", url: "https://www.cadit.com/solutions/nodelinx-integrated-data-center-management" },
              { title: "EdgeLinx Telematics Management Suite", url: "https://www.cadit.com/telematics" }
            ] },
          { title: "CAE", url: "https://www.cadit.com/solutions/computer-aided-engineering", desc: "Ansys engineering simulation" },
          { title: "PLM", url: "https://www.caditaus.com.au/supporting-technologies/windchill/", desc: "PTC Windchill (CADIT Australia)" },
          { title: "AR / XR", url: "https://cadituk.com/mixed-reality/", desc: "NodeLinx Mixed Reality (CADIT UK)" },
          { title: "SLM", url: "https://cadituk.com/service-lifecycle-management/", desc: "Siemens SLM (CADIT UK)" },
          { title: "ALM", url: "https://www.caditaus.com.au/supporting-technologies/codebeamer/", desc: "PTC Codebeamer (CADIT Australia)" },
        ] },
      { name: "Customer Success Stories",
        items: [
          { title: "BRIN: Multiphase Flow in Porous Rocks", url: "https://caditglobalcom-my.sharepoint.com/:b:/r/personal/haja_johana_cadit_com/Documents/CADIT%20Marketing/Marketing%20Materials/CADIT%20ID/Testimonials/Customer%20Testimonial-Yusron%20Feriadi-BRIN.pdf?d=w560e283e432a42618e9073876bdf2b71&csf=1&web=1&e=Ev3aoK" }
        ] },
      { name: "Training Materials",
        items: [
          { title: "MY Training Catalog 2026", url: "https://caditglobalcom-my.sharepoint.com/:b:/r/personal/haja_johana_cadit_com/Documents/CADIT%20Marketing/Marketing%20Materials/CADIT%20MY/MY%20Training%20Catalog%20All%202026.pdf?d=w576a2125a93845149261a231f9781b9f&csf=1&web=1&e=crlgiZ" }
        ] },
      { name: "Brochures",
        items: [
          { title: "CADIT Company Brochure (Half Fold, PDF)", url: "https://caditglobalcom-my.sharepoint.com/:b:/r/personal/haja_johana_cadit_com/Documents/CADIT%20Marketing/Marketing%20Materials/CADIT%20TH/Half%20Fold%20Brochure.pdf?d=wb0d9ff8910344c34a5a5eff721d66fe8&csf=1&web=1&e=5KioVc" },
          { title: "CADIT Company Brochure (Trifold, PDF)", url: "https://caditglobalcom-my.sharepoint.com/:b:/r/personal/haja_johana_cadit_com/Documents/CADIT%20Marketing/Marketing%20Materials/CADIT%20TH/Trifold%20brochure.pdf?d=w23e16a1ffdc44a279624aa86e95857ad&csf=1&web=1&e=YUGbg0" }
        ] },
      { name: "Other Resources", note: "Approved items that fit no other group.",
        items: [
          { title: "Services", url: "https://www.cadit.com/services/consult", desc: "Consult, Deploy, Train, Support",
            children: [
              { title: "Consult", url: "https://www.cadit.com/services/consult" },
              { title: "Deploy", url: "https://www.cadit.com/services/deploy" },
              { title: "Train", url: "https://www.cadit.com/services/train" },
              { title: "Support", url: "https://www.cadit.com/services/support" }
            ] },
          { title: "Regional CADIT sites", url: "https://www.cadit.com/", desc: "UK / US, Australia, China, Korea, Thailand",
            children: [
              { title: "UK / US", url: "https://cadituk.com/" },
              { title: "Australia", url: "https://www.caditaus.com.au/" },
              { title: "China", url: "https://cadit.com.cn/" },
              { title: "Korea", url: "https://www.caditkr.com" },
              { title: "Thailand", url: "https://cadit.co.th/" }
            ] },
          { title: "Blog", url: "https://www.cadit.com/blog", desc: "News and articles" },
          { title: "Events", url: "https://events.caditglobal.com/", desc: "Upcoming and past events" },
          { title: "About CADIT", url: "https://www.cadit.com/about" },
          { title: "Careers", url: "https://www.cadit.com/about/careers" },
          { title: "Contact", url: "https://www.cadit.com/contact", desc: "sales@cadit.com, +65 6508 7575" }
        ] }
    ]
  },

  // ---------------------------------------------------------
  // ANSYS: structure 
 {
  id: "ansys",
  name: "Ansys",
  home: {
    title: "Open Ansys on cadit.com",
    url: "https://www.cadit.com/products?vendor=ansys"
  },
  homeExtra: { title: "Ansys Customer Portal", url: ANSYS.customerPortal },
  intro: "Ansys resources for CADIT.",
   notice: "Ansys links may require a Synopsys partner account. For access, contact your department's manager or Ansys/Synopsys contact for guidance: Sales, Technical, Operations, or Marketing.",
    // ===== FREQUENTLY USED RESOURCES =====
    featured: { title: "Frequently Used Resources", items: [
      { title: "Ansys Learning Hub", url: ANSYS.learningHub, desc: "Training and learning plans" },
      { title: "Training & Events", url: ANSYS.calendar, desc: "Training and event calendar" },
      { title: "Sales Tools", url: ANSYS.salesTools, desc:"Access sales enablement tools, partner resources, and essential sales references." },
      { title: "Product Support", url: ANSYS.support, desc: "How to get product support" },
      { title: "Partner Portal", url: ANSYS.portal, desc: "Ansys Channel Partner Portal" },
      { title: "Partner Certification", url: "https://webapps.ansys.com/partnerscertification/Profile/MyProfile", desc: "Ansys Partner Certification Program" },
      { title: "AnsysGPT", url: "https://ansysgpt.ansys.com/", desc: "AI assistant for Ansys-related technical questions, product information, and simulation guidance." },
      { title:"Salesforce CRM", url:"https://synopsyspartners.sharepoint.com/sites/SellingatAnsys/SitePages/Salesforce-SFDC.aspx", desc:"Manage customer information, sales opportunities, accounts, and customer interactions."}
    ] },

    // ===== EXPLORE ANSYS RESOURCES (four sections, shown as chips; the first one opens by default) =====
    sectionsTitle: "Explore Ansys Resources",
    sections: [

      // ---------------- SALES ----------------
      { id: "sales", name: "Sales", desc: "Onboarding, training, regional sales, tools",
        intro: "Sales enablement resources, including onboarding, training, regional sales materials, planning templates, and key sales tools.",
        groups: [
                    { name: "Sales: APAC", items: [
            { title: "Sales - APAC Technical Resource Request Process", url: "https://synopsyspartners.sharepoint.com/sites/cptrc/SitePages/APAC.aspx" }
          ] },
          { name: "Sales Onboarding", note: "Onboarding and learning plans are inside the Ansys Learning Hub.", items: [
            { title: "Ansys Learning Hub", url: ANSYS.learningHub, desc: "Sign in, then open Learning Plans." }
          ] },

          { name: "Sales Training", items: [
          
            { title: "New Hire Sales Training", url: "https://synopsyspartners.sharepoint.com/sites/SellingatAnsys/SitePages/Ansys-New-Hire-Sales-Training-Program.aspx" },
            { title: "Sales 101", url: "https://synopsyspartners.sharepoint.com/sites/cpst/SitePages/Sales-101.aspx" },
            { title: "Industry 101: Solution by Industry", url: "https://synopsyspartners.sharepoint.com/sites/cptrc/SitePages/Industry-Training-Resources.aspx" },
          ] },
          { name: "Sales Content Site", note: "Synopsys X Ansys: Sales Kits, 2026 R1 Release, Product Content, Industry Content, Global Partnerships and Programs, Channel Partner Marketing Content, Site Admin Resources", items: [
            { title: "Sales Content Site (home)", url: "https://synopsyspartners.sharepoint.com/sites/SalesContent_Ansys" },
            { title: "Sales Kits: Synopsys & Ansys Co-Selling", url: "https://synopsyspartners.sharepoint.com/sites/SalesContent_Ansys/SitePages/Synopsys-%26-Ansys-Co-Selling---Product-%26-Solutions-Sales-Kits.aspx" },
            { title: "GTM FAQ", url: "https://synopsyspartners.sharepoint.com/sites/SalesContent_Ansys/SitePages/Integration/FAQ.aspx" },
            { title: "Sales Pitch Deck Templates", url: "https://synopsyspartners.sharepoint.com/sites/SalesContent_Ansys/SitePages/Ansys-Standard-Sales-Pitch-Resource-Center.aspx" },
            { title: "Customer Stories & References", url: "https://synopsyspartners.sharepoint.com/sites/SalesContent_Ansys/SitePages/Modern-Search.aspx?f=%5b%7b%22filterName%22%3a%22RefinableString03%22%2c%22values%22%3a%5b%7b%22name%22%3a%22Customer%20Story/Reference%22%2c%22value%22%3a%22%5c%22%C7%82%C7%82437573746f6d65722053746f72792f5265666572656e6365%5c%22%22%2c%22operator%22%3a0%7d%5d%2c%22operator%22%3a%22or%22%7d%5d" },
            { title: "2026 R1 Release Industry Marketing Presentation", url: "https://synopsyspartners.sharepoint.com/:p:/r/sites/SalesContent_Ansys/_layouts/15/Doc.aspx?sourcedoc=%7B24570124-92D9-4C83-93F0-4DE5D3CB572B%7D&file=Industry%20Marketing%20-%20R1%202026%20Release%20Deck%20-%20April%202026.pptx&action=edit&mobileredirect=true" },
            { title: "Document Library (EN)", url: "https://synopsyspartners.sharepoint.com/sites/SalesContent_Ansys/Shared%20Documents/Forms/All%20Documents%202214.aspx?FolderCTID=0x012000513090E67806874996CF4E9F4A226255&id=%2Fsites%2FSalesContent%5FAnsys%2FShared%20Documents%2FEnglish%20Content%20%28EN%29" },
            // FIX C4: Campaign Kits had the same link as Document Library (EN).
            // Replace "#" with the real Campaign Kits link. Until then it shows "link to add".
            { title: "Campaign Kits", url: "https://synopsyspartners.sharepoint.com/sites/ChannelMarketingResourceCenter/SitePages/Campaigns-in-aBox.aspx" },
            { title: "How to Use This Site", url: "https://synopsyspartners.sharepoint.com/sites/SalesContent_Ansys/SitePages/SiteInstructions.aspx" }
          ] },

          { name: "Selling at Ansys: New Hire Sales Training", note: "Learning content from the Selling at Ansys site.", items: [
              { title: "Ansys New Hire Sales: The Basics", url: "https://synopsyspartners.sharepoint.com/sites/SellingatAnsys/SitePages/Sales-New-Hire--The-Basics.aspx" },
            { title: "Sales Essentials", url: "", desc: "Sales process, presentation, products, discovery",
              children: [
                { title: "Ansys Sales Process", url: "https://synopsyspartners.sharepoint.com/sites/SellingatAnsys/SitePages/AnsysSalesProcess.aspx" },
                { title: "Ansys Sales Presentation", url: "https://synopsyspartners.sharepoint.com/sites/SellingatAnsys/SitePages/Ansys-Sales-Presentation.aspx" },
                { title: "Ansys Products", url: "https://synopsyspartners.sharepoint.com/sites/SellingatAnsys/SitePages/Portfolio.aspx" },
                { title: "Discovery Skills", url: "https://synopsyspartners.sharepoint.com/sites/SellingatAnsys/SitePages/Discovery-Skills.aspx" },
              ] },
            { title: "Selling Methodologies", url: "", desc: "8 Pillars of Growth, MEDDIC, messaging, metrics",
              children: [
                { title: "Driving the 8 Pillars of Growth", url: "https://synopsyspartners.sharepoint.com/sites/SellingatAnsys/SitePages/Driving-The-8-Pillars-of-Growth.aspx" },
                { title: "Command of the Message", url: "https://synopsyspartners.sharepoint.com/sites/SellingatAnsys/SitePages/Command-of-the-Message.aspx" },
                { title: "MEDDIC", url: "https://synopsyspartners.sharepoint.com/sites/SellingatAnsys/SitePages/MEDDIC.aspx" },
                { title: "Value Negotiation", url: "https://synopsyspartners.sharepoint.com/sites/SellingatAnsys/SitePages/Value-Negotiation.aspx" },
                { title: "Understanding Metrics", url: "https://synopsyspartners.sharepoint.com/sites/SellingatAnsys/SitePages/Metrics.aspx" }
              ] },
            { title: "Sales Strategy & Teamwork", url: "", desc: "Solutions selling, reviews, senior access",
              children: [
                { title: "Selling Solutions", url: "https://synopsyspartners.sharepoint.com/sites/SellingatAnsys/SitePages/Selling-Solutions.aspx" },
                { title: "Opportunity Reviews", url: "https://synopsyspartners.sharepoint.com/sites/SellingatAnsys/SitePages/Opportunity-Review.aspx" },
                { title: "Gaining Access to Senior Management (CXOs)", url: "https://synopsyspartners.sharepoint.com/sites/SellingatAnsys/SitePages/Gaining-Access-to-Senior-Management-(CXOs).aspx" },
                { title: "N&ET: Sales Specialists", url: "https://synopsyspartners.sharepoint.com/sites/SellingatAnsys/SitePages/Overlays-%26-Product-Experts.aspx#summary-the-power-of-one-ansys" }
              ] },
              { title: "Mastering Financial Acumen for Sales", url: "https://synopsyspartners.sharepoint.com/sites/SellingatAnsys/SitePages/Sales-Mini-MBA.aspx" },
              { title: "Company Assessments", url: "https://synopsyspartners.sharepoint.com/:p:/r/sites/SellingatAnsys/_layouts/15/Doc.aspx?sourcedoc=%7B7979D428-1768-4F4A-A407-2950B5811F6D%7D&file=Company-Simulation%20Assessments%20-05112022_TAMSummit2022_Assessments.pptx&action=edit&mobileredirect=true" },

            { title:"Site Pages", url:"https://synopsyspartners.sharepoint.com/sites/SellingatAnsys/_layouts/15/SeeAll.aspx?Page=%2Fsites%2FSellingatAnsys%2FSitePages%2FHome.aspx&InstanceId=4e1226a4-4a04-45ce-a3ce-31d665383332"},
          ] },
           { name: "Planning Templates", note: "Territory, account and activity planning templates (originally on the Americas resource page).", items: [
            { title: "Territory Planning Guide", url: "https://synopsyspartners.sharepoint.com/:p:/r/sites/cpsrc/_layouts/15/Doc.aspx?sourcedoc=%7B9BFFC0E9-CC9C-455E-99D5-8DD9F5EA28B8%7D&file=Territory%20Planning%20Guide.pptx&action=edit&mobileredirect=true", desc: "Territory profile and account segmentation" },
            { title: "Territory Planning Worksheet", url: "https://synopsyspartners.sharepoint.com/:x:/r/sites/cpsrc/_layouts/15/Doc.aspx?sourcedoc=%7BE772E2E8-6C6E-4469-B333-99EAAC246BFF%7D&file=2025%20Channel%20Territory%20Planning%20Template%20Final.xlsx&action=default&mobileredirect=true" },
            { title: "Account Planning Template", url: "https://synopsyspartners.sharepoint.com/:p:/r/sites/cpsrc/_layouts/15/Doc.aspx?sourcedoc=%7B4D6AA6CF-D75D-440F-A592-83CC825F81E9%7D&file=Momentum%20Account%20Plan%20Template%202025.pptx&action=edit&mobileredirect=true" },
            { title: "Account Activity Tracker Template", url: "https://synopsyspartners.sharepoint.com/:x:/r/sites/cpsrc/_layouts/15/Doc.aspx?sourcedoc=%7B9D1FC1F5-10E9-4B74-9356-DF4DBE1F3A96%7D&file=AccountTrackerTemplateForChannelRev1March2022.xlsx&action=default&mobileredirect=true" },
            { title: "Account Tracking (video)", url: "https://synopsyspartners.sharepoint.com/sites/cpsrc/_layouts/15/stream.aspx?id=%2Fsites%2Fcpsrc%2FChannel%20Partner%20Sales%20Resource%20Documents%20And%20Recor%2FAmericas%20Resources%20and%20Docs%2FAccountTrackerTemplate%2FHowToVideoAccountTracking%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E0d5b07be%2D9b81%2D4866%2Db1d3%2D025847d85a5d" },
            { title: "Customer Whitespace Review (Excel template)", url: "https://synopsyspartners.sharepoint.com/:x:/r/sites/cpsrc/_layouts/15/Doc.aspx?sourcedoc=%7B4F21B82D-FD0D-463D-B149-55F33CE9D40B%7D&file=AccountWhiteSpaceAutomatedTemplate.xlsx&action=default&mobileredirect=true" }
          ] },

          { name: "Sales: Americas", items: [
            { title: "Core Sales Resources", url: "https://synopsyspartners.sharepoint.com/sites/cpsrc/SitePages/Channel-Sales-Americas---Resource-Page.aspx", desc: "Scroll down to last section for Americas Channel Partner Sales Documents & Recordings (document library)"},
            { title: "Account Lookup Tool", url: "https://synopsyspartners.sharepoint.com/sites/cpsrc/SitePages/Account-Lookup.aspx" },
            { title: "Marketing Events & Webinars", url: "https://www.ansys.com/events#t=EventsTab&sort=date%20descending&numberOfResults=20" },
          ] },


          { name: "Sales: EMEA", items: [
            { title: "Channel Sales Forum", url: "https://synopsyspartners.sharepoint.com/sites/cpsrc/SitePages/Channel-Sales-Forum.aspx" },
            { title: "Sales Manager Round Table", url: "https://synopsyspartners.sharepoint.com/sites/cpsrc/SitePages/Sales-Manager-Round-Table.aspx" },
            { title: "EMEA Documents & Recordings", url: "https://synopsyspartners.sharepoint.com/sites/cpsrc/SitePages/Sales-Development-EMEA.aspx", desc: "Scroll down to last section for EMEA Channel Partner Sales Documents & Recordings (document library)" }
          ] },

          { name: "Sales Tools & Quick Links", items: [
            { title: "2026 R1 Release Highlights", url: ANSYS.r1Highlights },
            { title: "Channel Sales Best Practices", url: ANSYS.bestPractices },
            { title: "Ansys Pricing", url: ANSYS.pricing },
            { title: "Deal Registration", url: ANSYS.dealReg },
            { title: "Sales GPT", url: ANSYS.salesGPT },
            { title: "Market IQ", url: ANSYS.marketIQ }
          ] }
        ] },

      // ---------------- TECHNICAL ----------------
      { id: "technical", name: "Technical", desc: "Training, ideas portals, technical resources, and documentation",
        intro: "Access technical training, product resources, engineering support, technology updates, and documentation to support your technical work with Ansys products.",
        groups: [
          { name: "Technical", items: [
            { title: "Training resources", url: "https://synopsyspartners.sharepoint.com/sites/cptt" },
            { title: "New & Emerging Technologies", url: "https://synopsyspartners.sharepoint.com/sites/cptt/SitePages/Information-on-New-Products.aspx" },
            { title: "Technical resources", url: "https://synopsyspartners.sharepoint.com/sites/cptrc" }
          ] },
          { name: "Ideas Portal Links", items: [
            { title: "Structures Ideas Portal", url: "https://ansys-structures.ideas.aha.io/portal_session/new" },
            { title: "Electronic Ideas Portal", url: "https://ansys-electronics.ideas.aha.io/portal_session/new" },
            { title: "Material Ideas Portal", url: "https://ansys-materials.ideas.aha.io/portal_session/new" },
            { title: "AI Ideas Portal", url: "https://ansys-simai.ideas.aha.io/portal_session/new" },
            { title: "Fluids Ideas Portal", url: "https://ansys-fluids.ideas.aha.io/portal_session/new" },
            { title: "3D Ideas Portal", url: "https://ansys-design.ideas.aha.io/portal_session/new" }
          ] },
          {
            name:"Documents", items: [
              { title: "Technical Documentation and Reference Materials", url: "https://synopsyspartners.sharepoint.com/sites/cptrc/_layouts/15/SeeAll.aspx?Page=%2Fsites%2Fcptrc%2FSitePages%2FHome.aspx&InstanceId=f078392e-7eed-43fc-93b2-92dda89bac3c", desc:"Find technical documentation and reference materials through the Ansys Technical Resource Center document library" }
            ]

          }
        ] },

      // ---------------- OPERATIONS ----------------
      { id: "operations", name: "Operations", desc: "Deal operations, channel operations, commercial",
        intro: "Operational resources for channel partners, covering deal management, channel operations, system access, pricing, and commercial processes.",
        groups: [
          { name: "Deal Operations", items: [
                { title: "Deal Operations Home", url: "https://synopsyspartners.sharepoint.com/sites/DealOperations_Ansys/SitePages/Meet-the-Channel-Partner-Team.aspx" },
                { title: "What's New: Channel Partners", url: "https://synopsyspartners.sharepoint.com/sites/DealOperations_Ansys/SitePages/What's-New---Channel-Partners.aspx?csf=1&web=1&e=wbbarq" },
                { title: "CPQ Quote Review Checklist", url: "https://synopsyspartners.sharepoint.com/:x:/r/sites/DealOperations_Ansys/_layouts/15/Doc.aspx?sourcedoc=%7B775ECD50-0220-43FB-9C84-255C7AEA1761%7D&file=CPQ%20Quote%20Review%20Checklist.xlsx&action=default&mobileredirect=true" },
                { title: "Channel Partner Order Processing Policy", url: "https://synopsyspartners.sharepoint.com/sites/DealOperations_Ansys/SitePages/Channel-Partner-Order-Processing-Policy.aspx" }
          ] },
          { name: "Channel Operations", items: [
            { title: "2026 APEX, ELITE and SELECT Partners", url: "https://synopsyspartners.sharepoint.com/sites/cpo/SitePages/Ansys-Elite-Partners.aspx?web=1" },
            { title: "Channel Capacity Update", url: "https://synopsyspartners.sharepoint.com/sites/cpo/SitePages/Elite-Channel-Partner-Program(1).aspx" },
            { title: "CP Bundle License: 2026 Renewal", url: "https://synopsyspartners.sharepoint.com/sites/cpo/SitePages/License-Keys-for-Channel-Partners.aspx" },
            { title: "System Access for Channel Partners", url: "https://synopsyspartners.sharepoint.com/sites/cpo/SitePages/System%20Access%20for%20Channel%20Partners.aspx" },
            { title: "OPF Template", url: "https://synopsyspartners.sharepoint.com/sites/cpo/Shared%20Documents/OPF%20Template/OPF%20TEMPLATE_WW_updated01062026.docx" },
          ] },
          { name: "Deal and Commercial", items: [
            { title: "Global Deal Desk", url: ANSYS.dealDesk },
            { title: "Academic Program", url: ANSYS.academic },
            { title: "Startup Program Site", url: ANSYS.startup }
          ] }
        ] },

      // ---------------- MARKETING ----------------
      { id: "marketing", name: "Marketing", desc: "Marketing center, events, logos, campaign kits",
        intro: "Explore Ansys channel marketing resources, provide feedback to the marketing team, and connect with the people behind channel marketing.",
        groups: [
          { name: "Marketing", items: [
                { title: "Channel Marketing Resource Center", url: "https://synopsyspartners.sharepoint.com/sites/ChannelMarketingResourceCenter", desc: "Scroll down to Meet The Faces Behind Channel Marketing"},
                { title: "Events", url: "https://synopsyspartners.sharepoint.com/sites/ChannelMarketingResourceCenter/SitePages/Ansys-Live.aspx", desc: "Regional event calendars and event inquiry form" },
                { title: "Ansys Logo & Icon Library", url: "https://synopsyspartners.sharepoint.com/sites/ChannelMarketingResourceCenter/SitePages/Ansys-Logo-+-Icon-Library.aspx" },
                { title: "Partner Guidelines", url: "https://synopsyspartners.sharepoint.com/sites/ChannelMarketingResourceCenter/SitePages/Branding-Guidelines.aspx", desc: "MDF, branding, paid media" },     
                  { title: "Feedback Form", url: "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=Z87GNLgV_06A6VLai-iXBuI6Zbcc5W1OqS7kMnijdFNUREZQMjZQUkQ1SzJDUVM4VzhSVkVZVU5ZOS4u", desc: "Submit your feedback to Ansys Marketing" },
          ] }
        ] }
    ],
  },

  // ---------------------------------------------------------
  {
    id: "toffeex", name: "ToffeeX",
    home: { title: "Contact CADIT about ToffeeX", url: "https://www.cadit.com/contact" },
    intro: "ToffeeX through CADIT.",
    groups: [
       { name: "ToffeeX", items: [
        {title:"Official ToffeeX website", url:"https://www.toffeex.com/"},
      ] },
      {
        name:"Case Studies & Presentations", items: [
          { title: "ToffeeX - How It Works, Advanced Cooling, Microchannels", url: "https://caditglobalcom.sharepoint.com/:b:/r/sites/MarkClerb/Marketing%20Hub/08_Partner%20Marketing/ToffeeX/ToffeeX%20Screens/ToffeeX%20%E2%80%93%20How%20It%20Works,%20Advanced%20Cooling,%20Microchannels.pdf?d=w9166c64be4a44416acbc8f2b832134ab&csf=1&web=1"},
          { title: "ToffeeX Data Centre Examples", url: "https://caditglobalcom.sharepoint.com/:p:/r/sites/MarkClerb/Marketing%20Hub/08_Partner%20Marketing/ToffeeX/ToffeeX%20Screens/ToffeeX%20Data%20Centre%20Examples.pptx?d=w51c2dce6fc554609ae4d2f95d70d1c4f&csf=1&web=1" },
          { title: "ToffeeX Electronics Cooling, Microchannel", url: "https://caditglobalcom.sharepoint.com/:p:/r/sites/MarkClerb/Marketing%20Hub/08_Partner%20Marketing/ToffeeX/ToffeeX%20Screens/ToffeeX%20Electronics%20Cooling,%20Microchannel.pptx?d=we127d1aa6f2f4fac8e4ff1656ea60a6d&csf=1&web=1" },
        ]
      }
    ]
  },

  // ---------------------------------------------------------
  // OTHER PARTNERS: every link here comes from www.cadit.com
  {
    id: "partners", name: "Other Partners",
    home: { title: "All partner products on cadit.com", url: "https://www.cadit.com/products" },
    intro: "CADIT partners other than Ansys and ToffeeX. All links come from www.cadit.com.",
    groups: [
      { name: "PTC", note: "Total Systems Integrator since 2016.", items: [
        { title: "PTC products", url: "https://www.cadit.com/products?vendor=ptc", desc: "Explore PTC for ASEAN and ANZ" },
        { title: "Thingworx NodeLinx apps", url: "https://www.caditglobal.com/id/products/ptc-thingworx-manufacturing-apps", desc: "IIOT package" },
        { title: "PTC Windchill (PLM)", url: "https://www.caditaus.com.au/supporting-technologies/windchill/" },
        { title: "PTC Codebeamer (ALM)", url: "https://www.caditaus.com.au/supporting-technologies/codebeamer/" },
        { title: "About PTC", url: "https://www.ptc.com/en/about", desc: "Linked from cadit.com" }
      ] },
      { name: "Autodesk Moldflow", items: [
        { title: "Autodesk Moldflow", url: "https://www.autodesk.com/products/moldflow/features", desc: "Offered for China" }
      ] },
      { name: "monday.com", note: "CADIT is a monday.com Channel Partner.", items: [
        { title: "monday.com products", url: "https://monday.com/" },
        { title: "monday Evolve Singapore 2026", url: "https://www.cadit.com/blog/monday-evolve-singapore-2026" },
        { title: "Lunch and Learn: AI work platform in action", url: "https://www.cadit.com/blog/lunch-learn-experience-the-best-ai-work-platform-in-action" }
      ] },
      { name: "Siemens", items: [
        { title: "Siemens SLM (Service Lifecycle Management)", url: "https://cadituk.com/service-lifecycle-management/", desc: "CADIT UK" }
      ] }
    ]
  }

];
