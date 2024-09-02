const groupRuleTB = [
  {
    modifiers: "",
    pattern: "_\\.webp",
    replacement: "",
  },
  {
    modifiers: "",
    pattern: "\\.png\\_\\d+x\\d+\\.png$",
    replacement: ".png",
  },
  {
    modifiers: "",
    pattern: "\\.jpg\\_\\d+x\\d+\\.jpg$",
    replacement: ".jpg",
  },
  {
    modifiers: "",
    pattern: "_\\d+x\\d+\\.jpg$",
    replacement: "_800x800.jpg",
  },
  {
    modifiers: "",
    pattern: "_\\d+x\\d+[qQ]\\d+\\.jpg.*",
    replacement: "",
  },
  {
    modifiers: "",
    pattern: "\\.\\d+x\\d+\\.jpg$",
    replacement: ".jpg",
  },
  {
    modifiers: "",
    pattern: "\\.jpg_\\d+x\\d+xzq\\d+\\.jpg$",
    replacement: ".jpg",
  },
  {
    modifiers: "",
    pattern: "_640x0q80_\\.webp",
    replacement: "",
  },
  {
    modifiers: "",
    pattern: "_640x0q80$",
    replacement: "",
  },
  {
    modifiers: "",
    pattern: "_\\d+x\\d+.*",
    replacement: "",
  },
  {
    modifiers: "",
    pattern: ".(\\d+x\\d+\\w+)(.\\w+)",
    replacement: "$2",
  },
]

