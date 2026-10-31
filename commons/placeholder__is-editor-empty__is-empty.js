{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = _v1.Extension.create({
    name: "placeholder",
    addOptions: () => ({
      emptyEditorClass: "is-editor-empty",
      emptyNodeClass: "is-empty",
      placeholder: "Write something …",
      showOnlyWhenEditable: !0,
      showOnlyCurrent: !0,
      includeChildren: !1
    }),
    addProseMirrorPlugins() {
      return [new _v2.Plugin({
        key: new _v2.PluginKey("placeholder"),
        props: {
          decorations: ({
            doc: _v0,
            selection: _v1
          }) => {
            let _v2 = this.editor.isEditable || !this.options.showOnlyWhenEditable,
              {
                anchor: _v3
              } = _v1,
              _v4 = [];
            if (!_v2) return null;
            let _v5 = this.editor.isEmpty;
            return _v0.descendants((_v0, _v1) => {
              let _v2 = _v3 >= _v1 && _v3 <= _v1 + _v0.nodeSize,
                _v3 = !_v0.isLeaf && (0, _v1.isNodeEmpty)(_v0);
              if ((_v2 || !this.options.showOnlyCurrent) && _v3) {
                let _v0 = [this.options.emptyNodeClass];
                _v5 && _v0.push(this.options.emptyEditorClass);
                let _v1 = _v3.Decoration.node(_v1, _v1 + _v0.nodeSize, {
                  class: _v0.join(" "),
                  "data-placeholder": "function" == typeof this.options.placeholder ? this.options.placeholder({
                    editor: this.editor,
                    node: _v0,
                    pos: _v1,
                    hasAnchor: _v2
                  }) : this.options.placeholder
                });
                _v4.push(_v1);
              }
              return this.options.includeChildren;
            }), _v3.DecorationSet.create(_v0, _v4);
          }
        }
      })];
    }
  });
  _v0.s(["default", 0, _v4]);
}