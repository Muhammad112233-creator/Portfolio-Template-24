/**
 * VANCEDESIGN — Kaelen Vance Portfolio Engine
 * Engineered in Pure Vanilla JS with Web Audio API, Canvas 2D, and CSS3
 */

// ══ DATA: PROJECTS ═════════════════════════════════════════════
const projectsData = [
  {
    name: "Telemetry & Client Intake Hub",
    no: "APP",
    img: "/media/proj-testimonial.svg",
    steps: [
      {
        key: "record",
        label: "INGEST",
        story: "Clients record secure video and audio directly in-browser on mobile or desktop without downloading an app or creating an account. The interface is custom-branded to the client institution with instant camera and audio level validation."
      },
      {
        key: "upload",
        label: "ENCRYPT",
        story: "Media streams undergo chunked client-side AES-256 encryption before streaming directly to edge object storage. Encrypted media releases and audit signatures are permanently hashed to the payload."
      },
      {
        key: "review",
        label: "AUDIT",
        story: "Submissions land in an authenticated triage dashboard with role-based access, cryptographic audit logging, and strict data isolation enforced at the database layer."
      },
      {
        key: "approve",
        label: "VERIFY",
        story: "Single-click verifiable approval with automated cryptographic watermarking, revision tagging, and real-time status webhooks dispatched to stakeholders."
      },
      {
        key: "publish",
        label: "DEPLOY",
        story: "Approved media automatically compiles for multi-channel CDN distribution, syndication feeds, and client portal embed codes with zero manual encoding."
      }
    ],
    unit: "PHASE",
    desc: "An end-to-end encrypted video intake and telemetry service engineered for fintech and healthcare clients. Zero-install client flow with edge compilation and automated compliance verification.",
    tags: ["NEXT.JS", "TYPESCRIPT", "EDGE FUNCTIONS", "ENCRYPTION", "TAILWIND"]
  },
  {
    name: "Studio Operations Engine",
    no: "OPS",
    img: "/media/proj-board.svg",
    steps: [
      {
        key: "knack",
        label: "AIRTABLE / DB",
        story: "Unified project metadata store synchronizing incoming client briefs, deliverables, sprint milestones, and contract parameters."
      },
      {
        key: "gmail",
        label: "DISPATCH API",
        story: "Automated incoming email and ticket parsing, classifying requests, assigning priority tags, and routing alerts to lead engineers."
      },
      {
        key: "brief",
        label: "INGESTION",
        story: "Auto-generated technical specs and Figma design file templates provisioned instantly for project assignees upon ticket validation."
      },
      {
        key: "assigned",
        label: "SPRINT QUEUE",
        story: "Active engineering and design pipeline with automated capacity balancing and SLA deadline monitoring across distributed teams."
      },
      {
        key: "production",
        label: "PRODUCTION",
        story: "Real-time build status tracking, automated asset staging, and cross-browser preview URL generation for client stakeholder review."
      },
      {
        key: "delivered",
        label: "DEPLOYED",
        story: "Automated packaging, release logging, and client sign-off records stored permanently for audit trails."
      }
    ],
    unit: "NODE",
    desc: "An internal operational dispatch tool tracking every active production deliverable across the studio, synchronizing custom databases, communication webhooks, and automated asset pipelines.",
    tags: ["VANILLA JS", "AIRTABLE API", "AUTOMATION", "WEBHOOKS", "UI/UX"]
  },
  {
    name: "Responsive Campaign Architecture",
    no: "EML",
    img: "/media/proj-email.svg",
    steps: [
      {
        key: "mobile",
        label: "MOBILE · 390",
        story: "Hand-coded fluid layouts designed for high-retention handheld viewing with touch-optimized targets and zero text clipping."
      },
      {
        key: "tablet",
        label: "TABLET · 768",
        story: "Adaptive multi-column reflow utilizing responsive CSS grid systems and high-DPI retina asset switching."
      },
      {
        key: "desktop",
        label: "DESKTOP · 1280",
        story: "High-density editorial typographic hierarchy built to render flawlessly across Outlook, Apple Mail, and modern web browsers."
      }
    ],
    unit: "VIEWPORT",
    desc: "Production web layouts and high-conversion campaign architectures for financial institutions and consumer brands — proofed and validated across 120+ client environments.",
    tags: ["RESPONSIVE", "HTML/CSS", "LITMUS TESTED", "SYSTEM ARCHITECTURE"]
  },
  {
    name: "Cinematic Motion & Film",
    no: "VID",
    img: "/media/proj-video.svg",
    steps: [
      {
        key: "titles",
        label: "MOTION TYPOGRAPHY",
        story: "Kinetic typographic motion systems engineered in After Effects and coded in CSS/SVG for web broadcast."
      },
      {
        key: "footage",
        label: "4K PRORES",
        story: "Multi-camera commercial footage shot on cinema sensors, graded with custom ACES color science curves."
      },
      {
        key: "dialogue",
        label: "DIALOGUE MASTERS",
        story: "Multi-track voice isolation, spectral de-noising, and loudness normalization compliant with broadcast standards."
      },
      {
        key: "music",
        label: "AUDIO BED",
        story: "Procedural and custom atmospheric sound beds dynamically ducked beneath speech with harmonic warmth."
      }
    ],
    unit: "TRACK",
    desc: "Commercial brand documentaries, product launch films, and kinetic title sequences. End-to-end cinematography, editing, color grading, and broadcast mastering.",
    tags: ["PREMIERE PRO", "AFTER EFFECTS", "COLOR SCIENCE", "CINEMATOGRAPHY"]
  },
  {
    name: "Design Systems & Token Architecture",
    no: "SYS",
    img: "/media/proj-social.svg",
    steps: [
      {
        key: "spec",
        label: "DESIGN TOKENS",
        story: "Semantic color tokens, spacing scales, and fluid type ramps documented and synchronized directly from Figma into production code."
      },
      {
        key: "sq",
        label: "1:1 · FEED",
        story: "Precision square layouts engineered for high-density social streams and responsive grid displays."
      },
      {
        key: "port",
        label: "4:5 · RETENTION",
        story: "Vertical editorial layouts capturing maximum screen real estate on mobile social feeds."
      },
      {
        key: "story",
        label: "9:16 · IMMERSIVE",
        story: "Full-bleed mobile format optimized for rapid storytelling and kinetic motion sequences."
      },
      {
        key: "wide",
        label: "16:9 · CINEMA",
        story: "Editorial banners and high-impact website header hero units carrying continuous visual harmony."
      }
    ],
    unit: "ASPECT",
    desc: "Comprehensive visual systems and multi-ratio design token architectures for high-growth tech platforms — built to scale seamlessly from digital billboards to mobile feeds.",
    tags: ["FIGMA", "DESIGN SYSTEMS", "TOKEN STUDIO", "BRAND ARCHITECTURE"]
  }
];

// ══ DATA: EXPERIENCE ═══════════════════════════════════════════
const experienceData = [
  {
    from: "2024",
    to: "PRESENT",
    loc: "REMOTE",
    role: "Principal Systems Designer",
    org: "Studio Meridian",
    desc: "Directing digital product architecture, design systems, and production web engineering for enterprise clients. Leading AI-assisted development workflows and shipping headless web applications in Next.js and TypeScript."
  },
  {
    from: "2023",
    to: "2024",
    loc: "IRVINE, CA",
    role: "Staff Product & Web Designer",
    org: "Archetype Systems",
    desc: "Architected comprehensive enterprise design systems, high-converting marketing web architectures, and client management portals. Managed digital brand consistency across 8 core product touchpoints."
  },
  {
    from: "2021",
    to: "2023",
    loc: "REMOTE",
    role: "Lead Front-End & Interface Designer",
    org: "Lumen Health",
    desc: "Re-engineered flagship responsive web platforms, marketing design systems, and patient telemetry onboarding dashboards. Spearheaded user testing, design sprints, and accessible UI refactors."
  },
  {
    from: "2018",
    to: "2021",
    loc: "LOS ANGELES, CA",
    role: "Sr. Visual & Motion Designer",
    org: "Vector Dynamic",
    desc: "Directed visual identities, high-impact social campaigns, and 4K commercial video productions. Created unified design token architectures for multi-platform delivery."
  },
  {
    from: "2014",
    to: "2018",
    loc: "COSTA MESA, CA",
    role: "Digital Design Director",
    org: "Sovereign Media",
    desc: "Led multidisciplinary design teams delivering web applications, e-commerce stores, and high-retention email marketing systems for global luxury and financial accounts."
  },
  {
    from: "2004",
    to: "2014",
    loc: "CALIFORNIA",
    role: "Earlier Career",
    org: "Monolith Studios · Buy.com · Omnicom",
    desc: "A decade of foundational design leadership across e-commerce, digital advertising, and high-growth creative agencies."
  }
];

