{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = (_v0, {
    panel_page: _v1,
    entrypoint: _v2,
    surface: _v3
  }) => ({
    ..._v0,
    ...(void 0 !== _v1 ? {
      panel_page: _v1
    } : {}),
    ...(void 0 !== _v2 ? {
      entrypoint: _v2
    } : {}),
    ...(void 0 !== _v3 ? {
      surface: _v3
    } : {})
  });
  _v0.s(["useSupportPanelTracking", 0, _v0 => {
    let _v1 = (0, _v2.usePico)(),
      _v2 = _v0?.entrypoint,
      _v3 = _v0?.surface,
      _v4 = (0, _v1.useCallback)(() => {
        null !== _v1 && _v1.track("support_panel_opened", {});
      }, [_v1]),
      _v5 = (0, _v1.useCallback)(_v0 => {
        null !== _v1 && _v1.track("support_panel_search", _v3({
          language: _v0.language,
          suggested: _v0.suggested,
          search_term: _v0.search_term,
          search_id: _v0.search_id
        }, {
          panel_page: _v0.panel_page,
          entrypoint: _v0.entrypoint ?? _v2,
          surface: _v0.surface ?? _v3
        }));
      }, [_v1, _v2, _v3]),
      _v6 = (0, _v1.useCallback)(_v0 => {
        null !== _v1 && _v1.track("support_panel_popular_search_clicked", _v3({
          search_term: _v0.search_term
        }, {
          panel_page: _v0.panel_page,
          entrypoint: _v0.entrypoint ?? _v2,
          surface: _v0.surface ?? _v3
        }));
      }, [_v1, _v2, _v3]),
      _v7 = (0, _v1.useCallback)(_v0 => {
        null !== _v1 && _v1.track("support_panel_source_clicked", _v3({
          title: _v0.title,
          url: _v0.url
        }, {
          panel_page: _v0.panel_page,
          entrypoint: _v0.entrypoint ?? _v2,
          surface: _v0.surface ?? _v3
        }));
      }, [_v1, _v2, _v3]);
    return {
      trackSupportPanelOpened: _v4,
      trackSupportPanelSearch: _v5,
      trackSupportPanelPopularSearchClicked: _v6,
      trackSupportPanelSourceClicked: _v7,
      trackSupportPanelHelpCenterClicked: (0, _v1.useCallback)(_v0 => {
        null !== _v1 && _v1.track("support_panel_help_center_clicked", _v3({}, {
          panel_page: _v0?.panel_page,
          entrypoint: _v0?.entrypoint ?? _v2,
          surface: _v0?.surface ?? _v3
        }));
      }, [_v1, _v2, _v3]),
      trackSupportPanelYourRequestsClicked: (0, _v1.useCallback)(_v0 => {
        null !== _v1 && _v1.track("support_panel_your_requests_clicked", _v3({}, {
          panel_page: _v0?.panel_page,
          entrypoint: _v0?.entrypoint ?? _v2,
          surface: _v0?.surface ?? _v3
        }));
      }, [_v1, _v2, _v3])
    };
  }]);
}