import app from "./index.js";

app.listen(process.env.PORT,() => {
    console.log(`Server started at PORT ${process.env.PORT}`);
})