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
exports.anime = void 0;
var axios_1 = require("axios");
var cheerio_1 = require("cheerio");
var config_1 = require("../config");
exports.anime = {
    MalSearchCharacter: function (character) {
        return __awaiter(this, void 0, void 0, function () {
            var results_1, data, $, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        results_1 = [];
                        return [4 /*yield*/, axios_1.default.get('https://myanimelist.net/character.php?q=' + character)];
                    case 1:
                        data = (_a.sent()).data;
                        $ = (0, cheerio_1.load)(data);
                        $('table').each(function (i, u) {
                            for (var i_1 = 0; i_1 < 10; i_1++) {
                                var b = $(u).find('tr > td.borderClass:nth-child(2)')[i_1];
                                var c = $(u).find('tr > td.borderClass:nth-child(1)')[i_1];
                                var d = $(u).find('tr > td.borderClass:nth-child(3)')[i_1];
                                var name_1 = $(b).find('a').text().trim();
                                var alias_name = $(b).find('small').text().trim();
                                var url = $(b).find('a').attr('href');
                                var thumbnail = $(c).find('a > img').attr('data-src');
                                var anime_1 = $(d).find('small > a:nth-child(1)').text().trim();
                                var manga = $(d).find('small > a:nth-child(2)').text().trim();
                                if (typeof url === 'undefined')
                                    return;
                                results_1.push({
                                    name: name_1 ? name_1 : 'No Name',
                                    alias_name: alias_name ? alias_name : 'No Alias',
                                    url: url ? url : 'No Url',
                                    thumbnail: thumbnail ? thumbnail : 'https://i.ibb.co/G7CrCwN/404.png',
                                    anime: anime_1 ? anime_1 : 'No In Anime',
                                    manga: manga ? manga : 'No In Manga'
                                });
                            }
                        });
                        if (results_1.every(function (x) { return x === undefined; }))
                            return [2 /*return*/, { developer: "@xorizn", mess: 'No result found' }];
                        return [2 /*return*/, (0, config_1.Proret)(results_1)];
                    case 2:
                        err_1 = _a.sent();
                        console.error(err_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    },
    MalSearchManga: function (manga) {
        return __awaiter(this, void 0, void 0, function () {
            var data, results_2, $, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.get('https://myanimelist.net/manga.php?q=' + manga + '&cat=manga')];
                    case 1:
                        data = (_a.sent()).data;
                        results_2 = [];
                        $ = (0, cheerio_1.load)(data);
                        $('div.js-categories-seasonal > table').each(function (i, u) {
                            for (var i_2 = 1; i_2 < 10; i_2++) {
                                var b = $(u).find('td.borderClass:nth-child(2)')[i_2];
                                var c = $(u).find('td.borderClass:nth-child(3)')[i_2];
                                var d = $(u).find('td.borderClass:nth-child(4)')[i_2];
                                var e = $(u).find('td.borderClass:nth-child(5)')[i_2];
                                var f = $(u).find('td.borderClass:nth-child(1)')[i_2];
                                var link = $(b).find('a:nth-child(2)').attr('href');
                                if (typeof link === 'undefined')
                                    return;
                                results_2.push({
                                    title: $(b).find('a.hoverinfo_trigger > strong').text(),
                                    type: $(c).text().trim(),
                                    vol: $(d).text().trim(),
                                    score: $(e).text().trim(),
                                    link: link,
                                    thumbnail: $(f).find('a.hoverinfo_trigger > img').attr('data-src')
                                });
                            }
                        });
                        if (results_2.every(function (x) { return x === undefined; }))
                            return [2 /*return*/, { developer: "@xorizn", mess: 'No result found' }];
                        return [2 /*return*/, (0, config_1.Proret)(results_2)];
                    case 2:
                        err_2 = _a.sent();
                        console.error(err_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    },
    MalSearchAnime: function (anime) {
        return __awaiter(this, void 0, void 0, function () {
            var data, results_3, $, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.get('https://myanimelist.net/anime.php?q=' + anime + '&catanime')];
                    case 1:
                        data = (_a.sent()).data;
                        results_3 = [];
                        $ = (0, cheerio_1.load)(data);
                        $('div.js-categories-seasonal > table').each(function (u, l) {
                            for (var i = 1; i < 10; i++) {
                                var b = $(l).find('td.borderClass > div.title')[i];
                                var c = $(l).find('td.borderClass > div.picSurround > a.hoverinfo_trigger')[i];
                                var d = $(l).find('td.ac:nth-child(3)')[i];
                                var e = $(l).find('td.ac:nth-child(4)')[i];
                                var f = $(l).find('td.ac:nth-child(5)')[i];
                                var url = $(b).find('a.hoverinfo_trigger').attr('href');
                                if (typeof url === 'undefined')
                                    return;
                                results_3.push({
                                    title: $(b).find('a.hoverinfo_trigger').text(),
                                    thumbnail: $(c).find('img').attr('data-src'),
                                    url: url,
                                    type: $(d).text().trim().replace('\n', ''),
                                    episode: $(e).text().trim().replace('\n', ''),
                                    score: $(f).text().trim().replace('\n', ''),
                                });
                            }
                        });
                        if (results_3.every(function (x) { return x === undefined; }))
                            return [2 /*return*/, { developer: "@xorizn", mess: 'No result found' }];
                        return [2 /*return*/, (0, config_1.Proret)(results_3)];
                    case 2:
                        err_3 = _a.sent();
                        console.error(err_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    },
    MalTop: function (type) {
        if (type === void 0) { type = "airing"; }
        return __awaiter(this, void 0, void 0, function () {
            var tipes, data, results_4, $, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        tipes = ['airing', 'upcoming', 'tv', 'movie', 'ova', 'ona', 'special', 'bypopularity', 'favorite'];
                        if (!tipes.includes(type))
                            return [2 /*return*/, { developer: '@xorizn', mess: type + ' myanimelist not found' }];
                        return [4 /*yield*/, axios_1.default.get('https://myanimelist.net/topanime.php?type=' + type)];
                    case 1:
                        data = (_a.sent()).data;
                        results_4 = [];
                        $ = (0, cheerio_1.load)(data);
                        $('div.pb12 > table.top-ranking-table').each(function (i, u) {
                            for (var i_3 = 0; i_3 < 10; i_3++) {
                                var b = $(u).find('tr.ranking-list > td.ac');
                                var c = $(u).find('tr.ranking-list > td.title')[i_3];
                                var d = $(u).find('tr.ranking-list > td.score')[i_3];
                                results_4.push({
                                    rank: (i_3 + 1).toString(),
                                    thumbnail: $(c).find('a.hoverinfo_trigger > img').attr('data-src'),
                                    title: $(c).find('div.detail > div.clearfix > h3 > a').text().trim(),
                                    score: $(d).find('span').text().trim(),
                                    link: $(c).find('a.hoverinfo_trigger').attr('href')
                                });
                            }
                        });
                        if (results_4.every(function (x) { return x === undefined; }))
                            return [2 /*return*/, { developer: "@xorizn", mess: 'No result found' }];
                        return [2 /*return*/, (0, config_1.Proret)(results_4)];
                    case 2:
                        err_4 = _a.sent();
                        console.error(err_4);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    },
};
