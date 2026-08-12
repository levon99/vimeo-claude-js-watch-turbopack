{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  function _v8(_v0) {
    let _v1 = (0, _v4.useMultiStyleConfig)("Popover", _v0),
      {
        children: _v2,
        ..._v3
      } = (0, _v3.omitThemingProps)(_v0),
      _v4 = (0, _v5.useTheme)(),
      _v5 = (0, _v1.usePopover)({
        ..._v3,
        direction: _v4.direction
      });
    return (0, _v7.jsx)(_v2.PopoverProvider, {
      value: _v5,
      children: (0, _v7.jsx)(_v2.PopoverStylesProvider, {
        value: _v1,
        children: (0, _v6.runIfFn)(_v2, {
          isOpen: _v5.isOpen,
          onClose: _v5.onClose,
          forceUpdate: _v5.forceUpdate
        })
      })
    });
  }
  _v8.displayName = "Popover", _v0.s(["Popover", 0, _v8], 0);
  var _v9 = _v0.i(0);
  function _v10(_v0) {
    let _v1 = _v9.Children.only(_v0.children),
      {
        getTriggerProps: _v2
      } = (0, _v2.usePopoverContext)();
    return (0, _v9.cloneElement)(_v1, _v2(_v1.props, _v1.ref));
  }
  _v10.displayName = "PopoverTrigger", _v0.s(["PopoverTrigger", 0, _v10], 0);
}