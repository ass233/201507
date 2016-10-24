/**
 * Created by 北狼 on 2016/10/25.
 */
var http = require('http');

http.createServer(function (req,res) {
    res.end('Hello');
}).listen(8011);