1. Create a 'src' directory:

        -add files in src :: touch app.js index.js constants.js .env .env.sample README.md     
        -add sub-directory in src :: mkdir controllers db middlewares models routes utils

        *if command not work for all together do one-by-one.
        *index.js is our entry point.


2. Go inside models directory (cd models):
        -touch comment.models.js like.models.js playlist.models.js subscription.models.js  tweet.models.js video.models.js

3. Go inside models directory (cd models):
        -touch comment.models.js like.models.js playlist.models.js subscription.models.js  tweet.models.js video.models.js

4. Go inside models directory (cd models):
        -touch comment.models.js like.models.js playlist.models.js subscription.models.js  tweet.models.js video.models.js

5. install packages:
        -npm i express mongoose -g

6. RUN SERVER -> for running server (index.js), we have write whole path again-and-again but if we add script, we only need to write command.
        -"start": "node src/index.js"

7. DEVELOPMENT SERVER: we make a 'dev' script, so that whenever we make chages in project it get updated on its own (nodemon install for this purpose)
        -"dev": "nodemon src/index.js"
        -"dev": "nodemon -r dotenv/config --experimental-json-modules src.index.js"  (if upper-one doesn't work coz sometime nodemon unable to catch enviromental variables)

8. Install 'env' packages for handling environment variables:
        -npm i dotenv

9. Install 'cors' package so that we can decide who should talk to our application; act as a middleware:
        -CORS (Cross-Origin Resource Sharing) is a security feature implemented in web browsers that allows or restricts web applications running at one origin from accessing resources from a different origin. It is implemented through HTTP headers that let a server specify who can access its assets and which HTTP methods are allowed.
        -npm i cors

10. MongoDB Setup:

        -create new project
        -create free cluster
        -go to network access and add details about your IP address
        -go to database -> connect -> via compass ->

        -go to database access and add details about user:
            + add username and password
            +select built-in role (read/write any database)
            +add user


11. Connect database:
        -instructions:
            +wrap database connection with try-catch (best & recommended), we can also use promises for some cases to catch errors
            +'async' & 'await' the database connection      
        -inside src/db/index.js ------> import this in src/index.js(entry point) 

        *make sure write .js in the end when importing files.

12. Standardize error & response and asyncHandler in src/utils:
        -ApiError.js
        -ApiResponse.js
        -asyncHandler.js

*LOGIC: Each of the model get a controller & each controller get its route.

13. Building Health Cheak Api to reach atleast one reliable endpoint, it is a common standard practise, in case you are looking to deploy your application on aws or any such cloud provider, they have these things load balancers,etc. which are dependent on these Health Cheak.
        -dividing everything in a dedicated folder
        -create healthcheak.controllers.js      -->      src/controllers/healthcheak.controllers.js

        -import routes in app.js
        -register routes in app.js
        -

14. Testing with 'Postman' application:
                -create collection "Xplore-Deo" 
                        -> folder "healthcheak" -> GET request "healthcheak" -> Enter URL -> http://localhost:8000/api/v1/healthcheak

15. Add Schema in different models (src/models)
        -also add 'mongooseAggregatePaginate' for pipelining models whereever needed.

16. We are using middleware 'prehook' in the user model (src/models/user.model.js) to hash the password which is used by password:
        -install 'bcrypt' package -> npm i bcrypt
                +whenever password modified only then hash again except for the first time the user signning up
                +during login to cheak if password in database is same as password provided by user during Login, we compare both password

        -to generate access/refresh token, install jwt package -> npm i jsonwebtoken
                +generate access token (short lived)
                +generate refresh token (long lived and stored in database)