{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  let _v5 = _v1.css`
  &::-webkit-scrollbar {
    width: 8px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb,
  &::-webkit-scrollbar-thumb:active,
  &::-webkit-scrollbar-thumb:hover {
    border-radius: 4px;
    background: ${_v4.core.color.background(900)};
  }
`;
  _v0.s(["ScrollerCSS", 0, _v5, "ScrollerSX", 0, {
    "&::-webkit-scrollbar": {
      width: "4px",
      backgroundColor: "transparent"
    },
    "&::-webkit-scrollbar-thumb, &::-webkit-scrollbar-thumb:active": {
      borderRadius: "4px",
      background: "stroke"
    },
    "&::-webkit-scrollbar-thumb:hover": {
      background: "input-stroke-hover"
    }
  }], 0);
  let _v6 = _v1.default.div.withConfig({
      displayName: "BrandFontsInspector.style__BrandFontGroupsContainer",
      componentId: "sc-95450039-0"
    })`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-height: calc(
    100vh - ${_v2.HEADER_HEIGHT + _v3.INSPECTOR_HEADER_HEIGHT + _v3.MARGIN + 86}px
  );
  margin: 0 4px;
  padding: 0 12px 0 20px;
  overflow-y: scroll;

  ${_v5};
`,
    _v7 = _v1.default.ul.withConfig({
      displayName: "BrandFontsInspector.style__FontsUnorderedListView",
      componentId: "sc-95450039-1"
    })`
  padding-left: 22px;
  list-style-type: disc;
  margin: 8px 0 0 0;
`;
  _v0.s(["BrandFontGroupsContainer", 0, _v6, "FontsUnorderedListView", 0, _v7], 0), _v0.s(["SHOW_USE_ALL_SCENES_LOCAL_STORAGE_KEY", 0, "show-use-all-scenes-alert"], 0);
}