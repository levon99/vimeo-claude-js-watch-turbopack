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
  function _v12({
    reaction: _v0
  }) {
    let _v1 = (0, _v5.useMemo)(() => 4 + _v0.key.split("").reduce((_v0, _v1) => _v0 + _v1.charCodeAt(0), 0) % 26, [_v0.key]);
    return (0, _v1.jsx)(_v4.motion.div, {
      style: {
        position: "absolute",
        bottom: 0,
        left: `${_v1}%`
      },
      initial: {
        y: 0,
        opacity: 0
      },
      animate: {
        y: ["0cqh", "-95cqh", "-95cqh"],
        opacity: [0, 1, 1, 0]
      },
      exit: {
        opacity: 0
      },
      transition: {
        y: {
          duration: 3.5,
          times: [0, .86, 1],
          ease: "linear"
        },
        opacity: {
          duration: 3.5,
          times: [0, .08, .86, 1]
        }
      },
      children: (0, _v1.jsxs)(_v8.Flex, {
        flexDirection: "column",
        alignItems: "center",
        gap: (0, _v10.rem)(4),
        children: [(0, _v1.jsx)(_v7.Box, {
          as: "span",
          fontSize: (0, _v10.rem)(32),
          lineHeight: 1,
          children: _v0.emoji
        }), _v0.user?.displayName ? (0, _v1.jsx)(_v9.Text, {
          variant: "body-xs",
          color: "white",
          isTruncated: !0,
          maxWidth: (0, _v10.rem)(100),
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          borderRadius: "sm",
          padding: `${(0, _v10.rem)(2)} ${(0, _v10.rem)(6)}`,
          children: _v0.user.displayName
        }) : null]
      })
    });
  }
  _v0.s(["ReactionOverlay", 0, function () {
    let {
        isEnabled: _v0,
        reactions: _v1
      } = (0, _v2.useManager)(_v11.ReactionManager),
      _v2 = _v0 ? function () {
        let _v0 = document.getElementById("parent_container");
        if (_v0) return _v0;
        let _v1 = document.getElementById("preview-layout-scene-canvas");
        if (_v1) return _v1;
        let _v2 = document.getElementById("preview-scene-canvas");
        if (_v2) return _v2;
        let _v3 = document.querySelector(".js-player");
        return _v3?.parentElement ?? null;
      }() : null;
    return _v0 && _v2 ? (0, _v6.createPortal)((0, _v1.jsx)(_v7.Box, {
      position: "absolute",
      inset: 0,
      overflow: "hidden",
      pointerEvents: "none",
      sx: {
        containerType: "size",
        zIndex: 3
      },
      "aria-hidden": !0,
      children: (0, _v1.jsx)(_v3.AnimatePresence, {
        children: _v1.map(_v0 => (0, _v1.jsx)(_v12, {
          reaction: _v0
        }, _v0.key))
      })
    }), _v2) : null;
  }]);
}