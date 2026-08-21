{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  _v0.s(["EventActionBar", 0, ({
    onJoinConversationClick: _v0,
    showLiveTools: _v1
  }) => {
    let {
      ref: _v2,
      dimension: {
        width: _v3
      }
    } = (0, _v7.useResizeObserver)();
    return (0, _v1.jsx)(_v2.HStack, {
      ref: _v2,
      gap: 100,
      borderY: "1px solid",
      borderColor: "stroke",
      py: 2,
      children: _v3 < 480 ? _v1 ? (0, _v1.jsx)(_v4.IconButton, {
        "aria-label": (0, _v6.translate)({
          singular: "Join the conversation",
          dictionary: {
            es: {
              singular: "Únete a la conversación"
            },
            "de-DE": {
              singular: "Nimm an der Unterhaltung teil"
            },
            "fr-FR": {
              singular: "Participez à la conversation"
            },
            "ja-JP": {
              singular: "会話に参加する"
            },
            "ko-KR": {
              singular: "대화에 참여하세요"
            },
            "pt-BR": {
              singular: "Junte-se à conversa"
            },
            "zh-CN": {
              singular: "加入对话"
            }
          }
        }),
        variant: "tertiary",
        size: "sm",
        icon: (0, _v1.jsx)(_v5.Chats, {}),
        onClick: _v0
      }) : null : _v1 ? (0, _v1.jsx)(_v3.Button, {
        "aria-label": (0, _v6.translate)({
          singular: "Join the conversation",
          dictionary: {
            es: {
              singular: "Únete a la conversación"
            },
            "de-DE": {
              singular: "Nimm an der Unterhaltung teil"
            },
            "fr-FR": {
              singular: "Participez à la conversation"
            },
            "ja-JP": {
              singular: "会話に参加する"
            },
            "ko-KR": {
              singular: "대화에 참여하세요"
            },
            "pt-BR": {
              singular: "Junte-se à conversa"
            },
            "zh-CN": {
              singular: "加入对话"
            }
          }
        }),
        onClick: _v0,
        variant: "tertiary",
        size: "sm",
        leftIcon: (0, _v1.jsx)(_v5.Chats, {}),
        children: (0, _v6.translate)({
          singular: "Join the conversation",
          dictionary: {
            es: {
              singular: "Únete a la conversación"
            },
            "de-DE": {
              singular: "Nimm an der Unterhaltung teil"
            },
            "fr-FR": {
              singular: "Participez à la conversation"
            },
            "ja-JP": {
              singular: "会話に参加する"
            },
            "ko-KR": {
              singular: "대화에 참여하세요"
            },
            "pt-BR": {
              singular: "Junte-se à conversa"
            },
            "zh-CN": {
              singular: "加入对话"
            }
          }
        })
      }) : null
    });
  }]);
}