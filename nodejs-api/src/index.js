const express = require("express");
const routes = require("./routes/api");

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/", routes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});