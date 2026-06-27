{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  _v0.s(["FilterSearch", 0, ({
    searchTerm: _v0,
    placeholderText: _v1,
    setSearchTerm: _v2
  }) => {
    let _v3 = (0, _v5.useColorModeValue)("#E2E7EC", "#44505A");
    return (0, _v1.jsxs)(_v3.InputGroup, {
      position: "sticky",
      top: "0",
      zIndex: 1,
      children: [(0, _v1.jsx)(_v4.InputLeftElement, {
        pointerEvents: "none",
        children: (0, _v1.jsx)(_v6.SearchMagnifier, {
          boxSize: "1.25rem",
          color: "text-secondary"
        })
      }), (0, _v1.jsx)(_v2.Input, {
        variant: "filled",
        size: "md",
        placeholder: _v1,
        background: _v3,
        onChange: _v0 => _v2(_v0.currentTarget.value),
        value: _v0,
        outline: "none"
      })]
    });
  }]);
}