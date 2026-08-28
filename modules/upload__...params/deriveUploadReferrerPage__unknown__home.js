{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  _v0.s(["deriveUploadReferrerPage", 0, function () {
    if ("u" < typeof document || !document.referrer) return "unknown";
    try {
      let _v0 = new URL(document.referrer).pathname;
      if ("/" === _v0 || "/home" === _v0 || "/home/" === _v0) return "homepage";
      return _v0;
    } catch {
      return "unknown";
    }
  }, "useUploadPageTracking", 0, function () {
    let _v0 = (0, _v3.usePico)(),
      _v1 = (0, _v2.useViewer)(),
      _v2 = _v1?.teamUser?.hasContentSpaceEnabled ?? !1,
      _v3 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("upload_page_displayed", {
        referrer_page: _v0.referrerPage,
        upload_active_tab: _v0.uploadActiveTab
      }), !0), [_v0]),
      _v4 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("upload_tab_switched", {
        upload_new_tab: _v0.uploadNewTab
      }), !0), [_v0]),
      _v5 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("upload_file_selected", {
        upload_method: _v0.uploadMethod
      }), !0), [_v0]),
      _v6 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("upload_destination_changed", {
        upload_destination: (0, _v4.deriveLibraryType)({
          hasContentSpaceEnabled: _v2,
          isPrivateToUser: _v0.project?.isPrivateToUser
        })
      }), !0), [_v0, _v2]);
    return {
      trackUploadPageDisplayed: _v3,
      trackUploadTabSwitched: _v4,
      trackUploadFileSelected: _v5,
      trackUploadDestinationChanged: _v6,
      trackUploadThirdPartySourceClicked: (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("upload_third_party_source_clicked", {
        upload_third_party_source: _v0.uploadThirdPartySource
      }), !0), [_v0]),
      trackUploadLinkPrivacyChanged: (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("upload_link_privacy_changed", {
        upload_link_privacy_new_value: _v0.uploadLinkPrivacyNewValue
      }), !0), [_v0])
    };
  }]);
}