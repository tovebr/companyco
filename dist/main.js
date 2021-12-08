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
