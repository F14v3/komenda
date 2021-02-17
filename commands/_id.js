/*CMD
  command: /id
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Bot.sendMessage(user.telegramid)
if(user.telegramid!=ADMIN_TELEGRAM_ID){
  return // exit from BJS
}

// ONLY admin can add 100$ to users's balance by it telegramid

tgID = params

let res = Libs.ResourcesLib.anotherUserRes("money", tgID);
res.add(100)
Bot.sendMessage("Added 100$ for user");
