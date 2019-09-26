function totalDigitRekursif(angka) {
    // you can only write your code here!
    const strAngka = String(angka);
    if (strAngka.length === 1) {
      return Number(strAngka)
    } else {
      var sisa = "";
      for (let i = 1; i < strAngka.length; i++) {
        sisa += strAngka[i]
        // console.log(sisa)
      }
      return Number(strAngka[0]) + totalDigitRekursif(Number(sisa))
    }
  }
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5