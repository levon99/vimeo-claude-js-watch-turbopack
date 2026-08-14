{
  (_v0 => {
    let _v1 = (() => {
        let _v0 = 0;
        return {
          escape: function (_v0) {
            return _v0.replace(/([.*+?^${}()|[\]/\\])/g, "\\$1");
          },
          isDataUrl: function (_v0) {
            return -1 !== _v0.search(/^(data:)/);
          },
          canvasToBlob: function (_v0) {
            return _v0.toBlob ? new Promise(function (_v0) {
              _v0.toBlob(_v0);
            }) : new Promise(function (_v0) {
              var _v1 = _v11(_v0.toDataURL().split(",")[1]),
                _v2 = _v1.length,
                _v3 = new Uint8Array(_v2);
              for (let _v0 = 0; _v0 < _v2; _v0++) _v3[_v0] = _v1.charCodeAt(_v0);
              _v0(new Blob([_v3], {
                type: "image/png"
              }));
            });
          },
          resolveUrl: function (_v0, _v1) {
            var _v2 = document.implementation.createHTMLDocument(),
              _v3 = _v2.createElement("base"),
              _v4 = (_v2.head.appendChild(_v3), _v2.createElement("a"));
            return _v2.body.appendChild(_v4), _v3.href = _v1, _v4.href = _v0, _v4.href;
          },
          getAndEncode: function (_v0) {
            let _v1 = _v8.impl.urlCache.find(function (_v0) {
              return _v0.url === _v0;
            });
            return _v1 || (_v1 = {
              url: _v0,
              promise: null
            }, _v8.impl.urlCache.push(_v1)), null === _v1.promise && (_v8.impl.options.cacheBust && (_v0 += (/\?/.test(_v0) ? "&" : "?") + new Date().getTime()), _v1.promise = new Promise(function (_v0) {
              let _v1,
                _v2 = _v8.impl.options.httpTimeout,
                _v3 = new XMLHttpRequest();
              if (_v3.onreadystatechange = function () {
                if (4 === _v3.readyState) if (300 <= _v3.status) _v1 ? _v0(_v1) : _v5(`cannot fetch resource: ${_v0}, status: ` + _v3.status);else {
                  let _v0 = new FileReader();
                  _v0.onloadend = function () {
                    _v0(_v0.result);
                  }, _v0.readAsDataURL(_v3.response);
                }
              }, _v3.ontimeout = function () {
                _v1 ? _v0(_v1) : _v5(`timeout of ${_v2}ms occured while fetching resource: ` + _v0);
              }, _v3.responseType = "blob", _v3.timeout = _v2, 0 < _v8.impl.options.useCredentialsFilters.length && (_v8.impl.options.useCredentials = 0 < _v8.impl.options.useCredentialsFilters.filter(_v0 => 0 <= _v0.search(_v0)).length), _v8.impl.options.useCredentials && (_v3.withCredentials = !0), _v8.impl.options.corsImg && 0 === _v0.indexOf("http") && -1 === _v0.indexOf(window.location.origin)) {
                var _v4 = "POST" === (_v8.impl.options.corsImg.method || "GET").toUpperCase() ? "POST" : "GET";
                _v3.open(_v4, (_v8.impl.options.corsImg.url || "").replace("#{cors}", _v0), !0);
                let _v0 = !1,
                  _v1 = _v8.impl.options.corsImg.headers || {},
                  _v2 = (Object.keys(_v1).forEach(function (_v0) {
                    -1 !== _v1[_v0].indexOf("application/json") && (_v0 = !0), _v3.setRequestHeader(_v0, _v1[_v0]);
                  }), (_v0 => {
                    try {
                      return JSON.parse(JSON.stringify(_v0));
                    } catch (_v0) {
                      _v5("corsImg.data is missing or invalid:" + _v0.toString());
                    }
                  })(_v8.impl.options.corsImg.data || ""));
                Object.keys(_v2).forEach(function (_v0) {
                  "string" == typeof _v2[_v0] && (_v2[_v0] = _v2[_v0].replace("#{cors}", _v0));
                }), _v3.send(_v0 ? JSON.stringify(_v2) : _v2);
              } else _v3.open("GET", _v0, !0), _v3.send();
              function _v5(_v0) {
                console.error(_v0), _v0("");
              }
              _v8.impl.options.imagePlaceholder && (_v4 = _v8.impl.options.imagePlaceholder.split(/,/)) && _v4[1] && (_v1 = _v4[1]);
            })), _v1.promise;
          },
          uid: function () {
            return "u" + ("0000" + (0 * Math.random() | 0).toString(36)).slice(-4) + _v0++;
          },
          delay: function (_v0) {
            return function (_v0) {
              return new Promise(function (_v0) {
                setTimeout(function () {
                  _v0(_v0);
                }, _v0);
              });
            };
          },
          asArray: function (_v0) {
            var _v1 = [],
              _v2 = _v0.length;
            for (let _v0 = 0; _v0 < _v2; _v0++) _v1.push(_v0[_v0]);
            return _v1;
          },
          escapeXhtml: function (_v0) {
            return _v0.replace(/%/g, "%25").replace(/#/g, "%23").replace(/\n/g, "%0A");
          },
          makeImage: function (_v0) {
            return "data:," !== _v0 ? new Promise(function (_v0, _v1) {
              let _v2 = document.createElementNS("http://www.w3.org/2000/svg", "svg"),
                _v3 = new Image();
              _v8.impl.options.useCredentials && (_v3.crossOrigin = "use-credentials"), _v3.onload = function () {
                document.body.removeChild(_v2), window && window.requestAnimationFrame ? window.requestAnimationFrame(function () {
                  _v0(_v3);
                }) : _v0(_v3);
              }, _v3.onerror = _v0 => {
                document.body.removeChild(_v2), _v1(_v0);
              }, _v2.appendChild(_v3), _v3.src = _v0, document.body.appendChild(_v2);
            }) : Promise.resolve();
          },
          width: function (_v0) {
            var _v1 = _v5(_v0, "width");
            if (!isNaN(_v1)) return _v1;
            var _v1 = _v5(_v0, "border-left-width"),
              _v2 = _v5(_v0, "border-right-width");
            return _v0.scrollWidth + _v1 + _v2;
          },
          height: function (_v0) {
            var _v1 = _v5(_v0, "height");
            if (!isNaN(_v1)) return _v1;
            var _v1 = _v5(_v0, "border-top-width"),
              _v2 = _v5(_v0, "border-bottom-width");
            return _v0.scrollHeight + _v1 + _v2;
          },
          getWindow: _v1,
          isElement: _v4,
          isElementHostForOpenShadowRoot: function (_v0) {
            return _v4(_v0) && null !== _v0.shadowRoot;
          },
          isShadowRoot: _v2,
          isInShadowRoot: _v3,
          isHTMLElement: function (_v0) {
            return _v0 instanceof _v1(_v0).HTMLElement;
          },
          isHTMLCanvasElement: function (_v0) {
            return _v0 instanceof _v1(_v0).HTMLCanvasElement;
          },
          isHTMLInputElement: function (_v0) {
            return _v0 instanceof _v1(_v0).HTMLInputElement;
          },
          isHTMLImageElement: function (_v0) {
            return _v0 instanceof _v1(_v0).HTMLImageElement;
          },
          isHTMLLinkElement: function (_v0) {
            return _v0 instanceof _v1(_v0).HTMLLinkElement;
          },
          isHTMLScriptElement: function (_v0) {
            return _v0 instanceof _v1(_v0).HTMLScriptElement;
          },
          isHTMLStyleElement: function (_v0) {
            return _v0 instanceof _v1(_v0).HTMLStyleElement;
          },
          isHTMLTextAreaElement: function (_v0) {
            return _v0 instanceof _v1(_v0).HTMLTextAreaElement;
          },
          isShadowSlotElement: function (_v0) {
            return _v3(_v0) && _v0 instanceof _v1(_v0).HTMLSlotElement;
          },
          isSVGElement: function (_v0) {
            return _v0 instanceof _v1(_v0).SVGElement;
          },
          isSVGRectElement: function (_v0) {
            return _v0 instanceof _v1(_v0).SVGRectElement;
          },
          isDimensionMissing: function (_v0) {
            return isNaN(_v0) || _v0 <= 0;
          }
        };
        function _v1(_v0) {
          return ((_v0 = _v0 ? _v0.ownerDocument : void 0) ? _v0.defaultView : void 0) || window || _v0;
        }
        function _v2(_v0) {
          return _v0 instanceof _v1(_v0).ShadowRoot;
        }
        function _v3(_v0) {
          return null != _v0 && void 0 !== _v0.getRootNode && _v2(_v0.getRootNode());
        }
        function _v4(_v0) {
          return _v0 instanceof _v1(_v0).Element;
        }
        function _v5(_v0, _v1) {
          if (_v0.nodeType === _v9) {
            let _v0 = _v10(_v0).getPropertyValue(_v1);
            if ("px" === _v0.slice(-2)) return parseFloat(_v0 = _v0.slice(0, -2));
          }
          return NaN;
        }
      })(),
      _v2 = (() => {
        let _v0 = /url\(['"]?([^'"]+?)['"]?\)/g;
        return {
          inlineAll: function (_v0, _v1, _v2) {
            return _v1(_v0) ? Promise.resolve(_v0).then(_v2).then(function (_v0) {
              let _v1 = Promise.resolve(_v0);
              return _v0.forEach(function (_v0) {
                _v1 = _v1.then(function (_v0) {
                  return _v3(_v0, _v0, _v1, _v2);
                });
              }), _v1;
            }) : Promise.resolve(_v0);
          },
          shouldProcess: _v1,
          impl: {
            readUrls: _v2,
            inline: _v3
          }
        };
        function _v1(_v0) {
          return -1 !== _v0.search(_v0);
        }
        function _v2(_v0) {
          for (var _v1, _v2 = []; null !== (_v1 = _v0.exec(_v0));) _v2.push(_v1[1]);
          return _v2.filter(function (_v0) {
            return !_v1.isDataUrl(_v0);
          });
        }
        function _v3(_v0, _v1, _v2, _v3) {
          return Promise.resolve(_v1).then(function (_v0) {
            return _v2 ? _v1.resolveUrl(_v0, _v2) : _v0;
          }).then(_v3 || _v1.getAndEncode).then(function (_v0) {
            return _v0.replace(RegExp(`(url\\(['"]?)(${_v1.escape(_v1)})(['"]?\\))`, "g"), `$1${_v0}$3`);
          });
        }
      })(),
      _v3 = {
        resolveAll: function () {
          return _v4().then(function (_v0) {
            return Promise.all(_v0.map(function (_v0) {
              return _v0.resolve();
            }));
          }).then(function (_v0) {
            return _v0.join("\n");
          });
        },
        impl: {
          readAll: _v4
        }
      };
    function _v4() {
      return Promise.resolve(_v1.asArray(document.styleSheets)).then(function (_v0) {
        let _v1 = [];
        return _v0.forEach(function (_v0) {
          var _v1 = Object.getPrototypeOf(_v0);
          if (Object.prototype.hasOwnProperty.call(_v1, "cssRules")) try {
            _v1.asArray(_v0.cssRules || []).forEach(_v1.push.bind(_v1));
          } catch (_v0) {
            console.error("domtoimage: Error while reading CSS rules from " + _v0.href, _v0.toString());
          }
        }), _v1;
      }).then(function (_v0) {
        return _v0.filter(function (_v0) {
          return _v0.type === CSSRule.FONT_FACE_RULE;
        }).filter(function (_v0) {
          return _v2.shouldProcess(_v0.style.getPropertyValue("src"));
        });
      }).then(function (_v0) {
        return _v0.map(_v0);
      });
      function _v0(_v0) {
        return {
          resolve: function () {
            var _v0 = (_v0.parentStyleSheet || {}).href;
            return _v2.inlineAll(_v0.cssText, _v0);
          },
          src: function () {
            return _v0.style.getPropertyValue("src");
          }
        };
      }
    }
    let _v5 = {
      inlineAll: function _v0(_v1) {
        var _v2;
        return _v1.isElement(_v1) ? (_v2 = _v1, Promise.all(["background", "background-image"].map(function (_v0) {
          let _v1 = _v2.style.getPropertyValue(_v0),
            _v2 = _v2.style.getPropertyPriority(_v0);
          return _v1 ? _v2.inlineAll(_v1).then(function (_v0) {
            _v2.style.setProperty(_v0, _v0, _v2);
          }) : Promise.resolve();
        })).then(function () {
          return _v2;
        })).then(function () {
          return _v1.isHTMLImageElement(_v1) ? _v6(_v1).inline() : Promise.all(_v1.asArray(_v1.childNodes).map(function (_v0) {
            return _v0(_v0);
          }));
        }) : Promise.resolve(_v1);
      },
      impl: {
        newImage: _v6
      }
    };
    function _v6(_v0) {
      return {
        inline: function (_v0) {
          return _v1.isDataUrl(_v0.src) ? Promise.resolve() : Promise.resolve(_v0.src).then(_v0 || _v1.getAndEncode).then(function (_v0) {
            return new Promise(function (_v0) {
              _v0.onload = _v0, _v0.onerror = _v0, _v0.src = _v0;
            });
          });
        }
      };
    }
    let _v7 = {
        copyDefaultStyles: !0,
        imagePlaceholder: void 0,
        cacheBust: !1,
        useCredentials: !1,
        useCredentialsFilters: [],
        httpTimeout: 0,
        styleCaching: "strict",
        corsImg: void 0,
        adjustClonedNode: void 0
      },
      _v8 = {
        toSvg: _v12,
        toPng: function (_v0, _v1) {
          return _v13(_v0, _v1).then(function (_v0) {
            return _v0.toDataURL();
          });
        },
        toJpeg: function (_v0, _v1) {
          return _v13(_v0, _v1).then(function (_v0) {
            return _v0.toDataURL("image/jpeg", (_v1 ? _v1.quality : void 0) || 1);
          });
        },
        toBlob: function (_v0, _v1) {
          return _v13(_v0, _v1).then(_v1.canvasToBlob);
        },
        toPixelData: function (_v0, _v1) {
          return _v13(_v0, _v1).then(function (_v0) {
            return _v0.getContext("2d").getImageData(0, 0, _v1.width(_v0), _v1.height(_v0)).data;
          });
        },
        toCanvas: _v13,
        impl: {
          fontFaces: _v3,
          images: _v5,
          util: _v1,
          inliner: _v2,
          urlCache: [],
          options: {}
        }
      },
      _v9 = (_v1.exports = _v8, ("u" > typeof Node ? Node.ELEMENT_NODE : void 0) || 1),
      _v10 = (void 0 !== _v0 ? _v0.getComputedStyle : void 0) || ("u" > typeof window ? window.getComputedStyle : void 0) || globalThis.getComputedStyle,
      _v11 = (void 0 !== _v0 ? _v0.atob : void 0) || ("u" > typeof window ? window.atob : void 0) || globalThis.atob;
    function _v12(_v0, _v1) {
      let _v2 = _v8.impl.util.getWindow(_v0);
      var _v3 = _v1 = _v1 || {};
      void 0 === _v3.copyDefaultStyles ? _v8.impl.options.copyDefaultStyles = _v7.copyDefaultStyles : _v8.impl.options.copyDefaultStyles = _v3.copyDefaultStyles, _v8.impl.options.imagePlaceholder = (void 0 === _v3.imagePlaceholder ? _v7 : _v3).imagePlaceholder, _v8.impl.options.cacheBust = (void 0 === _v3.cacheBust ? _v7 : _v3).cacheBust, _v8.impl.options.corsImg = (void 0 === _v3.corsImg ? _v7 : _v3).corsImg, _v8.impl.options.useCredentials = (void 0 === _v3.useCredentials ? _v7 : _v3).useCredentials, _v8.impl.options.useCredentialsFilters = (void 0 === _v3.useCredentialsFilters ? _v7 : _v3).useCredentialsFilters, _v8.impl.options.httpTimeout = (void 0 === _v3.httpTimeout ? _v7 : _v3).httpTimeout, _v8.impl.options.styleCaching = (void 0 === _v3.styleCaching ? _v7 : _v3).styleCaching;
      let _v4 = [];
      return Promise.resolve(_v0).then(function (_v0) {
        if (_v0.nodeType === _v9) return _v0;
        var _v1 = _v0.parentNode,
          _v2 = document.createElement("span");
        return _v1.replaceChild(_v2, _v0), _v2.append(_v0), _v4.push({
          parent: _v1,
          child: _v0,
          wrapper: _v2
        }), _v2;
      }).then(function (_v0) {
        return function _v0(_v1, _v2, _v3, _v4) {
          let _v5 = _v2.filter;
          return _v1 === _v14 || _v1.isHTMLScriptElement(_v1) || _v1.isHTMLStyleElement(_v1) || _v1.isHTMLLinkElement(_v1) || null !== _v3 && _v5 && !_v5(_v1) ? Promise.resolve() : Promise.resolve(_v1).then(function (_v0) {
            return _v1.isHTMLCanvasElement(_v0) ? _v1.makeImage(_v0.toDataURL()) : _v0.cloneNode(!1);
          }).then(function (_v0) {
            return _v2.adjustClonedNode && _v2.adjustClonedNode(_v1, _v0, !1), Promise.resolve(_v0);
          }).then(function (_v0) {
            var _v1;
            return function (_v0, _v1) {
              let _v2 = function (_v0) {
                  if (_v1.isShadowSlotElement(_v0)) {
                    let _v0 = _v0.assignedNodes();
                    if (_v0 && 0 < _v0.length) return _v0;
                  }
                  return _v0.childNodes;
                }(_v1),
                _v3 = Promise.resolve();
              if (0 !== _v2.length) {
                var _v4;
                let _v0 = _v10((_v4 = _v1, _v1.isShadowRoot(_v4) ? _v4.host : _v4));
                _v1.asArray(_v2).forEach(function (_v0) {
                  _v3 = _v3.then(function () {
                    return _v0(_v0, _v2, _v0, _v4).then(function (_v0) {
                      _v0 && _v0.appendChild(_v0);
                    });
                  });
                });
              }
              return _v3.then(function () {
                return _v0;
              });
            }(_v0, (_v1 = _v1, _v1.isElementHostForOpenShadowRoot(_v1) ? _v1.shadowRoot : _v1));
          }).then(function (_v0) {
            return _v2.adjustClonedNode && _v2.adjustClonedNode(_v1, _v0, !0), Promise.resolve(_v0);
          }).then(function (_v0) {
            var _v1, _v2;
            return _v1 = _v0, _v2 = _v1, !_v1.isElement(_v1) || _v1.isShadowSlotElement(_v2) ? Promise.resolve(_v1) : Promise.resolve().then(function () {
              var _v0, _v1, _v2, _v3, _v4, _v5;
              let _v6, _v7, _v8;
              (_v6 = _v10(_v2)).cssText ? (_v1.style.cssText = _v6.cssText, (_v0 = _v1.style).font = _v6.font, _v0.fontFamily = _v6.fontFamily, _v0.fontFeatureSettings = _v6.fontFeatureSettings, _v0.fontKerning = _v6.fontKerning, _v0.fontSize = _v6.fontSize, _v0.fontStretch = _v6.fontStretch, _v0.fontStyle = _v6.fontStyle, _v0.fontVariant = _v6.fontVariant, _v0.fontVariantCaps = _v6.fontVariantCaps, _v0.fontVariantEastAsian = _v6.fontVariantEastAsian, _v0.fontVariantLigatures = _v6.fontVariantLigatures, _v0.fontVariantNumeric = _v6.fontVariantNumeric, _v0.fontVariationSettings = _v6.fontVariationSettings, _v0.fontWeight = _v6.fontWeight) : (_v1 = _v2, _v2 = _v2, _v3 = _v6, _v4 = _v3, _v5 = _v1, _v7 = _v8.impl.options.copyDefaultStyles ? ((_v0, _v1) => {
                let _v2, _v3, _v4;
                var _v5,
                  _v6,
                  _v7,
                  _v8 = (_v2 = _v1 = (_v0 => {
                    var _v1 = [];
                    do if (_v0.nodeType === _v9) {
                      var _v2 = _v0.tagName;
                      if (_v1.push(_v2), _v19.includes(_v2)) break;
                    } while (_v0 = _v0.parentNode);
                    return _v1;
                  })(_v1), ("relaxed" !== _v0.styleCaching ? _v2 : _v2.filter((_v0, _v1, _v2) => 0 === _v1 || _v1 === _v2.length - 1)).join(">"));
                if (_v18[_v8]) return _v18[_v8];
                _v1 = ((_v0, _v1) => {
                  let _v2 = _v0.body;
                  do {
                    var _v3 = _v1.pop(),
                      _v3 = _v0.createElement(_v3);
                    _v2.appendChild(_v3), _v2 = _v3;
                  } while (0 < _v1.length);
                  return _v2.textContent = "​", _v2;
                })((_v7 = (() => {
                  if (_v14) return _v14.contentWindow;
                  _v1 = document.characterSet || "UTF-8", _v0 = (_v0 = document.doctype) ? (`<!DOCTYPE ${_v7(_v0.name)} ${_v7(_v0.publicId)} ` + _v7(_v0.systemId)).trim() + ">" : "", (_v14 = document.createElement("iframe")).id = "domtoimage-sandbox-" + _v1.uid(), _v14.style.visibility = "hidden", _v14.style.position = "fixed", document.body.appendChild(_v14);
                  var _v0,
                    _v1,
                    _v2 = _v14,
                    _v3 = "domtoimage-sandbox";
                  try {
                    return _v2.contentWindow.document.write(_v0 + `<html><head><meta charset='${_v1}'><title>${_v3}</title></head><body></body></html>`), _v2.contentWindow;
                  } catch (_v0) {}
                  var _v4 = document.createElement("meta");
                  _v4.setAttribute("charset", _v1);
                  try {
                    var _v5 = document.implementation.createHTMLDocument(_v3),
                      _v6 = (_v5.head.appendChild(_v4), _v0 + _v5.documentElement.outerHTML);
                    return _v2.setAttribute("srcdoc", _v6), _v2.contentWindow;
                  } catch (_v0) {}
                  return _v2.contentDocument.head.appendChild(_v4), _v2.contentDocument.title = _v3, _v2.contentWindow;
                  function _v7(_v0) {
                    var _v1;
                    return _v0 ? ((_v1 = document.createElement("div")).innerText = _v0, _v1.innerHTML) : "";
                  }
                })()).document, _v1), _v5 = _v7, _v6 = _v1, _v3 = {}, _v4 = _v5.getComputedStyle(_v6), _v1.asArray(_v4).forEach(function (_v0) {
                  _v3[_v0] = "width" === _v0 || "height" === _v0 ? "auto" : _v4.getPropertyValue(_v0);
                }), _v7 = _v3;
                var _v9 = _v1;
                do {
                  var _v10 = _v9.parentElement;
                  null !== _v10 && _v10.removeChild(_v9), _v9 = _v10;
                } while (_v9 && "BODY" !== _v9.tagName);
                return _v18[_v8] = _v7;
              })(_v1, _v2) : {}, _v8 = _v5.style, _v1.asArray(_v3).forEach(function (_v0) {
                var _v1,
                  _v2 = _v3.getPropertyValue(_v0),
                  _v3 = _v7[_v0],
                  _v4 = _v4 ? _v4.getPropertyValue(_v0) : void 0;
                _v8.getPropertyValue(_v0) || (_v2 !== _v3 || _v4 && _v2 !== _v4) && (_v3 = _v3.getPropertyPriority(_v0), _v4 = _v8, _v1 = 0 <= ["background-clip"].indexOf(_v0), _v3 ? (_v4.setProperty(_v0, _v2, _v3), _v1 && _v4.setProperty("-webkit-" + _v0, _v2, _v3)) : (_v4.setProperty(_v0, _v2), _v1 && _v4.setProperty("-webkit-" + _v0, _v2)));
              }), null === _v3 && (["inset-block", "inset-block-start", "inset-block-end"].forEach(_v0 => _v1.style.removeProperty(_v0)), ["left", "right", "top", "bottom"].forEach(_v0 => {
                _v1.style.getPropertyValue(_v0) && _v1.style.setProperty(_v0, "0px");
              })));
            }).then(function () {
              let _v0 = _v1.uid();
              [":before", ":after"].forEach(function (_v0) {
                !function (_v0) {
                  let _v1 = _v10(_v2, _v0),
                    _v2 = _v1.getPropertyValue("content");
                  if ("" !== _v2 && "none" !== _v2) {
                    let _v0,
                      _v1,
                      _v2 = _v1.getAttribute("class") || "",
                      _v3 = (_v1.setAttribute("class", _v2 + " " + _v0), document.createElement("style"));
                    _v3.appendChild((_v0 = `.${_v0}:` + _v0, _v1 = (_v1.cssText ? function () {
                      return `${_v1.cssText} content: ${_v2};`;
                    } : function () {
                      return _v1.asArray(_v1).map(function (_v0) {
                        let _v1 = _v1.getPropertyValue(_v0),
                          _v2 = _v1.getPropertyPriority(_v0) ? " !important" : "";
                        return _v0 + ": " + _v1 + _v2;
                      }).join("; ") + ";";
                    })(), document.createTextNode(_v0 + `{${_v1}}`))), _v1.appendChild(_v3);
                  }
                }(_v0);
              });
            }).then(function () {
              _v1.isHTMLTextAreaElement(_v2) && (_v1.innerHTML = _v2.value), _v1.isHTMLInputElement(_v2) && _v1.setAttribute("value", _v2.value);
            }).then(function () {
              _v1.isSVGElement(_v1) && (_v1.setAttribute("xmlns", "http://www.w3.org/2000/svg"), _v1.isSVGRectElement(_v1)) && ["width", "height"].forEach(function (_v0) {
                let _v1 = _v1.getAttribute(_v0);
                _v1 && _v1.style.setProperty(_v0, _v1);
              });
            }).then(function () {
              return _v1;
            });
          });
        }(_v0, _v1, null, _v2);
      }).then(_v1.disableEmbedFonts ? Promise.resolve(_v0) : _v15).then(_v16).then(function (_v0) {
        _v1.bgcolor && (_v0.style.backgroundColor = _v1.bgcolor), _v1.width && (_v0.style.width = _v1.width + "px"), _v1.height && (_v0.style.height = _v1.height + "px"), _v1.style && Object.keys(_v1.style).forEach(function (_v0) {
          _v0.style[_v0] = _v1.style[_v0];
        });
        let _v1 = null;
        return "function" == typeof _v1.onclone && (_v1 = _v1.onclone(_v0)), Promise.resolve(_v1).then(function () {
          return _v0;
        });
      }).then(function (_v0) {
        let _v1 = _v1.width || _v1.width(_v0),
          _v2 = _v1.height || _v1.height(_v0);
        return Promise.resolve(_v0).then(function (_v0) {
          return _v0.setAttribute("xmlns", "http://www.w3.org/1999/xhtml"), new XMLSerializer().serializeToString(_v0);
        }).then(_v1.escapeXhtml).then(function (_v0) {
          var _v1 = (_v1.isDimensionMissing(_v1) ? ' width="100%"' : ` width="${_v1}"`) + (_v1.isDimensionMissing(_v2) ? ' height="100%"' : ` height="${_v2}"`);
          return `<svg xmlns="http://www.w3.org/2000/svg"${(_v1.isDimensionMissing(_v1) ? "" : ` width="${_v1}"`) + (_v1.isDimensionMissing(_v2) ? "" : ` height="${_v2}"`)}><foreignObject${_v1}>${_v0}</foreignObject></svg>`;
        }).then(function (_v0) {
          return "data:image/svg+xml;charset=utf-8," + _v0;
        });
      }).then(function (_v0) {
        for (; 0 < _v4.length;) {
          var _v1 = _v4.pop();
          _v1.parent.replaceChild(_v1.child, _v1.wrapper);
        }
        return _v0;
      }).then(function (_v0) {
        return _v8.impl.urlCache = [], _v14 && (document.body.removeChild(_v14), _v14 = null), _v17 && clearTimeout(_v17), _v17 = setTimeout(() => {
          _v17 = null, _v18 = {};
        }, 0), _v0;
      });
    }
    function _v13(_v0, _v1) {
      return _v12(_v0, _v1 = _v1 || {}).then(_v1.makeImage).then(function (_v0) {
        let _v1, _v2;
        var _v3,
          _v4,
          _v5 = "number" != typeof _v1.scale ? 1 : _v1.scale,
          _v6 = (_v3 = _v0, _v4 = _v5, _v1 = _v1.width || _v1.width(_v3), _v2 = _v1.height || _v1.height(_v3), _v1.isDimensionMissing(_v1) && (_v1 = _v1.isDimensionMissing(_v2) ? 300 : 2 * _v2), _v1.isDimensionMissing(_v2) && (_v2 = _v1 / 2), (_v3 = document.createElement("canvas")).width = _v1 * _v4, _v3.height = _v2 * _v4, _v1.bgcolor && ((_v4 = _v3.getContext("2d")).fillStyle = _v1.bgcolor, _v4.fillRect(0, 0, _v3.width, _v3.height)), _v3),
          _v7 = _v6.getContext("2d");
        return _v7.msImageSmoothingEnabled = !1, _v7.imageSmoothingEnabled = !1, _v0 && (_v7.scale(_v5, _v5), _v7.drawImage(_v0, 0, 0)), _v6;
      });
    }
    let _v14 = null;
    function _v15(_v0) {
      return _v3.resolveAll().then(function (_v0) {
        var _v1;
        return "" !== _v0 && (_v1 = document.createElement("style"), _v0.appendChild(_v1), _v1.appendChild(document.createTextNode(_v0))), _v0;
      });
    }
    function _v16(_v0) {
      return _v5.inlineAll(_v0).then(function () {
        return _v0;
      });
    }
    let _v17 = null,
      _v18 = {},
      _v19 = ["ADDRESS", "ARTICLE", "ASIDE", "BLOCKQUOTE", "DETAILS", "DIALOG", "DD", "DIV", "DL", "DT", "FIELDSET", "FIGCAPTION", "FIGURE", "FOOTER", "FORM", "H1", "H2", "H3", "H4", "H5", "H6", "HEADER", "HGROUP", "HR", "LI", "MAIN", "NAV", "OL", "P", "PRE", "SECTION", "SVG", "TABLE", "UL", "math", "svg", "BODY", "HEAD", "HTML"];
  })(_v0.e);
}