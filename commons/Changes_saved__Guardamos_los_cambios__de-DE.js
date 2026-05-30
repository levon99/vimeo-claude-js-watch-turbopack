{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = {
      content: (0, _v0.i(0).translate)({
        singular: "Changes saved",
        dictionary: {
          es: {
            singular: "Guardamos los cambios"
          },
          "de-DE": {
            singular: "Änderungen wurden gespeichert"
          },
          "fr-FR": {
            singular: "Changements sauvegardés"
          },
          "ja-JP": {
            singular: "変更内容が保存されました"
          },
          "ko-KR": {
            singular: "변경 사항 저장 완료"
          },
          "pt-BR": {
            singular: "Alterações salvas"
          },
          "zh-CN": {
            singular: "已保存更改"
          }
        }
      }),
      showing: !1,
      status: "neutral"
    },
    _v5 = _v2.default.createContext(_v4),
    _v6 = _v2.default.createContext(() => Promise.reject("not implemented yet"));
  _v0.s(["NotificationOptionsContext", 0, _v5, "default", 0, function ({
    children: _v0
  }) {
    let [_v1, _v2] = (0, _v2.useState)({
        content: "",
        showing: !1
      }),
      _v3 = (0, _v2.useCallback)(_v0 => {
        _v2(_v0 => ({
          ..._v0,
          showing: !1
        })), setTimeout(() => {
          let _v0 = _v0 || _v4;
          _v2({
            ..._v4,
            ..._v0,
            showing: !0
          });
        }, 100);
      }, []);
    return (0, _v1.jsx)(_v6.Provider, {
      value: _v3,
      children: (0, _v1.jsx)(_v5.Provider, {
        value: _v1,
        children: _v0
      })
    });
  }], 0), _v0.s(["default", 0, function () {
    let _v0 = (0, _v2.useContext)(_v5);
    return (0, _v1.jsx)(_v3.Notification, {
      ..._v0
    });
  }], 0);
}