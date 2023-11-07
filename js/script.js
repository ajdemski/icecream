// const arrayOfThingsILike = ["bubble baths", "kittens", "good books", "clean code"];
// const ulooo = document.querySelector("ul#likable-things");
// arrayOfThingsILike.forEach(function(thing) {
//   const li = document.createElement("li");
//   li.append(thing);
//   ul.append(li);
// });

document.addEventListener("DOMContentLoaded", function() {

  const iceCreamFlavors = ["vanila", "coconat", "abd"]

const ul = document.querySelector("ul#flavorList")

iceCreamFlavors.forEach(function(ice) {
    const li = document.createElement ("li");
    li.append(ice);
    ul.appendChild(li)
})
});
