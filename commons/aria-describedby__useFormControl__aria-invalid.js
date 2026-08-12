{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  function _v3(_v0) {
    var _v1, _v2, _v3;
    let _v4 = (0, _v1.useFormControlContext)(),
      {
        id: _v5,
        disabled: _v6,
        readOnly: _v7,
        required: _v8,
        isRequired: _v9,
        isInvalid: _v10,
        isReadOnly: _v11,
        isDisabled: _v12,
        onFocus: _v13,
        onBlur: _v14,
        ..._v15
      } = _v0,
      _v16 = _v0["aria-describedby"] ? [_v0["aria-describedby"]] : [];
    return (null == _v4 ? void 0 : _v4.hasFeedbackText) && (null == _v4 ? void 0 : _v4.isInvalid) && _v16.push(_v4.feedbackId), (null == _v4 ? void 0 : _v4.hasHelpText) && _v16.push(_v4.helpTextId), {
      ..._v15,
      "aria-describedby": _v16.join(" ") || void 0,
      id: null != _v5 ? _v5 : null == _v4 ? void 0 : _v4.id,
      isDisabled: null != (_v1 = null != _v6 ? _v6 : _v12) ? _v1 : null == _v4 ? void 0 : _v4.isDisabled,
      isReadOnly: null != (_v2 = null != _v7 ? _v7 : _v11) ? _v2 : null == _v4 ? void 0 : _v4.isReadOnly,
      isRequired: null != (_v3 = null != _v8 ? _v8 : _v9) ? _v3 : null == _v4 ? void 0 : _v4.isRequired,
      isInvalid: null != _v10 ? _v10 : null == _v4 ? void 0 : _v4.isInvalid,
      onFocus: (0, _v2.callAllHandlers)(null == _v4 ? void 0 : _v4.onFocus, _v13),
      onBlur: (0, _v2.callAllHandlers)(null == _v4 ? void 0 : _v4.onBlur, _v14)
    };
  }
  _v0.s(["useFormControl", 0, function (_v0) {
    let {
      isDisabled: _v1,
      isInvalid: _v2,
      isReadOnly: _v3,
      isRequired: _v4,
      ..._v5
    } = _v3(_v0);
    return {
      ..._v5,
      disabled: _v1,
      readOnly: _v3,
      required: _v4,
      "aria-invalid": (0, _v2.ariaAttr)(_v2),
      "aria-required": (0, _v2.ariaAttr)(_v4),
      "aria-readonly": (0, _v2.ariaAttr)(_v3)
    };
  }, "useFormControlProps", 0, _v3]);
}