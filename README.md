 const arrayOfThingsILike = ["bubble baths", "kittens", "good books", "clean code"];
> const ul = document.querySelector("ul#likable-things");
> arrayOfThingsILike.forEach(function(thing) {
  const li = document.createElement("li");
  li.append(thing);
  ul.append(li);
});