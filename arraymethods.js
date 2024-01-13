let cars = [
  {
    Marka: "Toyota",
    Model: "Corolla",
    Fiyat: 150000,
    Renk: "Beyaz",
    Sürücüler: ["Ahmet", "Ayşe"],
  },
  {
    Marka: "Honda",
    Model: "Civic",
    Fiyat: 140000,
    Renk: "Mavi",
    Sürücüler: ["Mehmet", "Fatma"],
  },
  {
    Marka: "Ford",
    Model: "Focus",
    Fiyat: 160000,
    Renk: "Gri",
    Sürücüler: ["Ali", "Zeynep"],
  },
  {
    Marka: "Renault",
    Model: "Megane",
    Fiyat: 155000,
    Renk: "Kırmızı",
    Sürücüler: ["Emre", "Elif"],
  },
  {
    Marka: "Volkswagen",
    Model: "Golf",
    Fiyat: 165000,
    Renk: "Siyah",
    Sürücüler: ["Burak", "Buse"],
  },
  {
    Marka: "Hyundai",
    Model: "i20",
    Fiyat: 145000,
    Renk: "Turuncu",
    Sürücüler: ["Cem", "Ceren"],
  },
  {
    Marka: "Chevrolet",
    Model: "Cruze",
    Fiyat: 158000,
    Renk: "Yeşil",
    Sürücüler: ["Deniz", "Derya"],
  },
  {
    Marka: "Peugeot",
    Model: "308",
    Fiyat: 152000,
    Renk: "Mor",
    Sürücüler: ["Efe", "Ece"],
  },
  {
    Marka: "Kia",
    Model: "Rio",
    Fiyat: 148000,
    Renk: "Bordo",
    Sürücüler: ["Furkan", "Fatoş"],
  },
  {
    Marka: "Nissan",
    Model: "Qashqai",
    Fiyat: 170000,
    Renk: "Gümüş",
    Sürücüler: ["Gizem", "Gökhan"],
  },
];

// Toyota marka araçların modellerini listeleme.

// let carModelList = [];

// for (let i = 0; i < cars.length; i++) {
//   let car = cars[i];
//   if (car.Marka === "Toyota") {
//     carModelList.push(car.Model);
//   }
// }

//Fiyatı 160.000'den düşük olan araçları listeleme.

// let carPriceList = [];

// for (let i = 0; i < cars.length; i++) {
//   let car = cars[i];
//   if (car.Fiyat < 160000) {
//     carPriceList.push(car);
//   }
// }

// carPriceList = cars.filter((car) => car.Fiyat < 160000);

//Siyah renkteki araçların sayısını bulma.

// let blackCarNumber = 0;

// for (let i = 0; i < cars.length; i++) {
//   let car = cars[i];
//   if (car.Renk == "Siyah") {
//     blackCarNumber = blackCarNumber + 1;
//   }
// }

//Araçların fiyatlarının toplamını bulma.

// let totalCarsPrice = 0;

// for (let i = 0; i < cars.length; i++) {
//   let car = cars[i];
//   totalCarsPrice = totalCarsPrice + car.Fiyat;
// }

//Her aracın sürücü sayısını listeleme.

// for (let i = 0; i < cars.length; i++) {
//   let car = cars[i];
//   console.log(car.Marka, car.Sürücüler.length + " Sürücü");
// }

//Mavi renkteki aracın modelini bulma.

// let blueCarModels = cars.find((car) => car.Renk === "Mavi").Model;

//Araçların marka ve modelini birleştirip yeni bir dizi oluşturma.

// let brandModelArray = [];

// for (let i = 0; i < cars.length; i++) {
//   let car = cars[i];
//   car.Marka.split(" ");
//   brandModelArray.push(car.Marka + " " + car.Model);
// }

//Fiyatı en yüksek olan aracın marka, model ve fiyatını bulma.

// let maxPriceCar = cars.reduce(
//   (maxCar, car) => (car.Fiyat > maxCar.Fiyat ? car : maxCar),
//   cars[0]
// );

//Araçların marka isimlerini alfabetik sıraya göre sıralama.

// cars = cars.sort((car1, car2) => (car1.Marka > car2.Marka ? 1 : -1));

//Araçların toplam sürücü sayısını bulma.
// let totalDriver = [];

// for (let i = 0; i < cars.length; i++) {
//   let car = cars[i];
//   for (let j = 0; j < car.Sürücüler.length; j++) {
//     let sürücü = car.Sürücüler[j];
//     totalDriver.push(sürücü);
//   }
// }
// console.log(totalDriver.length);
