{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  function _v3() {
    let _v0 = window.location.pathname;
    return "/" === _v0 || "/home" === _v0 || "/home/" === _v0 ? "homepage" : _v0;
  }
  _v0.s(["useHeaderTracking", 0, function () {
    let _v0 = (0, _v2.usePico)(),
      _v1 = (0, _v1.useCallback)(() => null !== _v0 && (_v0.track("header_create_button_clicked", {
        header_current_page: _v3()
      }), !0), [_v0]),
      _v2 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("header_create_menu_item_clicked", {
        create_menu_item: _v0.createMenuItem,
        header_current_page: _v3()
      }), !0), [_v0]);
    return {
      trackHeaderCreateButtonClicked: _v1,
      trackHeaderCreateMenuItemClicked: _v2,
      trackHeaderHelpButtonClicked: (0, _v1.useCallback)(() => null !== _v0 && (_v0.track("header_help_button_clicked", {
        header_current_page: _v3()
      }), !0), [_v0]),
      trackHeaderNotificationBellClicked: (0, _v1.useCallback)(() => null !== _v0 && (_v0.track("header_notification_bell_clicked", {
        header_current_page: _v3()
      }), !0), [_v0])
    };
  }]);
}