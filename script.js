
// function date(time = new Date) {
//     var time = new Date(time)


//     var date = time.getDate().toString()
//     var month = (time.getMonth() + 1).toString()
//     var year = time.getFullYear()

//     return  `${date.padStart(2, '0')}.${month.padStart(2, '0')}.${year}`
// }

// var result = date(0000000000002)
// console.log(result);







//yil, oy, hafta, kun, soat, daqiqa soniyani aniqlab beruvchi dastur
const userName = prompt('enter your name');
const age = prompt('enter your age') - 0;
let nowYear = new Date();
let year = nowYear.getFullYear();

let birthYear = year - age;
let livedMonths = age * 12;
let livedWeeks = ((age * 365) / 7).toFixed(0);
let livedDays = age * 365;
let livedHours = livedDays * 24;
let livedMinutes = livedHours * 60;
// let livedSeconds = new Date().valueOf();
let livedSeconds = livedMinutes * 60;


const result = `Qadrli birodarim ${userName} siz ${birthYear}-yilda tug'ilgansiz.
Va siz, shu paytgacha ${livedMonths} oy,
${livedWeeks} hafta,
${livedDays} kun,
${livedHours} soat,
${livedMinutes} daqiqa,
${livedSeconds} soniya yashab bo'ldingiz.

VAQTNI G'ANIMAT BILING!😊`;


alert(result);
