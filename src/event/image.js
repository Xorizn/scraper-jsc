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
exports.images = void 0;
var axios_1 = require("axios");
var cheerio_1 = require("cheerio");
var config_1 = require("../config");
exports.images = {
    Pinterest: function (search) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, data, status_1, $_1, result_1, hasil_1, err_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.get("https://id.pinterest.com/search/pins/?autologin=true&q=" + search, {
                                headers: {
                                    cookie: '_auth=1; _b="AVna7S1p7l1C5I9u0+nR3YzijpvXOPc6d09SyCzO+DcwpersQH36SmGiYfymBKhZcGg="; _pinterest_sess=TWc9PSZHamJOZ0JobUFiSEpSN3Z4a2NsMk9wZ3gxL1NSc2k2NkFLaUw5bVY5cXR5alZHR0gxY2h2MVZDZlNQalNpUUJFRVR5L3NlYy9JZkthekp3bHo5bXFuaFZzVHJFMnkrR3lTbm56U3YvQXBBTW96VUgzVUhuK1Z4VURGKzczUi9hNHdDeTJ5Y2pBTmxhc2owZ2hkSGlDemtUSnYvVXh5dDNkaDN3TjZCTk8ycTdHRHVsOFg2b2NQWCtpOWxqeDNjNkk3cS85MkhhSklSb0hwTnZvZVFyZmJEUllwbG9UVnpCYVNTRzZxOXNJcmduOVc4aURtM3NtRFo3STlmWjJvSjlWTU5ITzg0VUg1NGhOTEZzME9SNFNhVWJRWjRJK3pGMFA4Q3UvcHBnWHdaYXZpa2FUNkx6Z3RNQjEzTFJEOHZoaHRvazc1c1UrYlRuUmdKcDg3ZEY4cjNtZlBLRTRBZjNYK0lPTXZJTzQ5dU8ybDdVS015bWJKT0tjTWYyRlBzclpiamdsNmtpeUZnRjlwVGJXUmdOMXdTUkFHRWloVjBMR0JlTE5YcmhxVHdoNzFHbDZ0YmFHZ1VLQXU1QnpkM1FqUTNMTnhYb3VKeDVGbnhNSkdkNXFSMXQybjRGL3pyZXRLR0ZTc0xHZ0JvbTJCNnAzQzE0cW1WTndIK0trY05HV1gxS09NRktadnFCSDR2YzBoWmRiUGZiWXFQNjcwWmZhaDZQRm1UbzNxc21pV1p5WDlabm1UWGQzanc1SGlrZXB1bDVDWXQvUis3elN2SVFDbm1DSVE5Z0d4YW1sa2hsSkZJb1h0MTFpck5BdDR0d0lZOW1Pa2RDVzNySWpXWmUwOUFhQmFSVUpaOFQ3WlhOQldNMkExeDIvMjZHeXdnNjdMYWdiQUhUSEFBUlhUVTdBMThRRmh1ekJMYWZ2YTJkNlg0cmFCdnU2WEpwcXlPOVZYcGNhNkZDd051S3lGZmo0eHV0ZE42NW8xRm5aRWpoQnNKNnNlSGFad1MzOHNkdWtER0xQTFN5Z3lmRERsZnZWWE5CZEJneVRlMDd2VmNPMjloK0g5eCswZUVJTS9CRkFweHc5RUh6K1JocGN6clc1JmZtL3JhRE1sc0NMTFlpMVErRGtPcllvTGdldz0=; _ir=0',
                                },
                            })];
                    case 1:
                        _a = _b.sent(), data = _a.data, status_1 = _a.status;
                        if (status_1 === 200) {
                            $_1 = (0, cheerio_1.load)(data);
                            result_1 = [];
                            hasil_1 = [];
                            $_1("div > a").get().map(function (b) {
                                var link = $_1(b).find("img").attr("src");
                                result_1.push(link);
                            });
                            result_1.forEach(function (v) {
                                if (v == undefined)
                                    return;
                                hasil_1.push(v.replace(/236/g, "736"));
                            });
                            hasil_1.shift();
                            if (hasil_1.every(function (x) { return x === undefined; }))
                                return [2 /*return*/, { developer: '@xorizn', mess: 'no result found' }];
                            return [2 /*return*/, (0, config_1.Proret)(hasil_1)];
                        }
                        else {
                            return [2 /*return*/, { developer: '@xorizn', mess: 'no result found' }];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _b.sent();
                        console.error(err_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    },
    Wallpaper: function (query, pages) {
        if (pages === void 0) { pages = '1'; }
        return __awaiter(this, void 0, void 0, function () {
            var _a, data, status_2, $_2, hasil_2, err_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.get("https://www.besthdwallpaper.com/search?CurrentPage=".concat(pages, "&q=").concat(query))];
                    case 1:
                        _a = _b.sent(), data = _a.data, status_2 = _a.status;
                        if (status_2 === 200) {
                            $_2 = (0, cheerio_1.load)(data);
                            hasil_2 = [];
                            $_2('div.grid-item').each(function (a, b) {
                                hasil_2.push({
                                    title: $_2(b).find('div.info > p').text(),
                                    type: $_2(b).find('div.info > a:nth-child(2)').text(),
                                    source: 'https://www.besthdwallpaper.com' + $_2(b).find('a').attr('href'),
                                    image: [$_2(b).find('picture > img').attr('data-src') || $_2(b).find('picture > img').attr('src'), $_2(b).find('picture > source:nth-child(1)').attr('srcset'), $_2(b).find('picture > source:nth-child(2)').attr('srcset')]
                                });
                            });
                            if (hasil_2.every(function (x) { return x === undefined; }))
                                return [2 /*return*/, { developer: '@xorizn', mess: 'no result found' }];
                            return [2 /*return*/, (0, config_1.Proret)(hasil_2)];
                        }
                        else {
                            return [2 /*return*/, { developer: '@xorizn', mess: 'no result found' }];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        err_2 = _b.sent();
                        console.error(err_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    },
    WallpaperFlare: function (query) {
        return __awaiter(this, void 0, void 0, function () {
            var data, $_3, result_2, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.get('https://www.wallpaperflare.com/search?wallpaper=' + query, {
                                headers: {
                                    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                                    "cookie": "_ga=GA1.2.863074474.1624987429; _gid=GA1.2.857771494.1624987429; __gads=ID=84d12a6ae82d0a63-2242b0820eca0058:T=1624987427:RT=1624987427:S=ALNI_MaJYaH0-_xRbokdDkQ0B49vSYgYcQ"
                                }
                            })];
                    case 1:
                        data = (_a.sent()).data;
                        $_3 = (0, cheerio_1.load)(data);
                        result_2 = [];
                        $_3('#gallery > li > figure > a').each(function (a, b) {
                            result_2.push($_3(b).find('img').attr('data-src'));
                        });
                        return [2 /*return*/, (0, config_1.Proret)(result_2)];
                    case 2:
                        err_3 = _a.sent();
                        console.log(err_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
};
