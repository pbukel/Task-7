/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją showObjectKeys, kuri kaip argumentą priims objectą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
  marke: "audi",
  model: "A6",
  year: 2005,
  color: "white",
};

console.log(showObjectKeys(audi));

function showObjectKeys(object) {
  return Object.keys(object);
}
