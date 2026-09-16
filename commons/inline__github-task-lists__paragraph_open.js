{
  var _v3 = !0,
    _v4 = !1,
    _v5 = !1;
  function _v6(_v0, _v1, _v2) {
    var _v3 = _v0.attrIndex(_v1),
      _v4 = [_v1, _v2];
    _v3 < 0 ? _v0.attrPush(_v4) : _v0.attrs[_v3] = _v4;
  }
  _v1.exports = function (_v0, _v1) {
    _v1 && (_v3 = !_v1.enabled, _v4 = !!_v1.label, _v5 = !!_v1.labelAfter), _v0.core.ruler.after("inline", "github-task-lists", function (_v0) {
      for (var _v1 = _v0.tokens, _v2 = 2; _v2 < _v1.length; _v2++) (function (_v0, _v1) {
        var _v2;
        return "inline" === _v0[_v1].type && "paragraph_open" === _v0[_v1 - 1].type && "list_item_open" === _v0[_v1 - 2].type && (0 === (_v2 = _v0[_v1]).content.indexOf("[ ] ") || 0 === _v2.content.indexOf("[x] ") || 0 === _v2.content.indexOf("[X] "));
      })(_v1, _v2) && (function (_v0, _v1) {
        if (_v0.children.unshift(function (_v0, _v1) {
          var _v2 = new _v1("html_inline", "", 0),
            _v3 = _v3 ? ' disabled="" ' : "";
          return 0 === _v0.content.indexOf("[ ] ") ? _v2.content = '<input class="task-list-item-checkbox"' + _v3 + 'type="checkbox">' : (0 === _v0.content.indexOf("[x] ") || 0 === _v0.content.indexOf("[X] ")) && (_v2.content = '<input class="task-list-item-checkbox" checked=""' + _v3 + 'type="checkbox">'), _v2;
        }(_v0, _v1)), _v0.children[1].content = _v0.children[1].content.slice(3), _v0.content = _v0.content.slice(3), _v4) if (_v5) {
          _v0.children.pop();
          var _v2 = "task-item-" + Math.ceil(0 * Math.random() - 0);
          _v0.children[0].content = _v0.children[0].content.slice(0, -1) + ' id="' + _v2 + '">', _v0.children.push(function (_v0, _v1, _v2) {
            var _v3 = new _v2("html_inline", "", 0);
            return _v3.content = '<label class="task-list-item-label" for="' + _v1 + '">' + _v0 + "</label>", _v3.attrs = [{
              for: _v1
            }], _v3;
          }(_v0.content, _v2, _v1));
        } else _v0.children.unshift(function (_v0) {
          var _v1 = new _v0("html_inline", "", 0);
          return _v1.content = "<label>", _v1;
        }(_v1)), _v0.children.push(function (_v0) {
          var _v1 = new _v0("html_inline", "", 0);
          return _v1.content = "</label>", _v1;
        }(_v1));
      }(_v1[_v2], _v0.Token), _v6(_v1[_v2 - 2], "class", "task-list-item" + (_v3 ? "" : " enabled")), _v6(_v1[function (_v0, _v1) {
        for (var _v2 = _v0[_v1].level - 1, _v3 = _v1 - 1; _v3 >= 0; _v3--) if (_v0[_v3].level === _v2) return _v3;
        return -1;
      }(_v1, _v2 - 2)], "class", "contains-task-list"));
    });
  };
}