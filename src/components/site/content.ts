export const company = {
  name: "SABUPP PTE. LTD.",
  brand: "Sabupps",
  uen: "202242176K",
  website: "https://sabupps.com",
  email: "yori@sabupps.com",
  address: "260B Ang Mo Kio Street 21, #18-153, Kebun Baru Court, Singapore 562260",
};

export const services = [
  {
    number: "01",
    title: "Programmatic media buying",
    description:
      "Buy digital ad space in real time across connected websites, mobile apps, and media channels through one demand-side platform.",
    features: [
      "Campaign objectives and budget planning",
      "Automated bidding for eligible ad opportunities",
      "Campaign delivery across connected inventory",
    ],
  },
  {
    number: "02",
    title: "Mobile application distribution",
    description:
      "Connect advertiser demand with a mobile application network to distribute ads within the experiences people use every day.",
    features: [
      "Mobile app inventory connections",
      "Ad delivery within participating applications",
      "Placement and format planning with publishers",
    ],
  },
  {
    number: "03",
    title: "APAC enterprise campaigns",
    description:
      "Support enterprises and agencies across Asia Pacific as they plan and run campaigns for international audiences.",
    features: [
      "Market and audience planning",
      "Campaign setup and creative coordination",
      "A central point of contact for delivery",
    ],
  },
  {
    number: "04",
    title: "Campaign measurement",
    description:
      "Use delivery and performance signals to understand results and refine the next campaign decision.",
    features: [
      "Impression and engagement reporting",
      "Budget and delivery review",
      "Ongoing campaign optimisation",
    ],
  },
];

export const deliverySteps = [
  {
    title: "Plan",
    text: "An advertiser defines the audience, markets, creative, and campaign budget.",
  },
  {
    title: "Bid",
    text: "GetHello evaluates eligible ad opportunities and automates buying in real time.",
  },
  {
    title: "Distribute",
    text: "Connected mobile applications and media inventory deliver the ad to users.",
  },
  {
    title: "Optimise",
    text: "Campaign results inform the next decisions on budget, placement, and creative.",
  },
];

export const appExamples = [
  {
    name: "Hiyo",
    category: "Chat & social discovery",
    initial: "Hi",
    color: "#e5dafa",
    description:
      "A chat and dating app built around meeting new people, nearby discovery, and conversations.",
    publisher: "Anastassiya Rybina · Google Play listing",
    url: "https://play.google.com/store/apps/details?id=com.hiyo.chat.android&hl=en",
    sourceLabel: "View on Google Play",
    source: "https://play.google.com/store/apps/details?id=com.hiyo.chat.android&hl=en",
  },
  {
    name: "BFF",
    category: "Friendship & community",
    initial: "bff",
    color: "#fff0ac",
    description:
      "Bumble’s friendship app for finding friends, connecting in groups, and building community.",
    publisher: "Bumble Inc. · United States",
    url: "https://bumble.com/bff",
    sourceLabel: "Explore BFF",
    source: "https://ir.bumble.com/",
  },
  {
    name: "Yubo",
    category: "Social discovery & chat",
    initial: "Y",
    color: "#e2efb7",
    description:
      "A social discovery app for meeting new people and building friendships through conversation.",
    publisher: "Twelve-App SAS · France",
    url: "https://www.yubo.live/",
    sourceLabel: "Explore Yubo",
    source: "https://www.yubo.live/legal/terms-of-service",
  },
];

export const partners = [
  { name: "TikTok", logo: "/logos/tiktok.svg", url: "https://ads.tiktok.com/business/" },
  { name: "Meta", logo: "/logos/meta.svg", url: "https://www.facebook.com/business/" },
  { name: "Google Ads", logo: "/logos/google-ads.svg", url: "https://ads.google.com/" },
];

export function pageMeta(title: string, description: string) {
  return {
    meta: [
      { title: `${title} — GetHello by Sabupps` },
      { name: "description", content: description },
      { property: "og:title", content: `${title} — GetHello by Sabupps` },
      { property: "og:description", content: description },
    ],
  };
}
