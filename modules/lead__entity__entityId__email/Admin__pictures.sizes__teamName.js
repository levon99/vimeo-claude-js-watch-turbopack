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
  let _v13 = {
      uri: null,
      id: null,
      teamName: null,
      accentColor: null,
      logoUri: null,
      pictures: {
        sizes: []
      },
      teamShowcaseId: null,
      canCreate: !1,
      canEdit: !1,
      canDelete: !1,
      canGoLive: !1,
      isOwner: !1,
      isLoading: !0,
      canAddPlayerLogo: !1
    },
    _v14 = (0, _v1.createContext)(_v13),
    _v15 = () => (0, _v1.useContext)(_v14);
  _v0.s(["default", 0, ({
    children: _v0
  }) => {
    let _v1 = (0, _v10.useEntityStore)(),
      _v2 = (0, _v12.useViewer)(),
      _v3 = _v2?.user,
      _v4 = _v2?.teamUser,
      _v5 = _v1?.user?.uri === _v3?.uri,
      _v6 = !!_v1?.metadata?.interactions.edit?.uri,
      _v7 = _v4?.plainTextPermissionLevel === "Admin",
      [_v8, {
        data: _v9,
        loading: _v10
      }] = (0, _v11.useGetUserTeamLazy)(),
      _v11 = !!_v4 && _v4.hasLivePermissionGrant,
      _v12 = _v5 || _v7 || _v11,
      _v13 = (0, _v8.getUserIdFromUri)(_v1?.user?.uri || _v3?.uri),
      [_v14, _v15] = (0, _v1.useState)(_v13);
    return (0, _v1.useEffect)(() => {
      _v13 && _v8({
        where: {
          userId: _v13
        },
        select: ["pictures.sizes", "teamName", "accentColor", "logoUri", "metadata.connections"],
        query: {
          sizes: "500"
        }
      });
    }, [_v13]), (0, _v1.useEffect)(() => {
      if (!_v10 && _v9) {
        let _v0 = _v9.logoUri && _v9.pictures.sizes.length ? _v9 : {
          ..._v9,
          pictures: {
            sizes: []
          }
        };
        _v15(_v0 => ({
          ..._v0,
          ..._v0,
          isOwner: _v5,
          isLoading: !1,
          canAddPlayerLogo: _v12,
          canGoLive: _v12,
          canDelete: _v12,
          canCreate: _v12,
          canEdit: _v12 || _v6
        }));
      }
    }, [_v10, _v9, _v12, _v6, _v5]), (0, _v2.jsx)(_v14.Provider, {
      value: _v14,
      children: _v0
    });
  }, "useTeamStore", 0, _v15], 0);
  var _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0);
  async function _v22({
    baseUrl: _v0,
    where: {
      userId: _v1,
      liveEventId: _v2,
      reminderId: _v3
    },
    ..._v4
  }) {
    return (0, _v21.measureLatency)("deleteUserLiveEventEmailReminder", "DELETE", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v1}/live_events/${_v2}/email_reminders/${_v3}`, {
        ..._v4,
        method: "DELETE"
      });
      if (!_v0.ok) throw new _v18.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v18.deepCamelCase)(_v1);
    });
  }
  var _v23 = _v0.i(0),
    _v24 = _v0.i(0);
  function _v25() {
    let {
        mutate: _v0
      } = (0, _v23.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v24.useGctlConfig)(),
      [_v5, _v6] = (0, _v20.useInternalState)();
    return [(0, _v1.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/live_events/${_v0.where.liveEventId}/email_reminders/${_v0.where.reminderId}${(0, _v20.serializeQuery)(_v0)}`, _v22({
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
  "true" === _v19.default.env.STORYBOOK && (0, _v20.assignMswData)(_v25, {
    endpoint: "/users/:userId/live_events/:liveEventId/email_reminders/:reminderId",
    method: "DELETE"
  }), _v0.s(["useDeleteUserLiveEventEmailReminder", 0, _v25], 0);
  var _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0),
    _v32 = _v0.i(0),
    _v33 = _v0.i(0),
    _v34 = _v0.i(0),
    _v35 = _v0.i(0);
  let _v36 = {
      SEND_TEST: "send_test",
      UNDO: "undo",
      REDO: "redo",
      MOBILE: "mobile_view",
      WEB: "desktop_view",
      RESET: "reset",
      VISIT_HELP_DOC: "visit_help_doc",
      ADD_LINK: "add_link",
      REMOVE_LINK: "remove_link",
      VISIT_LINK: "visit_link"
    },
    _v37 = {
      CHANGE_REGISTRATION_EMAIL_CONFIG: "vimeo.change_registration_email_config",
      REGISTRATION_EMAIL_PREVIEW: "vimeo.registration_email_preview",
      REGISTRATION_EMAIL_ACTION: "vimeo.registration_email_action",
      REGISTRATION_EMAIL_LAYOUT_CHANGE: "vimeo.registration_email_layout_change",
      TRIGGER_HELP_CENTER: "vimeo.trigger_help_center"
    },
    _v38 = {
      CLICK: "click"
    },
    _v39 = {
      ENABLE: "enable",
      PREVIEW_BY_TYPE: "preview_by_type",
      PREVIEW_BY_DEVICE: "preview_by_device",
      TRIGGER_TEST: "trigger_test",
      CHANGE_SUBJECT: "change_subject",
      DYNAMIC_TAGS_ADDED_TO_SUBJECT: "dynamic_tags_added_to_subject",
      RESET: "reset",
      FROM_TEXT_CHANGED: "from_text_changed",
      ACCENT_COLOR_CHANGED: "accent_color_changed",
      LOGO_ADDED: "logo_added",
      FOOTER_REPLY_EMAIL_ADDED: "footer_reply_email_added",
      FOOTER_COMPANY_ADDRESS_ADDED: "footer_company_address_added",
      FOOTER_PRIVACY_POLICY_ADDED: "footer_privacy_policy_added",
      HEADING_TEXT_CHANGED: "heading_text_changed",
      HEADING_SIZE_CHANGED: "heading_size_changed",
      HEADING_COLOR_CHANGED: "heading_color_changed",
      HEADING_FORMAT_CHANGED: "heading_format_changed",
      HEADING_TAGS_ADDED: "heading_tags_added",
      BODY_TEXT_CHANGED: "body_text_changed",
      BODY_SIZE_CHANGED: "body_size_changed",
      BODY_COLOR_CHANGED: "body_color_changed",
      BODY_FORMAT_CHANGED: "body_format_changed",
      BODY_TAGS_ADDED: "body_tags_added",
      LINKS_DELETED: "links_deleted",
      BUTTON_TEXT_CHANGED: "button_text_changed",
      BUTTON_DEFAULT_LINK_CHANGED: "button_default_link_changed",
      BUTTON_CUSTOM_LINK_CHANGED: "button_custom_link_changed"
    },
    _v40 = {
      CONFIRMATION: "confirmation",
      REMINDER: "reminder",
      FOLLOWUP: "followup"
    },
    _v41 = {
      EVENT_REGISTRATION_PAGE: "event_registration_page"
    },
    _v42 = "Preview-and-customize-your-webinars-emails",
    _v43 = {
      ICON: "icon",
      BUTTON: "button",
      TOGGLE: "toggle"
    };
  _v0.s(["BP_ACTION_NAMES", 0, _v39, "BP_ACTION_TYPES", 0, _v38, "BP_ACTION_VALUES", 0, {
    ON: "ON",
    OFF: "OFF",
    DESKTOP_VIEW: "desktop_view",
    MOBILE_VIEW: "mobile_view"
  }, "BP_COPY", 0, {
    CONFIRMATION: "Confirmation email",
    REMINDER: "Reminder email",
    FOLLOWUP: "Follow up email"
  }, "BP_CTA_TYPE", 0, _v42, "BP_ELEMENT", 0, _v43, "BP_EVENT_NAMES", 0, _v37, "BP_PAGE_NAME", 0, _v41, "BP_TYPE", 0, _v40, "TRIGGER_EMAIL_ACTION", 0, _v36], 0);
  var _v44 = _v0.i(0);
  let _v45 = () => {
    let _v0 = (0, _v44.useConfigStore)(_v0 => _v0.entityId),
      {
        privacy: _v1
      } = (0, _v10.useEntityStore)(),
      _v2 = (0, _v12.useViewer)(),
      _v3 = _v2?.teamUser,
      {
        data: _v4
      } = (0, _v26.useGetLeadCaptureResourceIdForm)({
        select: ["uuid"],
        where: {
          resourceId: _v0,
          resourceType: _v7.ENTITY_TO_PATH_MAP[_v7.ENTITY_TYPE.EVENT]
        }
      }),
      _v5 = _v4?.uuid,
      _v6 = _v0 => (0, _v33.buildViewBpContext)({
        view_type: "pageview",
        feature: null,
        ..._v0
      }),
      _v7 = _v0 => (0, _v28.buildActionBpContext)({
        action_type: _v38.CLICK,
        feature: null,
        ..._v0
      }),
      _v8 = _v0 => (0, _v30.buildProductAnalyticsBpContext)({
        entity_type: "events",
        feature: "registration_email",
        product: "gates",
        location: "body",
        device_type: (0, _v27.default)(),
        ..._v0
      }),
      _v9 = _v0 => (0, _v29.buildLiveBpContext)({
        event_privacy: (() => {
          switch (_v1?.view) {
            case "anybody":
              return "public";
            case "nobody":
              return "private";
            case "password":
              return "password";
            case "unlisted":
              return "unlisted";
            case "embed_only":
              return "hide_from_vimeo";
          }
          return null;
        })(),
        live_feature: "registration_email",
        live_event_type: "live_event",
        recurring_live_event_id: _v0,
        live_event_id: _v0,
        ..._v0
      }),
      _v10 = _v0 => (0, _v34.buildWebBpContext)({
        page_name: _v41.EVENT_REGISTRATION_PAGE,
        referrer: document.referrer || window.location.href,
        referrer_page_name: _v41.EVENT_REGISTRATION_PAGE,
        path: document.location.pathname,
        ..._v0
      }),
      _v11 = _v0 => (0, _v32.buildThirdPartyIntegrationBpContext)({
        is_integration: !1,
        integration_id: null,
        integration_name: null,
        is_partner: null,
        ..._v0
      }),
      _v12 = () => _v5 ? {
        form_id: _v5,
        provider_list_id: null,
        provider_name: null,
        action_value: null
      } : null;
    return {
      sentChangeRegistrationEmailConfigEvent: ({
        actionName: _v0,
        type: _v1,
        actionValue: _v2,
        copy: _v3
      }) => {
        let _v4 = _v12();
        if (!_v4) return;
        let _v5 = _v37.CHANGE_REGISTRATION_EMAIL_CONFIG;
        (0, _v35.sendBpEventWithContexts)(_v5, {
          ..._v7(),
          ..._v10(),
          ..._v8({
            copy: _v3,
            element: _v43.TOGGLE
          }),
          ..._v9(),
          ..._v6(),
          ..._v11()
        }, 13, {
          ..._v4,
          action_name: _v0,
          action_value: _v2,
          type: _v1
        });
      },
      sentRegistrationEmailPreviewEvent: ({
        actionName: _v0,
        actionValue: _v1 = null,
        type: _v2,
        copy: _v3 = null,
        element: _v4 = _v43.BUTTON
      }) => {
        let _v5 = _v12();
        if (!_v5) return;
        let _v6 = _v37.REGISTRATION_EMAIL_PREVIEW;
        (0, _v35.sendBpEventWithContexts)(_v6, {
          ..._v7(),
          ..._v10(),
          ..._v8({
            copy: _v3,
            element: _v4
          }),
          ..._v9(),
          ..._v6(),
          ..._v11()
        }, 13, {
          ..._v5,
          action_name: _v0,
          action_value: _v1,
          type: _v2
        });
      },
      sentRegistrationEmailActionEvent: ({
        actionName: _v0,
        type: _v1,
        copy: _v2 = null,
        element: _v3 = _v43.BUTTON
      }) => {
        let _v4 = _v12();
        if (!_v4) return;
        let _v5 = _v37.REGISTRATION_EMAIL_ACTION;
        (0, _v35.sendBpEventWithContexts)(_v5, {
          ..._v7(),
          ..._v10(),
          ..._v8({
            copy: _v2,
            element: _v3
          }),
          ..._v9(),
          ..._v6(),
          ..._v11()
        }, 13, {
          ..._v4,
          action_name: _v0,
          type: _v1
        });
      },
      sentRegistrationEmailLayoutChangeEvent: ({
        actionName: _v0,
        type: _v1 = null
      }) => {
        let _v2 = _v12();
        if (!_v2) return;
        let _v3 = _v37.REGISTRATION_EMAIL_LAYOUT_CHANGE;
        (0, _v35.sendBpEventWithContexts)(_v3, {
          ..._v7(),
          ..._v10(),
          ..._v8(),
          ..._v9(),
          ..._v6(),
          ..._v11()
        }, 13, {
          ..._v2,
          action_name: _v0,
          type: _v1
        });
      },
      sentTriggerHelpAction: () => {
        if (!_v12()) return;
        let _v0 = _v37.TRIGGER_HELP_CENTER;
        (0, _v35.sendBpEventWithContexts)(_v0, {
          ..._v7(),
          ..._v10(),
          ..._v8(),
          ..._v9(),
          ..._v6(),
          ..._v11(),
          ...(0, _v31.buildTeamBpContextFromTeamUser)(_v3)
        }, 2, {
          cta_type: _v42
        });
      }
    };
  };
  _v0.s(["useAnalytics", 0, _v45], 0);
  var _v46 = _v0.i(0),
    _v47 = _v0.i(0),
    _v48 = _v0.i(0);
  let _v49 = ["headerTextSize", "headerTextAlign", "headerTextStyle", "headerTextFormat", "headerTextColor", "bodyTextSize", "bodyTextAlign", "bodyTextStyle", "bodyTextFormat", "bodyTextColor"],
    _v50 = _v0 => {
      if (!_v0) return "";
      let _v1 = _v0;
      return Object.keys(_v47.DYNAMIC_TAGS_MAP).map(_v0 => {
        _v1 = _v1?.replaceAll(`{{${_v47.DYNAMIC_TAGS_MAP[_v0].label}}}`, `{{${_v47.DYNAMIC_TAGS_MAP[_v0].value}}}`);
      }), _v1;
    },
    _v51 = _v0 => {
      if (!_v0) return "";
      let _v1 = _v0;
      return Object.keys(_v47.DYNAMIC_TAGS_MAP).map(_v0 => {
        _v1 = _v1?.replaceAll(`{{${_v47.DYNAMIC_TAGS_MAP[_v0].value}}}`, `{{${_v47.DYNAMIC_TAGS_MAP[_v0].label}}}`);
      }), _v1;
    },
    _v52 = _v0 => {
      let {
          customLogo: _v1,
          accentColor: _v2,
          confirmation: _v3,
          reminders: _v4,
          followUp: _v5,
          from: _v6,
          useReplyEmail: _v7,
          useSenderAddress: _v8,
          useSenderPolicyUrl: _v9,
          subject: _v10,
          showCalender: _v11,
          replyEmail: _v12,
          senderAddress: _v13,
          senderPolicyUrl: _v14,
          buttonInfo: _v15,
          header: _v16,
          headerTextSize: _v17,
          headerTextAlign: _v18,
          headerTextFormat: _v19,
          headerTextStyle: _v20,
          headerTextColor: _v21,
          body: _v22,
          bodyTextSize: _v23,
          bodyTextAlign: _v24,
          bodyTextFormat: _v25,
          bodyTextStyle: _v26,
          bodyTextColor: _v27
        } = _v0,
        {
          url: _v28
        } = _v1 || {},
        {
          CONFIRMATION: _v29,
          FOLLOWUP: _v30
        } = _v46.EMAIL_TYPES,
        _v31 = _v0 => ({
          subject: _v10[_v0],
          showCalender: _v11[_v0],
          buttonText: _v15[_v0]?.text ?? "",
          buttonLink: _v15[_v0]?.customLink,
          headerText: _v16[_v0],
          headerTextSize: _v17?.[_v0],
          headerTextStyle: _v20?.[_v0],
          headerTextAlign: _v18?.[_v0],
          headerTextFormat: _v19?.[_v0],
          headerTextColor: _v21?.[_v0],
          bodyText: _v22[_v0],
          bodyTextSize: _v23?.[_v0],
          bodyTextStyle: _v26?.[_v0],
          bodyTextAlign: _v24?.[_v0],
          bodyTextFormat: _v25?.[_v0],
          bodyTextColor: _v27?.[_v0]
        });
      return {
        generalSettings: {
          accentColor: _v2,
          from: _v6,
          customLogoUrl: _v28,
          replyEmail: _v12,
          senderAddress: _v13,
          senderPolicyUrl: _v14
        },
        toggleSettings: {
          confirmation: _v3,
          reminder: _v4[0]?.enabled ?? !1,
          followUp: _v5,
          useReplyEmail: _v7,
          useSenderAddress: _v8,
          useSenderPolicyUrl: _v9
        },
        confirmationSettings: _v31(_v29),
        reminderSettings: _v31(_v0.selectedReminderId),
        followUpSettings: _v31(_v30)
      };
    },
    _v53 = ["body", "header", "subject", "buttonInfo", "showCalender"],
    _v54 = (_v0, _v1) => null == _v0 && null == _v1 || void 0,
    _v55 = (_v0, _v1, _v2 = !0) => {
      let _v3 = [],
        _v4 = [];
      if (!_v0 || !_v1) return {
        changedProps: _v3,
        bpChangedProps: _v4
      };
      let _v5 = _v0 => ["canUndo", "canRedo", "hasApiData", "isContentModified"].includes(_v0) || _v2 && ["emailTemplateType", "selectedReminderId", "emailToolbar", "previewMode"].includes(_v0) || "from" === _v0 && 0 === _v1[_v0].length,
        _v6 = _v0 => "customLogo" === _v0 && (_v0.customLogo?.response?.uri !== _v1.customLogo?.response?.uri || _v0.customLogo?.active !== _v1.customLogo?.active),
        _v7 = (_v0, _v1) => null == _v0 && null == _v1 || void 0,
        _v8 = _v0 => "object" == typeof _v0[_v0] || void 0 === _v0[_v0];
      for (let _v0 in _v0) if (_v5(_v0)) continue;else _v6(_v0) ? _v3.push(_v0) : _v8(_v0) ? (0, _v48.default)(_v0[_v0], _v1[_v0], _v7) || (_v49.includes(_v0) ? _v4.push(_v0) : _v3.push(_v0)) : _v0[_v0] !== _v1[_v0] && _v3.push(_v0);
      return {
        changedProps: _v3,
        bpChangedProps: [..._v3, ..._v4]
      };
    },
    _v56 = {
      SET_STATE: "SET_STATE",
      RESET: "RESET",
      SET_COLOR: "SET_COLOR",
      SET_THUMBNAIL: "SET_THUMBNAIL",
      SET_FROM: "SET_FROM",
      SET_PREVIEW: "SET_PREVIEW",
      SET_EMAIL_TOOL_BAR: "SET_EMAIL_TOOL_BAR",
      EMAIL_TEMPLATE_TYPE: "EMAIL_TEMPLATE_TYPE",
      SET_CUSTOM_LOGO_IMAGE: "SET_CUSTOM_LOGO_IMAGE",
      TOGGLE_SETTING_EMAIL: "TOGGLE_SETTING_EMAIL",
      TOGGLE_REMINDER: "TOGGLE_REMINDER",
      SELECT_REMINDER: "SELECT_REMINDER",
      ADD_REMINDER: "ADD_REMINDER",
      DELETE_REMINDER: "DELETE_REMINDER",
      UPDATE_REMINDER_OFFSET: "UPDATE_REMINDER_OFFSET",
      SET_BUTTON_INFO: "SET_BUTTON_INFO",
      SET_CONFIRMATION_TITLE: "SET_CONFIRMATION_TITLE",
      SET_CONFIRMATION_BODY: "SET_CONFIRMATION_BODY",
      SET_REMINDER_TITLE: "SET_REMINDER_TITLE",
      SET_REMINDER_BODY: "SET_REMINDER_BODY",
      SET_FOLLOWUP_TITLE: "SET_FOLLOWUP_TITLE",
      SET_FOLLOWUP_BODY: "SET_FOLLOWUP_BODY",
      SET_FOOTER_EMAIL: "SET_FOOTER_EMAIL",
      SET_FOOTER_ADDRESS: "SET_FOOTER_ADDRESS",
      SET_FOOTER_POLICY: "SET_FOOTER_POLICY",
      SET_SUBJECT: "SET_SUBJECT",
      SET_CALENDER: "SET_CALENDER",
      SET_IS_CONTENT_MODIFIED: "SET_IS_CONTENT_MODIFIED",
      SET_HEADER: "SET_HEADER",
      SET_BODY: "SET_BODY",
      SET_HEADER_TEXT_SIZE: "SET_HEADER_TEXT_SIZE",
      SET_HEADER_TEXT_STYLE: "SET_HEADER_TEXT_STYLE",
      SET_HEADER_TEXT_ALIGN: "SET_HEADER_TEXT_ALIGN",
      SET_HEADER_TEXT_FORMAT: "SET_HEADER_TEXT_FORMAT",
      SET_HEADER_TEXT_COLOR: "SET_HEADER_TEXT_COLOR",
      SET_BODY_TEXT_SIZE: "SET_BODY_TEXT_SIZE",
      SET_BODY_TEXT_STYLE: "SET_BODY_TEXT_STYLE",
      SET_BODY_TEXT_ALIGN: "SET_BODY_TEXT_ALIGN",
      SET_BODY_TEXT_FORMAT: "SET_BODY_TEXT_FORMAT",
      SET_BODY_TEXT_COLOR: "SET_BODY_TEXT_COLOR"
    },
    _v57 = {
      [_v56.SET_COLOR]: "accentColor",
      [_v56.SET_FROM]: "from",
      [_v56.SET_EMAIL_TOOL_BAR]: "emailToolbar",
      [_v56.EMAIL_TEMPLATE_TYPE]: "emailTemplateType",
      [_v56.SET_PREVIEW]: "previewMode",
      [_v56.SET_FOOTER_EMAIL]: "replyEmail",
      [_v56.SET_FOOTER_ADDRESS]: "senderAddress",
      [_v56.SET_FOOTER_POLICY]: "senderPolicyUrl",
      [_v56.SET_IS_CONTENT_MODIFIED]: "isContentModified",
      [_v56.SET_SUBJECT]: "subject",
      [_v56.SET_HEADER]: "header",
      [_v56.SET_BODY]: "body",
      [_v56.SET_HEADER_TEXT_SIZE]: "headerTextSize",
      [_v56.SET_HEADER_TEXT_STYLE]: "headerTextStyle",
      [_v56.SET_HEADER_TEXT_ALIGN]: "headerTextAlign",
      [_v56.SET_HEADER_TEXT_FORMAT]: "headerTextFormat",
      [_v56.SET_HEADER_TEXT_COLOR]: "headerTextColor",
      [_v56.SET_BODY_TEXT_SIZE]: "bodyTextSize",
      [_v56.SET_BODY_TEXT_STYLE]: "bodyTextStyle",
      [_v56.SET_BODY_TEXT_ALIGN]: "bodyTextAlign",
      [_v56.SET_BODY_TEXT_FORMAT]: "bodyTextFormat",
      [_v56.SET_BODY_TEXT_COLOR]: "bodyTextColor"
    };
  _v0.s(["ACTION_TYPE", 0, _v56, "EMAIL_SETTER_TYPES", 0, _v57], 0);
  let _v58 = {
      showCalender: {
        [_v46.EMAIL_TYPES.CONFIRMATION]: !0,
        [_v46.EMAIL_TYPES.REMINDER]: !0,
        [_v46.EMAIL_TYPES.FOLLOWUP]: !1
      },
      buttonInfo: {
        [_v46.EMAIL_TYPES.CONFIRMATION]: {
          text: _v47.default.JoinEvent,
          customLink: "",
          isCustomLink: !1
        },
        [_v46.EMAIL_TYPES.REMINDER]: {
          text: _v47.default.JoinEvent,
          customLink: "",
          isCustomLink: !1
        },
        [_v46.EMAIL_TYPES.FOLLOWUP]: {
          text: _v47.default.WatchNow,
          customLink: "",
          isCustomLink: !1
        }
      },
      subject: {
        [_v46.EMAIL_TYPES.CONFIRMATION]: "",
        [_v46.EMAIL_TYPES.FOLLOWUP]: "",
        [_v46.EMAIL_TYPES.REMINDER]: ""
      },
      header: {
        [_v46.EMAIL_TYPES.CONFIRMATION]: "",
        [_v46.EMAIL_TYPES.FOLLOWUP]: "",
        [_v46.EMAIL_TYPES.REMINDER]: ""
      },
      body: {
        [_v46.EMAIL_TYPES.CONFIRMATION]: "",
        [_v46.EMAIL_TYPES.FOLLOWUP]: "",
        [_v46.EMAIL_TYPES.REMINDER]: ""
      },
      isContentModified: {
        [_v46.EMAIL_TYPES.CONFIRMATION]: !1,
        [_v46.EMAIL_TYPES.FOLLOWUP]: !1,
        [_v46.EMAIL_TYPES.REMINDER]: !1
      },
      headerTextSize: {
        [_v46.EMAIL_TYPES.CONFIRMATION]: "",
        [_v46.EMAIL_TYPES.FOLLOWUP]: "",
        [_v46.EMAIL_TYPES.REMINDER]: ""
      },
      headerTextStyle: {
        [_v46.EMAIL_TYPES.CONFIRMATION]: "",
        [_v46.EMAIL_TYPES.FOLLOWUP]: "",
        [_v46.EMAIL_TYPES.REMINDER]: ""
      },
      headerTextAlign: {
        [_v46.EMAIL_TYPES.CONFIRMATION]: "",
        [_v46.EMAIL_TYPES.FOLLOWUP]: "",
        [_v46.EMAIL_TYPES.REMINDER]: ""
      },
      headerTextFormat: {
        [_v46.EMAIL_TYPES.CONFIRMATION]: "",
        [_v46.EMAIL_TYPES.FOLLOWUP]: "",
        [_v46.EMAIL_TYPES.REMINDER]: ""
      },
      headerTextColor: {
        [_v46.EMAIL_TYPES.CONFIRMATION]: "",
        [_v46.EMAIL_TYPES.FOLLOWUP]: "",
        [_v46.EMAIL_TYPES.REMINDER]: ""
      },
      bodyTextSize: {
        [_v46.EMAIL_TYPES.CONFIRMATION]: "",
        [_v46.EMAIL_TYPES.FOLLOWUP]: "",
        [_v46.EMAIL_TYPES.REMINDER]: ""
      },
      bodyTextStyle: {
        [_v46.EMAIL_TYPES.CONFIRMATION]: "",
        [_v46.EMAIL_TYPES.FOLLOWUP]: "",
        [_v46.EMAIL_TYPES.REMINDER]: ""
      },
      bodyTextAlign: {
        [_v46.EMAIL_TYPES.CONFIRMATION]: "",
        [_v46.EMAIL_TYPES.FOLLOWUP]: "",
        [_v46.EMAIL_TYPES.REMINDER]: ""
      },
      bodyTextFormat: {
        [_v46.EMAIL_TYPES.CONFIRMATION]: "",
        [_v46.EMAIL_TYPES.FOLLOWUP]: "",
        [_v46.EMAIL_TYPES.REMINDER]: ""
      },
      bodyTextColor: {
        [_v46.EMAIL_TYPES.CONFIRMATION]: "",
        [_v46.EMAIL_TYPES.FOLLOWUP]: "",
        [_v46.EMAIL_TYPES.REMINDER]: ""
      }
    },
    _v59 = {
      ..._v58,
      reminders: [],
      accentColor: "#00adef",
      from: "",
      emailToolbar: _v46.EMAIL_TOOLBAR_TYPES.GENERAL,
      emailTemplateType: _v46.EMAIL_TYPES.CONFIRMATION,
      selectedReminderId: "",
      previewMode: _v46.EMAIL_PREVIEW_MODE.WEB,
      useReplyEmail: !1,
      useSenderAddress: !1,
      useSenderPolicyUrl: !1,
      replyEmail: "",
      senderAddress: "",
      senderPolicyUrl: "",
      defaultConfig: _v58,
      hasApiData: !1,
      isLastActionReset: !1
    },
    _v60 = [_v46.EMAIL_TYPES.CONFIRMATION, _v46.EMAIL_TYPES.FOLLOWUP],
    _v61 = _v0 => _v60.includes(_v0) ? _v0 : _v46.EMAIL_TYPES.REMINDER,
    _v62 = (_v0, _v1) => {
      let _v2 = {
        ..._v0
      };
      return delete _v2[_v1], _v2;
    };
  function _v63(_v0, _v1) {
    switch (_v1.type !== _v56.SET_IS_CONTENT_MODIFIED && (_v0 = {
      ..._v0,
      isLastActionReset: _v1.type === _v56.RESET
    }), _v1.type) {
      case _v56.SET_STATE:
        return {
          ..._v0,
          ..._v1.payload
        };
      case _v56.RESET:
        let _v0 = _v1.payload,
          _v1 = _v61(_v0),
          _v2 = {
            subject: {
              ..._v0.subject,
              [_v0]: _v0.defaultConfig.subject[_v1]
            },
            buttonInfo: {
              ..._v0.buttonInfo,
              [_v0]: {
                text: _v0.defaultConfig.buttonInfo[_v1].text,
                customLink: "",
                isCustomLink: !1
              }
            },
            header: {
              ..._v0.header,
              [_v0]: _v0.defaultConfig.header[_v1]
            },
            body: {
              ..._v0.body,
              [_v0]: _v0.defaultConfig.body[_v1]
            }
          };
        return (_v1 === _v46.EMAIL_TYPES.CONFIRMATION || _v1 === _v46.EMAIL_TYPES.REMINDER) && (_v2.showCalender = {
          ..._v0.showCalender,
          [_v0]: _v0.defaultConfig.showCalender[_v1]
        }), _v49.forEach(_v0 => {
          _v0[_v0] && (_v2[_v0] = {
            ...(_v0[_v0] || {}),
            [_v0]: ""
          });
        }), {
          ..._v0,
          ..._v2
        };
      case _v56.SET_CALENDER:
        return {
          ..._v0,
          showCalender: {
            ..._v0.showCalender,
            [_v1.payload]: !_v0.showCalender[_v1.payload]
          }
        };
      case _v56.SET_CUSTOM_LOGO_IMAGE:
        return {
          ..._v0,
          customLogo: {
            ..._v0.customLogo,
            ..._v1.payload
          }
        };
      case _v56.TOGGLE_SETTING_EMAIL:
        return {
          ..._v0,
          [_v1.payload]: !_v0[_v1.payload]
        };
      case _v56.TOGGLE_REMINDER:
        return {
          ..._v0,
          reminders: _v0.reminders.map(_v0 => _v0.id === _v1.payload ? {
            ..._v0,
            enabled: !_v0.enabled
          } : _v0)
        };
      case _v56.SELECT_REMINDER:
        return {
          ..._v0,
          emailTemplateType: _v46.EMAIL_TYPES.REMINDER,
          selectedReminderId: _v1.payload
        };
      case _v56.ADD_REMINDER:
        return {
          ..._v0,
          reminders: [..._v0.reminders, {
            id: _v1.payload.id,
            offset: _v1.payload.offset,
            enabled: !0
          }],
          emailTemplateType: _v46.EMAIL_TYPES.REMINDER,
          selectedReminderId: _v1.payload.id,
          ...((_v0, _v1) => {
            let {
                REMINDER: _v2
              } = _v46.EMAIL_TYPES,
              _v3 = _v0.defaultConfig,
              _v4 = {
                subject: {
                  ..._v0.subject,
                  [_v1]: _v3.subject[_v2]
                },
                header: {
                  ..._v0.header,
                  [_v1]: _v3.header[_v2]
                },
                body: {
                  ..._v0.body,
                  [_v1]: _v3.body[_v2]
                },
                showCalender: {
                  ..._v0.showCalender,
                  [_v1]: _v3.showCalender[_v2]
                },
                buttonInfo: {
                  ..._v0.buttonInfo,
                  [_v1]: {
                    text: _v3.buttonInfo[_v2].text,
                    customLink: "",
                    isCustomLink: !1
                  }
                },
                isContentModified: {
                  ...(_v0.isContentModified || {}),
                  [_v1]: !1
                }
              };
            return _v49.forEach(_v0 => {
              let _v1 = _v0[_v0];
              _v1 && (_v4[_v0] = {
                ..._v1,
                [_v1]: ""
              });
            }), _v4;
          })(_v0, _v1.payload.id)
        };
      case _v56.DELETE_REMINDER:
        {
          var _v2, _v3;
          let _v0,
            _v1 = _v0.reminders.filter(_v0 => _v0.id !== _v1.payload),
            _v2 = _v0.selectedReminderId === _v1.payload ? _v1[0]?.id ?? "" : _v0.selectedReminderId,
            _v3 = 0 === _v1.length && _v0.emailTemplateType === _v46.EMAIL_TYPES.REMINDER ? _v46.EMAIL_TYPES.CONFIRMATION : _v0.emailTemplateType;
          return {
            ..._v0,
            reminders: _v1,
            selectedReminderId: _v2,
            emailTemplateType: _v3,
            ...(_v2 = _v0, _v3 = _v1.payload, _v0 = {
              subject: _v62(_v2.subject, _v3),
              header: _v62(_v2.header, _v3),
              body: _v62(_v2.body, _v3),
              showCalender: _v62(_v2.showCalender, _v3),
              buttonInfo: _v62(_v2.buttonInfo, _v3),
              isContentModified: _v62(_v2.isContentModified || {}, _v3)
            }, _v49.forEach(_v0 => {
              let _v1 = _v2[_v0];
              _v1 && (_v0[_v0] = _v62(_v1, _v3));
            }), _v0)
          };
        }
      case _v56.UPDATE_REMINDER_OFFSET:
        return {
          ..._v0,
          reminders: _v0.reminders.map(_v0 => _v0.id === _v1.payload.id ? {
            ..._v0,
            offset: _v1.payload.offset
          } : _v0)
        };
      case _v56.SET_BUTTON_INFO:
        return {
          ..._v0,
          buttonInfo: {
            ..._v0.buttonInfo,
            [_v1.payload.emailTab]: _v1.payload.info
          }
        };
      case _v56.SET_SUBJECT:
      case _v56.SET_HEADER:
      case _v56.SET_BODY:
      case _v56.SET_HEADER_TEXT_SIZE:
      case _v56.SET_HEADER_TEXT_STYLE:
      case _v56.SET_HEADER_TEXT_ALIGN:
      case _v56.SET_HEADER_TEXT_FORMAT:
      case _v56.SET_HEADER_TEXT_COLOR:
      case _v56.SET_BODY_TEXT_SIZE:
      case _v56.SET_BODY_TEXT_STYLE:
      case _v56.SET_BODY_TEXT_ALIGN:
      case _v56.SET_BODY_TEXT_FORMAT:
      case _v56.SET_BODY_TEXT_COLOR:
        let _v3 = _v57[_v1.type];
        return {
          ..._v0,
          [_v3]: {
            ..._v0[_v3],
            [_v1.payload.emailTab]: _v1.payload.text
          }
        };
      case _v56.SET_EMAIL_TOOL_BAR:
      case _v56.EMAIL_TEMPLATE_TYPE:
      case _v56.SET_PREVIEW:
      case _v56.SET_COLOR:
      case _v56.SET_FROM:
      case _v56.SET_CONFIRMATION_TITLE:
      case _v56.SET_CONFIRMATION_BODY:
      case _v56.SET_REMINDER_TITLE:
      case _v56.SET_REMINDER_BODY:
      case _v56.SET_FOLLOWUP_TITLE:
      case _v56.SET_FOLLOWUP_BODY:
      case _v56.SET_FOOTER_EMAIL:
      case _v56.SET_FOOTER_ADDRESS:
      case _v56.SET_FOOTER_POLICY:
      case _v56.SET_IS_CONTENT_MODIFIED:
        return {
          ..._v0,
          [_v57[_v1.type]]: _v1.payload
        };
      default:
        return _v0;
    }
  }
  var _v64 = _v0.i(0);
  let _v65 = (0, _v1.createContext)({
    state: _v59,
    dispatch: () => console.error("dispatch not initialized"),
    isReminderSaved: () => !0,
    isManualSaveRequired: !1,
    canUseConfigurableEventReminders: !1
  });
  _v0.s(["EmailContext", 0, _v65, "default", 0, ({
    children: _v0,
    onSaveStateChange: _v1
  }) => {
    let [_v2, _v3] = (0, _v1.useReducer)(_v63, {
        ..._v59
      }),
      [_v4, {
        loading: _v5,
        data: _v6
      }] = (0, _v5.useGetUserLiveEventEmailSettingsLazy)(),
      _v7 = (0, _v44.useConfigStore)(_v0 => _v0.entityType),
      _v8 = (0, _v44.useConfigStore)(_v0 => _v0.entityId),
      {
        user: _v9
      } = (0, _v10.useEntityStore)(),
      {
        teamName: _v10,
        accentColor: _v11,
        isLoading: _v12
      } = _v15(),
      {
        settings: _v13
      } = (0, _v9.useOrionSettings)(),
      {
        capabilities: _v14
      } = (0, _v4.useCapability)(["hasConfigurableEventReminders"], _v9?.uri),
      _v15 = !!_v14.hasConfigurableEventReminders && _v13.enable_configurable_event_reminders,
      _v16 = _v13.enable_explicit_registration_save,
      _v17 = _v5 || _v12,
      _v18 = (0, _v1.useMemo)(() => {
        if (!_v6 || _v12) return null;
        let {
            emailPreferences: _v0,
            accentColor: _v1,
            pictures: _v2,
            from: _v3,
            emailRegistrationConfirmation: _v4,
            emailPostEventThankYou: _v5,
            emailReminders: _v6,
            emailEventReminder_24Hrs: _v7,
            ..._v8
          } = _v6,
          _v9 = Array.isArray(_v6) ? _v6 : [],
          _v10 = _v9[0]?.content?.default ?? _v7?.default;
        if (!_v4 || !_v5 || !_v10) return null;
        let _v11 = _v4.custom || _v4.default,
          _v12 = _v5.custom || _v5.default,
          _v13 = (_v15 ? _v9 : _v9.slice(0, 1)).map(_v0 => ({
            id: _v0.reminderId,
            offset: {
              value: _v0.offset.value,
              unit: _v0.offset.unit,
              direction: _v0.offset.direction
            },
            enabled: _v0.enabled,
            content: _v0.content.custom || _v0.content.default
          })),
          _v14 = _v13.map(({
            id: _v0,
            offset: _v1,
            enabled: _v2
          }) => ({
            id: _v0,
            offset: _v1,
            enabled: _v2
          })),
          _v15 = [{
            key: _v46.EMAIL_TYPES.CONFIRMATION,
            data: _v11
          }, {
            key: _v46.EMAIL_TYPES.FOLLOWUP,
            data: _v12
          }, ..._v13.map(_v0 => ({
            key: _v0.id,
            data: _v0.content
          }))],
          _v16 = _v0 => _v15.reduce((_v0, {
            key: _v1,
            data: _v2
          }) => (_v0[_v1] = _v0(_v2), _v0), {});
        return {
          ..._v8,
          hasApiData: !0,
          confirmation: _v0.emailRegistrationConfirmation,
          reminders: _v14,
          selectedReminderId: _v13[0]?.id ?? "",
          followUp: _v0.emailPostEventThankYou,
          accentColor: _v1 || _v11 || "#00adef",
          customLogo: (0, _v64.getCustomLogoImagePayload)(_v2),
          from: _v3 ?? _v10 ?? _v46.VIMEO,
          subject: _v16(_v0 => _v51(_v0.subject)),
          header: _v16(_v0 => _v51(_v0.header)),
          body: _v16(_v0 => _v51(_v0.body)),
          showCalender: _v16(_v0 => !!_v0.useCalender),
          buttonInfo: _v16(_v0 => ({
            text: _v0.buttonText,
            customLink: _v0.buttonLink,
            isCustomLink: !!_v0.useCustomLink
          })),
          defaultConfig: {
            showCalender: {
              [_v46.EMAIL_TYPES.CONFIRMATION]: !!_v4.default.useCalender,
              [_v46.EMAIL_TYPES.REMINDER]: !!_v10.useCalender,
              [_v46.EMAIL_TYPES.FOLLOWUP]: !!_v5.default.useCalender
            },
            buttonInfo: {
              [_v46.EMAIL_TYPES.CONFIRMATION]: {
                text: _v4.default.buttonText,
                customLink: _v4.default.buttonLink,
                isCustomLink: !!_v4.default.useCustomLink
              },
              [_v46.EMAIL_TYPES.REMINDER]: {
                text: _v10.buttonText,
                customLink: _v10.buttonLink,
                isCustomLink: !!_v10.useCustomLink
              },
              [_v46.EMAIL_TYPES.FOLLOWUP]: {
                text: _v5.default.buttonText,
                customLink: _v5.default.buttonLink,
                isCustomLink: !!_v5.default.useCustomLink
              }
            },
            subject: {
              [_v46.EMAIL_TYPES.CONFIRMATION]: _v51(_v4.default.subject),
              [_v46.EMAIL_TYPES.REMINDER]: _v51(_v10.subject),
              [_v46.EMAIL_TYPES.FOLLOWUP]: _v51(_v5.default.subject)
            },
            header: {
              [_v46.EMAIL_TYPES.CONFIRMATION]: _v51(_v4.default.header),
              [_v46.EMAIL_TYPES.REMINDER]: _v51(_v10.header),
              [_v46.EMAIL_TYPES.FOLLOWUP]: _v51(_v5.default.header)
            },
            body: {
              [_v46.EMAIL_TYPES.CONFIRMATION]: _v51(_v4.default.body),
              [_v46.EMAIL_TYPES.REMINDER]: _v51(_v10.body),
              [_v46.EMAIL_TYPES.FOLLOWUP]: _v51(_v5.default.body)
            }
          }
        };
      }, [_v11, _v15, _v12, _v10, _v6]),
      _v19 = (0, _v1.useCallback)(() => {
        let _v0 = _v9?.uri,
          _v1 = (0, _v8.getUserIdFromUri)(_v0);
        _v1 && _v8 && (_v7 === _v7.ENTITY_TYPE.EVENT ? _v4({
          where: {
            userId: _v1,
            liveEventId: parseInt(_v8)
          },
          select: _v46.EMAIL_CUSTOMIZATION_FIELDS
        }) : console.error(`Entity type ${_v7} not supported EM1`));
      }, [_v8, _v9?.uri, _v7, _v4]),
      {
        isReminderSaved: _v20,
        isDirty: _v21,
        isSaving: _v22,
        save: _v23
      } = ((_v0, _v1, _v2, _v3 = !1) => {
        let [_v4, _v5] = (0, _v1.useState)(_v0),
          [_v6, _v7] = (0, _v1.useState)(!1),
          {
            user: _v8,
            privacy: _v9
          } = (0, _v10.useEntityStore)();
        (0, _v44.useConfigStore)(_v0 => _v0.entityType);
        let _v10 = (0, _v44.useConfigStore)(_v0 => _v0.entityId),
          _v11 = (0, _v44.useConfigStore)(_v0 => _v0.onAutoSave),
          [_v12, {
            data: _v13,
            loading: _v14,
            error: _v15
          }] = (0, _v5.usePatchUserLiveEventEmailSettings)(),
          [_v16] = _v25(),
          _v17 = (0, _v1.useRef)(null),
          _v18 = (0, _v17.useToast)(),
          {
            sentRegistrationEmailLayoutChangeEvent: _v19
          } = _v45(),
          _v20 = async _v0 => {
            let {
                changedProps: _v1,
                bpChangedProps: _v2
              } = _v55(_v4, _v0),
              _v3 = !_v4.from || _v0.from || _v1.includes("from") ? _v1 : [..._v1, "from"];
            if (_v3.length > 0 && !_v6 && !_v17.current && _v4.hasApiData && _v8 && _v10 && !1 === _v2) {
              _v7(!0), _v11?.(!0);
              let _v0 = (0, _v8.getUserIdFromUri)(_v8.uri),
                _v1 = parseInt(_v10 || "0");
              _v17.current = _v0;
              try {
                await Promise.all(_v4.reminders.filter(_v0 => _v0.id !== _v46.LEGACY_REMINDER_ID && !_v0.reminders.some(_v0 => _v0.id === _v0.id)).map(_v0 => _v0.id).map(_v0 => _v16({
                  where: {
                    userId: _v0,
                    liveEventId: _v1,
                    reminderId: _v0
                  }
                })));
              } catch {
                _v17.current = null, _v7(!1), _v11?.(!1), _v18({
                  title: _v47.default.ChangesCouldNotBeSaved,
                  status: "error",
                  duration: 0
                });
                return;
              }
              let _v2 = ((_v0, _v1) => {
                  let _v2 = new Set(),
                    _v3 = new Map(_v0.reminders.map(_v0 => [_v0.id, _v0]));
                  for (let _v0 of _v1.reminders) {
                    let _v0 = _v3.get(_v0.id),
                      _v1 = void 0 === _v0 || _v0.enabled !== _v0.enabled || !(0, _v48.default)(_v0.offset, _v0.offset, _v54),
                      _v2 = _v53.some(_v0 => !(0, _v48.default)(_v0[_v0]?.[_v0.id], _v1[_v0]?.[_v0.id], _v54));
                    (_v1 || _v2) && _v2.add(_v0.id);
                  }
                  return _v2;
                })(_v4, _v0),
                _v3 = ((_v0, _v1, _v2, _v3) => {
                  let {
                      confirmation: _v4,
                      reminders: _v5,
                      followUp: _v6,
                      accentColor: _v7,
                      from: _v8,
                      subject: _v9,
                      customLogo: _v10,
                      buttonInfo: _v11,
                      header: _v12,
                      body: _v13,
                      showCalender: _v14,
                      useReplyEmail: _v15,
                      useSenderAddress: _v16,
                      useSenderPolicyUrl: _v17,
                      replyEmail: _v18,
                      senderAddress: _v19,
                      senderPolicyUrl: _v20
                    } = _v0,
                    _v21 = (void 0 === _v2 ? _v5 : _v5.filter(_v0 => _v2.has(_v0.id))).map(_v0 => {
                      let _v1;
                      return {
                        reminderId: _v0.id,
                        enabled: _v0.enabled,
                        offset: {
                          value: _v0.offset.value,
                          unit: _v0.offset.unit,
                          direction: _v0.offset.direction
                        },
                        content: {
                          body: _v50(_v13[_v1 = _v0.id]),
                          buttonLink: _v11[_v1].customLink,
                          buttonText: _v11[_v1].text,
                          useCustomLink: _v11[_v1].isCustomLink,
                          header: _v50(_v12[_v1]),
                          subject: _v50(_v9[_v1]),
                          useCalender: _v14[_v1]
                        }
                      };
                    }),
                    _v22 = _v0 => void 0 === _v3 || _v3.includes(_v0);
                  return {
                    ...(_v21.length > 0 || void 0 === _v2 ? {
                      emailReminders: _v21
                    } : {}),
                    ...(_v22("from") ? {
                      from: _v8 || _v1 || _v46.VIMEO
                    } : {}),
                    ...(_v22("customLogo") ? {
                      pictures: _v10?.response,
                      logoUri: _v10?.response?.uri || ""
                    } : {}),
                    ...(_v22("accentColor") ? {
                      accentColor: _v7
                    } : {}),
                    emailPreferences: {
                      emailRegistrationConfirmation: _v4,
                      emailPostEventThankYou: _v6
                    },
                    replyEmail: _v18,
                    senderAddress: _v19,
                    senderPolicyUrl: _v20,
                    useReplyEmail: _v15,
                    useSenderAddress: _v16,
                    useSenderPolicyUrl: _v17,
                    emailRegistrationConfirmation: {
                      body: _v50(_v13.CONFIRMATION),
                      buttonLink: _v11.CONFIRMATION.customLink,
                      buttonText: _v11.CONFIRMATION.text,
                      useCustomLink: _v11.CONFIRMATION.isCustomLink,
                      header: _v50(_v12.CONFIRMATION),
                      subject: _v50(_v9.CONFIRMATION),
                      useCalender: _v14.CONFIRMATION
                    },
                    emailPostEventThankYou: {
                      body: _v50(_v13.FOLLOWUP),
                      buttonLink: _v11.FOLLOWUP.customLink,
                      buttonText: _v11.FOLLOWUP.text,
                      useCustomLink: _v11.FOLLOWUP.isCustomLink,
                      header: _v50(_v12.FOLLOWUP),
                      subject: _v50(_v9.FOLLOWUP)
                    }
                  };
                })(_v0, _v1, _v2, _v3);
              _v12({
                where: {
                  userId: _v0,
                  liveEventId: _v1
                },
                select: _v46.EMAIL_CUSTOMIZATION_FIELDS,
                variables: _v3
              }), _v2.length > 0 && ((_v0, _v1) => {
                if (_v1.isLastActionReset) return;
                let _v2 = {
                    ...((_v0, _v1, _v2) => {
                      let _v3 = [],
                        _v4 = [],
                        {
                          generalSettings: _v5,
                          toggleSettings: _v6,
                          confirmationSettings: _v7,
                          reminderSettings: _v8,
                          followUpSettings: _v9
                        } = _v2(_v0),
                        {
                          generalSettings: _v10,
                          toggleSettings: _v11,
                          confirmationSettings: _v12,
                          reminderSettings: _v13,
                          followUpSettings: _v14
                        } = _v2(_v1),
                        _v15 = Object.keys(_v10).filter(_v0 => _v10[_v0] !== _v5[_v0]);
                      Object.keys(_v11).filter(_v0 => _v11[_v0] !== _v6[_v0]).forEach(_v0 => {
                        !0 === _v11[_v0] || "show" === _v11[_v0] ? _v3.push(_v0) : (!1 === _v11[_v0] || "hide" === _v11[_v0]) && _v4.push(_v0);
                      });
                      let _v16 = Object.keys(_v12).filter(_v0 => _v12[_v0] !== _v7[_v0]);
                      return {
                        parametersChanged: _v15,
                        newToggledOn: _v3,
                        newToggledOff: _v4,
                        confirmationParametersChanged: _v16,
                        reminderParametersChanged: Object.keys(_v13).filter(_v0 => _v13[_v0] !== _v8[_v0]),
                        followupParametersChanged: Object.keys(_v14).filter(_v0 => _v14[_v0] !== _v9[_v0])
                      };
                    })(_v0, _v1, _v52),
                    previewType: _v36[_v1.previewMode]
                  },
                  _v3 = {
                    subject: _v39.CHANGE_SUBJECT,
                    headerText: _v39.HEADING_TEXT_CHANGED,
                    headerTextSize: _v39.HEADING_SIZE_CHANGED,
                    headerTextColor: _v39.HEADING_COLOR_CHANGED,
                    headerTextAlign: _v39.HEADING_FORMAT_CHANGED,
                    bodyText: _v39.BODY_TEXT_CHANGED,
                    bodyTextSize: _v39.BODY_SIZE_CHANGED,
                    bodyTextColor: _v39.BODY_COLOR_CHANGED,
                    bodyTextAlign: _v39.BODY_FORMAT_CHANGED,
                    buttonText: _v39.BUTTON_TEXT_CHANGED,
                    buttonLink: _v39.BUTTON_CUSTOM_LINK_CHANGED
                  },
                  _v4 = {
                    confirmationParametersChanged: _v40.CONFIRMATION,
                    reminderParametersChanged: _v40.REMINDER,
                    followupParametersChanged: _v40.FOLLOWUP
                  };
                ["confirmationParametersChanged", "reminderParametersChanged", "followupParametersChanged"].forEach(_v0 => {
                  _v2[_v0].forEach(_v0 => {
                    let _v1 = _v3[_v0],
                      _v2 = _v4[_v0];
                    if (_v1 && _v2) {
                      let _v0,
                        _v1,
                        _v2,
                        _v3 = _v1 === _v39.HEADING_TEXT_CHANGED || _v1 === _v39.BODY_TEXT_CHANGED,
                        _v4 = _v3 && (_v0 = _v1 === _v39.HEADING_TEXT_CHANGED ? "header" : "body", _v2 = (_v1 = _v2.toUpperCase()) === _v46.EMAIL_TYPES.REMINDER ? _v1.selectedReminderId : _v1, (0, _v8.htmlToText)(_v0[_v0][_v2]) !== (0, _v8.htmlToText)(_v1[_v0][_v2]));
                      (!_v3 || _v4) && _v19({
                        actionName: _v1,
                        type: _v2
                      });
                    }
                  });
                });
              })(_v4, _v0);
            }
          },
          _v21 = (0, _v1.useRef)(_v20);
        _v21.current = _v20;
        let _v22 = (0, _v1.useRef)(_v0);
        _v22.current = _v0;
        let _v23 = (0, _v1.useCallback)(() => {
            _v21.current(_v22.current);
          }, []),
          _v24 = (0, _v1.useCallback)((0, _v16.default)(_v0 => {
            _v21.current(_v0);
          }, _v46.EMAIL_AUTO_SAVE_DEBOUNCED_INTERVAL), []);
        return (0, _v1.useEffect)(() => {
          !_v3 && _v0 && _v24(_v0);
        }, [_v0, _v24, _v3]), (0, _v1.useEffect)(() => {
          let _v0 = !!_v13 || !!_v15;
          if (_v14 || !_v0 || !_v17.current) return;
          let _v1 = _v17.current;
          if (_v17.current = null, _v7(!1), _v11?.(!1), _v15) return;
          _v5(_v1), _v3 || _v18({
            id: "auto-save-toast",
            title: _v47.default.ChangesSaved,
            status: "success",
            duration: 0
          });
          let {
            changedProps: _v2
          } = _v55(_v1, _v0);
          !_v3 && _v2.length > 0 && _v24(_v0);
        }, [_v14, _v13, _v15]), (0, _v1.useEffect)(() => {
          _v15 && !_v14 && _v15?.res?.json().then(_v0 => {
            let _v1 = (0, _v18.deepCamelCase)(_v0);
            if (_v1?.errorCode) {
              let _v0 = _v47.ERROR_CODE[_v1.errorCode],
                _v1 = _v1.invalidParameters?.[0]?.field,
                _v2 = _v47.ERROR_EMAIL_FIELD_MAPPING[_v1];
              _v18({
                title: _v2 && _v0 ? `${_v47.default.ChangesCouldNotBeSaved} ${_v2} - ${_v0}` : _v47.default.ChangesCouldNotBeSaved,
                status: "error",
                duration: 0
              });
            }
          });
        }, [_v14, _v15]), (0, _v1.useEffect)(() => {
          _v4.hasApiData || _v5(_v0);
        }, [_v0, _v4.hasApiData]), {
          isReminderSaved: _v0 => _v4.reminders.some(_v0 => _v0.id === _v0),
          isDirty: _v55(_v4, _v0).changedProps.length > 0,
          isSaving: _v6,
          save: _v23
        };
      })(_v2, _v10 || _v46.VIMEO, _v17, _v16);
    return ((0, _v1.useEffect)(() => {
      _v1?.({
        isDirty: _v21,
        isSaving: _v22,
        save: _v23
      });
    }, [_v21, _v22, _v1, _v23]), (0, _v1.useEffect)(() => () => _v1?.(null), [_v1]), (0, _v1.useEffect)(() => {
      _v6 || _v19();
    }, [_v19]), (0, _v1.useEffect)(() => {
      _v18 && _v3({
        type: _v56.SET_STATE,
        payload: _v18
      });
    }, [_v18]), !_v6 || (0, _v3.default)(_v6)) ? (0, _v2.jsx)(_v6.FullScreenLoader, {}) : (0, _v2.jsx)(_v65.Provider, {
      value: {
        state: _v2,
        dispatch: _v3,
        isLoading: _v17,
        getEmailData: _v19,
        isReminderSaved: _v20,
        isManualSaveRequired: _v16,
        canUseConfigurableEventReminders: _v15
      },
      children: _v0
    });
  }], 0);
  let _v66 = {
      UNDO: "UNDO",
      REDO: "REDO",
      SET: "SET",
      RESET: "RESET"
    },
    _v67 = {
      past: [],
      present: {},
      future: [],
      canUndo: !1,
      canRedo: !1
    },
    _v68 = (_v0, _v1) => {
      let {
        past: _v2,
        present: _v3,
        future: _v4,
        canUndo: _v5,
        canRedo: _v6
      } = _v0;
      switch (_v1.type) {
        case _v66.UNDO:
          if (_v5) {
            let _v0 = _v2[_v2.length - 1],
              _v1 = _v2.slice(0, _v2.length - 1);
            return {
              ..._v0,
              past: _v1,
              present: _v0,
              canUndo: 0 !== _v1.length,
              canRedo: !0,
              future: [_v3, ..._v4]
            };
          }
          return _v0;
        case _v66.REDO:
          if (_v6) {
            let _v0 = _v4[0],
              _v1 = _v4.slice(1);
            return {
              ..._v0,
              past: [..._v2, _v3],
              present: _v0,
              future: _v1,
              canUndo: !0,
              canRedo: 0 !== _v1.length
            };
          }
          return _v0;
        case _v66.SET:
          let {
              payload: _v0
            } = _v1,
            {
              changedProps: _v1
            } = _v55(_v0, _v3, !1);
          if (0 === _v1.length) return _v0;
          return {
            ..._v0,
            past: [..._v2, _v3],
            present: _v0,
            canUndo: !0,
            canRedo: !1,
            future: []
          };
        case _v66.RESET:
          return {
            ..._v67,
            present: _v1.payload
          };
      }
    },
    _v69 = _v0 => {
      let [_v1, _v2] = (0, _v1.useReducer)(_v68, {
        ..._v67,
        present: _v0
      });
      return [{
        ..._v1.present,
        canUndo: _v1.canUndo,
        canRedo: _v1.canRedo
      }, _v2];
    };
  _v0.s(["ACTION_TYPE", 0, _v66, "default", 0, _v69], 0);
  let _v70 = (0, _v1.createContext)({
    state: {},
    dispatch: () => console.error("dispatch not initialized"),
    undoRedoDispatch: () => console.error("undo/redo dispatch not initialized")
  });
  _v0.s(["UndoRedoContext", 0, _v70, "UndoRedoContextProvider", 0, ({
    children: _v0
  }) => {
    let {
        state: _v1,
        dispatch: _v2
      } = (0, _v1.useContext)(_v65),
      [_v3, _v4] = _v69(_v1),
      [_v5, _v6] = (0, _v1.useState)(!1),
      _v7 = (0, _v1.useCallback)((0, _v16.default)(_v0 => {
        _v4({
          type: _v66.SET,
          payload: _v0
        });
      }, _v46.EMAIL_UNDO_REDO_DEBOUNCED_INTERVAL), [_v4]);
    (0, _v1.useEffect)(() => {
      if (_v5) {
        let {
          changedProps: _v0
        } = _v55(_v1, _v3, !1);
        _v0.length > 0 && _v2({
          type: _v56.SET_STATE,
          payload: _v3
        });
      }
    }, [_v3, _v5, _v1, _v2]), (0, _v1.useEffect)(() => {
      _v1.hasApiData && _v4({
        type: _v66.RESET,
        payload: _v1
      });
    }, [_v4, _v1.hasApiData]), (0, _v1.useEffect)(() => {
      if (!_v5) {
        let {
          changedProps: _v0
        } = _v55(_v1, _v3, !1);
        _v0.length > 0 && _v7(_v1);
      }
    }, [_v1, _v5, _v7, _v3]), (0, _v1.useEffect)(() => {
      let {
        changedProps: _v0
      } = _v55(_v1, _v3, !1);
      0 === _v0.length && _v6(!1);
    }, [_v1, _v3]);
    let _v8 = (0, _v1.useCallback)((_v0, _v1) => {
      let {
          subject: _v2,
          header: _v3,
          body: _v4,
          buttonInfo: _v5,
          showCalender: _v6,
          defaultConfig: _v7
        } = _v1,
        _v8 = _v61(_v0);
      return _v2[_v0] !== _v7.subject[_v8] || _v5[_v0].text !== _v7.buttonInfo[_v8].text || _v5[_v0].isCustomLink || _v3[_v0] !== _v7.header[_v8] || _v4[_v0] !== _v7.body[_v8] || (_v8 === _v46.EMAIL_TYPES.CONFIRMATION || _v8 === _v46.EMAIL_TYPES.REMINDER) && _v6[_v0] !== _v7.showCalender[_v8];
    }, [_v1.buttonInfo, _v1.subject, _v1.header, _v1.body, _v1.showCalender]);
    return (0, _v1.useEffect)(() => {
      let _v0 = Object.keys(_v1.subject).reduce((_v0, _v1) => (_v0[_v1] = _v8(_v1, _v1), _v0), {});
      _v0 !== _v1.isContentModified && _v2({
        type: _v56.SET_IS_CONTENT_MODIFIED,
        payload: _v0
      });
    }, [_v8]), (0, _v2.jsx)(_v70.Provider, {
      value: {
        state: _v3,
        dispatch: _v4,
        undoRedoDispatch: _v0 => {
          (_v0.type === _v66.REDO || _v0.type === _v66.UNDO) && _v1.hasApiData && _v6(!0), _v4(_v0);
        }
      },
      children: _v0
    });
  }], 0), _v0.s(["useEmailCustomization", 0, function () {
    let {
        state: _v0,
        dispatch: _v1,
        isReminderSaved: _v2,
        isManualSaveRequired: _v3,
        canUseConfigurableEventReminders: _v4
      } = (0, _v1.useContext)(_v65),
      {
        state: _v5,
        undoRedoDispatch: _v6
      } = (0, _v1.useContext)(_v70);
    return {
      emailState: {
        ..._v0,
        canUndo: _v5.canUndo,
        canRedo: _v5.canRedo
      },
      dispatch: _v1,
      undoRedoDispatch: _v6,
      activeContentKey: _v0.emailTemplateType === _v46.EMAIL_TYPES.REMINDER ? _v0.selectedReminderId : _v0.emailTemplateType,
      isReminderSaved: _v2,
      isManualSaveRequired: _v3,
      canUseConfigurableEventReminders: _v4
    };
  }], 0);
}