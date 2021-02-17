/*CMD
  command: 👤 Get user profile photos
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Api.getUserProfilePhotos({user_id: user.telegramid, on_result: "onGetProfilePhotos"});
