import express from "express"
import { animeApiV2, detail, genreSpecify, genres, stream, terbaru } from "./routes/main.js"


const router = express.Router()


router.get("/", animeApiV2)
router.get("/terbaru", terbaru)
router.get("/stream/:endpoint", stream)
router.get("/genres", genres)
router.get("/genre/:endpoint/:page", genreSpecify)
router.get("/detail/:endpoint", detail)


export default router