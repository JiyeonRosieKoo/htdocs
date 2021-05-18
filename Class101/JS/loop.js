const animals = [
  {name: "monkey", size: "medium", isAggressive: false, weight: 20},
  {name: "lion", size: "big", isAggressive: true, weight: 100},
  {name: "tiger", size: "big", isAggressive: true, weight: 200},
  {name: "hippo", size: "big", isAggressive: true, weight: 600},
  {name: "cat", size: "small", isAggressive: false, weight: 10}
];

console.log(animals);

//과거의 정통적인 for문
for(let i = 0; i < animals.length; i++){
  console.log(animals[i]);
}

//*****세련된 방식의 for문
for(let animal of animals){
  console.log(animal);
}

// forEach, map, reduce, filter API설명

//forEach
animals.forEach(function (animal, index){
  console.log(animal, index);
});

//map 배열을 재정의 할 떄 사용
const mappedAnimal = animals.map(function(animal){
  return animal.name+" is "+animal.size;
});
console.log(mappedAnimal);


//filter 필터
const filteredAnimal = animals.filter(function (animal) {
  return animal.weight >= 200 && animal.size === 'big';
})
console.log(filteredAnimal);


//reduce
 const reduceAnimal = animals.reduce((acc, cur)=>{
   return acc + cur.weight;
 },0);
console.log(reduceAnimal);
