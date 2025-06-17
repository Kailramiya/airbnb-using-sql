const express = require("express");
const hostrouter = express.Router();
hostrouter.use(express.urlencoded());

const hostController=require('../controllers/hostController');
hostrouter.get("/add-home",hostController.getAddHome );
hostrouter.post("/add-home", hostController.postAddHome);
hostrouter.get("/host-home-list", hostController.getHostHome);

hostrouter.get("/edit-home/:homeId", hostController.getEditHome);
hostrouter.post("/edit-home", hostController.postEditHome);
hostrouter.post("/delete-home/:homeId",hostController.postDeleteHome);
exports.hostrouter = hostrouter;
