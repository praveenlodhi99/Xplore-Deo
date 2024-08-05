import mongoose, { Schema } from "mongoose";

const likeSchema = new Schema(
    {
        video: {
            type: Schema.Types.ObjectId,
            ref: "Video"
        },

        comment: {
            type: Schema.Types.ObjectId,
            ref: "Comment"
        },

        tweet: {
            type: Schema.Types.ObjectId,
            ref: "Tweet"
        },

        likedBy: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
    },
    { timestamps: true }   //for createdAt & updatedAt
)

export const Like = mongoose.model("Like", likeSchema)     //always write Playlist in capital format whenever exporting. 