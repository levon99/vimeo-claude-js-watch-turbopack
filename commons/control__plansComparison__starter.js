{
  "use strict";

  let _v1, _v2, _v3, _v4;
  var _v5,
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = ((_v5 = {}).Control = "control", _v5.T1 = "t1", _v5.T2 = "t2", _v5.T3 = "t3", _v5);
  let _v11 = {
    enable_fuzzy_public_search: !1,
    enable_subscription_withdrawal: !1,
    enable_workspace_defaults_page: !1,
    repackaging_cancellation_position: !0,
    enable_webinar_viewer_anonymization: !1,
    hide_storage_banner_video_page: !1,
    sidebar_hide_storage_bar: !1,
    onboarding_paywall_kind: "plansComparison",
    onboarding_paywall_tier: "starter",
    onboarding_paywall_default_periodicity: "yearly",
    onboarding_paywall_monthly_free_trial: !1,
    onboarding_paywall_dismiss_button_position: "top_right",
    onboarding_welcome_offer_dismiss_variant: "skip",
    onboarding_welcome_offer_reverse_trial_on_dismiss: !1,
    onboarding_welcome_offer_show_continue_link: !0,
    onboarding_upsell_interstitial_enabled: !1,
    late_stage_paywall_kind: "legacy",
    pcp_other_plans_enabled: !1,
    limit_based_paywall_tier: "one_up",
    cold_storage_trigger_paywall_tier: "one_up",
    limit_paywall_other_plans_location: "bottom_button",
    campaign_id_override: "null",
    campaign_id_override_top_priority: "null",
    checkout_experience: "legacy",
    checkout_default_payment_method: "credit_card",
    checkout_billing_cycle_dropdown: !1,
    force_stripe_checkout: !1,
    orion_free_override: !1,
    use_juno_billing: !0,
    vgs_checkout_enabled: !1,
    enable_new_library_drag_and_drop_upload: !1,
    add_to_folders_modal_select_all_folders: !1,
    showcase_autoplay_video_preview: !1,
    bi_managed_client_accounts_fake_door_enabled: !1,
    bi_white_label_clip_pages_fake_door_enabled: !1,
    bi_expiring_links_ux_enabled: !1,
    bi_expiring_links_default_expiry_days: 0,
    bi_product_sentiment_pulse_enabled: !1,
    bsp_cancellation_flow: !1,
    cancellation_offer_enabled: !1,
    b2b_cancellation_discount_type: "one-time",
    b2c_cancellation_discount_offer_variant: "control",
    cancellation_survey_kind: "select_option",
    show_post_cancellation_survey: !1,
    b2b_offer_permanent_discount_when_arr_off_upgrade_plan: !1,
    b2b_offer_permanent_discount_when_arr_off_upsell_modal: !1,
    b2b_offer_permanent_discount_when_arr_off_billing_page: !1,
    b2b_offer_permanent_discount_when_arr_off_top_nav: !1,
    lapsing_clip_selection_cancellation_ux: !1,
    cancellation_first_video_interstitial: !1,
    use_resource_name_for_review_links: !1,
    enable_review_link_default_settings: !1,
    show_profile_reorder_modal: !1,
    show_downgrade_card_billing: !1,
    allow_downgrade_from_pricing_page: !1,
    enable_rename_folder: !1,
    enable_rename_video: !1,
    enable_copy_button_video: !1,
    enable_rename_showcase_and_events: !1,
    enable_privacy_badge_modal: !1,
    enable_review_page_shortcut_from_main: !1,
    is_new_live_events_dashboard_enabled: !1,
    live_broadcaster_mic_meter: !1,
    is_live_event_background_enabled: !1,
    block_live_streaming_free_trial: "control",
    creator_monetisation_creator_enabled: !1,
    creator_monetisation_viewer_treatment: "false",
    clip_page_app_redirect: "control",
    clip_page_app_redirect_dismissal: "session_per_clip",
    enable_billing_menu_item: !1,
    enable_managed_accounts: !1,
    free_trial_banner_tier: "none",
    show_trial_renewal_date_in_billing_card: !1,
    enable_review_link_submenu: !1,
    should_switch_to_repackaging_free: !1,
    should_switch_to_higher_storage_free: !1,
    should_have_permissive_review_links: !1,
    enable_seat_changes_for_tiered: !1,
    upload_max_simultaneous_uploads: 1,
    enable_omnisearch_folder_scoped_request_fix: !1,
    enable_showcase_search: !1,
    ask_your_library_enabled: !1,
    new_moments_enabled: !1,
    enable_uploader_tooltip: !1,
    viewer_ai_upsell_modal_enabled: !1,
    trustpilot_review_modal: !1,
    enable_original_download_banner: !1,
    enable_avatar_initials_fallback: !1,
    enable_list_view_folder_upload: !1,
    remove_watermark_free_tier: !1,
    maximize_video_file_transfer_adoption: !1,
    enable_single_video_rendition_status: !1,
    hp_recents_number_of_videos: 10,
    hp_remove_search_params_results: !1,
    enable_audio_download: !1,
    enable_svv_metadata_save_button: !1,
    viewer_segmentation_redirect_to_watch: !1,
    enable_home_grace_period_notifications: !1,
    enable_video_page_grace_period_notifications: !1,
    enable_watch_page_grace_period_notifications: !1,
    enable_library_grace_period_notifications: !1,
    show_custom_metadata: !1,
    enable_vertical_player: !1,
    clip_page_rework: !1,
    clip_page_player_new_speed_menu_enabled: !1,
    viewer_premium_plan_v0: "control",
    bulk_privacy_modal_variant: "hidden",
    business_plans_enforced: !1,
    core_tier_enabled: !1,
    in_product_support_panel: !1,
    reverse_free_trial_arm: "control",
    welcome_offer_modal_arm: "control",
    video_upload_onboarding_arm: "control",
    single_question_survey_arm: "control",
    spontaneous_paywall_arm: "control",
    spontaneous_paywall_basic_enabled: !1,
    paywall_one_tap_arm: "control",
    gotta_run_modal_arm: "control",
    post_conversion_reminder_enabled: !1,
    post_conversion_reminder_refund_guarantee: !1,
    corporate_upgrade_modal_page: "billing",
    show_repackaging_notification_modal: !1,
    video_page_customization_v1: !1,
    enable_event_series: !1,
    enable_single_event_new_ux: !1,
    enable_single_event_customization: !1,
    release_single_event_customization: !1,
    release_event_series_v1: !1,
    enable_event_series_in_dev_features: !1,
    analytics_freshness_refactored: !1,
    enable_svv_redesign: !1,
    expired_share_link_variant: "non_recoverable",
    enable_sift_on_free_trials: !0,
    card_verification_modal_variant: "none",
    enable_auto_renew_encouragement: !1,
    enable_auto_renew_encouragement_always: !1,
    enable_content_space_team_gate: !1,
    pre_libraries_merge_date: "control",
    enable_player_settings: !1,
    enable_live_event_basics_thumbnail: !1,
    enable_cold_storage_plan_reorder: !1,
    enable_low_tier_below_fold: !1,
    new_replace_feature: !1,
    enable_large_lead_capture_form_field_names: !1,
    enable_video_customization_v2: !1,
    enable_whats_new_page: !1,
    enable_browser_studio_camera_position_presets: !1,
    enable_video_customization_v2_new_badge: !1,
    enable_admin_forced_preset: !1,
    enable_email_defaults: !1,
    library_marketing_video_id: "control",
    videocard_overflow_menu_arm: "control",
    enable_configurable_event_reminders: !1,
    flat_tiers_monthly_enabled: !1,
    enabled_venue_accounts: "all",
    enable_account_wide_dictionary_management: !1,
    enable_live_reactions: !1,
    editor_ui_reworked: !1,
    enable_email_section_redesign: !1,
    enable_prewarm_filmstrip_sprite: !1,
    show_ai_credits_revamp: !0,
    record_upload_approach: "live",
    enable_compact_folder_menu: !1,
    enable_folder_upload_presets: !1,
    enabled_new_live_engagement_ui: !1,
    enable_non_video_upload_fake_door: !1,
    enable_explicit_registration_save: !1,
    enable_search_people_avatar_image_fix: !1,
    enable_registration_preset_editing: !1,
    review_page_rework: !1,
    paywall_redirect_arm: "control",
    show_whitelisting_confirmation_modal: !1,
    enable_audience_speaker: !1,
    profile_likes_activity: !1,
    enable_registration_form_localization: !1,
    pricing_page_dismiss_offer_triggers: "off",
    default_modal_dismiss_offer_enabled: !1,
    dismiss_offer_paywall_variant: "wt_offer",
    pricing_page_dismiss_offer_max_displays: 1,
    default_modal_dismiss_offer_max_displays: 1,
    watch_page_categories_arm: "control",
    bsp_bundle_offer: "none",
    bsp_bundle_price: "free",
    bsp_bundle_triggers: [],
    pcp_paywall_default_periodicity: "yearly",
    homepage_paywall_monthly_free_trial: !1,
    pricing_page_default_periodicity: "yearly",
    pricing_page_monthly_free_trial: !1,
    default_modal_monthly: !1,
    onboarding_paywall_flow: "control",
    onboarding_paywall_pricing_page_show_back_link: !0,
    review_adoption_v3_arm: "control",
    enable_ai_analytics_dashboard: !1
  };
  function _v12() {
    return "vimeo.dev" === window.location.hostname || window.location.hostname.endsWith(".vimeows.com");
  }
  _v0.s(["ReviewAdoptionV3Arm", () => _v10, "defaultSettings", 0, _v11], 0);
  let _v13 = "orion_overrides";
  function _v14() {
    if (!_v12()) return {};
    try {
      let _v0 = window.sessionStorage.getItem(_v13);
      return _v0 ? JSON.parse(_v0) : {};
    } catch {
      return {};
    }
  }
  var _v15 = _v0.i(0);
  async function _v16(_v0) {
    return new Promise(_v0 => {
      _v0.then(_v0 => _v0({
        data: _v0,
        err: void 0
      })).catch(_v0 => _v0({
        err: _v0,
        data: void 0
      }));
    });
  }
  class _v17 extends Error {
    constructor(_v0) {
      super(_v0), this.name = "Error4xx";
    }
  }
  async function _v18(_v0) {
    if (_v0.status >= 400 && _v0.status < 500) throw new _v17(`Received invalid response! Code: ${_v0.status}, Message: ${_v0.statusText}, Source: proxy`);
    let _v1 = null;
    try {
      _v1 = await _v0.json();
    } catch {
      throw Error(`Received invalid response! Code: ${_v0.status}, Message: ${_v0.statusText}, Extra: Invalid JSON content, Source: proxy`);
    }
    if (200 !== _v0.status) {
      let _v0 = (() => {
        if ("object" != typeof _v1 || !_v1) return {
          code: "",
          message: "Received unexpected json",
          extra: JSON.stringify(_v1)
        };
        let {
          error_code: _v0,
          code: _v1,
          error_message: _v2,
          message: _v3,
          extra: _v4
        } = _v1;
        return {
          code: _v0 ?? _v1 ?? "",
          message: _v2 ?? _v3 ?? "",
          extra: JSON.stringify(_v4 ?? {})
        };
      })();
      throw Error(`Received invalid response! Code: ${_v0.code}, Message: ${_v0.message}, Extra: ${_v0.extra}, Source: orion`);
    }
    return _v1;
  }
  function _v19(_v0) {
    async function _v1(_v0) {
      return _v18(await _v0.fetcher(_v0.url, {
        method: _v0.method,
        ...(_v0.body && {
          body: JSON.stringify((0, _v15.default)(_v0.body))
        }),
        headers: {
          ...(_v0.body && {
            "Content-Type": "application/json"
          }),
          "bsp-id": _v0.appId,
          ...(_v0.goesThroughOrionProxy ? {
            "X-Set-Orion": "true"
          } : {})
        }
      }));
    }
    let _v2 = _v0.goesThroughOrionProxy ? `${_v0.baseUrl}/orion` : _v0.baseUrl;
    return {
      async requestSettingsAndSegmentations(_v0) {
        let _v1 = {
          ..._v0,
          bspId: _v0.appId
        };
        return await _v1({
          url: `${_v2}/v3/identity/settings`,
          body: _v1,
          method: "POST"
        });
      },
      async getAllExperiments(_v0) {
        let _v1 = {
          ..._v0,
          returnIncompatible: !0
        };
        return await _v1({
          url: `${_v2}/v3/secret/experiments`,
          body: _v1,
          method: "POST"
        });
      },
      async forceExperimentSegmentation(_v0, _v1, _v2) {
        let _v3 = null != _v1 ? `&segment_index=${_v1}` : "",
          _v4 = `${_v2}/v3/secret/forced-segmentation?segmentation_id_name=${_v2.idName}&segmentation_id=${_v2.idValue}&experiment_name=${_v0}${_v3}`;
        await _v1({
          url: _v4,
          body: {},
          method: null != _v1 ? "PUT" : "DELETE"
        });
      },
      async forceExperimentSegmentations(_v0) {
        await _v1({
          url: `${_v2}/v3/secret/forced-segmentations`,
          method: "PUT",
          body: {
            segmentations_to_force: _v0
          }
        });
      },
      async setSegmentationState(_v0, _v1) {
        await _v1({
          url: `${_v2}/v3/secret/segmentation-state`,
          method: "PUT",
          body: {
            excludeFromSegmentation: _v0,
            segmentationIdName: _v1
          }
        });
      }
    };
  }
  class _v20 {
    mutex = Promise.resolve();
    async run(_v0) {
      return new Promise((_v0, _v1) => {
        this.mutex = this.mutex.then(async () => {
          try {
            _v0(await _v0());
          } catch (_v0) {
            _v1(_v0);
          }
        });
      });
    }
  }
  async function _v21(_v0) {
    let _v1 = new _v20(),
      _v2 = _v0 => ({
        isDefaultIdentity: _v0?.isDefaultIdentity ?? !0,
        settings: {
          ..._v0.defaultSettings,
          ...(_v0?.settings ?? {})
        },
        segmentations: {
          ..._v0.defaultSegmentations,
          ...(_v0?.segmentations ?? {})
        },
        settingsHash: _v0?.settingsHash ?? ""
      }),
      _v3 = async _v0 => {
        let _v1 = {};
        for (let _v0 in _v0) {
          let _v0 = _v0[_v0];
          if (void 0 !== _v0) {
            let _v0 = await _v0();
            void 0 !== _v0 && (_v1[_v0] = _v0);
          }
        }
        return _v1;
      },
      _v4 = async (_v0, _v1) => {
        _v0.logger.debug(`Requesting latest settings from remote at time: ${new Date().getTime()}`);
        let _v2 = await _v16(_v0.apiManager.requestSettingsAndSegmentations(_v1));
        if (_v2.err) return _v0.logger.debug(_v2.err.message), _v2(null);
        if (null == _v2.data) return _v2(null);
        try {
          let _v0 = _v2.data,
            _v1 = {
              isDefaultIdentity: !1,
              settings: _v0.settings,
              segmentations: _v0.segmentations,
              settingsHash: _v0.settings_hash
            },
            _v2 = _v2(_v1);
          return await _v0.persistenceManager.saveIdentity(_v2, _v0), _v2;
        } catch (_v0) {
          return _v0.logger.error("Failed to store remote identity", _v0), _v2(null);
        }
      },
      _v5 = async _v0 => {
        let _v1 = await _v0.persistenceManager.loadIdentity(_v0);
        if (!_v1) return null;
        let {
          identity: _v2,
          updatedAt: _v3
        } = _v1;
        return _v3 + _v0.identityCacheTtlInMs < new Date().getTime() ? null : _v2;
      },
      _v6 = async (_v0 = !1) => {
        if (_v0.shouldReturnDefaultsImmediately) return {
          isDefaultIdentity: !0,
          settings: _v0.defaultSettings,
          segmentations: _v0.defaultSegmentations,
          settingsHash: ""
        };
        let [_v1, _v2] = await Promise.all([_v3(_v0.deviceAttributeGetters), _v3(_v0.appSpecificAttributeGetters)]),
          _v3 = {
            ..._v1,
            ..._v2
          },
          _v4 = await _v0.userIdGenerator(_v3);
        try {
          if (!_v0) {
            let _v0 = await _v5(_v4);
            if (_v0) return _v2(_v0);
          }
          return await _v4(_v4, _v3);
        } catch (_v0) {
          return _v0.logger.error("Failed to fetch identity", _v0), _v2(null);
        }
      },
      _v7 = async (_v0 = !1) => await _v1.run(async () => await _v6(_v0));
    return {
      isSecretMenuEligible: async () => {
        let _v0 = await _v7();
        return !!_v0?.settings?.is_spooner_device;
      },
      getAllExperiments: async () => {
        let [_v0, _v1] = await Promise.all([_v3(_v0.deviceAttributeGetters), _v3(_v0.appSpecificAttributeGetters)]);
        return await _v0.apiManager.getAllExperiments({
          ..._v0,
          ..._v1
        });
      },
      setExperimentSegmentation: (_v0, _v1, _v2) => _v0.apiManager.forceExperimentSegmentation(_v0, _v1, _v2),
      setExperimentSegmentations: _v0 => _v0.apiManager.forceExperimentSegmentations(_v0),
      getDeviceAttributes: async () => await _v3(_v0.deviceAttributeGetters),
      getUserAttributes: async () => await _v3(_v0.appSpecificAttributeGetters),
      excludeFromSegmentation: (_v0, _v1) => _v0.apiManager.setSegmentationState(_v0, _v1),
      getIdentity: () => _v7(!1),
      refreshIdentity: () => _v7(!0)
    };
  }
  async function _v22(_v0, _v1 = {}) {
    let _v2 = _v1.createAPIManager || _v19,
      _v3 = _v1.createEntityManager || _v21,
      _v4 = _v2({
        fetcher: _v0.fetcher,
        appId: _v0.appId,
        baseUrl: _v0.baseUrl,
        goesThroughOrionProxy: _v0.goesThroughOrionProxy ?? !1
      }),
      _v5 = await _v3({
        apiManager: _v4,
        persistenceManager: _v0.persistenceManager,
        logger: _v0.logger,
        defaultSettings: _v0.defaultSettings,
        defaultSegmentations: _v0.defaultSegmentations,
        deviceAttributeGetters: _v0.deviceAttributeGetters,
        appSpecificAttributeGetters: _v0.appSpecificAttributeGetters,
        userIdGenerator: _v0.userIdGenerator,
        shouldReturnDefaultsImmediately: _v0.shouldReturnDefaultsImmediately,
        identityCacheTtlInMs: _v0.identityCacheTtlInMs
      });
    return {
      identity: {
        get: _v5.getIdentity,
        refresh: _v5.refreshIdentity
      },
      secret: {
        isAvailable: _v5.isSecretMenuEligible,
        getAllExperiments: _v5.getAllExperiments,
        setExperimentSegmentation: _v5.setExperimentSegmentation,
        setExperimentSegmentations: _v5.setExperimentSegmentations,
        getDeviceAttributes: _v5.getDeviceAttributes,
        getUserAttributes: _v5.getUserAttributes,
        excludeFromSegmentation: _v5.excludeFromSegmentation
      }
    };
  }
  let _v23 = (_v0, _v1) => _v1.some(_v0 => _v0 instanceof _v0),
    _v24 = new WeakMap(),
    _v25 = new WeakMap(),
    _v26 = new WeakMap(),
    _v27 = {
      get(_v0, _v1, _v2) {
        if (_v0 instanceof IDBTransaction) {
          if ("done" === _v1) return _v24.get(_v0);
          if ("store" === _v1) return _v2.objectStoreNames[1] ? void 0 : _v2.objectStore(_v2.objectStoreNames[0]);
        }
        return _v28(_v0[_v1]);
      },
      set: (_v0, _v1, _v2) => (_v0[_v1] = _v2, !0),
      has: (_v0, _v1) => _v0 instanceof IDBTransaction && ("done" === _v1 || "store" === _v1) || _v1 in _v0
    };
  function _v28(_v0) {
    if (_v0 instanceof IDBRequest) {
      let _v0;
      return _v0 = new Promise((_v0, _v1) => {
        let _v2 = () => {
            _v0.removeEventListener("success", _v3), _v0.removeEventListener("error", _v4);
          },
          _v3 = () => {
            _v0(_v28(_v0.result)), _v2();
          },
          _v4 = () => {
            _v1(_v0.error), _v2();
          };
        _v0.addEventListener("success", _v3), _v0.addEventListener("error", _v4);
      }), _v26.set(_v0, _v0), _v0;
    }
    if (_v25.has(_v0)) return _v25.get(_v0);
    let _v1 = function (_v0) {
      if ("function" == typeof _v0) return (_v2 || (_v2 = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(_v0) ? function (..._v0) {
        return _v0.apply(_v29(this), _v0), _v28(this.request);
      } : function (..._v0) {
        return _v28(_v0.apply(_v29(this), _v0));
      };
      return (_v0 instanceof IDBTransaction && function (_v0) {
        if (_v24.has(_v0)) return;
        let _v1 = new Promise((_v0, _v1) => {
          let _v2 = () => {
              _v0.removeEventListener("complete", _v3), _v0.removeEventListener("error", _v4), _v0.removeEventListener("abort", _v4);
            },
            _v3 = () => {
              _v0(), _v2();
            },
            _v4 = () => {
              _v1(_v0.error || new DOMException("AbortError", "AbortError")), _v2();
            };
          _v0.addEventListener("complete", _v3), _v0.addEventListener("error", _v4), _v0.addEventListener("abort", _v4);
        });
        _v24.set(_v0, _v1);
      }(_v0), _v23(_v0, _v1 || (_v1 = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction]))) ? new Proxy(_v0, _v27) : _v0;
    }(_v0);
    return _v1 !== _v0 && (_v25.set(_v0, _v1), _v26.set(_v1, _v0)), _v1;
  }
  let _v29 = _v0 => _v26.get(_v0),
    _v30 = ["get", "getKey", "getAll", "getAllKeys", "count"],
    _v31 = ["put", "add", "delete", "clear"],
    _v32 = new Map();
  function _v33(_v0, _v1) {
    if (!(_v0 instanceof IDBDatabase && !(_v1 in _v0) && "string" == typeof _v1)) return;
    if (_v32.get(_v1)) return _v32.get(_v1);
    let _v2 = _v1.replace(/FromIndex$/, ""),
      _v3 = _v1 !== _v2,
      _v4 = _v31.includes(_v2);
    if (!(_v2 in (_v3 ? IDBIndex : IDBObjectStore).prototype) || !(_v4 || _v30.includes(_v2))) return;
    let _v5 = async function (_v0, ..._v1) {
      let _v2 = this.transaction(_v0, _v4 ? "readwrite" : "readonly"),
        _v3 = _v2.store;
      return _v3 && (_v3 = _v3.index(_v1.shift())), (await Promise.all([_v3[_v2](..._v1), _v4 && _v2.done]))[0];
    };
    return _v32.set(_v1, _v5), _v5;
  }
  _v27 = {
    ...(_v3 = _v27),
    get: (_v0, _v1, _v2) => _v33(_v0, _v1) || _v3.get(_v0, _v1, _v2),
    has: (_v0, _v1) => !!_v33(_v0, _v1) || _v3.has(_v0, _v1)
  };
  let _v34 = ["continue", "continuePrimaryKey", "advance"],
    _v35 = {},
    _v36 = new WeakMap(),
    _v37 = new WeakMap(),
    _v38 = {
      get(_v0, _v1) {
        if (!_v34.includes(_v1)) return _v0[_v1];
        let _v2 = _v35[_v1];
        return _v2 || (_v2 = _v35[_v1] = function (..._v0) {
          _v36.set(this, _v37.get(this)[_v1](..._v0));
        }), _v2;
      }
    };
  async function* _v39(..._v0) {
    let _v1 = this;
    if (_v1 instanceof IDBCursor || (_v1 = await _v1.openCursor(..._v0)), !_v1) return;
    let _v2 = new Proxy(_v1, _v38);
    for (_v37.set(_v2, _v1), _v26.set(_v2, _v29(_v1)); _v1;) yield _v2, _v1 = await (_v36.get(_v2) || _v1.continue()), _v36.delete(_v2);
  }
  function _v40(_v0, _v1) {
    return _v1 === Symbol.asyncIterator && _v23(_v0, [IDBIndex, IDBObjectStore, IDBCursor]) || "iterate" === _v1 && _v23(_v0, [IDBIndex, IDBObjectStore]);
  }
  _v27 = {
    ...(_v4 = _v27),
    get: (_v0, _v1, _v2) => _v40(_v0, _v1) ? _v39 : _v4.get(_v0, _v1, _v2),
    has: (_v0, _v1) => _v40(_v0, _v1) || _v4.has(_v0, _v1)
  };
  let _v41 = "identity";
  async function _v42() {
    let _v0 = await function (_v0, {
      blocked: _v1,
      upgrade: _v2,
      blocking: _v3,
      terminated: _v4
    } = {}) {
      let _v5 = indexedDB.open(_v0, 1),
        _v6 = _v28(_v5);
      return _v2 && _v5.addEventListener("upgradeneeded", _v0 => {
        _v2(_v28(_v5.result), _v0.oldVersion, _v0.newVersion, _v28(_v5.transaction), _v0);
      }), _v1 && _v5.addEventListener("blocked", _v0 => _v1(_v0.oldVersion, _v0.newVersion, _v0)), _v6.then(_v0 => {
        _v4 && _v0.addEventListener("close", () => _v4()), _v3 && _v0.addEventListener("versionchange", _v0 => _v3(_v0.oldVersion, _v0.newVersion, _v0));
      }).catch(() => {}), _v6;
    }("orionV3", {
      upgrade(_v0) {
        _v0.createObjectStore(_v41, {
          keyPath: "userId"
        });
      }
    });
    return {
      clearEntities: async () => {
        await _v0.clear(_v41);
      },
      loadIdentity: async _v0 => {
        try {
          let _v0 = await _v0.get(_v41, _v0);
          if (!_v0) return null;
          let {
            identity: _v1,
            updatedAt: _v2,
            userId: _v3
          } = _v0;
          if (!_v1 || !_v2 || !_v3) return null;
          return {
            identity: JSON.parse(_v1),
            updatedAt: Number(_v2),
            userId: _v3
          };
        } catch {
          return null;
        }
      },
      saveIdentity: async (_v0, _v1) => {
        await _v0.put(_v41, {
          identity: JSON.stringify(_v0),
          updatedAt: Date.now().toString(),
          userId: _v1
        });
      }
    };
  }
  var _v43 = _v0.i(0);
  let _v44 = () => Promise.resolve(_v43.isMobile ? "mobile" : _v43.isTablet ? "tablet" : _v43.isDesktop ? "desktop" : "unknown");
  var _v45 = _v0.i(0);
  let _v46 = {
      trace(..._v0) {
        console.trace("[Orion]", ..._v0);
      },
      info(..._v0) {
        console.info("[Orion]", ..._v0);
      },
      debug(..._v0) {
        console.debug("[Orion]", ..._v0);
      },
      warn(..._v0) {
        console.warn("[Orion]", ..._v0);
      },
      error(..._v0) {
        console.error("[Orion]", ..._v0);
      },
      fatal(..._v0) {
        console.error("[Orion]", ..._v0);
      }
    },
    _v47 = {
      trace() {},
      info() {},
      debug() {},
      warn() {},
      error() {},
      fatal() {}
    },
    _v48 = {
      production: "https://vimeo.com/flarepoint",
      staging: "https://vimeo.com/flarepoint"
    },
    _v49 = (0, _v8.createContext)({
      client: void 0,
      identity: {
        isDefaultIdentity: !0,
        settings: _v11,
        segmentations: {},
        settingsHash: ""
      },
      isLoadingResponse: !0
    }),
    _v50 = () => (0, _v8.useContext)(_v49);
  _v0.s(["OrionProvider", 0, ({
    children: _v0,
    isLoggingEnabled: _v1 = !1,
    surface: _v2 = "main"
  }) => {
    let _v3,
      _v4,
      _v5 = _v1 ? _v46 : _v47,
      _v6 = (0, _v9.useViewer)(),
      _v7 = !_v6,
      _v8 = null,
      _v9 = null,
      _v10 = null,
      _v11 = null;
    _v7 || (_v3 = _v6?.user?.id?.toString() ?? null, _v4 = _v6.vuid, _v9 = (_v8 = _v6.teamUser?.ownerId?.toString() ?? null) ? `T_${_v8}` : _v3 ? `U_${_v3}` : null, _v10 = _v6.teamUser?.accountType?.toString() ?? _v6.user?.account?.toString() ?? null, _v11 = _v6.user?.productId?.toString() ?? null);
    let _v12 = (0, _v8.useRef)(_v3),
      _v13 = (0, _v8.useRef)(_v4),
      _v14 = (0, _v8.useRef)(_v8),
      _v15 = (0, _v8.useRef)(_v9),
      _v16 = (0, _v8.useRef)(_v10),
      _v17 = (0, _v8.useRef)(_v11),
      _v18 = (0, _v8.useRef)(_v6);
    _v12.current = _v3, _v13.current = _v4, _v14.current = _v8, _v15.current = _v9, _v16.current = _v10, _v17.current = _v11, _v18.current = _v6;
    let [_v19, _v20] = (0, _v8.useState)(void 0),
      _v21 = (0, _v8.useRef)(!1),
      [_v22, _v23] = (0, _v8.useState)(0),
      [_v24, _v25] = (0, _v8.useState)({
        settings: _v11,
        segmentations: {},
        settingsHash: "",
        isDefaultIdentity: !0
      }),
      [_v26, _v27] = (0, _v8.useState)(!0),
      _v28 = function () {
        let [_v0, _v1] = (0, _v8.useState)(_v14);
        return (0, _v8.useEffect)(() => {
          if (!_v12()) return;
          let _v0 = _v0 => {
            let _v1 = _v0(_v14());
            try {
              window.sessionStorage.setItem(_v13, JSON.stringify(_v1));
            } catch {}
            _v1(_v1);
          };
          return window._orion = {
            setOverride: (_v0, _v1) => {
              _v0(_v0 => ({
                ..._v0,
                [_v0]: _v1
              }));
            },
            clearOverride: _v0 => {
              _v0(_v0 => {
                let _v1 = {
                  ..._v0
                };
                return delete _v1[_v0], _v1;
              });
            },
            clearAllOverrides: () => {
              _v0(() => ({}));
            },
            getOverrides: () => _v14()
          }, () => {
            delete window._orion;
          };
        }, []), _v0;
      }(),
      _v29 = (0, _v8.useRef)(!1);
    (0, _v8.useEffect)(() => {
      _v7 || _v21.current || (_v21.current = !0, (async () => {
        try {
          let _v0 = _v12() ? "staging" : "production",
            _v1 = await _v42(),
            _v2 = await _v22({
              goesThroughOrionProxy: !0,
              appId: "vimeo_web",
              appSpecificAttributeGetters: {
                vimeoUserId: () => Promise.resolve(_v12.current),
                vuid: () => Promise.resolve(_v13.current),
                teamOwnerId: () => Promise.resolve(_v14.current),
                actorId: () => Promise.resolve(_v15.current),
                tier: () => Promise.resolve(_v16.current),
                vimeoProductId: () => Promise.resolve(_v17.current),
                minutesElapsedSinceRegistration: () => Promise.resolve(function (_v0) {
                  if (!_v0) return null;
                  let _v1 = Date.parse(_v0);
                  return Number.isNaN(_v1) ? null : Math.max(0, Math.floor((Date.now() - _v1) / 0));
                }(_v18.current?.user?.createdTime)),
                clientEnvironment: () => Promise.resolve(_v12() ? "staging" : "production"),
                surface: () => Promise.resolve(_v2)
              },
              persistenceManager: _v1,
              defaultSettings: _v11,
              defaultSegmentations: {},
              deviceAttributeGetters: {
                isLoggedIn: () => Promise.resolve(!!_v12.current),
                localStorageId: async () => {
                  let _v0;
                  return (_v0 = "LOCAL_STORAGE_ID_PICOX_ID", () => {
                    let _v0 = window.localStorage.getItem(_v0);
                    if (null == _v0) {
                      let _v0 = (0, _v45.v4)();
                      return window.localStorage.setItem(_v0, _v0), _v0;
                    }
                    return _v0;
                  })();
                },
                deviceType: _v44
              },
              logger: _v5,
              baseUrl: _v48[_v0],
              shouldReturnDefaultsImmediately: !("u" < typeof navigator) && /(?:google|bing|msn|facebook)bot[-imagevdo]{0,6}|bingpreview|gptbot|slack(?:bot)?(?:-imgproxy|-linkexpanding)?/i.test(navigator.userAgent),
              fetcher: (..._v0) => fetch(..._v0),
              userIdGenerator: _v0 => Promise.resolve(["localStorageId", "vimeoUserId", "vuid", "teamOwnerId"].filter(_v0 => void 0 !== _v0[_v0]).map(_v0 => _v0[_v0]).join("_")),
              identityCacheTtlInMs: 0
            });
          _v20(_v2);
        } catch (_v0) {
          _v5.error("Failed to initialize Orion client", _v0), _v21.current = !1, _v23(_v0 => _v0 + 1);
        }
      })());
    }, [_v7, _v22]), (0, _v8.useEffect)(() => {
      let _v0;
      if (!_v19 || void 0 === _v3) return;
      _v27(!0);
      let _v1 = async () => {
          try {
            let _v0 = !_v29.current && new URLSearchParams(window.location.search).has("orion_refresh");
            _v29.current = !0;
            let _v1 = _v0 ? await _v19.identity.refresh() : await _v19.identity.get();
            _v25({
              settings: _v1.settings,
              segmentations: _v1.segmentations,
              settingsHash: _v1.settingsHash,
              isDefaultIdentity: _v1.isDefaultIdentity
            }), _v27(!1), _v5.info("Orion identity ready");
          } catch (_v0) {
            _v5.error("Failed to fetch Orion identity", _v0);
          }
        },
        _v2 = new Promise(_v0 => _v0 = setTimeout(() => {
          _v27(_v0 => _v0 ? (_v5.error("Timeout: Orion identity was not received within the timeout."), !1) : _v0), _v0(0);
        }, 0));
      Promise.race([_v1(), _v2]).finally(() => clearTimeout(_v0));
    }, [_v19, _v3, _v8]);
    let _v30 = (0, _v8.useMemo)(() => 0 === Object.keys(_v28).length ? _v24 : {
        ..._v24,
        settings: {
          ..._v24.settings,
          ..._v28
        }
      }, [_v24, _v28]),
      _v31 = _v30.settings.orion_free_override;
    return (0, _v8.useEffect)(() => {
      !_v26 && _v31 && _v7.default.set("orion_free_override", "1", {
        sameSite: "none",
        secure: !0
      });
    }, [_v26, _v31]), (0, _v6.jsx)(_v49.Provider, {
      value: {
        client: _v19,
        identity: _v30,
        isLoadingResponse: _v26
      },
      children: _v0
    });
  }, "useOrion", 0, _v50], 0), _v0.s(["useOrionSettings", 0, function () {
    let {
      identity: _v0,
      isLoadingResponse: _v1
    } = _v50();
    return {
      settings: _v0.settings,
      isLoadingResponse: _v1
    };
  }], 0);
}