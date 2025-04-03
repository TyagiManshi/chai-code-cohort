const fs = require('fs');

fs.writeFile("hello.txt", "hello, my name is manshi", function(err){
    if(err) console.log(err);
    else console.log("done");
})

fs.appendFile("hello.txt", "\ni want to master nodejs", function(err){
    if(err) console.log(err);
    else console.log("done");
})

fs.rename("hello.txt", "hey.txt", function(err){
    if(err) console.log(err);
    else console.log("done");
})

fs.copyFile("hey.txt", "./copy/copy.txt", function(err){
    if(err) console.error(err.message);
    else console.log("done");
})

fs.readFile('./hello.txt', 'utf-8', function(err, result){
    if(err){
        console.log(err);
        
    } else {
        console.log(result);
        
    }
})

// fs.unlink("hey.txt", function(err){
//     if(err) console.log(err);
//     else console.log("removed");
// })

// This will remove or delete the file named hey.txt


// fs.rm("./copy", function(err){
//     if(err) console.error(err.message);
//     else console.log("removed");
// })

// This will remove or delete the directory named copy

const http = require('http');

const server = http.createServer(function(req, res){
    res.end("hello, world!");
})

server.listen(8000);

