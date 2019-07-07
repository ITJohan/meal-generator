const proteins = ['Kyckling', 'Fläskkött', 'Lax', 'Torsk', 'Nötkött', 'Räkor', 'Ägg', 'Tonfisk', 'Veggis'];
const carbs = ['Pasta', 'Potatis', 'Sötpotatis', 'Ris', 'Quinoa', 'Bulgur', 'Coscos'];
const weekdays = ['Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag', 'Söndag'];
const mainDiv = document.getElementById("main");
let weeklyProteins = [];
let weeklyCarbs = [];
let usedIndexes = [];

while (weeklyProteins.length !== 7) {
  let index = Math.floor(Math.random() * Math.floor(proteins.length));
  if (!usedIndexes.includes(index)){
    weeklyProteins.push(proteins[index]);
    usedIndexes.push(index);
  }
}

usedIndexes = [];

while (weeklyCarbs.length !== 7) {
  let index = Math.floor(Math.random() * Math.floor(carbs.length));
  if (!usedIndexes.includes(index)){
    weeklyCarbs.push(carbs[index]);
    usedIndexes.push(index);
  }
}

for (let i = 0; i < 7; i++) {
  let div = document.createElement("div");
  div.classList.add("meal");
  div.innerHTML = `${weekdays[i]}: ${weeklyProteins[i]} och ${weeklyCarbs[i]}`;
  mainDiv.appendChild(div);
}