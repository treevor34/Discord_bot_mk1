module.exports = {
    name: 'ping',
    description: "this is a ping command!",
    execute(message, args){
        message.channel.send('Ping');
        message.channel.send('Damn wait, pong.');
    }
}