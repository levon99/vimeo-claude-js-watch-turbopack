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
    _v10 = _v0.i(0);
  _v0.s(["MultilingualSelector", 0, ({
    languages: _v0,
    selectedLanguage: _v1,
    onSelectLanguage: _v2,
    isEmbeded: _v3
  }) => {
    let _v4 = _v0.reduce((_v0, _v1) => (_v0[_v1.value] = _v1.label, _v0), {}),
      _v5 = _v0.length > 1;
    return (0, _v1.jsx)(_v1.Fragment, {
      children: _v5 && (0, _v1.jsx)(_v2.Flex, {
        width: "100%",
        justifyContent: "flex-end",
        children: (0, _v1.jsxs)(_v3.Menu, {
          children: [(0, _v1.jsx)(_v4.MenuButton, {
            as: _v5.Button,
            leftIcon: (0, _v1.jsx)(_v8.GlobeAlt, {}),
            rightIcon: (0, _v1.jsx)(_v9.ChevronDownSmall, {}),
            variant: "tertiary",
            size: "xs",
            children: _v4[_v1]
          }), (0, _v1.jsx)(_v7.MenuList, {
            position: "relative",
            right: "0px",
            marginTop: "-3px",
            width: "217px",
            children: _v0.map(_v0 => {
              let _v1 = _v0.value,
                _v2 = _v0.label,
                _v3 = _v1 === _v1 ? (0, _v1.jsx)(_v10.CheckSmall, {}) : "",
                _v4 = _v4[_v1 ?? ""] || _v2;
              return (0, _v1.jsx)(_v6.MenuItem, {
                sx: _v3 ? {
                  color: "white"
                } : void 0,
                onClick: () => _v2(_v1 || "en"),
                children: (0, _v1.jsxs)(_v2.Flex, {
                  width: "100%",
                  justifyContent: "space-between",
                  alignItems: "center",
                  children: [_v4, _v3]
                })
              }, _v2);
            })
          })]
        })
      })
    });
  }]);
}