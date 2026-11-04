{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = {
      menu: _v3.vimeoAi,
      summary: _v3.summarySectionTitle,
      question: _v3.questionSectionTitle,
      loader: null,
      "location-check": null,
      chapters: _v3.chaptersSectionTitle,
      "chapters-preset": _v3.videoChapters,
      highlights: _v3.highlightsSectionTitle,
      "highlight-reel": _v3.highlightReelSectionTitle,
      translations: _v3.translateVideo,
      qna: _v3.qnaSectionTitle,
      "video-details-preset": _v3.summarySectionTitle
    },
    _v5 = (0, _v1.create)()((0, _v2.devtools)((_v0, _v1) => ({
      activePanel: "menu",
      loaderText: "",
      loaderSource: null,
      activateLoader: (_v0, _v1 = null) => _v0(() => ({
        activePanel: "loader",
        loaderText: _v0,
        loaderSource: _v1
      }), void 0, "panel/activateLoader"),
      resetPanelStore: () => {
        _v0(() => ({
          activePanel: "menu",
          loaderText: "",
          loaderSource: null
        }), void 0, "panel/resetPanelStore");
      },
      setActivePanel: _v0 => _v0(() => ({
        activePanel: _v0
      }), void 0, "panel/setActivePanel"),
      setLoaderText: _v0 => _v0(() => ({
        loaderText: _v0
      }), void 0, "panel/setLoaderText"),
      getHeaderText: () => {
        let _v0 = _v1().activePanel;
        return _v0 && "loader" !== _v0 ? _v4[_v0] : _v3.vimeoAi;
      }
    }), {
      name: "PanelStore",
      enabled: !1
    }));
  _v0.s(["usePanelStore", 0, _v5]);
}