import db from "mongoose";

db.connect(
  "mongodb://asantosplato_db_user:TGyMNqpBFPm3gXV6@ac-vy4yjd6-shard-00-00.elehys6.mongodb.net:27017,ac-vy4yjd6-shard-00-01.elehys6.mongodb.net:27017,ac-vy4yjd6-shard-00-02.elehys6.mongodb.net:27017/PruebaClase?replicaSet=atlas-1085sc-shard-0&ssl=true&authSource=admin",
)
  .then(() => console.log("Conectado a la db"))
  .catch((e) => {
    console.log(e.message);
  });

export { db };
