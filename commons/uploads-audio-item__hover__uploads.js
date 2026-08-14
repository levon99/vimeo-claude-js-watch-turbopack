{
  "use strict";

  _v0.s(["default", () => _v45], 0);
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
    _v32 = _v0.i(0);
  let _v33 = ({
    handleUploadMusic: _v0,
    handleOpenLegalModal: _v1
  }) => {
    let _v2 = (0, _v22.useAppSelector)(_v20.loadingSoundSelector),
      _v3 = (0, _v22.useAppSelector)(_v21.storyboardIdSelector),
      {
        trackEditorAudioAdded: _v4
      } = (0, _v9.useEditorTracking)(),
      {
        addSoundItemToStoryboard: _v5,
        retryUploadLocalSoundFile: _v6
      } = (0, _v19.useLocalFile)(),
      _v7 = (0, _v2.useCallback)((_v0, _v1) => {
        if (_v2) {
          let _v0 = _v2[_v0],
            _v1 = {
              key: _v0.id,
              id: _v0.data.id,
              gridStyleType: _v25.GridStyleType.SQUARE,
              width: _v1,
              title: _v0.data.name,
              duration: _v0.data.duration
            };
          return _v0.status === _v26.STATUS.DONE ? (0, _v1.jsx)(_v28.Box, {
            ..._v1,
            testid: "uploads-audio-item",
            overlay: (0, _v1.jsxs)(_v11.Center, {
              width: "100%",
              height: "100%",
              sx: {
                "&:hover": {
                  div: {
                    opacity: 1
                  }
                }
              },
              children: [(0, _v1.jsx)(_v15.Music, {
                boxSize: "xs"
              }), (0, _v1.jsx)(_v31.default, {
                musicUrl: _v0.data.url,
                onClick: () => {
                  _v5({
                    soundItem: _v0.data,
                    sourceHash: _v0.sourceHash
                  }), _v4({
                    editorSessionId: _v3,
                    editorAudioSource: "uploads"
                  });
                }
              })]
            }),
            draggableData: {
              id: _v0.data.id.toString(),
              data: _v0.data,
              type: _v23.DnDItemType.GRID_ELEMENT_SOUND,
              createElement: ({
                time: _v0
              }) => {
                let _v1 = _v5({
                  soundItem: _v0.data,
                  sourceHash: _v0.sourceHash,
                  time: _v0
                });
                return _v4({
                  editorSessionId: _v3,
                  editorAudioSource: "uploads"
                }), _v1;
              }
            }
          }) : _v0.status === _v26.STATUS.ERROR ? (0, _v1.jsx)(_v28.Box, {
            ..._v1,
            testid: "failed-uploads-audio-item",
            overlay: (0, _v1.jsxs)(_v11.Center, {
              width: "100%",
              height: "100%",
              sx: {
                "&:hover": {
                  div: {
                    opacity: 1
                  }
                }
              },
              children: [(0, _v1.jsx)(_v32.ReuploadIconContainer, {
                children: (0, _v1.jsx)(_v12.IconButton, {
                  icon: (0, _v1.jsx)(_v16.Replay, {}),
                  size: "xs",
                  variant: "tertiary",
                  onClick: () => _v6(_v0),
                  "aria-label": "replay-button"
                })
              }), (0, _v1.jsx)(_v14.CircleExclamationFilled, {
                boxSize: "xs",
                color: "status-destructive-primary"
              })]
            })
          }) : (0, _v1.jsx)(_v28.Box, {
            ..._v1,
            testid: "uploading-uploads-audio-item",
            overlay: (0, _v1.jsx)(_v11.Center, {
              width: "100%",
              height: "100%",
              children: (0, _v1.jsx)(_v13.Spinner, {
                size: "xs"
              })
            })
          });
        }
        return (0, _v1.jsx)(_v1.Fragment, {});
      }, [_v2, _v5, _v6, _v3, _v4]);
    return (0, _v1.jsx)(_v32.TracksContainer, {
      padRight: !_v2.length,
      children: _v2.length ? (0, _v1.jsx)(_v29.Grid, {
        itemRenderer: _v7,
        styleType: _v25.GridStyleType.SQUARE,
        items: _v2,
        isLoading: !1
      }) : (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v30.default, {
          type: _v24.EmptyInspectorView.UPLOADS,
          title: _v17.translations.emptySoundTitle,
          text: _v17.translations.emptySoundState
        }), (0, _v1.jsx)(_v11.Center, {
          children: _v0 && _v1 && (0, _v1.jsx)(_v27.RebrandFileInput, {
            onBeforeChange: _v1,
            onChange: _v0,
            accept: _v18.ALLOWED_AUDIO.join(","),
            multiple: !0,
            dataTestid: "music-upload-button-empty-state",
            isTextButton: !0
          })
        })]
      })
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
    _v43 = _v0.i(0),
    _v44 = _v0.i(0);
  let _v45 = () => {
    let _v0 = (0, _v22.useAppDispatch)(),
      _v1 = (0, _v22.useAppSelector)((0, _v38.inspectorDataSelector)(_v25.InspectorType.MUSIC)),
      _v2 = (0, _v22.useAppSelector)(_v21.videoSessionIdSelector),
      _v3 = (0, _v22.useAppSelector)(_v21.storyboardIdSelector),
      {
        trackEditorAudioNewAudioUploaded: _v4
      } = (0, _v9.useEditorTracking)(),
      {
        initialUploadLocalSoundFile: _v5
      } = (0, _v19.useLocalFile)(),
      {
        alertMusicUploadTerms: _v6,
        alertUploadFailed: _v7
      } = (0, _v36.useAlerts)(),
      _v8 = (0, _v2.useCallback)(_v0 => {
        _v6({
          onPrimaryClick: _v0
        });
      }, [_v6]),
      _v9 = (0, _v2.useCallback)(_v0 => {
        _v0((0, _v38.updateInspectorDataAction)({
          inspectorType: _v25.InspectorType.MUSIC,
          data: {
            tab: _v25.MusicInspectorTabType.UPLOADS
          }
        }));
        let {
          files: _v1
        } = _v0.target;
        if (_v1) for (let _v0 of _v1) _v5(_v0).then(() => {
          _v4({
            editorSessionId: _v3
          });
        }).catch(_v0 => {
          let {
            errcode: _v1,
            error: _v2
          } = _v0.data || {};
          _v7(_v0.name), _v37.default.sendLog(_v34.FAILED_TO_UPLOAD_MUSIC, _v39.LogComponent.EDITOR_UPLOAD_ERROR, {
            fileName: _v0.name,
            vsid: _v2,
            error: _v2,
            errcode: _v1
          });
        });
      }, [_v7, _v0, _v5, _v2, _v3, _v4]),
      _v10 = (0, _v2.useMemo)(() => ({
        [_v25.MusicInspectorTabType.ALL_MUSIC]: {
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
          content: (0, _v1.jsx)(_v35.AudioPreviewProvider, {
            children: (0, _v1.jsx)(_v10.default, {})
          })
        },
        [_v25.MusicInspectorTabType.UPLOADS]: {
          label: (0, _v8.translate)({
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
          content: (0, _v1.jsx)(_v35.AudioPreviewProvider, {
            children: (0, _v1.jsx)(_v33, {
              handleUploadMusic: _v9,
              handleOpenLegalModal: _v8
            })
          })
        }
      }), [_v8, _v9]),
      _v11 = Object.keys(_v10),
      _v12 = _v1 ? _v11.indexOf(_v1.tab) : 0;
    return (0, _v1.jsxs)(_v41.Inspector, {
      children: [(0, _v1.jsx)(_v43.InspectorHeader, {
        title: "Audio",
        quickActions: (0, _v1.jsx)(() => (0, _v1.jsx)(_v27.RebrandFileInput, {
          onBeforeChange: _v8,
          onChange: _v9,
          accept: _v18.ALLOWED_AUDIO.join(","),
          multiple: !1,
          dataTestid: "music-upload-button",
          tooltip: (0, _v8.translate)({
            singular: "Upload audio file",
            dictionary: {
              es: {
                singular: "Suba archivo de audio"
              },
              "de-DE": {
                singular: "Audiodatei hochladen"
              },
              "fr-FR": {
                singular: "Mettre en ligne un fichier audio"
              },
              "ja-JP": {
                singular: "オーディオファイルをアップロード"
              },
              "ko-KR": {
                singular: "오디오 파일 업로드"
              },
              "pt-BR": {
                singular: "Carregar arquivo de áudio"
              },
              "zh-CN": {
                singular: "上传音频文件"
              }
            }
          })
        }), {})
      }), (0, _v1.jsx)(_v42.InspectorBody, {
        children: (0, _v1.jsxs)(_v4.Tabs, {
          isLazy: !0,
          index: _v12,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          variant: "soft",
          onChange: _v0 => {
            let _v1 = _v11[_v0];
            (0, _v40.sendTrackSelectMusicTab)({
              musicTab: _v1,
              prevMusicTab: _v1?.tab
            }), _v0((0, _v38.updateInspectorDataAction)({
              inspectorType: _v25.InspectorType.MUSIC,
              data: {
                tab: _v1
              }
            }));
          },
          size: "sm",
          children: [(0, _v1.jsx)(_v44.InspectorPaddedRow, {
            marginTop: !1,
            children: (0, _v1.jsxs)(_v5.TabList, {
              children: [Object.values(_v10).map(({
                label: _v0
              }) => (0, _v1.jsx)(_v3.Tab, {
                children: _v0
              }, _v0)), (0, _v1.jsx)(_v4.TabIndicator, {})]
            })
          }), (0, _v1.jsx)(_v7.TabPanels, {
            height: "100%",
            children: Object.entries(_v10).map(([_v0, _v1]) => (0, _v1.jsx)(_v6.TabPanel, {
              padding: 0,
              mt: 8,
              height: "100%",
              id: _v0,
              "data-testid": `music-inspector-active-tab-${_v1.label.toLowerCase()}`,
              children: _v1.content
            }, _v1.label))
          })]
        })
      })]
    });
  };
}