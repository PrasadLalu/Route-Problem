# Route-Problem

1. Clone the repository.
2. Change to project directory and Install packages:
```
npm install
```
4. Start the server
```
npm run start-dev
```
or 
```
npm start
```
3. Check the route:
```
http://localhost:3000/route?origin=Hyderabad&destination=Chennai
```


## Notes:
1. If you want to get distance then first you have to add route in routes variable. Like:
```
        { origin: 'abc', destination: 'jkl', routes: ['abc', 'fgh', 'jkl'] },

``` 
2. Not validating case sensitity so, kindly pass data into Title case. 