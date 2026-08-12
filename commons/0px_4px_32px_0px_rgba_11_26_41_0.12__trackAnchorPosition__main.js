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
    _v11 = _v0.i(0);
  let _v12 = "0px 4px 32px 0px rgba(11, 26, 41, 0.12)",
    _v13 = [{
      name: "trackAnchorPosition",
      enabled: !0,
      phase: "main",
      effect: ({
        instance: _v0
      }) => {
        let {
            reference: _v1,
            popper: _v2
          } = _v0.state.elements,
          _v3 = 0,
          _v4 = _v1.getBoundingClientRect(),
          _v5 = () => {
            if (!_v2.isConnected) return;
            let _v0 = _v1.getBoundingClientRect();
            (_v0.top !== _v4.top || _v0.left !== _v4.left || _v0.width !== _v4.width || _v0.height !== _v4.height) && (_v4 = _v0, _v0.update()), _v3 = requestAnimationFrame(_v5);
          };
        return _v3 = requestAnimationFrame(_v5), () => cancelAnimationFrame(_v3);
      }
    }];
  _v0.s(["AnnouncementPopover", 0, function ({
    isOpen: _v0,
    children: _v1,
    badge: _v2,
    title: _v3,
    body: _v4,
    note: _v5,
    footerStart: _v6,
    onAcknowledge: _v7,
    acknowledgeLabel: _v8,
    placement: _v9 = "left-start",
    offset: _v10,
    backgroundColor: _v11 = "popover",
    anchorWithinChildren: _v12 = !1
  }) {
    return (0, _v1.jsxs)(_v4.Popover, {
      isOpen: _v0,
      placement: _v9,
      gutter: 16,
      offset: _v10,
      strategy: "fixed",
      modifiers: _v13,
      isLazy: !0,
      closeOnBlur: !1,
      children: [_v12 ? _v1 : (0, _v1.jsx)(_v7.PopoverTrigger, {
        children: _v1
      }), (0, _v1.jsx)(_v8.Portal, {
        children: (0, _v1.jsxs)(_v6.PopoverContent, {
          width: (0, _v10.rem)(320),
          backgroundColor: _v11,
          borderRadius: (0, _v10.rem)(8),
          boxShadow: _v12,
          padding: (0, _v10.rem)(16),
          border: "none",
          rootProps: {
            zIndex: "tooltip"
          },
          sx: {
            "--popper-arrow-shadow-color": "transparent"
          },
          _focus: {
            outline: "none",
            boxShadow: _v12
          },
          children: [(0, _v1.jsx)(_v5.PopoverArrow, {
            backgroundColor: _v11
          }), (0, _v1.jsxs)(_v3.Flex, {
            direction: "column",
            gap: (0, _v10.rem)(24),
            alignItems: "stretch",
            children: [(0, _v1.jsxs)(_v3.Flex, {
              direction: "column",
              gap: (0, _v10.rem)(16),
              alignItems: "flex-start",
              children: [_v2, (0, _v1.jsxs)(_v3.Flex, {
                direction: "column",
                gap: (0, _v10.rem)(8),
                alignItems: "flex-start",
                width: "100%",
                children: [(0, _v1.jsx)(_v9.Text, {
                  variant: "heading-sm",
                  color: "text-primary",
                  children: _v3
                }), (0, _v1.jsx)(_v9.Text, {
                  variant: "body-md",
                  color: "text-primary",
                  children: _v4
                }), _v5 ? (0, _v1.jsx)(_v9.Text, {
                  fontSize: (0, _v10.rem)(12),
                  color: "text-secondary",
                  lineHeight: 1.2,
                  children: _v5
                }) : null]
              })]
            }), (0, _v1.jsxs)(_v3.Flex, {
              justifyContent: _v6 ? "space-between" : "flex-end",
              alignItems: "flex-end",
              gap: (0, _v10.rem)(12),
              width: "100%",
              children: [_v6, (0, _v1.jsx)(_v2.Button, {
                variant: "primary",
                size: "md",
                onClick: _v7,
                children: _v8 ?? (0, _v11.translate)({
                  singular: "Got it",
                  dictionary: {
                    es: {
                      singular: "Entendido"
                    },
                    "de-DE": {
                      singular: "Alles klar"
                    },
                    "fr-FR": {
                      singular: "J'ai compris"
                    },
                    "ja-JP": {
                      singular: "了解"
                    },
                    "ko-KR": {
                      singular: "확인"
                    },
                    "pt-BR": {
                      singular: "Entendi"
                    },
                    "zh-CN": {
                      singular: "明白"
                    }
                  }
                })
              })]
            })]
          })]
        })
      })]
    });
  }]);
}