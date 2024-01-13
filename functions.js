//Sayinin karesini alan fonksiyon
// function myFunc(num) {
//   return num * num;
// }

//2 sayının çarpımını veren arrow fonksiyon
// let square = (a, b) => {
//   return a * b;
// };

//Verilen sayıların toplamını veren fonksiyon
// let x = sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// function sum(...nums) {
//   let sum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     let arg = nums[i];
//     sum += arg;
//   }
//   return sum;
// }

//Verilen sayılardan en büyük olanı bulan fonksiyon
// let maximumNumber = (...numbers) => {
//   let maxNumber = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     let number = numbers[i];
//     if (number > maxNumber) {
//       maxNumber = number;
//     }
//   }
//   return maxNumber;
// };

//Ad ve soyadı birleştiren fonksiyon    (this kullanımı)
// let id = {
//   firstName: "Michael",
//   lastName: "Jackson",
//   fullname: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

//Aracın marka ve fiyatını birleştiren fonksiyon
// let car = {
//   Brand: "Toyota",
//   Model: "Corolla",
//   Price: 150000,
//   Color: "White",
//   Drivers: ["Tessa", "Trevor"],
//   Join: function () {
//     return this.Brand + " markalı aracın fiyati : " + this.Price + " TL";
//   },
// };

// let araba = {
//   Brand: "BMW",
//   Model: "Çakal kasa",
//   Price: 50000,
//   Color: "Blue",
//   Drivers: ["Ali", "Veli"],
// };

// let Join = car.Join.bind(araba);

