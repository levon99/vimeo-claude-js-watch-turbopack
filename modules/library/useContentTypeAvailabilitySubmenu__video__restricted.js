{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useContentTypeAvailabilitySubmenu", 0, ({
    contentTypeFilter: _v0,
    contentTypeOptions: _v1,
    deselectAllItems: _v2,
    enabled: _v3,
    videoAvailabilityFilter: _v4
  }) => {
    let _v5 = (0, _v1.useCallback)(() => {
        let _v0 = _v0.value,
          _v1 = (0, _v2.isContentTypeOptionChecked)(_v1, _v0, "video"),
          _v2 = _v4.value,
          _v3 = _v2.has("restricted"),
          _v4 = _v2.has("available");
        _v2();
        let _v5 = () => new Set(["restricted", "available"]);
        if (!_v1) {
          _v0.setSelection((0, _v2.includeVideosInSelection)(_v1, _v0)), _v4.setValue(_v5());
          return;
        }
        if (!_v3 && !_v4) {
          _v0.setSelection((0, _v2.excludeVideosFromSelection)(_v1, _v0)), _v4.clearFilter();
          return;
        }
        if (_v3 !== _v4) return void _v4.setValue(_v5());
        if (_v3 && _v4) {
          _v4.clearFilter(), _v0.setSelection((0, _v2.excludeVideosFromSelection)(_v1, _v0));
          return;
        }
      }, [_v0, _v1, _v2, _v4]),
      _v6 = (0, _v1.useCallback)(() => {
        let _v0 = _v0.draft,
          _v1 = (0, _v2.isContentTypeOptionChecked)(_v1, _v0, "video"),
          _v2 = _v4.draft,
          _v3 = _v2.has("restricted"),
          _v4 = _v2.has("available");
        _v2();
        let _v5 = () => new Set(["restricted", "available"]);
        if (!_v1) {
          _v0.setSelection((0, _v2.includeVideosInSelection)(_v1, _v0), !0), _v4.setDraft(_v5());
          return;
        }
        if (!_v3 && !_v4) {
          _v0.setSelection((0, _v2.excludeVideosFromSelection)(_v1, _v0), !0), _v4.setDraft(new Set());
          return;
        }
        if (_v3 !== _v4) return void _v4.setDraft(_v5());
        if (_v3 && _v4) {
          _v4.setDraft(new Set()), _v0.setSelection((0, _v2.excludeVideosFromSelection)(_v1, _v0), !0);
          return;
        }
      }, [_v0, _v1, _v2, _v4]);
    return {
      contentTypeVideoSubmenu: _v3 ? {
        onVideoParentCheckboxClick: _v5,
        setVideoAvailabilityFilter: _v0 => {
          let _v1 = _v0.value;
          (0, _v2.isContentTypeOptionChecked)(_v1, _v1, "video") || _v0.setSelection((0, _v2.includeVideosInSelection)(_v1, _v1)), _v4.updateFilterValues(_v0);
        },
        showAvailableOption: _v3,
        showRestrictedOption: _v3,
        videoAvailabilityFilter: _v4.value
      } : void 0,
      mobileContentTypeVideoSubmenu: _v3 ? {
        onVideoParentCheckboxClick: _v6,
        onVideoAvailabilityChange: _v0 => {
          let _v1 = _v0.draft;
          (0, _v2.isContentTypeOptionChecked)(_v1, _v1, "video") || _v0.setSelection((0, _v2.includeVideosInSelection)(_v1, _v1), !0), _v4.updateFilterValues(_v0, !0);
        },
        showAvailableOption: _v3,
        showRestrictedOption: _v3,
        videoAvailabilityDraft: _v4.draft
      } : void 0
    };
  }]);
}