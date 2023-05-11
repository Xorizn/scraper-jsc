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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
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
exports.downloads = void 0;
var axios_1 = require("axios");
var cheerio_1 = require("cheerio");
var jsdom_1 = require("jsdom");
var config_1 = require("../config");
var y2mate_1 = require("../lib/y2mate");
function shortener(url) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, url];
        });
    });
}
exports.downloads = {
    FaceBook: function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var config, _a, data, status_1, $_1, vid_1, thumb, desc, hasil, err_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        config = {
                            id: url,
                            locale: "id",
                        };
                        return [4 /*yield*/, (0, axios_1.default)("https://getmyfb.com/process", {
                                method: "POST",
                                data: new URLSearchParams(Object.entries(config)),
                                headers: {
                                    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
                                    cookie: "PHPSESSID=914a5et39uur28e84t9env0378; popCookie=1; prefetchAd_4301805=true",
                                },
                            })];
                    case 1:
                        _a = _b.sent(), data = _a.data, status_1 = _a.status;
                        if (status_1 === 200) {
                            $_1 = (0, cheerio_1.load)(data), vid_1 = [], thumb = $_1("div.container > div.results-item > div.results-item-image-wrapper").find("img").attr("src"), desc = $_1("div.container > div.results-item > div.results-item-text").text().trim();
                            $_1("div.container > div.results-download > ul > li").each(function (u, i) {
                                vid_1.push({
                                    quality: $_1(i).text().trim().split('(')[0],
                                    link: $_1(i).find('a').attr('href')
                                });
                            });
                            hasil = {
                                desc: desc,
                                thumb: thumb,
                                video: vid_1,
                            };
                            return [2 /*return*/, (0, config_1.Proret)(hasil)];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _b.sent();
                        console.log(err_1);
                        return [3 /*break*/, 3];
                    case 3:
                        ;
                        return [2 /*return*/];
                }
            });
        });
    },
    MusiCally: function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var user_agent, _a, data, status_2, headers, $, url_name, token_name, token_, verify, _data, respon, ch, resaudio, vdlk, hc, hasil_, err_2;
            var _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 5, , 6]);
                        user_agent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:108.0) Gecko/20100101 Firefox/108.0";
                        return [4 /*yield*/, axios_1.default.get("https://musicaldown.com/id", {
                                headers: {
                                    "user-agent": user_agent,
                                },
                            })];
                    case 1:
                        _a = _c.sent(), data = _a.data, status_2 = _a.status, headers = _a.headers;
                        if (!(status_2 === 200)) return [3 /*break*/, 4];
                        $ = (0, cheerio_1.load)(data);
                        url_name = $("#link_url").attr("name");
                        token_name = $("#submit-form > div").find("div:nth-child(1) > input[type=hidden]:nth-child(2)").attr("name");
                        token_ = $("#submit-form > div").find("div:nth-child(1) > input[type=hidden]:nth-child(2)").attr("value");
                        verify = $("#submit-form > div").find("div:nth-child(1) > input[type=hidden]:nth-child(3)").attr("value");
                        _data = (_b = {},
                            _b["".concat(url_name)] = url,
                            _b["".concat(token_name)] = token_,
                            _b.verify = verify,
                            _b);
                        return [4 /*yield*/, axios_1.default.request({
                                url: "https://musicaldown.com/id/download",
                                method: "post",
                                data: new URLSearchParams(Object.entries(_data)),
                                headers: {
                                    "user-agent": user_agent,
                                    cookie: headers["set-cookie"],
                                },
                            })];
                    case 2:
                        respon = _c.sent();
                        ch = (0, cheerio_1.load)(respon.data);
                        return [4 /*yield*/, axios_1.default.request({
                                url: "https://musicaldown.com/id/mp3",
                                method: "post",
                                headers: {
                                    "user-agent": user_agent,
                                    cookie: headers["set-cookie"],
                                },
                            })];
                    case 3:
                        resaudio = _c.sent();
                        vdlk = ch("body > div.welcome.section > div > div:nth-child(2) > div.col.s12.l8 > a:nth-child(5)").attr("href");
                        if (typeof vdlk === "undefined")
                            return [2 /*return*/, { developer: "@xorizn", mess: "Infalid link, no result found" }];
                        hc = (0, cheerio_1.load)(resaudio.data);
                        hasil_ = {
                            user: ch("body > div.welcome.section > div > div:nth-child(2) > div.col.s12.l4.center-align > div.col.s12 > h2.white-text").find("b").text(),
                            desk: ch("body > div.welcome.section > div > div:nth-child(2) > div.col.s12.l4.center-align > div.col.s12 > h2.white-text:nth-child(3)").text(),
                            profile: ch("body > div.welcome.section > div > div:nth-child(2) > div.col.s12.l4.center-align > div.col.s12 > div.img-area > img").attr("src"),
                            video: vdlk,
                            audio: hc("body > div.welcome.section > div.container > div:nth-child(2) > div.col.s12.l4 > audio > source").attr("src"),
                            video_original: ch("body > div.welcome.section > div > div:nth-child(2) > div.col.s12.l8 > a:nth-child(9)").attr("href"),
                        };
                        return [2 /*return*/, (0, config_1.Proret)(hasil_)];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        err_2 = _c.sent();
                        console.log(err_2);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    },
    PinterestVid: function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var config, _a, data, status_3, $, link, err_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        config = { url: url };
                        return [4 /*yield*/, (0, axios_1.default)("https://www.expertstool.com/download-pinterest-video/", {
                                method: "POST",
                                data: new URLSearchParams(Object.entries(config)),
                                headers: {
                                    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:108.0) Gecko/20100101 Firefox/108.0",
                                },
                            })];
                    case 1:
                        _a = _b.sent(), data = _a.data, status_3 = _a.status;
                        if (status_3 === 200) {
                            $ = (0, cheerio_1.load)(data);
                            link = $("div.col-md-8.col-md-offset-2 > video").attr("src");
                            if (typeof link === "undefined")
                                return [2 /*return*/, { creator: "@xorizn", mess: "Link Not Found" }];
                            return [2 /*return*/, (0, config_1.Proret)({ url: link })];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        err_3 = _b.sent();
                        console.log(err_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    },
    SoundCloude: function (search) {
        return __awaiter(this, void 0, void 0, function () {
            var getToken, _search, $_2, _datt_1, __$, _link_1, dom, a, token, config, _a, data, status_4, tot_1, $_3, link, img, hasil, err_4;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, axios_1.default.get("https://soundcloudmp3.org/", {
                                headers: {
                                    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:108.0) Gecko/20100101 Firefox/108.0",
                                    cookie: "XSRF-TOKEN=eyJpdiI6ImsrUTZJTVQxbWwwSGZHWkFVem16SkE9PSIsInZhbHVlIjoiMFA0RFk1ZFE0dzI4emJ0VWZFZGVSSGxwd3U2NkhzK2g5XC9xekFtNE1kajdGaVJvUHZMdUJ6SUR6XC9qQm55NUtaZGVlU0llSE5TRmtGM2xKOGRnYUJQZz09IiwibWFjIjoiY2YxNjQxOWRiNDNkODlmYzQ4M2Q0ZTdlNTUxNmQ0MDVhNTFkMGI0MTVlNzZlY2NlMDNhYTBkODg2MzE4YTk5YyJ9; laravel_session=eyJpdiI6Im8zbUk1UkRSOHpDanBXVzJpdmRNZXc9PSIsInZhbHVlIjoiWlNTRnVYZVwvb21PRjJhaU81UFRKRDRIb0dOUWRPSjAxcGV1MEhYV1NnbTA4M0FvT2lJQmQrb3JDRzh4Y3UxTkdlNFwvSlhLSnF4TmZUTHRUUVBPNGNTQT09IiwibWFjIjoiMDQwZTFlNDNkYzFlOWNhOTVlM2E3NDNlM2M5N2MyNTkyMTQ1ZTQwNGYwNGQ2ZDlhYTY0MTE4Nzc0M2UzMGEwMCJ9",
                                },
                            })];
                    case 1:
                        getToken = _b.sent();
                        return [4 /*yield*/, axios_1.default.get("https://soundcloud.com/search?q=".concat(search))];
                    case 2:
                        _search = _b.sent();
                        $_2 = (0, cheerio_1.load)(_search.data);
                        _datt_1 = [];
                        $_2("#app > noscript").each(function (u, i) {
                            _datt_1.push($_2(i).html());
                        });
                        __$ = (0, cheerio_1.load)(_datt_1[1]);
                        _link_1 = [];
                        __$("ul > li > h2 > a").each(function (i, u) {
                            if ($_2(u).attr("href").split("/").length === 3) {
                                var linkk = $_2(u).attr("href");
                                var jdi = "https://soundcloud.com".concat(linkk);
                                _link_1.push(jdi);
                            }
                        });
                        dom = new jsdom_1.JSDOM(getToken.data).window.document;
                        a = dom.querySelector("#conversionForm").innerHTML;
                        token = /<input name="_token" type="hidden" value="(.*?)">/g.exec(a)[1];
                        config = {
                            _token: token,
                            lang: "en",
                            url: _link_1[0],
                            submit: "",
                        };
                        return [4 /*yield*/, (0, axios_1.default)("https://soundcloudmp3.org/converter", {
                                method: "POST",
                                data: new URLSearchParams(Object.entries(config)),
                                headers: {
                                    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:108.0) Gecko/20100101 Firefox/108.0",
                                    cookie: "XSRF-TOKEN=eyJpdiI6ImsrUTZJTVQxbWwwSGZHWkFVem16SkE9PSIsInZhbHVlIjoiMFA0RFk1ZFE0dzI4emJ0VWZFZGVSSGxwd3U2NkhzK2g5XC9xekFtNE1kajdGaVJvUHZMdUJ6SUR6XC9qQm55NUtaZGVlU0llSE5TRmtGM2xKOGRnYUJQZz09IiwibWFjIjoiY2YxNjQxOWRiNDNkODlmYzQ4M2Q0ZTdlNTUxNmQ0MDVhNTFkMGI0MTVlNzZlY2NlMDNhYTBkODg2MzE4YTk5YyJ9; laravel_session=eyJpdiI6Im8zbUk1UkRSOHpDanBXVzJpdmRNZXc9PSIsInZhbHVlIjoiWlNTRnVYZVwvb21PRjJhaU81UFRKRDRIb0dOUWRPSjAxcGV1MEhYV1NnbTA4M0FvT2lJQmQrb3JDRzh4Y3UxTkdlNFwvSlhLSnF4TmZUTHRUUVBPNGNTQT09IiwibWFjIjoiMDQwZTFlNDNkYzFlOWNhOTVlM2E3NDNlM2M5N2MyNTkyMTQ1ZTQwNGYwNGQ2ZDlhYTY0MTE4Nzc0M2UzMGEwMCJ9",
                                },
                            })];
                    case 3:
                        _a = _b.sent(), data = _a.data, status_4 = _a.status;
                        if (status_4 === 200) {
                            tot_1 = [];
                            $_3 = (0, cheerio_1.load)(data);
                            link = $_3("#ready-group > a").attr("href");
                            if (typeof link === "undefined")
                                return [2 /*return*/, { developer: "@xorizn", mess: "no result found" }];
                            img = $_3("#preview > div.info.clearfix > img").attr("src");
                            $_3("#preview > div.info.clearfix > p").each(function (i, u) {
                                tot_1.push($_3(u).text().replace(":", ": "));
                            });
                            hasil = {
                                title: tot_1[0],
                                link: link ? link : "err",
                                img: img ? img : "https://i.ibb.co/G7CrCwN/404.png",
                                cap: "".concat(tot_1.join("\n")),
                            };
                            return [2 /*return*/, (0, config_1.Proret)(hasil)];
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        err_4 = _b.sent();
                        console.log(err_4);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    },
    TikTok: function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var config, _a, data, status_5, ar, aud, wm, nowm, rusol, _i, _b, i, link, err_5;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 9, , 10]);
                        config = { query: url };
                        return [4 /*yield*/, (0, axios_1.default)("https://lovetik.com/api/ajax/search", {
                                method: "POST",
                                data: new URLSearchParams(Object.entries(config)),
                            })];
                    case 1:
                        _a = _c.sent(), data = _a.data, status_5 = _a.status;
                        if (!data.mess) return [3 /*break*/, 2];
                        return [2 /*return*/, { developer: "@xorizn", mess: data.mess }];
                    case 2:
                        if (!(status_5 === 200)) return [3 /*break*/, 8];
                        ar = [];
                        aud = [];
                        wm = [];
                        return [4 /*yield*/, shortener((data.play_url || "").replace("https", "http"))];
                    case 3:
                        nowm = _c.sent();
                        rusol = {
                            thumb: data.cover,
                            v_id: data.vid,
                            desc: data.desc ? data.desc : "No desc",
                            nowm: nowm,
                            author: {
                                author: data.author,
                                author_name: data.author_name,
                                author_profile: data.author_a,
                            },
                            other: {}
                        };
                        _i = 0, _b = data.links;
                        _c.label = 4;
                    case 4:
                        if (!(_i < _b.length)) return [3 /*break*/, 7];
                        i = _b[_i];
                        return [4 /*yield*/, shortener((i.a || "").replace("https", "http"))];
                    case 5:
                        link = _c.sent();
                        if (i.t === "<b> MP4</b>") {
                            ar.push(link);
                            rusol.other.link = ar;
                        }
                        else if (i.s === "Watermarked") {
                            rusol.other.wm = link;
                        }
                        else if (i.t === "<b>♪ MP3 Audio</b>") {
                            aud.push({
                                link: link,
                                title: i.s,
                            });
                            rusol.other.audio = aud[0];
                        }
                        _c.label = 6;
                    case 6:
                        _i++;
                        return [3 /*break*/, 4];
                    case 7: return [2 /*return*/, (0, config_1.Proret)(rusol)];
                    case 8: return [3 /*break*/, 10];
                    case 9:
                        err_5 = _c.sent();
                        console.log(err_5);
                        return [3 /*break*/, 10];
                    case 10: return [2 /*return*/];
                }
            });
        });
    },
    Twitter: function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var config, _a, data, status_6, $_4, thumb, author, desc, hasil_1, respose, err_6;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        config = { URL: url };
                        return [4 /*yield*/, (0, axios_1.default)("https://twdown.net/download.php", {
                                method: "POST",
                                data: new URLSearchParams(Object.entries(config)),
                                headers: {
                                    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
                                    cookie: "PHPSESSID=914a5et39uur28e84t9env0378; popCookie=1; prefetchAd_4301805=true",
                                },
                            })];
                    case 1:
                        _a = _b.sent(), data = _a.data, status_6 = _a.status;
                        if (status_6 === 200) {
                            $_4 = (0, cheerio_1.load)(data);
                            thumb = $_4("img.img-thumbnail").attr("src");
                            author = $_4('div[style="overflow-wrap: break-word;"].col-md-6 > h4').text();
                            desc = $_4('div[style="overflow-wrap: break-word;"].col-md-6 > p').text();
                            hasil_1 = [];
                            $_4("div.col-md-8.col-md-offset-2 > table > tbody > tr > td").each(function (a, b) {
                                var xor = $_4(b).find("a").attr("href");
                                if (typeof xor === "undefined" || xor.startsWith("#")) {
                                }
                                else {
                                    hasil_1.push($_4(b).find("a").attr("href"));
                                }
                            });
                            respose = {
                                thumb: thumb,
                                author: author,
                                desc: desc,
                                video: hasil_1[0],
                                audio: "https://twdown.net/".concat(hasil_1.pop()),
                            };
                            if (hasil_1.every(function (x) { return x === undefined; }))
                                return [2 /*return*/, { developer: "@xorizn", mess: "no result found" }];
                            return [2 /*return*/, (0, config_1.Proret)(respose)];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        err_6 = _b.sent();
                        console.log(err_6);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    },
    Ytv: function (url, server) {
        if (server === void 0) { server = "en406"; }
        return __awaiter(this, void 0, void 0, function () {
            var hasil, err_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, (0, y2mate_1.ytv)(url, server)];
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
};
