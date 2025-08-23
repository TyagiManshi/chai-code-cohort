const EventEmitter = require("events");

// In Node.js, EventEmitter is a class from the built-in events module that helps us work with the event-driven architecture of Node.

// - It follows the publish–subscribe (observer) pattern:
// - An object can emit events (like publishing a message).
// - Other parts of the code can listen to those events (like subscribing to updates).
// When the event is emitted, all the listeners automatically get executed.

// This is very useful in Node.js because it is asynchronous and non-blocking, so instead of waiting, we can emit an event when something happens (like a request, file read, or data received) and have multiple listeners handle it.

// - If you add multiple listeners for the same event, they all run.
// - If you want only one listener, use .once() instead of .on().

const eventEmitter = new EventEmitter();

eventEmitter.on('greet', (username) => {
    console.log(`Hello ${username} & Welcome to Events in Nodejs`);
}) 

eventEmitter.on('greet', (username) => {
    console.log(`Hey ${username} & Nodejs is here`);
}) 


// on - attach a event listener 
// 2 params - 'greet' --> can be any name of our choice for the event
//             callback --> can pass on the data 


eventEmitter.once('pushnotification', () => {
    console.log("Run Only Once");
    
})


// Emit the event
eventEmitter.emit("greet", "Manshi");
eventEmitter.emit('pushnotification');
eventEmitter.emit('pushnotification');   // will not run & throws no error 
eventEmitter.emit('pushnotification');   // will not run & throws no error 
eventEmitter.emit("greet", "Coder");
eventEmitter.emit("greet", "User");


const mtListener = () => {
    console.log("I am a test listener");
}
eventEmitter.on("test", mtListener);
eventEmitter.emit("test");
eventEmitter.removeListener("test", mtListener);
eventEmitter.emit("test");   // listener removed & no error 

console.log(eventEmitter.listeners("test"));   // empty array bcz listener removed
console.log(eventEmitter.listeners("greet"));  



// Error Handling

eventEmitter.on('error', (err) => {
    console.log(`Error: ${err.message}`);
    
})

eventEmitter.emit('error', new Error('Something went wrong'))

