{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  let _v5 = "https://recordwidget.vimeocdn.com/recordwidget/assets/record-studio/",
    _v6 = _v5 + "record-studio-use-case-desktop.mp4",
    _v7 = _v5 + "record-studio-use-case-desktop-thumbnail.png",
    _v8 = () => (0, _v1.jsx)(_v3.Flex, {
      hideBelow: "lg",
      position: "absolute",
      flexDirection: "row-reverse",
      right: 0,
      top: 0,
      bottom: 0,
      children: (0, _v1.jsx)(_v4.Box, {
        as: "video",
        width: "auto",
        height: "100%",
        objectFit: "cover",
        src: _v6,
        poster: _v7,
        muted: !0,
        autoPlay: !0,
        loop: !0,
        playsInline: !0
      })
    });
  var _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0);
  let _v19 = _v0 => !!(_v0 && "string" == typeof _v0),
    _v20 = (0, _v0.i(0).isChrome)();
  var _v21 = _v0.i(0);
  let _v22 = {
    downloadTitle: (0, _v21.translate)({
      singular: "Record your screen, yourself, or both",
      dictionary: {
        es: {
          singular: "Graba tu pantalla, tu cámara o ambos"
        },
        "de-DE": {
          singular: "Nehmen Sie Ihren Bildschirm, sich selbst oder beides auf"
        },
        "fr-FR": {
          singular: "Enregistrez votre écran, vous‑même ou les deux"
        },
        "ja-JP": {
          singular: "画面、本人、またはその両方を録画"
        },
        "ko-KR": {
          singular: "화면, 본인 또는 둘 다를 녹화하세요"
        },
        "pt-BR": {
          singular: "Grave sua tela, a si mesmo ou ambos"
        },
        "zh-CN": {
          singular: "录制屏幕、自己或同时录制两者"
        }
      }
    }),
    recordStudioTitle: (0, _v21.translate)({
      singular: "Web Record Studio",
      dictionary: {
        es: {
          singular: "Record Studio web"
        },
        "de-DE": {
          singular: "Webstudio"
        },
        "ko-KR": {
          singular: "웹 녹화 스튜디오"
        },
        "pt-BR": {
          singular: "Estúdio de gravação online"
        },
        "zh-CN": {
          singular: "网络 Record Studio"
        }
      }
    }),
    recordStudioDescription: (0, _v21.translate)({
      singular: "Record from your browser with all of our advanced features",
      dictionary: {
        es: {
          singular: "Grabe desde su navegador con todas nuestras funciones avanzadas"
        },
        "de-DE": {
          singular: "Starte die Aufnahme von deinem Browser aus mit all unseren erweiterten Funktionen"
        },
        "fr-FR": {
          singular: "Enregistrez à partir de votre navigateur grâce à toutes nos fonctionnalités avancées"
        },
        "ja-JP": {
          singular: "ブラウザからすべての高度な機能を使用して録画"
        },
        "ko-KR": {
          singular: "Vimeo의 모든 고급 기능을 사용해 브라우저에서 녹화하기"
        },
        "pt-BR": {
          singular: "Gravar do seu navegador com todos os nossos recursos avançados"
        },
        "zh-CN": {
          singular: "利用我们的所有高级功能从浏览器进行录制"
        }
      }
    }),
    recordStudioUnavailable: (0, _v21.translate)({
      singular: "Available for Chrome, Safari, and Edge",
      dictionary: {
        es: {
          singular: "Disponible para Chrome, Safari y Edge"
        },
        "de-DE": {
          singular: "Verfügbar für Chrome, Safari und Edge"
        },
        "fr-FR": {
          singular: "Disponible pour Chrome, Safari et Edge"
        },
        "ja-JP": {
          singular: "Chrome、Safari、Edgeで利用可能"
        },
        "ko-KR": {
          singular: "Chrome, Safari, Edge에서 사용 가능"
        },
        "pt-BR": {
          singular: "Disponível no Chrome, Safari e Edge"
        },
        "zh-CN": {
          singular: "适用于 Chrome、Safari 和 Edge"
        }
      }
    }),
    openRecordStudio: (0, _v21.translate)({
      singular: "Open Record Studio",
      dictionary: {
        es: {
          singular: "Abrir Record Studio"
        },
        "de-DE": {
          singular: "Öffnen Sie das Aufnahmestudio"
        },
        "fr-FR": {
          singular: "Ouvrir Record Studio"
        },
        "ja-JP": {
          singular: "Record Studioを開く"
        },
        "ko-KR": {
          singular: "녹화 스튜디오 열기"
        },
        "pt-BR": {
          singular: "Abrir o estúdio de gravação"
        },
        "zh-CN": {
          singular: "打开 Record Studio"
        }
      }
    }),
    extensionTitle: (0, _v21.translate)({
      singular: "Chrome extension",
      dictionary: {
        es: {
          singular: "Extensión de Chrome"
        },
        "de-DE": {
          singular: "Chrome-Erweiterung"
        },
        "fr-FR": {
          singular: "Extension Chrome"
        },
        "ja-JP": {
          singular: "Chrome拡張機能"
        },
        "ko-KR": {
          singular: "Chrome 확장 프로그램"
        },
        "pt-BR": {
          singular: "Extensão do Chrome"
        },
        "zh-CN": {
          singular: "Chrome 扩展程序"
        }
      }
    }),
    extensionDescription: (0, _v21.translate)({
      singular: "Create simple recordings fast with our browser shortcut",
      dictionary: {
        es: {
          singular: "Cree grabaciones simples rápidamente con nuestro acceso directo del navegador"
        },
        "de-DE": {
          singular: "Erstelle schnell einfache Aufnahmen mit unserer Browser-Verknüpfung"
        },
        "fr-FR": {
          singular: "Créez de simples enregistrements rapidement grâce à notre raccourci de navigateur"
        },
        "ja-JP": {
          singular: "ブラウザのショートカットを使用してシンプルな録画をすばやく作成"
        },
        "ko-KR": {
          singular: "브라우저 바로 가기를 사용하여 빠르고 간단하게 녹화하기"
        },
        "pt-BR": {
          singular: "Criar gravações simples e rápidas com o atalho do nosso navegador"
        },
        "zh-CN": {
          singular: "使用我们的浏览器快捷方式快速创建简单录像"
        }
      }
    }),
    extensionDescriptionUnavailable: (0, _v21.translate)({
      singular: "Available for Chrome only",
      dictionary: {
        es: {
          singular: "Disponible solo para Chrome"
        },
        "de-DE": {
          singular: "Nur für Chrome verfügbar"
        },
        "fr-FR": {
          singular: "Disponible uniquement pour Chrome"
        },
        "ja-JP": {
          singular: "Chromeのみで利用可能"
        },
        "ko-KR": {
          singular: "Chrome에서만 사용 가능"
        },
        "pt-BR": {
          singular: "Disponível apenas no Chrome"
        },
        "zh-CN": {
          singular: "仅可用于 Chrome"
        }
      }
    }),
    extensionButtonCopy: (0, _v21.translate)({
      singular: "Install extension",
      dictionary: {
        es: {
          singular: "Instalar la extensión"
        },
        "de-DE": {
          singular: "Erweiterung installieren"
        },
        "fr-FR": {
          singular: "Installer l'extension"
        },
        "ja-JP": {
          singular: "拡張機能をインストール"
        },
        "ko-KR": {
          singular: "확장 프로그램 설치"
        },
        "pt-BR": {
          singular: "Instalar extensão"
        },
        "zh-CN": {
          singular: "安装扩展程序"
        }
      }
    }),
    thirdPartySoftwareNotice: (0, _v21.translate)({
      singular: "{SOFTWARE_REPORT_LINK}Third-party software report{/SOFTWARE_REPORT_LINK}",
      replacements: {
        SOFTWARE_REPORT_LINK: _v0 => (0, _v1.jsx)(_v4.Box, {
          as: "a",
          href: "https://recordwidget.vimeocdn.com/recordwidget/desktop/assets/desktop-report.html",
          target: "_blank",
          cursor: "pointer",
          textDecoration: "none",
          color: "blue.500",
          children: _v0
        }, _v0)
      },
      dictionary: {
        es: {
          singular: "{SOFTWARE_REPORT_LINK}Informe de software externo{/SOFTWARE_REPORT_LINK}"
        },
        "de-DE": {
          singular: "{SOFTWARE_REPORT_LINK}Support für Software von Drittanbietern{/SOFTWARE_REPORT_LINK}"
        },
        "fr-FR": {
          singular: "{SOFTWARE_REPORT_LINK}Signalement de logiciel tiers{/SOFTWARE_REPORT_LINK}"
        },
        "ja-JP": {
          singular: "{SOFTWARE_REPORT_LINK}サードパーティのソフトウェアレポート{/SOFTWARE_REPORT_LINK}"
        },
        "ko-KR": {
          singular: "{SOFTWARE_REPORT_LINK}타사 소프트웨어 보고서{/SOFTWARE_REPORT_LINK}"
        },
        "pt-BR": {
          singular: "{SOFTWARE_REPORT_LINK}Relatório de software de terceiros{/SOFTWARE_REPORT_LINK}"
        },
        "zh-CN": {
          singular: "{SOFTWARE_REPORT_LINK}第三方软件报告{/SOFTWARE_REPORT_LINK}"
        }
      }
    })
  };
  async function _v23() {
    try {
      let _v0 = await Promise.race([window.fetch("chrome-extension://ejfmffkmeigkphomnpabpdabfddeadcb/icons/icon_16.png"), new Promise((_v0, _v1) => {
        setTimeout(() => _v1("isRecordChromeExtensionInstalled request timeout"), 500);
      })]);
      return 200 === _v0.status && _v0.ok;
    } catch {
      return !1;
    }
  }
  let _v24 = () => {
    var _v0;
    let _v1,
      _v2 = (0, _v2.useContext)(_v18.ViewerContext),
      _v3 = (_v0 = (0, _v9.useRouter)().query, _v1 = new URLSearchParams(), _v19(_v0.utm_campaign) && _v1.set("utm_campaign", _v0.utm_campaign), _v19(_v0.utm_content) && _v1.set("utm_content", _v0.utm_content), _v19(_v0.utm_source) && _v1.set("utm_source", _v0.utm_source), _v19(_v0.vcid) && _v1.set("vcid", _v0.vcid), "?" + _v1.toString()),
      [_v4, _v5] = (0, _v2.useState)(!1),
      [_v6, _v7] = (0, _v2.useState)(!0),
      [_v8, _v9] = (0, _v2.useState)(void 0),
      [_v10, _v11] = (0, _v17.useToken)("breakpoints", ["lg", "xl"]),
      [_v12, _v13] = (0, _v16.useMediaQuery)([`(min-width: ${_v10})`, `(max-width: ${_v11})`]),
      _v14 = _v12 && _v13 ? "md" : "lg";
    (0, _v2.useEffect)(() => {
      _v5(!0);
    }, [_v5]), (0, _v2.useEffect)(() => {
      _v23().then(_v0 => {
        _v9(_v0);
      });
    }, []);
    let _v15 = (0, _v9.useRouter)();
    return ((0, _v2.useEffect)(() => {
      _v15.isReady && "start_recording" === _v15.query.referrer && _v7(!1);
    }, [_v15]), _v4) ? (0, _v1.jsxs)(_v15.VStack, {
      alignItems: "flex-start",
      justify: "center",
      flexGrow: "1",
      maxWidth: (0, _v10.rem)(700),
      paddingX: {
        base: "400",
        xl: "800"
      },
      children: [(0, _v1.jsx)(_v13.Header, {
        size: "xl",
        marginBottom: "400",
        children: _v22.downloadTitle
      }), (0, _v1.jsxs)(_v15.VStack, {
        as: "ul",
        gap: "200",
        children: [_v6 && (0, _v1.jsxs)(_v12.HStack, {
          as: "li",
          width: "100%",
          border: "1px solid",
          borderColor: "stroke",
          borderRadius: "button",
          justify: "space-between",
          padding: "400",
          gap: "400",
          children: [(0, _v1.jsxs)(_v15.VStack, {
            align: "start",
            children: [(0, _v1.jsx)(_v13.Header, {
              size: "md",
              children: _v22.recordStudioTitle
            }), (0, _v1.jsx)(_v14.Paragraph, {
              children: _v2?.isRecordToolSupported ? _v22.recordStudioDescription : _v22.recordStudioUnavailable
            })]
          }), (0, _v1.jsx)(_v11.Button, {
            isDisabled: !_v2?.isRecordToolSupported,
            size: _v14,
            variant: "primary",
            ...(_v2?.isRecordToolSupported ? {
              as: "a",
              href: "/record/start-recording"
            } : {}),
            children: _v22.openRecordStudio
          })]
        }), !1 === _v8 && (0, _v1.jsxs)(_v12.HStack, {
          as: "li",
          width: "100%",
          border: "1px solid",
          borderColor: "stroke",
          borderRadius: "button",
          justify: "space-between",
          padding: "400",
          gap: "400",
          children: [(0, _v1.jsxs)(_v15.VStack, {
            align: "start",
            children: [(0, _v1.jsx)(_v13.Header, {
              size: "md",
              children: _v22.extensionTitle
            }), (0, _v1.jsx)(_v14.Paragraph, {
              children: _v20 ? _v22.extensionDescription : _v22.extensionDescriptionUnavailable
            })]
          }), (0, _v1.jsx)(_v11.Button, {
            isDisabled: !_v20,
            size: _v14,
            variant: "secondary",
            ...(_v20 ? {
              as: "a",
              href: "https://chromewebstore.google.com/detail/vimeo-record-screen-webca/ejfmffkmeigkphomnpabpdabfddeadcb" + _v3,
              target: "_blank"
            } : {}),
            children: _v22.extensionButtonCopy
          })]
        })]
      })]
    }) : (0, _v1.jsx)(_v1.Fragment, {});
  };
  var _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0);
  let _v29 = () => {
    let [_v0, _v1] = (0, _v2.useState)(!1),
      _v2 = (0, _v2.useRef)(null),
      _v3 = (0, _v2.useCallback)(() => {
        _v0 || _v1(!0), _v2.current && clearTimeout(_v2.current);
      }, [_v0, _v1]),
      _v4 = (0, _v2.useCallback)(() => {
        _v2.current = setTimeout(() => {
          _v1(!1), _v2.current = null;
        }, 500);
      }, [_v1]);
    return (0, _v1.jsxs)(_v25.Popover, {
      isOpen: _v0,
      children: [(0, _v1.jsx)(_v27.PopoverTrigger, {
        children: (0, _v1.jsx)(_v4.Box, {
          position: "fixed",
          bottom: (0, _v10.rem)(22),
          right: (0, _v10.rem)(32),
          opacity: .3,
          onMouseEnter: _v3,
          onMouseLeave: _v4,
          children: (0, _v1.jsx)(_v28.InfoCircle, {})
        })
      }), (0, _v1.jsx)(_v26.PopoverContent, {
        padding: "75",
        children: (0, _v1.jsx)(_v14.Paragraph, {
          size: "md",
          onMouseEnter: _v3,
          onMouseLeave: _v4,
          children: _v22.thirdPartySoftwareNotice
        })
      })]
    });
  };
  var _v30 = _v0.i(0),
    _v31 = _v0.i(0),
    _v32 = _v0.i(0);
  let _v33 = () => ((0, _v2.useEffect)(() => {
    _v30.BigPictureClient.sendEvent(new _v30.Event("vimeo.record_pageview", 1, {
      name: '"Download. Get started with Record" page was shown',
      path: window.location.origin + window.location.pathname,
      entry_page: document.referrer || null,
      clip_id: null
    }));
  }, []), (0, _v1.jsxs)(_v1.Fragment, {
    children: [(0, _v1.jsxs)(_v3.Flex, {
      position: "relative",
      width: "100%",
      height: "100%",
      flexGrow: "1",
      children: [(0, _v1.jsx)(_v8, {}), (0, _v1.jsxs)(_v3.Flex, {
        flexDirection: "column",
        background: "background",
        width: {
          base: "100%",
          lg: "50%"
        },
        alignItems: {
          base: "center",
          lg: "flex-end"
        },
        left: 0,
        top: 0,
        bottom: 0,
        zIndex: 1,
        children: [(0, _v1.jsx)(_v32.RecordNavBar, {}), (0, _v1.jsx)(_v24, {})]
      }), (0, _v1.jsx)(_v29, {})]
    }), (0, _v1.jsx)(_v31.RecordFooter, {})]
  }));
  _v33.getLayout = _v0 => (0, _v1.jsx)(_v1.Fragment, {
    children: _v0
  }), _v0.s(["__N_SSG", 0, !0, "default", 0, _v33], 0);
}