export const levelUp = (level) => {
  const basePrice = 30;
  return level * basePrice;
};

export const challengeTable = [
  { name: "HOT TALK", price: 10, level: 1, type: "chat" },
  { name: "FLASH PANTIES", price: 25, level: 2, type: "none" },
  { name: "FOCUS BREAST", price: 25, level: 4, type: "none" },
  { name: "FOCUS ASS", price: 25, level: 4, type: "none" },
  { name: "FOCUS PUSSY", price: 25, level: 4, type: "none" },
  { name: "RANDOM POSE", price: 30, level: 7, type: "none" },
  { name: "MASTURBATE", price: 40, level: 10, type: "none" },
  { name: "VIBRO CONTROL", price: 50, level: 12, type: "vibro" },
  { name: "HANDJOB", price: 55, level: 15, type: "manual" },
  { name: "BLOWJOB", price: 55, level: 15, type: "manual" },
  { name: "F-VAGINA", price: 55, level: 15, type: "manual" },
  { name: "F-ANAL", price: 70, level: 15, type: "manual" },
];
