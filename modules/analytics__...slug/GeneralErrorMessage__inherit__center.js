{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  _v0.s(["GeneralErrorMessage", 0, () => (0, _v1.jsx)(_v3.Center, {
    flexGrow: "1",
    height: "inherit",
    textAlign: "center",
    children: (0, _v1.jsxs)(_v2.Box, {
      children: [(0, _v1.jsx)(_v5.CircleExclamation, {
        boxSize: "1rem",
        color: "text-secondary",
        marginBottom: "0.25rem"
      }), (0, _v6.translate)({
        singular: "{ERROR}Unable to load data.{/ERROR}",
        replacements: {
          ERROR: _v0 => (0, _v1.jsx)(_v4.Text, {
            variant: "body-xl",
            display: "block",
            color: "text-secondary",
            fontSize: "0.75rem",
            textAlign: "center",
            children: _v0
          })
        },
        dictionary: {
          es: {
            singular: "{ERROR}No se pudieron cargar los datos.{/ERROR}"
          },
          "de-DE": {
            singular: "{ERROR}Daten konnten nicht geladen werden.{/ERROR}"
          },
          "fr-FR": {
            singular: "{ERROR}Impossible de charger les données.{/ERROR}"
          },
          "ja-JP": {
            singular: "{ERROR}データを読み込めません。{/ERROR}"
          },
          "ko-KR": {
            singular: "{ERROR}데이터를 로드할 수 없습니다.{/ERROR}"
          },
          "pt-BR": {
            singular: "{ERROR}Não foi possível carregar os dados.{/ERROR}"
          },
          "zh-CN": {
            singular: "{ERROR}无法加载数据。{/ERROR}"
          }
        }
      }), (0, _v1.jsx)(_v4.Text, {
        variant: "body-xl",
        display: "block",
        color: "text-secondary",
        fontSize: "0.75rem",
        textAlign: "center",
        children: (0, _v6.translate)({
          singular: "{REFRESH}Refresh{/REFRESH} to try again or {ANCHOR}contact support{/ANCHOR}.",
          replacements: {
            REFRESH: _v0 => (0, _v1.jsx)(_v4.Text, {
              variant: "body-xl",
              as: "a",
              fontSize: "0.75rem",
              textDecoration: "underline",
              cursor: "pointer",
              onClick: () => {
                window.location.reload();
              },
              children: _v0
            }),
            ANCHOR: _v0 => (0, _v1.jsx)(_v4.Text, {
              variant: "body-xl",
              as: "a",
              fontSize: "0.75rem",
              textDecoration: "underline",
              href: "/help/contact",
              children: _v0
            })
          },
          dictionary: {
            es: {
              singular: "{REFRESH}Actualice{/REFRESH} para volver a intentarlo o {ANCHOR}póngase en contacto con el servicio de asistencia{/ANCHOR}."
            },
            "de-DE": {
              singular: "{REFRESH}Aktualisieren Sie{/REFRESH}, um es erneut zu versuchen, oder {ANCHOR}kontaktieren Sie den Support{/ANCHOR}."
            },
            "fr-FR": {
              singular: "{REFRESH}Actualisez{/REFRESH} la page pour réessayer ou {ANCHOR}contactez l'assistance{/ANCHOR}."
            },
            "ja-JP": {
              singular: "{REFRESH}更新して{/REFRESH}再試行するか、{ANCHOR}サポートにお問い合わせ{/ANCHOR}ください。"
            },
            "ko-KR": {
              singular: "{REFRESH}새로고침{/REFRESH}하여 다시 시도하거나 {ANCHOR}지원팀에 문의하세요{/ANCHOR}."
            },
            "pt-BR": {
              singular: "{REFRESH}Atualize{/REFRESH} para tentar novamente ou {ANCHOR}entre em contato com o suporte{/ANCHOR}."
            },
            "zh-CN": {
              singular: "{REFRESH}刷新{/REFRESH}以重试，或{ANCHOR}联系支持人员{/ANCHOR}。"
            }
          }
        })
      })]
    })
  })]);
}