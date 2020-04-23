const request = require("node-superfetch");


class FresaApi {
  constructor(){

  }
  async hug(){
    let { body } = await request.get("https://apifresa.glitch.me/api/hug");
    return body.url;
  }
  async cry(){
    let { body } = await request.get("https://apifresa.glitch.me/api/cry");
    return body.url;
  }
  async fusion(){
    let { body } = await request.get("https://apifresa.glitch.me/api/fusion");
    return body.url;
  }
  async slap(){
    let { body } = await request.get("https://apifresa.glitch.me/api/slap");
    return body.url;
  }
  async kill(){
    let { body } = await request.get("https://apifresa.glitch.me/api/kill");
    return body.url;
  }
  async kiss(){
    let { body } = await request.get("https://apifresa.glitch.me/api/kiss");
    return body.url;
  }
  async pat(){
    let { body } = await request.get("https://apifresa.glitch.me/api/pat");
    return body.url;
  }
  async suicide(){
    let { body } = await request.get("https://apifresa.glitch.me/api/suicide");
    return body.url;
  }
  async meme(){
    let { body } = await request.get("https://apifresa.glitch.me/api/meme");
    return body.url;
  }
}
module.exports = {
  FresaApi
}