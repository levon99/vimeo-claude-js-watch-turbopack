{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  let _v7 = ["/home"],
    _v8 = ["B", "KB", "MB", "GB", "TB"];
  _v0.s(["useStorageIntroModal", 0, ({
    isSuppressed: _v0 = !1
  } = {}) => {
    let _v1,
      _v2 = (0, _v3.useViewer)(),
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
      } = (() => {
        let _v0 = (0, _v3.useViewer)(),
          {
            isRepackagedFree: _v1,
            isLoading: _v2
          } = (0, _v4.useIsRepackagedFree)();
        return {
          isRepackOrCreator: _v0?.user?.account === _v2.AccountType.Creator || _v1,
          isLoading: _v2
        };
      })(),
      {
        isRepackagedFree: _v9
      } = (0, _v4.useIsRepackagedFree)(),
      {
        hasColdStorage: _v10
      } = (0, _v6.useUserHasColdStorageVideos)(),
      {
        data: _v11
      } = (0, _v5.useGetMe)(() => _v3 ? {
        select: ["uploadQuota"]
      } : null),
      _v12 = _v11?.uploadQuota?.restricted?.max,
      _v13 = _v12 && _v12 > 0 ? (_v0 => {
        let _v1 = _v0,
          _v2 = 0;
        for (; _v1 >= 0 && _v2 < _v8.length - 1; _v2++) _v1 /= 0;
        return `${Math.round(_v1)} ${_v8[_v2]}`;
      })(_v12) : "",
      _v14 = 0 !== _v12,
      _v15 = (0, _v1.useCallback)(() => {
        if (_v4) try {
          window.localStorage.setItem(_v4, "true");
        } catch {}
        _v5(_v0 => _v0 + 1);
      }, [_v4]);
    return {
      isOpen: !!(!_v0 && _v3 && _v7 && !_v8 && !_v6 && !_v10 && _v13 && (_v1 = window.location.pathname, _v7.some(_v0 => _v1 === _v0 || _v1.startsWith(`${_v0}/`)))),
      onDismiss: _v15,
      allowanceLabel: _v13,
      keepsExistingAllowance: _v14,
      isRepackFree: _v9
    };
  }], 0);
}