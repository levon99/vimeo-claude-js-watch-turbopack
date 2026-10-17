{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  _v0.s(["NewFolderButton", 0, ({
    onClick: _v0,
    dataTestId: _v1,
    dataTestIdMobile: _v2,
    dataId: _v3,
    dataIdMobile: _v4
  }) => (0, _v1.jsxs)(_v1.Fragment, {
    children: [(0, _v1.jsx)(_v2.IconButton, {
      "aria-label": (0, _v5.translate)({
        singular: "New folder",
        dictionary: {
          es: {
            singular: "Carpeta nueva"
          },
          "de-DE": {
            singular: "Neuer Ordner"
          },
          "fr-FR": {
            singular: "Nouveau dossier"
          },
          "ja-JP": {
            singular: "新しいフォルダー"
          },
          "ko-KR": {
            singular: "새 폴더"
          },
          "pt-BR": {
            singular: "Nova pasta"
          },
          "zh-CN": {
            singular: "新文件夹"
          }
        }
      }),
      "data-testid": _v2 ?? "",
      display: {
        base: "inline-flex",
        md: "none"
      },
      icon: (0, _v1.jsx)(_v4.FolderPlus, {}),
      variant: "secondary",
      size: "md",
      id: "folder-new-folder-button-mobile",
      onClick: _v0,
      "data-id": _v4 ?? ""
    }), (0, _v1.jsx)(_v3.Button, {
      "data-testid": _v1 ?? "",
      display: {
        base: "none",
        md: "inline-flex"
      },
      variant: "secondary",
      size: "md",
      onClick: _v0,
      "data-id": _v3 ?? "",
      children: (0, _v5.translate)({
        singular: "New folder",
        dictionary: {
          es: {
            singular: "Carpeta nueva"
          },
          "de-DE": {
            singular: "Neuer Ordner"
          },
          "fr-FR": {
            singular: "Nouveau dossier"
          },
          "ja-JP": {
            singular: "新しいフォルダー"
          },
          "ko-KR": {
            singular: "새 폴더"
          },
          "pt-BR": {
            singular: "Nova pasta"
          },
          "zh-CN": {
            singular: "新文件夹"
          }
        }
      })
    })]
  })]);
}