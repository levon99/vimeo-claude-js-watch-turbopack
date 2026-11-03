{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  function _v3(_v0) {
    let _v1 = _v2.Children.only(_v0.children),
      {
        getAnchorProps: _v2
      } = (0, _v1.usePopoverContext)();
    return (0, _v2.cloneElement)(_v1, _v2(_v1.props, _v1.ref));
  }
  _v3.displayName = "PopoverAnchor", _v0.s(["PopoverAnchor", 0, _v3]);
}