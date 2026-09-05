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
    _v11 = _v0.i(0);
  _v0.i(0);
  let _v12 = _v0 => _v13({
      ..._v0,
      actionType: "click"
    }),
    _v13 = ({
      actionType: _v0 = "click",
      additionalFields: _v1,
      communityContext: _v2,
      copy: _v3 = null,
      channelId: _v4,
      element: _v5,
      entityType: _v6,
      eventName: _v7,
      feature: _v8 = "watch",
      flow: _v9 = null,
      location: _v10,
      pageName: _v11 = "watch",
      target: _v12 = null,
      targetPath: _v13 = null,
      version: _v14,
      videoId: _v15,
      viewer: _v16,
      viewType: _v17
    }) => {
      let _v18 = _v16?.teamUser,
        _v19 = _v17 ? (0, _v6.buildViewBpContext)({
          view_type: _v17,
          feature: null
        }) : (0, _v8.buildActionBpContext)({
          action_type: _v0,
          feature: null
        }),
        _v20 = _v15 ? (0, _v9.buildVideoBpContext)({
          video_id: _v15
        }) : {},
        _v21 = _v4 ? (0, _v10.buildCollectionBpContext)({
          entity_id: _v4,
          collection_embed_privacy: null,
          collection_privacy: null,
          is_seo_on: null,
          number_of_videos: null
        }) : {},
        _v22 = _v2 ? (0, _v11.buildCommunityBpContext)(_v2) : {},
        _v23 = {
          ..._v19,
          ...(0, _v3.buildWebBpContext)({
            page_name: _v11,
            referrer: document.referrer,
            path: window.location.pathname,
            target: _v12,
            target_path: _v13,
            copy: _v3
          }),
          ...(0, _v4.buildProductAnalyticsBpContext)({
            product: "community",
            feature: _v8,
            location: _v10,
            modal_name: null,
            flow: _v9,
            element: _v5,
            entity_type: _v6 ?? null,
            device_type: (0, _v1.default)(),
            is_user_facing_data: null,
            copy: _v3
          }),
          ...(0, _v2.buildTeamBpContextFromTeamUser)(_v18),
          ...(0, _v7.buildThirdPartyIntegrationBpContext)({
            is_partner: !1,
            integration_id: null,
            integration_name: null
          }),
          ..._v20,
          ..._v21,
          ..._v22
        };
      (0, _v5.sendBpEventWithContexts)(_v7, _v23, _v14, _v1);
    };
  _v0.s(["staffPicksBpValues", 0, {
    pageName: "staffpicks",
    feature: "staffpicks"
  }, "toWatchSection", 0, _v0 => "popular" === _v0.sourceType ? "popular" : "promonator" === _v0.sourceType ? "promonator" : "watch_later" === _v0.sourceType ? "watch_later" : _v0.title.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, ""), "trackCarouselVideoClickEvent", 0, ({
    copy: _v0,
    element: _v1 = "widget",
    feature: _v2,
    pageName: _v3,
    target: _v4,
    videoId: _v5,
    viewer: _v6
  }) => {
    _v12({
      additionalFields: {
        is_dismissable: !1,
        is_dynamic_recommendations_widget: !1,
        is_empty_state: !1,
        widget_name: "promoted_video_hero",
        widget_placement: 1
      },
      copy: _v0,
      element: _v1,
      entityType: "widget",
      eventName: "vimeo.click_through_widget",
      feature: _v2,
      location: "header",
      pageName: _v3,
      target: _v4,
      targetPath: "viewer_home",
      version: 3,
      videoId: _v5,
      viewer: _v6
    });
  }, "trackCreatorNameClick", 0, ({
    feature: _v0,
    pageName: _v1,
    target: _v2,
    viewer: _v3,
    widgetName: _v4,
    widgetPlacement: _v5
  }) => {
    _v12({
      communityContext: {
        object_actor_type: null,
        object_actor_title: _v4,
        object_placement: _v5
      },
      element: "text",
      entityType: "user",
      eventName: "vimeo.select_profile_card_name",
      feature: _v0,
      pageName: _v1,
      location: "watch_widgets",
      target: _v2,
      targetPath: "user_profile",
      version: 4,
      viewer: _v3
    });
  }, "trackFollowClick", 0, ({
    channelId: _v0,
    copy: _v1,
    entityType: _v2,
    feature: _v3,
    location: _v4 = "watch_widgets",
    pageName: _v5,
    viewer: _v6,
    widgetName: _v7,
    widgetPlacement: _v8
  }) => {
    _v12({
      communityContext: {
        object_actor_type: null,
        object_actor_title: _v7,
        object_placement: _v8
      },
      channelId: _v0,
      copy: _v1,
      element: "button",
      entityType: _v2,
      eventName: "vimeo.select_follow_button",
      feature: _v3,
      pageName: _v5,
      location: _v4,
      version: 4,
      viewer: _v6
    });
  }, "trackLoggedOutBannerEvent", 0, ({
    eventType: _v0,
    copy: _v1,
    feature: _v2,
    pageName: _v3
  }) => {
    _v13({
      additionalFields: {
        notification_name: "watch_reg_flow_web",
        notification_copy: _v1
      },
      copy: _v1,
      element: "widget",
      entityType: "widget",
      feature: _v2,
      pageName: _v3,
      location: "header",
      version: 3,
      viewer: null,
      ...("click" === _v0 ? {
        actionType: "click",
        eventName: "vimeo.notification_action"
      } : {
        viewType: "impression",
        eventName: "vimeo.notification_view"
      })
    });
  }, "trackPlaylistClick", 0, ({
    copy: _v0,
    element: _v1,
    feature: _v2,
    pageName: _v3,
    location: _v4,
    source: _v5,
    target: _v6,
    viewer: _v7,
    widgetName: _v8,
    widgetPlacement: _v9
  }) => {
    _v12({
      additionalFields: {
        is_dismissable: !1,
        is_dynamic_recommendations_widget: !1,
        is_empty_state: !1,
        widget_name: _v8,
        widget_placement: _v9
      },
      copy: _v0,
      element: _v1,
      eventName: "vimeo.click_through_widget",
      feature: _v2,
      pageName: _v3,
      location: _v4,
      target: _v6,
      version: 3,
      viewer: _v7,
      ...(_v0 => {
        switch (_v0.sourceType) {
          case "channel":
            return {
              entityType: "channel",
              targetPath: "channels",
              channelId: _v0.sourceId
            };
          case "category":
            return {
              entityType: "category",
              targetPath: "categories_page"
            };
          default:
            return {};
        }
      })(_v5)
    });
  }, "trackPlaylistNavigation", 0, ({
    flow: _v0,
    feature: _v1,
    pageName: _v2,
    viewer: _v3,
    widgetName: _v4,
    widgetPlacement: _v5
  }) => {
    _v12({
      additionalFields: {
        widget_name: _v4,
        widget_placement: _v5
      },
      element: "scroll",
      entityType: "widget",
      eventName: "vimeo.scroll_in_widget",
      feature: _v1,
      flow: _v0,
      location: "watch_widgets",
      pageName: _v2,
      version: 3,
      viewer: _v3
    });
  }, "trackPlaylistVideoClick", 0, ({
    feature: _v0,
    pageName: _v1,
    target: _v2,
    videoId: _v3,
    viewer: _v4,
    widgetName: _v5,
    widgetPlacement: _v6
  }) => {
    _v12({
      communityContext: {
        object_actor_type: null,
        object_actor_title: _v5,
        object_placement: _v6
      },
      element: "thumbnail",
      entityType: "video",
      eventName: "vimeo.open_video",
      feature: _v0,
      location: "watch_widgets",
      pageName: _v1,
      target: _v2,
      targetPath: "viewer_home",
      version: -1,
      videoId: _v3,
      viewer: _v4
    });
  }, "trackPlaylistWatchClick", 0, ({
    feature: _v0,
    pageName: _v1,
    target: _v2,
    videoId: _v3,
    viewer: _v4,
    widgetName: _v5,
    widgetPlacement: _v6
  }) => {
    _v12({
      communityContext: {
        object_actor_type: null,
        object_actor_title: _v5,
        object_placement: _v6
      },
      copy: "watch now",
      element: "button",
      entityType: "video",
      eventName: "vimeo.open_video",
      feature: _v0,
      location: "watch_widgets",
      pageName: _v1,
      target: _v2,
      targetPath: "viewer_home",
      version: -1,
      videoId: _v3,
      viewer: _v4
    });
  }, "trackTriggerAuthFlow", 0, ({
    flow: _v0,
    feature: _v1 = "follow",
    pageName: _v2
  }) => {
    _v13({
      copy: "follow",
      element: "modal",
      eventName: "vimeo.trigger_auth_flow",
      feature: _v1,
      flow: _v0,
      location: "body",
      pageName: _v2,
      version: 2,
      viewer: null,
      additionalFields: {
        interface_type: "page",
        auth_type: _v0
      }
    });
  }, "trackWidgetViewEvent", 0, ({
    feature: _v0,
    pageName: _v1,
    videoId: _v2,
    viewer: _v3,
    widgetName: _v4,
    widgetPlacement: _v5
  }) => {
    _v13({
      additionalFields: {
        is_dismissable: !1,
        is_dynamic_recommendations_widget: !1,
        is_empty_state: !1,
        widget_name: _v4,
        widget_placement: _v5
      },
      element: "widget",
      entityType: "widget",
      eventName: "vimeo.widget_impression",
      feature: _v0,
      location: "header",
      pageName: _v1,
      version: 2,
      videoId: _v2,
      viewer: _v3,
      viewType: "impression"
    });
  }]);
}