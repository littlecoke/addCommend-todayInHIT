var request = require('request').defaults({jar: true})

var num = 100
var b = []

for(var j = 1; j < num; j++) {
  b[j] = j;
}

b.forEach(function(i) {
  function ip () {
    return (Math.ceil(Math.random()*1000) + '.' + Math.ceil(Math.random()*1000) + '.' + Math.ceil(Math.random()*1000) + '.' + Math.ceil(Math.random()*1000));
  }
  var options = {
    url:'http://today.hit.edu.cn',
    headers: {
      'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:38.0) Gecko/20100101 Firefox/38.0',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      'Accept-Language': 'zh-CN,zh;q=0.8,en-US;q=0.5,en;q=0.3',
      'Accept-Encoding': 'gzip, deflate',
      'x-Forwarded-For': ip(),
      'Connection': 'keep-alive'
    } 
  }
  request(options, function(err, response, body) {
      if(err) {
        console.log('Error' + i);
      }
      console.log('Success' + i);
      console.log(options)
    })
})
