{
  "use strict";

  _v0.s(["default", () => _v56], 0);
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
  _v0.i(0);
  var _v12 = _v0.i(0),
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
    _v38 = _v0.i(0);
  let _v39 = !(0, _v37.isFirefox)();
  _v0.s(["isRecordSupported", 0, _v39, "useRecord", 0, () => {
    let [_v0, _v1] = (0, _v2.useState)(!1),
      {
        uploadMedia: _v2
      } = (0, _v28.useUploadQueue)(),
      {
        createOrReplaceMediaElement: _v3
      } = (0, _v27.useMediaElement)(),
      _v4 = (0, _v34.useAppDispatch)(),
      {
        isShown: _v5
      } = (0, _v34.useAppSelector)(_v32.recordSelector),
      {
        getCurrentTimeFromRef: _v6
      } = (0, _v30.useDragonfly)(),
      {
        initialUploadLocalMediaFile: _v7
      } = (0, _v24.useLocalFile)(),
      {
        alertFileTooSmall: _v8,
        alertUploadFailed: _v9
      } = (0, _v23.useAlerts)(),
      _v10 = (0, _v34.useAppSelector)(_v33.videoSessionIdSelector),
      _v11 = (0, _v2.useCallback)(async _v0 => {
        _v1(!1);
        let _v1 = (0, _v38.convertVideoRecording)(_v0),
          _v2 = _v6(),
          _v3 = await _v3({
            mediaItem: _v1,
            isAddToStoryboard: !0,
            time: _v2
          });
        if (!_v3) throw Error(_v18.FAILED_TO_CREATE_MEDIA_ELEMENT);
        _v4((0, _v32.toggleRecordAction)(!1)), await _v2({
          origin: _v36.UploadMediaOrigin.VIMEO,
          mediaItem: _v1,
          isReplacing: !1,
          elementSourceHash: _v3.sourceHash
        });
      }, [_v3, _v6, _v4, _v2]),
      _v12 = (0, _v2.useCallback)(async _v0 => {
        try {
          return _v4((0, _v32.toggleRecordAction)(!1)), await _v7(_v0, {
            addToStoryboard: !0
          }), !0;
        } catch (_v0) {
          let {
            errcode: _v1,
            error: _v2
          } = _v0?.data ?? {};
          return _v1 === _v29.VIDEO_FILE_TOO_SMALL ? _v8() : _v9(_v0.name), _v31.default.sendLog(_v19.FAILED_TO_UPLOAD_MEDIA, _v35.LogComponent.EDITOR_UPLOAD_ERROR, {
            fileName: _v0.name,
            vsid: _v10,
            error: _v2,
            errcode: _v1
          }), _v1(!0), !1;
        }
      }, [_v8, _v9, _v4, _v7, _v10]),
      _v13 = (0, _v2.useCallback)(() => {
        _v4((0, _v32.toggleRecordAction)(!1)), _v1(!1);
      }, [_v4]),
      _v14 = (0, _v2.useMemo)(() => (0, _v26.getLocalIntegrationSupported)(), []),
      _v15 = (0, _v2.useMemo)(() => _v14 ? _v0 ? "retryLocalUploadInStudio" : "local" : "remote", [_v14, _v0]);
    return {
      isShown: _v5,
      integrationConfiguration: (0, _v2.useMemo)(() => ({
        backButtonLabel: (0, _v11.translate)({
          singular: "Back to project",
          dictionary: {
            es: {
              singular: "Volver al proyecto"
            },
            "de-DE": {
              singular: "Zurück zum Projekt"
            },
            "fr-FR": {
              singular: "Retour au projet"
            },
            "ja-JP": {
              singular: "プロジェクトに戻る"
            },
            "ko-KR": {
              singular: "프로젝트로 돌아가기"
            },
            "pt-BR": {
              singular: "Voltar ao projeto"
            },
            "zh-CN": {
              singular: "返回项目"
            }
          }
        }),
        onBackClick: _v13,
        name: "editor",
        addLocalRecordingSource: _v12,
        onVideoInfo: _v11,
        uploadMode: _v15
      }), [_v12, _v11, _v13, _v15])
    };
  }], 0);
  var _v40 = _v0.i(0),
    _v41 = _v0.i(0),
    _v42 = _v0.i(0),
    _v43 = _v0.i(0),
    _v44 = _v0.i(0),
    _v45 = _v0.i(0),
    _v46 = _v0.i(0),
    _v47 = _v0.i(0),
    _v48 = _v0.i(0),
    _v49 = _v0.i(0);
  let _v50 = (0, _v2.memo)(({
    onChange: _v0,
    onBeforeChange: _v1,
    accept: _v2,
    multiple: _v3 = !0,
    dataTestid: _v4,
    tooltip: _v5,
    isDisabled: _v6
  }) => {
    let _v7 = (0, _v2.useRef)(null),
      _v8 = async _v0 => {
        console.log("triggered", _v0.target.files), await _v0(_v0), _v7.current && (_v7.current.value = "");
      };
    return (0, _v1.jsx)(_v9.Tooltip, {
      label: _v5,
      isDisabled: !_v5,
      children: (0, _v1.jsx)(_v48.FileInput, {
        ref: _v7,
        "data-testid": _v4,
        "aria-label": _v4,
        isDisabled: _v6,
        label: (0, _v1.jsx)(_v49.Plus, {}),
        onClick: _v1,
        onChange: _v8,
        size: "sm",
        variant: "tertiary",
        multiple: _v3,
        accept: _v2
      })
    });
  });
  _v0.s(["FileInputIconButton", 0, _v50], 0);
  var _v51 = _v0.i(0),
    _v52 = _v0.i(0),
    _v53 = _v0.i(0),
    _v54 = _v0.i(0);
  let _v55 = () => {
      (0, _v45.sendTrackClickOnUploadMedia)({
        copy: null,
        element: "icon"
      });
    },
    _v56 = () => {
      let _v0 = (0, _v34.useAppDispatch)(),
        _v1 = (0, _v34.useAppSelector)((0, _v43.inspectorDataSelector)(_v44.InspectorType.MEDIA)),
        _v2 = (0, _v34.useAppSelector)(_v42.isInteractiveSelector),
        _v3 = (0, _v34.useAppSelector)(_v33.videoSessionIdSelector),
        _v4 = (0, _v34.useAppSelector)(_v33.storyboardIdSelector),
        {
          trackEditorNewMediaUploaded: _v5
        } = (0, _v13.useEditorTracking)(),
        _v6 = _v40.default.isShopifyUser,
        _v7 = (0, _v2.useContext)(_v22.FlowHooksContext),
        {
          initialUploadLocalMediaFile: _v8
        } = (0, _v24.useLocalFile)(),
        [_v9] = (0, _v41.useLazyFetchStockMediaCategoriesQuery)(),
        {
          alertFileTooSmall: _v10,
          alertUploadFailed: _v11,
          alertUploadVideoLowResolution: _v12
        } = (0, _v23.useAlerts)(),
        {
          notifyMaximumFilesUploadsLimit: _v13
        } = (0, _v25.useNotifications)(),
        _v14 = _v6 && !_v2,
        _v15 = !_v2,
        _v16 = (0, _v2.useCallback)(() => {
          _v0((0, _v43.updateInspectorDataAction)({
            inspectorType: _v44.InspectorType.MEDIA,
            data: {
              tab: _v44.MediaInspectorTabType.UPLOADS
            }
          }));
        }, [_v0]),
        _v17 = (0, _v2.useCallback)(() => {
          (0, _v47.sendTrackRecordOpenTranscriptFeature)("sidebar"), _v0((0, _v32.toggleRecordAction)(!0));
        }, [_v0]),
        _v18 = (0, _v2.useCallback)(async _v0 => {
          _v16();
          let {
            files: _v1
          } = _v0.target;
          if (_v1) for (let _v0 of _v1) _v8(_v0).catch(_v0 => {
            _v0.message === _v18.THE_VIDEO_HAS_UNSUPPORTED_RESOLUTION ? _v12() : _v0.message === _v18.THE_VIDEO_FILE_TOO_SMALL ? _v10() : _v0.message === _v18.THE_MAXIMUM_NUMBER_OF_FILES_REACHED ? _v13(_v7?.showQuotaUpsell) : (_v11(_v0.name), _v31.default.sendLog(_v19.FAILED_TO_UPLOAD_MEDIA, _v35.LogComponent.EDITOR_UPLOAD_ERROR, {
              fileName: _v0.name,
              vsid: _v3,
              error: _v0.message
            }));
          });
          (0, _v46.sendTrackUploadMediaFromComputer)({
            location: "drawer",
            copy: "Upload",
            element: "button"
          }), _v5({
            editorSessionId: _v4,
            editorNewMediaSource: "upload"
          });
        }, [_v16, _v8, _v11, _v3, _v4, _v5, _v12, _v10, _v13, _v7?.showQuotaUpsell]),
        _v19 = (0, _v2.useMemo)(() => ({
          ...(_v14 && {
            [_v44.MediaInspectorTabType.SHOPIFY]: {
              label: (0, _v11.translate)("Shopify"),
              content: (0, _v1.jsx)(_v15.default, {})
            }
          }),
          [_v44.MediaInspectorTabType.UPLOADS]: {
            label: (0, _v11.translate)({
              singular: "Uploads",
              dictionary: {
                es: {
                  singular: "Subidas"
                },
                "fr-FR": {
                  singular: "Mises en ligne"
                },
                "ja-JP": {
                  singular: "アップロード"
                },
                "ko-KR": {
                  singular: "업로드"
                },
                "pt-BR": {
                  singular: "Carregamentos"
                },
                "zh-CN": {
                  singular: "上传"
                }
              }
            }),
            content: (0, _v1.jsx)(_v17.default, {
              handleLocalFileUpload: _v18
            })
          },
          ...(_v15 && {
            [_v44.MediaInspectorTabType.LIBRARY]: {
              label: (0, _v11.translate)({
                singular: "Library",
                dictionary: {
                  es: {
                    singular: "Biblioteca"
                  },
                  "de-DE": {
                    singular: "Bibliothek"
                  },
                  "fr-FR": {
                    singular: "Bibliothèque"
                  },
                  "ja-JP": {
                    singular: "ライブラリ"
                  },
                  "ko-KR": {
                    singular: "라이브러리"
                  },
                  "pt-BR": {
                    singular: "Biblioteca"
                  },
                  "zh-CN": {
                    singular: "视频库"
                  }
                }
              }),
              content: (0, _v1.jsx)(_v14.default, {})
            }
          }),
          [_v44.MediaInspectorTabType.STOCK]: {
            label: (0, _v11.translate)({
              singular: "Stock",
              dictionary: {
                "ja-JP": {
                  singular: "ストック"
                },
                "ko-KR": {
                  singular: "스톡"
                },
                "pt-BR": {
                  singular: "Acervo"
                },
                "zh-CN": {
                  singular: "库存"
                }
              }
            }),
            content: (0, _v1.jsx)(_v16.default, {}),
            onMouseOver: () => _v9(void 0, !0)
          }
        }), [_v18, _v15, _v14, _v9]),
        _v20 = Object.keys(_v19),
        _v21 = _v20.indexOf(_v1.tab),
        _v22 = (0, _v2.useMemo)(() => (0, _v1.jsx)(_v9.Tooltip, {
          label: _v39 ? (0, _v11.translate)({
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
          }) : (0, _v11.translate)({
            singular: "Record is available for Chrome, Safari, and Edge",
            dictionary: {
              es: {
                singular: "Record está disponible para Chrome, Safari y Edge"
              },
              "de-DE": {
                singular: "Record ist für Chrome, Safari und Edge verfügbar"
              },
              "fr-FR": {
                singular: "L'enregistrement est disponible pour Chrome, Safari et Edge"
              },
              "ja-JP": {
                singular: "RecordはChrome、Safari、Edgeで利用できます"
              },
              "ko-KR": {
                singular: "녹화 기능은 Chrome, Safari, Edge에서 사용할 수 있습니다."
              },
              "pt-BR": {
                singular: "O recurso de gravação está disponível no Chrome, Safari e Edge"
              },
              "zh-CN": {
                singular: "记录可用于 Chrome、Safari 和 Edge"
              }
            }
          }),
          sx: _v39 ? void 0 : {
            width: "200px"
          },
          children: (0, _v1.jsx)("span", {
            children: (0, _v1.jsx)(_v3.IconButton, {
              isDisabled: !_v39,
              "data-testid": "media-inspector-record-media-button",
              onClick: _v17,
              size: "sm",
              variant: "tertiary",
              icon: (0, _v1.jsx)(_v10.Record, {}),
              "aria-label": "media-inspector-record-media-button"
            })
          })
        }), [_v17]),
        _v23 = (0, _v2.useMemo)(() => (0, _v1.jsx)(_v50, {
          onChange: _v18,
          accept: (_v2 ? _v21.ALLOWED_HOTSPOT_MEDIA : _v21.ALLOWED_MEDIA).join(","),
          multiple: !0,
          dataTestid: "media-inspector-upload-media-button",
          onBeforeChange: _v55,
          tooltip: (0, _v11.translate)({
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
        }), [_v18, _v2]);
      return _v12.PendoClient.showGuideById(_v20.EDITOR_BOKEH_GUIDE_ID), (0, _v1.jsxs)(_v51.Inspector, {
        children: [(0, _v1.jsx)(_v53.InspectorHeader, {
          title: (0, _v11.translate)({
            singular: "Media",
            dictionary: {
              es: {
                singular: "Medios"
              },
              "de-DE": {
                singular: "Medien"
              },
              "fr-FR": {
                singular: "Média"
              },
              "ja-JP": {
                singular: "メディア"
              },
              "ko-KR": {
                singular: "미디어"
              },
              "pt-BR": {
                singular: "Mídia"
              },
              "zh-CN": {
                singular: "媒体"
              }
            }
          }),
          quickActions: (0, _v1.jsxs)(_v1.Fragment, {
            children: [_v15 && _v22, _v23]
          })
        }), (0, _v1.jsx)(_v52.InspectorBody, {
          children: (0, _v1.jsxs)(_v5.Tabs, {
            isLazy: !0,
            index: _v21,
            display: "flex",
            flexDirection: "column",
            height: "100%",
            variant: "soft",
            onChange: _v0 => {
              let _v1 = _v20[_v0];
              (0, _v46.sendTrackSelectMediaTab)({
                mediaTab: _v1,
                prevMediaTab: _v1?.tab,
                tabsNumber: _v20.length
              }), _v0((0, _v43.updateInspectorDataAction)({
                inspectorType: _v44.InspectorType.MEDIA,
                data: {
                  tab: _v1
                }
              }));
            },
            size: "sm",
            children: [(0, _v1.jsx)(_v54.InspectorPaddedRow, {
              marginTop: !1,
              children: (0, _v1.jsxs)(_v6.TabList, {
                children: [Object.values(_v19).map(({
                  label: _v0,
                  onMouseOver: _v1
                }) => (0, _v1.jsx)(_v4.Tab, {
                  onMouseOver: _v1,
                  children: _v0
                }, _v0)), (0, _v1.jsx)(_v5.TabIndicator, {})]
              })
            }), (0, _v1.jsx)(_v8.TabPanels, {
              height: "100%",
              children: Object.entries(_v19).map(([_v0, _v1]) => (0, _v1.jsx)(_v7.TabPanel, {
                padding: 0,
                mt: 8,
                height: "100%",
                minWidth: 0,
                id: _v0,
                "data-testid": `media-inspector-active-tab-${_v1.label.toLowerCase()}`,
                children: _v1.content
              }, _v1.label))
            })]
          })
        })]
      });
    };
  var _v57 = _v0.i(0),
    _v58 = _v0.i(0),
    _v59 = _v0.i(0),
    _v60 = _v0.i(0),
    _v61 = _v0.i(0),
    _v62 = _v0.i(0),
    _v63 = _v0.i(0),
    _v64 = _v0.i(0),
    _v65 = _v0.i(0),
    _v66 = _v0.i(0),
    _v67 = _v0.i(0),
    _v68 = _v0.i(0),
    _v69 = _v0.i(0),
    _v70 = _v0.i(0),
    _v71 = _v0.i(0),
    _v72 = _v0.i(0),
    _v73 = _v0.i(0);
  let _v74 = (0, _v2.createContext)({
    play: () => ({}),
    stop: () => ({}),
    currentPlayingUrl: ""
  });
  _v0.s(["AudioPreviewContext", 0, _v74, "AudioPreviewProvider", 0, ({
    children: _v0
  }) => {
    let _v1 = (0, _v2.useRef)(null),
      [_v2, _v3] = (0, _v2.useState)("");
    return (0, _v1.jsx)(_v74.Provider, {
      value: {
        play: _v0 => {
          _v1.current && (_v1.current.volume = _v73.MUSIC_PREVIEW_VOLUME, _v1.current.src = _v0, _v1.current.play()), _v3(_v0);
        },
        stop: () => {
          _v1.current && (_v1.current.pause(), _v1.current.currentTime = 0, _v1.current.src = ""), _v3("");
        },
        currentPlayingUrl: _v2
      },
      children: (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)("audio", {
          ref: _v1,
          onEnded: () => {
            _v3("");
          }
        }), _v0]
      })
    });
  }], 0);
  let _v75 = _v70.keyframes`
  0% {
    opacity: 0.35;
    height: 3px;
  }
  100% {
    opacity: 1;
    height: 28px;
  }
`,
    _v76 = [{
      left: 9,
      duration: 407
    }, {
      left: 13,
      duration: 458
    }, {
      left: 17,
      duration: 400
    }, {
      left: 21,
      duration: 427
    }, {
      left: 25,
      duration: 441
    }, {
      left: 29,
      duration: 419
    }],
    _v77 = ({
      musicUrl: _v0,
      onClick: _v1
    }) => {
      let {
          play: _v2,
          stop: _v3,
          currentPlayingUrl: _v4
        } = (0, _v2.useContext)(_v74),
        _v5 = _v4 === _v0,
        _v6 = _v0 => {
          _v0.preventDefault(), _v0.stopPropagation(), _v3(), _v1();
        };
      return (0, _v1.jsxs)(_v68.Box, {
        onClick: _v6,
        sx: {
          position: "absolute",
          display: "flex",
          height: "100%",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: "8px",
          gap: "1px"
        },
        children: [_v5 && _v76.map(_v0 => (0, _v1.jsx)(_v68.Box, {
          sx: {
            background: "white",
            height: "10px",
            width: "4px",
            borderRadius: "4px",
            left: _v0.left,
            animation: `${_v75} ${_v0.duration}ms -800ms linear infinite alternate`
          }
        }, _v0.left)), (0, _v1.jsxs)(_v69.Center, {
          width: "100%",
          height: "100%",
          position: "absolute",
          left: "0",
          top: "0",
          role: "group",
          children: [(0, _v1.jsx)(_v68.Box, {
            position: "absolute",
            left: "4px",
            top: "2px",
            opacity: 0,
            _groupHover: {
              opacity: 1
            },
            children: (0, _v1.jsx)(_v9.Tooltip, {
              label: (0, _v11.translate)({
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
              children: (0, _v1.jsx)(_v3.IconButton, {
                "aria-label": "box-add-button",
                icon: (0, _v1.jsx)(_v49.Plus, {}),
                size: "xs",
                "data-testid": "box-add-button",
                variant: "blur",
                onClick: _v6
              })
            })
          }), (0, _v1.jsx)(_v68.Box, {
            position: "absolute",
            right: "4px",
            top: "2px",
            opacity: 0,
            _groupHover: {
              opacity: 1
            },
            children: (0, _v1.jsx)(_v3.IconButton, {
              "aria-label": "play-pause",
              icon: _v5 ? (0, _v1.jsx)(_v71.PauseFilled, {}) : (0, _v1.jsx)(_v72.PlayFilled, {}),
              variant: "blur",
              size: "xs",
              onClick: _v0 => {
                _v0.preventDefault(), _v0.stopPropagation(), _v5 ? _v3() : _v2(_v0);
              }
            })
          })]
        })]
      });
    };
  _v0.s(["default", 0, _v77], 0);
  var _v78 = _v0.i(0);
  let _v79 = (0, _v78.default)(_v54.InspectorPaddedRow).withConfig({
      displayName: "Tabs.style__TracksContainer",
      componentId: "sc-730e673f-0"
    })`
  height: 100%;
  width: 100%;
  margin-top: 16px;
`,
    _v80 = (0, _v78.default)(_v54.InspectorPaddedRow).withConfig({
      displayName: "Tabs.style__FiltersButtonsRow",
      componentId: "sc-730e673f-1"
    })`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: ${({
      margin: _v0 = 8
    }) => _v0}px;
  gap: 8px;
`,
    _v81 = _v78.default.div.withConfig({
      displayName: "Tabs.style__ReuploadIconContainer",
      componentId: "sc-730e673f-2"
    })`
  position: absolute;
  top: 4px;
  left: 4px;
  opacity: 0;
`;
  _v0.s(["FiltersButtonsRow", 0, _v80, "ReuploadIconContainer", 0, _v81, "TracksContainer", 0, _v79], 0);
  var _v82 = _v0.i(0),
    _v83 = _v0.i(0),
    _v84 = _v0.i(0),
    _v85 = _v0.i(0),
    _v86 = _v0.i(0);
  let _v87 = "category",
    _v88 = "genres",
    _v89 = "moods",
    _v90 = "type";
  var _v91 = _v0.i(0),
    _v92 = _v0.i(0);
  let _v93 = {
      [_v87]: {
        value: "",
        name: "Categories",
        text: "All categories"
      },
      [_v89]: {
        value: "",
        name: "Moods",
        text: "All moods"
      },
      [_v88]: {
        value: "",
        name: "Genres",
        text: "All genres"
      },
      [_v90]: {
        value: "",
        name: "Types",
        text: "All types"
      }
    },
    _v94 = ({
      filterName: _v0,
      tagGroup: _v1,
      onChange: _v2,
      value: _v3
    }) => {
      let _v4 = [_v93[_v0], ..._v1],
        _v5 = _v4.length > 10 ? _v92.MaxHeightSelect : _v91.Select;
      return (0, _v1.jsx)(_v5, {
        placeholder: _v93[_v0].name,
        value: [_v3 || _v93[_v0].name],
        style: {
          flex: 1,
          flexGrow: 1
        },
        "data-testid": `music-${_v0}-filter`,
        onValueChange: _v0 => _v2(_v0.value[0]),
        items: _v4.map(_v0 => ({
          value: _v0.value,
          label: _v0.text
        })),
        size: "sm"
      });
    },
    _v95 = ({
      setFilterTags: _v0
    }) => {
      let [_v1, _v2] = (0, _v2.useState)(""),
        [_v3, _v4] = (0, _v2.useState)(""),
        [_v5, _v6] = (0, _v2.useState)(""),
        [_v7, _v8] = (0, _v2.useState)(""),
        [_v9, _v10] = (0, _v2.useState)(0),
        [_v11, _v12] = (0, _v2.useState)(!1),
        {
          data: _v13
        } = (0, _v60.useFetchMusicFilterGroupsQuery)(),
        _v14 = (0, _v2.useMemo)(() => {
          if (_v13) {
            let _v0 = {
              [_v87]: [],
              [_v88]: [],
              [_v89]: [],
              [_v90]: []
            };
            return _v13?.forEach(_v0 => {
              let {
                name: _v1,
                groupName: _v2,
                localName: _v3
              } = _v0;
              if (_v2 in _v0) {
                let _v0,
                  _v1 = _v0[_v2],
                  _v2 = (_v0 = (({
                    group: _v0,
                    name: _v1
                  }) => `${_v0}:${_v1}`)(_v0), {
                    value: _v0,
                    name: _v1,
                    text: `${_v3.charAt(0).toUpperCase() + _v3.slice(1)}`
                  });
                _v1.push(_v2);
              }
            }), _v0;
          }
          return null;
        }, [_v13]);
      return (0, _v2.useEffect)(() => {
        let _v0 = 0;
        _v1 && _v0++, _v3 && _v0++, _v5 && _v0++, _v7 && _v0++, _v10(_v0), _v0([_v1, _v3, _v5, _v7].filter(Boolean));
      }, [_v1, _v5, _v3, _v7, _v0]), (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsxs)(_v80, {
          margin: 0,
          children: [(0, _v1.jsx)(_v9.Tooltip, {
            label: _v11 ? (0, _v11.translate)({
              singular: "Hide filters",
              dictionary: {
                es: {
                  singular: "Ocultar filtros"
                },
                "de-DE": {
                  singular: "Filter verbergen"
                },
                "fr-FR": {
                  singular: "Masquer les filtres"
                },
                "ja-JP": {
                  singular: "フィルターを非表示"
                },
                "ko-KR": {
                  singular: "필터 숨기기"
                },
                "pt-BR": {
                  singular: "Ocultar filtros"
                },
                "zh-CN": {
                  singular: "隐藏筛选条件"
                }
              }
            }) : (0, _v11.translate)({
              singular: "Show filters",
              dictionary: {
                es: {
                  singular: "Mostrar los filtros"
                },
                "de-DE": {
                  singular: "Filter zeigen"
                },
                "fr-FR": {
                  singular: "Afficher les filtres"
                },
                "ja-JP": {
                  singular: "フィルターを表示"
                },
                "ko-KR": {
                  singular: "필터 표시"
                },
                "pt-BR": {
                  singular: "Mostrar filtros"
                },
                "zh-CN": {
                  singular: "显示过滤器"
                }
              }
            }),
            children: (0, _v1.jsx)(_v3.IconButton, {
              "aria-label": `music-${_v11 ? "hide" : "show"}-filters-button`,
              variant: "secondary",
              size: "sm",
              icon: (0, _v1.jsx)(_v86.FiltersLevers, {}),
              "data-testid": `music-${_v11 ? "hide" : "show"}-filters-button`,
              onClick: () => _v12(!_v11)
            })
          }), (0, _v1.jsx)(_v82.Button, {
            onClick: () => {
              _v2(""), _v4(""), _v6(""), _v8(""), _v10(0), _v0([]);
            },
            variant: "tertiary",
            size: "xs",
            "data-testid": "music-clear-filters-button",
            isDisabled: 0 === _v9,
            children: (0, _v1.jsxs)("span", {
              translate: "no",
              children: [(0, _v11.translate)({
                singular: "Clear filters",
                dictionary: {
                  es: {
                    singular: "Quitar los filtros"
                  },
                  "de-DE": {
                    singular: "Filter löschen"
                  },
                  "fr-FR": {
                    singular: "Supprimer les filtres"
                  },
                  "ja-JP": {
                    singular: "フィルターを解除"
                  },
                  "ko-KR": {
                    singular: "필터 지우기"
                  },
                  "pt-BR": {
                    singular: "Limpar filtros"
                  },
                  "zh-CN": {
                    singular: "清除过滤器"
                  }
                }
              }), _v9 > 0 && ` (${_v9})`]
            })
          })]
        }), _v14 && (0, _v1.jsx)(_v83.Fade, {
          in: _v11,
          unmountOnExit: !0,
          enterDuration: "lg",
          exitDuration: "lg",
          children: (0, _v1.jsx)(_v80, {
            margin: 9,
            children: (0, _v1.jsxs)(_v84.Grid, {
              templateRows: "repeat(2, 1fr)",
              templateColumns: "repeat(2, 1fr)",
              gap: 3,
              flex: 1,
              children: [(0, _v1.jsx)(_v85.GridItem, {
                children: (0, _v1.jsx)(() => _v14 && (0, _v1.jsx)(_v94, {
                  filterName: _v87,
                  value: _v1,
                  tagGroup: _v14[_v87],
                  onChange: _v2
                }), {})
              }), (0, _v1.jsx)(_v85.GridItem, {
                children: (0, _v1.jsx)(() => _v14 && (0, _v1.jsx)(_v94, {
                  filterName: _v89,
                  value: _v3,
                  tagGroup: _v14[_v89],
                  onChange: _v4
                }), {})
              }), (0, _v1.jsx)(_v85.GridItem, {
                children: (0, _v1.jsx)(() => _v14 && (0, _v1.jsx)(_v94, {
                  filterName: _v88,
                  value: _v5,
                  tagGroup: _v14[_v88],
                  onChange: _v6
                }), {})
              }), (0, _v1.jsx)(_v85.GridItem, {
                children: (0, _v1.jsx)(() => _v14 && (0, _v1.jsx)(_v94, {
                  filterName: _v90,
                  value: _v7,
                  tagGroup: _v14[_v90],
                  onChange: _v8
                }), {})
              })]
            })
          })
        })]
      });
    };
  _v0.s(["default", 0, () => {
    let _v0 = (0, _v34.useAppDispatch)(),
      _v1 = (0, _v34.useAppSelector)(_v33.sourceMapSelector),
      _v2 = (0, _v34.useAppSelector)(_v33.storyboardIdSelector),
      {
        trackEditorAudioAdded: _v3
      } = (0, _v13.useEditorTracking)(),
      [_v4, _v5] = (0, _v2.useState)([]),
      _v6 = (0, _v2.useRef)(1),
      {
        createSoundSource: _v7
      } = (0, _v59.useSource)(),
      {
        addSoundItemToStoryboard: _v8
      } = (0, _v24.useLocalFile)(),
      {
        createSoundElement: _v9
      } = (0, _v58.useSoundElement)(),
      [_v10, _v11] = (0, _v60.useLazyFetchAllMusicQuery)(),
      {
        data: _v12,
        isLoading: _v13
      } = _v11,
      _v14 = (0, _v2.useCallback)((_v0, _v1) => {
        if (_v12) {
          let _v0 = _v12[_v0];
          return (0, _v1.jsx)(_v65.Box, {
            id: _v0.id,
            gridStyleType: _v44.GridStyleType.SQUARE,
            imageUrl: _v0.coverUrl,
            width: _v1,
            isActive: !1,
            title: _v0.name,
            subtitle: _v0.artist,
            duration: _v0.duration,
            overlay: (0, _v1.jsx)(_v77, {
              musicUrl: _v0.previewUrl,
              onClick: () => {
                _v8({
                  soundItem: _v0,
                  sourceHash: _v0.id
                }), _v3({
                  editorSessionId: _v2,
                  editorAudioSource: "explore"
                }), (0, _v63.sendTrackSelectMusicTrackElement)({
                  trackName: _v0.name,
                  trackId: _v0.id
                });
              }
            }),
            testid: "music",
            draggableData: {
              id: (0, _v64.createUuidV4)(),
              data: _v0,
              type: _v61.DnDItemType.GRID_ELEMENT_SOUND,
              createElement: ({
                time: _v0
              }) => {
                let _v1 = _v0.id,
                  _v2 = _v7(_v0, _v1);
                return _v1 && _v1[_v1] || _v0((0, _v33.addSourceAction)(_v2)), _v3({
                  editorSessionId: _v2,
                  editorAudioSource: "explore"
                }), _v9({
                  soundItem: _v0,
                  time: _v0
                });
              }
            }
          }, _v0.id);
        }
        return (0, _v1.jsx)(_v1.Fragment, {});
      }, [_v8, _v9, _v7, _v12, _v0, _v1, _v2, _v3]),
      _v15 = (0, _v2.useCallback)(() => {
        _v10({
          page: _v6.current,
          filterTags: _v4
        }, !0), _v6.current++;
      }, [_v10, _v4]);
    (0, _v2.useEffect)(() => {
      _v6.current = 1, _v15();
    }, [_v4, _v15]);
    let _v16 = !_v12?.length && !_v13;
    return (0, _v1.jsxs)(_v57.Flex, {
      h: "100%",
      direction: "column",
      children: [(0, _v1.jsx)(_v95, {
        setFilterTags: _v5
      }), (0, _v1.jsx)(_v79, {
        padRight: _v16,
        children: _v16 ? (0, _v1.jsx)(_v67.default, {
          type: _v62.EmptyInspectorView.SEARCH,
          title: (0, _v11.translate)({
            singular: "No results",
            dictionary: {
              es: {
                singular: "Sin resultados"
              },
              "de-DE": {
                singular: "Keine Ergebnisse"
              },
              "fr-FR": {
                singular: "Pas de résultats"
              },
              "ja-JP": {
                singular: "該当するものがありません"
              },
              "ko-KR": {
                singular: "결과 없음"
              },
              "pt-BR": {
                singular: "Nenhum resultado"
              },
              "zh-CN": {
                singular: "无结果"
              }
            }
          }),
          text: (0, _v11.translate)({
            singular: "Clear filters or use different filter combination",
            dictionary: {
              es: {
                singular: "Borre los filtros o utilice una combinación de filtros diferente"
              },
              "de-DE": {
                singular: "Filter löschen oder eine andere Filterkombination verwenden"
              },
              "fr-FR": {
                singular: "Effacez les filtres ou utilisez une autre combinaison de filtres."
              },
              "ja-JP": {
                singular: "フィルターをクリアするか、別のフィルターの組み合わせを使用してください"
              },
              "ko-KR": {
                singular: "필터 지우기 또는 다른 필터 조합 사용"
              },
              "pt-BR": {
                singular: "Limpe os filtros ou use uma combinação de filtros diferente"
              },
              "zh-CN": {
                singular: "清除筛选器或尝试使用不同的筛选器组合"
              }
            }
          })
        }) : (0, _v1.jsx)(_v66.Grid, {
          itemRenderer: _v14,
          styleType: _v44.GridStyleType.SQUARE,
          items: _v12 || [],
          isLoading: _v13,
          loadMoreItems: _v15
        })
      })]
    });
  }], 0);
}