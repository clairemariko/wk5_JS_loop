

var pets = ["dog", "cat", "pika"];

//it is less than 3 because 0 is the first round, 1 is the second round and 2 is the 3round. this is about the off by one error. 
//i++ means to add each time it loops
for (var i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

//we would expect in instead of but this is js
for (var pet of pets){
  console.log(pet);
}

//what if we did do an in, we get indexes
for (var pet in pets){
  console.log(pet);
}

//using 'in' for hashes will get you the keys
var students = {
  student1: 'alison',
  student2: 'claire',
  student3: 'alasdair'

};

//you get the keys here
for (var property in students){
  console.log(property);
}

// to get the value make sure to put it in square brackets as .property it will try to look for something that actually is called property
for (var property in students){
  console.log(students[property]);
};

//while loop 
//it has to be less than 10 as = to will be 11 times it has run. 
var x = 0;
while( x<10){
  console.log(x);
  x++;
};





