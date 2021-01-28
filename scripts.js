let objOne = {
    name: "Christian Pulisic",
    position: Midfielder,
    teams: ["Chelsea FC", "Dortmund"]
};

let objTwo = {
    name: "Cristiano Ronaldo",
    position: Forward,
    teams: ["Juventus", "Real Madrid"]
};

let objThree = {
    name: "Lionel Messi",
    position: forward,
    teams: ["Barcelona", "Argentina"]
};

console.log(objOne.name);
console.log(objTwo.position);
console.log(objThree.teams[1]);


let arr = [1, 2, 3, "soccer", "player"];

for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}