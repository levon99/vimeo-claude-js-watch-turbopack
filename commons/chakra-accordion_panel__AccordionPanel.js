{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = (0, _v4.forwardRef)(function (_v0, _v1) {
      let {
          className: _v2,
          motionProps: _v3,
          ..._v4
        } = _v0,
        {
          reduceMotion: _v5
        } = (0, _v1.useAccordionContext)(),
        {
          getPanelProps: _v6,
          isOpen: _v7
        } = (0, _v2.useAccordionItemContext)(),
        _v8 = _v6(_v4, _v1),
        _v9 = (0, _v6.cx)("chakra-accordion__panel", _v2),
        _v10 = (0, _v2.useAccordionStyles)();
      _v5 || delete _v8.hidden;
      let _v11 = (0, _v7.jsx)(_v3.chakra.div, {
        ..._v8,
        __css: _v10.panel,
        className: _v9
      });
      return _v5 ? _v11 : (0, _v7.jsx)(_v5.Collapse, {
        in: _v7,
        ..._v3,
        children: _v11
      });
    });
  _v8.displayName = "AccordionPanel", _v0.s(["AccordionPanel", 0, _v8]);
}