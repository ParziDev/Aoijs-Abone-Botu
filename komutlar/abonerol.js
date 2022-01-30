module.exports = {
  name:"abone-rol",
  code:`
  $if[$message[1]==ayarla]
  ✅ <@$authorID>, Abone rolü **$roleName[$mentionedRoles[1]]** olarak ayarlandı.
  $setServerVar[abone;$mentionedRoles[1]]
  $onlyIf[$rolePosition[$highestRole[$clientID]]<=$rolePosition[$mentionedRoles[1]];❎ <@$authorID>, Rolümden üstte veya eşit bir rolü üyelere veremem.]
  $onlyIf[$mentionedRoles[1]!=;❎ <@$authorID>, Bir rol etiketle.]
  $endif
  $if[$message[1]==sıfırla]
  ✅ <@$authorID>, Abone rolü sıfırlandı.
  $setServerVar[abone;]
  $onlyIf[$getServerVar[abone]!=;❎ <@$authorID>, Abone rol zaten ayarlanmamış.]
  $endif
  $onlyIf[$checkContains[$toLowercase[$message[1]];ayarla;sıfırla]==true;❎ <@$authorID>, **ayarla** , **sıfırla** seçeneklerini kullanın.]
  $onlyPerms[admin;❎ <@$authorID>, Bunu kullanamazsın.]
  `
  }
