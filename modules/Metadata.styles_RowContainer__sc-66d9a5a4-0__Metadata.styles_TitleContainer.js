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
  let _v10 = _v8.default.div.withConfig({
      displayName: "Metadata.styles__RowContainer",
      componentId: "sc-66d9a5a4-0"
    })`
  display: flex;
  width: 100%;
  flex-direction: row;
  gap: ${(0, _v7.rem)(10)};
  justify-content: space-between;
  top: ${(0, _v7.rem)(106)};
  right: ${(0, _v7.rem)(24)};
  left: ${(0, _v7.rem)(24)};
  width: auto;

  @media screen and (max-width: ${(0, _v7.rem)(_v9.BREAKPOINTS.large)}) {
    flex-direction: column;
  }

  ${({
      isMobileActive: _v0
    }) => _v0 && _v8.css`
      background: ${({
      theme: _v0
    }) => _v0.content.background};
      position: fixed;
      top: ${(0, _v7.rem)(63)};
      left: 0;
      bottom: 0;
      right: 0;
      z-index: 1000;
      padding: ${(0, _v7.rem)(16)};
    `};
`,
    _v11 = _v8.default.div.withConfig({
      displayName: "Metadata.styles__TitleContainer",
      componentId: "sc-66d9a5a4-1"
    })`
  display: flex;
  width: 100%;
  max-width: ${(0, _v7.rem)(176)};
  padding-top: ${(0, _v7.rem)(10)};

  @media screen and (max-width: ${(0, _v7.rem)(_v9.BREAKPOINTS.large)}) {
    max-width: unset;
    padding-top: 0;
  }

  ${({
      isMobileActive: _v0
    }) => _v0 && _v8.css`
      margin-bottom: ${(0, _v7.rem)(5)};
    `};
`,
    _v12 = _v8.default.div.withConfig({
      displayName: "Metadata.styles__ContentContainer",
      componentId: "sc-66d9a5a4-2"
    })`
  display: flex;
  flex-direction: column;
  min-height: ${(0, _v7.rem)(40)};
  width: 100%;

  ${({
      isMobileActive: _v0
    }) => _v0 && _v8.css`
      display: flex;
      flex: 1;
    `};
`,
    _v13 = _v8.default.div.withConfig({
      displayName: "Metadata.styles__InfoContainer",
      componentId: "sc-66d9a5a4-3"
    })`
  display: inline-block;
  margin-left: ${(0, _v7.rem)(8)};
`,
    _v14 = _v8.default.span.withConfig({
      displayName: "Metadata.styles__RequiredMark",
      componentId: "sc-66d9a5a4-4"
    })`
  font-weight: bold;
`;
  async function _v15(_v0, _v1) {
    _v0.stopPropagation();
    let _v2 = await fetch(_v1?.downloadSrc),
      _v3 = await _v2.blob(),
      _v4 = URL.createObjectURL(_v3),
      _v5 = document.createElement("a");
    _v5.href = _v4, _v5.download = "thumb.jpg", document.body.appendChild(_v5), _v5.click(), document.body.removeChild(_v5), window.URL.revokeObjectURL(_v4);
  }
  _v0.s(["MetadataRow", 0, ({
    label: _v0,
    infoText: _v1,
    children: _v2,
    required: _v3,
    isMobileActive: _v4
  }) => (0, _v1.jsxs)(_v10, {
    isMobileActive: _v4,
    children: [(0, _v1.jsxs)(_v11, {
      isMobileActive: _v4,
      children: [(0, _v1.jsxs)(_v2.Header, {
        size: "sm",
        display: "inline",
        mb: 0,
        children: [_v0, _v3 && (0, _v1.jsx)(_v14, {
          children: "*"
        })]
      }), _v1 && (0, _v1.jsx)(_v3.Tooltip, {
        label: (0, _v1.jsx)(_v5.Paragraph, {
          size: "md",
          maxWidth: (0, _v4.rem)(400),
          children: _v1
        }),
        placement: "top",
        children: (0, _v1.jsx)(_v13, {
          children: (0, _v1.jsx)(_v6.InfoCircle, {
            sx: {
              position: "relative",
              display: "flex",
              width: (0, _v4.rem)(20),
              height: (0, _v4.rem)(20),
              cursor: "pointer",
              color: "grayscale.400"
            }
          })
        })
      })]
    }), (0, _v1.jsx)(_v12, {
      isMobileActive: _v4,
      children: _v2
    })]
  })], 0), _v0.s(["getPictureIdFromUri", 0, _v0 => {
    let _v1 = Number(_v0?.split("/").pop());
    return Number.isInteger(_v1) && _v1 > 0 ? _v1 : null;
  }, "handleDownload", 0, _v15, "normalizedThumbsFunction", 0, _v0 => (_v0 ?? []).map(_v0 => {
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