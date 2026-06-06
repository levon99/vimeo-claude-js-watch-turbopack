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
    _v34 = _v0.i(0);
  let _v35 = (0, _v2.createContext)(null);
  function _v36({
    clipId: _v0,
    onSaveSuccess: _v1,
    onClose: _v2,
    children: _v3
  }) {
    let _v4,
      _v5,
      [_v6, _v7] = (0, _v2.useState)(null),
      [_v8, _v9] = (0, _v2.useState)(!1),
      [_v10, _v11] = (0, _v2.useState)(!1),
      [_v12, _v13] = (0, _v2.useState)(!1),
      [_v14, _v15] = (0, _v2.useState)(!1),
      [_v16, _v17] = (0, _v2.useState)(null),
      [_v18, _v19] = (0, _v2.useState)(!1),
      _v20 = (0, _v2.useRef)(null),
      _v21 = (0, _v28.useToast)(),
      _v22 = (0, _v2.useRef)(null),
      _v23 = (0, _v2.useRef)(null),
      {
        data: _v24,
        isLoading: _v25,
        mutate: _v26
      } = (0, _v32.useGetVideoPictures)({
        where: {
          videoId: _v0
        },
        select: ["uri", "active", "baseLink", "sizes"],
        query: {
          sizes: [`${_v34.THUMBNAIL_WIDTH}x${_v34.THUMBNAIL_HEIGHT}`]
        }
      }),
      {
        data: _v27
      } = (0, _v33.useGetVideoVersions)({
        where: {
          videoId: _v0
        },
        select: ["configUrl", "width", "height", "active", "sourceMetadata.video.width", "sourceMetadata.video.height", "sourceMetadata.video.fps"],
        query: {
          access_gates: 0
        }
      }),
      _v28 = _v27?.data?.find(_v0 => _v0.active),
      _v29 = _v28?.sourceMetadata?.video?.fps ?? 30,
      _v30 = _v28?.configUrl,
      _v31 = (_v4 = _v28?.width ?? _v28?.sourceMetadata?.video?.width, _v5 = _v28?.height ?? _v28?.sourceMetadata?.video?.height, _v4 && _v5 ? `${_v4}/${_v5}` : "16/9"),
      _v32 = (0, _v30.useGctlConfig)(),
      [_v33] = (0, _v31.usePatchVideoPicture)(),
      [_v34] = (0, _v31.useDeleteVideoPicture)(),
      _v35 = (_v24?.data ?? []).map(_v0 => {
        let _v1 = _v0.uri.split("/");
        return {
          id: Number(_v1[_v1.length - 1]) || 0,
          src: _v0.sizes?.[0]?.link ?? _v0.baseLink,
          active: _v0.active
        };
      }),
      _v36 = async _v0 => {
        let _v1 = _v0[0];
        if (!_v1 || !_v34.THUMBNAIL_SUPPORTED_IMAGE_MIME.split(",").includes(_v1.type)) return;
        if (_v13(!1), _v15(!1), _v1.size > 0) {
          _v15(!0), _v13(!0);
          return;
        }
        _v22.current = _v1, _v9(!0);
        let _v2 = new AbortController();
        _v23.current = _v2;
        let _v3 = null;
        try {
          let _v0 = await (0, _v29.postVideoPictures)({
            select: ["link", "uri"],
            where: {
              videoId: _v0
            },
            baseUrl: _v32.baseUrl,
            headers: {
              "Content-Type": "application/json",
              Authorization: _v32.jwt ? `jwt ${_v32.jwt}` : "",
              "Vimeo-Page": `${_v32.xVimeoPage}`,
              "Accept-Language": _v32.locale ?? "en"
            }
          });
          if (_v0?.link && _v22.current) {
            let _v0 = Number(_v0.uri?.split("/").pop());
            _v3 = Number.isInteger(_v0) && _v0 > 0 ? _v0 : null;
            let _v1 = await (await fetch(_v0.link, {
              method: "PUT",
              headers: {
                "Content-Type": _v22.current.type
              },
              body: _v22.current,
              signal: _v2.signal
            })).json();
            _v1?.status === "failure" ? (_v3 && (await _v34({
              where: {
                videoId: _v0,
                pictureId: _v3
              }
            })), _v13(!0)) : _v3 && (await _v33({
              select: ["active"],
              where: {
                videoId: _v0,
                pictureId: _v3
              },
              variables: {
                active: !0
              }
            }), _v1?.(), _v2());
          }
        } catch (_v0) {
          if (_v0 instanceof DOMException && "AbortError" === _v0.name) {
            if (null !== _v3) try {
              await _v34({
                where: {
                  videoId: _v0,
                  pictureId: _v3
                }
              });
            } catch {}
            return;
          }
          _v13(!0);
        } finally {
          _v9(!1);
        }
      },
      _v37 = async _v0 => {
        _v11(!0);
        try {
          await _v33({
            select: ["active"],
            where: {
              videoId: _v0,
              pictureId: _v0
            },
            variables: {
              active: !0
            }
          }), await _v26(), _v1?.(), _v2();
        } catch {
          _v21({
            title: (0, _v22.translate)({
              singular: "Changes could not be saved",
              dictionary: {
                es: {
                  singular: "No se pudieron guardar los cambios"
                },
                "de-DE": {
                  singular: "Änderungen konnten nicht gespeichert werden"
                },
                "fr-FR": {
                  singular: "Les modifications n'ont pas pu être enregistrées"
                },
                "ja-JP": {
                  singular: "変更を保存できませんでした"
                },
                "ko-KR": {
                  singular: "변경 사항이 저장되지 않았습니다"
                },
                "pt-BR": {
                  singular: "As alterações não puderam ser salvas"
                },
                "zh-CN": {
                  singular: "无法保存更改"
                }
              }
            })
          });
        } finally {
          _v11(!1);
        }
      },
      _v38 = async () => {
        _v23.current?.abort(), _v2();
      },
      _v39 = async _v0 => {
        _v11(!0);
        let _v1 = null;
        try {
          let _v0 = await (0, _v29.postVideoPictures)({
              select: ["uri"],
              where: {
                videoId: _v0
              },
              baseUrl: _v32.baseUrl,
              headers: {
                "Content-Type": "application/json",
                Authorization: _v32.jwt ? `jwt ${_v32.jwt}` : "",
                "Vimeo-Page": `${_v32.xVimeoPage}`,
                "Accept-Language": _v32.locale ?? "en"
              },
              variables: {
                time: _v0,
                createForVersion: !0
              }
            }),
            _v1 = Number(_v0?.uri?.split("/").pop());
          if (!(_v1 = Number.isInteger(_v1) && _v1 > 0 ? _v1 : null)) return void _v19(!0);
          await _v33({
            select: ["active"],
            where: {
              videoId: _v0,
              pictureId: _v1
            },
            variables: {
              active: !0
            }
          }), await _v26(), _v1?.(), _v2();
        } catch {
          if (null !== _v1) try {
            await _v34({
              where: {
                videoId: _v0,
                pictureId: _v1
              }
            });
          } catch {}
          _v19(!0);
        } finally {
          _v11(!1);
        }
      };
    return (0, _v1.jsx)(_v35.Provider, {
      value: {
        clipId: _v0,
        videoFps: _v29,
        clipConfigUrl: _v30,
        thumbnails: _v35,
        isLoadingThumbnails: _v25,
        savedPendingId: _v6,
        setSavedPendingId: _v7,
        uploadFile: _v36,
        isUploading: _v8,
        isSaving: _v10,
        uploadError: _v12,
        fileTooLarge: _v14,
        pendingTimecode: _v16,
        setPendingTimecode: _v17,
        timecodeError: _v18,
        setTimecodeError: _v19,
        selectFromVideoPlayerRef: _v20,
        videoAspectRatio: _v31,
        saveFromTimecode: _v39,
        onSave: _v37,
        onClose: _v38
      },
      children: _v3
    });
  }
  function _v37() {
    let _v0 = (0, _v2.useContext)(_v35);
    if (!_v0) throw Error("useThumbnailChangeModal must be used within ThumbnailChangeModalProvider");
    return _v0;
  }
  function _v38() {
    let {
      thumbnails: _v0,
      isLoadingThumbnails: _v1,
      savedPendingId: _v2,
      setSavedPendingId: _v3,
      videoAspectRatio: _v4
    } = _v37();
    return _v1 ? (0, _v1.jsx)(_v27.TabPanel, {
      children: (0, _v1.jsx)(_v7.Flex, {
        justifyContent: "center",
        paddingY: "lg",
        children: (0, _v1.jsx)(_v26.Spinner, {})
      })
    }) : _v0.length ? (0, _v1.jsx)(_v27.TabPanel, {
      children: (0, _v1.jsx)(_v3.Box, {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "md",
        paddingY: "sm",
        children: _v0.map(_v0 => (0, _v1.jsx)(_v3.Box, {
          as: "button",
          onClick: () => _v3(_v0.id === _v2 ? null : _v0.id),
          borderRadius: "md",
          overflow: "hidden",
          outline: _v0.id === _v2 ? "2px solid" : "1px solid",
          outlineColor: _v0.id === _v2 ? "currentColor" : "stroke",
          outlineOffset: _v0.id === _v2 ? "2px" : void 0,
          cursor: "pointer",
          padding: 0,
          width: "100%",
          bg: "surface",
          style: {
            aspectRatio: _v4
          },
          children: (0, _v1.jsx)(_v25.Image, {
            src: _v0.src,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            alt: "",
            style: {
              transform: "scale(1.05)"
            }
          })
        }, _v0.id))
      })
    }) : (0, _v1.jsx)(_v27.TabPanel, {
      children: (0, _v1.jsx)(_v7.Flex, {
        justifyContent: "center",
        paddingY: "lg",
        children: (0, _v22.translate)({
          singular: "No saved thumbnails",
          dictionary: {
            es: {
              singular: "No hay miniaturas guardadas"
            },
            "de-DE": {
              singular: "Keine gespeicherten Vorschaubilder"
            },
            "fr-FR": {
              singular: "Pas de vignettes enregistrées"
            },
            "ja-JP": {
              singular: "保存されたサムネイルはありません"
            },
            "ko-KR": {
              singular: "저장된 썸네일이 없습니다"
            },
            "pt-BR": {
              singular: "Sem miniaturas salvas"
            },
            "zh-CN": {
              singular: "没有已保存的缩略图"
            }
          }
        })
      })
    });
  }
  var _v39 = _v0.i(0),
    _v40 = _v0.i(0),
    _v41 = _v0.i(0),
    _v42 = _v0.i(0),
    _v43 = _v0.i(0),
    _v44 = _v0.i(0),
    _v45 = _v0.i(0);
  let _v46 = [.05, .15, .25, .35, .45, .55, .65, .75, .85, .95];
  function _v47(_v0, _v1) {
    let _v2 = Math.floor(_v0 / 0),
      _v3 = Math.floor(_v0 % 0 / 60),
      _v4 = Math.floor(_v0 % 60),
      _v5 = String(_v3).padStart(2, "0"),
      _v6 = String(_v4).padStart(2, "0");
    return _v1 ? `${String(_v2).padStart(2, "0")}:${_v5}:${_v6}` : `${_v5}:${_v6}`;
  }
  function _v48({
    children: _v0
  }) {
    return (0, _v1.jsx)(_v3.Box, {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderWidth: "1px",
      borderColor: "text-secondary",
      color: "text-secondary",
      fontSize: "body-xs",
      lineHeight: 1,
      px: (0, _v44.rem)(2),
      py: (0, _v44.rem)(2),
      children: _v0
    });
  }
  function _v49() {
    let {
        clipId: _v0,
        clipConfigUrl: _v1,
        videoAspectRatio: _v2,
        pendingTimecode: _v3,
        setPendingTimecode: _v4,
        timecodeError: _v5,
        setTimecodeError: _v6,
        selectFromVideoPlayerRef: _v7,
        videoFps: _v8
      } = _v37(),
      _v9 = (0, _v2.useRef)(_v3),
      [_v10, _v11] = (0, _v2.useState)(_v3 ?? 0),
      [_v12, _v13] = (0, _v2.useState)(0),
      _v14 = (0, _v2.useRef)(!1),
      _v15 = (0, _v2.useRef)(null),
      _v16 = (0, _v2.useRef)(_v10),
      _v17 = (0, _v2.useRef)(0),
      _v18 = _v12 >= 0,
      [_v19, _v20] = (0, _v2.useState)(null),
      {
        player: _v21
      } = (0, _v45.usePlayer)(_v15, _v0, !!_v1, _v1 ?? "", !1);
    (0, _v2.useEffect)(() => {
      _v16.current = _v10;
    }, [_v10]);
    let _v22 = (0, _v2.useCallback)(_v0 => {
      if ("ArrowLeft" !== _v0.key && "ArrowRight" !== _v0.key) return;
      _v0.preventDefault(), _v0.stopPropagation();
      let _v1 = 1 / _v8,
        _v2 = _v0.shiftKey ? 1 : _v1,
        _v3 = "ArrowRight" === _v0.key ? _v2 : -_v2,
        _v4 = Math.max(0, Math.min(_v12, _v16.current + _v3));
      _v7.current?.seekTo(_v4), _v11(_v4), _v4(_v4);
    }, [_v12, _v8, _v4, _v7]);
    (0, _v2.useEffect)(() => {
      if (!_v21) return;
      let _v0 = _v0 => _v22(_v0);
      return document.addEventListener("keydown", _v0, !0), () => document.removeEventListener("keydown", _v0, !0);
    }, [_v21, _v22]), (0, _v2.useEffect)(() => {
      if (!_v21) return;
      _v7.current = _v21;
      let _v0 = () => {
        _v21._overrideControlbarBehavior(!0), _v21._setControlbarVisibility(!1), _v21._setEmbedSettings({
          title: 0,
          byline: 0,
          portrait: 0,
          like: 0,
          watch_later: 0,
          share: 0,
          controls: 0,
          ask_ai: 0
        });
      };
      _v21.ready(() => {
        _v0(), _v21.on("durationchange", _v0 => _v13(_v0.duration)), _v21.on("play", () => {
          _v4(null), _v6(!1);
        }), _v21.on("pause", _v0 => _v4(_v0.seconds)), _v21.on("timeupdate", _v0 => {
          _v14.current || _v11(_v0.seconds);
        }), _v21.play().then(() => {
          _v21.pause(), _v0(), _v13(_v21.duration), _v20(_v21.config?.request?.thumb_preview ?? null);
          let _v0 = _v9.current;
          null !== _v0 && (_v21.seekTo(_v0), _v4(_v0), _v11(_v0));
        });
      });
    }, [_v21, _v7, _v4, _v6]), (0, _v2.useEffect)(() => () => {
      _v4(null);
    }, [_v4]);
    let _v23 = _v19 ? Math.ceil(_v19.frames / _v19.columns) : 0,
      _v24 = _v46.reduce((_v0, _v1, _v2) => Math.abs(_v1 * _v12 - _v10) < Math.abs(_v46[_v0] * _v12 - _v10) ? _v2 : _v0, 0);
    return (0, _v1.jsx)(_v27.TabPanel, {
      children: _v1 ? (0, _v1.jsxs)(_v3.Box, {
        display: "flex",
        flexDirection: "column",
        gap: "sm",
        children: [(0, _v1.jsxs)(_v3.Box, {
          position: "relative",
          w: "100%",
          mx: "auto",
          maxH: "40vh",
          style: {
            aspectRatio: _v2,
            maxWidth: `calc(40vh * (${_v2}))`
          },
          bg: "black",
          borderRadius: "sm",
          overflow: "hidden",
          children: [(0, _v1.jsx)("div", {
            ref: _v15,
            className: "player player-js",
            style: {
              width: "100%",
              height: "100%"
            }
          }), !_v12 && (0, _v1.jsx)(_v7.Flex, {
            position: "absolute",
            inset: 0,
            justifyContent: "center",
            alignItems: "center",
            bg: "surface",
            children: (0, _v1.jsx)(_v26.Spinner, {
              size: "lg"
            })
          }), !!_v12 && (0, _v1.jsxs)(_v1.Fragment, {
            children: [(0, _v1.jsx)(_v3.Box, {
              position: "absolute",
              inset: 0,
              onDoubleClick: _v0 => _v0.preventDefault()
            }), (0, _v1.jsxs)(_v41.Badge, {
              position: "absolute",
              size: "sm",
              fontWeight: "500",
              bottom: (0, _v44.rem)(8),
              right: (0, _v44.rem)(8),
              children: [_v47(_v10, _v18), " / ", _v47(_v12, _v18)]
            })]
          })]
        }), !!_v12 && (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsxs)(_v42.Slider, {
            min: 0,
            max: _v12,
            step: .001,
            value: _v10,
            focusThumbOnChange: !1,
            overflow: "visible",
            onChange: _v0 => {
              _v14.current = !0, _v11(_v0);
              let _v1 = Date.now();
              _v1 - _v17.current >= 33 && (_v17.current = _v1, _v7.current?.seekTo(_v0));
            },
            onChangeEnd: _v0 => {
              _v14.current = !1, _v7.current?.seekTo(_v0), _v4(_v0);
            },
            onKeyDown: _v0 => _v22(_v0),
            children: [(0, _v1.jsx)(_v43.SliderTrack, {
              children: (0, _v1.jsx)(_v43.SliderFilledTrack, {})
            }), (0, _v1.jsx)(_v43.SliderThumb, {})]
          }), null !== _v19 && (0, _v1.jsx)(_v3.Box, {
            display: "flex",
            children: _v46.map((_v0, _v1) => {
              let _v2 = Math.min(Math.round(_v0 * _v19.frames), _v19.frames - 1),
                _v3 = _v2 % _v19.columns,
                _v4 = Math.floor(_v2 / _v19.columns),
                _v5 = _v19.columns <= 1 ? 0 : _v3 / (_v19.columns - 1) * 100;
              return (0, _v1.jsx)(_v3.Box, {
                as: "button",
                flex: "1 1 0",
                cursor: "pointer",
                position: "relative",
                borderLeftRadius: 0 === _v1 ? "sm" : void 0,
                borderRightRadius: _v1 === _v46.length - 1 ? "sm" : void 0,
                overflow: "hidden",
                style: {
                  backgroundImage: `url(${_v19.url})`,
                  backgroundSize: `${100 * _v19.columns}% ${100 * _v23}%`,
                  backgroundPosition: `${_v5}% ${_v23 <= 1 ? 0 : _v4 / (_v23 - 1) * 100}%`,
                  aspectRatio: _v2,
                  outline: "none",
                  ...(_v1 === _v24 && {
                    zIndex: 1,
                    overflow: "visible"
                  })
                },
                onClick: () => {
                  let _v0 = _v46[_v1] * _v12;
                  _v7.current?.seekTo(_v0), _v11(_v0), _v4(_v0);
                },
                children: _v1 === _v24 && (0, _v1.jsx)(_v3.Box, {
                  position: "absolute",
                  inset: 0,
                  borderRadius: "sm",
                  pointerEvents: "none",
                  style: {
                    boxShadow: "0 0 0 2px var(--vimeo-colors-surface), 0 0 0 4px var(--vimeo-colors-text-primary)"
                  }
                })
              }, _v1);
            })
          }), (0, _v1.jsxs)(_v7.Flex, {
            justifyContent: "space-between",
            alignItems: "center",
            children: [(0, _v1.jsx)(_v19.Text, {
              variant: "body-xs",
              color: "text-secondary",
              children: (0, _v22.translate)({
                singular: "Drag to choose a frame",
                dictionary: {
                  es: {
                    singular: "Arrastra para elegir un fotograma"
                  },
                  "de-DE": {
                    singular: "Ziehen, um ein Einzelbild auszuwählen"
                  },
                  "fr-FR": {
                    singular: "Faites glisser pour choisir une image"
                  },
                  "ja-JP": {
                    singular: "フレームを選択するにはドラッグしてください"
                  },
                  "ko-KR": {
                    singular: "프레임을 선택하려면 드래그하세요"
                  },
                  "pt-BR": {
                    singular: "Arraste para escolher um quadro"
                  },
                  "zh-CN": {
                    singular: "拖动以选择帧"
                  }
                }
              })
            }), (0, _v1.jsxs)(_v3.Box, {
              display: {
                base: "none",
                md: "grid"
              },
              gridTemplateColumns: "auto auto",
              columnGap: "xs",
              rowGap: (0, _v44.rem)(2),
              alignItems: "center",
              children: [(0, _v1.jsx)(_v7.Flex, {
                gap: "xs",
                justifyContent: "flex-end",
                alignItems: "center",
                children: ["←", "→"].map(_v0 => (0, _v1.jsx)(_v48, {
                  children: _v0
                }, _v0))
              }), (0, _v1.jsx)(_v19.Text, {
                variant: "body-xs",
                color: "text-secondary",
                children: (0, _v22.translate)({
                  singular: "step frame",
                  dictionary: {
                    es: {
                      singular: "paso de fotograma"
                    },
                    "de-DE": {
                      singular: "nächste Filmbild"
                    },
                    "fr-FR": {
                      singular: "avancez image"
                    },
                    "ja-JP": {
                      singular: "ステップ フレーム"
                    },
                    "ko-KR": {
                      singular: "프레임 단위"
                    },
                    "pt-BR": {
                      singular: "passo de quadro"
                    },
                    "zh-CN": {
                      singular: "逐帧"
                    }
                  }
                })
              }), (0, _v1.jsxs)(_v7.Flex, {
                gap: "xs",
                justifyContent: "flex-end",
                alignItems: "center",
                children: [(0, _v1.jsx)(_v48, {
                  children: "⇧"
                }), (0, _v1.jsx)(_v19.Text, {
                  variant: "body-xs",
                  color: "text-secondary",
                  children: "+"
                }), ["←", "→"].map(_v0 => (0, _v1.jsx)(_v48, {
                  children: _v0
                }, _v0))]
              }), (0, _v1.jsx)(_v19.Text, {
                variant: "body-xs",
                color: "text-secondary",
                children: (0, _v22.translate)({
                  singular: "step 1s",
                  dictionary: {
                    es: {
                      singular: "paso 1s"
                    },
                    "de-DE": {
                      singular: "nächste Sekunde"
                    },
                    "fr-FR": {
                      singular: "avancez 1s"
                    },
                    "ja-JP": {
                      singular: "ステップ 1秒"
                    },
                    "ko-KR": {
                      singular: "1초 단위"
                    },
                    "pt-BR": {
                      singular: "passo 1s"
                    },
                    "zh-CN": {
                      singular: "步进 1 秒"
                    }
                  }
                })
              })]
            })]
          }), _v5 && (0, _v1.jsx)(_v39.Alert, {
            status: "error",
            children: (0, _v1.jsx)(_v40.AlertDescription, {
              fontSize: "body-sm",
              children: (0, _v22.translate)({
                singular: "Could not save thumbnail",
                dictionary: {
                  es: {
                    singular: "No se pudo guardar la miniatura"
                  },
                  "de-DE": {
                    singular: "Das Thumbnail konnte nicht gespeichert werden"
                  },
                  "fr-FR": {
                    singular: "Impossible d'enregistrer la miniature"
                  },
                  "ja-JP": {
                    singular: "サムネイルを保存できませんでした"
                  },
                  "ko-KR": {
                    singular: "섬네일을 저장할 수 없습니다"
                  },
                  "pt-BR": {
                    singular: "Não foi possível salvar a miniatura"
                  },
                  "zh-CN": {
                    singular: "无法保存缩略图"
                  }
                }
              })
            })
          })]
        })]
      }) : (0, _v1.jsx)(_v7.Flex, {
        justifyContent: "center",
        alignItems: "center",
        py: "xl",
        children: (0, _v1.jsx)(_v26.Spinner, {
          size: "lg"
        })
      })
    });
  }
  var _v50 = _v0.i(0);
  function _v51() {
    let {
        uploadFile: _v0,
        isUploading: _v1,
        uploadError: _v2,
        fileTooLarge: _v3
      } = _v37(),
      _v4 = (0, _v2.useRef)(null);
    return (0, _v1.jsx)(_v27.TabPanel, {
      children: (0, _v1.jsxs)(_v7.Flex, {
        direction: "column",
        alignItems: "center",
        gap: "md",
        paddingY: "lg",
        children: [_v1 ? (0, _v1.jsx)(_v26.Spinner, {
          size: "xl"
        }) : (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v50.Upload, {
            boxSize: "md"
          }), (0, _v1.jsx)(_v19.Text, {
            variant: "heading-md",
            color: _v2 ? "text-error" : void 0,
            children: _v3 ? (0, _v22.translate)({
              singular: "File exceeds 10MB limit",
              dictionary: {
                es: {
                  singular: "El archivo excede el límite de 10 MB"
                },
                "de-DE": {
                  singular: "Datei überschreitet das 10 MB-Limit"
                },
                "fr-FR": {
                  singular: "Le fichier dépasse la limite de 10 Mo"
                },
                "ja-JP": {
                  singular: "ファイルが10MBの上限を超えています"
                },
                "ko-KR": {
                  singular: "파일이 10MB 제한을 초과합니다"
                },
                "pt-BR": {
                  singular: "O arquivo excede o limite de 10MB"
                },
                "zh-CN": {
                  singular: "文件超过10MB限制"
                }
              }
            }) : _v2 ? (0, _v22.translate)({
              singular: "Upload failed",
              dictionary: {
                es: {
                  singular: "Error en la subida"
                },
                "de-DE": {
                  singular: "Hochladen ist fehlgeschlagen"
                },
                "fr-FR": {
                  singular: "Échec de la mise en ligne"
                },
                "ja-JP": {
                  singular: "アップロードが失敗しました"
                },
                "ko-KR": {
                  singular: "업로드 실패"
                },
                "pt-BR": {
                  singular: "Falha no carregamento"
                },
                "zh-CN": {
                  singular: "上传失败"
                }
              }
            }) : (0, _v22.translate)({
              singular: "Select a file to upload",
              dictionary: {
                es: {
                  singular: "Seleccione un archivo para subir"
                },
                "de-DE": {
                  singular: "Wählen Sie eine Datei zum Hochladen aus"
                },
                "fr-FR": {
                  singular: "Sélectionnez un fichier à téléverser"
                },
                "ja-JP": {
                  singular: "アップロードするファイルを選択"
                },
                "ko-KR": {
                  singular: "업로드할 파일을 선택하세요"
                },
                "pt-BR": {
                  singular: "Selecione um arquivo para enviar"
                },
                "zh-CN": {
                  singular: "选择要上传的文件"
                }
              }
            })
          }), !_v2 && (0, _v1.jsx)(_v19.Text, {
            variant: "body-md",
            color: "text-secondary",
            children: (0, _v22.translate)({
              singular: "JPG, PNG or WEBP. Max 10MB",
              dictionary: {
                es: {
                  singular: "JPG, PNG o WEBP. Máx. 10MB"
                },
                "de-DE": {
                  singular: "JPG, PNG oder WEBP. Max. 10 MB"
                },
                "fr-FR": {
                  singular: "JPG, PNG ou WEBP. Max 10MB"
                },
                "ja-JP": {
                  singular: "JPG、PNG、またはWEBP。最大10MB"
                },
                "ko-KR": {
                  singular: "JPG, PNG 또는 WEBP. 최대 10MB"
                },
                "pt-BR": {
                  singular: "JPG, PNG ou WEBP. Máx 10MB"
                },
                "zh-CN": {
                  singular: "JPG、PNG 或 WEBP。最大 10MB"
                }
              }
            })
          })]
        }), (0, _v1.jsx)("input", {
          ref: _v4,
          type: "file",
          accept: _v34.THUMBNAIL_SUPPORTED_IMAGE_INPUTS,
          style: {
            display: "none"
          },
          onChange: _v0 => {
            _v0.target.files?.length && (_v0(_v0.target.files), _v0.target.value = "");
          }
        }), !_v1 && (0, _v1.jsx)(_v4.Button, {
          variant: "secondary",
          onClick: () => _v4.current?.click(),
          children: (0, _v22.translate)({
            singular: "Browse files",
            dictionary: {
              es: {
                singular: "Explorar archivos"
              },
              "de-DE": {
                singular: "Dateien durchsuchen"
              },
              "fr-FR": {
                singular: "Parcourir les fichiers"
              },
              "ja-JP": {
                singular: "ファイルを閲覧"
              },
              "ko-KR": {
                singular: "파일 찾아보기"
              },
              "pt-BR": {
                singular: "Navegar nos arquivos"
              },
              "zh-CN": {
                singular: "浏览文件"
              }
            }
          })
        })]
      })
    });
  }
  function _v52({
    description: _v0,
    showChooseExisting: _v1,
    ..._v2
  }) {
    let _v3 = (0, _v21.useIsMobile)(),
      {
        onClose: _v4,
        onSave: _v5,
        isSaving: _v6,
        savedPendingId: _v7,
        pendingTimecode: _v8,
        selectFromVideoPlayerRef: _v9,
        saveFromTimecode: _v10
      } = _v37(),
      [_v11, _v12] = (0, _v2.useState)(0),
      _v13 = ["select-from-video", "upload-image", "saved"][_v11],
      _v14 = "select-from-video" === _v13 && null !== _v8 || "saved" === _v13 && null !== _v7,
      _v15 = _v1 ? (0, _v22.translate)({
        singular: "Change thumbnail",
        dictionary: {
          es: {
            singular: "Cambiar miniatura"
          },
          "de-DE": {
            singular: "Vorschaubild ändern"
          },
          "fr-FR": {
            singular: "Modifier la vignette"
          },
          "ja-JP": {
            singular: "サムネイルを変更"
          },
          "ko-KR": {
            singular: "썸네일 변경"
          },
          "pt-BR": {
            singular: "Alterar miniatura"
          },
          "zh-CN": {
            singular: "更改缩略图"
          }
        }
      }) : (0, _v22.translate)({
        singular: "Add thumbnail",
        dictionary: {
          es: {
            singular: "Agregar miniatura"
          },
          "de-DE": {
            singular: "Vorschaubild hinzufügen"
          },
          "fr-FR": {
            singular: "Ajouter une vignette"
          },
          "ja-JP": {
            singular: "サムネイルを追加"
          },
          "ko-KR": {
            singular: "썸네일 추가"
          },
          "pt-BR": {
            singular: "Adicionar miniatura"
          },
          "zh-CN": {
            singular: "添加缩略图"
          }
        }
      }),
      _v16 = (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsxs)(_v13.ModalHeader, {
          children: [(0, _v1.jsxs)(_v7.Flex, {
            direction: "column",
            gap: "xs",
            children: [(0, _v1.jsx)(_v19.Text, {
              variant: "heading-md",
              children: _v15
            }), _v0 ? (0, _v1.jsx)(_v19.Text, {
              maxW: "80%",
              variant: "body-sm",
              color: "text-secondary",
              children: _v0
            }) : null]
          }), (0, _v1.jsx)(_v10.ModalCloseButton, {})]
        }), (0, _v1.jsx)(_v9.ModalBody, {
          children: (0, _v1.jsxs)(_v16.Tabs, {
            w: "100%",
            variant: "soft",
            isLazy: !0,
            lazyBehavior: "keepMounted",
            defaultIndex: 0,
            onChange: _v0 => {
              "select-from-video" === _v13 && _v9.current?.pause(), _v12(_v0);
            },
            children: [(0, _v1.jsx)(_v3.Box, {
              position: "sticky",
              top: 0,
              zIndex: 1,
              bg: "surface",
              children: (0, _v1.jsxs)(_v17.TabList, {
                children: [(0, _v1.jsx)(_v15.Tab, {
                  whiteSpace: "normal",
                  value: "select-from-video",
                  isDisabled: _v6,
                  children: (0, _v22.translate)({
                    singular: "Select from video",
                    dictionary: {
                      es: {
                        singular: "Seleccionar del video"
                      },
                      "de-DE": {
                        singular: "Aus dem Video auswählen"
                      },
                      "fr-FR": {
                        singular: "Sélectionner dans la vidéo"
                      },
                      "ja-JP": {
                        singular: "動画から選択"
                      },
                      "ko-KR": {
                        singular: "동영상에서 선택"
                      },
                      "pt-BR": {
                        singular: "Selecionar a partir do vídeo"
                      },
                      "zh-CN": {
                        singular: "从视频中选择"
                      }
                    }
                  })
                }), (0, _v1.jsx)(_v15.Tab, {
                  whiteSpace: "normal",
                  value: "upload-image",
                  isDisabled: _v6,
                  children: (0, _v22.translate)({
                    singular: "Upload image",
                    dictionary: {
                      es: {
                        singular: "Subir imagen"
                      },
                      "de-DE": {
                        singular: "Bild hochladen"
                      },
                      "fr-FR": {
                        singular: "Mettre en ligne une image"
                      },
                      "ja-JP": {
                        singular: "画像をアップロードする"
                      },
                      "ko-KR": {
                        singular: "이미지 업로드"
                      },
                      "pt-BR": {
                        singular: "Carregar Imagem"
                      },
                      "zh-CN": {
                        singular: "上传图片"
                      }
                    }
                  })
                }), _v1 ? (0, _v1.jsx)(_v15.Tab, {
                  whiteSpace: "normal",
                  value: "saved",
                  isDisabled: _v6,
                  children: (0, _v22.translate)({
                    singular: "Saved",
                    dictionary: {
                      es: {
                        singular: "Guardado"
                      },
                      "de-DE": {
                        singular: "Gespeichert"
                      },
                      "fr-FR": {
                        singular: "Enregistrée"
                      },
                      "ja-JP": {
                        singular: "保存しました"
                      },
                      "ko-KR": {
                        singular: "저장됨"
                      },
                      "pt-BR": {
                        singular: "Salvo"
                      },
                      "zh-CN": {
                        singular: "已保存"
                      }
                    }
                  })
                }) : null, (0, _v1.jsx)(_v16.TabIndicator, {})]
              })
            }), (0, _v1.jsxs)(_v18.TabPanels, {
              children: [(0, _v1.jsx)(_v49, {}), (0, _v1.jsx)(_v51, {}), _v1 ? (0, _v1.jsx)(_v38, {}) : null]
            })]
          })
        }), "upload-image" !== _v13 && (0, _v1.jsx)(_v12.ModalFooter, {
          borderTopWidth: "1px",
          borderColor: "stroke",
          children: (0, _v1.jsxs)(_v7.Flex, {
            w: "100%",
            justifyContent: "flex-end",
            gap: "md",
            children: [(0, _v1.jsx)(_v4.Button, {
              type: "button",
              variant: "ghost",
              size: "md",
              onClick: _v4,
              children: (0, _v22.translate)({
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
            }), (0, _v1.jsx)(_v4.Button, {
              type: "button",
              variant: "primary",
              size: "md",
              isDisabled: !_v14 || _v6,
              isLoading: _v6,
              onClick: () => {
                "select-from-video" === _v13 && null !== _v8 ? _v10(_v8) : null !== _v7 && _v5(_v7);
              },
              children: (0, _v22.translate)({
                singular: "Save",
                dictionary: {
                  es: {
                    singular: "Guardar"
                  },
                  "de-DE": {
                    singular: "Speichern"
                  },
                  "fr-FR": {
                    singular: "Enregistrer"
                  },
                  "ja-JP": {
                    singular: "保存"
                  },
                  "ko-KR": {
                    singular: "저장"
                  },
                  "pt-BR": {
                    singular: "Salvar"
                  },
                  "zh-CN": {
                    singular: "保存"
                  }
                }
              })
            })]
          })
        })]
      });
    return _v3 ? (0, _v1.jsxs)(_v5.Drawer, {
      isOpen: !0,
      onClose: _v4,
      placement: "bottom",
      children: [(0, _v1.jsx)(_v14.ModalOverlay, {}), (0, _v1.jsx)(_v6.DrawerContent, {
        children: _v16
      })]
    }) : (0, _v1.jsxs)(_v8.Modal, {
      isOpen: !0,
      onClose: _v4,
      children: [(0, _v1.jsx)(_v14.ModalOverlay, {}), (0, _v1.jsx)(_v11.ModalContent, {
        minW: _v20.bokehTheme.breakpoints.sm,
        maxW: "40em",
        ..._v2,
        children: _v16
      })]
    });
  }
  _v0.s(["ThumbnailChangeModal", 0, function ({
    clipId: _v0,
    description: _v1,
    isOpen: _v2,
    showChooseExisting: _v3,
    onClose: _v4,
    onSaveSuccess: _v5,
    ..._v6
  }) {
    return _v2 ? (0, _v1.jsx)(_v23.PlayerContextProvider, {
      assetUrls: window.playerAssetUrls,
      type: _v24.PlayerType.VimeoPlayer,
      children: (0, _v1.jsx)(_v36, {
        clipId: _v0,
        onSaveSuccess: _v5,
        onClose: _v4,
        children: (0, _v1.jsx)(_v52, {
          description: _v1,
          showChooseExisting: _v3,
          ..._v6
        })
      })
    }) : null;
  }], 0);
}