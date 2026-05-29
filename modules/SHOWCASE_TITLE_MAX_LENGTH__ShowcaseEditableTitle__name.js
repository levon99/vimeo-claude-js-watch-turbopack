{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  _v0.s(["SHOWCASE_TITLE_MAX_LENGTH", 0, 128, "ShowcaseEditableTitle", 0, function ({
    albumId: _v0,
    setCurrentTitle: _v1,
    setIsEditingContentTitle: _v2,
    ..._v3
  }) {
    let [_v4] = (0, _v3.usePatchAlbum)(),
      _v5 = (0, _v5.useNotification)(),
      _v6 = (0, _v6.useUpdateContentTitleCache)();
    return (0, _v1.jsx)(_v2.EditableTitle, {
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
            content: (0, _v4.translate)({
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
      maxLength: 128,
      ..._v3
    });
  }]);
}