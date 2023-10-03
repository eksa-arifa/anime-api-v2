import axios from "axios"
import * as cheerio from "cheerio"


export const terbaruScrape = async ()=>{
    const uwu = await axios.get("https://samehadaku.ac/")

    const $ = cheerio.load(uwu.data)

    const arr = []

    const data = $("div.excstf").children("article.bs").map((i, e)=>{
        const title = $(e).children(".bsx").children("a").children(".tt").children("h2").text()
        const thumb = $(e).children(".bsx").children("a").children(".limit").children("img").attr("src")
        const eps = $(e).children(".bsx").children("a").children(".limit").children(".bt").children(".epx").text()
        let endpoint = $(e).children(".bsx").children("a").attr("href")

        endpoint = endpoint.split("/")[3]

        arr.push({
            id: i+1,
            title: title,
            thumb: thumb,
            eps: eps,
            endpoint: endpoint
        })
    })


    return {
        author: "Eksa Arifa",
        status: "Success",
        data: arr
    }
}