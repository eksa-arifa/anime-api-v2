import axios from "axios";
import * as cheerio from "cheerio";


export const getAnimeGenreSpecify = async (slug, page)=>{
    const htmlnya = await axios.get(`https://samehadaku.ac/genres/${slug}/page/${page}`)

    const $ = cheerio.load(htmlnya.data)

    const arr = []


    $(".listupd").children(".bs").map((i,e)=>{
        const id = i+1
        const thumb = $(e).children(".bsx").children("a").children(".limit").children("img").attr("src")
        const status = $(e).children(".bsx").children("a").children(".limit").children(".bt").children(".epx").text()
        const title = $(e).children(".bsx").children("a").children(".tt").children("h2").text()
        let endpoint = $(e).children(".bsx").children("a").attr("href")
        endpoint = endpoint.split("/")[4]

        arr.push({
            id:id,
            thumb:thumb,
            status:status,
            title:title,
            endpoint:endpoint
        })
    })


    return {
        author: "Eksa Arifa",
        status: "success",
        data:arr
    }
}