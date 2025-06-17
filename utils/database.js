const mysql=require('mysql2');

const pool=mysql.createPool({
  host:'localhost',
  user: 'root',
  password: 'MySql@12345',
  database: 'airbnb'
});

module.exports=pool.promise();