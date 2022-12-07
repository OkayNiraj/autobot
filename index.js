const TelegramBot = require('node-telegram-bot-api');
const token = '5685771136:AAFygoijj6ciV3W4IsdupaUEYiHO3rBFGoM';
const bot = new TelegramBot(token, { polling: true });
bot.on('message', (msg) => {
	const group_id_or_name = "-1001836273000" // @group_name or group_id
	console.log(msg.from.first_name)
	bot.sendMessage(group_id_or_name, `New message received: \nFrom: ${msg.from.first_name} \nUsername: @${msg.from.username} \nMessage: ${msg.text}`)
});
