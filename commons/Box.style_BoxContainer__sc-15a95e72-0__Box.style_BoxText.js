{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = 9 / 16 * 100,
    _v4 = 16 / 9 * 100,
    _v5 = _v1.default.div.withConfig({
      displayName: "Box.style__BoxContainer",
      componentId: "sc-15a95e72-0"
    })`
  position: relative;
  cursor: pointer;
  min-width: 0;

  ${({
      isPaddingBottom: _v0
    }) => _v0 && _v1.css`
      padding-bottom: 4px;
    `};

  ${({
      width: _v0
    }) => _v0 && _v1.css`
      width: ${_v0}%;
    `};
`,
    _v6 = _v1.default.div.withConfig({
      displayName: "Box.style__BoxText",
      componentId: "sc-15a95e72-1"
    })`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
`,
    _v7 = _v1.default.div.withConfig({
      displayName: "Box.style__MenuButton",
      componentId: "sc-15a95e72-2"
    })`
  width: fit-content;
  display: block;
  flex-shrink: 0;
  align-self: baseline;
  opacity: 0;
`,
    _v8 = _v1.default.div.withConfig({
      displayName: "Box.style__BoxFooter",
      componentId: "sc-15a95e72-3"
    })`
  margin-top: 6px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  width: 100%;
  gap: 8px;
`,
    _v9 = _v1.default.div.withConfig({
      displayName: "Box.style__BoxContainerDnD",
      componentId: "sc-15a95e72-4"
    })`
  position: relative;
  height: 100%;

  &:hover ${_v7} {
    opacity: 1;
  }
`,
    _v10 = _v1.default.div.withConfig({
      displayName: "Box.style__MediaContainer",
      componentId: "sc-15a95e72-5"
    })`
  position: relative;
  width: 100%;
  border-radius: 8px;

  ${({
      isBokehDarkMode: _v0,
      colorTokens: _v1
    }) => _v1.backgroundColor ? _v1.css`
        background: var(--vimeo-colors-${_v1.backgroundColor});
      ` : _v1.css`
        background: ${_v0 ? "var(--vimeo-colors-fill-component)" : "var(--vimeo-colors-input-stroke)"};
      `}

  &:after {
    content: '';
    position: absolute;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: ${8}px;
    pointer-events: none;
    border: 0px solid;
    border-color: none;
  }

  ${({
      gridStyleType: _v0
    }) => {
      if (_v0 === _v2.GridStyleType.JUSTIFIED) return _v1.css`
        height: 100%;
      `;
      let _v1 = 100;
      return _v0 === _v2.GridStyleType.LANDSCAPE && (_v1 = _v3), _v0 === _v2.GridStyleType.PORTRAIT && (_v1 = _v4), _v1.css`
      height: 0;
      padding-top: ${_v1}%;
    `;
    }}

  ${({
      isActive: _v0,
      colorTokens: _v1
    }) => {
      let _v2 = _v0 ? "var(--vimeo-colors-focus-alt)" : _v1.strokeColor,
        _v3 = _v1.css`
      &:after {
        border: 2px solid ${_v1.surfaceColor};
      }

      &:before {
        content: '';
        position: absolute;
        box-sizing: content-box;
        width: 100%;
        height: 100%;
        top: -${2}px;
        left: -${2}px;
        border-radius: ${10}px;
        border: ${2}px solid ${_v2};
        pointer-events: none;
      }
    `;
      return _v1.css`
      &:hover {
        ${_v3}
      }
      ${_v0 && _v3}
    `;
    }}

  > div {
    position: absolute;
    top: 0;
    left: 0;
    border-radius: ${8}px;
    overflow: hidden;
  }
`,
    _v11 = _v1.default.div.withConfig({
      displayName: "Box.style__Overlay",
      componentId: "sc-15a95e72-6"
    })`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`,
    _v12 = _v1.default.div.withConfig({
      displayName: "Box.style__TitleContainer",
      componentId: "sc-15a95e72-7"
    })`
  display: flex;
  align-items: center;
`,
    _v13 = _v1.default.div.withConfig({
      displayName: "Box.style__Icon",
      componentId: "sc-15a95e72-8"
    })`
  display: flex;
  align-items: center;
  max-width: 14px;
  margin-right: 4px;
  padding-left: 2px;
  flex: 1;
`,
    _v14 = _v1.default.div.withConfig({
      displayName: "Box.style__AddButtonClickArea",
      componentId: "sc-15a95e72-9"
    })`
  position: absolute;
  left: 0px;
  top: 0px;
  padding-left: 4px;
  padding-top: 3px;
  z-index: 10;
  border-radius: 50%;
  cursor: pointer;
`;
  _v0.s(["AddButtonClickArea", 0, _v14, "BoxContainer", 0, _v5, "BoxContainerDnD", 0, _v9, "BoxFooter", 0, _v8, "BoxText", 0, _v6, "HOVER_BORDER", 0, 2, "Icon", 0, _v13, "MARGIN_LIST", 0, 3, "MediaContainer", 0, _v10, "Overlay", 0, _v11, "TitleContainer", 0, _v12], 0);
  var _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0);
  _v0.s(["default", 0, ({
    children: _v0,
    draggableData: _v1,
    id: _v2,
    width: _v3,
    title: _v4,
    onIsDraggingChange: _v5
  }) => {
    let {
      attributes: _v6,
      listeners: _v7,
      setNodeRef: _v8,
      isDragging: _v9
    } = (0, _v16.useDraggable)({
      id: _v2,
      disabled: !_v1,
      data: _v1
    });
    return (0, _v17.useEffect)(() => {
      _v5(_v9);
    }, [_v9, _v5]), (0, _v15.jsx)(_v5, {
      width: _v3,
      isPaddingBottom: !!_v4,
      ref: _v8,
      children: (0, _v15.jsx)(_v9, {
        ..._v6,
        ..._v7,
        "aria-disabled": !1,
        children: _v0
      })
    });
  }], 0), _v0.s(["ExpandType", 0, {
    MEDIA: "media",
    TEXT_ANIMATIONS: "textAnimations"
  }], 0);
  let _v18 = _v1.default.div.withConfig({
      displayName: "MediaView.style__MediaViewContainer",
      componentId: "sc-8a4d4f64-0"
    })`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,
    _v19 = _v1.default.video.attrs(({
      volume: _v0,
      muted: _v1
    }) => ({
      volume: _v1 ? 0 : _v0
    })).withConfig({
      displayName: "MediaView.style__VideoElement",
      componentId: "sc-8a4d4f64-1"
    })`
  ${({
      alignToCenter: _v0
    }) => {
      if (!_v0) return _v1.css`
        width: 100%;
      `;
    }}
  height: 100%;
  object-fit: cover;
  pointer-events: none;
`,
    _v20 = _v1.default.img.withConfig({
      displayName: "MediaView.style__ImageElement",
      componentId: "sc-8a4d4f64-2"
    })`
  position: absolute;
  height: 100%;
  ${({
      alignToCenter: _v0
    }) => {
      if (!_v0) return _v1.css`
        width: 100%;
        top: 0;
        left: 0;
      `;
    }}
  object-fit: contain;
  pointer-events: none;
`;
  _v0.s(["ImageElement", 0, _v20, "MediaViewContainer", 0, _v18, "VideoElement", 0, _v19], 0);
}