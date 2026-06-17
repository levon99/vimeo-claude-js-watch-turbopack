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
  _v0.s(["ReportActions", 0, ({
    isSubmitDisabled: _v0,
    onClose: _v1,
    onSubmit: _v2
  }) => (0, _v1.jsxs)(_v1.Fragment, {
    children: [(0, _v1.jsx)(_v7.Text, {
      flex: "1",
      variant: "body-md",
      textDecor: "underline",
      children: (0, _v1.jsx)("a", {
        href: "/help/guidelines",
        children: (0, _v8.translate)({
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
        })
      })
    }), (0, _v1.jsx)(_v3.Button, {
      variant: "tertiary",
      size: "md",
      onClick: _v1,
      children: (0, _v8.translate)({
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
    }), (0, _v1.jsx)(_v3.Button, {
      variant: "primary",
      size: "md",
      onClick: _v2,
      isDisabled: _v0,
      children: (0, _v8.translate)({
        singular: "Report",
        dictionary: {
          es: {
            singular: "Denunciar"
          },
          "de-DE": {
            singular: "Melden"
          },
          "fr-FR": {
            singular: "Signaler"
          },
          "ja-JP": {
            singular: "通報"
          },
          "ko-KR": {
            singular: "신고"
          },
          "pt-BR": {
            singular: "Denunciar"
          },
          "zh-CN": {
            singular: "报告"
          }
        }
      })
    })]
  }), "ReportReasonList", 0, ({
    cta: _v0,
    reasons: _v1,
    reportReason: _v2,
    setReportReason: _v3
  }) => (0, _v1.jsxs)(_v1.Fragment, {
    children: [(0, _v1.jsx)(_v7.Text, {
      variant: "body-xl",
      fontWeight: "medium",
      mb: "200",
      children: _v0
    }), (0, _v1.jsx)(_v5.RadioGroup, {
      onChange: _v3,
      value: _v2,
      children: (0, _v1.jsx)(_v6.Stack, {
        spacing: 200,
        children: _v1.map(_v0 => (0, _v1.jsxs)(_v2.Box, {
          children: [(0, _v1.jsx)(_v4.Radio, {
            value: _v0.value,
            children: (0, _v1.jsx)(_v7.Text, {
              variant: "body-md",
              children: _v0.title
            })
          }), (0, _v1.jsx)(_v7.Text, {
            variant: "body-md",
            pl: "300",
            color: "text-secondary",
            children: _v0.description
          })]
        }, _v0.title))
      })
    })]
  })], 0);
  let _v9 = "unselected";
  _v0.s(["REASON_UNSELECTED", 0, _v9], 0);
  let _v10 = [{
    title: (0, _v8.translate)({
      singular: "XXX-rated",
      dictionary: {
        es: {
          singular: "Solo para adultos"
        },
        "de-DE": {
          singular: "XXX-Rated"
        },
        "fr-FR": {
          singular: "classé XXX"
        },
        "ja-JP": {
          singular: "XXX-レーティング"
        },
        "ko-KR": {
          singular: "XXX 등급"
        },
        "pt-BR": {
          singular: "Classificado como XXX"
        },
        "zh-CN": {
          singular: "XXX 分级"
        }
      }
    }),
    description: (0, _v8.translate)({
      singular: "This video contains pornography, advertises a product or service of an erotic nature, or seems primarily focused on sexual stimulation.",
      dictionary: {
        es: {
          singular: "Este video contiene pornografía, publica un producto o servicio de naturaleza erótica, o parece estar dirigido principalmente a la estimulación sexual."
        },
        "de-DE": {
          singular: "Dieses Video enthält Pornografie, bewirbt ein Produkt oder eine Dienstleistung mit erotischem Inhalt, oder scheint primär auf sexuelle Stimulation ausgerichtet zu sein."
        },
        "fr-FR": {
          singular: "Cette vidéo contient de la pornographie, fait la publicité d'un produit ou d'un service de nature érotique, ou semble principalement axée sur la stimulation sexuelle."
        },
        "ja-JP": {
          singular: "この動画にはポルノグラフィ、成人向け商品やサービスの広告、またはアダルト コンテンツが含まれています。"
        },
        "ko-KR": {
          singular: "이 동영상에는 포르노물이 포함되어 있거나 성적인 의미를 갖는 제품 또는 서비스를 광고하거나 주로 성적 자극에 집중하는 것처럼 보입니다."
        },
        "pt-BR": {
          singular: "Este vídeo contém pornografia, anuncia um produto ou serviço de natureza erótica ou parece ter como foco principal o estímulo sexual."
        },
        "zh-CN": {
          singular: "此视频包含色情内容，宣传色情产品或服务，或似乎主要侧重于性刺激。"
        }
      }
    }),
    value: "pornographic"
  }, {
    title: (0, _v8.translate)({
      singular: "Not playing nice",
      dictionary: {
        es: {
          singular: "No se reproduce bien"
        },
        "de-DE": {
          singular: "Jemand schlägt hier über die Stränge"
        },
        "fr-FR": {
          singular: "Ne joue pas fair-play"
        },
        "ja-JP": {
          singular: "他者への配慮に欠けている"
        },
        "ko-KR": {
          singular: "친절함을 유지하지 않음"
        },
        "pt-BR": {
          singular: "A reprodução não está boa"
        },
        "zh-CN": {
          singular: "看得不舒服"
        }
      }
    }),
    description: (0, _v8.translate)({
      singular: "This video contains harassment, incites hatred, or depicts extreme or real-life violence.",
      dictionary: {
        es: {
          singular: "Este video contiene hostilidad, incita al odio o incluye violencia excesiva o de la vida real."
        },
        "de-DE": {
          singular: "Dieses Video enthält belästigende Inhalte, verbreitet Hass oder zeigt extreme oder grafische Gewalt."
        },
        "fr-FR": {
          singular: "Cette vidéo contient des situations de harcèlement, d'incitation à la haine ou d'une violence extrême."
        },
        "ja-JP": {
          singular: "この動画はいじめ、嫌悪感を催すもの、過激な、または実際の暴力シーンを含みます。"
        },
        "ko-KR": {
          singular: "이 동영상에는 괴롭힘에 대한 또는 증오를 선동하는 내용이 포함되어 있거나 과도한 또는 실제 폭력이 묘사되어 있습니다."
        },
        "pt-BR": {
          singular: "Este vídeo contém assédio, incita o ódio ou retrata violência extrema ou real."
        },
        "zh-CN": {
          singular: "此视频包含骚扰内容，煽动仇恨，或描述极端或现实生活暴力。"
        }
      }
    }),
    value: "harassment"
  }, {
    title: (0, _v8.translate)({
      singular: "Uploader did not make this",
      dictionary: {
        es: {
          singular: "La persona que subió el video no es el creador"
        },
        "de-DE": {
          singular: "Der Uploader hat das Video nicht selbst gemacht"
        },
        "fr-FR": {
          singular: "L'utilisateur n'a pas créé ce contenu"
        },
        "ja-JP": {
          singular: "投稿ユーザーが制作したものではない"
        },
        "ko-KR": {
          singular: "업로드한 사람이 만들지 않았음"
        },
        "pt-BR": {
          singular: "Quem carregou não é o criador do vídeo"
        },
        "zh-CN": {
          singular: "非上传者本人制作"
        }
      }
    }),
    description: (0, _v8.translate)({
      singular: "The person who uploaded this video obviously didn't make it (it's a TV show, movie trailer, or ripped from elsewhere on the web).",
      dictionary: {
        es: {
          singular: "Es obvio que la persona que subió este video no es el creador (pues es un programa de televisión, el tráiler de una película o una copia de algún otro sitio de la red)."
        },
        "de-DE": {
          singular: "Die Person, die dieses Video hochgeladen hat, hat es offensichtlich nicht selbst gemacht (es ist eine Fernsehsendung, ein Film-Trailer oder etwas, das irgendwo im Internet gefunden wurde)."
        },
        "fr-FR": {
          singular: "La personne qui a mis en ligne cette vidéo ne l'a manifestement pas créée (il s'agit d'une émission de télé, d'une bande-annonce ou d'un contenu récupéré quelque part sur Internet)."
        },
        "ja-JP": {
          singular: "この動画をアップロードしたメンバーは明らかに制作者ではありません（テレビ番組、映画予告、またウェブサイトのどこかから転載されたものです)。"
        },
        "ko-KR": {
          singular: "동영상을 업로드한 사람과 동영상을 제작한 사람이 분명히 다름(TV 프로그램, 영화 예고편, 외부 사이트에서 잘라온 파일 등)"
        },
        "pt-BR": {
          singular: "Claramente quem carregou este vídeo não foi quem o criou (trata-se de um programa de TV, trailer de filme ou ele foi retirado de outro lugar da internet)."
        },
        "zh-CN": {
          singular: "上传这段视频的人显然没有制作过这段视频（它是电视节目、电影预告片，或者是从网络其他地方搬运来的）。"
        }
      }
    }),
    value: "ripoff"
  }, {
    title: (0, _v8.translate)({
      singular: "Incorrect rating",
      dictionary: {
        es: {
          singular: "Calificación incorrecta"
        },
        "de-DE": {
          singular: "Falsche Bewertung"
        },
        "fr-FR": {
          singular: "Erreur de classification"
        },
        "ja-JP": {
          singular: "レーティングが不正確"
        },
        "ko-KR": {
          singular: "잘못된 등급"
        },
        "pt-BR": {
          singular: "Classificação incorreta"
        },
        "zh-CN": {
          singular: "分级不正确"
        }
      }
    }),
    description: (0, _v8.translate)({
      singular: 'This video should be marked as "Mature" due to nudity, profanity, violence, or drug/alcohol use.',
      dictionary: {
        es: {
          singular: "Este video debe marcarse como “Maduro” debido a desnudos, groserías, violencia o consumo de drogas/alcohol."
        },
        "de-DE": {
          singular: "Dieses Video sollte aufgrund von Nacktheit, obszönen Ausdrücken, Gewalt oder Drogen-/Alkoholkonsum als „für Erwachsene“ gekennzeichnet werden."
        },
        "fr-FR": {
          singular: "Cette vidéo doit être marquée comme « pour adultes » en raison des situations de nudité, de violence, d'utilisation de drogues/d'alcool ou du langage injurieux qu'elle contient."
        },
        "ja-JP": {
          singular: "この動画には、ヌード、冒涜、暴力、またはドラッグ/アルコールの使用が含まれるため、「成人向け」のマークが必要です。"
        },
        "ko-KR": {
          singular: "이 동영상은 나체, 욕설, 폭력 또는 약물 및 음주로 인해 '성인물'로 표시해야 합니다."
        },
        "pt-BR": {
          singular: "Este vídeo deve ser marcado como “Adulto” por conter nudez, linguagem obscena, violência ou uso de drogas/álcool."
        },
        "zh-CN": {
          singular: "由于包含裸体、粗言秽语、暴力或吸毒/酗酒等内容，此视频应标记为“成人”。"
        }
      }
    }),
    value: "incorrect rating"
  }, {
    title: (0, _v8.translate)({
      singular: "Spam",
      dictionary: {
        "ja-JP": {
          singular: "スパム"
        },
        "ko-KR": {
          singular: "스팸"
        },
        "zh-CN": {
          singular: "垃圾邮件"
        }
      }
    }),
    description: (0, _v8.translate)({
      singular: "This video is primarily designed to drive traffic to third party sites, use Search Engine Optimization (SEO) to manipulate search rankings, or otherwise deceive or mislead the audience.",
      dictionary: {
        es: {
          singular: "Este video está diseñado para impulsar el tráfico a sitios de terceros, usar la optimización de motor de búsqueda (SEO) para manipular la calificación de búsquedas, o engañar o estafar a la audiencia."
        },
        "de-DE": {
          singular: "Dieses Video dient vorwiegend dazu, Traffic an externe Websites zu leiten, verwendet Suchmaschinen-Optimierung (SEO), um Suchergebnisse zu manipulieren, oder betrügt bzw. führt den Zuschauer auf andere Art in die Irre."
        },
        "fr-FR": {
          singular: "Cette vidéo est principalement conçue pour orienter le trafic vers des sites tiers, utiliser l'optimisation pour les moteurs de recherche, manipuler le classement dans les résultats de moteurs de recherche, tromper ou induire le public en erreur."
        },
        "ja-JP": {
          singular: "この動画は、第三者サイトへのトラフィックの誘導、検索エンジン最適化 (SEO) を利用した検索ランキングの操作、もしくは、視聴者を欺いたり誤解を招いたりすることが主な目的で制作されています。"
        },
        "ko-KR": {
          singular: "이 동영상은 주로 제3자 사이트에 대한 트래픽을 유발하거나 검색 엔진 최적화(SEO)를 사용하여 검색 순위를 조작하거나 시청자를 기만 또는 현혹시키기 위한 내용으로 구성되어 있습니다."
        },
        "pt-BR": {
          singular: "Este vídeo foi criado com o objetivo principal de gerar tráfego para sites de terceiros, usa Otimização de Sites (SEO) para manipular classificações de pesquisa ou engana de alguma outra forma o público."
        },
        "zh-CN": {
          singular: "本视频的主要目的是将流量引向第三方网站、利用搜索引擎优化 (SEO) 操纵搜索排名，或以其他方式欺骗或误导观众。"
        }
      }
    }),
    value: "spam"
  }, {
    title: (0, _v8.translate)({
      singular: "Strong potential to cause harm",
      dictionary: {
        es: {
          singular: "Fuerte potencial para causar daño"
        },
        "de-DE": {
          singular: "Hohes Potenzial schädlicher Auswirkungen"
        },
        "fr-FR": {
          singular: "Contenu avec fort potentiel dangereux"
        },
        "ja-JP": {
          singular: "危害を加える可能性が高い"
        },
        "ko-KR": {
          singular: "유해한 결과를 불러올 수 있는 콘텐츠"
        },
        "pt-BR": {
          singular: "Forte potencial para causar danos"
        },
        "zh-CN": {
          singular: "极有可能造成伤害"
        }
      }
    }),
    description: (0, _v8.translate)({
      singular: "This video depicts or encourages self-harm, falsely claims that mass tragedies are hoaxes, or perpetuates false or misleading claims about vaccine safety.",
      dictionary: {
        es: {
          singular: "Este video muestra o alienta la autolesión, afirma falsamente que las tragedias masivas son engaños, o perpetúa afirmaciones falsas o engañosas sobre la seguridad de la vacuna."
        },
        "de-DE": {
          singular: "Dieses Video zeigt oder fördert Selbstverletzung, stellt Massentragödien fälschlicherweise als Täuschungen dar oder verbreitet falsche oder irreführende Behauptungen zur Sicherheit von Impfungen."
        },
        "fr-FR": {
          singular: "Cette vidéo met en scène ou encourage des actes d'automutilation, prétend à tort que les catastrophes de grande ampleur sont des canulars, ou émet des allégations erronées ou mensongères concernant la sécurité des vaccins."
        },
        "ja-JP": {
          singular: "この動画は自傷行為を描写または勧めており、大量の惨事がデマであると虚偽の主張をしたり、虚偽またはワクチンの安全性について誤解を招く主張を残しています。"
        },
        "ko-KR": {
          singular: "이 동영상은 자해를 묘사하고 장려하거나 대량 비극을 허위라고 주장하거나 백신 안전에 대한 거짓 또는 오해의 소지가 있는 주장을 지속적으로 제기합니다."
        },
        "pt-BR": {
          singular: "Este vídeo retrata ou incentiva a automutilação, alega falsamente que tragédias em massa são boatos ou perpetua reivindicações falsas ou enganosas sobre a segurança de vacinas."
        },
        "zh-CN": {
          singular: "该视频描绘或鼓励自残，谎称大规模悲剧是恶作剧，或持续宣扬关于疫苗安全的虚假或误导性说法。"
        }
      }
    }),
    value: "causes harm"
  }, {
    title: (0, _v8.translate)({
      singular: "Displays harm to minors",
      dictionary: {
        es: {
          singular: "Muestra violencia hacia menores"
        },
        "de-DE": {
          singular: "Gewaltdarstellung gegenüber Minderjährigen"
        },
        "fr-FR": {
          singular: "Contient des scènes de violence envers des mineurs"
        },
        "ja-JP": {
          singular: "未成年者への警告表示"
        },
        "ko-KR": {
          singular: "아동 및 청소년에 위해를 가하는 내용을 포함합니다."
        },
        "pt-BR": {
          singular: "Exibe abuso de menores"
        },
        "zh-CN": {
          singular: "对未成年人有害"
        }
      }
    }),
    description: (0, _v8.translate)({
      singular: "This video depicts harm or exploitation of a minor.",
      dictionary: {
        es: {
          singular: "Este video muestra la explotación de un menor o violencia hacia él."
        },
        "de-DE": {
          singular: "Dieses Video zeigt Gewalt oder Missbrauch an einer minderjährigen Person."
        },
        "fr-FR": {
          singular: "Cette vidéo contient des scènes de violence ou d'exploitation envers des mineurs."
        },
        "ja-JP": {
          singular: "この動画は未成年の傷害や搾取の場面が含まれています。"
        },
        "ko-KR": {
          singular: "이 동영상은 유해하며 미성년자를 착취하는 내용을 묘사합니다."
        },
        "pt-BR": {
          singular: "Este vídeo mostra danos ou exploração de um menor."
        },
        "zh-CN": {
          singular: "本视频描述了对未成年人的伤害或剥削。"
        }
      }
    }),
    value: "csam"
  }, {
    title: (0, _v8.translate)({
      singular: "Misleads viewers about voting, elections, or election results",
      dictionary: {
        es: {
          singular: "Engaña a los espectadores sobre la votación, las elecciones o los resultados de las elecciones"
        },
        "de-DE": {
          singular: "Irreführung der Zuschauer hinsichtlich Abstimmungen, Wahlen oder Wahlergebnissen"
        },
        "fr-FR": {
          singular: "Induit les spectateurs en erreur à propos du vote, des élections ou des résultats des élections"
        },
        "ja-JP": {
          singular: "投票、選挙、または選挙結果について視聴者を欺くコンテンツ"
        },
        "ko-KR": {
          singular: "시청자에게 투표, 선거 또는 선거 결과에 대한 오해를 유발할 수 있음"
        },
        "pt-BR": {
          singular: "Engana os espectadores sobre votações, eleições ou resultados eleitorais"
        },
        "zh-CN": {
          singular: "在投票、选举或选举结果问题上误导观众"
        }
      }
    }),
    description: (0, _v8.translate)({
      singular: "This video contains false or misleading information about voting, candidate eligibility, or election results, or otherwise seeks to obstruct the voting or election process.",
      dictionary: {
        es: {
          singular: "Este video contiene información falsa o engañosa sobre la votación, la elegibilidad de los candidatos o los resultados de las elecciones, o busca obstruir de otro modo la votación o el proceso electoral."
        },
        "de-DE": {
          singular: "Dieses Video enthält falsche oder irreführende Informationen über die Stimmabgabe, die Wählbarkeit von Kandidaten oder die Wahlergebnisse oder versucht auf andere Weise, die Stimmabgabe oder den Wahlprozess zu behindern."
        },
        "fr-FR": {
          singular: "Cette vidéo contient des informations fausses ou trompeuses concernant le vote, l'éligibilité des candidats ou les résultats des élections, ou cherche à entraver le processus de vote ou d'élection."
        },
        "ja-JP": {
          singular: "この動画は、投票、候補者の資格、または選挙結果に関する虚偽または誤解を招く情報を含むか、投票または選挙のプロセスを妨害しようとしています。"
        },
        "ko-KR": {
          singular: "이 동영상에는 투표, 후보자 자격 또는 선거 결과에 대한 허위 또는 오해의 소지가 있는 정보가 포함되어 있거나 투표 또는 선거 절차를 방해하려는 의도가 담겨 있습니다."
        },
        "pt-BR": {
          singular: "Este vídeo contém informações falsas ou enganosas sobre votação, critérios de candidatos ou resultados eleitorais, ou procura obstruir o processo de votação ou eleição."
        },
        "zh-CN": {
          singular: "本视频包含有关投票、候选人资格或选举结果的虚假或误导性信息，或以其他方式试图阻碍投票或选举过程。"
        }
      }
    }),
    value: "voting misinformation"
  }];
  _v0.s(["ReportReasons", 0, _v10], 0);
  var _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0);
  async function _v19({
    baseUrl: _v0,
    variables: _v1,
    where: {
      videoId: _v2
    },
    ..._v3
  }) {
    return (0, _v17.measureLatency)("postVideoReport", "POST", async () => {
      let _v0 = await fetch(`${_v0}/videos/${_v2}/report`, {
        ..._v3,
        method: "POST",
        body: JSON.stringify((0, _v18.deepSnakeCase)(_v1))
      });
      if (!_v0.ok) throw new _v18.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v18.deepCamelCase)(_v1);
    });
  }
  var _v20 = _v0.i(0),
    _v21 = _v0.i(0);
  function _v22() {
    let {
        mutate: _v0
      } = (0, _v20.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v21.useGctlConfig)(),
      [_v5, _v6] = (0, _v16.useInternalState)();
    return [(0, _v11.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/videos/${_v0.where.videoId}/report${(0, _v16.serializeQuery)(_v0)}`, _v19({
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
  "true" === _v15.default.env.STORYBOOK && (0, _v16.assignMswData)(_v22, {
    endpoint: "/videos/:videoId/report",
    method: "POST"
  }), _v0.s(["useReportVideo", 0, function ({
    clipId: _v0,
    onSuccess: _v1,
    onFailure: _v2
  }) {
    let [_v3, _v4] = (0, _v11.useState)(_v9),
      _v5 = (0, _v8.translate)({
        singular: "Video reported",
        dictionary: {
          es: {
            singular: "Video denunciado"
          },
          "de-DE": {
            singular: "Video gemeldet"
          },
          "fr-FR": {
            singular: "Vidéo signalée"
          },
          "ja-JP": {
            singular: "動画を報告しました"
          },
          "ko-KR": {
            singular: "동영상이 신고되었습니다."
          },
          "pt-BR": {
            singular: "Vídeo denunciado"
          },
          "zh-CN": {
            singular: "视频已报告"
          }
        }
      }),
      _v6 = (0, _v8.translate)({
        singular: "Video could not be reported",
        dictionary: {
          es: {
            singular: "No se pudo denunciar el video"
          },
          "de-DE": {
            singular: "Video konnte nicht gemeldet werden"
          },
          "fr-FR": {
            singular: "Impossible de signaler la vidéo"
          },
          "ja-JP": {
            singular: "動画を報告できませんでした"
          },
          "ko-KR": {
            singular: "동영상을 신고할 수 없습니다."
          },
          "pt-BR": {
            singular: "Não foi possível denunciar o vídeo"
          },
          "zh-CN": {
            singular: "无法报告视频"
          }
        }
      }),
      _v7 = (0, _v12.useToast)(),
      {
        isPosting: _v8,
        postReport: _v9
      } = function ({
        clipId: _v0,
        onFailure: _v1,
        onSuccess: _v2
      }) {
        let [_v3, {
          called: _v4,
          error: _v5,
          loading: _v6
        }] = _v22();
        return (0, _v11.useEffect)(function () {
          _v4 && !_v6 && (_v5 ? _v1?.() : _v2?.());
        }, [_v4, _v5, _v6, _v1, _v2]), {
          isPosting: _v6,
          postReport: async (_v0, _v1) => {
            _v0 && _v0 && "unselected" !== _v0 && (await _v3({
              where: {
                videoId: Number(_v0)
              },
              variables: {
                comment: _v1,
                reason: _v0
              }
            }));
          }
        };
      }({
        clipId: _v0,
        onFailure: (0, _v11.useCallback)(() => {
          _v7({
            title: _v6,
            status: "error",
            icon: (0, _v1.jsx)(_v14.CircleExclamationFilled, {})
          }), _v2?.();
        }, [_v6, _v7, _v2]),
        onSuccess: (0, _v11.useCallback)(() => {
          _v7({
            title: _v5,
            status: "success",
            icon: (0, _v1.jsx)(_v13.CircleCheckFilled, {})
          }), _v1?.();
        }, [_v5, _v7, _v1])
      }),
      _v10 = (0, _v11.useCallback)(() => _v4(_v9), []);
    return {
      reportReason: _v3,
      setReportReason: _v4,
      resetReason: _v10,
      isPosting: _v8,
      postReport: _v9
    };
  }], 0);
}