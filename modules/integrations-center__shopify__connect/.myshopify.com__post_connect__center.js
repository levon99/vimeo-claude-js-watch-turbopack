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
    _v23 = _v0.i(0);
  let _v24 = /^[a-z,A-Z,0-9,\-,_]+\.myshopify\.com$/,
    _v25 = ".myshopify.com",
    _v26 = () => {
      let _v0 = (0, _v3.useRouter)(),
        {
          data: _v1
        } = (0, _v22.useFetchAppsData)(),
        _v2 = _v1?.ecommerce_apps?.shopify?.shops,
        [_v3, _v4] = (0, _v4.useState)(""),
        [_v5, _v6] = (0, _v4.useState)(""),
        [_v7, _v8] = (0, _v4.useState)(""),
        _v9 = (0, _v2.useSearchParams)().get("post_connect") || "";
      return (0, _v1.jsx)(_v1.Fragment, {
        children: (0, _v1.jsx)(_v11.Flex, {
          alignItems: "center",
          justifyContent: "center",
          height: "80vh",
          children: (0, _v1.jsxs)(_v9.Card, {
            padding: "3xl",
            width: (0, _v14.rem)(500),
            children: [(0, _v1.jsxs)(_v11.Flex, {
              alignItems: "center",
              justifyContent: "center",
              gap: "sm",
              children: [(0, _v1.jsx)(_v18.Shopify, {
                boxSize: "lg"
              }), (0, _v1.jsx)(_v10.Divider, {
                borderStyle: "dashed",
                borderColor: "stroke",
                borderBottomWidth: 3,
                width: "30%"
              }), (0, _v1.jsx)(_v19.Vimeo, {
                boxSize: "lg"
              })]
            }), (0, _v1.jsx)(_v8.Header, {
              size: "lg",
              textAlign: "center",
              mt: "lg",
              children: (0, _v20.translate)({
                singular: "Connect to Shopify",
                dictionary: {
                  es: {
                    singular: "Conéctate a Shopify"
                  },
                  "de-DE": {
                    singular: "Mit Shopify verbinden"
                  },
                  "fr-FR": {
                    singular: "Connexion à Shopify"
                  },
                  "ja-JP": {
                    singular: "Shopify に接続する"
                  },
                  "ko-KR": {
                    singular: "Shopify에 연결"
                  },
                  "pt-BR": {
                    singular: "Conectar ao Shopify"
                  },
                  "zh-CN": {
                    singular: "与 Shopify 关联"
                  }
                }
              })
            }), (0, _v1.jsxs)(_v6.Box, {
              mt: "lg",
              children: [_v7 && (0, _v1.jsx)(_v5.Alert, {
                status: "error",
                mb: "md",
                onClose: () => _v8(""),
                children: _v7
              }), (0, _v1.jsx)(_v15.Paragraph, {
                color: "text-secondary",
                textAlign: "center",
                mt: "lg",
                children: (0, _v20.translate)({
                  singular: "To add videos to your product pages, connect to your Shopify stores.",
                  dictionary: {
                    es: {
                      singular: "Para agregar videos a tus páginas de productos, conéctate a tus tiendas de Shopify."
                    },
                    "de-DE": {
                      singular: "Verbinde deine Shopify-Shops, um Videos zu deinen Produktseiten hinzuzufügen."
                    },
                    "fr-FR": {
                      singular: "Pour ajouter des vidéos sur vos pages de produits, connectez-vous à vos boutiques Shopify."
                    },
                    "ja-JP": {
                      singular: "商品ページに動画を追加するには、Shopifyストアに接続してください。"
                    },
                    "ko-KR": {
                      singular: "상품 페이지에 동영상을 추가하려면 Shopify 스토어에 연결하세요."
                    },
                    "pt-BR": {
                      singular: "Para adicionar vídeos às páginas de seus produtos, conecte-se às suas lojas do Shopify."
                    },
                    "zh-CN": {
                      singular: "要将视频添加到您的产品页面，请关联您的 Shopify 商店。"
                    }
                  }
                })
              }), (0, _v1.jsxs)(_v16.InputGroup, {
                mt: "lg",
                mb: "lg",
                children: [(0, _v1.jsx)(_v17.InputLeftElement, {
                  borderTopLeftRadius: "md",
                  borderBottomLeftRadius: "md",
                  backgroundColor: "fill-component",
                  width: (0, _v14.rem)(64),
                  children: (0, _v1.jsx)(_v12.Text, {
                    variant: "body-md",
                    color: "text-secondary",
                    children: "https://"
                  })
                }), (0, _v1.jsx)(_v13.Input, {
                  type: "text",
                  placeholder: "store.myshopify.com",
                  value: _v3,
                  onChange: _v0 => {
                    let _v1 = _v0?.target?.value;
                    _v4(_v1);
                    let _v2 = _v1.endsWith(_v25) ? _v1 : _v1 + _v25;
                    (_v6(_v2), _v24.test(_v2)) ? Array.isArray(_v2) && _v2.find(_v0 => 1 === _v0.status && _v0.domain === _v2) ? _v8((0, _v20.translate)({
                      singular: "The store URL already exists.",
                      dictionary: {
                        es: {
                          singular: "La URL de la tienda ya existe."
                        },
                        "de-DE": {
                          singular: "Die Shop-URL ist bereits vorhanden."
                        },
                        "fr-FR": {
                          singular: "L'URL de boutique existe déjà."
                        },
                        "ja-JP": {
                          singular: "ショップURLは既に存在します。"
                        },
                        "ko-KR": {
                          singular: "이미 존재하는 스토어 URL입니다."
                        },
                        "pt-BR": {
                          singular: "O URL da loja já existe."
                        },
                        "zh-CN": {
                          singular: "商店 URL 已经存在。"
                        }
                      }
                    })) : _v8("") : _v8((0, _v20.translate)({
                      singular: "Please enter a valid store URL.",
                      dictionary: {
                        es: {
                          singular: "Introduce una URL de tienda válida."
                        },
                        "de-DE": {
                          singular: "Bitte gib eine gültige Shop-URL an."
                        },
                        "fr-FR": {
                          singular: "Veuillez saisir une URL de boutique valide."
                        },
                        "ja-JP": {
                          singular: "有効なストアURLを入力してください。"
                        },
                        "ko-KR": {
                          singular: "유효한 스토어 URL을 입력하세요."
                        },
                        "pt-BR": {
                          singular: "Por favor, insira um URL da loja válido."
                        },
                        "zh-CN": {
                          singular: "请输入有效的商店 URL。"
                        }
                      }
                    }));
                  },
                  maxLength: 150,
                  size: "md",
                  pl: (0, _v14.rem)(72),
                  pr: (0, _v14.rem)(128)
                }), _v5 && (0, _v1.jsx)(_v17.InputRightElement, {
                  borderTopRightRadius: "md",
                  borderBottomRightRadius: "md",
                  backgroundColor: "fill-component",
                  width: (0, _v14.rem)(124),
                  children: (0, _v1.jsx)(_v12.Text, {
                    variant: "body-md",
                    color: "text-secondary",
                    children: ".myshopify.com"
                  })
                })]
              })]
            }), (0, _v1.jsx)(_v23.Connect, {
              width: "100%",
              method: "POST",
              url: `/settings/apps?service=shopify&action=connect&shop=${_v5}&post_connect=${_v9}`,
              isDisabled: !!_v7 || !_v5
            }), (0, _v1.jsx)(_v7.Button, {
              variant: "tertiary",
              mt: "sm",
              onClick: () => {
                _v0.push(`/integrations-center/${_v21.PARTNER_ID.SHOPIFY}/details`);
              },
              children: (0, _v20.translate)({
                singular: "Cancel",
                dictionary: {
                  es: {
                    singular: "Cancelar"
                  },
                  "de-DE": {
                    singular: "Abbrechen"
                  },
                  "fr-FR": {
                    singular: "Annuler"
                  },
                  "ja-JP": {
                    singular: "キャンセル"
                  },
                  "ko-KR": {
                    singular: "취소"
                  },
                  "pt-BR": {
                    singular: "Cancelar"
                  },
                  "zh-CN": {
                    singular: "取消"
                  }
                }
              })
            })]
          })
        })
      });
    };
  function _v27() {
    return (0, _v1.jsx)(_v26, {});
  }
  var _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0);
  let _v31 = () => (0, _v1.jsx)(_v1.Fragment, {
    children: (0, _v1.jsx)(_v27, {})
  });
  (0, _v28.withPageSetup)(() => ({
    props: {
      hasThemeSupport: !0
    }
  }), {
    capability: "hasIntegrationCenter",
    redirect: "/settings/apps"
  }), _v31.getLayout = _v0 => (0, _v1.jsxs)(_v1.Fragment, {
    children: [(0, _v1.jsx)(_v29.DefaultNavigation, {
      hasSearch: !1,
      isSideNavActive: !1
    }), _v0, (0, _v1.jsx)(_v30.MinimalFooterLayout, {})]
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v31], 0);
}