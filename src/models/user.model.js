import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

/*
User Schema Definition:
- id: MongoDB automatically generates an ID, no need to specify it
- username: Unique username for the user, stored in lowercase and trimmed
- email: Unique email for the user, stored in lowercase and trimmed
- fullName: Full name of the user, trimmed
- avatar: URL to the user's avatar image stored on cloudinary
- coverImage: URL to the user's cover image stored on cloudinary
- watchHistory: Array of references to videos the user has watched
- password: User's password, stored securely and not selected by default
- refreshToken: Token for refreshing authentication sessions
- createdAt: Timestamp when the user was created
- updatedAt: Timestamp when the user was last updated
*/

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true, // Adds an index for faster queries, not required for every field
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },

        fullName: {
            type: String,
            required: true,
            trim: true,
            index: true, // Adds an index for faster queries, not required for every field
        },

        avatar: {
            type: String, // URL to the user's avatar image on cloudinary
            required: true,
        },

        coverImage: {
            type: String, // URL to the user's cover image on cloudinary
        },

        watchHistory: [
            {
                type: Schema.Types.ObjectId,
                ref: "Video", // Reference to the Video model
            }
        ],

        password: {
            type: String,
            required: [true, "Password is required"],
            minlength: 8,
            select: false, // Password field is not selected by default when querying documents
        },

        refreshToken: {
            type: String,
        },
    },
    { timestamps: true } // Automatically manages createdAt & updatedAt fields
)

// Export the User model
export const User = mongoose.model("User", userSchema); // Always capitalize User when exporting
