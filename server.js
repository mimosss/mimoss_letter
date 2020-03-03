
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();


app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index', {myText: null, damn: null});
})

app.post('/', function (req, res) {
  
let input = req.body.alphabet;
if (!/^[a-zA-Z]+$/.test(input)){
 console.log("Hik Hok");
 let damn = "Please Try Again!";
 res.render('index', {myAlphabet:null,damn: damn});
  // document.getElementById('output').innerHTML =  error;


}
else{
  let n = input.charCodeAt(input);
  
    if((n==90) || (n==122)){
      console.log(n);
      let myAlphabet = String.fromCharCode(n - 25);
      // console.log(myAlphabet);
      let myText = "After " + input + " the next letter is " + myAlphabet;
      console.log(myText);
       res.render('index', {myText:myText,damn:null});
       // document.getElementById('output').innerHTML =  myAlphabet;
    }
    else{
      let myAlphabet = String.fromCharCode(n + 1);
      let myText = "After " + input + " the next letter is " + myAlphabet;
      console.log(myText );
      // document.getElementById('output').innerHTML =  myAlphabet;
       res.render('index', {myText:myText,damn:null});
      
    }}

})


app.listen(3030, function () {
  console.log('Example app listening on port 3030!')
})
