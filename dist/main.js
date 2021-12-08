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
  let username = document.getElementById("username");
  let password = document.getElementById("password");
  let logInBtn = document.getElementById("login");
  let root = document.getElementById("root");

  logInBtn.addEventListener("click", function () {
    root.innerHTML = "";
    for (let i = 0; i < users.length; i++) {
      if (
        users[i].userName == username.value &&
        users[i].password == password.value
      ) {
        root.innerHTML = `
        <div>
        <p><h3>Välkommen ${users[i].firstName} ${users[i].lastName}!</h3></p>
        <div>Du har följande jackor</div>`;
        for (let x = 0; x < users[i].jackets.length; x++) {
          root.innerHTML += `<img src="${users[i].jackets[x]}" alt="" />`;
        }
        root.innerHTML += `</div>`;
      }
    }
  });
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
