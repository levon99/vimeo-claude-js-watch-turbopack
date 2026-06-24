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
    _v25 = _v0.i(0);
  let _v26 = _v6.default.span.withConfig({
    displayName: "styles__IconWrapper",
    componentId: "sc-1a187d1d-0"
  })`
  margin-right: ${(0, _v17.rem)(10)};
  display: flex;
  align-items: center;
`;
  var _v27 = _v0.i(0),
    _v28 = _v0.i(0);
  let _v29 = ({
    isPrivateToUser: _v0
  }) => _v0 ? (0, _v1.jsx)(_v28.Lock, {
    boxSize: "xs"
  }) : (0, _v1.jsx)(_v27.Folder, {
    boxSize: "xs"
  });
  var _v30 = _v0.i(0);
  let _v31 = () => (0, _v1.jsx)(_v32, {
      children: (0, _v1.jsx)(_v30.Spinner, {})
    }),
    _v32 = _v6.default.div.withConfig({
      displayName: "Loading__LoadingContainer",
      componentId: "sc-fdf13d5b-0"
    })`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,
    _v33 = ({
      folder: _v0,
      onSelect: _v1,
      onUnselect: _v2,
      selectedFoldersTree: _v3,
      isIncluded: _v4,
      isSelectAllMode: _v5,
      excludedFolderUrisSet: _v6,
      includedFolderUrisSet: _v7,
      excludedAncestorUrisSet: _v8
    }) => {
      let [_v9, _v10] = (0, _v5.useState)((0, _v25.hasSelectedDescendants)(_v3, _v0)),
        _v11 = !!_v0.metadata?.connections?.folders?.total,
        {
          getProjectItems: _v12,
          state: {
            projectItems: _v13,
            loading: _v14,
            complete: _v15
          }
        } = (0, _v23.useGetAllProjectItemsLazy)(() => (0, _v24.getAllSubfoldersOptions)(_v11, _v0)),
        _v16 = _v13 ? _v13.map(_v0 => _v0.folder) : [],
        _v17 = _v5 ? (0, _v25.isFolderIncludedInSelectAll)(_v0, _v6, _v7, _v8) : _v4 || (0, _v25.isFolderSelected)(_v3, _v0),
        _v18 = (_v0, _v1) => {
          let _v2 = _v17 ? _v16.filter(_v0 => 0 === (0, _v25.getFolderPath)(_v0).filter(_v0 => _v0.uri === _v0.uri).length) : [];
          _v2(_v0, [..._v1, ..._v2]);
        };
      return (0, _v1.jsxs)("div", {
        children: [(0, _v1.jsxs)(_v19.Flex, {
          alignItems: "center",
          height: (0, _v3.rem)(45),
          pb: (0, _v3.rem)(8),
          overflow: "hidden",
          children: [(0, _v1.jsx)(_v8.Checkbox, {
            isChecked: _v17,
            onChange: () => {
              _v17 ? _v2(_v0, []) : _v1(_v0);
            },
            pl: (0, _v3.rem)(8)
          }), (0, _v1.jsxs)(_v26, {
            onClick: () => {
              _v11 && (_v10(!_v9), _v9 || _v15 || _v12());
            },
            children: [_v11 ? _v9 ? (0, _v1.jsx)(_v21.ChevronDownSmall, {}) : (0, _v1.jsx)(_v22.ChevronRightSmall, {}) : (0, _v1.jsx)(_v35, {}), (0, _v1.jsx)(_v29, {
              isPrivateToUser: !!_v0.isPrivateToUser
            })]
          }), (0, _v1.jsx)(_v20.Paragraph, {
            size: "md",
            margin: "0",
            pl: (0, _v3.rem)(4),
            children: _v0.name
          })]
        }), _v9 && (_v14 ? (0, _v1.jsx)(_v31, {}) : (0, _v1.jsx)(_v34, {
          children: _v16.map(_v0 => (0, _v1.jsx)(_v33, {
            folder: _v0,
            onSelect: _v1,
            onUnselect: _v18,
            isIncluded: _v17,
            selectedFoldersTree: _v3,
            isSelectAllMode: _v5,
            excludedFolderUrisSet: _v6,
            includedFolderUrisSet: _v7,
            excludedAncestorUrisSet: _v8
          }, _v0.uri))
        }))]
      });
    },
    _v34 = _v6.default.ul.withConfig({
      displayName: "FolderItem__SubfolderList",
      componentId: "sc-c114434a-0"
    })`
  padding-left: ${(0, _v3.rem)(5)};
