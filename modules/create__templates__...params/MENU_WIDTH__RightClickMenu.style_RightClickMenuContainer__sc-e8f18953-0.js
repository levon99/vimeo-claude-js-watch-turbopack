{
  "use strict";

  _v0.s(["MENU_WIDTH", () => _v59, "default", () => _v61], 0);
  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0);
  let _v10 = _v9.default.div.withConfig({
      displayName: "RightClickMenu.style__RightClickMenuContainer",
      componentId: "sc-e8f18953-0"
    })`
  height: 100%;
  width: 100%;
  user-select: none;
`,
    _v11 = _v9.default.div.withConfig({
      displayName: "RightClickMenu.style__MenuContainer",
      componentId: "sc-e8f18953-1"
    })`
  position: fixed;
  top: ${({
      y: _v0
    }) => `${_v0}px`};
  left: ${({
      x: _v0
    }) => `${_v0}px`};
  z-index: 1000;
  width: ${({
      width: _v0
    }) => `${_v0}px`};
  pointer-events: all;
  display: flex;
`;
  var _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0);
  let _v17 = () => (_v0, _v1) => {
    (0, _v15.selectedElementsSelector)(_v1()).forEach(_v0 => {
      _v0((0, _v16.deleteElementAction)({
        ceId: _v0.id
      })), _v0((0, _v15.deselectCEsAction)({
        ceIdsToRemove: [_v0.id]
      }));
    });
  };
  _v0.s(["deleteSelectedCEsAction", 0, _v17], 0);
  var _v18 = _v0.i(0),
    _v19 = _v0.i(0);
  let _v20 = () => (_v0, _v1) => {
    let _v2 = _v1(),
      _v3 = (0, _v15.selectedElementsSelector)(_v2).filter(_v18.isDuplicatableElement);
    _v3.length && _v0((0, _v19.duplicateElementsThunkAction)(_v3));
  };
  _v0.s(["duplicateSelectedElementsThunkAction", 0, _v20], 0);
  var _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0);
  let _v27 = (_v0 = 0) => (_v0, _v1) => {
    let _v2 = _v1(),
      _v3 = (0, _v23.clipboardElementsSelector)(_v2),
      _v4 = (0, _v16.nonHiddenLayersSelector)(_v2),
      _v5 = (0, _v24.isInteractiveSelector)(_v2),
      _v6 = (0, _v25.isEditingInteractiveOverlaySelector)(_v2),
      _v7 = (0, _v16.interactiveOverlaysSelector)(_v2),
      _v8 = (0, _v16.storyboardIdSelector)(_v2),
      _v9 = _v6 ? _v3.filter(_v0 => (0, _v18.isElementAllowedInInteractiveOverlay)(_v0)) : _v3,
      [_v10, _v11] = (0, _v22.getElementsToPasteWithOverlayDuplication)(_v9, _v5, _v7, _v8);
    _v11 && _v11.forEach(_v0 => {
      _v0((0, _v16.addInteractiveOverlayAction)({
        overlay: _v0
      }));
    });
    let _v12 = (0, _v21.getWithDuplicationNaming)(_v10, _v4);
    _v0((0, _v26.pasteElementsThunkAction)(_v12, _v0));
  };
  _v0.s(["pasteCopiedElementsThunkAction", 0, _v27], 0);
  var _v28 = _v0.i(0),
    _v29 = _v0.i(0);
  let _v30 = () => {
    let _v0 = (0, _v28.useAppDispatch)(),
      _v1 = (0, _v28.useAppSelector)(_v23.clipboardElementsSelector),
      _v2 = (0, _v28.useAppSelector)(_v15.selectedElementsSelector),
      _v3 = _v2[0],
      {
        enterReplaceMode: _v4
      } = (0, _v29.useReplaceElement)(),
      _v5 = 0 === _v1.length,
      _v6 = (0, _v2.useMemo)(() => ({
        content: _v14.translations.paste,
        winShortcut: "Ctrl+V",
        macShortcut: "⌘V",
        onClick: () => _v0(_v27()),
        disabled: _v5
      }), [_v0, _v5]),
      _v7 = (0, _v2.useMemo)(() => ({
        content: _v14.translations.copy,
        winShortcut: "Ctrl+C",
        macShortcut: "⌘C",
        onClick: () => _v0((0, _v23.copySelectedCEsAction)()),
        disabled: _v3?.isLoading || _v3?.action?.type === _v13.TimeTriggerActionType.SHOW_OVERLAY
      }), [_v0, _v3]),
      _v8 = (0, _v2.useMemo)(() => ({
        content: _v14.translations.duplicate,
        winShortcut: "Ctrl+D",
        macShortcut: "⌘D",
        onClick: () => _v0(_v20()),
        disabled: !(0, _v18.isDuplicatableElement)(_v3)
      }), [_v0, _v3]);
    return {
      paste: _v6,
      copy: _v7,
      duplicate: _v8,
      deleteItem: (0, _v2.useMemo)(() => ({
        content: _v14.translations.delete,
        winShortcut: "⌫",
        macShortcut: "⌫",
        onClick: () => {
          _v0(_v17());
        }
      }), [_v0]),
      replace: (0, _v2.useMemo)(() => ({
        content: _v14.translations.replace,
        onClick: () => {
          _v4(_v3);
        },
        disabled: !(0, _v18.isReplaceableElement)(_v3) || 1 !== _v2.length
      }), [_v4, _v3, _v2.length])
    };
  };
  var _v31 = _v0.i(0),
    _v32 = _v0.i(0);
  let _v33 = (0, _v9.default)(_v32.Checkmark).withConfig({
      displayName: "CheckmarkIcon",
      componentId: "sc-842af254-0"
    })`
  path {
    fill: ${({
      theme: _v0
    }) => _v0.formats.primary};
  }
`,
    _v34 = "show-guides",
    _v35 = "snap-guides";
  _v0.s(["GUIDES_BORDER_WIDTH", 0, 5, "GUIDES_HORIZONTAL_PADDING", 0, .0625, "GUIDES_SNAPPING_DISTANCE", 0, 8, "GUIDES_SQUARE_HORIZONTAL_PADDING", 0, .0825, "GUIDES_SQUARE_VERTICAL_PADDING", 0, .0925, "GUIDES_VERTICAL_PADDING", 0, .111, "SAVE_AS_GUIDE_LOCAL_STORAGE_KEY", 0, "save-as-guide", "SHOW_GUIDES_LOCAL_STORAGE_KEY", 0, _v34, "SNAP_GUIDES_LOCAL_STORAGE_KEY", 0, _v35], 0);
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
    _v53 = _v0.i(0),
    _v54 = _v0.i(0),
    _v55 = _v0.i(0);
  let _v56 = "u" > typeof navigator && -1 != navigator.userAgent.toLowerCase().indexOf("mac"),
    _v57 = (0, _v2.forwardRef)(({
      type: _v0,
      onMenuItemClick: _v1,
      position: _v2,
      placement: _v3,
      handleClickOutside: _v4,
      contextData: _v5
    }, _v6) => {
      let _v7 = (0, _v2.useRef)(null),
        _v8 = ((_v0, _v1) => {
          let _v2 = (0, _v28.useAppSelector)(_v15.selectedElementsIdsSelector),
            _v3 = (() => {
              let _v0 = (0, _v28.useAppDispatch)(),
                _v1 = (0, _v28.useAppSelector)(_v15.selectedElementsIdsSelector),
                _v2 = (0, _v28.useAppSelector)(_v0 => (0, _v16.elementByIdSelector)(_v0, _v1[0])),
                _v3 = (0, _v28.useAppSelector)(_v38.isCanBringSelectedForwardSelector),
                _v4 = (0, _v28.useAppSelector)(_v38.isCanSendSelectedBackwardSelector),
                {
                  paste: _v5,
                  copy: _v6,
                  duplicate: _v7,
                  deleteItem: _v8,
                  replace: _v9
                } = _v30(),
                _v10 = (0, _v2.useCallback)(_v0 => {
                  _v0((0, _v16.changeElementLayerByOffsetAction)({
                    ceIds: _v1,
                    offset: _v0
                  }));
                }, [_v0, _v1]);
              return [(0, _v2.useMemo)(() => [_v6, ...((0, _v18.isDuplicatableElement)(_v2) ? [_v7] : []), _v5, _v8, ...((0, _v18.isReplaceableElement)(_v2) ? [_v9] : [])], [_v6, _v8, _v7, _v5, _v9, _v2]), [{
                content: (0, _v37.translate)({
                  singular: "Bring to front",
                  dictionary: {
                    es: {
                      singular: "Llevar al frente"
                    },
                    "de-DE": {
                      singular: "Nach vorne verschieben"
                    },
                    "fr-FR": {
                      singular: "Déplacer vers l'avant"
                    },
                    "ja-JP": {
                      singular: "最前面に移動"
                    },
                    "ko-KR": {
                      singular: "맨 앞으로 가져오기"
                    },
                    "pt-BR": {
                      singular: "Traga para a frente"
                    },
                    "zh-CN": {
                      singular: "置于顶层"
                    }
                  }
                }),
                winShortcut: "Ctrl+F",
                macShortcut: "⌘F",
                onClick: () => _v10(1 / 0),
                disabled: !_v3
              }, {
                content: (0, _v37.translate)({
                  singular: "Bring forward",
                  dictionary: {
                    es: {
                      singular: "Adelantar"
                    },
                    "de-DE": {
                      singular: "In den Vordergrund rücken"
                    },
                    "fr-FR": {
                      singular: "Déplacer vers l'avant"
                    },
                    "ja-JP": {
                      singular: "前面に移動"
                    },
                    "ko-KR": {
                      singular: "앞으로 가져오기"
                    },
                    "pt-BR": {
                      singular: "Mover para a frente"
                    },
                    "zh-CN": {
                      singular: "向前移动"
                    }
                  }
                }),
                winShortcut: "Ctrl+↑",
                macShortcut: "⌘↑",
                onClick: () => _v10(1),
                disabled: !_v3
              }, {
                content: (0, _v37.translate)({
                  singular: "Send backward",
                  dictionary: {
                    es: {
                      singular: "Enviar atrás"
                    },
                    "de-DE": {
                      singular: "In den Hintergrund rücken"
                    },
                    "fr-FR": {
                      singular: "Déplacer vers l'arrière"
                    },
                    "ja-JP": {
                      singular: "背面に移動"
                    },
                    "ko-KR": {
                      singular: "뒤로 보내기"
                    },
                    "pt-BR": {
                      singular: "Enviar para o fundo"
                    },
                    "zh-CN": {
                      singular: "向后移动"
                    }
                  }
                }),
                winShortcut: "Ctrl+↓",
                macShortcut: "⌘↓",
                onClick: () => _v10(-1),
                disabled: !_v4
              }, {
                content: (0, _v37.translate)({
                  singular: "Send to back",
                  dictionary: {
                    es: {
                      singular: "Enviar al fondo"
                    },
                    "de-DE": {
                      singular: "In den Hintergrund senden"
                    },
                    "fr-FR": {
                      singular: "Déplacer vers l'arrière"
                    },
                    "ja-JP": {
                      singular: "最背面に移動"
                    },
                    "ko-KR": {
                      singular: "맨 뒤로 보내기"
                    },
                    "pt-BR": {
                      singular: "Enviar para trás"
                    },
                    "zh-CN": {
                      singular: "置于底层"
                    }
                  }
                }),
                winShortcut: "Ctrl+B",
                macShortcut: "⌘B",
                onClick: () => _v10(-1 / 0),
                disabled: !_v4
              }]];
            })(),
            _v4 = (() => {
              let _v0 = (0, _v14.getTranslations)(),
                {
                  paste: _v1
                } = _v30(),
                _v2 = (0, _v28.useAppSelector)(_v0 => _v0.stage.guides.isShow),
                _v3 = (0, _v28.useAppSelector)(_v0 => _v0.stage.guides.isSnap),
                [, _v4] = (0, _v31.default)(_v34, !1),
                [, _v5] = (0, _v31.default)(_v35, !1),
                _v6 = (0, _v28.useAppDispatch)(),
                _v7 = (0, _v2.useCallback)(() => {
                  _v4(!_v2), _v6((0, _v36.setIsShowGuidesStageAction)(!_v2));
                }, [_v6, _v2, _v4]),
                _v8 = (0, _v2.useCallback)(() => {
                  _v5(!_v3), _v6((0, _v36.setIsSnapStageAction)(!_v3));
                }, [_v6, _v3, _v5]),
                _v9 = (0, _v2.useMemo)(() => [{
                  content: _v0.showGuides,
                  onClick: _v7,
                  icon: (0, _v1.jsx)(_v33, {
                    width: "16px",
                    height: "16px",
                    "data-testid": "show-guides-checkmark",
                    opacity: +!!_v2
                  })
                }, {
                  content: _v0.snapToGuides,
                  onClick: _v8,
                  icon: (0, _v1.jsx)(_v33, {
                    width: "16px",
                    height: "16px",
                    "data-testid": "snap-to-guides-checkmark",
                    opacity: +!!_v3
                  })
                }], [_v7, _v8, _v2, _v3, _v0]);
              return (0, _v2.useMemo)(() => [[_v1], _v9], [_v1, _v9]);
            })(),
            _v5 = (() => {
              let _v0 = (0, _v28.useAppDispatch)(),
                _v1 = (0, _v28.useAppSelector)(_v15.selectedElementsSelector),
                _v2 = (0, _v28.useAppSelector)(_v16.sourceMapSelector),
                _v3 = (0, _v28.useAppSelector)(_v16.videoSessionIdSelector),
                _v4 = _v1[0],
                _v5 = (0, _v18.isVideoElement)(_v4) ? _v4.sourceHash : "",
                _v6 = (0, _v28.useAppSelector)(_v0 => (0, _v46.elementStatusSelector)(_v0, _v5)),
                {
                  hasTveSupported: _v7
                } = (0, _v2.useContext)(_v43.PermissionsContext),
                _v8 = (0, _v2.useContext)(_v42.FlowHooksContext),
                {
                  removeSourceFromIgnore: _v9
                } = (0, _v53.useTranscriptIgnoreSources)(),
                {
                  seek: _v10
                } = (0, _v41.useDragonfly)(),
                {
                  paste: _v11,
                  copy: _v12,
                  deleteItem: _v13,
                  duplicate: _v14,
                  replace: _v15
                } = _v30(),
                _v16 = (0, _v2.useMemo)(() => {
                  if (_v4 && ((0, _v18.isVideoElement)(_v4) || (0, _v18.isSoundElement)(_v4))) return {
                    content: _v4.muted ? _v14.translations.unmute : _v14.translations.mute,
                    winShortcut: "M",
                    macShortcut: "M",
                    onClick: () => {
                      _v0((0, _v16.updateElementAction)({
                        ceId: _v4.id,
                        element: {
                          muted: !_v4.muted
                        }
                      }));
                    }
                  };
                }, [_v0, _v4]);
              (0, _v44.default)(() => {
                (0, _v51.sendTrackTVEImpression)(!1);
              });
              let _v17 = (0, _v2.useMemo)(() => {
                  if (_v4 && (0, _v18.isVideoElement)(_v4)) {
                    let _v0 = _v2[_v4.sourceHash],
                      _v1 = _v6 === _v49.STATUS.PROGRESS;
                    if (_v0 && (0, _v52.isSourceValidForTranscript)(_v0)) return {
                      icon: (0, _v1.jsx)(_v39.TranscriptOn, {
                        boxSize: "20px"
                      }),
                      content: (0, _v37.translate)({
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
                      }),
                      onClick: () => {
                        if (!_v7) {
                          (0, _v51.sendTrackTVETrigger)(!1), _v8?.onSelectTve?.({
                            vsid: _v3,
                            tier: _v40.TVE
                          });
                          return;
                        }
                        _v0((0, _v45.openInspectorAction)({
                          inspectorType: _v48.InspectorType.TRANSCRIPT
                        })), _v9(_v4.sourceHash), _v0((0, _v47.setShouldFetchTranscriptForSource)({
                          sourceHash: _v4.sourceHash,
                          shouldFetchTranscript: !0,
                          force: !1
                        })), _v10(_v4.compositionTiming.start), (0, _v50.sendTrackTranscriptTranscribe)("timeline", "transcribe", 1, _v4.sourceHash);
                      },
                      disabled: _v1
                    };
                  }
                }, [_v0, _v6, _v8, _v7, _v9, _v10, _v4, _v2, _v3]),
                _v18 = (0, _v2.useMemo)(() => [_v12, ...((0, _v18.isDuplicatableElement)(_v4) ? [_v14] : []), _v11, _v13, ...((0, _v18.isReplaceableElement)(_v4) ? [_v15] : [])], [_v12, _v13, _v14, _v11, _v15, _v4]);
              return (0, _v2.useMemo)(() => {
                let _v0 = [_v18];
                return _v16 && _v0.unshift([_v16]), _v17 && _v0.push([_v17]), _v0;
              }, [_v16, _v18, _v17]);
            })(),
            _v6 = (_v0 => {
              let _v1 = (0, _v28.useAppDispatch)(),
                {
                  deleteItem: _v2
                } = _v30(),
                {
                  selectTransitions: _v3
                } = (0, _v54.default)(),
                _v4 = (0, _v2.useMemo)(() => ({
                  content: (0, _v37.translate)({
                    singular: "Edit",
                    dictionary: {
                      es: {
                        singular: "Editar"
                      },
                      "de-DE": {
                        singular: "Bearbeiten"
                      },
                      "fr-FR": {
                        singular: "Modifier"
                      },
                      "ja-JP": {
                        singular: "編集"
                      },
                      "ko-KR": {
                        singular: "편집"
                      },
                      "pt-BR": {
                        singular: "Editar"
                      },
                      "zh-CN": {
                        singular: "编辑"
                      }
                    }
                  }),
                  onClick: () => {
                    _v3([_v0?.elementId]), _v1((0, _v45.openInspectorAction)({
                      inspectorType: _v48.InspectorType.MEDIA_TRANSITIONS
                    }));
                  }
                }), [_v0?.elementId, _v1, _v3]);
              return (0, _v2.useMemo)(() => [[_v4, {
                ..._v2,
                content: (0, _v37.translate)({
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
                onClick: () => {
                  _v1((0, _v16.deleteElementAction)({
                    ceId: _v0?.elementId
                  }));
                }
              }]], [_v0?.elementId, _v2, _v1, _v4]);
            })(_v1 || {
              elementId: ""
            }),
            {
              paste: _v7
            } = _v30(),
            _v8 = _v2[0];
          return (0, _v2.useMemo)(() => "timeline" !== _v0 || _v8 ? "timeline" === _v0 && _v8 ? _v5 : "canvas" === _v0 && _v8 ? _v3 : "transition" === _v0 ? _v6 : _v4 : [[_v7]], [_v4, _v8, _v3, _v7, _v5, _v6, _v0]);
        })(_v0, _v5),
        _v9 = (0, _v2.useCallback)(_v0 => {
          _v0.preventDefault(), _v0.stopPropagation();
        }, []),
        _v10 = (0, _v2.useCallback)((_v0, _v1) => {
          _v0.stopPropagation(), _v1(), _v1();
        }, [_v1]);
      return (0, _v55.useOnClickOutside)(_v7, _v4), (0, _v1.jsx)(_v11, {
        onContextMenu: _v9,
        x: _v2.x,
        y: _v2.y,
        ref: _v7,
        width: _v59,
        "data-testid": _v12.testIds.rightClickMenu,
        "data-type": _v0,
        children: (0, _v1.jsx)(_v4.Menu, {
          isOpen: !0,
          placement: _v3,
          children: (0, _v1.jsx)(_v8.MenuList, {
            ref: _v6,
            children: _v8?.map((_v0, _v1) => (0, _v1.jsxs)(_v6.MenuGroup, {
              children: [_v0.map(_v0 => (0, _v1.jsxs)(_v7.MenuItem, {
                command: _v56 ? _v0.macShortcut : _v0.winShortcut,
                onClick: _v0 => _v10(_v0, _v0.onClick),
                isDisabled: _v0.disabled,
                "data-testid": "right-click-menu-button-" + _v0.content.toLowerCase().replaceAll(" ", "-"),
                children: [_v0.icon, _v0.content]
              }, _v0.content)), _v1 < _v8?.length - 1 && (0, _v1.jsx)(_v5.MenuDivider, {})]
            }, _v0 + _v1))
          })
        })
      });
    }),
    _v58 = (0, _v2.memo)(_v57),
    _v59 = 180,
    _v60 = [_v12.testIds.toolbar, _v12.testIds.timelineEmptyState],
    _v61 = (0, _v2.memo)(({
      children: _v0,
      style: _v1,
      onContextMenu: _v2,
      type: _v3 = "canvas",
      contextData: _v4
    }) => {
      let _v5 = (0, _v2.useRef)(null),
        _v6 = (0, _v2.useRef)(null),
        _v7 = (0, _v2.useRef)(null),
        [_v8, _v9] = (0, _v2.useState)({
          x: 0,
          y: 0
        }),
        [_v10, _v11] = (0, _v2.useState)(!1),
        [_v12, _v13] = (0, _v2.useState)(!1),
        _v14 = (0, _v2.useRef)(0),
        _v15 = (0, _v2.useCallback)(_v0 => {
          let _v1;
          if (_v2 && _v2(_v0), _v0.target instanceof Element && (_v1 = _v0.target, _v60.some(_v0 => _v1.closest((0, _v12.getTestIdSelector)(_v0))) || !_v0.target.closest((0, _v12.getTestIdSelector)(_v12.testIds.rightClickMenuWrapper)))) return;
          _v0.preventDefault(), _v0.stopPropagation();
          let {
            clientX: _v2,
            clientY: _v3
          } = _v0;
          _v14.current = _v3;
          let _v4 = window.innerWidth,
            _v5 = _v2 + _v59,
            {
              x: _v6,
              y: _v7
            } = {
              x: _v2,
              y: _v3
            };
          _v4 > _v5 ? _v9({
            x: _v6,
            y: _v7
          }) : _v9({
            x: _v6 - _v59,
            y: _v7
          }), _v11(!0), _v13(!1);
        }, [_v2]),
        _v16 = _v14.current;
      (0, _v2.useLayoutEffect)(() => {
        let _v0 = _v6.current?.offsetHeight;
        !_v0 || !_v16 || _v12 || window.innerHeight - _v16 < _v0 && (_v9(_v0 => ({
          ..._v0,
          y: _v16 - _v0
        })), _v13(!0));
      }, [_v6.current?.offsetHeight, _v16, _v8.x, _v12]);
      let _v17 = () => {
        _v11(!1);
      };
      return (0, _v55.useOnClickOutside)(_v7, _v17), (0, _v1.jsxs)(_v10, {
        ref: _v5,
        onContextMenu: _v15,
        "data-testid": _v12.testIds.rightClickMenuWrapper,
        style: _v1,
        children: [_v0, _v10 && (0, _v3.createPortal)((0, _v1.jsx)(_v58, {
          ref: _v6,
          handleClickOutside: _v17,
          contextData: _v4,
          type: _v3,
          onMenuItemClick: () => _v11(!1),
          placement: _v12 ? "top" : "bottom",
          position: _v8
        }), document.body)]
      });
    });
}