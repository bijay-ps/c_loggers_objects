const restaurant = new Map();

restaurant.set("name", "A2B");
restaurant.set(1, "Chennai");
restaurant.set(2, "Banaglore");
restaurant.set("cuisine", ["North Indian", "South Indian"]);
restaurant.set(true, "Open");
restaurant.set(false, "Closed");

console.log(restaurant.get(true));

console.log(Array.from(restaurant));

restaurant.forEach((e) => {
  console.log(e);
});
