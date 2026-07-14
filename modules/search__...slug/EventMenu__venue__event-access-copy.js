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
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0);
  let _v20 = ({
    privacy: _v0
  }) => (0, _v1.jsx)(_v19.AccessCopy, {
    title: (0, _v18.getEventShowcaseCopy)(_v17.DEFAULT_PRIVACY_OPTIONS).find(({
      privacy: _v0
    }) => _v0 === _v0)?.title ?? _v0,
    description: (0, _v18.getEventShowcaseCopy)(_v17.DEFAULT_PRIVACY_OPTIONS).find(({
      privacy: _v0
    }) => _v0 === _v0)?.description ?? ""
  });
  _v0.s(["EventMenu", 0, ({
    type: _v0,
    disabled: _v1,
    onClick: _v2,
    canDelete: _v3,
    onDelete: _v4,
    canEdit: _v5,
    onMove: _v6,
    onRename: _v7,
    onCopyLink: _v8,
    onCopyEmbedLink: _v9,
    onClickViewEventLink: _v10,
    eventLink: _v11,
    embedCode: _v12,
    placement: _v13,
    usePortal: _v14,
    zIndex: _v15,
    viewPrivacy: _v16,
    title: _v17,
    size: _v18
  }) => {
    let _v19 = (0, _v9.useIsMobile)(),
      _v20 = (0, _v14.useIsV2)(),
      _v21 = "venue" === _v0,
      _v22 = (0, _v2.rem)(_v13.ACTION_ICON_BOX_SIZE),
      _v23 = {
        copyEmbedCode: {
          icon: (0, _v1.jsx)(_v13.COPY_EMBED_CODE_ICON, {
            boxSize: _v22
          }),
          label: _v13.COPY_EMBED_CODE_COPY,
          content: _v12,
          onClick: _v9,
          shouldRender: _v5 && _v12 && !_v19
        },
        copyLink: {
          icon: (0, _v1.jsx)(_v13.COPY_LINK_ICON, {
            boxSize: _v22
          }),
          label: _v13.COPY_LINK_COPY,
          content: _v11,
          onClick: _v8,
          shouldRender: !!_v11
        },
        delete: {
          icon: (0, _v1.jsx)(_v13.DELETE_ICON, {
            boxSize: _v22
          }),
          label: _v13.DELETE_COPY,
          onClick: _v4,
          shouldRender: _v3
        },
        move: {
          icon: (0, _v1.jsx)(_v13.MOVE_ICON, {
            boxSize: _v22
          }),
          label: _v13.MOVE_COPY,
          onClick: _v6,
          shouldRender: _v5
        },
        rename: {
          icon: (0, _v1.jsx)(_v13.RENAME_ICON, {
            boxSize: _v22
          }),
          label: _v13.RENAME_COPY,
          onClick: _v7,
          shouldRender: _v5 && !!_v7 && !_v19
        },
        viewEventPage: {
          icon: (0, _v1.jsx)(_v13.VIEW_EVENT_PAGE_ICON, {
            boxSize: _v22
          }),
          label: _v13.VIEW_EVENT_PAGE_COPY,
          href: _v11,
          onClick: _v10,
          shouldRender: _v5 && _v11
        }
      },
      _v24 = (0, _v12.createSection)([_v16 && (0, _v1.jsx)(_v20, {
        privacy: _v16
      }, "event-access-copy")]),
      _v25 = (0, _v12.createSection)([_v23.copyLink.shouldRender && (0, _v1.jsx)(_v16.CopyAction, {
        ..._v23.copyLink
      }), _v23.copyEmbedCode.shouldRender && (0, _v1.jsx)(_v16.CopyAction, {
        ..._v23.copyEmbedCode
      })]),
      _v26 = (0, _v12.createSection)([_v23.viewEventPage.shouldRender && (0, _v1.jsx)(_v15.Action, {
        ..._v23.viewEventPage
      }), _v23.move.shouldRender && (0, _v1.jsx)(_v15.Action, {
        ..._v23.move
      }), _v23.rename.shouldRender && (0, _v1.jsx)(_v15.Action, {
        ..._v23.rename
      })]),
      _v27 = (0, _v12.createSection)([_v23.delete.shouldRender && (0, _v1.jsx)(_v15.Action, {
        ..._v23.delete
      })]),
      _v28 = (0, _v12.createSection)([_v11 && (0, _v1.jsx)(_v16.CopyAction, {
        icon: (0, _v1.jsx)(_v6.Link, {
          boxSize: _v22
        }),
        label: _v21 ? (0, _v10.translate)({
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
        }) : (0, _v10.translate)({
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
        content: _v11,
        onClick: _v8
      }), _v12 && !_v19 && (0, _v1.jsx)(_v16.CopyAction, {
        icon: (0, _v1.jsx)(_v3.CodeSquare, {
          boxSize: _v22
        }),
        label: _v21 ? (0, _v10.translate)({
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
        }) : (0, _v10.translate)({
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
        content: _v12,
        onClick: _v9
      })]),
      _v29 = (0, _v12.createSection)([_v5 && _v11 && (0, _v1.jsx)(_v15.Action, {
        icon: (0, _v1.jsx)(_v4.Eye, {
          boxSize: _v22
        }),
        label: _v21 ? (0, _v10.translate)({
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
        }) : (0, _v10.translate)({
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
        href: _v11,
        onClick: _v10
      }), _v5 && (0, _v1.jsx)(_v15.Action, {
        icon: (0, _v1.jsx)(_v5.FolderOpen, {
          boxSize: _v22
        }),
        label: _v21 ? (0, _v10.translate)({
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
        }) : (0, _v10.translate)({
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
      }), _v5 && !!_v7 && (0, _v1.jsx)(_v15.Action, {
        icon: (0, _v1.jsx)(_v8.RenamePencil, {
          boxSize: _v22
        }),
        label: (0, _v10.translate)({
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
      })]),
      _v30 = (0, _v12.createSection)([_v3 && (0, _v1.jsx)(_v15.Action, {
        icon: (0, _v1.jsx)(_v7.TrashBin, {
          boxSize: _v22
        }),
        label: _v21 ? (0, _v10.translate)({
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
        }) : (0, _v10.translate)({
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
      })]),
      _v31 = _v20 ? [_v24, _v25, _v26, _v27].filter(_v0 => !!_v0.length) : [_v28, _v29, _v30].filter(_v0 => !!_v0.length);
    return (0, _v1.jsx)(_v11.ActionsMenu, {
      placement: _v13,
      zIndex: _v15,
      usePortal: _v14,
      onClick: _v2,
      disabled: _v1,
      title: _v17,
      isV2: _v20,
      size: _v18,
      children: _v31.map((_v0, _v1) => (0, _v1.jsx)(_v12.SectionRenderer, {
        section: _v0,
        index: _v1
      }, _v1))
    });
  }], 0);
}