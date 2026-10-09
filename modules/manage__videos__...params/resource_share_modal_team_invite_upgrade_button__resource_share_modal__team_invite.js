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
    _v9 = _v0.i(0);
  let _v10 = ({
    isMobile: _v0
  }) => {
    let {
        hooks: {
          useUpsellCallback: _v1
        }
      } = (0, _v2.useContext)(_v9.ResourceConfigContext),
      {
        onInviteUpsellClick: _v2
      } = _v1?.() ?? {},
      _v3 = (0, _v8.buildUpgradePlanUrl)({
        paywallTrigger: "resource_share_modal_team_invite_upgrade_button",
        paywallLocation: "resource_share_modal",
        paywallFeature: "team_invite"
      }, {
        paywall: "1"
      }),
      _v4 = (0, _v2.useCallback)(() => {
        _v2?.();
      }, [_v2]),
      _v5 = (0, _v2.useMemo)(() => _v2 ? {
        onClick: _v4
      } : {
        target: "_blank",
        href: _v3
      }, [_v4, _v2, _v3]);
    return (0, _v1.jsx)(_v7.UpgradeBadge, {
      position: "absolute",
      top: (0, _v5.rem)(10),
      right: 0,
      mr: _v0 ? (0, _v5.rem)(10) : (0, _v5.rem)(9),
      ..._v5,
      children: (0, _v6.translate)({
        singular: "Upgrade",
        dictionary: {
          es: {
            singular: "Actualizar"
          },
          "de-DE": {
            singular: "Upgraden"
          },
          "fr-FR": {
            singular: "Mettre à niveau"
          },
          "ja-JP": {
            singular: "アップグレード"
          },
          "ko-KR": {
            singular: "업그레이드"
          },
          "zh-CN": {
            singular: "升级"
          }
        }
      })
    });
  };
  _v0.s(["UpsellBadge", 0, _v10], 0);
  var _v11 = _v0.i(0);
  let _v12 = "team_share_input",
    _v13 = _v3.default.div.withConfig({
      displayName: "SearchInput__InputBlock",
      componentId: "sc-7dc2b1cf-0"
    })`
  position: relative;
  padding-top: ${(0, _v5.rem)(2)};

  div[data-lastpass-icon-root] {
    display: none !important; /* Hide LastPass extension */
  }
`;
  _v0.s(["SearchInput", 0, ({
    onEnterKeyDown: _v0,
    nameInputTextRef: _v1,
    nameInput: _v2,
    onNameInputUpdate: _v3,
    nameInputPlaceholderText: _v4,
    canSeeUpsellModalOnShare: _v5,
    isDisabled: _v6,
    isMobile: _v7,
    setIsInputFocused: _v8
  }) => {
    let _v9 = (0, _v2.useCallback)(_v0 => {
      _v0.keyCode === _v11.KeyCodes.ENTER && (_v0.preventDefault(), _v0.stopPropagation(), _v1.current && _v1.current.focus(), _v0 && _v0(_v0));
    }, [_v1, _v0]);
    return (0, _v1.jsx)(_v1.Fragment, {
      children: (0, _v1.jsxs)(_v13, {
        children: [(0, _v1.jsx)(_v4.Input, {
          type: "text",
          variant: "outlined",
          id: _v12,
          autoComplete: "off",
          ref: _v1,
          value: _v2.value,
          onChange: _v0 => {
            let _v1 = _v0.currentTarget.value;
            _v3({
              ..._v2,
              hasError: !1,
              value: _v1
            });
          },
          onKeyDown: _v9,
          placeholder: _v4,
          onBlur: () => {
            _v3({
              ..._v2,
              hasError: !1
            });
          },
          onFocus: () => _v8(!0),
          "aria-label": _v4,
          isDisabled: _v6,
          autoFocus: !0,
          "data-1p-ignore": !0,
          mb: 8,
          "data-testid": _v12
        }), _v5 && (0, _v1.jsx)(_v10, {
          isMobile: _v7
        })]
      })
    });
  }], 0);
}