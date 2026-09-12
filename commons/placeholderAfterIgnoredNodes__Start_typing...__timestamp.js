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
    _v22 = _v0.i(0);
  let _v23 = _v20.Extension.create({
    name: "placeholderAfterIgnoredNodes",
    addOptions: () => ({
      placeholder: "Start typing...",
      ignoreNodeTypes: ["timestamp"]
    }),
    addProseMirrorPlugins() {
      let {
        placeholder: _v0,
        ignoreNodeTypes: _v1 = ["timestamp"]
      } = this.options;
      return [new _v21.Plugin({
        key: new _v21.PluginKey("placeholderAfterIgnoredNodes"),
        props: {
          decorations: ({
            doc: _v0
          }) => {
            let _v1 = 0,
              _v2 = !1,
              _v3 = !1;
            if (_v0.descendants((_v0, _v1) => {
              _v1.includes(_v0.type.name) ? (_v2 = !0, _v1 = _v1 + _v0.nodeSize) : _v0.isText && _v0.text && _v0.text.trim().length > 0 ? _v3 = !0 : _v0.isText || "paragraph" === _v0.type.name || "doc" === _v0.type.name || _v1.includes(_v0.type.name) || !_v0.isInline || (_v3 = !0);
            }), _v2 && !_v3) return _v22.DecorationSet.create(_v0, [_v22.Decoration.widget(_v1, () => {
              let _v0 = document.createElement("span");
              return _v0.className = "placeholder-after-ignored", _v0.style.cssText = "pointer-events: none; user-select: none; color: var(--text-secondary, #999); font-size: 14px;", _v0.setAttribute("data-placeholder", _v0), _v0.textContent = _v0, _v0;
            })]);
            if (!_v2 && !_v3 && _v0.childCount > 0) {
              let _v0 = _v0.firstChild;
              if (_v0 && "paragraph" === _v0.type.name) return _v22.DecorationSet.create(_v0, [_v22.Decoration.widget(1, () => {
                let _v0 = document.createElement("span");
                return _v0.className = "placeholder-start", _v0.style.cssText = "pointer-events: none; user-select: none; color: var(--text-secondary, #999); font-size: 14px;", _v0.setAttribute("data-placeholder", _v0), _v0.textContent = _v0, _v0;
              })]);
            }
            return null;
          }
        }
      })];
    }
  });
  var _v24 = _v0.i(0),
    _v25 = _v0.i(0);
  let _v26 = (0, _v10.forwardRef)(({
    children: _v0
  }, _v1) => (0, _v1.jsx)(_v24.Box, {
    as: "span",
    fontWeight: "bold",
    lineHeight: "1.6",
    ref: _v1,
    paddingInlineEnd: "4px",
    children: (0, _v1.jsx)(_v24.Box, {
      as: "span",
      ..._v25.TIMESTAMP_BADGE_LAYOUT_PROPS,
      sx: _v25.TIMESTAMP_BADGE_COLOR_STYLES,
      children: _v0
    })
  }));
  _v26.displayName = "FormInputTimecode";
  let _v27 = ({
      node: {
        attrs: _v0
      }
    }) => {
      let {
        value: _v1,
        hidden: _v2
      } = _v0;
      return _v2 || !_v1 ? (0, _v1.jsx)(_v7.NodeViewWrapper, {
        style: {
          display: "none"
        }
      }) : (0, _v1.jsx)(_v7.NodeViewWrapper, {
        as: "span",
        style: {
          display: "inline-block",
          userSelect: "none",
          pointerEvents: "none"
        },
        children: (0, _v1.jsx)(_v26, {
          children: _v1
        })
      });
    },
    _v28 = _v20.Node.create({
      name: "timestamp",
      group: "inline",
      inline: !0,
      atom: !0,
      selectable: !1,
      draggable: !1,
      defining: !1,
      marks: "",
      addOptions: () => ({
        HTMLAttributes: {}
      }),
      addAttributes: () => ({
        value: {
          default: "",
          parseHTML: _v0 => _v0.getAttribute("data-value"),
          renderHTML: _v0 => _v0.value ? {
            "data-value": _v0.value
          } : {}
        },
        hidden: {
          default: !1,
          parseHTML: _v0 => "true" === _v0.getAttribute("data-hidden"),
          renderHTML: _v0 => ({
            "data-hidden": String(_v0.hidden)
          })
        }
      }),
      parseHTML: () => [{
        tag: "span[data-timestamp]"
      }],
      renderHTML({
        node: _v0,
        HTMLAttributes: _v1
      }) {
        return ["span", (0, _v20.mergeAttributes)(this.options.HTMLAttributes, _v1, {
          "data-timestamp": ""
        })];
      },
      addNodeView: () => (0, _v7.ReactNodeViewRenderer)(_v27),
      addCommands: () => ({
        setTimestamp: _v0 => ({
          tr: _v0,
          state: _v1,
          dispatch: _v2
        }) => {
          let {
              doc: _v3
            } = _v1,
            _v4 = !_v0,
            _v5 = _v0 || "";
          _v0.setMeta("fromSetTimestamp", !0);
          let _v6 = [],
            _v7 = !1;
          _v3.descendants((_v0, _v1) => {
            if ("timestamp" === _v0.type.name) {
              let _v0 = !_v7;
              _v0 && (_v7 = !0), _v6.push({
                node: _v0,
                pos: _v1,
                isFirst: _v0
              });
            }
          });
          let _v8 = _v6.filter(_v0 => !_v0.isFirst);
          for (let _v0 = _v8.length - 1; _v0 >= 0; _v0--) {
            let {
              pos: _v0,
              node: _v1
            } = _v8[_v0];
            _v0.delete(_v0, _v0 + _v1.nodeSize);
          }
          let _v9 = _v6.find(_v0 => _v0.isFirst);
          if (_v9) {
            let {
                node: _v0,
                pos: _v1
              } = _v9,
              _v2 = _v0.attrs.value,
              _v3 = _v0.attrs.hidden;
            (_v2 !== _v5 || _v3 !== _v4) && _v0.setNodeMarkup(_v1, void 0, {
              value: _v5,
              hidden: _v4
            });
          } else {
            let _v0 = _v3.firstChild;
            if (_v0 && "paragraph" === _v0.type.name) {
              let _v0 = _v1.schema.nodes.timestamp.create({
                value: _v5,
                hidden: _v4
              });
              _v0.insert(1, _v0);
            }
          }
          return _v2 && _v0.docChanged && _v2(_v0), !0;
        }
      }),
      addProseMirrorPlugins: () => [new _v21.Plugin({
        key: new _v21.PluginKey("timestampCursorBlock"),
        appendTransaction: (_v0, _v1, _v2) => {
          if (_v1.selection.eq(_v2.selection)) return null;
          let {
              selection: _v3,
              doc: _v4
            } = _v2,
            {
              $from: _v5
            } = _v3;
          if (!_v3.empty) return null;
          if (1 === _v5.pos) {
            let _v0 = _v4.firstChild;
            if (_v0 && "paragraph" === _v0.type.name) {
              let _v0 = _v0.firstChild;
              if (_v0 && "timestamp" === _v0.type.name) {
                let _v0 = _v2.tr,
                  _v1 = 1 + _v0.nodeSize;
                return _v0.setSelection(_v21.TextSelection.near(_v4.resolve(_v1), 1)), _v0;
              }
            }
          }
          return null;
        }
      }), new _v21.Plugin({
        key: new _v21.PluginKey("timestampCleanup"),
        appendTransaction: (_v0, _v1, _v2) => {
          if (_v0.some(_v0 => _v0.getMeta("fromSetTimestamp")) || _v0.some(_v0 => _v0.getMeta("fromTimestampCleanup"))) return null;
          let _v3 = null,
            _v4 = !1;
          _v1.doc.descendants(_v0 => {
            if (!_v4 && "timestamp" === _v0.type.name) return _v3 = _v0, _v4 = !0, !1;
          });
          let _v5 = !1;
          if (_v2.doc.descendants(_v0 => {
            if ("timestamp" === _v0.type.name) return _v5 = !0, !1;
          }), _v3 && !_v5) {
            let _v0 = _v2.tr;
            _v0.setMeta("fromTimestampCleanup", !0);
            let _v1 = _v2.doc.firstChild;
            if (_v1 && "paragraph" === _v1.type.name) return _v0.insert(1, _v3), _v0;
          }
          let _v6 = [];
          if (_v2.doc.descendants((_v0, _v1) => {
            "timestamp" === _v0.type.name && _v6.push({
              pos: _v1,
              node: _v0
            });
          }), _v6.length > 1) {
            let _v0 = _v2.tr;
            _v0.setMeta("fromTimestampCleanup", !0);
            for (let _v0 = _v6.length - 1; _v0 > 0; _v0--) {
              let {
                pos: _v0,
                node: _v1
              } = _v6[_v0];
              _v0.delete(_v0, _v0 + _v1.nodeSize);
            }
            return _v0;
          }
          return null;
        }
      })]
    }),
    _v29 = (0, _v10.memo)((0, _v10.forwardRef)(({
      autoFocus: _v0 = !1,
      richtext: _v1 = "",
      isExpanded: _v2 = !1,
      placeholder: _v3,
      isPublic: _v4,
      onFocus: _v5,
      setCommentText: _v6,
      mentionExtensionItemCallback: _v7,
      onMentionStart: _v8,
      onMentionUpdate: _v9,
      onMentionsExit: _v10,
      onKeyUpHandler: _v11,
      onKeyDownHandler: _v12,
      onMentioneeAdd: _v13,
      onMentioneeRemove: _v14,
      onSubmit: _v15,
      onSubmitComment: _v16,
      customRichTextAreaStyles: _v17,
      teamOwnerId: _v18,
      commentContextFields: _v19,
      isDisabled: _v20 = !1,
      annotationTimeCode: _v21,
      textLimit: _v22
    }, _v23) => {
      let _v24 = (0, _v10.useRef)(void 0),
        _v25 = (0, _v10.useRef)(""),
        _v26 = (0, _v10.useRef)(!1),
        _v27 = _v4 ? "viewer" : "collaborator",
        _v28 = (0, _v10.useRef)(_v16);
      (0, _v10.useEffect)(() => {
        _v28.current = _v16;
      }, [_v16]);
      let _v29 = (0, _v10.useMemo)(() => {
          try {
            return JSON.parse(_v1);
          } catch (_v0) {
            return;
          }
        }, [_v1]),
        _v30 = (0, _v7.useEditor)({
          editorProps: {
            handleDOMEvents: {
              keyup: (_v0, _v1) => _v11?.(_v25.current, _v0, _v1),
              keydown: (_v0, _v1) => _v12?.(_v25.current, _v0, _v1, _v28.current)
            },
            handleClick: _v0 => {
              _v0.hasFocus() || _v20 || _v5();
            }
          },
          editable: !_v20,
          extensions: [_v3.default, _v2.default, _v6.default, _v5.default, _v4.default, _v28, _v19.default.configure({
            onMentionAdd: _v13,
            onMentionRemove: _v14,
            suggestion: {
              allowedPrefixes: null,
              allowSpaces: !1,
              findSuggestionMatch: _v18.findSuggestionMatch,
              items: ({
                query: _v0
              }) => (_v0.length && setTimeout(() => _v7?.(_v0, _v27, _v18)), _v25.current = _v0, []),
              render: () => ({
                onStart: _v0 => {
                  _v24.current = _v0, _v26.current = !0, _v8?.();
                },
                onUpdate: _v0 => {
                  _v24.current = _v0, _v9?.();
                },
                onExit: _v0 => {
                  _v24.current = _v0, _v26.current = !1, _v10?.();
                }
              })
            }
          }), _v23.configure({
            placeholder: _v3,
            ignoreNodeTypes: ["timestamp"]
          })],
          onFocus: () => {
            _v5();
          },
          onUpdate: ({
            editor: _v0
          }) => {
            _v6(JSON.stringify(_v30(_v0.getJSON()) || ""));
          },
          content: _v29
        });
      (0, _v10.useEffect)(() => {
        _v0 && _v30?.commands?.focus?.("end");
      }, [_v30, _v0]), (0, _v10.useEffect)(() => {
        _v30 && !_v30.isDestroyed && _v30.commands.setTimestamp(_v21 || null);
      }, [_v30, _v21]), (0, _v10.useImperativeHandle)(_v23, () => ({
        clearContent: () => {
          setTimeout(() => {
            _v30?.commands?.clearContent();
          }, 0);
        },
        addMentionNode: _v0 => _v24.current?.command?.(_v0),
        selectRange: () => _v30?.commands?.selectTextblockStart(),
        getMentionQuery: () => _v25.current,
        toggleParagraph: () => _v30?.commands?.setParagraph(),
        toggleBold: () => _v30?.commands?.toggleBold?.(),
        onSubmit: async () => await _v15?.(),
        isUserMentioned: () => {
          let _v0 = !1;
          return _v30?.state.doc.descendants(_v0 => {
            "mention" == _v0.type.name && (_v0 = !0);
          }), _v0;
        },
        commentLength: () => _v30?.getText().trim().length,
        focusEnd: () => !_v26?.current && _v30?.commands?.focus?.("end"),
        removeFocus: () => {
          if (!_v26?.current) return _v30?.commands?.blur();
        },
        getCommentContent: () => JSON.stringify(_v30(_v30?.getJSON()) || ""),
        setContent: _v0 => _v30?.commands?.setContent(_v0)
      }), [_v30, _v15]);
      let [_v31, _v32] = (0, _v10.useState)("hidden");
      (0, _v10.useEffect)(() => {
        _v2 ? setTimeout(() => {
          _v32("auto");
        }, 300) : _v32("hidden");
      }, [_v2]);
      let _v33 = _v19?.isReply || _v19?.isEdit,
        _v34 = _v30?.getText().trim().length || 0,
        _v35 = !!_v22 && _v34 > _v22,
        _v36 = (0, _v10.useMemo)(() => {
          let _v0 = _v35 ? "status-destructive-primary" : "text-primary";
          return {
            ".richtextCommentBox": {
              border: _v33 && !_v2 ? "none" : "1px solid",
              borderRadius: "input-md",
              borderColor: _v20 ? "input-stroke" : _v2 ? _v0 : "input-stroke-hover",
              overflowY: "hidden"
            },
            ".richtextCommentBox:focus-within": {
              borderWidth: _v2 ? "2px" : "1px",
              borderColor: _v2 ? _v0 : "input-stroke-hover"
            },
            ".ProseMirror:focus-visible": {
              outline: "none"
            },
            ".ProseMirror": {
              color: "text-primary",
              height: _v2 ? "78px" : "38px",
              padding: _v2 ? "10px 12px" : "5px 12px",
              fontWeight: "regular",
              resize: "none",
              backgroundColor: _v2 ? "surface" : "default",
              transition: "height 120ms ease-in-out 0s",
              overflowY: _v31,
              "p:first-of-type": {
                maxWidth: _v2 ? "100%" : "calc(100% - 20px)"
              }
            }
          };
        }, [_v2, _v20, _v31, _v33, _v35]);
      return (0, _v1.jsxs)(_v8.AnimatePresence, {
        children: [(0, _v1.jsxs)(_v13.InputGroup, {
          display: "inline-block",
          sx: _v17 || _v36,
          as: _v9.motion.div,
          initial: {
            opacity: 0,
            height: 0
          },
          animate: {
            opacity: 1,
            height: "auto",
            transition: {
              type: "tween"
            }
          },
          exit: {
            opacity: 0,
            height: 0
          },
          children: [(0, _v1.jsx)(_v7.EditorContent, {
            className: "richtextCommentBox",
            content: _v1,
            editor: _v30
          }), _v2 ? null : (0, _v1.jsx)(_v14.InputRightElement, {
            opacity: "0.6",
            color: "text-primary",
            children: (0, _v1.jsx)(_v16.Send, {
              color: _v20 ? "input-stroke-hover" : "text-primary"
            })
          })]
        }), (0, _v1.jsx)(_v11.Flex, {
          justifyContent: "flex-end",
          children: _v2 && _v22 && _v35 && (0, _v1.jsxs)(_v12.Text, {
            variant: "body-sm",
            color: "status-destructive-primary",
            children: [_v34, " / ", _v22, " ", (0, _v1.jsx)(_v15.VisuallyHidden, {
              children: _v17.T.CharactersOverLimit(Math.abs(_v22 - _v34))
            })]
          })
        })]
      });
    })),
    _v30 = _v0 => {
      if (!_v0) return _v0;
      if (_v0.type !== _v28.name) {
        if (_v0.content && Array.isArray(_v0.content)) {
          let _v0 = _v0.content.map(_v30).filter(_v0 => void 0 !== _v0);
          if (_v0.length > 0) return {
            ..._v0,
            content: _v0
          };
          let {
            content: _v1,
            ..._v2
          } = _v0;
          return _v2;
        }
        return _v0;
      }
    };
  _v0.s(["RichTextArea", 0, _v29], 0);
  var _v31 = _v0.i(0),
    _v32 = _v0.i(0),
    _v33 = _v0.i(0),
    _v34 = _v0.i(0);
  async function _v35({
    baseUrl: _v0,
    select: _v1,
    where: {
      albumId: _v2,
      videoId: _v3
    },
    query: _v4,
    ..._v5
  }) {
    return (0, _v33.measureLatency)("getAlbumVideoSuggestedUserMentions", "GET", async () => {
      let _v0 = await fetch(`${_v0}/albums/${_v2}/videos/${_v3}/suggested_user_mentions?${(0, _v34.searchQueryString)(_v4)}&fields=${_v1.map(_v34.intoSnakeCase).join(",")}`, {
        ..._v5,
        method: "GET"
      });
      if (!_v0.ok) throw new _v34.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v34.deepCamelCase)(_v1);
    });
  }
  var _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0),
    _v39 = _v0.i(0),
    _v40 = _v0.i(0);
  function _v41() {
    let {
        mutate: _v0
      } = (0, _v37.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v40.useGctlConfig)(),
      [_v5, _v6] = (0, _v38.useInternalState)();
    return [(0, _v10.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/albums/${_v0.where.albumId}/videos/${_v0.where.videoId}/suggested_user_mentions${(0, _v38.serializeQuery)(_v0)}`, _v35({
          ..._v0,
          baseUrl: _v1,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v2 ? `jwt ${_v2}` : "",
            "Vimeo-Page": `${_v3}`,
            "Accept-Language": _v4 ?? "en"
          }
        }));
        _v6({
          type: "SUCCESS",
          payload: _v0
        });
      } catch (_v0) {
        _v6({
          type: "FAILURE",
          payload: _v0
        });
      }
    }, [_v1, _v3, _v2, _v4, _v6]), _v5];
  }
  async function _v42({
    baseUrl: _v0,
    select: _v1,
    where: {
      videoId: _v2
    },
    query: _v3,
    ..._v4
  }) {
    return (0, _v33.measureLatency)("getVideoSuggestedUserMentions", "GET", async () => {
      let _v0 = await fetch(`${_v0}/videos/${_v2}/suggested_user_mentions?${(0, _v34.searchQueryString)(_v3)}&fields=${_v1.map(_v34.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "GET"
      });
      if (!_v0.ok) throw new _v34.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v34.deepCamelCase)(_v1);
    });
  }
  function _v43() {
    let {
        mutate: _v0
      } = (0, _v37.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v40.useGctlConfig)(),
      [_v5, _v6] = (0, _v38.useInternalState)();
    return [(0, _v10.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/videos/${_v0.where.videoId}/suggested_user_mentions${(0, _v38.serializeQuery)(_v0)}`, _v42({
          ..._v0,
          baseUrl: _v1,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v2 ? `jwt ${_v2}` : "",
            "Vimeo-Page": `${_v3}`,
            "Accept-Language": _v4 ?? "en"
          }
        }));
        _v6({
          type: "SUCCESS",
          payload: _v0
        });
      } catch (_v0) {
        _v6({
          type: "FAILURE",
          payload: _v0
        });
      }
    }, [_v1, _v3, _v2, _v4, _v6]), _v5];
  }
  "true" === _v32.default.env.STORYBOOK && (0, _v38.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v40.useGctlConfig)();
    return (0, _v36.default)(_v2 ? `/albums/${_v2.where.albumId}/videos/${_v2.where.videoId}/suggested_user_mentions${(0, _v38.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v35({
      ..._v2,
      headers: {
        ..._v2.headers,
        "Content-Type": "application/json",
        Authorization: _v4 ? `jwt ${_v4}` : "",
        "Vimeo-Page": `${_v5}`,
        "Accept-Language": _v6 ?? "en"
      },
      baseUrl: _v3
    }) : null, _v1);
  }, {
    endpoint: "/albums/:albumId/videos/:videoId/suggested_user_mentions",
    method: "GET"
  }), "true" === _v32.default.env.STORYBOOK && (0, _v38.assignMswData)(_v41, {
    endpoint: "/albums/:albumId/videos/:videoId/suggested_user_mentions",
    method: "GET"
  }), "true" === _v32.default.env.STORYBOOK && (0, _v38.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v40.useGctlConfig)();
    return (0, _v39.default)((_v0, _v1) => {
      if (null === _v2 || _v1 && !_v1.paging.next) return null;
      let {
          perPage: _v2 = 25,
          page: _v3,
          ..._v4
        } = _v2.query ?? {},
        _v5 = _v2.select.join(","),
        _v6 = Object.entries(_v4 ?? {}).filter(([, _v0]) => void 0 !== _v0).map(([_v0, _v1]) => `${_v0}=${_v1}`).join("&");
      return [`/albums/${_v2.where.albumId}/videos/${_v2.where.videoId}/suggested_user_mentions?page=${_v0 + 1}&perPage=${_v2}&fields=${_v5}&${_v6}`, _v0];
    }, null !== _v2 ? ([_v0, _v1]) => _v35({
      ..._v2,
      baseUrl: _v3,
      headers: {
        ..._v2.headers,
        "Content-Type": "application/json",
        Authorization: _v4 ? `jwt ${_v4}` : "",
        "Vimeo-Page": `${_v5}`,
        "Accept-Language": _v6 ?? "en"
      },
      query: {
        ..._v2.query,
        page: _v1 + 1
      }
    }) : null, _v1);
  }, {
    endpoint: "/albums/:albumId/videos/:videoId/suggested_user_mentions",
    method: "GET"
  }), "true" === _v32.default.env.STORYBOOK && (0, _v38.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v40.useGctlConfig)();
    return (0, _v36.default)(_v2 ? `/videos/${_v2.where.videoId}/suggested_user_mentions${(0, _v38.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v42({
      ..._v2,
      headers: {
        ..._v2.headers,
        "Content-Type": "application/json",
        Authorization: _v4 ? `jwt ${_v4}` : "",
        "Vimeo-Page": `${_v5}`,
        "Accept-Language": _v6 ?? "en"
      },
      baseUrl: _v3
    }) : null, _v1);
  }, {
    endpoint: "/videos/:videoId/suggested_user_mentions",
    method: "GET"
  }), "true" === _v32.default.env.STORYBOOK && (0, _v38.assignMswData)(_v43, {
    endpoint: "/videos/:videoId/suggested_user_mentions",
    method: "GET"
  }), "true" === _v32.default.env.STORYBOOK && (0, _v38.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v40.useGctlConfig)();
    return (0, _v39.default)((_v0, _v1) => {
      if (null === _v2 || _v1 && !_v1.paging.next) return null;
      let {
          perPage: _v2 = 25,
          page: _v3,
          ..._v4
        } = _v2.query ?? {},
        _v5 = _v2.select.join(","),
        _v6 = Object.entries(_v4 ?? {}).filter(([, _v0]) => void 0 !== _v0).map(([_v0, _v1]) => `${_v0}=${_v1}`).join("&");
      return [`/videos/${_v2.where.videoId}/suggested_user_mentions?page=${_v0 + 1}&perPage=${_v2}&fields=${_v5}&${_v6}`, _v0];
    }, null !== _v2 ? ([_v0, _v1]) => _v42({
      ..._v2,
      baseUrl: _v3,
      headers: {
        ..._v2.headers,
        "Content-Type": "application/json",
        Authorization: _v4 ? `jwt ${_v4}` : "",
        "Vimeo-Page": `${_v5}`,
        "Accept-Language": _v6 ?? "en"
      },
      query: {
        ..._v2.query,
        page: _v1 + 1
      }
    }) : null, _v1);
  }, {
    endpoint: "/videos/:videoId/suggested_user_mentions",
    method: "GET"
  });
  var _v44 = _v0.i(0);
  _v0.s(["useUserMentionSuggestions", 0, (_v0, _v1, _v2, _v3, _v4) => {
    let _v5 = (0, _v44.getReviewPasswordHashFromCookie)(_v4),
      [_v6, _v7] = _v43(),
      [_v8, _v9] = _v41(),
      {
        loading: _v10,
        data: _v11
      } = _v3 ? _v9 : _v7,
      _v12 = (0, _v10.useCallback)((_v0, _v1 = "viewer", _v2) => {
        _v0 && _v6({
          where: {
            videoId: _v0
          },
          query: {
            query: _v0,
            page: _v2,
            perPage: _v1,
            filter: _v1,
            teamOwnerId: _v2,
            reviewId: _v4,
            password: _v5
          },
          select: []
        });
      }, [_v6, _v0, _v1, _v2]),
      _v13 = (0, _v10.useCallback)((_v0, _v1 = "viewer", _v2) => {
        if (_v0 && _v3) {
          let _v0 = (0, _v44.getShowcasePasswordHashFromCookie)(_v3);
          _v8({
            where: {
              albumId: _v3,
              videoId: _v0
            },
            query: {
              query: _v0,
              page: _v2,
              perPage: _v1,
              filter: _v1,
              teamOwnerId: _v2,
              ...(_v0 ? {
                password: _v0
              } : {})
            },
            select: []
          });
        }
      }, [_v0, _v3, _v8, _v2, _v1]),
      _v14 = (0, _v10.useMemo)(() => _v3 ? (0, _v31.default)(_v13, 500) : (0, _v31.default)(_v12, 500), [_v13, _v12, _v3]);
    return {
      loadingMentionSuggestion: _v10,
      mentionSuggestionList: (0, _v10.useMemo)(() => _v11?.data?.filter(_v0 => _v0.uri).map(_v0 => (0, _v44.buildUserMentionSuggestion)(_v0)) || [], [_v11]),
      getMentionSuggestionItemsDebounced: _v14
    };
  }], 0);
  var _v45 = _v0.i(0),
    _v46 = _v0.i(0),
    _v47 = _v0.i(0),
    _v48 = _v0.i(0),
    _v49 = _v0.i(0);
  _v0.s(["useVideoData", 0, (_v0, _v1, _v2) => {
    var _v3, _v4, _v5;
    let _v6,
      _v7,
      _v8,
      _v9,
      {
        data: _v10,
        isLoading: _v11,
        ..._v12
      } = (_v3 = _v0, _v4 = _v1, _v5 = _v2, _v6 = (0, _v48.useViewer)(), _v7 = (0, _v45.useGetVideo)(() => {
        if (!_v6 || !_v3 || !_v5 || _v4) return null;
        let _v0 = (0, _v44.getReviewPasswordHashFromCookie)(_v5);
        return {
          where: {
            videoId: _v3
          },
          select: _v49.VIDEO_DATA_FIELDS,
          query: {
            reviewId: _v5,
            password: _v0
          }
        };
      }, {
        revalidateOnFocus: !1
      }), _v8 = (0, _v46.useGetAlbumVideoData)(_v4 || null, Number((0, _v44.getVideoIdFromClipRequestId)(_v3)), (0, _v44.mapToClipFields)(_v49.VIDEO_DATA_FIELDS), !_v4), _v9 = (0, _v47.useGetUnlockedVideo)(() => !_v6 || _v4 || _v5 ? null : {
        where: {
          videoId: _v3
        },
        select: _v49.VIDEO_DATA_FIELDS
      }, {
        revalidateOnFocus: !1
      }), _v5 ? _v7 : _v4 ? {
        ..._v8,
        data: (0, _v44.extractClipData)(_v8.data),
        isLoading: _v8.isLoading
      } : _v9);
    return {
      videoData: _v10,
      videoDataLoading: _v11 || !_v10,
      ..._v12
    };
  }], 0);
}