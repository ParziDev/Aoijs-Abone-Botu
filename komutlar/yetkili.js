module.exports = {
  name:"abone-yetkilisi",
  code:`
  $if[$message[1]==ayarla]
  ✅ <@$authorID>, Abone yetkilisi **$roleName[$mentionedRoles[1]]** olarak ayarlandı.
  $setServerVar[yetkili;$mentionedRoles[1]]
  $onlyIf[$rolePosition[$highestRole[$clientID]]<=$rolePosition[$mentionedRoles[1]];❎ <@$authorID>, Rolümden üstte veya eşit bir rolü üyelere veremem.]
  $onlyIf[$mentionedRoles[1]!=;❎ <@$authorID>, Bir rol etiketle.]
  $endif
  $if[$message[1]==sıfırla]
  ✅ <@$authorID>, Abone yetkilisi sıfırlandı.
  $setServerVar[yetkili;]
  $onlyIf[$getServerVar[yetkili]!=;❎ <@$authorID>, Abone yetkilisi zaten ayarlanmamış.]
  $endif
  $onlyIf[$checkContains[$toLowercase[$message[1]];ayarla;sıfırla]==true;❎ <@$authorID>, **ayarla** , **sıfırla** seçeneklerini kullanın.]
  $onlyPerms[admin;❎ <@$authorID>, Bunu kullanamazsın.]
  `
  }
