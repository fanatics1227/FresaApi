[Fresa Api](https://apifresa.glitch.me/)
=================

Esta es una api de multimedia como gifs y imagenes (Le pondre más contenido mutimedia en proximas actualizaciones)

Instalación
-----------


```js
// Glitch
$ pnpm i fresaapi

// Normal
$ npm i fresaapi
```

Uso
----
```js
const Fresa = require("fresaapi");
const fresa = new Fresa.FresaApi();
```

Gifs
----
```js
fresa.slap()
fresa.hug()
fresa.cry()
fresa.fusion()
fresa.kill()
fresa.pat()
fresa.kiss()
fresa.suicide()
```

Imagenes
--------
```js
fresa.meme()
```
Uso
---


_Ejemplo_

```js
// Discord.js
const Fresa = require('fresaapi');
const fresa = new Fresa.FresaApi();

let slap = await fresa.slap()

message.channel.send({files: [slap]})
```

Info
-----
- Discord: @SM★fanatics1227#3309 
- Youtube: [fanatics1227](https://www.youtube.com/channel/UCJbj6jt-6ddOxgUf7OA2rhg)
- Instagram: [fanatics1227](https://instagram.com/fanatics1227)
- Twitter: [@fanatics1227](https://twitter.com/@fanatics1227)
