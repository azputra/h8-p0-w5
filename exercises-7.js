function meleeRangedGrouping (str) {
    //your code here
        let arr = [];
        let tempStr = "";
        for(var i = 0; i < str.length; i++){
          // arr = []
          if (str[i] !== ",") {
            tempStr += str[i]
          }
          arr.push(tempStr)
          tempStr = ""
        }
        console.log(arr)
        // tempStr = ""
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  // console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  // console.log(meleeRangedGrouping('')); // []