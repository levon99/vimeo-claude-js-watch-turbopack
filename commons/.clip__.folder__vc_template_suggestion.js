{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.getMyItemsEntityType = _v2.getVlsResultType = void 0;
  var _v3 = _v0.r(0);
  _v2.getVlsResultType = function (_v0, _v1) {
    var _v2,
      _v3 = _v3.ResultTypes.VideoLibrarySearch;
    if (_v1) return "" + _v3;
    switch (null == (_v2 = _v0[0]) ? void 0 : _v2.searchField) {
      case _v3.WidgetName.video:
        return _v3 + ".clip";
      case _v3.WidgetName.folder:
        return _v3 + ".folder";
      case _v3.WidgetName.template:
        return _v3.ResultTypes.VcTemplateSearch;
      default:
        return _v3;
    }
  }, _v2.getMyItemsEntityType = function (_v0, _v1, _v2, _v3) {
    var _v4,
      _v5 = _v0.type;
    if (_v5 === _v3.Item.Template) return "vc_template_suggestion";
    if (null == (_v4 = _v0.snippets) ? void 0 : _v4.ocr) return _v3.ResultTypes.ocrSuggestion;
    if (_v0.captionData) return _v3.ResultTypes.CcSuggestion;
    if (!_v1 && !_v2.length) return "recent_" + _v5 + "_suggestion.modified";
    if (_v3 === _v3.WidgetQualifier.in) return _v2[0] && _v2[0].qualifier === _v3.WidgetQualifier.in ? _v1 ? "user_" + _v5 + "_suggestion" : "recent_" + _v5 + "_suggestion" : _v5 + "_filter_suggestion";
    return _v2[0] && _v2[0].id === _v3.WidgetId.switch ? "team_suggestion" : _v1 ? "user_" + _v5 + "_suggestion" : "recent_" + _v5 + "_suggestion";
  };
}