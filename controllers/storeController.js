const Favourite = require('../models/favourite');
const Home=require('../models/home');



exports.getHome = (req, res, next) => {
  Home.fetchAll().then(([registeredHomes, fields]) => {
    res.render("store/home-list", {
      registeredHomes: registeredHomes,
      pageTitle: "airbnb Home",
      currentPage: "homesList",
    });
  });
}

exports.getBookings = (req, res, next) => {
    
      res.render("store/bookings", {
        
        pageTitle: "airbnb Bookings",
        currentPage: "bookings",
      });
    
  // console.log(registeredHomes);
};

exports.getFavourite = (req, res, next) => {
  Favourite.getFavourites((favourites) => {
    Home.fetchAll().then(([registeredHomes, fields]) => {
      const favouriteHomes = registeredHomes.filter((home) =>
        favourites.includes(home.id)
      );
      res.render("store/favourite-list", {
        favouriteHomes: favouriteHomes,
        pageTitle: "My Favourites",
        currentPage: "favourites",
      });
    });
  });
};
  exports.getIndex = (req, res, next) => {
      Home.fetchAll().then(([registeredHomes,fields])=>{


      res.render("store/index", {
        registeredHomes: registeredHomes,
        pageTitle: "airbnb Index",
        currentPage: "index",
      });
    });
  // console.log(registeredHomes);
};


exports.getHomeDetails = (req, res, next) => {
  const homeId=req.params.homeId;
  Home.findById(homeId).then(([homes])=>{
    const home=homes[0];
    if(!home){
      res.redirect("/user/homes");
    }
    else {
      res.render("store/home-detail", {
        home:home,
        pageTitle: "Home Details",
        currentPage: "Home",
    });}
  })
  
};


exports.postAddToFavourite=(req,res,next)=>{
  // console.log(req.body);
  Favourite.addToFavourite(req.body.id,error=>{
    if(error){
      console.log(error);
    }
  })
  res.redirect("/user/favourites");
}

exports.postRemoveFromFavourite = (req, res, next) => {
  const homeId = req.params.homeId;
  // console.log(homeId);
  Favourite.deleteById(homeId).then( (error) => {
    if (error) {
      console.log("Error while removing from Favourite", error);
    }
    res.redirect("/user/favourites");
  });
};