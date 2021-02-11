module.exports = {
  randomNumber (min, max) {
    return Math.floor(min + Math.random() * (max - min + 1));
  },
  // 从小到大排序 改变原数组
  minToMax (arr) {
    let temp = null;
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
          temp = arr[j];
          arr[j] = arr[i];
          arr[i] = temp;
        }
      }
    }
    return arr;
  },
  // 从小到大排序 不影响原数组
  quickSoit (e) {
    let arr = this.deepClone(e)
    if(arr.length <= 1){
      return arr;
    }
    let middleIndex = Math.floor(arr.length / 2);
    var middleNumber = arr.splice(middleIndex, 1)[0];
    var left = [];
    var right = [];
    for(let i=0; i< arr.length; i++) {
      if(arr[i] < middleNumber) {
        left.push(arr[i]);
      } else {
        right.push(arr[i])
      }
    }
    return this.quickSoit(left).concat([middleNumber], this.quickSoit(right) )
  },
  deepClone (obj) {
    let str = JSON.stringify(obj);
    let NewObj = JSON.parse(str);
    return NewObj
  }
}