/** server.js
 * demonstration of sinmple, cusotm web server using Express.js
 * Sofia Fedorova CS 233W week 1 activity
 * October 1, 2025
 */

//Iport desired frameworks
const express = require('express');
const app = express();
// set listening port value
const PORT = 3000;


//configure routing
app.get('/', (request,response)=> {
    response.send("<h1>The tasty Tortellini</h1><h2> Southeast PDX's favorite Italian bistro</h2>");
})

app.get('/menus', (request, response) => {
    response.send("<h1>Menus</h1><ul><li>Lunch</li><ul><ul><li>Dinner</li><ul><ul><li>Drinks</li><ul><ul><li>Desserts</li><ul>");
})
//Connect server to desired port
app.listen(PORT, () => {
    console.log('Web server currently listening on port', PORT);
})







// NOT NEEDED: OLD CODE WITH SERVER INSTEAD OF APP (EXPRESS)

//PULLING IN ANY REQUIRED MODULES

/*const server = http.createServer((request,response) => {
    //define how the server response to various request
    if(request.url === '/' && request.method === "GET") {
        //if users visit the home page address for the site using GET request
        response.writeHead(200, { "Content-type": "text/plain"});
        response.end("First ,message from our customer server- wohoo!");
    }
    else {
        response.writeHead(404, { "Content-type": "text/plain"});
        response.end("Sorry, that resourse is unavailiable this time");
    }
})
    */