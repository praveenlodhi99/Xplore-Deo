// Import the Router module from the Express framework
import { Router } from "express"

// Import the healthcheck controller
import { healthcheck } from "../controllers/healthcheak.controllers.js"

// Create a new router instance
const router = Router()

// Using Postman to serve below requests
router.route("/").get(healthcheck)  //root URL that handles GET requests
router.route("/test").get(healthcheck)  //test URL that handles GET requests

export default router