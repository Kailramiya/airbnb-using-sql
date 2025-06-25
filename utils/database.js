const mysql=require('mysql2');

const pool=mysql.createPool({
  host:'localhost',
  user: <username>,
  password: <password>,
  database: 'airbnb'
});

module.exports=pool.promise();
