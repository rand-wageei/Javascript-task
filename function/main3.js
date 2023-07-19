function calculateSupply(age, amountPerDay ) {
    const maxage = 100 ;
     yearsremaining = maxage - age;
     amountneeded = yearsremaining*365*amountPerDay;
   
   console.log (`You will need ${amountneeded} to last you until the ripe old age of ${maxage}`);
  }
  calculateSupply(30 , 3)

