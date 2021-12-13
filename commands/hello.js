module.exports = {
    name: 'hello',
    description: "Tests reading permissions",
    execute(message, args){
        message.channel.send('Hello!');
    }
}