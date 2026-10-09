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
      if (!_v0.ok) throw new _v18.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v18.deepCamelCase)(_v1);
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
  _v0.s(["useDeleteUserLiveEventEmailReminder", 0, _v24], 0);
  var _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0);
  let _v29 = ["headerTextSize", "headerTextAlign", "headerTextStyle", "headerTextFormat", "headerTextColor", "bodyTextSize", "bodyTextAlign", "bodyTextStyle", "bodyTextFormat", "bodyTextColor"],
    _v30 = _v0 => {
      if (!_v0) return "";
      let _v1 = _v0;
      return Object.keys(_v27.DYNAMIC_TAGS_MAP).map(_v0 => {
        _v1 = _v1?.replaceAll(`{{${_v27.DYNAMIC_TAGS_MAP[_v0].label}}}`, `{{${_v27.DYNAMIC_TAGS_MAP[_v0].value}}}`);
      }), _v1;
    },
    _v31 = _v0 => {
      if (!_v0) return "";
      let _v1 = _v0;
      return Object.keys(_v27.DYNAMIC_TAGS_MAP).map(_v0 => {
        _v1 = _v1?.replaceAll(`{{${_v27.DYNAMIC_TAGS_MAP[_v0].value}}}`, `{{${_v27.DYNAMIC_TAGS_MAP[_v0].label}}}`);
      }), _v1;
    },
    _v32 = ["body", "header", "subject", "buttonInfo", "showCalender"],
    _v33 = (_v0, _v1) => null == _v0 && null == _v1 || void 0,
    _v34 = (_v0, _v1, _v2 = !0) => {
      let _v3 = [];
      if (!_v0 || !_v1) return {
        changedProps: _v3
      };
      let _v4 = _v0 => ["canUndo", "canRedo", "hasApiData", "isContentModified"].includes(_v0) || _v2 && ["emailTemplateType", "selectedReminderId", "emailToolbar", "previewMode"].includes(_v0) || "from" === _v0 && 0 === _v1[_v0].length,
        _v5 = _v0 => "customLogo" === _v0 && (_v0.customLogo?.response?.uri !== _v1.customLogo?.response?.uri || _v0.customLogo?.active !== _v1.customLogo?.active),
        _v6 = (_v0, _v1) => null == _v0 && null == _v1 || void 0,
        _v7 = _v0 => "object" == typeof _v0[_v0] || void 0 === _v0[_v0];
      for (let _v0 in _v0) if (_v4(_v0)) continue;else _v5(_v0) ? _v3.push(_v0) : _v7(_v0) ? (0, _v28.default)(_v0[_v0], _v1[_v0], _v6) || _v29.includes(_v0) || _v3.push(_v0) : _v0[_v0] !== _v1[_v0] && _v3.push(_v0);
      return {
        changedProps: _v3
      };
    },
    _v35 = {
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
    _v36 = {
      [_v35.SET_COLOR]: "accentColor",
      [_v35.SET_FROM]: "from",
      [_v35.SET_EMAIL_TOOL_BAR]: "emailToolbar",
      [_v35.EMAIL_TEMPLATE_TYPE]: "emailTemplateType",
      [_v35.SET_PREVIEW]: "previewMode",
      [_v35.SET_FOOTER_EMAIL]: "replyEmail",
      [_v35.SET_FOOTER_ADDRESS]: "senderAddress",
      [_v35.SET_FOOTER_POLICY]: "senderPolicyUrl",
      [_v35.SET_IS_CONTENT_MODIFIED]: "isContentModified",
      [_v35.SET_SUBJECT]: "subject",
      [_v35.SET_HEADER]: "header",
      [_v35.SET_BODY]: "body",
      [_v35.SET_HEADER_TEXT_SIZE]: "headerTextSize",
      [_v35.SET_HEADER_TEXT_STYLE]: "headerTextStyle",
      [_v35.SET_HEADER_TEXT_ALIGN]: "headerTextAlign",
      [_v35.SET_HEADER_TEXT_FORMAT]: "headerTextFormat",
      [_v35.SET_HEADER_TEXT_COLOR]: "headerTextColor",
      [_v35.SET_BODY_TEXT_SIZE]: "bodyTextSize",
      [_v35.SET_BODY_TEXT_STYLE]: "bodyTextStyle",
      [_v35.SET_BODY_TEXT_ALIGN]: "bodyTextAlign",
      [_v35.SET_BODY_TEXT_FORMAT]: "bodyTextFormat",
      [_v35.SET_BODY_TEXT_COLOR]: "bodyTextColor"
    };
  _v0.s(["ACTION_TYPE", 0, _v35, "EMAIL_SETTER_TYPES", 0, _v36], 0);
  let _v37 = {
      showCalender: {
        [_v25.EMAIL_TYPES.CONFIRMATION]: !0,
        [_v25.EMAIL_TYPES.REMINDER]: !0,
        [_v25.EMAIL_TYPES.FOLLOWUP]: !1
      },
      buttonInfo: {
        [_v25.EMAIL_TYPES.CONFIRMATION]: {
          text: _v27.default.JoinEvent,
          customLink: "",
          isCustomLink: !1
        },
        [_v25.EMAIL_TYPES.REMINDER]: {
          text: _v27.default.JoinEvent,
          customLink: "",
          isCustomLink: !1
        },
        [_v25.EMAIL_TYPES.FOLLOWUP]: {
          text: _v27.default.WatchNow,
          customLink: "",
          isCustomLink: !1
        }
      },
      subject: {
        [_v25.EMAIL_TYPES.CONFIRMATION]: "",
        [_v25.EMAIL_TYPES.FOLLOWUP]: "",
        [_v25.EMAIL_TYPES.REMINDER]: ""
      },
      header: {
        [_v25.EMAIL_TYPES.CONFIRMATION]: "",
        [_v25.EMAIL_TYPES.FOLLOWUP]: "",
        [_v25.EMAIL_TYPES.REMINDER]: ""
      },
      body: {
        [_v25.EMAIL_TYPES.CONFIRMATION]: "",
        [_v25.EMAIL_TYPES.FOLLOWUP]: "",
        [_v25.EMAIL_TYPES.REMINDER]: ""
      },
      isContentModified: {
        [_v25.EMAIL_TYPES.CONFIRMATION]: !1,
        [_v25.EMAIL_TYPES.FOLLOWUP]: !1,
        [_v25.EMAIL_TYPES.REMINDER]: !1
      },
      headerTextSize: {
        [_v25.EMAIL_TYPES.CONFIRMATION]: "",
        [_v25.EMAIL_TYPES.FOLLOWUP]: "",
        [_v25.EMAIL_TYPES.REMINDER]: ""
      },
      headerTextStyle: {
        [_v25.EMAIL_TYPES.CONFIRMATION]: "",
        [_v25.EMAIL_TYPES.FOLLOWUP]: "",
        [_v25.EMAIL_TYPES.REMINDER]: ""
      },
      headerTextAlign: {
        [_v25.EMAIL_TYPES.CONFIRMATION]: "",
        [_v25.EMAIL_TYPES.FOLLOWUP]: "",
        [_v25.EMAIL_TYPES.REMINDER]: ""
      },
      headerTextFormat: {
        [_v25.EMAIL_TYPES.CONFIRMATION]: "",
        [_v25.EMAIL_TYPES.FOLLOWUP]: "",
        [_v25.EMAIL_TYPES.REMINDER]: ""
      },
      headerTextColor: {
        [_v25.EMAIL_TYPES.CONFIRMATION]: "",
        [_v25.EMAIL_TYPES.FOLLOWUP]: "",
        [_v25.EMAIL_TYPES.REMINDER]: ""
      },
      bodyTextSize: {
        [_v25.EMAIL_TYPES.CONFIRMATION]: "",
        [_v25.EMAIL_TYPES.FOLLOWUP]: "",
        [_v25.EMAIL_TYPES.REMINDER]: ""
      },
      bodyTextStyle: {
        [_v25.EMAIL_TYPES.CONFIRMATION]: "",
        [_v25.EMAIL_TYPES.FOLLOWUP]: "",
        [_v25.EMAIL_TYPES.REMINDER]: ""
      },
      bodyTextAlign: {
        [_v25.EMAIL_TYPES.CONFIRMATION]: "",
        [_v25.EMAIL_TYPES.FOLLOWUP]: "",
        [_v25.EMAIL_TYPES.REMINDER]: ""
      },
      bodyTextFormat: {
        [_v25.EMAIL_TYPES.CONFIRMATION]: "",
        [_v25.EMAIL_TYPES.FOLLOWUP]: "",
        [_v25.EMAIL_TYPES.REMINDER]: ""
      },
      bodyTextColor: {
        [_v25.EMAIL_TYPES.CONFIRMATION]: "",
        [_v25.EMAIL_TYPES.FOLLOWUP]: "",
        [_v25.EMAIL_TYPES.REMINDER]: ""
      }
    },
    _v38 = {
      ..._v37,
      reminders: [],
      accentColor: "#00adef",
      from: "",
      emailToolbar: _v25.EMAIL_TOOLBAR_TYPES.GENERAL,
      emailTemplateType: _v25.EMAIL_TYPES.CONFIRMATION,
      selectedReminderId: "",
      previewMode: _v25.EMAIL_PREVIEW_MODE.WEB,
      useReplyEmail: !1,
      useSenderAddress: !1,
      useSenderPolicyUrl: !1,
      replyEmail: "",
      senderAddress: "",
      senderPolicyUrl: "",
      defaultConfig: _v37,
      hasApiData: !1,
      isLastActionReset: !1
    },
    _v39 = [_v25.EMAIL_TYPES.CONFIRMATION, _v25.EMAIL_TYPES.FOLLOWUP],
    _v40 = _v0 => _v39.includes(_v0) ? _v0 : _v25.EMAIL_TYPES.REMINDER,
    _v41 = (_v0, _v1) => {
      let _v2 = {
        ..._v0
      };
      return delete _v2[_v1], _v2;
    };
  function _v42(_v0, _v1) {
    switch (_v1.type !== _v35.SET_IS_CONTENT_MODIFIED && (_v0 = {
      ..._v0,
      isLastActionReset: _v1.type === _v35.RESET
    }), _v1.type) {
      case _v35.SET_STATE:
        return {
          ..._v0,
          ..._v1.payload
        };
      case _v35.RESET:
        let _v0 = _v1.payload,
          _v1 = _v40(_v0),
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
        return (_v1 === _v25.EMAIL_TYPES.CONFIRMATION || _v1 === _v25.EMAIL_TYPES.REMINDER) && (_v2.showCalender = {
          ..._v0.showCalender,
          [_v0]: _v0.defaultConfig.showCalender[_v1]
        }), _v29.forEach(_v0 => {
          _v0[_v0] && (_v2[_v0] = {
            ...(_v0[_v0] || {}),
            [_v0]: ""
          });
        }), {
          ..._v0,
          ..._v2
        };
      case _v35.SET_CALENDER:
        return {
          ..._v0,
          showCalender: {
            ..._v0.showCalender,
            [_v1.payload]: !_v0.showCalender[_v1.payload]
          }
        };
      case _v35.SET_CUSTOM_LOGO_IMAGE:
        return {
          ..._v0,
          customLogo: {
            ..._v0.customLogo,
            ..._v1.payload
          }
        };
      case _v35.TOGGLE_SETTING_EMAIL:
        return {
          ..._v0,
          [_v1.payload]: !_v0[_v1.payload]
        };
      case _v35.TOGGLE_REMINDER:
        return {
          ..._v0,
          reminders: _v0.reminders.map(_v0 => _v0.id === _v1.payload ? {
            ..._v0,
            enabled: !_v0.enabled
          } : _v0)
        };
      case _v35.SELECT_REMINDER:
        return {
          ..._v0,
          emailTemplateType: _v25.EMAIL_TYPES.REMINDER,
          selectedReminderId: _v1.payload
        };
      case _v35.ADD_REMINDER:
        return {
          ..._v0,
          reminders: [..._v0.reminders, {
            id: _v1.payload.id,
            offset: _v1.payload.offset,
            enabled: !0
          }],
          emailTemplateType: _v25.EMAIL_TYPES.REMINDER,
          selectedReminderId: _v1.payload.id,
          ...((_v0, _v1) => {
            let {
                REMINDER: _v2
              } = _v25.EMAIL_TYPES,
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
            return _v29.forEach(_v0 => {
              let _v1 = _v0[_v0];
              _v1 && (_v4[_v0] = {
                ..._v1,
                [_v1]: ""
              });
            }), _v4;
          })(_v0, _v1.payload.id)
        };
      case _v35.DELETE_REMINDER:
        {
          var _v2, _v3;
          let _v0,
            _v1 = _v0.reminders.filter(_v0 => _v0.id !== _v1.payload),
            _v2 = _v0.selectedReminderId === _v1.payload ? _v1[0]?.id ?? "" : _v0.selectedReminderId,
            _v3 = 0 === _v1.length && _v0.emailTemplateType === _v25.EMAIL_TYPES.REMINDER ? _v25.EMAIL_TYPES.CONFIRMATION : _v0.emailTemplateType;
          return {
            ..._v0,
            reminders: _v1,
            selectedReminderId: _v2,
            emailTemplateType: _v3,
            ...(_v2 = _v0, _v3 = _v1.payload, _v0 = {
              subject: _v41(_v2.subject, _v3),
              header: _v41(_v2.header, _v3),
              body: _v41(_v2.body, _v3),
              showCalender: _v41(_v2.showCalender, _v3),
              buttonInfo: _v41(_v2.buttonInfo, _v3),
              isContentModified: _v41(_v2.isContentModified || {}, _v3)
            }, _v29.forEach(_v0 => {
              let _v1 = _v2[_v0];
              _v1 && (_v0[_v0] = _v41(_v1, _v3));
            }), _v0)
          };
        }
      case _v35.UPDATE_REMINDER_OFFSET:
        return {
          ..._v0,
          reminders: _v0.reminders.map(_v0 => _v0.id === _v1.payload.id ? {
            ..._v0,
            offset: _v1.payload.offset
          } : _v0)
        };
      case _v35.SET_BUTTON_INFO:
        return {
          ..._v0,
          buttonInfo: {
            ..._v0.buttonInfo,
            [_v1.payload.emailTab]: _v1.payload.info
          }
        };
      case _v35.SET_SUBJECT:
      case _v35.SET_HEADER:
      case _v35.SET_BODY:
      case _v35.SET_HEADER_TEXT_SIZE:
      case _v35.SET_HEADER_TEXT_STYLE:
      case _v35.SET_HEADER_TEXT_ALIGN:
      case _v35.SET_HEADER_TEXT_FORMAT:
      case _v35.SET_HEADER_TEXT_COLOR:
      case _v35.SET_BODY_TEXT_SIZE:
      case _v35.SET_BODY_TEXT_STYLE:
      case _v35.SET_BODY_TEXT_ALIGN:
      case _v35.SET_BODY_TEXT_FORMAT:
      case _v35.SET_BODY_TEXT_COLOR:
        let _v3 = _v36[_v1.type];
        return {
          ..._v0,
          [_v3]: {
            ..._v0[_v3],
            [_v1.payload.emailTab]: _v1.payload.text
          }
        };
      case _v35.SET_EMAIL_TOOL_BAR:
      case _v35.EMAIL_TEMPLATE_TYPE:
      case _v35.SET_PREVIEW:
      case _v35.SET_COLOR:
      case _v35.SET_FROM:
      case _v35.SET_CONFIRMATION_TITLE:
      case _v35.SET_CONFIRMATION_BODY:
      case _v35.SET_REMINDER_TITLE:
      case _v35.SET_REMINDER_BODY:
      case _v35.SET_FOLLOWUP_TITLE:
      case _v35.SET_FOLLOWUP_BODY:
      case _v35.SET_FOOTER_EMAIL:
      case _v35.SET_FOOTER_ADDRESS:
      case _v35.SET_FOOTER_POLICY:
      case _v35.SET_IS_CONTENT_MODIFIED:
        return {
          ..._v0,
          [_v36[_v1.type]]: _v1.payload
        };
      default:
        return _v0;
    }
  }
  var _v43 = _v0.i(0);
  let _v44 = (0, _v1.createContext)({
    state: _v38,
    dispatch: () => console.error("dispatch not initialized"),
    isReminderSaved: () => !0,
    isManualSaveRequired: !1,
    canUseConfigurableEventReminders: !1
  });
  _v0.s(["EmailContext", 0, _v44, "default", 0, ({
    children: _v0,
    onSaveStateChange: _v1
  }) => {
    let [_v2, _v3] = (0, _v1.useReducer)(_v42, {
        ..._v38
      }),
      [_v4, {
        loading: _v5,
        data: _v6
      }] = (0, _v5.useGetUserLiveEventEmailSettingsLazy)(),
      _v7 = (0, _v26.useConfigStore)(_v0 => _v0.entityType),
      _v8 = (0, _v26.useConfigStore)(_v0 => _v0.entityId),
      {
        user: _v9
      } = (0, _v10.useEntityStore)(),
      {
        teamName: _v10,
        accentColor: _v11,
        isLoading: _v12
      } = _v15(),
      _v13 = (0, _v9.useOrionSettingsFields)(["enable_configurable_event_reminders", "enable_explicit_registration_save"]),
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
            key: _v25.EMAIL_TYPES.CONFIRMATION,
            data: _v11
          }, {
            key: _v25.EMAIL_TYPES.FOLLOWUP,
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
          customLogo: (0, _v43.getCustomLogoImagePayload)(_v2),
          from: _v3 ?? _v10 ?? _v25.VIMEO,
          subject: _v16(_v0 => _v31(_v0.subject)),
          header: _v16(_v0 => _v31(_v0.header)),
          body: _v16(_v0 => _v31(_v0.body)),
          showCalender: _v16(_v0 => !!_v0.useCalender),
          buttonInfo: _v16(_v0 => ({
            text: _v0.buttonText,
            customLink: _v0.buttonLink,
            isCustomLink: !!_v0.useCustomLink
          })),
          defaultConfig: {
            showCalender: {
              [_v25.EMAIL_TYPES.CONFIRMATION]: !!_v4.default.useCalender,
              [_v25.EMAIL_TYPES.REMINDER]: !!_v10.useCalender,
              [_v25.EMAIL_TYPES.FOLLOWUP]: !!_v5.default.useCalender
            },
            buttonInfo: {
              [_v25.EMAIL_TYPES.CONFIRMATION]: {
                text: _v4.default.buttonText,
                customLink: _v4.default.buttonLink,
                isCustomLink: !!_v4.default.useCustomLink
              },
              [_v25.EMAIL_TYPES.REMINDER]: {
                text: _v10.buttonText,
                customLink: _v10.buttonLink,
                isCustomLink: !!_v10.useCustomLink
              },
              [_v25.EMAIL_TYPES.FOLLOWUP]: {
                text: _v5.default.buttonText,
                customLink: _v5.default.buttonLink,
                isCustomLink: !!_v5.default.useCustomLink
              }
            },
            subject: {
              [_v25.EMAIL_TYPES.CONFIRMATION]: _v31(_v4.default.subject),
              [_v25.EMAIL_TYPES.REMINDER]: _v31(_v10.subject),
              [_v25.EMAIL_TYPES.FOLLOWUP]: _v31(_v5.default.subject)
            },
            header: {
              [_v25.EMAIL_TYPES.CONFIRMATION]: _v31(_v4.default.header),
              [_v25.EMAIL_TYPES.REMINDER]: _v31(_v10.header),
              [_v25.EMAIL_TYPES.FOLLOWUP]: _v31(_v5.default.header)
            },
            body: {
              [_v25.EMAIL_TYPES.CONFIRMATION]: _v31(_v4.default.body),
              [_v25.EMAIL_TYPES.REMINDER]: _v31(_v10.body),
              [_v25.EMAIL_TYPES.FOLLOWUP]: _v31(_v5.default.body)
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
          select: _v25.EMAIL_CUSTOMIZATION_FIELDS
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
        (0, _v26.useConfigStore)(_v0 => _v0.entityType);
        let _v10 = (0, _v26.useConfigStore)(_v0 => _v0.entityId),
          _v11 = (0, _v26.useConfigStore)(_v0 => _v0.onAutoSave),
          [_v12, {
            data: _v13,
            loading: _v14,
            error: _v15
          }] = (0, _v5.usePatchUserLiveEventEmailSettings)(),
          [_v16] = _v24(),
          _v17 = (0, _v1.useRef)(null),
          _v18 = (0, _v17.useToast)(),
          _v19 = async _v0 => {
            let {
                changedProps: _v1
              } = _v34(_v4, _v0),
              _v2 = !_v4.from || _v0.from || _v1.includes("from") ? _v1 : [..._v1, "from"];
            if (_v2.length > 0 && !_v6 && !_v17.current && _v4.hasApiData && _v8 && _v10 && !1 === _v2) {
              _v7(!0), _v11?.(!0);
              let _v0 = (0, _v8.getUserIdFromUri)(_v8.uri),
                _v1 = parseInt(_v10 || "0");
              _v17.current = _v0;
              try {
                await Promise.all(_v4.reminders.filter(_v0 => _v0.id !== _v25.LEGACY_REMINDER_ID && !_v0.reminders.some(_v0 => _v0.id === _v0.id)).map(_v0 => _v0.id).map(_v0 => _v16({
                  where: {
                    userId: _v0,
                    liveEventId: _v1,
                    reminderId: _v0
                  }
                })));
              } catch {
                _v17.current = null, _v7(!1), _v11?.(!1), _v18({
                  title: _v27.default.ChangesCouldNotBeSaved,
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
                      _v1 = void 0 === _v0 || _v0.enabled !== _v0.enabled || !(0, _v28.default)(_v0.offset, _v0.offset, _v33),
                      _v2 = _v32.some(_v0 => !(0, _v28.default)(_v0[_v0]?.[_v0.id], _v1[_v0]?.[_v0.id], _v33));
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
                          body: _v30(_v13[_v1 = _v0.id]),
                          buttonLink: _v11[_v1].customLink,
                          buttonText: _v11[_v1].text,
                          useCustomLink: _v11[_v1].isCustomLink,
                          header: _v30(_v12[_v1]),
                          subject: _v30(_v9[_v1]),
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
                      from: _v8 || _v1 || _v25.VIMEO
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
                      body: _v30(_v13.CONFIRMATION),
                      buttonLink: _v11.CONFIRMATION.customLink,
                      buttonText: _v11.CONFIRMATION.text,
                      useCustomLink: _v11.CONFIRMATION.isCustomLink,
                      header: _v30(_v12.CONFIRMATION),
                      subject: _v30(_v9.CONFIRMATION),
                      useCalender: _v14.CONFIRMATION
                    },
                    emailPostEventThankYou: {
                      body: _v30(_v13.FOLLOWUP),
                      buttonLink: _v11.FOLLOWUP.customLink,
                      buttonText: _v11.FOLLOWUP.text,
                      useCustomLink: _v11.FOLLOWUP.isCustomLink,
                      header: _v30(_v12.FOLLOWUP),
                      subject: _v30(_v9.FOLLOWUP)
                    }
                  };
                })(_v0, _v1, _v2, _v2);
              _v12({
                where: {
                  userId: _v0,
                  liveEventId: _v1
                },
                select: _v25.EMAIL_CUSTOMIZATION_FIELDS,
                variables: _v3
              });
            }
          },
          _v20 = (0, _v1.useRef)(_v19);
        _v20.current = _v19;
        let _v21 = (0, _v1.useRef)(_v0);
        _v21.current = _v0;
        let _v22 = (0, _v1.useCallback)(() => {
            _v20.current(_v21.current);
          }, []),
          _v23 = (0, _v1.useCallback)((0, _v16.default)(_v0 => {
            _v20.current(_v0);
          }, _v25.EMAIL_AUTO_SAVE_DEBOUNCED_INTERVAL), []);
        return (0, _v1.useEffect)(() => {
          !_v3 && _v0 && _v23(_v0);
        }, [_v0, _v23, _v3]), (0, _v1.useEffect)(() => {
          let _v0 = !!_v13 || !!_v15;
          if (_v14 || !_v0 || !_v17.current) return;
          let _v1 = _v17.current;
          if (_v17.current = null, _v7(!1), _v11?.(!1), _v15) return;
          _v5(_v1), _v3 || _v18({
            id: "auto-save-toast",
            title: _v27.default.ChangesSaved,
            status: "success",
            duration: 0
          });
          let {
            changedProps: _v2
          } = _v34(_v1, _v0);
          !_v3 && _v2.length > 0 && _v23(_v0);
        }, [_v14, _v13, _v15]), (0, _v1.useEffect)(() => {
          _v15 && !_v14 && _v15?.res?.json().then(_v0 => {
            let _v1 = (0, _v18.deepCamelCase)(_v0);
            if (_v1?.errorCode) {
              let _v0 = _v27.ERROR_CODE[_v1.errorCode],
                _v1 = _v1.invalidParameters?.[0]?.field,
                _v2 = _v27.ERROR_EMAIL_FIELD_MAPPING[_v1];
              _v18({
                title: _v2 && _v0 ? `${_v27.default.ChangesCouldNotBeSaved} ${_v2} - ${_v0}` : _v27.default.ChangesCouldNotBeSaved,
                status: "error",
                duration: 0
              });
            }
          });
        }, [_v14, _v15]), (0, _v1.useEffect)(() => {
          _v4.hasApiData || _v5(_v0);
        }, [_v0, _v4.hasApiData]), {
          isReminderSaved: _v0 => _v4.reminders.some(_v0 => _v0.id === _v0),
          isDirty: _v34(_v4, _v0).changedProps.length > 0,
          isSaving: _v6,
          save: _v22
        };
      })(_v2, _v10 || _v25.VIMEO, _v17, _v16);
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
        type: _v35.SET_STATE,
        payload: _v18
      });
    }, [_v18]), !_v6 || (0, _v3.default)(_v6)) ? (0, _v2.jsx)(_v6.FullScreenLoader, {}) : (0, _v2.jsx)(_v44.Provider, {
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
  let _v45 = {
      UNDO: "UNDO",
      REDO: "REDO",
      SET: "SET",
      RESET: "RESET"
    },
    _v46 = {
      past: [],
      present: {},
      future: [],
      canUndo: !1,
      canRedo: !1
    },
    _v47 = (_v0, _v1) => {
      let {
        past: _v2,
        present: _v3,
        future: _v4,
        canUndo: _v5,
        canRedo: _v6
      } = _v0;
      switch (_v1.type) {
        case _v45.UNDO:
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
        case _v45.REDO:
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
        case _v45.SET:
          let {
              payload: _v0
            } = _v1,
            {
              changedProps: _v1
            } = _v34(_v0, _v3, !1);
          if (0 === _v1.length) return _v0;
          return {
            ..._v0,
            past: [..._v2, _v3],
            present: _v0,
            canUndo: !0,
            canRedo: !1,
            future: []
          };
        case _v45.RESET:
          return {
            ..._v46,
            present: _v1.payload
          };
      }
    },
    _v48 = _v0 => {
      let [_v1, _v2] = (0, _v1.useReducer)(_v47, {
        ..._v46,
        present: _v0
      });
      return [{
        ..._v1.present,
        canUndo: _v1.canUndo,
        canRedo: _v1.canRedo
      }, _v2];
    };
  _v0.s(["ACTION_TYPE", 0, _v45, "default", 0, _v48], 0);
  let _v49 = (0, _v1.createContext)({
    state: {},
    dispatch: () => console.error("dispatch not initialized"),
    undoRedoDispatch: () => console.error("undo/redo dispatch not initialized")
  });
  _v0.s(["UndoRedoContext", 0, _v49, "UndoRedoContextProvider", 0, ({
    children: _v0
  }) => {
    let {
        state: _v1,
        dispatch: _v2
      } = (0, _v1.useContext)(_v44),
      [_v3, _v4] = _v48(_v1),
      [_v5, _v6] = (0, _v1.useState)(!1),
      _v7 = (0, _v1.useCallback)((0, _v16.default)(_v0 => {
        _v4({
          type: _v45.SET,
          payload: _v0
        });
      }, _v25.EMAIL_UNDO_REDO_DEBOUNCED_INTERVAL), [_v4]);
    (0, _v1.useEffect)(() => {
      if (_v5) {
        let {
          changedProps: _v0
        } = _v34(_v1, _v3, !1);
        _v0.length > 0 && _v2({
          type: _v35.SET_STATE,
          payload: _v3
        });
      }
    }, [_v3, _v5, _v1, _v2]), (0, _v1.useEffect)(() => {
      _v1.hasApiData && _v4({
        type: _v45.RESET,
        payload: _v1
      });
    }, [_v4, _v1.hasApiData]), (0, _v1.useEffect)(() => {
      if (!_v5) {
        let {
          changedProps: _v0
        } = _v34(_v1, _v3, !1);
        _v0.length > 0 && _v7(_v1);
      }
    }, [_v1, _v5, _v7, _v3]), (0, _v1.useEffect)(() => {
      let {
        changedProps: _v0
      } = _v34(_v1, _v3, !1);
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
        _v8 = _v40(_v0);
      return _v2[_v0] !== _v7.subject[_v8] || _v5[_v0].text !== _v7.buttonInfo[_v8].text || _v5[_v0].isCustomLink || _v3[_v0] !== _v7.header[_v8] || _v4[_v0] !== _v7.body[_v8] || (_v8 === _v25.EMAIL_TYPES.CONFIRMATION || _v8 === _v25.EMAIL_TYPES.REMINDER) && _v6[_v0] !== _v7.showCalender[_v8];
    }, [_v1.buttonInfo, _v1.subject, _v1.header, _v1.body, _v1.showCalender]);
    return (0, _v1.useEffect)(() => {
      let _v0 = Object.keys(_v1.subject).reduce((_v0, _v1) => (_v0[_v1] = _v8(_v1, _v1), _v0), {});
      _v0 !== _v1.isContentModified && _v2({
        type: _v35.SET_IS_CONTENT_MODIFIED,
        payload: _v0
      });
    }, [_v8]), (0, _v2.jsx)(_v49.Provider, {
      value: {
        state: _v3,
        dispatch: _v4,
        undoRedoDispatch: _v0 => {
          (_v0.type === _v45.REDO || _v0.type === _v45.UNDO) && _v1.hasApiData && _v6(!0), _v4(_v0);
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
      } = (0, _v1.useContext)(_v44),
      {
        state: _v5,
        undoRedoDispatch: _v6
      } = (0, _v1.useContext)(_v49);
    return {
      emailState: {
        ..._v0,
        canUndo: _v5.canUndo,
        canRedo: _v5.canRedo
      },
      dispatch: _v1,
      undoRedoDispatch: _v6,
      activeContentKey: _v0.emailTemplateType === _v25.EMAIL_TYPES.REMINDER ? _v0.selectedReminderId : _v0.emailTemplateType,
      isReminderSaved: _v2,
      isManualSaveRequired: _v3,
      canUseConfigurableEventReminders: _v4
    };
  }], 0);
}