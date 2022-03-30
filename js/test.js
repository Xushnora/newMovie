// let one = {
//     name: "Javohir",
// };

// for (let item in one) {
//     console.log(one[item]);
// }


let arr = ["item1", "item2", "item3"]

function next () {
  const firstElement = arr.splice(0, 1)
  
  arr = [...arr, ...firstElement]
}

function prev () {
  const lastElement = arr.pop()

  arr = [lastElement, ...arr,]
}


next ()
prev()