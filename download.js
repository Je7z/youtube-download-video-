
const fs = require('fs');
const ytdl = require('ytdl-core');

const unique = (url,format, quality) => {
    ytdl.getInfo(url).then((info) => {

        ytdl(url, {
            filter: format => format.container === format,
            filter: format => format.qualityLabel === quality,
        }).pipe(fs.createWriteStream(`${info.title.replace('|', '')}.${format}`)).on('close', () => {
            console.log(`finish:  ${info.title.replace('|', '')}`)
        })

        console.log(info.title.replace('|', ' '))

    });
}

module.exports = {
    unique
}