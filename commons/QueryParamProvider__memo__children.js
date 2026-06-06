{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  _v0.i(0);
  var _v4 = _v0.i(0);
  let _v5 = (0, _v3.memo)(_v0 => {
    let {
        children: _v1,
        ..._v2
      } = _v0,
      _v3 = (0, _v2.useRouter)(),
      _v4 = _v3.asPath.match(/[^?]+/),
      _v5 = _v4 ? _v4[0] : _v3.asPath,
      _v6 = (0, _v3.useMemo)(() => window.location, [_v3.asPath]),
      _v7 = (0, _v3.useMemo)(() => ({
        push: ({
          search: _v0
        }) => _v3.push({
          pathname: _v3.pathname,
          query: _v3.query
        }, {
          search: _v0,
          pathname: _v5
        }, {
          shallow: !0
        }),
        replace: ({
          search: _v0
        }) => {
          _v3.replace({
            pathname: _v3.pathname,
            query: _v3.query
          }, {
            search: _v0,
            pathname: _v5
          }, {
            shallow: !0
          });
        },
        location: _v6
      }), [_v5, _v3.pathname, _v3.query, _v6.pathname]);
    return (0, _v1.jsx)(_v4.QueryParamProvider, {
      ..._v2,
      history: _v7,
      location: _v6,
      children: _v1
    });
  });
  _v0.s(["QueryParamProvider", 0, _v5]);
}