const express = require('express');
const fs = require('fs')
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/fantasiaOzuna.mp3', function(req, res) {
  var filePath = 'fantasiaOzuna.mp3';
  var stat = fs.statSync(filePath);
  var total = stat.size;
  if (req.headers.range) {
      var range = req.headers.range;
      var parts = range.replace(/bytes=/, "").split("-");
      var partialstart = parts[0];
      var partialend = parts[1];

      var start = parseInt(partialstart, 10);
      var end = partialend ? parseInt(partialend, 10) : total - 1;
      var chunksize = (end - start) + 1;
      var readStream = fs.createReadStream(filePath, { start: start, end: end });
      res.writeHead(206, {
          'Content-Range': 'bytes ' + start + '-' + end + '/' + total,
          'Accept-Ranges': 'bytes',
          'Content-Length': chunksize,
          'Content-Type': 'video/mp4'
      });
      readStream.pipe(res);
  } else {
      res.writeHead(200, { 'Content-Length': total, 'Content-Type': 'audio/mpeg' });
      fs.createReadStream(filePath).pipe(res);
  }
});

app.get('/bohemian.mp3', function(req, res) {
  var filePath = 'bohemian.mp3';
  var stat = fs.statSync(filePath);
  var total = stat.size;
  if (req.headers.range) {
      var range = req.headers.range;
      var parts = range.replace(/bytes=/, "").split("-");
      var partialstart = parts[0];
      var partialend = parts[1];

      var start = parseInt(partialstart, 10);
      var end = partialend ? parseInt(partialend, 10) : total - 1;
      var chunksize = (end - start) + 1;
      var readStream = fs.createReadStream(filePath, { start: start, end: end });
      res.writeHead(206, {
          'Content-Range': 'bytes ' + start + '-' + end + '/' + total,
          'Accept-Ranges': 'bytes',
          'Content-Length': chunksize,
          'Content-Type': 'video/mp4'
      });
      readStream.pipe(res);
  } else {
      res.writeHead(200, { 'Content-Length': total, 'Content-Type': 'audio/mpeg' });
      fs.createReadStream(filePath).pipe(res);
  }
});

app.get('/hnmpl.mp3', function(req, res) {
  var filePath = 'hnmpl.mp3';
  var stat = fs.statSync(filePath);
  var total = stat.size;
  if (req.headers.range) {
      var range = req.headers.range;
      var parts = range.replace(/bytes=/, "").split("-");
      var partialstart = parts[0];
      var partialend = parts[1];

      var start = parseInt(partialstart, 10);
      var end = partialend ? parseInt(partialend, 10) : total - 1;
      var chunksize = (end - start) + 1;
      var readStream = fs.createReadStream(filePath, { start: start, end: end });
      res.writeHead(206, {
          'Content-Range': 'bytes ' + start + '-' + end + '/' + total,
          'Accept-Ranges': 'bytes',
          'Content-Length': chunksize,
          'Content-Type': 'video/mp4'
      });
      readStream.pipe(res);
  } else {
      res.writeHead(200, { 'Content-Length': total, 'Content-Type': 'audio/mpeg' });
      fs.createReadStream(filePath).pipe(res);
  }
});

app.get('/wake.mp3', function(req, res) {
  var filePath = 'wake.mp3';
  var stat = fs.statSync(filePath);
  var total = stat.size;
  if (req.headers.range) {
      var range = req.headers.range;
      var parts = range.replace(/bytes=/, "").split("-");
      var partialstart = parts[0];
      var partialend = parts[1];

      var start = parseInt(partialstart, 10);
      var end = partialend ? parseInt(partialend, 10) : total - 1;
      var chunksize = (end - start) + 1;
      var readStream = fs.createReadStream(filePath, { start: start, end: end });
      res.writeHead(206, {
          'Content-Range': 'bytes ' + start + '-' + end + '/' + total,
          'Accept-Ranges': 'bytes',
          'Content-Length': chunksize,
          'Content-Type': 'video/mp4'
      });
      readStream.pipe(res);
  } else {
      res.writeHead(200, { 'Content-Length': total, 'Content-Type': 'audio/mpeg' });
      fs.createReadStream(filePath).pipe(res);
  }
});

