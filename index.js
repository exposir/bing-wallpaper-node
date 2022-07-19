let fs = require('fs')
let request = require('request')
let path = require('path')


// 下载单张图片 src是图片的网上地址 dest是你将这图片放在本地的路径 callback可以是下载之后的事}
const downloadImage = (src, dest, callback) => {
    request.head(src, (err, res, body) => {
        if (err) { console.log(err); return }
        src && request(src).pipe(fs.createWriteStream(dest)).on('close', () => {
            callback && callback(null, dest)
        })
    })
}

const date = new Date().getTime()
console.log(date)


downloadImage('https://cn.bing.com//th?id=OHR.FraueninselChiemsee_ZH-CN3541482552_UHD.jpg&rf=LaDigue_UHD.jpg', `./static/就是这张图${date}.jpg`, (err, data) => { err ? console.log(err) : console.log(`下载成功！图片地址是：${path.resolve(data)}`) })

