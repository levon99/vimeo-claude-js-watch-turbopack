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
  _v0.s(["Header", 0, () => (0, _v1.jsx)(_v2.Box, {
    paddingBottom: 30,
    children: (0, _v1.jsxs)(_v3.Flex, {
      justifyContent: "space-between",
      shrink: 0,
      direction: "column",
      children: [(0, _v1.jsx)(_v4.Header, {
        fontSize: (0, _v6.rem)(30),
        fontWeight: "medium",
        lineHeight: (0, _v6.rem)(36),
        children: _v10.default.Registration
      }), (0, _v1.jsx)(_v2.Box, {
        marginTop: "sm",
        children: (0, _v1.jsx)(_v7.Text, {
          color: "text-secondary",
          variant: "body-md",
          children: (0, _v8.translate)({
            singular: "Registration forms collect viewer information, like email addresses, during videos or events. {LINK}Learn how to add registration{/LINK}",
            replacements: {
              LINK: _v0 => (0, _v1.jsx)(_v5.Link, {
                variant: "inline-secondary",
                fontSize: "body-md",
                target: "_blank",
                href: _v9.MANAGE_REG_LINK,
                children: _v0
              })
            },
            dictionary: {
              es: {
                singular: "Los formularios de inscripción recopilan información del espectador, como direcciones de correo electrónico, durante videos o eventos. {LINK}Aprenda a agregar la inscripción.{/LINK}"
              },
              "de-DE": {
                singular: "Registrierungsformulare sammeln während Videos oder Events Informationen über die Zuschauenden, wie z. B. E-Mail-Adressen. {LINK}Hier erfahren Sie, wie Sie die Registrierung hinzufügen{/LINK}"
              },
              "fr-FR": {
                singular: "Les formulaires d'inscription recueillent des informations sur les spectateurs, comme les adresses e-mail, pendant les vidéos ou les événements. {LINK}Découvrez comment ajouter l'inscription{/LINK}"
              },
              "ja-JP": {
                singular: "登録フォームでは動画やイベント中にメールアドレスなどの視聴者情報が収集されます。{LINK}登録の追加方法はこちら{/LINK}"
              },
              "ko-KR": {
                singular: "등록 양식은 동영상이나 이벤트 중에 이메일 주소와 같은 뷰어 정보를 수집합니다. {LINK}등록을 추가하는 방법을 알아보세요{/LINK}."
              },
              "pt-BR": {
                singular: "Os formulários de inscrição coletam informações do espectador, como endereço de e-mail, durante vídeos ou eventos. {LINK}Saiba como adicionar a inscrição{/LINK}"
              },
              "zh-CN": {
                singular: "注册表单会在视频或活动期间收集观众信息，例如电子邮件地址。{LINK}了解如何添加注册{/LINK}"
              }
            }
          })
        })
      })]
    })
  })], 0);
  var _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0);
  _v0.s(["RegistrationInfo", 0, () => {
    let [_v0, _v1] = (0, _v11.useState)(!1);
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsxs)(_v13.Card, {
        padding: "xl",
        marginBottom: "xl",
        children: [(0, _v1.jsx)(_v7.Text, {
          variant: "heading-md",
          fontSize: (0, _v6.rem)(20),
          children: _v10.default.Preferences
        }), (0, _v1.jsx)(_v14.Divider, {
          borderColor: "stroke",
          marginY: "200"
        }), (0, _v1.jsxs)(_v3.Flex, {
          justifyContent: "space-between",
          alignItems: "center",
          children: [(0, _v1.jsxs)(_v7.Text, {
            color: "text-secondary",
            variant: "body-md",
            marginTop: "sm",
            children: [(0, _v1.jsx)(_v4.Header, {
              size: "sm",
              children: _v10.default.ExportAllData
            }), _v10.default.RegExportDesc]
          }), (0, _v1.jsx)(_v12.Button, {
            variant: "secondary",
            leftIcon: (0, _v1.jsx)(_v15.FileExport, {}),
            marginTop: "md",
            marginLeft: "md",
            onClick: () => _v1(!0),
            fontWeight: "medium",
            children: _v10.default.ExportData
          })]
        })]
      }), (0, _v1.jsx)(_v16.DownloadRegistrantModal, {
        isOpen: _v0,
        onClose: () => _v1(!1)
      })]
    });
  }], 0);
}