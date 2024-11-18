/* characterRecurrence */

/*  
 Write a function that takes as its input a string and returns an array of 
 arrays as shown below sorted in descending order by recurrence and then by 
 ascending order by character.
*/

const characterRecurrence = (str) => {
  // YOUR CODE HERE
  let repeated=[]
  let count={}
  const newStr= str.split("")
 
  newStr.forEach(element => {
    count[element]=(count[element] || 0) + 1
  });
  
  for (const key in count) {
    repeated.push([key,count[key]])
  }
  repeated.sort((a,b)=>{
    let first =a[0].toLowerCase()
    let sec =b[0].toLowerCase()
    if(a[1] !== b[1]){
      return b[1]-a[1]
    }
    return first<sec?-1:(first>sec)?1:0
  })
  return repeated;
  
};

/* 
Examples:
characterRecurrence("mississippi") // =>  [ ["i", 4],["s", 4],  ["p", 2],  ["m", 1]  ]
characterRecurrence("miaaiaaippi") // =>  [ ["a", 4],  ["i", 4],  ["p", 2],  ["m", 1] ]
characterRecurrence("miaaiaiaippi") // =>  [ ["i", 5],  ["a", 4],  ["p", 2],  ["m", 1] ]
characterRecurrence("miaaiamaippi") // =>  [ ["a", 4],  ["i", 4],  ["m", 2],  ["p", 2] ]
*/
module.exports = { characterRecurrence };
