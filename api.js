const express = require('express');
const cors = require('cors');
const bodyparser=require('body-parser');
const app = express()

 app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:false}))

//app.use(cors({
//  origin:['https://www.section.io','https://www.google.com/']
//}));
app.use(cors());
  app.get('/getsinglestudent', function (req, res) {
    res.send({id:1,name:'ii',age:42})
  })
  app.get('/getallstudents', function (req, res) {
    res.send(
      [{id:1,name:'a',age:12},
      {id:13,name:'b',age:34},
      {id:19,name:'c',age:43},
      {id:23,name:'d',age:42},
    
    ]
      )
  })
  app.post('/login',(req,res)=>{
   console.log(req.body.username);
    console.log(req.body.password);
   let _username=req.body.username;
let _passwod=req.body.password;
if (_username=='qwertdy' && _passwod=='charbel'){
  res.status(200).send('success');
}else {
  res.status(401).send('echec');
}
   
  })
app.listen(3000)