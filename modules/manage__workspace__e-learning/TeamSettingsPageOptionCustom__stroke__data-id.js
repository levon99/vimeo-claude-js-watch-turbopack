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
    _v12 = _v0.i(0),
    _v13 = _v0.i(0);
  let _v14 = (0, _v2.default)(() => _v0.A(0), {
    loadableGenerated: {
      modules: [0]
    }
  });
  _v0.s(["TeamSettingsPageOptionCustom", 0, ({
    title: _v0,
    description: _v1,
    disabled: _v2,
    upsell: _v3,
    dataId: _v4,
    betaBadge: _v5,
    children: _v6,
    isUpsellOpen: _v7,
    setUpsellOpen: _v8,
    tooltip: _v9,
    displayValue: _v10,
    footer: _v11
  }) => {
    let _v12 = (0, _v12.useViewer)();
    return (0, _v1.jsxs)(_v8.Box, {
      children: [(0, _v1.jsx)(_v4.Divider, {
        borderColor: "stroke",
        marginY: "200"
      }), (0, _v1.jsxs)(_v3.Flex, {
        "data-id": _v4,
        alignItems: "center",
        justifyContent: "space-between",
        gap: "400",
        children: [(0, _v1.jsxs)(_v8.Box, {
          children: [(0, _v1.jsxs)(_v6.Header, {
            opacity: _v2 ? "0.5" : void 0,
            variant: "heading-xs",
            as: "h6",
            marginBottom: "50",
            size: "xl",
            children: [_v0, _v5 && (0, _v1.jsx)(_v5.Badge, {
              variant: "new",
              size: "sm",
              marginX: "75",
              children: (0, _v11.translate)({
                singular: "BETA",
                dictionary: {
                  "ja-JP": {
                    singular: "ベータ"
                  },
                  "ko-KR": {
                    singular: "베타"
                  },
                  "zh-CN": {
                    singular: "测试版"
                  }
                }
              })
            }), _v3 && (0, _v1.jsx)(_v5.Badge, {
              background: _v13.UPSELL_GRADIENT,
              color: "white",
              size: "sm",
              marginX: "75",
              children: (0, _v11.translate)({
                singular: "Enterprise",
                dictionary: {
                  "fr-FR": {
                    singular: "Entreprise"
                  },
                  "zh-CN": {
                    singular: "企业"
                  }
                }
              })
            })]
          }), (0, _v1.jsx)(_v7.Paragraph, {
            color: "text-secondary",
            opacity: _v2 ? "0.5" : void 0,
            variant: "body-md",
            children: _v1
          }), _v10]
        }), (0, _v1.jsx)(_v9.Tooltip, {
          label: _v9,
          isDisabled: !_v9,
          shouldWrapChildren: !0,
          placement: "top-end",
          maxWidth: (0, _v10.rem)(300),
          children: _v6
        })]
      }), _v11, _v3 && _v7 ? (0, _v1.jsx)(_v14, {
        apiUrl: _v12?.apiUrl,
        userConfig: {
          jwt: _v12?.jwt,
          userId: _v12?.user?.id
        },
        templateType: "enterprise",
        onClose: () => _v8?.(!1),
        modalConfig: _v3.modalConfig,
        tracking: {
          ..._v3.tracking,
          paywallTracking: {
            paywallTrigger: "team_settings_enterprise_option_button",
            paywallLocation: "team_settings",
            paywallType: "popup",
            paywallFeature: "enterprise"
          }
        }
      }) : null]
    });
  }]);
}