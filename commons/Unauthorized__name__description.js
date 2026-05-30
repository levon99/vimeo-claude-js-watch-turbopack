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
    _v9 = _v0.i(0);
  function _v10() {
    let _v0 = (0, _v2.useContext)(_v7.ViewerContext);
    return (0, _v2.useMemo)(() => _v0?.user ? (0, _v1.jsx)(_v11, {
      userId: _v0.user.id
    }) : (0, _v1.jsx)(_v1.Fragment, {
      children: "Unauthorized"
    }), [_v0?.user]);
  }
  let _v11 = ({
    userId: _v0
  }) => {
    let {
      data: _v1
    } = (0, _v4.useGetUserVideos)({
      where: {
        userId: _v0
      },
      select: ["uri", "name", "description", "pictures", "createdTime"]
    });
    return (0, _v1.jsxs)(_v8.SectionLayout, {
      children: [(0, _v1.jsx)(_v5.Header, {
        size: "2",
        children: "Query Example"
      }), (0, _v1.jsx)("p", {
        children: "Fetch videos for a user."
      }), !_v1 && (0, _v1.jsx)("p", {
        children: "Loading..."
      }), (0, _v1.jsx)(_v8.List, {
        children: _v1?.data.map(_v0 => (0, _v1.jsxs)(_v8.ListItem, {
          children: [(0, _v1.jsx)(_v5.Header, {
            size: "5",
            style: {
              gridArea: "t",
              margin: 0,
              padding: 0
            },
            children: _v0.name
          }), (0, _v1.jsxs)(_v8.ListItemDescription, {
            children: [(0, _v1.jsx)(_v8.Muted, {
              children: new Date(_v0.createdTime).toLocaleDateString("en")
            }), (0, _v1.jsx)("p", {
              children: (0, _v9.truncate)(_v0.description ?? void 0, 30)
            })]
          }), (0, _v1.jsx)(_v8.Thumbnail, {
            srcSet: _v0.pictures?.sizes?.map(_v0 => `${_v0.link} ${_v0.width}w`).join(", ")
          })]
        }, _v0.uri))
      })]
    });
  };
  _v10.getLayout = (_v0, _v1) => (0, _v1.jsxs)(_v1.Fragment, {
    children: [(0, _v1.jsx)(_v6.HeaderLayout, {
      ..._v1
    }), (0, _v1.jsxs)(_v8.PageLayout, {
      children: [(0, _v1.jsx)(_v8.Sidebar, {
        ..._v1
      }), (0, _v1.jsx)(_v8.Main, {
        children: _v0
      })]
    })]
  }), (0, _v3.withPageSetup)(async () => ({
    props: {
      layoutOptions: {
        globalSearch: !1,
        ribbon: !0
      },
      activePath: "/demo/gctl/query"
    }
  }), {
    staffOnly: !0
  }), _v0.s(["default", 0, _v10]);
}