{
  "use strict";

  var _v1,
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  _v0.s(["useAutoCCUpgradeModal", 0, function ({
    canOpen: _v0 = !0,
    composerSessionContext: {
      sessionInfo: {
        value: _v1
      }
    } = (0, _v3.useManager)(_v4.ComposerSessionManager)
  } = {}) {
    let _v2 = !!_v1?.owner?.capabilities?.hasEnterprise;
    return (0, _v7.useUpgradeModal)({
      canOpen: _v0,
      templateType: "enterprise",
      modalConfig: {
        mkcCode: "auto_cc",
        enterpriseTitle: _v2 ? _v5.T_UNLIMITED_AUTO_CC : void 0,
        enterpriseSubtitle: _v2 ? _v5.T_REACH_WIDER_AUDIENCE : _v5.T_ADD_UNLIMITED_AUTOCC,
        customFeaturesList: (0, _v2.jsx)(_v6.UpsellFeaturesList, {
          featuresList: _v2 ? _v5.T_AUTO_CC_UPGRADE_MODAL_FEATURES_LIST_ENTERPRISE : _v5.T_AUTO_CC_UPGRADE_MODAL_FEATURES_LIST
        })
      },
      tracking: {
        params: {},
        paywallTracking: {
          paywallTrigger: "live_event_auto_cc_toggle_button",
          paywallLocation: "live_event",
          paywallType: "popup",
          paywallFeature: "live"
        }
      }
    });
  }], 0);
  var _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = ((_v1 = _v21 || {})[_v1.Limit = 1] = "Limit", _v1);
  let _v22 = {
    1: (0, _v20.T_MAX_AUTO_CC_KEYWORDS_COUNT)(_v19.MAX_AUTO_CC_KEYWORD_COUNT)
  };
  _v0.s(["AutoCcKeywords", 0, function ({
    keywords: _v0 = [],
    isLoading: _v1,
    isDisabled: _v2,
    onChange: _v3
  }) {
    let [_v4, _v5] = (0, _v8.useState)(""),
      [_v6, _v7] = (0, _v8.useState)(null),
      _v8 = (0, _v8.useMemo)(() => new Set(_v0), [_v0]),
      _v9 = !!(_v2 || _v1),
      _v10 = (0, _v8.useCallback)(_v0 => {
        let _v1 = [..._v0],
          _v2 = _v1.indexOf(_v0);
        _v1.splice(_v2, 1), _v3(_v1);
      }, [_v0, _v3]),
      _v11 = (0, _v8.useCallback)(() => {
        let _v0 = _v4.split(",").filter(_v0 => "" !== _v0.trim() && !_v8.has(_v0));
        if (_v8.size + _v0.length >= _v19.MAX_AUTO_CC_KEYWORD_COUNT) return _v7(1);
        _v0.forEach(_v0 => _v8.add(_v0)), _v3([..._v0, ..._v0]), _v5("");
      }, [_v0, _v3, _v8, _v4]),
      _v12 = (0, _v8.useCallback)(_v0 => {
        _v5(_v0.target.value.trim());
      }, []),
      _v13 = (0, _v8.useCallback)(_v0 => {
        "Enter" === _v0.key && _v11();
      }, [_v11]);
    return (0, _v2.jsxs)(_v9.Flex, {
      direction: "column",
      rowGap: (0, _v10.rem)(8),
      "data-testid": "auto-cc-keywords",
      children: [(0, _v2.jsx)(_v17.Text, {
        variant: "heading-xs",
        color: "text-primary",
        children: _v20.T_AUTO_CC_ENHANCED_SPEECH
      }), (0, _v2.jsxs)(_v13.FormControl, {
        isInvalid: !!_v6,
        children: [(0, _v2.jsxs)(_v16.InputGroup, {
          size: "sm",
          children: [(0, _v2.jsx)(_v12.Input, {
            isDisabled: _v9,
            value: _v4,
            size: "sm",
            placeholder: _v20.T_ADD_AUTO_CC_KEYWORD,
            onChange: _v12,
            onKeyDown: _v13
          }), (0, _v2.jsx)(_v15.InputRightElement, {
            cursor: "pointer",
            color: _v9 ? "text-secondary" : "text-primary",
            onClick: _v9 ? void 0 : _v11,
            children: (0, _v2.jsx)(_v18.PlusCircle, {})
          })]
        }), _v6 && _v22[_v6] ? (0, _v2.jsx)(_v14.FormErrorMessage, {
          children: _v22[_v6]
        }) : null]
      }), (0, _v2.jsx)(_v17.Text, {
        variant: "body-sm",
        color: "text-secondary",
        children: _v20.T_ADD_COMMA_SEPARATED_AUTO_CC_KEYWORDS
      }), _v0.length ? (0, _v2.jsx)(_v9.Flex, {
        gap: (0, _v10.rem)(8),
        flexWrap: "wrap",
        children: _v0.map((_v0, _v1) => (0, _v2.jsxs)(_v11.Tag, {
          size: "sm",
          children: [(0, _v2.jsx)(_v11.TagLabel, {
            fontSize: (0, _v10.rem)(14),
            children: _v0
          }), _v9 ? null : (0, _v2.jsx)(_v11.TagCloseButton, {
            onClick: () => _v10(_v0)
          })]
        }, `${_v0}-idx:${_v1}`))
      }) : null]
    });
  }], 0);
}