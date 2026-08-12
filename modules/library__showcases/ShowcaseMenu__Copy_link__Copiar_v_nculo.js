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
    _v15 = _v0.i(0);
  let _v16 = (0, _v2.rem)(_v13.ACTION_ICON_BOX_SIZE);
  _v0.s(["ShowcaseMenu", 0, ({
    canDelete: _v0,
    disabled: _v1,
    hasEmbedCode: _v2,
    hasEmbedOnlyPrivacy: _v3,
    onCopyEmbed: _v4,
    onCopyLink: _v5,
    onCopyShowcase: _v6,
    onClickViewShowcase: _v7,
    onRename: _v8,
    onDelete: _v9,
    placement: _v10,
    usePortal: _v11,
    onClick: _v12,
    size: _v13,
    zIndex: _v14
  }) => {
    let _v15 = (0, _v9.useIsMobile)(),
      _v16 = (0, _v12.createSection)([(0, _v1.jsx)(_v15.ActionWithTooltip, {
        actionCopy: (0, _v10.translate)({
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
        icon: (0, _v1.jsx)(_v5.Link, {
          boxSize: _v16
        }),
        onClick: _v5,
        showTooltip: _v3,
        tooltipCopy: (0, _v10.translate)({
          singular: "Edit the privacy settings to enable link sharing",
          dictionary: {
            es: {
              singular: "Edita la configuración de privacidad para permitir compartir enlaces"
            },
            "de-DE": {
              singular: "Bearbeite die Datenschutzeinstellungen, um das Teilen von Links zu ermöglichen"
            },
            "fr-FR": {
              singular: "Modifiez les paramètres de confidentialité pour activer le partage de liens"
            },
            "ja-JP": {
              singular: "プライバシー設定を編集してリンク共有を有効化"
            },
            "ko-KR": {
              singular: "링크 공유를 활성화하려면 프라이버시 설정을 편집하세요."
            },
            "pt-BR": {
              singular: "Edite as configurações de privacidade para ativar o compartilhamento de links"
            },
            "zh-CN": {
              singular: "编辑隐私设置以启用链接共享"
            }
          }
        })
      }, "showcase-menu-item-copy-link"), !_v15 && (0, _v1.jsx)(_v15.ActionWithTooltip, {
        actionCopy: (0, _v10.translate)({
          singular: "Copy showcase embed code",
          dictionary: {
            es: {
              singular: "Copiar el código de inserción de la presentación"
            },
            "de-DE": {
              singular: "Einbettungscode der Präsentation kopieren"
            },
            "fr-FR": {
              singular: "Copier le code d'intégration de la présentation"
            },
            "ja-JP": {
              singular: "ショーケースの埋め込みコードをコピー"
            },
            "ko-KR": {
              singular: "쇼케이스 임베드 코드 복사"
            },
            "pt-BR": {
              singular: "Copiar código de incorporação da vitrine"
            },
            "zh-CN": {
              singular: "复制橱窗嵌入代码"
            }
          }
        }),
        icon: (0, _v1.jsx)(_v3.CodeSquare, {
          boxSize: _v16
        }),
        onClick: _v4,
        showTooltip: !_v2,
        tooltipCopy: (0, _v10.translate)({
          singular: "Update your showcase settings to enable embedding",
          dictionary: {
            es: {
              singular: "Actualiza la configuración de tu presentación para permitir la inserción"
            },
            "de-DE": {
              singular: "Aktualisiere deine Präsentationseinstellungen, um das Einbetten zu ermöglichen"
            },
            "fr-FR": {
              singular: "Mettez à jour les paramètres de votre présentation pour activer l'intégration"
            },
            "ja-JP": {
              singular: "ショーケース設定を更新して埋め込みを有効化"
            },
            "ko-KR": {
              singular: "임베딩을 활성화하려면 쇼케이스 설정을 업데이트하세요."
            },
            "pt-BR": {
              singular: "Atualize as configurações da vitrine para ativar incorporação"
            },
            "zh-CN": {
              singular: "更新您的橱窗设置，启用嵌入"
            }
          }
        })
      }, "showcase-menu-item-copy-embed-code")]),
      _v17 = (0, _v12.createSection)([(0, _v1.jsx)(_v15.ActionWithTooltip, {
        actionCopy: (0, _v10.translate)({
          singular: "View showcase",
          dictionary: {
            es: {
              singular: "Ver presentación"
            },
            "de-DE": {
              singular: "Präsentation ansehen"
            },
            "fr-FR": {
              singular: "Visionner la présentation"
            },
            "ja-JP": {
              singular: "ショーケースを見る"
            },
            "ko-KR": {
              singular: "쇼케이스 보기"
            },
            "pt-BR": {
              singular: "Ver vitrine"
            },
            "zh-CN": {
              singular: "查看橱窗"
            }
          }
        }),
        icon: (0, _v1.jsx)(_v4.Eye, {
          boxSize: _v16
        }),
        onClick: _v7,
        showTooltip: _v3,
        tooltipCopy: (0, _v10.translate)({
          singular: "Hidden showcases can't be previewed",
          dictionary: {
            es: {
              singular: "Las presentaciones ocultas no se pueden previsualizar"
            },
            "de-DE": {
              singular: "Ausgeblendete Präsentationen können nicht in der Vorschau angezeigt werden."
            },
            "fr-FR": {
              singular: "Les présentations masquées ne peuvent pas être prévisualisées"
            },
            "ja-JP": {
              singular: "非表示のショーケースはプレビューできません"
            },
            "ko-KR": {
              singular: "숨겨진 쇼케이스는 미리 볼 수 없습니다."
            },
            "pt-BR": {
              singular: "Vitrines ocultas não podem ser pré-visualizadas"
            },
            "zh-CN": {
              singular: "无法预览隐藏的橱窗"
            }
          }
        })
      }, "showcase-menu-item-view")]),
      _v18 = _v8 && (0, _v1.jsx)(_v14.Action, {
        icon: (0, _v1.jsx)(_v7.RenamePencil, {
          boxSize: _v16
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
        onClick: _v8
      }, "showcase-menu-item-rename"),
      _v19 = _v6 && (0, _v1.jsx)(_v14.Action, {
        icon: (0, _v1.jsx)(_v8.CopyPortrait, {
          boxSize: _v16
        }),
        label: (0, _v10.translate)({
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
        onClick: _v6
      }, "showcase-menu-item-make-copy"),
      _v20 = [_v16, _v17, (0, _v12.createSection)([!_v15 && (_v8 || _v6) && (0, _v1.jsxs)(_v14.MenuAction, {
        icon: (0, _v1.jsx)(_v13.EDIT_FILE_ICON, {
          boxSize: _v16
        }),
        label: _v13.EDIT_FILE_COPY,
        children: [_v18, _v19]
      }), _v15 && _v18, _v15 && _v19]), (0, _v12.createSection)([_v0 && (0, _v1.jsx)(_v14.Action, {
        icon: (0, _v1.jsx)(_v6.TrashBin, {
          boxSize: _v16
        }),
        label: (0, _v10.translate)({
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
        onClick: _v9
      }, "showcase-menu-item-delete")])].filter(_v0 => !!_v0.length);
    return (0, _v1.jsx)(_v11.ActionsMenu, {
      placement: _v10,
      usePortal: _v11,
      onClick: _v12,
      disabled: _v1,
      size: _v13,
      zIndex: _v14,
      isV2: !0,
      children: _v20.map((_v0, _v1) => (0, _v1.jsx)(_v12.SectionRenderer, {
        section: _v0,
        index: _v1
      }, _v1))
    });
  }]);
}