//Bir dizi içindeki tek sayıları filtreleyen bir fonksiyon

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function oddNumbers() {
//   odds = numbers.filter((number) => number % 2 === 1);
// }
// oddNumbers();
// console.log(odds);

//İki diziyi birleştiren ve sonucu veren fonksiyon

// let a = ["a", "b", "c", "d", "e"];
// let b = [1, 2, 3, 4, 5];
// let c = [];
// function conCat() {
//   c = a.concat(b);
// }
// conCat();
// console.log(c);

let week = {
  Monday: {
    weather: "Cloudy",
    cDegree: 20,
    fDegree: function cToF() {
      this.fDegree = this.cDegree * 1.8 + 32;
    },
    humidity: "Medium",
    wind: "Strong",
    rain: function rainP() {
      if (
        (this.weather === "Cloudy" || this.weather === "Mostly Cloudy") &&
        (this.humidity === "Medium" || this.humidity === "High") &&
        this.cDegree <= 20
      ) {
        this.rain = "Possible";
      } else {
        this.rain = "Uncertain";
      }
    },
    LuckyNumbers: [5, 9, 2, 4],
  },
  Tuesday: {
    weather: "Mostly Cloudy",
    cDegree: 23,
    fDegree: function cToF() {
      this.fDegree = this.cDegree * 1.8 + 32;
    },
    humidity: "Low",
    wind: "Low",
    rain: function rainP() {
      if (
        (this.weather === "Cloudy" || this.weather === "Mostly Cloudy") &&
        (this.humidity === "Medium" || this.humidity === "High") &&
        this.cDegree <= 20
      ) {
        this.rain = "Possible";
      } else {
        this.rain = "Uncertain";
      }
    },
    LuckyNumbers: [2, 3, 6, 8],
  },
  Wednesday: {
    weather: "Clear",
    cDegree: 32,
    fDegree: function cToF() {
      this.fDegree = this.cDegree * 1.8 + 32;
    },
    humidity: "Low",
    wind: "Medium",
    rain: function rainP() {
      if (
        (this.weather === "Cloudy" || this.weather === "Mostly Cloudy") &&
        (this.humidity === "Medium" || this.humidity === "High") &&
        this.cDegree <= 20
      ) {
        this.rain = "Possible";
      } else {
        this.rain = "Uncertain";
      }
    },
    LuckyNumbers: [1, 6, 7, 9],
  },
  Thursday: {
    weather: "Mostly Clear",
    cDegree: 28,
    fDegree: function cToF() {
      this.fDegree = this.cDegree * 1.8 + 32;
    },
    humidity: "Medium",
    wind: "Medium",
    rain: function rainP() {
      if (
        (this.weather === "Cloudy" || this.weather === "Mostly Cloudy") &&
        (this.humidity === "Medium" || this.humidity === "High") &&
        this.cDegree <= 20
      ) {
        this.rain = "Possible";
      } else {
        this.rain = "Uncertain";
      }
    },
    LuckyNumbers: [5, 7, 8, 9],
  },
  Friday: {
    weather: "Mostly Cloudy",
    cDegree: 22,
    fDegree: function cToF() {
      this.fDegree = this.cDegree * 1.8 + 32;
    },
    humidity: "Medium",
    wind: "Strong",
    rain: function rainP() {
      if (
        (this.weather === "Cloudy" || this.weather === "Mostly Cloudy") &&
        (this.humidity === "Medium" || this.humidity === "High") &&
        this.cDegree <= 20
      ) {
        this.rain = "Possible";
      } else {
        this.rain = "Uncertain";
      }
    },
    LuckyNumbers: [1, 3, 6, 8],
  },
  Saturday: {
    weather: "Cloudy",
    cDegree: 18,
    fDegree: function cToF() {
      this.fDegree = this.cDegree * 1.8 + 32;
    },
    humidity: "High",
    wind: "Strong",
    rain: function rainP() {
      if (
        (this.weather === "Cloudy" || this.weather === "Mostly Cloudy") &&
        (this.humidity === "Medium" || this.humidity === "High") &&
        this.cDegree <= 20
      ) {
        this.rain = "Possible";
      } else {
        this.rain = "Uncertain";
      }
    },
    LuckyNumbers: [3, 4, 6, 7],
  },
  Sunday: {
    weather: "Mostly Clear",
    cDegree: 27,
    fDegree: function cToF() {
      this.fDegree = this.cDegree * 1.8 + 32;
    },
    humidity: "Medium",
    wind: "Low",
    rain: function rainP() {
      if (
        (this.weather === "Cloudy" || this.weather === "Mostly Cloudy") &&
        (this.humidity === "Medium" || this.humidity === "High") &&
        this.cDegree <= 20
      ) {
        this.rain = "Possible";
      } else {
        this.rain = "Uncertain";
      }
    },
    LuckyNumbers: [1, 2, 6, 9],
  },
};

//Objedeki fonksiyonları invoke hale getirme
let days = Object.keys(week);

for (let i = 0; i < days.length; i++) {
  var dayName = days[i];
  var day = week[dayName];
  day.rain();
  day.fDegree();
}
let weekMap = new Map();
//Yağmur yağma ihtimali olan günleri gösteren fonksiyon

// function chanceOfRain() {
//   for (let i = 0; i < days.length; i++) {
//     let dayName = days[i];
//     let day = week[dayName];
//     if (day.rain === "Possible") {
//       weekMap.set(dayName, day);
//     }
//   }
// }

// chanceOfRain();
// console.log(weekMap);

//Haftanın en sıcak gününü gösteren fonksiyon

// function hottestDay() {
//   hotDay = "";
//   temp = 0;

//   for (let i = 0; i < days.length; i++) {
//     let dayName = days[i];
//     let day = week[dayName];
//     if (day.cDegree > temp) {
//       hotDay = dayName;
//       temp = day.cDegree;
//     }
//   }
// }

// hottestDay();
// console.log(hotDay, temp);

//Haftanın en şanslı gününü gösteren fonksiyon (Sayıların toplamı en fazla)

// function luckiestDay() {
//   luckyDay = "";
//   luckySum = 0;

//   for (let i = 0; i < days.length; i++) {
//     let dayName = days[i];
//     let day = week[dayName];
//     let sum = day.LuckyNumbers.reduce((sum, number) => sum + number);
//     if (sum > luckySum) {
//       luckyDay = dayName;
//       luckySum = sum;
//     }
//   }
// }
// luckiestDay();
// console.log(luckyDay, luckySum);
