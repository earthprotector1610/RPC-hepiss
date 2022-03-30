const discord = require("discord.js-selfbot-v11")
const config = require("./config.json")
const rpc = require("discordrpcgenerator");
const stevedore = require('fs')

 const client = new discord.Client()
 
const traits = stevedore.readdirSync("./traits/")

traits.forEach(file => {
  const traitname = file.split(".")[0]
  const event = require(`./traits/${file}`);
  client.on(traitname, event.bind(null,  client));
  
});
client.login(config.token)

const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('ok');
});
server.listen(3000);