{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  _v0.s(["useSynchronizedProgram", 0, function () {
    let {
        sceneInProgram: _v0,
        scenes: _v1,
        sceneActions: _v2,
        isEditMode: _v3
      } = (0, _v1.useManager)(_v3.SceneManager),
      _v4 = (0, _v2.useMemo)(() => {
        if (_v0 && _v1[_v0]) return _v1[_v0];
        let _v0 = Object.values(_v1)[0];
        return _v0 || null;
      }, [_v0, _v1]);
    (0, _v2.useLayoutEffect)(() => {
      !_v3 && _v4 && _v2.setActiveScene(_v4);
    }, [_v4, _v2, _v3]);
  }], 0);
}