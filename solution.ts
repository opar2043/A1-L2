

function formatValue(
  value: string | number | boolean
): string | number | boolean | undefined {
  if (typeof value == "string") {
    return value.toUpperCase();
  } else if (typeof value == "number") {
    return value * 10;
  } else if (typeof value == "boolean") {
    return !value;
  }
}

const getLength = (value: string | unknown[]): number | undefined => {
  if (typeof value == "string") {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  }
};


class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

const person1 = new Person("John Doe", 30);
const person2 = new Person("Alice", 25);


type RatedArr = {
  title: string;
  rating: number;
};

const filterByRating = (books: RatedArr[]): RatedArr[] => {
  return books.filter((book) => book.rating > 4);
};



type ActiveUser = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

const filterActiveUsers = (users: ActiveUser[]): ActiveUser[] => {
  return users.filter((user) => user.isActive == true);
};


interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (books: Book) => {
  const available = books.isAvailable;

  return `Title: ${books.title}, Author: ${books.author}, Published: ${
    books.publishedYear
  }, Available: ${available ? "Yes" : "No"}
`;
};

const myBook: Book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  publishedYear: 1925,
  isAvailable: true,
};



const getUniqueValues = (
  arr1: (string | number)[],
  arr2: (string | number)[]
): (string | number)[] => {
  const res: (string | number)[] = [];
  let idx = 0;

  const addIfNotExists = (value: string | number): void => {
    let exists = false;

    for (let i = 0; i < idx; i++) {
      if (res[i] === value) {
        exists = true;
        break;
      }
    }

    if (!exists) {
      res[idx] = value;
      idx++;
    }
  };

  for (let i = 0; i < arr1.length; i++) {
    addIfNotExists(arr1[i]);
  }

  for (let i = 0; i < arr2.length; i++) {
    addIfNotExists(arr2[i]);
  }

  return res;
};



type Products = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

const calculateTotalPrice = (items: Products[]): number => {
  return items.reduce((total, item) => {
    if (item.discount) {
      const discountPrice = item.price * item.quantity;
      const totalprice = discountPrice * (1 - item.discount / 100);
      return totalprice + total;
    } else {
      const totalprice = total + item.price * item.quantity;
      return totalprice;
    }
  }, 0);
};
