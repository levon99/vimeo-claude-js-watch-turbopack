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
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0),
    _v32 = _v0.i(0),
    _v33 = _v0.i(0),
    _v34 = _v0.i(0),
    _v35 = _v0.i(0),
    _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0),
    _v39 = _v0.i(0),
    _v40 = _v0.i(0),
    _v41 = _v0.i(0);
  let _v42 = "library_showcases",
    _v43 = "showcases",
    _v44 = "vimeo.click",
    _v45 = "general",
    _v46 = "click",
    _v47 = _v0 => ({
      eventName: _v44,
      version: 110,
      fields: _v0,
      defaultEventFields: {
        click_type: _v46,
        copy: null,
        device_type: (0, _v41.getDeviceType)(),
        feature: _v43,
        location: _v0.location,
        name: "showcase_menu",
        page: _v42,
        path: window.location.pathname,
        target: "overflow menu",
        target_path: null,
        third_party_integration: null,
        type: _v45
      },
      globalAnalyticsToInclude: ["page", "path"]
    }),
    _v48 = _v0 => ({
      eventName: _v44,
      version: 110,
      fields: _v0,
      defaultEventFields: {
        click_type: _v46,
        copy: "copy link",
        device_type: (0, _v41.getDeviceType)(),
        feature: _v43,
        location: _v0.location,
        name: "showcase_copy_link",
        page: _v42,
        path: window.location.pathname,
        target: "copy link",
        target_path: null,
        third_party_integration: null,
        type: _v45
      },
      globalAnalyticsToInclude: ["page", "path"]
    }),
    _v49 = _v0 => ({
      eventName: _v44,
      version: 110,
      fields: _v0,
      defaultEventFields: {
        click_type: _v46,
        copy: "copy embed code",
        device_type: (0, _v41.getDeviceType)(),
        feature: _v43,
        location: _v0.location,
        name: "showcase_copy_embed_code",
        page: _v42,
        path: window.location.pathname,
        target: "copy embed code",
        target_path: null,
        third_party_integration: null,
        type: _v45
      },
      globalAnalyticsToInclude: ["page", "path"]
    }),
    _v50 = _v0 => ({
      eventName: _v44,
      version: 110,
      fields: _v0,
      defaultEventFields: {
        click_type: _v46,
        copy: "view showcase",
        device_type: (0, _v41.getDeviceType)(),
        feature: _v43,
        location: _v0.location,
        name: "view_showcase",
        page: _v42,
        path: window.location.pathname,
        target: "view showcase",
        target_path: "/showcase/id",
        third_party_integration: null,
        type: _v45
      },
      globalAnalyticsToInclude: ["page", "path"]
    }),
    _v51 = _v0 => ({
      eventName: _v44,
      version: 110,
      fields: _v0,
      defaultEventFields: {
        click_type: _v46,
        copy: "delete showcase",
        device_type: (0, _v41.getDeviceType)(),
        feature: _v43,
        location: _v0.location,
        name: "delete_showcase",
        page: _v42,
        path: window.location.pathname,
        target: "delete showcase",
        target_path: null,
        third_party_integration: null,
        type: _v45
      },
      globalAnalyticsToInclude: ["page", "path"]
    }),
    _v52 = _v0 => ({
      page_name: "showcase_library",
      path: window.location.pathname,
      target: _v0 ?? null,
      copy: null,
      location: null,
      referrer_page_name: null,
      referrer: document.referrer,
      target_path: null
    }),
    _v53 = _v0 => {
      let {
        teamUser: _v1,
        flow: _v2
      } = _v0;
      _v54({
        eventName: "vimeo.create_collection",
        actionCtxFields: {
          feature: null,
          action_type: "click"
        },
        productAnalyticsCtxFields: {
          flow: _v2 ?? null,
          modal_name: null,
          entity_type: "showcase",
          element: "button",
          location: "top_action_bar",
          feature: "showcases",
          product: "collections",
          device_type: (0, _v41.getDeviceType)(),
          copy: "new showcase",
          is_user_facing_data: !1,
          scrolling_percentage: null,
          cta_location_id: null
        },
        webCtxFields: {
          ..._v52("showcase_manager")
        },
        additionalFields: {
          collection_type: "showcase",
          feature_name: null,
          feature_value: null,
          new_toggled_on: null,
          new_toggled_off: null
        },
        teamUser: _v1,
        eventVersion: 2
      });
    },
    _v54 = ({
      eventName: _v0,
      eventVersion: _v1,
      actionCtxFields: _v2,
      productAnalyticsCtxFields: _v3,
      viewCtxFields: _v4,
      webCtxFields: _v5,
      additionalFields: _v6,
      teamUser: _v7
    }) => {
      let _v8 = (0, _v36.buildTeamBpContextFromTeamUser)(_v7),
        _v9 = (0, _v37.buildThirdPartyIntegrationBpContext)({
          is_integration: !1,
          integration_id: null,
          is_partner: null,
          integration_name: null
        }),
        _v10 = {
          ...(_v2 ? (0, _v35.buildActionBpContext)(_v2) : {}),
          ...(_v4 ? (0, _v40.buildViewBpContext)(_v4) : {}),
          ...(0, _v34.buildProductAnalyticsBpContext)(_v3),
          ...(0, _v38.buildWebBpContext)(_v5),
          ..._v8,
          ..._v9
        };
      (0, _v39.sendBpEventWithContexts)(_v0, _v10, _v1, _v6);
    };
  var _v55 = _v0.i(0),
    _v56 = _v0.i(0),
    _v57 = _v0.i(0),
    _v58 = _v0.i(0),
    _v59 = _v0.i(0),
    _v60 = _v0.i(0);
  let _v61 = (0, _v7.translate)({
      singular: "Added",
      dictionary: {
        es: {
          singular: "Añadido"
        },
        "de-DE": {
          singular: "Hinzugefügt"
        },
        "fr-FR": {
          singular: "Ajouté"
        },
        "ja-JP": {
          singular: "追加した日"
        },
        "ko-KR": {
          singular: "추가됨"
        },
        "pt-BR": {
          singular: "Adicionado(a)"
        },
        "zh-CN": {
          singular: "已添加"
        }
      }
    }),
    _v62 = (0, _v7.translate)({
      singular: "Modified",
      dictionary: {
        es: {
          singular: "Modificado"
        },
        "de-DE": {
          singular: "Modifiziert"
        },
        "fr-FR": {
          singular: "Modifiée"
        },
        "ja-JP": {
          singular: "変更日"
        },
        "ko-KR": {
          singular: "수정됨"
        },
        "pt-BR": {
          singular: "Modificado"
        },
        "zh-CN": {
          singular: "修改于"
        }
      }
    }),
    _v63 = ((0, _v7.translate)({
      singular: "Cancel",
      dictionary: {
        es: {
          singular: "Cancelar"
        },
        "de-DE": {
          singular: "Abbrechen"
        },
        "fr-FR": {
          singular: "Annuler"
        },
        "ja-JP": {
          singular: "キャンセル"
        },
        "ko-KR": {
          singular: "취소"
        },
        "pt-BR": {
          singular: "Cancelar"
        },
        "zh-CN": {
          singular: "取消"
        }
      }
    }), (0, _v7.translate)({
      singular: "Close",
      dictionary: {
        es: {
          singular: "Cerrar"
        },
        "de-DE": {
          singular: "Schließen"
        },
        "fr-FR": {
          singular: "Fermer "
        },
        "ja-JP": {
          singular: "閉じる"
        },
        "ko-KR": {
          singular: "닫기"
        },
        "pt-BR": {
          singular: "Fechar"
        },
        "zh-CN": {
          singular: "关闭"
        }
      }
    }), (0, _v7.translate)({
      singular: "Copy embed code",
      dictionary: {
        es: {
          singular: "Copiar el código de inserción"
        },
        "de-DE": {
          singular: "Einbettungscode kopieren"
        },
        "fr-FR": {
          singular: "Copier le code d’intégration"
        },
        "ja-JP": {
          singular: "埋め込みコードをコピー"
        },
        "ko-KR": {
          singular: "임베드 코드 복사하기"
        },
        "pt-BR": {
          singular: "Copiar código de incorporação"
        },
        "zh-CN": {
          singular: "复制嵌入代码"
        }
      }
    }), (0, _v7.translate)({
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
    }), (0, _v7.translate)({
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
    }), (0, _v7.translate)({
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
    }), (0, _v7.translate)({
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
    }), (0, _v7.translate)({
      singular: "Embed code copied",
      dictionary: {
        es: {
          singular: "Se copió el código de inserción"
        },
        "de-DE": {
          singular: "Einbettungscode kopiert"
        },
        "fr-FR": {
          singular: "Code d'intégration copié"
        },
        "ja-JP": {
          singular: "埋め込みコードがコピーされました"
        },
        "ko-KR": {
          singular: "임베드 코드를 복사했습니다"
        },
        "pt-BR": {
          singular: "Código de incorporação copiado"
        },
        "zh-CN": {
          singular: "嵌入代码已复制"
        }
      }
    })),
    _v64 = (0, _v7.translate)({
      singular: "Hide from Vimeo",
      dictionary: {
        es: {
          singular: "Ocultar de Vimeo"
        },
        "de-DE": {
          singular: "Bei Vimeo ausblenden"
        },
        "fr-FR": {
          singular: "Masquer dans Vimeo"
        },
        "ja-JP": {
          singular: "Vimeoで非表示にする"
        },
        "ko-KR": {
          singular: "Vimeo에서 숨기기"
        },
        "pt-BR": {
          singular: "Ocultar do Vimeo"
        },
        "zh-CN": {
          singular: "从 Vimeo 隐藏"
        }
      }
    }),
    _v65 = (0, _v7.translate)({
      singular: "Create a showcase",
      dictionary: {
        es: {
          singular: "Crear una presentación"
        },
        "de-DE": {
          singular: "Präsentation erstellen"
        },
        "fr-FR": {
          singular: "Créer une présentation"
        },
        "ja-JP": {
          singular: "ショーケースを作成"
        },
        "ko-KR": {
          singular: "쇼케이스 만들기"
        },
        "pt-BR": {
          singular: "Criar uma vitrine"
        },
        "zh-CN": {
          singular: "创建橱窗"
        }
      }
    }),
    _v66 = (0, _v7.translate)({
      singular: "Easily organize your videos into shareable collections.",
      dictionary: {
        es: {
          singular: "Organice fácilmente sus videos en colecciones que se puedan compartir."
        },
        "de-DE": {
          singular: "Organisiere deine Videos ganz einfach in teilbaren Sammlungen."
        },
        "fr-FR": {
          singular: "Organisez facilement vos vidéos en collections partageables."
        },
        "ja-JP": {
          singular: "動画を共有可能なコレクションに簡単に整理できます。"
        },
        "ko-KR": {
          singular: "동영상을 공유 가능한 컬렉션으로 쉽게 구성할 수 있습니다."
        },
        "pt-BR": {
          singular: "Organize seus vídeos em coleções compartilháveis."
        },
        "zh-CN": {
          singular: "轻松将视频整理为可共享的合集。"
        }
      }
    }),
    _v67 = (0, _v7.translate)({
      singular: "Sorry, something weird happened. Please try again.",
      dictionary: {
        es: {
          singular: "Lo sentimos, algo salió mal. Inténtalo de nuevo."
        },
        "de-DE": {
          singular: "Hier ist leider etwas schief gegangen. Bitte erneut versuchen."
        },
        "fr-FR": {
          singular: "Désolé, quelque chose de bizarre s'est produit. Veuillez essayer à nouveau."
        },
        "ja-JP": {
          singular: "申し訳ありません、問題が発生しました。再度お試しください。"
        },
        "ko-KR": {
          singular: "죄송합니다, 알 수 없는 오류가 발생했습니다. 다시 시도해주세요."
        },
        "pt-BR": {
          singular: "Desculpe, algo estranho aconteceu. Por favor, tente novamente."
        },
        "zh-CN": {
          singular: "对不起，出现异常问题。请重试。"
        }
      }
    }),
    _v68 = (0, _v7.translate)({
      singular: "Learn more",
      dictionary: {
        es: {
          singular: "Ver más"
        },
        "de-DE": {
          singular: "Mehr dazu"
        },
        "fr-FR": {
          singular: "En savoir plus "
        },
        "ja-JP": {
          singular: "詳細を見る"
        },
        "ko-KR": {
          singular: "자세히 보기"
        },
        "pt-BR": {
          singular: "Saiba mais"
        },
        "zh-CN": {
          singular: "了解更多"
        }
      }
    }),
    _v69 = (0, _v7.translate)({
      singular: "Link copied",
      dictionary: {
        es: {
          singular: "Vínculo copiado"
        },
        "de-DE": {
          singular: "Link kopiert"
        },
        "fr-FR": {
          singular: "Lien copié"
        },
        "ja-JP": {
          singular: "リンクがコピーされました"
        },
        "ko-KR": {
          singular: "링크가 복사됐습니다"
        },
        "pt-BR": {
          singular: "Link copiado"
        },
        "zh-CN": {
          singular: "链接已复制"
        }
      }
    }),
    _v70 = (0, _v7.translate)({
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
    _v71 = (0, _v7.translate)({
      singular: "New showcase",
      dictionary: {
        es: {
          singular: "Nueva presentación"
        },
        "de-DE": {
          singular: "Neue Präsentation"
        },
        "fr-FR": {
          singular: "Nouvelle présentation"
        },
        "ja-JP": {
          singular: "新しいショーケース"
        },
        "ko-KR": {
          singular: "새 쇼케이스"
        },
        "pt-BR": {
          singular: "Nova vitrine"
        },
        "zh-CN": {
          singular: "新展示"
        }
      }
    }),
    _v72 = (0, _v7.translate)({
      singular: "Private",
      dictionary: {
        es: {
          singular: "Privado"
        },
        "de-DE": {
          singular: "Privat"
        },
        "fr-FR": {
          singular: "Privé"
        },
        "ja-JP": {
          singular: "プライベート"
        },
        "ko-KR": {
          singular: "비공개"
        },
        "pt-BR": {
          singular: "Privado"
        },
        "zh-CN": {
          singular: "私密"
        }
      }
    }),
    _v73 = (0, _v7.translate)({
      singular: "Password",
      dictionary: {
        es: {
          singular: "Contraseña"
        },
        "de-DE": {
          singular: "Kennwort"
        },
        "fr-FR": {
          singular: "Mot de passe "
        },
        "ja-JP": {
          singular: "パスワード"
        },
        "ko-KR": {
          singular: "비밀번호"
        },
        "pt-BR": {
          singular: "Senha"
        },
        "zh-CN": {
          singular: "密码"
        }
      }
    }),
    _v74 = (0, _v7.translate)({
      singular: "Privacy",
      dictionary: {
        es: {
          singular: "Privacidad"
        },
        "de-DE": {
          singular: "Datenschutz"
        },
        "fr-FR": {
          singular: "Confidentialité "
        },
        "ja-JP": {
          singular: "プライバシー"
        },
        "ko-KR": {
          singular: "프라이버시"
        },
        "pt-BR": {
          singular: "Privacidade"
        },
        "zh-CN": {
          singular: "隐私"
        }
      }
    }),
    _v75 = (0, _v7.translate)({
      singular: "Public",
      dictionary: {
        es: {
          singular: "Público"
        },
        "de-DE": {
          singular: "Öffentlich"
        },
        "ja-JP": {
          singular: "一般公開"
        },
        "ko-KR": {
          singular: "공개"
        },
        "pt-BR": {
          singular: "Público"
        },
        "zh-CN": {
          singular: "公开"
        }
      }
    }),
    _v76 = ((0, _v7.translate)({
      singular: "Showcase copied successfully",
      dictionary: {
        es: {
          singular: "Showcase copiado con éxito"
        },
        "de-DE": {
          singular: "Showcase erfolgreich kopiert"
        },
        "fr-FR": {
          singular: "Showcase copié avec succès"
        },
        "ja-JP": {
          singular: "ショーケースのコピーが完了しました"
        },
        "ko-KR": {
          singular: "쇼케이스가 성공적으로 복사되었습니다"
        },
        "pt-BR": {
          singular: "Showcase copiado com sucesso"
        },
        "zh-CN": {
          singular: "Showcase 已成功复制"
        }
      }
    }), (0, _v7.translate)({
      singular: "Team",
      dictionary: {
        es: {
          singular: "Equipo"
        },
        "fr-FR": {
          singular: "Équipe"
        },
        "ja-JP": {
          singular: "チーム"
        },
        "ko-KR": {
          singular: "팀"
        },
        "pt-BR": {
          singular: "Equipe"
        },
        "zh-CN": {
          singular: "团队"
        }
      }
    })),
    _v77 = (0, _v7.translate)({
      singular: "Title",
      dictionary: {
        es: {
          singular: "Título"
        },
        "de-DE": {
          singular: "Titel"
        },
        "fr-FR": {
          singular: "Titre"
        },
        "ja-JP": {
          singular: "タイトル"
        },
        "ko-KR": {
          singular: "제목"
        },
        "pt-BR": {
          singular: "Título"
        },
        "zh-CN": {
          singular: "标题"
        }
      }
    }),
    _v78 = (0, _v7.translate)({
      singular: "Unlisted",
      dictionary: {
        es: {
          singular: "Sin listar"
        },
        "de-DE": {
          singular: "Nicht gelistet"
        },
        "fr-FR": {
          singular: "Non répertorié"
        },
        "ja-JP": {
          singular: "限定公開"
        },
        "ko-KR": {
          singular: "일부 공개"
        },
        "pt-BR": {
          singular: "Não listado"
        },
        "zh-CN": {
          singular: "未公开发布"
        }
      }
    }),
    _v79 = ((0, _v7.translate)({
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
    }), (0, _v7.translate)({
      singular: "Clear search",
      dictionary: {
        es: {
          singular: "Borrar búsqueda"
        },
        "de-DE": {
          singular: "Suche löschen"
        },
        "fr-FR": {
          singular: "Effacer la recherche"
        },
        "ja-JP": {
          singular: "検索をクリア"
        },
        "ko-KR": {
          singular: "검색 지우기"
        },
        "pt-BR": {
          singular: "Limpar pesquisa"
        },
        "zh-CN": {
          singular: "清除搜索"
        }
      }
    })),
    _v80 = (0, _v7.translate)({
      singular: "No showcases match your search.",
      dictionary: {
        es: {
          singular: "No hay showcases que coincidan con tu búsqueda."
        },
        "de-DE": {
          singular: "Keine Showcases entsprechen Ihrer Suche."
        },
        "fr-FR": {
          singular: "Aucune vitrine ne correspond à votre recherche."
        },
        "ja-JP": {
          singular: "検索に一致するショーケースはありません。"
        },
        "ko-KR": {
          singular: "검색과 일치하는 쇼케이스가 없습니다."
        },
        "pt-BR": {
          singular: "Nenhuma vitrine corresponde à sua pesquisa."
        },
        "zh-CN": {
          singular: "没有与您的搜索匹配的展示。"
        }
      }
    }),
    _v81 = (0, _v7.translate)({
      singular: "Search showcase",
      dictionary: {
        es: {
          singular: "Buscar presentación"
        },
        "de-DE": {
          singular: "Präsentation suchen"
        },
        "fr-FR": {
          singular: "Rechercher une présentation"
        },
        "ja-JP": {
          singular: "ショーケースを検索"
        },
        "ko-KR": {
          singular: "쇼케이스 검색"
        },
        "pt-BR": {
          singular: "Pesquisar vitrine"
        },
        "zh-CN": {
          singular: "搜索展示"
        }
      }
    }),
    _v82 = ((0, _v7.translate)({
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
    }), ({
      isCreatingShowcase: _v0 = !1,
      onCreateShowcase: _v1,
      onLearnMore: _v2
    }) => {
      let _v3 = (0, _v13.useAnalyticsEvent)(),
        _v4 = (0, _v59.useViewer)();
      return (0, _v1.jsx)(_v4.Flex, {
        gap: "lg",
        align: "center",
        padding: "md",
        direction: "column",
        justify: "center",
        children: (0, _v1.jsx)(_v60.EmptyState, {
          cta: (0, _v1.jsxs)(_v4.Flex, {
            gap: "lg",
            align: "start",
            justify: "center",
            children: [(0, _v1.jsx)(_v55.Button, {
              variant: "secondary",
              leftIcon: (0, _v1.jsx)(_v58.PlayCircle, {}),
              onClick: () => {
                _v3({
                  eventName: _v44,
                  version: 110,
                  fields: {},
                  defaultEventFields: {
                    click_type: _v46,
                    copy: "Learn more",
                    device_type: (0, _v41.getDeviceType)(),
                    feature: _v43,
                    location: "empty_state",
                    name: "learn_more",
                    page: _v42,
                    path: window.location.pathname,
                    target: "video modal",
                    target_path: "https://vimeo.com/331466789?embedded=true&source=video_title&owner=94883159",
                    third_party_integration: null,
                    type: _v45
                  }
                }), _v2();
              },
              children: _v68
            }), (0, _v1.jsx)(_v55.Button, {
              variant: "primary",
              leftIcon: (0, _v1.jsx)(_v57.PlusSmall, {}),
              disabled: _v0,
              isLoading: _v0,
              onClick: () => {
                let _v0;
                _v3({
                  eventName: _v44,
                  version: 110,
                  fields: _v0 = {
                    location: "empty_state"
                  },
                  defaultEventFields: {
                    click_type: _v46,
                    copy: "new showcase",
                    device_type: (0, _v41.getDeviceType)(),
                    feature: _v43,
                    location: _v0.location,
                    name: "create_new_showcase",
                    page: _v42,
                    path: window.location.pathname,
                    target: "new showcase",
                    target_path: "https://vimeo.com/manage/showcases/id/info",
                    third_party_integration: null,
                    type: _v45
                  },
                  globalAnalyticsToInclude: ["page", "path"]
                }), _v53({
                  teamUser: _v4.teamUser,
                  flow: "empty_state"
                }), _v1();
              },
              children: _v71
            })]
          }),
          header: _v65,
          icon: (0, _v1.jsx)(_v56._3GridLeftLayout, {
            height: "2xl",
            width: "2xl",
            gap: "md"
          }),
          subheader: _v66
        })
      });
    });
  var _v83 = _v0.i(0),
    _v84 = _v0.i(0),
    _v85 = _v0.i(0);
  let _v86 = _v84.default.div.withConfig({
      displayName: "LoadMoreButton__Wrapper",
      componentId: "sc-8adbeaa5-0"
    })`
  margin: ${(0, _v83.rem)(40)} 0 ${(0, _v83.rem)(48)};
  padding: 0 1.25rem;
`,
    _v87 = ({
      isLoading: _v0 = !1,
      onClick: _v1
    }) => (0, _v1.jsx)(_v86, {
      children: (0, _v1.jsx)(_v85.Button, {
        disabled: _v0,
        fluid: !0,
        format: "secondary",
        loading: _v0,
        onClick: _v1,
        children: (0, _v7.translate)({
          singular: "Load more…",
          dictionary: {
            es: {
              singular: "Cargar más…"
            },
            "de-DE": {
              singular: "Mehr Videos laden.."
            },
            "fr-FR": {
              singular: "Afficher plus…"
            },
            "ja-JP": {
              singular: "もっとロードする…"
            },
            "ko-KR": {
              singular: "더 보기"
            },
            "pt-BR": {
              singular: "Carregar mais…"
            },
            "zh-CN": {
              singular: "加载更多..."
            }
          }
        })
      })
    });
  var _v88 = _v0.i(0),
    _v89 = _v0.i(0);
  let _v90 = ({
    isDisabled: _v0,
    isLoading: _v1,
    onClick: _v2
  }) => (0, _v1.jsxs)(_v1.Fragment, {
    children: [(0, _v1.jsx)(_v88.IconButton, {
      "aria-label": _v71,
      display: {
        base: "inline-flex",
        md: "none"
      },
      icon: (0, _v1.jsx)(_v89.PlusCircle, {}),
      isDisabled: _v0,
      isLoading: _v1,
      onClick: _v2,
      variant: "secondary"
    }), (0, _v1.jsx)(_v55.Button, {
      display: {
        base: "none",
        md: "inline-flex"
      },
      isDisabled: _v0,
      isLoading: _v1,
      onClick: _v2,
      variant: "secondary",
      children: _v71
    })]
  });
  var _v91 = _v0.i(0),
    _v92 = _v0.i(0),
    _v93 = _v0.i(0);
  let _v94 = {
      [`@media screen and (min-width: ${_v92.bokehTheme.breakpoints.lg})`]: {
        gridTemplateColumns: `${(0, _v91.rem)(150)} 8fr 2fr 0.2fr`
      },
      [`@media screen and (min-width: ${_v92.bokehTheme.breakpoints.xl})`]: {
        gridTemplateColumns: `${(0, _v91.rem)(150)} 6fr 2fr 2fr 0.2fr`
      }
    },
    _v95 = ({
      sort: _v0
    }) => (0, _v1.jsxs)(_v93.ContentRow, {
      listGridColumns: `${(0, _v91.rem)(150)} 10fr 0.2fr`,
      disableHover: !0,
      sx: {
        ..._v94,
        display: {
          base: "none",
          md: "grid"
        },
        backgroundColor: "fill-component",
        padding: "0 0.75rem",
        minHeight: "2.5rem"
      },
      minHeight: "md",
      position: "initial",
      top: "",
      zIndex: "1",
      children: [(0, _v1.jsx)(_v93.ContentRow.Column, {
        children: (0, _v1.jsx)(_v5.Text, {
          marginLeft: "0.625rem",
          variant: "heading-xs",
          color: "text-secondary",
          children: _v77
        })
      }), (0, _v1.jsx)(_v93.ContentRow.Column, {
        children: "-"
      }), (0, _v1.jsx)(_v93.ContentRow.Column, {
        hideAtWidth: _v92.bokehTheme.breakpoints.xl,
        children: (0, _v1.jsx)(_v5.Text, {
          variant: "heading-xs",
          color: "text-secondary",
          children: _v74
        })
      }), (0, _v1.jsx)(_v93.ContentRow.Column, {
        hideAtWidth: _v92.bokehTheme.breakpoints.lg,
        children: (0, _v1.jsx)(_v5.Text, {
          variant: "heading-xs",
          color: "text-secondary",
          children: (() => {
            switch (_v0.type) {
              case _v23.SHOWCASES_SORT_OPTION.LAST_MODIFIED:
                return _v62;
              case _v23.SHOWCASES_SORT_OPTION.CREATED:
              default:
                return _v61;
            }
          })()
        })
      }), (0, _v1.jsx)(_v93.ContentRow.Column, {
        width: "md",
        children: (0, _v1.jsx)(_v1.Fragment, {})
      })]
    });
  var _v96 = _v0.i(0),
    _v97 = _v0.i(0),
    _v98 = _v0.i(0),
    _v99 = _v0.i(0),
    _v100 = _v0.i(0),
    _v101 = _v0.i(0),
    _v102 = _v0.i(0);
  let _v103 = (_v0, _v1) => {
      let _v2,
        _v3,
        _v4 = ((_v3 = _v0.match(/albums\/\d+/g)) && (_v2 = _v3[0].split("/").pop()), _v2);
      return _v4 ? _v1 ? `/manage/showcases/${_v4}` : `/showcase/${_v4}` : "/library/showcases";
    },
    _v104 = ({
      overflowMenu: _v0,
      showcase: _v1
    }) => {
      let _v2,
        _v3 = _v102.BPAnalyticsV2.useContentManagamentHoverEvent(),
        _v4 = _v1.pictures.map((_v0, _v1) => 0 === _v1 ? (0, _v101.stripPadding)(_v0.sizes[3].link) : (0, _v101.stripPadding)(_v0.sizes[1].link)),
        _v5 = _v103(_v1.uri, !!_v1.embed);
      return (0, _v1.jsx)(_v100.ShowcaseCard, {
        title: _v1.name,
        subtitle: `${(0, _v7.translate)({
          singular: "{NUM} video",
          plural: "{NUM} videos",
          count: _v1.metadata.connections.videos.total,
          replacements: {
            NUM: _v1.metadata.connections.videos.total
          },
          dictionary: {
            "de-DE": {
              singular: "{NUM} Video",
              plural: "{NUM} Videos"
            },
            "fr-FR": {
              singular: "{NUM} vidéo",
              plural: "{NUM} vidéos"
            },
            "ja-JP": {
              singular: "{NUM} 件の動画",
              plural: "{NUM}件の動画"
            },
            "ko-KR": {
              singular: "동영상 {NUM}개",
              plural: "동영상 {NUM}개"
            },
            "pt-BR": {
              singular: "{NUM} vídeo",
              plural: "{NUM} vídeos"
            },
            "zh-CN": {
              singular: "{NUM} 个视频",
              plural: "{NUM} 个视频"
            }
          }
        })} • ${(_v2 = new Date(_v1.createdTime)).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric"
        }) + ", " + _v2.toLocaleDateString("en-US", {
          year: "numeric"
        })}`,
        titleStyles: {
          maxWidth: _v23.CONTENT_CARD_TITLE_MAX_WIDTH
        },
        showGrid: _v1.hasChosenThumbnail,
        thumbnails: _v4,
        href: _v5,
        onClick: () => window.location.href = _v5,
        onMouseEnter: () => {
          _v3({
            entityType: "showcase",
            pageName: "showcases_library"
          });
        },
        actionsMenu: _v0,
        uri: _v1.uri
      });
    },
    _v105 = ({
      isLoading: _v0,
      isMenuDisabled: _v1,
      onCopyEmbed: _v2,
      onCopyLink: _v3,
      onCopyShowcase: _v4,
      onDelete: _v5,
      showcases: _v6
    }) => {
      let _v7 = (0, _v13.useAnalyticsEvent)(),
        _v8 = "showcase_grid";
      return (0, _v1.jsx)(_v99.ContentGrid, {
        children: (0, _v1.jsxs)(_v99.ContentGrid.Body, {
          children: [_v6?.map(_v0 => (0, _v1.jsx)(_v104, {
            overflowMenu: (0, _v1.jsx)(_v98.ShowcaseMenu, {
              canDelete: !!_v0.metadata?.interactions?.delete,
              disabled: _v1,
              hasEmbedCode: !!_v0.embed?.html,
              hasEmbedOnlyPrivacy: "embed_only" === _v0.privacy.view,
              onClick: () => {
                _v7(_v47({
                  location: _v8
                }));
              },
              onCopyLink: () => {
                _v3(_v0.link), _v7(_v48({
                  location: _v8
                }));
              },
              onCopyEmbed: () => {
                _v0.embed?.html && (_v2(_v0.embed?.html), _v7(_v49({
                  location: _v8
                })));
              },
              onCopyShowcase: () => {
                _v4(_v0);
              },
              onClickViewShowcase: () => {
                window.open(_v0.link, "_blank"), _v7(_v50({
                  location: _v8
                }));
              },
              onDelete: () => {
                _v5(_v0), _v7(_v51({
                  location: _v8
                }));
              },
              zIndex: _v23.ACTIONS_MENU_Z_INDEX
            }),
            showcase: _v0
          }, _v0.uri)), _v0 && (0, _v1.jsx)(_v97.LoadingCardsGrid, {})]
        })
      });
    };
  var _v106 = _v0.i(0),
    _v107 = _v0.i(0),
    _v108 = _v0.i(0),
    _v109 = _v0.i(0),
    _v110 = _v0.i(0);
  let _v111 = ({
    title: _v0,
    subTitle: _v1,
    timestamp: _v2,
    thumbnail: _v3,
    privacy: _v4,
    href: _v5,
    menuButton: _v6,
    isEditingContentTitle: _v7,
    editableTitle: _v8
  }) => {
    let _v9 = _v102.BPAnalyticsV2.useContentManagamentHoverEvent();
    return (0, _v1.jsxs)(_v93.ContentRow, {
      href: _v5,
      listGridColumns: `${(0, _v91.rem)(150)} 10fr 0.2fr`,
      cursor: "pointer",
      sx: _v94,
      onMouseEnter: () => {
        _v9({
          entityType: "showcase",
          pageName: "showcases_library"
        });
      },
      children: [(0, _v1.jsx)(_v93.ContentRow.Column, {
        margin: (0, _v91.rem)(10),
        children: _v3
      }), (0, _v1.jsx)(_v93.ContentRow.Column, {
        overflow: "hidden",
        children: (0, _v1.jsxs)(_v4.Flex, {
          maxW: (0, _v91.rem)(400),
          flexDir: "column",
          width: "100%",
          children: [_v7 && _v8 ? (0, _v1.jsx)(_v106.Box, {
            onClick: _v0 => {
              _v0.preventDefault(), _v0.stopPropagation();
            },
            width: "100%",
            children: _v8
          }) : (0, _v1.jsx)(_v5.Text, {
            variant: "heading-xs",
            noOfLines: 1,
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            display: "block",
            children: _v0
          }), !_v7 && _v1 && (0, _v1.jsx)(_v5.Text, {
            variant: "body-sm",
            color: "text-secondary",
            noOfLines: 1,
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            display: "block",
            children: _v1
          })]
        })
      }), (0, _v1.jsx)(_v93.ContentRow.Column, {
        hideAtWidth: _v92.bokehTheme.breakpoints.xl,
        children: (0, _v1.jsx)(_v4.Flex, {
          alignItems: "center",
          children: (0, _v1.jsx)(_v5.Text, {
            variant: "body-md",
            marginRight: (0, _v91.rem)(10),
            color: "text-secondary",
            children: _v4
          })
        })
      }), (0, _v1.jsx)(_v93.ContentRow.Column, {
        hideAtWidth: _v92.bokehTheme.breakpoints.lg,
        children: (0, _v1.jsx)(_v5.Text, {
          variant: "body-md",
          color: "text-secondary",
          noOfLines: 1,
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          display: "block",
          children: _v2
        })
      }), (0, _v1.jsx)(_v93.ContentRow.Column, {
        children: _v6
      })]
    });
  };
  var _v112 = _v0.i(0);
  let _v113 = ({
      thumbnails: _v0
    }) => _v0 && _v0[0] ? (0, _v1.jsx)(_v93.ContentRow.Thumbnail, {
      src: _v0[0],
      alt: "showcase thumbnail"
    }) : (0, _v1.jsx)(_v93.ContentRow.DefaultThumbnail, {
      minWidth: (0, _v91.rem)(130),
      children: (0, _v1.jsx)(_v112.VideosStackFilled, {
        color: "text-tertiary",
        boxSize: "sm",
        opacity: "60%"
      })
    }),
    _v114 = ({
      isMenuDisabled: _v0,
      onCopyEmbed: _v1,
      onCopyLink: _v2,
      onCopyShowcase: _v3,
      onDelete: _v4,
      showcase: _v5,
      sort: _v6
    }) => {
      let {
          createdTime: _v7,
          embed: _v8,
          metadata: _v9,
          name: _v10,
          privacy: _v11,
          pictures: _v12,
          uri: _v13,
          modifiedTime: _v14
        } = _v5,
        _v15 = (0, _v109.useLocale)(),
        _v16 = (0, _v13.useAnalyticsEvent)(),
        _v17 = "showcase_list",
        {
          settings: _v18
        } = (0, _v8.useOrionSettings)(),
        [_v19, _v20] = (0, _v3.useState)(!1),
        [_v21, _v22] = (0, _v3.useState)(_v10),
        _v23 = (0, _v108.getResourceIdFromUri)(_v13),
        _v24 = (0, _v3.useMemo)(() => _v6.type === _v23.SHOWCASES_SORT_OPTION.LAST_MODIFIED && _v14 ? _v14 : _v7, [_v6.type, _v14, _v7]),
        _v25 = _v12.slice(0, 3).map(_v0 => {
          let _v1 = _v0?.sizes?.[1]?.link;
          return _v1 ? (0, _v101.stripPadding)(_v1) : "";
        }),
        _v26 = _v103(_v13, !!_v8);
      return (0, _v1.jsx)(_v111, {
        href: _v26,
        title: _v21,
        isEditingContentTitle: _v19,
        editableTitle: _v18.enable_rename_showcase_and_events && _v19 ? (0, _v1.jsx)(_v31.ShowcaseEditableTitle, {
          albumId: _v23,
          isEditing: _v19,
          setCurrentTitle: _v22,
          setIsEditingContentTitle: _v20,
          value: _v21,
          fontSize: "header-sm",
          fontWeight: "bold"
        }) : void 0,
        subTitle: (0, _v7.translate)({
          singular: "{NUM} video",
          plural: "{NUM} videos",
          count: _v9.connections.videos.total,
          replacements: {
            NUM: _v9.connections.videos.total
          },
          dictionary: {
            "de-DE": {
              singular: "{NUM} Video",
              plural: "{NUM} Videos"
            },
            "fr-FR": {
              singular: "{NUM} vidéo",
              plural: "{NUM} vidéos"
            },
            "ja-JP": {
              singular: "{NUM} 件の動画",
              plural: "{NUM}件の動画"
            },
            "ko-KR": {
              singular: "동영상 {NUM}개",
              plural: "동영상 {NUM}개"
            },
            "pt-BR": {
              singular: "{NUM} vídeo",
              plural: "{NUM} vídeos"
            },
            "zh-CN": {
              singular: "{NUM} 个视频",
              plural: "{NUM} 个视频"
            }
          }
        }),
        timestamp: (0, _v110.timestampToListDate)(_v24, _v15),
        thumbnail: (0, _v1.jsx)(_v113, {
          thumbnails: _v25
        }),
        privacy: _v115[_v11.view] ?? _v11.view,
        menuButton: (0, _v1.jsx)(_v98.ShowcaseMenu, {
          canDelete: !!_v5.metadata?.interactions?.delete,
          disabled: _v0,
          hasEmbedCode: !!_v5.embed?.html,
          hasEmbedOnlyPrivacy: "embed_only" === _v5.privacy.view,
          onRename: _v18.enable_rename_showcase_and_events ? () => {
            _v20(!0);
          } : void 0,
          onClick: () => {
            _v16(_v47({
              location: _v17
            }));
          },
          onCopyLink: () => {
            _v2(_v5.link), _v16(_v48({
              location: _v17
            }));
          },
          onCopyEmbed: () => {
            _v5.embed?.html && (_v1(_v5.embed?.html), _v16(_v49({
              location: _v17
            })));
          },
          onCopyShowcase: () => {
            _v3(_v5);
          },
          onClickViewShowcase: () => {
            window.open(_v5.link, "_blank"), _v16(_v50({
              location: _v17
            }));
          },
          onDelete: () => {
            _v4(_v5), _v16(_v51({
              location: _v17
            }));
          },
          zIndex: _v23.ACTIONS_MENU_Z_INDEX
        })
      }, _v13);
    },
    _v115 = {
      anybody: _v75,
      embed_only: _v64,
      nobody: _v72,
      password: _v73,
      team: _v76,
      unlisted: _v78
    },
    _v116 = ({
      isLoading: _v0,
      isMenuDisabled: _v1,
      onCopyEmbed: _v2,
      onCopyLink: _v3,
      onCopyShowcase: _v4,
      onDelete: _v5,
      showcases: _v6,
      sort: _v7
    }) => (0, _v1.jsxs)(_v106.Box, {
      children: [_v6?.map(_v0 => (0, _v1.jsx)(_v114, {
        isMenuDisabled: _v1,
        onCopyEmbed: _v2,
        onCopyLink: _v3,
        onCopyShowcase: _v4,
        onDelete: _v5,
        showcase: _v0,
        sort: _v7
      }, _v0.uri)), _v0 && (0, _v1.jsx)(_v1.Fragment, {
        children: (0, _v1.jsx)(_v107.LoadingStateList, {})
      })]
    }),
    _v117 = ({
      isLoading: _v0,
      isMenuDisabled: _v1,
      onCopyEmbed: _v2,
      onCopyLink: _v3,
      onCopyShowcase: _v4,
      onDelete: _v5,
      showcases: _v6,
      sort: _v7
    }) => (0, _v1.jsx)(_v116, {
      isLoading: _v0,
      isMenuDisabled: _v1,
      onCopyEmbed: _v2,
      onCopyLink: _v3,
      onCopyShowcase: _v4,
      onDelete: _v5,
      showcases: _v6,
      sort: _v7
    }),
    _v118 = ({
      layout: _v0,
      sort: _v1,
      ..._v2
    }) => _v0 === _v96.Layout.List ? (0, _v1.jsx)(_v117, {
      ..._v2,
      sort: _v1
    }) : (0, _v1.jsx)(_v105, {
      ..._v2
    });
  var _v119 = _v0.i(0),
    _v120 = _v0.i(0),
    _v121 = _v0.i(0),
    _v122 = _v0.i(0),
    _v123 = _v0.i(0);
  let _v124 = ({
    searchQuery: _v0,
    onSearchChange: _v1
  }) => {
    let _v2 = (0, _v3.useRef)(null),
      [_v3, _v4] = (0, _v3.useState)(!1);
    return ((0, _v3.useEffect)(() => {
      _v3 && _v2.current?.focus();
    }, [_v3]), _v3) ? (0, _v1.jsxs)(_v120.InputGroup, {
      maxWidth: "350px",
      minWidth: "0",
      flex: 1,
      children: [(0, _v1.jsx)(_v121.InputLeftElement, {
        pointerEvents: "none",
        children: (0, _v1.jsx)(_v123.SearchMagnifier, {
          boxSize: "1.25rem",
          color: "text-secondary"
        })
      }), (0, _v1.jsx)(_v119.Input, {
        ref: _v2,
        size: "md",
        placeholder: _v81,
        value: _v0,
        onChange: _v0 => _v1(_v0.currentTarget.value),
        onBlur: () => {
          _v0 || _v4(!1);
        },
        variant: "filled"
      }), _v0 && (0, _v1.jsx)(_v121.InputRightElement, {
        children: (0, _v1.jsx)(_v88.IconButton, {
          "aria-label": _v79,
          icon: (0, _v1.jsx)(_v122.CloseXCircleFilled, {}),
          onMouseDown: _v0 => _v0.preventDefault(),
          onClick: () => {
            _v1(""), _v2.current?.focus();
          },
          variant: "ghost",
          size: "xs"
        })
      })]
    }) : (0, _v1.jsx)(_v88.IconButton, {
      "aria-label": _v81,
      icon: (0, _v1.jsx)(_v123.SearchMagnifier, {}),
      onClick: () => _v4(!0),
      variant: "tertiary"
    });
  };
  var _v125 = _v0.i(0);
  function _v126() {
    let {
        trackShowcasesListPageDisplayed: _v0,
        trackShowcaseCreated: _v1
      } = (0, _v9.useShowcaseManageTracking)(),
      _v2 = (0, _v3.useContext)(_v33.ViewerContext),
      _v3 = (0, _v17.useNotification)(),
      _v4 = (0, _v27.useShowcaseDeleteModal)(),
      _v5 = (0, _v18.useUpsellModal)(),
      _v6 = (0, _v19.useVideoModal)(),
      {
        settings: _v7
      } = (0, _v8.useOrionSettings)(),
      _v8 = !!_v7.enable_showcase_search,
      [_v9, _v10] = (0, _v16.useLayoutPreference)(),
      [_v11, _v12] = (0, _v28.useSortPreference)(_v23.DEFAULT_SHOWCASES_SORT, _v23.VL_SHOWCASES_SORT_LOCAL_STORAGE_KEY),
      [_v13, _v14] = (0, _v3.useState)(""),
      _v15 = (0, _v11.useDebouncedValue)(_v13, 400),
      [_v16, _v17] = (0, _v3.useState)(null),
      [_v18, _v19] = (0, _v3.useState)(""),
      _v20 = (0, _v13.useAnalyticsEvent)(),
      {
        getShowcaseShareLoopTrackingParams: _v21
      } = (0, _v26.useShareLoopTrackingParams)(),
      _v22 = _v2?.teamUser?.ownerId || _v2?.user?.id,
      {
        isDone: _v23,
        isLoadingInitial: _v24,
        isLoadingMore: _v25,
        loadMore: _v26,
        removeFromCacheByUri: _v27,
        revalidateShowcases: _v28,
        showcases: _v29,
        total: _v30
      } = (({
        ownerId: _v0,
        query: _v1,
        sortDirection: _v2,
        sortType: _v3
      }) => {
        let _v4 = (_v0 => {
            switch (_v0) {
              case _v23.SHOWCASES_SORT_OPTION.TITLE:
                return "alphabetical";
              case _v23.SHOWCASES_SORT_OPTION.CREATED:
                return "date";
              case _v23.SHOWCASES_SORT_OPTION.LAST_MODIFIED:
                return "last_modified";
              default:
                return "date";
            }
          })(_v3),
          {
            data: _v5,
            error: _v6,
            mutate: _v7,
            setSize: _v8,
            size: _v9
          } = (0, _v125.useGetUserAlbumsInfinite)(() => _v0 ? {
            select: ["createdTime", "embed.html", "hasChosenThumbnail", "link", "metadata.connections.videos.total", "metadata.interactions.delete", "name", "pictures.sizes.link", "privacy.view", "uri", "modifiedTime"],
            where: {
              userId: _v0
            },
            headers: {
              Accept: "application/vnd.vimeo.*+json;version=3.4.1"
            },
            query: {
              perPage: 20,
              sort: _v4,
              direction: _v2,
              ...(_v1 ? {
                query: _v1
              } : {})
            }
          } : null),
          _v10 = !_v5?.[_v5?.length - 1]?.paging.next,
          _v11 = (0, _v3.useMemo)(() => _v5?.flatMap(_v0 => _v0.data), [_v5]),
          _v12 = !_v5 && !_v6,
          _v13 = _v12 || _v9 > 0 && _v5 && void 0 === _v5[_v9 - 1];
        return {
          isDone: _v10,
          isLoadingInitial: _v12,
          isLoadingMore: _v13,
          loadMore: () => _v8(_v9 + 1),
          removeFromCacheByUri: _v0 => {
            _v7(_v0 => _v0?.map(_v0 => ({
              ..._v0,
              data: _v0.data.filter(_v0 => _v0.uri !== _v0)
            })));
          },
          revalidateShowcases: () => _v7(),
          showcases: _v11,
          total: _v5?.[_v5.length - 1].total
        };
      })({
        ownerId: _v22,
        query: _v15 || void 0,
        sortDirection: _v11.direction,
        sortType: _v11.type
      });
    (0, _v3.useEffect)(() => {
      void 0 === _v30 || _v15 || (_v0 => {
        let {
            teamUser: _v1,
            noOfShowcases: _v2
          } = _v0,
          _v3 = {
            collection_type: "showcases",
            feature_name: "showcases number",
            feature_value: String(_v2)
          };
        _v54({
          eventName: "vimeo.showcases_library",
          viewCtxFields: {
            feature: null,
            view_type: "pageview"
          },
          productAnalyticsCtxFields: {
            entity_type: "showcase",
            location: "page_area",
            feature: "showcases",
            product: "collections",
            device_type: (0, _v41.getDeviceType)(),
            copy: null,
            element: null,
            flow: null,
            modal_name: null,
            is_user_facing_data: !1,
            scrolling_percentage: null,
            cta_location_id: null
          },
          webCtxFields: {
            ..._v52()
          },
          additionalFields: _v3,
          teamUser: _v1,
          eventVersion: 2
        });
      })({
        noOfShowcases: _v30,
        teamUser: _v2?.teamUser
      });
    }, [_v30]), (0, _v10.usePicoEffect)(() => {
      if (void 0 === _v30 || _v15) return !1;
      _v0({
        showcasesListCount: _v30
      });
    }, [_v30, _v15], {
      once: !0
    });
    let {
        capabilities: _v31
      } = (0, _v6.useCapability)(["canCreateAlbums"], _v2?.teamUser?.ownerId ?? _v2?.user?.uri),
      {
        capabilities: _v32
      } = (0, _v6.useCapability)(["canManageTeamCollections"]),
      _v33 = _v29?.length === 0,
      _v34 = !!_v15,
      _v35 = _v31?.canCreateAlbums === !1,
      _v36 = (0, _v3.useCallback)(({
        uri: _v0
      }) => {
        _v1({
          showcaseId: _v0.split("/").pop() ?? ""
        }), window.location.href = _v103(_v0, !0);
      }, [_v1]),
      _v37 = (0, _v3.useCallback)(() => {
        _v3({
          content: _v67,
          status: "error"
        });
      }, [_v3]),
      _v38 = (0, _v3.useCallback)(() => {
        _v17(null), _v19("");
      }, []),
      _v39 = (0, _v3.useCallback)(({
        name: _v0,
        uri: _v1
      }) => {
        let _v2 = _v0 ?? _v18,
          _v3 = _v103(_v1, !0);
        _v38(), _v28(), _v3({
          content: (0, _v7.translate)({
            singular: 'Created "{SHOWCASE_NAME}". {LINK}Open page{/LINK}',
            replacements: {
              SHOWCASE_NAME: _v2,
              LINK: _v0 => (0, _v1.jsx)(_v30.LinkComponent, {
                href: _v3,
                children: _v0
              })
            },
            dictionary: {
              es: {
                singular: 'Se creó "{SHOWCASE_NAME}". {LINK}Abrir página{/LINK}'
              },
              "de-DE": {
                singular: 'Erstellt "{SHOWCASE_NAME}". {LINK}Seite öffnen{/LINK}'
              },
              "fr-FR": {
                singular: 'Créé "{SHOWCASE_NAME}". {LINK}Ouvrir la page{/LINK}'
              },
              "ja-JP": {
                singular: '作成しました "{SHOWCASE_NAME}". {LINK}ページを開く{/LINK}'
              },
              "ko-KR": {
                singular: '"{SHOWCASE_NAME}"을(를) 생성했습니다. {LINK}페이지 열기{/LINK}'
              },
              "pt-BR": {
                singular: 'Criado "{SHOWCASE_NAME}". {LINK}Abrir página{/LINK}'
              },
              "zh-CN": {
                singular: '已创建 "{SHOWCASE_NAME}". {LINK}打开页面{/LINK}'
              }
            }
          }),
          status: "success"
        });
      }, [_v38, _v18, _v3, _v28]),
      _v40 = (0, _v3.useCallback)(() => {
        _v3({
          content: _v67,
          status: "error"
        });
      }, [_v3]),
      [_v41, {
        loading: _v42
      }] = (0, _v14.useCreateShowcase)({
        onFailure: _v37,
        onSuccess: _v36,
        teamOwnerId: _v22
      }),
      [_v43, {
        loading: _v44
      }] = (0, _v15.useCopyShowcase)({
        onFailure: _v40,
        onSuccess: _v39
      }),
      _v45 = (0, _v3.useCallback)(_v0 => {
        _v17(_v0), _v19((0, _v32.buildCopyPrefilledTitle)(_v0.name, _v31.SHOWCASE_TITLE_MAX_LENGTH));
      }, []),
      _v46 = (0, _v3.useCallback)(_v0 => {
        _v16 && _v43(_v16.uri, _v0);
      }, [_v43, _v16]),
      _v47 = _v35 ? () => _v5.open({
        tracking: {
          params: {
            feature: "showcase",
            location: "new_showcase",
            page: "showcase_library",
            upsell_name: "showcase_limit"
          },
          paywallTracking: {
            paywallTrigger: "library_showcase_limit_upgrade_button",
            paywallLocation: "showcase_library",
            paywallType: "popup",
            paywallFeature: "showcase"
          }
        },
        onClose: () => _v5.close()
      }) : _v41,
      _v48 = (0, _v25.useDeleteShowcase)({
        onFailure: () => {
          _v4.setIsLoading(!1), _v3({
            content: _v67,
            status: "error"
          });
        },
        onSuccess: ({
          name: _v0,
          uri: _v1
        }) => {
          let _v2;
          _v3({
            content: (_v2 = _v0, (0, _v7.translate)({
              singular: "Deleted {SHOWCASE_NAME}",
              replacements: {
                SHOWCASE_NAME: _v2
              },
              dictionary: {
                es: {
                  singular: "Eliminó {SHOWCASE_NAME}"
                },
                "de-DE": {
                  singular: "Gelöscht {SHOWCASE_NAME}"
                },
                "fr-FR": {
                  singular: "Dossier supprimé {SHOWCASE_NAME}"
                },
                "ja-JP": {
                  singular: "{SHOWCASE_NAME} を削除しました"
                },
                "ko-KR": {
                  singular: "{SHOWCASE_NAME} 폴더 삭제 완료"
                },
                "pt-BR": {
                  singular: "Pasta {SHOWCASE_NAME} excluída"
                },
                "zh-CN": {
                  singular: "删除 {SHOWCASE_NAME}"
                }
              }
            }))
          }), _v27(_v1), _v4.setIsLoading(!1), _v4.close();
        }
      });
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v22.Page, {
        children: (0, _v1.jsxs)(_v22.Page.Main, {
          children: [(0, _v1.jsxs)(_v22.Page.StickyTop, {
            children: [(0, _v1.jsx)(_v21.PageHeader, {
              actions: !!_v32?.canManageTeamCollections && (0, _v1.jsx)(_v90, {
                isDisabled: _v42,
                isLoading: _v42,
                onClick: () => {
                  _v53({
                    teamUser: _v2?.teamUser
                  }), _v47();
                }
              }),
              bottomBar: (0, _v1.jsx)(_v20.FilterSortBar, {
                checkbox: (0, _v1.jsx)(_v24.CheckboxItemCount, {
                  isLoading: _v24 && !_v13 && !_v34,
                  subtitle: !!_v30 && (0, _v7.translate)({
                    count: _v30,
                    singular: "{NUM} showcase",
                    plural: "{NUM} showcases",
                    replacements: {
                      NUM: _v30
                    },
                    dictionary: {
                      es: {
                        singular: "{NUM} presentación",
                        plural: "{NUM} presentaciones"
                      },
                      "de-DE": {
                        singular: "{NUM} Präsentation",
                        plural: "{NUM} Präsentationen"
                      },
                      "fr-FR": {
                        singular: "{NUM} présentation",
                        plural: "{NUM} présentations"
                      },
                      "ja-JP": {
                        singular: "{NUM} 件のショーケース",
                        plural: "{NUM} ショーケース"
                      },
                      "ko-KR": {
                        singular: "쇼케이스 {NUM}개",
                        plural: "쇼케이스 {NUM}개"
                      },
                      "pt-BR": {
                        singular: "{NUM} vitrine",
                        plural: "{NUM} vitrines"
                      },
                      "zh-CN": {
                        singular: "{NUM} 个橱窗",
                        plural: "{NUM} 个橱窗"
                      }
                    }
                  })
                }),
                shouldHideViewControls: _v33 && !_v34,
                layout: _v9,
                setLayout: _v10,
                sort: _v11,
                setSort: _v12,
                sortOptions: _v23.SHOWCASES_SORT_OPTIONS,
                searchElement: _v8 ? (0, _v1.jsx)(_v124, {
                  searchQuery: _v13,
                  onSearchChange: _v14
                }) : void 0
              }),
              title: (0, _v7.translate)({
                singular: "Showcases",
                dictionary: {
                  es: {
                    singular: "Presentaciones"
                  },
                  "de-DE": {
                    singular: "Präsentationen"
                  },
                  "fr-FR": {
                    singular: "Présentations"
                  },
                  "ja-JP": {
                    singular: "ショーケース"
                  },
                  "ko-KR": {
                    singular: "쇼케이스"
                  },
                  "pt-BR": {
                    singular: "Vitrines"
                  },
                  "zh-CN": {
                    singular: "橱窗"
                  }
                }
              })
            }), "LIST_LAYOUT" === _v9 && !_v33 && (0, _v1.jsx)(_v95, {
              sort: _v11
            })]
          }), _v33 && _v34 ? (0, _v1.jsx)(_v4.Flex, {
            alignItems: "center",
            justifyContent: "center",
            paddingY: "3xl",
            children: (0, _v1.jsx)(_v5.Text, {
              color: "text-secondary",
              children: _v80
            })
          }) : _v33 ? (0, _v1.jsx)(_v82, {
            isCreatingShowcase: _v42,
            onCreateShowcase: _v47,
            onLearnMore: () => {
              _v6.open({
                onDismiss: () => {
                  _v6.close();
                },
                videoId: 0
              });
            }
          }) : (0, _v1.jsx)(_v118, {
            layout: _v9,
            setLayout: _v10,
            isLoading: _v25,
            onCopyEmbed: _v0 => {
              (0, _v12.default)(_v0) ? _v3({
                content: _v63
              }) : _v3({
                content: _v67,
                status: "error"
              });
            },
            onCopyLink: _v0 => {
              let _v1 = _v21(_v23.PAGE.SHOWCASES);
              (0, _v12.default)(`${_v0}${_v1}`) ? _v3({
                content: _v69
              }) : _v3({
                content: _v67,
                status: "error"
              });
            },
            isMenuDisabled: _v44,
            onCopyShowcase: _v45,
            onDelete: _v0 => {
              _v4.open({
                onConfirm: () => {
                  _v4.setIsLoading(!0), _v48(_v0), _v20({
                    eventName: _v44,
                    version: 110,
                    fields: {},
                    defaultEventFields: {
                      click_type: _v46,
                      copy: "delete",
                      device_type: (0, _v41.getDeviceType)(),
                      feature: _v43,
                      location: "delete_modal",
                      name: "confirm_delete_showcase",
                      page: _v42,
                      path: window.location.pathname,
                      target: "delete",
                      target_path: null,
                      third_party_integration: null,
                      type: _v45
                    },
                    globalAnalyticsToInclude: ["page", "path"]
                  });
                },
                onDismiss: () => {
                  _v4.close();
                },
                name: _v0.name
              });
            },
            sort: _v11,
            showcases: _v29
          }), !_v23 && !_v25 && (0, _v1.jsx)(_v87, {
            isLoading: !!_v25,
            onClick: _v26
          })]
        })
      }), (0, _v1.jsx)(_v29.NameInputModal, {
        isOpen: !!_v16,
        isLoading: _v44,
        title: _v70,
        name: _v18,
        maxLength: _v31.SHOWCASE_TITLE_MAX_LENGTH,
        onClose: _v38,
        onNameChange: _v19,
        onSubmit: _v46
      })]
    });
  }
  var _v127 = _v0.i(0),
    _v128 = _v0.i(0),
    _v129 = _v0.i(0),
    _v130 = _v0.i(0),
    _v131 = _v0.i(0);
  let _v132 = ({
    playerAssetUrls: _v0
  }) => (0, _v1.jsx)(_v127.PlayerContextProvider, {
    assetUrls: _v0 ?? {
      barebone_js: "",
      chromeless_css: "",
      chromeless_js: "",
      css: "",
      js: "",
      player_url: ""
    },
    type: _v128.PlayerType.VimeoPlayer,
    children: (0, _v1.jsx)(_v131.VideoModalContextProvider, {
      children: (0, _v1.jsx)(_v126, {})
    })
  });
  _v132.getLayout = (_v0, _v1) => (0, _v1.jsx)(_v130.VideoLibraryLayout, {
    hasSideNav: !0,
    hasUploader: _v1.hasUploader,
    sideNavContent: (0, _v1.jsx)(_v129.HomeSideNavContent, {}),
    children: _v0
  }), (0, _v2.withPageSetup)(() => ({
    props: {
      hasThemeSupport: !0,
      hasUploader: !0
    }
  }), {
    requireLogin: !0,
    capability: "canManageTeamCollections"
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v132], 0);
}