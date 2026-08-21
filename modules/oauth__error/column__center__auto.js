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
  function _v11() {
    return (0, _v1.jsx)(_v5.Flex, {
      flexDirection: "column",
      alignItems: "center",
      margin: "auto",
      maxWidth: (0, _v7.rem)(800),
      children: (0, _v1.jsxs)(_v6.Box, {
        padding: (0, _v7.rem)(20),
        children: [(0, _v1.jsx)(_v3.Header, {
          size: "lg",
          marginTop: (0, _v7.rem)(12),
          children: (0, _v9.translate)({
            singular: "Uh oh, something went wrong!",
            dictionary: {
              es: {
                singular: "¡Uh! Se produjo un error."
              },
              "de-DE": {
                singular: "Hoppla, es ging etwas schief!"
              },
              "fr-FR": {
                singular: "Oh, oh ! Quelque chose a planté !"
              },
              "ja-JP": {
                singular: "エラーが発生しました！"
              },
              "ko-KR": {
                singular: "죄송합니다, 문제가 발생했습니다!"
              },
              "pt-BR": {
                singular: "Ah não! Alguma coisa deu errado!"
              },
              "zh-CN": {
                singular: "哦，出错了！"
              }
            }
          })
        }), (0, _v1.jsx)(_v4.Paragraph, {
          marginY: (0, _v7.rem)(8),
          children: (0, _v9.translate)({
            singular: "It looks like we're missing some required info, or the info you submitted was invalid. If you go back to the previous page and try again, it may work. If you receive this message again, please contact the app developer.",
            dictionary: {
              es: {
                singular: "Parece que nos falta información obligatoria o la información que nos enviaste no es válida. Si vas a la página anterior y lo vuelves a intentar, puede funcionar. Si vuelves a recibir este mensaje, comunícate con el desarrollador de la aplicación."
              },
              "de-DE": {
                singular: "Offenbar fehlen noch ein paar notwendige Angaben - oder die Infos, die du eingereicht hast, waren ungültig. Bitte gehe zurück zur vorherigen Seite und versuche es erneut - das könnte helfen. Falls diese Meldung nochmals erscheinen sollte, wende dich bitte an den Entwickler der App."
              },
              "fr-FR": {
                singular: "Il semblerait qu'​il nous manque quelques-unes des informations requises ou que les informations que vous avez envoyées soient erronées.​ Si vous retournez à la page précédente et que vous réessayez,​ cela fonctionnera peut-​être.​ Si vous recevez à nouveau ce message,​ veuillez contacter le développeur de l'​application.​"
              },
              "ja-JP": {
                singular: "必要な情報が抜けているか、送信された情報が無効のようです。前のページに戻りもう一度試してください。このメッセージが再び表示される場合は、アプリのデベロッパーにご連絡ください。"
              },
              "ko-KR": {
                singular: "일부 필수 정보가 누락되었거나 제출한 정보가 유효하지 않은 것처럼 보입니다. 이전 페이지로 돌아가 다시 시도해보십시오. 이 메시지가 다시 나타나면 앱 개발자에게 문의하세요."
              },
              "pt-BR": {
                singular: "Parece que estão faltando algumas informações necessárias ou as informações que você enviou não eram válidas. Se você voltar para a página anterior e tentar de novo, deve funcionar. Se você receber esta mensagem novamente, entre em contato com o desenvolvedor do aplicativo."
              },
              "zh-CN": {
                singular: "我们似乎缺少一些必要信息，或者您提交的信息无效。返回上一页重试，可能会恢复正常。如果再次收到此消息，请联系应用程序开发人员。"
              }
            }
          })
        }), (0, _v1.jsx)(_v2.Button, {
          size: "lg",
          onClick: () => {
            window.history.back();
          },
          children: (0, _v9.translate)({
            singular: "Go back",
            dictionary: {
              es: {
                singular: "Volver"
              },
              "de-DE": {
                singular: "Zurück"
              },
              "fr-FR": {
                singular: "Retour"
              },
              "ja-JP": {
                singular: "戻る"
              },
              "ko-KR": {
                singular: "돌아가기"
              },
              "pt-BR": {
                singular: "Voltar"
              },
              "zh-CN": {
                singular: "返回"
              }
            }
          })
        })]
      })
    });
  }
  _v11.getLayout = _v0 => (0, _v1.jsxs)(_v1.Fragment, {
    children: [(0, _v1.jsx)(_v8.DefaultNavigation, {}), _v0, (0, _v1.jsx)(_v10.StandardFooterLayout, {})]
  }), _v0.s(["__N_SSG", 0, !0, "default", 0, _v11], 0);
}