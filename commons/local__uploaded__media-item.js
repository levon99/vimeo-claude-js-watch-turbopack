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
    _v48 = _v0.i(0),
    _v49 = _v0.i(0),
    _v50 = _v0.i(0),
    _v51 = _v0.i(0),
    _v52 = _v0.i(0),
    _v53 = _v0.i(0);
  let _v54 = "local",
    _v55 = "uploaded",
    _v56 = (0, _v2.memo)(({
      orientation: _v0,
      mediaType: _v1,
      emptyStateText: _v2,
      addItemAsHotspot: _v3,
      fetchHotspotUploads: _v4,
      createOrReplaceElement: _v5,
      handleFileUpload: _v6
    }) => {
      let _v7 = (0, _v14.useAppSelector)(_v13.videoSessionIdSelector),
        _v8 = (0, _v14.useAppSelector)(_v36.loadingMediaSelector),
        _v9 = (0, _v14.useAppSelector)(_v13.durationSelector),
        [_v10, _v11] = (0, _v2.useState)([]),
        _v12 = (0, _v2.useRef)(null),
        _v13 = (0, _v2.useRef)(1),
        {
          isReplacing: _v14
        } = (0, _v11.useReplaceElement)(),
        {
          uploadMedia: _v15
        } = (0, _v33.useUploadQueue)(),
        {
          handleMediaItemClickOrDrag: _v16
        } = (0, _v32.useMediaItemClick)(),
        {
          addMediaItemToStoryboard: _v17,
          retryUploadLocalMediaFile: _v18,
          deleteFailedLocalMediaFile: _v19
        } = (0, _v31.useLocalFile)(),
        {
          alertCannotDeleteMedia: _v20
        } = (0, _v30.useAlerts)(),
        [_v21, {
          data: _v22,
          isLoading: _v23
        }] = (0, _v35.useLazyFetchMediaUploadsQuery)(),
        [_v24] = (0, _v35.useDeleteMediaUploadMutation)(),
        _v25 = (0, _v2.useMemo)(() => _v8.filter(_v0 => !_v10.includes(_v0.id)).map(_v0 => ({
          id: _v0.id,
          uploadType: _v54,
          mediaType: _v0.data.type,
          orientation: _v0.data.orientation,
          width: _v0.data.width,
          height: _v0.data.height,
          data: _v0
        })).reverse(), [_v10, _v8]),
        _v26 = (0, _v2.useMemo)(() => (_v22?.items || []).map(_v0 => {
          let {
            width: _v1 = 1,
            height: _v2 = 1
          } = _v0;
          return {
            id: _v0.id,
            uploadType: _v55,
            mediaType: _v0.type,
            orientation: _v0.orientation || (0, _v45.getOrientation)(_v1, _v2),
            width: _v1,
            height: _v2,
            data: _v0
          };
        }), [_v22]),
        _v27 = (0, _v2.useMemo)(() => {
          let _v0 = [..._v25, ..._v26];
          return _v1 !== _v7.MediaUploadsType.ALL && (_v0 = _v0.filter(_v0 => _v0.mediaType === _v1)), _v0 !== _v7.MediaUploadsOrientation.ALL && (_v0 = _v0.filter(_v0 => _v0.orientation && _v41.OrientationMap[_v0.orientation] === _v0)), _v0 = _v0.filter(_v0 => !_v10.includes(_v0.id));
        }, [_v25, _v26, _v1, _v0, _v10]),
        _v28 = !_v23 && (!_v27 || 0 === _v27.length),
        _v29 = (0, _v2.useCallback)(async ({
          mediaItem: _v0,
          element: _v1
        }) => {
          (0, _v50.trackUploadStart)(_v0, _v7);
          let {
            status: _v2
          } = await _v15({
            origin: _v43.UploadMediaOrigin.MEDIALIB,
            mediaItem: _v0,
            isReplacing: _v14,
            elementSourceHash: _v1.sourceHash
          });
          (0, _v50.trackUploadFinish)(_v0, _v2, _v7);
        }, [_v14, _v15, _v7]),
        _v30 = (0, _v2.useCallback)(async _v0 => {
          try {
            let _v0 = _v25.find(_v0 => _v0.data.data.id === _v0);
            _v0 ? (await _v24({
              mediaHash: _v0.data.id
            }), _v11(_v0 => [..._v0, _v0.id])) : (await _v24({
              mediaHash: _v0
            }), _v11(_v0 => [..._v0, _v0]));
          } catch (_v0) {
            _v20();
          }
        }, [_v20, _v24, _v25]),
        _v31 = (0, _v2.useCallback)(({
          item: _v0,
          index: _v1,
          isUploading: _v2,
          isTranscoding: _v3,
          isFailed: _v4
        }) => {
          let _v5 = _v0.type === _v40.MediaType.IMAGE,
            _v6 = "media-item";
          return _v6 = _v4 ? `failed-${_v6}` : _v3 ? `transcoding-${_v6}` : _v2 ? `uploading-${_v6}` : `uploaded-${_v6}`, {
            key: _v0.id,
            id: _v0.id,
            gridStyleType: _v39.GridStyleType.LANDSCAPE,
            alignToCenter: !0,
            isActive: !1,
            testid: _v6,
            ...(!(_v2 || _v4) && {
              isShowPlusButton: !0,
              onDelete: () => _v30(_v0.id)
            }),
            ...(_v3 && {
              overlay: (0, _v1.jsxs)(_v17.Box, {
                children: [(0, _v1.jsx)(_v26.MediaViewLoader, {}), _v3 && !_v5 && (0, _v1.jsx)(_v20.Tooltip, {
                  label: (0, _v25.translate)({
                    singular: "This video is being processed. It\nwill be available for editing soon.",
                    dictionary: {
                      es: {
                        singular: "Este video se está procesando. Estará disponible para su edición pronto."
                      },
                      "de-DE": {
                        singular: "Dieses Video wird bearbeitet. Es steht in Kürze zur Bearbeitung zur Verfügung."
                      },
                      "fr-FR": {
                        singular: "Cette vidéo est en cours de traitement. Elle sera bientôt disponible pour le montage."
                      },
                      "ja-JP": {
                        singular: "この動画は処理中です。\nまもなく編集可能になります。"
                      },
                      "ko-KR": {
                        singular: "동영상을 처리하는 중입니다. 곧\n 편집할 수 있습니다."
                      },
                      "pt-BR": {
                        singular: "Este vídeo está sendo processado. Ele estará disponível para edição em breve."
                      },
                      "zh-CN": {
                        singular: "此视频正在处理中。它\n将很快可供编辑。"
                      }
                    }
                  }),
                  placement: "top",
                  whiteSpace: "break-spaces",
                  children: (0, _v1.jsx)(_v19.IconButton, {
                    "aria-label": "chevron icon button",
                    icon: (0, _v1.jsx)(_v23.InfoCircle, {
                      color: "white"
                    }),
                    size: "xs",
                    variant: "tertiary",
                    position: "absolute",
                    right: "0"
                  })
                })]
              })
            }),
            ...(_v4 && {
              overlay: (0, _v1.jsxs)(_v17.Box, {
                children: [(0, _v1.jsx)(_v48.Overlay, {
                  backdropFilter: "blur(4px)",
                  backgroundColor: "var(--vimeo-colors-fill-page-overlay)",
                  dataTestId: _v28.testIds.loader,
                  icon: (0, _v1.jsx)(_v21.CircleExclamationFilled, {
                    color: "status-destructive-primary"
                  })
                }), (0, _v1.jsx)(_v20.Tooltip, {
                  label: (0, _v25.translate)({
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
                  children: (0, _v1.jsx)(_v19.IconButton, {
                    "aria-label": "close icon button",
                    icon: (0, _v1.jsx)(_v22.CloseXSmall, {}),
                    size: "xs",
                    variant: "blur",
                    position: "absolute",
                    right: "0",
                    margin: "4px",
                    onClick: () => _v19(_v27[_v1].data)
                  })
                }), (0, _v1.jsx)(_v20.Tooltip, {
                  label: (0, _v25.translate)({
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
                  }),
                  placement: "top",
                  children: (0, _v1.jsx)(_v19.IconButton, {
                    "aria-label": "retry icon button",
                    icon: (0, _v1.jsx)(_v24.Reset, {
                      transform: "scale(-1, 1)"
                    }),
                    size: "xs",
                    variant: "blur",
                    position: "absolute",
                    left: "0",
                    margin: "4px",
                    onClick: () => _v18(_v27[_v1].data)
                  })
                })]
              })
            })
          };
        }, [_v19, _v30, _v27, _v18]),
        _v32 = (0, _v2.useCallback)((_v0, _v1, _v2, _v3) => {
          let _v4 = _v0.data,
            _v5 = _v0.sourceHash,
            _v6 = _v0.status === _v42.STATUS.PROGRESS,
            _v7 = !_v0.canBeUseLocally,
            _v8 = _v0.status === _v42.STATUS.ERROR,
            _v9 = _v0.status === _v42.STATUS.DONE,
            _v10 = _v31({
              item: _v4,
              index: _v1,
              isUploading: _v6,
              isTranscoding: _v7,
              isFailed: _v8
            });
          return (0, _v1.jsx)(_v52.Box, {
            ..._v10,
            ...((0, _v46.isVideoUploadItem)(_v4) && {
              duration: _v4.duration,
              videoUrl: _v4.url
            }),
            ...((0, _v46.isImageUploadItem)(_v4) && {
              imageUrl: _v4.url
            }),
            width: _v2,
            ...((_v6 && !_v7 || _v9) && {
              draggableData: {
                id: _v4.id,
                data: _v4,
                type: _v37.DnDItemType.GRID_ELEMENT_MEDIA,
                createElement: ({
                  time: _v0
                }) => _v17({
                  mediaItem: _v4,
                  sourceHash: _v5,
                  time: _v0,
                  addItemAsHotspot: _v3
                })
              },
              onExpand: _v3,
              onClick: () => _v17({
                mediaItem: _v4,
                sourceHash: _v5,
                time: _v3 ? void 0 : _v9,
                addItemAsHotspot: _v3
              })
            }),
            expandedItemData: {
              id: _v4.id,
              title: _v4.name,
              type: _v34.ExpandType.MEDIA,
              ...((0, _v46.isVideoUploadItem)(_v4) && {
                videoUrl: _v4.url
              }),
              ...((0, _v46.isImageUploadItem)(_v4) && {
                imageUrl: _v4.url
              }),
              height: _v4.height,
              width: _v4.width,
              orientation: _v4.orientation,
              ...(!_v9 && {
                disableDelete: !0,
                deleteTooltip: (0, _v25.translate)({
                  singular: "You can delete this file once it finishes uploading.\nWait for the file to upload to delete it",
                  dictionary: {
                    es: {
                      singular: "Podrá eliminar este archivo una vez que termine de subirse.\nEspere a que el archivo se suba para eliminarlo."
                    },
                    "de-DE": {
                      singular: "Sie können diese Datei löschen, sobald sie hochgeladen ist.\nWarten Sie, bis die Datei hochgeladen ist, um sie zu löschen"
                    },
                    "fr-FR": {
                      singular: "Vous pourrez supprimer ce fichier une fois qu'il sera mis en ligne.\nAttendez que le fichier soit mis en ligne pour le supprimer."
                    },
                    "ja-JP": {
                      singular: "アップロードが完了したら、このファイルを削除できます。\nファイルを削除するには、アップロードが完了するまでお待ちください。"
                    },
                    "ko-KR": {
                      singular: "업로드가 완료되면 이 파일을 삭제할 수 있습니다.\n파일을 삭제하려면 업로드가 완료될 때까지 기다리세요."
                    },
                    "pt-BR": {
                      singular: "Você pode excluir o arquivo assim que o upload terminar.\nAguarde o upload do arquivo para excluí-lo"
                    },
                    "zh-CN": {
                      singular: "上传完成后您可以删除此文件。\n等待文件上传后再将其删除"
                    }
                  }
                })
              }),
              isCrossOrigin: !0
            },
            isCrossOrigin: !0
          });
        }, [_v31, _v17, _v3, _v9]),
        _v33 = (0, _v2.useCallback)((_v0, _v1, _v2, _v3) => {
          let _v4 = _v31({
            item: _v0,
            index: _v1
          });
          return (0, _v1.jsx)(_v52.Box, {
            ..._v4,
            videoUrl: _v0.previewUrl,
            imageUrl: _v0.thumbnailUrl,
            duration: _v0.duration,
            width: _v2,
            draggableData: {
              id: _v0.id,
              data: _v0,
              type: _v37.DnDItemType.GRID_ELEMENT_MEDIA,
              createElement: _v0 => _v16({
                mediaItem: _v0,
                draggableData: _v0,
                createElement: _v5,
                handleElementAdded: _v29
              }),
              onElementAdded: ({
                element: _v0
              }) => {
                _v29({
                  mediaItem: _v0,
                  element: _v0
                });
              }
            },
            onExpand: _v3,
            onClick: () => _v16({
              mediaItem: _v0,
              createElement: _v5,
              handleElementAdded: _v29
            }),
            expandedItemData: {
              id: _v0.id,
              title: (0, _v44.removeRandomizedSuffixFromFileName)(_v0.fileName),
              date: _v0.date,
              type: _v34.ExpandType.MEDIA,
              videoUrl: _v0.previewUrl,
              imageUrl: _v0.thumbnailUrl,
              height: _v0.height,
              width: _v0.width,
              orientation: _v0.orientation
            }
          });
        }, [_v5, _v31, _v29, _v16]),
        _v34 = (0, _v2.useCallback)((_v0, _v1, _v2) => {
          let _v3 = _v27[_v0];
          if (_v3.uploadType === _v54) return _v32(_v3.data, _v0, _v1, _v2);
          if (_v3.uploadType === _v55) return _v33(_v3.data, _v0, _v1, _v2);
          throw Error(_v27.SOMETHING_WENT_WRONG);
        }, [_v27, _v32, _v33]);
      return ((0, _v2.useEffect)(() => {
        _v13.current = 1, _v7 && _v21({
          page: _v13.current,
          vsid: _v7,
          limit: 30,
          service: "all",
          isImage: _v1,
          orientation: _v0,
          fetchHotspotUploads: _v4
        }), _v12?.current?.scrollToIndex(0);
      }, [_v1, _v0, _v7, _v21, _v4]), _v28) ? (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v49.default, {
          type: _v38.EmptyInspectorView.UPLOADS,
          title: _v8.translations.emptyMediaTitle,
          text: _v2
        }), _v6 && (0, _v1.jsx)(_v18.Center, {
          children: (0, _v1.jsx)(_v47.RebrandFileInput, {
            onChange: _v6,
            accept: _v29.ALLOWED_MEDIA.join(","),
            multiple: !0,
            dataTestid: "media-inspector-upload-media-button-empty-state",
            isTextButton: !0
          })
        })]
      }) : (0, _v1.jsx)(_v51.MediaGridContainer, {
        padRight: !1,
        children: (0, _v1.jsx)(_v53.Grid, {
          ref: _v12,
          itemRenderer: _v34,
          styleType: _v39.GridStyleType.LANDSCAPE,
          items: _v27,
          loadMoreItems: () => {
            _v22 && !(_v22.itemsCount <= _v22.items.length) && (_v13.current++, _v21({
              page: _v13.current,
              vsid: _v7,
              limit: 30,
              service: "all",
              isImage: _v1,
              orientation: _v0,
              fetchHotspotUploads: _v4
            }));
          },
          isLoading: _v23,
          onDelete: _v30
        })
      });
    });
  _v0.s(["default", 0, _v56], 0), _v0.s(["default", 0, ({
    handleLocalFileUpload: _v0
  }) => {
    let _v1 = (0, _v14.useAppSelector)(_v12.isEditingInteractiveOverlaySelector),
      _v2 = (0, _v14.useAppSelector)(_v13.storyboardIdSelector),
      _v3 = (0, _v14.useAppSelector)(_v13.durationSelector),
      {
        trackEditorMediaAdded: _v4,
        trackEditorMediaFilterApplied: _v5
      } = (0, _v4.useEditorTracking)(),
      _v6 = _v1 ? _v7.MediaUploadsType.IMAGE : _v7.MediaUploadsType.ALL,
      [_v7, _v8] = (0, _v2.useState)(_v7.MediaUploadsOrientation.ALL),
      [_v9, _v10] = (0, _v2.useState)(_v6),
      {
        createOrReplaceMediaElement: _v11
      } = (0, _v10.useMediaElement)(),
      {
        createOrReplaceHotspotFromMedia: _v12
      } = (0, _v9.useHotspot)(),
      {
        isReplacing: _v13
      } = (0, _v11.useReplaceElement)(),
      _v14 = !_v1,
      _v15 = (0, _v2.useCallback)((_v0, _v1) => {
        let {
          time: _v2
        } = _v1 || {};
        return (0, _v16.sendTrackAddMedia)({
          mediaSelectionAction: _v13 ? "replace" : "add",
          mediaSource: "uploads",
          mediaType: _v0.type
        }), _v4({
          editorSessionId: _v2,
          editorMediaSource: "uploads",
          editorMediaType: _v0.type
        }), _v1 ? _v12(_v0, _v1, {
          ..._v6.NO_ACTION_PRESET
        }) : _v11({
          mediaItem: _v0,
          isAddToStoryboard: !1,
          time: _v2 ?? _v3
        });
      }, [_v12, _v11, _v1, _v13, _v2, _v3, _v4]);
    return (0, _v1.jsxs)(_v3.Flex, {
      h: "100%",
      direction: "column",
      children: [(0, _v1.jsx)(_v5.default, {
        onChange: (_v0, _v1) => {
          _v0 === _v15.MediaUploadsFiltersType.ORIENTATION ? _v8(_v1) : _v0 === _v15.MediaUploadsFiltersType.MEDIA_TYPE && _v10(_v1), _v5({
            editorSessionId: _v2,
            filterKey: _v0
          });
        },
        shouldShowTypeFilter: _v14
      }), (0, _v1.jsx)(_v56, {
        orientation: _v7,
        mediaType: _v9,
        emptyStateText: _v8.translations.emptyMediaState,
        createOrReplaceElement: _v15,
        handleFileUpload: _v0,
        addItemAsHotspot: _v1,
        fetchHotspotUploads: !1
      })]
    });
  }], 0), _v0.s(["EDITOR_BOKEH_GUIDE_ID", 0, "pYrB38zxoXD1vCDA_AnDiq0QihM", "EDITOR_SAVE_AS_GUIDE_ID", 0, "J9Skmvuu15RXhZSui9dW97RyT3w"], 0);
}