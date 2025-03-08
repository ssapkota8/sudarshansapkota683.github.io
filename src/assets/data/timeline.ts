
export interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  description: string;
  image?: string;
}

export const timelineEvents: TimelineEvent[] = [
  {
    id: "malla-dynasty",
    year: "12th-18th Century",
    title: "Malla Dynasty",
    description: "The Malla dynasty ruled over the Kathmandu Valley and surrounding areas, developing art, architecture, and culture that still defines Nepal today. The dynasty split into three kingdoms: Kathmandu, Bhaktapur, and Lalitpur.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Bhaktapur_Durbar_Sq.jpg/1280px-Bhaktapur_Durbar_Sq.jpg"
  },
  {
    id: "unification",
    year: "1768",
    title: "Unification of Nepal",
    description: "Prithvi Narayan Shah conquered the Kathmandu Valley and unified various small kingdoms into the Kingdom of Nepal, establishing the Shah dynasty that would rule for over 240 years.",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Prithvi_Narayan_Shah.jpg"
  },
  {
    id: "anglo-nepalese-war",
    year: "1814-1816",
    title: "Anglo-Nepalese War",
    description: "Nepal fought against the British East India Company, ultimately resulting in the Treaty of Sugauli, which defined Nepal's current boundaries and began diplomatic relations with Britain.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Battle_of_Nalapani_by_Nepalese_painter.jpg/1280px-Battle_of_Nalapani_by_Nepalese_painter.jpg"
  },
  {
    id: "rana-regime",
    year: "1846-1951",
    title: "Rana Regime",
    description: "Jung Bahadur Rana initiated a hereditary Prime Minister system where the Rana family controlled the government while the Shah kings remained as figurehead monarchs.",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/89/Jung_Bahadur_Rana.jpg"
  },
  {
    id: "democracy-movement",
    year: "1950-1951",
    title: "Democracy Movement",
    description: "King Tribhuvan, in alliance with the Nepali Congress Party, led a revolution against the Rana regime, establishing democracy in Nepal for the first time.",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/95/King_Tribhuvan_of_Nepal.jpg"
  },
  {
    id: "panchayat-system",
    year: "1960-1990",
    title: "Panchayat System",
    description: "King Mahendra dismissed the elected government and established the Panchayat system, a party-less form of governance with the monarchy at its center.",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/69/King_Mahendra_of_Nepal.jpg"
  },
  {
    id: "democracy-restoration",
    year: "1990",
    title: "Restoration of Democracy",
    description: "Popular movements forced King Birendra to lift the ban on political parties and establish a constitutional monarchy with a multiparty democracy.",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ec/King_Birendra_of_Nepal_%281920s%29.jpg"
  },
  {
    id: "royal-massacre",
    year: "2001",
    title: "Royal Massacre",
    description: "Crown Prince Dipendra allegedly shot and killed King Birendra and several royal family members before taking his own life, leading to Gyanendra's ascension to the throne.",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7d/King_Gyanendra_Bir_Bikram_Shah_of_Nepal.jpg"
  },
  {
    id: "republic-nepal",
    year: "2008",
    title: "Republic of Nepal",
    description: "Following years of civil war and protests, the Constituent Assembly formally abolished the monarchy, ending the 240-year-old Shah dynasty and declaring Nepal a federal democratic republic.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Flag_of_Nepal.svg/1200px-Flag_of_Nepal.svg.png"
  }
];
