import { LO_FI, BAND, POP } from "./songTags";
import imgChunk from "../assets";

const song = [
    {
        name: "Blue",
        tagList: [BAND, "tag2", "tag3"],
        imgURL: imgChunk.BlueImg,
    },
    {
        name: "2soon",
        tagList: [LO_FI, "tag2", "tag3"],
        imgURL: imgChunk.ToSoonImg,
    },    {
        name: "Alright",
        tagList: [LO_FI, "tag2", "tag3", "tag4"],
        imgURL: imgChunk.AlrightImg
    },    {
        name: "It's you",
        tagList: [LO_FI, "tag2", "tag3"],
        imgURL: imgChunk.ItsYouImg
    },    {
        name: "Less of you",
        tagList: [POP, "tag2", "tag3"],
        imgURL: imgChunk.LessOfYouImg
    },    {
        name: "Xoxosos",
        tagList: [POP, "tag2", "tag3"],
        imgURL: imgChunk.XoxososImg
    },    {
        name: "MORE",
        tagList: [BAND, "tag2"],
        imgURL: imgChunk.MoreImg
    },    {
        name: "Summer",
        tagList: [POP, "tag2", "tag3", "tag4", "tag5"],
        imgURL: imgChunk.SummerImg
    },    {
        name: "The reaper",
        tagList: [BAND, "tag2", "tag3"],
        imgURL: imgChunk.TheReaperImg
    },    {
        name: "Touch",
        tagList: [LO_FI, "tag2", "tag3", "tag4"],
        imgURL: imgChunk.TouchImg
    },
]

export default song;