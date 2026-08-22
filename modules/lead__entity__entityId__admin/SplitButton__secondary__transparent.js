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
    _v12 = _v0.i(0);
  let [_v13, _v14] = (0, _v4.createStylesContext)("SplitButton"),
    _v15 = (0, _v2.forwardRef)(({
      children: _v0,
      variant: _v1 = "secondary",
      size: _v2 = "md",
      popoverProps: _v3,
      ..._v4
    }, _v5) => {
      let _v6 = (0, _v3.useMultiStyleConfig)("SplitButton", {
        variant: _v1,
        size: _v2
      });
      return (0, _v1.jsx)(_v13, {
        value: _v6,
        children: (0, _v1.jsx)(_v5.Popover, {
          ..._v3,
          children: (0, _v1.jsx)(_v6.ButtonGroup, {
            isAttached: !0,
            __css: _v6.buttonGroup,
            ref: _v5,
            ..._v4,
            children: _v0
          })
        })
      });
    }),
    _v16 = (0, _v2.forwardRef)(({
      ..._v0
    }, _v1) => {
      let _v2 = _v14();
      return (0, _v1.jsx)(_v7.Button, {
        __css: _v2.primaryButton,
        ref: _v1,
        ..._v0
      });
    }),
    _v17 = (0, _v2.forwardRef)(({
      icon: _v0 = (0, _v1.jsx)(_v10.ChevronDown, {}),
      ..._v1
    }, _v2) => {
      let _v3 = _v14();
      return (0, _v1.jsx)(_v8.PopoverTrigger, {
        children: (0, _v1.jsx)(_v12.IconButton, {
          ref: _v2,
          __css: _v3.secondaryButton,
          icon: _v0,
          ..._v1
        })
      });
    }),
    _v18 = (0, _v2.forwardRef)(({
      icon: _v0 = (0, _v1.jsx)(_v11.PlusCircle, {}),
      ..._v1
    }, _v2) => {
      let _v3 = _v14();
      return (0, _v1.jsx)(_v12.IconButton, {
        __css: _v3.primaryButton,
        icon: _v0,
        ref: _v2,
        ..._v1
      });
    }),
    _v19 = (0, _v2.forwardRef)(({
      ..._v0
    }, _v1) => {
      let _v2 = _v14();
      return (0, _v1.jsx)(_v9.MenuButton, {
        as: _v12.IconButton,
        __css: _v2.secondaryButton,
        icon: (0, _v1.jsx)(_v10.ChevronDown, {}),
        bgColor: "transparent",
        ref: _v1,
        ..._v0
      });
    });
  _v0.s(["SplitButton", 0, _v15, "SplitButtonPrimary", 0, _v16, "SplitButtonSecondary", 0, _v17, "SplitButtonSecondaryMenu", 0, _v19, "SplitIconButtonPrimary", 0, _v18]);
}