class Users {
  constructor(firstName, lastName, userName, email, password, id, jackets) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.userName = userName;
    this.email = email;
    this.password = password;
    this.id = id;
    this.jackets = jackets;
    this.mail = [];
  }
}

var users = [];

users.push(
  new Users("Pelle", "Holgersson", "Plutt", "plutt@gmail.com", "kattmara", 1, [
    {
      image: "img/wjacket10.jpg",
      img_alt: "Corduroy Jacket",
      name: "Caroline",
      jacketName: "Corduroy Jacket",
      price: "$69",
      fabric: "100% Corduroy",
      gender: "woman",
      id: 1,
    },
    {
      image: "img/wjacket8.jpg",
      img_alt: "Overshirt Jacket",
      name: "Olga",
      jacketName: "Overshirt Jacket",
      price: "$69",
      fabric: "100% Recycled",
      gender: "women",
      id: 1,
    },
    {
      image: "img/jacket9.jpg",
      img_alt: "Field Jacket",
      name: "Filip",
      jacketName: "Field Jacket",
      price: "$79",
      fabric: "100% Cotton",
      gender: "men",
      id: 1,
    },
  ])
);

users.push(
  new Users(
    "Tristan",
    "Perez",
    "Titan",
    "thor@hetamejlen.se",
    "älskarMamma",
    2,
    [
      {
        image: "img/jacket8.jpg",
        img_alt: "Leather Jacket",
        name: "Leonard",
        jacketName: "Leather Jacket",
        price: "$99",
        fabric: "100% Vegan Leather",
        gender: "men",
        id: 2,
      },
      {
        image: "img/jacket3.jpg",
        img_alt: "Windproof Jacket",
        name: "Wincent",
        jacketName: "Windproof Jacket",
        price: "$79",
        fabric: "100% Cotton",
        gender: "men",
        id: 2,
      },
      {
        image: "img/jacket1.jpg",
        img_alt: "Blazer Jacket",
        name: "Bobby",
        jacketName: "Blazer Jacket",
        price: "$79",
        fabric: "100% Cotton",
        gender: "men",
        id: 2,
      },
    ]
  )
);

users.push(
  new Users("Lotta", "Svensson", "Loppan", "lyset@micro.com", "levLivet", 3, [
    {
      image: "img/jacket9.jpg",
      img_alt: "Field Jacket",
      name: "Filip",
      jacketName: "Field Jacket",
      price: "$79",
      fabric: "100% Cotton",
      gender: "men",
      id: 3,
    },
    {
      image: "img/jacket8.jpg",
      img_alt: "Leather Jacket",
      name: "Leonard",
      jacketName: "Leather Jacket",
      price: "$99",
      fabric: "100% Vegan Leather",
      gender: "men",
      id: 3,
    },
    {
      image: "img/jacket9.jpg",
      img_alt: "Field Jacket",
      name: "Filip",
      jacketName: "Field Jacket",
      price: "$79",
      fabric: "100% Cotton",
      gender: "men",
      id: 3,
    },
  ])
);
