import { genresScrape } from "../scraper/genres.js"
import { getDetail } from "../scraper/getDetail.js"
import { getAnimeGenreSpecify } from "../scraper/getanimegenreS.js"
import { streamScrape } from "../scraper/stream.js"
import { terbaruScrape } from "../scraper/terbaru.js"



export const animeApiV2 = (req, res)=>{
    res.send({
        author: "Eksa Arifa",
        status: "Success",
        data:{
            getDataTerbaru: "/terbaru",
            getDataStream: "/stream/:endpoint(fromDetailAndTerbaru)",
            getGenres: "/genres",
            getAnimeBerdasarGenre: "/genre/:endpoint(fromGenre)/:numPage",
            getDetailNime: "/detail/endpoint(fromAnimeBerdasarGenre)"
        }
    })
}


export const terbaru = (req,res)=>{
    terbaruScrape().then(response=>{
        res.send(response)
    })
}

export const stream = (req,res)=>{
    const epoint = req.params.endpoint
    streamScrape(epoint).then(response=>{
        res.send(response)
    })
}

export const genres = (req,res)=>{
    genresScrape().then(response=>{
        res.send(response)
    })
}

export const genreSpecify = (req, res)=>{
    const epoint = req.params.endpoint
    const page = req.params.page

    getAnimeGenreSpecify(epoint, page).then(response=>{
        res.send(response)
    })
}

export const detail = (req,res)=>{
    const epoint = req.params.endpoint
    getDetail(epoint).then(response=>{
        res.send(response)
    })
}