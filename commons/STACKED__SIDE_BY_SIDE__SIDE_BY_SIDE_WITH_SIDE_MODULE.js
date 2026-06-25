{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = "STACKED",
    _v3 = "SIDE_BY_SIDE",
    _v4 = "SIDE_BY_SIDE_WITH_SIDE_MODULE",
    _v5 = "MOBILE",
    _v6 = `
  "media media media media media media"
  "contentStack contentStack contentStack contentStack contentStack contentStack"
`;
  _v0.s(["GRID_TEMPLATE_AREAS_LOADER", 0, _v6, "createGridTemplateAreasConfig", 0, (_v0, _v1) => ({
    [_v2]: `
    "media media media media media media"
    ${_v0 ? '"contentStack contentStack contentStack contentStack comments comments"' : '"contentStack contentStack contentStack contentStack contentStack contentStack"'}
    ${_v1 ? `"playlist playlist playlist playlist ${_v0 ? "comments comments" : "playlist playlist"}"` : ""}
  `,
    [_v3]: `
    "media media media media comments comments"
    "contentStack contentStack contentStack contentStack comments comments"
    ${_v1 ? '"playlist playlist playlist playlist comments comments"' : ""}
  `,
    [_v4]: `
    "media media media media sideModule sideModule"
    "contentStack contentStack contentStack contentStack sideModule sideModule"
    ${_v0 ? '"comments comments comments comments sideModule sideModule"' : ""}
    ${_v1 ? '"playlist playlist playlist playlist sideModule sideModule"' : ""}
  `,
    [_v5]: `
    "media"
    "contentStack"
    ${_v1 ? '"playlist"' : ""}
  `
  }), "createShowcaseGridTemplateAreasConfig", 0, (_v0, _v1, _v2 = !1) => ({
    [_v2]: `
    "media media media media media media" 
    ${_v0 && !_v1 ? '"contentStack contentStack contentStack contentStack contentStack contentStack"' : ""}
    ${_v0 && _v1 ? '"contentStack contentStack contentStack contentStack comments comments"' : ""}
    ${_v1 ? '"playlist playlist playlist playlist comments comments"' : '"playlist playlist playlist playlist playlist playlist"'}
    
  `,
    [_v3]: `
    "media media media media comments comments"
    "contentStack contentStack contentStack contentStack comments comments"
    "playlist playlist playlist playlist comments comments"
  `,
    [_v4]: `
    "media media media media sideModule sideModule"
    "contentStack contentStack contentStack contentStack sideModule sideModule"
    ${_v2 ? '"comments comments comments comments sideModule sideModule"' : ""}
    "playlist playlist playlist playlist sideModule sideModule"
  `,
    [_v5]: `
    "media"
    ${_v0 ? '"contentStack"' : ""}
    "playlist"
  `
  }), "getAsideHeightStyles", 0, (_v0, _v1, _v2, _v3) => {
    let _v4 = _v2 ? 0 : _v1.NAV_HEIGHT;
    return _v3 ? {
      base: "100%",
      md: `calc(100vh - ${_v4}px - ${_v0} - ${_v1.SHOWCASE_NAV_HEIGHT}px)`,
      lg: `calc(100vh - ${_v4}px - ${_v1} - ${_v1.SHOWCASE_NAV_HEIGHT}px)`
    } : {
      base: "100%",
      md: `calc(100vh - ${_v4}px - ${_v0} - ${_v0})`,
      lg: `calc(100vh - ${_v4}px - ${_v1} - ${_v1})`
    };
  }, "getAsideTopStyles", 0, (_v0, _v1, _v2) => {
    let _v3 = _v2 ? 0 : _v1.NAV_HEIGHT;
    return {
      base: `calc(${_v3}px + ${_v0})`,
      lg: `calc(${_v3}px + ${_v1})`
    };
  }, "returnActiveGridTemplateName", 0, (_v0, _v1) => _v1 ? _v0 ? _v4 : _v3 : _v2]);
}