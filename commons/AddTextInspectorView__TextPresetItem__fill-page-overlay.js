{
  "use strict";

  _v0.s(["default", () => _v106], 0);
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
    _v14 = _v0.i(0);
  _v0.s(["AddTextInspectorView", () => _v105, "TextPresetItem", () => _v103], 0);
  var _v15 = _v0.i(0),
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
    _v41 = _v0.i(0);
  let _v42 = () => (0, _v1.jsx)(_v41.Loader, {
      size: "sm",
      backgroundColor: "fill-page-overlay",
      color: "#fff"
    }),
    _v43 = (0, _v2.forwardRef)(({
      videoUrl: _v0,
      imageUrl: _v1,
      videoStartTime: _v2,
      videoEndTime: _v3,
      volume: _v4 = .75,
      muted: _v5 = !0,
      playOnHover: _v6 = !0,
      delay: _v7 = 0,
      style: _v8,
      preload: _v9 = "metadata",
      alignToCenter: _v10 = !1,
      isCrossOrigin: _v11 = !1,
      onPlay: _v12,
      onPlaying: _v13,
      onCanPlay: _v14,
      onPause: _v15,
      onEnded: _v16,
      onTimeUpdate: _v17,
      onVolumeChange: _v18,
      onWaiting: _v19,
      onLoadedData: _v20,
      onError: _v21,
      onLoad: _v22,
      onMouseDown: _v23,
      onMouseUp: _v24
    }, _v25) => {
      let _v26 = (0, _v2.useRef)(null),
        _v27 = (0, _v2.useRef)(void 0),
        _v28 = (0, _v2.useRef)(void 0),
        [_v29, _v30] = (0, _v2.useState)(!0),
        [_v31, _v32] = (0, _v2.useState)(!0),
        [_v33, _v34] = (0, _v2.useState)(!1),
        _v35 = (0, _v2.useCallback)(_v0 => {
          _v25 && ("function" == typeof _v25 ? _v25(_v0) : _v25.current = _v0), _v26.current = _v0;
        }, [_v25]);
      return (0, _v2.useEffect)(() => {
        _v26.current && _v2 && (_v26.current.currentTime = _v2);
      }, [_v2]), (0, _v2.useEffect)(() => () => {
        clearInterval(_v27.current), clearTimeout(_v28.current);
      }, []), (0, _v2.useEffect)(() => {
        _v1 && _v11 && (0, _v40.fetchToReloadCache)(_v1);
      }, [_v1, _v11]), (0, _v1.jsxs)(_v38.MediaViewContainer, {
        onMouseOver: () => {
          if (_v34(!0), !_v6 || !_v26.current) return;
          let _v0 = _v2 ?? 0,
            _v1 = _v3 ? Math.min(_v3, _v26.current.duration) : _v26.current.duration,
            _v2 = _v0 + (_v1 - _v0) / 3;
          isNaN(_v2) || (_v26.current.currentTime = _v2), clearTimeout(_v28.current), _v28.current = setTimeout(() => {
            _v26.current && (clearInterval(_v27.current), _v27.current = setInterval(() => {
              if (!_v26.current) return;
              let _v0 = Math.max(_v0, (_v26.current.currentTime + 1 / _v39.DEFAULT_FPS) % _v1);
              Number.isFinite(_v0) && (_v26.current.currentTime = _v0);
            }, 0 / _v39.DEFAULT_FPS));
          }, _v7);
        },
        onMouseLeave: () => {
          _v34(!1), _v6 && (clearInterval(_v27.current), clearTimeout(_v28.current));
        },
        onMouseDown: _v23,
        onMouseUp: _v24,
        children: [_v0 && (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v38.VideoElement, {
            alignToCenter: _v10,
            src: _v0,
            muted: _v5,
            volume: _v4,
            loop: !0,
            preload: _v9,
            ref: _v35,
            onError: _v21,
            onLoadedData: _v20,
            onTimeUpdate: _v17,
            onCanPlay: () => {
              _v32(!1), _v14?.();
            },
            onEnded: _v16,
            onWaiting: () => {
              _v32(!0), _v19?.();
            },
            onPlaying: _v13,
            onPlay: _v12,
            onPause: _v15,
            onVolumeChange: _v18,
            ...(_v11 && {
              crossOrigin: "anonymous"
            }),
            style: _v8,
            "data-segment-playing": _v33
          }), _v31 && (_v2 ?? _v33) && (0, _v1.jsx)(_v42, {})]
        }), _v1 && !(_v0 && _v33) && (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v38.ImageElement, {
            src: _v1,
            onError: _v21,
            onLoad: () => {
              _v30(!1), _v22 && _v22();
            },
            alignToCenter: _v10,
            style: _v8,
            ...(_v11 && {
              crossOrigin: "anonymous"
            })
          }), _v29 && (0, _v1.jsx)(_v42, {})]
        })]
      });
    });
  _v0.s(["MediaViewLoader", 0, _v42, "default", 0, _v43], 0);
  let _v44 = {
      variant: "body-xs",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      paddingLeft: "2px"
    },
    _v45 = {
      position: "absolute",
      right: "4px",
      bottom: "4px",
      height: "14px",
      padding: "0 4px",
      pointerEvents: "none",
      borderRadius: "4px"
    },
    _v46 = (0, _v2.memo)(function ({
      id: _v0,
      videoUrl: _v1,
      imageUrl: _v2,
      videoStartTime: _v3,
      videoEndTime: _v4,
      width: _v5,
      gridStyleType: _v6,
      overlay: _v7,
      duration: _v8,
      title: _v9,
      menuData: _v10,
      icon: _v11,
      subtitle: _v12,
      style: _v13,
      testid: _v14,
      draggableData: _v15,
      expandedItemData: _v16,
      isActive: _v17 = !1,
      alignToCenter: _v18 = !1,
      blurBackground: _v19 = !0,
      isCrossOrigin: _v20 = !1,
      onClick: _v21,
      onHover: _v22,
      onMouseDown: _v23,
      onDelete: _v24,
      onExpand: _v25,
      isShowPlusButton: _v26,
      deleteTooltip: _v27,
      backgroundColor: _v28,
      previewDelay: _v29
    }) {
      let _v30 = (0, _v2.useRef)(!1),
        {
          colorMode: _v31
        } = (0, _v27.useColorMode)(),
        [_v32, _v33, _v34, _v35, _v36] = (0, _v28.useToken)("colors", ["text-primary", "surface", "fill-blur", "check-radio-stroke", "input-stroke-hover"]),
        [_v37, _v38] = (0, _v2.useState)(!1),
        _v39 = (0, _v2.useCallback)(_v0 => {
          _v0 && (_v30.current = !1);
        }, []),
        _v40 = {
          onMouseDown: () => {
            _v30.current = !0, _v23 && _v23(_v0);
          },
          onMouseUp: () => {
            _v30.current && _v21 && _v21(_v0);
          }
        };
      return (0, _v1.jsxs)(_v35.default, {
        width: _v5,
        id: _v0,
        title: _v9,
        draggableData: _v15,
        onIsDraggingChange: _v39,
        children: [(0, _v1.jsxs)(_v34.MediaContainer, {
          isActive: _v17 || !1,
          isBokehDarkMode: "dark" === _v31,
          colorTokens: {
            textPrimaryColor: _v32,
            surfaceColor: _v33,
            fillBlurColor: _v34,
            checkRadioStroke: _v35,
            strokeColor: _v36,
            backgroundColor: _v28
          },
          gridStyleType: _v6,
          "data-id": _v0,
          "data-name": _v9,
          "data-testid": `${_v14}-grid-box`,
          "data-no-dnd": !0,
          onMouseOver: () => {
            _v38(!0), _v22 && _v22(_v0);
          },
          onMouseLeave: () => _v38(!1),
          children: [(_v2 || _v1) && (0, _v1.jsxs)(_v20.Flex, {
            width: "100%",
            height: "100%",
            position: "relative",
            justifyContent: "center",
            alignContent: "center",
            "data-testid": "media-view-wrap",
            children: [_v19 && !_v20 && (0, _v1.jsxs)(_v1.Fragment, {
              children: [_v2 && (0, _v1.jsx)(_v20.Flex, {
                width: "100%",
                height: "100%",
                backgroundImage: `url(${_v2})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center center",
                position: "absolute",
                borderRadius: "8px"
              }), (0, _v1.jsx)(_v20.Flex, {
                width: "100%",
                height: "100%",
                position: "absolute",
                backgroundColor: "fill-component-hover",
                backdropFilter: "blur(40px)",
                borderRadius: "8px",
                overflow: "hidden"
              })]
            }), (0, _v1.jsx)(_v43, {
              videoUrl: _v1,
              imageUrl: _v2,
              videoStartTime: _v3,
              videoEndTime: _v4,
              delay: _v29 ?? 300,
              alignToCenter: _v18,
              style: _v13,
              isCrossOrigin: _v20,
              ..._v40
            })]
          }), _v24 && (_v37 || _v17) && (0, _v1.jsx)(_v26.Tooltip, {
            placement: "top",
            label: _v27,
            isDisabled: !_v27,
            children: (0, _v1.jsx)(_v21.IconButton, {
              variant: "blur",
              "data-testid": `${_v14}-inspector-content-grid-delete-button`,
              size: "xs",
              onClick: () => {
                _v24(_v0);
              },
              "aria-label": `${_v14}-inspector-content-grid-delete-button`,
              icon: (0, _v1.jsx)(_v32.TrashBin, {}),
              position: "absolute",
              right: "4px",
              top: "4px",
              transition: "opacity 0.2s linear",
              zIndex: "1"
            })
          }), _v25 && _v16 && (_v37 || _v17) && (0, _v1.jsx)(_v26.Tooltip, {
            ...(_v16.type === _v36.ExpandType.TEXT_ANIMATIONS && {
              isDisabled: !0
            }),
            label: (0, _v33.translate)({
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
            children: (0, _v1.jsx)(_v21.IconButton, {
              variant: "blur",
              size: "xs",
              onClick: () => _v25(_v16),
              "aria-label": `${_v14}-inspector-content-grid-expand-button`,
              "data-testid": `${_v14}-inspector-content-grid-expand-button`,
              icon: _v16.type === _v36.ExpandType.TEXT_ANIMATIONS ? (0, _v1.jsx)(_v31.FiltersLevers, {}) : (0, _v1.jsx)(_v30.ExpandArrowsAlt, {}),
              position: "absolute",
              right: "4px",
              top: "4px",
              transition: "opacity 0.2s linear",
              zIndex: "1"
            })
          }), _v26 && (_v37 || _v17) && (0, _v1.jsx)(_v34.AddButtonClickArea, {
            onClick: _v21 && (() => _v21(_v0)),
            children: (0, _v1.jsx)(_v26.Tooltip, {
              label: (0, _v33.translate)({
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
              children: (0, _v1.jsx)(_v21.IconButton, {
                "aria-label": "box-add-button",
                icon: (0, _v1.jsx)(_v18.Plus, {}),
                size: "xs",
                "data-testid": "box-add-button",
                variant: "blur"
              })
            })
          }), _v7 && (0, _v1.jsx)(_v34.Overlay, {
            ..._v40,
            children: _v7
          }), _v8 ? (0, _v1.jsx)(_v19.Center, {
            sx: _v45,
            as: "span",
            backgroundColor: "fill-page-overlay",
            "data-testid": `${_v14}-inspector-content-grid-item-duration`,
            children: (0, _v1.jsx)(_v17.Text, {
              variant: "body-xs",
              color: "white",
              children: (0, _v37.timeFormatHHMMSS)(_v8)
            })
          }) : null]
        }), (_v11 || _v9) && (0, _v1.jsxs)(_v34.BoxFooter, {
          children: [(0, _v1.jsxs)(_v34.BoxText, {
            onClick: _v21 && (() => _v21(_v0)),
            children: [(_v11 || _v9) && (0, _v1.jsxs)(_v34.TitleContainer, {
              children: [_v11 && (0, _v1.jsx)(_v34.Icon, {
                children: _v11
              }), _v9 && (0, _v1.jsx)(_v17.Text, {
                ..._v44,
                color: "text-primary",
                "data-testid": "grid-box-title",
                title: _v9,
                children: _v9
              })]
            }), _v12 && (0, _v1.jsx)(_v17.Text, {
              ..._v44,
              color: "text-tertiary",
              "data-testid": "grid-box-subtitle",
              children: _v12
            })]
          }), _v10 && (0, _v1.jsxs)(_v22.Menu, {
            isLazy: !0,
            children: [(0, _v1.jsx)(_v23.MenuButton, {
              as: _v21.IconButton,
              "aria-label": "dots-menu-button",
              size: "xs",
              variant: "blur",
              icon: (0, _v1.jsx)(_v29.EllipsisH, {})
            }), (0, _v1.jsx)(_v25.MenuList, {
              children: _v10.map(_v0 => (0, _v1.jsx)(_v24.MenuItem, {
                onClick: _v0.onClick,
                "data-testid": `menu-item-${_v0.label.toLowerCase().replaceAll(" ", "-")}`,
                color: "negative" === _v0.status ? "status-destructive-primary" : "",
                children: _v0.label
              }, _v0.label))
            })]
          })]
        })]
      });
    });
  _v0.s(["default", 0, _v46], 0), _v0.s(["Box", 0, _v46], 0);
  var _v47 = _v0.i(0),
    _v48 = _v0.i(0),
    _v49 = _v0.i(0);
  let _v50 = _v49.MARGIN - 8 - 4 - 4,
    _v51 = _v15.default.div.withConfig({
      displayName: "Grid.style__GridContainer",
      componentId: "sc-c96b971f-0"
    })`
  width: 100%;
  height: 100%;
`,
    _v52 = _v15.default.div.withConfig({
      displayName: "Grid.style__GridRowElement",
      componentId: "sc-c96b971f-1"
    })`
  display: flex;
  gap: ${8}px;
  padding-bottom: 8px;
`,
    _v53 = _v15.keyframes`
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  `,
    _v54 = _v15.default.div.withConfig({
      displayName: "ExpandedView.style__ExpandedViewContainer",
      componentId: "sc-f92b136a-0"
    })`
  position: fixed;
  top: 0px;
  display: flex;
  flex-direction: column;
  z-index: 30;
  opacity: 0;
  ${({
      position: _v0
    }) => {
      if (_v0) return _v15.css`
        left: ${_v0.right + 8}px;
        transform: translateY(${_v0.top}px);
        opacity: 1;
      `;
    }}

  min-width: ${({
      width: _v0
    }) => _v0 ?? 252}px;

  padding: ${({
      type: _v0
    }) => _v0 === _v36.ExpandType.MEDIA ? 16 : 12}px;
  border-radius: ${8}px;
  background-color: var(--vimeo-colors-surface);
  box-shadow:
    0px 10px 6.8px -4.8px rgba(0, 0, 0, 0.09),
    0px 0px 10.8px 0.7px rgba(0, 0, 0, 0.06);
  transition: transform 0.1s linear;
  animation: ${_v53} 0.25s linear;
`;
  var _v55 = _v0.i(0);
  let _v56 = (_v0, _v1, _v2) => {
    let _v3 = document.querySelector(`[data-id="${_v0}"]`)?.getBoundingClientRect(),
      _v4 = document.querySelector("[data-testid=expanded-view-container]")?.getBoundingClientRect(),
      _v5 = document.querySelector("[data-testid=virtuoso-scroller]")?.getBoundingClientRect();
    if (!_v5 || !_v3) return null;
    let _v6 = _v4?.height || 398,
      _v7 = _v6 - (_v3.bottom - _v3.top);
    if (_v3.top > _v5.bottom || _v3.bottom < _v5.top) return null;
    let _v8 = {
        right: _v3.right,
        top: _v3.top,
        bottom: _v3.bottom,
        isPinnedToTop: _v1
      },
      _v9 = !1;
    return _v2 ? _v3.top + _v6 >= _v5.bottom && (_v8.top = _v3?.top - _v7, _v8.bottom = _v3?.bottom, _v8.isPinnedToTop = !1, _v9 = !0) : _v1 || (_v8.top = _v3?.top - _v7, _v9 = !0), (!_v9 && _v3.top + _v6 >= _v5.bottom || !_v1 && _v3.bottom >= _v5.bottom) && (_v8.top = _v5.bottom - _v6, _v3.bottom >= _v5.bottom && (_v8.isPinnedToTop = !1)), (_v3.top <= _v5.top && _v6 <= _v5.height || !_v1 && _v3.top - _v7 <= _v5.top && _v6 <= _v5.height) && (_v8.top = _v5.top, _v3.top <= _v5.top && (_v8.isPinnedToTop = !0)), _v8;
  };
  var _v57 = _v0.i(0),
    _v58 = _v0.i(0);
  let _v59 = _v15.default.img.withConfig({
      displayName: "MediaExpandedContent.style__ImagePreview",
      componentId: "sc-335fbeee-0"
    })`
  height: 100%;
  border-radius: 6px;
`,
    _v60 = _v15.default.video.withConfig({
      displayName: "MediaExpandedContent.style__VideoPreviewComponent",
      componentId: "sc-335fbeee-1"
    })`
  position: relative;
  left: 0;
  top: 0;
  opacity: 1;
  width: 100%;
  height: 100%;
`,
    _v61 = _v15.default.div.withConfig({
      displayName: "MediaExpandedContent.style__MediaContainer",
      componentId: "sc-335fbeee-2"
    })`
  display: flex;
  width: ${({
      width: _v0
    }) => `${_v0}px`};
  height: ${({
      height: _v0
    }) => `${_v0}px`};
  margin-bottom: 12px;
  align-self: center;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  overflow: hidden;
  position: relative;
`,
    _v62 = _v15.default.div.withConfig({
      displayName: "MediaExpandedContent.style__VideoBorder",
      componentId: "sc-335fbeee-3"
    })`
  width: ${({
      width: _v0
    }) => `${_v0}px`};
  height: ${({
      height: _v0
    }) => `${_v0}px`};
  border-radius: 6px;
  overflow: hidden;
  position: relative;
`,
    _v63 = _v15.default.div.withConfig({
      displayName: "MediaExpandedContent.style__MediaInformation",
      componentId: "sc-335fbeee-4"
    })`
  display: inline-block;
`,
    _v64 = _v15.default.div.withConfig({
      displayName: "MediaExpandedContent.style__Footer",
      componentId: "sc-335fbeee-5"
    })`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`,
    _v65 = _v15.default.div.withConfig({
      displayName: "MediaExpandedContent.style__MediaContent",
      componentId: "sc-335fbeee-6"
    })`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
  align-items: flex-start;
`,
    _v66 = _v15.default.div.withConfig({
      displayName: "MediaExpandedContent.style__MediaExpandedDescription",
      componentId: "sc-335fbeee-7"
    })`
  ${_v58.ScrollerCSS};

  font-size: 12px;
  max-height: 140px;
  padding-right: 5px;
  ${({
      isShowMore: _v0
    }) => _v0 ? _v15.css`
        overflow-y: scroll;
      ` : _v15.css`
        overflow: hidden;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        display: -webkit-box;
      `}
`,
    _v67 = ({
      src: _v0,
      setIsLoading: _v1,
      onCanPlay: _v2,
      startTime: _v3,
      endTime: _v4,
      isCrossOrigin: _v5
    }) => {
      let _v6 = (0, _v2.useRef)(null);
      return (0, _v2.useEffect)(() => {
        let _v0 = () => {
            _v1(!1), _v2 && _v2();
          },
          _v1 = () => {
            _v6.current && void 0 !== _v3 && void 0 !== _v4 && _v6.current.currentTime >= _v4 && (_v6.current.currentTime = _v3);
          },
          _v2 = _v6.current;
        return _v2 && (_v2.currentTime = _v3 || 0, _v2.addEventListener("canplay", _v0), _v2.addEventListener("timeupdate", _v1)), () => {
          _v2 && (_v2.removeEventListener("canplay", _v0), _v2.removeEventListener("timeupdate", _v1));
        };
      }, [_v2, _v1, _v3, _v4]), (0, _v1.jsx)(_v60, {
        ref: _v6,
        src: _v0,
        autoPlay: !0,
        loop: !0,
        muted: !0,
        preload: "auto",
        controls: void 0 === _v3 || void 0 === _v4,
        disablePictureInPicture: !0,
        controlsList: "nofullscreen nodownload noremoteplayback noplaybackrate",
        ...(_v5 && {
          crossOrigin: "anonymous"
        })
      });
    },
    _v68 = "Invalid Date";
  var _v69 = _v0.i(0),
    _v70 = _v0.i(0),
    _v71 = _v0.i(0);
  let _v72 = ({
    expandedItem: _v0,
    onDelete: _v1,
    onCTA: _v2,
    CTAText: _v3,
    onClose: _v4,
    isLoading: _v5 = !1,
    handleScroll: _v6
  }) => {
    let {
        width: _v7,
        height: _v8,
        title: _v9,
        date: _v10,
        imageUrl: _v11,
        videoUrl: _v12,
        id: _v13,
        orientation: _v14,
        isCrossOrigin: _v15
      } = _v0,
      _v16 = _v10 ? new Date(_v10).toLocaleDateString("en-us", {
        year: "numeric",
        month: "short",
        day: "numeric"
      }) : _v68,
      _v17 = (0, _v2.useRef)(null),
      _v18 = (0, _v2.useRef)(null),
      [_v19, _v20] = (0, _v2.useState)(!0),
      [_v21, _v22] = (0, _v2.useState)(!1),
      [_v23, _v24] = (0, _v2.useState)(!1),
      _v25 = _v16.toString() !== _v68,
      _v26 = 0;
    _v8 && _v7 ? _v26 = 313 / _v8 * _v7 : _v14 === (_v70.Orientation.LANDSCAPE || _v71.OrientationShorthand.LANDSCAPE) ? _v26 = 530 : (_v14 === (_v70.Orientation.SQUARE || _v71.OrientationShorthand.SQUARE) || _v14 === (_v70.Orientation.PORTRAIT || _v71.OrientationShorthand.PORTRAIT)) && (_v26 = 313);
    let _v27 = (_v1 ? .7 : 1) * _v26;
    return (0, _v2.useEffect)(() => {
      _v17?.current && _v17.current.clientHeight < _v17.current.scrollHeight && _v24(!0);
    }, [_v17]), (0, _v2.useEffect)(() => {
      _v6();
    }, [_v6, _v21]), (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsxs)(_v61, {
        ref: _v18,
        height: 313,
        width: _v26,
        children: [_v12 && (0, _v1.jsx)(_v62, {
          height: 313,
          width: _v26,
          children: (0, _v1.jsx)(_v67, {
            isLoading: _v19 || _v5,
            setIsLoading: _v20,
            src: _v12,
            startTime: _v0.startTime,
            endTime: _v0.endTime,
            onCanPlay: () => _v20(!1),
            isCrossOrigin: _v15
          })
        }), !_v12 && _v11 && (0, _v1.jsx)(_v59, {
          src: _v11,
          height: 313,
          alt: _v11,
          onLoad: () => _v20(!1),
          ...(_v15 && {
            crossOrigin: "anonymous"
          })
        }), _v19 || _v5 && (0, _v1.jsx)(_v41.Loader, {})]
      }), (0, _v1.jsxs)(_v64, {
        children: [(0, _v1.jsxs)(_v63, {
          style: {
            maxWidth: _v27
          },
          children: [(0, _v1.jsx)(_v57.Header, {
            size: "xs",
            "data-testid": "expanded-view-title",
            mb: 1,
            children: _v9
          }), _v0.caption && (0, _v1.jsxs)(_v65, {
            children: [(0, _v1.jsx)(_v66, {
              "data-testid": "expanded-view-description",
              ref: _v17,
              isShowMore: _v21,
              children: _v0.caption
            }), _v23 && (0, _v1.jsx)(_v16.Button, {
              size: "xs",
              color: "vimeoBlue.500",
              variant: "tertiary",
              onClick: () => _v22(!_v21),
              fontSize: "12px",
              padding: 0,
              children: _v21 ? (0, _v33.translate)({
                singular: "Show less",
                dictionary: {
                  es: {
                    singular: "Mostrar menos"
                  },
                  "de-DE": {
                    singular: "Weniger anzeigen"
                  },
                  "fr-FR": {
                    singular: "Afficher moins"
                  },
                  "ja-JP": {
                    singular: "表示件数を減らす"
                  },
                  "ko-KR": {
                    singular: "줄이기"
                  },
                  "pt-BR": {
                    singular: "Mostrar menos"
                  },
                  "zh-CN": {
                    singular: "收起"
                  }
                }
              }) : (0, _v33.translate)({
                singular: "Show more",
                dictionary: {
                  es: {
                    singular: "Mostrar más"
                  },
                  "de-DE": {
                    singular: "Mehr anzeigen"
                  },
                  "fr-FR": {
                    singular: "Afficher plus"
                  },
                  "ja-JP": {
                    singular: "その他を表示する"
                  },
                  "ko-KR": {
                    singular: "더 보기"
                  },
                  "pt-BR": {
                    singular: "Mostar mais"
                  },
                  "zh-CN": {
                    singular: "显示更多"
                  }
                }
              })
            })]
          }), _v25 && (0, _v1.jsx)(_v57.Header, {
            size: "xs",
            fontSize: "12px",
            color: "text-secondary",
            "data-testid": _v69.testIds.expandedViewUploadedDate,
            fontWeight: "normal",
            children: `${(0, _v33.translate)({
              singular: "Uploaded",
              dictionary: {
                es: {
                  singular: "Subido el"
                },
                "de-DE": {
                  singular: "Hochgeladen"
                },
                "fr-FR": {
                  singular: "Mis en ligne"
                },
                "ja-JP": {
                  singular: "アップロード時期"
                },
                "ko-KR": {
                  singular: "업로드"
                },
                "pt-BR": {
                  singular: "Carregado"
                },
                "zh-CN": {
                  singular: "已上传"
                }
              }
            })} 
            ${_v16}
            `
          })]
        }), _v1 && (0, _v1.jsx)(_v26.Tooltip, {
          label: _v0.deleteTooltip ?? (0, _v33.translate)({
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
          "data-testid": "delete-media-tooltip",
          whiteSpace: "break-spaces",
          children: (0, _v1.jsx)(_v21.IconButton, {
            size: "md",
            icon: (0, _v1.jsx)(_v32.TrashBin, {}),
            variant: "primary",
            onClick: () => {
              _v1(_v13), _v4();
            },
            "data-testid": "delete-media-button",
            "aria-label": "delete-media-button",
            isDisabled: _v0.disableDelete ?? !1
          })
        }), _v2 && (0, _v1.jsx)(_v16.Button, {
          size: "sm",
          variant: "primary",
          onClick: () => {
            _v2(_v13), _v4();
          },
          isDisabled: _v0.disabled,
          "data-testid": `CTA-${_v3}-media-button`,
          children: _v3
        })]
      })]
    });
  };
  var _v73 = _v0.i(0),
    _v74 = _v0.i(0);
  let _v75 = _v15.default.div.withConfig({
      displayName: "TextAnimationExpandedContent.style__SubAnimationsContainer",
      componentId: "sc-61abc106-0"
    })`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  div {
    ${({
      shouldBreakLines: _v0
    }) => _v0 ? _v15.css`
          flex: calc(50% - 8px);
        ` : _v15.css`
        flex: 1;
      `}
  }

  button {
    min-width: auto;
    flex-grow: 1;
    width: ${({
      rowItems: _v0
    }) => `calc(${100 / _v0}% - ${2 * _v0}px)`};
  }
`,
    _v76 = (0, _v15.default)(_v74.ArrowRight).withConfig({
      displayName: "TextAnimationExpandedContent.style__ArrowDown",
      componentId: "sc-61abc106-1"
    })`
  transform: rotate(90deg);
`,
    _v77 = (0, _v15.default)(_v73.ArrowLeft).withConfig({
      displayName: "TextAnimationExpandedContent.style__ArrowUp",
      componentId: "sc-61abc106-2"
    })`
  transform: rotate(90deg);
`;
  var _v78 = _v0.i(0);
  let _v79 = (_v0, _v1, _v2) => {
      let _v3 = [],
        _v4 = _v1[_v0];
      if (!_v4) return [];
      if (_v4.isSubAnimation && (_v4 = Object.values(_v2).find(_v0 => _v0?.subAnimations?.find(_v0 => _v0 === _v0))), _v4.subAnimations) return _v4.subAnimations.forEach(_v0 => {
        _v1[_v0] && _v3.push(_v1[_v0]);
      }), _v3;
      let _v5 = Object.values(_v1).find(_v0 => _v0.directions?.find(({
        animation: _v0
      }) => _v0 === _v0));
      return _v5?.subAnimations && _v5.subAnimations.forEach(_v0 => {
        _v1[_v0] && _v3.push(_v1[_v0]);
      }), _v3;
    },
    _v80 = (_v0, _v1) => {
      let _v2 = [];
      return Object.values(_v1).forEach(_v0 => {
        _v0.directions && _v0.directions.find(({
          animation: _v0
        }) => _v0 === _v0) && _v0.directions.forEach(({
          direction: _v0,
          animation: _v1,
          subAnimationLabel: _v2
        }) => {
          _v2.push({
            direction: _v0,
            subAnimationLabel: _v2,
            animation: _v1[_v1].name
          });
        });
      }), _v2;
    },
    _v81 = (_v0, _v1) => {
      let _v2 = null;
      return Object.values(_v1).forEach(_v0 => {
        _v0.directions && _v0.isSubAnimation && _v0.directions.forEach(({
          animation: _v0
        }) => {
          _v0 === _v0 && (_v2 = _v0.name);
        });
      }), _v2;
    };
  _v0.s(["getDirections", 0, _v80, "getSubAnimationByDirectionAnimation", 0, _v81, "getSubAnimationWithDirections", 0, (_v0, _v1, _v2) => {
    let _v3 = [];
    return _v79(_v0, _v1, _v2).forEach(_v0 => {
      _v0.directions ? _v0.directions.forEach(_v0 => _v3.push(_v0.animation)) : _v3.push(_v0.name);
    }), _v3;
  }, "getSubAnimations", 0, _v79], 0);
  var _v82 = _v0.i(0);
  let _v83 = ({
    children: _v0,
    isSelected: _v1,
    isFillRow: _v2
  }) => (0, _v1.jsx)(_v82.Box, {
    ...(_v1 && {
      outline: "2px solid",
      outlineColor: "text-primary"
    }),
    ...(_v2 && {
      display: "flex",
      flexGrow: 1
    }),
    background: "fill-blur",
    borderRadius: "sm",
    "data-selected": _v1,
    children: _v0
  });
  _v0.s(["SelectionBorder", 0, _v83], 0);
  let _v84 = {
      up: (0, _v1.jsx)(_v77, {}),
      down: (0, _v1.jsx)(_v76, {}),
      left: (0, _v1.jsx)(_v73.ArrowLeft, {}),
      right: (0, _v1.jsx)(_v74.ArrowRight, {})
    },
    _v85 = {
      TextBox: "Text box",
      ZoomInDirection: "In",
      ZoomOutDirection: "Out"
    },
    _v86 = ({
      expandedItem: _v0
    }) => {
      let _v1 = (0, _v11.useAppSelector)(_v78.textAnimationsMetadataSelector),
        _v2 = (0, _v11.useAppSelector)(_v9.selectedElementsSelector),
        {
          mainTextAnimations: _v3,
          onSelectSubAnimation: _v4,
          id: _v5
        } = _v0,
        _v6 = (0, _v2.useMemo)(() => {
          let _v0 = _v2[0];
          return _v0 ? _v0.textStyleId : "";
        }, [_v2]),
        _v7 = (0, _v2.useMemo)(() => _v79(_v5, _v1, _v3), [_v1, _v5, _v3]),
        _v8 = (0, _v2.useMemo)(() => {
          let _v0 = _v80(_v5, _v1);
          return _v7.forEach(_v0 => {
            _v0.name === _v81(_v6, _v1) && (_v0 = _v80(_v6, _v1));
          }), _v0;
        }, [_v1, _v5, _v6, _v7]),
        _v9 = (0, _v2.useMemo)(() => _v7.find(_v0 => _v0.name === _v6 || _v0.name === _v81(_v6, _v1)), [_v1, _v6, _v7]);
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [_v7.length > 1 && (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v57.Header, {
            size: "2xs",
            "data-testid": "animation-expanded-view-title",
            sx: {
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              marginBottom: "8px"
            },
            children: (0, _v33.translate)({
              singular: "Animate by",
              dictionary: {
                es: {
                  singular: "Animación por"
                },
                "de-DE": {
                  singular: "Animation nach"
                },
                "fr-FR": {
                  singular: "Animer par"
                },
                "ja-JP": {
                  singular: "アニメーション化"
                },
                "ko-KR": {
                  singular: "애니메이션 기준"
                },
                "pt-BR": {
                  singular: "Animar por"
                },
                "zh-CN": {
                  singular: "动画表现单元"
                }
              }
            })
          }), (0, _v1.jsx)(_v75, {
            rowItems: _v7.length % 2 == 0 ? 2 : 3,
            shouldBreakLines: 4 === _v7.length,
            children: _v7.map(_v0 => (0, _v1.jsx)(_v83, {
              isSelected: _v9?.name === _v0.name,
              isFillRow: !0,
              children: (0, _v1.jsx)(_v16.Button, {
                size: "sm",
                variant: "tertiary",
                onClick: () => _v4(_v0.name),
                "data-testid": `${_v9?.name === _v0.name ? "selected-" : ""}animation-button`,
                children: (0, _v1.jsx)(_v17.Text, {
                  variant: "heading-2xs",
                  children: _v85[_v0.subAnimationLabel] || _v0.subAnimationLabel
                })
              })
            }, _v0.name))
          })]
        }), _v8.length > 1 && (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v57.Header, {
            size: "2xs",
            "data-testid": "direction-expanded-view-title",
            mt: {
              marginTop: 200
            },
            sx: {
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              margin: "8px 0"
            },
            children: (0, _v33.translate)({
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
          }), (0, _v1.jsx)(_v75, {
            rowItems: 4,
            children: _v8.map(_v0 => (0, _v1.jsx)(_v83, {
              isSelected: _v0.animation === _v6,
              isFillRow: !0,
              children: !_v0.subAnimationLabel && _v0.direction ? (0, _v1.jsx)(_v21.IconButton, {
                size: "sm",
                variant: "tertiary",
                onClick: () => _v4(_v0.animation),
                icon: _v84[_v0.direction],
                "data-key": _v0.direction,
                "aria-label": `${_v0.animation === _v6 ? "selected-" : ""}direction-button`,
                "data-testid": `${_v0.animation === _v6 ? "selected-" : ""}direction-button`
              }) : (0, _v1.jsx)(_v16.Button, {
                size: "sm",
                variant: "tertiary",
                onClick: () => _v4(_v0.animation),
                ...(_v0.direction && {
                  leftIcon: _v84[_v0.direction]
                }),
                "data-key": _v0.direction,
                "data-testid": `${_v0.animation === _v6 ? "selected-" : ""}direction-button`,
                children: _v0.subAnimationLabel && (0, _v1.jsx)(_v17.Text, {
                  variant: "body-sm",
                  children: _v85[_v0.subAnimationLabel]
                })
              })
            }, _v0.animation))
          })]
        })]
      });
    };
  _v0.s(["default", 0, _v86], 0);
  let _v87 = ({
    expandedItem: _v0,
    onClose: _v1,
    onDelete: _v2,
    onCTA: _v3,
    CTAText: _v4
  }) => {
    let {
        id: _v5,
        type: _v6
      } = _v0,
      [_v7, _v8] = (0, _v2.useState)(() => _v56(_v5, !0, !0)),
      [_v9, _v10] = (0, _v2.useState)(() => {
        let _v0 = _v56(_v5, !0, !0);
        return !_v0 || _v0.isPinnedToTop;
      }),
      _v11 = (0, _v2.useRef)(null);
    (0, _v55.useOnClickOutside)(_v11, _v1);
    let _v12 = (0, _v2.useCallback)(() => {
      let _v0 = _v56(_v5, _v6 === _v36.ExpandType.MEDIA || _v9, !1);
      _v8(_v0), _v0 && _v10(_v0.isPinnedToTop);
    }, [_v5, _v9, _v6]);
    return (0, _v2.useEffect)(() => {
      _v7 || _v1();
    }, [_v1, _v7]), (0, _v2.useEffect)(() => {
      window.addEventListener("scroll", _v12, !0);
      let _v0 = document.querySelector("[data-testid=main-container]");
      return _v0 && (_v0.style.pointerEvents = "none"), () => {
        window.removeEventListener("scroll", _v12, !0), _v0 && (_v0.style.pointerEvents = "auto");
      };
    }, [_v12]), (0, _v2.useEffect)(() => {
      _v12();
    }, [_v11, _v12]), (0, _v1.jsx)(_v48.Portal, {
      children: (0, _v1.jsxs)(_v54, {
        ref: _v11,
        ...(_v6 === _v36.ExpandType.TEXT_ANIMATIONS && {
          width: 100
        }),
        type: _v6,
        position: _v7,
        "data-testid": "expanded-view-container",
        children: [_v6 === _v36.ExpandType.MEDIA && (0, _v1.jsx)(_v72, {
          expandedItem: _v0,
          onDelete: _v2,
          onCTA: _v3,
          CTAText: _v4,
          onClose: _v1,
          isLoading: _v0.isLoading,
          handleScroll: _v12
        }), _v6 === _v36.ExpandType.TEXT_ANIMATIONS && (0, _v1.jsx)(_v86, {
          expandedItem: _v0
        })]
      })
    });
  };
  var _v88 = _v0.i(0);
  let _v89 = (0, _v2.forwardRef)(({
      style: _v0,
      ..._v1
    }, _v2) => (0, _v1.jsx)("div", {
      style: {
        ..._v0,
        marginRight: `${_v50}px`
      },
      ref: _v2,
      ..._v1
    })),
    _v90 = (0, _v2.forwardRef)(({
      style: _v0,
      ..._v1
    }, _v2) => (0, _v1.jsx)(_v82.Box, {
      sx: {
        ..._v0,
        ..._v58.ScrollerSX
      },
      className: "scroller",
      ref: _v2,
      ..._v1,
      marginRight: "4px",
      marginLeft: `-${_v34.HOVER_BORDER}px`,
      marginTop: 0
    })),
    _v91 = (0, _v2.forwardRef)(({
      style: _v0,
      ..._v1
    }, _v2) => (0, _v1.jsx)("div", {
      style: {
        ..._v0,
        marginLeft: `${_v34.MARGIN_LIST}px`,
        marginTop: `${_v34.MARGIN_LIST}px`
      },
      ref: _v2,
      ..._v1
    })),
    _v92 = () => (0, _v1.jsx)("div", {
      style: {
        display: "flex",
        justifyContent: "center",
        paddingRight: "8px",
        paddingTop: "24px"
      },
      "data-testid": "grid-loader",
      children: (0, _v1.jsx)(_v88.Spinner, {
        size: "xl"
      })
    });
  _v0.s(["VirtuosoFooter", 0, _v92, "VirtuosoItem", 0, _v89, "VirtuosoList", 0, _v91, "VirtuosoScroller", 0, _v90], 0);
  var _v93 = _v0.i(0);
  let _v94 = (_v0, _v1, _v2) => {
      let _v3 = 0 === _v1 ? 1 : parseFloat((_v0 / _v1).toFixed(2));
      return _v2 === _v12.GridStyleType.JUSTIFIED ? Math.min(Math.max(_v3, .76), 1.77) : _v3;
    },
    _v95 = ({
      gridStyle: _v0,
      itemsCount: _v1,
      ratio: _v2,
      maxItemsPerRow: _v3
    }) => _v0 === _v12.GridStyleType.SQUARE ? +_v3 : _v0 === _v12.GridStyleType.LANDSCAPE ? 3.54 : _v1 < 2 ? Math.max(_v2, 2.2) : _v2,
    _v96 = ({
      gridStyle: _v0,
      items: _v1,
      maxItemsPerRow: _v2
    }) => {
      let _v3 = [],
        _v4 = [],
        _v5 = 0;
      return _v1.forEach((_v0, _v1) => {
        let _v2,
          _v3 = _v0 === _v12.GridStyleType.JUSTIFIED ? {
            width: _v0.width,
            height: _v0.height
          } : (_v2 = {
            width: 1,
            height: 1
          }, _v0 === _v12.GridStyleType.LANDSCAPE && (_v2 = {
            width: 16,
            height: 9
          }), _v0 === _v12.GridStyleType.PORTRAIT && (_v2 = {
            width: 9,
            height: 16
          }), _v2),
          _v4 = _v94(_v3.width, _v3.height, _v0),
          _v5 = _v4.length < _v2 - 1 && _v5 < 2.2,
          _v6 = _v4.length === _v2 - 1 && _v5 + _v4 < 3.2;
        _v5 || _v6 ? (_v5 += _v4, _v4.push({
          index: _v1,
          size: _v3
        })) : (_v3.push({
          items: _v4.slice(0),
          ratio: _v5
        }), _v5 = _v4, _v4 = [{
          index: _v1,
          size: _v3
        }]);
      }), _v5 > 0 && _v3.push({
        items: _v4.slice(0),
        ratio: _v5
      }), _v3;
    };
  _v0.s(["DEFAULT_MAX_ITEMS_PER_ROW", 0, 3, "LANDSCAPE_GRID_ITEM_DIMENSIONS", 0, {
    width: 16,
    height: 9
  }, "getNormalizedRatio", 0, _v94, "getNormalizedRowRatio", 0, _v95, "justifyItemsToRows", 0, _v96], 98);
  let _v97 = (0, _v2.forwardRef)(function ({
    items: _v0,
    styleType: _v1,
    itemRenderer: _v2,
    isLoading: _v3,
    loadMoreItems: _v4,
    onDelete: _v5,
    onCTA: _v6,
    CTAText: _v7,
    maxItemsPerRow: _v8 = 3
  }, _v9) {
    let [_v10, _v11] = (0, _v2.useState)(),
      [_v12, _v13] = (0, _v2.useState)(!1),
      _v14 = (0, _v2.useRef)(null),
      _v15 = (0, _v2.useRef)(null),
      _v16 = (0, _v93.default)(_v15),
      _v17 = (0, _v2.useMemo)(() => _v96({
        items: _v0,
        gridStyle: _v1,
        maxItemsPerRow: _v8
      }), [_v0, _v8, _v1]),
      _v18 = (0, _v2.useCallback)(_v0 => {
        _v0 && (_v11(_v0), _v13(!0));
      }, []),
      _v19 = (0, _v2.useCallback)(_v0 => {
        let _v1 = _v17[_v0].items,
          _v2 = _v95({
            gridStyle: _v1,
            itemsCount: _v1.length,
            ratio: _v17[_v0].ratio,
            maxItemsPerRow: _v8
          }),
          _v3 = `${_v16.width / _v2}px`,
          _v4 = 0;
        return _v1 === _v12.GridStyleType.SQUARE && _v1.length < _v8 && (_v4 = 16), (0, _v1.jsx)(_v52, {
          style: {
            height: _v1 === _v12.GridStyleType.JUSTIFIED ? _v3 : "auto",
            paddingRight: `${_v4}px`
          },
          children: _v1.map(_v0 => {
            let _v1 = _v94(_v0.size.width, _v0.size.height, _v1);
            return _v2(_v0.index, 100 * _v1 / _v2, _v18);
          })
        }, `row-${_v0}`);
      }, [_v17, _v1, _v8, _v16.width, _v2, _v18]);
    return (0, _v2.useImperativeHandle)(_v9, () => ({
      scrollToIndex: _v0 => {
        _v14?.current?.scrollToIndex(_v0);
      }
    })), (0, _v2.useEffect)(() => {
      _v12 && _v13(_v12);
    }, [_v12, _v10]), (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v51, {
        ref: _v15,
        children: (0, _v1.jsx)(_v47.Virtuoso, {
          ref: _v14,
          totalCount: _v17.length,
          itemContent: _v19,
          overscan: 300,
          atBottomStateChange: _v0 => {
            _v0 && _v4 && _v4();
          },
          components: {
            Item: _v89,
            Scroller: _v90,
            List: _v91,
            ...(_v3 && {
              Footer: _v92
            })
          }
        })
      }), _v10 && _v12 && (0, _v1.jsx)(_v87, {
        onDelete: _v5,
        onCTA: _v6,
        CTAText: _v7,
        expandedItem: _v10,
        onClose: () => _v13(!1)
      })]
    });
  });
  _v0.s(["default", 0, _v97], 0), _v0.s(["Grid", 0, _v97], 0);
  var _v98 = _v0.i(0),
    _v99 = _v0.i(0),
    _v100 = _v0.i(0);
  let _v101 = ({
    children: _v0
  }) => (0, _v1.jsx)(_v100.PanelBody, {
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    flex: 1,
    padding: "0 0 16px",
    children: _v0
  });
  _v0.s(["InspectorBody", 0, _v101], 0);
  var _v102 = _v0.i(0);
  let _v103 = ({
      item: _v0
    }) => (0, _v1.jsx)(_v17.Text, {
      "data-testid": _v0.dataTestId,
      variant: _v0.thumbnailTextVariant,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      backgroundColor: "transparent",
      height: "100%",
      fontFamily: "system-ui, serif",
      children: _v0.thumbnailText
    }, _v0.dataTestId),
    _v104 = (0, _v15.default)(_v49.InspectorPaddedRow).withConfig({
      displayName: "AddTextInspectorView__TextPresetsContainer",
      componentId: "sc-c24e9f00-0"
    })`
  width: 100%;
  height: 100%;
  margin-top: 18px;
`;
  function _v105({
    items: _v0,
    defaultItem: _v1,
    onItemClick: _v2,
    createElement: _v3,
    OverlayComponent: _v4,
    onElementAdded: _v5
  }) {
    let _v6 = (0, _v2.useCallback)((_v0, _v1) => {
      let _v2 = _v0[_v0];
      return (0, _v1.jsx)(_v46, {
        id: _v2.dataTestId,
        gridStyleType: _v12.GridStyleType.LANDSCAPE,
        width: _v1,
        isActive: !1,
        testid: "text",
        onClick: () => _v2(_v2),
        overlay: _v4 ? (0, _v1.jsx)(_v4, {
          item: _v2
        }) : null,
        backgroundColor: "fill-component",
        isShowPlusButton: !0,
        draggableData: {
          id: _v2.dataTestId,
          data: _v2,
          type: _v98.DnDItemType.GRID_ELEMENT_TEXT,
          createElement: _v0 => _v3(_v2, _v0),
          onElementAdded: _v5
        }
      }, _v0);
    }, [_v4, _v3, _v0, _v5, _v2]);
    return (0, _v1.jsxs)(_v99.Inspector, {
      children: [(0, _v1.jsx)(_v102.InspectorHeader, {
        title: "Text"
      }), (0, _v1.jsxs)(_v101, {
        children: [(0, _v1.jsx)(_v49.InspectorPaddedRow, {
          children: (0, _v1.jsx)(_v16.Button, {
            leftIcon: (0, _v1.jsx)(_v18.Plus, {}),
            variant: "primary",
            width: "100%",
            onClick: () => _v2(_v1),
            "data-testid": _v1.dataTestId,
            size: "sm",
            children: _v1.thumbnailText
          })
        }), (0, _v1.jsx)(_v104, {
          padRight: !1,
          children: (0, _v1.jsx)(_v97, {
            itemRenderer: _v6,
            styleType: _v12.GridStyleType.LANDSCAPE,
            items: _v0,
            isLoading: !1
          })
        })]
      })]
    });
  }
  let _v106 = () => {
    let _v0 = (0, _v11.useAppDispatch)(),
      _v1 = (0, _v11.useAppSelector)(_v10.storyboardIdSelector),
      {
        trackEditorTextAdded: _v2
      } = (0, _v4.useEditorTracking)(),
      {
        create: _v3
      } = (0, _v7.useTextElement)(),
      {
        addElement: _v4
      } = (0, _v6.useAddElement)(),
      _v5 = (0, _v2.useCallback)((_v0, _v1) => {
        let {
            text: _v2,
            fontSize: _v3
          } = _v0,
          {
            time: _v4,
            coordinates: _v5
          } = _v1 || {};
        return _v3({
          text: [_v2],
          fontSize: _v3,
          time: _v4,
          position: _v5
        });
      }, [_v3]),
      _v6 = (0, _v2.useCallback)(({
        element: _v0
      }) => {
        let {
          id: _v1
        } = _v0;
        (0, _v3.flushSync)(() => {
          _v0((0, _v9.selectCEsAction)({
            ceIds: [_v1],
            isMultiSelect: !1
          }));
        }), _v0((0, _v8.openInspectorAction)({
          inspectorType: _v12.InspectorType.TEXT_EDIT
        })), _v0((0, _v8.updateInspectorDataAction)({
          inspectorType: _v12.InspectorType.TEXT_EDIT,
          data: {
            metadata: _v13.TextEditorMetadata.SELECT_TEXT
          }
        }));
      }, [_v0]),
      _v7 = (0, _v2.useCallback)(async _v0 => {
        let _v1 = await _v5(_v0);
        _v1 && ((0, _v3.flushSync)(() => {
          _v4(_v1);
        }), _v6({
          element: _v1
        })), (0, _v14.sendTrackAddTextElement)({
          copy: _v0.text
        }), _v2({
          editorSessionId: _v1,
          editorTextType: _v0.id
        });
      }, [_v4, _v5, _v6, _v1, _v2]);
    return (0, _v1.jsx)(_v105, {
      items: _v5.textPresets,
      onItemClick: _v7,
      createElement: _v5,
      OverlayComponent: _v103,
      defaultItem: _v5.textDefaultPreset,
      onElementAdded: _v6
    });
  };
  var _v107 = _v0.i(0),
    _v108 = _v0.i(0);
  let _v109 = {
    variant: "tertiary",
    width: "100%",
    size: "lg",
    padding: "18px 8px",
    height: "60px",
    display: "flex !important",
    alignItems: "center !important"
  };
  _v0.s(["BrandColorInput", 0, ({
    label: _v0,
    value: _v1,
    onChange: _v2,
    onChangeEnd: _v3,
    children: _v4
  }) => {
    let {
      hasCreateBrandEdit: _v5
    } = (0, _v2.useContext)(_v108.PermissionsContext);
    return (0, _v1.jsx)(_v107.ColorPickerBrandKit, {
      color: _v1,
      onChange: _v2,
      onClose: _v3,
      disabled: !_v5,
      productName: "editor",
      children: (0, _v1.jsx)(_v16.Button, {
        ..._v109,
        style: {
          display: "flex",
          width: "100%"
        },
        children: (0, _v1.jsxs)(_v20.Flex, {
          direction: "row",
          justifyContent: "space-between",
          alignItems: "center",
          "data-testid": `${_v0.toLowerCase().replace(" ", "-")}-picker`,
          width: "100%",
          children: [(0, _v1.jsx)(_v57.Header, {
            size: "xs",
            mb: 0,
            lineHeight: "32px",
            children: _v0
          }), (0, _v1.jsx)("span", {
            children: _v4
          })]
        })
      })
    });
  }], 0);
  let _v110 = _v15.default.div.withConfig({
    displayName: "BrandColorsInspector.style__ColorsContainer",
    componentId: "sc-862aff3e-0"
  })`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
  _v0.s(["ColorsContainer", 0, _v110], 0);
}