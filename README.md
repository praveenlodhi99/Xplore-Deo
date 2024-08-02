How to initialize such Projects ?

1. npm init
   -package name: xplore-deo
   -description:
   -entry point: src/index.js
   -keywords: nodejs, mongoose, express,backend
   -author: Praveen Lodhi

2. After that package.json file created, do some modification:
   -"type": "module"  (tells Node.js to interpret .js files within that package as using ES module syntax, this synatax help us to write in format of import this-from-this, etc.)   

3. Install Dev-Dependencies (not shifted to server when we deploy our Project) on terminal:
   -npm i --save-dev nodemon prettier  
              or      
   -npm i -D nodemon prettier

*prettier -> It is a code formatter, which reamove inconsistency and ensures the output code should be formatted in the desired pattern by using the predefined styles in prettier, also it useful when multiple user pushing code on github.

4. create some files in Project
   -.prettierrc
   -.prettierignore (just like gitignore)
