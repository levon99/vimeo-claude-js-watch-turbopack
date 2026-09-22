{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  class _v6 {
    canDrop() {
      let _v0 = this.spec,
        _v1 = this.monitor;
      return !_v0.canDrop || _v0.canDrop(_v1.getItem(), _v1);
    }
    hover() {
      let _v0 = this.spec,
        _v1 = this.monitor;
      _v0.hover && _v0.hover(_v1.getItem(), _v1);
    }
    drop() {
      let _v0 = this.spec,
        _v1 = this.monitor;
      if (_v0.drop) return _v0.drop(_v1.getItem(), _v1);
    }
    constructor(_v0, _v1) {
      this.spec = _v0, this.monitor = _v1;
    }
  }
  _v0.s(["useRegisteredDropTarget", 0, function (_v0, _v1, _v2) {
    let _v3,
      _v4 = (0, _v2.useDragDropManager)(),
      _v5 = (_v3 = (0, _v5.useMemo)(() => new _v6(_v0, _v1), [_v1]), (0, _v5.useEffect)(() => {
        _v3.spec = _v0;
      }, [_v0]), _v3),
      _v6 = function (_v0) {
        let {
          accept: _v1
        } = _v0;
        return (0, _v5.useMemo)(() => ((0, _v4.invariant)(null != _v0.accept, "accept must be defined"), Array.isArray(_v1) ? _v1 : [_v1]), [_v1]);
      }(_v0);
    (0, _v3.useIsomorphicLayoutEffect)(function () {
      let [_v0, _v1] = (0, _v1.registerTarget)(_v6, _v5, _v4);
      return _v1.receiveHandlerId(_v0), _v2.receiveHandlerId(_v0), _v1;
    }, [_v4, _v1, _v5, _v2, _v6.map(_v0 => _v0.toString()).join("|")]);
  }], 0);
}