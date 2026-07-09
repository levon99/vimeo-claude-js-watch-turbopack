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
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0);
  function _v14(_v0) {
    let _v1 = _v0.split("/").pop();
    if (!_v1) throw Error(`Malformed URI: ${_v0}`);
    return parseInt(_v1, 10);
  }
  function _v15() {
    let [_v0, _v1] = (0, _v3.useState)(),
      {
        data: _v2,
        mutate: _v3
      } = (0, _v5.useGetMeVideos)({
        select: ["uri", "name"]
      }),
      _v4 = (0, _v3.useMemo)(() => _v2?.data ? _v2.data.map(_v0 => (0, _v1.jsx)(_v9.Select.Option, {
        value: _v0.uri,
        children: _v0.name
      }, `opt:${_v0.uri}`)) : [], [_v2]);
    return (0, _v3.useEffect)(() => {
      _v2 && _v1(_v14(_v2.data[0].uri));
    }, [_v2]), (0, _v1.jsxs)(_v13.SectionLayout, {
      children: [(0, _v1.jsx)(_v11.Header, {
        size: "2",
        children: "Mutation Example"
      }), (0, _v1.jsx)(_v9.Select, {
        style: {
          maxWidth: "40ch"
        },
        label: _v2?.data ? "Select a video" : "Loading videos...",
        disabled: !_v2?.data,
        onChange: function (_v0) {
          _v1(_v14(_v0.target.value));
        },
        children: _v4
      }), _v0 && (0, _v1.jsx)(_v16, {
        videoId: _v0,
        updateList: _v3
      })]
    });
  }
  let _v16 = ({
    videoId: _v0,
    updateList: _v1
  }) => {
    let {
        data: _v2
      } = (0, _v6.useGetVideo)({
        where: {
          videoId: _v0
        },
        select: ["uri", "name", "description", "pictures"]
      }),
      [_v3, _v4] = (0, _v6.usePatchVideo)();
    async function _v5(_v0) {
      _v0.preventDefault(), _v2 && (await _v3({
        where: {
          videoId: _v0
        },
        select: ["name", "uri", "description", "pictures"],
        variables: {
          name: _v6,
          description: _v8
        }
      }), _v1());
    }
    let [_v6, _v7] = (0, _v3.useState)(""),
      [_v8, _v9] = (0, _v3.useState)("");
    return ((0, _v3.useEffect)(() => {
      _v2 && (_v7(_v2.name), _v9(_v2.description ?? ""));
    }, [_v2]), _v2) ? (0, _v1.jsxs)(_v22, {
      onSubmit: _v5,
      children: [(0, _v1.jsx)(_v19, {
        children: (0, _v1.jsx)(_v18, {
          children: (0, _v1.jsx)(_v17, {
            srcSet: _v2.pictures?.sizes.map(_v0 => `${_v0.link} ${_v0.width}w`).join(", ")
          })
        })
      }), (0, _v1.jsxs)(_v21, {
        children: [(0, _v1.jsx)(_v8.Input, {
          label: "Name",
          value: _v6,
          onChange: _v0 => _v7(_v0.target.value)
        }), (0, _v1.jsx)(_v10.TextArea, {
          label: "Description",
          value: _v8 ?? "",
          onChange: _v0 => _v9(_v0.target.value)
        }), (0, _v1.jsx)(_v20, {
          children: (0, _v1.jsx)(_v7.Button, {
            disabled: _v4.loading,
            children: "Save"
          })
        })]
      })]
    }) : (0, _v1.jsx)("p", {
      children: "Loading..."
    });
  };
  _v15.getLayout = (_v0, _v1) => (0, _v1.jsxs)(_v1.Fragment, {
    children: [(0, _v1.jsx)(_v12.HeaderLayout, {
      ..._v1
    }), (0, _v1.jsxs)(_v13.PageLayout, {
      children: [(0, _v1.jsx)(_v13.Sidebar, {
        ..._v1
      }), (0, _v1.jsx)(_v13.Main, {
        children: _v0
      })]
    })]
  }), (0, _v4.withPageSetup)(async () => ({
    props: {
      layoutOptions: {
        globalSearch: !1,
        ribbon: !0
      },
      activePath: "/demo/gctl/mutation"
    }
  }), {
    staffOnly: !0
  });
  var _v17 = (0, _v2.default)("img").withConfig({
      displayName: "mutation___StyledImg",
      componentId: "sc-bc537255-0"
    })`position: absolute; width: 100%; height: 100%; object-fit: cover; border-radius: 50%;`,
    _v18 = (0, _v2.default)("span").withConfig({
      displayName: "mutation___StyledSpan",
      componentId: "sc-bc537255-1"
    })`display: block; position: relative; width: 100%; height: 0; padding-bottom: 100%;`,
    _v19 = (0, _v2.default)("div").withConfig({
      displayName: "mutation___StyledDiv",
      componentId: "sc-bc537255-2"
    })`flex-basis: 12rem; flex-shrink: 1; display: flex; align-items: center;`,
    _v20 = (0, _v2.default)("div").withConfig({
      displayName: "mutation___StyledDiv2",
      componentId: "sc-bc537255-3"
    })`display: flex; margin-top: 1rem; gap: 1rem;`,
    _v21 = (0, _v2.default)("div").withConfig({
      displayName: "mutation___StyledDiv3",
      componentId: "sc-bc537255-4"
    })`display: flex; flex-grow: 1; flex-flow: column; gap: 0.5rem;`,
    _v22 = (0, _v2.default)("form").withConfig({
      displayName: "mutation___StyledForm",
      componentId: "sc-bc537255-5"
    })`display: flex; gap: 2rem; margin-top: 2rem; max-width: 80ch; align-self: stretch;`;
  _v0.s(["__N_SSP", 0, !0, "default", 0, _v15], 0);
}