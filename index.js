const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const client = new discord.Client();
client.login(botConfig.token);

client.on("ready", async () =>{

    console.log(`${client.user.username} is online.`);
    client.user.setActivity("youtube: belgium's gameplay 777", {type: "WATCHING"});

});

client.on ("message", async message =>{

    if(message.author.bot) return;

    if(message.channel.type == "dm") return

    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");

    var command = messageArray[0];

    if(command === `${prefix}youtube`){
        return message.channel.send("belgium's gameplay 777");
    }



});

client.on ("message", async message =>{

    if(message.author.bot) return;

    if (message.channel.type == "dm") return

    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");

    var command = messageArray[0];

    if (command == `${prefix}twitch`){
        return message.channel.send("keanu7777")
    }



});

client.on ("message", async message =>{

    if(message.author.bot) return;

    if (message.channel.type == "dm") return

    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");

    var command = messageArray[0];

    if (command == `${prefix}instagram`){
        return message.channel.send("belgiumsgameplay777")
    }

    if (command == `${prefix}serverinfo`){

        var botembed = new discord.MessageEmbed()
            .setTitle("BGP")
            .setDescription("deze discord is voor leuke en gezellige mensen")
            .setColor("#ff1100")
            .addFields(
                {name: "youtube", value: "Belgium's gameplay777"},
                {name: "instagram", value: "Belgiumsgameplay777"},
                {name: "twitch", value: "keanu7777"},
                {name: "creatorcode", value: "KEANU777"},
                {name: "eigenaar", value: "keanu_777"}
            
            )
        
            .addField("Bot naam", client.user.username)
            .setThumbnail("https://cdn.discordapp.com/attachments/725837904814800949/740556054806659162/bot_logo.png");
            
        
        
        


        return message.channel.send(botembed);
    }



});

client.on ("message", async message =>{

    if(message.author.bot) return;

    if (message.channel.type == "dm") return

    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");

    var command = messageArray[0];

    if (command == `${prefix}creatorcode`){
        return message.channel.send("KEANU777")
    }



});

bot.login(process.env.token);