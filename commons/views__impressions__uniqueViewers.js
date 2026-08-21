{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = {
    views: "views",
    impressions: "impressions",
    uniqueViewers: "uniqueViewers"
  };
  _v0.s(["DataKey", 0, _v2, "TrendType", 0, {
    neutral: "neutral",
    positive: "positive",
    negative: "negative"
  }], 0);
  let _v3 = {
    dataError: (0, _v1.translate)({
      singular: "Error loading data",
      dictionary: {
        es: {
          singular: "Error al cargar los datos"
        },
        "de-DE": {
          singular: "Fehler beim Laden von Daten"
        },
        "fr-FR": {
          singular: "Erreur de chargement des données"
        },
        "ja-JP": {
          singular: "データの読み込み中にエラーが発生しました"
        },
        "ko-KR": {
          singular: "데이터를 로드하는 중 오류가 발생했습니다."
        },
        "pt-BR": {
          singular: "Erro ao carregar dados"
        },
        "zh-CN": {
          singular: "加载数据时出错"
        }
      }
    }),
    fromPrevious: (_v0, _v1) => (0, _v1.translate)({
      singular: "{VALUE} from previous {INTERVAL}",
      replacements: {
        VALUE: _v0,
        INTERVAL: _v1
      },
      dictionary: {
        es: {
          singular: "Un {VALUE} que {INTERVAL} antes"
        },
        "de-DE": {
          singular: "{VALUE} von den letzten {INTERVAL}"
        },
        "fr-FR": {
          singular: "{VALUE} par rapport au {INTERVAL} précédent"
        },
        "ja-JP": {
          singular: "前の{INTERVAL}と比較して{VALUE}"
        },
        "ko-KR": {
          singular: "지난 {INTERVAL} 대비 {VALUE}"
        },
        "pt-BR": {
          singular: "{VALUE} em relação a {INTERVAL} atrás"
        },
        "zh-CN": {
          singular: "{VALUE}，较之前 {INTERVAL}"
        }
      }
    }),
    graphError: (0, _v1.translate)({
      singular: "Some graph data did not load. Refresh to try again or contact support if the problem persists.",
      dictionary: {
        es: {
          singular: "Algunos datos del gráfico no se han cargado. Actualiza para volver a intentarlo o ponte en contacto con el servicio de asistencia si el problema continúa."
        },
        "de-DE": {
          singular: "Einige Diagrammdaten wurden nicht geladen. Aktualisieren Sie, um es erneut zu versuchen, oder wenden Sie sich an den Support, falls das Problem weiterhin besteht."
        },
        "fr-FR": {
          singular: "Certaines données graphiques n'ont pas été chargées. Rechargez la page pour réessayer ou contactez l'assistance si le problème persiste."
        },
        "ja-JP": {
          singular: "一部のグラフデータが読み込まれませんでした。ページを更新して再度お試しください。問題が解決しない場合は、サポートまでお問い合わせください。"
        },
        "ko-KR": {
          singular: "일부 그래프 데이터가 로드되지 않았습니다. 새로고침하여 다시 시도하거나 문제가 계속되면 지원팀에 문의하세요."
        },
        "pt-BR": {
          singular: "Alguns dados gráficos não foram carregados. Atualize para tentar novamente, ou entre em contato com o suporte se o problema persistir."
        },
        "zh-CN": {
          singular: "某些图形数据未加载。如果问题仍然存在，请刷新重试，或联系支持人员。"
        }
      }
    }),
    [_v2.impressions]: (0, _v1.translate)({
      singular: "Impressions",
      dictionary: {
        es: {
          singular: "Impresiones"
        },
        "de-DE": {
          singular: "Impressionen"
        },
        "fr-FR": {
          singular: "Chargements"
        },
        "ja-JP": {
          singular: "インプレッション"
        },
        "ko-KR": {
          singular: "노출 수"
        },
        "pt-BR": {
          singular: "Impressões"
        },
        "zh-CN": {
          singular: "展示量"
        }
      }
    }),
    overview: (0, _v1.translate)({
      singular: "Overview",
      dictionary: {
        es: {
          singular: "Resumen"
        },
        "de-DE": {
          singular: "Übersicht"
        },
        "fr-FR": {
          singular: "Aperçu"
        },
        "ja-JP": {
          singular: "概要"
        },
        "ko-KR": {
          singular: "개요"
        },
        "pt-BR": {
          singular: "Visão geral"
        },
        "zh-CN": {
          singular: "概览"
        }
      }
    }),
    overviewDataError: (0, _v1.translate)({
      singular: "Some overview data did not load. Refresh to try again or contact support if the problem persists.",
      dictionary: {
        es: {
          singular: "Algunos datos generales no se han cargado. Actualiza para volver a intentarlo o ponte en contacto con el servicio de asistencia si el problema continúa."
        },
        "de-DE": {
          singular: "Einige Übersichtsdaten wurden nicht geladen. Aktualisieren Sie, um es erneut zu versuchen, oder wenden Sie sich an den Support, falls das Problem weiterhin besteht."
        },
        "fr-FR": {
          singular: "Certaines données de synthèse n'ont pas été chargées. Rechargez la page pour réessayer ou contactez l'assistance si le problème persiste."
        },
        "ja-JP": {
          singular: "一部の概要データが読み込まれませんでした。ページを更新して再度お試しください。問題が解決しない場合は、サポートまでお問い合わせください。"
        },
        "ko-KR": {
          singular: "일부 개요 데이터가 로드되지 않았습니다. 새로고침하여 다시 시도하거나 문제가 계속되면 지원팀에 문의하세요."
        },
        "pt-BR": {
          singular: "Alguns dados gerais não foram carregados. Atualize para tentar novamente, ou entre em contato com o suporte se o problema persistir."
        },
        "zh-CN": {
          singular: "某些概览数据未加载。如果问题仍然存在，请刷新重试，或联系支持人员。"
        }
      }
    }),
    tooltip: {
      [_v2.impressions]: (0, _v1.translate)({
        singular: "Counts each time your video player loads — including on embeds, previews, and thumbnails — even if no one presses play. This doesn't mean your privacy settings aren't working.",
        dictionary: {
          es: {
            singular: "Cuenta cada vez que se carga tu reproductor de vídeo — incluyendo en incrustaciones, vistas previas y miniaturas — incluso si nadie pulsa reproducir. Esto no significa que tus ajustes de privacidad no estén funcionando."
          },
          "de-DE": {
            singular: "Zählt jedes Mal, wenn Ihr Videoplayer geladen wird — einschließlich bei Einbettungen, Vorschauen und Vorschaubildern — selbst wenn niemand auf Wiedergabe klickt. Das bedeutet nicht, dass Ihre Datenschutzeinstellungen nicht funktionieren."
          },
          "fr-FR": {
            singular: "Compte chaque fois que votre lecteur vidéo se charge — y compris sur les lecteurs intégrés, les aperçus et les vignettes — même si personne n'appuie sur lecture. Cela ne signifie pas que vos paramètres de confidentialité ne fonctionnent pas."
          },
          "ja-JP": {
            singular: "動画プレーヤーが読み込まれるたびにカウントされます — 埋め込み、プレビュー、サムネイルでの読み込みを含みます — 誰も再生ボタンを押さなくてもです。これはプライバシー設定が機能していないということではありません。"
          },
          "ko-KR": {
            singular: "비디오 플레이어가 로드될 때마다 집계됩니다 — 임베드, 미리보기 및 썸네일에서도 마찬가지로, 아무도 재생 버튼을 누르지 않아도 해당됩니다. 이는 귀하의 개인정보 설정이 작동하지 않는다는 의미가 아닙니다."
          },
          "pt-BR": {
            singular: "Conta cada vez que o seu reprodutor de vídeo é carregado — incluindo em vídeos incorporados, pré-visualizações e miniaturas — mesmo que ninguém pressione reproduzir. Isso não significa que suas configurações de privacidade não estejam funcionando."
          },
          "zh-CN": {
            singular: "每次你的视频播放器加载时都会计数 — 包括嵌入、预览和缩略图 — 即使没有人按下播放。 这并不意味着你的隐私设置没有生效。"
          }
        }
      }),
      [_v2.uniqueViewers]: (0, _v1.translate)({
        singular: "People that have watched at least one video",
        dictionary: {
          es: {
            singular: "Personas que han visto, al menos, un video"
          },
          "de-DE": {
            singular: "Personen, die mindestens ein Video angesehen haben"
          },
          "fr-FR": {
            singular: "Personnes ayant regardé au moins une vidéo"
          },
          "ja-JP": {
            singular: "動画を1本以上視聴した人"
          },
          "ko-KR": {
            singular: "동영상을 1개 이상 시청한 사람"
          },
          "pt-BR": {
            singular: "Pessoas que assistiram a pelo menos um vídeo"
          },
          "zh-CN": {
            singular: "至少观看过一个视频的用户"
          }
        }
      }),
      [_v2.views]: (0, _v1.translate)({
        singular: "Number of times videos have been played",
        dictionary: {
          es: {
            singular: "Cantidad de veces que se han reproducido los videos"
          },
          "de-DE": {
            singular: "Wie oft Videos abgespielt wurden"
          },
          "fr-FR": {
            singular: "Nombre de fois où les vidéos ont été vues"
          },
          "ja-JP": {
            singular: "動画が再生された回数"
          },
          "ko-KR": {
            singular: "동영상이 재생된 횟수"
          },
          "pt-BR": {
            singular: "Número de vezes que os vídeos foram reproduzidos"
          },
          "zh-CN": {
            singular: "视频播放次数"
          }
        }
      })
    },
    trendError: (0, _v1.translate)({
      singular: "Some trend data did not load. Refresh to try again or contact support if the problem persists.",
      dictionary: {
        es: {
          singular: "Algunos datos de tendencias no se han cargado. Actualiza para volver a intentarlo o ponte en contacto con el servicio de asistencia si el problema continúa."
        },
        "de-DE": {
          singular: "Einige Trenddaten wurden nicht geladen. Aktualisieren Sie, um es erneut zu versuchen, oder wenden Sie sich an den Support, falls das Problem weiterhin besteht."
        },
        "fr-FR": {
          singular: "Certaines données sur les tendances n'ont pas été chargées. Rechargez la page pour réessayer ou contactez l'assistance si le problème persiste."
        },
        "ja-JP": {
          singular: "一部のトレンドデータが読み込まれませんでした。ページを更新して再度お試しください。問題が解決しない場合は、サポートまでお問い合わせください。"
        },
        "ko-KR": {
          singular: "일부 트렌드 데이터가 로드되지 않았습니다. 새로고침하여 다시 시도하거나 문제가 계속되면 지원팀에 문의하세요."
        },
        "pt-BR": {
          singular: "Alguns dados de tendências não foram carregados. Atualize para tentar novamente, ou entre em contato com o suporte se o problema persistir."
        },
        "zh-CN": {
          singular: "某些趋势数据未加载。如果问题仍然存在，请刷新重试，或联系支持人员。"
        }
      }
    }),
    trendNotAvailable: (0, _v1.translate)({
      singular: "Trend data not available",
      dictionary: {
        es: {
          singular: "No hay datos disponibles sobre las tendencias"
        },
        "de-DE": {
          singular: "Trenddaten nicht verfügbar"
        },
        "fr-FR": {
          singular: "Données sur les tendances non disponibles"
        },
        "ja-JP": {
          singular: "トレンドデータは利用できません"
        },
        "ko-KR": {
          singular: "트렌드 데이터를 사용할 수 없습니다."
        },
        "pt-BR": {
          singular: "Dados de tendências não disponíveis"
        },
        "zh-CN": {
          singular: "趋势数据不可用"
        }
      }
    }),
    [_v2.uniqueViewers]: (0, _v1.translate)({
      singular: "Unique viewers",
      dictionary: {
        es: {
          singular: "Espectadores únicos"
        },
        "de-DE": {
          singular: "Eindeutige Zuschauende"
        },
        "fr-FR": {
          singular: "Spectateurs uniques"
        },
        "ja-JP": {
          singular: "ユニーク視聴者数"
        },
        "ko-KR": {
          singular: "순 시청자 수"
        },
        "pt-BR": {
          singular: "Visualizações únicas"
        },
        "zh-CN": {
          singular: "独立观众数"
        }
      }
    }),
    [_v2.views]: (0, _v1.translate)({
      singular: "Views",
      dictionary: {
        es: {
          singular: "Vistas"
        },
        "de-DE": {
          singular: "Ansichten"
        },
        "fr-FR": {
          singular: "Vues"
        },
        "ja-JP": {
          singular: "視聴数"
        },
        "ko-KR": {
          singular: "조회 수"
        },
        "pt-BR": {
          singular: "Visualizações"
        },
        "zh-CN": {
          singular: "观看量"
        }
      }
    }),
    viewAll: (0, _v1.translate)({
      singular: "View all video data",
      dictionary: {
        es: {
          singular: "Ver todos los datos de video"
        },
        "de-DE": {
          singular: "Alle Videodaten anzeigen"
        },
        "fr-FR": {
          singular: "Voir toutes les données vidéo"
        },
        "ja-JP": {
          singular: "すべての動画データを見る"
        },
        "ko-KR": {
          singular: "모든 동영상 데이터 보기"
        },
        "pt-BR": {
          singular: "Exibir todos os dados de vídeo"
        },
        "zh-CN": {
          singular: "查看所有视频数据"
        }
      }
    }),
    data: {
      [_v2.views]: (_v0, _v1) => (0, _v1.translate)({
        singular: "{VALUE} view",
        plural: "{VALUE} views",
        replacements: {
          VALUE: _v1
        },
        count: _v0,
        dictionary: {
          es: {
            singular: "{VALUE} vista",
            plural: "{VALUE} vistas"
          },
          "de-DE": {
            singular: "{VALUE} Ansicht",
            plural: "{VALUE} Ansichten"
          },
          "fr-FR": {
            singular: "{VALUE} vue",
            plural: "{VALUE} vues"
          },
          "ja-JP": {
            singular: "視聴回数: {VALUE}",
            plural: "視聴回数: {VALUE}"
          },
          "ko-KR": {
            singular: "{VALUE}회",
            plural: "{VALUE}회"
          },
          "pt-BR": {
            singular: "{VALUE} visualização",
            plural: "{VALUE} visualizações"
          },
          "zh-CN": {
            singular: "{VALUE} 观看",
            plural: "{VALUE} 次观看"
          }
        }
      }),
      [_v2.impressions]: (_v0, _v1) => (0, _v1.translate)({
        singular: "{VALUE} impression",
        plural: "{VALUE} impressions",
        replacements: {
          VALUE: _v1
        },
        count: _v0,
        dictionary: {
          es: {
            singular: "{VALUE} impresión",
            plural: "{VALUE} impresiones"
          },
          "de-DE": {
            singular: "{VALUE} Impression",
            plural: "{VALUE} Impressionen"
          },
          "fr-FR": {
            singular: "{VALUE} chargement",
            plural: "{VALUE} chargements"
          },
          "ja-JP": {
            singular: "{VALUE} インプレッション",
            plural: "{VALUE} インプレッション"
          },
          "ko-KR": {
            singular: "{VALUE} 노출 횟수",
            plural: "{VALUE} 노출 횟수"
          },
          "pt-BR": {
            singular: "{VALUE} Impressão",
            plural: "{VALUE} Impressões"
          },
          "zh-CN": {
            singular: "{VALUE} 次展示",
            plural: "{VALUE} 次展示"
          }
        }
      }),
      [_v2.uniqueViewers]: (_v0, _v1) => (0, _v1.translate)({
        singular: "{VALUE} unique viewer",
        plural: "{VALUE} unique viewers",
        replacements: {
          VALUE: _v1
        },
        count: _v0,
        dictionary: {
          es: {
            singular: "{VALUE} espectador único",
            plural: "{VALUE} espectadores únicos"
          },
          "de-DE": {
            singular: "{VALUE} eindeutiger Zuschauender",
            plural: "{VALUE} eindeutige Zuschauende"
          },
          "fr-FR": {
            singular: "{VALUE} spectateur unique",
            plural: "{VALUE} spectateurs uniques"
          },
          "ja-JP": {
            singular: "{VALUE}人のユニーク視聴者",
            plural: "{VALUE}人のユニーク視聴者"
          },
          "ko-KR": {
            singular: "순 시청자 수 {VALUE}명",
            plural: "순 시청자 수 {VALUE}명"
          },
          "pt-BR": {
            singular: "{VALUE} espectador único",
            plural: "{VALUE} espectadores únicos"
          },
          "zh-CN": {
            singular: "{VALUE} 名独立观众",
            plural: "{VALUE} 名独立观众"
          }
        }
      })
    },
    emptyStateHeader: (0, _v1.translate)({
      singular: "See how your videos perform",
      dictionary: {
        es: {
          singular: "Conozca el rendimiento de sus videos"
        },
        "de-DE": {
          singular: "Sieh, wie deine Videos abschneiden"
        },
        "fr-FR": {
          singular: "Suivez vos résultats vidéo"
        },
        "ja-JP": {
          singular: "動画のパフォーマンスを確認"
        },
        "ko-KR": {
          singular: "동영상 성과를 파악하세요"
        },
        "pt-BR": {
          singular: "Veja o desempenho dos seus vídeos"
        },
        "zh-CN": {
          singular: "查看您的视频表现"
        }
      }
    }),
    emptyStateDescription: (0, _v1.translate)({
      singular: "Track video views, impressions, unique viewers, and other metrics.",
      dictionary: {
        es: {
          singular: "Realice un seguimiento de las visualizaciones de los videos, las impresiones, los espectadores únicos y otras métricas."
        },
        "de-DE": {
          singular: "Verfolge Videoaufrufe, Impressionen, eindeutige Zuschauende und andere Kennzahlen."
        },
        "fr-FR": {
          singular: "Suivez les vues des vidéos, les impressions, le nombre de spectateurs uniques et d'autres indicateurs."
        },
        "ja-JP": {
          singular: "動画の視聴回数、インプレッション数、ユニーク視聴者数、その他の指標を追跡します。"
        },
        "ko-KR": {
          singular: "동영상 조회수, 노출 수, 순 시청자 수 및 기타 지표를 추적하세요."
        },
        "pt-BR": {
          singular: "Acompanhe as visualizações dos vídeos, impressões, visualizações únicas e outras métricas."
        },
        "zh-CN": {
          singular: "跟踪视频的观看量、展示量、独立观众数量和其他指标。"
        }
      }
    }),
    dateRange: (_v0, _v1, _v2) => (0, _v1.translate)({
      singular: "{START} to {END}",
      replacements: {
        START: _v0.setLocale(_v2).toLocaleString({
          month: "short",
          day: "numeric"
        }),
        END: _v1.setLocale(_v2).toLocaleString({
          month: "short",
          day: "numeric"
        })
      },
      dictionary: {
        es: {
          singular: "{START} a {END}"
        },
        "de-DE": {
          singular: "{START} bis {END}"
        },
        "fr-FR": {
          singular: "Du {START} au {END}"
        },
        "ja-JP": {
          singular: "{START}～{END}"
        },
        "ko-KR": {
          singular: "{START} ~ {END}"
        },
        "pt-BR": {
          singular: "De {START} a {END}"
        },
        "zh-CN": {
          singular: "从 {START} 至 {END}"
        }
      }
    })
  };
  _v0.s(["translations", 0, _v3], 0);
}