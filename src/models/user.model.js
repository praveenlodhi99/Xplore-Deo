import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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
            index: true, // Index for faster lookups by username
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
            index: true, // Index for faster lookups by full name
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
            select: false, // Password is excluded from queries by default for security reasons
        },

        refreshToken: {
            type: String,
        },
    },
    { timestamps: true } // Automatically manage createdAt and updatedAt timestamps
)

// Middleware pre-hook to hash password before saving user
userSchema.pre("save", async function (next) {
    // Only hash the password if it is new or modified
    // If it's the first time saving the document, it will also hash the password
    // this. is the one who has the sccess of ther model is denoted by 'this' here   
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
})

// Method to compare provided password with the hashed password in the database
userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
}

// Method to generate a short-lived access token for authentication
userSchema.methods.generateAccessToken = function () {
    return jwt.sign({
        _id: this._id,
        username: this.username,
        fullName: this.fullName,
        email: this.email,
    },
    process.env.ACCESS_TOKEN_SECRET, // Secret key for signing the access token
    { expiresIn: process.env.ACCESS_TOKEN_EXPIRY } // Token expiry time
    );
}

// Method to generate a long-lived refresh token for renewing access tokens
userSchema.methods.generateRefreshToken = function () {
    return jwt.sign({
        _id: this._id, // Only include user ID in the refresh token
    },
    process.env.REFRESH_TOKEN_SECRET, // Secret key for signing the refresh token
    { expiresIn: process.env.REFRESH_TOKEN_EXPIRY } // Token expiry time
    );
}

// Export the User model
export const User = mongoose.model("User", userSchema); // Capitalized name for consistency
