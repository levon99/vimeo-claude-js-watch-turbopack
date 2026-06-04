{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  _v0.s(["ChatMessageAuthor", 0, function ({
    className: _v0 = (0, _v4.createDomName)("chat-message-author"),
    senderName: _v1
  }) {
    let _v2 = (0, _v2.useRef)(null),
      [_v3, _v4] = (0, _v2.useState)(!1),
      _v5 = (0, _v2.useCallback)(() => {
        let _v0 = _v2.current;
        _v4((_v0?.offsetWidth ?? 0) < (_v0?.scrollWidth ?? 0));
      }, []);
    return (0, _v2.useEffect)(() => {
      _v5();
    }, [_v5, _v1]), (0, _v1.jsx)(_v5.BokehTooltip, {
      placement: "top",
      isDisabled: !_v3,
      label: _v1,
      shouldWrapChildren: !1,
      children: (0, _v1.jsx)(_v3.Text, {
        ref: _v2,
        className: _v0,
        variant: "heading-xs",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        overflow: "hidden",
        maxWidth: "100%",
        onMouseEnter: _v5,
        children: _v1
      })
    });
  }], 0);
  var _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0);
  let _v11 = (0, _v2.memo)(function ({
    className: _v0 = (0, _v4.createDomName)("chat-message-content"),
    messageText: _v1
  }) {
    let _v2 = [..._v1.matchAll(_v8.interactionToolsConfig.REGEXP.DEFAULT_LINK)],
      _v3 = (0, _v9.inline)(() => {
        if (_v2.length > 0) {
          let _v0 = [],
            _v1 = 0;
          return _v2.forEach(_v0 => {
            _v0.index && _v0.index > _v1 && _v0.push(_v1.substring(_v1, _v0.index));
            let _v1 = _v0[0],
              _v2 = 0 === _v1.search(_v8.interactionToolsConfig.REGEXP.LINK_PROTOCOL) ? _v1 : `https://${_v1}`;
            _v0.push((0, _v1.jsx)("a", {
              href: _v2,
              target: "_blank",
              rel: "noreferrer noopener",
              children: _v1
            })), _v1 = _v0.index + _v1.length;
          }), _v1.length > _v1 && _v0.push(_v1.substring(_v1)), _v0.map((_v0, _v1) => (0, _v1.jsx)(_v2.Fragment, {
            children: _v0
          }, _v1));
        }
        return _v1;
      });
    return (0, _v1.jsx)(_v6.Paragraph, {
      className: _v0,
      letterSpacing: (0, _v7.rem)(.16),
      lineHeight: 1.5,
      color: "text-secondary",
      fontSize: (0, _v7.rem)(14),
      marginBottom: (0, _v7.rem)(4),
      fontFamily: _v10.EMOJI_FONT_FAMILY,
      sx: {
        "a, a:hover, a:active": {
          color: "blue.500",
          textDecoration: "none",
          cursor: "pointer"
        }
      },
      children: _v3
    });
  });
  _v0.s(["ChatMessageContent", 0, _v11], 0);
}