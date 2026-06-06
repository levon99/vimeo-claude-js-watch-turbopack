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
    _v10 = _v0.i(0);
  _v7.Node.create({
    name: "text",
    group: "inline"
  });
  let _v11 = _v7.Mark.create({
      name: "textStyle",
      addOptions: () => ({
        HTMLAttributes: {}
      }),
      parseHTML: () => [{
        tag: "span",
        getAttrs: _v0 => !!_v0.hasAttribute("style") && {}
      }],
      renderHTML({
        HTMLAttributes: _v0
      }) {
        return ["span", (0, _v7.mergeAttributes)(this.options.HTMLAttributes, _v0), 0];
      },
      addCommands() {
        return {
          removeEmptyTextStyle: () => ({
            state: _v0,
            commands: _v1
          }) => !!Object.entries((0, _v7.getMarkAttributes)(_v0, this.type)).some(([, _v0]) => !!_v0) || _v1.unsetMark(this.name)
        };
      }
    }),
    _v12 = _v7.Extension.create({
      name: "textAlign",
      addOptions: () => ({
        types: [],
        alignments: ["left", "center", "right", "justify"],
        defaultAlignment: "left"
      }),
      addGlobalAttributes() {
        return [{
          types: this.options.types,
          attributes: {
            textAlign: {
              default: this.options.defaultAlignment,
              parseHTML: _v0 => _v0.style.textAlign || this.options.defaultAlignment,
              renderHTML: _v0 => _v0.textAlign === this.options.defaultAlignment ? {} : {
                style: `text-align: ${_v0.textAlign}`
              }
            }
          }
        }];
      },
      addCommands() {
        return {
          setTextAlign: _v0 => ({
            commands: _v0
          }) => !!this.options.alignments.includes(_v0) && this.options.types.every(_v0 => _v0.updateAttributes(_v0, {
            textAlign: _v0
          })),
          unsetTextAlign: () => ({
            commands: _v0
          }) => this.options.types.every(_v0 => _v0.resetAttributes(_v0, "textAlign"))
        };
      },
      addKeyboardShortcuts() {
        return {
          "Mod-Shift-l": () => this.editor.commands.setTextAlign("left"),
          "Mod-Shift-e": () => this.editor.commands.setTextAlign("center"),
          "Mod-Shift-r": () => this.editor.commands.setTextAlign("right")
        };
      }
    }),
    _v13 = _v7.Extension.create({
      name: "fontSize",
      addOptions: () => ({
        types: ["textStyle"]
      }),
      addGlobalAttributes() {
        return [{
          types: this.options.types,
          attributes: {
            fontSize: {
              default: null,
              parseHTML: _v0 => _v0.style.fontSize.replace(/['"]+/g, ""),
              renderHTML: _v0 => _v0.fontSize ? {
                style: `font-size: ${_v0.fontSize}`
              } : {}
            }
          }
        }];
      },
      addCommands: () => ({
        setFontSize: _v0 => ({
          chain: _v0
        }) => _v0().setMark("textStyle", {
          fontSize: _v0
        }).run(),
        unsetFontSize: () => ({
          chain: _v0
        }) => _v0().setMark("textStyle", {
          fontSize: null
        }).removeEmptyTextStyle().run()
      })
    });
  _v7.Extension.create({
    name: "fontWeight",
    addOptions: () => ({
      types: ["textStyle"]
    }),
    addGlobalAttributes() {
      return [{
        types: this.options.types,
        attributes: {
          fontWeight: {
            default: null,
            parseHTML: _v0 => _v0.style.fontWeight.replace(/['"]+/g, ""),
            renderHTML: _v0 => _v0.fontWeight ? {
              style: `font-weight: ${_v0.fontWeight}`
            } : {}
          }
        }
      }];
    },
    addCommands: () => ({
      setFontWeight: _v0 => ({
        chain: _v0
      }) => _v0().setMark("textStyle", {
        fontWeight: _v0
      }).run(),
      unsetFontWeight: () => ({
        chain: _v0
      }) => _v0().setMark("textStyle", {
        fontWeight: null
      }).removeEmptyTextStyle().run()
    })
  });
  let _v14 = _v7.Mark.create({
      name: "underline",
      addOptions: () => ({
        HTMLAttributes: {}
      }),
      parseHTML: () => [{
        tag: "u"
      }, {
        style: "text-decoration",
        consuming: !1,
        getAttrs: _v0 => !!_v0.includes("underline") && {}
      }],
      renderHTML({
        HTMLAttributes: _v0
      }) {
        return ["u", (0, _v7.mergeAttributes)(this.options.HTMLAttributes, _v0), 0];
      },
      addCommands() {
        return {
          setUnderline: () => ({
            commands: _v0
          }) => _v0.setMark(this.name),
          toggleUnderline: () => ({
            commands: _v0
          }) => _v0.toggleMark(this.name),
          unsetUnderline: () => ({
            commands: _v0
          }) => _v0.unsetMark(this.name)
        };
      },
      addKeyboardShortcuts() {
        return {
          "Mod-u": () => this.editor.commands.toggleUnderline(),
          "Mod-U": () => this.editor.commands.toggleUnderline()
        };
      }
    }),
    _v15 = _v7.Extension.create({
      name: "color",
      addOptions: () => ({
        types: ["textStyle"]
      }),
      addGlobalAttributes() {
        return [{
          types: this.options.types,
          attributes: {
            color: {
              parseHTML: _v0 => _v0.style.color,
              renderHTML: _v0 => _v0.color ? {
                style: `color: ${_v0.color}`
              } : {}
            }
          }
        }];
      },
      addCommands: () => ({
        setColor: _v0 => ({
          chain: _v0
        }) => _v0().setMark("textStyle", {
          color: _v0
        }).run(),
        unsetColor: () => ({
          chain: _v0
        }) => _v0().setMark("textStyle", {
          color: null
        }).removeEmptyTextStyle().run()
      })
    }),
    _v16 = _v7.Extension.create({
      name: "characterCount",
      addOptions: () => ({
        limit: _v5.EMAIL_MAX_LENGTH.EDITOR_TEXT
      }),
      addStorage: () => ({
        characters: () => 0
      }),
      onBeforeCreate() {
        this.storage.characters = _v0 => (_v0?.node || this.editor.state.doc).textContent.length;
      },
      addProseMirrorPlugins() {
        return [new _v9.Plugin({
          key: new _v9.PluginKey("characterCount"),
          filterTransaction: (_v0, _v1) => {
            let _v2 = this.options.limit;
            if (!_v0.docChanged || 0 === _v2 || null == _v2) return !0;
            let _v3 = this.storage.characters({
                node: _v1.doc
              }),
              _v4 = this.storage.characters({
                node: _v0.doc
              });
            if (_v4 <= _v2 || _v3 > _v2 && _v4 > _v2 && _v4 <= _v3) return !0;
            if (_v3 > _v2 && _v4 > _v2 && _v4 > _v3 || !_v0.getMeta("paste")) return !1;
            let _v5 = _v0.selection.$head.pos;
            return _v0.deleteRange(_v5 - (_v4 - _v2), _v5), this.storage.characters({
              node: _v0.doc
            }) <= _v2;
          }
        })];
      }
    }),
    _v17 = _v0 => _v0.startsWith("http://") ? _v0.replace("http://", "https://") : _v0.startsWith("https://") ? _v0 : `https://${_v0}`,
    _v18 = _v8.Link.extend({
      addAttributes() {
        return {
          ...this.parent?.(),
          href: {
            default: null,
            parseHTML: _v0 => _v0.getAttribute("href"),
            renderHTML: _v0 => {
              let {
                href: _v1
              } = _v0;
              return {
                href: _v1 = _v17(_v1)
              };
            }
          }
        };
      },
      addCommands() {
        return {
          setLink: _v0 => ({
            commands: _v0
          }) => {
            let {
              href: _v1
            } = _v0;
            return _v1 = _v17(_v1), _v0.setMark(this.name, {
              ..._v0,
              href: _v1
            });
          },
          unsetLink: () => ({
            commands: _v0
          }) => _v0.unsetMark(this.name)
        };
      }
    });
  _v0.s(["CharacterCount", 0, _v16, "Color", 0, _v15, "FontSize", 0, _v13, "HttpsOnlyLink", 0, _v18, "TextAlign", 0, _v12, "TextStyle", 0, _v11, "Underline", 0, _v14, "convertColorToHex", 0, _v0 => {
    let _v1 = (0, _v10.toHsla)(_v0);
    return (0, _v10.toHex)(_v1);
  }], 0);
  let _v19 = (_v0, _v1, _v2, _v3) => {
    let {
        hasEmailEditAccess: _v4
      } = (0, _v4.useEntityCapability)(),
      _v5 = [_v2.default, _v12.configure({
        types: ["heading", "paragraph"]
      }), _v11, _v13, _v14, _v15, _v16.configure({
        limit: _v5.EMAIL_MAX_LENGTH.EDITOR_TEXT
      }), _v18.configure({
        openOnClick: !1
      })];
    return (0, _v1.useEditor)({
      extensions: _v5,
      content: _v0,
      editable: _v4,
      onUpdate: ({
        editor: _v0,
        transaction: _v1
      }) => {
        let _v2 = _v0.getHTML();
        !_v0.isEmpty && _v1.docChanged && _v2 !== _v0 && _v3({
          type: _v2,
          payload: {
            emailTab: _v1,
            text: _v2
          }
        });
      },
      editorProps: {
        handleKeyDown: (_v0, _v1) => _v1.key === _v5.KEY_CODES.ENTER && _v0.state.doc.textContent.length === _v5.EMAIL_MAX_LENGTH.EDITOR_TEXT
      }
    });
  };
  _v0.s(["useEmailTextEditor", 0, (_v0, _v1) => {
    let {
        hasEmailEditAccess: _v2
      } = (0, _v4.useEntityCapability)(),
      {
        header: _v3,
        body: _v4
      } = _v0,
      {
        CONFIRMATION: _v5,
        REMINDER: _v6,
        FOLLOWUP: _v7
      } = _v5.EMAIL_TYPES,
      {
        SET_HEADER: _v8,
        SET_BODY: _v9
      } = _v6.ACTION_TYPE,
      _v10 = _v19(_v3.CONFIRMATION, _v5, _v8, _v1),
      _v11 = _v19(_v4.CONFIRMATION, _v5, _v9, _v1),
      _v12 = _v19(_v3.REMINDER, _v6, _v8, _v1),
      _v13 = _v19(_v4.REMINDER, _v6, _v9, _v1),
      _v14 = _v19(_v3.FOLLOWUP, _v7, _v8, _v1),
      _v15 = _v19(_v4.FOLLOWUP, _v7, _v9, _v1),
      _v16 = (_v0, _v1) => {
        if (!_v0?.isDestroyed) {
          let _v0 = _v0?.getHTML();
          _v0 && _v1 !== _v0 && _v0?.commands.setContent(_v1);
        }
      };
    (0, _v3.useEffect)(() => {
      _v16(_v10, _v3.CONFIRMATION);
    }, [_v10, _v3.CONFIRMATION]), (0, _v3.useEffect)(() => {
      _v16(_v11, _v4.CONFIRMATION);
    }, [_v11, _v4.CONFIRMATION]), (0, _v3.useEffect)(() => {
      _v16(_v12, _v3.REMINDER);
    }, [_v3.REMINDER, _v12]), (0, _v3.useEffect)(() => {
      _v16(_v13, _v4.REMINDER);
    }, [_v4.REMINDER, _v13]), (0, _v3.useEffect)(() => {
      _v16(_v14, _v3.FOLLOWUP);
    }, [_v3.FOLLOWUP, _v14]), (0, _v3.useEffect)(() => {
      _v16(_v15, _v4.FOLLOWUP);
    }, [_v4.FOLLOWUP, _v15]);
    let _v17 = {
      [_v5]: {
        [_v5.EMAIL_TOOLBAR_TYPES.TITLE]: _v10,
        [_v5.EMAIL_TOOLBAR_TYPES.BODY]: _v11
      },
      [_v6]: {
        [_v5.EMAIL_TOOLBAR_TYPES.TITLE]: _v12,
        [_v5.EMAIL_TOOLBAR_TYPES.BODY]: _v13
      },
      [_v7]: {
        [_v5.EMAIL_TOOLBAR_TYPES.TITLE]: _v14,
        [_v5.EMAIL_TOOLBAR_TYPES.BODY]: _v15
      }
    };
    return (0, _v3.useEffect)(() => {
      _v2 && (_v11?.setEditable(!0), _v10?.setEditable(!0), _v12?.setEditable(!0), _v13?.setEditable(!0), _v14?.setEditable(!0), _v15?.setEditable(!0));
    }, [_v2, _v11, _v10, _v12, _v13, _v14, _v15]), _v17;
  }], 0);
}