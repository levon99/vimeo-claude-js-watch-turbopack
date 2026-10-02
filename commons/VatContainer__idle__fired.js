{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  _v0.s(["VatContainer", 0, ({
    wetransferInspired: _v0 = !1
  }) => {
    let _v1 = (0, _v3.useViewer)(),
      [_v2, _v3] = (0, _v2.useState)(_v0),
      [_v4, _v5] = (0, _v2.useState)(!1),
      [_v6, _v7] = (0, _v2.useState)(!1),
      [_v8, _v9] = (0, _v2.useState)(!1),
      [_v10, _v11] = (0, _v2.useState)(!1),
      {
        state: {
          order: _v12,
          billingAddress: _v13,
          isBusinessUserEntity: _v14
        },
        dispatch: _v15
      } = (0, _v7.useStateContext)(),
      [_v16, _v17] = (0, _v5.useUpdateOrderPreview)(),
      _v18 = (0, _v2.useRef)("idle"),
      _v19 = _v0 => {
        _v18.current = "fired", _v16(_v0);
      };
    (0, _v2.useEffect)(() => {
      let _v0 = _v18.current;
      if ("idle" !== _v0) {
        if (_v17.loading) {
          _v18.current = "in-flight";
          return;
        }
        "in-flight" === _v0 && (_v17.error && _v7(!0), _v5(!1), _v18.current = "idle");
      }
    }, [_v17]);
    let _v20 = _v13?.country ?? _v12?.billingAddress?.country;
    if (!_v1 || !_v12 || !_v20) return null;
    let _v21 = 1 === ((_v0, _v1) => {
      for (let _v0 in _v1 = (_v1 + "").toLowerCase(), _v0) if (_v0.hasOwnProperty(_v0) && _v1 == (_v0 + "").toLowerCase()) return _v0[_v0];
    })(_v1.vatConfig?.countries, _v20);
    if (!_v21 && !_v0) return null;
    async function _v22(_v0, _v1) {
      let _v2 = JSON.stringify({
        return_as_json: !0,
        number: _v1,
        country: _v0,
        token: _v1?.xsrft,
        save: !1
      });
      try {
        let _v0 = await fetch("/store/validate_vat", {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-type": "application/json",
            "X-Requested-With": "XMLHttpRequest"
          },
          body: _v2
        });
        return (await _v0.json()).error;
      } catch {
        return "service_down";
      }
    }
    let _v23 = async _v0 => {
      _v0.preventDefault();
      let _v1 = _v0.target.elements.namedItem("vat");
      if (!_v1.value) return;
      if (_v5(!0), _v7(!1), _v9(!1), _v11(!1), !_v21) return void _v19({
        ..._v12,
        vatId: _v1.value
      });
      let _v2 = setTimeout(() => _v11(!0), 0),
        _v3 = await _v22(_v20, _v1.value);
      if (clearTimeout(_v2), _v11(!1), !1 === _v3) {
        let _v0 = _v1.value;
        _v7(!1), _v14 || _v15({
          type: _v6.ActionTypes.TOGGLE_USER_ENTITY,
          payload: !0
        }), _v19({
          ..._v12,
          vatId: _v0
        });
      } else "service_down" === _v3 ? _v9(!0) : _v7(!0), _v5(!1);
    };
    return _v12.vatId ? (0, _v1.jsx)(_v4.AppliedVat, {
      vat: _v12.vatId,
      isLoading: _v4,
      cancelAppliedVat: () => {
        let _v0 = {
          ..._v12
        };
        delete _v0.vatId, _v5(!0), _v19(_v0);
      }
    }) : (0, _v1.jsx)(_v4.VatInputWithLayout, {
      showInput: _v2,
      toggleInput: () => _v3(!_v2),
      onVatSubmitted: _v23,
      isLoading: _v4,
      isVatInvalid: _v6,
      isVatServiceDown: _v8,
      isSlow: _v10,
      wetransferInspired: _v0
    });
  }]);
}