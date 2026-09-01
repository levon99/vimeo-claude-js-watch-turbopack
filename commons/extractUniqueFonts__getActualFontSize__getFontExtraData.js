{
  "use strict";

  _v0.s(["extractUniqueFonts", () => _v20, "getActualFontSize", () => _v14, "getFontExtraData", () => _v23, "getFontFamily", () => _v11, "getPreferredFontByLanguage", () => _v19, "getRelativeFontSize", () => _v13, "groupFontsByFamily", () => _v16, "isFontSupportsLanguage", () => _v17, "loadFont", () => _v12, "loadFontFaceToDOM", () => _v15, "mapBrandKitFontToFont", () => _v22, "mapLoadingFontsToFontObjects", () => _v21], 0), _v0.s(["createSVGDimensions", () => _v7, "getSVGTextDimensions", () => _v9], 0);
  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = (_v0, _v1) => {
      let _v2 = _v0.match(_v1);
      return _v2 ? _v2.length : 0;
    },
    _v4 = _v0 => _v0.replace(/<[^>]*>/g, "").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&amp;/g, "&"),
    _v5 = _v0 => _v0.charAt(0).toUpperCase() + _v0.slice(1);
  _v0.s(["capitalizeFirstLetter", 0, _v5, "extractNumberFromString", 0, function (_v0, {
    returnInteger: _v1 = !1
  } = {}) {
    let _v2 = _v0.match(/#(\d+)/);
    return _v2 ? _v1 ? parseInt(_v2[1]) : Number(_v2[1]) : null;
  }, "getExtension", 0, _v0 => {
    let _v1 = _v0.match(/[^.]+$/);
    return _v1?.[0];
  }, "getMatchesCount", 0, _v3, "getUpperSnakeCase", 0, _v0 => _v0.toUpperCase().replace("-", "_"), "lowerCaseUnderscore", 0, _v0 => (0, _v2.default)(_v0).replaceAll(" ", "_"), "prettifyString", 0, _v0 => _v5(_v0.replaceAll("_", " ").replaceAll("-", " ").replace(/\.[^/.]+$/, "")), "randomString", 0, (_v0 = 5) => (Math.random() + 1).toString(36).substring(_v0), "textFromMarkup", 0, _v4], 0);
  var _v6 = _v0.i(0);
  let _v7 = _v0 => ({
      SVG_WIDTH: _v6.ORIENTATION_MAP[_v0].width,
      SVG_HEIGHT: _v6.ORIENTATION_MAP[_v0].height
    }),
    _v8 = "http://www.w3.org/2000/svg",
    _v9 = ({
      font: _v0,
      fontSize: _v1 = .3,
      text: _v2,
      orientation: _v3,
      lineHeight: _v4
    }) => {
      var _v5;
      let _v6,
        {
          SVG_WIDTH: _v7,
          SVG_HEIGHT: _v8
        } = _v7(_v3),
        _v9 = _v11(_v0),
        _v10 = (_v5 = (({
          width: _v0,
          height: _v1,
          text: _v2,
          fontSize: _v3,
          fontFamily: _v4
        }) => {
          let _v5 = document.createElementNS(_v8, "svg");
          _v5.setAttribute("width", String(_v0)), _v5.setAttribute("height", String(_v1));
          let _v6 = document.createElementNS(_v8, "text");
          return _v6.setAttribute("x", "0"), _v6.setAttribute("y", "50%"), _v6.setAttribute("text-anchor", "left"), _v6.setAttribute("dominant-baseline", "central"), _v2.forEach(_v0 => {
            let _v1;
            _v6.appendChild(((_v1 = document.createElementNS(_v8, "tspan")).setAttribute("x", "0"), _v1.setAttribute("alignment-baseline", "middle"), _v1.style.fontSize = `${_v3}px`, _v1.style.fontFamily = _v4, _v1.style.whiteSpace = "pre", _v1.style.setProperty("-webkit-font-kerning", "none"), _v1.style.fontKerning = "none", _v1.textContent = _v0, _v1));
          }), _v5.appendChild(_v6), _v5;
        })({
          width: _v7,
          height: _v8,
          text: _v2.map(_v0 => _v4(_v0)),
          fontSize: _v1,
          fontFamily: _v9
        }), (_v6 = document.createElement("div")).setAttribute("style", `position: absolute; visibility: hidden; width: ${window.innerWidth}px; overflow: hidden;`), _v6.appendChild(_v5), _v6);
      document.body.appendChild(_v10);
      let _v11 = _v10.querySelector("text"),
        _v12 = [..._v10.querySelectorAll("tspan")],
        _v13 = _v11?.getBBox?.().width;
      if (!_v13) throw Error("Failed while measuring text");
      return _v10.remove(), {
        width: _v13 / _v7,
        height: parseFloat(_v12[0].style.fontSize) * _v4 * _v2.length / _v8
      };
    },
    _v10 = async _v0 => {
      try {
        let _v0 = [...(await document.fonts.ready)].map(_v0 => _v0.family);
        return _v0.filter(_v0 => !_v0.includes(_v11(_v0.name)));
      } catch (_v0) {
        return _v0;
      }
    },
    _v11 = _v0 => `${_v0.replaceAll(" ", "-")}-vimeo-editor-text-font`,
    _v12 = async _v0 => {
      let _v1 = _v11(_v0);
      await document.fonts.load(`1px ${_v1}`);
    },
    _v13 = (_v0, _v1) => {
      let {
        SVG_HEIGHT: _v2
      } = _v7(_v1);
      return _v0 / _v2;
    },
    _v14 = (_v0, _v1) => {
      let {
        SVG_HEIGHT: _v2
      } = _v7(_v1);
      return _v0 * _v2;
    },
    _v15 = async _v0 => {
      let _v1 = [],
        _v2 = document.createElement("style");
      _v2.id = "editor-font-faces";
      let _v3 = Object.values(_v0);
      (await _v10(_v3)).forEach((_v0, _v1) => {
        let _v2 = _v0.libs[2].url,
          _v3 = (0, _v1.fetchToReloadCache)(_v2.replaceAll(" ", "%20")).then(_v0 => _v0.arrayBuffer()).then(_v0 => new FontFace(_v11(_v0.name), _v0)).then(_v0 => _v0.load()).then(_v0 => (document.fonts.add(_v0), _v2.textContent += `@font-face { font-family: '${_v11(_v0.name)}'; src: url('${_v2}') format('woff2'); }
`, _v0)).catch(_v0 => console.error(`Error loading font: ${_v3[_v1].name}`, _v0));
        _v1.push(_v3);
      }), await Promise.allSettled(_v1), document.head.appendChild(_v2);
    },
    _v16 = _v0 => _v0.reduce((_v0, _v1) => {
      let _v2 = _v0.findIndex(_v0 => _v0.family === _v1.family);
      return -1 !== _v2 ? _v0[_v2].fonts.push(_v1) : _v0.push({
        family: _v1.family,
        fonts: [_v1]
      }), _v0;
    }, []),
    _v17 = (_v0, _v1) => {
      for (let _v0 of _v0.languages) if (_v0.iso15924 === _v1) return !0;
      return !1;
    },
    _v18 = (_v0, _v1) => {
      for (let _v0 of _v0.languages) if (_v0.iso15924 === _v1) return _v0.preferred;
      return !1;
    },
    _v19 = (_v0, _v1) => {
      for (let _v0 of _v0) if (_v18(_v0, _v1)) return _v0;
      return null;
    },
    _v20 = _v0 => _v0.reduce((_v0, _v1) => ({
      ..._v0,
      [_v1.name]: _v1
    }), {}),
    _v21 = _v0 => _v0.map(_v0 => ({
      id: `loading-${_v0.name}`,
      displayName: _v0.displayName,
      name: _v0.name,
      family: _v0.displayName,
      style: "regular",
      primary: !1,
      isActive: !1,
      isBrandAsset: !0,
      isInternal: !1,
      isTest: !1,
      metaData: {
        filename: "",
        lineHeight: 1,
        ascent: 0,
        fontHeight: 0,
        capHeight: 0,
        median: null
      },
      languages: [],
      libs: [],
      thumbnails: []
    })),
    _v22 = _v0 => ({
      id: _v0.fontId,
      uri: _v0.uri,
      name: `${_v0.fontName}__brand__${_v0.fontId}`,
      displayName: _v0.displayName,
      family: _v0.fontFamily,
      style: _v0.fontStyle,
      isActive: _v0.isActive,
      isInternal: !1,
      isBrandAsset: !0,
      isTest: !1,
      primary: !0,
      languages: _v0.languages.map(_v0 => ({
        displayName: _v0.displayName,
        preferred: _v0.preferred,
        iso15924: _v0.scriptCodeIso15924,
        unicode: _v0.unicode,
        xregexp: _v0.xregexp
      })),
      libs: _v0.libs,
      metaData: {
        filename: _v0.metaData.filename,
        lineHeight: parseFloat(String(_v0.metaData.lineHeight)),
        capHeight: parseFloat(String(_v0.metaData.capHeight)),
        ascent: parseFloat(String(_v0.metaData.ascent)),
        fontHeight: parseFloat(String(_v0.metaData.fontHeight)),
        median: _v0?.metaData?.median
      },
      thumbnails: [{
        size: "svg",
        url: _v0.thumbnails.svg
      }, {
        size: "svg_horizontal",
        url: _v0.thumbnails.svg_horizontal
      }, {
        size: "1x",
        url: _v0.thumbnails.x1
      }, {
        size: "1.5x",
        url: _v0.thumbnails.x1_5
      }, {
        size: "2x",
        url: _v0.thumbnails.x2
      }, {
        size: "3x",
        url: _v0.thumbnails.x3
      }, {
        size: "4x",
        url: _v0.thumbnails.x4
      }]
    }),
    _v23 = (_v0, _v1) => {
      if (_v1) return {
        fileName: `${_v0.name}.ttf`,
        fontName: _v0.name,
        displayName: _v0.name,
        fileFormat: "ttf"
      };
      {
        let _v0 = -1 !== _v0.name.lastIndexOf(".") ? _v0.name.substring(0, _v0.name.lastIndexOf(".")) : _v0.name,
          _v1 = _v0.name.includes(".") ? _v0.name.split(".").pop() : "";
        return {
          fileName: `${_v0}.${_v1}`,
          fontName: _v0,
          displayName: _v0,
          fileFormat: _v1
        };
      }
    },
    _v24 = {
      LATIN: "Latn",
      HEBREW: "Hebr"
    };
  _v0.s(["LANGUAGE", 0, _v24], 0);
  let _v25 = (_v0, _v1) => {
    let _v2 = {
        name: _v24.LATIN,
        charsCount: 0
      },
      _v3 = _v0.map(_v0 => _v0.trim()).join("");
    return _v1.forEach(_v0 => {
      if (_v0.iso15924 && _v0.iso15924 !== _v24.LATIN) {
        let _v0 = _v3(_v3, RegExp(`\\p{Script=${_v0.iso15924}}`, "ug"));
        _v0 && _v0 > _v2.charsCount && (_v2 = {
          name: _v0.iso15924,
          charsCount: _v0
        });
      }
    }), _v2.name;
  };
  _v0.s(["detectLanguage", 0, _v25, "extractLanguages", 0, _v0 => {
    let _v1 = {};
    return _v0.flatMap(_v0 => _v0.languages).forEach(_v0 => {
      _v1[_v0.unicode] = _v0;
    }), Object.values(_v1);
  }, "isLanguageChanged", 0, (_v0, _v1, _v2) => _v25(_v0, _v2) !== _v25(_v1, _v2)], 0);
}