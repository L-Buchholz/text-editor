const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// NOTE: express.static paths relative to process.cwd
app.use(express.static("./client/dist"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// while require() paths relative to the file
require("./routes/htmlRoutes")(app);

app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
