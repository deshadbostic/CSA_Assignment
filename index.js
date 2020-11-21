const express=require('express');
const app=express();
const path=require('path');

app.use(express.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,"public" )));
app.set('views', './public/views');
app.set('view engine', 'ejs');

app.get('/',(req,res) =>{ 
    res.render('home.ejs');
  });
  
  app.get('/24',(req,res) =>{ 
    res.render('ubinarymulti.ejs');
  });
  app.get('/25',(req,res) =>{ 
    res.render('boothslaw.ejs');
  });
  app.get('/26',(req,res) =>{ 
    res.render('UBD.ejs');
  });
  app.get('/31',(req,res) =>{ 
    res.render('Howto.ejs');
  });
  app.get('/32',(req,res) =>{ 
    res.render('Howto2.ejs');
  });
  app.get('/33',(req,res) =>{ 
    res.render('Howto3.ejs');
  });

const PORT=process.env.PORT || 5000;
app.listen(PORT,() =>console.log(`server started ${PORT}`));