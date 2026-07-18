{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  _v0.s(["showRegistrationRequiredToast", 0, function ({
    toast: _v0,
    router: _v1,
    managePath: _v2
  }) {
    _v0({
      id: "registration-required-toast",
      duration: null,
      isClosable: !0,
      position: "bottom-right",
      render: _v0 => (0, _v1.jsxs)(_v3.ToastRoot, {
        ..._v0,
        variant: "warning",
        bg: "status-destructive-secondary",
        children: [(0, _v1.jsx)(_v3.ToastIcon, {
          color: "status-destructive-primary"
        }), (0, _v1.jsxs)(_v2.Center, {
          gap: "sm",
          children: [(0, _v1.jsx)(_v3.ToastTitle, {
            children: (0, _v4.translate)({
              singular: "This video needs an approved registration preset to be shared.",
              dictionary: {
                es: {
                  singular: "Este vídeo necesita un preset de registro aprobado para poder compartirse."
                },
                "de-DE": {
                  singular: "Dieses Video benötigt eine genehmigte Registrierungsvoreinstellung, damit es geteilt werden kann."
                },
                "fr-FR": {
                  singular: "Cette vidéo nécessite un préréglage d’enregistrement approuvé pour être partagée."
                },
                "ja-JP": {
                  singular: "この動画を共有するには、承認された登録プリセットが必要です。"
                },
                "ko-KR": {
                  singular: "이 동영상을 공유하려면 승인된 등록 프리셋이 필요합니다."
                },
                "pt-BR": {
                  singular: "Este vídeo precisa de uma predefinição de registro aprovada para ser compartilhado."
                },
                "zh-CN": {
                  singular: "此视频需要一个经批准的注册预设才能被共享。"
                }
              }
            })
          }), _v2 && (0, _v1.jsx)(_v3.ToastButton, {
            bg: "fill-surface",
            color: "text-primary",
            fontWeight: "medium",
            _hover: {
              bg: "fill-component"
            },
            onClick: () => {
              _v0.closeAll(), _v1.push(`${_v2}/registration`);
            },
            children: (0, _v4.translate)({
              singular: "Add",
              dictionary: {
                es: {
                  singular: "Agregar"
                },
                "de-DE": {
                  singular: "Hinzufügen"
                },
                "fr-FR": {
                  singular: "Ajouter"
                },
                "ja-JP": {
                  singular: "追加"
                },
                "ko-KR": {
                  singular: "추가"
                },
                "pt-BR": {
                  singular: "Adicionar"
                },
                "zh-CN": {
                  singular: "添加"
                }
              }
            })
          })]
        })]
      })
    });
  }]);
}