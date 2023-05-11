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
exports.stalk = void 0;
var axios_1 = require("axios");
var config_1 = require("../config");
var anya = { headers: { accept: '*/*', 'cookie': '_ga=GA1.2.1207987969.1680840450; __gads=ID=b26fd0857b3cff25-22ccef1502df0050:T=1680840450:RT=1680840450:S=ALNI_MaDqL-T5KCdhDZoTOiXpOvdcwJBdA; _gid=GA1.2.866837131.1681305528; __gpi=UID=00000bedb580261c:T=1680840450:RT=1681378876:S=ALNI_MacS9h_essTbZighLSVsRkvI1pm8A; ab_tests=%7B%7D; _gat=1', 'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/111.0' } };
function StoryIG(user) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, data, status_1, arr, _i, data_1, i, err_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios_1.default.get('https://storiesig.me/api/profile/stories?username=' + user, anya)];
                case 1:
                    _a = _b.sent(), data = _a.data, status_1 = _a.status;
                    arr = [];
                    for (_i = 0, data_1 = data; _i < data_1.length; _i++) {
                        i = data_1[_i];
                        if (i.id) {
                            if (i.type === 'video') {
                                arr.push({ url: i.url, type: i.type });
                            }
                            else {
                                arr.push({
                                    url: i.url,
                                    url_original: i.originalUrl,
                                    type: i.type
                                });
                            }
                            ;
                        }
                        ;
                    }
                    ;
                    return [2 /*return*/, arr];
                case 2:
                    err_1 = _b.sent();
                    return [2 /*return*/, { mess: err_1.toString() }];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.stalk = {
    instagram: function (type, user) {
        return __awaiter(this, void 0, void 0, function () {
            var tipes, data, data, data, data, data, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 11, , 12]);
                        tipes = ['profile', 'story', 'post', 'highlights', 'cash'];
                        if (!tipes.includes(type))
                            return [2 /*return*/, { developer: '@xorizn', mess: type + ' instagram not found' }];
                        if (!(type === 'profile')) return [3 /*break*/, 2];
                        return [4 /*yield*/, axios_1.default.get('https://storiesig.me/api/profile/info?username=' + user, anya)];
                    case 1:
                        data = (_a.sent()).data;
                        return [3 /*break*/, 10];
                    case 2:
                        if (!(type === 'story')) return [3 /*break*/, 4];
                        return [4 /*yield*/, StoryIG(user)];
                    case 3:
                        data = _a.sent();
                        if (data.mess)
                            return [2 /*return*/, { developer: 'xorizn', mess: data.mess }];
                        return [3 /*break*/, 10];
                    case 4:
                        if (!(type === 'post')) return [3 /*break*/, 6];
                        return [4 /*yield*/, axios_1.default.get('https://storiesig.me/api/profile/publications?username=' + user, anya)];
                    case 5:
                        data = (_a.sent()).data;
                        return [3 /*break*/, 10];
                    case 6:
                        if (!(type === 'highlights')) return [3 /*break*/, 8];
                        return [4 /*yield*/, axios_1.default.get('https://storiesig.me/api/profile/highlights?username=' + user, anya)];
                    case 7:
                        data = (_a.sent()).data;
                        return [3 /*break*/, 10];
                    case 8:
                        if (!(type === 'cash')) return [3 /*break*/, 10];
                        return [4 /*yield*/, axios_1.default.get('https://storiesig.me/api/profile/cash?username=' + user, anya)];
                    case 9:
                        data = (_a.sent()).data;
                        _a.label = 10;
                    case 10: return [2 /*return*/, (0, config_1.Proret)(data)];
                    case 11:
                        err_2 = _a.sent();
                        return [2 /*return*/, { developer: 'xorizn', mess: err_2.toString() }];
                    case 12: return [2 /*return*/];
                }
            });
        });
    },
    Github: function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, data, status_2, login, id, node_id, avatar_url, gravatar_id, url, html_url, followers_url, following_url, gists_url, starred_url, subscriptions_url, organizations_url, repos_url, events_url, received_events_url, type, site_admin, name_1, company, blog, location_1, email, hireable, bio, twitter_username, public_repos, public_gists, followers, following, created_at, updated_at, hasil, err_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.get("https://api.github.com/users/".concat(user))];
                    case 1:
                        _a = _b.sent(), data = _a.data, status_2 = _a.status;
                        if (data.message)
                            return [2 /*return*/, { developer: '@xorizn', mess: data.message }];
                        login = data.login, id = data.id, node_id = data.node_id, avatar_url = data.avatar_url, gravatar_id = data.gravatar_id, url = data.url, html_url = data.html_url, followers_url = data.followers_url, following_url = data.following_url, gists_url = data.gists_url, starred_url = data.starred_url, subscriptions_url = data.subscriptions_url, organizations_url = data.organizations_url, repos_url = data.repos_url, events_url = data.events_url, received_events_url = data.received_events_url, type = data.type, site_admin = data.site_admin, name_1 = data.name, company = data.company, blog = data.blog, location_1 = data.location, email = data.email, hireable = data.hireable, bio = data.bio, twitter_username = data.twitter_username, public_repos = data.public_repos, public_gists = data.public_gists, followers = data.followers, following = data.following, created_at = data.created_at, updated_at = data.updated_at;
                        hasil = {
                            user: {
                                login: login,
                                id: id,
                                node_id: node_id,
                                avatar_url: avatar_url,
                                gravatar_id: gravatar_id,
                                url: url,
                                html_url: html_url,
                                followers_url: followers_url,
                                following_url: following_url,
                                gists_url: gists_url,
                                starred_url: starred_url,
                                subscriptions_url: subscriptions_url,
                                organizations_url: organizations_url,
                                repos_url: repos_url,
                                events_url: events_url,
                                received_events_url: received_events_url,
                                type: type,
                                site_admin: site_admin,
                                name: name_1,
                                company: company,
                                blog: blog,
                                location: location_1,
                                email: email,
                                hireable: hireable,
                                bio: bio,
                                twitter_username: twitter_username,
                                public_repos: public_repos,
                                public_gists: public_gists,
                                followers: followers,
                                following: following,
                                created_at: created_at,
                                updated_at: updated_at
                            }
                        };
                        return [2 /*return*/, (0, config_1.Proret)(hasil)];
                    case 2:
                        err_3 = _b.sent();
                        return [2 /*return*/, { developer: 'xorizn', mess: err_3.toString() }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    },
    GithubRepo: function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, data, status_3, repos, hasil, err_4;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, axios_1.default.get("https://api.github.com/users/".concat(user))];
                    case 1:
                        _a = _b.sent(), data = _a.data, status_3 = _a.status;
                        if (data.message)
                            return [2 /*return*/, { developer: '@xorizn', mess: data.message }];
                        return [4 /*yield*/, axios_1.default.get(data.repos_url)];
                    case 2:
                        repos = _b.sent();
                        hasil = {};
                        if (!repos.data) {
                            hasil.repos = [];
                        }
                        hasil.repos = repos.data;
                        return [2 /*return*/, (0, config_1.Proret)(hasil)];
                    case 3:
                        err_4 = _b.sent();
                        return [2 /*return*/, { developer: 'xorizn', mess: err_4.toString() }];
                    case 4: return [2 /*return*/];
                }
            });
        });
    }
};