`,
    _v35 = _v6.default.svg.withConfig({
      displayName: "FolderItem__ChevronPlaceholder",
      componentId: "sc-c114434a-1"
    })`
  width: ${(0, _v3.rem)(24)};
`;
  var _v36 = _v0.i(0),
    _v37 = _v0.i(0);
  let _v38 = () => (0, _v1.jsxs)(_v36.VStack, {
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      color: "text-tertiary",
      children: [(0, _v1.jsx)(_v26, {
        children: (0, _v1.jsx)(_v37.SearchMagnifier, {
          boxSize: "lg"
        })
      }), (0, _v1.jsx)(_v20.Paragraph, {
        size: "sm",
        margin: (0, _v3.rem)(1),
        overflow: "hidden",
        textOverflow: "ellipsis",
        children: (0, _v4.translate)({
          singular: "Sorry, no results found.",
          dictionary: {
            es: {
              singular: "Lo sentimos, no se encontraron resultados."
            },
            "de-DE": {
              singular: "Leider keine Ergebnisse gefunden."
            },
            "fr-FR": {
              singular: "Désolés, aucun résultat."
            },
            "ja-JP": {
              singular: "申し訳ありません。検索結果がありません。"
            },
            "ko-KR": {
              singular: "죄송합니다, 검색 결과가 없습니다."
            },
            "pt-BR": {
              singular: "Desculpe, mas não encontramos nenhum resultado."
            },
            "zh-CN": {
              singular: "抱歉，未找到结果。"
            }
          }
        })
      })]
    }),
    _v39 = ({
      isLoading: _v0,
      folders: _v1 = [],
      handleLoadMore: _v2,
      selectedFoldersTree: _v3,
      setSelectedFoldersTree: _v4,
      onFolderDeselected: _v5,
      onFolderReselected: _v6,
      isSelectAllMode: _v7,
      excludedFolderUrisSet: _v8,
      includedFolderUrisSet: _v9,
      excludedAncestorUrisSet: _v10
    }) => {
      let [_v11] = (0, _v18.useScrollWatch)(_v1, () => null, () => null, () => _v2()),
        _v12 = _v0 => {
          _v6?.(_v0), _v4((0, _v25.selectFolder)(_v3, _v0));
        },
        _v13 = (_v0, _v1) => {
          _v5?.(_v0), _v4((0, _v25.unselectFolder)(_v3, _v0, _v1));
        };
      return (0, _v1.jsxs)(_v40, {
        ref: _v11,
        children: [!!_v1.length && (0, _v1.jsx)(_v1.Fragment, {
          children: _v1.map(_v0 => (0, _v1.jsx)(_v33, {
            folder: _v0,
            onSelect: _v12,
            onUnselect: _v13,
            selectedFoldersTree: _v3,
            isIncluded: !1,
            isSelectAllMode: _v7,
            excludedFolderUrisSet: _v8,
            includedFolderUrisSet: _v9,
            excludedAncestorUrisSet: _v10
          }, _v0.uri))
        }), _v0 && (0, _v1.jsx)(_v31, {}), !_v0 && !_v1.length && (0, _v1.jsx)(_v38, {})]
      });
    },
    _v40 = _v6.default.div.withConfig({
      displayName: "FolderList__ListWrapper",
      componentId: "sc-db24f528-0"
    })`
  height: ${(0, _v17.rem)(200)};
  overflow-y: scroll;
