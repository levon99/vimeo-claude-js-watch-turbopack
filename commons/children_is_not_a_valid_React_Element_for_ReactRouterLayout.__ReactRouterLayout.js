{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  function _v6({
    children: _v0
  }) {
    let _v1 = (0, _v4.useRef)((0, _v2.createBrowserHistory)()),
      [_v2, _v3] = (0, _v4.useState)(_v1.current.location);
    return (0, _v4.useEffect)(() => _v1.current.listen(_v0 => {
      _v3(_v0);
    }), []), (0, _v1.jsx)(_v5.__RouterContext.Provider, {
      value: {
        history: _v1.current,
        location: _v2,
        match: {
          path: "/",
          url: "/",
          params: {},
          isExact: "/" === _v2.pathname
        }
      },
      children: (0, _v1.jsx)(_v5.__HistoryContext.Provider, {
        value: _v1.current,
        children: _v0
      })
    });
  }
  let _v7 = ({
      children: _v0
    }) => ((0, _v3.useRouter)(), (0, _v1.jsx)(_v6, {
      children: _v0
    })),
    _v8 = ({
      children: _v0
    }) => {
      let _v1 = (0, _v5.useRouteMatch)(),
        _v2 = (0, _v5.useHistory)(),
        _v3 = (0, _v3.useRouter)();
      (0, _v4.useEffect)(() => _v2.listen(_v0 => {
        (void 0 === _v0.state ? _v3.replace : _v3.push)(_v0.pathname + _v0.search + _v0.hash, void 0, {
          shallow: !0
        });
      }), []);
      let _v4 = _v2 && {
        ..._v2,
        location: {
          ..._v2.location,
          query: (_v2.location.search || window.location.search).substr(1).split("&").map(_v0 => _v0.split("=")).filter(([_v0]) => /\S/.test(_v0)).reduce((_v0, [_v1, _v2]) => ({
            ..._v0,
            [_v1]: _v2
          }), {})
        }
      };
      if (!(0, _v4.isValidElement)(_v0)) throw Error('"children" is not a valid React Element for ReactRouterLayout.');
      return (0, _v1.jsx)(_v1.Fragment, {
        children: (0, _v4.cloneElement)(_v0, {
          match: _v1,
          history: _v4
        })
      });
    };
  _v0.s(["ReactRouterLayout", 0, function ({
    children: _v0,
    path: _v1
  }) {
    return (0, _v1.jsx)(_v7, {
      children: (0, _v1.jsx)(_v5.Route, {
        path: _v1,
        children: (0, _v1.jsx)(_v8, {
          children: _v0
        })
      })
    });
  }]);
}