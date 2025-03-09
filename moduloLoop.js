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

const arr = [5, 3, 8, 2, 7, 11, 30, -33, 98];
for (let i = 0; i < arr.length; i++) {         // Loop utama
  for (let j = 0; j < arr.length - 1; j++) {   // Loop perbandingan
    if (arr[j] > arr[j + 1]) {
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Tukar nilai
    }
  }
}
console.log(arr); // Output: [2, 3, 5, 8]
