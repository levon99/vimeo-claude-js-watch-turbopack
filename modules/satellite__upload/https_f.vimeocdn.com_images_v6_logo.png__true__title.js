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
  function _v9({
    title: _v0,
    description: _v1,
    publicBasePath: _v2,
    robots: _v3,
    ogImage: _v4 = "https://f.vimeocdn.com/images_v6/logo.png"
  }) {
    let _v5 = function (_v0) {
      if ("true" === _v6.default.env.I18N_TEMPLATE) return `{{sat ${_v0} sat}}`;
      let _v1 = _v8.LOCALE_TO_SUBFOLDER[(0, _v7.getCurrentLocale)()];
      return `${_v5.SEO_ORIGIN}${_v1 ? `/${_v1}` : ""}${_v0}`;
    }(_v2);
    return (0, _v1.jsxs)(_v4.default, {
      children: [(0, _v1.jsx)("title", {
        children: _v0
      }), (0, _v1.jsx)("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }, "viewport"), (0, _v1.jsx)("meta", {
        name: "description",
        content: _v1
      }, "description"), _v3 && (0, _v1.jsx)("meta", {
        name: "robots",
        content: _v3
      }, "robots"), (0, _v1.jsx)("link", {
        rel: "canonical",
        href: _v5
      }, "canonical"), (0, _v1.jsx)("meta", {
        property: "og:title",
        content: _v0
      }, "og:title"), (0, _v1.jsx)("meta", {
        property: "og:description",
        content: _v1
      }, "og:description"), (0, _v1.jsx)("meta", {
        property: "og:type",
        content: "website"
      }, "og:type"), (0, _v1.jsx)("meta", {
        property: "og:url",
        content: _v5
      }, "og:url"), (0, _v1.jsx)("meta", {
        property: "og:site_name",
        content: "Vimeo"
      }, "og:site_name"), (0, _v1.jsx)("meta", {
        property: "og:image",
        content: _v4
      }, "og:image"), (0, _v1.jsx)("meta", {
        property: "og:image:secure_url",
        content: _v4
      }, "og:image:secure_url"), (0, _v1.jsx)("meta", {
        property: "og:image:type",
        content: "image/png"
      }, "og:image:type"), (0, _v1.jsx)("meta", {
        property: "og:image:alt",
        content: _v0
      }, "og:image:alt"), (0, _v1.jsx)("meta", {
        name: "twitter:card",
        content: "summary_large_image"
      }, "twitter:card"), (0, _v1.jsx)("meta", {
        name: "twitter:site",
        content: "@vimeo"
      }, "twitter:site"), (0, _v1.jsx)("meta", {
        name: "twitter:title",
        content: _v0
      }, "twitter:title"), (0, _v1.jsx)("meta", {
        name: "twitter:description",
        content: _v1
      }, "twitter:description"), (0, _v1.jsx)("meta", {
        name: "twitter:image",
        content: _v4
      }, "twitter:image"), (0, _v1.jsx)("link", {
        rel: "apple-touch-icon-precomposed",
        href: "https://f.vimeocdn.com/cms/images/apple-icon.png"
      }, "apple-touch-icon"), (0, _v5.satelliteHreflangAlternates)(_v2).map(({
        hreflang: _v0,
        href: _v1
      }) => (0, _v1.jsx)("link", {
        rel: "alternate",
        hrefLang: _v0,
        href: _v1
      }, `hreflang-${_v0}`))]
    });
  }
  var _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0),
    _v32 = _v0.i(0),
    _v33 = _v0.i(0);
  let _v34 = ({
    cta: _v0,
    children: _v1,
    ..._v2
  }) => _v0 ? (0, _v1.jsx)(_v22.Link, {
    as: _v0.href ? void 0 : "button",
    href: _v0.href,
    target: _v0.target,
    rel: "_blank" === _v0.target ? "noopener noreferrer" : void 0,
    onClick: _v0.onClick,
    ..._v2,
    children: _v1
  }) : (0, _v1.jsx)(_v1.Fragment, {
    children: _v1
  });
  var _v35 = _v0.i(0);
  let _v36 = ({
    children: _v0,
    ..._v1
  }) => (0, _v1.jsx)(_v35.Container, {
    maxW: (0, _v23.rem)(0),
    px: {
      base: (0, _v23.rem)(20),
      md: (0, _v23.rem)(40)
    },
    py: {
      base: (0, _v23.rem)(48),
      md: (0, _v23.rem)(80)
    },
    ..._v1,
    children: _v0
  });
  var _v37 = _v0.i(0);
  let _v38 = ({
      label: _v0,
      href: _v1,
      onClick: _v2,
      target: _v3,
      variant: _v4 = "secondary",
      size: _v5
    }) => (0, _v1.jsx)(_v37.Button, {
      as: _v1 ? "a" : void 0,
      href: _v1,
      target: _v1 ? _v3 : void 0,
      rel: _v1 && "_blank" === _v3 ? "noopener noreferrer" : void 0,
      variant: _v4,
      size: _v5,
      onClick: _v2,
      children: _v0
    }),
    _v39 = ({
      children: _v0
    }) => (0, _v1.jsx)(_v21.Header, {
      as: "h2",
      variant: "heading-2xl",
      textAlign: "center",
      color: "text-primary",
      mb: (0, _v23.rem)(32),
      children: _v0
    }),
    _v40 = ({
      imgSrc: _v0,
      imgAlt: _v1,
      title: _v2,
      description: _v3,
      subDescription: _v4,
      cta: _v5,
      background: _v6
    }) => (0, _v1.jsxs)(_v29.Card, {
      role: "group",
      overflow: "hidden",
      bg: _v6,
      borderRadius: (0, _v23.rem)(16),
      height: "100%",
      children: [_v0 && (0, _v1.jsx)(_v34, {
        cta: _v5,
        display: "block",
        border: "none",
        p: 0,
        bg: "transparent",
        children: (0, _v1.jsx)(_v31.Image, {
          src: _v0,
          alt: _v1 ?? "",
          w: "100%",
          objectFit: "cover",
          aspectRatio: 16 / 9
        })
      }), (0, _v1.jsxs)(_v30.CardBody, {
        pt: {
          base: (0, _v23.rem)(64),
          md: (0, _v23.rem)(40)
        },
        pb: {
          base: (0, _v23.rem)(72),
          md: (0, _v23.rem)(40)
        },
        px: {
          base: (0, _v23.rem)(32),
          md: (0, _v23.rem)(64)
        },
        flex: "1",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: (0, _v23.rem)(24),
        children: [(0, _v1.jsx)(_v21.Header, {
          as: "h3",
          variant: "heading-xl",
          color: "text-primary",
          children: (0, _v1.jsx)(_v34, {
            cta: _v5,
            textAlign: "left",
            color: "text-primary",
            textDecoration: "none",
            _hover: {
              textDecoration: "none"
            },
            _groupHover: {
              textDecoration: "underline"
            },
            children: _v2
          })
        }), (_v3 || _v4) && (0, _v1.jsxs)(_v33.Stack, {
          spacing: (0, _v23.rem)(8),
          flexGrow: 1,
          children: [_v3 && (0, _v1.jsx)(_v24.Text, {
            fontSize: (0, _v23.rem)(20),
            color: "text-secondary",
            children: _v3
          }), _v4 && (0, _v1.jsx)(_v24.Text, {
            fontSize: (0, _v23.rem)(20),
            color: "text-secondary",
            children: _v4
          })]
        }), _v5 && (0, _v1.jsx)(_v19.Box, {
          mt: (0, _v23.rem)(8),
          flex: "1",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "flex-start",
          children: (0, _v1.jsx)(_v38, {
            ..._v5,
            size: _v5.size ?? "lg"
          })
        })]
      })]
    }),
    _v41 = ({
      title: _v0,
      cards: _v1,
      cardBackground: _v2 = "background"
    }) => {
      let _v3;
      return (0, _v1.jsxs)(_v36, {
        as: "section",
        children: [_v0 && (0, _v1.jsx)(_v39, {
          children: _v0
        }), (0, _v1.jsx)(_v32.SimpleGrid, {
          columns: {
            base: 1,
            md: Math.min(_v1.length, 2),
            lg: Math.max(1, (_v3 = _v1.length) < 4 ? _v3 : 4 === _v3 ? 2 : 3)
          },
          spacing: (0, _v23.rem)(16),
          children: _v1.map((_v0, _v1) => (0, _v1.jsx)(_v40, {
            ..._v0,
            background: _v2
          }, _v1))
        })]
      });
    };
  var _v42 = _v0.i(0),
    _v43 = _v0.i(0),
    _v44 = _v0.i(0),
    _v45 = _v0.i(0),
    _v46 = _v0.i(0),
    _v47 = _v0.i(0);
  let _v48 = ({
      eyebrow: _v0,
      title: _v1,
      faqs: _v2
    }) => (0, _v1.jsx)(_v36, {
      as: "section",
      children: (0, _v1.jsxs)(_v46.Grid, {
        templateColumns: {
          base: "1fr",
          md: "2fr 3fr"
        },
        gap: {
          base: (0, _v23.rem)(32),
          md: (0, _v23.rem)(64)
        },
        children: [(0, _v1.jsxs)(_v20.Flex, {
          direction: "column",
          gap: (0, _v23.rem)(16),
          align: "flex-start",
          alignSelf: "start",
          position: {
            md: "sticky"
          },
          top: {
            md: (0, _v23.rem)(96)
          },
          children: [_v0 && (0, _v1.jsx)(_v24.Text, {
            fontSize: "heading-md",
            color: "text-secondary",
            children: _v0
          }), _v1 && (0, _v1.jsx)(_v21.Header, {
            as: "h2",
            variant: "heading-2xl",
            fontSize: {
              base: "heading-xl",
              md: "heading-2xl"
            },
            color: "text-primary",
            children: _v1
          })]
        }), (0, _v1.jsx)(_v42.Accordion, {
          allowToggle: !0,
          children: _v2.map((_v0, _v1) => (0, _v1.jsx)(_v44.AccordionItem, {
            children: ({
              isExpanded: _v0
            }) => (0, _v1.jsxs)(_v1.Fragment, {
              children: [(0, _v1.jsx)(_v21.Header, {
                as: "h3",
                children: (0, _v1.jsxs)(_v43.AccordionButton, {
                  p: 6,
                  children: [(0, _v1.jsx)(_v19.Box, {
                    flex: "1",
                    textAlign: "left",
                    fontSize: "heading-md",
                    color: "text-primary",
                    children: _v0.question
                  }), !_v0 && (0, _v1.jsx)(_v47.Plus, {
                    boxSize: (0, _v23.rem)(20)
                  })]
                })
              }), (0, _v1.jsx)(_v45.AccordionPanel, {
                p: 6,
                pt: 2,
                children: (0, _v1.jsx)(_v24.Text, {
                  variant: "body-xl",
                  fontWeight: "bold",
                  color: "text-secondary",
                  children: _v0.answer
                })
              })]
            })
          }, _v1))
        })]
      })
    }),
    _v49 = ({
      icon: _v0,
      title: _v1,
      description: _v2,
      cta: _v3
    }) => (0, _v1.jsx)(_v29.Card, {
      role: "group",
      bg: "transparent",
      boxShadow: "none",
      borderRadius: (0, _v23.rem)(16),
      height: "100%",
      children: (0, _v1.jsxs)(_v30.CardBody, {
        px: (0, _v23.rem)(24),
        py: (0, _v23.rem)(32),
        flex: "1",
        display: "flex",
        flexDirection: "column",
        gap: (0, _v23.rem)(16),
        children: [(0, _v1.jsx)(_v19.Box, {
          color: "text-primary",
          lineHeight: 0,
          _groupHover: {
            color: "vimeoBlue.500"
          },
          children: (0, _v1.jsx)(_v34, {
            cta: _v3,
            display: "inline-flex",
            border: "none",
            p: 0,
            bg: "transparent",
            color: "inherit",
            children: _v0
          })
        }), (0, _v1.jsx)(_v21.Header, {
          as: "h3",
          variant: "heading-lg",
          color: "text-primary",
          children: (0, _v1.jsx)(_v34, {
            cta: _v3,
            textAlign: "left",
            color: "text-primary",
            textDecoration: "none",
            _hover: {
              textDecoration: "none",
              color: "text-primary"
            },
            children: _v1
          })
        }), _v2 && (0, _v1.jsx)(_v24.Text, {
          fontSize: (0, _v23.rem)(18),
          color: "text-secondary",
          flexGrow: 1,
          children: _v2
        }), _v3 && (0, _v1.jsx)(_v19.Box, {
          mt: "auto",
          display: "flex",
          justifyContent: "flex-start",
          children: (0, _v1.jsx)(_v38, {
            ..._v3,
            size: _v3.size ?? "lg"
          })
        })]
      })
    }),
    _v50 = ({
      title: _v0,
      cards: _v1
    }) => (0, _v1.jsxs)(_v36, {
      as: "section",
      children: [_v0 && (0, _v1.jsx)(_v39, {
        children: _v0
      }), (0, _v1.jsx)(_v32.SimpleGrid, {
        columns: {
          base: 1,
          md: Math.min(Math.max(1, _v1.length), 4)
        },
        spacing: (0, _v23.rem)(16),
        children: _v1.map((_v0, _v1) => (0, _v1.jsx)(_v49, {
          ..._v0
        }, _v1))
      })]
    });
  var _v51 = _v0.i(0),
    _v52 = _v0.i(0),
    _v53 = _v0.i(0),
    _v54 = _v0.i(0),
    _v55 = _v0.i(0),
    _v56 = _v0.i(0);
  let _v57 = "video/*,.mkv,.m2ts",
    _v58 = _v57.split(","),
    _v59 = _v58.filter(_v0 => _v0.endsWith("/*")).map(_v0 => _v0.slice(0, -1)),
    _v60 = _v58.filter(_v0 => _v0.startsWith(".")).map(_v0 => _v0.toLowerCase()),
    _v61 = _v0 => Array.from(_v0).filter(_v0 => {
      if (_v59.some(_v0 => _v0.type.startsWith(_v0))) return !0;
      let _v1 = _v0.name.toLowerCase();
      return _v60.some(_v0 => _v1.endsWith(_v0));
    }),
    _v62 = () => {
      let _v0 = (0, _v52.useColorModeValue)("black", "white");
      return (0, _v1.jsxs)(_v51.Center, {
        width: (0, _v23.rem)(170),
        height: (0, _v23.rem)(100),
        position: "relative",
        children: [(0, _v1.jsx)(_v54.Cloud, {
          width: "100%",
          height: "100%"
        }), (0, _v1.jsx)(_v19.Box, {
          position: "absolute",
          bottom: (0, _v23.rem)(20),
          children: (0, _v1.jsx)(_v56.ArrowUpFilled, {
            boxSize: "md",
            stroke: _v0,
            strokeWidth: "2"
          })
        }), (0, _v1.jsx)(_v19.Box, {
          position: "absolute",
          left: (0, _v23.rem)(-4),
          bottom: (0, _v23.rem)(18),
          children: (0, _v1.jsx)(_v55.PlusSmallFilled, {
            boxSize: "xs",
            stroke: _v0,
            strokeWidth: "3"
          })
        }), (0, _v1.jsx)(_v19.Box, {
          position: "absolute",
          right: (0, _v23.rem)(8),
          top: (0, _v23.rem)(14),
          children: (0, _v1.jsx)(_v55.PlusSmallFilled, {
            boxSize: "xs",
            stroke: _v0,
            strokeWidth: "3"
          })
        }), (0, _v1.jsx)(_v19.Box, {
          position: "absolute",
          right: (0, _v23.rem)(-2),
          top: (0, _v23.rem)(40),
          children: (0, _v1.jsx)(_v55.PlusSmallFilled, {
            boxSize: "xs",
            stroke: _v0,
            strokeWidth: "3"
          })
        })]
      });
    },
    _v63 = ({
      isDragging: _v0,
      onDragOver: _v1,
      onDragLeave: _v2,
      onDrop: _v3,
      onSelectFiles: _v4,
      label: _v5,
      action: _v6,
      onPrimaryAction: _v7,
      knobs: _v8,
      stagedList: _v9
    }) => {
      let _v10 = (0, _v10.useRef)(null);
      return (0, _v1.jsxs)(_v20.Flex, {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        flex: "1",
        gap: (0, _v23.rem)(16),
        backgroundColor: _v0 ? "surface" : "transparent",
        padding: (0, _v23.rem)(48),
        textAlign: "center",
        onDragOver: _v1,
        onDragLeave: _v2,
        onDrop: _v3,
        children: [(0, _v1.jsx)(_v62, {}), (0, _v1.jsx)(_v21.Header, {
          size: "2xl",
          color: "text-primary",
          as: "h2",
          children: (0, _v7.translate)({
            singular: "Upload your video file(s)",
            dictionary: {
              es: {
                singular: "Sube tu(s) archivo(s) de vídeo"
              },
              "de-DE": {
                singular: "Laden Sie Ihre Videodatei(en) hoch"
              },
              "fr-FR": {
                singular: "Téléversez votre(vos) fichier(s) vidéo"
              },
              "ja-JP": {
                singular: "動画ファイルをアップロード"
              },
              "ko-KR": {
                singular: "동영상 파일(들)을 업로드하세요"
              },
              "pt-BR": {
                singular: "Envie seu(s) arquivo(s) de vídeo"
              },
              "zh-CN": {
                singular: "上传您的视频文件"
              }
            }
          })
        }), _v9 ? (0, _v1.jsx)(_v19.Box, {
          width: "100%",
          children: _v9
        }) : null, (0, _v1.jsx)(_v53.FileInput, {
          label: (0, _v1.jsx)(_v37.Button, {
            size: "lg",
            variant: "primary",
            onClick: () => {
              "selectFiles" === _v6 ? _v10.current?.click() : _v7();
            },
            children: _v5
          }),
          ref: _v10,
          multiple: !0,
          accept: _v57,
          variant: "filled",
          size: "lg",
          onChange: _v4,
          "data-testid": "staged-file-input"
        }), _v8 ? (0, _v1.jsx)(_v19.Box, {
          width: "100%",
          children: _v8
        }) : null]
      });
    };
  var _v64 = _v0.i(0),
    _v65 = _v0.i(0),
    _v66 = _v0.i(0);
  let _v67 = ({
      files: _v0,
      onRemoveFile: _v1
    }) => 0 === _v0.length ? null : (0, _v1.jsx)(_v20.Flex, {
      as: "ul",
      flexDirection: "row",
      gap: (0, _v23.rem)(8),
      padding: 0,
      paddingBottom: (0, _v23.rem)(4),
      margin: 0,
      listStyleType: "none",
      width: "100%",
      overflowX: "auto",
      children: _v0.map(({
        id: _v0,
        file: _v1
      }) => (0, _v1.jsxs)(_v20.Flex, {
        as: "li",
        alignItems: "center",
        gap: (0, _v23.rem)(8),
        flexShrink: 0,
        maxWidth: {
          base: (0, _v23.rem)(180),
          md: (0, _v23.rem)(240)
        },
        border: "1px solid",
        borderColor: "stroke",
        borderRadius: "md",
        paddingY: (0, _v23.rem)(4),
        paddingLeft: (0, _v23.rem)(12),
        paddingRight: (0, _v23.rem)(4),
        children: [(0, _v1.jsx)(_v24.Text, {
          variant: "body-sm",
          color: "text-primary",
          isTruncated: !0,
          title: _v1.name,
          children: _v1.name
        }), (0, _v1.jsx)(_v24.Text, {
          variant: "body-sm",
          color: "text-secondary",
          flexShrink: 0,
          whiteSpace: "nowrap",
          children: (0, _v66.bytesToSize)(_v1.size)
        }), (0, _v1.jsx)(_v64.IconButton, {
          variant: "tertiary",
          size: "sm",
          icon: (0, _v1.jsx)(_v65.CloseXSmall, {}),
          "aria-label": (0, _v7.translate)({
            singular: "Remove {FILE_NAME}",
            replacements: {
              FILE_NAME: _v1.name
            },
            dictionary: {
              es: {
                singular: "Eliminar {FILE_NAME}"
              },
              "de-DE": {
                singular: "Entfernen {FILE_NAME}"
              },
              "fr-FR": {
                singular: "Supprimer {FILE_NAME}"
              },
              "ja-JP": {
                singular: "{FILE_NAME} を削除"
              },
              "ko-KR": {
                singular: "{FILE_NAME} 제거"
              },
              "pt-BR": {
                singular: "Remover {FILE_NAME}"
              },
              "zh-CN": {
                singular: "移除 {FILE_NAME}"
              }
            }
          }),
          onClick: () => _v1(_v0)
        })]
      }, _v0))
    }),
    _v68 = ({
      onRestart: _v0,
      onGoToFolder: _v1
    }) => (0, _v1.jsxs)(_v20.Flex, {
      justifyContent: "center",
      gap: (0, _v23.rem)(12),
      padding: (0, _v23.rem)(24),
      paddingTop: 0,
      children: [(0, _v1.jsx)(_v37.Button, {
        variant: "secondary",
        onClick: _v0,
        children: (0, _v7.translate)({
          singular: "Restart",
          dictionary: {
            es: {
              singular: "Reiniciar"
            },
            "de-DE": {
              singular: "Neustart"
            },
            "fr-FR": {
              singular: "Redémarrer"
            },
            "ja-JP": {
              singular: "再起動"
            },
            "ko-KR": {
              singular: "재시작"
            },
            "pt-BR": {
              singular: "Reiniciar"
            },
            "zh-CN": {
              singular: "重启"
            }
          }
        })
      }), (0, _v1.jsx)(_v37.Button, {
        variant: "primary",
        onClick: _v1,
        children: (0, _v7.translate)({
          singular: "Go to folder",
          dictionary: {
            es: {
              singular: "Ir a la carpeta"
            },
            "de-DE": {
              singular: "Zum Ordner"
            },
            "fr-FR": {
              singular: "Accéder au dossier"
            },
            "ja-JP": {
              singular: "フォルダーに移動"
            },
            "ko-KR": {
              singular: "폴더로 이동하기"
            },
            "pt-BR": {
              singular: "Ir para a pasta"
            },
            "zh-CN": {
              singular: "前往文件夹"
            }
          }
        })
      })]
    }),
    _v69 = (0, _v23.rem)(360),
    _v70 = ({
      phase: _v0,
      isDragging: _v1 = !1,
      children: _v2
    }) => {
      let _v3 = "staging" === _v0;
      return (0, _v1.jsx)(_v20.Flex, {
        flexDirection: "column",
        minHeight: _v69,
        border: _v3 ? "1px dashed" : "1px solid",
        borderColor: _v3 && _v1 ? "text-primary" : "stroke",
        borderRadius: "md",
        children: _v2
      });
    };
  var _v71 = _v0.i(0),
    _v72 = _v0.i(0),
    _v73 = _v0.i(0),
    _v73 = _v73,
    _v74 = _v0.i(0),
    _v75 = _v0.i(0),
    _v76 = _v0.i(0),
    _v77 = _v0.i(0),
    _v78 = _v0.i(0),
    _v79 = _v0.i(0);
  let _v80 = ({
      privacy: _v0,
      isLoading: _v1,
      capabilities: _v2,
      teamOwnersId: _v3,
      permissionLevel: _v4,
      hasRestrictedPrivacyOptions: _v5,
      contentRating: _v6,
      uploadingFileSize: _v7,
      setPrivacy: _v8,
      updateContentRating: _v9,
      onClose: _v10
    }) => {
      let _v11 = (0, _v10.useContext)(_v79.ViewerContext),
        {
          trackUploadLinkPrivacyChanged: _v12
        } = (0, _v76.useUploadPageTracking)(),
        _v13 = _v3 === _v11?.user?.id,
        _v14 = _v2?.hasEnterprise,
        {
          data: _v15
        } = (0, _v75.useGetUserPreferences)(() => _v14 && _v3 ? {
          where: {
            userId: _v3
          },
          select: ["tapa", "tapc"]
        } : null),
        _v16 = _v14 ? (0, _v77.getAllowedEnterprisePrivacyOptions)(_v4, _v15) : void 0;
      return (0, _v1.jsx)(_v78.PrivacyDrawer, {
        video: {
          privacy: {
            ..._v0,
            view: _v0?.view ?? "nobody"
          },
          contentRating: _v6,
          password: _v0?.password,
          allowedPrivacies: _v16
        },
        capabilities: {
          ...(_v2 || {}),
          enterprise: _v2?.hasEnterprise
        },
        isOwner: _v13,
        uploadingFileSize: _v7,
        quotaTargetUserId: _v3,
        onAllowDownloadsChange: _v0 => _v8({
          download: _v0
        }),
        onAllowShowcaseChange: _v0 => _v8({
          add: _v0
        }),
        onEmbedPrivacyChange: _v0 => _v8({
          embed: _v0
        }),
        onAllowShareLinkChange: _v0 => _v8({
          allowShareLink: _v0
        }),
        onAllowCommentsChange: _v0 => _v8({
          comments: _v0 ? "anybody" : "nobody"
        }),
        onPrivacyChange: (_v0, _v1) => {
          _v0 !== _v0?.view && _v12({
            uploadLinkPrivacyNewValue: _v0
          }), _v8({
            view: _v0,
            password: _v1
          });
        },
        onEmbedDomainsChange: _v0 => _v8({
          embedDomains: _v0
        }),
        show: !_v1,
        privacySettingLink: "/settings/videos/upload_defaults",
        canUpdatePrivacyToPublic: !0,
        hasRestrictedPrivacyOptions: _v5,
        updateContentRating: _v9,
        page: "upload",
        onClose: _v10
      });
    },
    _v81 = ({
      privacy: _v0,
      setPrivacy: _v1,
      contentRating: _v2,
      setContentRating: _v3,
      capabilities: _v4,
      capabilitiesLoading: _v5,
      teamOwnersId: _v6,
      permissionLevel: _v7,
      hasRestrictedPrivacyOptions: _v8,
      uploadingFileSize: _v9
    }) => {
      let [_v10, _v11] = (0, _v10.useState)(!1);
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v73.default, {
          privacy: _v0.view ?? "nobody",
          onClick: () => _v11(!0)
        }), (0, _v1.jsx)(_v74.SideDrawer, {
          isOpen: _v10,
          onClose: () => _v11(!1),
          side: "right",
          children: (0, _v1.jsx)(_v80, {
            privacy: _v0,
            isLoading: _v5,
            capabilities: _v4,
            teamOwnersId: _v6,
            permissionLevel: _v7,
            hasRestrictedPrivacyOptions: _v8,
            contentRating: _v2,
            uploadingFileSize: _v9,
            setPrivacy: _v1,
            updateContentRating: _v3,
            onClose: () => _v11(!1)
          })
        })]
      });
    },
    _v82 = ({
      knobs: _v0
    }) => (0, _v1.jsxs)(_v20.Flex, {
      flexDirection: "column",
      alignItems: "center",
      gap: (0, _v23.rem)(12),
      children: [(0, _v1.jsx)(_v20.Flex, {
        alignItems: "center",
        justifyContent: "center",
        gap: (0, _v23.rem)(8),
        flexWrap: "wrap",
        children: (0, _v1.jsx)(_v72.TeamSwitcher, {
          teams: _v0.teams,
          selectedTeamId: _v0.selectedTeamId,
          selectTeam: _v0.selectTeam,
          selectedFolder: _v0.selectedFolder,
          selectFolder: _v0.selectFolder,
          isLoading: _v0.isLoadingTeams,
          disabled: !1,
          enabledRoles: _v71.ALL_TEAM_ROLES
        })
      }), (0, _v1.jsx)(_v81, {
        privacy: _v0.privacy,
        setPrivacy: _v0.setPrivacy,
        contentRating: _v0.contentRating,
        setContentRating: _v0.setContentRating,
        capabilities: _v0.capabilities,
        capabilitiesLoading: _v0.capabilitiesLoading,
        teamOwnersId: _v0.selectedTeamId,
        permissionLevel: _v0.permissionLevel,
        hasRestrictedPrivacyOptions: _v0.hasRestrictedPrivacyOptions,
        uploadingFileSize: _v0.uploadingFileSize
      })]
    }),
    _v83 = ({
      percent: _v0,
      failed: _v1
    }) => (0, _v1.jsx)(_v19.Box, {
      width: "100%",
      height: (0, _v23.rem)(4),
      backgroundColor: "fill-component",
      borderRadius: "sm",
      overflow: "hidden",
      children: (0, _v1.jsx)(_v19.Box, {
        width: `${_v1 ? 100 : _v0}%`,
        height: "100%",
        backgroundColor: _v1 ? "status-destructive-primary" : "fill-brand"
      })
    }),
    _v84 = ({
      uploads: _v0,
      uploaderSummary: _v1
    }) => 0 === _v0.length ? null : (0, _v1.jsxs)(_v20.Flex, {
      flexDirection: "column",
      gap: (0, _v23.rem)(12),
      padding: (0, _v23.rem)(24),
      children: [(0, _v1.jsx)(_v24.Text, {
        variant: "heading-5",
        color: "text-primary",
        children: _v1.isComplete ? _v1.hasFailures ? (0, _v7.translate)({
          singular: "Upload finished with errors",
          dictionary: {
            es: {
              singular: "Carga finalizada con errores"
            },
            "de-DE": {
              singular: "Upload mit Fehlern abgeschlossen"
            },
            "fr-FR": {
              singular: "Téléversement terminé avec des erreurs"
            },
            "ja-JP": {
              singular: "アップロードは完了しましたがエラーが発生しました"
            },
            "ko-KR": {
              singular: "업로드가 일부 오류와 함께 완료되었습니다"
            },
            "pt-BR": {
              singular: "Envio concluído com erros"
            },
            "zh-CN": {
              singular: "上传完成，但出现错误"
            }
          }
        }) : (0, _v7.translate)({
          singular: "Upload complete",
          dictionary: {
            es: {
              singular: "Carga completa"
            },
            "de-DE": {
              singular: "Upload abgeschlossen"
            },
            "fr-FR": {
              singular: "Téléversement terminé"
            },
            "ja-JP": {
              singular: "アップロード完了"
            },
            "ko-KR": {
              singular: "업로드 완료"
            },
            "pt-BR": {
              singular: "Envio concluído"
            },
            "zh-CN": {
              singular: "上传完成"
            }
          }
        }) : (0, _v7.translate)({
          singular: "Uploading your files",
          dictionary: {
            es: {
              singular: "Subiendo tus archivos"
            },
            "de-DE": {
              singular: "Ihre Dateien werden hochgeladen"
            },
            "fr-FR": {
              singular: "Téléversement de vos fichiers"
            },
            "ja-JP": {
              singular: "ファイルをアップロード中"
            },
            "ko-KR": {
              singular: "파일 업로드 중"
            },
            "pt-BR": {
              singular: "Enviando seus arquivos"
            },
            "zh-CN": {
              singular: "正在上传您的文件"
            }
          }
        })
      }), (0, _v1.jsx)(_v20.Flex, {
        as: "ul",
        flexDirection: "column",
        gap: (0, _v23.rem)(8),
        padding: 0,
        margin: 0,
        listStyleType: "none",
        maxHeight: (0, _v23.rem)(280),
        overflowY: "auto",
        children: _v0.map(_v0 => {
          let _v1 = "FAILED" === _v0.state,
            _v2 = (({
              bytesUploaded: _v0,
              initialSize: _v1,
              state: _v2
            }) => "COMPLETED" === _v2 ? 100 : _v1 <= 0 ? 0 : Math.min(100, Math.round(_v0 / _v1 * 100)))(_v0);
          return (0, _v1.jsxs)(_v20.Flex, {
            as: "li",
            flexDirection: "column",
            gap: (0, _v23.rem)(8),
            border: "1px solid",
            borderColor: "stroke",
            borderRadius: "md",
            padding: (0, _v23.rem)(12),
            children: [(0, _v1.jsxs)(_v20.Flex, {
              alignItems: "center",
              justifyContent: "space-between",
              gap: (0, _v23.rem)(12),
              children: [(0, _v1.jsx)(_v24.Text, {
                variant: "body-sm",
                color: "text-primary",
                isTruncated: !0,
                children: _v0.file.name
              }), (0, _v1.jsx)(_v24.Text, {
                variant: "body-sm",
                color: _v1 ? "status-destructive-primary" : "text-secondary",
                children: (_v0 => {
                  switch (_v0) {
                    case "COMPLETED":
                      return (0, _v7.translate)({
                        singular: "Complete",
                        dictionary: {
                          es: {
                            singular: "Completa"
                          },
                          "de-DE": {
                            singular: "Abgeschlossen"
                          },
                          "fr-FR": {
                            singular: "Terminé"
                          },
                          "ja-JP": {
                            singular: "完了"
                          },
                          "ko-KR": {
                            singular: "완료"
                          },
                          "pt-BR": {
                            singular: "Completo"
                          },
                          "zh-CN": {
                            singular: "完整"
                          }
                        }
                      });
                    case "FAILED":
                      return (0, _v7.translate)({
                        singular: "Failed",
                        dictionary: {
                          es: {
                            singular: "Fallido"
                          },
                          "de-DE": {
                            singular: "Fehlgeschlagen"
                          },
                          "fr-FR": {
                            singular: "Échec"
                          },
                          "ja-JP": {
                            singular: "失敗しました"
                          },
                          "ko-KR": {
                            singular: "실패"
                          },
                          "pt-BR": {
                            singular: "Com falha"
                          },
                          "zh-CN": {
                            singular: "失败"
                          }
                        }
                      });
                    case "UPLOADING":
                      return (0, _v7.translate)({
                        singular: "Uploading",
                        dictionary: {
                          es: {
                            singular: "Subidas"
                          },
                          "de-DE": {
                            singular: "Hochladen"
                          },
                          "fr-FR": {
                            singular: "Mise en ligne en cours"
                          },
                          "ja-JP": {
                            singular: "アップロード"
                          },
                          "ko-KR": {
                            singular: "업로드"
                          },
                          "pt-BR": {
                            singular: "Carregamento"
                          },
                          "zh-CN": {
                            singular: "正在上传"
                          }
                        }
                      });
                    case "QUEUED":
                      return (0, _v7.translate)({
                        singular: "Queued",
                        dictionary: {
                          es: {
                            singular: "En cola"
                          },
                          "de-DE": {
                            singular: "In der Warteschlange"
                          },
                          "fr-FR": {
                            singular: "En file d'attente"
                          },
                          "ja-JP": {
                            singular: "キュー待ち"
                          },
                          "ko-KR": {
                            singular: "대기 중"
                          },
                          "pt-BR": {
                            singular: "Na fila"
                          },
                          "zh-CN": {
                            singular: "已排队"
                          }
                        }
                      });
                    case "PAUSED":
                      return (0, _v7.translate)({
                        singular: "Paused",
                        dictionary: {
                          es: {
                            singular: "En pausa"
                          },
                          "de-DE": {
                            singular: "Pausiert"
                          },
                          "fr-FR": {
                            singular: "En pause"
                          },
                          "ja-JP": {
                            singular: "一時停止しました"
                          },
                          "ko-KR": {
                            singular: "일시 정지:"
                          },
                          "pt-BR": {
                            singular: "Pausado"
                          },
                          "zh-CN": {
                            singular: "已暂停"
                          }
                        }
                      });
                    case "CANCELED":
                    case "CANCELING":
                      return (0, _v7.translate)({
                        singular: "Canceled",
                        dictionary: {
                          es: {
                            singular: "Cancelada"
                          },
                          "de-DE": {
                            singular: "Abgebrochen"
                          },
                          "fr-FR": {
                            singular: "Annulé"
                          },
                          "ja-JP": {
                            singular: "キャンセルしました"
                          },
                          "ko-KR": {
                            singular: "취소됨"
                          },
                          "pt-BR": {
                            singular: "Cancelado"
                          },
                          "zh-CN": {
                            singular: "已取消"
                          }
                        }
                      });
                    default:
                      return (0, _v7.translate)({
                        singular: "Processing",
                        dictionary: {
                          es: {
                            singular: "Procesando"
                          },
                          "de-DE": {
                            singular: "Wird verarbeitet"
                          },
                          "fr-FR": {
                            singular: "En cours de traitement"
                          },
                          "ja-JP": {
                            singular: "処理中"
                          },
                          "ko-KR": {
                            singular: "처리 중"
                          },
                          "pt-BR": {
                            singular: "Processando"
                          },
                          "zh-CN": {
                            singular: "处理中"
                          }
                        }
                      });
                  }
                })(_v0.state)
              })]
            }), (0, _v1.jsx)(_v83, {
              percent: _v2,
              failed: _v1
            }), (0, _v1.jsx)(_v24.Text, {
              variant: "body-sm",
              color: "text-secondary",
              children: _v1 ? _v0.error || (0, _v7.translate)({
                singular: "Upload failed",
                dictionary: {
                  es: {
                    singular: "Error en la subida"
                  },
                  "de-DE": {
                    singular: "Hochladen ist fehlgeschlagen"
                  },
                  "fr-FR": {
                    singular: "Échec de la mise en ligne"
                  },
                  "ja-JP": {
                    singular: "アップロードが失敗しました"
                  },
                  "ko-KR": {
                    singular: "업로드 실패"
                  },
                  "pt-BR": {
                    singular: "Falha no carregamento"
                  },
                  "zh-CN": {
                    singular: "上传失败"
                  }
                }
              }) : (0, _v7.translate)({
                singular: "{UPLOADED} of {TOTAL}",
                replacements: {
                  UPLOADED: (0, _v66.bytesToSize)(_v0.bytesUploaded),
                  TOTAL: (0, _v66.bytesToSize)(_v0.initialSize)
                },
                dictionary: {
                  es: {
                    singular: "{UPLOADED} de {TOTAL}"
                  },
                  "de-DE": {
                    singular: "{UPLOADED} von {TOTAL}"
                  },
                  "fr-FR": {
                    singular: "{UPLOADED} sur {TOTAL}"
                  },
                  "ja-JP": {
                    singular: "{UPLOADED} / {TOTAL}"
                  },
                  "ko-KR": {
                    singular: "{UPLOADED} / {TOTAL}"
                  },
                  "pt-BR": {
                    singular: "{UPLOADED} de {TOTAL}"
                  },
                  "zh-CN": {
                    singular: "{UPLOADED} / {TOTAL}"
                  }
                }
              })
            })]
          }, _v0.id);
        })
      })]
    }),
    _v85 = () => (0, _v1.jsx)(_v24.Text, {
      variant: "body-sm",
      color: "text-secondary",
      textAlign: "center",
      children: (0, _v7.translate)({
        singular: "By submitting a video, you agree to our {TERMS}Terms of Service{/TERMS} and {GUIDE}Community Guidelines{/GUIDE}.",
        replacements: {
          TERMS: _v0 => (0, _v1.jsx)(_v22.Link, {
            href: "/terms",
            target: "_blank",
            variant: "inline-secondary",
            fontSize: (0, _v23.rem)(12),
            children: _v0
          }),
          GUIDE: _v0 => (0, _v1.jsx)(_v22.Link, {
            href: "/help/guidelines",
            target: "_blank",
            variant: "inline-secondary",
            fontSize: (0, _v23.rem)(12),
            children: _v0
          })
        },
        dictionary: {
          es: {
            singular: "Al enviar un video, acepta nuestros {TERMS}Términos de servicio{/TERMS} y las {GUIDE}Directrices de la comunidad{/GUIDE}."
          },
          "de-DE": {
            singular: "Indem Sie ein Video einreichen, stimmen Sie unseren {TERMS}Nutzungsbedingungen{/TERMS} und {GUIDE}Community-Richtlinien{/GUIDE} zu."
          },
          "fr-FR": {
            singular: "En soumettant une vidéo, vous acceptez nos {TERMS}Conditions d'utilisation{/TERMS} et les {GUIDE}Règles de la communauté{/GUIDE}."
          },
          "ja-JP": {
            singular: "動画を送信することにより、{TERMS}利用規約{/TERMS}および{GUIDE}コミュニティガイドライン{/GUIDE}に同意したものとみなされます。"
          },
          "ko-KR": {
            singular: "동영상을 제출하면 당사 {TERMS}서비스 약관{/TERMS} 및 {GUIDE}커뮤니티 가이드라인{/GUIDE}에 동의하는 것입니다."
          },
          "pt-BR": {
            singular: "Ao enviar um vídeo, você concorda com nossos {TERMS}Termos de Serviço{/TERMS} e {GUIDE}Regras da Comunidade{/GUIDE}."
          },
          "zh-CN": {
            singular: "提交视频，即表示您同意我们的 {TERMS}服务条款{/TERMS} 和 {GUIDE}社区准则{/GUIDE}。"
          }
        }
      })
    }),
    _v86 = (0, _v10.memo)(function () {
      let _v0 = [{
          imgSrc: "https://i.vimeocdn.com/custom_asset/41c190163f6117e8313cd91f48f5fef5",
          imgAlt: (0, _v7.translate)({
            singular: "Host videos for free",
            dictionary: {
              es: {
                singular: "Aloja vídeos gratis"
              },
              "de-DE": {
                singular: "Videos kostenlos hosten"
              },
              "fr-FR": {
                singular: "Hébergez des vidéos gratuitement"
              },
              "ja-JP": {
                singular: "動画を無料でホスト"
              },
              "ko-KR": {
                singular: "동영상 무료 호스팅"
              },
              "pt-BR": {
                singular: "Hospede vídeos gratuitamente"
              },
              "zh-CN": {
                singular: "免费托管视频"
              }
            }
          }),
          title: (0, _v7.translate)({
            singular: "Host videos for free",
            dictionary: {
              es: {
                singular: "Aloja vídeos gratis"
              },
              "de-DE": {
                singular: "Videos kostenlos hosten"
              },
              "fr-FR": {
                singular: "Hébergez des vidéos gratuitement"
              },
              "ja-JP": {
                singular: "動画を無料でホスト"
              },
              "ko-KR": {
                singular: "동영상 무료 호스팅"
              },
              "pt-BR": {
                singular: "Hospede vídeos gratuitamente"
              },
              "zh-CN": {
                singular: "免费托管视频"
              }
            }
          }),
          description: (0, _v7.translate)({
            singular: "Make sure every aspect of the viewing experience aligns with your brand. Our fully customizable media player offers robust privacy and sharing settings, and supports high-quality streaming in 4k, 8k, HDR, and Dolby Vision. Start for free or check out Enterprise plans for unlimited storage.",
            dictionary: {
              es: {
                singular: "Asegúrate de que cada aspecto de la experiencia de visualización esté alineado con tu marca. Nuestro reproductor multimedia totalmente personalizable ofrece sólidas opciones de privacidad y compartición, y soporta transmisión de alta calidad en 4k, 8k, HDR y Dolby Vision. Comienza gratis o consulta los planes Enterprise para almacenamiento ilimitado."
              },
              "de-DE": {
                singular: "Stellen Sie sicher, dass jeder Aspekt des Seherlebnisses mit Ihrer Marke übereinstimmt. Unser vollständig anpassbarer Media Player bietet umfangreiche Datenschutz- und Freigabeeinstellungen und unterstützt hochwertiges Streaming in 4k, 8k, HDR und Dolby Vision. Starten Sie kostenlos oder sehen Sie sich die Enterprise-Pläne für unbegrenzten Speicher an."
              },
              "fr-FR": {
                singular: "Assurez‑vous que chaque aspect de l’expérience de visionnage reflète votre marque. Notre lecteur multimédia entièrement personnalisable offre des paramètres de confidentialité et de partage complets, et prend en charge la diffusion de haute qualité en 4K, 8K, HDR et Dolby Vision. Commencez gratuitement ou consultez les offres Enterprise pour un stockage illimité."
              },
              "ja-JP": {
                singular: "視聴体験のあらゆる面がブランドに一致するようにしてください。当社の完全カスタマイズ可能なメディアプレーヤーは高度なプライバシーと共有設定を提供し、4k、8k、HDR、Dolby Visionでの高品質ストリーミングに対応しています。まずは無料で始めるか、無制限ストレージのEnterpriseプランをご確認ください。"
              },
              "ko-KR": {
                singular: "시청 경험의 모든 요소가 브랜드와 일치하도록 하세요. 완전히 커스터마이즈 가능한 미디어 플레이어는 강력한 개인정보 보호 및 공유 설정을 제공하며, 4k, 8k, HDR 및 Dolby Vision의 고품질 스트리밍을 지원합니다. 무료로 시작하거나 무제한 저장을 원하는 경우 Enterprise 플랜을 확인하세요."
              },
              "pt-BR": {
                singular: "Garanta que cada aspecto da experiência de visualização esteja alinhado com a sua marca. Nosso reprodutor de mídia totalmente personalizável oferece configurações robustas de privacidade e compartilhamento e suporta streaming de alta qualidade em 4k, 8k, HDR e Dolby Vision. Comece gratuitamente ou confira os planos Enterprise para armazenamento ilimitado."
              },
              "zh-CN": {
                singular: "确保观看体验的每个细节都与您的品牌保持一致。我们的可完全自定义媒体播放器提供强大的隐私与分享设置，并支持高质量流媒体（包含 4k、8k、HDR 与 Dolby Vision）。可免费开始，或查看 Enterprise 计划以获取无限存储。"
              }
            }
          }),
          cta: {
            label: (0, _v7.translate)({
              singular: "Learn more",
              dictionary: {
                es: {
                  singular: "Ver más"
                },
                "de-DE": {
                  singular: "Mehr dazu"
                },
                "fr-FR": {
                  singular: "En savoir plus "
                },
                "ja-JP": {
                  singular: "詳細を見る"
                },
                "ko-KR": {
                  singular: "자세히 보기"
                },
                "pt-BR": {
                  singular: "Saiba mais"
                },
                "zh-CN": {
                  singular: "了解更多"
                }
              }
            }),
            href: "/features/online-video-hosting",
            variant: "secondary"
          }
        }, {
          imgSrc: "https://i.vimeocdn.com/custom_asset/077a70824aa438f0ee0b6c4920562d24",
          imgAlt: (0, _v7.translate)({
            singular: "Customize your video player",
            dictionary: {
              es: {
                singular: "Personaliza tu reproductor de video"
              },
              "de-DE": {
                singular: "Video-Player nach Bedarf einstellen"
              },
              "fr-FR": {
                singular: "Personnaliser votre player vidéo"
              },
              "ja-JP": {
                singular: "動画プレーヤーをカスタマイズ"
              },
              "ko-KR": {
                singular: "동영상 플레이어 커스텀"
              },
              "pt-BR": {
                singular: "Customizar seu player de vídeo"
              },
              "zh-CN": {
                singular: "自定义视频播放器"
              }
            }
          }),
          title: (0, _v7.translate)({
            singular: "Customize your video player",
            dictionary: {
              es: {
                singular: "Personaliza tu reproductor de video"
              },
              "de-DE": {
                singular: "Video-Player nach Bedarf einstellen"
              },
              "fr-FR": {
                singular: "Personnaliser votre player vidéo"
              },
              "ja-JP": {
                singular: "動画プレーヤーをカスタマイズ"
              },
              "ko-KR": {
                singular: "동영상 플레이어 커스텀"
              },
              "pt-BR": {
                singular: "Customizar seu player de vídeo"
              },
              "zh-CN": {
                singular: "自定义视频播放器"
              }
            }
          }),
          description: (0, _v7.translate)({
            singular: "Easily execute your vision with our customizable, HD, and always ad-free video player. If you upload a video to Vimeo with a Paid plan, add your logo, choose colors and select a thumbnail, show or hide the play bar and speed controls, offer automatic video chaptering, and more.",
            dictionary: {
              es: {
                singular: "Ejecuta fácilmente tu visión con nuestro reproductor de vídeo personalizable, HD y siempre sin anuncios. Si subes un vídeo a Vimeo con un plan de pago, añade tu logotipo, elige colores y selecciona una miniatura, muestra u oculta la barra de reproducción y los controles de velocidad, ofrece creación automática de capítulos de vídeo y más."
              },
              "de-DE": {
                singular: "Setzen Sie Ihre Vision mühelos um mit unserem anpassbaren, HD- und stets werbefreien Videoplayer. Wenn Sie ein Video mit einem bezahlten Plan auf Vimeo hochladen, können Sie Ihr Logo hinzufügen, Farben wählen und ein Vorschaubild auswählen, die Wiedergabeleiste und die Geschwindigkeitsregler ein- oder ausblenden, automatische Kapiteleinteilung anbieten und mehr."
              },
              "fr-FR": {
                singular: "Exécutez facilement votre vision grâce à notre lecteur vidéo personnalisable, HD et toujours sans publicité. Si vous téléversez une vidéo sur Vimeo avec un abonnement payant, ajoutez votre logo, choisissez les couleurs et sélectionnez une vignette, affichez ou masquez la barre de lecture et les commandes de vitesse, proposez un chapitrage automatique de la vidéo, et plus encore."
              },
              "ja-JP": {
                singular: "柔軟にカスタマイズ可能で、HDかつ常に広告なしのビデオプレーヤーでビジョンを簡単に実現できます。Vimeoに有料プランで動画をアップロードすると、ロゴの追加、色やサムネイルの選択、再生バーや速度コントロールの表示/非表示、自動チャプターの提供などが可能になります。"
              },
              "ko-KR": {
                singular: "맞춤형의 HD 광고 없는 비디오 플레이어로 귀하의 비전을 손쉽게 실현하세요. 유료 플랜으로 Vimeo에 동영상을 업로드하면 로고 추가, 색상 선택, 썸네일 설정, 재생 바 및 속도 제어 표시/숨김, 자동 챕터 생성 등 다양한 기능을 이용할 수 있습니다."
              },
              "pt-BR": {
                singular: "Execute sua visão facilmente com nosso reprodutor de vídeo personalizável, em HD e sempre sem anúncios. Se você enviar um vídeo para o Vimeo com um plano pago, adicione seu logo, escolha cores e selecione uma miniatura, mostre ou oculte a barra de reprodução e os controles de velocidade, ofereça capítulos automáticos de vídeo e muito mais."
              },
              "zh-CN": {
                singular: "使用我们可自定义、HD 且始终无广告的视频播放器，轻松实现您的创意愿景。如果您在 Vimeo 上使用付费计划上传视频，可添加徽标、选择颜色并设置缩略图，显示或隐藏播放栏与速度控制，启用自动分章节等更多功能。"
              }
            }
          }),
          cta: {
            label: (0, _v7.translate)({
              singular: "Learn more",
              dictionary: {
                es: {
                  singular: "Ver más"
                },
                "de-DE": {
                  singular: "Mehr dazu"
                },
                "fr-FR": {
                  singular: "En savoir plus "
                },
                "ja-JP": {
                  singular: "詳細を見る"
                },
                "ko-KR": {
                  singular: "자세히 보기"
                },
                "pt-BR": {
                  singular: "Saiba mais"
                },
                "zh-CN": {
                  singular: "了解更多"
                }
              }
            }),
            href: "/features/video-player",
            variant: "secondary"
          }
        }, {
          imgSrc: "https://i.vimeocdn.com/custom_asset/834c83df16059abeb0131eea72b0ca3c",
          imgAlt: (0, _v7.translate)({
            singular: "Create and edit with AI-powered video tools",
            dictionary: {
              es: {
                singular: "Crea y edita con herramientas de vídeo impulsadas por IA"
              },
              "de-DE": {
                singular: "Erstellen und bearbeiten mit KI-gestützten Videotools"
              },
              "fr-FR": {
                singular: "Créez et montez avec des outils vidéo propulsés par l’IA"
              },
              "ja-JP": {
                singular: "AI搭載のビデオツールで作成および編集"
              },
              "ko-KR": {
                singular: "AI 기반 비디오 도구로 제작 및 편집하세요"
              },
              "pt-BR": {
                singular: "Crie e edite com ferramentas de vídeo com recursos de IA"
              },
              "zh-CN": {
                singular: "使用 AI 驱动的视频工具创建和编辑"
              }
            }
          }),
          title: (0, _v7.translate)({
            singular: "Create and edit with AI-powered video tools",
            dictionary: {
              es: {
                singular: "Crea y edita con herramientas de vídeo impulsadas por IA"
              },
              "de-DE": {
                singular: "Erstellen und bearbeiten mit KI-gestützten Videotools"
              },
              "fr-FR": {
                singular: "Créez et montez avec des outils vidéo propulsés par l’IA"
              },
              "ja-JP": {
                singular: "AI搭載のビデオツールで作成および編集"
              },
              "ko-KR": {
                singular: "AI 기반 비디오 도구로 제작 및 편집하세요"
              },
              "pt-BR": {
                singular: "Crie e edite com ferramentas de vídeo com recursos de IA"
              },
              "zh-CN": {
                singular: "使用 AI 驱动的视频工具创建和编辑"
              }
            }
          }),
          description: (0, _v7.translate)({
            singular: "Cut down production time with our AI-powered video tools. Record, upload, cut, crop, trim, resize, merge, and more to create polished video content, fast. Upload WMV, MOV, AVI, FLV, and MP4 video files, then edit from your Mac, PC, or the Vimeo app for iPhone and Android.",
            dictionary: {
              es: {
                singular: "Reduce el tiempo de producción con nuestras herramientas de vídeo impulsadas por IA. Graba, sube, corta, recorta, ajusta la duración, redimensiona, fusiona y más para crear contenido de vídeo pulido, rápidamente. Sube archivos de vídeo WMV, MOV, AVI, FLV y MP4 y, a continuación, edítalos desde tu Mac, PC o la app de Vimeo para iPhone y Android."
              },
              "de-DE": {
                singular: "Reduzieren Sie die Produktionszeit mit unseren KI-gestützten Videotools. Nehmen Sie auf, laden Sie hoch, schneiden, zuschneiden, trimmen, skalieren, zusammenführen und mehr – um schnell professionell wirkende Videos zu erstellen. Laden Sie WMV-, MOV-, AVI-, FLV- und MP4-Videodateien hoch und bearbeiten Sie sie anschließend auf Ihrem Mac, PC oder in der Vimeo-App für iPhone und Android."
              },
              "fr-FR": {
                singular: "Réduisez le temps de production grâce à nos outils vidéo propulsés par l’IA. Enregistrez, téléversez, coupez, recadrez, rognez, redimensionnez, fusionnez et plus encore pour créer rapidement du contenu vidéo soigné. Téléversez des fichiers vidéo WMV, MOV, AVI, FLV et MP4, puis montez depuis votre Mac, PC ou l’application Vimeo pour iPhone et Android."
              },
              "ja-JP": {
                singular: "AI搭載のビデオツールで制作時間を短縮できます。録画、アップロード、カット、クロップ、トリミング、リサイズ、結合などを素早く行い、洗練された動画コンテンツを作成できます。WMV、MOV、AVI、FLV、MP4形式の動画ファイルをアップロードし、Mac、PC、またはVimeoのiPhone／Androidアプリから編集できます。"
              },
              "ko-KR": {
                singular: "AI 기반 비디오 도구로 제작 시간을 단축하세요. 녹화, 업로드, 컷 편집, 자르기, 트리밍, 크기 조정, 병합 등으로 빠르게 완성도 높은 동영상을 만드세요. WMV, MOV, AVI, FLV, MP4 파일을 업로드한 후 Mac, PC 또는 iPhone 및 Android용 Vimeo 앱에서 편집할 수 있습니다."
              },
              "pt-BR": {
                singular: "Reduza o tempo de produção com nossas ferramentas de vídeo com recursos de IA. Grave, faça upload, corte, recorte, apare, redimensione, una e muito mais para criar conteúdo de vídeo polido rapidamente. Faça upload de arquivos de vídeo WMV, MOV, AVI, FLV e MP4 e depois edite no seu Mac, PC ou no app Vimeo para iPhone e Android."
              },
              "zh-CN": {
                singular: "使用我们由 AI 驱动的视频工具可缩短制作时间。快速录制、上传、剪切、裁剪、修剪、调整大小、合并等，迅速创建精良的视频内容。上传 WMV、MOV、AVI、FLV 和 MP4 视频文件，然后在 Mac、PC 或 Vimeo 的 iPhone 与 Android 应用中进行编辑。"
              }
            }
          }),
          cta: {
            label: (0, _v7.translate)({
              singular: "Learn more",
              dictionary: {
                es: {
                  singular: "Ver más"
                },
                "de-DE": {
                  singular: "Mehr dazu"
                },
                "fr-FR": {
                  singular: "En savoir plus "
                },
                "ja-JP": {
                  singular: "詳細を見る"
                },
                "ko-KR": {
                  singular: "자세히 보기"
                },
                "pt-BR": {
                  singular: "Saiba mais"
                },
                "zh-CN": {
                  singular: "了解更多"
                }
              }
            }),
            href: "/features/video-editor",
            variant: "secondary"
          }
        }, {
          imgSrc: "https://i.vimeocdn.com/custom_asset/5bb871da495ade37e72445c322fc7601",
          imgAlt: (0, _v7.translate)({
            singular: "Embed videos anywhere or privately share links",
            dictionary: {
              es: {
                singular: "Incrusta vídeos donde quieras o comparte enlaces de forma privada"
              },
              "de-DE": {
                singular: "Betten Sie Videos überall ein oder teilen Sie Links privat"
              },
              "fr-FR": {
                singular: "Intégrez des vidéos n’importe où ou partagez des liens en privé"
              },
              "ja-JP": {
                singular: "どこにでも埋め込み、またはリンクを非公開で共有"
              },
              "ko-KR": {
                singular: "동영상을 어디에나 임베드하거나 비공개 링크로 공유하세요"
              },
              "pt-BR": {
                singular: "Incorpore vídeos em qualquer lugar ou compartilhe links de forma privada"
              },
              "zh-CN": {
                singular: "在任何地方嵌入视频或私密分享链接"
              }
            }
          }),
          title: (0, _v7.translate)({
            singular: "Embed videos anywhere or privately share links",
            dictionary: {
              es: {
                singular: "Incrusta vídeos donde quieras o comparte enlaces de forma privada"
              },
              "de-DE": {
                singular: "Betten Sie Videos überall ein oder teilen Sie Links privat"
              },
              "fr-FR": {
                singular: "Intégrez des vidéos n’importe où ou partagez des liens en privé"
              },
              "ja-JP": {
                singular: "どこにでも埋め込み、またはリンクを非公開で共有"
              },
              "ko-KR": {
                singular: "동영상을 어디에나 임베드하거나 비공개 링크로 공유하세요"
              },
              "pt-BR": {
                singular: "Incorpore vídeos em qualquer lugar ou compartilhe links de forma privada"
              },
              "zh-CN": {
                singular: "在任何地方嵌入视频或私密分享链接"
              }
            }
          }),
          description: (0, _v7.translate)({
            singular: "Take complete control over who can access your videos with our security settings. Embed content on a website for public viewing, or specify which sites have permission to embed. Share videos with team members by adding them directly to videos, or share an unlisted link. Need added security? Lock your videos with a password.",
            dictionary: {
              es: {
                singular: "Toma el control total sobre quién puede acceder a tus vídeos con nuestras opciones de seguridad. Inserta contenido en un sitio web para visualización pública, o especifica qué sitios tienen permiso para incrustar. Comparte vídeos con miembros del equipo añadiéndolos directamente a los vídeos, o comparte un enlace no listado. ¿Necesitas más seguridad? Protege tus vídeos con una contraseña."
              },
              "de-DE": {
                singular: "Übernehmen Sie die volle Kontrolle darüber, wer auf Ihre Videos zugreifen kann – mit unseren Sicherheitseinstellungen. Betten Sie Inhalte auf einer Website zur öffentlichen Ansicht ein oder legen Sie fest, welche Websites die Berechtigung zum Einbetten haben. Teilen Sie Videos mit Teammitgliedern, indem Sie sie direkt zu Videos hinzufügen, oder teilen Sie einen nicht gelisteten Link. Benötigen Sie zusätzliche Sicherheit? Schützen Sie Ihre Videos mit einem Passwort."
              },
              "fr-FR": {
                singular: "Prenez le contrôle total sur qui peut accéder à vos vidéos grâce à nos paramètres de sécurité. Intégrez du contenu sur un site web pour une diffusion publique, ou spécifiez quels sites sont autorisés à intégrer. Partagez des vidéos avec des membres de l’équipe en les ajoutant directement aux vidéos, ou partagez un lien non répertorié. Besoin d’une sécurité renforcée\x0f? Verrouillez vos vidéos par mot de passe."
              },
              "ja-JP": {
                singular: "セキュリティ設定により、動画へのアクセス権を完全に管理できます。ウェブサイトに埋め込んで公開再生する、あるいは埋め込みを許可するサイトを指定することも可能です。動画にチームメンバーを直接追加して共有するか、非公開リンクを共有できます。さらにセキュリティが必要な場合は、パスワードで動画をロックしてください。"
              },
              "ko-KR": {
                singular: "보안 설정으로 동영상 접근 권한을 완전히 제어하세요. 콘텐츠를 웹사이트에 임베드하여 공개로 재생하거나 임베드 허용 사이트를 지정할 수 있습니다. 팀원들을 동영상에 직접 추가하여 공유하거나 비공개 링크를 통해 공유하세요. 추가 보안이 필요하면 비밀번호로 동영상을 잠그세요."
              },
              "pt-BR": {
                singular: "Assuma controle total sobre quem pode acessar seus vídeos com nossas configurações de segurança. Incorpore conteúdo em um site para visualização pública ou especifique quais sites têm permissão para incorporar. Compartilhe vídeos com membros da equipe adicionando-os diretamente aos vídeos ou compartilhe um link não listado. Precisa de mais segurança? Proteja seus vídeos com senha."
              },
              "zh-CN": {
                singular: "通过我们的安全设置，完全掌控谁可以访问您的视频。将内容嵌入网站以供公开观看，或指定允许嵌入的站点。通过将团队成员直接添加到视频来与他们共享，或分享未公开链接。需要更高安全性？可为视频设置密码保护。"
              }
            }
          }),
          cta: {
            label: (0, _v7.translate)({
              singular: "Learn more",
              dictionary: {
                es: {
                  singular: "Ver más"
                },
                "de-DE": {
                  singular: "Mehr dazu"
                },
                "fr-FR": {
                  singular: "En savoir plus "
                },
                "ja-JP": {
                  singular: "詳細を見る"
                },
                "ko-KR": {
                  singular: "자세히 보기"
                },
                "pt-BR": {
                  singular: "Saiba mais"
                },
                "zh-CN": {
                  singular: "了解更多"
                }
              }
            }),
            href: "/features/video-privacy",
            variant: "secondary"
          }
        }],
        _v1 = [{
          icon: (0, _v1.jsx)(_v25.CreateVideo, {
            boxSize: (0, _v23.rem)(40)
          }),
          title: (0, _v7.translate)({
            singular: "Select a template or use stock footage",
            dictionary: {
              es: {
                singular: "Selecciona una plantilla o usa material de archivo"
              },
              "de-DE": {
                singular: "Wählen Sie eine Vorlage oder nutzen Sie Stockmaterial"
              },
              "fr-FR": {
                singular: "Sélectionnez un modèle ou utilisez des séquences d’archives"
              },
              "ja-JP": {
                singular: "テンプレートを選択するか、ストック映像を使用"
              },
              "ko-KR": {
                singular: "템플릿을 선택하거나 스톡 영상을 사용하세요"
              },
              "pt-BR": {
                singular: "Selecione um modelo ou use material de arquivo"
              },
              "zh-CN": {
                singular: "选择模板或使用库存素材"
              }
            }
          }),
          cta: {
            label: (0, _v7.translate)({
              singular: "Create",
              dictionary: {
                es: {
                  singular: "Crear"
                },
                "de-DE": {
                  singular: "Erstellen"
                },
                "fr-FR": {
                  singular: "Créer"
                },
                "ja-JP": {
                  singular: "作成"
                },
                "ko-KR": {
                  singular: "만들기"
                },
                "pt-BR": {
                  singular: "Criar"
                },
                "zh-CN": {
                  singular: "创建"
                }
              }
            }),
            href: "/create/templates",
            variant: "secondary"
          }
        }, {
          icon: (0, _v1.jsx)(_v27.Record, {
            boxSize: (0, _v23.rem)(40)
          }),
          title: (0, _v7.translate)({
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
          cta: {
            label: (0, _v7.translate)({
              singular: "Record",
              dictionary: {
                es: {
                  singular: "Grabar"
                },
                "de-DE": {
                  singular: "Aufnehmen"
                },
                "fr-FR": {
                  singular: "Enregistrer"
                },
                "ja-JP": {
                  singular: "録画"
                },
                "ko-KR": {
                  singular: "녹화"
                },
                "pt-BR": {
                  singular: "Gravar"
                },
                "zh-CN": {
                  singular: "录制"
                }
              }
            }),
            href: "/features/screen-recorder",
            variant: "secondary"
          }
        }, {
          icon: (0, _v1.jsx)(_v26.MagicWand, {
            boxSize: (0, _v23.rem)(40)
          }),
          title: (0, _v7.translate)({
            singular: "Edit your video directly within your web browser",
            dictionary: {
              es: {
                singular: "Edita tu vídeo directamente en tu navegador web"
              },
              "de-DE": {
                singular: "Bearbeiten Sie Ihr Video direkt in Ihrem Webbrowser"
              },
              "fr-FR": {
                singular: "Montez votre vidéo directement dans votre navigateur web"
              },
              "ja-JP": {
                singular: "ウェブブラウザ内で直接動画を編集"
              },
              "ko-KR": {
                singular: "웹 브라우저에서 바로 동영상을 편집하세요"
              },
              "pt-BR": {
                singular: "Edite seu vídeo diretamente no navegador web"
              },
              "zh-CN": {
                singular: "在网页浏览器中直接编辑您的视频"
              }
            }
          }),
          cta: {
            label: (0, _v7.translate)({
              singular: "Edit",
              dictionary: {
                es: {
                  singular: "Editar"
                },
                "de-DE": {
                  singular: "Bearbeiten"
                },
                "fr-FR": {
                  singular: "Modifier"
                },
                "ja-JP": {
                  singular: "編集"
                },
                "ko-KR": {
                  singular: "편집"
                },
                "pt-BR": {
                  singular: "Editar"
                },
                "zh-CN": {
                  singular: "编辑"
                }
              }
            }),
            href: "/create/edit?blank=true",
            variant: "secondary"
          }
        }, {
          icon: (0, _v1.jsx)(_v28.Upload, {
            boxSize: (0, _v23.rem)(40)
          }),
          title: (0, _v7.translate)({
            singular: "Host and store extra (extra) large video files",
            dictionary: {
              es: {
                singular: "Aloja y almacena archivos de vídeo extra (extra) grandes"
              },
              "de-DE": {
                singular: "Hosten und speichern Sie extra (extra) große Videodateien"
              },
              "fr-FR": {
                singular: "Hébergez et stockez des fichiers vidéo extra (extra) volumineux"
              },
              "ja-JP": {
                singular: "非常に大きな（extra）動画ファイルをホストおよび保存"
              },
              "ko-KR": {
                singular: "초대형 비디오 파일을 호스팅하고 저장하세요"
              },
              "pt-BR": {
                singular: "Hospede e armazene arquivos de vídeo extra (extra) grandes"
              },
              "zh-CN": {
                singular: "托管并存储超大（extra）视频文件"
              }
            }
          }),
          cta: {
            label: (0, _v7.translate)({
              singular: "Upload",
              dictionary: {
                es: {
                  singular: "Subir"
                },
                "de-DE": {
                  singular: "Hochladen"
                },
                "fr-FR": {
                  singular: "Importer"
                },
                "ja-JP": {
                  singular: "アップロード"
                },
                "ko-KR": {
                  singular: "업로드"
                },
                "pt-BR": {
                  singular: "Carregar"
                },
                "zh-CN": {
                  singular: "上传"
                }
              }
            }),
            href: "/create/edit?blank=true",
            variant: "secondary"
          }
        }],
        _v2 = [{
          question: (0, _v7.translate)({
            singular: "How do I upload a video online?",
            dictionary: {
              es: {
                singular: "¿Cómo subo un vídeo en línea?"
              },
              "de-DE": {
                singular: "Wie lade ich ein Video online hoch?"
              },
              "fr-FR": {
                singular: "Comment téléverser une vidéo en ligne\x0f?"
              },
              "ja-JP": {
                singular: "オンラインで動画をアップロードするにはどうすればよいですか？"
              },
              "ko-KR": {
                singular: "온라인에 동영상을 어떻게 업로드하나요?"
              },
              "pt-BR": {
                singular: "Como faço para enviar um vídeo online?"
              },
              "zh-CN": {
                singular: "我如何在线上传视频？"
              }
            }
          }),
          answer: (0, _v7.translate)({
            singular: "Uploading a video online is easy with Vimeo. To upload a video that is saved on your computer, you can click on Select files on our {UPLOAD}Upload{/UPLOAD} page. You can also upload videos from Dropbox, Google Drive, Box, Zoom, Webex, or other apps. Then, select where in your library the newly uploaded video will be saved.",
            replacements: {
              UPLOAD: _v0 => (0, _v1.jsx)(_v22.Link, {
                href: "/upload",
                variant: "inline-secondary",
                children: _v0
              })
            },
            dictionary: {
              es: {
                singular: "Subir un vídeo en línea es fácil con Vimeo. Para subir un vídeo guardado en tu ordenador, puedes hacer clic en Seleccionar archivos en nuestra página de {UPLOAD}Upload{/UPLOAD}. También puedes subir vídeos desde Dropbox, Google Drive, Box, Zoom, Webex u otras apps. Después, selecciona en qué parte de tu biblioteca se guardará el vídeo recién subido."
              },
              "de-DE": {
                singular: "Das Hochladen eines Videos ins Internet ist mit Vimeo einfach. Um ein auf Ihrem Computer gespeichertes Video hochzuladen, können Sie auf Dateien auswählen auf unserer {UPLOAD}Hochladen{/UPLOAD}-Seite klicken. Sie können Videos auch aus Dropbox, Google Drive, Box, Zoom, Webex oder anderen Apps hochladen. Wählen Sie dann aus, wo in Ihrer Bibliothek das neu hochgeladene Video gespeichert werden soll."
              },
              "fr-FR": {
                singular: "Téléverser une vidéo en ligne est facile avec Vimeo. Pour téléverser une vidéo enregistrée sur votre ordinateur, vous pouvez cliquer sur Sélectionner des fichiers sur notre page {UPLOAD}Téléversement{/UPLOAD}. Vous pouvez également téléverser des vidéos depuis Dropbox, Google Drive, Box, Zoom, Webex ou d’autres applications. Ensuite, sélectionnez l’emplacement dans votre bibliothèque où la vidéo nouvellement téléversée sera enregistrée."
              },
              "ja-JP": {
                singular: "Vimeoでオンラインに動画をアップロードするのは簡単です。パソコンに保存されている動画をアップロードするには、{UPLOAD}アップロード{/UPLOAD}ページの「ファイルを選択」をクリックしてください。Dropbox、Google Drive、Box、Zoom、Webex、その他のアプリからアップロードすることもできます。アップロード後、ライブラリ内のどこに保存するかを選択してください。"
              },
              "ko-KR": {
                singular: "Vimeo로 온라인에 동영상을 업로드하는 것은 간단합니다. 컴퓨터에 저장된 동영상을 업로드하려면 {UPLOAD}업로드{/UPLOAD} 페이지에서 파일 선택을 클릭하세요. 또한 Dropbox, Google Drive, Box, Zoom, Webex 등 다른 앱에서 동영상을 업로드할 수 있습니다. 그런 다음 새로 업로드된 동영상이 라이브러리의 어느 위치에 저장될지 선택하세요."
              },
              "pt-BR": {
                singular: "Enviar um vídeo online é fácil com o Vimeo. Para enviar um vídeo salvo no seu computador, você pode clicar em Selecionar arquivos em nossa página {UPLOAD}Upload{/UPLOAD}. Você também pode enviar vídeos do Dropbox, Google Drive, Box, Zoom, Webex ou outros apps. Em seguida, selecione onde na sua biblioteca o vídeo recém-enviado será salvo."
              },
              "zh-CN": {
                singular: "通过 Vimeo 在线上传视频很简单。要上传保存在电脑上的视频，您可以在我们的{UPLOAD}上传{/UPLOAD}页面上点击“选择文件”。您也可以从 Dropbox、Google Drive、Box、Zoom、Webex 或其他应用上传视频。然后选择新上传的视频将在您的库中的保存位置。"
              }
            }
          })
        }, {
          question: (0, _v7.translate)({
            singular: "Is there a video file size upload limit?",
            dictionary: {
              es: {
                singular: "¿Existe un límite de tamaño de archivo para subir vídeos?"
              },
              "de-DE": {
                singular: "Gibt es eine Größenbegrenzung für Videodateien beim Upload?"
              },
              "fr-FR": {
                singular: "Y a‑t‑il une limite de taille pour les fichiers vidéo téléversés\x0f?"
              },
              "ja-JP": {
                singular: "動画ファイルのアップロードサイズに制限はありますか？"
              },
              "ko-KR": {
                singular: "동영상 파일 업로드 용량 제한이 있나요?"
              },
              "pt-BR": {
                singular: "Existe um limite de tamanho para arquivos de vídeo no upload?"
              },
              "zh-CN": {
                singular: "视频文件上传大小有限制吗？"
              }
            }
          }),
          answer: (0, _v7.translate)({
            singular: "Free plans allow for two videos per month, with a 25-video total lifetime limit. However, there are no size limits for the video file. Vimeo’s weekly upload quota for other plans is as follows: Basic: 500MB/week. Plus: 5GB/week. Pro: 20GB/week. Total video storage also depends on your plan: Basic: 5GB. Pro Unlimited: 3TB. Business: 5TB. Premium: 7TB.",
            dictionary: {
              es: {
                singular: "Los planes gratuitos permiten dos vídeos por mes, con un límite de 25 vídeos en total de por vida. Sin embargo, no hay límites de tamaño para el archivo de vídeo. La cuota semanal de subida de Vimeo para otros planes es la siguiente: Basic: 500MB/semana. Plus: 5GB/semana. Pro: 20GB/semana. El almacenamiento total de vídeos también depende de tu plan: Basic: 5GB. Pro Unlimited: 3TB. Business: 5TB. Premium: 7TB."
              },
              "de-DE": {
                singular: "Kostenlose Pläne erlauben zwei Videos pro Monat mit einer Gesamtbegrenzung von 25 Videos. Es gibt jedoch keine Größenbeschränkung für einzelne Videodateien. Vimeos wöchentliche Upload-Quoten für andere Pläne sind wie folgt: Basic: 500MB/Woche. Plus: 5GB/Woche. Pro: 20GB/Woche. Der gesamte Videospeicher hängt ebenfalls von Ihrem Plan ab: Basic: 5GB. Pro Unlimited: 3TB. Business: 5TB. Premium: 7TB."
              },
              "fr-FR": {
                singular: "Les forfaits gratuits permettent deux vidéos par mois, avec une limite de 25 vidéos au total sur la durée de vie du compte. Toutefois, il n’y a pas de limite de taille pour le fichier vidéo. Le quota d’envoi hebdomadaire de Vimeo pour les autres forfaits est le suivant\x0f\x1a Basic\x0f\x1a 500 Mo/semaine. Plus\x0f\x1a 5 Go/semaine. Pro\x0f\x1a 20 Go/semaine. Le stockage total de vidéos dépend également de votre forfait\x0f\x1a Basic\x0f\x1a 5 Go. Pro Unlimited\x0f\x1a 3 To. Business\x0f\x1a 5 To. Premium\x0f\x1a 7 To."
              },
              "ja-JP": {
                singular: "無料プランでは月に2本まで、かつ生涯合計25本の制限があります。ただし、動画ファイルのサイズ制限はありません。Vimeoの他のプランの週間アップロード割当は以下の通りです：Basic：500MB/週、Plus：5GB/週、Pro：20GB/週。総ストレージ容量もプランによって異なります：Basic：5GB、Pro Unlimited：3TB、Business：5TB、Premium：7TB。"
              },
              "ko-KR": {
                singular: "무료 플랜은 월 2개의 비디오 업로드가 허용되며, 평생 총 25개 비디오 한도가 있습니다. 단, 비디오 파일의 크기 제한은 없습니다. Vimeo의 다른 플랜별 주간 업로드 할당량은 다음과 같습니다: Basic: 500MB/주, Plus: 5GB/주, Pro: 20GB/주. 총 비디오 저장 용량은 플랜에 따라 다릅니다: Basic: 5GB, Pro Unlimited: 3TB, Business: 5TB, Premium: 7TB."
              },
              "pt-BR": {
                singular: "Planos gratuitos permitem dois vídeos por mês, com um limite total de 25 vídeos ao longo da vida. No entanto, não há limites de tamanho para o arquivo de vídeo. A cota semanal de upload do Vimeo para outros planos é a seguinte: Basic: 500MB/semana. Plus: 5GB/semana. Pro: 20GB/semana. O armazenamento total de vídeo também depende do seu plano: Basic: 5GB. Pro Unlimited: 3TB. Business: 5TB. Premium: 7TB."
              },
              "zh-CN": {
                singular: "免费计划允许每月上传两段视频，账户生命周期内总共限 25 段。但视频文件大小没有限制。Vimeo 对其他计划的每周上传配额如下：Basic: 500MB/week. Plus: 5GB/week. Pro: 20GB/week. 总视频存储也取决于您的计划：Basic: 5GB. Pro Unlimited: 3TB. Business: 5TB. Premium: 7TB."
              }
            }
          })
        }, {
          question: (0, _v7.translate)({
            singular: "What types of video files can I upload?",
            dictionary: {
              es: {
                singular: "¿Qué tipos de archivos de vídeo puedo subir?"
              },
              "de-DE": {
                singular: "Welche Arten von Videodateien kann ich hochladen?"
              },
              "fr-FR": {
                singular: "Quels types de fichiers vidéo puis‑je téléverser\x0f?"
              },
              "ja-JP": {
                singular: "どのような種類の動画ファイルをアップロードできますか？"
              },
              "ko-KR": {
                singular: "어떤 유형의 동영상 파일을 업로드할 수 있나요?"
              },
              "pt-BR": {
                singular: "Quais tipos de arquivos de vídeo posso enviar?"
              },
              "zh-CN": {
                singular: "我可以上传哪些类型的视频文件？"
              }
            }
          }),
          answer: (0, _v7.translate)({
            singular: "Vimeo supports uploading a wide variety of video file types, including: WMV, MOV, AVI, FLV, and MP4.",
            dictionary: {
              es: {
                singular: "Vimeo admite la subida de una amplia variedad de formatos de archivo de vídeo, incluidos: WMV, MOV, AVI, FLV y MP4."
              },
              "de-DE": {
                singular: "Vimeo unterstützt das Hochladen einer Vielzahl von Videodateitypen, einschließlich: WMV, MOV, AVI, FLV und MP4."
              },
              "fr-FR": {
                singular: "Vimeo prend en charge l’importation d’un large éventail de types de fichiers vidéo, notamment\x0f\x1a WMV, MOV, AVI, FLV et MP4."
              },
              "ja-JP": {
                singular: "Vimeoは、WMV、MOV、AVI、FLV、MP4など、さまざまな動画ファイル形式のアップロードに対応しています。"
              },
              "ko-KR": {
                singular: "Vimeo는 WMV, MOV, AVI, FLV, MP4 등 다양한 비디오 파일 형식의 업로드를 지원합니다."
              },
              "pt-BR": {
                singular: "O Vimeo aceita o upload de uma grande variedade de formatos de arquivo de vídeo, incluindo: WMV, MOV, AVI, FLV e MP4."
              },
              "zh-CN": {
                singular: "Vimeo 支持上传多种视频文件类型，包括：WMV、MOV、AVI、FLV 和 MP4。"
              }
            }
          })
        }, {
          question: (0, _v7.translate)({
            singular: "Can I upload videos from a phone?",
            dictionary: {
              es: {
                singular: "¿Puedo subir vídeos desde un teléfono?"
              },
              "de-DE": {
                singular: "Kann ich Videos mit dem Smartphone hochladen?"
              },
              "fr-FR": {
                singular: "Puis-je téléverser des vidéos depuis un téléphone\x0f?"
              },
              "ja-JP": {
                singular: "スマートフォンから動画をアップロードできますか？"
              },
              "ko-KR": {
                singular: "휴대폰으로 동영상을 업로드할 수 있나요?"
              },
              "pt-BR": {
                singular: "Posso enviar vídeos a partir de um celular?"
              },
              "zh-CN": {
                singular: "我可以用手机上传视频吗？"
              }
            }
          }),
          answer: (0, _v7.translate)({
            singular: "Yes, you can upload videos using the Vimeo app for iPhone and Android. Quickly create, edit, and share content all from your mobile device or tablet.",
            dictionary: {
              es: {
                singular: "Sí, puedes subir vídeos usando la app de Vimeo para iPhone y Android. Crea, edita y comparte contenido rápidamente desde tu dispositivo móvil o tableta."
              },
              "de-DE": {
                singular: "Ja, Sie können Videos mit der Vimeo-App für iPhone und Android hochladen. Erstellen, bearbeiten und teilen Sie Inhalte schnell direkt von Ihrem Mobilgerät oder Tablet."
              },
              "fr-FR": {
                singular: "Oui, vous pouvez téléverser des vidéos en utilisant l’application Vimeo pour iPhone et Android. Créez, montez et partagez rapidement du contenu depuis votre appareil mobile ou votre tablette."
              },
              "ja-JP": {
                singular: "はい、iPhoneおよびAndroid用Vimeoアプリから動画をアップロードできます。モバイル端末やタブレットから素早く作成、編集、共有できます。"
              },
              "ko-KR": {
                singular: "네, iPhone 및 Android용 Vimeo 앱을 사용해 동영상을 업로드할 수 있습니다. 모바일 기기나 태블릿에서 빠르게 콘텐츠를 생성, 편집 및 공유하세요."
              },
              "pt-BR": {
                singular: "Sim, você pode enviar vídeos usando o app do Vimeo para iPhone e Android. Crie, edite e compartilhe conteúdo rapidamente diretamente do seu dispositivo móvel ou tablet."
              },
              "zh-CN": {
                singular: "是的，您可以使用 Vimeo 的 iPhone 与 Android 应用上传视频。在移动设备或平板上快速创建、编辑并分享内容。"
              }
            }
          })
        }, {
          question: (0, _v7.translate)({
            singular: "Can I edit uploaded videos?",
            dictionary: {
              es: {
                singular: "¿Puedo editar los vídeos subidos?"
              },
              "de-DE": {
                singular: "Kann ich hochgeladene Videos bearbeiten?"
              },
              "fr-FR": {
                singular: "Puis-je modifier les vidéos téléversées\x0f?"
              },
              "ja-JP": {
                singular: "アップロードした動画を編集できますか？"
              },
              "ko-KR": {
                singular: "업로드한 동영상을 편집할 수 있나요?"
              },
              "pt-BR": {
                singular: "Posso editar vídeos enviados?"
              },
              "zh-CN": {
                singular: "我可以编辑已上传的视频吗？"
              }
            }
          }),
          answer: (0, _v7.translate)({
            singular: "Yes, you can edit videos right in your web browser or through the Vimeo app. Cut, trim, resize, add text, add music, compress, download, and more. When you’re done, share the video link anywhere you want, or keep the video private – it’s up to you!",
            dictionary: {
              es: {
                singular: "Sí, puedes editar vídeos directamente en tu navegador web o a través de la app de Vimeo. Corta, ajusta la duración, redimensiona, añade texto, añade música, comprime, descarga y más. Cuando termines, comparte el enlace del vídeo donde quieras, o mantén el vídeo en privado: ¡tú decides!"
              },
              "de-DE": {
                singular: "Ja, Sie können Videos direkt in Ihrem Webbrowser oder über die Vimeo-App bearbeiten. Schneiden, trimmen, skalieren, Text hinzufügen, Musik einfügen, komprimieren, herunterladen und mehr. Wenn Sie fertig sind, teilen Sie den Videolink überall oder behalten Sie das Video privat – ganz wie Sie möchten!"
              },
              "fr-FR": {
                singular: "Oui, vous pouvez monter des vidéos directement dans votre navigateur web ou via l’application Vimeo. Coupez, rognez, redimensionnez, ajoutez du texte, ajoutez de la musique, compressez, téléchargez et plus encore. Lorsque vous avez terminé, partagez le lien de la vidéo où vous le souhaitez, ou gardez la vidéo privée — c’est vous qui décidez\x0f!"
              },
              "ja-JP": {
                singular: "はい、ウェブブラウザ内またはVimeoアプリで動画を編集できます。カット、トリミング、リサイズ、テキスト追加、音楽追加、圧縮、ダウンロードなどが可能です。編集が完了したら、動画のリンクをどこでも共有するか、動画を非公開にするかを選べます。"
              },
              "ko-KR": {
                singular: "네, 웹 브라우저나 Vimeo 앱에서 바로 동영상을 편집할 수 있습니다. 자르기, 트리밍, 크기 조정, 텍스트 추가, 음악 추가, 압축, 다운로드 등 다양한 기능을 이용할 수 있습니다. 편집이 끝나면 동영상 링크를 원하는 곳에 공유하거나 동영상을 비공개로 유지할 수 있습니다."
              },
              "pt-BR": {
                singular: "Sim, você pode editar vídeos diretamente no seu navegador web ou pelo app do Vimeo. Corte, apare, redimensione, adicione texto, adicione música, comprima, baixe e muito mais. Quando terminar, compartilhe o link do vídeo onde quiser ou mantenha o vídeo privado — a escolha é sua!"
              },
              "zh-CN": {
                singular: "是的，您可以直接在网页浏览器或通过 Vimeo 应用编辑视频。可进行剪切、修剪、调整大小、添加文字、添加音乐、压缩、下载等操作。完成后，您可以在任意位置分享视频链接，或将视频设为私密——由您决定！"
              }
            }
          })
        }, {
          question: (0, _v7.translate)({
            singular: "How can I share the video I uploaded?",
            dictionary: {
              es: {
                singular: "¿Cómo puedo compartir el vídeo que subí?"
              },
              "de-DE": {
                singular: "Wie kann ich das hochgeladene Video teilen?"
              },
              "fr-FR": {
                singular: "Comment puis‑je partager la vidéo que j’ai téléversée\x0f?"
              },
              "ja-JP": {
                singular: "アップロードした動画をどのように共有できますか？"
              },
              "ko-KR": {
                singular: "업로드한 동영상을 어떻게 공유하나요?"
              },
              "pt-BR": {
                singular: "Como posso compartilhar o vídeo que enviei?"
              },
              "zh-CN": {
                singular: "我如何分享我上传的视频？"
              }
            }
          }),
          answer: (0, _v7.translate)({
            singular: "To share a video, first select it from your {LIBRARY}Library{/LIBRARY} to open the video settings page. Then, click the Share button in the top right corner. A new modal will appear with options for sharing, embedding, and changing the privacy settings for your video. Select the Copy link button in the lower right corner of the modal to copy the link and share your video, or select the Embed tab to copy the embed code by clicking the Copy embed code button.",
            replacements: {
              LIBRARY: _v0 => (0, _v1.jsx)(_v22.Link, {
                href: "/library",
                variant: "inline-secondary",
                children: _v0
              })
            },
            dictionary: {
              es: {
                singular: "Para compartir un vídeo, primero selecciónalo en tu {LIBRARY}Library{/LIBRARY} para abrir la página de configuración del vídeo. Luego, haz clic en el botón Compartir en la esquina superior derecha. Aparecerá un nuevo modal con opciones para compartir, incrustar y cambiar la configuración de privacidad del vídeo. Selecciona el botón Copiar enlace en la esquina inferior derecha del modal para copiar el enlace y compartir tu vídeo, o selecciona la pestaña Insertar para copiar el código de inserción haciendo clic en el botón Copiar código de inserción."
              },
              "de-DE": {
                singular: "Um ein Video zu teilen, wählen Sie es zuerst aus Ihrer {LIBRARY}Bibliothek{/LIBRARY} aus, um die Seite mit den Videoeinstellungen zu öffnen. Klicken Sie dann oben rechts auf die Schaltfläche Teilen. Es öffnet sich ein Modal mit Optionen zum Teilen, Einbetten und zum Ändern der Datenschutzeinstellungen Ihres Videos. Wählen Sie die Schaltfläche Link kopieren unten rechts im Modal, um den Link zu kopieren und Ihr Video zu teilen, oder wählen Sie den Reiter Einbetten, um den Einbettungscode zu kopieren, indem Sie auf die Schaltfläche Einbettungscode kopieren klicken."
              },
              "fr-FR": {
                singular: "Pour partager une vidéo, sélectionnez d’abord celle‑ci depuis votre {LIBRARY}Bibliothèque{/LIBRARY} pour ouvrir la page des paramètres de la vidéo. Ensuite, cliquez sur le bouton Partager en haut à droite. Une nouvelle fenêtre modale apparaîtra avec des options pour le partage, l’intégration et la modification des paramètres de confidentialité de votre vidéo. Sélectionnez le bouton Copier le lien en bas à droite de la modale pour copier le lien et partager votre vidéo, ou sélectionnez l’onglet Intégrer pour copier le code d’intégration en cliquant sur le bouton Copier le code d’intégration."
              },
              "ja-JP": {
                singular: "動画を共有するには、まず{LIBRARY}ライブラリ{/LIBRARY}から対象の動画を選択して動画設定ページを開きます。次に、右上の「共有」ボタンをクリックしてください。共有、埋め込み、プライバシー設定の変更オプションが表示されたモーダルが開きます。モーダルの右下にある「リンクをコピー」ボタンを選択してリンクをコピーし動画を共有するか、埋め込みタブを選択して「埋め込みコードをコピー」ボタンをクリックして埋め込みコードをコピーしてください。"
              },
              "ko-KR": {
                singular: "동영상을 공유하려면 먼저 {LIBRARY}라이브러리{/LIBRARY}에서 해당 동영상을 선택해 동영상 설정 페이지를 엽니다. 그런 다음 오른쪽 상단의 공유 버튼을 클릭하세요. 공유, 임베드 및 개인정보 설정 변경 옵션이 포함된 모달이 표시됩니다. 모달의 오른쪽 하단에 있는 링크 복사 버튼을 클릭해 링크를 복사하여 동영상을 공유하거나, 임베드 탭을 선택한 후 임베드 코드 복사 버튼을 클릭해 임베드 코드를 복사하세요."
              },
              "pt-BR": {
                singular: "Para compartilhar um vídeo, primeiro selecione-o na sua {LIBRARY}Library{/LIBRARY} para abrir a página de configurações do vídeo. Em seguida, clique no botão Compartilhar no canto superior direito. Um novo modal aparecerá com opções para compartilhamento, incorporação e alteração das configurações de privacidade do seu vídeo. Selecione o botão Copiar link no canto inferior direito do modal para copiar o link e compartilhar seu vídeo, ou selecione a aba Incorporar para copiar o código de incorporação clicando no botão Copiar código de incorporação."
              },
              "zh-CN": {
                singular: "要分享视频，首先从您的{LIBRARY}库{/LIBRARY}中选择该视频以打开视频设置页面。然后，点击右上角的“分享”按钮。将出现一个模态窗口，提供分享、嵌入和更改视频隐私设置的选项。选择模态窗口右下角的“复制链接”按钮以复制链接并分享视频，或选择“嵌入”标签，然后点击“复制嵌入代码”按钮以复制嵌入代码。"
              }
            }
          })
        }];
      return (0, _v1.jsxs)(_v19.Box, {
        bg: "surface",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        children: [(0, _v1.jsx)(_v41, {
          cards: _v0
        }), (0, _v1.jsx)(_v50, {
          title: (0, _v7.translate)({
            singular: "Go beyond uploading with our all-in-one video platform",
            dictionary: {
              es: {
                singular: "Ve más allá de la mera subida con nuestra plataforma de vídeo todo en uno"
              },
              "de-DE": {
                singular: "Gehen Sie über das Hochladen hinaus mit unserer All-in-One-Videoplattform"
              },
              "fr-FR": {
                singular: "Allez au‑delà du simple téléversement avec notre plateforme vidéo tout‑en‑un"
              },
              "ja-JP": {
                singular: "アップロードだけでなく、オールインワンのビデオプラットフォームを活用"
              },
              "ko-KR": {
                singular: "올인원 비디오 플랫폼으로 업로드 이상의 작업을 수행하세요"
              },
              "pt-BR": {
                singular: "Vá além do envio com nossa plataforma de vídeo tudo-em-um"
              },
              "zh-CN": {
                singular: "超越简单上传，使用我们的一体化视频平台"
              }
            }
          }),
          cards: _v1
        }), (0, _v1.jsx)(_v48, {
          eyebrow: (0, _v7.translate)({
            singular: "FAQ",
            dictionary: {
              es: {
                singular: "Preguntas frecuentes"
              },
              "ja-JP": {
                singular: "よくある質問"
              },
              "pt-BR": {
                singular: "Perguntas frequentes"
              },
              "zh-CN": {
                singular: "常见问题解答"
              }
            }
          }),
          title: (0, _v7.translate)({
            singular: "We've got answers",
            dictionary: {
              es: {
                singular: "Tenemos respuestas"
              },
              "de-DE": {
                singular: "Wir haben Antworten"
              },
              "fr-FR": {
                singular: "Nous avons des réponses"
              },
              "ja-JP": {
                singular: "ご質問にお答えします"
              },
              "ko-KR": {
                singular: "답변이 준비되어 있습니다"
              },
              "pt-BR": {
                singular: "Temos respostas"
              },
              "zh-CN": {
                singular: "我们有答案"
              }
            }
          }),
          faqs: _v2
        })]
      });
    }),
    _v87 = ({
      files: _v0,
      onRemoveFile: _v1,
      label: _v2,
      action: _v3,
      onPrimaryAction: _v4,
      error: _v5,
      dropzone: _v6,
      uploads: _v7,
      uploaderSummary: _v8,
      knobs: _v9,
      onRestart: _v10,
      onGoToFolder: _v11
    }) => {
      let _v12 = 0 === _v7.length ? "staging" : _v8.completeCount + _v8.failedCount + _v8.canceledCount >= _v7.length ? "terminal" : "uploading",
        _v13 = "staging" === _v12;
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsxs)(_v20.Flex, {
          flexDirection: "column",
          maxWidth: (0, _v23.rem)(896),
          margin: "0 auto",
          padding: (0, _v23.rem)(24),
          gap: (0, _v23.rem)(24),
          children: [(0, _v1.jsx)(_v21.Header, {
            as: "h1",
            variant: "heading-3xl",
            fontSize: {
              base: "heading-2xl",
              md: "heading-3xl"
            },
            textAlign: "center",
            color: "text-primary",
            children: (0, _v7.translate)({
              singular: "Upload your videos to Vimeo",
              dictionary: {
                es: {
                  singular: "Sube tus vídeos a Vimeo"
                },
                "de-DE": {
                  singular: "Laden Sie Ihre Videos auf Vimeo hoch"
                },
                "fr-FR": {
                  singular: "Téléversez vos vidéos sur Vimeo"
                },
                "ja-JP": {
                  singular: "Vimeoに動画をアップロード"
                },
                "ko-KR": {
                  singular: "동영상을 Vimeo에 업로드하세요"
                },
                "pt-BR": {
                  singular: "Envie seus vídeos para o Vimeo"
                },
                "zh-CN": {
                  singular: "将您的视频上传至 Vimeo"
                }
              }
            })
          }), (0, _v1.jsx)(_v70, {
            phase: _v12,
            isDragging: _v6.isDragging,
            children: _v13 ? (0, _v1.jsx)(_v63, {
              isDragging: _v6.isDragging,
              onDragOver: _v6.onDragOver,
              onDragLeave: _v6.onDragLeave,
              onDrop: _v6.onDrop,
              onSelectFiles: _v6.onSelectFiles,
              label: _v2,
              action: _v3,
              onPrimaryAction: _v4,
              knobs: _v9 ? (0, _v1.jsx)(_v82, {
                knobs: _v9
              }) : null,
              stagedList: _v0.length > 0 ? (0, _v1.jsx)(_v67, {
                files: _v0,
                onRemoveFile: _v1
              }) : null
            }) : (0, _v1.jsxs)(_v1.Fragment, {
              children: [(0, _v1.jsx)(_v84, {
                uploads: _v7,
                uploaderSummary: _v8
              }), "terminal" === _v12 ? (0, _v1.jsx)(_v68, {
                onRestart: _v10,
                onGoToFolder: _v11
              }) : null]
            })
          }), _v5 ? (0, _v1.jsxs)(_v16.Alert, {
            status: "error",
            children: [(0, _v1.jsx)(_v18.AlertIcon, {}), (0, _v1.jsx)(_v17.AlertDescription, {
              children: _v5
            })]
          }) : null, (0, _v1.jsx)(_v85, {})]
        }), (0, _v1.jsx)(_v86, {})]
      });
    };
  var _v88 = _v0.i(0),
    _v89 = _v0.i(0),
    _v90 = _v0.i(0),
    _v91 = _v0.i(0),
    _v92 = _v0.i(0),
    _v93 = _v0.i(0),
    _v94 = _v0.i(0),
    _v95 = _v0.i(0),
    _v96 = _v0.i(0);
  let _v97 = {
      add: !1,
      comments: "nobody",
      download: !1,
      embed: "private",
      view: "nobody"
    },
    _v98 = ["canAllowDownloads", "canUnlistVideo", "canHideVideos", "hasExtraEmbedOptions", "hasPrivateModeOff", "hasProEmbedOptions", "hasVideoPasswordPrivacyUpsell", "hasCreation", "hasEnterprise"];
  var _v99 = _v0.i(0);
  let _v100 = "Upload in progress: navigation aborted. Please ignore this error.";
  function _v101(_v0) {
    _v0.reason === _v100 && _v0.preventDefault();
  }
  var _v102 = _v0.i(0),
    _v103 = _v0.i(0);
  let _v104 = {
      barebone_js: "",
      chromeless_css: "",
      chromeless_js: "",
      css: "",
      js: "",
      player_url: ""
    },
    _v105 = ({
      children: _v0
    }) => {
      let _v1 = (0, _v15.useViewer)();
      return (0, _v102.useHasMounted)() ? (0, _v1.jsx)(_v103.default, {
        user: _v1?.user ?? null,
        jwt: _v1?.jwt ?? "",
        apiUrl: _v1?.apiUrl ?? "",
        locale: _v1?.locale ?? "",
        vuid: _v1?.vuid ?? "",
        xsrft: "",
        magistoApiHost: "",
        playerAssetUrls: _v104,
        children: _v0
      }) : (0, _v1.jsx)(_v1.Fragment, {
        children: _v0
      });
    },
    _v106 = {
      paywallTrigger: "satellite_upload_button",
      paywallLocation: "satellite_upload",
      paywallType: "popup",
      paywallFeature: "upload"
    },
    _v107 = () => {
      let {
          files: _v0,
          removeFile: _v1,
          clear: _v2
        } = (0, _v88.useStagedFiles)(),
        _v3 = (() => {
          let {
              addFiles: _v0
            } = (0, _v88.useStagedFiles)(),
            [_v1, _v2] = (0, _v10.useState)(!1),
            _v3 = (0, _v10.useCallback)(_v0 => {
              _v0.preventDefault(), _v2(!0);
            }, []),
            _v4 = (0, _v10.useCallback)(() => {
              _v2(!1);
            }, []);
          return {
            isDragging: _v1,
            onDragOver: _v3,
            onDragLeave: _v4,
            onDrop: (0, _v10.useCallback)(_v0 => {
              _v0.preventDefault(), _v2(!1), _v0.dataTransfer?.files?.length && _v0(_v61(_v0.dataTransfer.files));
            }, [_v0]),
            onSelectFiles: (0, _v10.useCallback)(_v0 => {
              _v0.target.files?.length && _v0(_v61(_v0.target.files)), _v0.target.value = "";
            }, [_v0])
          };
        })(),
        _v4 = (() => {
          let _v0 = (0, _v15.useViewer)(),
            {
              files: _v1
            } = (0, _v88.useStagedFiles)(),
            {
              data: _v2,
              isLoading: _v3
            } = (0, _v93.useGetAllWorkspacesForUser)(),
            [_v4, _v5] = (0, _v10.useState)(null),
            [_v6, _v7] = (0, _v10.useState)(null),
            [_v8, _v9] = (0, _v10.useState)({}),
            [_v10, _v11] = (0, _v10.useState)(),
            [_v12, _v13] = (0, _v10.useState)(null),
            _v14 = _v4 ?? _v0?.user?.id ?? null,
            {
              data: _v15
            } = (0, _v92.useGetUser)(() => _v14 ? {
              where: {
                userId: _v14
              },
              select: ["preferences.videos.password", "preferences.videos.rating", "preferences.videos.privacy.view", "preferences.videos.privacy.comments", "preferences.videos.privacy.embed", "preferences.videos.privacy.download", "preferences.videos.privacy.add", "preferences.videos.privacy.clipEmbedAllowedDomains"]
            } : null),
            {
              config: _v16
            } = (0, _v95.useUploadPageConfig)(_v14),
            _v17 = (0, _v10.useMemo)(() => _v16?.teamConfigs?.find(_v0 => _v0.ownerId === _v14), [_v16, _v14]),
            _v18 = (0, _v10.useMemo)(() => (_v2?.data ?? []).map(_v0 => ({
              id: _v0.teamOwnerId,
              title: _v0.teamOrWorkspaceName ?? _v0.displayName,
              role: _v0.untranslatedUserRole,
              privateToMeFolderId: null
            })), [_v2]),
            _v19 = (0, _v10.useCallback)(_v0 => _v5(_v0), []),
            _v20 = (0, _v10.useCallback)(_v0 => _v7(_v0), []),
            _v21 = (0, _v10.useCallback)(_v0 => _v9(_v0 => ({
              ..._v0,
              ..._v0
            })), []),
            _v22 = _v17?.permissionLevel ?? null,
            _v23 = (0, _v10.useMemo)(() => {
              var _v0;
              return _v0 = _v15?.preferences?.videos, _v22 === _v96.TeamUserPermissionLevel.Uploader ? _v97 : {
                ..._v0?.privacy,
                password: _v0?.password,
                embedDomains: _v0?.privacy?.clipEmbedAllowedDomains?.map(_v0 => ({
                  domain: _v0,
                  allowHd: !1,
                  uri: _v0
                }))
              };
            }, [_v15, _v22]),
            _v24 = _v22 === _v96.TeamUserPermissionLevel.Uploader ? void 0 : _v15?.preferences?.videos?.rating;
          _v14 !== _v12 && (_v13(_v14), _v9({}), _v11(void 0), _v7(null));
          let _v25 = (0, _v10.useMemo)(() => ({
              ..._v23,
              ..._v8
            }), [_v23, _v8]),
            _v26 = _v10 ?? _v24,
            {
              capabilities: _v27,
              loading: _v28
            } = (0, _v90.useCapability)([..._v98], _v14),
            {
              isDisabled: _v29
            } = (0, _v94.useGetEditEmbedPrivacyDisabled)(),
            _v30 = _v1.length > 0 ? _v1.reduce((_v0, _v1) => _v0 + _v1.file.size, 0) : void 0,
            _v31 = _v6?.uri != null ? (0, _v91.getProjectId)({
              uri: _v6.uri
            }) ?? void 0 : void 0,
            _v32 = (0, _v10.useMemo)(() => ((_v0, _v1, _v2 = !0) => {
              let _v3 = _v0.embedDomains?.map(_v0 => _v0.domain) ?? [];
              return {
                password: _v0.password || void 0,
                content_rating: _v1,
                privacy: {
                  view: _v0.view,
                  embed: _v2 ? _v0.embed ?? "private" : void 0,
                  comments: _v0.comments,
                  add: _v0.add,
                  download: _v0.download
                },
                spatial: {},
                embed_domains: _v2 && "whitelist" === _v0.embed ? _v3.length <= 0 ? void 0 : _v3 : void 0
              };
            })(_v25, _v26, !_v29), [_v25, _v26, _v29]);
          return {
            teams: _v18,
            selectedTeamId: _v14,
            selectTeam: _v19,
            selectedFolder: _v6,
            selectFolder: _v20,
            privacy: _v25,
            setPrivacy: _v21,
            contentRating: _v26,
            setContentRating: _v11,
            capabilities: _v27,
            capabilitiesLoading: _v28,
            permissionLevel: _v22,
            hasRestrictedPrivacyOptions: _v16?.restrictedPrivacyOptions ?? !1,
            uploadingFileSize: _v30,
            isLoadingTeams: _v3,
            targetUserId: _v14 ?? void 0,
            folderId: _v31,
            clipProperties: _v32
          };
        })(),
        {
          isLoggedIn: _v5,
          label: _v6,
          action: _v7,
          error: _v8,
          login: _v9,
          runUpload: _v10
        } = ((_v0, _v1) => {
          let _v2,
            _v3 = (0, _v15.useViewer)(),
            {
              upload: _v4
            } = (0, _v11.useUploader)(),
            {
              clear: _v5
            } = (0, _v88.useStagedFiles)(),
            _v6 = (_v3?.user ?? null) !== null,
            _v7 = (_v2 = _v3?.user?.uploadQuota?.space, (0, _v10.useMemo)(() => ((_v0, _v1) => {
              if (0 === _v0.length || !_v1) return {
                ok: !0
              };
              let _v2 = "video_count" === _v1.unit,
                _v3 = _v2 ? _v0.length : _v0.reduce((_v0, {
                  file: _v1
                }) => _v0 + Math.max("number" != typeof _v1.size || Number.isNaN(_v1.size) ? 0 : _v1.size, 0), 0),
                _v4 = _v3 <= Math.max(_v1.free, 0),
                _v5 = _v1.used + _v3 <= _v1.max;
              return _v4 && _v5 ? {
                ok: !0
              } : {
                ok: !1,
                error: _v2 ? (0, _v7.translate)({
                  singular: "This upload exceeds your video limit. Remove some files and try again.",
                  dictionary: {
                    es: {
                      singular: "Esta subida excede tu límite de vídeos. Elimina algunos archivos e inténtalo de nuevo."
                    },
                    "de-DE": {
                      singular: "Dieser Upload überschreitet Ihr Videolimit. Entfernen Sie einige Dateien und versuchen Sie es erneut."
                    },
                    "fr-FR": {
                      singular: "Ce téléversement dépasse votre limite de vidéos. Supprimez quelques fichiers et réessayez."
                    },
                    "ja-JP": {
                      singular: "このアップロードは動画の上限を超えています。ファイルを削除してから再試行してください。"
                    },
                    "ko-KR": {
                      singular: "이 업로드는 비디오 한도를 초과했습니다. 일부 파일을 제거한 후 다시 시도하세요."
                    },
                    "pt-BR": {
                      singular: "Este envio excede seu limite de vídeos. Remova alguns arquivos e tente novamente."
                    },
                    "zh-CN": {
                      singular: "此次上传超出您的视频限制。请删除一些文件后重试。"
                    }
                  }
                }) : (0, _v7.translate)({
                  singular: "You don't have enough free space for this upload. Remove some files and try again.",
                  dictionary: {
                    es: {
                      singular: "No tienes suficiente espacio libre para esta subida. Elimina algunos archivos e inténtalo de nuevo."
                    },
                    "de-DE": {
                      singular: "Sie haben nicht genügend freien Speicherplatz für diesen Upload. Entfernen Sie einige Dateien und versuchen Sie es erneut."
                    },
                    "fr-FR": {
                      singular: "Vous n’avez pas assez d’espace libre pour ce téléversement. Supprimez quelques fichiers et réessayez."
                    },
                    "ja-JP": {
                      singular: "このアップロードに十分な空き容量がありません。ファイルを削除してから再試行してください。"
                    },
                    "ko-KR": {
                      singular: "이 업로드를 위한 여유 공간이 충분하지 않습니다. 일부 파일을 제거한 후 다시 시도하세요."
                    },
                    "pt-BR": {
                      singular: "Você não tem espaço livre suficiente para este envio. Remova alguns arquivos e tente novamente."
                    },
                    "zh-CN": {
                      singular: "您没有足够的可用空间来完成此上传。请删除一些文件后重试。"
                    }
                  }
                })
              };
            })(_v0, _v2), [_v0, _v2])),
            [_v8, _v9] = (0, _v10.useState)(null),
            [_v10, _v11] = (0, _v10.useState)(_v0);
          _v0 !== _v10 && (_v11(_v0), _v9(null));
          let _v12 = 0 === _v0.length ? "selectFiles" : _v6 ? "upload" : "login",
            _v13 = (0, _v10.useCallback)(() => (0, _v89.openSatelliteAuthTab)("upload-poc", "login"), []),
            _v14 = (0, _v10.useCallback)(() => {
              _v7.ok ? (_v4(_v0.map(_v0 => _v0.file), {
                targetUserId: _v1.targetUserId,
                folderId: _v1.folderId
              }, _v1.clipProperties), _v5()) : _v9(_v7.error ?? null);
            }, [_v7, _v0, _v4, _v5, _v1.targetUserId, _v1.folderId, _v1.clipProperties]);
          return {
            isLoggedIn: _v6,
            label: "selectFiles" === _v12 ? (0, _v7.translate)({
              singular: "Select files",
              dictionary: {
                es: {
                  singular: "Seleccionar archivos"
                },
                "de-DE": {
                  singular: "Dateien auswählen"
                },
                "fr-FR": {
                  singular: "Sélectionnez des fichiers"
                },
                "ja-JP": {
                  singular: "ファイルを選択"
                },
                "ko-KR": {
                  singular: "파일 선택하기"
                },
                "pt-BR": {
                  singular: "Selecionar arquivos"
                },
                "zh-CN": {
                  singular: "选择文件"
                }
              }
            }) : "login" === _v12 ? (0, _v7.translate)({
              singular: "Log in to upload",
              dictionary: {
                es: {
                  singular: "Inicia sesión para subir"
                },
                "de-DE": {
                  singular: "Melden Sie sich an, um hochzuladen"
                },
                "fr-FR": {
                  singular: "Connectez‑vous pour téléverser"
                },
                "ja-JP": {
                  singular: "アップロードするにはログインしてください"
                },
                "ko-KR": {
                  singular: "업로드하려면 로그인하세요"
                },
                "pt-BR": {
                  singular: "Faça login para enviar"
                },
                "zh-CN": {
                  singular: "登录以上传"
                }
              }
            }) : (0, _v7.translate)({
              singular: "Upload {COUNT} file",
              plural: "Upload {COUNT} files",
              count: _v0.length,
              replacements: {
                COUNT: _v0.length
              },
              dictionary: {
                es: {
                  singular: "Subir {COUNT} archivo",
                  plural: "Subir {COUNT} archivos"
                },
                "de-DE": {
                  singular: "{COUNT} Datei hochladen",
                  plural: "{COUNT} Dateien hochladen"
                },
                "fr-FR": {
                  singular: "Téléversez {COUNT} fichier",
                  plural: "Téléversez {COUNT} fichiers"
                },
                "ja-JP": {
                  singular: "ファイルを{COUNT}件アップロード",
                  plural: "ファイルを{COUNT}件アップロード"
                },
                "ko-KR": {
                  singular: "{COUNT}개의 파일 업로드",
                  plural: "{COUNT}개의 파일 업로드"
                },
                "pt-BR": {
                  singular: "Enviar {COUNT} arquivo",
                  plural: "Enviar {COUNT} arquivos"
                },
                "zh-CN": {
                  singular: "上传 {COUNT} 个文件",
                  plural: "上传 {COUNT} 个文件"
                }
              }
            }),
            action: _v12,
            error: _v8,
            login: _v13,
            runUpload: _v14
          };
        })(_v0, _v4),
        {
          uploads: _v11,
          uploaderSummary: _v12,
          clearAll: _v13
        } = (0, _v11.useUploader)(),
        _v14 = (0, _v15.useViewer)(),
        [_v15, _v16] = (0, _v10.useState)(!1),
        _v17 = !(0, _v12.isUserPlanHigherOrEqualThan)(_v14?.user?.account, _v13.PLANS.STANDARD),
        _v18 = _v14?.user?.capabilities?.hasFreeTrialEligibility ?? !1;
      !function () {
        let _v0 = (0, _v99.useRouter)(),
          {
            uploaderSummary: _v1
          } = (0, _v11.useUploader)(),
          _v2 = _v1.inProgressCount > 0;
        (0, _v10.useEffect)(() => {
          if (!_v2) return;
          let _v0 = _v0.asPath,
            _v1 = _v0 => {
              _v0.preventDefault(), _v0.returnValue = "";
            },
            _v2 = _v0 => {
              if (_v0 !== _v0 && !window.confirm((0, _v7.translate)({
                singular: "An upload is in progress. If you leave, you lose sight of its progress.",
                dictionary: {
                  es: {
                    singular: "Hay una subida en curso. Si te vas, perderás el seguimiento de su progreso."
                  },
                  "de-DE": {
                    singular: "Ein Upload läuft. Wenn Sie die Seite verlassen, verlieren Sie den Fortschritt aus den Augen."
                  },
                  "fr-FR": {
                    singular: "Un téléversement est en cours. Si vous quittez, vous ne pourrez plus en suivre la progression."
                  },
                  "ja-JP": {
                    singular: "アップロードが進行中です。ページを離れると進行状況がわからなくなります。"
                  },
                  "ko-KR": {
                    singular: "업로드가 진행 중입니다. 이 페이지를 떠나면 진행 상황을 확인할 수 없습니다."
                  },
                  "pt-BR": {
                    singular: "Um envio está em andamento. Se você sair, perderá o acompanhamento do progresso."
                  },
                  "zh-CN": {
                    singular: "正在上传中。如果您离开，将无法看到上传进度。"
                  }
                }
              }))) throw _v0.events.emit("routeChangeError", "", "", {
                shallow: !1
              }), _v100;
            };
          return window.addEventListener("beforeunload", _v1), window.addEventListener("unhandledrejection", _v101), _v0.events.on("routeChangeStart", _v2), () => {
            window.removeEventListener("beforeunload", _v1), window.removeEventListener("unhandledrejection", _v101), _v0.events.off("routeChangeStart", _v2);
          };
        }, [_v2, _v0]);
      }();
      let _v19 = (0, _v10.useCallback)(() => {
          if ("login" === _v7) return void _v9();
          if ("upload" === _v7) {
            if (_v17) return void _v16(!0);
            _v10();
          }
        }, [_v7, _v9, _v10, _v17]),
        _v20 = (0, _v10.useCallback)(_v0 => {
          _v16(!1), "manual" === _v0 && _v10();
        }, [_v10]),
        _v21 = (0, _v10.useCallback)(() => {
          _v13(), _v2();
        }, [_v13, _v2]),
        _v22 = (0, _v10.useCallback)(() => {
          window.location.assign((({
            folderId: _v0,
            teamId: _v1
          }) => {
            let _v2 = null != _v1 ? `?switch_team=${_v1}` : "";
            return null != _v0 ? `/manage/folders/${_v0}${_v2}` : `/manage/videos${_v2}`;
          })({
            folderId: _v4.folderId,
            teamId: _v4.targetUserId
          }));
        }, [_v4.folderId, _v4.targetUserId]);
      return (0, _v1.jsxs)(_v105, {
        children: [(0, _v1.jsx)(_v87, {
          files: _v0,
          onRemoveFile: _v1,
          label: _v6,
          action: _v7,
          onPrimaryAction: _v19,
          error: _v8,
          dropzone: _v3,
          uploads: _v11,
          uploaderSummary: _v12,
          knobs: _v5 ? _v4 : null,
          onRestart: _v21,
          onGoToFolder: _v22
        }), (0, _v1.jsx)(_v14.PlansComparisonPaywallModal, {
          isOpen: _v15,
          tier: "standard",
          isFreeTrialEligible: _v18,
          checkoutTarget: "_blank",
          postCheckoutUrl: "/satellite/auth-complete?source=upload-poc",
          paywallTracking: _v106,
          onDismiss: _v20
        })]
      });
    };
  (0, _v2.withPageSetup)(() => ({
    props: {}
  }), {
    omitEsi: !0,
    inlineViewer: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, () => (0, _v1.jsxs)(_v1.Fragment, {
    children: [(0, _v1.jsx)(_v9, {
      title: (0, _v3.translate)({
        singular: "Upload Videos to Vimeo",
        dictionary: {
          es: {
            singular: "Sube vídeos a Vimeo"
          },
          "de-DE": {
            singular: "Videos auf Vimeo hochladen"
          },
          "fr-FR": {
            singular: "Importer des vidéos sur Vimeo"
          },
          "ja-JP": {
            singular: "Vimeoに動画をアップロード"
          },
          "ko-KR": {
            singular: "Vimeo에 동영상 업로드"
          },
          "pt-BR": {
            singular: "Enviar vídeos para o Vimeo"
          },
          "zh-CN": {
            singular: "将视频上传到 Vimeo"
          }
        }
      }),
      description: (0, _v3.translate)({
        singular: "Upload, share, and embed videos for free online with Vimeo. Host, edit, compress, and download your videos securely with our all-in-one video platform.",
        dictionary: {
          es: {
            singular: "Sube, comparte e incrusta vídeos en línea gratis con Vimeo. Aloja, edita, comprime y descarga tus vídeos de forma segura con nuestra plataforma de vídeo todo en uno."
          },
          "de-DE": {
            singular: "Videos kostenlos online mit Vimeo hochladen, teilen und einbetten. Ihre Videos sicher hosten, bearbeiten, komprimieren und herunterladen. Alles mit unserer All-in-One-Videoplattform."
          },
          "fr-FR": {
            singular: "Importer, partager et intégrer des vidéos gratuitement en ligne avec Vimeo. Héberger, monter, compresser et télécharger vos vidéos en toute sécurité grâce à notre plateforme vidéo tout-en-un."
          },
          "ja-JP": {
            singular: "Vimeoを使って、動画を無料でオンラインにアップロード、共有、埋め込みできます。当社のオールインワン動画プラットフォームで、動画を安全にホスト、編集、圧縮、ダウンロードできます。"
          },
          "ko-KR": {
            singular: "Vimeo에서 동영상을 무료로 업로드, 공유 및 임베드하세요. 올인원 비디오 플랫폼으로 귀하의 동영상을 안전하게 호스팅, 편집, 압축 및 다운로드하세요."
          },
          "pt-BR": {
            singular: "Envie, compartilhe e incorpore vídeos gratuitamente online com o Vimeo. Hospede, edite, comprima e baixe seus vídeos com segurança em nossa plataforma de vídeo tudo-em-um."
          },
          "zh-CN": {
            singular: "通过 Vimeo 在线免费上传、分享和嵌入视频。使用我们的一体化视频平台，安全地托管、编辑、压缩并下载您的视频。"
          }
        }
      }),
      publicBasePath: "/video-uploader"
    }), (0, _v1.jsx)(_v107, {})]
  })], 0);
}