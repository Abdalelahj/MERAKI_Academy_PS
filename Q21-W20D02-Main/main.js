/* isValidWalk */
/*
You live in the new city where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- every time you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!). */

const isValidWalk = (walks) => {
  // YOUR CODE HERE
  let count = {};
  let NS = [];
  let EW = [];
  walks.map((elem) => (count[elem] = (count[elem] || 0) + 1));
  if(walks.length===10){

    for (const key in count) {
      if (key == "N") {
        NS.push(count[key]);
      } else if (key == "S") {
        NS.push(count[key]);
      } else if (key == "W") {
        EW.push(count[key]);
      } else {
        EW.push(count[key]);
      }
    }
    return NS[0] === NS[1] && EW[0] === EW[1];
  }else return false
};

/*
Examples:
isValidWalk(["N", "S", "E", "W", "W", "E"]); => false
isValidWalk(["N", "S", "E", "W", "N", "S", "E", "W", "N", "S", "E"]); => false
isValidWalk(['N', 'S', 'E', 'W', 'N', 'S', 'E', 'W', 'N', 'S']); => true
*/
module.exports = { isValidWalk };
