import mongoose, { Schema } from "mongoose";

/*
Playlist Schema Definition:
- name: Name of the playlist
- description: Description of the playlist
- Playlists: Array of references to other playlists (could be used for nested playlists or related playlists)
- owner: Reference to the user who owns the playlist
- createdAt: Timestamp when the playlist was created
- updatedAt: Timestamp when the playlist was last updated
*/

const playlistSchema = new Schema(
    {
        name: {
            type: String,
            required: true, // Name is required
        },

        description: {
            type: String,
            required: true, // Description is required
        },

        Playlists: [
            {
                type: Schema.Types.ObjectId,
                ref: "Playlist", // Reference to other Playlist documents
            }
        ],

        owner: {
            type: Schema.Types.ObjectId,
            ref: "User", // Reference to the User model
        }
    },
    { timestamps: true } // Automatically manages createdAt & updatedAt fields
)

// Export the Playlist model
export const Playlist = mongoose.model("Playlist", playlistSchema); // Always capitalize Playlist when exporting