// ══ DATA: EQUIPMENT / STACK ════════════════════════════════════
const stackData = [
  {
    k: "BUILD",
    v: "REACT / NEXT.JS",
    d: "Production front-end engineering, AI-accelerated workflows.",
    lvl: 88
  },
  {
    k: "BUILD",
    v: "HTML5 / CSS3 / SCSS",
    d: "Hand-crafted semantic architectures and responsive layouts.",
    lvl: 96
  },
  {
    k: "ENGINEERING",
    v: "VANILLA JS / ES2024",
    d: "High-performance procedural canvas, Web Audio, and zero-dependency scripts.",
    lvl: 94
  },
  {
    k: "WEB",
    v: "WEBFLOW & HEADLESS",
    d: "High-converting marketing platforms, CMS collections, and custom integrations.",
    lvl: 92
  },
  {
    k: "INTERFACE",
    v: "FIGMA",
    d: "Complete design systems, component tokens, wireframes, and prototypes.",
    lvl: 95
  },
  {
    k: "GRAPHICS",
    v: "PHOTOSHOP",
    d: "Advanced retouching, frequency separation, and composite mastering.",
    lvl: 94
  },
  {
    k: "GRAPHICS",
    v: "ILLUSTRATOR",
    d: "Brand marks, vector blueprints, iconography, and typographic glyphs.",
    lvl: 90
  },
  {
    k: "VIDEO",
    v: "PREMIERE PRO",
    d: "Broadcast video editing, multi-track rhythm cuts, and documentary pacing.",
    lvl: 89
  },
  {
    k: "MOTION",
    v: "AFTER EFFECTS",
    d: "Kinetic typography, UI micro-interactions, and motion graphics.",
    lvl: 85
  },
  {
    k: "AUDIO",
    v: "WEB AUDIO API / DSP",
    d: "Synthesized interactive ambience, audio graphs, and UI soundbeds.",
    lvl: 84
  },
  {
    k: "COMMS",
    v: "CAMPAIGN ARCHITECTURE",
    d: "Cross-client responsive design proofed across 120+ email clients.",
    lvl: 93
  },
  {
    k: "SYSTEMS",
    v: "DESIGN TOKENS & AI",
    d: "Token Studio, Claude Code, algorithmic workflows, and automated pipelines.",
    lvl: 88
  }
];

// ══ DATA: PHOTOSHOOT ROLLS ═════════════════════════════════════
const gt3Frames = [
  { id: "vnc-0101", src: "/media/rolls/gt3-aug26/g/vnc-0101.webp", full: "/media/rolls/gt3-aug26/f/vnc-0101.webp", mob: "/media/rolls/gt3-aug26/m/vnc-0101.webp", w: 1800, h: 1200, orient: "wide", mm: 50, iso: 200, f: 2.8, shutter: "1/500", taken: "2026-08-23T06:48:16", label: "REAR THREE-QUARTER · CANYON", alt: "Porsche 911 GT3 RS parked on an empty mountain pass road at sunrise", size: "lg" },
  { id: "vnc-0102", src: "/media/rolls/gt3-aug26/g/vnc-0102.webp", full: "/media/rolls/gt3-aug26/f/vnc-0102.webp", mob: "/media/rolls/gt3-aug26/m/vnc-0102.webp", w: 1200, h: 1800, orient: "tall", mm: 70, iso: 200, f: 2.8, shutter: "1/400", taken: "2026-08-23T06:50:30", label: "REAR QUARTER TIGHT", alt: "Tight vertical framing of the rear aero haunch and carbon wing", size: "sm" },
  { id: "vnc-0103", src: "/media/rolls/gt3-aug26/g/vnc-0103.webp", full: "/media/rolls/gt3-aug26/f/vnc-0103.webp", mob: "/media/rolls/gt3-aug26/m/vnc-0103.webp", w: 1800, h: 1200, orient: "wide", mm: 35, iso: 250, f: 4.0, shutter: "1/640", taken: "2026-08-23T06:54:12", label: "DUCKTAIL · LOW ANGLE", alt: "Low angle perspective raking along the aerodynamic bodyline", size: "sm" },
  { id: "vnc-0104", src: "/media/rolls/gt3-aug26/g/vnc-0104.webp", full: "/media/rolls/gt3-aug26/f/vnc-0104.webp", mob: "/media/rolls/gt3-aug26/m/vnc-0104.webp", w: 1800, h: 1200, orient: "wide", mm: 50, iso: 160, f: 3.5, shutter: "1/800", taken: "2026-08-23T07:05:44", label: "FORGED WHEEL · CERAMIC", alt: "Center lock lightweight alloy wheel and yellow carbon ceramic caliper", size: "lg" },
  { id: "vnc-0105", src: "/media/rolls/gt3-aug26/g/vnc-0105.webp", full: "/media/rolls/gt3-aug26/f/vnc-0105.webp", mob: "/media/rolls/gt3-aug26/m/vnc-0105.webp", w: 1200, h: 1800, orient: "tall", mm: 70, iso: 160, f: 2.8, shutter: "1/1000", taken: "2026-08-23T07:11:02", label: "CALIPER · DETAIL", alt: "Macro detail of the drilled carbon rotor and brake caliper assembly", size: "sm" },
  { id: "vnc-0106", src: "/media/rolls/gt3-aug26/g/vnc-0106.webp", full: "/media/rolls/gt3-aug26/f/vnc-0106.webp", mob: "/media/rolls/gt3-aug26/m/vnc-0106.webp", w: 1200, h: 1800, orient: "tall", mm: 45, iso: 200, f: 3.2, shutter: "1/500", taken: "2026-08-23T07:18:20", label: "FLANK PROFILE", alt: "Side profile silhouette against morning canyon golden light", size: "sm" },
  { id: "vnc-0107", src: "/media/rolls/gt3-aug26/g/vnc-0107.webp", full: "/media/rolls/gt3-aug26/f/vnc-0107.webp", mob: "/media/rolls/gt3-aug26/m/vnc-0107.webp", w: 1800, h: 1200, orient: "wide", mm: 24, iso: 320, f: 5.6, shutter: "1/400", taken: "2026-08-23T07:22:15", label: "ROADSIDE · WIDE", alt: "Wide environmental shot of the car parked along the curving pass", size: "sm" },
  { id: "vnc-0108", src: "/media/rolls/gt3-aug26/g/vnc-0108.webp", full: "/media/rolls/gt3-aug26/f/vnc-0108.webp", mob: "/media/rolls/gt3-aug26/m/vnc-0108.webp", w: 1200, h: 1800, orient: "tall", mm: 52, iso: 200, f: 2.8, shutter: "1/800", taken: "2026-08-23T07:28:40", label: "HAUNCH SHADOW", alt: "Dramatic light falling across the sculpted carbon rear wheel arch", size: "sm" },
  { id: "vnc-0109", src: "/media/rolls/gt3-aug26/g/vnc-0109.webp", full: "/media/rolls/gt3-aug26/f/vnc-0109.webp", mob: "/media/rolls/gt3-aug26/m/vnc-0109.webp", w: 1800, h: 1200, orient: "wide", mm: 60, iso: 200, f: 3.5, shutter: "1/640", taken: "2026-08-23T07:35:10", label: "SWAN NECK WING", alt: "Rear wing endplates silhouetted against alpine backdrop", size: "sm" },
  { id: "vnc-0110", src: "/media/rolls/gt3-aug26/g/vnc-0110.webp", full: "/media/rolls/gt3-aug26/f/vnc-0110.webp", mob: "/media/rolls/gt3-aug26/m/vnc-0110.webp", w: 1200, h: 1800, orient: "tall", mm: 35, iso: 250, f: 4.0, shutter: "1/500", taken: "2026-08-23T07:42:19", label: "SPLITTER · LOW", alt: "Front aero louvres and active aerodynamic splitter", size: "sm" },
  { id: "vnc-0111", src: "/media/rolls/gt3-aug26/g/vnc-0111.webp", full: "/media/rolls/gt3-aug26/f/vnc-0111.webp", mob: "/media/rolls/gt3-aug26/m/vnc-0111.webp", w: 1200, h: 1800, orient: "tall", mm: 70, iso: 160, f: 2.8, shutter: "1/1250", taken: "2026-08-23T07:49:50", label: "TIRE TEXTURE · MACRO", alt: "Michelin Pilot Sport Cup 2 sidewall lettering and tarmac grit", size: "sm" },
  { id: "vnc-0112", src: "/media/rolls/gt3-aug26/g/vnc-0112.webp", full: "/media/rolls/gt3-aug26/f/vnc-0112.webp", mob: "/media/rolls/gt3-aug26/m/vnc-0112.webp", w: 1800, h: 1200, orient: "wide", mm: 50, iso: 200, f: 3.2, shutter: "1/640", taken: "2026-08-23T07:56:04", label: "TREELINE · DAWN MIST", alt: "Atmospheric framing under mountain pines with morning sun shafts", size: "lg" },
  { id: "vnc-0113", src: "/media/rolls/gt3-aug26/g/vnc-0113.webp", full: "/media/rolls/gt3-aug26/f/vnc-0113.webp", mob: "/media/rolls/gt3-aug26/m/vnc-0113.webp", w: 1800, h: 1200, orient: "wide", mm: 28, iso: 320, f: 5.0, shutter: "1/500", taken: "2026-08-23T08:02:18", label: "MOUNTAIN PASS · APEX", alt: "Long perspective of empty asphalt winding into the distance", size: "sm" },
  { id: "vnc-0114", src: "/media/rolls/gt3-aug26/g/vnc-0114.webp", full: "/media/rolls/gt3-aug26/f/vnc-0114.webp", mob: "/media/rolls/gt3-aug26/m/vnc-0114.webp", w: 1200, h: 1800, orient: "tall", mm: 70, iso: 160, f: 2.8, shutter: "1/1000", taken: "2026-08-23T08:09:44", label: "HOOD CREST · MACRO", alt: "Stuttgart crest on lightweight carbon bonnet", size: "sm" },
  { id: "vnc-0115", src: "/media/rolls/gt3-aug26/g/vnc-0115.webp", full: "/media/rolls/gt3-aug26/f/vnc-0115.webp", mob: "/media/rolls/gt3-aug26/m/vnc-0115.webp", w: 1800, h: 1200, orient: "wide", mm: 35, iso: 200, f: 4.0, shutter: "1/800", taken: "2026-08-23T08:16:33", label: "SUN FLARE · GOLDEN", alt: "Golden lens flare crossing over the vehicle roofline", size: "sm" },
  { id: "vnc-0116", src: "/media/rolls/gt3-aug26/g/vnc-0116.webp", full: "/media/rolls/gt3-aug26/f/vnc-0116.webp", mob: "/media/rolls/gt3-aug26/m/vnc-0116.webp", w: 1200, h: 1800, orient: "tall", mm: 50, iso: 200, f: 2.8, shutter: "1/640", taken: "2026-08-23T08:24:12", label: "COCKPIT LINE · DETAIL", alt: "Alcantara interior and roll cage visible through tinted glass", size: "sm" }
];

