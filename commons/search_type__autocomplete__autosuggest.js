{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.getSelectOptionClickEvent = _v2.getVideoTimestamp = _v2.getCopyLinkEvent = _v2.getWidgetEvents = _v2.getMyItemsEntityType = _v2.getRequestEvent = _v2.getVlsResultType = _v2.bigPictureGlobalEvent = _v2.bigPictureEvent = void 0;
  var _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    _v5 = _v0.r(0),
    _v6 = _v0.r(0),
    _v7 = _v0.r(0),
    _v8 = _v0.r(0);
  _v2.bigPictureEvent = function (_v0, _v1) {
    if (_v0 === _v5.BigPictureEventTypes.SearchRequest && "search_type" in _v1) {
      var _v2 = _v1.search_type,
        _v3 = _v1.query;
      if ("autocomplete" !== _v2 || _v3) {
        if ("autosuggest" === _v2 && _v3) throw Error("Big Picture Search Request events with `search_type` 'autosuggest' must not have a query");
      } else throw Error("Big Picture Search Request events with `search_type` 'autocomplete' must have a non-empty query");
    }
    return new _v3.Event(_v0, _v5.EventVersions[_v0], _v1);
  }, _v2.bigPictureGlobalEvent = function (_v0) {
    var _v1 = _v0.account_type,
      _v2 = _v0.is_mod,
      _v3 = _v0.user_id,
      _v4 = _v0.vuid,
      _v5 = _v0.vimeo_language,
      _v6 = _v0.language,
      _v7 = _v0.platform,
      _v8 = window.location.host.endsWith(".ci.vimeows.com") ? "staging" : "production",
      _v9 = _v6.parseUserAgent().screen;
    return _v2.bigPictureEvent(_v5.BigPictureEventTypes.VimeoWebGlobal, {
      user: {
        subscription_type: _v1 ? _v1.toLowerCase() : null,
        is_mod: null != _v2 && _v2,
        session_id: null,
        teams: null,
        user_id: _v3,
        vuid: _v4,
        flags: null,
        is_free_trial: !1
      },
      application: {
        application: "vimeo",
        vimeo_language: null != _v5 ? _v5 : "",
        product: "search",
        build_environment: _v8,
        version: {
          full: "1.0.0",
          major: "1",
          minor: "0",
          patch: "0"
        }
      },
      platform: {
        device_language: null != _v6 ? _v6 : "",
        screen: _v9,
        network: "NO_SERVICE",
        platform: _v5.BP_PLATFORM_ENUMS.has(_v7) ? _v7 : "web"
      }
    });
  }, _v2.getVlsResultType = function (_v0, _v1) {
    var _v2,
      _v3 = _v5.BigPictureResultTypes.VideoLibrarySearch;
    if (_v1) return "" + _v3;
    switch (null == (_v2 = _v0[0]) ? void 0 : _v2.searchField) {
      case _v5.WidgetName.video:
        return _v3 + ".clip";
      case _v5.WidgetName.folder:
        return _v3 + ".folder";
      case _v5.WidgetName.template:
        return _v5.BigPictureResultTypes.VcTemplateSearch;
      default:
        return _v3;
    }
  }, _v2.getRequestEvent = function (_v0) {
    var _v1,
      _v2 = _v0.hits,
      _v3 = _v0.query,
      _v4 = _v0.activeWidgets,
      _v5 = void 0 === _v4 ? [] : _v4,
      _v6 = _v0.curWidgetQualifier,
      _v7 = _v0.searchId,
      _v8 = _v0.start,
      _v9 = _v0.cacheHit,
      _v10 = _v0.error,
      _v11 = _v0.entities,
      _v12 = _v0.component,
      _v13 = _v0.variation,
      _v14 = _v0.ownerId,
      _v15 = _v0.precision;
    return (null == _v11 ? void 0 : _v11.length) ? _v1 = _v11 : (_v1 = [], (null == _v5 ? void 0 : _v5.length) ? _v1 = _v5.map(function (_v0) {
      return _v5.ActiveWidgetToRequestEntity[_v0.searchField];
    }) : _v6 ? _v1.push(_v5.WidgetQualifierToRequestEntity[_v6]) : (_v1.push(_v5.SearchRequestEntities.Clip), _v1.push(_v5.SearchRequestEntities.Folder))), _v2.bigPictureEvent(_v5.BigPictureEventTypes.SearchRequest, {
      ip: null,
      search_type: _v3 ? "autocomplete" : "autosuggest",
      hits: _v2,
      query: _v3 || "",
      search_id: _v7,
      request_time: new Date().getTime() - _v8,
      offset: null,
      limit: null,
      sort: null,
      path: window.location.pathname,
      headers: [],
      filters: _v5.map(function (_v0) {
        return _v0.qualifier + ":" + _v0.bigPictureFilter;
      }),
      params: '{"cache_hit": ' + _v9 + ', "error": ' + _v10 + "}",
      user_preference_disabled: !1,
      source: {
        source_name: _v6 === _v5.WidgetQualifier.command ? _v5.SearchRequestSourceNames.CommandPalette : _v5.SearchRequestSourceNames.Omnisearch,
        component: _v12,
        variation: void 0 === _v13 ? null : _v13
      },
      type: {
        entities: _v1,
        method: _v3 ? _v5.SearchRequestMethods.Autocomplete : _v5.SearchRequestMethods.Autosuggest
      },
      owner_id: _v14 || null,
      precision: _v15
    });
  }, _v2.getMyItemsEntityType = function (_v0, _v1, _v2, _v3) {
    var _v4,
      _v5 = _v0.type;
    if (_v5 === _v5.Item.Template) return "vc_template_suggestion";
    if (null == (_v4 = _v0.snippets) ? void 0 : _v4.ocr) return _v5.BigPictureResultTypes.ocrSuggestion;
    if (_v0.captionData) return _v5.BigPictureResultTypes.CcSuggestion;
    if (!_v1 && !_v2.length) return "recent_" + _v5 + "_suggestion.modified";
    if (_v3 === _v5.WidgetQualifier.in) return _v2[0] && _v2[0].qualifier === _v5.WidgetQualifier.in ? _v1 ? "user_" + _v5 + "_suggestion" : "recent_" + _v5 + "_suggestion" : _v5 + "_filter_suggestion";
    return _v2[0] && _v2[0].id === _v5.WidgetId.switch ? "team_suggestion" : _v1 ? "user_" + _v5 + "_suggestion" : "recent_" + _v5 + "_suggestion";
  }, _v2.getWidgetEvents = function (_v0, _v1) {
    return _v0.map(function (_v0, _v1) {
      var _v2 = _v0.qualifier,
        _v3 = _v0.bigPictureFilter;
      return _v2.bigPictureEvent(_v5.BigPictureEventTypes.SearchResult, {
        result_type: _v2 + ":" + _v3,
        result_id: "",
        search_id: _v4.v5("", _v4.v4()),
        params: null,
        score: null,
        position: _v1 + 1,
        owner_id: _v1,
        path: window.location.pathname,
        uri: null,
        search_result_timestamp: null,
        result_attributes: null,
        moments_count: null,
        source: "omnisearch"
      });
    });
  }, _v2.getCopyLinkEvent = function (_v0, _v1) {
    var _v2 = _v0.account_type,
      _v3 = _v0.teamOwnerId,
      _v4 = _v1.privacy.view,
      _v5 = _v1.uri;
    return _v2.bigPictureEvent(_v5.BigPictureEventTypes.CopyVideoShareLink, {
      path: location.pathname,
      entry_page: "",
      page: _v7.getPageName(location.href),
      product: "search",
      team_owner_id: (null == _v3 ? void 0 : _v3.toString()) || null,
      team_size: null,
      team_subscription_type: void 0 === _v2 ? null : _v2,
      actor_team_role: null,
      actor_resource_role: null,
      video_id: _v8.idFromUri(_v5).toString(),
      video_privacy: _v4,
      is_preset_applied: null,
      is_video_password_protected: !1,
      video_app_id: null,
      video_embed_privacy: null,
      video_type: null,
      upload_id: null,
      video_status: null,
      location: "omnisearch result",
      team_permission_level: null
    });
  }, _v2.getVideoTimestamp = function (_v0) {
    var _v1, _v2, _v3;
    return _v0.type === _v5.Item.Video && ((null == (_v2 = null == (_v1 = null == _v0 ? void 0 : _v0.snippets) ? void 0 : _v1.ocr) ? void 0 : _v2[0].ts) || (null == (_v3 = null == _v0 ? void 0 : _v0.captionData) ? void 0 : _v3.caption_match_ts)) || null;
  }, _v2.getSelectOptionClickEvent = function (_v0) {
    var _v1 = _v0 === _v5.SEARCH_TYPE.Vimeo ? "select_vimeo_search" : "select_library_search";
    return _v2.bigPictureEvent(_v5.BigPictureEventTypes.GenericClick, {
      page: _v7.getPageName(location.href),
      location: "omnisearch_mode_switcher",
      copy: _v5.SEARCH_TYPE_COPY[_v0],
      feature: "omnisearch",
      type: "general",
      path: window.location.pathname,
      name: _v1,
      target: null,
      target_path: null,
      click_type: null,
      device_type: null,
      third_party_integration: null
    });
  };
}