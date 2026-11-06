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
  let _v10 = _v0 => "string" == typeof _v0 || "number" == typeof _v0 ? String(_v0) : Array.isArray(_v0) ? _v0.map(_v10).join(" ") : _v8.default.isValidElement(_v0) ? _v10(_v0.props.children) : "",
    _v11 = (_v0, _v1) => _v1 || _v10(_v0).replace(/\s+/g, " ").trim() || "Announcement",
    _v12 = ({
      details: _v0,
      styles: _v1
    }) => "bullet" === _v0.type ? (0, _v1.jsx)(_v4.Box, {
      as: "ul",
      __css: _v1.bullets,
      children: _v0.items.map((_v0, _v1) => (0, _v1.jsx)(_v4.Box, {
        as: "li",
        __css: _v1.bullet,
        children: _v0
      }, _v1))
    }) : (0, _v1.jsx)(_v4.Box, {
      __css: _v1.details,
      children: _v0.items.map((_v0, _v1) => (0, _v1.jsxs)(_v4.Box, {
        __css: _v1.detail,
        children: [(0, _v1.jsx)(_v4.Box, {
          __css: _v1.detailIcon,
          children: _v0.icon
        }), (0, _v1.jsxs)(_v4.Box, {
          __css: _v1.detailText,
          children: [(0, _v1.jsx)(_v4.Box, {
            __css: _v1.detailTitle,
            children: _v0.title
          }), void 0 !== _v0.description && (0, _v1.jsx)(_v4.Box, {
            __css: _v1.detailDescription,
            children: _v0.description
          })]
        })]
      }, _v1))
    }),
    _v13 = ({
      action: _v0,
      size: _v1,
      variant: _v2
    }) => (0, _v1.jsx)(_v7.Button, {
      isDisabled: _v0.isDisabled,
      isLoading: _v0.isLoading,
      onClick: _v0.onClick,
      size: _v1,
      type: "button",
      variant: _v2,
      children: _v0.label
    }),
    _v14 = ({
      styles: _v0,
      media: _v1,
      badge: _v2,
      title: _v3,
      description: _v4,
      details: _v5,
      note: _v6,
      actions: _v7,
      footerStart: _v8,
      onClose: _v9,
      closeLabel: _v10 = "Close",
      children: _v11,
      hasMedia: _v12 = !1,
      isPlaying: _v13 = !1,
      actionSize: _v14 = "md",
      closeSize: _v15 = "sm"
    }) => {
      let _v16 = (0, _v8.useId)(),
        _v17 = (0, _v8.useRef)(null),
        [_v18, _v19] = (0, _v8.useState)(!1);
      return (0, _v8.useEffect)(() => {
        let _v0 = _v17.current;
        if (!_v0) return;
        let _v1 = () => _v19(_v0.scrollHeight > _v0.clientHeight + 1);
        if (_v1(), "u" < typeof ResizeObserver) return;
        let _v2 = new ResizeObserver(_v1);
        _v2.observe(_v0);
        let _v3 = _v0.firstElementChild;
        return _v3 && _v2.observe(_v3), () => _v2.disconnect();
      }, []), (0, _v1.jsxs)(_v1.Fragment, {
        children: [void 0 !== _v1 && (0, _v1.jsx)(_v4.Box, {
          __css: _v0.media,
          "data-part": "media",
          transition: "width 240ms cubic-bezier(0.2, 0, 0.2, 1)",
          w: _v13 ? "100%" : void 0,
          children: (0, _v1.jsx)(_v4.Box, {
            __css: _v0.mediaArt,
            aspectRatio: _v13 ? "16 / 9" : void 0,
            h: _v13 ? "auto" : void 0,
            children: _v1
          })
        }), (0, _v1.jsxs)(_v4.Box, {
          __css: _v0.content,
          "aria-hidden": _v13 || void 0,
          "data-part": "content",
          display: _v13 ? "none" : void 0,
          children: [(0, _v1.jsx)(_v4.Box, {
            __css: _v0.scroll,
            "aria-labelledby": _v18 ? _v16 : void 0,
            "data-part": "scroll",
            ref: _v17,
            role: _v18 ? "region" : void 0,
            tabIndex: _v18 ? 0 : void 0,
            children: (0, _v1.jsxs)(_v4.Box, {
              __css: _v0.copy,
              children: [(0, _v1.jsxs)(_v4.Box, {
                __css: _v0.header,
                children: [void 0 !== _v2 && (0, _v1.jsx)(_v5.Badge, {
                  alignSelf: "flex-start",
                  "data-part": "badge",
                  size: "sm",
                  variant: "new",
                  children: (0, _v1.jsx)(_v6.Text, {
                    as: "span",
                    variant: "heading-2xs",
                    children: _v2
                  })
                }), (0, _v1.jsxs)(_v4.Box, {
                  children: [(0, _v1.jsx)(_v4.Box, {
                    as: "h2",
                    __css: _v0.title,
                    id: _v16,
                    children: _v3
                  }), void 0 !== _v4 && (0, _v1.jsx)(_v4.Box, {
                    __css: _v0.description,
                    children: _v4
                  })]
                })]
              }), void 0 !== _v5 && (0, _v1.jsx)(_v12, {
                details: _v5,
                styles: _v0
              }), void 0 !== _v6 && (0, _v1.jsx)(_v4.Box, {
                __css: _v0.note,
                children: _v6
              }), _v11]
            })
          }), (_v7?.primary !== void 0 || _v7?.secondary !== void 0 || void 0 !== _v8) && (0, _v1.jsxs)(_v4.Box, {
            __css: _v0.footer,
            children: [void 0 !== _v8 && (0, _v1.jsx)(_v4.Box, {
              __css: _v0.footerStart,
              children: _v8
            }), (0, _v1.jsxs)(_v4.Box, {
              __css: _v0.actions,
              children: [_v7?.secondary !== void 0 && (0, _v1.jsx)(_v13, {
                action: _v7.secondary,
                size: _v14,
                variant: "tertiary"
              }), _v7?.primary !== void 0 && (0, _v1.jsx)(_v13, {
                action: _v7.primary,
                size: _v14,
                variant: "primary"
              })]
            })]
          })]
        }), void 0 !== _v9 && (0, _v1.jsx)(_v4.Box, {
          __css: _v0.close,
          "aria-hidden": _v13 || void 0,
          "data-has-media": _v12 ? "true" : "false",
          "data-part": "close",
          display: _v13 ? "none" : void 0,
          children: (0, _v1.jsx)(_v9.CloseButton, {
            "aria-label": _v10,
            onClick: _v9,
            size: _v15,
            type: "button",
            variant: "blur"
          })
        })]
      });
    };
  _v0.s(["AnnouncementBody", 0, _v14, "getAnnouncementLabel", 0, _v11], 0), _v0.s(["AnnouncementCorner", 0, ({
    media: _v0,
    placement: _v1 = "bottom-right",
    offset: _v2 = 24,
    ariaLabel: _v3,
    sx: _v4,
    className: _v5,
    badge: _v6,
    title: _v7,
    description: _v8,
    details: _v9,
    note: _v10,
    actions: _v11,
    footerStart: _v12,
    onClose: _v13,
    closeLabel: _v14,
    children: _v15
  }) => {
    let _v16 = (0, _v2.useMultiStyleConfig)("Announcement", {
        variant: "corner"
      }),
      _v17 = _v11(_v7, _v3),
      [_v18] = (0, _v3.useToken)("space", [_v2]),
      _v19 = "number" == typeof _v2 ? `${_v2}px` : _v2,
      _v20 = "number" == typeof _v2 ? `${_v2}px` : _v18 ?? _v2,
      _v21 = {
        base: "12px",
        md: _v19
      },
      _v22 = _v1.startsWith("bottom"),
      _v23 = _v1.endsWith("right");
    return (0, _v1.jsx)(_v4.Box, {
      __css: _v16.root,
      "aria-label": _v17,
      className: _v5,
      bottom: _v22 ? _v21 : void 0,
      left: _v23 ? void 0 : _v21,
      maxH: {
        base: "calc(100dvh - 24px)",
        md: `calc(100% - ${_v20} - ${_v20})`
      },
      position: "fixed",
      right: _v23 ? _v21 : void 0,
      role: "region",
      sx: _v4,
      top: _v22 ? void 0 : _v21,
      children: (0, _v1.jsx)(_v14, {
        actionSize: "md",
        actions: _v11,
        badge: _v6,
        closeLabel: _v14,
        description: _v8,
        details: _v9,
        footerStart: _v12,
        hasMedia: void 0 !== _v0,
        media: _v0,
        note: _v10,
        onClose: _v13,
        styles: _v16,
        title: _v7,
        children: _v15
      })
    });
  }], 0);
}