{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  _v0.s(["AddToFolderModalBodyHeader", 0, () => {
    let _v0 = (0, _v4.getTranslations)();
    return (0, _v1.jsxs)(_v2.HStack, {
      gap: "xs",
      pb: "sm",
      children: [(0, _v1.jsx)(_v3.Text, {
        variant: "heading-xs",
        children: _v0.SelectFolders
      }), (0, _v1.jsxs)(_v3.Text, {
        color: "text-secondary",
        variant: "heading-xs",
        children: ["(", _v0.Optional, ")"]
      })]
    });
  }]);
}