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
    _v10 = _v0.i(0);
  async function _v11({
    baseUrl: _v0,
    select: _v1,
    where: {
      videoId: _v2,
      infringementId: _v3
    },
    ..._v4
  }) {
    return (0, _v9.measureLatency)("getVideoLicensedMusicInfringement", "GET", async () => {
      let _v0 = await fetch(`${_v0}/videos/${_v2}/licensed_music_infringements/${_v3}?fields=${_v1.map(_v10.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "GET"
      });
      if (!_v0.ok) throw new _v10.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v10.deepCamelCase)(_v1);
    });
  }
  var _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0);
  function _v16(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v15.useGctlConfig)();
    return (0, _v12.default)(_v2 ? `/videos/${_v2.where.videoId}/licensed_music_infringements/${_v2.where.infringementId}${(0, _v14.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v11({
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
  "true" === _v8.default.env.STORYBOOK && (0, _v14.assignMswData)(_v16, {
    endpoint: "/videos/:videoId/licensed_music_infringements/:infringementId",
    method: "GET"
  }), "true" === _v8.default.env.STORYBOOK && (0, _v14.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v13.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v15.useGctlConfig)(),
      [_v5, _v6] = (0, _v14.useInternalState)();
    return [(0, _v3.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/videos/${_v0.where.videoId}/licensed_music_infringements/${_v0.where.infringementId}${(0, _v14.serializeQuery)(_v0)}`, _v11({
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
    endpoint: "/videos/:videoId/licensed_music_infringements/:infringementId",
    method: "GET"
  });
  var _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0);
  let _v27 = _v20.default.div.withConfig({
      displayName: "AppealFeedback__Wrapper",
      componentId: "sc-f69b2524-0"
    })`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: auto;
`,
    _v28 = _v20.default.div.withConfig({
      displayName: "AppealFeedback__Buttons",
      componentId: "sc-f69b2524-1"
    })`
  display: flex;
  gap: ${_v23.core.space(200)};
  margin: auto 0 auto auto;
`,
    _v29 = {
      header: (0, _v21.translate)({
        singular: "Your appeal has already been submitted",
        dictionary: {
          es: {
            singular: "Ya se ha presentado tu apelación"
          },
          "de-DE": {
            singular: "Deine Beschwerde wurde bereits eingereicht"
          },
          "fr-FR": {
            singular: "Votre recours a déjà été déposé"
          },
          "ja-JP": {
            singular: "異議申し立てはすでに送信されています"
          },
          "ko-KR": {
            singular: "이의 제기가 이미 제출되었습니다."
          },
          "pt-BR": {
            singular: "Seu recurso já foi enviado"
          },
          "zh-CN": {
            singular: "您的申诉已经提交"
          }
        }
      }),
      message: (0, _v21.translate)({
        singular: "Once a decision about your appeal has been made, you’ll get an email from our team notifying you of the outcome.",
        dictionary: {
          es: {
            singular: "Una vez que se haya tomado una decisión sobre tu apelación, recibirás un correo electrónico de nuestro equipo en el que se te notificará el resultado."
          },
          "de-DE": {
            singular: "Sobald eine Entscheidung über deinen Widerspruch getroffen wurde, erhältst du eine E-Mail von unserem Team, in der wir dich über das Ergebnis informieren."
          },
          "fr-FR": {
            singular: "Une fois qu'une décision aura été prise concernant votre recours, notre équipe vous enverra un e-mail pour vous informer du résultat."
          },
          "ja-JP": {
            singular: "異議申し立てに関する決定が下されると、Vimeoのチームから結果をお知らせするメールが届きます。"
          },
          "ko-KR": {
            singular: "이의 제기에 대한 결정이 내려지면 Vimeo 팀에서 이메일로 결과를 알려드립니다."
          },
          "pt-BR": {
            singular: "Depois que a decisão sobre seu recurso tiver sido tomada, você receberá um e-mail de nossa equipe com a notificação sobre o resultado."
          },
          "zh-CN": {
            singular: "一旦对您的申诉做出决定，您将收到我们团队发送的通知您结果的电子邮件。"
          }
        }
      })
    },
    _v30 = {
      new: _v29,
      appeal_in_progress: _v29,
      submitted: {
        header: (0, _v21.translate)({
          singular: "Your appeal has been submitted",
          dictionary: {
            es: {
              singular: "Tu apelación se ha enviado."
            },
            "de-DE": {
              singular: "Deine Berufung wurde gesendet."
            },
            "fr-FR": {
              singular: "Votre déclaration d'appel a été envoyée"
            },
            "ja-JP": {
              singular: "異議申し立てが送信されました"
            },
            "ko-KR": {
              singular: "이의 제기가 제출되었습니다."
            },
            "pt-BR": {
              singular: "O recurso foi enviado"
            },
            "zh-CN": {
              singular: "您的申诉已提交"
            }
          }
        }),
        message: (0, _v21.translate)({
          singular: "Once a decision about your appeal has been made, you’ll get an email from our team notifying you of the outcome.",
          dictionary: {
            es: {
              singular: "Una vez que se haya tomado una decisión sobre tu apelación, recibirás un correo electrónico de nuestro equipo en el que se te notificará el resultado."
            },
            "de-DE": {
              singular: "Sobald eine Entscheidung über deinen Widerspruch getroffen wurde, erhältst du eine E-Mail von unserem Team, in der wir dich über das Ergebnis informieren."
            },
            "fr-FR": {
              singular: "Une fois qu'une décision aura été prise concernant votre recours, notre équipe vous enverra un e-mail pour vous informer du résultat."
            },
            "ja-JP": {
              singular: "異議申し立てに関する決定が下されると、Vimeoのチームから結果をお知らせするメールが届きます。"
            },
            "ko-KR": {
              singular: "이의 제기에 대한 결정이 내려지면 Vimeo 팀에서 이메일로 결과를 알려드립니다."
            },
            "pt-BR": {
              singular: "Depois que a decisão sobre seu recurso tiver sido tomada, você receberá um e-mail de nossa equipe com a notificação sobre o resultado."
            },
            "zh-CN": {
              singular: "一旦对您的申诉做出决定，您将收到我们团队发送的通知您结果的电子邮件。"
            }
          }
        })
      },
      failed_appeal: {
        header: (0, _v21.translate)({
          singular: "Your appeal has been denied",
          dictionary: {
            es: {
              singular: "Tu apelación ha sido denegada"
            },
            "de-DE": {
              singular: "Deine Beschwerde wurde abgelehnt"
            },
            "fr-FR": {
              singular: "Votre recours a été rejetée"
            },
            "ja-JP": {
              singular: "あなたの異議申し立ては却下されました"
            },
            "ko-KR": {
              singular: "이의 제기가 거부되었습니다."
            },
            "pt-BR": {
              singular: "Seu recurso foi negado"
            },
            "zh-CN": {
              singular: "您的申诉已拒绝"
            }
          }
        }),
        message: (0, _v21.translate)({
          singular: "We’ve reviewed your appeal. Based on your submission, we were unable to verify that you own or are otherwise authorized to use the music used in this video. This video will remain restricted to Private. You can still replace it with a version that doesn’t contain unauthorized music.",
          dictionary: {
            es: {
              singular: "Hemos revisado tu apelación. Basándonos en ella, no hemos podido verificar que seas el propietario o que estés autorizado para usar la música utilizada en este video. Este video permanecerá restringido a Privado. Puedes sustituirlo por una versión que no contenga música no autorizada."
            },
            "de-DE": {
              singular: "Wir haben deinen Widerspruch geprüft. Es war uns nicht möglich, basierend auf deinen Angaben zu überprüfen, ob du die in diesem Video verwendete Musik besitzt oder anderweitig berechtigt bist, diese zu verwenden. Daher bleibt dieses Video weiterhin im Privatmodus. Du kannst es gerne durch eine Version ersetzen, die keine urheberrechtlich geschützte Musik enthält."
            },
            "fr-FR": {
              singular: "Nous avons examiné votre recours. D'après les informations que vous nous avez fournies, nous n'avons pas été en mesure de confirmer que vous êtes propriétaire ou détenez effectivement les droits nécessaire pour utiliser la musique dans cette vidéo. La vidéo restera donc restreinte et définie sur Privé. Vous pouvez toujours la remplacer par une version qui ne contient pas la musique non autorisée."
            },
            "ja-JP": {
              singular: "Vimeoはあなたの異議申し立てを確認しました。送信していただいた内容からは、この動画で使用されている音楽の権利をあなたが所有していること、またはこの音楽の使用を許可されていることを確認できませんでした。この動画は非公開化に制限されたままとなります。ただし、未許可の音楽を含まないバージョンに動画を差し替えることは可能です。"
            },
            "ko-KR": {
              singular: "이의 제기를 검토했습니다. 제출하신 내용을 확인했으나 회원님이 이 동영상에 사용된 음악에 대한 권리를 소유하고 있는지 또는 사용할 권한이 있는지 확인할 수 없었습니다. 이 동영상은 계속 비공개로 제한됩니다. 무허가 음악이 포함되지 않은 버전으로 교체할 수 있습니다."
            },
            "pt-BR": {
              singular: "Analisamos seu recurso. Com base em seu envio, não foi possível verificar se você possui ou está autorizado a usar a música usada neste vídeo. Este vídeo permanecerá restrito no modo privado. Você ainda pode substituir o vídeo por uma versão que não contenha a música protegida por direitos autorais."
            },
            "zh-CN": {
              singular: "我们审查了您的申诉。根据您提交的资料，我们无法核实您是否拥有该视频中使用的音乐，或以其他方式获得了使用授权。该视频仍将限制为私人视频。您仍然可以将其替换为不包含未授权音乐的版本。"
            }
          }
        }),
        link: {
          message: (0, _v21.translate)({
            singular: "Learn more about copyright detection",
            dictionary: {
              es: {
                singular: "Obtén más información sobre la detección de derechos de autor"
              },
              "de-DE": {
                singular: "Erfahre mehr über die Identifizierung von Urheberrechten"
              },
              "fr-FR": {
                singular: "En savoir plus sur l'identification du droit d'auteur"
              },
              "ja-JP": {
                singular: "著作権検出の詳細について知る"
              },
              "ko-KR": {
                singular: "저작권 감지에 대해 자세히 알아보기"
              },
              "pt-BR": {
                singular: "Saiba mais sobre a detecção de direitos autorais"
              },
              "zh-CN": {
                singular: "详细了解版权检测"
              }
            }
          }),
          href: "/help/sso?redirect_to=https://help.vimeo.com/hc/en-us/sections/14798894866449-Automated-Copyright-Detection"
        }
      }
    },
    _v31 = ({
      videoId: _v0,
      status: _v1
    }) => {
      let _v2 = _v30[_v1];
      return (0, _v1.jsxs)(_v27, {
        children: [(0, _v1.jsx)(_v24.Header, {
          size: "3",
          children: _v2.header
        }), (0, _v1.jsx)(_v19.Spacer, {
          size: 200,
          direction: "vertical"
        }), (0, _v1.jsx)(_v25.Paragraph, {
          size: "2",
          children: _v2.message
        }), (0, _v1.jsx)(_v19.Spacer, {
          size: 500,
          direction: "vertical"
        }), _v2?.link && (0, _v1.jsx)(_v25.Paragraph, {
          size: "2",
          children: (0, _v1.jsx)(_v26.Link, {
            format: "basic",
            href: _v2.link.href,
            children: _v2.link.message
          })
        }), (0, _v1.jsx)(_v19.Spacer, {
          size: 500,
          direction: "vertical"
        }), (0, _v1.jsx)(_v19.Spacer, {
          size: 500,
          direction: "vertical"
        }), (0, _v1.jsxs)(_v28, {
          children: ["failed_appeal" === _v1 && (0, _v1.jsx)(_v22.Button, {
            element: "a",
            format: "secondary",
            href: `/manage/videos/${_v0}/replace`,
            children: (0, _v21.translate)({
              singular: "Replace video",
              dictionary: {
                es: {
                  singular: "Reemplazar el video"
                },
                "de-DE": {
                  singular: "Video ersetzen"
                },
                "fr-FR": {
                  singular: "Remplacer la vidéo"
                },
                "ja-JP": {
                  singular: "動画を置き換える"
                },
                "ko-KR": {
                  singular: "동영상 교체"
                },
                "pt-BR": {
                  singular: "Substituir vídeo"
                },
                "zh-CN": {
                  singular: "替换视频"
                }
              }
            })
          }), "submitted" === _v1 ? (0, _v1.jsx)(_v22.Button, {
            element: "a",
            href: "/rights-management",
            children: (0, _v21.translate)({
              singular: "Back to rights management",
              dictionary: {
                es: {
                  singular: "Volver a la gestión de derechos"
                },
                "de-DE": {
                  singular: "Zurück zu Rechteverwaltung"
                },
                "fr-FR": {
                  singular: "Retourner à la gestion des droits"
                },
                "ja-JP": {
                  singular: "著作権管理に戻る"
                },
                "ko-KR": {
                  singular: "권한 관리로 돌아가기"
                },
                "pt-BR": {
                  singular: "Voltar à gestão de direitos"
                },
                "zh-CN": {
                  singular: "返回权利管理"
                }
              }
            })
          }) : (0, _v1.jsx)(_v22.Button, {
            element: "a",
            href: "/manage/videos",
            children: (0, _v21.translate)({
              singular: "Back to my videos",
              dictionary: {
                es: {
                  singular: "Volver a mis videos"
                },
                "de-DE": {
                  singular: "Zurück zu meinen Videos"
                },
                "fr-FR": {
                  singular: "Retourner à mes vidéos"
                },
                "ja-JP": {
                  singular: "動画に戻る"
                },
                "ko-KR": {
                  singular: "동영상으로 돌아가기"
                },
                "pt-BR": {
                  singular: "Voltar aos meus vídeos"
                },
                "zh-CN": {
                  singular: "返回我的视频"
                }
              }
            })
          })]
        })]
      });
    };
  var _v32 = _v0.i(0),
    _v33 = _v0.i(0),
    _v34 = _v0.i(0),
    _v35 = _v0.i(0);
  async function _v36({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      videoId: _v3,
      infringementId: _v4
    },
    ..._v5
  }) {
    return (0, _v9.measureLatency)("postVideoLicensedMusicInfringementLicensedMusicAppeals", "POST", async () => {
      let _v0 = await fetch(`${_v0}/videos/${_v3}/licensed_music_infringements/${_v4}/licensed_music_appeals?fields=${_v1.map(_v10.intoSnakeCase).join(",")}`, {
        ..._v5,
        method: "POST",
        body: JSON.stringify((0, _v10.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v10.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v10.deepCamelCase)(_v1);
    });
  }
  function _v37() {
    let {
        mutate: _v0
      } = (0, _v13.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v15.useGctlConfig)(),
      [_v5, _v6] = (0, _v14.useInternalState)();
    return [(0, _v3.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/videos/${_v0.where.videoId}/licensed_music_infringements/${_v0.where.infringementId}/licensed_music_appeals${(0, _v14.serializeQuery)(_v0)}`, _v36({
          ..._v0,
          baseUrl: _v1,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v2 ? `jwt ${_v2}` : "",
            "Vimeo-Page": `${_v3}`,
            "Accept-Language": _v4 ?? "en"
          }
        }), !1);
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
  }
  async function _v38({
    baseUrl: _v0,
    select: _v1,
    where: {
      videoId: _v2,
      infringementId: _v3,
      appealId: _v4
    },
    ..._v5
  }) {
    return (0, _v9.measureLatency)("getVideoLicensedMusicInfringementLicensedMusicAppealSupportingDocuments", "GET", async () => {
      let _v0 = await fetch(`${_v0}/videos/${_v2}/licensed_music_infringements/${_v3}/licensed_music_appeals/${_v4}/supporting_documents?fields=${_v1.map(_v10.intoSnakeCase).join(",")}`, {
        ..._v5,
        method: "GET"
      });
      if (!_v0.ok) throw new _v10.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v10.deepCamelCase)(_v1);
    });
  }
  async function _v39({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      videoId: _v3,
      infringementId: _v4,
      appealId: _v5
    },
    ..._v6
  }) {
    return (0, _v9.measureLatency)("postVideoLicensedMusicInfringementLicensedMusicAppealSupportingDocuments", "POST", async () => {
      let _v0 = await fetch(`${_v0}/videos/${_v3}/licensed_music_infringements/${_v4}/licensed_music_appeals/${_v5}/supporting_documents?fields=${_v1.map(_v10.intoSnakeCase).join(",")}`, {
        ..._v6,
        method: "POST",
        body: JSON.stringify((0, _v10.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v10.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v10.deepCamelCase)(_v1);
    });
  }
  function _v40() {
    let {
        mutate: _v0
      } = (0, _v13.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v15.useGctlConfig)(),
      [_v5, _v6] = (0, _v14.useInternalState)();
    return [(0, _v3.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/videos/${_v0.where.videoId}/licensed_music_infringements/${_v0.where.infringementId}/licensed_music_appeals/${_v0.where.appealId}/supporting_documents${(0, _v14.serializeQuery)(_v0)}`, _v39({
          ..._v0,
          baseUrl: _v1,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v2 ? `jwt ${_v2}` : "",
            "Vimeo-Page": `${_v3}`,
            "Accept-Language": _v4 ?? "en"
          }
        }), !1);
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
  }
  "true" === _v8.default.env.STORYBOOK && (0, _v14.assignMswData)(_v37, {
    endpoint: "/videos/:videoId/licensed_music_infringements/:infringementId/licensed_music_appeals",
    method: "POST"
  }), "true" === _v8.default.env.STORYBOOK && (0, _v14.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v15.useGctlConfig)();
    return (0, _v12.default)(_v2 ? `/videos/${_v2.where.videoId}/licensed_music_infringements/${_v2.where.infringementId}/licensed_music_appeals/${_v2.where.appealId}/supporting_documents${(0, _v14.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v38({
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
  }, {
    endpoint: "/videos/:videoId/licensed_music_infringements/:infringementId/licensed_music_appeals/:appealId/supporting_documents",
    method: "GET"
  }), "true" === _v8.default.env.STORYBOOK && (0, _v14.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v13.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v15.useGctlConfig)(),
      [_v5, _v6] = (0, _v14.useInternalState)();
    return [(0, _v3.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/videos/${_v0.where.videoId}/licensed_music_infringements/${_v0.where.infringementId}/licensed_music_appeals/${_v0.where.appealId}/supporting_documents${(0, _v14.serializeQuery)(_v0)}`, _v38({
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
    endpoint: "/videos/:videoId/licensed_music_infringements/:infringementId/licensed_music_appeals/:appealId/supporting_documents",
    method: "GET"
  }), "true" === _v8.default.env.STORYBOOK && (0, _v14.assignMswData)(_v40, {
    endpoint: "/videos/:videoId/licensed_music_infringements/:infringementId/licensed_music_appeals/:appealId/supporting_documents",
    method: "POST"
  });
  var _v41 = _v0.i(0),
    _v42 = _v0.i(0),
    _v43 = _v0.i(0),
    _v44 = _v0.i(0),
    _v45 = _v0.i(0),
    _v46 = _v0.i(0),
    _v47 = _v0.i(0);
  let _v48 = _v20.default.div.withConfig({
      displayName: "styles__SubmitFormWrapper",
      componentId: "sc-135a2525-0"
    })`
  display: flex;
  gap: ${_v23.core.space(0)};
`,
    _v49 = _v20.default.div.withConfig({
      displayName: "styles__ButtonContainer",
      componentId: "sc-135a2525-1"
    })`
  justify-content: flex-end;
  display: flex;
  gap: ${_v23.core.space(200)};
`,
    _v50 = _v20.default.form.withConfig({
      displayName: "styles__StyledForm",
      componentId: "sc-135a2525-2"
    })`
  display: flex;
  flex-direction: column;
  gap: ${_v23.core.space(200)};
  max-width: ${(0, _v45.rem)(600)};
`,
    _v51 = (0, _v20.default)(_v25.Paragraph).withConfig({
      displayName: "styles__ErrorMessage",
      componentId: "sc-135a2525-3"
    })`
  display: block;
  color: ${_v23.core.color.status.negative};
`,
    _v52 = (0, _v20.default)(_v47.Radio).withConfig({
      displayName: "styles__StyledRadio",
      componentId: "sc-135a2525-4"
    })`
  // NOTE: There is bold text inside the radio labels, the inline-flex put on the radio label must be redefined as inline-block here, as inline-flex places the <b> element in a flexed position.
  & label {
    display: inline-block;
  }
`,
    _v53 = _v20.default.label.withConfig({
      displayName: "styles__FileInputLabel",
      componentId: "sc-135a2525-5"
    })`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: relative;
  border: 1px solid ${(0, _v46.blue)(400)};
  max-width: 120px;
  padding: 0.75rem;
  border-radius: 0.5rem;
  color: ${(0, _v46.blue)(400)};
  font-weight: 600;
  transition:
    all 170ms ease-in-out,
    font-size 50ms ease-in-out,
    width 0ms linear,
    padding 130ms ease-in-out;

  // focus ring
  &::before {
    content: '';
    box-sizing: content-box;
    width: calc(100% + 0.25rem);
    height: calc(100% + 0.25rem);
    position: absolute;
    border-radius: 0.625rem;
    transition: 150ms ease-in-out;
    transform-origin: center;
    border: 0.125rem solid ${(0, _v46.blue)(400)};
    opacity: 0;
    top: -0.25rem;
    left: -0.25rem;
  }

  &:hover {
    background: ${({
      disabled: _v0
    }) => _v0 ? "initial" : "rgba(0, 147, 203, 0.2)"};
    cursor: ${({
      disabled: _v0
    }) => _v0 ? "not-allowed" : "pointer"};
  }

  & svg {
    height: 20px;
    width: 20px;

    & path {
      fill: ${(0, _v46.blue)(400)};
    }
  }
`,
    _v54 = _v20.default.input.withConfig({
      displayName: "styles__FileInput",
      componentId: "sc-135a2525-6"
    })`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  outline: none;

  &:focus + ${_v53}::before {
    opacity: 1;
    border: 0.125rem solid ${(0, _v46.blue)(400)};
  }
`,
    _v55 = _v20.default.ul.withConfig({
      displayName: "styles__Acknowledgements",
      componentId: "sc-135a2525-7"
    })`
  list-style-type: initial;
  padding-inline-start: 24px;
`,
    _v56 = _v20.default.li.withConfig({
      displayName: "styles__Acknowledgement",
      componentId: "sc-135a2525-8"
    })``,
    _v57 = "original_content",
    _v58 = "explicit_permission",
    _v59 = "other",
    _v60 = [{
      label: (0, _v21.translate)({
        singular: "I own the rights to this music",
        dictionary: {
          es: {
            singular: "Tengo los derechos de esta música"
          },
          "de-DE": {
            singular: "Ich besitze die Rechte an dieser Musik"
          },
          "fr-FR": {
            singular: "Je détiens les droits de cette musique."
          },
          "ja-JP": {
            singular: "この音楽の権利を所有している"
          },
          "ko-KR": {
            singular: "이 음악에 대한 권리를 소유하고 있습니다."
          },
          "pt-BR": {
            singular: "Tenho os direitos desta música"
          },
          "zh-CN": {
            singular: "我拥有此音乐的版权"
          }
        }
      }),
      value: _v57
    }, {
      label: (0, _v21.translate)({
        singular: "I have permission from the owner of the rights to use this music",
        dictionary: {
          es: {
            singular: "Tengo el permiso del propietario de los derechos para utilizar esta música"
          },
          "de-DE": {
            singular: "Ich habe die Erlaubnis des Rechteinhabers zur Verwendung dieser Musik"
          },
          "fr-FR": {
            singular: "J'ai l'autorisation du titulaire des droits d'utiliser cette musique."
          },
          "ja-JP": {
            singular: "この音楽の使用について権利所有者から許可を得ている"
          },
          "ko-KR": {
            singular: "이 음악을 사용할 권리를 가진 소유자로부터 허가를 받았습니다."
          },
          "pt-BR": {
            singular: "Tenho permissão do proprietário dos direitos para usar esta música"
          },
          "zh-CN": {
            singular: "我已获得音乐所有者的使用许可"
          }
        }
      }),
      value: _v58
    }, {
      label: (0, _v21.translate)({
        singular: "I’m otherwise allowed to use this music (for example, it’s in the public domain)",
        dictionary: {
          es: {
            singular: "Estoy autorizado de otra manera a utilizar esta música (por ejemplo, es de dominio público)"
          },
          "de-DE": {
            singular: "Ich bin aus anderen Gründen zur Verwendung dieser Musik berechtigt (z. B., weil sie gemeinfrei ist)"
          },
          "fr-FR": {
            singular: "Je suis autorisé(e) par ailleurs à utiliser cette musique (par exemple, elle appartient au domaine public)."
          },
          "ja-JP": {
            singular: "それ以外の理由で、この音楽の使用が許可されている（例えば、パブリックドメインであるなど）"
          },
          "ko-KR": {
            singular: "다른 방식으로 이 음악의 사용을 허가받았습니다(예: 공개 도메인에 있음)."
          },
          "pt-BR": {
            singular: "É permitido o uso desta música (por exemplo, ela é de domínio público)"
          },
          "zh-CN": {
            singular: "我已通过其他方式获准使用此音乐（例如，它属于公共领域）"
          }
        }
      }),
      value: _v59
    }],
    _v61 = "description",
    _v62 = "files",
    _v63 = {
      [_v57]: [_v62],
      [_v58]: [_v62],
      [_v59]: [_v61]
    },
    _v64 = {
      description: ""
    },
    _v65 = _v0 => parseInt(_v0.split("/").pop() ?? "0");
  function _v66(_v0, _v1) {
    let {
      type: _v2,
      filename: _v3,
      file: _v4,
      ..._v5
    } = _v1;
    if ("cleared" === _v2) return {};
    if (!_v3) return _v0;
    switch (_v2) {
      case "selected":
        if (!_v4) return _v0;
        return {
          ..._v0,
          [_v3]: {
            filename: _v3,
            file: _v4,
            isLarge: _v4.size > 0,
            status: "selected",
            id: null,
            link: null
          }
        };
      case "removed":
        return delete _v0[_v3], {
          ..._v0
        };
      case "updated":
        {
          let _v0 = _v0[_v3];
          if (!_v0) return _v0;
          return {
            ..._v0,
            [_v3]: {
              ..._v0,
              ..._v5
            }
          };
        }
      default:
        throw Error(`Unknown action: ${_v2}`);
    }
  }
  let _v67 = ({
    videoId: _v0,
    infringement: _v1,
    onSubmissionComplete: _v2
  }) => {
    let _v3 = _v65(_v1?.uri ?? ""),
      [_v4, _v5] = (0, _v3.useState)(),
      [_v6, _v7] = (0, _v3.useState)(!1),
      [_v8, _v9] = (0, _v3.useState)(!1),
      [_v10, _v11] = (0, _v3.useReducer)(_v66, {}),
      _v12 = Object.values(_v10),
      _v13 = _v12.length,
      _v14 = void 0 !== _v12.find(_v0 => _v0.isLarge),
      _v15 = _v13 > 5,
      _v16 = _v13 >= 5;
    function _v17(_v0, _v1) {
      _v11({
        type: "updated",
        filename: _v0,
        ..._v1
      });
    }
    (0, _v3.useEffect)(() => {
      if (_v8) {
        let _v0 = !0;
        Object.values(_v10).forEach(({
          status: _v0
        }) => {
          ("uploading" === _v0 || "pending" === _v0 || "selected" === _v0) && (_v0 = !1);
        }), _v0 && _v4 && _v2(_v4);
      }
    }, [_v4, _v10, _v8, _v2]);
    let [_v18, {
        data: _v19,
        error: _v20
      }] = _v37(),
      [_v21, {
        error: _v22,
        data: _v23
      }] = _v40();
    (0, _v3.useEffect)(() => {
      if (_v23) {
        let {
            id: _v0,
            link: _v1,
            filename: _v2
          } = _v23,
          _v3 = _v10[_v2];
        _v3 && "pending" === _v3.status && (_v17(_v2, {
          id: _v0,
          link: _v1,
          status: "uploading"
        }), (async _v0 => {
          try {
            (await fetch(_v1, {
              method: "PUT",
              headers: {
                "x-goog-meta-licensed_music_appeal_supporting_document_id": `${_v0}`
              },
              body: _v0
            })).ok && _v17(_v2, {
              status: "succeeded"
            });
          } catch (_v0) {
            _v17(_v2, {
              status: "failed"
            });
          }
        })(_v3.file));
      }
      _v22 && console.error("Failed to create an appeal:", _v22);
    }, [_v10, _v23, _v22]), (0, _v3.useEffect)(() => {
      if (_v19) {
        _v5(_v19);
        let _v0 = _v65(_v19.uri);
        _v12.filter(({
          status: _v0
        }) => "selected" === _v0).forEach(({
          file: _v0
        }) => {
          let _v1 = _v0.name;
          _v17(_v1, {
            status: "pending"
          }), _v21({
            where: {
              videoId: _v0,
              infringementId: _v3,
              appealId: _v0
            },
            select: ["uri", "id", "link", "filename"],
            variables: {
              filename: _v1,
              mimeType: _v0.type,
              size: `${_v0.size}`
            }
          });
        });
      }
      _v20 && console.error(_v20);
    }, [_v0, _v3, _v12, _v19, _v20, _v21]);
    let {
        register: _v24,
        handleSubmit: _v25,
        reset: _v26,
        formState: {
          errors: _v27,
          isDirty: _v28
        },
        setError: _v29,
        clearErrors: _v30,
        watch: _v31
      } = (0, _v32.useForm)({
        defaultValues: _v64
      }),
      _v32 = _v31(),
      _v33 = _v32.option,
      _v34 = "other" !== _v33,
      _v35 = "other" === _v33,
      _v36 = _v63[_v33],
      _v37 = Array.isArray(_v36) && _v36.every(_v0 => _v0 === _v62 ? _v13 > 0 : !!_v32[_v0]),
      _v38 = 0 === Object.keys(_v27).length,
      _v39 = _v38 && _v28 && _v37;
    return (0, _v3.useEffect)(() => {
      !_v38 && _v37 && _v6 && _v30(), _v6 && !_v37 && (_v35 && !_v27[_v61] && _v29(_v61, {
        message: "Description required"
      }), _v34 && !_v27[_v62] && _v29(_v62, {
        message: "Supporting document required"
      }), (!_v35 || _v35 && "" !== _v32[_v61]) && _v27[_v61] && _v30(_v61), (!_v34 || _v34 && _v13 > 0) && _v27[_v62] && _v30(_v62));
    }, [_v29, _v30, _v38, _v37, _v6, _v35, _v34, _v13, _v32, _v27]), (0, _v1.jsx)(_v48, {
      children: (0, _v1.jsxs)(_v50, {
        onSubmit: _v25(_v0 => {
          _v9(!0);
          let {
            description: _v1,
            option: _v2,
            signature: _v3
          } = _v0;
          _v18({
            where: {
              videoId: _v0,
              infringementId: _v3
            },
            select: ["uri", "createdOn", "modifiedOn"],
            variables: {
              additionalInformation: _v1,
              reason: _v2,
              signature: _v3
            }
          });
        }),
        children: [(0, _v1.jsx)(_v24.Header, {
          size: "3",
          children: (0, _v21.translate)({
            singular: "Submit a copyright appeal",
            dictionary: {
              es: {
                singular: "Presenta una apelación sobre derechos de autor"
              },
              "de-DE": {
                singular: "Urheberrechtswiderspruch absenden"
              },
              "fr-FR": {
                singular: "Déposer un recours concernant des droits d'auteur"
              },
              "ja-JP": {
                singular: "著作権に関する異議申し立てを送信"
              },
              "ko-KR": {
                singular: "저작권 이의 제기 제출"
              },
              "pt-BR": {
                singular: "Enviar um recurso de direitos autorais"
              },
              "zh-CN": {
                singular: "提交版权申诉"
              }
            }
          })
        }), (0, _v1.jsx)(_v25.Paragraph, {
          size: "2",
          children: (0, _v21.translate)({
            singular: "This video contains music that may be owned by someone else. Videos containing protected music are restricted to Private if the issue isn’t resolved within 48 hours.",
            dictionary: {
              es: {
                singular: "Este video contiene música que puede ser propiedad de otra persona. Los videos que contienen música protegida se restringen a Privado si el problema no se resuelve en 48 horas."
              },
              "de-DE": {
                singular: "Dieses Video enthält Musik, die möglicherweise Eigentum einer anderen Person ist. Videos mit urheberrechtlich geschützter Musik werden in den Privatmodus gesetzt, sofern das Problem nicht innerhalb von 48 Stunden behoben wird."
              },
              "fr-FR": {
                singular: "Cette vidéo contient une musique qui pourrait appartenir à autrui. Les vidéos qui contiennent de la musique protégée sont définies uniquement sur Privé si le problème n'a pas été résolu dans les 48 heures."
              },
              "ja-JP": {
                singular: "この動画には、他の人が所有している可能性のある音楽が含まれています。48時間以内にこの問題が解決されない場合、著作権保護対象の音楽を含む動画は非公開化に制限されたままになります。"
              },
              "ko-KR": {
                singular: "이 동영상에는 다른 사람이 소유했을 수 있는 음악이 포함되어 있습니다. 저작권이 있는 음악이 포함된 동영상은 48시간 이내에 문제가 해결되지 않으면 비공개로 제한됩니다."
              },
              "pt-BR": {
                singular: "Este vídeo contém músicas que podem ser de propriedade de outra pessoa. Os vídeos que contêm músicas protegidas são restritos ao modo Privado se o problema não for resolvido em 48 horas."
              },
              "zh-CN": {
                singular: "本视频包含的音乐可能归他人所有。如果问题未在 48 小时内得到解决，则包含受保护音乐的视频将仅限于私密观看。"
              }
            }
          })
        }), (0, _v1.jsx)(_v25.Paragraph, {
          size: "2",
          children: (0, _v21.translate)({
            singular: "If you have permission to use the music, use this form to submit an appeal.",
            dictionary: {
              es: {
                singular: "Si tienes permiso para utilizar la música, utiliza este formulario para presentar una apelación."
              },
              "de-DE": {
                singular: "Wenn du die Erlaubnis zur Verwendung der Musik hast, kannst du über dieses Formular Widerspruch einlegen."
              },
              "fr-FR": {
                singular: "Si vous êtes autorisé(e) à utiliser cette musique, utilisez ce formulaire pour déposer un recours."
              },
              "ja-JP": {
                singular: "音楽の使用許可をお持ちの場合は、このフォームを使用して異議申し立てを送信してください。"
              },
              "ko-KR": {
                singular: "음악 사용 권한이 있는 경우 이 양식을 사용하여 이의 제기를 제출하세요."
              },
              "pt-BR": {
                singular: "Se você tiver permissão para usar a música, use este formulário para enviar um recurso."
              },
              "zh-CN": {
                singular: "如果您已获得使用此音乐的许可，请使用此表单提交申诉。"
              }
            }
          })
        }), (0, _v1.jsxs)("section", {
          children: [(0, _v1.jsx)(_v24.Header, {
            size: "4",
            children: (0, _v21.translate)({
              singular: "Tell us why you’re submitting an appeal",
              dictionary: {
                es: {
                  singular: "Explícanos por qué presentas una apelación"
                },
                "de-DE": {
                  singular: "Teile uns mit, warum du einen Widerspruch einreichst"
                },
                "fr-FR": {
                  singular: "Dites-nous pourquoi vous déposez un recours"
                },
                "ja-JP": {
                  singular: "異議申し立てを送信する理由を教えてください"
                },
                "ko-KR": {
                  singular: "이의 제기를 제출하는 이유를 알려주세요."
                },
                "pt-BR": {
                  singular: "Informe por que você está enviando um recurso"
                },
                "zh-CN": {
                  singular: "告诉我们您提交申诉的原因"
                }
              }
            })
          }), _v60.map(({
            label: _v0,
            value: _v1
          }, _v2) => (0, _v1.jsx)(_v52, {
            label: _v0,
            value: _v1,
            ..._v24("option", {
              required: "Option required"
            })
          }, `reason-${_v2}-${_v1}`)), (0, _v1.jsx)(_v19.Spacer, {
            direction: "vertical",
            size: 150
          }), (0, _v1.jsx)(_v42.TextArea, {
            ..._v24(_v61),
            placeholder: (0, _v21.translate)({
              singular: "Please provide additional information for your appeal",
              dictionary: {
                es: {
                  singular: "Proporciona información adicional para tu apelación"
                },
                "de-DE": {
                  singular: "Bitte gib zusätzliche Informationen zu deiner Beschwerde an"
                },
                "fr-FR": {
                  singular: "Dans le cadre de votre déclaration d'appel, veuillez fournir un complément d'informations."
                },
                "ja-JP": {
                  singular: "異議申し立ての追加情報を提供してください"
                },
                "ko-KR": {
                  singular: "이의 제기에 관한 내용을 추가로 알려주세요."
                },
                "pt-BR": {
                  singular: "Forneça informações adicionais para seu recurso"
                },
                "zh-CN": {
                  singular: "请为您的申述提供补充信息"
                }
              }
            }),
            format: _v27.description ? "negative" : "neutral",
            "aria-invalid": _v27.description ? "true" : "false",
            messages: _v27.description && {
              error: _v27.description.message
            }
          })]
        }), (0, _v1.jsxs)("section", {
          children: [(0, _v1.jsx)(_v24.Header, {
            size: "4",
            children: (0, _v21.translate)({
              singular: "Upload supporting documents",
              dictionary: {
                es: {
                  singular: "Sube documentos de respaldo"
                },
                "de-DE": {
                  singular: "Belegunterlagen hochladen"
                },
                "fr-FR": {
                  singular: "Charger des documents justificatifs"
                },
                "ja-JP": {
                  singular: "補足資料をアップロード"
                },
                "ko-KR": {
                  singular: "증빙 서류 업로드"
                },
                "pt-BR": {
                  singular: "Carregar documentação de suporte"
                },
                "zh-CN": {
                  singular: "上传证明文件"
                }
              }
            })
          }), (0, _v1.jsx)(_v25.Paragraph, {
            size: "2",
            children: (0, _v21.translate)({
              singular: "If you have permission from the owner of the rights to use this music, include a copy of their permission. Upload documents in English only.",
              dictionary: {
                es: {
                  singular: "Si tienes permiso del propietario de los derechos para utilizar esta música, incluye una copia de su autorización. Sube los documentos únicamente en inglés."
                },
                "de-DE": {
                  singular: "Wenn du die Erlaubnis des Rechteinhabers zur Verwendung dieser Musik hast, dann füge bitte eine Kopie der Erlaubnis bei. Die von dir hochgeladenen Dokumente sollten auf Englisch sein."
                },
                "fr-FR": {
                  singular: "Si le titulaire des droits vous a autorisé(e) à utiliser cette musique, joignez une copie de cette autorisation (documents en anglais uniquement)."
                },
                "ja-JP": {
                  singular: "この音楽の使用について権利所有者から許可を得ている場合は、その許可を示す文書のコピーを添付してください。英語の文書のみアップロードできます。"
                },
                "ko-KR": {
                  singular: "이 음악을 사용할 권리를 가진 소유자로부터 허가를 받은 경우 허가 사본을 첨부하세요. 영어로 된 문서만 업로드하세요."
                },
                "pt-BR": {
                  singular: "Se você tiver permissão do proprietário dos direitos para usar essa música, inclua uma cópia desta permissão. Carregue apenas documentos em inglês."
                },
                "zh-CN": {
                  singular: "如果您已获得音乐所有者的使用许可，请附上许可复印件。仅以英文上传文件。"
                }
              }
            })
          }), (0, _v1.jsx)(_v19.Spacer, {
            direction: "vertical",
            size: 150
          }), (0, _v1.jsx)(_v54, {
            id: "file input",
            ..._v24(_v62, {
              validate: _v0 => !_v34 && 0 === _v0.length || _v0.length > 0 || _v13 > 0 && _v13 <= 5
            }),
            type: "file",
            accept: ".doc,.docx,.pdf,.jpg,.png",
            disabled: _v16,
            onChange: _v0 => {
              if (!_v0.target.files?.[0]) return;
              let _v1 = _v0.target.files?.[0];
              _v11({
                type: "selected",
                ...{
                  file: _v1,
                  filename: _v1.name
                }
              });
            }
          }), (0, _v1.jsxs)(_v53, {
            htmlFor: "file input",
            disabled: _v16,
            children: [(0, _v1.jsx)(_v33.Upload, {}), (0, _v21.translate)({
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
            })]
          }), (0, _v1.jsx)(_v25.Paragraph, {
            size: "4",
            style: {
              display: "block",
              margin: `${_v23.core.space(100)} 0`
            },
            children: (0, _v21.translate)({
              singular: "Upload up to {MAX_FILES} files. Supported file types: PDF, DOC, DOCX, JPG, PNG.",
              replacements: {
                MAX_FILES: 5
              },
              dictionary: {
                es: {
                  singular: "Sube hasta {MAX_FILES} archivos. Tipos de archivo admitidos: PDF, DOC, DOCX, JPG, PNG."
                },
                "de-DE": {
                  singular: "Lade bis zu {MAX_FILES} Dateien hoch. Unterstützte Dateitypen: PDF, DOC, DOCX, JPG, PNG."
                },
                "fr-FR": {
                  singular: "Mettez en ligne jusqu'à {MAX_FILES} fichiers. Fichiers pris en charge : PDF, DOC, DOCX, JPG, PNG."
                },
                "ja-JP": {
                  singular: "最大{MAX_FILES}ファイルまでアップロードできます。アップロードできるファイルタイプは、PDF、DOC、DOCX、JPG、PNG です。"
                },
                "ko-KR": {
                  singular: "파일은 최대 {MAX_FILES}개 업로드할 수 있습니다. 지원되는 파일 형식: PDF, DOC, DOCX, JPG, PNG"
                },
                "pt-BR": {
                  singular: "Carregue até {MAX_FILES} arquivos. Tipos de arquivo compatíveis: PDF, DOC, DOCX, JPG, PNG."
                },
                "zh-CN": {
                  singular: "最多上传 {MAX_FILES} 个文件。支持的文件类型：PDF、DOC、DOCX、JPG、PNG。"
                }
              }
            })
          }), _v27.files && (0, _v1.jsx)(_v51, {
            size: "3",
            children: _v27.files.message
          })]
        }), (0, _v1.jsx)("div", {
          children: 0 !== _v12.length && _v12.map((_v0, _v1) => (0, _v1.jsx)(_v43.Notice, {
            format: _v15 || _v0.isLarge ? "negative" : "primary",
            icon: _v0.isLarge ? (0, _v1.jsx)(_v35.CircleExclamation, {}) : (0, _v1.jsx)(_v34.Checkmark, {}),
            onClose: () => {
              _v11({
                type: "removed",
                filename: _v0.filename
              });
            },
            children: _v0.filename
          }, _v1))
        }), _v15 && (0, _v1.jsx)(_v51, {
          size: "3",
          children: (0, _v21.translate)({
            singular: "Max files reached.",
            dictionary: {
              es: {
                singular: "Máximo de archivos alcanzados."
              },
              "de-DE": {
                singular: "Maximale Anzahl an Dateien erreicht."
              },
              "fr-FR": {
                singular: "Nombre maximum de fichiers atteint."
              },
              "ja-JP": {
                singular: "ファイル数の上限に達しました。"
              },
              "ko-KR": {
                singular: "최대 파일 수에 도달했습니다."
              },
              "pt-BR": {
                singular: "Número máximo de arquivos alcançado."
              },
              "zh-CN": {
                singular: "已达到最大文件数。"
              }
            }
          })
        }), _v14 && (0, _v1.jsx)(_v51, {
          size: "3",
          children: (0, _v21.translate)({
            singular: "File is too large, upload files less than {MAXFILESIZE}. Please delete and try again.",
            replacements: {
              MAXFILESIZE: (0, _v44.bytesToSize)(10)
            },
            dictionary: {
              es: {
                singular: "El archivo es demasiado grande, sube archivos de menos de {MAXFILESIZE}. Elimínalo e inténtalo de nuevo."
              },
              "de-DE": {
                singular: "Die Datei ist zu groß. Du kannst nur Dateien hochladen, die kleiner als {MAXFILESIZE} sind. Bitte lösche die Datei und versuche es erneut."
              },
              "fr-FR": {
                singular: "Le fichier est trop volumineux. Mettez en ligne des fichiers dont la taille ne dépasse pas {MAXFILESIZE}. Veuillez le supprimer et réessayer."
              },
              "ja-JP": {
                singular: "ファイルが大きすぎます。{MAXFILESIZE}未満のファイルをアップロードしてください。削除して再度お試しください。"
              },
              "ko-KR": {
                singular: "파일이 너무 큽니다. {MAXFILESIZE} 미만의 파일을 업로드해 주세요. 삭제하고 다시 시도하세요."
              },
              "pt-BR": {
                singular: "O arquivo é muito grande. Carregue arquivos com menos de {MAXFILESIZE}. Exclua-o e tente novamente."
              },
              "zh-CN": {
                singular: "文件过大，请上传小于 {MAXFILESIZE} 的文件。请删除并重试。"
              }
            }
          })
        }), (0, _v1.jsxs)("section", {
          children: [(0, _v1.jsx)(_v24.Header, {
            size: "4",
            children: (0, _v21.translate)({
              singular: "Agree and submit",
              dictionary: {
                es: {
                  singular: "Aceptar y presentar"
                },
                "de-DE": {
                  singular: "Zustimmen und einreichen"
                },
                "fr-FR": {
                  singular: "Accepter et envoyer"
                },
                "ja-JP": {
                  singular: "同意して送信する"
                },
                "ko-KR": {
                  singular: "동의 및 제출"
                },
                "pt-BR": {
                  singular: "Concordar e enviar"
                },
                "zh-CN": {
                  singular: "同意并提交"
                }
              }
            })
          }), (0, _v1.jsx)(_v25.Paragraph, {
            size: "3",
            children: (0, _v21.translate)({
              singular: "By submitting, you:",
              dictionary: {
                es: {
                  singular: "Al enviar:"
                },
                "de-DE": {
                  singular: "Mit der Einreichung:"
                },
                "fr-FR": {
                  singular: "En déposant ce recours, vous :"
                },
                "ja-JP": {
                  singular: "送信すると、以下に同意したことになります。"
                },
                "ko-KR": {
                  singular: "제출함으로써 다음을 확인합니다."
                },
                "pt-BR": {
                  singular: "Ao enviar, você:"
                },
                "zh-CN": {
                  singular: "提交申诉即表示您："
                }
              }
            })
          }), (0, _v1.jsx)(_v19.Spacer, {
            direction: "vertical",
            size: 150
          }), (0, _v1.jsxs)(_v55, {
            children: [(0, _v1.jsx)(_v56, {
              children: (0, _v1.jsx)(_v25.Paragraph, {
                size: "3",
                children: (0, _v21.translate)({
                  singular: "Acknowledge that you may be liable if you knowingly misrepresent any information",
                  dictionary: {
                    es: {
                      singular: "Reconoces que puedes ser considerado responsable si a sabiendas tergiversas cualquier información"
                    },
                    "de-DE": {
                      singular: "erkennst du an, dass du bei bewussten Falschangaben haftbar gemacht werden kannst"
                    },
                    "fr-FR": {
                      singular: "reconnaissez que votre responsabilité est engagée si vous faites sciemment de fausses déclarations ;"
                    },
                    "ja-JP": {
                      singular: "故意に虚偽の情報を記載した場合、責任を負う可能性があること"
                    },
                    "ko-KR": {
                      singular: "정보를 고의로 허위 진술하는 경우 책임을 집니다."
                    },
                    "pt-BR": {
                      singular: "Confirme que você será responsável, se intencionalmente distorcer alguma informação"
                    },
                    "zh-CN": {
                      singular: "确认如果故意误传任何信息，您可能要承担责任"
                    }
                  }
                })
              })
            }), (0, _v1.jsx)(_v56, {
              children: (0, _v1.jsx)(_v25.Paragraph, {
                size: "3",
                children: (0, _v21.translate)({
                  singular: "Acknowledge that the information you’ve submitted may be shared with third parties",
                  dictionary: {
                    es: {
                      singular: "Reconoces que la información que has enviado puede ser compartida con terceros"
                    },
                    "de-DE": {
                      singular: "bestätigst du, dass die von dir übermittelten Informationen an Dritte weitergegeben werden können"
                    },
                    "fr-FR": {
                      singular: "reconnaissez que les informations que vous avez envoyées peuvent être partagées avec des tiers ;"
                    },
                    "ja-JP": {
                      singular: "送信した情報が第三者と共有される可能性があること"
                    },
                    "ko-KR": {
                      singular: "제출한 정보는 타사와 공유될 수 있습니다."
                    },
                    "pt-BR": {
                      singular: "Confirme que as informações que você enviou podem ser compartilhadas com terceiros"
                    },
                    "zh-CN": {
                      singular: "确认您提交的信息可能会与第三方分享"
                    }
                  }
                })
              })
            }), (0, _v1.jsx)(_v56, {
              children: (0, _v1.jsx)(_v25.Paragraph, {
                size: "3",
                children: (0, _v21.translate)({
                  singular: "Declare your belief that this video was restricted by mistake",
                  dictionary: {
                    es: {
                      singular: "Declara que crees que este video fue restringido por error"
                    },
                    "de-DE": {
                      singular: "Du erklärst, dass dieses Video deiner Meinung nach versehentlich eingeschränkt wurde"
                    },
                    "fr-FR": {
                      singular: "Déclarez que vous pensez que la diffusion de cette vidéo a été restreinte par erreur ;"
                    },
                    "ja-JP": {
                      singular: "この動画が制限されたのは間違いだと表明すること"
                    },
                    "ko-KR": {
                      singular: "이 동영상이 실수로 제한되었다고 생각한다면 이의를 제기하세요."
                    },
                    "pt-BR": {
                      singular: "Declarar que você acredita que este vídeo foi restrito por engano"
                    },
                    "zh-CN": {
                      singular: "声明您认为限制此视频是一个错误"
                    }
                  }
                })
              })
            }), (0, _v1.jsx)(_v56, {
              children: (0, _v1.jsx)(_v25.Paragraph, {
                size: "3",
                children: (0, _v21.translate)({
                  singular: "Affirm that the information you’ve provided is true, correct, and complete",
                  dictionary: {
                    es: {
                      singular: "Afirmas que la información que has proporcionado es verdadera, correcta y completa"
                    },
                    "de-DE": {
                      singular: "bestätigst du, dass die von dir angegebenen Informationen wahr, korrekt und vollständig sind"
                    },
                    "fr-FR": {
                      singular: "affirmez que les informations que vous avez fournies sont véridiques, correctes et complètes."
                    },
                    "ja-JP": {
                      singular: "提供した情報が、真実、正確、完全であること"
                    },
                    "ko-KR": {
                      singular: "제공한 정보는 사실이고 정확하며 완전합니다."
                    },
                    "pt-BR": {
                      singular: "Afirme que as informações que você forneceu são verdadeiras, corretas e completas"
                    },
                    "zh-CN": {
                      singular: "确认您提供的信息真实、正确、完整"
                    }
                  }
                })
              })
            })]
          }), (0, _v1.jsx)(_v19.Spacer, {
            direction: "vertical",
            size: 150
          }), (0, _v1.jsx)(_v25.Paragraph, {
            size: "3",
            children: (0, _v21.translate)({
              singular: "Once you submit this appeal, you won’t be able to change or undo it.",
              dictionary: {
                es: {
                  singular: "Una vez que presentes esta apelación, no podrás cambiarla ni deshacerla."
                },
                "de-DE": {
                  singular: "Sobald du diesen Widerspruch eingereicht hast, kannst du ihn nicht mehr ändern oder rückgängig machen."
                },
                "fr-FR": {
                  singular: "Une fois ce recours déposé, vous ne pourrez plus le modifier ou l'annuler."
                },
                "ja-JP": {
                  singular: "この異議申し立てを送信すると、変更したり元に戻したりすることができなくなります。"
                },
                "ko-KR": {
                  singular: "이 이의 제기를 제출한 후에는 이를 변경하거나 취소할 수 없습니다."
                },
                "pt-BR": {
                  singular: "Depois de enviar esse recurso, você não poderá alterá-lo nem desfazê-lo."
                },
                "zh-CN": {
                  singular: "此申诉提交之后，您将无法更改或撤消。"
                }
              }
            })
          }), (0, _v1.jsx)(_v19.Spacer, {
            direction: "vertical",
            size: 150
          }), (0, _v1.jsx)(_v41.Checkbox, {
            label: (0, _v21.translate)({
              singular: "I agree",
              dictionary: {
                es: {
                  singular: "Acepto"
                },
                "de-DE": {
                  singular: "Ich stimme zu"
                },
                "fr-FR": {
                  singular: "J'accepte"
                },
                "ja-JP": {
                  singular: "同意します"
                },
                "ko-KR": {
                  singular: "동의합니다"
                },
                "pt-BR": {
                  singular: "Eu concordo"
                },
                "zh-CN": {
                  singular: "我同意"
                }
              }
            }),
            value: "acknowledged",
            ..._v24("signature", {
              onChange: _v0 => _v7(_v0.target?.checked)
            })
          }), (0, _v1.jsxs)(_v49, {
            children: [(0, _v1.jsx)(_v22.Button, {
              variant: "outline",
              disabled: _v8,
              onClick: () => {
                _v26(), _v11({
                  type: "cleared"
                });
              },
              children: (0, _v21.translate)({
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
            }), (0, _v1.jsx)(_v22.Button, {
              type: "submit",
              disabled: !(_v6 && _v39),
              children: _v8 ? (0, _v1.jsx)(_v6.Spinner, {
                size: "sm"
              }) : (0, _v21.translate)({
                singular: "Submit Appeal",
                dictionary: {
                  es: {
                    singular: "Enviar la apelación"
                  },
                  "de-DE": {
                    singular: "Beschwerde einreichen"
                  },
                  "fr-FR": {
                    singular: "Soumettre une déclaration d'appel"
                  },
                  "ja-JP": {
                    singular: "申し立てを送信"
                  },
                  "ko-KR": {
                    singular: "이의 제기 신청 제출"
                  },
                  "pt-BR": {
                    singular: "Enviar Apelação"
                  },
                  "zh-CN": {
                    singular: "提交申诉"
                  }
                }
              })
            })]
          })]
        })]
      })
    });
  };
  var _v68 = _v0.i(0),
    _v69 = _v0.i(0);
  let _v70 = _v20.default.div.withConfig({
      displayName: "MatchedContentInfo__InfoContainer",
      componentId: "sc-40cb1898-0"
    })`
  display: flex;
`,
    _v71 = _v20.default.div.withConfig({
      displayName: "MatchedContentInfo__InfoIconColumn",
      componentId: "sc-40cb1898-1"
    })`
  padding: 0 ${(0, _v68.rem)(12)} 0 ${(0, _v68.rem)(24)};
`,
    _v72 = _v20.default.div.withConfig({
      displayName: "MatchedContentInfo__InfoTextColumn",
      componentId: "sc-40cb1898-2"
    })`
  padding-right: ${(0, _v68.rem)(12)};
`,
    _v73 = ({
      children: _v0
    }) => (0, _v1.jsx)(_v24.Header, {
      size: "4",
      style: {
        marginBottom: 0
      },
      children: _v0
    }),
    _v74 = ({
      infringement: _v0
    }) => (0, _v1.jsxs)(_v70, {
      children: [(0, _v1.jsx)(_v71, {
        children: (0, _v1.jsx)(_v69.MusicFilled, {
          boxSize: (0, _v68.rem)(36),
          marginTop: (0, _v68.rem)(12)
        })
      }), (0, _v1.jsxs)(_v72, {
        children: [(0, _v1.jsx)(_v73, {
          children: _v0?.title
        }), (0, _v1.jsx)(_v73, {
          children: _v0?.artist
        }), (0, _v1.jsx)(_v73, {
          children: _v0?.label
        }), (0, _v1.jsx)(_v25.Paragraph, {
          size: "2",
          format: "alternative",
          style: {
            display: "block"
          },
          children: (0, _v21.translate)({
            singular: "Music detected",
            dictionary: {
              es: {
                singular: "Música detectada"
              },
              "de-DE": {
                singular: "Musik erkannt"
              },
              "fr-FR": {
                singular: "Musique détectée"
              },
              "ja-JP": {
                singular: "音楽が検出されました"
              },
              "ko-KR": {
                singular: "음악이 감지되었습니다."
              },
              "pt-BR": {
                singular: "Música detectada"
              },
              "zh-CN": {
                singular: "检测到音乐"
              }
            }
          })
        }), (0, _v1.jsx)(_v25.Paragraph, {
          size: "2",
          children: (0, _v1.jsx)(_v26.Link, {
            href: "",
            format: "soft",
            children: (0, _v21.translate)({
              singular: "How do I know if I have permission to use this music?",
              dictionary: {
                es: {
                  singular: "¿Cómo sé si tengo permiso para utilizar esta música?"
                },
                "de-DE": {
                  singular: "Woher weiß ich, ob ich die Erlaubnis zur Verwendung dieser Musik habe?"
                },
                "fr-FR": {
                  singular: "Comment m'assurer que j'ai le droit d'utiliser cette musique ?"
                },
                "ja-JP": {
                  singular: "この音楽の使用許可があるかどうかはどうすればわかりますか？"
                },
                "ko-KR": {
                  singular: "이 음악을 사용할 권한이 있는지 어떻게 알 수 있나요?"
                },
                "pt-BR": {
                  singular: "Como sei se tenho permissão para usar esta música?"
                },
                "zh-CN": {
                  singular: "我如何知道我是否有权使用此音乐？"
                }
              }
            })
          })
        }), (0, _v1.jsx)(_v19.Spacer, {
          size: 200,
          direction: "vertical"
        })]
      })]
    });
  var _v75 = _v0.i(0);
  let _v76 = ({
      videoId: _v0,
      configUrl: _v1
    }) => {
      let _v2 = (0, _v3.useRef)(null),
        {
          player: _v3
        } = (0, _v75.usePlayer)(_v2, _v0, !0, _v1, !1),
        [_v4, _v5] = (0, _v3.useState)();
      return (0, _v3.useEffect)(() => {
        _v3 && _v3.ready && _v3.ready(() => {
          _v3._setEmbedSettings({
            controls: 1,
            playbar: 1,
            share: 1,
            watch_later: 1,
            collections: 1
          }), _v5({
            width: _v3.videoWidth,
            height: _v3.videoHeight
          });
        });
      }, [_v3, _v2]), (0, _v1.jsx)(_v77, {
        width: _v4?.width || 0,
        height: _v4?.height || 0,
        children: (0, _v1.jsx)("div", {
          ref: _v2,
          className: "player js-player"
        })
      });
    },
    _v77 = _v20.default.div.withConfig({
      displayName: "Player__PlayerContainer",
      componentId: "sc-949758c9-0"
    })`
  margin: auto;
  width: ${_v0 => _v0.width / 4}px;
  height: ${_v0 => _v0.height / 4}px;
`;
  _v20.default.div.withConfig({
    displayName: "styles__SubmitFormWrapper",
    componentId: "sc-d4664baa-0"
  })`
  display: flex;
  gap: ${_v23.core.space(0)};
`, _v20.default.div.withConfig({
    displayName: "styles__ButtonContainer",
    componentId: "sc-d4664baa-1"
  })`
  justify-content: flex-end;
  display: flex;
  gap: ${_v23.core.space(200)};
`, _v20.default.form.withConfig({
    displayName: "styles__StyledForm",
    componentId: "sc-d4664baa-2"
  })`
  display: flex;
  flex-direction: column;
  gap: ${_v23.core.space(200)};
  max-width: ${(0, _v45.rem)(600)};
`, (0, _v20.default)(_v25.Paragraph).withConfig({
    displayName: "styles__ErrorMessage",
    componentId: "sc-d4664baa-3"
  })`
  display: block;
  color: ${_v23.core.color.status.negative};
`, (0, _v20.default)(_v47.Radio).withConfig({
    displayName: "styles__StyledRadio",
    componentId: "sc-d4664baa-4"
  })`
  // NOTE: There is bold text inside the radio labels, the inline-flex put on the radio label must be redefined as inline-block here, as inline-flex places the <b> element in a flexed position.
  & label {
    display: inline-block;
  }
`;
  let _v78 = _v20.default.label.withConfig({
    displayName: "styles__FileInputLabel",
    componentId: "sc-d4664baa-5"
  })`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: relative;
  border: 1px solid ${(0, _v46.blue)(400)};
  max-width: 120px;
  padding: 0.75rem;
  border-radius: 0.5rem;
  color: ${(0, _v46.blue)(400)};
  font-weight: 600;
  transition:
    all 170ms ease-in-out,
    font-size 50ms ease-in-out,
    width 0ms linear,
    padding 130ms ease-in-out;

  // focus ring
  &::before {
    content: '';
    box-sizing: content-box;
    width: calc(100% + 0.25rem);
    height: calc(100% + 0.25rem);
    position: absolute;
    border-radius: 0.625rem;
    transition: 150ms ease-in-out;
    transform-origin: center;
    border: 0.125rem solid ${(0, _v46.blue)(400)};
    opacity: 0;
    top: -0.25rem;
    left: -0.25rem;
  }

  &:hover {
    background: ${({
    disabled: _v0
  }) => _v0 ? "initial" : "rgba(0, 147, 203, 0.2)"};
    cursor: ${({
    disabled: _v0
  }) => _v0 ? "not-allowed" : "pointer"};
  }

  & svg {
    height: 20px;
    width: 20px;

    & path {
      fill: ${(0, _v46.blue)(400)};
    }
  }
`;
  _v20.default.input.withConfig({
    displayName: "styles__FileInput",
    componentId: "sc-d4664baa-6"
  })`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  outline: none;

  &:focus + ${_v78}::before {
    opacity: 1;
    border: 0.125rem solid ${(0, _v46.blue)(400)};
  }
`, _v20.default.ul.withConfig({
    displayName: "styles__Acknowledgements",
    componentId: "sc-d4664baa-7"
  })`
  list-style-type: initial;
  padding-inline-start: 24px;
`, _v20.default.li.withConfig({
    displayName: "styles__Acknowledgement",
    componentId: "sc-d4664baa-8"
  })``;
  let _v79 = _v20.default.div.withConfig({
      displayName: "styles__PageLayout",
      componentId: "sc-d4664baa-9"
    })`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`,
    _v80 = _v20.default.main.withConfig({
      displayName: "styles__Main",
      componentId: "sc-d4664baa-10"
    })`
  flex: 1 1 400px;
  flex-shrink: 0;
  margin: 2rem auto;
  padding: 2rem 4rem;
`,
    _v81 = _v20.default.aside.withConfig({
      displayName: "styles__Aside",
      componentId: "sc-d4664baa-11"
    })`
  position: relative;
  flex: 1 1 400px;
  flex-shrink: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 45vw;
  min-height: 100vh;
  padding: 2rem 1rem;
  background: ${(0, _v46.slate)(50)};
`,
    _v82 = _v20.default.div.withConfig({
      displayName: "styles__MatchedContentContent",
      componentId: "sc-d4664baa-12"
    })`
  background: ${_v46.white};
  padding: ${(0, _v45.rem)(12)};
  border-radius: 8px;
`;
  _v20.default.div.withConfig({
    displayName: "styles__Buttons",
    componentId: "sc-d4664baa-13"
  })`
  display: flex;
  gap: ${_v23.core.space(200)};
  margin: auto 0 auto auto;
`;
  let _v83 = ["uri", "title", "artist", "status", "label", "metadata.connections.appeals"],
    _v84 = ({
      videoId: _v0,
      contentMatchId: _v1,
      assetUrls: _v2
    }) => {
      let [_v3, _v4] = (0, _v3.useState)(),
        {
          isValidating: _v5,
          data: _v6,
          error: _v7
        } = _v16({
          select: _v83,
          where: {
            videoId: _v0,
            infringementId: _v1
          }
        }),
        {
          data: _v8
        } = (0, _v7.useGetVideo)({
          where: {
            videoId: _v0
          },
          select: ["configUrl", "name"]
        }),
        _v9 = null;
      if (_v5 || !_v7 && _v6 || window.location.replace(`/manage/videos/${_v0}`), _v6) {
        let _v0 = _v3 ? "submitted" : _v6.status;
        _v9 = null === _v0 ? (0, _v1.jsx)(_v67, {
          videoId: _v0,
          infringement: _v6,
          onSubmissionComplete: _v0 => {
            _v4(_v0);
          }
        }) : (0, _v1.jsx)(_v31, {
          videoId: _v0,
          status: _v0
        });
      } else _v9 = (0, _v1.jsx)(_v6.Spinner, {
        style: {
          margin: "auto",
          paddingTop: "120px"
        }
      });
      return (0, _v1.jsxs)(_v79, {
        children: [(0, _v1.jsx)(_v80, {
          children: _v9
        }), (0, _v1.jsx)(_v81, {
          children: (0, _v1.jsxs)(_v82, {
            children: [(0, _v1.jsx)("div", {
              children: _v2 && (0, _v1.jsx)(_v17.PlayerContextProvider, {
                type: _v18.PlayerType.VimeoPlayer,
                assetUrls: _v2,
                children: _v8?.configUrl ? (0, _v1.jsx)(_v76, {
                  videoId: _v0,
                  configUrl: _v8?.configUrl
                }) : null
              })
            }), (0, _v1.jsxs)("div", {
              children: [(0, _v1.jsx)(_v19.Spacer, {
                direction: "vertical",
                size: 300
              }), _v6 && (0, _v1.jsx)(_v74, {
                infringement: _v6
              })]
            })]
          })
        })]
      });
    };
  var _v85 = _v0.i(0),
    _v86 = _v0.i(0);
  (0, _v4.withPageSetup)(async () => ({
    props: {
      omitEsi: !0,
      hasThemeSupport: !0
    }
  }), {
    requireLogin: !0,
    inlineViewer: !0,
    inlinePlayerAssets: !0
  });
  let _v87 = ({
    playerAssetUrls: _v0
  }) => {
    let {
        query: _v1
      } = (0, _v2.useRouter)(),
      _v2 = _v1.videoId,
      _v3 = _v1.contentMatchId,
      _v4 = _v2 && parseInt(Array.isArray(_v2) ? _v2[0] : _v2),
      _v5 = _v3 && parseInt(Array.isArray(_v3) ? _v3[0] : _v3),
      _v6 = (0, _v3.useContext)(_v86.ViewerContext);
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [_v4 && _v5 && (0, _v1.jsx)(_v84, {
        videoId: _v4,
        contentMatchId: _v5,
        assetUrls: _v0
      }), _v6 && (0, _v1.jsx)(_v85.EssentialFooter, {
        ..._v6
      })]
    });
  };
  _v87.getLayout = _v0 => (0, _v1.jsxs)(_v1.Fragment, {
    children: [(0, _v1.jsx)(_v5.DefaultNavigation, {}), _v0]
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v87], 0);
}