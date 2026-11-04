{
  "use strict";

  function _v1(_v0) {
    return !!_v0 && "root" !== _v0 && !!_v0?.metadata;
  }
  function _v2(_v0) {
    let _v1 = _v0[0]?.parentFolder?.uri;
    return void 0 !== _v1 && _v0.every(_v0 => _v0.parentFolder?.uri === _v1);
  }
  function _v3(_v0) {
    return _v0[0]?.type === "folder";
  }
  function _v4(_v0, _v1) {
    let _v2 = _v1?.metadata?.connections?.ancestorPath || [];
    return !!_v2.length && _v2.some(_v0 => _v0.uri === _v0.uri);
  }
  _v0.s(["isFullFolder", 0, _v1], 0), _v0.s(["findLibraryCrumbIndex", 0, function (_v0) {
    let _v1 = _v0.findIndex((_v0, _v1) => _v1 > 0 && void 0 !== _v0 && _v0.slice(0, _v1).every(_v0 => void 0 === _v0));
    return -1 === _v1 ? void 0 : _v1;
  }, "getBreadcrumbAncestorPath", 0, function (_v0) {
    return _v0 && "root" !== _v0 ? _v1(_v0) ? [...(_v0.metadata.connections.ancestorPath ?? [])] : _v0.breadcrumbAncestorPath ? [..._v0.breadcrumbAncestorPath] : [] : [];
  }, "getCrumbKey", 0, function (_v0, _v1) {
    let {
        destination: _v2
      } = _v0,
      _v3 = _v2 && "root" !== _v2 ? _v2.uri : void 0;
    return `${_v3 ?? _v0.label}-${_v1}`;
  }, "getSelectionFolderURI", 0, function (_v0) {
    let _v1 = _v0[0]?.parentFolder?.uri;
    return void 0 !== _v1 && _v2(_v0) ? _v1 : void 0;
  }, "getVisibleCrumbCandidates", 0, function ({
    crumbCount: _v0,
    libraryCrumbIndex: _v1
  }) {
    if (_v0 <= 0) return {
      candidates: [],
      minimalCandidateIndex: 0
    };
    let _v2 = _v0 - 1,
      _v3 = new Set([0, _v2]);
    if (void 0 !== _v1 && _v1 > 0 && _v1 < _v2) for (let _v0 = 0; _v0 <= _v1; _v0 += 1) _v3.add(_v0);
    let _v4 = [..._v3].sort((_v0, _v1) => _v0 - _v1),
      _v5 = [];
    for (let _v0 = _v2 - 1; _v0 > 0; _v0 -= 1) _v3.has(_v0) || _v5.push(_v0);
    let _v6 = [_v4];
    for (let _v0 = 1; _v0 <= _v5.length; _v0 += 1) _v6.push([..._v4, ..._v5.slice(0, _v0)].sort((_v0, _v1) => _v0 - _v1));
    return {
      candidates: _v6.map(_v0 => {
        let _v1 = new Set(_v0);
        return {
          condensedIndexes: Array.from({
            length: _v0
          }, (_v0, _v1) => _v1).filter(_v0 => !_v1.has(_v0)),
          visibleIndexes: _v0
        };
      }),
      minimalCandidateIndex: 0
    };
  }, "isAncestorOf", 0, _v4, "isFolderMove", 0, _v3, "isMoveValid", 0, function ({
    isTeamOwner: _v0 = !1,
    activeFolderURI: _v1,
    canCreateRootFolders: _v2,
    isMovingBetweenWorkspaces: _v3 = !1,
    items: _v4,
    moveContentPrivacy: _v5,
    selectedDestination: _v6
  }) {
    return !!_v6 && ("root" === _v6 ? function ({
      canCreateRootFolders: _v0,
      isMovingBetweenWorkspaces: _v1 = !1,
      items: _v2
    }) {
      return !!_v0 && (!!_v1 || _v2(_v2));
    }({
      canCreateRootFolders: _v2,
      isMovingBetweenWorkspaces: _v3,
      items: _v4
    }) : function ({
      isTeamOwner: _v0 = !1,
      activeFolderURI: _v1,
      items: _v2,
      moveContentPrivacy: _v3,
      selectedDestination: _v4
    }) {
      return !!_v1(_v4) && _v1 !== _v4.uri && (_v4?.isPrivateToUser && "private" !== _v3 ? _v0 : _v3(_v2) ? !(_v4.uri === _v2[0]?.parentFolder?.uri || _v4(_v2[0], _v4)) && !!_v4?.metadata?.interactions?.addSubfolder?.canAddSubfolders : !!_v4?.metadata?.interactions?.edit);
    }({
      isTeamOwner: _v0,
      activeFolderURI: _v1,
      items: _v4,
      moveContentPrivacy: _v5,
      selectedDestination: _v6
    }));
  }, "isTeamDestination", 0, function (_v0) {
    return !!_v0 && ("root" === _v0 || !_v0?.isPrivateToUser);
  }, "resolveInitialDestination", 0, function ({
    initialDestination: _v0,
    items: _v1
  }) {
    if (void 0 !== _v0) return _v0;
    let _v2 = _v1[0]?.parentFolder;
    return _v2?.uri ? {
      isPrivateToUser: !!_v2.isPrivateToUser,
      name: "",
      uri: _v2.uri
    } : "root";
  }, "truncateCrumbLabel", 0, function (_v0, _v1 = 16) {
    return _v0.length > _v1 ? `${_v0.slice(0, _v1)}…` : _v0;
  }], 0);
}