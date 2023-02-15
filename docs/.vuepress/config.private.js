export default {
  baiduTongji: {
    js: `
        var _hmt = _hmt || [];
        (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?295f787038b935ba15d6349af63e92c6";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
        })();
        `,
  },
  docSearch:{
    algolia:{
      apiKey: "8d9b1e0c19aab73328a3f9a068ff2e81",
      indexName: "hzsb",
      appId: "2AYAUOTGL9",
    }
  }
};
