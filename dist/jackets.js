let user;
window.onload = function () {
  let logOut = document.getElementById("log-out");
  logOut.style.display = "block";

  if (user) {
    logOut.innerHTML = `${user.userName} <a>Logga ut?</a>`;
    logOut.querySelector("a").addEventListener("click", function () {
      logOut.innerHTML = "Inte inloggad";
      logOut.style.display = "none";

      localStorage.clear();
    });
  }
};

function printJackets(jackets) {
  let html = "";
  jackets.forEach((jacket) => {
    html += `
           <div class="card lg-3 my-3 mx-3" style="width: 18rem">
               <img
                 class="card-img-top"
                 src="${jacket.image}"
                 alt="#"
               />
               <div class="card-body">
                 <h5 class="mt-2">${jacket.name}</h5>
                 <h3 class="mt-2">${jacket.jacketName}</h3>
                 <h5 class="mt-1">${jacket.price}</h5>
                 <p class="card-text">${jacket.fabric}</p>
                 <a class="btn bi bi-heart">${jacket.gender}</a>
                 <button href="#" class="user btn btn-primary buyBtn">Buy</button>
               </div>
             </div>`;
  });
  let main = document.querySelector("main");
  main.innerHTML = html;
  buyButton();
}

const jackets = [];
users.forEach((user) => {
  user.jackets.forEach((element, i, arr) => {
    jackets.push(arr[i]);
  });
});
printJackets(jackets);

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

const searchInput = document.querySelector("#searchBar");

searchInput.addEventListener("keyup", () => {
  const searchResult = jackets.filter(
    (jacket) =>
      jacket.name.toLowerCase().includes(searchInput.value.toLowerCase()) ||
      jacket.jacketName
        .toLowerCase()
        .includes(searchInput.value.toLowerCase()) ||
      jacket.fabric.toLowerCase().includes(searchInput.value.toLowerCase())
  );
  printJackets(searchResult);
});

searchInput.addEventListener("search", () => {
  printJackets(jackets);
});

document.addEventListener("DOMContentLoaded", () => {
  const ref = localStorage.getItem("user");
  if (ref) user = JSON.parse(ref);
});
