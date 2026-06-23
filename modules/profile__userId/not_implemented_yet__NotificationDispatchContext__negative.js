{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  let _v5 = _v2.default.createContext({
      showing: !1
    }),
    _v6 = _v2.default.createContext(() => Promise.reject(Error("not implemented yet")));
  _v0.s(["NotificationDispatchContext", 0, _v6, "default", 0, function ({
    children: _v0
  }) {
    let _v1 = (0, _v3.useToast)(),
      _v2 = (0, _v2.useCallback)(_v0 => {
        let _v1 = _v0 ?? {
          content: (0, _v1.jsx)(_v1.Fragment, {
            children: _v4.default.SavedChanges
          })
        };
        _v1({
          title: _v1.content,
          status: "negative" === _v1.status ? "warning" : _v1.status ?? "info",
          duration: _v1.duration ?? 0,
          onCloseComplete: _v1.onComplete
        });
      }, [_v1]);
    return (0, _v1.jsx)(_v6.Provider, {
      value: _v2,
      children: (0, _v1.jsx)(_v5.Provider, {
        value: {
          showing: !1
        },
        children: _v0
      })
    });
  }]);
}