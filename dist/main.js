let user;

window.onload = function () {
  let logInBtn = document.getElementById("login");
  const startForm = document.querySelector(".user-start");

  function displayLoggedIn() {
    console.log(user);
    document.getElementById("mainHeaderInfo").innerHTML += `<div class="card">
    <div class="card-body">
    <h5 class="cart-tile">Welcome ${user.firstName} ${user.lastName}!</h5> 
    <p class="card-text">You have ${user.jackets.length} jackets for sale.</p>
    <a data-toggle="collapse" href="#addJacketSection" role="button" aria-expanded="false" aria-controls="addJacketSection" class="card-link">Add new jacket</a>`;
    for (let i = 0; i < user.jackets.length; i++) {
      root.querySelector(
        "main"
      ).innerHTML += `<div class="product card lg-3 my-3 mx-3" style="width: 18rem">
      <img class="card-img-top" alt="${user.jackets[i].img_alt}" src="${user.jackets[i].image}"/>
      <div class="card-body">
        <h5 class="mt-2"> ${user.jackets[i].name}</h5>
        <h3 class="mt-2">${user.jackets[i].jacketName}</h3>
        <h3 class="mt-1">${user.jackets[i].price}</h3>
        <p class="card-text">${user.jackets[i].fabric}</p>
        <a class="btn bi bi-heart"> ${user.jackets[i].gender}</a>
      </div>
      </div>`;
    }
    root.innerHTML += `</div>`;
    startForm.style.display = "none";
    let logOut = document.getElementById("log-out");
    logOut.style.display = "block";

    logOut.innerHTML = `${user.userName} <a>Log out?</a>`;
    logOut.querySelector("a").addEventListener("click", function () {
      logOut.innerHTML = "Not logged in";
      logOut.style.display = "none";
      document.getElementById("mainHeader").style.display = "none";
      startForm.style.display = "block";
      document.getElementById("mainHeaderInfo").innerHTML = "";
      root.querySelector("main").innerHTML = "";
      localStorage.clear();
    });
  }

  user && displayLoggedIn();

  logInBtn.addEventListener("click", logIn);
  function logIn() {
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    let root = document.getElementById("root");
    document.getElementById("mainHeader").style.display = "block";
    user = users.find(({ userName }) => userName === username.value);
    if (user == undefined) {
      root.getElementById("mainHeader").innerHTML =
        "Wrong password or username";
    } else if (password.value == user.password) {
      displayLoggedIn();
      localStorage.setItem("user", JSON.stringify(user));
    }
  }
};

document.querySelector(".log-in-options").addEventListener("click", (e) => {
  const logIn = document.querySelector(".show-log-in");
  const newUser = document.querySelector(".show-new-user");
  const logInDiv = document.getElementById("log-in-div");
  const newUserDiv = document.getElementById("new-user-div");

  let active, inactive;
  if (e.target.classList.contains("show-log-in")) {
    active = "log-in";
    inactive = "new-user";
  }

  if (e.target.classList.contains("inactive") && active === "log-in") {
    newUser.classList.add("inactive");
    logIn.classList.remove("inactive");
    logInDiv.classList.add("log-in");
    logInDiv.classList.remove("hide");
    newUserDiv.classList.remove("new-user");
    newUserDiv.classList.add("hide");
  } else if (e.target.classList.contains("inactive") && active !== "log-in") {
    logIn.classList.add("inactive");
    newUser.classList.remove("inactive");
    newUserDiv.classList.add("new-user");
    newUserDiv.classList.remove("hide");
    logInDiv.classList.remove("log-in");
    logInDiv.classList.add("hide");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const ref = localStorage.getItem("user");
  if (ref) user = JSON.parse(ref);
});
