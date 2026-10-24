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
    _v10 = _v0.i(0);
  let _v11 = ({
      label: _v0,
      avatarUri: _v1
    }) => (0, _v3.jsxs)(_v8.Box, {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      px: "6px",
      children: [(0, _v3.jsx)(_v5.Avatar, {
        alt: "avatar",
        size: "xs",
        src: _v1,
        nameProps: {
          name: _v0
        }
      }), (0, _v3.jsx)(_v8.Box, {
        fontSize: "md",
        lineHeight: "16px",
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        children: _v0
      })]
    }),
    _v12 = ({
      text: _v0,
      from: _v1,
      to: _v2
    }) => {
      if (_v0 && void 0 !== _v1 && void 0 !== _v2) {
        let _v0 = _v0.slice(0, _v1),
          _v1 = _v0.slice(_v1, _v2),
          _v2 = _v0.slice(_v2);
        return (0, _v3.jsxs)(_v3.Fragment, {
          children: [_v0, (0, _v3.jsx)("mark", {
            className: "highlighted-mention-text",
            children: _v1
          }), _v2]
        });
      }
      return (0, _v3.jsx)(_v3.Fragment, {
        children: _v0
      });
    },
    _v13 = ({
      node: {
        attrs: _v0
      },
      extension: {
        options: {
          onMentionRemove: _v1,
          onMentionAdd: _v2
        }
      }
    }) => {
      (0, _v4.useEffect)(() => (_v2?.(_v0), () => {
        _v1 && (_v0.teamUserId || _v0.userId) && _v1(_v0.userId ? parseInt(_v0.userId ?? "") : parseInt(_v0.teamUserId ?? ""));
      }), [_v1, _v0.userId, _v0.teamUserId]);
      let _v3 = (0, _v9.useIsBokeh)(),
        _v4 = _v0.name ?? _v0.label,
        _v5 = _v0.avatar ?? _v10.ANONYMOUS_USER_ICON,
        _v6 = _v0.highlight ?? {
          from: void 0,
          to: void 0
        };
      return (0, _v3.jsx)(_v8.Box, {
        as: _v2.NodeViewWrapper,
        display: "inline",
        children: (0, _v3.jsx)(_v6.Tooltip, {
          label: (0, _v3.jsx)(_v11, {
            label: _v4,
            avatarUri: _v5
          }),
          placement: "top",
          children: (0, _v3.jsx)(_v7.Text, {
            variant: "body-xl",
            display: "inline",
            cursor: "pointer",
            color: _v3 ? "fill-brand" : "focus",
            fontSize: "sm",
            fontWeight: "bold",
            _hover: {
              color: "blue.600"
            },
            children: (0, _v3.jsx)(_v12, {
              text: _v0.label,
              from: _v6.from,
              to: _v6.to
            })
          })
        })
      });
    },
    _v14 = _v1.default.extend({
      addAttributes() {
        return {
          ...this.parent?.(),
          userId: {
            default: void 0
          },
          teamUserId: {
            default: void 0
          },
          guestUserId: {
            default: void 0
          },
          email: {
            default: void 0
          },
          avatar: {
            default: void 0
          },
          name: {
            default: void 0
          },
          highlight: {
            default: void 0
          }
        };
      },
      addNodeView: () => (0, _v2.ReactNodeViewRenderer)(_v13)
    });
  _v0.s(["default", 0, _v14], 0);
}