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
  let _v9 = "second_ft_eligible_tracked";
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
    _v22 = _v0.i(0);
  let _v23 = ({
    isOpen: _v0,
    onClose: _v1,
    onCtaClick: _v2,
    videos: _v3,
    totalVideos: _v4
  }) => {
    if (!_v0) return null;
    let _v5 = _v0 => {
      if (_v0) return _v0.pictures?.sizes?.find(_v0 => (_v0.width ?? 0) >= 300)?.link ?? _v0.pictures?.baseLink ?? _v0.pictures?.sizes?.[0]?.link;
    };
    return (0, _v1.jsxs)(_v15.Modal, {
      isOpen: _v0,
      onClose: _v1,
      isCentered: !0,
      size: "xl",
      children: [(0, _v1.jsx)(_v19.ModalOverlay, {
        bg: "blackAlpha.600",
        backdropFilter: "blur(2px)"
      }), (0, _v1.jsxs)(_v18.ModalContent, {
        display: "flex",
        flexDirection: "column",
        maxWidth: (0, _v21.rem)(560),
        width: {
          base: "92vw",
          md: (0, _v21.rem)(560)
        },
        minHeight: {
          base: "auto",
          md: "min(560px, calc(100dvh - 2rem))"
        },
        maxHeight: "calc(100dvh - 2rem)",
        borderRadius: (0, _v21.rem)(28),
        overflow: "hidden",
        px: {
          base: (0, _v21.rem)(24),
          md: (0, _v21.rem)(36)
        },
        py: {
          base: (0, _v21.rem)(28),
          md: (0, _v21.rem)(36)
        },
        boxShadow: "2xl",
        children: [(0, _v1.jsx)(_v17.ModalCloseButton, {
          top: (0, _v21.rem)(18),
          right: (0, _v21.rem)(18)
        }), (0, _v1.jsxs)(_v16.ModalBody, {
          p: 0,
          display: "flex",
          flexDirection: "column",
          flex: "1 1 auto",
          minHeight: 0,
          overflowY: "auto",
          overflowX: "hidden",
          sx: {
            "@media (min-height: 593px)": {
              overflowY: "visible",
              overflowX: "visible"
            }
          },
          children: [(0, _v1.jsx)(_v20.Text, {
            as: "h2",
            fontFamily: "heading",
            fontSize: {
              base: "heading-lg",
              md: "heading-2xl"
            },
            lineHeight: "1.2",
            letterSpacing: {
              base: "-0.07875rem",
              md: "-0.1575rem"
            },
            textAlign: "center",
            color: "text-primary",
            fontWeight: "bold",
            maxW: (0, _v21.rem)(380),
            mx: "auto",
            children: (0, _v22.translate)({
              singular: "Your videos are waiting",
              dictionary: {
                es: {
                  singular: "Tus vídeos te esperan"
                },
                "de-DE": {
                  singular: "Ihre Videos warten auf Sie"
                },
                "fr-FR": {
                  singular: "Vos vidéos vous attendent"
                },
                "ja-JP": {
                  singular: "あなたの動画が待っています"
                },
                "ko-KR": {
                  singular: "귀하의 동영상이 기다리고 있습니다"
                },
                "pt-BR": {
                  singular: "Seus vídeos estão esperando por você"
                },
                "zh-CN": {
                  singular: "您的视频在等待"
                }
              }
            })
          }), (0, _v1.jsx)(_v20.Text, {
            fontFamily: "heading",
            fontSize: {
              base: "heading-sm",
              md: "heading-md"
            },
            lineHeight: "1.35",
            textAlign: "center",
            color: "text-primary",
            mt: 3,
            maxW: (0, _v21.rem)(460),
            mx: "auto",
            children: (0, _v22.translate)({
              singular: "1 video is still here, ready to do more. Unlock their full potential with a customizable player, advanced privacy, review tools and more.",
              plural: "{count} videos are still here, ready to do more. Unlock their full potential with a customizable player, advanced privacy, review tools and more.",
              count: _v4,
              replacements: {
                count: _v4
              },
              dictionary: {
                es: {
                  singular: "1 vídeo sigue aquí, listo para hacer más. Desbloquea todo su potencial con un reproductor personalizable, privacidad avanzada, herramientas de revisión y más.",
                  plural: "{count} vídeos siguen aquí, listos para hacer más. Desbloquea todo su potencial con un reproductor personalizable, privacidad avanzada, herramientas de revisión y más."
                },
                "de-DE": {
                  singular: "1 Video ist noch hier und bereit für mehr. Nutzen Sie sein volles Potenzial mit einem anpassbaren Player, erweitertem Datenschutz, Review-Tools und mehr.",
                  plural: "{count} Videos sind noch hier und bereit für mehr. Nutzen Sie ihr volles Potenzial mit einem anpassbaren Player, erweitertem Datenschutz, Review-Tools und mehr."
                },
                "fr-FR": {
                  singular: "1 vidéo est toujours là, prête à faire plus. Débloquez tout son potentiel avec un lecteur personnalisable, des paramètres de confidentialité avancés, des outils Review et bien plus encore.",
                  plural: "{count} vidéos sont toujours là, prêtes à faire plus. Débloquez tout leur potentiel avec un lecteur personnalisable, des paramètres de confidentialité avancés, des outils Review et bien plus encore."
                },
                "ja-JP": {
                  singular: "1本の動画がまだここにあります。さらに活用できます。カスタマイズ可能なプレーヤー、高度なプライバシー設定、レビュー用ツールなどでその可能性を最大限に引き出しましょう。",
                  plural: "{count}本の動画がまだここにあります。さらに活用できます。カスタマイズ可能なプレーヤー、高度なプライバシー設定、レビュー用ツールなどでその可能性を最大限に引き出しましょう。"
                },
                "ko-KR": {
                  singular: "동영상 1개가 아직 남아 있습니다. 사용자 지정 가능한 플레이어, 고급 개인정보 보호, Review 도구 등으로 잠재력을 최대한 끌어내세요.",
                  plural: "{count}개의 동영상이 아직 남아 있습니다. 사용자 지정 가능한 플레이어, 고급 개인정보 보호, Review 도구 등으로 잠재력을 최대한 끌어내세요."
                },
                "pt-BR": {
                  singular: "1 vídeo ainda está aqui, pronto para fazer mais. Liberte todo o seu potencial com um reprodutor personalizável, privacidade avançada, ferramentas de revisão e muito mais.",
                  plural: "{count} vídeos ainda estão aqui, prontos para fazer mais. Liberte todo o potencial deles com um reprodutor personalizável, privacidade avançada, ferramentas de revisão e muito mais."
                },
                "zh-CN": {
                  singular: "1 个视频仍在这里，随时可以继续使用。通过可定制的播放器、先进的隐私设置、审阅工具等，释放它的全部潜力。",
                  plural: "{count} 个视频仍在这里，随时可以继续使用。通过可定制的播放器、先进的隐私设置、审阅工具等，释放它们的全部潜力。"
                }
              }
            })
          }), (0, _v1.jsx)(_v11.Box, {
            flex: {
              base: "none",
              md: "1 1 0"
            },
            minHeight: {
              base: (0, _v21.rem)(48),
              md: (0, _v21.rem)(16)
            }
          }), (0, _v1.jsx)(_v11.Box, {
            flexShrink: 0,
            children: _v4 <= 3 ? (0, _v1.jsx)(_v13.Flex, {
              justify: "center",
              gap: {
                base: 2,
                md: 3
              },
              align: "flex-start",
              children: _v3.slice(0, 3).map((_v0, _v1) => {
                let _v2 = _v5(_v0);
                return (0, _v1.jsxs)(_v11.Box, {
                  flex: 1,
                  minWidth: 0,
                  maxW: (0, _v21.rem)(160),
                  children: [(0, _v1.jsx)(_v11.Box, {
                    aspectRatio: "16/10",
                    borderRadius: (0, _v21.rem)(8),
                    overflow: "hidden",
                    bg: "surface-secondary",
                    boxShadow: "sm",
                    children: _v2 ? (0, _v1.jsx)(_v14.Image, {
                      src: _v2,
                      alt: _v0.name,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover"
                    }) : (0, _v1.jsx)(_v11.Box, {
                      width: "100%",
                      height: "100%",
                      bg: "surface-secondary"
                    })
                  }), (0, _v1.jsx)(_v20.Text, {
                    fontFamily: "heading",
                    fontSize: "body-md",
                    color: "text-primary",
                    noOfLines: 1,
                    mt: 2,
                    textAlign: "left",
                    children: _v0.name
                  })]
                }, _v0.uri ?? _v1);
              })
            }) : (0, _v1.jsxs)(_v13.Flex, {
              justify: "center",
              gap: {
                base: 2,
                md: 3
              },
              align: "flex-start",
              px: (0, _v21.rem)(12),
              children: [(0, _v1.jsxs)(_v11.Box, {
                flex: 1,
                minWidth: 0,
                maxW: (0, _v21.rem)(155),
                children: [(0, _v1.jsx)(_v11.Box, {
                  aspectRatio: "16/10",
                  borderRadius: (0, _v21.rem)(8),
                  overflow: "hidden",
                  bg: "surface-secondary",
                  boxShadow: "sm",
                  children: _v5(_v3[0]) ? (0, _v1.jsx)(_v14.Image, {
                    src: _v5(_v3[0]),
                    alt: _v3[0]?.name ?? "",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                  }) : (0, _v1.jsx)(_v11.Box, {
                    width: "100%",
                    height: "100%",
                    bg: "surface-secondary"
                  })
                }), (0, _v1.jsx)(_v20.Text, {
                  fontFamily: "heading",
                  fontSize: "body-md",
                  color: "text-primary",
                  noOfLines: 1,
                  mt: 2,
                  textAlign: "left",
                  children: _v3[0]?.name
                })]
              }), (0, _v1.jsxs)(_v11.Box, {
                flex: 1,
                minWidth: 0,
                maxW: (0, _v21.rem)(155),
                children: [(0, _v1.jsx)(_v11.Box, {
                  aspectRatio: "16/10",
                  borderRadius: (0, _v21.rem)(8),
                  overflow: "hidden",
                  bg: "surface-secondary",
                  boxShadow: "sm",
                  children: _v5(_v3[1]) ? (0, _v1.jsx)(_v14.Image, {
                    src: _v5(_v3[1]),
                    alt: _v3[1]?.name ?? "",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                  }) : (0, _v1.jsx)(_v11.Box, {
                    width: "100%",
                    height: "100%",
                    bg: "surface-secondary"
                  })
                }), (0, _v1.jsx)(_v20.Text, {
                  fontFamily: "heading",
                  fontSize: "body-md",
                  color: "text-primary",
                  noOfLines: 1,
                  mt: 2,
                  textAlign: "left",
                  children: _v3[1]?.name
                })]
              }), (0, _v1.jsxs)(_v11.Box, {
                flex: 1,
                minWidth: 0,
                maxW: (0, _v21.rem)(155),
                children: [(0, _v1.jsxs)(_v11.Box, {
                  position: "relative",
                  aspectRatio: "16/10",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  children: [_v3[4] && (0, _v1.jsx)(_v11.Box, {
                    position: "absolute",
                    top: "50%",
                    left: "2%",
                    width: "60%",
                    aspectRatio: "16/10",
                    borderRadius: (0, _v21.rem)(8),
                    overflow: "hidden",
                    border: "1.5px solid white",
                    boxShadow: "md",
                    transform: "translateY(-50%) rotate(-8deg)",
                    zIndex: 1,
                    bg: "surface-secondary",
                    children: _v5(_v3[4]) && (0, _v1.jsx)(_v14.Image, {
                      src: _v5(_v3[4]),
                      alt: "",
                      width: "100%",
                      height: "100%",
                      objectFit: "cover"
                    })
                  }), _v3[2] && (0, _v1.jsx)(_v11.Box, {
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    width: "70%",
                    aspectRatio: "16/10",
                    borderRadius: (0, _v21.rem)(8),
                    overflow: "hidden",
                    border: "1.5px solid white",
                    boxShadow: "md",
                    transform: "translate(-50%, -75%)",
                    zIndex: 2,
                    bg: "surface-secondary",
                    children: _v5(_v3[2]) && (0, _v1.jsx)(_v14.Image, {
                      src: _v5(_v3[2]),
                      alt: "",
                      width: "100%",
                      height: "100%",
                      objectFit: "cover"
                    })
                  }), _v3[3] && (0, _v1.jsx)(_v11.Box, {
                    position: "absolute",
                    top: "50%",
                    right: "2%",
                    width: "60%",
                    aspectRatio: "16/10",
                    borderRadius: (0, _v21.rem)(8),
                    overflow: "hidden",
                    border: "1.5px solid white",
                    boxShadow: "lg",
                    transform: "translateY(-40%) rotate(7deg)",
                    zIndex: 3,
                    bg: "surface-secondary",
                    children: _v5(_v3[3]) && (0, _v1.jsx)(_v14.Image, {
                      src: _v5(_v3[3]),
                      alt: "",
                      width: "100%",
                      height: "100%",
                      objectFit: "cover"
                    })
                  })]
                }), (0, _v1.jsx)(_v20.Text, {
                  fontFamily: "heading",
                  fontSize: "body-md",
                  color: "text-primary",
                  noOfLines: 1,
                  mt: 2,
                  textAlign: "left",
                  children: (0, _v22.translate)({
                    singular: "and 1 other",
                    plural: "and other {count}",
                    count: _v4 - 2,
                    replacements: {
                      count: _v4 - 2
                    },
                    dictionary: {
                      es: {
                        singular: "y 1 más",
                        plural: "y {count} más"
                      },
                      "de-DE": {
                        singular: "und 1 weiteres",
                        plural: "und {count} weitere"
                      },
                      "fr-FR": {
                        singular: "et 1 autre",
                        plural: "et {count} autres"
                      },
                      "ja-JP": {
                        singular: "と他1件",
                        plural: "と他{count}件"
                      },
                      "ko-KR": {
                        singular: "외 1개",
                        plural: "외 {count}개"
                      },
                      "pt-BR": {
                        singular: "e mais 1",
                        plural: "e mais {count}"
                      },
                      "zh-CN": {
                        singular: "和另一个",
                        plural: "和其他 {count}"
                      }
                    }
                  })
                })]
              })]
            })
          }), (0, _v1.jsx)(_v11.Box, {
            flex: {
              base: "none",
              md: "1 1 0"
            },
            minHeight: {
              base: (0, _v21.rem)(48),
              md: (0, _v21.rem)(16)
            }
          }), (0, _v1.jsx)(_v11.Box, {
            display: "flex",
            justifyContent: "center",
            flexShrink: 0,
            children: (0, _v1.jsx)(_v12.Button, {
              variant: "primary",
              size: "lg",
              maxWidth: {
                base: "100%",
                sm: (0, _v21.rem)(430)
              },
              width: "100%",
              h: (0, _v21.rem)(50),
              borderRadius: (0, _v21.rem)(16),
              borderTopRadius: (0, _v21.rem)(16),
              borderBottomRadius: (0, _v21.rem)(16),
              sx: {
                borderRadius: `${(0, _v21.rem)(16)} !important`,
                borderTopLeftRadius: `${(0, _v21.rem)(16)} !important`,
                borderTopRightRadius: `${(0, _v21.rem)(16)} !important`,
                borderBottomLeftRadius: `${(0, _v21.rem)(16)} !important`,
                borderBottomRightRadius: `${(0, _v21.rem)(16)} !important`
              },
              bg: "black",
              color: "white",
              _hover: {
                bg: "gray.800"
              },
              onClick: _v2,
              children: (0, _v22.translate)({
                singular: "Pick up where you left off",
                dictionary: {
                  es: {
                    singular: "Continúa desde donde lo dejaste"
                  },
                  "de-DE": {
                    singular: "Machen Sie dort weiter, wo Sie aufgehört haben"
                  },
                  "fr-FR": {
                    singular: "Reprenez là où vous vous étiez arrêté"
                  },
                  "ja-JP": {
                    singular: "中断したところから再開"
                  },
                  "ko-KR": {
                    singular: "중단한 지점부터 이어가세요"
                  },
                  "pt-BR": {
                    singular: "Retome de onde você parou"
                  },
                  "zh-CN": {
                    singular: "从上次的位置继续"
                  }
                }
              })
            })
          })]
        })]
      })]
    });
  };
  var _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0);
  let _v28 = {
      starter: "Starter",
      standard: "Standard",
      advanced: "Advanced"
    },
    _v29 = ({
      isOpen: _v0,
      onClose: _v1,
      onCtaClick: _v2,
      planTier: _v3,
      planName: _v4,
      storageQuota: _v5
    }) => {
      if (!_v0) return null;
      let _v6 = _v4 ?? _v28[_v3.toLowerCase()] ?? "Starter";
      return (0, _v1.jsxs)(_v15.Modal, {
        isOpen: _v0,
        onClose: _v1,
        isCentered: !0,
        size: "xl",
        children: [(0, _v1.jsx)(_v19.ModalOverlay, {
          bg: "blackAlpha.600",
          backdropFilter: "blur(2px)"
        }), (0, _v1.jsxs)(_v18.ModalContent, {
          display: "flex",
          flexDirection: "column",
          maxWidth: (0, _v21.rem)(570),
          width: {
            base: "92vw",
            md: (0, _v21.rem)(570)
          },
          minHeight: {
            base: "auto",
            md: "min(612px, calc(100dvh - 2rem))"
          },
          maxHeight: "calc(100dvh - 2rem)",
          overflow: "hidden",
          borderRadius: (0, _v21.rem)(28),
          boxShadow: "2xl",
          children: [(0, _v1.jsx)(_v17.ModalCloseButton, {
            top: (0, _v21.rem)(18),
            right: (0, _v21.rem)(18)
          }), (0, _v1.jsxs)(_v11.Box, {
            display: "flex",
            flexDirection: "column",
            flex: "1 1 auto",
            minHeight: 0,
            overflowY: "auto",
            sx: {
              "@media (min-height: 645px)": {
                overflowY: "visible"
              }
            },
            px: {
              base: (0, _v21.rem)(24),
              md: (0, _v21.rem)(34)
            },
            pt: {
              base: (0, _v21.rem)(28),
              md: (0, _v21.rem)(36)
            },
            children: [(0, _v1.jsxs)(_v11.Box, {
              flexShrink: 0,
              children: [(0, _v1.jsx)(_v20.Text, {
                as: "h2",
                fontFamily: "heading",
                fontSize: {
                  base: "heading-lg",
                  md: "heading-2xl"
                },
                lineHeight: "1.2",
                textAlign: "center",
                color: "text-primary",
                fontWeight: "bold",
                maxW: "100%",
                mx: "auto",
                children: (0, _v22.translate)({
                  singular: "Welcome back. Have another free trial",
                  dictionary: {
                    es: {
                      singular: "Bienvenido de nuevo. Disfruta de otra prueba gratuita"
                    },
                    "de-DE": {
                      singular: "Willkommen zurück. Hier ist eine weitere kostenlose Testversion"
                    },
                    "fr-FR": {
                      singular: "Content de vous revoir. Profitez d'un autre essai gratuit"
                    },
                    "ja-JP": {
                      singular: "お帰りなさい。もう一度無料トライアルをどうぞ"
                    },
                    "ko-KR": {
                      singular: "다시 오신 것을 환영합니다. 또 다른 무료 체험을 이용해 보세요"
                    },
                    "pt-BR": {
                      singular: "Bem-vindo de volta. Aproveite mais um teste gratuito"
                    },
                    "zh-CN": {
                      singular: "欢迎回来。再享一次免费试用"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v20.Text, {
                fontFamily: "heading",
                fontSize: (0, _v21.rem)(18),
                lineHeight: "1.35",
                textAlign: "center",
                color: "text-primary",
                fontWeight: "bold",
                mt: 5,
                maxW: "100%",
                mx: "auto",
                children: (0, _v22.translate)({
                  singular: "Thank you for your loyalty to Vimeo. Here's another free {tier} trial to make your videos shine.",
                  replacements: {
                    tier: _v6
                  },
                  dictionary: {
                    es: {
                      singular: "Gracias por tu fidelidad a Vimeo. Aquí tienes otra prueba gratuita de {tier} para que tus vídeos brillen."
                    },
                    "de-DE": {
                      singular: "Vielen Dank für Ihre Treue zu Vimeo. Hier ist eine weitere kostenlose {tier}-Testversion, damit Ihre Videos glänzen."
                    },
                    "fr-FR": {
                      singular: "Merci pour votre fidélité à Vimeo. Voici un nouvel essai gratuit {tier} pour sublimer vos vidéos."
                    },
                    "ja-JP": {
                      singular: "Vimeoをご利用いただきありがとうございます。動画をさらに輝かせるための、もう一度の無料{tier}トライアルをどうぞ。"
                    },
                    "ko-KR": {
                      singular: "Vimeo에 대한 변함없는 성원에 감사드립니다. 동영상을 빛나게 할 또 다른 무료 {tier} 체험을 드립니다."
                    },
                    "pt-BR": {
                      singular: "Agradecemos sua fidelidade ao Vimeo. Aqui está outro teste gratuito {tier} para fazer seus vídeos brilharem."
                    },
                    "zh-CN": {
                      singular: "感谢您对 Vimeo 的忠诚支持。这里有另一次免费的 {tier} 试用，让您的视频更出彩。"
                    }
                  }
                })
              })]
            }), (0, _v1.jsx)(_v11.Box, {
              flex: {
                base: "none",
                md: "1 1 0"
              },
              minHeight: {
                base: (0, _v21.rem)(28),
                md: (0, _v21.rem)(20)
              }
            }), (0, _v1.jsxs)(_v24.VStack, {
              spacing: {
                base: 4,
                md: 5
              },
              align: "stretch",
              width: "100%",
              mx: "auto",
              flexShrink: 0,
              children: [(0, _v1.jsxs)(_v13.Flex, {
                align: "flex-start",
                gap: 5,
                children: [(0, _v1.jsx)(_v11.Box, {
                  color: "text-primary",
                  mt: .5,
                  flexShrink: 0,
                  children: (0, _v1.jsx)(_v26.StyleSparkle, {
                    boxSize: "24px"
                  })
                }), (0, _v1.jsxs)(_v11.Box, {
                  children: [(0, _v1.jsx)(_v20.Text, {
                    fontFamily: "heading",
                    fontSize: (0, _v21.rem)(18),
                    fontWeight: "bold",
                    color: "text-primary",
                    lineHeight: "1.3",
                    children: (0, _v22.translate)({
                      singular: "More room to create",
                      dictionary: {
                        es: {
                          singular: "Más espacio para crear"
                        },
                        "de-DE": {
                          singular: "Mehr Platz zum Kreieren"
                        },
                        "fr-FR": {
                          singular: "Plus d'espace pour créer"
                        },
                        "ja-JP": {
                          singular: "より多くの制作スペース"
                        },
                        "ko-KR": {
                          singular: "창작을 위한 더 많은 공간"
                        },
                        "pt-BR": {
                          singular: "Mais espaço para criar"
                        },
                        "zh-CN": {
                          singular: "更多创作空间"
                        }
                      }
                    })
                  }), (0, _v1.jsx)(_v20.Text, {
                    fontSize: (0, _v21.rem)(15),
                    color: "text-secondary",
                    mt: 1,
                    lineHeight: "1.4",
                    children: _v5 ? (0, _v22.translate)({
                      singular: "{STORAGE} of storage and an always ad-free player",
                      replacements: {
                        STORAGE: _v5
                      },
                      dictionary: {
                        es: {
                          singular: "{STORAGE} de almacenamiento y un reproductor siempre sin anuncios"
                        },
                        "de-DE": {
                          singular: "{STORAGE} Speicherplatz und ein stets werbefreier Player"
                        },
                        "fr-FR": {
                          singular: "{STORAGE} de stockage et un lecteur toujours sans publicités"
                        },
                        "ja-JP": {
                          singular: "{STORAGE} のストレージと常に広告なしのプレーヤー"
                        },
                        "ko-KR": {
                          singular: "{STORAGE}의 저장 공간과 언제나 광고 없는 플레이어"
                        },
                        "pt-BR": {
                          singular: "{STORAGE} de armazenamento e um reprodutor sempre livre de anúncios"
                        },
                        "zh-CN": {
                          singular: "{STORAGE} 的存储空间和始终无广告的播放器"
                        }
                      }
                    }) : (0, _v22.translate)({
                      singular: "Plenty of storage and an always ad-free player",
                      dictionary: {
                        es: {
                          singular: "Amplio almacenamiento y un reproductor siempre sin anuncios"
                        },
                        "de-DE": {
                          singular: "Viel Speicherplatz und ein stets werbefreier Player"
                        },
                        "fr-FR": {
                          singular: "Beaucoup d'espace de stockage et un lecteur toujours sans publicités"
                        },
                        "ja-JP": {
                          singular: "十分なストレージと常に広告なしのプレーヤー"
                        },
                        "ko-KR": {
                          singular: "충분한 저장 공간과 언제나 광고 없는 플레이어"
                        },
                        "pt-BR": {
                          singular: "Amplo espaço de armazenamento e um reprodutor sempre livre de anúncios"
                        },
                        "zh-CN": {
                          singular: "充足的存储空间和始终无广告的播放器"
                        }
                      }
                    })
                  })]
                })]
              }), (0, _v1.jsxs)(_v13.Flex, {
                align: "flex-start",
                gap: 5,
                children: [(0, _v1.jsx)(_v11.Box, {
                  color: "text-primary",
                  mt: .5,
                  flexShrink: 0,
                  children: (0, _v1.jsx)(_v27.WatchPlay, {
                    boxSize: "24px"
                  })
                }), (0, _v1.jsxs)(_v11.Box, {
                  children: [(0, _v1.jsx)(_v20.Text, {
                    fontFamily: "heading",
                    fontSize: (0, _v21.rem)(18),
                    fontWeight: "bold",
                    color: "text-primary",
                    lineHeight: "1.3",
                    children: (0, _v22.translate)({
                      singular: "Customize the way it looks",
                      dictionary: {
                        es: {
                          singular: "Personaliza su apariencia"
                        },
                        "de-DE": {
                          singular: "Passen Sie das Erscheinungsbild an"
                        },
                        "fr-FR": {
                          singular: "Personnalisez son apparence"
                        },
                        "ja-JP": {
                          singular: "外観をカスタマイズ"
                        },
                        "ko-KR": {
                          singular: "모양을 맞춤 설정하세요"
                        },
                        "pt-BR": {
                          singular: "Personalize a aparência"
                        },
                        "zh-CN": {
                          singular: "自定义播放器外观"
                        }
                      }
                    })
                  }), (0, _v1.jsx)(_v20.Text, {
                    fontSize: (0, _v21.rem)(15),
                    color: "text-secondary",
                    mt: 1,
                    lineHeight: "1.4",
                    children: (0, _v22.translate)({
                      singular: "A fully customizable video player that fits the look and feel of your work",
                      dictionary: {
                        es: {
                          singular: "Un reproductor de vídeo totalmente personalizable que se adapta a la apariencia y al estilo de tu trabajo"
                        },
                        "de-DE": {
                          singular: "Ein vollständig anpassbarer Videoplayer, der zum Look und Feel Ihrer Arbeit passt"
                        },
                        "fr-FR": {
                          singular: "Un lecteur vidéo entièrement personnalisable qui s'accorde à l'apparence et à l'ambiance de votre travail"
                        },
                        "ja-JP": {
                          singular: "制作物の見た目と雰囲気に合わせて完全にカスタマイズできる動画プレーヤー"
                        },
                        "ko-KR": {
                          singular: "작업의 외관과 느낌에 맞게 완전히 사용자 지정 가능한 비디오 플레이어"
                        },
                        "pt-BR": {
                          singular: "Um reprodutor de vídeo totalmente personalizável que combina com o visual e a identidade do seu trabalho"
                        },
                        "zh-CN": {
                          singular: "一个可完全自定义的视频播放器，契合您作品的外观与风格"
                        }
                      }
                    })
                  })]
                })]
              }), (0, _v1.jsxs)(_v13.Flex, {
                align: "flex-start",
                gap: 5,
                children: [(0, _v1.jsx)(_v11.Box, {
                  color: "text-primary",
                  mt: .5,
                  flexShrink: 0,
                  children: (0, _v1.jsx)(_v25.ReviewCheck, {
                    boxSize: "24px"
                  })
                }), (0, _v1.jsxs)(_v11.Box, {
                  children: [(0, _v1.jsx)(_v20.Text, {
                    fontFamily: "heading",
                    fontSize: (0, _v21.rem)(18),
                    fontWeight: "bold",
                    color: "text-primary",
                    lineHeight: "1.3",
                    children: (0, _v22.translate)({
                      singular: "Streamline feedback and approvals",
                      dictionary: {
                        es: {
                          singular: "Optimice los comentarios y las aprobaciones"
                        },
                        "de-DE": {
                          singular: "Optimieren Sie Feedback und Genehmigungen"
                        },
                        "fr-FR": {
                          singular: "Rationalisez le partage d'avis et les approbations"
                        },
                        "ja-JP": {
                          singular: "フィードバックと承認をスムーズに"
                        },
                        "ko-KR": {
                          singular: "피드백과 승인 절차 간소화"
                        },
                        "pt-BR": {
                          singular: "Simplifique o feedback e as aprovações"
                        },
                        "zh-CN": {
                          singular: "简化反馈和审批"
                        }
                      }
                    })
                  }), (0, _v1.jsx)(_v20.Text, {
                    fontSize: (0, _v21.rem)(15),
                    color: "text-secondary",
                    mt: 1,
                    lineHeight: "1.4",
                    children: (0, _v22.translate)({
                      singular: "Time-coded comments and unique Review links to collaborate with clients and teammates",
                      dictionary: {
                        es: {
                          singular: "Comentarios con código de tiempo y enlaces únicos de Review para colaborar con clientes y compañeros"
                        },
                        "de-DE": {
                          singular: "Zeitcodierte Kommentare und einzigartige Review-Links zur Zusammenarbeit mit Kunden und Teammitgliedern"
                        },
                        "fr-FR": {
                          singular: "Commentaires horodatés et liens Review uniques pour collaborer avec des clients et des membres de l'équipe"
                        },
                        "ja-JP": {
                          singular: "クライアントやチームメンバーと共同作業するための、タイムコード付きコメントと固有の Review リンク"
                        },
                        "ko-KR": {
                          singular: "시간 코드가 포함된 댓글과 고유한 Review 링크로 고객 및 팀원과 협업하세요"
                        },
                        "pt-BR": {
                          singular: "Comentários com marcação de tempo e links exclusivos do Review para colaborar com clientes e colegas de equipe"
                        },
                        "zh-CN": {
                          singular: "带时间码的评论和独特的 Review 链接，用于与客户和团队成员协作"
                        }
                      }
                    })
                  })]
                })]
              })]
            }), (0, _v1.jsx)(_v11.Box, {
              flex: {
                base: "none",
                md: "1 1 0"
              },
              minHeight: {
                base: (0, _v21.rem)(28),
                md: (0, _v21.rem)(20)
              }
            })]
          }), (0, _v1.jsx)(_v11.Box, {
            flexShrink: 0,
            display: "flex",
            justifyContent: "center",
            px: {
              base: (0, _v21.rem)(24),
              md: (0, _v21.rem)(34)
            },
            pb: {
              base: (0, _v21.rem)(24),
              md: (0, _v21.rem)(30)
            },
            pt: {
              base: (0, _v21.rem)(18),
              md: (0, _v21.rem)(22)
            },
            children: (0, _v1.jsx)(_v12.Button, {
              variant: "primary",
              size: "lg",
              maxWidth: {
                base: "100%",
                sm: (0, _v21.rem)(450)
              },
              width: "100%",
              h: (0, _v21.rem)(50),
              borderRadius: (0, _v21.rem)(16),
              borderTopRadius: (0, _v21.rem)(16),
              borderBottomRadius: (0, _v21.rem)(16),
              sx: {
                borderRadius: `${(0, _v21.rem)(16)} !important`,
                borderTopLeftRadius: `${(0, _v21.rem)(16)} !important`,
                borderTopRightRadius: `${(0, _v21.rem)(16)} !important`,
                borderBottomLeftRadius: `${(0, _v21.rem)(16)} !important`,
                borderBottomRightRadius: `${(0, _v21.rem)(16)} !important`
              },
              bg: "black",
              color: "white",
              _hover: {
                bg: "gray.800"
              },
              onClick: _v2,
              children: (0, _v22.translate)({
                singular: "Try {tier} free again",
                replacements: {
                  tier: _v6
                },
                dictionary: {
                  es: {
                    singular: "Prueba {tier} gratis otra vez"
                  },
                  "de-DE": {
                    singular: "Testen Sie {tier} erneut kostenlos"
                  },
                  "fr-FR": {
                    singular: "Essayez à nouveau {tier} gratuitement"
                  },
                  "ja-JP": {
                    singular: "もう一度無料で{tier}をお試しください"
                  },
                  "ko-KR": {
                    singular: "{tier} 무료 체험을 다시 이용해 보세요"
                  },
                  "pt-BR": {
                    singular: "Experimente {tier} grátis novamente"
                  },
                  "zh-CN": {
                    singular: "再次免费试用 {tier}"
                  }
                }
              })
            })
          })]
        })]
      });
    },
    _v30 = "top_navigation_upgrade_button",
    _v31 = () => {
      let {
          settings: _v0
        } = (0, _v6.useOrionSettings)(),
        _v1 = (_v0.second_free_trial_ui_treatment ?? "modal") === "modal";
      return (() => {
        let _v0,
          _v1,
          {
            settings: _v2
          } = (0, _v6.useOrionSettings)(),
          _v3 = _v2.second_free_trial_enabled,
          {
            capabilities: {
              hasSecondFreeTrialEligibility: _v4
            }
          } = (0, _v3.useCapability)(["hasSecondFreeTrialEligibility"]),
          _v5 = !!_v4;
        return _v0 = (0, _v8.usePico)(), _v1 = (0, _v2.useRef)(!1), (0, _v2.useEffect)(() => {
          if (_v5 && null !== _v0 && !_v1.current) {
            try {
              if ("1" === sessionStorage.getItem(_v9)) {
                _v1.current = !0;
                return;
              }
              sessionStorage.setItem(_v9, "1");
            } catch {}
            _v1.current = !0, _v0.track("is_second_ft_eligible", {});
          }
        }, [_v5, _v0]), _v3 && _v5;
      })() && _v1;
    };
  _v0.s(["useIsSecondFreeTrialShown", 0, _v31, "useSecondFreeTrialLauncher", 0, () => {
    let _v0 = _v31(),
      {
        settings: _v1
      } = (0, _v6.useOrionSettings)(),
      _v2 = _v1.second_free_trial_plan_tier ?? "starter",
      [_v3, _v4] = (0, _v2.useState)(!1),
      [_v5, _v6] = (0, _v2.useState)(!1),
      {
        data: _v7,
        error: _v8
      } = (0, _v4.useGetMeVideos)(() => _v0 ? {
        select: ["name", "uri", "pictures.baseLink", "pictures.sizes.link", "pictures.sizes.width"],
        query: {
          perPage: 5,
          direction: "desc"
        }
      } : null, {
        revalidateIfStale: !1,
        revalidateOnFocus: !1,
        revalidateOnReconnect: !1
      });
    (0, _v2.useEffect)(() => {
      if (!_v3 || void 0 !== _v7 || _v5) return;
      let _v0 = setTimeout(() => _v6(!0), 0 * !_v8);
      return () => clearTimeout(_v0);
    }, [_v3, _v7, _v8, _v5]);
    let _v9 = (0, _v2.useContext)(_v10.ViewerContext),
      {
        data: _v10
      } = (0, _v5.useGetSubscriptionPlans)(() => _v3 && _v9 ? {
        select: ["tier", "name", "metadata"],
        query: {
          filter: [_v2],
          ...(_v9.vuid ? {
            vuid: _v9.vuid
          } : {})
        }
      } : null),
      _v11 = _v10?.data,
      _v12 = (0, _v2.useMemo)(() => _v11?.find(_v0 => _v0.tier === _v2) ?? _v11?.[0], [_v11, _v2]),
      _v13 = _v12?.metadata?.entitlements?.params,
      _v14 = _v13?.videoStorageQuotaUnit === "video_size" && "string" == typeof _v13?.videoStoragePeriodicQuota ? _v13.videoStoragePeriodicQuota : void 0,
      _v15 = (0, _v2.useCallback)(() => {
        _v4(!1), _v6(!1);
      }, []),
      _v16 = (0, _v2.useCallback)(_v0 => !!_v0 && !!(_v0 => {
        try {
          let _v0 = new URL(_v0, window.location.origin);
          return "/upgrade-plan" === _v0.pathname && _v0.searchParams.get("paywall_trigger") === _v30;
        } catch {
          return !1;
        }
      })(_v0) && (_v6(!1), _v4(!0), !0), [_v0]),
      _v17 = void 0 !== _v7 && _v7.total > 0 && !_v5,
      _v18 = _v3 && (void 0 !== _v7 || _v5),
      {
        trackPaywallDismissed: _v19,
        trackPaywallCtaClicked: _v20
      } = (0, _v7.usePaywallTracking)({
        paywallTrigger: _v30,
        paywallLocation: "top_navigation",
        paywallType: "popup",
        paywallFeature: "general",
        paywallStyle: _v17 ? "second_free_trial_videos_waiting_modal" : "second_free_trial_welcome_back_modal",
        paywallPlansDisplayed: _v17 ? [] : [_v2],
        paywallPeriodicitiesDisplayed: ["yearly"],
        isVisible: _v18
      }),
      _v21 = (0, _v2.useCallback)(() => {
        _v19(), _v15();
      }, [_v15, _v19]),
      _v22 = (0, _v2.useCallback)(() => {
        _v20(), _v15(), window.location.assign(`/checkout/${_v2}/trial`);
      }, [_v15, _v2, _v20]);
    return {
      openFromTopNavUpgradeUrl: _v16,
      secondFreeTrialModal: _v18 ? _v17 ? (0, _v1.jsx)(_v23, {
        isOpen: !0,
        onClose: _v21,
        onCtaClick: _v22,
        videos: _v7.data ?? [],
        totalVideos: _v7.total
      }) : (0, _v1.jsx)(_v29, {
        isOpen: !0,
        onClose: _v21,
        onCtaClick: _v22,
        planTier: _v2,
        planName: _v12?.name,
        storageQuota: _v14
      }) : null
    };
  }], 0);
}