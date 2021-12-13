//Trevor Fournier Bot
const { Client, Intents, Collection } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

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
    console.log('ETH Bot is online!')
});

client.on('messageCreate', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    //splices the command?
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command == "hello"){
        client.commands.get('hello').execute(message, args);
    }
    else if(command == "commands"){
        client.commands.get('commands').execute(message, args);
    }
    else if(command == "balance"){
        client.commands.get('balance').execute(message, args);
    }
});

client.login(process.env.BOT_TOKEN)
//client.login(enviro.token);