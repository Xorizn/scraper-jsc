# Scraper With TSC Javascript
Node.js module to scrape web data using EsModule and TSC.

### Related projects

* [xorizn-scraper](https://github.com/Xorizn/xorizn-scraper): a scraper with javascript CommonJs tools.
* [xorizn-downloads](https://github.com/Xorizn/xorizn-downloads): a scraper web with exspress module and use CommonJs.
* [xorizn-apis](https://github.com/Xorizn/xorizn-apis): a scraper web with exspress module and use CommonJs.
* [xorizn-search](https://github.com/Xorizn/xorizn-search): a scraper web with exspress module and use CommonJs.

## Installation
```
npm install scraper-jsc
```

## Usage
Available methods:
- [Downloads](#downloads): A scraper for downloading videos and audio
- [News](#news): Scraper news websites, like CNBC and CNN, are online platforms that aggregate news content from various sources to provide users with a comprehensive view of the news.
- [Search](#search): A scraper website search is a type of search engine that operates by automatically gathering information from other websites, typically without permission.
- [Islamic](#islamic): A scraper website for Islamic content, such as Surah and Jadwal Sholat, can be built using JavaScript ES Modules.
- [Images](#images): A scraper image downloads tool is a program that can automatically download images from various websites, similar to the functionality of Pinterest.


## Downloads
A scraper for downloading videos and audio, such as those used for YouTube and TikTok, is a type of software or website that enables users to download content from various online platforms. These scrapers work by accessing the source code of the web page hosting the content and extracting the relevant video or audio files. Users can then download these files for offline viewing or listening. While scraper tools can be useful for users who want to save online content for later viewing, they may also infringe on the copyright and intellectual property rights of the content creators. It's important for users to use scraper tools responsibly and to respect the rights of content creators by only downloading content that they have permission to access and use.

Retrieves the full detail of an downloads feature. Options:

* `url`: string url param.
* `search`: string search param.

Example:

```javascript
import { downloads } from 'scraper-jsc' //import scraper jsc

const res = await downloads.TikTok("https://vt.tiktok.com/ZS8op3wp1/"); //result function
console.log(res)
```
Results:

```javascript
{
  developer: '@Xorizn',
  status: true,
  result: {
    thumb: 'https://img-cdn02.lovetik.com/images/?file=jaL%2FF1PZO6W0QYabH8o9xA4jZF01QQeP9Vj8iddLupSfj3XeB%2B6kvzzdenuC1qlyswu2jlLkQt4bmqcq78KTjBaNBFVfTTRmn7gdZF%2B7UemH4foyGV4q782x3M%2BjkBicojcFQQkmznkaPrO%2FIk1ELwZTabZn0%2FazAtkvfXLGY%2FBhe1V9bcPsNpdAA5dnNIQHc1srKKfH2aXNvMYqWrLTtTYfQ1DxG1cu2jluTSJa%2BeK8zkE9OBCVGWHqIYarYHg9gsZwLwDZfhOxipwwi3u3jnWKUWWBzP73TX6SP2jwaaRLGKRKyMoofiPfSao9HlLE',
    v_id: '7231845390922845466',
    desc: '😡',
    nowm: 'http://dl157.dlmate64.xyz/tiktok-file.php?file=jaL%2FF1PZO6WyR4eYGMox3kw%2BZhcvBg%2BU9xyn2o5QuMyRxmSATfrmqD2IaGqEhrdm%2FF7lilasFo5ax6dztLOhiBS6CTgfVztMufkDSX32V%2F%2BywdkEG3ZI8cOkqP6brRK4lXsKAxYghT1Hb%2BftMFQAOREMb4FAwqe3BKVXHRe4CYMgNmwAeePdD51RPod7ftVZfTggd7jO3LraytBFOcyiyn8vXimSS3d51UgrDGMj77ft%2BjkZEFrAHzixcM%2FvRm5r3bhmeVSnLlqkmdMnwST3g3WLUGKWnLr4SXqSMHigKq08f%2FF7tMhNWWWjFe8aGxP7Ub2RtJrGnR3WU0DMpB6szLmyZRMJPZvLYwsPAcdGiJ%2BIStFBmJh4foaWISSVc9rxgHBzXC%2B8mn%2BAeGO2J4tHI9Jfe9r8UW7%2F2Wr2ZO%2F64TsHLWCRwYxuYeRDGvpncKDfmkq24M0qLSv4NqECilb86UcEE8RXqVhCRipNZylqjJvlduKJIn5jr0etSdI%2BGnq85%2Fg8BGh%2BAuzMF%2FLeHgXuaIK7VhEw6n%2FuKmZB7NPbNFlFNecI0foUy1YSiujtm8iMbdW%2Fw1rG1Sn4nizwxhB90qzf%2BYN9yUk%3D&finfo=g7jqCkXeWOWyFeTfB405xU5%2BKFhkblzeo3W61IFAmMqtwWXQBLeOoDbLbH3vgLYywQqo0BX9BdEbnPIgvbf220bkCSM%3D&play=1',
    author: {
      author: '@zeejkt48',
      author_name: 'zee',
      author_profile: 'https://img-cdn02.lovetik.com/images/?file=jaL%2FF1PZO6W0QYabH8o9xA4jZF01QQeP9Vj8iddLupSfj3XeB%2B6kvzzdenuC1qlj6E%2BrjVX%2FG5oPnPsqr76mikC%2FCCZcWjsc5bcVQG%2B4E%2Bjik88UGSRXspXms7LfthD%2BvnhdFh5n1ihZKLG4bQoRZxtbcK1wxbi%2FBdckd3%2FBYvJhbQsoM9niP5hVApBwbNsaDCpBK43LvuHQx%2FMaYrfKjmEvUlmaPmNx3A5pAGl4mamku0A%3D'
    },
    other: {
      link: [Array],
      wm: 'http://dl225.dlmate04.online/tiktok-file.php?file=jaL%2FF1PZO6WlANmHWo40xVE4ZB9sS0GO6Vb%2Bns1UuNWGyWrFG6in4jrTZCDRwOFv%2BxTwjEq5T9YR2rcz6eKggS61VSofDjkZ5OMQRT7pEry0yM8RWCFU5pvg8LuCuxul0n8JHkA6iX4SYuT8alQdLwxOYbZpnfqkWI57KxmbMK00YFk5dd7kM9BHGZBwaoMCeC0hXe3q5LyQqtgcNcmvzT17ByCUCyQ8jk81WSZ87afi7jZOSgHXSG%2B4JNLo&finfo=g7jqCkXeWOWyFeTfB405xU5%2BKFhkblzeo3W61IFAmMqt12DFEbG8rSvXbGue2vQ2uF311B%2BsHoZewrF0ub4%3D'
    }
  }
}
```

Other:

```javascript
import { downloads } from 'scraper-jsc' //import scraper jsc

var res = await downloads.TikTok(url_tiktok); //to download tiktok video
var res = await downloads.FaceBook(url_fb); //to download facebook video
var res = await downloads.MusiCally(url_tiktok); //to download tiktok video
var res = await downloads.PinterestVid(url_pinterest); //to download pinterest video
var res = await downloads.SoundCloude(search_song); //to download and play sound cloude music
var res = await downloads.Twitter(url_twit); //to download twitter video
var res = await downloads.Ytv(url_youtube); //to download youtube video

console.log(res)
```

## News
Scraper news websites, like CNBC and CNN, are online platforms that aggregate news content from various sources to provide users with a comprehensive view of the news. These websites typically use software programs to automatically gather articles and news stories from a range of sources, including other news websites, wire services, and social media platforms. They then present this content to users in a user-friendly format that makes it easy to browse and navigate. While scraper news websites can provide users with access to a broad range of news content quickly, they may also raise concerns about the accuracy and reliability of the information they provide. It's important for users to be discerning when using scraper news websites and to verify the accuracy of the information they find.

Example:

```javascript
import { news } from 'scraper-jsc' //import scraper jsc

const res = await news.Gempa() //result function
console.log(res)
```
Results:

```javascript
{
  developer: '@Xorizn',
  status: true,
  result: [
    {
      index: '1',
      waktu: '12/05/2023 04:56:39 WIB',
      lintang: '8.41 LS',
      bujur: '109.01 BT',
      magnitudo: '4.5',
      kedalaman: '15 Km',
      wilayah: 'Pusat gempa berada di laut 76 Km Tenggara Cilacap',
      wilayah_dirasakan: [Array],
      img_map: 'https://ews.bmkg.go.id/TEWS/data/20230512045639.mmi.jpg',
      google_map: 'https://www.google.com/maps/place/8.41%C2%B0S+109.01%C2%B0E'
    },
    {
      index: '2',
      waktu: '11/05/2023 23:04:17 WIB',
      lintang: '6.42 LS',
      bujur: '104.86 BT',
      magnitudo: '4.6',
      kedalaman: '10 Km',
      wilayah: 'Pusat gempa berada di laut 84 km Barat Laut SUMUR',
      wilayah_dirasakan: [Array],
      img_map: 'https://ews.bmkg.go.id/TEWS/data/20230511230417.mmi.jpg',
      google_map: 'https://www.google.com/maps/place/6.42%C2%B0S+104.86%C2%B0E'
    },
    {
      index: '3',
      waktu: '11/05/2023 21:35:57 WIB',
      lintang: '1.6 LU',
      bujur: '96.36 BT',
      magnitudo: '5.7',
      kedalaman: '10 Km',
      wilayah: 'Pusat gempa berada di laut 290 km BaratDaya Gunung Sitoli',
      wilayah_dirasakan: [Array],
      img_map: 'https://ews.bmkg.go.id/TEWS/data/20230511213557.mmi.jpg',
      google_map: 'https://www.google.com/maps/place/1.6%C2%B0S+96.36%C2%B0E'
    }
    ...
  ]
}
```

Other:

```javascript
import { news } from 'scraper-jsc'

var res = await news.Gempa()

//list params category ['news', 'market', 'investment', 'entrepreneur', 'syariah', 'tech', 'lifestyle']
var res = await news.Cnbc("news"); //category news

//params country: string
var res = await news.CovidCountry('china') //example country china

//no params
var res = await news.CovidIndo() ;
var res = await news.CovidIndo2();
var res = await news.CovidWorld();
var res = await news.Gempa();
var res = await news.Gempa2();
var res = await news.KompasGlobal();
var res = await news.KompasNews();
var res = await news.KompasTerpopuler();
var res = await news.RumahKeadilan();
var res = await news.TixID();

console.log(res)
```

## Search
A scraper website search is a type of search engine that operates by automatically gathering information from other websites, typically without permission. These scraper websites use software programs to extract data from other websites and compile it into a searchable database. While scraper websites can provide users with access to a large amount of information quickly, they can also raise ethical and legal concerns, as they may be infringing on the intellectual property rights of other websites and their owners. In some cases, scraper websites may also misrepresent the information they gather, leading to inaccuracies and errors in search results.

Example:

```javascript
import { search } from 'scraper-jsc' //import scraper-jsc

const res = await search.PlayStore('ff'); //result function
console.log(res)
```
Results:

```javascript
{
  developer: '@Xorizn',
  status: true,
  result: [
    {
      link: 'https://play.google.com/store/apps/details?id=com.square_enix.android_googleplay.FFBEWW',
      nama: 'FINAL FANTASY  BRAVE EXVIUS',
      developer: 'SQUARE ENIX Co.,Ltd.',
      img: 'https://play-lh.googleusercontent.com/b0M65rGov6tNp_S9YEAk_EwjUsOjCpFv2Y24nar7YCtmPxFHcKhZaApdAqrY-RlkKg=s64',
      rate: 'Rated 4.2 stars out of five stars',
      rate2: '4.2',
      link_dev: 'https://play.google.com/store/apps/developer?id=SQUARE+ENIX+Co.,Ltd.'
    },
    {
      link: 'https://play.google.com/store/apps/details?id=com.garena.gaslite',
      nama: 'Garena',
      developer: 'Garena Online',
      img: 'https://play-lh.googleusercontent.com/PQFhrkXH3hhvyKXt_AThT0rvncVB6n9Ec5uMvREXkkHN0H2qh4HkUKEBnKU3BS75Rw=s64',
      rate: 'Rated 1.8 stars out of five stars',
      rate2: '1.8',
      link_dev: 'https://play.google.com/store/apps/developer?id=Garena+Online'
    },
    {
      link: 'https://play.google.com/store/apps/details?id=com.gearup.booster',
      nama: 'GearUP Game Booster: Lower Lag',
      developer: 'GearUP Global',
      img: 'https://play-lh.googleusercontent.com/SnojGEhGpKn8IR1llHmRysc7QDpef10h41WBgavh_hDZsxpxwwKWJdzNMcoY85yZPJg=s64',
      rate: 'Rated 4.2 stars out of five stars',
      rate2: '4.2',
      link_dev: 'https://play.google.com/store/apps/developer?id=GearUP+Global'
    },
    ...
  ]
}
```

Other:

```javascript
import { search } from 'scraper-jsc' //import scraper-jsc

//list params tv: [gtv, antv, indosiar, inewstv, kompastv, metrotv, mnctv, moji, nettv, rcti, rtv, sctv, trans7, transtv, tvone, tvri]
var res = await search.JadwalTV('antv');

//Hero mobile legends
var res = await search.Hero("Miya"); 
var res = await search.ListHero(); //list hero ml
var res = await search.AcaraNow(); //no params, acara now

//params search
var res = await search.PlayStore(search);
var res = await search.BukaLapak(search);
var res = await search.Google(search);
var res = await search.GoogleImages(search);
var res = await search.JadwalSepakbola();
var res = await search.KBBI(search);
var res = await search.KodePos(search);
var res = await search.KodePos2(search);
var res = await search.LinkWa(search);
var res = await search.Lirik(search);
var res = await search.Lirik2(search);
var res = await search.Nomina(search);
var res = await search.RingTone(search);
var res = await search.SoundCloude(search);
var res = await search.Steam(search);
var res = await search.SteamDetail(url_steam);
var res = await search.WattPad(search);
var res = await search.WikiMedia(search);
var res = await search.XPanas(search);
var res = await search.YtSearch(search);

console.log(res)
```

## Islamic

A scraper website for Islamic content, such as Surah and Jadwal Sholat, can be built using JavaScript ES Modules. ES Modules is a feature in modern JavaScript that allows developers to organize their code into reusable modules, making it easier to build large-scale applications.

With the power of JavaScript and ES Modules, developers can build scraper websites for Islamic content that provide users with a wealth of information and resources related to their faith. It's important to use these scraper websites responsibly and respect the intellectual property rights of the sources from which they extract information.

Example:

```js
import { islam } from 'scraper-jsc' //import scraper-jsc

//param numbers
const res = await islam.JadwalSholat(10); //result function
console.log(res);
```

Results:

```js
{
  developer: '@Xorizn',
  status: true,
  result: [
    {
      tanggal: '01 Mei 2023',
      imsak: '4:26',
      subuh: '4:36',
      zuhur: '11:53',
      ashar: '15:14',
      maghrib: '17:50',
      isya: '19:00'
    },
    {
      tanggal: '02 Mei 2023',
      imsak: '4:26',
      subuh: '4:36',
      zuhur: '11:53',
      ashar: '15:14',
      maghrib: '17:50',
      isya: '19:00'
    },
    {
      tanggal: '03 Mei 2023',
      imsak: '4:26',
      subuh: '4:36',
      zuhur: '11:53',
      ashar: '15:14',
      maghrib: '17:49',
      isya: '19:00'
    },
    ...
  ]
}
```

Other:

```js
import { islam } from 'scraper-jsc' //import scraper-jsc

//param numbers
const res = await islam.Surah(10); //result function
console.log(res);
/*{
  developer: '@Xorizn',
  status: true,
  result: {
    audio: 'https://kalam.sindonews.com/audioframe/10/yunus',
    surah: [
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object]
    ]
  }
}*/
```

## Images
A scraper image downloads tool is a program that can automatically download images from various websites, similar to the functionality of Pinterest. This tool can be used to collect images for personal or professional use, such as for inspiration, design projects, or social media content creation.


Example:

```js
import { images } from 'scraper-jsc' //import scraper-jsc

const res = await images.Pinterest('anime'); //error message
console.log(res);
```

Results:

```js
{
  developer: '@Xorizn',
  status: true,
  result: [
    'https://i.pinimg.com/736x/66/14/8c/66148c387887ef0a822f1afdd5444581.jpg',
    'https://i.pinimg.com/736x/fc/0f/96/fc0f96b1c7bf364ccb69c73908d857cc.jpg',
    'https://i.pinimg.com/736x/1a/84/35/1a8435b262f70dc441a52bf15a9c620d.jpg',
    'https://i.pinimg.com/736x/12/41/7b/12417b5cfabdeffcb0c55231aca15387.jpg',
    'https://i.pinimg.com/736x/ca/3f/c5/ca3fc591a26c92cb1b686f8f93515e61.jpg',
    'https://i.pinimg.com/736x/3d/84/84/3d8484194b7e078b65449f81f89bc317.jpg',
    'https://i.pinimg.com/736x/9e/bd/21/9ebd219117041ea6a1428bac9fb9ebeb.jpg',
    'https://i.pinimg.com/736x/9b/0c/91/9b0c91ac56876c62813b6b3d16572de6.jpg',
    'https://i.pinimg.com/736x/2b/33/58/2b3358a7255ae7220bfb8dd9a69b5668.jpg',
    'https://i.pinimg.com/736x/ef/3e/70/ef3e704c0e5d94dba0ec3d53a7080565.jpg',
    'https://i.pinimg.com/736x/c0/37/c3/c037c3126d2a9eec910a8724aed0e8fa.jpg',
    'https://i.pinimg.com/736x/ee/41/50/ee4150a15059069ff949ae73f7655d53.jpg',
    'https://i.pinimg.com/736x/c7/fc/02/c7fc024e26408398134fd20021148cd3.jpg',
    'https://i.pinimg.com/736x/4c/a5/fe/4ca5fefc1f6db5054730750b4b5c33e8.jpg',
    'https://i.pinimg.com/736x/6d/50/9d/6d509d329b23502e4f4579cbad5f3d7f.jpg',
    'https://i.pinimg.com/736x/fb/21/40/fb214046d14927262e3310ad25cb8beb.jpg',
    'https://i.pinimg.com/736x/77/44/94/774494f5a42d28850f7d6078fb34a0b0.jpg',
    'https://i.pinimg.com/736x/4a/fe/31/4afe31b113d6dcfdcd1ebe2783b57421.jpg',
    'https://i.pinimg.com/736x/92/e8/b1/92e8b19df6916a3638dc6a38ecd74998.jpg',
    'https://i.pinimg.com/736x/d0/a0/de/d0a0deef90f37d4fc2a58cf538594f9e.jpg',
    'https://i.pinimg.com/736x/ab/eb/55/abeb55bd1976f05fb6679ff22f25b166.jpg',
    'https://i.pinimg.com/736x/85/96/01/8596013c5c781549d59aa865ef222227.jpg',
    'https://i.pinimg.com/736x/d5/88/6c/d5886c3a4c7d158b5f83904493edc28f.jpg',
    'https://i.pinimg.com/736x/99/00/69/990069583b3d0bf5d62fe7152a001eb4.jpg',
    'https://i.pinimg.com/736x/a7/63/11/a76311bbf9049d6a2be7f482c0a34461.jpg'
  ]
}
```

Other: 

```js
import { images } from 'scraper-jsc' //import scraper-jsc

var res = await images.Wallpaper('anime')
var res = await images.WallpaperFlare('anime')

console.log(res)
```

##
RANDOM
STALK
ANIME
