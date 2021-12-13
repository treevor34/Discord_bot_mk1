const Web3 = require('web3');
const rpcURL = 'https://mainnet.infura.io/v3/cf288f44fc034d099e55a8f5ce21138d';
const web3 = new Web3(rpcURL);
module.exports = {
    name: 'balance',
    description: "States the current balance of a specific users wallet",
    execute(message, args){
        if(!args[0]){
            message.channel.send('The public wallet address is needed for this command. Example: "/balance 0x1234..."'); 
        }
        else if(args[1]){
            message.channel.send('Only one public wallet address can be used for this command.'); 
        }
        else if(web3.utils.isAddress(args[0])){
            let ret = function(address){
                return web3.eth.getBalance(address,(err, wei) => {balance = web3.utils.fromWei(wei, 'ether')});
            }
            
            let tmp = ret(args[0]);
            //console.log(tmp);

            tmp.then(function(result) {
                //console.log(result);
                ether = Web3.utils.fromWei(result, 'ether');
                message.channel.send(`Balance: ${ether}ETH`);
            })     
        }   
        else{
            message.channel.send('Invalid public wallet address.');
        } 
    }
}
/*module.exports = {
    name: 'demand_thane',
    description: "Tests giving permissions",
    execute(message, args){
        //if(thane), else-> add to thane
        if(message.member.roles.cache.has('918527205523488878'))
            message.channel.send('You already are the thane of Whiterun, lay off the mead.');
        else{
            message.channel.send('Ah, I see you\'ve helped the Jarl, you are now thane of Whiterun.');
            //adds them to the role of thane
            message.member.roles.add('918527205523488878').catch(console.error)
        }
    }
}
module.exports = {
    name: 'kick',
    description: "Tests reading permissions",
    execute(message, args){
        if(message.member.permissions.has("KICK_MEMBERS")){
        //if(message.member.roles.cache.has('')){
            message.channel.send('You have the permission to kick members');
        }
        else{
            message.channel.send('Only the Jarl can order me to this.');
        }
        
    }
}
module.exports = {
    name: 'steal',
    description: "Tests remove permissions",
    execute(message, args){
        message.channel.send('By order of the Jarl, stop right there!');
        //if(thane)remove role, else->not a thane
        if(message.member.roles.cache.has('918527205523488878')){
            message.channel.send('Oh, forgive me, Thane. I didn\'t realize it was you. We\'ll look the other way this time, but even the Jarl\'s influence has its limits. Be more careful.');
            message.member.roles.remove('918527205523488878').catch(console.error);
        }
        else{
            message.channel.send('You\'re going to rot in the Dragonsreach Dungeon.');
        }
    }
}*/