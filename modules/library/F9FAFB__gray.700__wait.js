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
    _v15 = _v0.i(0);
  let _v16 = ({
      children: _v0,
      isActive: _v1,
      targetElementId: _v2
    }) => {
      let [_v3, _v4] = (0, _v2.useState)();
      (0, _v2.useEffect)(() => {
        let _v0 = document.getElementById(_v2);
        _v0 && _v4(_v0);
      }, [_v2]);
      let _v5 = (0, _v10.useColorModeValue)("#F9FAFB", "gray.700"),
        _v6 = (0, _v1.jsx)(_v13.AnimatePresence, {
          mode: "wait",
          children: _v1 && (0, _v1.jsx)(_v3.Box, {
            as: _v14.motion.div,
            initial: {
              bottom: "-3.5rem",
              transform: "translateY(100%)"
            },
            animate: {
              bottom: "3rem",
              transform: "translateY(0%)"
            },
            exit: {
              bottom: "-3.5rem",
              transform: "translateY(100%)"
            },
            transition: {
              duration: "0.6",
              type: "spring",
              stiffness: "600",
              damping: "32"
            },
            borderRadius: "md",
            paddingX: "1rem",
            paddingY: ".5rem",
            position: "fixed",
            zIndex: 11,
            boxShadow: "md",
            backgroundColor: _v5,
            children: _v0
          })
        });
      return _v3 ? (0, _v15.createPortal)(_v6, _v3) : null;
    },
    _v17 = ({
      children: _v0,
      handleDeselectAllItems: _v1,
      numItemsSelected: _v2,
      tooltipText: _v3,
      targetElementId: _v4,
      selectedItemsText: _v5
    }) => {
      let _v6 = (0, _v2.useRef)(null),
        {
          colorMode: _v7
        } = (0, _v10.useColorMode)(),
        _v8 = "dark" === _v7 ? _v5.LightMode : _v5.DarkMode;
      return (0, _v1.jsx)(_v8, {
        children: (0, _v1.jsx)(_v16, {
          isActive: _v2 > 0,
          targetElementId: _v4,
          children: (0, _v1.jsxs)(_v6.Flex, {
            alignItems: "center",
            gap: ".5rem",
            children: [(0, _v1.jsxs)(_v6.Flex, {
              gap: ".5rem",
              marginRight: _v3 ? "1rem" : "3rem",
              alignItems: "center",
              children: [(0, _v1.jsx)(_v8.Text, {
                color: "text-primary",
                variant: "body-lg",
                children: _v5
              }), !!_v3 && (0, _v1.jsx)(_v3.Box, {
                ref: _v6,
                children: (0, _v1.jsx)(_v9.Tooltip, {
                  label: _v3,
                  shouldWrapChildren: !0,
                  portalProps: {
                    containerRef: _v6
                  },
                  placement: "top",
                  children: (0, _v1.jsx)(_v11.CircleExclamation, {
                    color: "text-primary"
                  })
                })
              })]
            }), _v0, (0, _v1.jsx)(_v7.IconButton, {
              "aria-label": "deselect all",
              onClick: _v1,
              icon: (0, _v1.jsx)(_v12.CloseX, {}),
              variant: "tertiary"
            })]
          })
        })
      });
    };
  _v17.ActionButton = ({
    icon: _v0,
    disabled: _v1,
    label: _v2,
    onClick: _v3,
    tooltipText: _v4
  }) => {
    let _v5 = (0, _v1.jsx)(_v4.Button, {
      "data-testid": `bulk-action-button-${_v2.toLowerCase()}`,
      isDisabled: _v1,
      leftIcon: _v0,
      onClick: _v3,
      variant: "tertiary",
      children: _v2
    });
    return _v4 ? (0, _v1.jsx)(_v9.Tooltip, {
      label: _v4,
      placement: "top",
      shouldWrapChildren: !0,
      children: _v5
    }) : _v5;
  }, _v17.ActionBar = _v16, _v0.s(["BulkActionsBar", 0, _v17], 0);
}