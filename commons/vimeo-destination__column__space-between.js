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
    _v34 = _v0.i(0);
  function _v35({
    id: _v0 = (0, _v32.createLiveDomName)("vimeo-destination"),
    className: _v1 = (0, _v32.createLiveDomName)("vimeo-destination"),
    composerSessionContext: {
      sessionInfo: {
        value: _v2,
        isLoading: _v3
      }
    } = (0, _v2.useManager)(_v11.ComposerSessionManager),
    composerSessionStatusContext: {
      scheduledStartTime: _v4
    } = (0, _v2.useManager)(_v28.ComposerSessionStatusManager)
  }) {
    let {
        trackLiveStreamDestinationActionClicked: _v5
      } = (0, _v31.useLiveStreamBroadcasterTracking)(),
      _v6 = _v2?.appearanceLink?.uri,
      _v7 = (0, _v30.getThumbnail)(_v2?.thumbnail.sizes);
    return (0, _v1.jsxs)(_v4.Flex, {
      id: _v0,
      className: _v1,
      direction: "column",
      gap: (0, _v8.rem)(12),
      children: [(0, _v1.jsxs)(_v4.Flex, {
        justifyContent: "space-between",
        children: [(0, _v1.jsx)(_v4.Flex, {
          children: (0, _v1.jsx)(_v34.StyledOttIcon, {})
        }), _v6 ? (0, _v1.jsx)(_v23.Button, {
          size: "sm",
          variant: "secondary",
          leftIcon: (0, _v1.jsx)(_v26.SimplePopOutArrow, {}),
          as: "a",
          target: "_blank",
          href: _v6,
          onClick: () => {
            (0, _v29.trackOpenCustomizePlayer)(), _v5({
              liveStreamDestination: "vimeo",
              liveStreamDestinationAction: "customize"
            });
          },
          children: _v33.translations.customize
        }) : null]
      }), (0, _v1.jsx)(_v4.Flex, {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: (0, _v8.rem)(8),
        border: "1px solid",
        borderColor: "stroke",
        height: (0, _v8.rem)(167),
        width: "100%",
        background: `url(${_v7?.link}) center/cover no-repeat content-box`,
        "background-color": "surface",
        overflow: "hidden",
        children: _v3 ? null : (0, _v1.jsx)(_v4.Flex, {
          direction: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.64)",
          children: _v4 ? (0, _v1.jsxs)(_v1.Fragment, {
            children: [(0, _v1.jsx)(_v25.Paragraph, {
              color: "white",
              size: "md",
              children: _v33.translations.thisEventIsScheduledFor
            }), (0, _v1.jsx)(_v24.Header, {
              color: "white",
              size: "md",
              children: new Date(_v4).toLocaleString((0, _v27.getCurrentLocale)(), {
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "numeric"
              })
            })]
          }) : (0, _v1.jsx)(_v25.Paragraph, {
            color: "white",
            size: "md",
            children: _v33.translations.thisEventHasNotStartedYet
          })
        })
      })]
    });
  }
  var _v36 = _v0.i(0),
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
    _v47 = _v0.i(0),
    _v48 = _v0.i(0),
    _v49 = _v0.i(0),
    _v50 = _v0.i(0),
    _v51 = _v0.i(0),
    _v52 = _v0.i(0),
    _v53 = _v0.i(0);
  function _v54({
    id: _v0 = (0, _v32.createLiveDomName)("youtube-destination"),
    className: _v1 = (0, _v32.createLiveDomName)("youtube-destination"),
    isDisabled: _v2 = !1,
    destinationsContext: {
      destinations: {
        youtube: _v3
      },
      connections: {
        youtube: _v4
      },
      destinationsActions: _v5,
      destinationsConnectionActions: _v6,
      hasValidConnection: _v7
    } = (0, _v2.useManager)(_v12.DestinationsManager),
    composerSessionStatusContext: {
      liveComposerStatusGetters: {
        isStreaming: _v8
      },
      isProvisionUpdating: _v9
    } = (0, _v2.useManager)(_v28.ComposerSessionStatusManager)
  }) {
    let {
        trackLiveStreamDestinationActionClicked: _v10
      } = (0, _v31.useLiveStreamBroadcasterTracking)(),
      {
        isOpen: _v11,
        onClose: _v12,
        onToggle: _v13
      } = (0, _v39.useDisclosure)(),
      _v14 = _v3?.value?.[0],
      _v15 = (0, _v16.useViewer)(),
      _v16 = _v15 && _v15.user && _v14?.userId === _v15.user.id,
      _v17 = !!(!_v14 || _v14?.metadata?.connectionStatus?.isConnected && !_v14?.metadata?.connectionStatus?.isConnectionBroken),
      _v18 = (0, _v48.useIsLiveDemoSubscription)(),
      _v19 = _v7(_v14.EDestinationServiceName.YOUTUBE),
      _v20 = !!(_v8() && _v14?.isEnabled),
      _v21 = _v14?.state === _v14.EDestinationState.HAS_ERROR || _v18,
      _v22 = (0, _v3.useCallback)(() => {
        _v14 && _v5.toggleSocialDestination(_v14);
      }, [_v14, _v5]),
      _v23 = (0, _v3.useCallback)(() => {
        _v14 && ((0, _v49.trackRemoveYoutubeDestination)(), _v5.removeSocialDestination(_v14)), _v12();
      }, [_v5, _v14, _v12]),
      _v24 = (0, _v3.useCallback)(() => {
        _v5.openActiveModal(_v14.EDestinationModal.YOUTUBE_SETTINGS);
      }, [_v5]),
      _v25 = (0, _v50.inline)(() => (0, _v1.jsx)(_v4.Flex, {
        cursor: _v18 ? "not-allowed" : "auto",
        children: (0, _v1.jsx)(_v23.Button, {
          isDisabled: _v18 || _v2,
          variant: "secondary",
          size: "sm",
          onClick: () => {
            (0, _v49.trackYoutubeConnect)(!!_v4.value?.isConnectionBroken), _v10({
              liveStreamDestination: "youtube",
              liveStreamDestinationAction: "connect"
            }), _v6.openSocialConnect(_v14.EDestinationServiceName.YOUTUBE);
          },
          children: _v4.value?.isConnectionBroken ? _v52.rtmpTranslations.reconnect : _v52.rtmpTranslations.connect
        })
      })),
      _v26 = (0, _v50.inline)(() => (0, _v1.jsx)(_v45.BokehMenu, {
        isOpen: _v11,
        isDisabled: _v2,
        menuList: (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v47.BokehTooltip, {
            label: (0, _v50.inline)(() => _v16 ? null : _v52.rtmpTranslations.onlyUserWhoConnectedDestinationCanManage),
            placement: "top",
            children: (0, _v1.jsx)(_v46.BokehMenuItem, {
              icon: (0, _v1.jsx)(_v40.EditPencil, {}),
              isDisabled: _v20 || !_v16,
              onClick: () => {
                _v10({
                  liveStreamDestination: "youtube",
                  liveStreamDestinationAction: "customize"
                }), _v24();
              },
              children: (0, _v1.jsxs)(_v36.Box, {
                children: [(0, _v1.jsx)(_v38.Text, {
                  fontSize: "heading-xs",
                  variant: "body-xl",
                  children: _v52.rtmpTranslations.manageSettings
                }), (0, _v1.jsx)(_v38.Text, {
                  fontSize: "heading-xs",
                  variant: "body-xl",
                  color: "text-secondary",
                  children: _v52.rtmpTranslations.connectedBy + " " + _v14?.userDisplayName
                })]
              })
            })
          }), (0, _v1.jsx)(_v46.BokehMenuItem, {
            icon: (0, _v1.jsx)(_v43.TrashBin, {}),
            onClick: _v23,
            children: (0, _v1.jsx)(_v38.Text, {
              fontSize: "heading-xs",
              variant: "body-xl",
              children: _v52.rtmpTranslations.removeFromThisEvent
            })
          })]
        }),
        onClose: _v12,
        onClick: _v13
      })),
      _v27 = (0, _v50.inline)(() => _v14 ? _v16 && !_v17 ? _v25 : _v26 : _v19 ? (0, _v1.jsx)(_v23.Button, {
        isDisabled: _v18 || _v2,
        variant: "secondary",
        size: "sm",
        onClick: () => {
          _v10({
            liveStreamDestination: "youtube",
            liveStreamDestinationAction: "add"
          }), _v24();
        },
        children: _v52.rtmpTranslations.add
      }) : _v25);
    return (0, _v1.jsxs)(_v4.Flex, {
      id: _v0,
      className: _v1,
      direction: "column",
      width: "100%",
      children: [(0, _v1.jsxs)(_v4.Flex, {
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        children: [(0, _v1.jsxs)(_v4.Flex, {
          flexWrap: "nowrap",
          gap: (0, _v8.rem)(16),
          alignItems: "center",
          children: [(0, _v1.jsx)(_v44.Youtube, {
            minWidth: (0, _v8.rem)(24),
            minHeight: (0, _v8.rem)(24)
          }), (0, _v1.jsx)(_v24.Header, {
            size: "xs",
            color: "text-primary",
            children: _v52.rtmpTranslations.youtube
          })]
        }), (0, _v1.jsx)(_v4.Flex, {
          marginLeft: "auto",
          gap: (0, _v8.rem)(16),
          alignItems: "center",
          children: _v27
        })]
      }), !_v17 && !_v16 && (0, _v1.jsx)(_v4.Flex, {
        width: "100%",
        paddingTop: (0, _v8.rem)(16),
        alignItems: "center",
        children: (0, _v1.jsx)(_v5.Alert, {
          size: "sm",
          children: (0, _v1.jsx)(_v6.AlertDescription, {
            marginRight: "-8",
            children: _v52.rtmpTranslations.destinationBrokenNotice
          })
        })
      }), (0, _v1.jsxs)(_v4.Flex, {
        direction: "column",
        children: [_v14 ? (0, _v1.jsx)(_v4.Flex, {
          marginTop: (0, _v8.rem)(20),
          direction: "column",
          opacity: _v17 ? 1 : .5,
          cursor: _v17 ? "default" : "not-allowed",
          children: (0, _v1.jsxs)(_v4.Flex, {
            flexWrap: "nowrap",
            justifyContent: "space-between",
            alignItems: "center",
            children: [(0, _v1.jsxs)(_v4.Flex, {
              direction: "column",
              marginLeft: (0, _v8.rem)(38),
              children: [(0, _v1.jsx)(_v24.Header, {
                size: "xs",
                marginBottom: 0,
                children: _v14.displayName
              }), (0, _v1.jsx)(_v25.Paragraph, {
                color: "text-secondary",
                size: "md",
                margin: 0,
                textTransform: "capitalize",
                children: (0, _v1.jsxs)(_v38.Text, {
                  variant: "body-xl",
                  display: "flex",
                  flexWrap: "nowrap",
                  href: (0, _v53.getYoutubeUrl)(_v14.providerBroadcastId, _v14.providerDestinationId),
                  fontSize: "text-sm",
                  color: "text-secondary",
                  target: "_blank",
                  as: "a",
                  _hover: _v51.HOVER_UNDERLINE_LINK_STYLE,
                  children: [`${_v14.type} - ${_v14.privacy}`, (0, _v1.jsx)(_v42.PopOut, {
                    marginLeft: (0, _v8.rem)(4),
                    width: (0, _v8.rem)(16),
                    height: (0, _v8.rem)(16)
                  })]
                })
              })]
            }), (0, _v1.jsx)(_v4.Flex, {
              cursor: _v14.state !== _v14.EDestinationState.OK ? "not-allowed" : "auto",
              children: (0, _v1.jsx)(_v47.BokehTooltip, {
                label: _v14.state === _v14.EDestinationState.OK ? void 0 : _v14.stateMessage === _v14.EYoutubeError.USER_LIVESTREAMING_ERROR ? _v52.rtmpTranslations.youtubeErrorNoLivestreaming : _v52.rtmpTranslations.restartBroadcastAndTryAgain,
                children: (0, _v1.jsxs)(_v4.Flex, {
                  alignItems: "center",
                  justifyContent: "flex-end",
                  children: [_v14.state === _v14.EDestinationState.HAS_ERROR ? (0, _v1.jsx)(_v4.Flex, {
                    children: (0, _v1.jsx)(_v41.InfoCircle, {
                      color: "red.500"
                    })
                  }) : null, (0, _v1.jsx)(_v37.Switch, {
                    isDisabled: _v21 || _v2 || _v9 || !_v17,
                    isChecked: _v14.isEnabled,
                    size: "sm",
                    onChange: _v22
                  })]
                })
              })
            })]
          })
        }) : null, _v19 && !_v14 ? (0, _v1.jsx)(_v25.Paragraph, {
          size: "md",
          color: "text-secondary",
          margin: `${(0, _v8.rem)(20)} 0 0 ${(0, _v8.rem)(40)}`,
          children: _v52.rtmpTranslations.noPagesAdded
        }) : null]
      })]
    });
  }
  var _v55 = _v0.i(0);
  _v0.s(["Destinations", 0, function ({
    id: _v0 = (0, _v15.createDomName)("live-destinations-settings"),
    className: _v1 = (0, _v15.createDomName)("live-destinations-settings"),
    composerSessionContext: {
      permissions: _v2
    } = (0, _v2.useManager)(_v11.ComposerSessionManager),
    eventSettingsContext: {
      settings: {
        value: _v3
      }
    } = (0, _v2.useManager)(_v13.EventSettingsManager),
    destinationsContext: {
      hasAnyDestinationsCreated: {
        value: _v4
      },
      connections: {
        youtube: _v5,
        facebook: _v6,
        linkedin: _v7
      }
    } = (0, _v2.useManager)(_v12.DestinationsManager)
  }) {
    let _v8 = (0, _v16.useViewer)(),
      _v9 = !!_v8?.isEnterpriseSite,
      _v10 = (0, _v10.useIsPublishToSocialRestricted)(),
      _v11 = !!_v3?.fromShowcase,
      _v12 = !!_v3?.hasRegistration,
      _v13 = !!_v3?.unlimitedDuration,
      _v14 = !!(_v10 || _v13 && !_v2.canUseExtendedStreamWithSimulcast),
      _v15 = (0, _v3.useMemo)(() => _v10 && _v4 ? _v55.sharedTranslations.destinationsAreRestrictedByOwner : _v10 ? _v55.sharedTranslations.destinationsStreamRestrictedByOwner : null, [_v10, _v4]);
    return (0, _v1.jsxs)(_v4.Flex, {
      id: _v0,
      className: _v1,
      direction: "column",
      width: "100%",
      gap: (0, _v8.rem)(20),
      children: [_v13 && !_v2.canUseExtendedStreamWithSimulcast ? (0, _v1.jsx)(_v5.Alert, {
        children: (0, _v1.jsx)(_v6.AlertDescription, {
          margin: 0,
          children: _v55.sharedTranslations.destinationsAreNotWithExtended
        })
      }) : null, _v10 ? (0, _v1.jsx)(_v5.Alert, {
        children: (0, _v1.jsx)(_v6.AlertDescription, {
          margin: 0,
          children: _v15
        })
      }) : null, _v12 ? (0, _v1.jsx)(_v5.Alert, {
        children: (0, _v1.jsx)(_v6.AlertDescription, {
          margin: 0,
          children: _v55.sharedTranslations.viewersAtDestinationsWillNot
        })
      }) : null, (0, _v1.jsx)(_v35, {
        id: (0, _v15.createDomName)(_v0, "vimeo"),
        className: (0, _v15.createDomName)(_v1, "vimeo")
      }), (0, _v1.jsx)(_v9.RemoveConnectionSharingNotificationForNonOwners, {
        shouldShow: _v8?.user?.id !== _v8?.team?.ownerId,
        from: "LIVE",
        marginY: (0, _v8.rem)(5)
      }), (0, _v1.jsx)(_v7.Divider, {
        borderColor: "stroke"
      }), _v11 ? (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v22.ShowcaseDestination, {
          id: (0, _v15.createDomName)(_v0, "showcase"),
          className: (0, _v15.createDomName)(_v1, "showcase")
        }), (0, _v1.jsx)(_v7.Divider, {
          borderColor: "stroke"
        })]
      }) : null, !_v9 && (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v18.FacebookDestination, {
          id: (0, _v15.createDomName)(_v0, "facebook"),
          className: (0, _v15.createDomName)(_v1, "facebook"),
          isDisabled: _v14
        }), (0, _v1.jsx)(_v7.Divider, {
          borderColor: "stroke"
        })]
      }), (0, _v1.jsx)(_v54, {
        id: (0, _v15.createDomName)(_v0, "youtube"),
        className: (0, _v15.createDomName)(_v1, "youtube"),
        isDisabled: _v14
      }), (0, _v1.jsx)(_v7.Divider, {
        borderColor: "stroke"
      }), !_v9 && (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v19.LinkedinDestination, {
          id: (0, _v15.createDomName)(_v0, "linkedin"),
          className: (0, _v15.createDomName)(_v1, "linkedin"),
          isDisabled: _v14
        }), (0, _v1.jsx)(_v7.Divider, {
          borderColor: "stroke"
        }), (0, _v1.jsx)(_v20.OttDestination, {
          id: (0, _v15.createDomName)(_v0, "ott"),
          className: (0, _v15.createDomName)(_v1, "ott"),
          isDisabled: _v10
        }), (0, _v1.jsx)(_v7.Divider, {
          borderColor: "stroke"
        }), (0, _v1.jsx)(_v21.CustomRtmpDestinations, {
          id: (0, _v15.createDomName)(_v0, "instagram"),
          className: (0, _v15.createDomName)(_v1, "instagram"),
          type: _v14.ECustomRtmpType.INSTAGRAM,
          isDisabled: _v14
        }), (0, _v1.jsx)(_v7.Divider, {
          borderColor: "stroke"
        }), (0, _v1.jsx)(_v21.CustomRtmpDestinations, {
          id: (0, _v15.createDomName)(_v0, "tiktok"),
          className: (0, _v15.createDomName)(_v1, "tiktok"),
          type: _v14.ECustomRtmpType.TIK_TOK,
          isDisabled: _v14
        }), (0, _v1.jsx)(_v7.Divider, {
          borderColor: "stroke"
        }), (0, _v1.jsx)(_v21.CustomRtmpDestinations, {
          id: (0, _v15.createDomName)(_v0, "twitter"),
          className: (0, _v15.createDomName)(_v1, "twitter"),
          type: _v14.ECustomRtmpType.TWITTER_X,
          isDisabled: _v14
        }), (0, _v1.jsx)(_v7.Divider, {
          borderColor: "stroke"
        })]
      }), (0, _v1.jsx)(_v21.CustomRtmpDestinations, {
        id: (0, _v15.createDomName)(_v0, "custom-rtmp"),
        className: (0, _v15.createDomName)(_v1, "custom-rtmp"),
        type: _v14.ECustomRtmpType.CUSTOM,
        isDisabled: _v14,
        isRestricted: _v10
      }), (0, _v1.jsx)(_v17.DestinationModals, {
        id: (0, _v15.createDomName)(_v0, "modal")
      })]
    });
  }], 0);
}