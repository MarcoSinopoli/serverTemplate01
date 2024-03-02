import { ICategory, IProduct, IUser } from "../types/user.type";

export const users: IUser[] = [
    { 
        id: "1",
        firstName: "Saretta",
        lastName: "Fiorenza",
        age: 28,
        email: "emasd@boh.com",
        subscribed: false,
        premium: false,
    },

    { 
        id: "2",
        firstName: "Longi",
        lastName: "Scherzas",
        age: 98,
        email: "lwetop@boh.com",
        subscribed: true,
        premium: false,
    },

    { 
        id: "3",
        firstName: "Mariella",
        lastName: "Curli",
        age: 58,
        email: "ywer@boh.com",
        subscribed: true,
        premium: true,
    }
];

export const products: IProduct[] = [
    
   { 
    id: "1",
    name: "Trumpet",
    description: "high quality brass craft, standard key Bb",
    category:  {
        id: "222",
        name: "Brass Trumpet Bb new stock",
        businessArea: "Brass",
    },
    stock: true,
   }, 

   { 
    id: "2",
    name: "Tamburine",
    description: "high quality leather craft, from Africa",
    category:  {
        id: "777",
        name: "Tamburine Africa's stock",
        businessArea: "Percussions",
    },
    stock: true,
   },

   { 
    id: "3",
    name: "Wood Flute",
    description: "traditional wooden flute from south Italy",
    category:  {
        id: "888",
        name: "Handmade Flute",
        businessArea: "Woods",
    },
    stock: true,
   },
];
