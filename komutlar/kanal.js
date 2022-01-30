module.exports = {
  name:"abone-kanal",
  code:`
  $if[$message[1]==ayarla]
  ✅ <@$authorID>, Abone kanalı <#$mentionedChannels[1]> olarak ayarlandı.
  $setServerVar[kanal;$mentionedChannels[1]]
  $onlyIf[$mentionedChannels[1]!=;❎ <@$authorID>, Bir kanal etiketle.]
  $endif
  $if[$message[1]==sıfırla]
  ✅ <@$authorID>, Abone kanalı sıfırlandı.
  $setServerVar[kanal;]
  $onlyIf[$getServerVar[kanal]!=;❎ <@$authorID>, Abone kanalı zaten ayarlanmamış.]
  $endif
  $onlyIf[$checkContains[$toLowercase[$message[1]];ayarla;sıfırla]==true;❎ <@$authorID>, **ayarla** , **sıfırla** seçeneklerini kullanın.]
  $onlyPerms[admin;❎ <@$authorID>, Bunu kullanamazsın.]
  `
  }
