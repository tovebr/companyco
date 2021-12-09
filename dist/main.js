window.onload = function () {
  let logInBtn = document.getElementById("login");
  logInBtn.addEventListener("click", logIn);

  function logIn() {
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    let root = document.getElementById("root");
    /* let logInForm = document.getElementsByClassName("log-in")[0]; */
    const startForm = document.querySelector(".user-start");
    const user = users.find(({ userName }) => userName === username.value);
    if (user == undefined) {
      root.getElementById("mainHeader").innerHTML =
        "Fel användarnamn eller lösenord";
    } else if (password.value == user.password) {
      document.getElementById("mainHeader").innerHTML = `<div class="card">
      <div class="card-body">
      <h5 class="cart-tile">Hej ${user.firstName} ${user.lastName}!</h5> 
      <p class="card-text">Du har ${user.jackets.length} jackor till salu.</p>
      <a href="#" class="card-link">Lägg till ny jacka</a>`;
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
      /* logInForm.style.display = "none"; */
      startForm.style.display = "none";
      let logOut = document.getElementById("log-out");
      logOut.style.display = "block";

      logOut.innerHTML = `${user.userName} <a>Logga ut?</a>`;
      logOut.querySelector("a").addEventListener("click", function () {
        /* logInForm.style.display = "block"; */
        logOut.innerHTML = "Inte inloggad";
        logOut.style.display = "none";
        startForm.style.display = "block";
        document.getElementById("mainHeader").innerHTML = "";
        root.querySelector("main").innerHTML = "";
      });
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
