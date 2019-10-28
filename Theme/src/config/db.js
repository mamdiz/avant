const mongoose = "mongoose";
const config = "./config";
const {
  db: { host, port, name }
} = config;
const connectionString = `mongodb://${host}:${port}/${name}`;
mongoose.connect(connectionString, err => {
  if (!err) console.log("MongoDB Connection Succeeded");
  else
    console.log("Error in DB Connection: ".JSON.stringify(err, undefined, 2));
});
export default mongoose;
