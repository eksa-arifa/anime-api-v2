import axios from "axios"
import * as cheerio from "cheerio"


export const genresScrape = async ()=>{
    const uwu = await axios.get("https://samehadaku.ac")

    const $ = cheerio.load(uwu.data)

    const arr = []

    $(".filter").first().children("ul").children("li").map((i,e)=>{
        const title = $(e).children("label").text()
        let endpoint = title.toLowerCase()
        endpoint = endpoint.replace(" ", "-")


        arr.push({
            id: i+1,
            title: title,
            endpoint: endpoint
        })
    })

    return{
        author: "Eksa Arifa",
        status: "Success",
        data: arr
    }
}