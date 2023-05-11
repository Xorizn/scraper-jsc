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
exports.news = void 0;
var cheerio_1 = require("cheerio");
var axios_1 = require("axios");
var config_1 = require("../config");
var get = function (url) { return __awaiter(void 0, void 0, void 0, function () {
    var data, $, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, axios_1.default.get(url)];
            case 1:
                data = (_a.sent()).data;
                $ = (0, cheerio_1.load)(data);
                return [2 /*return*/, $];
            case 2:
                err_1 = _a.sent();
                console.error(err_1);
                return [2 /*return*/, { mess: 'error' }];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.news = {
    Gempa: function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, data, status_1, $_1, hasil_1, err_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.get('https://www.bmkg.go.id/gempabumi/gempabumi-dirasakan.bmkg')];
                    case 1:
                        _a = _b.sent(), data = _a.data, status_1 = _a.status;
                        $_1 = (0, cheerio_1.load)(data);
                        hasil_1 = [];
                        $_1('table.table-hover.table-striped > tbody > tr').each(function (i, u) {
                            var posisi = $_1(u).find('td:nth-child(3)').text().split(' ');
                            var map = $_1(u).find('td:nth-child(6) > a').attr('data-target').replace(/#/g, '');
                            var wilayah_data = $_1(u).find('td:nth-child(6) > div').html();
                            var wilayah = wilayah_data.match(/<span class="label label-warning">(.*?)<\/span>/g)
                                .map(function (wilayah_data) { return wilayah_data.replace(/<\/?span.*?>/g, '').replace(/\t/g, ' '); });
                            hasil_1.push({
                                index: $_1(u).find('td:nth-child(1)').text(),
                                waktu: $_1(u).find('td:nth-child(2)').html().replace(/<br>/g, ' '),
                                lintang: "".concat(posisi[0], " ").concat(posisi[1]),
                                bujur: "".concat(posisi[2], " ").concat(posisi[3]),
                                magnitudo: $_1(u).find('td:nth-child(4)').text(),
                                kedalaman: $_1(u).find('td:nth-child(5)').text(),
                                wilayah: $_1(u).find('td:nth-child(6) > a').text(),
                                wilayah_dirasakan: wilayah,
                                img_map: "https://ews.bmkg.go.id/TEWS/data/".concat(map, ".mmi.jpg"),
                                google_map: "https://www.google.com/maps/place/".concat(posisi[0], "%C2%B0S+").concat(posisi[2], "%C2%B0E")
                            });
                        });
                        return [2 /*return*/, (0, config_1.Proret)(hasil_1)];
                    case 2:
                        err_2 = _b.sent();
                        console.error(err_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    },
    Gempa2: function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, data, status_2, $, gempa, map, i, _gempa, _url, tanggal, letak, magnitudo, kedalaman, wilayah, lintang, bujur, hasil, err_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.get('https://www.bmkg.go.id/gempabumi/gempabumi-dirasakan.bmkg')];
                    case 1:
                        _a = _b.sent(), data = _a.data, status_2 = _a.status;
                        if (status_2 === 200) {
                            $ = (0, cheerio_1.load)(data);
                            gempa = $('table.table-hover.table-striped');
                            map = $(gempa).find('tbody > tr > td:nth-child(6) > a').attr('data-target').replace(/#/g, '');
                            for (i = 0; i < gempa.length; i++) {
                                _gempa = $(gempa[i]).find('tbody')[0];
                                if (_gempa) {
                                    _url = $(_gempa).find('tr')[0];
                                    tanggal = $(_url).find('td')[1];
                                    letak = $(_url).find('td')[2];
                                    magnitudo = $(_url).find('td')[3];
                                    kedalaman = $(_url).find('td')[4];
                                    wilayah = $(_url).find('td')[5];
                                    lintang = $(letak).text().split(' ')[0];
                                    bujur = $(letak).text().split(' ')[2];
                                    hasil = {
                                        waktu: $(tanggal).text(),
                                        lintang: lintang,
                                        bujur: bujur,
                                        magnitudo: $(magnitudo).text(),
                                        kedalaman: $(kedalaman).text().replace(/\t/g, '').replace(/I/g, ''),
                                        wilayah: $(wilayah).text().replace(/\t/g, '').replace(/I/g, '').replace('-', '').replace(/\r/g, '').split('\n')[0],
                                        img_map: "https://ews.bmkg.go.id/TEWS/data/".concat(map, ".mmi.jpg"),
                                        google_map: "https://www.google.com/maps/place/".concat(lintang, "%C2%B0S+").concat(bujur, "%C2%B0E")
                                    };
                                    return [2 /*return*/, (0, config_1.Proret)(hasil)];
                                }
                                ;
                            }
                            ;
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        err_3 = _b.sent();
                        console.error(err_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    },
    CovidWorld: function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, data, status_3, $_2, _data_1, _case_1, lastUp, hasil, err_4;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.get('https://www.worldometers.info/coronavirus/')];
                    case 1:
                        _a = _b.sent(), data = _a.data, status_3 = _a.status;
                        if (status_3 === 200) {
                            $_2 = (0, cheerio_1.load)(data);
                            _data_1 = [];
                            _case_1 = [];
                            lastUp = void 0;
                            $_2('.maincounter-number').each(function (i, e) {
                                _data_1.push($_2(e).text().trim());
                            });
                            $_2('.number-table-main').each(function (i, e) {
                                _case_1.push($_2(e).text().trim());
                            });
                            lastUp = $_2('div[style="font-size:13px; color:#999; margin-top:5px; text-align:center"]').text();
                            hasil = {
                                total_cases: _data_1[0],
                                recovered: _data_1[2],
                                deaths: _data_1[1],
                                active_cases: _case_1[0],
                                closed_cases: _case_1[1],
                                last_update: lastUp.replace('Last updated: ', '').replace(', 17:50 GMT', '').trim(),
                            };
                            return [2 /*return*/, (0, config_1.Proret)(hasil)];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        err_4 = _b.sent();
                        console.error(err_4);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    },
    CovidIndo: function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, $_3, _data_2, _info_1, lastUp, hasil, err_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.get('https://www.worldometers.info/coronavirus/country/indonesia/')];
                    case 1:
                        data = (_a.sent()).data;
                        $_3 = (0, cheerio_1.load)(data);
                        _data_2 = [];
                        _info_1 = [];
                        lastUp = $_3('div[style="font-size:13px; color:#999; text-align:center"]').text();
                        $_3('li.news_li').each(function (u, i) {
                            _info_1.push($_3(i).text().trim());
                        });
                        $_3('.maincounter-number').each(function (i, e) {
                            _data_2.push($_3(e).text().trim());
                        });
                        hasil = {
                            total_cases: _data_2[0],
                            recovered: _data_2[2],
                            deaths: _data_2[1],
                            last_update: lastUp,
                            info: _info_1[0]
                        };
                        return [2 /*return*/, (0, config_1.Proret)(hasil)];
                    case 2:
                        err_5 = _a.sent();
                        console.error(err_5);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    },
    CovidIndo2: function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, $, covid, hasil, err_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.get('https://www.antaranews.com/covid-19')];
                    case 1:
                        data = (_a.sent()).data;
                        $ = (0, cheerio_1.load)(data);
                        covid = $('div.col-md-8 > div:nth-child(2)');
                        hasil = {
                            dirawat: covid.find('div:nth-child(1) > div:nth-child(2)').text(),
                            terkonfirmasi: covid.find('div:nth-child(2) > span:nth-child(2)').text(),
                            terkonfirmasi_tambahan: covid.find('div:nth-child(2) > span:nth-child(3)').text(),
                            sembuh: covid.find('div:nth-child(3) > div:nth-child(2)').text(),
                            meniggal: covid.find('div:nth-child(4) > div:nth-child(2)').text(),
                            last_update: covid.find('div:nth-child(5)').text().trim(),
                        };
                        return [2 /*return*/, (0, config_1.Proret)(hasil)];
                    case 2:
                        err_6 = _a.sent();
                        console.error(err_6);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    },
    CovidCountry: function (country) {
        return __awaiter(this, void 0, void 0, function () {
            var data, $_4, _data_3, _info_2, lastUp, hasil, err_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.get('https://www.worldometers.info/coronavirus/country/' + country)];
                    case 1:
                        data = (_a.sent()).data;
                        $_4 = (0, cheerio_1.load)(data);
                        _data_3 = [];
                        _info_2 = [];
                        lastUp = $_4('div[style="font-size:13px; color:#999; text-align:center"]').text();
                        $_4('li.news_li').each(function (u, i) {
                            _info_2.push($_4(i).text().trim());
                        });
                        $_4('.maincounter-number').each(function (i, e) {
                            _data_3.push($_4(e).text().trim());
                        });
                        if (typeof _data_3[0] === 'undefined')
                            return [2 /*return*/, { developer: '@xorizn', mess: 'Country not found' }];
                        hasil = {
                            total_cases: _data_3[0],
                            recovered: _data_3[2],
                            deaths: _data_3[1],
                            last_update: lastUp,
                            info: _info_2[0]
                        };
                        return [2 /*return*/, (0, config_1.Proret)(hasil)];
                    case 2:
                        err_7 = _a.sent();
                        console.error(err_7);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    },
    KompasGlobal: function () {
        return __awaiter(this, void 0, void 0, function () {
            var ros_1, _data_4, err_8;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, get('https://www.kompas.com/global')];
                    case 1:
                        ros_1 = _a.sent();
                        _data_4 = [];
                        ros_1('div.row div.col-bs10-7 div.trenLatest div.trenLatest__item').each(function (i, u) {
                            var hasil = {
                                judul: ros_1(u).find('div.trenLatest__box h3.trenLatest__title').text().trim(),
                                tanggal: ros_1(u).find('div.trenLatest__box div.tren__date').text(),
                                img: ros_1(u).find('div.trenLatest__img a img').attr('src'),
                                link: ros_1(u).find('div.trenLatest__img a').attr('href')
                            };
                            _data_4.push(hasil);
                        });
                        if (_data_4.every(function (x) { return x === undefined; }))
                            return [2 /*return*/, { developer: '@xorizn', mess: 'no result found' }];
                        return [2 /*return*/, (0, config_1.Proret)(_data_4)];
                    case 2:
                        err_8 = _a.sent();
                        console.error(err_8);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    },
    KompasNews: function () {
        return __awaiter(this, void 0, void 0, function () {
            var ros_2, _data_5, err_9;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, get('https://news.kompas.com/')];
                    case 1:
                        ros_2 = _a.sent();
                        _data_5 = [];
                        ros_2('div.col-bs10-7 div.latest div.ga--latest div.row div.col-bs9-3').each(function (i, u) {
                            var hasil = {
                                judul: ros_2(u).find('div.article__grid div.article__box h3.article__title a').text().trim(),
                                deskripsi: ros_2(u).find('div.article__grid div.article__box div.article__lead').text(),
                                tanggal: ros_2(u).find('div.article__grid div.article__box div.article__date').text(),
                                artikel: ros_2(u).find('div.article__grid div.article__boxsubtitle h2').text().trim(),
                                img: ros_2(u).find('div.article__grid div.article__asset a img').attr('data-src'),
                                link: ros_2(u).find('div.article__grid div.article__asset a').attr('href')
                            };
                            _data_5.push(hasil);
                        });
                        if (_data_5.every(function (x) { return x === undefined; }))
                            return [2 /*return*/, { developer: '@xorizn', mess: 'no result found' }];
                        return [2 /*return*/, (0, config_1.Proret)(_data_5)];
                    case 2:
                        err_9 = _a.sent();
                        console.error(err_9);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    },
    KompasTerpopuler: function () {
        return __awaiter(this, void 0, void 0, function () {
            var ros_3, _data_6, err_10;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, get('https://indeks.kompas.com/terpopuler')];
                    case 1:
                        ros_3 = _a.sent();
                        _data_6 = [];
                        ros_3('div.col-bs10-7 div.latest--indeks div.article__list').each(function (i, u) {
                            var hasil = {
                                judul: ros_3(u).find('div.article__list__title h3').text(),
                                tanngal: ros_3(u).find('div.article__list__info div.article__date').text(),
                                img: ros_3(u).find('div.article__list__asset div.article__asset img').attr('src'),
                                link: ros_3(u).find('div.article__list__title h3 a').attr('href')
                            };
                            _data_6.push(hasil);
                        });
                        if (_data_6.every(function (x) { return x === undefined; }))
                            return [2 /*return*/, { developer: '@xorizn', mess: 'no result found' }];
                        return [2 /*return*/, (0, config_1.Proret)(_data_6)];
                    case 2:
                        err_10 = _a.sent();
                        console.error(err_10);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    },
    Cnbc: function (category) {
        if (category === void 0) { category = "news"; }
        return __awaiter(this, void 0, void 0, function () {
            var _ktgr, list, link, ros_4, _data_7, err_11;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        _ktgr = category.toLowerCase();
                        list = ['news', 'market', 'investment', 'entrepreneur', 'syariah', 'tech', 'lifestyle'];
                        if (!list.includes(category))
                            return [2 /*return*/, { developer: '@xorizn', mess: "categories ".concat(category, " not found, available categories: ").concat(list.join(', ')) }];
                        link = void 0;
                        if (/news/.test(_ktgr))
                            link = 'news';
                        if (/market/.test(_ktgr))
                            link = 'market';
                        if (/investment/.test(_ktgr))
                            link = 'investment';
                        if (/entrepreneur/.test(_ktgr))
                            link = 'entrepreneur';
                        if (/syariah/.test(_ktgr))
                            link = 'syariah';
                        if (/tech/.test(_ktgr))
                            link = 'tech';
                        if (/lifestyle/.test(_ktgr))
                            link = 'lifestyle';
                        return [4 /*yield*/, get('https://www.cnbcindonesia.com/' + link)];
                    case 1:
                        ros_4 = _a.sent();
                        _data_7 = [];
                        ros_4('article').each(function (i, u) {
                            var link = ros_4(u).find('a').attr('href');
                            var title = ros_4(u).find('a').attr('dtr-ttl');
                            var time = ros_4(u).find('a > .box_text > .date').text();
                            var img = ros_4(u).find('a > .box_img > .lqd > img').attr('src');
                            if (typeof link === 'undefined')
                                return;
                            var hasil = {
                                waktu: time,
                                title: title,
                                img: img,
                                link: link
                            };
                            _data_7.push(hasil);
                        });
                        if (_data_7.every(function (x) { return x === undefined; }))
                            return [2 /*return*/, { developer: '@xorizn', mess: 'no result found' }];
                        return [2 /*return*/, (0, config_1.Proret)(_data_7)];
                    case 2:
                        err_11 = _a.sent();
                        console.error(err_11);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    },
    RumahKeadilan: function () {
        return __awaiter(this, void 0, void 0, function () {
            var ros_5, _data_8, err_12;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, get('https://rumahkeadilan.co.id/')];
                    case 1:
                        ros_5 = _a.sent();
                        _data_8 = [];
                        ros_5('div.site div.content-area article').each(function (i, u) {
                            var hasil = {
                                judul: ros_5(u).find('div.inside-article header h2').text(),
                                penulis: ros_5(u).find('div.inside-article header span').first().text().replace('by', ''),
                                deskripsi: ros_5(u).find('div.inside-article div.entry-summary p').text().replace('Baca Selengkapnya', ''),
                                tautan: ros_5(u).find('div.inside-article div.post-image a').attr('href'),
                                thumbnail: ros_5(u).find('div.inside-article div.post-image a img').attr('data-lazy-src')
                            };
                            _data_8.push(hasil);
                        });
                        if (_data_8.every(function (x) { return x === undefined; }))
                            return [2 /*return*/, { developer: '@xorizn', mess: 'no result found' }];
                        return [2 /*return*/, (0, config_1.Proret)(_data_8)];
                    case 2:
                        err_12 = _a.sent();
                        console.error(err_12);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    },
    TixID: function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, $_5, hasil_2, err_13;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.get("https://www.tix.id/tix-now/")];
                    case 1:
                        data = (_a.sent()).data;
                        $_5 = (0, cheerio_1.load)(data);
                        hasil_2 = [];
                        $_5("div.gt-blog-list > .gt-item").each(function (i, u) {
                            hasil_2.push({
                                link: $_5(u).find(".gt-image > a").attr("href"),
                                image: $_5(u).find(".gt-image > a > img").attr("data-src"),
                                judul: $_5(u).find(".gt-title > a").text(),
                                tanggal: $_5(u).find(".gt-details > ul > .gt-date > span").text(),
                                deskripsi: $_5(u).find(".gt-excerpt > p").text(),
                            });
                        });
                        return [2 /*return*/, (0, config_1.Proret)(hasil_2)];
                    case 2:
                        err_13 = _a.sent();
                        console.log(err_13);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    },
};
