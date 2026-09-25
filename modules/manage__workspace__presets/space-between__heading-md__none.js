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
    _v23 = _v0.i(0);
  let _v24 = ({
      canLoadMore: _v0,
      isLoadingMore: _v1,
      isLoadingPresets: _v2,
      isDeleting: _v3,
      presets: _v4,
      title: _v5,
      onDelete: _v6,
      onLoadMore: _v7,
      ..._v8
    }) => {
      let _v9 = (0, _v20.getTranslations)(),
        [_v10, _v11] = (0, _v2.useState)(null),
        {
          isOpen: _v12,
          onOpen: _v13,
          onClose: _v14
        } = (0, _v15.useDisclosure)(),
        _v15 = async () => {
          _v10 && (await _v6(_v10), _v11(null), _v14());
        },
        _v16 = (0, _v2.useCallback)(_v0 => {
          _v11(_v0), _v13();
        }, [_v13]),
        _v17 = !_v4 || 0 === _v4.length;
      return (0, _v1.jsxs)(_v19.List, {
        ..._v8,
        children: [(0, _v1.jsx)(_v19.List.Title, {
          justifyContent: "space-between",
          children: (0, _v1.jsx)(_v12.Text, {
            variant: "heading-md",
            children: _v5
          })
        }), (0, _v1.jsxs)(_v19.List.Content, {
          children: [_v17 ? null : (0, _v1.jsx)(_v19.List.Header, {
            children: _v9.name
          }), (0, _v1.jsx)(_v19.List.Body, {
            children: _v2 ? (0, _v1.jsx)(_v6.Center, {
              py: "md",
              children: (0, _v1.jsx)(_v10.Spinner, {
                size: "sm"
              })
            }) : (0, _v1.jsx)(_v25, {
              initDelete: _v16,
              isDeleting: _v3,
              presets: _v4,
              presetIdToDelete: _v10?.uuid,
              showEmptyState: _v17
            })
          }), _v0 && (0, _v1.jsx)(_v23.LoadMoreButton, {
            onLoadMore: _v7,
            isLoadingMore: _v1
          })]
        }), (0, _v1.jsx)(_v22.DeletePresetModal, {
          name: _v10?.name || "",
          isLoading: _v3,
          isOpen: _v12,
          onClose: _v14,
          onDelete: _v15
        })]
      });
    },
    _v25 = ({
      initDelete: _v0,
      isDeleting: _v1,
      presetIdToDelete: _v2,
      presets: _v3,
      showEmptyState: _v4
    }) => {
      let _v5 = (0, _v20.getTranslations)();
      return _v4 ? (0, _v1.jsx)(_v14.Tr, {
        cursor: "default",
        children: (0, _v1.jsx)(_v11.Td, {
          px: 4,
          pt: 0,
          border: "none",
          children: (0, _v1.jsxs)(_v16.VStack, {
            gap: 4,
            align: "flex-start",
            children: [(0, _v1.jsx)(_v12.Text, {
              color: "text-secondary",
              variant: "body-md",
              children: _v5.noPresetsYet
            }), (0, _v1.jsx)(_v12.Text, {
              color: "text-secondary",
              variant: "body-md",
              children: (0, _v1.jsxs)(_v8.Link, {
                color: "inherit",
                href: "https://help.vimeo.com/hc/en-us/articles/27504064081937-How-to-manage-registration-form-presets#h_01J56715AGY7XYT1MT2BZQJ35W",
                target: "_blank",
                textDecoration: "underline",
                children: [_v5.howToCreatePreset, (0, _v1.jsx)(_v5.Box, {
                  as: "span",
                  ml: (0, _v9.rem)(6),
                  children: (0, _v1.jsx)(_v17.PopOut, {
                    boxSize: "2xs"
                  })
                })]
              })
            })]
          })
        })
      }) : (0, _v1.jsx)(_v1.Fragment, {
        children: _v3.map(_v0 => (0, _v1.jsx)(_v19.List.Row, {
          children: (0, _v1.jsxs)(_v5.Box, {
            w: "100%",
            display: "flex",
            gap: "md",
            children: [(0, _v1.jsxs)(_v16.VStack, {
              align: "flex-start",
              flex: 1,
              minWidth: 0,
              gap: "xs",
              children: [(0, _v1.jsx)(_v12.Text, {
                variant: "body-md",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                w: "100%",
                children: _v0.name
              }), (0, _v1.jsx)(_v12.Text, {
                variant: "body-sm",
                color: "text-secondary",
                children: (0, _v21.getFormattedDate)(_v0.createdDate, navigator.language || "en-US", !1)
              })]
            }), _v0.isApproved ? (0, _v1.jsx)(_v13.Tooltip, {
              label: _v5.approvedPresetCannotBeDeleted,
              placement: "top",
              shouldWrapChildren: !0,
              children: (0, _v1.jsx)(_v7.IconButton, {
                "aria-label": _v5.approvedPresetCannotBeDeleted,
                isDisabled: !0,
                icon: (0, _v1.jsx)(_v18.TrashBin, {}),
                variant: "tertiary"
              })
            }) : (0, _v1.jsx)(_v7.IconButton, {
              "aria-label": _v5.deletePreset,
              isLoading: _v1 && _v2 === _v0.uuid,
              icon: (0, _v1.jsx)(_v18.TrashBin, {}),
              onClick: () => _v0(_v0),
              variant: "tertiary"
            })]
          })
        }, _v0.uuid))
      });
    };
  var _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0);
  let _v31 = "wsp-preset-delete-success",
    _v32 = "wsp-preset-delete-fail",
    _v33 = () => {
      let _v0 = (0, _v20.getTranslations)(),
        _v1 = (0, _v4.useToast)(),
        [_v2, _v3] = (0, _v2.useState)(""),
        {
          canLoadMorePresets: _v4,
          deletePresetError: _v5,
          destroy: _v6,
          isDeleting: _v7,
          isLoading: _v8,
          isLoadingMorePresets: _v9,
          loadMorePresets: _v10,
          registrationPresets: _v11
        } = function () {
          let _v0 = (0, _v29.useViewer)(),
            _v1 = _v0?.teamUser?.ownerId || _v0?.user?.id,
            {
              data: _v2,
              mutate: _v3,
              isLoading: _v4,
              size: _v5,
              setSize: _v6
            } = (0, _v27.useGetUserLeadCaptureFormsInfinite)(() => _v1 ? {
              where: {
                userId: _v1
              },
              select: ["uuid", "formCreatedOn", "presetName", "isApproved"],
              query: {
                perPage: 10,
                filter: "preset"
              },
              headers: {
                Accept: `application/vnd.vimeo.*+json;version=${_v30.VIDEOS_API_VERSION}`
              }
            } : null, {
              revalidateOnFocus: !1
            }),
            [_v7, _v8] = (0, _v26.useDeleteUserLeadCaptureForm)(),
            _v9 = (0, _v2.useMemo)(() => _v2?.filter(Boolean)?.flatMap(_v0 => _v0.data).map(_v0 => ({
              createdDate: _v0.formCreatedOn,
              name: _v0.presetName || "",
              uuid: _v0.uuid,
              isApproved: _v0.isApproved
            })), [_v2]),
            {
              isLoadingInitialData: _v10,
              isLoadingMore: _v11,
              isDone: _v12
            } = (0, _v28.getInfiniteRequestLoadingState)({
              data: _v2,
              size: _v5,
              itemsPerPage: 10
            }),
            _v13 = (0, _v2.useCallback)(async _v0 => {
              _v1 && (await _v7({
                where: {
                  userId: _v1,
                  leadCaptureFormId: _v0
                }
              }), _v3());
            }, [_v7, _v1, _v3]);
          return {
            canLoadMorePresets: !_v12 && !_v4,
            deletePresetError: !!_v8.error,
            destroy: _v13,
            isDeleting: _v8.loading,
            isLoading: _v4 || _v10,
            isLoadingMorePresets: _v11,
            loadMorePresets: () => {
              _v6(_v5 + 1);
            },
            registrationPresets: _v9
          };
        }(),
        _v12 = async _v0 => {
          _v3(_v0.name), await _v6(_v0.uuid);
        };
      return (0, _v2.useEffect)(() => {
        if (_v2) {
          if (_v5 && !_v1.isActive(_v32)) return void _v1({
            title: _v0.errorDeletingPreset,
            status: "error",
            id: _v32
          });
          _v1.isActive(_v31) || _v1({
            title: _v0.presetDeleted(_v2),
            id: _v31
          }), _v3("");
        }
      }, [_v5, _v2, _v0, _v1]), (0, _v1.jsx)(_v24, {
        title: _v0.registration,
        canLoadMore: _v4,
        isLoadingMore: _v9,
        isLoadingPresets: _v8,
        presets: _v11 || [],
        onDelete: _v12,
        onLoadMore: _v10,
        isDeleting: _v7
      });
    };
  var _v34 = _v0.i(0),
    _v35 = _v0.i(0),
    _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0),
    _v39 = _v0.i(0),
    _v40 = _v0.i(0),
    _v41 = _v0.i(0),
    _v42 = _v0.i(0),
    _v43 = _v0.i(0);
  let _v44 = {
      barebone_js: "",
      chromeless_css: "",
      chromeless_js: "",
      css: "",
      js: "",
      player_url: ""
    },
    _v45 = ({
      playerAssetUrls: _v0
    }) => {
      let _v1 = (0, _v2.useMemo)(() => ({
        title: (0, _v37.translate)({
          singular: "Presets",
          dictionary: {
            es: {
              singular: "Preajustes"
            },
            "de-DE": {
              singular: "Voreinstellungen"
            },
            "fr-FR": {
              singular: "Préréglages"
            },
            "ja-JP": {
              singular: "事前設定"
            },
            "ko-KR": {
              singular: "사전 설정"
            },
            "pt-BR": {
              singular: "Predefinições"
            },
            "zh-CN": {
              singular: "预设"
            }
          }
        }),
        description: (0, _v37.translate)({
          singular: "Manage settings that anyone in your workspace can reuse across multiple videos",
          dictionary: {
            es: {
              singular: "Gestione la configuración que cualquier persona de su espacio de trabajo puede reutilizar en varios videos"
            },
            "de-DE": {
              singular: "Verwalten Sie Einstellungen, die jeder in Ihrem Workspace für mehrere Videos wiederverwenden kann."
            },
            "fr-FR": {
              singular: "Gérez les paramètres que toutes les personnes au sein de votre espace de travail peuvent réutiliser sur plusieurs vidéos"
            },
            "ja-JP": {
              singular: "ワークスペース内の誰でも複数の動画で再利用できる設定を管理"
            },
            "ko-KR": {
              singular: "워크스페이스의 모든 사용자가 여러 동영상에서 재사용할 수 있는 설정을 관리하세요."
            },
            "pt-BR": {
              singular: "Gerencie as configurações que qualquer pessoa no seu espaço de trabalho pode reutilizar em vários vídeos"
            },
            "zh-CN": {
              singular: "管理可供工作区成员在多个视频中重复使用的设置"
            }
          }
        })
      }), []);
      return (0, _v1.jsx)(_v40.PlayerContextProvider, {
        type: _v41.PlayerType.VimeoPlayer,
        assetUrls: _v0 ?? _v44,
        children: (0, _v1.jsxs)(_v5.Box, {
          maxW: _v38.SETTING_PAGES_MAX_WIDTH,
          w: "100%",
          mx: "auto",
          py: "lg",
          children: [(0, _v1.jsx)(_v39.SettingsPageContentHeader, {
            title: _v1.title,
            description: _v1.description
          }), (0, _v1.jsxs)(_v35.Flex, {
            direction: "column",
            gap: "xl",
            children: [(0, _v1.jsx)(_v3.EmbedPresetListModule, {}), (0, _v1.jsx)(_v34.VideoPagePresetListModule, {}), (0, _v1.jsx)(_v33, {})]
          })]
        })
      });
    };
  (0, _v36.withPageSetup)(_v43.getWspServerSideProps, {
    requireLogin: !0,
    inlineViewer: !0,
    inlinePlayerAssets: !0
  }), _v45.getLayout = (_v0, _v1) => (0, _v42.getLayout)(_v0, _v1, _v42.WORKSPACE_COMPACT_SETTINGS_LAYOUT), _v0.s(["__N_SSP", 0, !0, "default", 0, _v45], 0);
}