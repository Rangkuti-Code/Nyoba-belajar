// for (let i = 1; i <= 100; i++) {
//     if (i % 28 === 0) { // Kelipatan 4 dan 7 (KPK = 28)
//       console.log("FOURSEVEN");
//     } else if (i % 4 === 0) {
//       console.log("FOUR");
//     } else if (i % 7 === 0) {
//       console.log("SEVEN");
//     } else {
//       console.log(i);
//     }
//   }

  // //nested loop
  // for (let i = 0; i < 3; i++) {       // Outer loop
  //   console.log(`Outer: ${i}`);
    
  //   for (let j = 0; j < 2; j++) {    // Inner loop
  //     console.log(`  Inner: ${j}`);
  //   }
  // }


  //matrik grid use case nested loop
  // const matrix = [
  //   [1, 2, 3],
  //   [4, 5, 6],
  //   [7, 8, 9]
  // ];
  
  // for (let row = 0; row < 3; row++) {         // Loop baris
  //   for (let col = 0; col < 3; col++) {       // Loop kolom
  //     console.log(matrix[row][col]); 
  //   }
  // }


  // pola bintang
//   let pattern = "";
// for (let i = 1; i <= 5; i++) {           // Loop baris
//   for (let j = 1; j <= i; j++) {         // Loop kolom (bintang per baris)
//     pattern += "#";
//   }
//   pattern += "\n";
// }
// console.log(pattern);

// const arr = [5, 3, 8, 2, 7, 11, 30, -33, 98];
// for (let i = 0; i < arr.length; i++) {         // Loop utama
//   for (let j = 0; j < arr.length - 1; j++) {   // Loop perbandingan
//     if (arr[j] > arr[j + 1]) {
//       [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Tukar nilai
//     }
//   }
// }
// console.log(arr); // Output: [2, 3, 5, 8]


//nested loop while dalam for
// for (let i = 1; i <= 3; i++) {
//   console.log(`Iterasi ke-${i}`);
  
//   let j = 1;
//   while (j <= 2) {
//     console.log(`  Sub-iterasi ke-${j}`);
//     j++;
//   }
// }

// let n = 5;

// for (let i = 0; i < n; i++) {       // O(n)
//   for (let j = 0; j < n; j++) {     // O(n)
//     // Operasi O(1)
//   }
// }
// // Total: O(n × n) = O(n²)

// Tips & Best Practice
// Hindari Nested Loop Dalam (>2 level) untuk mencegah kompleksitas tinggi.
// Gunakan Fungsi Terpisah untuk inner loop jika logika terlalu rumit.
// Break/Continue bisa digunakan untuk mengontrol aliran, tetapi hati-hati dengan scope.
// Optimasi dengan Cache nilai yang sering diakses (misal: array.length).


// for (let i = 2; i <= 100; i++) {       // Loop utama (angka yang dicek)
//   let isPrime = true;                  // Flag untuk menKaliani bilangan prima

//   for (let j = 2; j < i; j++) {        // Loop pembagi (2 hingga i-1)
//     if (i % j === 0) {                 // Jika i habis dibagi j
//       isPrime = false;                 // Bukan bilangan prima
//       break;                           // Keluar dari loop dalam
//     }
//   }

//   if (isPrime) {                       // Jika isPrime tetap true
//     console.log(i);                    // Tampilkan bilangan prima
//   }
// }

// LOOPING PERTAMA
console.log("LOOPING PERTAMA");

let i = 1;
while (i <= 10) {
  console.log(i + " - I love coding");
  i++;
}

// LOOPING KEDUA
console.log("LOOPING KEDUA");

let j = 10;
while (j >= 1) {
  console.log(j + " - I will become a frontend developer");
  j--;
}