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
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0);
  let _v15 = 12,
    _v16 = {
      DRAWER: "drawer",
      SIDE_NAV: "side_nav",
      CONTENT_AREA: "content_area",
      BANNER: "banner"
    },
    _v17 = {
      BUTTON: "button",
      TOGGLE: "toggle"
    },
    _v18 = {
      EVENT_REGISTRATION_PAGE: "event_registration_page",
      SINGLE_VIDEO_VIEW_MANAGE: "single_video_view_manage",
      LIVE_BROWSER_STUDIO: "live_browser_studio",
      SHOWCASE_MANAGER: "showcase_manager"
    };
  _v0.s(["BP_ACTION_NAME", 0, {
    ON: "on",
    OFF: "off",
    FORM: "form",
    ATTENDEES: "attendees"
  }, "BP_COPY", 0, {
    TURN_ON: "Turn on",
    REGISTRATION: "Registration",
    TURN_ON_REGISTRATION: "Turn on registration",
    TURN_OFF_REGISTRATION: "Turn off registration",
    CUSTOMIZE: "customize",
    CUSTOMIZE_FORM: "customize form",
    MANAGE_REGISTRANTS: "manage registrants",
    UPGRADE: "Upgrade",
    EXPLORE: "explore",
    ADD_REGISTRATION_FORM_TO_RECORDING: "Add a registration form to recording"
  }, "BP_CURRENT_SCHEMA_VERSION", 0, _v15, "BP_ELEMENT", 0, _v17, "BP_EVENT_NAME", 0, {
    OPEN_REGISTRATION_DRAWER: "vimeo.open_registration_drawer",
    TOGGLE_REGISTRATION: "vimeo.toggle_registration",
    OPEN_REGISTRATION_MANAGEMENT_DRAWER: "vimeo.open_registration_management_drawer",
    OPEN_FORM_CUSTOMIZE_DRAWER: "vimeo.open_form_customize_drawer",
    OPEN_ATTENDEES_DRAWER: "vimeo.open_attendees_drawer",
    EXPLORE_REGISTRATION_FORM: "vimeo.explore_registration_form",
    UPSELL_TRIGGER_IMPRESSION: "vimeo.upsell_trigger_impression",
    TOGGLE_POST_EVENT_REGISTRATION: "vimeo.toggle_post_event_registration"
  }, "BP_FLOW", 0, {
    REGISTRANTS_TAB: "registrants_tab",
    REGISTRATION_DRAWER: "registration_drawer",
    FORM_TAB: "form_tab"
  }, "BP_LOCATION", 0, _v16, "BP_PAGE_NAME", 0, _v18], 0);
  var _v19 = _v0.i(0);
  _v0.s(["useAnalytics", 0, () => {
    let _v0 = (0, _v19.useConfigStore)(_v0 => _v0.entityType),
      _v1 = (0, _v19.useConfigStore)(_v0 => _v0.entityId),
      _v2 = (0, _v19.useConfigStore)(_v0 => _v0.leadCaptureFormUuid),
      _v3 = (0, _v19.useConfigStore)(_v0 => _v0.privacy),
      _v4 = (0, _v19.useConfigStore)(_v0 => _v0.numberOfVideos),
      _v5 = (0, _v19.useConfigStore)(_v0 => _v0.isSeoOn),
      _v6 = (0, _v14.useViewer)()?.teamUser,
      _v7 = (0, _v1.useMemo)(() => {
        switch (_v0) {
          case _v2.ENTITY_TYPE.EVENT:
          case _v2.ENTITY_TYPE.VIDEO:
          case _v2.ENTITY_TYPE.SHOWCASE:
            return window.location.href ?? null;
        }
        return null;
      }, [_v0]),
      _v8 = (0, _v1.useCallback)(({
        eventName: _v0,
        copy: _v1 = null,
        actionName: _v2,
        pageName: _v3,
        location: _v4 = _v16.DRAWER,
        providerName: _v5 = null,
        providerListId: _v6 = null,
        version: _v7 = _v15,
        target: _v8 = null,
        element: _v9 = _v17.BUTTON,
        flow: _v10 = null,
        modalName: _v11 = null,
        liveFeature: _v12 = "registration",
        isIntegration: _v13 = !1,
        integrationId: _v14 = null,
        integrationName: _v15 = null,
        integrationType: _v16 = null,
        partnerBucket: _v17 = null,
        isPartner: _v18 = null,
        hasNullReferrer: _v19 = !1
      }) => {
        if (!_v3) switch (_v0) {
          case _v2.ENTITY_TYPE.EVENT:
            _v3 = _v18.EVENT_REGISTRATION_PAGE;
            break;
          case _v2.ENTITY_TYPE.VIDEO:
            _v3 = _v18.SINGLE_VIDEO_VIEW_MANAGE;
            break;
          case _v2.ENTITY_TYPE.SHOWCASE:
            _v3 = _v18.SHOWCASE_MANAGER;
            break;
          default:
            _v3 = _v18.EVENT_REGISTRATION_PAGE;
        }
        let _v20 = {
          ...(0, _v5.buildActionBpContext)({
            action_type: "click",
            feature: null
          }),
          ...(0, _v12.buildWebBpContext)({
            page_name: _v3,
            referrer_page_name: null,
            referrer: _v19 ? null : _v7,
            path: window.location.pathname,
            target: _v8,
            copy: null,
            location: null
          }),
          ...(0, _v9.buildTeamBpContextFromTeamUser)(_v6 ?? void 0),
          ...(0, _v8.buildProductAnalyticsBpContext)({
            feature: "registration",
            product: "gates",
            element: _v9,
            location: _v4,
            copy: _v1,
            modal_name: _v11,
            device_type: (0, _v4.default)(),
            flow: _v10,
            entity_type: (0, _v3.getFormattedEntityType)(_v0)
          }),
          ...(0, _v10.buildThirdPartyIntegrationBpContext)({
            is_integration: _v13,
            integration_id: _v14,
            integration_name: _v15,
            integration_type: _v16,
            partner_bucket: _v17,
            is_partner: _v18
          }),
          ...(_v0 === _v2.ENTITY_TYPE.VIDEO && (0, _v11.buildVideoBpContext)({
            video_id: Number(_v1)
          })),
          ...(_v0 === _v2.ENTITY_TYPE.EVENT && (0, _v7.buildLiveBpContext)({
            live_feature: _v12,
            live_event_id: _v1,
            live_event_type: "live_event"
          })),
          ...(_v0 === _v2.ENTITY_TYPE.SHOWCASE && (0, _v6.buildCollectionBpContext)({
            collection_privacy: null,
            entity_id: parseInt(_v1),
            number_of_videos: _v4,
            collection_embed_privacy: _v3,
            is_seo_on: _v5
          }))
        };
        (0, _v13.sendBpEventWithContexts)(_v0, _v20, _v7, {
          action_name: _v2,
          form_id: _v2 ?? null,
          provider_list_id: _v6,
          provider_name: _v5
        });
      }, [_v7, _v6, _v0, _v1, _v4, _v3, _v5, _v2]);
    return (0, _v1.useMemo)(() => ({
      sendRegistrationActionBP: _v8
    }), [_v8]);
  }], 0);
}