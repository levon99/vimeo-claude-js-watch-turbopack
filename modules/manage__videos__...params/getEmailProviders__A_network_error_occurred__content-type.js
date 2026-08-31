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
  async function _v9({
    baseUrl: _v0,
    select: _v1,
    query: _v2,
    ..._v3
  }) {
    return (0, _v7.measureLatency)("getEmailProviders", "GET", async () => {
      let _v0 = await fetch(`${_v0}/email_providers?${(0, _v8.searchQueryString)(_v2)}&fields=${_v1.map(_v8.intoSnakeCase).join(",")}`, {
        ..._v3,
        method: "GET"
      });
      if (!_v0.ok) throw new _v8.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v8.deepCamelCase)(_v1);
    });
  }
  var _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0);
  function _v15(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v14.useGctlConfig)();
    return (0, _v10.default)(_v2 ? `/email_providers${(0, _v12.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v9({
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
  "true" === _v6.default.env.STORYBOOK && (0, _v12.assignMswData)(_v15, {
    endpoint: "/email_providers",
    method: "GET"
  }), "true" === _v6.default.env.STORYBOOK && (0, _v12.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v11.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v14.useGctlConfig)(),
      [_v5, _v6] = (0, _v12.useInternalState)();
    return [(0, _v3.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/email_providers${(0, _v12.serializeQuery)(_v0)}`, _v9({
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
    endpoint: "/email_providers",
    method: "GET"
  }), "true" === _v6.default.env.STORYBOOK && (0, _v12.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v14.useGctlConfig)();
    return (0, _v13.default)((_v0, _v1) => {
      if (null === _v2 || _v1 && !_v1.paging.next) return null;
      let {
          perPage: _v2 = 25,
          page: _v3,
          ..._v4
        } = _v2.query ?? {},
        _v5 = _v2.select.join(","),
        _v6 = Object.entries(_v4 ?? {}).filter(([, _v0]) => void 0 !== _v0).map(([_v0, _v1]) => `${_v0}=${_v1}`).join("&");
      return [`/email_providers?page=${_v0 + 1}&perPage=${_v2}&fields=${_v5}&${_v6}`, _v0];
    }, null !== _v2 ? ([_v0, _v1]) => _v9({
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
    endpoint: "/email_providers",
    method: "GET"
  });
  var _v16 = _v0.i(0);
  async function _v17({
    baseUrl: _v0,
    select: _v1,
    where: {
      videoId: _v2
    },
    query: _v3,
    ..._v4
  }) {
    return (0, _v7.measureLatency)("getVideoAssets", "GET", async () => {
      let _v0 = await fetch(`${_v0}/videos/${_v2}/assets?${(0, _v8.searchQueryString)(_v3)}&fields=${_v1.map(_v8.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "GET"
      });
      if (!_v0.ok) throw new _v8.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v8.deepCamelCase)(_v1);
    });
  }
  function _v18(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v14.useGctlConfig)();
    return (0, _v10.default)(_v2 ? `/videos/${_v2.where.videoId}/assets${(0, _v12.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v17({
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
  "true" === _v6.default.env.STORYBOOK && (0, _v12.assignMswData)(_v18, {
    endpoint: "/videos/:videoId/assets",
    method: "GET"
  }), "true" === _v6.default.env.STORYBOOK && (0, _v12.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v11.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v14.useGctlConfig)(),
      [_v5, _v6] = (0, _v12.useInternalState)();
    return [(0, _v3.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/videos/${_v0.where.videoId}/assets${(0, _v12.serializeQuery)(_v0)}`, _v17({
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
    endpoint: "/videos/:videoId/assets",
    method: "GET"
  }), "true" === _v6.default.env.STORYBOOK && (0, _v12.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v14.useGctlConfig)();
    return (0, _v13.default)((_v0, _v1) => {
      if (null === _v2 || _v1 && !_v1.paging.next) return null;
      let {
          perPage: _v2 = 25,
          page: _v3,
          ..._v4
        } = _v2.query ?? {},
        _v5 = _v2.select.join(","),
        _v6 = Object.entries(_v4 ?? {}).filter(([, _v0]) => void 0 !== _v0).map(([_v0, _v1]) => `${_v0}=${_v1}`).join("&");
      return [`/videos/${_v2.where.videoId}/assets?page=${_v0 + 1}&perPage=${_v2}&fields=${_v5}&${_v6}`, _v0];
    }, null !== _v2 ? ([_v0, _v1]) => _v17({
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
    endpoint: "/videos/:videoId/assets",
    method: "GET"
  });
  var _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0);
  let _v25 = ["item", "type"],
    _v26 = ["icon", "isPaid", "key", "name"];
  var _v27 = _v0.i(0);
  let _v28 = _v0 => {
      _v27.BigPictureClient.sendEvent(new _v27.Event("vimeo.upgrade_action", 7, {
        copy: "upgrade",
        action_type: "click",
        location: _v0,
        page: "svv",
        target: "upgrade",
        upsell_name: "embed_in_email",
        feature: "embed_in_email",
        plan_selected: null,
        purchase_type: null,
        duration: null,
        currency: null,
        price: null,
        is_discount: null,
        discount_offer: null,
        path: null,
        target_path: null,
        device_type: null,
        is_new_pricing: null,
        upgrade_flags: null,
        loading_time: null
      }));
    },
    _v29 = (0, _v20.translate)({
      singular: "Asset",
      dictionary: {
        es: {
          singular: "Recurso"
        },
        "fr-FR": {
          singular: "Ressource"
        },
        "ja-JP": {
          singular: "素材"
        },
        "ko-KR": {
          singular: "자산"
        },
        "pt-BR": {
          singular: "Material"
        },
        "zh-CN": {
          singular: "资产"
        }
      }
    });
  (0, _v20.translate)({
    singular: "Close this dialog.",
    dictionary: {
      es: {
        singular: "Cerrar este diálogo."
      },
      "de-DE": {
        singular: "Diesen Dialog schließen"
      },
      "fr-FR": {
        singular: "Fermer cette fenêtre."
      },
      "ja-JP": {
        singular: "この会話を閉じる。"
      },
      "ko-KR": {
        singular: "이 창 닫기."
      },
      "pt-BR": {
        singular: "Feche esta caixa de diálogo."
      },
      "zh-CN": {
        singular: "关闭此对话框。"
      }
    }
  });
  let _v30 = (0, _v20.translate)({
      singular: "Copy embed code",
      dictionary: {
        es: {
          singular: "Copiar el código de inserción"
        },
        "de-DE": {
          singular: "Einbettungscode kopieren"
        },
        "fr-FR": {
          singular: "Copier le code d’intégration"
        },
        "ja-JP": {
          singular: "埋め込みコードをコピー"
        },
        "ko-KR": {
          singular: "임베드 코드 복사하기"
        },
        "pt-BR": {
          singular: "Copiar código de incorporação"
        },
        "zh-CN": {
          singular: "复制嵌入代码"
        }
      }
    }),
    _v31 = (0, _v20.translate)({
      singular: "Copied",
      dictionary: {
        es: {
          singular: "Copiado"
        },
        "de-DE": {
          singular: "Kopiert"
        },
        "fr-FR": {
          singular: "Copié"
        },
        "ja-JP": {
          singular: "コピー完了"
        },
        "ko-KR": {
          singular: "복사 완료"
        },
        "pt-BR": {
          singular: "Copiado"
        },
        "zh-CN": {
          singular: "已复制"
        }
      }
    });
  (0, _v20.translate)({
    singular: "Custom URL",
    dictionary: {
      es: {
        singular: "URL personalizado"
      },
      "de-DE": {
        singular: "Benutzerdefinierte URL"
      },
      "fr-FR": {
        singular: "URL personnalisée"
      },
      "ja-JP": {
        singular: "カスタム URL"
      },
      "ko-KR": {
        singular: "커스텀 URL"
      },
      "pt-BR": {
        singular: "URL customizada"
      },
      "zh-CN": {
        singular: "自定义 URL"
      }
    }
  });
  let _v32 = (0, _v20.translate)({
      singular: "Email provider",
      dictionary: {
        es: {
          singular: "Proveedor de correo electrónico"
        },
        "de-DE": {
          singular: "E-Mail-Anbieter"
        },
        "fr-FR": {
          singular: "Fournisseur de messagerie"
        },
        "ja-JP": {
          singular: "Eメールプロバイダー"
        },
        "ko-KR": {
          singular: "이메일 공급자"
        },
        "pt-BR": {
          singular: "Provedor de e-mail"
        },
        "zh-CN": {
          singular: "电子邮件提供商"
        }
      }
    }).replace("-", "-⁠"),
    _v33 = (0, _v20.translate)({
      singular: "Email marketing platforms",
      dictionary: {
        es: {
          singular: "Plataformas de marketing por correo electrónico"
        },
        "de-DE": {
          singular: "Plattformen für E-Mail-Marketing"
        },
        "fr-FR": {
          singular: "Plateforme d'e-mail marketing"
        },
        "ja-JP": {
          singular: "Eメール マーケティングプラットフォーム"
        },
        "ko-KR": {
          singular: "이메일 마케팅 플랫폼"
        },
        "pt-BR": {
          singular: "Plataformas de email marketing"
        },
        "zh-CN": {
          singular: "电子邮件营销平台"
        }
      }
    }).replace("-", "-⁠"),
    _v34 = (0, _v20.translate)({
      singular: "Embed a thumbnail or GIF that links to your video or site.",
      dictionary: {
        es: {
          singular: "Inserta una miniatura o un GIF que esté enlazado a tu video o sitio."
        },
        "de-DE": {
          singular: "Du kannst Vorschaubilder oder GIFs einbetten, die zu deinem Video oder deiner Website weiterleiten."
        },
        "fr-FR": {
          singular: "Intégrez une vignette ou un GIF qui redirige vers votre vidéo ou votre site Web."
        },
        "ja-JP": {
          singular: "動画やサイトにリンクするサムネイルやGIFを埋め込みましょう。"
        },
        "ko-KR": {
          singular: "동영상 또는 사이트로 링크되는 섬네일이나 GIF를 임베드하세요."
        },
        "pt-BR": {
          singular: "Incorpore uma miniatura ou GIF vinculado ao seu vídeo ou site."
        },
        "zh-CN": {
          singular: "嵌入缩略图或 GIF，链接到您的视频或网站。"
        }
      }
    }),
    _v35 = (0, _v20.translate)({
      singular: "Embed in email",
      dictionary: {
        es: {
          singular: "Insertar en un correo electrónico"
        },
        "de-DE": {
          singular: "In E-Mail einbetten"
        },
        "fr-FR": {
          singular: "Intégrer à un e-mail"
        },
        "ja-JP": {
          singular: "メールに埋め込む"
        },
        "ko-KR": {
          singular: "이메일 내 임베드"
        },
        "pt-BR": {
          singular: "Incorporar no e-mail"
        },
        "zh-CN": {
          singular: "嵌入电子邮件"
        }
      }
    }).replace("-", "-⁠");
  (0, _v20.translate)({
    singular: "Oops! Something went wrong. Please try again.",
    dictionary: {
      es: {
        singular: "¡Ups, algo salió mal! Vuelve a intentarlo."
      },
      "de-DE": {
        singular: "Hoppla! Etwas ist schief gelaufen. Bitte versuche es nochmal."
      },
      "fr-FR": {
        singular: "Oups ! Une erreur s'est produite. Veuillez essayer à nouveau."
      },
      "ja-JP": {
        singular: "エラーが発生しました。再度お試しください。"
      },
      "ko-KR": {
        singular: "죄송합니다. 문제가 발생했습니다. 다시 시도해주세요."
      },
      "pt-BR": {
        singular: "Oh! Alguma coisa deu errado. Por favor, tente novamente."
      },
      "zh-CN": {
        singular: "哎呀，出错了。请重试。"
      }
    }
  });
  let _v36 = (0, _v20.translate)({
    singular: "From:",
    dictionary: {
      es: {
        singular: "De:"
      },
      "de-DE": {
        singular: "Von"
      },
      "fr-FR": {
        singular: "De :"
      },
      "ja-JP": {
        singular: "送り主："
      },
      "ko-KR": {
        singular: "보내는 사람:"
      },
      "pt-BR": {
        singular: "De:"
      },
      "zh-CN": {
        singular: "发件人："
      }
    }
  });
  (0, _v20.translate)({
    singular: "Generic code",
    dictionary: {
      es: {
        singular: "Código genérico"
      },
      "de-DE": {
        singular: "Generischer Code"
      },
      "fr-FR": {
        singular: "Code générique"
      },
      "ja-JP": {
        singular: "汎用コード"
      },
      "ko-KR": {
        singular: "일반 코드"
      },
      "pt-BR": {
        singular: "Código genérico"
      },
      "zh-CN": {
        singular: "通用代码"
      }
    }
  });
  let _v37 = (0, _v20.translate)({
    singular: "It might take a few minutes to create this GIF.",
    dictionary: {
      es: {
        singular: "Es probable que la creación de este GIF demore unos minutos."
      },
      "de-DE": {
        singular: "Die Erstellung des GIFs kann einige Momente dauern."
      },
      "fr-FR": {
        singular: "La création du GIF peut prendre quelques minutes."
      },
      "ja-JP": {
        singular: "このGIFの作成には数分かかる場合があります。"
      },
      "ko-KR": {
        singular: "GIF 생성까지 몇 분 정도 소요될 수 있습니다."
      },
      "pt-BR": {
        singular: "A criação deste GIF pode levar alguns minutos."
      },
      "zh-CN": {
        singular: "创建此 GIF 可能需要几分钟时间。"
      }
    }
  });
  (0, _v20.translate)({
    singular: "Invalid URL",
    dictionary: {
      es: {
        singular: "URL no válida"
      },
      "de-DE": {
        singular: "Ungültige URL"
      },
      "fr-FR": {
        singular: "URL non valide"
      },
      "ja-JP": {
        singular: "無効なURL"
      },
      "ko-KR": {
        singular: "유효하지 않은 URL"
      },
      "pt-BR": {
        singular: "URL inválido"
      },
      "zh-CN": {
        singular: "无效 URL"
      }
    }
  });
  let _v38 = (0, _v20.translate)({
    singular: "Link to",
    dictionary: {
      es: {
        singular: "Enlazar a"
      },
      "de-DE": {
        singular: "Verlinken auf"
      },
      "fr-FR": {
        singular: "Associer par un lien"
      },
      "ja-JP": {
        singular: "リンク先"
      },
      "ko-KR": {
        singular: "다음으로 링크"
      },
      "pt-BR": {
        singular: "Conectar a"
      },
      "zh-CN": {
        singular: "链接到"
      }
    }
  });
  (0, _v20.translate)({
    singular: "Loading...",
    dictionary: {
      es: {
        singular: "Cargando..."
      },
      "de-DE": {
        singular: "Lädt ..."
      },
      "fr-FR": {
        singular: "Chargement..."
      },
      "ja-JP": {
        singular: "読み込み中..."
      },
      "ko-KR": {
        singular: "로드 중..."
      },
      "pt-BR": {
        singular: "Carregando..."
      },
      "zh-CN": {
        singular: "正在加载..."
      }
    }
  }), (0, _v20.translate)({
    singular: "New",
    dictionary: {
      es: {
        singular: "Nuevo"
      },
      "de-DE": {
        singular: "Neu"
      },
      "fr-FR": {
        singular: "Nouveau"
      },
      "ja-JP": {
        singular: "新規作成"
      },
      "ko-KR": {
        singular: "신규"
      },
      "pt-BR": {
        singular: "Novo"
      },
      "zh-CN": {
        singular: "新"
      }
    }
  }), (0, _v20.translate)({
    singular: "Thumbnail",
    dictionary: {
      es: {
        singular: "Miniatura"
      },
      "de-DE": {
        singular: "Vorschaubild"
      },
      "fr-FR": {
        singular: "Vignette"
      },
      "ja-JP": {
        singular: "サムネイル"
      },
      "ko-KR": {
        singular: "썸네일"
      },
      "pt-BR": {
        singular: "Miniatura"
      },
      "zh-CN": {
        singular: "缩略图"
      }
    }
  }), (0, _v20.translate)({
    singular: "Do not link",
    dictionary: {
      es: {
        singular: "No enlazar"
      },
      "de-DE": {
        singular: "Nicht verknüpfen"
      },
      "fr-FR": {
        singular: "Ne pas associer"
      },
      "ja-JP": {
        singular: "リンクしない"
      },
      "ko-KR": {
        singular: "링크 안 함"
      },
      "pt-BR": {
        singular: "Não usar link"
      },
      "zh-CN": {
        singular: "不链接"
      }
    }
  });
  let _v39 = (0, _v20.translate)({
      singular: "Subject:",
      dictionary: {
        es: {
          singular: "Asunto:"
        },
        "de-DE": {
          singular: "Thema:"
        },
        "fr-FR": {
          singular: "Sujet :"
        },
        "ja-JP": {
          singular: "テーマ:"
        },
        "ko-KR": {
          singular: "제목:"
        },
        "pt-BR": {
          singular: "Assunto:"
        },
        "zh-CN": {
          singular: "主题："
        }
      }
    }),
    _v40 = (0, _v20.translate)({
      singular: "Show play button",
      dictionary: {
        es: {
          singular: "Mostrar el botón de reproducir"
        },
        "de-DE": {
          singular: "Wiedergabe-Button anzeigen"
        },
        "fr-FR": {
          singular: "Afficher le bouton de lecture"
        },
        "ja-JP": {
          singular: "再生ボタンを表示"
        },
        "ko-KR": {
          singular: "재생 버튼 표시"
        },
        "pt-BR": {
          singular: "Exibir o botão de reprodução"
        },
        "zh-CN": {
          singular: "显示播放按钮"
        }
      }
    }),
    _v41 = (0, _v20.translate)({
      singular: "Select a thumbnail or GIF.",
      dictionary: {
        es: {
          singular: "Selecciona una miniatura o un GIF."
        },
        "de-DE": {
          singular: "Wähle eine Miniaturansicht oder ein GIF aus."
        },
        "fr-FR": {
          singular: "Sélectionnez une vignette ou un GIF."
        },
        "ja-JP": {
          singular: "サムネイルかGIFを選択してください。"
        },
        "ko-KR": {
          singular: "섬네일이나 GIF를 선택하세요."
        },
        "pt-BR": {
          singular: "Selecione uma miniatura ou GIF."
        },
        "zh-CN": {
          singular: "选择缩略图或 GIF。"
        }
      }
    });
  (0, _v20.translate)({
    singular: "UPGRADE",
    dictionary: {
      es: {
        singular: "CAMBIAR DE MEMBRESÍA"
      },
      "de-DE": {
        singular: "UPGRADEN"
      },
      "fr-FR": {
        singular: "MISE À NIVEAU"
      },
      "ja-JP": {
        singular: "アップグレード"
      },
      "ko-KR": {
        singular: "업그레이드"
      },
      "pt-BR": {
        singular: "FAZER UPGRADE"
      },
      "zh-CN": {
        singular: "升级"
      }
    }
  }), (0, _v20.translate)({
    singular: "Upgrade for embed code",
    dictionary: {
      es: {
        singular: "Cambiar la suscripción para obtener el código de inserción"
      },
      "de-DE": {
        singular: "Für Einbettungscode upgraden"
      },
      "fr-FR": {
        singular: "Mettez votre abonnement à niveau pour obtenir un code d'intégration"
      },
      "ja-JP": {
        singular: "埋め込みコードのアップグレード"
      },
      "ko-KR": {
        singular: "업그레이드하여 임베드 코드 이용하기"
      },
      "pt-BR": {
        singular: "Faça o upgrade para ter o código de incorporação"
      },
      "zh-CN": {
        singular: "升级以使用嵌入代码"
      }
    }
  });
  let _v42 = (0, _v20.translate)({
    singular: "Upgrade to copy embed code",
    dictionary: {
      es: {
        singular: "Cambiar de plan para copiar el código de inserción"
      },
      "de-DE": {
        singular: "Für Kopieren von Einbettungscode upgraden"
      },
      "fr-FR": {
        singular: "Mettez votre abonnement à niveau pour copier le code d'intégration"
      },
      "ja-JP": {
        singular: "アップグレードして埋め込みコードをコピー"
      },
      "ko-KR": {
        singular: "업그레이드하여 임베드 코드 복사하기"
      },
      "pt-BR": {
        singular: "Faça o upgrade para copiar o código de incorporação"
      },
      "zh-CN": {
        singular: "升级即可复制嵌入代码"
      }
    }
  });
  (0, _v20.translate)({
    singular: "Embed videos in your emails",
    dictionary: {
      es: {
        singular: "Inserta videos en tus correos electrónicos"
      },
      "de-DE": {
        singular: "Einbetten von Videos in deine E-Mails"
      },
      "fr-FR": {
        singular: "Intégrez des vidéos à vos e-mails"
      },
      "ja-JP": {
        singular: "メールに動画を埋め込もう"
      },
      "ko-KR": {
        singular: "이메일에 동영상을 임베드하세요."
      },
      "pt-BR": {
        singular: "Incorpore vídeos em seus e-mails"
      },
      "zh-CN": {
        singular: "在电子邮件中嵌入视频"
      }
    }
  }).replace("-", "-⁠"), (0, _v20.translate)({
    singular: "To embed GIFs and thumbnails in your emails—and create more engaging campaigns—upgrade to a Business plan.",
    dictionary: {
      es: {
        singular: "Para insertar GIF y miniaturas en tus correos electrónicos, y crear campañas más atractivas, cambia a un plan Business."
      },
      "de-DE": {
        singular: "Führe ein Upgrade auf das Business-Abonnement durch, um GIFs und Vorschaubilder in deine E-Mails einbetten zu können – für noch fesselndere Kampagnen."
      },
      "fr-FR": {
        singular: "Pour intégrer des GIF et des vidéos à vos e-mails et ainsi créer des campagnes plus captivantes, passez à un abonnement Business."
      },
      "ja-JP": {
        singular: "メールにGIFやサムネイルを埋め込み、より魅力的なキャンペーンを作成するには、Businessプランにアップグレードしましょう。"
      },
      "ko-KR": {
        singular: "GIF와 섬네일을 이메일에 임베드하고 참여도 높은 캠페인을 더 만들려면 Business 요금제로 업그레이드하세요."
      },
      "pt-BR": {
        singular: "Para incorporar GIFs e miniaturas em seus emails e criar campanhas mais envolventes—faça o upgrade para um plano Business."
      },
      "zh-CN": {
        singular: "要在电子邮件中嵌入 GIF 和缩略图，并创建更具吸引力的广告视频，请升级到 Business 套餐。"
      }
    }
  }).replace("-", "-⁠");
  let _v43 = _v0 => _v0.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;"),
    _v44 = _v0 => "image" === _v0 ? 3 : 2;
  var _v45 = _v0.i(0),
    _v46 = _v0.i(0),
    _v47 = _v0.i(0),
    _v48 = _v0.i(0);
  let _v49 = ({
      onClick: _v0,
      disabled: _v1
    }) => (0, _v1.jsx)(_v50, {
      format: "soft",
      icon: (0, _v1.jsx)(_v48.ChevronRight, {
        sx: {
          width: "1rem !important",
          minW: "1rem !important"
        }
      }),
      iconPosition: "right",
      type: "button",
      size: "sm",
      tabIndex: 0,
      variant: "outline",
      disabled: _v1,
      onClick: _v0,
      children: "GIF"
    }),
    _v50 = (0, _v4.default)(_v21.Button).withConfig({
      displayName: "NewAssetCta__NewCard",
      componentId: "sc-a2d329ff-0"
    })`
  border-radius: ${(0, _v47.rem)(6)};
  height: ${(0, _v47.rem)(80)};
  margin: ${(0, _v47.rem)(8)};
  margin-left: 0;
  min-width: ${(0, _v47.rem)(80)};
`;
  var _v51 = _v0.i(0),
    _v52 = _v0.i(0),
    _v53 = _v0.i(0),
    _v54 = _v0.i(0),
    _v55 = _v0.i(0);
  let _v56 = _v4.default.div.withConfig({
      displayName: "styles__Wrapper",
      componentId: "sc-f117cfde-0"
    })`
  position: relative;
`,
    _v57 = _v4.default.div.withConfig({
      displayName: "styles__Container",
      componentId: "sc-f117cfde-1"
    })`
  display: grid;
`;
  (0, _v4.default)(_v52.Menu.Item).withConfig({
    displayName: "styles__MenuItem",
    componentId: "sc-f117cfde-2"
  })`
  color: ${_v55.core.color.text(100)};
  font-size: ${_v55.core.typography.size(200)}px;

  ${({
    disabled: _v0
  }) => _v0 && _v4.css`
      color: ${_v55.core.color.text(600)};
      opacity: 0.5;
      pointer-events: none;
      user-select: none;
    `};
`;
  let _v58 = _v4.default.div.withConfig({
      displayName: "styles__CardContainer",
      componentId: "sc-f117cfde-3"
    })`
  display: inline-block;
  margin: ${(0, _v47.rem)(8)} ${(0, _v47.rem)(8)} ${(0, _v47.rem)(8)} 0;
  position: relative;
`,
    _v59 = _v4.default.div.withConfig({
      displayName: "styles__Center",
      componentId: "sc-f117cfde-4"
    })`
  align-items: center;
  display: flex;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate3d(-50%, -60%, 0);
`,
    _v60 = _v4.css`
  ${({
      selected: _v0
    }) => _v0 && _v4.css`
      outline: ${(0, _v47.rem)(2)} solid ${_v55.core.color.format.primary};
    `}
`,
    _v61 = _v4.default.img.withConfig({
      displayName: "styles__Card",
      componentId: "sc-f117cfde-5"
    })`
  border-radius: ${(0, _v47.rem)(6)};
  cursor: pointer;
  height: ${(0, _v47.rem)(80)};
  position: relative;
  ${_v60}
`,
    _v62 = _v4.default.aside.withConfig({
      displayName: "styles__LoadingWrapper",
      componentId: "sc-f117cfde-6"
    })`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: ${(0, _v47.rem)(96)};
  width: 100%;
`,
    _v63 = _v4.default.div.withConfig({
      displayName: "styles__LoaderCard",
      componentId: "sc-f117cfde-7"
    })`
  background: ${_v55.core.color.surface.secondary};
  border-radius: ${(0, _v47.rem)(6)};
  display: inline-block;
  height: ${(0, _v47.rem)(80)};
  margin: ${(0, _v47.rem)(8)} ${(0, _v47.rem)(8)} ${(0, _v47.rem)(8)} 0;
  min-width: ${(0, _v47.rem)(142)};
  position: relative;
  ${_v60}
`,
    _v64 = _v4.default.div.withConfig({
      displayName: "styles__ScrollingWrapper",
      componentId: "sc-f117cfde-8"
    })`
  display: flex;
  height: ${(0, _v47.rem)(96)};
  overflow-x: auto;
  padding-left: ${_v0 => (0, _v47.rem)(_v0.hasNavigation ? 25 : 6)};
  position: relative;
  white-space: nowrap;
  -ms-overflow-style: none; /* IE 11 */
  scrollbar-width: none; /* Firefox */
  -webkit-overflow-scrolling: touch; // For IOS smooth scroll
  &::-webkit-scrollbar {
    display: none;
  }

  & ${_v58} {
    &:last-child {
      margin-right: ${_v0 => (0, _v47.rem)(25 * !!_v0.hasNavigation)};

      img {
        margin-right: 0;
      }
    }
  }
`,
    _v65 = _v4.css`
  background-color: ${({
      theme: _v0
    }) => _v0.item.bg};
  bottom: ${(0, _v47.rem)(32)};
  cursor: pointer;
  display: none;
  height: ${(0, _v47.rem)(48)};
  position: absolute;
  transform: scaleX(-1);
  user-select: none;
  width: ${(0, _v47.rem)(24)};

  ${({
      show: _v0
    }) => _v0 && _v4.css`
      display: inline-block;
    `}
`,
    _v66 = _v4.default.div.withConfig({
      displayName: "styles__LeftNavigation",
      componentId: "sc-f117cfde-9"
    })`
  ${_v65}
  border-bottom-left-radius: ${(0, _v47.rem)(48)};
  border-top-left-radius: ${(0, _v47.rem)(48)};
  box-shadow: ${(0, _v47.rem)(-10)} 0 ${(0, _v47.rem)(14)} 0 rgba(31, 31, 31, 0.2);
  left: 0;
`,
    _v67 = _v4.default.div.withConfig({
      displayName: "styles__RightNavigation",
      componentId: "sc-f117cfde-10"
    })`
  ${_v65}
  border-bottom-right-radius: ${(0, _v47.rem)(48)};
  border-top-right-radius: ${(0, _v47.rem)(48)};
  box-shadow: ${(0, _v47.rem)(10)} 0 ${(0, _v47.rem)(14)} 0 rgba(31, 31, 31, 0.2);
  right: 0;
`,
    _v68 = _v4.css`
  height: ${(0, _v47.rem)(25)};
  pointer-events: none;
  position: absolute;
  top: ${(0, _v47.rem)(12)};
  width: ${(0, _v47.rem)(25)};

  path {
    fill: ${_v55.core.color.text(0)};
  }
`;
  (0, _v4.default)(_v53.ChevronDown).withConfig({
    displayName: "styles__ChevronDownIcon",
    componentId: "sc-f117cfde-11"
  })`
  height: ${(0, _v47.rem)(25)};
  width: ${(0, _v47.rem)(25)};

  path {
    fill: ${_v55.core.color.text.secondary};
  }
`;
  let _v69 = (0, _v4.default)(_v54.ChevronRight).withConfig({
      displayName: "styles__ChevronRightIcon",
      componentId: "sc-f117cfde-12"
    })`
  ${_v68}
  right: ${(0, _v47.rem)(8)};
  transform: scaleX(-1);
`,
    _v70 = (0, _v4.default)(_v54.ChevronRight).withConfig({
      displayName: "styles__ChevronLeftIcon",
      componentId: "sc-f117cfde-13"
    })`
  ${_v68}
  left: ${(0, _v47.rem)(8)};
`,
    _v71 = _v4.default.span.withConfig({
      displayName: "styles__GIFTag",
      componentId: "sc-f117cfde-14"
    })`
  border-radius: ${(0, _v47.rem)(2)};
  background-color: ${(0, _v51.slate)(800)};
  color: #fff;
  font-size: ${(0, _v47.rem)(9)};
  font-weight: 700;
  left: ${(0, _v47.rem)(6)};
  opacity: 0.8;
  padding: ${(0, _v47.rem)(3)} ${(0, _v47.rem)(4)};
  position: absolute;
  top: ${(0, _v47.rem)(6)};
`,
    _v72 = (0, _v4.default)(_v46.Text).withConfig({
      displayName: "styles__AssetCountText",
      componentId: "sc-f117cfde-15"
    })`
  color: ${_v55.core.color.text(700)};
`;
  function _v73({
    assets: _v0,
    onNewGif: _v1,
    isLoading: _v2 = !1,
    selectedAssetIndex: _v3,
    setSelectedAssetIndex: _v4
  }) {
    let _v5 = (0, _v3.useRef)(null),
      _v6 = (0, _v3.useRef)(0),
      _v7 = _v0?.length > 2,
      _v8 = _v0?.filter(_v0 => "gif" === _v0.type).length,
      _v9 = _v0 => {
        _v0 > -1 && _v0 < _v0?.length && _v4(_v0);
      },
      _v10 = (_v0, _v1) => {
        if (_v5) {
          let _v0 = 0;
          clearInterval(_v6.current), _v6.current = setInterval(() => {
            if (_v5.current) {
              let _v0 = _v1 || _v5.current.offsetWidth - 20;
              "left" === _v0 ? _v5.current.scrollLeft -= 5 : _v5.current.scrollLeft += 5, (_v0 += 5) >= _v0 && clearInterval(_v6.current);
            } else clearInterval(_v6.current);
          }, 5);
        }
      },
      _v11 = (_v0, _v1) => {
        "Enter" === _v0 ? _v9(_v1) : "Tab" === _v0 ? _v10("right", 150) : "ArrowLeft" === _v0 ? (_v10("left", 150), _v9(_v3 - 1)) : "ArrowRight" === _v0 && (_v10("right", 150), _v9(_v3 + 1));
      };
    return (0, _v1.jsxs)(_v56, {
      children: [(0, _v1.jsx)(_v46.Text, {
        size: 200,
        children: _v41
      }), _v0?.length > 0 || !_v2 ? (0, _v1.jsxs)(_v57, {
        children: [(0, _v1.jsxs)(_v64, {
          ref: _v5,
          hasNavigation: _v7,
          children: [_v0?.length < 8 && (0, _v1.jsx)(_v49, {
            disabled: _v8 >= 4,
            onClick: _v1
          }), _v0?.map((_v0, _v1) => _v0.item?.status === "started" ? (0, _v1.jsxs)(_v63, {
            tabIndex: 0,
            selected: _v3 === _v1,
            onClick: () => _v4(_v1),
            onKeyDown: _v0 => _v11(_v0.key, _v1),
            children: [(0, _v1.jsx)(_v59, {
              children: (0, _v1.jsx)(_v45.Spinner, {
                size: "md"
              })
            }), (0, _v1.jsx)(_v71, {
              children: "GIF"
            })]
          }, `loader-card-${_v1}`) : (0, _v1.jsxs)(_v58, {
            children: [(0, _v1.jsx)(_v61, {
              tabIndex: 0,
              src: _v0.item?.sizes[1].link,
              selected: _v3 === _v1,
              onClick: () => _v4(_v1),
              onKeyDown: _v0 => _v11(_v0.key, _v1)
            }), "gif" === _v0.type && (0, _v1.jsx)(_v71, {
              children: "GIF"
            })]
          }, `card-${_v1}`))]
        }), (0, _v1.jsx)(_v66, {
          onClick: () => _v10("left", 150),
          show: _v7,
          children: (0, _v1.jsx)(_v70, {})
        }), (0, _v1.jsx)(_v67, {
          onClick: () => _v10("right", 150),
          show: _v7,
          children: (0, _v1.jsx)(_v69, {})
        })]
      }) : (0, _v1.jsx)(_v62, {
        children: (0, _v1.jsx)(_v45.Spinner, {
          size: "lg"
        })
      })]
    });
  }
  let _v74 = ({
    currentIndex: _v0,
    total: _v1
  }) => (0, _v1.jsx)(_v72, {
    size: 200,
    children: (0, _v20.translate)({
      singular: "{CURRENT_INDEX} of {TOTAL}",
      replacements: {
        CURRENT_INDEX: _v0,
        TOTAL: _v1
      },
      dictionary: {
        es: {
          singular: "{CURRENT_INDEX} de {TOTAL}"
        },
        "de-DE": {
          singular: "{CURRENT_INDEX} von {TOTAL}"
        },
        "fr-FR": {
          singular: "{CURRENT_INDEX} sur {TOTAL}"
        },
        "ja-JP": {
          singular: "{CURRENT_INDEX} / {TOTAL}"
        },
        "ko-KR": {
          singular: "{CURRENT_INDEX}/{TOTAL}"
        },
        "pt-BR": {
          singular: "{CURRENT_INDEX} de {TOTAL}"
        },
        "zh-CN": {
          singular: "{CURRENT_INDEX} / {TOTAL}"
        }
      }
    })
  });
  var _v75 = _v0.i(0);
  let _v76 = /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
    _v77 = _v0 => {
      let _v1 = _v78(_v0);
      return _v1.length <= 256 && _v76.test(_v1);
    },
    _v78 = _v0 => {
      let _v1 = _v0.trim();
      return _v1 && !_v1.match(/^(https?|s?ftp):\/\//) && (_v1 = `https://${_v1}`), _v1;
    },
    _v79 = ({
      url: _v0,
      onChange: _v1,
      onValid: _v2,
      onError: _v3
    }) => {
      let [_v4, _v5] = (0, _v3.useState)(""),
        _v6 = _v77(_v0);
      return (0, _v1.jsx)(_v75.Input, {
        autoFocus: !0,
        onChange: _v0 => {
          _v77(_v0.target.value) ? (_v5(""), _v6 || _v2?.()) : (_v5((0, _v20.translate)({
            singular: "Invalid URL",
            dictionary: {
              es: {
                singular: "URL no válida"
              },
              "de-DE": {
                singular: "Ungültige URL"
              },
              "fr-FR": {
                singular: "URL non valide"
              },
              "ja-JP": {
                singular: "無効なURL"
              },
              "ko-KR": {
                singular: "유효하지 않은 URL"
              },
              "pt-BR": {
                singular: "URL inválido"
              },
              "zh-CN": {
                singular: "无效 URL"
              }
            }
          })), _v6 && _v3?.()), _v1?.(_v0);
        },
        value: _v0,
        name: "custom_url",
        status: "" !== _v4 ? "negative" : _v6 ? "positive" : "neutral",
        messages: {
          error: _v4
        }
      });
    };
  var _v80 = _v0.i(0),
    _v81 = _v0.i(0),
    _v82 = _v0.i(0),
    _v83 = _v0.i(0),
    _v84 = _v0.i(0),
    _v85 = _v0.i(0);
  let _v86 = ({
      emailProviders: _v0,
      onChange: _v1,
      showUpsell: _v2,
      value: _v3
    }) => {
      let [_v4, _v5] = (0, _v3.useState)(!1),
        _v6 = (0, _v3.useRef)(null),
        _v7 = _v0 => {
          _v5(!1), _v1(_v0);
        };
      (0, _v83.useOutsideClick)([_v6], () => _v5(!1));
      let _v8 = _v0.concat({
          name: "Generic Code",
          key: "other",
          icon: "",
          isPaid: !0
        }),
        _v9 = _v8.find(_v0 => _v0.key === _v3),
        _v10 = _v8.filter(_v0 => _v0.isPaid),
        _v11 = _v8.filter(_v0 => !_v0.isPaid),
        _v12 = (0, _v1.jsx)(_v80.Pop.List, {
          children: (0, _v1.jsxs)(_v91, {
            children: [_v11.map(_v0 => (0, _v1.jsxs)(_v90, {
              onClick: () => _v7(_v0.key),
              children: [_v0.icon && (0, _v1.jsx)(_v89, {
                alt: "",
                src: _v0.icon
              }), (0, _v1.jsx)("span", {
                children: _v0.name
              })]
            }, _v0.key)), (0, _v1.jsxs)(_v94, {
              children: [(0, _v1.jsx)(_v88, {
                size: "5",
                children: _v33
              }), _v2 && (0, _v1.jsx)(_v84.UpgradeBadge, {
                href: (0, _v85.buildUpgradePlanUrl)({
                  paywallTrigger: "email_provider_dropdown_upgrade_button",
                  paywallLocation: "email_embed",
                  paywallFeature: "email_marketing"
                }, {
                  paywall: "1"
                }),
                onClick: () => {
                  _v28("email_provider_dropdown_banner");
                },
                name: "email_provider_dropdown_upgrade_button",
                location: "email_embed"
              })]
            }), _v10.map(_v0 => (0, _v1.jsxs)(_v90, {
              onClick: () => _v7(_v0.key),
              children: [_v0.icon && (0, _v1.jsx)(_v89, {
                alt: "",
                src: _v0.icon
              }), (0, _v1.jsx)("span", {
                children: _v0.name
              })]
            }, _v0.key))]
          })
        });
      return (0, _v1.jsx)(_v81.PopOver, {
        active: _v4,
        attach: "bottom",
        content: _v12,
        children: (0, _v1.jsxs)(_v87, {
          ref: _v6,
          onClick: () => _v5(_v0 => !_v0),
          children: [(0, _v1.jsxs)(_v92, {
            children: [_v9?.icon && (0, _v1.jsx)(_v89, {
              alt: "",
              src: _v9.icon
            }), (0, _v1.jsx)(_v82.Paragraph, {
              size: 1,
              children: _v9?.name
            })]
          }), (0, _v1.jsx)(_v93, {})]
        })
      });
    },
    _v87 = _v4.default.div.withConfig({
      displayName: "EmailProviderDropdown__SelectedProvider",
      componentId: "sc-15b8e86b-0"
    })`
  border: ${(0, _v47.rem)(1)} solid ${({
      theme: _v0
    }) => _v0.additions.content.border};
  border-radius: ${(0, _v47.rem)(3)};
  height: ${(0, _v47.rem)(40)};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${(0, _v47.rem)(8)};
  cursor: pointer;
  p {
    margin: 0;
  }
`,
    _v88 = (0, _v4.default)(_v24.Header).withConfig({
      displayName: "EmailProviderDropdown__PopListTitle",
      componentId: "sc-15b8e86b-1"
    })`
  padding: ${(0, _v47.rem)(10)};
  margin: 0;
`,
    _v89 = _v4.default.img.withConfig({
      displayName: "EmailProviderDropdown__Logo",
      componentId: "sc-15b8e86b-2"
    })`
  height: ${(0, _v47.rem)(24)};
  margin-right: ${(0, _v47.rem)(10)};
`,
    _v90 = (0, _v4.default)(_v80.Pop.Item).withConfig({
      displayName: "EmailProviderDropdown__PopItem",
      componentId: "sc-15b8e86b-3"
    })`
  padding: ${(0, _v47.rem)(10)} 1rem;
`,
    _v91 = _v4.default.div.withConfig({
      displayName: "EmailProviderDropdown__PopListWrapper",
      componentId: "sc-15b8e86b-4"
    })`
  width: ${(0, _v47.rem)(352)};
`,
    _v92 = _v4.default.div.withConfig({
      displayName: "EmailProviderDropdown__TextWrapper",
      componentId: "sc-15b8e86b-5"
    })`
  display: flex;
  align-items: center;
`,
    _v93 = (0, _v4.default)(_v53.ChevronDown).withConfig({
      displayName: "EmailProviderDropdown__ChevronDown",
      componentId: "sc-15b8e86b-6"
    })`
  width: ${(0, _v47.rem)(28)};
  path {
    fill: ${({
      theme: _v0
    }) => _v0.icons.contentColor90};
  }
`,
    _v94 = _v4.default.div.withConfig({
      displayName: "EmailProviderDropdown__PaidProvidersTitleContainer",
      componentId: "sc-15b8e86b-7"
    })`
  display: flex;
  align-items: center;
  border-top: ${(0, _v47.rem)(1)} solid ${({
      theme: _v0
    }) => _v0.additions.content.border};
`;
  var _v95 = _v0.i(0);
  let _v96 = ({
      onEditPrivacy: _v0
    }) => (0, _v1.jsx)(_v82.Paragraph, {
      size: "2",
      children: (0, _v20.translate)({
        singular: "This video is password protected. Make sure your audience can watch it before you share. {LINK}Edit privacy{/LINK}",
        replacements: {
          LINK: _v0 => (0, _v1.jsx)(_v95.Link, {
            onClick: _v0,
            children: _v0
          }, "password-privacy-notice")
        },
        dictionary: {
          es: {
            singular: "Este video está protegido con una contraseña. Antes de compartirlo, asegúrate de que el público pueda verlo. {LINK}Editar la privacidad{/LINK}"
          },
          "de-DE": {
            singular: "Dieses Video ist kennwortgeschützt. Sorge dafür, dass dein Publikum es ansehen kann, bevor du es teilst. {LINK}Datenschutzeinstellung ändern{/LINK}"
          },
          "fr-FR": {
            singular: "Cette vidéo est protégée par un mot de passe. Assurez-vous que votre public puisse y accéder avant de la partager. {LINK}Modifier la confidentialité{/LINK}"
          },
          "ja-JP": {
            singular: "この動画はパスワードで保護されています。共有する前に、視聴者が閲覧できるようにしてください。{LINK}プライバシー設定を編集{/LINK}"
          },
          "ko-KR": {
            singular: "비밀번호로 보호된 동영상입니다. 공유하기 전에 시청자의 시청 권한을 먼저 확인하세요. {LINK}프라이버시 편집{/LINK}"
          },
          "pt-BR": {
            singular: "Este vídeo é protegido por senha. Certifique-se que o seu público pode vê-lo antes de compartilhar. {LINK}Editar privacidade{/LINK}"
          },
          "zh-CN": {
            singular: "此视频受密码保护。在分享之前，请确保您的观众可以观看。{LINK}编辑隐私{/LINK}"
          }
        }
      })
    }),
    _v97 = ({
      onEditPrivacy: _v0
    }) => (0, _v1.jsx)(_v82.Paragraph, {
      size: "2",
      children: (0, _v20.translate)({
        singular: "This video's privacy is set to Private. Make sure your audience can watch it before you share. {LINK}Edit privacy{/LINK}",
        replacements: {
          LINK: _v0 => (0, _v1.jsx)(_v95.Link, {
            onClick: _v0,
            children: _v0
          }, "private-privacy-notice")
        },
        dictionary: {
          es: {
            singular: "Este video se ha configurado como Privado. Antes de compartirlo, asegúrate de que la audiencia pueda verlo. {LINK}Editar la privacidad{/LINK}"
          },
          "de-DE": {
            singular: "Die Datenschutzeinstellung dieses Videos lautet „Privat“. Sorge dafür, dass dein Publikum es ansehen kann, bevor du es teilst. {LINK}Datenschutzeinstellung ändern{/LINK}"
          },
          "fr-FR": {
            singular: "La vidéo est configurée sur le mode de confidentialité « Privé ». Assurez-vous que votre public puisse y accéder avant de la partager. {LINK}Modifier la confidentialité{/LINK}"
          },
          "ja-JP": {
            singular: "この動画のプライバシーは「プライベート」に設定されています。共有する前に、視聴者が閲覧できるようにしてください。{LINK}プライバシー設定を編集{/LINK}"
          },
          "ko-KR": {
            singular: "동영상의 프라이버시 설정이 '비공개'로 설정되어 있습니다. 공유하기 전에 시청자의 시청 권한을 먼저 확인하세요. {LINK}프라이버시 편집{/LINK}"
          },
          "pt-BR": {
            singular: "A privacidade deste vídeo está definida como Privada. Certifique-se que o seu público consiga vê-lo antes de compartilhar. {LINK}Editar privacidade{/LINK}"
          },
          "zh-CN": {
            singular: "此视频的隐私设置为私人视频。在分享之前，请确保您的观众可以观看。{LINK}编辑隐私{/LINK}"
          }
        }
      })
    }),
    _v98 = () => (0, _v1.jsx)(_v82.Paragraph, {
      size: "2",
      children: (0, _v20.translate)({
        singular: "To let your viewers watch on Vimeo, disable Private Mode in your {LINK}account settings{/LINK}.",
        replacements: {
          LINK: _v0 => (0, _v1.jsx)(_v95.Link, {
            href: "/settings/account/privacy",
            children: _v0
          }, "private-mode-notice")
        },
        dictionary: {
          es: {
            singular: "Para que tus espectadores puedan ver el contenido en Vimeo, deshabilita el modo privado en la {LINK}configuración de la cuenta{/LINK}."
          },
          "de-DE": {
            singular: "Deaktiviere bitte den Privatmodus in deinen {LINK}Kontoeinstellungen{/LINK}, damit deine Zuschauer dein(e) Video(s) auf Vimeo ansehen können."
          },
          "fr-FR": {
            singular: "Pour permettre à vos spectateurs de regarder votre contenu sur Vimeo, désactivez le mode privé dans vos {LINK}paramètres de compte{/LINK}."
          },
          "ja-JP": {
            singular: "視聴者がVimeoで視聴できるようにするには、{LINK}アカウント設定{/LINK}でプライベートモードを無効にしてください。"
          },
          "ko-KR": {
            singular: "시청자가 Vimeo에서 동영상을 볼 수 있게 하려면 {LINK}계정 설정{/LINK}에서 프라이빗 모드를 해제하세요."
          },
          "pt-BR": {
            singular: "Para permitir que seu público assista no Vimeo, desative o Modo privado nas suas {LINK}configurações da conta{/LINK}."
          },
          "zh-CN": {
            singular: "要让观众在 Vimeo 上观看，请在{LINK}帐户设置{/LINK}中禁用私密模式。"
          }
        }
      })
    });
  function _v99({
    asset: _v0,
    showPlayButton: _v1
  }) {
    let _v2 = _v0?.item?.status === "started",
      _v3 = _v0 && _v0?.item?.sizes[_v44(_v0.type)],
      _v4 = _v0 && _v3?.height && _v3.width ? _v3.width / _v3.height : 1.78;
    return (0, _v1.jsxs)(_v101, {
      children: [(0, _v1.jsxs)(_v102, {
        paddingBottom: 10,
        children: [(0, _v1.jsx)(_v104, {
          paddingRight: 8,
          children: _v39
        }), " ", (0, _v1.jsx)(_v103, {
          width: "68%"
        })]
      }), (0, _v1.jsxs)(_v102, {
        paddingBottom: 18,
        children: [(0, _v1.jsx)(_v104, {
          paddingRight: 24,
          children: _v36
        }), " ", (0, _v1.jsx)(_v103, {
          width: "42%"
        })]
      }), (0, _v1.jsxs)(_v105, {
        src: _v2 ? "" : _v3?.link,
        aspectRatio: _v4,
        children: [(0, _v1.jsx)(_v106, {
          show: _v1
        }), _v2 && (0, _v1.jsx)(_v107, {
          size: 200,
          children: _v37
        })]
      }), (0, _v1.jsx)(_v102, {
        paddingBottom: 16,
        children: (0, _v1.jsx)(_v103, {
          width: "71%"
        })
      }), (0, _v1.jsx)(_v102, {
        paddingBottom: 16,
        children: (0, _v1.jsx)(_v103, {
          width: "85%"
        })
      }), (0, _v1.jsx)(_v102, {
        paddingBottom: 0,
        children: (0, _v1.jsx)(_v103, {
          width: "77%"
        })
      })]
    });
  }
  let _v100 = _v4.css`
  left: 50%;
  top: 50%;
  position: absolute;
  transform: translate3d(-50%, -50%, 0);
`,
    _v101 = _v4.default.div.withConfig({
      displayName: "PreviewPanel__Container",
      componentId: "sc-18739291-0"
    })`
  display: table;
  width: 100%;
  flex: 1;
  background-color: ${({
      theme: _v0
    }) => _v0.element.bg5};
  padding: 0 ${(0, _v47.rem)(24)} 8%;
  margin: auto;
`,
    _v102 = _v4.default.div.withConfig({
      displayName: "PreviewPanel__FieldWrapper",
      componentId: "sc-18739291-1"
    })`
  display: flex;
  padding-bottom: ${_v0 => (0, _v47.rem)(_v0.paddingBottom)};
`,
    _v103 = _v4.default.span.withConfig({
      displayName: "PreviewPanel__GreyBar",
      componentId: "sc-18739291-2"
    })`
  height: ${(0, _v47.rem)(16)};
  background-color: ${({
      theme: _v0
    }) => _v0.additions.item.highlight2};
  margin-top: ${(0, _v47.rem)(3)};
  width: ${_v0 => _v0.width};
`,
    _v104 = _v4.default.div.withConfig({
      displayName: "PreviewPanel__Title",
      componentId: "sc-18739291-3"
    })`
  color: ${_v55.core.color.text.secondary};
  font-size: ${(0, _v47.rem)(14)};
  font-weight: 500;
  line-height: ${(0, _v47.rem)(20)};
  padding-right: ${_v0 => (0, _v47.rem)(_v0.paddingRight)};
`,
    _v105 = _v4.default.div.withConfig({
      displayName: "PreviewPanel__ImageWrapper",
      componentId: "sc-18739291-4"
    })`
  position: relative;
  margin: 0 auto ${(0, _v47.rem)(16)};
  ${({
      aspectRatio: _v0,
      src: _v1,
      theme: _v2
    }) => {
      let _v3 = _v0 >= 352 / 288 ? 352 : 288,
        _v4 = _v0 >= 300 / 288 ? 300 : 288,
        _v5 = _v0 >= 165 / 288 ? 165 : 288;
      return _v4.css`
      background: ${_v1 ? `url(${_v1}) center/contain no-repeat` : _v2.additions.item.highlight2};
      width: ${(0, _v47.rem)(Math.min(_v5, _v0 * _v5))};
      height: ${(0, _v47.rem)(Math.min(_v5, _v5 / _v0))};
      @media screen and (min-width: ${(0, _v47.rem)(768)}) {
        width: ${(0, _v47.rem)(Math.min(_v4, _v0 * _v4))};
        height: ${(0, _v47.rem)(Math.min(_v4, _v4 / _v0))};
      }
      @media screen and (min-width: ${(0, _v47.rem)(0)}) {
        width: ${(0, _v47.rem)(Math.min(_v3, _v0 * _v3))};
        height: ${(0, _v47.rem)(Math.min(_v3, _v3 / _v0))};
      }
    `;
    }}
`,
    _v106 = _v4.default.div.withConfig({
      displayName: "PreviewPanel__PlayButtonWrapper",
      componentId: "sc-18739291-5"
    })`
  ${_v100}
  height: 18%;
  width: 18%;
  opacity: 0;
  background: url('https://f.vimeocdn.com/p/images/crawler_play.png') center/contain no-repeat;
  ${({
      show: _v0
    }) => _v0 && _v4.css`
      opacity: 1;
    `}
`,
    _v107 = (0, _v4.default)(_v46.Text).withConfig({
      displayName: "PreviewPanel__InProgressText",
      componentId: "sc-18739291-6"
    })`
  position: absolute;
  width: 100%;
  top: 65%;
  text-align: center;
  @media (min-width: ${768}) {
    top: 70%;
    font-size: ${(0, _v47.rem)(12)};
    line-height: ${(0, _v47.rem)(18)};
  }
`;
  var _v108 = _v0.i(0),
    _v109 = _v0.i(0),
    _v110 = _v0.i(0),
    _v111 = _v0.i(0),
    _v112 = _v0.i(0);
  let _v113 = _v4.default.div.withConfig({
      displayName: "styles__ModalContent",
      componentId: "sc-2e0fc84f-0"
    })`
  background-color: ${({
      theme: _v0
    }) => _v0.element.bg5};
  border-radius: ${(0, _v47.rem)(8)};
  display: flex;
  max-width: ${(0, _v47.rem)(0)};
  overflow: hidden;
  width: 100%;
`,
    _v114 = _v4.default.div.withConfig({
      displayName: "styles__ContentWrapper",
      componentId: "sc-2e0fc84f-1"
    })`
  flex: 1;
  padding: ${(0, _v47.rem)(24)};
  background-color: ${_v55.core.color.surface.tertiary};
`,
    _v115 = _v4.default.div.withConfig({
      displayName: "styles__HeaderWrapper",
      componentId: "sc-2e0fc84f-2"
    })`
  padding-bottom: ${(0, _v47.rem)(20)};
  justify-content: space-between;
`,
    _v116 = _v4.default.form.withConfig({
      displayName: "styles__Options",
      componentId: "sc-2e0fc84f-3"
    })`
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
  gap: ${(0, _v47.rem)(18)};
`,
    _v117 = (0, _v4.default)(_v108.Modal).withConfig({
      displayName: "styles__StyledModal",
      componentId: "sc-2e0fc84f-4"
    })`
  max-width: unset;
  width: ${(0, _v47.rem)(420)};
  @media (min-width: ${768}px) {
    width: ${(0, _v47.rem)(700)};
  }
  @media (min-width: ${0}px) {
    width: ${(0, _v47.rem)(800)};
  }
`,
    _v118 = (0, _v4.default)(_v46.Text).withConfig({
      displayName: "styles__Description",
      componentId: "sc-2e0fc84f-5"
    })`
  font-size: ${_v55.core.typography.size(200)};
`,
    _v119 = _v4.default.header.withConfig({
      displayName: "styles__HeaderContainer",
      componentId: "sc-2e0fc84f-6"
    })`
  display: flex;
  justify-content: ${_v0 => _v0.justifyContent ?? "flex-start"};
`,
    _v120 = (0, _v4.default)(_v109.Radio).withConfig({
      displayName: "styles__RadioButton",
      componentId: "sc-2e0fc84f-7"
    })`
  overflow-wrap: anywhere;
  padding-right: ${_v55.core.space(100)};
`,
    _v121 = (0, _v4.default)(_v111.Checkmark).withConfig({
      displayName: "styles__CheckmarkIcon",
      componentId: "sc-2e0fc84f-8"
    })`
  margin: ${(0, _v47.rem)(4)} !important;
`,
    _v122 = (0, _v4.default)(_v110.Notice).withConfig({
      displayName: "styles__Notice",
      componentId: "sc-2e0fc84f-9"
    })`
  p {
    padding-right: ${(0, _v47.rem)(4)};
  }
`,
    _v123 = (0, _v4.default)(_v21.Button).withConfig({
      displayName: "styles__DismissButton",
      componentId: "sc-2e0fc84f-10"
    })`
  position: absolute;
  right: ${(0, _v47.rem)(14)};
  top: ${(0, _v47.rem)(14)};
`,
    _v124 = (0, _v4.default)(_v112.Skeleton).withConfig({
      displayName: "styles__LinkSkeleton",
      componentId: "sc-2e0fc84f-11"
    })`
  height: ${(0, _v47.rem)(36)};
`,
    _v125 = ({
      title: _v0,
      subTitle: _v1 = null,
      children: _v2
    }) => (0, _v1.jsxs)("div", {
      children: [(0, _v1.jsxs)(_v119, {
        justifyContent: _v1 ? "space-between" : "flex-start",
        children: [(0, _v1.jsx)(_v24.Header, {
          size: "5",
          children: _v0
        }), _v1]
      }), _v2]
    }),
    _v126 = ({
      children: _v0
    }) => (0, _v1.jsx)(_v4.ThemeProvider, {
      theme: _v5.applyCustomThemeSVV,
      children: (0, _v1.jsx)(_v117, {
        active: !0,
        content: (0, _v1.jsx)(_v113, {
          children: _v0
        })
      })
    });
  _v0.s(["EmbedInEmailModal", 0, function ({
    showUpsell: _v0 = !1,
    hasPrivateModeOff: _v1,
    videoId: _v2,
    onClose: _v3,
    onEditPrivacy: _v4,
    onNewGif: _v5
  }) {
    let _v6 = (0, _v2.useRouter)(),
      [_v7, _v8] = (0, _v3.useState)(!0),
      [_v9, _v10] = (0, _v3.useState)(0),
      [_v11, _v12] = (0, _v3.useState)("gmail"),
      [_v13, _v14] = (0, _v3.useState)(""),
      [_v15, _v16] = (0, _v3.useState)(!1),
      [_v17, _v18] = (0, _v3.useState)("vimeo"),
      [_v19, _v20] = (0, _v3.useState)(!1),
      {
        data: _v21
      } = (0, _v16.useGetVideo)({
        where: {
          videoId: _v2
        },
        select: ["name", "privacy", "link", "manageLink"]
      }),
      {
        data: _v22,
        error: _v23,
        mutate: _v24
      } = _v18({
        where: {
          videoId: _v2
        },
        select: _v25
      }),
      _v25 = null === _v22 && !_v23,
      _v26 = _v22?.data.filter(_v0 => _v0.item?.sizes.length || _v0.item?.status === "started") ?? [],
      {
        data: _v27
      } = _v15({
        select: _v26
      }),
      _v28 = _v26?.[_v9],
      _v29 = _v28?.type === "gif",
      _v30 = _v7 && _v29 ? 1 : _v44(_v28?.type);
    (0, _v19.usePollGif)(_v26?.map(_v0 => _v0?.item) ?? [], _v24), (0, _v3.useEffect)(() => {
      _v20(!1);
    }, [_v13, _v9, _v7, _v17, _v11]);
    let _v31 = _v7 && !!_v28 && !!_v28?.item?.sizes[_v30]?.linkWithPlayButton,
      _v32 = _v0 && "gmail" !== _v11,
      _v33 = !1 === _v1,
      _v34 = _v21?.privacy?.view === "nobody" || _v21?.privacy?.view === "password" || _v33,
      _v35 = _v29 && _v28?.item?.status !== "completed",
      _v36 = !_v21 || "custom" === _v17 && (0 === _v13.length || !_v15) || _v35 || _v33,
      _v37 = _v28?.item?.sizes.find(_v0 => _v0.linkWithPlayButton);
    return (0, _v1.jsxs)(_v126, {
      children: [(0, _v1.jsxs)(_v114, {
        children: [(0, _v1.jsxs)(_v115, {
          children: [(0, _v1.jsx)(_v24.Header, {
            size: "4",
            children: _v35
          }), (0, _v1.jsx)(_v118, {
            size: 200,
            children: _v34
          })]
        }), (0, _v1.jsxs)(_v116, {
          onSubmit: _v0 => {
            let _v1;
            if (_v0.preventDefault(), !_v21) return null;
            let _v2 = ((_v0, _v1, _v2, _v3) => {
                let _v4 = null;
                switch (_v0) {
                  case "custom":
                    _v4 = _v1;
                    break;
                  case "vimeo":
                    _v4 = `${_v2}?embed_email_provider=${_v3}`;
                }
                return _v4;
              })(_v17, _v13, _v21.link, _v11),
              _v3 = _v2 ? ((_v1 = _v2.trim()) && !_v1.match(/^(https?|s?ftp):\/\//) && (_v1 = `https://${_v1}`), _v1) : void 0,
              _v4 = _v28?.item?.sizes[_v30],
              _v5 = _v31 && _v4?.linkWithPlayButton || _v4?.link;
            if (!_v32 && _v5) {
              var _v6;
              let _v0;
              _v20(function (_v0, _v1) {
                if (!document) return !1;
                let _v2 = document.createElement("div");
                _v2.setAttribute("style", "position: absolute; left: -2000px;"), _v1 ? _v2.innerHTML = _v0 : _v2.innerText = _v0, _v2.setAttribute("contenteditable", "true"), document.body.appendChild(_v2);
                try {
                  if (window.getSelection) {
                    let _v0 = window.getSelection(),
                      _v1 = document.createRange();
                    _v1.selectNodeContents(_v2), _v0 && (_v0.removeAllRanges(), _v0.addRange(_v1), document.execCommand("copy"), _v0.removeAllRanges());
                  }
                  return document.body.removeChild(_v2), !0;
                } catch (_v0) {
                  return document.body.removeChild(_v2), !1;
                }
              }((_v6 = _v21.name, _v0 = _v3 ? ` href="${_v43(_v3)}"` : "", `<a style="display: block; text-align:center;"${_v0}><img src="${_v43(_v5)}" alt="${_v43(_v6 ?? "")}" style=" max-height:100%; max-width:100%;"/></a>`), "gmail" === _v11));
            }
          },
          children: [(0, _v1.jsx)(_v125, {
            title: _v32,
            children: _v27 && _v27?.data && (0, _v1.jsx)(_v86, {
              value: _v11,
              onChange: _v12,
              showUpsell: _v0,
              emailProviders: _v27.data
            })
          }), (0, _v1.jsxs)(_v125, {
            title: _v29,
            subTitle: _v26?.length ? (0, _v1.jsx)(_v74, {
              currentIndex: _v9 + 1,
              total: _v26.length
            }) : null,
            children: [(0, _v1.jsx)(_v73, {
              isLoading: _v25,
              assets: _v26,
              selectedAssetIndex: _v9,
              setSelectedAssetIndex: _v10,
              onNewGif: () => {
                _v5 ? _v5() : _v21?.manageLink && _v6.push(`${_v21.manageLink}/gifs`);
              }
            }), _v26?.length ? (0, _v1.jsx)(_v22.Toggle, {
              checked: _v7,
              disabled: !_v35 && !_v37,
              label: _v40,
              onChange: () => _v8(_v0 => !_v0),
              size: "sm"
            }) : null]
          }), (0, _v1.jsx)(_v125, {
            title: _v38,
            children: (0, _v1.jsxs)("fieldset", {
              children: [_v21 ? (0, _v1.jsx)(_v120, {
                label: (0, _v20.translate)({
                  singular: '"{TITLE}" on Vimeo',
                  replacements: {
                    TITLE: _v21?.name
                  },
                  dictionary: {
                    es: {
                      singular: '"{TITLE}" en Vimeo'
                    },
                    "de-DE": {
                      singular: "„{TITLE}“ auf Vimeo"
                    },
                    "fr-FR": {
                      singular: "« {TITLE} » sur Vimeo"
                    },
                    "ja-JP": {
                      singular: "Vimeo上の「{TITLE}」"
                    },
                    "ko-KR": {
                      singular: 'Vimeo의 "{TITLE}"'
                    },
                    "pt-BR": {
                      singular: '"{TITLE}" no Vimeo'
                    },
                    "zh-CN": {
                      singular: "Vimeo 上的“{TITLE}”"
                    }
                  }
                }),
                name: "linkTo",
                value: "vimeo",
                checked: "vimeo" === _v17,
                onChange: _v0 => _v18(_v0.currentTarget.value)
              }) : (0, _v1.jsx)(_v124, {}), (0, _v1.jsx)(_v120, {
                label: (0, _v20.translate)({
                  singular: "Custom URL",
                  dictionary: {
                    es: {
                      singular: "URL personalizado"
                    },
                    "de-DE": {
                      singular: "Benutzerdefinierte URL"
                    },
                    "fr-FR": {
                      singular: "URL personnalisée"
                    },
                    "ja-JP": {
                      singular: "カスタム URL"
                    },
                    "ko-KR": {
                      singular: "커스텀 URL"
                    },
                    "pt-BR": {
                      singular: "URL customizada"
                    },
                    "zh-CN": {
                      singular: "自定义 URL"
                    }
                  }
                }),
                name: "linkTo",
                value: "custom",
                checked: "custom" === _v17,
                onChange: _v0 => _v18(_v0.currentTarget.value)
              }), "custom" === _v17 && (0, _v1.jsx)(_v79, {
                url: _v13,
                onChange: _v0 => _v14(_v0.target.value),
                onValid: () => _v16(!0),
                onError: () => _v16(!1)
              }), (0, _v1.jsx)(_v120, {
                label: (0, _v20.translate)({
                  singular: "Do not link",
                  dictionary: {
                    es: {
                      singular: "No enlazar"
                    },
                    "de-DE": {
                      singular: "Nicht verknüpfen"
                    },
                    "fr-FR": {
                      singular: "Ne pas associer"
                    },
                    "ja-JP": {
                      singular: "リンクしない"
                    },
                    "ko-KR": {
                      singular: "링크 안 함"
                    },
                    "pt-BR": {
                      singular: "Não usar link"
                    },
                    "zh-CN": {
                      singular: "不链接"
                    }
                  }
                }),
                name: "linkTo",
                value: "none",
                checked: "none" === _v17,
                onChange: _v0 => _v18(_v0.currentTarget.value)
              })]
            })
          }), _v34 && (0, _v1.jsxs)(_v122, {
            format: "negative",
            icon: null,
            children: [_v33 && (0, _v1.jsx)(_v98, {}), _v21?.privacy?.view === "password" && !_v33 && (0, _v1.jsx)(_v96, {
              onEditPrivacy: _v4
            }), _v21?.privacy?.view === "nobody" && !_v33 && (0, _v1.jsx)(_v97, {
              onEditPrivacy: _v4
            })]
          }), (0, _v1.jsx)(_v21.Button, {
            onClick: _v32 ? () => {
              _v28("copy_code_cta");
            } : () => {
              var _v0, _v1, _v2;
              if (!_v28) return;
              let _v3 = _v28.item?.sizes[_v30];
              _v0 = _v28.type, _v1 = _v3?.startTime, _v2 = _v3?.duration, _v27.BigPictureClient.sendEvent(new _v27.Event("distribution.click_to_copy_email_embed_code", 2, {
                location: "svv",
                link: _v17,
                product: "Distribution",
                path: window.location.pathname,
                email_provider: _v11,
                thumbnail_type: _v0,
                show_play_button: _v7,
                clip_id: _v2,
                start_time: void 0 !== _v1 ? _v1 : null,
                duration: void 0 !== _v2 ? _v2 : null
              }));
            },
            href: _v32 ? "/upgrade" : void 0,
            element: _v32 ? "a" : "button",
            format: _v32 ? "upsell-new" : "primary",
            type: "submit",
            disabled: _v36 && !_v32,
            icon: _v19 ? (0, _v1.jsx)(_v121, {}) : null,
            children: _v32 ? _v42 : _v19 ? _v31 : _v30
          })]
        })]
      }), (0, _v1.jsx)(_v99, {
        asset: _v28,
        showPlayButton: _v31
      }), (0, _v1.jsx)(_v123, {
        format: "soft",
        size: "md",
        variant: "minimalTransparent",
        icon: (0, _v1.jsx)(_v23.DismissX, {}),
        onClick: _v3
      })]
    });
  }], 0);
}