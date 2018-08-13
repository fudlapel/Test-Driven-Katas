const twoSum = (arr, target) =>{
  let outputArr = [];

  if(!arr.length){
    return outputArr;
  }

  for(var i = 0; i < arr.length; i++) {
    if(arr[i] + arr[i+1] === target) {
      outputArr.push(i);
      outputArr.push(i+1);
      return outputArr;
    }
  }
}

module.exports = twoSum
