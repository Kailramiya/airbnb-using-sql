const express = require('express');
const app = express();
const storeRouter = require("./routes/storeRouter");
const {hostrouter} = require("./routes/hostrouter");
app.set('view engine','ejs');
app.set('views','views');
app.use(express.static("public"));

app.use(express.urlencoded());
app.use("/user",storeRouter);
app.use("/host",hostrouter);

const homesController=require('./controllers/errors');

app.use(homesController.notFound);





const port = 3000;
app.listen(port, () => {
  console.log(`server started at address https://localhost:${port}/user`);
});
