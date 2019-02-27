# RESTApi Project

This is a basic RESTApi project that simulates a Product and Order API. 
There is no versioning as this is just a hobby project that I started to learn how to create my own RESTful API. However, each new commit follows the process I took to 
build the API from the ground up. 

As I intend to learn about APIs I will document everything I learn with code snippets

The readme file will grow with every commit

For further reference, watch https://www.youtube.com/watch?v=blQ60skPzl0&index=2&list=PL55RiY5tL51q4D-B63KBnygU6opNPFk_q 

## Process History
_Documents all the packages I installed and any commands I ran_

1. Install NodeJS 
2. Open project folder and run `npm init` on terminal to initialize it with npm
3. Use `npm install --save express` to download "Express" dependancy package

## Documetation 

### Added files

1. __Server.js__ 

__Description :__
_Javascript file with code that sets up the server_

__Code :__

```javascript
const http = require('http');
``` 
Imports http package that provides functionality to get the server running


```javascript 
const port = process.env.PORT || 3000;
```
Gets the port where the server is running from the env.PORT variable. If its not set, then it opens it on prot 3000


```javascript
const server = http.createServer(app);
server.listen(port);
```
Starts the server using the Http obj and assigns it to `server`. 

`http.createServer(app)` takes `app` as a listener
    app is basically a javascript function which executes when a request is recieved
    and it retruns a response. It makes use of 'Express' package and it qualifies as a 'Request Handler' 

`server.listen(port)` starts listening on the defined port for incoming requests


2. __App.js__

__Description :__

Javascript file that handles incoming requests and retruns responses. Makes use of Express `const app = express()` 

__Code :__

```javascript
app.use((req, res, next) => {
    res.status(200).json({
        message: 'It works'
    });
});
```
`use()` sets up a middleware through which Incoming requests have to pass through. 
    These requests further pass through the arguments that we pass to `use()`, in this case `next => { ... }` function which moves the message to the next middleware

The third argument can have different formats of arguments. It can be a normal
    function or an arrow function. If the argument is not included it doesnt do
    anything with the request

```javascript
module.exports = app;
```
Exports `app` so that it can be used by other files 

3. __Product.js__

__Description :__

Javascript file that handles requests to different specified routes. 

__Code :__

```javascript
router.get('/:productId',(req, res, next) => {
    const productId = req.params.productId;
    res.status(200).json({
        message : 'Handling get request with productId on /products'
        
    });
});
```
This handles requests with a `productId` parameter attached to it





