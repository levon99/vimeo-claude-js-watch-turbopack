{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  function _v5(_v0) {
    var _v1;
    let {
        char: _v2,
        allowSpaces: _v3,
        allowToIncludeChar: _v4,
        allowedPrefixes: _v5,
        startOfLine: _v6,
        $position: _v7
      } = _v0,
      _v8 = _v3 && !_v4,
      _v9 = (0, _v1.escapeForRegEx)(_v2),
      _v10 = RegExp(`\\s${_v9}$`),
      _v11 = _v6 ? "^" : "",
      _v12 = _v4 ? "" : _v9,
      _v13 = _v8 ? RegExp(`${_v11}${_v9}.*?(?=\\s${_v12}|$)`, "gm") : RegExp(`${_v11}(?:^)?${_v9}[^\\s${_v12}]*`, "gm"),
      _v14 = (null == (_v1 = _v7.nodeBefore) ? void 0 : _v1.isText) && _v7.nodeBefore.text;
    if (!_v14) return null;
    let _v15 = _v7.pos - _v14.length,
      _v16 = Array.from(_v14.matchAll(_v13)).pop();
    if (!_v16 || void 0 === _v16.input || void 0 === _v16.index) return null;
    let _v17 = _v16.input.slice(Math.max(0, _v16.index - 1), _v16.index),
      _v18 = RegExp(`^[${null == _v5 ? void 0 : _v5.join("")}\0]?$`).test(_v17);
    if (null !== _v5 && !_v18) return null;
    let _v19 = _v15 + _v16.index,
      _v20 = _v19 + _v16[0].length;
    return (_v8 && _v10.test(_v14.slice(_v20 - 1, _v20 + 1)) && (_v16[0] += " ", _v20 += 1), _v19 < _v7.pos && _v20 >= _v7.pos) ? {
      range: {
        from: _v19,
        to: _v20
      },
      query: _v16[0].slice(_v2.length),
      text: _v16[0]
    } : null;
  }
  let _v6 = new _v3.PluginKey("suggestion");
  function _v7({
    pluginKey: _v0 = _v6,
    editor: _v1,
    char: _v2 = "@",
    allowSpaces: _v3 = !1,
    allowToIncludeChar: _v4 = !1,
    allowedPrefixes: _v5 = [" "],
    startOfLine: _v6 = !1,
    decorationTag: _v7 = "span",
    decorationClass: _v8 = "suggestion",
    decorationContent: _v9 = "",
    decorationEmptyClass: _v10 = "is-empty",
    command: _v11 = () => null,
    items: _v12 = () => [],
    render: _v13 = () => ({}),
    allow: _v14 = () => !0,
    findSuggestionMatch: _v15 = _v5
  }) {
    let _v16,
      _v17 = null == _v13 ? void 0 : _v13(),
      _v18 = new _v3.Plugin({
        key: _v0,
        view() {
          return {
            update: async (_v0, _v1) => {
              var _v2, _v3, _v4, _v5, _v6, _v7, _v8;
              let _v9 = null == (_v2 = this.key) ? void 0 : _v2.getState(_v1),
                _v10 = null == (_v3 = this.key) ? void 0 : _v3.getState(_v0.state),
                _v11 = _v9.active && _v10.active && _v9.range.from !== _v10.range.from,
                _v12 = !_v9.active && _v10.active,
                _v13 = _v9.active && !_v10.active,
                _v14 = !_v12 && !_v13 && _v9.query !== _v10.query,
                _v15 = _v12 || _v11 && _v14,
                _v16 = _v14 || _v11,
                _v17 = _v13 || _v11 && _v14;
              if (!_v15 && !_v16 && !_v17) return;
              let _v18 = _v17 && !_v15 ? _v9 : _v10,
                _v19 = _v0.dom.querySelector(`[data-decoration-id="${_v18.decorationId}"]`);
              _v16 = {
                editor: _v1,
                range: _v18.range,
                query: _v18.query,
                text: _v18.text,
                items: [],
                command: _v0 => _v11({
                  editor: _v1,
                  range: _v18.range,
                  props: _v0
                }),
                decorationNode: _v19,
                clientRect: _v19 ? () => {
                  var _v0;
                  let {
                      decorationId: _v1
                    } = null == (_v0 = this.key) ? void 0 : _v0.getState(_v1.state),
                    _v2 = _v0.dom.querySelector(`[data-decoration-id="${_v1}"]`);
                  return (null == _v2 ? void 0 : _v2.getBoundingClientRect()) || null;
                } : null
              }, _v15 && (null == (_v4 = null == _v17 ? void 0 : _v17.onBeforeStart) || _v4.call(_v17, _v16)), _v16 && (null == (_v5 = null == _v17 ? void 0 : _v17.onBeforeUpdate) || _v5.call(_v17, _v16)), (_v16 || _v15) && (_v16.items = await _v12({
                editor: _v1,
                query: _v18.query
              })), _v17 && (null == (_v6 = null == _v17 ? void 0 : _v17.onExit) || _v6.call(_v17, _v16)), _v16 && (null == (_v7 = null == _v17 ? void 0 : _v17.onUpdate) || _v7.call(_v17, _v16)), _v15 && (null == (_v8 = null == _v17 ? void 0 : _v17.onStart) || _v8.call(_v17, _v16));
            },
            destroy: () => {
              var _v0;
              _v16 && (null == (_v0 = null == _v17 ? void 0 : _v17.onExit) || _v0.call(_v17, _v16));
            }
          };
        },
        state: {
          init: () => ({
            active: !1,
            range: {
              from: 0,
              to: 0
            },
            query: null,
            text: null,
            composing: !1
          }),
          apply(_v0, _v1, _v2, _v3) {
            let {
                isEditable: _v4
              } = _v1,
              {
                composing: _v5
              } = _v1.view,
              {
                selection: _v6
              } = _v0,
              {
                empty: _v7,
                from: _v8
              } = _v6,
              _v9 = {
                ..._v1
              };
            if (_v9.composing = _v5, _v4 && (_v7 || _v1.view.composing)) {
              (_v8 < _v1.range.from || _v8 > _v1.range.to) && !_v5 && !_v1.composing && (_v9.active = !1);
              let _v0 = _v15({
                  char: _v2,
                  allowSpaces: _v3,
                  allowToIncludeChar: _v4,
                  allowedPrefixes: _v5,
                  startOfLine: _v6,
                  $position: _v6.$from
                }),
                _v1 = `id_${Math.floor(0 * Math.random())}`;
              _v0 && _v14({
                editor: _v1,
                state: _v3,
                range: _v0.range,
                isActive: _v1.active
              }) ? (_v9.active = !0, _v9.decorationId = _v1.decorationId ? _v1.decorationId : _v1, _v9.range = _v0.range, _v9.query = _v0.query, _v9.text = _v0.text) : _v9.active = !1;
            } else _v9.active = !1;
            return _v9.active || (_v9.decorationId = null, _v9.range = {
              from: 0,
              to: 0
            }, _v9.query = null, _v9.text = null), _v9;
          }
        },
        props: {
          handleKeyDown(_v0, _v1) {
            var _v2;
            let {
              active: _v3,
              range: _v4
            } = _v18.getState(_v0.state);
            return !!_v3 && ((null == (_v2 = null == _v17 ? void 0 : _v17.onKeyDown) ? void 0 : _v2.call(_v17, {
              view: _v0,
              event: _v1,
              range: _v4
            })) || !1);
          },
          decorations(_v0) {
            let {
              active: _v1,
              range: _v2,
              decorationId: _v3,
              query: _v4
            } = _v18.getState(_v0);
            if (!_v1) return null;
            let _v5 = !(null == _v4 ? void 0 : _v4.length),
              _v6 = [_v8];
            return _v5 && _v6.push(_v10), _v4.DecorationSet.create(_v0.doc, [_v4.Decoration.inline(_v2.from, _v2.to, {
              nodeName: _v7,
              class: _v6.join(" "),
              "data-decoration-id": _v3,
              "data-decoration-content": _v9
            })]);
          }
        }
      });
    return _v18;
  }
  function _v8(_v0) {
    return (_v0.options.suggestions.length ? _v0.options.suggestions : [_v0.options.suggestion]).map(_v0 => function ({
      editor: _v0,
      overrideSuggestionOptions: _v1,
      extensionName: _v2,
      char: _v3 = "@"
    }) {
      return {
        editor: _v0,
        char: _v3,
        pluginKey: new _v3.PluginKey(),
        command: ({
          editor: _v0,
          range: _v1,
          props: _v2
        }) => {
          var _v3, _v4, _v5;
          let _v6 = _v0.view.state.selection.$to.nodeAfter;
          (null == (_v3 = null == _v6 ? void 0 : _v6.text) ? void 0 : _v3.startsWith(" ")) && (_v1.to += 1), _v0.chain().focus().insertContentAt(_v1, [{
            type: _v2,
            attrs: {
              ..._v2,
              mentionSuggestionChar: _v3
            }
          }, {
            type: "text",
            text: " "
          }]).run(), null == (_v5 = null == (_v4 = _v0.view.dom.ownerDocument.defaultView) ? void 0 : _v4.getSelection()) || _v5.collapseToEnd();
        },
        allow: ({
          state: _v0,
          range: _v1
        }) => {
          let _v2 = _v0.doc.resolve(_v1.from),
            _v3 = _v0.schema.nodes[_v2];
          return !!_v2.parent.type.contentMatch.matchType(_v3);
        },
        ..._v1
      };
    }({
      editor: _v0.editor,
      overrideSuggestionOptions: _v0,
      extensionName: _v0.name,
      char: _v0.char
    }));
  }
  function _v9(_v0, _v1) {
    let _v2 = _v8(_v0),
      _v3 = _v2.find(_v0 => _v0.char === _v1);
    return _v3 || (_v2.length ? _v2[0] : null);
  }
  let _v10 = _v1.Node.create({
    name: "mention",
    priority: 101,
    addOptions: () => ({
      HTMLAttributes: {},
      renderText({
        node: _v0,
        suggestion: _v1
      }) {
        var _v2, _v3;
        return `${null != (_v2 = null == _v1 ? void 0 : _v1.char) ? _v2 : "@"}${null != (_v3 = _v0.attrs.label) ? _v3 : _v0.attrs.id}`;
      },
      deleteTriggerWithBackspace: !1,
      renderHTML({
        options: _v0,
        node: _v1,
        suggestion: _v2
      }) {
        var _v3, _v4;
        return ["span", (0, _v1.mergeAttributes)(this.HTMLAttributes, _v0.HTMLAttributes), `${null != (_v3 = null == _v2 ? void 0 : _v2.char) ? _v3 : "@"}${null != (_v4 = _v1.attrs.label) ? _v4 : _v1.attrs.id}`];
      },
      suggestions: [],
      suggestion: {}
    }),
    group: "inline",
    inline: !0,
    selectable: !1,
    atom: !0,
    addAttributes: () => ({
      id: {
        default: null,
        parseHTML: _v0 => _v0.getAttribute("data-id"),
        renderHTML: _v0 => _v0.id ? {
          "data-id": _v0.id
        } : {}
      },
      label: {
        default: null,
        parseHTML: _v0 => _v0.getAttribute("data-label"),
        renderHTML: _v0 => _v0.label ? {
          "data-label": _v0.label
        } : {}
      },
      mentionSuggestionChar: {
        default: "@",
        parseHTML: _v0 => _v0.getAttribute("data-mention-suggestion-char"),
        renderHTML: _v0 => ({
          "data-mention-suggestion-char": _v0.mentionSuggestionChar
        })
      }
    }),
    parseHTML() {
      return [{
        tag: `span[data-type="${this.name}"]`
      }];
    },
    renderHTML({
      node: _v0,
      HTMLAttributes: _v1
    }) {
      let _v2 = _v9(this, _v0.attrs.mentionSuggestionChar);
      if (void 0 !== this.options.renderLabel) return console.warn("renderLabel is deprecated use renderText and renderHTML instead"), ["span", (0, _v1.mergeAttributes)({
        "data-type": this.name
      }, this.options.HTMLAttributes, _v1), this.options.renderLabel({
        options: this.options,
        node: _v0,
        suggestion: _v2
      })];
      let _v3 = {
        ...this.options
      };
      _v3.HTMLAttributes = (0, _v1.mergeAttributes)({
        "data-type": this.name
      }, this.options.HTMLAttributes, _v1);
      let _v4 = this.options.renderHTML({
        options: _v3,
        node: _v0,
        suggestion: _v2
      });
      return "string" == typeof _v4 ? ["span", (0, _v1.mergeAttributes)({
        "data-type": this.name
      }, this.options.HTMLAttributes, _v1), _v4] : _v4;
    },
    renderText({
      node: _v0
    }) {
      let _v1 = {
        options: this.options,
        node: _v0,
        suggestion: _v9(this, _v0.attrs.mentionSuggestionChar)
      };
      return void 0 !== this.options.renderLabel ? (console.warn("renderLabel is deprecated use renderText and renderHTML instead"), this.options.renderLabel(_v1)) : this.options.renderText(_v1);
    },
    addKeyboardShortcuts() {
      return {
        Backspace: () => this.editor.commands.command(({
          tr: _v0,
          state: _v1
        }) => {
          let _v2 = !1,
            {
              selection: _v3
            } = _v1,
            {
              empty: _v4,
              anchor: _v5
            } = _v3;
          if (!_v4) return !1;
          _v1.doc.nodesBetween(_v5 - 1, _v5, (_v0, _v1) => {
            if (_v0.type.name === this.name) return _v2 = !0, _v0.insertText(this.options.deleteTriggerWithBackspace ? "" : this.options.suggestion.char || "", _v1, _v1 + _v0.nodeSize), !1;
          });
          let _v6 = new _v2.Node(),
            _v7 = 0;
          return _v1.doc.nodesBetween(_v5 - 1, _v5, (_v0, _v1) => {
            if (_v0.type.name === this.name) return _v2 = !0, _v6 = _v0, _v7 = _v1, !1;
          }), _v2 && _v0.insertText(this.options.deleteTriggerWithBackspace ? "" : _v6.attrs.mentionSuggestionChar, _v7, _v7 + _v6.nodeSize), _v2;
        })
      };
    },
    addProseMirrorPlugins() {
      return _v8(this).map(_v7);
    }
  });
  _v0.s(["default", 0, _v10], 0);
}