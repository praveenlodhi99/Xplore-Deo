import mongoose, { Schema } from "mongoose";

const playlistSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },

        description: {
            type: String,
            required: true,
        },

        Playlists: [
            {
                type: Schema.Types.ObjectId,
                ref: "Playlist"
            }
        ],

        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    },
    { timestamps: true }   //for createdAt & updatedAt
)

export const Playlist = mongoose.model("Playlist", playlistSchema)     //always write Playlist in capital format whenever exporting. 