`,
    _v41 = ({
      header: _v0,
      ownerId: _v1,
      searchPlaceHolderText: _v2,
      selectedFoldersTree: _v3,
      setSelectedFoldersTree: _v4,
      permissionPicker: _v5,
      isSelectAllMode: _v6 = !1,
      setIsSelectAllMode: _v7,
      onFolderDeselected: _v8,
      onFolderReselected: _v9,
      excludedFolderUrisSet: _v10 = new Set(),
      includedFolderUrisSet: _v11 = new Set(),
      excludedAncestorUrisSet: _v12 = new Set()
    }) => {
      let [_v13, _v14] = (0, _v5.useState)(),
        _v15 = (0, _v16.useDebouncedValue)(_v13, 400),
        {
          settings: _v16
        } = (0, _v15.useOrionSettings)(),
        _v17 = _v16.add_to_folders_modal_select_all_folders,
        {
          listingParams: _v18,
          loading: _v19
        } = (0, _v11.usePrivateToMeFolderListingParams)(_v1),
        _v20 = (0, _v5.useRef)(new Set()),
        _v21 = (0, _v5.useRef)(_v3);
      _v21.current = _v3;
      let {
          data: _v22,
          isValidating: _v23,
          size: _v24,
          setSize: _v25,
          error: _v26
        } = (0, _v13.useGetUserProjectsInfinite)(() => (0, _v24.getUserProjectsInfiniteOptions)(_v1, _v15, _v18, _v19), {
          revalidateOnFocus: !1
        }),
        {
          data: _v27,
          isValidating: _v28,
          size: _v29,
          setSize: _v30,
          error: _v31
        } = (0, _v12.useGetUserItemsInfinite)(() => (0, _v24.getUserItemsInfiniteOptions)(_v1, _v15), {
          revalidateOnFocus: !1
        }),
        _v32 = (0, _v5.useMemo)(() => _v22 ? _v22.flatMap(_v0 => _v0.data).filter(_v0 => null !== _v0) : _v27 ? _v27.flatMap(_v0 => _v0.data).map(_v0 => _v0.folder).filter(_v0 => _v0 && _v0.metadata?.interactions?.invite) : [], [_v22, _v27]),
        _v33 = !!_v15;
      (0, _v5.useEffect)(() => {
        if (_v6 && _v32.length > 0 && !_v33) {
          let _v0 = _v32.filter(_v0 => !_v20.current.has(_v0.uri));
          if (_v0.length > 0) {
            let _v0 = _v0.filter(_v0 => !_v10.has(_v0.uri));
            _v0.length > 0 && _v4((0, _v25.selectAllFolders)(_v21.current, _v0)), _v0.forEach(_v0 => _v20.current.add(_v0.uri));
          }
        }
      }, [_v32, _v6, _v33, _v4, _v10]);
      let _v34 = _v32.length > 0 && _v32.every(_v0 => _v6 ? (0, _v25.isFolderIncludedInSelectAll)(_v0, _v10, _v11, _v12) : (0, _v25.isFolderSelected)(_v3, _v0)),
        _v35 = _v22?.[0]?.total || _v32.length,
        _v36 = (0, _v5.useMemo)(() => {
          let _v0 = _v0 => _v6 ? (0, _v25.isFolderIncludedInSelectAll)(_v0, _v10, _v11, _v12) || (0, _v25.hasSelectedDescendants)(_v3, _v0) : (0, _v25.isFolderSelected)(_v3, _v0) || (0, _v25.hasSelectedDescendants)(_v3, _v0);
          return _v6 ? _v35 - _v32.filter(_v0 => !_v0(_v0)).length : _v32.filter(_v0 => _v0(_v0)).length;
        }, [_v6, _v35, _v32, _v3, _v10, _v11, _v12]);
      (0, _v5.useEffect)(() => {
        _v6 && !_v33 && 0 === _v36 && _v32.length > 0 && (_v7?.(!1), _v4((0, _v25.unselectAllFolders)()), _v20.current.clear());
      }, [_v6, _v33, _v36, _v32.length, _v7, _v4]);
      let _v37 = _v36 > 0 && !_v34;
      return (0, _v1.jsx)(_v14.Tour, {
        id: "folder-tour",
        steps: 2,
        automated: !0,
        children: (0, _v1.jsxs)(_v42, {
          children: [_v0 ?? (0, _v1.jsx)(_v9.Header, {
            as: "h6",
            size: "xs",
            marginBottom: "10",
            children: (0, _v4.translate)({
              singular: "Select folders",
              dictionary: {
                es: {
                  singular: "Seleccionar carpetas"
                },
                "de-DE": {
                  singular: "Ordner auswählen"
                },
                "fr-FR": {
                  singular: "Sélectionner des dossiers"
                },
                "ja-JP": {
                  singular: "フォルダーを選択"
                },
                "ko-KR": {
                  singular: "폴더 선택"
                },
                "pt-BR": {
                  singular: "Selecionar pastas"
                },
                "zh-CN": {
                  singular: "选择文件夹"
                }
              }
            })
          }), (0, _v1.jsxs)(_v2.HStack, {
            mb: (0, _v3.rem)(8),
            paddingLeft: (0, _v3.rem)(2),
            children: [(0, _v1.jsx)(_v10.Search, {
              flex: "1",
              onChange: _v0 => _v14(_v0.currentTarget.value),
              placeholder: _v2 ?? (0, _v4.translate)({
                singular: "Search folders",
                dictionary: {
                  es: {
                    singular: "Buscar en carpetas"
                  },
                  "de-DE": {
                    singular: "Ordner durchsuchen"
                  },
                  "fr-FR": {
                    singular: "Recherche dans les dossiers"
                  },
                  "ja-JP": {
                    singular: "検索フォルダー"
                  },
                  "ko-KR": {
                    singular: "폴더 검색"
                  },
                  "pt-BR": {
                    singular: "Pesquisar Pastas"
                  },
                  "zh-CN": {
                    singular: "搜索文件夹"
                  }
                }
              }),
              variant: "minimal",
              "data-lpignore": "true"
            }), (0, _v1.jsx)(_v7.Box, {
              px: (0, _v3.rem)(4),
              children: _v5
            })]
          }), _v17 && !_v33 && _v32.length > 0 && (0, _v1.jsx)(_v2.HStack, {
            alignItems: "center",
            height: (0, _v3.rem)(45),
            pb: (0, _v3.rem)(16),
            overflow: "hidden",
            children: (0, _v1.jsx)(_v8.Checkbox, {
              isChecked: _v6 || _v34,
              isIndeterminate: _v37,
              onChange: () => {
                _v6 || _v34 || _v37 ? (_v7?.(!1), _v4((0, _v25.unselectAllFolders)()), _v20.current.clear()) : (_v7?.(!0), _v4((0, _v25.selectAllFolders)((0, _v25.unselectAllFolders)(), _v32)), _v20.current.clear(), _v32.forEach(_v0 => _v20.current.add(_v0.uri)));
              },
              pl: (0, _v3.rem)(8),
              children: (0, _v4.translate)({
                singular: "Select all",
                dictionary: {
                  es: {
                    singular: "Seleccionar todo"
                  },
                  "de-DE": {
                    singular: "Alles auswählen"
                  },
                  "fr-FR": {
                    singular: "Tout sélectionner"
                  },
                  "ja-JP": {
                    singular: "すべて選択"
                  },
                  "ko-KR": {
                    singular: "모두 선택"
                  },
                  "pt-BR": {
                    singular: "Selecionar tudo"
                  },
                  "zh-CN": {
                    singular: "选择所有"
                  }
                }
              })
            })
          }), _v26 || _v31 ? (0, _v1.jsx)(_v43, {
            children: (0, _v4.translate)({
              singular: "Oops! Something went wrong!",
              dictionary: {
                es: {
                  singular: "¡Ups, algo salió mal!"
                },
                "de-DE": {
                  singular: "Hoppla, hier ist was schief gegangen!"
                },
                "fr-FR": {
                  singular: "Oups ! Quelque chose a planté !"
                },
                "ja-JP": {
                  singular: "エラーが発生しました！"
                },
                "ko-KR": {
                  singular: "죄송합니다. 문제가 발생했습니다."
                },
                "pt-BR": {
                  singular: "Opa! Alguma coisa deu errado!"
                },
                "zh-CN": {
                  singular: "哎呀！出错了！"
                }
              }
            })
          }) : (0, _v1.jsx)(_v39, {
            isLoading: _v23 || _v28 || !_v33 && _v19,
            folders: _v32,
            selectedFoldersTree: _v3,
            setSelectedFoldersTree: _v4,
            handleLoadMore: () => {
              if (_v15) {
                if (!_v28) {
                  let _v0 = _v27?.[_v27.length - 1];
                  _v0?.paging.next && _v30(_v29 + 1);
                }
              } else if (!_v23) {
                let _v0 = _v22?.[_v22.length - 1];
                _v0?.paging.next && _v25(_v24 + 1);
              }
            },
            onFolderDeselected: _v8,
            onFolderReselected: _v9,
            isSelectAllMode: _v6,
            excludedFolderUrisSet: _v10,
            includedFolderUrisSet: _v11,
            excludedAncestorUrisSet: _v12
          })]
        })
      });
    },
    _v42 = _v6.default.div.withConfig({
      displayName: "FolderSelectionArea__Wrapper",
      componentId: "sc-a20b8c57-0"
    })`
  overflow: auto;
  margin: 1.5rem 0 0.5rem 0;
