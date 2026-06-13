{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = {
      width: (0, _v1.rem)(288),
      position: "relative"
    },
    _v3 = {
      position: "relative",
      display: "flex",
      flexGrow: 1,
      flexDirection: "column",
      rowGap: (0, _v1.rem)(16),
      marginTop: (0, _v1.rem)(16),
      width: "100%"
    };
  _v0.s(["TABS_STYLES", 0, {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  }, "TAB_LIST_COLUMN_FULL_ITEM_STYLE", 0, _v2, "TAB_LIST_COLUMN_ROW_ITEM_STYLE", 0, {
    width: "100%",
    position: "relative"
  }, "TAB_PANELS_STYLES", 0, {
    display: "flex",
    flexGrow: 1
  }, "TAB_PANEL_STYLES", 0, _v3, "TOOL_TAB_ITEM_STYLE", 0, {
    display: "flex",
    flexDirection: "column",
    flexBasis: 0,
    flexGrow: 1,
    maxWidth: "100%",
    maxHeight: "100%",
    overflowY: "visible"
  }, "createTabListColumnHalfItemStyle", 0, function ({
    withBorder: _v0 = !0
  } = {}) {
    return {
      overflow: "hidden",
      width: (0, _v1.rem)(140),
      height: (0, _v1.rem)(79),
      boxSizing: "border-box",
      position: "relative",
      transitionDuration: "0.5s",
      borderRadius: (0, _v1.rem)(8),
      border: "1px solid",
      borderColor: _v0 ? "stroke" : "transparent"
    };
  }, "createTabListColumnStyle", 0, function (_v0 = !0) {
    return {
      width: "100%",
      display: "flex",
      flexWrap: "wrap",
      flexGrow: 1,
      alignContent: "flex-start",
      gap: `${(0, _v1.rem)(8)} ${(0, _v1.rem)(8)}`,
      ...(_v0 ? {
        "& > :last-child": {
          marginBottom: (0, _v1.rem)(16)
        }
      } : {})
    };
  }, "createTabListScrollStyle", 0, function ({
    fullWidth: _v0 = !1,
    position: _v1 = "relative"
  } = {}) {
    return {
      position: _v1,
      overflowY: "auto",
      overflowX: "hidden",
      display: "flex",
      flexDirection: "column",
      flexGrow: 1,
      height: 0,
      ...(_v0 ? {
        width: "100%"
      } : {
        marginRight: (0, _v1.rem)(-16)
      })
    };
  }, "createTabWrapperStyle", 0, function ({
    withScroll: _v0 = !1
  } = {}) {
    return {
      display: "flex",
      flexDirection: "column",
      flexBasis: 0,
      flexGrow: 1,
      maxWidth: "100%",
      padding: 0,
      ...(_v0 ? {
        overflowX: "hidden",
        overflowY: "auto"
      } : {
        overflow: "hidden"
      })
    };
  }]);
}