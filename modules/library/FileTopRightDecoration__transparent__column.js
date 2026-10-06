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
    _v9 = _v0.i(0);
  _v0.s(["FileTopRightDecoration", 0, ({
    onCopyLink: _v0,
    onRename: _v1,
    downloadHref: _v2,
    onDelete: _v3,
    buttonVariant: _v4 = "transparent",
    flexDirection: _v5 = "column"
  }) => {
    let _v6 = {
      size: "sm",
      variant: _v4,
      zIndex: 1,
      opacity: 0,
      transition: "opacity 200ms ease-in-out",
      _groupHover: {
        opacity: 1
      }
    };
    return (0, _v1.jsxs)(_v2.Flex, {
      position: "absolute",
      top: "0",
      right: "0",
      gap: "50",
      direction: _v5,
      children: [(0, _v1.jsx)(_v4.Tooltip, {
        label: (0, _v9.translate)({
          singular: "Copy link",
          dictionary: {
            es: {
              singular: "Copiar vínculo"
            },
            "de-DE": {
              singular: "Link kopieren"
            },
            "fr-FR": {
              singular: "Copier le lien"
            },
            "ja-JP": {
              singular: "リンクをコピー"
            },
            "ko-KR": {
              singular: "링크 복사"
            },
            "pt-BR": {
              singular: "Copiar link"
            },
            "zh-CN": {
              singular: "复制链接"
            }
          }
        }),
        placement: "top",
        children: (0, _v1.jsx)(_v3.IconButton, {
          "aria-label": (0, _v9.translate)({
            singular: "Copy link",
            dictionary: {
              es: {
                singular: "Copiar vínculo"
              },
              "de-DE": {
                singular: "Link kopieren"
              },
              "fr-FR": {
                singular: "Copier le lien"
              },
              "ja-JP": {
                singular: "リンクをコピー"
              },
              "ko-KR": {
                singular: "링크 복사"
              },
              "pt-BR": {
                singular: "Copiar link"
              },
              "zh-CN": {
                singular: "复制链接"
              }
            }
          }),
          icon: (0, _v1.jsx)(_v6.Link, {
            height: "400",
            width: "400",
            boxSize: "sm"
          }),
          ..._v6,
          onClick: _v0 => {
            _v0.currentTarget.blur(), _v0(), _v0.preventDefault(), _v0.stopPropagation();
          }
        })
      }), _v1 && (0, _v1.jsx)(_v4.Tooltip, {
        label: (0, _v9.translate)({
          singular: "Rename",
          dictionary: {
            es: {
              singular: "Cambiar de nombre"
            },
            "de-DE": {
              singular: "Neu benennen"
            },
            "fr-FR": {
              singular: "Renommer"
            },
            "ja-JP": {
              singular: "名前を変更"
            },
            "ko-KR": {
              singular: "이름 변경"
            },
            "pt-BR": {
              singular: "Renomear"
            },
            "zh-CN": {
              singular: "重新命名"
            }
          }
        }),
        placement: "top",
        children: (0, _v1.jsx)(_v3.IconButton, {
          "aria-label": (0, _v9.translate)({
            singular: "Rename",
            dictionary: {
              es: {
                singular: "Cambiar de nombre"
              },
              "de-DE": {
                singular: "Neu benennen"
              },
              "fr-FR": {
                singular: "Renommer"
              },
              "ja-JP": {
                singular: "名前を変更"
              },
              "ko-KR": {
                singular: "이름 변경"
              },
              "pt-BR": {
                singular: "Renomear"
              },
              "zh-CN": {
                singular: "重新命名"
              }
            }
          }),
          icon: (0, _v1.jsx)(_v7.RenamePencil, {
            height: "400",
            width: "400",
            boxSize: "sm"
          }),
          ..._v6,
          onClick: _v0 => {
            _v0.currentTarget.blur(), _v1(), _v0.preventDefault(), _v0.stopPropagation();
          }
        })
      }), _v2 && (0, _v1.jsx)(_v4.Tooltip, {
        label: (0, _v9.translate)({
          singular: "Download",
          dictionary: {
            es: {
              singular: "Descargar"
            },
            "de-DE": {
              singular: "Herunterladen"
            },
            "fr-FR": {
              singular: "Télécharger "
            },
            "ja-JP": {
              singular: "ダウンロード"
            },
            "ko-KR": {
              singular: "다운로드"
            },
            "pt-BR": {
              singular: "Baixar"
            },
            "zh-CN": {
              singular: "下载"
            }
          }
        }),
        placement: "top",
        children: (0, _v1.jsx)(_v3.IconButton, {
          "aria-label": (0, _v9.translate)({
            singular: "Download",
            dictionary: {
              es: {
                singular: "Descargar"
              },
              "de-DE": {
                singular: "Herunterladen"
              },
              "fr-FR": {
                singular: "Télécharger "
              },
              "ja-JP": {
                singular: "ダウンロード"
              },
              "ko-KR": {
                singular: "다운로드"
              },
              "pt-BR": {
                singular: "Baixar"
              },
              "zh-CN": {
                singular: "下载"
              }
            }
          }),
          as: "a",
          href: _v2,
          target: "_blank",
          rel: "noopener noreferrer",
          icon: (0, _v1.jsx)(_v5.DownloadImport, {
            height: "400",
            width: "400",
            boxSize: "sm"
          }),
          ..._v6,
          onClick: _v0 => {
            _v0.currentTarget.blur(), _v0.stopPropagation();
          }
        })
      }), _v3 && (0, _v1.jsx)(_v4.Tooltip, {
        label: (0, _v9.translate)({
          singular: "Delete",
          dictionary: {
            es: {
              singular: "Eliminar"
            },
            "de-DE": {
              singular: "Löschen"
            },
            "fr-FR": {
              singular: "Supprimer"
            },
            "ja-JP": {
              singular: "削除"
            },
            "ko-KR": {
              singular: "삭제"
            },
            "pt-BR": {
              singular: "Excluir"
            },
            "zh-CN": {
              singular: "删除"
            }
          }
        }),
        placement: "top",
        children: (0, _v1.jsx)(_v3.IconButton, {
          "aria-label": (0, _v9.translate)({
            singular: "Delete",
            dictionary: {
              es: {
                singular: "Eliminar"
              },
              "de-DE": {
                singular: "Löschen"
              },
              "fr-FR": {
                singular: "Supprimer"
              },
              "ja-JP": {
                singular: "削除"
              },
              "ko-KR": {
                singular: "삭제"
              },
              "pt-BR": {
                singular: "Excluir"
              },
              "zh-CN": {
                singular: "删除"
              }
            }
          }),
          icon: (0, _v1.jsx)(_v8.TrashBin, {
            height: "400",
            width: "400",
            boxSize: "sm"
          }),
          ..._v6,
          onClick: _v0 => {
            _v0.currentTarget.blur(), _v3(), _v0.preventDefault(), _v0.stopPropagation();
          }
        })
      })]
    });
  }]);
}