module.exports = {
    name: 'hello',
    description: "Tests reading permissions",
    execute(message, args){
        if(message.member.roles.cache.has('918527205523488878'))
            message.channel.send('How do you do, thane.');
        else
            message.channel.send('Cause trouble in Whiterun, and I\'ll haul you into the Dragonsreach dungeon myself.');
    }
}