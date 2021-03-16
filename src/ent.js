
    var MongoClient = require('mongodb').MongoClient;
    var url = " mongodb+srv://webuser:timsit@cluster0.ngnox.gcp.mongodb.net/123123_?retryWrites=true&w=majority";
    //mongodb+srv://webuser:<password>@cluster0.ngnox.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority
    
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      console.log("Database created!");
      db.close();
    });