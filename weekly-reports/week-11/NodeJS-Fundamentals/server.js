// const notes = require('./notes.js');

// var fs = require('fs');
var os = require('os');
// var _ = require('lodash')

// // fs to create,read,write,update and delete files
// // os provides info about the system like user, cpu details etc
// // lodash 

// var user = os.userInfo();
// console.log(user)
// console.log(user.username);

// fs.appendFile("greeting.txt", "Hello" + user.username + "!\n" , ()=>{
//     console.log("File created");
    
// });

// var age = notes.age;
// console.log(age)

// var result = notes.add(age, 6)
// console.log(result)

// var data = ['person', 'person', 1, 2, 3, 'name', 'age', '2'];
// var filter = _.uniq(data);
// console.log(filter);

// console.log(_.isString(3)); // false

console.log(os.cpus().length);
