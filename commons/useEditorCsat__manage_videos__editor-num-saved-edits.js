{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  _v0.i(0);
  var _v4 = _v0.i(0);
  _v0.s(["useEditorCsat", 0, function () {
    let _v0 = (0, _v2.useHistory)(),
      _v1 = _v0?.location?.pathname.includes("/manage/videos"),
      [_v2, _v3] = (0, _v3.default)("editor-num-saved-edits", {
        lastSeenCsatDate: null,
        value: 0
      }),
      _v4 = (0, _v1.useCallback)(() => {
        let _v0 = _v2.value + 1;
        _v3({
          lastSeenCsatDate: _v2.lastSeenCsatDate,
          value: _v0
        }), _v4.PendoClient.updateOptions({
          visitor: {
            csat_editor_num_saved_edits: _v0
          }
        });
      }, [_v3, _v2]),
      _v5 = (0, _v1.useCallback)(_v0 => {
        _v4.PendoClient.showGuideById("8xv7VdPQL2HqOgWwN6pur0ayNHs"), _v3({
          lastSeenCsatDate: _v0,
          value: _v2.value
        });
      }, [_v3, _v2.value]);
    return (0, _v1.useEffect)(() => {
      let _v0 = new Date();
      if (_v1) if (_v2.lastSeenCsatDate) {
        let _v0 = new Date(_v2.lastSeenCsatDate);
        (_v0.getTime() - _v0.getTime()) / 0 > 60 && _v5(_v0);
      } else _v2.value >= 2 && _v5(_v0);
    }, [_v1, _v3, _v5, _v2.lastSeenCsatDate, _v2.value, _v4]), {
      updateTotalSavedEdits: _v4,
      totalSavedEdits: _v2.value
    };
  }]);
}