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
  function _v12({
    albumId: _v0,
    setCurrentTitle: _v1,
    setIsEditingContentTitle: _v2,
    ..._v3
  }) {
    let [_v4] = (0, _v7.usePatchAlbum)(),
      _v5 = (0, _v9.useNotification)(),
      _v6 = (0, _v10.useUpdateContentTitleCache)();
    return (0, _v1.jsx)(_v6.EditableTitle, {
      onChange: _v0 => {
        _v1(_v0);
      },
      onCancel: () => {
        _v2(!1);
      },
      onSubmit: _v0 => {
        _v0 !== _v3.value && _v4({
          where: {
            albumId: _v0
          },
          select: ["name"],
          variables: {
            name: _v0
          }
        }).then(() => {
          _v6({
            entity: "showcase",
            uri: `/albums/${_v0}`,
            title: _v0
          }), _v5({
            content: (0, _v8.translate)({
              singular: "Showcase title updated",
              dictionary: {
                es: {
                  singular: "Título del Showcase actualizado"
                },
                "de-DE": {
                  singular: "Showcase-Titel aktualisiert"
                },
                "fr-FR": {
                  singular: "Titre du Showcase mis à jour"
                },
                "ja-JP": {
                  singular: "ショーケースのタイトルが更新されました"
                },
                "ko-KR": {
                  singular: "쇼케이스 제목이 업데이트되었습니다"
                },
                "pt-BR": {
                  singular: "Título do Showcase atualizado"
                },
                "zh-CN": {
                  singular: "Showcase 标题已更新"
                }
              }
            })
          });
        }), _v2(!1);
      },
      fontSize: "header-xs",
      fontWeight: "normal",
      maxLength: _v11.SHOWCASE_TITLE_MAX_LENGTH,
      ..._v3
    });
  }
  _v0.s(["ShowcaseEditableTitle", 0, _v12], 0), _v0.s(["ShowcaseCard", 0, ({
    actionsMenu: _v0,
    title: _v1,
    uri: _v2,
    ..._v3
  }) => {
    let [_v4, _v5] = (0, _v2.useState)(!1),
      [_v6, _v7] = (0, _v2.useState)(_v1),
      {
        settings: _v8
      } = (0, _v4.useOrionSettings)(),
      _v9 = _v0 && _v8.enable_rename_showcase_and_events ? _v2.default.cloneElement(_v0, {
        onRename: () => {
          _v5(!0);
        }
      }) : _v0,
      _v10 = _v2 ? (0, _v5.getResourceIdFromUri)(_v2) : 0,
      _v11 = _v8.enable_rename_showcase_and_events && _v4 ? (0, _v1.jsx)(_v12, {
        albumId: _v10,
        isEditing: _v4,
        setCurrentTitle: _v7,
        setIsEditingContentTitle: _v5,
        value: _v6
      }) : void 0;
    return (0, _v1.jsx)(_v3.ShowcaseCard, {
      ..._v3,
      title: _v6,
      actionsMenu: _v9,
      editableTitle: _v11,
      isEditingContentTitle: _v4
    });
  }], 0);
}