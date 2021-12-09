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
      {
        image: "img/wjacket10.jpg",
        img_alt: "Corduroy Jacket",
        name: "Caroline",
        jacketName: "Corduroy Jacket",
        price: "$69",
        fabric: "100% Corduroy",
        gender: "woman",
      },
      {
        image: "img/wjacket8.jpg",
        img_alt: "Overshirt Jacket",
        name: "Olga",
        jacketName: "Overshirt Jacket",
        price: "$69",
        fabric: "100% Recycled",
        gender: "women",
      },
      {
        image: "img/jacket9.jpg",
        img_alt: "Field Jacket",
        name: "Filip",
        jacketName: "Field Jacket",
        price: "$79",
        fabric: "100% Cotton",
        gender: "men",
      },
    ])
  );
  
  users.push(
    new Users("Tristan", "Perez", "Titan", "thor@hetamejlen.se", "älskarMamma", [
      {
        image: "img/jacket8.jpg",
        img_alt: "Leather Jacket",
        name: "Leonard",
        jacketName: "Leather Jacket",
        price: "$99",
        fabric: "100% Vegan Leather",
        gender: "men",
      },
      {
        image: "img/jacket3.jpg",
        img_alt: "Windproof Jacket",
        name: "Wincent",
        jacketName: "Windproof Jacket",
        price: "$79",
        fabric: "100% Cotton",
        gender: "men",
      },
      {
        image: "img/jacket1.jpg",
        img_alt: "Blazer Jacket",
        name: "Bobby",
        jacketName: "Blazer Jacket",
        price: "$79",
        fabric: "100% Cotton",
        gender: "men",
      },
    ])
  );
  
  users.push(
    new Users("Lotta", "Svensson", "Loppan", "lyset@micro.com", "levLivet", [
      {
        image: "img/jacket9.jpg",
        img_alt: "Field Jacket",
        name: "Filip",
        jacketName: "Field Jacket",
        price: "$79",
        fabric: "100% Cotton",
        gender: "men",
      },
      {
        image: "img/jacket8.jpg",
        img_alt: "Leather Jacket",
        name: "Leonard",
        jacketName: "Leather Jacket",
        price: "$99",
        fabric: "100% Vegan Leather",
        gender: "men",
      },
      {
        image: "img/jacket9.jpg",
        img_alt: "Field Jacket",
        name: "Filip",
        jacketName: "Field Jacket",
        price: "$79",
        fabric: "100% Cotton",
        gender: "men",
      },
    ])
  );