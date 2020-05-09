const request = require("node-superfetch");
const urls = require("./config/urls");
const URL = urls.baseUrl;

class FresaApiError extends TypeError {
  constructor(error){
    super()
    this.name = "FresaApi"
    this.message = error
  }
}

class FresaApi {
  /**
   * @param {string} key 
   */
  constructor(key){
    if(typeof key !== "string") throw new FresaApiError("The key must be a string")
    if(!key) throw new FresaApiError("You must insert a valid key");
    this.key = key;
  }
  async hug(){
    let { body } = await request.get(`${URL}/hug`)
    .set("key", this.key);
    if(body.error) throw new FresaApiError(body.error);
    return body.url;
  }
  async cry(){
    let { body } = await request.get(`${URL}/cry`)
    .set("key", this.key);
    if(body.error) throw new FresaApiError(body.error);
    return body.url;
  }
  async fusion(){
    let { body } = await request.get(`${URL}/fusion`)
    .set("key", this.key);
    if(body.error) throw new FresaApiError(body.error);
    return body.url;
  }
  async slap(){
    let { body } = await request.get(`${URL}/slap`)
    .set("key", this.key);
    if(body.error) throw new FresaApiError(body.error);
    return body.url;
  }
  async kill(){
    let { body } = await request.get(`${URL}/kill`)
    .set("key", this.key);
    if(body.error) throw new FresaApiError(body.error);
    return body.url;
  }
  async kiss(){
    let { body } = await request.get(`${URL}/kiss`)
    .set("key", this.key);
    if(body.error) throw new FresaApiError(body.error);
    return body.url;
  }
  async pat(){
    let { body } = await request.get(`${URL}/pat`)
    .set("key", this.key);
    if(body.error) throw new FresaApiError(body.error);
    return body.url;
  }
  async suicide(){
    let { body } = await request.get(`${URL}/suicide`)
    .set("key", this.key);
    if(body.error) throw new FresaApiError(body.error);
    return body.url;
  }
  async meme(){
    let { body } = await request.get(`${URL}/meme`)
    .set("key", this.key);
    if(body.error) throw new FresaApiError(body.error);
    return body.url;
  }
}
module.exports = {
  FresaApi
}