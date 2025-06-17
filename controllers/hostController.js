const Home=require('../models/home');

exports.getAddHome = (req, res, next) => {
  res.render("host/edit-home.ejs", { 
    pageTitle: "Add Home to airbnb", 
    currentPage: "addHome",
    editing : false,
   });
  
};


exports.postAddHome = (req, res, next) => {
  
  const {houseName,price,location,rating,photoUrl, description }=req.body;
  
  const home = new Home(
    houseName,
    price,
    location,
    rating,
    photoUrl,
    description
  );
  
  home.save();
  
  res.redirect("/host/host-home-list");
  
};

exports.getEditHome=(req,res,next)=>{
  const homeId=req.params.homeId;
  const editing= req.query.editing === 'true';

  Home.findById(homeId).then (([homes])=>{
    const home=homes[0];
    if(!home){
      return res.redirect("/host/host-home-list");
    }
    else {

      res.render("host/edit-home.ejs", {
        pageTitle: "Edit Home",
        currentPage: "host-homesList",
        editing : editing ,
        home : home,
      });
    }
  })
}

exports.postEditHome=(req,res,next)=>{
  
  const { id,  houseName, price, location, rating, photoUrl, description} =
    req.body;
  
  const home = new Home(
    houseName,
    price,
    location,
    rating,
    photoUrl,
    description,
    id
  );
  home.save();
  res.redirect("/host/host-home-list");
}

exports.getHostHome = (req, res, next) => {
  Home.fetchAll().then(([registeredHomes, fields]) => {
    res.render("host/host-home-list", {
      registeredHomes: registeredHomes,
      pageTitle: "Host Homes List",
      currentPage: "host-homesList",
    });
  });

};
  exports.postDeleteHome = (req, res, next) => {
    const homeId = req.params.homeId;
    // console.log(homeId);
    Home.deleteById(homeId).then(()=>{

      res.redirect("/host/host-home-list")
    }
  ).catch((err)=>{
    if(err){
      console.log(err);
    }
  })
  };
