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
  function _v12(_v0) {
    let {
      titleFontFamily: _v1,
      titleFontWeight: _v2
    } = _v0;
    if (!_v1) return _v0;
    let _v3 = (0, _v10.titleFontWeightsById)(_v1);
    return _v2 && _v3.includes(_v2) ? _v0 : {
      ..._v0,
      titleFontWeight: (0, _v10.closestWeightInFamily)(_v1, _v2 ?? _v10.DEFAULT_TITLE_FONT_WEIGHT)
    };
  }
  let _v13 = {
      draft: _v11.EMPTY_DRAFT,
      committed: _v11.EMPTY_DRAFT,
      isSubmitting: !1,
      isLoading: !0
    },
    _v14 = ["page.customization.ambientBacklight", "page.customization.hideVimeoHeader", "page.customization.backgroundColor", "page.customization.titleFontFamily", "page.customization.titleFontWeight", "page.customization.logo.enabled", "page.customization.logo.customLogoUrl", "page.customization.logo.position", "user", "link"],
    _v15 = ["name"],
    _v16 = ["uri", "active", "baseLink", "sizes"],
    _v17 = ["142x80"],
    _v18 = ["page"],
    _v19 = ["batchId", "immediate", "count"];
  function _v20(_v0, {
    normalizeTitleWeight: _v1 = !1
  } = {}) {
    let {
        data: _v2,
        mutate: _v3
      } = (0, _v7.useGetVideo)(() => _v0 ? {
        where: {
          videoId: Number(_v0)
        },
        select: _v14
      } : null, {
        revalidateOnMount: !0
      }),
      {
        data: _v4
      } = (0, _v7.useGetVideo)(() => _v0 ? {
        where: {
          videoId: Number(_v0)
        },
        select: _v15
      } : null),
      {
        data: _v5
      } = (0, _v8.useGetVideoPictures)(() => _v0 ? {
        where: {
          videoId: Number(_v0)
        },
        select: _v16,
        query: {
          sizes: _v17
        }
      } : null),
      {
        baseUrl: _v6,
        jwt: _v7,
        xVimeoPage: _v8,
        locale: _v9
      } = (0, _v6.useGctlConfig)(),
      _v10 = (0, _v9.idFromUri)(_v2?.user?.uri),
      _v11 = (0, _v2.useMemo)(() => function ({
        normalizeTitleWeight: _v0 = !1
      } = {}) {
        return function (_v0, _v1) {
          switch (_v1.type) {
            case "INITIALIZE":
              {
                let _v0 = _v0 ? _v12(_v1.payload) : _v1.payload;
                return {
                  ..._v0,
                  isLoading: !1,
                  committed: _v0,
                  draft: _v0
                };
              }
            case "RESET":
              return {
                ..._v0,
                draft: _v0.committed
              };
            case "COMMIT":
              return {
                ..._v0,
                committed: _v1.payload,
                isSubmitting: !1
              };
            case "SET_SUBMITTING":
              return {
                ..._v0,
                isSubmitting: _v1.payload
              };
            case "SET_AMBIENT_BACKLIGHT":
              return {
                ..._v0,
                draft: {
                  ..._v0.draft,
                  ambientBacklight: _v1.payload,
                  selectedPresetId: null
                }
              };
            case "SET_HIDE_VIMEO_HEADER":
              return {
                ..._v0,
                draft: {
                  ..._v0.draft,
                  hideVimeoHeader: _v1.payload,
                  selectedPresetId: null
                }
              };
            case "SET_BACKGROUND_COLOR":
              return {
                ..._v0,
                draft: {
                  ..._v0.draft,
                  backgroundColor: _v1.payload,
                  selectedPresetId: null
                }
              };
            case "SET_TITLE_FONT_FAMILY":
              {
                let _v0 = _v1.payload,
                  _v1 = _v0 ? _v0 ? (0, _v10.closestWeightInFamily)(_v0, _v0.draft.titleFontWeight ?? _v10.DEFAULT_TITLE_FONT_WEIGHT) : null : _v0 && _v0.draft.titleFontWeight ? (0, _v10.closestWeightInFamily)(_v0, _v0.draft.titleFontWeight) : _v0.draft.titleFontWeight;
                return {
                  ..._v0,
                  draft: {
                    ..._v0.draft,
                    titleFontFamily: _v0,
                    titleFontWeight: _v1,
                    selectedPresetId: null
                  }
                };
              }
            case "SET_TITLE_FONT_WEIGHT":
              return {
                ..._v0,
                draft: {
                  ..._v0.draft,
                  titleFontWeight: _v1.payload,
                  selectedPresetId: null
                }
              };
            case "SET_LOGO_ENABLED":
              return {
                ..._v0,
                draft: {
                  ..._v0.draft,
                  logo: {
                    ..._v0.draft.logo,
                    enabled: _v1.payload
                  },
                  selectedPresetId: null
                }
              };
            case "SET_LOGO_URL":
              return {
                ..._v0,
                draft: {
                  ..._v0.draft,
                  logo: {
                    ..._v0.draft.logo,
                    customLogoUrl: _v1.payload
                  },
                  selectedPresetId: null
                }
              };
            case "SET_LOGO_POSITION":
              return {
                ..._v0,
                draft: {
                  ..._v0.draft,
                  logo: {
                    ..._v0.draft.logo,
                    position: _v1.payload
                  },
                  selectedPresetId: null
                }
              };
            case "APPLY_PRESET":
              return {
                ..._v0,
                draft: {
                  ...(_v0 ? _v12(_v1.payload.draft) : _v1.payload.draft),
                  selectedPresetId: _v1.payload.presetId
                }
              };
            case "CLEAR_PRESET":
              return {
                ..._v0,
                draft: {
                  ..._v11.EMPTY_DRAFT,
                  selectedPresetId: null
                }
              };
            case "SET_NEW_PRESET":
              return {
                ..._v0,
                draft: {
                  ..._v0.draft,
                  selectedPresetId: _v1.payload.presetId
                }
              };
            case "PRESET_DELETED":
              if (_v0.draft.selectedPresetId !== _v1.payload.presetId) return _v0;
              return {
                ..._v0,
                draft: {
                  ..._v0.draft,
                  selectedPresetId: null
                },
                committed: _v0.committed.selectedPresetId === _v1.payload.presetId ? {
                  ..._v0.committed,
                  selectedPresetId: null
                } : _v0.committed
              };
            default:
              return _v0;
          }
        };
      }({
        normalizeTitleWeight: _v1
      }), [_v1]),
      [_v12, _v13] = (0, _v2.useReducer)(_v11, _v13),
      _v14 = (0, _v2.useRef)(!1);
    (0, _v2.useEffect)(() => {
      if (_v2 && !_v14.current) {
        let _v0;
        _v14.current = !0, _v13({
          type: "INITIALIZE",
          payload: (_v0 = _v2?.page?.customization) ? {
            ambientBacklight: !!_v0.ambientBacklight,
            hideVimeoHeader: !!_v0.hideVimeoHeader,
            backgroundColor: _v0.backgroundColor ?? null,
            titleFontFamily: (0, _v10.asTitleFontId)(_v0.titleFontFamily),
            titleFontWeight: (0, _v10.asTitleFontWeight)(_v0.titleFontWeight),
            logo: {
              enabled: !!_v0.logo?.enabled,
              customLogoUrl: _v0.logo?.customLogoUrl ?? null,
              position: _v0.logo?.position ?? _v11.DEFAULT_LOGO_POSITION
            },
            selectedPresetId: null
          } : _v11.EMPTY_DRAFT
        });
      }
    }, [_v2]);
    let _v15 = (0, _v2.useMemo)(() => {
        let _v0 = _v0 => ({
          ambientBacklight: _v0.ambientBacklight,
          hideVimeoHeader: _v0.hideVimeoHeader,
          backgroundColor: _v0.backgroundColor,
          titleFontFamily: _v0.titleFontFamily,
          titleFontWeight: _v0.titleFontWeight,
          logo: {
            ..._v0.logo,
            position: (0, _v11.logoPositionToPersist)(_v0)
          }
        });
        return JSON.stringify(_v0(_v12.draft)) !== JSON.stringify(_v0(_v12.committed));
      }, [_v12.draft, _v12.committed]),
      _v16 = (0, _v2.useCallback)(async () => {
        if (!_v0) return {
          ok: !1
        };
        let _v0 = Number(_v0),
          {
            draft: _v1
          } = _v12;
        _v13({
          type: "SET_SUBMITTING",
          payload: !0
        });
        try {
          return await (0, _v5.patchVideo)({
            baseUrl: _v6,
            headers: {
              "Content-Type": "application/json",
              Authorization: _v7 ? `jwt ${_v7}` : "",
              "Vimeo-Page": `${_v8}`,
              "Accept-Language": _v9 ?? "en"
            },
            where: {
              videoId: _v0
            },
            select: _v18,
            variables: {
              page: {
                customization: {
                  ambientBacklight: _v1.ambientBacklight,
                  hideVimeoHeader: _v1.hideVimeoHeader,
                  backgroundColor: _v1.backgroundColor,
                  titleFontFamily: _v1.titleFontFamily,
                  titleFontWeight: _v1.titleFontWeight,
                  logo: {
                    enabled: _v1.logo.enabled,
                    customLogoUrl: _v1.logo.customLogoUrl,
                    position: (0, _v11.logoPositionToPersist)(_v1)
                  }
                }
              }
            }
          }), await _v3(_v0 => _v0 && {
            ..._v0,
            page: {
              ..._v0.page,
              customization: {
                ambientBacklight: _v1.ambientBacklight,
                hideVimeoHeader: _v1.hideVimeoHeader,
                backgroundColor: _v1.backgroundColor,
                titleFontFamily: _v1.titleFontFamily,
                titleFontWeight: _v1.titleFontWeight,
                logo: {
                  enabled: _v1.logo.enabled,
                  customLogoUrl: _v1.logo.customLogoUrl,
                  position: (0, _v11.logoPositionToPersist)(_v1)
                }
              }
            }
          }, {
            revalidate: !1
          }), _v13({
            type: "COMMIT",
            payload: _v1
          }), {
            ok: !0
          };
        } catch {
          return {
            ok: !1
          };
        } finally {
          _v13({
            type: "SET_SUBMITTING",
            payload: !1
          });
        }
      }, [_v6, _v7, _v8, _v9, _v0, _v12, _v3]),
      _v17 = (0, _v2.useCallback)(async () => {
        if (null === _v10) return {
          ok: !1
        };
        let {
          draft: _v0
        } = _v12;
        _v13({
          type: "SET_SUBMITTING",
          payload: !0
        });
        try {
          let _v0 = await (0, _v4.postUserVideosPageCustomization)({
            baseUrl: _v6,
            headers: {
              "Content-Type": "application/json",
              Authorization: _v7 ? `jwt ${_v7}` : "",
              "Vimeo-Page": `${_v8}`,
              "Accept-Language": _v9 ?? "en"
            },
            where: {
              userId: _v10
            },
            select: _v19,
            variables: {
              customization: {
                ambientBacklight: _v0.ambientBacklight,
                hideVimeoHeader: _v0.hideVimeoHeader,
                backgroundColor: _v0.backgroundColor,
                titleFontFamily: _v0.titleFontFamily,
                titleFontWeight: _v0.titleFontWeight,
                logo: {
                  enabled: _v0.logo.enabled,
                  customLogoUrl: _v0.logo.customLogoUrl,
                  position: (0, _v11.logoPositionToPersist)(_v0)
                }
              }
            }
          });
          return _v0.immediate && (await _v3(_v0 => _v0 && {
            ..._v0,
            page: {
              ..._v0.page,
              customization: {
                ambientBacklight: _v0.ambientBacklight,
                hideVimeoHeader: _v0.hideVimeoHeader,
                backgroundColor: _v0.backgroundColor,
                titleFontFamily: _v0.titleFontFamily,
                titleFontWeight: _v0.titleFontWeight,
                logo: {
                  enabled: _v0.logo.enabled,
                  customLogoUrl: _v0.logo.customLogoUrl,
                  position: (0, _v11.logoPositionToPersist)(_v0)
                }
              }
            }
          }, {
            revalidate: !1
          }), _v13({
            type: "COMMIT",
            payload: _v0
          })), {
            ok: !0,
            batchId: _v0.batchId,
            immediate: _v0.immediate,
            count: _v0.count
          };
        } catch {
          return {
            ok: !1
          };
        } finally {
          _v13({
            type: "SET_SUBMITTING",
            payload: !1
          });
        }
      }, [_v6, _v7, _v8, _v9, _v10, _v12, _v3]),
      _v18 = (0, _v2.useCallback)(async () => {
        await _v3();
      }, [_v3]),
      _v19 = _v4?.name ?? null,
      _v20 = _v5?.data?.find(_v0 => _v0?.active) ?? _v5?.data?.[0],
      _v21 = _v20?.baseLink ?? null,
      _v22 = _v2?.link ?? null;
    return (0, _v2.useMemo)(() => ({
      state: _v12,
      hasChanges: _v15,
      dispatch: _v13,
      save: _v16,
      applyToAllVideos: _v17,
      invalidateVideoCache: _v18,
      videoTitle: _v19,
      thumbnailUrl: _v21,
      ownerId: _v10,
      videoLink: _v22
    }), [_v12, _v15, _v13, _v16, _v17, _v18, _v19, _v21, _v10, _v22]);
  }
  _v0.s(["usePageCustomization", 0, _v20], 0);
  let _v21 = (0, _v2.createContext)(null);
  _v0.s(["CustomPageCustomizationProvider", 0, function ({
    videoId: _v0,
    children: _v1
  }) {
    let _v2 = _v20(_v0, {
        normalizeTitleWeight: !0
      }),
      {
        colorMode: _v3
      } = (0, _v3.useColorMode)(),
      [_v4, _v5] = (0, _v2.useState)("dark" === _v3),
      [_v6, _v7] = (0, _v2.useState)(!0),
      _v8 = (0, _v2.useMemo)(() => ({
        ..._v2,
        previewDark: _v4,
        setPreviewDark: _v5,
        showPreview: _v6,
        setShowPreview: _v7
      }), [_v2, _v4, _v6]);
    return (0, _v1.jsx)(_v21.Provider, {
      value: _v8,
      children: _v1
    });
  }, "useCustomPageContext", 0, function () {
    let _v0 = (0, _v2.useContext)(_v21);
    if (!_v0) throw Error("useCustomPageContext must be used within a CustomPageCustomizationProvider");
    return _v0;
  }, "useOptionalCustomPageContext", 0, function () {
    return (0, _v2.useContext)(_v21);
  }], 0);
}