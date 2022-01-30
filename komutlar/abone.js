module.exports = {
  name:"abone",
  aliases:"a",
  code:`
  $if[$message[1]==ver]
  $channelSendMessage[$getServerVar[log];**$userTag[$mentioned[1]]** adlı üyeye **$userTag** tarafından abone rolü verildi.]
  $reply[$messageID;**$userTag[$mentioned[1]]** adlı üyeye abone rolü verildi.;no]
  $setUserVar[sayı;$sum[$getUserVar[sayı;$authorID];1];$authorID]
  $giveRoles[$mentioned[1];$getServerVar[abone]]
  $onlyIf[$hasRole[$mentioned[1];$getServerVar[abone]]==false;❎ <@$authorID>, Üyede zaten abone rolü var.]
  $onlyIf[$mentioned[1]!=;❎ <@$authorID>, Kime abone rolü vermeliyim?]
  $endif
  $if[$message[1]==al]
  $channelSendMessage[$getServerVar[log];**$userTag[$mentioned[1]]** adlı üyeden **$userTag** tarafından abone rolü alındı.]
  $reply[$messageID;**$userTag[$mentioned[1]]** adlı üyeden abone rolü alındı.;no]
  $takeRoles[$mentioned[1];$getServerVar[abone]]
  $onlyIf[$hasRole[$mentioned[1];$getServerVar[abone]]==true;❎ <@$authorID>, Üyede zaten abone rolü yok.]
  $onlyIf[$mentioned[1]!=;❎ <@$authorID>, Kimden abone rolü almalıyım?]
  $endif
  $onlyIf[$checkContains[$toLowercase[$message[1]];ver;al]==true;❎ <@$authorID>, **ver** , **al** seçeneklerini kullanın.]
  $onlyForChannels[$getServerVar[kanal];❎ <@$authorID>, Bu komutu <#$getServerVar[kanal]> kanalında kullanabilirsin.]
  $onlyForRoles[$getServerVar[yetkili];❎ <@$authorID>, Bunu kullanamazsın.]
  $onlyIf[$getServerVar[log]!=;❎ <@$authorID>, Abone logunu ayarlayın. \`$getServerVar[prefix]abone-log #log\`]
  $onlyIf[$getServerVar[kanal]!=;❎ <@$authorID>, Abone kanalı ayarlayın. \`$getServerVar[prefix]abone-kanal #kanal\`]
  $onlyIf[$getServerVar[yetkili]!=;❎ <@$authorID>, Abone yetkilisi ayarlayın. \`$getServerVar[prefix]abone-yetkilisi @yetkili\`]
  $onlyIf[$getServerVar[abone]!=;❎ <@$authorID>, Abone rolünü ayarlayın. \`$getServerVar[prefix]abone-rol @abone\`]
  `
  }