`,
    _v43 = _v6.default.div.withConfig({
      displayName: "FolderSelectionArea__FolderLoadError",
      componentId: "sc-a20b8c57-1"
    })`
  display: flex;
  height: ${(0, _v3.rem)(200)};
  justify-content: center;
  align-items: center;
`;
  var _v44 = _v0.i(0),
    _v45 = _v0.i(0),
    _v46 = _v0.i(0),
    _v47 = _v0.i(0),
    _v48 = _v0.i(0),
    _v49 = _v0.i(0),
    _v50 = _v0.i(0),
    _v51 = _v0.i(0),
    _v52 = _v0.i(0),
    _v53 = _v0.i(0),
    _v54 = _v0.i(0),
    _v55 = _v0.i(0),
    _v56 = _v0.i(0),
    _v57 = _v0.i(0),
    _v58 = _v0.i(0);
  let _v59 = {
      admin: "admin",
      contributor: "contributor",
      contributor_plus: "contributor_plus",
      viewer: "viewer",
      uploader: "uploader"
    },
    _v60 = ({
      viewer: _v0,
      teamUsers: _v1 = null,
      oldPermission: _v2 = null,
      newPermission: _v3 = null
    }) => {
      let _v4 = _v0?.teamUser ? (0, _v55.buildTeamBpContextFromTeamUser)(_v0?.teamUser) : (0, _v55.buildTeamBpContextFromTeam)(_v0?.team),
        _v5 = _v1?.[0],
        _v6 = parseInt(_v5?.user?.uri?.split("/").filter(Boolean).pop() || "0", 10) || null,
        _v7 = _v5?.permissionLevel?.toLowerCase() || null;
      try {
        (0, _v58.sendBpEventWithContexts)("vimeo.change_permission", {
          ...(0, _v57.buildWebBpContext)({
            page_name: "team_management_page"
          }),
          ...(0, _v53.buildActionBpContext)({
            action_type: "click",
            feature: null
          }),
          ..._v4,
          ...(0, _v54.buildProductAnalyticsBpContext)({
            device_type: (0, _v52.default)(),
            is_user_facing_data: !1,
            flow: null,
            copy: _v3,
            scrolling_percentage: null,
            product: "collaboration",
            cta_location_id: null,
            feature: "access",
            location: "modal",
            modal_name: "share_entity_modal",
            element: "dropdown",
            entity_type: "folder"
          }),
          ...(0, _v56.buildThirdPartyIntegrationBpContext)({
            is_integration: !1,
            integration_id: null,
            integration_name: null,
            managed_user_id: null,
            is_partner: null
          })
        }, 2, {
          old_resource_permission: _v2 ? (0, _v50.default)(_v2.toLowerCase()) : null,
          new_resource_permission: _v3 ? (0, _v50.default)(_v3.toLowerCase()) : null,
          is_send_email_notification: !1,
          target_user_id: _v6,
          member_team_role: _v7 ? (0, _v50.default)(_v7) : null
        });
      } catch (_v0) {
        console.error(_v0);
      }
    };
  _v0.s(["sendCancelEvent", 0, _v0 => {
    let _v1 = {
        page: _v0?.page || "team_management",
        name: _v0?.cancelEventName || "click_cancel_inviting_to_folders",
        location: _v0?.location || "invite_modal",
        feature: _v0?.feature || "team_management",
        path: window.parent.location.pathname,
        type: "general",
        copy: null,
        target: null,
        target_path: null,
        click_type: null,
        device_type: null,
        third_party_integration: null
      },
      _v2 = {
        ...(0, _v55.buildTeamBpContextFromTeamUser)(_v0?.teamUser)
      };
    try {
      (0, _v58.sendBpEventWithContexts)("vimeo.click", _v2, 106, _v1);
    } catch (_v0) {
      console.error(_v0);
    }
  }, "sendChangePermissionEvent", 0, _v60, "sendInviteEvents", 0, (_v0, _v1, _v2, _v3, _v4, _v5) => {
    _v0.forEach(_v0 => {
      let _v1 = _v0.uri.split("/"),
        _v2 = parseInt(_v1[_v1.length - 1]),
        _v3 = _v0.permissionLevel.toLowerCase().replace(/ /g, "_"),
        _v4 = _v2.length,
        _v5 = _v4 > 0 ? _v2.map(_v0 => _v0.match(/(\d+)(?!.*\d)/)[0]).join(",") : null,
        _v6 = _v0.user?.uri.split("/").pop(),
        _v7 = _v6 ? parseInt(_v6) : null;
      if (_v59[_v3] || null === _v3) {
        let _v0 = (_v0 => {
          switch (_v0) {
            case "Folder Viewer":
              return "can_view";
            case "Folder Editor":
              return "can_edit";
            case "Folder Admin":
              return "can_manage";
            default:
              return null;
          }
        })(_v4);
        _v5({
          eventName: "vimeo.distribute_content",
          distributionActionFields: {
            number_of_items: _v4,
            sharee_id: _v7,
            sharee_team_permission: _v3,
            sharee_entity_permission: _v0,
            is_send_email_notification: !0
          },
          contextOverrides: {
            product: {
              flow: "share_folder",
              copy: "Share"
            },
            folder: {
              folder_id: _v5 ? _v5.split(",").at(0) : 0,
              access_permission_to_folder: _v0
            }
          }
        }) || ((_v0, _v1, _v2, _v3, _v4, _v5, _v6, _v7 = null, _v8 = null) => {
          try {
            let _v0 = new _v51.Event("add_team_member_to_folder", 14, {
              product: "Collaboration",
              path: window.parent.location.pathname,
              location: _v5?.location || "bulk_share_modal",
              folder_id: _v4,
              role: _v0,
              team_id: _v2,
              team_member_id: _v1,
              is_subfolder: null,
              entry_point: _v5?.entryPoint ?? null,
              number_of_folders: _v3,
              permission: _v6,
              sharee_email: _v7,
              sharee_id: _v8
            });
            _v51.BigPictureClient.sendEvent(_v0);
          } catch (_v0) {
            console.error(_v0);
          }
        })(_v3, _v2, _v1, _v4, _v5, _v3, _v0, _v0.email, _v7);
      }
    });
  }], 0);
  let _v61 = {
      "Folder Editor": "Can edit",
      "Folder Viewer": "Can view",
      "Folder Admin": "Can manage",
      "Clip Editor": "Can edit",
      "Clip Viewer": "Can view",
      "Clip Admin": "Can manage",
      "Album Editor": "Can edit",
      "Album Viewer": "Can view",
      "Album Admin": "Can manage",
      "Album Creator": "Can manage",
      "Clip Commenter": "Can comment",
      "Folder Commenter": "Can comment"
    },
    _v62 = ({
      permissionPolicies: _v0,
      selectedPermissionPolicy: _v1,
      teamUsers: _v2,
      setSelectedPermissionPolicy: _v3
    }) => {
      let _v4 = (0, _v49.useViewer)(),
        [_v5, _v6] = (0, _v5.useState)(!1),
        _v7 = (0, _v5.useRef)(null),
        _v8 = (0, _v5.useRef)(null);
      (0, _v47.useOutsideClick)({
        ref: _v8,
        handler: () => _v6(!1)
      });
      let _v9 = (0, _v1.jsx)("div", {
        "data-id": "rolesMenuContent",
        ref: _v8,
        children: _v0.map((_v0, _v1) => (0, _v1.jsxs)(_v65, {
          "data-id": "rolesMenuOption",
          onClick: () => {
            _v6(!1), _v3(_v0), (_v0 => {
              if (!_v4) return;
              let {
                oldPermission: _v1,
                newPermission: _v2
              } = {
                oldPermission: _v1?.name ? _v61[_v1.name] : null,
                newPermission: _v0?.name ? _v61[_v0.name] : null
              };
              _v60({
                viewer: _v4,
                teamUsers: _v2,
                oldPermission: _v1,
                newPermission: _v2
              });
            })(_v0);
          },
          children: [(0, _v1.jsx)(_v67, {
            children: _v1?.uri == _v0.uri && (0, _v1.jsx)(_v48.Checkmark, {
              color: "blue.500"
            })
          }), (0, _v1.jsxs)(_v66, {
            children: [(0, _v1.jsx)(_v20.Paragraph, {
              size: "md",
              children: _v0.displayName
            }), (0, _v1.jsx)(_v7.Box, {
              color: "slate.500",
              children: _v0.displayDescription
            })]
          })]
        }, `${_v1}-${_v0.uri}`))
      });
      return (0, _v1.jsx)(_v63, {
        children: (0, _v1.jsxs)(_v44.Popover, {
          isOpen: _v5,
          placement: "bottom",
          onClose: () => _v6(!1),
          children: [(0, _v1.jsx)(_v46.PopoverTrigger, {
            children: (0, _v1.jsx)(_v68, {
              children: (0, _v1.jsxs)(_v64, {
                "data-id": "rolesMenuButton",
                onClick: _v0 => {
                  _v0.stopPropagation(), _v6(!_v5);
                },
                ref: _v7,
                children: [(0, _v1.jsx)(_v20.Paragraph, {
                  size: "md",
                  mb: "0",
                  fontWeight: "700",
                  whiteSpace: "nowrap",
                  children: _v1?.displayName
                }), (0, _v1.jsx)(_v21.ChevronDownSmall, {
                  width: (0, _v3.rem)(24)
                })]
              })
            })
          }), (0, _v1.jsx)(_v45.PopoverContent, {
            p: "0",
            mt: "0",
            children: _v9
          })]
        })
      });
    },
    _v63 = _v6.default.div.withConfig({
      displayName: "PermissionPolicyPicker__PermissionPicker",
      componentId: "sc-ed24bbc6-0"
    })`
  align-items: center;
  justify-content: space-between;
  display: flex;
