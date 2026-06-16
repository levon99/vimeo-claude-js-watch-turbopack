{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  _v0.s(["useFirstSeenLiveModal", 0, function (_v0) {
    let _v1 = (0, _v3.useOptionalViewer)(),
      _v2 = _v1?.user?.id,
      {
        data: _v3,
        mutate: _v4
      } = (0, _v2.useGetUserPreferences)(() => _v2 ? {
        where: {
          userId: _v2
        },
        select: [_v0]
      } : null),
      [_v5] = (0, _v2.usePatchUserPreferences)(),
      [_v6, _v7] = (0, _v1.useState)(!1),
      _v8 = (0, _v1.useRef)(!1),
      _v9 = void 0 !== _v3,
      _v10 = !!_v3?.[_v0],
      _v11 = (0, _v1.useCallback)(() => {
        !_v9 || _v10 || _v8.current || _v7(!0);
      }, [_v9, _v10]),
      _v12 = (0, _v1.useRef)(null);
    (0, _v1.useEffect)(() => {
      _v12.current = () => {
        _v10 || _v8.current || !_v2 || (_v8.current = !0, _v5({
          where: {
            userId: _v2
          },
          select: [_v0],
          variables: {
            [_v0]: 1
          }
        }).then(() => _v4()));
      };
    });
    let _v13 = (0, _v1.useCallback)(() => {
        _v7(!1), _v12.current?.();
      }, []),
      _v14 = (0, _v1.useRef)(_v6);
    return (0, _v1.useEffect)(() => {
      _v14.current = _v6;
    }, [_v6]), (0, _v1.useEffect)(() => () => {
      _v14.current && _v12.current?.();
    }, []), {
      isOpen: _v6,
      show: _v11,
      acknowledge: _v13
    };
  }]);
}