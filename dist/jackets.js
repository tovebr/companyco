window.onload = function () {
  let logOut = document.getElementById("log-out");
  logOut.style.display = "block";

  logOut.innerHTML = `${user.userName} <a>Logga ut?</a>`;
  logOut.querySelector("a").addEventListener("click", function () {
    logOut.innerHTML = "Inte inloggad";
    logOut.style.display = "none";

    localStorage.clear();
  });
};
const jackets = [];
users.forEach((user) => {
  console.log(user.firstName);
  user.jackets.forEach((element, i, arr) => {
    // console.log(element);
    jackets.push(arr[i]);
    const html = `
         <div class="card lg-3 my-3 mx-3" style="width: 18rem">
             <img
               class="card-img-top"
               src="${element.image}"
               alt="#"
             />
             <div class="card-body">
               <h5 class="mt-2">${element.name}</h5>
               <h3 class="mt-2">${element.jacketName}</h3>
               <h5 class="mt-1">${element.price}</h5>
               <p class="card-text">${element.fabric}</p>
               <a class="btn bi bi-heart">${element.gender}</a>
               <button href="#" class="user btn btn-primary buyBtn">Buy</button>
             </div>
           </div>`;
    let main = document.querySelector("main");
    main.innerHTML += html;
    buyButton();
  });
});

function buyButton() {
  let main = document.querySelector("main");
  let buyBtn = main.getElementsByClassName("buyBtn");
  Array.from(buyBtn).forEach((btn, i, arr) => {
    btn.addEventListener("click", function () {
      btn.disabled = true;
      const findUser = users.find((u) => u.id == jackets[i].id);
      document.getElementById("mainHeaderInfo").innerHTML += `<div class="card">
      <div class="card-body">
      <p class="card-text"><i class="bi bi-envelope text-danger"></i> ${findUser.firstName} ${findUser.lastName} has been notified for your interest in ${jackets[i].jacketName}</p>`;
      let mailContent = `${user.firstName} ${user.lastName} is interested to buy ${jackets[i].jacketName}`;
      findUser.mail.push(mailContent);
      console.log(findUser);
    });
  });
}

function sendMail() {}

document.addEventListener("DOMContentLoaded", () => {
  const ref = localStorage.getItem("user");
  if (ref) user = JSON.parse(ref);
});
