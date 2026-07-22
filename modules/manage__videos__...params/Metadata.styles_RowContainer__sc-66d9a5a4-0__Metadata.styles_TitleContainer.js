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
  let _v11 = _v9.default.div.withConfig({
      displayName: "Metadata.styles__RowContainer",
      componentId: "sc-66d9a5a4-0"
    })`
  display: flex;
  width: 100%;
  flex-direction: row;
  gap: ${({
      isRedesign: _v0
    }) => (0, _v8.rem)(_v0 ? 8 : 10)};
  justify-content: space-between;
  top: ${(0, _v8.rem)(106)};
  right: ${(0, _v8.rem)(24)};
  left: ${(0, _v8.rem)(24)};
  width: auto;

  @media screen and (max-width: ${(0, _v8.rem)(_v10.BREAKPOINTS.large)}) {
    flex-direction: column;
  }

  ${({
      isMobileActive: _v0
    }) => _v0 && _v9.css`
      background: ${({
      theme: _v0
    }) => _v0.content.background};
      position: fixed;
      top: ${(0, _v8.rem)(63)};
      left: 0;
      bottom: 0;
      right: 0;
      z-index: 1000;
      padding: ${(0, _v8.rem)(16)};
    `};
`,
    _v12 = _v9.default.div.withConfig({
      displayName: "Metadata.styles__TitleContainer",
      componentId: "sc-66d9a5a4-1"
    })`
  display: flex;
  width: 100%;
  max-width: ${(0, _v8.rem)(176)};
  padding-top: ${(0, _v8.rem)(10)};

  @media screen and (max-width: ${(0, _v8.rem)(_v10.BREAKPOINTS.large)}) {
    max-width: unset;
    padding-top: 0;
  }

  ${({
      isMobileActive: _v0
    }) => _v0 && _v9.css`
      margin-bottom: ${(0, _v8.rem)(5)};
    `};
`,
    _v13 = _v9.default.div.withConfig({
      displayName: "Metadata.styles__ContentContainer",
      componentId: "sc-66d9a5a4-2"
    })`
  display: flex;
  flex-direction: column;
  min-height: ${(0, _v8.rem)(40)};
  width: 100%;

  ${({
      isMobileActive: _v0
    }) => _v0 && _v9.css`
      display: flex;
      flex: 1;
    `};
`,
    _v14 = _v9.default.div.withConfig({
      displayName: "Metadata.styles__InfoContainer",
      componentId: "sc-66d9a5a4-3"
    })`
  display: inline-block;
  margin-left: ${({
      isRedesign: _v0
    }) => (0, _v8.rem)(_v0 ? 6 : 8)};
`,
    _v15 = _v9.default.span.withConfig({
      displayName: "Metadata.styles__RequiredMark",
      componentId: "sc-66d9a5a4-4"
    })`
  font-weight: bold;
`,
    _v16 = (0, _v2.createContext)(!1);
  async function _v17(_v0, _v1) {
    _v0.stopPropagation();
    let _v2 = await fetch(_v1?.downloadSrc),
      _v3 = await _v2.blob(),
      _v4 = URL.createObjectURL(_v3),
      _v5 = document.createElement("a");
    _v5.href = _v4, _v5.download = "thumb.jpg", document.body.appendChild(_v5), _v5.click(), document.body.removeChild(_v5), window.URL.revokeObjectURL(_v4);
  }
  _v0.s(["MetadataRedesignContext", 0, _v16, "MetadataRow", 0, ({
    label: _v0,
    infoText: _v1,
    children: _v2,
    required: _v3,
    isMobileActive: _v4
  }) => {
    let _v5 = (0, _v2.useContext)(_v16);
    return (0, _v1.jsxs)(_v11, {
      isMobileActive: _v4,
      isRedesign: _v5,
      className: "notranslate",
      children: [(0, _v1.jsxs)(_v12, {
        isMobileActive: _v4,
        children: [(0, _v1.jsxs)(_v3.Header, {
          size: _v5 ? "xs" : "sm",
          display: "inline",
          mb: 0,
          children: [(0, _v1.jsx)("span", {
            translate: "no",
            children: _v0
          }), _v3 && (0, _v1.jsx)(_v15, {
            children: "*"
          })]
        }), _v1 && (0, _v1.jsx)(_v4.Tooltip, {
          label: (0, _v1.jsx)(_v6.Paragraph, {
            size: "md",
            maxWidth: (0, _v5.rem)(400),
            children: _v1
          }),
          placement: "top",
          children: (0, _v1.jsx)(_v14, {
            isRedesign: _v5,
            children: (0, _v1.jsx)(_v7.InfoCircle, {
              sx: {
                position: "relative",
                display: "flex",
                width: (0, _v5.rem)(20),
                height: (0, _v5.rem)(20),
                cursor: "pointer",
                color: "grayscale.400"
              }
            })
          })
        })]
      }), (0, _v1.jsx)(_v13, {
        isMobileActive: _v4,
        children: _v2
      })]
    });
  }], 0), _v0.s(["handleDownload", 0, _v17, "normalizedThumbsFunction", 0, _v0 => (_v0 ?? []).map(_v0 => {
    let _v1 = _v0.uri.split("/");
    return {
      id: parseInt(_v1[_v1.length - 1]) ?? 0,
      src: `${_v0?.sizes?.[0]?.link}`,
      downloadSrc: `${_v0?.baseLink}`,
      active: _v0.active,
      isBeingDeleted: !1,
      isLoading: !1
    };
  })], 0);
}