const { singlePerson, items } = require("./6-alternative-flavor");

console.log(singlePerson);
console.log(singlePerson.name);
console.log(singlePerson.age);
singlePerson.profession.forEach((e) => {
    console.log(e)
})
console.log(items);