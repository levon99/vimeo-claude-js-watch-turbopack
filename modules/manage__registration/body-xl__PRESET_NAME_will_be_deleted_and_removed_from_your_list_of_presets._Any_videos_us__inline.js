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
    _v30 = _v0.i(0);
  let _v31 = ({
      isActive: _v0,
      data: _v1,
      onDismiss: _v2,
      onDelete: _v3
    }) => {
      let _v4 = (0, _v16.useViewer)(),
        [_v5, {
          loading: _v6,
          called: _v7,
          error: _v8
        }] = (0, _v29.useDeleteUserLeadCaptureForm)(),
        {
          sendBpEvent: _v9
        } = (0, _v17.useAnalytics)();
      return (0, _v4.useEffect)(() => {
        _v7 && (_v8 || (_v3(), _v2()));
      }, [_v7, _v8]), (0, _v1.jsx)(_v4.Suspense, {
        fallback: null,
        children: (0, _v1.jsxs)(_v23.Modal, {
          isOpen: _v0,
          size: "lg",
          onClose: _v2,
          children: [(0, _v1.jsx)(_v28.ModalOverlay, {}), (0, _v1.jsxs)(_v25.ModalContent, {
            children: [(0, _v1.jsx)(_v27.ModalHeader, {
              children: (0, _v1.jsx)(_v22.Header, {
                size: "lg",
                children: _v20.default.DeletePreset
              })
            }), (0, _v1.jsx)(_v24.ModalBody, {
              paddingBottom: 16,
              children: (0, _v1.jsx)(_v9.Text, {
                variant: "body-xl",
                children: (0, _v30.translate)({
                  singular: "{PRESET_NAME} will be deleted and removed from your list of presets. Any videos using this preset will no longer be linked, but will keep the settings from the preset.",
                  replacements: {
                    PRESET_NAME: (0, _v1.jsx)(_v9.Text, {
                      variant: "body-xl",
                      display: "inline",
                      fontWeight: "bold",
                      children: _v1?.presetName
                    })
                  },
                  dictionary: {
                    es: {
                      singular: "{PRESET_NAME} se borrará y eliminará de su lista de configuraciones predeterminadas. Cualquier video que utilice esta configuración predeterminada ya no estará vinculado, pero mantendrá está configuración."
                    },
                    "de-DE": {
                      singular: "{PRESET_NAME} wird gelöscht und aus Ihrer Liste der Voreinstellungen entfernt. Alle Videos, die diese Voreinstellung verwenden, werden nicht mehr verknüpft, behalten aber die Einstellungen der Voreinstellung bei."
                    },
                    "fr-FR": {
                      singular: "{PRESET_NAME} sera supprimé et retiré de votre liste de préréglages. Toutes les vidéos utilisant ce préréglage ne seront plus liées, mais elles conserveront les paramètres du préréglage."
                    },
                    "ja-JP": {
                      singular: "{PRESET_NAME}は削除され、プリセットのリストから削除されます。このプリセットを使用している動画はリンクされなくなりますが、プリセットの設定は保持されます。"
                    },
                    "ko-KR": {
                      singular: "{PRESET_NAME}이(가) 삭제되고 사전 설정 목록에서 제거됩니다. 이 동영상을 사용하는 등록 양식은 더 이상 연결되지 않지만 사전 설정의 설정은 유지됩니다."
                    },
                    "pt-BR": {
                      singular: "{PRESET_NAME} será excluído e removido da sua lista de predefinições. Os vídeos que usem essa predefinição serão desvinculados, mas manterão as configurações da predefinição."
                    },
                    "zh-CN": {
                      singular: "{PRESET_NAME} 将被删除，并从预设列表中移除。任何使用此预设的视频将不再被链接，但将保留预设中的设置。"
                    }
                  }
                })
              })
            }), (0, _v1.jsxs)(_v26.ModalFooter, {
              borderTop: 0,
              children: [(0, _v1.jsx)(_v21.Button, {
                isDisabled: _v6,
                variant: "secondary",
                minW: 100,
                onClick: _v2,
                children: _v20.default.Cancel
              }), (0, _v1.jsx)(_v21.Button, {
                isLoading: _v6,
                isDisabled: _v6,
                variant: "destructive",
                minW: 100,
                onClick: () => {
                  let _v0 = _v4?.teamUser?.ownerId ?? _v4?.user?.id;
                  _v9({
                    eventName: _v18.BP_EVENT_NAMES.UPDATE_PRESET,
                    element: _v18.ELEMENT.BUTTON,
                    location: _v18.LOCATION.NOTIFICATION,
                    copy: _v18.COPY.DELETE,
                    pageName: _v18.PAGE_NAMES.REGISTRATION_MANAGER,
                    formId: _v1?.uuid
                  }), _v1?.uuid && _v0 && _v5({
                    where: {
                      userId: _v0,
                      leadCaptureFormId: _v1?.uuid || ""
                    }
                  });
                },
                children: _v20.default.Delete
              })]
            })]
          })]
        })
      });
    },
    _v32 = ({
      text: _v0,
      textFontSize: _v1
    }) => {
      let _v2 = (0, _v4.useRef)(null),
        [_v3, _v4] = (0, _v4.useState)(!1);
      return (0, _v4.useEffect)(() => {
        let {
          current: _v0
        } = _v2;
        _v0 && _v4(_v0.scrollWidth > _v0.clientWidth);
      }, [_v0]), (0, _v1.jsx)(_v10.Tooltip, {
        label: _v0,
        hasArrow: !0,
        isDisabled: !_v3,
        placement: "top",
        fontSize: 14,
        children: (0, _v1.jsx)(_v9.Text, {
          ref: _v2,
          variant: "body-xl",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          fontSize: (0, _v11.rem)(_v1 || 18),
          children: _v0
        })
      });
    },
    _v33 = () => {
      let _v0 = (0, _v16.useViewer)(),
        _v1 = _v0?.user,
        _v2 = _v0?.teamUser,
        _v3 = _v0?.locale,
        [_v4, _v5] = (0, _v4.useState)(!1),
        [_v6, _v7] = (0, _v4.useState)(null),
        [_v8, {
          data: _v9
        }] = (0, _v15.useGetUserLeadCaptureFormsLazy)(),
        [_v10, _v11] = (0, _v4.useState)(null),
        _v12 = (0, _v13.useIsBokeh)(),
        {
          sendBpEvent: _v13
        } = (0, _v17.useAnalytics)(),
        {
          data: _v14,
          isLoading: _v15
        } = (0, _v14.useGetUser)(() => {
          let _v0 = _v2?.ownerId;
          return _v0 ? {
            select: ["metadata.connections.leadCaptureForm"],
            where: {
              userId: _v0
            }
          } : null;
        }),
        _v16 = {
          month: "short",
          day: "2-digit",
          year: "numeric",
          hour: "numeric",
          minute: "numeric",
          hour12: !0
        };
      return ((0, _v4.useEffect)(() => {
        let _v0 = _v14?.metadata?.connections?.leadCaptureForm?.options?.length ? _v2?.ownerId ?? _v1?.id : _v1?.id;
        _v15 || _v8({
          where: {
            userId: _v0
          },
          select: ["presetName", "formCreatedOn", "uuid", "isDefault"],
          query: {
            perPage: _v19.PRESET_RESULT_PER_PAGE,
            page: 1,
            filter: "preset"
          }
        });
      }, [_v8, _v2?.ownerId, _v1?.id, _v14, _v15]), (0, _v4.useEffect)(() => {
        _v9?.data && _v11(_v9.data.filter(_v0 => !_v0.isDefault));
      }, [_v9?.data]), (0, _v4.useEffect)(() => {
        _v13({
          eventName: _v18.BP_EVENT_NAMES.PRESET_MANAGEMENT_PAGEVIEW,
          copy: null,
          pageName: _v18.PAGE_NAMES.USER_SETTINGS,
          location: _v18.LOCATION.PAGE_AREA,
          element: null
        });
      }, []), null === _v10 || _v10 && _v10?.length === 0) ? (0, _v1.jsx)(_v1.Fragment, {}) : (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsxs)(_v5.Card, {
          padding: "lg",
          children: [(0, _v1.jsxs)(_v3.Box, {
            children: [(0, _v1.jsxs)(_v3.Box, {
              height: 75,
              borderBottomWidth: 1,
              borderBottomColor: "stroke",
              children: [(0, _v1.jsx)(_v9.Text, {
                variant: "heading-md",
                fontSize: (0, _v11.rem)(20),
                children: _v20.default.FormPresets
              }), (0, _v1.jsx)(_v9.Text, {
                color: "text-secondary",
                variant: "body-md",
                marginTop: "sm",
                children: _v20.default.DeletePresetNotneeded
              })]
            }), (0, _v1.jsxs)(_v6.Grid, {
              templateColumns: "repeat(9, 1fr)",
              alignItems: "center",
              marginY: _v12 ? "3" : "100",
              children: [(0, _v1.jsx)(_v7.GridItem, {
                colSpan: 6,
                children: (0, _v1.jsx)(_v9.Text, {
                  variant: "heading-sm",
                  fontWeight: "medium",
                  children: _v20.default.Name
                })
              }), (0, _v1.jsx)(_v7.GridItem, {
                colSpan: 3,
                children: (0, _v1.jsx)(_v9.Text, {
                  variant: "heading-sm",
                  fontWeight: "medium",
                  children: _v20.default.DateCreated
                })
              })]
            })]
          }), (0, _v1.jsx)(_v3.Box, {
            sx: {
              height: "calc(100vh - 42rem)",
              overflow: "auto"
            },
            children: _v10?.map(_v0 => {
              let _v1 = new Date(_v0.formCreatedOn),
                _v2 = new Intl.DateTimeFormat(_v3 || "en-US", _v16).format(_v1);
              return (0, _v1.jsxs)(_v6.Grid, {
                sx: {
                  height: 56,
                  cursor: "pointer"
                },
                role: "group",
                templateColumns: "repeat(9, 1fr)",
                alignItems: "center",
                children: [(0, _v1.jsx)(_v7.GridItem, {
                  colSpan: 6,
                  alignItems: "center",
                  paddingRight: "3xl",
                  children: (0, _v1.jsx)(_v32, {
                    textFontSize: 16,
                    text: _v0.presetName || ""
                  })
                }), (0, _v1.jsx)(_v7.GridItem, {
                  colSpan: 2,
                  children: (0, _v1.jsx)(_v9.Text, {
                    color: "text-secondary",
                    variant: "body-md",
                    children: _v2
                  })
                }), (0, _v1.jsx)(_v7.GridItem, {
                  colSpan: 1,
                  margin: "auto",
                  children: (0, _v1.jsx)(_v10.Tooltip, {
                    label: _v20.default.DeleteFormPreset,
                    placement: "bottom",
                    fontSize: 14,
                    children: (0, _v1.jsx)(_v8.IconButton, {
                      onClick: () => {
                        _v7(_v0), _v5(!0);
                      },
                      variant: "tertiary",
                      icon: (0, _v1.jsx)(_v12.TrashBin, {
                        width: 20,
                        height: 20
                      }),
                      "aria-label": "Delete",
                      className: "delete-icon"
                    })
                  })
                })]
              }, _v0.formCreatedOn);
            })
          })]
        }), _v6 && (0, _v1.jsx)(_v31, {
          isActive: _v4,
          data: _v6,
          onDelete: () => {
            _v10 && _v6 && _v11(_v10.filter(_v0 => _v0.uuid !== _v6?.uuid));
          },
          onDismiss: () => {
            _v5(!1), _v7(null);
          }
        })]
      });
    };
  var _v34 = _v0.i(0),
    _v35 = _v0.i(0);
  let _v36 = (0, _v4.createContext)({
      features: {},
      setFeatures: () => void 0
    }),
    _v37 = ({
      children: _v0
    }) => {
      let [_v1] = (0, _v4.useState)();
      return (0, _v1.jsx)(_v36.Provider, {
        value: {
          features: _v1
        },
        children: _v0
      });
    },
    _v38 = () => (0, _v1.jsx)(_v37, {
      children: (0, _v1.jsxs)(_v3.Box, {
        children: [(0, _v1.jsx)(_v34.Header, {}), (0, _v1.jsx)(_v35.RegistrationInfo, {
          emailDefaultsHref: _v19.EMAIL_DEFAULTS_URL
        }), (0, _v1.jsx)(_v33, {})]
      })
    });
  var _v39 = _v0.i(0);
  let _v40 = () => (0, _v1.jsx)(_v38, {});
  (0, _v2.withPageSetup)(() => ({
    props: {
      hasThemeSupport: !0
    }
  }), {
    requireLogin: !0,
    inlineViewer: !0,
    noIndex: !0
  }), _v40.getLayout = _v39.getSharedContentLayout, _v0.s(["__N_SSP", 0, !0, "default", 0, _v40], 0);
}