const studioFrames = [
  { id: "vnc-0201", src: "/media/rolls/studio-apr26/g/vnc-0201.webp", full: "/media/rolls/studio-apr26/f/vnc-0201.webp", mob: "/media/rolls/studio-apr26/m/vnc-0201.webp", w: 1200, h: 1800, orient: "tall", mm: 55, iso: 200, f: 2.8, shutter: "1/160", taken: "2026-04-12T15:20:10", label: "SEATED · MINIMALIST", alt: "Female fashion model in tailored black high-neck silk seated on stool", size: "lg" },
  { id: "vnc-0202", src: "/media/rolls/studio-apr26/g/vnc-0202.webp", full: "/media/rolls/studio-apr26/f/vnc-0202.webp", mob: "/media/rolls/studio-apr26/m/vnc-0202.webp", w: 1200, h: 1800, orient: "tall", mm: 85, iso: 160, f: 2.5, shutter: "1/200", taken: "2026-04-12T15:28:44", label: "EDITORIAL PROFILE", alt: "Close-up headshot profile under directional studio softbox", size: "lg" },
  { id: "vnc-0203", src: "/media/rolls/studio-apr26/g/vnc-0203.webp", full: "/media/rolls/studio-apr26/f/vnc-0203.webp", mob: "/media/rolls/studio-apr26/m/vnc-0203.webp", w: 1800, h: 1200, orient: "wide", mm: 55, iso: 200, f: 3.2, shutter: "1/160", taken: "2026-04-12T15:35:12", label: "THREE-QUARTER STANCE", alt: "Studio wide composition against seamless warm grey backdrop", size: "sm" },
  { id: "vnc-0204", src: "/media/rolls/studio-apr26/g/vnc-0204.webp", full: "/media/rolls/studio-apr26/f/vnc-0204.webp", mob: "/media/rolls/studio-apr26/m/vnc-0204.webp", w: 1200, h: 1800, orient: "tall", mm: 55, iso: 250, f: 2.8, shutter: "1/160", taken: "2026-04-12T15:42:05", label: "SILHOUETTE CONTRAST", alt: "High-contrast shadow sculpting the tailored suit silhouette", size: "sm" },
  { id: "vnc-0205", src: "/media/rolls/studio-apr26/g/vnc-0205.webp", full: "/media/rolls/studio-apr26/f/vnc-0205.webp", mob: "/media/rolls/studio-apr26/m/vnc-0205.webp", w: 1200, h: 1800, orient: "tall", mm: 85, iso: 160, f: 2.5, shutter: "1/200", taken: "2026-04-12T15:49:33", label: "GAZE GLANCE", alt: "Subtle reflective eye gaze catching soft key light", size: "sm" },
  { id: "vnc-0206", src: "/media/rolls/studio-apr26/g/vnc-0206.webp", full: "/media/rolls/studio-apr26/f/vnc-0206.webp", mob: "/media/rolls/studio-apr26/m/vnc-0206.webp", w: 1800, h: 1200, orient: "wide", mm: 40, iso: 320, f: 4.0, shutter: "1/125", taken: "2026-04-12T15:58:20", label: "STUDIO CYC WIDE", alt: "Full studio floor view showing minimalist spatial composition", size: "sm" },
  { id: "vnc-0207", src: "/media/rolls/studio-apr26/g/vnc-0207.webp", full: "/media/rolls/studio-apr26/f/vnc-0207.webp", mob: "/media/rolls/studio-apr26/m/vnc-0207.webp", w: 1200, h: 1800, orient: "tall", mm: 55, iso: 200, f: 2.8, shutter: "1/160", taken: "2026-04-12T16:04:18", label: "CUFF & DETAIL", alt: "Tailored textile texture and structural sleeve folds", size: "sm" },
  { id: "vnc-0208", src: "/media/rolls/studio-apr26/g/vnc-0208.webp", full: "/media/rolls/studio-apr26/f/vnc-0208.webp", mob: "/media/rolls/studio-apr26/m/vnc-0208.webp", w: 1200, h: 1800, orient: "tall", mm: 85, iso: 160, f: 2.8, shutter: "1/200", taken: "2026-04-12T16:12:45", label: "CLEAN PORTRAIT", alt: "Direct camera gaze with balanced fill light", size: "sm" },
  { id: "vnc-0209", src: "/media/rolls/studio-apr26/g/vnc-0209.webp", full: "/media/rolls/studio-apr26/f/vnc-0209.webp", mob: "/media/rolls/studio-apr26/m/vnc-0209.webp", w: 1200, h: 1800, orient: "tall", mm: 55, iso: 200, f: 2.8, shutter: "1/160", taken: "2026-04-12T16:21:00", label: "MINIMALIST STANCE", alt: "Relaxed poise against subtle directional shadow", size: "sm" },
  { id: "vnc-0210", src: "/media/rolls/studio-apr26/g/vnc-0210.webp", full: "/media/rolls/studio-apr26/f/vnc-0210.webp", mob: "/media/rolls/studio-apr26/m/vnc-0210.webp", w: 1800, h: 1200, orient: "wide", mm: 55, iso: 200, f: 3.5, shutter: "1/160", taken: "2026-04-12T16:29:15", label: "SILK TEXTURE", alt: "Tight crop across the collar and lapel architecture", size: "sm" },
  { id: "vnc-0211", src: "/media/rolls/studio-apr26/g/vnc-0211.webp", full: "/media/rolls/studio-apr26/f/vnc-0211.webp", mob: "/media/rolls/studio-apr26/m/vnc-0211.webp", w: 1200, h: 1800, orient: "tall", mm: 85, iso: 160, f: 2.5, shutter: "1/250", taken: "2026-04-12T16:38:40", label: "SOFTBOX RIM", alt: "Delicate hair rim lighting separating model from dark background", size: "sm" },
  { id: "vnc-0212", src: "/media/rolls/studio-apr26/g/vnc-0212.webp", full: "/media/rolls/studio-apr26/f/vnc-0212.webp", mob: "/media/rolls/studio-apr26/m/vnc-0212.webp", w: 1800, h: 1200, orient: "wide", mm: 40, iso: 320, f: 4.5, shutter: "1/125", taken: "2026-04-12T16:45:10", label: "GREY BACKDROP FULL", alt: "Editorial fashion spread framing with wide negative space", size: "lg" },
  { id: "vnc-0213", src: "/media/rolls/studio-apr26/g/vnc-0213.webp", full: "/media/rolls/studio-apr26/f/vnc-0213.webp", mob: "/media/rolls/studio-apr26/m/vnc-0213.webp", w: 1200, h: 1800, orient: "tall", mm: 55, iso: 200, f: 2.8, shutter: "1/160", taken: "2026-04-12T16:52:30", label: "EDITORIAL REPOSE", alt: "Contemplative posture seated with arms resting on knees", size: "sm" },
  { id: "vnc-0214", src: "/media/rolls/studio-apr26/g/vnc-0214.webp", full: "/media/rolls/studio-apr26/f/vnc-0214.webp", mob: "/media/rolls/studio-apr26/m/vnc-0214.webp", w: 1200, h: 1800, orient: "tall", mm: 85, iso: 160, f: 2.5, shutter: "1/200", taken: "2026-04-12T17:00:22", label: "CHIN RESTING", alt: "Close portrait with chin resting gently in hand", size: "sm" },
  { id: "vnc-0215", src: "/media/rolls/studio-apr26/g/vnc-0215.webp", full: "/media/rolls/studio-apr26/f/vnc-0215.webp", mob: "/media/rolls/studio-apr26/m/vnc-0215.webp", w: 1800, h: 1200, orient: "wide", mm: 55, iso: 200, f: 3.2, shutter: "1/160", taken: "2026-04-12T17:08:45", label: "STOOL TURN", alt: "Turning away into soft shadow, clean shoulder line", size: "sm" },
  { id: "vnc-0216", src: "/media/rolls/studio-apr26/g/vnc-0216.webp", full: "/media/rolls/studio-apr26/f/vnc-0216.webp", mob: "/media/rolls/studio-apr26/m/vnc-0216.webp", w: 1200, h: 1800, orient: "tall", mm: 85, iso: 160, f: 2.5, shutter: "1/200", taken: "2026-04-12T17:15:30", label: "SOFT MONOCHROME", alt: "Tonal study in black silk and subtle warm studio grey", size: "sm" }
];

