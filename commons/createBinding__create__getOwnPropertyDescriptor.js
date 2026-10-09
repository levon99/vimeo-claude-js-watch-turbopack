{
  "use strict";

  var _v3 = _v0.e && _v0.e.__createBinding || (Object.create ? function (_v0, _v1, _v2, _v3) {
      void 0 === _v3 && (_v3 = _v2);
      var _v4 = Object.getOwnPropertyDescriptor(_v1, _v2);
      (!_v4 || ("get" in _v4 ? !_v1.__esModule : _v4.writable || _v4.configurable)) && (_v4 = {
        enumerable: !0,
        get: function () {
          return _v1[_v2];
        }
      }), Object.defineProperty(_v0, _v3, _v4);
    } : function (_v0, _v1, _v2, _v3) {
      void 0 === _v3 && (_v3 = _v2), _v0[_v3] = _v1[_v2];
    }),
    _v4 = _v0.e && _v0.e.__exportStar || function (_v0, _v1) {
      for (var _v2 in _v0) "default" === _v2 || Object.prototype.hasOwnProperty.call(_v1, _v2) || _v3(_v1, _v0, _v2);
    };
  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.DomHandler = void 0;
  var _v5 = _v0.r(0),
    _v6 = _v0.r(0);
  _v4(_v0.r(0), _v2);
  var _v7 = {
      withStartIndices: !1,
      withEndIndices: !1,
      xmlMode: !1
    },
    _v8 = function () {
      function _v0(_v0, _v1, _v2) {
        this.dom = [], this.root = new _v6.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null, "function" == typeof _v1 && (_v2 = _v1, _v1 = _v7), "object" == typeof _v0 && (_v1 = _v0, _v0 = void 0), this.callback = null != _v0 ? _v0 : null, this.options = null != _v1 ? _v1 : _v7, this.elementCB = null != _v2 ? _v2 : null;
      }
      return _v0.prototype.onparserinit = function (_v0) {
        this.parser = _v0;
      }, _v0.prototype.onreset = function () {
        this.dom = [], this.root = new _v6.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null;
      }, _v0.prototype.onend = function () {
        this.done || (this.done = !0, this.parser = null, this.handleCallback(null));
      }, _v0.prototype.onerror = function (_v0) {
        this.handleCallback(_v0);
      }, _v0.prototype.onclosetag = function () {
        this.lastNode = null;
        var _v0 = this.tagStack.pop();
        this.options.withEndIndices && (_v0.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(_v0);
      }, _v0.prototype.onopentag = function (_v0, _v1) {
        var _v2 = this.options.xmlMode ? _v5.ElementType.Tag : void 0,
          _v3 = new _v6.Element(_v0, _v1, void 0, _v2);
        this.addNode(_v3), this.tagStack.push(_v3);
      }, _v0.prototype.ontext = function (_v0) {
        var _v1 = this.lastNode;
        if (_v1 && _v1.type === _v5.ElementType.Text) _v1.data += _v0, this.options.withEndIndices && (_v1.endIndex = this.parser.endIndex);else {
          var _v2 = new _v6.Text(_v0);
          this.addNode(_v2), this.lastNode = _v2;
        }
      }, _v0.prototype.oncomment = function (_v0) {
        if (this.lastNode && this.lastNode.type === _v5.ElementType.Comment) {
          this.lastNode.data += _v0;
          return;
        }
        var _v1 = new _v6.Comment(_v0);
        this.addNode(_v1), this.lastNode = _v1;
      }, _v0.prototype.oncommentend = function () {
        this.lastNode = null;
      }, _v0.prototype.oncdatastart = function () {
        var _v0 = new _v6.Text(""),
          _v1 = new _v6.CDATA([_v0]);
        this.addNode(_v1), _v0.parent = _v1, this.lastNode = _v0;
      }, _v0.prototype.oncdataend = function () {
        this.lastNode = null;
      }, _v0.prototype.onprocessinginstruction = function (_v0, _v1) {
        var _v2 = new _v6.ProcessingInstruction(_v0, _v1);
        this.addNode(_v2);
      }, _v0.prototype.handleCallback = function (_v0) {
        if ("function" == typeof this.callback) this.callback(_v0, this.dom);else if (_v0) throw _v0;
      }, _v0.prototype.addNode = function (_v0) {
        var _v1 = this.tagStack[this.tagStack.length - 1],
          _v2 = _v1.children[_v1.children.length - 1];
        this.options.withStartIndices && (_v0.startIndex = this.parser.startIndex), this.options.withEndIndices && (_v0.endIndex = this.parser.endIndex), _v1.children.push(_v0), _v2 && (_v0.prev = _v2, _v2.next = _v0), _v0.parent = _v1, this.lastNode = null;
      }, _v0;
    }();
  _v2.DomHandler = _v8, _v2.default = _v8;
}