{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = "days",
    _v5 = "months",
    _v6 = "years",
    _v7 = _v0 => {
      if (!_v0) return null;
      let _v1 = parseInt(_v0.substring(_v0.lastIndexOf("/") + 1));
      return isNaN(_v1) ? null : _v1;
    },
    _v8 = _v0 => _v0 % 0 == 0 ? {
      amount: _v0 / 0,
      units: "years"
    } : _v0 % 0 == 0 ? {
      amount: _v0 / 0,
      units: "months"
    } : {
      amount: _v0 / 0,
      units: "days"
    };
  _v0.s(["DATA_RETENTION_PER_PAGE", 0, 25, "DAYS", 0, _v4, "DRP_PATH_TEAM", 0, "/manage/team/settings/data-retention", "DRP_PATH_WORKSPACE", 0, "/manage/workspace/security-and-data/data-retention", "LOCATION_ITEMS_PER_PAGE", 0, 50, "MONTHS", 0, _v5, "POLICY_SELECT_FIELDS", 0, ["title", "uri", "description", "isActive", "isDefault", "createdTime", "duration", "hasExtension"], "YEARS", 0, _v6, "durationUnits", 0, _v8, "formatDate", 0, _v0 => new Date(_v0).toLocaleDateString(), "getBlankPolicyData", 0, () => ({
    title: "",
    description: "",
    durationAmount: 2,
    durationUnits: _v6,
    isDefault: !1,
    hasExtension: !1,
    folders: {},
    groups: {},
    uri: "",
    isActive: !1,
    duration: 0
  }), "getIdFromUri", 0, _v7, "hasMoreItems", 0, (_v0, _v1, _v2) => void 0 !== _v2 && (0 === _v2 || _v0 * _v1 + 1 < _v2), "policyDataChanged", 0, (_v0, _v1) => {
    for (let _v0 of ["title", "description", "durationAmount", "durationUnits", "isDefault", "isActive"]) if (_v0[_v0] !== _v1[_v0]) return !0;
    return !1;
  }, "policyDataToRequestBody", 0, _v0 => {
    let _v1;
    switch (_v0.durationUnits) {
      case _v4:
        _v1 = 0 * _v0.durationAmount;
        break;
      case _v5:
        _v1 = 0 * _v0.durationAmount;
        break;
      case _v6:
        _v1 = 0 * _v0.durationAmount;
        break;
      default:
        throw Error("Invalid duration units");
    }
    return {
      uri: _v0.uri,
      title: _v0.title,
      description: _v0.description,
      isDefault: _v0.isDefault,
      isActive: _v0.isActive,
      duration: _v1
    };
  }, "policyFoldersChanged", 0, (_v0, _v1) => !(0, _v1.default)(Object.keys(_v0.folders).sort(), Object.keys(_v1.folders).sort()), "policyGroupsChanged", 0, (_v0, _v1) => !(0, _v1.default)(Object.keys(_v0.groups).sort(), Object.keys(_v1.groups).sort()), "responseToPolicyData", 0, _v0 => {
    let {
      amount: _v1,
      units: _v2
    } = _v8(_v0.duration);
    return {
      uri: _v0.uri,
      title: _v0.title,
      description: _v0.description,
      durationAmount: _v1,
      durationUnits: _v2,
      isDefault: _v0.isDefault,
      hasExtension: _v0.hasExtension,
      duration: _v0.duration,
      isActive: _v0.isActive,
      folders: {},
      groups: {}
    };
  }, "sendBPEvent", 0, (_v0, _v1, _v2, _v3 = 0, _v4 = 0) => {
    if (!_v0) return;
    let _v5 = _v7(_v1.uri);
    null !== _v5 && _v2.BigPictureClient.sendEvent(new _v2.Event("vimeo.data_retention_event", 1, {
      name: _v2,
      feature: "data_retention_policy",
      policy_id: _v5,
      title: _v1.title,
      duration: _v1.duration,
      description: _v1.description || null,
      is_default_policy: !!_v1.isDefault,
      folders_count: _v3,
      team_groups_count: _v4,
      policy_owner_id: _v0
    }));
  }, "translateDuration", 0, _v0 => {
    let {
      amount: _v1,
      units: _v2
    } = _v0;
    switch (_v2) {
      case _v4:
        return (0, _v3.translate)({
          singular: "{VALUE} day",
          plural: "{VALUE} days",
          count: _v1,
          replacements: {
            VALUE: _v1
          },
          dictionary: {
            es: {
              singular: "{VALUE} día",
              plural: "{VALUE} días"
            },
            "de-DE": {
              singular: "{VALUE} Tag",
              plural: "{VALUE} Tage"
            },
            "fr-FR": {
              singular: "{VALUE} jour",
              plural: "{VALUE} jours"
            },
            "ja-JP": {
              singular: "{VALUE} 日",
              plural: "{VALUE}日"
            },
            "ko-KR": {
              singular: "{VALUE}일",
              plural: "{VALUE}일"
            },
            "pt-BR": {
              singular: "{VALUE} dia",
              plural: "{VALUE} dias"
            },
            "zh-CN": {
              singular: "{VALUE} 天",
              plural: "{VALUE} 天"
            }
          }
        });
      case _v5:
        return (0, _v3.translate)({
          singular: "{VALUE} month",
          plural: "{VALUE} months",
          count: _v1,
          replacements: {
            VALUE: _v1
          },
          dictionary: {
            es: {
              singular: "{VALUE} mes",
              plural: "{VALUE} meses"
            },
            "de-DE": {
              singular: "{VALUE} Monat",
              plural: "{VALUE} Monaten"
            },
            "fr-FR": {
              singular: "{VALUE} mois",
              plural: "{VALUE} mois"
            },
            "ja-JP": {
              singular: "{VALUE}月",
              plural: "{VALUE} カ月"
            },
            "ko-KR": {
              singular: "{VALUE}개월",
              plural: "{VALUE}개월"
            },
            "pt-BR": {
              singular: "{VALUE} mês",
              plural: "{VALUE} meses"
            },
            "zh-CN": {
              singular: "{VALUE} 个月",
              plural: "{VALUE} 个月"
            }
          }
        });
      case _v6:
        return (0, _v3.translate)({
          singular: "{VALUE} year",
          plural: "{VALUE} years",
          count: _v1,
          replacements: {
            VALUE: _v1
          },
          dictionary: {
            es: {
              singular: "{VALUE} año",
              plural: "{VALUE} años"
            },
            "de-DE": {
              singular: "{VALUE} Jahr",
              plural: "{VALUE} Jahre"
            },
            "fr-FR": {
              singular: "{VALUE} année",
              plural: "{VALUE} ans"
            },
            "ja-JP": {
              singular: "{VALUE}年",
              plural: "{VALUE} 年"
            },
            "ko-KR": {
              singular: "{VALUE}년",
              plural: "{VALUE}년"
            },
            "pt-BR": {
              singular: "{VALUE} ano",
              plural: "{VALUE} anos"
            },
            "zh-CN": {
              singular: "{VALUE} 年",
              plural: "{VALUE} 年"
            }
          }
        });
      default:
        throw Error("Unsupported unit");
    }
  }]);
}