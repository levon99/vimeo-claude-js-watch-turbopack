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
    _v21 = _v0.i(0);
  async function _v22({
    baseUrl: _v0,
    select: _v1,
    where: {
      userId: _v2
    },
    query: _v3,
    ..._v4
  }) {
    return (0, _v20.measureLatency)("getUserIntegrations", "GET", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/integrations?${(0, _v21.searchQueryString)(_v3)}&fields=${_v1.map(_v21.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "GET"
      });
      if (!_v0.ok) throw new _v21.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v21.deepCamelCase)(_v1);
    });
  }
  var _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0);
  function _v28(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v27.useGctlConfig)();
    return (0, _v23.default)(_v2 ? `/users/${_v2.where.userId}/integrations${(0, _v25.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v22({
      ..._v2,
      headers: {
        ..._v2.headers,
        "Content-Type": "application/json",
        Authorization: _v4 ? `jwt ${_v4}` : "",
        "Vimeo-Page": `${_v5}`,
        "Accept-Language": _v6 ?? "en"
      },
      baseUrl: _v3
    }) : null, _v1);
  }
  "true" === _v19.default.env.STORYBOOK && (0, _v25.assignMswData)(_v28, {
    endpoint: "/users/:userId/integrations",
    method: "GET"
  }), "true" === _v19.default.env.STORYBOOK && (0, _v25.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v24.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v27.useGctlConfig)(),
      [_v5, _v6] = (0, _v25.useInternalState)();
    return [(0, _v5.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/integrations${(0, _v25.serializeQuery)(_v0)}`, _v22({
          ..._v0,
          baseUrl: _v1,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v2 ? `jwt ${_v2}` : "",
            "Vimeo-Page": `${_v3}`,
            "Accept-Language": _v4 ?? "en"
          }
        }));
        _v6({
          type: "SUCCESS",
          payload: _v0
        });
      } catch (_v0) {
        _v6({
          type: "FAILURE",
          payload: _v0
        });
      }
    }, [_v1, _v3, _v2, _v4, _v6]), _v5];
  }, {
    endpoint: "/users/:userId/integrations",
    method: "GET"
  }), "true" === _v19.default.env.STORYBOOK && (0, _v25.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v27.useGctlConfig)();
    return (0, _v26.default)((_v0, _v1) => {
      if (null === _v2 || _v1 && !_v1.paging.next) return null;
      let {
          perPage: _v2 = 25,
          page: _v3,
          ..._v4
        } = _v2.query ?? {},
        _v5 = _v2.select.join(","),
        _v6 = Object.entries(_v4 ?? {}).filter(([, _v0]) => void 0 !== _v0).map(([_v0, _v1]) => `${_v0}=${_v1}`).join("&");
      return [`/users/${_v2.where.userId}/integrations?page=${_v0 + 1}&perPage=${_v2}&fields=${_v5}&${_v6}`, _v0];
    }, null !== _v2 ? ([_v0, _v1]) => _v22({
      ..._v2,
      baseUrl: _v3,
      headers: {
        ..._v2.headers,
        "Content-Type": "application/json",
        Authorization: _v4 ? `jwt ${_v4}` : "",
        "Vimeo-Page": `${_v5}`,
        "Accept-Language": _v6 ?? "en"
      },
      query: {
        ..._v2.query,
        page: _v1 + 1
      }
    }) : null, _v1);
  }, {
    endpoint: "/users/:userId/integrations",
    method: "GET"
  });
  var _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0),
    _v32 = _v0.i(0),
    _v33 = _v0.i(0),
    _v34 = _v0.i(0);
  let _v35 = () => (0, _v1.jsxs)(_v33.Card, {
    padding: "lg",
    background: "surface",
    children: [(0, _v1.jsxs)(_v8.Flex, {
      alignItems: "center",
      gap: "sm",
      children: [(0, _v1.jsx)(_v32.Skeleton, {
        variant: "circle"
      }), (0, _v1.jsx)(_v32.Skeleton, {
        variant: "text",
        width: "50%"
      })]
    }), (0, _v1.jsx)(_v32.Skeleton, {
      variant: "text",
      margin: "sm"
    }), (0, _v1.jsx)(_v32.Skeleton, {
      variant: "text",
      margin: "sm"
    }), (0, _v1.jsx)(_v32.Skeleton, {
      variant: "text",
      margin: "sm",
      width: "50%"
    })]
  });
  function _v36() {
    return (0, _v1.jsx)(_v7.Box, {
      children: (0, _v1.jsxs)(_v34.SimpleGrid, {
        minChildWidth: (0, _v15.rem)(320),
        gap: "lg",
        children: [(0, _v1.jsx)(_v35, {}), (0, _v1.jsx)(_v35, {}), (0, _v1.jsx)(_v35, {}), (0, _v1.jsx)(_v35, {}), (0, _v1.jsx)(_v35, {}), (0, _v1.jsx)(_v35, {}), (0, _v1.jsx)(_v35, {})]
      })
    });
  }
  function _v37() {
    return (0, _v1.jsx)(_v8.Flex, {
      flexWrap: "nowrap",
      overflow: "scroll",
      gap: 2,
      children: Array.from({
        length: 8
      }).map((_v0, _v1) => (0, _v1.jsx)(_v32.Skeleton, {
        variant: "text",
        height: (0, _v15.rem)(32),
        width: (0, _v15.rem)(120)
      }, _v1))
    });
  }
  function _v38() {
    return (0, _v1.jsxs)(_v7.Box, {
      m: "xl",
      children: [(0, _v1.jsx)(_v32.Skeleton, {
        variant: "text",
        height: (0, _v15.rem)(36),
        width: (0, _v15.rem)(160),
        marginBottom: "lg"
      }), (0, _v1.jsxs)(_v8.Flex, {
        children: [(0, _v1.jsx)(_v32.Skeleton, {
          variant: "text",
          height: (0, _v15.rem)(32),
          width: (0, _v15.rem)(240),
          marginBottom: "lg",
          marginRight: "lg"
        }), (0, _v1.jsx)(_v37, {})]
      }), (0, _v1.jsx)(_v36, {})]
    });
  }
  function _v39() {
    return (0, _v1.jsxs)(_v8.Flex, {
      direction: "column",
      alignItems: "center",
      children: [(0, _v1.jsx)(_v16.AddBlocks, {
        boxSize: "2xl"
      }), (0, _v1.jsx)(_v10.Text, {
        as: "h1",
        variant: "heading-xl",
        my: "md",
        children: (0, _v29.translate)({
          singular: "It’s empty in here",
          dictionary: {
            es: {
              singular: "No hay nada aquí"
            },
            "de-DE": {
              singular: "Hier ist nichts zu finden"
            },
            "fr-FR": {
              singular: "Il n'y a rien par ici"
            },
            "ja-JP": {
              singular: "ここには何もありません"
            },
            "ko-KR": {
              singular: "콘텐츠가 없습니다."
            },
            "pt-BR": {
              singular: "Não há nada aqui"
            },
            "zh-CN": {
              singular: "这里空荡荡的"
            }
          }
        })
      }), (0, _v1.jsx)(_v10.Text, {
        variant: "body-lg",
        color: "text-secondary",
        children: (0, _v29.translate)({
          singular: "Connect new integrations in the Discover tab",
          dictionary: {
            es: {
              singular: "Conecte nuevas integraciones en la pestaña Descubrir"
            },
            "de-DE": {
              singular: "Verbinden Sie neue Integrationen im Tab „Entdecken“"
            },
            "fr-FR": {
              singular: "Connectez de nouvelles intégrations dans l'onglet Découvrir"
            },
            "ja-JP": {
              singular: "「発見」タブで新しいインテグレーションを接続"
            },
            "ko-KR": {
              singular: "발견하기 탭에서 새 통합 기능을 연결하세요."
            },
            "pt-BR": {
              singular: "Conecte novas integrações na aba Descobrir"
            },
            "zh-CN": {
              singular: "在“发现”选项卡中连接新集成"
            }
          }
        })
      })]
    });
  }
  var _v40 = _v0.i(0),
    _v41 = _v0.i(0),
    _v42 = _v0.i(0),
    _v43 = _v0.i(0),
    _v44 = _v0.i(0),
    _v45 = _v0.i(0);
  let _v46 = _v0 => (0, _v1.jsx)(_v45.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsx)("path", {
      d: "M12 14a1 1 0 0 0 1-1V7a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1Zm0 4a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z",
      fill: "currentColor"
    })
  });
  var _v47 = _v0.i(0),
    _v48 = _v0.i(0),
    _v49 = _v0.i(0),
    _v50 = _v0.i(0);
  function _v51({
    apps: _v0
  }) {
    let {
        canConnect: _v1,
        hasPermissionToUpsell: _v2
      } = (0, _v48.useNeedUpsell)(),
      _v3 = (0, _v15.rem)(320);
    return (0, _v1.jsx)(_v7.Box, {
      children: (0, _v1.jsx)(_v14.Grid, {
        templateColumns: {
          base: `repeat(auto-fit, minmax(${_v3}, 1fr))`,
          md: `repeat(auto-fit, minmax(${_v3}, 0.5fr))`,
          lg: `repeat(auto-fit, minmax(${_v3}, ${_v0.length < 3 ? "0.3fr" : "0.5fr"}))`
        },
        gap: "lg",
        children: _v0.map((_v0, _v1) => (0, _v1.jsx)(_v52, {
          app: _v0,
          canConnect: _v1,
          hasPermissionToUpsell: _v2
        }, _v1))
      })
    });
  }
  let _v52 = ({
    app: _v0,
    canConnect: _v1,
    hasPermissionToUpsell: _v2
  }) => {
    let _v3 = (0, _v2.useRouter)(),
      {
        sendAppClickEvent: _v4
      } = (0, _v49.useTracking)(),
      _v5 = _v0.uri.split("/").pop(),
      _v6 = _v5 ? _v47.APP_CONFIG[_v5]?.upsell : null,
      _v7 = _v0.connectionStatus === _v3.CONNECTION_STATUS.CONNECTED,
      _v8 = !_v7 && !!_v6 && !_v1(_v6),
      {
        sendUpsellEvent: _v9
      } = (0, _v49.useTracking)();
    (0, _v5.useEffect)(() => {
      _v8 && _v9({
        eventName: "vimeo.upsell_trigger_impression",
        integrationName: _v0.displayName,
        copy: "Upgrade",
        isAction: !1
      });
    }, [_v0.displayName, _v9, _v8]);
    let _v10 = _v7 ? `/integrations-center/${_v5}/details/manage` : `/integrations-center/${_v5}/details`;
    return (0, _v1.jsxs)(_v33.Card, {
      onClick: () => void (_v4({
        appName: _v0.displayName,
        isConnected: _v7
      }), window.location.href = _v10),
      padding: "lg",
      cursor: "pointer",
      minW: "auto",
      background: "surface",
      _hover: {
        background: "fill-component-hover"
      },
      children: [(0, _v1.jsxs)(_v8.Flex, {
        alignItems: "center",
        gap: "3",
        children: [(0, _v1.jsx)(_v41.Image, {
          src: _v0.thumbnailUrl || _v3.DEFAULT_THUMBNAIL_URL,
          alt: "icon",
          boxSize: "100%",
          width: "sm",
          height: "sm"
        }), (0, _v1.jsx)(_v10.Text, {
          variant: "heading-sm",
          flexGrow: 1,
          children: (0, _v1.jsx)(_v40.Link, {
            href: _v10,
            variant: "primary",
            color: "text-primary !important",
            children: _v0.displayName
          })
        }), _v7 && (0, _v1.jsx)(_v43.Tooltip, {
          label: (0, _v29.translate)({
            singular: "Connected",
            dictionary: {
              es: {
                singular: "Conectado"
              },
              "de-DE": {
                singular: "Verknüpft"
              },
              "fr-FR": {
                singular: "Connecté"
              },
              "ja-JP": {
                singular: "接続済み"
              },
              "ko-KR": {
                singular: "연결됨"
              },
              "pt-BR": {
                singular: "Conectado"
              },
              "zh-CN": {
                singular: "已关联"
              }
            }
          }),
          placement: "top",
          shouldWrapChildren: !0,
          children: (0, _v1.jsx)(_v44.CheckSmall, {
            height: "xs",
            width: "xs",
            borderRadius: "round",
            backgroundColor: "text-primary",
            color: "surface",
            gap: "lg"
          })
        }), (_v0.connectionStatus === _v3.CONNECTION_STATUS.RECONNECT || _v0.connectionStatus === _v3.CONNECTION_STATUS.ERROR) && (0, _v1.jsx)(_v43.Tooltip, {
          label: (0, _v29.translate)({
            singular: "Reconnect",
            dictionary: {
              es: {
                singular: "Reconectar"
              },
              "de-DE": {
                singular: "Erneut verbinden"
              },
              "fr-FR": {
                singular: "Reconnecter"
              },
              "ja-JP": {
                singular: "再接続"
              },
              "ko-KR": {
                singular: "다시 연결"
              },
              "pt-BR": {
                singular: "Reconectar"
              },
              "zh-CN": {
                singular: "重新连接"
              }
            }
          }),
          placement: "top",
          shouldWrapChildren: !0,
          children: (0, _v1.jsx)(_v46, {
            height: "xs",
            width: "xs",
            backgroundColor: "orange.500",
            borderRadius: "round",
            color: "surface",
            gap: "lg"
          })
        }), _v8 && (0, _v1.jsx)(_v43.Tooltip, {
          label: (0, _v29.translate)({
            singular: "Only owners can upgrade to connect",
            dictionary: {
              es: {
                singular: "Solo los propietarios pueden cambiar de plan para conectarse"
              },
              "de-DE": {
                singular: "Nur Inhaber können ein Upgrade durchführen, um sich zu verbinden."
              },
              "fr-FR": {
                singular: "Seuls les propriétaires peuvent effectuer une mise à niveau pour se connecter"
              },
              "ja-JP": {
                singular: "所有者のみがアップグレードして接続することができます"
              },
              "ko-KR": {
                singular: "소유자만 업그레이드하여 연결할 수 있습니다."
              },
              "pt-BR": {
                singular: "Somente os proprietários podem fazer upgrade para conectar"
              },
              "zh-CN": {
                singular: "只有所有者可以升级以进行连接"
              }
            }
          }),
          isDisabled: _v2,
          children: (0, _v1.jsx)(_v42.Badge, {
            variant: "upgrade",
            size: "sm",
            width: "auto",
            onClick: () => {
              _v2 && (_v9({
                eventName: "vimeo.trigger_upsell",
                integrationName: _v0.displayName,
                copy: "Upgrade",
                isAction: !0
              }), _v3.push(_v3.EXTERNAL_ROUTES.UPSELL));
            },
            children: "Upgrade"
          })
        })]
      }), (0, _v1.jsx)(_v10.Text, {
        variant: "body-md",
        color: "text-secondary",
        marginTop: 3,
        children: (0, _v50.parseHTMLEntities)(_v0.description || "")
      })]
    });
  };
  var _v53 = _v0.i(0),
    _v54 = _v0.i(0),
    _v55 = _v0.i(0),
    _v56 = _v0.i(0),
    _v57 = _v0.i(0);
  let _v58 = _v0 => {
      let [_v1, _v2] = (0, _v5.useState)(!1),
        _v3 = (0, _v5.useRef)(null);
      return (0, _v5.useEffect)(() => {
        let _v0 = new IntersectionObserver(([_v0]) => {
            _v2(_v0.isIntersecting);
          }, _v0),
          _v1 = _v3.current;
        return _v1 && _v0.observe(_v1), () => {
          _v1 && _v0.unobserve(_v1);
        };
      }, [_v3, _v0]), [_v3, _v1];
    },
    _v59 = [{
      value: "All",
      text: (0, _v29.translate)({
        singular: "All",
        dictionary: {
          es: {
            singular: "Todos"
          },
          "de-DE": {
            singular: "Alle"
          },
          "fr-FR": {
            singular: "Tout"
          },
          "ja-JP": {
            singular: "すべて"
          },
          "ko-KR": {
            singular: "모두"
          },
          "pt-BR": {
            singular: "Tudo"
          },
          "zh-CN": {
            singular: "全部"
          }
        }
      })
    }, {
      value: "Cloud Storage",
      text: (0, _v29.translate)({
        singular: "Cloud Storage",
        dictionary: {
          es: {
            singular: "Almacenamiento en la nube"
          },
          "de-DE": {
            singular: "Cloud-Speicher"
          },
          "fr-FR": {
            singular: "Stockage dans le cloud"
          },
          "ja-JP": {
            singular: "クラウドストレージ"
          },
          "ko-KR": {
            singular: "클라우드 저장 공간"
          },
          "pt-BR": {
            singular: "Armazenamento em nuvem"
          },
          "zh-CN": {
            singular: "云存储"
          }
        }
      })
    }, {
      value: "Communications",
      text: (0, _v29.translate)({
        singular: "Communications",
        dictionary: {
          es: {
            singular: "Comunicaciones"
          },
          "de-DE": {
            singular: "Kommunikation"
          },
          "ja-JP": {
            singular: "コミュニケーション"
          },
          "ko-KR": {
            singular: "커뮤니케이션"
          },
          "pt-BR": {
            singular: "Comunicações"
          },
          "zh-CN": {
            singular: "通信"
          }
        }
      })
    }, {
      value: "Ecommerce",
      text: (0, _v29.translate)({
        singular: "Ecommerce",
        dictionary: {
          es: {
            singular: "Comercio electrónico"
          },
          "de-DE": {
            singular: "E-Commerce"
          },
          "fr-FR": {
            singular: "Commerce électronique"
          },
          "ja-JP": {
            singular: "eコマース"
          },
          "ko-KR": {
            singular: "이커머스"
          },
          "pt-BR": {
            singular: "Comércio eletrônico"
          },
          "zh-CN": {
            singular: "电子商务"
          }
        }
      })
    }, {
      value: "Editing",
      text: (0, _v29.translate)({
        singular: "Editing",
        dictionary: {
          es: {
            singular: "Edición"
          },
          "de-DE": {
            singular: "Bearbeiten"
          },
          "fr-FR": {
            singular: "Montage"
          },
          "ja-JP": {
            singular: "編集"
          },
          "ko-KR": {
            singular: "편집"
          },
          "pt-BR": {
            singular: "Edição"
          },
          "zh-CN": {
            singular: "编辑"
          }
        }
      })
    }, {
      value: "Live Streaming",
      text: (0, _v29.translate)({
        singular: "Live Streaming",
        dictionary: {
          es: {
            singular: "Transmisión en vivo"
          },
          "de-DE": {
            singular: "Livestreaming"
          },
          "fr-FR": {
            singular: "Streaming en direct"
          },
          "ja-JP": {
            singular: "ライブストリーミング"
          },
          "ko-KR": {
            singular: "라이브 스트리밍"
          },
          "pt-BR": {
            singular: "Transmissão ao vivo"
          },
          "zh-CN": {
            singular: "直播"
          }
        }
      })
    }, {
      value: "Marketing",
      text: (0, _v29.translate)({
        singular: "Marketing",
        dictionary: {
          "ja-JP": {
            singular: "マーケティング"
          },
          "ko-KR": {
            singular: "마케팅"
          },
          "zh-CN": {
            singular: "营销"
          }
        }
      })
    }, {
      value: "Productivity",
      text: (0, _v29.translate)({
        singular: "Productivity",
        dictionary: {
          es: {
            singular: "Productividad"
          },
          "de-DE": {
            singular: "Produktivität"
          },
          "fr-FR": {
            singular: "Productivité"
          },
          "ja-JP": {
            singular: "生産性"
          },
          "ko-KR": {
            singular: "생산성"
          },
          "pt-BR": {
            singular: "Produtividade"
          },
          "zh-CN": {
            singular: "生产效率"
          }
        }
      })
    }, {
      value: "Social Media",
      text: (0, _v29.translate)({
        singular: "Social Media",
        dictionary: {
          "fr-FR": {
            singular: "Réseaux sociaux"
          },
          "ja-JP": {
            singular: "ソーシャルメディア"
          },
          "ko-KR": {
            singular: "소셜 미디어"
          }
        }
      })
    }],
    _v60 = {
      value: "All",
      text: (0, _v29.translate)({
        singular: "All",
        dictionary: {
          es: {
            singular: "Todos"
          },
          "de-DE": {
            singular: "Alle"
          },
          "fr-FR": {
            singular: "Tout"
          },
          "ja-JP": {
            singular: "すべて"
          },
          "ko-KR": {
            singular: "모두"
          },
          "pt-BR": {
            singular: "Tudo"
          },
          "zh-CN": {
            singular: "全部"
          }
        }
      })
    },
    _v61 = {
      value: "All",
      text: (0, _v29.translate)({
        singular: "All",
        dictionary: {
          es: {
            singular: "Todos"
          },
          "de-DE": {
            singular: "Alle"
          },
          "fr-FR": {
            singular: "Tout"
          },
          "ja-JP": {
            singular: "すべて"
          },
          "ko-KR": {
            singular: "모두"
          },
          "pt-BR": {
            singular: "Tudo"
          },
          "zh-CN": {
            singular: "全部"
          }
        }
      })
    },
    _v62 = ({
      currentValue: _v0,
      setCurrentValue: _v1,
      categoryCount: _v2,
      filterConnectedApp: _v3 = !1
    }) => {
      let [_v4, _v5] = (0, _v5.useState)("none"),
        _v6 = (0, _v5.useRef)(null),
        _v7 = (0, _v55.useBreakpointValue)({
          base: !0,
          sm: !1
        }),
        [_v8, _v9] = _v58({
          threshold: 1
        }),
        [_v10, _v11] = _v58({
          threshold: .8
        }),
        _v12 = _v0 => {
          _v6.current && (_v6.current.scrollLeft += _v0);
        };
      return (0, _v1.jsx)(_v7.Box, {
        position: "relative",
        children: (0, _v1.jsxs)(_v8.Flex, {
          gap: "sm",
          ref: _v6,
          overflowX: "scroll",
          scrollBehavior: "smooth",
          onMouseEnter: () => {
            _v5("block");
          },
          onMouseLeave: () => {
            _v5("none");
          },
          sx: {
            scrollbarWidth: "none"
          },
          children: [!_v9 && !_v7 && (0, _v1.jsx)(_v63, {
            onClick: () => _v12(-150),
            icon: (0, _v1.jsx)(_v57.ChevronLeftSmall, {}),
            display: _v4,
            "aria-label": "left-scroll-button"
          }), (0, _v1.jsx)(_v64, {
            background: _v65.leftLight,
            _dark: {
              background: _v65.leftDark
            },
            display: _v9 ? "none" : "block"
          }), _v59.map((_v0, _v1) => {
            let _v2 = _v2?.[_v0.value] || 0,
              _v3 = _v0.value === _v0;
            return (0, _v1.jsx)(_v43.Tooltip, {
              label: _v3 ? (0, _v29.translate)({
                singular: "No connected integrations in this category",
                dictionary: {
                  es: {
                    singular: "No hay integraciones conectadas en esta categoría"
                  },
                  "de-DE": {
                    singular: "Keine verbundenen Integrationen in dieser Kategorie"
                  },
                  "fr-FR": {
                    singular: "Aucune intégration connectée dans cette catégorie"
                  },
                  "ja-JP": {
                    singular: "このカテゴリーに接続されたインテグレーションはありません"
                  },
                  "ko-KR": {
                    singular: "이 카테고리에 연결된 통합 기능이 없습니다."
                  },
                  "pt-BR": {
                    singular: "Não há integrações conectadas nesta categoria"
                  },
                  "zh-CN": {
                    singular: "此类别中没有连接的集成"
                  }
                }
              }) : (0, _v29.translate)({
                singular: "No integrations in this category",
                dictionary: {
                  es: {
                    singular: "No hay integraciones en esta categoría"
                  },
                  "de-DE": {
                    singular: "Keine Integrationen in dieser Kategorie"
                  },
                  "fr-FR": {
                    singular: "Aucune intégration dans cette catégorie"
                  },
                  "ja-JP": {
                    singular: "このカテゴリーのインテグレーションはありません"
                  },
                  "ko-KR": {
                    singular: "이 카테고리에 통합 기능이 없습니다."
                  },
                  "pt-BR": {
                    singular: "Não há integrações nesta categoria"
                  },
                  "zh-CN": {
                    singular: "此类别中没有集成"
                  }
                }
              }),
              placement: "top",
              isDisabled: 0 !== _v2,
              children: (0, _v1.jsxs)(_v53.Button, {
                ref: 0 === _v1 ? _v8 : _v1 === _v59.length - 1 ? _v10 : void 0,
                onClick: () => _v1(_v0.value),
                size: "sm",
                variant: "secondary",
                isActive: _v3,
                isDisabled: 0 === _v2,
                children: [_v0.text, (0, _v1.jsx)(_v10.Text, {
                  variant: "body-md",
                  color: _v3 ? "text-primary" : "text-secondary",
                  children: _v2
                })]
              })
            }, _v1);
          }), (0, _v1.jsx)(_v64, {
            background: _v65.rightLight,
            right: "0",
            _dark: {
              background: _v65.rightDark
            },
            display: _v11 ? "none" : "block"
          }), !_v11 && !_v7 && (0, _v1.jsx)(_v63, {
            right: "0",
            onClick: () => _v12(150),
            icon: (0, _v1.jsx)(_v56.ChevronRightSmall, {}),
            display: _v4,
            "aria-label": "right-scroll-button"
          })]
        })
      });
    },
    _v63 = _v0 => {
      let {
        onClick: _v1,
        ..._v2
      } = _v0;
      return (0, _v1.jsx)(_v54.IconButton, {
        position: "absolute",
        zIndex: "2",
        size: "sm",
        onClick: _v1,
        variant: "primary",
        ..._v2
      });
    },
    _v64 = _v0 => {
      let {
        display: _v1,
        ..._v2
      } = _v0;
      return (0, _v1.jsx)(_v7.Box, {
        height: (0, _v15.rem)(32),
        width: (0, _v15.rem)(60),
        position: "absolute",
        zIndex: "1",
        pointerEvents: "none",
        display: _v1,
        ..._v2
      });
    },
    _v65 = {
      leftLight: "linear-gradient(90deg, #F4F6F8 0%, rgba(244, 246, 248, 0) 100%)",
      leftDark: "linear-gradient(90deg, #0E1216 0%, rgba(14, 18, 22, 0) 100%)",
      rightLight: "linear-gradient(90deg, rgba(244, 246, 248, 0) 0%, #F4F6F8 100%)",
      rightDark: "linear-gradient(90deg, rgba(14, 18, 22, 0) 0%, #0E1216 100%)"
    };
  var _v66 = _v0.i(0);
  let _v67 = () => (0, _v1.jsxs)(_v8.Flex, {
    direction: "column",
    alignItems: "center",
    children: [(0, _v1.jsx)(_v66.SearchMagnifier, {
      boxSize: "2xl"
    }), (0, _v1.jsx)(_v10.Text, {
      as: "h1",
      variant: "heading-xl",
      my: "md",
      children: (0, _v29.translate)({
        singular: "No matching results",
        dictionary: {
          es: {
            singular: "No hay resultados coincidentes"
          },
          "de-DE": {
            singular: "Keine übereinstimmenden Ergebnisse"
          },
          "fr-FR": {
            singular: "Aucun résultat correspondant"
          },
          "ja-JP": {
            singular: "一致する結果がありません"
          },
          "ko-KR": {
            singular: "일치하는 결과가 없습니다."
          },
          "pt-BR": {
            singular: "Nenhum resultado correspondente"
          },
          "zh-CN": {
            singular: "无匹配结果"
          }
        }
      })
    }), (0, _v1.jsx)(_v10.Text, {
      variant: "body-lg",
      color: "text-secondary",
      children: (0, _v29.translate)({
        singular: "Try another search",
        dictionary: {
          es: {
            singular: "Pruebe con otra búsqueda"
          },
          "de-DE": {
            singular: "Versuchen Sie eine andere Suche"
          },
          "fr-FR": {
            singular: "Essayez une autre recherche"
          },
          "ja-JP": {
            singular: "別の検索をお試しください"
          },
          "ko-KR": {
            singular: "다르게 검색해 보세요"
          },
          "pt-BR": {
            singular: "Tente outra pesquisa"
          },
          "zh-CN": {
            singular: "尝试其他搜索"
          }
        }
      })
    })]
  });
  var _v68 = _v0.i(0);
  let _v69 = ["uri", "uuid", "displayName", "thumbnailUrl", "categories", "description", "connectionStatus"];
  function _v70({
    filterConnectedApp: _v0
  }) {
    let _v1 = (0, _v2.useRouter)(),
      _v2 = (0, _v4.usePathname)(),
      _v3 = (0, _v31.useViewer)(),
      {
        isLoading: _v4,
        isAdmin: _v5,
        isOwner: _v6,
        isContributor: _v7,
        isContributorPlus: _v8
      } = (0, _v68.useGetRoleInAnyTeam)(),
      {
        sendFilterEvent: _v9
      } = (0, _v49.useTracking)(),
      _v10 = (0, _v4.useSearchParams)(),
      [_v11, _v12] = (0, _v5.useState)(() => {
        let _v0 = _v10.get("category");
        if (_v0) {
          let _v0 = _v59.find(_v0 => _v0.value.toLowerCase() === _v0.toLowerCase());
          if (_v0) return _v0.value;
        }
        return _v60.value;
      }),
      [_v13, _v14] = (0, _v5.useState)(""),
      {
        data: _v15,
        isLoading: _v16
      } = _v28(() => _v3?.user?.id ? {
        where: {
          userId: _v3.user.id
        },
        query: {
          filter: _v0 ? "my_connections" : "integrations"
        },
        select: _v69
      } : null),
      _v17 = _v0 => {
        _v0 ? _v9({
          eventName: "vimeo.click_connected_integrations",
          copy: "Connected"
        }) : _v9({
          eventName: "vimeo.click_discover_integrations",
          copy: "Discover"
        }), _v1.push({
          query: {
            ..._v1.query,
            slug: _v0 ? _v3.APP_CENTER_LISTING_SLUG[0] : ""
          }
        }, void 0, {
          shallow: !0
        });
      },
      _v18 = (0, _v5.useMemo)(() => _v15?.data ? [..._v15.data].sort((_v0, _v1) => {
        let _v2 = _v0.displayName.toUpperCase(),
          _v3 = _v1.displayName.toUpperCase();
        return _v2 < _v3 ? -1 : +(_v2 > _v3);
      }) : [], [_v15?.data]),
      _v19 = (0, _v5.useMemo)(() => {
        if (_v0) return [];
        let _v0 = {};
        return _v18.forEach(_v0 => {
          _v0.uuid && (_v0[_v0.uuid] = _v0);
        }), _v47.FEATURED_APPS_UUID.map(_v0 => _v0[_v0]).filter(_v0 => !!_v0);
      }, [_v18, _v0]),
      _v20 = _v13.toUpperCase();
    _v18 = _v18.filter(_v0 => {
      let _v1 = _v0.displayName,
        _v2 = _v0.description || "";
      return _v1.toUpperCase().indexOf(_v20) > -1 || _v2.toUpperCase().indexOf(_v20) > -1;
    });
    let _v21 = (0, _v5.useMemo)(() => {
      let _v0 = {
        [_v61.value]: _v18.length
      };
      return _v18.forEach(_v0 => {
        _v0.categories?.forEach(_v0 => _v0[_v0] = (_v0[_v0] || 0) + 1);
      }), _v0;
    }, [_v18]);
    if (_v16 || !_v3) return (0, _v1.jsx)(_v38, {});
    if (!_v15?.data) return (0, _v1.jsx)(_v30.ErrorPage, {
      error: new _v18.ResourceNotFoundError()
    });
    let _v22 = _v11 === _v61.value ? _v18 : _v18.filter(_v0 => _v0.categories?.includes(_v11));
    return (0, _v1.jsxs)(_v7.Box, {
      m: {
        base: 3,
        md: "lg"
      },
      children: [(0, _v1.jsxs)(_v8.Flex, {
        alignItems: "center",
        justifyContent: "space-between",
        mb: "lg",
        gap: "lg",
        flexWrap: "wrap",
        children: [(0, _v1.jsx)(_v10.Text, {
          variant: "heading-lg",
          children: (0, _v29.translate)({
            singular: "Integrations",
            dictionary: {
              es: {
                singular: "Integraciones"
              },
              "de-DE": {
                singular: "Integrationen"
              },
              "fr-FR": {
                singular: "Intégrations"
              },
              "ja-JP": {
                singular: "統合"
              },
              "ko-KR": {
                singular: "연동"
              },
              "pt-BR": {
                singular: "Integrações"
              },
              "zh-CN": {
                singular: "集成"
              }
            }
          })
        }), (0, _v1.jsx)(_v7.Box, {
          width: {
            base: "100%",
            sm: (0, _v15.rem)(360)
          },
          children: (0, _v1.jsx)(_v9.Search, {
            variant: "minimal",
            value: _v13,
            onChange: _v0 => _v14(_v0.target.value),
            placeholder: (0, _v29.translate)({
              singular: "Search integrations",
              dictionary: {
                es: {
                  singular: "Buscar integraciones"
                },
                "de-DE": {
                  singular: "Integrationen suchen"
                },
                "fr-FR": {
                  singular: "Rechercher des intégrations"
                },
                "ja-JP": {
                  singular: "検索の統合"
                },
                "ko-KR": {
                  singular: "검색 연동"
                },
                "pt-BR": {
                  singular: "Pesquisar integrações"
                },
                "zh-CN": {
                  singular: "搜索集成"
                }
              }
            }),
            size: "md"
          })
        })]
      }), (0, _v1.jsxs)(_v14.Grid, {
        templateColumns: "repeat(3, minmax(auto, max-content))",
        templateRows: {
          base: "repeat(2, max-content)",
          lg: "initial"
        },
        rowGap: {
          base: "md",
          sm: "lg"
        },
        columnGap: {
          base: 0,
          lg: "lg"
        },
        alignItems: "center",
        sx: {
          "& > *": {
            minWidth: "0px"
          }
        },
        mt: "lg",
        mb: "lg",
        children: [(0, _v1.jsx)(_v11.Tabs, {
          index: +!!_v0,
          size: "sm",
          width: {
            base: "100%",
            sm: "fit-content"
          },
          minW: (0, _v15.rem)(260),
          children: (0, _v1.jsxs)(_v13.TabList, {
            width: "auto",
            children: [(0, _v1.jsxs)(_v12.Tab, {
              onClick: () => _v17(0),
              children: [(0, _v1.jsx)(_v16.AddBlocks, {
                mr: "sm"
              }), (0, _v29.translate)({
                singular: "Discover",
                dictionary: {
                  es: {
                    singular: "Descubrir"
                  },
                  "de-DE": {
                    singular: "Entdecken"
                  },
                  "fr-FR": {
                    singular: "Découvrir"
                  },
                  "ja-JP": {
                    singular: "新発見"
                  },
                  "ko-KR": {
                    singular: "발견하기"
                  },
                  "pt-BR": {
                    singular: "Descobrir"
                  },
                  "zh-CN": {
                    singular: "发现"
                  }
                }
              })]
            }), (0, _v1.jsxs)(_v12.Tab, {
              onClick: () => _v17(1),
              children: [(0, _v1.jsx)(_v17.CircleCheck, {
                mr: "sm"
              }), (0, _v29.translate)({
                singular: "Connected",
                dictionary: {
                  es: {
                    singular: "Conectado"
                  },
                  "de-DE": {
                    singular: "Verknüpft"
                  },
                  "fr-FR": {
                    singular: "Connecté"
                  },
                  "ja-JP": {
                    singular: "接続済み"
                  },
                  "ko-KR": {
                    singular: "연결됨"
                  },
                  "pt-BR": {
                    singular: "Conectado"
                  },
                  "zh-CN": {
                    singular: "已关联"
                  }
                }
              })]
            }), (0, _v1.jsx)(_v11.TabIndicator, {})]
          })
        }), (0, _v1.jsx)(_v7.Box, {
          gridArea: {
            base: "2/1",
            md: "2/1",
            lg: "1/2"
          },
          children: (0, _v1.jsx)(_v62, {
            currentValue: _v11,
            setCurrentValue: _v0 => {
              _v9({
                eventName: "vimeo.filter_integrations_options",
                copy: _v0
              });
              let _v1 = new URLSearchParams(_v10);
              _v1.set("category", _v0), _v1.replace(`${_v2}?${_v1.toString()}`), _v12(_v0);
            },
            categoryCount: _v21,
            filterConnectedApp: _v0
          })
        })]
      }), !(_v4 || _v5 || _v6 || _v7 || _v8) && (0, _v1.jsx)(_v6.Alert, {
        status: "warning",
        size: "sm",
        alignItems: "center",
        marginBottom: "lg",
        children: (0, _v1.jsx)(_v10.Text, {
          variant: "body-sm",
          children: (0, _v29.translate)({
            singular: "You don’t have permission to connect integrations. Ask your admin to upgrade your seat.",
            dictionary: {
              es: {
                singular: "No tiene permiso para conectar integraciones. Solicite a su administrador que actualice su puesto."
              },
              "de-DE": {
                singular: "Sie haben keine Berechtigung zum Verbinden von Integrationen. Bitten Sie Ihren Administrator, Ihre Lizenz zu aktualisieren."
              },
              "fr-FR": {
                singular: "Vous n'êtes pas autorisé à connecter des intégrations. Demandez à votre administrateur de mettre votre licence à niveau."
              },
              "ja-JP": {
                singular: "統合を接続する権限がありません。管理者にシートのアップグレードを依頼してください。"
              },
              "ko-KR": {
                singular: "통합을 연결할 권한이 없습니다. 관리자에게 사용자 라이선스 업그레이드를 요청하세요."
              },
              "pt-BR": {
                singular: "Você não tem permissão para conectar integrações. Peça para o administrador atualizar a sua licença."
              },
              "zh-CN": {
                singular: "您没有连接集成的权限。请管理员为您升级席位。"
              }
            }
          })
        })
      }), _v11 === _v61.value && !_v0 && !_v13 && (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v10.Text, {
          variant: "heading-md",
          mb: "lg",
          children: "Featured apps"
        }), (0, _v1.jsx)(_v51, {
          apps: _v19
        }), (0, _v1.jsx)(_v10.Text, {
          variant: "heading-md",
          my: "lg",
          children: "Explore apps"
        })]
      }), _v22.length > 0 && (0, _v1.jsx)(_v51, {
        apps: _v22
      }), 0 === _v22.length && (0, _v1.jsx)(_v7.Box, {
        mt: "20vh",
        children: _v13 ? (0, _v1.jsx)(_v67, {}) : _v0 && (0, _v1.jsx)(_v39, {})
      })]
    });
  }
  var _v71 = _v0.i(0),
    _v72 = _v0.i(0),
    _v73 = _v0.i(0);
  let _v74 = () => {
    let _v0 = (0, _v2.useRouter)(),
      _v1 = _v0?.query?.slug;
    return !_v1 || Array.isArray(_v1) && 1 === _v1.length && _v3.APP_CENTER_LISTING_SLUG.includes(_v1[0]) ? (0, _v1.jsx)(_v70, {
      filterConnectedApp: Array.isArray(_v1) && _v3.APP_CENTER_LISTING_SLUG[0] === _v1[0]
    }) : (0, _v1.jsx)(_v30.ErrorPage, {
      error: new _v18.ResourceNotFoundError()
    });
  };
  _v74.getLayout = _v0 => (0, _v1.jsx)(_v73.VideoLibraryLayout, {
    hasSideNav: !0,
    sideNavContent: (0, _v1.jsx)(_v72.SideNavContent, {
      surface: "home"
    }),
    alwaysMinimiseSearch: !0,
    children: _v0
  }), (0, _v71.withPageSetup)(() => ({
    props: {
      hasThemeSupport: !0,
      hasUploader: !0
    }
  }), {
    capability: "hasIntegrationCenter",
    redirect: "/settings/apps"
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v74], 0);
}