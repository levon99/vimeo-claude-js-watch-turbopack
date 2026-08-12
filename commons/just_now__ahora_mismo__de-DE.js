{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  function _v3(_v0, _v1, _v2) {
    let _v3 = !!_v2 && _v2.shorten;
    if (!(0, _v2.isDate)(_v0) || !(0, _v2.isDate)(_v1)) throw Error(`timeBetween expected Dates, received from: ${Object.prototype.toString.call(_v0)} to:  ${Object.prototype.toString.call(_v1)}`);
    let _v4 = Number(_v0),
      _v5 = Number(_v1) - _v4,
      _v6 = "";
    if (_v5 < 0) return (_v6 = Math.round(_v5 / 0), _v3) ? (0, _v1.translate)({
      singular: "just now",
      dictionary: {
        es: {
          singular: "ahora mismo"
        },
        "de-DE": {
          singular: "gerade eben"
        },
        "fr-FR": {
          singular: "à l'instant"
        },
        "ja-JP": {
          singular: "ちょうど今"
        },
        "ko-KR": {
          singular: "지금"
        },
        "pt-BR": {
          singular: "agora mesmo"
        },
        "zh-CN": {
          singular: "刚刚"
        }
      }
    }) : (0, _v1.translate)({
      singular: "{COUNT} second ago",
      plural: "{COUNT} seconds ago",
      count: _v6,
      replacements: {
        COUNT: _v6
      },
      dictionary: {
        es: {
          singular: "Hace {COUNT} segundo",
          plural: "Hace {COUNT} segundos"
        },
        "de-DE": {
          singular: "Vor {COUNT} Sekunden",
          plural: "Vor {COUNT} Sekunden"
        },
        "fr-FR": {
          singular: "Il y a {COUNT} seconde",
          plural: "Il y a {COUNT} secondes"
        },
        "ja-JP": {
          singular: "{COUNT}秒前",
          plural: "{COUNT}秒前"
        },
        "ko-KR": {
          singular: "{COUNT}초 전",
          plural: "{COUNT}초 전"
        },
        "pt-BR": {
          singular: "{COUNT} segundo atrás",
          plural: "{COUNT} segundos atrás"
        },
        "zh-CN": {
          singular: "{COUNT} 秒前",
          plural: "{COUNT} 秒前"
        }
      }
    });
    if (_v5 < 0) return (_v6 = Math.round(_v5 / 0), _v3) ? (0, _v1.translate)({
      singular: "{COUNT} min",
      plural: "{COUNT} mins",
      count: _v6,
      replacements: {
        COUNT: _v6
      },
      dictionary: {
        es: {
          singular: "{COUNT} minuto",
          plural: "{COUNT} minutos"
        },
        "de-DE": {
          singular: "{COUNT} Min",
          plural: "{COUNT} Min"
        },
        "fr-FR": {
          singular: "{COUNT} min",
          plural: "{COUNT} min"
        },
        "ja-JP": {
          singular: "{COUNT} 分",
          plural: "{COUNT} 分"
        },
        "ko-KR": {
          singular: "{COUNT}분",
          plural: "{COUNT}분"
        },
        "zh-CN": {
          singular: "{COUNT} 分钟",
          plural: "{COUNT} 分钟"
        }
      }
    }) : (0, _v1.translate)({
      singular: "{COUNT} minute ago",
      plural: "{COUNT} minutes ago",
      count: _v6,
      replacements: {
        COUNT: _v6
      },
      dictionary: {
        es: {
          singular: "hace {COUNT} minuto",
          plural: "hace {COUNT} minutos"
        },
        "de-DE": {
          singular: "vor {COUNT} Minute",
          plural: "vor {COUNT} Minuten"
        },
        "fr-FR": {
          singular: "Il y a {COUNT} minute",
          plural: "Il y a {COUNT} minutes "
        },
        "ja-JP": {
          singular: "{COUNT}分前",
          plural: "{COUNT} 分前"
        },
        "ko-KR": {
          singular: "{COUNT}분 전",
          plural: "{COUNT}분 전"
        },
        "pt-BR": {
          singular: "{COUNT} minuto atrás",
          plural: "{COUNT} minutos atrás"
        },
        "zh-CN": {
          singular: "{COUNT} 分钟前",
          plural: "{COUNT} 分钟前"
        }
      }
    });
    if (_v5 < 0) return (_v6 = Math.round(_v5 / 0), _v3) ? (0, _v1.translate)({
      singular: "{COUNT} hr",
      plural: "{COUNT} hrs",
      count: _v6,
      replacements: {
        COUNT: _v6
      },
      dictionary: {
        es: {
          singular: "{COUNT} h",
          plural: "{COUNT} h"
        },
        "de-DE": {
          singular: "{COUNT} Std.",
          plural: "{COUNT} Std."
        },
        "fr-FR": {
          singular: "{COUNT} h",
          plural: "{COUNT} h"
        },
        "ja-JP": {
          singular: "{COUNT} 時間",
          plural: "{COUNT} 時間"
        },
        "ko-KR": {
          singular: "{COUNT}시간",
          plural: "{COUNT}시간"
        },
        "pt-BR": {
          singular: "{COUNT}h",
          plural: "{COUNT}h"
        },
        "zh-CN": {
          singular: "{COUNT} 小时",
          plural: "{COUNT} 小时"
        }
      }
    }) : (0, _v1.translate)({
      singular: "{COUNT} hour ago",
      plural: "{COUNT} hours ago",
      count: _v6,
      replacements: {
        COUNT: _v6
      },
      dictionary: {
        es: {
          singular: "hace {COUNT} hora(s)",
          plural: "hace {COUNT} horas"
        },
        "de-DE": {
          singular: "vor {COUNT} Stunde",
          plural: "vor {COUNT} Stunden"
        },
        "fr-FR": {
          singular: "Il y a {COUNT} heure ",
          plural: "Il y a {COUNT} heures "
        },
        "ja-JP": {
          singular: "{COUNT} 時間前",
          plural: "{COUNT} 時間前"
        },
        "ko-KR": {
          singular: "{COUNT}시간 전",
          plural: "{COUNT}시간 전"
        },
        "pt-BR": {
          singular: "{COUNT} hora atrás",
          plural: "{COUNT} horas atrás"
        },
        "zh-CN": {
          singular: "{COUNT} 小时前",
          plural: "{COUNT} 小时前"
        }
      }
    });
    if (_v5 < 0) return (_v6 = Math.round(_v5 / 0), _v3) ? (0, _v1.translate)({
      singular: "{COUNT} day",
      plural: "{COUNT} days",
      count: _v6,
      replacements: {
        COUNT: _v6
      },
      dictionary: {
        es: {
          singular: "{COUNT} día",
          plural: "{COUNT} días"
        },
        "de-DE": {
          singular: "{COUNT} Tag",
          plural: "{COUNT} Tage"
        },
        "fr-FR": {
          singular: "{COUNT} jour",
          plural: "{COUNT} jours"
        },
        "ja-JP": {
          singular: "{COUNT} 日",
          plural: "{COUNT}日"
        },
        "ko-KR": {
          singular: "{COUNT}일",
          plural: "{COUNT}일"
        },
        "pt-BR": {
          singular: "{COUNT} dia",
          plural: "{COUNT} dias"
        },
        "zh-CN": {
          singular: "{COUNT} 天",
          plural: "{COUNT} 天"
        }
      }
    }) : (0, _v1.translate)({
      singular: "{COUNT} day ago",
      plural: "{COUNT} days ago",
      count: _v6,
      replacements: {
        COUNT: _v6
      },
      dictionary: {
        es: {
          singular: "hace {COUNT} día",
          plural: "hace {COUNT} días"
        },
        "de-DE": {
          singular: "vor {COUNT} Tag",
          plural: "vor {COUNT} Tagen"
        },
        "fr-FR": {
          singular: "Il y a {COUNT} jour",
          plural: "Il y a {COUNT} jours"
        },
        "ja-JP": {
          singular: "{COUNT} 日前",
          plural: "{COUNT} 日前"
        },
        "ko-KR": {
          singular: "{COUNT}일 전",
          plural: "{COUNT}일 전"
        },
        "pt-BR": {
          singular: "{COUNT} dia atrás",
          plural: "{COUNT} dias atrás"
        },
        "zh-CN": {
          singular: "{COUNT} 天前",
          plural: "{COUNT} 天前"
        }
      }
    });
    if (_v5 < 0) return (_v6 = Math.floor(_v5 / 0), _v3) ? (0, _v1.translate)({
      singular: "{COUNT} month",
      plural: "{COUNT} months",
      count: _v6,
      replacements: {
        COUNT: _v6
      },
      dictionary: {
        es: {
          singular: "{COUNT} mes",
          plural: "{COUNT} meses"
        },
        "de-DE": {
          singular: "{COUNT} Monat",
          plural: "{COUNT} Monaten"
        },
        "fr-FR": {
          singular: "{COUNT} mois",
          plural: "{COUNT} mois"
        },
        "ja-JP": {
          singular: "{COUNT}月",
          plural: "{COUNT} カ月"
        },
        "ko-KR": {
          singular: "{COUNT}개월",
          plural: "{COUNT}개월"
        },
        "pt-BR": {
          singular: "{COUNT} mês",
          plural: "{COUNT} meses"
        },
        "zh-CN": {
          singular: "{COUNT} 个月",
          plural: "{COUNT} 个月"
        }
      }
    }) : (0, _v1.translate)({
      singular: "{COUNT} month ago",
      plural: "{COUNT} months ago",
      count: _v6,
      replacements: {
        COUNT: _v6
      },
      dictionary: {
        es: {
          singular: "Hace {COUNT} mes",
          plural: "Hace {COUNT} meses"
        },
        "de-DE": {
          singular: "vor {COUNT} Monat",
          plural: "vor {COUNT} Monaten"
        },
        "fr-FR": {
          singular: "Il y a {COUNT} mois",
          plural: "Il y a {COUNT} mois"
        },
        "ja-JP": {
          singular: "{COUNT}ヶ月前",
          plural: "{COUNT}ヶ月前"
        },
        "ko-KR": {
          singular: "{COUNT}개월 전",
          plural: "{COUNT}개월 전"
        },
        "pt-BR": {
          singular: "{COUNT} mês atrás",
          plural: "{COUNT} meses atrás"
        },
        "zh-CN": {
          singular: "{COUNT} 个月前",
          plural: "{COUNT} 个月前"
        }
      }
    });else return (_v6 = Math.floor(_v5 / 0), _v3) ? (0, _v1.translate)({
      singular: "{COUNT} year",
      plural: "{COUNT} years",
      count: _v6,
      replacements: {
        COUNT: _v6
      },
      dictionary: {
        es: {
          singular: "{COUNT} año",
          plural: "{COUNT} años"
        },
        "de-DE": {
          singular: "{COUNT} Jahr",
          plural: "{COUNT} Jahre"
        },
        "fr-FR": {
          singular: "{COUNT} année",
          plural: "{COUNT} ans"
        },
        "ja-JP": {
          singular: "{COUNT}年",
          plural: "{COUNT} 年"
        },
        "ko-KR": {
          singular: "{COUNT}년",
          plural: "{COUNT}년"
        },
        "pt-BR": {
          singular: "{COUNT} ano",
          plural: "{COUNT} anos"
        },
        "zh-CN": {
          singular: "{COUNT} 年",
          plural: "{COUNT} 年"
        }
      }
    }) : (0, _v1.translate)({
      singular: "{COUNT} year ago",
      plural: "{COUNT} years ago",
      count: _v6,
      replacements: {
        COUNT: _v6
      },
      dictionary: {
        es: {
          singular: "Hace {COUNT} año",
          plural: "Hace {COUNT} años"
        },
        "de-DE": {
          singular: "vor {COUNT} Jahr",
          plural: "vor {COUNT} Jahren"
        },
        "fr-FR": {
          singular: "Il y a {COUNT} an",
          plural: "Il y a {COUNT} ans"
        },
        "ja-JP": {
          singular: "{COUNT}年前",
          plural: "{COUNT}年前"
        },
        "ko-KR": {
          singular: "{COUNT}년 전",
          plural: "{COUNT}년 전"
        },
        "pt-BR": {
          singular: "{COUNT} ano atrás",
          plural: "{COUNT} anos atrás"
        },
        "zh-CN": {
          singular: "{COUNT} 年前",
          plural: "{COUNT} 年前"
        }
      }
    });
  }
  _v0.s(["fromNow", 0, function (_v0, _v1) {
    return _v3(_v0, new Date(Date.now()), _v1);
  }, "getDateObjFromFormat", 0, (_v0, _v1) => {
    if (!_v0) throw Error("Empty Date String");
    if ("YYYY-MM-DD" === _v1) {
      let _v0 = _v0.split("-");
      return new Date(+_v0[0], _v0[1] - 1, +_v0[2]);
    }
    throw Error("Unsupported Format");
  }, "getFormattedStringFromDateObj", 0, (_v0, _v1) => {
    let _v2 = [(0, _v1.translate)({
      singular: "Jan",
      dictionary: {
        es: {
          singular: "ene."
        },
        "de-DE": {
          singular: "Januar"
        },
        "fr-FR": {
          singular: "Janv."
        },
        "ja-JP": {
          singular: "1月"
        },
        "ko-KR": {
          singular: "1월"
        },
        "zh-CN": {
          singular: "1 月"
        }
      }
    }), (0, _v1.translate)({
      singular: "Feb",
      dictionary: {
        es: {
          singular: "febr."
        },
        "de-DE": {
          singular: "Februar"
        },
        "fr-FR": {
          singular: "Févr."
        },
        "ja-JP": {
          singular: "2月"
        },
        "ko-KR": {
          singular: "2월"
        },
        "pt-BR": {
          singular: "Fev"
        },
        "zh-CN": {
          singular: "2 月"
        }
      }
    }), (0, _v1.translate)({
      singular: "Mar",
      dictionary: {
        es: {
          singular: "mzo."
        },
        "de-DE": {
          singular: "März"
        },
        "fr-FR": {
          singular: "Mars"
        },
        "ja-JP": {
          singular: "3月"
        },
        "ko-KR": {
          singular: "3월"
        },
        "zh-CN": {
          singular: "3 月"
        }
      }
    }), (0, _v1.translate)({
      singular: "Apr",
      dictionary: {
        es: {
          singular: "abr."
        },
        "de-DE": {
          singular: "April"
        },
        "fr-FR": {
          singular: "Avr."
        },
        "ja-JP": {
          singular: "4月"
        },
        "ko-KR": {
          singular: "4월"
        },
        "pt-BR": {
          singular: "Abr"
        },
        "zh-CN": {
          singular: "四"
        }
      }
    }), (0, _v1.translate)({
      singular: "May",
      dictionary: {
        es: {
          singular: "my."
        },
        "de-DE": {
          singular: "Mai"
        },
        "fr-FR": {
          singular: "Mai"
        },
        "ja-JP": {
          singular: "5 月"
        },
        "ko-KR": {
          singular: "5월"
        },
        "pt-BR": {
          singular: "maio"
        },
        "zh-CN": {
          singular: "5 月"
        }
      }
    }), (0, _v1.translate)({
      singular: "Jun",
      dictionary: {
        es: {
          singular: "jun."
        },
        "de-DE": {
          singular: "Juni"
        },
        "fr-FR": {
          singular: "Juin"
        },
        "ja-JP": {
          singular: "6月"
        },
        "ko-KR": {
          singular: "6월"
        },
        "zh-CN": {
          singular: "6 月"
        }
      }
    }), (0, _v1.translate)({
      singular: "Jul",
      dictionary: {
        es: {
          singular: "jul."
        },
        "de-DE": {
          singular: "Juli"
        },
        "fr-FR": {
          singular: "Juill."
        },
        "ja-JP": {
          singular: "7月"
        },
        "ko-KR": {
          singular: "7월"
        },
        "zh-CN": {
          singular: "7 月"
        }
      }
    }), (0, _v1.translate)({
      singular: "Aug",
      dictionary: {
        es: {
          singular: "ago."
        },
        "de-DE": {
          singular: "August"
        },
        "fr-FR": {
          singular: "Août"
        },
        "ja-JP": {
          singular: "8月"
        },
        "ko-KR": {
          singular: "8월"
        },
        "pt-BR": {
          singular: "Ago"
        },
        "zh-CN": {
          singular: "8 月"
        }
      }
    }), (0, _v1.translate)({
      singular: "Sep",
      dictionary: {
        es: {
          singular: "sep."
        },
        "de-DE": {
          singular: "September"
        },
        "fr-FR": {
          singular: "Sept."
        },
        "ja-JP": {
          singular: "9月"
        },
        "ko-KR": {
          singular: "9월"
        },
        "pt-BR": {
          singular: "Set"
        },
        "zh-CN": {
          singular: "9 月"
        }
      }
    }), (0, _v1.translate)({
      singular: "Oct",
      dictionary: {
        es: {
          singular: "oct."
        },
        "de-DE": {
          singular: "Oktober"
        },
        "fr-FR": {
          singular: "Oct."
        },
        "ja-JP": {
          singular: "10月"
        },
        "ko-KR": {
          singular: "10월"
        },
        "pt-BR": {
          singular: "Out"
        },
        "zh-CN": {
          singular: "10 月"
        }
      }
    }), (0, _v1.translate)({
      singular: "Nov",
      dictionary: {
        es: {
          singular: "nov."
        },
        "de-DE": {
          singular: "November"
        },
        "fr-FR": {
          singular: "Nov."
        },
        "ja-JP": {
          singular: "11月"
        },
        "ko-KR": {
          singular: "11월"
        },
        "zh-CN": {
          singular: "十一"
        }
      }
    }), (0, _v1.translate)({
      singular: "Dec",
      dictionary: {
        es: {
          singular: "dic."
        },
        "de-DE": {
          singular: "Dezember"
        },
        "fr-FR": {
          singular: "Déc."
        },
        "ja-JP": {
          singular: "12月"
        },
        "ko-KR": {
          singular: "12월"
        },
        "pt-BR": {
          singular: "Dez"
        },
        "zh-CN": {
          singular: "12 月"
        }
      }
    })];
    switch (_v1) {
      case "YYYY":
        return `${_v0.getFullYear()}`;
      case "MMM":
        return `${_v2[_v0.getMonth()]}`;
      case "MMM, YYYY":
        return `${_v2[_v0.getMonth()]}, ${_v0.getFullYear()}`;
      case "MMM YYYY":
        return `${_v2[_v0.getMonth()]} ${_v0.getFullYear()}`;
      case "YYYY-MM-DD":
        return _v0.getFullYear() + "-" + ("0" + (_v0.getMonth() + 1)).slice(-2) + "-" + ("0" + _v0.getDate()).slice(-2);
      case "MMM DD, YYYY":
        return `${_v2[_v0.getMonth()]} ${_v0.getDate()}, ${_v0.getFullYear()}`;
      case "MMM DD":
        return `${_v2[_v0.getMonth()]} ${_v0.getDate()}`;
      default:
        throw Error("[VA] Unknown String Format Requested");
    }
  }, "secondsToDisplay", 0, _v0 => {
    let _v1 = new Date(0 * _v0).toISOString();
    return _v0 >= 0 ? _v1.substr(11, 8) : _v1.substr(14, 5);
  }, "secondsToTimecode", 0, (_v0, _v1 = !1) => {
    let _v2 = (_v0, _v1 = 2) => _v0.toString().padStart(_v1, "0"),
      _v3 = Math.floor(_v0),
      _v4 = Math.floor(_v3 / 60) % 60,
      _v5 = Math.floor(_v3 / 0),
      _v6 = [_v2(_v4), _v2(_v3 % 60)];
    if (_v1) {
      let _v0 = Math.floor(100 * _v0 % 100);
      _v6.push(_v2(_v0, 2));
    }
    return _v5 > 0 ? [_v2(_v5), ..._v6].join(":") : _v6.join(":");
  }, "timeBetween", 0, _v3]);
}