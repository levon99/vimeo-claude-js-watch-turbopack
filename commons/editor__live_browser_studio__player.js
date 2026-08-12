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
    _v9 = _v0.i(0);
  let _v10 = {
      editor: "editor",
      events: "live_browser_studio",
      player: "player",
      record: "record",
      registration: "registration_manager",
      showcase: "showcase_manager",
      single_video_view: "single_video_view"
    },
    _v11 = _v0 => _v10[_v0] ?? "team_management_page";
  _v0.s(["useBrandKitsEvents", 0, () => {
    let _v0 = (0, _v9.useViewer)(),
      _v1 = (0, _v1.useCallback)(({
        modalName: _v0,
        location: _v1,
        product: _v2,
        pageName: _v3
      }) => ({
        ...(0, _v3.buildActionBpContext)({
          action_type: "click",
          feature: null
        }),
        ...(0, _v4.buildProductAnalyticsBpContext)({
          flow: null,
          modal_name: _v0,
          entity_type: "setting",
          element: "button",
          location: _v1 || "modal",
          feature: "brand",
          product: _v2 || "general",
          copy: "confirm",
          device_type: (0, _v2.default)()
        }),
        ...(0, _v7.buildWebBpContext)({
          page_name: _v3 || "team_management_page",
          path: window.location.pathname
        }),
        ...(0, _v5.buildTeamBpContextFromTeamUser)(_v0?.teamUser),
        ...(0, _v6.buildThirdPartyIntegrationBpContext)({
          is_integration: !1,
          integration_id: null,
          is_partner: null,
          integration_name: null
        })
      }), [_v0?.teamUser]),
      _v2 = (0, _v1.useCallback)(({
        itemId: _v0,
        brandName: _v1,
        brandId: _v2,
        ownershipEntity: _v3,
        ownershipEntityId: _v4,
        modalName: _v5,
        itemType: _v6,
        location: _v7,
        product: _v8,
        pageName: _v9
      }) => {
        _v9 || (_v9 = _v11(_v8 || "general")), (0, _v8.sendBpEventWithContexts)("vimeo.create_brand_kit_item", {
          ..._v1({
            modalName: _v5,
            location: _v7,
            product: _v8,
            pageName: _v9
          })
        }, 3, {
          action: "create",
          item: _v6,
          item_id: _v0,
          brand_name: _v1,
          brand_id: _v2,
          ownership_entity: _v3,
          ownership_entity_id: _v4
        });
      }, [_v1]),
      _v3 = (0, _v1.useCallback)(({
        itemId: _v0,
        brandName: _v1,
        brandId: _v2,
        ownershipEntity: _v3,
        ownershipEntityId: _v4,
        itemType: _v5
      }) => {
        (0, _v8.sendBpEventWithContexts)("vimeo.update_brand_kit_item", _v1({
          modalName: null
        }), 3, {
          action: "rename",
          item: _v5,
          item_id: _v0,
          brand_name: _v1,
          brand_id: _v2,
          ownership_entity: _v3,
          ownership_entity_id: _v4
        });
      }, [_v1]),
      _v4 = (0, _v1.useCallback)(({
        itemId: _v0,
        brandName: _v1,
        brandId: _v2,
        ownershipEntity: _v3,
        ownershipEntityId: _v4
      }) => {
        (0, _v8.sendBpEventWithContexts)("vimeo.download_brand_kit_item", _v1({
          modalName: null
        }), 3, {
          action: "download",
          item: "logo",
          item_id: _v0,
          brand_name: _v1,
          brand_id: _v2,
          ownership_entity: _v3,
          ownership_entity_id: _v4
        });
      }, [_v1]),
      _v5 = (0, _v1.useCallback)(({
        itemId: _v0,
        itemType: _v1,
        brandName: _v2,
        brandId: _v3,
        ownershipEntity: _v4,
        ownershipEntityId: _v5
      }) => {
        (0, _v8.sendBpEventWithContexts)("vimeo.delete_brand_kit_item", _v1({
          modalName: null
        }), 3, {
          action: "delete",
          item: _v1,
          item_id: _v0,
          brand_name: _v2,
          brand_id: _v3,
          ownership_entity: _v4,
          ownership_entity_id: _v5
        });
      }, [_v1]);
    return {
      sendCreateBrandKitItemEvent: _v2,
      sendAddBrandKitItemEvent: (0, _v1.useCallback)(({
        itemId: _v0,
        brandName: _v1,
        brandId: _v2,
        ownershipEntity: _v3,
        ownershipEntityId: _v4,
        modalName: _v5,
        itemType: _v6,
        location: _v7,
        product: _v8,
        pageName: _v9
      }) => {
        _v9 || (_v9 = _v11(_v8 || "general")), (0, _v8.sendBpEventWithContexts)("vimeo.add_brand_kit_item", {
          ..._v1({
            modalName: _v5,
            location: _v7,
            product: _v8,
            pageName: _v9
          })
        }, 3, {
          action: "add",
          item: _v6,
          item_id: _v0,
          brand_name: _v1,
          brand_id: _v2,
          ownership_entity: _v3,
          ownership_entity_id: _v4
        });
      }, [_v1]),
      sendUpdateBrandKitItemEvent: _v3,
      sendDeleteBrandKitItemEvent: _v5,
      sendDownloadLogoItemEvent: _v4
    };
  }]);
}