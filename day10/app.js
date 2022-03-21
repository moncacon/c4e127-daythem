//hk1
/*let person = {
    name:       'Bob',
    occupation: 'web developer',
    hobbies:    'painting',
  };
  // cách 1
  console.log(person.name);
  // cách 2
  console.log(person["hobbies"]);
  // cách 3 
  const { occupation } = person ;
  console.log(occupation);*/
//hk2
/*let obj = {
  b: 2,
  a: 1,
  c: 3,
};

// TODO
?? OUTPUT is [B, A, C]*/
var obj = {
  b: 2,
  a: 1,
  c: 3,
};

console.log(Object.keys(obj));


//hk3
/*function Person(first, last, age, eye) {
  this.member = [dad,mom,me,daughter];
  this.location = vietnam;
  this.quatity = 4;
}
const dad*/
//hk4
/*let obj = {
  foo: { a: "hello", b: "world" },
  bar: ["example", "mem", null, { xyz: 6 }, 88],
  qux: [4, 8, 12]
};
//cách 1
 obj.bar.xyz = "606";
 console.log(obj);
 // cách 2
 obj = {
   ...obj,xyz:"606"
 };
 console.log(obj);*/