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
    _v13 = _v0.i(0),
    _v14 = _v0.i(0);
  let _v15 = "0px 4px 32px 0px rgba(11, 26, 41, 0.12)",
    _v16 = [{
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
    onClose: _v8,
    showCloseButton: _v9 = !1,
    trackingId: _v10,
    acknowledgeLabel: _v11,
    placement: _v12 = "left-start",
    offset: _v13,
    backgroundColor: _v14 = "popover",
    anchorWithinChildren: _v15 = !1
  }) {
    let _v16,
      {
        trackAnnouncementPopoverShown: _v17,
        trackAnnouncementPopoverDismissed: _v18
      } = (_v16 = (0, _v14.usePico)(), {
        trackAnnouncementPopoverShown: (0, _v2.useCallback)(_v0 => null !== _v16 && (_v16.track("announcement_popover_shown", {
          tracking_id: _v0.trackingId
        }), !0), [_v16]),
        trackAnnouncementPopoverDismissed: (0, _v2.useCallback)(_v0 => null !== _v16 && (_v16.track("announcement_popover_dismissed", {
          tracking_id: _v0.trackingId,
          title: _v0.title,
          description: _v0.description
        }), !0), [_v16])
      }),
      _v19 = (0, _v2.useRef)(!1);
    (0, _v2.useEffect)(() => {
      void 0 !== _v10 && (_v0 && !_v19.current && _v17({
        trackingId: _v10
      }), _v19.current = _v0);
    }, [_v10, _v0, _v17]);
    let _v20 = () => {
      _v10 && _v18({
        trackingId: _v10,
        title: "string" == typeof _v3 ? _v3 : "",
        description: "string" == typeof _v4 ? _v4 : ""
      });
    };
    return (0, _v1.jsxs)(_v5.Popover, {
      isOpen: _v0,
      placement: _v12,
      gutter: 16,
      offset: _v13,
      strategy: "fixed",
      modifiers: _v16,
      isLazy: !0,
      closeOnBlur: !1,
      onClose: _v9 ? () => {
        _v20(), _v8?.();
      } : void 0,
      children: [_v15 ? _v1 : (0, _v1.jsx)(_v9.PopoverTrigger, {
        children: _v1
      }), (0, _v1.jsx)(_v10.Portal, {
        children: (0, _v1.jsxs)(_v8.PopoverContent, {
          width: (0, _v12.rem)(320),
          backgroundColor: _v14,
          borderRadius: (0, _v12.rem)(12),
          boxShadow: _v15,
          padding: (0, _v12.rem)(16),
          border: "none",
          rootProps: {
            zIndex: "overlay"
          },
          sx: {
            "--popper-arrow-shadow-color": "transparent"
          },
          _focus: {
            outline: "none",
            boxShadow: _v15
          },
          children: [(0, _v1.jsx)(_v6.PopoverArrow, {
            backgroundColor: _v14
          }), (0, _v1.jsxs)(_v4.Flex, {
            direction: "column",
            gap: (0, _v12.rem)(24),
            alignItems: "stretch",
            children: [(0, _v1.jsxs)(_v4.Flex, {
              alignItems: "flex-start",
              gap: (0, _v12.rem)(8),
              width: "100%",
              children: [(0, _v1.jsxs)(_v4.Flex, {
                direction: "column",
                gap: (0, _v12.rem)(16),
                alignItems: "flex-start",
                flex: "1",
                minWidth: 0,
                children: [_v2, (0, _v1.jsxs)(_v4.Flex, {
                  direction: "column",
                  gap: (0, _v12.rem)(8),
                  alignItems: "flex-start",
                  width: "100%",
                  children: [(0, _v1.jsx)(_v11.Text, {
                    variant: "heading-sm",
                    color: "text-primary",
                    children: _v3
                  }), (0, _v1.jsx)(_v11.Text, {
                    variant: "body-md",
                    color: "text-secondary",
                    children: _v4
                  }), _v5 ? (0, _v1.jsx)(_v11.Text, {
                    fontSize: (0, _v12.rem)(12),
                    color: "text-secondary",
                    lineHeight: 1.2,
                    children: _v5
                  }) : null]
                })]
              }), (0, _v1.jsx)(_v4.Flex, {
                direction: "column",
                gap: (0, _v12.rem)(16),
                alignItems: "flex-start",
                children: _v9 ? (0, _v1.jsx)(_v7.PopoverCloseButton, {
                  position: "static",
                  flexShrink: 0,
                  "aria-label": (0, _v13.translate)({
                    singular: "Close",
                    dictionary: {
                      es: {
                        singular: "Cerrar"
                      },
                      "de-DE": {
                        singular: "Schließen"
                      },
                      "fr-FR": {
                        singular: "Fermer "
                      },
                      "ja-JP": {
                        singular: "閉じる"
                      },
                      "ko-KR": {
                        singular: "닫기"
                      },
                      "pt-BR": {
                        singular: "Fechar"
                      },
                      "zh-CN": {
                        singular: "关闭"
                      }
                    }
                  })
                }) : null
              })]
            }), (0, _v1.jsxs)(_v4.Flex, {
              justifyContent: _v6 ? "space-between" : "flex-end",
              alignItems: "flex-end",
              gap: (0, _v12.rem)(12),
              width: "100%",
              children: [_v6, (0, _v1.jsx)(_v3.Button, {
                variant: "primary",
                size: "md",
                onClick: () => {
                  _v20(), _v7();
                },
                children: _v11 ?? (0, _v13.translate)({
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
  }], 0);
}