const db=require('../utils/database');

let registeredHomes=[];

module.exports = class Home {
  constructor(houseName, price, location, rating, photoUrl, description ,id ) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
    this.description = description;
    this.id= id;
    // id++;
  }
  save() {
    if(!this.id){
    return db.execute(
      `insert into homes (houseName, price, location, rating, photoUrl, description   ) values (?,?,?,?,?,?)`,[this.houseName , this.price, this.location, this.rating, this.photoUrl,  this.description]
    );}
    else {
      return db.execute(
        `update homes set houseName = ?, price = ?, location = ?, rating = ?, photoUrl = ?, description  = ? where id= ?`, [this.houseName , this.price, this.location, this.rating, this.photoUrl,  this.description, this.id]
      );
    }
  }

  static fetchAll() {
    return db.execute('select * from homes');
  }

  static findById(homeId, callback) {
    return db.execute(
      `select * from homes where id=?`,[homeId]
    );
  }

  static deleteById(homeId, callback) {
    return db.execute(
      'delete from homes where id=?',[homeId]);
  }
};

