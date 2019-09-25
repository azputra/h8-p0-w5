function attack (damage) {
    // Code disini
    return damage - 2
  }
  
  function damageCalculation (numberOfAttacks, damagePerAttack) {
    // Code disini
    totalAttack = 0;
    // console.log(damagePerAttack, "ini damage lama")
    const newDamage = attack(damagePerAttack);
    // console.log(newDamage, "ini damage baru")
    for (let i = 0; i < numberOfAttacks; i++) {
      totalAttack += newDamage
    }
    return totalAttack;
  }      
  
  // TEST CASE
  console.log(damageCalculation(9, 25)); // 207
  
  console.log(damageCalculation(10, 4)); // 20
  
  console.log(damageCalculation(5, 20)); // 90