{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  let _v7 = "rvto";
  _v0.s(["useIsReviewTourInCooldown", 0, function () {
    let _v0 = (0, _v5.useOptionalViewer)(),
      _v1 = _v0?.user?.id,
      [_v2, _v3] = (0, _v2.default)("review_tour_suppressed_until", 0),
      {
        data: _v4,
        error: _v5,
        mutate: _v6
      } = (0, _v3.useGetUserPreferences)(() => null == _v1 ? null : {
        where: {
          userId: _v1
        },
        select: [_v7]
      }),
      [_v7] = (0, _v3.usePatchUserPreferences)(),
      _v8 = (0, _v1.useRef)(new Set()),
      [_v9, _v10] = (0, _v1.useState)(() => new Set());
    !function ({
      onClose: _v0
    }) {
      let {
        registerOnClose: _v1,
        unregisterOnClose: _v2
      } = (0, _v4.useTourContext)();
      (0, _v1.useEffect)(() => {
        if (_v0) return _v1(_v0), () => _v2(_v0);
      }, [_v0, _v1, _v2]);
    }({
      onClose: (0, _v1.useCallback)((_v0, _v1) => {
        _v0 !== _v6.REVIEW_TOUR_NAME || "disabled" === _v1 || (null == _v1 ? _v3(Number.MAX_SAFE_INTEGER) : _v8.current.has(_v1) || (_v8.current.add(_v1), _v10(_v0 => {
          let _v1 = new Set(_v0);
          return _v1.add(_v1), _v1;
        }), _v6(_v0 => void 0 === _v0 ? _v0 : {
          ..._v0,
          [_v7]: !0
        }, {
          revalidate: !1
        }), _v7({
          where: {
            userId: _v1
          },
          select: [_v7],
          variables: {
            [_v7]: 1
          }
        }).then(() => {
          _v6();
        })));
      }, [_v1, _v6, _v7, _v3])
    });
    let _v11 = (0, _v1.useMemo)(() => Date.now() < _v2, [_v2]);
    return null != _v1 ? !!_v9.has(_v1) || !!_v11 || (void 0 === _v4 ? !_v5 : _v4[_v7] ?? !1) : _v11;
  }], 0);
}