`,
    _v64 = _v6.default.div.withConfig({
      displayName: "PermissionPolicyPicker__RoleMenuButton",
      componentId: "sc-ed24bbc6-1"
    })`
  display: flex;
  padding: ${(0, _v3.rem)(2)} 0 ${(0, _v3.rem)(2)} ${(0, _v3.rem)(10)};
  justify-content: flex-end;
  border-radius: ${(0, _v3.rem)(6)};
  font-weight: 400;
  line-height: ${(0, _v3.rem)(13)};
  font-size: ${(0, _v3.rem)(13)};
  &:hover,
  &:active {
    cursor: pointer;
  }
  align-items: center;
  right: ${(0, _v3.rem)(15)};
  top: 0;
  height: ${(0, _v3.rem)(36)};
`,
    _v65 = _v6.default.div.withConfig({
      displayName: "PermissionPolicyPicker__RoleMenuOption",
      componentId: "sc-ed24bbc6-2"
    })`
  padding: ${(0, _v3.rem)(20)} ${(0, _v3.rem)(20)};
  display: flex;
  border-radius: ${(0, _v3.rem)(2)};
  &:hover,
  &:active {
    cursor: pointer;
    background-color: var(--vimeo-colors-background-blur);
  }
  &:first-of-type {
    padding-bottom: ${(0, _v3.rem)(15)};
  }
  &:last-of-type {
    padding-top: ${(0, _v3.rem)(15)};
  }
