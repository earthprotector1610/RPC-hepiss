const chalk = require('chalk');
const rpc = require("discordrpcgenerator");

const config = require(".././config.json")
module.exports = (client) => {

rpc.getRpcImage(config.applicationid, config.imagename).then(large => {

      
          let presence = new rpc.Rpc()
             .setName(config.rpcname)
              .setUrl('https://www.twitch.tv/hml_cp0')
              .setType("PLAYING")
              .setApplicationId(config.applicationid)
             // .setAssetsSmallImage(small.id)
              
             .setState(config.rpcstate)
              .setAssetsLargeImage(large.id)
        // .setParty( {
         //   size : [ 1 ,  1] ,  
       //     id : client.user.id
     //  })
         
              .setStartTimestamp(Date.now())
              
       
                  client.user.setPresence(presence.toDiscord()).catch(console.error);
    
}
)
console.log(chalk.hex("#800080")("Succesfully logged in user"))
}