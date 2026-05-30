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
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0);
  let _v17 = (0, _v2.lazy)(() => _v0.A(0).then(_v0 => ({
    default: _v0.EmojiPanel
  })));
  _v0.s(["EmojiButton", 0, function ({
    id: _v0 = (0, _v15.createDomName)("emoji-button"),
    className: _v1 = (0, _v15.createDomName)("emoji-button"),
    inputRef: _v2,
    isSubmitted: _v3,
    placement: _v4,
    isDisabled: _v5,
    onEmojiSelect: _v6
  }) {
    let {
        isOpen: _v7,
        onOpen: _v8,
        onClose: _v9
      } = (0, _v10.useDisclosure)(),
      _v10 = (0, _v2.useRef)(null),
      _v11 = (0, _v2.useRef)(null),
      _v12 = (0, _v4.useColorModeValue)("slate.100", "grayscale.600"),
      _v13 = (0, _v2.useMemo)(() => _v7 ? `${_v12}!important` : "transparent", [_v7, _v12]);
    return (0, _v11.useOutsideClick)({
      ref: _v11,
      handler: _v0 => {
        !(_v0.target && (_v10?.current?.contains(_v0.target) || _v2.current?.contains(_v0.target))) && _v7 && _v9();
      }
    }), (0, _v2.useEffect)(() => {
      _v3 && _v7 && _v9();
    }, [_v3, _v7, _v9]), (0, _v1.jsxs)(_v6.Popover, {
      isLazy: !0,
      placement: _v4,
      closeOnBlur: !1,
      isOpen: _v7,
      onOpen: _v8,
      onClose: _v9,
      children: [(0, _v1.jsx)(_v7.PopoverTrigger, {
        children: (0, _v1.jsx)(_v5.IconButton, {
          id: _v0,
          className: _v1,
          ref: _v10,
          "aria-label": "emoji button",
          type: "button",
          size: "sm",
          variant: "tertiary",
          icon: (0, _v1.jsx)(_v14.Smile, {}),
          isDisabled: _v5,
          borderRadius: "sm",
          margin: (0, _v3.rem)(4),
          backgroundColor: _v13,
          _hover: {
            backgroundColor: _v12
          },
          sx: (0, _v16.createSvgStyle)({
            size: (0, _v3.rem)(20)
          })
        })
      }), (0, _v1.jsx)(_v8.PopoverContent, {
        padding: 0,
        children: (0, _v1.jsx)(_v9.PopoverBody, {
          width: (0, _v3.rem)(326),
          height: (0, _v3.rem)(260),
          children: (0, _v1.jsx)(_v2.Suspense, {
            fallback: (0, _v1.jsx)(_v12.Flex, {
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%",
              children: (0, _v1.jsx)(_v13.Spinner, {
                size: "xs"
              })
            }),
            children: (0, _v1.jsx)(_v17, {
              ref: _v11,
              isOpen: _v7,
              onSelect: _v6
            })
          })
        })
      })]
    });
  }]);
}