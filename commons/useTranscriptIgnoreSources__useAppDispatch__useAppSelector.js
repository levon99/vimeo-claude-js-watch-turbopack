{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  _v0.s(["useTranscriptIgnoreSources", 0, () => {
    let _v0 = (0, _v4.useAppDispatch)(),
      _v1 = (0, _v4.useAppSelector)(_v2.storyboardIdSelector),
      _v2 = (0, _v4.useAppSelector)(_v3.ignoredSourcesSelector),
      _v3 = (0, _v5.getUnversionedStoryboardId)(_v1),
      _v4 = (0, _v1.useCallback)(() => _v2.storyboards[_v3]?.ignoredSources || [], [_v2.storyboards, _v3]);
    return {
      ignoreSource: _v0 => {
        _v4().includes(_v0) || _v0((0, _v3.setIgnoreSourceForStoryboardId)({
          sourceHash: _v0,
          storyboardId: _v3
        }));
      },
      removeSourceFromIgnore: _v0 => {
        _v4().includes(_v0) && _v0((0, _v3.setRemoveFromIgnoreSourceForStoryboardId)({
          sourceHash: _v0,
          storyboardId: _v3
        }));
      }
    };
  }]);
}