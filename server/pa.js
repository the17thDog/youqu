const cheerio = require('cheerio');
const http = require('http');
const request = require('request');
const fs = require('fs');

const url = 'http://www.mafengwo.cn/jd/44658/gonglve.html',
  baseUrl = 'http://www.mafengwo.cn';


http.get(url, res => {
  var str = '';
  res.setEncoding('utf-8'); //防止中文乱码

  res.on('data', chunk => {
    str += chunk;
  });

  res.on('end', () => {
    var titles = [],
      html = str.toString();
    $ = cheerio.load(html, {
      decodeEntities: false
    });
    console.log($)

    // $('.mod-innerScenic .info h3').each((idx, item) => {
    //   var imgSrc = $('.mod-innerScenic li img').eq(idx).attr('src'),
    //     $itemTxt = $(item).text();

    //   titles.push({
    //     title: $itemTxt,
    //     num_of_people: $('.mod-innerScenic em').eq(idx).text(),
    //     link: baseUrl + $('.mod-innerScenic li a').eq(idx).attr('href'),
    //     imgSrc
    //   });
    //   request(imgSrc).pipe(fs.createWriteStream('./www/' + $itemTxt + '.jpg'))

    // })
    // fs.writeFile('./www/text.json', JSON.stringify(titles), err => {
    //   console.log(err);

    // })
    // console.log(titles);

  })

})
