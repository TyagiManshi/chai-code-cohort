const http = require('http');
const fs = require('fs');
const url = require('url');



// it takes a callback fn with params - req, res
// req object has all the meta data of client, request
// we can log that -> console.log(req) inside the cb fn

const myServer = http.createServer((req, res) => {
    console.log("Request received...");
    const log = `${Date.now()}, ${req.url} : New Request Recieved\n`;
    const myUrl = url.parse(req.url, true);

    // The parseQueryString option is used when working with URLs in Node.js to control how query parameters are handled. 
    // It is mainly used with the url.parse() method from the url module.
    // true → The query property will be an object. Makes it easier to access query parameters as key-value pairs.
    // false (default)  → The query property will be a raw, unparsed string.

    fs.appendFile('./log.txt', log, (err) => {
        switch(myUrl.pathname){
            case '/' : res.end("Homepage");
            break;

            case '/about' : 
            const username = myUrl.query.myname    // myname is the query key, we can create our query names like this
            res.end(`Hii ${username}`);
            break;

            case '/search' : 
            const search = myUrl.query.search_query    
            res.end(`Here are your search results: ${search}`);
            break;

            default: res.end(`404 page not found`);
        }
    })
})




myServer.listen(8000, () => {
    console.log("Server started.");
})
