function userModel (options) {  
  var db;

  if (!options.db) {
    throw new Error('Options.db is required');
  }

  db = options.db;

  return {
    create: function (done) {
      //db.query('INSERT ...', done);
      console.log(db);  //replaced to simulate DB object
    }
  }
}

module.exports = userModel;