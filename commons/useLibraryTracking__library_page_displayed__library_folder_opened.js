{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  _v0.s(["useLibraryTracking", 0, () => {
    let _v0 = (0, _v3.usePico)(),
      _v1 = (0, _v2.useViewer)(),
      _v2 = _v1?.teamUser?.hasContentSpaceEnabled ?? !1,
      _v3 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("library_page_displayed", {
        library_type: _v0.libraryType,
        library_item_count: _v0.libraryItemCount,
        referrer_page: _v0.referrerPage
      }), !0), [_v0]),
      _v4 = (0, _v1.useCallback)(_v0 => {
        if (null === _v0) return !1;
        let _v1 = _v0.folderUri?.split("/").pop();
        if (!_v1) return !1;
        let _v2 = (0, _v4.deriveLibraryType)({
          hasContentSpaceEnabled: _v2,
          isPrivateToUser: _v0.isPrivateToUser,
          isSharedWithMe: _v0.isSharedWithMe
        });
        return _v0.track("library_folder_opened", {
          library_type: _v2,
          library_folder_id: _v1
        }), !0;
      }, [_v0, _v2]),
      _v5 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("library_new_folder_clicked", {
        library_type: _v0.libraryType
      }), !0), [_v0]),
      _v6 = (0, _v1.useCallback)(_v0 => {
        if (null === _v0) return !1;
        let _v1 = (0, _v4.deriveLibraryType)({
          hasContentSpaceEnabled: _v2,
          isPrivateToUser: _v0.isPrivateToUser,
          isSharedWithMe: _v0.isSharedWithMe
        });
        return _v0.track("library_folder_context_menu_action_clicked", {
          library_type: _v1,
          library_folder_id: _v0.libraryFolderId,
          library_folder_context_menu_action: _v0.libraryFolderContextMenuAction
        }), !0;
      }, [_v0, _v2]),
      _v7 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("library_view_changed", {
        library_type: _v0.libraryType,
        library_new_view: _v0.libraryNewView
      }), !0), [_v0]),
      _v8 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("library_filter_applied", {
        library_type: _v0.libraryType,
        library_filter_type: _v0.libraryFilterType
      }), !0), [_v0]),
      _v9 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("filter_by_custom_metadata", {
        applied_filters: _v0.appliedFilters
      }), !0), [_v0]);
    return {
      trackLibraryPageDisplayed: _v3,
      trackLibraryFolderOpened: _v4,
      trackLibraryNewFolderClicked: _v5,
      trackLibraryFolderContextMenuActionClicked: _v6,
      trackLibraryViewChanged: _v7,
      trackLibraryFilterApplied: _v8,
      trackFilterByCustomMetadata: _v9,
      trackLibrarySortChanged: (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("library_sort_changed", {
        library_type: _v0.libraryType,
        library_new_sort: _v0.libraryNewSort
      }), !0), [_v0]),
      trackLibraryLevelActionClicked: (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("library_level_action_clicked", {
        library_type: _v0.libraryType,
        library_level_action: _v0.libraryLevelAction
      }), !0), [_v0])
    };
  }]);
}