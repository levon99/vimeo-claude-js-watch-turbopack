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
    _v10 = _v0.i(0);
  let _v11 = () => (0, _v1.jsx)(_v2.Box, {
    w: "100%",
    sx: {
      aspectRatio: "612 / 306"
    },
    borderRadius: "xl",
    overflow: "hidden",
    children: (0, _v1.jsx)("iframe", {
      src: "https://player.vimeo.com/video/1203448446?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&controls=0",
      allow: "autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share",
      referrerPolicy: "strict-origin-when-cross-origin",
      title: (0, _v10.translate)({
        singular: "Review preview",
        dictionary: {
          es: {
            singular: "Vista previa de revisión"
          },
          "de-DE": {
            singular: "Review-Vorschau"
          },
          "fr-FR": {
            singular: "Aperçu de la révision"
          },
          "ja-JP": {
            singular: "レビューのプレビュー"
          },
          "ko-KR": {
            singular: "리뷰 미리보기"
          },
          "pt-BR": {
            singular: "Pré-visualização da revisão"
          },
          "zh-CN": {
            singular: "审阅预览"
          }
        }
      }),
      style: {
        width: "100%",
        height: "100%",
        border: "none",
        display: "block"
      }
    })
  });
  _v0.s(["ShareForFeedbackModal", 0, ({
    isOpen: _v0,
    onClose: _v1,
    onCopyReviewLink: _v2,
    onCopyRegularLink: _v3,
    isCopyReviewLinkDisabled: _v4 = !1
  }) => (0, _v1.jsxs)(_v5.Modal, {
    isOpen: _v0,
    onClose: _v1,
    children: [(0, _v1.jsx)(_v7.ModalOverlay, {}), (0, _v1.jsxs)(_v6.ModalContent, {
      maxW: (0, _v9.rem)(480),
      borderRadius: (0, _v9.rem)(24),
      overflow: "hidden",
      pt: "md",
      children: [(0, _v1.jsx)(_v4.Flex, {
        flexDirection: "column",
        alignItems: "center",
        px: "lg",
        children: (0, _v1.jsxs)(_v4.Flex, {
          flexDirection: "column",
          alignItems: "center",
          gap: "2xl",
          py: "lg",
          w: "100%",
          children: [(0, _v1.jsxs)(_v4.Flex, {
            flexDirection: "column",
            alignItems: "center",
            gap: "md",
            w: "100%",
            children: [(0, _v1.jsx)(_v8.Text, {
              variant: "heading-xl",
              color: "text-primary",
              textAlign: "center",
              children: (0, _v10.translate)({
                singular: "Sharing for feedback?",
                dictionary: {
                  es: {
                    singular: "¿Compartes para recibir comentarios?"
                  },
                  "de-DE": {
                    singular: "Zum Teilen für Feedback?"
                  },
                  "fr-FR": {
                    singular: "Partager pour obtenir des retours ?"
                  },
                  "ja-JP": {
                    singular: "フィードバック用に共有しますか？"
                  },
                  "ko-KR": {
                    singular: "피드백을 위한 공유인가요?"
                  },
                  "pt-BR": {
                    singular: "Compartilhando para receber feedback?"
                  },
                  "zh-CN": {
                    singular: "分享以获取反馈？"
                  }
                }
              })
            }), (0, _v1.jsx)(_v8.Text, {
              variant: "heading-sm",
              color: "text-secondary",
              textAlign: "center",
              children: (0, _v10.translate)({
                singular: "Review links let everyone leave time-stamped comments directly on the video. No more email threads.",
                dictionary: {
                  es: {
                    singular: "Los enlaces de revisión permiten que todos dejen comentarios con marcas de tiempo directamente en el vídeo. No más hilos de correo electrónico."
                  },
                  "de-DE": {
                    singular: "Review-Links ermöglichen es allen, zeitmarkierte Kommentare direkt im Video zu hinterlassen. Keine E-Mail-Verläufe mehr."
                  },
                  "fr-FR": {
                    singular: "Les liens de révision permettent à chacun de laisser des commentaires horodatés directement sur la vidéo. Fini les fils d'e-mails."
                  },
                  "ja-JP": {
                    singular: "レビューリンクを使えば、誰でも動画にタイムスタンプ付きのコメントを直接残せます。メールのやり取りはもう不要です。"
                  },
                  "ko-KR": {
                    singular: "리뷰 링크를 통해 누구나 비디오에 타임스탬프가 포함된 댓글을 직접 남길 수 있습니다. 더 이상 이메일 스레드가 필요하지 않습니다."
                  },
                  "pt-BR": {
                    singular: "Os links de revisão permitem que todos deixem comentários com carimbo de tempo diretamente no vídeo. Chega de longas trocas de e-mail."
                  },
                  "zh-CN": {
                    singular: "审阅链接允许每个人直接在视频上留下带时间戳的评论。无需再通过电子邮件往来。"
                  }
                }
              })
            })]
          }), (0, _v1.jsx)(_v11, {})]
        })
      }), (0, _v1.jsx)(_v4.Flex, {
        flexDirection: "column",
        alignItems: "center",
        pt: "lg",
        pb: "xl",
        px: "lg",
        w: "100%",
        children: (0, _v1.jsxs)(_v4.Flex, {
          flexDirection: "column",
          gap: "sm",
          w: "100%",
          children: [(0, _v1.jsx)(_v3.Button, {
            variant: "primary",
            size: "lg",
            w: "100%",
            isDisabled: _v4,
            onClick: _v2,
            children: (0, _v10.translate)({
              singular: "Copy review link",
              dictionary: {
                es: {
                  singular: "Copiar enlace de revisión"
                },
                "de-DE": {
                  singular: "Review-Link kopieren"
                },
                "fr-FR": {
                  singular: "Copier le lien de révision"
                },
                "ja-JP": {
                  singular: "レビューリンクをコピー"
                },
                "ko-KR": {
                  singular: "검토 링크 복사"
                },
                "pt-BR": {
                  singular: "Copiar link de revisão"
                },
                "zh-CN": {
                  singular: "复制审阅链接"
                }
              }
            })
          }), (0, _v1.jsx)(_v3.Button, {
            variant: "tertiary",
            size: "lg",
            w: "100%",
            onClick: _v3,
            children: (0, _v10.translate)({
              singular: "Copy regular link",
              dictionary: {
                es: {
                  singular: "Copiar enlace normal"
                },
                "de-DE": {
                  singular: "Regulären Link kopieren"
                },
                "fr-FR": {
                  singular: "Copier le lien standard"
                },
                "ja-JP": {
                  singular: "通常のリンクをコピー"
                },
                "ko-KR": {
                  singular: "일반 링크 복사"
                },
                "pt-BR": {
                  singular: "Copiar link normal"
                },
                "zh-CN": {
                  singular: "复制常规链接"
                }
              }
            })
          })]
        })
      })]
    })]
  })], 0);
  var _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0);
  let _v18 = "review_link_opened_video_ids";
  _v0.s(["useCopyReviewLink", 0, (_v0, _v1, _v2) => {
    let _v3 = (0, _v16.useReviewLinkCopiedToast)(),
      {
        trackReviewLinksCopied: _v4
      } = (0, _v13.useDistributionTracking)(),
      _v5 = (0, _v12.useCallback)(_v0 => {
        _v3(), _v4({
          clipId: String(_v0),
          reviewId: (0, _v14.reviewIdFromUri)(_v0) ?? "",
          surface: "share_view"
        }), _v2?.(), function (_v0) {
          try {
            let _v0 = localStorage.getItem(_v18),
              _v1 = _v0 ? JSON.parse(_v0) : [],
              _v2 = Array.isArray(_v1) ? _v1.filter(_v0 => "number" == typeof _v0) : [],
              _v3 = _v2.indexOf(_v0),
              _v4 = -1 !== _v3;
            return _v4 && _v2.splice(_v3, 1), _v2.unshift(_v0), localStorage.setItem(_v18, JSON.stringify(_v2.slice(0, 50))), !_v4;
          } catch {
            return !0;
          }
        }(_v0) && window.open((0, _v14.getVideoReviewPageUrl)(_v0, _v0), "_blank");
      }, [_v3, _v4, _v2, _v0]),
      _v6 = (0, _v15.useCreateAndCopyVideoReviewLink)((0, _v12.useCallback)((_v0, _v1) => _v5(_v1), [_v5]));
    return (0, _v12.useCallback)(_v0 => {
      if (_v0) {
        (0, _v17.default)((0, _v14.getVideoReviewPageUrl)(_v0, _v0)), _v5(_v0);
        return;
      }
      _v6(_v0, _v1);
    }, [_v6, _v5, _v0, _v1]);
  }], 0);
  var _v19 = _v0.i(0);
  _v0.s(["useReviewLinkPromptSeen", 0, () => {
    let [_v0, _v1] = (0, _v19.default)("review_link_prompt_seen", !1);
    return {
      hasSeenReviewLinkPrompt: _v0,
      markReviewLinkPromptSeen: (0, _v12.useCallback)(() => _v1(!0), [_v1])
    };
  }], 0);
}