Math.sum = function(arr){
  var sum = 0;
  var not;
  if(Array.isArray(arr)){
    var loop = function(arg){
      if(not){return;}
      arg.forEach(function(val){
        if(not){return;}
        if(Array.isArray(val)){
          loop(val);
        }else{
          if(typeof val == 'number'){
            sum += val;
          }else{
            not = true;
          }
        }
      });
    };
    loop(arr);
    if(not){
      console.error('ERROR: arg include non-numeric');
      return undefined;
    }else{
      return sum;
    }
  }else{
    console.error('ERROR: arg is not array');
    return undefined;
  }
}
Math.average = function(arr){
  var sum = 0;
  var count = 0;
  var not;
  if(Array.isArray(arr)){
    var loop = function(arg){
      if(not){return;}
      arg.forEach(function(val){
        if(not){return;}
        if(Array.isArray(val)){
          loop(val);
        }else{
          if(typeof val == 'number'){
            sum += val;
            count++;
          }else{
            not = true;
          }
        }
      });
    };
    loop(arr);
    if(not){
      console.error('ERROR: arg include non-numeric');
      return undefined;
    }else{
      return sum / count;
    }
  }else{
    console.error('ERROR: arg is not array');
    return undefined;
  }
}
Math.IP= function(arr){
  var sum = 1;
  var not;
  if(Array.isArray(arr)){
    var loop = function(arg){
      if(not){return;}
      arg.forEach(function(val){
        if(not){return;}
        if(Array.isArray(val)){
          loop(val);
        }else{
          if(typeof val == 'number'){
            sum *= val;
          }else{
            not = true;
          }
        }
      });
    };
    loop(arr);
    if(not){
      console.error('ERROR: arg include non-numeric');
      return undefined;
    }else{
      return sum;
    }
  }else{
    console.error('ERROR: arg is not array');
    return undefined;
  }
}
Math.factorial = function(x){
  if(Number.isInteger(x) && x>=0){
    var res = 1;
    function loop(n){
      if(n>0){
        res *= n;
        loop(n-1);
      }else{
        res *= 1;
      }
    }
    loop(x);
    return res;
  }else{
    console.error('ERROR: arg is not positive Integer');
    return undefined;
  }
}
Math.permutation = function(n,r){
  if( n<0 || r<0 || n<r){
    console.error('ERROR: arg is inappropriate');
    return undefined;
  }else{
    return Math.factorial(n) / Math.factorial(n-r);
  }
}
Math.combination = function(n,r){
  if( n<0 || r<0 || n<r){
    console.error('ERROR: arg is inappropriate');
    return undefined;
  }else{
    return Math.factorial(n) / ( Math.factorial(r) * Math.factorial(n-r) );
  }
}