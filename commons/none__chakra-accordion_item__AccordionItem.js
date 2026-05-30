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
          children: _v2,
          className: _v3
        } = _v0,
        {
          htmlProps: _v4,
          ..._v5
        } = (0, _v1.useAccordionItem)(_v0),
        _v6 = {
          ...(0, _v2.useAccordionStyles)().container,
          overflowAnchor: "none"
        },
        _v7 = (0, _v6.useMemo)(() => _v5, [_v5]);
      return (0, _v7.jsx)(_v2.AccordionItemProvider, {
        value: _v7,
        children: (0, _v7.jsx)(_v3.chakra.div, {
          ref: _v1,
          ..._v4,
          className: (0, _v5.cx)("chakra-accordion__item", _v3),
          __css: _v6,
          children: "function" == typeof _v2 ? _v2({
            isExpanded: !!_v5.isOpen,
            isDisabled: !!_v5.isDisabled
          }) : _v2
        })
      });
    });
  _v8.displayName = "AccordionItem", _v0.s(["AccordionItem", 0, _v8]);
}