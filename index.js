let fs = require('fs')
let request = require('request')
let path = require('path')
const fetch = require("node-fetch");
const { Octokit } = require("octokit")

async function init() {
    try {


        const core = require('@actions/core')
        const auth = core.getInput('token')
        const octokit = new Octokit({ auth })

        octokit.rest.issues.create({
            owner: "your name", // GitHub账户名
            repo: "your project name", // 项目名称
            title: '删除排序数组中的重复项', // issue标题
            body: '关于删除排序数组中的重复项的更多解法，欢迎在issue中讨论~' // issue描述
        })

        const bing = await fetch('https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN')
        const bingJson = await bing.json()
        const { images = [] } = bingJson
        let { url, title } = images[0] || {}
        url = url.split('1920x1080').join('UHD')
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
        console.log(url)
        downloadImage(`https://cn.bing.com/${url}`, `./static/${title}${date}.jpg`, (err, data) => { err ? console.log(err) : console.log(`下载成功！图片地址是：${path.resolve(data)}`) })
    } catch (e) {
        console.log('err', e)
    }
}
init()