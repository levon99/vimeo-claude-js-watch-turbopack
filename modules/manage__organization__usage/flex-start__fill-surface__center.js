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
    _v17 = _v0.i(0);
  let _v18 = ({
      children: _v0,
      ..._v1
    }) => (0, _v1.jsx)(_v9.VStack, {
      alignSelf: "flex-start",
      backgroundColor: "fill-surface",
      borderRadius: "md",
      padding: "lg",
      width: "100%",
      justifyContent: "center",
      gap: "sm",
      ..._v1,
      children: _v0
    }),
    _v19 = ({
      children: _v0,
      title: _v1,
      tooltip: _v2,
      currentCount: _v3,
      totalCount: _v4
    }) => (0, _v1.jsxs)(_v9.VStack, {
      align: "flex-start",
      width: "100%",
      gap: "sm",
      children: [_v1 && (0, _v1.jsxs)(_v5.Flex, {
        justify: "space-between",
        width: "100%",
        children: [(0, _v1.jsxs)(_v13.HStack, {
          align: "center",
          children: [(0, _v1.jsx)(_v8.Text, {
            variant: "heading-xs",
            children: _v1
          }), _v2 && (0, _v1.jsx)(_v15.Tooltip, {
            placement: "top-start",
            label: _v2,
            shouldWrapChildren: !0,
            children: (0, _v1.jsx)(_v17.InfoCircle, {
              boxSize: "2xs",
              display: "block"
            })
          })]
        }), void 0 !== _v3 && void 0 !== _v4 && _v3 >= .9 * _v4 && (0, _v1.jsx)(_v4.Button, {
          size: "xs",
          variant: "secondary",
          onClick: () => window.open("https://vimeo.com/enterprise/contact-us", "_blank"),
          children: (0, _v12.translate)({
            singular: "Contact us",
            dictionary: {
              es: {
                singular: "Contáctenos"
              },
              "de-DE": {
                singular: "Kontaktieren Sie uns"
              },
              "fr-FR": {
                singular: "Contactez-nous"
              },
              "ja-JP": {
                singular: "お問い合わせ"
              },
              "ko-KR": {
                singular: "문의하기"
              },
              "pt-BR": {
                singular: "Entre em contato conosco"
              },
              "zh-CN": {
                singular: "联系我们"
              }
            }
          })
        })]
      }), (0, _v1.jsx)(_v13.HStack, {
        flexDirection: "column",
        width: "100%",
        alignItems: "flex-start",
        children: _v0
      })]
    }),
    _v20 = ({
      currentCount: _v0,
      totalCount: _v1
    }) => {
      let _v2 = _v0 && _v0 >= .9 * (_v1 || 0) ? "status-destructive-primary" : _v0 && _v0 >= .75 * (_v1 || 0) ? "status-caution-primary" : "fill-brand";
      return (0, _v1.jsx)(_v14.Progress, {
        value: _v1 && _v0 && _v1 > 0 ? _v0 / _v1 * 100 : 0,
        size: "sm",
        sx: {
          "& > div": {
            backgroundColor: _v2
          }
        }
      });
    },
    _v21 = ({
      currentCount: _v0,
      totalCount: _v1,
      currentCountText: _v2,
      totalCountText: _v3
    }) => {
      if (void 0 === _v0 || void 0 === _v1) return (0, _v1.jsx)(_v16.Skeleton, {
        borderRadius: "sm",
        height: (0, _v6.rem)(28),
        variant: "text",
        width: "100%"
      });
      let _v4 = _v2 || _v0.toLocaleString(),
        _v5 = _v3 || _v1.toLocaleString(),
        _v6 = _v0 >= .9 * _v1;
      return (0, _v1.jsxs)(_v5.Flex, {
        justify: "space-between",
        width: "100%",
        children: [(0, _v1.jsx)(_v8.Text, {
          variant: "body-md",
          color: "text-secondary",
          children: (0, _v12.translate)({
            singular: "{CURRENT_COUNT} of {TOTAL_COUNT}",
            replacements: {
              CURRENT_COUNT: () => (0, _v1.jsx)(_v8.Text, {
                as: "span",
                variant: "heading-md",
                color: "text-primary",
                children: _v4
              }, "current-count"),
              TOTAL_COUNT: () => (0, _v1.jsx)(_v8.Text, {
                as: "span",
                variant: "body-md",
                children: _v5
              }, "total-count")
            },
            dictionary: {
              es: {
                singular: "{CURRENT_COUNT} de {TOTAL_COUNT}"
              },
              "de-DE": {
                singular: "{CURRENT_COUNT} von {TOTAL_COUNT}"
              },
              "fr-FR": {
                singular: "{CURRENT_COUNT} sur {TOTAL_COUNT}"
              },
              "ja-JP": {
                singular: "{CURRENT_COUNT} / {TOTAL_COUNT}"
              },
              "ko-KR": {
                singular: "{CURRENT_COUNT}/{TOTAL_COUNT}"
              },
              "pt-BR": {
                singular: "{CURRENT_COUNT} de {TOTAL_COUNT}"
              },
              "zh-CN": {
                singular: "{CURRENT_COUNT} / {TOTAL_COUNT}"
              }
            }
          })
        }), _v6 && (0, _v1.jsxs)(_v13.HStack, {
          align: "center",
          gap: "xs",
          children: [(0, _v1.jsx)(_v17.InfoCircle, {
            boxSize: "2xs",
            color: "red.400"
          }), (0, _v1.jsx)(_v8.Text, {
            variant: "body-sm",
            children: (0, _v12.translate)({
              singular: "At limit",
              dictionary: {
                es: {
                  singular: "En el límite"
                },
                "de-DE": {
                  singular: "Am Limit"
                },
                "fr-FR": {
                  singular: "À la limite"
                },
                "ja-JP": {
                  singular: "上限に達しました"
                },
                "ko-KR": {
                  singular: "한도에 도달"
                },
                "pt-BR": {
                  singular: "No limite"
                },
                "zh-CN": {
                  singular: "已到上限"
                }
              }
            })
          })]
        })]
      });
    },
    _v22 = ({
      currentCount: _v0,
      totalCount: _v1,
      resetDate: _v2,
      ..._v3
    }) => {
      let _v4 = (0, _v12.translate)({
        singular: "Renews on {RESET_DATE}",
        replacements: {
          RESET_DATE: _v2 || "N/A"
        },
        dictionary: {
          es: {
            singular: "Se renovará el {RESET_DATE}"
          },
          "de-DE": {
            singular: "Verlängert sich {RESET_DATE}"
          },
          "fr-FR": {
            singular: "Renouvelle le {RESET_DATE}"
          },
          "ja-JP": {
            singular: "{RESET_DATE} に更新"
          },
          "ko-KR": {
            singular: "{RESET_DATE}에 갱신"
          },
          "pt-BR": {
            singular: "Renovação em {RESET_DATE}"
          },
          "zh-CN": {
            singular: "{RESET_DATE} 更新"
          }
        }
      });
      return (0, _v1.jsxs)(_v18, {
        "data-testid": "ai-credits-total-count",
        height: (0, _v6.rem)(120),
        ..._v3,
        children: [(0, _v1.jsx)(_v19, {
          title: (0, _v12.translate)({
            singular: "AI credits",
            dictionary: {
              es: {
                singular: "Créditos de IA"
              },
              "de-DE": {
                singular: "AI-Credits"
              },
              "fr-FR": {
                singular: "Crédits IA"
              },
              "ja-JP": {
                singular: "AIクレジット"
              },
              "ko-KR": {
                singular: "AI 크레딧"
              },
              "pt-BR": {
                singular: "Créditos de IA"
              },
              "zh-CN": {
                singular: "AI 积分"
              }
            }
          }),
          tooltip: _v4,
          currentCount: _v0,
          totalCount: _v1,
          children: (0, _v1.jsx)(_v21, {
            currentCount: _v0,
            totalCount: _v1
          })
        }), (0, _v1.jsx)(_v20, {
          currentCount: _v0,
          totalCount: _v1
        })]
      });
    };
  var _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0);
  let _v28 = ({
    areSomeAllocated: _v0
  }) => (0, _v1.jsx)(_v26.Thead, {
    height: (0, _v6.rem)(48),
    display: "flex",
    children: (0, _v1.jsxs)(_v27.Tr, {
      children: [(0, _v1.jsx)(_v25.Th, {
        children: (0, _v1.jsx)(_v8.Text, {
          variant: "heading-xs",
          color: "text-secondary",
          children: (0, _v12.translate)({
            singular: "Name",
            dictionary: {
              es: {
                singular: "Nombre"
              },
              "fr-FR": {
                singular: "Nom"
              },
              "ja-JP": {
                singular: "名前"
              },
              "ko-KR": {
                singular: "이름"
              },
              "pt-BR": {
                singular: "Nome"
              },
              "zh-CN": {
                singular: "姓名"
              }
            }
          })
        })
      }), (0, _v1.jsx)(_v25.Th, {
        textAlign: "end",
        children: (0, _v1.jsx)(_v8.Text, {
          variant: "heading-xs",
          color: "text-secondary",
          children: (0, _v12.translate)({
            singular: "AI credits used",
            dictionary: {
              es: {
                singular: "Créditos de IA utilizados"
              },
              "de-DE": {
                singular: "Verwendete AI-Credits"
              },
              "fr-FR": {
                singular: "Crédits IA utilisés"
              },
              "ja-JP": {
                singular: "使用済みのAIクレジット"
              },
              "ko-KR": {
                singular: "사용된 AI 크레딧"
              },
              "pt-BR": {
                singular: "Créditos de IA utilizados"
              },
              "zh-CN": {
                singular: "已使用 AI 积分"
              }
            }
          })
        })
      }), _v0 && (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v25.Th, {
          textAlign: "end",
          children: (0, _v1.jsx)(_v8.Text, {
            variant: "heading-xs",
            color: "text-secondary",
            children: (0, _v12.translate)({
              singular: "AI credits allocated",
              dictionary: {
                es: {
                  singular: "Créditos de IA asignados"
                },
                "de-DE": {
                  singular: "AI-Credits zugewiesen"
                },
                "fr-FR": {
                  singular: "Crédits d'IA attribués"
                },
                "ja-JP": {
                  singular: "AIクレジットが割り当てられました"
                },
                "ko-KR": {
                  singular: "할당된 AI 크레딧"
                },
                "pt-BR": {
                  singular: "Créditos de IA alocados"
                },
                "zh-CN": {
                  singular: "已分配 AI 积分"
                }
              }
            })
          })
        }), (0, _v1.jsx)(_v25.Th, {
          textAlign: "end",
          children: (0, _v1.jsx)(_v8.Text, {
            variant: "heading-xs",
            color: "text-secondary",
            children: (0, _v12.translate)({
              singular: "Percentage used",
              dictionary: {
                es: {
                  singular: "Porcentaje utilizado"
                },
                "de-DE": {
                  singular: "Prozentsatz verwendet"
                },
                "fr-FR": {
                  singular: "Pourcentage utilisé"
                },
                "ja-JP": {
                  singular: "使用率"
                },
                "ko-KR": {
                  singular: "사용된 비율"
                },
                "pt-BR": {
                  singular: "Porcentagem utilizada"
                },
                "zh-CN": {
                  singular: "已使用百分比"
                }
              }
            })
          })
        })]
      })]
    })
  });
  var _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0),
    _v32 = _v0.i(0);
  let _v33 = ({
      value: _v0
    }) => _v0 ? (0, _v1.jsx)(_v8.Text, {
      variant: "body-md",
      children: _v0
    }) : (0, _v1.jsx)(_v16.Skeleton, {
      borderRadius: "sm",
      height: "2rem",
      variant: "text"
    }),
    _v34 = ({
      workspace: _v0,
      areAllUnallocated: _v1
    }) => {
      var _v2;
      let _v3 = void 0 !== _v0.limit && Number.isFinite(_v0.limit) ? _v0.limit : null;
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v27.Tr, {
          children: (0, _v1.jsx)(_v31.Td, {
            paddingY: "0",
            children: (0, _v1.jsx)(_v30.Divider, {
              orientation: "horizontal",
              borderColor: "stroke"
            })
          })
        }), (0, _v1.jsxs)(_v27.Tr, {
          height: (0, _v6.rem)(64),
          children: [(0, _v1.jsx)(_v31.Td, {
            paddingY: "sm",
            children: (0, _v1.jsxs)(_v13.HStack, {
              children: [(0, _v1.jsx)(_v32.WorkspaceLogo, {
                borderRadius: "input-sm",
                boxSize: "sm",
                label: _v0.name || "",
                logoUrl: _v0.iconUrl
              }), (0, _v1.jsx)(_v33, {
                value: _v0.name
              })]
            })
          }), (0, _v1.jsx)(_v31.Td, {
            textAlign: "end",
            paddingY: "sm",
            children: (0, _v1.jsx)(_v33, {
              value: _v0.used?.toLocaleString()
            })
          }), !_v1 && (0, _v1.jsxs)(_v1.Fragment, {
            children: [(0, _v1.jsx)(_v31.Td, {
              textAlign: "end",
              paddingY: "sm",
              children: null !== _v3 && (0, _v1.jsx)(_v33, {
                value: _v3.toLocaleString()
              })
            }), (0, _v1.jsx)(_v31.Td, {
              textAlign: "end",
              paddingY: "sm",
              children: null !== _v3 && (0, _v1.jsxs)(_v29.Center, {
                children: [(0, _v1.jsx)(_v14.Progress, {
                  value: _v0.used && _v3 > 0 ? _v0.used / _v3 * 100 : 0,
                  size: "sm",
                  sx: {
                    "& > div": {
                      backgroundColor: (_v2 = _v0.used, "number" == typeof _v2 && "number" == typeof _v3 && Number.isFinite(_v2) && Number.isFinite(_v3) ? _v2 >= .9 * _v3 ? "status-destructive-primary" : _v2 >= .75 * _v3 ? "status-caution-primary" : "fill-brand" : "fill-brand")
                    }
                  }
                }), (0, _v1.jsx)(_v8.Text, {
                  marginLeft: "xl",
                  variant: "body-md",
                  children: _v0.used && _v3 > 0 ? `${(_v0.used / _v3 * 100).toFixed(2)}%` : "0%"
                })]
              })
            })]
          })]
        }, _v0.uri)]
      });
    },
    _v35 = ({
      workspacesList: _v0
    }) => {
      let _v1 = _v0.some(_v0 => Number.isFinite(_v0.limit)),
        _v2 = _v0.every(_v0 => !Number.isFinite(_v0.limit));
      return (0, _v1.jsx)(_v9.VStack, {
        width: "100%",
        "data-testid": "ai-credits-workspace-list",
        children: (0, _v1.jsxs)(_v23.Table, {
          variant: "unstyled",
          backgroundColor: "fill-surface",
          borderRadius: "md",
          padding: "md",
          sx: {
            "& th": {
              fontVariantNumeric: "normal"
            }
          },
          children: [(0, _v1.jsx)(_v28, {
            areSomeAllocated: _v1
          }), (0, _v1.jsx)(_v24.Tbody, {
            children: _v0.map((_v0, _v1) => (0, _v1.jsx)(_v34, {
              workspace: _v0,
              areAllUnallocated: _v2
            }, `${_v0.uri}-${_v1}`))
          })]
        })
      });
    };
  var _v36 = _v0.i(0);
  let _v37 = ({
      currentCount: _v0,
      totalCount: _v1,
      ..._v2
    }) => {
      let _v3 = (0, _v36.bytesToSize)(_v0 || 0, 1),
        _v4 = (0, _v36.bytesToSize)(_v1 || 0, 1);
      return (0, _v1.jsxs)(_v18, {
        "data-testid": "storage-total-count",
        ..._v2,
        children: [(0, _v1.jsx)(_v19, {
          title: (0, _v12.translate)({
            singular: "Storage",
            dictionary: {
              es: {
                singular: "Almacenamiento:"
              },
              "de-DE": {
                singular: "Speicherplatz"
              },
              "fr-FR": {
                singular: "Stockage"
              },
              "ja-JP": {
                singular: "ストレージ"
              },
              "ko-KR": {
                singular: "저장 공간"
              },
              "pt-BR": {
                singular: "Armazenamento"
              },
              "zh-CN": {
                singular: "存储"
              }
            }
          }),
          currentCount: _v0,
          totalCount: _v1,
          children: (0, _v1.jsx)(_v21, {
            currentCount: _v0,
            totalCount: _v1,
            currentCountText: _v3,
            totalCountText: _v4
          })
        }), (0, _v1.jsx)(_v20, {
          currentCount: _v0,
          totalCount: _v1
        })]
      });
    },
    _v38 = () => (0, _v1.jsx)(_v26.Thead, {
      height: (0, _v6.rem)(48),
      display: "flex",
      children: (0, _v1.jsxs)(_v27.Tr, {
        children: [(0, _v1.jsx)(_v25.Th, {
          children: (0, _v1.jsx)(_v8.Text, {
            variant: "heading-xs",
            color: "text-secondary",
            children: (0, _v12.translate)({
              singular: "Name",
              dictionary: {
                es: {
                  singular: "Nombre"
                },
                "fr-FR": {
                  singular: "Nom"
                },
                "ja-JP": {
                  singular: "名前"
                },
                "ko-KR": {
                  singular: "이름"
                },
                "pt-BR": {
                  singular: "Nome"
                },
                "zh-CN": {
                  singular: "姓名"
                }
              }
            })
          })
        }), (0, _v1.jsx)(_v25.Th, {
          textAlign: "end",
          children: (0, _v1.jsx)(_v8.Text, {
            variant: "heading-xs",
            color: "text-secondary",
            children: (0, _v12.translate)({
              singular: "Storage used",
              dictionary: {
                es: {
                  singular: "Almacenamiento utilizado"
                },
                "de-DE": {
                  singular: "Verwendeter Speicherplatz"
                },
                "fr-FR": {
                  singular: "Stockage utilisé"
                },
                "ja-JP": {
                  singular: "使用済みストレージ"
                },
                "ko-KR": {
                  singular: "사용된 저장 공간"
                },
                "pt-BR": {
                  singular: "Armazenamento usado"
                },
                "zh-CN": {
                  singular: "已用存储空间"
                }
              }
            })
          })
        })]
      })
    }),
    _v39 = ({
      value: _v0
    }) => void 0 !== _v0 ? (0, _v1.jsx)(_v8.Text, {
      variant: "body-md",
      children: _v0.toLocaleString()
    }) : (0, _v1.jsx)(_v16.Skeleton, {
      borderRadius: "sm",
      height: "2rem",
      variant: "text"
    }),
    _v40 = ({
      workspace: _v0
    }) => {
      let _v1 = void 0 !== _v0.used && Number.isFinite(_v0?.used) ? (0, _v36.bytesToSize)(_v0.used, 1) : void 0;
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v27.Tr, {
          children: (0, _v1.jsx)(_v31.Td, {
            paddingY: "0",
            children: (0, _v1.jsx)(_v30.Divider, {
              orientation: "horizontal",
              borderColor: "stroke"
            })
          })
        }), (0, _v1.jsxs)(_v27.Tr, {
          height: (0, _v6.rem)(64),
          children: [(0, _v1.jsx)(_v31.Td, {
            paddingY: "sm",
            children: (0, _v1.jsxs)(_v13.HStack, {
              children: [(0, _v1.jsx)(_v32.WorkspaceLogo, {
                borderRadius: "input-sm",
                boxSize: "sm",
                label: _v0.name || "",
                logoUrl: _v0.iconUrl
              }), (0, _v1.jsx)(_v39, {
                value: _v0.name
              })]
            })
          }), (0, _v1.jsx)(_v31.Td, {
            textAlign: "end",
            paddingY: "sm",
            children: (0, _v1.jsx)(_v39, {
              value: _v1
            })
          })]
        }, _v0.uri)]
      });
    },
    _v41 = ({
      workspacesList: _v0
    }) => (0, _v1.jsx)(_v9.VStack, {
      width: "100%",
      "data-testid": "storage-workspace-list",
      children: (0, _v1.jsxs)(_v23.Table, {
        variant: "unstyled",
        backgroundColor: "fill-surface",
        borderRadius: "md",
        padding: "sm",
        sx: {
          "& th": {
            fontVariantNumeric: "normal"
          }
        },
        children: [(0, _v1.jsx)(_v38, {}), (0, _v1.jsx)(_v24.Tbody, {
          children: _v0.map((_v0, _v1) => (0, _v1.jsx)(_v40, {
            workspace: _v0
          }, `${_v0.uri}-${_v1}`))
        })]
      })
    });
  var _v42 = _v0.i(0),
    _v43 = _v0.i(0);
  let _v44 = () => {
    let _v0 = (0, _v12.translate)({
      singular: "Usage limits for your organization. To increase your limits, please reach out to your Account Manager or {CONTACT_US}contact us{/CONTACT_US}.",
      replacements: {
        CONTACT_US: _v0 => (0, _v1.jsx)(_v43.Link, {
          href: "https://vimeo.com/enterprise/contact-us",
          variant: "brand",
          letterSpacing: "body-md",
          lineHeight: "body-md",
          fontSize: "body-md",
          target: "_blank",
          children: _v0
        }, "contact-support")
      },
      dictionary: {
        es: {
          singular: "Límites de uso para su organización. Para aumentar sus límites, comuníquese con su gerente de la cuenta o {CONTACT_US}contáctenos{/CONTACT_US}."
        },
        "de-DE": {
          singular: "Nutzungsbeschränkungen für Ihre Organisation. Um Ihre Limits zu erhöhen, wenden Sie sich bitte an Ihre Kundenbetreuende oder {CONTACT_US}kontaktieren Sie uns{/CONTACT_US}."
        },
        "fr-FR": {
          singular: "Limites d'utilisation pour votre organisation. Pour augmenter vos limites, veuillez contacter votre responsable de compte ou {CONTACT_US}nous contacter{/CONTACT_US}."
        },
        "ja-JP": {
          singular: "組織の使用制限。制限を引き上げるには、アカウントマネージャーに連絡するか、 {CONTACT_US}こちらにお問い合わせ{/CONTACT_US}ください。"
        },
        "ko-KR": {
          singular: "조직의 사용 한도. 한도를 늘리려면 계정 관리자에게 문의하거나 {CONTACT_US}문의하기{/CONTACT_US}를 클릭하세요."
        },
        "pt-BR": {
          singular: "Limites de uso da sua organização. Para aumentar seus limites, entre em contato com o gerente da conta ou {CONTACT_US}fale conosco{/CONTACT_US}."
        },
        "zh-CN": {
          singular: "您所在组织的使用限制。要提高您的限额，请联系您的客户经理或{CONTACT_US}联系我们{/CONTACT_US}。"
        }
      }
    });
    return (0, _v1.jsx)(_v1.Fragment, {
      children: (0, _v1.jsx)(_v8.Text, {
        variant: "body-md",
        size: "2",
        alignSelf: "start",
        children: _v0
      })
    });
  };
  var _v45 = _v0.i(0),
    _v46 = _v0.i(0),
    _v47 = _v0.i(0);
  let _v48 = ({
    organizationUuid: _v0
  }) => {
    let [_v1, _v2] = (0, _v2.useState)(_v42.USAGE_PAGES.AI_CREDITS),
      {
        areMoreWorkspaceResultsAvailable: _v3,
        billingStartDate: _v4,
        billingEndDate: _v5,
        loadNextWorkspaceResults: _v6,
        totalWorkspaceResults: _v7,
        workspacesList: _v8,
        totalOrganizationUsage: _v9
      } = (0, _v46.useOrganizationUsage)({
        organizationUuid: _v0
      }),
      _v10 = _v1 === _v42.USAGE_PAGES.AI_CREDITS,
      _v11 = _v1 === _v42.USAGE_PAGES.STORAGE,
      _v12 = (0, _v11.translate)({
        singular: "Current usage term: {FROM} - {TO}",
        replacements: {
          FROM: _v4,
          TO: _v5
        },
        dictionary: {
          es: {
            singular: "Término de uso actual: {FROM} - {TO}"
          },
          "de-DE": {
            singular: "Aktueller Nutzungszeitraum: {FROM} – {TO}"
          },
          "fr-FR": {
            singular: "Période d'utilisation actuelle : {FROM} - {TO}"
          },
          "ja-JP": {
            singular: "現在の使用期間：{FROM}～{TO}"
          },
          "ko-KR": {
            singular: "현재 사용 기간: {FROM} ~ {TO}"
          },
          "pt-BR": {
            singular: "Termo de uso atual: {FROM} - {TO}"
          },
          "zh-CN": {
            singular: "当前使用期限：{FROM} - {TO}"
          }
        }
      }),
      _v13 = (0, _v11.translate)({
        singular: "Showing {COUNT} of {TOTAL}",
        replacements: {
          COUNT: _v8[_v1]?.length ?? 0,
          TOTAL: _v7
        },
        dictionary: {
          es: {
            singular: "Mostrando {COUNT} de {TOTAL}"
          },
          "de-DE": {
            singular: "Zeigt {COUNT} von {TOTAL}"
          },
          "fr-FR": {
            singular: "Affichage de {COUNT} sur {TOTAL}"
          },
          "ja-JP": {
            singular: "全{TOTAL}件中{COUNT}件を表示中"
          },
          "ko-KR": {
            singular: "{COUNT}/{TOTAL}개 표시"
          },
          "pt-BR": {
            singular: "Mostrando {COUNT} de {TOTAL}"
          },
          "zh-CN": {
            singular: "正在显示 {COUNT} 个，共 {TOTAL} 个"
          }
        }
      });
    return (0, _v1.jsxs)(_v9.VStack, {
      paddingTop: "lg",
      paddingX: "lg",
      children: [(0, _v1.jsx)(_v8.Text, {
        variant: "heading-lg",
        fontWeight: "medium",
        alignSelf: "flex-start",
        children: (0, _v11.translate)({
          singular: "Usage",
          dictionary: {
            es: {
              singular: "Uso"
            },
            "de-DE": {
              singular: "Nutzung"
            },
            "fr-FR": {
              singular: "Utilisation"
            },
            "ja-JP": {
              singular: "使用状況"
            },
            "ko-KR": {
              singular: "사용 내역"
            },
            "pt-BR": {
              singular: "Uso"
            },
            "zh-CN": {
              singular: "使用方法"
            }
          }
        })
      }), (0, _v1.jsx)(_v44, {}), (0, _v1.jsx)(_v8.Text, {
        alignSelf: "flex-start",
        variant: "heading-xs",
        marginBottom: "md",
        children: _v12
      }), (0, _v1.jsxs)(_v5.Flex, {
        "data-testid": "organization-usage-container",
        width: "100%",
        gap: "lg",
        flexDirection: {
          base: "column",
          md: "row"
        },
        marginBottom: "md",
        children: [(0, _v1.jsx)(_v22, {
          currentCount: _v9[_v42.USAGE_PAGES.AI_CREDITS]?.currentCount,
          resetDate: _v9[_v42.USAGE_PAGES.AI_CREDITS]?.resetDate,
          totalCount: _v9[_v42.USAGE_PAGES.AI_CREDITS]?.totalCount
        }), (0, _v1.jsx)(_v37, {
          currentCount: _v9[_v42.USAGE_PAGES.STORAGE]?.currentCount,
          totalCount: _v9[_v42.USAGE_PAGES.STORAGE]?.totalCount
        })]
      }), (0, _v1.jsxs)(_v5.Flex, {
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        marginBottom: "md",
        children: [(0, _v1.jsx)(_v8.Text, {
          variant: "heading-md",
          children: "Workspaces"
        }), (0, _v1.jsxs)(_v5.Flex, {
          alignItems: "center",
          gap: "sm",
          children: [(0, _v1.jsx)(_v8.Text, {
            variant: "heading-xs",
            children: "Usage type"
          }), (0, _v1.jsx)(_v3.Box, {
            width: (0, _v6.rem)(130),
            children: (0, _v1.jsx)(_v7.Select, {
              items: [{
                label: (0, _v11.translate)({
                  singular: "AI credits",
                  dictionary: {
                    es: {
                      singular: "Créditos de IA"
                    },
                    "de-DE": {
                      singular: "AI-Credits"
                    },
                    "fr-FR": {
                      singular: "Crédits IA"
                    },
                    "ja-JP": {
                      singular: "AIクレジット"
                    },
                    "ko-KR": {
                      singular: "AI 크레딧"
                    },
                    "pt-BR": {
                      singular: "Créditos de IA"
                    },
                    "zh-CN": {
                      singular: "AI 积分"
                    }
                  }
                }),
                value: _v42.USAGE_PAGES.AI_CREDITS
              }, {
                label: (0, _v11.translate)({
                  singular: "Storage",
                  dictionary: {
                    es: {
                      singular: "Almacenamiento:"
                    },
                    "de-DE": {
                      singular: "Speicherplatz"
                    },
                    "fr-FR": {
                      singular: "Stockage"
                    },
                    "ja-JP": {
                      singular: "ストレージ"
                    },
                    "ko-KR": {
                      singular: "저장 공간"
                    },
                    "pt-BR": {
                      singular: "Armazenamento"
                    },
                    "zh-CN": {
                      singular: "存储"
                    }
                  }
                }),
                value: _v42.USAGE_PAGES.STORAGE
              }],
              placeholder: (0, _v11.translate)({
                singular: "AI credits",
                dictionary: {
                  es: {
                    singular: "Créditos de IA"
                  },
                  "de-DE": {
                    singular: "AI-Credits"
                  },
                  "fr-FR": {
                    singular: "Crédits IA"
                  },
                  "ja-JP": {
                    singular: "AIクレジット"
                  },
                  "ko-KR": {
                    singular: "AI 크레딧"
                  },
                  "pt-BR": {
                    singular: "Créditos de IA"
                  },
                  "zh-CN": {
                    singular: "AI 积分"
                  }
                }
              }),
              defaultValue: [_v42.USAGE_PAGES.AI_CREDITS],
              onValueChange: _v0 => _v2(_v0.value[0]),
              size: "sm",
              withPortal: !0,
              variant: "withCheck"
            })
          })]
        })]
      }), _v10 && (0, _v1.jsx)(_v35, {
        workspacesList: _v8[_v42.USAGE_PAGES.AI_CREDITS]
      }), _v11 && (0, _v1.jsx)(_v41, {
        workspacesList: _v8[_v42.USAGE_PAGES.STORAGE]
      }), (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v8.Text, {
          variant: "body-md",
          marginBottom: "md",
          color: "text-tertiary",
          marginTop: "md",
          children: _v13
        }), _v3 && (0, _v1.jsx)(_v4.Button, {
          variant: "tertiary",
          onClick: _v6,
          children: (0, _v11.translate)({
            singular: "Load more",
            dictionary: {
              es: {
                singular: "Cargar más"
              },
              "de-DE": {
                singular: "Mehr laden"
              },
              "fr-FR": {
                singular: "Afficher plus"
              },
              "ja-JP": {
                singular: "もっとロードする"
              },
              "ko-KR": {
                singular: "동영상 더 보기"
              },
              "pt-BR": {
                singular: "Carregar mais"
              },
              "zh-CN": {
                singular: "加载更多"
              }
            }
          })
        })]
      })]
    });
  };
  (0, _v10.withPageSetup)(_v47.getOrgAndWspUuidServerSideProps, {
    requireLogin: !0,
    inlineViewer: !0,
    noIndex: !0
  }), _v48.getLayout = (_v0, _v1) => (0, _v45.getLayout)(_v0, _v1), _v0.s(["__N_SSP", 0, !0, "default", 0, _v48], 0);
}