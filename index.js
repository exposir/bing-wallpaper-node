let fs = require("fs");
const fsPromises = require("fs").promises;
// let request = require("request");
let path = require("path");
// const request = require("request-promise");
const fetch = require("node-fetch");
const BeforeMap = require("./map.json");

async function init() {
  try {
    //同步
    // const downloadImage = async (src, dest, callback) => {
    //   return request.head(src, (err, res, body) => {
    //     if (err) {
    //       console.log(err);
    //       return;
    //     }
    //     if (src) {
    //       request(src)
    //         .pipe(fs.createWriteStream(dest))
    //         .on("close", () => {
    //           callback && callback(null, dest);
    //         });
    //     }
    //   });
    // };

    //存储图片失败
    // let response = await request(bing4kUrl);
    // fsPromises.writeFile("./1.txt", response, "binary", function (err) {});

    const bing = await fetch(
      "https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN"
    );
    const bingJson = await bing.json();
    const { images = [] } = bingJson;
    let { url, title, copyright } = images[0] || {};
    url = url.split("1920x1080").join("UHD");

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

    const bing4kUrl = `https://cn.bing.com/${url}`;
    const bingPreviewUrl = `https://cn.bing.com/${url}&w=480&h=270`;
    const file4kUrl = `./static/${chinesePreviewTitle}4k.jpg`;
    const filePreviewUrl = `./static/${chinesePreviewTitle}preview.jpg`;

    //异步
    async function download(url, file, name) {
      const response = await fetch(url);
      const buffer = await response.buffer();
      fs.writeFile(file, buffer, () =>
        console.log(`finished downloading! ${name}`)
      );
    }

    await download(bing4kUrl, file4kUrl, `${chinesePreviewTitle}4k`);
    await download(
      bingPreviewUrl,
      filePreviewUrl,
      `${chinesePreviewTitle}preview`
    );

    // {
    //   date: "2022-08-07",
    //   file4kUrl: "./static/杭州西湖的古典中国园林4K.jpg",
    //   filePreviewUrl: "./static/杭州西湖的古典中国园林preview.jpg",
    //   bing4kUrl:
    //     "https://cn.bing.com//th?id=OHR.theBeginningofAutumn2022_ZH-CN9413449297_UHD.jpg&rf=LaDigue_UHD.jpg&pid=hp",
    //   bingPreview:
    //     "https://cn.bing.com//th?id=OHR.theBeginningofAutumn2022_ZH-CN9413449297_UHD.jpg&rf=LaDigue_UHD.jpg&pid=hp&w=480&h=270",
    //   chineseTitle: "贴秋膘了吗？",
    //   chineseCopyright: "杭州西湖的古典中国园林 (© DANNY HU/Getty Images)",
    //   chinesePreviewTitle: "杭州西湖的古典中国园林",
    // },

    const newData = {
      date,
      file4kUrl,
      filePreviewUrl,
      bing4kUrl,
      bingPreviewUrl,
      chineseTitle,
      chineseCopyright,
      chinesePreviewTitle,
    };
    // console.log(newData);

    console.log("成功");

    fs.readFile("./map.json", function (err, data) {
      const a = data.toString();
      b = JSON.parse(a);
      b.unshift(newData);
      console.log(b);

      fs.writeFile("./map.json", JSON.stringify(b), function (err) {
        if (err) {
          return console.error(err);
        }
        writeReadme();
      });
    });
  } catch (e) {
    console.log("err", e);
  }
}

const writeReadme = async () => {
  const arr = [`|     |     |     | \n`, `|:---:|:---:|:---:| \n`];
  const newArr = [];
  BeforeMap.forEach((item, index) => {
    let flag = index + 1;

    const data = `![](${item.filePreviewUrl}) <br> ${item.date} [4K 版本](${item.file4kUrl}) <br> ${item.chinesePreviewTitle}`;

    if (flag % 3 === 0) {
      newArr.push(`|${data}|\n`);
      const result = newArr.join("");
      arr.push(result);
      newArr.length = 0;
    } else {
      newArr.push(`|${data}`);
    }

    console.log(newArr);
  });

  let a = newArr.join("");

  console.log(a);

  arr.push(a);

  console.log("准备写入文件");

  fs.readFile("README.md", function (err, data) {
    if (err) {
      return console.error(err);
    }
    // const result = data.toString();
    // console.log("异步读取文件数据: " + result);

    fs.writeFile("README.md", arr.join(""), function (err) {
      if (err) {
        return console.error(err);
      }
      fs.readFile("README.md", function (err, data) {
        if (err) {
          return console.error(err);
        }
        console.log("异步读取文件数据: " + data.toString());
      });
    });
  });
};

init();
