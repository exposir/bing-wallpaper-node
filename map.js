// https://cn.bing.com//th?id=OHR.NoctilucentClouds_ZH-CN4816301354_UHD.jpg&rf=LaDigue_UHD.jpg&pid=hp

// https://cn.bing.com/th?id=OHR.NoctilucentClouds_EN-US0838966037_UHD.jpg&pid=hp&w=384&h=216&rs=1&c=4

const TodyMap = {
  img: "https://cn.bing.com//th?id=OHR.NoctilucentClouds_ZH-CN4816301354_UHD.jpg&rf=LaDigue_UHD.jpg&pid=hp",
  chineseCopyright: "杭州西湖的古典中国园林 (© DANNY HU/Getty Images)",
  chineseTitle: "贴秋膘了吗？",
};

const BeforeMap = [
  {
    date: "2022-08-07",
    local4kUrl: "./static/杭州西湖的古典中国园林4K.jpg",
    localPreviewUrl: "./static/杭州西湖的古典中国园林preview.jpg",
    bing4kUrl:
      "https://cn.bing.com//th?id=OHR.theBeginningofAutumn2022_ZH-CN9413449297_UHD.jpg&rf=LaDigue_UHD.jpg&pid=hp",
    bingPreview:
      "https://cn.bing.com//th?id=OHR.theBeginningofAutumn2022_ZH-CN9413449297_UHD.jpg&rf=LaDigue_UHD.jpg&pid=hp&w=480&h=270",
    chineseTitle: "贴秋膘了吗？",
    chineseCopyright: "杭州西湖的古典中国园林 (© DANNY HU/Getty Images)",
    chinesePreviewTitle: "杭州西湖的古典中国园林",
  },
  {
    date: "2022-08-06",
    local4kUrl: "./static/旧金山湾的盐滩4k.jpg",
    localPreviewUrl: "./static/旧金山湾的盐滩preview.jpeg",
    bing4kUrl:
      "https://cn.bing.com//th?id=OHR.SFSaltFlats_ZH-CN7261637239_UHD.jpg&rf=LaDigue_UHD.jpg&pid=hp",
    bingPreview:
      "https://cn.bing.com//th?id=OHR.SFSaltFlats_ZH-CN7261637239_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp&w=480&h=270",
    chineseTitle: "",
    chineseCopyright: "旧金山湾的盐滩 (© Jeffrey Lewis/Tandem Stills + Motion)",
    chinesePreviewTitle: "旧金山湾的盐滩",
  },
  //   {
  //     date: "2022-08-01",
  //     local4kUrl:
  //       "https://cn.bing.com//th?id=OHR.NoctilucentClouds_ZH-CN4816301354_UHD.jpg&rf=LaDigue_UHD.jpg&pid=hp",
  //     localPreviewUrl:
  //       "https://cn.bing.com//th?id=OHR.NoctilucentClouds_ZH-CN4816301354_UHD.jpg&pid=hp&w=480&h=271&rs=1&c=4",
  //     bing4kUrl:
  //       "https://cn.bing.com//th?id=OHR.NoctilucentClouds_ZH-CN4816301354_UHD.jpg&rf=LaDigue_UHD.jpg&pid=hp",
  //     bingPreview:
  //       "https://cn.bing.com//th?id=OHR.NoctilucentClouds_ZH-CN4816301354_UHD.jpg&pid=hp&w=480&h=271&rs=1&c=4",
  //     chineseTitle: "贴秋膘了吗？",
  //     chineseCopyright: "杭州西湖的古典中国园林 (© DANNY HU/Getty Images)",
  //     chinesePreviewTitle: "杭州西湖的古典中国园林3",
  //   },
  //   {
  //     date: "2022-08-01",
  //     local4kUrl:
  //       "https://cn.bing.com//th?id=OHR.NoctilucentClouds_ZH-CN4816301354_UHD.jpg&rf=LaDigue_UHD.jpg&pid=hp",
  //     localPreviewUrl:
  //       "https://cn.bing.com//th?id=OHR.NoctilucentClouds_ZH-CN4816301354_UHD.jpg&pid=hp&w=480&h=271&rs=1&c=4",
  //     bing4kUrl:
  //       "https://cn.bing.com//th?id=OHR.NoctilucentClouds_ZH-CN4816301354_UHD.jpg&rf=LaDigue_UHD.jpg&pid=hp",
  //     bingPreview:
  //       "https://cn.bing.com//th?id=OHR.NoctilucentClouds_ZH-CN4816301354_UHD.jpg&pid=hp&w=480&h=271&rs=1&c=4",
  //     chineseTitle: "贴秋膘了吗？",
  //     chineseCopyright: "杭州西湖的古典中国园林 (© DANNY HU/Getty Images)",
  //     chinesePreviewTitle: "杭州西湖的古典中国园林4",
  //   },
  //   {
  //     date: "2022-08-01",
  //     local4kUrl:
  //       "https://cn.bing.com//th?id=OHR.NoctilucentClouds_ZH-CN4816301354_UHD.jpg&rf=LaDigue_UHD.jpg&pid=hp",
  //     localPreviewUrl:
  //       "https://cn.bing.com//th?id=OHR.NoctilucentClouds_ZH-CN4816301354_UHD.jpg&pid=hp&w=480&h=271&rs=1&c=4",
  //     bing4kUrl:
  //       "https://cn.bing.com//th?id=OHR.NoctilucentClouds_ZH-CN4816301354_UHD.jpg&rf=LaDigue_UHD.jpg&pid=hp",
  //     bingPreview:
  //       "https://cn.bing.com//th?id=OHR.NoctilucentClouds_ZH-CN4816301354_UHD.jpg&pid=hp&w=480&h=271&rs=1&c=4",
  //     chineseTitle: "贴秋膘了吗？",
  //     chineseCopyright: "杭州西湖的古典中国园林 (© DANNY HU/Getty Images)",
  //     chinesePreviewTitle: "杭州西湖的古典中国园林4",
  //   },
  //   {
  //     date: "2022-08-01",
  //     local4kUrl:
  //       "https://cn.bing.com//th?id=OHR.NoctilucentClouds_ZH-CN4816301354_UHD.jpg&rf=LaDigue_UHD.jpg&pid=hp",
  //     localPreviewUrl:
  //       "https://cn.bing.com//th?id=OHR.NoctilucentClouds_ZH-CN4816301354_UHD.jpg&pid=hp&w=480&h=271&rs=1&c=4",
  //     bing4kUrl:
  //       "https://cn.bing.com//th?id=OHR.NoctilucentClouds_ZH-CN4816301354_UHD.jpg&rf=LaDigue_UHD.jpg&pid=hp",
  //     bingPreview:
  //       "https://cn.bing.com//th?id=OHR.NoctilucentClouds_ZH-CN4816301354_UHD.jpg&pid=hp&w=480&h=271&rs=1&c=4",
  //     chineseTitle: "贴秋膘了吗？",
  //     chineseCopyright: "杭州西湖的古典中国园林 (© DANNY HU/Getty Images)",
  //     chinesePreviewTitle: "杭州西湖的古典中国园林4",
  //   },
  //   {
  //     date: "2022-08-01",
  //     local4kUrl:
  //       "https://cn.bing.com//th?id=OHR.NoctilucentClouds_ZH-CN4816301354_UHD.jpg&rf=LaDigue_UHD.jpg&pid=hp",
  //     localPreviewUrl:
  //       "https://cn.bing.com//th?id=OHR.NoctilucentClouds_ZH-CN4816301354_UHD.jpg&pid=hp&w=480&h=271&rs=1&c=4",
  //     bing4kUrl:
  //       "https://cn.bing.com//th?id=OHR.NoctilucentClouds_ZH-CN4816301354_UHD.jpg&rf=LaDigue_UHD.jpg&pid=hp",
  //     bingPreview:
  //       "https://cn.bing.com//th?id=OHR.NoctilucentClouds_ZH-CN4816301354_UHD.jpg&pid=hp&w=480&h=271&rs=1&c=4",
  //     chineseTitle: "贴秋膘了吗？",
  //     chineseCopyright: "杭州西湖的古典中国园林 (© DANNY HU/Getty Images)",
  //     chinesePreviewTitle: "杭州西湖的古典中国园林4",
  //   },
];

module.exports = { TodyMap, BeforeMap };
