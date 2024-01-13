// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let oddNumbers;
// let evenNumbers;

// let doubledNumbers;

// oddNumbers = numbers.filter((number) => number % 2 === 1); //Tek sayilar
// evenNumbers = numbers.filter((number) => number % 2 === 0); //Çift sayilar

// doubledNumbers = numbers.map((number) => number * number); //Sayıların karesi

// let ogrenciler = [
//   {
//     id: "abc123",
//     ad: "Ali",
//     yas: 20,
//     dersler: ["Matematik", "Fizik", "Kimya"],
//   },
//   {
//     id: "def456",
//     ad: "Ayşe",
//     yas: 22,
//     dersler: ["Biyoloji", "Tıp", "Anatomi"],
//   },
//   {
//     id: "ghi789",
//     ad: "Emre",
//     yas: 21,
//     dersler: ["Bilgisayar Bilimleri", "Veritabanı", "Algoritmalar"],
//   },
//   {
//     id: "jkl012",
//     ad: "Ceren",
//     yas: 19,
//     dersler: ["Edebiyat", "Tarih", "Felsefe"],
//   },
//   {
//     id: "mno345",
//     ad: "Mehmet",
//     yas: 23,
//     dersler: ["Makine Mühendisliği", "Malzeme Bilimi", "Termodinamik"],
//   },
//   {
//     id: "pqr678",
//     ad: "Elif",
//     yas: 20,
//     dersler: ["İşletme", "Pazarlama", "Finans"],
//   },
//   {
//     id: "stu901",
//     ad: "Can",
//     yas: 22,
//     dersler: ["Moleküler Biyoloji", "Genetik", "Biyoistatistik"],
//   },
//   {
//     id: "vwx234",
//     ad: "Zeynep",
//     yas: 21,
//     dersler: ["Grafik Tasarım", "Web Geliştirme", "UI/UX"],
//   },
//   {
//     id: "yz0123",
//     ad: "Burak",
//     yas: 20,
//     dersler: ["Elektrik Mühendisliği", "Elektronik", "Sinyaller ve Sistemler"],
//   },
//   {
//     id: "abc456",
//     ad: "Ece",
//     yas: 22,
//     dersler: ["Psikoloji", "Sosyoloji", "Nöroloji"],
//   },
// ];
// let coppiedStudents = [...ogrenciler];
// ogrenciler = ogrenciler.filter((ogrenci) => ogrenci.yas > 21); //Yasi 21 den büyük olanları filtreler

// ogrenciler = ogrenciler.sort(
//   (ogrenci1, ogrenci2) => ogrenci1.yas - ogrenci2.yas //Yaslari büyükten küçüğe filtreler
// );

// ogrenciler = ogrenciler.sort(
//   (
//     ogrenci1,
//     ogrenci2 //A dan z ye isme göre sıralama
//   ) => (ogrenci1.ad > ogrenci2.ad ? 1 : -1)
// );

// let tumDersler = [];
// //Derslerin hepsini tek bir array yapar
// /* for (let i = 0; i < ogrenciler.length; i++) {
//   for (let j = 0; j < ogrenciler[i].dersler.length; j++) {
//     tumDersler.push(ogrenciler[i].dersler[j]);
//   }
// } */

// //İçinde b geçen dersler
// for (let i = 0; i < coppiedStudents.length; i++) {
//   for (let j = 0; j < coppiedStudents[i].dersler.length; j++) {
//     if (coppiedStudents[i].dersler[j].includes("b")) {
//       tumDersler.push(coppiedStudents[i].dersler[j]);
//     }
//   }
// }

// let ogrenciListesi = [];
// let dersler = [];

// for (i = 0; i < ogrenciler.length; i++) {
//   if (ogrenciler[i].id.includes(9)) {
//     for (j = 0; j < ogrenciler[i].dersler.length; j++) {
//       dersler.push(ogrenciler[i].dersler[j]);
//     }
//     ogrenciListesi.push(ogrenciler[i]);
//   }
// }

