import axios from "axios";
import * as cheerio from "cheerio";


export const streamScrape = async (endpoint)=>{
    const uwu = await axios.get("https://samehadaku.ac/"+endpoint)

    const $ = cheerio.load(uwu.data)

    const arr = []

    const iframe = $("div#pembed").children("iframe").attr("src")
    const title = $(".title-section").children("h1").text()


    arr.push({
        iframe: iframe,
        title: title
    })



    return {
        author: "Eksa Arifa",
        status: "Success",
        data: arr
    }
}