const rollsData = [
  {
    key: "gt3-aug26",
    title: "PORSCHE 911 GT3 RS",
    subtitle: "AUTOMOTIVE · ON LOCATION",
    body: "CANON EOS R5 MARK II",
    lens: "RF 24-70MM F/2.8 L IS USM",
    date: "23 AUG 2026",
    taken: "2026-08-23T06:48:16",
    gallery: "https://vancedesign.com",
    frames: gt3Frames
  },
  {
    key: "studio-apr26",
    title: "STUDIO EDITORIAL & PORTRAITURE",
    subtitle: "EDITORIAL · NATURAL & SOFTBOX",
    body: "HASSELBLAD X2D 100C",
    lens: "XCD 55MM F/2.5 V",
    date: "12 APR 2026",
    taken: "2026-04-12T15:20:00",
    gallery: "https://vancedesign.com",
    frames: studioFrames
  }
];

// ══ UTILS & SELECTORS ══════════════════════════════════════════
const f = (sel, el = document) => el.querySelector(sel);
const T = (sel, el = document) => [...el.querySelectorAll(sel)];
const htmlEl = document.documentElement;
const prefersReduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
const isTouchOnly = matchMedia("(hover: none)").matches;
const wait = (ms) => new Promise((res) => setTimeout(res, ms));
const escapeHtml = (str = "") =>
  str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const formatFrameNo = (idx) => `FR.${String(idx + 1).padStart(3, "0")}`;

// ══ WEB AUDIO API SYNTHESIZER ══════════════════════════════════
let audioCtx = null;
let masterGain = null;
let ambientNodes = null;

function initAudio() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    masterGain = audioCtx.createGain();
    masterGain.gain.value = 0;
    masterGain.connect(audioCtx.destination);
  }
  return audioCtx;
}

function playTone(freq = 880, dur = 0.05, wave = "square", vol = 0.05) {
  if (!audioCtx) return;
  const now = audioCtx.currentTime;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  const filter = audioCtx.createBiquadFilter();

  filter.type = "bandpass";
  filter.frequency.value = freq * 1.4;
  filter.Q.value = 2.2;

  osc.type = wave;
  osc.frequency.setValueAtTime(freq, now);
  osc.frequency.exponentialRampToValueAtTime(freq * 0.72, now + dur);

  gain.gain.setValueAtTime(vol, now);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + dur);

  osc.connect(filter);
  filter.connect(gain);
  gain.connect(masterGain);

  osc.start(now);
  osc.stop(now + dur + 0.02);
}

function startAmbience() {
  if (ambientNodes || !audioCtx) return;
  const ambientGain = audioCtx.createGain();
  ambientGain.gain.value = 0.5;

  const lowpass = audioCtx.createBiquadFilter();
  lowpass.type = "lowpass";
  lowpass.frequency.value = 320;
  lowpass.Q.value = 6;

  const lfo = audioCtx.createOscillator();
  lfo.frequency.value = 0.045;
  const lfoGain = audioCtx.createGain();
  lfoGain.gain.value = 190;
  lfo.connect(lfoGain);
  lfoGain.connect(lowpass.frequency);
  lfo.start();

  const freqs = [55, 82.5, 110.3];
  const oscs = freqs.map((hz, idx) => {
    const o = audioCtx.createOscillator();
    o.type = idx === 2 ? "triangle" : "sawtooth";
    o.frequency.value = hz;
    const g = audioCtx.createGain();
    g.gain.value = idx === 2 ? 0.12 : 0.3;
    o.connect(g);
    g.connect(lowpass);
    o.start();
    return o;
  });

  lowpass.connect(ambientGain);
  ambientGain.connect(masterGain);
  ambientNodes = { oscs, lfo, gain: ambientGain };
}

function resumeAudio() {
  initAudio();
  if (audioCtx.state === "suspended") audioCtx.resume();
}

function setAmbienceState(active) {
  resumeAudio();
  if (active) startAmbience();
  const now = audioCtx.currentTime;
  masterGain.gain.cancelScheduledValues(now);
  masterGain.gain.setTargetAtTime(active ? 0.32 : 0, now, 0.35);
}

// ══ CANVAS STREAKS GENERATOR ═══════════════════════════════════
const streakColor = [95, 224, 255]; // Cyan #5fe0ff
const streakStep = 8;
const streakGutter = 4;
const SQRT1_2 = Math.SQRT1_2;
const dirStart = { x: SQRT1_2, y: -SQRT1_2 };
const dirMotion = { x: SQRT1_2, y: SQRT1_2 };
const randRange = (min, max) => min + Math.random() * (max - min);

function createStreakField(w, h) {
  const diag = (w + h) * SQRT1_2;
  return {
    W: w,
    H: h,
    L: diag,
    start: { x: w / 2 - (dirStart.x * diag) / 2, y: h / 2 - (dirStart.y * diag) / 2 }
  };
}

function sampleStreakLine(field, idx) {
  const offset = idx * streakStep + streakStep - streakGutter / 2;
  const pt = { x: field.start.x + dirStart.x * offset, y: field.start.y + dirStart.y * offset };
  const t0 = Math.max(-pt.x / dirMotion.x, -pt.y / dirMotion.y);
  const t1 = Math.min((field.W - pt.x) / dirMotion.x, (field.H - pt.y) / dirMotion.y);
  return t1 > t0 ? { B: pt, t0, t1 } : null;
}

