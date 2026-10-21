{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["DiamondFilled", 0, _v0 => (0, _v1.jsx)(_v2.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M17.049 4c.72 0 1.398.345 1.822.93l2.698 3.72a2.261 2.261 0 0 1-.229 2.923l-7.746 7.766a2.25 2.25 0 0 1-3.188 0L2.66 11.573a2.261 2.261 0 0 1-.23-2.924l2.7-3.72A2.252 2.252 0 0 1 6.95 4H17.05Zm.4 2.295a.563.563 0 0 0-.9 0L14.083 9.59a.564.564 0 0 0 .45.903h4.928c.465 0 .73-.531.451-.903L17.45 6.295Z",
      fill: "currentColor"
    })
  })], 0);
  var _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  _v0.s(["VideoCardOverflowMenuIntroPopover", 0, function ({
    isMenuOpen: _v0,
    children: _v1
  }) {
    let {
      isOpen: _v2,
      acknowledge: _v3
    } = function (_v0) {
      let {
          acknowledge: _v1,
          isActive: _v2
        } = (0, _v4.useAnnouncement)({
          id: "video_card_overflow_intro",
          isEligible: _v0
        }),
        _v3 = (0, _v3.useRef)(_v0);
      return (0, _v3.useEffect)(() => {
        let _v0 = _v3.current && !_v0;
        _v3.current = _v0, _v0 && _v2 && _v1();
      }, [_v0, _v2, _v1]), {
        isOpen: _v2,
        acknowledge: _v1
      };
    }(_v0);
    return (0, _v1.jsx)(_v5.AnnouncementPopover, {
      isOpen: _v2,
      placement: "left-start",
      anchorWithinChildren: !0,
      onAcknowledge: _v3,
      badge: (0, _v1.jsx)(_v6.Badge, {
        variant: "new",
        size: "sm",
        children: (0, _v1.jsx)(_v7.Text, {
          color: "text-primary",
          variant: "heading-2xs",
          children: (0, _v8.translate)({
            singular: "Update",
            dictionary: {
              es: {
                singular: "Actualizar"
              },
              "de-DE": {
                singular: "Aktualisieren"
              },
              "fr-FR": {
                singular: "Mettre à jour"
              },
              "ja-JP": {
                singular: "アップデート"
              },
              "ko-KR": {
                singular: "업데이트"
              },
              "pt-BR": {
                singular: "Atualizar"
              },
              "zh-CN": {
                singular: "更新"
              }
            }
          })
        })
      }),
      title: (0, _v8.translate)({
        singular: "Your menu, now easier to navigate",
        dictionary: {
          es: {
            singular: "Tu menú, ahora más fácil de navegar"
          },
          "de-DE": {
            singular: "Ihr Menü, jetzt einfacher zu bedienen"
          },
          "fr-FR": {
            singular: "Votre menu, désormais plus facile à parcourir"
          },
          "ja-JP": {
            singular: "メニューがより使いやすくなりました"
          },
          "ko-KR": {
            singular: "메뉴가 이제 더 쉽게 탐색됩니다"
          },
          "pt-BR": {
            singular: "Seu menu, agora mais fácil de navegar"
          },
          "zh-CN": {
            singular: "您的菜单, 现在更易于导航"
          }
        }
      }),
      body: (0, _v8.translate)({
        singular: "We've reorganized it to put your most important actions front and center: nothing removed, just better arranged.",
        dictionary: {
          es: {
            singular: "Lo hemos reorganizado para poner tus acciones más importantes en primer plano: no se ha eliminado nada, solo está mejor ordenado."
          },
          "de-DE": {
            singular: "Wir haben es neu strukturiert, um Ihre wichtigsten Aktionen in den Vordergrund zu rücken: nichts wurde entfernt, nur besser angeordnet."
          },
          "fr-FR": {
            singular: "Nous l'avons réorganisé pour mettre vos actions les plus importantes bien en vue : rien n'a été supprimé, simplement mieux agencé."
          },
          "ja-JP": {
            singular: "最も重要な操作がすぐに見つかるように再編しました: 機能を削除したわけではなく、配置を改善しただけです。"
          },
          "ko-KR": {
            singular: "가장 중요한 작업을 전면에 배치하도록 재구성했습니다: 항목을 제거한 것이 아니라, 단지 더 잘 정돈했습니다."
          },
          "pt-BR": {
            singular: "Reorganizamos tudo para colocar suas ações mais importantes em destaque: nada foi removido, apenas melhor organizado."
          },
          "zh-CN": {
            singular: "我们已重新整理，将您最重要的操作置于显要位置: 未移除任何内容, 只是更合理地排列."
          }
        }
      }),
      children: _v1
    });
  }], 0);
}