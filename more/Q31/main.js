



/* 
Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1
*/


Array.prototype.last = function () {
  
    return this.reduce((acc, elem, i) => {
      if (i == this.length - 1) {
        return (acc = elem);
      } 
    }, -1);
  };
  const array = [1,2,3];
  // console.log(array.last()); // 3