let arabaArray = [
  {
    model: "Mercedes",
    yil: 2022,
    kilometre: 8000,
    kullananlar: ["Ahmet", "Ayşe", "Mehmet"],
    sahip: {
      isim: "Eren",
      soyisim: "Yılmaz",
      yas: 32,
    },
  },
  {
    model: "BMW",
    yil: 2021,
    kilometre: 12000,
    kullananlar: ["Fatma", "Veli", "Zeynep"],
    sahip: {
      isim: "Cem",
      soyisim: "Aydın",
      yas: 28,
    },
  },
  {
    model: "Audi",
    yil: 2020,
    kilometre: 18000,
    kullananlar: ["Selin", "Okan", "Ece"],
    sahip: {
      isim: "Deniz",
      soyisim: "Koç",
      yas: 35,
    },
  },
  {
    model: "Toyota",
    yil: 2019,
    kilometre: 22000,
    kullananlar: ["Berk", "Elif", "Mert"],
    sahip: {
      isim: "Gizem",
      soyisim: "Şahin",
      yas: 31,
    },
  },
  {
    model: "Honda",
    yil: 2018,
    kilometre: 28000,
    kullananlar: ["Oğuz", "Seda", "Kaan"],
    sahip: {
      isim: "Esra",
      soyisim: "Acar",
      yas: 29,
    },
  },
  {
    model: "Ford",
    yil: 2017,
    kilometre: 32000,
    kullananlar: ["Gül", "Hakan", "Selim"],
    sahip: {
      isim: "Tolga",
      soyisim: "Öztürk",
      yas: 34,
    },
  },
  {
    model: "Chevrolet",
    yil: 2016,
    kilometre: 38000,
    kullananlar: ["Derya", "İsmail", "Nazlı"],
    sahip: {
      isim: "Burak",
      soyisim: "Yıldırım",
      yas: 33,
    },
  },
  {
    model: "Nissan",
    yil: 2015,
    kilometre: 42000,
    kullananlar: ["Gizem", "Efe", "Kübra"],
    sahip: {
      isim: "Umut",
      soyisim: "Demir",
      yas: 30,
    },
  },
  {
    model: "Hyundai",
    yil: 2014,
    kilometre: 48000,
    kullananlar: ["Onur", "Sema", "Emre"],
    sahip: {
      isim: "İlayda",
      soyisim: "Yıldız",
      yas: 27,
    },
  },
  {
    model: "Volkswagen",
    yil: 2013,
    kilometre: 52000,
    kullananlar: ["Mustafa", "Cansu", "Tolga"],
    sahip: {
      isim: "Melis",
      soyisim: "Aydın",
      yas: 36,
    },
  },
  {
    model: "Kia",
    yil: 2012,
    kilometre: 58000,
    kullananlar: ["Şeyma", "Furkan", "Emine"],
    sahip: {
      isim: "Erdem",
      soyisim: "Kılıç",
      yas: 25,
    },
  },
  {
    model: "Subaru",
    yil: 2011,
    kilometre: 62000,
    kullananlar: ["Yusuf", "Aylin", "Ozan"],
    sahip: {
      isim: "Zeynep",
      soyisim: "Arslan",
      yas: 29,
    },
  },
  {
    model: "Mazda",
    yil: 2010,
    kilometre: 68000,
    kullananlar: ["Hasan", "Ezgi", "Mertcan"],
    sahip: {
      isim: "Burcu",
      soyisim: "Kaya",
      yas: 32,
    },
  },
  {
    model: "Jaguar",
    yil: 2009,
    kilometre: 72000,
    kullananlar: ["Nihan", "Burak", "Merve"],
    sahip: {
      isim: "Emre",
      soyisim: "Taş",
      yas: 33,
    },
  },
  {
    model: "Lexus",
    yil: 2008,
    kilometre: 78000,
    kullananlar: ["Müge", "Oktay", "Gizem"],
    sahip: {
      isim: "Efe",
      soyisim: "Kaplan",
      yas: 28,
    },
  },
  {
    model: "Tesla",
    yil: 2007,
    kilometre: 82000,
    kullananlar: ["Ahmet", "Ebru", "Kerem"],
    sahip: {
      isim: "Zeynep",
      soyisim: "Kara",
      yas: 31,
    },
  },
  {
    model: "Porsche",
    yil: 2006,
    kilometre: 88000,
    kullananlar: ["Serkan", "Nur", "Hüseyin"],
    sahip: {
      isim: "Can",
      soyisim: "Arslan",
      yas: 35,
    },
  },
];

// let arabaModelleri = [];

// for (i = 0; i < arabaArray.length; i++) {
//   let araba = arabaArray[i];
//   if (araba.sahip.yas > 30) {
//     arabaModelleri.push(araba.model);
//   }
// }
// console.log(arabaModelleri);

//Arabası Km 40000 den yüksek olanların  kullananların adında u olanları listeleme

// let kullaniciListe = [];

// for (let i = 0; i < arabaArray.length; i++) {
//   let araba = arabaArray[i];
//   if (araba.kilometre > 40000) {
//     for (let j = 0; j < araba.kullananlar.length; j++) {
//       let kullanici = araba.kullananlar[j];
//       if (kullanici.includes("u")) {
//         kullaniciListe.push(kullanici);
//       }
//     }
//   }
// }
// console.log(kullaniciListe);
// Km 50000 den yüksek yili 2015 den küçük olanları arabayı listeleme

// let arabaListe = [];

// for (i = 0; i < arabaArray.length; i++) {
//   let araba = arabaArray[i];
//   if (araba.kilometre > 50000 && araba.yil < 2015) {
//     arabaListe.push(araba);
//   }
// }

// arabaListe = arabaArray.filter(
//   (araba) => araba.kilometre > 50000 && araba.yil < 2015
// );

// console.table(arabaListe);

//Arabaları kullananların birinci kişisinin adının ilk harfi, sahibinin adının ilk harfine eşitse arabayı listele

// let arabaList = [];

// arabaList = arabaArray.filter(
//   (araba) => araba.kullananlar[0].charAt(0) == araba.sahip.isim.charAt(0)
// );

//Arabanın sahibinin soy isminin son harfi kullananların herhangi birinin adında geçiyorsa arabayı listele

// let carList = [];

// for (let i = 0; i < arabaArray.length; i++) {
//   let araba = arabaArray[i];
//   for (let j = 0; j < araba.kullananlar.length; j++) {
//     let kullanici = araba.kullananlar[j];
//     if (
//       kullanici.includes(
//         araba.sahip.soyisim.charAt(araba.sahip.soyisim.length - 1)
//       )
//     ) {
//       carList.push(araba);
//     }
//   }
// }

//Arabanın sahibinin soy isminin son harfi kullananların ikincisinin  adında geçiyorsa arabayı listele

// for (let i = 0; i < arabaArray.length; i++) {
//   let araba = arabaArray[i];
//   if (
//     araba.kullananlar[1].includes(
//       araba.sahip.soyisim.charAt(araba.sahip.soyisim.length - 1)
//     )
//   ) {
//     carList.push(araba);
//   }
// }

//100 ile 200 sayılarının arasında 23 ün katı olan sayıların toplamını hesaplayıp ekrana yazdıran Javascript kodunu yazınız.

// let toplam = 0;

// for (i = 100; i < 200; i++) {
//   if (i % 23 === 0) {
//     toplam = toplam + i;
//   }
// }
