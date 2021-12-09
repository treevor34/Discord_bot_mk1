module.exports = {
    name: 'steal',
    description: "Tests remove permissions",
    execute(message, args){
        message.channel.send('By order of the Jarl, stop right there!');
        //if(thane)remove role, else->not a thane
        if(message.member.roles.cache.has('918527205523488878')){
            message.channel.send('Oh, forgive me, Thane. I didn\'t realize it was you. We\'ll look the other way this time, but even the Jarl\'s influence has its limits. Be more careful.');
            message.member.roles.remove('918527205523488878');
        }
        else{
            message.channel.send('You\'re going to rot in the Dragonsreach Dungeon.');
        }
    }
}