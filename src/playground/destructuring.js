const person = {
   name: 'joe',
   age: 24,
   location: {
      city: 'Bristol',
      temp: 77
   }
};

// const name = person.name;
// const age = person.age;

const { name ='tom', age  } = person;

// or renaming a property this way

const { name: nombre } = person;

console.log(`${name} is ${age}`);


if (person.location.city && person.location.temp) {
   console.log(`It's ${person.location.temp} in ${person.location.city}`);
}


const { city, temp } = person.location;
console.log(`City name is: ${city} and the temperature is ${temp}`);

const book = {
	title: 'Wives did it',
	author: 'Jane Doe',
	publisher: {
		name: 'Penguin',
	},
};


//if valid publisher -> penguin otherwise -> self publish

const { name:pubname } = book.publisher;  //or to avoid renaming which if u dont
                                          // get u undefined
const result = () => {
   return typeof pubname == 'string' && pubname.length > 0 ? pubname : 'self-published';
}

//or

const { name: publisherName = 'self-published' } = book.publisher;

console.log(result());

console.log(publisherName)


const address = ['1222 Paul House', 'Cardigan road', 'London', 'NW1234', 'UK'];

const  [num, street, cty, post, country ] = address;

//skip first item:
//const [,strt,ct,pst,ctry] = address;

//just destructure cty
//const [,,cto,,] = address;

console.log(`you are in ${street}, city of ${cty}, post is: ${post}`);


const item = ['coffee', '£2.00','£2.50','£3.20'];

const [ coffee,,price, ] = item;

console.log(`A medium ${coffee} costs ${price}`);