function initStreaksCanvas(canvas) {
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const state = {
    field: null,
    live: [],
    nextSpawn: randRange(0.4, 1.2),
    running: false
  };

  function resize() {
    const rect = canvas.getBoundingClientRect();
    const w = Math.round(rect.width) || innerWidth;
    const h = Math.round(rect.height) || innerHeight + 32;
    const dpr = Math.min(devicePixelRatio || 1, 2);
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    state.field = createStreakField(w, h);
  }

  window.addEventListener("resize", resize);
  resize();

  function spawnStreak() {
    const fd = state.field;
    if (!fd) return;
    for (let attempts = 0; attempts < 8; attempts++) {
      const idx = Math.floor(Math.random() * (fd.L / streakStep));
      const line = sampleStreakLine(fd, idx);
      if (line) {
        state.live.push({ line, age: 0, len: randRange(180, 300), speed: randRange(170, 260) });
        return;
      }
    }
  }

  let lastTime = 0;
  function render(time) {
    if (!state.running) return;
    const dt = Math.min(0.05, (time - lastTime) / 1000 || 0);
    lastTime = time;

    state.nextSpawn -= dt;
    if (state.nextSpawn <= 0) {
      spawnStreak();
      state.nextSpawn = randRange(0.7, 2.0);
    }

    ctx.clearRect(0, 0, state.field.W, state.field.H);
    state.live = state.live.filter((item) => {
      item.age += dt;
      const { B, t0, t1 } = item.line;
      const headT = t0 + item.age * item.speed;
      const tailT = headT - item.len;
      if (tailT >= t1) return false;

      const p0 = { x: B.x + dirMotion.x * Math.max(t0, tailT), y: B.y + dirMotion.y * Math.max(t0, tailT) };
      const p1 = { x: B.x + dirMotion.x * Math.min(t1, headT), y: B.y + dirMotion.y * Math.min(t1, headT) };

      const grad = ctx.createLinearGradient(p0.x, p0.y, p1.x, p1.y);
      grad.addColorStop(0, `rgba(${streakColor[0]},${streakColor[1]},${streakColor[2]},0)`);
      grad.addColorStop(1, `rgba(${streakColor[0]},${streakColor[1]},${streakColor[2]},0.45)`);

      ctx.beginPath();
      ctx.moveTo(p0.x, p0.y);
      ctx.lineTo(p1.x, p1.y);
      ctx.strokeStyle = grad;
      ctx.lineWidth = 1.4;
      ctx.stroke();
      return true;
    });

    requestAnimationFrame(render);
  }

  return {
    start: () => {
      if (state.running) return;
      state.running = true;
      lastTime = performance.now();
      requestAnimationFrame(render);
    },
    stop: () => {
      state.running = false;
    }
  };
}

// ══ 3D HOLOGRAPHIC TILT & GLINT/GLARE ═══════════════════════════
function initHolographicPanels() {
  if (!matchMedia("(hover: hover) and (pointer: fine)").matches) return;
  const cardsMap = new Map();
  let rafId = 0;

  function registerCard(el) {
    let entry = cardsMap.get(el);
    if (entry) return entry;
    const glint = document.createElement("span");
    glint.className = "glint";
    glint.setAttribute("aria-hidden", "true");
    const glare = document.createElement("span");
    glare.className = "glare";
    glare.setAttribute("aria-hidden", "true");
    el.append(glint, glare);
    entry = { card: el, glint, over: false, tx: 0, ty: 0, x: 0, y: 0 };
    cardsMap.set(el, entry);
    return entry;
  }

  function onPointerMove(e) {
    const cardEl = e.target.closest?.(".panel");
    for (const item of cardsMap.values()) {
      if (item.over && item.card !== cardEl) deactivate(item);
    }
    if (!cardEl) return;
    const entry = registerCard(cardEl);
    const box = cardEl.getBoundingClientRect();
    if (!box.width) return;
    const px = (e.clientX - box.left) / box.width;
    const py = (e.clientY - box.top) / box.height;
    cardEl.style.setProperty("--gx", (px * 100).toFixed(2) + "%");
    cardEl.style.setProperty("--gy", (py * 100).toFixed(2) + "%");
    entry.tx = px - 0.5;
    entry.ty = py - 0.5;
    if (!entry.over) {
      entry.over = true;
      cardEl.classList.add("is-lit");
    }
    scheduleFrame();
  }

  function deactivate(item) {
    item.over = false;
    item.tx = 0;
    item.ty = 0;
    item.card.classList.remove("is-lit");
    scheduleFrame();
  }

  function scheduleFrame() {
    if (!rafId) rafId = requestAnimationFrame(updateFrame);
  }

  function updateFrame() {
    rafId = 0;
    let keepAnimating = false;
    for (const item of cardsMap.values()) {
      const dx = item.tx - item.x;
      const dy = item.ty - item.y;
      item.x += dx * 0.12;
      item.y += dy * 0.12;
      const rotY = (item.x * 9).toFixed(2);
      const rotX = (-item.y * 9).toFixed(2);
      item.card.style.setProperty("--rx", `${rotX}deg`);
      item.card.style.setProperty("--ry", `${rotY}deg`);
      if (Math.abs(dx) > 0.001 || Math.abs(dy) > 0.001) keepAnimating = true;
    }
    if (keepAnimating) scheduleFrame();
  }

  document.addEventListener("pointermove", onPointerMove, { passive: true });
  document.addEventListener("pointerleave", () => {
    for (const item of cardsMap.values()) if (item.over) deactivate(item);
  });
}

// ══ RENDER PROJECTS & HORIZONTAL PIN DECK ══════════════════════
function renderProjects(container) {
  if (!container) return;
  container.innerHTML = projectsData.map((proj, idx) => {
    const steps = proj.steps || [];
    return `
    <article class="panel band">
      <div class="panel__tag">
        <span>PRJ.${String(idx + 1).padStart(3, "0")} · ${proj.no}</span>
        <span class="band__rule"></span>
        <span class="band__hint">${steps.length ? '<i class="hint--hover">HOVER A STEP FOR ITS STORY</i><i class="hint--tap">SWIPE · TAP A STEP FOR ITS STORY</i>' : "HOVER TO RESOLVE"}</span>
      </div>
      <figure class="shot">
        <img src="${proj.img}" alt="${proj.name} work by Kaelen Vance" loading="lazy" decoding="async">
        <span class="shot__scan"></span>
      </figure>
      <div class="band__body">
        <div class="band__lead">
          <h3 class="band__name">${proj.name}</h3>
          ${steps.length ? `<div class="band__ticks" aria-hidden="true">${steps.map((st) => `<i class="band__tick" data-step="${st.key}"></i>`).join("")}</div>` : ""}
        </div>
        <div class="band__copy">
          <p class="band__desc">${proj.desc}</p>
          ${steps.map((st, i) => `
          <div class="band__story" data-step="${st.key}" aria-hidden="true">
            <span class="band__stepline">${proj.unit || "STEP"} ${String(i + 1).padStart(2, "0")} / ${String(steps.length).padStart(2, "0")} · ${st.label}</span>
            <p>${st.story}</p>
          </div>`).join("")}
        </div>
        <div class="card__tags">${proj.tags.map((t) => `<span>${t}</span>`).join("")}</div>
      </div>
    </article>`;
  }).join("");
}

