{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["getCellColor", 0, (_v0, _v1, _v2) => {
    let {
      tier: _v3
    } = _v1;
    return _v2 === _v3 ? "dark" === _v0 ? "#0E1216" : "#f1f5f9" : "free" === _v3 ? "dark" === _v0 ? "none" : "#FFFFFF" : "dark" === _v0 ? "#28313A" : _v1.bokehTheme.colors.gray["50"];
  }, "getTagBackgroundColor", 0, (_v0, _v1) => _v0 && "dark" !== _v1 ? "#0E1216" : _v0 && "dark" === _v1 ? "#F9FAFB" : _v0 || "dark" !== _v1 ? "#DFE4EA" : "#28313A", "getTagColor", 0, (_v0, _v1) => _v0 && "dark" !== _v1 ? "#F9FAFB" : _v0 || "dark" === _v1 ? _v0 && "dark" === _v1 ? "#0E1216" : "#97A1AD" : "#626C76"]);
}