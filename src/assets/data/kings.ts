
export interface King {
  id: string;
  name: string;
  reign: string;
  dynasty: string;
  image: string;
  description: string;
  achievements: string[];
  quote?: string;
}

export const kings: King[] = [
  {
    id: "prithvi-narayan-shah",
    name: "Prithvi Narayan Shah",
    reign: "1743-1775",
    dynasty: "Shah Dynasty",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Prithvi_Narayan_Shah.jpg",
    description: "Prithvi Narayan Shah was the first king of unified Nepal and the founder of the Shah dynasty. He is revered as the father of the nation for his successful campaign of unifying various small kingdoms into the modern nation of Nepal.",
    achievements: [
      "Unified Nepal by conquering and integrating various small kingdoms",
      "Established Kathmandu as the capital of Nepal",
      "Founded the Shah dynasty that ruled Nepal for over 240 years",
      "Implemented administrative reforms that formed the basis of Nepal's governance"
    ],
    quote: "Nepal is a yam between two boulders."
  },
  {
    id: "tribhuvan-bir-bikram-shah",
    name: "Tribhuvan Bir Bikram Shah",
    reign: "1911-1955",
    dynasty: "Shah Dynasty",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/95/King_Tribhuvan_of_Nepal.jpg",
    description: "King Tribhuvan is widely regarded as the Father of the Nation for his leadership in overthrowing the autocratic Rana regime and establishing democracy in Nepal. His actions led to the first democratic experiment in the country.",
    achievements: [
      "Led the revolution against the Rana regime in 1950-1951",
      "Established the first democratic government in Nepal",
      "Reformed the administrative system by abolishing feudal practices",
      "Strengthened Nepal's position in international relations"
    ],
    quote: "The welfare of the people is the ultimate goal of governance."
  },
  {
    id: "mahendra-bir-bikram-shah",
    name: "Mahendra Bir Bikram Shah",
    reign: "1955-1972",
    dynasty: "Shah Dynasty",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/69/King_Mahendra_of_Nepal.jpg",
    description: "King Mahendra introduced the Panchayat system, a party-less form of government, after dismissing Nepal's first democratically elected government. He was known for his nationalist policies and efforts to modernize Nepal.",
    achievements: [
      "Introduced the Panchayat System of governance",
      "Established the East-West Highway, connecting east and west Nepal",
      "Implemented land reform acts to redistribute land to the poor",
      "Enhanced diplomatic relations with China and India"
    ],
    quote: "The Panchayat system is guided by the spirit of the motherland."
  },
  {
    id: "birendra-bir-bikram-shah",
    name: "Birendra Bir Bikram Shah",
    reign: "1972-2001",
    dynasty: "Shah Dynasty",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ec/King_Birendra_of_Nepal_%281920s%29.jpg",
    description: "King Birendra was known as a compassionate and populist monarch who introduced significant democratic reforms, including the constitutional monarchy system in 1990. His reign ended tragically in the royal massacre of 2001.",
    achievements: [
      "Declared Nepal as a Zone of Peace",
      "Instituted democratic reforms, including the 1990 Constitution",
      "Transitioned Nepal to a constitutional monarchy",
      "Expanded educational opportunities through the establishment of universities"
    ],
    quote: "Let us build a New Nepal that is truly peaceful and prosperous."
  },
  {
    id: "gyanendra-bir-bikram-shah",
    name: "Gyanendra Bir Bikram Shah",
    reign: "2001-2008",
    dynasty: "Shah Dynasty",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7d/King_Gyanendra_Bir_Bikram_Shah_of_Nepal.jpg",
    description: "Gyanendra was the last king of Nepal, assuming the throne after the royal massacre. His attempts to assert direct control led to widespread protests that ultimately resulted in the abolition of the monarchy and Nepal becoming a republic in 2008.",
    achievements: [
      "Attempted administrative reforms during his direct rule",
      "Oversaw Nepal through the height of the civil war",
      "Eventually accepted the people's demand for abolition of monarchy",
      "Peaceful transition from monarchy to republic"
    ],
    quote: "I have and will always abide by the will of the people."
  }
];
