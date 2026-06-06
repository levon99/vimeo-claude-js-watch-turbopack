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
  _v0.s(["CreateReviewLinkModal", 0, ({
    isOpen: _v0,
    resourceId: _v1,
    resourceType: _v2,
    resourceName: _v3,
    onCancel: _v4,
    onSubmit: _v5,
    onClose: _v6,
    reviewLinkData: _v7,
    reviewLinkModalMode: _v8,
    inlineShareFlow: _v9 = !1
  }) => (0, _v1.jsx)(_v2.Modal, {
    isOpen: _v0,
    onClose: _v6,
    children: (0, _v1.jsx)(_v6.ModalOverlay, {
      children: (0, _v1.jsxs)(_v4.ModalContent, {
        width: (0, _v7.rem)(480),
        maxW: (0, _v7.rem)(480),
        children: [(0, _v1.jsx)(_v5.ModalHeader, {
          pt: "md",
          pb: "lg",
          paddingX: "lg",
          children: (0, _v1.jsx)(_v8.Text, {
            variant: "heading-md",
            color: "text-primary",
            children: "edit" === _v8 ? (0, _v9.translate)({
              singular: "Manage review link",
              dictionary: {
                es: {
                  singular: "Administrar enlace de revisión"
                },
                "de-DE": {
                  singular: "Review-Link verwalten"
                },
                "fr-FR": {
                  singular: "Gérer le lien de révision"
                },
                "ja-JP": {
                  singular: "レビューリンクを管理"
                },
                "ko-KR": {
                  singular: "리뷰 링크 관리"
                },
                "pt-BR": {
                  singular: "Gerenciar link de revisão"
                },
                "zh-CN": {
                  singular: "管理审阅链接"
                }
              }
            }) : (0, _v9.translate)({
              singular: "Create review link",
              dictionary: {
                es: {
                  singular: "Cree un enlace de revisión"
                },
                "de-DE": {
                  singular: "Review-Link erstellen"
                },
                "fr-FR": {
                  singular: "Créer un lien de révision"
                },
                "ja-JP": {
                  singular: "レビューリンクを作成"
                },
                "ko-KR": {
                  singular: "리뷰 링크 생성"
                },
                "pt-BR": {
                  singular: "Criar link de revisão"
                },
                "zh-CN": {
                  singular: "创建评论链接"
                }
              }
            })
          })
        }), (0, _v1.jsxs)(_v3.ModalBody, {
          px: "0px",
          pt: "0px",
          pb: "md",
          children: [_v9 && (0, _v1.jsx)(_v8.Text, {
            variant: "body-md",
            color: "text-secondary",
            paddingX: "lg",
            pb: "md",
            children: (0, _v9.translate)({
              singular: "Share a Review link to gather time-coded comments and keep feedback connected to the video.",
              dictionary: {
                es: {
                  singular: "Comparte un enlace de revisión para recopilar comentarios con marcas de tiempo y mantener la retroalimentación vinculada al vídeo."
                },
                "de-DE": {
                  singular: "Teilen Sie einen Review-Link, um zeitcodierte Kommentare zu sammeln und Feedback mit dem Video zu verknüpfen."
                },
                "fr-FR": {
                  singular: "Partagez un lien de revue pour recueillir des commentaires horodatés et garder les retours liés à la vidéo."
                },
                "ja-JP": {
                  singular: "レビューリンクを共有して、タイムコード付きコメントを収集し、フィードバックを動画に紐付けたままにできます。"
                },
                "ko-KR": {
                  singular: "검토 링크를 공유하여 타임코드가 있는 댓글을 수집하고 피드백을 동영상에 연결된 상태로 유지하세요."
                },
                "pt-BR": {
                  singular: "Compartilhe um link de revisão para reunir comentários com marcação de tempo e manter o feedback vinculado ao vídeo."
                },
                "zh-CN": {
                  singular: "分享审阅链接以收集带时间码的评论，并将反馈与视频保持关联。"
                }
              }
            })
          }), (0, _v1.jsx)(_v10.ReviewLinkForm, {
            resourceId: _v1,
            resourceType: _v2,
            resourceName: _v3,
            onCancel: _v4,
            onSubmit: _v5,
            mode: _v8 ?? "create",
            data: _v7,
            inlineShareFlow: _v9
          })]
        })]
      })
    })
  })]);
}