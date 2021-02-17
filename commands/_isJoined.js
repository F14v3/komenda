/*CMD
  command: /isJoined
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

chanell = "@Komenda"

Api.getChatMember({
  chat_id: chanell,
  user_id: user.telegramid,
  on_result :"/onCheckJoin"
})