const regGroup = [
  {
    replaceRules: groupRuleTB,
    site: "淘宝天猫",
    srcPattern: "alicdn.com",
  },
  {
    replaceRules: groupRuleTB,
    site: "速卖通",
    srcPattern: "aliexpress-media.com",
  },
  {
    replaceRules: [
      {
        modifiers: "g",
        pattern: "[/][mst][/]",
        replacement: "/l/",
      },
      {
        modifiers: "g",
        pattern: "[mst][.]jpg",
        replacement: "l.jpg",
      },
      {
        modifiers: "g",
        pattern: "[/][mst]",
        replacement: "/l",
      },
    ],
    site: "topit.me",
    srcPattern: "https?://.{2,}.topit.me/.*",
  },
  {
    replaceRules: [
      {
        modifiers: "",
        pattern: "[/]small[/]",
        replacement: "/large/",
      },
      {
        modifiers: "",
        pattern: "[/]square[/]",
        replacement: "/large/",
      },
      {
        modifiers: "",
        pattern: "[/]thumbnail[/]",
        replacement: "/large/",
      },
      {
        modifiers: "",
        pattern: "[/]bmiddle[/]",
        replacement: "/large/",
      },
      {
        modifiers: "",
        pattern: "[/]thumb[\\d]*[/]",
        replacement: "/large/",
      },
      {
        modifiers: "",
        pattern: "[/]mw[\\d]+[/]",
        replacement: "/large/",
      },
      {
        modifiers: "",
        pattern: "\\/orj\\d+\\/",
        replacement: "/large/",
      },
    ],
    site: "新浪微博",
    srcPattern: "https?://.*[.]sinaimg[.]cn/.*",
  },
  {
    replaceRules: [
      {
        modifiers: "",
        pattern: "[/]m[/]",
        replacement: "/o/",
      },
      {
        modifiers: "",
        pattern: "&w=[\\d]+&h=[\\d]+",
        replacement: "",
      },
    ],
    site: "QQ相册/空间",
    srcPattern: "https?://.*[.]photo[.]store[.]qq[.]com/.*",
  },
  {
    replaceRules: [
      {
        modifiers: "",
        pattern: "/m/",
        replacement: "/b/",
      },
    ],
    site: "QQ相册/空间 - new",
    srcPattern: "qpic.cn/psb",
  },
  {
    replaceRules: [
      {
        modifiers: "",
        pattern: "\\?imageView.*",
        replacement: "",
      },
    ],
    site: "考拉海购",
    srcPattern: "pop.nosdn.127.net|haitao.nosdn\\d+.127.net|haitao.nos.netease.com",
  },
  {
    replaceRules: [
      {
        modifiers: "",
        pattern: "[/]400$",
        replacement: "/800",
      },
      {
        modifiers: "",
        pattern: "[/]200$",
        replacement: "/800",
      },
      {
        modifiers: "",
        pattern: "[/]100$",
        replacement: "/800",
      },
    ],
    site: "QQ相册2",
    srcPattern: "https?://group[.]store[.]qq[.]com/.*",
  },
  {
    replaceRules: [
      {
        modifiers: "",
        pattern: "format=(.+?)\\b.*",
        replacement: "format=$1&name=4096x4096",
      },
    ],
    site: "Twitter",
    srcPattern: "https://pbs.twimg.com/media/.*\\?format=",
  },
  {
    replaceRules: [
      {
        modifiers: "",
        pattern: "[/]abpic[/]",
        replacement: "/pic/",
      },
      {
        modifiers: "",
        pattern: "[/]pin[/]w=[\\d]+[/].+[/]",
        replacement: "/pin/pic/item/",
      },
    ],
    site: "百度图趣",
    srcPattern: "https?://hiphotos[.]baidu[.]com/.*",
  },
  {
    replaceRules: [
      {
        modifiers: "",
        pattern: "[/]thumb[/]",
        replacement: "/photo/",
      },
      {
        modifiers: "",
        pattern: "[/]albumicon[/]",
        replacement: "/photo/",
      },
      {
        modifiers: "",
        pattern: "photo/m/",
        replacement: "photo/l/",
      },
    ],
    site: "豆瓣相册",
    srcPattern: "https?://img[\\d]*[.]douban(io)?[.]com/.*",
  },
  {
    replaceRules: [
      {
        modifiers: "",
        pattern: "_fw[\\d]+[w]*$|_\\/fw\\/\\d+.*|_fw[\\d]+.*$",
        replacement: "",
      },
    ],
    site: "花瓣",
    srcPattern: "https?://img[.]hb[.]aicdn[.]com/.*|hbimg.huabanimg.com",
  },
  {
    replaceRules: [
      {
        modifiers: "",
        pattern: "_[ms]\\.jpg$",
        replacement: "_b.jpg",
      },
    ],
    site: "Flickr",
    srcPattern: ".*[.]staticflickr[.]com.*",
  },
  {
    replaceRules: [
      {
        modifiers: "",
        pattern: "[/]w\\d+-h\\d+(-n)*-k[/]",
        replacement: "/s1600/",
      },
    ],
    site: "Google+",
    srcPattern: "http.*lh.*\\.googleusercontent\\.com.*",
  },
  {
    replaceRules: [
      {
        modifiers: "",
        pattern: "&s=.*[\\d]+.*$",
        replacement: "&s=1600",
      },
    ],
    site: "迅雷方舟",
    srcPattern: "http.*\\.xlpan\\.kanimg\\.com.*",
  },
  {
    replaceRules: [
      {
        modifiers: "",
        pattern: "_\\d{3}.jpg$",
        replacement: ".jpg",
      },
    ],
    site: "poco.cn",
    srcPattern: "http.*image[\\d]*-c.poco.cn.*",
  },
  {
    replaceRules: [
      {
        modifiers: "",
        pattern: "_mthumb.jpg$",
        replacement: ".jpg",
      },
      {
        modifiers: "",
        pattern: "_thumb.jpg$",
        replacement: ".jpg",
      },
    ],
    site: "pconline太平洋摄影",
    srcPattern: "http.*.pconline.com.cn.*",
  },
  {
    replaceRules: [
      {
        modifiers: "",
        pattern: "[/]l[/]",
        replacement: "/_o/",
      },
      {
        modifiers: "",
        pattern: "[/]r[/]",
        replacement: "/_o/",
      },
    ],
    site: "美丽说",
    srcPattern: "(http.*[.]meilishuo[.]net.*)|(http.*[.]meiliworks[.]com.*)",
  },
  {
    replaceRules: [
      {
        modifiers: "",
        pattern: "_[\\d]{3}x[\\d]+.jpg$",
        replacement: "_468x468.jpg",
      },
    ],
    site: "蘑菇街",
    srcPattern: "https?://.*[.]mogujie[.]cn/.*",
  },
  {
    replaceRules: [
      {
        modifiers: "",
        pattern: "(square.jpg$)|(fw200.jpg$)",
        replacement: "medish.jpg",
      },
    ],
    site: "又拍网",
    srcPattern: "https?://photo.yupoo.com/.*.jpg",
  },
  {
    replaceRules: [
      {
        modifiers: "",
        pattern: "_310$",
        replacement: "_0",
      },
    ],
    site: "hao123美图",
    srcPattern: "http.*img.*[.]hao123[.]com.*",
  },
  {
    replaceRules: [
      {
        modifiers: "",
        pattern: "[/]2([\\d]+)x[/]",
        replacement: "/7$1x/",
      },
      {
        modifiers: "",
        pattern: "474",
        replacement: "736",
      },
      {
        modifiers: "",
        pattern: "i.pinimg.com\\/\\d+x\\/",
        replacement: "i.pinimg.com/originals/",
      },
    ],
    site: "pinterest",
    srcPattern: "https?://.*[.]pinimg[.]com/.*.jpg",
  },
  {
    replaceRules: [
      {
        modifiers: "",
        pattern: "_\\.webp$",
        replacement: "",
      },
      {
        modifiers: "",
        pattern: "\\.\\d+x\\d+\\.",
        replacement: ".",
      },
      {
        modifiers: "",
        pattern: ".220x220xz.",
        replacement: ".",
      },
    ],
    site: "1688",
    srcPattern: "https?://cbu01.alicdn.com/img/ibank/.*\\..*x.*\\.jpg",
  },
  {
    replaceRules: [
      {
        modifiers: "",
        pattern: "\\/n\\d+\\/",
        replacement: "/imgzone/",
      },
      {
        modifiers: "",
        pattern: "s\\d+x\\d+_(.*?)\\/",
        replacement: "$1/",
      },
      {
        modifiers: "",
        pattern: "!cc_50x64.jpg$",
        replacement: "",
      },
    ],
    site: "京东",
    srcPattern: "360buyimg.com/n\\d",
  },
  {
    replaceRules: [
      {
        modifiers: "",
        pattern: "(_\\d+)*x\\d+(_\\d+)*.jpg",
        replacement: ".jpg",
      },
    ],
    site: "唯品会",
    srcPattern: "a.vpimg\\d+.com/upload|h\\d.appsimg.com.*/upload",
  },
  {
    replaceRules: [
      {
        modifiers: "",
        pattern: "\\.[^./]+\\.jpg",
        replacement: ".jpg",
      },
      {
        modifiers: "",
        pattern: "_AC_UL1500_.",
        replacement: "",
      },
    ],
    site: "Amazon",
    srcPattern: "images-na.ssl-images-amazon.com/images|m.media-amazon.com/images",
  },
  {
    replaceRules: [
      {
        modifiers: "",
        pattern: "\\?imageView2\\/2\\/w\\/100\\/h\\/100\\/q\\/90",
        replacement: "",
      },
    ],
    site: "小红书",
    srcPattern: "ci.xiaohongshu.com",
  },
  {
    replaceRules: [
      {
        modifiers: "",
        pattern: "\\?aki_policy=.*|\\?tdsourcetag=s_pcqq_aiomsg",
        replacement: "?aki_policy=xx_large",
      },
    ],
    site: "airbnb",
    srcPattern: "muscache..+/im/pictures",
  },
  {
    replaceRules: [
      {
        modifiers: "",
        pattern: "\\.jpg-png_gif",
        replacement: ".jpg-homeSlide",
      },
    ],
    site: "美工云",
    srcPattern: "src.meigongyun.com/forum.*\\.jpg-png_gif",
  },
  {
    replaceRules: [
      {
        modifiers: "",
        pattern: "_thumbnail.*?\\.",
        replacement: ".",
      },
    ],
    site: "shein.com",
    srcPattern: "//img.ltwebstatic.com/images2_pi/.*_thumbnail.*\\.jpg",
  },
  {
    replaceRules: [
      {
        modifiers: "",
        pattern: "\\.(jpg|png).\\d+w_\\d+h_.*",
        replacement: ".$1",
      },
    ],
    site: "易派客 epec.com",
    srcPattern: "//img.epec.com/.*\\.(jpg|png)",
  },
  {
    replaceRules: [
      {
        modifiers: "",
        pattern: ".!(pbig|psmall)",
        replacement: "",
      },
    ],
    site: "pailixiang.com",
    srcPattern: "http://img.pailixiang.com.*@!(pbig|psmall)",
  },
  {
    replaceRules: [
      {
        modifiers: "",
        pattern: "\\?x-oss-process.*",
        replacement: "",
      },
    ],
    site: "aikucun",
    srcPattern: "akmer.aikucun.com/",
  },
  {
    replaceRules: [
      {
        modifiers: "",
        pattern: "\\/lg_",
        replacement: "/gxl_",
      },
    ],
    site: "lookbooks.com",
    srcPattern: "amazonaws.com.*/lg_|lookbookspro.com.*/lg_",
  },
  {
    replaceRules: [
      {
        modifiers: "",
        pattern: "\\?format=\\d+w",
        replacement: "",
      },
    ],
    site: "www.aplusprod.com",
    srcPattern: "images.squarespace-cdn.com/content/.*?format=\\d+w",
  },
  {
    replaceRules: [
      {
        modifiers: "",
        pattern: "&auto=format&.*|&w=\\d+.*",
        replacement: "",
      },
    ],
    site: "unsplash.com",
    srcPattern: "images.unsplash.com/photo-",
  },
  {
    replaceRules: [
      {
        modifiers: "",
        pattern: "!listpc",
        replacement: "",
      },
    ],
    site: "m.inmuu.com",
    srcPattern: "s.tupianzhibo.cn/image/jpeg.*!listpc",
  },
  {
    replaceRules: [
      {
        modifiers: "",
        pattern: "\\?format=.*",
        replacement: "",
      },
    ],
    site: "www.reiss.com",
    srcPattern: "www.reiss.com/media/product",
  },
  {
    replaceRules: [
      {
        modifiers: "",
        pattern: "\\?imageMogr2.*",
        replacement: "",
      },
    ],
    site: "微相册",
    srcPattern: "xcimg.szwego.com/.*.jpg\\?imageMogr2.*",
  },
  {
    replaceRules: [
      {
        modifiers: "",
        pattern: "\\p\\/(.*?)_p",
        replacement: "p",
      },
    ],
    site: "人人网",
    srcPattern: "fmn.xnpic.com|fmn.rrfmn.com",
  },
  {
    replaceRules: [
      {
        modifiers: "",
        pattern: "\\.com\\\\d+\\/",
        replacement: ".com/",
      },
      {
        modifiers: "",
        pattern: "_hd.",
        replacement: "_r.",
      },
    ],
    site: "知乎",
    srcPattern: "pic\\d.zhimg.com",
  },
  {
    replaceRules: [
      {
        modifiers: "",
        pattern: "\\.thumb\\.\\d+_\\d+_.\\.jpg.*",
        replacement: ".jpg",
      },
    ],
    site: "堆糖",
    srcPattern: "c-ssl.dtstatic.com",
  },
  {
    replaceRules: [
      {
        modifiers: "",
        pattern: "\\.thumb.*\\.",
        replacement: ".",
      },
    ],
    site: "堆糖",
    srcPattern: "duitang.com/uploads/item/.*\\.thumb\\.",
  },
  {
    replaceRules: [
      {
        modifiers: "",
        pattern: "_W\\d+.jpg",
        replacement: ".jpg",
      },
      {
        modifiers: "",
        pattern: "\\?imageMogr2.*",
        replacement: "",
      },
    ],
    site: "POCO",
    srcPattern: "pocoimg.cn/image/poco",
  },
  {
    replaceRules: [
      {
        modifiers: "",
        pattern: "\\/\\d+x\\d+(s?)\\/",
        replacement: "/0x0$1/",
      },
      {
        modifiers: "",
        pattern: "webp\\/m\\/",
        replacement: "",
      },
    ],
    site: "DHgate",
    srcPattern: "dhresource.com",
  },
  {
    replaceRules: [
      {
        modifiers: "",
        pattern: "!large.webp",
        replacement: "",
      },
    ],
    site: "yzcdn",
    srcPattern: "img.yzcdn.cn/upload_files",
  },
  {
    replaceRules: [
      {
        modifiers: "",
        pattern: "_300_200",
        replacement: "_1500_1003",
      },
    ],
    site: "途家民宿",
    srcPattern: "pic.tujia.com/upload/.*/thumb/",
  },
  {
    replaceRules: [
      {
        modifiers: "",
        pattern: "&fmt=png-alpha",
        replacement: "",
      },
      {
        modifiers: "",
        pattern: "wid=\\d+",
        replacement: "wid=640",
      },
      {
        modifiers: "",
        pattern: "hei=\\d+",
        replacement: "hei=640",
      },
    ],
    site: "kidsfootlocker",
    srcPattern: "images.footlocker.com",
  },
  {
    replaceRules: [
      {
        modifiers: "",
        pattern: "_min_.*",
        replacement: "",
      },
      {
        modifiers: "",
        pattern: "?imageView2/2/w/500",
        replacement: "",
      },
    ],
    site: "美叶 www.meiye.art",
    srcPattern: "images.psketch.com",
  },
  {
    replaceRules: [
      {
        modifiers: "",
        pattern: "_\\d+\\.jpg$",
        replacement: ".jpg",
      },
    ],
    site: "caselio.com",
    srcPattern: "medias-caselio.e-systemes",
  },
  {
    replaceRules: [
      {
        modifiers: "",
        pattern: "logothumb",
        replacement: "logosmall",
      },
    ],
    site: "gallery.vphotos.cn",
    srcPattern: "img.vphotos.cn",
  },
  {
    replaceRules: [
      {
        modifiers: "",
        pattern: "/thumb/",
        replacement: "/mobile/",
      },
    ],
    site: "bp.pep.com.cn",
    srcPattern: "bp.pep.com.cn/ebook/",
  },
  {
    replaceRules: [
      {
        modifiers: "",
        pattern: "/thumb_jpg/",
        replacement: "/slideshow/",
      },
    ],
    site: "www.archdaily.com",
    srcPattern: "images.adsttc.com",
  },
  {
    replaceRules: [
      {
        modifiers: "",
        pattern: "_i.jpg",
        replacement: "_o.jpg",
      },
    ],
    site: "洋码头 ymatou.com",
    srcPattern: "pic\\d+.ymatou.com/",
  },
  {
    replaceRules: [
      {
        modifiers: "",
        pattern: "@.*",
        replacement: "",
      },
    ],
    site: "站酷",
    srcPattern: "img.zcool.cn/community",
  },
  {
    replaceRules: [
      {
        modifiers: "",
        pattern: "\\/std\\/\\d+x\\d+",
        replacement: "/std/1000x1000",
      },
    ],
    site: "FURLA",
    srcPattern: "furla-cdn.thron.cn/delivery/public/image",
  },
  {
    replaceRules: [
      {
        modifiers: "",
        pattern: "\\/ft\\d+\\/",
        replacement: "/f/",
      },
      {
        modifiers: "",
        pattern: "/sm/",
        replacement: "/l/",
      },
    ],
    site: "图虫网",
    srcPattern: "photo.tuchong.com|pstatp.com/weili",
  },
  {
    replaceRules: [
      {
        modifiers: "",
        pattern: "\\?.*",
        replacement: "",
      },
    ],
    site: "Pexels",
    srcPattern: "images.pexels.com",
  },
  {
    replaceRules: [
      {
        modifiers: "",
        pattern: "hqdefault",
        replacement: "maxresdefault",
      },
    ],
    site: "Youtuge",
    srcPattern: "i.ytimg.com/",
  },
  {
    replaceRules: [
      {
        modifiers: "",
        pattern: "\\?x-oss-process=.*",
        replacement: "",
      },
    ],
    site: "澳新直邮正品 MOFA",
    srcPattern: "mfd-storage.cdn.aladdin.nz",
  },
  {
    replaceRules: [
      {
        modifiers: "",
        pattern: "resize\\/.*\\/upload",
        replacement: "upload",
      },
    ],
    site: "Ekonika",
    srcPattern: "ekonika.ru/resize/.*/upload",
  },
  {
    replaceRules: [
      {
        modifiers: "",
        pattern: "imageView.*?&",
        replacement: "",
      },
    ],
    site: "photoplus | plusx",
    srcPattern: "s.plusx.cn",
  },
  {
    replaceRules: [
      {
        modifiers: "",
        pattern: "wid=(76|38)",
        replacement: "wid=2000",
      },
      {
        modifiers: "",
        pattern: "hei=(76|38)",
        replacement: "hei=2000",
      },
    ],
    site: "Apple | 苹果",
    srcPattern: "store.storeimages.cdn-apple.com",
  },
  {
    replaceRules: [
      {
        modifiers: "",
        pattern: "_resize_\\d+_\\d+",
        replacement: "_resize_free_1000_",
      },
    ],
    site: "mario muzi",
    srcPattern: "www.mariomuzi.com",
  },
  {
    replaceRules: [
      {
        modifiers: "",
        pattern: "\\?.*",
        replacement: "",
      },
    ],
    site: "zalando",
    srcPattern: "ztat.net",
  },
  {
    replaceRules: [
      {
        modifiers: "",
        pattern: "\\?.*",
        replacement: "",
      },
    ],
    site: "walmart",
    srcPattern: "walmartimages.com",
  },
  {
    replaceRules: [
      {
        modifiers: "",
        pattern: "\\?.*",
        replacement: "",
      },
    ],
    site: "GAME UI",
    srcPattern: "image.gameuiux.cn",
  },
  {
    replaceRules: [
      {
        modifiers: "",
        pattern: "\\?.*",
        replacement: "",
      },
    ],
    site: "大作网",
    srcPattern: "//csimg\\d+.bigurl.ink/jin/",
  },
  {
    replaceRules: [
      {
        modifiers: "",
        pattern: "-cc_ft_\\d+|-p_e|-p_h",
        replacement: "-uncropped_scaled_within_1344_1008",
      },
    ],
    site: "zillow",
    srcPattern: "photos.zillowstatic.com",
  },
  {
    replaceRules: [
      {
        modifiers: "",
        pattern: "_\\d+x\\d+",
        replacement: "",
      },
    ],
    site: "中关村",
    srcPattern: "zol-img.com.cn",
  },
  {
    replaceRules: [
      {
        modifiers: "",
        pattern: "\\d+x\\d+-fit",
        replacement: "2560x2560-fit",
      },
    ],
    site: "rumah123",
    srcPattern: "picture.rumah123.com",
  },
  {
    replaceRules: [
      {
        modifiers: "",
        pattern: "_W_.*?\\.",
        replacement: ".",
      },
      {
        modifiers: "",
        pattern: "_R_.*\\.",
        replacement: ".",
      },
    ],
    site: "携程网",
    srcPattern: "ctrip.com/images/",
  },
  {
    replaceRules: [
      {
        modifiers: "",
        pattern: "_R_.*\\.",
        replacement: ".",
      },
    ],
    site: "携程网评论",
    srcPattern: "ak-d.tripcdn.com/images",
  },
  {
    replaceRules: [
      {
        modifiers: "",
        pattern: "_r_.*",
        replacement: "",
      },
    ],
    site: "去哪儿",
    srcPattern: "tr-osdcp.qunarzz.com",
  },
  {
    replaceRules: [
      {
        modifiers: "",
        pattern: "\\?imageView.*",
        replacement: "",
      },
    ],
    site: "马蜂窝",
    srcPattern: "q.mafengwo.net",
  },
  {
    replaceRules: [
      {
        modifiers: "",
        pattern: ".JPG_\\d+x\\d+",
        replacement: ".JPG_1000x1000",
      },
    ],
    site: "qifa.ru",
    srcPattern: "images\\.qifa\\.",
  },
  {
    replaceRules: [
      {
        modifiers: "",
        pattern: ".jpg.*",
        replacement: ".jpg",
      },
      {
        modifiers: "",
        pattern: ".png.*",
        replacement: ".png",
      },
    ],
    site: "哔哩哔哩",
    srcPattern: "https://i0.hdslb.com/bfs/",
  },
  {
    replaceRules: [
      {
        modifiers: "",
        pattern: "\\?.*",
        replacement: "",
      },
    ],
    site: "HOGO",
    srcPattern: ".dlssyht.cn",
  },
  {
    replaceRules: [
      {
        modifiers: "",
        pattern: "il_\\d+x\\d+",
        replacement: "il_NxN",
      },
    ],
    site: "ETSY",
    srcPattern: "i.etsystatic.com|www.etsy.com/img",
  },
  {
    replaceRules: [
      {
        modifiers: "",
        pattern: "\\?.*",
        replacement: "",
      },
    ],
    site: "蝉妈妈",
    srcPattern: "cdn-images.chanmama.com",
  },
  {
    replaceRules: [
      {
        modifiers: "",
        pattern: "_\\d+-\\d+\\.jpg",
        replacement: "",
      },
    ],
    site: "17zwd",
    srcPattern: "17zwd.com",
  },
  {
    replaceRules: [
      {
        modifiers: "",
        pattern: "\\?.*",
        replacement: "",
      },
    ],
    site: "karl",
    srcPattern: "www.karl.com",
  },
  {
    replaceRules: [
      {
        modifiers: "",
        pattern: "\\?.*",
        replacement: "",
      },
    ],
    site: "得物",
    srcPattern: "image-cdn.poizon.com",
  },
  {
    replaceRules: [
      {
        modifiers: "",
        pattern: "s-l\\d+",
        replacement: "s-l1600",
      },
    ],
    site: "ebay",
    srcPattern: "i.ebayimg.com/images",
  },
  {
    replaceRules: [
      {
        modifiers: "",
        pattern: "size=%22sm%22",
        replacement: "size=%22xl%22",
      },
    ],
    site: "ytrs",
    srcPattern: "ytrs.tk",
  },
  {
    replaceRules: [
      {
        modifiers: "",
        pattern: "\\?.*",
        replacement: "",
      },
    ],
    site: "拼多多评论",
    srcPattern: "review.pddpic.com",
  },
]

export function fmtHDSrc(url: string) {
  if (url && url.match(/^data/)) {
    return url
  }
  for (const rule of regGroup) {
    if (new RegExp(rule.srcPattern).test(url)) {
      try {
        let replacedUrl = url
        for (const replaceRule of rule.replaceRules) {
          const { pattern, replacement, modifiers } = replaceRule
          replacedUrl = replacedUrl.replace(new RegExp(pattern, modifiers), replacement)
        }
        return replacedUrl
      }
      catch (error) {
        console.log("image rule error:", error)
      }
    }
  }
  return url
}
