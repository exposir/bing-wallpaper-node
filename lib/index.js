"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
const fs_1 = require("fs");
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const bing = yield (0, node_fetch_1.default)("https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN");
            const bingJson = yield bing.json();
            const { images = [] } = bingJson;
            let { url, title, copyright } = images[0] || {};
            const chineseCopyright = copyright;
            const chinesePreviewTitle = copyright.split("(")[0].trim();
            const chineseTitle = title;
            const time = new Date();
            const year = time.getFullYear();
            const month = time.getMonth() + 1;
            const day = time.getDate();
            const date = `${year}-${month}-${day}`;
            console.log(time.getHours());
            console.log("date", date);
            const bing1080Url = `https://cn.bing.com/${url}`;
            url = url.split("1920x1080").join("UHD");
            const bing4kUrl = `https://cn.bing.com/${url}`;
            const bingPreviewUrl = `https://cn.bing.com/${url}&w=480&h=270`;
            const file4kUrl = `./static/${date}-4k.jpg`;
            const filePreviewUrl = `./static/${date}-preview.jpg`;
            //异步
            function download(url, file, name) {
                return __awaiter(this, void 0, void 0, function* () {
                    const response = yield (0, node_fetch_1.default)(url);
                    const buffer = yield response.buffer();
                    (0, fs_1.writeFile)(file, buffer, () => console.log(`finished downloading! ${name}`));
                });
            }
            yield download(bing4kUrl, file4kUrl, `${date}-4k`);
            yield download(bingPreviewUrl, filePreviewUrl, `${date}-preview`);
            const newData = {
                date,
                file4kUrl,
                filePreviewUrl,
                bing4kUrl,
                bingPreviewUrl,
                bing1080Url,
                chineseTitle,
                chineseCopyright,
                chinesePreviewTitle,
            };
            console.log("成功");
            (0, fs_1.readFile)("./map.json", function (err, data) {
                const a = data.toString();
                const b = JSON.parse(a);
                b.unshift(newData);
                (0, fs_1.writeFile)("./map.json", JSON.stringify(b), function (err) {
                    if (err) {
                        return console.error(err);
                    }
                });
                writeReadme(b);
                writeIndex(b);
            });
        }
        catch (e) {
            console.log("err", e);
        }
    });
}
const writeReadme = (list) => __awaiter(void 0, void 0, void 0, function* () {
    const arr = [`|     |     |     | \n`, `|:---:|:---:|:---:| \n`];
    const newArr = [];
    list.forEach((item, index) => {
        let flag = index + 1;
        // const data = `![](https://cdn.jsdelivr.net/gh/exposir/bing-wallpaper-node@main/${item.filePreviewUrl})<br> ${item.date} [4K 版本](https://cdn.jsdelivr.net/gh/exposir/bing-wallpaper-node@main/${item.file4kUrl}) <br> ${item.chinesePreviewTitle}`;
        const data = `![](${item.filePreviewUrl})<br> ${item.date} [4K 版本](${item.file4kUrl}) <br> ${item.chineseTitle}`;
        if (flag % 3 === 0) {
            newArr.push(`|${data}|\n`);
            const result = newArr.join("");
            arr.push(result);
            newArr.length = 0;
        }
        else {
            newArr.push(`|${data}`);
        }
        console.log(newArr);
    });
    let a = newArr.join("");
    arr.push(a);
    console.log("准备写入文件");
    (0, fs_1.readFile)("README.md", function (err, data) {
        if (err) {
            return console.error(err);
        }
        (0, fs_1.writeFile)("README.md", arr.join(""), function (err) {
            if (err) {
                return console.error(err);
            }
            (0, fs_1.readFile)("README.md", function (err, data) {
                if (err) {
                    return console.error(err);
                }
                console.log("异步读取文件数据: " + data.toString());
            });
        });
    });
});
const writeIndex = (b) => __awaiter(void 0, void 0, void 0, function* () {
    const arr = [];
    b.forEach((item) => {
        console.log(item);
        arr.push(`## ${item.date} ${item.chineseTitle} \n\n`);
        arr.push(`${item.chineseCopyright} \n\n`);
        arr.push(`![](${item.bing1080Url}) \n\n`);
    });
    const newData = arr.join("");
    (0, fs_1.writeFile)("./docs/index.md", newData, function (err) {
        if (err) {
            return console.error(err);
        }
        (0, fs_1.readFile)("./docs/index.md", function (err, data) {
            if (err) {
                return console.error(err);
            }
            console.log("异步读取文件数据: " + data.toString());
        });
    });
});
init();
