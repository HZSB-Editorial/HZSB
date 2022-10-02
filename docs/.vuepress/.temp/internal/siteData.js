export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"en-US\",\"title\":\"HZSB\",\"description\":\"关于衡中：曝光、记录、驳斥、批判。\",\"head\":[[\"meta\",{\"charset\":\"utf-8\"}],[\"meta\",{\"name\":\"viewport\",\"content\":\"width=device-width, initial-scale=1\"}],[\"link\",{\"rel\":\"preconnect\",\"href\":\"/img\"}],[\"link\",{\"rel\":\"preconnect\",\"href\":\"https://hm.baidu.com\"}],[\"link\",{\"rel\":\"icon\",\"href\":\"/img/logo.png\"}],[\"script\",{},\"\\n            var _hmt = _hmt || [];\\n            (function() {\\n            var hm = document.createElement(\\\"script\\\");\\n            hm.src = \\\"https://hm.baidu.com/hm.js?295f787038b935ba15d6349af63e92c6\\\";\\n            var s = document.getElementsByTagName(\\\"script\\\")[0]; \\n            s.parentNode.insertBefore(hm, s);\\n            })();\\n            \"],[\"script\",{\"src\":\"https://unpkg.com/@popperjs/core@2\"}],[\"script\",{\"src\":\"https://unpkg.com/tippy.js@6\"}]],\"locales\":{\"/\":{\"lang\":\"zh-CN\",\"title\":\"HZSB\",\"description\":\"关于衡中：曝光、记录、驳斥、批判。\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
