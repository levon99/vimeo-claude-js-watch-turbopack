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
    _v12 = _v0.i(0);
  _v0.s(["LiveTrialBlockModal", 0, function ({
    isOpen: _v0,
    onClose: _v1
  }) {
    return (0, _v1.jsxs)(_v3.Modal, {
      isOpen: _v0,
      onClose: _v1,
      children: [(0, _v1.jsx)(_v11.ModalOverlay, {}), (0, _v1.jsxs)(_v4.ModalContent, {
        width: (0, _v2.rem)(368),
        children: [(0, _v1.jsx)(_v5.ModalHeader, {
          paddingTop: (0, _v2.rem)(24),
          children: (0, _v1.jsx)(_v9.Header, {
            size: "md",
            children: (0, _v12.translate)({
              singular: "Live streaming is available on paid Advanced",
              dictionary: {
                es: {
                  singular: "La transmisión en vivo está disponible en Advanced de pago"
                },
                "de-DE": {
                  singular: "Live-Streaming ist im kostenpflichtigen Advanced-Abonnement verfügbar"
                },
                "fr-FR": {
                  singular: "La diffusion en direct est disponible sur Advanced payant"
                },
                "ja-JP": {
                  singular: "ライブ配信は有料のAdvancedで利用可能です。"
                },
                "ko-KR": {
                  singular: "유료 Advanced에서 라이브 스트리밍을 이용할 수 있습니다"
                },
                "pt-BR": {
                  singular: "A transmissão ao vivo está disponível no Advanced pago"
                },
                "zh-CN": {
                  singular: "付费 Advanced 可使用直播功能"
                }
              }
            })
          })
        }), (0, _v1.jsx)(_v6.ModalBody, {
          children: (0, _v1.jsx)(_v10.Paragraph, {
            size: "md",
            marginBottom: (0, _v2.rem)(8),
            children: (0, _v12.translate)({
              singular: "Live streaming becomes available when your free trial converts to paid Advanced.",
              dictionary: {
                es: {
                  singular: "La transmisión en vivo estará disponible cuando su prueba gratuita se convierta en Advanced de pago."
                },
                "de-DE": {
                  singular: "Live-Streaming ist verfügbar, sobald Ihre kostenlose Testversion in ein kostenpflichtiges Advanced-Abonnement umgewandelt wird."
                },
                "fr-FR": {
                  singular: "La diffusion en direct devient disponible lorsque votre période d’essai gratuite est convertie en Advanced payant."
                },
                "ja-JP": {
                  singular: "無料トライアルが有料のAdvancedに切り替わると、ライブ配信が利用可能になります。"
                },
                "ko-KR": {
                  singular: "무료 체험이 유료 Advanced로 전환되면 라이브 스트리밍을 이용할 수 있습니다."
                },
                "pt-BR": {
                  singular: "A transmissão ao vivo fica disponível quando sua avaliação gratuita for convertida para o Advanced pago."
                },
                "zh-CN": {
                  singular: "当您的免费试用升级为付费 Advanced 后，即可使用直播功能。"
                }
              }
            })
          })
        }), (0, _v1.jsx)(_v7.ModalFooter, {
          paddingBottom: (0, _v2.rem)(24),
          children: (0, _v1.jsx)(_v8.Button, {
            variant: "primary",
            onClick: _v1,
            children: (0, _v12.translate)({
              singular: "Got it",
              dictionary: {
                es: {
                  singular: "Entendido"
                },
                "de-DE": {
                  singular: "Alles klar"
                },
                "fr-FR": {
                  singular: "J'ai compris"
                },
                "ja-JP": {
                  singular: "了解"
                },
                "ko-KR": {
                  singular: "확인"
                },
                "pt-BR": {
                  singular: "Entendi"
                },
                "zh-CN": {
                  singular: "明白"
                }
              }
            })
          })
        })]
      })]
    });
  }]);
}