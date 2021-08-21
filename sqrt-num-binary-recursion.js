function sqrt_recursive(number, min_interval, max_interval) {
    // write your code here
    if (number < 2)
    return number
    
    var mid=parseInt((min_interval + max_interval) / 2)
    const sqr= mid * mid
    if (sqr === number){
        return mid;  
    }
    if ( sqr < number){
      min_interval=mid + 1
      return sqrt_recursive(number, min_interval, max_interval)
    }
    else{
     return   sqrt_recursive(number , min_interval, mid -1)
  }
    
  }

  function sqrt(number) {
  return sqrt_recursive(number, 0, number)
   
  }
  
  
console.log(sqrt(25))
console.log(sqrt(7056))
