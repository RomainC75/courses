const list1 = [
  {
    firstName: "Noah",
    lastName: "M.",
    country: "Switzerland",
    continent: "Europe",
    age: 19,
    language: "JavaScript",
  },
  {
    firstName: "Maia",
    lastName: "S.",
    country: "Tahiti",
    continent: "Oceania",
    age: 28,
    language: "JavaScript",
  },
  {
    firstName: "Shufen",
    lastName: "L.",
    country: "Taiwan",
    continent: "Asia",
    age: 35,
    language: "HTML",
  },
  {
    firstName: "Sumayah",
    lastName: "M.",
    country: "Tajikistan",
    continent: "Asia",
    age: 30,
    language: "CSS",
  },
];

function countDevelopers(list) {
  return list.reduce((accu, current) => {
    return current.language === "JavaScript" && current.continent === "Europe"
      ? accu + 1
      : accu;
  }, 0);
}
// function countDevelopers(list) {
//   return list.reduce((accu, current) => {
//     if(current.language === "JavaScript" && current.continent === "Europe"){
//       return accu+1
//     }else{
//       return accu
//     }
//   }, 0);
// }

const res = countDevelopers(list1);
console.log("resultat", res);

const arr = [1,2,3]
const res1 = arr.reduce((accu,current)=>{
    return accu+current
},0)
console.log('res1 : ',res1)
