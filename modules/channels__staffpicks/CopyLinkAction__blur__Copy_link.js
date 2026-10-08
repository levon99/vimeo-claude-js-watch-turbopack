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
    _v9 = _v0.i(0);
  _v0.s(["CopyLinkAction", 0, ({
    video: _v0,
    size: _v1 = "xs",
    variant: _v2 = "blur",
    placement: _v3 = "top"
  }) => {
    let _v4 = (0, _v7.useViewer)(),
      _v5 = (0, _v8.useNotification)();
    return (0, _v1.jsx)(_v3.Tooltip, {
      label: (0, _v5.translate)({
        singular: "Copy link",
        dictionary: {
          es: {
            singular: "Copiar vínculo"
          },
          "de-DE": {
            singular: "Link kopieren"
          },
          "fr-FR": {
            singular: "Copier le lien"
          },
          "ja-JP": {
            singular: "リンクをコピー"
          },
          "ko-KR": {
            singular: "링크 복사"
          },
          "pt-BR": {
            singular: "Copiar link"
          },
          "zh-CN": {
            singular: "复制链接"
          }
        }
      }),
      placement: _v3,
      children: (0, _v1.jsx)(_v2.IconButton, {
        "aria-label": (0, _v5.translate)({
          singular: "Copy link",
          dictionary: {
            es: {
              singular: "Copiar vínculo"
            },
            "de-DE": {
              singular: "Link kopieren"
            },
            "fr-FR": {
              singular: "Copier le lien"
            },
            "ja-JP": {
              singular: "リンクをコピー"
            },
            "ko-KR": {
              singular: "링크 복사"
            },
            "pt-BR": {
              singular: "Copiar link"
            },
            "zh-CN": {
              singular: "复制链接"
            }
          }
        }),
        icon: (0, _v1.jsx)(_v4.Link, {}),
        onClick: () => {
          let _v0 = /http/.test(_v0?.link) ? _v0?.link : `${_v4?.vimeoHttpsUrl}${_v0?.link}`;
          (0, _v6.default)(_v0) ? _v5({
            content: _v9.linkCopySuccess
          }) : _v5({
            content: _v9.linkCopyFailed,
            status: "error"
          });
        },
        size: _v1,
        variant: _v2,
        zIndex: 1
      })
    });
  }]);
}