{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  _v0.s(["FileEditableTitle", 0, function ({
    ownerId: _v0,
    publicId: _v1,
    fileUri: _v2,
    setCurrentTitle: _v3,
    setIsEditingContentTitle: _v4,
    ..._v5
  }) {
    let _v6 = (0, _v6.useNotification)(),
      _v7 = (0, _v7.useUpdateContentTitleCache)(),
      {
        baseUrl: _v8,
        jwt: _v9,
        xVimeoPage: _v10,
        locale: _v11
      } = (0, _v4.useGctlConfig)(),
      _v12 = async _v0 => {
        if (_v4(!1), _v0 !== _v5.value) try {
          await (0, _v3.patchUserFile)({
            where: {
              userId: _v0,
              fileId: _v1
            },
            select: ["name"],
            variables: {
              name: _v0
            },
            baseUrl: _v8,
            headers: {
              "Content-Type": "application/json",
              Authorization: _v9 ? `jwt ${_v9}` : "",
              "Vimeo-Page": `${_v10}`,
              "Accept-Language": _v11 ?? "en"
            }
          }), _v7({
            entity: "file",
            uri: _v2,
            title: _v0
          }), _v6({
            content: (0, _v5.translate)({
              singular: "File name updated",
              dictionary: {
                es: {
                  singular: "Nombre del archivo actualizado"
                },
                "de-DE": {
                  singular: "Dateiname aktualisiert"
                },
                "fr-FR": {
                  singular: "Nom du fichier mis à jour"
                },
                "ja-JP": {
                  singular: "ファイル名が更新されました"
                },
                "ko-KR": {
                  singular: "파일 이름이 업데이트되었습니다"
                },
                "pt-BR": {
                  singular: "Nome do arquivo atualizado"
                },
                "zh-CN": {
                  singular: "文件名已更新"
                }
              }
            })
          });
        } catch {
          _v3(_v5.value), _v6({
            content: (0, _v5.translate)({
              singular: "Something went wrong",
              dictionary: {
                es: {
                  singular: "Se ha producido un error"
                },
                "de-DE": {
                  singular: "Hier ist etwas schief gelaufen"
                },
                "fr-FR": {
                  singular: "Quelque chose a planté"
                },
                "ja-JP": {
                  singular: "エラーが発生しました"
                },
                "ko-KR": {
                  singular: "문제가 발생했습니다"
                },
                "pt-BR": {
                  singular: "Alguma coisa deu errado"
                },
                "zh-CN": {
                  singular: "出错了"
                }
              }
            }),
            status: "error"
          });
        }
      };
    return (0, _v1.jsx)(_v2.EditableTitle, {
      onChange: _v0 => {
        _v3(_v0);
      },
      onCancel: () => {
        _v4(!1);
      },
      onSubmit: _v0 => void _v12(_v0),
      fontSize: "header-xs",
      fontWeight: "normal",
      maxLength: 255,
      ..._v5
    });
  }]);
}