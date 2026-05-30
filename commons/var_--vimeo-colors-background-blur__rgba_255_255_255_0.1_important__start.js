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
    _v20 = _v0.i(0);
  let _v21 = _v0 => {
    let {
      isActive: _v1,
      sortDirection: _v2
    } = _v0;
    return _v1 && _v2 ? _v2 === _v13.SORT_DIRECTION.ASC ? (0, _v1.jsx)(_v20.ArrowUp, {}) : (0, _v1.jsx)(_v19.ArrowDown, {}) : null;
  };
  var _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0);
  let _v25 = _v0 => {
    let {
        sort: _v1,
        setSort: _v2,
        isActive: _v3,
        sortType: _v4,
        setDateDisplay: _v5
      } = _v0,
      _v6 = (0, _v22.usePageName)(),
      _v7 = _v3 ? {
        ..._v1,
        direction: _v1.direction === _v13.SORT_DIRECTION.ASC ? _v13.SORT_DIRECTION.DESC : _v13.SORT_DIRECTION.ASC
      } : {
        ..._v1,
        type: _v4
      };
    return (0, _v18.useColorModeValue)("var(--vimeo-colors-background-blur)", "rgba(255, 255, 255, 0.1) !important"), (0, _v1.jsx)(_v4.Flex, {
      justifyContent: "start",
      position: "relative",
      children: (0, _v1.jsx)(_v17.Button, {
        color: "text-secondary",
        variant: "tertiary",
        rightIcon: (0, _v1.jsx)(_v21, {
          isActive: _v3,
          sortDirection: _v1.direction
        }),
        size: "sm",
        onClick: () => {
          _v2(_v7), _v5 && (_v7.type === _v13.SORT_OPTION.CREATED || _v7.type === _v13.SORT_OPTION.MODIFIED) && _v5(_v7.type), _v16.BigPictureClient.sendEvent(new _v16.Event("vimeo.click", 135, {
            click_type: null,
            copy: (0, _v24.getBPSortClickEventCopy)(_v7),
            device_type: (0, _v23.getDeviceType)(),
            feature: "sort",
            location: "sort_column",
            name: "apply_sort",
            page: _v6,
            path: window.location.pathname,
            target: null,
            target_path: null,
            third_party_integration: null,
            type: "general"
          }));
        },
        children: _v0.children
      })
    });
  };
  _v0.s(["HeaderSortButton", 0, _v25], 0), _v0.s(["BokehListHeader", 0, ({
    setSort: _v0,
    sort: _v1,
    shouldShowPrivacy: _v2 = !1,
    shouldShowFileSize: _v3 = !1,
    shouldShowLocation: _v4 = !1,
    setDateDisplay: _v5,
    dateDisplay: _v6,
    ..._v7
  }) => {
    let {
        type: _v8
      } = _v1,
      [_v9, _v10] = (0, _v2.useState)(!1),
      _v11 = (0, _v2.useContext)(_v12.ViewerContext),
      _v12 = _v11?.user?.badge?.type === "staff";
    return (0, _v1.jsxs)(_v10.ContentRow, {
      listGridColumns: `${(0, _v5.rem)(32)} ${(0, _v5.rem)(150)} 8fr 0.2fr`,
      cursor: "initial",
      disableHover: !0,
      sx: _v4 ? _v15.responsiveRowSxWithLocation : _v15.responsiveRowSx,
      ..._v7,
      ...{
        display: {
          base: "none",
          sm: "grid"
        },
        backgroundColor: "fill-component",
        paddingTop: "0",
        paddingBottom: "0",
        minHeight: "2.5rem"
      },
      "aria-label": "list-table-header",
      children: [(0, _v1.jsx)(_v10.ContentRow.Column, {
        hideAtWidth: _v9.bokehTheme.breakpoints.md,
        children: (0, _v1.jsx)(_v1.Fragment, {})
      }), (0, _v1.jsx)(_v10.ContentRow.Column, {
        children: (0, _v1.jsx)(_v25, {
          isActive: _v1.type === _v13.SORT_OPTION.TITLE,
          sort: _v1,
          setSort: _v0,
          sortType: _v13.SORT_OPTION.TITLE,
          setDateDisplay: _v5,
          children: (0, _v1.jsx)(_v6.Text, {
            variant: "heading-xs",
            "data-testid": "title-column",
            children: (0, _v11.translate)({
              singular: "Title",
              dictionary: {
                es: {
                  singular: "Título"
                },
                "de-DE": {
                  singular: "Titel"
                },
                "fr-FR": {
                  singular: "Titre"
                },
                "ja-JP": {
                  singular: "タイトル"
                },
                "ko-KR": {
                  singular: "제목"
                },
                "pt-BR": {
                  singular: "Título"
                },
                "zh-CN": {
                  singular: "标题"
                }
              }
            })
          })
        })
      }), (0, _v1.jsx)(_v10.ContentRow.Column, {
        children: "--"
      }), _v4 && (0, _v1.jsx)(_v10.ContentRow.Column, {
        hideAtWidth: _v9.bokehTheme.breakpoints.xl,
        children: (0, _v1.jsx)(_v6.Text, {
          "data-testid": "location-column",
          variant: "heading-xs",
          color: "text-secondary",
          children: (0, _v11.translate)({
            singular: "Location",
            dictionary: {
              es: {
                singular: "Ubicación"
              },
              "de-DE": {
                singular: "Ort"
              },
              "fr-FR": {
                singular: "Localisation"
              },
              "ja-JP": {
                singular: "位置情報"
              },
              "ko-KR": {
                singular: "위치"
              },
              "pt-BR": {
                singular: "Local"
              },
              "zh-CN": {
                singular: "位置"
              }
            }
          })
        })
      }), (0, _v1.jsx)(_v10.ContentRow.Column, {
        hideAtWidth: _v9.bokehTheme.breakpoints.xl,
        children: _v2 && (0, _v1.jsx)(_v6.Text, {
          "data-testid": "privacy-column",
          variant: "heading-xs",
          color: "text-secondary",
          children: (0, _v11.translate)({
            singular: "Privacy",
            dictionary: {
              es: {
                singular: "Privacidad"
              },
              "de-DE": {
                singular: "Datenschutz"
              },
              "fr-FR": {
                singular: "Confidentialité "
              },
              "ja-JP": {
                singular: "プライバシー"
              },
              "ko-KR": {
                singular: "프라이버시"
              },
              "pt-BR": {
                singular: "Privacidade"
              },
              "zh-CN": {
                singular: "隐私"
              }
            }
          })
        })
      }), (0, _v1.jsx)(_v10.ContentRow.Column, {
        hideAtWidth: _v13.HIDE_FILE_SIZE_COLUMN_BREAKPOINT,
        children: _v3 && _v12 && (0, _v1.jsxs)(_v4.Flex, {
          alignItems: "center",
          children: [(0, _v1.jsx)(_v6.Text, {
            color: "text-secondary",
            variant: "heading-xs",
            noOfLines: 1,
            "data-testid": "file-size-column",
            children: (0, _v11.translate)({
              singular: "File size",
              dictionary: {
                es: {
                  singular: "Tamaño del archivo"
                },
                "de-DE": {
                  singular: "Dateigröße"
                },
                "fr-FR": {
                  singular: "Taille du fichier"
                },
                "ja-JP": {
                  singular: "ファイルサイズ"
                },
                "ko-KR": {
                  singular: "파일 크기"
                },
                "pt-BR": {
                  singular: "Tamanho do Arquivo"
                },
                "zh-CN": {
                  singular: "文件大小"
                }
              }
            })
          }), (0, _v1.jsx)(_v7.Tooltip, {
            label: (0, _v14.getVideoFileSizeHeaderTooltip)(),
            placement: "top",
            pointerEvents: "all",
            closeDelay: 0,
            maxWidth: (0, _v5.rem)(300),
            offset: [0, 8],
            closeOnScroll: !0,
            onClose: () => _v10(!1),
            isOpen: _v9,
            children: (0, _v1.jsx)(_v3.Box, {
              display: "flex",
              as: "span",
              onClick: () => _v10(!0),
              cursor: "pointer",
              color: "text-secondary",
              children: (0, _v1.jsx)(_v8.QuestionCircle, {
                boxSize: "1rem",
                marginLeft: "0.375rem"
              })
            })
          })]
        })
      }), (0, _v1.jsx)(_v10.ContentRow.Column, {
        hideAtWidth: _v9.bokehTheme.breakpoints.lg,
        children: (0, _v1.jsx)(_v25, {
          isActive: _v1.type === _v13.SORT_OPTION.CREATED || _v1.type === _v13.SORT_OPTION.MODIFIED,
          sort: _v1,
          setSort: _v0,
          sortType: _v1.type === _v13.SORT_OPTION.CREATED ? _v13.SORT_OPTION.CREATED : _v13.SORT_OPTION.MODIFIED,
          setDateDisplay: _v5,
          children: (0, _v1.jsx)(_v6.Text, {
            variant: "heading-xs",
            "data-testid": "date-column",
            children: (() => {
              switch (_v8) {
                case _v13.SORT_OPTION.CREATED:
                  return _v13.SORT_OPTION.CREATED;
                case _v13.SORT_OPTION.MODIFIED:
                  return _v13.SORT_OPTION.MODIFIED;
                default:
                  return _v6 ?? _v13.SORT_OPTION.CREATED;
              }
            })() === _v13.SORT_OPTION.CREATED ? (0, _v11.translate)({
              singular: "Added",
              dictionary: {
                es: {
                  singular: "Añadido"
                },
                "de-DE": {
                  singular: "Hinzugefügt"
                },
                "fr-FR": {
                  singular: "Ajouté"
                },
                "ja-JP": {
                  singular: "追加した日"
                },
                "ko-KR": {
                  singular: "추가됨"
                },
                "pt-BR": {
                  singular: "Adicionado(a)"
                },
                "zh-CN": {
                  singular: "已添加"
                }
              }
            }) : (0, _v11.translate)({
              singular: "Modified",
              dictionary: {
                es: {
                  singular: "Modificado"
                },
                "de-DE": {
                  singular: "Modifiziert"
                },
                "fr-FR": {
                  singular: "Modifiée"
                },
                "ja-JP": {
                  singular: "変更日"
                },
                "ko-KR": {
                  singular: "수정됨"
                },
                "pt-BR": {
                  singular: "Modificado"
                },
                "zh-CN": {
                  singular: "修改于"
                }
              }
            })
          })
        })
      }), (0, _v1.jsx)(_v10.ContentRow.Column, {
        children: "-"
      })]
    });
  }], 0);
}