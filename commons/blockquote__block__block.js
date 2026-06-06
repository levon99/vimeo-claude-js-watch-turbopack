{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = /^\s*>\s$/,
    _v3 = _v1.Node.create({
      name: "blockquote",
      addOptions: () => ({
        HTMLAttributes: {}
      }),
      content: "block+",
      group: "block",
      defining: !0,
      parseHTML: () => [{
        tag: "blockquote"
      }],
      renderHTML({
        HTMLAttributes: _v0
      }) {
        return ["blockquote", (0, _v1.mergeAttributes)(this.options.HTMLAttributes, _v0), 0];
      },
      addCommands() {
        return {
          setBlockquote: () => ({
            commands: _v0
          }) => _v0.wrapIn(this.name),
          toggleBlockquote: () => ({
            commands: _v0
          }) => _v0.toggleWrap(this.name),
          unsetBlockquote: () => ({
            commands: _v0
          }) => _v0.lift(this.name)
        };
      },
      addKeyboardShortcuts() {
        return {
          "Mod-Shift-b": () => this.editor.commands.toggleBlockquote()
        };
      },
      addInputRules() {
        return [(0, _v1.wrappingInputRule)({
          find: _v2,
          type: this.type
        })];
      }
    });
  var _v4 = _v0.i(0);
  let _v5 = "textStyle",
    _v6 = /^\s*([-+*])\s$/,
    _v7 = _v1.Node.create({
      name: "bulletList",
      addOptions: () => ({
        itemTypeName: "listItem",
        HTMLAttributes: {},
        keepMarks: !1,
        keepAttributes: !1
      }),
      group: "block list",
      content() {
        return `${this.options.itemTypeName}+`;
      },
      parseHTML: () => [{
        tag: "ul"
      }],
      renderHTML({
        HTMLAttributes: _v0
      }) {
        return ["ul", (0, _v1.mergeAttributes)(this.options.HTMLAttributes, _v0), 0];
      },
      addCommands() {
        return {
          toggleBulletList: () => ({
            commands: _v0,
            chain: _v1
          }) => this.options.keepAttributes ? _v1().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes("listItem", this.editor.getAttributes(_v5)).run() : _v0.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
        };
      },
      addKeyboardShortcuts() {
        return {
          "Mod-Shift-8": () => this.editor.commands.toggleBulletList()
        };
      },
      addInputRules() {
        let _v0 = (0, _v1.wrappingInputRule)({
          find: _v6,
          type: this.type
        });
        return (this.options.keepMarks || this.options.keepAttributes) && (_v0 = (0, _v1.wrappingInputRule)({
          find: _v6,
          type: this.type,
          keepMarks: this.options.keepMarks,
          keepAttributes: this.options.keepAttributes,
          getAttributes: () => this.editor.getAttributes(_v5),
          editor: this.editor
        })), [_v0];
      }
    }),
    _v8 = /(^|[^`])`([^`]+)`(?!`)/,
    _v9 = /(^|[^`])`([^`]+)`(?!`)/g,
    _v10 = _v1.Mark.create({
      name: "code",
      addOptions: () => ({
        HTMLAttributes: {}
      }),
      excludes: "_",
      code: !0,
      exitable: !0,
      parseHTML: () => [{
        tag: "code"
      }],
      renderHTML({
        HTMLAttributes: _v0
      }) {
        return ["code", (0, _v1.mergeAttributes)(this.options.HTMLAttributes, _v0), 0];
      },
      addCommands() {
        return {
          setCode: () => ({
            commands: _v0
          }) => _v0.setMark(this.name),
          toggleCode: () => ({
            commands: _v0
          }) => _v0.toggleMark(this.name),
          unsetCode: () => ({
            commands: _v0
          }) => _v0.unsetMark(this.name)
        };
      },
      addKeyboardShortcuts() {
        return {
          "Mod-e": () => this.editor.commands.toggleCode()
        };
      },
      addInputRules() {
        return [(0, _v1.markInputRule)({
          find: _v8,
          type: this.type
        })];
      },
      addPasteRules() {
        return [(0, _v1.markPasteRule)({
          find: _v9,
          type: this.type
        })];
      }
    });
  var _v11 = _v0.i(0);
  let _v12 = /^```([a-z]+)?[\s\n]$/,
    _v13 = /^~~~([a-z]+)?[\s\n]$/,
    _v14 = _v1.Node.create({
      name: "codeBlock",
      addOptions: () => ({
        languageClassPrefix: "language-",
        exitOnTripleEnter: !0,
        exitOnArrowDown: !0,
        defaultLanguage: null,
        HTMLAttributes: {}
      }),
      content: "text*",
      marks: "",
      group: "block",
      code: !0,
      defining: !0,
      addAttributes() {
        return {
          language: {
            default: this.options.defaultLanguage,
            parseHTML: _v0 => {
              var _v1;
              let {
                  languageClassPrefix: _v2
                } = this.options,
                _v3 = [...((null == (_v1 = _v0.firstElementChild) ? void 0 : _v1.classList) || [])].filter(_v0 => _v0.startsWith(_v2)).map(_v0 => _v0.replace(_v2, ""))[0];
              return _v3 || null;
            },
            rendered: !1
          }
        };
      },
      parseHTML: () => [{
        tag: "pre",
        preserveWhitespace: "full"
      }],
      renderHTML({
        node: _v0,
        HTMLAttributes: _v1
      }) {
        return ["pre", (0, _v1.mergeAttributes)(this.options.HTMLAttributes, _v1), ["code", {
          class: _v0.attrs.language ? this.options.languageClassPrefix + _v0.attrs.language : null
        }, 0]];
      },
      addCommands() {
        return {
          setCodeBlock: _v0 => ({
            commands: _v0
          }) => _v0.setNode(this.name, _v0),
          toggleCodeBlock: _v0 => ({
            commands: _v0
          }) => _v0.toggleNode(this.name, "paragraph", _v0)
        };
      },
      addKeyboardShortcuts() {
        return {
          "Mod-Alt-c": () => this.editor.commands.toggleCodeBlock(),
          Backspace: () => {
            let {
                empty: _v0,
                $anchor: _v1
              } = this.editor.state.selection,
              _v2 = 1 === _v1.pos;
            return !!_v0 && _v1.parent.type.name === this.name && (!!_v2 || !_v1.parent.textContent.length) && this.editor.commands.clearNodes();
          },
          Enter: ({
            editor: _v0
          }) => {
            if (!this.options.exitOnTripleEnter) return !1;
            let {
                state: _v1
              } = _v0,
              {
                selection: _v2
              } = _v1,
              {
                $from: _v3,
                empty: _v4
              } = _v2;
            if (!_v4 || _v3.parent.type !== this.type) return !1;
            let _v5 = _v3.parentOffset === _v3.parent.nodeSize - 2,
              _v6 = _v3.parent.textContent.endsWith("\n\n");
            return !!_v5 && !!_v6 && _v0.chain().command(({
              tr: _v0
            }) => (_v0.delete(_v3.pos - 2, _v3.pos), !0)).exitCode().run();
          },
          ArrowDown: ({
            editor: _v0
          }) => {
            if (!this.options.exitOnArrowDown) return !1;
            let {
                state: _v1
              } = _v0,
              {
                selection: _v2,
                doc: _v3
              } = _v1,
              {
                $from: _v4,
                empty: _v5
              } = _v2;
            if (!_v5 || _v4.parent.type !== this.type || _v4.parentOffset !== _v4.parent.nodeSize - 2) return !1;
            let _v6 = _v4.after();
            return void 0 !== _v6 && (_v3.nodeAt(_v6) ? _v0.commands.command(({
              tr: _v0
            }) => (_v0.setSelection(_v11.Selection.near(_v3.resolve(_v6))), !0)) : _v0.commands.exitCode());
          }
        };
      },
      addInputRules() {
        return [(0, _v1.textblockTypeInputRule)({
          find: _v12,
          type: this.type,
          getAttributes: _v0 => ({
            language: _v0[1]
          })
        }), (0, _v1.textblockTypeInputRule)({
          find: _v13,
          type: this.type,
          getAttributes: _v0 => ({
            language: _v0[1]
          })
        })];
      },
      addProseMirrorPlugins() {
        return [new _v11.Plugin({
          key: new _v11.PluginKey("codeBlockVSCodeHandler"),
          props: {
            handlePaste: (_v0, _v1) => {
              if (!_v1.clipboardData || this.editor.isActive(this.type.name)) return !1;
              let _v2 = _v1.clipboardData.getData("text/plain"),
                _v3 = _v1.clipboardData.getData("vscode-editor-data"),
                _v4 = _v3 ? JSON.parse(_v3) : void 0,
                _v5 = null == _v4 ? void 0 : _v4.mode;
              if (!_v2 || !_v5) return !1;
              let {
                  tr: _v6,
                  schema: _v7
                } = _v0.state,
                _v8 = _v7.text(_v2.replace(/\r\n?/g, "\n"));
              return _v6.replaceSelectionWith(this.type.create({
                language: _v5
              }, _v8)), _v6.selection.$from.parent.type !== this.type && _v6.setSelection(_v11.TextSelection.near(_v6.doc.resolve(Math.max(0, _v6.selection.from - 2)))), _v6.setMeta("paste", !0), _v0.dispatch(_v6), !0;
            }
          }
        })];
      }
    });
  var _v15 = _v0.i(0),
    _v16 = _v0.i(0);
  class _v17 {
    constructor(_v0, _v1) {
      var _v2;
      this.editorView = _v0, this.cursorPos = null, this.element = null, this.timeout = -1, this.width = null != (_v2 = _v1.width) ? _v2 : 1, this.color = !1 === _v1.color ? void 0 : _v1.color || "black", this.class = _v1.class, this.handlers = ["dragover", "dragend", "drop", "dragleave"].map(_v0 => {
        let _v1 = _v0 => {
          this[_v0](_v0);
        };
        return _v0.dom.addEventListener(_v0, _v1), {
          name: _v0,
          handler: _v1
        };
      });
    }
    destroy() {
      this.handlers.forEach(({
        name: _v0,
        handler: _v1
      }) => this.editorView.dom.removeEventListener(_v0, _v1));
    }
    update(_v0, _v1) {
      null != this.cursorPos && _v1.doc != _v0.state.doc && (this.cursorPos > _v0.state.doc.content.size ? this.setCursor(null) : this.updateOverlay());
    }
    setCursor(_v0) {
      _v0 != this.cursorPos && (this.cursorPos = _v0, null == _v0 ? (this.element.parentNode.removeChild(this.element), this.element = null) : this.updateOverlay());
    }
    updateOverlay() {
      let _v0,
        _v1,
        _v2 = this.editorView.state.doc.resolve(this.cursorPos),
        _v3 = !_v2.parent.inlineContent,
        _v4,
        _v5 = this.editorView.dom,
        _v6 = _v5.getBoundingClientRect(),
        _v7 = _v6.width / _v5.offsetWidth,
        _v8 = _v6.height / _v5.offsetHeight;
      if (_v3) {
        let _v0 = _v2.nodeBefore,
          _v1 = _v2.nodeAfter;
        if (_v0 || _v1) {
          let _v0 = this.editorView.nodeDOM(this.cursorPos - (_v0 ? _v0.nodeSize : 0));
          if (_v0) {
            let _v0 = _v0.getBoundingClientRect(),
              _v1 = _v0 ? _v0.bottom : _v0.top;
            _v0 && _v1 && (_v1 = (_v1 + this.editorView.nodeDOM(this.cursorPos).getBoundingClientRect().top) / 2);
            let _v2 = this.width / 2 * _v8;
            _v4 = {
              left: _v0.left,
              right: _v0.right,
              top: _v1 - _v2,
              bottom: _v1 + _v2
            };
          }
        }
      }
      if (!_v4) {
        let _v0 = this.editorView.coordsAtPos(this.cursorPos),
          _v1 = this.width / 2 * _v7;
        _v4 = {
          left: _v0.left - _v1,
          right: _v0.left + _v1,
          top: _v0.top,
          bottom: _v0.bottom
        };
      }
      let _v9 = this.editorView.dom.offsetParent;
      if (!this.element && (this.element = _v9.appendChild(document.createElement("div")), this.class && (this.element.className = this.class), this.element.style.cssText = "position: absolute; z-index: 50; pointer-events: none;", this.color && (this.element.style.backgroundColor = this.color)), this.element.classList.toggle("prosemirror-dropcursor-block", _v3), this.element.classList.toggle("prosemirror-dropcursor-inline", !_v3), _v9 && (_v9 != document.body || "static" != getComputedStyle(_v9).position)) {
        let _v0 = _v9.getBoundingClientRect(),
          _v1 = _v0.width / _v9.offsetWidth,
          _v2 = _v0.height / _v9.offsetHeight;
        _v0 = _v0.left - _v9.scrollLeft * _v1, _v1 = _v0.top - _v9.scrollTop * _v2;
      } else _v0 = -pageXOffset, _v1 = -pageYOffset;
      this.element.style.left = (_v4.left - _v0) / _v7 + "px", this.element.style.top = (_v4.top - _v1) / _v8 + "px", this.element.style.width = (_v4.right - _v4.left) / _v7 + "px", this.element.style.height = (_v4.bottom - _v4.top) / _v8 + "px";
    }
    scheduleRemoval(_v0) {
      clearTimeout(this.timeout), this.timeout = setTimeout(() => this.setCursor(null), _v0);
    }
    dragover(_v0) {
      if (!this.editorView.editable) return;
      let _v1 = this.editorView.posAtCoords({
          left: _v0.clientX,
          top: _v0.clientY
        }),
        _v2 = _v1 && _v1.inside >= 0 && this.editorView.state.doc.nodeAt(_v1.inside),
        _v3 = _v2 && _v2.type.spec.disableDropCursor,
        _v4 = "function" == typeof _v3 ? _v3(this.editorView, _v1, _v0) : _v3;
      if (_v1 && !_v4) {
        let _v0 = _v1.pos;
        if (this.editorView.dragging && this.editorView.dragging.slice) {
          let _v0 = (0, _v16.dropPoint)(this.editorView.state.doc, _v0, this.editorView.dragging.slice);
          null != _v0 && (_v0 = _v0);
        }
        this.setCursor(_v0), this.scheduleRemoval(0);
      }
    }
    dragend() {
      this.scheduleRemoval(20);
    }
    drop() {
      this.scheduleRemoval(20);
    }
    dragleave(_v0) {
      this.editorView.dom.contains(_v0.relatedTarget) || this.setCursor(null);
    }
  }
  let _v18 = _v1.Extension.create({
    name: "dropCursor",
    addOptions: () => ({
      color: "currentColor",
      width: 1,
      class: void 0
    }),
    addProseMirrorPlugins() {
      return [function (_v0 = {}) {
        return new _v11.Plugin({
          view: _v0 => new _v17(_v0, _v0)
        });
      }(this.options)];
    }
  });
  var _v19 = _v0.i(0),
    _v20 = _v11,
    _v21 = _v0.i(0),
    _v22 = _v0.i(0);
  class _v23 extends _v20.Selection {
    constructor(_v0) {
      super(_v0, _v0);
    }
    map(_v0, _v1) {
      let _v2 = _v0.resolve(_v1.map(this.head));
      return _v23.valid(_v2) ? new _v23(_v2) : _v20.Selection.near(_v2);
    }
    content() {
      return _v21.Slice.empty;
    }
    eq(_v0) {
      return _v0 instanceof _v23 && _v0.head == this.head;
    }
    toJSON() {
      return {
        type: "gapcursor",
        pos: this.head
      };
    }
    static fromJSON(_v0, _v1) {
      if ("number" != typeof _v1.pos) throw RangeError("Invalid input for GapCursor.fromJSON");
      return new _v23(_v0.resolve(_v1.pos));
    }
    getBookmark() {
      return new _v24(this.anchor);
    }
    static valid(_v0) {
      let _v1 = _v0.parent;
      if (_v1.inlineContent || !function (_v0) {
        for (let _v0 = _v0.depth; _v0 >= 0; _v0--) {
          let _v0 = _v0.index(_v0),
            _v1 = _v0.node(_v0);
          if (0 == _v0) {
            if (_v1.type.spec.isolating) return !0;
            continue;
          }
          for (let _v0 = _v1.child(_v0 - 1);; _v0 = _v0.lastChild) {
            if (0 == _v0.childCount && !_v0.inlineContent || _v25(_v0.type)) return !0;
            if (_v0.inlineContent) return !1;
          }
        }
        return !0;
      }(_v0) || !function (_v0) {
        for (let _v0 = _v0.depth; _v0 >= 0; _v0--) {
          let _v0 = _v0.indexAfter(_v0),
            _v1 = _v0.node(_v0);
          if (_v0 == _v1.childCount) {
            if (_v1.type.spec.isolating) return !0;
            continue;
          }
          for (let _v0 = _v1.child(_v0);; _v0 = _v0.firstChild) {
            if (0 == _v0.childCount && !_v0.inlineContent || _v25(_v0.type)) return !0;
            if (_v0.inlineContent) return !1;
          }
        }
        return !0;
      }(_v0)) return !1;
      let _v2 = _v1.type.spec.allowGapCursor;
      if (null != _v2) return _v2;
      let _v3 = _v1.contentMatchAt(_v0.index()).defaultType;
      return _v3 && _v3.isTextblock;
    }
    static findGapCursorFrom(_v0, _v1, _v2 = !1) {
      t: for (;;) {
        if (!_v2 && _v23.valid(_v0)) return _v0;
        let _v0 = _v0.pos,
          _v1 = null;
        for (let _v0 = _v0.depth;; _v0--) {
          let _v0 = _v0.node(_v0);
          if (_v1 > 0 ? _v0.indexAfter(_v0) < _v0.childCount : _v0.index(_v0) > 0) {
            _v1 = _v0.child(_v1 > 0 ? _v0.indexAfter(_v0) : _v0.index(_v0) - 1);
            break;
          }
          if (0 == _v0) return null;
          _v0 += _v1;
          let _v1 = _v0.doc.resolve(_v0);
          if (_v23.valid(_v1)) return _v1;
        }
        for (;;) {
          let _v0 = _v1 > 0 ? _v1.firstChild : _v1.lastChild;
          if (!_v0) {
            if (_v1.isAtom && !_v1.isText && !_v20.NodeSelection.isSelectable(_v1)) {
              _v0 = _v0.doc.resolve(_v0 + _v1.nodeSize * _v1), _v2 = !1;
              continue t;
            }
            break;
          }
          _v1 = _v0, _v0 += _v1;
          let _v1 = _v0.doc.resolve(_v0);
          if (_v23.valid(_v1)) return _v1;
        }
        return null;
      }
    }
  }
  _v23.prototype.visible = !1, _v23.findFrom = _v23.findGapCursorFrom, _v20.Selection.jsonID("gapcursor", _v23);
  class _v24 {
    constructor(_v0) {
      this.pos = _v0;
    }
    map(_v0) {
      return new _v24(_v0.map(this.pos));
    }
    resolve(_v0) {
      let _v1 = _v0.resolve(this.pos);
      return _v23.valid(_v1) ? new _v23(_v1) : _v20.Selection.near(_v1);
    }
  }
  function _v25(_v0) {
    return _v0.isAtom || _v0.spec.isolating || _v0.spec.createGapCursor;
  }
  let _v26 = (0, _v19.keydownHandler)({
    ArrowLeft: _v27("horiz", -1),
    ArrowRight: _v27("horiz", 1),
    ArrowUp: _v27("vert", -1),
    ArrowDown: _v27("vert", 1)
  });
  function _v27(_v0, _v1) {
    let _v2 = "vert" == _v0 ? _v1 > 0 ? "down" : "up" : _v1 > 0 ? "right" : "left";
    return function (_v0, _v1, _v2) {
      let _v3 = _v0.selection,
        _v4 = _v1 > 0 ? _v3.$to : _v3.$from,
        _v5 = _v3.empty;
      if (_v3 instanceof _v20.TextSelection) {
        if (!_v2.endOfTextblock(_v2) || 0 == _v4.depth) return !1;
        _v5 = !1, _v4 = _v0.doc.resolve(_v1 > 0 ? _v4.after() : _v4.before());
      }
      let _v6 = _v23.findGapCursorFrom(_v4, _v1, _v5);
      return !!_v6 && (_v1 && _v1(_v0.tr.setSelection(new _v23(_v6))), !0);
    };
  }
  function _v28(_v0, _v1, _v2) {
    if (!_v0 || !_v0.editable) return !1;
    let _v3 = _v0.state.doc.resolve(_v1);
    if (!_v23.valid(_v3)) return !1;
    let _v4 = _v0.posAtCoords({
      left: _v2.clientX,
      top: _v2.clientY
    });
    return !(_v4 && _v4.inside > -1 && _v20.NodeSelection.isSelectable(_v0.state.doc.nodeAt(_v4.inside))) && (_v0.dispatch(_v0.state.tr.setSelection(new _v23(_v3))), !0);
  }
  function _v29(_v0, _v1) {
    if ("insertCompositionText" != _v1.inputType || !(_v0.state.selection instanceof _v23)) return !1;
    let {
        $from: _v2
      } = _v0.state.selection,
      _v3 = _v2.parent.contentMatchAt(_v2.index()).findWrapping(_v0.state.schema.nodes.text);
    if (!_v3) return !1;
    let _v4 = _v21.Fragment.empty;
    for (let _v0 = _v3.length - 1; _v0 >= 0; _v0--) _v4 = _v21.Fragment.from(_v3[_v0].createAndFill(null, _v4));
    let _v5 = _v0.state.tr.replace(_v2.pos, _v2.pos, new _v21.Slice(_v4, 0, 0));
    return _v5.setSelection(_v20.TextSelection.near(_v5.doc.resolve(_v2.pos + 1))), _v0.dispatch(_v5), !1;
  }
  function _v30(_v0) {
    if (!(_v0.selection instanceof _v23)) return null;
    let _v1 = document.createElement("div");
    return _v1.className = "ProseMirror-gapcursor", _v22.DecorationSet.create(_v0.doc, [_v22.Decoration.widget(_v0.selection.head, _v1, {
      key: "gapcursor"
    })]);
  }
  let _v31 = _v1.Extension.create({
    name: "gapCursor",
    addProseMirrorPlugins: () => [new _v20.Plugin({
      props: {
        decorations: _v30,
        createSelectionBetween: (_v0, _v1, _v2) => _v1.pos == _v2.pos && _v23.valid(_v2) ? new _v23(_v2) : null,
        handleClick: _v28,
        handleKeyDown: _v26,
        handleDOMEvents: {
          beforeinput: _v29
        }
      }
    })],
    extendNodeSchema(_v0) {
      var _v1;
      let _v2 = {
        name: _v0.name,
        options: _v0.options,
        storage: _v0.storage
      };
      return {
        allowGapCursor: null != (_v1 = (0, _v1.callOrReturn)((0, _v1.getExtensionField)(_v0, "allowGapCursor", _v2))) ? _v1 : null
      };
    }
  });
  var _v32 = _v0.i(0);
  let _v33 = _v1.Node.create({
    name: "heading",
    addOptions: () => ({
      levels: [1, 2, 3, 4, 5, 6],
      HTMLAttributes: {}
    }),
    content: "inline*",
    group: "block",
    defining: !0,
    addAttributes: () => ({
      level: {
        default: 1,
        rendered: !1
      }
    }),
    parseHTML() {
      return this.options.levels.map(_v0 => ({
        tag: `h${_v0}`,
        attrs: {
          level: _v0
        }
      }));
    },
    renderHTML({
      node: _v0,
      HTMLAttributes: _v1
    }) {
      let _v2 = this.options.levels.includes(_v0.attrs.level) ? _v0.attrs.level : this.options.levels[0];
      return [`h${_v2}`, (0, _v1.mergeAttributes)(this.options.HTMLAttributes, _v1), 0];
    },
    addCommands() {
      return {
        setHeading: _v0 => ({
          commands: _v0
        }) => !!this.options.levels.includes(_v0.level) && _v0.setNode(this.name, _v0),
        toggleHeading: _v0 => ({
          commands: _v0
        }) => !!this.options.levels.includes(_v0.level) && _v0.toggleNode(this.name, "paragraph", _v0)
      };
    },
    addKeyboardShortcuts() {
      return this.options.levels.reduce((_v0, _v1) => ({
        ..._v0,
        ...{
          [`Mod-Alt-${_v1}`]: () => this.editor.commands.toggleHeading({
            level: _v1
          })
        }
      }), {});
    },
    addInputRules() {
      return this.options.levels.map(_v0 => (0, _v1.textblockTypeInputRule)({
        find: RegExp(`^(#{${Math.min(...this.options.levels)},${_v0}})\\s$`),
        type: this.type,
        getAttributes: {
          level: _v0
        }
      }));
    }
  });
  var _v34 = function () {};
  _v34.prototype.append = function (_v0) {
    return _v0.length ? (_v0 = _v34.from(_v0), !this.length && _v0 || _v0.length < 200 && this.leafAppend(_v0) || this.length < 200 && _v0.leafPrepend(this) || this.appendInner(_v0)) : this;
  }, _v34.prototype.prepend = function (_v0) {
    return _v0.length ? _v34.from(_v0).append(this) : this;
  }, _v34.prototype.appendInner = function (_v0) {
    return new _v36(this, _v0);
  }, _v34.prototype.slice = function (_v0, _v1) {
    return (void 0 === _v0 && (_v0 = 0), void 0 === _v1 && (_v1 = this.length), _v0 >= _v1) ? _v34.empty : this.sliceInner(Math.max(0, _v0), Math.min(this.length, _v1));
  }, _v34.prototype.get = function (_v0) {
    if (!(_v0 < 0) && !(_v0 >= this.length)) return this.getInner(_v0);
  }, _v34.prototype.forEach = function (_v0, _v1, _v2) {
    void 0 === _v1 && (_v1 = 0), void 0 === _v2 && (_v2 = this.length), _v1 <= _v2 ? this.forEachInner(_v0, _v1, _v2, 0) : this.forEachInvertedInner(_v0, _v1, _v2, 0);
  }, _v34.prototype.map = function (_v0, _v1, _v2) {
    void 0 === _v1 && (_v1 = 0), void 0 === _v2 && (_v2 = this.length);
    var _v3 = [];
    return this.forEach(function (_v0, _v1) {
      return _v3.push(_v0(_v0, _v1));
    }, _v1, _v2), _v3;
  }, _v34.from = function (_v0) {
    return _v0 instanceof _v34 ? _v0 : _v0 && _v0.length ? new _v35(_v0) : _v34.empty;
  };
  var _v35 = function (_v0) {
    function _v1(_v0) {
      _v0.call(this), this.values = _v0;
    }
    _v1.__proto__ = _v0, _v1.prototype = Object.create(_v0 && _v0.prototype), _v1.prototype.constructor = _v1;
    var _v2 = {
      length: {
        configurable: !0
      },
      depth: {
        configurable: !0
      }
    };
    return _v1.prototype.flatten = function () {
      return this.values;
    }, _v1.prototype.sliceInner = function (_v0, _v1) {
      return 0 == _v0 && _v1 == this.length ? this : new _v1(this.values.slice(_v0, _v1));
    }, _v1.prototype.getInner = function (_v0) {
      return this.values[_v0];
    }, _v1.prototype.forEachInner = function (_v0, _v1, _v2, _v3) {
      for (var _v4 = _v1; _v4 < _v2; _v4++) if (!1 === _v0(this.values[_v4], _v3 + _v4)) return !1;
    }, _v1.prototype.forEachInvertedInner = function (_v0, _v1, _v2, _v3) {
      for (var _v4 = _v1 - 1; _v4 >= _v2; _v4--) if (!1 === _v0(this.values[_v4], _v3 + _v4)) return !1;
    }, _v1.prototype.leafAppend = function (_v0) {
      if (this.length + _v0.length <= 200) return new _v1(this.values.concat(_v0.flatten()));
    }, _v1.prototype.leafPrepend = function (_v0) {
      if (this.length + _v0.length <= 200) return new _v1(_v0.flatten().concat(this.values));
    }, _v2.length.get = function () {
      return this.values.length;
    }, _v2.depth.get = function () {
      return 0;
    }, Object.defineProperties(_v1.prototype, _v2), _v1;
  }(_v34);
  _v34.empty = new _v35([]);
  var _v36 = function (_v0) {
    function _v1(_v0, _v1) {
      _v0.call(this), this.left = _v0, this.right = _v1, this.length = _v0.length + _v1.length, this.depth = Math.max(_v0.depth, _v1.depth) + 1;
    }
    return _v1.__proto__ = _v0, _v1.prototype = Object.create(_v0 && _v0.prototype), _v1.prototype.constructor = _v1, _v1.prototype.flatten = function () {
      return this.left.flatten().concat(this.right.flatten());
    }, _v1.prototype.getInner = function (_v0) {
      return _v0 < this.left.length ? this.left.get(_v0) : this.right.get(_v0 - this.left.length);
    }, _v1.prototype.forEachInner = function (_v0, _v1, _v2, _v3) {
      var _v4 = this.left.length;
      if (_v1 < _v4 && !1 === this.left.forEachInner(_v0, _v1, Math.min(_v2, _v4), _v3) || _v2 > _v4 && !1 === this.right.forEachInner(_v0, Math.max(_v1 - _v4, 0), Math.min(this.length, _v2) - _v4, _v3 + _v4)) return !1;
    }, _v1.prototype.forEachInvertedInner = function (_v0, _v1, _v2, _v3) {
      var _v4 = this.left.length;
      if (_v1 > _v4 && !1 === this.right.forEachInvertedInner(_v0, _v1 - _v4, Math.max(_v2, _v4) - _v4, _v3 + _v4) || _v2 < _v4 && !1 === this.left.forEachInvertedInner(_v0, Math.min(_v1, _v4), _v2, _v3)) return !1;
    }, _v1.prototype.sliceInner = function (_v0, _v1) {
      if (0 == _v0 && _v1 == this.length) return this;
      var _v2 = this.left.length;
      return _v1 <= _v2 ? this.left.slice(_v0, _v1) : _v0 >= _v2 ? this.right.slice(_v0 - _v2, _v1 - _v2) : this.left.slice(_v0, _v2).append(this.right.slice(0, _v1 - _v2));
    }, _v1.prototype.leafAppend = function (_v0) {
      var _v1 = this.right.leafAppend(_v0);
      if (_v1) return new _v1(this.left, _v1);
    }, _v1.prototype.leafPrepend = function (_v0) {
      var _v1 = this.left.leafPrepend(_v0);
      if (_v1) return new _v1(_v1, this.right);
    }, _v1.prototype.appendInner = function (_v0) {
      return this.left.depth >= Math.max(this.right.depth, _v0.depth) + 1 ? new _v1(this.left, new _v1(this.right, _v0)) : new _v1(this, _v0);
    }, _v1;
  }(_v34);
  class _v37 {
    constructor(_v0, _v1) {
      this.items = _v0, this.eventCount = _v1;
    }
    popEvent(_v0, _v1) {
      let _v2, _v3, _v4, _v5;
      if (0 == this.eventCount) return null;
      let _v6 = this.items.length;
      for (;; _v6--) if (this.items.get(_v6 - 1).selection) {
        --_v6;
        break;
      }
      _v1 && (_v3 = (_v2 = this.remapping(_v6, this.items.length)).maps.length);
      let _v7 = _v0.tr,
        _v8 = [],
        _v9 = [];
      return this.items.forEach((_v0, _v1) => {
        if (!_v0.step) {
          _v2 || (_v3 = (_v2 = this.remapping(_v6, _v1 + 1)).maps.length), _v3--, _v9.push(_v0);
          return;
        }
        if (_v2) {
          _v9.push(new _v38(_v0.map));
          let _v0 = _v0.step.map(_v2.slice(_v3)),
            _v1;
          _v0 && _v7.maybeStep(_v0).doc && (_v1 = _v7.mapping.maps[_v7.mapping.maps.length - 1], _v8.push(new _v38(_v1, void 0, void 0, _v8.length + _v9.length))), _v3--, _v1 && _v2.appendMap(_v1, _v3);
        } else _v7.maybeStep(_v0.step);
        if (_v0.selection) return _v4 = _v2 ? _v0.selection.map(_v2.slice(_v3)) : _v0.selection, _v5 = new _v37(this.items.slice(0, _v6).append(_v9.reverse().concat(_v8)), this.eventCount - 1), !1;
      }, this.items.length, 0), {
        remaining: _v5,
        transform: _v7,
        selection: _v4
      };
    }
    addTransform(_v0, _v1, _v2, _v3) {
      var _v4, _v5;
      let _v6,
        _v7 = [],
        _v8 = this.eventCount,
        _v9 = this.items,
        _v10 = !_v3 && _v9.length ? _v9.get(_v9.length - 1) : null;
      for (let _v0 = 0; _v0 < _v0.steps.length; _v0++) {
        let _v0 = _v0.steps[_v0].invert(_v0.docs[_v0]),
          _v1 = new _v38(_v0.mapping.maps[_v0], _v0, _v1),
          _v2;
        (_v2 = _v10 && _v10.merge(_v1)) && (_v1 = _v2, _v0 ? _v7.pop() : _v9 = _v9.slice(0, _v9.length - 1)), _v7.push(_v1), _v1 && (_v8++, _v1 = void 0), _v3 || (_v10 = _v1);
      }
      let _v11 = _v8 - _v2.depth;
      return _v11 > _v40 && (_v4 = _v9, _v5 = _v11, _v4.forEach((_v0, _v1) => {
        if (_v0.selection && 0 == _v5--) return _v6 = _v1, !1;
      }), _v9 = _v4.slice(_v6), _v8 -= _v11), new _v37(_v9.append(_v7), _v8);
    }
    remapping(_v0, _v1) {
      let _v2 = new _v16.Mapping();
      return this.items.forEach((_v0, _v1) => {
        let _v2 = null != _v0.mirrorOffset && _v1 - _v0.mirrorOffset >= _v0 ? _v2.maps.length - _v0.mirrorOffset : void 0;
        _v2.appendMap(_v0.map, _v2);
      }, _v0, _v1), _v2;
    }
    addMaps(_v0) {
      return 0 == this.eventCount ? this : new _v37(this.items.append(_v0.map(_v0 => new _v38(_v0))), this.eventCount);
    }
    rebased(_v0, _v1) {
      if (!this.eventCount) return this;
      let _v2 = [],
        _v3 = Math.max(0, this.items.length - _v1),
        _v4 = _v0.mapping,
        _v5 = _v0.steps.length,
        _v6 = this.eventCount;
      this.items.forEach(_v0 => {
        _v0.selection && _v6--;
      }, _v3);
      let _v7 = _v1;
      this.items.forEach(_v0 => {
        let _v1 = _v4.getMirror(--_v7);
        if (null == _v1) return;
        _v5 = Math.min(_v5, _v1);
        let _v2 = _v4.maps[_v1];
        if (_v0.step) {
          let _v0 = _v0.steps[_v1].invert(_v0.docs[_v1]),
            _v1 = _v0.selection && _v0.selection.map(_v4.slice(_v7 + 1, _v1));
          _v1 && _v6++, _v2.push(new _v38(_v2, _v0, _v1));
        } else _v2.push(new _v38(_v2));
      }, _v3);
      let _v8 = [];
      for (let _v0 = _v1; _v0 < _v5; _v0++) _v8.push(new _v38(_v4.maps[_v0]));
      let _v9 = new _v37(this.items.slice(0, _v3).append(_v8).append(_v2), _v6);
      return _v9.emptyItemCount() > 500 && (_v9 = _v9.compress(this.items.length - _v2.length)), _v9;
    }
    emptyItemCount() {
      let _v0 = 0;
      return this.items.forEach(_v0 => {
        !_v0.step && _v0++;
      }), _v0;
    }
    compress(_v0 = this.items.length) {
      let _v1 = this.remapping(0, _v0),
        _v2 = _v1.maps.length,
        _v3 = [],
        _v4 = 0;
      return this.items.forEach((_v0, _v1) => {
        if (_v1 >= _v0) _v3.push(_v0), _v0.selection && _v4++;else if (_v0.step) {
          let _v0 = _v0.step.map(_v1.slice(_v2)),
            _v1 = _v0 && _v0.getMap();
          if (_v2--, _v1 && _v1.appendMap(_v1, _v2), _v0) {
            let _v0 = _v0.selection && _v0.selection.map(_v1.slice(_v2));
            _v0 && _v4++;
            let _v1 = new _v38(_v1.invert(), _v0, _v0),
              _v2,
              _v3 = _v3.length - 1;
            (_v2 = _v3.length && _v3[_v3].merge(_v1)) ? _v3[_v3] = _v2 : _v3.push(_v1);
          }
        } else _v0.map && _v2--;
      }, this.items.length, 0), new _v37(_v34.from(_v3.reverse()), _v4);
    }
  }
  _v37.empty = new _v37(_v34.empty, 0);
  class _v38 {
    constructor(_v0, _v1, _v2, _v3) {
      this.map = _v0, this.step = _v1, this.selection = _v2, this.mirrorOffset = _v3;
    }
    merge(_v0) {
      if (this.step && _v0.step && !_v0.selection) {
        let _v0 = _v0.step.merge(this.step);
        if (_v0) return new _v38(_v0.getMap().invert(), _v0, this.selection);
      }
    }
  }
  class _v39 {
    constructor(_v0, _v1, _v2, _v3, _v4) {
      this.done = _v0, this.undone = _v1, this.prevRanges = _v2, this.prevTime = _v3, this.prevComposition = _v4;
    }
  }
  let _v40 = 20;
  function _v41(_v0) {
    let _v1 = [];
    for (let _v0 = _v0.length - 1; _v0 >= 0 && 0 == _v1.length; _v0--) _v0[_v0].forEach((_v0, _v1, _v2, _v3) => _v1.push(_v2, _v3));
    return _v1;
  }
  function _v42(_v0, _v1) {
    if (!_v0) return null;
    let _v2 = [];
    for (let _v0 = 0; _v0 < _v0.length; _v0 += 2) {
      let _v0 = _v1.map(_v0[_v0], 1),
        _v1 = _v1.map(_v0[_v0 + 1], -1);
      _v0 <= _v1 && _v2.push(_v0, _v1);
    }
    return _v2;
  }
  let _v43 = !1,
    _v44 = null;
  function _v45(_v0) {
    let _v1 = _v0.plugins;
    if (_v44 != _v1) {
      _v43 = !1, _v44 = _v1;
      for (let _v0 = 0; _v0 < _v1.length; _v0++) if (_v1[_v0].spec.historyPreserveItems) {
        _v43 = !0;
        break;
      }
    }
    return _v43;
  }
  let _v46 = new _v11.PluginKey("history"),
    _v47 = new _v11.PluginKey("closeHistory");
  function _v48(_v0, _v1) {
    return (_v0, _v1) => {
      let _v2 = _v46.getState(_v0);
      if (!_v2 || 0 == (_v0 ? _v2.undone : _v2.done).eventCount) return !1;
      if (_v1) {
        let _v0 = function (_v0, _v1, _v2) {
          let _v3 = _v45(_v1),
            _v4 = _v46.get(_v1).spec.config,
            _v5 = (_v2 ? _v0.undone : _v0.done).popEvent(_v1, _v3);
          if (!_v5) return null;
          let _v6 = _v5.selection.resolve(_v5.transform.doc),
            _v7 = (_v2 ? _v0.done : _v0.undone).addTransform(_v5.transform, _v1.selection.getBookmark(), _v4, _v3),
            _v8 = new _v39(_v2 ? _v7 : _v5.remaining, _v2 ? _v5.remaining : _v7, null, 0, -1);
          return _v5.transform.setSelection(_v6).setMeta(_v46, {
            redo: _v2,
            historyState: _v8
          });
        }(_v2, _v0, _v0);
        _v0 && _v1(_v1 ? _v0.scrollIntoView() : _v0);
      }
      return !0;
    };
  }
  let _v49 = _v48(!1, !0),
    _v50 = _v48(!0, !0);
  _v48(!1, !1), _v48(!0, !1);
  let _v51 = _v1.Extension.create({
      name: "history",
      addOptions: () => ({
        depth: 100,
        newGroupDelay: 500
      }),
      addCommands: () => ({
        undo: () => ({
          state: _v0,
          dispatch: _v1
        }) => _v49(_v0, _v1),
        redo: () => ({
          state: _v0,
          dispatch: _v1
        }) => _v50(_v0, _v1)
      }),
      addProseMirrorPlugins() {
        return [function (_v0 = {}) {
          return _v0 = {
            depth: _v0.depth || 100,
            newGroupDelay: _v0.newGroupDelay || 500
          }, new _v11.Plugin({
            key: _v46,
            state: {
              init: () => new _v39(_v37.empty, _v37.empty, null, 0, -1),
              apply: (_v0, _v1, _v2) => function (_v0, _v1, _v2, _v3) {
                let _v4 = _v2.getMeta(_v46),
                  _v5;
                if (_v4) return _v4.historyState;
                _v2.getMeta(_v47) && (_v0 = new _v39(_v0.done, _v0.undone, null, 0, -1));
                let _v6 = _v2.getMeta("appendedTransaction");
                if (0 == _v2.steps.length) return _v0;
                if (_v6 && _v6.getMeta(_v46)) if (_v6.getMeta(_v46).redo) return new _v39(_v0.done.addTransform(_v2, void 0, _v3, _v45(_v1)), _v0.undone, _v41(_v2.mapping.maps), _v0.prevTime, _v0.prevComposition);else return new _v39(_v0.done, _v0.undone.addTransform(_v2, void 0, _v3, _v45(_v1)), null, _v0.prevTime, _v0.prevComposition);
                if (!1 === _v2.getMeta("addToHistory") || _v6 && !1 === _v6.getMeta("addToHistory")) if (_v5 = _v2.getMeta("rebased")) return new _v39(_v0.done.rebased(_v2, _v5), _v0.undone.rebased(_v2, _v5), _v42(_v0.prevRanges, _v2.mapping), _v0.prevTime, _v0.prevComposition);else return new _v39(_v0.done.addMaps(_v2.mapping.maps), _v0.undone.addMaps(_v2.mapping.maps), _v42(_v0.prevRanges, _v2.mapping), _v0.prevTime, _v0.prevComposition);
                {
                  let _v0 = _v2.getMeta("composition"),
                    _v1 = 0 == _v0.prevTime || !_v6 && _v0.prevComposition != _v0 && (_v0.prevTime < (_v2.time || 0) - _v3.newGroupDelay || !function (_v0, _v1) {
                      if (!_v1) return !1;
                      if (!_v0.docChanged) return !0;
                      let _v2 = !1;
                      return _v0.mapping.maps[0].forEach((_v0, _v1) => {
                        for (let _v0 = 0; _v0 < _v1.length; _v0 += 2) _v0 <= _v1[_v0 + 1] && _v1 >= _v1[_v0] && (_v2 = !0);
                      }), _v2;
                    }(_v2, _v0.prevRanges)),
                    _v2 = _v6 ? _v42(_v0.prevRanges, _v2.mapping) : _v41(_v2.mapping.maps);
                  return new _v39(_v0.done.addTransform(_v2, _v1 ? _v1.selection.getBookmark() : void 0, _v3, _v45(_v1)), _v37.empty, _v2, _v2.time, null == _v0 ? _v0.prevComposition : _v0);
                }
              }(_v1, _v2, _v0, _v0)
            },
            config: _v0,
            props: {
              handleDOMEvents: {
                beforeinput(_v0, _v1) {
                  let _v2 = _v1.inputType,
                    _v3 = "historyUndo" == _v2 ? _v49 : "historyRedo" == _v2 ? _v50 : null;
                  return !!_v3 && !!_v0.editable && (_v1.preventDefault(), _v3(_v0.state, _v0.dispatch));
                }
              }
            }
          });
        }(this.options)];
      },
      addKeyboardShortcuts() {
        return {
          "Mod-z": () => this.editor.commands.undo(),
          "Shift-Mod-z": () => this.editor.commands.redo(),
          "Mod-y": () => this.editor.commands.redo(),
          "Mod-я": () => this.editor.commands.undo(),
          "Shift-Mod-я": () => this.editor.commands.redo()
        };
      }
    }),
    _v52 = _v1.Node.create({
      name: "horizontalRule",
      addOptions: () => ({
        HTMLAttributes: {}
      }),
      group: "block",
      parseHTML: () => [{
        tag: "hr"
      }],
      renderHTML({
        HTMLAttributes: _v0
      }) {
        return ["hr", (0, _v1.mergeAttributes)(this.options.HTMLAttributes, _v0)];
      },
      addCommands() {
        return {
          setHorizontalRule: () => ({
            chain: _v0,
            state: _v1
          }) => {
            if (!(0, _v1.canInsertNode)(_v1, _v1.schema.nodes[this.name])) return !1;
            let {
                selection: _v2
              } = _v1,
              {
                $from: _v3,
                $to: _v4
              } = _v2,
              _v5 = _v0();
            return 0 === _v3.parentOffset ? _v5.insertContentAt({
              from: Math.max(_v3.pos - 1, 0),
              to: _v4.pos
            }, {
              type: this.name
            }) : (0, _v1.isNodeSelection)(_v2) ? _v5.insertContentAt(_v4.pos, {
              type: this.name
            }) : _v5.insertContent({
              type: this.name
            }), _v5.command(({
              tr: _v0,
              dispatch: _v1
            }) => {
              var _v2;
              if (_v1) {
                let {
                    $to: _v0
                  } = _v0.selection,
                  _v1 = _v0.end();
                if (_v0.nodeAfter) _v0.nodeAfter.isTextblock ? _v0.setSelection(_v11.TextSelection.create(_v0.doc, _v0.pos + 1)) : _v0.nodeAfter.isBlock ? _v0.setSelection(_v11.NodeSelection.create(_v0.doc, _v0.pos)) : _v0.setSelection(_v11.TextSelection.create(_v0.doc, _v0.pos));else {
                  let _v0 = null == (_v2 = _v0.parent.type.contentMatch.defaultType) ? void 0 : _v2.create();
                  _v0 && (_v0.insert(_v1, _v0), _v0.setSelection(_v11.TextSelection.create(_v0.doc, _v1 + 1)));
                }
                _v0.scrollIntoView();
              }
              return !0;
            }).run();
          }
        };
      },
      addInputRules() {
        return [(0, _v1.nodeInputRule)({
          find: /^(?:---|—-|___\s|\*\*\*\s)$/,
          type: this.type
        })];
      }
    }),
    _v53 = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))$/,
    _v54 = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))/g,
    _v55 = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))$/,
    _v56 = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))/g,
    _v57 = _v1.Mark.create({
      name: "italic",
      addOptions: () => ({
        HTMLAttributes: {}
      }),
      parseHTML() {
        return [{
          tag: "em"
        }, {
          tag: "i",
          getAttrs: _v0 => "normal" !== _v0.style.fontStyle && null
        }, {
          style: "font-style=normal",
          clearMark: _v0 => _v0.type.name === this.name
        }, {
          style: "font-style=italic"
        }];
      },
      renderHTML({
        HTMLAttributes: _v0
      }) {
        return ["em", (0, _v1.mergeAttributes)(this.options.HTMLAttributes, _v0), 0];
      },
      addCommands() {
        return {
          setItalic: () => ({
            commands: _v0
          }) => _v0.setMark(this.name),
          toggleItalic: () => ({
            commands: _v0
          }) => _v0.toggleMark(this.name),
          unsetItalic: () => ({
            commands: _v0
          }) => _v0.unsetMark(this.name)
        };
      },
      addKeyboardShortcuts() {
        return {
          "Mod-i": () => this.editor.commands.toggleItalic(),
          "Mod-I": () => this.editor.commands.toggleItalic()
        };
      },
      addInputRules() {
        return [(0, _v1.markInputRule)({
          find: _v53,
          type: this.type
        }), (0, _v1.markInputRule)({
          find: _v55,
          type: this.type
        })];
      },
      addPasteRules() {
        return [(0, _v1.markPasteRule)({
          find: _v54,
          type: this.type
        }), (0, _v1.markPasteRule)({
          find: _v56,
          type: this.type
        })];
      }
    }),
    _v58 = _v1.Node.create({
      name: "listItem",
      addOptions: () => ({
        HTMLAttributes: {},
        bulletListTypeName: "bulletList",
        orderedListTypeName: "orderedList"
      }),
      content: "paragraph block*",
      defining: !0,
      parseHTML: () => [{
        tag: "li"
      }],
      renderHTML({
        HTMLAttributes: _v0
      }) {
        return ["li", (0, _v1.mergeAttributes)(this.options.HTMLAttributes, _v0), 0];
      },
      addKeyboardShortcuts() {
        return {
          Enter: () => this.editor.commands.splitListItem(this.name),
          Tab: () => this.editor.commands.sinkListItem(this.name),
          "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
        };
      }
    }),
    _v59 = "textStyle",
    _v60 = /^(\d+)\.\s$/,
    _v61 = _v1.Node.create({
      name: "orderedList",
      addOptions: () => ({
        itemTypeName: "listItem",
        HTMLAttributes: {},
        keepMarks: !1,
        keepAttributes: !1
      }),
      group: "block list",
      content() {
        return `${this.options.itemTypeName}+`;
      },
      addAttributes: () => ({
        start: {
          default: 1,
          parseHTML: _v0 => _v0.hasAttribute("start") ? parseInt(_v0.getAttribute("start") || "", 10) : 1
        },
        type: {
          default: null,
          parseHTML: _v0 => _v0.getAttribute("type")
        }
      }),
      parseHTML: () => [{
        tag: "ol"
      }],
      renderHTML({
        HTMLAttributes: _v0
      }) {
        let {
          start: _v1,
          ..._v2
        } = _v0;
        return 1 === _v1 ? ["ol", (0, _v1.mergeAttributes)(this.options.HTMLAttributes, _v2), 0] : ["ol", (0, _v1.mergeAttributes)(this.options.HTMLAttributes, _v0), 0];
      },
      addCommands() {
        return {
          toggleOrderedList: () => ({
            commands: _v0,
            chain: _v1
          }) => this.options.keepAttributes ? _v1().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes("listItem", this.editor.getAttributes(_v59)).run() : _v0.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
        };
      },
      addKeyboardShortcuts() {
        return {
          "Mod-Shift-7": () => this.editor.commands.toggleOrderedList()
        };
      },
      addInputRules() {
        let _v0 = (0, _v1.wrappingInputRule)({
          find: _v60,
          type: this.type,
          getAttributes: _v0 => ({
            start: +_v0[1]
          }),
          joinPredicate: (_v0, _v1) => _v1.childCount + _v1.attrs.start === +_v0[1]
        });
        return (this.options.keepMarks || this.options.keepAttributes) && (_v0 = (0, _v1.wrappingInputRule)({
          find: _v60,
          type: this.type,
          keepMarks: this.options.keepMarks,
          keepAttributes: this.options.keepAttributes,
          getAttributes: _v0 => ({
            start: +_v0[1],
            ...this.editor.getAttributes(_v59)
          }),
          joinPredicate: (_v0, _v1) => _v1.childCount + _v1.attrs.start === +_v0[1],
          editor: this.editor
        })), [_v0];
      }
    });
  var _v62 = _v0.i(0);
  let _v63 = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))$/,
    _v64 = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))/g,
    _v65 = _v1.Mark.create({
      name: "strike",
      addOptions: () => ({
        HTMLAttributes: {}
      }),
      parseHTML: () => [{
        tag: "s"
      }, {
        tag: "del"
      }, {
        tag: "strike"
      }, {
        style: "text-decoration",
        consuming: !1,
        getAttrs: _v0 => !!_v0.includes("line-through") && {}
      }],
      renderHTML({
        HTMLAttributes: _v0
      }) {
        return ["s", (0, _v1.mergeAttributes)(this.options.HTMLAttributes, _v0), 0];
      },
      addCommands() {
        return {
          setStrike: () => ({
            commands: _v0
          }) => _v0.setMark(this.name),
          toggleStrike: () => ({
            commands: _v0
          }) => _v0.toggleMark(this.name),
          unsetStrike: () => ({
            commands: _v0
          }) => _v0.unsetMark(this.name)
        };
      },
      addKeyboardShortcuts() {
        return {
          "Mod-Shift-s": () => this.editor.commands.toggleStrike()
        };
      },
      addInputRules() {
        return [(0, _v1.markInputRule)({
          find: _v63,
          type: this.type
        })];
      },
      addPasteRules() {
        return [(0, _v1.markPasteRule)({
          find: _v64,
          type: this.type
        })];
      }
    });
  var _v66 = _v0.i(0);
  let _v67 = _v1.Extension.create({
    name: "starterKit",
    addExtensions() {
      let _v0 = [];
      return !1 !== this.options.bold && _v0.push(_v4.Bold.configure(this.options.bold)), !1 !== this.options.blockquote && _v0.push(_v3.configure(this.options.blockquote)), !1 !== this.options.bulletList && _v0.push(_v7.configure(this.options.bulletList)), !1 !== this.options.code && _v0.push(_v10.configure(this.options.code)), !1 !== this.options.codeBlock && _v0.push(_v14.configure(this.options.codeBlock)), !1 !== this.options.document && _v0.push(_v15.Document.configure(this.options.document)), !1 !== this.options.dropcursor && _v0.push(_v18.configure(this.options.dropcursor)), !1 !== this.options.gapcursor && _v0.push(_v31.configure(this.options.gapcursor)), !1 !== this.options.hardBreak && _v0.push(_v32.HardBreak.configure(this.options.hardBreak)), !1 !== this.options.heading && _v0.push(_v33.configure(this.options.heading)), !1 !== this.options.history && _v0.push(_v51.configure(this.options.history)), !1 !== this.options.horizontalRule && _v0.push(_v52.configure(this.options.horizontalRule)), !1 !== this.options.italic && _v0.push(_v57.configure(this.options.italic)), !1 !== this.options.listItem && _v0.push(_v58.configure(this.options.listItem)), !1 !== this.options.orderedList && _v0.push(_v61.configure(this.options.orderedList)), !1 !== this.options.paragraph && _v0.push(_v62.Paragraph.configure(this.options.paragraph)), !1 !== this.options.strike && _v0.push(_v65.configure(this.options.strike)), !1 !== this.options.text && _v0.push(_v66.Text.configure(this.options.text)), _v0;
    }
  });
  _v0.s(["default", 0, _v67], 0);
}