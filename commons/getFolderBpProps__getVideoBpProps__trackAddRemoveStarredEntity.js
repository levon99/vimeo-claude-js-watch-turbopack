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
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0);
  _v0.s(["getFolderBpProps", 0, function (_v0) {
    let {
        metadata: _v1,
        uri: _v2,
        isPinned: _v3,
        isPrivateToUser: _v4
      } = _v0,
      _v5 = _v1?.connections?.parentFolder?.uri?.split("/").pop() ?? null;
    return {
      id: parseInt(_v2?.split("/").pop() ?? ""),
      parentFolderId: _v5,
      isSubFolder: !!_v5,
      isPinned: _v3 ?? !1,
      isPrivateToMe: _v4 ?? !1
    };
  }, "getVideoBpProps", 0, _v0 => {
    let _v1 = parseInt(_v0?.uri?.split("/")[2], 10) ?? 0;
    if (!_v1) return;
    let {
      name: _v2,
      user: _v3,
      privacy: _v4,
      duration: _v5,
      height: _v6,
      width: _v7
    } = _v0;
    return {
      id: _v1,
      title: _v2,
      videoOwnerId: _v3?.uri ? parseInt(_v3?.uri?.split("/")[2]) : null,
      videoPrivacy: _v4?.view ?? null,
      duration: _v5 ?? 0,
      videoHeight: _v6 ?? 0,
      videoWidth: _v7 ?? 0
    };
  }, "trackAddRemoveStarredEntity", 0, (_v0, _v1, _v2, _v3, _v4) => {
    let _v5,
      _v6,
      _v7 = {
        ...(_v5 = (0, _v1.getPageNameFromPath)(window.location.pathname, _v3?.user), _v6 = (0, _v1.getPageNameFromPath)(document.referrer, _v3?.user), {
          ...(0, _v9.buildActionBpContext)({
            action_type: "click",
            feature: null
          }),
          ...(0, _v5.buildWebBpContext)({
            page_name: _v5,
            location: null,
            referrer_page_name: _v6,
            referrer: document.referrer,
            path: window.location.pathname,
            target: null,
            copy: null
          }),
          ...(0, _v8.buildTeamBpContextFromTeamUser)(_v3?.teamUser),
          ...(0, _v7.buildThirdPartyIntegrationBpContext)({
            is_partner: !1,
            integration_id: null,
            integration_name: null
          })
        }),
        ...(0, _v6.buildProductAnalyticsBpContext)({
          product: "general",
          feature: "folders",
          location: "sidebar",
          entity_type: _v1,
          modal_name: null,
          flow: null,
          element: "icon",
          device_type: (0, _v11.getDeviceType)()
        }),
        ...(_v2?.id ? (0, _v10.buildContentManagementBpContext)({
          entity_id: _v2.id,
          number_of_items: _v4 ? 1 : null,
          destination_location: "add" === _v4 ? "starred" : null,
          origin_location: "remove" === _v4 ? "starred" : null,
          origin_privacy: null,
          destination_privacy: null
        }) : void 0)
      };
    if (_v1 === _v12.ItemType.Video && _v2) {
      let {
        id: _v0,
        title: _v1,
        videoPrivacy: _v2,
        videoOwnerId: _v3,
        duration: _v4,
        videoWidth: _v5,
        videoHeight: _v6
      } = _v2;
      _v7 = {
        ..._v7,
        ...(_v2?.id ? (0, _v3.buildVideoBpContext)({
          video_id: _v0,
          title: _v1,
          video_privacy: _v2,
          video_owner_id: _v3,
          upload_method_api: null,
          upload_method_api_id: null,
          duration: _v4,
          is_demo: !1,
          resolution: null,
          orientation: null,
          video_height: _v6,
          video_width: _v5,
          video_embed_privacy: null
        }) : void 0)
      };
    }
    if (_v1 === _v12.ItemType.Folder && _v2) {
      let {
        id: _v0,
        parentFolderId: _v1,
        isSubFolder: _v2,
        isPinned: _v3,
        isPrivateToMe: _v4
      } = _v2;
      _v7 = {
        ..._v7,
        ...(_v2?.id ? (0, _v2.buildFolderBpContext)({
          folder_id: _v0,
          parent_folder_id: _v1,
          is_subfolder: _v2,
          is_pinned: _v3,
          is_private_to_me: _v4
        }) : void 0)
      };
    }
    (0, _v4.sendBpEventWithContexts)(_v0, _v7);
  }]);
}