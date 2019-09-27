function kaliTerusRekursif(angka) {
  // you can only write your code here!
  let strAngka = String(angka);
  let checkSisa = 1
  for (let i = 0; i < strAngka.length; i++) {
    checkSisa *= Number(strAngka[i])
    // console.log(checkSisa)
  }
  var sisaAngka = String(checkSisa)
  if (sisaAngka.length === 1) {
    return Number(sisaAngka)
  } else {
    return kaliTerusRekursif(sisaAngka)
  }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6