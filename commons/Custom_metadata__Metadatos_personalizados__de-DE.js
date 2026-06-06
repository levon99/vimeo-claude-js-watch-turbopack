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
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0),
    _v32 = _v0.i(0),
    _v33 = _v0.i(0),
    _v34 = _v0.i(0),
    _v35 = _v0.i(0),
    _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0),
    _v39 = _v0.i(0),
    _v40 = _v0.i(0),
    _v41 = _v0.i(0),
    _v42 = _v0.i(0),
    _v43 = _v0.i(0),
    _v44 = _v0.i(0),
    _v45 = _v0.i(0),
    _v46 = _v0.i(0);
  let _v47 = {
      get TITLE() {
        return (0, _v7.translate)({
          singular: "Custom metadata",
          dictionary: {
            es: {
              singular: "Metadatos personalizados"
            },
            "de-DE": {
              singular: "Benutzerdefinierte Metadaten"
            },
            "fr-FR": {
              singular: "Métadonnées personnalisées"
            },
            "ja-JP": {
              singular: "カスタムメタデータ"
            },
            "ko-KR": {
              singular: "사용자 정의 메타데이터"
            },
            "pt-BR": {
              singular: "Metadados personalizados"
            },
            "zh-CN": {
              singular: "自定义元数据"
            }
          }
        });
      },
      get SELECT_METADATA() {
        return (0, _v7.translate)({
          singular: "Select Metadata",
          dictionary: {
            es: {
              singular: "Seleccionar metadatos"
            },
            "de-DE": {
              singular: "Metadaten auswählen"
            },
            "fr-FR": {
              singular: "Sélectionner les métadonnées"
            },
            "ja-JP": {
              singular: "メタデータを選択"
            },
            "ko-KR": {
              singular: "메타데이터 선택"
            },
            "pt-BR": {
              singular: "Selecionar metadados"
            },
            "zh-CN": {
              singular: "选择元数据"
            }
          }
        });
      },
      get PLACEHOLDER() {
        return (0, _v7.translate)({
          singular: "Placeholder",
          dictionary: {
            es: {
              singular: "Marcador de posición"
            },
            "de-DE": {
              singular: "Platzhalter"
            },
            "fr-FR": {
              singular: "Espace réservé"
            },
            "ja-JP": {
              singular: "プレースホルダー"
            },
            "ko-KR": {
              singular: "플레이스홀더"
            },
            "zh-CN": {
              singular: "占位符"
            }
          }
        });
      },
      get ADD_RULE() {
        return (0, _v7.translate)({
          singular: "Add Rule",
          dictionary: {
            es: {
              singular: "Agregar regla"
            },
            "de-DE": {
              singular: "Regel hinzufügen"
            },
            "fr-FR": {
              singular: "Ajouter une règle"
            },
            "ja-JP": {
              singular: "ルールを追加"
            },
            "ko-KR": {
              singular: "규칙 추가"
            },
            "pt-BR": {
              singular: "Adicionar regra"
            },
            "zh-CN": {
              singular: "添加规则"
            }
          }
        });
      },
      get CANCEL() {
        return (0, _v7.translate)({
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
        });
      },
      get CLEAR() {
        return (0, _v7.translate)({
          singular: "Clear",
          dictionary: {
            es: {
              singular: "Borrar"
            },
            "de-DE": {
              singular: "Löschen"
            },
            "fr-FR": {
              singular: "Effacer"
            },
            "ja-JP": {
              singular: "クリア"
            },
            "ko-KR": {
              singular: "비우기"
            },
            "pt-BR": {
              singular: "Limpar"
            },
            "zh-CN": {
              singular: "清除"
            }
          }
        });
      },
      get APPLY() {
        return (0, _v7.translate)({
          singular: "Apply",
          dictionary: {
            es: {
              singular: "Aplicar"
            },
            "de-DE": {
              singular: "Anwenden"
            },
            "fr-FR": {
              singular: "Appliquer"
            },
            "ja-JP": {
              singular: "適用する"
            },
            "ko-KR": {
              singular: "적용"
            },
            "pt-BR": {
              singular: "Aplicar"
            },
            "zh-CN": {
              singular: "应用"
            }
          }
        });
      },
      get REMOVE_RULE() {
        return (0, _v7.translate)({
          singular: "Remove rule",
          dictionary: {
            es: {
              singular: "Eliminar regla"
            },
            "de-DE": {
              singular: "Regel entfernen"
            },
            "fr-FR": {
              singular: "Supprimer la règle"
            },
            "ja-JP": {
              singular: "ルールを削除"
            },
            "ko-KR": {
              singular: "규칙 제거"
            },
            "pt-BR": {
              singular: "Remover regra"
            },
            "zh-CN": {
              singular: "移除规则"
            }
          }
        });
      },
      get CONTAINS() {
        return (0, _v7.translate)({
          singular: "Contains",
          dictionary: {
            es: {
              singular: "Contiene"
            },
            "de-DE": {
              singular: "Enthält"
            },
            "fr-FR": {
              singular: "Contient"
            },
            "ja-JP": {
              singular: "を含む"
            },
            "ko-KR": {
              singular: "포함"
            },
            "pt-BR": {
              singular: "Contém"
            },
            "zh-CN": {
              singular: "包含"
            }
          }
        });
      },
      get DOES_NOT_CONTAIN() {
        return (0, _v7.translate)({
          singular: "Does not contain",
          dictionary: {
            es: {
              singular: "No contiene"
            },
            "de-DE": {
              singular: "Enthält nicht"
            },
            "fr-FR": {
              singular: "Ne contient pas"
            },
            "ja-JP": {
              singular: "を含まない"
            },
            "ko-KR": {
              singular: "포함하지 않음"
            },
            "pt-BR": {
              singular: "Não contém"
            },
            "zh-CN": {
              singular: "不包含"
            }
          }
        });
      },
      get IS() {
        return (0, _v7.translate)({
          singular: "Is",
          dictionary: {
            es: {
              singular: "Es"
            },
            "de-DE": {
              singular: "Ist"
            },
            "fr-FR": {
              singular: "Est"
            },
            "ja-JP": {
              singular: "と一致する"
            },
            "ko-KR": {
              singular: "다음과 같음"
            },
            "pt-BR": {
              singular: "É"
            },
            "zh-CN": {
              singular: "是"
            }
          }
        });
      },
      get IS_NOT() {
        return (0, _v7.translate)({
          singular: "Is not",
          dictionary: {
            es: {
              singular: "No es"
            },
            "de-DE": {
              singular: "Ist nicht"
            },
            "fr-FR": {
              singular: "N'est pas"
            },
            "ja-JP": {
              singular: "ではない"
            },
            "ko-KR": {
              singular: "다음과 같지 않음"
            },
            "pt-BR": {
              singular: "Não é"
            },
            "zh-CN": {
              singular: "不是"
            }
          }
        });
      },
      get IS_ANY_OF() {
        return (0, _v7.translate)({
          singular: "Is any of",
          dictionary: {
            es: {
              singular: "Es cualquiera de"
            },
            "de-DE": {
              singular: "Ist eines von"
            },
            "fr-FR": {
              singular: "Est l'un des"
            },
            "ja-JP": {
              singular: "いずれかに該当する"
            },
            "ko-KR": {
              singular: "다음 중 하나"
            },
            "pt-BR": {
              singular: "É qualquer um dos"
            },
            "zh-CN": {
              singular: "为以下任意一项"
            }
          }
        });
      },
      get IS_NONE_OF() {
        return (0, _v7.translate)({
          singular: "Is none of",
          dictionary: {
            es: {
              singular: "No es ninguno de"
            },
            "de-DE": {
              singular: "Ist keines von"
            },
            "fr-FR": {
              singular: "N'est aucun des"
            },
            "ja-JP": {
              singular: "どれにも該当しない"
            },
            "ko-KR": {
              singular: "다음 중 어느 것도 아님"
            },
            "pt-BR": {
              singular: "Não é nenhum dos"
            },
            "zh-CN": {
              singular: "不为以下任何一项"
            }
          }
        });
      },
      get IS_EMPTY() {
        return (0, _v7.translate)({
          singular: "Is empty",
          dictionary: {
            es: {
              singular: "Está vacío"
            },
            "de-DE": {
              singular: "Ist leer"
            },
            "fr-FR": {
              singular: "Est vide"
            },
            "ja-JP": {
              singular: "空である"
            },
            "ko-KR": {
              singular: "비어 있음"
            },
            "pt-BR": {
              singular: "Está vazio"
            },
            "zh-CN": {
              singular: "为空"
            }
          }
        });
      },
      get IS_NOT_EMPTY() {
        return (0, _v7.translate)({
          singular: "Is not empty",
          dictionary: {
            es: {
              singular: "No está vacío"
            },
            "de-DE": {
              singular: "Ist nicht leer"
            },
            "fr-FR": {
              singular: "N'est pas vide"
            },
            "ja-JP": {
              singular: "空ではない"
            },
            "ko-KR": {
              singular: "비어 있지 않음"
            },
            "pt-BR": {
              singular: "Não está vazio"
            },
            "zh-CN": {
              singular: "不为空"
            }
          }
        });
      },
      get EQUALS() {
        return (0, _v7.translate)({
          singular: "Equals",
          dictionary: {
            es: {
              singular: "Igual a"
            },
            "de-DE": {
              singular: "Ist gleich"
            },
            "fr-FR": {
              singular: "Égal à"
            },
            "ja-JP": {
              singular: "と等しい"
            },
            "ko-KR": {
              singular: "같음"
            },
            "pt-BR": {
              singular: "Igual a"
            },
            "zh-CN": {
              singular: "等于"
            }
          }
        });
      },
      get NOT_EQUAL() {
        return (0, _v7.translate)({
          singular: "Does not equal",
          dictionary: {
            es: {
              singular: "No es igual a"
            },
            "de-DE": {
              singular: "Entspricht nicht"
            },
            "fr-FR": {
              singular: "N'est pas égal à"
            },
            "ja-JP": {
              singular: "と等しくない"
            },
            "ko-KR": {
              singular: "같지 않음"
            },
            "pt-BR": {
              singular: "Não é igual a"
            },
            "zh-CN": {
              singular: "不等于"
            }
          }
        });
      },
      get GREATER_THAN() {
        return (0, _v7.translate)({
          singular: "Greater than",
          dictionary: {
            es: {
              singular: "Mayor que"
            },
            "de-DE": {
              singular: "Größer als"
            },
            "fr-FR": {
              singular: "Supérieur à"
            },
            "ja-JP": {
              singular: "より大きい"
            },
            "ko-KR": {
              singular: "초과"
            },
            "pt-BR": {
              singular: "Maior que"
            },
            "zh-CN": {
              singular: "大于"
            }
          }
        });
      },
      get LESS_THAN() {
        return (0, _v7.translate)({
          singular: "Less than",
          dictionary: {
            es: {
              singular: "Menor que"
            },
            "de-DE": {
              singular: "Kleiner als"
            },
            "fr-FR": {
              singular: "Inférieur à"
            },
            "ja-JP": {
              singular: "より小さい"
            },
            "ko-KR": {
              singular: "미만"
            },
            "pt-BR": {
              singular: "Menor que"
            },
            "zh-CN": {
              singular: "小于"
            }
          }
        });
      },
      get BEFORE() {
        return (0, _v7.translate)({
          singular: "Before",
          dictionary: {
            es: {
              singular: "Antes de"
            },
            "de-DE": {
              singular: "Vor"
            },
            "fr-FR": {
              singular: "Avant"
            },
            "ja-JP": {
              singular: "以前"
            },
            "ko-KR": {
              singular: "이전"
            },
            "pt-BR": {
              singular: "Antes"
            },
            "zh-CN": {
              singular: "之前"
            }
          }
        });
      },
      get AFTER() {
        return (0, _v7.translate)({
          singular: "After",
          dictionary: {
            es: {
              singular: "Después de"
            },
            "de-DE": {
              singular: "Nach"
            },
            "fr-FR": {
              singular: "Après"
            },
            "ja-JP": {
              singular: "以降"
            },
            "ko-KR": {
              singular: "이후"
            },
            "pt-BR": {
              singular: "Após"
            },
            "zh-CN": {
              singular: "之后"
            }
          }
        });
      },
      get IS_TRUE() {
        return (0, _v7.translate)({
          singular: "Is true",
          dictionary: {
            es: {
              singular: "Es verdadero"
            },
            "de-DE": {
              singular: "Ist wahr"
            },
            "fr-FR": {
              singular: "Est vrai"
            },
            "ja-JP": {
              singular: "真である"
            },
            "ko-KR": {
              singular: "참"
            },
            "pt-BR": {
              singular: "É verdadeiro"
            },
            "zh-CN": {
              singular: "为真"
            }
          }
        });
      },
      get IS_FALSE() {
        return (0, _v7.translate)({
          singular: "Is false",
          dictionary: {
            es: {
              singular: "Es falso"
            },
            "de-DE": {
              singular: "Ist falsch"
            },
            "fr-FR": {
              singular: "Est faux"
            },
            "ja-JP": {
              singular: "偽である"
            },
            "ko-KR": {
              singular: "거짓"
            },
            "pt-BR": {
              singular: "É falso"
            },
            "zh-CN": {
              singular: "为假"
            }
          }
        });
      },
      get AND() {
        return (0, _v7.translate)({
          singular: "And",
          dictionary: {
            es: {
              singular: "Y"
            },
            "de-DE": {
              singular: "Und"
            },
            "fr-FR": {
              singular: "Et"
            },
            "ja-JP": {
              singular: "かつ"
            },
            "ko-KR": {
              singular: "및"
            },
            "pt-BR": {
              singular: "E"
            },
            "zh-CN": {
              singular: "并且"
            }
          }
        });
      },
      get OR() {
        return (0, _v7.translate)({
          singular: "Or",
          dictionary: {
            es: {
              singular: "O"
            },
            "de-DE": {
              singular: "Oder"
            },
            "fr-FR": {
              singular: "Ou"
            },
            "ja-JP": {
              singular: "または"
            },
            "ko-KR": {
              singular: "또는"
            },
            "pt-BR": {
              singular: "Ou"
            },
            "zh-CN": {
              singular: "或"
            }
          }
        });
      },
      get AND_DESCRIPTION() {
        return (0, _v7.translate)({
          singular: "All filter rules must match",
          dictionary: {
            es: {
              singular: "Todas las reglas de filtro deben coincidir"
            },
            "de-DE": {
              singular: "Alle Filterregeln müssen zutreffen"
            },
            "fr-FR": {
              singular: "Toutes les règles de filtrage doivent correspondre"
            },
            "ja-JP": {
              singular: "すべてのフィルタールールに一致する必要があります"
            },
            "ko-KR": {
              singular: "모든 필터 규칙이 일치해야 합니다"
            },
            "pt-BR": {
              singular: "Todas as regras de filtro devem corresponder"
            },
            "zh-CN": {
              singular: "所有筛选规则必须匹配"
            }
          }
        });
      },
      get OR_DESCRIPTION() {
        return (0, _v7.translate)({
          singular: "At least one filter rule must match",
          dictionary: {
            es: {
              singular: "Al menos una regla de filtro debe coincidir"
            },
            "de-DE": {
              singular: "Mindestens eine Filterregel muss zutreffen"
            },
            "fr-FR": {
              singular: "Au moins une règle de filtrage doit correspondre"
            },
            "ja-JP": {
              singular: "少なくとも1つのフィルタールールに一致する必要があります"
            },
            "ko-KR": {
              singular: "적어도 하나의 필터 규칙이 일치해야 합니다"
            },
            "pt-BR": {
              singular: "Pelo menos uma regra de filtro deve corresponder"
            },
            "zh-CN": {
              singular: "至少有一条筛选规则必须匹配"
            }
          }
        });
      },
      get VIDEOS_ONLY_NOTE() {
        return (0, _v7.translate)({
          singular: "Custom metadata filtering only applies to videos.",
          dictionary: {
            es: {
              singular: "El filtrado por metadatos personalizados solo se aplica a videos."
            },
            "de-DE": {
              singular: "Das Filtern nach benutzerdefinierten Metadaten gilt nur für Videos."
            },
            "fr-FR": {
              singular: "Le filtrage par métadonnées personnalisées s'applique uniquement aux vidéos."
            },
            "ja-JP": {
              singular: "カスタムメタデータによるフィルタリングは動画にのみ適用されます。"
            },
            "ko-KR": {
              singular: "사용자 정의 메타데이터 필터링은 동영상에만 적용됩니다."
            },
            "pt-BR": {
              singular: "A filtragem por metadados personalizados aplica-se apenas a vídeos."
            },
            "zh-CN": {
              singular: "自定义元数据过滤仅适用于视频。"
            }
          }
        });
      }
    },
    _v48 = {
      and: () => _v47.AND,
      or: () => _v47.OR
    },
    _v49 = {
      and: () => _v47.AND_DESCRIPTION,
      or: () => _v47.OR_DESCRIPTION
    },
    _v50 = new Set(["eq", "ne", "gt", "lt", "contains", "not_contains", "empty", "not_empty"]),
    _v51 = {
      contains: "contains",
      not_contains: "not_contains",
      is: "eq",
      is_not: "ne",
      is_any_of: "eq",
      is_none_of: "ne",
      is_empty: "empty",
      is_not_empty: "not_empty",
      equals: "eq",
      not_equal: "ne",
      greater_than: "gt",
      less_than: "lt",
      before: "lt",
      after: "gt",
      is_true: "eq",
      is_false: "eq"
    },
    _v52 = _v0 => "is_true" === _v0.operator ? "true" : "is_false" === _v0.operator ? "false" : _v61(_v0.operator) ? void 0 : _v0.value,
    _v53 = (_v0, _v1) => {
      let _v2 = [];
      for (let _v0 of _v0) {
        if (null === _v0.fieldId) continue;
        let _v0 = _v51[_v0.operator],
          _v1 = _v52(_v0);
        if (!_v61(_v0.operator) && (void 0 === _v1 || "" === _v1.trim())) continue;
        let _v2 = {
          field_id: _v0.fieldId,
          operator: _v0
        };
        void 0 !== _v1 && (_v2.value = _v1), _v2.push(_v2);
      }
      return 0 === _v2.length ? null : JSON.stringify({
        logic: _v1,
        clauses: _v2
      });
    },
    _v54 = _v0 => {
      if (!_v0) return null;
      try {
        let _v0 = JSON.parse(_v0),
          _v1 = "and",
          _v2 = [];
        Array.isArray(_v0) ? _v2 = _v0 : _v0 && "object" == typeof _v0 && ("or" === _v0.logic && (_v1 = "or"), Array.isArray(_v0.clauses) && (_v2 = _v0.clauses));
        let _v3 = [];
        for (let _v0 of _v2) {
          if (!_v0 || "object" != typeof _v0 || "number" != typeof _v0.field_id || "string" != typeof _v0.operator || !_v50.has(_v0.operator)) continue;
          let _v0 = _v0.operator,
            _v1 = {
              field_id: _v0.field_id,
              operator: _v0
            };
          "string" == typeof _v0.value && (_v1.value = _v0.value), _v3.push(_v1);
        }
        if (0 === _v3.length) return null;
        return {
          logic: _v1,
          clauses: _v3
        };
      } catch {
        return null;
      }
    },
    _v55 = _v0 => _v54(_v0)?.clauses.length ?? 0,
    _v56 = () => "u" > typeof crypto && "randomUUID" in crypto ? crypto.randomUUID() : `rule-${Math.random().toString(36).slice(2)}`,
    _v57 = (_v0, _v1) => {
      let _v2 = _v54(_v0);
      if (!_v2) return null;
      let _v3 = _v2.clauses.map(_v0 => {
        var _v1, _v2;
        let _v3 = _v1?.get(_v0.field_id) ?? void 0,
          _v4 = ((_v0, _v1, _v2) => {
            switch (_v0) {
              case "contains":
                return "contains";
              case "not_contains":
                return "not_contains";
              case "empty":
                return "is_empty";
              case "not_empty":
                return "is_not_empty";
              case "eq":
                if ("bool" === _v2) return "true" === _v1 || "1" === _v1 ? "is_true" : "is_false";
                if ("int" === _v2) return "equals";
                if ("select" === _v2) return "is_any_of";
                if ("multi-select" === _v2) return "contains";
                return "is";
              case "ne":
                if ("int" === _v2) return "not_equal";
                if ("select" === _v2) return "is_none_of";
                if ("multi-select" === _v2) return "not_contains";
                return "is_not";
              case "gt":
                return "date" === _v2 ? "after" : "greater_than";
              case "lt":
                return "date" === _v2 ? "before" : "less_than";
              default:
                return _v58;
            }
          })(_v0.operator, _v0.value, _v3?.type),
          _v5 = (_v1 = _v0.operator, _v2 = _v0.value, "empty" === _v1 || "not_empty" === _v1 || void 0 === _v2 ? "" : _v2);
        return {
          id: _v56(),
          fieldId: _v0.field_id,
          operator: _v4,
          value: _v5
        };
      });
      return 0 === _v3.length ? null : {
        rules: _v3,
        conjunction: _v2.logic
      };
    },
    _v58 = "contains",
    _v59 = {
      str: ["contains", "not_contains", "is", "is_not", "is_empty", "is_not_empty"],
      int: ["equals", "not_equal", "greater_than", "less_than", "is_empty", "is_not_empty"],
      date: ["is", "before", "after", "is_empty", "is_not_empty"],
      bool: ["is_true", "is_false"],
      select: ["is_any_of", "is_none_of", "is_empty", "is_not_empty"],
      "multi-select": ["contains", "not_contains", "is_empty", "is_not_empty"]
    },
    _v60 = {
      contains: () => _v47.CONTAINS,
      not_contains: () => _v47.DOES_NOT_CONTAIN,
      is: () => _v47.IS,
      is_not: () => _v47.IS_NOT,
      is_any_of: () => _v47.IS_ANY_OF,
      is_none_of: () => _v47.IS_NONE_OF,
      is_empty: () => _v47.IS_EMPTY,
      is_not_empty: () => _v47.IS_NOT_EMPTY,
      equals: () => _v47.EQUALS,
      not_equal: () => _v47.NOT_EQUAL,
      greater_than: () => _v47.GREATER_THAN,
      less_than: () => _v47.LESS_THAN,
      before: () => _v47.BEFORE,
      after: () => _v47.AFTER,
      is_true: () => _v47.IS_TRUE,
      is_false: () => _v47.IS_FALSE
    },
    _v61 = _v0 => "is_empty" === _v0 || "is_not_empty" === _v0 || "is_true" === _v0 || "is_false" === _v0,
    _v62 = () => ({
      id: _v56(),
      fieldId: null,
      operator: _v58,
      value: ""
    }),
    _v63 = _v0 => null !== _v0.fieldId && (!!_v61(_v0.operator) || "" !== _v0.value.trim()),
    _v64 = ({
      isOpen: _v0,
      onClose: _v1,
      onApply: _v2,
      onClear: _v3,
      initialFilter: _v4
    }) => {
      let {
          fields: _v5,
          isLoading: _v6
        } = (0, _v46.useTeamCustomMetadataFields)(),
        _v7 = (0, _v2.useMemo)(() => {
          let _v0 = new Map();
          for (let _v0 of _v5) _v0.set(_v0.id, _v0);
          return _v0;
        }, [_v5]);
      return (0, _v1.jsxs)(_v37.Modal, {
        isOpen: _v0,
        onClose: _v1,
        size: {
          base: "full",
          md: "lg"
        },
        scrollBehavior: "inside",
        children: [(0, _v1.jsx)(_v43.ModalOverlay, {}), (0, _v1.jsxs)(_v40.ModalContent, {
          width: {
            base: "100%",
            md: (0, _v22.rem)(720)
          },
          maxW: {
            base: "100%",
            md: "unset"
          },
          children: [(0, _v1.jsx)(_v42.ModalHeader, {
            children: _v47.TITLE
          }), (0, _v1.jsx)(_v39.ModalCloseButton, {}), _v6 ? (0, _v1.jsx)(_v38.ModalBody, {
            children: (0, _v1.jsx)(_v16.Flex, {
              justifyContent: "center",
              paddingY: "xl",
              children: (0, _v1.jsx)(_v21.Spinner, {})
            })
          }) : (0, _v1.jsx)(_v65, {
            initialFilter: _v4,
            fields: _v5,
            fieldsById: _v7,
            onApply: _v2,
            onClear: _v3,
            onClose: _v1
          })]
        })]
      });
    },
    _v65 = ({
      initialFilter: _v0,
      fields: _v1,
      fieldsById: _v2,
      onApply: _v3,
      onClear: _v4,
      onClose: _v5
    }) => {
      let _v6 = (0, _v2.useMemo)(() => _v57(_v0, _v2), [_v0, _v2]),
        [_v7, _v8] = (0, _v2.useState)(() => _v6?.rules ?? [_v62()]),
        [_v9, _v10] = (0, _v2.useState)(() => _v6?.conjunction ?? "and"),
        _v11 = (_v0, _v1) => {
          _v8(_v0 => _v0.map(_v0 => _v0.id !== _v0 ? _v0 : {
            ..._v0,
            ..._v1
          }));
        },
        _v12 = _v7.some(_v63),
        _v13 = (0, _v2.useMemo)(() => _v1.map(_v0 => ({
          label: _v0.name,
          value: String(_v0.id)
        })), [_v1]);
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v38.ModalBody, {
          children: (0, _v1.jsxs)(_v5.VStack, {
            alignItems: "stretch",
            gap: "md",
            children: [(0, _v1.jsx)(_v4.Text, {
              variant: "body-sm",
              color: "text-secondary",
              children: _v47.VIDEOS_ONLY_NOTE
            }), _v7.map((_v0, _v1) => (0, _v1.jsx)(_v67, {
              rule: _v0,
              index: _v1,
              totalRules: _v7.length,
              conjunction: _v9,
              onConjunctionChange: _v10,
              field: null !== _v0.fieldId ? _v2.get(_v0.fieldId) ?? null : null,
              fieldItems: _v13,
              onFieldChange: _v0 => {
                var _v1;
                let _v2, _v3;
                _v1 = _v0.id, _v3 = (_v2 = null !== _v0 ? _v2.get(_v0) ?? null : null) ? _v59[_v2.type] ?? [] : [], _v11(_v1, {
                  fieldId: _v0,
                  operator: _v2 ? _v3.includes(_v58) ? _v58 : _v3[0] ?? _v58 : _v58,
                  value: ""
                });
              },
              onOperatorChange: _v0 => {
                _v11(_v0.id, {
                  operator: _v0,
                  value: ""
                });
              },
              onValueChange: _v0 => {
                _v11(_v0.id, {
                  value: _v0
                });
              },
              onRemove: () => {
                var _v0;
                _v0 = _v0.id, _v8(_v0 => {
                  let _v1 = _v0.filter(_v0 => _v0.id !== _v0);
                  return 0 === _v1.length ? [_v62()] : _v1;
                });
              }
            }, _v0.id)), (0, _v1.jsx)(_v3.Button, {
              variant: "ghost",
              size: "sm",
              alignSelf: "center",
              bg: "surface",
              _hover: {
                bg: "fill-component-hover"
              },
              onClick: () => {
                _v8(_v0 => [..._v0, _v62()]);
              },
              children: (0, _v1.jsxs)(_v17.HStack, {
                spacing: "xs",
                children: [(0, _v1.jsx)(_v26.PlusCircle, {}), (0, _v1.jsx)("span", {
                  children: _v47.ADD_RULE
                })]
              })
            })]
          })
        }), (0, _v1.jsxs)(_v41.ModalFooter, {
          gap: "sm",
          justifyContent: "space-between",
          children: [_v0 && _v4 ? (0, _v1.jsx)(_v3.Button, {
            variant: "tertiary",
            onClick: () => {
              _v4(), _v5();
            },
            children: _v47.CLEAR
          }) : (0, _v1.jsx)("span", {}), (0, _v1.jsxs)(_v16.Flex, {
            gap: "sm",
            children: [(0, _v1.jsx)(_v3.Button, {
              variant: "secondary",
              onClick: _v5,
              children: _v47.CANCEL
            }), (0, _v1.jsx)(_v3.Button, {
              variant: "primary",
              onClick: () => {
                _v3(_v7.filter(_v63), _v9), _v5();
              },
              isDisabled: !_v12,
              children: _v47.APPLY
            })]
          })]
        })]
      });
    },
    _v66 = (0, _v22.rem)(87),
    _v67 = ({
      rule: _v0,
      index: _v1,
      totalRules: _v2,
      conjunction: _v3,
      onConjunctionChange: _v4,
      field: _v5,
      fieldItems: _v6,
      onFieldChange: _v7,
      onOperatorChange: _v8,
      onValueChange: _v9,
      onRemove: _v10
    }) => {
      let _v11,
        _v12 = (0, _v2.useMemo)(() => _v5 ? (_v59[_v5.type] ?? [_v58]).map(_v0 => ({
          label: _v60[_v0](),
          value: _v0
        })) : [{
          label: _v47.CONTAINS,
          value: _v58
        }], [_v5]),
        _v13 = null !== _v5,
        _v14 = _v61(_v0.operator),
        _v15 = (0, _v2.useMemo)(() => _v5 && ("select" === _v5.type || "multi-select" === _v5.type) ? (_v5.values ?? []).map(_v0 => ({
          label: _v0,
          value: _v0
        })) : [], [_v5]),
        _v16 = (0, _v2.useMemo)(() => [{
          label: _v47.AND,
          value: "and"
        }, {
          label: _v47.OR,
          value: "or"
        }], []),
        [_v17, _v18] = (0, _v2.useState)(null),
        _v19 = _v0 => _v0 => {
          _v18(_v0 => _v0.open ? _v0 : _v0 === _v0 ? null : _v0);
        },
        _v20 = `calc(${_v66} + ${(0, _v22.rem)(8)})`;
      return (0, _v1.jsxs)(_v16.Flex, {
        direction: {
          base: "column",
          md: "row"
        },
        alignItems: {
          base: "stretch",
          md: "center"
        },
        gap: "sm",
        width: "100%",
        paddingLeft: {
          base: 0,
          md: 0 === _v1 && _v2 > 1 ? _v20 : 0
        },
        children: [1 === _v1 && (0, _v1.jsx)(_v16.Flex, {
          flexShrink: 0,
          display: {
            base: "none",
            md: "flex"
          },
          width: _v66,
          children: (0, _v1.jsxs)(_v33.Menu, {
            children: [(0, _v1.jsx)(_v34.MenuButton, {
              as: _v3.Button,
              variant: "outlined",
              size: "md",
              width: "100%",
              rightIcon: (0, _v1.jsx)(_v45.ChevronDownSmall, {}),
              fontWeight: "normal",
              justifyContent: "space-between",
              children: _v48[_v3]()
            }), (0, _v1.jsx)(_v36.MenuList, {
              minWidth: (0, _v22.rem)(280),
              children: _v16.map(_v0 => {
                let _v1 = _v0.value === _v3;
                return (0, _v1.jsx)(_v35.MenuItem, {
                  onClick: () => _v4(_v0.value),
                  paddingY: "sm",
                  children: (0, _v1.jsxs)(_v5.VStack, {
                    alignItems: "flex-start",
                    gap: "0",
                    width: "100%",
                    children: [(0, _v1.jsx)(_v4.Text, {
                      variant: "body-md",
                      fontWeight: _v1 ? "bold" : "normal",
                      children: _v0.label
                    }), (0, _v1.jsx)(_v4.Text, {
                      variant: "body-sm",
                      color: "text-secondary",
                      children: _v49[_v0.value]()
                    })]
                  })
                }, _v0.value);
              })
            })]
          })
        }), _v1 >= 2 && (0, _v1.jsx)(_v16.Flex, {
          flexShrink: 0,
          width: _v66,
          display: {
            base: "none",
            md: "flex"
          },
          justifyContent: "center",
          alignItems: "center",
          children: (0, _v1.jsx)(_v4.Text, {
            variant: "body-md",
            children: _v48[_v3]()
          })
        }), (0, _v1.jsxs)(_v16.Flex, {
          direction: {
            base: "column",
            md: "row"
          },
          gap: "sm",
          flex: {
            base: "unset",
            md: "1"
          },
          width: {
            base: "100%",
            md: "auto"
          },
          minW: "0",
          alignItems: {
            base: "stretch",
            md: "center"
          },
          children: [(0, _v1.jsx)(_v16.Flex, {
            flex: {
              base: "unset",
              md: "1"
            },
            minW: "0",
            direction: "column",
            children: (0, _v1.jsx)(_v20.Select, {
              size: "md",
              items: _v6,
              value: null !== _v0.fieldId ? [String(_v0.fieldId)] : [],
              placeholder: _v47.SELECT_METADATA,
              open: "field" === _v17,
              onOpenChange: _v19("field"),
              onValueChange: _v0 => {
                let _v1 = Array.isArray(_v0.value) ? _v0.value[0] ?? "" : _v0.value ?? "";
                _v7("" === _v1 ? null : Number(_v1));
              }
            })
          }), (0, _v1.jsx)(_v16.Flex, {
            flex: {
              base: "unset",
              md: "1"
            },
            minW: "0",
            direction: "column",
            children: (0, _v1.jsx)(_v20.Select, {
              size: "md",
              items: _v12,
              value: [_v0.operator],
              disabled: !_v13,
              open: "operator" === _v17,
              onOpenChange: _v19("operator"),
              onValueChange: _v0 => {
                _v8(Array.isArray(_v0.value) ? _v0.value[0] ?? _v58 : _v0.value ?? _v58);
              }
            })
          }), _v13 && !_v14 && (0, _v1.jsx)(_v16.Flex, {
            flex: {
              base: "unset",
              md: "1"
            },
            minW: "0",
            direction: "column",
            children: _v15.length > 0 ? (0, _v1.jsx)(_v20.Select, {
              size: "md",
              items: _v15,
              value: _v0.value ? [_v0.value] : [],
              placeholder: _v47.PLACEHOLDER,
              open: "value" === _v17,
              onOpenChange: _v19("value"),
              onValueChange: _v0 => {
                _v9(Array.isArray(_v0.value) ? _v0.value[0] ?? "" : _v0.value ?? "");
              }
            }) : _v5?.type === "date" ? (0, _v1.jsxs)(_v29.DatePicker, {
              width: "100%",
              value: _v0.value && (_v11 = _v0.value.match(/^(\d{4})-(\d{2})-(\d{2})/)) ? [new _v28.BokehDate.CalendarDate(Number(_v11[1]), Number(_v11[2]), Number(_v11[3]))] : [],
              onValueChange: _v0 => {
                let _v1 = _v0.value?.[0];
                _v9(_v1 ? `${_v1.year}-${String(_v1.month).padStart(2, "0")}-${String(_v1.day).padStart(2, "0")}` : "");
              },
              children: [(0, _v1.jsx)(_v29.DatePickerControl, {
                children: (0, _v1.jsxs)(_v31.InputGroup, {
                  children: [(0, _v1.jsx)(_v29.DatePickerInputBase, {
                    asChild: !0,
                    children: (0, _v1.jsx)(_v19.Input, {
                      size: "md",
                      placeholder: _v47.PLACEHOLDER,
                      pr: "40px"
                    })
                  }), (0, _v1.jsx)(_v32.InputRightElement, {
                    h: "100%",
                    children: (0, _v1.jsx)(_v29.DatePickerTrigger, {
                      asChild: !0,
                      children: (0, _v1.jsx)(_v18.IconButton, {
                        "aria-label": _v47.PLACEHOLDER,
                        variant: "unstyled",
                        size: "sm",
                        bg: "surface",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        icon: (0, _v1.jsx)(_v44.Calendar, {
                          color: "text-secondary",
                          boxSize: "18px"
                        })
                      })
                    })
                  })]
                })
              }), (0, _v1.jsx)(_v30.DatePickerPortal, {
                children: (0, _v1.jsx)(_v29.DatePickerPositioner, {
                  style: {
                    zIndex: 0
                  },
                  children: (0, _v1.jsx)(_v29.DatePickerContent, {
                    children: (0, _v1.jsx)(_v29.Calendar, {})
                  })
                })
              })]
            }) : (0, _v1.jsx)(_v19.Input, {
              size: "md",
              type: _v5?.type === "int" ? "number" : "text",
              placeholder: _v47.PLACEHOLDER,
              value: _v0.value,
              onChange: _v0 => {
                _v9(_v0.target.value);
              },
              width: "100%"
            })
          })]
        }), (0, _v1.jsx)(_v18.IconButton, {
          "aria-label": _v47.REMOVE_RULE,
          icon: (0, _v1.jsx)(_v27.TrashBin, {}),
          variant: "tertiary",
          onClick: _v10,
          alignSelf: {
            base: "flex-end",
            md: "center"
          },
          flexShrink: 0
        })]
      });
    };
  _v0.s(["CustomMetadataFilterModal", 0, _v64, "DEFAULT_CONJUNCTION", 0, "and", "DEFAULT_OPERATOR", 0, _v58, "conjunctionDescriptions", 0, _v49, "conjunctionLabels", 0, _v48, "countCustomMetadataClauses", 0, _v55, "createEmptyRule", 0, _v62, "isRuleApplicable", 0, _v63, "operatorIsValueless", 0, _v61, "operatorLabels", 0, _v60, "operatorsByType", 0, _v59, "parseCustomMetadataRules", 0, _v57, "serializeCustomMetadataRules", 0, _v53], 0);
  let _v68 = {
      get TITLE() {
        return (0, _v7.translate)({
          singular: "Custom metadata",
          dictionary: {
            es: {
              singular: "Metadatos personalizados"
            },
            "de-DE": {
              singular: "Benutzerdefinierte Metadaten"
            },
            "fr-FR": {
              singular: "Métadonnées personnalisées"
            },
            "ja-JP": {
              singular: "カスタムメタデータ"
            },
            "ko-KR": {
              singular: "사용자 정의 메타데이터"
            },
            "pt-BR": {
              singular: "Metadados personalizados"
            },
            "zh-CN": {
              singular: "自定义元数据"
            }
          }
        });
      },
      get CLOSE() {
        return (0, _v7.translate)({
          singular: "Close",
          dictionary: {
            es: {
              singular: "Cerrar"
            },
            "de-DE": {
              singular: "Schließen"
            },
            "fr-FR": {
              singular: "Fermer "
            },
            "ja-JP": {
              singular: "閉じる"
            },
            "ko-KR": {
              singular: "닫기"
            },
            "pt-BR": {
              singular: "Fechar"
            },
            "zh-CN": {
              singular: "关闭"
            }
          }
        });
      },
      get NO_FILTERS_APPLIED() {
        return (0, _v7.translate)({
          singular: "No filters applied",
          dictionary: {
            es: {
              singular: "No hay filtros aplicados"
            },
            "de-DE": {
              singular: "Keine Filter angewendet"
            },
            "fr-FR": {
              singular: "Aucun filtre appliqué"
            },
            "ja-JP": {
              singular: "フィルターは適用されていません"
            },
            "ko-KR": {
              singular: "적용된 필터 없음"
            },
            "pt-BR": {
              singular: "Nenhum filtro aplicado"
            },
            "zh-CN": {
              singular: "未应用筛选器"
            }
          }
        });
      },
      get VIDEOS_ONLY_NOTE() {
        return (0, _v7.translate)({
          singular: "Custom metadata filtering only applies to videos.",
          dictionary: {
            es: {
              singular: "El filtrado por metadatos personalizados solo se aplica a videos."
            },
            "de-DE": {
              singular: "Das Filtern nach benutzerdefinierten Metadaten gilt nur für Videos."
            },
            "fr-FR": {
              singular: "Le filtrage par métadonnées personnalisées s'applique uniquement aux vidéos."
            },
            "ja-JP": {
              singular: "カスタムメタデータによるフィルタリングは動画にのみ適用されます。"
            },
            "ko-KR": {
              singular: "사용자 정의 메타데이터 필터링은 동영상에만 적용됩니다."
            },
            "pt-BR": {
              singular: "A filtragem por metadados personalizados aplica-se apenas a vídeos."
            },
            "zh-CN": {
              singular: "自定义元数据过滤仅适用于视频。"
            }
          }
        });
      },
      get APPLY() {
        return (0, _v7.translate)({
          singular: "Apply",
          dictionary: {
            es: {
              singular: "Aplicar"
            },
            "de-DE": {
              singular: "Anwenden"
            },
            "fr-FR": {
              singular: "Appliquer"
            },
            "ja-JP": {
              singular: "適用する"
            },
            "ko-KR": {
              singular: "적용"
            },
            "pt-BR": {
              singular: "Aplicar"
            },
            "zh-CN": {
              singular: "应用"
            }
          }
        });
      },
      get DELETE_FILTER() {
        return (0, _v7.translate)({
          singular: "Delete filter",
          dictionary: {
            es: {
              singular: "Eliminar filtro"
            },
            "de-DE": {
              singular: "Filter löschen"
            },
            "fr-FR": {
              singular: "Supprimer le filtre"
            },
            "ja-JP": {
              singular: "フィルターを削除"
            },
            "ko-KR": {
              singular: "필터 삭제"
            },
            "pt-BR": {
              singular: "Excluir filtro"
            },
            "zh-CN": {
              singular: "删除筛选器"
            }
          }
        });
      },
      get SELECT_METADATA() {
        return (0, _v7.translate)({
          singular: "Select Metadata",
          dictionary: {
            es: {
              singular: "Seleccionar metadatos"
            },
            "de-DE": {
              singular: "Metadaten auswählen"
            },
            "fr-FR": {
              singular: "Sélectionner les métadonnées"
            },
            "ja-JP": {
              singular: "メタデータを選択"
            },
            "ko-KR": {
              singular: "메타데이터 선택"
            },
            "pt-BR": {
              singular: "Selecionar metadados"
            },
            "zh-CN": {
              singular: "选择元数据"
            }
          }
        });
      },
      get PLACEHOLDER() {
        return (0, _v7.translate)({
          singular: "Placeholder",
          dictionary: {
            es: {
              singular: "Marcador de posición"
            },
            "de-DE": {
              singular: "Platzhalter"
            },
            "fr-FR": {
              singular: "Espace réservé"
            },
            "ja-JP": {
              singular: "プレースホルダー"
            },
            "ko-KR": {
              singular: "플레이스홀더"
            },
            "zh-CN": {
              singular: "占位符"
            }
          }
        });
      },
      get COMBINE_RULES() {
        return (0, _v7.translate)({
          singular: "Combine rules with",
          dictionary: {
            es: {
              singular: "Combinar reglas con"
            },
            "de-DE": {
              singular: "Regeln kombinieren mit"
            },
            "fr-FR": {
              singular: "Combiner les règles avec"
            },
            "ja-JP": {
              singular: "ルールを組み合わせる条件"
            },
            "ko-KR": {
              singular: "규칙 결합 방식"
            },
            "pt-BR": {
              singular: "Combinar regras com"
            },
            "zh-CN": {
              singular: "按以下方式组合规则"
            }
          }
        });
      },
      get BACK() {
        return (0, _v7.translate)({
          singular: "Back",
          dictionary: {
            es: {
              singular: "Atrás"
            },
            "de-DE": {
              singular: "Zurück"
            },
            "fr-FR": {
              singular: "Retour"
            },
            "ja-JP": {
              singular: "戻る"
            },
            "ko-KR": {
              singular: "뒤로"
            },
            "pt-BR": {
              singular: "Voltar"
            },
            "zh-CN": {
              singular: "返回"
            }
          }
        });
      },
      get NEW_RULE() {
        return (0, _v7.translate)({
          singular: "New rule",
          dictionary: {
            es: {
              singular: "Nueva regla"
            },
            "de-DE": {
              singular: "Neue Regel"
            },
            "fr-FR": {
              singular: "Nouvelle règle"
            },
            "ja-JP": {
              singular: "新しいルール"
            },
            "ko-KR": {
              singular: "새 규칙"
            },
            "pt-BR": {
              singular: "Nova regra"
            },
            "zh-CN": {
              singular: "新规则"
            }
          }
        });
      },
      get EDIT_RULE() {
        return (0, _v7.translate)({
          singular: "Edit rule",
          dictionary: {
            es: {
              singular: "Editar regla"
            },
            "de-DE": {
              singular: "Regel bearbeiten"
            },
            "fr-FR": {
              singular: "Modifier la règle"
            },
            "ja-JP": {
              singular: "ルールを編集"
            },
            "ko-KR": {
              singular: "규칙 편집"
            },
            "pt-BR": {
              singular: "Editar regra"
            },
            "zh-CN": {
              singular: "编辑规则"
            }
          }
        });
      }
    },
    _v69 = ({
      isOpen: _v0,
      onClose: _v1,
      onApply: _v2,
      onClear: _v3,
      initialFilter: _v4
    }) => {
      let {
          fields: _v5,
          isLoading: _v6
        } = (0, _v46.useTeamCustomMetadataFields)(),
        _v7 = (0, _v2.useMemo)(() => {
          let _v0 = new Map();
          for (let _v0 of _v5) _v0.set(_v0.id, _v0);
          return _v0;
        }, [_v5]);
      return (0, _v1.jsxs)(_v10.Drawer, {
        placement: "bottom",
        isOpen: _v0,
        onClose: _v1,
        children: [(0, _v1.jsx)(_v15.DrawerOverlay, {}), (0, _v1.jsx)(_v12.DrawerContent, {
          maxH: "90vh",
          borderTopRadius: (0, _v22.rem)(16),
          children: _v6 ? (0, _v1.jsxs)(_v1.Fragment, {
            children: [(0, _v1.jsx)(_v14.DrawerHeader, {
              paddingLeft: (0, _v22.rem)(8),
              children: (0, _v1.jsxs)(_v17.HStack, {
                alignItems: "center",
                gap: "xs",
                children: [(0, _v1.jsx)(_v18.IconButton, {
                  "aria-label": _v68.BACK,
                  icon: (0, _v1.jsx)(_v23.ChevronLeft, {}),
                  variant: "tertiary",
                  size: "md",
                  onClick: _v1
                }), (0, _v1.jsx)(_v4.Text, {
                  variant: "heading-sm",
                  children: _v68.TITLE
                })]
              })
            }), (0, _v1.jsx)(_v11.DrawerBody, {
              children: (0, _v1.jsx)(_v16.Flex, {
                justifyContent: "center",
                paddingY: "xl",
                children: (0, _v1.jsx)(_v21.Spinner, {})
              })
            })]
          }) : (0, _v1.jsx)(_v70, {
            initialFilter: _v4,
            fields: _v5,
            fieldsById: _v7,
            onApply: _v2,
            onClear: _v3,
            onClose: _v1
          })
        })]
      });
    },
    _v70 = ({
      initialFilter: _v0,
      fields: _v1,
      fieldsById: _v2,
      onApply: _v3,
      onClear: _v4,
      onClose: _v5
    }) => {
      let _v6 = (0, _v2.useMemo)(() => _v57(_v0, _v2), [_v0, _v2]),
        [_v7, _v8] = (0, _v2.useState)(() => _v6?.rules ?? []),
        [_v9, _v10] = (0, _v2.useState)(() => _v6?.conjunction ?? "and"),
        [_v11, _v12] = (0, _v2.useState)(null),
        _v13 = (0, _v2.useMemo)(() => _v1.map(_v0 => ({
          label: _v0.name,
          value: String(_v0.id)
        })), [_v1]);
      if (null === _v11) return (0, _v1.jsx)(_v71, {
        rules: _v7,
        conjunction: _v9,
        onConjunctionChange: _v10,
        fieldsById: _v2,
        onAdd: () => {
          _v12({
            kind: "create"
          });
        },
        onEdit: _v0 => {
          _v12({
            kind: "edit",
            ruleId: _v0
          });
        },
        onClose: () => {
          let _v0 = _v7.filter(_v63);
          0 === _v0.length && _v6 && _v4 ? _v4() : _v3(_v0, _v9), _v5();
        }
      });
      let _v14 = "edit" === _v11.kind ? _v7.find(_v0 => _v0.id === _v11.ruleId) ?? null : null;
      return (0, _v1.jsx)(_v73, {
        mode: _v11,
        initialRule: _v14,
        fieldsById: _v2,
        fieldItems: _v13,
        onCommit: _v0 => {
          _v8(_v0 => _v11?.kind === "edit" ? _v0.map(_v0 => _v0.id === _v11.ruleId ? _v0 : _v0) : [..._v0, _v0]), _v12(null);
        },
        onDelete: "edit" === _v11.kind ? () => {
          if (_v11?.kind === "edit") {
            let _v0 = _v11.ruleId;
            _v8(_v0 => _v0.filter(_v0 => _v0.id !== _v0));
          }
          _v12(null);
        } : void 0,
        onBack: () => {
          _v12(null);
        }
      });
    },
    _v71 = ({
      rules: _v0,
      conjunction: _v1,
      onConjunctionChange: _v2,
      fieldsById: _v3,
      onAdd: _v4,
      onEdit: _v5,
      onClose: _v6
    }) => {
      let _v7 = _v0.filter(_v63),
        _v8 = _v7.length > 0,
        _v9 = _v7.length > 1,
        _v10 = (0, _v2.useMemo)(() => [{
          label: _v48.and(),
          value: "and"
        }, {
          label: _v48.or(),
          value: "or"
        }], []);
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsxs)(_v14.DrawerHeader, {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "xs",
          paddingX: (0, _v22.rem)(8),
          children: [(0, _v1.jsxs)(_v17.HStack, {
            alignItems: "center",
            gap: "xs",
            minW: "0",
            children: [(0, _v1.jsx)(_v18.IconButton, {
              "aria-label": _v68.BACK,
              icon: (0, _v1.jsx)(_v23.ChevronLeft, {}),
              variant: "tertiary",
              size: "md",
              onClick: _v6
            }), (0, _v1.jsx)(_v4.Text, {
              variant: "heading-sm",
              isTruncated: !0,
              children: _v68.TITLE
            })]
          }), (0, _v1.jsxs)(_v17.HStack, {
            alignItems: "center",
            gap: "xs",
            flexShrink: 0,
            children: [(0, _v1.jsx)(_v18.IconButton, {
              "aria-label": _v68.NEW_RULE,
              icon: (0, _v1.jsx)(_v26.PlusCircle, {}),
              variant: "tertiary",
              size: "md",
              onClick: _v4
            }), (0, _v1.jsx)(_v18.IconButton, {
              "aria-label": _v68.CLOSE,
              icon: (0, _v1.jsx)(_v25.CloseX, {}),
              variant: "tertiary",
              size: "md",
              onClick: _v6
            })]
          })]
        }), (0, _v1.jsx)(_v11.DrawerBody, {
          children: (0, _v1.jsxs)(_v5.VStack, {
            alignItems: "stretch",
            gap: "md",
            paddingBottom: "md",
            children: [(0, _v1.jsx)(_v4.Text, {
              variant: "body-sm",
              color: "text-secondary",
              children: _v68.VIDEOS_ONLY_NOTE
            }), _v8 ? (0, _v1.jsxs)(_v1.Fragment, {
              children: [_v9 && (0, _v1.jsxs)(_v5.VStack, {
                alignItems: "stretch",
                gap: "xs",
                children: [(0, _v1.jsx)(_v4.Text, {
                  variant: "body-sm",
                  color: "text-secondary",
                  children: _v68.COMBINE_RULES
                }), (0, _v1.jsx)(_v20.Select, {
                  size: "md",
                  items: _v10,
                  value: [_v1],
                  onValueChange: _v0 => {
                    _v2(Array.isArray(_v0.value) ? _v0.value[0] ?? "and" : _v0.value ?? "and");
                  },
                  children: _v0 => (0, _v1.jsx)(_v20.SelectItem, {
                    alignItems: "flex-start",
                    paddingY: "sm",
                    children: (0, _v1.jsxs)(_v5.VStack, {
                      alignItems: "flex-start",
                      gap: "0",
                      children: [(0, _v1.jsx)(_v20.SelectItemText, {
                        children: _v0.label
                      }), (0, _v1.jsx)(_v4.Text, {
                        variant: "body-sm",
                        color: "text-secondary",
                        children: _v49[_v0.value]()
                      })]
                    })
                  })
                })]
              }), (0, _v1.jsx)(_v5.VStack, {
                alignItems: "stretch",
                gap: "0",
                children: _v7.map(_v0 => {
                  let _v1 = null !== _v0.fieldId ? _v3.get(_v0.fieldId) ?? null : null;
                  return (0, _v1.jsx)(_v72, {
                    rule: _v0,
                    field: _v1,
                    onTap: () => _v5(_v0.id)
                  }, _v0.id);
                })
              })]
            }) : (0, _v1.jsx)(_v9.Box, {
              paddingY: "xl",
              children: (0, _v1.jsx)(_v4.Text, {
                variant: "body-md",
                color: "text-secondary",
                textAlign: "center",
                children: _v68.NO_FILTERS_APPLIED
              })
            })]
          })
        })]
      });
    },
    _v72 = ({
      rule: _v0,
      field: _v1,
      onTap: _v2
    }) => {
      let _v3,
        _v4,
        _v5 = (_v3 = _v1?.name ?? _v68.SELECT_METADATA, _v4 = _v60[_v0.operator]().toLowerCase(), _v61(_v0.operator) ? `${_v3} ${_v4}` : `${_v3} ${_v4} "${_v0.value}"`);
      return (0, _v1.jsx)(_v9.Box, {
        as: "button",
        onClick: _v2,
        width: "100%",
        paddingY: "sm",
        paddingX: "sm",
        borderRadius: "md",
        bg: "transparent",
        _hover: {
          bg: "fill-component-hover"
        },
        children: (0, _v1.jsxs)(_v17.HStack, {
          justifyContent: "space-between",
          alignItems: "center",
          gap: "sm",
          children: [(0, _v1.jsx)(_v4.Text, {
            variant: "body-md",
            isTruncated: !0,
            minW: "0",
            flex: "1",
            textAlign: "start",
            children: _v5
          }), (0, _v1.jsx)(_v24.ChevronRightSmall, {})]
        })
      });
    },
    _v73 = ({
      mode: _v0,
      initialRule: _v1,
      fieldsById: _v2,
      fieldItems: _v3,
      onCommit: _v4,
      onDelete: _v5,
      onBack: _v6
    }) => {
      let [_v7, _v8] = (0, _v2.useState)(() => _v1 ?? _v62()),
        _v9 = null !== _v7.fieldId ? _v2.get(_v7.fieldId) ?? null : null,
        _v10 = null !== _v9,
        _v11 = _v61(_v7.operator),
        _v12 = (0, _v2.useMemo)(() => _v9 ? (_v59[_v9.type] ?? [_v58]).map(_v0 => ({
          label: _v60[_v0](),
          value: _v0
        })) : [{
          label: _v60.contains(),
          value: _v58
        }], [_v9]),
        _v13 = (0, _v2.useMemo)(() => _v9 && ("select" === _v9.type || "multi-select" === _v9.type) ? (_v9.values ?? []).map(_v0 => ({
          label: _v0,
          value: _v0
        })) : [], [_v9]),
        _v14 = _v63(_v7),
        [_v15, _v16] = (0, _v2.useState)(null),
        _v17 = _v0 => _v0 => {
          _v16(_v0 => _v0.open ? _v0 : _v0 === _v0 ? null : _v0);
        };
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsxs)(_v14.DrawerHeader, {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "xs",
          paddingX: (0, _v22.rem)(8),
          children: [(0, _v1.jsxs)(_v17.HStack, {
            alignItems: "center",
            gap: "xs",
            minW: "0",
            children: [(0, _v1.jsx)(_v18.IconButton, {
              "aria-label": _v68.BACK,
              icon: (0, _v1.jsx)(_v23.ChevronLeft, {}),
              variant: "tertiary",
              size: "md",
              onClick: _v6
            }), (0, _v1.jsx)(_v4.Text, {
              variant: "heading-sm",
              isTruncated: !0,
              children: "edit" === _v0.kind ? _v68.EDIT_RULE : _v68.NEW_RULE
            })]
          }), _v5 && (0, _v1.jsx)(_v18.IconButton, {
            "aria-label": _v68.DELETE_FILTER,
            icon: (0, _v1.jsx)(_v27.TrashBin, {}),
            variant: "tertiary",
            size: "md",
            onClick: _v5,
            flexShrink: 0
          })]
        }), (0, _v1.jsx)(_v11.DrawerBody, {
          children: (0, _v1.jsxs)(_v5.VStack, {
            alignItems: "stretch",
            gap: "md",
            children: [(0, _v1.jsx)(_v20.Select, {
              size: "md",
              items: _v3,
              value: null !== _v7.fieldId ? [String(_v7.fieldId)] : [],
              placeholder: _v68.SELECT_METADATA,
              open: "field" === _v15,
              onOpenChange: _v17("field"),
              onValueChange: _v0 => {
                var _v1;
                let _v2,
                  _v3,
                  _v4,
                  _v5 = Array.isArray(_v0.value) ? _v0.value[0] ?? "" : _v0.value ?? "";
                _v3 = (_v2 = null !== (_v1 = "" === _v5 ? null : Number(_v5)) ? _v2.get(_v1) ?? null : null) ? _v59[_v2.type] ?? [] : [], _v4 = _v2 ? _v3.includes(_v58) ? _v58 : _v3[0] ?? _v58 : _v58, _v8(_v0 => ({
                  ..._v0,
                  fieldId: _v1,
                  operator: _v4,
                  value: ""
                }));
              }
            }), (0, _v1.jsx)(_v20.Select, {
              size: "md",
              items: _v12,
              value: [_v7.operator],
              disabled: !_v10,
              open: "operator" === _v15,
              onOpenChange: _v17("operator"),
              onValueChange: _v0 => {
                let _v1 = Array.isArray(_v0.value) ? _v0.value[0] ?? _v58 : _v0.value ?? _v58;
                _v8(_v0 => ({
                  ..._v0,
                  operator: _v1,
                  value: ""
                }));
              }
            }), _v10 && !_v11 && (_v13.length > 0 ? (0, _v1.jsx)(_v20.Select, {
              size: "md",
              items: _v13,
              value: _v7.value ? [_v7.value] : [],
              placeholder: _v68.PLACEHOLDER,
              open: "value" === _v15,
              onOpenChange: _v17("value"),
              onValueChange: _v0 => {
                let _v1 = Array.isArray(_v0.value) ? _v0.value[0] ?? "" : _v0.value ?? "";
                _v8(_v0 => ({
                  ..._v0,
                  value: _v1
                }));
              }
            }) : (0, _v1.jsx)(_v19.Input, {
              size: "md",
              type: _v9?.type === "int" ? "number" : _v9?.type === "date" ? "date" : "text",
              placeholder: _v68.PLACEHOLDER,
              value: _v7.value,
              onChange: _v0 => {
                let _v1 = _v0.target.value;
                _v8(_v0 => ({
                  ..._v0,
                  value: _v1
                }));
              },
              width: "100%",
              fontSize: (0, _v22.rem)(16)
            }))]
          })
        }), (0, _v1.jsx)(_v13.DrawerFooter, {
          gap: "sm",
          justifyContent: "flex-end",
          children: (0, _v1.jsx)(_v3.Button, {
            variant: "primary",
            onClick: () => {
              _v4(_v7);
            },
            isDisabled: !_v14,
            children: _v68.APPLY
          })
        })]
      });
    },
    _v74 = {
      get TITLE() {
        return (0, _v7.translate)({
          singular: "Custom metadata",
          dictionary: {
            es: {
              singular: "Metadatos personalizados"
            },
            "de-DE": {
              singular: "Benutzerdefinierte Metadaten"
            },
            "fr-FR": {
              singular: "Métadonnées personnalisées"
            },
            "ja-JP": {
              singular: "カスタムメタデータ"
            },
            "ko-KR": {
              singular: "사용자 정의 메타데이터"
            },
            "pt-BR": {
              singular: "Metadados personalizados"
            },
            "zh-CN": {
              singular: "自定义元数据"
            }
          }
        });
      },
      get SUBTITLE() {
        return (0, _v7.translate)({
          singular: "Filter by metadata value.",
          dictionary: {
            es: {
              singular: "Filtrar por valor de metadatos."
            },
            "de-DE": {
              singular: "Nach Metadatenwert filtern."
            },
            "fr-FR": {
              singular: "Filtrer par valeur de métadonnée."
            },
            "ja-JP": {
              singular: "メタデータ値でフィルタリングします。"
            },
            "ko-KR": {
              singular: "메타데이터 값으로 필터링합니다."
            },
            "pt-BR": {
              singular: "Filtrar pelo valor de metadado."
            },
            "zh-CN": {
              singular: "按元数据值筛选。"
            }
          }
        });
      },
      get MANAGE_FILTERS() {
        return (0, _v7.translate)({
          singular: "Manage filters",
          dictionary: {
            es: {
              singular: "Gestionar filtros"
            },
            "de-DE": {
              singular: "Filter verwalten"
            },
            "fr-FR": {
              singular: "Gérer les filtres"
            },
            "ja-JP": {
              singular: "フィルターを管理"
            },
            "ko-KR": {
              singular: "필터 관리"
            },
            "pt-BR": {
              singular: "Gerenciar filtros"
            },
            "zh-CN": {
              singular: "管理筛选器"
            }
          }
        });
      },
      get ADD_FILTERS() {
        return (0, _v7.translate)({
          singular: "Add filters",
          dictionary: {
            es: {
              singular: "Agregar filtros"
            },
            "de-DE": {
              singular: "Filter hinzufügen"
            },
            "fr-FR": {
              singular: "Ajouter des filtres"
            },
            "ja-JP": {
              singular: "フィルターを追加"
            },
            "ko-KR": {
              singular: "필터 추가"
            },
            "pt-BR": {
              singular: "Adicionar filtros"
            },
            "zh-CN": {
              singular: "添加筛选器"
            }
          }
        });
      },
      filtersAppliedCount: _v0 => (0, _v7.translate)({
        singular: "{COUNT} filter applied",
        plural: "{COUNT} filters applied",
        count: _v0,
        replacements: {
          COUNT: _v0
        },
        dictionary: {
          es: {
            singular: "{COUNT} filtro aplicado",
            plural: "{COUNT} filtros aplicados"
          },
          "de-DE": {
            singular: "{COUNT} Filter angewendet",
            plural: "{COUNT} Filter angewendet"
          },
          "fr-FR": {
            singular: "{COUNT} filtre appliqué",
            plural: "{COUNT} filtres appliqués"
          },
          "ja-JP": {
            singular: "{COUNT}件のフィルターが適用されました",
            plural: "{COUNT}件のフィルターが適用されました"
          },
          "ko-KR": {
            singular: "{COUNT}개의 필터가 적용됨",
            plural: "{COUNT}개의 필터가 적용됨"
          },
          "pt-BR": {
            singular: "{COUNT} filtro aplicado",
            plural: "{COUNT} filtros aplicados"
          },
          "zh-CN": {
            singular: "{COUNT} 个筛选器已应用",
            plural: "{COUNT} 个筛选器已应用"
          }
        }
      })
    },
    _v75 = (_v0, _v1) => {
      let _v2 = _v1?.name ?? (0, _v7.translate)({
          singular: "Unknown field",
          dictionary: {
            es: {
              singular: "Campo desconocido"
            },
            "de-DE": {
              singular: "Unbekanntes Feld"
            },
            "fr-FR": {
              singular: "Champ inconnu"
            },
            "ja-JP": {
              singular: "不明なフィールド"
            },
            "ko-KR": {
              singular: "알 수 없는 필드"
            },
            "pt-BR": {
              singular: "Campo desconhecido"
            },
            "zh-CN": {
              singular: "未知字段"
            }
          }
        }),
        _v3 = _v60[_v0.operator]();
      return _v61(_v0.operator) ? `${_v2} ${_v3}` : _v0.value ? `${_v2} ${_v3} ${_v0.value}` : `${_v2} ${_v3}`;
    };
  _v0.s(["CustomMetadataFilterAccordion", 0, ({
    serializedFilter: _v0,
    onChange: _v1,
    onModalOpenChange: _v2
  }) => {
    let [_v3, _v4] = (0, _v2.useState)(!1),
      {
        fields: _v5
      } = (0, _v46.useTeamCustomMetadataFields)(),
      _v6 = _v55(_v0),
      _v7 = _v6 > 0,
      _v8 = (0, _v2.useMemo)(() => {
        let _v0 = new Map();
        for (let _v0 of _v5) void 0 !== _v0.id && _v0.set(_v0.id, _v0);
        return _v0;
      }, [_v5]),
      _v9 = (0, _v2.useMemo)(() => _v7 ? _v57(_v0, _v8)?.rules ?? [] : [], [_v7, _v0, _v8]),
      _v10 = (0, _v6.useBreakpointValue)({
        base: !0,
        md: !1
      }, {
        ssr: !1
      }) ?? !1,
      _v11 = () => {
        _v4(!0), _v2?.(!0);
      },
      _v12 = () => {
        _v4(!1), _v2?.(!1);
      },
      _v13 = () => {
        _v1(null);
      },
      _v14 = (_v0, _v1) => {
        _v1(_v53(_v0, _v1));
      };
    return (0, _v1.jsx)(_v8.AccordionItem, {
      children: ({
        isExpanded: _v0
      }) => (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v8.AccordionButton, {
          isExpanded: _v0,
          nameCopy: _v74.TITLE
        }), (0, _v1.jsx)(_v8.AccordionPanel, {
          pt: {
            base: "md",
            md: "lg"
          },
          pb: {
            base: "lg",
            md: "lg"
          },
          children: (0, _v1.jsxs)(_v5.VStack, {
            alignItems: "stretch",
            gap: "md",
            children: [_v7 ? (0, _v1.jsxs)(_v5.VStack, {
              alignItems: "stretch",
              gap: "xs",
              children: [(0, _v1.jsx)(_v4.Text, {
                variant: {
                  base: "body-md",
                  md: "body-sm"
                },
                fontWeight: "bold",
                children: _v74.filtersAppliedCount(_v6)
              }), _v9.map(_v0 => (0, _v1.jsx)(_v4.Text, {
                variant: {
                  base: "body-md",
                  md: "body-sm"
                },
                color: "text-secondary",
                noOfLines: 1,
                title: _v75(_v0, _v8.get(_v0.fieldId ?? -1)),
                children: _v75(_v0, _v8.get(_v0.fieldId ?? -1))
              }, _v0.id))]
            }) : (0, _v1.jsx)(_v4.Text, {
              variant: {
                base: "body-md",
                md: "body-sm"
              },
              color: "text-secondary",
              children: _v74.SUBTITLE
            }), (0, _v1.jsx)(_v3.Button, {
              size: "md",
              variant: "tertiary",
              backgroundColor: "fill-component",
              onClick: _v11,
              width: "100%",
              children: _v7 ? _v74.MANAGE_FILTERS : _v74.ADD_FILTERS
            })]
          })
        }), _v3 && (_v10 ? (0, _v1.jsx)(_v69, {
          isOpen: _v3,
          onClose: _v12,
          onApply: _v14,
          onClear: _v13,
          initialFilter: _v0
        }) : (0, _v1.jsx)(_v64, {
          isOpen: _v3,
          onClose: _v12,
          onApply: _v14,
          onClear: _v13,
          initialFilter: _v0
        }))]
      })
    });
  }], 0);
}