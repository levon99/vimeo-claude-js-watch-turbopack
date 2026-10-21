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
    _v16 = _v0.i(0);
  _v0.s(["EventMenu", 0, ({
    type: _v0,
    disabled: _v1,
    onClick: _v2,
    canDelete: _v3,
    onDelete: _v4,
    canEdit: _v5,
    onMove: _v6,
    onRename: _v7,
    onAddToEventSeries: _v8,
    onCopyLink: _v9,
    onCopyEmbedLink: _v10,
    onClickViewEventLink: _v11,
    eventLink: _v12,
    embedCode: _v13,
    placement: _v14,
    usePortal: _v15,
    zIndex: _v16,
    title: _v17,
    size: _v18
  }) => {
    let _v19 = (0, _v10.useIsMobile)(),
      _v20 = "venue" === _v0,
      _v21 = (0, _v2.rem)(_v14.ACTION_ICON_BOX_SIZE),
      _v22 = [(0, _v13.createSection)([_v12 && void 0 !== _v9 && (0, _v1.jsx)(_v16.CopyAction, {
        icon: (0, _v1.jsx)(_v7.Link, {
          boxSize: _v21
        }),
        label: _v20 ? (0, _v11.translate)({
          singular: "Copy venue link",
          dictionary: {
            es: {
              singular: "Copiar el enlace de la sede"
            },
            "de-DE": {
              singular: "Link zur Veranstaltung kopieren"
            },
            "fr-FR": {
              singular: "Copier le lien du site"
            },
            "ja-JP": {
              singular: "ベニューのリンクをコピーする"
            },
            "ko-KR": {
              singular: "링크 복사"
            },
            "pt-BR": {
              singular: "Copiar link do venue"
            },
            "zh-CN": {
              singular: "复制会场链接"
            }
          }
        }) : (0, _v11.translate)({
          singular: "Copy event link",
          dictionary: {
            es: {
              singular: "Copiar el vínculo del evento"
            },
            "de-DE": {
              singular: "Event-Link kopieren"
            },
            "fr-FR": {
              singular: "Copier le lien de l'évènement"
            },
            "ja-JP": {
              singular: "イベントのリンクをコピー"
            },
            "ko-KR": {
              singular: "이벤트 링크 복사"
            },
            "pt-BR": {
              singular: "Copiar link do evento"
            },
            "zh-CN": {
              singular: "复制活动链接"
            }
          }
        }),
        content: _v12,
        onClick: _v9
      }), _v13 && !_v19 && void 0 !== _v10 && (0, _v1.jsx)(_v16.CopyAction, {
        icon: (0, _v1.jsx)(_v4.CodeSquare, {
          boxSize: _v21
        }),
        label: _v20 ? (0, _v11.translate)({
          singular: "Copy venue embed code",
          dictionary: {
            es: {
              singular: "Copiar el código de inserción de la sede"
            },
            "de-DE": {
              singular: "Veranstaltungsort-Einbettungscode kopieren"
            },
            "fr-FR": {
              singular: "Copier le code d'intégration du site"
            },
            "ja-JP": {
              singular: "ベニュー埋め込みコードをコピーする"
            },
            "ko-KR": {
              singular: "광장 임베드 코드 복사"
            },
            "pt-BR": {
              singular: "Copiar código de incorporação do venue"
            },
            "zh-CN": {
              singular: "复制会场嵌入代码"
            }
          }
        }) : (0, _v11.translate)({
          singular: "Copy event embed code",
          dictionary: {
            es: {
              singular: "Copiar el código de inserción del evento"
            },
            "de-DE": {
              singular: "Event-Einbettungscode kopieren"
            },
            "fr-FR": {
              singular: "Copier le code d’intégration de l'évènement"
            },
            "ja-JP": {
              singular: "イベントの埋め込みコードをコピー"
            },
            "ko-KR": {
              singular: "이벤트 임베드 코드 복사"
            },
            "pt-BR": {
              singular: "Copiar código de incorporação do evento"
            },
            "zh-CN": {
              singular: "复制活动嵌入代码"
            }
          }
        }),
        content: _v13,
        onClick: _v10
      })]), (0, _v13.createSection)([_v5 && _v12 && void 0 !== _v11 && (0, _v1.jsx)(_v15.Action, {
        icon: (0, _v1.jsx)(_v5.Eye, {
          boxSize: _v21
        }),
        label: _v20 ? (0, _v11.translate)({
          singular: "View venue page",
          dictionary: {
            es: {
              singular: "Ver la página de la sede"
            },
            "de-DE": {
              singular: "Seite mit Veranstaltungsort anzeigen"
            },
            "fr-FR": {
              singular: "Voir la page du site"
            },
            "ja-JP": {
              singular: "ベニューページを表示する"
            },
            "ko-KR": {
              singular: "광장 페이지 보기"
            },
            "pt-BR": {
              singular: "Ver página do venue"
            },
            "zh-CN": {
              singular: "查看会场页面"
            }
          }
        }) : (0, _v11.translate)({
          singular: "View event page",
          dictionary: {
            es: {
              singular: "Ver la página del evento"
            },
            "de-DE": {
              singular: "Eventseite ansehen"
            },
            "fr-FR": {
              singular: "Voir la page de l'événement"
            },
            "ja-JP": {
              singular: "イベントページを表示"
            },
            "ko-KR": {
              singular: "이벤트 페이지 보기"
            },
            "pt-BR": {
              singular: "Ver página do evento"
            },
            "zh-CN": {
              singular: "查看活动页面"
            }
          }
        }),
        href: _v12,
        onClick: _v11
      }), _v5 && void 0 !== _v6 && (0, _v1.jsx)(_v15.Action, {
        icon: (0, _v1.jsx)(_v6.FolderOpen, {
          boxSize: _v21
        }),
        label: _v20 ? (0, _v11.translate)({
          singular: "Move venue...",
          dictionary: {
            es: {
              singular: "Mover sede..."
            },
            "de-DE": {
              singular: "Veranstaltungsort verschieben ..."
            },
            "fr-FR": {
              singular: "Modifier le site..."
            },
            "ja-JP": {
              singular: "ベニューを移動..."
            },
            "ko-KR": {
              singular: "광장 이동..."
            },
            "pt-BR": {
              singular: "Mover venue..."
            },
            "zh-CN": {
              singular: "移动场地..."
            }
          }
        }) : (0, _v11.translate)({
          singular: "Move event...",
          dictionary: {
            es: {
              singular: "Mover evento..."
            },
            "de-DE": {
              singular: "Event verschieben ..."
            },
            "fr-FR": {
              singular: "Déplacer l'événement…"
            },
            "ja-JP": {
              singular: "イベントを移動..."
            },
            "ko-KR": {
              singular: "이벤트 이동..."
            },
            "pt-BR": {
              singular: "Mover evento..."
            },
            "zh-CN": {
              singular: "移动活动..."
            }
          }
        }),
        onClick: _v6
      }), _v5 && void 0 !== _v7 && (0, _v1.jsx)(_v15.Action, {
        icon: (0, _v1.jsx)(_v9.RenamePencil, {
          boxSize: _v21
        }),
        label: (0, _v11.translate)({
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
        onClick: _v7
      }), _v5 && !_v20 && void 0 !== _v8 && (0, _v1.jsx)(_v15.Action, {
        icon: (0, _v1.jsx)(_v3.BrowserWindow, {
          boxSize: _v21
        }),
        label: (0, _v11.translate)({
          singular: "Add to event series",
          dictionary: {
            es: {
              singular: "Agregar a la serie de eventos"
            },
            "de-DE": {
              singular: "Zur Veranstaltungsreihe hinzufügen"
            },
            "fr-FR": {
              singular: "Ajouter à une série d’événements"
            },
            "ja-JP": {
              singular: "イベントシリーズに追加"
            },
            "ko-KR": {
              singular: "이벤트 시리즈에 추가"
            },
            "pt-BR": {
              singular: "Adicionar à série de eventos"
            },
            "zh-CN": {
              singular: "添加到活动系列"
            }
          }
        }),
        onClick: _v8
      })]), (0, _v13.createSection)([_v3 && void 0 !== _v4 && (0, _v1.jsx)(_v15.Action, {
        icon: (0, _v1.jsx)(_v8.TrashBin, {
          boxSize: _v21
        }),
        label: _v20 ? (0, _v11.translate)({
          singular: "Delete venue",
          dictionary: {
            es: {
              singular: "Eliminar sede"
            },
            "de-DE": {
              singular: "Veranstaltungsort löschen"
            },
            "fr-FR": {
              singular: "Supprimer le site"
            },
            "ja-JP": {
              singular: "ベニューを削除する"
            },
            "ko-KR": {
              singular: "광장 삭제"
            },
            "pt-BR": {
              singular: "Excluir venue"
            },
            "zh-CN": {
              singular: "删除会场"
            }
          }
        }) : (0, _v11.translate)({
          singular: "Delete event",
          dictionary: {
            es: {
              singular: "Eliminar evento"
            },
            "de-DE": {
              singular: "Event löschen"
            },
            "fr-FR": {
              singular: "Supprimer l'événement"
            },
            "ja-JP": {
              singular: "イベントを削除"
            },
            "ko-KR": {
              singular: "이벤트 삭제"
            },
            "pt-BR": {
              singular: "Excluir evento"
            },
            "zh-CN": {
              singular: "删除活动"
            }
          }
        }),
        onClick: _v4
      })])].filter(_v0 => !!_v0.length);
    return (0, _v1.jsx)(_v12.ActionsMenu, {
      placement: _v14,
      zIndex: _v16,
      usePortal: _v15,
      onClick: _v2,
      disabled: _v1,
      title: _v17,
      isV2: !1,
      size: _v18,
      children: _v22.map((_v0, _v1) => (0, _v1.jsx)(_v13.SectionRenderer, {
        section: _v0,
        index: _v1
      }, _v1))
    });
  }]);
}