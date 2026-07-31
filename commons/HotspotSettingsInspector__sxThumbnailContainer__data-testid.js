{
  "use strict";

  _v0.s(["HotspotSettingsInspector", () => _v76, "sxThumbnailContainer", () => _v71], 0);
  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.i(0);
  var _v3 = _v0.i(0),
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
    _v45 = _v0.i(0);
  let _v46 = ({
      overlay: _v0,
      onEditOverlayButtonClick: _v1,
      onRenameButtonClick: _v2,
      onDeleteButtonClick: _v3
    }) => {
      let _v4 = (0, _v36.getTranslations)(),
        _v5 = (0, _v43.useAppSelector)(_v42.isLoadingMediaOrApplyingTemplateSelector),
        _v6 = (0, _v43.useAppDispatch)(),
        {
          hasCreateInteractiveTeamOverlayTemplateCreate: _v7
        } = (0, _v2.useContext)(_v37.PermissionsContext),
        _v8 = (0, _v43.useAppSelector)(_v40.overlayThumbnailUrlsMapSelector)[_v0.id],
        _v9 = (0, _v43.useAppSelector)(_v41.storyboardSelector),
        _v10 = (0, _v43.useAppSelector)(_v39.openModalIdSelector),
        {
          takeScreenshot: _v11
        } = (0, _v38.useStageScreenshot)(),
        [_v12, _v13] = (0, _v2.useState)(!1);
      (0, _v2.useEffect)(() => {
        _v8 || _v11(_v0.interactiveLayers, _v0.id);
      }, [_v0.id, _v0.interactiveLayers, _v8, _v9, _v11]);
      let _v14 = (0, _v2.useMemo)(() => () => _v6((0, _v39.setOpenModalIdAction)("")), [_v6]),
        _v15 = _v7 && _v10 === _v34.MODAL_IDS.saveAsTeamTemplateModal;
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [_v15 && (0, _v1.jsx)(_v45.SaveOverlayAsTeamTemplateModal, {
          active: !0,
          onConfirm: _v14,
          onDismiss: _v14,
          initialTemplateName: _v0.name,
          overlayId: _v0.id
        }), (0, _v1.jsxs)(_v6.Flex, {
          onMouseEnter: () => _v13(!0),
          onMouseLeave: () => _v13(!1),
          ..._v71({
            disabled: _v5
          }),
          "data-testid": _v35.testIds.hotspots.settings.overlayThumbnail,
          children: [(0, _v1.jsx)(_v22.Button, {
            "data-testid": _v35.testIds.hotspots.settings.editOverlay,
            "aria-label": _v4.editOverlay,
            leftIcon: (0, _v1.jsx)(_v29.EditPencil, {}),
            variant: "blur",
            size: "xs",
            onClick: _v1,
            position: "absolute",
            top: "sm",
            left: "sm",
            opacity: +!!_v12,
            isDisabled: _v5,
            children: _v4.editOverlay
          }), _v8 ? (0, _v1.jsx)("img", {
            src: _v8,
            alt: _v4.overlayThumbnail,
            style: {
              width: "100%",
              height: "100%",
              objectFit: "cover"
            }
          }) : (0, _v1.jsxs)(_v1.Fragment, {
            children: [(0, _v1.jsx)(_v32.OverlayTemplate, {
              boxSize: "lg"
            }), (0, _v1.jsx)(_v16.Text, {
              variant: "heading-2xs",
              isTruncated: !0,
              children: _v0.name
            })]
          }), (0, _v1.jsxs)(_v24.Menu, {
            placement: "bottom-start",
            children: [(0, _v1.jsx)(_v25.MenuButton, {
              "data-testid": _v35.testIds.hotspots.settings.hotspotMenuOverlayThumbnail,
              as: _v23.IconButton,
              icon: (0, _v1.jsx)(_v31.EllipsisH, {
                boxSize: "xs"
              }),
              variant: "blur",
              position: "absolute",
              top: "sm",
              right: "sm",
              size: "xs",
              "aria-label": _v4.overlayOptions,
              opacity: +!!_v12,
              isDisabled: _v5
            }), (0, _v1.jsx)(_v28.Portal, {
              children: (0, _v1.jsxs)(_v27.MenuList, {
                children: [_v7 && (0, _v1.jsx)(_v26.MenuItem, {
                  "data-testid": _v35.testIds.hotspots.settings.saveAsTemplateMenuItem,
                  icon: (0, _v1.jsx)(_v32.OverlayTemplate, {
                    boxSize: "xs"
                  }),
                  onClick: () => {
                    (0, _v44.sendTrackOverlaySaveAsAction)("top_toolbar"), _v6((0, _v39.setOpenModalIdAction)(_v34.MODAL_IDS.saveAsTeamTemplateModal));
                  },
                  padding: `${(0, _v12.rem)(12)} ${(0, _v12.rem)(16)}`,
                  children: _v4.saveOverlayAsTemplate
                }), (0, _v1.jsx)(_v26.MenuItem, {
                  "data-testid": _v35.testIds.hotspots.settings.renameOverlayMenuItem,
                  icon: (0, _v1.jsx)(_v30.EditSheet, {
                    boxSize: "xs"
                  }),
                  onClick: _v2,
                  padding: `${(0, _v12.rem)(12)} ${(0, _v12.rem)(16)}`,
                  children: _v4.rename
                }), (0, _v1.jsx)(_v26.MenuItem, {
                  "data-testid": _v35.testIds.hotspots.settings.deleteOverlayMenuItem,
                  icon: (0, _v1.jsx)(_v33.TrashBin, {
                    boxSize: "xs"
                  }),
                  onClick: _v3,
                  padding: `${(0, _v12.rem)(12)} ${(0, _v12.rem)(16)}`,
                  children: _v4.removeFromHotspot
                })]
              })
            })]
          })]
        })]
      });
    },
    _v47 = ({
      onChange: _v0,
      isChecked: _v1,
      ..._v2
    }) => (0, _v1.jsxs)(_v9.HStack, {
      ..._v2,
      children: [(0, _v1.jsx)(_v16.Text, {
        variant: "heading-2xs",
        children: (0, _v18.translate)({
          singular: "Pause video when hotspot selected",
          dictionary: {
            es: {
              singular: "Pausar el video cuando se seleccione el punto de acceso"
            },
            "de-DE": {
              singular: "Video anhalten, wenn ein Hotspot ausgewählt wird"
            },
            "fr-FR": {
              singular: "Interrompre la vidéo lors de la sélection d'une zone interactive"
            },
            "ja-JP": {
              singular: "ホットスポットを選択したときに動画を一時停止"
            },
            "ko-KR": {
              singular: "핫스팟 선택 시 동영상 일시 중지"
            },
            "pt-BR": {
              singular: "Pause o vídeo quando o hotspot for selecionado"
            },
            "zh-CN": {
              singular: "选择热点时暂停视频"
            }
          }
        })
      }), (0, _v1.jsx)(_v14.Spacer, {}), (0, _v1.jsx)(_v15.Switch, {
        onChange: _v0,
        isChecked: _v1,
        size: "sm"
      })]
    });
  var _v48 = _v0.i(0),
    _v49 = _v0.i(0),
    _v50 = _v0.i(0),
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
    _v61 = _v0.i(0),
    _v62 = _v0.i(0),
    _v63 = _v0.i(0),
    _v64 = _v0.i(0);
  let _v65 = ({
    overlayId: _v0
  }) => {
    let _v1 = (0, _v36.getTranslations)(),
      _v2 = (0, _v43.useAppDispatch)(),
      _v3 = (0, _v43.useAppSelector)(_v39.openModalIdSelector),
      _v4 = (0, _v43.useAppSelector)(_v0 => (0, _v41.selectInteractiveOverlayById)(_v0, _v0)),
      [_v5, _v6] = (0, _v2.useState)(_v4?.name ?? ""),
      [_v7, _v8] = (0, _v2.useState)((0, _v64.validateTemplateName)(_v5)),
      _v9 = !!_v4 && _v3 === _v34.MODAL_IDS.renameOverlayModal,
      _v10 = (0, _v2.useCallback)(() => _v2((0, _v39.setOpenModalIdAction)("")), [_v2]),
      _v11 = (0, _v2.useCallback)(_v0 => {
        _v4 && (0, _v3.batch)(() => {
          _v2((0, _v41.updateInteractiveOverlayAction)({
            overlay: {
              ..._v4,
              name: _v0
            }
          }));
        });
      }, [_v2, _v4]),
      _v12 = (0, _v2.useCallback)(() => {
        _v10(), _v11(_v5);
      }, [_v10, _v11, _v5]),
      _v13 = (0, _v2.useCallback)(_v0 => {
        "Enter" === _v0.key ? (_v0.preventDefault(), _v12()) : "Escape" === _v0.key && (_v0.preventDefault(), _v10());
      }, [_v12, _v10]);
    return ((0, _v2.useEffect)(() => (_v9 && document.addEventListener("keydown", _v13), () => {
      document.removeEventListener("keydown", _v13);
    }), [_v9, _v13]), _v9) ? (0, _v1.jsxs)(_v58.Modal, {
      isOpen: !0,
      onClose: _v10,
      children: [(0, _v1.jsx)(_v63.ModalOverlay, {}), (0, _v1.jsxs)(_v60.ModalContent, {
        "data-testid": _v35.testIds.overlay.renameOverlayModal.content,
        children: [(0, _v1.jsx)(_v62.ModalHeader, {
          children: _v1.renameOverlay
        }), (0, _v1.jsx)(_v59.ModalBody, {
          children: (0, _v1.jsxs)(_v7.FormControl, {
            isInvalid: !_v7,
            children: [(0, _v1.jsx)(_v8.FormLabel, {
              children: _v1.overlayName
            }), (0, _v1.jsx)(_v10.Input, {
              translate: "no",
              className: "notranslate",
              defaultValue: _v4.name,
              onChange: _v0 => {
                let _v1 = _v0.target.value;
                _v6(_v1), _v8((0, _v64.validateTemplateName)(_v1));
              },
              "data-testid": _v35.testIds.overlay.renameOverlayModal.input
            })]
          })
        }), (0, _v1.jsxs)(_v61.ModalFooter, {
          children: [(0, _v1.jsx)(_v22.Button, {
            variant: "tertiary",
            onClick: _v10,
            children: _v1.cancel
          }), (0, _v1.jsx)(_v22.Button, {
            isDisabled: !_v7,
            variant: "primary",
            onClick: _v12,
            "data-testid": _v35.testIds.overlay.renameOverlayModal.apply,
            children: _v1.apply
          })]
        })]
      })]
    }) : null;
  };
  _v0.s(["RenameOverlayModal", 0, _v65], 0);
  var _v66 = _v0.i(0),
    _v67 = _v0.i(0),
    _v68 = _v0.i(0),
    _v69 = _v0.i(0);
  let _v70 = {
      flexDirection: "column",
      gap: (0, _v12.rem)(16),
      minWidth: (0, _v12.rem)(226)
    },
    _v71 = ({
      disabled: _v0
    }) => ({
      position: "relative",
      direction: "column",
      gap: "xs",
      aspectRatio: 1.8,
      backgroundColor: "fill-component",
      justify: "center",
      align: "center",
      borderRadius: "sm",
      border: "1px solid",
      borderColor: "input-stroke",
      transitionDuration: "sm",
      overflow: "hidden",
      opacity: _v0 ? .5 : void 0,
      _hover: {
        cursor: _v0 ? "wait" : "pointer",
        backgroundColor: "fill-component-hover"
      }
    }),
    _v72 = ({
      children: _v0,
      ..._v1
    }) => _v0 ? (0, _v1.jsx)(_v16.Text, {
      variant: "body-xl",
      fontSize: "0.75rem",
      marginTop: "12px",
      color: "red.600",
      ..._v1,
      children: _v0
    }) : null,
    _v73 = {
      hotspotName: "",
      hotspotStartTime: 0,
      hotspotEndTime: 0,
      actionType: _v19.HotspotActionType.NONE,
      interactiveHotspotWithOverrides: {
        action: {}
      },
      isOpenUrlHotspot: !1,
      isJumpToTimeHotspot: !1,
      isShowOverlayHotspot: !1,
      customPayloadData: null
    },
    _v74 = new Map(),
    _v75 = [],
    _v76 = () => {
      let _v0 = (0, _v2.useMemo)(() => [{
          value: _v50.OVERLAY_ON_END.FREEZE,
          label: (0, _v36.getTranslations)().freezeOnLastFrame
        }, {
          value: _v50.OVERLAY_ON_END.CLOSE,
          label: (0, _v36.getTranslations)().closeOverlay
        }, {
          value: _v50.OVERLAY_ON_END.LOOP,
          label: (0, _v36.getTranslations)().loopOverlay
        }], []),
        _v1 = (0, _v36.getTranslations)(),
        _v2 = (0, _v43.useAppSelector)(_v54.selectedElementsSelector),
        _v3 = (0, _v43.useAppSelector)(_v42.isLoadingMediaOrApplyingTemplateSelector),
        _v4 = (0, _v43.useAppDispatch)(),
        _v5 = (0, _v43.useAppSelector)(_v53.overridesWithoutRectSelector, _v4.shallowEqual),
        _v6 = (0, _v43.useAppSelector)(_v41.durationSelector),
        _v7 = (0, _v43.useAppSelector)(_v42.fullVideoDurationSelector),
        _v8 = (0, _v43.useAppSelector)(_v41.interactiveVideoSrcSelector),
        _v9 = (0, _v43.useAppSelector)(_v52.isEditingOverlaySelector),
        {
          editBlankHotspotOverlay: _v10,
          editOverlay: _v11
        } = (0, _v51.useInteractiveOverlay)(),
        _v12 = (0, _v2.useMemo)(() => {
          var _v0;
          let _v1;
          return _v0 = _v9, _v1 = [{
            value: _v19.HotspotActionType.OPEN_URL,
            label: (0, _v36.getTranslations)().openUrl
          }, {
            value: _v19.HotspotActionType.JUMP_TO_TIME,
            label: (0, _v36.getTranslations)().jumpToTime
          }, {
            value: _v19.HotspotActionType.FIRE_EVENT,
            label: (0, _v36.getTranslations)().fireEvent
          }, {
            value: _v19.HotspotActionType.NONE,
            label: (0, _v36.getTranslations)().doNothing
          }], _v0 ? _v1.unshift({
            value: _v19.HotspotActionType.HIDE_OVERLAY,
            label: (0, _v36.getTranslations)().closeOverlay
          }) : _v1.unshift({
            value: _v19.HotspotActionType.SHOW_OVERLAY,
            label: (0, _v36.getTranslations)().openOverlay
          }), _v1;
        }, [_v9]),
        _v13 = _v2[0],
        _v14 = (0, _v55.isInteractiveHotspot)(_v13),
        [_v15, _v16] = (0, _v2.useState)(() => {
          var _v0;
          return _v0 = _v13, {
            [_v19.HotspotActionType.JUMP_TO_TIME]: _v48.HOTSPOT_JUMP_TO_DEFAULT,
            [_v19.HotspotActionType.OPEN_URL]: {
              url: (0, _v56.getDefaultHotspotUrl)(_v0),
              openInNewTab: !1
            },
            [_v19.HotspotActionType.SHOW_OVERLAY]: "",
            [_v19.HotspotActionType.HIDE_OVERLAY]: ""
          };
        }),
        _v17 = _v13?.id ? _v5[_v13.id] : void 0,
        {
          hotspotName: _v18,
          hotspotStartTime: _v19,
          hotspotEndTime: _v20,
          actionType: _v21,
          interactiveHotspotWithOverrides: _v22,
          isOpenUrlHotspot: _v23,
          isJumpToTimeHotspot: _v24,
          isShowOverlayHotspot: _v25,
          customPayloadData: _v26
        } = function (_v0, _v1, _v2) {
          if (!(0, _v55.isInteractiveHotspot)(_v0)) return _v73;
          let _v3 = _v1?.compositionTiming?.start ?? _v0?.compositionTiming.start ?? 0,
            _v4 = _v1?.compositionTiming?.end ?? _v0?.compositionTiming.end ?? (0, _v57.getSafeTime)(_v3 + _v49.HOTSPOT_DEFAULT_DURATION, _v2),
            _v5 = _v1?.interactiveHotspot?.action,
            _v6 = _v5?.type ?? _v0?.interactiveHotspot.action.type ?? _v19.HotspotActionType.OPEN_URL,
            _v7 = {
              ..._v0?.interactiveHotspot,
              type: _v6,
              action: {
                ..._v0?.interactiveHotspot.action,
                ..._v5
              }
            },
            _v8 = _v6 === _v19.HotspotActionType.OPEN_URL,
            _v9 = _v6 === _v19.HotspotActionType.JUMP_TO_TIME,
            _v10 = _v6 === _v19.HotspotActionType.SHOW_OVERLAY,
            _v11 = _v6 === _v19.HotspotActionType.HIDE_OVERLAY,
            _v12 = _v0?.interactiveHotspot.action?.customPayloadData ?? null;
          return {
            isOpenUrlHotspot: _v8,
            isJumpToTimeHotspot: _v9,
            isShowOverlayHotspot: _v10,
            isHideOverlayHotspot: _v11,
            hotspotName: _v7.name ?? "",
            hotspotStartTime: _v3,
            hotspotEndTime: _v4,
            interactiveHotspotWithOverrides: _v7,
            actionWithOverrides: _v5,
            actionType: _v6,
            customPayloadData: _v12
          };
        }(_v13, _v17, _v6),
        _v27 = (0, _v43.useAppSelector)(_v0 => (0, _v41.selectInteractiveOverlayById)(_v0, _v15[_v19.HotspotActionType.SHOW_OVERLAY])),
        _v28 = _v27?.onEndAction,
        _v29 = (0, _v2.useMemo)(() => _v28 ? [_v28] : _v75, [_v28]),
        _v30 = (0, _v2.useMemo)(() => [_v21], [_v21]);
      (0, _v2.useEffect)(() => {
        if (!_v13 || !_v14) return;
        let {
            action: _v0
          } = _v13.interactiveHotspot,
          _v1 = _v74.get(_v13.id) ?? {};
        switch (_v0.type) {
          case _v19.HotspotActionType.OPEN_URL:
            _v1[_v19.HotspotActionType.OPEN_URL] = _v0;
            break;
          case _v19.HotspotActionType.JUMP_TO_TIME:
            _v1[_v19.HotspotActionType.JUMP_TO_TIME] = _v0.time;
            break;
          case _v19.HotspotActionType.SHOW_OVERLAY:
            _v1[_v19.HotspotActionType.SHOW_OVERLAY] = _v0.overlayId;
        }
        _v74.set(_v13.id, _v1), _v16(_v0 => ({
          ..._v0,
          ..._v1
        }));
      }, [_v13, _v14]);
      let _v31 = (_v0, _v1) => {
          let {
            name: _v2
          } = _v1;
          if (!_v13 || !_v2) return;
          let _v3 = (0, _v57.getSafeTime)(_v0, _v6),
            _v4 = {
              ..._v13.compositionTiming,
              [_v2]: _v3,
              ...(0, _v56.handleTimeRestrictions)({
                name: _v2,
                compositionTiming: _v13.compositionTiming,
                newTime: _v3,
                videoDuration: _v6
              })
            };
          _v4((0, _v41.updateElementAction)({
            ceId: _v13.id,
            element: {
              compositionTiming: _v4
            }
          }));
        },
        _v32 = (0, _v2.useCallback)(_v0 => {
          switch (_v0) {
            case _v19.HotspotActionType.OPEN_URL:
              let {
                url: _v0,
                openInNewTab: _v1
              } = _v15[_v19.HotspotActionType.OPEN_URL];
              return {
                type: _v0,
                url: (0, _v56.isValidUrl)(_v0).isValid ? _v0 : "",
                openInNewTab: _v1
              };
            case _v19.HotspotActionType.JUMP_TO_TIME:
              return {
                type: _v0,
                time: (0, _v57.getSafeTime)(_v15?.[_v19.HotspotActionType.JUMP_TO_TIME] ?? _v48.HOTSPOT_JUMP_TO_DEFAULT, _v7)
              };
            case _v19.HotspotActionType.SHOW_OVERLAY:
              return {
                type: _v0,
                overlayId: _v15[_v19.HotspotActionType.SHOW_OVERLAY]
              };
            case _v19.HotspotActionType.HIDE_OVERLAY:
              return {
                type: _v0,
                overlayId: _v15[_v19.HotspotActionType.HIDE_OVERLAY]
              };
            case _v19.HotspotActionType.FIRE_EVENT:
              return {
                type: _v19.HotspotActionType.FIRE_EVENT
              };
          }
          return {
            type: _v19.HotspotActionType.NONE
          };
        }, [_v15, _v7]),
        _v33 = _v0 => {
          if (!_v13) return;
          let _v1 = _v0.target.checked;
          _v4((0, _v41.updateElementAction)({
            ceId: _v13.id,
            element: {
              interactiveHotspot: {
                pauseOnClick: _v1
              }
            }
          }));
        },
        _v34 = _v13 && _v23 ? (0, _v56.isValidUrl)(_v15[_v19.HotspotActionType.OPEN_URL].url).validityMessage : "";
      return _v14 ? (0, _v1.jsxs)(_v67.Inspector, {
        children: [(0, _v1.jsx)(_v68.InspectorHeader, {
          title: (0, _v18.translate)({
            singular: "Hotspot settings",
            dictionary: {
              es: {
                singular: "Configuración del punto de acceso"
              },
              "de-DE": {
                singular: "Hotspot-Einstellungen"
              },
              "fr-FR": {
                singular: "Paramètres de la zone interactive"
              },
              "ja-JP": {
                singular: "ホットスポット設定"
              },
              "ko-KR": {
                singular: "핫스팟 설정"
              },
              "pt-BR": {
                singular: "Configurações do hotspot"
              },
              "zh-CN": {
                singular: "热点设置"
              }
            }
          })
        }), _v27 && (0, _v1.jsx)(_v65, {
          overlayId: _v27.id
        }), (0, _v1.jsx)(_v69.InspectorPaddedRow, {
          children: (0, _v1.jsxs)(_v6.Flex, {
            ..._v70,
            children: [(0, _v1.jsxs)(_v7.FormControl, {
              children: [(0, _v1.jsx)(_v8.FormLabel, {
                children: _v1.name
              }), (0, _v1.jsx)(_v10.Input, {
                translate: "no",
                className: "notranslate",
                autoFocus: !0,
                value: _v18,
                onChange: _v0 => {
                  _v13 && _v4((0, _v41.updateElementAction)({
                    ceId: _v13.id,
                    element: {
                      interactiveHotspot: {
                        name: _v0.target.value
                      }
                    }
                  }));
                },
                "data-testid": _v35.testIds.hotspotName
              })]
            }), (0, _v1.jsxs)(_v9.HStack, {
              children: [(0, _v1.jsxs)(_v7.FormControl, {
                children: [(0, _v1.jsx)(_v8.FormLabel, {
                  children: _v1.start
                }), (0, _v1.jsx)(_v66.TimeInput, {
                  name: "start",
                  "data-testid": _v35.testIds.hotspotStartTime,
                  value: _v19,
                  onChange: _v31
                })]
              }), (0, _v1.jsxs)(_v7.FormControl, {
                children: [(0, _v1.jsx)(_v8.FormLabel, {
                  children: _v1.end
                }), (0, _v1.jsx)(_v66.TimeInput, {
                  name: "end",
                  "data-testid": _v35.testIds.hotspotEndTime,
                  value: _v20,
                  onChange: _v31
                })]
              })]
            }), (0, _v1.jsxs)(_v7.FormControl, {
              children: [(0, _v1.jsx)(_v8.FormLabel, {
                children: _v1.actionOnClick
              }), (0, _v1.jsx)(_v13.Select, {
                "data-testid": _v35.testIds.hotspots.settings.hotspotActionsList,
                value: _v30,
                onValueChange: ({
                  value: _v0
                }) => {
                  (_v0 => {
                    if (!_v13) return;
                    let _v1 = _v0 === _v19.HotspotActionType.OPEN_URL,
                      _v2 = _v32(_v0);
                    _v4((0, _v41.updateElementAction)({
                      ceId: _v13.id,
                      element: {
                        interactiveHotspot: {
                          action: _v2,
                          pauseOnClick: _v1
                        }
                      }
                    }));
                  })(_v0[0]);
                },
                items: _v12
              })]
            }), _v23 && (0, _v1.jsxs)("div", {
              children: [(0, _v1.jsx)(_v10.Input, {
                translate: "no",
                className: "notranslate",
                value: _v15[_v19.HotspotActionType.OPEN_URL].url,
                onChange: _v0 => {
                  if (!_v14 || !_v23 || !_v13) return;
                  let {
                      value: _v1
                    } = _v0.target,
                    _v2 = {
                      ..._v15,
                      [_v19.HotspotActionType.OPEN_URL]: {
                        ..._v15[_v19.HotspotActionType.OPEN_URL],
                        url: _v1
                      }
                    };
                  if (!(0, _v56.isValidUrl)(_v1).isValid) return void _v16(_v2);
                  _v74.set(_v13.id, _v2), _v16(_v2);
                  let _v3 = {
                    ..._v13.interactiveHotspot.action,
                    url: _v1
                  };
                  _v4((0, _v41.updateElementAction)({
                    ceId: _v13.id,
                    element: {
                      interactiveHotspot: {
                        action: _v3
                      }
                    }
                  }));
                },
                "data-testid": _v35.testIds.hotspotUrl,
                isInvalid: !!_v34
              }), (0, _v1.jsx)(_v72, {
                "data-testid": _v35.testIds.hotspots.settings.hotspotUrlValidation,
                children: _v34
              }), (0, _v1.jsx)(_v47, {
                onChange: _v33,
                isChecked: !!_v13?.interactiveHotspot.pauseOnClick,
                marginTop: "1rem"
              }), (0, _v1.jsxs)(_v9.HStack, {
                marginTop: "1rem",
                children: [(0, _v1.jsx)(_v16.Text, {
                  variant: "heading-2xs",
                  children: _v1.openUrlInANewTab
                }), (0, _v1.jsx)(_v14.Spacer, {}), (0, _v1.jsx)(_v15.Switch, {
                  size: "sm",
                  onChange: _v0 => {
                    if (!_v23 || !_v13) return;
                    let _v1 = _v0.target.checked,
                      _v2 = {
                        ..._v15,
                        [_v19.HotspotActionType.OPEN_URL]: {
                          ..._v15[_v19.HotspotActionType.OPEN_URL],
                          openInNewTab: _v1
                        }
                      };
                    _v74.set(_v13.id, _v2), _v16(_v2), _v4((0, _v41.updateElementAction)({
                      ceId: _v13.id,
                      element: {
                        interactiveHotspot: {
                          action: {
                            openInNewTab: _v1
                          }
                        }
                      }
                    }));
                  },
                  isChecked: _v13?.interactiveHotspot.action?.openInNewTab
                })]
              })]
            }), _v24 && (0, _v1.jsxs)(_v1.Fragment, {
              children: [(0, _v1.jsx)(_v21.JumpToTimeController, {
                inputTestId: _v35.testIds.hotspots.settings.jumpToTimeInput,
                sliderThumbTestId: _v35.testIds.hotspots.settings.jumpToTimeSlider,
                value: (_v22?.action).time,
                onChange: _v0 => {
                  if (!_v14 || _v13?.interactiveHotspot.action.type !== _v19.HotspotActionType.JUMP_TO_TIME) return;
                  let _v1 = (0, _v57.getSafeTime)(_v7, _v0),
                    _v2 = {
                      ..._v15,
                      [_v19.HotspotActionType.JUMP_TO_TIME]: _v1
                    };
                  _v74.set(_v13.id, _v2), _v16(_v2), _v4((0, _v41.updateElementAction)({
                    ceId: _v13.id,
                    element: {
                      interactiveHotspot: {
                        action: {
                          ..._v13.interactiveHotspot.action,
                          time: _v1
                        }
                      }
                    }
                  }));
                },
                videoDuration: _v7,
                videoSrc: _v8
              }), (0, _v1.jsx)(_v47, {
                onChange: _v33,
                isChecked: !!_v13?.interactiveHotspot.pauseOnClick,
                marginTop: "1rem"
              })]
            }), _v25 && (_v27 && _v13 ? (0, _v1.jsxs)(_v1.Fragment, {
              children: [(0, _v1.jsx)(_v46, {
                overlay: _v27,
                onEditOverlayButtonClick: () => _v11({
                  overlayId: _v27.id,
                  linkedElementId: _v13.id
                }),
                onRenameButtonClick: () => _v4((0, _v39.setOpenModalIdAction)(_v34.MODAL_IDS.renameOverlayModal)),
                onDeleteButtonClick: () => {
                  if (!_v14 || !_v27) return;
                  let _v0 = _v15[_v19.HotspotActionType.SHOW_OVERLAY];
                  _v0 && (0, _v3.batch)(() => {
                    _v4((0, _v41.updateElementAction)({
                      ceId: _v13.id,
                      element: {
                        interactiveHotspot: {
                          action: {
                            overlayId: ""
                          }
                        }
                      }
                    })), _v4((0, _v41.deleteInteractiveOverlayAction)({
                      overlayId: _v0
                    }));
                  });
                }
              }), (0, _v1.jsx)(_v47, {
                onChange: _v33,
                isChecked: !!_v13?.interactiveHotspot.pauseOnClick
              }), (0, _v1.jsxs)(_v5.Box, {
                children: [(0, _v1.jsx)(_v16.Text, {
                  variant: "heading-2xs",
                  mb: "0.5rem",
                  children: _v1.whenOverlayEnds
                }), (0, _v1.jsx)(_v13.Select, {
                  size: "sm",
                  "data-testid": _v35.testIds.hotspots.settings.hotspotActionsList,
                  value: _v29,
                  items: _v0,
                  onValueChange: ({
                    value: _v0
                  }) => {
                    if (!_v27) return;
                    let _v1 = _v0[0];
                    _v4((0, _v41.updateInteractiveOverlayAction)({
                      overlay: {
                        ..._v27,
                        onEndAction: _v1
                      }
                    }));
                  }
                })]
              }), _v28 !== _v50.OVERLAY_ON_END.CLOSE && (0, _v1.jsxs)(_v6.Flex, {
                gap: ".5rem",
                justifyContent: "center",
                alignItems: "center",
                children: [(0, _v1.jsxs)(_v7.FormControl, {
                  gap: "1rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                  children: [(0, _v1.jsxs)(_v9.HStack, {
                    gap: "0.2rem",
                    children: [(0, _v1.jsx)(_v16.Text, {
                      variant: "heading-2xs",
                      children: _v1.closeAfter
                    }), (0, _v1.jsxs)(_v16.Text, {
                      color: "text-secondary",
                      variant: "heading-2xs",
                      children: ["(", _v1.seconds, ")"]
                    })]
                  }), (0, _v1.jsxs)(_v11.NumberInput, {
                    value: _v27.closeAfter < 0 ? 0 : _v27.closeAfter,
                    precision: 0,
                    step: 1,
                    size: "xs",
                    isDisabled: _v27.closeAfter < 0,
                    onChange: (_v0, _v1) => {
                      _v27 && _v4((0, _v41.updateInteractiveOverlayAction)({
                        overlay: {
                          ..._v27,
                          closeAfter: _v1
                        }
                      }));
                    },
                    children: [(0, _v1.jsx)(_v11.NumberInputField, {
                      w: "4rem"
                    }), (0, _v1.jsxs)(_v11.NumberInputStepper, {
                      children: [(0, _v1.jsx)(_v11.NumberIncrementStepper, {}), (0, _v1.jsx)(_v11.NumberDecrementStepper, {})]
                    })]
                  })]
                }), (0, _v1.jsx)(_v14.Spacer, {}), (0, _v1.jsx)(_v15.Switch, {
                  size: "sm",
                  onChange: _v0 => {
                    if (!_v27) return;
                    let _v1 = _v0.target.checked ? _v50.DEFAULT_CLOSE_AFTER : -1;
                    _v4((0, _v41.updateInteractiveOverlayAction)({
                      overlay: {
                        ..._v27,
                        closeAfter: _v1
                      }
                    }));
                  },
                  isChecked: _v27.closeAfter > -1
                })]
              })]
            }) : (0, _v1.jsxs)(_v6.Flex, {
              "data-testid": _v35.testIds.hotspots.settings.createNewOverlay,
              disabled: !!_v3 || void 0,
              onClick: () => {
                _v14 && _v13?.interactiveHotspot.action.type === _v19.HotspotActionType.SHOW_OVERLAY && _v10(_v13.id);
              },
              ..._v71({
                disabled: _v3
              }),
              children: [(0, _v1.jsx)(_v17.PlusSmall, {}), (0, _v1.jsx)(_v16.Text, {
                variant: "body-md",
                align: "center",
                maxWidth: (0, _v12.rem)(140),
                children: _v1.createNewOverlay
              })]
            })), (0, _v1.jsx)(_v20.CustomPayloadDataController, {
              customPayloadData: _v26,
              isShown: _v21 !== _v19.HotspotActionType.NONE,
              isOptional: _v21 !== _v19.HotspotActionType.FIRE_EVENT,
              firstElement: _v13
            }, _v13?.id)]
          })
        })]
      }) : null;
    };
  _v0.s(["HotspotsInspector", () => _v109], 0);
  var _v77 = _v0.i(0),
    _v78 = _v0.i(0),
    _v79 = _v0.i(0),
    _v80 = _v0.i(0),
    _v81 = _v0.i(0),
    _v82 = _v0.i(0),
    _v83 = _v0.i(0),
    _v84 = _v0.i(0);
  let _v85 = {
      id: "textHotspot",
      name: "Text",
      thumbnailUrl: "https://i.vimeocdn.com/custom_asset/95434081bec4050a62cc4dc381bf4174"
    },
    _v86 = {
      dropShadow: _v83.DropShadow.NONE,
      font: "InterTight-Bold",
      opacity: 100,
      borderRadius: 0,
      fontSize: 72
    },
    _v87 = {
      bgAlpha: 0,
      backgroundColor: "#000000"
    },
    _v88 = {
      borderWidth: 0,
      borderColor: "#ffffff"
    },
    _v89 = {
      borderWidth: 11,
      borderColor: "#ffffff"
    },
    _v90 = [{
      id: "sharp",
      imageUrl: "https://i.vimeocdn.com/custom_asset/10ce99b107771b9b367fdd78d14cea42",
      name: "Sharp",
      preset: (0, _v84.createButtonPreset)({
        ..._v86,
        ..._v88,
        backgroundColor: "#ffffff",
        textColor: "#000000",
        textContent: "Sharp",
        rect: {
          x: 0,
          y: 0,
          width: .17,
          height: .144
        }
      })
    }, {
      id: "rounded",
      imageUrl: "https://i.vimeocdn.com/custom_asset/f22b34e44c4ba66f51faacfb1d827663",
      name: "Rounded",
      preset: (0, _v84.createButtonPreset)({
        ..._v86,
        ..._v88,
        backgroundColor: "#ffffff",
        textColor: "#000000",
        textContent: "Rounded",
        borderRadius: 14,
        rect: {
          x: 0,
          y: 0,
          width: .1945,
          height: .1404
        }
      })
    }, {
      id: "pill",
      imageUrl: "https://i.vimeocdn.com/custom_asset/3dcf5e462688e3a09c1a2f218a36a618",
      name: "Pill",
      preset: (0, _v84.createButtonPreset)({
        ..._v86,
        ..._v88,
        backgroundColor: "#ffffff",
        textColor: "#000000",
        textContent: "Pill",
        borderRadius: 53,
        rect: {
          x: 0,
          y: 0,
          width: .14,
          height: .13
        }
      })
    }, {
      id: "frame",
      imageUrl: "https://i.vimeocdn.com/custom_asset/d19af89bfab4db3f1c80e62b6cec67ab",
      name: "Frame",
      preset: (0, _v84.createButtonPreset)({
        ..._v86,
        ..._v87,
        ..._v89,
        textColor: "#ffffff",
        textContent: "Frame",
        rect: {
          x: 0,
          y: 0,
          width: .18,
          height: .144
        }
      })
    }, {
      id: "outline",
      imageUrl: "https://i.vimeocdn.com/custom_asset/5653543ae8997f2f7ba4a5a80e95da26",
      name: "Outline",
      preset: (0, _v84.createButtonPreset)({
        ..._v86,
        ..._v87,
        ..._v89,
        textContent: "Outline",
        textColor: "#ffffff",
        borderRadius: 30,
        rect: {
          x: 0,
          y: 0,
          width: .18,
          height: .146
        }
      })
    }, {
      id: "tag",
      imageUrl: "https://i.vimeocdn.com/custom_asset/25b1497b3aa7b278f63556ebce61f4d0",
      name: "Tag",
      preset: (0, _v84.createButtonPreset)({
        ..._v86,
        ..._v87,
        ..._v89,
        textContent: "Tag",
        textColor: "#ffffff",
        borderRadius: 100,
        rect: {
          x: 0,
          y: 0,
          width: .17,
          height: .15
        }
      })
    }, {
      id: "minimal",
      imageUrl: "https://i.vimeocdn.com/custom_asset/598339bb56e11982808b32671be7093c",
      name: "Minimal",
      preset: (0, _v84.createButtonPreset)({
        ..._v86,
        ..._v87,
        ..._v88,
        textContent: "Minimal",
        textColor: "#ffffff",
        rect: {
          x: 0,
          y: 0,
          width: .18,
          height: .18
        }
      })
    }, {
      id: "soft",
      imageUrl: "https://i.vimeocdn.com/custom_asset/d4fc874ee68b5b92fe463c1c35b406ee",
      name: "Soft",
      preset: (0, _v84.createButtonPreset)({
        ..._v86,
        ..._v88,
        textColor: "#ffffff",
        backgroundColor: "#000000",
        bgAlpha: 20,
        textContent: "Soft",
        borderRadius: 22,
        rect: {
          x: 0,
          y: 0,
          width: .14,
          height: .135
        }
      })
    }, {
      id: "shadow",
      imageUrl: "https://i.vimeocdn.com/custom_asset/ec1d1d1e4c5e5697c22656938b0d5ad1",
      name: "Shadow",
      preset: (0, _v84.createButtonPreset)({
        ..._v86,
        ..._v88,
        textContent: "Shadow",
        backgroundColor: "#ffffff",
        textColor: "#000000",
        dropShadow: _v83.DropShadow.SHARP,
        rect: {
          x: 0,
          y: 0,
          width: .19,
          height: .145
        }
      })
    }, {
      id: "pop",
      imageUrl: "https://i.vimeocdn.com/custom_asset/d83ccb48915578bc5f582a6b9054491b",
      name: "Pop",
      preset: (0, _v84.createButtonPreset)({
        ..._v86,
        ..._v88,
        textContent: "Pop",
        backgroundColor: "#ffffff",
        textColor: "#000000",
        dropShadow: _v83.DropShadow.NORMAL,
        borderRadius: 100,
        rect: {
          x: 0,
          y: 0,
          width: .15,
          height: .13
        }
      })
    }];
  var _v91 = _v0.i(0),
    _v92 = _v0.i(0),
    _v93 = _v0.i(0),
    _v94 = _v0.i(0),
    _v95 = _v0.i(0),
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
    _v107 = _v0.i(0),
    _v108 = _v0.i(0);
  let _v109 = () => {
    let _v0 = (0, _v36.getTranslations)(),
      _v1 = (0, _v43.useAppDispatch)(),
      _v2 = (0, _v43.useAppSelector)((0, _v100.inspectorDataSelector)(_v101.InspectorType.HOTSPOTS)),
      _v3 = (0, _v43.useAppSelector)(_v41.videoSessionIdSelector),
      {
        createOrReplaceHotspotFromMedia: _v4,
        createOrReplaceAndAddHotspotFromGraphic: _v5
      } = (0, _v94.useHotspot)(),
      {
        handleAddButtonFromLibrary: _v6
      } = (0, _v93.useButton)(),
      _v7 = (0, _v43.useAppSelector)(_v41.orientationSelector),
      [_v8, _v9] = (0, _v2.useState)(null),
      {
        data: _v10
      } = (0, _v99.useFetchGraphicsCategoriesQuery)({
        tag: _v97.GraphicsTag.INTERACTIVE
      }),
      [_v11, {
        data: _v12,
        isLoading: _v13,
        isFetching: _v14
      }] = (0, _v99.useLazyFetchGraphicsQuery)(),
      _v15 = _v13 || _v14,
      _v16 = _v8 === _v85.id,
      {
        initialUploadLocalMediaFile: _v17
      } = (0, _v96.useLocalFile)(),
      {
        alertUploadFailed: _v18
      } = (0, _v95.useAlerts)(),
      _v19 = (0, _v2.useMemo)(() => {
        let _v0 = [_v85];
        return _v10 && _v0.push(...Object.values(_v10)), _v0;
      }, [_v10]),
      _v20 = (0, _v2.useCallback)(({
        categoryId: _v0,
        page: _v1,
        tag: _v2
      }, _v3) => {
        _v9(_v0), _v0 !== _v85.id && _v11({
          categoryId: _v0,
          page: _v1,
          tag: _v2
        }, _v3);
      }, [_v11]),
      _v21 = (0, _v2.useMemo)(() => {
        if (!_v14) return _v16 ? {
          id: _v85.id,
          name: _v85.name,
          items: _v90.map(_v84.createGraphicItemFromButtonPreset),
          hasNextPage: !1,
          page: 1
        } : _v12;
      }, [_v12, _v14, _v16]),
      _v22 = (0, _v2.useCallback)(async (_v0, _v1) => {
        let _v2 = !_v1;
        if (_v16) {
          let _v0 = _v90.find(_v0 => _v0.id === _v0.id);
          if (!_v0) return;
          return _v6({
            preset: _v0.preset[_v7],
            draggableData: _v1,
            shouldAddElement: _v2,
            shouldUseBrandColors: !0
          });
        }
        return _v5(_v0, _v1, {
          shouldAddElement: _v2
        });
      }, [_v5, _v6, _v16, _v7]),
      _v23 = (0, _v2.useCallback)(async _v0 => {
        let {
          files: _v1
        } = _v0.target;
        if (_v1) for (let _v0 of _v1) _v17(_v0, {
          isHotspot: !0
        }).catch(_v0 => {
          _v18(_v0.name), _v98.default.sendLog(_v82.FAILED_TO_UPLOAD_MEDIA, _v102.LogComponent.EDITOR_UPLOAD_ERROR, {
            fileName: _v0.name,
            vsid: _v3,
            error: _v0.message
          });
        });
        (0, _v104.sendTrackUploadMediaFromComputer)({
          location: "drawer",
          copy: "Upload",
          element: "button"
        });
      }, [_v18, _v17, _v3]),
      _v24 = (0, _v2.useMemo)(() => ({
        [_v101.HotspotInspectorTabType.GRAPHIC]: {
          label: _v0.exploreTab,
          content: (0, _v1.jsx)(_v107.GraphicLibrary, {
            testIdPrefix: "hotspots",
            categories: _v19,
            onImageSelect: _v22,
            categoryData: _v21,
            onCategorySelect: _v20,
            tag: _v97.GraphicsTag.INTERACTIVE,
            isItemsLoading: _v15,
            fitImageToBox: !0,
            preferCacheValue: !0
          })
        },
        [_v101.HotspotInspectorTabType.UPLOADS]: {
          label: _v0.uploadsTab,
          content: (0, _v1.jsx)(_v108.default, {
            orientation: _v91.MediaUploadsOrientation.ALL,
            mediaType: _v91.MediaUploadsType.IMAGE,
            emptyStateText: _v0.uploadsEmptyState,
            createOrReplaceElement: _v4,
            handleFileUpload: _v23,
            addItemAsHotspot: !0,
            fetchHotspotUploads: !0
          })
        }
      }), [_v0.exploreTab, _v0.uploadsTab, _v0.uploadsEmptyState, _v19, _v22, _v21, _v20, _v15, _v4, _v23]),
      _v25 = Object.keys(_v24),
      _v26 = _v25.indexOf(_v2.tab),
      _v27 = (0, _v2.useCallback)(() => {
        _v1((0, _v100.updateInspectorDataAction)({
          inspectorType: _v101.InspectorType.HOTSPOTS,
          data: {
            tab: _v101.HotspotInspectorTabType.UPLOADS
          }
        }));
      }, [_v1]);
    return (0, _v1.jsxs)(_v67.Inspector, {
      children: [(0, _v1.jsx)(_v68.InspectorHeader, {
        title: _v0.hotspots,
        quickActions: (0, _v1.jsx)(_v105.FileInputIconButton, {
          onChange: _v23,
          accept: _v92.ALLOWED_HOTSPOT_MEDIA.join(","),
          multiple: !0,
          dataTestid: "media-inspector-upload-media-button",
          onBeforeChange: _v27,
          tooltip: (0, _v18.translate)({
            singular: "Upload",
            dictionary: {
              es: {
                singular: "Subir"
              },
              "de-DE": {
                singular: "Hochladen"
              },
              "fr-FR": {
                singular: "Importer"
              },
              "ja-JP": {
                singular: "アップロード"
              },
              "ko-KR": {
                singular: "업로드"
              },
              "pt-BR": {
                singular: "Carregar"
              },
              "zh-CN": {
                singular: "上传"
              }
            }
          })
        }),
        info: (0, _v18.translate)({
          singular: "Hotspots are clickable elements that let viewers interact with your video",
          dictionary: {
            es: {
              singular: "Los puntos de acceso son elementos para hacer clic que permiten a los espectadores interactuar con su video"
            },
            "de-DE": {
              singular: "Hotspots sind anklickbar Elemente, die es Zuschauende ermöglichen, mit deinem Video zu interagieren"
            },
            "fr-FR": {
              singular: "Les zones interactives sont des éléments cliquables qui permettent aux spectateurs d’interagir avec votre vidéo."
            },
            "ja-JP": {
              singular: "ホットスポットはクリック可能な要素で、視聴者が動画を操作できるようにします"
            },
            "ko-KR": {
              singular: "핫스팟은 뷰어가 동영상과 상호 작용할 수 있도록 하는 클릭 가능한 요소입니다."
            },
            "pt-BR": {
              singular: "Hotspot é um elemento clicável para que os espectadores interajam com seus vídeos"
            },
            "zh-CN": {
              singular: "热点是可点击的元素，可让观众与视频互动"
            }
          }
        })
      }), (0, _v1.jsx)(_v106.InspectorBody, {
        children: (0, _v1.jsxs)(_v78.Tabs, {
          isLazy: !0,
          height: "100%",
          variant: "soft",
          display: "flex",
          flexDirection: "column",
          onChange: _v0 => {
            let _v1 = _v25[_v0];
            (({
              mediaTab: _v0,
              prevMediaTab: _v1
            }) => {
              _v103.default.send({
                eventName: "vimeo.hotspot_tab_selection",
                version: 1,
                contexts: {
                  ..._v103.default.buildActionContext("click"),
                  ..._v103.default.buildEditorContext({
                    via: null,
                    editorFeature: "hotspot"
                  }),
                  ..._v103.default.buildProductAnalyticsContext({
                    feature: "hotspot",
                    location: "drawer",
                    copy: _v0
                  }),
                  ..._v103.default.buildWebContext(),
                  ..._v103.default.buildTeamContext()
                },
                additionalFields: {
                  action_cta: null,
                  action_state: _v1 ?? null,
                  selection_id: null,
                  selection_name: null,
                  selection_format: null,
                  number_of_elements: null,
                  third_party_integration: _v103.default.getThirdPartyIntegration()
                }
              });
            })({
              mediaTab: _v1,
              prevMediaTab: _v2.tab
            }), _v1((0, _v100.updateInspectorDataAction)({
              inspectorType: _v101.InspectorType.HOTSPOTS,
              data: {
                tab: _v1
              }
            }));
          },
          index: _v26,
          size: "sm",
          children: [(0, _v1.jsx)(_v69.InspectorPaddedRow, {
            marginTop: !1,
            padLeft: !0,
            padRight: !0,
            children: (0, _v1.jsxs)(_v79.TabList, {
              children: [Object.entries(_v24).map(_v0 => {
                let _v1 = _v0[1];
                return (0, _v1.jsx)(_v77.Tab, {
                  children: _v1.label
                }, _v1.label);
              }), (0, _v1.jsx)(_v78.TabIndicator, {})]
            })
          }), (0, _v1.jsx)(_v81.TabPanels, {
            height: "100%",
            children: Object.entries(_v24).map(([_v0, _v1]) => (0, _v1.jsx)(_v80.TabPanel, {
              padding: 0,
              display: "flex",
              flexDirection: "column",
              height: "100%",
              minWidth: 0,
              id: _v0,
              "data-testid": `hotspot-inspector-active-tab-${_v1.label.toLowerCase()}`,
              children: _v1.content
            }, _v1.label))
          })]
        })
      })]
    });
  };
  _v0.s(["IframesInspector", () => _v141], 0);
  var _v110 = _v0.i(0),
    _v111 = _v0.i(0),
    _v112 = _v0.i(0),
    _v113 = _v0.i(0),
    _v114 = _v0.i(0),
    _v115 = _v0.i(0),
    _v116 = _v0.i(0),
    _v117 = _v0.i(0),
    _v118 = _v0.i(0),
    _v119 = _v0.i(0);
  let _v120 = {
    AUTO_PLAY: "autoPlay",
    LOOP: "loop",
    SHOW_CONTROLS: "showControls"
  };
  _v0.s(["VIDEO_BEHAVIOR_FIELDS", 0, _v120], 0);
  let _v121 = {
      [_v120.AUTO_PLAY]: "autoplay",
      [_v120.LOOP]: "loop",
      [_v120.SHOW_CONTROLS]: "controls"
    },
    _v122 = "New York",
    _v123 = (_v0, _v1) => `https://www.google.com/maps/embed/v1/place?key=${_v119.GOOGLE_MAPS_API_KEY_PLACEHOLDER}&q=${encodeURIComponent(_v0)}&zoom=${_v1}`,
    _v124 = _v0 => {
      switch (_v0) {
        case _v113.IframeElementPreset.URL:
          return "https://vimeo.com/blog";
        case _v113.IframeElementPreset.VIMEO_VIDEO:
          return "https://vimeo.com/229854054";
        case _v113.IframeElementPreset.GOOGLE_MAPS:
          return _v123(_v122, 12);
        default:
          return "";
      }
    },
    _v125 = "https://player.vimeo.com/video/",
    _v126 = {
      canonical: /^https?:\/\/vimeo\.com\/(\d+)/,
      work: /^https?:\/\/([^\/]+)\.vimeo\.work\/(\d+)/,
      manage: /^https?:\/\/vimeo\.com\/manage\/videos\/(\d+)/,
      workManage: /^https?:\/\/([^\/]+)\.vimeo\.work\/manage\/videos\/(\d+)/
    },
    _v127 = {
      com: RegExp(`^${_v125}(\\d+)`),
      work: /^https?:\/\/player\.([^\/]+)\.vimeo\.work\/(\d+)/
    },
    _v128 = [{
      baseUrl: "https://vimeo.com/",
      regex: _v126.canonical,
      getEmbedUrl: _v0 => (_v0 = _v0.replace(/(vimeo\.com\/\d+)\/[^?]+(.*)/, "$1$2")).replace("https://vimeo.com/", _v125)
    }, {
      baseUrl: ".vimeo.work/",
      regex: _v126.work,
      getEmbedUrl: _v0 => {
        let _v1 = (_v0 = _v0.replace(/((([^\/]+)\.vimeo\.work)\/\d+)\/[^?]+(.*)/, "$1$4")).match(_v126.work);
        if (!_v1) return "";
        let [, _v2, _v3] = _v1;
        return `https://player.${_v2}.vimeo.work/${_v3}`;
      }
    }],
    _v129 = (_v0, _v1, _v2) => {
      let _v3 = _v0.replace(/&amp;/g, "&").replace("/manage/videos/", "/");
      if (_v127.com.test(_v3) || _v127.work.test(_v3)) return _v3;
      let _v4 = new URL(_v3);
      if (_v1) {
        let _v0 = _v4.searchParams;
        Object.entries(_v1).forEach(([_v0, _v1]) => {
          (_v2 || !_v0.has(_v0)) && _v0.set(_v0, _v1);
        }), _v3 = `${_v4.origin}${_v4.pathname}?${_v0.toString()}`;
      }
      let _v5 = _v4.pathname.split("/")[2];
      for (let {
        regex: _v0,
        getEmbedUrl: _v1
      } of _v128) if (_v0.test(_v3)) {
        let _v0 = _v1(_v3);
        if (_v5) {
          let _v0 = new URL(_v0),
            _v1 = _v0.searchParams;
          return _v1.append("h", _v5), `${_v0.origin}${_v0.pathname}?${_v1.toString()}`;
        }
        return _v0;
      }
      return "";
    },
    _v130 = Math.ceil(4.545454545454546);
  _v0.s(["DEFAULT_LOCATION", 0, _v122, "GOOGLE_MAPS_MAX_ZOOM", 0, 22, "GOOGLE_MAPS_ZOOM_INPUT_STEP", 0, _v130, "buildMapUrl", 0, _v123, "convertUserProvidedVideoUrlToSrc", 0, _v129, "createVimeoVideoUrlUpdate", 0, _v0 => {
    let _v1 = new URLSearchParams(new URL(_v0).search.replace(/&amp;/g, "&")),
      _v2 = _v0 => "1" === _v0 || "true" === _v0,
      _v3 = {
        autoplay: _v1.get("autoplay") ?? "0",
        loop: _v1.get("loop") ?? "0",
        controls: _v1.get("controls") ?? "0"
      };
    return {
      userProvidedUrl: _v0,
      src: _v129(_v0, _v3, !0),
      settings: {
        [_v120.AUTO_PLAY]: _v2(_v3.autoplay),
        [_v120.LOOP]: _v2(_v3.loop),
        [_v120.SHOW_CONTROLS]: _v2(_v3.controls)
      }
    };
  }, "getIframeDefaultUrl", 0, _v124, "isValidVideoUrl", 0, _v0 => [...Object.values(_v126), ...Object.values(_v127)].some(_v0 => _v0.test(_v0)), "parseLocationFromMapUrl", 0, _v0 => {
    let _v1 = new URLSearchParams(_v0),
      _v2 = decodeURIComponent(_v1.get("q") ?? "") || _v122,
      _v3 = _v1.get("zoom");
    return {
      location: _v2,
      zoom: _v3 ? parseInt(_v3, 10) : 12
    };
  }, "updateVimeoVideoSrcParams", 0, (_v0, _v1, _v2) => {
    let _v3 = new URLSearchParams(_v0.split("?")[1]),
      _v4 = _v121[_v1];
    return _v4 ? (_v3.has(_v1) && _v3.delete(_v1), _v3.set(_v4, _v2 ? "1" : "0"), _v0 = `${_v0.split("?")[0]}?${_v3.toString()}`) : _v0;
  }], 0);
  let _v131 = {
      x: 0,
      y: 0,
      width: .8,
      height: .8
    },
    _v132 = _v0 => ({
      ..._v0,
      x: (1 - _v0.width) / 2,
      y: (1 - _v0.height) / 2
    }),
    _v133 = {
      [_v115.Orientation.LANDSCAPE]: _v132(_v131),
      [_v115.Orientation.PORTRAIT]: _v132(_v131),
      [_v115.Orientation.SQUARE]: _v132(_v131)
    };
  var _v134 = _v0.i(0),
    _v135 = _v0.i(0),
    _v136 = _v0.i(0),
    _v137 = _v0.i(0);
  let _v138 = _v101.GridStyleType.LANDSCAPE,
    _v139 = [{
      id: _v113.IframeElementPreset.VIMEO_VIDEO,
      title: (0, _v36.getTranslations)().video,
      icon: (0, _v1.jsx)(_v112.PlayFilled, {
        boxSize: "xs"
      })
    }, {
      id: _v113.IframeElementPreset.URL,
      title: (0, _v36.getTranslations)().website,
      icon: (0, _v1.jsx)(_v31.EllipsisH, {
        boxSize: "sm",
        mt: "-6px",
        ml: "6px"
      }),
      thumbnailProps: {
        alignItems: "flex-start",
        justifyContent: "flex-start"
      }
    }, {
      id: _v113.IframeElementPreset.GOOGLE_MAPS,
      title: (0, _v36.getTranslations)().map,
      icon: (0, _v1.jsx)(_v0 => (0, _v1.jsx)(_v111.Icon, {
        viewBox: "0 0 24 24",
        ..._v0,
        fill: "none",
        children: (0, _v1.jsx)("path", {
          d: "M20.5 9.6C20 5 15.9 1.5 11.2 2c-4.7.5-8.1 4.6-7.6 9.3.2 2 1.1 3.8 2.5 5.2l5.3 5.3c.4.4 1 .4 1.4 0l5.3-5.3c1.7-1.8 2.6-4.3 2.4-6.9ZM12 15c-2.5 0-4.5-2-4.5-4.5S9.5 6 12 6s4.5 2 4.5 4.5c0 2.4-2 4.5-4.5 4.5Z",
          fill: "currentColor"
        })
      }), {
        boxSize: "xs"
      })
    }],
    _v140 = ({
      isDarkMode: _v0,
      ..._v1
    }) => (0, _v1.jsx)(_v6.Flex, {
      backgroundColor: _v0 ? "gray.300" : "gray.600",
      color: "var(--vimeo-colors-fill-surface)",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      top: 10,
      bottom: 10,
      right: 16,
      left: 16,
      width: "auto",
      height: "auto",
      borderRadius: "4px",
      ..._v1
    }),
    _v141 = () => {
      let {
          createIframeElement: _v0
        } = (() => {
          let {
              getCurrentTimeFromRef: _v0
            } = (0, _v116.useDragonfly)(),
            _v1 = (0, _v43.useAppSelector)(_v41.durationSelector),
            _v2 = (0, _v43.useAppSelector)(_v41.orientationSelector);
          return {
            createIframeElement: (0, _v2.useCallback)((_v0, _v1, _v2) => (({
              preset: _v0,
              src: _v1,
              startTime: _v2 = 0,
              duration: _v3,
              rect: _v4
            }) => {
              let _v5 = {
                id: (0, _v118.createUuidV4)(),
                analyticsId: (0, _v118.generateRandomUInt32Id)(),
                type: _v117.CompositionElementType.IFRAME,
                src: _v1,
                userProvidedUrl: _v1,
                opacity: 100,
                animationName: _v114.AnimationType.NONE,
                rect: _v4,
                compositionTiming: {
                  start: (0, _v57.getSafeTime)(_v2, _v3),
                  end: (0, _v57.getSafeTime)(_v2 + _v50.DEFAULT_OVERLAY_DURATION, _v3)
                },
                selectable: !0
              };
              return _v0 === _v113.IframeElementPreset.VIMEO_VIDEO ? {
                ..._v5,
                src: _v129(_v1),
                preset: _v113.IframeElementPreset.VIMEO_VIDEO,
                settings: {
                  autoPlay: !1,
                  loop: !1,
                  showControls: !0
                }
              } : {
                ..._v5,
                preset: _v0
              };
            })({
              startTime: _v2?.time ?? _v0(),
              duration: _v1,
              src: _v0,
              preset: _v1,
              rect: _v133[_v2]
            }), [_v0, _v1, _v2])
          };
        })(),
        {
          colorMode: _v1
        } = (0, _v110.useColorMode)(),
        {
          addElement: _v2
        } = (0, _v134.useAddElement)(),
        _v3 = "dark" === _v1,
        _v4 = (0, _v2.useCallback)((_v0, _v1) => _v0(_v124(_v0.id), _v0.id, _v1), [_v0]),
        _v5 = (0, _v2.useCallback)(_v0 => {
          _v2(_v0(_v124(_v0.id), _v0.id));
        }, [_v0, _v2]),
        _v6 = (0, _v2.useCallback)((_v0, _v1) => {
          let _v2 = _v139[_v0];
          return (0, _v1.jsx)(_v136.Box, {
            id: _v2.id,
            title: _v2.title,
            gridStyleType: _v138,
            overlay: (0, _v1.jsx)(_v140, {
              ..._v2.thumbnailProps,
              isDarkMode: _v3,
              children: _v2.icon
            }),
            backgroundColor: "fill-component",
            blurBackground: !1,
            width: _v1,
            testid: `overlay-${_v2.id}`,
            onClick: () => _v5(_v2),
            draggableData: {
              id: _v2.id,
              data: _v2,
              type: _v135.DnDItemType.GRID_ELEMENT_IFRAME,
              createElement: _v0 => _v4(_v2, _v0)
            }
          }, _v2.id);
        }, [_v3, _v5, _v4]);
      return (0, _v1.jsxs)(_v67.Inspector, {
        children: [(0, _v1.jsx)(_v68.InspectorHeader, {
          title: (0, _v18.translate)({
            singular: "Embed element",
            dictionary: {
              es: {
                singular: "Insertar elemento"
              },
              "de-DE": {
                singular: "Einbettungselement"
              },
              "fr-FR": {
                singular: "Intégrer un élément"
              },
              "ja-JP": {
                singular: "要素を埋め込む"
              },
              "ko-KR": {
                singular: "임베드 요소"
              },
              "pt-BR": {
                singular: "Incorporar elemento"
              },
              "zh-CN": {
                singular: "嵌入元素"
              }
            }
          })
        }), (0, _v1.jsx)(_v6.Flex, {
          paddingLeft: "12px",
          height: "100%",
          children: (0, _v1.jsx)(_v137.Grid, {
            isLoading: !1,
            itemRenderer: _v6,
            items: _v139,
            styleType: _v138
          })
        })]
      });
    };
  _v0.s(["OverlaysInspector", () => _v165], 0);
  var _v142 = _v0.i(0),
    _v143 = _v0.i(0);
  let _v144 = () => {
    let _v0 = (0, _v43.useAppSelector)(_v42.isLoadingMediaOrApplyingTemplateSelector),
      {
        editBlankTimeTriggeredOverlay: _v1
      } = (0, _v51.useInteractiveOverlay)();
    return (0, _v1.jsx)(_v142.Tooltip, {
      label: (0, _v18.translate)({
        singular: "Create a new overlay",
        dictionary: {
          es: {
            singular: "Crear una nueva superposición"
          },
          "de-DE": {
            singular: "Neues Overlay erstellen"
          },
          "fr-FR": {
            singular: "Créer une nouvelle superposition"
          },
          "ja-JP": {
            singular: "新しいオーバーレイを作成"
          },
          "ko-KR": {
            singular: "새 오버레이 만들기"
          },
          "pt-BR": {
            singular: "Crie uma nova sobreposição"
          },
          "zh-CN": {
            singular: "创建新的视频叠加"
          }
        }
      }),
      placement: "top",
      children: (0, _v1.jsx)(_v23.IconButton, {
        onClick: () => _v1(),
        size: "sm",
        variant: "tertiary",
        icon: (0, _v1.jsx)(_v143.Plus, {}),
        "aria-label": (0, _v18.translate)({
          singular: "Create a new overlay",
          dictionary: {
            es: {
              singular: "Crear una nueva superposición"
            },
            "de-DE": {
              singular: "Neues Overlay erstellen"
            },
            "fr-FR": {
              singular: "Créer une nouvelle superposition"
            },
            "ja-JP": {
              singular: "新しいオーバーレイを作成"
            },
            "ko-KR": {
              singular: "새 오버레이 만들기"
            },
            "pt-BR": {
              singular: "Crie uma nova sobreposição"
            },
            "zh-CN": {
              singular: "创建新的视频叠加"
            }
          }
        }),
        isDisabled: _v0
      })
    });
  };
  var _v145 = _v0.i(0),
    _v146 = _v0.i(0),
    _v147 = _v0.i(0),
    _v148 = _v0.i(0),
    _v149 = _v0.i(98),
    _v150 = _v0.i(0),
    _v151 = _v0.i(0);
  let _v152 = {
    gap: "md",
    width: "100%",
    height: "100%",
    flexDirection: "column",
    paddingLeft: "md",
    paddingRight: "xs",
    paddingTop: "sm"
  };
  var _v153 = _v0.i(0);
  let _v154 = [],
    _v155 = ({
      item: _v0,
      width: _v1,
      onRename: _v2
    }) => {
      let _v3 = (0, _v36.getTranslations)(),
        {
          applyTemplate: _v4,
          deleteLibraryOverlayTemplate: _v5
        } = (0, _v145.useOverlayTemplates)(),
        {
          alertDeleteOverlayTemplate: _v6
        } = (0, _v95.useAlerts)(),
        {
          hasCreateSystemTemplate: _v7
        } = (0, _v2.useContext)(_v37.PermissionsContext),
        [_v8, _v9] = (0, _v2.useState)(!1),
        _v10 = (0, _v2.useMemo)(() => _v7 ? [{
          onClick: () => _v2(_v0),
          label: _v3.rename,
          isDisabled: !1
        }, {
          onClick: () => _v6({
            onPrimaryClick: () => _v5(_v0.templateId)
          }),
          label: _v3.delete,
          status: "negative",
          isDisabled: !1
        }] : _v154, [_v6, _v5, _v7, _v0, _v2, _v3.delete, _v3.rename]),
        _v11 = async () => {
          _v9(!0);
          try {
            await _v4({
              storyboardId: _v0.storyboardId,
              templateName: _v0.name,
              isSystemTemplate: !0
            });
          } finally {
            _v9(!1);
          }
        };
      return (0, _v1.jsx)(_v136.Box, {
        id: "library-template-" + _v0.templateId.toString(),
        testid: "library-overlay-template",
        gridStyleType: _v115.Orientation.LANDSCAPE,
        imageUrl: _v0.thumbnailUrl,
        title: _v0.name,
        width: _v1,
        isActive: !1,
        onClick: _v11,
        ...(_v8 && {
          overlay: (0, _v1.jsx)(_v153.Loader, {})
        }),
        ...(_v7 && {
          menuData: _v10
        })
      });
    },
    _v156 = [];
  var _v157 = _v0.i(0),
    _v158 = _v0.i(0);
  let _v159 = [],
    _v160 = ({
      item: _v0,
      width: _v1,
      onRename: _v2
    }) => {
      let _v3 = (0, _v36.getTranslations)(),
        {
          deleteTeamOverlayTemplate: _v4,
          applyTemplate: _v5
        } = (0, _v145.useOverlayTemplates)(),
        {
          alertDeleteOverlayTemplate: _v6
        } = (0, _v95.useAlerts)(),
        {
          hasCreateInteractiveTeamOverlayTemplateEdit: _v7,
          hasCreateInteractiveTeamOverlayTemplateDelete: _v8
        } = (0, _v2.useContext)(_v37.PermissionsContext),
        [_v9, _v10] = (0, _v2.useState)(!1),
        _v11 = _v7 || _v8,
        _v12 = (0, _v2.useMemo)(() => {
          if (!_v7 && !_v8) return _v159;
          let _v0 = [];
          return _v7 && _v0.push({
            onClick: () => _v2(_v0),
            label: _v3.rename,
            isDisabled: !1
          }), _v8 && _v0.push({
            onClick: () => _v6({
              onPrimaryClick: () => _v4(_v0.templateId)
            }),
            label: _v3.delete,
            status: "negative",
            isDisabled: !1
          }), _v0;
        }, [_v6, _v8, _v7, _v4, _v0, _v2, _v3.delete, _v3.rename]),
        _v13 = async _v0 => {
          _v10(!0);
          try {
            await _v5({
              storyboardId: _v0,
              templateName: _v0.name,
              isSystemTemplate: !1
            });
          } finally {
            _v10(!1);
          }
        };
      return (0, _v1.jsx)(_v136.Box, {
        id: _v0.templateId,
        testid: "team-overlay-template",
        gridStyleType: _v115.Orientation.LANDSCAPE,
        imageUrl: _v0.thumbnailUrl,
        title: _v0.name,
        width: _v1,
        isActive: !1,
        onClick: _v13,
        ...(_v9 && {
          overlay: (0, _v1.jsx)(_v153.Loader, {})
        }),
        ...(_v11 && {
          menuData: _v12
        })
      });
    },
    _v161 = [],
    _v162 = (0, _v158.createPlaceholderImageDataUrlUsingPixels)({
      width: 288,
      height: 162,
      iconName: "overlay",
      iconColor: "white",
      iconSize: 64,
      backgroundColor: "gray"
    }),
    _v163 = {
      [_v101.OverlaysInspectorTabType.LIBRARY]: {
        label: (0, _v36.getTranslations)().libraryTemplates,
        content: (0, _v1.jsx)(() => {
          let _v0 = (0, _v36.getTranslations)(),
            _v1 = (0, _v43.useAppDispatch)(),
            _v2 = (0, _v43.useAppSelector)(_v39.openModalIdSelector),
            _v3 = (0, _v43.useAppSelector)(_v147.shouldShowTestAssetsSelector),
            {
              updateLibraryOverlayTemplate: _v4
            } = (0, _v145.useOverlayTemplates)(),
            _v5 = (0, _v2.useRef)(null),
            [_v6, _v7] = (0, _v2.useState)(null),
            [_v8, _v9] = (0, _v2.useState)(),
            {
              data: _v10,
              isFetching: _v11
            } = (0, _v146.useGetLibraryTemplatesQuery)({
              ...(_v6 && {
                page: _v6
              }),
              ...(_v3 && {
                isTest: !0
              })
            }),
            _v12 = (0, _v2.useMemo)(() => _v10?.data?.length ? _v10.data.map(_v0 => ({
              ..._v0,
              ..._v149.LANDSCAPE_GRID_ITEM_DIMENSIONS
            })) : _v156, [_v10]),
            _v13 = (0, _v2.useCallback)(_v0 => {
              _v1((0, _v39.setOpenModalIdAction)(_v0 ? _v34.MODAL_IDS.renameOverlayTemplateModal : ""));
            }, [_v1]),
            _v14 = (0, _v2.useCallback)(_v0 => {
              _v9(_v0), _v13(!!_v0);
            }, [_v13]),
            _v15 = (0, _v2.useCallback)(() => {
              if (_v10?.paging?.next) {
                let _v0 = Object.fromEntries(new URLSearchParams(_v10.paging.next.split("?")[1])).page;
                _v0 && _v7(_v0);
              }
            }, [_v10?.paging]),
            _v16 = !_v11 && !_v12?.length;
          return (0, _v1.jsxs)(_v1.Fragment, {
            children: [_v8 && !_v16 && (0, _v1.jsx)(_v150.RenameTemplateModal, {
              active: _v34.MODAL_IDS.renameOverlayTemplateModal === _v2,
              onDismiss: () => _v14(null),
              onApply: _v0 => {
                _v8 && (0, _v64.validateTemplateName)(_v0) && (_v4(_v8.templateId, _v0), _v14(null));
              },
              templateName: _v8.name,
              title: _v0.renameOverlay,
              inputLabel: _v0.overlayName,
              inputMaxLength: 256
            }), (0, _v1.jsx)(_v6.Flex, {
              ..._v152,
              children: _v16 ? (0, _v1.jsx)(_v151.default, {
                type: _v148.EmptyInspectorView.LIBRARY_OVERLAY_TEMPLATES,
                title: _v0.couldNotLoadTemplates,
                text: _v0.thereWasAProblem
              }) : (0, _v1.jsx)(_v137.Grid, {
                ref: _v5,
                itemRenderer: (_v0, _v1) => {
                  if (_v12) {
                    let _v0 = _v12[_v0];
                    if (_v0) return (0, _v1.jsx)(_v155, {
                      item: _v0,
                      width: _v1,
                      onRename: _v14
                    }, _v0.templateId);
                  }
                  return (0, _v1.jsx)(_v2.default.Fragment, {}, `no-template-item-${_v0}`);
                },
                styleType: _v115.Orientation.LANDSCAPE,
                items: _v12,
                loadMoreItems: _v15,
                isLoading: _v11,
                CTAText: _v0.addToTimeline,
                maxItemsPerRow: 3
              })
            })]
          });
        }, {})
      },
      [_v101.OverlaysInspectorTabType.TEAM]: {
        label: (0, _v36.getTranslations)().teamTemplates,
        content: (0, _v1.jsx)(() => {
          let _v0 = (0, _v36.getTranslations)(),
            _v1 = (0, _v43.useAppDispatch)(),
            {
              updateTeamOverlayTemplate: _v2
            } = (0, _v145.useOverlayTemplates)(),
            [_v3, _v4] = (0, _v2.useState)(null),
            [_v5, _v6] = (0, _v2.useState)(),
            {
              hasCreateInteractiveTeamOverlayTemplateCreate: _v7
            } = (0, _v2.useContext)(_v37.PermissionsContext),
            _v8 = (0, _v43.useAppSelector)(_v39.openModalIdSelector),
            _v9 = (0, _v2.useCallback)(_v0 => {
              _v1((0, _v39.setOpenModalIdAction)(_v0 ? _v34.MODAL_IDS.renameOverlayTemplateModal : ""));
            }, [_v1]),
            _v10 = (0, _v2.useCallback)(_v0 => {
              _v6(_v0), _v9(!!_v0);
            }, [_v9]),
            {
              data: _v11,
              isFetching: _v12
            } = (0, _v146.useGetTeamTemplatesQuery)({
              userId: _v157.default.teamOwnerId,
              ...(_v3 && {
                page: _v3
              })
            }),
            _v13 = (0, _v2.useRef)(null),
            _v14 = (0, _v2.useMemo)(() => _v11?.items?.length ? _v11.items.map(_v0 => ({
              ..._v0,
              ..._v149.LANDSCAPE_GRID_ITEM_DIMENSIONS,
              ...(!_v0.thumbnailUrl && {
                thumbnailUrl: _v162
              })
            })) : _v161, [_v11]),
            _v15 = !_v12 && !_v14?.length,
            _v16 = (0, _v2.useCallback)(() => {
              _v11?.nextPage && _v4(_v11.nextPage);
            }, [_v11?.nextPage]),
            _v17 = (0, _v2.useCallback)((_v0, _v1) => {
              if (_v14) {
                let _v0 = _v14[_v0];
                if (_v0) return (0, _v1.jsx)(_v160, {
                  item: _v0,
                  width: _v1,
                  onRename: _v10
                }, `${_v0}_${_v0.templateId}`);
              }
              return (0, _v1.jsx)(_v2.default.Fragment, {}, `no-template-item-${_v0}`);
            }, [_v10, _v14]);
          return _v15 ? (0, _v1.jsx)(_v151.default, {
            type: _v148.EmptyInspectorView.TEAM_OVERLAY_TEMPLATES,
            title: _v7 ? _v0.addATeamTemplate : _v0.noTeamTemplates,
            text: _v7 ? _v0.selectSaveAsTemplate : _v0.templatesAddedByTeam
          }) : (0, _v1.jsxs)(_v1.Fragment, {
            children: [_v5 && (0, _v1.jsx)(_v150.RenameTemplateModal, {
              active: _v34.MODAL_IDS.renameOverlayTemplateModal === _v8,
              onDismiss: () => _v10(null),
              onApply: _v0 => {
                _v5 && (0, _v64.validateTemplateName)(_v0) && (_v2(_v5.templateId, _v0), _v10(null));
              },
              templateName: _v5.name,
              title: _v0.renameOverlay,
              inputLabel: _v0.overlayName,
              inputMaxLength: 256
            }), (0, _v1.jsx)(_v6.Flex, {
              ..._v152,
              children: (0, _v1.jsx)(_v137.Grid, {
                ref: _v13,
                itemRenderer: _v17,
                styleType: _v115.Orientation.LANDSCAPE,
                items: _v14,
                loadMoreItems: _v16,
                isLoading: _v12,
                CTAText: _v0.addToTimeline,
                maxItemsPerRow: 3
              })
            })]
          });
        }, {})
      }
    },
    _v164 = Object.keys(_v163),
    _v165 = () => {
      let _v0 = (0, _v43.useAppSelector)(_v52.isEditingInteractiveOverlaySelector),
        _v1 = (0, _v43.useAppDispatch)(),
        _v2 = (0, _v43.useAppSelector)((0, _v100.inspectorDataSelector)(_v101.InspectorType.OVERLAYS)),
        _v3 = _v164.indexOf(_v2.tab);
      return (0, _v1.jsxs)(_v67.Inspector, {
        children: [(0, _v1.jsx)(_v68.InspectorHeader, {
          title: (0, _v36.getTranslations)().overlays,
          ...(!_v0 && {
            quickActions: (0, _v1.jsx)(_v144, {})
          }),
          info: (0, _v18.translate)({
            singular: "Overlays are groups of elements that appear on top of your video",
            dictionary: {
              es: {
                singular: "Las superposiciones son grupos de elementos que aparecen en la parte superior de su video"
              },
              "de-DE": {
                singular: "Overlays sind Gruppen von Elementen, die über Ihrem Video erscheinen"
              },
              "fr-FR": {
                singular: "Les superpositions sont des groupes d'éléments qui apparaissent sur votre vidéo"
              },
              "ja-JP": {
                singular: "オーバーレイは動画の上に表示される要素のグループです"
              },
              "ko-KR": {
                singular: "오버레이는 동영상 상단에 표시되는 요소 모음입니다."
              },
              "pt-BR": {
                singular: "Sobreposições são grupos de elementos que aparecem na parte superior do seu vídeo"
              },
              "zh-CN": {
                singular: "视频叠加是显示在视频顶部的一组元素"
              }
            }
          })
        }), (0, _v1.jsx)(_v106.InspectorBody, {
          children: (0, _v1.jsxs)(_v78.Tabs, {
            isLazy: !0,
            index: _v3,
            display: "flex",
            flexDirection: "column",
            height: "100%",
            variant: "soft",
            onChange: _v0 => {
              let _v1 = _v164[_v0];
              _v1((0, _v100.updateInspectorDataAction)({
                inspectorType: _v101.InspectorType.OVERLAYS,
                data: {
                  tab: _v1
                }
              }));
            },
            size: "sm",
            children: [(0, _v1.jsx)(_v5.Box, {
              paddingX: "md",
              children: (0, _v1.jsxs)(_v79.TabList, {
                children: [Object.values(_v163).map(({
                  label: _v0
                }) => (0, _v1.jsx)(_v77.Tab, {
                  children: _v0
                }, _v0)), (0, _v1.jsx)(_v78.TabIndicator, {})]
              })
            }), (0, _v1.jsx)(_v81.TabPanels, {
              height: "100%",
              children: Object.entries(_v163).map(([_v0, _v1]) => (0, _v1.jsx)(_v80.TabPanel, {
                padding: 0,
                mt: "sm",
                height: "100%",
                minWidth: 0,
                id: _v0,
                "data-testid": `overlays-inspector-active-tab-${_v0}`,
                children: _v1.content
              }, _v1.label))
            })]
          })
        })]
      });
    };
  _v0.s(["DropShadow", 0, _v0 => (0, _v1.jsx)(_v111.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M6 20a2 2 0 0 0 2 2h9a5 5 0 0 0 5-5V8a2 2 0 0 0-2-2v11a3 3 0 0 1-3 3H6Zm-4-6a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8Zm4 2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6Z",
      fill: "currentColor"
    })
  })], 0);
}