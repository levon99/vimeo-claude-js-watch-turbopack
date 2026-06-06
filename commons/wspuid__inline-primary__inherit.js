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
    _v13 = _v0.i(0);
  let _v14 = "wspuid",
    _v15 = {
      variant: "inline-primary",
      fontSize: "inherit",
      cursor: "pointer"
    };
  _v0.s(["CreateAutoReviewLinksModal", 0, ({
    isOpen: _v0,
    onClose: _v1,
    onConfirm: _v2,
    isLoading: _v3
  }) => {
    let {
      isWorkspaceUser: _v4
    } = (() => {
      let {
        data: _v0
      } = (0, _v13.useGetMePreferences)({
        select: [_v14]
      }, {
        revalidateOnFocus: !1,
        revalidateIfStale: !1
      });
      return {
        isWorkspaceUser: !!_v0?.[_v14]
      };
    })();
    return (0, _v1.jsxs)(_v5.Modal, {
      isOpen: _v0,
      onClose: _v1,
      size: "md",
      children: [(0, _v1.jsx)(_v10.ModalOverlay, {}), (0, _v1.jsxs)(_v7.ModalContent, {
        children: [(0, _v1.jsx)(_v9.ModalHeader, {
          children: (0, _v1.jsxs)(_v3.Header, {
            size: "md",
            children: [" ", (0, _v12.translate)({
              singular: "Create review links automatically",
              dictionary: {
                es: {
                  singular: "Crear enlaces de revisión automáticamente"
                },
                "de-DE": {
                  singular: "Automatische Erstellung von Review-Links"
                },
                "fr-FR": {
                  singular: "Créez automatiquement des liens de révision"
                },
                "ja-JP": {
                  singular: "レビューリンクを自動作成"
                },
                "ko-KR": {
                  singular: "리뷰 링크 자동 생성"
                },
                "pt-BR": {
                  singular: "Criar links de revisão automaticamente"
                },
                "zh-CN": {
                  singular: "自动创建审阅链接"
                }
              }
            })]
          })
        }), (0, _v1.jsx)(_v6.ModalBody, {
          paddingBottom: "md",
          children: (0, _v1.jsx)(_v11.Text, {
            variant: "body-md",
            children: (0, _v12.translate)({
              singular: "Turn on this setting to automatically generate a review link for every new video. You can always update this setting in {LINK}upload defaults{/LINK}. Links will expire after 30 days.",
              replacements: {
                LINK: _v0 => (0, _v1.jsx)(_v4.Link, {
                  ..._v15,
                  href: _v4 ? "/manage/workspace/basics" : "/settings/videos/upload_defaults",
                  children: _v0
                })
              },
              dictionary: {
                es: {
                  singular: "Active esta configuración para generar automáticamente un enlace de revisión para cada video nuevo. Siempre puede actualizar esta configuración en {LINK}Configuración predeterminada de subidas{/LINK}. Los enlaces caducarán después de 30 días."
                },
                "de-DE": {
                  singular: "Aktivieren Sie diese Einstellung, um automatisch einen Review-Link für jedes neue Video zu generieren. Sie können diese Einstellung jederzeit in den {LINK}Upload-Standardeinstellungen{/LINK} aktualisieren. Links verfallen nach 30 Tagen."
                },
                "fr-FR": {
                  singular: "Activez ce paramètre pour générer automatiquement un lien de révision pour chaque nouvelle vidéo. Vous pouvez toujours le mettre à jour dans les {LINK}paramètres de mise en ligne par défaut{/LINK}. Les liens expireront au bout de 30 jours."
                },
                "ja-JP": {
                  singular: "すべての新しい動画にレビューリンクを自動生成するには、この設定をオンにします。この設定はいつでも{LINK}アップロードのデフォルト{/LINK}で更新できます。リンクは30日後に有効期限が切れます。"
                },
                "ko-KR": {
                  singular: "이 설정을 활성화하면 새 동영상마다 자동으로 리뷰 링크가 생성됩니다. 이 설정은 언제든지 {LINK}업로드 기본 설정{/LINK}에서 업데이트할 수 있습니다. 링크는 30일 후 만료됩니다."
                },
                "pt-BR": {
                  singular: "Ative esta opção para gerar automaticamente um link de revisão para cada novo vídeo. Você pode alterar essa configuração a qualquer momento em {LINK}configurações de upload{/LINK}. Os links expiram após 30 dias."
                },
                "zh-CN": {
                  singular: "启用此设置以自动为每个新视频生成审阅链接。您可以随时在{LINK}上传默认设置{/LINK}中更新此设置。链接将在 30 天后过期。"
                }
              }
            })
          })
        }), (0, _v1.jsxs)(_v8.ModalFooter, {
          children: [(0, _v1.jsx)(_v2.Button, {
            variant: "tertiary",
            onClick: _v1,
            children: (0, _v12.translate)({
              singular: "Not now",
              dictionary: {
                es: {
                  singular: "Ahora no"
                },
                "de-DE": {
                  singular: "Nicht jetzt"
                },
                "fr-FR": {
                  singular: "Plus tard"
                },
                "ja-JP": {
                  singular: "後でする"
                },
                "ko-KR": {
                  singular: "나중에"
                },
                "pt-BR": {
                  singular: "Agora não"
                },
                "zh-CN": {
                  singular: "现在不行"
                }
              }
            })
          }), (0, _v1.jsx)(_v2.Button, {
            variant: "primary",
            onClick: _v2,
            isLoading: _v3,
            children: (0, _v12.translate)({
              singular: "Turn on setting",
              dictionary: {
                es: {
                  singular: "Activar la configuración"
                },
                "de-DE": {
                  singular: "Einstellung aktivieren"
                },
                "fr-FR": {
                  singular: "Activer le paramètre"
                },
                "ja-JP": {
                  singular: "設定をオンにする"
                },
                "ko-KR": {
                  singular: "설정 켜기"
                },
                "pt-BR": {
                  singular: "Ativar configuração"
                },
                "zh-CN": {
                  singular: "启用该设置"
                }
              }
            })
          })]
        })]
      })]
    });
  }], 0);
}