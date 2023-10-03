import axios from "axios";
import * as cheerio from "cheerio";

export const getDetail = async (epoint)=>{
    const htmlnya = await axios.get("https://samehadaku.ac/anime/"+epoint)

    const $ = cheerio.load(htmlnya.data)

    const info = []
    const eps = []
    const arr = []

    const image = $(".thumbook").children(".thumb").children("img").attr("src")
    const title = $(".infox").children(".entry-title").text()
    $(".info-content").children(".spe").children("span").map((i,e)=>{
        const dapatkanInfo = $(e).text()

        info.push({
            info: dapatkanInfo
        })
    })

    const sinopsis = $(".entry-content").children("p").text()

    info.push({
        info:sinopsis
    })

    arr.push(info)


    $(".eplister").children("ul").children("li").map((i,e)=>{
        const id = i+1
        const ep = $(e).children("a").children(".epl-num").text()
        const title = $(e).children("a").children(".epl-title").text()
        const release = $(e).children("a").children(".epl-date").text()
        let epoint = $(e).children("a").attr("href")
        epoint = epoint.split("/")[3]

        eps.push({
            id:id,
            ep:ep,
            title:title,
            release:release,
            endpoint:epoint
        })
    })

    arr.push(eps)



    return {
        author: "Eksa Arifa",
        status: "success",
        data: arr
    }
}