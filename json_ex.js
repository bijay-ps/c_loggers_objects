const obj = {
  userId: 1,
  id: 1,
  title:
    "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
};

console.log("Line 9: ", obj);
const jsonReq = JSON.stringify(obj);
console.log("Line 11: ", jsonReq);

const backToObj = JSON.parse(jsonReq);
console.log(backToObj);
