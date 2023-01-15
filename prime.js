function twoPrimes(a,b) {
    if(isPrime(a) && isPrime(b)){
        console.log("True")
    }else{
        console.log("False")
    }

}

function isPrime(num){
    for(let i=2;i<num;i++){
        if(num%i===0){
            return false
        }
    }
    return true
}
