{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  _v0.s(["LibrariesNowOneModal", 0, ({
    isOpen: _v0,
    onClose: _v1,
    onGoToLibrary: _v2
  }) => {
    let {
      trackLibraryNowOneAnnouncementDisplayed: _v3,
      trackLibraryNowOneAnnouncementCtaClicked: _v4,
      trackLibraryNowOneAnnouncementDismissed: _v5
    } = (0, _v5.useContentSpaceTracking)();
    return (0, _v6.usePicoEffect)(() => {
      _v0 && _v3();
    }, [_v0]), (0, _v1.jsx)(_v7.LibraryMergeModal, {
      isOpen: _v0,
      onClose: () => {
        _v5(), _v1();
      },
      testId: "libraries-now-one-modal",
      title: (0, _v4.translate)({
        singular: "Your two libraries are now one!",
        dictionary: {
          es: {
            singular: "¡Tus dos bibliotecas ahora son una sola!"
          },
          "de-DE": {
            singular: "Deine beiden Bibliotheken sind jetzt eine einzige Bibliothek!"
          },
          "fr-FR": {
            singular: "Vos deux bibliothèques ne forment désormais qu'une seule !"
          },
          "ja-JP": {
            singular: "あなたの2つのライブラリは、今や1つになりました！"
          },
          "ko-KR": {
            singular: "두 라이브러리가 이제 하나가 되었습니다!"
          },
          "pt-BR": {
            singular: "Suas duas bibliotecas agora são uma só!"
          },
          "zh-CN": {
            singular: "你的两个资料库现在已合并为一个！"
          }
        }
      }),
      subtitle: (0, _v4.translate)({
        singular: "My library and Team library have been combined into a single Library.",
        dictionary: {
          es: {
            singular: "Mi biblioteca y la biblioteca del equipo se han combinado en una sola biblioteca."
          },
          "de-DE": {
            singular: "Meine Bibliothek und die Team-Bibliothek wurden zu einer einzigen Bibliothek zusammengeführt."
          },
          "fr-FR": {
            singular: "Ma bibliothèque et la bibliothèque d’équipe ont été fusionnées en une seule bibliothèque."
          },
          "ja-JP": {
            singular: "マイライブラリとチームライブラリは1つのライブラリに統合されました。"
          },
          "ko-KR": {
            singular: "내 라이브러리와 팀 라이브러리가 하나의 라이브러리로 통합되었습니다."
          },
          "pt-BR": {
            singular: "Minha biblioteca e a biblioteca da equipe foram combinadas em uma única biblioteca."
          },
          "zh-CN": {
            singular: "我的资料库和团队资料库已合并为单一资料库。"
          }
        }
      }),
      teamInvitationDescription: (0, _v4.translate)({
        singular: "Invite someone to your team to automatically restore a separate Team library.",
        dictionary: {
          es: {
            singular: "Invita a alguien a tu equipo para restaurar automáticamente una biblioteca de equipo separada."
          },
          "de-DE": {
            singular: "Laden Sie jemanden in Ihr Team ein, um automatisch eine separate Team-Bibliothek wiederherzustellen."
          },
          "fr-FR": {
            singular: "Invitez quelqu'un dans votre équipe pour restaurer automatiquement une bibliothèque d'équipe distincte."
          },
          "ja-JP": {
            singular: "チームに誰かを招待すると、別のチームライブラリが自動的に復元されます。"
          },
          "ko-KR": {
            singular: "별도의 팀 라이브러리를 자동으로 복원하려면 팀에 누군가를 초대하세요."
          },
          "pt-BR": {
            singular: "Convide alguém para sua equipe para restaurar automaticamente uma biblioteca separada da equipe."
          },
          "zh-CN": {
            singular: "邀请某人加入你的团队，以自动恢复一个独立的团队库。"
          }
        }
      }),
      whyDescription: (0, _v4.translate)({
        singular: "Two libraries are for teams, but you're not currently sharing with anyone.",
        dictionary: {
          es: {
            singular: "Dos bibliotecas son para equipos, pero actualmente no las compartes con nadie."
          },
          "de-DE": {
            singular: "Zwei Bibliotheken sind für Teams vorgesehen, aber Sie teilen sie derzeit mit niemandem."
          },
          "fr-FR": {
            singular: "Deux bibliothèques sont destinées aux équipes, mais vous ne les partagez actuellement avec personne."
          },
          "ja-JP": {
            singular: "2つのライブラリはチーム用ですが、現在は誰とも共有していません。"
          },
          "ko-KR": {
            singular: "두 개의 라이브러리는 팀용이지만, 현재 누구와도 공유하고 있지 않습니다."
          },
          "pt-BR": {
            singular: "Duas bibliotecas são para equipes, mas você não está compartilhando com ninguém no momento."
          },
          "zh-CN": {
            singular: "两个库是为团队准备的，但你当前并未与任何人共享。"
          }
        }
      }),
      footer: (0, _v1.jsxs)(_v3.VStack, {
        gap: "sm",
        align: "center",
        w: "100%",
        children: [(0, _v1.jsx)(_v2.Button, {
          variant: "primary",
          size: "md",
          w: "100%",
          onClick: () => {
            _v4({
              cta: "go_to_library"
            }), _v2();
          },
          children: (0, _v4.translate)({
            singular: "Go to your Library",
            dictionary: {
              es: {
                singular: "Ir a tu biblioteca"
              },
              "de-DE": {
                singular: "Gehe zu deiner Bibliothek"
              },
              "fr-FR": {
                singular: "Accéder à votre bibliothèque"
              },
              "ja-JP": {
                singular: "ライブラリへ移動"
              },
              "ko-KR": {
                singular: "라이브러리로 이동"
              },
              "pt-BR": {
                singular: "Ir para sua Biblioteca"
              },
              "zh-CN": {
                singular: "前往你的资料库"
              }
            }
          })
        }), (0, _v1.jsx)(_v2.Button, {
          variant: "tertiary",
          size: "md",
          as: "a",
          href: _v8.LIBRARY_MERGE_HELP_URL,
          target: "_blank",
          rel: "noopener noreferrer",
          onClick: () => _v4({
            cta: "see_whats_changed"
          }),
          children: (0, _v4.translate)({
            singular: "See what's changed",
            dictionary: {
              es: {
                singular: "Ver qué ha cambiado"
              },
              "de-DE": {
                singular: "Sieh dir an, was sich geändert hat"
              },
              "fr-FR": {
                singular: "Voir ce qui a changé"
              },
              "ja-JP": {
                singular: "変更点を確認する"
              },
              "ko-KR": {
                singular: "변경된 내용을 확인하세요"
              },
              "pt-BR": {
                singular: "Veja o que mudou"
              },
              "zh-CN": {
                singular: "查看已更改的内容"
              }
            }
          })
        })]
      })
    });
  }]);
}