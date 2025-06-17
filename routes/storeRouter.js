const express=require('express');
const storeRouter=express.Router();


const storeController=require('../controllers/storeController');


storeRouter.get('/', storeController.getIndex);
storeRouter.get('/bookings',storeController.getBookings)
storeRouter.get("/favourites", storeController.getFavourite);
storeRouter.get("/homes", storeController.getHome);
storeRouter.get("/homes/:homeId",storeController.getHomeDetails);
storeRouter.post("/favourites",storeController.postAddToFavourite);
storeRouter.post(
  "/favourites/delete/:homeId",
  storeController.postRemoveFromFavourite
);

module.exports=storeRouter;