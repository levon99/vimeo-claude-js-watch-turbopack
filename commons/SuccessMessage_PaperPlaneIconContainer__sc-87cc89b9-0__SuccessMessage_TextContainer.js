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
    _v11 = _v0.i(0);
  let _v12 = _v3.default.div.withConfig({
      displayName: "SuccessMessage__PaperPlaneIconContainer",
      componentId: "sc-87cc89b9-0"
    })`
  align-items: center;
  background-color: ${(0, _v6.green)(50)};
  border-radius: 100%;
  display: flex;
  height: ${(0, _v2.rem)(82)};
  justify-content: center;
  margin: auto;
  width: ${(0, _v2.rem)(82)};

  svg {
    // Margin right is added here to visually center the icon. The actual center
    // for the paper plane icon is different and skews heavily to the right.
    height: auto;
    margin-right: ${(0, _v2.rem)(10)};
    width: ${(0, _v2.rem)(42)};
  }

  path {
    fill: ${(0, _v6.green)(350)};
  }
}`,
    _v13 = _v3.default.div.withConfig({
      displayName: "SuccessMessage__TextContainer",
      componentId: "sc-87cc89b9-1"
    })`
  max-width: ${_v0 => _v0?.textContainerMaxWidth || (0, _v2.rem)(376)};
  margin: auto;
`,
    _v14 = (0, _v3.default)(_v10.Text).withConfig({
      displayName: "SuccessMessage__ThankYouText",
      componentId: "sc-87cc89b9-2"
    })`
  display: block;
  font-weight: ${_v0 => _v0?.thankYouTextFontWeight || "500"};
  margin: ${_v0 => _v0?.topSpacing ? _v0?.topSpacing : (0, _v2.rem)(40)} auto ${(0, _v2.rem)(8)};
  ${({
      thankYouTextColor: _v0
    }) => _v0 && _v3.css`
      color: ${_v0};
    `}
`,
    _v15 = (0, _v3.default)(_v7.Button).withConfig({
      displayName: "SuccessMessage__StyledButton",
      componentId: "sc-87cc89b9-3"
    })`
  font-size: ${({
      $buttonFontSize: _v0
    }) => _v0 || (0, _v2.rem)(_v9.core.typography.size(300))};
  margin: ${({
      $buttonTopSpacing: _v0
    }) => _v0 || (0, _v2.rem)(52)} auto;
  border-radius: ${({
      $bottomBorderRadius: _v0
    }) => _v0 || "0.5rem"};
  ${({
      $buttonBgColor: _v0
    }) => _v0 && `background: ${_v0} !important;`}
  ${({
      $buttonColor: _v0
    }) => _v0 && `color: ${_v0} !important;`}
`,
    _v16 = (0, _v3.default)(_v10.Text).withConfig({
      displayName: "SuccessMessage__FriendlyText",
      componentId: "sc-87cc89b9-4"
    })`
  color: ${_v0 => _v0?.friendlyTextColor || _v9.core.color.text(700)};
  display: block;
  line-height: ${(0, _v2.rem)(24)};
  ${({
      friendlyTextFontWeight: _v0
    }) => _v0 && _v3.css`
      font-weight: ${_v0};
    `}
`,
    _v17 = _v3.default.div.withConfig({
      displayName: "SuccessMessage__IconWrapper",
      componentId: "sc-87cc89b9-5"
    })`
  width: ${(0, _v2.rem)(82)};
  height: ${(0, _v2.rem)(82)};
  margin: 0 auto;
  svg {
    width: 100%;
    height: auto;
  }
`;
  var _v18 = (0, _v3.default)("div").withConfig({
    displayName: "SuccessMessage___StyledDiv",
    componentId: "sc-87cc89b9-6"
  })`
        margin-top: ${_v0 => _v0.$_css};
        text-align: center;
      `;
  _v0.s(["default", 0, ({
    icon: _v0,
    iconTopSpacing: _v1,
    topSpacing: _v2,
    buttonTopSpacing: _v3,
    buttonBgColor: _v4,
    buttonColor: _v5,
    bottomBorderRadius: _v6,
    eventName: _v7,
    sendPostMessage: _v8,
    thankYouTextFontWeight: _v9,
    thankYouTextColor: _v10,
    friendlyTextFontWeight: _v11,
    friendlyTextColor: _v12,
    textContainerMaxWidth: _v13,
    buttonFontSize: _v14,
    decodedTrackingParameters: _v15,
    eventVersion: _v16
  }) => {
    let _v17 = (0, _v11.default)();
    return (0, _v1.jsxs)(_v18, {
      $_css: _v1 || (0, _v2.rem)(53),
      children: [_v0 ? (0, _v1.jsx)(_v17, {
        children: _v0
      }) : (0, _v1.jsx)(_v12, {
        children: (0, _v1.jsx)(_v8.PaperPlane, {})
      }), (0, _v1.jsxs)(_v13, {
        textContainerMaxWidth: _v13,
        children: [(0, _v1.jsx)(_v14, {
          element: "span",
          size: 500,
          format: "soft",
          topSpacing: _v2,
          thankYouTextFontWeight: _v9,
          thankYouTextColor: _v10,
          children: (0, _v5.translate)({
            singular: "Thank you for your request!",
            dictionary: {
              es: {
                singular: "¡Gracias por tu pedido!"
              },
              "de-DE": {
                singular: "Vielen Dank für deine Anfrage!"
              },
              "fr-FR": {
                singular: "Merci pour votre demande !"
              },
              "ja-JP": {
                singular: "お問い合わせありがとうございます。"
              },
              "ko-KR": {
                singular: "요청해주셔서 감사합니다!"
              },
              "pt-BR": {
                singular: "Agradecemos o seu pedido!"
              },
              "zh-CN": {
                singular: "感谢您的请求！"
              }
            }
          })
        }), (0, _v1.jsx)(_v16, {
          element: "span",
          size: 300,
          format: "soft",
          friendlyTextFontWeight: _v11,
          friendlyTextColor: _v12,
          children: (0, _v5.translate)({
            singular: "A friendly member of our team will reach out to you shortly to learn more about your video needs.",
            dictionary: {
              es: {
                singular: "Un amable miembro de nuestro equipo se comunicará contigo pronto para obtener más información sobre tus necesidades de video."
              },
              "de-DE": {
                singular: "Ein freundliches Mitglied unseres Teams wird sich in Kürze bei dir melden, um mehr über deine Video-Anforderungen zu erfahren."
              },
              "fr-FR": {
                singular: "Un membre de notre équipe vous contactera sous peu pour en savoir plus sur vos besoins en matière de vidéo."
              },
              "ja-JP": {
                singular: "信頼できるVimeoのチームが、お客様の動画のニーズについてご連絡させていただきます。"
              },
              "ko-KR": {
                singular: "Vimeo팀의 친절한 담당자가 회원님의 동영상 니즈에 관해 자세히 알아보기 위해 곧 연락드릴 것입니다."
              },
              "pt-BR": {
                singular: "Um integrante da nossa equipe entrará em contato com você em breve para saber mais sobre as suas demandas de vídeos."
              },
              "zh-CN": {
                singular: "我们友好的团队成员将很快与您联系，了解您的视频需求。"
              }
            }
          })
        }), (0, _v1.jsx)(_v15, {
          $buttonFontSize: _v14,
          $buttonTopSpacing: _v3,
          $bottomBorderRadius: _v6,
          $buttonBgColor: _v4,
          $buttonColor: _v5,
          format: "primary",
          size: "md",
          variant: "solid",
          onClick: () => {
            if (_v17.current) {
              let _v0 = {
                ..._v15,
                page: window.parent.location.pathname,
                location: "lihp",
                feature: "upgrade_cta"
              };
              "vimeo.upgrade_action" !== _v7 && Object.assign(_v0, {
                target: null,
                name: "close_enterprise_upgrade_form_modal_after_submit",
                copy: null,
                type: "upsell"
              }), _v4.BigPictureClient.sendEvent(new _v4.Event(_v7 || "vimeo.click", _v16 || 32, _v0)), _v8 ? window.parent.postMessage("triggerCloseButtonClick", "*") : _v17.current.click();
            }
          },
          children: (0, _v5.translate)({
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
        })]
      })]
    });
  }]);
}