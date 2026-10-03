{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = {
      MAX_CONTENT_WIDTH_1200: (0, _v1.rem)(0),
      MOBILE_X_PADDING_4: (0, _v1.rem)(4),
      MOBILE_Y_PADDING_16: (0, _v1.rem)(16),
      DESKTOP_X_PADDING_16: (0, _v1.rem)(16),
      DESKTOP_Y_PADDING_16: (0, _v1.rem)(16)
    },
    _v3 = {
      MOBILE_TITLE_36: "heading-xl",
      MOBILE_DESCRIPTION_14: "body-md",
      MOBILE_PADDING_32: (0, _v1.rem)(32),
      MOBILE_DESCRIPTION_LINES: 3,
      MOBILE_PILL_GAP_16: (0, _v1.rem)(16),
      MOBILE_MIN_HEIGHT_AUTO: "auto",
      DESKTOP_TITLE_60: "heading-3xl",
      DESKTOP_DESCRIPTION_16: "body-lg",
      DESKTOP_PADDING_48: (0, _v1.rem)(48),
      DESKTOP_DESCRIPTION_LINES: 2,
      DESKTOP_PILL_GAP_24: (0, _v1.rem)(24),
      DESKTOP_MIN_HEIGHT_480: (0, _v1.rem)(480),
      PILL_ICON_SIZE_20: (0, _v1.rem)(20)
    },
    _v4 = {
      BOTTOM_PADDING_16: (0, _v1.rem)(16),
      MOBILE_UPCOMING_X_PADDING_8: (0, _v1.rem)(8),
      DESKTOP_UPCOMING_X_PADDING_0: 0,
      ON_DEMAND_X_PADDING_0: 0
    },
    _v5 = {
      MOBILE_SCROLL_CARD_WIDTH_320: (0, _v1.rem)(320)
    },
    _v6 = {
      AVATAR_SIZE_28: (0, _v1.rem)(28)
    },
    _v7 = {
      MOBILE_TITLE_18: (0, _v1.rem)(18),
      MOBILE_DESCRIPTION_DISPLAY: "none",
      MOBILE_ACCORDION_LABEL_20: "heading-md",
      MOBILE_ACCORDION_ICON_SIZE_24: (0, _v1.rem)(24),
      MOBILE_DAY_GAP_16: "md",
      MOBILE_THUMBNAIL_WIDTH_120: (0, _v1.rem)(120),
      MOBILE_THUMBNAIL_HEIGHT_68: (0, _v1.rem)(68),
      DESKTOP_TITLE_20: "heading-md",
      DESKTOP_DESCRIPTION_DISPLAY: "block",
      DESKTOP_ACCORDION_LABEL_30: "heading-lg",
      DESKTOP_ACCORDION_ICON_SIZE_36: (0, _v1.rem)(36),
      DESKTOP_DAY_GAP_24: "lg",
      DESKTOP_THUMBNAIL_WIDTH_142: (0, _v1.rem)(142),
      DESKTOP_THUMBNAIL_HEIGHT_80: (0, _v1.rem)(80),
      ORDINAL_FONT_SIZE: "0.645em"
    },
    _v8 = {
      ICON_SIZE_24: (0, _v1.rem)(24)
    };
  _v0.s(["AGENDA_STYLES", 0, _v7, "EVENTS_GRID_STYLES", 0, _v5, "EVENTS_SECTION_STYLES", 0, _v4, "EVENT_CARD_STYLES", 0, _v6, "FAQ_STYLES", 0, _v8, "HERO_STYLES", 0, _v3, "PAGE_CONTAINER_STYLES", 0, _v2, "SECTION_ONE_COLUMN_STYLES", 0, {
    MOBILE_TOP_PADDING_16: "md",
    MOBILE_BOTTOM_PADDING_8: "sm",
    MOBILE_RIGHT_PADDING_8: "sm",
    DESKTOP_TOP_PADDING_24: "lg",
    DESKTOP_BOTTOM_PADDING_16: "md",
    DESKTOP_RIGHT_PADDING_16: "md",
    LEFT_PADDING_16: "md"
  }], 0);
  var _v9 = _v0.i(0);
  let _v10 = (0, _v9.createContext)(void 0),
    _v11 = _v10.Provider,
    _v12 = () => (0, _v9.useContext)(_v10);
  _v0.s(["MobilePreviewProvider", 0, _v11, "useIsMobilePreview", 0, _v12, "useResponsiveStylingToken", 0, () => {
    let _v0 = _v12();
    return (0, _v9.useCallback)((_v0, _v1, _v2 = "md") => !0 === _v0 ? _v0 : {
      base: _v0,
      [_v2]: _v1
    }, [_v0]);
  }], 0);
}