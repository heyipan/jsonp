// /**
//  * 自己手写一个跨域的组件
//  */
(function(window,document){
	var jsonp = function(url, data, callback) {
	    // 1. 挂载回调函数
	    var fn = 'my_jsonp_cb'+Math.random().toString().replace(".","");
	    window[fn] = callback;
	    // 2. 将data转换为url字符串的形式
	    //  {id:1,name:'zhangsan'} => id=1&name=zhangsan
	    var querystring = url.indexOf('?') == -1 ? '?' : '&';
	    for (var key in data) {
	      querystring += key + '=' + data[key] + '&';
	      //  id    =        1        &
	    }
	    // querystring =  ?id=1&name=zhangsan&
	    // 3. 处理url中的回调参数
	    url += querystring;
	    url +="callback="+fn;
	    // 4. 创建一个script标签
	    var scriptElement = document.createElement("script");
	    scriptElement.src=url;
	    // 5. 将script标签放到页面中
	    document.body.appendChild(scriptElement);
	    // append过后页面会自动对这个地址发送请求，请求完成以后自动执行
  };

  window.jsonp = jsonp;

})(window,document)