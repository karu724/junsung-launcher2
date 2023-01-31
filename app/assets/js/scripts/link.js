const discordbutton = document.getElementById('discord')
const cafe = document.getElementById('cafe')

discordbutton.onclick = () => {
    shell.openExternal('https://discord.gg/7sCkGTedzA')
}

cafe.onclick = () => {
    shell.openExternal('https://cafe.naver.com/dubious/')
}