app.get('/somebody.mp3', function(req, res) {
  var filePath = 'somebody.mp3';
  var stat = fs.statSync(filePath);
  var total = stat.size;
  if (req.headers.range) {
      var range = req.headers.range;
      var parts = range.replace(/bytes=/, "").split("-");
      var partialstart = parts[0];
      var partialend = parts[1];

      var start = parseInt(partialstart, 10);
      var end = partialend ? parseInt(partialend, 10) : total - 1;
      var chunksize = (end - start) + 1;
      var readStream = fs.createReadStream(filePath, { start: start, end: end });
      res.writeHead(206, {
          'Content-Range': 'bytes ' + start + '-' + end + '/' + total,
          'Accept-Ranges': 'bytes',
          'Content-Length': chunksize,
          'Content-Type': 'video/mp4'
      });
      readStream.pipe(res);
  } else {
      res.writeHead(200, { 'Content-Length': total, 'Content-Type': 'audio/mpeg' });
      fs.createReadStream(filePath).pipe(res);
  }
});

app.get('/brother.mp3', function(req, res) {
  var filePath = 'brother.mp3';
  var stat = fs.statSync(filePath);
  var total = stat.size;
  if (req.headers.range) {
      var range = req.headers.range;
      var parts = range.replace(/bytes=/, "").split("-");
      var partialstart = parts[0];
      var partialend = parts[1];

      var start = parseInt(partialstart, 10);
      var end = partialend ? parseInt(partialend, 10) : total - 1;
      var chunksize = (end - start) + 1;
      var readStream = fs.createReadStream(filePath, { start: start, end: end });
      res.writeHead(206, {
          'Content-Range': 'bytes ' + start + '-' + end + '/' + total,
          'Accept-Ranges': 'bytes',
          'Content-Length': chunksize,
          'Content-Type': 'video/mp4'
      });
      readStream.pipe(res);
  } else {
      res.writeHead(200, { 'Content-Length': total, 'Content-Type': 'audio/mpeg' });
      fs.createReadStream(filePath).pipe(res);
  }
});

app.get('/perdido.mp3', function(req, res) {
  var filePath = 'perdido.mp3';
  var stat = fs.statSync(filePath);
  var total = stat.size;
  if (req.headers.range) {
      var range = req.headers.range;
      var parts = range.replace(/bytes=/, "").split("-");
      var partialstart = parts[0];
      var partialend = parts[1];

      var start = parseInt(partialstart, 10);
      var end = partialend ? parseInt(partialend, 10) : total - 1;
      var chunksize = (end - start) + 1;
      var readStream = fs.createReadStream(filePath, { start: start, end: end });
      res.writeHead(206, {
          'Content-Range': 'bytes ' + start + '-' + end + '/' + total,
          'Accept-Ranges': 'bytes',
          'Content-Length': chunksize,
          'Content-Type': 'video/mp4'
      });
      readStream.pipe(res);
  } else {
      res.writeHead(200, { 'Content-Length': total, 'Content-Type': 'audio/mpeg' });
      fs.createReadStream(filePath).pipe(res);
  }
});

app.get('/anoche.mp3', function(req, res) {
  var filePath = 'anoche.mp3';
  var stat = fs.statSync(filePath);
  var total = stat.size;
  if (req.headers.range) {
      var range = req.headers.range;
      var parts = range.replace(/bytes=/, "").split("-");
      var partialstart = parts[0];
      var partialend = parts[1];

      var start = parseInt(partialstart, 10);
      var end = partialend ? parseInt(partialend, 10) : total - 1;
      var chunksize = (end - start) + 1;
      var readStream = fs.createReadStream(filePath, { start: start, end: end });
      res.writeHead(206, {
          'Content-Range': 'bytes ' + start + '-' + end + '/' + total,
          'Accept-Ranges': 'bytes',
          'Content-Length': chunksize,
          'Content-Type': 'video/mp4'
      });
      readStream.pipe(res);
  } else {
      res.writeHead(200, { 'Content-Length': total, 'Content-Type': 'audio/mpeg' });
      fs.createReadStream(filePath).pipe(res);
  }
});


app.listen(8888, function () {
  console.log('Servidor escoltant port 8888');
})
