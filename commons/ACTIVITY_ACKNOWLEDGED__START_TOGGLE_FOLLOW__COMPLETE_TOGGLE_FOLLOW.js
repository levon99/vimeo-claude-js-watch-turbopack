{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  let _v9 = _v0 => _v0 => (0, _v8.postActivityAcknowledged)(_v0).then(_v0 => {
      _v0({
        type: "ACTIVITY_ACKNOWLEDGED",
        payload: _v0
      });
    }),
    _v10 = _v0 => _v0 => (_v0({
      type: "START_TOGGLE_FOLLOW",
      payload: _v0
    }), (0, _v8.postToggleFollow)(_v0).then(_v0 => {
      _v0({
        type: "COMPLETE_TOGGLE_FOLLOW",
        payload: _v0
      });
    }));
  _v0.s(["fetchNewActivities", 0, () => (_v0, _v1) => {
    let _v2 = _v1().activities,
      _v3 = _v2.length ? _v2[0].id : null;
    return (0, _v8.getActivitySummary)(null, null, _v3).then(_v0 => {
      _v0({
        type: "RECEIVE_NEW_ACTIVITIES",
        payload: _v0,
        error: !1
      });
    });
  }, "fetchOlderActivities", 0, _v0 => (_v0, _v1) => {
    let _v2 = _v1().activities,
      _v3 = _v2.length,
      _v4 = _v3 ? _v2[_v3 - 1].id : null;
    return _v0({
      type: "REQUEST_OLDER_ACTIVITIES"
    }), (0, _v8.getActivitySummary)(_v0, _v4).then(_v0 => {
      _v0({
        type: "RECEIVE_OLDER_ACTIVITIES",
        payload: {
          pageSize: _v0,
          ..._v0
        },
        error: !1
      });
    });
  }, "markActivityAcknowledged", 0, _v9, "markAllActivitiesDisplayed", 0, () => (_v0, _v1) => {
    let _v2 = _v1().activities[0];
    _v2 && !_v2.displayed && (0, _v8.postPriorActivitiesDisplayed)(_v2.id);
  }, "showAllActivitiesDisplayed", 0, () => ({
    type: "ACTIVITIES_DISPLAYED"
  }), "toggleFollow", 0, _v10], 0);
  var _v11 = _v0.i(0);
  _v0.s(["actions", 0, _v11], 0);
  var _v11 = _v11;
  let _v12 = {
    ACTIVITY: "notification",
    FOLLOW: "follow",
    UNFOLLOW: "unfollow",
    TOPNAV: "notifications",
    DROPDOWN: "panel",
    CTA_THUMBNAIL: "thumbnail",
    CTA_VIEW: "view",
    AVATAR: "avatar"
  };
  _v0.s(["ACTIVITYPAGE_PAGE_SIZE", 0, 15, "FA_COMPONENTS", 0, _v12, "FA_CONTAINERS", 0, {
    ACTIVITYPAGE: "activity_feed",
    TOPNAV: "top_nav",
    DROPDOWN: "notifications"
  }, "FA_KEYWORDS", 0, {
    clipLike: "video_like",
    userFollow: "user_follow",
    clipComment: "comment",
    commentReply: "comment_reply",
    clipCredit: "video_credit",
    commentMention: "comment_mention",
    userMessage: "message",
    clipTranscodeComplete: "upload",
    clipShare: "video_share",
    channelFollow: "channel_follow",
    vodNewPurchase: "vod_purchase",
    vodPreorderRelease: "vod_preorder",
    vodRentalExpire: "vod_expire",
    seeAll: "see_all",
    newNotifications: "new_notifications",
    noNotifications: "no_notifications"
  }, "FOOTER_BUFFER", 0, 500, "ONE_MINUTE", 0, 0, "SCROLL_THROTTLE", 0, 300, "TOPNAV_PAGE_SIZE", 0, 5, "TWO_MINUTES", 0, 0], 0);
  var _v13 = _v0.i(0);
  _v0.s(["constants", 0, _v13], 0);
  var _v13 = _v13,
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0);
  let _v22 = ({
      disabled: _v0,
      isFollowing: _v1,
      onClick: _v2
    }) => {
      let [_v3, _v4] = (0, _v5.useState)(!1),
        [_v5, _v6] = (0, _v5.useState)("blue.500");
      return (0, _v5.useEffect)(() => {
        _v1 && _v3 ? _v6("status-destructive-primary") : _v1 ? _v6("status-positive-primary") : _v6("blue.500");
      }, [_v1, _v3]), (0, _v1.jsx)(_v18.Button, {
        isDisabled: _v0,
        size: "sm",
        onClick: _v2,
        variant: "tertiary",
        sx: {
          color: _v5,
          borderColor: _v5
        },
        onMouseEnter: () => _v4(!0),
        onFocus: () => _v4(!0),
        onMouseLeave: () => _v4(!1),
        onBlur: () => _v4(!1),
        leftIcon: _v1 && _v3 ? (0, _v1.jsx)(_v20.CloseXSmall, {}) : _v1 ? (0, _v1.jsx)(_v19.CheckSmall, {}) : (0, _v1.jsx)(_v21.PlusSmall, {}),
        children: _v1 && _v3 ? (0, _v17.translate)({
          singular: "Unfollow",
          dictionary: {
            es: {
              singular: "Dejar de seguir"
            },
            "de-DE": {
              singular: "Nicht mehr folgen"
            },
            "fr-FR": {
              singular: "Ne plus suivre"
            },
            "ja-JP": {
              singular: "フォロー解除"
            },
            "ko-KR": {
              singular: "팔로우 취소"
            },
            "pt-BR": {
              singular: "Parar de seguir"
            },
            "zh-CN": {
              singular: "取消关注"
            }
          }
        }) : _v1 ? (0, _v17.translate)({
          singular: "Following",
          dictionary: {
            es: {
              singular: "Siguiendo"
            },
            "de-DE": {
              singular: "Folgt"
            },
            "fr-FR": {
              singular: "Abonné"
            },
            "ja-JP": {
              singular: "フォロー中"
            },
            "ko-KR": {
              singular: "팔로잉"
            },
            "pt-BR": {
              singular: "Seguindo"
            },
            "zh-CN": {
              singular: "关注"
            }
          }
        }) : (0, _v17.translate)({
          singular: "Follow",
          dictionary: {
            es: {
              singular: "Seguir"
            },
            "de-DE": {
              singular: "Folgen"
            },
            "fr-FR": {
              singular: "Suivre"
            },
            "ja-JP": {
              singular: "フォロー"
            },
            "ko-KR": {
              singular: "팔로우"
            },
            "pt-BR": {
              singular: "Seguir"
            },
            "zh-CN": {
              singular: "关注"
            }
          }
        })
      });
    },
    _v23 = _v0 => {
      let {
        href: _v1,
        onClick: _v2,
        text: _v3
      } = _v0;
      return (0, _v1.jsx)("a", {
        href: _v1,
        onClick: _v2,
        children: (0, _v1.jsx)(_v18.Button, {
          size: "sm",
          variant: "tertiary",
          color: "blue.500",
          borderColor: "blue.500",
          children: _v3
        })
      });
    };
  var _v24 = _v0.i(0);
  let _v25 = _v24.default.span.withConfig({
      displayName: "Reaction__StyledReactionWithCode",
      componentId: "sc-5190ae7f-0"
    })`
  font-size: medium;
  position: absolute;
  left: 3rem;
  top: ${({
      containerHeight: _v0
    }) => _v0 && _v0 > 80 ? "3rem" : "2rem"};
`,
    _v26 = ({
      reactionCode: _v0,
      containerHeight: _v1
    }) => {
      switch (_v0) {
        case "heart":
          return (0, _v1.jsx)(_v25, {
            containerHeight: _v1,
            role: "button",
            children: "❤️"
          });
        case "face_with_open_mouth":
          return (0, _v1.jsx)(_v25, {
            containerHeight: _v1,
            role: "button",
            children: "😮"
          });
        case "fire":
          return (0, _v1.jsx)(_v25, {
            containerHeight: _v1,
            role: "button",
            children: "🔥"
          });
        case "heart_eyes":
          return (0, _v1.jsx)(_v25, {
            containerHeight: _v1,
            role: "button",
            children: "😍"
          });
        case "thinking_face":
          return (0, _v1.jsx)(_v25, {
            containerHeight: _v1,
            role: "button",
            children: "🤔"
          });
        case "thumbs_up":
          return (0, _v1.jsx)(_v25, {
            containerHeight: _v1,
            role: "button",
            children: "👍"
          });
        default:
          return null;
      }
    },
    _v27 = _v0 => {
      window && window.__fa && window.__fa.push(["trackEvent", _v0]);
    },
    _v28 = (0, _v6.connect)(_v0 => ({
      pendingFollows: _v0.pendingFollows
    }), _v0 => ({
      markActivityAcknowledged: _v0 => _v0(_v9(_v0)),
      toggleFollow: _v0 => _v0(_v10(_v0))
    }))(_v0 => {
      let {
          activity: {
            displayed: _v1,
            text: _v2,
            timestamp: _v3,
            url: _v4,
            subject_thumbnail: _v5,
            subject_url: _v6
          }
        } = _v0,
        _v7 = _v0 => ({
          ..._v0.fatalAttraction,
          component: _v12[_v0]
        }),
        _v8 = (0, _v5.useRef)(null),
        _v9 = () => {
          let {
            id: _v0,
            cta_follower_id: _v1,
            cta_is_following: _v2
          } = _v0.activity;
          _v27(_v7(_v2 ? "UNFOLLOW" : "FOLLOW")), _v0.toggleFollow(_v1), _v0.markActivityAcknowledged(_v0);
        },
        _v10 = new Date(Math.floor(1e-6 * _v3)),
        _v11 = _v0.activity?.metadata?.reaction_code,
        _v12 = _v8.current?.getBoundingClientRect()?.height;
      return (0, _v1.jsx)(_v15.Box, {
        id: "NotificationWrapper",
        ref: _v8,
        position: "relative",
        children: (0, _v1.jsxs)(_v15.Box, {
          margin: "8px",
          borderRadius: "md",
          background: _v1 ? "transparent" : "fill-component",
          _hover: {
            background: "fill-component-hover",
            _dark: {
              background: "fill-component-hover-dark"
            }
          },
          children: [(0, _v1.jsx)(_v15.Box, {
            as: "a",
            href: _v6 || _v4,
            onClick: () => {
              _v27(_v7("AVATAR"));
            },
            position: "absolute",
            left: (0, _v3.rem)(16),
            borderRadius: "50%",
            top: "50%",
            transform: "translateY(-50%)",
            overflow: "hidden",
            width: (0, _v3.rem)(40),
            height: (0, _v3.rem)(40),
            sx: {
              path: {
                fill: "white"
              },
              img: {
                width: "100%"
              },
              svg: {
                width: "100%"
              }
            },
            children: (0, _v1.jsx)(_v14.Avatar, {
              src: _v5?.src_4x || "https://i.vimeocdn.com/portrait/defaults-blue_64x64",
              alt: "user avatar image",
              size: "md"
            })
          }), _v11 && (0, _v1.jsx)(_v26, {
            containerHeight: _v12,
            reactionCode: _v11
          }), (0, _v1.jsxs)(_v15.Box, {
            as: "a",
            href: _v4,
            onClick: _v0 => {
              _v27(_v0.fatalAttraction), _v0.markActivityAcknowledged(_v0.activity.id), _v0.currentTarget.href = _v4.includes("?") ? `${_v4}&activityReferer=1` : `${_v4}?activityReferer=1`;
            },
            display: "block",
            width: "100%",
            padding: `${(0, _v3.rem)(16)} ${!_v0.showCta ? (0, _v3.rem)(24) : (0, _v3.rem)(145)}`,
            paddingLeft: (0, _v3.rem)(68),
            children: [(0, _v1.jsx)(_v15.Box, {
              id: "NotificationMessage",
              color: "text-primary",
              fontSize: (0, _v3.rem)(14),
              sx: {
                wordWrap: "break-word"
              },
              children: _v2
            }), (0, _v1.jsx)(_v15.Box, {
              id: "NotificationTime",
              as: "time",
              color: "text-secondary",
              cursor: "pointer",
              fontSize: (0, _v3.rem)(12),
              lineHeight: (0, _v3.rem)(18),
              children: (0, _v16.fromNow)(_v10)
            })]
          }), (() => {
            let _v0, _v1, _v2;
            if (!_v0.showCta) return null;
            switch (_v0.activity.type) {
              case "vodNewPurchase":
              case "vodPreorderRelease":
              case "vodRentalExpire":
              case "clipTranscodeComplete":
              case "clipLike":
              case "clipComment":
              case "commentMention":
              case "commentReply":
              case "clipCredit":
              case "clipShare":
              case "clipAddedToAlbum":
              case "clipInvite":
              case "clipMoved":
              case "clipPublish":
              case "clipPurged":
              case "clipRenamed":
              case "commentResolved":
              case "svvComment":
              case "reaction":
              case "svvCommentReply":
              case "clipCommentMention":
              case "clipReviewStatusUpdated":
              case "versionContentScan":
              case "clipVersionDeleted":
              case "clipVersionReplaced":
                _v0 = (() => {
                  let {
                    cta_url: _v0,
                    cta_thumbnail: _v1
                  } = _v0.activity;
                  return (0, _v1.jsx)("a", {
                    href: _v0 || void 0,
                    onClick: () => {
                      _v27(_v7("CTA_THUMBNAIL"));
                    },
                    children: (0, _v1.jsx)("img", {
                      src: _v1 ? _v1.src_4x : void 0
                    })
                  });
                })();
                break;
              case "channelFollow":
              case "userFollow":
                _v0 = (() => {
                  let {
                    cta_is_following: _v0,
                    cta_follower_id: _v1
                  } = _v0.activity;
                  return null === _v0 ? null : (0, _v1.jsx)(_v22, {
                    disabled: !!_v0.pendingFollows[_v1],
                    isFollowing: _v0,
                    onClick: _v9
                  });
                })();
                break;
              case "userMessage":
                _v1 = (0, _v17.translate)({
                  singular: "View message",
                  dictionary: {
                    es: {
                      singular: "Ver mensaje"
                    },
                    "de-DE": {
                      singular: "Nachricht anzeigen"
                    },
                    "fr-FR": {
                      singular: "Voir le message"
                    },
                    "ja-JP": {
                      singular: "メッセージを見る"
                    },
                    "ko-KR": {
                      singular: "메시지 보기"
                    },
                    "pt-BR": {
                      singular: "Ver mensagem"
                    },
                    "zh-CN": {
                      singular: "查看消息"
                    }
                  }
                }), _v2 = _v0.activity.url, _v0 = (0, _v1.jsx)(_v23, {
                  href: _v2,
                  text: _v1,
                  onClick: () => {
                    _v27(_v7("CTA_VIEW"));
                  }
                });
            }
            return _v0 ? (0, _v1.jsx)(_v15.Box, {
              maxWidth: (0, _v3.rem)(107),
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              right: (0, _v3.rem)(16),
              sx: {
                img: {
                  verticalAlign: "middle",
                  borderRadius: (0, _v3.rem)(8)
                }
              },
              children: _v0
            }) : null;
          })()]
        })
      });
    });
  _v0.s(["Container", 0, _v28], 0);
  var _v29 = _v0.i(0),
    _v30 = _v0.i(0);
  let _v31 = _v24.default.div.withConfig({
      displayName: "ActivityEmptyState__Wrapper",
      componentId: "sc-958b37ef-0"
    })`
  font-size: ${(0, _v3.rem)(14)};
  line-height: ${(0, _v3.rem)(20)};
  text-align: center;
`,
    _v32 = () => (0, _v1.jsxs)(_v31, {
      children: [(0, _v1.jsx)(_v30.Bell, {
        boxSize: "3.75rem",
        mb: (0, _v3.rem)(12),
        color: "slate.200"
      }), (0, _v1.jsx)(_v29.Text, {
        variant: "heading-xs",
        mb: (0, _v3.rem)(7),
        children: (0, _v17.translate)({
          singular: "No activity in the past 30 days",
          dictionary: {
            es: {
              singular: "Sin actividad en los últimos 30 días"
            },
            "de-DE": {
              singular: "Keine Aktivität in den letzten 30 Tagen"
            },
            "fr-FR": {
              singular: "Aucune activité au cours des 30 derniers jours"
            },
            "ja-JP": {
              singular: "過去 30 日間アクティビティがありません"
            },
            "ko-KR": {
              singular: "지난 30일 활동 없음"
            },
            "pt-BR": {
              singular: "Nenhuma atividade nos últimos 30 dias"
            },
            "zh-CN": {
              singular: "过去 30 天内无活动"
            }
          }
        })
      }), (0, _v1.jsx)(_v29.Text, {
        variant: "body-md",
        color: "text-secondary",
        _dark: {
          color: "text-secondary"
        },
        children: (0, _v17.translate)({
          singular: "We'll alert you once something cool happens.",
          dictionary: {
            es: {
              singular: "Te avisaremos cuando suceda algo interesante."
            },
            "de-DE": {
              singular: "Wir sagen dir Bescheid, sobald etwas Cooles passiert."
            },
            "fr-FR": {
              singular: "Nous vous préviendrons si quelque chose d'intéressant se présente."
            },
            "ja-JP": {
              singular: "何かオススメがありましたらお知らせします。"
            },
            "ko-KR": {
              singular: "흥미로운 것이 있으면 알려드립니다."
            },
            "pt-BR": {
              singular: "Alertaremos você assim que algo bacana acontecer."
            },
            "zh-CN": {
              singular: "一旦有好事发生，我们将及时通知您。"
            }
          }
        })
      })]
    });
  _v0.s(["ActivityEmptyState", 0, _v32], 0);
  var _v33 = _v0.i(0);
  let _v34 = _v0 => {
    let _v1 = (0, _v33.default)(_v0 => {
      _v0.scrollTop + _v0.offsetHeight < _v0.scrollHeight || _v0.onScrolledToBottom();
    }, 300);
    return (0, _v1.jsx)(_v1.Fragment, {
      children: _v0.children({
        onScroll: _v0 => {
          _v0.target instanceof HTMLElement && _v1(_v0.target);
        }
      })
    });
  };
  var _v35 = _v0.i(0),
    _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0);
  let _v39 = _v24.default.div.withConfig({
      displayName: "style__Content",
      componentId: "sc-e8f7d4f1-0"
    })`
  height: ${(0, _v3.rem)(287)};
  overflow-y: auto;
  ${({
      centered: _v0
    }) => _v0 && `
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    `}
  @media screen and (max-width: ${489}px) {
    height: calc(100% - ${(0, _v3.rem)(78)}); // 78px is the height of the header and footer combined
  }
`,
    _v40 = _v24.default.div.withConfig({
      displayName: "style__Wrapper",
      componentId: "sc-e8f7d4f1-1"
    })`
  position: relative;
  line-height: 1rem;

  ${({
      unavailable: _v0
    }) => _v0 && `
      opacity: 0.5;

      &:hover {
        cursor: auto;
      }
    `}
`,
    _v41 = () => (0, _v1.jsx)(_v15.Box, {
      display: "flex",
      justifyContent: "center",
      margin: "10px auto",
      children: (0, _v1.jsx)(_v38.Spinner, {})
    }),
    {
      fetchOlderActivities: _v42,
      markAllActivitiesDisplayed: _v43,
      showAllActivitiesDisplayed: _v44
    } = _v11,
    {
      ACTIVITYPAGE_PAGE_SIZE: _v45,
      TOPNAV_PAGE_SIZE: _v46,
      FA_COMPONENTS: _v47,
      FA_CONTAINERS: _v48,
      FA_KEYWORDS: _v49
    } = _v13,
    _v50 = (0, _v2.default)(async () => {
      let {
        Tooltip: _v0
      } = await _v0.A(0);
      return {
        default: _v0
      };
    }, {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v51 = (0, _v6.connect)(_v0 => ({
      activities: _v0.activities,
      shouldIndicateUndisplayedActivities: _v0.shouldIndicateUndisplayedActivities,
      isRequestingOlderActivities: _v0.isRequestingOlderActivities,
      noOlderActivitiesExist: _v0.noOlderActivitiesExist
    }), _v0 => ({
      fetchOlderActivities: _v0 => _v0(_v42(_v0)),
      markAllActivitiesDisplayed: () => _v0(_v43()),
      showAllActivitiesDisplayed: () => _v0(_v44())
    }))(_v0 => {
      let {
          activities: _v1,
          isRequestingOlderActivities: _v2,
          noOlderActivitiesExist: _v3,
          fetchOlderActivities: _v4,
          onClick: _v5
        } = _v0,
        [_v6, _v7] = (0, _v5.useState)(!1),
        [_v8, _v9] = (0, _v5.useState)(!0),
        _v10 = (0, _v5.useRef)(null),
        _v11 = (0, _v5.useRef)(null),
        _v12 = _v0 => {
          _v0.target && !_v10?.current?.contains(_v0.target) && _v14();
        },
        _v13 = _v0 => {
          27 === _v0.keyCode && _v14();
        },
        _v14 = () => {
          window.innerWidth <= 489 && "hidden" !== document.documentElement.style.overflow && (document.documentElement.style.overflowY = ""), _v7(!1);
        },
        _v15 = () => _v0.shouldIndicateUndisplayedActivities && "/activity" !== location.pathname && !(() => {
          try {
            return 1 === _v4.default.parse(location.search).activityReferer;
          } catch {
            return !1;
          }
        })();
      return (0, _v5.useEffect)(() => {
        _v0.fetchOlderActivities(window.innerWidth <= 489 ? _v45 : _v46).then(() => {
          _v9(!1);
        }).catch(() => {
          _v9(!0);
        });
      }, []), (0, _v5.useEffect)(() => {
        _v6 ? (document.addEventListener("click", _v12), document.addEventListener("keyup", _v13), _v0.markAllActivitiesDisplayed()) : (document.removeEventListener("click", _v12), document.removeEventListener("keyup", _v13), _v0.showAllActivitiesDisplayed()), _v10.current?.addEventListener("selectstart", () => !1);
      }, [_v6]), (0, _v1.jsxs)(_v40, {
        ref: _v10,
        children: [(0, _v1.jsx)(_v50, {
          label: (0, _v17.translate)({
            singular: "Activity",
            dictionary: {
              es: {
                singular: "Actividad"
              },
              "de-DE": {
                singular: "Aktivität"
              },
              "fr-FR": {
                singular: "Activité"
              },
              "ja-JP": {
                singular: "アクティビティ"
              },
              "ko-KR": {
                singular: "활동"
              },
              "pt-BR": {
                singular: "Atividade"
              },
              "zh-CN": {
                singular: "活动"
              }
            }
          }),
          placement: "bottom",
          isDisabled: window.innerWidth <= 489,
          children: (0, _v1.jsx)(_v35.IconButton, {
            "aria-label": "Bell Notification",
            variant: "tertiary",
            icon: (0, _v1.jsx)(_v30.Bell, {}),
            onClick: _v0 => {
              _v8 || _v11?.current?.contains(_v0.target) || (() => {
                if (_v6) _v14();else {
                  _v7(!_v6), window.innerWidth <= 489 && "hidden" !== document.documentElement.style.overflow && (document.documentElement.style.overflowY = "hidden");
                  let _v0 = _v15();
                  _v7.FatalAttraction.trackClick({
                    container: _v48.TOPNAV,
                    component: _v47.TOPNAV,
                    keyword: _v49[_v0 ? "newNotifications" : "noNotifications"]
                  });
                }
              })(), _v5?.();
            },
            isActive: (0, _v37.useIsBokeh)() && _v6,
            size: {
              base: "sm",
              sm: "md"
            },
            _after: {
              content: "' '",
              background: "red",
              borderRadius: "50%",
              width: (0, _v3.rem)(8),
              height: (0, _v3.rem)(8),
              position: "absolute",
              top: (0, _v3.rem)(8),
              right: (0, _v3.rem)(8),
              display: _v15() ? "block" : "none"
            }
          })
        }), (0, _v1.jsxs)(_v15.Box, {
          id: "DropdownMenu",
          ref: _v11,
          width: (0, _v3.rem)(360),
          background: "fill-blur",
          backdropFilter: "blur(var(--vimeo-blur-lg))",
          borderRadius: "md",
          boxShadow: "var(--vimeo-shadows-md)",
          position: "absolute",
          top: (0, _v3.rem)(47),
          right: 0,
          display: _v6 ? "block" : "none",
          zIndex: 1,
          sx: {
            "@media screen and (max-width: 489px)": {
              position: "fixed",
              width: "100vw",
              height: "100vh",
              top: 0,
              zIndex: 2
            }
          },
          children: [(0, _v1.jsxs)(_v15.Box, {
            id: "Header",
            fontSize: (0, _v3.rem)(16),
            lineHeight: (0, _v3.rem)(20),
            padding: "md",
            fontWeight: "bold",
            color: "text-primary",
            sx: {
              "@media screen and (max-width: 489px)": {
                display: "flex",
                height: (0, _v3.rem)(41)
              }
            },
            children: [(0, _v1.jsx)(_v35.IconButton, {
              "aria-label": "Dismiss Activity",
              variant: "tertiary",
              icon: (0, _v1.jsx)(_v36.CloseXFilled, {
                boxSize: "sm"
              }),
              size: "sm",
              onClick: _v14,
              display: "none",
              sx: {
                "@media (max-width: 489px)": {
                  display: "block",
                  top: (0, _v3.rem)(-5),
                  marginRight: (0, _v3.rem)(10)
                }
              }
            }), (0, _v17.translate)({
              singular: "Activity",
              dictionary: {
                es: {
                  singular: "Actividad"
                },
                "de-DE": {
                  singular: "Aktivität"
                },
                "fr-FR": {
                  singular: "Activité"
                },
                "ja-JP": {
                  singular: "アクティビティ"
                },
                "ko-KR": {
                  singular: "활동"
                },
                "pt-BR": {
                  singular: "Atividade"
                },
                "zh-CN": {
                  singular: "活动"
                }
              }
            })]
          }), (0, _v1.jsx)(_v34, {
            onScrolledToBottom: () => {
              _v2 || _v3 || _v4(_v46);
            },
            children: ({
              onScroll: _v0
            }) => (0, _v1.jsxs)(_v39, {
              onScroll: _v0,
              centered: !_v1.length && (_v2 || _v3),
              children: [_v1.length ? (0, _v1.jsx)("div", {
                children: _v1.map(_v0 => (0, _v1.jsx)(_v28, {
                  showCta: !1,
                  activity: _v0,
                  fatalAttraction: {
                    container: _v48.DROPDOWN,
                    component: _v47.DROPDOWN,
                    keyword: _v49[_v0.type]
                  }
                }, _v0.id))
              }) : _v2 ? null : (0, _v1.jsx)(_v32, {}), _v2 ? (0, _v1.jsx)(_v41, {}) : null]
            })
          }), _v1?.length > 0 ? (0, _v1.jsx)(_v15.Box, {
            id: "Footer",
            children: (0, _v1.jsx)(_v15.Box, {
              display: "flex",
              justifyContent: "center",
              padding: "sm",
              children: (0, _v1.jsx)(_v18.Button, {
                as: "a",
                href: "/activity",
                onClick: () => {
                  _v7.FatalAttraction.trackClick({
                    container: _v48.DROPDOWN,
                    component: _v47.DROPDOWN,
                    keyword: _v49.seeAll
                  });
                },
                size: "sm",
                variant: "tertiary",
                children: (0, _v17.translate)({
                  singular: "See all",
                  dictionary: {
                    es: {
                      singular: "Ver toda"
                    },
                    "de-DE": {
                      singular: "Alle anzeigen"
                    },
                    "fr-FR": {
                      singular: "Tout voir"
                    },
                    "ja-JP": {
                      singular: "すべてを見る"
                    },
                    "ko-KR": {
                      singular: "모두 보기"
                    },
                    "pt-BR": {
                      singular: "Veja todas"
                    },
                    "zh-CN": {
                      singular: "查看全部"
                    }
                  }
                })
              })
            })
          }) : null]
        })]
      });
    });
  _v0.s(["ActivityDropdown", 0, _v51], 0);
}