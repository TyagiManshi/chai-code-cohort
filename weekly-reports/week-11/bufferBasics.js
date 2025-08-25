const { Buffer } = require('buffer');

const buffer = Buffer.alloc(4);
console.log(buffer);
console.log(buffer[3]);


const buf = Buffer.from("Hey user!")
console.log(buf);
console.log(buf.toString());


const buff = Buffer.alloc(10);
buff.write('Hello from buffer')
console.log(buff);
console.log(buff.toString());


const buf2 = Buffer.from("I am learning Nodejs")
console.log(buf2.toString('utf-8', 5, 11));
console.log(buf2.toString());


const buf3 = Buffer.from("I am a Developer")
console.log(buf3.toString());
buf3[5] = 0x4A
console.log(buf3.toString());

const merged = Buffer.concat([buf2, buf3])
console.log(merged);
console.log(merged.toString());
console.log(merged.length);
