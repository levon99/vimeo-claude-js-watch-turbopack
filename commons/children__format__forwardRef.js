{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = (0, _v5.withIris)(function (_v0) {
      var _v1 = _v0.children,
        _v2 = _v0.format,
        _v3 = _v0.forwardRef,
        _v4 = _v0.header,
        _v5 = _v0.icon,
        _v6 = void 0 === _v5 ? _v13[_v2] : _v5,
        _v7 = _v0.onClose,
        _v8 = _v0.pill,
        _v9 = (0, _v1.b)(_v0, ["children", "format", "forwardRef", "header", "icon", "onClose", "pill"]),
        _v10 = function (_v0) {
          if (!_v0) return {};
          var _v1 = _v0.accept,
            _v2 = _v0.complete,
            _v3 = _v0.reject;
          return {
            accept: _v1,
            complete: "function" == typeof _v0 ? _v0 : _v2,
            reject: _v3
          };
        }(_v7),
        _v11 = _v10.reject,
        _v12 = _v10.complete;
      return _v2.default.createElement(_v3.NoticeStyled, (0, _v1.c)({
        format: _v2,
        icon: _v6,
        onClose: _v7,
        pill: _v8,
        ref: _v3
      }, _v9), _v6 && _v2.default.createElement(_v3.Icon, {
        header: _v4,
        format: _v2,
        pill: _v8
      }, _v6), _v4 && _v2.default.createElement(_v9.Header, {
        size: "5"
      }, _v4), "string" == typeof _v1 ? _v2.default.createElement(_v10.Paragraph, {
        size: "2"
      }, _v1) : _v2.default.createElement(_v3.NoticeChildren, null, _v1), _v7 && _v2.default.createElement(_v3.Dismiss, {
        format: _v2,
        pill: _v8
      }, _v2.default.createElement(_v4.Button, {
        title: "Dismiss this notification",
        variant: "minimal",
        format: "basic",
        size: "sm",
        icon: _v2.default.createElement(_v11.DismissX, null),
        onClick: function (_v0) {
          _v0.preventDefault(), _v11 && _v11(_v0), _v12 && _v12(_v0);
        }
      })));
    }),
    _v13 = {
      primary: _v2.default.createElement(_v6.CircleInfo, null),
      positive: _v2.default.createElement(_v7.Checkmark, null),
      negative: _v2.default.createElement(_v8.CircleWarning, null)
    };
  _v0.s(["Notice", 0, _v12], 0);
}