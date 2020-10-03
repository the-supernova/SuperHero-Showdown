const express=require("express");
const bodyParser=require("body-parser");
const axios=require("axios");

const app=express();
let h1,h2;

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/", async(req,res) =>{
    const id1 = req.body.id1;
    const id2 = req.body.id2;

  const link1 = `https://superheroapi.com/api/134803345035478/${id1}`;
  const link2 = `https://superheroapi.com/api/134803345035478/${id2}`;

  try {
    var hero1 = await axios.get(link1);
    h1=hero1;
    var hero2 = await axios.get(link2);
    h2=hero2;

    res.render('home',{
        sh1:hero1.data.name,
        sh2:hero2.data.name,
        i1:hero1.data.powerstats.intelligence,
        i2:hero2.data.powerstats.intelligence,
        pic1:hero1.data.image.url,
        pic2:hero2.data.image.url
    });
  
  } catch (error) {
    console.log(error);
  }
    
});

app.get('/round2',function(req,res){
    res.render('round2',{
        sh1:h1.data.name,
        sh2:h2.data.name,
        st1:h1.data.powerstats.strength,
        st2:h2.data.powerstats.strength,
        pic1:h1.data.image.url,
        pic2:h2.data.image.url
    });
});

app.get('/round3',function(req,res){
  res.render('round3',{
      sh1:h1.data.name,
      sh2:h2.data.name,
      sp1:h1.data.powerstats.speed,
      sp2:h2.data.powerstats.speed,
      pic1:h1.data.image.url,
      pic2:h2.data.image.url
  });
});

app.get('/round4',function(req,res){
  res.render('round4',{
      sh1:h1.data.name,
      sh2:h2.data.name,
      du1:h1.data.powerstats.durability,
      du2:h2.data.powerstats.durability,
      pic1:h1.data.image.url,
      pic2:h2.data.image.url
  });
});

app.get('/round5',function(req,res){
  res.render('round5',{
      sh1:h1.data.name,
      sh2:h2.data.name,
      po1:h1.data.powerstats.power,
      po2:h2.data.powerstats.power,
      pic1:h1.data.image.url,
      pic2:h2.data.image.url
  });
});

app.get('/round6',function(req,res){
  res.render('round6',{
      sh1:h1.data.name,
      sh2:h2.data.name,
      co1:h1.data.powerstats.combat,
      co2:h2.data.powerstats.combat,
      pic1:h1.data.image.url,
      pic2:h2.data.image.url
  });
});


app.listen(3000,function(){
    console.log("Server is running at port 3000");
});