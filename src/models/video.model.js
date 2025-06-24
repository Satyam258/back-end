import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
    {
        videoFile:{
            type: String, //cloudnary url
            required:[true,'Url is must']
        },
        thumbnail:{
            type: String, //cloudnary url
            required:[true,'thumbnail is must']
        },
        title:{
            type: String,
            required:[true,'Title is must']
        },
         description:{
            type: String,
            required:[true,'Title is must']
        },
         duration:{
            type: Number, 
            required:[true,'Title is must']
        },
        view:{
            type:Number,
            default: 0
        },
        isPublished:{
            type: Boolean,
            default: true
        },
        owner:{
            type: Schema.Types.ObjectId,
            ref:"User"
        }

    },
    {
        timestamps:true
    }
)

videoSchema.plugin(mongooseAggregatePaginate)

export const video = mongoose.model("Video",videoSchema)