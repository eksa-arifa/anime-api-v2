import express from "express";
import router from "./src/route.js";

const port = 3000
const app = express()

app.use(router)


app.listen(port, ()=>{
    console.log(`App Listen On port ${port}`)
})