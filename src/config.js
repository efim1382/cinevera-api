module.exports = {

  // database: process.env.MONGODB_URI || "mongodb://admin:admin@cluster0-shard-00-00.ghwqq.mongodb.net:27017,cluster0-shard-00-01.ghwqq.mongodb.net:27017,cluster0-shard-00-02.ghwqq.mongodb.net:27017/searchtabs?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority",
  // database: process.env.MONGODB_URI || "mongodb://atlasAdmin:admin@cluster0-shard-00-00.ghwqq.mongodb.net:27017,cluster0-shard-00-01.ghwqq.mongodb.net:27017,cluster0-shard-00-02.ghwqq.mongodb.net:27017/cinevera?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority",

  database: process.env.MONGODB_URI || "mongodb://admin:admin@cluster0-shard-00-00.ghwqq.mongodb.net:27017,cluster0-shard-00-01.ghwqq.mongodb.net:27017,cluster0-shard-00-02.ghwqq.mongodb.net:27017/cinevera?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority",

  options: {
    useFindAndModify: false,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
};
