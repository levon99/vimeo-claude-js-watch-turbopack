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
    _v27 = _v0.i(0);
  let _v28 = ({
      isActive: _v0,
      left: _v1,
      top: _v2,
      children: _v3
    }) => (0, _v20.createPortal)(_v0 ? (0, _v1.jsx)(_v7.Box, {
      position: "fixed",
      border: `${(0, _v10.rem)(1)} solid`,
      borderColor: "slate.100",
      borderRadius: "sm",
      zIndex: "popover",
      width: "fit-content",
      overflow: "hidden",
      background: "surface",
      left: _v1,
      top: _v2,
      children: _v3
    }) : (0, _v1.jsx)(_v1.Fragment, {}), document.body),
    _v29 = {};
  var _v30 = _v0.i(0);
  let _v31 = ({
      target: _v0,
      editor: _v1,
      showLinkPopOver: _v2,
      setShowLinkPopOver: _v3,
      linkInputRef: _v4,
      addLink: _v5,
      removeLink: _v6,
      children: _v7
    }) => {
      let {
          emailState: _v8
        } = (0, _v16.useEmailCustomization)(),
        {
          clientRect: _v9,
          isCollapsed: _v10
        } = function (_v0, _v1, _v2, _v3) {
          let [{
              clientRect: _v4,
              isCollapsed: _v5
            }, _v6] = (0, _v6.useState)(_v29),
            _v7 = (0, _v6.useCallback)(() => {
              let _v0 = window.getSelection();
              if (_v0 && (_v0?.toString().length === 0 || _v3?.current?.value.includes(_v0?.toString() || ""))) return;
              _v1(!1);
              let _v1 = {},
                _v2 = _v0?.rangeCount ? _v0.getRangeAt(0) : null;
              null != _v0 && null != _v2 && (null == _v2 || _v2.contains(_v2.commonAncestorContainer)) && (_v1.clientRect = function (_v0) {
                let _v1 = {
                  ..._v0
                };
                for (let _v0 of Object.keys(_v1)) _v1[_v0] = Math.round(_v1[_v0]);
                return _v1;
              }(_v2.cloneRange().getBoundingClientRect().toJSON()), _v1.isCollapsed = _v2.collapsed), _v6(_v1);
            }, [_v2, _v0]);
          return (0, _v6.useLayoutEffect)(() => (document.addEventListener("selectionchange", _v7), document.addEventListener("keydown", _v7), document.addEventListener("keyup", _v7), window.addEventListener("resize", _v7), () => {
            document.removeEventListener("selectionchange", _v7), document.removeEventListener("keydown", _v7), document.removeEventListener("keyup", _v7), window.removeEventListener("resize", _v7);
          }), [_v2, _v0]), {
            clientRect: _v4,
            isCollapsed: _v5
          };
        }(_v2, _v3, _v0, _v4),
        [_v11, _v12] = (0, _v6.useState)(!1),
        [_v13, _v14] = (0, _v6.useState)(""),
        [_v15, _v16] = (0, _v6.useState)(!0),
        _v17 = _v1?.isActive("link"),
        {
          hasEmailEditAccess: _v18
        } = (0, _v15.useEntityCapability)();
      return (0, _v6.useEffect)(() => {
        _v17 ? (_v14(_v1?.getAttributes("link").href), _v16(_v1?.getAttributes("link").href)) : (_v14(""), _v16(!0));
      }, [_v17, _v2]), (0, _v6.useEffect)(() => {
        _v4.current?.addEventListener("mousedown", _v0 => {
          _v0.preventDefault(), _v4.current?.focus();
        }), _v4.current?.addEventListener("keydown", _v0 => {
          _v0.key === _v17.KEY_CODES.ENTER && _v13 !== _v1?.getAttributes("link").href && (_v0.preventDefault(), _v15 && _v5(_v13));
        });
      }), (0, _v6.useEffect)(() => {
        _v2 ? _v12(!0) : null === _v9 || _v10 ? (_v12(!1), _v3(!1)) : _v12(!0);
      }, [_v9, _v10]), (0, _v6.useEffect)(() => {
        _v8.emailToolbar !== _v17.EMAIL_TOOLBAR_TYPES.BODY && _v8.emailToolbar !== _v17.EMAIL_TOOLBAR_TYPES.TITLE && _v1?.commands.setTextSelection(0);
      }, [_v8.emailToolbar]), (0, _v20.createPortal)(_v9 && _v11 && _v18 ? (0, _v1.jsxs)(_v7.Box, {
        zIndex: "popover",
        position: "fixed",
        left: _v9.left + _v9.width / 2 - 100,
        top: _v9.top - 60,
        border: `${(0, _v10.rem)(1)} solid`,
        borderColor: "slate.100",
        borderRadius: "sm",
        children: [(0, _v1.jsx)(_v28, {
          isActive: _v2,
          left: _v9.left + _v9.width / 2 - 100,
          top: _v9.top - 110,
          children: (0, _v1.jsxs)(_v8.Flex, {
            gap: (0, _v10.rem)(4),
            p: `${(0, _v10.rem)(6)}`,
            alignItems: "center",
            children: [(0, _v1.jsx)(_v21.FormControl, {
              isInvalid: !_v15,
              children: (0, _v1.jsx)(_v22.Input, {
                width: (0, _v10.rem)(200),
                size: "sm",
                ref: _v4,
                placeholder: _v30.default.AddLink,
                value: _v13,
                onChange: _v0 => {
                  let _v1 = _v0.target.value,
                    _v2 = (0, _v27.isValidUrl)(_v1 || "");
                  _v16(_v2), _v14(_v2 ? (0, _v27.appendProtocol)(_v1) : _v1);
                }
              })
            }), _v17 && _v13 === _v1?.getAttributes("link").href ? (0, _v1.jsxs)(_v1.Fragment, {
              children: [(0, _v1.jsx)(_v9.IconButton, {
                icon: (0, _v1.jsx)(_v25.LinkBroken, {}),
                "aria-label": "Unlink",
                size: "sm",
                variant: "tertiary",
                onClick: _v6
              }), (0, _v1.jsx)(_v9.IconButton, {
                icon: (0, _v1.jsx)(_v26.PopOut, {}),
                size: "sm",
                "aria-label": "Open",
                variant: "tertiary",
                onClick: () => {
                  window.open(_v1?.getAttributes("link").href, "_blank");
                }
              })]
            }) : (0, _v1.jsxs)(_v1.Fragment, {
              children: [(0, _v1.jsx)(_v9.IconButton, {
                icon: (0, _v1.jsx)(_v24.CloseXFilled, {}),
                size: "sm",
                "aria-label": "Close",
                variant: "tertiary",
                onClick: () => {
                  _v14(""), _v3(!1);
                }
              }), (0, _v1.jsx)(_v9.IconButton, {
                icon: (0, _v1.jsx)(_v23.CheckmarkFilled, {}),
                size: "sm",
                variant: "tertiary",
                "aria-label": "Save",
                isDisabled: !_v15 || !_v13,
                onClick: () => _v5(_v13)
              })]
            })]
          })
        }), (0, _v1.jsx)(_v7.Box, {
          background: "white",
          overflow: "hidden",
          borderRadius: "sm",
          children: _v7
        })]
      }) : (0, _v1.jsx)(_v1.Fragment, {}), document.body);
    },
    _v32 = ({
      editor: _v0,
      type: _v1
    }) => {
      let {
          emailState: _v2,
          dispatch: _v3,
          activeContentKey: _v4
        } = (0, _v16.useEmailCustomization)(),
        [_v5, _v6] = (0, _v6.useState)(),
        {
          BOLD: _v7,
          ITALIC: _v8,
          UNDERLINE: _v9
        } = _v17.EMAIL_TEXT_STYLE,
        [_v10, _v11] = (0, _v6.useState)(!1),
        _v12 = (0, _v6.useRef)(null),
        [_v13, _v14] = (0, _v6.useState)(null),
        [_v15, _v16] = (0, _v6.useState)(!1),
        {
          hasEnterprise: _v17
        } = (0, _v15.useEntityCapability)();
      return (0, _v6.useEffect)(() => {
        _v11(!1), _v2.emailToolbar !== _v1 && _v16(!1);
      }, [_v2.emailToolbar]), (0, _v6.useEffect)(() => {
        !_v10 && _v13 && _v0 ? _v0.chain().focus().setTextSelection(_v13) : _v12.current?.focus();
      }, [_v10]), (0, _v1.jsxs)(_v1.Fragment, {
        children: [_v0 && (0, _v1.jsx)(_v31, {
          target: _v5,
          emailState: _v2,
          editor: _v0,
          showLinkPopOver: _v10,
          setShowLinkPopOver: _v11,
          linkInputRef: _v12,
          addLink: _v0 => {
            _v13 && _v0 && _v0.length > 0 && (_v0.chain().focus().setTextSelection(_v13).setLink({
              href: _v0
            }).run(), _v11(!1), _v14(null));
          },
          removeLink: () => {
            _v13 && _v0 && (_v0.chain().focus().setTextSelection(_v13).unsetLink().run(), _v11(!1), _v14(null));
          },
          children: (0, _v1.jsxs)(_v8.Flex, {
            p: "xs",
            gap: (0, _v10.rem)(4),
            children: [(0, _v1.jsx)(_v9.IconButton, {
              autoFocus: !1,
              onClick: () => {
                _v3({
                  type: _v2.emailToolbar === _v17.EMAIL_TOOLBAR_TYPES.TITLE ? _v18.ACTION_TYPE.SET_HEADER_TEXT_STYLE : _v18.ACTION_TYPE.SET_BODY_TEXT_STYLE,
                  payload: {
                    text: _v0.isActive(_v7.toLowerCase()) ? "REMOVEBOLD" : _v7,
                    emailTab: _v4
                  }
                }), _v0.chain().focus().toggleBold().run();
              },
              icon: (0, _v1.jsx)(_v11.Bold, {}),
              "aria-label": "Bold",
              variant: _v0.isActive(_v7.toLowerCase()) ? "blur" : "tertiary"
            }), (0, _v1.jsx)(_v9.IconButton, {
              autoFocus: !1,
              onClick: () => {
                _v3({
                  type: _v2.emailToolbar === _v17.EMAIL_TOOLBAR_TYPES.TITLE ? _v18.ACTION_TYPE.SET_HEADER_TEXT_STYLE : _v18.ACTION_TYPE.SET_BODY_TEXT_STYLE,
                  payload: {
                    text: _v0.isActive(_v8.toLowerCase()) ? "REMOVEITALIC" : _v8,
                    emailTab: _v4
                  }
                }), _v0.chain().focus().toggleItalic().run();
              },
              icon: (0, _v1.jsx)(_v12.Italic, {}),
              "aria-label": "Italic",
              variant: _v0.isActive(_v8.toLowerCase()) ? "blur" : "tertiary"
            }), (0, _v1.jsx)(_v9.IconButton, {
              autoFocus: !1,
              onClick: () => {
                _v3({
                  type: _v2.emailToolbar === _v17.EMAIL_TOOLBAR_TYPES.TITLE ? _v18.ACTION_TYPE.SET_HEADER_TEXT_STYLE : _v18.ACTION_TYPE.SET_BODY_TEXT_STYLE,
                  payload: {
                    text: _v0.isActive(_v9.toLowerCase()) ? "REMOVEUNDERLINE" : _v9,
                    emailTab: _v4
                  }
                }), _v0.chain().focus().toggleUnderline().run();
              },
              icon: (0, _v1.jsx)(_v14.Underline, {}),
              "aria-label": "Underline",
              variant: _v0.isActive(_v9.toLowerCase()) ? "blur" : "tertiary"
            }), _v17 && (0, _v1.jsx)("div", {
              children: (0, _v1.jsx)(_v9.IconButton, {
                autoFocus: !1,
                onClick: () => {
                  if (!_v10) {
                    let {
                      from: _v0,
                      to: _v1
                    } = _v0?.state.selection;
                    _v14({
                      from: _v0,
                      to: _v1
                    });
                  }
                  _v11(_v0 => !_v0);
                },
                icon: (0, _v1.jsx)(_v13.Link, {}),
                "aria-label": "Link",
                variant: _v0.isActive("link") ? "blur" : "tertiary"
              })
            })]
          })
        }), (0, _v1.jsx)(_v7.Box, {
          as: _v5.EditorContent,
          ref: _v0 => {
            null != _v0 && _v6(_v0);
          },
          className: "richTextEditor",
          editor: _v0,
          onFocus: () => _v16(!0),
          autoFocus: !1,
          sx: {
            "> div": {
              outline: "none",
              padding: `${(0, _v10.rem)(20)} ${(0, _v10.rem)(5)}`,
              lineHeight: 1.2,
              border: `${(0, _v10.rem)(2)} solid`,
              borderColor: _v15 ? "blue.500" : "transparent",
              borderRadius: (0, _v10.rem)(5),
              "&:focus": {
                backgroundColor: "white",
                cursor: "auto"
              }
            },
            ul: {
              listStyleType: "disc",
              paddingLeft: (0, _v10.rem)(25)
            },
            ol: {
              listStyleType: "decimal",
              paddingLeft: (0, _v10.rem)(25)
            },
            a: {
              color: "#1155cc"
            }
          }
        }), (0, _v1.jsx)(_v7.Box, {
          height: (0, _v10.rem)(20),
          background: "white",
          children: _v15 && (0, _v1.jsx)(_v19.CharCount, {
            value: _v0?.state.doc.textContent,
            maxCharacters: _v17.EMAIL_MAX_LENGTH.EDITOR_TEXT
          })
        })]
      });
    },
    _v33 = ({
      editorState: _v0,
      canEdit: _v1 = !0
    }) => {
      let _v2 = _v17.EMAIL_TYPES.CONFIRMATION,
        {
          emailState: _v3,
          dispatch: _v4
        } = (0, _v16.useEmailCustomization)(),
        {
          [_v17.EMAIL_TOOLBAR_TYPES.TITLE]: _v5,
          [_v17.EMAIL_TOOLBAR_TYPES.BODY]: _v6
        } = _v0,
        _v7 = _v0 => () => {
          _v1 && (0, _v4.switchContext)(_v4, _v0, _v3.emailToolbar)();
        };
      return (0, _v1.jsxs)(_v2.LightMode, {
        children: [(0, _v1.jsx)(_v4.EmailType, {
          children: _v17.EMAIL_TYPE_TEXT[_v2]
        }), (0, _v1.jsx)(_v4.EditableTitle, {
          onClick: _v7(_v17.EMAIL_TOOLBAR_TYPES.TITLE),
          children: (0, _v1.jsx)(_v32, {
            editor: _v5,
            type: _v17.EMAIL_TOOLBAR_TYPES.TITLE
          })
        }), (0, _v1.jsx)(_v4.DescWrapper, {
          onClick: _v7(_v17.EMAIL_TOOLBAR_TYPES.BODY),
          children: (0, _v1.jsx)(_v32, {
            editor: _v6,
            type: _v17.EMAIL_TOOLBAR_TYPES.BODY
          })
        }), (0, _v1.jsx)(_v4.EventDate, {}), (0, _v1.jsx)(_v3.Calendar, {}), (0, _v1.jsx)(_v4.ActionButton, {
          previewMode: _v3.previewMode,
          customBackground: _v3.accentColor || "",
          children: _v3.buttonInfo.CONFIRMATION.text
        })]
      });
    },
    _v34 = ({
      editorState: _v0,
      canEdit: _v1 = !0
    }) => {
      let _v2 = _v17.EMAIL_TYPES.FOLLOWUP,
        {
          emailState: _v3,
          dispatch: _v4
        } = (0, _v16.useEmailCustomization)(),
        {
          [_v17.EMAIL_TOOLBAR_TYPES.TITLE]: _v5,
          [_v17.EMAIL_TOOLBAR_TYPES.BODY]: _v6
        } = _v0,
        _v7 = _v0 => () => {
          _v1 && (0, _v4.switchContext)(_v4, _v0, _v3.emailToolbar)();
        };
      return (0, _v1.jsxs)(_v2.LightMode, {
        children: [(0, _v1.jsx)(_v4.EmailType, {
          children: _v17.EMAIL_TYPE_TEXT[_v2]
        }), (0, _v1.jsx)(_v4.EditableTitle, {
          onClick: _v7(_v17.EMAIL_TOOLBAR_TYPES.TITLE),
          children: (0, _v1.jsx)(_v32, {
            editor: _v5,
            type: _v17.EMAIL_TOOLBAR_TYPES.TITLE
          })
        }), (0, _v1.jsx)(_v4.DescWrapper, {
          onClick: _v7(_v17.EMAIL_TOOLBAR_TYPES.BODY),
          children: (0, _v1.jsx)(_v32, {
            editor: _v6,
            type: _v17.EMAIL_TOOLBAR_TYPES.BODY
          })
        }), (0, _v1.jsx)(_v4.ActionButton, {
          previewMode: _v3.previewMode,
          customBackground: _v3.accentColor || "",
          children: _v3.buttonInfo.FOLLOWUP.text
        })]
      });
    },
    _v35 = ({
      editorState: _v0,
      canEdit: _v1
    }) => {
      let _v2 = _v17.EMAIL_TYPES.REMINDER,
        {
          emailState: _v3,
          dispatch: _v4,
          activeContentKey: _v5
        } = (0, _v16.useEmailCustomization)(),
        {
          [_v17.EMAIL_TOOLBAR_TYPES.TITLE]: _v6,
          [_v17.EMAIL_TOOLBAR_TYPES.BODY]: _v7
        } = _v0,
        _v8 = _v0 => () => {
          _v1 && (0, _v4.switchContext)(_v4, _v0, _v3.emailToolbar)();
        };
      return (0, _v1.jsxs)(_v2.LightMode, {
        children: [(0, _v1.jsx)(_v4.EmailType, {
          children: _v17.EMAIL_TYPE_TEXT[_v2]
        }), (0, _v1.jsx)(_v4.EditableTitle, {
          onClick: _v8(_v17.EMAIL_TOOLBAR_TYPES.TITLE),
          children: (0, _v1.jsx)(_v32, {
            editor: _v6,
            type: _v17.EMAIL_TOOLBAR_TYPES.TITLE
          })
        }), (0, _v1.jsx)(_v4.DescWrapper, {
          onClick: _v8(_v17.EMAIL_TOOLBAR_TYPES.BODY),
          children: (0, _v1.jsx)(_v32, {
            editor: _v7,
            type: _v17.EMAIL_TOOLBAR_TYPES.BODY
          })
        }), (0, _v1.jsx)(_v4.EventDate, {}), (0, _v1.jsx)(_v3.Calendar, {}), (0, _v1.jsx)(_v4.ActionButton, {
          previewMode: _v3.previewMode,
          customBackground: _v3.accentColor || "",
          children: _v3.buttonInfo[_v5].text
        })]
      });
    };
  _v0.s(["EmailTemplate", 0, _v0 => {
    let {
      emailState: _v1
    } = (0, _v16.useEmailCustomization)();
    switch (_v1?.emailTemplateType) {
      case _v17.EMAIL_TYPES.CONFIRMATION:
        return (0, _v1.jsx)(_v33, {
          editorState: _v0.editorStates[_v17.EMAIL_TYPES.CONFIRMATION],
          ..._v0
        });
      case _v17.EMAIL_TYPES.REMINDER:
        return (0, _v1.jsx)(_v35, {
          editorState: _v0.editorStates[_v17.EMAIL_TYPES.REMINDER],
          ..._v0
        });
      case _v17.EMAIL_TYPES.FOLLOWUP:
        return (0, _v1.jsx)(_v34, {
          editorState: _v0.editorStates[_v17.EMAIL_TYPES.FOLLOWUP],
          ..._v0
        });
      default:
        return null;
    }
  }], 0);
}