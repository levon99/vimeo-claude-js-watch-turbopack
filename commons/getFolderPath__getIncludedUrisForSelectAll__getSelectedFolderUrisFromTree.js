{
  "use strict";

  let _v1 = _v0 => {
      let _v1 = _v0.metadata?.connections?.ancestorPath;
      return _v1 ? [{
        uri: _v0.uri
      }, ..._v1] : [{
        uri: _v0.uri
      }];
    },
    _v2 = _v0 => {
      let _v1 = [],
        _v2 = [_v0];
      for (; _v2.length;) {
        let _v0 = _v2.pop();
        for (let _v0 in _v0.children) _v0.children[_v0].isSelected ? _v1.push(_v0) : _v2.push(_v0.children[_v0]);
      }
      return _v1;
    },
    _v3 = (_v0, _v1) => {
      let _v2 = _v1(_v1),
        _v3 = _v2.pop(),
        _v4 = _v0;
      for (; _v3;) {
        if (!_v4.children[_v3.uri]) return null;
        _v4 = _v4.children[_v3.uri], _v3 = _v2.pop();
      }
      return _v4;
    },
    _v4 = (_v0, _v1, _v2 = !1) => {
      let _v3 = _v2 ? _v0 : JSON.parse(JSON.stringify(_v0)),
        _v4 = _v1(_v1),
        _v5 = _v4.pop(),
        _v6 = _v3;
      for (; _v5;) _v6.children[_v5.uri] || (_v6.children[_v5.uri] = {
        isSelected: !1,
        children: {}
      }), _v6 = _v6.children[_v5.uri], _v5 = _v4.pop();
      return _v6.isSelected = !0, _v6.children = {}, _v3;
    };
  _v0.s(["getFolderPath", 0, _v1, "getIncludedUrisForSelectAll", 0, (_v0, _v1) => {
    let _v2 = [],
      _v3 = [{
        node: _v0,
        underExcluded: !1
      }];
    for (; _v3.length;) {
      let {
        node: _v0,
        underExcluded: _v1
      } = _v3.pop();
      for (let _v0 in _v0.children) {
        let _v0 = _v0.children[_v0],
          _v1 = _v1 || _v1.has(_v0);
        _v0.isSelected ? _v1 && _v2.push(_v0) : _v3.push({
          node: _v0,
          underExcluded: _v1
        });
      }
    }
    return _v2;
  }, "getSelectedFolderUrisFromTree", 0, _v2, "getUnselectedUrisFromTree", 0, _v0 => {
    let _v1 = [],
      _v2 = [_v0];
    for (; _v2.length;) {
      let _v0 = _v2.pop();
      for (let _v0 in _v0.children) _v0.children[_v0].isSelected || _v1.push(_v0), _v2.push(_v0.children[_v0]);
    }
    return _v1;
  }, "hasSelectedDescendants", 0, (_v0, _v1) => {
    let _v2 = _v3(_v0, _v1);
    return null !== _v2 && !_v2.isSelected && _v2(_v2).length > 0;
  }, "isFolderIncludedInSelectAll", 0, (_v0, _v1, _v2, _v3) => {
    if (_v3?.has(_v0.uri)) return !1;
    let _v4 = _v1(_v0).slice().reverse(),
      _v5 = !0;
    for (let _v0 of _v4) {
      let {
        uri: _v0
      } = _v0;
      if (_v1.has(_v0)) {
        _v5 = !1;
        continue;
      }
      !_v5 && _v2.has(_v0) && (_v5 = !0);
    }
    return _v5;
  }, "isFolderSelected", 0, (_v0, _v1) => {
    let _v2 = _v3(_v0, _v1);
    return !!_v2?.isSelected;
  }, "selectAllFolders", 0, (_v0, _v1, _v2 = !1) => {
    let _v3 = _v2 ? _v0 : JSON.parse(JSON.stringify(_v0));
    for (let _v0 of _v1) _v3 = _v4(_v3, _v0, !0);
    return _v3;
  }, "selectFolder", 0, _v4, "unselectAllFolders", 0, () => ({
    isSelected: !1,
    children: {}
  }), "unselectFolder", 0, (_v0, _v1, _v2) => {
    let _v3 = ((_v0, _v1) => {
      let _v2 = _v1(_v1),
        _v3 = _v2.pop(),
        _v4 = _v0;
      for (; _v3 && _v4.children[_v3.uri];) {
        if (_v4.children[_v3.uri].isSelected) {
          delete _v4.children[_v3.uri];
          break;
        }
        _v4 = _v4.children[_v3.uri], _v3 = _v2.pop();
      }
      return _v0;
    })(JSON.parse(JSON.stringify(_v0)), _v1);
    for (let _v0 of _v2) _v3 = _v4(_v3, _v0, !0);
    return _v3;
  }]);
}