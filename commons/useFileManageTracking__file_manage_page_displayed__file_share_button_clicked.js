{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  _v0.s(["useFileManageTracking", 0, () => {
    let _v0 = (0, _v2.usePico)(),
      _v1 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("file_manage_page_displayed", {
        file_id: _v0.fileId,
        referrer_page: (0, _v3.deriveReferrerPage)()
      }), !0), [_v0]),
      _v2 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("file_share_button_clicked", {
        file_id: _v0.fileId,
        file_share_source: _v0.source
      }), !0), [_v0]),
      _v3 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("file_download_permission_changed", {
        file_id: _v0.fileId,
        file_allow_downloads: _v0.allowDownloads
      }), !0), [_v0]),
      _v4 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("file_manage_overflow_action_clicked", {
        file_id: _v0.fileId,
        file_manage_overflow_action: _v0.action
      }), !0), [_v0]);
    return {
      trackFileManagePageDisplayed: _v1,
      trackFileShareButtonClicked: _v2,
      trackFileDownloadPermissionChanged: _v3,
      trackFileManageOverflowActionClicked: _v4,
      trackFileDeleted: (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("file_deleted", {
        file_id: _v0.fileId,
        file_owner_id: _v0.fileOwnerId
      }), !0), [_v0]),
      trackFileMetadataEdited: (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("file_metadata_edited", {
        file_id: _v0.fileId,
        file_metadata_field: _v0.field
      }), !0), [_v0])
    };
  }]);
}