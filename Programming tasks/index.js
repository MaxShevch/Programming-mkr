//Task 1
function findMiddleCharacter() {
    let input = prompt("Please enter a word:");
  
    if (input === null) {
      alert("Canceled.");
      return;
    }
    input = input.trim();

  if (input === "") {
    alert("Invalid value");
    return;
  }

  let length = input.length;
  let middleIndex = Math.floor(length / 2);

  if (length % 2 === 0) {
    
    alert(input.substring(middleIndex - 1, middleIndex + 1));
  } else {
    
    alert(input.charAt(middleIndex));
  }
}
findMiddleCharacter();


//Task 2
function getUniqueSkills(users) {
    const allSkills = users.flatMap(user => user.skills);
    const uniqueSkills = [...new Set(allSkills)];
    return uniqueSkills;
  }
  function getTotalBalance(users) {
    return users
      .filter(user => user.friends.length === 2 && user.age < 30)
      .reduce((total, user) => total + user.balance, 0);
  }
  const users = [
    {
      id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
      name: "Moore Hensley",
      email: "moorehensley@indexia.com",
      eyeColor: "blue",
      friends: ["Sharron Pace"],
      isActive: false,
      balance: 2811,
      skills: ["ipsum", "lorem"],
      gender: "male",
      age: 37,
    },
    {
      id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
      name: "Sharlene Bush",
      email: "sharlenebush@tubesys.com",
      eyeColor: "blue",
      friends: ["Briana Decker", "Sharron Pace"],
      isActive: true,
      balance: 3821,
      skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
      gender: "female",
      age: 34,
    },
    {
      id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
      name: "Ross Vazquez",
      email: "rossvazquez@xinware.com",
      eyeColor: "green",
      friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
      isActive: false,
      balance: 3793,
      skills: ["nulla", "anim", "proident", "ipsum", "elit"],
      gender: "male",
      age: 24,
    },
    {
      id: "249b6175-5c30-44c6-b154-f120923736f5",
      name: "Elma Head",
      email: "elmahead@omatom.com",
      eyeColor: "green",
      friends: ["Goldie Gentry", "Aisha Tran"],
      isActive: true,
      balance: 2278,
      skills: ["adipisicing", "irure", "velit"],
      gender: "female",
      age: 21,
    },
    {
      id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
      name: "Carey Barr",
      email: "careybarr@nurali.com",
      eyeColor: "blue",
      friends: ["Jordan Sampson", "Eddie Strong"],
      isActive: true,
      balance: 3951,
      skills: ["ex", "culpa", "nostrud"],
      gender: "male",
      age: 27,
    }
  ];
  

  const uniqueSkills = getUniqueSkills(users);
  console.log(uniqueSkills);
  
  
  const totalBalance = getTotalBalance(users);
  console.log(totalBalance);