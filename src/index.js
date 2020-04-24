const request = require("node-superfetch");

class FresaApiError extends TypeError {
  constructor(error){
    super()
    this.name = "FresaApi"
    this.message = error
  }
}

class FresaApi {
  constructor(key){
    this.key = key;
  }
  async hug(){
    let { body } = await request.get("https://apifresa.glitch.me/api/hug")
    .set("key", this.key);
    if(body.error) throw new FresaApiError(body.error);
    return body.url;
  }
  async cry(){
    let { body } = await request.get("https://apifresa.glitch.me/api/cry")
    .set("key", this.key);
    if(body.error) throw new FresaApiError(body.error);
    return body.url;
  }
  async fusion(){
    let { body } = await request.get("https://apifresa.glitch.me/api/fusion")
    .set("key", this.key);
    if(body.error) throw new FresaApiError(body.error);
    return body.url;
  }
  async slap(){
    let { body } = await request.get("https://apifresa.glitch.me/api/slap")
    .set("key", this.key);
    if(body.error) throw new FresaApiError(body.error);
    return body.url;
  }
  async kill(){
    let { body } = await request.get("https://apifresa.glitch.me/api/kill")
    .set("key", this.key);
    if(body.error) throw new FresaApiError(body.error);
    return body.url;
  }
  async kiss(){
    let { body } = await request.get("https://apifresa.glitch.me/api/kiss")
    .set("key", this.key);
    if(body.error) throw new FresaApiError(body.error);
    return body.url;
  }
  async pat(){
    let { body } = await request.get("https://apifresa.glitch.me/api/pat")
    .set("key", this.key);
    if(body.error) throw new FresaApiError(body.error);
    return body.url;
  }
  async suicide(){
    let { body } = await request.get("https://apifresa.glitch.me/api/suicide")
    .set("key", this.key);
    if(body.error) throw new FresaApiError(body.error);
    return body.url;
  }
  async meme(){
    let { body } = await request.get("https://apifresa.glitch.me/api/meme")
    .set("key", this.key);
    if(body.error) throw new FresaApiError(body.error);
    return body.url;
  }
}
module.exports = {
  FresaApi
}