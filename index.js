var slap1 = require("./gifs/slap.json");

var hug1 = require("./gifs/hug.json");

var fusion1 = require("./gifs/fusion.json");

var cry1 = require("./gifs/cry.json");
  
var meme1 = require("./imgs/meme.json");

var kill1 = require("./gifs/kill.json");

var pat1 = require("./gifs/pat.json");

var kiss1 = require("./gifs/kiss.json");

var suicide1 = require("./gifs/suicide.json");

  /**
   * @returns {string}
   */


   function slap() {
       return slap1[Math.floor(Math.random() * slap1.length)]
   };

   function hug() {
       return hug1[Math.floor(Math.random() * hug1.length)]
   };

   function fusion() {
    return fusion1[Math.floor(Math.random() * fusion1.length)]
   };

   function cry() {
     return cry1[Math.floor(Math.random() * cry1.length)]
   };

   function meme() {
     return meme1[Math.floor(Math.random() * meme1.length)]
   };

   function kill() {
     return kill1[Math.floor(Math.random() * kill1.length)]
   };

   function pat() {
     return pat1[Math.floor(Math.random() * pat1.length)]
   };
  
   function kiss() {
     return kiss1[Math.floor(Math.random() * kiss1.length)]
   }

   function suicide() {
     return suicide1[Math.floor(Math.random() * suicide1.length)]
   }

   module.exports = {
    slap,
    hug,
    fusion,
    cry,
    meme,
    kill,
    pat,
    kiss,
    suicide
  }

