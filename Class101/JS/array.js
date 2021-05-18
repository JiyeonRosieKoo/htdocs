//Array

//// TODO: use 'filter','reduce','forEach','map', and modern for문

const friends = [
  {name: "Rosie", hobbies:"swimming", state: "apply new jobs", address: "seoul", age: 26},
  {name: "Seayong", hobbies:"staying at home", state: "studying", address: "GyunPo", age: 26},
  {name: "Evelyn", hobbies:"playing with her dog", state: "working", address: "seoul", age: 29},
  {name: "Bae", hobbies:"games", state: "working", address: "YangPyung", age: 29},
  {name: "Now Lee", hobbies:"reading", state: "CEO", address: "YangPyung", age: 30}
]
//old-> modern for()
//old version
for(let i = 0; i < friends.length; i++){
  console.log(friends[i]);
}
console.log("=============구분선===============");


//modern for()
for(let friend of friends){
  console.log(friend);
}
console.log("=============구분선===============");


//foreach()
friends.forEach(function(friend){
  console.log(friend);
})
console.log("=============구분선===============");


//map() 배열의 재정렬
const mappedFriend = friends.map(friend => friend.name);
//same
const mappedFriend2 = friends.map(function(friend){
  return friend.name;
})
console.log(mappedFriend);
console.log(mappedFriend2);
console.log("=============구분선===============");


//filter() sql문의 where 절과 비슷하다고 생각하자
const filteredFriend = friends.filter(friend => friend.address === 'seoul');
console.log(filteredFriend);
console.log("=============구분선===============");


//reduce() math역할이 가능한!!
const reducedFriend = friends.reduce((sum, cur)=>{
  return sum + cur.age;
},0);
console.log(reducedFriend);
console.log("=============구분선===============");
