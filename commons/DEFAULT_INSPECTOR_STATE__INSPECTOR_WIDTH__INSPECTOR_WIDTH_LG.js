{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = {
      [_v2.InspectorType.MEDIA]: {
        tab: _v2.MediaInspectorTabType.UPLOADS
      },
      [_v2.InspectorType.TEMPLATES]: {
        tab: _v2.TemplatesInspectorTabType.LIBRARY
      },
      [_v2.InspectorType.GRAPHICS]: {},
      [_v2.InspectorType.TEXT_ADD]: {},
      [_v2.InspectorType.TEXT_EDIT]: {},
      [_v2.InspectorType.BUTTON_TEXT_EDIT]: {},
      [_v2.InspectorType.MUSIC]: {
        tab: _v2.MusicInspectorTabType.ALL_MUSIC
      },
      [_v2.InspectorType.OVERLAYS]: {
        tab: _v2.OverlaysInspectorTabType.LIBRARY
      },
      [_v2.InspectorType.IFRAMES]: {},
      [_v2.InspectorType.HOTSPOTS]: {
        tab: _v2.HotspotInspectorTabType.GRAPHIC
      },
      [_v2.InspectorType.HOTSPOTS_SETTINGS]: {},
      [_v2.InspectorType.POLLS]: {},
      [_v2.InspectorType.POLL_EDIT]: {},
      [_v2.InspectorType.COLOR_PALETTE]: {},
      [_v2.InspectorType.FONT_EDIT]: {},
      [_v2.InspectorType.POLL_FONT_EDIT]: {},
      [_v2.InspectorType.BUTTON_FONT_EDIT]: {},
      [_v2.InspectorType.BUTTON_TEXT_ADD]: {},
      [_v2.InspectorType.SHAPES]: {},
      [_v2.InspectorType.TEXT_ANIMATIONS]: {},
      [_v2.InspectorType.MEDIA_ANIMATIONS]: {},
      [_v2.InspectorType.TRANSCRIPT]: {},
      [_v2.InspectorType.BRAND_KIT]: {},
      [_v2.InspectorType.BRAND_LOGOS]: {
        selectedBrandKit: null,
        deletedLogoUris: []
      },
      [_v2.InspectorType.BRAND_COLORS]: {},
      [_v2.InspectorType.BRAND_FONTS]: {},
      [_v2.InspectorType.BRAND_INTRO]: {},
      [_v2.InspectorType.BRAND_OUTRO]: {},
      [_v2.InspectorType.ADD_BRAND_FONT]: {},
      [_v2.InspectorType.MEDIA_TRANSITIONS]: {},
      [_v2.InspectorType.SCORECARD]: {}
    },
    _v4 = {
      inspectorsHistory: [],
      isDraggingFromInspector: !1,
      inspectorWidth: _v1.default.isShopifyUser ? 370 : 340,
      initialInspectorWidth: 340,
      inspectorsData: _v3,
      isOpen: !0,
      defaultInspector: _v2.InspectorType.MEDIA
    };
  _v0.s(["DEFAULT_INSPECTOR_STATE", 0, _v4, "INSPECTOR_WIDTH", 0, 340, "INSPECTOR_WIDTH_LG", 0, 370]);
}