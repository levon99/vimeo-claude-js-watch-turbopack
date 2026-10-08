{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.i(0);
  var _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0);
  _v0.s(["useEditTeamTemplate", 0, () => {
    let _v0 = (0, _v2.useDispatch)(),
      [_v1] = (0, _v4.useLazyInitStoryboardQuery)();
    return {
      exitEditTeamTemplateMode: (0, _v1.useCallback)(async () => {
        _v0((0, _v7.setEditedTeamTemplateHashAction)()), _v3.default.setIsEditingTeamTemplate(!1), _v0((0, _v5.resetHistoryAction)()), _v0((0, _v6.resetStoryboardAction)());
        let _v0 = await _v1({}).unwrap(),
          _v1 = _v0.storyboard ? _v0.storyboard.id : _v0.storyboardId;
        _v3.default.setVideoHash(_v1), (0, _v9.setHashUrlParam)(_v1);
        let _v2 = parseInt((0, _v8.extractVideoSessionIdFromStoryboardId)(_v1));
        _v0((0, _v6.setVideoSessionIdAction)(_v2));
      }, [_v0, _v1]),
      enterEditTeamTemplateMode: (0, _v1.useCallback)(_v0 => {
        _v3.default.setIsEditingTeamTemplate(!0), _v0((0, _v7.setEditedTeamTemplateHashAction)(_v0.hash)), _v3.default.setVideoHash(_v0.hash), (0, _v9.setHashUrlParam)(_v0.hash), (0, _v9.addUrlParams)("et", "true"), _v0((0, _v6.setProjectNameAction)(_v0.title)), _v0((0, _v6.setVideoSessionIdAction)(_v0.vsid)), _v0((0, _v6.setStoryboardIdAction)(_v0.id)), _v0((0, _v5.resetHistoryAction)());
      }, [_v0])
    };
  }]);
}