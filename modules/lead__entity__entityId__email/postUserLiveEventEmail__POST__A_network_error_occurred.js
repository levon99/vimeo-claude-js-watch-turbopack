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
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
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
    _v38 = _v0.i(0),
    _v39 = _v0.i(0),
    _v40 = _v0.i(0),
    _v41 = _v0.i(0),
    _v42 = _v0.i(0),
    _v43 = _v0.i(0),
    _v44 = _v0.i(0),
    _v45 = _v0.i(0),
    _v46 = _v0.i(0),
    _v47 = _v0.i(0);
  async function _v48({
    baseUrl: _v0,
    variables: _v1,
    where: {
      userId: _v2,
      liveEventId: _v3
    },
    ..._v4
  }) {
    return (0, _v46.measureLatency)("postUserLiveEventEmail", "POST", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/live_events/${_v3}/email`, {
        ..._v4,
        method: "POST",
        body: JSON.stringify((0, _v47.deepSnakeCase)(_v1))
      });
      if (!_v0.ok) throw new _v47.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v47.deepCamelCase)(_v1);
    });
  }
  var _v49 = _v0.i(0),
    _v50 = _v0.i(0);
  function _v51() {
    let {
        mutate: _v0
      } = (0, _v49.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v50.useGctlConfig)(),
      [_v5, _v6] = (0, _v45.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/live_events/${_v0.where.liveEventId}/email${(0, _v45.serializeQuery)(_v0)}`, _v48({
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
  "true" === _v44.default.env.STORYBOOK && (0, _v45.assignMswData)(_v51, {
    endpoint: "/users/:userId/live_events/:liveEventId/email",
    method: "POST"
  });
  var _v52 = _v0.i(0);
  let _v53 = ({
    clearAllTextSelections: _v0
  }) => {
    let _v1 = (0, _v26.useViewer)(),
      _v2 = _v1?.user,
      {
        emailState: _v3,
        dispatch: _v4
      } = (0, _v28.useEmailCustomization)(),
      _v5 = (0, _v42.useToast)(),
      [_v6, {
        data: _v7
      }] = (0, _v43.useGetUserLazy)(),
      _v8 = (0, _v38.useConfigStore)(_v0 => _v0.entityId),
      [_v9, {
        loading: _v10,
        error: _v11,
        data: _v12
      }] = _v51(),
      {
        sentRegistrationEmailActionEvent: _v13,
        sentRegistrationEmailLayoutChangeEvent: _v14
      } = (0, _v34.useAnalytics)();
    return (0, _v2.useEffect)(() => {
      _v6({
        where: {
          userId: (0, _v52.getUserIdFromUri)(_v2?.uri)
        },
        select: ["email"]
      });
    }, [_v2?.uri]), (0, _v2.useEffect)(() => {
      !_v10 && (_v11 ? _v5({
        title: _v39.default.SomethingWentWrong,
        status: "error"
      }) : _v12 && _v5({
        status: "success",
        title: (0, _v20.translate)({
          singular: "Successfully sent to {EMAIL}",
          replacements: {
            EMAIL: _v7?.email
          },
          dictionary: {
            "fr-FR": {
              singular: "Envoi réussi à {EMAIL}"
            },
            "ja-JP": {
              singular: "{EMAIL}に正常に送信されました"
            },
            "ko-KR": {
              singular: "{EMAIL}(으)로 성공적으로 전송되었습니다."
            },
            "zh-CN": {
              singular: "已成功发送至 {EMAIL}"
            }
          }
        })
      }));
    }, [_v10, _v11, _v12]), (0, _v1.jsxs)(_v7.Flex, {
      children: [(0, _v1.jsx)(_v41.Button, {
        size: "sm",
        variant: "tertiary",
        mr: (0, _v15.rem)(10),
        isDisabled: !_v3.isContentModified?.[_v3.emailTemplateType],
        onClick: () => {
          _v4({
            type: _v37.ACTION_TYPE.RESET,
            payload: _v3.emailTemplateType
          }), _v14({
            actionName: _v36.BP_ACTION_NAMES.RESET,
            type: _v36.BP_TYPE[_v3.emailTemplateType]
          });
        },
        children: _v39.default.Reset
      }), (0, _v1.jsx)(_v14.Tooltip, {
        fontSize: "body-md",
        label: _v7?.email?.length ? (0, _v20.translate)({
          singular: "Test email will be sent to the email associated with your account {EMAIL}",
          replacements: {
            EMAIL: _v7?.email
          },
          dictionary: {
            "fr-FR": {
              singular: "Le message test sera envoyé à l'adresse e-mail associée à votre compte : {EMAIL}"
            },
            "ja-JP": {
              singular: "テストメールがアカウントに登録されたメールアドレス {EMAIL} に送信されます"
            },
            "ko-KR": {
              singular: "테스트 이메일이 {EMAIL} 계정과 연결된 이메일로 전송됩니다."
            },
            "zh-CN": {
              singular: "测试电子邮件将发送至与您的帐户关联的电子邮件地址 {EMAIL}"
            }
          }
        }) : _v39.default.VerifyEmail,
        children: (0, _v1.jsx)("div", {
          children: (0, _v1.jsx)(_v41.Button, {
            size: "sm",
            variant: "secondary",
            onClick: () => {
              _v8 && (_v0(), _v9({
                where: {
                  userId: (0, _v52.getUserIdFromUri)(_v2?.uri),
                  liveEventId: parseInt(_v8)
                },
                variables: {
                  type: _v32.TEST_EMAIL_TEMPLATE[_v3.emailTemplateType],
                  test: !0
                }
              }), _v13({
                actionName: "trigger_test",
                type: _v36.BP_TYPE[_v3.emailTemplateType]
              }));
            },
            isLoading: _v10,
            isDisabled: _v10,
            children: _v39.default.SendTest
          })
        })
      })]
    });
  };
  var _v54 = _v0.i(0),
    _v55 = _v0.i(0),
    _v56 = _v0.i(0),
    _v57 = _v0.i(0),
    _v58 = _v0.i(0),
    _v59 = _v0.i(0),
    _v60 = _v0.i(0),
    _v61 = _v0.i(0);
  function _v62({
    children: _v0,
    onOpen: _v1,
    ..._v2
  }) {
    return (0, _v2.useEffect)(() => _v1?.(), []), (0, _v1.jsx)(_v5.Box, {
      position: "relative",
      py: "sm",
      ..._v2,
      children: _v0
    });
  }
  function _v63({
    index: _v0,
    children: _v1,
    selected: _v2,
    onKeyUp: _v3,
    accentColor: _v4,
    ..._v5
  }) {
    return (0, _v1.jsx)(_v5.Box, {
      color: "slate.800",
      borderRight: `${(0, _v15.rem)(8)} solid`,
      boxSizing: "border-box",
      borderColor: _v2 ? _v4 : "transparent",
      height: "auto",
      p: "sm",
      cursor: "pointer",
      onClick: _v0 => _v0.preventDefault(),
      id: "tab" + _v0,
      onKeyUp: _v3,
      ..._v5,
      children: _v1
    });
  }
  let _v64 = ({
      children: _v0,
      forwardRef: _v1,
      accentColor: _v2 = "blue.500",
      ..._v3
    }) => {
      let [_v4, _v5] = (0, _v2.useState)(0);
      function _v6({
        key: _v0
      }) {
        let {
          length: _v1
        } = _v0;
        "ArrowDown" === _v0 && _v5(_v4 === _v1 - 1 ? 0 : _v4 + 1), "ArrowUp" === _v0 && _v5(0 === _v4 ? _v1 - 1 : _v4 - 1);
      }
      (0, _v2.useLayoutEffect)(() => {
        let _v0 = _v0.map(({
          props: {
            active: _v0
          }
        }, _v1) => _v0 && _v1).filter(_v0 => "number" == typeof _v0 && _v0 >= 0);
        return 0 === _v0.length ? _v5(0) : 1 === _v0.length ? _v5(_v0[0] || 0) : void _v5(_v0[_v0.length - 1] || 0);
      }, [_v0]);
      let _v7 = _v0.map(({
          props: _v0
        }, _v1) => (0, _v1.jsx)(_v5.Box, {
          as: "li",
          display: "block",
          borderTop: `${(0, _v15.rem)(1)} solid`,
          borderColor: "stroke",
          _last: {
            borderBottom: `${(0, _v15.rem)(1)} solid`,
            borderColor: "stroke"
          },
          _first: {
            border: "none"
          },
          _hover: {
            backgroundColor: "fill-blur"
          },
          onClick: _v0 => {
            _v0.stopPropagation(), _v5(_v1);
          },
          children: (0, _v1.jsx)(_v63, {
            onKeyUp: _v6,
            index: _v1,
            selected: _v4 === _v1,
            accentColor: _v2,
            children: _v0.label
          })
        }, _v1)),
        _v8 = _v0.map((_v0, _v1) => _v4 === _v1 && (0, _v2.cloneElement)(_v0, {
          id: `#tab-${_v1}`,
          key: _v1
        }));
      return (0, _v1.jsxs)(_v7.Flex, {
        ref: _v1,
        ..._v3,
        children: [(0, _v1.jsx)(_v7.Flex, {
          as: "ol",
          listStyleType: "none",
          flexDirection: "column",
          width: "100%",
          children: _v7
        }), (0, _v1.jsx)("div", {
          children: _v8
        })]
      });
    },
    _v65 = () => {
      let {
          emailState: _v0,
          dispatch: _v1
        } = (0, _v28.useEmailCustomization)(),
        [_v2, _v3] = (0, _v2.useState)(!1),
        {
          status: _v4,
          completedOn: _v5,
          user: _v6
        } = (0, _v30.useEntityStore)(),
        _v7 = (0, _v42.useToast)(),
        {
          entityId: _v8
        } = (0, _v38.useConfigStore)(_v0 => _v0),
        _v9 = (0, _v38.useConfigStore)(_v0 => _v0.entityType),
        {
          trackLiveStreamRegistrationEmailToggled: _v10
        } = (0, _v60.useLiveStreamBroadcasterTracking)(),
        [_v11, _v12] = (0, _v2.useState)(!1),
        [_v13, _v14] = _v51(),
        {
          getEmailData: _v15
        } = (0, _v2.useContext)(_v61.EmailContext),
        {
          sentChangeRegistrationEmailConfigEvent: _v16,
          sentRegistrationEmailPreviewEvent: _v17,
          sentRegistrationEmailActionEvent: _v18,
          sentFollowupEmailEvent: _v19
        } = (0, _v34.useAnalytics)(),
        _v20 = navigator.language || "en-US",
        _v21 = {
          year: "numeric",
          month: "2-digit",
          day: "2-digit"
        },
        _v22 = {
          [_v32.EMAIL_TYPES.CONFIRMATION]: [{
            label: _v39.default.EmailToggle[_v32.EMAIL_TOGGLE_MAP.CONFIRMATION],
            payload: _v32.EMAIL_TOGGLE_MAP.CONFIRMATION,
            settingState: _v0.confirmation
          }],
          [_v32.EMAIL_TYPES.REMINDER]: [{
            label: _v39.default.EmailToggle[_v32.EMAIL_TOGGLE_MAP.REMINDER_24_HOURS],
            payload: _v32.EMAIL_TOGGLE_MAP.REMINDER_24_HOURS,
            settingState: _v0.reminder24Hours
          }],
          [_v32.EMAIL_TYPES.FOLLOWUP]: [{
            label: _v39.default.EmailToggle[_v32.EMAIL_TOGGLE_MAP.FOLLOWUP],
            payload: _v32.EMAIL_TOGGLE_MAP.FOLLOWUP,
            settingState: _v0.followUp
          }]
        },
        _v23 = () => {
          if (_v8) {
            let _v0 = _v6?.uri;
            _v13({
              where: {
                userId: (0, _v52.getUserIdFromUri)(_v0),
                liveEventId: parseInt(_v8)
              },
              variables: {
                type: "follow_up"
              }
            }), _v19();
          }
        };
      return (0, _v2.useEffect)(() => {
        let {
          loading: _v0,
          error: _v1,
          data: _v2
        } = _v14;
        _v0 || (_v1 ? _v7({
          title: _v39.default.SomethingWentWrong,
          status: "error"
        }) : _v2 && (_v15?.(), _v12(!0), _v7({
          title: _v39.default.EmailSent,
          status: "success"
        })), _v3(!1));
      }, [_v14]), (0, _v1.jsx)(_v64, {
        children: Object.keys(_v32.EMAIL_TYPES).map(_v0 => {
          let _v1 = _v32.EMAIL_TYPES[_v0],
            _v2 = _v22[_v1].some(({
              payload: _v0,
              settingState: _v1
            }) => _v0 !== _v32.EMAIL_TOGGLE_MAP.FOLLOWUP || _v1);
          return (0, _v1.jsx)(_v62, {
            active: _v0.emailTemplateType === _v1,
            onOpen: () => {
              _v1({
                type: _v37.ACTION_TYPE.EMAIL_TEMPLATE_TYPE,
                payload: _v1
              }), _v17({
                actionName: _v36.BP_ACTION_NAMES.PREVIEW_BY_TYPE,
                type: _v36.BP_TYPE[_v1],
                copy: _v36.BP_COPY[_v1]
              });
            },
            label: (0, _v1.jsxs)(_v5.Box, {
              color: "text-primary",
              pt: "lg",
              pr: "sm",
              pb: "sm",
              pl: "lg",
              onClick: _v0 => {
                _v0.stopPropagation(), _v1({
                  type: _v37.ACTION_TYPE.EMAIL_TEMPLATE_TYPE,
                  payload: _v1
                });
              },
              children: [(0, _v1.jsxs)(_v5.Box, {
                width: "fit-content",
                children: [(0, _v1.jsx)(_v54.Header, {
                  pb: "md",
                  size: "xs",
                  children: _v39.default.EmailTabName(_v1, _v22[_v1].length)
                }), _v22[_v1].map(({
                  label: _v0,
                  payload: _v1,
                  settingState: _v2
                }) => (0, _v1.jsxs)(_v7.Flex, {
                  alignItems: "center",
                  py: (0, _v15.rem)(7),
                  children: [(0, _v1.jsx)(_v58.Switch, {
                    size: "sm",
                    minWidth: (0, _v15.rem)(32),
                    isChecked: _v2,
                    isDisabled: _v4 === _v32.ENTITY_STATUS.ENDED,
                    onChange: () => {
                      let _v0 = _v1 === _v32.EMAIL_TOGGLE_MAP.CONFIRMATION ? "confirmation" : _v1 === _v32.EMAIL_TOGGLE_MAP.REMINDER_24_HOURS ? "reminder" : _v1 === _v32.EMAIL_TOGGLE_MAP.FOLLOWUP ? "follow_up" : null;
                      _v9 === _v22.ENTITY_TYPE.EVENT && _v0 && _v10({
                        liveStreamEmailType: _v0,
                        liveStreamNewStatus: !_v2
                      }), _v1({
                        type: _v37.ACTION_TYPE.TOGGLE_SETTING_EMAIL,
                        payload: _v1
                      }), _v16({
                        actionName: _v36.BP_ACTION_NAMES.ENABLE,
                        actionValue: _v2 ? _v36.BP_ACTION_VALUES.OFF : _v36.BP_ACTION_VALUES.ON,
                        type: _v36.BP_TYPE[_v1],
                        copy: _v36.BP_COPY[_v1]
                      });
                    }
                  }), (0, _v1.jsx)(_v13.Paragraph, {
                    ml: (0, _v15.rem)(15),
                    size: "md",
                    children: _v0
                  })]
                }, _v0))]
              }), _v0 === _v32.EMAIL_TYPES.FOLLOWUP && (_v2 ? _v4 === _v32.ENTITY_STATUS.ENDED && (0, _v1.jsx)(_v13.Paragraph, {
                pl: (0, _v15.rem)(43),
                size: "md",
                children: (0, _v20.translate)({
                  singular: "Sent automatically on {DATE}",
                  replacements: {
                    DATE: (0, _v59.getIntlDate)(_v0.followUpSendOn || _v5 || void 0, _v21, _v20)
                  },
                  dictionary: {
                    "fr-FR": {
                      singular: "Envoyé automatiquement le {DATE}"
                    },
                    "ja-JP": {
                      singular: "{DATE}に自動送信されました"
                    },
                    "ko-KR": {
                      singular: "{DATE}에 자동 전송됨"
                    },
                    "zh-CN": {
                      singular: "在 {DATE} 自动发送"
                    }
                  }
                })
              }) : _v4 === _v32.ENTITY_STATUS.ENDED && _v0.followUpSender ? (0, _v1.jsx)(_v13.Paragraph, {
                pl: (0, _v15.rem)(43),
                size: "md",
                children: (0, _v20.translate)({
                  singular: "Sent manually on {DATE} by {NAME}",
                  replacements: {
                    DATE: (0, _v59.getIntlDate)(_v0.followUpSendOn, _v21, _v20),
                    NAME: _v0.followUpSender.name || ""
                  },
                  dictionary: {
                    "fr-FR": {
                      singular: "Envoyé manuellement le {DATE} par {NAME}"
                    },
                    "ja-JP": {
                      singular: "{NAME}さんが{DATE}にマニュアル送信しました"
                    },
                    "ko-KR": {
                      singular: "{NAME} 님이 {DATE}에 수동으로 전송함"
                    },
                    "zh-CN": {
                      singular: "由 {NAME} 在 {DATE} 手动发送"
                    }
                  }
                })
              }) : (0, _v1.jsxs)(_v5.Box, {
                children: [(0, _v1.jsxs)(_v55.Modal, {
                  isOpen: _v2,
                  onClose: () => _v3(!1),
                  size: "md",
                  children: [(0, _v1.jsx)(_v57.ModalOverlay, {}), (0, _v1.jsxs)(_v56.ModalContent, {
                    color: "text-primary",
                    py: "xl",
                    px: (0, _v15.rem)(44),
                    textAlign: "center",
                    children: [(0, _v1.jsx)(_v54.Header, {
                      mb: "md",
                      size: "md",
                      children: _v39.default.FollowUpModalHeader
                    }), (0, _v1.jsx)(_v13.Paragraph, {
                      size: "md",
                      children: _v39.default.FollowUpModalDescription
                    }), (0, _v1.jsxs)(_v7.Flex, {
                      mt: "lg",
                      children: [(0, _v1.jsx)(_v41.Button, {
                        width: "50%",
                        variant: "secondary",
                        mr: (0, _v15.rem)(11),
                        onClick: () => {
                          _v3(!1);
                        },
                        children: _v39.default.Cancel
                      }), (0, _v1.jsx)(_v41.Button, {
                        width: "50%",
                        onClick: _v23,
                        isLoading: _v14.loading,
                        children: _v39.default.Send
                      })]
                    })]
                  })]
                }), (0, _v1.jsxs)(_v5.Box, {
                  children: [(0, _v1.jsx)(_v41.Button, {
                    my: (0, _v15.rem)(8),
                    width: "100%",
                    variant: "secondary",
                    isActive: !0,
                    isDisabled: _v2 || _v4 !== _v32.ENTITY_STATUS.ENDED || _v11,
                    onClick: () => {
                      _v3(!0), _v18({
                        actionName: _v36.BP_ACTION_NAMES.CLICK,
                        type: _v36.BP_TYPE.FOLLOWUP,
                        copy: _v36.BP_COPY.SENT_FOLLOW_UP_EMAIL
                      });
                    },
                    children: _v39.default.FollowUpButton
                  }), _v4 !== _v32.ENTITY_STATUS.ENDED && !_v2 && (0, _v1.jsx)(_v3.Alert, {
                    children: (0, _v1.jsx)(_v4.AlertDescription, {
                      children: _v39.default.FollowUpNotification
                    })
                  })]
                })]
              }))]
            })
          }, _v1);
        })
      });
    };
  var _v66 = _v0.i(0);
  let _v67 = () => {
    let {
        emailState: _v0
      } = (0, _v28.useEmailCustomization)(),
      {
        teamName: _v1,
        isLoading: _v2
      } = (0, _v33.useTeamStore)(),
      _v3 = (0, _v26.useViewer)(),
      _v4 = _v3?.user;
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v7.Flex, {
        p: "sm",
        justifyContent: "center",
        children: (0, _v1.jsx)("strong", {
          children: "View this email in your browser."
        })
      }), (0, _v1.jsxs)(_v7.Flex, {
        p: "sm",
        justifyContent: "center",
        children: [`This email was sent to you by ${_v1 && !_v2 ? _v1 : _v4?.name}.`, _v0.useReplyEmail && _v0?.replyEmail && `You can respond to the sender at ${_v0?.replyEmail}.`]
      }), _v0.useSenderAddress && _v0?.senderAddress && (0, _v1.jsx)(_v7.Flex, {
        p: "sm",
        justifyContent: "center",
        children: _v0?.senderAddress
      }), (0, _v1.jsx)(_v7.Flex, {
        p: "sm",
        justifyContent: "center",
        children: (0, _v1.jsx)("strong", {
          children: _v0.useSenderPolicyUrl && _v0?.senderPolicyUrl ? "Privacy | Report Abuse" : "Report Abuse"
        })
      })]
    });
  };
  var _v68 = _v0.i(0),
    _v69 = _v0.i(0),
    _v70 = _v0.i(0),
    _v71 = _v0.i(0),
    _v72 = _v0.i(0);
  let _v73 = () => {
    let {
        emailState: _v0,
        dispatch: _v1
      } = (0, _v28.useEmailCustomization)(),
      {
        sentRegistrationEmailLayoutChangeEvent: _v2
      } = (0, _v34.useAnalytics)(),
      {
        entityType: _v3
      } = (0, _v38.useConfigStore)(_v0 => _v0),
      [_v4, _v5] = (0, _v2.useState)(!1),
      _v6 = (0, _v2.useMemo)(() => _v0.buttonInfo[_v0.emailTemplateType], [_v0]),
      {
        isCustomLink: _v7,
        text: _v8
      } = _v6,
      [_v9, _v10] = (0, _v2.useState)(_v6.customLink),
      {
        user: _v11,
        watchEventUri: _v12,
        privacy: _v13,
        link: _v14
      } = (0, _v30.useEntityStore)(),
      {
        hasUpsell: _v15,
        hasEmailEditAccess: _v16
      } = (0, _v27.useEntityCapability)(),
      _v17 = !(_v32.TRAIL_STATUS === _v11?.membership?.subscription?.trial?.status || _v15 || !_v16),
      _v18 = (0, _v2.useMemo)(() => !_v7 || (0, _v72.isValidUrl)(_v9 || ""), [_v7, _v9]),
      _v19 = _v0 => {
        _v1({
          type: _v37.ACTION_TYPE.SET_BUTTON_INFO,
          payload: {
            info: _v0,
            emailTab: _v0.emailTemplateType
          }
        });
      },
      _v20 = () => {
        _v17 && (_v19({
          ..._v6,
          isCustomLink: !_v7
        }), _v7 && _v2({
          actionName: _v36.BP_ACTION_NAMES.BUTTON_DEFAULT_LINK_CHANGED
        }));
      };
    return (0, _v2.useEffect)(() => {
      _v18 && _v7 && !_v4 && _v19({
        text: _v8,
        isCustomLink: !0,
        customLink: _v9
      });
    }, [_v18, _v9, _v8, _v7, _v4]), (0, _v1.jsxs)(_v5.Box, {
      children: [(0, _v1.jsx)(_v54.Header, {
        size: "md",
        mb: (0, _v15.rem)(30),
        children: _v39.default.Button
      }), (0, _v1.jsx)(_v54.Header, {
        size: "xs",
        mb: "sm",
        children: _v39.default.Text
      }), (0, _v1.jsxs)(_v8.FormControl, {
        children: [(0, _v1.jsx)(_v10.Input, {
          isDisabled: !_v16,
          maxLength: _v32.EMAIL_MAX_LENGTH.BUTTON_TEXT,
          value: _v8,
          onChange: _v0 => {
            let _v1 = _v0.target.value;
            _v19({
              ..._v6,
              text: _v1
            });
          }
        }), (0, _v1.jsx)(_v8.FormHelperText, {
          py: (0, _v15.rem)(12),
          children: (0, _v1.jsx)(_v40.CharCount, {
            value: _v8,
            maxCharacters: _v32.EMAIL_MAX_LENGTH.BUTTON_TEXT
          })
        })]
      }), (0, _v1.jsxs)(_v5.Box, {
        pt: (0, _v15.rem)(20),
        pb: "md",
        children: [(0, _v1.jsx)(_v54.Header, {
          size: "xs",
          mb: "md",
          children: _v39.default.URL
        }), (0, _v1.jsxs)(_v71.Stack, {
          spacing: (0, _v15.rem)(16),
          children: [(0, _v1.jsx)(_v70.Radio, {
            name: "link",
            isChecked: !_v7,
            onChange: _v20,
            children: _v39.default.VimeoLink
          }), (0, _v1.jsx)(_v70.Radio, {
            name: "link",
            isChecked: !!_v7,
            onChange: _v20,
            isDisabled: !_v17,
            children: _v39.default.CustomLink
          })]
        })]
      }), (0, _v1.jsxs)(_v8.FormControl, {
        isInvalid: !_v18,
        children: [(0, _v1.jsx)(_v10.Input, {
          placeholder: _v39.default.EnterValidURL,
          isDisabled: !_v7,
          onChange: _v0 => {
            let _v1 = _v0.target.value;
            _v10((0, _v72.isValidUrl)((0, _v72.appendProtocol)(_v1)) ? (0, _v72.appendProtocol)(_v1) : _v1);
          },
          maxLength: _v32.EMAIL_MAX_LENGTH.LINK,
          value: _v7 ? _v9 || "" : (() => {
            switch (_v3) {
              case _v22.ENTITY_TYPE.EVENT:
                let _v0 = _v13 && "unlistedHash" in _v13 ? _v13.unlistedHash : "";
                return `${window.location.origin}${_v12}${_v0 ? `/${_v0}` : ""}`;
              case _v22.ENTITY_TYPE.VIDEO:
                return _v14;
              default:
                return "";
            }
          })(),
          onFocus: () => _v5(!0),
          onBlur: () => _v5(!1)
        }), !_v18 && (0, _v1.jsx)(_v69.FormErrorMessage, {
          py: (0, _v15.rem)(12),
          children: _v39.default.InvalidURL
        })]
      })]
    });
  };
  var _v74 = _v0.i(0),
    _v75 = _v0.i(0),
    _v76 = _v0.i(0),
    _v77 = _v0.i(0),
    _v78 = _v0.i(0),
    _v79 = _v0.i(0),
    _v80 = _v0.i(0),
    _v81 = _v0.i(0),
    _v82 = _v0.i(0),
    _v83 = _v0.i(0),
    _v84 = _v0.i(0);
  let _v85 = _v0 => {
    let _v1 = (0, _v81.useCache)(),
      {
        canAccessCustomLogo: _v2
      } = (0, _v27.useEntityCapability)(),
      _v3 = _v1.get(_v32.EMAIL_LOGOS_CACHE_KEY),
      {
        user: _v4
      } = (0, _v30.useEntityStore)(),
      {
        canAddPlayerLogo: _v5
      } = (0, _v33.useTeamStore)(),
      [_v6, _v7] = (0, _v2.useState)(),
      [_v8, _v9] = (0, _v2.useState)(_v3),
      [_v10, _v11] = (0, _v2.useState)(),
      _v12 = _v0.customLogo?.url,
      [_v13, {
        data: _v14,
        error: _v15,
        loading: _v16
      }] = (0, _v83.useGetUserTeamLogosLazy)(),
      [_v17, {
        data: _v18,
        error: _v19,
        loading: _v20
      }] = (0, _v82.useGetUserCustomlogosLazy)();
    return (0, _v2.useEffect)(() => {
      if (!_v5) return;
      let _v0 = (0, _v52.getUserIdFromUri)(_v4?.uri);
      _v13({
        where: {
          userId: _v0
        },
        select: ["uri", "sizes"],
        query: {
          sizes: _v32.logoFetchOptions.sizes
        }
      }), _v2 && _v17({
        where: {
          userId: _v0
        },
        select: ["uri", "sizes"],
        query: {
          sizes: _v32.logoFetchOptions.sizes
        }
      });
    }, [_v5, _v2, _v4?.uri]), (0, _v2.useEffect)(() => {
      if (_v14 || _v18) {
        let _v0 = _v14?.data || [],
          _v1 = _v18?.data || [],
          _v2 = _v14?.total || 0,
          _v3 = _v18?.total || 0,
          _v4 = {
            items: [..._v0, ..._v1].filter(_v0 => _v0?.sizes?.[0]),
            total: _v2 + _v3
          };
        _v1.set(_v32.EMAIL_LOGOS_CACHE_KEY, _v4);
      }
    }, [_v14, _v18, _v1]), (0, _v2.useEffect)(() => {
      if (_v8?.items) if (_v12 && _v12 !== _v32.FALLBACK_PLAYER_CUSTOM_LOGO) {
        let _v0 = (0, _v84.findLogoIndex)(_v8.items, _v12);
        _v7(_v0), _v10 && _v10 < 0 && _v11(_v0);
      } else _v7(0);
    }, [_v12, _v10, _v8]), (0, _v2.useEffect)(() => {
      let _v0 = _v1.subscribeToKey(_v32.EMAIL_LOGOS_CACHE_KEY, _v0 => {
        _v9(_v0);
      });
      return () => {
        _v0();
      };
    }, [_v1]), {
      isLoadingLogos: _v16 || _v20,
      originalIndex: _v10,
      setOriginalIndex: _v11,
      selectedLogoIndex: _v6,
      customLogoResponseError: (_v15 || _v19) && !_v8?.items ? _v39.default.SomethingWentWrong : "",
      customLogoResponse: _v8
    };
  };
  function _v86(_v0) {
    let _v1 = (0, _v81.useCache)(),
      _v2 = _v1.get(_v0) || [];
    return {
      removeLogoFromCache: (0, _v2.useCallback)(_v0 => {
        _v1.set(_v0, {
          ..._v2,
          ...{
            total: _v2.total - 1,
            items: _v2.items.filter(({
              uri: _v0
            }) => !_v0?.includes(_v0))
          }
        });
      }, [_v2]),
      addLogoToCache: (0, _v2.useCallback)(_v0 => {
        _v2.items.some(({
          uri: _v0
        }) => _v0 === _v0?.uri) || _v1.set(_v0, {
          ..._v2,
          ...{
            total: _v2.total + 1,
            items: [..._v2.items, _v0]
          }
        });
      }, [_v2])
    };
  }
  function _v87(_v0, _v1, _v2) {
    let [_v3, _v4] = (0, _v2.useState)(!1),
      [_v5, {
        data: _v6,
        error: _v7
      }] = (0, _v83.usePostUserTeamLogos)(),
      [_v8, {
        data: _v9
      }] = (0, _v83.useGetUserTeamLogosLazy)(),
      {
        addLogoToCache: _v10
      } = _v86(_v2),
      _v11 = (0, _v42.useToast)(),
      {
        user: _v12
      } = (0, _v30.useEntityStore)(),
      _v13 = (0, _v52.getUserIdFromUri)(_v12?.uri);
    return (0, _v2.useEffect)(() => {
      _v0 && (_v4(!0), _v5({
        where: {
          userId: _v13
        },
        select: ["link"]
      }));
    }, [_v0]), (0, _v2.useEffect)(() => {
      _v7 && (_v4(!1), _v11({
        title: _v39.default.UploadFailed,
        status: "error"
      }));
    }, [_v7]), (0, _v2.useEffect)(() => {
      _v6?.link && _v0 && (_v4(!0), (0, _v84.putFileUpload)(_v6.link, _v0).then(() => {
        _v8({
          where: {
            userId: _v13
          },
          select: ["uri", "sizes"],
          query: {
            sizes: _v32.logoFetchOptions.sizes
          }
        });
      }).catch(() => {
        _v4(!1), _v11({
          title: _v39.default.UploadFailed,
          status: "error"
        });
      }));
    }, [_v6?.link]), (0, _v2.useEffect)(() => {
      if (_v9?.data) {
        _v4(!1);
        let _v0 = (0, _v84.findLogoIndex)(_v9.data, _v6?.link),
          _v1 = _v9.data[_v0];
        _v1?.sizes.length > 0 && (_v10(_v1), _v1 && _v1(_v1));
      }
    }, [_v9]), {
      isUploading: _v3
    };
  }
  var _v88 = _v0.i(0),
    _v89 = _v0.i(0),
    _v90 = _v0.i(0),
    _v91 = _v0.i(0);
  let _v92 = (0, _v15.rem)(20),
    _v93 = (0, _v15.rem)(16),
    _v94 = (0, _v15.rem)(544),
    _v95 = `repeating-conic-gradient(#dee4e9 0% 25%, transparent 0% 50%) 50% / ${(0, _v15.rem)(16)} ${(0, _v15.rem)(16)}`,
    _v96 = ({
      file: _v0,
      isSaving: _v1,
      onChange: _v2,
      onCancel: _v3,
      onSave: _v4,
      onCloseComplete: _v5
    }) => {
      let [_v6, _v7] = (0, _v2.useState)(null);
      return (0, _v2.useEffect)(() => {
        let _v0 = _v0 ? URL.createObjectURL(_v0) : null;
        return _v7(_v0), () => {
          _v0 && URL.revokeObjectURL(_v0);
        };
      }, [_v0]), (0, _v1.jsxs)(_v55.Modal, {
        isOpen: null !== _v0,
        onClose: _v3,
        onCloseComplete: _v5,
        closeOnEsc: !_v1,
        closeOnOverlayClick: !_v1,
        isCentered: !0,
        size: "lg",
        children: [(0, _v1.jsx)(_v57.ModalOverlay, {}), (0, _v1.jsxs)(_v56.ModalContent, {
          maxWidth: _v94,
          borderRadius: _v92,
          children: [(0, _v1.jsx)(_v89.ModalBody, {
            padding: (0, _v15.rem)(8),
            children: (0, _v1.jsx)(_v88.AspectRatio, {
              ratio: 1.5,
              width: "100%",
              borderRadius: _v93,
              overflow: "hidden",
              sx: {
                background: _v95
              },
              children: _v6 ? (0, _v1.jsx)(_v74.Image, {
                src: _v6,
                alt: _v39.default.Logo,
                width: "100%",
                height: "100%",
                objectFit: "contain"
              }) : (0, _v1.jsx)(_v5.Box, {
                width: "100%",
                height: "100%"
              })
            })
          }), (0, _v1.jsx)(_v90.ModalFooter, {
            paddingTop: (0, _v15.rem)(16),
            paddingBottom: (0, _v15.rem)(24),
            paddingX: (0, _v15.rem)(24),
            children: (0, _v1.jsxs)(_v7.Flex, {
              align: "center",
              gap: (0, _v15.rem)(12),
              width: "100%",
              children: [(0, _v1.jsx)(_v41.Button, {
                variant: "secondary",
                size: "md",
                leftIcon: (0, _v1.jsx)(_v91.Redo, {}),
                onClick: _v2,
                isDisabled: _v1,
                children: _v39.default.Change
              }), (0, _v1.jsxs)(_v7.Flex, {
                flex: "1",
                justify: "flex-end",
                align: "center",
                gap: (0, _v15.rem)(12),
                minWidth: 0,
                children: [(0, _v1.jsx)(_v41.Button, {
                  variant: "tertiary",
                  size: "md",
                  onClick: _v3,
                  isDisabled: _v1,
                  children: _v39.default.Cancel
                }), (0, _v1.jsx)(_v41.Button, {
                  variant: "primary",
                  size: "md",
                  onClick: _v4,
                  isLoading: _v1,
                  children: _v39.default.Save
                })]
              })]
            })
          })]
        })]
      });
    };
  var _v97 = _v0.i(0),
    _v98 = _v0.i(0),
    _v99 = _v0.i(0),
    _v100 = _v0.i(0),
    _v101 = _v0.i(0),
    _v102 = _v0.i(0);
  let _v103 = ({
    errorMessage: _v0
  }) => (0, _v1.jsxs)(_v6.Center, {
    width: {
      base: (0, _v15.rem)(131),
      md: (0, _v15.rem)(256)
    },
    height: {
      base: (0, _v15.rem)(59),
      md: (0, _v15.rem)(129)
    },
    shadow: "shadow-lg",
    my: (0, _v15.rem)(12),
    border: `${(0, _v15.rem)(1)} solid`,
    borderColor: "red.500",
    flexDir: "column",
    p: (0, _v15.rem)(30),
    textAlign: "center",
    borderRadius: (0, _v15.rem)(3),
    children: [(0, _v1.jsx)(_v102.CircleExclamation, {
      color: "red.500",
      height: (0, _v15.rem)(24),
      width: (0, _v15.rem)(24)
    }), (0, _v1.jsx)(_v78.Text, {
      variant: "body-xl",
      color: "red.500",
      children: _v0
    })]
  });
  var _v104 = _v0.i(0);
  let _v105 = () => (0, _v1.jsx)(_v6.Center, {
    width: {
      base: (0, _v15.rem)(131),
      md: (0, _v15.rem)(256)
    },
    height: {
      base: (0, _v15.rem)(59),
      md: (0, _v15.rem)(129)
    },
    shadow: "shadow-lg",
    my: (0, _v15.rem)(12),
    border: `${(0, _v15.rem)(1)} solid`,
    borderColor: "blue.500",
    borderRadius: (0, _v15.rem)(3),
    children: (0, _v1.jsx)(_v104.Spinner, {})
  });
  var _v106 = _v0.i(0);
  let _v107 = ({
      isCurrent: _v0,
      isRemovable: _v1,
      onDelete: _v2,
      src: _v3,
      onClick: _v4
    }) => (0, _v1.jsx)(_v5.Box, {
      p: (0, _v15.rem)(10),
      position: "relative",
      display: "inline-block",
      m: `${(0, _v15.rem)(12)} ${(0, _v15.rem)(10)} ${(0, _v15.rem)(12)} 0`,
      height: {
        base: (0, _v15.rem)(59),
        md: (0, _v15.rem)(129)
      },
      width: {
        base: (0, _v15.rem)(131),
        md: (0, _v15.rem)(256)
      },
      cursor: "pointer",
      borderRadius: (0, _v15.rem)(3),
      shadow: "shadow-sm",
      transition: "border 0.3s ease-out",
      border: `${(0, _v15.rem)(1)} solid`,
      borderColor: _v0 ? "blue.500" : "transparent",
      background: `url(${_v3}) center/contain no-repeat content-box`,
      onClick: _v4,
      children: _v0 && _v1 && (0, _v1.jsx)(_v14.Tooltip, {
        content: _v39.default.Remove,
        children: (0, _v1.jsx)(_v9.IconButton, {
          "aria-label": "Delete",
          position: "absolute",
          top: (0, _v15.rem)(-14),
          right: (0, _v15.rem)(-15),
          variant: "secondary",
          icon: (0, _v1.jsx)(_v106.CloseXSmall, {}),
          size: "xs",
          onClick: _v0 => {
            _v0.stopPropagation(), _v2();
          }
        })
      })
    }),
    _v108 = ({
      availableLogos: _v0,
      currentLogoIndex: _v1,
      originalIndex: _v2,
      errorMessage: _v3,
      isLoading: _v4,
      shouldAnimate: _v5 = !0,
      setCurrentLogoIndex: _v6,
      onLogoDelete: _v7
    }) => {
      let [_v8] = (0, _v101.useDeleteUserCustomlogo)(),
        {
          user: _v9
        } = (0, _v30.useEntityStore)(),
        _v10 = _v0.map((_v0, _v1) => {
          let _v2 = _v0.sizes[0]?.link.replace(/(mw=([^&]*))|(&mh=([^&]*))/g, "");
          return (0, _v1.jsx)(_v107, {
            onClick: () => _v6(_v1),
            src: _v2,
            isRemovable: _v0.uri.indexOf("customlogos") > -1 && _v1 !== _v2,
            logoData: _v0,
            isCurrent: _v1 === _v1,
            onDelete: () => {
              _v7(_v0.uri), _v8({
                where: {
                  userId: (0, _v52.getUserIdFromUri)(_v9?.uri),
                  logoId: (0, _v52.getLastIdFromUri)(_v0.uri)
                }
              });
            }
          }, _v0.uri);
        });
      _v4 && (_v10 = [(0, _v1.jsx)(_v105, {}, "loading-state")]), _v3 && (_v10 = [(0, _v1.jsx)(_v103, {
        errorMessage: _v3
      }, "error-state")]);
      let _v11 = !_v4 && !_v3;
      return (0, _v1.jsxs)(_v5.Box, {
        position: "relative",
        height: {
          base: (0, _v15.rem)(86),
          md: (0, _v15.rem)(153)
        },
        children: [(0, _v1.jsx)(_v5.Box, {
          display: "inline-block",
          whiteSpace: "nowrap",
          position: "absolute",
          transition: _v11 && _v5 ? "left 0.3s ease-out" : "none",
          left: {
            base: (0, _v15.rem)(12 - (_v11 ? _v1 : 0) * 140),
            md: (0, _v15.rem)(26 - (_v11 ? _v1 : 0) * 266)
          },
          height: {
            base: (0, _v15.rem)(70),
            md: (0, _v15.rem)(153)
          },
          children: _v10
        }), (0, _v1.jsx)(_v9.IconButton, {
          borderRadius: "50% !important",
          position: "absolute",
          top: "50%",
          left: (0, _v15.rem)(-15),
          transform: "translateY(-50%)",
          _active: {
            transform: "translateY(-50%)"
          },
          variant: "secondary",
          "aria-label": "Previous",
          display: _v11 && _v1 > 0 ? "flex" : "none",
          icon: (0, _v1.jsx)(_v99.ChevronLeftSmall, {}),
          onClick: () => {
            _v6(_v1 - 1);
          }
        }), (0, _v1.jsx)(_v9.IconButton, {
          borderRadius: "50% !important",
          position: "absolute",
          top: "50%",
          right: (0, _v15.rem)(-15),
          transform: "translateY(-50%)",
          _active: {
            transform: "translateY(-50%)"
          },
          variant: "secondary",
          "aria-label": "Previous",
          display: _v11 && _v1 < _v0.length - 1 ? "flex" : "none",
          icon: (0, _v1.jsx)(_v100.ChevronRightSmall, {}),
          onClick: () => {
            _v6(_v1 + 1);
          }
        })]
      });
    },
    _v109 = (0, _v15.rem)(8),
    _v110 = (0, _v15.rem)(8),
    _v111 = ({
      availableLogos: _v0,
      currentLogoIndex: _v1,
      originalIndex: _v2,
      isLoading: _v3,
      errorMessage: _v4,
      setCurrentLogoIndex: _v5,
      onLogoDelete: _v6
    }) => {
      let [_v7] = (0, _v101.useDeleteUserCustomlogo)(),
        {
          user: _v8
        } = (0, _v30.useEntityStore)();
      return _v4 ? (0, _v1.jsx)(_v103, {
        errorMessage: _v4
      }) : _v3 ? (0, _v1.jsx)(_v5.Box, {
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: _v110,
        width: "100%",
        children: Array.from({
          length: 4
        }).map((_v0, _v1) => (0, _v1.jsx)(_v88.AspectRatio, {
          ratio: 1.5,
          width: "100%",
          children: (0, _v1.jsx)(_v5.Box, {
            borderRadius: _v109,
            background: "fill-component"
          })
        }, _v1))
      }) : (0, _v1.jsx)(_v5.Box, {
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: _v110,
        width: "100%",
        children: _v0.map((_v0, _v1) => {
          let _v2 = _v0.sizes[0]?.link.replace(/(mw=([^&]*))|(&mh=([^&]*))/g, ""),
            _v3 = _v1 === _v1,
            _v4 = _v3 && _v0.uri.indexOf("customlogos") > -1 && _v1 !== _v2;
          return (0, _v1.jsxs)(_v5.Box, {
            position: "relative",
            children: [(0, _v1.jsx)(_v88.AspectRatio, {
              ratio: 1.5,
              width: "100%",
              children: (0, _v1.jsx)(_v5.Box, {
                as: "button",
                type: "button",
                borderRadius: _v109,
                borderWidth: "2px",
                borderStyle: "solid",
                borderColor: _v3 ? "stroke-focus" : "stroke",
                background: "fill-surface",
                cursor: "pointer",
                onClick: () => _v5(_v1),
                sx: {
                  backgroundImage: `url(${_v2})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundOrigin: "content-box",
                  padding: (0, _v15.rem)(8)
                }
              })
            }), _v4 && (0, _v1.jsx)(_v14.Tooltip, {
              content: _v39.default.Remove,
              children: (0, _v1.jsx)(_v9.IconButton, {
                "aria-label": _v39.default.Remove,
                position: "absolute",
                top: (0, _v15.rem)(-8),
                right: (0, _v15.rem)(-8),
                variant: "secondary",
                icon: (0, _v1.jsx)(_v106.CloseXSmall, {}),
                size: "xs",
                onClick: _v0 => {
                  _v0.stopPropagation(), _v6(_v0.uri), _v7({
                    where: {
                      userId: (0, _v52.getUserIdFromUri)(_v8?.uri),
                      logoId: (0, _v52.getLastIdFromUri)(_v0.uri)
                    }
                  });
                }
              })
            })]
          }, _v0.uri);
        })
      });
    },
    _v112 = ({
      availableLogos: _v0 = [],
      currentLogoIndex: _v1,
      originalIndex: _v2,
      onLogoDelete: _v3,
      handleImageUpload: _v4,
      errorMessage: _v5 = "",
      isLoadingLogos: _v6,
      setCurrentLogoIndex: _v7,
      shouldAnimate: _v8 = !0,
      uploadVariant: _v9 = "file-input",
      onUploadClick: _v10
    }) => {
      if ("image-uploader" === _v9) {
        let _v0 = _v6 || _v0.length > 0 || !!_v5;
        return (0, _v1.jsxs)(_v7.Flex, {
          flexDir: "column",
          gap: (0, _v15.rem)(16),
          p: (0, _v15.rem)(8),
          width: (0, _v15.rem)(260),
          maxHeight: (0, _v15.rem)(320),
          overflow: "hidden",
          children: [(0, _v1.jsx)(_v41.Button, {
            variant: "secondary",
            size: "md",
            width: "100%",
            flexShrink: 0,
            leftIcon: (0, _v1.jsx)(_v98.Upload, {}),
            isDisabled: _v6,
            onClick: _v10,
            children: _v39.default.UploadImage
          }), _v0 && (0, _v1.jsxs)(_v7.Flex, {
            flexDir: "column",
            gap: (0, _v15.rem)(8),
            flex: "1",
            minHeight: 0,
            children: [(0, _v1.jsx)(_v78.Text, {
              variant: "body-sm",
              color: "text-tertiary",
              children: _v39.default.PreviouslyUsed
            }), (0, _v1.jsx)(_v5.Box, {
              flex: "1",
              minHeight: 0,
              overflowY: "auto",
              children: (0, _v1.jsx)(_v111, {
                availableLogos: _v0,
                currentLogoIndex: _v1,
                originalIndex: _v2,
                isLoading: _v6,
                errorMessage: _v5,
                setCurrentLogoIndex: _v7,
                onLogoDelete: _v3
              })
            })]
          })]
        });
      }
      return (0, _v1.jsxs)(_v7.Flex, {
        flexDir: "column",
        overflow: "hidden",
        p: (0, _v15.rem)(20),
        width: {
          base: (0, _v15.rem)(250),
          md: (0, _v15.rem)(350)
        },
        children: [(0, _v1.jsxs)(_v7.Flex, {
          mb: "sm",
          justifyContent: "space-between",
          children: [(0, _v1.jsx)(_v54.Header, {
            size: "xs",
            children: _v39.default.Logo
          }), (0, _v1.jsx)(_v54.Header, {
            size: "xs",
            children: _v0.length > 0 && (0, _v1.jsx)("span", {
              children: _v39.default.LogoOutOf(_v1 + 1, _v0.length)
            })
          })]
        }), (0, _v1.jsxs)(_v7.Flex, {
          position: "relative",
          flexDirection: "column",
          children: [_v6 || _v0.length || _v5 ? (0, _v1.jsx)(_v108, {
            availableLogos: _v0,
            currentLogoIndex: _v1,
            originalIndex: _v2,
            onLogoDelete: _v3,
            errorMessage: _v5,
            isLoading: _v6,
            setCurrentLogoIndex: _v7,
            shouldAnimate: _v8
          }) : (0, _v1.jsx)(_v113, {}), (0, _v1.jsx)(_v97.FileInput, {
            variant: "secondary",
            accept: _v32.SUPPORTED_IMAGE_FILES,
            onChange: _v0 => {
              _v0.target?.files?.length && _v4(_v0.target.files[0]);
            },
            isDisabled: _v6,
            label: (0, _v1.jsxs)(_v6.Center, {
              width: {
                base: (0, _v15.rem)(180),
                md: (0, _v15.rem)(280)
              },
              gap: (0, _v15.rem)(8),
              children: [(0, _v1.jsx)(_v80.Image, {}), (0, _v1.jsx)(_v54.Header, {
                size: "xs",
                children: _v39.default.Upload
              })]
            })
          })]
        })]
      });
    },
    _v113 = () => (0, _v1.jsx)(_v7.Flex, {
      mb: (0, _v15.rem)(14),
      height: {
        base: (0, _v15.rem)(63),
        md: (0, _v15.rem)(139)
      },
      width: "100%",
      backgroundSize: `${(0, _v15.rem)(16)} ${(0, _v15.rem)(16)}`,
      backgroundPosition: `0 0, 0 ${(0, _v15.rem)(8)}, ${(0, _v15.rem)(8)} ${(0, _v15.rem)(-8)}, ${(0, _v15.rem)(-8)} 0`,
      justifyContent: "center",
      background: `repeating-conic-gradient(#dee4e9 0% 25%, transparent 0% 50%) 50% / ${(0, _v15.rem)(18)} ${(0, _v15.rem)(18)}`
    }),
    _v114 = ({
      onSelectLogoSource: _v0,
      onUnsetLogo: _v1,
      setUploadFile: _v2,
      setOriginalIndex: _v3,
      selectedIndex: _v4,
      originalIndex: _v5,
      availableLogos: _v6,
      isLoadingLogos: _v7,
      errorMessage: _v8,
      cacheKey: _v9,
      onDelete: _v10,
      uploadVariant: _v11,
      onUploadClick: _v12
    }) => {
      let _v13 = (0, _v2.useRef)(_v6.length),
        [_v14, _v15] = (0, _v2.useState)(!1);
      (0, _v2.useEffect)(() => {
        _v7 || _v14 || setTimeout(() => {
          _v15(!0);
        }, 500);
      }, [_v4]);
      let _v16 = (0, _v2.useCallback)(_v0 => {
        if (null !== _v0) {
          let _v0 = _v6[_v0];
          _v0 && _v0(_v0);
        }
      }, [_v6]);
      (0, _v2.useEffect)(() => {
        _v13.current ? _v6.length ? _v13.current > _v6.length && (_v4 < _v5 && _v3(_v5 - 1), _v16(_v4 < _v6.length ? _v4 : _v4 - 1)) : _v1() : 1 === _v6.length && (_v3(-1), _v16(0)), _v13.current = _v6.length;
      }, [_v6.length, _v1, _v5, _v16, _v4, _v3]);
      let {
        removeLogoFromCache: _v17
      } = _v86(_v9);
      return (0, _v1.jsx)(_v112, {
        errorMessage: _v8,
        isLoadingLogos: _v7,
        onLogoDelete: _v0 => {
          _v17(_v0), _v10?.(_v0);
        },
        availableLogos: _v6,
        originalIndex: _v5,
        currentLogoIndex: _v4,
        setCurrentLogoIndex: _v16,
        handleImageUpload: _v0 => {
          _v2(_v0), _v15(!1);
        },
        shouldAnimate: _v14,
        uploadVariant: _v11,
        onUploadClick: _v12
      });
    };
  var _v115 = _v0.i(0),
    _v116 = _v0.i(0),
    _v117 = _v0.i(0),
    _v118 = _v0.i(0),
    _v119 = _v0.i(0);
  function _v120() {
    let {
      innerWidth: _v0,
      innerHeight: _v1
    } = window;
    return {
      width: _v0,
      height: _v1,
      isMobileOrTablet: _v0 <= _v32.TABLET_SIZE || document.body.clientWidth <= _v32.TABLET_SIZE
    };
  }
  function _v121() {
    let [_v0, _v1] = (0, _v2.useState)(_v120());
    return (0, _v2.useEffect)(() => {
      let _v0 = () => {
        _v1(_v120());
      };
      return window.addEventListener("resize", _v0), () => window.removeEventListener("resize", _v0);
    }, []), {
      windowDimensions: _v0,
      canShowOverlay: () => !0
    };
  }
  let _v122 = ({
      selectedColor: _v0,
      handleOnChange: _v1,
      title: _v2,
      onSubmit: _v3
    }) => (0, _v1.jsxs)(_v7.Flex, {
      justifyContent: "space-between",
      alignItems: "center",
      mt: (0, _v15.rem)(25),
      children: [(0, _v1.jsx)(_v54.Header, {
        size: "xs",
        children: _v2
      }), (0, _v1.jsxs)(_v7.Flex, {
        alignItems: "center",
        children: [(0, _v1.jsx)(_v13.Paragraph, {
          pr: (0, _v15.rem)(10),
          size: "md",
          children: _v0?.toUpperCase()
        }), (0, _v1.jsx)(_v118.ColorPickerBrandKit, {
          onChange: _v1,
          color: _v0,
          onClose: () => _v3?.(_v0),
          productName: "registration",
          children: (0, _v1.jsx)(_v125, {
            color: _v0
          })
        })]
      })]
    }),
    _v123 = ({
      emailTemplate: _v0,
      emailToolBar: _v1,
      handleOnClick: _v2,
      dynamicTagRef: _v3
    }) => {
      let {
        dynamicTags: _v4,
        unTranslatedDynamicTags: _v5
      } = (() => {
        let [_v0, _v1] = (0, _v2.useState)([]),
          [_v2, _v3] = (0, _v2.useState)([]),
          {
            entityId: _v4,
            entityType: _v5
          } = (0, _v38.useConfigStore)(_v0 => _v0),
          [_v6, {
            data: _v7
          }] = (0, _v119.useGetLeadCaptureResourceIdFormLazy)();
        return (0, _v2.useEffect)(() => {
          _v4 && _v5 && _v6({
            where: {
              resourceId: _v4,
              resourceType: _v22.ENTITY_TO_PATH_MAP[_v5]
            },
            select: ["uuid", "customFields"]
          });
        }, [_v4, _v5, _v6]), (0, _v2.useEffect)(() => {
          let _v0 = _v7?.customFields?.filter(({
            name: _v0
          }) => _v0 !== _v32.EMAIL_ADDRESS).map(({
            name: _v0
          }) => _v0 in _v39.DYNAMIC_TAGS_MAP ? `${_v39.DYNAMIC_TAGS_MAP[_v0].label}` : `${_v0}`) || [];
          _v1([_v39.default.EntityTitle, _v39.default.TeamName, ..._v0]), _v3(["Webinar Title", "Team name", ...(_v7?.customFields?.filter(({
            name: _v0
          }) => _v0 !== _v32.EMAIL_ADDRESS).map(({
            name: _v0
          }) => _v0) || [])]);
        }, [_v7]), {
          dynamicTags: _v0,
          unTranslatedDynamicTags: _v2
        };
      })();
      return (0, _v1.jsxs)(_v5.Box, {
        mt: (0, _v15.rem)(30),
        children: [(0, _v1.jsx)(_v54.Header, {
          mb: (0, _v15.rem)(5),
          size: "xs",
          children: _v39.default.PersonalizedTags
        }), (0, _v1.jsx)(_v13.Paragraph, {
          color: "text-secondary",
          size: "md",
          children: _v39.default.PersonalizedTagsDescription
        }), (0, _v1.jsx)(_v7.Flex, {
          gap: (0, _v15.rem)(8),
          flexWrap: "wrap",
          mt: (0, _v15.rem)(20),
          ref: _v3,
          children: _v4.map((_v0, _v1) => (0, _v1.jsx)(_v116.Tag, {
            size: "md",
            onClick: () => (_v5[_v1], void _v2(_v0)),
            children: (0, _v1.jsx)(_v13.Paragraph, {
              fontSize: "body-md",
              cursor: "pointer",
              children: `{{${_v0}}}`
            })
          }, `${_v1}-${_v0}`))
        })]
      });
    },
    _v124 = ({
      title: _v0,
      values: _v1,
      selectedValue: _v2,
      handleSelect: _v3,
      addHTML: _v4 = !1
    }) => {
      let {
        windowDimensions: {
          width: _v5
        }
      } = _v121();
      return (0, _v1.jsxs)(_v7.Flex, {
        justifyContent: "space-between",
        alignItems: "center",
        mt: (0, _v15.rem)(25),
        children: [(0, _v1.jsx)(_v54.Header, {
          size: "xs",
          minW: (0, _v15.rem)(61),
          children: _v0
        }), (0, _v1.jsx)(_v7.Flex, {
          flex: 1,
          children: (0, _v1.jsx)(_v5.Box, {
            width: "100%",
            children: (0, _v1.jsx)(_v115.Select, {
              size: "md",
              value: _v2 ? [_v2] : [],
              items: _v1.map(_v0 => ({
                value: _v0,
                label: _v0
              })),
              onValueChange: _v0 => _v3(_v0.value[0]),
              children: _v0 => {
                let _v1;
                return (0, _v1.jsx)(_v115.SelectItem, {
                  display: "flex",
                  pointerEvents: _v0.value === _v32.EMAIL_TEXT_STYLE.MIXED ? "none" : "all",
                  opacity: _v0.value === _v32.EMAIL_TEXT_STYLE.MIXED ? .5 : 1,
                  children: (0, _v1.jsxs)(_v7.Flex, {
                    alignItems: "center",
                    children: [(0, _v1.jsx)(_v117.CheckmarkFilled, {
                      boxSize: (0, _v15.rem)(14),
                      mr: (0, _v15.rem)(10),
                      color: "blue.500",
                      visibility: _v2 === _v0.value ? "visible" : "hidden"
                    }), (0, _v1.jsx)(_v115.SelectItemText, {
                      children: (_v1 = _v0.label, _v4 ? (0, _v2.createElement)(_v32.EMAIL_TEXT_STYLE_VALUES[_v1], null, _v39.default.EmailTextStyle[_v1]) : _v39.default.EmailTextSize[_v1])
                    })]
                  })
                });
              }
            })
          })
        })]
      });
    },
    _v125 = ({
      color: _v0,
      ..._v1
    }) => (0, _v1.jsx)(_v5.Box, {
      borderRadius: "round",
      border: `${(0, _v15.rem)(1)} solid`,
      borderColor: "slate.100",
      background: _v0,
      boxSize: (0, _v15.rem)(24),
      cursor: "pointer",
      _hover: {
        borderColor: "blue.500"
      },
      ..._v1,
      children: _v1.children
    });
  var _v126 = _v0.i(0),
    _v127 = _v0.i(0);
  let _v128 = ({
      inline: _v0 = !1
    } = {}) => {
      let {
          emailState: _v1,
          dispatch: _v2
        } = (0, _v28.useEmailCustomization)(),
        [_v3, _v4] = (0, _v2.useState)(!1),
        [_v5, _v6] = (0, _v2.useState)(!0),
        [_v7, _v8] = (0, _v2.useState)(!0),
        {
          senderPolicyUrl: _v9,
          useReplyEmail: _v10,
          replyEmail: _v11,
          useSenderAddress: _v12,
          senderAddress: _v13 = "",
          useSenderPolicyUrl: _v14,
          emailToolbar: _v15
        } = _v1,
        [_v16, _v17] = (0, _v2.useState)(_v9),
        [_v18, _v19] = (0, _v2.useState)(_v11),
        _v20 = (0, _v2.useRef)(null),
        {
          hasEmailEditAccess: _v21
        } = (0, _v27.useEntityCapability)(),
        {
          sentRegistrationEmailLayoutChangeEvent: _v22
        } = (0, _v34.useAnalytics)(),
        _v23 = _v0 => () => {
          _v2({
            type: _v37.ACTION_TYPE.TOGGLE_SETTING_EMAIL,
            payload: _v0
          });
        },
        _v24 = (0, _v2.useCallback)(() => {
          let _v0 = !_v18 || (0, _v52.validateEmail)(_v18);
          _v8(_v0), (_v0 || !_v18) && (_v2({
            type: _v37.ACTION_TYPE.SET_FOOTER_EMAIL,
            payload: _v18 || ""
          }), _v22({
            actionName: _v36.BP_ACTION_NAMES.FOOTER_REPLY_EMAIL_ADDED
          }));
        }, [_v2, _v18]),
        _v25 = (0, _v2.useCallback)(() => {
          let _v0 = !_v16 || (0, _v72.isValidUrl)(_v16);
          if (_v6(_v0), _v0 || !_v16) {
            let _v0 = _v16 ? (0, _v72.appendProtocol)(_v16) : "";
            _v17(_v0), _v2({
              type: _v37.ACTION_TYPE.SET_FOOTER_POLICY,
              payload: _v0
            }), _v22({
              actionName: _v36.BP_ACTION_NAMES.FOOTER_PRIVACY_POLICY_ADDED
            });
          }
        }, [_v2, _v16]),
        _v26 = _v0 => {
          let _v1 = _v0.target.value;
          _v2({
            type: _v37.ACTION_TYPE.SET_FOOTER_ADDRESS,
            payload: _v1
          });
        };
      (0, _v25.default)(_v20, () => {
        _v3 && (_v24(), _v25(), _v4(!1));
      }, null, [_v24, _v25, _v3]), (0, _v2.useEffect)(() => {
        _v17(_v9), _v19(_v11), _v6(!0), _v8(!0);
      }, [_v15, _v3]);
      let _v27 = () => (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsxs)(_v129, {
          children: [(0, _v1.jsx)(_v78.Text, {
            variant: "body-md",
            children: _v39.default.FooterReplayMail
          }), (0, _v1.jsx)(_v58.Switch, {
            onChange: _v23(_v32.EMAIL_TOGGLE_MAP.FOOTER_REPLY_MAIL),
            size: "sm",
            isChecked: _v10,
            isDisabled: !_v21
          })]
        }), _v10 && (0, _v1.jsxs)(_v8.FormControl, {
          isInvalid: !_v7,
          children: [(0, _v1.jsx)(_v10.Input, {
            isDisabled: !_v21,
            onChange: _v0 => _v19(_v0.target.value),
            onBlur: _v24,
            placeholder: "email@address.com",
            maxLength: _v32.EMAIL_MAX_LENGTH.LINK,
            value: _v18 || ""
          }, "email-field"), (0, _v1.jsx)(_v69.FormErrorMessage, {
            children: _v39.default.PleaseEnterValidEmail
          })]
        }), (0, _v1.jsxs)(_v129, {
          children: [(0, _v1.jsx)(_v78.Text, {
            variant: "body-md",
            children: _v39.default.FooterCompanyAddress
          }), (0, _v1.jsx)(_v58.Switch, {
            onChange: _v23(_v32.EMAIL_TOGGLE_MAP.FOOTER_COMPANY_ADDRESS),
            size: "sm",
            isChecked: _v12,
            isDisabled: !_v21
          })]
        }), _v12 && (0, _v1.jsxs)(_v8.FormControl, {
          children: [(0, _v1.jsx)(_v10.Input, {
            isDisabled: !_v21,
            onChange: _v26,
            onBlur: () => {
              _v22({
                actionName: _v36.BP_ACTION_NAMES.FOOTER_COMPANY_ADDRESS_ADDED
              });
            },
            defaultValue: _v13 || "",
            value: _v13 || "",
            maxLength: _v32.EMAIL_MAX_LENGTH.FOOTER_ADDRESS
          }, "address-field"), (0, _v1.jsx)(_v8.FormHelperText, {
            children: (0, _v1.jsx)(_v40.CharCount, {
              value: _v13 || "",
              maxCharacters: _v32.EMAIL_MAX_LENGTH.FOOTER_ADDRESS
            })
          })]
        }), (0, _v1.jsxs)(_v129, {
          children: [(0, _v1.jsx)(_v78.Text, {
            variant: "body-md",
            children: _v39.default.FooterPolicyLink
          }), (0, _v1.jsx)(_v58.Switch, {
            onChange: _v23(_v32.EMAIL_TOGGLE_MAP.FOOTER_POLICY_LINK),
            size: "sm",
            isChecked: _v14,
            isDisabled: !_v21
          })]
        }), _v14 && (0, _v1.jsxs)(_v8.FormControl, {
          isInvalid: !_v5,
          children: [(0, _v1.jsx)(_v10.Input, {
            isDisabled: !_v21,
            onChange: _v0 => _v17(_v0.target.value),
            onBlur: _v25,
            placeholder: _v39.default.EnterValidURL,
            maxLength: _v32.EMAIL_MAX_LENGTH.LINK,
            value: _v16 || ""
          }, "link-field"), (0, _v1.jsx)(_v69.FormErrorMessage, {
            children: _v39.default.InvalidURL
          })]
        })]
      });
      return _v0 ? (0, _v1.jsxs)(_v5.Box, {
        mt: (0, _v15.rem)(25),
        ref: _v20,
        children: [(0, _v1.jsx)(_v54.Header, {
          size: "xs",
          mb: (0, _v15.rem)(10),
          children: _v39.default.Footer
        }), _v27()]
      }) : (0, _v1.jsxs)(_v75.Popover, {
        isOpen: _v3,
        children: [(0, _v1.jsx)(_v126.PopoverTrigger, {
          children: (0, _v1.jsxs)(_v7.Flex, {
            cursor: "pointer",
            mt: (0, _v15.rem)(25),
            justifyContent: "space-between",
            alignItems: "center",
            onClick: () => _v4(!_v3),
            children: [(0, _v1.jsx)(_v54.Header, {
              size: "xs",
              children: _v39.default.Footer
            }), (0, _v1.jsx)(_v7.Flex, {
              borderRadius: "input-xs",
              p: "xs",
              background: _v3 ? "stroke" : "",
              children: (0, _v1.jsx)(_v127.EditPencil, {})
            })]
          })
        }), (0, _v1.jsx)(_v77.PopoverContent, {
          children: (0, _v1.jsxs)(_v5.Box, {
            width: (0, _v15.rem)(320),
            pt: "px",
            pr: "lg",
            pb: "lg",
            ref: _v20,
            children: [(0, _v1.jsx)(_v129, {
              children: (0, _v1.jsx)(_v54.Header, {
                size: "xs",
                children: _v39.default.Footer
              })
            }), _v27()]
          })
        })]
      });
    },
    _v129 = _v0 => (0, _v1.jsx)(_v7.Flex, {
      justifyContent: "space-between",
      mb: (0, _v15.rem)(10),
      alignItems: "center",
      mt: (0, _v15.rem)(25),
      ..._v0,
      children: _v0.children
    }),
    _v130 = () => {
      let {
          emailState: _v0,
          dispatch: _v1
        } = (0, _v28.useEmailCustomization)(),
        {
          canAddPlayerLogo: _v2
        } = (0, _v33.useTeamStore)(),
        {
          hasEmailEditAccess: _v3
        } = (0, _v27.useEntityCapability)(),
        {
          sentRegistrationEmailLayoutChangeEvent: _v4
        } = (0, _v34.useAnalytics)(),
        _v5 = (0, _v38.useConfigStore)(_v0 => _v0.onNavigateToAttendeePage),
        [_v6, _v7] = (0, _v2.useState)(!1),
        [_v8, _v9] = (0, _v2.useState)(!1),
        {
          customLogoResponse: _v10,
          customLogoResponseError: _v11,
          originalIndex: _v12,
          setOriginalIndex: _v13,
          selectedLogoIndex: _v14,
          isLoadingLogos: _v15
        } = _v85(_v0),
        _v16 = (0, _v2.useCallback)(_v0 => {
          _v1({
            type: _v37.ACTION_TYPE.SET_CUSTOM_LOGO_IMAGE,
            payload: (0, _v84.getCustomLogoImagePayload)(_v0)
          }), _v4({
            actionName: _v36.BP_ACTION_NAMES.LOGO_ADDED
          });
        }, [_v1]),
        [_v17, _v18] = (0, _v2.useState)(),
        {
          isUploading: _v19
        } = _v87(_v17, _v16, _v32.EMAIL_LOGOS_CACHE_KEY),
        _v20 = () => _v1({
          type: _v37.ACTION_TYPE.SET_CUSTOM_LOGO_IMAGE,
          payload: {
            url: ""
          }
        }),
        _v21 = !!_v0.customLogo?.url,
        _v22 = () => {
          _v2 && _v7(!0);
        },
        _v23 = (0, _v2.useRef)(null),
        [_v24, _v25] = (0, _v2.useState)(null),
        [_v26, _v27] = (0, _v2.useState)(!1),
        _v28 = () => _v23.current?.click(),
        _v29 = () => _v25(null),
        _v30 = (0, _v2.useRef)(!1);
      return (0, _v2.useEffect)(() => {
        _v30.current && !_v19 && (_v25(null), _v27(!1)), _v30.current = _v19;
      }, [_v19]), (0, _v1.jsxs)(_v68.Panel, {
        isVisible: !0,
        background: "fill-surface",
        borderRadius: "md",
        overflow: "hidden",
        width: "100%",
        maxWidth: (0, _v15.rem)(320),
        sx: {
          minHeight: "100%"
        },
        children: [(0, _v1.jsx)(_v68.PanelHeader, {
          px: (0, _v15.rem)(16),
          pt: (0, _v15.rem)(24),
          pb: (0, _v15.rem)(4),
          children: (0, _v1.jsx)(_v54.Header, {
            size: "md",
            children: _v39.default.General
          })
        }), (0, _v1.jsxs)(_v68.PanelBody, {
          px: (0, _v15.rem)(16),
          pt: 0,
          pb: (0, _v15.rem)(24),
          children: [(0, _v1.jsx)(_v122, {
            handleOnChange: _v0 => {
              (0, _v52.isValidHex)(_v0) && _v1({
                type: _v37.ACTION_TYPE.SET_COLOR,
                payload: _v0
              });
            },
            selectedColor: _v0.accentColor || "",
            title: _v39.default.AccentColor,
            onSubmit: () => _v4({
              actionName: _v36.BP_ACTION_NAMES.ACCENT_COLOR_CHANGED
            })
          }), (0, _v1.jsxs)(_v5.Box, {
            mt: (0, _v15.rem)(12),
            children: [(0, _v1.jsx)(_v54.Header, {
              size: "xs",
              mb: (0, _v15.rem)(10),
              children: _v39.default.Logo
            }), (0, _v1.jsxs)(_v75.Popover, {
              placement: "bottom-start",
              isLazy: !0,
              isOpen: _v6,
              onClose: () => _v7(!1),
              children: [(0, _v1.jsx)(_v76.PopoverAnchor, {
                children: _v21 ? (0, _v1.jsxs)(_v7.Flex, {
                  align: "center",
                  gap: (0, _v15.rem)(12),
                  py: (0, _v15.rem)(8),
                  pl: (0, _v15.rem)(8),
                  pr: (0, _v15.rem)(12),
                  width: "100%",
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderColor: "input-stroke",
                  borderRadius: (0, _v15.rem)(12),
                  backgroundColor: "fill-surface",
                  cursor: _v2 ? "pointer" : "default",
                  onClick: _v22,
                  children: [(0, _v1.jsx)(_v74.Image, {
                    src: _v0.customLogo?.url ?? void 0,
                    alt: _v39.default.Logo,
                    boxSize: (0, _v15.rem)(48),
                    objectFit: "contain",
                    borderRadius: (0, _v15.rem)(8),
                    backgroundColor: "background",
                    flexShrink: 0
                  }), (0, _v1.jsx)(_v5.Box, {
                    flex: "1",
                    minW: 0
                  }), (0, _v1.jsx)(_v9.IconButton, {
                    "aria-label": _v39.default.Remove,
                    icon: (0, _v1.jsx)(_v79.CloseX, {}),
                    variant: "tertiary",
                    size: "sm",
                    isDisabled: !_v2,
                    onClick: _v0 => {
                      _v0.stopPropagation(), _v2 && _v20();
                    }
                  })]
                }) : (0, _v1.jsxs)(_v5.Box, {
                  as: "button",
                  type: "button",
                  display: "flex",
                  alignItems: "center",
                  gap: (0, _v15.rem)(12),
                  py: (0, _v15.rem)(8),
                  pl: (0, _v15.rem)(8),
                  pr: (0, _v15.rem)(12),
                  width: "100%",
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderColor: "input-stroke",
                  borderRadius: (0, _v15.rem)(12),
                  backgroundColor: "fill-surface",
                  textAlign: "left",
                  cursor: _v2 ? "pointer" : "not-allowed",
                  opacity: _v2 ? 1 : .6,
                  disabled: !_v2,
                  onClick: _v22,
                  children: [(0, _v1.jsx)(_v7.Flex, {
                    align: "center",
                    justify: "center",
                    boxSize: (0, _v15.rem)(48),
                    borderRadius: (0, _v15.rem)(8),
                    backgroundColor: "fill-component",
                    flexShrink: 0,
                    children: (0, _v1.jsx)(_v80.Image, {
                      color: "text-secondary"
                    })
                  }), (0, _v1.jsxs)(_v7.Flex, {
                    direction: "column",
                    gap: (0, _v15.rem)(2),
                    children: [(0, _v1.jsx)(_v78.Text, {
                      variant: "body-md",
                      fontFamily: "heading",
                      color: "text-primary",
                      children: _v39.default.SelectLogo
                    }), (0, _v1.jsx)(_v78.Text, {
                      variant: "body-sm",
                      color: "text-secondary",
                      children: _v39.default.LogoFormatHint
                    })]
                  })]
                })
              }), (0, _v1.jsx)(_v77.PopoverContent, {
                borderRadius: "sm",
                children: (0, _v1.jsx)(_v114, {
                  uploadVariant: "image-uploader",
                  onUploadClick: _v28,
                  onUnsetLogo: _v20,
                  onSelectLogoSource: _v16,
                  selectedIndex: _v14 || 0,
                  originalIndex: void 0 === _v12 ? -1 : _v12,
                  setOriginalIndex: _v13,
                  availableLogos: void 0 === _v14 || _v15 ? [] : _v10?.items,
                  isLoadingLogos: _v15 || void 0 === _v14 || _v19,
                  setUploadFile: _v18,
                  errorMessage: _v11,
                  cacheKey: _v32.EMAIL_LOGOS_CACHE_KEY
                })
              })]
            }), (0, _v1.jsx)("input", {
              ref: _v23,
              type: "file",
              accept: _v32.SUPPORTED_IMAGE_FILES,
              hidden: !0,
              onChange: _v0 => {
                let _v1 = _v0.target.files?.[0];
                _v0.target.value = "", _v1 && (_v7(!1), _v25(_v1));
              }
            }), (0, _v1.jsx)(_v96, {
              file: _v24,
              isSaving: _v26,
              onChange: _v28,
              onCancel: _v29,
              onSave: () => {
                _v24 && (_v27(!0), _v18(_v24));
              },
              onCloseComplete: _v29
            }), (0, _v1.jsx)(_v13.Paragraph, {
              size: "sm",
              color: "text-secondary",
              mt: (0, _v15.rem)(12),
              children: (0, _v20.translate)({
                singular: "Set the default accent color and logo for new events in registration settings. Changes here apply to this event only.",
                dictionary: {
                  es: {
                    singular: "Establece el color de acento y el logotipo predeterminado para nuevos eventos en la configuración de registro. Los cambios aquí se aplican solo a este evento."
                  },
                  "de-DE": {
                    singular: "Legen Sie die Standard-Akzentfarbe und das Logo für neue Veranstaltungen in den Registrierungseinstellungen fest. Änderungen hier gelten nur für diese Veranstaltung."
                  },
                  "fr-FR": {
                    singular: "Définissez la couleur d'accent et le logo par défaut pour les nouveaux événements dans les paramètres d'inscription. Les modifications apportées ici s'appliquent uniquement à cet événement."
                  },
                  "ja-JP": {
                    singular: "登録設定で、新しいイベントのデフォルトのアクセントカラーとロゴを設定します。ここで行った変更はこのイベントにのみ適用されます。"
                  },
                  "ko-KR": {
                    singular: "등록 설정에서 새 이벤트의 기본 강조 색상과 로고를 설정하세요. 여기에서 변경한 내용은 이 이벤트에만 적용됩니다."
                  },
                  "pt-BR": {
                    singular: "Defina a cor de destaque padrão e o logotipo para novos eventos nas configurações de inscrição. As alterações feitas aqui se aplicam apenas a este evento."
                  },
                  "zh-CN": {
                    singular: "在注册设置中为新活动设置默认强调色和徽标。此处所做的更改仅适用于此活动。"
                  }
                }
              })
            })]
          }), _v3 && (0, _v1.jsxs)(_v1.Fragment, {
            children: [(0, _v1.jsx)(_v5.Box, {
              borderTop: `${(0, _v15.rem)(1)} solid`,
              borderColor: "stroke",
              mt: (0, _v15.rem)(24)
            }), (0, _v1.jsx)(_v128, {
              inline: !0
            })]
          }), !_v3 && !_v8 && (0, _v1.jsx)(_v3.Alert, {
            mt: (0, _v15.rem)(20),
            onClose: () => _v9(!0),
            children: (0, _v1.jsx)(_v4.AlertDescription, {
              children: (0, _v20.translate)({
                singular: "Text customization is currently unavailable. If you prefer to send an email on your own, you can {LINK}export the list of attendees{/LINK}.",
                replacements: {
                  LINK: _v0 => (0, _v1.jsx)(_v12.Link, {
                    onClick: _v5,
                    children: _v0
                  })
                },
                dictionary: {
                  es: {
                    singular: "La personalización del texto no está disponible actualmente. Si prefiere enviar un correo electrónico por su cuenta, puede {LINK}exportar la lista de asistentes{/LINK}."
                  },
                  "de-DE": {
                    singular: "Die Textanpassung ist derzeit nicht verfügbar. Wenn du lieber selbst eine E-Mail versenden möchtest, kannst du die {LINK}Teilnehmerliste exportieren{/LINK}."
                  },
                  "fr-FR": {
                    singular: "La personnalisation du texte n'est pas disponible actuellement. Si vous préférez envoyer vous-même un e-mail, vous pouvez {LINK}exporter la liste des participants{/LINK}."
                  },
                  "ja-JP": {
                    singular: "現在、テキストのカスタマイズはできません。自分でメールを送信したい場合は、{LINK}参加者リストをエクスポート{/LINK}できます。"
                  },
                  "ko-KR": {
                    singular: "커스텀 텍스트는 현재 이용할 수 없습니다.이메일을 직접 보내려면 {LINK}참석자 목록 내보내기{/LINK}가 가능합니다."
                  },
                  "pt-BR": {
                    singular: "A personalização de texto não está disponível no momento. Se preferir enviar um e-mail por conta própria, você pode {LINK}exportar a lista de participantes{/LINK}."
                  },
                  "zh-CN": {
                    singular: "文本定制功能目前不可用。如果您希望自行发送电子邮件，可以{LINK}导出出席者列表{/LINK}。"
                  }
                }
              })
            })
          })]
        })]
      });
    };
  var _v131 = _v0.i(0);
  let _v132 = () => {
      let {
          emailState: _v0,
          dispatch: _v1
        } = (0, _v28.useEmailCustomization)(),
        {
          teamName: _v2,
          canAddPlayerLogo: _v3,
          isLoading: _v4
        } = (0, _v33.useTeamStore)(),
        [_v5, _v6] = (0, _v2.useState)(!1),
        [_v7, _v8] = (0, _v2.useState)(!1),
        _v9 = (0, _v2.useRef)(null),
        _v10 = (0, _v2.useRef)(null),
        {
          hasEmailEditAccess: _v11
        } = (0, _v27.useEntityCapability)(),
        [_v12, _v13] = (0, _v2.useState)(!_v11),
        _v14 = (0, _v38.useConfigStore)(_v0 => _v0.onNavigateToAttendeePage),
        {
          sentRegistrationEmailLayoutChangeEvent: _v15
        } = (0, _v34.useAnalytics)();
      (0, _v25.default)([_v9, _v10], () => _v8(!1));
      let {
          customLogoResponse: _v16,
          customLogoResponseError: _v17,
          originalIndex: _v18,
          setOriginalIndex: _v19,
          selectedLogoIndex: _v20,
          isLoadingLogos: _v21
        } = _v85(_v0),
        _v22 = (0, _v2.useCallback)(_v0 => {
          _v1({
            type: _v37.ACTION_TYPE.SET_CUSTOM_LOGO_IMAGE,
            payload: (0, _v84.getCustomLogoImagePayload)(_v0)
          }), _v15({
            actionName: _v36.BP_ACTION_NAMES.LOGO_ADDED
          });
        }, [_v1]),
        [_v23, _v24] = (0, _v2.useState)(),
        {
          isUploading: _v25
        } = _v87(_v23, _v22, _v32.EMAIL_LOGOS_CACHE_KEY);
      return (0, _v2.useEffect)(() => {
        _v13(!_v11);
      }, [_v11]), (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v54.Header, {
          mb: (0, _v15.rem)(30),
          size: "md",
          children: _v39.default.General
        }), _v11 && (0, _v1.jsxs)(_v5.Box, {
          mb: (0, _v15.rem)(0),
          children: [(0, _v1.jsx)(_v54.Header, {
            mb: "sm",
            size: "xs",
            children: _v39.default.FromGeneral
          }), (0, _v1.jsxs)(_v8.FormControl, {
            position: "relative",
            children: [(0, _v1.jsx)(_v10.Input, {
              isDisabled: !_v11,
              maxLength: _v32.EMAIL_MAX_LENGTH.FROM,
              value: _v0.from,
              placeholder: _v4 ? _v39.default.Loading : "",
              onFocus: () => {
                _v6(!0);
              },
              onBlur: () => {
                _v6(!1), _v0.from || _v1({
                  type: _v37.ACTION_TYPE.SET_FROM,
                  payload: _v2 || _v32.VIMEO
                }), _v15({
                  actionName: _v36.BP_ACTION_NAMES.FROM_TEXT_CHANGED
                });
              },
              size: "md",
              onChange: _v0 => {
                _v1({
                  type: _v37.ACTION_TYPE.SET_FROM,
                  payload: _v0.target.value
                });
              }
            }), (0, _v1.jsx)(_v8.FormHelperText, {
              position: "absolute",
              bottom: (0, _v15.rem)(-20),
              visibility: _v5 ? "visible" : "hidden",
              children: (0, _v1.jsx)(_v40.CharCount, {
                value: _v0.from,
                maxCharacters: _v32.EMAIL_MAX_LENGTH.FROM
              })
            })]
          })]
        }), (0, _v1.jsx)(_v122, {
          handleOnChange: _v0 => {
            (0, _v52.isValidHex)(_v0) && _v1 && _v1({
              type: _v37.ACTION_TYPE.SET_COLOR,
              payload: _v0
            });
          },
          selectedColor: _v0.accentColor || "",
          title: _v39.default.AccentColor,
          onSubmit: () => {
            _v15({
              actionName: _v36.BP_ACTION_NAMES.ACCENT_COLOR_CHANGED
            });
          }
        }), (0, _v1.jsxs)(_v7.Flex, {
          onKeyDown: _v0 => {
            _v0.key === _v32.KEY_CODES.ESCAPE && (_v0.preventDefault(), _v0.stopPropagation(), _v8(!1));
          },
          justifyContent: "space-between",
          alignItems: "center",
          mt: (0, _v15.rem)(25),
          children: [(0, _v1.jsx)(_v54.Header, {
            size: "xs",
            children: _v39.default.Logo
          }), (0, _v1.jsxs)(_v75.Popover, {
            placement: "bottom-start",
            isLazy: !0,
            isOpen: _v7,
            children: [(0, _v1.jsx)(_v126.PopoverTrigger, {
              children: (0, _v1.jsx)("div", {
                ref: _v9,
                children: _v0.customLogo?.url ? (0, _v1.jsx)(_v5.Box, {
                  border: `${(0, _v15.rem)(1)} solid`,
                  borderColor: "stroke",
                  borderRadius: "xs",
                  overflow: "hidden",
                  height: (0, _v15.rem)(32),
                  cursor: _v3 ? "pointer" : "not-allowed",
                  opacity: _v3 ? 1 : .8,
                  onClick: () => _v3 && _v8(!_v7),
                  children: (0, _v1.jsx)(_v5.Box, {
                    as: "img",
                    objectFit: "contain",
                    src: _v0.customLogo.url,
                    height: (0, _v15.rem)(32),
                    width: (0, _v15.rem)(56),
                    alt: _v39.default.Logo
                  })
                }) : (0, _v1.jsxs)(_v7.Flex, {
                  alignItems: "center",
                  cursor: _v3 ? "pointer" : "not-allowed",
                  opacity: _v3 ? 1 : .5,
                  ref: _v9,
                  onClick: () => _v3 && _v8(!_v7),
                  children: [(0, _v1.jsx)(_v13.Paragraph, {
                    mr: (0, _v15.rem)(10),
                    size: "md",
                    children: _v39.default.Add
                  }), (0, _v1.jsx)(_v131.PlusCircle, {
                    boxSize: (0, _v15.rem)(28)
                  })]
                })
              })
            }), (0, _v1.jsx)(_v77.PopoverContent, {
              borderRadius: "sm",
              children: (0, _v1.jsx)("div", {
                ref: _v10,
                children: (0, _v1.jsx)(_v114, {
                  onUnsetLogo: () => _v1({
                    type: _v37.ACTION_TYPE.SET_CUSTOM_LOGO_IMAGE,
                    payload: {
                      url: ""
                    }
                  }),
                  onSelectLogoSource: _v22,
                  selectedIndex: _v20 || 0,
                  originalIndex: void 0 === _v18 ? -1 : _v18,
                  setOriginalIndex: _v19,
                  availableLogos: void 0 === _v20 || _v21 ? [] : _v16?.items,
                  isLoadingLogos: _v21 || void 0 === _v20 || _v25,
                  setUploadFile: _v24,
                  errorMessage: _v17,
                  cacheKey: _v32.EMAIL_LOGOS_CACHE_KEY
                })
              })
            })]
          })]
        }), _v11 && (0, _v1.jsx)(_v128, {}), _v12 && (0, _v1.jsx)(_v3.Alert, {
          mt: (0, _v15.rem)(20),
          onClose: () => _v13(!1),
          children: (0, _v1.jsx)(_v4.AlertDescription, {
            children: (0, _v20.translate)({
              singular: "Text customization is currently unavailable. If you prefer to send an email on your own, you can {LINK}export the list of attendees{/LINK}.",
              replacements: {
                LINK: _v0 => (0, _v1.jsx)(_v12.Link, {
                  onClick: _v14,
                  children: _v0
                })
              },
              dictionary: {
                es: {
                  singular: "La personalización del texto no está disponible actualmente. Si prefiere enviar un correo electrónico por su cuenta, puede {LINK}exportar la lista de asistentes{/LINK}."
                },
                "de-DE": {
                  singular: "Die Textanpassung ist derzeit nicht verfügbar. Wenn du lieber selbst eine E-Mail versenden möchtest, kannst du die {LINK}Teilnehmerliste exportieren{/LINK}."
                },
                "fr-FR": {
                  singular: "La personnalisation du texte n'est pas disponible actuellement. Si vous préférez envoyer vous-même un e-mail, vous pouvez {LINK}exporter la liste des participants{/LINK}."
                },
                "ja-JP": {
                  singular: "現在、テキストのカスタマイズはできません。自分でメールを送信したい場合は、{LINK}参加者リストをエクスポート{/LINK}できます。"
                },
                "ko-KR": {
                  singular: "커스텀 텍스트는 현재 이용할 수 없습니다.이메일을 직접 보내려면 {LINK}참석자 목록 내보내기{/LINK}가 가능합니다."
                },
                "pt-BR": {
                  singular: "A personalização de texto não está disponível no momento. Se preferir enviar um e-mail por conta própria, você pode {LINK}exportar a lista de participantes{/LINK}."
                },
                "zh-CN": {
                  singular: "文本定制功能目前不可用。如果您希望自行发送电子邮件，可以{LINK}导出出席者列表{/LINK}。"
                }
              }
            })
          })
        })]
      });
    },
    _v133 = ({
      dynamicTagRef: _v0
    }) => {
      let {
          emailState: _v1,
          dispatch: _v2
        } = (0, _v28.useEmailCustomization)(),
        {
          sentRegistrationEmailLayoutChangeEvent: _v3
        } = (0, _v34.useAnalytics)();
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v54.Header, {
          size: "md",
          mb: (0, _v15.rem)(5),
          children: _v39.default.SubjectGeneral
        }), (0, _v1.jsx)(_v123, {
          emailTemplate: _v1.emailTemplateType,
          emailToolBar: _v32.EMAIL_TOOLBAR_TYPES.SUBJECT,
          handleOnClick: _v0 => {
            let _v1 = document.getElementById(`${_v1.emailTemplateType.toLowerCase()}-email-subject`),
              _v2 = `{{${_v0}}}`,
              _v3 = "",
              _v4 = 0;
            if (_v1.selectionStart || 0 == _v1.selectionStart) {
              let _v0 = _v1.selectionStart;
              _v4 = _v1.selectionEnd || 0, _v3 = _v1.value.substring(0, _v0) + _v2 + _v1.value.substring(_v4, _v1.value.length);
            } else _v3 += _v2;
            _v3.length <= _v32.EMAIL_MAX_LENGTH.SUBJECT && (_v2({
              type: _v37.ACTION_TYPE.SET_SUBJECT,
              payload: {
                text: _v3,
                emailTab: _v1.emailTemplateType
              }
            }), _v3({
              actionName: _v36.BP_ACTION_NAMES.DYNAMIC_TAGS_ADDED_TO_SUBJECT,
              type: _v36.BP_TYPE[_v1.emailTemplateType]
            }), _v1.focus(), _v4 === _v1.value.length && setTimeout(() => {
              _v1.scrollLeft = _v3.length;
            }, 100));
          },
          dynamicTagRef: _v0
        })]
      });
    };
  var _v134 = _v0.i(0),
    _v135 = _v0.i(0),
    _v136 = _v0.i(0),
    _v137 = _v0.i(0),
    _v138 = _v0.i(0),
    _v139 = _v0.i(0),
    _v140 = _v0.i(0);
  let _v141 = _v0 => {
      let {
        LEFT: _v1,
        CENTER: _v2,
        RIGHT: _v3
      } = _v32.EMAIL_TEXT_FORMAT;
      return _v0?.isActive({
        textAlign: _v1
      }) ? _v1 : _v0?.isActive({
        textAlign: _v2
      }) ? _v2 : _v0?.isActive({
        textAlign: _v3
      }) ? _v3 : null;
    },
    _v142 = ({
      editorStates: _v0
    }) => {
      let {
          emailState: _v1,
          dispatch: _v2
        } = (0, _v28.useEmailCustomization)(),
        {
          emailToolbar: _v3,
          emailTemplateType: _v4
        } = _v1,
        {
          sentRegistrationEmailLayoutChangeEvent: _v5,
          sentTriggerHelpAction: _v6
        } = (0, _v34.useAnalytics)(),
        _v7 = _v3 === _v32.EMAIL_TOOLBAR_TYPES.BODY || _v3 === _v32.EMAIL_TOOLBAR_TYPES.TITLE,
        _v8 = _v7 ? _v0[_v4][_v3] : null,
        _v9 = _v141(_v8),
        _v10 = (_v0 => {
          let {
            NUMBERED: _v1,
            BULLETED: _v2
          } = _v32.EMAIL_LIST_FORMAT;
          return _v0?.isActive(_v1) ? _v1 : _v0?.isActive(_v2) ? _v2 : null;
        })(_v8),
        _v11 = _v8?.getAttributes("textStyle").color || "#000000",
        _v12 = _v8?.state.selection.empty,
        [_v13, _v14] = (0, _v2.useState)({
          from: 0,
          to: 0
        }),
        [_v15, _v16] = (0, _v2.useState)(!1),
        _v17 = (0, _v2.useRef)(null),
        _v18 = (0, _v2.useRef)(null),
        _v19 = (_v0 => {
          let {
              BOLD: _v1,
              ITALIC: _v2,
              UNDERLINE: _v3,
              MIXED: _v4,
              REGULAR: _v5
            } = _v32.EMAIL_TEXT_STYLE,
            _v6 = _v0?.isActive(_v1.toLowerCase()),
            _v7 = _v0?.isActive(_v2.toLowerCase()),
            _v8 = _v0?.isActive(_v3.toLowerCase());
          return (_v6 ? _v7 || _v8 : _v7 && _v8) ? _v4 : _v6 ? _v1 : _v7 ? _v2 : _v8 ? _v3 : _v5;
        })(_v8);
      (0, _v25.default)([_v17, _v18], () => _v16(!1));
      let [_v20, _v21] = (0, _v2.useState)(!1),
        _v22 = (0, _v2.useRef)(null),
        _v23 = (0, _v2.useRef)(null),
        _v24 = (_v0 => {
          let {
            HUGE: _v1,
            EXTRA_LARGE: _v2,
            LARGE: _v3,
            REGULAR: _v4
          } = _v32.EMAIL_TEXT_SIZE;
          switch (_v0?.getAttributes("textStyle").fontSize) {
            case _v32.EMAIL_TEXT_SIZE_VALUES[_v1]:
              return _v1;
            case _v32.EMAIL_TEXT_SIZE_VALUES[_v2]:
              return _v2;
            case _v32.EMAIL_TEXT_SIZE_VALUES[_v3]:
              return _v3;
            default:
              return _v4;
          }
        })(_v8);
      (0, _v25.default)([_v22, _v23], () => _v21(!1));
      let {
        windowDimensions: {
          width: _v25
        }
      } = _v121();
      (0, _v2.useEffect)(() => {
        _v16(!1), _v21(!1);
      }, [_v25]);
      let _v26 = _v0 => () => {
          let _v0 = "",
            _v1 = _v12 ? _v8?.chain().selectAll().focus() : _v8?.chain().focus();
          _v141(_v8) === _v0 ? _v1?.unsetTextAlign().run() : (_v0 = _v0, _v1?.setTextAlign(_v0).run()), _v2({
            type: _v3 === _v32.EMAIL_TOOLBAR_TYPES.TITLE ? _v37.ACTION_TYPE.SET_HEADER_TEXT_ALIGN : _v37.ACTION_TYPE.SET_BODY_TEXT_ALIGN,
            payload: {
              text: _v0,
              emailTab: _v4
            }
          });
        },
        _v27 = _v0 => () => {
          _v2({
            type: _v3 === _v32.EMAIL_TOOLBAR_TYPES.TITLE ? _v37.ACTION_TYPE.SET_HEADER_TEXT_FORMAT : _v37.ACTION_TYPE.SET_BODY_TEXT_FORMAT,
            payload: {
              text: _v0,
              emailTab: _v4
            }
          }), _v0 === _v32.EMAIL_LIST_FORMAT.NUMBERED ? _v8?.chain().focus().toggleOrderedList().run() : _v8?.chain().focus().toggleBulletList().run();
        };
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v54.Header, {
          size: "md",
          mb: (0, _v15.rem)(5),
          children: _v39.default.Text
        }), (0, _v1.jsx)(_v13.Paragraph, {
          size: "md",
          color: "text-secondary",
          children: (0, _v20.translate)({
            singular: "Tip: Keep your email simple, short, and non-promotional. {LINK}Learn more{/LINK}",
            replacements: {
              LINK: _v0 => (0, _v1.jsx)(_v12.Link, {
                color: "text-secondary",
                target: "_blank",
                href: _v32.EMAIL_TEXT_TIP_LINK,
                onClick: () => {
                  _v6();
                },
                children: _v0
              })
            },
            dictionary: {
              "fr-FR": {
                singular: "Conseil : créez une adresse e-mail simple, courte et non publicitaire. {LINK}En savoir plus{/LINK}"
              },
              "ja-JP": {
                singular: "ヒント：Eメールは短くシンプルに、プロモーション目的な内容にならないようにしましょう。{LINK}詳細はこちら{/LINK}"
              },
              "ko-KR": {
                singular: "팁: 이메일을 홍보성 메시지 없이 짧고 간결하게 유지하세요. {LINK}자세히 보기{/LINK}"
              },
              "zh-CN": {
                singular: "提示：保持电子邮件简单、简短且不包含促销内容。{LINK}了解更多{/LINK}"
              }
            }
          })
        }), (0, _v1.jsx)(_v124, {
          title: _v39.default.Size,
          isActive: _v20,
          handleDropDownClick: () => _v21(!_v20),
          dropDownRef: _v22,
          dropDownContentRef: _v23,
          values: Object.keys(_v32.EMAIL_TEXT_SIZE_VALUES),
          selectedValue: _v24,
          handleSelect: _v0 => {
            _v2({
              type: _v3 === _v32.EMAIL_TOOLBAR_TYPES.TITLE ? _v37.ACTION_TYPE.SET_HEADER_TEXT_SIZE : _v37.ACTION_TYPE.SET_BODY_TEXT_SIZE,
              payload: {
                text: _v0,
                emailTab: _v4
              }
            });
            let _v1 = _v12 ? _v8?.chain().selectAll().focus() : _v8?.chain().focus();
            _v1?.setFontSize(_v32.EMAIL_TEXT_SIZE_VALUES[_v0]).run(), _v21(!1);
          }
        }), (0, _v1.jsx)(_v124, {
          title: _v39.default.Style,
          isActive: _v15,
          handleDropDownClick: () => _v16(!_v15),
          dropDownRef: _v17,
          dropDownContentRef: _v18,
          values: Object.keys(_v32.EMAIL_TEXT_STYLE_VALUES),
          selectedValue: _v19,
          handleSelect: _v0 => {
            _v2({
              type: _v3 === _v32.EMAIL_TOOLBAR_TYPES.TITLE ? _v37.ACTION_TYPE.SET_HEADER_TEXT_STYLE : _v37.ACTION_TYPE.SET_BODY_TEXT_STYLE,
              payload: {
                text: _v0,
                emailTab: _v4
              }
            });
            let _v1 = _v12 ? _v8?.chain().selectAll().focus() : _v8?.chain().focus();
            if (_v0 === _v32.EMAIL_TEXT_STYLE.BOLD) _v1?.setBold().run();else if (_v0 === _v32.EMAIL_TEXT_STYLE.ITALIC) _v1?.setItalic().run();else if (_v0 === _v32.EMAIL_TEXT_STYLE.UNDERLINE) _v1?.setUnderline().run();else _v0 === _v32.EMAIL_TEXT_STYLE.REGULAR && _v1?.unsetUnderline()?.unsetItalic()?.unsetBold().run();
            _v16(!1);
          },
          addHTML: !0
        }), (0, _v1.jsxs)(_v7.Flex, {
          justifyContent: "space-between",
          mt: (0, _v15.rem)(25),
          children: [(0, _v1.jsx)(_v54.Header, {
            mt: (0, _v15.rem)(10),
            size: "xs",
            children: _v39.default.Format
          }), (0, _v1.jsxs)(_v7.Flex, {
            flex: .65,
            cursor: "pointer",
            alignItems: {
              base: "flex-end",
              "2xl": "center"
            },
            flexDir: {
              base: "column",
              "2xl": "row"
            },
            children: [(0, _v1.jsxs)(_v7.Flex, {
              gap: (0, _v15.rem)(4),
              children: [(0, _v1.jsx)(_v9.IconButton, {
                "aria-label": "align left",
                variant: _v9 === _v32.EMAIL_TEXT_FORMAT.LEFT ? "secondary" : "tertiary",
                onClick: _v26(_v32.EMAIL_TEXT_FORMAT.LEFT),
                icon: (0, _v1.jsx)(_v136.AlignLeft, {})
              }), (0, _v1.jsx)(_v9.IconButton, {
                "aria-label": "align center",
                variant: _v9 === _v32.EMAIL_TEXT_FORMAT.CENTER ? "secondary" : "tertiary",
                onClick: _v26(_v32.EMAIL_TEXT_FORMAT.CENTER),
                icon: (0, _v1.jsx)(_v135.AlignCenter, {})
              }), (0, _v1.jsx)(_v9.IconButton, {
                "aria-label": "align right",
                variant: _v9 === _v32.EMAIL_TEXT_FORMAT.RIGHT ? "secondary" : "tertiary",
                onClick: _v26(_v32.EMAIL_TEXT_FORMAT.RIGHT),
                icon: (0, _v1.jsx)(_v137.AlignRight, {})
              }), (0, _v1.jsx)(_v134.Divider, {
                display: {
                  base: "none",
                  "2xl": "block"
                },
                height: (0, _v15.rem)(40),
                orientation: "vertical",
                mx: (0, _v15.rem)(10)
              })]
            }), (0, _v1.jsxs)(_v7.Flex, {
              gap: (0, _v15.rem)(4),
              children: [(0, _v1.jsx)(_v9.IconButton, {
                "aria-label": "bullet points",
                variant: _v10 === _v32.EMAIL_LIST_FORMAT.BULLETED ? "secondary" : "tertiary",
                onClick: _v27(_v32.EMAIL_LIST_FORMAT.BULLETED),
                icon: (0, _v1.jsx)(_v138.ListUl, {})
              }), (0, _v1.jsx)(_v9.IconButton, {
                "aria-label": "number points",
                variant: _v10 === _v32.EMAIL_LIST_FORMAT.NUMBERED ? "secondary" : "tertiary",
                onClick: _v27(_v32.EMAIL_LIST_FORMAT.NUMBERED),
                icon: (0, _v1.jsx)(_v139.NumberedList, {})
              })]
            })]
          })]
        }), (0, _v1.jsx)(_v122, {
          handleOnChange: _v0 => {
            let _v1 = _v7 ? _v0[_v4][_v3] : null;
            if (_v1) {
              let _v0 = _v1.chain().setColor(_v0);
              _v1.state.selection.empty && _v13.from !== _v13.to && _v0.setTextSelection(_v13), _v0.run();
            }
          },
          selectedColor: (0, _v140.convertColorToHex)(_v11),
          title: _v39.default.Color,
          onSubmit: _v0 => {
            _v2({
              type: _v3 === _v32.EMAIL_TOOLBAR_TYPES.TITLE ? _v37.ACTION_TYPE.SET_HEADER_TEXT_COLOR : _v37.ACTION_TYPE.SET_BODY_TEXT_COLOR,
              payload: {
                text: _v0,
                emailTab: _v4
              }
            });
          }
        }), (0, _v1.jsx)(_v134.Divider, {
          mt: (0, _v15.rem)(30)
        }), (0, _v1.jsx)(_v123, {
          emailTemplate: _v4,
          emailToolBar: _v3,
          handleOnClick: _v0 => {
            _v8?.commands.insertContent(`<strong>{{${_v0}}}</strong>`), _v8?.commands.focus(), _v5({
              actionName: _v3 === _v32.EMAIL_TOOLBAR_TYPES.TITLE ? _v36.BP_ACTION_NAMES.HEADING_TAGS_ADDED : _v36.BP_ACTION_NAMES.BODY_TAGS_ADDED,
              type: _v36.BP_TYPE[_v4]
            });
          }
        })]
      });
    },
    _v143 = ({
      editorStates: _v0,
      dynamicTagRef: _v1
    }) => {
      let {
          emailState: _v2
        } = (0, _v28.useEmailCustomization)(),
        {
          settings: _v3
        } = (0, _v24.useOrionSettings)(),
        _v4 = _v3.enable_email_section_redesign,
        _v5 = _v0 => _v4 ? (0, _v1.jsx)(_v68.Panel, {
          isVisible: !0,
          background: "fill-surface",
          borderRadius: "md",
          overflow: "visible",
          width: "100%",
          maxWidth: (0, _v15.rem)(320),
          sx: {
            minHeight: "100%"
          },
          children: (0, _v1.jsx)(_v68.PanelBody, {
            px: (0, _v15.rem)(16),
            pt: (0, _v15.rem)(24),
            pb: (0, _v15.rem)(24),
            children: _v0
          })
        }) : _v0;
      return (0, _v1.jsx)(_v5.Box, {
        height: _v4 ? "100%" : void 0,
        p: _v4 ? `${(0, _v15.rem)(8)} 0` : {
          base: `${(0, _v15.rem)(26)} ${(0, _v15.rem)(18)}`,
          md: `${(0, _v15.rem)(26)}`
        },
        children: {
          [_v32.EMAIL_TOOLBAR_TYPES.GENERAL]: _v4 ? (0, _v1.jsx)(_v130, {}) : (0, _v1.jsx)(_v132, {}),
          [_v32.EMAIL_TOOLBAR_TYPES.BUTTON]: _v5((0, _v1.jsx)(_v73, {})),
          [_v32.EMAIL_TOOLBAR_TYPES.TITLE]: _v5((0, _v1.jsx)(_v142, {
            editorStates: _v0
          })),
          [_v32.EMAIL_TOOLBAR_TYPES.BODY]: _v5((0, _v1.jsx)(_v142, {
            editorStates: _v0
          })),
          [_v32.EMAIL_TOOLBAR_TYPES.SUBJECT]: _v5((0, _v1.jsx)(_v133, {
            dynamicTagRef: _v1
          }))
        }[_v2.emailToolbar]
      });
    },
    _v144 = () => {
      let [_v0, _v1] = (0, _v2.useState)(!1),
        {
          emailState: _v2,
          dispatch: _v3,
          undoRedoDispatch: _v4
        } = (0, _v28.useEmailCustomization)(),
        _v5 = (0, _v29.useEmailTextEditor)(_v2, _v3),
        _v6 = _v2.subject[_v2.emailTemplateType],
        [_v7, _v8] = (0, _v2.useState)(_v6),
        {
          hasEmailEditAccess: _v9
        } = (0, _v27.useEntityCapability)(),
        {
          settings: _v10
        } = (0, _v24.useOrionSettings)(),
        _v11 = _v10.enable_email_section_redesign,
        _v12 = _v11 ? (0, _v15.rem)(96) : (0, _v15.rem)(78),
        _v13 = _v11 ? (0, _v15.rem)(780) : (0, _v15.rem)(0),
        {
          teamName: _v14,
          isLoading: _v15
        } = (0, _v33.useTeamStore)(),
        _v16 = (0, _v38.useConfigStore)(_v0 => _v0.isRegistrationOn),
        _v17 = (0, _v38.useConfigStore)(_v0 => _v0.hasUpsell),
        {
          status: _v18,
          title: _v19,
          privacy: _v20
        } = (0, _v30.useEntityStore)(),
        {
          entityType: _v21,
          entityId: _v22
        } = (0, _v38.useConfigStore)(_v0 => _v0),
        _v23 = (0, _v38.useConfigStore)(_v0 => _v0.previewMode);
      (0, _v26.useViewer)();
      let _v24 = (0, _v38.useConfigStore)(_v0 => _v0.canCompleteEvent),
        _v25 = (0, _v38.useConfigStore)(_v0 => _v0.setCanRedo),
        _v26 = (0, _v38.useConfigStore)(_v0 => _v0.setCanUndo),
        {
          canUndo: _v27,
          canRedo: _v28
        } = _v2,
        {
          onClickEndEvent: _v29,
          onClickRegistration: _v30
        } = (0, _v21.useCallbackContext)(),
        _v31 = (0, _v2.useRef)(_v7),
        {
          sentRegistrationEmailPreviewEvent: _v32,
          sentRegistrationEmailLayoutChangeEvent: _v33
        } = (0, _v34.useAnalytics)(),
        _v34 = (0, _v2.useRef)(null),
        _v35 = (0, _v2.useRef)(null),
        _v36 = (0, _v2.useRef)(null);
      (0, _v23.useBroadcastChannel)(_v32.BROADCAST_CHANNEL_NAME, _v0 => {
        _v0?.type === _v32.BROADCAST_ACTIONS.UNDO && _v4({
          type: _v35.ACTION_TYPE.UNDO
        }), _v0?.type === _v32.BROADCAST_ACTIONS.REDO && _v4({
          type: _v35.ACTION_TYPE.REDO
        });
      });
      let _v37 = _v16 && _v18 === _v32.ENTITY_STATUS.STARTED && _v21 === _v22.ENTITY_TYPE.EVENT && _v29 && _v24,
        _v38 = !_v17 && !1 === _v16 && !_v18 && _v21 === _v22.ENTITY_TYPE.EVENT && _v30;
      (0, _v25.default)([_v35, _v34], () => {
        if (_v1(!1), !_v7) {
          let _v0 = _v2.defaultConfig.subject[_v2.emailTemplateType];
          _v8(_v0), _v3({
            type: _v37.ACTION_TYPE.SET_SUBJECT,
            payload: {
              text: _v0,
              emailTab: _v2.emailTemplateType
            }
          });
        }
      }, null, [_v7, _v2]);
      let _v39 = (0, _v2.useCallback)(() => {
          _v3({
            type: _v37.ACTION_TYPE.SET_EMAIL_TOOL_BAR,
            payload: _v32.EMAIL_TOOLBAR_TYPES.GENERAL
          });
        }, [_v3]),
        _v40 = () => {
          if (_v2.emailToolbar === _v32.EMAIL_TOOLBAR_TYPES.BODY || _v2.emailToolbar === _v32.EMAIL_TOOLBAR_TYPES.TITLE) {
            let _v0 = _v5[_v2.emailTemplateType][_v2.emailToolbar];
            _v0?.commands.setTextSelection(0);
          }
          window?.getSelection()?.empty(), window?.getSelection()?.removeAllRanges();
        };
      (0, _v2.useEffect)(() => {
        _v40(), _v3({
          type: _v37.ACTION_TYPE.EMAIL_TEMPLATE_TYPE,
          payload: _v32.EMAIL_TYPES.CONFIRMATION
        });
      }, []), (0, _v2.useEffect)(() => {
        _v2.canRedo || _v39();
      }, [_v2.emailTemplateType, _v2.canRedo, _v39]);
      let _v41 = (0, _v2.useRef)(null),
        _v42 = (0, _v2.useRef)(null);
      !function (_v0, _v1, _v2 = _v32.EMAIL_PREVIEW_MODE.WEB, _v3 = !0) {
        let [_v4, _v5] = (0, _v2.useState)({
            width: 0,
            height: 0
          }),
          _v6 = (0, _v31.useDebouncedValue)(_v4, 100),
          _v7 = (0, _v2.useCallback)(() => {
            if (_v1.current) {
              let {
                width: _v0,
                height: _v1
              } = _v1.current.getBoundingClientRect();
              _v5({
                width: _v0,
                height: _v1
              });
            }
          }, [_v1]);
        (0, _v2.useLayoutEffect)(() => {
          if (_v3 && _v0.current) {
            let _v0 = _v32.PREVIEW_WIDTH[_v32.EMAIL_PREVIEW_MODE.WEB],
              _v1 = 1 / (_v6.width ? _v0 / _v6.width : 1),
              _v2 = _v2 === _v32.EMAIL_PREVIEW_MODE.WEB ? 0 : ((_v0 - _v32.PREVIEW_WIDTH[_v2]) / 2).toFixed(2);
            _v0.current.style.transform = `scale(${_v1}) translateX(${_v2}px)`, _v0.current.style.transformOrigin = "top left";
            let _v3 = _v6.height / _v1;
            _v0.current.style.height = `${_v3}px`;
          }
        }, [_v6, _v0, _v2, _v3]), (0, _v2.useEffect)(() => {
          if (!_v3) return;
          let _v0 = new ResizeObserver(() => {
              _v7();
            }),
            _v1 = _v1.current;
          return _v1 && _v0.observe(_v1), () => {
            _v1 && _v0.unobserve(_v1);
          };
        }, [_v1, _v7, _v3]);
      }(_v42, _v41, _v2.previewMode, !_v11);
      let _v43 = _v0 => () => {
          _v40(), _v3({
            type: _v37.ACTION_TYPE.SET_PREVIEW,
            payload: _v0
          });
        },
        _v44 = _v0 => () => {
          _v0 !== _v2.previewMode && _v32({
            actionName: _v36.BP_ACTION_NAMES.PREVIEW_BY_DEVICE,
            type: _v36.BP_TYPE[_v2.emailTemplateType],
            actionValue: _v0 === _v32.EMAIL_PREVIEW_MODE.WEB ? _v36.BP_ACTION_VALUES.DESKTOP_VIEW : _v36.BP_ACTION_VALUES.MOBILE_VIEW,
            element: _v36.BP_ELEMENT.ICON
          }), _v43(_v0)();
        };
      (0, _v2.useEffect)(() => {
        _v23 && _v43(_v23)();
      }, [_v23]), (0, _v2.useEffect)(() => {
        !_v11 && _v2.previewMode && _v23 && _v2.previewMode !== _v23 && _v32({
          actionName: _v36.BP_ACTION_NAMES.PREVIEW_BY_DEVICE,
          type: _v36.BP_TYPE[_v2.emailTemplateType],
          actionValue: _v23 === _v32.EMAIL_PREVIEW_MODE.WEB ? _v36.BP_ACTION_VALUES.DESKTOP_VIEW : _v36.BP_ACTION_VALUES.MOBILE_VIEW,
          element: _v36.BP_ELEMENT.ICON
        });
      }, [_v2.previewMode, _v23]), (0, _v2.useEffect)(() => {
        _v25?.(_v28), _v26?.(_v27);
      }, [_v27, _v28]), (0, _v2.useEffect)(() => {
        _v8(_v6);
      }, [_v6, _v2.emailToolbar]);
      let _v45 = _v2.customLogo?.url && (0, _v1.jsx)(_v5.Box, {
          p: "sm",
          mb: (0, _v15.rem)(20),
          cursor: "pointer",
          _hover: {
            background: "blue.50",
            borderRadius: (0, _v15.rem)(4)
          },
          onClick: () => _v3({
            type: _v37.ACTION_TYPE.SET_EMAIL_TOOL_BAR,
            payload: _v32.EMAIL_TOOLBAR_TYPES.GENERAL
          }),
          children: (0, _v1.jsx)(_v5.Box, {
            pointerEvents: "none",
            px: "3xl",
            children: (0, _v1.jsx)("img", {
              src: _v2.customLogo.url,
              height: 40,
              alt: "email-logo"
            })
          })
        }),
        _v46 = (0, _v1.jsx)(_v5.Box, {
          fontSize: "body-xs",
          lineHeight: (0, _v15.rem)(14),
          textAlign: "center",
          color: "#445566",
          m: `${(0, _v15.rem)(24)} 0 ${(0, _v15.rem)(37)}`,
          maxWidth: (0, _v15.rem)(350),
          cursor: "pointer",
          _hover: {
            background: "blue.50",
            borderRadius: (0, _v15.rem)(4)
          },
          onClick: () => _v3({
            type: _v37.ACTION_TYPE.SET_EMAIL_TOOL_BAR,
            payload: _v32.EMAIL_TOOLBAR_TYPES.GENERAL
          }),
          children: (0, _v1.jsx)(_v67, {})
        }),
        _v47 = _v2.previewMode === _v32.EMAIL_PREVIEW_MODE.WEB ? 640 : 380,
        _v48 = _v2.previewMode === _v32.EMAIL_PREVIEW_MODE.WEB ? 720 : 390,
        _v49 = (0, _v16.useColorModeValue)("gray.200", "gray.800");
      return (0, _v1.jsx)(_v7.Flex, {
        flexDir: "column",
        height: "100%",
        width: "100%",
        overflow: "auto",
        ref: _v36,
        children: (0, _v1.jsxs)(_v7.Flex, {
          flexDir: "row",
          alignItems: _v11 ? "stretch" : "flex-start",
          justifyContent: "center",
          gap: _v11 ? (0, _v15.rem)(36) : void 0,
          flex: 1,
          minHeight: _v11 ? 0 : void 0,
          children: [(0, _v1.jsx)(_v5.Box, {
            flex: 2,
            minWidth: (0, _v15.rem)(200),
            overflowY: "auto",
            height: _v11 ? void 0 : "100%",
            maxWidth: (0, _v15.rem)(400),
            children: (0, _v1.jsx)(_v65, {})
          }), (0, _v1.jsx)(_v5.Box, {
            flex: 5,
            maxWidth: _v13,
            height: _v11 ? void 0 : "100%",
            overflowY: "auto",
            border: _v11 ? void 0 : `${(0, _v15.rem)(1)} solid`,
            borderColor: "stroke",
            boxSizing: "border-box",
            children: (0, _v1.jsxs)(_v5.Box, {
              width: "100%",
              maxWidth: _v13,
              background: _v11 ? void 0 : "surface",
              height: "100%",
              p: _v11 ? `${(0, _v15.rem)(8)} 0` : (0, _v15.rem)(26),
              overflow: "auto",
              children: [_v38 && (0, _v1.jsx)(_v3.Alert, {
                variant: "info",
                marginBottom: (0, _v15.rem)(16),
                children: (0, _v1.jsx)(_v4.AlertDescription, {
                  children: (0, _v20.translate)({
                    singular: "To add your custom form and emails to “{TITLE},” {A}turn on registration{/A}.",
                    replacements: {
                      A: _v0 => (0, _v1.jsx)(_v12.Link, {
                        onClick: _v30,
                        children: _v0
                      }),
                      TITLE: _v19
                    },
                    dictionary: {
                      es: {
                        singular: "Para agregar su formulario personalizado y correos electrónicos a “{TITLE}”, {A}active el registro{/A}."
                      },
                      "de-DE": {
                        singular: "Um Ihr benutzerdefiniertes Formular und Ihre E-Mails zu „{TITLE}“ hinzuzufügen, {A}aktivieren Sie die Registrierung{/A}."
                      },
                      "fr-FR": {
                        singular: "Pour ajouter votre vos e-mails et votre formulaire personnalisé à « {TITLE} », {A}activez l'inscription{/A}."
                      },
                      "ja-JP": {
                        singular: "カスタムフォームとメールを「{TITLE}」に追加するには、{A}登録をオン{/A}にしてください。"
                      },
                      "ko-KR": {
                        singular: "{TITLE}에 커스텀 양식과 이메일을 추가하려면 {A}등록 기능을 켜세요{/A}."
                      },
                      "pt-BR": {
                        singular: "Para adicionar seu formulário customizado e e-mails a “{TITLE}”, {A}ative o registro{/A}."
                      },
                      "zh-CN": {
                        singular: "要将自定义表单和电子邮件添加到“{TITLE}”中，请{A}开启注册{/A}。"
                      }
                    }
                  })
                })
              }), _v37 && (0, _v1.jsx)(_v3.Alert, {
                variant: "info",
                children: (0, _v1.jsx)(_v4.AlertDescription, {
                  fontSize: 14,
                  children: (0, _v20.translate)({
                    singular: "To send follow-up email, {A}complete your event{/A}.",
                    replacements: {
                      A: _v0 => (0, _v1.jsx)(_v12.Link, {
                        onClick: _v29,
                        children: _v0
                      })
                    },
                    dictionary: {
                      es: {
                        singular: "Para enviar un correo electrónico de seguimiento, {A}complete su evento{/A}."
                      },
                      "de-DE": {
                        singular: "Um eine Folge-E-Mail zu senden, {A}vervollständigen Sie Ihr Ereignis{/A}."
                      },
                      "fr-FR": {
                        singular: "Pour envoyer un e-mail de suivi, {A}terminez l'événement{/A}."
                      },
                      "ja-JP": {
                        singular: "フォローアップメールを送信するには、{A}イベントを完了{/A}してください。"
                      },
                      "ko-KR": {
                        singular: "팔로우업 이메일을 보내려면 {A}이벤트를 완료{/A}하세요."
                      },
                      "pt-BR": {
                        singular: "Para enviar um e-mail de acompanhamento, {A}conclua seu evento{/A}."
                      },
                      "zh-CN": {
                        singular: "要发送跟进电子邮件，{A}请完成活动{/A}。"
                      }
                    }
                  })
                })
              }), (0, _v1.jsxs)(_v7.Flex, {
                flexDirection: "column",
                width: "100%",
                maxWidth: _v11 ? (0, _v15.rem)(780) : void 0,
                minHeight: _v11 ? "100%" : void 0,
                mx: _v11 ? "auto" : void 0,
                background: _v11 ? "gray.450" : void 0,
                borderRadius: _v11 ? (0, _v15.rem)(20) : void 0,
                overflow: _v11 ? "hidden" : void 0,
                children: [(0, _v1.jsxs)(_v7.Flex, {
                  flexDirection: "column",
                  width: "100%",
                  background: _v11 ? _v49 : void 0,
                  p: _v11 ? (0, _v15.rem)(16) : void 0,
                  children: [_v11 && (0, _v1.jsxs)(_v7.Flex, {
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: "md",
                    children: [(0, _v1.jsxs)(_v7.Flex, {
                      gap: (0, _v15.rem)(4),
                      children: [(0, _v1.jsx)(_v9.IconButton, {
                        "aria-label": (0, _v20.translate)({
                          singular: "Preview on desktop",
                          dictionary: {
                            es: {
                              singular: "Vista previa en escritorio"
                            },
                            "de-DE": {
                              singular: "Vorschau auf dem Desktop"
                            },
                            "fr-FR": {
                              singular: "Aperçu sur ordinateur"
                            },
                            "ja-JP": {
                              singular: "デスクトップでのプレビュー"
                            },
                            "ko-KR": {
                              singular: "데스크톱에서 미리보기"
                            },
                            "pt-BR": {
                              singular: "Visualizar no computador"
                            },
                            "zh-CN": {
                              singular: "在桌面上预览"
                            }
                          }
                        }),
                        size: "sm",
                        variant: "tertiary",
                        isActive: _v2.previewMode === _v32.EMAIL_PREVIEW_MODE.WEB,
                        icon: (0, _v1.jsx)(_v17.Desktop, {}),
                        onClick: _v44(_v32.EMAIL_PREVIEW_MODE.WEB)
                      }), (0, _v1.jsx)(_v9.IconButton, {
                        "aria-label": (0, _v20.translate)({
                          singular: "Preview on mobile",
                          dictionary: {
                            es: {
                              singular: "Vista previa en móvil"
                            },
                            "de-DE": {
                              singular: "Vorschau auf dem Mobilgerät"
                            },
                            "fr-FR": {
                              singular: "Aperçu sur mobile"
                            },
                            "ja-JP": {
                              singular: "モバイルでのプレビュー"
                            },
                            "ko-KR": {
                              singular: "모바일에서 미리보기"
                            },
                            "pt-BR": {
                              singular: "Visualizar no celular"
                            },
                            "zh-CN": {
                              singular: "在手机上预览"
                            }
                          }
                        }),
                        size: "sm",
                        variant: "tertiary",
                        isActive: _v2.previewMode === _v32.EMAIL_PREVIEW_MODE.MOBILE,
                        icon: (0, _v1.jsx)(_v19.MobilePhone, {}),
                        onClick: _v44(_v32.EMAIL_PREVIEW_MODE.MOBILE)
                      })]
                    }), (0, _v1.jsx)(_v53, {
                      clearAllTextSelections: _v40
                    })]
                  }), (0, _v1.jsxs)(_v7.Flex, {
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    mb: _v11 ? 0 : _v9 ? "lg" : 0,
                    order: _v11 ? 2 : 1,
                    children: [_v9 ? (0, _v1.jsxs)(_v7.Flex, {
                      alignItems: "center",
                      flex: 1,
                      children: [(0, _v1.jsx)(_v7.Flex, {
                        minWidth: _v12,
                        width: _v12,
                        alignItems: "center",
                        children: (0, _v1.jsx)(_v13.Paragraph, {
                          lineHeight: (0, _v15.rem)(16),
                          color: "text-secondary",
                          size: "md",
                          children: _v39.default.Subject
                        })
                      }), (0, _v1.jsx)(_v5.Box, {
                        width: "100%",
                        height: _v11 ? (0, _v15.rem)(32) : (0, _v15.rem)(40),
                        maxWidth: _v11 ? void 0 : (0, _v15.rem)(360),
                        children: (0, _v1.jsxs)(_v8.FormControl, {
                          children: [(0, _v1.jsx)(_v10.Input, {
                            ref: _v34,
                            size: _v11 ? "sm" : void 0,
                            id: `${_v2.emailTemplateType.toLowerCase()}-email-subject`,
                            maxLength: _v32.EMAIL_MAX_LENGTH.SUBJECT,
                            value: _v7,
                            onChange: _v0 => {
                              let _v1 = _v0.target.value;
                              _v8(_v1), _v1.length && _v3({
                                type: _v37.ACTION_TYPE.SET_SUBJECT,
                                payload: {
                                  text: _v0.target.value,
                                  emailTab: _v2.emailTemplateType
                                }
                              });
                            },
                            onFocus: () => {
                              _v1(!0), _v3({
                                type: _v37.ACTION_TYPE.SET_EMAIL_TOOL_BAR,
                                payload: _v32.EMAIL_TOOLBAR_TYPES.SUBJECT
                              }), _v31.current = _v7;
                            }
                          }), !_v11 && (0, _v1.jsx)(_v8.FormHelperText, {
                            mt: (0, _v15.rem)(2),
                            children: _v0 && (0, _v1.jsx)(_v40.CharCount, {
                              value: _v7,
                              maxCharacters: _v32.EMAIL_MAX_LENGTH.SUBJECT
                            })
                          })]
                        })
                      })]
                    }) : (0, _v1.jsxs)(_v7.Flex, {
                      alignItems: "center",
                      children: [(0, _v1.jsx)(_v13.Paragraph, {
                        lineHeight: (0, _v15.rem)(16),
                        minWidth: (0, _v15.rem)(60),
                        color: "text-secondary",
                        size: "md",
                        children: _v39.default.Subject
                      }), (0, _v1.jsx)(_v145, {
                        isDisabled: !_v9,
                        showHoverState: !!_v9,
                        children: _v7
                      })]
                    }), !_v11 && (0, _v1.jsx)(_v53, {
                      clearAllTextSelections: _v40
                    })]
                  }), _v11 ? (0, _v1.jsxs)(_v7.Flex, {
                    pb: "sm",
                    alignItems: "center",
                    flex: 1,
                    order: _v11 ? 1 : 2,
                    children: [(0, _v1.jsxs)(_v7.Flex, {
                      minWidth: _v12,
                      width: _v12,
                      alignItems: "center",
                      children: [(0, _v1.jsx)(_v13.Paragraph, {
                        lineHeight: (0, _v15.rem)(16),
                        color: "text-secondary",
                        size: "md",
                        children: _v39.default.From
                      }), (0, _v1.jsx)(_v14.Tooltip, {
                        label: (0, _v20.translate)({
                          singular: "This name appears as the sender of your event emails.",
                          dictionary: {
                            es: {
                              singular: "Este nombre aparece como remitente de los correos electrónicos de su evento."
                            },
                            "de-DE": {
                              singular: "Dieser Name wird als Absender Ihrer Veranstaltungs-E-Mails angezeigt."
                            },
                            "fr-FR": {
                              singular: "Ce nom apparaît comme l'expéditeur de vos e-mails d'événement."
                            },
                            "ja-JP": {
                              singular: "この名前はイベントのメールの差出人名として表示されます。"
                            },
                            "ko-KR": {
                              singular: "이 이름은 귀하의 이벤트 이메일에서 발신자 이름으로 표시됩니다."
                            },
                            "pt-BR": {
                              singular: "Este nome aparece como remetente dos seus e-mails do evento."
                            },
                            "zh-CN": {
                              singular: "此名称将显示为您活动邮件的发件人."
                            }
                          }
                        }),
                        children: (0, _v1.jsx)(_v5.Box, {
                          as: "span",
                          display: "inline-flex",
                          ml: (0, _v15.rem)(4),
                          color: "text-secondary",
                          children: (0, _v1.jsx)(_v18.InfoCircle, {
                            width: (0, _v15.rem)(14),
                            height: (0, _v15.rem)(14)
                          })
                        })
                      })]
                    }), (0, _v1.jsx)(_v5.Box, {
                      width: "100%",
                      height: _v11 ? (0, _v15.rem)(32) : (0, _v15.rem)(40),
                      maxWidth: _v11 ? void 0 : (0, _v15.rem)(360),
                      children: (0, _v1.jsx)(_v8.FormControl, {
                        position: "relative",
                        children: (0, _v1.jsx)(_v10.Input, {
                          isDisabled: !_v9,
                          size: _v11 ? "sm" : void 0,
                          maxLength: _v32.EMAIL_MAX_LENGTH.FROM,
                          value: _v2.from,
                          placeholder: _v15 ? _v39.default.Loading : "",
                          onBlur: () => {
                            _v2.from || _v3({
                              type: _v37.ACTION_TYPE.SET_FROM,
                              payload: _v14 || _v32.VIMEO
                            }), _v33({
                              actionName: _v36.BP_ACTION_NAMES.FROM_TEXT_CHANGED
                            });
                          },
                          onChange: _v0 => _v3({
                            type: _v37.ACTION_TYPE.SET_FROM,
                            payload: _v0.target.value
                          })
                        })
                      })
                    })]
                  }) : (0, _v1.jsxs)(_v7.Flex, {
                    pb: "lg",
                    alignItems: "center",
                    order: _v11 ? 1 : 2,
                    children: [(0, _v1.jsx)(_v13.Paragraph, {
                      lineHeight: (0, _v15.rem)(16),
                      minWidth: (0, _v15.rem)(60),
                      color: "text-secondary",
                      size: "md",
                      children: _v39.default.From
                    }), (0, _v1.jsx)(_v145, {
                      isDisabled: !_v9,
                      showHoverState: !!_v9,
                      onClick: () => {
                        _v3({
                          type: _v37.ACTION_TYPE.SET_EMAIL_TOOL_BAR,
                          payload: _v32.EMAIL_TOOLBAR_TYPES.GENERAL
                        });
                      },
                      children: _v2.from
                    })]
                  })]
                }), _v11 ? (0, _v1.jsx)(_v11.LightMode, {
                  children: (0, _v1.jsxs)(_v7.Flex, {
                    flexDirection: "column",
                    alignItems: "center",
                    width: "100%",
                    maxWidth: (0, _v15.rem)(_v47),
                    mx: "auto",
                    pt: (0, _v15.rem)(16),
                    pb: (0, _v15.rem)(28),
                    children: [_v45, (0, _v1.jsx)(_v7.Flex, {
                      background: "white",
                      color: "slate.800",
                      width: "100%",
                      borderRadius: (0, _v15.rem)(16),
                      flexDirection: "column",
                      overflow: "hidden",
                      transition: "0.5s",
                      p: `${(0, _v15.rem)(40)} ${(0, _v15.rem)(12)}`,
                      children: (0, _v1.jsx)(_v5.Box, {
                        width: (0, _v15.rem)(_v48),
                        sx: {
                          zoom: (_v47 - 24) / _v48
                        },
                        children: (0, _v1.jsx)(_v66.EmailTemplate, {
                          editorStates: _v5,
                          canEdit: _v9
                        })
                      })
                    }), _v46]
                  })
                }) : (0, _v1.jsx)(_v5.Box, {
                  position: "relative",
                  width: "100%",
                  pb: (0, _v15.rem)(26),
                  height: (_v36.current?.clientHeight || 230) + 65 - 230,
                  ref: _v41,
                  children: (0, _v1.jsxs)(_v5.Box, {
                    width: (0, _v15.rem)(_v32.PREVIEW_WIDTH[_v2.previewMode]),
                    alignItems: "center",
                    height: "100%",
                    transition: "transform 0.5s, width 0.5s, transform-origin 0.25s",
                    overflowY: "scroll",
                    sx: {
                      msOverflowStyle: "none",
                      scrollbarWidth: "none",
                      WebkitOverflowScrolling: "touch",
                      "&::-webkit-scrollbar": {
                        display: "none"
                      }
                    },
                    ref: _v42,
                    children: [(0, _v1.jsx)(_v5.Box, {
                      background: _v2.accentColor,
                      height: (0, _v15.rem)(1.5),
                      cursor: "pointer",
                      _hover: {
                        background: "blue.50",
                        borderRadius: (0, _v15.rem)(4)
                      },
                      onClick: () => _v3({
                        type: _v37.ACTION_TYPE.SET_EMAIL_TOOL_BAR,
                        payload: _v32.EMAIL_TOOLBAR_TYPES.GENERAL
                      })
                    }), (0, _v1.jsxs)(_v6.Center, {
                      background: "gray.50",
                      pt: (0, _v15.rem)(38),
                      flexFlow: "column",
                      border: `${(0, _v15.rem)(1)} solid`,
                      borderColor: "stroke",
                      boxSizing: "border-box",
                      children: [_v45, (0, _v1.jsx)(_v7.Flex, {
                        background: "white",
                        color: "slate.800",
                        maxWidth: (0, _v15.rem)(590),
                        flexDirection: "column",
                        transition: "0.5s",
                        p: _v2.previewMode === _v32.EMAIL_PREVIEW_MODE.WEB ? `${(0, _v15.rem)(22)} ${(0, _v15.rem)(95)} ${(0, _v15.rem)(45)}` : `${(0, _v15.rem)(22)} ${(0, _v15.rem)(20)} ${(0, _v15.rem)(45)}`,
                        width: _v2.previewMode === _v32.EMAIL_PREVIEW_MODE.WEB ? "90%" : "100%",
                        children: (0, _v1.jsx)(_v66.EmailTemplate, {
                          editorStates: _v5,
                          canEdit: _v9
                        })
                      }), _v46]
                    })]
                  })
                })]
              })]
            })
          }), (0, _v1.jsx)(_v5.Box, {
            flex: 2,
            minWidth: (0, _v15.rem)(200),
            overflowY: "auto",
            height: _v11 ? void 0 : "100%",
            maxWidth: _v11 ? (0, _v15.rem)(320) : (0, _v15.rem)(400),
            children: (0, _v1.jsx)(_v143, {
              editorStates: _v5,
              dynamicTagRef: _v35
            })
          })]
        })
      });
    },
    _v145 = _v0 => (0, _v1.jsx)(_v5.Box, {
      ml: (0, _v15.rem)(18),
      wordBreak: "break-all",
      fontSize: "body-md",
      width: "100%",
      color: "text-primary",
      _hover: _v0.showHoverState ? {
        cursor: "pointer",
        color: "black",
        backgroundColor: "blue.50",
        borderRadius: (0, _v15.rem)(4)
      } : {},
      ..._v0,
      children: _v0.children
    });
  var _v146 = _v0.i(0);
  _v0.s(["LeadEmail", 0, ({
    entityId: _v0,
    entityType: _v1,
    onAutoSave: _v2,
    onNavigateToAttendeePage: _v3,
    isRegistrationOn: _v4,
    hasUpsell: _v5,
    canCompleteEvent: _v6,
    previewMode: _v7,
    setCanRedo: _v8,
    setCanUndo: _v9
  }) => {
    let _v10 = (0, _v2.useCallback)(_v0 => {
        _v2 && _v2(_v0);
      }, [_v0, _v1]),
      _v11 = (0, _v2.useCallback)(() => {
        _v3 && _v3();
      }, [_v0, _v1]);
    return ((0, _v2.useEffect)(() => {
      _v38.useConfigStore.setState({
        entityId: _v0,
        entityType: _v1,
        isRegistrationOn: _v4,
        hasUpsell: _v5,
        canCompleteEvent: _v6,
        previewMode: _v7,
        onAutoSave: _v10,
        onNavigateToAttendeePage: _v11,
        setCanRedo: _v8,
        setCanUndo: _v9
      });
    }, [_v0, _v1, _v4, _v5, _v6, _v7, _v10, _v11, _v8, _v9]), _v0 && _v1) ? (0, _v1.jsx)(_v30.default, {
      children: (0, _v1.jsx)(_v33.default, {
        children: (0, _v1.jsx)(_v27.default, {
          children: (0, _v1.jsx)(_v61.default, {
            children: (0, _v1.jsx)(_v146.UndoRedoContextProvider, {
              children: (0, _v1.jsx)(_v144, {})
            })
          })
        })
      })
    }) : null;
  }], 0);
}