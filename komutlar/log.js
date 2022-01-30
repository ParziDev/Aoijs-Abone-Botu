module.exports = {
  name:"abone-log",
  code:`
  $if[$message[1]==ayarla]
  ✅ <@$authorID>, Abone logu <#$mentionedChannels[1]> olarak ayarlandı.
  $setServerVar[log;$mentionedChannels[1]]
  $onlyIf[$mentionedChannels[1]!=;❎ <@$authorID>, Bir kanal etiketle.]
  $endif
  $if[$message[1]==sıfırla]
  ✅ <@$authorID>, Abone logu sıfırlandı.
  $setServerVar[log;]
  $onlyIf[$getServerVar[log]!=;❎ <@$authorID>, Abone logu zaten ayarlanmamış.]
  $endif
  $onlyIf[$checkContains[$toLowercase[$message[1]];ayarla;sıfırla]==true;❎ <@$authorID>, **ayarla** , **sıfırla** seçeneklerini kullanın.]
  $onlyPerms[admin;❎ <@$authorID>, Bunu kullanamazsın.]
  `
  }
