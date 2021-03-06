const mongoose = require("mongoose");
const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost:27017" || "127.0.0.1:27017";
const app = require("./src/config/app");
const options = { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify:false };

mongoose.Promise = global.Promise;

mongoose
  .connect(`mongodb://${host}/Twitter`, options)
  .then(() => {
    console.log(`SUCCESSFUL CONNECTION TO THE DB :)`);
    app.listen(port, () => console.log(`EXPRESS SERVER UP :)`));
  })
  .catch((err) => console.error(err));
