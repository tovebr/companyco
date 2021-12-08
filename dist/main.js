class Users {
    constructor (firstName, lastName, userName, email, password, jackets) {
        this.firstName= firstName;
        this.lastName= lastName;
        this.userName= userName;
        this.email= email;
        this.password= password;
        this.jackets= jackets;
    }
}

var users= [];

users.push(new Users ("Pelle", "Holgersson", "Plutt", "plutt@gmail.com", "kattmara", ["/img/grönHerr.jpg", "/img/julJacka.jpg"]));

users.push(new Users ("Tristan", "Perez", "Titan", "thor@hetamejlen.se", "älskarMamma", ["/img/orangeFjällraven.jpg", "/img/långSvartPäls.jpeg"]));

users.push(new Users ("Lotta", "Svensson", "Loppan", "lyset@micro.com", "levLivet", ["/img/svarPuff.jpg", "/img/beigeLång"]));





