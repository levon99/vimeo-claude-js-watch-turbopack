{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  _v0.s(["ContentFilterModal", 0, function ({
    active: _v0,
    activeSet: _v1,
    token: _v2,
    contentViewingPrefs: _v3
  }) {
    return (0, _v1.jsx)(_v2.Modal, {
      isOpen: !!_v0,
      onClose: () => _v1(null),
      children: (0, _v1.jsxs)(_v3.ModalContent, {
        children: [(0, _v1.jsx)(_v4.ModalHeader, {
          children: (0, _v6.translate)({
            singular: "Mature content filter",
            dictionary: {
              es: {
                singular: "Filtro de contenido para adultos"
              },
              "de-DE": {
                singular: "Jugendschutzfilter"
              },
              "fr-FR": {
                singular: "Filtre de contenu pour adultes"
              },
              "ja-JP": {
                singular: "成人向けコンテンツフィルター"
              },
              "ko-KR": {
                singular: "성인 콘텐츠 필터"
              },
              "pt-BR": {
                singular: "Filtro de conteúdo adulto"
              },
              "zh-CN": {
                singular: "成人内容过滤器"
              }
            }
          })
        }), (0, _v1.jsx)(_v5.ModalCloseButton, {}), (0, _v1.jsx)(_v7.ContentViewingPrefsForm, {
          ..._v3,
          token: _v2,
          onClose: () => _v1(null)
        })]
      })
    });
  }]);
}