{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = {
    emptySourceData: (0, _v1.translate)({
      singular: "No data to show yet",
      dictionary: {
        es: {
          singular: "Aún no hay datos que mostrar"
        },
        "de-DE": {
          singular: "Noch keine Daten vorhanden"
        },
        "fr-FR": {
          singular: "Aucune donnée n’est encore disponible"
        },
        "ja-JP": {
          singular: "表示するデータはまだありません"
        },
        "ko-KR": {
          singular: "아직 표시할 데이터가 없습니다."
        },
        "pt-BR": {
          singular: "Ainda não há dados para mostrar"
        },
        "zh-CN": {
          singular: "暂无数据可显示"
        }
      }
    }),
    error: (0, _v1.translate)({
      singular: "Unable to load data. Refresh to try again or contact support.",
      dictionary: {
        es: {
          singular: "No se pudieron cargar los datos. Actualice para volver a intentarlo o póngase en contacto con el servicio de asistencia."
        },
        "de-DE": {
          singular: "Daten konnten nicht geladen werden. Laden Sie die Seite neu oder kontaktieren Sie den Support."
        },
        "fr-FR": {
          singular: "Impossible de charger les données. Actualisez la page pour réessayer ou contactez l'assistance."
        },
        "ja-JP": {
          singular: "データを読み込めません。更新して再試行するか、サポートにお問い合わせください。"
        },
        "ko-KR": {
          singular: "데이터를 로드할 수 없습니다. 새로고침하여 다시 시도하거나 지원팀에 문의하세요."
        },
        "pt-BR": {
          singular: "Não foi possível carregar os dados. Atualize para tentar novamente ou entre em contato com a equipe de suporte."
        },
        "zh-CN": {
          singular: "无法加载数据。刷新重试，或联系支持人员。"
        }
      }
    }),
    other: (0, _v1.translate)({
      singular: "Other",
      dictionary: {
        es: {
          singular: "Otro"
        },
        "de-DE": {
          singular: "Sonstiges"
        },
        "fr-FR": {
          singular: "Autre"
        },
        "ja-JP": {
          singular: "その他"
        },
        "ko-KR": {
          singular: "기타"
        },
        "pt-BR": {
          singular: "Outro"
        },
        "zh-CN": {
          singular: "其他"
        }
      }
    }),
    source: (0, _v1.translate)({
      singular: "Source",
      dictionary: {
        es: {
          singular: "Fuente"
        },
        "de-DE": {
          singular: "Quelle"
        },
        "ja-JP": {
          singular: "ソース"
        },
        "ko-KR": {
          singular: "소스"
        },
        "pt-BR": {
          singular: "Fonte"
        },
        "zh-CN": {
          singular: "来源"
        }
      }
    }),
    topSources: (0, _v1.translate)({
      singular: "Top sources",
      dictionary: {
        es: {
          singular: "Recursos principales"
        },
        "de-DE": {
          singular: "Top-Quellen"
        },
        "fr-FR": {
          singular: "Sources principales"
        },
        "ja-JP": {
          singular: "トップ ソース"
        },
        "ko-KR": {
          singular: "최상위 트래픽 소스"
        },
        "pt-BR": {
          singular: "Principais fontes"
        },
        "zh-CN": {
          singular: "主要来源"
        }
      }
    }),
    viewAll: (0, _v1.translate)({
      singular: "View all source data",
      dictionary: {
        es: {
          singular: "Ver los datos de todas las fuentes"
        },
        "de-DE": {
          singular: "Alle Quelldaten anzeigen"
        },
        "fr-FR": {
          singular: "Voir toutes les données sources"
        },
        "ja-JP": {
          singular: "すべてのソースデータを表示"
        },
        "ko-KR": {
          singular: "모든 소스 데이터 보기"
        },
        "pt-BR": {
          singular: "Ver os dados de todas as fontes"
        },
        "zh-CN": {
          singular: "查看所有源数据"
        }
      }
    }),
    views: (0, _v1.translate)({
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
    viewsCount: (_v0, _v1, _v2, _v3) => {
      let _v4 = (0, _v2.formatDisplayNumber)(_v0, _v1);
      return (0, _v1.translate)({
        singular: "{VALUE}{COUNT}{/VALUE}{METRIC}view{/METRIC}",
        plural: "{VALUE}{COUNT}{/VALUE}{METRIC}views{/METRIC}",
        replacements: {
          VALUE: _v2,
          METRIC: _v3,
          COUNT: _v4
        },
        count: _v0,
        dictionary: {
          es: {
            singular: "{VALUE}{COUNT}{/VALUE}{METRIC}vista{/METRIC}",
            plural: "{VALUE}{COUNT}{/VALUE}{METRIC}vistas{/METRIC}"
          },
          "fr-FR": {
            singular: "{VALUE}{COUNT}{/VALUE}{METRIC}vue{/METRIC}",
            plural: "{VALUE}{COUNT}{/VALUE}{METRIC}vues{/METRIC}"
          },
          "ja-JP": {
            singular: "{VALUE}{COUNT}{/VALUE}{METRIC}閲覧{/METRIC}",
            plural: "{VALUE}{COUNT}{/VALUE}{METRIC}閲覧{/METRIC}"
          },
          "ko-KR": {
            singular: "{VALUE}{COUNT}{/VALUE}{METRIC}회{/METRIC}",
            plural: "{VALUE}{COUNT}{/VALUE}{METRIC}회{/METRIC}"
          },
          "pt-BR": {
            singular: "{VALUE}{COUNT}{/VALUE}{METRIC}visualização{/METRIC}",
            plural: "{VALUE}{COUNT}{/VALUE}{METRIC}visualizações{/METRIC}"
          },
          "zh-CN": {
            singular: "{VALUE}{COUNT}{/VALUE}{METRIC} 次观看{/METRIC}",
            plural: "{VALUE}{COUNT}{/VALUE}{METRIC} 次观看{/METRIC}"
          }
        }
      });
    }
  };
  _v0.s(["translations", 0, _v3]);
}