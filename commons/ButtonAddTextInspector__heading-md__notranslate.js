{
  "use strict";

  _v0.s(["ButtonAddTextInspector", () => _v253], 0), _v0.s(["default", () => _v229], 0), _v0.s(["default", () => _v200], 0), _v0.s(["default", () => _v88], 0), _v0.s(["default", () => _v76], 0);
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
    _v34 = _v0.i(0),
    _v35 = _v0.i(0),
    _v36 = _v0.i(0),
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
    _v48 = _v0.i(0);
  let _v49 = ({
    active: _v0,
    onApply: _v1,
    onDismiss: _v2,
    templateName: _v3,
    title: _v4,
    inputLabel: _v5,
    inputMaxLength: _v6
  }) => {
    let [_v7, _v8] = (0, _v2.useState)(_v3),
      [_v9, _v10] = (0, _v2.useState)((0, _v48.validateTemplateName)(_v3));
    return (0, _v1.jsxs)(_v39.Modal, {
      isOpen: _v0,
      onClose: _v2,
      children: [(0, _v1.jsx)(_v45.ModalOverlay, {}), (0, _v1.jsxs)(_v42.ModalContent, {
        children: [(0, _v1.jsxs)(_v44.ModalHeader, {
          children: [(0, _v1.jsx)(_v47.Text, {
            variant: "heading-md",
            children: _v4
          }), (0, _v1.jsx)(_v41.ModalCloseButton, {
            onClick: _v2
          })]
        }), (0, _v1.jsx)(_v40.ModalBody, {
          children: (0, _v1.jsxs)(_v36.FormControl, {
            isInvalid: !_v9,
            children: [_v5 && (0, _v1.jsx)(_v37.FormLabel, {
              size: "sm",
              fontWeight: "400",
              marginBottom: (0, _v46.rem)(10),
              children: _v5
            }), (0, _v1.jsx)(_v38.Input, {
              translate: "no",
              className: "notranslate",
              placeholder: _v3,
              maxLength: _v6,
              value: _v7,
              onChange: _v0 => {
                let _v1 = _v0.target.value;
                _v8(_v1), _v10((0, _v48.validateTemplateName)(_v1));
              },
              autoFocus: !0
            })]
          })
        }), (0, _v1.jsxs)(_v43.ModalFooter, {
          children: [(0, _v1.jsx)(_v35.Button, {
            variant: "secondary",
            onClick: _v2,
            children: (0, _v8.translate)({
              singular: "Cancel",
              dictionary: {
                es: {
                  singular: "Cancelar"
                },
                "de-DE": {
                  singular: "Abbrechen"
                },
                "fr-FR": {
                  singular: "Annuler"
                },
                "ja-JP": {
                  singular: "キャンセル"
                },
                "ko-KR": {
                  singular: "취소"
                },
                "pt-BR": {
                  singular: "Cancelar"
                },
                "zh-CN": {
                  singular: "取消"
                }
              }
            })
          }), (0, _v1.jsx)(_v35.Button, {
            isDisabled: !_v9,
            variant: "primary",
            onClick: () => _v1(_v7),
            children: (0, _v8.translate)({
              singular: "Apply",
              dictionary: {
                es: {
                  singular: "Aplicar"
                },
                "de-DE": {
                  singular: "Anwenden"
                },
                "fr-FR": {
                  singular: "Appliquer"
                },
                "ja-JP": {
                  singular: "適用する"
                },
                "ko-KR": {
                  singular: "적용"
                },
                "pt-BR": {
                  singular: "Aplicar"
                },
                "zh-CN": {
                  singular: "应用"
                }
              }
            })
          })]
        })]
      })]
    });
  };
  _v0.s(["RenameTemplateModal", 0, _v49], 0);
  var _v50 = _v0.i(0),
    _v51 = _v0.i(0),
    _v52 = _v0.i(0),
    _v53 = _v0.i(0),
    _v54 = _v0.i(0),
    _v55 = _v0.i(0),
    _v56 = _v0.i(0),
    _v57 = _v0.i(0),
    _v58 = _v0.i(0),
    _v59 = _v0.i(0),
    _v60 = _v0.i(0),
    _v61 = _v0.i(0);
  let _v62 = "inprogress";
  var _v63 = _v0.i(0),
    _v64 = _v0.i(0),
    _v65 = _v0.i(0);
  let _v66 = ({
    item: _v0,
    index: _v1,
    width: _v2,
    isLoading: _v3,
    orientation: _v4,
    videoDuration: _v5,
    onClick: _v6,
    onDelete: _v7,
    onRename: _v8,
    onExpand: _v9
  }) => {
    let [_v10, _v11] = (0, _v2.useState)(!1),
      [_v12] = (0, _v22.useLazyFetchTemplateQuery)(),
      {
        data: _v13,
        error: _v14
      } = (0, _v22.useFetchTemplateProgressQuery)({
        vsid: _v0.vsid,
        jobId: _v0.jobId
      }, {
        pollingInterval: 0,
        skip: _v0.status !== _v62 || _v10
      }),
      _v15 = _v13 && "teamTemplate" in _v13 ? _v13?.teamTemplate : _v0,
      {
        exitEditTeamTemplateMode: _v16
      } = (0, _v18.useEditTeamTemplate)(),
      {
        alertChangesLostEditTeamTemplate: _v17
      } = (0, _v17.useAlerts)(),
      {
        hasCreateTeamTemplateEdit: _v18,
        hasCreateTeamTemplateApply: _v19
      } = (0, _v2.useContext)(_v16.PermissionsContext),
      _v20 = new Date(0 * Number(_v15.updatedDate)).toLocaleDateString("en-us", {
        year: "numeric",
        month: "short",
        day: "numeric"
      }),
      _v21 = [{
        onClick: () => {
          let _v0 = async () => {
            _v60.default.isEditingTeamTemplate && _v16(), await _v6(_v15.hash, !0);
          };
          _v5 > 0 ? _v17({
            onPrimaryClick: _v0
          }) : _v0();
        },
        label: (0, _v8.translate)({
          singular: "Edit template",
          dictionary: {
            es: {
              singular: "Editar plantilla"
            },
            "de-DE": {
              singular: "Template bearbeiten"
            },
            "fr-FR": {
              singular: "Modifier le modèle"
            },
            "ja-JP": {
              singular: "テンプレートを編集"
            },
            "ko-KR": {
              singular: "템플릿 편집"
            },
            "pt-BR": {
              singular: "Editar modelo"
            },
            "zh-CN": {
              singular: "编辑模板"
            }
          }
        }),
        isDisabled: !1
      }, {
        onClick: () => {
          _v8(_v15);
        },
        label: (0, _v8.translate)({
          singular: "Rename",
          dictionary: {
            es: {
              singular: "Cambiar de nombre"
            },
            "de-DE": {
              singular: "Neu benennen"
            },
            "fr-FR": {
              singular: "Renommer"
            },
            "ja-JP": {
              singular: "名前を変更"
            },
            "ko-KR": {
              singular: "이름 변경"
            },
            "pt-BR": {
              singular: "Renomear"
            },
            "zh-CN": {
              singular: "重新命名"
            }
          }
        }),
        isDisabled: !1
      }, {
        onClick: () => {
          _v7(_v15);
        },
        label: (0, _v8.translate)({
          singular: "Delete",
          dictionary: {
            es: {
              singular: "Eliminar"
            },
            "de-DE": {
              singular: "Löschen"
            },
            "fr-FR": {
              singular: "Supprimer"
            },
            "ja-JP": {
              singular: "削除"
            },
            "ko-KR": {
              singular: "삭제"
            },
            "pt-BR": {
              singular: "Excluir"
            },
            "zh-CN": {
              singular: "删除"
            }
          }
        }),
        status: "negative",
        isDisabled: !1
      }],
      _v22 = _v18 && _v15.status !== _v62 && !_v3,
      _v23 = (0, _v2.useCallback)(_v0 => {
        _v12({
          hash: _v0,
          protocolVersion: !0
        }, !0);
      }, [_v12]);
    return (0, _v2.useEffect)(() => {
      _v14 && _v11(!0), _v13 && "lastError" in _v13 && _v11(!0);
    }, [_v13, _v14]), (0, _v1.jsx)(_v65.Box, {
      id: _v15.hash,
      gridStyleType: _v4,
      videoUrl: _v15.resultUrl,
      imageUrl: _v15.thumbnail,
      title: _v15.templateName,
      subtitle: _v20,
      overlay: _v15.status === _v62 || _v3 ? (0, _v1.jsx)(_v63.Loader, {}) : void 0,
      duration: _v15.duration,
      width: _v2,
      isActive: !1,
      ...(_v19 && _v15.status !== _v62 && !_v3 && !_v10 && {
        isShowPlusButton: !0,
        onClick: () => _v6(_v15.hash),
        onMouseDown: () => _v23(_v15.hash),
        draggableData: {
          id: _v15.hash,
          data: _v15,
          type: _v61.DnDItemType.GRID_ELEMENT_TEMPLATE,
          onElementDropped: () => {
            _v6(_v15.hash);
          }
        },
        onExpand: _v0 => {
          _v23(_v15.hash), _v9 && _v9(_v0), (0, _v32.sendTrackExpandTemplate)({
            format: _v4,
            selectionName: _v15.templateName,
            selectionId: String(_v15.vitid),
            feature: _v29.FEATURE.TEAM_TEMPLATES
          });
        }
      }),
      testid: "templates-category",
      expandedItemData: {
        id: _v15.hash,
        title: _v15.templateName,
        date: _v20,
        type: _v59.ExpandType.MEDIA,
        videoUrl: _v15.resultUrl || _v15.videoUrl || _v15.vimeoVideoUrl,
        imageUrl: _v15.thumbnail,
        width: _v2,
        orientation: _v4,
        isLoading: _v15.status === _v62,
        disabled: _v15.status === _v62 || _v3
      },
      ...(_v22 && {
        menuData: _v21
      }),
      ...(_v10 && {
        overlay: (0, _v1.jsxs)(_v53.Box, {
          children: [(0, _v1.jsx)(_v64.Overlay, {
            backdropFilter: "blur(4px)",
            backgroundColor: "var(--vimeo-colors-fill-page-overlay)",
            dataTestId: _v58.testIds.loader,
            icon: (0, _v1.jsx)(_v56.CircleExclamationFilled, {
              color: "status-destructive-primary"
            })
          }), (0, _v1.jsx)(_v55.Tooltip, {
            label: (0, _v8.translate)({
              singular: "Remove",
              dictionary: {
                es: {
                  singular: "Eliminar"
                },
                "de-DE": {
                  singular: "Entfernen"
                },
                "fr-FR": {
                  singular: "Supprimer"
                },
                "ja-JP": {
                  singular: "削除"
                },
                "ko-KR": {
                  singular: "제거"
                },
                "pt-BR": {
                  singular: "Remover"
                },
                "zh-CN": {
                  singular: "移除"
                }
              }
            }),
            placement: "top",
            children: (0, _v1.jsx)(_v54.IconButton, {
              "aria-label": "delete icon button",
              icon: (0, _v1.jsx)(_v57.TrashBin, {}),
              size: "xs",
              variant: "blur",
              position: "absolute",
              right: "0",
              margin: "4px",
              onClick: () => _v7(_v15)
            })
          })]
        })
      })
    }, `${_v1}_${_v15.hash}`);
  };
  var _v67 = _v0.i(0);
  let _v68 = _v67.default.div.withConfig({
      displayName: "TeamTemplatesInspector.style__DropdownOrientationContainer",
      componentId: "sc-925f1e01-0"
    })`
  padding-bottom: 16px;
`,
    _v69 = () => {
      let _v0 = (0, _v27.useAppDispatch)(),
        _v1 = (0, _v27.useAppSelector)(_v24.durationSelector),
        _v2 = (0, _v27.useAppSelector)(_v24.orientationSelector),
        _v3 = (0, _v27.useAppSelector)(_v25.teamTemplatesOrientationSelector) ?? _v2,
        _v4 = (0, _v27.useAppSelector)(_v24.storyboardIdSelector),
        {
          trackEditorTemplateSelected: _v5
        } = (0, _v13.useEditorTracking)(),
        _v6 = (0, _v27.useAppSelector)(_v23.openModalIdSelector),
        _v7 = Object.values(_v30.Orientation),
        {
          hasCreateTeamTemplateEdit: _v8
        } = (0, _v2.useContext)(_v16.PermissionsContext),
        {
          enterEditTeamTemplateMode: _v9
        } = (0, _v18.useEditTeamTemplate)(),
        [_v10, _v11] = (0, _v22.useLazyFetchTeamTemplatesQuery)(),
        {
          data: _v12,
          isLoading: _v13,
          isFetching: _v14
        } = _v11,
        [_v15] = (0, _v22.useLazyFetchTemplateQuery)(),
        [_v16] = (0, _v22.useDeleteTemplateMutation)(),
        [_v17] = (0, _v22.useRenameTemplateMutation)(),
        [_v18, _v19] = (0, _v2.useState)([]),
        [_v20, _v21] = (0, _v2.useState)(),
        _v22 = _v14.MODAL_IDS.renameTemplateModal,
        {
          addTemplate: _v23
        } = (0, _v21.useTemplates)(),
        {
          alertUseAllScenes: _v24,
          alertDeleteTeamTemplate: _v25
        } = (0, _v17.useAlerts)(),
        {
          changeInvalidFonts: _v26
        } = (0, _v20.useFontDeprecation)(),
        _v27 = (0, _v2.useRef)(null),
        _v28 = (0, _v2.useRef)(0),
        _v29 = (_v0, _v1) => _v0?.filter(_v0 => _v31.OrientationMap[_v0.ornt] === _v1) ?? [],
        [_v30, _v31] = (0, _v2.useState)(_v29(_v12?.items, _v3)),
        _v32 = !_v13 && !_v14 && _v12 && (!_v12.items || 0 === _v30.length),
        _v33 = (0, _v2.useCallback)(_v0 => {
          _v25({
            templateName: _v0.templateName,
            onPrimaryClick: () => {
              _v16({
                templateId: _v0.vitid
              }).unwrap().then(() => {
                _v31(_v0 => _v0.filter(_v0 => _v0.vsid !== _v0.vsid)), _v19(_v0 => _v0.filter(_v0 => _v0 !== _v0.vsid));
              }), _v19(_v0 => [..._v0, _v0.vsid]);
            }
          });
        }, [_v25, _v16]),
        _v34 = (0, _v2.useCallback)(_v0 => {
          _v0((0, _v23.setOpenModalIdAction)(_v0 ? _v22 : ""));
        }, [_v0, _v22]),
        _v35 = (0, _v2.useCallback)(_v0 => {
          _v34(!0), _v21(_v0);
        }, [_v34]),
        _v36 = (0, _v2.useCallback)(async (_v0, _v1) => {
          let _v2 = async () => {
            _v0((0, _v26.setIsTemplateBeingAddedAction)(!0));
            let _v0 = await _v15({
              hash: _v0,
              protocolVersion: !0
            }, !0).unwrap().then(_v0 => _v26(_v0, !0));
            await _v23(_v0), _v0((0, _v26.setIsTemplateBeingAddedAction)(!1));
            let _v1 = _v30.find(_v0 => _v0.hash === _v0);
            _v1 && ((0, _v32.sendTrackSelectTemplate)({
              format: _v3,
              selectionName: _v1.templateName,
              selectionId: String(_v1.vitid),
              feature: _v29.FEATURE.TEAM_TEMPLATES
            }), _v5({
              editorSessionId: _v4,
              editorTemplateCategory: "brand",
              templateOrientation: _v1.ornt
            }));
          };
          if (_v1) {
            let _v0 = await _v15({
              hash: _v0
            }, !0).unwrap().then(_v0 => _v26(_v0, !0));
            _v9(_v0), _v23(_v0, _v3, !0);
          } else {
            if (_v1 > 0) return _v24(_v2);
            _v2();
          }
        }, [_v0, _v15, _v26, _v23, _v30, _v3, _v9, _v1, _v24, _v5, _v4]),
        _v37 = (0, _v2.useCallback)(_v0 => {
          _v0((0, _v25.setTeamTemplatesOrientationAction)(_v0)), (0, _v32.sendTrackChangeTemplatesSearchOrientation)({
            selectionName: _v0,
            feature: _v29.FEATURE.TEAM_TEMPLATES
          });
        }, [_v0]);
      (0, _v19.default)(() => {
        (async () => {
          await _v0(_v22.templatesApi.util.upsertQueryData("fetchTeamTemplates", {
            limit: _v15.TEMPLATES_PER_REQUEST,
            offset: _v28.current * _v15.TEMPLATES_PER_REQUEST,
            keywords: _v15.TEAM_TEMPLATES
          }, {
            gotMore: !1,
            items: [],
            currPage: 0,
            numPages: 0,
            status: ""
          })), _v28.current = 0, _v10({
            limit: _v15.TEMPLATES_PER_REQUEST,
            offset: _v28.current * _v15.TEMPLATES_PER_REQUEST,
            keywords: _v15.TEAM_TEMPLATES
          });
        })();
      }), (0, _v2.useEffect)(() => {
        _v31(_v29(_v12?.items, _v3));
      }, [_v12, _v3]);
      let _v38 = (0, _v2.useCallback)((_v0, _v1, _v2) => {
        let _v3 = _v30[_v0];
        return _v3 ? (0, _v1.jsx)(_v66, {
          item: _v3,
          index: _v0,
          width: _v1,
          isLoading: _v18.includes(_v3.vsid),
          orientation: _v3,
          videoDuration: _v1,
          onExpand: _v2,
          onClick: _v36,
          onDelete: _v33,
          onRename: _v35
        }) : (0, _v1.jsx)(_v1.Fragment, {});
      }, [_v36, _v33, _v35, _v30, _v18, _v3, _v1]);
      return _v32 ? (0, _v1.jsxs)(_v34.InspectorPaddedRow, {
        padLeft: !1,
        padRight: !1,
        children: [(0, _v1.jsx)(_v68, {
          children: (0, _v1.jsx)(_v50.SelectBorderless, {
            size: "sm",
            value: [_v3],
            style: {
              width: "75px",
              marginLeft: "16px",
              marginTop: "8px"
            },
            onValueChange: _v0 => _v37(_v0.value[0]),
            items: _v7.map(_v0 => ({
              value: _v0,
              label: _v31.OrientationRatioString[_v0]
            }))
          })
        }), (0, _v1.jsx)(_v51.default, {
          type: _v28.EmptyInspectorView.TEAM_TEMPLATES,
          title: (0, _v8.translate)({
            singular: "No team templates",
            dictionary: {
              es: {
                singular: "No hay plantillas del equipo"
              },
              "de-DE": {
                singular: "Keine Teamvorlagen"
              },
              "fr-FR": {
                singular: "Aucun modèle d'équipe"
              },
              "ja-JP": {
                singular: "チームテンプレートなし"
              },
              "ko-KR": {
                singular: "팀 템플릿이 없습니다."
              },
              "pt-BR": {
                singular: "Nenhum modelo de equipe"
              },
              "zh-CN": {
                singular: "没有团队模板"
              }
            }
          }),
          text: _v8 ? (0, _v8.translate)({
            singular: "Team templates you save will appear here and be available for your team to use",
            dictionary: {
              es: {
                singular: "Las plantillas del equipo que guarde aparecerán aquí y estarán disponibles para que las use su equipo"
              },
              "de-DE": {
                singular: "Von Ihnen gespeicherte Teamvorlagen werden hier angezeigt und sind für Ihr Team verfügbar"
              },
              "fr-FR": {
                singular: "Les modèles d'équipe que vous enregistrez apparaîtront ici et pourront être utilisés par votre équipe."
              },
              "ja-JP": {
                singular: "保存したチームテンプレートはここに表示され、チームが使用できるようになります"
              },
              "ko-KR": {
                singular: "저장한 팀 템플릿은 여기에 표시되며 팀에서 사용할 수 있습니다."
              },
              "pt-BR": {
                singular: "Os modelos de equipe que você salvar aparecerão aqui e ficarão disponíveis para sua equipe usar"
              },
              "zh-CN": {
                singular: "您保存的团队模板将出现在这里，供您的团队使用"
              }
            }
          }) : (0, _v8.translate)({
            singular: "To use team templates, ask an admin to add content",
            dictionary: {
              es: {
                singular: "Para usar plantillas del equipo, pídale a un administrador que agregue contenido"
              },
              "de-DE": {
                singular: "Um Teamvorlagen zu verwenden, bitten Sie einen Administrator, Inhalte hinzuzufügen"
              },
              "fr-FR": {
                singular: "Pour utiliser les modèles d'équipe, demandez à un administrateur d'ajouter du contenu."
              },
              "ja-JP": {
                singular: "チームテンプレートを使用するには、管理者にコンテンツの追加を依頼してください"
              },
              "ko-KR": {
                singular: "팀 템플릿을 사용하려면 관리자에게 콘텐츠 추가를 요청하세요."
              },
              "pt-BR": {
                singular: "Para usar os modelos de equipe, peça a um administrador para adicionar conteúdo"
              },
              "zh-CN": {
                singular: "要使用团队模板，请让管理员添加内容"
              }
            }
          })
        })]
      }) : (0, _v1.jsxs)(_v1.Fragment, {
        children: [_v20 && (0, _v1.jsx)(_v49, {
          active: _v22 === _v6,
          onDismiss: () => _v34(!1),
          onApply: _v0 => {
            _v20 && (_v17({
              title: _v0,
              templateId: _v20.vsid
            }).unwrap().then(() => {
              _v31(_v0 => _v0.map(_v0 => _v0.vsid === _v20.vsid ? {
                ..._v0,
                templateName: _v0
              } : _v0)), _v19(_v0 => _v0.filter(_v0 => _v0 !== _v20.vsid));
            }), _v19(_v0 => [..._v0, _v20.vsid]), _v34(!1), _v21(null));
          },
          templateName: _v20.templateName,
          title: (0, _v8.translate)({
            singular: "Rename template",
            dictionary: {
              es: {
                singular: "Cambiar el nombre de la plantilla"
              },
              "de-DE": {
                singular: "Vorlage umbenennen"
              },
              "fr-FR": {
                singular: "Renommer le modèle"
              },
              "ja-JP": {
                singular: "テンプレートの名前を変更"
              },
              "ko-KR": {
                singular: "템플릿 이름 변경"
              },
              "pt-BR": {
                singular: "Renomear modelo"
              },
              "zh-CN": {
                singular: "重命名模板"
              }
            }
          }),
          inputLabel: (0, _v8.translate)({
            singular: "Template name",
            dictionary: {
              es: {
                singular: "Nombre de la plantilla"
              },
              "de-DE": {
                singular: "Name der Vorlage"
              },
              "fr-FR": {
                singular: "Nom du modèle"
              },
              "ja-JP": {
                singular: "テンプレート名"
              },
              "ko-KR": {
                singular: "템플릿 이름"
              },
              "pt-BR": {
                singular: "Nome do modelo"
              },
              "zh-CN": {
                singular: "模板名称"
              }
            }
          }),
          inputMaxLength: 30
        }), (0, _v1.jsxs)(_v52.TemplatesInspectorContainer, {
          padRight: !1,
          paddingTop: 8,
          children: [(0, _v1.jsx)(_v68, {
            children: (0, _v1.jsx)(_v50.SelectBorderless, {
              size: "sm",
              value: [_v3],
              style: {
                width: "80px"
              },
              onValueChange: _v0 => _v37(_v0.value[0]),
              items: _v7.map(_v0 => ({
                value: _v0,
                label: _v31.OrientationRatioString[_v0]
              }))
            })
          }), _v3 !== _v2 && (0, _v1.jsx)(_v52.AlertContainer, {
            paddingLeft: "0",
            paddingTop: "0",
            paddingBottom: "10px",
            children: (0, _v1.jsx)(_v10.Alert, {
              status: "info",
              marginBottom: 0,
              paddingRight: 0,
              "data-testid": "ratio-warning",
              children: (0, _v1.jsxs)(_v11.AlertDescription, {
                marginTop: 0,
                children: [(0, _v1.jsx)("span", {
                  children: (0, _v8.translate)({
                    singular: "These templates have a {RATIO} ratio.\n",
                    replacements: {
                      RATIO: _v31.OrientationRatioString[_v3]
                    },
                    dictionary: {
                      es: {
                        singular: "Estas plantillas tienen una proporción de {RATIO}.\n"
                      },
                      "de-DE": {
                        singular: "Diese Vorlagen haben ein {RATIO}-Verhältnis.\n"
                      },
                      "fr-FR": {
                        singular: "Ces modèles ont un ratio de {RATIO}.\n"
                      },
                      "ja-JP": {
                        singular: "これらのテンプレートの比率は{RATIO}です。\n"
                      },
                      "ko-KR": {
                        singular: "이 템플릿에는 {RATIO} 비율이 있습니다.\n"
                      },
                      "pt-BR": {
                        singular: "Esses modelos são de {RATIO}.\n"
                      },
                      "zh-CN": {
                        singular: "这些模板的比例为 {RATIO}。\n"
                      }
                    }
                  })
                }), (0, _v1.jsx)(_v12.Link, {
                  variant: "minimal",
                  cursor: "pointer",
                  onClick: () => {
                    _v37(_v2);
                  },
                  children: (0, _v8.translate)({
                    singular: "View templates that fit this video's ratio",
                    dictionary: {
                      es: {
                        singular: "Ver plantillas que se ajusten a la proporción de este video"
                      },
                      "de-DE": {
                        singular: "Vorlagen ansehen, die dem Verhältnis dieses Videos entsprechen"
                      },
                      "fr-FR": {
                        singular: "Afficher les modèles qui correspondent au format de cette vidéo"
                      },
                      "ja-JP": {
                        singular: "この動画の比率に合ったテンプレートを表示"
                      },
                      "ko-KR": {
                        singular: "이 동영상 비율에 맞는 템플릿 보기"
                      },
                      "pt-BR": {
                        singular: "Veja os modelos que se adaptam à proporção deste vídeo"
                      },
                      "zh-CN": {
                        singular: "查看适合此视频比例的模板"
                      }
                    }
                  })
                })]
              })
            })
          }), (0, _v1.jsx)(_v33.default, {
            ref: _v27,
            itemRenderer: _v38,
            styleType: _v3,
            items: _v30,
            loadMoreItems: () => {
              _v12?.gotMore && (_v28.current++, _v10({
                limit: _v15.TEMPLATES_PER_REQUEST,
                offset: _v28.current * _v15.TEMPLATES_PER_REQUEST,
                keywords: _v15.TEAM_TEMPLATES
              }));
            },
            isLoading: _v14,
            onCTA: _v36,
            CTAText: (0, _v8.translate)({
              singular: "Add to timeline",
              dictionary: {
                es: {
                  singular: "Agregar a la línea de tiempo"
                },
                "de-DE": {
                  singular: "Zur Chronik hinzufügen"
                },
                "fr-FR": {
                  singular: "Ajouter à la chronologie"
                },
                "ja-JP": {
                  singular: "タイムラインに追加"
                },
                "ko-KR": {
                  singular: "타임라인에 추가"
                },
                "pt-BR": {
                  singular: "Adicionar à linha do tempo"
                },
                "zh-CN": {
                  singular: "添加到时间线"
                }
              }
            }),
            maxItemsPerRow: 3
          })]
        })]
      });
    };
  var _v70 = _v0.i(0),
    _v71 = _v0.i(0),
    _v72 = _v0.i(0),
    _v73 = _v0.i(0),
    _v74 = _v0.i(0),
    _v75 = _v0.i(0);
  let _v76 = () => {
    let _v0 = (0, _v27.useAppDispatch)(),
      _v1 = (0, _v27.useAppSelector)((0, _v70.inspectorDataSelector)(_v72.InspectorType.TEMPLATES)),
      [_v2, _v3] = (0, _v2.useState)(),
      {
        hasCreateTeamTemplateView: _v4
      } = (0, _v2.useContext)(_v16.PermissionsContext),
      _v5 = {
        [_v72.TemplatesInspectorTabType.LIBRARY]: {
          label: (0, _v8.translate)({
            singular: "Explore",
            dictionary: {
              es: {
                singular: "Explora"
              },
              "de-DE": {
                singular: "Entdecken"
              },
              "fr-FR": {
                singular: "Explorer"
              },
              "ja-JP": {
                singular: "検索"
              },
              "ko-KR": {
                singular: "탐색"
              },
              "zh-CN": {
                singular: "探索"
              }
            }
          }),
          content: (0, _v1.jsx)(_v9.default, {
            top: !0,
            setSelectedTemplateHash: _v3,
            selectedTemplateHash: _v2
          })
        },
        ...(_v4 && {
          [_v72.TemplatesInspectorTabType.TEAM]: {
            label: (0, _v8.translate)({
              singular: "Team templates",
              dictionary: {
                es: {
                  singular: "Plantillas del equipo"
                },
                "de-DE": {
                  singular: "Team-Vorlagen"
                },
                "fr-FR": {
                  singular: "Modèles d'équipe"
                },
                "ja-JP": {
                  singular: "チームテンプレート"
                },
                "ko-KR": {
                  singular: "팀 템플릿"
                },
                "pt-BR": {
                  singular: "Modelos de equipe"
                },
                "zh-CN": {
                  singular: "团队模板"
                }
              }
            }),
            content: (0, _v1.jsx)(_v69, {})
          }
        })
      },
      _v6 = Object.keys(_v5),
      _v7 = _v6.indexOf(_v1.tab),
      _v8 = 1 === Object.entries(_v5).length;
    return (0, _v1.jsxs)(_v73.Inspector, {
      children: [(0, _v1.jsx)(_v75.InspectorHeader, {
        title: (0, _v8.translate)({
          singular: "Templates",
          dictionary: {
            es: {
              singular: "Plantillas"
            },
            "de-DE": {
              singular: "Vorlagen"
            },
            "fr-FR": {
              singular: "Modèles"
            },
            "ja-JP": {
              singular: "テンプレート"
            },
            "ko-KR": {
              singular: "템플릿"
            },
            "pt-BR": {
              singular: "Modelos"
            },
            "zh-CN": {
              singular: "模板"
            }
          }
        })
      }), (0, _v1.jsx)(_v74.InspectorBody, {
        children: (0, _v1.jsxs)(_v4.Tabs, {
          index: _v7,
          height: "100%",
          variant: "soft",
          onChange: _v0 => {
            let _v1, _v2;
            return _v2 = (_v1 = _v6[_v0]) === _v72.TemplatesInspectorTabType.LIBRARY ? _v71.ACTION_STATE.LIBRARY : _v71.ACTION_STATE.TEAM_TEMPLATES, void ((0, _v32.sendTrackTemplatesTabSelection)(_v2), _v0((0, _v70.updateInspectorDataAction)({
              inspectorType: _v72.InspectorType.TEMPLATES,
              data: {
                tab: _v1
              }
            })));
          },
          isLazy: !0,
          display: "flex",
          flexDirection: "column",
          size: "sm",
          children: [!_v8 && (0, _v1.jsx)(_v34.InspectorPaddedRow, {
            marginTop: !1,
            padLeft: !0,
            padRight: !0,
            children: !_v2 && (0, _v1.jsxs)(_v5.TabList, {
              paddingBottom: 0,
              children: [Object.values(_v5).map(({
                label: _v0
              }) => (0, _v1.jsx)(_v3.Tab, {
                marginBottom: "4px",
                children: _v0
              }, _v0)), (0, _v1.jsx)(_v4.TabIndicator, {})]
            })
          }), (0, _v1.jsx)(_v7.TabPanels, {
            height: "100%",
            children: Object.entries(_v5).map(([_v0, _v1]) => (0, _v1.jsx)(_v6.TabPanel, {
              padding: 0,
              height: "100%",
              minWidth: 0,
              id: _v0,
              "data-testid": `templates-inspector-active-tab-${_v1.label.toLowerCase()}`,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              children: _v1.content
            }, _v1.label))
          })]
        })
      })]
    });
  };
  var _v77 = _v0.i(0),
    _v78 = _v0.i(0),
    _v79 = _v0.i(0),
    _v80 = _v0.i(0),
    _v81 = _v0.i(0),
    _v82 = _v0.i(0),
    _v83 = _v0.i(0),
    _v84 = _v0.i(0),
    _v85 = _v0.i(0),
    _v86 = _v0.i(0),
    _v87 = _v0.i(0);
  let _v88 = () => {
    let _v0 = (0, _v27.useAppDispatch)(),
      _v1 = (0, _v27.useAppSelector)(_v82.selectedElementsIdsSelector),
      _v2 = (0, _v27.useAppSelector)(_v83.textAnimationsMetadataSelector),
      _v3 = (0, _v27.useAppSelector)(_v0 => _v0.featureFlags.useTestAssets?.value),
      _v4 = (0, _v27.useAppSelector)(_v82.firstSelectedElementSelector),
      _v5 = (0, _v2.useRef)(""),
      _v6 = (0, _v2.useRef)(null),
      _v7 = (0, _v2.useRef)(0),
      _v8 = (0, _v2.useRef)(0),
      {
        play: _v9,
        pause: _v10,
        seek: _v11
      } = (0, _v80.useDragonfly)(),
      {
        colorMode: _v12
      } = (0, _v79.useColorMode)(),
      {
        getStoryboardMetadata: _v13
      } = (0, _v81.useStoryboardMetadata)(),
      [_v14, _v15] = (0, _v2.useState)(null),
      _v16 = (0, _v2.useMemo)(() => Object.values(_v2).sort((_v0, _v1) => _v0.order - _v1.order).filter(_v0 => _v3 ? !_v0.isHidden : !_v0.isHidden && !_v0.isTest), [_v2, _v3]),
      _v17 = (0, _v2.useMemo)(() => {
        let _v0 = {};
        return _v16.forEach(_v0 => {
          let _v1 = (0, _v84.getSubAnimationWithDirections)(_v0.name, _v2, _v16);
          _v0[_v0.name] = _v0.name, _v1?.map(_v0 => {
            _v0[_v0] = _v0.name;
          });
        }), _v0;
      }, [_v2, _v16]),
      _v18 = (0, _v2.useCallback)((_v0, _v1) => {
        clearTimeout(_v7.current), clearTimeout(_v8.current), _v10(), _v11(_v4.compositionTiming.start), _v7.current = setTimeout(() => {
          _v9(), _v8.current = setTimeout(() => {
            _v10();
          }, Math.min(0, (_v4.compositionTiming.end - _v4.compositionTiming.start) * 0) - 100);
        }, 100);
        let _v2 = _v2[_v0];
        if (_v4) {
          _v11(_v4.compositionTiming.start);
          let _v0 = _v17[_v4.textStyleId] === _v17[_v0],
            _v1 = _v1 === _v5.current;
          _v0 || _v1 || _v15(null);
          let _v2 = _v13()?.userBgAlphaSelection.includes(_v1[0]);
          _v0((0, _v24.updateElementAction)({
            ceId: _v1[0],
            element: {
              textStyleId: _v2.name,
              bgAlpha: _v2 ? _v4.bgAlpha : _v2.metaData.defaults.bgAlpha
            }
          }));
        }
      }, [_v2, _v4, _v0, _v13, _v10, _v9, _v11, _v1, _v17]),
      _v19 = (_v0, _v1, _v2) => {
        let _v3 = _v16[_v0],
          _v4 = (0, _v84.getSubAnimationWithDirections)(_v3.name, _v2, _v16),
          _v5 = _v4 && (_v3.name === _v4.textStyleId || _v4.includes(_v4.textStyleId));
        return (0, _v1.jsx)(_v65.Box, {
          id: _v3.name,
          gridStyleType: _v72.GridStyleType.LANDSCAPE,
          isActive: _v5,
          width: _v1,
          onClick: () => _v18(_v3.name),
          backgroundColor: "fill-component",
          overlay: (0, _v1.jsx)(_v85.default, {
            path: _v3.thumbnails[_v3.thumbnails.length - 1].url
          }, _v3.name),
          testid: `${_v5 ? "selected-" : ""}text-animation`,
          ...(!!_v4.length && {
            onExpand: _v2,
            expandedItemData: {
              id: _v3.name,
              mainTextAnimations: _v16,
              type: _v59.ExpandType.TEXT_ANIMATIONS,
              onSelectSubAnimation: _v0 => {
                _v18(_v0, _v3.name);
              }
            }
          })
        }, _v3.name);
      },
      _v20 = (0, _v2.useCallback)(_v0 => {
        let _v1 = _v16[_v0],
          _v2 = (0, _v84.getSubAnimationWithDirections)(_v1.name, _v2, _v16);
        _v4 && (_v1.name === _v4.textStyleId || _v2.includes(_v4.textStyleId)) || _v18(_v1.name), _v5.current === _v1.name ? (_v15(null), _v5.current = "") : (_v15({
          id: _v1.name,
          mainTextAnimations: _v16,
          type: _v59.ExpandType.TEXT_ANIMATIONS,
          onSelectSubAnimation: _v0 => {
            _v18(_v0, _v1.name);
          }
        }), _v5.current = _v1.name, setTimeout(() => {
          let _v0 = document.querySelector('[data-testid="selected-text-animation-grid-box"]');
          if (_v6.current && _v0) {
            let _v0 = _v6.current.getBoundingClientRect(),
              _v1 = _v0.getBoundingClientRect();
            if (_v1 && _v0) {
              let _v0 = _v1.top - _v0.top - 8;
              _v0 >= _v6.current?.scrollTop && _v6.current?.scrollTo({
                top: _v0,
                behavior: "smooth"
              });
            }
          }
        }));
      }, [_v2, _v4, _v18, _v16]),
      _v21 = (0, _v2.useMemo)(() => `
      [clip-path^='url(#__lottie'] {
        & path {
          fill: ${"dark" === _v12 ? "white" : "black"};
          stroke: ${"dark" === _v12 ? "white" : "black"};
        }

        & rect {
          fill: ${"dark" === _v12 ? "white" : "black"};
          stroke: transparent;
        }

        & rect[fill='#ffffff'] {
          fill: transparent;
        }
      }

      .noColorChange rect {
        fill: inherit !important;
        stroke: inherit !important;
      }

      /*
        When bokeh is released we can make a more generic selector
      */
      [data-id='Punch'],
      [data-id='WipeRightBox'],
      [data-id='Circle'],
      [data-id='CapsuleBoxUp'],
      [data-id='BoxShadow'],
      [data-id='RoundBox'] {
        path {
          fill: white !important;
        }
      }
    `, [_v12]);
    return (0, _v1.jsxs)(_v73.Inspector, {
      children: [(0, _v1.jsx)(_v75.InspectorHeader, {
        title: (0, _v8.translate)({
          singular: "Animation",
          dictionary: {
            es: {
              singular: "Animación"
            },
            "ja-JP": {
              singular: "アニメーション"
            },
            "ko-KR": {
              singular: "애니메이션"
            },
            "pt-BR": {
              singular: "Animação"
            },
            "zh-CN": {
              singular: "动画"
            }
          }
        })
      }), (0, _v1.jsx)(_v74.InspectorBody, {
        children: (0, _v1.jsx)(_v77.Flex, {
          flexDirection: "column",
          alignItems: "center",
          height: "100%",
          children: (0, _v1.jsx)(_v86.default, {
            children: (0, _v1.jsx)(_v89, {
              width: "100%",
              height: "100%",
              padding: "2px",
              $_css: _v21,
              children: _v16.map((_v0, _v1) => _v1 % 2 == 0 && (0, _v1.jsxs)(_v2.Fragment, {
                children: [(0, _v1.jsx)(_v78.SimpleGrid, {
                  columns: 2,
                  spacing: "8px",
                  marginBottom: "8px",
                  children: (0, _v1.jsxs)(_v2.Fragment, {
                    children: [_v19(_v1, 100, () => _v20(_v1)), _v16[_v1 + 1] && _v19(_v1 + 1, 100, () => _v20(_v1 + 1))]
                  })
                }), _v14 && (_v14.id === _v16[_v1].name || _v14.id === _v16[_v1 + 1]?.name) && (0, _v1.jsx)(_v53.Box, {
                  marginTop: "8px",
                  marginBottom: "16px",
                  padding: "0 8px",
                  "data-testid": `expanded-animation-data-${_v14.id}`,
                  children: (0, _v1.jsx)(_v87.default, {
                    expandedItem: _v14
                  })
                })]
              }))
            })
          })
        })
      })]
    });
  };
  var _v89 = (0, _v67.default)(_v53.Box).withConfig({
    displayName: "TextAnimationsInspector___StyledBokehBox",
    componentId: "sc-3287fff0-0"
  })`${_v0 => _v0.$_css}`;
  _v0.i(0);
  var _v90 = _v0.i(0),
    _v91 = [],
    _v92 = new MessageChannel(),
    _v93 = function () {
      this.postMessage(void 0);
    }.bind(_v92.port2);
  _v92.port1.onmessage = function () {
    var _v0 = _v91;
    _v91 = [];
    for (var _v1 = performance.now(), _v2 = 0; _v2 < _v0.length; _v2++) _v0[_v2](_v1);
  }, _v92 = null;
  let _v94 = function (_v0) {
    1 === _v91.push(_v0) && requestAnimationFrame(_v93);
  };
  var _v95 = _v0.i(0),
    _v96 = _v0.i(0),
    _v97 = _v0.i(0),
    _v98 = _v0.i(0),
    _v99 = _v0.i(0),
    _v100 = _v0.i(0),
    _v101 = _v0.i(0),
    _v102 = _v0.i(0),
    _v103 = _v0.i(0),
    _v104 = _v0.i(0),
    _v105 = _v0.i(0),
    _v106 = _v0.i(0),
    _v107 = _v0.i(0);
  let _v108 = (_v0, _v1, _v2) => {
      let _v3 = -1;
      for (let _v0 = 0; _v0 < _v2.length; _v0++) {
        let {
          startTime: _v0,
          endTime: _v1
        } = _v2[_v0].timing;
        if (_v1 > _v0 && _v1 <= _v1 || _v0 >= _v0 && _v0 < _v1 || _v0 < _v0 && _v1 > _v1) {
          _v3 = _v0;
          break;
        }
      }
      return _v3;
    },
    _v109 = (_v0, _v1, _v2, _v3) => {
      let _v4 = JSON.parse(JSON.stringify(_v0.transcriptElementTiming)),
        _v5 = (_v0, _v1) => {
          let _v2 = _v108(_v0, _v1, _v4);
          return _v2 > -1 ? _v4.splice(_v2, 1)[0] : null;
        },
        _v6 = [],
        _v7 = {
          startItemIndex: _v2,
          endItemIndex: -1,
          layerIndex: _v1[_v2].layerIndex,
          type: _v111(_v1[_v2].remainingDuration),
          transcriptElementTiming: _v5(_v1[_v2].startTime, _v1[_v2].endTime)
        };
      for (let _v0 = _v2; _v0 <= _v3; _v0++) {
        let _v0 = _v1[_v0],
          _v1 = _v111(_v0.remainingDuration),
          _v2 = _v0.layerIndex,
          _v3 = _v7.type === _v1,
          _v4 = null;
        if (_v1 === _v105.TranscriptSelectionType.EXISTING) {
          let _v0 = _v0.startTime,
            _v1 = _v0.endTime;
          null === _v7.transcriptElementTiming ? _v4 = _v5(_v0, _v1) : 0 > _v108(_v0, _v1, [_v7.transcriptElementTiming]) && (_v3 = !1, _v4 = _v5(_v0, _v1));
        }
        _v3 ? _v7.endItemIndex = _v0 : (_v6.push(_v7), _v7 = {
          startItemIndex: _v0,
          endItemIndex: _v0,
          layerIndex: _v2,
          type: _v1,
          transcriptElementTiming: _v1 === _v105.TranscriptSelectionType.DELETED ? null : _v4
        }), _v0 === _v3 && (_v7.endItemIndex = _v0, _v6.push(_v7));
      }
      return _v6;
    },
    _v110 = (_v0, _v1) => {
      let _v2 = -1,
        _v3 = -1;
      if (_v1) _v2 = _v0[0].index, _v3 = _v0[_v0.length - 1].index;else {
        for (let _v0 = 0; _v0 < _v0.length; _v0++) if (-1 === _v2 && _v0[_v0].remainingDuration > 0) {
          _v2 = _v0[_v0].index;
          break;
        }
        for (let _v0 = _v0.length - 1; _v0 >= 0; _v0--) if (-1 === _v3 && _v0[_v0].remainingDuration > 0) {
          _v3 = _v0[_v0].index;
          break;
        }
      }
      return [_v2, _v3];
    },
    _v111 = _v0 => 0 === _v0 ? _v105.TranscriptSelectionType.DELETED : _v105.TranscriptSelectionType.EXISTING;
  var _v112 = _v0.i(0);
  let _v113 = _v0 => {
    let _v1 = JSON.parse(JSON.stringify(_v0));
    return _v1.composition = _v1.composition.sort((_v0, _v1) => _v0.compositionTiming.start - _v1.compositionTiming.start), _v1;
  };
  var _v114 = _v0.i(0),
    _v115 = _v0.i(0),
    _v116 = _v0.i(0);
  let _v117 = "transcriptItem",
    _v118 = "transcriptSectionIndex",
    _v119 = {
      start: 0,
      end: 0
    },
    _v120 = (_v0, _v1, _v2 = 0) => {
      if (!(_v2 > 5)) return _v0.dataset && _v0.dataset[_v1] ? _v0.dataset[_v1] : _v120(_v0.parentNode, _v1, _v2 + 1);
    },
    _v121 = (_v0, _v1) => !!_v0.nodeValue && _v1 >= _v0.nodeValue.length - 1,
    _v122 = (_v0, _v1) => document.querySelector(`[data-item-index="${_v1}"][data-item-section-index="${_v0}"]`),
    _v123 = (_v0, _v1) => {
      let _v2,
        _v3,
        _v4,
        _v5,
        _v6 = window.getSelection();
      if (!_v6) return [null, null];
      let {
        anchorNode: _v7,
        focusNode: _v8,
        anchorOffset: _v9,
        focusOffset: _v10
      } = _v6;
      if (!_v7 || !_v8) return [null, null];
      let _v11 = Number(_v120(_v7, _v118)),
        _v12 = Number(_v120(_v8, _v118));
      if (isNaN(_v11) || isNaN(_v12)) return [null, null];
      let _v13 = Number(_v120(_v7, _v117)),
        _v14 = Number(_v120(_v8, _v117)),
        _v15 = _v1[_v11][_v13],
        _v16 = _v1[_v12][_v14];
      if (!_v15 || !_v16) return [null, null];
      let _v17 = (() => {
          if (_v11 === _v12) {
            let _v0 = _v13 === _v14;
            return (_v0 ? _v9 : _v13) < (_v0 ? _v10 : _v14) ? _v105.TextSelectionDirection.FORWARD : _v105.TextSelectionDirection.BACKWARD;
          }
          return _v11 < _v12 ? _v105.TextSelectionDirection.FORWARD : _v105.TextSelectionDirection.BACKWARD;
        })(),
        {
          startTime: _v18,
          endTime: _v19
        } = _v15,
        {
          startTime: _v20,
          endTime: _v21
        } = _v16,
        _v22 = null;
      if (_v17 === _v105.TextSelectionDirection.FORWARD) {
        let _v0 = _v7,
          _v1 = _v8;
        if (_v121(_v7, _v9)) {
          let _v0 = _v122(_v11, _v13 + 1);
          _v0 && (_v0 = _v0);
        }
        if (0 === _v10) {
          let _v0 = _v122(_v12, _v14 - 1);
          _v0 && (_v1 = _v0);
        }
        _v6.setBaseAndExtent(_v0, 0, _v1, _v1.nodeValue?.length || 1), _v22 = {
          selectedElements: (0, _v116.getSelectedElementsData)({
            transcriptSections: _v0,
            startSectionIndex: _v11,
            endSectionIndex: _v12,
            startTime: _v18,
            endTime: _v21
          }),
          direction: _v17,
          selectionType: (0, _v116.getTranscriptSelectionType)({
            transcriptItemsBySections: _v1,
            startSectionIndex: _v11,
            endSectionIndex: _v12,
            startItemIndex: _v13,
            endItemIndex: _v14
          }),
          selectedSectionsRange: {
            start: {
              time: _v18,
              sectionIndex: _v11,
              itemIndex: _v13
            },
            end: {
              time: _v21,
              sectionIndex: _v12,
              itemIndex: _v14
            }
          }
        };
      } else {
        let _v0 = _v8;
        if (_v121(_v8, _v10)) {
          let _v0 = _v122(_v12, _v14 + 1);
          _v0 && (_v0 = _v0);
        }
        _v6.setBaseAndExtent(_v7, _v7.nodeValue?.length || 1, _v0, 0), _v22 = {
          selectedElements: (0, _v116.getSelectedElementsData)({
            transcriptSections: _v0,
            startSectionIndex: _v12,
            endSectionIndex: _v11,
            startTime: _v20,
            endTime: _v19
          }),
          direction: _v17,
          selectionType: (0, _v116.getTranscriptSelectionType)({
            transcriptItemsBySections: _v1,
            startSectionIndex: _v12,
            endSectionIndex: _v11,
            startItemIndex: _v14,
            endItemIndex: _v13
          }),
          selectedSectionsRange: {
            start: {
              time: _v20,
              sectionIndex: _v12,
              itemIndex: _v14
            },
            end: {
              time: _v19,
              sectionIndex: _v11,
              itemIndex: _v13
            }
          }
        };
      }
      let _v23 = (_v2 = _v13, _v3 = _v1[_v11], _v17 === _v105.TextSelectionDirection.BACKWARD && (_v2 = _v14, _v3 = _v1[_v12]), _v4 = (0, _v116.findLatestValidIndexBeforeSelection)(_v2, _v3), (_v5 = _v3[_v4]) ? {
        start: _v5.compositionStart,
        end: _v5.compositionEnd
      } : _v119);
      return [_v22, _v23.end > 0 ? _v23 : _v119];
    },
    _v124 = (0, _v2.createContext)({
      textSelection: _v102.EMPTY_TEXT_SELECTION,
      isSelectingText: !1,
      selectionFocusRect: null,
      resetTextSelection: _v98.default,
      restoreTextSelection: _v98.default,
      deleteTextSelection: _v98.default
    }),
    _v125 = ({
      children: _v0
    }) => {
      let _v1,
        _v2,
        _v3,
        _v4,
        _v5,
        _v6,
        _v7,
        _v8 = (0, _v27.useAppDispatch)(),
        _v9 = (0, _v27.useAppSelector)(_v104.transcriptSectionsSelector),
        [_v10, _v11] = (0, _v2.useState)(_v102.EMPTY_TEXT_SELECTION),
        [_v12, _v13] = (0, _v2.useState)(!1),
        [_v14, _v15] = (0, _v2.useState)(null),
        _v16 = (0, _v2.useRef)(_v102.EMPTY_TEXT_SELECTION),
        _v17 = (0, _v2.useRef)(_v119),
        _v18 = (0, _v2.useRef)(!1),
        _v19 = (0, _v2.useRef)(!1),
        {
          seek: _v20,
          pause: _v21
        } = (0, _v80.useDragonfly)(),
        _v22 = (0, _v2.useMemo)(() => _v9.map(_v0 => _v0.transcriptItems), [_v9]),
        {
          restoreSelection: _v23
        } = (_v1 = (0, _v27.useAppDispatch)(), _v2 = (0, _v27.useAppSelector)(_v104.selectAllUiForSources), _v3 = (0, _v27.useAppSelector)(_v24.nonHiddenLayersSelector), _v4 = (0, _v2.useRef)({}), _v5 = (0, _v2.useMemo)(() => Object.keys(_v2).reduce((_v0, _v1) => ({
          ..._v0,
          [_v1]: _v2[_v1].isShowDeletedWords
        }), {}), [_v2]), _v6 = (_v0, _v1, _v2, _v3, _v4) => {
          let _v5 = _v3?.transcriptElementTiming?.id,
            _v6 = _v3.layerIndex,
            _v7 = _v4.current[_v6] || _v113(_v2[_v6]),
            _v8 = _v0[_v1.startItemIndex],
            _v9 = _v0[_v1.endItemIndex];
          if (_v8 && _v9 && _v5) {
            let _v0 = _v9.endTime - _v8.startTime,
              _v1 = _v7.composition.find(_v0 => _v0.id === _v5);
            _v1 && (_v1.compositionTiming.end = (0, _v112.toNearestFrame)(_v1.compositionTiming.end + _v0), _v4 ? _v1.timing.endTime = (0, _v112.toNearestFrame)(_v1.timing.endTime + _v0) : _v1.timing.startTime = (0, _v112.toNearestFrame)(_v1.timing.startTime - _v0)), _v4.current[_v6] = _v7;
          }
        }, _v7 = (0, _v2.useCallback)(({
          sectionIndex: _v0,
          startItemIndex: _v1,
          endItemIndex: _v2
        }) => {
          let _v3 = _v9[_v0],
            _v4 = _v22[_v0],
            _v5 = _v109(_v3, _v4, _v1, _v2),
            _v6 = _v1 > 1 ? _v109(_v3, _v4, _v1 - 1, _v1 - 1)[0] : null,
            _v7 = _v2 < _v4.length - 1 ? _v109(_v3, _v4, _v2 + 1, _v2 + 1)[0] : null,
            _v8 = _v6 && _v6.type === _v105.TranscriptSelectionType.EXISTING ? _v6 : null;
          for (let _v0 = 0; _v0 < _v5.length; _v0++) {
            let _v0 = _v5[_v0],
              _v1 = _v0 < _v5.length - 1 ? _v5[_v0 + 1] : null,
              _v2 = _v8?.transcriptElementTiming?.id,
              _v3 = _v0.transcriptElementTiming?.id;
            if (_v3 && _v2 === _v3) _v8 = _v0;else if (_v0.type === _v105.TranscriptSelectionType.EXISTING) {
              if (_v8 && _v8.layerIndex === _v0.layerIndex) {
                if (_v8.transcriptElementTiming?.compositionTiming.end === _v0.transcriptElementTiming?.compositionTiming.start) {
                  let _v0 = _v8.layerIndex,
                    _v1 = _v4.current[_v0] || _v113(_v3[_v0]),
                    _v2 = _v1?.composition.find(_v0 => _v0.id === _v2);
                  if (_v2 && _v0.transcriptElementTiming) {
                    let {
                        compositionTiming: _v0
                      } = _v0.transcriptElementTiming,
                      _v1 = _v0.end - _v0.start;
                    _v2.compositionTiming.end = (0, _v112.toNearestFrame)(_v2.compositionTiming.end + _v1), _v2.timing.endTime = (0, _v112.toNearestFrame)(_v2.timing.endTime + _v1), _v1.composition = _v1.composition.filter(_v0 => _v0.id !== _v3), _v4.current[_v0] = _v1, _v8.transcriptElementTiming && (_v8.transcriptElementTiming.compositionTiming.end = _v0.end);
                  }
                } else _v8 = _v0;
              } else _v8 = _v0;
            } else if (_v8) _v6(_v4, _v0, _v3, _v8, !0);else {
              let _v0 = _v1 || (_v7?.type === _v105.TranscriptSelectionType.EXISTING ? _v7 : null);
              _v0 ? _v6(_v4, _v0, _v3, _v8 = _v0, !1) : _v8 = _v0;
            }
          }
          _v8?.type === _v105.TranscriptSelectionType.DELETED && ((_v0, _v1, _v2, _v3) => {
            let _v4 = _v0[_v3.startItemIndex],
              _v5 = _v0[_v3.endItemIndex];
            if (_v4 && _v5) {
              let _v0 = _v1.transcriptElementTiming[_v1.transcriptElementTiming.length - 1],
                _v1 = !1;
              for (let _v0 = 0; _v0 < _v1.transcriptElementTiming.length; _v0++) if (_v5.endTime < _v1.transcriptElementTiming[_v0].timing.startTime) {
                _v1 = !0, _v0 = _v1.transcriptElementTiming[_v0];
                break;
              }
              let _v2 = _v0.layerIndex,
                _v3 = _v4.current[_v2] || _v113(_v2[_v2]),
                _v4 = _v3.composition.findIndex(_v0 => _v0.id === _v0.id),
                _v5 = _v3.composition[_v4];
              if (_v5) {
                let _v0 = _v5.endTime - _v4.startTime,
                  _v1 = JSON.parse(JSON.stringify(_v5));
                if (_v1.id = (0, _v107.createUuidV4)(), _v1.timing = {
                  startTime: _v4.startTime,
                  endTime: _v5.endTime
                }, _v1) {
                  let _v0 = (0, _v112.toNearestFrame)(_v5.compositionTiming.start - _v0);
                  _v1.compositionTiming = {
                    start: _v0,
                    end: (0, _v112.toNearestFrame)(_v0 + _v0)
                  }, _v3.composition.splice(_v4, 0, _v1);
                } else _v1.compositionTiming = {
                  start: _v5.compositionTiming.end,
                  end: (0, _v112.toNearestFrame)(_v5.compositionTiming.end + _v0)
                }, _v3.composition.splice(_v4 + 1, 0, _v1);
                _v4.current[_v2] = _v3;
              }
            }
          })(_v4, _v3, _v3, _v8);
        }, [_v3, _v22, _v9]), {
          restoreSelection: (0, _v2.useCallback)(() => {
            ((_v0, _v1, _v2, _v3) => {
              let {
                  selectedSectionsRange: _v4
                } = _v0,
                {
                  start: _v5,
                  end: _v6
                } = _v4,
                _v7 = [];
              for (let _v0 = _v5.sectionIndex; _v0 <= _v6.sectionIndex; _v0++) {
                let _v0 = _v0,
                  _v1 = _v1[_v0],
                  _v2 = _v2[_v0],
                  _v3 = _v5.sectionIndex === _v6.sectionIndex,
                  _v4 = _v3[_v1.sourceHash];
                if (!_v4) continue;
                let [_v5, _v6] = _v110(_v2, _v4),
                  _v7 = -1,
                  _v8 = -1;
                _v3 ? (_v7 = _v5.itemIndex, _v8 = _v6.itemIndex) : _v0 === _v5.sectionIndex ? (_v7 = _v5.itemIndex, _v8 = _v6) : _v0 === _v6.sectionIndex ? (_v7 = _v5, _v8 = _v6.itemIndex) : (_v8 = _v6, _v7 = _v5), _v7 < 0 || _v8 < 0 || _v7.push({
                  sectionIndex: _v0,
                  startItemIndex: _v7,
                  endItemIndex: _v8
                });
              }
              return _v7;
            })(_v10, _v9, _v22, _v5).forEach(_v7), (0, _v103.batch)(() => {
              Object.keys(_v4.current).forEach(_v0 => {
                let _v1 = parseInt(_v0),
                  {
                    composition: _v2,
                    id: _v3
                  } = _v4.current[_v1],
                  [_v4] = (0, _v106.resolveCollisionsInComposition)(_v2);
                _v1((0, _v24.updateLayerWithBulkChangesAction)({
                  layerId: _v3,
                  composition: _v4
                }));
              });
            }), _v4.current = {};
          }, [_v1, _v5, _v7, _v10, _v22, _v9])
        }),
        _v24 = (0, _v2.useCallback)(() => {
          _v16.current = _v102.EMPTY_TEXT_SELECTION, _v17.current = _v119, _v11(_v102.EMPTY_TEXT_SELECTION), _v15(null), _v13(!1), _v101.INPUT_TAGS.includes(document.activeElement?.tagName || "") || window.getSelection()?.removeAllRanges();
        }, []),
        _v25 = (0, _v2.useCallback)(() => {
          let _v0 = (0, _v115.measureInteraction)();
          _v94(() => {
            let _v0 = _v0.end();
            _v114.LogService.sendAction(_v100.TranscriptInspectorPerformance, {
              interactionCost: _v0,
              interactionType: "itemsDelete",
              sectionsTotal: _v9.length,
              firstSectionItemsTotal: _v9.length > 0 ? _v9[0].transcriptItems.length : null
            });
          }), _v21(), _v20(_v17.current.start);
          let {
            selectedElements: _v1
          } = _v10;
          _v8((0, _v24.deleteTranscriptSelectionAction)(_v1)), _v24();
        }, [_v8, _v21, _v24, _v20, _v10, _v9]),
        _v26 = (0, _v2.useCallback)(() => {
          let _v0 = (0, _v115.measureInteraction)();
          _v94(() => {
            let _v0 = _v0.end();
            _v114.LogService.sendAction(_v100.TranscriptInspectorPerformance, {
              interactionCost: _v0,
              interactionType: "itemsRestore",
              sectionsTotal: _v9.length,
              firstSectionItemsTotal: _v9.length > 0 ? _v9[0].transcriptItems.length : null
            });
          }), _v23(), _v24();
        }, [_v24, _v23, _v9]),
        _v27 = (0, _v99.default)(() => {
          if (!_v18.current || window.getSelection()?.type !== _v105.BrowserNativeTextSelectionType.RANGE) return;
          _v19.current || (_v21(), _v15(null), _v13(!0), _v19.current = !0);
          let [_v0, _v1] = _v123(_v9, _v22);
          _v0 && (_v16.current = _v0), _v1 && (_v17.current = _v1);
        }, 300, {
          leading: !1
        }),
        _v28 = (0, _v2.useCallback)(() => {
          let _v0 = window.getSelection();
          if (_v18.current = !1, _v19.current = !1, _v0?.type === _v105.BrowserNativeTextSelectionType.RANGE) {
            let [_v0, _v1] = _v123(_v9, _v22);
            _v0 && (_v16.current = _v0), _v1 && (_v17.current = _v1), _v11(_v16.current), _v16.current = _v102.EMPTY_TEXT_SELECTION;
            let _v2 = _v0?.focusNode;
            if (_v2) {
              let _v0 = _v2.nodeType === Node.TEXT_NODE ? _v2.parentElement : _v2.closest("[data-transcript-item]");
              _v0 && _v15(_v0.getBoundingClientRect());
            }
            _v20(_v17.current.end), _v13(!1);
          } else _v10.direction !== _v105.TextSelectionDirection.NONE && _v24();
          document.removeEventListener("selectionchange", _v27), document.removeEventListener("mouseup", _v28);
        }, [_v27, _v24, _v20, _v10.direction, _v22, _v9]),
        _v29 = (0, _v2.useCallback)(_v0 => {
          (!(_v0?.target instanceof HTMLElement) || !_v0.target.closest || _v0.target.closest(`[data-testid="${_v58.testIds.inspector.panel}"]`)) && (window.getSelection()?.removeAllRanges(), _v18.current = !0, document.addEventListener("selectionchange", _v27), document.addEventListener("mouseup", _v28));
        }, [_v28, _v27]);
      return (0, _v2.useEffect)(() => (document.addEventListener("selectstart", _v29), () => {
        document.removeEventListener("selectstart", _v29);
      }), [_v28, _v29, _v27]), (0, _v1.jsx)(_v124.Provider, {
        value: {
          textSelection: _v10,
          isSelectingText: _v12,
          selectionFocusRect: _v14,
          resetTextSelection: _v24,
          restoreTextSelection: _v26,
          deleteTextSelection: _v25
        },
        children: _v0
      });
    },
    _v126 = () => (0, _v2.useContext)(_v124);
  var _v127 = _v0.i(0);
  let _v128 = (0, _v2.memo)(({
      isFocusFull: _v0,
      children: _v1,
      ..._v2
    }) => {
      let _v3 = (0, _v27.useAppSelector)(_v127.pausedSelector),
        {
          isSelectingText: _v4
        } = _v126();
      return _v4 ? null : (0, _v1.jsx)(_v47.Text, {
        variant: "body-xl",
        ..._v2,
        zIndex: 1,
        pos: "absolute",
        bottom: 0,
        display: "inline-flex",
        alignItems: "flex-end",
        bg: _v0 ? "text-primary" : "slate.300",
        color: _v3 ? "text-primary" : "text-button-inverted",
        h: _v3 ? 4 : "100%",
        w: "100%",
        borderRadius: "xs",
        transition: "all 0.3s ease-out",
        userSelect: "none",
        pointerEvents: "none",
        children: _v1
      });
    }),
    _v129 = (0, _v2.memo)(({
      isGap: _v0,
      isDeleted: _v1,
      text: _v2,
      start: _v3,
      end: _v4,
      itemIndex: _v5,
      sectionIndex: _v6,
      isTranscriptFocus: _v7,
      isSearchMatch: _v8,
      isSearchFocus: _v9,
      autoScrollFn: _v10
    }) => {
      let _v11 = (0, _v2.useRef)(null),
        _v12 = (0, _v27.useAppSelector)(_v0 => (0, _v104.selectIsWordCurrent)(_v0, {
          start: _v3,
          end: _v4
        })) ? _v7 ? _v105.TranscriptItemFocusType.FULL : _v105.TranscriptItemFocusType.SOFT : _v105.TranscriptItemFocusType.NONE,
        _v13 = _v12 === _v105.TranscriptItemFocusType.FULL,
        _v14 = _v12 !== _v105.TranscriptItemFocusType.NONE,
        _v15 = !_v1 && _v14;
      (0, _v2.useEffect)(function () {
        let _v0 = 0;
        return (_v14 || _v9) && (_v0 = setTimeout(() => _v10(_v11.current), 100)), () => {
          _v0 && clearTimeout(_v0);
        };
      }, [_v14, _v9, _v10]);
      let _v16 = {
        variant: _v0 ? "body-sm" : "body-md",
        whiteSpace: "break-spaces",
        lineHeight: "22px",
        ...(_v1 ? {
          textDecoration: "line-through",
          color: "gray.500"
        } : {
          color: _v0 ? "text-secondary" : "text-primary"
        }),
        ...(_v8 && {
          bg: _v9 ? "orange.300" : "orange.100",
          color: "gray.900"
        })
      };
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v47.Text, {
          ref: _v11,
          pos: "relative",
          _selection: {
            bg: "status-info-secondary",
            color: "text-primary"
          },
          _hover: {
            bg: !_v8 && "check-radio-stroke"
          },
          ..._v16,
          "data-item-index": _v5,
          "data-item-section-index": _v6,
          children: _v2
        }), _v15 && (0, _v1.jsx)(_v128, {
          isFocusFull: _v13,
          "data-testid": _v58.testIds.transcriptItemHighlight,
          ..._v16,
          children: _v2
        })]
      });
    });
  var _v130 = _v0.i(0),
    _v131 = _v0.i(0);
  let _v132 = (_v0, _v1, _v2) => {
      let _v3 = !1,
        _v4 = !1;
      for (let _v0 = 0; _v0 < _v1.length; _v0++) {
        let _v0 = _v1[_v0];
        if (_v0 >= _v0.startIndex && _v0 <= _v0.endIndex) {
          _v3 = !0, _v4 = _v0.position === _v2;
          break;
        }
      }
      return [_v3, _v4];
    },
    _v133 = ({
      transcriptItems: _v0
    }) => (0, _v1.jsx)(_v47.Text, {
      variant: "body-md",
      whiteSpace: "break-spaces",
      lineHeight: "24px",
      display: "inline-flex",
      textShadow: "0 0 8px color-mix(in srgb, var(--vimeo-colors-text-primary) 50%, transparent)",
      color: "transparent",
      userSelect: "none",
      children: _v0.map(_v116.getTranscriptItemText).join("")
    }),
    _v134 = (0, _v2.memo)(({
      sectionIndex: _v0,
      transcriptItems: _v1,
      autoScrollFn: _v2,
      onItemClick: _v3,
      isFirstParagraph: _v4
    }) => {
      let _v5 = (0, _v27.useAppSelector)(_v104.searchResultsSelector),
        _v6 = (0, _v27.useAppSelector)(_v104.searchPositionIndexSelector),
        _v7 = (0, _v27.useAppSelector)(_v0 => (0, _v104.selectIsParagraphCurrent)(_v0, {
          start: _v1[0].compositionStart,
          end: _v1[_v1.length - 1].compositionEnd,
          buffer: 90
        })),
        _v8 = (0, _v27.useAppSelector)(_v130.focusAreaSelector),
        _v9 = (0, _v2.useRef)(null),
        _v10 = _v8 === _v131.FocusAreaType.TRANSCRIPT,
        _v11 = (0, _v2.useMemo)(() => _v5.map((_v0, _v1) => ({
          ..._v0,
          position: _v1
        })).filter(_v0 => _v0.sectionIndex === _v0), [_v5, _v0]),
        _v12 = (0, _v2.useCallback)(_v0 => {
          let _v1 = _v1.find(_v0 => _v0.index === _v0);
          _v1 && _v3(_v1);
        }, [_v3, _v1]),
        _v13 = (0, _v2.useCallback)(_v0 => {
          _v0.preventDefault(), _v0.stopPropagation();
          let _v1 = _v0.target?.childNodes?.[0];
          if (_v1) {
            let _v0 = document.createRange();
            _v0.selectNode(_v1);
            let _v1 = document.getSelection();
            _v1?.removeAllRanges(), _v1?.addRange(_v0);
          }
        }, []),
        _v14 = function (_v0) {
          let [_v1, _v2] = (0, _v2.useState)(!1),
            _v3 = (0, _v2.useRef)(null);
          return (0, _v2.useEffect)(() => (_v3.current || (_v3.current = new IntersectionObserver(([_v0]) => _v2(_v0.isIntersecting))), _v0.current && _v3.current.observe(_v0.current), () => _v3.current?.disconnect()), [_v0]), _v1;
        }(_v9),
        _v15 = (0, _v2.useMemo)(() => {
          if (_v14) return !0;
          let _v0 = _v1.some(({
            index: _v0
          }) => {
            let [, _v1] = _v132(_v0, _v11, _v6);
            return _v1;
          });
          return _v7 || _v0;
        }, [_v7, _v14, _v6, _v11, _v1]);
      return (0, _v1.jsx)(_v53.Box, {
        ref: _v9,
        mb: "md",
        userSelect: "text",
        "data-paragraph-section-index": _v0,
        ...(_v4 && {
          "data-testid": _v58.testIds.firstTranscriptParagraph
        }),
        children: _v15 ? _v1.map(_v0 => {
          let {
              word: _v1,
              index: _v2,
              remainingDuration: _v3
            } = _v0,
            _v4 = !1,
            _v5 = !1;
          return _v1.length > 0 && _v11.length > 0 && ([_v4, _v5] = _v132(_v2, _v11, _v6)), (0, _v1.jsx)(_v53.Box, {
            display: "inline-flex",
            onClick: () => _v12(_v2),
            onContextMenu: _v13,
            pos: "relative",
            border: "none",
            margin: 0,
            padding: 0,
            "data-transcript-item": _v2,
            "data-transcript-section-index": _v0,
            children: (0, _v1.jsx)(_v129, {
              text: (0, _v116.getTranscriptItemText)(_v0),
              start: _v0.compositionStart,
              end: _v0.compositionEnd,
              isGap: !_v1,
              isDeleted: !_v3,
              itemIndex: _v2,
              sectionIndex: _v0,
              isTranscriptFocus: _v10,
              isSearchMatch: _v4,
              isSearchFocus: _v5,
              autoScrollFn: _v2
            })
          }, `${_v0}-${_v2}`);
        }) : (0, _v1.jsx)(_v133, {
          transcriptItems: _v1
        })
      });
    }),
    _v135 = ({
      sourceHash: _v0,
      overlapsCompositionTiming: _v1,
      transcriptState: _v2,
      isCurrentSection: _v3,
      scrollToSourceHash: _v4
    }) => {
      let _v5 = (0, _v27.useAppSelector)(_v127.pausedSelector),
        _v6 = (0, _v27.useAppSelector)(_v127.currentTimeSelector),
        _v7 = (0, _v2.useCallback)(_v0 => {
          let _v1 = _v1.some(({
            start: _v0,
            end: _v1
          }) => (0, _v116.isTimeInRange)(_v0, _v0, _v1));
          return _v3 && !_v1;
        }, [_v3, _v1]);
      return (0, _v2.useEffect)(() => {
        let _v0 = !(0, _v116.isTranscriptStatusFetched)(_v2?.status);
        _v5 && _v0 && _v7(_v6) && _v4(_v0);
      }, [_v7, _v6, _v5, _v4, _v0, _v2?.status]), null;
    };
  var _v136 = _v0.i(0),
    _v137 = _v0.i(0),
    _v138 = _v0.i(0),
    _v139 = _v0.i(0),
    _v140 = _v0.i(0),
    _v141 = _v0.i(0),
    _v142 = _v0.i(0),
    _v143 = _v0.i(0),
    _v144 = _v0.i(0),
    _v145 = _v0.i(0),
    _v146 = _v0.i(0),
    _v147 = _v0.i(0),
    _v148 = _v0.i(0);
  let _v149 = _v0 => (0, _v1.jsx)(_v148.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsx)("path", {
      d: "M4 12h6a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1Zm1-6h4v4H5V6Zm9 2h6a1 1 0 1 0 0-2h-6a1 1 0 1 0 0 2Zm-4 10H4a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2Zm10-4H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2Zm0-4h-6a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2Z",
      fill: "currentColor"
    })
  });
  var _v150 = _v0.i(0);
  let _v151 = (0, _v2.memo)(({
    name: _v0,
    thumbUrl: _v1,
    status: _v2,
    isShowDeletedWords: _v3,
    isElementLoading: _v4,
    onFetchTranscript: _v5,
    onCancelTranscript: _v6,
    hasTranscription: _v7,
    isOpen: _v8,
    toggleOpen: _v9,
    toggleIsShowDeletedWords: _v10,
    ignoreSource: _v11
  }) => {
    let _v12 = () => {
        (0, _v150.sendTrackTranscriptMoreClick)();
      },
      _v13 = (0, _v2.useMemo)(() => {
        let _v0 = {
            width: "52px",
            height: "30px",
            borderRadius: "4",
            overflow: "hidden",
            flex: "0 0",
            flexBasis: "auto"
          },
          _v1 = (0, _v1.jsxs)(_v53.Box, {
            ..._v0,
            position: "relative",
            children: [(0, _v1.jsx)(_v53.Box, {
              ..._v0,
              sx: {
                backgroundImage: _v1,
                backgroundSize: "cover",
                position: "absolute",
                top: 0,
                left: 0
              }
            }), (0, _v1.jsx)(_v136.Center, {
              ..._v0,
              position: "absolute",
              backgroundColor: "fill-page-overlay",
              backdropFilter: "blur(20px)",
              children: _v2 === _v105.TranscriptStatus.PROCESSING || _v4 ? (0, _v1.jsx)(_v143.Spinner, {
                size: "xs",
                color: "text-primary"
              }) : (0, _v1.jsx)(_v56.CircleExclamationFilled, {
                width: "16px",
                height: "16px",
                color: "status-destructive-primary"
              })
            })]
          });
        if (_v4) return _v1;
        switch (_v2) {
          case _v105.TranscriptStatus.PROCESSING:
          case _v105.TranscriptStatus.NO_SPEECH:
          case _v105.TranscriptStatus.LANG_NOT_SUPPORTED:
          case _v105.TranscriptStatus.FAILED:
            return _v1;
          default:
            return (0, _v1.jsx)(_v53.Box, {
              ..._v0,
              sx: {
                backgroundImage: _v1,
                backgroundSize: "cover"
              }
            });
        }
      }, [_v4, _v2, _v1]),
      _v14 = (0, _v2.useMemo)(() => {
        let _v0 = {
          alignSelf: "center",
          size: "xs"
        };
        switch (_v2) {
          case _v105.TranscriptStatus.DONE:
            return (0, _v1.jsxs)(_v138.Menu, {
              placement: "bottom-start",
              size: "xs",
              children: [(0, _v1.jsx)(_v139.MenuButton, {
                as: _v54.IconButton,
                opacity: 0,
                _groupHover: {
                  width: "24px",
                  opacity: 1
                },
                size: "xs",
                variant: "tertiary",
                icon: (0, _v1.jsx)(_v147.EllipsisV, {}),
                "aria-label": "",
                onClick: _v12
              }), (0, _v1.jsx)(_v142.Portal, {
                children: (0, _v1.jsx)(_v140.MenuList, {
                  children: (0, _v1.jsx)(_v141.MenuItem, {
                    as: "a",
                    onClick: _v10,
                    icon: (0, _v1.jsx)(_v149, {}),
                    children: _v3 ? (0, _v8.translate)({
                      singular: "Hide deleted words",
                      dictionary: {
                        es: {
                          singular: "Ocultar palabras eliminadas"
                        },
                        "de-DE": {
                          singular: "Gelöschte Wörter ausblenden"
                        },
                        "fr-FR": {
                          singular: "Masquez les mots supprimés"
                        },
                        "ja-JP": {
                          singular: "削除した言葉を非表示"
                        },
                        "ko-KR": {
                          singular: "삭제된 단어 숨기기"
                        },
                        "pt-BR": {
                          singular: "Ocultar palavras excluídas"
                        },
                        "zh-CN": {
                          singular: "隐藏已删除的字词"
                        }
                      }
                    }) : (0, _v8.translate)({
                      singular: "Show deleted words",
                      dictionary: {
                        es: {
                          singular: "Mostrar palabras eliminadas"
                        },
                        "de-DE": {
                          singular: "Gelöschte Wörter anzeigen"
                        },
                        "fr-FR": {
                          singular: "Afficher les mots supprimés"
                        },
                        "ja-JP": {
                          singular: "削除した言葉を表示"
                        },
                        "ko-KR": {
                          singular: "삭제된 단어 표시"
                        },
                        "pt-BR": {
                          singular: "Mostrar palavras excluídas"
                        },
                        "zh-CN": {
                          singular: "显示已删除的字词"
                        }
                      }
                    })
                  })
                })
              })]
            });
          case _v105.TranscriptStatus.FAILED:
            return (0, _v1.jsxs)(_v1.Fragment, {
              children: [(0, _v1.jsx)(_v55.Tooltip, {
                label: (0, _v8.translate)({
                  singular: "Remove",
                  dictionary: {
                    es: {
                      singular: "Eliminar"
                    },
                    "de-DE": {
                      singular: "Entfernen"
                    },
                    "fr-FR": {
                      singular: "Supprimer"
                    },
                    "ja-JP": {
                      singular: "削除"
                    },
                    "ko-KR": {
                      singular: "제거"
                    },
                    "pt-BR": {
                      singular: "Remover"
                    },
                    "zh-CN": {
                      singular: "移除"
                    }
                  }
                }),
                children: (0, _v1.jsx)(_v54.IconButton, {
                  ..._v0,
                  "aria-label": (0, _v8.translate)({
                    singular: "Remove",
                    dictionary: {
                      es: {
                        singular: "Eliminar"
                      },
                      "de-DE": {
                        singular: "Entfernen"
                      },
                      "fr-FR": {
                        singular: "Supprimer"
                      },
                      "ja-JP": {
                        singular: "削除"
                      },
                      "ko-KR": {
                        singular: "제거"
                      },
                      "pt-BR": {
                        singular: "Remover"
                      },
                      "zh-CN": {
                        singular: "移除"
                      }
                    }
                  }),
                  variant: "tertiary",
                  marginRight: "-4px",
                  icon: (0, _v1.jsx)(_v146.CloseXSmall, {}),
                  onClick: _v11,
                  display: "none",
                  _groupHover: {
                    display: "inline-flex"
                  }
                })
              }), (0, _v1.jsx)(_v35.Button, {
                ..._v0,
                variant: "secondary",
                onClick: _v5,
                children: (0, _v8.translate)({
                  singular: "Retry",
                  dictionary: {
                    es: {
                      singular: "Reintentar"
                    },
                    "de-DE": {
                      singular: "Neuer Versuch"
                    },
                    "fr-FR": {
                      singular: "Réessayer"
                    },
                    "ja-JP": {
                      singular: "再試行"
                    },
                    "ko-KR": {
                      singular: "재시도"
                    },
                    "pt-BR": {
                      singular: "TENTAR NOVAMENTE"
                    },
                    "zh-CN": {
                      singular: "重试"
                    }
                  }
                })
              })]
            });
          case _v105.TranscriptStatus.PROCESSING:
            return (0, _v1.jsx)(_v35.Button, {
              ..._v0,
              variant: "secondary",
              onClick: _v6,
              children: "Cancel"
            });
          case _v105.TranscriptStatus.LANG_NOT_SUPPORTED:
          case _v105.TranscriptStatus.NO_SPEECH:
            return (0, _v1.jsx)(_v55.Tooltip, {
              label: (0, _v8.translate)({
                singular: "Remove",
                dictionary: {
                  es: {
                    singular: "Eliminar"
                  },
                  "de-DE": {
                    singular: "Entfernen"
                  },
                  "fr-FR": {
                    singular: "Supprimer"
                  },
                  "ja-JP": {
                    singular: "削除"
                  },
                  "ko-KR": {
                    singular: "제거"
                  },
                  "pt-BR": {
                    singular: "Remover"
                  },
                  "zh-CN": {
                    singular: "移除"
                  }
                }
              }),
              children: (0, _v1.jsx)(_v54.IconButton, {
                ..._v0,
                "aria-label": (0, _v8.translate)({
                  singular: "Remove",
                  dictionary: {
                    es: {
                      singular: "Eliminar"
                    },
                    "de-DE": {
                      singular: "Entfernen"
                    },
                    "fr-FR": {
                      singular: "Supprimer"
                    },
                    "ja-JP": {
                      singular: "削除"
                    },
                    "ko-KR": {
                      singular: "제거"
                    },
                    "pt-BR": {
                      singular: "Remover"
                    },
                    "zh-CN": {
                      singular: "移除"
                    }
                  }
                }),
                variant: "tertiary",
                marginRight: "-4px",
                icon: (0, _v1.jsx)(_v146.CloseXSmall, {}),
                onClick: _v11,
                display: "none",
                _groupHover: {
                  display: "inline-flex"
                }
              })
            });
          default:
            return (0, _v1.jsxs)(_v1.Fragment, {
              children: [!_v4 && (0, _v1.jsx)(_v55.Tooltip, {
                label: (0, _v8.translate)({
                  singular: "Remove",
                  dictionary: {
                    es: {
                      singular: "Eliminar"
                    },
                    "de-DE": {
                      singular: "Entfernen"
                    },
                    "fr-FR": {
                      singular: "Supprimer"
                    },
                    "ja-JP": {
                      singular: "削除"
                    },
                    "ko-KR": {
                      singular: "제거"
                    },
                    "pt-BR": {
                      singular: "Remover"
                    },
                    "zh-CN": {
                      singular: "移除"
                    }
                  }
                }),
                children: (0, _v1.jsx)(_v54.IconButton, {
                  ..._v0,
                  "aria-label": (0, _v8.translate)({
                    singular: "Remove",
                    dictionary: {
                      es: {
                        singular: "Eliminar"
                      },
                      "de-DE": {
                        singular: "Entfernen"
                      },
                      "fr-FR": {
                        singular: "Supprimer"
                      },
                      "ja-JP": {
                        singular: "削除"
                      },
                      "ko-KR": {
                        singular: "제거"
                      },
                      "pt-BR": {
                        singular: "Remover"
                      },
                      "zh-CN": {
                        singular: "移除"
                      }
                    }
                  }),
                  variant: "tertiary",
                  marginRight: "-4px",
                  icon: (0, _v1.jsx)(_v146.CloseXSmall, {}),
                  onClick: _v11,
                  display: "none",
                  _groupHover: {
                    display: "inline-flex"
                  }
                })
              }), (0, _v1.jsx)(_v55.Tooltip, {
                label: (0, _v1.jsx)(_v53.Box, {
                  maxWidth: "260px",
                  children: (0, _v8.translate)({
                    singular: "This video is being processed. It will be available for transcribing soon.",
                    dictionary: {
                      es: {
                        singular: "Este video se está procesando. Estará disponible para su transcripción pronto."
                      },
                      "de-DE": {
                        singular: "Dieses Video wird bearbeitet. Es steht in Kürze zum Transkribieren zur Verfügung."
                      },
                      "fr-FR": {
                        singular: "Cette vidéo est en cours de traitement. Il sera bientôt disponible pour la transcription."
                      },
                      "ja-JP": {
                        singular: "この動画は処理中です。まもなく文字起こしが可能になります。"
                      },
                      "ko-KR": {
                        singular: "동영상을 처리하는 중입니다. 곧 스크립트 생성이 가능합니다."
                      },
                      "pt-BR": {
                        singular: "O vídeo está sendo processado, e estará disponível para transcrição em breve."
                      },
                      "zh-CN": {
                        singular: "此视频正在处理中。它将很快可供转录。"
                      }
                    }
                  })
                }),
                isDisabled: !_v4,
                placement: "top",
                children: (0, _v1.jsx)(_v35.Button, {
                  ..._v0,
                  variant: "secondary",
                  onClick: _v5,
                  isDisabled: _v4,
                  children: (0, _v8.translate)({
                    singular: "Transcribe",
                    dictionary: {
                      es: {
                        singular: "Transcribir"
                      },
                      "de-DE": {
                        singular: "Transkribieren"
                      },
                      "fr-FR": {
                        singular: "Transcrire"
                      },
                      "ja-JP": {
                        singular: "文字起こし"
                      },
                      "ko-KR": {
                        singular: "동영상 스크립트 생성하기"
                      },
                      "pt-BR": {
                        singular: "Transcrever"
                      },
                      "zh-CN": {
                        singular: "转录"
                      }
                    }
                  })
                })
              })]
            });
        }
      }, [_v11, _v3, _v4, _v6, _v5, _v2, _v10]),
      _v15 = (0, _v2.useMemo)(() => {
        let _v0 = {
            [_v105.TranscriptStatus.PROCESSING]: "Transcribing...",
            [_v105.TranscriptStatus.FAILED]: "Unable to load transcript",
            [_v105.TranscriptStatus.LANG_NOT_SUPPORTED]: "Unsupported language",
            [_v105.TranscriptStatus.NO_SPEECH]: "No speech detected"
          },
          _v1 = {
            color: "text-primary",
            size: "2xs",
            fontWeight: 500,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          };
        switch (_v2) {
          case _v105.TranscriptStatus.PROCESSING:
          case _v105.TranscriptStatus.FAILED:
          case _v105.TranscriptStatus.LANG_NOT_SUPPORTED:
          case _v105.TranscriptStatus.NO_SPEECH:
            return (0, _v1.jsxs)(_v1.Fragment, {
              children: [(0, _v1.jsx)(_v137.Header, {
                ..._v1,
                alignSelf: "flex-start",
                flex: "1",
                marginTop: "-2px",
                width: "100%",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                children: _v0
              }), (0, _v1.jsx)(_v47.Text, {
                variant: "body-sm",
                color: "text-secondary",
                children: _v0[_v2]
              })]
            });
          default:
            return (0, _v1.jsx)(_v137.Header, {
              ..._v1,
              alignSelf: "center",
              flex: "1",
              children: _v0
            });
        }
      }, [_v0, _v2]),
      _v16 = (0, _v2.useCallback)(_v0 => {
        _v0.target.closest?.("button, a") || _v9?.();
      }, [_v9]);
    return (0, _v1.jsxs)(_v77.Flex, {
      direction: "row",
      alignItems: "center",
      gap: "8",
      padding: "4px",
      position: "relative",
      role: "group",
      borderRadius: "8px",
      _hover: _v7 ? {
        cursor: "pointer",
        backgroundColor: "button-secondary-default"
      } : {},
      onClick: _v16,
      children: [_v13, (0, _v1.jsx)(_v53.Box, {
        flex: "1",
        minWidth: "0",
        children: _v15
      }), _v14, _v7 && (0, _v1.jsx)(_v55.Tooltip, {
        label: _v8 ? (0, _v8.translate)({
          singular: "Collapse",
          dictionary: {
            es: {
              singular: "Contraer"
            },
            "de-DE": {
              singular: "Ausblenden"
            },
            "fr-FR": {
              singular: "Réduire"
            },
            "ja-JP": {
              singular: "折り畳む"
            },
            "ko-KR": {
              singular: "접기"
            },
            "pt-BR": {
              singular: "Minimizar"
            },
            "zh-CN": {
              singular: "折叠"
            }
          }
        }) : (0, _v8.translate)({
          singular: "Expand",
          dictionary: {
            es: {
              singular: "Expandir"
            },
            "de-DE": {
              singular: "Vergrößern"
            },
            "fr-FR": {
              singular: "Agrandir"
            },
            "ja-JP": {
              singular: "拡大"
            },
            "ko-KR": {
              singular: "펼치기"
            },
            "pt-BR": {
              singular: "Expandir"
            },
            "zh-CN": {
              singular: "展开"
            }
          }
        }),
        placement: "top",
        children: (0, _v1.jsx)(_v54.IconButton, {
          variant: "tertiary",
          size: "xs",
          "aria-label": "",
          icon: _v8 ? (0, _v1.jsx)(_v145.ChevronUp, {}) : (0, _v1.jsx)(_v144.ChevronDown, {}),
          onClick: _v9
        })
      })]
    });
  });
  var _v152 = _v0.i(0),
    _v153 = _v0.i(0),
    _v154 = _v0.i(0),
    _v155 = _v0.i(0);
  let _v156 = ({
      sectionData: _v0,
      sectionIndex: _v1,
      isCurrentSection: _v2,
      shouldDisplayWhenUnfetched: _v3,
      onTranscriptItemClick: _v4,
      onFetchTranscript: _v5,
      onCancelTranscript: _v6,
      onToggleDeletedWords: _v7,
      autoScrollFn: _v8,
      scrollToSourceHash: _v9
    }) => {
      let {
          sourceHash: _v10,
          overlapsCompositionTiming: _v11,
          transcriptItems: _v12
        } = _v0,
        _v13 = (0, _v27.useAppDispatch)(),
        _v14 = (0, _v27.useAppSelector)(_v0 => (0, _v24.selectSourceByHash)(_v0, _v10)),
        _v15 = (0, _v27.useAppSelector)(_v0 => (0, _v154.elementStatusSelector)(_v0, _v10)),
        _v16 = (0, _v27.useAppSelector)(_v0 => (0, _v104.selectTranscriptById)(_v0, _v10)),
        _v17 = (0, _v27.useAppSelector)(_v0 => (0, _v104.selectIsShowDeletedWordsById)(_v0, _v10)),
        _v18 = (0, _v27.useAppSelector)(_v130.focusAreaSelector) === _v131.FocusAreaType.TRANSCRIPT,
        {
          getCurrentTimeFromRef: _v19
        } = (0, _v80.useDragonfly)(),
        {
          textSelection: _v20,
          deleteTextSelection: _v21
        } = _v126(),
        {
          ignoreSource: _v22
        } = (0, _v153.useTranscriptIgnoreSources)(),
        _v23 = (0, _v97.shouldShowInDevelopmentFeature)("transcript"),
        _v24 = _v0.transcriptElementTiming[0].compositionTiming.start,
        _v25 = _v0.transcriptElementTiming.slice(-1)[0].compositionTiming.end,
        _v26 = !(0, _v27.useAppSelector)(_v104.collapsedSectionsSelector).includes(_v10),
        _v27 = _v15 === _v155.STATUS.PROGRESS,
        _v28 = (0, _v2.useMemo)(() => (0, _v116.createTranscriptParagraphList)(_v12).map(({
          startIndex: _v0,
          endIndex: _v1
        }) => _v12.slice(_v0, _v1 + 1).filter(({
          remainingDuration: _v0
        }) => !!_v17 || _v0 > 0)).filter(_v0 => _v0.length > 0), [_v17, _v12]),
        _v29 = (0, _v2.useCallback)(() => {
          _v13((0, _v104.setIsShowDeletedWordsForSourceAction)({
            sourceHash: _v10,
            isShowDeletedWords: !_v17
          })), _v7(), (0, _v150.sendTrackTranscriptActions)("click", _v17 ? "hide_deleted_words" : "show_deleted_words", "transcript_action_menu", _v10);
        }, [_v13, _v17, _v7, _v10]),
        _v30 = (0, _v2.useCallback)(_v0 => _v4(_v0, _v1), [_v4, _v1]);
      return ((0, _v2.useEffect)(() => {
        if (!_v2 || !_v18) return;
        let _v0 = _v0 => {
          if (_v101.INPUT_TAGS.includes(_v0.target.tagName)) return;
          let _v1 = _v19(),
            _v2 = _v12.findIndex(({
              compositionStart: _v0,
              compositionEnd: _v1
            }) => (0, _v116.isTimeInRange)(_v1, _v0, _v1)),
            _v3 = _v12[_v2];
          if (!_v3 || -1 === _v3.compositionStart) return;
          if (_v0.preventDefault(), _v0.key === _v152.KEYBOARD_KEYS.RIGHT) {
            let _v0 = (0, _v116.findFirstValidIndexAfterSelection)(_v2, _v12);
            -1 !== _v0 && _v30(_v12[_v0]);
          }
          let _v4 = () => {
            let _v0 = (0, _v116.findLatestValidIndexBeforeSelection)(_v2, _v12);
            -1 !== _v0 && _v30(_v12[_v0]);
          };
          _v0.key === _v152.KEYBOARD_KEYS.LEFT && _v4(), _v0.key === _v152.KEYBOARD_KEYS.BACKSPACE && ((0, _v150.sendTrackTranscriptActions)("keyboard_shortcut", "remove_from_video", "keyboard"), _v20.direction === _v105.TextSelectionDirection.NONE ? (_v13((0, _v24.deleteTranscriptSelectionAction)((0, _v116.getSelectedElementsData)({
            transcriptSections: [_v0],
            startSectionIndex: 0,
            endSectionIndex: 0,
            startTime: _v3.startTime,
            endTime: _v3.endTime
          }))), _v4()) : _v21());
        };
        return document.addEventListener("keydown", _v0), () => {
          document.removeEventListener("keydown", _v0);
        };
      }, [_v19, _v21, _v20.direction, _v13, _v2, _v18, _v30, _v0, _v12]), (0, _v19.default)(() => {
        !_v23 || (0, _v116.isTranscriptStatusFetched)(_v16?.status) || _v27 || _v5(_v10);
      }), _v3 || (0, _v116.isTranscriptStatusFetched)(_v16?.status)) ? (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsxs)(_v53.Box, {
          marginBottom: "8",
          "data-section-index": _v1,
          "data-section-sourcehash": _v10,
          children: [(0, _v1.jsx)(_v151, {
            name: _v14.name,
            thumbUrl: _v14.thumb?.thumbUrl,
            status: _v16?.status,
            isShowDeletedWords: _v17,
            isElementLoading: _v27,
            onFetchTranscript: () => _v5(_v10),
            onCancelTranscript: () => _v6(_v10),
            hasTranscription: _v28.length > 0,
            isOpen: _v26,
            toggleOpen: () => {
              let {
                sourceHash: _v0
              } = _v0;
              _v13((0, _v104.toggleTranscriptOpen)({
                sourceHash: _v0
              }));
            },
            toggleIsShowDeletedWords: _v29,
            ignoreSource: () => {
              _v22(_v10), _v16?.status && _v16.status !== _v105.TranscriptStatus.PROCESSING && (0, _v150.sendTrackTranscriptRemoveSource)(_v10, _v105.TranscriptStatusBiMap[_v16.status] || null);
            }
          }), _v26 && _v28.length > 0 && (0, _v1.jsxs)(_v1.Fragment, {
            children: [(0, _v1.jsxs)(_v53.Box, {
              fontSize: "body-xs",
              color: "text-tertiary",
              lineHeight: "12px",
              padding: "10px 0 6px",
              children: [(0, _v112.timeFormatHHMMSS)(_v24), " - ", (0, _v112.timeFormatHHMMSS)(_v25)]
            }), _v28.map((_v0, _v1) => (0, _v1.jsx)(_v134, {
              sectionIndex: _v1,
              transcriptItems: _v0,
              autoScrollFn: _v8,
              onItemClick: _v30,
              isFirstParagraph: 0 === _v1 && 0 === _v1
            }, `section-${_v1}-paragraph-${_v1}`))]
          })]
        }), (0, _v1.jsx)(_v135, {
          transcriptState: _v16,
          sourceHash: _v10,
          overlapsCompositionTiming: _v11,
          isCurrentSection: _v2,
          scrollToSourceHash: _v9
        })]
      }) : null;
    },
    _v157 = ({
      currentSectionIndex: _v0,
      transcriptSections: _v1,
      setCurrentSectionIndex: _v2
    }) => {
      let _v3 = (0, _v27.useAppSelector)(_v127.currentTimeSelector);
      return (0, _v2.useEffect)(() => {
        let _v0 = _v0 => _v0?.transcriptElementTiming?.some(({
          compositionTiming: _v0
        }) => (0, _v116.isTimeInRange)(_v3, _v0.start, _v0.end));
        if (_v0(_v1[_v0])) return;
        let _v1 = _v1.findIndex(_v0);
        -1 !== _v1 && _v2(_v1);
      }, [_v0, _v3, _v2, _v1]), null;
    };
  var _v158 = _v0.i(0),
    _v159 = _v0.i(0),
    _v160 = _v0.i(0);
  let _v161 = ({
    traverseSearchPosition: _v0
  }) => {
    let _v1 = (0, _v27.useAppSelector)(_v104.searchPositionIndexSelector),
      _v2 = (0, _v27.useAppSelector)(_v104.searchResultsSelector),
      _v3 = 0 === _v2.length ? _v1 : _v1 + 1;
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v47.Text, {
        width: "48px",
        variant: "body-sm",
        color: "text-secondary",
        sx: {
          textWrap: "nowrap",
          textAlign: "center",
          userSelect: "none"
        },
        children: `${_v3}/${_v2.length}`
      }), (0, _v1.jsx)(_v35.Button, {
        variant: "tertiary",
        size: "xs",
        onClick: () => {
          _v0(!1);
        },
        isDisabled: _v2.length < 2,
        children: (0, _v1.jsx)(_v160.ChevronUpSmall, {})
      }), (0, _v1.jsx)(_v35.Button, {
        variant: "tertiary",
        size: "xs",
        onClick: () => {
          _v0(!0);
        },
        isDisabled: _v2.length < 2,
        children: (0, _v1.jsx)(_v159.ChevronDownSmall, {})
      })]
    });
  };
  var _v162 = _v0.i(0),
    _v163 = _v0.i(0),
    _v164 = _v0.i(0),
    _v165 = _v0.i(0),
    _v166 = _v0.i(0),
    _v167 = _v0.i(0),
    _v168 = _v0.i(0),
    _v169 = _v0.i(0),
    _v170 = _v0.i(0),
    _v171 = _v0.i(0),
    _v172 = _v0.i(0),
    _v173 = _v0.i(0),
    _v174 = _v0.i(0);
  let _v175 = ({
      min: _v0,
      max: _v1,
      step: _v2,
      format: _v3,
      precision: _v4,
      defaultValue: _v5,
      value: _v6,
      onChange: _v7,
      dataTestId: _v8,
      inputWidth: _v9
    }) => {
      let [_v10, _v11] = (0, _v2.useState)(_v6.toString()),
        _v12 = (0, _v2.useRef)(!1),
        _v13 = _v0 => (0, _v172.default)(_v0, _v0, _v1);
      return (0, _v2.useEffect)(() => {
        _v12.current || _v11(_v3 ? _v3(_v6) : _v6.toString());
      }, [_v6, _v3]), (0, _v1.jsxs)(_v173.NumberInput, {
        size: "xs",
        width: _v9,
        clampValueOnBlur: !0,
        step: _v2,
        precision: _v4,
        allowMouseWheel: !0,
        defaultValue: _v5,
        value: _v10,
        onChange: _v0 => {
          let _v1 = Number(_v0);
          (0, _v174.isInclusiveRange)(_v1, _v0, _v1) && (_v11(_v0), _v7(_v13(_v1)));
        },
        onFocus: () => _v12.current = !0,
        onBlur: () => {
          let _v0 = Number(_v10) || 0;
          _v12.current = !1, _v11(_v3 ? _v3(_v10) : _v10), _v7(_v13(_v0));
        },
        "data-group": !0,
        "data-testid": _v8,
        children: [(0, _v1.jsx)(_v173.NumberInputField, {
          _groupFocusWithin: {
            textAlign: "left"
          },
          _groupHover: {
            textAlign: "left"
          },
          p: "4px",
          textAlign: "center"
        }), (0, _v1.jsxs)(_v173.NumberInputStepper, {
          _groupFocusWithin: {
            opacity: 1
          },
          _groupHover: {
            opacity: 1
          },
          opacity: 0,
          transition: "opacity 300ms ease 0s",
          children: [(0, _v1.jsx)(_v173.NumberIncrementStepper, {
            "data-testid": `${_v8}-increment-stepper`
          }), (0, _v1.jsx)(_v173.NumberDecrementStepper, {
            "data-testid": `${_v8}-decrement-stepper`
          })]
        })]
      });
    },
    _v176 = 80,
    _v177 = 60,
    _v178 = ({
      min: _v0,
      max: _v1,
      numberInputMax: _v2,
      id: _v3,
      step: _v4,
      format: _v5,
      precision: _v6,
      defaultValue: _v7,
      value: _v8,
      onChange: _v9,
      onChangeEnd: _v10,
      sliderDataTestId: _v11,
      sliderInputTestId: _v12,
      sliderThumbDataTestId: _v13,
      sliderMinWidth: _v14 = _v176,
      inputWidth: _v15 = _v177,
      ..._v16
    }) => (0, _v1.jsxs)(_v53.Box, {
      display: "flex",
      gap: 20,
      paddingLeft: "12px",
      width: "100%",
      ..._v16,
      children: [(0, _v1.jsxs)(_v170.Slider, {
        id: _v3,
        min: _v0,
        max: _v1,
        onChange: _v9,
        onChangeEnd: _v10,
        focusThumbOnChange: !1,
        step: _v4,
        value: _v8,
        minWidth: _v14,
        "data-testid": _v11,
        children: [(0, _v1.jsx)(_v171.SliderTrack, {
          children: (0, _v1.jsx)(_v171.SliderFilledTrack, {})
        }), (0, _v1.jsx)(_v171.SliderThumb, {
          "data-testid": _v13
        })]
      }), (0, _v1.jsx)(_v175, {
        min: _v0,
        max: _v2 ?? _v1,
        step: _v4,
        format: _v5,
        precision: _v6,
        defaultValue: _v7 ?? _v8,
        value: _v8,
        dataTestId: _v12,
        onChange: _v10 || _v9,
        inputWidth: _v15
      })]
    });
  _v0.s(["NumericSliderInput", 0, _v178], 0);
  let _v179 = _v67.default.div.withConfig({
      displayName: "Sidebar.style__SidebarNavContainer",
      componentId: "sc-ce2b90c4-0"
    })`
  display: flex;
  height: 100%;
  flex: 0 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: 1px solid;
  border-color: transparent;
  padding: 12px 24px;
  gap: 16px;
  z-index: 10;
  background: transparent;
`,
    _v180 = _v67.default.div.withConfig({
      displayName: "Sidebar.style__BottomMenuButtonsContainer",
      componentId: "sc-ce2b90c4-1"
    })`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 8px;
  bottom: 16px;
  margin: 0 10px;
`,
    _v181 = _v67.default.div.withConfig({
      displayName: "Sidebar.style__SidebarContainer",
      componentId: "sc-ce2b90c4-2"
    })`
  position: relative;
  display: flex;
  height: 100%;
  flex-direction: row;
  z-index: ${30};
`;
  _v0.s(["BottomMenuButtonsContainer", 0, _v180, "SidebarContainer", 0, _v181, "SidebarNavContainer", 0, _v179, "Z_INDEX_SIDEBAR", 0, 30], 0);
  let _v182 = () => {
      let _v0,
        _v1,
        _v2,
        _v3,
        _v4,
        _v5,
        _v6,
        _v7,
        _v8 = (0, _v27.useAppDispatch)(),
        {
          notifyTimeRemovedFromTheVideo: _v9
        } = (0, _v168.useNotifications)(),
        {
          trackEditorTranscriptRemoveFillerWordsAndGapsClicked: _v10
        } = (0, _v13.useEditorTracking)(),
        _v11 = (0, _v27.useAppSelector)(_v0 => _v0.transcripts.minGapsThreshold),
        {
          isOpen: _v12,
          onClose: _v13,
          onOpen: _v14,
          onToggle: _v15,
          getDisclosureProps: _v16
        } = (0, _v166.useDisclosure)(),
        _v17 = (0, _v2.useRef)(null);
      (0, _v96.useOutsideClick)({
        ref: _v17,
        handler: _v13
      });
      let {
          removableGaps: _v18,
          removeableFillerWords: _v19,
          removeAllFillerWords: _v20,
          removeAllGaps: _v21
        } = (_v0 = (0, _v27.useAppDispatch)(), _v1 = (0, _v27.useAppSelector)(_v104.transcriptSectionsSelector), _v2 = (0, _v27.useAppSelector)(_v0 => _v0.transcripts.minGapsThreshold), _v3 = (0, _v2.useMemo)(() => _v1.map(_v0 => _v0.transcriptItems), [_v1]), _v4 = (0, _v2.useMemo)(() => _v3.map(_v116.getRemovableFillerWords), [_v3]), _v5 = (0, _v2.useCallback)(() => {
          let _v0 = (0, _v116.getBulkRemoveTimingForAllSections)(_v4, _v1);
          _v0((0, _v24.bulkRemoveTranscriptItemsAction)(_v0));
        }, [_v0, _v4, _v1]), _v6 = (0, _v2.useMemo)(() => _v3.map(_v0 => _v0.filter(_v0 => !_v0.word && _v0.remainingDuration >= _v2)), [_v3, _v2]), _v7 = (0, _v2.useCallback)(() => {
          let _v0 = (0, _v116.getBulkRemoveTimingForAllSections)(_v6, _v1);
          _v0((0, _v24.bulkRemoveTranscriptItemsAction)(_v0));
        }, [_v0, _v6, _v1]), {
          removeableFillerWords: _v4,
          removableGaps: _v6,
          removeAllFillerWords: _v5,
          removeAllGaps: _v7
        }),
        {
          count: _v22,
          duration: _v23
        } = (0, _v116.getBulkRemovableItemsCountAndDuration)(_v19),
        {
          count: _v24,
          duration: _v25
        } = (0, _v116.getBulkRemovableItemsCountAndDuration)(_v18),
        [_v26, _v27] = (0, _v112.getDurationDisplayWithSuffixIndication)(_v23),
        [_v28, _v29] = (0, _v112.getDurationDisplayWithSuffixIndication)(_v25);
      return (0, _v1.jsx)(_v53.Box, {
        ref: _v17,
        zIndex: 31,
        h: "100%",
        children: (0, _v1.jsxs)(_v162.Popover, {
          placement: "bottom-start",
          isOpen: _v12,
          onOpen: _v14,
          onClose: _v13,
          children: [(0, _v1.jsx)(_v165.PopoverTrigger, {
            children: (0, _v1.jsx)(_v53.Box, {
              h: "100%",
              children: (0, _v1.jsx)(_v55.Tooltip, {
                placement: "top",
                label: (0, _v8.translate)({
                  singular: "Remove filler words and gaps",
                  dictionary: {
                    es: {
                      singular: "Eliminar palabras de relleno y espacios"
                    },
                    "de-DE": {
                      singular: "Füllwörter und Lücken entfernen"
                    },
                    "fr-FR": {
                      singular: "Supprimer les mots de remplissage et les intervalles"
                    },
                    "ja-JP": {
                      singular: "つなぎ言葉とギャップを削除します"
                    },
                    "ko-KR": {
                      singular: "불필요한 단어 및 간격 제거"
                    },
                    "pt-BR": {
                      singular: "Remover palavras e lacunas de preenchimento"
                    },
                    "zh-CN": {
                      singular: "删除填充词和空白"
                    }
                  }
                }),
                children: (0, _v1.jsxs)(_v35.Button, {
                  variant: "tertiary",
                  size: "xs",
                  position: "relative",
                  h: "100%",
                  onClick: () => {
                    (0, _v150.sendTrackTranscriptBulkRemoveToggle)();
                    let _v0 = (0, _v169.getVimeoVideoId)();
                    _v10({
                      videoId: null !== _v0 ? String(_v0) : null
                    }), _v15();
                  },
                  "data-testid": _v58.testIds.transcriptBulkRemoveButton,
                  children: [(_v24 > 0 || _v22 > 0) && (0, _v1.jsx)(_v53.Box, {
                    position: "absolute",
                    w: 8,
                    h: 8,
                    borderRadius: 4,
                    bg: "status-destructive-primary",
                    right: "-4px",
                    top: "-4px"
                  }), (0, _v1.jsx)(_v167.AiSparkles, {})]
                })
              })
            })
          }), (0, _v1.jsx)(_v164.PopoverContent, {
            children: (0, _v1.jsxs)(_v163.PopoverBody, {
              p: 3,
              minW: "200px",
              ..._v16(),
              children: [(0, _v1.jsx)(_v47.Text, {
                variant: "body-lg",
                children: `${_v22} filler words found`
              }), (0, _v1.jsx)(_v47.Text, {
                variant: "body-sm",
                mb: 4,
                children: _v27 ? (0, _v8.translate)({
                  singular: "Remove {TIME} minutes of ums and uhs",
                  replacements: {
                    TIME: _v26
                  },
                  dictionary: {
                    es: {
                      singular: 'Eliminar {TIME} minutos de "um" y "eh"'
                    },
                    "de-DE": {
                      singular: "Entferne {TIME} Minuten von Ähs und Ähms"
                    },
                    "fr-FR": {
                      singular: "Supprimez {TIME} minutes de « hum » et « euh »"
                    },
                    "ja-JP": {
                      singular: "{TIME}分のつなぎ言葉を削除"
                    },
                    "ko-KR": {
                      singular: "{TIME}분간의 '음' 및 '어'를 제거합니다."
                    },
                    "pt-BR": {
                      singular: 'Exclua {TIME} minutos de "hum"\' e "ahs"'
                    },
                    "zh-CN": {
                      singular: "删除持续 {TIME} 分钟的“嗯”和“啊”"
                    }
                  }
                }) : (0, _v8.translate)({
                  singular: "Remove {TIME} seconds of ums and uhs",
                  replacements: {
                    TIME: _v26
                  },
                  dictionary: {
                    es: {
                      singular: 'Eliminar {TIME} segundos de "um" y "eh"'
                    },
                    "de-DE": {
                      singular: "Entferne {TIME} Sekunden von Ähs und Ähms"
                    },
                    "fr-FR": {
                      singular: "Supprimez {TIME} secondes de « hum » et « euh »"
                    },
                    "ja-JP": {
                      singular: "{TIME}秒のつなぎ言葉を削除"
                    },
                    "ko-KR": {
                      singular: "{TIME}초간의 '음' 및 '어'를 제거합니다."
                    },
                    "pt-BR": {
                      singular: 'Exclua {TIME} segundos de "hum"\' e "ahs"'
                    },
                    "zh-CN": {
                      singular: "删除持续 {TIME} 秒的“嗯”和“啊”"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v35.Button, {
                onClick: () => {
                  _v20(), _v9(_v26, _v27), (0, _v150.sendTrackTranscriptRemoveFillerWords)();
                },
                isDisabled: !_v22,
                leftIcon: (0, _v1.jsx)(_v167.AiSparkles, {}),
                variant: "secondary",
                size: "md",
                "aria-label": _v58.testIds.removeFillerWordsButton,
                "data-testid": _v58.testIds.removeFillerWordsButton,
                px: 40,
                mb: 20,
                w: "100%",
                children: (0, _v8.translate)({
                  singular: "Remove filler words",
                  dictionary: {
                    es: {
                      singular: "Eliminar palabras de relleno"
                    },
                    "de-DE": {
                      singular: "Füllwörter entfernen"
                    },
                    "fr-FR": {
                      singular: "Supprimez les mots de remplissage"
                    },
                    "ja-JP": {
                      singular: "つなぎ言葉を削除"
                    },
                    "ko-KR": {
                      singular: "불필요한 단어 제거"
                    },
                    "pt-BR": {
                      singular: "Remova palavras de preenchimento"
                    },
                    "zh-CN": {
                      singular: "删除填充词"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v47.Text, {
                variant: "body-lg",
                children: `${_v24} word gaps found`
              }), (0, _v1.jsx)(_v47.Text, {
                variant: "body-sm",
                mb: 4,
                children: _v29 ? (0, _v8.translate)({
                  singular: "Remove {TIME} minutes of pauses",
                  replacements: {
                    TIME: _v28
                  },
                  dictionary: {
                    es: {
                      singular: "Eliminar {TIME} minutos de pausas"
                    },
                    "de-DE": {
                      singular: "Entferne {TIME} Minuten an Pausen"
                    },
                    "fr-FR": {
                      singular: "Supprimez {TIME} minutes de pauses"
                    },
                    "ja-JP": {
                      singular: "{TIME}分の一時停止を削除"
                    },
                    "ko-KR": {
                      singular: "{TIME}분간의 침묵을 제거합니다."
                    },
                    "pt-BR": {
                      singular: "Exclua {TIME} minutos de pausas."
                    },
                    "zh-CN": {
                      singular: "删除持续 {TIME} 分钟的停顿"
                    }
                  }
                }) : (0, _v8.translate)({
                  singular: "Remove {TIME} seconds of pauses",
                  replacements: {
                    TIME: _v28
                  },
                  dictionary: {
                    es: {
                      singular: "Eliminar {TIME} segundos de pausas"
                    },
                    "de-DE": {
                      singular: "Entferne {TIME} Sekunden an Pausen"
                    },
                    "fr-FR": {
                      singular: "Supprimez {TIME} secondes de pauses"
                    },
                    "ja-JP": {
                      singular: "{TIME}秒の一時停止を削除"
                    },
                    "ko-KR": {
                      singular: "{TIME}초간의 침묵을 제거합니다."
                    },
                    "pt-BR": {
                      singular: "Exclua {TIME} segundos de pausas"
                    },
                    "zh-CN": {
                      singular: "删除持续 {TIME} 秒的停顿"
                    }
                  }
                })
              }), (0, _v1.jsxs)(_v136.Center, {
                gap: "sm",
                children: [(0, _v1.jsx)(_v47.Text, {
                  variant: "body-sm",
                  whiteSpace: "nowrap",
                  children: (0, _v8.translate)({
                    singular: "Min. length (sec)",
                    dictionary: {
                      es: {
                        singular: "Duración mínima (s)"
                      },
                      "de-DE": {
                        singular: "Min. Länge (Sek.)"
                      },
                      "fr-FR": {
                        singular: "Longueur min. (sec)"
                      },
                      "ja-JP": {
                        singular: "最小長（秒）"
                      },
                      "ko-KR": {
                        singular: "최소 길이(초)"
                      },
                      "pt-BR": {
                        singular: "Duração mín. (seg.)"
                      },
                      "zh-CN": {
                        singular: "最低时长（秒）"
                      }
                    }
                  })
                }), (0, _v1.jsx)(_v178, {
                  value: _v11,
                  min: 0,
                  max: 10,
                  step: .1,
                  onChange: _v0 => _v8((0, _v104.setMinGapsThresholdAction)(_v0)),
                  sliderDataTestId: _v58.testIds.gapsThresholdSlider,
                  inputWidth: 80
                })]
              }), (0, _v1.jsx)(_v35.Button, {
                onClick: () => {
                  _v21(), _v9(_v28, _v29), (0, _v150.sendTrackTranscriptRemoveWordGaps)(_v25);
                },
                isDisabled: !_v24,
                leftIcon: (0, _v1.jsx)(_v167.AiSparkles, {}),
                variant: "secondary",
                size: "md",
                "aria-label": _v58.testIds.removeGapsButton,
                "data-testid": _v58.testIds.removeGapsButton,
                px: 40,
                mt: 4,
                w: "100%",
                children: (0, _v8.translate)({
                  singular: "Remove word gaps",
                  dictionary: {
                    es: {
                      singular: "Eliminar espacios entre palabras"
                    },
                    "de-DE": {
                      singular: "Wortlücken entfernen"
                    },
                    "fr-FR": {
                      singular: "Supprimer les intervalles entre les mots"
                    },
                    "ja-JP": {
                      singular: "ワードギャップを削除"
                    },
                    "ko-KR": {
                      singular: "단어 사이 공백 제거"
                    },
                    "pt-BR": {
                      singular: "Exclua os espaços entre palavras"
                    },
                    "zh-CN": {
                      singular: "删除单词间隙"
                    }
                  }
                })
              })]
            })
          })]
        })
      });
    },
    _v183 = () => {
      let _v0 = (0, _v27.useAppDispatch)(),
        _v1 = (0, _v27.useAppSelector)(_v104.selectAllUiForSources),
        _v2 = (0, _v2.useMemo)(() => Object.values(_v1).every(_v0 => _v0.isShowDeletedWords), [_v1]),
        _v3 = (0, _v2.useCallback)(() => {
          _v0((0, _v104.toggleShowDeletedWordsForAllSourcesAction)(!_v2)), window.getSelection()?.removeAllRanges(), (0, _v150.sendTrackTranscriptActions)("click", _v2 ? "hide_deleted_words" : "show_deleted_words", "drawer");
        }, [_v0, _v2]);
      return (0, _v1.jsx)(_v55.Tooltip, {
        placement: "top",
        label: _v2 ? (0, _v8.translate)({
          singular: "Hide deleted words",
          dictionary: {
            es: {
              singular: "Ocultar palabras eliminadas"
            },
            "de-DE": {
              singular: "Gelöschte Wörter ausblenden"
            },
            "fr-FR": {
              singular: "Masquez les mots supprimés"
            },
            "ja-JP": {
              singular: "削除した言葉を非表示"
            },
            "ko-KR": {
              singular: "삭제된 단어 숨기기"
            },
            "pt-BR": {
              singular: "Ocultar palavras excluídas"
            },
            "zh-CN": {
              singular: "隐藏已删除的字词"
            }
          }
        }) : (0, _v8.translate)({
          singular: "Show deleted words",
          dictionary: {
            es: {
              singular: "Mostrar palabras eliminadas"
            },
            "de-DE": {
              singular: "Gelöschte Wörter anzeigen"
            },
            "fr-FR": {
              singular: "Afficher les mots supprimés"
            },
            "ja-JP": {
              singular: "削除した言葉を表示"
            },
            "ko-KR": {
              singular: "삭제된 단어 표시"
            },
            "pt-BR": {
              singular: "Mostrar palavras excluídas"
            },
            "zh-CN": {
              singular: "显示已删除的字词"
            }
          }
        }),
        children: (0, _v1.jsx)(_v35.Button, {
          onClick: _v3,
          variant: _v2 ? "secondary" : "tertiary",
          size: "xs",
          h: "100%",
          "data-testid": _v58.testIds.transcriptInspector.showDeletedWordsButton,
          children: (0, _v1.jsx)(_v149, {})
        })
      });
    },
    _v184 = (_v0, _v1 = 300) => {
      let _v2 = (0, _v2.useRef)(void 0);
      return (0, _v2.useEffect)(() => {
        _v2.current = _v0;
      }, [_v0]), (0, _v2.useMemo)(() => (0, _v95.default)(() => {
        _v2.current?.();
      }, _v1), [_v1]);
    };
  _v0.s(["useDebounce", 0, _v184], 0);
  let _v185 = (_v0, _v1) => {
      let _v2 = 0,
        _v3 = _v1.length - 1,
        _v4 = Math.floor((_v2 + _v3) / 2);
      for (; _v2 < _v3 && !(_v1[_v4].strIndex <= _v0 && _v1[_v4].strIndex + _v1[_v4].word.length > _v0);) _v0 < _v1[_v4].strIndex && (_v3 = _v4 - 1), _v0 > _v1[_v4].strIndex && (_v2 = _v4 + 1), _v4 = Math.floor((_v2 + _v3) / 2);
      return _v1[_v4];
    },
    _v186 = ({
      transcriptSections: _v0
    }) => {
      let _v1 = (0, _v27.useAppDispatch)(),
        _v2 = (0, _v27.useAppSelector)(_v130.focusAreaSelector),
        _v3 = (0, _v27.useAppSelector)(_v104.selectAllUiForSources),
        _v4 = (0, _v27.useAppSelector)(_v104.searchValueSelector),
        _v5 = (0, _v27.useAppSelector)(_v104.searchPositionIndexSelector),
        _v6 = (0, _v27.useAppSelector)(_v104.searchResultsSelector),
        _v7 = (0, _v2.useRef)({
          text: "",
          items: []
        }),
        _v8 = _v4.length > 0,
        _v9 = (0, _v2.useCallback)(_v0 => {
          _v1((0, _v104.setSearchPositionAction)(_v0));
        }, [_v1]),
        _v10 = (0, _v2.useCallback)(_v0 => {
          let _v1 = 0 === _v5 ? _v6.length - 1 : _v5 - 1;
          _v0 && (_v1 = _v5 === _v6.length - 1 ? 0 : _v5 + 1), _v9(Math.max(0, Math.min(_v1, _v6.length)));
        }, [_v5, _v6, _v9]),
        _v11 = (0, _v2.useCallback)(() => {
          let _v0 = "",
            _v1 = [],
            _v2 = 0;
          _v0.forEach((_v0, _v1) => {
            let {
                transcriptItems: _v2,
                sourceHash: _v3
              } = _v0,
              _v4 = _v3[_v3]?.isShowDeletedWords;
            _v2.forEach(_v0 => {
              let {
                word: _v1,
                index: _v2,
                remainingDuration: _v3
              } = _v0;
              if (_v1.length > 0 && (_v4 || !_v4 && _v3 > 0)) {
                let _v0 = _v1 + " ";
                _v1.push({
                  index: _v2,
                  sectionIndex: _v1,
                  strIndex: _v2,
                  word: _v0
                }), _v0 += _v0.toLowerCase(), _v2 += _v0.length;
              }
            });
          }), _v7.current = {
            text: _v0,
            items: _v1
          };
        }, [_v3, _v0]),
        _v12 = _v184(() => {
          let _v0;
          if (_v9(0), !_v4 || _v4.length < 1 || 0 === _v7.current.items.length) return void _v1((0, _v104.setSearchResultsAction)([]));
          let _v1 = RegExp(_v4, "gi"),
            _v2 = [];
          for (; null !== (_v0 = _v1.exec(_v7.current.text));) {
            let _v0 = _v0.index,
              _v1 = _v0 + _v4.length - 1,
              _v2 = _v185(_v0, _v7.current.items),
              _v3 = _v185(_v1, _v7.current.items);
            _v2.sectionIndex === _v3.sectionIndex && _v2.push({
              startIndex: _v2.index,
              endIndex: _v3.index,
              sectionIndex: _v2.sectionIndex
            });
          }
          _v9(0), _v1((0, _v104.setSearchResultsAction)(_v2));
        }, 300);
      return (0, _v2.useEffect)(() => {
        let _v0 = _v0 => {
          _v0.key === _v152.KEYBOARD_KEYS.ENTER && _v2 === _v131.FocusAreaType.TRANSCRIPT && _v6.length > 1 && _v10(!0);
        };
        return document.addEventListener("keydown", _v0), () => {
          document.removeEventListener("keydown", _v0);
        };
      }, [_v8, _v5, _v6, _v10, _v2]), (0, _v2.useEffect)(() => {
        _v11();
      }, [_v11]), (0, _v1.jsxs)(_v77.Flex, {
        padding: `4px ${_v34.PADDING}px 0 ${_v34.PADDING}px`,
        marginBottom: "16",
        gap: _v8 ? "4px" : "8px",
        children: [(0, _v1.jsx)(_v53.Box, {
          width: "100%",
          children: (0, _v1.jsx)(_v158.Search, {
            variant: "minimal",
            value: _v4,
            onChange: _v0 => {
              _v1((0, _v104.setSearchValueAction)(_v0.target.value)), _v12();
            },
            placeholder: "Search",
            onClick: () => {
              (0, _v150.sendTrackTranscriptSearchClick)();
            },
            size: "sm",
            "data-testid": _v58.testIds.transcriptInspector.searchInput
          })
        }), (0, _v1.jsx)(_v77.Flex, {
          gap: _v8 ? "4px" : "8px",
          alignItems: "center",
          children: _v8 ? (0, _v1.jsx)(_v161, {
            traverseSearchPosition: _v10
          }) : (0, _v1.jsxs)(_v1.Fragment, {
            children: [(0, _v1.jsx)(_v182, {}), (0, _v1.jsx)(_v183, {})]
          })
        })]
      });
    };
  var _v187 = _v0.i(0),
    _v188 = _v0.i(0);
  let _v189 = ({
      onClick: _v0,
      command: _v1,
      icon: _v2,
      children: _v3,
      ..._v4
    }) => (0, _v1.jsxs)(_v35.Button, {
      onClick: _v0,
      display: "flex",
      alignItems: "center",
      justifyContent: "start",
      padding: 2,
      cursor: "pointer",
      width: "100%",
      color: "text-primary",
      background: "transparent",
      borderRadius: "md",
      gap: "md",
      _hover: {
        background: "stroke"
      },
      ..._v4,
      children: [_v2, (0, _v1.jsx)(_v47.Text, {
        variant: "body-md",
        children: _v3
      }), (0, _v1.jsx)(_v47.Text, {
        variant: "body-md",
        children: _v1
      })]
    }),
    _v190 = () => {
      let _v0 = (0, _v27.useAppSelector)(_v104.selectAllUiForSources),
        _v1 = (0, _v27.useAppSelector)(_v104.transcriptSectionsSelector),
        _v2 = (0, _v2.useRef)(null);
      (0, _v188.useFocusArea)(_v2, _v131.FocusAreaType.IGNORE);
      let {
          textSelection: _v3,
          isSelectingText: _v4,
          selectionFocusRect: _v5,
          restoreTextSelection: _v6,
          deleteTextSelection: _v7
        } = _v126(),
        {
          trackEditorTranscriptRemoveFromVideoClicked: _v8,
          trackEditorTranscriptRestoreClicked: _v9
        } = (0, _v13.useEditorTracking)(),
        {
          direction: _v10,
          selectionType: _v11,
          selectedSectionsRange: _v12
        } = _v3,
        _v13 = (0, _v2.useMemo)(() => {
          if (!_v1 || !_v0) return !1;
          let {
            start: _v0,
            end: _v1
          } = _v12;
          for (let _v0 = _v0.sectionIndex; _v0 <= _v1.sectionIndex; _v0++) {
            let _v0 = _v1[_v0]?.sourceHash;
            if (_v0 && !_v0[_v0]?.isShowDeletedWords) return !1;
          }
          return !0;
        }, [_v0, _v12, _v1]),
        _v14 = _v11 === _v105.TranscriptSelectionType.EXISTING,
        _v15 = _v11 === _v105.TranscriptSelectionType.DELETED,
        _v16 = _v11 === _v105.TranscriptSelectionType.COMBINED,
        _v17 = _v10 !== _v105.TextSelectionDirection.NONE,
        _v18 = (0, _v2.useMemo)(() => {
          if (!_v5 || !_v17) return;
          let _v0 = window.innerHeight - 50,
            _v1 = _v16 ? 90 : 50;
          return {
            top: _v10 === _v105.TextSelectionDirection.FORWARD ? _v5.bottom + _v1 > _v0 ? _v5.top - _v1 : _v5.bottom : _v5.top - _v1 < 100 ? _v5.bottom : _v5.top - _v1,
            left: _v5.left
          };
        }, [_v10, _v17, _v5, _v16]);
      return (0, _v2.useEffect)(() => {
        !_v4 && _v17 && (0, _v150.sendTrackTranscriptSelectionMenuView)(_v15 || _v16, _v14 || _v16);
      }, [_v4, _v17, _v16, _v14, _v15]), (0, _v1.jsx)(_v138.Menu, {
        isOpen: !_v4 && _v17,
        children: (0, _v1.jsx)(_v142.Portal, {
          children: (0, _v1.jsxs)(_v140.MenuList, {
            ref: _v2,
            "data-testid": _v58.testIds.transcriptInspector.selectionMenu,
            py: "xs",
            px: "sm",
            borderRadius: "md",
            rootProps: {
              style: {
                zIndex: 999,
                position: "absolute",
                top: _v18?.top,
                left: _v18?.left
              }
            },
            children: [(_v16 || _v14) && (0, _v1.jsx)(_v189, {
              command: "⌫",
              icon: (0, _v1.jsx)(_v57.TrashBin, {}),
              onClick: () => {
                _v7(), (0, _v150.sendTrackTranscriptActions)("click", "remove_from_video", "transcript_action_menu");
                let _v0 = (0, _v169.getVimeoVideoId)();
                _v8({
                  videoId: null !== _v0 ? String(_v0) : null
                });
              },
              "data-testid": _v58.testIds.transcriptInspector.itemMenu.removeButton,
              children: (0, _v8.translate)({
                singular: "Remove from video",
                dictionary: {
                  es: {
                    singular: "Quitar del video"
                  },
                  "de-DE": {
                    singular: "Aus dem Video entfernen"
                  },
                  "fr-FR": {
                    singular: "Supprimer de la vidéo"
                  },
                  "ja-JP": {
                    singular: "動画から削除"
                  },
                  "ko-KR": {
                    singular: "동영상에서 제거"
                  },
                  "pt-BR": {
                    singular: "Remover do vídeo"
                  },
                  "zh-CN": {
                    singular: "从视频中移除"
                  }
                }
              })
            }), (_v16 && _v13 || _v15) && (0, _v1.jsx)(_v189, {
              icon: (0, _v1.jsx)(_v187.Undo, {}),
              onClick: () => {
                _v6(), (0, _v150.sendTrackTranscriptActions)("click", "restore", "transcript_action_menu");
                let _v0 = (0, _v169.getVimeoVideoId)();
                _v9({
                  videoId: null !== _v0 ? String(_v0) : null
                });
              },
              "data-testid": _v58.testIds.transcriptInspector.itemMenu.restoreButton,
              children: (0, _v8.translate)({
                singular: "Restore",
                dictionary: {
                  es: {
                    singular: "Restaurar"
                  },
                  "de-DE": {
                    singular: "Wiederherstellen"
                  },
                  "fr-FR": {
                    singular: "Réinstaurer"
                  },
                  "ja-JP": {
                    singular: "復元"
                  },
                  "ko-KR": {
                    singular: "복원"
                  },
                  "pt-BR": {
                    singular: "Restaure"
                  },
                  "zh-CN": {
                    singular: "恢复"
                  }
                }
              })
            })]
          })
        })
      });
    };
  var _v191 = _v0.i(0);
  let _v192 = "dragstart",
    _v193 = {
      margin: `0 ${_v34.BOKEH_MARGIN}px`,
      marginBottom: "4px",
      padding: "12px 0",
      borderBottom: "1px solid",
      borderBottomColor: "stroke"
    },
    _v194 = (0, _v2.memo)(() => {
      let _v0 = (0, _v27.useAppDispatch)(),
        _v1 = (0, _v27.useAppSelector)(_v104.transcriptSectionsSelector),
        _v2 = (0, _v27.useAppSelector)(_v104.sectionSourcesTotalSelector),
        _v3 = (0, _v27.useAppSelector)(_v104.fetchedTranscriptSourceIds),
        [_v4, _v5] = (0, _v2.useState)(0),
        _v6 = (0, _v2.useRef)(null),
        _v7 = (0, _v2.useRef)(null),
        {
          resetTextSelection: _v8,
          isSelectingText: _v9
        } = _v126(),
        {
          scrollToLayerByIndex: _v10,
          animateSeek: _v11
        } = (0, _v191.useTimelineContext)(),
        {
          pause: _v12
        } = (0, _v80.useDragonfly)();
      (0, _v188.useFocusArea)(_v7, _v131.FocusAreaType.TRANSCRIPT);
      let _v13 = (0, _v2.useCallback)((_v0, _v1) => {
          if (-1 === _v0.compositionStart) return;
          let _v2 = (0, _v115.measureInteraction)();
          _v94(() => {
            let _v0 = _v2.end();
            _v114.LogService.sendAction(_v100.TranscriptInspectorPerformance, {
              interactionCost: _v0,
              interactionType: "itemClick",
              sectionsTotal: _v1.length,
              firstSectionItemsTotal: _v1.length > 0 ? _v1[0].transcriptItems.length : null
            });
          }), _v5(_v1), _v12(), _v0.layerIndex > -1 && _v10(_v0.layerIndex), _v11(_v0.compositionStart);
        }, [_v11, _v12, _v10, _v1]),
        _v14 = (0, _v2.useCallback)(_v0 => {
          _v0((0, _v104.setShouldFetchTranscriptForSource)({
            sourceHash: _v0,
            shouldFetchTranscript: !0,
            force: !0
          })), (0, _v150.sendTrackTranscriptTranscribe)("drawer", "transcribe", 1, _v0);
        }, [_v0]),
        _v15 = (0, _v2.useCallback)(_v0 => {
          _v0((0, _v104.setShouldFetchTranscriptForSource)({
            sourceHash: _v0,
            shouldFetchTranscript: !1,
            force: !0
          }));
        }, [_v0]),
        _v16 = (0, _v2.useCallback)(_v0 => {
          let _v1 = _v6?.current;
          if (_v0 && _v1) {
            let _v0 = _v0.getBoundingClientRect(),
              _v1 = _v1.getBoundingClientRect(),
              _v2 = _v0.height * _v102.TRANSCRIPT_ITEM_SCROLL_THRESHOLD;
            (_v0.top <= _v1.top ? _v1.top - _v0.top > _v2 : _v0.bottom - _v1.bottom > _v2) && _v0.scrollIntoView({
              block: "start",
              behavior: "smooth",
              inline: "nearest"
            });
          }
        }, [_v6]),
        _v17 = (0, _v2.useMemo)(() => (0, _v95.default)(_v16, 100), [_v16]),
        _v18 = (0, _v2.useCallback)(_v0 => {
          let _v1 = document.querySelector(`[data-section-sourcehash="${_v0}"]`);
          _v1 && _v17(_v1);
        }, [_v17]),
        _v19 = (0, _v2.useCallback)(() => {
          let _v0 = {};
          _v1.forEach(_v0 => _v0[_v0.sourceHash] = !0), Object.keys(_v0).forEach(_v0 => {
            _v0((0, _v104.setShouldFetchTranscriptForSource)({
              sourceHash: _v0,
              shouldFetchTranscript: !0,
              force: !0
            }));
          }), (0, _v150.sendTrackTranscriptTranscribe)("drawer", "transcribe_all", Object.keys(_v0).length, null);
        }, [_v0, _v1]),
        _v20 = (0, _v2.useCallback)(() => {
          window.getSelection()?.removeAllRanges();
        }, []),
        _v21 = (0, _v2.useMemo)(() => {
          let _v0 = {};
          return _v1.map((_v0, _v1) => {
            let _v2 = (0, _v1.jsx)(_v156, {
              sectionIndex: _v1,
              isCurrentSection: _v1 === _v4,
              onTranscriptItemClick: _v13,
              sectionData: _v0,
              autoScrollFn: _v17,
              scrollToSourceHash: _v18,
              shouldDisplayWhenUnfetched: !_v0[_v0.sourceHash],
              onFetchTranscript: _v14,
              onCancelTranscript: _v15,
              onToggleDeletedWords: _v20
            }, `${_v0.transcriptElementTiming[0].id}`);
            return _v0[_v0.sourceHash] = !0, _v2;
          });
        }, [_v4, _v15, _v14, _v20, _v13, _v17, _v18, _v1]);
      return (0, _v96.useOutsideClick)({
        ref: _v7,
        handler: _v0 => {
          let _v1 = document.querySelector(`[data-testid=${_v58.testIds.transcriptInspector.selectionMenu}]`);
          _v1?.contains(_v0.target) || _v8();
        }
      }), (0, _v2.useEffect)(() => {
        _v9 && _v0((0, _v82.resetSelectionAction)());
      }, [_v0, _v9]), (0, _v2.useEffect)(() => {
        let _v0 = _v6.current;
        if (_v0) {
          let _v0 = _v0 => _v0.preventDefault();
          return _v0.addEventListener(_v192, _v0), () => _v0.removeEventListener(_v192, _v0);
        }
      }, []), (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsxs)(_v77.Flex, {
          h: "100%",
          flexDirection: "column",
          ref: _v7,
          children: [0 === _v3.length ? (0, _v1.jsx)(_v53.Box, {
            ..._v193,
            children: (0, _v1.jsx)(_v47.Text, {
              variant: "body-sm",
              marginTop: `${_v34.BOKEH_MARGIN}px`,
              color: "text-secondary",
              children: `${_v2} video files found`
            })
          }) : (0, _v1.jsx)(_v186, {
            transcriptSections: _v1
          }), (0, _v1.jsx)(_v86.default, {
            ref: _v6,
            children: (0, _v1.jsxs)(_v53.Box, {
              h: "100%",
              userSelect: "none",
              children: [_v21, _v2 - _v3.length > 1 && (0, _v1.jsx)(_v35.Button, {
                size: "sm",
                w: "100%",
                variant: "secondary",
                onClick: _v19,
                children: (0, _v8.translate)({
                  singular: "Transcribe all files",
                  dictionary: {
                    es: {
                      singular: "Transcriba todos los archivos"
                    },
                    "de-DE": {
                      singular: "Alle Dateien transkribieren"
                    },
                    "fr-FR": {
                      singular: "Transcrivez tous les fichiers"
                    },
                    "ja-JP": {
                      singular: "すべてのファイルを文字起こし"
                    },
                    "ko-KR": {
                      singular: "모든 파일 스크립트 생성"
                    },
                    "pt-BR": {
                      singular: "Transcreva todos os arquivos"
                    },
                    "zh-CN": {
                      singular: "转录所有文件"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v190, {})]
            })
          })]
        }), (0, _v1.jsx)(_v157, {
          currentSectionIndex: _v4,
          transcriptSections: _v1,
          setCurrentSectionIndex: _v5
        })]
      });
    }),
    _v195 = new class {
      abortControllersMap = {};
      isFetchingMap = {};
      setFetchingForSource(_v0) {
        return this.isFetchingMap[_v0] = !0, this.abortControllersMap[_v0] = new AbortController(), this.abortControllersMap[_v0];
      }
      cancelFetchingForSource(_v0) {
        this.abortControllersMap[_v0].abort(_v105.TranscriptApiQueryError.CANCEL), delete this.isFetchingMap[_v0], delete this.abortControllersMap[_v0];
      }
      getIsFetchingForSource(_v0) {
        return this.isFetchingMap[_v0];
      }
    }();
  var _v196 = _v0.i(0),
    _v197 = _v0.i(0),
    _v198 = _v0.i(0);
  let _v199 = (0, _v2.forwardRef)((_v0, _v1) => (0, _v1.jsx)("svg", {
      ref: _v1,
      ..._v0,
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "currentcolor",
      xmlns: "http://www.w3.org/2000/svg",
      children: (0, _v1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z",
        fill: "currentcolor"
      })
    })),
    _v200 = (0, _v2.memo)(() => {
      let _v0 = (0, _v27.useAppDispatch)(),
        _v1 = (0, _v27.useAppSelector)(_v104.transcriptSectionsTotalSelector),
        _v2 = (0, _v27.useAppSelector)(_v104.sectionSourcesTotalSelector),
        _v3 = (0, _v27.useAppSelector)(_v104.sourcesForViewInspectorBIEvent, _v90.shallowEqual);
      (() => {
        let _v0 = (0, _v27.useAppSelector)(_v24.storyboardIdSelector),
          _v1 = (0, _v27.useAppSelector)(_v104.shouldFetchTranscriptsSelector),
          _v2 = (0, _v27.useAppSelector)(_v24.sourceMapSelector),
          [_v3] = (0, _v196.useLazyGetTranscriptForSourceQuery)(),
          _v4 = (0, _v2.useCallback)((_v0, _v1) => {
            let _v2 = _v2[_v0];
            try {
              _v3({
                sourceHash: _v0,
                isLibrarySource: (0, _v116.isSourceFromLibrary)(_v2),
                storyboardId: _v0,
                signal: _v1.signal
              });
            } catch (_v0) {}
          }, [_v3, _v2, _v0]);
        (0, _v2.useEffect)(() => {
          Object.keys(_v1).forEach(_v0 => {
            let _v1 = _v1[_v0],
              _v2 = _v195.getIsFetchingForSource(_v0);
            if (_v1 && !_v2) {
              let _v0 = _v195.setFetchingForSource(_v0);
              _v4(_v0, _v0);
            } else !_v1 && _v2 && _v195.cancelFetchingForSource(_v0);
          });
        }, [_v4, _v1]);
      })();
      let _v4 = 0 === _v2;
      return (0, _v19.default)(() => {
        (0, _v150.sendTrackTranscriptDrawerView)({
          ...(0, _v198.lowerCaseUnderscore)(_v3),
          total_sections: _v1
        }, _v4);
      }), (0, _v1.jsxs)(_v73.Inspector, {
        children: [(0, _v1.jsx)(_v75.InspectorHeader, {
          title: (0, _v8.translate)({
            singular: "Transcript",
            dictionary: {
              es: {
                singular: "Transcripción"
              },
              "de-DE": {
                singular: "Transkript"
              },
              "fr-FR": {
                singular: "Transcription"
              },
              "ja-JP": {
                singular: "トランスクリプト"
              },
              "ko-KR": {
                singular: "스크립트"
              },
              "pt-BR": {
                singular: "Transcrição"
              },
              "zh-CN": {
                singular: "文字稿"
              }
            }
          }),
          info: (0, _v8.translate)({
            singular: "Transcribe files to edit your video by deleting text from the transcript",
            dictionary: {
              es: {
                singular: "Transcriba archivos para editar su video eliminando texto de la transcripción"
              },
              "de-DE": {
                singular: "Transkribieren Sie Dateien, um Ihr Video zu bearbeiten, indem Sie Text aus dem Transkript löschen."
              },
              "fr-FR": {
                singular: "Transcrivez les fichiers pour modifier votre vidéo en supprimant du texte de la transcription."
              },
              "ja-JP": {
                singular: "トランスクリプトからテキストを削除して、動画を編集するためにファイルの文字起こしをします。"
              },
              "ko-KR": {
                singular: "스크립트에서 텍스트를 삭제하여 동영상을 편집하려면 파일을 변환하세요."
              },
              "pt-BR": {
                singular: "Edite seus vídeos transcrevendo arquivos e removendo texto das transcrições."
              },
              "zh-CN": {
                singular: "转录文件以通过删除转录文稿中的文本来编辑视频"
              }
            }
          })
        }), (0, _v1.jsx)(_v74.InspectorBody, {
          children: (0, _v1.jsxs)(_v125, {
            children: [_v4 && (0, _v1.jsxs)(_v77.Flex, {
              h: "100%",
              flexDirection: "column",
              children: [(0, _v1.jsx)(_v51.default, {
                type: _v28.EmptyInspectorView.TRANSCRIPT,
                title: (0, _v8.translate)({
                  singular: "No transcripts yet",
                  dictionary: {
                    es: {
                      singular: "Aún no hay transcripciones"
                    },
                    "de-DE": {
                      singular: "Noch keine Transkripte vorhanden"
                    },
                    "fr-FR": {
                      singular: "Pas encore de transcriptions"
                    },
                    "ja-JP": {
                      singular: "まだトランスクリプトがありません"
                    },
                    "ko-KR": {
                      singular: "아직 스크립트가 없습니다."
                    },
                    "pt-BR": {
                      singular: "Ainda não há transcrições"
                    },
                    "zh-CN": {
                      singular: "尚无转录"
                    }
                  }
                }),
                text: (0, _v8.translate)({
                  singular: "Record or add a video to transcribe",
                  dictionary: {
                    es: {
                      singular: "Grabe o añada un video para transcribirlo"
                    },
                    "de-DE": {
                      singular: "Zum Transkribieren ein Video aufnehmen oder hinzufügen"
                    },
                    "fr-FR": {
                      singular: "Enregistrez ou ajoutez une vidéo à transcrire"
                    },
                    "ja-JP": {
                      singular: "文字起こしする動画を録画または追加"
                    },
                    "ko-KR": {
                      singular: "스크립트를 생성할 동영상 녹화 또는 추가"
                    },
                    "pt-BR": {
                      singular: "Grave ou adicione um vídeo para transcrever"
                    },
                    "zh-CN": {
                      singular: "录制或添加视频以进行转录"
                    }
                  }
                })
              }), (0, _v1.jsxs)(_v77.Flex, {
                justifyContent: "center",
                children: [(0, _v1.jsx)(_v35.Button, {
                  variant: "secondary",
                  "data-testid": "media-inspector-transcript-button-record-empty-state",
                  marginTop: "24px",
                  marginRight: "8px",
                  size: "sm",
                  leftIcon: (0, _v1.jsx)(_v199, {}),
                  onClick: () => {
                    (0, _v150.sendTrackRecordOpenTranscriptFeature)("drawer"), _v0((0, _v197.toggleRecordAction)(!0));
                  },
                  children: (0, _v8.translate)({
                    singular: "Record",
                    dictionary: {
                      es: {
                        singular: "Grabar"
                      },
                      "de-DE": {
                        singular: "Aufnehmen"
                      },
                      "fr-FR": {
                        singular: "Enregistrer"
                      },
                      "ja-JP": {
                        singular: "録画"
                      },
                      "ko-KR": {
                        singular: "녹화"
                      },
                      "pt-BR": {
                        singular: "Gravar"
                      },
                      "zh-CN": {
                        singular: "录制"
                      }
                    }
                  })
                }), (0, _v1.jsx)(_v35.Button, {
                  variant: "primary",
                  "data-testid": "media-inspector-transcript-button-library-empty-state",
                  marginTop: "24px",
                  size: "sm",
                  onClick: () => {
                    (0, _v150.sendTrackMediaOpenTranscriptFeature)("drawer"), _v0((0, _v70.openInspectorAction)({
                      inspectorType: _v72.InspectorType.MEDIA
                    }));
                  },
                  children: (0, _v8.translate)({
                    singular: "Add media",
                    dictionary: {
                      es: {
                        singular: "Agregar medios"
                      },
                      "de-DE": {
                        singular: "Mediendateien hinzufügen"
                      },
                      "fr-FR": {
                        singular: "Ajouter un média"
                      },
                      "ja-JP": {
                        singular: "メディアを追加"
                      },
                      "ko-KR": {
                        singular: "미디어 추가"
                      },
                      "pt-BR": {
                        singular: "Adicionar mídia"
                      },
                      "zh-CN": {
                        singular: "添加媒体"
                      }
                    }
                  })
                })]
              })]
            }), !_v4 && (0, _v1.jsx)(_v194, {})]
          })
        })]
      });
    });
  var _v201 = _v0.i(0),
    _v202 = _v0.i(0),
    _v203 = _v0.i(0),
    _v204 = _v0.i(0),
    _v205 = _v0.i(0),
    _v206 = _v0.i(0),
    _v207 = _v0.i(0),
    _v208 = _v0.i(0),
    _v209 = _v0.i(0),
    _v210 = _v0.i(0),
    _v211 = _v0.i(0),
    _v212 = _v0.i(0),
    _v213 = _v0.i(0);
  let _v214 = (0, _v2.memo)(({
      isShowProjectColors: _v0,
      width: _v1 = 235,
      positionerStyle: _v2,
      handleChangeEnd: _v3
    }) => {
      let _v4 = (0, _v27.useAppSelector)(_v24.brandColorsSelector),
        _v5 = [_v4.primary, _v4.secondary, _v4.default];
      return (0, _v1.jsx)(_v211.ColorPickerPositioner, {
        style: _v2,
        children: (0, _v1.jsxs)(_v211.ColorPickerContent, {
          style: {
            height: "max-content",
            width: _v1
          },
          children: [(0, _v1.jsx)(_v211.ColorPickerArea, {}), (0, _v1.jsx)(_v213.Grid, {
            gap: "200",
            gridTemplateColumns: "1fr",
            children: (0, _v1.jsx)(_v77.Flex, {
              width: "100%",
              direction: "column",
              gap: "200",
              justifyContent: "center",
              children: (0, _v1.jsxs)(_v211.ColorPickerChannelSlider, {
                channel: "hue",
                children: [(0, _v1.jsx)(_v211.ColorPickerChannelSliderTrack, {}), (0, _v1.jsx)(_v211.ColorPickerChannelSliderThumb, {})]
              })
            })
          }), (0, _v1.jsxs)(_v77.Flex, {
            width: "100%",
            gap: "75",
            height: "32px",
            alignItems: "center",
            children: [(0, _v1.jsx)(_v211.ColorPickerChannelInput, {
              channel: "hex",
              style: {
                padding: "0 12px"
              }
            }), (0, _v1.jsx)(_v211.ColorPickerEyeDropperTrigger, {
              size: "sm"
            })]
          }), _v0 && (0, _v1.jsx)(_v53.Box, {
            width: "100%",
            children: (0, _v1.jsxs)(_v211.ColorPickerSwatchGroup, {
              style: {
                display: "inline-flex",
                alignItems: "center",
                width: "100%"
              },
              children: [(0, _v1.jsx)(_v47.Text, {
                variant: "heading-2xs",
                whiteSpace: "nowrap",
                children: (0, _v8.translate)({
                  singular: "Project Colors",
                  dictionary: {
                    es: {
                      singular: "Colores del proyecto"
                    },
                    "de-DE": {
                      singular: "Projekt Farben"
                    },
                    "fr-FR": {
                      singular: "Couleurs du projet"
                    },
                    "ja-JP": {
                      singular: "プロジェクトの色"
                    },
                    "ko-KR": {
                      singular: "프로젝트 색상"
                    },
                    "pt-BR": {
                      singular: "Cores do projeto"
                    },
                    "zh-CN": {
                      singular: "项目颜色"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v77.Flex, {
                alignItems: "center",
                justifyContent: "flex-end",
                children: _v5.map(_v0 => (0, _v1.jsx)(_v211.ColorPickerSwatchTrigger, {
                  style: {
                    marginLeft: "10px"
                  },
                  value: _v0,
                  onClick: _v3,
                  children: (0, _v1.jsx)(_v211.ColorPickerSwatch, {
                    value: _v0,
                    boxSize: "xs"
                  })
                }, _v0))
              })]
            })
          })]
        })
      });
    }),
    _v215 = ({
      label: _v0,
      value: _v1,
      onChange: _v2,
      onChangeEnd: _v3
    }) => {
      let [_v4, _v5] = (0, _v2.useState)(!1),
        _v6 = (0, _v2.useRef)(_v1),
        _v7 = () => {
          _v3(_v6.current);
        };
      return (0, _v1.jsxs)(_v211.ColorPickerRoot, {
        onValueChange: _v0 => {
          let _v1 = _v0.value.toString("hex");
          _v6.current = _v1, _v2(_v1);
        },
        onOpenChange: ({
          open: _v0
        }) => {
          _v5(_v0), _v0 || _v3(_v6.current);
        },
        onValueChangeEnd: _v7,
        positioning: {
          placement: "bottom"
        },
        defaultValue: (0, _v212.parseColor)(_v1),
        unmountOnExit: !0,
        children: [(0, _v1.jsx)(_v210.ColorPickerControl, {
          style: {
            width: "100%"
          },
          children: (0, _v1.jsx)(_v211.ColorPickerTrigger, {
            style: {
              display: "block"
            },
            children: (0, _v1.jsx)(_v54.IconButton, {
              "aria-label": _v0,
              variant: "tertiary",
              size: "sm",
              children: (0, _v1.jsx)(_v53.Box, {
                border: `${_v4 ? 2 : 1}px solid`,
                borderColor: "check-radio-stroke",
                borderRadius: "50%",
                backgroundColor: _v1,
                backgroundClip: "padding-box",
                width: "15px",
                height: "15px",
                boxShadow: _v4 ? "0 0 0 2px var(--vimeo-colors-check-radio-fill)" : {}
              })
            })
          })
        }), (0, _v1.jsx)(_v214, {
          isShowProjectColors: !0,
          handleChangeEnd: _v7,
          positionerStyle: {
            marginLeft: "8px",
            marginTop: "-4px"
          }
        })]
      });
    };
  var _v216 = _v0.i(0),
    _v217 = _v0.i(0),
    _v218 = _v0.i(0);
  let _v219 = {
      [_v209.TransitionDirection.UP]: (0, _v1.jsx)(_v207.ArrowUp, {}),
      [_v209.TransitionDirection.DOWN]: (0, _v1.jsx)(_v208.ArrowDown, {}),
      [_v209.TransitionDirection.LEFT]: (0, _v1.jsx)(_v205.ArrowLeft, {}),
      [_v209.TransitionDirection.RIGHT]: (0, _v1.jsx)(_v206.ArrowRight, {}),
      [_v209.TransitionDirection.IN]: (0, _v8.translate)({
        singular: "In",
        dictionary: {
          es: {
            singular: "en"
          },
          "de-DE": {
            singular: "in"
          },
          "fr-FR": {
            singular: "Dans"
          },
          "ja-JP": {
            singular: "検索先："
          },
          "ko-KR": {
            singular: "다음 폴더 내:"
          },
          "pt-BR": {
            singular: "em"
          },
          "zh-CN": {
            singular: "位置"
          }
        }
      }),
      [_v209.TransitionDirection.OUT]: (0, _v8.translate)({
        singular: "Out",
        dictionary: {
          es: {
            singular: "Fuera"
          },
          "de-DE": {
            singular: "Aus"
          },
          "fr-FR": {
            singular: "épuisé"
          },
          "ja-JP": {
            singular: "すでに"
          },
          "ko-KR": {
            singular: "없습니다"
          },
          "pt-BR": {
            singular: "Sair"
          },
          "zh-CN": {
            singular: "退出"
          }
        }
      })
    },
    _v220 = {
      [_v209.TransitionDirection.UP]: 0,
      [_v209.TransitionDirection.DOWN]: 1,
      [_v209.TransitionDirection.LEFT]: 2,
      [_v209.TransitionDirection.RIGHT]: 3,
      [_v209.TransitionDirection.IN]: 4,
      [_v209.TransitionDirection.OUT]: 5
    },
    _v221 = ({
      transitionControls: _v0,
      onDirectionChange: _v1,
      onDurationChange: _v2,
      onDurationChangeEnd: _v3,
      onColorChange: _v4,
      onColorChangeEnd: _v5,
      selectedTransition: _v6,
      transitionElementInterpolatedDuration: _v7,
      maxDuration: _v8
    }) => {
      let _v9 = (0, _v27.useAppSelector)(_v218.overridesWithoutRectSelector, _v90.shallowEqual),
        [_v10, _v11] = (0, _v2.useState)(_v7.toFixed(1)),
        _v12 = _v6?.id,
        _v13 = _v12 ? _v9[_v12] : {},
        _v14 = _v13?.inElement?.controls?.primaryColor || _v6?.inElement.controls.primaryColor,
        _v15 = _v13?.inElement?.controls?.secondaryColor || _v6?.inElement.controls.secondaryColor,
        _v16 = (0, _v2.useMemo)(() => {
          let _v0 = [];
          return _v0.directions.sort((_v0, _v1) => _v220[_v0.direction] - _v220[_v1.direction]).forEach(_v0 => {
            _v0.push((0, _v1.jsx)(_v204.SelectionItem, {
              value: _v0.direction,
              style: {
                justifyContent: "center",
                flex: 1
              },
              children: _v219[_v0.direction]
            }, _v0.direction));
          }), _v0;
        }, [_v0.directions]);
      return (0, _v217.useDebouncedEffect)(() => {
        _v10 !== _v7.toFixed(1) && _v10 && _v3({
          duration: Math.max(Math.min(parseFloat(_v10.replace(/^\s/, "")), _v216.MAX_TRANSITION_DURATION), _v216.MIN_TRANSITION_DURATION),
          isUserAction: !1
        });
      }, [_v10]), (0, _v2.useEffect)(() => {
        _v11(_v7.toFixed(1));
      }, [_v7]), (0, _v1.jsxs)(_v77.Flex, {
        flexDirection: "column",
        children: [(0, _v1.jsxs)(_v77.Flex, {
          flexDirection: "column",
          marginBottom: "16px",
          children: [(0, _v1.jsx)(_v47.Text, {
            variant: "heading-2xs",
            color: "text-primary",
            marginBottom: "8px",
            children: (0, _v8.translate)({
              singular: "Duration",
              dictionary: {
                es: {
                  singular: "Duración"
                },
                "de-DE": {
                  singular: "Dauer"
                },
                "fr-FR": {
                  singular: "Durée "
                },
                "ja-JP": {
                  singular: "期間"
                },
                "ko-KR": {
                  singular: "길이"
                },
                "pt-BR": {
                  singular: "Duração"
                },
                "zh-CN": {
                  singular: "时长"
                }
              }
            })
          }), (0, _v1.jsxs)(_v203.HStack, {
            spacing: "16px",
            children: [(0, _v1.jsxs)(_v170.Slider, {
              onChange: _v0 => _v2(_v0),
              onChangeEnd: (_v0, _v1 = !0) => {
                _v3({
                  duration: _v0,
                  isUserAction: _v1
                });
              },
              value: _v7,
              focusThumbOnChange: !1,
              size: "sm",
              max: _v8,
              min: _v216.MIN_TRANSITION_DURATION,
              step: .1,
              children: [(0, _v1.jsx)(_v171.SliderTrack, {
                children: (0, _v1.jsx)(_v171.SliderFilledTrack, {})
              }), (0, _v1.jsx)(_v171.SliderThumb, {})]
            }), (0, _v1.jsx)(_v173.NumberInput, {
              width: "46px",
              size: "xs",
              onChange: _v0 => _v11(_v0),
              value: `${_v10}s`,
              step: .1,
              max: Math.round(10 * _v8) / 10,
              min: _v216.MIN_TRANSITION_DURATION,
              children: (0, _v1.jsx)(_v173.NumberInputField, {})
            })]
          })]
        }), _v0.directions.length > 0 && _v0.direction && (0, _v1.jsxs)(_v77.Flex, {
          flexDirection: "column",
          marginBottom: "16px",
          children: [(0, _v1.jsx)(_v47.Text, {
            variant: "heading-2xs",
            color: "text-primary",
            marginBottom: "8px",
            children: (0, _v8.translate)({
              singular: "Direction",
              dictionary: {
                es: {
                  singular: "Dirección"
                },
                "de-DE": {
                  singular: "Richtung"
                },
                "ja-JP": {
                  singular: "方向"
                },
                "ko-KR": {
                  singular: "방향"
                },
                "pt-BR": {
                  singular: "Direção"
                },
                "zh-CN": {
                  singular: "方向"
                }
              }
            })
          }), (0, _v1.jsx)(_v204.SelectionGroup, {
            variant: "radio",
            value: _v0.direction,
            onChange: _v0 => {
              let _v1;
              (_v1 = _v0.directions.find(_v0 => _v0.direction === _v0)) && _v1({
                id: _v1.id,
                isDirectionClicked: !0
              }), document.activeElement?.blur();
            },
            size: "xs",
            style: {
              width: "100%",
              justifyContent: "space-between",
              gap: 0
            },
            children: _v16
          })]
        }), (_v14 || _v15) && (0, _v1.jsxs)(_v77.Flex, {
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "16px",
          children: [(0, _v1.jsx)(_v47.Text, {
            variant: "heading-2xs",
            color: "text-primary",
            children: (0, _v8.translate)({
              singular: "Overlay colors",
              dictionary: {
                es: {
                  singular: "Colores de las superposiciones"
                },
                "de-DE": {
                  singular: "Overlay-Farben"
                },
                "fr-FR": {
                  singular: "Couleurs de superposition"
                },
                "ja-JP": {
                  singular: "オーバーレイの色"
                },
                "ko-KR": {
                  singular: "오버레이 색상"
                },
                "pt-BR": {
                  singular: "Cores de sobreposição"
                },
                "zh-CN": {
                  singular: "叠加颜色"
                }
              }
            })
          }), (0, _v1.jsxs)(_v77.Flex, {
            children: [_v14 && (0, _v1.jsx)(_v215, {
              label: (0, _v8.translate)({
                singular: "Primary color",
                dictionary: {
                  es: {
                    singular: "Color primario"
                  },
                  "de-DE": {
                    singular: "Primärfarbe"
                  },
                  "fr-FR": {
                    singular: "Couleur principale"
                  },
                  "ja-JP": {
                    singular: "プライマリーカラー"
                  },
                  "ko-KR": {
                    singular: "기본 색상"
                  },
                  "pt-BR": {
                    singular: "Cor principal"
                  },
                  "zh-CN": {
                    singular: "主色"
                  }
                }
              }),
              value: _v14,
              onChange: _v0 => _v4({
                primaryColor: _v0
              }),
              onChangeEnd: _v0 => _v5({
                primaryColor: _v0
              })
            }), _v15 && (0, _v1.jsx)(_v215, {
              label: (0, _v8.translate)({
                singular: "Secondary color",
                dictionary: {
                  es: {
                    singular: "Color secundario"
                  },
                  "de-DE": {
                    singular: "Sekundärfarbe"
                  },
                  "fr-FR": {
                    singular: "Couleur secondaire"
                  },
                  "ja-JP": {
                    singular: "セカンダリーカラー"
                  },
                  "ko-KR": {
                    singular: "보조 색상"
                  },
                  "pt-BR": {
                    singular: "Cor secundária"
                  },
                  "zh-CN": {
                    singular: "辅助颜色"
                  }
                }
              }),
              value: _v15,
              onChange: _v0 => _v4({
                secondaryColor: _v0
              }),
              onChangeEnd: _v0 => _v5({
                secondaryColor: _v0
              })
            })]
          })]
        })]
      });
    };
  var _v222 = _v0.i(0),
    _v223 = _v0.i(0),
    _v224 = _v0.i(0),
    _v225 = _v0.i(0),
    _v226 = _v0.i(0);
  let _v227 = (_v0, _v1) => {
      for (let _v0 = 0; _v0 < _v0.length; _v0++) {
        let _v0 = _v0[_v0];
        for (let _v0 = 0; _v0 < _v0.directions.length; _v0++) if (_v0.directions[_v0].id === _v1) return _v0.id;
      }
      return _v1;
    },
    _v228 = (_v0, _v1) => {
      for (let _v0 = 0; _v0 < _v0.length; _v0++) {
        let _v0 = _v0[_v0];
        for (let _v0 = 0; _v0 < _v0.directions.length; _v0++) {
          let _v0 = _v0.directions[_v0];
          if (_v0.id === _v1) return _v0.direction;
        }
      }
      return null;
    },
    _v229 = (0, _v2.memo)(() => {
      let _v0 = (0, _v201.useDispatch)(),
        {
          colorMode: _v1
        } = (0, _v79.useColorMode)(),
        _v2 = "dark" === _v1,
        _v3 = (0, _v2.useRef)(null),
        {
          transitionsLibraryData: _v4,
          selectedTransition: _v5,
          getInterpolatedDuration: _v6,
          maxDurationForSelected: _v7,
          updateTransitionElementForDirection: _v8,
          updateTransitionElementDurationOverride: _v9,
          updateTransitionElementDuration: _v10,
          updateTransitionElementColors: _v11,
          updateTransitionElementColorsOverride: _v12,
          deleteSelectedTransitionElement: _v13,
          userTransitionGlobalSelection: _v14
        } = (0, _v222.default)(),
        _v15 = (0, _v27.useAppSelector)(_v0 => (0, _v24.transitionLinkedElementsSelector)(_v0, _v5)),
        _v16 = (0, _v2.useMemo)(() => {
          if (!_v4 || !_v4.items) return [];
          let _v0 = {},
            _v1 = _v4.items || [];
          return _v1.filter(_v0 => !_v0.parentId && !_v0.hide).forEach(_v0 => {
            let _v1 = _v2 ? _v0.thumbnailDark : _v0.thumbnailLight,
              _v2 = _v2 ? _v0.previewDark : _v0.previewLight;
            _v0[_v0.id] = {
              id: _v0.id,
              name: _v0.name,
              displayName: _v0.displayName,
              thumbUrl: _v1.replace("beast.clientassets.sightera.com.s3.amazonaws.com", "dv7a7fjpjy29e.cloudfront.net"),
              preview: _v2.replace("beast.clientassets.sightera.com.s3.amazonaws.com", "dv7a7fjpjy29e.cloudfront.net"),
              order: _v0.order,
              direction: _v0.direction,
              directions: []
            }, _v1.findIndex(_v0 => _v0.parentId === _v0.id) > -1 && _v0.direction && _v0[_v0.id].directions.push({
              id: _v0.id,
              direction: _v0.direction
            });
          }), _v1.filter(_v0 => _v0.parentId && !_v0.hide).forEach(_v0 => {
            _v0.parentId && _v0.direction && _v0[_v0.parentId] && _v0[_v0.parentId].directions.push({
              id: _v0.id,
              direction: _v0.direction
            });
          }), Object.values(_v0).sort((_v0, _v1) => _v0.order - _v1.order);
        }, [_v4, _v2]),
        _v17 = (0, _v2.useMemo)(() => {
          if (!_v5) return null;
          let _v0 = _v227(_v16, _v5.transitionAssetId),
            _v1 = _v16.find(_v0 => _v0.id === _v0);
          return _v1 ? {
            id: _v5.transitionAssetId,
            parentId: _v0,
            direction: _v228(_v16, _v5.transitionAssetId),
            directions: _v1?.directions
          } : null;
        }, [_v5, _v16]),
        _v18 = (0, _v2.useCallback)(({
          id: _v0,
          isDirectionClicked: _v1
        }) => {
          let _v2 = _v4?.items.find(_v0 => _v0.id === _v0) || null;
          if (!_v2) return null;
          _v1 ? (0, _v224.trackSelectTransitionDirection)(_v2.direction) : (0, _v224.trackSelectTransition)(_v2.name, "drag"), _v8({
            transition: _v2,
            isUserChangedDirection: _v1
          });
        }, [_v8, _v4?.items]),
        _v19 = (0, _v2.useCallback)(({
          primaryColor: _v0,
          secondaryColor: _v1
        }) => {
          _v12({
            primaryColor: _v0,
            secondaryColor: _v1
          });
        }, [_v12]),
        _v20 = (0, _v2.useCallback)(({
          primaryColor: _v0,
          secondaryColor: _v1
        }) => {
          _v0((0, _v218.resetOverridesAction)()), _v11({
            primaryColor: _v0,
            secondaryColor: _v1
          }), (0, _v224.trackSelectTransitionOverlayColor)();
        }, [_v0, _v11]),
        _v21 = (0, _v2.useCallback)(_v0 => {
          _v5 && _v15 && _v9(_v0, _v5, _v15);
        }, [_v9, _v5, _v15]),
        _v22 = (0, _v2.useCallback)(({
          duration: _v0,
          isUserAction: _v1
        }) => {
          _v0((0, _v218.resetOverridesAction)()), _v5 && _v15 && (_v10({
            duration: _v0,
            isUserAction: _v1,
            transitionElement: _v5,
            linkedElements: _v15
          }), (0, _v224.trackTransitionDurationAdjustment)(_v6(_v5), _v0, "drawer"));
        }, [_v0, _v5, _v10, _v15, _v6]),
        _v23 = (_v0, _v1) => {
          let _v2 = _v16[_v0],
            _v3 = _v5 ? _v227(_v16, _v5.transitionAssetId) : -1,
            _v4 = _v2.id === _v3;
          return (0, _v1.jsx)(_v226.default, {
            id: _v2.name,
            gridStyleType: _v72.GridStyleType.LANDSCAPE,
            isActive: _v4,
            width: _v1,
            imageUrl: _v2.thumbUrl,
            videoUrl: _v2.preview,
            title: _v2.displayName,
            onClick: () => _v24(_v0),
            testid: `${_v4 ? "selected-" : ""}media-transition`,
            blurBackground: !1,
            previewDelay: 0,
            ...(-1 === _v2.id && {
              overlay: (0, _v1.jsx)(_v136.Center, {
                width: "100%",
                height: "100%",
                children: (0, _v1.jsx)(_v202.StopBanRight, {
                  height: "24px"
                })
              })
            })
          }, _v2.name);
        },
        _v24 = (0, _v2.useCallback)(_v0 => {
          let _v1 = _v16[_v0];
          -1 === _v1.id ? _v13() : _v18({
            id: ((_v0, _v1, _v2) => {
              let {
                directions: _v3,
                id: _v4
              } = _v0;
              if (_v3.length < 1) return {
                id: _v4,
                direction: _v0.direction
              };
              let _v5 = _v2?.slideDirection,
                _v6 = _v2?.zoomDirection,
                _v7 = (0, _v225.getDirectionType)(_v3[0].direction),
                _v8 = _v3.find(_v0 => _v0.direction === _v1);
              return (_v7 === _v223.TransitionDirectionType.SLIDE && _v5 && (_v8 = _v3.find(_v0 => _v0.direction === _v5)), _v7 === _v223.TransitionDirectionType.ZOOM && _v6 && (_v8 = _v3.find(_v0 => _v0.direction === _v6)), _v8) ? _v8 : _v3.find(_v0 => _v0.id === _v4) || _v3[0];
            })(_v1, _v5 ? _v228(_v16, _v5.transitionAssetId) : null, _v14).id
          });
        }, [_v13, _v18, _v5, _v16, _v14]);
      if ((0, _v188.useFocusArea)(_v3, _v131.FocusAreaType.IGNORE), (0, _v19.default)(() => {
        (0, _v224.trackViewTransitionDrawer)();
      }), !_v5) return null;
      let _v25 = _v6(_v5);
      return (0, _v1.jsxs)(_v73.Inspector, {
        type: _v72.InspectorType.MEDIA_TRANSITIONS,
        children: [(0, _v1.jsx)(_v75.InspectorHeader, {
          title: (0, _v8.translate)({
            singular: "Transitions",
            dictionary: {
              es: {
                singular: "transiciones"
              },
              "de-DE": {
                singular: "Übergänge"
              },
              "fr-FR": {
                singular: "transitions"
              },
              "ja-JP": {
                singular: "トランジション"
              },
              "ko-KR": {
                singular: "전환"
              },
              "pt-BR": {
                singular: "transições"
              }
            }
          })
        }), (0, _v1.jsx)(_v74.InspectorBody, {
          children: (0, _v1.jsx)(_v77.Flex, {
            flexDirection: "column",
            alignItems: "center",
            height: "100%",
            ref: _v3,
            children: (0, _v1.jsx)(_v86.default, {
              children: (0, _v1.jsx)(_v53.Box, {
                width: "100%",
                height: "100%",
                paddingTop: "2px",
                children: _v16.map((_v0, _v1) => _v1 % 2 == 0 && (0, _v1.jsxs)(_v2.Fragment, {
                  children: [(0, _v1.jsx)(_v78.SimpleGrid, {
                    columns: 2,
                    spacing: "8px",
                    marginBottom: "8px",
                    children: (0, _v1.jsxs)(_v2.Fragment, {
                      children: [_v23(_v1, 100), _v16[_v1 + 1] && _v23(_v1 + 1, 100)]
                    })
                  }), _v17 && _v5 && (_v17.parentId === _v16[_v1].id || _v17.parentId === _v16[_v1 + 1]?.id) && (0, _v1.jsx)(_v53.Box, {
                    marginTop: "16px",
                    "data-testid": `expanded-transition-data-${_v17.id}`,
                    children: (0, _v1.jsx)(_v221, {
                      selectedTransition: _v5,
                      maxDuration: _v7,
                      transitionElementInterpolatedDuration: _v25,
                      transitionControls: _v17,
                      onDirectionChange: _v18,
                      onColorChange: _v19,
                      onColorChangeEnd: _v20,
                      onDurationChange: _v21,
                      onDurationChangeEnd: _v22
                    })
                  })]
                }))
              }, "container")
            })
          })
        })]
      });
    });
  var _v230 = _v0.i(0),
    _v231 = _v0.i(0),
    _v232 = _v0.i(0);
  let _v233 = {
      dropShadow: _v230.DropShadow.NONE,
      font: "Gothic",
      opacity: 100,
      textColor: "#ffffff",
      borderRadius: 0,
      borderWidth: 0,
      bgAlpha: 0,
      interactiveHotspot: {
        action: {
          type: _v231.HotspotActionType.NONE
        },
        hover: {
          zoom: 1
        }
      }
    },
    _v234 = {
      ..._v233,
      fontSize: 220,
      textContent: "Title",
      rect: {
        width: .2802,
        height: .2512,
        x: .293,
        y: .3725
      }
    },
    _v235 = {
      ..._v233,
      fontSize: 140,
      textContent: "Headline",
      rect: {
        width: .344,
        height: .1843,
        x: .36,
        y: .3744
      }
    },
    _v236 = {
      ..._v233,
      fontSize: 96,
      textContent: "Subheadline",
      rect: {
        width: .353345,
        height: .197327,
        x: .20107,
        y: .127331
      }
    },
    _v237 = {
      ..._v233,
      fontSize: 64,
      textContent: "Caption",
      rect: {
        width: .1454,
        height: .11373,
        x: .49469,
        y: .3744
      }
    },
    _v238 = {
      ..._v233,
      fontSize: 72,
      textContent: "Add Text",
      rect: {
        width: .185107,
        height: .119302,
        x: .0625,
        y: .82767
      }
    },
    _v239 = {
      title: (0, _v232.createButtonPreset)(_v234),
      headline: (0, _v232.createButtonPreset)(_v235),
      subheadline: (0, _v232.createButtonPreset)(_v236),
      caption: (0, _v232.createButtonPreset)(_v237),
      default: (0, _v232.createButtonPreset)(_v238)
    };
  var _v240 = _v0.i(0),
    _v241 = _v0.i(0),
    _v242 = _v0.i(0),
    _v243 = _v0.i(0),
    _v244 = _v0.i(0),
    _v245 = _v0.i(0),
    _v246 = _v0.i(0),
    _v247 = _v0.i(0),
    _v248 = _v0.i(0);
  let _v249 = {
      type: "ButtonElement",
      rect: {
        x: 0,
        y: 0,
        width: .2,
        height: .2
      },
      compositionTiming: {
        start: 0,
        end: 3
      },
      textContent: "Button",
      font: "Gothic",
      backgroundColor: "#000000",
      bgAlpha: 100,
      textColor: "#ffffff",
      borderColor: "#000000",
      borderWidth: 1,
      borderRadius: 5,
      opacity: 100,
      fontSize: 16,
      textAlign: _v242.Alignment.CENTER,
      verticalAlign: _v242.VerticalAlignment.MIDDLE,
      dropShadow: _v230.DropShadow.NONE,
      animationName: _v241.MediaAnimation.NONE,
      zoom: 1,
      selectable: !0,
      interactiveHotspot: {
        analyticsId: 0,
        name: "Button Element",
        hover: {
          zoom: _v245.INTERACTIVE_TIMELINE_DURATION_SCALE_FACTOR
        },
        ..._v244.INTERACTIVE_HOTSPOT_DEFAULTS,
        action: {
          ..._v244.OPEN_URL_ACTION_DEFAULTS
        }
      }
    },
    _v250 = {
      shouldCenter: !1,
      shouldUseBrandColors: !1
    },
    _v251 = () => {
      let {
          addElement: _v0
        } = (0, _v247.useAddElement)(),
        {
          getNewHotspotName: _v1
        } = (0, _v248.useHotspot)(),
        {
          getCurrentTimeFromRef: _v2
        } = (0, _v80.useDragonfly)(),
        _v3 = (0, _v27.useAppSelector)(_v24.durationSelector),
        _v4 = (0, _v27.useAppSelector)(_v24.brandColorsSelector),
        _v5 = (0, _v2.useCallback)((_v0 = {}, _v1) => {
          let {
              shouldCenter: _v2,
              draggableData: _v3,
              shouldUseBrandColors: _v4
            } = {
              ..._v250,
              ..._v1
            },
            {
              time: _v5,
              coordinates: _v6
            } = _v3 ?? {},
            _v7 = structuredClone(_v0),
            _v8 = {
              ...(_v7.rect || _v249.rect)
            },
            _v9 = _v5 ?? _v2(),
            {
              start: _v10,
              end: _v11
            } = (0, _v112.getSafeStartAndEndTime)(_v9, _v244.HOTSPOT_DEFAULT_DURATION, _v3),
            _v12 = _v2 ? (0, _v246.recenterRect)(_v243.DEFAULT_RECT, _v8.width, _v8.height) : _v8;
          return _v6 && (_v12.x = _v6.left, _v12.y = _v6.top), {
            id: (0, _v107.createUuidV4)(),
            ..._v249,
            ..._v7,
            ...(_v4 && {
              borderColor: _v4.default,
              textColor: _v4.default,
              backgroundColor: _v4.secondary
            }),
            rect: _v12,
            interactiveHotspot: {
              ..._v249.interactiveHotspot,
              analyticsId: (0, _v107.generateRandomUInt32Id)(),
              name: _v1(),
              ..._v7.interactiveHotspot,
              hover: {
                ..._v249.interactiveHotspot.hover,
                ..._v7.interactiveHotspot?.hover
              }
            },
            compositionTiming: {
              start: _v10,
              end: _v11
            },
            selectable: !0
          };
        }, [_v4.default, _v4.secondary, _v2, _v1, _v3]),
        _v6 = (0, _v2.useCallback)((_v0 = {}, _v1) => {
          let {
              shouldCenter: _v2,
              draggableData: _v3,
              shouldUseBrandColors: _v4
            } = {
              ..._v250,
              ..._v1
            },
            _v5 = _v5(_v0, {
              shouldCenter: _v2,
              draggableData: _v3,
              shouldUseBrandColors: _v4
            });
          return _v0(_v5), _v5;
        }, [_v0, _v5]),
        _v7 = (0, _v2.useCallback)(({
          preset: _v0,
          shouldAddElement: _v1,
          shouldUseBrandColors: _v2,
          draggableData: _v3
        }) => _v1 ? _v6(_v0, {
          shouldCenter: !0,
          draggableData: _v3,
          shouldUseBrandColors: _v2
        }) : _v5(_v0, {
          shouldCenter: !_v3?.coordinates,
          draggableData: _v3,
          shouldUseBrandColors: _v2
        }), [_v6, _v5]);
      return {
        addButtonElement: _v6,
        createButtonElement: _v5,
        handleAddButtonFromLibrary: _v7
      };
    };
  _v0.s(["useButton", 0, _v251], 0);
  var _v252 = _v0.i(0);
  let _v253 = () => {
    let {
        createButtonElement: _v0,
        addButtonElement: _v1
      } = _v251(),
      _v2 = (0, _v27.useAppSelector)(_v24.orientationSelector),
      _v3 = (0, _v2.useCallback)((_v0, _v1) => {
        let _v2 = _v239[_v0.id];
        if (_v2) return _v0(_v2[_v2], {
          draggableData: _v1,
          shouldCenter: !1
        });
      }, [_v0, _v2]),
      _v4 = (0, _v2.useCallback)(async _v0 => {
        let _v1 = _v239[_v0.id];
        _v1 && _v1(_v1[_v2], {
          shouldCenter: !0
        });
      }, [_v1, _v2]);
    return (0, _v1.jsx)(_v252.AddTextInspectorView, {
      items: _v240.textPresets,
      onItemClick: _v4,
      createElement: _v3,
      OverlayComponent: _v252.TextPresetItem,
      defaultItem: _v240.textDefaultPreset
    });
  };
  var _v254 = _v0.i(0),
    _v255 = _v0.i(0),
    _v256 = _v0.i(0),
    _v257 = _v0.i(0),
    _v258 = _v0.i(0),
    _v259 = _v0.i(0),
    _v260 = _v0.i(0),
    _v261 = _v0.i(0),
    _v262 = _v0.i(0),
    _v263 = _v0.i(0);
  _v0.s(["usePoll", 0, () => {
    let _v0 = (0, _v27.useAppSelector)(_v24.durationSelector),
      _v1 = (0, _v27.useAppSelector)(_v259.newElementFontSelector),
      {
        getCurrentTimeFromRef: _v2
      } = (0, _v80.useDragonfly)(),
      {
        addElement: _v3
      } = (0, _v247.useAddElement)(),
      _v4 = (0, _v27.useAppDispatch)(),
      _v5 = (0, _v27.useAppSelector)(_v24.orientationSelector),
      _v6 = (0, _v27.useAppSelector)(_v24.brandColorsSelector),
      _v7 = (0, _v97.shouldShowInDevelopmentFeature)("freeform-poll");
    return {
      createPoll: (0, _v2.useCallback)(({
        pollStyleId: _v0,
        draggableData: _v1,
        addToStoryboard: _v2 = !1,
        variant: _v3 = _v256.POLL_VARIANT.POLL,
        startTime: _v4
      }) => {
        let _v5 = _v4 ?? _v1?.time ?? _v2(),
          {
            start: _v6,
            end: _v7
          } = (0, _v112.getSafeStartAndEndTime)(_v5, (0, _v257.getPollDefaults)().duration, _v0),
          _v8 = [,,].fill(void 0).map(() => {
            let _v0 = (0, _v107.generateRandomUInt32Id)();
            return {
              id: _v0,
              text: "",
              analyticsId: _v0
            };
          }),
          _v9 = (0, _v262.toBaseOrientation)(_v5),
          _v10 = _v254.POLL_STYLES[_v0][_v9],
          _v11 = _v10.width / 0,
          {
            height: _v12,
            width: _v13
          } = (0, _v255.measurePoll)({
            question: (0, _v257.getPollDefaults)().questionText,
            answers: _v8,
            styleId: _v0,
            font: _v1,
            orientation: _v9
          }),
          _v14 = _v11 / (_v13 / _v12) * _v258.ORIENTATION_RATIO_MAP[_v5],
          _v15 = {
            id: (0, _v107.createUuidV4)(),
            analyticsId: (0, _v107.generateRandomUInt32Id)(),
            variant: _v3,
            type: _v260.CompositionElementType.POLL,
            styleId: _v0,
            questionText: (0, _v257.getPollDefaults)().questionText,
            questionTextColor: _v6[_v10.colorTokens.questionText],
            answerTextColor: _v6[_v10.colorTokens.answerText],
            answerBackgroundColor: _v6[_v10.colorTokens.answerBackground],
            questionBackgroundColor: _v6[_v10.colorTokens.questionBackground],
            backgroundColor: _v6[_v10.colorTokens.background],
            font: _v1,
            rotate: (0, _v257.getPollDefaults)().rotate,
            animationName: (0, _v257.getPollDefaults)().animationName,
            pauseOnShow: !0,
            answers: _v8,
            correctAnswerId: _v3 === _v256.POLL_VARIANT.QUIZ ? _v8[0].id : null,
            compositionTiming: {
              start: _v6,
              end: _v7
            },
            rect: {
              x: _v10.position.x,
              y: _v10.position.y,
              width: _v11,
              height: _v14
            },
            selectable: !0,
            ...(_v7 && _v257.FREEFORM_POLL_DEFAULTS)
          };
        return _v2 && _v3(_v15), _v15;
      }, [_v3, _v6, _v2, _v1, _v5, _v7, _v0]),
      updatePollSettings: (0, _v2.useCallback)(({
        questionText: _v0,
        answers: _v1,
        pollId: _v2,
        pollRectWidth: _v3,
        pollStyleId: _v4,
        font: _v5,
        correctAnswerId: _v6,
        variant: _v7
      }) => {
        let _v8 = (0, _v261.isFreeformPoll)(_v4, _v5);
        _v4((0, _v24.updateElementAction)({
          ceId: _v2,
          element: {
            ...(!_v8 && {
              rect: {
                height: (0, _v263.getPollHeight)({
                  answers: _v1,
                  questionText: _v0,
                  pollStyleId: _v4,
                  pollRectWidth: _v3,
                  orientation: _v5,
                  font: _v5
                }),
                width: _v3
              }
            }),
            questionText: _v0,
            answers: _v1,
            ...(void 0 !== _v6 && {
              correctAnswerId: _v6
            }),
            ...(_v7 && {
              variant: _v7
            })
          }
        }));
      }, [_v4, _v5])
    };
  }], 0);
}