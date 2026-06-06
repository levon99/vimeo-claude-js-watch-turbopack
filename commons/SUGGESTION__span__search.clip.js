{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.secondsToDisplay = _v2.getSearchPrecision = _v2.getSearchType = _v2.getLastUserAction = _v2.saveLatestUserAction = _v2.initGtmData = _v2.incrementSearchRequestCount = _v2.idFromUri = _v2.formatArgument = _v2.asyncDebounce = _v2.getAbortController = _v2.getTemplateUri = _v2.getVlsFolderUrl = _v2.getSearchPageUrl = _v2.searchUITestClassName = _v2.itemLink = _v2.folderLink = _v2.videoLink = _v2.apiHeaders = _v2.extendRecentSearch = _v2.getAutocompleteUrl = _v2.getSuggestionEntityType = _v2.recentSearchesActive = _v2.linkForRecentSearchRedirect = _v2.highlight = void 0;
  var _v3 = _v0.r(0),
    _v4 = _v3.__importDefault(_v0.r(0)),
    _v5 = _v3.__importDefault(_v0.r(0)),
    _v6 = _v0.r(0),
    _v7 = _v0.r(0);
  _v2.highlight = function (_v0) {
    return _v0.components.map(function (_v0, _v1) {
      return !0 === _v0.highlight ? _v4.default.createElement("b", {
        key: "SUGGESTION:" + _v1
      }, _v0.text) : _v4.default.createElement("span", {
        key: "SUGGESTION:" + _v1
      }, _v0.text);
    });
  };
  _v2.linkForRecentSearchRedirect = function (_v0) {
    var _v1,
      _v2,
      _v3,
      _v4 = _v0.source.name,
      _v5 = _v0.type.entities,
      _v6 = _v0.search_type,
      _v7 = _v0.filters,
      _v8 = _v0.query,
      _v9 = _v0.sort,
      _v10 = [];
    return _v3 = _v4 && Array.isArray(_v5) ? _v7.SourceAndEntityMap[_v4][_v5[0]].uri : _v7.SearchTypeMap[_v6].uri || _v7.SearchTypeMap["search.clip"].uri, _v8 && _v10.push("q=" + _v8), null == _v5 || _v5.forEach(function (_v0) {
      var _v1,
        _v2 = null == (_v1 = _v7.SourceAndEntityMap[_v4][_v0]) ? void 0 : _v1.queryParam;
      _v2 && _v10.push(_v2);
    }), _v4 === _v7.SearchRequestSourceNames.Public && (_v7 && _v10.push.apply(_v10, _v3.__spread(_v7)), _v9 && (_v3 += "relevance" === _v9.toLowerCase() ? "" : "/sort:" + _v9)), _v1 = _v3, (_v2 = _v10) && _v2.length && (_v1 += "?", _v1 += Object.entries(_v2.reduce(function (_v0, _v1) {
      var _v2 = _v3.__read(_v1.split("="), 2),
        _v3 = _v2[0],
        _v4 = encodeURIComponent(_v2[1]);
      return _v0[_v3] ? _v0[_v3] = _v0[_v3] + "," + _v4 : _v0[_v3] = _v4, _v0;
    }, {})).map(function (_v0) {
      var _v1 = _v3.__read(_v0, 2);
      return _v1[0] + "=" + _v1[1];
    }).join("&")), _v3 = _v1;
  }, _v2.recentSearchesActive = function (_v0, _v1) {
    return !!(null == _v0 ? void 0 : _v0.length) && 0 === _v1.length;
  }, _v2.getSuggestionEntityType = function (_v0) {
    var _v1 = _v0.in || "suggestion";
    return "recent_search" === _v0.in && (_v1 = "recent_search_suggestion." + (_v0.meta.search_type ? _v0.meta.search_type.replace("search.", "") : "clip")), _v1;
  }, _v2.getAutocompleteUrl = function (_v0) {
    var _v1 = new URLSearchParams(window.location.search),
      _v2 = "/search/autocomplete?q=" + encodeURIComponent(_v0);
    return _v1.append("vm_redirect", "0"), _v1.forEach(function (_v0, _v1) {
      var _v2 = decodeURI(_v1);
      (_v2.startsWith("ab_") || "vm_redirect" === _v2) && (_v2 = _v2 + "&" + encodeURIComponent(_v1) + "=" + encodeURIComponent(_v0));
    }), _v2;
  }, _v2.extendRecentSearch = function (_v0, _v1, _v2) {
    void 0 === _v1 && (_v1 = ""), void 0 === _v2 && (_v2 = !1);
    var _v3,
      _v4 = _v0.source.name,
      _v5 = void 0 === _v4 ? _v7.SearchRequestSourceNames.Public : _v4,
      _v6 = _v0.type.entities,
      _v7 = void 0 === _v6 ? [_v7.SearchRequestEntities.Clip] : _v6,
      _v8 = _v0.search_type,
      _v9 = _v2.linkForRecentSearchRedirect(_v0);
    if (_v5 && Array.isArray(_v7)) {
      if (1 === _v7.length) {
        var _v10 = _v7.SourceAndEntityMap[_v5][_v7[0]];
        _v3 = _v10.hasOwnProperty("getLabel") && "function" == typeof _v10.getLabel ? _v10.getLabel(_v2) : _v10.label;
      } else {
        var _v11 = _v7.SourceAndEntityMap[_v5][_v7.SearchRequestEntities.Clip];
        _v3 = _v11.hasOwnProperty("getLabel") && "function" == typeof _v11.getLabel ? _v11.getLabel(_v2) : _v11.label;
      }
    } else _v3 = _v7.SearchTypeMap[_v8].label || _v7.SearchTypeMap["search.clip"].label;
    return _v3.__assign(_v3.__assign({}, _v0), {
      type: "suggestion",
      text: _v1 || _v0.query,
      in: _v7.SuggestionTypes.RecentSearch,
      label: _v3,
      components: [],
      meta: {
        target_url: _v9,
        search_type: _v0.search_type
      }
    });
  }, _v2.apiHeaders = function (_v0) {
    return {
      Authorization: "jwt " + _v0,
      Accept: "application/vnd.vimeo.*; version=3.4.2",
      "Content-Type": "application/json"
    };
  }, _v2.videoLink = function (_v0, _v1, _v2, _v3) {
    if (void 0 === _v1 && (_v1 = !1), void 0 === _v2 && (_v2 = !1), _v2) {
      var _v4,
        _v5,
        _v6 = _v0.link;
      return (null == (_v4 = _v0.snippets) ? void 0 : _v4.ocr) ? _v6 + "?tq=#t=" + Math.floor(_v0.snippets.ocr[0].ts / 0) : _v1 && _v0.captionData ? _v6 + "?tq=" + _v3 + "#t=" + Math.floor(_v0.captionData.caption_match_ts / 0) : _v6;
    }
    var _v7 = _v0.manage_link || _v0.link;
    return (null == (_v5 = _v0.snippets) ? void 0 : _v5.ocr) ? _v7 + "/transcript?ts=" + _v0.snippets.ocr[0].ts : _v1 && _v0.captionData ? _v7 + "/transcript?ts=" + _v0.captionData.caption_match_ts : _v7;
  }, _v2.folderLink = function (_v0, _v1) {
    void 0 === _v1 && (_v1 = !1);
    var _v2 = _v0.uri.match(/\/(\d+)\/?$/);
    return _v2 && _v1 ? _v0.uri.replace("users", "user").replace("projects", "folder") : _v2 ? "/manage/folders/" + _v2[1] + "/" : "/manage/videos";
  }, _v2.itemLink = function (_v0, _v1, _v2, _v3, _v4) {
    switch (void 0 === _v1 && (_v1 = !1), void 0 === _v2 && (_v2 = !1), void 0 === _v3 && (_v3 = !1), _v0.type) {
      case _v7.Item.Video:
        return _v2.saveLatestUserAction(_v7.OMNISEARCH_ACTIONS.videoClick), _v2.videoLink(_v0, _v1, _v3, _v4);
      case _v7.Item.Folder:
        return _v2.saveLatestUserAction(_v7.OMNISEARCH_ACTIONS.folderClick), _v2.folderLink(_v0, _v2);
      case _v7.Item.Template:
        return _v2.saveLatestUserAction(_v7.OMNISEARCH_ACTIONS.templateClick), _v0.uri;
      default:
        return "";
    }
  }, _v2.searchUITestClassName = function (_v0) {
    return _v7.TEST_PREFIX + "_" + _v0;
  }, _v2.getSearchPageUrl = function (_v0, _v1, _v2) {
    var _v3;
    return (null == (_v3 = _v1[0]) ? void 0 : _v3.searchField) === _v7.WidgetName.template ? _v8(_v0) : _v2 === _v7.WidgetQualifier.in ? "" === _v0.replace(_v2 + ":", "") ? "/search/library?filter_type=folder" : _v9(_v0, _v1) : _v2 === _v7.WidgetQualifier.command ? _v0 ? "/search/library?q=" + encodeURIComponent(_v0) : "/search/library" : _v9(_v0, _v1);
  }, _v2.getVlsFolderUrl = function (_v0, _v1) {
    return "/search/library?filter_folder_include=" + _v0 + (_v1 ? "&q=" + _v1 : "");
  };
  var _v8 = function (_v0) {
      return "" + _v7.TEMPLATES_BASE_URL + (_v0 ? "?q=" + _v0 : "");
    },
    _v9 = function (_v0, _v1) {
      var _v2 = [],
        _v3 = _v1.reduce(function (_v0, _v1) {
          var _v2 = _v1.qualifier,
            _v3 = _v1.filter,
            _v4 = "filter_" + _v2;
          return _v0[_v4] ? _v0[_v4] += "," + _v3 : _v0[_v4] = _v3, _v0;
        }, {});
      if (_v0 && _v2.push("q=" + encodeURIComponent(_v0)), Object.keys(_v3).length > 0) {
        var _v4 = Object.entries(_v3).map(function (_v0) {
          var _v1 = _v3.__read(_v0, 2);
          return _v1[0] + "=" + _v1[1];
        }).join("&");
        _v2.push(_v4);
      }
      return "/search/library?" + _v2.join("&");
    };
  _v2.getTemplateUri = function (_v0) {
    var _v1 = _v0.script_direct_url || _v0.template_direct_url,
      _v2 = _v0.script_direct_url ? "-s" : "",
      _v3 = _v1.lastIndexOf("/");
    return _v1 = _v1.substring(_v3), "" + _v7.TEMPLATES_BASE_URL + _v1 + _v2;
  }, _v2.getAbortController = function () {
    return "u" > typeof AbortController ? new AbortController() : {
      signal: void 0,
      abort: function () {}
    };
  }, _v2.asyncDebounce = function (_v0, _v1, _v2) {
    var _v3 = this,
      _v4 = _v5.default(function (_v0, _v1, _v2) {
        return _v3.__awaiter(_v3, void 0, void 0, function () {
          return _v3.__generator(this, function (_v0) {
            switch (_v0.label) {
              case 0:
                return _v0.trys.push([0, 2,, 3]), [4, _v0.apply(void 0, _v3.__spread(_v2))];
              case 1:
                return _v0(_v0.sent()), [3, 3];
              case 2:
                return _v1(_v0.sent()), [3, 3];
              case 3:
                return [2];
            }
          });
        });
      }, _v1, _v2);
    return function () {
      for (var _v0 = [], _v1 = 0; _v1 < arguments.length; _v1++) _v0[_v1] = arguments[_v1];
      return new Promise(function (_v0, _v1) {
        _v4(_v0, _v1, _v0);
      });
    };
  }, _v2.formatArgument = function (_v0, _v1) {
    switch (_v0) {
      case _v7.WidgetQualifier.command:
        return _v1.substring(1).toLowerCase();
      case _v7.WidgetQualifier.type:
        return _v1.substr(_v1.indexOf(":") + 1).trim().toLowerCase();
    }
    return _v1;
  }, _v2.idFromUri = function (_v0) {
    return _v0 ? parseInt(_v0.split("/")[2], 10) : 0;
  }, _v2.incrementSearchRequestCount = function () {
    var _v0,
      _v1 = location.pathname;
    if ("/" === _v1 || "/home" === _v1) {
      var _v2 = parseInt(localStorage.getItem(_v7.OMNISEARCH_CSAT_KEY) || "0", 10);
      ++_v2 <= _v7.MAX_VISITS_TO_COUNT && (_v6.GoogleTagManager.init(null != (_v0 = window._gtm) ? _v0 : []), _v6.GoogleTagManager.addData({
        omnisearch_csat: _v2
      }), window.localStorage.setItem(_v7.OMNISEARCH_CSAT_KEY, _v2.toString()));
    }
  }, _v2.initGtmData = function () {
    var _v0,
      _v1 = location.pathname;
    if ("/" === _v1 || "/home" === _v1) {
      var _v2 = parseInt(localStorage.getItem(_v7.OMNISEARCH_CSAT_KEY) || "0", 10),
        _v3 = parseInt(localStorage.getItem("vls_csat") || "0", 10);
      _v6.GoogleTagManager.init(null != (_v0 = window._gtm) ? _v0 : []), _v6.GoogleTagManager.addData({
        omnisearch_csat: _v2,
        vls_csat: _v3
      });
    }
  }, _v2.saveLatestUserAction = function (_v0) {
    localStorage.setItem("omnisearch_action", _v0);
  }, _v2.getLastUserAction = function (_v0) {
    return (_v0 ? localStorage.getItem("vls_action") : localStorage.getItem("omnisearch_action")) || "";
  }, _v2.getSearchType = function (_v0) {
    var _v1 = _v0.loggedIn,
      _v2 = _v0.hasSearchTypesDropdown,
      _v3 = _v0.hasEnterprise,
      _v4 = void 0 !== _v3 && _v3,
      _v5 = _v0.accountType,
      _v6 = _v0.isTeamMember,
      _v7 = _v0.folderName;
    if (!_v1) return _v7.SEARCH_TYPE.Vimeo;
    if (!(void 0 !== _v2 && _v2) || location.pathname.startsWith("/search/library")) return _v7.SEARCH_TYPE.MyLibrary;
    if (((null == _v5 ? void 0 : _v5.toLowerCase()) === "free" || (null == _v5 ? void 0 : _v5.toLowerCase()) === "basic") && !_v4 && !_v6) return _v7.SEARCH_TYPE.Vimeo;
    var _v8 = location.pathname.startsWith("/search"),
      _v9 = location.pathname.startsWith("/ondemand"),
      _v10 = location.pathname.startsWith("/watch"),
      _v11 = location.pathname.startsWith("/feed") || location.pathname.startsWith("/my-feed"),
      _v12 = location.pathname.includes("staffpicks");
    if (_v8 || _v9 || _v10 || _v11 || _v12) return _v7.SEARCH_TYPE.Vimeo;
    if (_v4 || _v7) return _v7.SEARCH_TYPE.MyLibrary;
    var _v13 = localStorage.getItem("search_type") || "";
    return _v7.SEARCH_TYPE[_v13] || _v7.SEARCH_TYPE.MyLibrary;
  }, _v2.getSearchPrecision = function () {
    var _v0 = parseInt(new URLSearchParams(window.location.search).get(_v7.SEARCH_PRECISION) || "", 10);
    if (Number.isInteger(_v0)) return localStorage.setItem(_v7.SEARCH_PRECISION, _v0.toString()), _v0;
    var _v1 = parseInt(localStorage.getItem(_v7.SEARCH_PRECISION) || "", 10);
    return Number.isInteger(_v1) ? _v1 : _v7.DEFAULT_PRECISION;
  }, _v2.secondsToDisplay = function (_v0) {
    var _v1 = new Date(0 * _v0).toISOString();
    return _v0 >= 0 ? _v1.substr(11, 8) : _v1.substr(14, 5);
  };
}