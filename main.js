var http = require("http");
var fs = require("fs");
var url = require("url");

var app = http.createServer(function (request, response) {
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  var title = queryData.id;
  if (_url == "/") {
    title = "welcome";
  }
  if (_url == "/favicon.ico") {
    response.writeHead(404);
    response.end();
    return;
  }
  response.writeHead(200);
  var templete = `<!DOCTYPE html>
  <html>
    <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8" />
      <script src="colors.js"></script>
    </head>
    <body>
      <h1><a href="/">WEB</a></h1>
      <input
        type="button"
        value="night"
        onclick="
      nightDayHandler(this)
      "
      />
      <ol>
        <li><a href="/?id=HTML">HTML</a></li>
        <li><a href="/?id=CSS">CSS</a></li>
        <li><a href="/?id=JavaScript">JavaScript</a></li>
      </ol>
      <h2>${title}</h2>
      <p>
        <a
          href="https://www.w3.org/TR/html5/"
          target="_blank"
          title="html5 specification"
          >Hypertext Markup Language (HTML)
        </a>
        is the standard markup language for
        <strong>creating <u>web</u> pages</strong> and web applications.Web
        browsers receive HTML documents from a web server or from local storage
        and render them into multimedia web pages. HTML describes the structure of
        a web page semantically and originally included cues for the appearance of
        the document.
      </p>
      <img
        src="C:\Users\Sunwoo\Desktop\Web\ilya-pavlov-OqtafYT5kTw-unsplash.jpg"
        width="50%"
      />
      <p style="margin-top: 45px">
        HTML elements are the building blocks of HTML pages. With HTML constructs,
        images and other objects, such as interactive forms, may be embedded into
        the rendered page. It provides a means to create structured documents by
        denoting structural semantics for text such as headings, paragraphs,
        lists, links, quotes and other items. HTML elements are delineated by
        tags, written using angle brackets.
      </p>
    </body>
  </html>
  `;
  response.end(templete);
});
app.listen(3000);
