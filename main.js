//Trevor Fournier Bot

const { Client, Intents, Collection } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
/*
Wrong lines from tutorial:
const Discord = require('discord.js');
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});
*/

const prefix = '~';

const fs = require('fs');

client.commands = new Collection();
/*
had to add collection to line 3, may want to add DiscordAPIError too if issues rise
client.commands = new Discord.Collection();
*/

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
//lost lol
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Bot is online!')
});

client.on('messageCreate', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    //splices the command?
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    }
    else if(command == "hello"){
        message.channel.send('How do you do, thane.');
    }
});


client.login('');