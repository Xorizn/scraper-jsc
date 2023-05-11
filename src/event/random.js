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
exports.random = void 0;
var axios_1 = require("axios");
var cheerio_1 = require("cheerio");
var config_1 = require("../config");
exports.random = {
    QuotesAnime: function () {
        return __awaiter(this, void 0, void 0, function () {
            var page, data, $_1, hasil_1, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        page = Math.floor(Math.random() * 184);
                        return [4 /*yield*/, axios_1.default.get('https://otakotaku.com/quote/feed/' + page)];
                    case 1:
                        data = (_a.sent()).data;
                        $_1 = (0, cheerio_1.load)(data);
                        hasil_1 = [];
                        $_1('div.kotodama-list').each(function (l, h) {
                            hasil_1.push({
                                link: $_1(h).find('a').attr('href'),
                                gambar: $_1(h).find('img').attr('data-src'),
                                karakter: $_1(h).find('div.char-name').text().trim(),
                                anime: $_1(h).find('div.anime-title').text().trim(),
                                episode: $_1(h).find('div.meta').text(),
                                up_at: $_1(h).find('small.meta').text(),
                                quotes: $_1(h).find('div.quote').text().trim()
                            });
                        });
                        if (hasil_1.every(function (x) { return x === undefined; }))
                            return [2 /*return*/, { developer: '@xorizn', mess: 'no result found' }];
                        return [2 /*return*/, (0, config_1.Proret)(hasil_1)];
                    case 2:
                        err_1 = _a.sent();
                        console.error(err_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    },
    Hentai: function () {
        return __awaiter(this, void 0, void 0, function () {
            var page, data, $_2, hasil_2, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        page = Math.floor(Math.random() * 1153);
                        return [4 /*yield*/, axios_1.default.get('https://sfmcompile.club/page/' + page)];
                    case 1:
                        data = (_a.sent()).data;
                        $_2 = (0, cheerio_1.load)(data);
                        hasil_2 = [];
                        $_2('#primary > div > div > ul > li > article').each(function (a, b) {
                            hasil_2.push({
                                title: $_2(b).find('header > h2').text(),
                                link: $_2(b).find('header > h2 > a').attr('href'),
                                category: $_2(b).find('header > div.entry-before-title > span > span').text().replace('in ', ''),
                                share_count: $_2(b).find('header > div.entry-after-title > p > span.entry-shares').text(),
                                views_count: $_2(b).find('header > div.entry-after-title > p > span.entry-views').text(),
                                type: $_2(b).find('source').attr('type') || 'image/jpeg',
                                video_1: $_2(b).find('source').attr('src') || $_2(b).find('img').attr('data-src'),
                                video_2: $_2(b).find('video > a').attr('href') || ''
                            });
                        });
                        if (hasil_2.every(function (x) { return x === undefined; }))
                            return [2 /*return*/, { developer: '@xorizn', mess: 'no result found' }];
                        return [2 /*return*/, (0, config_1.Proret)(hasil_2)];
                    case 2:
                        err_2 = _a.sent();
                        console.error(err_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    },
    Waifu: function (type) {
        if (type === void 0) { type = 'sfw'; }
        return __awaiter(this, void 0, void 0, function () {
            var listtp, params, data, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        listtp = ['nsfw', 'sfw'];
                        if (!listtp.includes(type))
                            return [2 /*return*/, {
                                    developer: '@xorizn', mess: "type ".concat(type, " not found, available types: ").concat(listtp.join(', '))
                                }];
                        params = new URLSearchParams();
                        params.append('exclude', '');
                        return [4 /*yield*/, (0, axios_1.default)("https://api.waifu.pics/many/".concat(type, "/waifu"), {
                                method: 'post',
                                data: params
                            })];
                    case 1:
                        data = (_a.sent()).data;
                        return [2 /*return*/, (0, config_1.Proret)(data.files)];
                    case 2:
                        err_3 = _a.sent();
                        console.error(err_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    },
    Nsfw: function (category) {
        if (category === void 0) { category = 'waifu'; }
        return __awaiter(this, void 0, void 0, function () {
            var ctgr, data, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        ctgr = ['waifu', 'neko', 'trap', 'blowjob'];
                        if (!ctgr.includes(category))
                            return [2 /*return*/, {
                                    developer: "@xorizn", mess: "type ".concat(category, " not found, available types: ").concat(ctgr.join(', '))
                                }];
                        return [4 /*yield*/, axios_1.default.get("https://api.waifu.pics/nsfw/" + category)];
                    case 1:
                        data = (_a.sent()).data;
                        return [2 /*return*/, (0, config_1.Proret)(data)];
                    case 2:
                        err_4 = _a.sent();
                        console.error(err_4);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    },
    Sfw: function (category) {
        if (category === void 0) { category = 'waifu'; }
        return __awaiter(this, void 0, void 0, function () {
            var ctgr, data, err_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        ctgr = ['waifu', 'neko', 'shinobu', 'megumin', 'bully', 'cuddle', 'cry', 'hug', 'awoo', 'kiss', 'lick', 'pat', 'smug', 'bonk', 'yeet', 'blush', 'smile', 'wave', 'highfive', 'handhold', 'nom', 'bite', 'glomp', 'slap', 'kill', 'kick', 'happy', 'wink', 'poke', 'dance', 'cringe'];
                        if (!ctgr.includes(category))
                            return [2 /*return*/, {
                                    developer: "@xorizn", mess: "type ".concat(category, " not found, available types: ").concat(ctgr.join(', '))
                                }];
                        return [4 /*yield*/, axios_1.default.get("https://api.waifu.pics/sfw/" + category)];
                    case 1:
                        data = (_a.sent()).data;
                        return [2 /*return*/, (0, config_1.Proret)(data)];
                    case 2:
                        err_5 = _a.sent();
                        console.error(err_5);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    },
};
