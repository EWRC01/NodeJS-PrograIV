
const {Telegraf} = require('telegraf');
const token = '1875354969:AAFQZschGRXA8cA0iCbvqPpTeeH8SLWBdJE';
const bot = new Telegraf(token);

bot.start((ctx)=>{
    ctx.reply(`Bienvenido, este es mi primer bot ${ctx.from.first_name}!`) 
})

//Crear comando personalizado

bot.command(['saludo', 'Saludo', 'SALUDO'], (ctx)=>{
        ctx.reply("Comando Personalizado");
})

//Escuchar al usuario cuando envie un stikcer

bot.on('sticker', (ctx)=>{
    ctx.reply('Has enviado un sticker');
})
//Iniciar bot

bot.launch();

