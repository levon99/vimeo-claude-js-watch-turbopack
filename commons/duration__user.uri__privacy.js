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
    _v9 = _v0.i(0);
  _v0.s(["default", 0, function (_v0, _v1) {
    return _v2.default.memo(function (_v0) {
      return (0, _v1.jsx)(_v7.CurrentPageContextProvider, {
        ..._v0,
        pageType: _v1,
        children: (0, _v1.jsx)(_v9.PreviewContextProvider, {
          ..._v0,
          pageType: _v1,
          children: (0, _v1.jsx)(_v8.FeatureFlowProvider, {
            ..._v0,
            pageType: _v1,
            children: (0, _v1.jsx)(_v6.default, {
              children: (0, _v1.jsx)(_v3.CallbackContextProvider, {
                onClickEndEvent: _v0.onClickEndEvent,
                onClickRegistration: _v0.onClickRegistration,
                onClose: _v0.onClose,
                onFormTabSwitched: _v0.onFormTabSwitched,
                onFormPresetChanged: _v0.onFormPresetChanged,
                onConnectProvidersClicked: _v0.onConnectProvidersClicked,
                onFormPlacementChanged: _v0.onFormPlacementChanged,
                onFormSettingToggled: _v0.onFormSettingToggled,
                onFormSectionSwitched: _v0.onFormSectionSwitched,
                onFormFieldAdded: _v0.onFormFieldAdded,
                onFormHiddenFieldAdded: _v0.onFormHiddenFieldAdded,
                onPrivacyPolicyChanged: _v0.onPrivacyPolicyChanged,
                onFormAppearanceChanged: _v0.onFormAppearanceChanged,
                onFormPreviewTypeChanged: _v0.onFormPreviewTypeChanged,
                onFormPreviewDeviceChanged: _v0.onFormPreviewDeviceChanged,
                onRegistrantsActionClicked: _v0.onRegistrantsActionClicked,
                children: (0, _v1.jsx)(_v4.UpsellContextProvider, {
                  children: (0, _v1.jsx)(_v5.RichTextContextProvider, {
                    children: (0, _v1.jsx)(_v0, {
                      ..._v0
                    })
                  })
                })
              })
            })
          })
        })
      });
    });
  }], 0);
  var _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0);
  let _v16 = ["uri", "duration", "user.uri", "privacy", "metadata.interactions.edit", "name", "pictures", "link", "isPlayable"],
    _v17 = ["uri", "schedule", "user.uri", "metadata.connections.liveVideo.status", "metadata.interactions.edit", "title", "streamPrivacy", "status", "emailQuota"],
    _v18 = ["uri", "user.uri", "name", "privacy", "metadata.interactions.edit", "pictures", "link", "metadata.connections.videos.total", "seoAllowIndexed"];
  var _v19 = _v0.i(0);
  let _v20 = _v0 => {
    let _v1 = _v0.split("/");
    return parseInt(_v1[_v1.length - 1]);
  };
  var _v21 = _v0.i(0),
    _v22 = _v11,
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0);
  _v0.s(["default", 0, function (_v0, _v1) {
    return _v2.default.memo(function (_v0) {
      let {
        type: _v1,
        entityId: _v2
      } = _v0;
      "events" === _v1 && (_v1 = _v11.ENTITY_TYPE.EVENT);
      let {
          useLeadCaptureCache: _v3 = !1,
          section: _v4,
          isRegistrationOn: _v5,
          hasUpsell: _v6,
          canCompleteEvent: _v7,
          eventSchedule: _v8
        } = _v0,
        _v9 = (0, _v19.useGlobalStore)((0, _v10.useShallow)(_v0 => _v0.leadCapture.uri)),
        _v10 = (0, _v19.useGlobalStore)((0, _v10.useShallow)(_v0 => _v0.entity.uri)),
        _v11 = (0, _v28.useSectionStore)((0, _v10.useShallow)(_v0 => _v0.setSelectedSection)),
        _v12 = (0, _v27.isDataLoaded)({
          leadCaptureUri: _v9,
          entityUri: _v10
        });
      ((_v0, _v1) => {
        let _v2 = (0, _v19.useGlobalStore)(_v0 => _v0.authRoomPassword),
          _v3 = (0, _v19.useGlobalStore)(_v0 => _v0.pageReferrer),
          _v4 = (0, _v19.useGlobalStore)(_v0 => _v0.refreshEntityDataCounter),
          _v5 = (0, _v19.useGlobalStore)(_v0 => _v0.setEntityState),
          _v6 = (0, _v19.useGlobalStore)(_v0 => _v0.setEntity),
          _v7 = (0, _v19.useGlobalStore)(_v0 => _v0.setEntityOwnerId),
          [_v8, {
            data: _v9,
            loading: _v10,
            error: _v11,
            called: _v12,
            callCount: _v13,
            lastCalled: _v14
          }] = (0, _v12.useGetVideoLazy)(),
          [_v15, {
            data: _v16,
            loading: _v17,
            error: _v18,
            called: _v19,
            callCount: _v20,
            lastCalled: _v21
          }] = (0, _v14.useGetLiveEventLazy)(),
          [_v22, {
            data: _v23,
            loading: _v24,
            error: _v25,
            called: _v26,
            callCount: _v27,
            lastCalled: _v28
          }] = (0, _v13.useGetAlbumLazy)(),
          _v29 = (0, _v2.useCallback)(() => {
            if (_v1) {
              let _v0 = (0, _v15.getEntityCookiePassword)(_v1, _v0) ?? _v2;
              switch (_v0) {
                case _v11.ENTITY_TYPE.EVENT:
                  _v15({
                    where: {
                      liveEventId: _v1
                    },
                    select: _v17,
                    query: {
                      ...(_v0 && {
                        password: _v0
                      }),
                      ...(_v3 && {
                        referrer: _v3
                      })
                    }
                  });
                  break;
                case _v11.ENTITY_TYPE.VIDEO:
                  _v8({
                    where: {
                      videoId: _v1
                    },
                    select: _v16
                  });
                  break;
                case _v11.ENTITY_TYPE.SHOWCASE:
                  _v22({
                    where: {
                      albumId: _v1
                    },
                    select: _v18
                  });
              }
            }
          }, [_v1, _v0, _v2, _v3, _v15, _v8, _v22]),
          _v30 = (0, _v2.useRef)(_v29);
        return _v30.current = _v29, (0, _v2.useEffect)(() => {
          _v30.current();
        }, [_v1, _v0, _v2, _v3, _v4, _v30]), (0, _v2.useEffect)(() => {
          _v0 === _v11.ENTITY_TYPE.EVENT && _v5({
            loading: _v17,
            error: _v18,
            called: _v19,
            callCount: _v20,
            lastCalled: _v21
          });
        }, [_v0, _v17, _v18, _v19, _v20, _v21, _v5]), (0, _v2.useEffect)(() => {
          _v0 === _v11.ENTITY_TYPE.VIDEO && _v5({
            loading: _v10,
            error: _v11,
            called: _v12,
            callCount: _v13,
            lastCalled: _v14
          });
        }, [_v0, _v10, _v11, _v12, _v13, _v14, _v5]), (0, _v2.useEffect)(() => {
          _v0 === _v11.ENTITY_TYPE.SHOWCASE && _v5({
            loading: _v24,
            error: _v25,
            called: _v26,
            callCount: _v27,
            lastCalled: _v28
          });
        }, [_v0, _v24, _v25, _v26, _v27, _v28, _v5]), (0, _v2.useEffect)(() => {
          _v0 === _v11.ENTITY_TYPE.EVENT && _v16 && (_v6({
            ..._v16,
            privacy: _v16.streamPrivacy
          }), _v7(_v20(_v16.user.uri)));
        }, [_v0, _v16, _v6, _v7]), (0, _v2.useEffect)(() => {
          _v0 === _v11.ENTITY_TYPE.VIDEO && _v9 && (_v6({
            ..._v9,
            title: _v9.name
          }), _v7(_v20(_v9.user.uri)));
        }, [_v0, _v9, _v6, _v7]), (0, _v2.useEffect)(() => {
          _v0 === _v11.ENTITY_TYPE.SHOWCASE && _v23 && (_v6({
            ..._v23,
            title: _v23.name,
            numberOfVideos: _v23?.metadata?.connections?.videos?.total
          }), _v7(_v20(_v23.user.uri)));
        }, [_v0, _v23, _v6, _v7]);
      })(_v1, _v2), ((_v0, _v1, _v2) => {
        let _v3 = (0, _v19.useGlobalStore)(_v0 => _v0.setLeadCapture),
          _v4 = (0, _v19.useGlobalStore)(_v0 => _v0.setLeadCaptureState),
          _v5 = (0, _v19.useGlobalStore)(_v0 => _v0.setCalendarLinks),
          _v6 = (0, _v19.useGlobalStore)(_v0 => _v0.setParentPreset),
          _v7 = (0, _v19.useGlobalStore)(_v0 => _v0.setLanguages),
          _v8 = (0, _v19.useGlobalStore)(_v0 => _v0.setSelectedLanguage),
          _v9 = (0, _v19.useGlobalStore)(_v0 => _v0.authRoomPassword),
          _v10 = (0, _v19.useGlobalStore)(_v0 => _v0.pageReferrer),
          _v11 = `500,${window.innerWidth}`,
          {
            pageType: _v12,
            skip: _v13 = !1
          } = _v2 || {},
          [_v14, _v15] = (0, _v21.useGetLeadCaptureResourceIdFormLazy)(),
          [_v16, _v17] = (0, _v21.usePostLeadCaptureResourceIdForm)(),
          {
            initializeIdUsingCidAsKey: _v18
          } = (0, _v23.useCidToIdMapping)(),
          _v19 = (0, _v19.useGlobalStore)(_v0 => _v0.refreshLeadCaptureDataCounter);
        ((_v0 = _v22.ENTITY_TYPE.EVENT, _v1) => {
          let _v2 = (0, _v19.useGlobalStore)(_v0 => _v0.entity.schedule?.startTime),
            _v3 = (0, _v19.useGlobalStore)(_v0 => _v0.entity.schedule?.endTime),
            _v4 = (0, _v19.useGlobalStore)(_v0 => _v0.setCalendarLinks),
            _v5 = (0, _v19.useGlobalStore)(_v0 => _v0.authRoomPassword),
            _v6 = (0, _v19.useGlobalStore)(_v0 => _v0.pageReferrer),
            _v7 = (0, _v15.getCookie)(_v1),
            _v8 = (0, _v15.getEntityCookiePassword)(_v1, _v0) ?? _v5,
            {
              data: _v9,
              mutate: _v10
            } = (0, _v21.useGetLeadCaptureResourceIdForm)({
              where: {
                resourceId: _v1,
                resourceType: _v22.ENTITY_TO_PATH_MAP[_v0]
              },
              select: ["calendarLinks"],
              query: {
                ...(_v7 && {
                  leadId: _v7
                }),
                ...(_v8 && {
                  password: _v8
                }),
                ...(_v6 && {
                  referrer: _v6
                })
              }
            });
          (0, _v2.useEffect)(() => {
            _v10();
          }, [_v2, _v3]), (0, _v2.useEffect)(() => {
            _v9?.calendarLinks && _v4(_v9.calendarLinks);
          }, [_v4, _v9?.calendarLinks]);
        })(_v0, _v1), (0, _v2.useEffect)(() => {
          if (_v0 && !_v13) {
            let _v0 = (0, _v15.getCookie)(_v1),
              _v1 = (0, _v15.getEntityCookiePassword)(_v1, _v0) ?? _v9;
            _v14({
              where: {
                resourceId: _v1,
                resourceType: _v11.ENTITY_TO_PATH_MAP[_v0]
              },
              select: _v24.LEAD_CAPTURE_FORM_FIELDS,
              query: {
                sizes: _v11,
                ...(_v0 && {
                  leadId: _v0
                }),
                ...(_v1 && {
                  password: _v1
                }),
                ...(_v10 && {
                  referrer: _v10
                })
              }
            });
          }
        }, [_v1, _v0, _v13, _v19]), (0, _v2.useEffect)(() => {
          if (_v12 === _v25.PAGE_TYPES.ADMIN && _v0) {
            let {
                called: _v0,
                error: _v1,
                loading: _v2
              } = _v15,
              _v3 = !_v1 || _v1?.status !== 404,
              _v4 = _v17.called;
            !_v0 || _v2 || _v3 || _v4 || _v16({
              where: {
                resourceId: _v1,
                resourceType: _v11.ENTITY_TO_PATH_MAP[_v0]
              },
              select: _v24.LEAD_CAPTURE_FORM_FIELDS
            });
          }
        }, [_v1, _v0, _v15, _v12, _v16, _v17]), (0, _v2.useEffect)(() => {
          let _v0 = _v15 || _v17,
            _v1 = _v15.data || _v17.data;
          if ((_v15.called || _v17.called) && _v4(_v0), _v1) {
            let {
              calendarLinks: _v0,
              ..._v1
            } = _v1;
            _v6(_v1.parentForm);
            let _v2 = {
              ..._v1
            };
            _v0 && _v5(_v0), _v2.logo = (0, _v27.responseTransformer)("logo", _v2.logo), _v2.background = (0, _v27.responseTransformer)("background", _v2.background), _v2.customFields = (0, _v27.formatFields)(_v2.customFields), _v2.hiddenFields = (0, _v27.formatFields)(_v2.hiddenFields), _v3(_v2), _v7(_v2.enabledLocales ?? []), _v8(_v26.DEFAULT_LANGUAGE), _v18(_v25.RESPONSE_KEYS_MAP.customFields, _v2.customFields), _v18(_v25.RESPONSE_KEYS_MAP.hiddenFields, _v2.hiddenFields);
          }
        }, [_v17, _v15]);
      })(_v1, _v2, {
        pageType: _v1,
        skip: _v12 && _v3
      });
      let _v13 = (0, _v19.useGlobalStore)((0, _v10.useShallow)(_v0 => _v0.entityType)),
        _v14 = (0, _v19.useGlobalStore)((0, _v10.useShallow)(_v0 => _v0.entityId)),
        _v15 = (0, _v19.useGlobalStore)((0, _v10.useShallow)(_v0 => _v0.setEntityType)),
        _v16 = (0, _v19.useGlobalStore)((0, _v10.useShallow)(_v0 => _v0.setEntityId)),
        _v17 = (0, _v19.useGlobalStore)(_v0 => _v0.setSchedule),
        _v18 = (0, _v19.useGlobalStore)((0, _v10.useShallow)(_v0 => _v0.setIsRegistrationOn)),
        _v19 = (0, _v19.useGlobalStore)((0, _v10.useShallow)(_v0 => _v0.setHasUpsell)),
        _v20 = (0, _v19.useGlobalStore)((0, _v10.useShallow)(_v0 => _v0.setCanCompleteEvent));
      return (0, _v2.useEffect)(() => {
        _v13 !== _v1 && _v15(_v1), _v14 !== _v2 && _v16(_v2);
      }, [_v2, _v14, _v13, _v16, _v15, _v1]), (0, _v2.useEffect)(() => {
        "boolean" == typeof _v6 && _v19(_v6);
      }, [_v6, _v19]), (0, _v2.useEffect)(() => {
        "boolean" == typeof _v5 && _v18(_v5);
      }, [_v5, _v18]), (0, _v2.useEffect)(() => {
        "boolean" == typeof _v7 && _v20(_v7);
      }, [_v7, _v20]), (0, _v2.useEffect)(() => {
        _v8 && _v17(_v8);
      }, [_v8, _v17]), (0, _v2.useEffect)(() => {
        _v4 && _v11(_v4);
      }, [_v4, _v11]), (0, _v1.jsx)(_v0, {
        ..._v0
      });
    });
  }], 0);
  var _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0),
    _v32 = _v0.i(0);
  _v0.s(["default", 0, function (_v0, _v1) {
    return _v2.default.memo(function (_v0) {
      let {
          previewSize: _v1
        } = _v0,
        {
          useLeadCaptureCache: _v2
        } = _v0,
        _v3 = (0, _v19.useGlobalStore)((0, _v10.useShallow)(_v0 => _v0.entityState.error)),
        _v4 = !(0, _v19.useGlobalStore)((0, _v10.useShallow)(_v0 => _v0.entity?.metadata?.interactions?.edit)),
        _v5 = (0, _v19.useGlobalStore)((0, _v10.useShallow)(_v0 => _v0.leadCaptureState.loading)),
        _v6 = (0, _v19.useGlobalStore)((0, _v10.useShallow)(_v0 => _v0.leadCaptureState.callCount)),
        _v7 = (0, _v19.useGlobalStore)((0, _v10.useShallow)(_v0 => _v0.leadCapture.uri)),
        _v8 = (0, _v19.useGlobalStore)((0, _v10.useShallow)(_v0 => _v0.entity.uri));
      return !(0, _v27.isDataLoaded)({
        leadCaptureUri: _v7,
        entityUri: _v8
      }) || !_v2 && _v5 && _v6 <= 1 ? (0, _v1.jsx)(_v29.Center, {
        width: _v1?.width || "100%",
        height: _v1?.height || "100vh",
        children: (0, _v1.jsx)(_v30.Spinner, {})
      }) : _v3 ? (0, _v1.jsx)(_v32.ErrorPage, {
        error: new _v31.ResourceNotFoundError()
      }) : _v4 && _v1 === _v25.PAGE_TYPES.ADMIN ? (0, _v1.jsx)(_v32.ErrorPage, {
        error: new _v31.ForbiddenError()
      }) : (0, _v1.jsx)(_v0, {
        ..._v0
      });
    });
  }], 0);
}