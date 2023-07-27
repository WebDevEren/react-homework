import axios from "axios";

async function getData(number) {
  let { data: user } = await axios(
    `https://jsonplaceholder.typicode.com/users/` + number
  );
  let { data: post } = await axios(
    `https://jsonplaceholder.typicode.com/posts/` + number
  );
console.log("User : ",user);
console.log("post : ",post);
}

export default getData;
