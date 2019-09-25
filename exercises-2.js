function changeVocals (str) {
    //code di sini
    const temp = [];
    for (let i = 0; i < str.length; i++) {
            if (str[i] === "a" || str[i] === "i" || str[i] === "u" || str[i] === "e" || str[i] === "o" || str[i] === "A" || str[i] === "I" || str[i] === "U" || str[i] === "E" || str[i] === "O") {
              let strDariAscii = str[i].charCodeAt();
              // console.log(strDariAscii, "sebelum")
              strDariAscii++;
              temp.push(String.fromCharCode(strDariAscii));
              // console.log(temp)
              // console.log(strDariAscii, "sesudah")
            } else {
              temp.push(str[i]);
            }
    }
    return temp;
  }
  
  function reverseWord (str) {
    //code di sini
    let newStr = [];
    for (let i = str.length-1; i >= 0; i--) {
      newStr.push(str[i]);
    }
    return newStr;
  }
  
  function setLowerUpperCase (str) {
    //code di sini
    const temp = [];
    for (let i = 0; i < str.length; i++) {
      let StrBaruDariAscii = str[i].charCodeAt();
      // console.log("sebelum", StrBaruDariAscii)
      if (StrBaruDariAscii <= 90 && StrBaruDariAscii >= 65) {
        // console.log("sesudah", StrBaruDariAscii + 32)
        StrBaruDariAscii += 32;
        temp.push(String.fromCharCode(StrBaruDariAscii))
      } else if (StrBaruDariAscii <= 122 && StrBaruDariAscii >= 97) {
        StrBaruDariAscii -= 32;
        temp.push(String.fromCharCode(StrBaruDariAscii))
      }
    }
    return temp
  }
  
  function removeSpaces (str) {
    //code di sini
    return str.join("")

  }
  
  function passwordGenerator (name) {
    //code di sini
    if (name.length < 5) {
      return `Minimal karakter yang diinputkan adalah 5 karakter`
    }
    
    const ubahVocal = changeVocals(name);
    const balikKata = reverseWord(ubahVocal);
    const setKecilBesarHuruf = setLowerUpperCase(balikKata);
    const hapusSpasi = removeSpaces(setKecilBesarHuruf);
    return hapusSpasi
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'