const express=require("express");
const bodyParser=require("body-parser");
const axios=require("axios");

const app=express();
let h1,h2,cnt1=0,cnt2=0;

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

    if(Number(hero1.data.powerstats.intelligence)>Number(hero2.data.powerstats.intelligence)){
      cnt1++;
    }
    else{
      cnt2++;
    }
    res.render('home',{
        sh1:hero1.data.name,
        sh2:hero2.data.name,
        i1:hero1.data.powerstats.intelligence,
        i2:hero2.data.powerstats.intelligence,
        pic1:hero1.data.image.url,
        pic2:hero2.data.image.url,
        cnt1:cnt1,
        cnt2:cnt2
    });
  
  } catch (error) {
    console.log(error);
  }
    
});

app.get('/round2',function(req,res){
  if(Number(h1.data.powerstats.strength)>Number(h2.data.powerstats.strength)){
    cnt1++;
  }
  else{
    cnt2++;
  }
    res.render('round2',{
        sh1:h1.data.name,
        sh2:h2.data.name,
        st1:h1.data.powerstats.strength,
        st2:h2.data.powerstats.strength,
        pic1:h1.data.image.url,
        pic2:h2.data.image.url,
        cnt1:cnt1,
        cnt2:cnt2
    });
});

app.get('/round3',function(req,res){
  if(Number(h1.data.powerstats.speed)>Number(h2.data.powerstats.speed)){
    cnt1++;
  }
  else{
    cnt2++;
  }
  res.render('round3',{
      sh1:h1.data.name,
      sh2:h2.data.name,
      sp1:h1.data.powerstats.speed,
      sp2:h2.data.powerstats.speed,
      pic1:h1.data.image.url,
      pic2:h2.data.image.url,
      cnt1:cnt1,
      cnt2:cnt2
  });
});

app.get('/round4',function(req,res){
  if(Number(h1.data.powerstats.durability)>Number(h2.data.powerstats.durability)){
    cnt1++;
  }
  else{
    cnt2++;
  }
  res.render('round4',{
      sh1:h1.data.name,
      sh2:h2.data.name,
      du1:h1.data.powerstats.durability,
      du2:h2.data.powerstats.durability,
      pic1:h1.data.image.url,
      pic2:h2.data.image.url,
      cnt1:cnt1,
      cnt2:cnt2
  });
});

app.get('/round5',function(req,res){
  if(Number(h1.data.powerstats.power)>Number(h2.data.powerstats.power)){
    cnt1++;
  }
  else{
    cnt2++;
  }
  res.render('round5',{
      sh1:h1.data.name,
      sh2:h2.data.name,
      po1:h1.data.powerstats.power,
      po2:h2.data.powerstats.power,
      pic1:h1.data.image.url,
      pic2:h2.data.image.url,
      cnt1:cnt1,
      cnt2:cnt2
  });
});

app.get('/round6',function(req,res){
  if(Number(h1.data.powerstats.combat)>Number(h2.data.powerstats.combat)){
    cnt1++;
  }
  else{
    cnt2++;
  }
  res.render('round6',{
      sh1:h1.data.name,
      sh2:h2.data.name,
      co1:h1.data.powerstats.combat,
      co2:h2.data.powerstats.combat,
      pic1:h1.data.image.url,
      pic2:h2.data.image.url,
      cnt1:cnt1,
      cnt2:cnt2
  });
  cnt1=0,cnt2=0;
});

app.get('/quiz', function(req,res){
  res.sendFile(__dirname+"/quizzes.html");
});

app.get('/batman', function(req,res){
  res.sendFile(__dirname+"/batman.html");
});

app.get('/wonderwoman', function(req,res){
  res.sendFile(__dirname+"/wonderwoman.html");
});

app.get('/captain-america', function(req,res){
  res.sendFile(__dirname+"/captain-america.html");
});

app.get('/superman', function(req,res){
  res.sendFile(__dirname+"/superman.html");
});

app.get('/spiderman', function(req,res){
  res.sendFile(__dirname+"/spiderman.html");
});

app.get('/thor', function(req,res){
  res.sendFile(__dirname+"/thor.html");
});

app.get('/blackwidow', function(req,res){
  res.sendFile(__dirname+"/blackwidow.html");
});

app.get('/ironman', function(req,res){
  res.sendFile(__dirname+"/ironman.html");
});

app.listen(3000,function(){
    console.log("Server is running at port 3000");
});