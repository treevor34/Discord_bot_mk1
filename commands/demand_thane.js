module.exports = {
    name: 'demand_thane',
    description: "Tests giving permissions",
    execute(message, args){
        //if(thane), else-> add to thane
        if(message.member.roles.cache.has('918527205523488878'))
            message.channel.send('You already are the thane of Whiterun, lay off the mead.');
        else{
            message.channel.send('Ah, I see you\'ve helped the Jarl, you are now thane of Whiterun.');
            //adds them to the role of thane
            message.member.roles.add('918527205523488878')
        }
    }
}