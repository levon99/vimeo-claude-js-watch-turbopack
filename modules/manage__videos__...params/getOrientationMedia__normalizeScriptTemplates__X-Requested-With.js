{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = _v0 => _v0.filter(_v0 => _v0.itemType != _v3.GUIDED_TEMPLATE_ITEM_TYPE || _v0.itemType === _v3.GUIDED_TEMPLATE_ITEM_TYPE && (1 == _v0.media.length || 3 == _v0.media.length)).map(_v0 => {
    if (_v0.itemType !== _v3.GUIDED_TEMPLATE_ITEM_TYPE) return _v0;
    {
      let _v0 = {
          ornt: _v0.defaultOrientation,
          templateName: _v0.title,
          templateDirectUrl: `${_v0.scriptDirectUrl}-s`
        },
        _v1 = _v0.media.filter(_v0 => _v0.defaultOrientation === _v0.orientation);
      0 === _v1.length && 1 === _v0.media.length && (_v0.ornt = (_v1 = _v0.media)[0].orientation);
      let {
        thumbnail: _v2,
        videoUrl: _v3
      } = _v1[0];
      return {
        ..._v0,
        ..._v0,
        thumbnail: _v2,
        vimeoVideoUrl: _v3,
        vimeoVideoId: Number(_v3.slice(_v3.lastIndexOf("/") + 1))
      };
    }
  });
  _v0.s(["getOrientationMedia", 0, (_v0, _v1, _v2) => {
    if (_v0.itemType !== _v3.GUIDED_TEMPLATE_ITEM_TYPE) return {
      clipVideoId: "",
      clipConfigUrl: "",
      thumbnail: ""
    };
    let _v3 = _v0.media.filter(_v0 => _v1 === _v0.orientation)[0],
      _v4 = _v3 && _v3.videoUrl.slice(_v3.videoUrl.lastIndexOf("/") + 1),
      _v5 = _v4 && `//${_v2}/video/${_v4}/config?on_site=1&v=1.0`;
    return {
      ..._v3,
      clipVideoId: _v4,
      clipConfigUrl: _v5
    };
  }, "normalizeScriptTemplates", 0, _v4], 0);
  let _v5 = new _v2.Cache({
    maxSize: 25
  });
  class _v6 {
    static requestCached = (_v0, _v1, _v2 = !0) => {
      let _v3 = _v5.get(_v0);
      return _v3 ? Promise.resolve(_v3) : _v6.request(_v0, _v1, _v2).then(_v0 => (_v5.set(_v0, _v0), _v0));
    };
    static request = (_v0, _v1, _v2 = !0) => {
      let _v3 = {
        "X-Requested-With": "XMLHttpRequest"
      };
      return _v1.sessionId && (_v3.Authorization = _v1.sessionId), _v1.headers && (_v3 = {
        ..._v3,
        ..._v1.headers
      }), fetch(`//${_v1.magistoApiHost}${_v0}`, {
        headers: _v3,
        method: _v1.method || "GET",
        body: _v1.body
      }).then(_v0 => {
        if (_v0.ok) return _v0.json().then(_v0 => _v2 ? (0, _v1.camelizeDeep)(_v0) : _v0);
        throw _v0;
      });
    };
    static authorize = async (_v0, _v1, _v2, _v3) => {
      let _v4 = new FormData();
      _v4.append("method", "VIMEO"), _v4.append("token", _v0), _v4.append("settings", "1"), _v2 && _v4.append("teamToken", _v2), _v3 && _v4.append("partnerApp", _v3);
      let _v5 = await fetch(`//${_v1.magistoApiHost}/api/auth`, {
        body: _v4,
        method: "POST",
        headers: {
          "X-Requested-With": "XMLHttpRequest"
        }
      });
      if (_v5.ok) {
        let _v0 = _v5.headers.get("vmosessionid");
        if (!_v0) throw Error("`vmosessionid` header not found in response.");
        return _v5.json().then(_v0 => ({
          sessionId: _v0,
          response: (0, _v1.camelizeDeep)(_v0)
        }));
      }
      throw _v5;
    };
    static getTagsList = (_v0, _v1, _v2, _v3) => {
      let _v4 = "/api/template/tags",
        _v5 = "";
      return _v2 && (_v5 += "?app=magisto"), _v1 && (_v5 += (_v5 ? "&" : "?") + `integration_app=${_v1}`), _v3 && (_v5 += (_v5 ? "&" : "?") + "facebook_ccm_tags_variant=variant"), _v4 += _v5, _v6.request(_v4, _v0).then(_v0 => {
        let _v1,
          _v2 = _v0.tags,
          _v3 = _v0.customTags,
          _v4 = _v2.filter(_v0 => (_v0.isDefault && (_v1 = _v0), !_v0.isDefault));
        return _v1 || ((_v1 = _v4[0]).isDefault = !0, _v4.splice(0, 1)), _v4.unshift(_v1), {
          tags: _v4,
          customTags: _v3
        };
      });
    };
    static getVideoSessionForEdit = async (_v0, _v1, _v2 = !1, _v3) => {
      let _v4 = new FormData(),
        _v5 = "/api/video/template/duplicate";
      _v3 ? (_v5 = "/api/video/duplicate", _v4.append("hash", _v3.hash), _v4.append("vsid", _v3?.vsid?.toString() || ""), _v4.append("video_title", _v3.templateName), _v4.append("dont_push_vimeo", "1")) : _v4.append("vitid", _v0), _v2 && _v4.append("int_app", "shopify");
      let _v6 = await fetch(`//${_v1.magistoApiHost}${_v5}`, {
        body: _v4,
        method: "POST",
        headers: {
          Authorization: _v1.sessionId,
          "X-Requested-With": "XMLHttpRequest"
        }
      });
      if (_v6.ok) return _v6.json().then(_v0 => (0, _v1.camelizeDeep)(_v0));
      throw await _v6.json();
    };
    static getDrafts = (_v0 = 1, _v1, _v2) => {
      let _v3 = `/api/video/mine?p=${_v0}`;
      return _v6.request(_v3, {
        magistoApiHost: _v1,
        sessionId: _v2
      });
    };
    static search = (_v0, _v1, _v2, _v3, _v4, _v5, _v6, _v7) => {
      let _v8 = "";
      _v4 && _v4[0]?.keyword !== _v3.CUSTOM_TEMPLATES_KEYWORD && (_v8 = `limit=${_v1}&sort=use_count&sort_order=desc&include_scripts=1&include_prefilled=1`);
      let _v9 = `/api/template/browse?${_v8}`;
      if (_v7 ? _v9 += `next=${_v7}` : _v3 && (_v9 += `&offset=${_v3}`), _v5) _v9 += `&freetext=${encodeURIComponent(_v5)}`;else if (_v4 && _v4.length > 0) {
        let _v0 = _v4.map(_v0 => _v0.keyword).filter(_v0 => !!_v6 || _v0 !== _v3.HOME);
        _v0.length > 0 && (_v9 += `&keywords=${_v0.join(",")}`);
      }
      return _v6 && (_v9 += "&app=magisto"), _v2 && (_v9 += "&integration_app=shopify"), _v6.requestCached(_v9, _v0, !0).then(_v0 => ({
        ..._v0,
        items: _v0.items && _v4(_v0.items),
        suggestions: _v0.suggestions && _v4(_v0.suggestions)
      }));
    };
    static getTemplate(_v0, _v1) {
      return _v6.requestCached(`/api/video/template/${_v0}`, _v1);
    }
    static getSuggestions = async (_v0, _v1) => {
      let _v2 = `/api/video/template/autocomplete?keyword=${encodeURIComponent(_v0)}`;
      return _v6.request(_v2, _v1);
    };
    static getVideo = async (_v0, _v1) => _v6.request(`/api/video/${_v0}`, _v1, !1);
    static getCategoryTemplates = async _v0 => _v6.requestCached("/api/template/category", _v0).then(_v0 => _v0.categories.map(_v0 => ({
      ..._v0,
      items: _v4(_v0.items)
    })));
  }
  _v0.s(["default", 0, _v6], 0);
}