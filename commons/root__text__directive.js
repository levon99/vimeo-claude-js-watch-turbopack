{
  "use strict";

  var _v3, _v4;
  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.Doctype = _v2.CDATA = _v2.Tag = _v2.Style = _v2.Script = _v2.Comment = _v2.Directive = _v2.Text = _v2.Root = _v2.isTag = _v2.ElementType = void 0, (_v4 = _v3 = _v2.ElementType || (_v2.ElementType = {})).Root = "root", _v4.Text = "text", _v4.Directive = "directive", _v4.Comment = "comment", _v4.Script = "script", _v4.Style = "style", _v4.Tag = "tag", _v4.CDATA = "cdata", _v4.Doctype = "doctype", _v2.isTag = function (_v0) {
    return _v0.type === _v3.Tag || _v0.type === _v3.Script || _v0.type === _v3.Style;
  }, _v2.Root = _v3.Root, _v2.Text = _v3.Text, _v2.Directive = _v3.Directive, _v2.Comment = _v3.Comment, _v2.Script = _v3.Script, _v2.Style = _v3.Style, _v2.Tag = _v3.Tag, _v2.CDATA = _v3.CDATA, _v2.Doctype = _v3.Doctype;
}