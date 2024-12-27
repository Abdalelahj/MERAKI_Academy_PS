/* getQueryString */

/*  
have a properly formatted URL, return the query string data as an array of key-value pairs, in the order that they appear.
If the url does not contain a query string, return undefined
*/

const getQueryString = (url) => {
  // YOUR CODE HERE
  let selected = [];

  if (url.includes("?")) {
    const reg = /%\d+/g;
    
    url = url.replace(reg, " ");    
    const newArr = url.split("?")[1]?.split("&");    
    for (let index = 0; index < newArr.length; index++) {
      let dest = newArr[index].split("=");
      selected.push(dest);
    }
    return selected;
  } else {
    return undefined;
  }
};
// console.log(getQueryString("http://example.com?a=lol&b=88"));

// console.log(getQueryString("http://example.com?a=lol")); //=> [ [ "a", "lol" ] ]
// console.log(getQueryString("http://example.com?msg=lol%20world"));
// console.log(getQueryString("http://example.com"));

/* 
Examples:
getQueryString("http://example.com?a=lol&b=88"); //=> [ [ "a", "lol" ], [ "b", "88" ] ]
getQueryString("http://example.com?msg=lol%20world"); //=> [ [ "msg", "lol world" ] ]
getQueryString("http://example.com"); //=> undefined
*/
module.exports = { getQueryString };
