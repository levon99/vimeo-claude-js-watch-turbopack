{
  "use strict";

  var _v1,
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = (0, _v2.create)(() => ({
    entityId: null,
    entityType: _v3.ENTITY_TYPE.EMPTY,
    canCompleteEvent: !1,
    leadCaptureFormUuid: ""
  }));
  _v0.s(["useConfigStore", 0, _v4], 0);
  var _v5 = _v0.i(0),
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
    _v16 = _v0.i(0);
  let _v17 = {
      uri: "",
      title: "",
      status: _v16.EVENT_STATUS.EMPTY,
      hasPolls: !1,
      isVideoPlayable: !0
    },
    _v18 = (0, _v6.createContext)(_v17);
  _v0.s(["EntityContext", 0, _v18, "default", 0, function ({
    children: _v0,
    initialValue: _v1
  }) {
    let [_v2, _v3] = (0, _v6.useState)(_v1 || _v17);
    return (0, _v6.useEffect)(() => {
      _v1 && _v3(_v1);
    }, [_v1]), (0, _v5.jsx)(_v18.Provider, {
      value: _v2,
      children: _v0
    });
  }, "defaultValue", 0, _v17], 0);
  let _v19 = () => (0, _v6.useContext)(_v18);
  _v0.s(["useEntityStore", 0, _v19], 0);
  let _v20 = (0, _v6.createContext)({
      enterpriseHasUpsell: !1,
      hasUpsell: !1,
      hasEnterprise: !1,
      hasAttendeeUpsell: !1,
      registrantCapLowerWatermark: !1,
      registrantCapUpperWatermark: !1,
      loading: !0,
      hasEmailQuotaUsed: !1,
      hasLiveSubscription: !1
    }),
    _v21 = "lowerLimit",
    _v22 = (_v0 = _v21, _v1) => !!(_v1 && !_v1.isUnlimited && _v1.total >= _v1[_v0]),
    _v23 = () => (0, _v6.useContext)(_v20);
  _v0.s(["default", 0, function ({
    children: _v0
  }) {
    let {
        user: _v1,
        registrationData: _v2,
        emailQuota: _v3
      } = _v19(),
      _v4 = (0, _v15.useViewer)(),
      _v5 = _v4?.user,
      _v6 = _v4(_v0 => _v0.entityType),
      {
        data: _v7,
        isLoading: _v8
      } = (0, _v12.useGetUserCapabilities)({
        where: {
          userId: (0, _v14.getLastIdFromUri)(_v1?.uri) || _v5?.id || 0
        },
        select: ["liveEventLeadUpsell", "enterprise", "liveEventLeadAnalyticsUpsell", "liveSubscription", "captureEmails", "clipAttendeeUpsell", "captureLeadsShowcase"]
      }),
      {
        liveEventLeadUpsell: _v9,
        enterprise: _v10,
        liveEventLeadAnalyticsUpsell: _v11,
        clipAttendeeUpsell: _v12,
        liveSubscription: _v13,
        captureEmails: _v14,
        captureLeadsShowcase: _v15
      } = _v7 || {},
      _v16 = (0, _v6.useMemo)(() => {
        let _v0 = !!(_v9 && _v10);
        return {
          hasEnterprise: _v10,
          enterpriseHasUpsell: _v0,
          hasUpsell: !!_v9 && _v6 === _v3.ENTITY_TYPE.EVENT || !_v14 && _v6 === _v3.ENTITY_TYPE.VIDEO || !_v15 && _v6 === _v3.ENTITY_TYPE.SHOWCASE,
          hasAttendeeUpsell: !!_v11 && _v6 === _v3.ENTITY_TYPE.EVENT || _v12 && _v6 === _v3.ENTITY_TYPE.VIDEO,
          registrantCapLowerWatermark: _v22(_v21, _v2),
          registrantCapUpperWatermark: _v22("upperLimit", _v2),
          loading: _v8,
          hasEmailQuotaUsed: !_v10 && !!_v3 && _v3.capping - _v3.total <= 0,
          hasLiveSubscription: !!_v13
        };
      }, [_v9, _v10, _v6, _v14, _v15, _v11, _v12, _v2, _v8, _v3, _v13]);
    return _v8 ? (0, _v5.jsx)(_v13.FullScreenLoader, {}) : (0, _v5.jsx)(_v20.Provider, {
      value: _v16,
      children: _v0
    });
  }, "useEventCapability", 0, _v23], 0);
  var _v24 = _v0.i(0);
  _v0.s(["GeneralAlerts", 0, () => {
    let _v0 = navigator.language || "en-US",
      _v1 = _v4(_v0 => _v0.entityType),
      _v2 = _v4(_v0 => _v0.isRegistrationOn),
      _v3 = _v4(_v0 => _v0.canCompleteEvent),
      {
        onClickEndEvent: _v4,
        onClickRegistration: _v5
      } = (0, _v11.useCallbackContext)(),
      {
        hasUpsell: _v6
      } = _v23(),
      {
        hasLeadsFromLegacyForm: _v7,
        formCreatedOn: _v8,
        status: _v9 = _v16.EVENT_STATUS.EMPTY,
        metadata: _v10,
        isVideoPlayable: _v11
      } = _v19(),
      _v12 = _v1 === _v3.ENTITY_TYPE.VIDEO,
      _v13 = _v9 === _v16.EVENT_STATUS.EMPTY && _v1 === _v3.ENTITY_TYPE.EVENT,
      _v14 = !1;
    _v10?.connections && "liveVideo" in _v10?.connections && (_v14 = _v10.connections?.liveVideo?.status === "streaming");
    let _v15 = _v2 && _v9 === _v16.EVENT_STATUS.STARTED && _v3 && !_v14 && _v1 === _v3.ENTITY_TYPE.EVENT && _v4,
      _v16 = !_v6 && !_v2 && _v5 && (_v13 || _v12 && _v11),
      _v17 = (0, _v6.useMemo)(() => {
        if (_v7 && _v8) {
          let _v0 = new Intl.DateTimeFormat(_v0, {
              month: "long",
              day: "2-digit",
              year: "numeric"
            }),
            _v1 = new Date(_v8),
            _v2 = _v0.format(_v1);
          return _v24.default.FormMigration(_v2);
        }
      }, [_v7, _v8, _v0]);
    return (0, _v5.jsxs)(_v5.Fragment, {
      children: [_v16 && (0, _v5.jsx)(_v7.Alert, {
        variant: "info",
        children: (0, _v5.jsx)(_v8.AlertDescription, {
          fontSize: "body-md",
          children: (0, _v10.translate)({
            singular: "To start capturing leads and viewer-level insights, {A}turn on registration{/A}",
            replacements: {
              A: _v0 => (0, _v5.jsx)(_v9.Link, {
                variant: "inline-primary",
                fontSize: "body-md",
                onClick: _v5,
                children: _v0
              })
            },
            dictionary: {
              es: {
                singular: "Para empezar a captar clientes potenciales y obtener información a nivel del espectador, {A}active el registro{/A}."
              },
              "de-DE": {
                singular: "Um mit der Erfassung von Leads und Einblicken auf Zuschauerebene zu beginnen, {A}aktivieren Sie die Registrierung{/A}."
              },
              "fr-FR": {
                singular: "Pour commencer à générer des opportunités commerciales et à obtenir des informations au niveau des spectateurs, {A}activez l'inscription{/A}."
              },
              "ja-JP": {
                singular: "見込み顧客と視聴者レベルのインサイトの取得を開始するには、{A}登録をオンにしてください{/A}。"
              },
              "ko-KR": {
                singular: "리드 및 뷰어 수준 인사이트 캡처를 시작하려면 {A}등록을 활성화하세요.{/A}"
              },
              "pt-BR": {
                singular: "Para começar a capturar leads e insights no nível do espectador, {A}ative o registro{/A}"
              },
              "zh-CN": {
                singular: "要开始捕获销售线索和观众级别的洞察，请{A}开启注册{/A}"
              }
            }
          })
        })
      }), _v7 && _v8 && (0, _v5.jsx)(_v7.Alert, {
        variant: "info",
        children: (0, _v5.jsx)(_v8.AlertDescription, {
          fontSize: "body-md",
          children: _v17
        })
      }), _v15 && (0, _v5.jsx)(_v7.Alert, {
        variant: "info",
        children: (0, _v5.jsx)(_v8.AlertDescription, {
          fontSize: "body-md",
          children: (0, _v10.translate)({
            singular: "To generate viewer-level analytics, {A}complete your event{/A}.",
            replacements: {
              A: _v0 => (0, _v5.jsx)(_v9.Link, {
                variant: "inline-primary",
                fontSize: "body-md",
                cursor: "pointer",
                onClick: _v4,
                children: _v0
              })
            },
            dictionary: {
              es: {
                singular: "Para generar análisis a nivel del espectador, {A}complete su evento{/A}."
              },
              "de-DE": {
                singular: "Um Analysen auf Zuschauerebene zu erstellen, {A}schließen Sie Ihr Event{/A} ab."
              },
              "fr-FR": {
                singular: "Pour générer des statistiques spectateurs, {A}complétez votre événement{/A}."
              },
              "ja-JP": {
                singular: "視聴者レベルの分析を生成するには、 {A}イベントを完了してください{/A} 。"
              },
              "ko-KR": {
                singular: "시청자 수준 분석을 생성하려면 {A}이벤트를 완료{/A}하세요."
              },
              "pt-BR": {
                singular: "Para gerar análises no nível do espectador, {A}conclua seu evento{/A}."
              },
              "zh-CN": {
                singular: "要生成观众级分析，{A}请完成活动{/A}。"
              }
            }
          })
        })
      })]
    });
  }], 0);
  var _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0),
    _v32 = _v0.i(0),
    _v33 = _v0.i(0),
    _v34 = _v0.i(0),
    _v35 = _v0.i(0),
    _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0);
  async function _v39({
    baseUrl: _v0,
    where: {
      registrantId: _v1
    },
    ..._v2
  }) {
    return (0, _v37.measureLatency)("deleteLeadCaptureRegistrant", "DELETE", async () => {
      let _v0 = await fetch(`${_v0}/lead_capture/registrants/${_v1}`, {
        ..._v2,
        method: "DELETE"
      });
      if (!_v0.ok) throw new _v38.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v38.deepCamelCase)(_v1);
    });
  }
  async function _v40({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      registrantId: _v3
    },
    ..._v4
  }) {
    return (0, _v37.measureLatency)("patchLeadCaptureRegistrant", "PATCH", async () => {
      let _v0 = await fetch(`${_v0}/lead_capture/registrants/${_v3}?fields=${_v1.map(_v38.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "PATCH",
        body: JSON.stringify((0, _v38.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v38.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v38.deepCamelCase)(_v1);
    });
  }
  var _v41 = _v0.i(0),
    _v42 = _v0.i(0);
  function _v43() {
    let {
        mutate: _v0
      } = (0, _v41.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v42.useGctlConfig)(),
      [_v5, _v6] = (0, _v36.useInternalState)();
    return [(0, _v6.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/lead_capture/registrants/${_v0.where.registrantId}${(0, _v36.serializeQuery)(_v0)}`, _v39({
          ..._v0,
          baseUrl: _v1,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v2 ? `jwt ${_v2}` : "",
            "Vimeo-Page": `${_v3}`,
            "Accept-Language": _v4 ?? "en"
          }
        }), !1);
        _v6({
          type: "SUCCESS",
          payload: _v0
        });
      } catch (_v0) {
        _v6({
          type: "FAILURE",
          payload: _v0
        });
      }
    }, [_v1, _v3, _v2, _v4, _v6]), _v5];
  }
  function _v44() {
    let {
        mutate: _v0
      } = (0, _v41.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v42.useGctlConfig)(),
      [_v5, _v6] = (0, _v36.useInternalState)();
    return [(0, _v6.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/lead_capture/registrants/${_v0.where.registrantId}${(0, _v36.serializeQuery)(_v0)}`, _v40({
          ..._v0,
          baseUrl: _v1,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v2 ? `jwt ${_v2}` : "",
            "Vimeo-Page": `${_v3}`,
            "Accept-Language": _v4 ?? "en"
          }
        }), !1);
        _v6({
          type: "SUCCESS",
          payload: _v0
        });
      } catch (_v0) {
        _v6({
          type: "FAILURE",
          payload: _v0
        });
      }
    }, [_v1, _v3, _v2, _v4, _v6]), _v5];
  }
  "true" === _v35.default.env.STORYBOOK && (0, _v36.assignMswData)(_v43, {
    endpoint: "/lead_capture/registrants/:registrantId",
    method: "DELETE"
  }), "true" === _v35.default.env.STORYBOOK && (0, _v36.assignMswData)(_v44, {
    endpoint: "/lead_capture/registrants/:registrantId",
    method: "PATCH"
  }), _v0.s(["useDeleteLeadCaptureRegistrant", 0, _v43, "usePatchLeadCaptureRegistrant", 0, _v44], 0), _v0.s(["AttendeeConfirmationModal", 0, ({
    deleteRecordUri: _v0,
    cancelDeleteAttendee: _v1,
    onDeleteSuccessCallback: _v2
  }) => {
    let _v3 = (0, _v33.useToast)(),
      {
        deleteRegistrant: _v4,
        loading: _v5,
        error: _v6,
        data: _v7,
        called: _v8
      } = (() => {
        let [_v0, {
          loading: _v1,
          error: _v2,
          data: _v3,
          called: _v4
        }] = _v43();
        return {
          deleteRegistrant: _v0 => {
            _v0 && _v0({
              where: {
                registrantId: `${(0, _v14.getLastUuidFromUri)(_v0)}`
              }
            });
          },
          ...(0, _v6.useMemo)(() => ({
            loading: _v1,
            error: _v2,
            data: _v3,
            called: _v4
          }), [_v1, _v2, _v3, _v4])
        };
      })(),
      _v9 = (0, _v34.useIsBokeh)();
    return (0, _v6.useEffect)(() => {
      !_v5 && _v8 && (_v6 ? _v3({
        title: _v24.default.ChangesCouldNotBeSaved,
        status: "error"
      }) : _v0 && _v2(), _v1());
    }, [_v7, _v6, _v5, _v8]), (0, _v5.jsxs)(_v28.Modal, {
      isOpen: !!_v0,
      onClose: _v1,
      size: "lg",
      children: [(0, _v5.jsx)(_v30.ModalOverlay, {
        zIndex: "modal"
      }), (0, _v5.jsxs)(_v29.ModalContent, {
        color: "text-primary",
        py: "md",
        px: "lg",
        width: (0, _v32.rem)(480),
        children: [(0, _v5.jsx)(_v27.Header, {
          variant: "heading-md",
          size: "xl",
          children: _v24.default.DeleteAttendeeHeader
        }), (0, _v5.jsx)(_v31.Paragraph, {
          variant: "body-md",
          py: "sm",
          children: _v24.default.DeleteAttendeeDescription
        }), (0, _v5.jsxs)(_v26.Flex, {
          justifyContent: "flex-end",
          mt: "md",
          children: [(0, _v5.jsx)(_v25.Button, {
            minW: (0, _v32.rem)(100),
            mr: (0, _v32.rem)(11),
            isDisabled: _v5,
            variant: "tertiary",
            onClick: _v1,
            children: _v24.default.Cancel
          }), (0, _v5.jsx)(_v25.Button, {
            minW: (0, _v32.rem)(100),
            isLoading: _v5,
            variant: _v9 ? "destructive" : "negative",
            onClick: () => _v4(_v0),
            children: _v24.default.Delete
          })]
        })]
      })]
    });
  }], 0), _v0.s(["BP_CLICK_EVENT_FIELDS", 0, {
    PAGE: {
      LIVE_EVENTS_MANAGER: "live_events_manager",
      VIDEO_LIBRARY: "video_library",
      VIDEO_LIBRARY_FOLDERS: "video_library_folders",
      VIDEO_LIBRARY_TOPNAV: "video_library_topnav",
      VIDEO_MANAGER_FOLDERS: "video_manager_folders",
      VIDEO_MANAGER_SIDENAV: "video_manager_sidenav",
      VIDEO_MANAGER_TOPNAV: "video_manager_topnav",
      WEBINAR_ATTENDEE_MANAGEMENT: "webinar_attendee_management",
      WEBINAR_ATTENDEE_MODAL: "webinar_attendee_modal",
      WEBINAR_MANAGEMENT: "webinar_management"
    },
    LOCATION: {
      ATTENDEES_UPLOAD_CSV_POPOVER: "attendees_upload_csv_popover",
      ATTENDEES_IMPORT_CRM_POPOVER: "attendees_import_crm_popover",
      BADGE: "badge",
      BANNER: "banner",
      GLOBAL_NAV: "global_nav",
      ICON: "icon",
      LIVE_EVENT_CARD: "live_event_card",
      PRIVACY_DRAWER: "privacy_drawer",
      UPLOAD_CSV_MODAL: "upload_csv_modal",
      IMPORT_CRM_MODAL: "import_crm_modal",
      VIDEO_MANAGER_SIDENAV: "video_manager_sidenav"
    },
    TARGET: {
      PRICING_PAGE: "pricing_page",
      UPSELL_EMAIL: "upsell_email",
      WEBINAR_HOME_PAGE: "/manage/webinars"
    },
    NAME: {
      WEBINAR_UPSELL: "webinar_upsell"
    },
    COPY: {
      CONTACT_US: "Contact Us",
      DEMO: "Demo",
      SEE_PLANS: "See plans",
      UPGRADE: "Upgrade",
      ENTERPRISE_ONLY: "Enterprise Only"
    },
    FEATURE: {
      WEBINAR: "webinar"
    },
    TYPE: {
      UPSELL: "upsell"
    }
  }], 0);
  var _v45 = _v0.i(0),
    _v46 = _v0.i(0),
    _v47 = _v0.i(0),
    _v48 = _v0.i(0),
    _v49 = _v0.i(0),
    _v50 = _v0.i(0),
    _v51 = _v0.i(0),
    _v52 = _v0.i(0),
    _v53 = _v0.i(0),
    _v54 = _v0.i(0),
    _v55 = _v0.i(0),
    _v56 = _v0.i(0);
  let _v57 = {
      REGISTRANTS_UPLOAD_CSV_MODAL: "vimeo.registrants_upload_csv_modal",
      REGISTRANTS_EXPORT_CSV: "vimeo.registrants_export_csv",
      REGISTRANTS_SYNC_EMAIL_PROVIDER: "vimeo.registrants_sync_email_provider",
      CONNECT_EMAIL_PROVIDERS: "vimeo.connect_email_providers",
      UPSELL_TRIGGER_IMPRESSION: "vimeo.upsell_trigger_impression",
      NOTIFICATION_VIEW: "vimeo.notification_view",
      NOTIFICATION_ACTION: "vimeo.notification_action"
    },
    _v58 = 12,
    _v59 = {
      DRAWER: "drawer",
      TOP_ACTION_BAR: "top_action_bar",
      MODAL: "modal",
      MODAL_BOTTOM_BANNER: "modal_bottom_banner",
      HEADER: "header",
      CONTENT_AREA: "content_area",
      BANNER: "banner"
    },
    _v60 = {
      CONNECT_PROVIDERS: "Connect Providers",
      UPLOAD_CSV: "upload csv",
      NEXT: "next",
      SUBMIT: "submit",
      SYNC: "sync",
      SYNC_FROM_EMAIL_LIST: "sync from email list",
      EXPORT_CSV: "Export csv",
      SHARE: {
        [_v3.ENTITY_TYPE.EVENT]: "Share event",
        [_v3.ENTITY_TYPE.VIDEO]: "Share video",
        [_v3.ENTITY_TYPE.SHOWCASE]: "Share showcase"
      },
      UPGRADE: "Upgrade",
      WATCH_TIME: "Watch time",
      TRY_AGAIN: "try again",
      MANAGE_INTEGRATIONS: "manage integrations",
      GET_TIPS: "get troubleshooting tips",
      X: "X",
      DOWNLOAD_ERRORS: "download errors"
    },
    _v61 = {
      EVENT_REGISTRATION_PAGE: "event_registration_page",
      SINGLE_VIDEO_VIEW_MANAGE: "single_video_view_manage",
      VIDEO_REGISTRATION_PAGE: "video_registration_page",
      SHOWCASE_MANAGER: "showcase_manager"
    },
    _v62 = {
      CORE_CONNECT: "core_connect"
    },
    _v63 = {
      MARKETING: "Marketing"
    },
    _v64 = {
      REGISTRATION: "registration"
    },
    _v65 = {
      GATES: "gates"
    };
  _v0.s(["BP_COPY", 0, _v60, "BP_CURRENT_SCHEMA_VERSION", 0, _v58, "BP_ELEMENT", 0, {
    BUTTON: "button"
  }, "BP_EVENT_NAME", 0, _v57, "BP_FEATURE", 0, _v64, "BP_FLOW", 0, {
    ADD_ATTENDEES: "add_attendees",
    MAP_ATTENDEES: "map_attendee",
    REGISTRANTS_TAB: "registrants_tab",
    UPLOAD_CSV: "upload_csv",
    SYNC_FROM_EMAIL: "sync_from_email"
  }, "BP_INTEGRATION_TYPE", 0, _v62, "BP_LOCATION", 0, _v59, "BP_MODAL", 0, {
    REGISTRANT_UPLOAD_CSV_MODAL: "registrants_upload_csv_modal",
    REGISTRANT_EMAIL_PROVIDER_MODAL: "registrant_email_provider_modal",
    ATTENDEES_MODAL: "attendees_modal"
  }, "BP_NOTIFICATION_NAME", 0, {
    CRM_REGISTRANTS_ERROR_IMPORT: "crm_registrants_error_import",
    CRM_REGISTRANTS_ERROR_EXPORT: "crm_registrants_error_export",
    CSV_REGISTRANTS_ERROR_IMPORT: "csv_registrants_error_import",
    CSV_REGISTRANTS_SUCCESS: "csv_registrants_success",
    CRM_REGISTRANTS_SUCCESS: "crm_registrants_success",
    CSV_REGISTRANTS_PROGRESS: "csv_registrants_progress",
    CRM_REGISTRANTS_PROGRESS: "crm_registrants_progress"
  }, "BP_PAGE", 0, {
    EVENT_REGISTRATION_PAGE: "event_registration_page"
  }, "BP_PAGE_NAME", 0, _v61, "BP_PARTNET_BUCKET", 0, _v63, "BP_PRODUCT", 0, _v65, "BP_REFERRER_PAGE_NAME", 0, {
    SVVM: "single_video_view_manage"
  }, "BP_TARGET", 0, {
    USER_SETTINGS: "user_settings",
    UPGRADE_PAGE: "upgrade_page"
  }, "BP_VALUES", 0, {
    CONNECT_EMAIL_PROVIDERS: "connect_email_providers",
    OPEN_UPLOAD_CSV_MODAL: "open_upload_csv_modal",
    UPLOAD_ATTENDEE_CSV_FILE: "upload_attendess_csv_file",
    UPLOAD_CSV_MODAL_NEXT: "upload_csv_modal_next",
    FINISH_UPLOAD_CSV_MODAL: "finish_upload_csv_modal",
    OPEN_EMAIL_PROVIDER_MODAL: "open_email_provider_modal",
    REGISTRANT_SYNC_EMAIL_PROVIDER: "registrants_sync_email_provider",
    EXPORT_REGISTRANTS_CSV: "export_registrants_csv"
  }, "UPSELL_NAME", 0, {
    ADD_VIDEO_REG_CAPABILITY: "add_video_registration_capability",
    ADD_SHOWCASE_REG_CAPABILITY: "add_showcase_registration_capability"
  }, "buildNotificationCopy", 0, (_v0, _v1, _v2, _v3) => {
    if (_v0 === _v16.IMPORT_TYPE.CSV) return _v2 === _v16.CRM_CSV_STATUS.SUCCESS ? `Registrants imported from "${_v3}"` : `Importing registrants from "${_v3}"`;
    let _v4 = _v1 === _v16.SYNC_TYPE.EXPORT ? "Exporting" : "Syncing",
      _v5 = _v1 === _v16.SYNC_TYPE.EXPORT ? "exported to" : "synced from";
    return _v2 === _v16.CRM_CSV_STATUS.SUCCESS ? `Registrants ${_v5} "${_v3}"` : `${_v4} registrants ${_v5} "${_v3}"`;
  }], 0);
  let _v66 = () => {
    let _v0 = _v4(_v0 => _v0.entityType),
      _v1 = _v4(_v0 => _v0.entityId),
      {
        privacy: _v2,
        numberOfVideos: _v3,
        seoAllowIndexed: _v4
      } = _v19(),
      _v5 = (0, _v15.useViewer)()?.teamUser,
      _v6 = (() => {
        let _v0 = _v4(_v0 => _v0.entityType),
          _v1 = _v4(_v0 => _v0.entityId),
          [_v2, _v3] = (0, _v56.useGetLeadCaptureResourceIdFormLazy)();
        return (0, _v6.useEffect)(() => {
          _v1 && _v0 && _v2({
            where: {
              resourceId: _v1,
              resourceType: _v3.ENTITY_TO_PATH_MAP[_v0]
            },
            select: ["uuid"]
          });
        }, [_v1, _v0, _v2]), _v3.data?.uuid;
      })(),
      _v7 = (0, _v6.useMemo)(() => {
        if (_v0 === _v3.ENTITY_TYPE.EVENT) switch (_v2?.embed) {
          case "public":
            return "public";
          case "private":
            return "private";
          case "whitelist":
            return "password";
        }
        return null;
      }, [_v0, _v2]),
      _v8 = (0, _v6.useMemo)(() => _v0 === _v3.ENTITY_TYPE.EVENT ? window.location.pathname.includes("rtmp") ? "live_event_rtmp_page" : "live_browser_studio" : null, [_v0]),
      _v9 = (0, _v6.useMemo)(() => _v0 === _v3.ENTITY_TYPE.EVENT ? window.location.pathname.includes("rtmp") ? "stream_management" : "browser_studio" : null, [_v0]),
      _v10 = (0, _v6.useMemo)(() => {
        switch (_v0) {
          case _v3.ENTITY_TYPE.EVENT:
          case _v3.ENTITY_TYPE.VIDEO:
          case _v3.ENTITY_TYPE.SHOWCASE:
            return window.location.href ?? null;
        }
        return null;
      }, [_v0]),
      _v11 = (0, _v6.useMemo)(() => {
        switch (_v0) {
          case _v3.ENTITY_TYPE.EVENT:
            return _v61.EVENT_REGISTRATION_PAGE;
          case _v3.ENTITY_TYPE.VIDEO:
            return _v61.SINGLE_VIDEO_VIEW_MANAGE;
          case _v3.ENTITY_TYPE.SHOWCASE:
            return _v61.SHOWCASE_MANAGER;
          default:
            return _v61.EVENT_REGISTRATION_PAGE;
        }
      }, [_v0]),
      _v12 = (0, _v6.useCallback)(({
        eventName: _v0,
        copy: _v1 = null,
        actionName: _v2,
        pageName: _v3 = _v11,
        providerName: _v4 = null,
        providerListId: _v5 = null,
        videoId: _v6,
        version: _v7 = _v58,
        location: _v8 = _v59.DRAWER,
        target: _v9 = null,
        element: _v10 = "button",
        flow: _v11 = null,
        modalName: _v12 = null,
        liveFeature: _v13 = "registration_form",
        isIntegration: _v14 = !1,
        integrationId: _v15 = null,
        integrationName: _v16 = null,
        integrationType: _v17 = null,
        partnerBucket: _v18 = null,
        isPartner: _v19 = null,
        referrerPage: _v20 = _v8
      }) => {
        let _v21 = {
          ...(0, _v46.buildActionBpContext)({
            action_type: "click",
            feature: null
          }),
          ...(0, _v54.buildWebBpContext)({
            page_name: _v3,
            referrer_page_name: _v20,
            referrer: _v10,
            path: window.location.pathname,
            target: _v9,
            copy: null,
            location: null
          }),
          ...(0, _v50.buildTeamBpContextFromTeamUser)(_v5 ?? void 0),
          ...(0, _v49.buildProductAnalyticsBpContext)({
            feature: "registration",
            product: "gates",
            element: _v10,
            location: _v8,
            copy: _v1,
            modal_name: _v12,
            device_type: (0, _v45.default)(),
            flow: _v11,
            entity_type: (0, _v14.getFormattedEntityType)(_v0)
          }),
          ...(0, _v51.buildThirdPartyIntegrationBpContext)({
            is_integration: _v14,
            integration_id: _v15,
            integration_name: _v16,
            integration_type: _v17,
            partner_bucket: _v18,
            is_partner: _v19
          }),
          ...(_v0 === _v3.ENTITY_TYPE.VIDEO && (0, _v52.buildVideoBpContext)({
            video_id: Number(_v1)
          })),
          ...(_v0 === _v3.ENTITY_TYPE.EVENT && (0, _v48.buildLiveBpContext)({
            live_feature: _v13,
            live_event_id: _v1,
            live_event_type: "live_event",
            recurring_live_event_id: _v1,
            live_production_method: _v9
          })),
          ...(_v0 === _v3.ENTITY_TYPE.SHOWCASE && (0, _v47.buildCollectionBpContext)({
            collection_privacy: null,
            entity_id: parseInt(_v1),
            number_of_videos: _v3 ?? null,
            collection_embed_privacy: _v2?.view ?? null,
            is_seo_on: _v4 ?? null
          }))
        };
        (0, _v55.sendBpEventWithContexts)(_v0, _v21, _v7, {
          action_name: _v2,
          form_id: _v6,
          provider_list_id: _v5,
          provider_name: _v4
        });
      }, [_v11, _v8, _v10, _v5, _v0, _v1, _v9, _v3, _v2?.view, _v4, _v6]),
      _v13 = (0, _v6.useCallback)(({
        copy: _v0,
        version: _v1 = _v58,
        location: _v2 = _v59.CONTENT_AREA,
        liveFeature: _v3 = "registration_form",
        isIntegration: _v4 = !1,
        integrationId: _v5 = null,
        integrationName: _v6 = null,
        integrationType: _v7 = null,
        partnerBucket: _v8 = null,
        isPartner: _v9 = null,
        referrerPage: _v10 = _v8
      }) => {
        let _v11 = {
          ...(0, _v46.buildActionBpContext)({
            action_type: "click",
            feature: null
          }),
          ...(0, _v54.buildWebBpContext)({
            page_name: _v11,
            referrer_page_name: _v10,
            referrer: _v10,
            path: window.location.pathname
          }),
          ...(0, _v50.buildTeamBpContextFromTeamUser)(_v5 ?? void 0),
          ...(0, _v49.buildProductAnalyticsBpContext)({
            feature: "share_link",
            product: "gates",
            element: "button",
            location: _v2,
            copy: _v0,
            modal_name: null,
            device_type: (0, _v45.default)(),
            flow: "registrants_tab",
            entity_type: (0, _v14.getFormattedEntityType)(_v0)
          }),
          ...(0, _v51.buildThirdPartyIntegrationBpContext)({
            is_integration: _v4,
            integration_id: _v5,
            integration_name: _v6,
            integration_type: _v7,
            partner_bucket: _v8,
            is_partner: _v9
          }),
          ...(_v0 === _v3.ENTITY_TYPE.VIDEO && (0, _v52.buildVideoBpContext)({
            video_id: parseFloat(_v1)
          })),
          ...(_v0 === _v3.ENTITY_TYPE.EVENT && (0, _v48.buildLiveBpContext)({
            live_feature: _v3,
            live_event_id: _v1,
            live_event_type: "live_event",
            recurring_live_event_id: _v1,
            live_production_method: _v9
          })),
          ...(_v0 === _v3.ENTITY_TYPE.SHOWCASE && (0, _v47.buildCollectionBpContext)({
            collection_privacy: null,
            entity_id: parseInt(_v1),
            number_of_videos: _v3 ?? null,
            collection_embed_privacy: _v2?.view ?? null,
            is_seo_on: _v4 ?? null
          }))
        };
        (0, _v55.sendBpEventWithContexts)("vimeo.distribute_content", _v11, _v1, {
          distribution_type: "share",
          target_quality: null,
          target_resolution: null,
          target_file_details: null,
          number_of_items: 1,
          embed_config: null,
          embed_custom_dimensions: null,
          is_internal: !1,
          sharee_id: null,
          sharee_entity_permission: null,
          is_send_email_notification: !1,
          sharee_team_permission: null,
          sharee_email: null,
          collection_type: null
        });
      }, [_v11, _v1, _v0, _v9, _v10, _v8, _v5]),
      _v14 = (0, _v6.useCallback)(({
        eventName: _v0,
        copy: _v1 = null,
        element: _v2 = null,
        notificationName: _v3,
        errorName: _v4,
        notificationCopy: _v5,
        integrationName: _v6 = null,
        targetPath: _v7 = null
      }) => {
        let _v8 = {
          ...(_v0 === _v57.NOTIFICATION_VIEW ? (0, _v53.buildViewBpContext)({
            view_type: "impression",
            feature: null
          }) : (0, _v46.buildActionBpContext)({
            action_type: "click",
            feature: null
          })),
          ...(0, _v54.buildWebBpContext)({
            page_name: _v11,
            referrer_page_name: _v8,
            referrer: _v10,
            path: window.location.pathname,
            target_path: _v7
          }),
          ...(0, _v49.buildProductAnalyticsBpContext)({
            feature: _v64.REGISTRATION,
            product: _v65.GATES,
            element: _v2,
            location: _v59.BANNER,
            copy: _v1,
            modal_name: null,
            device_type: (0, _v45.default)(),
            flow: null,
            entity_type: (0, _v14.getFormattedEntityType)(_v0)
          }),
          ...(_v0 === _v3.ENTITY_TYPE.VIDEO && (0, _v52.buildVideoBpContext)({
            video_id: Number(_v1)
          })),
          ...(_v0 === _v3.ENTITY_TYPE.EVENT && (0, _v48.buildLiveBpContext)({
            live_feature: "registration_form",
            live_event_id: _v1,
            live_event_type: "live_event",
            recurring_live_event_id: _v1,
            live_production_method: _v9,
            event_privacy: _v7
          })),
          ...(0, _v50.buildTeamBpContextFromTeamUser)(_v5 ?? void 0),
          ...(0, _v51.buildThirdPartyIntegrationBpContext)({
            is_integration: !!_v6,
            integration_id: null,
            integration_name: _v6 ?? null,
            integration_type: _v6 ? _v62.CORE_CONNECT : null,
            partner_bucket: _v6 ? _v63.MARKETING : null,
            is_partner: !!_v6 || null
          })
        };
        (0, _v55.sendBpEventWithContexts)(_v0, _v8, 3, {
          notification_name: _v3,
          error_name: _v4 ?? null,
          error_id: null,
          notification_copy: _v5,
          checkbox_copy: null,
          is_marked_checkbox: null
        });
      }, [_v11, _v1, _v0, _v7, _v9, _v10, _v8, _v5]);
    return {
      ...(0, _v6.useMemo)(() => ({
        sendRegistrationActionBP: _v12,
        sendShareLinkBpEvent: _v13,
        sendAlertBpEvent: _v14
      }), [_v12, _v13, _v14])
    };
  };
  _v0.s(["useAnalytics", 0, _v66], 0), _v0.s(["useRegistrantDownload", 0, () => {
    let _v0 = (0, _v15.useViewer)(),
      _v1 = _v0?.jwt,
      _v2 = _v0?.locale,
      _v3 = _v0?.apiUrl,
      {
        uri: _v4,
        title: _v5
      } = _v19();
    return {
      download: () => {
        if (!_v3 || !_v1 || !_v2) return;
        let _v0 = document.createElement("a");
        _v0.href = `//${_v3}/lead_capture${_v4}/registrants/export?jwt_token=${_v1}&format=csv&locale=${_v2}&sort=registration_date&direction=asc`, _v0.download = `${_v5}.csv`, _v0.click();
      }
    };
  }], 0);
  var _v67 = _v0.i(0),
    _v68 = _v0.i(0),
    _v69 = _v0.i(0);
  _v0.s(["useShareEntity", 0, () => {
    let _v0 = _v4(_v0 => _v0.entityType),
      {
        entityLink: _v1,
        status: _v2
      } = _v19(),
      _v3 = (0, _v33.useToast)(),
      {
        sendShareLinkBpEvent: _v4
      } = _v66(),
      {
        trackLiveStreamRegistrantsActionClicked: _v5
      } = (0, _v69.useLiveStreamBroadcasterTracking)(),
      _v6 = _v0 !== _v3.ENTITY_TYPE.EVENT ? _v1 : `${_v68.safeWindow?.location.origin ?? ""}${_v1}`,
      _v7 = _v0 !== _v3.ENTITY_TYPE.EVENT || _v2 !== _v16.EVENT_STATUS.ENDED;
    return {
      shareEntity: (0, _v6.useCallback)(({
        location: _v0 = _v59.CONTENT_AREA
      } = {}) => {
        (0, _v67.default)(_v6 ?? ""), _v3({
          title: _v24.default.LinkCopied,
          status: "info"
        }), _v4({
          copy: _v60.SHARE[_v0],
          version: 8,
          location: _v0
        }), _v0 === _v3.ENTITY_TYPE.EVENT && _v5({
          liveStreamRegistrantsAction: "share_event"
        });
      }, [_v0, _v4, _v6, _v3, _v5]),
      canShare: _v7
    };
  }], 0);
  let _v70 = (0, _v6.createContext)({
    canEdit: !1,
    canGoLive: !1,
    isOwner: !1
  });
  _v0.s(["TeamContext", 0, _v70, "default", 0, function ({
    children: _v0,
    isOwner: _v1,
    canEdit: _v2
  }) {
    let _v3 = (0, _v15.useViewer)(),
      _v4 = _v3?.teamUser,
      _v5 = _v4?.plainTextPermissionLevel === "Admin",
      _v6 = !!_v4 && _v4.hasLivePermissionGrant,
      _v7 = _v1 || _v5 || _v6;
    return (0, _v5.jsx)(_v70.Provider, {
      value: {
        isOwner: _v1,
        canGoLive: _v7,
        canEdit: _v7 || _v2
      },
      children: _v0
    });
  }], 0), _v0.s(["useTeamStore", 0, () => (0, _v6.useContext)(_v70)], 0);
  var _v71 = ((_v1 = {}).SET_CRM_STATUS = "SET_CRM_STATUS", _v1.SET_CRM_CONNECTION = "SET_CRM_CONNECTION", _v1.SET_CSV_BANNERS = "SET_CSV_BANNERS", _v1.SET_PROVIDERS = "SET_PROVIDERS", _v1.SET_LOADING_PROVIDER = "SET_LOADING_PROVIDER", _v1.SET_PROVIDER = "SET_PROVIDER", _v1.SET_LIST = "SET_LIST", _v1.SET_SHOW_MODAL = "SET_SHOW_MODAL", _v1.SET_UPLOADED_CSV = "SET_UPLOADED_CSV", _v1.SET_STEP_COUNT = "SET_STEP_COUNT", _v1.SET_CHECKBOX_SELECTED = "SET_CHECKBOX_SELECTED", _v1.SET_PROCESSING_CSV = "SET_PROCESSING_CSV", _v1.SET_COLUMN_HEADERS = "SET_COLUMN_HEADERS", _v1.SET_CSV_ENTRIES = "SET_CSV_ENTRIES", _v1.SET_COLUMNS_MAP = "SET_COLUMNS_MAP", _v1.SET_CSV_ERROR = "SET_CSV_ERROR", _v1.SET_PROCESSING_CSV_SUCCESS = "SET_PROCESSING_CSV_SUCCESS", _v1.SET_API_PENDING = "SET_API_PENDING", _v1.SET_API_SUCCESS = "SET_API_SUCCESS", _v1.SET_API_ERROR = "SET_API_ERROR", _v1.CLOSE_MODAL = "CLOSE_MODAL", _v1.RESET_STATE = "RESET_STATE", _v1.CONNECT_CLICK = "CONNECT_CLICK", _v1.SHOW_SUCCESS = "SHOW_SUCCESS", _v1.NEW_UPLOAD = "NEW_UPLOAD", _v1.SHOW_UPGRADE_POPOVER = "SHOW_UPGRADE_POPOVER", _v1.PROCESSING_CRM_DATA = "PROCESSING_CRM_DATA", _v1.LOADING_CRM = "LOADING_CRM", _v1.SHOW_DISCONNECT_MODAL = "SHOW_DISCONNECT_MODAL", _v1);
  let _v72 = {
      PROCESSING_CRM_DATA: "processingCRM",
      SET_LOADING_PROVIDER: "loadingProvider",
      SET_PROVIDERS: "providers",
      SET_PROVIDER: "selectedProvider",
      SET_LIST: "selectedList",
      SET_CSV_BANNERS: "uploadCSVBanners",
      SET_CRM_STATUS: "importCRMStatus",
      SET_SHOW_MODAL: "showModalType",
      SET_STEP_COUNT: "stepCount",
      SET_CHECKBOX_SELECTED: "checkBoxSelected",
      SET_PROCESSING_CSV: "processingCsv",
      SET_COLUMN_HEADERS: "columnHeaders",
      SET_CSV_ENTRIES: "csvEntries",
      SET_COLUMNS_MAP: "columnsMap",
      CONNECT_CLICK: "connectEmailProvidersClicked",
      SHOW_SUCCESS: "showSuccessScreen",
      NEW_UPLOAD: "newUpload",
      SHOW_UPGRADE_POPOVER: "showUpgradeType",
      SET_CRM_CONNECTION: "importCRMConnection",
      SHOW_DISCONNECT_MODAL: "showCRMDisconnectModal",
      LOADING_CRM: "loadingCRM"
    },
    _v73 = {
      firstName: null,
      lastName: null,
      emailAddress: null
    },
    _v74 = {
      uploadedCsv: null,
      stepCount: _v16.UPLOAD_CSV_MODAL_STEPS[0],
      checkBoxSelected: !1,
      processingCsv: !1,
      columnHeaders: [],
      csvEntries: 0,
      columnsMap: _v73,
      csvError: null,
      apiPending: !1,
      apiError: null,
      showUpgradeType: null,
      showModalType: null,
      showCRMDisconnectModal: !1,
      loadingCRM: !1
    },
    _v75 = {
      ..._v74,
      providers: [],
      processingCRM: !1,
      importCRMStatus: [],
      importCRMConnection: []
    };
  function _v76(_v0, _v1) {
    switch (_v1.type) {
      case "NEW_UPLOAD":
      case "SET_LOADING_PROVIDER":
      case "SHOW_SUCCESS":
      case "SET_LIST":
      case "SET_PROVIDERS":
      case "SET_CSV_BANNERS":
      case "SET_SHOW_MODAL":
      case "SET_COLUMNS_MAP":
      case "SET_CSV_ENTRIES":
      case "SET_COLUMN_HEADERS":
      case "SET_PROCESSING_CSV":
      case "SET_CHECKBOX_SELECTED":
      case "SET_STEP_COUNT":
      case "CONNECT_CLICK":
      case "SHOW_UPGRADE_POPOVER":
      case "PROCESSING_CRM_DATA":
      case "SET_CRM_CONNECTION":
      case "SHOW_DISCONNECT_MODAL":
      case "LOADING_CRM":
        return {
          ..._v0,
          [_v72[_v1.type]]: _v1.payload
        };
      case "SET_CRM_STATUS":
        let _v0 = _v1.payload ?? [];
        return _v0 = _v0.filter(_v0 => _v0.pendingUserAction), {
          ..._v0,
          importCRMStatus: _v0
        };
      case "SET_PROVIDER":
        return {
          ..._v0,
          selectedProvider: _v1.payload,
          selectedList: void 0
        };
      case "SET_UPLOADED_CSV":
        return {
          ..._v0,
          uploadedCsv: _v1.payload,
          columnsMap: _v73,
          apiError: null
        };
      case "SET_CSV_ERROR":
        return {
          ..._v0,
          csvError: _v1.payload,
          processingCsv: !1
        };
      case "SET_PROCESSING_CSV_SUCCESS":
        return {
          ..._v0,
          csvEntries: _v1.payload.csvEntries,
          processingCsv: !1,
          stepCount: _v1.payload.stepCount
        };
      case "SET_API_PENDING":
        return {
          ..._v0,
          apiPending: _v1.payload,
          apiError: null
        };
      case "SET_API_SUCCESS":
        return {
          ..._v0,
          apiPending: !1,
          apiError: null,
          showSuccessScreen: !0,
          stepCount: _v16.UPLOAD_CSV_MODAL_STEPS[2]
        };
      case "SET_API_ERROR":
        return {
          ..._v0,
          apiPending: !1,
          apiError: _v1.payload
        };
      case "CLOSE_MODAL":
        return {
          ..._v0,
          uploadedCsv: null,
          stepCount: _v16.UPLOAD_CSV_MODAL_STEPS[0],
          checkBoxSelected: !1,
          processingCsv: !1,
          columnHeaders: [],
          csvEntries: 0,
          columnsMap: _v73,
          csvError: null,
          apiPending: !1,
          apiError: null,
          showModalType: null,
          showSuccessScreen: !1,
          selectedList: void 0,
          selectedProvider: null
        };
      case "RESET_STATE":
        return {
          ..._v0,
          ..._v74
        };
      default:
        return _v0;
    }
  }
  _v0.s(["ACTION_TYPE", () => _v71, "useImportRegistrantReducer", 0, function () {
    let [_v0, _v1] = (0, _v6.useReducer)(_v76, _v75);
    return [_v0, _v1];
  }], 0);
  var _v77 = _v0.i(0),
    _v78 = _v0.i(0),
    _v79 = _v0.i(0);
  async function _v80({
    baseUrl: _v0,
    variables: _v1,
    where: {
      resourceType: _v2,
      resourceId: _v3
    },
    ..._v4
  }) {
    return (0, _v37.measureLatency)("putLeadCaptureResourceIdRegistrantsImport", "PUT", async () => {
      let _v0 = await fetch(`${_v0}/lead_capture/${_v2}/${_v3}/registrants/import`, {
        ..._v4,
        method: "PUT",
        body: JSON.stringify((0, _v38.deepSnakeCase)(_v1))
      });
      if (!_v0.ok) throw new _v38.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v38.deepCamelCase)(_v1);
    });
  }
  function _v81() {
    let {
        mutate: _v0
      } = (0, _v41.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v42.useGctlConfig)(),
      [_v5, _v6] = (0, _v36.useInternalState)();
    return [(0, _v6.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/lead_capture/${_v0.where.resourceType}/${_v0.where.resourceId}/registrants/import${(0, _v36.serializeQuery)(_v0)}`, _v80({
          ..._v0,
          baseUrl: _v1,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v2 ? `jwt ${_v2}` : "",
            "Vimeo-Page": `${_v3}`,
            "Accept-Language": _v4 ?? "en"
          }
        }), !1);
        _v6({
          type: "SUCCESS",
          payload: _v0
        });
      } catch (_v0) {
        _v6({
          type: "FAILURE",
          payload: _v0
        });
      }
    }, [_v1, _v3, _v2, _v4, _v6]), _v5];
  }
  _v0.s(["UpsellBadge", 0, ({
    enterpriseFeatureOverride: _v0,
    modalConfig: _v1,
    onClick: _v2
  }) => {
    let {
        hasLiveSubscription: _v3
      } = _v23(),
      {
        isOpen: _v4,
        onOpen: _v5,
        onClose: _v6
      } = (0, _v77.useDisclosure)(),
      _v7 = () => {
        _v2?.(), _v5();
      },
      _v8 = _v4(_v0 => _v0.entityType);
    return (0, _v5.jsxs)(_v5.Fragment, {
      children: [(0, _v5.jsx)("div", {
        onClick: _v7,
        children: (0, _v5.jsx)(_v79.UpgradeBadge, {
          onClick: _v7,
          name: "lead_capture_dashboard_upgrade_button",
          location: "lead_capture_dashboard"
        })
      }), _v4 && (0, _v5.jsx)(_v78.UpsellModal, {
        enterpriseFeatureOverride: _v0,
        hasLiveSubscription: _v3,
        hideModal: _v6,
        modalConfig: _v1,
        entityType: _v8
      })]
    });
  }], 0), "true" === _v35.default.env.STORYBOOK && (0, _v36.assignMswData)(_v81, {
    endpoint: "/lead_capture/:resourceType/:resourceId/registrants/import",
    method: "PUT"
  }), _v0.s(["usePutLeadCaptureResourceIdRegistrantsImport", 0, _v81], 0);
}