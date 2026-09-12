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
    _v13 = _v11;
  let _v14 = ({
      size: _v0 = "sm",
      src: _v1 = _v13.ANONYMOUS_USER_ICON,
      ..._v2
    }) => (0, _v1.jsx)(_v12.Avatar, {
      ..._v2,
      src: _v1,
      size: _v0,
      style: {
        display: "flex",
        overflow: "visible"
      }
    }),
    _v15 = ({
      src: _v0 = _v11.ANONYMOUS_USER_ICON,
      srcSet: _v1,
      email: _v2,
      name: _v3,
      isPending: _v4,
      avatarSize: _v5,
      ..._v6
    }) => {
      let _v7 = (0, _v9.useColorModeValue)("#47515B", "#B5B5B5");
      return (0, _v1.jsxs)(_v5.MenuItem, {
        py: 8,
        ..._v6,
        gap: "2",
        minW: "0",
        children: [(0, _v1.jsx)(_v14, {
          size: _v5,
          srcSet: _v4 ? _v11.ANONYMOUS_PENDING_ICON : _v1,
          src: _v4 ? _v11.ANONYMOUS_PENDING_ICON : _v0,
          alt: "avatar",
          nameProps: {
            name: _v3 ?? ""
          }
        }), (0, _v1.jsxs)(_v8.VStack, {
          alignItems: "flex-start",
          gap: "0",
          minW: "0",
          children: [_v3 ? (0, _v1.jsx)(_v7.Text, {
            variant: "body-xl",
            fontSize: "text-sm",
            fontWeight: "bold",
            as: "label",
            color: "text-primary",
            w: "100%",
            isTruncated: !0,
            children: _v3
          }) : null, _v2 ? (0, _v1.jsx)(_v7.Text, {
            variant: "body-xl",
            fontSize: _v4 ? "text-sm" : "text-xs",
            fontWeight: _v4 ? "bold" : "regular",
            color: _v4 ? "text-primary" : _v7,
            w: "100%",
            isTruncated: !0,
            children: _v2
          }) : null, _v4 ? (0, _v1.jsx)(_v7.Text, {
            variant: "body-xl",
            fontSize: "text-xs",
            color: _v7,
            as: "i",
            children: (0, _v10.translate)({
              singular: "Pending",
              dictionary: {
                es: {
                  singular: "Pendiente"
                },
                "de-DE": {
                  singular: "ausstehend"
                },
                "fr-FR": {
                  singular: "en attente"
                },
                "ja-JP": {
                  singular: "保留中"
                },
                "ko-KR": {
                  singular: "보류 중"
                },
                "pt-BR": {
                  singular: "Pendente"
                },
                "zh-CN": {
                  singular: "待定"
                }
              }
            })
          }) : null]
        })]
      });
    },
    _v16 = _v0 => {
      let _v1 = (0, _v1.jsx)(_v6.Skeleton, {
          w: "sm",
          h: "sm",
          borderRadius: "round"
        }),
        _v2 = (0, _v1.jsx)(_v6.Skeleton, {
          borderRadius: "pill",
          w: "100%",
          h: "sm",
          bgSize: "200%"
        });
      return (0, _v1.jsx)(_v4.Menu, {
        autoSelect: !1,
        autoFocus: !1,
        strategy: null,
        isOpen: !0,
        children: (0, _v1.jsxs)(_v3.MenuList, {
          ..._v0,
          gap: "0",
          children: [(0, _v1.jsxs)(_v5.MenuItem, {
            gap: "2",
            children: [_v1, _v2]
          }), (0, _v1.jsxs)(_v5.MenuItem, {
            gap: "2",
            children: [_v1, _v2]
          })]
        })
      });
    };
  _v0.s(["MentionList", 0, ({
    selectedIndex: _v0 = 0,
    isOpen: _v1,
    isLoading: _v2,
    avatarSize: _v3,
    icon: _v4,
    iconSpacing: _v5,
    mentionSuggestions: _v6,
    onMenuItemSelection: _v7,
    ..._v8
  }) => {
    let _v9 = (0, _v2.useCallback)(_v0 => _v0 === _v0 ? {
      "data-focus": !0
    } : {}, [_v0]);
    return _v2 || !_v6.length ? (0, _v1.jsx)(_v16, {
      ..._v8
    }) : (0, _v1.jsx)(_v4.Menu, {
      autoSelect: !1,
      strategy: null,
      isOpen: _v1,
      children: (0, _v1.jsx)(_v3.MenuList, {
        ..._v8,
        rootProps: {
          minWidth: "0px !important"
        },
        children: _v6.map(({
          name: _v0,
          email: _v1,
          isPending: _v2,
          src: _v3,
          srcSet: _v4
        }, _v5) => (0, _v1.jsx)(_v15, {
          onClick: () => _v7(_v5),
          src: _v3,
          srcSet: _v4,
          avatarSize: _v3,
          iconSpacing: _v5,
          name: _v0,
          email: _v1,
          isPending: _v2,
          wordBreak: "break-all",
          ..._v9(_v5)
        }, `mention-item-${_v5}`))
      })
    });
  }], 0);
}