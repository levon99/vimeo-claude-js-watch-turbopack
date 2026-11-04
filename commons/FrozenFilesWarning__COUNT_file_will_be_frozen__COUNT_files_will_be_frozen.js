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
  _v0.s(["FrozenFilesWarning", 0, ({
    frozenFilesCount: _v0,
    storageLimitBytes: _v1,
    files: _v2,
    targetPlanName: _v3
  }) => {
    let _v4 = Math.max(_v0, _v2.length),
      _v5 = (0, _v6.translate)({
        singular: "{COUNT} file will be frozen",
        plural: "{COUNT} files will be frozen",
        count: _v4,
        replacements: {
          COUNT: (0, _v8.formatNumber)(_v4)
        },
        dictionary: {
          es: {
            singular: "{COUNT} archivo se congelará",
            plural: "{COUNT} archivos se congelarán"
          },
          "de-DE": {
            singular: "{COUNT} Datei wird eingefroren",
            plural: "{COUNT} Dateien werden eingefroren"
          },
          "fr-FR": {
            singular: "{COUNT} fichier sera gelé",
            plural: "{COUNT} fichiers seront gelés"
          },
          "ja-JP": {
            singular: "{COUNT}件のファイルが凍結されます",
            plural: "{COUNT}件のファイルが凍結されます"
          },
          "ko-KR": {
            singular: "{COUNT}개의 파일이 동결됩니다",
            plural: "{COUNT}개의 파일이 동결됩니다"
          },
          "pt-BR": {
            singular: "{COUNT} arquivo será congelado",
            plural: "{COUNT} arquivos serão congelados"
          },
          "zh-CN": {
            singular: "{COUNT} 个文件将被冻结",
            plural: "{COUNT} 个文件将被冻结"
          }
        }
      }),
      _v6 = _v3 ?? (0, _v6.translate)({
        singular: "free plan",
        dictionary: {
          es: {
            singular: "plan gratuito"
          },
          "de-DE": {
            singular: "kostenloser Plan"
          },
          "fr-FR": {
            singular: "forfait gratuit"
          },
          "ja-JP": {
            singular: "無料プラン"
          },
          "ko-KR": {
            singular: "무료 플랜"
          },
          "pt-BR": {
            singular: "plano gratuito"
          },
          "zh-CN": {
            singular: "免费计划"
          }
        }
      }),
      _v7 = null !== _v1 ? (0, _v6.translate)({
        singular: "Your files beyond the {PLAN} storage limit of {LIMIT} will be frozen and no longer accessible. Files are frozen before videos.",
        replacements: {
          PLAN: _v6,
          LIMIT: (0, _v7.formatBytes)(_v1, !1)
        },
        dictionary: {
          es: {
            singular: "Los archivos que excedan el límite de almacenamiento de {LIMIT} del {PLAN} se congelarán y dejarán de ser accesibles. Los archivos se congelan antes que los vídeos."
          },
          "de-DE": {
            singular: "Ihre Dateien, die das Speicherlimit von {LIMIT} Ihres {PLAN} überschreiten, werden eingefroren und sind nicht mehr zugänglich. Dateien werden vor Videos eingefroren."
          },
          "fr-FR": {
            singular: "Vos fichiers dépassant la limite de stockage du {PLAN} de {LIMIT} seront gelés et ne seront plus accessibles. Les fichiers sont gelés avant les vidéos."
          },
          "ja-JP": {
            singular: "{PLAN}のストレージ上限である{LIMIT}を超えるファイルは凍結され、アクセスできなくなります。ファイルは動画より先に凍結されます。"
          },
          "ko-KR": {
            singular: "귀하의 {PLAN} 저장 한도인 {LIMIT}을 초과한 파일은 동결되어 더 이상 액세스할 수 없습니다. 파일은 동영상보다 먼저 동결됩니다."
          },
          "pt-BR": {
            singular: "Seus arquivos além do limite de armazenamento do {PLAN} de {LIMIT} serão congelados e não estarão mais acessíveis. Os arquivos são congelados antes dos vídeos."
          },
          "zh-CN": {
            singular: "超出 {PLAN} 的 {LIMIT} 存储限额的文件将被冻结并且无法访问。文件会先于视频被冻结。"
          }
        }
      }) : (0, _v6.translate)({
        singular: "Your files beyond the {PLAN} managed storage limit will be frozen and no longer accessible. Files are frozen before videos.",
        replacements: {
          PLAN: _v6
        },
        dictionary: {
          es: {
            singular: "Los archivos que excedan el límite de almacenamiento gestionado de {PLAN} se congelarán y dejarán de ser accesibles. Los archivos se congelan antes que los vídeos."
          },
          "de-DE": {
            singular: "Ihre Dateien, die das von {PLAN} verwaltete Speicherlimit überschreiten, werden eingefroren und sind nicht mehr zugänglich. Dateien werden vor Videos eingefroren."
          },
          "fr-FR": {
            singular: "Vos fichiers dépassant la limite de stockage gérée {PLAN} seront gelés et ne seront plus accessibles. Les fichiers sont gelés avant les vidéos."
          },
          "ja-JP": {
            singular: "{PLAN}の管理対象ストレージ上限を超えるファイルは凍結され、アクセスできなくなります。ファイルは動画より先に凍結されます。"
          },
          "ko-KR": {
            singular: "귀하의 {PLAN} 관리된 저장 한도를 초과한 파일은 동결되어 더 이상 액세스할 수 없습니다. 파일은 동영상보다 먼저 동결됩니다."
          },
          "pt-BR": {
            singular: "Seus arquivos além do limite de armazenamento gerenciado do {PLAN} serão congelados e não estarão mais acessíveis. Os arquivos são congelados antes dos vídeos."
          },
          "zh-CN": {
            singular: "超出 {PLAN} 托管存储限额的文件将被冻结并且无法访问。文件会先于视频被冻结。"
          }
        }
      }),
      _v8 = _v2.slice(0, 5),
      _v9 = Math.max(_v4 - _v8.length, 0);
    return (0, _v1.jsxs)(_v2.Flex, {
      gap: "3",
      align: "flex-start",
      children: [(0, _v1.jsx)(_v5.CircleExclamationFilled, {
        boxSize: "24px",
        color: "status-caution-primary"
      }), (0, _v1.jsxs)(_v3.Stack, {
        spacing: "4",
        flex: "1",
        children: [(0, _v1.jsxs)(_v3.Stack, {
          spacing: "1",
          children: [(0, _v1.jsx)(_v4.Text, {
            variant: "heading-sm",
            children: _v5
          }), (0, _v1.jsx)(_v4.Text, {
            variant: "body-md",
            color: "text-secondary",
            children: _v7
          })]
        }), _v8.length > 0 && (0, _v1.jsxs)(_v3.Stack, {
          spacing: "2",
          children: [_v8.map(_v0 => (0, _v1.jsx)(_v4.Text, {
            variant: "body-sm",
            noOfLines: 1,
            children: _v0.title
          }, _v0.uri)), _v9 > 0 && (0, _v1.jsx)(_v4.Text, {
            variant: "body-sm",
            color: "text-secondary",
            children: (0, _v6.translate)({
              singular: "and {COUNT} other file",
              plural: "and {COUNT} other files",
              count: _v9,
              replacements: {
                COUNT: (0, _v8.formatNumber)(_v9)
              },
              dictionary: {
                es: {
                  singular: "y {COUNT} archivo más",
                  plural: "y {COUNT} archivos más"
                },
                "de-DE": {
                  singular: "und {COUNT} weitere Datei",
                  plural: "und {COUNT} weitere Dateien"
                },
                "fr-FR": {
                  singular: "et {COUNT} autre fichier",
                  plural: "et {COUNT} autres fichiers"
                },
                "ja-JP": {
                  singular: "およびほかに{COUNT}件のファイル",
                  plural: "およびほかに{COUNT}件のファイル"
                },
                "ko-KR": {
                  singular: "및 {COUNT}개의 다른 파일",
                  plural: "및 {COUNT}개의 다른 파일"
                },
                "pt-BR": {
                  singular: "e mais {COUNT} arquivo",
                  plural: "e mais {COUNT} arquivos"
                },
                "zh-CN": {
                  singular: "以及另外 {COUNT} 个文件",
                  plural: "以及另外 {COUNT} 个文件"
                }
              }
            })
          })]
        })]
      })]
    });
  }]);
}