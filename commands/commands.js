module.exports = {
    name: 'commands',
    description: "Lists all commands.",
    execute(message, args){
        message.channel.send('A list of my commands below:');
        message.channel.send('/commands\n/hello\n/balance');
    }
}