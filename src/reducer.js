const string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, possimus, veritatis dignissimos repellendus iure aspernatur minus accusamus totam amet reiciendis ab harum ut fuga ullam adipisci labore, unde tenetur voluptatibus?'

function capitalize(item) {

  let text = item.split(' ');


  const result = text.map(function (item) {
    return item[0].toUpperCase() + item.slice(1);

  });

  return result.join(' ');
}


function reducer(input, action) {
  let a = input
  let b = action;
  switch (b) {
    case 'upperCase':
      return toUpper(a);
    case 'lowerCase':
      return toLower(a);
    case 'capitalize':
      return capitalize(a);
  }

}



function toUpper(item) {
  return item.toUpperCase();
}

function toLower(item) {
  return item.toLowerCase();
}


console.log(reducer(string, 'upperCase')); // => LOREM IPSUM....
console.log(reducer(string, 'lowerCase')); // => lorem ipsum....
console.log(reducer(string, 'capitalize'));// => Lorem Ipsum....

module.exports = reducer;
