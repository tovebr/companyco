class Users {
  constructor(firstName, lastName, userName, email, password, jackets) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.userName = userName;
    this.email = email;
    this.password = password;
    this.jackets = jackets;
  }
}

var users = [];

users.push(
  new Users("Pelle", "Holgersson", "Plutt", "plutt@gmail.com", "kattmara", [
    "img/grönHerr.jpg",
    "img/julJacka.jpg",
  ])
);

users.push(
  new Users("Tristan", "Perez", "Titan", "thor@hetamejlen.se", "älskarMamma", [
    "img/orangeFjällraven.jpg",
    "img/långSvartPäls.jpeg",
  ])
);

users.push(
  new Users("Lotta", "Svensson", "Loppan", "lyset@micro.com", "levLivet", [
    "img/svarPuff.jpg",
    "img/beigeLång",
  ])
);

window.onload = function () {
  let logInBtn = document.getElementById("login");
  logInBtn.addEventListener("click", logIn);

  function logIn() {
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    let root = document.getElementById("root");
    let logInForm = document.getElementsByClassName("log-in")[0];
    const user = users.find(({ userName }) => userName === username.value);
    if (user == undefined) {
      root.innerHTML = "Fel användarnamn eller lösenord";
    } else if (password.value == user.password) {
      root.innerHTML = "";
      root.innerHTML = `<div>
      Du har följande jackor`;
      for (let i = 0; i < user.jackets.length; i++) {
        root.innerHTML += `<img src ="${user.jackets[i]}"/>`;
      }
      root.innerHTML += `</div>`;
      logInForm.style.display = "none";
      let logOut = document.getElementById("log-out");
      logOut.style.display = "block";
      logOut.innerHTML = `Välkommen ${user.firstName} ${user.lastName}!<br> <button>Logga ut?</button>`;
      logOut.querySelector("button").addEventListener("click", function () {
        logInForm.style.display = "block";
        logOut.style.display = "none";
        root.innerHTML = "";
      });
    }
  }
};

document.querySelector(".log-in-options").addEventListener("click", (e) => {
  const logIn = document.querySelector(".show-log-in");
  const newUser = document.querySelector(".show-new-user");
  const logInDiv = document.getElementById("log-in");
  const newUserDiv = document.getElementById("new-user");

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
