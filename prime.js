function identifyPrime(num) {
   
  for(let i=2;i<num;i++){//have to increment 
      if(num%i===0){
          console.log("No")
         return;
         }
  }
  console.log("Yes")
  
}