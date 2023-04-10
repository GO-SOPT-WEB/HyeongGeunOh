import { LO_FI_ID, BAND_ID, POP_ID } from "./songTags";
import imgChunk from "../assets";

const song = [
    {
        name: "Blue",
        tagList: [BAND_ID, "tag2", "tag3"],
        imgURL: imgChunk.BlueImg,
    },
    {
        name: "2Soon",
        tagList: [LO_FI_ID, "tag2", "tag3"],
        imgURL: imgChunk.ToSoonImg,
    },    {
        name: "Alright",
        tagList: [LO_FI_ID, "tag2", "tag3", "tag4"],
        imgURL: imgChunk.AlrightImg
    },    {
        name: "It's you",
        tagList: [LO_FI_ID, "tag2", "tag3"],
        imgURL: imgChunk.ItsYouImg
    },    {
        name: "Less of you",
        tagList: [POP_ID, "tag2", "tag3"],
        imgURL: imgChunk.LessOfYouImg
    },    {
        name: "Xoxosos",
        tagList: [POP_ID, "tag2", "tag3"],
        imgURL: imgChunk.XoxososImg
    },    {
        name: "MORE",
        tagList: [BAND_ID, "tag2"],
        imgURL: imgChunk.MoreImg
    },    {
        name: "Summer",
        tagList: [POP_ID, "tag2", "tag3", "tag4", "tag5"],
        imgURL: imgChunk.SummerImg
    },    {
        name: "The reaper",
        tagList: [BAND_ID, "tag2", "tag3"],
        imgURL: imgChunk.TheReaperImg
    },    {
        name: "Touch",
        tagList: [LO_FI_ID, "tag2", "tag3", "tag4"],
        imgURL: imgChunk.TouchImg
    },
]

export default song;