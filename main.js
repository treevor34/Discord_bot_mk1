//Trevor Fournier Bot

const { Client, Intents, Collection } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
/*
Wrong lines from tutorial:
const Discord = require('discord.js');
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});
*/

const prefix = '/';

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
    console.log('Whiterun Guard online!')
});

client.on('messageCreate', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    //splices the command?
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
        //How you originally do this => message.channel.send('Pong');
    }
    else if(command == "hello"){
        client.commands.get('hello').execute(message, args);
    }
    else if(command == "commands"){
        client.commands.get('commands').execute(message, args);
    }
    else if(command == "demand_thane"){
        client.commands.get('demand_thane').execute(message, args);
    }
    else if(command == "steal"){
        client.commands.get('steal').execute(message, args);
    }
});


client.login('');