`,
    _v66 = _v6.default.div.withConfig({
      displayName: "PermissionPolicyPicker__RoleWrapper",
      componentId: "sc-ed24bbc6-3"
    })`
  margin-bottom: 0;
  font-size: ${(0, _v3.rem)(13)};
  display: flex;
  flex-direction: column;

  p {
    font-weight: 700;
  }
`,
    _v67 = _v6.default.div.withConfig({
      displayName: "PermissionPolicyPicker__CheckmarkIconWrapper",
      componentId: "sc-ed24bbc6-4"
    })`
  min-width: ${(0, _v3.rem)(35)};
  svg {
    width: ${(0, _v3.rem)(25)};
    margin: auto;
    margin-right: ${(0, _v3.rem)(10)};
    margin-top: ${(0, _v3.rem)(10)};
  }
`,
    _v68 = _v6.default.div.withConfig({
      displayName: "PermissionPolicyPicker__RoleButtonWrapper",
      componentId: "sc-ed24bbc6-5"
    })`
  position: relative;
  width: 100%;
  flex: 1;
`;
  _v0.s(["AddToFoldersModalBodyContent", 0, ({
    error: _v0,
    header: _v1,
    ownerId: _v2,
    searchPlaceHolderText: _v3,
    selectedFoldersTree: _v4,
    setSelectedFoldersTree: _v5,
    selectedPermissionPolicy: _v6,
    setSelectedPermissionPolicy: _v7,
    applicableFolderPolicies: _v8,
    teamUsers: _v9,
    isSelectAllMode: _v10,
    setIsSelectAllMode: _v11,
    onFolderDeselected: _v12,
    onFolderReselected: _v13,
    excludedFolderUrisSet: _v14,
    includedFolderUrisSet: _v15,
    excludedAncestorUrisSet: _v16
  }) => (0, _v1.jsx)(_v1.Fragment, {
    children: _v0 ? (0, _v1.jsx)(_v2.HStack, {
      height: (0, _v3.rem)(270),
      children: (0, _v4.translate)({
        singular: "Oops! Something went wrong!",
        dictionary: {
          es: {
            singular: "¡Ups, algo salió mal!"
          },
          "de-DE": {
            singular: "Hoppla, hier ist was schief gegangen!"
          },
          "fr-FR": {
            singular: "Oups ! Quelque chose a planté !"
          },
          "ja-JP": {
            singular: "エラーが発生しました！"
          },
          "ko-KR": {
            singular: "죄송합니다. 문제가 발생했습니다."
          },
          "pt-BR": {
            singular: "Opa! Alguma coisa deu errado!"
          },
          "zh-CN": {
            singular: "哎呀！出错了！"
          }
        }
      })
    }) : (0, _v1.jsx)(_v41, {
      ownerId: _v2,
      header: _v1,
      searchPlaceHolderText: _v3,
      selectedFoldersTree: _v4,
      setSelectedFoldersTree: _v5,
      isSelectAllMode: _v10,
      setIsSelectAllMode: _v11,
      onFolderDeselected: _v12,
      onFolderReselected: _v13,
      excludedFolderUrisSet: _v14,
      includedFolderUrisSet: _v15,
      excludedAncestorUrisSet: _v16,
      permissionPicker: (0, _v1.jsx)(_v62, {
        selectedPermissionPolicy: _v6,
        setSelectedPermissionPolicy: _v7,
        permissionPolicies: _v8,
        teamUsers: _v9
      })
    })
  })], 0), _v0.s(["getApplicableFolderPolicies", 0, _v0 => _v0.sort((_v0, _v1) => _v0.permissionLevel < _v1.permissionLevel ? 1 : -1).reduce((_v0, _v1, _v2) => {
    if ("Admin" === _v1.permissionLevel) return _v0;
    let _v3 = _v1.applicablePermissionPolicies.folder;
    if (0 === _v2) return _v3;
    let _v4 = _v0.reduce((_v0, _v1) => (_v0[_v1.uri] = 1, _v0), {});
    return _v3.filter(_v0 => _v4[_v0.uri]);
  }, [])], 0);
}