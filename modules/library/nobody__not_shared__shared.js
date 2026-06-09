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
    _v13 = _v0.i(0);
  let _v14 = ({
    folder: _v0,
    children: _v1,
    row: _v2 = null
  }) => {
    if (null === _v0) return _v1;
    let _v3 = _v0.metadata?.connections?.parentFolder;
    return (0, _v1.jsx)(_v13.AnalyticsEventProvider, {
      eventData: {
        position_row: _v2,
        folder_id: _v0.uri.split("/").pop(),
        is_subfolder: !!_v3,
        folder_share_status: _v0.privacy?.view === "nobody" ? "not shared" : "shared",
        is_private_to_me: _v0?.isPrivateToUser,
        parent_folder_id: _v3 ? _v3?.uri.split("/").pop() : null,
        is_pinned: _v0.isPinned
      },
      children: _v1
    });
  };
  var _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0);
  let _v23 = ({
      children: _v0,
      name: _v1,
      icon: _v2,
      href: _v3,
      overflowMenu: _v4,
      headerSize: _v5 = "6",
      subheaderSize: _v6 = 100
    }) => {
      let _v7 = (0, _v15.useRef)(null);
      return (0, _v1.jsxs)(_v28, {
        children: [_v2 && (0, _v1.jsx)(_v30, {
          children: _v2
        }), (0, _v1.jsxs)(_v31, {
          ref: _v7,
          children: [_v1 && (0, _v1.jsx)("span", {
            style: {
              textDecoration: "none",
              display: "flex"
            },
            tabIndex: -1,
            children: (0, _v1.jsx)(_v29, {
              size: _v5,
              overflowMenu: !!_v4,
              children: _v1
            })
          }), _v0 && (0, _v1.jsx)(_v22.Text, {
            size: _v6,
            children: _v0
          })]
        }), _v4 && _v4]
      });
    },
    _v24 = _v4.default.div.withConfig({
      displayName: "Shared__LoadingWrapper",
      componentId: "sc-b988cc33-0"
    })`
  display: flex;
  flex-direction: column;
  min-width: ${(0, _v3.rem)(212)};
`;
  (0, _v4.default)(_v20.LoadingBlock).withConfig({
    displayName: "Shared__LoadingThumbnail",
    componentId: "sc-b988cc33-1"
  })`
  height: unset;

  &::after {
    content: ' ';
    display: block;
    padding-bottom: 56.25%;
  }
`;
  let _v25 = (0, _v4.default)(_v20.LoadingBlock).withConfig({
      displayName: "Shared__LoadingHeader",
      componentId: "sc-b988cc33-2"
    })`
  height: ${(0, _v3.rem)(20)};
  margin: ${(0, _v3.rem)(4)} 0;
  width: 40%;
`,
    _v26 = (0, _v4.default)(_v20.LoadingBlock).withConfig({
      displayName: "Shared__LoadingDescription",
      componentId: "sc-b988cc33-3"
    })`
  height: ${(0, _v3.rem)(20)};
  width: 30%;
`,
    _v27 = _v4.default.div.withConfig({
      displayName: "Shared__CardWrapper",
      componentId: "sc-b988cc33-4"
    })`
  width: 100%;
  min-width: ${(0, _v3.rem)(212)};
  cursor: pointer;
  text-decoration: none;
  position: relative;

  &::after {
    content: ' ';
    display: block;
    z-index: 1;
    top: ${(0, _v3.rem)(-4)};
    left: ${(0, _v3.rem)(-4)};
    position: absolute;
    width: calc(100% + ${(0, _v3.rem)(8)});
    height: calc(100% + ${(0, _v3.rem)(8)});
    pointer-events: none;
    transform: scale(0.94);
    border-radius: ${(0, _v3.rem)(6)};
    border: ${(0, _v3.rem)(1)} solid ${(0, _v3.rgba)((0, _v8.blue)(500), 0)};
    transition: 150ms ease-in-out;

    &:focus > &,
    &:focus ~ &,
    &:focus ~ div > & {
      transform: scale(1);
      border: ${(0, _v3.rem)(2)} solid ${(0, _v8.blue)(500)};
    }
  }

  &:focus {
    outline: none;

    &::after {
      transform: scale(1);
      border: ${(0, _v3.rem)(2)} solid ${(0, _v8.blue)(500)};
    }
  }
`,
    _v28 = _v4.default.div.withConfig({
      displayName: "Shared__Footer",
      componentId: "sc-b988cc33-5"
    })`
  padding: ${(0, _v3.rem)(12)} 0 ${(0, _v3.rem)(8)} 0;
  position: relative;
  display: flex;
`,
    _v29 = (0, _v4.default)(_v21.Header).withConfig({
      displayName: "Shared__HeaderStyled",
      componentId: "sc-b988cc33-6"
    })`
  margin-bottom: ${(0, _v3.rem)(2)};
  margin-right: ${_v0 => _v0.overflowMenu ? (0, _v3.rem)(50) : 0};
  word-break: break-word;
`,
    _v30 = _v4.default.span.withConfig({
      displayName: "Shared__IconStyled",
      componentId: "sc-b988cc33-7"
    })`
  margin-right: ${(0, _v3.rem)(8)};

  svg {
    width: 1rem;

    * {
      fill: ${({
      theme: _v0
    }) => _v0.content.color};
    }
  }
`,
    _v31 = _v4.default.div.withConfig({
      displayName: "Shared__Content",
      componentId: "sc-b988cc33-8"
    })`
  flex-grow: 1;
`,
    _v32 = (0, _v15.createContext)({});
  function _v33({
    onClick: _v0,
    loading: _v1,
    total: _v2 = 0,
    selected: _v3,
    href: _v4 = "",
    children: _v5,
    ..._v6
  }) {
    let [_v7, _v8] = (0, _v15.useState)(!1);
    return _v1 ? (0, _v1.jsxs)(_v24, {
      ..._v6,
      children: [(0, _v1.jsx)(_v36, {
        children: (0, _v1.jsx)(_v35, {})
      }), (0, _v1.jsx)(_v25, {}), (0, _v1.jsx)(_v26, {})]
    }) : (0, _v1.jsx)(_v32.Provider, {
      value: {
        total: _v2,
        selected: _v3,
        href: _v4
      },
      children: (0, _v1.jsx)(_v27, {
        onDragStart: _v0 => _v0.dataTransfer.effectAllowed = "none",
        onClick: _v0 => {
          _v0.stopPropagation(), _v0 && _v0(_v0), _v4 && (window.location.href = _v4);
        },
        onKeyDown: _v0 => {
          "Enter" === _v0.key && (_v0 && _v0(_v0), _v4 && (window.location.href = _v4));
        },
        tabIndex: 0,
        href: _v4,
        onMouseEnter: () => {
          _v8(!0);
        },
        onMouseLeave: () => {
          _v8(!1);
        },
        role: "group",
        ..._v6,
        children: "function" == typeof _v5 ? _v5(_v7) : _v5
      })
    });
  }
  _v33.Thumbnail = ({
    children: _v0,
    hovering: _v1 = !1,
    folderName: _v2,
    color: _v3,
    isEditable: _v4 = !1,
    thumbnailSize: _v5,
    loading: _v6 = !1,
    isEnterprise: _v7,
    topRightDecoration: _v8
  }) => (0, _v1.jsxs)(_v36, {
    color: _v3,
    hovering: _v1,
    isEnterprise: _v7,
    children: [_v6 && (0, _v1.jsx)(_v40, {
      children: (0, _v1.jsx)(_v17.Spinner, {
        size: "xl"
      })
    }), (0, _v1.jsx)(_v34, {
      folderName: _v2,
      color: _v3,
      isEditable: _v4,
      thumbnailSize: _v5,
      isEnterprise: _v7
    }), (0, _v1.jsx)(_v16.Box, {
      position: "absolute",
      top: "75",
      right: "75",
      left: "0",
      bottom: "0",
      children: _v8
    }), _v0]
  }), _v33.Content = ({
    ..._v0
  }) => {
    let {
      href: _v1
    } = (0, _v15.useContext)(_v32);
    return (0, _v1.jsx)(_v23, {
      href: _v1,
      ..._v0
    });
  };
  let _v34 = ({
      folderName: _v0,
      color: _v1,
      isEditable: _v2,
      thumbnailSize: _v3 = "med",
      isEnterprise: _v4
    }) => {
      let _v5 = "sm" === _v3 ? "6" : "2";
      return (0, _v1.jsx)(_v37, {
        children: _v4 ? (0, _v1.jsxs)(_v1.Fragment, {
          children: [_v2 && "" === _v0 ? (0, _v1.jsx)(_v39, {
            size: _v5,
            children: (0, _v7.translate)({
              singular: "Folder Name",
              dictionary: {
                es: {
                  singular: "Nombre de la carpeta"
                },
                "de-DE": {
                  singular: "Ordnername"
                },
                "fr-FR": {
                  singular: "Nom du dossier"
                },
                "ja-JP": {
                  singular: "フォルダー名"
                },
                "ko-KR": {
                  singular: "폴더 이름"
                },
                "pt-BR": {
                  singular: "Nome da pasta"
                },
                "zh-CN": {
                  singular: "文件夹名称"
                }
              }
            })
          }) : null, (0, _v1.jsx)(_v39, {
            color: _v1,
            size: _v5,
            children: _v0
          })]
        }) : (0, _v1.jsx)(_v16.Box, {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          children: (0, _v1.jsx)(_v19.FolderFilled, {
            boxSize: "sm" === _v3 ? "md" : "2xl",
            color: "text-secondary",
            opacity: "50%"
          })
        })
      });
    },
    _v35 = () => (0, _v1.jsx)(_v37, {
      children: (0, _v1.jsx)(_v38, {})
    }),
    _v36 = ({
      children: _v0,
      color: _v1,
      hovering: _v2,
      isEnterprise: _v3
    }) => {
      let _v4 = (0, _v18.useColorModeValue)("slate.400", "grayscale.800"),
        _v5 = (0, _v18.useColorModeValue)("slate.200", "grayscale.700");
      return (0, _v1.jsx)(_v16.Box, {
        position: "relative",
        transition: "300ms ease-in-out",
        transform: "translateY(0)",
        overflow: "hidden",
        _before: {
          content: '" "',
          display: "block",
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          zIndex: 10
        },
        _after: {
          content: '" "',
          display: "block",
          paddingBottom: "56.25%",
          backgroundColor: _v3 ? _v1 || _v4 : _v5,
          borderRadius: "8px",
          border: "1px solid",
          borderColor: "stroke"
        },
        _hover: {
          transform: _v2 ? `translateY(${(0, _v3.rem)(-2)})` : "none"
        },
        children: _v0
      });
    },
    _v37 = _v4.default.div.withConfig({
      displayName: "FolderCardDetails__ThumbnailSetup",
      componentId: "sc-5fb54518-0"
    })`
  position: absolute;
  align-items: center;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  border-radius: ${(0, _v3.rem)(8)};
  overflow: hidden;
  margin: 0 ${(0, _v3.rem)(16)};
`,
    _v38 = (0, _v4.default)(_v20.LoadingBlock).withConfig({
      displayName: "FolderCardDetails__StyledLoadingBlock",
      componentId: "sc-5fb54518-1"
    })`
  padding-bottom: 56.25%;
`,
    _v39 = (0, _v4.default)(_v21.Header).withConfig({
      displayName: "FolderCardDetails__FolderTitle",
      componentId: "sc-5fb54518-2"
    })`
  max-width: 90%;
  margin-bottom: 0;
  color: ${_v8.white};
  opacity: ${_v0 => "" === _v0.folderName ? .5 : 1};
  text-shadow: 0px ${(0, _v3.rem)(.96)} ${(0, _v3.rem)(3.2)} rgba(0, 0, 0, 0.06);
  white-space: pre-wrap;
`,
    _v40 = _v4.default.div.withConfig({
      displayName: "FolderCardDetails__LoadingContainer",
      componentId: "sc-5fb54518-3"
    })`
  width: 100%;
  height: 100%;
  inset: 0;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  background: rgba(0, 0, 0, 0.5);
  border-radius: ${(0, _v3.rem)(8)};
`;
  _v0.s(["FolderCardDetails", 0, _v33], 0);
  var _v41 = _v0.i(0),
    _v42 = _v0.i(0);
  let _v43 = ({
      className: _v0,
      id: _v1,
      onSettingsChange: _v2,
      onMoveSuccess: _v3,
      onMoveFailure: _v4,
      draggableItemIsHovering: _v5,
      isLoading: _v6,
      headerSize: _v7 = "5",
      subheaderSize: _v8 = 200,
      isEnterprise: _v9,
      shareEventAnalyticsOverride: _v10,
      ..._v11
    }) => {
      let _v12 = (0, _v9.useAnalyticsEvent)(),
        {
          revalidateTopLevelFolders: _v13,
          revalidateFolder: _v14,
          revalidateFolderItems: _v15,
          revalidateSetOfFolderItems: _v16
        } = (0, _v11.useRevalidate)(),
        _v17 = _v5.keyframes`
    from {
      opacity: 0;
      transform: scale(0);
    }
    to {
      opacity: 1;
      transform: scale(1.1);
    }
  `;
      return (0, _v1.jsx)(_v33, {
        className: _v0,
        id: _v1,
        total: _v11.metadata?.connections?.items?.total,
        onClick: () => {
          _v12((0, _v10.clickFolderCard)({
            customizations: _v11.settings?.color ? _v10.AnalyticsFolderSettingsCustomizations.color : null
          }));
        },
        children: _v0 => {
          let _v1;
          return (0, _v1.jsxs)(_v44, {
            href: (0, _v12.getFolderPageUriFromApiUri)(_v11.uri),
            children: [(0, _v1.jsxs)(_v45, {
              showDragAndDropStyles: _v5 || _v6,
              children: [_v5 && !_v6 && (0, _v1.jsx)(_v6.Plus, {
                boxSize: (0, _v3.rem)(30),
                position: "absolute",
                zIndex: "10",
                top: "0",
                left: "0",
                marginTop: (0, _v3.rem)(10),
                marginLeft: (0, _v3.rem)(10),
                color: "white",
                backgroundColor: "vimeoBlue.500",
                borderRadius: (0, _v3.rem)(5),
                animation: `${_v17} expand 400ms`
              }), (0, _v1.jsx)(_v33.Thumbnail, {
                hovering: _v0,
                folderName: _v11.name,
                color: _v11.settings?.color,
                loading: _v6,
                isEnterprise: _v9,
                topRightDecoration: (0, _v1.jsx)(_v42.FolderTopRightDecoration, {
                  folder: _v11,
                  shareEventAnalyticsOverride: _v10,
                  location: "card"
                })
              })]
            }), (0, _v1.jsx)(_v33.Content, {
              name: _v11.name,
              headerSize: _v7,
              subheaderSize: _v8,
              overflowMenu: (0, _v1.jsx)(_v41.FolderMenu, {
                placement: "right-start",
                folder: _v11,
                onMoveSuccess: _v3,
                onMoveFailure: _v4,
                onSettingsChange: _v2,
                onSlackIntegrationComplete: async _v0 => {
                  _v14(_v11.uri), _v16(_v0), _v11.metadata.connections.parentFolder?.uri ? _v15(_v11.metadata.connections.parentFolder.uri) : _v13();
                },
                analytics: {
                  product: "Workflow",
                  feature: "video_library",
                  location: "folder_card"
                }
              }),
              popOverAttach: [[100, 100], [0, 100]],
              children: _v5 ? (0, _v1.jsx)(_v46, {
                children: (0, _v7.translate)({
                  singular: "Move to folder",
                  dictionary: {
                    es: {
                      singular: "Mover a la carpeta"
                    },
                    "de-DE": {
                      singular: "In Ordner verschieben"
                    },
                    "fr-FR": {
                      singular: "Déplacer vers le dossier"
                    },
                    "ja-JP": {
                      singular: "フォルダーに移動"
                    },
                    "ko-KR": {
                      singular: "폴더로 이동"
                    },
                    "pt-BR": {
                      singular: "Mover para pasta"
                    },
                    "zh-CN": {
                      singular: "移至文件夹"
                    }
                  }
                })
              }) : (_v1 = _v11.metadata?.connections?.items?.total || 0, (0, _v7.translate)({
                singular: "{ITEMS} item",
                plural: "{ITEMS} items",
                count: _v1,
                replacements: {
                  ITEMS: _v1
                },
                dictionary: {
                  es: {
                    singular: "{ITEMS} elemento",
                    plural: "{ITEMS} elementos"
                  },
                  "de-DE": {
                    singular: "{ITEMS} Element",
                    plural: "{ITEMS} Elemente"
                  },
                  "fr-FR": {
                    singular: "{ITEMS} élément",
                    plural: "{ITEMS} éléments"
                  },
                  "ja-JP": {
                    singular: "{ITEMS} 件のアイテム",
                    plural: "{ITEMS} 件のアイテム"
                  },
                  "ko-KR": {
                    singular: "{ITEMS}개 항목",
                    plural: "{ITEMS}개 항목"
                  },
                  "pt-BR": {
                    singular: "{ITEMS} iten",
                    plural: "{ITEMS} itens"
                  },
                  "zh-CN": {
                    singular: "{ITEMS} 项",
                    plural: "{ITEMS} 项"
                  }
                }
              }))
            })]
          });
        }
      });
    },
    _v44 = (0, _v4.default)(_v2.default).withConfig({
      displayName: "FolderCard__StyledLink",
      componentId: "sc-21baa057-0"
    })`
  cursor: pointer;
  color: inherit;
  text-decoration: none;
  &:hover {
    color: inherit;
    text-decoration: none;
  }
`,
    _v45 = _v4.default.div.withConfig({
      displayName: "FolderCard__DropContainer",
      componentId: "sc-21baa057-1"
    })`
  position: relative;
  overflow: hidden;
  &::before {
    content: ' ';
    transition: 300ms ease-in-out;
    display: block;
    position: absolute;
    inset: 0;
    border: ${(0, _v3.rem)(4)} solid rgba(0, 0, 0, 0);
    border-color: ${_v0 => _v0.showDragAndDropStyles ? (0, _v8.blue)(500) : "rgba(0, 0, 0, 0)"};
    border-radius: ${(0, _v3.rem)(8)};
    transition: border 400ms ease;
    z-index: ${_v0 => +!!_v0.showDragAndDropStyles};
  }
`,
    _v46 = _v4.default.p.withConfig({
      displayName: "FolderCard__Subheader",
      componentId: "sc-21baa057-2"
    })`
  color: ${(0, _v8.blue)(500)};
  transition: all 400ms ease;
`;
  _v0.s(["FolderCard", 0, ({
    id: _v0,
    onSettingsChange: _v1,
    onMoveSuccess: _v2,
    onMoveFailure: _v3,
    headerSize: _v4 = "5",
    subheaderSize: _v5 = 200,
    isLoading: _v6,
    baseUrl: _v7,
    isEnterprise: _v8,
    shareEventAnalyticsOverride: _v9,
    ..._v10
  }) => (0, _v1.jsx)(_v14, {
    folder: _v10,
    children: (0, _v1.jsx)(_v43, {
      id: _v0,
      onSettingsChange: _v1,
      onMoveSuccess: _v2,
      onMoveFailure: _v3,
      isLoading: _v6,
      headerSize: _v4,
      subheaderSize: _v5,
      baseUrl: _v7,
      isEnterprise: _v8,
      shareEventAnalyticsOverride: _v9,
      ..._v10
    })
  })], 0);
}