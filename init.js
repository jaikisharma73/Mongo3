const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then((res) => {
    console.log("Mongoose Connection Successfull");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats = [
  {
    from: "Jaiki",
    to: "Keshav",
    msg: "send me your marksheet",
    created_at: new Date(),
  },
  {
    from: "Mohit",
    to: "Abhishek",
    msg: "send him your Lookooo",
    created_at: new Date(),
  },
  {
    from: "Anurag",
    to: "Mubarak",
    msg: "What is your name bro",
    created_at: new Date(),
  },
  {
    from: "Muskan",
    to: "Sivi",
    msg: "Today is my birthday",
    created_at:new Date()
    },
];

Chat.insertMany(allChats);