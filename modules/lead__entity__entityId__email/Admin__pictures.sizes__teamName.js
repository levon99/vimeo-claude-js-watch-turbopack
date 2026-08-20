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
  let _v12 = {
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
    _v13 = (0, _v1.createContext)(_v12),
    _v14 = () => (0, _v1.useContext)(_v13);
  _v0.s(["default", 0, ({
    children: _v0
  }) => {
    let _v1 = (0, _v9.useEntityStore)(),
      _v2 = (0, _v11.useViewer)(),
      _v3 = _v2?.user,
      _v4 = _v2?.teamUser,
      _v5 = _v1?.user?.uri === _v3?.uri,
      _v6 = !!_v1?.metadata?.interactions.edit?.uri,
      _v7 = _v4?.plainTextPermissionLevel === "Admin",
      [_v8, {
        data: _v9,
        loading: _v10
      }] = (0, _v10.useGetUserTeamLazy)(),
      _v11 = !!_v4 && _v4.hasLivePermissionGrant,
      _v12 = _v5 || _v7 || _v11,
      _v13 = (0, _v7.getUserIdFromUri)(_v1?.user?.uri || _v3?.uri),
      [_v14, _v15] = (0, _v1.useState)(_v12);
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
    }, [_v10, _v9, _v12, _v6, _v5]), (0, _v2.jsx)(_v13.Provider, {
      value: _v14,
      children: _v0
    });
  }, "useTeamStore", 0, _v14], 0);
  var _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0);
  async function _v21({
    baseUrl: _v0,
    where: {
      userId: _v1,
      liveEventId: _v2,
      reminderId: _v3
    },
    ..._v4
  }) {
    return (0, _v20.measureLatency)("deleteUserLiveEventEmailReminder", "DELETE", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v1}/live_events/${_v2}/email_reminders/${_v3}`, {
        ..._v4,
        method: "DELETE"
      });
      if (!_v0.ok) throw new _v17.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v17.deepCamelCase)(_v1);
    });
  }
  var _v22 = _v0.i(0),
    _v23 = _v0.i(0);
  function _v24() {
    let {
        mutate: _v0
      } = (0, _v22.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v23.useGctlConfig)(),
      [_v5, _v6] = (0, _v19.useInternalState)();
    return [(0, _v1.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/live_events/${_v0.where.liveEventId}/email_reminders/${_v0.where.reminderId}${(0, _v19.serializeQuery)(_v0)}`, _v21({
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
  "true" === _v18.default.env.STORYBOOK && (0, _v19.assignMswData)(_v24, {
    endpoint: "/users/:userId/live_events/:liveEventId/email_reminders/:reminderId",
    method: "DELETE"
  }), _v0.s(["useDeleteUserLiveEventEmailReminder", 0, _v24], 0);
  var _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0),
    _v32 = _v0.i(0),
    _v33 = _v0.i(0),
    _v34 = _v0.i(0);
  let _v35 = {
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
    _v36 = {
      CHANGE_REGISTRATION_EMAIL_CONFIG: "vimeo.change_registration_email_config",
      REGISTRATION_EMAIL_PREVIEW: "vimeo.registration_email_preview",
      REGISTRATION_EMAIL_ACTION: "vimeo.registration_email_action",
      REGISTRATION_EMAIL_LAYOUT_CHANGE: "vimeo.registration_email_layout_change",
      TRIGGER_HELP_CENTER: "vimeo.trigger_help_center"
    },
    _v37 = {
      CLICK: "click"
    },
    _v38 = {
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
    _v39 = {
      CONFIRMATION: "confirmation",
      REMINDER: "reminder",
      FOLLOWUP: "followup"
    },
    _v40 = {
      EVENT_REGISTRATION_PAGE: "event_registration_page"
    },
    _v41 = "Preview-and-customize-your-webinars-emails",
    _v42 = {
      ICON: "icon",
      BUTTON: "button",
      TOGGLE: "toggle"
    };
  _v0.s(["BP_ACTION_NAMES", 0, _v38, "BP_ACTION_TYPES", 0, _v37, "BP_ACTION_VALUES", 0, {
    ON: "ON",
    OFF: "OFF",
    DESKTOP_VIEW: "desktop_view",
    MOBILE_VIEW: "mobile_view"
  }, "BP_COPY", 0, {
    CONFIRMATION: "Confirmation email",
    REMINDER: "Reminder email",
    FOLLOWUP: "Follow up email"
  }, "BP_CTA_TYPE", 0, _v41, "BP_ELEMENT", 0, _v42, "BP_EVENT_NAMES", 0, _v36, "BP_PAGE_NAME", 0, _v40, "BP_TYPE", 0, _v39, "TRIGGER_EMAIL_ACTION", 0, _v35], 0);
  var _v43 = _v0.i(0);
  let _v44 = () => {
    let _v0 = (0, _v43.useConfigStore)(_v0 => _v0.entityId),
      {
        privacy: _v1
      } = (0, _v9.useEntityStore)(),
      _v2 = (0, _v11.useViewer)(),
      _v3 = _v2?.teamUser,
      {
        data: _v4
      } = (0, _v25.useGetLeadCaptureResourceIdForm)({
        select: ["uuid"],
        where: {
          resourceId: _v0,
          resourceType: _v6.ENTITY_TO_PATH_MAP[_v6.ENTITY_TYPE.EVENT]
        }
      }),
      _v5 = _v4?.uuid,
      _v6 = _v0 => (0, _v32.buildViewBpContext)({
        view_type: "pageview",
        feature: null,
        ..._v0
      }),
      _v7 = _v0 => (0, _v27.buildActionBpContext)({
        action_type: _v37.CLICK,
        feature: null,
        ..._v0
      }),
      _v8 = _v0 => (0, _v29.buildProductAnalyticsBpContext)({
        entity_type: "events",
        feature: "registration_email",
        product: "gates",
        location: "body",
        device_type: (0, _v26.default)(),
        ..._v0
      }),
      _v9 = _v0 => (0, _v28.buildLiveBpContext)({
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
      _v10 = _v0 => (0, _v33.buildWebBpContext)({
        page_name: _v40.EVENT_REGISTRATION_PAGE,
        referrer: document.referrer || window.location.href,
        referrer_page_name: _v40.EVENT_REGISTRATION_PAGE,
        path: document.location.pathname,
        ..._v0
      }),
      _v11 = _v0 => (0, _v31.buildThirdPartyIntegrationBpContext)({
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
        let _v5 = _v36.CHANGE_REGISTRATION_EMAIL_CONFIG;
        (0, _v34.sendBpEventWithContexts)(_v5, {
          ..._v7(),
          ..._v10(),
          ..._v8({
            copy: _v3,
            element: _v42.TOGGLE
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
        element: _v4 = _v42.BUTTON
      }) => {
        let _v5 = _v12();
        if (!_v5) return;
        let _v6 = _v36.REGISTRATION_EMAIL_PREVIEW;
        (0, _v34.sendBpEventWithContexts)(_v6, {
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
        element: _v3 = _v42.BUTTON
      }) => {
        let _v4 = _v12();
        if (!_v4) return;
        let _v5 = _v36.REGISTRATION_EMAIL_ACTION;
        (0, _v34.sendBpEventWithContexts)(_v5, {
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
        let _v3 = _v36.REGISTRATION_EMAIL_LAYOUT_CHANGE;
        (0, _v34.sendBpEventWithContexts)(_v3, {
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
        let _v0 = _v36.TRIGGER_HELP_CENTER;
        (0, _v34.sendBpEventWithContexts)(_v0, {
          ..._v7(),
          ..._v10(),
          ..._v8(),
          ..._v9(),
          ..._v6(),
          ..._v11(),
          ...(0, _v30.buildTeamBpContextFromTeamUser)(_v3)
        }, 2, {
          cta_type: _v41
        });
      }
    };
  };
  _v0.s(["useAnalytics", 0, _v44], 0);
  var _v45 = _v0.i(0),
    _v46 = _v0.i(0);
  let _v47 = _v0 => (0, _v2.jsx)("strong", {
      children: _v0
    }),
    _v48 = {
      [_v45.EMAIL_TOGGLE_MAP.CONFIRMATION]: (0, _v46.translate)({
        singular: "Registration confirmation",
        dictionary: {
          es: {
            singular: "Confirmación de registro"
          },
          "de-DE": {
            singular: "Registrierungsbestätigung"
          },
          "fr-FR": {
            singular: "Confirmation d'inscription"
          },
          "ja-JP": {
            singular: "登録確認"
          },
          "ko-KR": {
            singular: "등록 확인"
          },
          "pt-BR": {
            singular: "Confirmação de inscrição"
          },
          "zh-CN": {
            singular: "注册确认"
          }
        }
      }),
      [_v45.EMAIL_TOGGLE_MAP.FOLLOWUP]: (0, _v46.translate)({
        singular: "Auto-trigger upon event completion",
        dictionary: {
          es: {
            singular: "Envío automático al finalizar el evento"
          },
          "de-DE": {
            singular: "Automatisch senden bei Event-Abschluss"
          },
          "fr-FR": {
            singular: "Envoi automatique dès la fin de l'événement"
          },
          "ja-JP": {
            singular: "イベント完了時に自動送信する"
          },
          "ko-KR": {
            singular: "이벤트 완료 시 자동 전송"
          },
          "pt-BR": {
            singular: "Envio automático após a conclusão do evento"
          },
          "zh-CN": {
            singular: "活动完成后自动触发"
          }
        }
      })
    },
    _v49 = {
      [_v45.EMAIL_TEXT_STYLE.MIXED]: (0, _v46.translate)({
        singular: "Mixed",
        dictionary: {
          es: {
            singular: "Combinado"
          },
          "de-DE": {
            singular: "Gemischt"
          },
          "fr-FR": {
            singular: "Mixte"
          },
          "ja-JP": {
            singular: "組み合わせ"
          },
          "ko-KR": {
            singular: "혼합"
          },
          "pt-BR": {
            singular: "Combinado"
          },
          "zh-CN": {
            singular: "混合"
          }
        }
      }),
      [_v45.EMAIL_TEXT_STYLE.BOLD]: (0, _v46.translate)({
        singular: "Bold",
        dictionary: {
          es: {
            singular: "Negrita"
          },
          "de-DE": {
            singular: "Fett"
          },
          "fr-FR": {
            singular: "Gras"
          },
          "ja-JP": {
            singular: "太字"
          },
          "ko-KR": {
            singular: "굵게"
          },
          "pt-BR": {
            singular: "Negrito"
          },
          "zh-CN": {
            singular: "粗体"
          }
        }
      }),
      [_v45.EMAIL_TEXT_STYLE.REGULAR]: (0, _v46.translate)({
        singular: "Regular",
        dictionary: {
          "de-DE": {
            singular: "Normal"
          },
          "fr-FR": {
            singular: "Standard"
          },
          "ja-JP": {
            singular: "通常"
          },
          "ko-KR": {
            singular: "일반"
          },
          "pt-BR": {
            singular: "Normal"
          },
          "zh-CN": {
            singular: "常规"
          }
        }
      }),
      [_v45.EMAIL_TEXT_STYLE.ITALIC]: (0, _v46.translate)({
        singular: "Italic",
        dictionary: {
          es: {
            singular: "Cursiva"
          },
          "de-DE": {
            singular: "Kursiv"
          },
          "fr-FR": {
            singular: "Italique"
          },
          "ja-JP": {
            singular: "斜体"
          },
          "ko-KR": {
            singular: "기울임"
          },
          "pt-BR": {
            singular: "Itálico"
          },
          "zh-CN": {
            singular: "斜体"
          }
        }
      }),
      [_v45.EMAIL_TEXT_STYLE.UNDERLINE]: (0, _v46.translate)({
        singular: "Underline",
        dictionary: {
          es: {
            singular: "Subrayado"
          },
          "de-DE": {
            singular: "Unterstrichen"
          },
          "fr-FR": {
            singular: "Souligné"
          },
          "ja-JP": {
            singular: "下線"
          },
          "ko-KR": {
            singular: "밑줄"
          },
          "pt-BR": {
            singular: "Sublinhado"
          },
          "zh-CN": {
            singular: "下划线"
          }
        }
      })
    },
    _v50 = {
      [_v45.EMAIL_TEXT_SIZE.HUGE]: (0, _v46.translate)({
        singular: "Huge",
        dictionary: {
          es: {
            singular: "Gigante"
          },
          "de-DE": {
            singular: "Riesig"
          },
          "fr-FR": {
            singular: "Géant"
          },
          "ja-JP": {
            singular: "巨大"
          },
          "ko-KR": {
            singular: "거대"
          },
          "pt-BR": {
            singular: "Gigante"
          },
          "zh-CN": {
            singular: "巨大"
          }
        }
      }),
      [_v45.EMAIL_TEXT_SIZE.EXTRA_LARGE]: (0, _v46.translate)({
        singular: "Extra Large",
        dictionary: {
          es: {
            singular: "Extragrande"
          },
          "fr-FR": {
            singular: "Très large"
          },
          "ja-JP": {
            singular: "特大"
          },
          "ko-KR": {
            singular: "특대"
          },
          "pt-BR": {
            singular: "Extragrande"
          },
          "zh-CN": {
            singular: "特大"
          }
        }
      }),
      [_v45.EMAIL_TEXT_SIZE.LARGE]: (0, _v46.translate)({
        singular: "Large",
        dictionary: {
          es: {
            singular: "Grande"
          },
          "ja-JP": {
            singular: "大"
          },
          "ko-KR": {
            singular: "대"
          },
          "pt-BR": {
            singular: "Grande"
          },
          "zh-CN": {
            singular: "大"
          }
        }
      }),
      [_v45.EMAIL_TEXT_SIZE.REGULAR]: (0, _v46.translate)({
        singular: "Regular",
        dictionary: {
          "de-DE": {
            singular: "Normal"
          },
          "fr-FR": {
            singular: "Standard"
          },
          "ja-JP": {
            singular: "通常"
          },
          "ko-KR": {
            singular: "일반"
          },
          "pt-BR": {
            singular: "Normal"
          },
          "zh-CN": {
            singular: "常规"
          }
        }
      })
    },
    _v51 = {
      AccentColor: (0, _v46.translate)({
        singular: "Accent color",
        dictionary: {
          es: {
            singular: "Color de contraste"
          },
          "de-DE": {
            singular: "Farbakzent"
          },
          "fr-FR": {
            singular: "Accentuer la couleur"
          },
          "ja-JP": {
            singular: "アクセントカラー"
          },
          "ko-KR": {
            singular: "강조색"
          },
          "pt-BR": {
            singular: "Tom de cor"
          },
          "zh-CN": {
            singular: "强调色"
          }
        }
      }),
      Add: (0, _v46.translate)({
        singular: "Add",
        dictionary: {
          es: {
            singular: "Agregar"
          },
          "de-DE": {
            singular: "Hinzufügen"
          },
          "fr-FR": {
            singular: "Ajouter"
          },
          "ja-JP": {
            singular: "追加"
          },
          "ko-KR": {
            singular: "추가"
          },
          "pt-BR": {
            singular: "Adicionar"
          },
          "zh-CN": {
            singular: "添加"
          }
        }
      }),
      AddCalendar: (0, _v46.translate)({
        singular: "Add to calendar",
        dictionary: {
          es: {
            singular: "Agregar al calendario"
          },
          "de-DE": {
            singular: "Zum Kalender hinzufügen"
          },
          "fr-FR": {
            singular: "Ajouter au calendrier"
          },
          "ja-JP": {
            singular: "カレンダーに追加"
          },
          "ko-KR": {
            singular: "캘린더에 추가"
          },
          "pt-BR": {
            singular: "Adicionar ao calendário"
          },
          "zh-CN": {
            singular: "添加到日历"
          }
        }
      }),
      AddLink: (0, _v46.translate)({
        singular: "Add link",
        dictionary: {
          es: {
            singular: "Agregar enlace"
          },
          "de-DE": {
            singular: "Link hinzufügen"
          },
          "fr-FR": {
            singular: "Ajouter un lien"
          },
          "ja-JP": {
            singular: "リンクを追加"
          },
          "ko-KR": {
            singular: "링크 추가"
          },
          "pt-BR": {
            singular: "Adicionar link"
          },
          "zh-CN": {
            singular: "添加链接"
          }
        }
      }),
      BeginsShortly: (0, _v46.translate)({
        singular: "Begins shortly",
        dictionary: {
          es: {
            singular: "Comienza en breve"
          },
          "de-DE": {
            singular: "Beginnt in Kürze"
          },
          "fr-FR": {
            singular: "Commence sous peu"
          },
          "ja-JP": {
            singular: "まもなく開始します"
          },
          "ko-KR": {
            singular: "곧 시작합니다"
          },
          "pt-BR": {
            singular: "Começa em breve"
          },
          "zh-CN": {
            singular: "即将开始"
          }
        }
      }),
      Button: (0, _v46.translate)({
        singular: "Button",
        dictionary: {
          es: {
            singular: "Botón"
          },
          "fr-FR": {
            singular: "Bouton"
          },
          "ja-JP": {
            singular: "ボタン"
          },
          "ko-KR": {
            singular: "버튼"
          },
          "pt-BR": {
            singular: "Botão"
          },
          "zh-CN": {
            singular: "按钮"
          }
        }
      }),
      Cancel: (0, _v46.translate)({
        singular: "Cancel",
        dictionary: {
          es: {
            singular: "Cancelar"
          },
          "de-DE": {
            singular: "Abbrechen"
          },
          "fr-FR": {
            singular: "Annuler"
          },
          "ja-JP": {
            singular: "キャンセル"
          },
          "ko-KR": {
            singular: "취소"
          },
          "pt-BR": {
            singular: "Cancelar"
          },
          "zh-CN": {
            singular: "取消"
          }
        }
      }),
      Change: (0, _v46.translate)({
        singular: "Change",
        dictionary: {
          es: {
            singular: "Cambiar"
          },
          "de-DE": {
            singular: "Ändern"
          },
          "fr-FR": {
            singular: "Modifier"
          },
          "ja-JP": {
            singular: "変更"
          },
          "ko-KR": {
            singular: "변경"
          },
          "pt-BR": {
            singular: "Alterar"
          },
          "zh-CN": {
            singular: "更改"
          }
        }
      }),
      ChangesCouldNotBeSaved: (0, _v46.translate)({
        singular: "Changes could not be saved",
        dictionary: {
          es: {
            singular: "No se pudieron guardar los cambios"
          },
          "de-DE": {
            singular: "Änderungen konnten nicht gespeichert werden"
          },
          "fr-FR": {
            singular: "Les modifications n'ont pas pu être enregistrées"
          },
          "ja-JP": {
            singular: "変更を保存できませんでした"
          },
          "ko-KR": {
            singular: "변경 사항이 저장되지 않았습니다"
          },
          "pt-BR": {
            singular: "As alterações não puderam ser salvas"
          },
          "zh-CN": {
            singular: "无法保存更改"
          }
        }
      }),
      ChangesSaved: (0, _v46.translate)({
        singular: "Changes saved",
        dictionary: {
          es: {
            singular: "Guardamos los cambios"
          },
          "de-DE": {
            singular: "Änderungen wurden gespeichert"
          },
          "fr-FR": {
            singular: "Changements sauvegardés"
          },
          "ja-JP": {
            singular: "変更内容が保存されました"
          },
          "ko-KR": {
            singular: "변경 사항 저장 완료"
          },
          "pt-BR": {
            singular: "Alterações salvas"
          },
          "zh-CN": {
            singular: "已保存更改"
          }
        }
      }),
      ChooseProperty: (0, _v46.translate)({
        singular: "Choose property",
        dictionary: {
          es: {
            singular: "Elegir la propiedad"
          },
          "de-DE": {
            singular: "Eigenschaft auswählen"
          },
          "fr-FR": {
            singular: "Choisir la propriété"
          },
          "ja-JP": {
            singular: "プロパティを選択"
          },
          "ko-KR": {
            singular: "속성 선택"
          },
          "pt-BR": {
            singular: "Selecione a propriedade"
          },
          "zh-CN": {
            singular: "选择属性"
          }
        }
      }),
      Color: (0, _v46.translate)({
        singular: "Color",
        dictionary: {
          "de-DE": {
            singular: "Farbe"
          },
          "fr-FR": {
            singular: "Couleur"
          },
          "ja-JP": {
            singular: "カラー"
          },
          "ko-KR": {
            singular: "색상"
          },
          "pt-BR": {
            singular: "Cor"
          },
          "zh-CN": {
            singular: "颜色"
          }
        }
      }),
      CustomLink: (0, _v46.translate)({
        singular: "Custom destination",
        dictionary: {
          es: {
            singular: "Destino personalizado"
          },
          "de-DE": {
            singular: "Benutzerdefinierter Zielort"
          },
          "fr-FR": {
            singular: "Destination personnalisée"
          },
          "ja-JP": {
            singular: "カスタム配信先"
          },
          "ko-KR": {
            singular: "커스텀 목적지"
          },
          "pt-BR": {
            singular: "Destino customizado"
          },
          "zh-CN": {
            singular: "自定义目标"
          }
        }
      }),
      CustomRange: (0, _v46.translate)({
        singular: "Custom range",
        dictionary: {
          es: {
            singular: "Rango personalizado"
          },
          "de-DE": {
            singular: "Benutzerdefinierter Zeitraum"
          },
          "fr-FR": {
            singular: "Plage personnalisée"
          },
          "ja-JP": {
            singular: "カスタム範囲"
          },
          "ko-KR": {
            singular: "사용자 지정 범위"
          },
          "pt-BR": {
            singular: "Intervalo personalizado"
          },
          "zh-CN": {
            singular: "自定义范围"
          }
        }
      }),
      DuplicateReminder: (0, _v46.translate)({
        singular: "A reminder with this timing already exists.",
        dictionary: {
          es: {
            singular: "Ya existe un recordatorio con este horario."
          },
          "de-DE": {
            singular: "Für diesen Zeitpunkt existiert bereits eine Erinnerung."
          },
          "fr-FR": {
            singular: "Un rappel avec ce délai existe déjà."
          },
          "ja-JP": {
            singular: "このタイミングのリマインダーはすでに存在します。"
          },
          "ko-KR": {
            singular: "동일한 타이밍의 알림이 이미 존재합니다."
          },
          "pt-BR": {
            singular: "Já existe um lembrete com esse horário."
          },
          "zh-CN": {
            singular: "已存在具有此时间设置的提醒。"
          }
        }
      }),
      EmailPreview: (0, _v46.translate)({
        singular: "Email preview",
        dictionary: {
          es: {
            singular: "Previsualizar correo electrónico"
          },
          "de-DE": {
            singular: "E-Mail-Vorschau"
          },
          "fr-FR": {
            singular: "Aperçu de l'e-mail"
          },
          "ja-JP": {
            singular: "Eメールプレビュー"
          },
          "ko-KR": {
            singular: "이메일 미리 보기"
          },
          "pt-BR": {
            singular: "Pré-visualização do e-mail"
          },
          "zh-CN": {
            singular: "通过电子邮件发送预览"
          }
        }
      }),
      EnterValidURL: (0, _v46.translate)({
        singular: "Enter a valid URL",
        dictionary: {
          es: {
            singular: "Ingresar un URL válido"
          },
          "de-DE": {
            singular: "Gib eine gültige URL ein"
          },
          "fr-FR": {
            singular: "Saisissez une URL valide"
          },
          "ja-JP": {
            singular: "正しいURLを入力してください"
          },
          "ko-KR": {
            singular: "유효한 URL을 입력하세요."
          },
          "pt-BR": {
            singular: "Digite um URL válido"
          },
          "zh-CN": {
            singular: "输入有效的 URL"
          }
        }
      }),
      EmailTabName: (_v0, _v1) => {
        switch (_v0) {
          case _v45.EMAIL_TYPES.CONFIRMATION:
            return (0, _v46.translate)({
              count: _v1,
              singular: "Confirmation email",
              plural: "Confirmation emails",
              dictionary: {
                es: {
                  singular: "Correo de confirmación",
                  plural: "Correos electrónicos de confirmación"
                },
                "de-DE": {
                  singular: "Bestätigung",
                  plural: "Bestätigungs-E-Mails"
                },
                "fr-FR": {
                  singular: "E-mail de confirmation",
                  plural: "E-mails de confirmation"
                },
                "ja-JP": {
                  singular: "確認メール",
                  plural: "確認メール"
                },
                "ko-KR": {
                  singular: "확인 이메일",
                  plural: "확인 이메일"
                },
                "pt-BR": {
                  singular: "E-mail de confirmação",
                  plural: "E-mail de confirmação"
                },
                "zh-CN": {
                  singular: "确认电子邮件",
                  plural: "确认电子邮件"
                }
              }
            });
          case _v45.EMAIL_TYPES.REMINDER:
            return (0, _v46.translate)({
              count: _v1,
              singular: "Reminder email",
              plural: "Reminder emails",
              dictionary: {
                es: {
                  singular: "Correo de recordatorio",
                  plural: "Correos electrónicos de recordatorio"
                },
                "de-DE": {
                  singular: "Erinnerungs-E-Mail",
                  plural: "Erinnerungs-E-Mails"
                },
                "fr-FR": {
                  singular: "E-mail de rappel",
                  plural: "E-mails de rappel"
                },
                "ja-JP": {
                  singular: "リマインダーメール",
                  plural: "リマインダーメール"
                },
                "ko-KR": {
                  singular: "알림 이메일",
                  plural: "알림 이메일"
                },
                "pt-BR": {
                  singular: "E-mail de lembrete",
                  plural: "E-mails de lembrete"
                },
                "zh-CN": {
                  singular: "提醒电子邮件",
                  plural: "提醒电子邮件"
                }
              }
            });
          case _v45.EMAIL_TYPES.FOLLOWUP:
            return (0, _v46.translate)({
              count: _v1,
              singular: "Follow-up email",
              plural: "Follow-up emails",
              dictionary: {
                es: {
                  singular: "Correo de seguimiento",
                  plural: "Correos de seguimiento"
                },
                "de-DE": {
                  singular: "Follow-up-E-Mail",
                  plural: "Follow-up-E-Mails"
                },
                "fr-FR": {
                  singular: "E-mail de relance",
                  plural: "E-mails de relance"
                },
                "ja-JP": {
                  singular: "フォローアップメール",
                  plural: "フォローアップメール"
                },
                "ko-KR": {
                  singular: "후속 이메일",
                  plural: "후속 이메일"
                },
                "pt-BR": {
                  singular: "E-mail de acompanhamento",
                  plural: "E-mails de acompanhamento"
                },
                "zh-CN": {
                  singular: "跟进邮件",
                  plural: "跟进邮件"
                }
              }
            });
        }
      },
      EmailTextStyle: _v49,
      EmailTextSize: _v50,
      EmailToggle: _v48,
      EntityTitle: (0, _v46.translate)({
        singular: "Title",
        dictionary: {
          es: {
            singular: "Título"
          },
          "de-DE": {
            singular: "Titel"
          },
          "fr-FR": {
            singular: "Titre"
          },
          "ja-JP": {
            singular: "タイトル"
          },
          "ko-KR": {
            singular: "제목"
          },
          "pt-BR": {
            singular: "Título"
          },
          "zh-CN": {
            singular: "标题"
          }
        }
      }),
      FirstName: (0, _v46.translate)({
        singular: "First name",
        dictionary: {
          es: {
            singular: "Nombre"
          },
          "de-DE": {
            singular: "Vorname"
          },
          "fr-FR": {
            singular: "Prénom"
          },
          "ja-JP": {
            singular: "名"
          },
          "ko-KR": {
            singular: "이름"
          },
          "pt-BR": {
            singular: "Nome"
          },
          "zh-CN": {
            singular: "名字"
          }
        }
      }),
      EmailSent: (0, _v46.translate)({
        singular: "Success! Your email was sent.",
        dictionary: {
          es: {
            singular: "¡Éxito! Su correo electrónico ha sido enviado."
          },
          "de-DE": {
            singular: "Erfolgreich! Ihre E-Mail wurde gesendet."
          },
          "fr-FR": {
            singular: "Succès ! Votre e-mail a été envoyé."
          },
          "ja-JP": {
            singular: "成功！メールが送信されました。"
          },
          "ko-KR": {
            singular: "성공! 이메일이 전송되었습니다."
          },
          "pt-BR": {
            singular: "Sucesso! Seu e-mail foi enviado."
          },
          "zh-CN": {
            singular: "成功！您的邮件已发送。"
          }
        }
      }),
      FollowUpModalDescription: (0, _v46.translate)({
        singular: "Registered attendees will be emailed immediately. This email can only be sent once and cannot be unsent.",
        dictionary: {
          es: {
            singular: "A los asistentes registrados se les enviará un correo electrónico de inmediato. Este correo solo puede enviarse una vez y no puede deshacerse."
          },
          "de-DE": {
            singular: "Angemeldete Teilnehmer werden sofort per E-Mail benachrichtigt. Diese E-Mail kann nur einmal gesendet werden und lässt sich nicht rückgängig machen."
          },
          "fr-FR": {
            singular: "Les participants inscrits recevront immédiatement un e-mail. Cet e-mail ne peut être envoyé qu'une seule fois et ne peut pas être annulé."
          },
          "ja-JP": {
            singular: "登録済みの参加者にただちにメールが送信されます。このメールは一度しか送信できず、取り消すことはできません。"
          },
          "ko-KR": {
            singular: "등록된 참석자에게 즉시 이메일이 발송됩니다. 이 이메일은 한 번만 보낼 수 있으며 전송 취소할 수 없습니다."
          },
          "pt-BR": {
            singular: "Os participantes registrados receberão um e-mail imediatamente. Este e-mail só pode ser enviado uma vez e não pode ser desfeito."
          },
          "zh-CN": {
            singular: "已注册的参与者将会立即收到电子邮件。该邮件只能发送一次，无法撤回。"
          }
        }
      }),
      FollowUpModalHeader: (0, _v46.translate)({
        singular: "Send follow-up email to registered guests?",
        dictionary: {
          es: {
            singular: "¿Enviar correo de seguimiento a los asistentes registrados?"
          },
          "de-DE": {
            singular: "Follow-up-E-Mail an angemeldete Teilnehmer senden?"
          },
          "fr-FR": {
            singular: "Envoyer un e-mail de relance aux invités inscrits ?"
          },
          "ja-JP": {
            singular: "登録済みの参加者にフォローアップメールを送信しますか？"
          },
          "ko-KR": {
            singular: "등록된 참석자에게 후속 이메일을 보내시겠습니까?"
          },
          "pt-BR": {
            singular: "Enviar e-mail de acompanhamento para convidados registrados?"
          },
          "zh-CN": {
            singular: "要向已注册的嘉宾发送跟进邮件吗？"
          }
        }
      }),
      FollowUpNotification: (0, _v46.translate)({
        singular: "Follow-up emails are sent only when the event is completed",
        dictionary: {
          es: {
            singular: "Los correos de seguimiento se envían solo cuando el evento se ha completado"
          },
          "de-DE": {
            singular: "Follow-up-E-Mails werden nur gesendet, wenn die Veranstaltung abgeschlossen ist"
          },
          "fr-FR": {
            singular: "Les e-mails de relance sont envoyés uniquement lorsque l'événement est terminé"
          },
          "ja-JP": {
            singular: "フォローアップメールはイベントが完了したときにのみ送信されます"
          },
          "ko-KR": {
            singular: "후속 이메일은 이벤트가 완료된 경우에만 발송됩니다"
          },
          "pt-BR": {
            singular: "E-mails de acompanhamento são enviados somente quando o evento é concluído"
          },
          "zh-CN": {
            singular: "仅在活动完成后发送跟进邮件"
          }
        }
      }),
      Footer: (0, _v46.translate)({
        singular: "Footer",
        dictionary: {
          es: {
            singular: "Pie de página"
          },
          "de-DE": {
            singular: "Fußzeile"
          },
          "fr-FR": {
            singular: "Pied de page"
          },
          "ja-JP": {
            singular: "フッター"
          },
          "ko-KR": {
            singular: "바닥글"
          },
          "pt-BR": {
            singular: "Rodapé"
          },
          "zh-CN": {
            singular: "页脚"
          }
        }
      }),
      FooterCompanyAddress: (0, _v46.translate)({
        singular: "Company address",
        dictionary: {
          es: {
            singular: "Dirección de la empresa"
          },
          "de-DE": {
            singular: "Unternehmensadresse"
          },
          "fr-FR": {
            singular: "Adresse de l'entreprise"
          },
          "ja-JP": {
            singular: "会社所在地"
          },
          "ko-KR": {
            singular: "회사 주소"
          },
          "pt-BR": {
            singular: "Endereço da empresa"
          },
          "zh-CN": {
            singular: "公司地址"
          }
        }
      }),
      FooterPolicyLink: (0, _v46.translate)({
        singular: "Privacy policy url",
        dictionary: {
          es: {
            singular: "URL de la Política de privacidad"
          },
          "de-DE": {
            singular: "URL für Datenschutzerklärung"
          },
          "fr-FR": {
            singular: "URL de politique de confidentialité"
          },
          "ja-JP": {
            singular: "プライバシーポリシーのURL"
          },
          "ko-KR": {
            singular: "개인정보보호 정책 URL"
          },
          "pt-BR": {
            singular: "URL da Política de Privacidade"
          },
          "zh-CN": {
            singular: "隐私政策 URL"
          }
        }
      }),
      FooterReplayMail: (0, _v46.translate)({
        singular: "Reply email",
        dictionary: {
          es: {
            singular: "Responder correo electrónico"
          },
          "de-DE": {
            singular: "Auf E-Mail antworten"
          },
          "fr-FR": {
            singular: "Réponse – e-mail"
          },
          "ja-JP": {
            singular: "Eメールに返信"
          },
          "ko-KR": {
            singular: "이메일 회신"
          },
          "pt-BR": {
            singular: "Responder e-mail"
          },
          "zh-CN": {
            singular: "回复电子邮件"
          }
        }
      }),
      Format: (0, _v46.translate)({
        singular: "Format",
        dictionary: {
          es: {
            singular: "Formato"
          },
          "ja-JP": {
            singular: "フォーマット"
          },
          "ko-KR": {
            singular: "형식"
          },
          "pt-BR": {
            singular: "Formato"
          },
          "zh-CN": {
            singular: "格式"
          }
        }
      }),
      From: (0, _v46.translate)({
        singular: "From:",
        dictionary: {
          es: {
            singular: "De:"
          },
          "de-DE": {
            singular: "Von"
          },
          "fr-FR": {
            singular: "De :"
          },
          "ja-JP": {
            singular: "送り主："
          },
          "ko-KR": {
            singular: "보내는 사람:"
          },
          "pt-BR": {
            singular: "De:"
          },
          "zh-CN": {
            singular: "发件人："
          }
        }
      }),
      FromGeneral: (0, _v46.translate)({
        singular: "From",
        dictionary: {
          es: {
            singular: "De"
          },
          "de-DE": {
            singular: "Von"
          },
          "fr-FR": {
            singular: "Du"
          },
          "ja-JP": {
            singular: "次より選択"
          },
          "ko-KR": {
            singular: "다음에서 선택"
          },
          "pt-BR": {
            singular: "Do"
          },
          "zh-CN": {
            singular: "来自"
          }
        }
      }),
      FromTooltip: (0, _v46.translate)("This name appears as the sender of your event emails."),
      General: (0, _v46.translate)({
        singular: "General",
        dictionary: {
          "de-DE": {
            singular: "Allgemein"
          },
          "fr-FR": {
            singular: "Général"
          },
          "ja-JP": {
            singular: "一般"
          },
          "ko-KR": {
            singular: "일반"
          },
          "pt-BR": {
            singular: "Geral"
          },
          "zh-CN": {
            singular: "一般"
          }
        }
      }),
      InvalidURL: (0, _v46.translate)({
        singular: "Please enter a valid URL.",
        dictionary: {
          es: {
            singular: "Ingresa un URL válido."
          },
          "de-DE": {
            singular: "Bitte gib eine gültige URL an."
          },
          "fr-FR": {
            singular: "Veuillez saisir une URL valide."
          },
          "ja-JP": {
            singular: "有効なURLを入力してください。"
          },
          "ko-KR": {
            singular: "유효한 URL을 입력하세요."
          },
          "pt-BR": {
            singular: "Por favor digite um URL válido."
          },
          "zh-CN": {
            singular: "请输入有效的 URL。"
          }
        }
      }),
      InvalidInput: (0, _v46.translate)({
        singular: "Invalid input",
        dictionary: {
          es: {
            singular: "Entrada no válida"
          },
          "de-DE": {
            singular: "Ungültige Eingabe"
          },
          "fr-FR": {
            singular: "Entrée non valide"
          },
          "ja-JP": {
            singular: "無効な入力"
          },
          "ko-KR": {
            singular: "입력이 잘못되었습니다."
          },
          "pt-BR": {
            singular: "Entrada inválida"
          },
          "zh-CN": {
            singular: "无效输入"
          }
        }
      }),
      InvalidEmailAddress: (0, _v46.translate)({
        singular: "Invalid email address",
        dictionary: {
          es: {
            singular: "Dirección de correo electrónico inválida. "
          },
          "de-DE": {
            singular: "Ungültige E-Mail-Adresse "
          },
          "fr-FR": {
            singular: "Adresse e-mail non valide."
          },
          "ja-JP": {
            singular: "メールアドレスが無効です"
          },
          "ko-KR": {
            singular: "유효하지 않은 이메일 주소입니다"
          },
          "pt-BR": {
            singular: "Endereço de e-mail inválido. "
          },
          "zh-CN": {
            singular: "无效电子邮件地址"
          }
        }
      }),
      JoinEvent: (0, _v46.translate)({
        singular: "Join event",
        dictionary: {
          es: {
            singular: "Unirse al evento"
          },
          "de-DE": {
            singular: "Event beitreten"
          },
          "fr-FR": {
            singular: "Rejoindre l'événement"
          },
          "ja-JP": {
            singular: "イベントに参加"
          },
          "ko-KR": {
            singular: "이벤트 참여"
          },
          "pt-BR": {
            singular: "Participar do evento"
          },
          "zh-CN": {
            singular: "加入活动"
          }
        }
      }),
      LastName: (0, _v46.translate)({
        singular: "Last name",
        dictionary: {
          es: {
            singular: "Apellidos"
          },
          "de-DE": {
            singular: "Nachname"
          },
          "fr-FR": {
            singular: "Nom"
          },
          "ja-JP": {
            singular: "姓"
          },
          "ko-KR": {
            singular: "성"
          },
          "pt-BR": {
            singular: "Sobrenome"
          },
          "zh-CN": {
            singular: "姓氏"
          }
        }
      }),
      Loading: (0, _v46.translate)({
        singular: "Loading...",
        dictionary: {
          es: {
            singular: "Cargando..."
          },
          "de-DE": {
            singular: "Lädt ..."
          },
          "fr-FR": {
            singular: "Chargement..."
          },
          "ja-JP": {
            singular: "読み込み中..."
          },
          "ko-KR": {
            singular: "로드 중..."
          },
          "pt-BR": {
            singular: "Carregando..."
          },
          "zh-CN": {
            singular: "正在加载..."
          }
        }
      }),
      Logo: (0, _v46.translate)({
        singular: "Logo",
        dictionary: {
          "ja-JP": {
            singular: "ロゴ"
          },
          "ko-KR": {
            singular: "로고"
          },
          "zh-CN": {
            singular: "徽标"
          }
        }
      }),
      LogoOutOf: (_v0, _v1) => (0, _v46.translate)({
        singular: "{CURRENT_INDEX} of {TOTAL}",
        replacements: {
          CURRENT_INDEX: _v0,
          TOTAL: _v1
        },
        dictionary: {
          es: {
            singular: "{CURRENT_INDEX} de {TOTAL}"
          },
          "de-DE": {
            singular: "{CURRENT_INDEX} von {TOTAL}"
          },
          "fr-FR": {
            singular: "{CURRENT_INDEX} sur {TOTAL}"
          },
          "ja-JP": {
            singular: "{CURRENT_INDEX} / {TOTAL}"
          },
          "ko-KR": {
            singular: "{CURRENT_INDEX}/{TOTAL}"
          },
          "pt-BR": {
            singular: "{CURRENT_INDEX} de {TOTAL}"
          },
          "zh-CN": {
            singular: "{CURRENT_INDEX} / {TOTAL}"
          }
        }
      }),
      LogoFormatHint: (0, _v46.translate)("PNG or JPG"),
      NewReminderEmail: (0, _v46.translate)({
        singular: "New reminder email",
        dictionary: {
          es: {
            singular: "Nuevo correo de recordatorio"
          },
          "de-DE": {
            singular: "Neue Erinnerungs-E-Mail"
          },
          "fr-FR": {
            singular: "Nouvel e-mail de rappel"
          },
          "ja-JP": {
            singular: "新しいリマインダーメール"
          },
          "ko-KR": {
            singular: "새 알림 이메일"
          },
          "pt-BR": {
            singular: "Novo e-mail de lembrete"
          },
          "zh-CN": {
            singular: "新提醒邮件"
          }
        }
      }),
      PersonalizedTags: (0, _v46.translate)({
        singular: "Personalized tags",
        dictionary: {
          es: {
            singular: "Etiquetas personalizadas"
          },
          "de-DE": {
            singular: "Individuelle Tags"
          },
          "fr-FR": {
            singular: "Étiquettes personnalisées"
          },
          "ja-JP": {
            singular: "パーソナライズされたタグ"
          },
          "ko-KR": {
            singular: "개인 태그"
          },
          "pt-BR": {
            singular: "Tags personalizadas"
          },
          "zh-CN": {
            singular: "个性化标签"
          }
        }
      }),
      PersonalizedTagsDescription: (0, _v46.translate)({
        singular: "Click to add a dynamic tag, or information that the recipient provided with their registration.",
        dictionary: {
          es: {
            singular: "Haz clic para agregar una etiqueta dinámica o información que el destinatario proporcionó con su registro."
          },
          "de-DE": {
            singular: "Klicke, um ein dynamisches Tag oder Informationen hinzuzufügen, die die empfangende Person bei ihrer Registrierung angegeben hat."
          },
          "fr-FR": {
            singular: "Cliquez pour ajouter une étiquette dynamique, ou des informations que le destinataire a fournies lors de son inscription."
          },
          "ja-JP": {
            singular: "クリックして動的タグまたは受信者が登録時に提供した情報を追加します。"
          },
          "ko-KR": {
            singular: "동적 태그 또는 수신자가 등록 시 제공한 정보를 추가하려면 클릭하세요."
          },
          "pt-BR": {
            singular: "Clique para adicionar uma tag dinâmica ou informações que o destinatário forneceu com o registro."
          },
          "zh-CN": {
            singular: "点击可添加动态标签，或收件人在注册时提供的信息。"
          }
        }
      }),
      PleaseEnterValidEmail: (0, _v46.translate)({
        singular: "Please enter a valid email.",
        dictionary: {
          "zh-CN": {
            singular: "请输入有效的电子邮件。"
          }
        }
      }),
      PreviouslyUsed: (0, _v46.translate)({
        singular: "Previously used",
        dictionary: {
          es: {
            singular: "Usado anteriormente"
          },
          "de-DE": {
            singular: "Zuletzt verwendet"
          },
          "fr-FR": {
            singular: "Utilisé précédemment"
          },
          "ja-JP": {
            singular: "以前に使用した"
          },
          "ko-KR": {
            singular: "이전에 사용된 항목"
          },
          "pt-BR": {
            singular: "Usado anteriormente"
          },
          "zh-CN": {
            singular: "之前使用过"
          }
        }
      }),
      ReminderAlert: (0, _v46.translate)({
        singular: "Reminder alert",
        dictionary: {
          es: {
            singular: "Alerta de recordatorio"
          },
          "de-DE": {
            singular: "Erinnerungsbenachrichtigung"
          },
          "fr-FR": {
            singular: "Alerte de rappel"
          },
          "ja-JP": {
            singular: "リマインダー通知"
          },
          "ko-KR": {
            singular: "미리 알림 경고"
          },
          "pt-BR": {
            singular: "Alerta de lembrete"
          },
          "zh-CN": {
            singular: "提醒通知"
          }
        }
      }),
      ReminderAmount: (0, _v46.translate)({
        singular: "Reminder amount",
        dictionary: {
          es: {
            singular: "Cantidad del recordatorio"
          },
          "de-DE": {
            singular: "Erinnerungsanzahl"
          },
          "fr-FR": {
            singular: "Valeur du rappel"
          },
          "ja-JP": {
            singular: "リマインダーの数"
          },
          "ko-KR": {
            singular: "알림 수량"
          },
          "pt-BR": {
            singular: "Quantidade do lembrete"
          },
          "zh-CN": {
            singular: "提醒数值"
          }
        }
      }),
      ReminderScheduleDescription: (0, _v46.translate)({
        singular: "Schedule the email to notify registered users at the right time.",
        dictionary: {
          es: {
            singular: "Programa el correo para notificar a los usuarios registrados en el momento adecuado."
          },
          "de-DE": {
            singular: "Planen Sie die E-Mail, um registrierte Nutzer zur richtigen Zeit zu benachrichtigen."
          },
          "fr-FR": {
            singular: "Planifiez l'e-mail pour notifier les utilisateurs enregistrés au bon moment."
          },
          "ja-JP": {
            singular: "メールをスケジュールして、登録ユーザーに適切なタイミングで通知します。"
          },
          "ko-KR": {
            singular: "등록된 사용자에게 적시에 알림 이메일을 발송하도록 일정을 설정하세요."
          },
          "pt-BR": {
            singular: "Agende o e-mail para notificar os usuários registrados no momento certo."
          },
          "zh-CN": {
            singular: "安排该邮件在适当的时间通知已注册用户。"
          }
        }
      }),
      ReminderUnit: (0, _v46.translate)({
        singular: "Reminder unit",
        dictionary: {
          es: {
            singular: "Unidad del recordatorio"
          },
          "de-DE": {
            singular: "Erinnerungseinheit"
          },
          "fr-FR": {
            singular: "Unité du rappel"
          },
          "ja-JP": {
            singular: "リマインダーの単位"
          },
          "ko-KR": {
            singular: "알림 단위"
          },
          "pt-BR": {
            singular: "Unidade do lembrete"
          },
          "zh-CN": {
            singular: "提醒单位"
          }
        }
      }),
      Remove: (0, _v46.translate)({
        singular: "Remove",
        dictionary: {
          es: {
            singular: "Eliminar"
          },
          "de-DE": {
            singular: "Entfernen"
          },
          "fr-FR": {
            singular: "Supprimer"
          },
          "ja-JP": {
            singular: "削除"
          },
          "ko-KR": {
            singular: "제거"
          },
          "pt-BR": {
            singular: "Remover"
          },
          "zh-CN": {
            singular: "移除"
          }
        }
      }),
      Reset: (0, _v46.translate)({
        singular: "Reset",
        dictionary: {
          es: {
            singular: "Restablecer"
          },
          "de-DE": {
            singular: "Zurücksetzen"
          },
          "fr-FR": {
            singular: "Réinitialiser"
          },
          "ja-JP": {
            singular: "リセット"
          },
          "ko-KR": {
            singular: "재설정"
          },
          "pt-BR": {
            singular: "Redefinir"
          },
          "zh-CN": {
            singular: "重置"
          }
        }
      }),
      Save: (0, _v46.translate)({
        singular: "Save",
        dictionary: {
          es: {
            singular: "Guardar"
          },
          "de-DE": {
            singular: "Speichern"
          },
          "fr-FR": {
            singular: "Enregistrer"
          },
          "ja-JP": {
            singular: "保存"
          },
          "ko-KR": {
            singular: "저장"
          },
          "pt-BR": {
            singular: "Salvar"
          },
          "zh-CN": {
            singular: "保存"
          }
        }
      }),
      ScheduledDate: {
        Media: {
          Years: _v0 => (0, _v46.translate)({
            singular: "Starts {STRONG}automatically{/STRONG} in {YEARS} year",
            plural: "Starts {STRONG}automatically{/STRONG} in {YEARS} years",
            count: _v0,
            replacements: {
              YEARS: _v0,
              STRONG: _v47
            },
            dictionary: {
              es: {
                singular: "Comienza {STRONG}automáticamente{/STRONG} en {YEARS} año",
                plural: "Comienza {STRONG}automáticamente{/STRONG} en {YEARS} años"
              },
              "de-DE": {
                singular: "Fängt {STRONG}automatisch{/STRONG} in {YEARS} Jahr an",
                plural: "Fängt {STRONG}automatisch{/STRONG} in {YEARS} Jahren an"
              },
              "fr-FR": {
                singular: "Commence {STRONG}automatiquement{/STRONG} dans {YEARS} an",
                plural: "Commence {STRONG}automatiquement{/STRONG} dans {YEARS} ans"
              },
              "ja-JP": {
                singular: "{STRONG}自動{/STRONG}開始まであと{YEARS}年",
                plural: "{STRONG}自動{/STRONG}開始まであと{YEARS}年"
              },
              "ko-KR": {
                singular: "{YEARS}년 후에 {STRONG}자동으로{/STRONG} 시작",
                plural: "{YEARS}년 후에 {STRONG}자동으로{/STRONG} 시작"
              },
              "pt-BR": {
                singular: "Começará {STRONG}automaticamente{/STRONG} em {YEARS} ano",
                plural: "Começará {STRONG}automaticamente{/STRONG} em {YEARS} anos"
              },
              "zh-CN": {
                singular: "{YEARS} 年后{STRONG}自动{/STRONG}开始",
                plural: "{YEARS} 年后{STRONG}自动{/STRONG}开始"
              }
            }
          }),
          Month: _v0 => (0, _v46.translate)({
            singular: "Starts {STRONG}automatically{/STRONG} in {MONTHS} month",
            plural: "Starts {STRONG}automatically{/STRONG} in {MONTHS} months",
            count: _v0,
            replacements: {
              MONTHS: _v0,
              STRONG: _v47
            },
            dictionary: {
              es: {
                singular: "Comienza {STRONG}automáticamente{/STRONG} en {MONTHS} mes",
                plural: "Comienza {STRONG}automáticamente{/STRONG} en {MONTHS} meses"
              },
              "de-DE": {
                singular: "Fängt {STRONG}automatisch{/STRONG} in {MONTHS} Monat an",
                plural: "Fängt {STRONG}automatisch{/STRONG} in {MONTHS} Monaten an"
              },
              "fr-FR": {
                singular: "Commence {STRONG}automatiquement{/STRONG} dans {MONTHS} mois",
                plural: "Commence {STRONG}automatiquement{/STRONG} dans {MONTHS} mois"
              },
              "ja-JP": {
                singular: "{STRONG}自動{/STRONG}開始まであと{MONTHS}か月",
                plural: "{STRONG}自動{/STRONG}開始まであと{MONTHS}か月"
              },
              "ko-KR": {
                singular: "{MONTHS}개월 후에 {STRONG}자동으로{/STRONG} 시작",
                plural: "{MONTHS}개월 후에 {STRONG}자동으로{/STRONG} 시작"
              },
              "pt-BR": {
                singular: "Começará {STRONG}automaticamente{/STRONG} em {MONTHS} mês",
                plural: "Começará {STRONG}automaticamente{/STRONG} em {MONTHS} meses"
              },
              "zh-CN": {
                singular: "{MONTHS} 个月后{STRONG}自动{/STRONG}开始",
                plural: "{MONTHS} 个月后{STRONG}自动{/STRONG}开始"
              }
            }
          }),
          Minutes: _v0 => (0, _v46.translate)({
            singular: "Starts {STRONG}automatically{/STRONG} in {MINUTE} minute",
            plural: "Starts {STRONG}automatically{/STRONG} in {MINUTE} minutes",
            count: _v0,
            replacements: {
              MINUTE: _v0,
              STRONG: _v47
            },
            dictionary: {
              es: {
                singular: "Comienza {STRONG}automáticamente{/STRONG} en {MINUTE} minuto",
                plural: "Comienza {STRONG}automáticamente{/STRONG} en {MINUTE} minutos"
              },
              "de-DE": {
                singular: "Fängt {STRONG}automatisch{/STRONG} in {MINUTE} Minute an",
                plural: "Fängt {STRONG}automatisch{/STRONG} in {MINUTE} Minuten an"
              },
              "fr-FR": {
                singular: "Commence {STRONG}automatiquement{/STRONG} dans {MINUTE} minute",
                plural: "Commence {STRONG}automatiquement{/STRONG} dans {MINUTE} minutes"
              },
              "ja-JP": {
                singular: "{STRONG}自動{/STRONG}開始まであと{MINUTE}分",
                plural: "{STRONG}自動{/STRONG}開始まであと{MINUTE}分"
              },
              "ko-KR": {
                singular: "{MINUTE}분 후에 {STRONG}자동으로{/STRONG} 시작",
                plural: "{MINUTE}분 후에 {STRONG}자동으로{/STRONG} 시작"
              },
              "pt-BR": {
                singular: "Começará {STRONG}automaticamente{/STRONG} em {MINUTE} minuto",
                plural: "Começará {STRONG}automaticamente{/STRONG} em {MINUTE} minutos"
              },
              "zh-CN": {
                singular: "{MINUTE} 分钟后{STRONG}自动{/STRONG}开始",
                plural: "{MINUTE} 分钟后{STRONG}自动{/STRONG}开始"
              }
            }
          }),
          HoursMinute: (_v0, _v1) => (0, _v46.translate)({
            singular: "Starts {STRONG}automatically{/STRONG} in {HOUR} hour, {MINUTE} minutes",
            plural: "Starts {STRONG}automatically{/STRONG} in {HOUR} hours, {MINUTE} minutes",
            count: _v0,
            replacements: {
              MINUTE: _v1,
              HOUR: _v0,
              STRONG: _v47
            },
            dictionary: {
              es: {
                singular: "Comienza {STRONG}automáticamente{/STRONG} en {HOUR} hora, {MINUTE} minutos",
                plural: "Comienza {STRONG}automáticamente{/STRONG} en {HOUR} horas, {MINUTE} minutos"
              },
              "de-DE": {
                singular: "Fängt {STRONG}automatisch{/STRONG} in {HOUR} Stunde, {MINUTE} Minuten an",
                plural: "Fängt {STRONG}automatisch{/STRONG} in {HOUR} Stunden, {MINUTE} Minuten an"
              },
              "fr-FR": {
                singular: "Commence {STRONG}automatiquement{/STRONG} dans {HOUR} heure et {MINUTE} minutes",
                plural: "Commence {STRONG}automatiquement{/STRONG} dans {HOUR} heures et {MINUTE} minutes"
              },
              "ja-JP": {
                singular: "{STRONG}自動{/STRONG}開始まであと{HOUR}時間{MINUTE}分",
                plural: "{STRONG}自動{/STRONG}開始まであと{HOUR}時間{MINUTE}分"
              },
              "ko-KR": {
                singular: "{HOUR}시간 {MINUTE}분 후에 {STRONG}자동으로{/STRONG} 시작",
                plural: "{HOUR}시간 {MINUTE}분 후에 {STRONG}자동으로{/STRONG} 시작"
              },
              "pt-BR": {
                singular: "Começará {STRONG}automaticamente{/STRONG} em {HOUR} hora e {MINUTE} minutos",
                plural: "Começará {STRONG}automaticamente{/STRONG} em {HOUR} horas e {MINUTE} minutos"
              },
              "zh-CN": {
                singular: "{HOUR} 小时 {MINUTE} 分钟后{STRONG}自动{/STRONG}开始",
                plural: "{HOUR} 小时 {MINUTE} 分钟后{STRONG}自动{/STRONG}开始"
              }
            }
          }),
          HoursMinutes: (_v0, _v1) => (0, _v46.translate)({
            singular: "Starts {STRONG}automatically{/STRONG} in {HOUR} hours, {MINUTE} minute",
            plural: "Starts {STRONG}automatically{/STRONG} in {HOUR} hours, {MINUTE} minutes",
            count: _v1,
            replacements: {
              MINUTE: _v1,
              HOUR: _v0,
              STRONG: _v47
            },
            dictionary: {
              es: {
                singular: "Comienza {STRONG}automáticamente{/STRONG} en {HOUR} horas, {MINUTE} minuto",
                plural: "Comienza {STRONG}automáticamente{/STRONG} en {HOUR} horas, {MINUTE} minutos"
              },
              "de-DE": {
                singular: "Fängt {STRONG}automatisch{/STRONG} in {HOUR} Stunden, {MINUTE} Minute an",
                plural: "Fängt {STRONG}automatisch{/STRONG} in {HOUR} Stunden, {MINUTE} Minuten an"
              },
              "fr-FR": {
                singular: "Commence {STRONG}automatiquement{/STRONG} dans {HOUR} heures et {MINUTE} minute",
                plural: "Commence {STRONG}automatiquement{/STRONG} dans {HOUR} heures et {MINUTE} minutes"
              },
              "ja-JP": {
                singular: "{STRONG}自動{/STRONG}開始まであと{HOUR}時間{MINUTE}分",
                plural: "{STRONG}自動{/STRONG}開始まであと{HOUR}時間{MINUTE}分"
              },
              "ko-KR": {
                singular: "{HOUR}시간 {MINUTE}분 후에 {STRONG}자동으로{/STRONG} 시작",
                plural: "{HOUR}시간 {MINUTE}분 후에 {STRONG}자동으로{/STRONG} 시작"
              },
              "pt-BR": {
                singular: "Começará {STRONG}automaticamente{/STRONG} em {HOUR} horas e {MINUTE} minuto",
                plural: "Começará {STRONG}automaticamente{/STRONG} em {HOUR} horas e {MINUTE} minutos"
              },
              "zh-CN": {
                singular: "{HOUR} 小时 {MINUTE} 分钟后{STRONG}自动{/STRONG}开始",
                plural: "{HOUR} 小时 {MINUTE} 分钟后{STRONG}自动{/STRONG}开始"
              }
            }
          }),
          HourMinute: (_v0, _v1) => (0, _v46.translate)({
            singular: "Starts {STRONG}automatically{/STRONG} in {HOUR} hour, {MINUTE} minute",
            replacements: {
              MINUTE: _v1,
              HOUR: _v0,
              STRONG: _v47
            },
            dictionary: {
              es: {
                singular: "Comienza {STRONG}automáticamente{/STRONG} en {HOUR} hora, {MINUTE} minuto"
              },
              "de-DE": {
                singular: "Fängt {STRONG}automatisch{/STRONG} in {HOUR} Stunde, {MINUTE} Minute an"
              },
              "fr-FR": {
                singular: "Commence {STRONG}automatiquement{/STRONG} dans {HOUR} heure et {MINUTE} minute"
              },
              "ja-JP": {
                singular: "{STRONG}自動{/STRONG}開始まであと{HOUR}時間{MINUTE}分"
              },
              "ko-KR": {
                singular: "{HOUR}시간 {MINUTE}분 후에 {STRONG}자동으로{/STRONG} 시작"
              },
              "pt-BR": {
                singular: "Começará {STRONG}automaticamente{/STRONG} em {HOUR} hora e {MINUTE} minuto"
              },
              "zh-CN": {
                singular: "{HOUR} 小时 {MINUTE} 分钟后{STRONG}自动{/STRONG}开始"
              }
            }
          }),
          DayHours: (_v0, _v1) => (0, _v46.translate)({
            singular: "Starts {STRONG}automatically{/STRONG} in {DAY} day, {HOUR} hours",
            plural: "Starts {STRONG}automatically{/STRONG} in {DAY} days, {HOUR} hours",
            count: _v0,
            replacements: {
              DAY: _v0,
              HOUR: _v1,
              STRONG: _v47
            },
            dictionary: {
              es: {
                singular: "Comienza {STRONG}automáticamente{/STRONG} en {DAY} día, {HOUR} horas",
                plural: "Comienza {STRONG}automáticamente{/STRONG} en {DAY} días, {HOUR} horas"
              },
              "de-DE": {
                singular: "Fängt {STRONG}automatisch{/STRONG} in {DAY} Tag, {HOUR} Stunden an",
                plural: "Fängt {STRONG}automatisch{/STRONG} in {DAY} Tagen, {HOUR} Stunden an"
              },
              "fr-FR": {
                singular: "Commence {STRONG}automatiquement{/STRONG} dans {DAY} jour et {HOUR} heures",
                plural: "Commence {STRONG}automatiquement{/STRONG} dans {DAY} jours et {HOUR} heures"
              },
              "ja-JP": {
                singular: "{STRONG}自動{/STRONG}開始まであと{DAY}日と{HOUR}時間",
                plural: "{STRONG}自動{/STRONG}開始まであと{DAY}日と{HOUR}時間"
              },
              "ko-KR": {
                singular: "{DAY}일 {HOUR}시간 후에 {STRONG}자동으로{/STRONG} 시작",
                plural: "{DAY}일 {HOUR}시간 후에 {STRONG}자동으로{/STRONG} 시작"
              },
              "pt-BR": {
                singular: "Começará {STRONG}automaticamente{/STRONG} em {DAY} dia e {HOUR} horas",
                plural: "Começará {STRONG}automaticamente{/STRONG} em {DAY} dias e {HOUR} horas"
              },
              "zh-CN": {
                singular: "{DAY} 天 {HOUR} 小时后{STRONG}自动{/STRONG}启动",
                plural: "{DAY} 天 {HOUR} 小时后{STRONG}自动{/STRONG}启动"
              }
            }
          }),
          DaysHours: (_v0, _v1) => (0, _v46.translate)({
            singular: "Starts {STRONG}automatically{/STRONG} in {DAY} days, {HOUR} hour",
            plural: "Starts {STRONG}automatically{/STRONG} in {DAY} days, {HOUR} hours",
            count: _v1,
            replacements: {
              DAY: _v0,
              HOUR: _v1,
              STRONG: _v47
            },
            dictionary: {
              es: {
                singular: "Comienza {STRONG}automáticamente{/STRONG} en {DAY} días, {HOUR} hora",
                plural: "Comienza {STRONG}automáticamente{/STRONG} en {DAY} días, {HOUR} horas"
              },
              "de-DE": {
                singular: "Fängt {STRONG}automatisch{/STRONG} in {DAY} Tagen, {HOUR} Stunde an",
                plural: "Fängt {STRONG}automatisch{/STRONG} in {DAY} Tagen, {HOUR} Stunden an"
              },
              "fr-FR": {
                singular: "Commence {STRONG}automatiquement{/STRONG} dans {DAY} jours et {HOUR} heure",
                plural: "Commence {STRONG}automatiquement{/STRONG} dans {DAY} jours et {HOUR} heures"
              },
              "ja-JP": {
                singular: "{STRONG}自動{/STRONG}開始まであと{DAY}日と{HOUR}時間",
                plural: "{STRONG}自動{/STRONG}開始まであと{DAY}日と{HOUR}時間"
              },
              "ko-KR": {
                singular: "{DAY}일 {HOUR}시간 후에 {STRONG}자동으로{/STRONG} 시작",
                plural: "{DAY}일 {HOUR}시간 후에 {STRONG}자동으로{/STRONG} 시작"
              },
              "pt-BR": {
                singular: "Começará {STRONG}automaticamente{/STRONG} em {DAY} dias e {HOUR} hora",
                plural: "Começará {STRONG}automaticamente{/STRONG} em {DAY} dias e {HOUR} horas"
              },
              "zh-CN": {
                singular: "{DAY} 天 {HOUR} 小时后{STRONG}自动{/STRONG}开始",
                plural: "{DAY} 天 {HOUR} 小时后{STRONG}自动{/STRONG}启动"
              }
            }
          }),
          DayHour: (_v0, _v1) => (0, _v46.translate)({
            singular: "Starts {STRONG}automatically{/STRONG} in {DAY} day, {HOUR} hour",
            replacements: {
              DAY: _v0,
              HOUR: _v1,
              STRONG: _v47
            },
            dictionary: {
              es: {
                singular: "Comienza {STRONG}automáticamente{/STRONG} en {DAY} día, {HOUR} hora"
              },
              "de-DE": {
                singular: "Fängt {STRONG}automatisch{/STRONG} in {DAY} Tag, {HOUR} Stunde an"
              },
              "fr-FR": {
                singular: "Commence {STRONG}automatiquement{/STRONG} dans {DAY} jour et {HOUR} heure"
              },
              "ja-JP": {
                singular: "{STRONG}自動{/STRONG}開始まであと{DAY}日と{HOUR}時間"
              },
              "ko-KR": {
                singular: "{DAY}일 {HOUR}시간 후에 {STRONG}자동으로{/STRONG} 시작"
              },
              "pt-BR": {
                singular: "Começará {STRONG}automaticamente{/STRONG} em {DAY} dia e {HOUR} hora"
              },
              "zh-CN": {
                singular: "{DAY} 天 {HOUR} 小时后{STRONG}自动{/STRONG}启动"
              }
            }
          })
        },
        Live: {
          Years: _v0 => (0, _v46.translate)({
            singular: "Starts in {YEARS} year",
            plural: "Starts in {YEARS} years",
            count: _v0,
            replacements: {
              YEARS: _v0
            },
            dictionary: {
              es: {
                singular: "Empieza en {YEARS} año",
                plural: "Empieza en {YEARS} años"
              },
              "de-DE": {
                singular: "Beginnt in {YEARS} Jahr",
                plural: "Beginnt in {YEARS} Jahren"
              },
              "fr-FR": {
                singular: "Démarre dans {YEARS} an",
                plural: "Démarre dans {YEARS} ans"
              },
              "ja-JP": {
                singular: "あと {YEARS}年で開始",
                plural: "あと {YEARS}年で開始"
              },
              "ko-KR": {
                singular: "{YEARS}년 후 시작",
                plural: "{YEARS}년 후 시작"
              },
              "pt-BR": {
                singular: "Começa em {YEARS} ano",
                plural: "Começa em {YEARS} anos"
              },
              "zh-CN": {
                singular: "{YEARS} 年后开始",
                plural: "{YEARS} 年后开始"
              }
            }
          }),
          Month: _v0 => (0, _v46.translate)({
            singular: "Starts in {MONTHS} month",
            plural: "Starts in {MONTHS} months",
            count: _v0,
            replacements: {
              MONTHS: _v0
            },
            dictionary: {
              es: {
                singular: "Empieza en {MONTHS} mes",
                plural: "Empieza en {MONTHS} meses"
              },
              "de-DE": {
                singular: "Beginnt in {MONTHS} Monat",
                plural: "Beginnt in {MONTHS} Monaten"
              },
              "fr-FR": {
                singular: "Démarre dans {MONTHS} mois",
                plural: "Démarre dans {MONTHS} mois"
              },
              "ja-JP": {
                singular: "あと {MONTHS}ヶ月で開始",
                plural: "あと {MONTHS}ヶ月で開始"
              },
              "ko-KR": {
                singular: "{MONTHS}개월 후 시작",
                plural: "{MONTHS}개월 후 시작"
              },
              "pt-BR": {
                singular: "Começa em {MONTHS} mês",
                plural: "Começa em {MONTHS} meses"
              },
              "zh-CN": {
                singular: "{MONTHS} 个月后开始",
                plural: "{MONTHS} 个月后开始"
              }
            }
          }),
          Minutes: _v0 => (0, _v46.translate)({
            singular: "Starts in {MINUTE} minute",
            plural: "Starts in {MINUTE} minutes",
            count: _v0,
            replacements: {
              MINUTE: _v0
            },
            dictionary: {
              es: {
                singular: "Comienza en {MINUTE} minuto",
                plural: "Comienza en {MINUTE} minutos"
              },
              "de-DE": {
                singular: "Fängt in {MINUTE} Minute an",
                plural: "Fängt in {MINUTE} Minuten an"
              },
              "fr-FR": {
                singular: "Commence dans {MINUTE} minute",
                plural: "Commence dans {MINUTE} minutes"
              },
              "ja-JP": {
                singular: "開始まであと {MINUTE}分",
                plural: "開始まであと {MINUTE}分"
              },
              "ko-KR": {
                singular: "{MINUTE}분 후 시작",
                plural: "{MINUTE}분 후 시작"
              },
              "pt-BR": {
                singular: "Começa em {MINUTE} minuto",
                plural: "Começa em {MINUTE} minutos"
              },
              "zh-CN": {
                singular: "{MINUTE} 分钟后开始",
                plural: "{MINUTE} 分钟后开始"
              }
            }
          }),
          HoursMinute: (_v0, _v1) => (0, _v46.translate)({
            singular: "Starts in {HOUR} hour, {MINUTE} minutes",
            plural: "Starts in {HOUR} hours, {MINUTE} minutes",
            count: _v0,
            replacements: {
              MINUTE: _v1,
              HOUR: _v0
            },
            dictionary: {
              es: {
                singular: "Comienza en {HOUR} hora, {MINUTE} minutos",
                plural: "Comienza en {HOUR} horas, {MINUTE} minutos"
              },
              "de-DE": {
                singular: "Fängt in {HOUR} Stunde, {MINUTE} Minuten an",
                plural: "Fängt in {HOUR} Stunden, {MINUTE} Minuten an"
              },
              "fr-FR": {
                singular: "Commence dans {HOUR} heure et {MINUTE} minutes",
                plural: "Commence dans {HOUR} heures et {MINUTE} minutes"
              },
              "ja-JP": {
                singular: "開始まであと {HOUR}時間 {MINUTE}分",
                plural: "開始まであと {HOUR}時間 {MINUTE}分"
              },
              "ko-KR": {
                singular: "{HOUR}시간 {MINUTE}분 후 시작",
                plural: "{HOUR}시간 {MINUTE}분 후 시작"
              },
              "pt-BR": {
                singular: "Começa em {HOUR} hora, {MINUTE} minutos",
                plural: "Começa em {HOUR} horas, {MINUTE} minutos"
              },
              "zh-CN": {
                singular: "{HOUR} 小时 {MINUTE} 分钟后开始",
                plural: "{HOUR} 小时 {MINUTE} 分钟后开始"
              }
            }
          }),
          HoursMinutes: (_v0, _v1) => (0, _v46.translate)({
            singular: "Starts in {HOUR} hours, {MINUTE} minute",
            plural: "Starts in {HOUR} hours, {MINUTE} minutes",
            count: _v1,
            replacements: {
              MINUTE: _v1,
              HOUR: _v0
            },
            dictionary: {
              es: {
                singular: "Comienza en {HOUR} horas, {MINUTE} minuto",
                plural: "Comienza en {HOUR} horas, {MINUTE} minutos"
              },
              "de-DE": {
                singular: "Fängt in {HOUR} Stunden, {MINUTE} Minute an",
                plural: "Fängt in {HOUR} Stunden, {MINUTE} Minuten an"
              },
              "fr-FR": {
                singular: "Commence dans {HOUR} heures et {MINUTE} minute",
                plural: "Commence dans {HOUR} heures et {MINUTE} minutes"
              },
              "ja-JP": {
                singular: "開始まであと {HOUR}時間 {MINUTE}分",
                plural: "開始まであと {HOUR}時間 {MINUTE}分"
              },
              "ko-KR": {
                singular: "{HOUR}시간 {MINUTE}분 후 시작",
                plural: "{HOUR}시간 {MINUTE}분 후 시작"
              },
              "pt-BR": {
                singular: "Começa em {HOUR} horas, {MINUTE} minuto",
                plural: "Começa em {HOUR} horas, {MINUTE} minutos"
              },
              "zh-CN": {
                singular: "{HOUR} 小时 {MINUTE} 分钟后开始",
                plural: "{HOUR} 小时 {MINUTE} 分钟后开始"
              }
            }
          }),
          HourMinute: (_v0, _v1) => (0, _v46.translate)({
            singular: "Starts in {HOUR} hour, {MINUTE} minute",
            replacements: {
              MINUTE: _v1,
              HOUR: _v0
            },
            dictionary: {
              es: {
                singular: "Comienza en {HOUR} hora, {MINUTE} minuto"
              },
              "de-DE": {
                singular: "Fängt in {HOUR} Stunde, {MINUTE} Minute an"
              },
              "fr-FR": {
                singular: "Commence dans {HOUR} heure et {MINUTE} minute"
              },
              "ja-JP": {
                singular: "開始まであと {HOUR}時間 {MINUTE}分"
              },
              "ko-KR": {
                singular: "{HOUR}시간 {MINUTE}분 후 시작"
              },
              "pt-BR": {
                singular: "Começa em {HOUR} hora, {MINUTE} minuto"
              },
              "zh-CN": {
                singular: "{HOUR} 小时 {MINUTE} 分钟后开始"
              }
            }
          }),
          DayHours: (_v0, _v1) => (0, _v46.translate)({
            singular: "Starts in {DAY} day, {HOUR} hours",
            plural: "Starts in {DAY} days, {HOUR} hours",
            count: _v0,
            replacements: {
              DAY: _v0,
              HOUR: _v1
            },
            dictionary: {
              es: {
                singular: "Comienza en {DAY} día, {HOUR} horas",
                plural: "Comienza en {DAY} días, {HOUR} horas"
              },
              "de-DE": {
                singular: "Fängt in {DAY} Tag, {HOUR} Stunden an",
                plural: "Fängt in {DAY} Tagen, {HOUR} Stunden an"
              },
              "fr-FR": {
                singular: "Commence dans {DAY} jour et {HOUR} heures",
                plural: "Commence dans {DAY} jours et {HOUR} heures"
              },
              "ja-JP": {
                singular: "開始まであと {DAY}日・{HOUR}時間",
                plural: "開始まであと {DAY}日・{HOUR}時間"
              },
              "ko-KR": {
                singular: "{DAY}일 {HOUR}시간 후 시작",
                plural: "{DAY}일 {HOUR}시간 후 시작"
              },
              "pt-BR": {
                singular: "Começa em {DAY} dia, {HOUR} horas",
                plural: "Começa em {DAY} dias, {HOUR} horas"
              },
              "zh-CN": {
                singular: "{DAY} 天 {HOUR} 小时后开始",
                plural: "{DAY} 天 {HOUR} 小时后开始"
              }
            }
          }),
          DaysHours: (_v0, _v1) => (0, _v46.translate)({
            singular: "Starts in {DAY} days, {HOUR} hour",
            plural: "Starts in {DAY} days, {HOUR} hours",
            count: _v1,
            replacements: {
              DAY: _v0,
              HOUR: _v1
            },
            dictionary: {
              es: {
                singular: "Comienza en {DAY} días, {HOUR} hora",
                plural: "Comienza en {DAY} días, {HOUR} horas"
              },
              "de-DE": {
                singular: "Fängt in {DAY} Tagen, {HOUR} Stunde an",
                plural: "Fängt in {DAY} Tagen, {HOUR} Stunden an"
              },
              "fr-FR": {
                singular: "Commence dans {DAY} jours et {HOUR} heure",
                plural: "Commence dans {DAY} jours et {HOUR} heures"
              },
              "ja-JP": {
                singular: "開始まであと {DAY}日・{HOUR}時間",
                plural: "開始まであと {DAY}日・{HOUR}時間"
              },
              "ko-KR": {
                singular: "{DAY}일 {HOUR}시간 후 시작",
                plural: "{DAY}일 {HOUR}시간 후 시작"
              },
              "pt-BR": {
                singular: "Começa em {DAY} dias, {HOUR} horas",
                plural: "Começa em {DAY} dias, {HOUR} horas"
              },
              "zh-CN": {
                singular: "{DAY} 天 {HOUR} 小时后开始",
                plural: "{DAY} 天 {HOUR} 小时后开始"
              }
            }
          }),
          DayHour: (_v0, _v1) => (0, _v46.translate)({
            singular: "Starts in {DAY} day, {HOUR} hour",
            replacements: {
              DAY: _v0,
              HOUR: _v1
            },
            dictionary: {
              es: {
                singular: "Comienza en {DAY} día, {HOUR} hora"
              },
              "de-DE": {
                singular: "Fängt in {DAY} Tag, {HOUR} Stunde an"
              },
              "fr-FR": {
                singular: "Commence dans {DAY} jour et {HOUR} heure"
              },
              "ja-JP": {
                singular: "開始まであと {DAY}日・{HOUR}時間"
              },
              "ko-KR": {
                singular: "{DAY}일 {HOUR}시간 후 시작"
              },
              "pt-BR": {
                singular: "Começa em {DAY} dia, {HOUR} hora"
              },
              "zh-CN": {
                singular: "{DAY} 天 {HOUR} 小时后开始"
              }
            }
          })
        }
      },
      SelectLogo: (0, _v46.translate)("Select logo"),
      Send: (0, _v46.translate)({
        singular: "Send",
        dictionary: {
          es: {
            singular: "Enviar"
          },
          "de-DE": {
            singular: "Senden"
          },
          "fr-FR": {
            singular: "Envoyer"
          },
          "ja-JP": {
            singular: "送信"
          },
          "ko-KR": {
            singular: "전송"
          },
          "pt-BR": {
            singular: "Enviar"
          },
          "zh-CN": {
            singular: "发送"
          }
        }
      }),
      SendTest: (0, _v46.translate)({
        singular: "Send test",
        dictionary: {
          es: {
            singular: "Enviar prueba"
          },
          "de-DE": {
            singular: "Test-E-Mail senden"
          },
          "fr-FR": {
            singular: "Envoyer un test"
          },
          "ja-JP": {
            singular: "テストを送信"
          },
          "ko-KR": {
            singular: "테스트 전송"
          },
          "pt-BR": {
            singular: "Enviar teste"
          },
          "zh-CN": {
            singular: "发送测试"
          }
        }
      }),
      Size: (0, _v46.translate)({
        singular: "Size",
        dictionary: {
          es: {
            singular: "Tamaño"
          },
          "de-DE": {
            singular: "Größe"
          },
          "fr-FR": {
            singular: "Taille"
          },
          "ja-JP": {
            singular: "サイズ"
          },
          "ko-KR": {
            singular: "크기"
          },
          "pt-BR": {
            singular: "Tamanho"
          },
          "zh-CN": {
            singular: "大小"
          }
        }
      }),
      SomethingWentWrong: (0, _v46.translate)({
        singular: "Something Went Wrong.",
        dictionary: {
          es: {
            singular: "Algo salió mal."
          },
          "de-DE": {
            singular: "Hier ist etwas schiefgelaufen."
          },
          "fr-FR": {
            singular: "Une erreur s'est produite."
          },
          "ja-JP": {
            singular: "エラーが発生しました。"
          },
          "ko-KR": {
            singular: "문제가 발생했습니다."
          },
          "pt-BR": {
            singular: "Alguma coisa deu errado."
          },
          "zh-CN": {
            singular: "出错了。"
          }
        }
      }),
      Style: (0, _v46.translate)({
        singular: "Style",
        dictionary: {
          es: {
            singular: "Estilo"
          },
          "de-DE": {
            singular: "Design"
          },
          "ja-JP": {
            singular: "スタイル"
          },
          "ko-KR": {
            singular: "스타일"
          },
          "pt-BR": {
            singular: "Estilo"
          },
          "zh-CN": {
            singular: "样式"
          }
        }
      }),
      Subject: (0, _v46.translate)({
        singular: "Subject:",
        dictionary: {
          es: {
            singular: "Asunto:"
          },
          "de-DE": {
            singular: "Thema:"
          },
          "fr-FR": {
            singular: "Sujet :"
          },
          "ja-JP": {
            singular: "テーマ:"
          },
          "ko-KR": {
            singular: "제목:"
          },
          "pt-BR": {
            singular: "Assunto:"
          },
          "zh-CN": {
            singular: "主题："
          }
        }
      }),
      SubjectGeneral: (0, _v46.translate)({
        singular: "Subject",
        dictionary: {
          es: {
            singular: "Sujeto"
          },
          "de-DE": {
            singular: "Betreff"
          },
          "fr-FR": {
            singular: "Sujet"
          },
          "ja-JP": {
            singular: "テーマ"
          },
          "ko-KR": {
            singular: "주제"
          },
          "pt-BR": {
            singular: "Tema"
          },
          "zh-CN": {
            singular: "主题"
          }
        }
      }),
      TeamName: (0, _v46.translate)({
        singular: "Team Name",
        dictionary: {
          es: {
            singular: "Nombre del equipo"
          },
          "de-DE": {
            singular: "Team-Name"
          },
          "fr-FR": {
            singular: "Nom de l'équipe"
          },
          "ja-JP": {
            singular: "チーム名"
          },
          "ko-KR": {
            singular: "팀 이름"
          },
          "pt-BR": {
            singular: "Nome da equipe"
          },
          "zh-CN": {
            singular: "团队名称"
          }
        }
      }),
      Text: (0, _v46.translate)({
        singular: "Text",
        dictionary: {
          es: {
            singular: "Texto"
          },
          "fr-FR": {
            singular: "Texte"
          },
          "ja-JP": {
            singular: "テキスト"
          },
          "ko-KR": {
            singular: "텍스트"
          },
          "pt-BR": {
            singular: "Texto"
          },
          "zh-CN": {
            singular: "文本"
          }
        }
      }),
      URL: (0, _v46.translate)({
        singular: "URL",
        dictionary: {
          "pt-BR": {
            singular: "customizada"
          }
        }
      }),
      Upload: (0, _v46.translate)({
        singular: "Upload",
        dictionary: {
          es: {
            singular: "Subir"
          },
          "de-DE": {
            singular: "Hochladen"
          },
          "fr-FR": {
            singular: "Importer"
          },
          "ja-JP": {
            singular: "アップロード"
          },
          "ko-KR": {
            singular: "업로드"
          },
          "pt-BR": {
            singular: "Carregar"
          },
          "zh-CN": {
            singular: "上传"
          }
        }
      }),
      UploadFailed: (0, _v46.translate)({
        singular: "Upload failed",
        dictionary: {
          es: {
            singular: "Error en la subida"
          },
          "de-DE": {
            singular: "Hochladen ist fehlgeschlagen"
          },
          "fr-FR": {
            singular: "Échec de la mise en ligne"
          },
          "ja-JP": {
            singular: "アップロードが失敗しました"
          },
          "ko-KR": {
            singular: "업로드 실패"
          },
          "pt-BR": {
            singular: "Falha no carregamento"
          },
          "zh-CN": {
            singular: "上传失败"
          }
        }
      }),
      UploadImage: (0, _v46.translate)({
        singular: "Upload image",
        dictionary: {
          es: {
            singular: "Subir imagen"
          },
          "de-DE": {
            singular: "Bild hochladen"
          },
          "fr-FR": {
            singular: "Téléverser une image"
          },
          "ja-JP": {
            singular: "画像をアップロード"
          },
          "ko-KR": {
            singular: "이미지 업로드"
          },
          "pt-BR": {
            singular: "Enviar imagem"
          },
          "zh-CN": {
            singular: "上传图片"
          }
        }
      }),
      VerifyEmail: (0, _v46.translate)({
        singular: "Verify your email address to send a test email",
        dictionary: {
          es: {
            singular: "Verifique su dirección de correo electrónico para enviar un correo electrónico de prueba"
          },
          "de-DE": {
            singular: "Überprüfen Sie Ihre E-Mail-Adresse, um eine Test-E-Mail zu senden"
          },
          "fr-FR": {
            singular: "Vérifiez votre adresse e-mail avant d'envoyer le message test"
          },
          "ja-JP": {
            singular: "テストメール送信のため、メールアドレスをご確認ください"
          },
          "ko-KR": {
            singular: "테스트 이메일을 보내려면 이메일 주소를 확인하세요."
          },
          "pt-BR": {
            singular: "Confirme seu endereço de e-mail para enviar um e-mail de teste"
          },
          "zh-CN": {
            singular: "验证您的电子邮件地址，发送测试电子邮件"
          }
        }
      }),
      VimeoLink: (0, _v46.translate)({
        singular: "Vimeo link (default)",
        dictionary: {
          es: {
            singular: "Enlace de Vimeo (predeterminado)"
          },
          "de-DE": {
            singular: "Vimeo-Link (Standard)"
          },
          "fr-FR": {
            singular: "Lien Vimeo (par défaut)"
          },
          "ja-JP": {
            singular: "Vimeoリンク（デフォルト）"
          },
          "ko-KR": {
            singular: "Vimeo 링크 (기본)"
          },
          "pt-BR": {
            singular: "Link do Vimeo (padrão)"
          },
          "zh-CN": {
            singular: "Vimeo 链接（默认）"
          }
        }
      }),
      WatchNow: (0, _v46.translate)({
        singular: "Watch now",
        dictionary: {
          es: {
            singular: "Ver ahora"
          },
          "de-DE": {
            singular: "Anschauen"
          },
          "fr-FR": {
            singular: "Regarder"
          },
          "ja-JP": {
            singular: "今すぐ再生"
          },
          "ko-KR": {
            singular: "지금 시청하기"
          },
          "pt-BR": {
            singular: "Assistir agora"
          },
          "zh-CN": {
            singular: "立即观看"
          }
        }
      })
    },
    _v52 = {
      from: _v51.From,
      reply_email: _v51.FooterReplayMail,
      sender_policy_url: _v51.FooterPolicyLink,
      sender_address: _v51.FooterCompanyAddress,
      header: (0, _v46.translate)({
        singular: "Title",
        dictionary: {
          es: {
            singular: "Título"
          },
          "de-DE": {
            singular: "Titel"
          },
          "fr-FR": {
            singular: "Titre"
          },
          "ja-JP": {
            singular: "タイトル"
          },
          "ko-KR": {
            singular: "제목"
          },
          "pt-BR": {
            singular: "Título"
          },
          "zh-CN": {
            singular: "标题"
          }
        }
      }),
      body: (0, _v46.translate)({
        singular: "Description",
        dictionary: {
          es: {
            singular: "Descripción"
          },
          "de-DE": {
            singular: "Beschreibung"
          },
          "ja-JP": {
            singular: "説明"
          },
          "ko-KR": {
            singular: "설명"
          },
          "pt-BR": {
            singular: "Descrição"
          },
          "zh-CN": {
            singular: "描述"
          }
        }
      }),
      subject: _v51.SubjectGeneral,
      button_text: _v51.Button,
      button_link: _v51.Button
    },
    _v53 = {
      0: (0, _v46.translate)({
        singular: "Your message was detected as spam. Please try again with different text.",
        dictionary: {
          es: {
            singular: "Tu mensaje se detectó como correo no deseado. Cambia el texto y vuelve a intentarlo."
          },
          "de-DE": {
            singular: "Deine Nachricht wurde als Spam erkannt. Bitte versuche es erneut mit einem anderen Text."
          },
          "fr-FR": {
            singular: "Votre message a été identifié comme spam. Veuillez réessayer avec un autre texte."
          },
          "ja-JP": {
            singular: "あなたのメッセージはスパムとして検出されました。別のテキストでもう一度お試しください。"
          },
          "ko-KR": {
            singular: "회원님의 메시지가 스팸으로 감지되었습니다. 텍스트를 바꾸고 다시 시도해주세요."
          },
          "pt-BR": {
            singular: "Sua mensagem foi detectada como spam. Tente novamente com outro texto."
          },
          "zh-CN": {
            singular: "您的消息被检测为垃圾邮件。请使用不同文本重试。"
          }
        }
      }),
      0: _v51.InvalidInput,
      0: _v51.InvalidURL,
      0: _v51.InvalidEmailAddress,
      0: _v51.InvalidEmailAddress
    },
    _v54 = {
      [_v51.EntityTitle]: {
        label: [_v51.EntityTitle],
        value: "Entity.title"
      },
      [_v51.TeamName]: {
        label: [_v51.TeamName],
        value: "Team.name"
      },
      "First name": {
        label: [_v51.FirstName],
        value: "regForm.first_name"
      },
      "Last name": {
        label: [_v51.LastName],
        value: "regForm.last_name"
      }
    };
  _v0.s(["DYNAMIC_TAGS_MAP", 0, _v54, "ERROR_CODE", 0, _v53, "ERROR_EMAIL_FIELD_MAPPING", 0, _v52, "default", 0, _v51], 0);
  var _v55 = _v0.i(0);
  let _v56 = ["headerTextSize", "headerTextAlign", "headerTextStyle", "headerTextFormat", "headerTextColor", "bodyTextSize", "bodyTextAlign", "bodyTextStyle", "bodyTextFormat", "bodyTextColor"],
    _v57 = _v0 => {
      if (!_v0) return "";
      let _v1 = _v0;
      return Object.keys(_v54).map(_v0 => {
        _v1 = _v1?.replaceAll(`{{${_v54[_v0].label}}}`, `{{${_v54[_v0].value}}}`);
      }), _v1;
    },
    _v58 = _v0 => {
      if (!_v0) return "";
      let _v1 = _v0;
      return Object.keys(_v54).map(_v0 => {
        _v1 = _v1?.replaceAll(`{{${_v54[_v0].value}}}`, `{{${_v54[_v0].label}}}`);
      }), _v1;
    },
    _v59 = _v0 => {
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
        } = _v45.EMAIL_TYPES,
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
    _v60 = ["body", "header", "subject", "buttonInfo", "showCalender"],
    _v61 = (_v0, _v1) => null == _v0 && null == _v1 || void 0,
    _v62 = (_v0, _v1, _v2 = !0) => {
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
      for (let _v0 in _v0) if (_v5(_v0)) continue;else _v6(_v0) ? _v3.push(_v0) : _v8(_v0) ? (0, _v55.default)(_v0[_v0], _v1[_v0], _v7) || (_v56.includes(_v0) ? _v4.push(_v0) : _v3.push(_v0)) : _v0[_v0] !== _v1[_v0] && _v3.push(_v0);
      return {
        changedProps: _v3,
        bpChangedProps: [..._v3, ..._v4]
      };
    },
    _v63 = {
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
    _v64 = {
      [_v63.SET_COLOR]: "accentColor",
      [_v63.SET_FROM]: "from",
      [_v63.SET_EMAIL_TOOL_BAR]: "emailToolbar",
      [_v63.EMAIL_TEMPLATE_TYPE]: "emailTemplateType",
      [_v63.SET_PREVIEW]: "previewMode",
      [_v63.SET_FOOTER_EMAIL]: "replyEmail",
      [_v63.SET_FOOTER_ADDRESS]: "senderAddress",
      [_v63.SET_FOOTER_POLICY]: "senderPolicyUrl",
      [_v63.SET_IS_CONTENT_MODIFIED]: "isContentModified",
      [_v63.SET_SUBJECT]: "subject",
      [_v63.SET_HEADER]: "header",
      [_v63.SET_BODY]: "body",
      [_v63.SET_HEADER_TEXT_SIZE]: "headerTextSize",
      [_v63.SET_HEADER_TEXT_STYLE]: "headerTextStyle",
      [_v63.SET_HEADER_TEXT_ALIGN]: "headerTextAlign",
      [_v63.SET_HEADER_TEXT_FORMAT]: "headerTextFormat",
      [_v63.SET_HEADER_TEXT_COLOR]: "headerTextColor",
      [_v63.SET_BODY_TEXT_SIZE]: "bodyTextSize",
      [_v63.SET_BODY_TEXT_STYLE]: "bodyTextStyle",
      [_v63.SET_BODY_TEXT_ALIGN]: "bodyTextAlign",
      [_v63.SET_BODY_TEXT_FORMAT]: "bodyTextFormat",
      [_v63.SET_BODY_TEXT_COLOR]: "bodyTextColor"
    };
  _v0.s(["ACTION_TYPE", 0, _v63, "EMAIL_SETTER_TYPES", 0, _v64], 0);
  let _v65 = {
      showCalender: {
        [_v45.EMAIL_TYPES.CONFIRMATION]: !0,
        [_v45.EMAIL_TYPES.REMINDER]: !0,
        [_v45.EMAIL_TYPES.FOLLOWUP]: !1
      },
      buttonInfo: {
        [_v45.EMAIL_TYPES.CONFIRMATION]: {
          text: _v51.JoinEvent,
          customLink: "",
          isCustomLink: !1
        },
        [_v45.EMAIL_TYPES.REMINDER]: {
          text: _v51.JoinEvent,
          customLink: "",
          isCustomLink: !1
        },
        [_v45.EMAIL_TYPES.FOLLOWUP]: {
          text: _v51.WatchNow,
          customLink: "",
          isCustomLink: !1
        }
      },
      subject: {
        [_v45.EMAIL_TYPES.CONFIRMATION]: "",
        [_v45.EMAIL_TYPES.FOLLOWUP]: "",
        [_v45.EMAIL_TYPES.REMINDER]: ""
      },
      header: {
        [_v45.EMAIL_TYPES.CONFIRMATION]: "",
        [_v45.EMAIL_TYPES.FOLLOWUP]: "",
        [_v45.EMAIL_TYPES.REMINDER]: ""
      },
      body: {
        [_v45.EMAIL_TYPES.CONFIRMATION]: "",
        [_v45.EMAIL_TYPES.FOLLOWUP]: "",
        [_v45.EMAIL_TYPES.REMINDER]: ""
      },
      isContentModified: {
        [_v45.EMAIL_TYPES.CONFIRMATION]: !1,
        [_v45.EMAIL_TYPES.FOLLOWUP]: !1,
        [_v45.EMAIL_TYPES.REMINDER]: !1
      },
      headerTextSize: {
        [_v45.EMAIL_TYPES.CONFIRMATION]: "",
        [_v45.EMAIL_TYPES.FOLLOWUP]: "",
        [_v45.EMAIL_TYPES.REMINDER]: ""
      },
      headerTextStyle: {
        [_v45.EMAIL_TYPES.CONFIRMATION]: "",
        [_v45.EMAIL_TYPES.FOLLOWUP]: "",
        [_v45.EMAIL_TYPES.REMINDER]: ""
      },
      headerTextAlign: {
        [_v45.EMAIL_TYPES.CONFIRMATION]: "",
        [_v45.EMAIL_TYPES.FOLLOWUP]: "",
        [_v45.EMAIL_TYPES.REMINDER]: ""
      },
      headerTextFormat: {
        [_v45.EMAIL_TYPES.CONFIRMATION]: "",
        [_v45.EMAIL_TYPES.FOLLOWUP]: "",
        [_v45.EMAIL_TYPES.REMINDER]: ""
      },
      headerTextColor: {
        [_v45.EMAIL_TYPES.CONFIRMATION]: "",
        [_v45.EMAIL_TYPES.FOLLOWUP]: "",
        [_v45.EMAIL_TYPES.REMINDER]: ""
      },
      bodyTextSize: {
        [_v45.EMAIL_TYPES.CONFIRMATION]: "",
        [_v45.EMAIL_TYPES.FOLLOWUP]: "",
        [_v45.EMAIL_TYPES.REMINDER]: ""
      },
      bodyTextStyle: {
        [_v45.EMAIL_TYPES.CONFIRMATION]: "",
        [_v45.EMAIL_TYPES.FOLLOWUP]: "",
        [_v45.EMAIL_TYPES.REMINDER]: ""
      },
      bodyTextAlign: {
        [_v45.EMAIL_TYPES.CONFIRMATION]: "",
        [_v45.EMAIL_TYPES.FOLLOWUP]: "",
        [_v45.EMAIL_TYPES.REMINDER]: ""
      },
      bodyTextFormat: {
        [_v45.EMAIL_TYPES.CONFIRMATION]: "",
        [_v45.EMAIL_TYPES.FOLLOWUP]: "",
        [_v45.EMAIL_TYPES.REMINDER]: ""
      },
      bodyTextColor: {
        [_v45.EMAIL_TYPES.CONFIRMATION]: "",
        [_v45.EMAIL_TYPES.FOLLOWUP]: "",
        [_v45.EMAIL_TYPES.REMINDER]: ""
      }
    },
    _v66 = {
      ..._v65,
      reminders: [],
      accentColor: "#00adef",
      from: "",
      emailToolbar: _v45.EMAIL_TOOLBAR_TYPES.GENERAL,
      emailTemplateType: _v45.EMAIL_TYPES.CONFIRMATION,
      selectedReminderId: "",
      previewMode: _v45.EMAIL_PREVIEW_MODE.WEB,
      useReplyEmail: !1,
      useSenderAddress: !1,
      useSenderPolicyUrl: !1,
      replyEmail: "",
      senderAddress: "",
      senderPolicyUrl: "",
      defaultConfig: _v65,
      hasApiData: !1,
      isLastActionReset: !1
    },
    _v67 = [_v45.EMAIL_TYPES.CONFIRMATION, _v45.EMAIL_TYPES.FOLLOWUP],
    _v68 = _v0 => _v67.includes(_v0) ? _v0 : _v45.EMAIL_TYPES.REMINDER,
    _v69 = (_v0, _v1) => {
      let _v2 = {
        ..._v0
      };
      return delete _v2[_v1], _v2;
    };
  function _v70(_v0, _v1) {
    switch (_v1.type !== _v63.SET_IS_CONTENT_MODIFIED && (_v0 = {
      ..._v0,
      isLastActionReset: _v1.type === _v63.RESET
    }), _v1.type) {
      case _v63.SET_STATE:
        return {
          ..._v0,
          ..._v1.payload
        };
      case _v63.RESET:
        let _v0 = _v1.payload,
          _v1 = _v68(_v0),
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
        return (_v1 === _v45.EMAIL_TYPES.CONFIRMATION || _v1 === _v45.EMAIL_TYPES.REMINDER) && (_v2.showCalender = {
          ..._v0.showCalender,
          [_v0]: _v0.defaultConfig.showCalender[_v1]
        }), _v56.forEach(_v0 => {
          _v0[_v0] && (_v2[_v0] = {
            ...(_v0[_v0] || {}),
            [_v0]: ""
          });
        }), {
          ..._v0,
          ..._v2
        };
      case _v63.SET_CALENDER:
        return {
          ..._v0,
          showCalender: {
            ..._v0.showCalender,
            [_v1.payload]: !_v0.showCalender[_v1.payload]
          }
        };
      case _v63.SET_CUSTOM_LOGO_IMAGE:
        return {
          ..._v0,
          customLogo: {
            ..._v0.customLogo,
            ..._v1.payload
          }
        };
      case _v63.TOGGLE_SETTING_EMAIL:
        return {
          ..._v0,
          [_v1.payload]: !_v0[_v1.payload]
        };
      case _v63.TOGGLE_REMINDER:
        return {
          ..._v0,
          reminders: _v0.reminders.map(_v0 => _v0.id === _v1.payload ? {
            ..._v0,
            enabled: !_v0.enabled
          } : _v0)
        };
      case _v63.SELECT_REMINDER:
        return {
          ..._v0,
          emailTemplateType: _v45.EMAIL_TYPES.REMINDER,
          selectedReminderId: _v1.payload
        };
      case _v63.ADD_REMINDER:
        return {
          ..._v0,
          reminders: [..._v0.reminders, {
            id: _v1.payload.id,
            offset: _v1.payload.offset,
            enabled: !0
          }],
          emailTemplateType: _v45.EMAIL_TYPES.REMINDER,
          selectedReminderId: _v1.payload.id,
          ...((_v0, _v1) => {
            let {
                REMINDER: _v2
              } = _v45.EMAIL_TYPES,
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
            return _v56.forEach(_v0 => {
              let _v1 = _v0[_v0];
              _v1 && (_v4[_v0] = {
                ..._v1,
                [_v1]: ""
              });
            }), _v4;
          })(_v0, _v1.payload.id)
        };
      case _v63.DELETE_REMINDER:
        {
          var _v2, _v3;
          let _v0,
            _v1 = _v0.reminders.filter(_v0 => _v0.id !== _v1.payload),
            _v2 = _v0.selectedReminderId === _v1.payload ? _v1[0]?.id ?? "" : _v0.selectedReminderId,
            _v3 = 0 === _v1.length && _v0.emailTemplateType === _v45.EMAIL_TYPES.REMINDER ? _v45.EMAIL_TYPES.CONFIRMATION : _v0.emailTemplateType;
          return {
            ..._v0,
            reminders: _v1,
            selectedReminderId: _v2,
            emailTemplateType: _v3,
            ...(_v2 = _v0, _v3 = _v1.payload, _v0 = {
              subject: _v69(_v2.subject, _v3),
              header: _v69(_v2.header, _v3),
              body: _v69(_v2.body, _v3),
              showCalender: _v69(_v2.showCalender, _v3),
              buttonInfo: _v69(_v2.buttonInfo, _v3),
              isContentModified: _v69(_v2.isContentModified || {}, _v3)
            }, _v56.forEach(_v0 => {
              let _v1 = _v2[_v0];
              _v1 && (_v0[_v0] = _v69(_v1, _v3));
            }), _v0)
          };
        }
      case _v63.UPDATE_REMINDER_OFFSET:
        return {
          ..._v0,
          reminders: _v0.reminders.map(_v0 => _v0.id === _v1.payload.id ? {
            ..._v0,
            offset: _v1.payload.offset
          } : _v0)
        };
      case _v63.SET_BUTTON_INFO:
        return {
          ..._v0,
          buttonInfo: {
            ..._v0.buttonInfo,
            [_v1.payload.emailTab]: _v1.payload.info
          }
        };
      case _v63.SET_SUBJECT:
      case _v63.SET_HEADER:
      case _v63.SET_BODY:
      case _v63.SET_HEADER_TEXT_SIZE:
      case _v63.SET_HEADER_TEXT_STYLE:
      case _v63.SET_HEADER_TEXT_ALIGN:
      case _v63.SET_HEADER_TEXT_FORMAT:
      case _v63.SET_HEADER_TEXT_COLOR:
      case _v63.SET_BODY_TEXT_SIZE:
      case _v63.SET_BODY_TEXT_STYLE:
      case _v63.SET_BODY_TEXT_ALIGN:
      case _v63.SET_BODY_TEXT_FORMAT:
      case _v63.SET_BODY_TEXT_COLOR:
        let _v3 = _v64[_v1.type];
        return {
          ..._v0,
          [_v3]: {
            ..._v0[_v3],
            [_v1.payload.emailTab]: _v1.payload.text
          }
        };
      case _v63.SET_EMAIL_TOOL_BAR:
      case _v63.EMAIL_TEMPLATE_TYPE:
      case _v63.SET_PREVIEW:
      case _v63.SET_COLOR:
      case _v63.SET_FROM:
      case _v63.SET_CONFIRMATION_TITLE:
      case _v63.SET_CONFIRMATION_BODY:
      case _v63.SET_REMINDER_TITLE:
      case _v63.SET_REMINDER_BODY:
      case _v63.SET_FOLLOWUP_TITLE:
      case _v63.SET_FOLLOWUP_BODY:
      case _v63.SET_FOOTER_EMAIL:
      case _v63.SET_FOOTER_ADDRESS:
      case _v63.SET_FOOTER_POLICY:
      case _v63.SET_IS_CONTENT_MODIFIED:
        return {
          ..._v0,
          [_v64[_v1.type]]: _v1.payload
        };
      default:
        return _v0;
    }
  }
  let _v71 = async (_v0, _v1) => await fetch(_v0, {
      method: "PUT",
      body: _v1,
      headers: {
        "Content-Type": _v1.type
      }
    }),
    _v72 = _v0 => {
      let _v1 = _v0?.sizes?.length ?? 0;
      return {
        url: _v0?.sizes?.[_v1 - 1]?.link,
        id: _v0?.uri?.split("/").pop() || "",
        active: !0,
        response: _v0
      };
    };
  _v0.s(["findLogoIndex", 0, (_v0 = [], _v1) => _v0.findIndex(({
    uri: _v0
  }) => {
    let _v1 = (0, _v7.getLastIdFromUri)(_v0);
    return _v1 && _v1?.includes(_v1.toString());
  }), "getCustomLogoImagePayload", 0, _v72, "putFileUpload", 0, _v71], 0);
  let _v73 = (0, _v1.createContext)({
    state: _v66,
    dispatch: () => console.error("dispatch not initialized"),
    isReminderSaved: () => !0,
    isManualSaveRequired: !1
  });
  _v0.s(["EmailContext", 0, _v73, "default", 0, ({
    children: _v0,
    onSaveStateChange: _v1
  }) => {
    let [_v2, _v3] = (0, _v1.useReducer)(_v70, {
        ..._v66
      }),
      [_v4, {
        loading: _v5,
        data: _v6
      }] = (0, _v4.useGetUserLiveEventEmailSettingsLazy)(),
      _v7 = (0, _v43.useConfigStore)(_v0 => _v0.entityType),
      _v8 = (0, _v43.useConfigStore)(_v0 => _v0.entityId),
      {
        user: _v9
      } = (0, _v9.useEntityStore)(),
      {
        teamName: _v10,
        accentColor: _v11,
        isLoading: _v12
      } = _v14(),
      {
        settings: _v13
      } = (0, _v8.useOrionSettings)(),
      _v14 = _v13.enable_configurable_event_reminders,
      _v15 = _v13.enable_explicit_registration_save,
      _v16 = _v5 || _v12,
      _v17 = (0, _v1.useMemo)(() => {
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
          _v13 = (_v14 ? _v9 : _v9.slice(0, 1)).map(_v0 => ({
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
            key: _v45.EMAIL_TYPES.CONFIRMATION,
            data: _v11
          }, {
            key: _v45.EMAIL_TYPES.FOLLOWUP,
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
          customLogo: _v72(_v2),
          from: _v3 ?? _v10 ?? _v45.VIMEO,
          subject: _v16(_v0 => _v58(_v0.subject)),
          header: _v16(_v0 => _v58(_v0.header)),
          body: _v16(_v0 => _v58(_v0.body)),
          showCalender: _v16(_v0 => !!_v0.useCalender),
          buttonInfo: _v16(_v0 => ({
            text: _v0.buttonText,
            customLink: _v0.buttonLink,
            isCustomLink: !!_v0.useCustomLink
          })),
          defaultConfig: {
            showCalender: {
              [_v45.EMAIL_TYPES.CONFIRMATION]: !!_v4.default.useCalender,
              [_v45.EMAIL_TYPES.REMINDER]: !!_v10.useCalender,
              [_v45.EMAIL_TYPES.FOLLOWUP]: !!_v5.default.useCalender
            },
            buttonInfo: {
              [_v45.EMAIL_TYPES.CONFIRMATION]: {
                text: _v4.default.buttonText,
                customLink: _v4.default.buttonLink,
                isCustomLink: !!_v4.default.useCustomLink
              },
              [_v45.EMAIL_TYPES.REMINDER]: {
                text: _v10.buttonText,
                customLink: _v10.buttonLink,
                isCustomLink: !!_v10.useCustomLink
              },
              [_v45.EMAIL_TYPES.FOLLOWUP]: {
                text: _v5.default.buttonText,
                customLink: _v5.default.buttonLink,
                isCustomLink: !!_v5.default.useCustomLink
              }
            },
            subject: {
              [_v45.EMAIL_TYPES.CONFIRMATION]: _v58(_v4.default.subject),
              [_v45.EMAIL_TYPES.REMINDER]: _v58(_v10.subject),
              [_v45.EMAIL_TYPES.FOLLOWUP]: _v58(_v5.default.subject)
            },
            header: {
              [_v45.EMAIL_TYPES.CONFIRMATION]: _v58(_v4.default.header),
              [_v45.EMAIL_TYPES.REMINDER]: _v58(_v10.header),
              [_v45.EMAIL_TYPES.FOLLOWUP]: _v58(_v5.default.header)
            },
            body: {
              [_v45.EMAIL_TYPES.CONFIRMATION]: _v58(_v4.default.body),
              [_v45.EMAIL_TYPES.REMINDER]: _v58(_v10.body),
              [_v45.EMAIL_TYPES.FOLLOWUP]: _v58(_v5.default.body)
            }
          }
        };
      }, [_v11, _v12, _v10, _v6, _v14]),
      _v18 = (0, _v1.useCallback)(() => {
        let _v0 = _v9?.uri,
          _v1 = (0, _v7.getUserIdFromUri)(_v0);
        _v1 && _v8 && (_v7 === _v6.ENTITY_TYPE.EVENT ? _v4({
          where: {
            userId: _v1,
            liveEventId: parseInt(_v8)
          },
          select: _v45.EMAIL_CUSTOMIZATION_FIELDS
        }) : console.error(`Entity type ${_v7} not supported EM1`));
      }, [_v8, _v9?.uri, _v7, _v4]),
      {
        isReminderSaved: _v19,
        isDirty: _v20,
        isSaving: _v21,
        save: _v22
      } = ((_v0, _v1, _v2, _v3 = !1) => {
        let [_v4, _v5] = (0, _v1.useState)(_v0),
          [_v6, _v7] = (0, _v1.useState)(!1),
          {
            user: _v8,
            privacy: _v9
          } = (0, _v9.useEntityStore)();
        (0, _v43.useConfigStore)(_v0 => _v0.entityType);
        let _v10 = (0, _v43.useConfigStore)(_v0 => _v0.entityId),
          _v11 = (0, _v43.useConfigStore)(_v0 => _v0.onAutoSave),
          [_v12, {
            data: _v13,
            loading: _v14,
            error: _v15
          }] = (0, _v4.usePatchUserLiveEventEmailSettings)(),
          [_v16] = _v24(),
          _v17 = (0, _v1.useRef)(null),
          _v18 = (0, _v16.useToast)(),
          {
            sentRegistrationEmailLayoutChangeEvent: _v19
          } = _v44(),
          _v20 = async _v0 => {
            let {
              changedProps: _v1,
              bpChangedProps: _v2
            } = _v62(_v4, _v0);
            if (_v1.length > 0 && !_v6 && !_v17.current && _v4.hasApiData && _v8 && _v10 && !1 === _v2) {
              _v7(!0), _v11?.(!0);
              let _v0 = (0, _v7.getUserIdFromUri)(_v8.uri),
                _v1 = parseInt(_v10 || "0");
              _v17.current = _v0;
              try {
                await Promise.all(_v4.reminders.filter(_v0 => _v0.id !== _v45.LEGACY_REMINDER_ID && !_v0.reminders.some(_v0 => _v0.id === _v0.id)).map(_v0 => _v0.id).map(_v0 => _v16({
                  where: {
                    userId: _v0,
                    liveEventId: _v1,
                    reminderId: _v0
                  }
                })));
              } catch {
                _v17.current = null, _v7(!1), _v11?.(!1), _v18({
                  title: _v51.ChangesCouldNotBeSaved,
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
                      _v1 = void 0 === _v0 || _v0.enabled !== _v0.enabled || !(0, _v55.default)(_v0.offset, _v0.offset, _v61),
                      _v2 = _v60.some(_v0 => !(0, _v55.default)(_v0[_v0]?.[_v0.id], _v1[_v0]?.[_v0.id], _v61));
                    (_v1 || _v2) && _v2.add(_v0.id);
                  }
                  return _v2;
                })(_v4, _v0),
                _v3 = ((_v0, _v1, _v2) => {
                  let {
                      confirmation: _v3,
                      reminders: _v4,
                      followUp: _v5,
                      accentColor: _v6,
                      from: _v7,
                      subject: _v8,
                      customLogo: _v9,
                      buttonInfo: _v10,
                      header: _v11,
                      body: _v12,
                      showCalender: _v13,
                      useReplyEmail: _v14,
                      useSenderAddress: _v15,
                      useSenderPolicyUrl: _v16,
                      replyEmail: _v17,
                      senderAddress: _v18,
                      senderPolicyUrl: _v19
                    } = _v0,
                    _v20 = (void 0 === _v2 ? _v4 : _v4.filter(_v0 => _v2.has(_v0.id))).map(_v0 => {
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
                          body: _v57(_v12[_v1 = _v0.id]),
                          buttonLink: _v10[_v1].customLink,
                          buttonText: _v10[_v1].text,
                          useCustomLink: _v10[_v1].isCustomLink,
                          header: _v57(_v11[_v1]),
                          subject: _v57(_v8[_v1]),
                          useCalender: _v13[_v1]
                        }
                      };
                    });
                  return {
                    ...(_v20.length > 0 || void 0 === _v2 ? {
                      emailReminders: _v20
                    } : {}),
                    from: _v7 || _v1 || _v45.VIMEO,
                    pictures: _v9?.response,
                    logoUri: _v9?.response?.uri || "",
                    accentColor: _v6,
                    emailPreferences: {
                      emailRegistrationConfirmation: _v3,
                      emailPostEventThankYou: _v5
                    },
                    replyEmail: _v17,
                    senderAddress: _v18,
                    senderPolicyUrl: _v19,
                    useReplyEmail: _v14,
                    useSenderAddress: _v15,
                    useSenderPolicyUrl: _v16,
                    emailRegistrationConfirmation: {
                      body: _v57(_v12.CONFIRMATION),
                      buttonLink: _v10.CONFIRMATION.customLink,
                      buttonText: _v10.CONFIRMATION.text,
                      useCustomLink: _v10.CONFIRMATION.isCustomLink,
                      header: _v57(_v11.CONFIRMATION),
                      subject: _v57(_v8.CONFIRMATION),
                      useCalender: _v13.CONFIRMATION
                    },
                    emailPostEventThankYou: {
                      body: _v57(_v12.FOLLOWUP),
                      buttonLink: _v10.FOLLOWUP.customLink,
                      buttonText: _v10.FOLLOWUP.text,
                      useCustomLink: _v10.FOLLOWUP.isCustomLink,
                      header: _v57(_v11.FOLLOWUP),
                      subject: _v57(_v8.FOLLOWUP)
                    }
                  };
                })(_v0, _v1, _v2);
              _v12({
                where: {
                  userId: _v0,
                  liveEventId: _v1
                },
                select: _v45.EMAIL_CUSTOMIZATION_FIELDS,
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
                    })(_v0, _v1, _v59),
                    previewType: _v35[_v1.previewMode]
                  },
                  _v3 = {
                    subject: _v38.CHANGE_SUBJECT,
                    headerText: _v38.HEADING_TEXT_CHANGED,
                    headerTextSize: _v38.HEADING_SIZE_CHANGED,
                    headerTextColor: _v38.HEADING_COLOR_CHANGED,
                    headerTextAlign: _v38.HEADING_FORMAT_CHANGED,
                    bodyText: _v38.BODY_TEXT_CHANGED,
                    bodyTextSize: _v38.BODY_SIZE_CHANGED,
                    bodyTextColor: _v38.BODY_COLOR_CHANGED,
                    bodyTextAlign: _v38.BODY_FORMAT_CHANGED,
                    buttonText: _v38.BUTTON_TEXT_CHANGED,
                    buttonLink: _v38.BUTTON_CUSTOM_LINK_CHANGED
                  },
                  _v4 = {
                    confirmationParametersChanged: _v39.CONFIRMATION,
                    reminderParametersChanged: _v39.REMINDER,
                    followupParametersChanged: _v39.FOLLOWUP
                  };
                ["confirmationParametersChanged", "reminderParametersChanged", "followupParametersChanged"].forEach(_v0 => {
                  _v2[_v0].forEach(_v0 => {
                    let _v1 = _v3[_v0],
                      _v2 = _v4[_v0];
                    if (_v1 && _v2) {
                      let _v0,
                        _v1,
                        _v2,
                        _v3 = _v1 === _v38.HEADING_TEXT_CHANGED || _v1 === _v38.BODY_TEXT_CHANGED,
                        _v4 = _v3 && (_v0 = _v1 === _v38.HEADING_TEXT_CHANGED ? "header" : "body", _v2 = (_v1 = _v2.toUpperCase()) === _v45.EMAIL_TYPES.REMINDER ? _v1.selectedReminderId : _v1, (0, _v7.htmlToText)(_v0[_v0][_v2]) !== (0, _v7.htmlToText)(_v1[_v0][_v2]));
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
          _v24 = (0, _v1.useCallback)((0, _v15.default)(_v0 => {
            _v21.current(_v0);
          }, _v45.EMAIL_AUTO_SAVE_DEBOUNCED_INTERVAL), []);
        return (0, _v1.useEffect)(() => {
          !_v3 && _v0 && _v24(_v0);
        }, [_v0, _v24, _v3]), (0, _v1.useEffect)(() => {
          let _v0 = !!_v13 || !!_v15;
          if (_v14 || !_v0 || !_v17.current) return;
          let _v1 = _v17.current;
          if (_v17.current = null, _v7(!1), _v11?.(!1), _v15) return;
          _v5(_v1), _v3 || _v18({
            id: "auto-save-toast",
            title: _v51.ChangesSaved,
            status: "success",
            duration: 0
          });
          let {
            changedProps: _v2
          } = _v62(_v1, _v0);
          !_v3 && _v2.length > 0 && _v24(_v0);
        }, [_v14, _v13, _v15]), (0, _v1.useEffect)(() => {
          _v15 && !_v14 && _v15?.res?.json().then(_v0 => {
            let _v1 = (0, _v17.deepCamelCase)(_v0);
            if (_v1?.errorCode) {
              let _v0 = _v53[_v1.errorCode],
                _v1 = _v52[_v1.invalidParameters?.[0]?.field];
              _v18({
                title: _v1 && _v0 ? `${_v51.ChangesCouldNotBeSaved} ${_v1} - ${_v0}` : _v51.ChangesCouldNotBeSaved,
                status: "error",
                duration: 0
              });
            }
          });
        }, [_v14, _v15]), (0, _v1.useEffect)(() => {
          _v4.hasApiData || _v5(_v0);
        }, [_v0, _v4.hasApiData]), {
          isReminderSaved: _v0 => _v4.reminders.some(_v0 => _v0.id === _v0),
          isDirty: _v62(_v4, _v0).changedProps.length > 0,
          isSaving: _v6,
          save: _v23
        };
      })(_v2, _v10 || _v45.VIMEO, _v16, _v15);
    return ((0, _v1.useEffect)(() => {
      _v1?.({
        isDirty: _v20,
        isSaving: _v21,
        save: _v22
      });
    }, [_v20, _v21, _v1, _v22]), (0, _v1.useEffect)(() => () => _v1?.(null), [_v1]), (0, _v1.useEffect)(() => {
      _v6 || _v18();
    }, [_v18]), (0, _v1.useEffect)(() => {
      _v17 && _v3({
        type: _v63.SET_STATE,
        payload: _v17
      });
    }, [_v17]), !_v6 || (0, _v3.default)(_v6)) ? (0, _v2.jsx)(_v5.FullScreenLoader, {}) : (0, _v2.jsx)(_v73.Provider, {
      value: {
        state: _v2,
        dispatch: _v3,
        isLoading: _v16,
        getEmailData: _v18,
        isReminderSaved: _v19,
        isManualSaveRequired: _v15
      },
      children: _v0
    });
  }], 0);
  let _v74 = {
      UNDO: "UNDO",
      REDO: "REDO",
      SET: "SET",
      RESET: "RESET"
    },
    _v75 = {
      past: [],
      present: {},
      future: [],
      canUndo: !1,
      canRedo: !1
    },
    _v76 = (_v0, _v1) => {
      let {
        past: _v2,
        present: _v3,
        future: _v4,
        canUndo: _v5,
        canRedo: _v6
      } = _v0;
      switch (_v1.type) {
        case _v74.UNDO:
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
        case _v74.REDO:
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
        case _v74.SET:
          let {
              payload: _v0
            } = _v1,
            {
              changedProps: _v1
            } = _v62(_v0, _v3, !1);
          if (0 === _v1.length) return _v0;
          return {
            ..._v0,
            past: [..._v2, _v3],
            present: _v0,
            canUndo: !0,
            canRedo: !1,
            future: []
          };
        case _v74.RESET:
          return {
            ..._v75,
            present: _v1.payload
          };
      }
    },
    _v77 = _v0 => {
      let [_v1, _v2] = (0, _v1.useReducer)(_v76, {
        ..._v75,
        present: _v0
      });
      return [{
        ..._v1.present,
        canUndo: _v1.canUndo,
        canRedo: _v1.canRedo
      }, _v2];
    };
  _v0.s(["ACTION_TYPE", 0, _v74, "default", 0, _v77], 0);
  let _v78 = (0, _v1.createContext)({
    state: {},
    dispatch: () => console.error("dispatch not initialized"),
    undoRedoDispatch: () => console.error("undo/redo dispatch not initialized")
  });
  _v0.s(["UndoRedoContext", 0, _v78, "UndoRedoContextProvider", 0, ({
    children: _v0
  }) => {
    let {
        state: _v1,
        dispatch: _v2
      } = (0, _v1.useContext)(_v73),
      [_v3, _v4] = _v77(_v1),
      [_v5, _v6] = (0, _v1.useState)(!1),
      _v7 = (0, _v1.useCallback)((0, _v15.default)(_v0 => {
        _v4({
          type: _v74.SET,
          payload: _v0
        });
      }, _v45.EMAIL_UNDO_REDO_DEBOUNCED_INTERVAL), [_v4]);
    (0, _v1.useEffect)(() => {
      if (_v5) {
        let {
          changedProps: _v0
        } = _v62(_v1, _v3, !1);
        _v0.length > 0 && _v2({
          type: _v63.SET_STATE,
          payload: _v3
        });
      }
    }, [_v3, _v5, _v1, _v2]), (0, _v1.useEffect)(() => {
      _v1.hasApiData && _v4({
        type: _v74.RESET,
        payload: _v1
      });
    }, [_v4, _v1.hasApiData]), (0, _v1.useEffect)(() => {
      if (!_v5) {
        let {
          changedProps: _v0
        } = _v62(_v1, _v3, !1);
        _v0.length > 0 && _v7(_v1);
      }
    }, [_v1, _v5, _v7, _v3]), (0, _v1.useEffect)(() => {
      let {
        changedProps: _v0
      } = _v62(_v1, _v3, !1);
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
        _v8 = _v68(_v0);
      return _v2[_v0] !== _v7.subject[_v8] || _v5[_v0].text !== _v7.buttonInfo[_v8].text || _v5[_v0].isCustomLink || _v3[_v0] !== _v7.header[_v8] || _v4[_v0] !== _v7.body[_v8] || (_v8 === _v45.EMAIL_TYPES.CONFIRMATION || _v8 === _v45.EMAIL_TYPES.REMINDER) && _v6[_v0] !== _v7.showCalender[_v8];
    }, [_v1.buttonInfo, _v1.subject, _v1.header, _v1.body, _v1.showCalender]);
    return (0, _v1.useEffect)(() => {
      let _v0 = Object.keys(_v1.subject).reduce((_v0, _v1) => (_v0[_v1] = _v8(_v1, _v1), _v0), {});
      _v0 !== _v1.isContentModified && _v2({
        type: _v63.SET_IS_CONTENT_MODIFIED,
        payload: _v0
      });
    }, [_v8]), (0, _v2.jsx)(_v78.Provider, {
      value: {
        state: _v3,
        dispatch: _v4,
        undoRedoDispatch: _v0 => {
          (_v0.type === _v74.REDO || _v0.type === _v74.UNDO) && _v1.hasApiData && _v6(!0), _v4(_v0);
        }
      },
      children: _v0
    });
  }], 0), _v0.s(["useEmailCustomization", 0, function () {
    let {
        state: _v0,
        dispatch: _v1,
        isReminderSaved: _v2,
        isManualSaveRequired: _v3
      } = (0, _v1.useContext)(_v73),
      {
        state: _v4,
        undoRedoDispatch: _v5
      } = (0, _v1.useContext)(_v78);
    return {
      emailState: {
        ..._v0,
        canUndo: _v4.canUndo,
        canRedo: _v4.canRedo
      },
      dispatch: _v1,
      undoRedoDispatch: _v5,
      activeContentKey: _v0.emailTemplateType === _v45.EMAIL_TYPES.REMINDER ? _v0.selectedReminderId : _v0.emailTemplateType,
      isReminderSaved: _v2,
      isManualSaveRequired: _v3
    };
  }], 0);
}