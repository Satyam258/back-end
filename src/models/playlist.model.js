import mongoose,{Schema} from "mongoose";

const playlistSChema = new Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true,
    },
    Videos:[
        {
            type:Schema.Types.ObjectId,
            ref: "Video"
        }
    ],
    creator:{
        type:Schema.Types.ObjectId,
        ref: "User"
    }
    
},{timestamps:true})



export const Playlist = mongoose.model("Playlist",playlistSChema)