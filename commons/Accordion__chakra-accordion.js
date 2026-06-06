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
    _v10 = (0, _v4.forwardRef)(function ({
      children: _v0,
      reduceMotion: _v1,
      ..._v2
    }, _v3) {
      let _v4 = (0, _v6.useMultiStyleConfig)("Accordion", _v2),
        _v5 = (0, _v5.omitThemingProps)(_v2),
        {
          htmlProps: _v6,
          descendants: _v7,
          ..._v8
        } = (0, _v1.useAccordion)(_v5),
        _v9 = (0, _v8.useMemo)(() => ({
          ..._v8,
          reduceMotion: !!_v1
        }), [_v8, _v1]);
      return (0, _v9.jsx)(_v2.AccordionDescendantsProvider, {
        value: _v7,
        children: (0, _v9.jsx)(_v1.AccordionProvider, {
          value: _v9,
          children: (0, _v9.jsx)(_v2.AccordionStylesProvider, {
            value: _v4,
            children: (0, _v9.jsx)(_v3.chakra.div, {
              ref: _v3,
              ..._v6,
              className: (0, _v7.cx)("chakra-accordion", _v2.className),
              __css: _v4.root,
              children: _v0
            })
          })
        })
      });
    });
  _v10.displayName = "Accordion", _v0.s(["Accordion", 0, _v10]);
}