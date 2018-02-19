/********************************************************************************
MIT License

Copyright (c) 2018 motsu0

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
********************************************************************************/
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