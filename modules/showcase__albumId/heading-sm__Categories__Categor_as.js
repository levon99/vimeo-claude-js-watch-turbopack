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
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0);
  function _v12({
    categories: _v0,
    onClick: _v1,
    isCategoriesLinkEnabled: _v2 = !1
  }) {
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v2.Text, {
        as: "h2",
        variant: "heading-sm",
        children: (0, _v11.translate)({
          singular: "Categories",
          dictionary: {
            es: {
              singular: "Categorías"
            },
            "de-DE": {
              singular: "Kategorien"
            },
            "fr-FR": {
              singular: "Catégories"
            },
            "ja-JP": {
              singular: "カテゴリー"
            },
            "ko-KR": {
              singular: "카테고리"
            },
            "pt-BR": {
              singular: "Categorias"
            },
            "zh-CN": {
              singular: "类别"
            }
          }
        })
      }), (0, _v1.jsx)(_v9.Box, {
        as: "nav",
        "aria-label": "Video Categories",
        "data-testid": "categories-nav",
        children: (0, _v1.jsx)(_v5.HStack, {
          as: "ul",
          wrap: "wrap",
          spacing: 200,
          children: _v0.map(_v0 => (0, _v1.jsx)("li", {
            children: _v2 ? (0, _v1.jsx)("a", {
              href: _v0.link,
              onClick: _v1,
              "aria-label": "Link to category",
              children: (0, _v1.jsx)(_v10.Tag, {
                size: "sm",
                fontSize: "text-sm",
                children: _v0.name
              })
            }) : (0, _v1.jsx)(_v10.Tag, {
              cursor: "default",
              size: "sm",
              fontSize: "text-sm",
              children: _v0.name
            })
          }, _v0.name))
        })
      })]
    });
  }
  function _v13({
    creativeCommonsDescriptor: _v0
  }) {
    return (0, _v1.jsxs)(_v5.HStack, {
      children: [(0, _v1.jsxs)("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [(0, _v1.jsx)("path", {
          fill: "currentColor",
          d: "M8.4841 9.234C8.4601 9.072 8.4061 8.925 8.3221 8.793C8.2381 8.655 8.1331 8.535 8.0071 8.433C7.8811 8.331 7.7371 8.253 7.5751 8.199C7.4191 8.139 7.2541 8.109 7.0801 8.109C6.7621 8.109 6.4921 8.172 6.2701 8.298C6.0481 8.418 5.8681 8.583 5.7301 8.793C5.5921 8.997 5.4901 9.231 5.4241 9.495C5.3641 9.759 5.3341 10.032 5.3341 10.314C5.3341 10.584 5.3641 10.848 5.4241 11.106C5.4901 11.358 5.5921 11.586 5.7301 11.79C5.8681 11.994 6.0481 12.159 6.2701 12.285C6.4921 12.405 6.7621 12.465 7.0801 12.465C7.5121 12.465 7.8481 12.333 8.0881 12.069C8.3341 11.805 8.4841 11.457 8.5381 11.025H9.9061C9.8701 11.427 9.7771 11.79 9.6271 12.114C9.4771 12.438 9.2791 12.714 9.0331 12.942C8.7871 13.17 8.4991 13.344 8.1691 13.464C7.8391 13.584 7.4761 13.644 7.0801 13.644C6.5881 13.644 6.1441 13.56 5.7481 13.392C5.3581 13.218 5.0281 12.981 4.7581 12.681C4.4881 12.381 4.2811 12.03 4.1371 11.628C3.9931 11.22 3.9211 10.782 3.9211 10.314C3.9211 9.834 3.9931 9.39 4.1371 8.982C4.2811 8.568 4.4881 8.208 4.7581 7.902C5.0281 7.596 5.3581 7.356 5.7481 7.182C6.1441 7.008 6.5881 6.921 7.0801 6.921C7.4341 6.921 7.7671 6.972 8.0791 7.074C8.3971 7.176 8.6791 7.326 8.9251 7.524C9.1771 7.716 9.3841 7.956 9.5461 8.244C9.7081 8.532 9.8101 8.862 9.8521 9.234H8.4841ZM14.655 9.234C14.631 9.072 14.577 8.925 14.493 8.793C14.409 8.655 14.304 8.535 14.178 8.433C14.052 8.331 13.908 8.253 13.746 8.199C13.59 8.139 13.425 8.109 13.251 8.109C12.933 8.109 12.663 8.172 12.441 8.298C12.219 8.418 12.039 8.583 11.901 8.793C11.763 8.997 11.661 9.231 11.595 9.495C11.535 9.759 11.505 10.032 11.505 10.314C11.505 10.584 11.535 10.848 11.595 11.106C11.661 11.358 11.763 11.586 11.901 11.79C12.039 11.994 12.219 12.159 12.441 12.285C12.663 12.405 12.933 12.465 13.251 12.465C13.683 12.465 14.019 12.333 14.259 12.069C14.505 11.805 14.655 11.457 14.709 11.025H16.077C16.041 11.427 15.948 11.79 15.798 12.114C15.648 12.438 15.45 12.714 15.204 12.942C14.958 13.17 14.67 13.344 14.34 13.464C14.01 13.584 13.647 13.644 13.251 13.644C12.759 13.644 12.315 13.56 11.919 13.392C11.529 13.218 11.199 12.981 10.929 12.681C10.659 12.381 10.452 12.03 10.308 11.628C10.164 11.22 10.092 10.782 10.092 10.314C10.092 9.834 10.164 9.39 10.308 8.982C10.452 8.568 10.659 8.208 10.929 7.902C11.199 7.596 11.529 7.356 11.919 7.182C12.315 7.008 12.759 6.921 13.251 6.921C13.605 6.921 13.938 6.972 14.25 7.074C14.568 7.176 14.85 7.326 15.096 7.524C15.348 7.716 15.555 7.956 15.717 8.244C15.879 8.532 15.981 8.862 16.023 9.234H14.655Z"
        }), (0, _v1.jsx)("rect", {
          stroke: "currentColor",
          x: "0.5",
          y: "0.5",
          width: "19",
          height: "19",
          rx: "9.5"
        })]
      }), (0, _v1.jsx)("a", {
        href: "https://help.vimeo.com/hc/en-us/articles/12427652203153-What-do-the-different-Creative-Commons-licenses-mean",
        rel: "noreferrer",
        target: "_blank",
        children: (0, _v1.jsx)(_v2.Text, {
          variant: "body-md",
          children: (() => {
            switch (_v0) {
              case "by":
                return `${(0, _v11.translate)({
                  singular: "License",
                  dictionary: {
                    es: {
                      singular: "Licencia"
                    },
                    "de-DE": {
                      singular: "Lizenz"
                    },
                    "fr-FR": {
                      singular: "Licence"
                    },
                    "ja-JP": {
                      singular: "ライセンス"
                    },
                    "ko-KR": {
                      singular: "라이센스"
                    },
                    "pt-BR": {
                      singular: "Licença"
                    },
                    "zh-CN": {
                      singular: "许可"
                    }
                  }
                })}: ${(0, _v11.translate)({
                  singular: "Attribution",
                  dictionary: {
                    es: {
                      singular: "Atribución"
                    },
                    "de-DE": {
                      singular: "Namensnennung"
                    },
                    "ja-JP": {
                      singular: "表示"
                    },
                    "ko-KR": {
                      singular: "저작자표시"
                    },
                    "pt-BR": {
                      singular: "Atribuição"
                    },
                    "zh-CN": {
                      singular: "署名"
                    }
                  }
                })}`;
              case "by-sa":
                return `${(0, _v11.translate)({
                  singular: "License",
                  dictionary: {
                    es: {
                      singular: "Licencia"
                    },
                    "de-DE": {
                      singular: "Lizenz"
                    },
                    "fr-FR": {
                      singular: "Licence"
                    },
                    "ja-JP": {
                      singular: "ライセンス"
                    },
                    "ko-KR": {
                      singular: "라이센스"
                    },
                    "pt-BR": {
                      singular: "Licença"
                    },
                    "zh-CN": {
                      singular: "许可"
                    }
                  }
                })}: ${(0, _v11.translate)({
                  singular: "Attribution Share Alike",
                  dictionary: {
                    es: {
                      singular: "Atribución - Compartir igual"
                    },
                    "de-DE": {
                      singular: "Namensnennung, Weitergabe unter gleichen Bedingungen (ShareAlike)"
                    },
                    "fr-FR": {
                      singular: "Attribution - Partage dans les mêmes conditions"
                    },
                    "ja-JP": {
                      singular: "表示 ― 継承"
                    },
                    "ko-KR": {
                      singular: "저작자표시 동일조건변경허락"
                    },
                    "pt-BR": {
                      singular: "Atribuição - Compartilhar Igualmente"
                    },
                    "zh-CN": {
                      singular: "署名 相同方式共享"
                    }
                  }
                })}`;
              case "by-nd":
                return `${(0, _v11.translate)({
                  singular: "License",
                  dictionary: {
                    es: {
                      singular: "Licencia"
                    },
                    "de-DE": {
                      singular: "Lizenz"
                    },
                    "fr-FR": {
                      singular: "Licence"
                    },
                    "ja-JP": {
                      singular: "ライセンス"
                    },
                    "ko-KR": {
                      singular: "라이센스"
                    },
                    "pt-BR": {
                      singular: "Licença"
                    },
                    "zh-CN": {
                      singular: "许可"
                    }
                  }
                })}: ${(0, _v11.translate)({
                  singular: "Attribution No Derivatives",
                  dictionary: {
                    es: {
                      singular: "Atribución - Sin obras derivadas"
                    },
                    "de-DE": {
                      singular: "Namensnennung, keine Bearbeitungen"
                    },
                    "fr-FR": {
                      singular: "Paternité - Pas de modification"
                    },
                    "ja-JP": {
                      singular: "表示 ― 改変禁止"
                    },
                    "ko-KR": {
                      singular: "저작자표시 변경금지"
                    },
                    "pt-BR": {
                      singular: "Atribuição - Sem Derivações"
                    },
                    "zh-CN": {
                      singular: "署名-禁止演绎"
                    }
                  }
                })}`;
              case "by-nc":
                return `${(0, _v11.translate)({
                  singular: "License",
                  dictionary: {
                    es: {
                      singular: "Licencia"
                    },
                    "de-DE": {
                      singular: "Lizenz"
                    },
                    "fr-FR": {
                      singular: "Licence"
                    },
                    "ja-JP": {
                      singular: "ライセンス"
                    },
                    "ko-KR": {
                      singular: "라이센스"
                    },
                    "pt-BR": {
                      singular: "Licença"
                    },
                    "zh-CN": {
                      singular: "许可"
                    }
                  }
                })}: ${(0, _v11.translate)({
                  singular: "Attribution Non-Commercial",
                  dictionary: {
                    es: {
                      singular: "Atribución - No comercial"
                    },
                    "de-DE": {
                      singular: "Namensnennung, nicht kommerziell"
                    },
                    "fr-FR": {
                      singular: "Attribution - Non-commercial"
                    },
                    "ja-JP": {
                      singular: "表示 ― 非営利"
                    },
                    "ko-KR": {
                      singular: "저작자표시 비영리"
                    },
                    "pt-BR": {
                      singular: "Atribuição - Não Comercial"
                    },
                    "zh-CN": {
                      singular: "署名-非商业性使用"
                    }
                  }
                })}`;
              case "by-nc-sa":
                return `${(0, _v11.translate)({
                  singular: "License",
                  dictionary: {
                    es: {
                      singular: "Licencia"
                    },
                    "de-DE": {
                      singular: "Lizenz"
                    },
                    "fr-FR": {
                      singular: "Licence"
                    },
                    "ja-JP": {
                      singular: "ライセンス"
                    },
                    "ko-KR": {
                      singular: "라이센스"
                    },
                    "pt-BR": {
                      singular: "Licença"
                    },
                    "zh-CN": {
                      singular: "许可"
                    }
                  }
                })}: ${(0, _v11.translate)({
                  singular: "Attribution Non-Commercial Share Alike",
                  dictionary: {
                    es: {
                      singular: "Atribución - No comercial - Compartir igual"
                    },
                    "de-DE": {
                      singular: "Namensnennung, nicht kommerziell, Weitergabe unter gleichen Bedingungen"
                    },
                    "fr-FR": {
                      singular: "Attribution - Pas d'utilisation commerciale - Partage dans les mêmes conditions"
                    },
                    "ja-JP": {
                      singular: "表示 ― 非営利 ― 継承"
                    },
                    "ko-KR": {
                      singular: "저작자표시 비영리 동일조건변경허락"
                    },
                    "pt-BR": {
                      singular: "Atribuição - Não Comercial - Compartilhar Igualmente "
                    },
                    "zh-CN": {
                      singular: "署名-非商业性使用-相同方式共享"
                    }
                  }
                })}`;
              case "by-nc-nd":
                return `${(0, _v11.translate)({
                  singular: "License",
                  dictionary: {
                    es: {
                      singular: "Licencia"
                    },
                    "de-DE": {
                      singular: "Lizenz"
                    },
                    "fr-FR": {
                      singular: "Licence"
                    },
                    "ja-JP": {
                      singular: "ライセンス"
                    },
                    "ko-KR": {
                      singular: "라이센스"
                    },
                    "pt-BR": {
                      singular: "Licença"
                    },
                    "zh-CN": {
                      singular: "许可"
                    }
                  }
                })}: ${(0, _v11.translate)({
                  singular: "Attribution Non-Commercial No Derivatives",
                  dictionary: {
                    es: {
                      singular: "Atribución - No comercial - Sin obras derivadas"
                    },
                    "de-DE": {
                      singular: "Namensnennung, nicht kommerziell, keine Bearbeitungen"
                    },
                    "fr-FR": {
                      singular: "Attribution - À des fins non commerciales - Pas d’œuvres dérivées"
                    },
                    "ja-JP": {
                      singular: "表示 ― 非営利 ― 改変禁止"
                    },
                    "ko-KR": {
                      singular: "저작자표시 비영리 변경금지"
                    },
                    "pt-BR": {
                      singular: "Atribuição - Não Comercial - Sem Derivações"
                    },
                    "zh-CN": {
                      singular: "署名-非商业性使用-禁止演绎"
                    }
                  }
                })}`;
              case "cc0":
                return `${(0, _v11.translate)({
                  singular: "License",
                  dictionary: {
                    es: {
                      singular: "Licencia"
                    },
                    "de-DE": {
                      singular: "Lizenz"
                    },
                    "fr-FR": {
                      singular: "Licence"
                    },
                    "ja-JP": {
                      singular: "ライセンス"
                    },
                    "ko-KR": {
                      singular: "라이센스"
                    },
                    "pt-BR": {
                      singular: "Licença"
                    },
                    "zh-CN": {
                      singular: "许可"
                    }
                  }
                })}: ${(0, _v11.translate)({
                  singular: "Public Domain Dedication",
                  dictionary: {
                    es: {
                      singular: "Dedicación de dominio público"
                    },
                    "de-DE": {
                      singular: "Als gemeinfrei eingestuft"
                    },
                    "fr-FR": {
                      singular: "Transfert dans le Domaine Public"
                    },
                    "ja-JP": {
                      singular: "パブリック ドメイン デディケーション"
                    },
                    "ko-KR": {
                      singular: "공유 저작물 기부"
                    },
                    "pt-BR": {
                      singular: "Dedicação ao Domínio Público"
                    },
                    "zh-CN": {
                      singular: "公共领域贡献宣言"
                    }
                  }
                })}`;
              default:
                return "";
            }
          })()
        })
      })]
    });
  }
  var _v14 = _v0.i(0);
  let _v15 = _v0 => {
    if (_v0.isDisplayOnly) return (0, _v1.jsx)(_v1.Fragment, {
      children: _v0.children
    });
    let {
      children: _v1,
      onClick: _v2,
      isDisplayOnly: _v3,
      ..._v4
    } = _v0;
    return (0, _v1.jsx)("a", {
      "data-nav-type": "n",
      onClick: _v2,
      ..._v4,
      children: _v1
    });
  };
  function _v16({
    credits: _v0,
    onClick: _v1
  }) {
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v2.Text, {
        as: "h2",
        variant: "heading-sm",
        children: (0, _v11.translate)({
          singular: "Credits",
          dictionary: {
            es: {
              singular: "Créditos"
            },
            "de-DE": {
              singular: "Namen der Mitwirkenden"
            },
            "fr-FR": {
              singular: "Crédits"
            },
            "ja-JP": {
              singular: "クレジット"
            },
            "ko-KR": {
              singular: "크레딧"
            },
            "pt-BR": {
              singular: "Créditos"
            },
            "zh-CN": {
              singular: "致谢"
            }
          }
        })
      }), (0, _v1.jsx)(_v9.Box, {
        as: "nav",
        "aria-label": "Video Credits",
        "data-testid": "credits-nav",
        children: (0, _v1.jsx)(_v5.HStack, {
          as: "ul",
          wrap: "wrap",
          spacing: 200,
          maxW: (0, _v6.rem)(0),
          children: _v0.map(_v0 => (0, _v1.jsx)(_v9.Box, {
            as: "li",
            flexBasis: {
              base: "100%",
              md: (0, _v6.rem)(240)
            },
            children: (0, _v1.jsx)(_v15, {
              isDisplayOnly: !_v0.userLink,
              href: _v0.userLink,
              onClick: _v1,
              children: (0, _v1.jsxs)(_v5.HStack, {
                children: [(0, _v1.jsx)(_v9.Box, {
                  minW: "sm",
                  flexShrink: 0,
                  children: (0, _v1.jsx)(_v14.Avatar, {
                    src: _v0.avaSrc,
                    srcSet: _v0.avaSrcSet,
                    size: "sm",
                    alt: _v0.name,
                    nameProps: {
                      name: _v0.name
                    }
                  })
                }), (0, _v1.jsxs)(_v4.Flex, {
                  direction: "column",
                  justifyContent: "center",
                  children: [(0, _v1.jsx)(_v2.Text, {
                    title: _v0.name,
                    variant: "heading-xs",
                    wordBreak: "break-word",
                    noOfLines: 2,
                    children: _v0.name
                  }), _v0.role ? (0, _v1.jsx)(_v2.Text, {
                    title: _v0.role,
                    variant: "body-md",
                    color: "text-secondary",
                    wordBreak: "break-all",
                    noOfLines: 1,
                    "data-testid": "credit-role",
                    children: _v0.role
                  }) : null]
                })]
              })
            })
          }, _v0.uri))
        })
      })]
    });
  }
  var _v17 = _v0.i(0);
  let _v18 = ({
    tags: _v0,
    showLinks: _v1
  }) => (0, _v1.jsx)(_v5.HStack, {
    as: "p",
    flexWrap: "wrap",
    fontSize: "text-sm",
    children: _v1 ? _v0.map(_v0 => _v0?.name ? (0, _v1.jsxs)(_v7.Link, {
      variant: "secondary",
      href: `/tag:${_v0.name}`,
      children: ["#", _v0.name]
    }, _v0.canonical) : null) : _v0.map(_v0 => _v0?.name ? (0, _v1.jsxs)(_v2.Text, {
      variant: "body-xl",
      as: "span",
      color: "text-secondary",
      fontSize: "text-sm",
      children: ["#", _v0.name]
    }, _v0.canonical) : null)
  });
  var _v19 = _v0.i(0);
  function _v20({
    uploader: _v0
  }) {
    let [_v1, _v2] = (0, _v19.getAvatarImages)(_v0.pictures?.sizes);
    return (0, _v1.jsxs)(_v5.HStack, {
      align: "center",
      borderTop: "1px solid",
      borderColor: "stroke",
      pt: 200,
      spacing: 8,
      children: [(0, _v1.jsx)(_v2.Text, {
        as: "span",
        variant: "body-md",
        color: "text-secondary",
        children: (0, _v11.translate)({
          singular: "Uploaded by",
          dictionary: {
            es: {
              singular: "Subido por"
            },
            "de-DE": {
              singular: "Hochgeladen von"
            },
            "fr-FR": {
              singular: "Mis en ligne par"
            },
            "ja-JP": {
              singular: "がアップロードしました"
            },
            "ko-KR": {
              singular: "업로드한 창작가:"
            },
            "pt-BR": {
              singular: "Carregado por"
            },
            "zh-CN": {
              singular: "上传者"
            }
          }
        })
      }), (0, _v1.jsx)("a", {
        href: _v0.link,
        "aria-label": "Link to user profile",
        children: (0, _v1.jsx)(_v14.Avatar, {
          src: _v1,
          srcSet: _v2,
          size: "xs",
          alt: _v0.name,
          nameProps: {
            name: _v0.name
          }
        })
      }), (0, _v1.jsx)(_v2.Text, {
        as: "a",
        href: _v0.link,
        variant: "body-md",
        color: "text-primary",
        fontWeight: "bold",
        children: _v0.name
      })]
    });
  }
  var _v21 = _v0.i(0);
  _v0.s(["VideoDetailsBase", 0, function ({
    language: _v0,
    title: _v1 = "Video title",
    createdTime: _v2,
    timeSinceCreatedString: _v3,
    viewsString: _v4,
    likesString: _v5,
    creativeCommonsDescriptor: _v6,
    description: _v7,
    credits: _v8,
    categories: _v9,
    tags: _v10,
    uploader: _v11,
    manageButton: _v12,
    aiContent: _v13,
    createdOnString: _v14,
    showTagLinks: _v15 = !1,
    is360Video: _v16,
    isAdvert: _v17,
    isCategoriesLinkEnabled: _v18 = !1,
    isDolbyVision: _v19,
    isHdr10: _v20,
    isHdr10Plus: _v21,
    isRatedMature: _v22,
    isStreaming: _v23,
    isLiveEvent: _v24,
    showCategories: _v25,
    showCreativeCommons: _v26,
    showCredits: _v27,
    showDateAdded: _v28,
    showDescription: _v29,
    showLike: _v30,
    showTags: _v31,
    showTitle: _v32,
    showUploadedBy: _v33,
    showViews: _v34,
    showManageButton: _v35,
    clipPageRework: _v36 = !1,
    children: _v37,
    titleAdornment: _v38,
    titleAdornmentPosition: _v39 = "left",
    titleFontFamily: _v40,
    titleFontWeight: _v41,
    titleLineHeight: _v42,
    titleSizeAdjust: _v43,
    onCreditedProfilesLinkClick: _v44,
    onCategoriesLinkClick: _v45,
    onMomentPlay: _v46,
    onLikesListClick: _v47
  }) {
    let _v48 = _v28 ? (0, _v1.jsx)(_v2.Text, {
        variant: "body-md",
        color: "text-secondary",
        mb: 50,
        children: _v14
      }) : null,
      _v49 = _v34 && _v4,
      _v50 = _v28 && _v2 && _v3,
      _v51 = (0, _v8.shouldShowInDevelopmentFeature)("likes_modal", !0) && _v5 && _v30;
    return (0, _v1.jsxs)(_v3.VStack, {
      align: "stretch",
      "data-testid": "vd-wrapper",
      p: {
        base: 200,
        md: 300
      },
      spacing: 200,
      overflow: "hidden",
      lang: _v0 || "",
      children: [_v32 ? (0, _v1.jsxs)(_v4.Flex, {
        justify: "space-between",
        gap: "200",
        mb: (0, _v6.rem)(-8),
        align: "center",
        children: [(0, _v1.jsxs)(_v5.HStack, {
          gap: "200",
          minW: "0",
          align: "center",
          children: ["left" === _v39 ? _v38 : null, (0, _v1.jsx)(_v2.Text, {
            as: "h1",
            variant: {
              base: "heading-md",
              md: "heading-lg",
              xl: "heading-xl"
            },
            minW: "0",
            style: {
              hyphens: "auto",
              fontFamily: _v40,
              fontWeight: _v41,
              lineHeight: _v42
            },
            children: _v43 && 1 !== _v43 ? (0, _v1.jsx)("span", {
              style: {
                fontSize: `${_v43}em`
              },
              children: _v1
            }) : _v1
          })]
        }), _v35 || "right" === _v39 && _v38 ? (0, _v1.jsxs)(_v5.HStack, {
          gap: "200",
          align: "center",
          flexShrink: 0,
          children: [_v35 ? _v12 : null, "right" === _v39 ? _v38 : null]
        }) : null]
      }) : null, (0, _v1.jsxs)(_v4.Flex, {
        gap: 100,
        flexWrap: "wrap",
        children: [!_v24 && (_v49 || _v50) ? (0, _v1.jsxs)(_v2.Text, {
          variant: "body-xl",
          fontSize: "text-sm",
          color: "text-secondary",
          children: [_v49 ? (0, _v1.jsx)("span", {
            "data-testid": "views",
            children: _v4
          }) : null, _v49 && _v50 && void 0 !== _v2 ? (0, _v1.jsx)(_v2.Text, {
            variant: "body-xl",
            as: "span",
            mx: 50,
            "aria-hidden": "true",
            children: "·"
          }) : null, _v50 ? (0, _v1.jsx)("time", {
            dateTime: _v2,
            children: _v3
          }) : null, _v50 && _v51 ? (0, _v1.jsx)(_v2.Text, {
            variant: "body-xl",
            as: "span",
            mx: 50,
            "aria-hidden": "true",
            children: "·"
          }) : null, _v51 ? (0, _v1.jsx)(_v7.Link, {
            href: "#",
            "data-testid": "likes-modal",
            fontSize: "text-sm",
            variant: "secondary",
            onClick: _v47,
            children: _v5
          }) : null]
        }) : null, (0, _v1.jsx)(_v5.HStack, {
          flexWrap: "wrap",
          gap: 50,
          children: (0, _v1.jsx)(_v21.VideoBadges, {
            isStreaming: _v23,
            isRatedMature: _v22,
            is360Video: _v16,
            isDolbyVision: _v19,
            isHdr10: _v20,
            isHdr10Plus: _v21,
            aiContent: _v13,
            isAdvert: _v17
          })
        })]
      }), _v37, _v29 && _v7 ? (0, _v1.jsx)(_v17.Description, {
        onMomentPlay: _v46,
        description: _v7,
        clipPageRework: _v36,
        children: _v48
      }) : _v48, _v31 && _v10?.length ? (0, _v1.jsx)(_v18, {
        tags: _v10,
        showLinks: _v15
      }) : null, _v27 && _v8?.length ? (0, _v1.jsx)(_v16, {
        credits: _v8,
        onClick: _v44
      }) : null, _v25 && _v9?.length ? (0, _v1.jsx)(_v12, {
        categories: _v9,
        onClick: _v45,
        isCategoriesLinkEnabled: _v18
      }) : null, _v26 && _v6 ? (0, _v1.jsx)(_v13, {
        creativeCommonsDescriptor: _v6
      }) : null, _v33 && _v11 ? (0, _v1.jsx)(_v20, {
        uploader: _v11
      }) : null]
    });
  }], 0);
}