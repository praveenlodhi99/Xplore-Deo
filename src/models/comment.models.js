import mongoose, { Schema } from "mongoose";

const commentSchema = new Schema(
    {
        //either of 'video', 'comment', or 'tweet' will be assigned others are null.

        content: {
            type: String,
            required: true,
        },

        video: {
            type: "Schema.Types.ObjectId",
            ref: "Video",
        },

        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
    },
    { timestamps: true }   //for createdAt & updatedAt
)

export const Comment = mongoose.model("Comment", commentSchema)     //always write Playlist in capital format whenever exporting. 