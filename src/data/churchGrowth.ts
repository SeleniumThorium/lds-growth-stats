// Historical growth data for The Church of Jesus Christ of Latter-day Saints
// Sources: Official Church statistical reports

export interface YearlyStats {
  year: number;
  totalMembership: number;
  stakes: number;
  wards: number;
  branches: number;
  missions: number;
  temples: number;
  missionariesServing: number;
}

export const churchGrowthData: YearlyStats[] = [
  { year: 2000, totalMembership: 11068861, stakes: 2581, wards: 25915, branches: 0, missions: 333, temples: 100, missionariesServing: 60784 },
  { year: 2001, totalMembership: 11394522, stakes: 2607, wards: 26143, branches: 0, missions: 334, temples: 102, missionariesServing: 60850 },
  { year: 2002, totalMembership: 11721548, stakes: 2602, wards: 26143, branches: 0, missions: 335, temples: 114, missionariesServing: 61638 },
  { year: 2003, totalMembership: 11985254, stakes: 2624, wards: 26237, branches: 0, missions: 337, temples: 116, missionariesServing: 56237 },
  { year: 2004, totalMembership: 12275822, stakes: 2665, wards: 26670, branches: 0, missions: 338, temples: 119, missionariesServing: 51067 },
  { year: 2005, totalMembership: 12560869, stakes: 2701, wards: 27087, branches: 0, missions: 339, temples: 122, missionariesServing: 52060 },
  { year: 2006, totalMembership: 12868606, stakes: 2745, wards: 27475, branches: 0, missions: 344, temples: 124, missionariesServing: 53164 },
  { year: 2007, totalMembership: 13193999, stakes: 2790, wards: 27827, branches: 0, missions: 344, temples: 124, missionariesServing: 52686 },
  { year: 2008, totalMembership: 13508509, stakes: 2819, wards: 28109, branches: 0, missions: 348, temples: 128, missionariesServing: 52494 },
  { year: 2009, totalMembership: 13824854, stakes: 2865, wards: 28424, branches: 0, missions: 348, temples: 130, missionariesServing: 51736 },
  { year: 2010, totalMembership: 14131467, stakes: 2896, wards: 28660, branches: 0, missions: 340, temples: 134, missionariesServing: 52225 },
  { year: 2011, totalMembership: 14441346, stakes: 2928, wards: 28784, branches: 0, missions: 340, temples: 136, missionariesServing: 55410 },
  { year: 2012, totalMembership: 14782473, stakes: 3005, wards: 29014, branches: 0, missions: 347, temples: 140, missionariesServing: 58990 },
  { year: 2013, totalMembership: 15082028, stakes: 3050, wards: 29253, branches: 0, missions: 405, temples: 141, missionariesServing: 83035 },
  { year: 2014, totalMembership: 15372337, stakes: 3114, wards: 29621, branches: 0, missions: 406, temples: 144, missionariesServing: 85147 },
  { year: 2015, totalMembership: 15634199, stakes: 3141, wards: 30016, branches: 0, missions: 418, temples: 149, missionariesServing: 74079 },
  { year: 2016, totalMembership: 15882417, stakes: 3218, wards: 30304, branches: 0, missions: 421, temples: 155, missionariesServing: 70946 },
  { year: 2017, totalMembership: 16118169, stakes: 3266, wards: 30506, branches: 0, missions: 421, temples: 159, missionariesServing: 67049 },
  { year: 2018, totalMembership: 16313735, stakes: 3383, wards: 30940, branches: 0, missions: 407, temples: 161, missionariesServing: 65137 },
  { year: 2019, totalMembership: 16565036, stakes: 3437, wards: 31136, branches: 0, missions: 399, temples: 166, missionariesServing: 67021 },
  { year: 2020, totalMembership: 16663663, stakes: 3463, wards: 31315, branches: 0, missions: 405, temples: 168, missionariesServing: 51819 },
  { year: 2021, totalMembership: 16805400, stakes: 3498, wards: 31551, branches: 0, missions: 407, temples: 170, missionariesServing: 54539 },
  { year: 2022, totalMembership: 17000000, stakes: 3565, wards: 31894, branches: 0, missions: 411, temples: 177, missionariesServing: 62544 },
  { year: 2023, totalMembership: 17255394, stakes: 3598, wards: 32142, branches: 0, missions: 450, temples: 189, missionariesServing: 72723 },
  { year: 2024, totalMembership: 17503397, stakes: 3688, wards: 32560, branches: 0, missions: 450, temples: 200, missionariesServing: 79091 },
];

export const dataCategories = [
  { key: "totalMembership", label: "Total Membership", color: "#2563eb" },
  { key: "stakes", label: "Stakes", color: "#16a34a" },
  { key: "wards", label: "Wards & Branches", color: "#9333ea" },
  { key: "missions", label: "Missions", color: "#ea580c" },
  { key: "temples", label: "Temples", color: "#dc2626" },
  { key: "missionariesServing", label: "Missionaries Serving", color: "#0891b2" },
] as const;
