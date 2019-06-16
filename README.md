Api Fresa
=================

Este es un npm de multimedia como gifs y imagenes

Instalación
-----------


```js
// Glitch
$ pnpm i fresaapi

// Normal
$ npm i fresaapi
```
Gifs
----
```js
fresa.slap()
fresa.hug()
fresa.cry()
fresa.fusion()
```
Imagenes
--------
```js
fresa.meme()
```
Uso
---


_Ejemplos_

```js
// Normal
const fresa = require('fresaapi');
console.log(fresa.slap())

// Discord.js
const { Client, Attachment } = require('discord.js');
const fresa = rquiere('fresaapi');

const attachment = new Attachment(fresa.slap());

message.channel.send(attachment)
```
