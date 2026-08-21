{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0);
  function _v11() {
    let [_v0, _v1] = (0, _v2.useState)(!0),
      _v2 = (0, _v2.useContext)(_v8.ViewerContext),
      {
        data: _v3
      } = (0, _v4.useGetUserVideos)(() => !_v2?.user || _v0 ? null : {
        where: {
          userId: _v2.user.id
        },
        select: ["uri", "name", "description", "pictures", "createdTime"]
      });
    return (0, _v1.jsxs)("div", {
      children: [(0, _v1.jsx)(_v6.Header, {
        size: "2",
        children: "Conditional Query Example"
      }), (0, _v1.jsx)(_v5.Button, {
        disabled: !_v0,
        onClick: () => _v1(!1),
        children: "Unblock call"
      }), !_v3 && (0, _v1.jsx)("p", {
        children: "Waiting for call"
      }), _v3 && !_v3.data && (0, _v1.jsx)("p", {
        children: "Loading..."
      }), (0, _v1.jsx)(_v9.List, {
        children: _v3?.data?.map(_v0 => (0, _v1.jsxs)(_v9.ListItem, {
          children: [(0, _v1.jsx)(_v6.Header, {
            size: "5",
            style: {
              gridArea: "t",
              margin: 0,
              padding: 0
            },
            children: _v0.name
          }), (0, _v1.jsxs)(_v9.ListItemDescription, {
            children: [(0, _v1.jsx)(_v9.Muted, {
              children: new Date(_v0.createdTime).toLocaleDateString("en")
            }), (0, _v1.jsx)("p", {
              children: (0, _v10.truncate)(_v0.description ?? void 0, 30)
            })]
          }), (0, _v1.jsx)(_v9.Thumbnail, {
            srcSet: _v0.pictures?.sizes?.map(_v0 => `${_v0.link} ${_v0.width}w`).join(", ")
          })]
        }, _v0.uri))
      })]
    });
  }
  (0, _v3.withPageSetup)({
    staffOnly: !0
  }), _v11.getLayout = (_v0, _v1) => (0, _v1.jsxs)(_v1.Fragment, {
    children: [(0, _v1.jsx)(_v7.HeaderLayout, {
      ..._v1
    }), (0, _v1.jsxs)(_v9.PageLayout, {
      children: [(0, _v1.jsx)(_v9.Sidebar, {
        ..._v1
      }), (0, _v1.jsx)(_v9.Main, {
        children: _v0
      })]
    })]
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v11], 0);
}