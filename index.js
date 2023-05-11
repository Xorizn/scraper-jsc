"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stalk =
  exports.search =
  exports.random =
  exports.news =
  exports.islam =
  exports.images =
  exports.downloads =
  exports.anime =
    void 0;
var anime_1 = require("./src/event/anime");
Object.defineProperty(exports, "anime", {
  enumerable: true,
  get: function () {
    return anime_1.anime;
  },
});
var downloads_1 = require("./src/event/downloads");
Object.defineProperty(exports, "downloads", {
  enumerable: true,
  get: function () {
    return downloads_1.downloads;
  },
});
var image_1 = require("./src/event/image");
Object.defineProperty(exports, "images", {
  enumerable: true,
  get: function () {
    return image_1.images;
  },
});
var islam_1 = require("./src/event/islam");
Object.defineProperty(exports, "islam", {
  enumerable: true,
  get: function () {
    return islam_1.islam;
  },
});
var news_1 = require("./src/event/news");
Object.defineProperty(exports, "news", {
  enumerable: true,
  get: function () {
    return news_1.news;
  },
});
var random_1 = require("./src/event/random");
Object.defineProperty(exports, "random", {
  enumerable: true,
  get: function () {
    return random_1.random;
  },
});
var search_1 = require("./src/event/search");
Object.defineProperty(exports, "search", {
  enumerable: true,
  get: function () {
    return search_1.search;
  },
});
var stalk_1 = require("./src/event/stalk");
Object.defineProperty(exports, "stalk", {
  enumerable: true,
  get: function () {
    return stalk_1.stalk;
  },
});
