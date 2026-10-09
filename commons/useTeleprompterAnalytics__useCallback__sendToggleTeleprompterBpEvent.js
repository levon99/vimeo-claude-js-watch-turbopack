{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["useTeleprompterAnalytics", 0, (_v0, _v1, _v2 = () => ({})) => {
    let _v3 = (0, _v1.useCallback)(_v0 => {}, []),
      _v4 = (0, _v1.useCallback)(() => {}, []),
      _v5 = (0, _v1.useCallback)(() => {}, []);
    return {
      sendToggleTeleprompterBpEvent: _v3,
      sendAddScriptToTeleprompterBpEvent: _v4,
      sendOpenTeleprompterScriptGeneratorBpEvent: _v5,
      sendOpenTeleprompterScriptSettingsBpEvent: (0, _v1.useCallback)(() => {}, []),
      sendGenerateTeleprompterScriptBpEvent: (0, _v1.useCallback)(() => {}, [])
    };
  }]);
}