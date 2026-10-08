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
  _v0.s(["QnAUpsell", 0, function ({
    canUseQnaModeration: _v0,
    userPreferencesContext: {
      userPreferencesActions: _v1
    } = (0, _v2.useManager)(_v9.UserPreferencesManager, ({
      userPreferencesActions: _v0
    }) => [_v0]),
    composerSessionContext: {
      sessionInfo: {
        value: _v2
      }
    } = (0, _v2.useManager)(_v8.ComposerSessionManager)
  }) {
    let {
        initialState: {
          sessionId: _v3
        }
      } = (0, _v6.useLiveGlobals)(),
      _v4 = _v7.liveApplicationConfig.MARKETING.QNA_UPSELL_LAST_EVENT_ID === _v3,
      [_v5] = (0, _v3.useState)(!1 === _v0 && !_v4),
      {
        open: _v6,
        upgradeModal: _v7
      } = function ({
        canOpen: _v0 = !0
      } = {}) {
        return (0, _v4.useUpgradeModal)({
          canOpen: _v0,
          tracking: {
            params: {
              feature: "q_and_a_moderation",
              location: "drawer",
              page: "/manage/event_setting_page/settings",
              upsell_name: "q_and_a_moderation"
            },
            paywallTracking: {
              paywallTrigger: "live_event_qna_moderation_toggle_button",
              paywallLocation: "live_event",
              paywallType: "popup",
              paywallFeature: "live"
            }
          },
          templateType: "enterprise",
          modalConfig: {
            mkcCode: "109093",
            enterpriseTitle: _v5.T_UPGRADE_TO_MODERATE_YOUR_QNA,
            enterpriseSubtitle: _v5.T_QNA_MODERATION_LETS_YOU_CONTROL
          }
        });
      }(),
      _v8 = (0, _v3.useCallback)(() => {
        _v2?.owner?.capabilities?.hasEnterprise ? _v1.setEnterpriseUpgradeTiersModalState(!0) : _v6(), (0, _v10.trackUpgradeQna)("expand"), (0, _v10.trackUpgradeQnaV2)("click");
      }, [_v2, _v1, _v6]);
    return (0, _v3.useEffect)(() => {
      _v5 && ((0, _v10.trackUpgradeQna)("impression"), (0, _v10.trackUpgradeQnaV2)("impression"));
    }, [_v5]), _v5 ? (0, _v1.jsxs)("div", {
      children: [(0, _v1.jsx)(_v11.SmallUpgradeBanner, {
        button: {
          label: _v12.translations.upgrade,
          onClick: _v8
        },
        cta: _v12.translations.moderateYourQnaSession,
        stacked: !0,
        style: {
          padding: 0
        }
      }), _v7]
    }) : null;
  }], 0);
  var _v13 = _v0.i(0),
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
    _v25 = _v0.i(0);
  function _v26({
    id: _v0,
    className: _v1,
    label: _v2,
    isChecked: _v3,
    onChange: _v4
  }) {
    return (0, _v1.jsxs)(_v14.Flex, {
      alignItems: "center",
      gap: (0, _v13.rem)(8),
      width: "100%",
      padding: `${(0, _v13.rem)(8)} ${(0, _v13.rem)(12)}`,
      borderRadius: "sm",
      children: [(0, _v1.jsx)(_v14.Flex, {
        flex: 1,
        minWidth: 0,
        children: (0, _v1.jsx)(_v16.Text, {
          variant: "body-md",
          children: _v2
        })
      }), (0, _v1.jsx)(_v15.Switch, {
        id: _v0,
        className: _v1,
        isChecked: _v3,
        onChange: _v4
      })]
    });
  }
  _v0.s(["QnaOptionsMenu", 0, function ({
    id: _v0 = (0, _v22.createDomName)("qna-options-menu"),
    className: _v1 = (0, _v22.createDomName)("qna-options-menu")
  }) {
    let {
        isEventModerated: _v2,
        isAnonymousQuestionsDisabled: _v3,
        isSpeakerQnaReplyAllowed: _v4,
        config: {
          canUseQnaModeration: _v5
        },
        qnaActions: _v6
      } = (0, _v2.useManager)(_v20.QnAManager, _v0 => [_v0.isEventModerated, _v0.isAnonymousQuestionsDisabled, _v0.isSpeakerQnaReplyAllowed, _v0.config]),
      {
        trackLiveStreamQaSpeakerRepliesToggled: _v7
      } = (0, _v19.useLiveStreamBroadcasterTracking)(),
      {
        enable_speaker_qna_replies: _v8
      } = (0, _v18.useOrionSettingsFields)(["enable_speaker_qna_replies"]),
      _v9 = (0, _v3.useCallback)(() => {
        _v6.toggleModerationState(!_v2);
      }, [_v2, _v6]),
      _v10 = (0, _v3.useCallback)(() => {
        _v6.toggleAnonymousQuestionsState(!_v3);
      }, [_v3, _v6]),
      _v11 = (0, _v3.useCallback)(() => {
        let _v0 = !_v4;
        _v6.toggleSpeakerQnaReplyState(_v0), _v7({
          liveStreamNewStatus: _v0
        });
      }, [_v4, _v6, _v7]);
    return _v5 ? (0, _v1.jsx)(_v24.BokehPopover, {
      inPortal: !1,
      placement: "bottom",
      triggerContent: (0, _v1.jsx)("div", {
        children: (0, _v1.jsx)(_v25.BokehTooltip, {
          label: _v21.T_OPTIONS,
          placement: "bottom",
          children: (0, _v1.jsx)(_v23.BokehIconButton, {
            id: _v0,
            className: _v1,
            ariaLabel: _v21.T_OPTIONS,
            size: "sm",
            icon: (0, _v1.jsx)(_v17.FiltersLevers, {})
          })
        })
      }),
      content: (0, _v1.jsxs)(_v14.Flex, {
        direction: "column",
        width: "100%",
        minWidth: (0, _v13.rem)(280),
        padding: (0, _v13.rem)(4),
        children: [(0, _v1.jsx)(_v26, {
          id: (0, _v22.createDomName)(_v0, "moderation-toggle"),
          className: (0, _v22.createDomName)(_v1, "moderation-toggle"),
          label: _v21.T_MODERATE_QUESTIONS,
          isChecked: !!_v2,
          onChange: _v9
        }), (0, _v1.jsx)(_v26, {
          id: (0, _v22.createDomName)(_v0, "anonymous-question-toggle"),
          className: (0, _v22.createDomName)(_v1, "anonymous-question-toggle"),
          label: _v21.T_ALLOW_ANONYMOUS_QUESTIONS,
          isChecked: !_v3,
          onChange: _v10
        }), _v8 ? (0, _v1.jsx)(_v26, {
          id: (0, _v22.createDomName)(_v0, "speaker-qna-reply-toggle"),
          className: (0, _v22.createDomName)(_v1, "speaker-qna-reply-toggle"),
          label: _v21.T_ALLOW_GUEST_SPEAKERS_TO_ANSWER,
          isChecked: !!_v4,
          onChange: _v11
        }) : null]
      })
    }) : null;
  }], 0);
  var _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0);
  _v0.s(["SessionControlButton", 0, function ({
    id: _v0 = (0, _v22.createDomName)("qna-session-control-button"),
    qnaContext: {
      activeSessionId: _v1,
      isEventModerated: _v2,
      qnaActions: {
        createQnASession: _v3,
        openQnASession: _v4,
        closeQnASession: _v5
      }
    } = (0, _v2.useManager)(_v20.QnAManager, ({
      activeSessionId: _v0,
      isEventModerated: _v1
    }) => [_v0, _v1])
  }) {
    let {
        trackLiveStreamQaEnded: _v6,
        trackLiveStreamQaStarted: _v7
      } = (0, _v19.useLiveStreamBroadcasterTracking)(),
      _v8 = (0, _v2.useScope)(),
      [_v9, _v10] = (0, _v3.useState)(!1),
      _v11 = (0, _v3.useCallback)(async () => {
        let {
          activeSessionQuestions: _v0,
          activeSessionPendingQuestions: _v1
        } = _v8.getContextOf(_v20.QnAManager);
        await _v5(), _v6(), (0, _v29.trackClickEndQna)(_v2, Object.keys(_v0).length + Object.keys(_v1).length);
      }, [_v8, _v5, _v2, _v6]),
      _v12 = (0, _v3.useCallback)(async () => {
        if (null !== _v2) try {
          _v10(!0);
          let _v0 = await _v3(_v2);
          await _v4(_v0), _v7();
        } catch (_v0) {
          _v10(!1), _v28.Logger.getGlobal().error("Failed to start qna session:", _v0);
        } finally {
          _v10(!1), (0, _v29.trackClickStartQna)(_v2);
        }
      }, [_v2, _v3, _v4, _v7]);
    return (0, _v1.jsx)(_v27.Button, {
      id: _v0,
      variant: "primary",
      size: "sm",
      width: "100%",
      margin: `${(0, _v13.rem)(8)} 0 0 0`,
      isDisabled: !_v1 && _v9,
      onClick: _v1 ? _v11 : _v12,
      children: _v1 ? _v21.T_END_QNA_SESSION : _v21.T_START_QNA
    });
  }], 0);
}