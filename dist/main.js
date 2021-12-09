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
      root.querySelector("main").innerHTML = `<div>
      Hej ${user.firstName} ${user.lastName}! <br>Du har ${user.jackets.length} jackor till salu. Klicka <a>här</a> för att se dina jackor
      <br>Klicka <a>här</a> för att lägga till fler jackor`;
      for (let i = 0; i < user.jackets.length; i++) {
        root.innerHTML += `<div class="product">
        <img alt="${user.jackets[i].img_alt}" src="${user.jackets[i].image}"/>
        <div class="jacketInfo">
        <div class="jacketName">Jacket name: ${user.jackets[i].jacketName}</div>
        <div class="price">Price: ${user.jackets[i].price}</div>
        <div class="fabric">Fabric: ${user.jackets[i].fabric}</div>
        <div class="gender">Gender: ${user.jackets[i].gender}</div>
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
        root.innerHTML = "";
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