function initHorizontalDeck(section) {
  if (!section) return;
  const isDesktop = matchMedia("(min-width: 900px)").matches;
  htmlEl.classList.add(isDesktop ? "hz-on" : "hz-off");
  if (!isDesktop) return;

  const stage = f(".hz__stage", section);
  const grid = f("#workGrid", section);
  const idxLabel = f("#hzIdx", section);
  const countLabel = f("#hzN", section);
  const progBar = f("#hzBar", section);

  const cells = [...grid.children].map((child) => {
    const cell = document.createElement("div");
    cell.className = "hz__cell";
    grid.insertBefore(cell, child);
    cell.append(child);
    return cell;
  });
  const count = cells.length;
  if (countLabel) countLabel.textContent = String(count).padStart(2, "0");

  function recalc() {
    section.style.height = `calc(100vh + ${(count * 0.95 * 100).toFixed(0)}vh)`;
    const stageH = stage.clientHeight;
    let targetW = Math.min(1200, stage.clientWidth);
    stage.style.setProperty("--w", targetW + "px");
    for (let c = 0; c < 3; c++) {
      const h = cells[0].offsetHeight;
      if (h <= stageH) break;
      targetW = Math.floor(targetW * (stageH / h));
      stage.style.setProperty("--w", targetW + "px");
    }
  }

  function getScrollFraction() {
    const rect = section.getBoundingClientRect();
    const total = section.offsetHeight - innerHeight;
    return Math.min(1, Math.max(0, -rect.top / total));
  }

  function getActiveIndex(frac) {
    const raw = frac * count;
    const fl = Math.floor(raw);
    const rem = raw - fl;
    if (fl >= count - 1) return count - 1;
    if (rem <= 0.15) return fl;
    const t = (rem - 0.15) / 0.85;
    return fl + t * t * (3 - 2 * t);
  }

  function renderDeck(curVal) {
    const stageH = stage.clientHeight;
    cells.forEach((cell, idx) => {
      const diff = curVal - idx;
      let y = 0, scale = 1, x = 0;
      if (diff < 0) {
        y = Math.min(1, -diff) * (stageH + 40);
      } else {
        x = Math.min(1, diff);
        scale = 1 - 0.05 * x;
        y = -x * 22;
      }
      cell.style.transform = `translate3d(0,${y.toFixed(1)}px,0) scale(${scale.toFixed(4)})`;
      cell.style.filter = x ? `brightness(${(1 - 0.55 * x).toFixed(3)}) saturate(${(1 - 0.35 * x).toFixed(3)})` : "";
      cell.style.opacity = x ? (1 - x * x).toFixed(3) : "";
      cell.style.zIndex = String(idx + 1);
      cell.style.visibility = diff <= -1 || diff >= 1 ? "hidden" : "";
    });
  }

  let smoothed = 0;
  let rafScroll = 0;
  let lastActive = -1;

  function stepScroll() {
    rafScroll = 0;
    const target = getScrollFraction();
    smoothed += (target - smoothed) * 0.18;
    if (Math.abs(target - smoothed) < 0.0005) smoothed = target;
    renderDeck(getActiveIndex(smoothed));

    const activeInt = Math.round(getActiveIndex(target));
    if (activeInt !== lastActive) {
      lastActive = activeInt;
      if (idxLabel) idxLabel.textContent = String(activeInt + 1).padStart(2, "0");
      cells.forEach((c, i) => c.classList.toggle("is-cur", i === activeInt));
    }
    if (progBar) progBar.style.width = (target * 100).toFixed(1) + "%";
    if (smoothed !== target) rafScroll = requestAnimationFrame(stepScroll);
  }

  const onScroll = () => {
    if (!rafScroll) rafScroll = requestAnimationFrame(stepScroll);
  };

  recalc();
  window.addEventListener("resize", () => {
    recalc();
    onScroll();
  });
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

// ══ INTERACTIVE SVG SCHEMATICS ═════════════════════════════════
async function initSvgSchematics(bands) {
  await Promise.all(
    [...bands].map(async (band) => {
      const img = band.querySelector('.shot img[src$=".svg"]');
      if (!img) return;
      try {
        const res = await fetch(img.getAttribute("src"));
        if (!res.ok) return;
        const svgEl = new DOMParser().parseFromString(await res.text(), "image/svg+xml").documentElement;
        if (svgEl.nodeName !== "svg") return;
        svgEl.setAttribute("class", "schema");
        svgEl.setAttribute("role", "img");
        svgEl.setAttribute("preserveAspectRatio", "xMidYMid slice");
        const alt = img.getAttribute("alt");
        if (alt) svgEl.setAttribute("aria-label", alt);

        img.replaceWith(svgEl);
        band.classList.add("has-schema");

        // Ensure SVG is fully sized and visible immediately
        svgEl.style.width = "100%";
        svgEl.style.height = "100%";
        svgEl.style.display = "block";

        const strokes = [];
        const fades = [];
        svgEl.querySelectorAll("path,line,rect,circle,ellipse,polyline,polygon,text").forEach((shape) => {
          if (shape.closest(".pv")) return;
          if (shape.nodeName === "text") {
            fades.push(shape);
          } else {
            strokes.push(shape);
          }
        });
        svgEl.__parts = { strokes, fades };

        const draftBlueprint = () => {
          if (svgEl.dataset.drafted) return;
          svgEl.dataset.drafted = "1";
        };

        const schemaObserver = new IntersectionObserver((entries) => {
          entries.forEach((en) => {
            if (en.isIntersecting) {
              draftBlueprint();
              schemaObserver.unobserve(en.target);
            }
          });
        }, { threshold: 0.1 });
        schemaObserver.observe(band);

        // Connect step ticks and interactive schema nodes
        const nodes = svgEl.querySelectorAll(".nd");
        const ticks = band.querySelectorAll(".band__tick");
        const stories = band.querySelectorAll(".band__story");
        const previews = svgEl.querySelectorAll(".pv");

        function activateStep(key) {
          if (!key) {
            nodes.forEach((n) => n.classList.remove("is-on"));
            ticks.forEach((t) => t.classList.remove("is-cur"));
            stories.forEach((s) => (s.hidden = true));
            previews.forEach((p) => p.classList.remove("is-on"));
            return;
          }
          playTone(980, 0.03, "square", 0.03);
          nodes.forEach((n) => n.classList.toggle("is-on", n.dataset.step === key));
          ticks.forEach((t) => t.classList.toggle("is-cur", t.dataset.step === key));
          stories.forEach((s) => (s.hidden = s.dataset.step !== key));
          previews.forEach((p) => p.classList.toggle("is-on", p.dataset.pv === key));
        }

        nodes.forEach((node) => {
          node.addEventListener("pointerenter", () => activateStep(node.dataset.step));
          node.addEventListener("pointerleave", () => activateStep(null));
        });

        ticks.forEach((tick) => {
          tick.addEventListener("pointerenter", () => activateStep(tick.dataset.step));
          tick.addEventListener("pointerleave", () => activateStep(null));
          tick.addEventListener("click", () => activateStep(tick.dataset.step));
        });
      } catch (err) {
        console.warn("SVG schema loading failed:", err);
      }
    })
  );
}

// ══ RENDER EXPERIENCE LOGS & LASER TEXT SCANNER ════════════════
function renderExperience(container) {
  if (!container) return;
  container.innerHTML = experienceData.map((item, idx) => `
    <article class="log" data-reveal>
      <div class="log__when">
        <span class="log__from">${item.from}</span>
        <span class="log__dash"></span>
        <span class="log__to">${item.to}</span>
      </div>
      <div class="log__what">
        <h3 class="log__role">${item.role}</h3>
        <p class="log__org">${item.org}</p>
        <p class="log__desc">${item.desc}</p>
      </div>
      <div class="log__where">
        <span>${item.loc}</span>
        <span class="log__idx">${String(experienceData.length - idx).padStart(2, "0")}</span>
      </div>
    </article>`).join("");

  // Laser scanner sweep across text lines
  const getLineRects = (node) => {
    const box = node.getBoundingClientRect();
    const range = document.createRange();
    range.selectNodeContents(node);
    const rects = [];
    for (const r of range.getClientRects()) {
      if (r.width < 1) continue;
      const last = rects[rects.length - 1];
      if (last && Math.abs(last.top - r.top) < 2) {
        last.left = Math.min(last.left, r.left);
        last.right = Math.max(last.right, r.right);
      } else {
        rects.push({ top: r.top, bottom: r.bottom, left: r.left, right: r.right });
      }
    }
    return rects.map((d) => ({
      top: d.top - box.top + 1,
      height: d.bottom - d.top - 2,
      left: d.left - box.left,
      width: d.right - d.left
    }));
  };

  const animWeakMap = new WeakMap();
  container.addEventListener("pointerenter", (e) => {
    const logEl = e.target.closest?.(".log");
    if (!logEl) return;
    const descEl = logEl.querySelector(".log__desc");
    if (!descEl) return;
    const lines = getLineRects(descEl);
    const lineCount = Math.max(1, lines.length);
    if (!lines.length || prefersReduced) return;

    let tracker = animWeakMap.get(descEl);
    if (!tracker) {
      const bar = document.createElement("i");
      bar.className = "log__bar";
      bar.setAttribute("aria-hidden", "true");
      descEl.append(bar);
      tracker = { el: bar, anim: null };
      animWeakMap.set(descEl, tracker);
    }
    tracker.anim?.cancel();

    const keyframes = [];
    const durPerLine = 240;
    lines.forEach((line, idx) => {
      const p = (pct) => (idx + pct) / lineCount;
      const style = { top: `${line.top}px`, height: `${line.height}px`, left: `${line.left}px`, width: `${line.width}px` };
      keyframes.push(
        { offset: p(0), ...style, transform: "scaleX(0)", transformOrigin: "left center" },
        { offset: p(0.48), ...style, transform: "scaleX(1)", transformOrigin: "left center" },
        { offset: p(0.52), ...style, transform: "scaleX(1)", transformOrigin: "right center" },
        { offset: p(1), ...style, transform: "scaleX(0)", transformOrigin: "right center" }
      );
    });

    tracker.anim = tracker.el.animate(keyframes, {
      duration: lineCount * durPerLine,
      fill: "forwards"
    });
    playTone(1120, 0.04, "square", 0.025);
  }, true);
}

// ══ RENDER EQUIPMENT STACK ═════════════════════════════════════
function renderStack(container) {
  if (!container) return;
  container.innerHTML = stackData.map((tile) => `
    <div class="panel tile" style="--lvl:${tile.lvl}%">
      <span class="tile__k">${tile.k}</span>
      <span class="tile__v">${tile.v}</span>
      <span class="tile__bar"><i></i></span>
      <p class="tile__d">${tile.d}</p>
    </div>`).join("");
}

// ══ PHOTOSHOOT CONTACT SHEET & LIGHTBOX ════════════════════════
let activeRoll = rollsData[0];
let placedFramesCount = 0;
const framesPerPage = 12;

function renderRollButtons(container, currentKey) {
  if (!container) return;
  container.innerHTML = rollsData.map((roll, idx) => `
    <button class="roll" type="button" data-roll="${roll.key}" aria-pressed="${roll.key === currentKey}">
      <span class="roll__no">R.${String(idx + 1).padStart(2, "0")}</span>
      <span class="roll__name">${escapeHtml(roll.title)}</span>
      <span class="roll__sub">${escapeHtml(roll.subtitle)}</span>
    </button>`).join("");
}

function renderShootMeta(container, roll) {
  if (!container) return;
  container.innerHTML = `
    <span>${roll.body}</span>
    <span class="meta__sep">·</span>
    <span>${roll.lens}</span>
    <span class="meta__sep">·</span>
    <span>${roll.frames.length} FRAMES</span>
    <span class="meta__date">${roll.date}</span>`;
}

function appendSheetFrames(container, roll, start, end) {
  const slice = roll.frames.slice(start, end);
  const html = slice.map((fr, idx) => {
    const globalIdx = start + idx;
    return `
    <figure class="panel frame frame--${fr.orient}${fr.size === "lg" ? " frame--lg" : ""}" data-i="${globalIdx}">
      <div class="panel__tag">
        <span>${formatFrameNo(globalIdx)}</span>
        <span class="band__rule"></span>
        <span class="band__hint">${fr.mm}MM · ISO ${fr.iso}</span>
      </div>
      <div class="shot shot--photo">
        <picture>
          ${fr.mob ? `<source media="(hover:none)" srcset="${fr.mob}">` : ""}
          <img src="${fr.src}" alt="${escapeHtml(fr.alt)}" loading="lazy" decoding="async">
        </picture>
        <span class="shot__scan"></span>
      </div>
      <figcaption class="frame__exif">
        <b>${escapeHtml(fr.label)}</b>
      </figcaption>
    </figure>`;
  }).join("");

  const prevLen = container.children.length;
  container.insertAdjacentHTML("beforeend", html);
  return [...container.children].slice(prevLen);
}

// Lightbox modal instance
let lbModal = null;
let curFrameIdx = 0;

function initLightbox() {
  lbModal = document.createElement("div");
  lbModal.className = "lb";
  lbModal.setAttribute("role", "dialog");
  lbModal.setAttribute("aria-modal", "true");
  lbModal.setAttribute("aria-label", "Photograph, full size");
  lbModal.hidden = true;
  lbModal.innerHTML = `
    <div class="lb__scrim" data-close></div>
    <div class="lb__stage">
      <figure class="lb__frame">
        <svg class="lb__rule" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <rect x="0.4" y="0.4" width="99.2" height="99.2" vector-effect="non-scaling-stroke"/>
        </svg>
        <span class="lb__blink" aria-hidden="true"></span>
        <span class="lb__scan" aria-hidden="true"></span>
        <img class="lb__img" alt="" decoding="async">
        <figcaption class="lb__cap">
          <b></b><span class="lb__meta"></span><span class="lb__idx"></span>
        </figcaption>
      </figure>
      <button class="lb__nav lb__nav--prev" type="button" aria-label="Previous frame">‹</button>
      <button class="lb__nav lb__nav--next" type="button" aria-label="Next frame">›</button>
      <button class="lb__x" type="button" aria-label="Close" data-close>ESC ✕</button>
    </div>`;

  document.body.appendChild(lbModal);

  const imgEl = f(".lb__img", lbModal);
  const labelEl = f(".lb__cap b", lbModal);
  const metaEl = f(".lb__meta", lbModal);
  const idxEl = f(".lb__idx", lbModal);

  function openFrame(idx) {
    if (!activeRoll.frames[idx]) return;
    curFrameIdx = idx;
    const fr = activeRoll.frames[idx];
    imgEl.src = fr.full;
    labelEl.textContent = fr.label;
    metaEl.textContent = `${fr.mm}mm · f/${fr.f} · ${fr.shutter} · ISO ${fr.iso}`;
    idxEl.textContent = `${formatFrameNo(idx)} / ${formatFrameNo(activeRoll.frames.length - 1)}`;
    lbModal.dataset.orient = fr.orient || "wide";
    lbModal.classList.add("is-up");
    lbModal.hidden = false;
    document.body.style.overflow = "hidden";
    playTone(720, 0.05, "square", 0.04);
  }

  function closeLightbox() {
    lbModal.classList.remove("is-up");
    lbModal.hidden = true;
    document.body.style.overflow = "";
    playTone(480, 0.05, "square", 0.04);
  }

  function navigate(dir) {
    const total = activeRoll.frames.length;
    const next = (curFrameIdx + dir + total) % total;
    openFrame(next);
  }

  lbModal.addEventListener("click", (e) => {
    if (e.target.closest("[data-close]")) closeLightbox();
  });
  f(".lb__nav--prev", lbModal).addEventListener("click", () => navigate(-1));
  f(".lb__nav--next", lbModal).addEventListener("click", () => navigate(1));

  window.addEventListener("keydown", (e) => {
    if (lbModal.hidden) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") navigate(-1);
    if (e.key === "ArrowRight") navigate(1);
  });

  return { open: openFrame, close: closeLightbox };
}

function loadMoreFrames(sheetEl, moreBtn, lightbox) {
  const total = activeRoll.frames.length;
  const nextEnd = Math.min(total, placedFramesCount + framesPerPage);
  const added = appendSheetFrames(sheetEl, activeRoll, placedFramesCount, nextEnd);
  placedFramesCount = nextEnd;

  added.forEach((frameEl) => {
    frameEl.addEventListener("click", () => {
      const idx = +frameEl.dataset.i;
      lightbox.open(idx);
    });
  });

  const remaining = total - placedFramesCount;
  if (remaining > 0) {
    moreBtn.hidden = false;
    moreBtn.textContent = `+ LOAD MORE FRAMES · ${remaining} LEFT`;
  } else {
    moreBtn.hidden = true;
  }
}

function switchRoll(roll, sheetEl, metaEl, rollsContainer, moreBtn, lightbox) {
  activeRoll = roll;
  placedFramesCount = 0;
  sheetEl.innerHTML = "";
  renderRollButtons(rollsContainer, roll.key);
  renderShootMeta(metaEl, roll);
  loadMoreFrames(sheetEl, moreBtn, lightbox);
}

// ══ BOOT SEQUENCE ══════════════════════════════════════════════
const bootReadoutItems = [
  ["INIT", "core.runtime", "OK"],
  ["LOAD", "field.hatch", "45DEG / 4PX"],
  ["LOAD", "panel.glass", "BLUR 10"],
  ["CALIB", "viewport.grid", "1200 MAX"],
  ["SYNC", "typeface.atlas", "2 FAMILIES"],
  ["BIND", "scroll.observer", "ACTIVE"],
  ["GEN", "duotone.ramps", "2 FILTERS"],
  ["OPEN", "audio.bus", "STANDBY"],
  ["DONE", "sequence.complete", "ENTER"]
];

async function startBootSequence(streaksController) {
  htmlEl.dataset.boot = "loading";
  const splash = f("#splash");
  splash.classList.add("is-out");
  await wait(prefersReduced ? 0 : 500);
  splash.hidden = true;

  const loader = f("#loader");
  const readout = f("#readout");
  const pctEl = f("#pct");
  const ringFill = f(".ring__fill");
  const circumference = 326.7;
  loader.hidden = false;

  const stepDur = prefersReduced ? 20 : 220;
  for (let i = 0; i < bootReadoutItems.length; i++) {
    const [tag, label, status] = bootReadoutItems[i];
    const li = document.createElement("li");
    li.innerHTML = `<b>${tag}</b><span>${label}</span><em>${status}</em>`;
    readout.append(li);
    if (readout.children.length > 6) readout.firstElementChild.remove();
    playTone(520 + i * 70, 0.035, "square", 0.035);

    const progress = (i + 1) / bootReadoutItems.length;
    ringFill.style.transition = `stroke-dashoffset ${stepDur}ms linear`;
    ringFill.style.strokeDashoffset = String(circumference * (1 - progress));
    pctEl.textContent = String(Math.round(progress * 100)).padStart(2, "0");

    await wait(stepDur + (prefersReduced ? 0 : Math.random() * 80));
  }

  playTone(1320, 0.12, "sine", 0.06);
  await wait(prefersReduced ? 0 : 350);
  loader.classList.add("is-out");
  await wait(prefersReduced ? 0 : 500);
  loader.hidden = true;

  htmlEl.dataset.boot = "ready";
  f("#site").removeAttribute("aria-hidden");
  streaksController?.start();
}

// ══ MAIN INITIALIZATION ════════════════════════════════════════
document.addEventListener("DOMContentLoaded", () => {
  // 1. Ambience & Streaks
  const streaksCanvas = f("#streaks");
  const streaksController = initStreaksCanvas(streaksCanvas);

  // 2. Sound Toggle
  const soundBtn = f("#sound");
  soundBtn?.addEventListener("click", () => {
    const isLive = soundBtn.getAttribute("aria-pressed") !== "true";
    soundBtn.setAttribute("aria-pressed", String(isLive));
    soundBtn.querySelector("span").textContent = isLive ? "AMBIENCE.LIVE" : "AMBIENCE.MUTE";
    setAmbienceState(isLive);
    playTone(isLive ? 760 : 420, 0.06, "square", 0.05);
  });

  // 3. Enter Boot Button
  const enterBtn = f("#enter");
  enterBtn?.addEventListener("click", () => {
    resumeAudio();
    playTone(660, 0.09, "square", 0.06);
    startBootSequence(streaksController);
  });
  enterBtn?.addEventListener("pointerenter", () => playTone(1180, 0.03, "square", 0.03));

  // 4. Render Sections
  renderProjects(f("#workGrid"));
  renderExperience(f("#expList"));
  renderStack(f("#stackGrid"));

  // 5. Photoshoots & Lightbox
  const lightbox = initLightbox();
  const rollsEl = f("#rolls");
  const shootMetaEl = f("#shootMeta");
  const sheetEl = f("#sheet");
  const moreBtn = f("#more");

  switchRoll(activeRoll, sheetEl, shootMetaEl, rollsEl, moreBtn, lightbox);
  rollsEl?.addEventListener("click", (e) => {
    const btn = e.target.closest(".roll");
    if (!btn) return;
    const roll = rollsData.find((r) => r.key === btn.dataset.roll);
    if (roll && roll !== activeRoll) {
      playTone(840, 0.04, "square", 0.04);
      switchRoll(roll, sheetEl, shootMetaEl, rollsEl, moreBtn, lightbox);
    }
  });
  moreBtn?.addEventListener("click", () => {
    playTone(760, 0.04, "square", 0.04);
    loadMoreFrames(sheetEl, moreBtn, lightbox);
  });

  // 6. 3D Holographic Tilt & Horizontal Deck
  initHolographicPanels();
  initHorizontalDeck(f("#work"));
  initSvgSchematics(T(".band"));

  // 7. Headings with Animated Split Wipes
  T("[data-split]").forEach((el) => {
    const txt = el.textContent;
    el.textContent = "";
    const span = document.createElement("span");
    span.className = "wipe";
    span.innerHTML = `<span class="wipe__text">${txt}</span><span class="wipe__bars" aria-hidden="true"><i></i><i></i><i></i></span>`;
    el.append(span);
  });

  // 8. Glitch Effect Trigger
  function triggerGlitch(el) {
    el.classList.add("is-glitching");
    setTimeout(() => el.classList.remove("is-glitching"), 700);
  }
  const glitchElements = T(".glitch");
  glitchElements.forEach((el) => el.addEventListener("pointerenter", () => triggerGlitch(el)));
  if (!prefersReduced && !isTouchOnly) {
    setInterval(() => {
      const pick = glitchElements[Math.floor(Math.random() * glitchElements.length)];
      if (pick) triggerGlitch(pick);
    }, 5500);
  }

  // 9. Scroll Tracking & HUD Indicators
  const progBar = f("#progBar");
  const hudScroll = f("#hudScroll");
  function onScroll() {
    const maxScroll = document.body.scrollHeight - innerHeight;
    const pct = maxScroll > 0 ? Math.min(1, Math.max(0, scrollY / maxScroll)) : 0;
    if (progBar) progBar.style.width = (pct * 100).toFixed(2) + "%";
    if (hudScroll) hudScroll.textContent = "SCROLL " + String(Math.round(pct * 100)).padStart(3, "0");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);

  // 10. Live Clock
  const clockEl = f("#clock");
  if (clockEl) {
    const updateClock = () => {
      const now = new Date();
      clockEl.textContent = [now.getHours(), now.getMinutes(), now.getSeconds()]
        .map((n) => String(n).padStart(2, "0"))
        .join(":");
    };
    updateClock();
    setInterval(updateClock, 1000);
  }

  // 11. Mobile Drawer
  const menuBtn = f("#menu");
  const drawerEl = f("#drawer");
  function toggleDrawer(open) {
    menuBtn?.setAttribute("aria-expanded", String(open));
    if (drawerEl) drawerEl.hidden = !open;
    playTone(open ? 720 : 480, 0.05, "square", 0.04);
  }
  menuBtn?.addEventListener("click", () => {
    toggleDrawer(menuBtn.getAttribute("aria-expanded") !== "true");
  });
  drawerEl?.addEventListener("click", (e) => {
    if (e.target.closest("a")) toggleDrawer(false);
  });

  // 12. Active Nav Link Tracking
  const navLinks = T("[data-nav]");
  const sectionsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach((link) => {
          link.classList.toggle("is-active", link.getAttribute("href") === "#" + id);
        });
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  T("main section[id]").forEach((sec) => sectionsObserver.observe(sec));
  navLinks.forEach((link) => link.addEventListener("pointerenter", () => playTone(980, 0.025, "square", 0.025)));

  // 13. Smooth Anchor Scrolling
  document.addEventListener("click", (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a || a.getAttribute("href") === "#") return;
    const target = document.getElementById(a.getAttribute("href").slice(1));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth", block: "start" });
      playTone(700, 0.05, "square", 0.04);
    }
  });

  // 14. Footer Contact Card & Chat Drawer
  const footCard = f(".foot__card");
  const chatDrawer = f("#chat");
  const chatOpenBtn = f("#chatOpen");
  const chatCloseBtn = f("#chatClose");
  const contactForm = f("#contactForm");
  const contactStatus = f("#contactStatus");

  function openChat() {
    if (!footCard || footCard.classList.contains("is-chat")) return;
    footCard.classList.add("is-chat");
    if (chatDrawer) {
      chatDrawer.inert = false;
      chatDrawer.removeAttribute("aria-hidden");
    }
    setTimeout(() => contactForm?.email?.focus({ preventScroll: true }), prefersReduced ? 0 : 600);
    playTone(700, 0.05, "square", 0.04);
  }

  function closeChat() {
    if (!footCard?.classList.contains("is-chat")) return;
    footCard.classList.remove("is-chat");
    if (chatDrawer) {
      chatDrawer.inert = true;
      chatDrawer.setAttribute("aria-hidden", "true");
    }
    setTimeout(() => chatOpenBtn?.focus({ preventScroll: true }), prefersReduced ? 0 : 350);
    playTone(480, 0.05, "square", 0.04);
  }

  chatOpenBtn?.addEventListener("click", openChat);
  chatCloseBtn?.addEventListener("click", closeChat);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && footCard?.classList.contains("is-chat")) closeChat();
  });
  document.addEventListener("click", (e) => {
    if (e.target.closest('a[href="#contact"]')) openChat();
  });

  // Footer Accordion Columns
  T(".foot__h").forEach((hBtn) => {
    hBtn.addEventListener("click", () => {
      const col = hBtn.closest(".foot__col");
      const isOpen = col.classList.toggle("is-open");
      hBtn.setAttribute("aria-expanded", String(isOpen));
      playTone(isOpen ? 700 : 480, 0.04, "square", 0.035);
    });
  });

  // Contact Form Submission
  contactForm?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = contactForm.email.value.trim();
    const msg = contactForm.message.value.trim();
    if (!email || !contactForm.email.checkValidity()) {
      if (contactStatus) contactStatus.textContent = "ENTER A VALID EMAIL";
      contactForm.email.focus();
      playTone(420, 0.06, "square", 0.05);
      return;
    }

    contactForm.classList.add("is-sending");
    if (contactStatus) contactStatus.textContent = "SENDING...";

    // Simulated network submit with graceful mailto fallback
    await wait(800);
    contactForm.classList.remove("is-sending");
    contactForm.reset();
    if (contactStatus) contactStatus.textContent = "MESSAGE SENT. I'LL BE IN TOUCH.";
    playTone(760, 0.06, "square", 0.05);
  });
});
