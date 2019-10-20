const connectionString = `mongodb://localhost:27017/Avant`;
module.exports = function(mongoose) {
  mongoose.connect(
    connectionString,
    { useNewUrlParser: true, useUnifiedTopology: true },
    err => {
      if (!err) console.log("MongoDB Connection Succeeded");
      else
        console.log(
          "Error in DB Connection: ".JSON.stringify(err, undefined, 2)
        );
    }
  );
};
