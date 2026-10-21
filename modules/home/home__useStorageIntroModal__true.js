{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  let _v9 = ["/home"];
  _v0.s(["useStorageIntroModal", 0, ({
    isSuppressed: _v0 = !1
  } = {}) => {
    let _v1,
      _v2 = (0, _v6.useViewer)(),
      _v3 = _v2?.user?.id ?? null,
      _v4 = _v3 ? `storage-intro-dismissed-${_v3}` : null,
      [, _v5] = (0, _v1.useState)(0),
      _v6 = !1;
    if (_v4 && 1) try {
      _v6 = "true" === window.localStorage.getItem(_v4);
    } catch {
      _v6 = !1;
    }
    let {
        isRepackOrCreator: _v7,
        isLoading: _v8
      } = (0, _v2.useIsRepackOrCreator)(),
      {
        isRepackagedFree: _v9
      } = (0, _v3.useIsRepackagedFree)(),
      {
        isRepackagedFreeInPaidTeam: _v10
      } = (0, _v4.useIsRepackagedFreeInPaidTeam)(),
      [_v11, _v12] = (0, _v1.useState)(!1);
    (0, _v1.useEffect)(() => {
      let _v0 = () => _v12(!0),
        _v1 = () => _v12(!1);
      return window.addEventListener(_v5.MANAGED_STORAGE_INTRO_MODAL_FORCE_OPEN_EVENT, _v0), window.addEventListener(_v5.MANAGED_STORAGE_INTRO_MODAL_CLOSE_EVENT, _v1), () => {
        window.removeEventListener(_v5.MANAGED_STORAGE_INTRO_MODAL_FORCE_OPEN_EVENT, _v0), window.removeEventListener(_v5.MANAGED_STORAGE_INTRO_MODAL_CLOSE_EVENT, _v1);
      };
    }, []);
    let {
        hasColdStorage: _v13
      } = (0, _v8.useUserHasColdStorageVideos)(),
      {
        maxBytes: _v14,
        allowanceLabel: _v15
      } = (0, _v7.useManagedStorageAllowance)(),
      _v16 = (0, _v1.useCallback)(() => {
        if (_v12(!1), window.dispatchEvent(new Event(_v5.MANAGED_STORAGE_INTRO_MODAL_CLOSE_EVENT)), _v4) try {
          window.localStorage.setItem(_v4, "true");
        } catch {}
        _v5(_v0 => _v0 + 1);
      }, [_v4]);
    return {
      isOpen: _v11 ? !!(_v3 && _v15) : !!(!_v0 && _v3 && _v7 && !_v8 && !_v10 && !_v6 && !_v13 && _v15 && (_v1 = window.location.pathname, _v9.some(_v0 => _v1 === _v0 || _v1.startsWith(`${_v0}/`)))),
      onDismiss: _v16,
      allowanceLabel: _v15,
      keepsExistingAllowance: 0 !== _v14,
      isRepackFree: _v9,
      isForceOpened: _v11
    };
  }]);
}