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
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0);
  let _v18 = new class {
      contexts = {};
      init() {
        return this;
      }
      withTeamCtx(_v0) {
        return this.addContext((0, _v12.buildTeamBpContextFromTeamUser)(_v0)), this;
      }
      withViewCtx(_v0) {
        return this.addContext((0, _v15.buildViewBpContext)(_v0 ?? {
          view_type: "impression",
          feature: null
        })), this;
      }
      withActionCtx(_v0) {
        return this.addContext((0, _v8.buildActionBpContext)(_v0 ?? {
          action_type: "click",
          feature: null
        })), this;
      }
      withCollectionCtx(_v0) {
        return this.addContext((0, _v9.buildCollectionBpContext)(_v0 ?? {
          entity_id: 0,
          collection_privacy: null,
          number_of_videos: null,
          collection_embed_privacy: null,
          is_seo_on: null
        })), this;
      }
      withWebCtx(_v0) {
        let _v1 = {
          page_name: "showcase_manager",
          referrer_page_name: null,
          referrer: document.referrer,
          path: window.location.pathname,
          copy: null,
          location: null,
          target: null,
          target_path: null,
          ..._v0
        };
        return this.addContext((0, _v16.buildWebBpContext)(_v1)), this;
      }
      withProductAnalyticsCtx(_v0) {
        let _v1 = {
          device_type: (0, _v7.default)(),
          entity_type: "showcase",
          element: "button",
          flow: null,
          modal_name: null,
          copy: null,
          product: "collections",
          feature: "share",
          location: "drawer",
          is_user_facing_data: !1,
          scrolling_percentage: null,
          cta_location_id: null,
          ..._v0
        };
        return this.addContext((0, _v11.buildProductAnalyticsBpContext)(_v1)), this;
      }
      withThirdPartyIntegrationCtx(_v0) {
        return this.addContext((0, _v13.buildThirdPartyIntegrationBpContext)(_v0 ?? {
          is_integration: !1,
          integration_id: null,
          integration_name: null,
          managed_user_id: null,
          is_partner: null
        })), this;
      }
      withLiveEventCtx(_v0) {
        let _v1 = {
          recurring_live_event_id: "0",
          audience_type: null,
          encoder_type: null,
          event_privacy: null,
          is_guest_speaker: null,
          lead_source: null,
          live_feature: null,
          live_production_method: null,
          live_status: null,
          live_event_id: "0",
          live_event_type: "live_event",
          ..._v0
        };
        return this.addContext((0, _v10.buildLiveBpContext)(_v1)), this;
      }
      withVideoCtx(_v0) {
        let _v1 = {
          video_id: 0,
          content_rating: null,
          duration: null,
          is_auto_cc_enabled: null,
          is_demo: null,
          orientation: null,
          resolution: null,
          title: null,
          upload_method_api: null,
          upload_method_api_id: null,
          video_embed_privacy: null,
          video_height: null,
          video_owner_id: null,
          video_privacy: null,
          video_width: null,
          has_embed_available: null,
          video_categories: null,
          video_version_id: null,
          existing_like_counts: null,
          existing_comment_counts: null,
          existing_view_counts: null,
          listed_categories_counts: null,
          has_like_available: null,
          has_watch_later_available: null,
          has_share_available: null,
          viewer_home_session_id: null,
          ..._v0
        };
        return this.addContext((0, _v14.buildVideoBpContext)(_v1)), this;
      }
      send({
        eventName: _v0,
        version: _v1,
        additionalFields: _v2
      }) {
        (0, _v17.sendBpEventWithContexts)(_v0, this.contexts, _v1, _v2), this.contexts = {};
      }
      addResourceContext(_v0) {
        this.addContext(_v0);
      }
      addContext(_v0) {
        this.contexts = {
          ...this.contexts,
          ..._v0
        };
      }
    }(),
    _v19 = ({
      featureName: _v0,
      featureValue: _v1,
      newToggledOn: _v2,
      newToggledOff: _v3
    }) => ({
      collection_type: "showcase",
      feature_name: _v0 ?? null,
      feature_value: _v1 ?? null,
      new_toggled_on: _v2 ?? null,
      new_toggled_off: _v3 ?? null
    }),
    _v20 = ({
      distributionType: _v0,
      noOfItems: _v1,
      isInternal: _v2
    }) => ({
      distribution_type: _v0 ?? "share",
      number_of_items: _v1 ?? null,
      target_quality: null,
      target_resolution: null,
      target_file_details: null,
      embed_config: null,
      embed_custom_dimensions: null,
      is_internal: _v2,
      sharee_id: null,
      sharee_entity_permission: null,
      sharee_team_permission: null,
      is_send_email_notification: null,
      sharee_email: null,
      collection_type: null,
      target_transcript_language: null,
      embed_layout: null
    }),
    {
      showcaseNestedKeyMap: _v21
    } = (0, _v5.createShowcaseConfigLookups)();
  _v0.s(["useBpEventService", 0, () => {
    let _v0 = (0, _v1.useContext)(_v3.ViewerContext),
      {
        seoAllowIndexed: _v1
      } = (0, _v4.useStore)(_v0 => _v0.seoStore),
      {
        showcaseConfig: _v2,
        privacy: _v3,
        deltaValues: _v4,
        deltaKeys: _v5,
        trackNestedKeys: _v6
      } = (0, _v4.useStore)(_v0 => _v0.commonStore),
      {
        videoList: _v7
      } = (0, _v4.useStore)(_v0 => _v0.videoListStore),
      {
        trackShowcaseManageSettingChanged: _v8
      } = (0, _v2.useShowcaseManageTracking)(),
      _v9 = String(_v2?.showcaseId),
      _v10 = _v18.init(),
      _v11 = () => {
        _v10.withTeamCtx(_v0?.teamUser).withThirdPartyIntegrationCtx().withWebCtx({
          page_name: "showcase_manager"
        }).withCollectionCtx({
          is_seo_on: _v1,
          entity_id: _v2?.showcaseId,
          collection_privacy: _v3?.view,
          number_of_videos: _v7.length,
          collection_embed_privacy: null
        });
      };
    _v11();
    let _v12 = ({
        productAnalyticsCtxFields: _v0,
        eventName: _v1,
        additionalFields: _v2,
        actionCtxFields: _v3,
        eventVersion: _v4,
        viewCtxFields: _v5
      }) => {
        _v10 && (_v5 ? _v10.withViewCtx(_v5) : _v10.withActionCtx(_v3 ?? {
          action_type: "click",
          feature: null
        }), _v10.withProductAnalyticsCtx({
          feature: "settings",
          ..._v0
        }), _v10.send({
          eventName: _v1,
          version: _v4 ?? 2,
          additionalFields: _v2 ?? _v19({})
        }));
      },
      _v13 = ({
        eventName: _v0,
        productAnalyticsCtxFields: _v1,
        additionalFields: _v2,
        videoCtxFields: _v3,
        eventVersion: _v4,
        liveCtxFields: _v5
      }) => {
        _v10 && (_v10.withActionCtx().withProductAnalyticsCtx({
          feature: "showcases",
          ..._v1
        }), _v3 && _v10.withVideoCtx(_v3 ?? {}), _v5 && _v10.withLiveEventCtx(_v5 ?? {}), _v10.send({
          eventName: _v0,
          version: _v4 ?? 2,
          additionalFields: _v2 ?? _v19({})
        }));
      };
    return {
      sendHelpCenterActionEvent: _v0 => {
        _v12({
          productAnalyticsCtxFields: {
            location: "drawer",
            copy: "learn more"
          },
          eventName: "vimeo.trigger_help_center",
          additionalFields: {
            cta_type: _v0 ?? null
          }
        });
      },
      sendSidebarDrawerOpenCloseEvent: (_v0, _v1, _v2) => {
        _v12({
          eventName: (_v0 => {
            switch (_v0) {
              case _v6.ShowcaseRouteMap.INFO:
              case _v6.ShowcaseRouteMap.SEO:
              case _v6.ShowcaseRouteMap.TV_APPS:
                return "vimeo.showcase_settings_tab_open";
              case _v6.ShowcaseRouteMap.CUSTOMIZATION:
                return "vimeo.showcase_appearence_open";
              case _v6.ShowcaseRouteMap.LIST:
                return "vimeo.showcase_settings_tab_close";
              case _v6.ShowcaseRouteMap.PLAYBACK:
                return "vimeo.showcase_playback_tab_open";
              case _v6.ShowcaseRouteMap.LAYOUT:
              case _v6.SideDrawerHeaderNestedKeyPathnameEnum.LAYOUT_NAVIGATION:
              case _v6.SideDrawerHeaderNestedKeyPathnameEnum.LAYOUT_FEATURED:
              case _v6.SideDrawerHeaderNestedKeyPathnameEnum.LAYOUT_VIDEO_GRID:
                return "vimeo.showcase_layout_tab_open";
              case _v6.ShowcaseRouteMap.WEB_LAYOUT:
                return "vimeo.showcase_layout_tab_close";
              default:
                return "vimeo.showcase_settings_tab_open";
            }
          })(_v0),
          productAnalyticsCtxFields: {
            location: "sidebar",
            copy: _v1 ?? (_v0 => {
              switch (_v0) {
                case _v6.ShowcaseRouteMap.INFO:
                case _v6.ShowcaseRouteMap.SEO:
                case _v6.ShowcaseRouteMap.TV_APPS:
                case _v6.ShowcaseRouteMap.LIST:
                  return "settings";
                case _v6.ShowcaseRouteMap.CUSTOMIZATION:
                  return "appearance";
                case _v6.ShowcaseRouteMap.PLAYBACK:
                  return "playback";
                case _v6.ShowcaseRouteMap.LAYOUT:
                  return "layout";
                case _v6.SideDrawerHeaderNestedKeyPathnameEnum.LAYOUT_NAVIGATION:
                  return "navigation";
                case _v6.SideDrawerHeaderNestedKeyPathnameEnum.LAYOUT_FEATURED:
                  return "featured content";
                case _v6.SideDrawerHeaderNestedKeyPathnameEnum.LAYOUT_VIDEO_GRID:
                  return "video grid";
                default:
                  return "settings";
              }
            })(_v0),
            feature: (_v0 => {
              switch (_v0) {
                case _v6.ShowcaseRouteMap.INFO:
                case _v6.ShowcaseRouteMap.SEO:
                case _v6.ShowcaseRouteMap.TV_APPS:
                case _v6.ShowcaseRouteMap.LIST:
                  return "settings";
                case _v6.ShowcaseRouteMap.CUSTOMIZATION:
                  return "appearance";
                case _v6.ShowcaseRouteMap.PLAYBACK:
                  return "playback";
                case _v6.ShowcaseRouteMap.LAYOUT:
                  return "layout";
                case _v6.SideDrawerHeaderNestedKeyPathnameEnum.LAYOUT_NAVIGATION:
                  return "navigation";
                case _v6.SideDrawerHeaderNestedKeyPathnameEnum.LAYOUT_FEATURED:
                  return "playback";
                case _v6.SideDrawerHeaderNestedKeyPathnameEnum.LAYOUT_VIDEO_GRID:
                  return "playback_grid";
                default:
                  return "settings";
              }
            })(_v0)
          },
          additionalFields: _v19({
            featureName: _v2 ?? null
          })
        });
      },
      sendShowcaseInputFieldsUpdateEvent: (_v0, _v1, _v2) => {
        let _v3 = Object.keys(_v4);
        0 !== _v3.length && _v3.includes(_v0) && _v12({
          eventName: "vimeo.showcase_settings_update",
          productAnalyticsCtxFields: {
            copy: _v1,
            location: "drawer",
            element: "text"
          },
          actionCtxFields: {
            action_type: "type",
            feature: null
          },
          additionalFields: _v19({
            featureName: _v2,
            featureValue: String(_v4[_v0]?.[1]) ?? null
          })
        });
      },
      sendShowcaseSaveEvent: ({
        isUserFree: _v0 = !1,
        isUserNotAllowedToSave: _v1 = !1
      }) => {
        if (0 === Object.keys(_v4).length || 0 === _v5.length) return;
        let _v2 = [],
          _v3 = [],
          _v4 = [..._v5.map(_v0 => _v0.split(".")[1]).filter(_v0 => "albumConfig" !== _v0), ...(_v6?.config?.map(_v0 => _v0.split(".")[1]) ?? [])],
          _v5 = _v4?.albumConfig?.[1];
        _v4.forEach(_v0 => {
          let _v1;
          if ("boolean" == typeof _v4[_v0]?.[1]) _v1 = _v4[_v0][1];else if ("theme" === _v0) _v1 = "dark" === _v4[_v0][1];else {
            let _v0 = _v21.get(_v0);
            _v1 = _v0 ? _v5?.[_v0]?.[_v0]?.value : void 0;
          }
          !0 === _v1 ? _v2.push(_v0) : !1 === _v1 && _v3.push(_v0);
        }), _v12({
          eventName: "vimeo.showcase_changes_save",
          productAnalyticsCtxFields: {
            copy: _v0 ? "save free version" : "save",
            location: "top_navigation_bar"
          },
          additionalFields: _v19({
            featureName: _v1 ? "upgrade_modal_open" : "saved_customization_changes",
            featureValue: _v4.join(","),
            newToggledOn: _v2.join(","),
            newToggledOff: _v3.join(",")
          })
        });
      },
      sendDrawerOpenCloseEvent: (_v0, _v1, _v2) => {
        _v12({
          eventName: _v0 ? "vimeo.showcase_settings_tab_open" : "vimeo.showcase_settings_tab_close",
          productAnalyticsCtxFields: {
            copy: _v1 ?? null
          },
          additionalFields: _v19({
            featureName: _v2 ?? null
          })
        });
      },
      sendSEOToggleOnOffEvent: _v0 => {
        _v12({
          eventName: "vimeo.showcase_settings_update",
          productAnalyticsCtxFields: {
            copy: "index in search results",
            element: "toggle"
          },
          additionalFields: _v19({
            featureName: "seo_enabled",
            featureValue: _v0 ? "true" : "false"
          })
        }), _v8({
          showcaseId: _v9,
          showcaseManageSetting: "seo"
        });
      },
      sendTVAppsCopySwitchEvent: (_v0, _v1, _v2) => {
        _v12({
          eventName: _v0,
          productAnalyticsCtxFields: {
            copy: _v2 ?? null
          },
          additionalFields: _v19({
            featureName: _v1
          })
        });
      },
      sendGenreLanguageChangeEvent: (_v0, _v1, _v2) => {
        _v2 && _v12({
          eventName: "vimeo.showcase_settings_update",
          productAnalyticsCtxFields: {
            copy: _v0,
            location: "drawer",
            element: "dropdown"
          },
          additionalFields: _v19({
            featureName: _v1,
            featureValue: _v2
          })
        });
      },
      sendShowcasePreviewAndModeSwitchEvent: (_v0, _v1, _v2, _v3) => {
        _v12({
          eventName: _v0,
          productAnalyticsCtxFields: {
            copy: _v3 ?? null,
            location: "modal"
          },
          additionalFields: _v19({
            featureName: _v1,
            featureValue: _v2
          })
        });
      },
      sendShowcaseAppearanceUpdateEvent: (_v0, _v1, _v2, _v3, _v4) => {
        _v12({
          eventName: "vimeo.showcase_appearance_update",
          productAnalyticsCtxFields: {
            copy: _v2 ?? null,
            location: "drawer",
            element: _v3 ? "toggle" : "button",
            feature: _v4 ?? "appearance"
          },
          additionalFields: _v19({
            featureName: _v0,
            featureValue: _v1
          })
        });
      },
      sendVideoListTopActionBarEvents: (_v0, _v1, _v2, _v3) => {
        _v12({
          eventName: _v0,
          productAnalyticsCtxFields: {
            copy: _v1 ?? null,
            location: _v3 ?? (_v2 ? "body" : "top_action_bar"),
            flow: _v2 ?? null,
            feature: "showcases"
          },
          additionalFields: _v19({})
        });
      },
      sendVideoListSearchEvent: _v0 => {
        _v12({
          eventName: "vimeo.showcase_search_query",
          productAnalyticsCtxFields: {
            location: "search_bar",
            feature: "showcases"
          },
          actionCtxFields: {
            action_type: "type",
            feature: null
          },
          additionalFields: _v19({
            featureName: "query",
            featureValue: _v0
          })
        });
      },
      sendShowcaseSortSelectionEvents: (_v0, _v1) => {
        _v12({
          eventName: "vimeo.showcase_sorting_update",
          productAnalyticsCtxFields: {
            copy: null,
            location: "top_action_bar",
            feature: "showcases"
          },
          actionCtxFields: {
            action_type: _v1 ?? "click",
            feature: null
          },
          additionalFields: _v19({
            featureName: "sorting_type_update",
            featureValue: _v0
          })
        });
      },
      sendShowcaseBulkActionsEvents: (_v0, _v1) => {
        _v12({
          eventName: _v0,
          productAnalyticsCtxFields: {
            location: "body",
            element: "checkbox",
            feature: "showcases"
          },
          additionalFields: _v19({
            featureName: _v1
          })
        });
      },
      sendHoverActionEvents: (_v0, _v1) => {
        let _v2 = "live" === _v1.type && _v1.live?.recurringEvent && _v1.live?.recurringEvent?.album;
        _v13({
          eventName: _v0,
          productAnalyticsCtxFields: {
            location: "body",
            element: "card",
            entity_type: "video"
          },
          videoCtxFields: _v2 ? null : {
            video_id: Number(_v1.uri.split("/")[2]),
            video_privacy: _v1.privacy.view,
            video_embed_privacy: _v1.privacy.embed
          },
          liveCtxFields: _v2 ? {
            recurring_live_event_id: _v1.live?.recurringEvent?.link.split("/")[2],
            event_privacy: _v1.privacy.view,
            live_status: _v1.live?.status
          } : null
        });
      },
      sendDistributeContentEvent: _v0 => {
        _v13({
          eventName: "vimeo.distribute_content",
          eventVersion: 12,
          productAnalyticsCtxFields: {
            location: "body",
            element: "card",
            entity_type: "video",
            flow: "share_video_link"
          },
          videoCtxFields: {
            video_id: Number(_v0.uri.split("/")[2]),
            video_privacy: _v0.privacy.view,
            video_embed_privacy: _v0.privacy.embed
          },
          additionalFields: _v20({
            distributionType: "share",
            noOfItems: 1,
            isInternal: !0
          })
        });
      },
      sendShowcaseDeleteEvents: (_v0, _v1, _v2, _v3) => {
        _v12({
          eventName: _v0,
          productAnalyticsCtxFields: {
            copy: _v2 ?? null,
            location: _v1,
            feature: "showcases",
            flow: void 0 === _v3 ? "showcase_manage" : null
          }
        });
      },
      sendShowcaseAnalyticsClickEvent: (_v0, _v1, _v2, _v3) => {
        _v12({
          eventName: _v0,
          productAnalyticsCtxFields: {
            copy: _v2,
            location: _v1,
            feature: "showcases",
            product: "analysis"
          },
          additionalFields: _v3 ?? _v19({})
        });
      },
      sendShowcaseReskinOptoutEvent: () => {
        _v12({
          eventName: "vimeo.showcase_feature_opt_in_out",
          productAnalyticsCtxFields: {
            copy: "switch",
            location: "modal",
            feature: "showcases"
          },
          additionalFields: _v19({
            featureName: "showcase_reskin",
            featureValue: "opted_out"
          })
        });
      },
      sendOpenDistributionMenuEvent: () => {
        _v12({
          eventName: "vimeo.open_distribution_menu_dropdown",
          productAnalyticsCtxFields: {
            copy: "more sharing options",
            location: "menu",
            feature: "share",
            element: "dropdown",
            product: "distribution"
          },
          additionalFields: _v20({
            distributionType: "share",
            noOfItems: null,
            isInternal: !1
          }),
          eventVersion: 13
        });
      },
      sendDistributeContentClickEvents: (_v0, _v1, _v2) => {
        _v12({
          eventName: "vimeo.distribute_content",
          productAnalyticsCtxFields: {
            copy: _v0,
            feature: _v1,
            location: "modal",
            product: "distribution",
            flow: "embed" === _v2 ? "copy_embed_code" : "share_showcase",
            modal_name: "distribution_menu_dropdown"
          },
          additionalFields: _v20({
            distributionType: _v2 ?? "share",
            noOfItems: null,
            isInternal: !1
          }),
          eventVersion: 13
        });
      },
      sendShowcaseLibraryOpenEvent: () => {
        _v12({
          eventName: "vimeo.showcases_library_open",
          productAnalyticsCtxFields: {
            element: "link",
            copy: "showcases",
            location: "top_navigation_bar",
            product: "distribution"
          },
          additionalFields: _v19({})
        });
      },
      sendShowcaseManagePageImpressionEvent: () => {
        _v11(), _v12({
          eventName: "vimeo.showcase_manage_view",
          productAnalyticsCtxFields: {
            location: "body",
            element: "button",
            feature: "showcases",
            product: "collections",
            copy: null
          },
          viewCtxFields: {
            view_type: "impression",
            feature: null
          },
          additionalFields: {
            collection_type: "showcase",
            feature_name: null,
            feature_value: null
          }
        });
      },
      sendUpsellTriggerAndImpressionEvent: (_v0, _v1, _v2, _v3, _v4) => {
        _v11(), _v12({
          eventName: _v2 ? "vimeo.trigger_upsell" : "vimeo.upsell_trigger_impression",
          productAnalyticsCtxFields: {
            location: _v3 ?? "drawer",
            element: _v2 ? "button" : null,
            feature: _v0,
            product: "distribution",
            copy: "upgrade",
            ...(_v4 ? {
              flow: _v4
            } : {})
          },
          viewCtxFields: _v2 ? null : {
            view_type: "impression",
            feature: null
          },
          actionCtxFields: _v2 ? {
            action_type: "click",
            feature: null
          } : null,
          additionalFields: {
            interface_type: "modal",
            selected_plan: null,
            purchase_type: null,
            duration: null,
            usd_price: null,
            currency: null,
            upsell_name: _v1,
            is_discount: null,
            add_on_feature: null,
            discount_offer: null,
            promo_code_id: null,
            is_dismissible: !1
          },
          eventVersion: _v2 ? 38 : 37
        });
      },
      sendPrivacyChangeEvent: _v0 => {
        _v12({
          eventName: "vimeo.change_link_privacy",
          eventVersion: 10,
          productAnalyticsCtxFields: {
            element: "dropdown",
            feature: "privacy",
            copy: _v0
          },
          additionalFields: {
            privacy_field_name: "old_video_privacy",
            privacy_field_value: _v3?.view ?? null,
            is_video_password_protected: null,
            is_preset_applied: null
          }
        });
      }
    };
  }], 0);
}