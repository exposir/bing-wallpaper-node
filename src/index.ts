import fetch from "node-fetch"
import { readFile, writeFile } from "fs";


async function init() {
  try {
    const bing = await fetch(
      "https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN"
    );
    const bingJson = await bing.json();
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

    

    

    const bing1080Url = `https://cn.bing.com/${url}`;

    url = url.split("1920x1080").join("UHD");

    const bing4kUrl = `https://cn.bing.com/${url}`;
    const bingPreviewUrl = `https://cn.bing.com/${url}&w=480&h=270`;
    const file4kUrl = `./static/${date}-4k.jpg`;
    const filePreviewUrl = `./static/${date}-preview.jpg`;

    //异步
    async function download(url, file, name) {
      const response = await fetch(url);
      const buffer = await response.buffer();
      writeFile(file, buffer, () =>
        {}
      );
    }

    await download(bing4kUrl, file4kUrl, `${date}-4k`);
    await download(bingPreviewUrl, filePreviewUrl, `${date}-preview`);

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

    

    readFile("./map.json", function (err, data) {
      const a = data.toString();
      const b = JSON.parse(a);
      b.unshift(newData);

      writeFile("./map.json", JSON.stringify(b), function (err) {
        if (err) {
          
        }
      });
      writeReadme(b);
      writeIndex(b);
    });
  } catch (e) {
    console.log("err", e);
  }
}

const writeReadme = async (list: any) => {

  const today = list[0]
  const { date, chineseTitle, file4kUrl } = today


  const arr: string[] = [];

  arr.push(`# [Bing Wallpapers](https://bing-wallpapers.vercel.app)  \n\n`)
  arr.push(`### ${date} ${chineseTitle}  \n\n`)
  arr.push(`![4k版本](${file4kUrl})  \n\n`)
  arr.push(`|     |     |     | \n`)
  arr.push(`|:---:|:---:|:---:| \n`)


  const newArr: string[] = []
  list.forEach((item: any, index: any) => {
    if (index !== 0) {
      // const data = `![](https://cdn.jsdelivr.net/gh/exposir/bing-wallpaper-node@main/${item.filePreviewUrl})<br> ${item.date} [4K 版本](https://cdn.jsdelivr.net/gh/exposir/bing-wallpaper-node@main/${item.file4kUrl}) <br> ${item.chinesePreviewTitle}`;
      const data = `![](${item.filePreviewUrl})<br> ${item.date} [4K 版本](${item.file4kUrl}) <br> ${item.chineseTitle}`;

      if (index % 3 === 0) {
        newArr.push(`|${data}|\n`);
        const result = newArr.join("");
        arr.push(result);
        newArr.length = 0;
      } else {
        newArr.push(`|${data}`);
      }

      
    }

  });

  let a = newArr.join("");

  arr.push(a);

  

  readFile("README.md", function (err, data) {
    if (err) {
      
    }

    writeFile("README.md", arr.join(""), function (err) {
      if (err) {
        
      }
      readFile("README.md", function (err, data) {
        if (err) {
          
        }
        
      });
    });
  });
};

const writeIndex = async (b: any) => {
  const arr: string[] = [];

  b.forEach((item: any) => {
    
    arr.push(`## ${item.date} ${item.chineseTitle}  \n\n`);
    arr.push(`${item.chineseCopyright} [4k Edition](${item.bing4kUrl})  \n\n`);
    arr.push(`![](${item.bing1080Url}) \n\n`);
  });
  const newData = arr.join("");

  writeFile("./docs/index.md", newData, function (err) {
    if (err) {
      
    }
    readFile("./docs/index.md", function (err, data) {
      if (err) {
        
      }
      
    });
  });
};

init();
