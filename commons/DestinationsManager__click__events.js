{
  "use strict";

  _v0.s(["DestinationsManager", () => _v73], 0);
  var _v1,
    _v2,
    _v3,
    _v4,
    _v5,
    _v6,
    _v7,
    _v8,
    _v9,
    _v10,
    _v11,
    _v12,
    _v13,
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0);
  function _v17(_v0, _v1, _v2) {
    (0, _v16.createBPv2EventFactory)(_v0, 3, () => ({
      ...(0, _v15.newTeamCtx)(),
      ...(0, _v15.newWebCtx)(),
      ...(0, _v15.newActionCtx)("click"),
      ...(0, _v15.newLiveCtx)({
        live_feature: _v2
      }),
      ...(0, _v15.newProductAnalyticsCtx)({
        product: "events",
        feature: "settings",
        location: "drawer",
        element: "dropdown_header",
        copy: _v1
      })
    }), () => ({
      device_type: _v14.browserConfig.BROWSER?.isMobile ? "mobile_web" : "web"
    }))({
      value: null
    });
  }
  _v0.s(["trackOpenAvailabilitySettings", 0, function () {
    _v17("vimeo.open_availability_settings", "Availability", "availability");
  }, "trackOpenBasicSettings", 0, function () {
    _v17("vimeo.open_basic_settings", "Basics", "basic_settings");
  }, "trackOpenDestinationSettings", 0, function () {
    _v17("vimeo.open_destinations_settings", "Destinations", "simulcast");
  }, "trackOpenPrivacySettings", 0, function () {
    _v17("vimeo.open_privacy_settings", "Privacy", "privacy");
  }, "trackOpenProductionSettings", 0, function () {
    _v17("vimeo.open_production_settings", "Production", "production");
  }, "trackOpenScheduleSettings", 0, function () {
    _v17("vimeo.open_schedule_settings", "Schedule", "scheduling");
  }], 0);
  var _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0);
  let _v25 = _v19.default.lazy(() => _v0.A(0).then(_v0 => ({
    default: _v0.ContentProtection
  })));
  _v0.s(["LiveEventAvailability", 0, function ({
    id: _v0 = (0, _v24.createLiveDomName)("availability-settings"),
    className: _v1 = (0, _v24.createLiveDomName)("availability-settings")
  }) {
    let {
        initialState: {
          sessionId: _v2
        }
      } = (0, _v22.useLiveGlobals)(),
      _v3 = Number(_v2);
    return (0, _v18.jsx)(_v19.Suspense, {
      fallback: (0, _v18.jsx)(_v23.BokehSkeleton, {
        h: (0, _v21.rem)(24),
        w: (0, _v21.rem)(260),
        borderRadius: "xs"
      }),
      children: (0, _v18.jsx)(_v20.Box, {
        id: _v0,
        className: _v1,
        sx: {
          "div:first-of-type": {
            justifyContent: "space-between"
          }
        },
        children: (0, _v18.jsx)(_v25, {
          resourceType: "live_events",
          resourceId: _v3
        })
      })
    });
  }], 0);
  var _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0);
  _v0.s(["useIsPublishToSocialRestricted", 0, function () {
    let _v0 = (0, _v27.useOptionalViewer)(),
      _v1 = (0, _v26.useManager)(_v28.UserPreferencesManager);
    return !!(_v0?.teamUser ? _v0.teamUser?.publishToSocialRestricted : _v1?.userPreferencesActions.isUserPreference(_v29.EUserPreference.PUBLISH_TO_SOCIAL, !1));
  }], 0);
  var _v30 = _v0.i(0),
    _v31 = _v26,
    _v32 = _v0.i(0),
    _v33 = _v0.i(0),
    _v34 = _v0.i(0),
    _v35 = _v0.i(0),
    _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0);
  function _v39(_v0) {
    return (0, _v37.withConnectionSupport)(_v38.ERequestMethod.GET, _v0, ({
      userId: _v0
    }) => ({
      path: `/users/${_v0}/destinations`
    }));
  }
  function _v40({
    destinationId: _v0,
    fields: _v1,
    gctlConfig: _v2
  }, _v3) {
    return (0, _v36.sendApiRequest)({
      method: _v38.ERequestMethod.PATCH,
      path: `/destination/${_v0}`,
      gctlConfig: _v2,
      fields: _v1,
      body: {
        isEnabled: _v3
      }
    });
  }
  var _v41 = _v0.i(0),
    _v42 = ((_v1 = {}).PAGE = "page", _v1.PROFILE = "profile", _v1.CHANNEL = "channel", _v1.ORGANIZATION = "organization", _v1),
    _v43 = ((_v2 = {}).CUSTOM = "custom", _v2.TIK_TOK = "tik_tok", _v2.INSTAGRAM = "instagram", _v2.TWITTER_X = "twitter_x", _v2),
    _v44 = ((_v3 = {}).CUSTOM_RTMP = "custom_rtmp", _v3.YOUTUBE = "youtube", _v3.FACEBOOK = "facebook", _v3.LINKEDIN = "linkedin", _v3),
    _v45 = ((_v4 = {}).PROFILE = "profile", _v4.ORGANIZATION = "organization", _v4),
    _v46 = ((_v5 = {}).PUBLIC = "public", _v5.PRIVATE = "private", _v5.UNLISTED = "unlisted", _v5.SELF = "self", _v5.FRIENDS = "all_friends", _v5.EVERYONE = "everyone", _v5.LINKEDIN_PUBLIC = "PUBLIC", _v5),
    _v47 = ((_v6 = {})[_v6.OK = 0] = "OK", _v6[_v6.HAS_ERROR = 1] = "HAS_ERROR", _v6),
    _v48 = ((_v7 = {}).ACCOUNT_CREATED_LESS_THEN_60_DAYS_AGO = "1363120", _v7.ACCOUNT_HAS_LESS_THEN_100_FOLLOWERS = "1363144", _v7),
    _v49 = ((_v8 = {}).PROFILE = "profile", _v8.ORGANIZATION = "organization", _v8),
    _v50 = ((_v9 = {}).USER_LIVESTREAMING_ERROR = "The user is not enabled for live streaming.", _v9),
    _v51 = ((_v10 = {}).NONE = "none", _v10.YOUTUBE_SETTINGS = "youtubeSettings", _v10.FACEBOOK_SETTINGS = "facebookSettings", _v10.LINKEDIN_CONNECT = "linkedinConnect", _v10.LINKEDIN_SETTINGS = "linkedinSettings", _v10.CUSTOM_RTMP_SETTINGS = "customRtmpSettings", _v10.OTT_SETTINGS = "ottSettings", _v10);
  _v0.s(["ECustomRtmpType", () => _v43, "EDestinationErrorStateMessage", () => _v48, "EDestinationModal", () => _v51, "EDestinationPrivacy", () => _v46, "EDestinationServiceName", () => _v44, "EDestinationState", () => _v47, "ELinkedinConnectionType", () => _v45, "ESocialConnectionScopeType", () => _v49, "ESocialType", () => _v42, "EYoutubeError", () => _v50], 0);
  var _v52 = _v0.i(0),
    _v53 = _v0.i(0),
    _v54 = _v0.i(0);
  function _v55(_v0, _v1, _v2) {
    let {
        destinations: _v3
      } = _v0.context,
      _v4 = _v2?.data?.body?.error ?? String(_v2);
    _v0.setContext({
      destinations: _v0.context.destinations.asMerged({
        [_v1]: _v3[_v1].asFailed(_v4)
      })
    });
  }
  async function _v56(_v0, _v1) {
    _v0.log.info("Loading available social connections:", _v1), _v0.assertIsInitialized();
    let {
      connections: _v2
    } = _v0.context;
    _v1.forEach(_v0 => {
      _v2[_v0].isLoading || _v0.setContext({
        connections: _v0.context.connections.asMerged({
          [_v0]: _v2[_v0].asLoading()
        })
      });
    });
    try {
      let _v0 = await _v39({
        connection: _v0.connections.availableDestinations,
        gctlConfig: (0, _v35.queryManagerGctlConfig)(_v0),
        fields: _v1
      });
      _v0.log.info("Loaded available social connections:", _v1, _v0), _v1.forEach(_v0 => {
        _v0.setContext({
          connections: _v0.context.connections.asMerged({
            [_v0]: _v0.context.connections[_v0].asReady(_v0[_v0])
          })
        });
      });
    } catch (_v0) {
      _v0.log.error("Failed to load available social connections:", _v0);
    }
  }
  async function _v57(_v0) {
    _v0.log.info("Loading destinations"), _v0.assertIsInitialized();
    try {
      var _v1;
      let {
        destinations: _v0
      } = _v0.context;
      Object.values(_v44).forEach(_v0 => {
        let _v1 = (0, _v34.camelizeString)(_v0);
        _v0[_v1].isLoading || _v0.setContext({
          destinations: _v0.context.destinations.asMerged({
            [_v1]: _v0[_v1].asLoading()
          })
        });
      });
      let _v1 = await (_v1 = {
        gctlConfig: (0, _v35.queryManagerGctlConfig)(_v0),
        connection: _v0.connections.destinations,
        fields: _v73.REQUIRED_DESTINATION_FIELDS
      }, (0, _v37.withConnectionSupport)(_v38.ERequestMethod.GET, _v1, ({
        userId: _v0,
        eventId: _v1
      }) => ({
        path: `/users/${_v0}/live_events/${_v1}/destinations`
      })));
      _v0.log.info("Loaded destinations:", _v1), Object.values(_v44).forEach(_v0 => {
        let _v1 = (0, _v34.camelizeString)(_v0),
          _v2 = _v1.items.filter(_v0 => _v0.serviceName === _v0);
        _v0.setContext({
          destinations: _v0.context.destinations.asMerged({
            [_v1]: _v0[_v1].asReady(_v2)
          })
        });
      });
    } catch (_v0) {
      _v0.log.error("Failed to load destinations:", _v0);
    }
  }
  async function _v58(_v0, _v1) {
    _v0.log.info("Creating destination:", _v1), _v0.assertIsInitialized();
    try {
      var _v2;
      let {
          destinations: _v0
        } = _v0.context,
        _v1 = await (_v2 = {
          connection: _v0.connections.destinations,
          gctlConfig: (0, _v35.queryManagerGctlConfig)(_v0),
          fields: _v73.REQUIRED_DESTINATION_FIELDS
        }, (0, _v37.withConnectionSupport)(_v38.ERequestMethod.POST, _v2, ({
          userId: _v0,
          eventId: _v1
        }) => ({
          path: `/users/${_v0}/live_events/${_v1}/destinations`
        }), {
          body: _v1
        }));
      _v0.log.info("Created destination:", _v1);
      let _v2 = (0, _v34.camelizeString)(_v1.serviceName),
        _v3 = _v0[_v2].value ?? [];
      if (_v3.push(_v1), _v0.setContext({
        destinations: _v0.context.destinations.asMerged({
          [_v2]: _v0[_v2].asReady(_v3)
        })
      }), _v2 === _v44.LINKEDIN && _v1.scheduledAt) {
        _v0.log.info("Detected scheduled linkedIn event:", _v2, _v1);
        let _v0 = await _v39({
          connection: _v0.connections.availableDestinations,
          gctlConfig: (0, _v35.queryManagerGctlConfig)(_v0),
          fields: [_v44.LINKEDIN]
        });
        _v0.log.info("Got updated destinations list [linkedIn]:", _v0), _v0.setContext({
          connections: _v0.context.connections.asMerged({
            [_v44.LINKEDIN]: _v0.context.connections[_v44.LINKEDIN].asReady(_v0[_v44.LINKEDIN])
          })
        });
      }
    } catch (_v0) {
      _v0.log.error("Failed to create destination:", _v0), _v1.serviceName && _v55(_v0, _v1.serviceName, _v0);
    }
  }
  async function _v59(_v0, _v1) {
    if (_v0.log.info("Update destination:", _v1), _v0.assertIsInitialized(), !_v1.id || !_v1.serviceName) throw new _v54.LiveError("Missed destination ID or service name.", {
      code: _v52.ELiveErrorCode.INVALID_PARAMETERS,
      data: {
        destination: _v1
      }
    });
    let {
        destinations: _v2
      } = _v0.context,
      _v3 = (0, _v34.camelizeString)(_v1.serviceName),
      _v4 = _v2[_v3].value ?? [_v1],
      _v5 = _v4.findIndex(_v0 => _v0.id == _v1.id),
      _v6 = {
        ..._v4[_v5]
      };
    _v4[_v5] = {
      ..._v4[_v5],
      ..._v1
    }, _v0.setContext({
      destinations: _v0.context.destinations.asMerged({
        [_v3]: _v2[_v3].asReady(_v4)
      })
    });
    try {
      await function ({
        destinationId: _v0,
        gctlConfig: _v1,
        fields: _v2 = []
      }, _v3) {
        return (0, _v36.sendApiRequest)({
          method: _v38.ERequestMethod.PATCH,
          path: `/destination/${_v0}`,
          gctlConfig: _v1,
          body: _v3,
          fields: _v2
        });
      }({
        destinationId: _v1.id,
        gctlConfig: (0, _v35.queryManagerGctlConfig)(_v0),
        fields: _v73.REQUIRED_DESTINATION_FIELDS
      }, _v1), _v0.log.info("Updated destination:", _v1);
    } catch (_v0) {
      _v0.log.error("Failed to update destination:", _v0), _v4[_v5] = _v6, _v0.setContext({
        destinations: _v0.context.destinations.asMerged({
          [_v3]: _v2[_v3].asReady(_v4)
        })
      }), _v1.serviceName && _v55(_v0, _v1.serviceName, _v0);
    }
  }
  async function _v60(_v0, _v1) {
    if (_v0.log.info("Remove destination:", _v1), _v0.assertIsInitialized(), !_v1.id || !_v1.serviceName) throw new _v54.LiveError("Missed destination ID or service name.", {
      code: _v52.ELiveErrorCode.INVALID_PARAMETERS,
      data: {
        destination: _v1
      }
    });
    let {
        destinations: _v2
      } = _v0.context,
      _v3 = (0, _v34.camelizeString)(_v1.serviceName),
      _v4 = (_v2[_v3].value ?? [_v1]).filter(_v0 => _v0.id !== _v1.id);
    _v0.setContext({
      destinations: _v0.context.destinations.asMerged({
        [_v3]: _v2[_v3].asReady(_v4)
      })
    });
    try {
      let _v0 = _v0.queryDataSync({
        type: _v41.ELiveQuery.INGEST_STATUS
      });
      _v0?.data === _v53.EIngestStatus.STREAMING && (_v0.log.info("Toggle off destination during live:", _v1), await _v40({
        destinationId: _v1.id,
        gctlConfig: (0, _v35.queryManagerGctlConfig)(_v0)
      }, !1)), await function ({
        destinationId: _v0,
        fields: _v1,
        gctlConfig: _v2
      }) {
        return (0, _v36.sendApiRequest)({
          method: _v38.ERequestMethod.DELETE,
          path: `/destination/${_v0}`,
          fields: _v1,
          gctlConfig: _v2
        });
      }({
        destinationId: _v1.id,
        gctlConfig: (0, _v35.queryManagerGctlConfig)(_v0)
      }), _v0.log.info("Removed destination:", _v1);
    } catch (_v0) {
      _v0.log.error("Failed to delete destination:", _v0), _v1.serviceName && _v55(_v0, _v1.serviceName, _v0);
    }
  }
  async function _v61(_v0, _v1) {
    if (_v0.log.info("Toggling destination:", _v1), _v0.assertIsInitialized(), !_v1.id || !_v1.serviceName) throw new _v54.LiveError("Missed destination ID or service name.", {
      code: _v52.ELiveErrorCode.INVALID_PARAMETERS,
      data: {
        destination: _v1
      }
    });
    let {
        destinations: _v2
      } = _v0.context,
      _v3 = (0, _v34.camelizeString)(_v1.serviceName);
    _v2[_v3].isLoading || _v0.setContext({
      destinations: _v0.context.destinations.asMerged({
        [_v3]: _v2[_v3].asLoading()
      })
    });
    let _v4 = !_v1.isEnabled,
      _v5 = _v2[_v3].value ?? [_v1],
      _v6 = _v5.findIndex(_v0 => _v0.id == _v1.id);
    Object.assign(_v5[_v6], {
      isEnabled: _v4,
      state: _v47.OK
    }), _v0.setContext({
      destinations: _v0.context.destinations.asMerged({
        [_v3]: _v2[_v3].asLoading(_v5)
      })
    });
    try {
      let _v0 = await _v40({
        destinationId: _v1.id,
        gctlConfig: (0, _v35.queryManagerGctlConfig)(_v0),
        fields: _v73.REQUIRED_DESTINATION_FIELDS
      }, _v4);
      _v0.log.info("Toggled destination:", _v0), Object.assign(_v5[_v6], _v0), _v0.log.info("Destination toggled:", _v0);
    } catch (_v0) {
      _v0.log.error("Failed to toggle destination:", _v0), _v5[_v6].isEnabled = !1, _v5[_v6].state = _v47.HAS_ERROR, _v5[_v6].stateMessage = String((0, _v33.default)(_v0.message.split(": ")));
    }
    _v0.setContext({
      destinations: _v0.context.destinations.asMerged({
        [_v3]: _v2[_v3].asReady(_v5)
      })
    });
  }
  var _v62 = _v0.i(0);
  async function _v63(_v0, _v1) {
    _v0.log.info("Loading available OTT destinations:", _v1), _v0.assertIsInitialized();
    let {
      connections: _v2
    } = _v0.context;
    _v2.ott.isLoading || _v0.setContext({
      connections: _v0.context.connections.asMerged({
        ott: _v2.ott.asLoading()
      })
    });
    try {
      var _v3, _v4;
      let _v0 = await (_v3 = {
        gctlConfig: (0, _v35.queryManagerGctlConfig)(_v0),
        connection: _v0.connections.ottMetadata
      }, (0, _v37.withConnectionSupport)(_v38.ERequestMethod.GET, _v3, ({
        userId: _v0
      }) => ({
        path: `/users/${_v0}/ott`
      })));
      if (_v0) {
        let _v0 = await (_v4 = {
          uri: _v1,
          connection: _v0.connections.ottChannels,
          gctlConfig: (0, _v35.queryManagerGctlConfig)(_v0),
          fields: ["id", "subdomain", "title"]
        }, "uri" in _v4 && _v4.uri ? (0, _v36.sendApiRequest)({
          method: _v38.ERequestMethod.GET,
          path: _v4.uri,
          gctlConfig: _v4.gctlConfig,
          fields: _v4.fields
        }) : (0, _v37.withConnectionSupport)(_v38.ERequestMethod.GET, _v4, ({
          userId: _v0,
          uri: _v1
        }) => ({
          path: _v1 ?? `/users/${_v0}/ott/channels`
        })));
        _v0.log.info("Loaded available OTT destinations:", _v1, _v0, _v0), _v0.setContext({
          connections: _v0.context.connections.asMerged({
            ott: _v2.ott.asReady({
              isConnected: !0,
              destinations: [...(_v2.ott.value?.destinations ?? []), ..._v0.items],
              paging: _v0.paging
            })
          })
        });
      }
    } catch (_v0) {
      _v0?.data?.body?.errorCode === 0 ? (_v0.log.error("Failed to load OTT, not connected:", _v0), _v0.setContext({
        connections: _v0.context.connections.asMerged({
          ott: _v2.ott.asReady({
            isConnected: !1,
            destinations: [],
            paging: {}
          })
        })
      })) : _v0.log.error("Failed to load OTT connection:", _v0);
    }
  }
  async function _v64(_v0) {
    _v0.log.info("Loading OTT destinations"), _v0.assertIsInitialized();
    try {
      var _v1;
      let _v0 = await (_v1 = {
        connection: _v0.connections.ottDestinations,
        gctlConfig: (0, _v35.queryManagerGctlConfig)(_v0),
        fields: ["uri", "ott_channel_id", "ott_channel_name", "ott_channel_subdomain", "ott_event_id"]
      }, (0, _v37.withConnectionSupport)(_v38.ERequestMethod.GET, _v1, ({
        userId: _v0,
        eventId: _v1
      }) => ({
        path: `/users/${_v0}/live_events/${_v1}/ott_destinations`
      })));
      _v0.log.info("Loaded OTT destinations:", _v0), _v0.setContext({
        destinations: _v0.context.destinations.asMerged({
          ott: _v0.context.destinations.ott.asReady(_v0.items)
        })
      });
    } catch (_v0) {
      _v0.log.error("Failed to load ott destinations:", _v0);
    }
  }
  async function _v65(_v0, _v1) {
    _v0.log.info("Create ott destination:", _v1), _v0.assertIsInitialized();
    let {
      destinations: _v2
    } = _v0.context;
    _v2.ott.isLoading || _v0.setContext({
      destinations: _v0.context.destinations.asMerged({
        ott: _v2.ott.asLoading()
      })
    });
    try {
      var _v3;
      let _v0 = await (_v3 = {
        connection: _v0.connections.ottDestinations,
        gctlConfig: (0, _v35.queryManagerGctlConfig)(_v0),
        fields: ["uri", "ott_channel_id", "ott_channel_name", "ott_channel_subdomain", "ott_event_id"]
      }, (0, _v37.withConnectionSupport)(_v38.ERequestMethod.POST, _v3, ({
        userId: _v0,
        eventId: _v1
      }) => ({
        path: `/users/${_v0}/live_events/${_v1}/ott_destinations`
      }), {
        body: {
          id: _v1.ottChannelId,
          name: _v1.ottChannelName,
          subdomain: _v1.ottChannelSubdomain
        }
      }));
      _v0.log.info("Created ott destination:", _v0);
      let _v1 = _v0.context.destinations.ott.value ?? [];
      _v1.push(_v0), _v0.setContext({
        destinations: _v0.context.destinations.asMerged({
          ott: _v2.ott.asReady(_v1)
        })
      });
    } catch (_v0) {
      _v0.log.error("Failed to create ott destination:", _v0);
    }
  }
  async function _v66(_v0, _v1) {
    if (_v0.log.info("Removing ott destination:", _v1), _v0.assertIsInitialized(), !_v1.uri) throw new _v54.LiveError("Missed destination URI.", {
      code: _v52.ELiveErrorCode.INVALID_PARAMETERS,
      data: {
        destination: _v1
      }
    });
    let _v2 = (0, _v62.parseLastIdFromUri)(_v1.uri);
    if (!_v2) throw new _v54.LiveError("Failed to parse destination URI.", {
      data: {
        id: _v2,
        destination: _v1
      }
    });
    let {
      destinations: _v3
    } = _v0.context;
    _v3.ott.isLoading || _v0.setContext({
      destinations: _v0.context.destinations.asMerged({
        ott: _v3.ott.asLoading()
      })
    });
    try {
      var _v4;
      await (_v4 = {
        connection: (0, _v37.specifyConnectionId)(_v0.connections.ottDestination, _v2),
        gctlConfig: (0, _v35.queryManagerGctlConfig)(_v0)
      }, (0, _v37.withConnectionSupport)(_v38.ERequestMethod.DELETE, _v4, ({
        userId: _v0,
        eventId: _v1,
        destinationId: _v2
      }) => ({
        path: `/users/${_v0}/live_events/${_v1}/ott_destination/${_v2}`
      }))), _v0.log.info("Removed ott destination:", _v1);
      let _v0 = (_v0.context.destinations.ott.value ?? [_v1]).filter(_v0 => _v0.uri !== _v1.uri);
      _v0.setContext({
        destinations: _v0.context.destinations.asMerged({
          ott: _v3.ott.asReady(_v0)
        })
      });
    } catch (_v0) {
      _v0.log.error("Failed to delete ott destination:", _v0);
    }
  }
  var _v67 = _v0.i(0),
    _v68 = _v0.i(0),
    _v69 = _v0.i(0),
    _v70 = _v0.i(0),
    _v71 = _v0.i(0),
    _v72 = _v0.i(0);
  class _v73 extends _v31.ContextManager {
    static DESTINATION_RELOAD_TIMEOUT = 0;
    static REQUIRED_DESTINATION_FIELDS = ["id", "provider_destination_id", "provider_video_id", "provider_broadcast_id", "provider_user_id", "live_clip_id", "is_enabled", "service_name", "display_name", "user_id", "user_display_name", "privacy", "type", "stream_url", "stream_key", "state", "state_message", "scheduled_at", "metadata.interactions.edit", "metadata.connection_status"];
    context = {
      destinationsActions: (0, _v31.createActions)({
        openActiveModal: (_v0, _v1) => this.openActiveModal(_v0, _v1),
        closeActiveModal: () => this.openActiveModal(_v51.NONE),
        createSocialDestination: _v0 => this.createSocialDestination(_v0),
        updateSocialDestination: _v0 => this.updateSocialDestination(_v0),
        removeSocialDestination: _v0 => this.removeSocialDestination(_v0),
        toggleSocialDestination: _v0 => this.toggleSocialDestination(_v0),
        loadOttDestination: _v0 => this.loadOttConnections(_v0),
        createOttDestination: _v0 => this.createOttDestination(_v0),
        removeOttDestination: _v0 => this.removeOttDestination(_v0)
      }),
      destinationsConnectionActions: (0, _v31.createActions)({
        openSocialConnect: (_v0, _v1) => this.openSocialConnect(_v0, _v1),
        disconnectSocialApp: _v0 => this.disconnectApp(_v0),
        loadSocialConnections: _v0 => this.loadSocialConnections(_v0)
      }),
      sessionType: _v69.EComposerSessionType.UNKNOWN,
      sessionId: -1,
      isHydrated: !1,
      postConnectUrl: new URL("/", _v67.environmentConfig.URL_BASE),
      connectWindow: null,
      connections: (0, _v31.createNested)({
        youtube: (0, _v31.createLoadable)({
          isConnected: !1,
          isConnectionBroken: !1,
          destinations: []
        }, !1),
        facebook: (0, _v31.createLoadable)({
          isConnected: !1,
          isConnectionBroken: !1,
          destinations: []
        }, !1),
        linkedin: (0, _v31.createLoadable)({
          isConnected: !1,
          isConnectionBroken: !1,
          destinations: []
        }, !1),
        ott: (0, _v31.createLoadable)({
          isConnected: !1,
          destinations: [],
          paging: {}
        }, !1)
      }),
      destinations: (0, _v31.createNested)({
        youtube: (0, _v31.createLoadable)([], !1),
        facebook: (0, _v31.createLoadable)([], !1),
        linkedin: (0, _v31.createLoadable)([], !1),
        customRtmp: (0, _v31.createLoadable)([], !1),
        ott: (0, _v31.createLoadable)([], !1)
      }),
      activeModal: _v51.NONE,
      hasValidConnection: _v0 => this.hasValidConnection(_v0),
      hasAnyDestinationsCreated: (0, _v31.createComputed)(({
        destinations: {
          facebook: _v0,
          linkedin: _v1,
          youtube: _v2
        }
      }) => ({
        value: Number(_v1?.value?.length || _v0?.value?.length || _v2.value?.length) > 0
      }))
    };
    isModuleActive = !1;
    log = new _v32.Logger("🤬DCM");
    channel = null;
    connections = null;
    constructor(_v0) {
      if (super(), this.isModuleActive = !_v0?.live?.isSimulcastDisabled, !this.isModuleActive) {
        this.log.info("Skip init of destination manager, not enabled:", this.context.sessionType, this.context.sessionId), this.context.isHydrated = !0;
        return;
      }
      if (!_v0?.sessionId || !_v0.sessionType) throw new _v54.LiveError("Cannot initialize destination context.", {
        code: _v52.ELiveErrorCode.INITIALIZATION
      });
      this.context.sessionId = _v0.sessionId, this.context.sessionType = _v0.sessionType, this.context.postConnectUrl = new URL(`live/destination_connected/${_v0.sessionType}/${_v0.sessionId}`, _v67.environmentConfig.URL_BASE);
    }
    onProvisionStarted() {
      this.isModuleActive && (this.channel = function (_v0) {
        if (!_v14.browserConfig.CAN_USE_BROADCAST_CHANNEL()) return null;
        let {
            sessionType: _v1,
            sessionId: _v2
          } = _v0.context,
          _v3 = new window.BroadcastChannel(`${_v1}-${_v2}-destinations`);
        return _v3.addEventListener("message", _v0 => _v0.onBroadcastChannelMessage(_v0)), _v3;
      }(this));
    }
    onProvisionEnded() {
      this.isModuleActive && this.channel?.close();
    }
    assertIsInitialized() {
      if (!this.context.sessionId || !this.connections) throw new _v54.LiveError("Destinations manager is not initialized.", {
        code: _v52.ELiveErrorCode.INITIALIZATION
      });
    }
    async loadSocialConnections(_v0) {
      return (0, _v72.withLiveErrorTracking)(() => _v56(this, _v0 ?? []), {
        method: "loadSocialConnections",
        category: _v71.ELiveErrorCategory.LIVE
      });
    }
    async loadOttConnections(_v0) {
      return (0, _v72.withLiveErrorTracking)(() => _v63(this, _v0), {
        method: "loadOttConnections",
        category: _v71.ELiveErrorCategory.LIVE
      });
    }
    async loadOttDestinations() {
      return (0, _v72.withLiveErrorTracking)(() => _v64(this), {
        method: "loadOTTDestinations",
        category: _v71.ELiveErrorCategory.LIVE
      });
    }
    async loadSocialDestinations() {
      return (0, _v72.withLiveErrorTracking)(() => _v57(this), {
        method: "loadSocialDestinations",
        category: _v71.ELiveErrorCategory.LIVE
      });
    }
    async createSocialDestination(_v0) {
      return (0, _v72.withLiveErrorTracking)(() => _v58(this, _v0), {
        method: "createSocialDestination",
        category: _v71.ELiveErrorCategory.LIVE
      });
    }
    async updateSocialDestination(_v0) {
      return (0, _v72.withLiveErrorTracking)(() => _v59(this, _v0), {
        method: "updateSocialDestination",
        category: _v71.ELiveErrorCategory.LIVE
      });
    }
    async removeSocialDestination(_v0) {
      return (0, _v72.withLiveErrorTracking)(() => _v60(this, _v0), {
        method: "removeSocialDestination",
        category: _v71.ELiveErrorCategory.LIVE
      });
    }
    async toggleSocialDestination(_v0) {
      return (0, _v72.withLiveErrorTracking)(() => _v61(this, _v0), {
        method: "toggleSocialDestination",
        category: _v71.ELiveErrorCategory.LIVE
      });
    }
    async createOttDestination(_v0) {
      return (0, _v72.withLiveErrorTracking)(() => _v65(this, _v0), {
        method: "createOttDestination",
        category: _v71.ELiveErrorCategory.LIVE
      });
    }
    async removeOttDestination(_v0) {
      return (0, _v72.withLiveErrorTracking)(() => _v66(this, _v0), {
        method: "removeOttDestination",
        category: _v71.ELiveErrorCategory.LIVE
      });
    }
    openSocialConnect(_v0, _v1) {
      var _v2;
      let _v3,
        _v4,
        {
          connectWindow: _v5,
          postConnectUrl: _v6
        } = this.context;
      _v5 && _v5.close(), _v6.searchParams.set("social", _v0), this.setContext({
        connectWindow: (_v2 = (0, _v70.queryCurrentViewerSync)(this).xsrft, (_v3 = new URL("/settings/apps", window.location.origin)).searchParams.append("action", "connect"), _v3.searchParams.append("live", "1"), _v3.searchParams.append("service", _v0), _v3.searchParams.append("post_connect", _v6.toString()), _v1 && _v3.searchParams.append("scope_type", _v1), _v4 = `(function () {
    const form = document.createElement('form');
    form.setAttribute('method', 'POST');
    form.setAttribute('rel', 'noopener noreferrer');
    form.setAttribute(
      'action',
      '${_v3.toString()}',
    );
    const token = document.createElement('input');
    token.setAttribute('type', 'hidden');
    token.setAttribute('name', 'token');
    token.setAttribute('value', '${_v2}');
    form.appendChild(token);
    document.body.appendChild(form);
    form.submit();
  })()`.replace(/\r?\n|\r/g, ""), window.open(`javascript:${_v4}`, "_blank", "height=700,width=500,left=200,top=200,centerscreen=yes,scrolling=yes,scrollbars=yes,resizable=yes,menubar=no,titlebar=no,toolbar=no"))
      });
    }
    disconnectApp(_v0) {
      return fetch("/settings/apps?action=disconnect", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "X-Requested-With": "XMLHttpRequest"
        },
        body: JSON.stringify({
          service: _v0,
          token: (0, _v70.queryCurrentViewerSync)(this).xsrft
        })
      });
    }
    openActiveModal(_v0, _v1) {
      this.setContext({
        activeModal: _v0,
        modalState: _v1
      });
    }
    hasValidConnection(_v0) {
      if (!this.isModuleActive) return !1;
      let _v1 = this.context.connections[_v0].value;
      if (!_v1) return !1;
      let {
        isConnected: _v2,
        isConnectionBroken: _v3,
        destinations: _v4,
        scopeType: _v5
      } = _v1;
      switch (_v0) {
        case _v44.LINKEDIN:
          return _v2 && !_v3 && !(!_v4.length && _v5 === _v49.ORGANIZATION);
        case _v44.FACEBOOK:
        case _v44.YOUTUBE:
          return _v2 && !_v3;
        case _v44.CUSTOM_RTMP:
          return !0;
        default:
          return !1;
      }
    }
    async onBroadcastChannelMessage(_v0) {
      let {
          data: _v1
        } = _v0,
        {
          connectWindow: _v2
        } = this.context;
      if (this.log.info("Social provider connected:", _v0), "connected" === _v1.action) {
        let _v0;
        switch (_v2 && _v2.close(), await this.loadSocialConnections([_v1.social]), await this.loadSocialDestinations(), _v1.social) {
          case _v44.YOUTUBE:
            _v0 = _v51.YOUTUBE_SETTINGS;
            break;
          case _v44.FACEBOOK:
            _v0 = _v51.FACEBOOK_SETTINGS;
            break;
          case _v44.LINKEDIN:
            _v0 = this.hasValidConnection(_v44.LINKEDIN) ? _v51.LINKEDIN_SETTINGS : _v51.LINKEDIN_CONNECT;
            break;
          default:
            _v0 = _v51.NONE;
        }
        this.setContext({
          activeModal: _v0
        });
      }
    }
    onLiveEventStatusUpdated(_v0) {
      let _v1 = _v0.data;
      if (this.isModuleActive && _v1 === _v53.EIngestStatus.STREAMING) return setTimeout(() => this.loadSocialDestinations(), _v73.DESTINATION_RELOAD_TIMEOUT), this.loadSocialDestinations();
    }
    async onComposerSessionReady({
      data: {
        id: _v0,
        type: _v1,
        metadata: _v2
      }
    }) {
      this.isModuleActive && (this.connections = {
        availableDestinations: _v2.connections?.availableDestinations,
        destinations: _v2.connections?.destinations,
        ottChannels: _v2.connections?.ottChannels,
        ottDestination: _v2.connections?.ottDestination,
        ottDestinations: _v2.connections?.ottDestinations,
        ottMetadata: _v2.connections?.ottMetadata
      }, this.log.info("Initializing destinations for composer session:", _v0, _v1, this.connections), await Promise.all([this.loadSocialConnections([_v44.YOUTUBE]), this.loadSocialConnections([_v44.LINKEDIN]), this.loadSocialConnections([_v44.FACEBOOK]), this.loadOttConnections(), this.loadSocialDestinations(), this.loadOttDestinations()]).finally(() => {
        this.setContext({
          isHydrated: !0
        });
      }));
    }
  }
  (0, _v30._)([(0, _v31.OnSignal)(_v68.ELiveSignal.LIVE_EVENT_STATUS_UPDATED)], _v73.prototype, "onLiveEventStatusUpdated", null), (0, _v30._)([(0, _v31.OnSignal)(_v68.ELiveSignal.COMPOSER_SESSION_READY)], _v73.prototype, "onComposerSessionReady", null);
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
    _v84 = _v0.i(0),
    _v85 = _v0.i(0),
    _v86 = _v0.i(0),
    _v87 = _v0.i(0),
    _v88 = _v0.i(0),
    _v89 = _v0.i(0),
    _v90 = _v0.i(0),
    _v91 = _v0.i(0);
  function _v92({
    copy: _v0
  }) {
    return {
      ...(0, _v15.newTeamCtx)(),
      ...(0, _v15.newWebCtx)(),
      ...(0, _v15.newActionCtx)("click"),
      ...(0, _v15.newLiveCtx)({
        live_feature: "simulcast"
      }),
      ...(0, _v15.newProductAnalyticsCtx)({
        product: "events",
        feature: "settings",
        location: "drawer",
        element: "button",
        copy: _v0
      })
    };
  }
  function _v93(_v0) {
    switch (_v0) {
      case _v43.INSTAGRAM:
        return _v91.ESimulcastValue.INSTAGRAM;
      case _v43.TIK_TOK:
        return _v91.ESimulcastValue.TIKTOK;
      case _v43.TWITTER_X:
        return _v91.ESimulcastValue.X;
      case _v43.CUSTOM:
      default:
        return _v91.ESimulcastValue.RTMP;
    }
  }
  function _v94(_v0, _v1) {
    (0, _v16.createBPv2EventFactory)("vimeo.connect_to_destination", 2, () => _v92({
      copy: _v0 ? "reconnect" : "connect"
    }), () => ({
      device_type: _v14.browserConfig.BROWSER?.isMobile ? "mobile_web" : "web"
    }))({
      value: _v1
    });
  }
  function _v95(_v0) {
    _v94(_v0, _v91.ESimulcastValue.FACEBOOK);
  }
  function _v96(_v0) {
    _v94(_v0, _v91.ESimulcastValue.LINKEDIN);
  }
  function _v97() {
    _v94(!1, _v91.ESimulcastValue.VIMEO_OTT);
  }
  function _v98(_v0) {
    (0, _v16.createBPv2EventFactory)("vimeo.add_destination_to_stream", 2, () => _v92({
      copy: "save"
    }), () => ({
      device_type: _v14.browserConfig.BROWSER?.isMobile ? "mobile_web" : "web"
    }))({
      value: _v0
    });
  }
  function _v99() {
    _v98(_v91.ESimulcastValue.FACEBOOK);
  }
  function _v100() {
    _v98(_v91.ESimulcastValue.YOUTUBE);
  }
  function _v101() {
    _v98(_v91.ESimulcastValue.LINKEDIN);
  }
  function _v102() {
    _v98(_v91.ESimulcastValue.VIMEO_OTT);
  }
  function _v103(_v0) {
    _v98(_v93(_v0));
  }
  function _v104(_v0) {
    (0, _v16.createBPv2EventFactory)("vimeo.remove_destination_from_stream", 2, () => _v92({
      copy: "save"
    }), () => ({
      device_type: _v14.browserConfig.BROWSER?.isMobile ? "mobile_web" : "web"
    }))({
      value: _v0
    });
  }
  function _v105() {
    _v104(_v91.ESimulcastValue.FACEBOOK);
  }
  function _v106() {
    _v104(_v91.ESimulcastValue.LINKEDIN);
  }
  function _v107() {
    _v104(_v91.ESimulcastValue.VIMEO_OTT);
  }
  function _v108(_v0) {
    _v104(_v93(_v0));
  }
  _v0.s(["trackAddCustomRtmpDestination", 0, _v103, "trackAddFacebookDestination", 0, _v99, "trackAddLinkedinDestination", 0, _v101, "trackAddVimeoOttDestination", 0, _v102, "trackAddYoutubeDestination", 0, _v100, "trackFacebookConnect", 0, _v95, "trackLinkedinConnect", 0, _v96, "trackRemoveCustomRtmpDestination", 0, _v108, "trackRemoveFacebookDestination", 0, _v105, "trackRemoveLinkedinDestination", 0, _v106, "trackRemoveVimeoOttDestination", 0, _v107, "trackRemoveYoutubeDestination", 0, function () {
    _v104(_v91.ESimulcastValue.YOUTUBE);
  }, "trackVimeoOttConnect", 0, _v97, "trackYoutubeConnect", 0, function (_v0) {
    _v94(_v0, _v91.ESimulcastValue.YOUTUBE);
  }], 0);
  var _v109 = _v0.i(0),
    _v110 = _v0.i(0),
    _v111 = _v0.i(0);
  function _v112(_v0) {
    return _v0?.state === _v47.HAS_ERROR && (_v0?.stateMessage === _v48.ACCOUNT_CREATED_LESS_THEN_60_DAYS_AGO || _v0?.stateMessage === _v48.ACCOUNT_HAS_LESS_THEN_100_FOLLOWERS);
  }
  function _v113(_v0, _v1) {
    return _v0 ? `https://www.youtube.com/watch?v=${_v0}` : _v1 ? `https://studio.youtube.com/channel/${_v1}/videos/live` : void 0;
  }
  _v0.s(["getYoutubeUrl", 0, _v113, "isFacebookAccountLimitationError", 0, _v112], 0);
  var _v114 = _v0.i(0),
    _v115 = _v0.i(0),
    _v116 = _v0.i(0),
    _v117 = _v0.i(0),
    _v118 = _v0.i(0),
    _v119 = _v0.i(0),
    _v120 = _v0.i(0),
    _v121 = _v0.i(0),
    _v122 = _v0.i(0),
    _v123 = _v0.i(0),
    _v124 = _v0.i(0),
    _v125 = _v0.i(0),
    _v126 = _v0.i(0),
    _v127 = _v0.i(0);
  function _v128(_v0) {
    switch (_v0) {
      case _v42.PAGE:
        return _v111.rtmpTranslations.facebookPage;
      case _v42.PROFILE:
        return _v111.rtmpTranslations.facebookProfilePage;
      default:
        return _v111.rtmpTranslations.custom;
    }
  }
  _v0.s(["FacebookDestination", 0, function ({
    id: _v0 = (0, _v124.createDomName)("facebook-destination"),
    className: _v1 = (0, _v124.createDomName)("facebook-destination"),
    isDisabled: _v2 = !1,
    destinationsContext: {
      destinations: {
        facebook: _v3
      },
      connections: {
        facebook: _v4
      },
      destinationsActions: _v5,
      hasValidConnection: _v6,
      destinationsConnectionActions: _v7
    } = (0, _v26.useManager)(_v73),
    sessionStatusContext: {
      isProvisionUpdating: _v8
    } = (0, _v26.useManager)(_v90.ComposerSessionStatusManager)
  }) {
    let {
        trackLiveStreamDestinationActionClicked: _v9
      } = (0, _v126.useLiveStreamBroadcasterTracking)(),
      {
        isOpen: _v10,
        onClose: _v11,
        onToggle: _v12
      } = (0, _v117.useDisclosure)(),
      _v13 = (0, _v123.useIsLiveDemoSubscription)(),
      _v14 = _v3.isLoading || _v4.isLoading,
      _v15 = _v6(_v44.FACEBOOK),
      _v16 = (0, _v127.useViewer)(),
      _v17 = _v16 && _v16.user && _v3?.value?.[0]?.userId === _v16.user.id,
      _v18 = !!(!_v3?.value?.length || _v3?.value?.[0]?.metadata?.connectionStatus?.isConnected && !_v3?.value?.[0]?.metadata?.connectionStatus?.isConnectionBroken),
      _v19 = (0, _v19.useCallback)(_v0 => {
        _v5.updateSocialDestination({
          ..._v0,
          isEnabled: !_v0.isEnabled
        });
      }, [_v5]),
      _v20 = (0, _v19.useCallback)(() => {
        _v11(), _v105(), _v3.value?.forEach(_v0 => {
          _v5.removeSocialDestination(_v0);
        });
      }, [_v11, _v3.value, _v5]),
      _v21 = (0, _v19.useCallback)(() => {
        _v11(), _v5.openActiveModal(_v51.FACEBOOK_SETTINGS);
      }, [_v11, _v5]),
      _v22 = (0, _v125.inline)(() => (0, _v18.jsx)(_v83.Flex, {
        cursor: _v13 ? "not-allowed" : "auto",
        children: (0, _v18.jsx)(_v79.Button, {
          isDisabled: _v13 || _v2,
          variant: "secondary",
          size: "sm",
          onClick: () => {
            _v95(!!_v4.value?.isConnectionBroken), _v9({
              liveStreamDestination: "facebook",
              liveStreamDestinationAction: "connect"
            }), _v7.openSocialConnect(_v44.FACEBOOK);
          },
          children: _v4.value?.isConnectionBroken ? _v111.rtmpTranslations.reconnect : _v111.rtmpTranslations.connect
        })
      })),
      _v23 = (0, _v125.inline)(() => (0, _v18.jsx)(_v121.BokehMenu, {
        isOpen: _v10,
        isDisabled: _v2,
        menuList: (0, _v18.jsxs)(_v18.Fragment, {
          children: [(0, _v18.jsx)(_v88.BokehTooltip, {
            label: (0, _v125.inline)(() => _v17 ? null : _v111.rtmpTranslations.onlyUserWhoConnectedDestinationCanManage),
            placement: "top",
            children: (0, _v18.jsx)(_v122.BokehMenuItem, {
              icon: (0, _v18.jsx)(_v118.EditPencil, {}),
              onClick: () => {
                _v9({
                  liveStreamDestination: "facebook",
                  liveStreamDestinationAction: "customize"
                }), _v21();
              },
              isDisabled: !_v17,
              children: (0, _v18.jsxs)(_v20.Box, {
                children: [(0, _v18.jsx)(_v86.Text, {
                  fontSize: "heading-xs",
                  variant: "body-xl",
                  children: _v111.rtmpTranslations.manageSettings
                }), (0, _v18.jsx)(_v86.Text, {
                  fontSize: "heading-xs",
                  variant: "body-xl",
                  color: "text-secondary",
                  children: _v111.rtmpTranslations.connectedBy + " " + _v3?.value?.[0]?.userDisplayName
                })]
              })
            })
          }), (0, _v18.jsx)(_v122.BokehMenuItem, {
            icon: (0, _v18.jsx)(_v119.TrashBin, {}),
            onClick: _v20,
            children: (0, _v18.jsx)(_v86.Text, {
              fontSize: "heading-xs",
              variant: "body-xl",
              children: _v111.rtmpTranslations.removeFromThisEvent
            })
          })]
        }),
        onClose: _v11,
        onClick: _v12
      })),
      _v24 = (0, _v125.inline)(() => _v3.value?.length ? _v17 && !_v18 ? _v22 : _v23 : _v15 ? (0, _v18.jsx)(_v79.Button, {
        isDisabled: _v13 || _v2,
        variant: "secondary",
        size: "sm",
        onClick: () => {
          _v9({
            liveStreamDestination: "facebook",
            liveStreamDestinationAction: "add"
          }), _v21();
        },
        children: _v111.rtmpTranslations.add
      }) : _v22);
    return (0, _v18.jsxs)(_v83.Flex, {
      id: _v0,
      className: _v1,
      direction: "column",
      width: "100%",
      children: [(0, _v18.jsxs)(_v83.Flex, {
        width: "100%",
        justify: "space-between",
        alignItems: "center",
        children: [(0, _v18.jsxs)(_v83.Flex, {
          wrap: "nowrap",
          gap: (0, _v21.rem)(16),
          alignItems: "center",
          children: [(0, _v18.jsx)(_v120.Facebook, {
            minWidth: (0, _v21.rem)(24),
            minHeight: (0, _v21.rem)(24)
          }), (0, _v18.jsx)(_v84.Header, {
            size: "xs",
            color: "text-primary",
            children: _v111.rtmpTranslations.facebook
          })]
        }), _v14 ? (0, _v18.jsx)(_v115.Spinner, {
          size: "sm",
          color: "blue.500"
        }) : (0, _v18.jsx)("div", {
          children: _v24
        })]
      }), !_v18 && !_v17 && (0, _v18.jsx)(_v83.Flex, {
        width: "100%",
        paddingTop: (0, _v21.rem)(16),
        alignItems: "center",
        children: (0, _v18.jsx)(_v77.Alert, {
          size: "sm",
          children: (0, _v18.jsx)(_v78.AlertDescription, {
            marginRight: "-8",
            children: _v111.rtmpTranslations.destinationBrokenNotice
          })
        })
      }), (0, _v18.jsx)(_v83.Flex, {
        width: "100%",
        paddingLeft: (0, _v21.rem)(40),
        children: _v3?.value?.length ? (0, _v18.jsx)(_v83.Flex, {
          direction: "column",
          width: "100%",
          gap: (0, _v21.rem)(12),
          children: _v3.value?.map((_v0, _v1) => (0, _v18.jsxs)(_v19.Fragment, {
            children: [(0, _v18.jsxs)(_v83.Flex, {
              width: "100%",
              justifyContent: "space-between",
              alignItems: "start",
              marginTop: (0, _v21.rem)(20),
              opacity: _v18 ? 1 : .5,
              cursor: _v18 ? "default" : "not-allowed",
              children: [(0, _v18.jsxs)(_v83.Flex, {
                direction: "column",
                children: [(0, _v18.jsx)(_v84.Header, {
                  size: "xs",
                  children: _v0.displayName
                }), (0, _v18.jsxs)(_v86.Text, {
                  variant: "body-xl",
                  display: "flex",
                  flexWrap: "nowrap",
                  href: `https://facebook.com/${_v0.type === _v42.PROFILE ? "me" : _v0.providerDestinationId}`,
                  fontSize: "text-sm",
                  color: "text-secondary",
                  target: "_blank",
                  as: "a",
                  _hover: _v110.HOVER_UNDERLINE_LINK_STYLE,
                  children: [_v128(_v0.type), function (_v0) {
                    if (_v0.type !== _v42.PROFILE) return null;
                    switch (_v0.privacy) {
                      case _v46.EVERYONE:
                        return ` - ${_v111.rtmpTranslations.facebookEveryone}`;
                      case _v46.FRIENDS:
                        return ` - ${_v111.rtmpTranslations.facebookFriends}`;
                      case _v46.SELF:
                        return ` - ${_v111.rtmpTranslations.facebookJustMe}`;
                      default:
                        return null;
                    }
                  }(_v0), (0, _v18.jsx)(_v87.PopOut, {
                    marginLeft: (0, _v21.rem)(4),
                    width: (0, _v21.rem)(16),
                    height: (0, _v21.rem)(16)
                  })]
                })]
              }), (0, _v18.jsx)(_v116.Switch, {
                isDisabled: _v13 || _v2 || _v8 || !_v18,
                isChecked: _v0.isEnabled,
                size: "sm",
                onChange: () => _v19(_v0)
              })]
            }), _v112(_v0) ? (0, _v18.jsx)(_v77.Alert, {
              children: (0, _v18.jsx)(_v78.AlertDescription, {
                children: _v111.rtmpTranslations.facebookRequirementsNotice
              })
            }) : null]
          }, `facebook-${_v1}`))
        }) : _v15 && (0, _v18.jsx)(_v83.Flex, {
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          paddingRight: (0, _v21.rem)(4),
          children: (0, _v18.jsx)(_v114.Paragraph, {
            size: "md",
            marginBottom: 0,
            color: "text-secondary",
            children: _v111.rtmpTranslations.facebookNoPagesAdded
          })
        })
      })]
    });
  }, "getDestinationTypeLabel", 0, _v128], 0);
  let _v129 = [{
    label: _v111.rtmpTranslations.facebookEveryone,
    value: _v46.EVERYONE
  }, {
    label: _v111.rtmpTranslations.facebookFriends,
    value: _v46.FRIENDS
  }, {
    label: _v111.rtmpTranslations.facebookJustMe,
    value: _v46.SELF
  }];
  function _v130({
    id: _v0 = (0, _v24.createLiveDomName)("facebook-settings-modal"),
    className: _v1 = (0, _v24.createLiveDomName)("facebook-settings-modal"),
    destinationsContext: {
      destinations: {
        facebook: _v2
      },
      connections: {
        facebook: _v3
      },
      destinationsActions: _v4
    } = (0, _v26.useManager)(_v73),
    composerSessionStatusContext: {
      liveComposerStatuses: _v5
    } = (0, _v26.useManager)(_v90.ComposerSessionStatusManager)
  }) {
    let [_v6, _v7] = (0, _v19.useState)(null),
      [_v8, _v9] = (0, _v19.useState)(!1);
    (0, _v19.useEffect)(() => {
      _v2?.value && _v3?.value?.destinations && null === _v6 && _v7(_v3.value.destinations.map(_v0 => {
        let _v1 = _v2.value?.find(_v0 => _v0.providerDestinationId === _v0.destinationId);
        return {
          id: _v1?.id,
          isEnabled: !!_v1?.isEnabled,
          checked: !!_v1,
          providerDestinationId: _v0.destinationId,
          displayName: _v0.displayName,
          type: _v0.type,
          serviceName: _v44.FACEBOOK,
          privacy: _v1?.privacy ?? (_v0.type === _v42.PROFILE ? _v46.EVERYONE : void 0)
        };
      }));
    }, [_v3.value, _v2.value, _v6]);
    let _v10 = (0, _v19.useCallback)(() => {
        _v6?.forEach(_v0 => {
          _v0.checked && !_v0.id ? (_v4.createSocialDestination(_v0), _v99()) : _v0.checked && _v0.id ? _v4.updateSocialDestination(_v0) : _v0.id && (_v4.removeSocialDestination(_v0), _v105()), _v4.openActiveModal(_v51.NONE);
        });
      }, [_v4, _v6]),
      _v11 = (0, _v19.useCallback)((_v0, _v1) => {
        _v6 && (_v7(_v6.map(_v0 => (_v0.providerDestinationId === _v1.providerDestinationId && (_v0.privacy = _v0), _v0))), _v9(!0));
      }, [_v6]),
      _v12 = (0, _v19.useCallback)((_v0, _v1) => {
        _v6 && (_v7(_v6.map(_v0 => (_v0.providerDestinationId === _v1.providerDestinationId && (_v0.checked = _v0.target.checked, _v0.isEnabled = _v0.target.checked), _v0))), _v9(!0));
      }, [_v6]),
      _v13 = (0, _v19.useCallback)(_v0 => _v2?.value?.find(_v0 => _v0.id === _v0.id), [_v2]),
      _v14 = (0, _v89.useScrollbarStyles)();
    return (0, _v18.jsxs)(_v83.Flex, {
      id: _v0,
      className: _v1,
      padding: (0, _v21.rem)(16),
      direction: "column",
      position: "relative",
      color: "text-primary",
      overflow: "hidden",
      children: [(0, _v18.jsx)(_v84.Header, {
        id: (0, _v24.createLiveDomName)(_v0, "header"),
        className: (0, _v24.createLiveDomName)(_v1, "header"),
        size: "md",
        children: _v111.rtmpTranslations.facebookStreamSettings
      }), (0, _v18.jsx)(_v81.CloseButton, {
        id: (0, _v24.createLiveDomName)(_v0, "close-button"),
        className: (0, _v24.createLiveDomName)(_v1, "close-button"),
        "aria-label": "close",
        variant: "tertiary",
        position: "absolute",
        size: "sm",
        top: (0, _v21.rem)(12),
        right: (0, _v21.rem)(12),
        onClick: _v4.closeActiveModal
      }), (0, _v18.jsxs)(_v83.Flex, {
        direction: "column",
        gap: (0, _v21.rem)(8),
        minHeight: (0, _v21.rem)(312),
        children: [(0, _v18.jsx)(_v84.Header, {
          size: "sm",
          marginY: (0, _v21.rem)(16),
          children: _v111.rtmpTranslations.streamTo
        }), (0, _v18.jsx)(_v83.Flex, {
          direction: "column",
          gap: (0, _v21.rem)(16),
          maxHeight: `min(${(0, _v21.rem)(400)}, 65vh)`,
          overflowX: "hidden",
          overflowY: "auto",
          sx: _v14,
          children: null !== _v6 ? _v6.map((_v0, _v1) => {
            let _v2 = _v13(_v0),
              _v3 = !!_v2?.isEnabled && _v5.isSessionLive;
            return (0, _v18.jsxs)(_v19.Fragment, {
              children: [(0, _v18.jsxs)(_v83.Flex, {
                gap: (0, _v21.rem)(16),
                padding: (0, _v21.rem)(4),
                children: [(0, _v18.jsx)(_v83.Flex, {
                  alignItems: "start",
                  children: (0, _v18.jsx)(_v80.Checkbox, {
                    className: (0, _v24.createLiveDomName)(_v1, "facebook-destination-checkbox"),
                    isChecked: _v0.checked,
                    onChange: _v0 => _v12(_v0, _v0)
                  })
                }), (0, _v18.jsxs)(_v83.Flex, {
                  direction: "column",
                  width: "100%",
                  gap: (0, _v21.rem)(16),
                  children: [(0, _v18.jsxs)(_v83.Flex, {
                    flexWrap: "nowrap",
                    justifyContent: "space-between",
                    width: "100%",
                    children: [(0, _v18.jsx)(_v84.Header, {
                      className: (0, _v24.createLiveDomName)(_v1, "facebook-destination-name"),
                      size: "sm",
                      margin: 0,
                      children: _v0.displayName
                    }), (0, _v18.jsxs)(_v86.Text, {
                      className: (0, _v24.createLiveDomName)(_v1, "facebook-destination-link"),
                      variant: "body-xl",
                      display: "flex",
                      flexWrap: "nowrap",
                      href: `https://facebook.com/${_v0.type === _v42.PROFILE ? "me" : _v0.providerDestinationId}`,
                      fontSize: "text-sm",
                      color: "text-secondary",
                      target: "_blank",
                      as: "a",
                      _hover: _v110.HOVER_UNDERLINE_LINK_STYLE,
                      children: [_v128(_v0.type), (0, _v18.jsx)(_v87.PopOut, {
                        width: (0, _v21.rem)(16),
                        marginLeft: (0, _v21.rem)(4)
                      })]
                    })]
                  }), _v0.type === _v42.PROFILE ? (0, _v18.jsx)(_v88.BokehTooltip, {
                    placement: "bottom",
                    label: _v3 ? _v111.rtmpTranslations.privacyCannotBeUpdatedWhileLive : void 0,
                    children: (0, _v18.jsx)(_v85.Select, {
                      id: (0, _v24.createLiveDomName)(_v0, `facebook-destination-privacy-${_v0.id ?? _v1}`),
                      className: (0, _v24.createLiveDomName)(_v1, "facebook-destination-privacy"),
                      disabled: _v3,
                      size: "sm",
                      value: [_v0.privacy],
                      label: _v111.rtmpTranslations.privacy,
                      items: _v129,
                      onValueChange: _v0 => {
                        _v11(_v0.value[0], _v0);
                      }
                    })
                  }) : null]
                })]
              }), _v112(_v2) ? (0, _v18.jsx)(_v83.Flex, {
                children: (0, _v18.jsx)(_v77.Alert, {
                  children: (0, _v18.jsx)(_v78.AlertDescription, {
                    children: _v111.rtmpTranslations.facebookRequirementsNotice
                  })
                })
              }) : null, _v6.length > _v1 + 1 ? (0, _v18.jsx)(_v82.Divider, {
                borderColor: "stroke"
              }) : null]
            }, String(_v0.id ?? _v1));
          }) : null
        }), (0, _v18.jsx)(_v83.Flex, {
          grow: 1
        }), (0, _v18.jsxs)(_v83.Flex, {
          id: (0, _v24.createLiveDomName)(_v0, "controls"),
          className: (0, _v24.createLiveDomName)(_v1, "controls"),
          gap: (0, _v21.rem)(8),
          justifyContent: "flex-end",
          children: [(0, _v18.jsx)(_v79.Button, {
            id: (0, _v24.createLiveDomName)(_v0, "cancel-button"),
            className: (0, _v24.createLiveDomName)(_v1, "cancel-button"),
            variant: "secondary",
            onClick: _v4.closeActiveModal,
            children: _v109.T_CANCEL
          }), (0, _v18.jsx)(_v79.Button, {
            id: (0, _v24.createLiveDomName)(_v0, "save-button"),
            className: (0, _v24.createLiveDomName)(_v1, "save-button"),
            variant: "primary",
            isDisabled: !_v8,
            onClick: _v10,
            children: _v111.rtmpTranslations.save
          })]
        })]
      })]
    });
  }
  var _v131 = _v0.i(0);
  function _v132({
    canConnectAsAdmin: _v0,
    connectionType: _v1,
    onChange: _v2
  }) {
    let _v3 = (0, _v131.useColorModeValue)("slate.0", "grayscale.700"),
      _v4 = (0, _v19.useMemo)(() => ({
        [_v45.PROFILE]: {
          header: _v111.rtmpTranslations.connectAsMember,
          description: _v111.rtmpTranslations.streamToYourProfilePage,
          disabled: !1
        },
        [_v45.ORGANIZATION]: {
          header: _v111.rtmpTranslations.connectAsAdmin,
          description: _v111.rtmpTranslations.streamToYourCompanyPage,
          disabled: !_v0
        }
      }), [_v0]);
    return (0, _v18.jsx)(_v83.Flex, {
      flexDirection: "column",
      marginBottom: (0, _v21.rem)(16),
      gap: (0, _v21.rem)(8),
      children: Object.values(_v45).map(_v0 => {
        let _v1 = _v0 === _v1,
          _v2 = !0 === _v4[_v0].disabled;
        return (0, _v18.jsxs)(_v83.Flex, {
          direction: "column",
          gap: (0, _v21.rem)(4),
          padding: _v1 ? `${(0, _v21.rem)(15)} ${(0, _v21.rem)(23)}` : `${(0, _v21.rem)(16)} ${(0, _v21.rem)(24)}`,
          border: "solid",
          borderWidth: _v1 ? "2px" : "1px",
          borderColor: _v1 ? "blue.500" : "stroke",
          borderRadius: (0, _v21.rem)(8),
          opacity: _v2 ? .6 : 1,
          background: _v1 ? _v3 : "transparent",
          cursor: _v2 ? "not-allowed" : "pointer",
          onClick: () => _v2 ? void 0 : _v2(_v0),
          children: [(0, _v18.jsx)(_v84.Header, {
            size: "sm",
            children: _v4[_v0].header
          }), (0, _v18.jsx)(_v114.Paragraph, {
            size: "sm",
            color: "text-secondary",
            children: _v4[_v0].description
          })]
        }, _v0);
      })
    });
  }
  function _v133({
    id: _v0 = (0, _v24.createLiveDomName)("linkedin-in-connect-modal"),
    className: _v1 = (0, _v24.createLiveDomName)("linkedin-in-connect-modal"),
    destinationsContext: {
      destinationsActions: _v2,
      destinationsConnectionActions: _v3,
      connections: {
        linkedin: _v4
      }
    } = (0, _v26.useManager)(_v73)
  }) {
    let [_v5, _v6] = (0, _v19.useState)(_v45.PROFILE),
      _v7 = (0, _v19.useCallback)(_v0 => {
        _v6(_v0);
      }, [_v6]),
      _v8 = (0, _v19.useMemo)(() => {
        let _v0 = _v4.value;
        return !!_v0 && !_v0.destinations.length && _v0.scopeType === _v49.ORGANIZATION;
      }, [_v4.value]),
      _v9 = (0, _v19.useCallback)(async () => {
        _v2.openActiveModal(_v51.NONE);
        let _v0 = _v4.value;
        _v0 && _v0.isConnected && (await _v3.disconnectSocialApp(_v44.LINKEDIN)), _v3.openSocialConnect(_v44.LINKEDIN, _v5);
      }, [_v3, _v2, _v5, _v4.value]);
    return (0, _v18.jsxs)(_v83.Flex, {
      id: _v0,
      className: _v1,
      color: "text-primary",
      direction: "column",
      padding: (0, _v21.rem)(16),
      children: [(0, _v18.jsx)(_v84.Header, {
        size: "md",
        marginBottom: (0, _v21.rem)(16),
        children: _v111.rtmpTranslations.connectToLinkedin
      }), (0, _v18.jsx)(_v81.CloseButton, {
        "aria-label": "close",
        variant: "tertiary",
        position: "absolute",
        size: "sm",
        top: (0, _v21.rem)(12),
        right: (0, _v21.rem)(12),
        onClick: _v2.closeActiveModal
      }), _v8 ? (0, _v18.jsx)(_v77.Alert, {
        status: "error",
        children: (0, _v18.jsx)(_v78.AlertDescription, {
          children: _v111.rtmpTranslations.linkedinReconnectAsMemberMessage
        })
      }) : null, (0, _v18.jsx)(_v132, {
        connectionType: _v5,
        onChange: _v7,
        canConnectAsAdmin: !_v8
      }), (0, _v18.jsxs)(_v83.Flex, {
        gap: (0, _v21.rem)(8),
        justifyContent: "flex-end",
        children: [(0, _v18.jsx)(_v79.Button, {
          variant: "secondary",
          onClick: _v2.closeActiveModal,
          children: _v109.T_CANCEL
        }), (0, _v18.jsx)(_v79.Button, {
          variant: "primary",
          onClick: _v9,
          children: _v111.rtmpTranslations.connect
        })]
      })]
    });
  }
  var _v134 = _v0.i(0),
    _v135 = _v0.i(0),
    _v136 = _v0.i(0),
    _v137 = _v0.i(0),
    _v138 = _v0.i(0),
    _v139 = _v0.i(0),
    _v140 = _v0.i(0),
    _v141 = _v0.i(0);
  function _v142({
    destinationVideos: _v0,
    onExistingEventSelect: _v1,
    selectedExistingEvent: _v2,
    connectedDestination: _v3
  }) {
    let _v4 = (0, _v19.useRef)(null),
      [_v5, _v6] = (0, _v19.useState)(!1);
    (0, _v139.useOutsideClick)({
      enabled: _v5,
      ref: _v4,
      handler: () => {
        _v6(!1);
      }
    }), (0, _v19.useEffect)(() => {
      let _v0 = _v0 => "Escape" === _v0.code ? _v6(!1) : null;
      return window.addEventListener("keydown", _v0), () => window.removeEventListener("keydown", _v0);
    }, []);
    let _v7 = Intl.DateTimeFormat().resolvedOptions().timeZone,
      _v8 = (0, _v18.jsx)(_v83.Flex, {
        ref: _v4,
        grow: "1",
        overflowY: "auto",
        maxHeight: (0, _v21.rem)(180),
        width: 400,
        children: (0, _v18.jsx)(_v83.Flex, {
          direction: "column",
          children: _v0.map(_v0 => {
            let _v1 = _v0.scheduledAt - Math.floor(_v134.DateTime.local().toSeconds()) < 0;
            return (0, _v18.jsxs)(_v83.Flex, {
              direction: "column",
              alignItems: "flex-start",
              padding: (0, _v21.rem)(8),
              cursor: _v1 ? "not-allowed" : "pointer",
              color: _v1 ? "text-secondary" : "text-primary",
              opacity: _v1 ? .6 : 1,
              onClick: () => {
                _v1 || _v1(_v0);
              },
              children: [(0, _v18.jsx)(_v84.Header, {
                size: "xs",
                color: "text-primary",
                textTransform: "capitalize",
                margin: 0,
                children: _v0.name
              }), (0, _v18.jsx)(_v114.Paragraph, {
                size: "md",
                color: "text-secondary",
                textTransform: "lowercase",
                margin: 0,
                children: _v111.rtmpTranslations.existingLinkedinEventDate(_v134.DateTime.fromSeconds(_v0.scheduledAt).setZone(_v7))
              })]
            }, _v0.id);
          })
        })
      });
    return (0, _v18.jsx)(_v83.Flex, {
      width: "100%",
      direction: "column",
      marginBottom: (0, _v21.rem)(8),
      onClick: () => {
        _v3?.scheduledAt || _v6(!_v5);
      },
      children: (0, _v18.jsx)(_v141.BokehPopover, {
        isOpen: _v5,
        content: _v8,
        triggerContent: (0, _v18.jsxs)(_v83.Flex, {
          width: "100%",
          minHeight: (0, _v21.rem)(60),
          padding: (0, _v21.rem)(8),
          justifyContent: "space-between",
          alignItems: "center",
          border: "solid 1px",
          borderRadius: (0, _v21.rem)(4),
          borderColor: "text-secondary",
          cursor: "pointer",
          children: [_v2 ? (0, _v18.jsxs)(_v83.Flex, {
            direction: "column",
            children: [(0, _v18.jsx)(_v84.Header, {
              size: "xs",
              margin: 0,
              color: "text-primary",
              textTransform: "capitalize",
              children: _v2?.name
            }), (0, _v18.jsx)(_v114.Paragraph, {
              size: "md",
              margin: 0,
              color: "text-secondary",
              textTransform: "lowercase",
              children: _v111.rtmpTranslations.existingLinkedinEventDate(_v134.DateTime.fromSeconds(_v2.scheduledAt).setZone(_v7))
            })]
          }) : (0, _v18.jsx)(_v84.Header, {
            size: "sm",
            margin: 0,
            color: "text-secondary",
            textTransform: "capitalize",
            children: _v111.rtmpTranslations.linkedinVideoDropdownPlaceholderText
          }), (0, _v18.jsx)(_v140.ChevronDown, {
            width: (0, _v21.rem)(32),
            alignSelf: "center"
          })]
        })
      })
    });
  }
  var _v143 = ((_v11 = _v143 || {}).NEW = "new", _v11.EXISTING = "existing", _v11);
  function _v144({
    setScheduledAt: _v0,
    setProviderVideoId: _v1,
    destinationVideos: _v2,
    destinationsContext: {
      destinations: {
        linkedin: _v3
      }
    } = (0, _v26.useManager)(_v73)
  }) {
    let _v4 = _v3?.value?.[0],
      [_v5, _v6] = (0, _v19.useState)(() => _v4 ? _v2.find(_v0 => _v0.id === _v4.providerVideoId) : null),
      [_v7, _v8] = (0, _v19.useState)(_v4?.scheduledAt ? "existing" : "new"),
      [_v9, _v10] = (0, _v19.useState)(_v134.DateTime.local().plus({
        minutes: 10
      })),
      _v11 = (0, _v19.useRef)(null),
      _v12 = _v9 && Math.floor(_v9.toSeconds()) - Math.floor(_v134.DateTime.local().toSeconds()) < 60,
      _v13 = _v134.DateTime.local();
    (0, _v19.useEffect)(() => {
      _v4 || "new" !== _v7 || (_v0(Math.floor(_v9.toSeconds())), _v1(""));
    }, []);
    let _v14 = (0, _v19.useCallback)(_v0 => {
        _v6(_v0), _v0(_v0.scheduledAt), _v1(_v0.id);
      }, [_v6, _v0, _v1]),
      _v15 = (0, _v19.useCallback)(_v0 => {
        let _v1 = _v134.DateTime.fromJSDate(_v0).set({
          hour: _v9.hour,
          minute: _v9.minute
        });
        _v10(_v1), _v0(Math.floor(_v1.toSeconds()));
      }, [_v10, _v9, _v0]),
      _v16 = (0, _v19.useCallback)(_v0 => {
        if (_v9) {
          let [_v0, _v1] = _v0.split(":"),
            _v2 = _v9.set({
              hour: Number(_v0),
              minute: Number(_v1)
            });
          _v10(_v2), _v0(Math.floor(_v2.toSeconds()));
        }
      }, [_v9, _v10, _v0]),
      _v17 = (0, _v19.useCallback)(() => {
        let _v0 = _v134.DateTime.local().plus({
          minutes: 10
        });
        _v10(_v0), _v8("new"), _v0(Math.floor(_v0.toSeconds())), _v1("");
      }, [_v8, _v1, _v0]),
      _v18 = (0, _v19.useCallback)(() => {
        _v8("existing"), _v5 && _v5.scheduledAt - Math.floor(_v134.DateTime.local().toSeconds()) > 60 ? (_v0(_v5.scheduledAt), _v1(_v5.id)) : (_v0(null), _v1(""));
      }, [_v8, _v5, _v0, _v1]);
    return (0, _v18.jsx)(_v83.Flex, {
      width: "100%",
      direction: "column",
      marginBottom: (0, _v21.rem)(24),
      children: (0, _v18.jsxs)(_v18.Fragment, {
        children: [(0, _v18.jsx)(_v135.Radio, {
          isDisabled: !!_v4?.scheduledAt,
          isChecked: "new" === _v7,
          value: "new",
          margin: `${(0, _v21.rem)(8)} 0`,
          onChange: _v17,
          children: _v111.rtmpTranslations.createNew
        }, "new"), "new" === _v7 ? (0, _v18.jsxs)(_v83.Flex, {
          flexWrap: "nowrap",
          width: "100%",
          gap: (0, _v21.rem)(8),
          margin: `${(0, _v21.rem)(8)} 0`,
          children: [(0, _v18.jsx)(_v83.Flex, {
            width: "50%",
            direction: "column",
            children: (0, _v18.jsx)(_v137.TimePicker, {
              date: _v9,
              minDateTime: _v13.plus({
                minutes: 2
              }),
              maxDateTime: _v13.set({
                hour: 23,
                minute: 59
              }),
              onSelect: _v16
            })
          }), (0, _v18.jsx)(_v83.Flex, {
            width: "50%",
            direction: "column",
            children: (0, _v18.jsx)(_v138.DatePicker, {
              date: _v9,
              minDate: _v13.plus({
                minutes: 2
              }),
              onSelect: _v15
            })
          })]
        }) : null, _v12 && "new" === _v7 ? (0, _v18.jsx)(_v83.Flex, {
          width: "100%",
          children: (0, _v18.jsx)(_v86.Text, {
            variant: "body-xl",
            fontSize: "text-xs",
            color: "red.500",
            children: _v111.rtmpTranslations.selectStartTimeThatsAtLeast
          })
        }) : null, (0, _v18.jsx)(_v135.Radio, {
          isChecked: "existing" === _v7,
          isDisabled: !_v2.length || !!_v4?.scheduledAt,
          value: "existing",
          margin: `${(0, _v21.rem)(8)} 0`,
          onChange: _v18,
          children: _v111.rtmpTranslations.useExistingLinkedinEvents
        }, "existing"), "existing" === _v7 && _v2?.length > 0 ? (0, _v18.jsx)(_v142, {
          destinationVideos: _v2,
          onExistingEventSelect: _v14,
          selectedExistingEvent: _v5,
          connectedDestination: _v4
        }) : null, _v4 ? null : (0, _v18.jsxs)(_v77.Alert, {
          ref: _v11,
          children: [(0, _v18.jsx)(_v78.AlertDescription, {
            marginBottom: (0, _v21.rem)(8),
            children: _v111.rtmpTranslations.linkedInDailyStreamingLimit
          }), (0, _v18.jsx)(_v78.AlertDescription, {
            marginBottom: (0, _v21.rem)(8),
            children: _v111.rtmpTranslations.linkedinAllowsYouToGoLive
          }), (0, _v18.jsx)(_v78.AlertDescription, {
            children: _v111.rtmpTranslations.linkedinDoesntSupportEditingStartTime
          })]
        })]
      })
    });
  }
  function _v145({
    id: _v0 = (0, _v124.createDomName)("linkedin-settings-modal"),
    className: _v1 = (0, _v124.createDomName)("linkedin-settings-modal"),
    destinationsContext: {
      destinations: {
        linkedin: _v2
      },
      connections: {
        linkedin: _v3
      },
      destinationsActions: _v4,
      destinationsConnectionActions: _v5
    } = (0, _v26.useManager)(_v73)
  }) {
    let _v6 = _v3?.value?.destinations[0],
      _v7 = _v2?.value?.find(_v0 => _v0.providerDestinationId === _v6?.destinationId),
      [_v8, _v9] = (0, _v19.useState)(_v7?.providerDestinationId ?? _v6?.destinationId ?? null),
      _v10 = _v3.value?.destinations.find(_v0 => _v0.destinationId === _v8)?.videos ?? [],
      [_v11, _v12] = (0, _v19.useState)(_v7?.scheduledAt),
      [_v13, _v14] = (0, _v19.useState)(_v7?.providerVideoId ?? ""),
      _v15 = "https://www.linkedin.com/notifications/",
      _v16 = _v3.value?.destinations.find(_v0 => _v0.destinationId === _v8),
      _v17 = (0, _v19.useMemo)(() => {
        if (_v7?.scheduledAt || !_v11) return !0;
        let _v0 = _v11 - Math.floor(_v134.DateTime.local().toSeconds());
        return _v13 ? _v0 < 0 : _v0 < 60;
      }, [_v11, _v7?.scheduledAt, _v13]),
      _v18 = (0, _v19.useCallback)(() => {
        if (_v7) _v4.updateSocialDestination({
          ..._v7,
          providerDestinationId: _v16?.destinationId !== _v7.providerDestinationId ? _v16?.destinationId : _v7.providerDestinationId,
          displayName: _v16?.destinationId !== _v7.providerDestinationId ? _v16?.displayName : _v7.displayName
        }), _v5.loadSocialConnections([_v44.LINKEDIN]), _v4.openActiveModal(_v51.NONE);else if (_v16) {
          let _v0 = {
            ..._v16,
            providerDestinationId: _v16.destinationId,
            serviceName: _v44.LINKEDIN,
            isEnabled: !1,
            privacy: _v46.LINKEDIN_PUBLIC,
            scheduledAt: _v11,
            providerVideoId: _v13
          };
          _v101(), _v4.createSocialDestination(_v0), _v4.openActiveModal(_v51.NONE);
        }
      }, [_v7, _v16, _v4, _v5, _v11, _v13]),
      _v19 = (0, _v19.useCallback)(_v0 => {
        let _v1 = _v3.value?.destinations.find(_v0 => _v0.destinationId === _v0) ?? null;
        _v9(_v1?.destinationId);
      }, [_v3.value?.destinations, _v9]);
    return (0, _v18.jsxs)(_v83.Flex, {
      id: _v0,
      className: _v1,
      direction: "column",
      position: "relative",
      padding: (0, _v21.rem)(16),
      color: "text-primary",
      overflow: "hidden",
      children: [(0, _v18.jsx)(_v84.Header, {
        size: "md",
        children: _v109.T_LINKEDIN_STREAMING_SETTINGS
      }), (0, _v18.jsx)(_v81.CloseButton, {
        "aria-label": "close",
        variant: "tertiary",
        position: "absolute",
        size: "sm",
        top: (0, _v21.rem)(12),
        right: (0, _v21.rem)(12),
        onClick: _v4.closeActiveModal
      }), _v2.isLoading ? (0, _v18.jsx)(_v115.Spinner, {
        marginTop: (0, _v21.rem)(12),
        alignSelf: "center"
      }) : (0, _v18.jsxs)(_v18.Fragment, {
        children: [_v3.value?.scopeType === _v49.PROFILE && _v7 ? (0, _v18.jsx)(_v83.Flex, {
          justifyContent: "space-between",
          flexWrap: "nowrap",
          margin: `${(0, _v21.rem)(24)} 0`,
          children: (0, _v18.jsxs)(_v18.Fragment, {
            children: [(0, _v18.jsx)(_v84.Header, {
              size: "sm",
              children: _v7?.displayName
            }), (0, _v18.jsxs)(_v86.Text, {
              variant: "body-xl",
              display: "flex",
              flexWrap: "nowrap",
              href: _v15,
              fontSize: "text-sm",
              color: "text-secondary",
              target: "_blank",
              as: "a",
              _hover: _v110.HOVER_UNDERLINE_LINK_STYLE,
              children: [_v109.T_PROFILE_PAGE, (0, _v18.jsx)(_v87.PopOut, {
                width: (0, _v21.rem)(16),
                marginLeft: (0, _v21.rem)(4)
              })]
            })]
          })
        }) : (0, _v18.jsxs)(_v18.Fragment, {
          children: [(0, _v18.jsx)(_v84.Header, {
            size: "sm",
            marginTop: (0, _v21.rem)(24),
            marginBottom: (0, _v21.rem)(8),
            children: _v109.T_STREAM_TO
          }), (0, _v18.jsx)(_v136.RadioGroup, {
            id: (0, _v124.createDomName)(_v0, "organizations"),
            className: (0, _v124.createDomName)(_v1, "organizations"),
            display: "flex",
            flexDirection: "column",
            maxHeight: (0, _v21.rem)(120),
            overflowY: "auto",
            sx: {
              "& > label > :last-child": {
                width: "100%"
              }
            },
            value: String(_v8),
            onChange: _v19,
            children: _v3.value?.destinations.map(_v0 => {
              var _v1;
              let _v2,
                _v3 = _v0.type === _v42.PROFILE ? _v15 : (_v2 = (_v1 = _v0.destinationId).substring(_v1.lastIndexOf(":") + 1), `https://www.linkedin.com/company/${_v2}/posts/?feedView=all&viewAsMember=true`);
              return (0, _v18.jsx)(_v135.Radio, {
                className: (0, _v124.createDomName)(_v1, "item"),
                value: _v0.destinationId,
                margin: `${(0, _v21.rem)(4)} 0`,
                isChecked: _v8 === _v0.destinationId,
                isDisabled: !!_v7?.scheduledAt,
                children: (0, _v18.jsxs)(_v83.Flex, {
                  className: (0, _v124.createDomName)(_v1, "item-label"),
                  flexWrap: "nowrap",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  children: [(0, _v18.jsx)(_v84.Header, {
                    size: "sm",
                    margin: 0,
                    children: _v0.displayName
                  }), (0, _v18.jsxs)(_v86.Text, {
                    variant: "body-xl",
                    display: "flex",
                    flexWrap: "nowrap",
                    href: _v3,
                    fontSize: "text-sm",
                    color: "text-secondary",
                    target: "_blank",
                    as: "a",
                    _hover: _v110.HOVER_UNDERLINE_LINK_STYLE,
                    children: [_v0.type === _v42.PROFILE ? _v109.T_PROFILE_PAGE : _v109.T_COMPANY_PAGE, (0, _v18.jsx)(_v87.PopOut, {
                      width: (0, _v21.rem)(16),
                      marginLeft: (0, _v21.rem)(4)
                    })]
                  })]
                })
              }, _v0.displayName);
            })
          }), (0, _v18.jsx)(_v82.Divider, {
            marginY: (0, _v21.rem)(8),
            borderColor: "stroke"
          })]
        }), (0, _v18.jsx)(_v144, {
          setScheduledAt: _v12,
          setProviderVideoId: _v14,
          destinationVideos: _v10
        }, _v8), (0, _v18.jsxs)(_v83.Flex, {
          gap: (0, _v21.rem)(8),
          justifyContent: "flex-end",
          children: [(0, _v18.jsx)(_v79.Button, {
            variant: "secondary",
            onClick: _v4.closeActiveModal,
            children: _v109.T_CANCEL
          }), (0, _v18.jsx)(_v79.Button, {
            variant: "primary",
            isDisabled: _v17,
            onClick: _v18,
            children: _v109.T_SAVE
          })]
        })]
      })]
    });
  }
  var _v146 = _v0.i(0),
    _v147 = _v0.i(0),
    _v148 = _v0.i(0);
  function _v149({
    id: _v0 = (0, _v24.createLiveDomName)("ott-settings-modal"),
    className: _v1 = (0, _v24.createLiveDomName)("ott-settings-modal"),
    destinationsContext: {
      destinations: {
        ott: _v2
      },
      connections: {
        ott: _v3
      },
      destinationsActions: _v4
    } = (0, _v26.useManager)(_v73)
  }) {
    let [_v5, _v6] = (0, _v19.useState)(null),
      [_v7, _v8] = (0, _v19.useState)(!1);
    (0, _v19.useEffect)(() => {
      _v2?.value && _v3?.value?.destinations && null === _v5 ? _v6(_v3.value.destinations.map(_v0 => {
        let _v1 = _v2.value?.find(_v0 => _v0.ottChannelId === _v0.id);
        return {
          uri: _v1?.uri ?? void 0,
          ottChannelId: _v0.id,
          ottChannelName: _v0.title,
          ottChannelSubdomain: _v0.subdomain,
          checked: !!_v1
        };
      })) : _v5 && _v3?.value?.destinations && _v3.value.destinations.length > _v5.length && _v6(_v3.value.destinations.map(_v0 => _v5.find(_v0 => _v0.ottChannelId === _v0.id) ?? {
        uri: void 0,
        ottChannelId: _v0.id,
        ottChannelName: _v0.title,
        ottChannelSubdomain: _v0.subdomain,
        checked: !1
      }));
    }, [_v3.value, _v2.value, _v5]);
    let _v9 = (0, _v19.useCallback)((_v0, _v1) => {
      _v5 && (_v6(_v5.map(_v0 => (_v0.ottChannelId === _v1.ottChannelId && (_v0.checked = _v0.target.checked), _v0))), _v8(!0));
    }, [_v5]);
    return (0, _v18.jsxs)(_v83.Flex, {
      id: _v0,
      className: _v1,
      padding: (0, _v21.rem)(16),
      direction: "column",
      position: "relative",
      color: "text-primary",
      overflow: "hidden",
      children: [(0, _v18.jsx)(_v84.Header, {
        size: "lg",
        margin: 0,
        children: _v111.rtmpTranslations.ottStreamSettings
      }), (0, _v18.jsx)(_v146.IconButton, {
        "aria-label": "close",
        icon: (0, _v18.jsx)(_v147.CloseX, {}),
        variant: "minimalTransparent",
        position: "absolute",
        size: "sm",
        top: (0, _v21.rem)(12),
        right: (0, _v21.rem)(12),
        onClick: _v4.closeActiveModal
      }), (0, _v18.jsxs)(_v83.Flex, {
        direction: "column",
        gap: (0, _v21.rem)(8),
        minHeight: (0, _v21.rem)(312),
        children: [(0, _v18.jsx)(_v84.Header, {
          size: "sm",
          marginTop: (0, _v21.rem)(24),
          marginBottom: (0, _v21.rem)(8),
          children: _v111.rtmpTranslations.streamTo
        }), (0, _v18.jsxs)(_v83.Flex, {
          direction: "column",
          gap: (0, _v21.rem)(16),
          padding: `0 ${(0, _v21.rem)(4)}`,
          overflowY: "auto",
          overflowX: "hidden",
          maxHeight: `min(${(0, _v21.rem)(400)}, 65vh)`,
          children: [null !== _v5 ? _v5.map((_v0, _v1) => (0, _v18.jsxs)(_v83.Flex, {
            gap: (0, _v21.rem)(16),
            alignItems: "center",
            children: [(0, _v18.jsx)(_v83.Flex, {
              alignItems: "start",
              children: (0, _v18.jsx)(_v80.Checkbox, {
                isChecked: _v0.checked,
                onChange: _v0 => _v9(_v0, _v0)
              })
            }), (0, _v18.jsx)(_v83.Flex, {
              direction: "column",
              width: "100%",
              gap: (0, _v21.rem)(16),
              children: (0, _v18.jsx)(_v84.Header, {
                size: "sm",
                marginBottom: 0,
                children: _v0.ottChannelName
              })
            }), (0, _v18.jsxs)(_v86.Text, {
              variant: "body-xl",
              display: "flex",
              alignItems: "center",
              flexWrap: "nowrap",
              href: _v148.vimeoConfig.PATH.VIMEO_OTT_CHANNEL_VIEW_URL(_v0.ottChannelSubdomain),
              fontSize: "text-sm",
              color: "text-secondary",
              target: "_blank",
              as: "a",
              _hover: _v110.HOVER_UNDERLINE_LINK_STYLE,
              children: [_v111.rtmpTranslations.channel, (0, _v18.jsx)(_v87.PopOut, {
                width: (0, _v21.rem)(16),
                marginLeft: (0, _v21.rem)(4)
              })]
            })]
          }, _v1)) : null, _v3.value?.paging?.next ? (0, _v18.jsx)(_v86.Text, {
            variant: "body-xl",
            textDecoration: "underline",
            color: "blue.500",
            cursor: "pointer",
            onClick: _v0 => {
              var _v1;
              return _v1 = _v3.value?.paging?.next, void (_v0.preventDefault(), _v4.loadOttDestination(_v1));
            },
            children: _v111.rtmpTranslations.loadMore
          }) : null]
        }), (0, _v18.jsx)(_v82.Divider, {}), (0, _v18.jsxs)(_v83.Flex, {
          gap: (0, _v21.rem)(8),
          marginTop: (0, _v21.rem)(16),
          justifyContent: "flex-end",
          children: [(0, _v18.jsx)(_v79.Button, {
            variant: "secondary",
            onClick: _v4.closeActiveModal,
            children: _v109.T_CANCEL
          }), (0, _v18.jsx)(_v79.Button, {
            isDisabled: !_v7,
            onClick: () => {
              _v5?.forEach(_v0 => {
                _v0.checked && !_v0.uri ? (_v102(), _v4.createOttDestination(_v0)) : !_v0.checked && _v0.uri && (_v107(), _v4.removeOttDestination(_v0)), _v4.openActiveModal(_v51.NONE);
              });
            },
            children: _v111.rtmpTranslations.save
          })]
        })]
      })]
    });
  }
  var _v150 = _v0.i(0);
  function _v151({
    name: _v0,
    label: _v1,
    defaultValue: _v2,
    onChange: _v3,
    errorMessage: _v4,
    hintMessage: _v5,
    validator: _v6,
    isError: _v7 = !1
  }) {
    let [_v8, _v9] = (0, _v19.useState)(_v2 || ""),
      [_v10, _v11] = (0, _v19.useState)(!1),
      _v12 = (0, _v19.useCallback)(_v0 => {
        let _v1 = _v0.target.value;
        _v9(_v1), _v3(_v1);
      }, [_v3]),
      _v13 = !_v6(_v8) && _v10 || _v7;
    return (0, _v18.jsxs)(_v83.Flex, {
      direction: "column",
      children: [(0, _v18.jsx)(_v84.Header, {
        size: "xs",
        marginBottom: (0, _v21.rem)(4),
        children: _v1
      }), (0, _v18.jsx)(_v150.Input, {
        name: _v0,
        defaultValue: _v2,
        isInvalid: _v13,
        onChange: _v12,
        size: "sm",
        onBlur: () => _v11(!0)
      }), _v13 ? (0, _v18.jsx)(_v86.Text, {
        variant: "body-xl",
        fontSize: "text-xs",
        color: "red.500",
        children: _v4
      }) : null, _v10 ? null : (0, _v18.jsx)(_v86.Text, {
        variant: "body-xl",
        fontSize: "text-xs",
        color: "text-secondary",
        children: _v5
      })]
    });
  }
  let _v152 = /^rtmps?:\/\/[^/]+\/[^/].*$/;
  function _v153({
    className: _v0,
    destinationId: _v1,
    type: _v2,
    destinationsContext: {
      destinations: {
        customRtmp: _v3
      },
      destinationsActions: _v4
    } = (0, _v26.useManager)(_v73)
  }) {
    let _v5 = _v1 ? _v3.value?.find(_v0 => _v0.id === _v1) : null,
      [_v6, _v7] = (0, _v19.useState)(_v5?.displayName ?? ""),
      [_v8, _v9] = (0, _v19.useState)(_v5?.streamKey ?? ""),
      [_v10, _v11] = (0, _v19.useState)(_v5?.streamUrl ?? ""),
      _v12 = (0, _v19.useCallback)(_v0 => !!(_v0 && _v0.trim() && _v0.length <= 255), []),
      _v13 = (0, _v19.useCallback)(_v0 => !!(_v0 && _v0.trim() && _v0.length <= 255 && _v0.length > 1), []),
      _v14 = (0, _v19.useCallback)(_v0 => !!(_v152.test(_v0) && _v0.length <= 0), []),
      _v15 = (0, _v19.useMemo)(() => !!_v3.value?.find(_v0 => _v0.streamKey === _v8.trim() && _v0.streamUrl === _v10.trim() && _v1 !== _v0.id), [_v1, _v3.value, _v8, _v10]),
      _v16 = (0, _v19.useMemo)(() => !!(_v12(_v6) && _v13(_v8) && _v14(_v10) && !_v15), [_v12, _v6, _v13, _v8, _v14, _v10, _v15]),
      _v17 = (0, _v19.useCallback)(() => {
        _v16 && (_v5?.id ? (_v5.displayName = _v6, _v5.streamUrl = _v10, _v5.streamKey = _v8, _v4.updateSocialDestination(_v5)) : _v4.createSocialDestination({
          streamUrl: _v10,
          streamKey: _v8,
          displayName: _v6,
          serviceName: _v44.CUSTOM_RTMP,
          isEnabled: !0,
          type: _v2
        }), _v4.openActiveModal(_v51.NONE));
      }, [_v16, _v5, _v4, _v6, _v10, _v8, _v2]);
    return (0, _v18.jsxs)(_v83.Flex, {
      className: _v0,
      direction: "column",
      padding: (0, _v21.rem)(16),
      color: "text-primary",
      overflow: "hidden",
      children: [(0, _v18.jsx)(_v84.Header, {
        size: "md",
        children: function (_v0) {
          switch (_v0) {
            case _v43.INSTAGRAM:
              return _v111.rtmpTranslations.instagramStreamingSettings;
            case _v43.TIK_TOK:
              return _v111.rtmpTranslations.tikTokStreamingSettings;
            case _v43.TWITTER_X:
              return _v111.rtmpTranslations.xStreamingSettings;
            default:
              return _v111.rtmpTranslations.rtmpStreamingSettings;
          }
        }(_v2)
      }), (0, _v18.jsx)(_v81.CloseButton, {
        "aria-label": "close",
        variant: "tertiary",
        position: "absolute",
        size: "sm",
        top: (0, _v21.rem)(12),
        right: (0, _v21.rem)(12),
        onClick: _v4.closeActiveModal
      }), (0, _v18.jsxs)(_v83.Flex, {
        direction: "column",
        gap: (0, _v21.rem)(12),
        paddingTop: (0, _v21.rem)(16),
        children: [(0, _v18.jsx)(_v151, {
          name: "display_name",
          label: _v111.rtmpTranslations.destinationName,
          defaultValue: _v5?.displayName,
          errorMessage: _v111.rtmpTranslations.destinationNameInvalidMessage,
          validator: _v12,
          onChange: _v0 => {
            _v7(_v0);
          }
        }), (0, _v18.jsx)(_v151, {
          name: "stream_url",
          label: _v111.rtmpTranslations.rtmpURL,
          defaultValue: _v5?.streamUrl,
          errorMessage: _v111.rtmpTranslations.rtmpURLInvalidMessage,
          hintMessage: _v111.rtmpTranslations.rtmpURLHint,
          validator: _v14,
          isError: _v15,
          onChange: _v0 => {
            _v11(_v0);
          }
        }), (0, _v18.jsx)(_v151, {
          name: "stream_key",
          label: _v111.rtmpTranslations.streamKey,
          defaultValue: _v5?.streamKey,
          errorMessage: _v111.rtmpTranslations.streamKeyInvalidMessage,
          validator: _v13,
          isError: _v15,
          onChange: _v0 => {
            _v9(_v0);
          }
        }), _v15 ? (0, _v18.jsx)(_v77.Alert, {
          status: "error",
          marginBottom: 0,
          children: (0, _v18.jsx)(_v78.AlertDescription, {
            children: _v111.rtmpTranslations.streamKeyDuplicate
          })
        }) : null]
      }), (0, _v18.jsxs)(_v83.Flex, {
        gap: (0, _v21.rem)(8),
        marginTop: (0, _v21.rem)(16),
        justifyContent: "flex-end",
        children: [(0, _v18.jsx)(_v79.Button, {
          variant: "secondary",
          onClick: _v4.closeActiveModal,
          children: _v109.T_CANCEL
        }), (0, _v18.jsx)(_v79.Button, {
          isDisabled: !_v16,
          variant: "primary",
          onClick: _v17,
          children: _v111.rtmpTranslations.save
        })]
      })]
    });
  }
  var _v154 = _v0.i(0);
  let _v155 = [{
    label: _v111.rtmpTranslations.public,
    value: _v46.PUBLIC
  }, {
    label: _v111.rtmpTranslations.private,
    value: _v46.PRIVATE
  }, {
    label: _v111.rtmpTranslations.unlisted,
    value: _v46.UNLISTED
  }];
  function _v156({
    id: _v0 = (0, _v124.createDomName)("youtube-settings-modal"),
    className: _v1 = (0, _v124.createDomName)("youtube-settings-modal"),
    destinationsContext: {
      destinations: {
        youtube: _v2
      },
      connections: {
        youtube: _v3
      },
      destinationsActions: _v4
    } = (0, _v26.useManager)(_v73)
  }) {
    let _v5 = (0, _v154.useSimpleNotification)(),
      _v6 = _v2.isLoading || _v3.isLoading,
      _v7 = _v3?.value?.destinations[0],
      _v8 = _v2?.value?.find(_v0 => _v0.providerDestinationId === _v7?.destinationId),
      _v9 = _v8 ?? _v7,
      _v10 = !!_v8?.state,
      _v11 = _v113(_v8?.providerBroadcastId, _v7?.destinationId),
      [_v12, _v13] = (0, _v19.useState)(_v8?.privacy ?? _v46.PUBLIC),
      [_v14, _v15] = (0, _v19.useState)(!_v9 || _v10);
    (0, _v19.useEffect)(() => {
      _v8 && _v8.state && _v5({
        message: _v8.stateMessage
      });
    }, [_v8, _v8?.state, _v8?.stateMessage, _v5]);
    let _v16 = (0, _v19.useCallback)(() => {
        if (_v8) _v8.privacy = _v12, _v4.updateSocialDestination(_v8), _v4.openActiveModal(_v51.NONE);else if (_v7) {
          _v100();
          let _v0 = {
            ..._v7,
            providerDestinationId: _v7.destinationId,
            serviceName: _v44.YOUTUBE,
            isEnabled: !0,
            privacy: _v12
          };
          _v4.createSocialDestination(_v0), _v4.openActiveModal(_v51.NONE);
        }
      }, [_v8, _v7, _v4, _v12]),
      _v17 = (0, _v19.useCallback)(() => {
        _v15(!1);
      }, [_v15]);
    return (0, _v18.jsxs)(_v83.Flex, {
      id: _v0,
      className: _v1,
      padding: (0, _v21.rem)(16),
      direction: "column",
      position: "relative",
      color: "text-primary",
      children: [(0, _v18.jsx)(_v84.Header, {
        size: "md",
        children: _v111.rtmpTranslations.youtubeStreamingSettings
      }), (0, _v18.jsx)(_v81.CloseButton, {
        "aria-label": "close",
        variant: "tertiary",
        position: "absolute",
        size: "sm",
        top: (0, _v21.rem)(12),
        right: (0, _v21.rem)(12),
        onClick: _v4.closeActiveModal
      }), _v6 ? (0, _v18.jsx)(_v115.Spinner, {
        marginTop: (0, _v21.rem)(12),
        alignSelf: "center"
      }) : (0, _v18.jsxs)(_v18.Fragment, {
        children: [(0, _v18.jsxs)(_v83.Flex, {
          margin: `${(0, _v21.rem)(24)} 0`,
          flexWrap: "nowrap",
          justifyContent: "space-between",
          children: [(0, _v18.jsx)(_v84.Header, {
            size: "sm",
            children: _v9?.displayName
          }), (0, _v18.jsx)(_v114.Paragraph, {
            size: "md",
            color: "text-secondary",
            margin: 0,
            _firstLetter: {
              textTransform: "capitalize"
            },
            children: _v11 ? (0, _v18.jsxs)(_v86.Text, {
              variant: "body-xl",
              display: "flex",
              flexWrap: "nowrap",
              href: _v11,
              target: "_blank",
              fontSize: "text-sm",
              color: "text-secondary",
              as: "a",
              _hover: _v110.HOVER_UNDERLINE_LINK_STYLE,
              children: [_v9?.type, (0, _v18.jsx)(_v87.PopOut, {
                width: (0, _v21.rem)(16),
                marginLeft: (0, _v21.rem)(4)
              })]
            }) : _v9?.type
          })]
        }), (0, _v18.jsx)(_v85.Select, {
          id: (0, _v124.createDomName)(_v0, "youtube-destination-privacy"),
          className: (0, _v124.createDomName)(_v1, "youtube-destination-privacy"),
          value: [_v12],
          label: _v111.rtmpTranslations.privacy,
          items: _v155,
          size: "sm",
          onValueChange: _v0 => {
            _v13(_v0.value[0]);
          }
        }), _v14 ? (0, _v18.jsx)(_v77.Alert, {
          marginTop: (0, _v21.rem)(24),
          marginBottom: 0,
          onClose: _v17,
          children: (0, _v18.jsx)(_v78.AlertDescription, {
            children: _v111.rtmpTranslations.ifYouHaventAlreadyVerifyYoutube
          })
        }) : null, (0, _v18.jsxs)(_v83.Flex, {
          gap: (0, _v21.rem)(8),
          marginTop: (0, _v21.rem)(16),
          justifyContent: "flex-end",
          children: [(0, _v18.jsx)(_v79.Button, {
            variant: "secondary",
            onClick: _v4.closeActiveModal,
            children: _v109.T_CANCEL
          }), (0, _v18.jsx)(_v79.Button, {
            variant: "primary",
            isDisabled: !_v9 || _v10,
            onClick: _v16,
            children: _v111.rtmpTranslations.save
          })]
        })]
      })]
    });
  }
  let _v157 = {
    [_v51.NONE]: () => null,
    [_v51.YOUTUBE_SETTINGS]: () => (0, _v18.jsx)(_v156, {}),
    [_v51.FACEBOOK_SETTINGS]: () => (0, _v18.jsx)(_v130, {}),
    [_v51.LINKEDIN_CONNECT]: () => (0, _v18.jsx)(_v133, {}),
    [_v51.LINKEDIN_SETTINGS]: () => (0, _v18.jsx)(_v145, {}),
    [_v51.OTT_SETTINGS]: () => (0, _v18.jsx)(_v149, {}),
    [_v51.CUSTOM_RTMP_SETTINGS]: _v0 => (0, _v18.jsx)(_v153, {
      destinationId: _v0?.rtmpDestinationId ?? null,
      type: _v0?.type ?? _v43.CUSTOM
    })
  };
  _v0.s(["DestinationModals", 0, function ({
    id: _v0 = (0, _v24.createLiveDomName)("destinations-modal"),
    destinationsContext: {
      activeModal: _v1,
      modalState: _v2,
      destinationsActions: _v3
    } = (0, _v26.useManager)(_v73)
  }) {
    let _v4 = (0, _v19.useMemo)(() => _v157[_v1](_v2), [_v1, _v2]);
    return (0, _v18.jsxs)(_v74.Modal, {
      id: _v0,
      size: "md",
      returnFocusOnClose: !1,
      isOpen: _v1 !== _v51.NONE,
      onClose: _v3.closeActiveModal,
      children: [(0, _v18.jsx)(_v76.ModalOverlay, {}), (0, _v18.jsx)(_v75.ModalContent, {
        width: (0, _v21.rem)(500),
        children: _v4
      })]
    });
  }], 0);
  var _v158 = _v0.i(0);
  _v0.s(["LinkedinDestination", 0, function ({
    id: _v0 = (0, _v124.createDomName)("linkedin-destination"),
    className: _v1 = (0, _v124.createDomName)("linkedin-destination"),
    isDisabled: _v2 = !1,
    destinationsContext: {
      destinations: {
        linkedin: _v3
      },
      connections: {
        linkedin: _v4
      },
      destinationsActions: _v5,
      hasValidConnection: _v6
    } = (0, _v26.useManager)(_v73),
    sessionStatusContext: {
      liveComposerStatusGetters: _v7,
      isProvisionUpdating: _v8
    } = (0, _v26.useManager)(_v90.ComposerSessionStatusManager)
  }) {
    let {
        trackLiveStreamDestinationActionClicked: _v9
      } = (0, _v126.useLiveStreamBroadcasterTracking)(),
      {
        isOpen: _v10,
        onClose: _v11,
        onToggle: _v12
      } = (0, _v117.useDisclosure)(),
      _v13 = _v7.isStreaming(),
      _v14 = _v3.isLoading || _v4.isLoading,
      _v15 = _v3?.value?.[0],
      _v16 = (0, _v127.useViewer)(),
      _v17 = _v16 && _v16.user && _v15?.userId === _v16.user.id,
      _v18 = !!(!_v15 || _v15?.metadata?.connectionStatus?.isConnected && !_v15?.metadata?.connectionStatus?.isConnectionBroken),
      _v19 = (0, _v123.useIsLiveDemoSubscription)(),
      _v20 = _v6(_v44.LINKEDIN),
      _v21 = !!(_v15 && (!_v15.scheduledAt || _v15.scheduledAt - _v134.DateTime.local().toSeconds() > 900) || _v15?.state === _v47.HAS_ERROR || _v19),
      _v22 = (0, _v19.useMemo)(() => Intl.DateTimeFormat().resolvedOptions().timeZone, []),
      _v23 = (0, _v19.useMemo)(() => _v15?.scheduledAt ? _v134.DateTime.fromSeconds(_v15?.scheduledAt).setZone(_v22) : _v134.DateTime.local(), [_v22, _v15?.scheduledAt]),
      _v24 = (0, _v19.useMemo)(() => {
        if (_v15?.type === _v42.ORGANIZATION) {
          let _v0 = _v15.providerDestinationId.substring(_v15.providerDestinationId.lastIndexOf(":") + 1);
          return `https://www.linkedin.com/company/${_v0}/posts/?feedView=all&viewAsMember=true`;
        }
        return "https://www.linkedin.com/notifications/";
      }, [_v15?.type, _v15?.providerDestinationId]),
      _v25 = _v15?.stateMessage,
      _v26 = _v21 && _v15?.state === _v47.HAS_ERROR && "string" == typeof _v25 && /^Call has been throttled/.test(_v25) ? _v109.T_LINKEDIN_SIMULCAST_STOPPED : _v21 ? _v109.T_LINKEDIN_FROM_15_MINUTES_TO_2_HOURS : null,
      _v27 = (0, _v19.useCallback)(() => {
        _v15 && _v5.toggleSocialDestination(_v15);
      }, [_v15, _v5]),
      _v28 = (0, _v19.useCallback)(() => {
        _v13 && _v13 && _v15?.isEnabled || (_v5.openActiveModal(_v51.LINKEDIN_SETTINGS), _v11());
      }, [_v5, _v11, _v13, _v15?.isEnabled]),
      _v29 = (0, _v19.useCallback)(() => {
        _v15 && (_v106(), _v5.removeSocialDestination(_v15)), _v11();
      }, [_v5, _v15, _v11]),
      _v30 = (0, _v125.inline)(() => (0, _v18.jsx)(_v83.Flex, {
        cursor: _v19 ? "not-allowed" : "auto",
        children: (0, _v18.jsx)(_v79.Button, {
          isDisabled: _v19 || _v2,
          variant: "secondary",
          size: "sm",
          onClick: () => {
            _v96(!!_v4.value?.isConnectionBroken), _v9({
              liveStreamDestination: "linkedin",
              liveStreamDestinationAction: "connect"
            }), _v5.openActiveModal(_v51.LINKEDIN_CONNECT);
          },
          children: _v4.value?.isConnectionBroken ? _v111.rtmpTranslations.reconnect : _v111.rtmpTranslations.connect
        })
      })),
      _v31 = (0, _v125.inline)(() => (0, _v18.jsx)(_v121.BokehMenu, {
        isOpen: _v10,
        isDisabled: _v2,
        menuList: (0, _v18.jsxs)(_v18.Fragment, {
          children: [(0, _v18.jsx)(_v88.BokehTooltip, {
            label: (0, _v125.inline)(() => _v17 ? null : _v111.rtmpTranslations.onlyUserWhoConnectedDestinationCanManage),
            placement: "top",
            children: (0, _v18.jsx)(_v122.BokehMenuItem, {
              icon: (0, _v18.jsx)(_v118.EditPencil, {}),
              isDisabled: _v13 && _v15?.isEnabled || !_v17,
              onClick: () => {
                _v9({
                  liveStreamDestination: "linkedin",
                  liveStreamDestinationAction: "customize"
                }), _v28();
              },
              children: (0, _v18.jsxs)(_v20.Box, {
                children: [(0, _v18.jsx)(_v86.Text, {
                  fontSize: "heading-xs",
                  variant: "body-xl",
                  children: _v111.rtmpTranslations.manageSettings
                }), (0, _v18.jsx)(_v86.Text, {
                  fontSize: "heading-xs",
                  variant: "body-xl",
                  color: "text-secondary",
                  children: _v111.rtmpTranslations.connectedBy + " " + _v15?.userDisplayName
                })]
              })
            })
          }), (0, _v18.jsx)(_v122.BokehMenuItem, {
            icon: (0, _v18.jsx)(_v119.TrashBin, {}),
            onClick: _v29,
            children: (0, _v18.jsx)(_v86.Text, {
              fontSize: "heading-xs",
              variant: "body-xl",
              children: _v111.rtmpTranslations.removeFromThisEvent
            })
          })]
        }),
        onClose: _v11,
        onClick: _v12
      })),
      _v32 = (0, _v125.inline)(() => _v15 ? _v17 && !_v18 ? _v30 : _v31 : _v20 ? (0, _v18.jsx)(_v79.Button, {
        isDisabled: _v19 || _v2,
        isLoading: _v14,
        variant: "secondary",
        size: "sm",
        onClick: () => {
          _v9({
            liveStreamDestination: "linkedin",
            liveStreamDestinationAction: "add"
          }), _v28();
        },
        children: _v111.rtmpTranslations.add
      }) : _v30);
    return (0, _v18.jsxs)(_v83.Flex, {
      id: _v0,
      className: _v1,
      direction: "column",
      width: "100%",
      children: [(0, _v18.jsxs)(_v83.Flex, {
        justifyContent: "space-between",
        alignItems: "center",
        children: [(0, _v18.jsxs)(_v83.Flex, {
          flexWrap: "nowrap",
          gap: (0, _v21.rem)(16),
          alignItems: "center",
          children: [(0, _v18.jsx)(_v158.Linkedin, {
            minWidth: (0, _v21.rem)(24),
            minHeight: (0, _v21.rem)(24)
          }), (0, _v18.jsx)(_v84.Header, {
            size: "xs",
            color: "text-primary",
            children: _v109.T_LINKEDIN
          })]
        }), _v14 ? (0, _v18.jsx)(_v115.Spinner, {
          size: "sm",
          color: "blue.500"
        }) : (0, _v18.jsx)(_v83.Flex, {
          marginLeft: "auto",
          gap: (0, _v21.rem)(16),
          alignItems: "center",
          children: _v32
        })]
      }), !_v18 && !_v17 && (0, _v18.jsx)(_v83.Flex, {
        width: "100%",
        paddingTop: (0, _v21.rem)(16),
        alignItems: "center",
        children: (0, _v18.jsx)(_v77.Alert, {
          size: "sm",
          children: (0, _v18.jsx)(_v78.AlertDescription, {
            marginRight: "-8",
            children: _v111.rtmpTranslations.destinationBrokenNotice
          })
        })
      }), (0, _v18.jsxs)(_v83.Flex, {
        direction: "column",
        children: [_v15 ? (0, _v18.jsx)(_v83.Flex, {
          direction: "column",
          opacity: _v18 ? 1 : .5,
          cursor: _v18 ? "default" : "not-allowed",
          children: (0, _v18.jsxs)(_v83.Flex, {
            flexWrap: "nowrap",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: (0, _v21.rem)(20),
            children: [(0, _v18.jsxs)(_v83.Flex, {
              direction: "column",
              marginLeft: (0, _v21.rem)(40),
              children: [(0, _v18.jsx)(_v84.Header, {
                size: "xs",
                marginBottom: (0, _v21.rem)(4),
                children: _v15.displayName
              }), (0, _v18.jsxs)(_v86.Text, {
                variant: "body-xl",
                display: "flex",
                flexWrap: "nowrap",
                href: _v24,
                fontSize: "text-sm",
                color: "text-secondary",
                target: "_blank",
                as: "a",
                _hover: _v110.HOVER_UNDERLINE_LINK_STYLE,
                children: [_v15.type === _v42.PROFILE ? _v109.T_PROFILE_PAGE : _v109.T_COMPANY_PAGE, (0, _v18.jsx)(_v87.PopOut, {
                  marginLeft: (0, _v21.rem)(4),
                  width: (0, _v21.rem)(16),
                  height: (0, _v21.rem)(16)
                })]
              }), _v15.scheduledAt ? (0, _v18.jsx)(_v114.Paragraph, {
                size: "md",
                color: "test-secondary",
                marginBottom: 0,
                children: (0, _v109.T_LINKEDIN_EXISTING_EVENT_DATE)(_v23)
              }) : null]
            }), (0, _v18.jsx)(_v88.BokehTooltip, {
              label: _v26,
              maxWidth: (0, _v21.rem)(320),
              placement: "top",
              children: (0, _v18.jsx)(_v83.Flex, {
                children: (0, _v18.jsx)(_v116.Switch, {
                  size: "sm",
                  isChecked: _v15.isEnabled,
                  isDisabled: _v21 || _v2 || _v8 || !_v18,
                  onChange: _v27
                })
              })
            })]
          })
        }) : null, _v20 && !_v15 ? (0, _v18.jsx)(_v114.Paragraph, {
          size: "md",
          color: "text-secondary",
          marginLeft: (0, _v21.rem)(40),
          children: _v109.T_NO_PAGES_ADDED
        }) : null, _v3.error ? (0, _v18.jsx)(_v77.Alert, {
          status: "error",
          marginTop: (0, _v21.rem)(16),
          children: (0, _v18.jsx)(_v78.AlertDescription, {
            margin: 0,
            children: String(_v3.error)
          })
        }) : null]
      })]
    });
  }], 0);
  var _v159 = _v0.i(0),
    _v160 = _v0.i(0),
    _v161 = _v0.i(0),
    _v162 = _v0.i(0);
  let _v163 = (0, _v160.default)(_v162.VimeoLogo).withConfig({
    displayName: "styles__StyledOttIcon",
    componentId: "sc-59d6b62b-0"
  })`
  width: ${(0, _v21.rem)(56)};
  margin-bottom: ${(0, _v21.rem)(5)};
  & > * {
    fill: ${_v12 = _v161.white, _v13 = (0, _v161.slate)(800), ({
    theme: _v0
  }) => _v0?.name === "dark" ? _v12 : _v13};
  }
`;
  _v0.s(["StyledOttIcon", 0, _v163], 0);
  var _v164 = _v0.i(0);
  function _v165({
    className: _v0 = (0, _v24.createLiveDomName)("ott-channel"),
    destination: _v1,
    isDisabled: _v2,
    destinationsContext: {
      destinationsActions: _v3
    } = (0, _v26.useManager)(_v73)
  }) {
    let {
        isOpen: _v4,
        onClose: _v5,
        onToggle: _v6
      } = (0, _v117.useDisclosure)(),
      _v7 = (0, _v19.useCallback)(() => {
        (0, _v164.openNewFocusedTab)(_v148.vimeoConfig.PATH.VIMEO_OTT_CHANNEL_VIEW_URL(_v1.ottChannelSubdomain));
      }, [_v1.ottChannelSubdomain]),
      _v8 = (0, _v19.useCallback)(() => {
        (0, _v164.openNewFocusedTab)(_v148.vimeoConfig.PATH.VIMEO_OTT_CHANNEL_MANAGE_URL(_v1.ottChannelSubdomain, _v1.ottEventId));
      }, [_v1.ottChannelSubdomain, _v1.ottEventId]),
      _v9 = (0, _v19.useCallback)(() => {
        _v107(), _v3.removeOttDestination(_v1);
      }, [_v1, _v3]);
    return (0, _v18.jsxs)(_v83.Flex, {
      className: _v0,
      width: "100%",
      justifyContent: "space-between",
      children: [(0, _v18.jsx)(_v84.Header, {
        size: "xs",
        margin: 0,
        children: _v1.ottChannelName
      }), (0, _v18.jsx)(_v121.BokehMenu, {
        isOpen: _v4,
        isDisabled: _v2,
        menuList: (0, _v18.jsxs)(_v18.Fragment, {
          children: [(0, _v18.jsx)(_v122.BokehMenuItem, {
            onClick: _v7,
            children: _v111.rtmpTranslations.channel
          }), (0, _v18.jsx)(_v122.BokehMenuItem, {
            onClick: _v8,
            children: _v111.rtmpTranslations.ottSettings
          }), (0, _v18.jsx)(_v122.BokehMenuItem, {
            onClick: _v9,
            children: _v111.rtmpTranslations.remove
          })]
        }),
        onClose: _v5,
        onClick: _v6
      })]
    });
  }
  _v0.s(["OttDestination", 0, function ({
    id: _v0 = (0, _v124.createDomName)("ott-destination"),
    className: _v1 = (0, _v124.createDomName)("ott-destination"),
    isDisabled: _v2 = !1,
    context: {
      liveComposerStatusGetters: _v3
    } = (0, _v26.useManager)(_v90.ComposerSessionStatusManager),
    destinationsContext: {
      destinations: {
        ott: _v4
      },
      connections: {
        ott: _v5
      },
      destinationsActions: _v6,
      activeModal: _v7
    } = (0, _v26.useManager)(_v73)
  }) {
    let {
        trackLiveStreamDestinationActionClicked: _v8
      } = (0, _v126.useLiveStreamBroadcasterTracking)(),
      {
        isOpen: _v9,
        onClose: _v10,
        onToggle: _v11
      } = (0, _v117.useDisclosure)(),
      _v12 = _v4.isLoading || _v5.isLoading,
      _v13 = (0, _v159.useSessionOwnerId)(),
      _v14 = (0, _v127.useViewer)(),
      _v15 = _v3.isStreaming(),
      _v16 = (0, _v123.useIsLiveDemoSubscription)(),
      _v17 = _v13 === _v14?.user?.id,
      _v18 = (0, _v19.useCallback)(() => {
        _v107(), _v4.value?.forEach(_v0 => {
          _v6.removeOttDestination(_v0);
        });
      }, [_v6, _v4]),
      _v19 = (0, _v125.inline)(() => _v5.value?.isConnected ? _v4.value?.length ? (0, _v18.jsx)(_v18.Fragment, {
        children: (0, _v18.jsx)(_v121.BokehMenu, {
          isDisabled: _v15 || _v2,
          isOpen: _v9,
          menuList: (0, _v18.jsxs)(_v18.Fragment, {
            children: [(0, _v18.jsx)(_v122.BokehMenuItem, {
              icon: (0, _v18.jsx)(_v118.EditPencil, {}),
              onClick: () => {
                _v8({
                  liveStreamDestination: "vimeo_ott",
                  liveStreamDestinationAction: "customize"
                }), _v6.openActiveModal(_v51.OTT_SETTINGS);
              },
              children: _v111.rtmpTranslations.manageSettings
            }), (0, _v18.jsx)(_v122.BokehMenuItem, {
              icon: (0, _v18.jsx)(_v119.TrashBin, {}),
              onClick: _v18,
              children: _v111.rtmpTranslations.remove
            })]
          }),
          onClose: _v10,
          onClick: _v11
        })
      }) : (0, _v18.jsx)(_v79.Button, {
        isDisabled: _v16 || _v2,
        variant: "secondary",
        size: "sm",
        onClick: () => {
          _v8({
            liveStreamDestination: "vimeo_ott",
            liveStreamDestinationAction: "add"
          }), _v6.openActiveModal(_v51.OTT_SETTINGS);
        },
        children: _v111.rtmpTranslations.add
      }) : (0, _v18.jsx)(_v88.BokehTooltip, {
        placement: "left",
        label: _v17 ? void 0 : _v111.rtmpTranslations.onlyTeamOwnerCanConnectDestinations,
        children: (0, _v18.jsx)(_v83.Flex, {
          cursor: !_v17 || _v16 || _v2 ? "not-allowed" : "auto",
          children: (0, _v18.jsx)(_v79.Button, {
            isDisabled: !_v17 || _v16 || _v2,
            variant: "secondary",
            size: "sm",
            onClick: () => {
              _v97(), _v8({
                liveStreamDestination: "vimeo_ott",
                liveStreamDestinationAction: "connect"
              }), window.open(_v148.vimeoConfig.PATH.CONNECT_OTT_DESTINATION_URL, "_blank");
            },
            children: _v111.rtmpTranslations.connect
          })
        })
      }));
    return (0, _v18.jsxs)(_v83.Flex, {
      id: _v0,
      className: _v1,
      direction: "column",
      width: "100%",
      children: [(0, _v18.jsxs)(_v83.Flex, {
        width: "100%",
        justify: "space-between",
        alignItems: "center",
        children: [(0, _v18.jsxs)(_v83.Flex, {
          flexWrap: "nowrap",
          gap: (0, _v21.rem)(8),
          alignItems: "center",
          children: [(0, _v18.jsx)(_v163, {}), (0, _v18.jsx)(_v84.Header, {
            size: "xs",
            color: "text-primary",
            children: _v111.rtmpTranslations.ott
          })]
        }), _v12 && _v7 !== _v51.OTT_SETTINGS ? (0, _v18.jsx)(_v115.Spinner, {
          id: (0, _v124.createDomName)(_v0, "controls-loader"),
          className: (0, _v124.createDomName)(_v1, "controls-loader"),
          size: "sm"
        }) : (0, _v18.jsx)("div", {
          id: (0, _v124.createDomName)(_v0, "controls"),
          className: (0, _v124.createDomName)(_v1, "controls"),
          children: _v19
        })]
      }), _v5.value?.isConnected ? (0, _v18.jsx)(_v83.Flex, {
        id: (0, _v124.createDomName)(_v0, "channels"),
        className: (0, _v124.createDomName)(_v1, "channels"),
        width: "100%",
        paddingLeft: (0, _v21.rem)(32),
        marginTop: (0, _v21.rem)(12),
        children: (0, _v18.jsx)(_v83.Flex, {
          id: (0, _v124.createDomName)(_v0, "channels-list"),
          className: (0, _v124.createDomName)(_v1, "channels-list"),
          direction: "column",
          width: "100%",
          gap: (0, _v21.rem)(12),
          children: _v4.value?.map(_v0 => (0, _v18.jsx)(_v165, {
            className: (0, _v124.createDomName)(_v1, "channel"),
            isDisabled: _v16 || _v2,
            destination: _v0
          }, _v0.ottEventId))
        })
      }) : null]
    });
  }], 0);
  var _v166 = _v0.i(0);
  let _v167 = _v0 => (0, _v18.jsx)(_v166.Icon, {
      viewBox: "0 0 24 24",
      ..._v0,
      fill: "none",
      children: (0, _v18.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M16.743 3.831a1 1 0 0 1-.074 1.412l-5 4.5a1 1 0 1 1-1.338-1.486l5-4.5a1 1 0 0 1 1.412.074ZM2 12a1 1 0 0 1 1-1h5a1 1 0 0 1 .684.27l8 7.5a1 1 0 1 1-1.368 1.46L7.605 13H3a1 1 0 0 1-1-1Zm11 0a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2h-7a1 1 0 0 1-1-1Z",
        fill: "currentColor"
      })
    }),
    _v168 = _v0 => (0, _v18.jsxs)(_v166.Icon, {
      viewBox: "0 0 24 24",
      ..._v0,
      fill: "none",
      children: [(0, _v18.jsxs)("g", {
        clipPath: "url(#a)",
        children: [(0, _v18.jsx)("path", {
          d: "M8.667 11.998a3.333 3.333 0 1 1 6.667 0 3.333 3.333 0 0 1-6.667 0Zm-1.802 0a5.135 5.135 0 1 0 10.268 0 5.135 5.135 0 0 0-10.268 0m9.273-5.338a1.2 1.2 0 1 0 2.398.001 1.2 1.2 0 0 0-2.398 0M7.961 20.137a5.525 5.525 0 0 1-1.857-.344 3.108 3.108 0 0 1-1.15-.748 3.085 3.085 0 0 1-.748-1.149 5.522 5.522 0 0 1-.345-1.857c-.049-1.054-.059-1.37-.059-4.041 0-2.67.01-2.987.059-4.041A5.563 5.563 0 0 1 4.205 6.1c.16-.435.416-.828.748-1.15a3.082 3.082 0 0 1 1.15-.749 5.522 5.522 0 0 1 1.858-.344c1.054-.048 1.37-.059 4.04-.059 2.668 0 2.986.01 4.04.06a5.565 5.565 0 0 1 1.858.343c.434.16.827.416 1.15.748.332.323.588.716.748 1.15.22.595.337 1.223.344 1.857.049 1.055.059 1.371.059 4.042 0 2.67-.01 2.986-.059 4.04a5.55 5.55 0 0 1-.344 1.858 3.312 3.312 0 0 1-1.898 1.897 5.52 5.52 0 0 1-1.857.344c-1.054.049-1.371.059-4.042.059-2.67 0-2.986-.01-4.039-.059ZM7.877 2.06c-.83.017-1.65.174-2.427.465a4.905 4.905 0 0 0-1.772 1.153c-.509.5-.902 1.104-1.153 1.771a7.334 7.334 0 0 0-.464 2.428C2.01 8.942 2 9.283 2 11.998c0 2.716.011 3.057.06 4.123.017.83.174 1.65.465 2.428.25.667.644 1.272 1.154 1.771.5.508 1.104.902 1.77 1.154a7.337 7.337 0 0 0 2.428.464c1.067.049 1.407.06 4.123.06s3.057-.01 4.123-.06a7.335 7.335 0 0 0 2.427-.464 5.11 5.11 0 0 0 2.926-2.925 7.312 7.312 0 0 0 .464-2.428C21.99 15.054 22 14.714 22 12c0-2.716-.011-3.057-.059-4.123a7.334 7.334 0 0 0-.464-2.427 4.918 4.918 0 0 0-1.154-1.772 4.894 4.894 0 0 0-1.77-1.154 7.323 7.323 0 0 0-2.428-.464C15.058 2.011 14.717 2 12 2c-2.716 0-3.057.01-4.123.06",
          fill: "url(#b)"
        }), (0, _v18.jsx)("path", {
          d: "M8.667 11.998a3.333 3.333 0 1 1 6.667 0 3.333 3.333 0 0 1-6.667 0Zm-1.802 0a5.135 5.135 0 1 0 10.268 0 5.135 5.135 0 0 0-10.268 0m9.273-5.338a1.2 1.2 0 1 0 2.398.001 1.2 1.2 0 0 0-2.398 0M7.961 20.137a5.525 5.525 0 0 1-1.857-.344 3.108 3.108 0 0 1-1.15-.748 3.085 3.085 0 0 1-.748-1.149 5.522 5.522 0 0 1-.345-1.857c-.049-1.054-.059-1.37-.059-4.041 0-2.67.01-2.987.059-4.041A5.563 5.563 0 0 1 4.205 6.1c.16-.435.416-.828.748-1.15a3.082 3.082 0 0 1 1.15-.749 5.522 5.522 0 0 1 1.858-.344c1.054-.048 1.37-.059 4.04-.059 2.668 0 2.986.01 4.04.06a5.565 5.565 0 0 1 1.858.343c.434.16.827.416 1.15.748.332.323.588.716.748 1.15.22.595.337 1.223.344 1.857.049 1.055.059 1.371.059 4.042 0 2.67-.01 2.986-.059 4.04a5.55 5.55 0 0 1-.344 1.858 3.312 3.312 0 0 1-1.898 1.897 5.52 5.52 0 0 1-1.857.344c-1.054.049-1.371.059-4.042.059-2.67 0-2.986-.01-4.039-.059ZM7.877 2.06c-.83.017-1.65.174-2.427.465a4.905 4.905 0 0 0-1.772 1.153c-.509.5-.902 1.104-1.153 1.771a7.334 7.334 0 0 0-.464 2.428C2.01 8.942 2 9.283 2 11.998c0 2.716.011 3.057.06 4.123.017.83.174 1.65.465 2.428.25.667.644 1.272 1.154 1.771.5.508 1.104.902 1.77 1.154a7.337 7.337 0 0 0 2.428.464c1.067.049 1.407.06 4.123.06s3.057-.01 4.123-.06a7.335 7.335 0 0 0 2.427-.464 5.11 5.11 0 0 0 2.926-2.925 7.312 7.312 0 0 0 .464-2.428C21.99 15.054 22 14.714 22 12c0-2.716-.011-3.057-.059-4.123a7.334 7.334 0 0 0-.464-2.427 4.918 4.918 0 0 0-1.154-1.772 4.894 4.894 0 0 0-1.77-1.154 7.323 7.323 0 0 0-2.428-.464C15.058 2.011 14.717 2 12 2c-2.716 0-3.057.01-4.123.06",
          fill: "url(#c)"
        }), (0, _v18.jsx)("path", {
          d: "M8.667 11.998a3.333 3.333 0 1 1 6.667 0 3.333 3.333 0 0 1-6.667 0Zm-1.802 0a5.135 5.135 0 1 0 10.27 0 5.135 5.135 0 0 0-10.27 0Zm9.273-5.338a1.2 1.2 0 1 0 2.4.001 1.2 1.2 0 0 0-2.4 0ZM7.96 20.138a5.525 5.525 0 0 1-1.857-.344 3.108 3.108 0 0 1-1.15-.748 3.085 3.085 0 0 1-.748-1.149 5.522 5.522 0 0 1-.345-1.857c-.049-1.054-.059-1.37-.059-4.041 0-2.67.01-2.987.059-4.041A5.563 5.563 0 0 1 4.205 6.1c.16-.435.416-.828.748-1.15a3.082 3.082 0 0 1 1.15-.749 5.522 5.522 0 0 1 1.858-.344c1.054-.048 1.37-.059 4.04-.059 2.668 0 2.986.01 4.04.06a5.565 5.565 0 0 1 1.858.343c.434.16.827.416 1.15.748.332.323.588.716.748 1.15.22.595.337 1.223.344 1.857.049 1.055.059 1.371.059 4.042 0 2.67-.01 2.986-.059 4.04a5.55 5.55 0 0 1-.344 1.858 3.312 3.312 0 0 1-1.898 1.897 5.52 5.52 0 0 1-1.857.344c-1.054.049-1.371.059-4.042.059-2.67 0-2.986-.01-4.039-.059ZM7.877 2.06c-.83.017-1.65.174-2.427.465a4.905 4.905 0 0 0-1.772 1.153c-.509.5-.902 1.104-1.153 1.771a7.334 7.334 0 0 0-.464 2.428C2.01 8.942 2 9.283 2 11.998c0 2.716.011 3.057.06 4.123.017.83.174 1.65.465 2.428.25.667.644 1.272 1.154 1.771.5.508 1.104.902 1.77 1.154a7.337 7.337 0 0 0 2.428.464c1.067.049 1.407.06 4.123.06s3.057-.01 4.123-.06a7.335 7.335 0 0 0 2.427-.464 5.11 5.11 0 0 0 2.926-2.925 7.312 7.312 0 0 0 .464-2.428C21.99 15.054 22 14.714 22 12c0-2.716-.011-3.057-.059-4.123a7.334 7.334 0 0 0-.464-2.427 4.918 4.918 0 0 0-1.154-1.772 4.894 4.894 0 0 0-1.77-1.154 7.323 7.323 0 0 0-2.428-.464C15.058 2.011 14.717 2 12 2c-2.716 0-3.056.01-4.123.06Z",
          fill: "url(#d)"
        })]
      }), (0, _v18.jsxs)("defs", {
        children: [(0, _v18.jsxs)("radialGradient", {
          id: "b",
          cx: "0",
          cy: "0",
          r: "1",
          gradientUnits: "userSpaceOnUse",
          gradientTransform: "matrix(12.35344 -16.17646 16.17662 12.35356 8.667 21.704)",
          children: [(0, _v18.jsx)("stop", {
            stopColor: "#F8D348"
          }), (0, _v18.jsx)("stop", {
            offset: ".29",
            stopColor: "#FA8F21"
          }), (0, _v18.jsx)("stop", {
            offset: ".522",
            stopColor: "#EB4756"
          }), (0, _v18.jsx)("stop", {
            offset: ".772",
            stopColor: "#EA34B1"
          })]
        }), (0, _v18.jsxs)("radialGradient", {
          id: "c",
          cx: "0",
          cy: "0",
          r: "1",
          gradientUnits: "userSpaceOnUse",
          gradientTransform: "matrix(20.5769 0 0 20.5761 14.13 22.989)",
          children: [(0, _v18.jsx)("stop", {
            offset: ".64",
            stopColor: "#8C3AAA",
            stopOpacity: "0"
          }), (0, _v18.jsx)("stop", {
            offset: "1",
            stopColor: "#8C3AAA"
          })]
        }), (0, _v18.jsxs)("linearGradient", {
          id: "d",
          x1: "3.667",
          y1: "1.999",
          x2: "8.765",
          y2: "8.567",
          gradientUnits: "userSpaceOnUse",
          children: [(0, _v18.jsx)("stop", {
            offset: ".12",
            stopColor: "#6620F5"
          }), (0, _v18.jsx)("stop", {
            offset: ".935",
            stopColor: "#8C3AAA",
            stopOpacity: "0"
          })]
        }), (0, _v18.jsx)("clipPath", {
          id: "a",
          children: (0, _v18.jsx)("path", {
            fill: "#fff",
            transform: "translate(2 1.999)",
            d: "M0 0h20v20H0z"
          })
        })]
      })]
    });
  var _v169 = _v0.i(0),
    _v170 = _v0.i(0),
    _v171 = _v0.i(0);
  function _v172({
    isStreaming: _v0,
    isDisabled: _v1,
    isRestricted: _v2,
    destination: _v3,
    onEdit: _v4,
    onDelete: _v5,
    onToggle: _v6
  }) {
    let {
        isOpen: _v7,
        onClose: _v8,
        onToggle: _v9
      } = (0, _v117.useDisclosure)(),
      _v10 = (0, _v19.useCallback)(() => {
        _v8(), _v4(_v3);
      }, [_v3, _v4, _v8]),
      _v11 = (0, _v19.useCallback)(() => {
        _v8(), _v5(_v3);
      }, [_v3, _v5, _v8]),
      _v12 = (0, _v19.useCallback)(() => {
        _v6(_v3);
      }, [_v3, _v6]);
    return (0, _v18.jsxs)(_v83.Flex, {
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      paddingLeft: (0, _v21.rem)(32),
      children: [(0, _v18.jsxs)(_v83.Flex, {
        alignItems: "center",
        gap: (0, _v21.rem)(4),
        children: [(0, _v18.jsx)(_v84.Header, {
          size: "xs",
          color: "text-primary",
          children: _v3.displayName
        }), _v3.state === _v47.HAS_ERROR ? (0, _v18.jsx)(_v88.BokehTooltip, {
          label: _v3.stateMessage,
          children: (0, _v18.jsx)(_v83.Flex, {
            children: (0, _v18.jsx)(_v171.InfoCircle, {
              width: (0, _v21.rem)(16),
              height: (0, _v21.rem)(16),
              color: "red.500"
            })
          })
        }) : null]
      }), (0, _v18.jsxs)(_v83.Flex, {
        alignItems: "center",
        justifyContent: "flex-start",
        gap: (0, _v21.rem)(4),
        children: [_v0 && _v3.isEnabled ? null : (0, _v18.jsx)(_v121.BokehMenu, {
          isOpen: _v7,
          isDisabled: _v2,
          menuList: (0, _v18.jsxs)(_v18.Fragment, {
            children: [(0, _v18.jsx)(_v122.BokehMenuItem, {
              icon: (0, _v18.jsx)(_v118.EditPencil, {}),
              onClick: _v10,
              children: _v111.rtmpTranslations.manageSettings
            }), (0, _v18.jsx)(_v122.BokehMenuItem, {
              icon: (0, _v18.jsx)(_v119.TrashBin, {}),
              onClick: _v11,
              children: _v111.rtmpTranslations.remove
            })]
          }),
          onClose: _v8,
          onClick: _v9
        }), (0, _v18.jsx)(_v116.Switch, {
          size: "sm",
          isDisabled: _v1 || _v2,
          isChecked: _v3.isEnabled,
          onChange: _v12
        })]
      })]
    });
  }
  function _v173(_v0) {
    return _v0 === _v43.INSTAGRAM ? "instagram" : _v0 === _v43.TIK_TOK ? "tiktok" : _v0 === _v43.TWITTER_X ? "x" : "rtmp";
  }
  _v0.s(["CustomRtmpDestinations", 0, function ({
    id: _v0 = (0, _v24.createLiveDomName)("custom-rtmp-destination"),
    className: _v1 = (0, _v24.createLiveDomName)("custom-rtmp-destination"),
    isDisabled: _v2 = !1,
    isRestricted: _v3 = !1,
    type: _v4,
    destinationsContext: {
      destinationsActions: _v5,
      destinations: {
        customRtmp: _v6
      }
    } = (0, _v26.useManager)(_v73),
    liveComposerContext: {
      liveComposerStatuses: _v7
    } = (0, _v26.useManager)(_v90.ComposerSessionStatusManager)
  }) {
    let {
        trackLiveStreamDestinationActionClicked: _v8
      } = (0, _v126.useLiveStreamBroadcasterTracking)(),
      _v9 = (0, _v123.useIsLiveDemoSubscription)(),
      _v10 = (0, _v19.useCallback)(() => {
        _v103(_v4), _v8({
          liveStreamDestination: _v173(_v4),
          liveStreamDestinationAction: "add"
        }), _v5.openActiveModal(_v51.CUSTOM_RTMP_SETTINGS, {
          type: _v4
        });
      }, [_v5, _v8, _v4]),
      _v11 = (0, _v19.useCallback)(_v0 => {
        _v8({
          liveStreamDestination: _v173(_v4),
          liveStreamDestinationAction: "customize"
        }), _v5.openActiveModal(_v51.CUSTOM_RTMP_SETTINGS, {
          rtmpDestinationId: _v0.id,
          type: _v4
        });
      }, [_v5, _v8, _v4]),
      _v12 = (0, _v19.useCallback)(_v0 => {
        _v108(_v0.type), _v5.removeSocialDestination(_v0);
      }, [_v5]),
      _v13 = (0, _v19.useCallback)(_v0 => {
        _v5.toggleSocialDestination(_v0);
      }, [_v5]),
      _v14 = (0, _v19.useMemo)(() => {
        let _v0 = _v6 && _v6.value ? _v6.value.filter(_v0 => _v0.type === _v4) : [];
        return _v0.length ? (0, _v18.jsx)(_v83.Flex, {
          direction: "column",
          width: "100%",
          gap: (0, _v21.rem)(8),
          marginTop: (0, _v21.rem)(12),
          children: _v0.map(_v0 => (0, _v18.jsx)(_v172, {
            isStreaming: _v7.isSessionLive,
            isDisabled: _v9 || _v2,
            isRestricted: _v3,
            destination: _v0,
            onEdit: _v11,
            onDelete: _v12,
            onToggle: _v13
          }, `destination-${_v0.id}`))
        }) : null;
      }, [_v6, _v9, _v2, _v3, _v7.isSessionLive, _v12, _v11, _v13, _v4]);
    return (0, _v18.jsxs)(_v83.Flex, {
      id: _v0,
      className: _v1,
      direction: "column",
      width: "100%",
      children: [(0, _v18.jsxs)(_v83.Flex, {
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        children: [(0, _v18.jsxs)(_v83.Flex, {
          alignItems: "center",
          gap: (0, _v21.rem)(8),
          sx: {
            svg: {
              width: (0, _v21.rem)(24),
              height: (0, _v21.rem)(24)
            }
          },
          children: [function (_v0) {
            switch (_v0) {
              case _v43.INSTAGRAM:
                return (0, _v18.jsx)(_v168, {});
              case _v43.TWITTER_X:
                return (0, _v18.jsx)(_v170.X, {
                  sx: {
                    "& path": {
                      fill: "text-primary"
                    }
                  }
                });
              case _v43.TIK_TOK:
                return (0, _v18.jsx)(_v169.Tiktok, {});
              default:
                return (0, _v18.jsx)(_v167, {});
            }
          }(_v4), (0, _v18.jsx)(_v84.Header, {
            size: "xs",
            color: "text-primary",
            margin: 0,
            children: function (_v0) {
              switch (_v0) {
                case _v43.INSTAGRAM:
                  return _v111.rtmpTranslations.instagram;
                case _v43.TIK_TOK:
                  return _v111.rtmpTranslations.tikTok;
                case _v43.TWITTER_X:
                  return _v111.rtmpTranslations.twitterX;
                default:
                  return _v111.rtmpTranslations.rtmp;
              }
            }(_v4)
          })]
        }), (0, _v18.jsx)(_v83.Flex, {
          cursor: _v9 ? "not-allowed" : "auto",
          children: (0, _v18.jsx)(_v79.Button, {
            size: "sm",
            variant: "secondary",
            isDisabled: _v9 || _v2 || _v3,
            onClick: _v10,
            children: _v111.rtmpTranslations.add
          })
        })]
      }), _v14]
    });
  }], 0);
  var _v174 = _v0.i(0),
    _v175 = _v0.i(0),
    _v176 = _v0.i(0),
    _v177 = _v0.i(0),
    _v178 = _v0.i(0),
    _v179 = _v0.i(0),
    _v180 = _v0.i(0),
    _v181 = _v0.i(0);
  _v0.s(["ShowcaseDestination", 0, function ({
    id: _v0 = (0, _v24.createLiveDomName)("showcase-destination"),
    className: _v1 = (0, _v24.createLiveDomName)("showcase-destination"),
    eventSettingsContext: {
      settings: {
        value: _v2
      }
    } = (0, _v26.useManager)(_v179.EventSettingsManager)
  }) {
    let {
        isOpen: _v3,
        onClose: _v4,
        onToggle: _v5
      } = (0, _v117.useDisclosure)(),
      _v6 = (0, _v177.useToast)(),
      _v7 = (0, _v19.useCallback)(() => {
        _v2?.album?.id && (0, _v164.openNewFocusedTab)(_v148.vimeoConfig.PATH.SHOWCASE_MANAGE_URL(_v2?.album?.id));
      }, [_v2?.album?.id]),
      _v8 = (0, _v19.useCallback)(() => {
        _v2?.album?.id && ((0, _v180.copyTextToClipboard)(_v148.vimeoConfig.PATH.SHOWCASE_VIEW_URL(_v2?.album?.id)), _v6({
          title: _v109.T_LINK_COPIED
        }));
      }, [_v2?.album?.id, _v6]),
      _v9 = (0, _v19.useCallback)(() => {
        _v2?.album?.embedCode && ((0, _v180.copyTextToClipboard)(_v2.album.embedCode), _v6({
          title: _v109.T_LINK_COPIED
        }));
      }, [_v2?.album?.embedCode, _v6]);
    return _v2 && _v2.fromShowcase && _v2.album ? (0, _v18.jsxs)(_v83.Flex, {
      id: _v0,
      className: _v1,
      direction: "column",
      children: [(0, _v18.jsxs)(_v83.Flex, {
        id: (0, _v24.createLiveDomName)(_v0, "body"),
        grow: 1,
        alignItems: "flex-start",
        justifyContent: "space-between",
        children: [(0, _v18.jsxs)(_v83.Flex, {
          gap: (0, _v21.rem)(8),
          alignItems: "center",
          children: [(0, _v18.jsx)(_v178.VimeoV, {
            marginRight: (0, _v21.rem)(8)
          }), (0, _v18.jsx)(_v84.Header, {
            size: "sm",
            children: _v2.album.title
          })]
        }), (0, _v18.jsx)(_v83.Flex, {
          id: (0, _v24.createLiveDomName)(_v0, "controls"),
          position: "relative",
          children: (0, _v18.jsxs)(_v174.Menu, {
            isOpen: _v3,
            gutter: 16,
            placement: "bottom-end",
            onClose: _v4,
            children: [(0, _v18.jsx)(_v175.MenuButton, {
              variant: "secondary",
              size: "sm",
              as: _v79.Button,
              onClick: _v5,
              children: _v181.translations.share
            }), (0, _v18.jsxs)(_v176.MenuList, {
              minWidth: (0, _v21.rem)(142),
              top: (0, _v21.rem)(36),
              children: [(0, _v18.jsx)(_v122.BokehMenuItem, {
                onClick: _v8,
                children: _v181.translations.copyShowcaseLink
              }), (0, _v18.jsx)(_v122.BokehMenuItem, {
                onClick: _v9,
                children: _v181.translations.copyShowcaseEmbed
              })]
            })]
          })
        })]
      }), (0, _v18.jsxs)(_v83.Flex, {
        id: (0, _v24.createLiveDomName)(_v0, "description"),
        paddingLeft: (0, _v21.rem)(40),
        children: [(0, _v18.jsx)(_v114.Paragraph, {
          size: "md",
          color: "text-secondary",
          cursor: "pointer",
          onClick: _v7,
          children: _v181.translations.showcase
        }), (0, _v18.jsx)(_v87.PopOut, {
          color: "text-secondary",
          width: (0, _v21.rem)(16),
          marginLeft: (0, _v21.rem)(4),
          cursor: "pointer",
          onClick: _v7
        })]
      })]
    }) : null;
  }], 0);
}