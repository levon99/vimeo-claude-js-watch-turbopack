{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  let _v5 = _v2.default.createContext({
    called: !1,
    loading: !1,
    error: !1,
    capabilities: {
      canCreateUnlimitedDraftVideos: !1,
      canSaveDraftVideos: !1,
      hasCreation: !1,
      canUpgradeToPro: !1,
      hasPaid: !1,
      labeledCapabilities: void 0
    },
    setCapabilities: _v0 => {}
  });
  function _v6({
    children: _v0
  }) {
    let {
        capabilities: _v1,
        loading: _v2,
        error: _v3
      } = (0, _v4.useCapability)(["canUpgradeToPro", "hasPaid", "hasCreation"]),
      {
        canBrandVideo: _v4,
        labeledCapabilities: _v5
      } = (0, _v2.useContext)(_v3.MagistoSessionContext),
      [_v6, _v7] = (0, _v2.useState)(!1),
      [_v8, _v9] = (0, _v2.useState)({
        canCreateUnlimitedDraftVideos: !1,
        canSaveDraftVideos: !1,
        canUpgradeToPro: !0,
        hasPaid: !1,
        hasCreation: !0,
        labeledCapabilities: _v5
      });
    return (0, _v2.useEffect)(() => {
      void 0 !== _v1.canUpgradeToPro && void 0 !== _v1.hasPaid && void 0 !== _v4 && (_v7(!0), _v9({
        canCreateUnlimitedDraftVideos: !_v1.canUpgradeToPro,
        canSaveDraftVideos: !_v1.canUpgradeToPro,
        hasCreation: _v1.hasCreation,
        canUpgradeToPro: _v1.canUpgradeToPro,
        hasPaid: _v1.hasPaid,
        labeledCapabilities: _v5
      }));
    }, [_v1.canUpgradeToPro, _v4, _v1.hasPaid, _v5]), (0, _v1.jsx)(_v5.Provider, {
      value: {
        called: _v6,
        loading: _v2,
        error: !!_v3,
        capabilities: _v8,
        setCapabilities: _v0 => {
          _v9(_v0 => ({
            ..._v0,
            ..._v0
          }));
        }
      },
      children: _v0
    });
  }
  _v0.s(["CreationCapabilityContext", 0, _v5, "default", 0, function ({
    user: _v0,
    children: _v1
  }) {
    return _v0 ? (0, _v1.jsx)(_v6, {
      children: _v1
    }) : (0, _v1.jsx)(_v5.Provider, {
      value: {
        called: !0,
        loading: !1,
        error: !1,
        capabilities: {
          canCreateUnlimitedDraftVideos: !1,
          canSaveDraftVideos: !1,
          canUpgradeToPro: !0,
          hasPaid: !1,
          hasCreation: !0,
          labeledCapabilities: void 0
        },
        setCapabilities: _v0 => {}
      },
      children: _v1
    });
  }]);
}