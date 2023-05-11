"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
    function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
    function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
  var _ = { label: 0, sent: function () { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0: case 1: t = op; break;
        case 4: _.label++; return { value: op[1], done: false };
        case 5: _.label++; y = op[1]; op = [0]; continue;
        case 7: op = _.ops.pop(); _.trys.pop(); continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
          if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
          if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
          if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
          if (t[2]) _.ops.pop();
          _.trys.pop(); continue;
      }
      op = body.call(thisArg, _);
    } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
    if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = void 0;
var axios_1 = require("axios");
var cheerio_1 = require("cheerio");
var yt_search_1 = require("yt-search");
var google_it_1 = require("google-it");
var config_1 = require("../config");
exports.search = {
  YtSearch: function (search) {
    return __awaiter(this, void 0, void 0, function () {
      var data, err_1;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 2, , 3]);
            return [4 /*yield*/, (0, yt_search_1.default)(search)];
          case 1:
            data = _a.sent();
            return [2 /*return*/, (0, config_1.Proret)(data.all)];
          case 2:
            err_1 = _a.sent();
            console.log(err_1);
            return [3 /*break*/, 3];
          case 3: return [2 /*return*/];
        }
      });
    });
  },
  WikiMedia: function (search) {
    return __awaiter(this, void 0, void 0, function () {
      var data, $_1, hasil_1, err_2;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 2, , 3]);
            return [4 /*yield*/, axios_1.default.get("https://commons.wikimedia.org/w/index.php?search=".concat(search, "&title=Special:MediaSearch&go=Go&type=image"))];
          case 1:
            data = (_a.sent()).data;
            $_1 = (0, cheerio_1.load)(data);
            hasil_1 = [];
            $_1(".sdms-search-results__list-wrapper > div > a").each(function (a, b) {
              hasil_1.push({
                title: $_1(b).find("img").attr("alt"),
                source: $_1(b).attr("href"),
                image: $_1(b).find("img").attr("data-src") || $_1(b).find("img").attr("src"),
              });
            });
            if (hasil_1.every(function (x) { return x === undefined; }))
              return [2 /*return*/, { developer: "@xorizn", mess: "no result found" }];
            return [2 /*return*/, (0, config_1.Proret)(hasil_1)];
          case 2:
            err_2 = _a.sent();
            console.log(err_2);
            return [3 /*break*/, 3];
          case 3: return [2 /*return*/];
        }
      });
    });
  },
  SoundCloude: function (search) {
    return __awaiter(this, void 0, void 0, function () {
      var data, $_2, ajg_1, _$, hasil_2, err_3;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 2, , 3]);
            return [4 /*yield*/, axios_1.default.get("https://soundcloud.com/search?q=".concat(search))];
          case 1:
            data = (_a.sent()).data;
            $_2 = (0, cheerio_1.load)(data);
            ajg_1 = [];
            $_2("#app > noscript").each(function (u, i) {
              ajg_1.push($_2(i).html());
            });
            _$ = (0, cheerio_1.load)(ajg_1[1]);
            hasil_2 = [];
            _$("ul > li > h2 > a").each(function (i, u) {
              if ($_2(u).attr("href").split("/").length === 3) {
                var linkk = $_2(u).attr("href");
                var judul = $_2(u).text();
                var link = linkk ? linkk : "Tidak ditemukan";
                var jdi = "https://soundcloud.com".concat(link);
                var jadu = judul ? judul : "Tidak ada judul";
                hasil_2.push({
                  link: jdi,
                  judul: jadu,
                });
              }
            });
            if (hasil_2.every(function (x) { return x === undefined; }))
              return [2 /*return*/, { developer: "@xorizn", mess: "no result found" }];
            return [2 /*return*/, (0, config_1.Proret)(hasil_2)];
          case 2:
            err_3 = _a.sent();
            console.log(err_3);
            return [3 /*break*/, 3];
          case 3: return [2 /*return*/];
        }
      });
    });
  },
  RingTone: function (search) {
    return __awaiter(this, void 0, void 0, function () {
      var data, $_3, hasil_3, err_4;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 2, , 3]);
            return [4 /*yield*/, axios_1.default.get("https://meloboom.com/en/search/" + search)];
          case 1:
            data = (_a.sent()).data;
            $_3 = (0, cheerio_1.load)(data);
            hasil_3 = [];
            $_3("#__next > main > section > div.jsx-2244708474.container > div > div > div > div:nth-child(4) > div > div > div > ul > li").each(function (a, b) {
              hasil_3.push({
                title: $_3(b).find("h4").text(),
                source: "https://meloboom.com/" + $_3(b).find("a").attr("href"),
                audio: $_3(b).find("audio").attr("src"),
              });
            });
            return [2 /*return*/, (0, config_1.Proret)(hasil_3)];
          case 2:
            err_4 = _a.sent();
            console.log(err_4);
            return [3 /*break*/, 3];
          case 3: return [2 /*return*/];
        }
      });
    });
  },
  PlayStore: function (search) {
    return __awaiter(this, void 0, void 0, function () {
      var _a, data, status_1, hasil_4, $_4, err_5;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            _b.trys.push([0, 2, , 3]);
            return [4 /*yield*/, axios_1.default.get("https://play.google.com/store/search?q=".concat(search, "&c=apps"))];
          case 1:
            _a = _b.sent(), data = _a.data, status_1 = _a.status;
            hasil_4 = [];
            $_4 = (0, cheerio_1.load)(data);
            $_4(".ULeU3b > .VfPpkd-WsjYwc.VfPpkd-WsjYwc-OWXEXe-INsAgc.KC1dQ.Usd1Ac.AaN0Dd.Y8RQXd > .VfPpkd-aGsRMb > .VfPpkd-EScbFb-JIbuQc.TAQqTe > a").each(function (i, u) {
              var linkk = $_4(u).attr("href"), nama = $_4(u).find(".j2FCNc > .cXFu1 > .ubGTjb > .DdYX5").text(), developer = $_4(u).find(".j2FCNc > .cXFu1 > .ubGTjb > .wMUdtb").text(), img = $_4(u).find(".j2FCNc > img").attr("src"), rate = $_4(u).find(".j2FCNc > .cXFu1 > .ubGTjb > div").attr("aria-label"), rate2 = $_4(u).find(".j2FCNc > .cXFu1 > .ubGTjb > div > span.w2kbF").text(), link = "https://play.google.com".concat(linkk);
              hasil_4.push({
                link: link,
                nama: nama ? nama : "No name",
                developer: developer ? developer : "No Developer",
                img: img ? img : "https://i.ibb.co/G7CrCwN/404.png",
                rate: rate ? rate : "No Rate",
                rate2: rate2 ? rate2 : "No Rate",
                link_dev: "https://play.google.com/store/apps/developer?id=".concat(developer.split(" ").join("+")),
              });
            });
            if (hasil_4.every(function (x) { return x === undefined; }))
              return [2 /*return*/, { developer: "@xorizn", mess: "no result found" }];
            return [2 /*return*/, (0, config_1.Proret)(hasil_4)];
          case 2:
            err_5 = _b.sent();
            console.log(err_5);
            return [3 /*break*/, 3];
          case 3: return [2 /*return*/];
        }
      });
    });
  },
  Lirik2: function (search) {
    return __awaiter(this, void 0, void 0, function () {
      var rus, ros, _i, rus_1, g, data, $, lk, err_6;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 3, , 4]);
            return [4 /*yield*/, (0, google_it_1.default)({ query: "lyrics ".concat(search, " genius") })];
          case 1:
            rus = _a.sent();
            ros = [];
            for (_i = 0, rus_1 = rus; _i < rus_1.length; _i++) {
              g = rus_1[_i];
              if (g.link.startsWith("https://genius.com")) {
                ros.push(g.link);
              }
            }
            if (ros.every(function (x) { return x === undefined; }))
              return [2 /*return*/, { developer: "@xorizn", mess: "Cannot find ".concat(search, " song") }];
            return [4 /*yield*/, axios_1.default.get(ros[0], {
              headers: {
                Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:108.0) Gecko/20100101 Firefox/108.0",
                "Accept-Encoding": "gzip, deflate, br",
              },
            })];
          case 2:
            data = (_a.sent()).data;
            $ = (0, cheerio_1.load)(data);
            lk = $('div[data-lyrics-container="true"]').html();
            if (lk === undefined || lk === null) {
              return [2 /*return*/, { developer: "@xorizn", mess: "Cannot find ".concat(search, " song") }];
            }
            else {
              return [2 /*return*/, (0, config_1.Proret)(lk.replace(/<br>/g, "\n").replace(/<[^>]*>/g, ""))];
            }
            return [3 /*break*/, 4];
          case 3:
            err_6 = _a.sent();
            console.log(err_6);
            return [3 /*break*/, 4];
          case 4: return [2 /*return*/];
        }
      });
    });
  },
  Google: function (search) {
    return __awaiter(this, void 0, void 0, function () {
      var hasil, err_7;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 2, , 3]);
            return [4 /*yield*/, (0, google_it_1.default)({ query: search })];
          case 1:
            hasil = _a.sent();
            return [2 /*return*/, (0, config_1.Proret)(hasil)];
          case 2:
            err_7 = _a.sent();
            console.log(err_7);
            return [3 /*break*/, 3];
          case 3: return [2 /*return*/];
        }
      });
    });
  },
  GoogleImages: function (search) {
    return __awaiter(this, void 0, void 0, function () {
      var _this = this;
      return __generator(this, function (_a) {
        try {
          return [2 /*return*/, new Promise(function (resolve, reject) {
            var gis = require('g-i-s');
            gis(search, function (error, result) {
              return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                  if (error) {
                    resolve((0, config_1.Proret)({ developer: '@xorizn', mess: 'no result found' }));
                  }
                  else {
                    resolve((0, config_1.Proret)(result));
                  }
                  return [2 /*return*/];
                });
              });
            });
          })];
        }
        catch (err) {
          console.log(err);
        }
        return [2 /*return*/];
      });
    });
  },
  BukaLapak: function (search) {
    return __awaiter(this, void 0, void 0, function () {
      var data, $_5, dat_1, b, err_8;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 2, , 3]);
            return [4 /*yield*/, axios_1.default.get("https://www.bukalapak.com/products?from=omnisearch&from_keyword_history=false&search[keywords]=".concat(search, "&search_source=omnisearch_keyword&source=navbar"), {
              headers: {
                "user-agent": "Mozilla/ 5.0(Windows NT 10.0; Win64; x64; rv: 108.0) Gecko / 20100101 Firefox / 108.0",
              },
            })];
          case 1:
            data = (_a.sent()).data;
            $_5 = (0, cheerio_1.load)(data);
            dat_1 = [];
            b = $_5("a.slide > img").attr("src");
            $_5("div.bl-flex-item.mb-8").each(function (i, u) {
              var a = $_5(u).find("observer-tracker > div > div");
              var img = $_5(a).find("div > a > img").attr("src");
              if (typeof img === 'undefined')
                return;
              var link = $_5(a).find('.bl-thumbnail--slider > div > a').attr('href');
              var title = $_5(a).find('.bl-product-card__description-name > p > a').text().trim();
              var harga = $_5(a).find('div.bl-product-card__description-price > p').text().trim();
              var rating = $_5(a).find('div.bl-product-card__description-rating > p').text().trim();
              var terjual = $_5(a).find('div.bl-product-card__description-rating-and-sold > p').text().trim();
              var dari = $_5(a).find('div.bl-product-card__description-store > span:nth-child(1)').text().trim();
              var seller = $_5(a).find('div.bl-product-card__description-store > span > a').text().trim();
              var link_sel = $_5(a).find('div.bl-product-card__description-store > span > a').attr('href');
              var res = {
                title: title,
                rating: rating ? rating : 'No rating yet',
                terjual: terjual ? terjual : 'Not yet bought',
                harga: harga,
                image: img,
                link: link,
                store: {
                  lokasi: dari,
                  nama: seller,
                  link: link_sel
                }
              };
              dat_1.push(res);
            });
            if (dat_1.every(function (x) { return x === undefined; }))
              return [2 /*return*/, { developer: "@xorizn", mess: "no result found" }];
            return [2 /*return*/, (0, config_1.Proret)(dat_1)];
          case 2:
            err_8 = _a.sent();
            console.log(err_8);
            return [3 /*break*/, 3];
          case 3: return [2 /*return*/];
        }
      });
    });
  },
  AcaraNow: function () {
    return __awaiter(this, void 0, void 0, function () {
      var data, $_6, tv_1, err_9;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 2, , 3]);
            return [4 /*yield*/, axios_1.default.get("https://www.jadwaltv.net/channel/acara-tv-nasional-saat-ini")];
          case 1:
            data = (_a.sent()).data;
            $_6 = (0, cheerio_1.load)(data);
            tv_1 = [];
            $_6("table.table.table-bordered > tbody > tr").each(function (_u, l) {
              var an = $_6(l).text().split("WIB");
              if (an[0] === "JamAcara") {
                return;
              }
              else if (typeof an[1] === 'undefined') {
                tv_1.push("\n" + "*" + an[0] + "*");
              }
              else {
                tv_1.push("".concat(an[0], " - ").concat(an[1]));
              }
            });
            return [2 /*return*/, (0, config_1.Proret)(tv_1)];
          case 2:
            err_9 = _a.sent();
            console.log(err_9);
            return [3 /*break*/, 3];
          case 3: return [2 /*return*/];
        }
      });
    });
  },
  JadwalSepakbola: function () {
    return __awaiter(this, void 0, void 0, function () {
      var data, $_7, tv_2, err_10;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 2, , 3]);
            return [4 /*yield*/, axios_1.default.get("https://www.jadwaltv.net/jadwal-sepakbola")];
          case 1:
            data = (_a.sent()).data;
            $_7 = (0, cheerio_1.load)(data);
            tv_2 = [];
            $_7("table.table.table-bordered > tbody > tr.jklIv").each(function (u, i) {
              var an = $_7(i).html().replace(/<td>/g, "").replace(/<\/td>/g, " - ");
              tv_2.push("".concat(an.substring(0, an.length - 3)));
            });
            if (tv_2.every(function (x) { return x === undefined; }))
              return [2 /*return*/, { developer: "@xorizn", mess: "no result found" }];
            return [2 /*return*/, (0, config_1.Proret)(tv_2)];
          case 2:
            err_10 = _a.sent();
            console.log(err_10);
            return [3 /*break*/, 3];
          case 3: return [2 /*return*/];
        }
      });
    });
  },
  JadwalTV: function (search) {
    return __awaiter(this, void 0, void 0, function () {
      var data, $_8, tv_3, err_11;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 2, , 3]);
            return [4 /*yield*/, axios_1.default.get("https://www.jadwaltv.net/channel/" + search)];
          case 1:
            data = (_a.sent()).data;
            $_8 = (0, cheerio_1.load)(data);
            tv_3 = [];
            $_8("table.table.table-bordered > tbody > tr.jklIv").each(function (u, i) {
              var an = $_8(i).text().split("WIB");
              tv_3.push("".concat(an[0], " - ").concat(an[1]));
            });
            if (tv_3.every(function (x) { return x === undefined; }))
              return [2 /*return*/, { developer: "@xorizn", mess: "no result found" }];
            return [2 /*return*/, (0, config_1.Proret)(tv_3.join("\n"))];
          case 2:
            err_11 = _a.sent();
            console.log(err_11);
            return [3 /*break*/, 3];
          case 3: return [2 /*return*/];
        }
      });
    });
  },
  KodePos: function (search) {
    return __awaiter(this, void 0, void 0, function () {
      var data, $_9, _data_1, err_12;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 2, , 3]);
            return [4 /*yield*/, axios_1.default.get("https://carikodepos.com/?s=".concat(search))];
          case 1:
            data = (_a.sent()).data;
            $_9 = (0, cheerio_1.load)(data);
            _data_1 = [];
            $_9("div.table.table-striped > table > tbody > tr").each(function (u, i) {
              var _doto = [];
              $_9(i).find("td").each(function (l, o) {
                _doto.push($_9(o).text().trim());
              });
              _data_1.push({
                province: _doto[0],
                regency: _doto[1],
                subdistrict: _doto[2],
                ward: _doto[3],
                postalcode: _doto[4],
              });
            });
            return [2 /*return*/, (0, config_1.Proret)(_data_1)];
          case 2:
            err_12 = _a.sent();
            console.log(err_12);
            return [3 /*break*/, 3];
          case 3: return [2 /*return*/];
        }
      });
    });
  },
  KodePos2: function (search) {
    return __awaiter(this, void 0, void 0, function () {
      var data, err_13;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 2, , 3]);
            return [4 /*yield*/, axios_1.default.get("https://kodeposku.com/api/search?q=".concat(search))];
          case 1:
            data = (_a.sent()).data;
            return [2 /*return*/, (0, config_1.Proret)(data.data)];
          case 2:
            err_13 = _a.sent();
            console.log(err_13);
            return [3 /*break*/, 3];
          case 3: return [2 /*return*/];
        }
      });
    });
  },
  Steam: function (search) {
    return __awaiter(this, void 0, void 0, function () {
      var _a, data, status_2, $_10, hasil_5, err_14;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            _b.trys.push([0, 2, , 3]);
            return [4 /*yield*/, axios_1.default.get("https://store.steampowered.com/search/?term=" + search)];
          case 1:
            _a = _b.sent(), data = _a.data, status_2 = _a.status;
            $_10 = (0, cheerio_1.load)(data);
            hasil_5 = [];
            $_10("#search_resultsRows > a").each(function (a, b) {
              var link = $_10(b).attr("href");
              var judul = $_10(b).find("div.responsive_search_name_combined > div.col.search_name.ellipsis > span").text();
              var harga = $_10(b).find("div.responsive_search_name_combined > div.col.search_price_discount_combined.responsive_secondrow > div.col.search_price.responsive_secondrow ").text().replace(/ /g, "").replace(/\n/g, "");
              var rating = $_10(b).find("div.responsive_search_name_combined > div.col.search_reviewscore.responsive_secondrow > span").attr("data-tooltip-html");
              var img = $_10(b).find("div.col.search_capsule > img").attr("src");
              var rilis = $_10(b).find("div.responsive_search_name_combined > div.col.search_released.responsive_secondrow").text();
              if (typeof rating === "undefined") {
                var rating = "no ratings";
              }
              if (rating.split("<br>")) {
                var hhh = rating.split("<br>");
                var rating = "".concat(hhh[0], " ").concat(hhh[1]);
              }
              hasil_5.push({
                judul: judul,
                img: img,
                link: link,
                rilis: rilis,
                harga: harga ? harga : "no price",
                rating: rating,
              });
            });
            if (hasil_5.every(function (x) { return x === undefined; }))
              return [2 /*return*/, { developer: "@xorizn", mess: "no result found" }];
            return [2 /*return*/, (0, config_1.Proret)(hasil_5)];
          case 2:
            err_14 = _b.sent();
            console.log(err_14);
            return [3 /*break*/, 3];
          case 3: return [2 /*return*/];
        }
      });
    });
  },
  SteamDetail: function (url) {
    return __awaiter(this, void 0, void 0, function () {
      var _a, data, status_3, $_11, xorizn_1, img, hasil, desc, hasill, err_15;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            _b.trys.push([0, 2, , 3]);
            return [4 /*yield*/, axios_1.default.get(url)];
          case 1:
            _a = _b.sent(), data = _a.data, status_3 = _a.status;
            $_11 = (0, cheerio_1.load)(data);
            xorizn_1 = [];
            img = $_11("#gameHeaderImageCtn > img").attr("src");
            $_11("div.game_area_sys_req.sysreq_content.active > div > ul > ul > li").each(function (u, i) {
              xorizn_1.push($_11(i).text());
            });
            hasil = $_11("#genresAndManufacturer").html().replace(/\n/g, "").replace(/<br>/g, "\n").replace(/\t/g, "").replace(/<b>/g, "").replace(/<\/div>/g, "\n").replace(/ /g, "").replace(/<\/b>/g, " ").replace(/<[^>]*>/g, "");
            desc = $_11("div.game_description_snippet").text().replace(/\t/g, "").replace(/\n/g, "");
            hasill = {
              desc: desc ? desc : "Error",
              img: img ? img : "https://i.ibb.co/G7CrCwN/404.png",
              system: xorizn_1.join("\n") ? xorizn_1.join("\n") : "Error",
              info: hasil,
            };
            return [2 /*return*/, (0, config_1.Proret)(hasill)];
          case 2:
            err_15 = _b.sent();
            console.log(err_15);
            return [3 /*break*/, 3];
          case 3: return [2 /*return*/];
        }
      });
    });
  },
  WattPad: function (search) {
    return __awaiter(this, void 0, void 0, function () {
      var data, $_12, limk_1, _data_2, err_16;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 2, , 3]);
            return [4 /*yield*/, axios_1.default.get("https://www.wattpad.com/search/" + search, {
              headers: {
                cookie: 'wp_id=d92aecaa-7822-4f56-b189-f8c4cc32825c; sn__time=j%3Anull; fs__exp=1; adMetrics=0; _pbkvid05_=0; _pbeb_=0; _nrta50_=0; lang=20; locale=id_ID; ff=1; dpr=1; tz=-8; te_session_id=1681636962513; _ga_FNDTZ0MZDQ=GS1.1.1681636962.1.1.1681637905.0.0.0; _ga=GA1.1.1642362362.1681636963; signupFrom=search; g_state={"i_p":1681644176441,"i_l":1}; RT=r=https%3A%2F%2Fwww.wattpad.com%2Fsearch%2Fanime&ul=1681637915624',
                "suer-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/111.0",
              },
            })];
          case 1:
            data = (_a.sent()).data, $_12 = (0, cheerio_1.load)(data), limk_1 = "https://www.wattpad.com", _data_2 = [];
            $_12(".story-card-container > ul.list-group.new-list-group > li.list-group-item").each(function (i, u) {
              var link = limk_1 + $_12(u).find("a").attr("href");
              var judul = $_12(u).find("a > div > div.story-info > div.title").text().trim();
              var img = $_12(u).find("a > div > div.cover > img").attr("src");
              var desc = $_12(u).find("a > div > div.story-info > .description").text().replace(/\s+/g, " ");
              var _doto = [];
              $_12(u).find("a > div > div.story-info > .new-story-stats > .stats-item").each(function (u, i) {
                _doto.push($_12(i).find(".icon-container > .tool-tip > .sr-only").text());
              });
              _data_2.push({
                title: judul,
                thumb: img,
                desc: desc,
                reads: _doto[0],
                vote: _doto[1],
                chapter: _doto[2],
                link: link,
              });
            });
            return [2 /*return*/, (0, config_1.Proret)(_data_2)];
          case 2:
            err_16 = _a.sent();
            console.log(err_16);
            return [3 /*break*/, 3];
          case 3: return [2 /*return*/];
        }
      });
    });
  },
  LinkWa: function (search) {
    return __awaiter(this, void 0, void 0, function () {
      var data, $_13, _title_1, _link_1, result, i, err_17;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 2, , 3]);
            return [4 /*yield*/, axios_1.default.get("http://ngarang.com/link-grup-wa/daftar-link-grup-wa.php?search=" + search + "&searchby=name")];
          case 1:
            data = (_a.sent()).data;
            $_13 = (0, cheerio_1.load)(data), _title_1 = [], _link_1 = [], result = [];
            $_13(".wa-chat-title > .wa-chat-title-text").each(function (u, i) {
              $_13('span[style="display:none;"]').remove();
              _title_1.push($_13(i).html().replace(/<\/?[^>]+(>|$)/g, ""));
            });
            $_13(".wa-chat-message > a").each(function (u, i) {
              _link_1.push($_13(i).text().trim());
            });
            for (i = 0; i < _link_1.length; i++) {
              result.push({
                title: _title_1[i],
                link: _link_1[i],
              });
            }
            return [2 /*return*/, (0, config_1.Proret)(result)];
          case 2:
            err_17 = _a.sent();
            console.log(err_17);
            return [3 /*break*/, 3];
          case 3: return [2 /*return*/];
        }
      });
    });
  },
  Lirik: function (search) {
    return __awaiter(this, void 0, void 0, function () {
      var data, $, hasil_6, limk, link, err_18;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 3, , 4]);
            return [4 /*yield*/, axios_1.default.get("https://www.musixmatch.com/search/" + search)];
          case 1:
            data = (_a.sent()).data, $ = (0, cheerio_1.load)(data), hasil_6 = {}, limk = "https://www.musixmatch.com", link = limk + $("div.media-card-body > div > h2").find("a").attr("href");
            return [4 /*yield*/, axios_1.default.get(link).then(function (_a) {
              var data = _a.data;
              var $$ = (0, cheerio_1.load)(data);
              hasil_6.thumb = "https:" + $$("div.col-sm-1.col-md-2.col-ml-3.col-lg-3.static-position > div > div > div").find("img").attr("src");
              $$("div.col-sm-10.col-md-8.col-ml-6.col-lg-6 > div.mxm-lyrics").each(function (a, b) {
                hasil_6.lirik = $$(b).find("span > p > span").text() + "\n" + $$(b).find("span > div > p > span").text();
              });
            })];
          case 2:
            _a.sent();
            return [2 /*return*/, (0, config_1.Proret)(hasil_6)];
          case 3:
            err_18 = _a.sent();
            console.log(err_18);
            return [3 /*break*/, 4];
          case 4: return [2 /*return*/];
        }
      });
    });
  },
  KBBI: function (search) {
    return __awaiter(this, void 0, void 0, function () {
      var data, $_14, _kata_1, _arti_1, _ol_1, err_19;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 2, , 3]);
            return [4 /*yield*/, axios_1.default.get("https://kbbi.kemdikbud.go.id/entri/" + search)];
          case 1:
            data = (_a.sent()).data;
            $_14 = (0, cheerio_1.load)(data);
            _kata_1 = [];
            _arti_1 = [];
            _ol_1 = [];
            $_14('h2[style="margin-bottom:3px"]').each(function (i, u) {
              _kata_1.push($_14(u).text().trim());
            });
            $_14("div.container.body-content")
              .find("li")
              .each(function (i, u) {
                var hasil = $_14(u)
                  .html()
                  .replace(/<[^>]+>/g, " ")
                  .replace(/ {2,}/g, " ")
                  .trim();
                _arti_1.push(hasil);
              });
            $_14("ol > li").each(function (i, u) {
              _ol_1.push($_14(u)
                .html()
                .replace(/<[^>]+>/g, " ")
                .replace(/ {2,}/g, " ")
                .trim());
            });
            _arti_1.splice(_arti_1.length - 3, 3);
            if (!(_ol_1.length === 0)) {
              return [2 /*return*/, (0, config_1.Proret)({
                lema: _kata_1[0],
                arti: _ol_1,
              })];
            }
            else {
              return [2 /*return*/, (0, config_1.Proret)({
                lema: _kata_1[0],
                arti: _arti_1,
              })];
            }
            return [3 /*break*/, 3];
          case 2:
            err_19 = _a.sent();
            console.log(err_19);
            return [3 /*break*/, 3];
          case 3: return [2 /*return*/];
        }
      });
    });
  },
  Nomina: function (search) {
    return __awaiter(this, void 0, void 0, function () {
      var data, $_15, _arti_2, err_20;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 2, , 3]);
            return [4 /*yield*/, axios_1.default.get("https://tesaurus.kemdikbud.go.id/tematis/lema/" + search + "/nomina")];
          case 1:
            data = (_a.sent()).data;
            $_15 = (0, cheerio_1.load)(data);
            _arti_2 = [];
            $_15(".search-result-area > .result-par > .contain > .result-set").each(function (i, u) {
              _arti_2.push($_15(u).text().trim());
            });
            return [2 /*return*/, (0, config_1.Proret)({
              lema: search,
              nomina: _arti_2,
              length: _arti_2.length,
            })];
          case 2:
            err_20 = _a.sent();
            console.log(err_20);
            return [3 /*break*/, 3];
          case 3: return [2 /*return*/];
        }
      });
    });
  },
  ListHero: function () {
    return __awaiter(this, void 0, void 0, function () {
      var data, $_16, _data_3, err_21;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 2, , 3]);
            return [4 /*yield*/, axios_1.default.get("https://mobile-legends.fandom.com/wiki/List_of_heroes")];
          case 1:
            data = (_a.sent()).data;
            $_16 = (0, cheerio_1.load)(data);
            _data_3 = [];
            $_16("table.wikitable.sortable > tbody > tr").each(function (i, u) {
              var hero_icon = $_16(u).find("td:nth-child(1) > center > a > img").attr("data-src");
              if (typeof hero_icon === "undefined")
                return;
              var name = $_16(u).find("td:nth-child(2)").text().trim();
              var hero_code = $_16(u).find("td:nth-child(3)").text().trim();
              var role = $_16(u).find("td:nth-child(4)").text().trim();
              var specialties = $_16(u).find("td:nth-child(5)").text().trim();
              var laning = $_16(u).find("td:nth-child(6)").text().trim();
              var release = $_16(u).find("td:nth-child(7)").text().trim();
              var price = $_16(u).find("td:nth-child(8)").text().trim();
              _data_3.push({
                hero_icon: hero_icon,
                name: name,
                hero_code: hero_code,
                role: role,
                specialties: specialties,
                laning: laning,
                release: release,
                price: price,
              });
            });
            return [2 /*return*/, (0, config_1.Proret)(_data_3)];
          case 2:
            err_21 = _a.sent();
            console.log(err_21);
            return [3 /*break*/, 3];
          case 3: return [2 /*return*/];
        }
      });
    });
  },
  Hero: function (search) {
    return __awaiter(this, void 0, void 0, function () {
      var upper, _a, data, status_4, $_17, atributes_1, rill_1, rull_1, rell_1, hero_img, desc, _$_1, result, anu, err_22;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            _b.trys.push([0, 2, , 3]);
            upper = search.charAt(0).toUpperCase() + search.slice(1).toLowerCase();
            return [4 /*yield*/, axios_1.default.get("https://mobile-legends.fandom.com/wiki/" + upper)];
          case 1:
            _a = _b.sent(), data = _a.data, status_4 = _a.status;
            if (status_4 === 200) {
              $_17 = (0, cheerio_1.load)(data);
              atributes_1 = [];
              rill_1 = [];
              rull_1 = [];
              rell_1 = [];
              hero_img = $_17("figure.pi-item.pi-image > a > img").attr("src");
              desc = $_17("div.mw-parser-output > p:nth-child(6)").text();
              $_17(".mw-parser-output > table:nth-child(9) > tbody > tr").each(function (u, i) {
                var _doto = [];
                $_17(i).find("td").each(function (o, p) {
                  _doto.push($_17(p).text().trim());
                });
                if (_doto.length === 0)
                  return;
                atributes_1.push({
                  attribute: _doto[0],
                  level_1: _doto[1],
                  level_15: _doto[2],
                  growth: _doto.pop(),
                });
              });
              $_17("div.pi-item.pi-data.pi-item-spacing.pi-border-color > div.pi-data-value.pi-font").each(function (i, u) {
                rill_1.push($_17(u).text().trim());
              });
              $_17("aside.portable-infobox.pi-background.pi-border-color.pi-theme-wikia.pi-layout-default").each(function (i, u) {
                rull_1.push($_17(u).html());
              });
              _$_1 = (0, cheerio_1.load)(rull_1[1]);
              _$_1(".pi-item.pi-data.pi-item-spacing.pi-border-color").each(function (l, m) {
                rell_1.push(_$_1(m).text().trim().replace(/\n/g, ":").replace(/\t/g, ""));
              });
              result = rell_1.reduce(function (acc, curr) {
                var _a = curr.split("::"), key = _a[0], value = _a[1];
                acc[key] = value;
                return acc;
              }, {});
              anu = {
                hero_img: hero_img,
                desc: desc,
                release: rill_1[0],
                role: rill_1[1],
                specialty: rill_1[2],
                lane: rill_1[3],
                price: rill_1[4],
                gameplay_info: {
                  durability: rill_1[5],
                  offense: rill_1[6],
                  control_effect: rill_1[7],
                  difficulty: rill_1[8],
                },
                story_info_list: result,
                story_info_array: rell_1,
                attributes: atributes_1,
              };
              return [2 /*return*/, (0, config_1.Proret)(anu)];
            }
            return [3 /*break*/, 3];
          case 2:
            err_22 = _b.sent();
            console.log(err_22);
            return [3 /*break*/, 3];
          case 3: return [2 /*return*/];
        }
      });
    });
  },
  XPanas: function (search) {
    if (search === void 0) { search = "indonesia"; }
    return __awaiter(this, void 0, void 0, function () {
      var data, $_18, ajg_2, err_23;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 2, , 3]);
            return [4 /*yield*/, axios_1.default.get("http://164.68.127.15/?id=" + search)];
          case 1:
            data = (_a.sent()).data;
            $_18 = (0, cheerio_1.load)(data);
            ajg_2 = [];
            $_18("#content > .mozaique.thumbs-5 > center > .thumb-block > .thumb-inside > .thumb > a").each(function (i, u) {
              ajg_2.push({
                nonton: "https://164.68.127.15" + $_18(u).attr("href"),
                img: $_18(u).find("img").attr("data-src"),
                title: $_18(u).find("img").attr("title"),
              });
            });
            if (ajg_2.every(function (x) { return x === undefined; }))
              return [2 /*return*/, { developer: "@xorizn", mess: "no result found" }];
            return [2 /*return*/, (0, config_1.Proret)(ajg_2)];
          case 2:
            err_23 = _a.sent();
            console.error(err_23);
            return [3 /*break*/, 3];
          case 3: return [2 /*return*/];
        }
      });
    });
  }
};
