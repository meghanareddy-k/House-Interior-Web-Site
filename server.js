const express = require("express");
const cookieParser = require("cookie-parser");
const serviceCalls = require("./services/service-calls");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cookieParser());
app.use(express.static("./build"));
app.use(express.json());


 serviceCalls(app);


app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
