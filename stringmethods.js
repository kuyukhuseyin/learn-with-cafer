let text = "This is a text";

//  Metni ters çevirme

// let reversedText = text.split("").reverse().join("");

//Metnin kaç karakterden oluştuğunu bulma.

// console.log(text.length);

//Cümledeki kelime sayısını bulma.

// let wordNumberText = text.split(" ").length;

//Metni küçük harflere çevirme.

// let lowerCasedText = text.toLowerCase();

//Metni büyük harflere çevirme.

// let upperCasedText = text.toUpperCase();

//Metnin başındaki ve sonundaki boşlukları silme.

// let nospaceText = text.trim();

//Metni kelime kelime ayırma ve her kelimenin baş harfini büyük yazma.

// let upperCasedWords = text
//   .split(" ")
//   .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//   .join(" ");

//Bir metni belirli bir karaktere göre bölen bir diziye çevirme.

// let joinedText = text.split(" ").join("/");

// Belirlenen bir kelimenin indexini bulma.

// let word = "is";
// let index = text.indexOf(word);

//String içinde en çok geçen kelimeyi bulma.
// let string =
//   "sdfsdf sdfsdf sdf asddasd asd sd asd asd asd sdf sdf sdf asd asd wrd dasd asdwr asd rsdr fscxv sadf da asd sdf asd sdf sdf asd sdf sdf asd sdf sdf asd sdf sasd asda asdsdf asdf asdf asad asdas asd asd asdf";

// let obj = {};

// let splittedString = string.split(" ");

// for (let i = 0; i < splittedString.length; i++) {
//   let word = splittedString[i];
//   //Kelime objede yoksa objeye ekle ve değerini 1 yap
//   if (!obj[word]) {
//     obj[word] = 1;
//     //Kelime objede varsa sayısını arttır
//   } else {
//     obj[word]++;
//   }
// }

// // En çok geçen kelimeyi bulma
// let maxWord = "";
// let maxCount = 0;
// //Buradaki for döngüsü ile ilog cplex syntaxindaki for döngüsü aynı onu farkettim sürekli i ile yaptığım için zorlandım
// for (let word in obj) {
//   if (obj[word] > maxCount) {
//     maxWord = word;
//     maxCount = obj[word];
//   }
// }
// console.log(maxWord, maxCount);

// let hashMap = new Map();

// for (let i = 0; i < splittedString.length; i++) {
//   let word = splittedString[i];
//   if (!hashMap.has(word)) {
//     hashMap.set(word, 1);
//   } else {
//     hashMap.set(word, hashMap.get(word) + 1);
//   }
// }

// console.log(hashMap);
