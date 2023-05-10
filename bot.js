const { Client, Intents } = require("discord.js");
require('dotenv').config();
const SUCCESS = [
  "https://tenor.com/view/better-call-saul-breaking-bad-fun-and-games-gus-fring-gustavo-fring-gif-26519843",
  "https://tenor.com/view/hector-gif-11253742",
  "https://tenor.com/view/ogvhs-i-won-breaking-bad-won-gif-18199473",
  "https://tenor.com/view/sylokthedefiled-dancing-breakingbad-gif-25663586",
  "https://tenor.com/view/my-honest-reaction-meme-my-reaction-to-that-information-meme-discord-meme-breaking-bad-meme-hank-breaking-bad-gif-26179673",
  "https://tenor.com/view/lol-blowfish-breaking-bad-gif-21948370",
  "https://tenor.com/view/lol-blowfish-breaking-bad-gif-21948370",
  "https://tenor.com/view/breaking-bad-gif-25865354",
  "https://tenor.com/view/sigma-male-breaking-bad-walter-white-heisenberg-heisenberg-breaking-bad-gif-26002440",
  "https://tenor.com/view/breaking-bad-jesse-walter-white-sunset-gif-3427767",
  "https://tenor.com/bWxeV.gif"
];
const FAILURE = [
  "https://tenor.com/view/breaking-bad-walter-white-gif-20348263",
  "https://tenor.com/view/breaking-bad-hankshrader-realization-smh-gif-26343260",
  "https://tenor.com/view/hank-schrader-shock-realization-realisation-gif-20454516",
  "https://tenor.com/view/walter-white-breaking-bad-phone-no-gif-18261966",
  "https://tenor.com/view/breaking-bad-gustavo-fring-gus-fring-gif-25943058",
  "https://tenor.com/view/gus-gus-sus-giancarlo-esposito-gif-23328188",
  "https://tenor.com/view/frank-castle-wait-please-stop-please-no-please-gif-21133188",
];
const channelId = '1076817001957294112'






const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});




client.on("ready", () => {
  console.log(client.user.tag);

  client.user.setActivity("statuses of your builds", {
    type: "WATCHING",
    
  });
});

client.on("message", (message) => {
  console.log()
  
    if(message.embeds[0]){
      const status =
    message.embeds[0].description &&
    message.embeds[0].description.split("\n")[0].split(":")[1].trim()
  if (status === "SUCCESS") {
    message.reply(SUCCESS[Math.floor(Math.random() * SUCCESS.length)]);
  } else if (status === "FAILURE") {
    message.reply(FAILURE[Math.floor(Math.random() * FAILURE.length)]);
  }
    
    


  }
 
});

client.login(
  process.env.DISCORD_TOKEN
);
