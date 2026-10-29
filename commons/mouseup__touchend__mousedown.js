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
    _v11 = _v0.i(0);
  let _v12 = ({
      onStart: _v0,
      onStop: _v1,
      boardRef: _v2,
      children: _v3,
      bounds: _v4,
      position: {
        x: _v5,
        y: _v6
      },
      disabled: _v7
    }) => {
      let [_v8, _v9] = (0, _v2.useState)(_v5),
        [_v10, _v11] = (0, _v2.useState)(_v6);
      (0, _v2.useEffect)(() => {
        _v9(_v5), _v11(_v6);
      }, [_v5, _v6]);
      let _v12 = (0, _v11.useDrag)(({
        event: _v0,
        xy: [_v1, _v2],
        first: _v3,
        last: _v4
      }) => {
        let _v5 = 0,
          _v6 = 0,
          _v7 = 60 * (window.innerWidth > 768);
        if (_v2.current && (_v5 = _v2.current.getBoundingClientRect().top, _v6 = _v2.current.getBoundingClientRect().left), !_v7 && _v0) {
          let _v0 = _v2 < _v4.top + _v5,
            _v1 = _v2 > _v4.bottom + _v5 - _v7,
            _v2 = _v1 < _v4.left + _v6,
            _v3 = _v1 > _v4.right + _v6,
            _v4 = {
              top: _v0,
              bottom: _v1,
              left: _v2,
              right: _v3
            };
          _v4 && ("mouseup" === _v0.type || "touchend" === _v0.type) ? _v1(_v0, {
            x: _v8,
            y: _v10
          }) : Object.values(_v4).filter(_v0 => !0 === _v0).length > 1 ? (!0 === _v4.top && _v11(_v4.top), !0 === _v4.bottom && _v11(_v4.bottom - _v7), !0 === _v4.left && _v9(_v4.left), !0 === _v4.right && _v9(_v4.right)) : _v2 ? (_v9(_v4.left), _v11(_v2 - _v5)) : _v3 ? (_v9(_v4.right), _v11(_v2 - _v5)) : _v0 ? (_v9(_v1 - _v6), _v11(_v4.top)) : _v1 ? (_v9(_v1 - _v6), _v11(_v4.bottom - _v7)) : _v3 && ("mousedown" === _v0.type || "touchstart" === _v0.type) ? _v0({
            x: _v8,
            y: _v10
          }) : (_v9(_v1 - _v6), _v11(_v2 - _v5));
        }
      });
      return (0, _v1.jsx)(_v3.Box, {
        position: "absolute",
        sx: {
          touchAction: "none"
        },
        style: {
          top: `${_v10}px`,
          left: `${_v8}px`
        },
        ..._v12(),
        children: _v3
      });
    },
    _v13 = "0 0 0 2px white, 0 2px 10px 3px rgba(0, 0, 0, 0.18)",
    _v14 = "gray.900",
    _v15 = "gray.50",
    _v16 = "blue.500",
    _v17 = "white",
    _v18 = ({
      buttonRef: _v0,
      id: _v1,
      onClick: _v2,
      onMouseEnter: _v3,
      onMouseLeave: _v4,
      isActive: _v5,
      isDisabled: _v6 = !1,
      disabled: _v7,
      bounds: _v8,
      onStart: _v9,
      onStop: _v10,
      position: _v11,
      boardRef: _v12,
      accentColor: _v13,
      showCheckmark: _v14 = !1
    }) => {
      let _v15 = (0, _v2.useMemo)(() => ({
          bg: _v5 ? _v13 || _v16 : _v14,
          color: _v5 ? _v17 : _v15,
          shadow: _v13,
          shadowHover: `${_v13}, 0 0 0 10px rgba(255, 255, 255, 0.25)`
        }), [_v5, _v13]),
        _v16 = (0, _v2.useMemo)(() => _v6 ? _v5 ? "default" : "pointer" : "grab", [_v6, _v5]);
      return (0, _v1.jsx)(_v12, {
        boardRef: _v12,
        bounds: _v8,
        disabled: _v7,
        onStart: _v9,
        onStop: _v10,
        position: _v11,
        children: (0, _v1.jsx)(_v4.Button, {
          ref: _v0,
          id: _v1,
          position: "absolute",
          height: "38px",
          left: `-${19}px`,
          padding: "10px",
          top: `-${19}px`,
          width: "38px",
          outline: "none",
          background: "transparent",
          cursor: _v16,
          _hover: {
            boxShadow: "none"
          },
          _active: _v6 ? {
            outline: "none"
          } : {
            cursor: "grabbing",
            outline: "none"
          },
          _disabled: {
            cursor: _v5 ? "default" : "pointer"
          },
          _dark: {
            _hover: {
              background: "transparent"
            },
            _active: {
              background: "transparent"
            }
          },
          _focusVisible: {
            outline: "none"
          },
          sx: {
            "&.is--highlighted": {
              transform: "scale(1.25)"
            },
            ...(!_v5 && {
              "&.is--highlighted, &:hover": {
                "& span": {
                  boxShadow: _v15.shadowHover
                }
              }
            })
          },
          onMouseEnter: _v3,
          onMouseLeave: _v4,
          onClick: _v2,
          children: (0, _v1.jsx)(_v3.Box, {
            as: "span",
            alignItems: "center",
            background: _v15.bg,
            color: _v15.color,
            borderRadius: "50%",
            boxShadow: _v15.shadow,
            display: "flex",
            height: "18px",
            justifyContent: "center",
            position: "relative",
            width: "18px",
            transition: "box-shadow 0.2s ease-out",
            _hover: _v5 ? void 0 : {
              cursor: "pointer"
            },
            children: (0, _v1.jsx)(_v20, {
              showCheckmark: _v14,
              isActive: _v5
            })
          })
        })
      });
    },
    _v19 = {
      zIndex: "1",
      width: "var(--vimeo-sizes-2xs) !important",
      height: "var(--vimeo-sizes-2xs) !important"
    },
    _v20 = ({
      showCheckmark: _v0,
      isActive: _v1
    }) => _v0 ? (0, _v1.jsx)(_v9.Checkmark, {
      ..._v19
    }) : _v1 ? null : (0, _v1.jsx)(_v10.CommentPin, {
      ..._v19
    });
  var _v21 = _v0.i(0);
  let _v22 = {
      text: "",
      position: {
        x: 0,
        y: 0
      },
      timecode: 0,
      isShowing: !1
    },
    _v23 = (0, _v2.createContext)({
      annotationForm: _v22,
      setAnnotationForm: () => Error("Not implemented")
    }),
    _v24 = ({
      children: _v0,
      onCommentPosted: _v1
    }) => {
      let [_v2, _v3] = (0, _v2.useState)({
          ..._v22
        }),
        _v4 = (0, _v2.useMemo)(() => ({
          annotationForm: _v2,
          setAnnotationForm: _v3,
          onCommentPosted: _v1
        }), [_v2, _v3, _v1]);
      return (0, _v1.jsx)(_v23.Provider, {
        value: _v4,
        children: _v0
      });
    };
  var _v25 = _v0.i(0);
  let _v26 = ({
      x: _v0,
      y: _v1
    }, {
      height: _v2,
      width: _v3
    }) => ({
      x: Math.min(1, Math.max(0, _v0 / _v3)),
      y: Math.min(1, Math.max(0, _v1 / _v2))
    }),
    _v27 = ({
      x: _v0,
      y: _v1
    }, {
      height: _v2,
      width: _v3
    }) => ({
      x: _v0 * _v3,
      y: _v1 * _v2
    }),
    _v28 = _v0 => {
      let {
          isHidden: _v1,
          playerContainerRefNode: _v2,
          clickAreaRef: _v3,
          player: _v4,
          videoAspectRatio: _v5
        } = _v0,
        [_v6, _v7] = (0, _v2.useState)(0),
        [_v8, _v9] = (0, _v2.useState)(0),
        [_v10, _v11] = (0, _v2.useState)(!1),
        [_v12, _v13] = (0, _v2.useState)(!1),
        {
          setAnnotationForm: _v14
        } = (0, _v2.useContext)(_v23),
        {
          setActiveComment: _v15
        } = (0, _v2.useContext)(_v25.CommentsContext),
        _v16 = _v2.getBoundingClientRect(),
        _v17 = {
          top: _v16.top,
          left: _v16.left,
          height: _v2.offsetHeight,
          width: _v2.offsetWidth
        },
        _v18 = (_v0, _v1) => {
          let {
              bottom: _v2,
              left: _v3,
              right: _v4,
              top: _v5
            } = (() => {
              let {
                height: _v0,
                width: _v1
              } = _v17;
              if (null == _v5 || _v5 <= 0 || 0 === _v0 || 0 === _v1) return {
                bottom: _v0,
                left: 0,
                right: _v1,
                top: 0
              };
              let _v2 = _v0 * _v5;
              if (_v2 <= _v1) {
                let _v0 = (_v1 - _v2) / 2;
                return {
                  bottom: _v0,
                  left: _v0,
                  right: _v0 + _v2,
                  top: 0
                };
              }
              let _v3 = _v1 / _v5,
                _v4 = (_v0 - _v3) / 2;
              return {
                bottom: _v4 + _v3,
                left: 0,
                right: _v1,
                top: _v4
              };
            })(),
            _v6 = _v0 - _v17.left,
            _v7 = _v1 - _v17.top;
          return _v6 >= _v3 && _v6 <= _v4 && _v7 >= _v5 && _v7 <= _v2;
        },
        _v19 = _v0 => {
          let {
              left: _v1,
              top: _v2
            } = _v17,
            {
              clientX: _v3,
              clientY: _v4
            } = _v0;
          _v7(_v3 - _v1 + 30), _v9(_v4 - _v2 - 10);
          let _v5 = _v18(_v3, _v4);
          _v11(_v5), _v13(_v5);
        };
      return (0, _v1.jsx)(_v3.Box, {
        as: "button",
        ref: _v3,
        background: "none",
        border: "none",
        color: "transparent",
        height: "100%",
        margin: "0",
        outline: "none",
        padding: "0",
        width: "100%",
        cursor: _v12 ? "pointer" : "default",
        onClick: _v0 => {
          (_v0 => {
            if (!_v18(_v0.clientX, _v0.clientY) || !_v4) return;
            let {
                clientX: _v1,
                clientY: _v2
              } = _v0,
              {
                left: _v3,
                top: _v4
              } = _v17,
              _v5 = _v26({
                x: _v1 - _v3,
                y: _v2 - _v4
              }, _v17);
            return _v4.pause(), _v14(_v0 => ({
              ..._v0,
              position: _v5,
              timecode: _v4.currentTime,
              isShowing: !0
            })), _v15();
          })(_v0), _v11(!1);
        },
        onMouseEnter: _v0 => {
          _v19(_v0);
        },
        onMouseMove: _v19,
        onMouseLeave: () => {
          _v11(!1), _v13(!1);
        },
        visibility: _v1 ? "hidden" : "visible",
        children: (0, _v1.jsx)(_v3.Box, {
          position: "absolute",
          top: 0,
          left: 0,
          transform: `translate3d(${_v6}px, ${_v8}px, 0)`,
          display: _v10 ? "block" : "none",
          fontSize: "14px",
          fontFamily: "body",
          padding: "8px 16px",
          whiteSpace: "nowrap",
          zIndex: 1,
          visibility: {
            base: "hidden",
            md: "visible"
          },
          borderRadius: "sm",
          sx: _v21.INVERTED_COLOR_STYLES,
          children: (0, _v5.translate)({
            singular: "Click to add a comment",
            dictionary: {
              es: {
                singular: "Haz clic para agregar un comentario"
              },
              "de-DE": {
                singular: "Klicken, um einen Kommentar hinzuzufügen"
              },
              "fr-FR": {
                singular: "Cliquer pour ajouter un commentaire"
              },
              "ja-JP": {
                singular: "クリックしてコメントを追加"
              },
              "ko-KR": {
                singular: "소감을 추가하려면 클릭하세요"
              },
              "pt-BR": {
                singular: "Clique para adicionar um comentário"
              },
              "zh-CN": {
                singular: "点击添加评论"
              }
            }
          })
        })
      });
    };
  var _v29 = _v0.i(0),
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
  let _v46 = {
      productContextFields: {
        product: "collaboration"
      },
      webContextFields: {
        page_name: "single_video_view_manage"
      }
    },
    _v47 = ({
      formRef: _v0,
      isDragging: _v1,
      accentColor: _v2,
      setIsMentionsActive: _v3,
      clipRequestId: _v4,
      reviewId: _v5
    }) => {
      let [_v6, _v7] = (0, _v2.useState)(!0),
        [_v8, _v9] = (0, _v2.useState)(!1),
        {
          annotationForm: _v10,
          setAnnotationForm: _v11,
          onCommentPosted: _v12
        } = (0, _v2.useContext)(_v23),
        _v13 = (0, _v2.useContext)(_v8.ViewerContext),
        _v14 = (0, _v2.useRef)({}),
        {
          cache: _v15,
          mutate: _v16
        } = (0, _v30.useSWRConfig)(),
        {
          postComment: _v17,
          postCommentLoading: _v18,
          lastAddedComment: _v19
        } = (0, _v39.usePostPrivateComment)(_v4, void 0, _v46, void 0, void 0, _v5, _v12),
        {
          videoData: _v20
        } = (0, _v41.useVideoData)(_v4, void 0, _v5),
        {
          trackReviewNotePosted: _v21
        } = (0, _v37.useReviewTracking)(),
        {
          guestUser: _v22
        } = (0, _v2.useContext)(_v40.guestLoginModalContext),
        _v23 = (0, _v44.getStorageInstance)(),
        _v24 = _v14?.current?.commentLength?.() ?? 0,
        {
          value: _v25,
          set: _v26,
          remove: _v27
        } = (0, _v35.default)(_v42.STASHED_COMMENTS_KEY, null, void 0, _v23),
        _v28 = (0, _v2.useCallback)(_v0 => {
          _v11(_v0 => ({
            ..._v0,
            text: _v0
          }));
        }, [_v11]),
        _v29 = (0, _v2.useCallback)(() => {
          Array.from(_v15?.keys() ?? []).filter(_v0 => _v0.includes("/private_comments")).forEach(_v0 => _v16(_v0));
        }, [_v15, _v16]);
      (0, _v2.useEffect)(() => {
        _v7(_v18 || _v10.text.trim().length < 1 || _v24 > _v21.MAX_COMMENT_CHARACTERS);
      }, [_v18, _v10.text, _v24]);
      let _v30 = (0, _v2.useCallback)(_v0 => {
        if (_v9(!0), !_v18) {
          let _v0 = (0, _v43.sanitiseSpaceInRichtext)(_v0 ?? _v10.text),
            _v1 = {
              x: _v10.position.x,
              y: _v10.position.y
            };
          if (!_v13?.user && !_v22) {
            let _v0 = JSON.stringify({
              text: _v10.text,
              isReply: !1,
              surface: "note"
            });
            (0, _v45.broadcastStashedComment)("note"), _v26(_v0);
          }
          _v17(_v0, _v10.timecode, (({
            x: _v0,
            y: _v1
          }) => ({
            x: parseFloat(_v0.toFixed(3)),
            y: parseFloat(_v1.toFixed(3))
          }))(_v1)).then(_v0 => {
            _v0 && _v29();
          });
        }
      }, [_v10, _v17, _v29, _v18]);
      return (0, _v2.useEffect)(() => {
        let _v0 = JSON.parse(_v25);
        _v22 && !_v13?.user && !_v18 && _v0?.text && "note" === _v0.surface && (_v30(_v0.text), _v27());
      }, [_v22, _v18, _v10, _v13?.user]), (0, _v2.useEffect)(() => {
        let _v0 = _v0 => {
          "note" !== _v0.detail && _v27();
        };
        return window.addEventListener(_v42.STASHED_COMMENTS_UPDATED_EVENT, _v0), () => window.removeEventListener(_v42.STASHED_COMMENTS_UPDATED_EVENT, _v0);
      }, [_v27]), (0, _v2.useEffect)(() => {
        _v8 && _v30();
      }, [_v8]), (0, _v2.useEffect)(() => {
        _v19 && (_v11(_v22), _v5 && _v21({
          reviewId: _v5,
          clipId: _v4,
          clipOwnerId: _v20?.user?.uri ? _v20.user.uri.split("/").pop() ?? null : null
        }));
      }, [_v19, _v11]), (0, _v1.jsxs)(_v49, {
        ref: _v0,
        isDragging: _v1,
        children: [(0, _v1.jsxs)(_v50, {
          children: [(0, _v1.jsx)(_v4.Button, {
            variant: "tertiary",
            _active: {
              cursor: "wait"
            },
            onClick: _v0 => {
              _v0.preventDefault(), _v31.FatalAttraction.trackClick({
                container: "video_review",
                component: "player",
                keyword: "comment_cancel"
              }), _v11(_v22);
            },
            children: (0, _v5.translate)({
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
          }), (0, _v1.jsx)(_v32.IconButton, {
            variant: "primary",
            color: _v2,
            icon: (0, _v1.jsx)(_v9.Checkmark, {}),
            onClick: () => {
              _v31.FatalAttraction.trackClick({
                container: "video_review",
                component: "player",
                keyword: "add_comment_submit"
              }), _v6 || _v30();
            },
            isDisabled: _v6,
            "aria-label": (0, _v5.translate)({
              singular: "Add",
              dictionary: {
                es: {
                  singular: "Agregar"
                },
                "de-DE": {
                  singular: "Hinzufügen"
                },
                "fr-FR": {
                  singular: "Ajouter"
                },
                "ja-JP": {
                  singular: "追加"
                },
                "ko-KR": {
                  singular: "추가"
                },
                "pt-BR": {
                  singular: "Adicionar"
                },
                "zh-CN": {
                  singular: "添加"
                }
              }
            })
          })]
        }), (0, _v1.jsx)(_v3.Box, {
          display: "flex",
          fontSize: {
            base: "18px",
            md: "14px"
          },
          children: (0, _v1.jsx)(_v3.Box, {
            flexGrow: 1,
            mt: "5px",
            maxHeight: "225px",
            minWidth: "0",
            position: "relative",
            children: (0, _v1.jsx)(_v38.CommentMentionModule, {
              clipRequestId: _v4,
              autoFocus: !0,
              isExpanded: !0,
              isPublic: !1,
              richtext: _v10.text,
              placeholder: (0, _v5.translate)({
                singular: "Add a note",
                dictionary: {
                  es: {
                    singular: "Agregar una nota"
                  },
                  "de-DE": {
                    singular: "Eine Anmerkung hinzufügen"
                  },
                  "fr-FR": {
                    singular: "Ajouter une note"
                  },
                  "ja-JP": {
                    singular: "メモを追加"
                  },
                  "ko-KR": {
                    singular: "메모 추가"
                  },
                  "pt-BR": {
                    singular: "Adicionar uma observação"
                  },
                  "zh-CN": {
                    singular: "添加一条备注"
                  }
                }
              }),
              setCommentText: _v28,
              richtextAreaRef: _v14,
              customRichTextAreaStyles: _v48,
              annotationTimeCode: (0, _v36.secondsToTimecode)(_v10.timecode ?? 0, !0),
              setIsMentionActive: _v3,
              onSubmitComment: () => {
                _v6 || _v9(!0);
              },
              onFocus: () => {
                _v14?.current?.focusEnd();
              },
              reviewId: _v5
            })
          })
        }), _v24 > _v21.MAX_COMMENT_CHARACTERS && (0, _v1.jsx)(_v3.Box, {
          display: "flex",
          justifyContent: "flex-end",
          children: (0, _v1.jsxs)(_v33.Text, {
            variant: "body-sm",
            color: "status-destructive-primary",
            py: "xs",
            children: [_v24, " / ", _v21.MAX_COMMENT_CHARACTERS, " ", (0, _v1.jsx)(_v34.VisuallyHidden, {
              children: (0, _v5.translate)({
                singular: "{overLimitCount} character over limit",
                plural: "{overLimitCount} characters over limit",
                count: Math.abs(_v24 - _v21.MAX_COMMENT_CHARACTERS),
                replacements: {
                  overLimitCount: Math.abs(_v24 - _v21.MAX_COMMENT_CHARACTERS)
                },
                dictionary: {
                  es: {
                    singular: "{overLimitCount} carácter por encima del límite",
                    plural: "{overLimitCount} caracteres por encima del límite"
                  },
                  "de-DE": {
                    singular: "{overLimitCount} Zeichen über dem Limit",
                    plural: "{overLimitCount} Zeichen über dem Limit"
                  },
                  "fr-FR": {
                    singular: "{overLimitCount} caractère au-delà de la limite",
                    plural: "{overLimitCount} caractères au-delà de la limite"
                  },
                  "ja-JP": {
                    singular: "{overLimitCount} 文字が上限を超えています",
                    plural: "{overLimitCount} 文字が上限を超えています"
                  },
                  "ko-KR": {
                    singular: "{overLimitCount}자 초과",
                    plural: "{overLimitCount}자 초과"
                  },
                  "pt-BR": {
                    singular: "{overLimitCount} caractere acima do limite",
                    plural: "{overLimitCount} caracteres acima do limite"
                  },
                  "zh-CN": {
                    singular: "{overLimitCount} 个字符超出限制",
                    plural: "{overLimitCount} 个字符超出限制"
                  }
                }
              })
            })]
          })
        }), (0, _v1.jsxs)(_v3.Box, {
          display: "flex",
          alignItems: "center",
          children: [(0, _v1.jsx)(_v3.Box, {
            fontSize: 12,
            opacity: .6,
            py: 8,
            flexBasis: "70%",
            color: "text-tertiary",
            children: (0, _v5.translate)({
              singular: "Use @ to mention others",
              dictionary: {
                es: {
                  singular: "Use @ para mencionar a otros"
                },
                "de-DE": {
                  singular: "Mit @ andere Personen erwähnen"
                },
                "fr-FR": {
                  singular: "Utilisez @ pour mentionner d'autres personnes"
                },
                "ja-JP": {
                  singular: "他のユーザーにコメントするには @ を使用します"
                },
                "ko-KR": {
                  singular: "다른 사람을 언급하려면 @를 사용하세요."
                },
                "pt-BR": {
                  singular: "Use @ para mencionar outros usuários"
                }
              }
            })
          }), (0, _v1.jsx)(_v3.Box, {
            flexBasis: "30%",
            justifyContent: "flex-end",
            display: {
              base: "none",
              md: "flex"
            },
            children: (0, _v1.jsx)(_v4.Button, {
              isDisabled: _v6,
              variant: "primary",
              size: "sm",
              isLoading: _v18,
              onClick: _v0 => {
                _v0.preventDefault(), _v31.FatalAttraction.trackClick({
                  container: "video_review",
                  component: "player",
                  keyword: "add_comment_submit"
                }), _v30();
              },
              children: (0, _v5.translate)({
                singular: "Post",
                dictionary: {
                  es: {
                    singular: "Publicar"
                  },
                  "de-DE": {
                    singular: "Posten"
                  },
                  "fr-FR": {
                    singular: "Publier"
                  },
                  "ja-JP": {
                    singular: "投稿"
                  },
                  "ko-KR": {
                    singular: "게시"
                  },
                  "pt-BR": {
                    singular: "Publicar"
                  },
                  "zh-CN": {
                    singular: "发布"
                  }
                }
              })
            })
          })]
        })]
      });
    },
    _v48 = {
      "*:focus-visible": {
        outline: "none"
      },
      color: "text-primary",
      ".ProseMirror p.is-editor-empty:first-child::before": {
        color: "text-secondary",
        content: "attr(data-placeholder)",
        float: "left",
        height: 0,
        pointerEvents: "none"
      },
      maxHeight: "225px",
      overflow: "auto"
    },
    _v49 = (0, _v2.forwardRef)(({
      isDragging: _v0,
      children: _v1
    }, _v2) => (0, _v1.jsx)(_v3.Box, {
      ref: _v2,
      backgroundColor: "background",
      boxShadow: "0 10px 12px 2px rgba(0, 0, 0, 0.25)",
      maxWidth: "100%",
      padding: "16px",
      position: {
        base: "fixed",
        md: "absolute"
      },
      width: {
        base: "100vw",
        md: "300px"
      },
      height: {
        base: "100vh",
        md: "auto"
      },
      top: {
        base: 0,
        md: "auto"
      },
      left: {
        base: 0,
        md: "auto"
      },
      right: {
        base: 0,
        md: "auto"
      },
      bottom: {
        base: 0,
        md: "auto"
      },
      transition: "opacity 0.2s ease-out, transform 0.2s ease-out",
      color: "gray",
      borderRadius: {
        base: 0,
        md: "16px"
      },
      opacity: {
        base: _v0 ? 1 : void 0,
        md: +!_v0
      },
      transform: _v0 ? "scale(0.95)" : "scale(1)",
      children: _v1
    })),
    _v50 = ({
      children: _v0
    }) => (0, _v1.jsx)(_v3.Box, {
      display: {
        base: "flex",
        md: "none"
      },
      justifyContent: "space-between",
      width: "100%",
      mb: "1.375rem",
      p: "2.5rem 0 1.375rem 0",
      borderBottom: "1px solid #eef1f2",
      fontSize: "1.125rem",
      sx: {
        "> svg": {
          position: "relative",
          top: "0.1875rem"
        }
      },
      children: _v0
    }),
    _v51 = ({
      bounds: _v0,
      position: _v1,
      onDragStart: _v2,
      onDragStop: _v3,
      boardRef: _v4,
      clickAreaRef: _v5,
      playerMeasurements: _v6,
      accentColor: _v7,
      isDragging: _v8 = !1,
      clipRequestId: _v9,
      reviewId: _v10
    }) => {
      let _v11 = (0, _v2.useRef)(null),
        _v12 = (0, _v2.useRef)(null),
        _v13 = (0, _v2.useRef)(null),
        _v14 = (0, _v2.useRef)(!1),
        [_v15, _v16] = (0, _v2.useState)(!1),
        {
          annotationForm: _v17,
          setAnnotationForm: _v18
        } = (0, _v2.useContext)(_v23),
        {
          modalState: {
            isActive: _v19
          }
        } = (0, _v2.useContext)(_v40.guestLoginModalContext),
        _v20 = () => {
          _v14.current = !0;
        },
        _v21 = (0, _v2.useCallback)(_v0 => {
          "Escape" === _v0.key && _v18(_v22);
        }, [_v18]),
        _v22 = (0, _v2.useCallback)(() => {
          if (!(window.innerWidth <= 768)) {
            if (_v12.current && _v13.current && _v5.current) {
              let {
                x: _v0,
                y: _v1
              } = ((_v0, _v1, _v2) => {
                let _v3 = _v2.getBoundingClientRect(),
                  _v4 = _v0.getBoundingClientRect(),
                  _v5 = {
                    x: _v4.top - _v3.top + 19,
                    y: _v4.left - _v3.left + 19
                  },
                  _v6 = {
                    width: _v2.offsetWidth,
                    height: _v2.offsetHeight
                  },
                  _v7 = {
                    width: _v1.offsetWidth,
                    height: _v1.offsetHeight
                  },
                  _v8 = {
                    canFitTop: _v5.x - 34 > 0,
                    canFitBottom: _v5.x + _v7.height - 34 < _v6.height + 60,
                    canFitRight: _v5.y + _v7.width + 19 < _v6.width,
                    canFitLeft: _v5.y - 34 > 0
                  },
                  _v9 = {
                    moveBottom: _v5.x + 19,
                    moveLeft: _v5.y - 34,
                    moveInverse: _v5.y - (_v7.width + 19),
                    moveRight: _v5.y + 19,
                    moveTop: _v5.x - 34,
                    moveAbove: _v5.x - (_v7.height - 60 + 2)
                  },
                  _v10 = {
                    x: _v9.moveTop,
                    y: _v9.moveRight
                  };
                switch (!0) {
                  case !_v8.canFitTop && !_v8.canFitLeft:
                    _v10.x = _v9.moveBottom, _v10.y = _v9.moveRight;
                    break;
                  case !_v8.canFitTop && !_v8.canFitRight:
                    _v10.x = _v9.moveBottom, _v10.y = _v9.moveInverse;
                    break;
                  case !_v8.canFitRight && !_v8.canFitBottom:
                    _v10.x = _v9.moveAbove, _v10.y = _v9.moveInverse;
                    break;
                  case !_v8.canFitTop:
                    _v10.x = _v9.moveBottom, _v10.y = _v9.moveLeft;
                    break;
                  case !_v8.canFitRight:
                    _v10.x = _v9.moveTop, _v10.y = _v9.moveInverse;
                    break;
                  case !_v8.canFitBottom:
                    _v10.x = _v9.moveAbove, _v10.y = _v9.moveRight;
                    break;
                  default:
                    _v10.x = _v9.moveTop, _v10.y = _v9.moveRight;
                }
                return _v10;
              })(_v12.current, _v13.current, _v5.current);
              _v0 + _v13.current.offsetHeight > _v6.height && (_v0 = _v6.height - _v13.current.offsetHeight), _v13.current.style.top = `${_v0}px`, _v13.current.style.left = `${_v1}px`;
            }
            _v14.current = !1;
          }
        }, [_v5, _v6, _v17]);
      return (0, _v2.useEffect)(() => (window.addEventListener("resize", _v20), document.addEventListener("keydown", _v21), _v22(), () => {
        window.removeEventListener("resize", _v20), document.removeEventListener("keydown", _v21);
      }), [_v21, _v22]), (0, _v29.default)([_v11], () => {
        _v15 || _v19 || _v18(_v0 => ({
          ..._v0,
          isShowing: !1
        }));
      }, null, [_v15, _v19]), (0, _v2.useEffect)(() => {
        (_v14.current || !_v8) && _v22();
      }, [_v8, _v22]), (0, _v1.jsxs)("div", {
        ref: _v11,
        children: [(0, _v1.jsx)(_v18, {
          bounds: _v0,
          isActive: !1,
          position: _v1,
          onStart: _v2,
          onStop: _v3,
          buttonRef: _v12,
          boardRef: _v4,
          accentColor: _v7
        }), (0, _v1.jsx)(_v47, {
          formRef: _v13,
          isDragging: _v8,
          accentColor: _v7,
          setIsMentionsActive: _v16,
          clipRequestId: _v9,
          reviewId: _v10
        })]
      });
    };
  ((_v0, _v1, _v2) => {
    "string" != typeof _v2 && (_v2 = String(_v2));
    let _v3 = Array(_v1).fill(_v0).join("");
    return `${_v3}${_v2}`.slice(-1 * _v1);
  }).bind(null, "0", 2);
  let _v52 = (_v0, _v1) => {
    let _v2 = +_v0 + _v1 / 2;
    return _v2 - _v2 % _v1;
  };
  var _v53 = _v0.i(0);
  let _v54 = {
      productContextFields: {
        product: "collaboration"
      },
      webContextFields: {
        page_name: "single_video_view_manage"
      }
    },
    _v55 = _v0 => {
      let {
          playerMeasurements: _v1,
          playerContainerRef: _v2,
          accentColor: _v3,
          player: _v4,
          clipRequestId: _v5,
          isViewOnly: _v6,
          reviewId: _v7,
          isPaused: _v8,
          currentTime: _v9,
          isSeeked: _v10,
          videoAspectRatio: _v11
        } = _v0,
        {
          comments: _v12,
          activeComment: _v13,
          setActiveComment: _v14,
          setCommentAnnotationFormShown: _v15
        } = (0, _v2.useContext)(_v25.CommentsContext),
        _v16 = (0, _v2.useContext)(_v8.ViewerContext),
        {
          videoData: _v17
        } = (0, _v41.useVideoData)(_v5, void 0, _v7),
        {
          annotationForm: _v18,
          setAnnotationForm: _v19
        } = (0, _v2.useContext)(_v23),
        {
          setHighlightedCommentId: _v20
        } = (0, _v2.useContext)(_v7.CommentHighlightContext),
        _v21 = (0, _v2.useRef)(null),
        _v22 = (0, _v2.useRef)(null),
        [_v23, _v24] = (0, _v2.useState)(!1),
        {
          updateCommentPosition: _v25
        } = (0, _v53.useEditPrivateComment)(_v5, _v17, void 0, _v54, void 0, void 0, _v7);
      (0, _v2.useEffect)(() => {
        _v15(_v18.isShowing);
      }, [_v18.isShowing, _v15]);
      let _v26 = (0, _v2.useMemo)(() => _v9 && (_v8 || _v10) ? _v12?.filter(_v0 => {
          let _v1;
          return _v1 = _v0?.timeCode ?? -1, _v52(_v1, .01) === _v52(_v9, .01);
        }) : [], [_v9, _v12, _v8, _v10]),
        _v27 = {
          bottom: _v1.height,
          left: 0,
          right: _v1.width,
          top: 0
        },
        _v28 = (_v0, _v1) => {
          _v1 = _v26(_v1, _v1), _v19(_v0 => ({
            ..._v0,
            position: _v1
          })), _v24(!1), _v13 && _v25(_v13.id, _v1).then(() => _v13.coordinates = _v1);
        };
      return (0, _v1.jsxs)(_v3.Box, {
        ref: _v21,
        fontSize: "14px",
        lineHeight: "1.2",
        top: "0",
        left: "0",
        transformOrigin: "top left",
        pointerEvents: "all",
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: _v18.isShowing ? 36 : 8,
        onClick: () => {
          if (_v6) {
            if (_v4.paused) return void _v4?.play()?.catch(_v0 => {
              if (_v0 && "AbortError" !== _v0.name) throw _v0;
            });
            _v4?.pause();
          }
        },
        children: [_v2.current && !_v6 && (0, _v1.jsx)(_v28, {
          isHidden: _v18.isShowing,
          clipRequestId: _v5,
          playerContainerRefNode: _v2.current,
          clickAreaRef: _v22,
          player: _v4,
          videoAspectRatio: _v11,
          videoData: {
            videoPrivacy: _v17?.privacy.view,
            uploaderLink: _v17?.uploader?.link
          }
        }), _v26.map(_v0 => {
          if (!_v0) return null;
          let _v1 = _v0.coordinates;
          if (_v1?.x === 0 && _v1?.y === 0) return null;
          let _v2 = _v0.id === _v13?.id,
            _v3 = !!_v16?.user?.uri && _v16?.user?.uri === _v0.user?.uri;
          return (0, _v1.jsx)(_v18, {
            id: `anchor_${_v0.id.split("/").pop()}`,
            onClick: _v0 => {
              _v6 && _v0.stopPropagation(), _v14(_v0);
            },
            onMouseEnter: () => {
              _v20(_v0.id);
            },
            onMouseLeave: () => {
              _v20(null);
            },
            isActive: _v2,
            isDisabled: !_v2 || !_v3,
            disabled: !_v2 || !_v3,
            bounds: _v27,
            onStart: () => _v24(!0),
            onStop: _v28,
            position: _v27({
              x: _v1?.x || 1,
              y: _v1?.y || 1
            }, _v1),
            boardRef: _v21,
            accentColor: _v3,
            showCheckmark: "open" !== _v0.status
          }, _v0.id);
        }), !_v18.isShowing || _v6 ? null : (0, _v1.jsx)(_v51, {
          bounds: _v27,
          onDragStart: () => _v24(!0),
          onDragStop: _v28,
          position: _v27({
            x: _v18.position.x,
            y: _v18.position.y
          }, _v1),
          boardRef: _v21,
          clickAreaRef: _v22,
          playerMeasurements: _v1,
          accentColor: _v3,
          isDragging: _v23,
          clipRequestId: _v5,
          reviewId: _v7
        })]
      });
    },
    _v56 = ({
      zIndex: _v0,
      children: _v1,
      onClick: _v2
    }) => (0, _v1.jsx)(_v3.Box, {
      fontSize: "text-sm",
      color: "whiteAlpha.900",
      sx: {
        textRendering: "optimizeLegibility",
        WebkitFontSmoothing: "auto"
      },
      zIndex: _v0 || "auto",
      width: "100%",
      position: "absolute",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      top: "0",
      left: "0",
      bottom: {
        base: "0",
        md: "60px"
      },
      onClick: _v2,
      children: _v1
    });
  var _v57 = _v0.i(0),
    _v58 = _v0.i(0);
  let _v59 = _v0 => {
    let {
        playerContainerRef: _v1,
        teamAccentColor: _v2,
        player: _v3,
        clipRequestId: _v4,
        showSvvTimecodedComments: _v5,
        isViewOnly: _v6,
        reviewId: _v7,
        videoAspectRatio: _v8,
        onCommentPosted: _v9
      } = _v0,
      {
        activeComment: _v10
      } = (0, _v2.useContext)(_v25.CommentsContext),
      [_v11, _v12] = (0, _v2.useState)({
        width: 0,
        height: 0
      }),
      _v13 = !_v5 || _v11.width < _v6.BREAKPOINTS.medium,
      {
        isPaused: _v14,
        currentTime: _v15,
        isSeeked: _v16
      } = (_v0 => {
        let [_v1, _v2] = (0, _v2.useState)(!1),
          [_v3, _v4] = (0, _v2.useState)(0),
          [_v5, _v6] = (0, _v2.useState)(!1),
          _v7 = (0, _v2.useCallback)(_v0 => {
            _v4(_v0.seconds), _v6(!1);
          }, []),
          _v8 = (0, _v2.useCallback)(() => {
            _v2(!0), _v6(!1);
          }, []);
        return (0, _v2.useEffect)(() => {
          if (_v0) return _v0.ready?.(() => {
            _v0.on("pause", _v8), _v0.on("seeked", _v7), _v0.on("timeupdate", _v7), _v0.on("seeked", () => _v6(!0));
          }), () => {
            _v0?.off && (_v0.off("pause", _v8), _v0.off("seeked", _v7), _v0.off("timeupdate", _v7), _v0.off("seeked", () => _v6(!0)));
          };
        }, [_v0, _v7, _v8]), {
          isPaused: _v1,
          currentTime: _v3,
          isSeeked: _v5
        };
      })(_v3),
      _v17 = (0, _v2.useCallback)(() => {
        _v1.current && _v12({
          height: _v1.current.offsetHeight,
          width: _v1.current.offsetWidth
        });
      }, [_v1]),
      _v18 = (0, _v2.useCallback)(() => {
        document.fullscreenElement || _v17();
      }, [_v17]);
    (0, _v2.useEffect)(() => (window.addEventListener("resize", _v17), window.addEventListener("fullscreenchange", _v18), () => {
      window.removeEventListener("resize", _v17), window.removeEventListener("fullscreenchange", _v18);
    }), [_v18, _v17]), (0, _v2.useEffect)(() => {
      _v1.current && (_v17(), setTimeout(() => {
        window.dispatchEvent(new Event("resize"));
      }, 0));
    }, [_v1, _v17, _v1?.current?.offsetHeight, _v1?.current?.offsetWidth]), (0, _v2.useEffect)(() => {
      _v3 && !_v14 && _v3?.ready?.(() => {
        _v3.pause();
      });
    }, []);
    let _v19 = (0, _v2.useCallback)(() => {
      _v3 && _v3?.ready?.(() => {
        _v3.play()?.catch(_v0 => {
          if (_v0 && "AbortError" !== _v0.name) throw _v0;
        });
      });
    }, [_v3]);
    return _v13 ? null : _v15 || _v10 || _v6 ? (0, _v1.jsx)(_v56, {
      children: (0, _v1.jsx)(_v24, {
        onCommentPosted: _v9,
        children: (0, _v1.jsx)(_v55, {
          playerMeasurements: _v11,
          playerContainerRef: _v1,
          accentColor: _v2 ?? "vimeoBlue.500",
          player: _v3,
          clipRequestId: _v4,
          isViewOnly: _v6,
          reviewId: _v7,
          videoAspectRatio: _v8,
          currentTime: _v15,
          isPaused: _v14,
          isSeeked: _v16
        })
      })
    }) : (0, _v1.jsx)(_v56, {
      zIndex: 2,
      onClick: _v19,
      children: (0, _v1.jsx)(_v3.Box, {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "none",
        position: "absolute",
        top: "0px",
        left: "0px",
        width: "100%",
        height: "100%",
        children: (0, _v1.jsx)(_v4.Button, {
          variant: "primary",
          size: "lg",
          onClick: _v19,
          marginTop: {
            base: "0",
            md: "60px"
          },
          children: (0, _v5.translate)({
            singular: "Play to comment",
            dictionary: {
              es: {
                singular: "Reproduzca para comentar"
              },
              "de-DE": {
                singular: "Abspielen, um zu kommentieren"
              },
              "fr-FR": {
                singular: "Lisez la vidéo pour ajouter un commentaire"
              },
              "ja-JP": {
                singular: "再生してコメント"
              },
              "ko-KR": {
                singular: "댓글을 달려면 동영상을 재생하세요."
              },
              "pt-BR": {
                singular: "Assista ao vídeo para comentar"
              },
              "zh-CN": {
                singular: "播放后才能评论"
              }
            }
          })
        })
      })
    });
  };
  _v0.s(["AnnotationsOverlay", 0, _v0 => {
    let {
        privacy: _v1
      } = (0, _v57.useVideoPrivacy)(_v0.clipRequestId, void 0, _v0.reviewId),
      _v2 = _v1?.view === "unlisted" || _v0.reviewId ? _v40.GuestLoginModal : _v58.LoginModal;
    return (0, _v1.jsx)(_v40.GuestLoginModalProvider, {
      children: (0, _v1.jsxs)(_v58.LoginModalProvider, {
        children: [(0, _v1.jsx)(_v59, {
          ..._v0
        }), (0, _v1.jsx)(_v2, {})]
      })
    });
  }], 0);
}