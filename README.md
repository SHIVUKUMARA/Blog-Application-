# Blog-Application

Inside server folder 📂  open utils folder 📂 inside that upload file "Enter Your Mongo DB Atlas URL Of your project"

Inside server folder 📂 Create a file:     .env

Inside .env file Enter your Details:


DB_USERNAME=

DB_PASSWORD=

ACCESS_SECRET_KEY=de37bbab03b0380009e4b2f9c6fa6dcf95ae3acfc63125ce7b580d8d490eb6f92579843a4ce44011998dbec04fab568e5de224b042b2c2cf284acfbe03f1f4a6

REFRESH_SECRET_KEY=a60327222ffaa884573490fc0574d69f3f5d1925a98479fb4ef184ebc99fab84cbb9edcc41434b58a07b66188a75152916ed7b46b2031afa5b5c0f046cacb726

DB=mongodb://localhost/image-upload


you can also generate your own access and refresh key by using :

require("crypto").randomBytes(32).toString("hex")   ---> use this cmd to generate random 32 or 64 bytes key in node,js terminal
