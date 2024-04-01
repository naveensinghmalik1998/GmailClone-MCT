"use strict";

const data = [
  
  {
    sender: "Sadam",
    date: "Dec, 12",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  
  {
    sender: "Twitter",
    date: "Dec, 22",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  
  {
    sender: "Yahye",
    date: "Dec, 14",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  
  {
    sender: "Sadam",
    date: "Jan, 11",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },

  {
    sender: "Qadar",
    date: "Dec, 12",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  
  {
    sender: "John",
    date: "Oct, 26",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  
  {
    sender: "Slaf",
    date: "Dec, 21",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  
  {
    sender: "Sadam",
    date: "Dec, 10",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  
  {
    sender: "Farah",
    date: "May, 20",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  
  {
    sender: "Alex",
    date: "Feb, 12",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  
  {
    sender: "Alex",
    date: "Jun, 25",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  
  {
    sender: "Moe",
    date: "Sep, 28",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },

  {
    sender: "Jey",
    date: "Jan, 17",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },

  {
    sender: "Adam",
    date: "Nov, 15",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  
  {
    sender: "Joe",
    date: "Apr, 23",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },

  {
    sender: "Sadam",
    date: "Jul, 28",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },

  {
    sender: "Slef",
    date: "Dec, 31",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
];

const messages = document.querySelector(".messages_area");

const render = function (data) {
  messages.innerHTML = data
    .map(
      (d) => `<div class="messages">
  <div class="messages_left">
    <div class="check check_2">
      <img src="./img/checkbox.png" alt="" />
      <span> <ion-icon name="checkmark"></ion-icon> </span>
    </div>
    <ion-icon name="star-outline" class="hover star"></ion-icon>
    <span>${d.sender}</span>
  </div>
  <div class="messages_content">${d.message}</div>
  <div class="messages_date">${d.date}</div>
</div>`
    )
    .join(" ");
};

render(data);