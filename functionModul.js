// function buatJus(apel, gula) {
//     return `Jus ${apel} apel + ${gula} sendok gula !`;
// }

// console.log(buatJus(5, 2)); // Output: "Jus 5 apel + 2 sendok gula 🍎!"

// // Fungsi sebagai variabel
// const potongApel = function(jumlah) {
//     return jumlah * 4; // 1 apel dipotong jadi 4 🍴
// };

// // Fungsi sebagai parameter (higher-order function)
// function prosesApel(apel, action) {
//     return action(apel);
// }

// console.log(prosesApel(3, potongApel)); // 12

// function buatPieApel(apel = 5) {
//     return `Pie dengan ${apel} apel 🥧`;
// }

// console.log(buatPieApel()); // "Pie dengan 5 apel 🥧"


// let totalApel = 10; // Global scope

// function kurangiApel() {
//     let apelDikurangi = 2; // Local scope
//     totalApel -= apelDikurangi;
//     console.log(totalApel); // 8
// }

// console.log(apelDikurangi); // Error! Variabelnya cuma ada di dalam fungsi