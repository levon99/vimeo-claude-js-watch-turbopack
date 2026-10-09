{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  async function _v5({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      userId: _v3,
      fileId: _v4
    },
    ..._v5
  }) {
    return (0, _v3.measureLatency)("postUserFileCopy", "POST", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v3}/files/${_v4}/copy?fields=${_v1.map(_v4.intoSnakeCase).join(",")}`, {
        ..._v5,
        method: "POST",
        body: JSON.stringify((0, _v4.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v4.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v4.deepCamelCase)(_v1);
    });
  }
  var _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0);
  _v0.s(["useCopyFileFlow", 0, ({
    onAfterCopySuccess: _v0
  } = {}) => {
    let {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v6.useGctlConfig)(),
      _v5 = (0, _v8.useNotification)(),
      {
        revalidateItemLists: _v6
      } = (0, _v9.useRevalidate)(),
      [_v7, _v8] = (0, _v2.useState)(null),
      [_v9, _v10] = (0, _v2.useState)(""),
      [_v11, _v12] = (0, _v2.useState)(void 0),
      [_v13, _v14] = (0, _v2.useState)(!1),
      _v15 = (0, _v2.useCallback)(() => {
        _v8(null), _v10(""), _v12(void 0);
      }, []),
      _v16 = (0, _v2.useCallback)(_v0 => {
        _v8(_v0), _v10((0, _v12.buildCopyPrefilledTitle)(_v0.name, 255)), _v12(void 0);
      }, []),
      _v17 = (0, _v2.useCallback)(_v0 => {
        _v10(_v0), _v12(void 0);
      }, []),
      _v18 = (0, _v2.useCallback)(async _v0 => {
        if (_v7) {
          _v14(!0);
          try {
            let _v0 = await _v5({
                baseUrl: _v1,
                select: ["publicId", "name"],
                where: {
                  userId: (0, _v14.idFromUri)(_v7.uri),
                  fileId: _v7.publicId
                },
                variables: {
                  name: _v0
                },
                headers: {
                  "Content-Type": "application/json",
                  Authorization: _v2 ? `jwt ${_v2}` : "",
                  "Vimeo-Page": `${_v3}`,
                  "Accept-Language": _v4 ?? "en"
                }
              }),
              _v1 = _v7.uri;
            _v15(), _v6(), _v0?.({
              publicId: _v0.publicId,
              name: _v0.name
            }, {
              uri: _v1
            }), _v5({
              content: (0, _v7.translate)({
                singular: 'Created "{NAME}". {LINK}Open page{/LINK}',
                replacements: {
                  NAME: _v0.name,
                  LINK: _v0 => (0, _v1.jsx)(_v10.LinkComponent, {
                    href: (0, _v13.getFileManageLink)(_v0.publicId),
                    children: _v0
                  })
                },
                dictionary: {
                  es: {
                    singular: 'Se creó "{NAME}". {LINK}Abrir página{/LINK}'
                  },
                  "de-DE": {
                    singular: 'Erstellt "{NAME}". {LINK}Seite öffnen{/LINK}'
                  },
                  "fr-FR": {
                    singular: 'Créé "{NAME}". {LINK}Ouvrir la page{/LINK}'
                  },
                  "ja-JP": {
                    singular: "「{NAME}」を作成しました。{LINK}ページを開く{/LINK}"
                  },
                  "ko-KR": {
                    singular: '"{NAME}"이(가) 생성되었습니다. {LINK}페이지 열기{/LINK}'
                  },
                  "pt-BR": {
                    singular: 'Criado "{NAME}". {LINK}Abrir página{/LINK}'
                  },
                  "zh-CN": {
                    singular: '已创建 "{NAME}"。 {LINK}打开页面{/LINK}'
                  }
                }
              }),
              status: "success"
            });
          } catch {
            _v12((0, _v7.translate)({
              singular: "Could not copy file. Please try again.",
              dictionary: {
                es: {
                  singular: "No se pudo copiar el archivo. Por favor, inténtelo de nuevo."
                },
                "de-DE": {
                  singular: "Datei konnte nicht kopiert werden. Bitte versuchen Sie es erneut."
                },
                "fr-FR": {
                  singular: "Impossible de copier le fichier. Veuillez réessayer."
                },
                "ja-JP": {
                  singular: "ファイルをコピーできませんでした。もう一度お試しください。"
                },
                "ko-KR": {
                  singular: "파일을 복사할 수 없습니다. 다시 시도해 주세요."
                },
                "pt-BR": {
                  singular: "Não foi possível copiar o arquivo. Por favor, tente novamente."
                },
                "zh-CN": {
                  singular: "无法复制文件。 请再试一次。"
                }
              }
            }));
          } finally {
            _v14(!1);
          }
        }
      }, [_v1, _v15, _v7, _v2, _v4, _v5, _v0, _v6, _v3]);
    return {
      openCopyFileModal: _v16,
      copyModal: (0, _v1.jsx)(_v11.NameInputModal, {
        maxLength: 255,
        isOpen: !!_v7,
        isLoading: _v13,
        title: (0, _v7.translate)({
          singular: "Make a copy",
          dictionary: {
            es: {
              singular: "Hacer una copia"
            },
            "de-DE": {
              singular: "Kopie erstellen"
            },
            "fr-FR": {
              singular: "Faire une copie"
            },
            "ja-JP": {
              singular: "コピーを作る"
            },
            "ko-KR": {
              singular: "사본 만들기"
            },
            "pt-BR": {
              singular: "Fazer uma cópia"
            },
            "zh-CN": {
              singular: "复制"
            }
          }
        }),
        name: _v9,
        error: _v11,
        onClose: _v15,
        onNameChange: _v17,
        onSubmit: _v0 => void _v18(_v0)
      }),
      isCopying: _v13
    };
  }], 0);
}