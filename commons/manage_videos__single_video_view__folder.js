{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = _v0 => _v0.split("/").at(-1),
    _v4 = (_v0, _v1) => {
      if (_v0.includes("/manage/videos/")) return "single_video_view";
      if (_v0.includes("/folder") && _v1) return "my_library";
      if (_v0.includes("/folder") || _v0.includes("/library")) ;else if (_v0.includes("/reviews/")) return "review_page";else if (_v0.includes("/home")) return "logged_in_home_page";
      return "multiple_video_view";
    };
  _v0.s(["TOAST_DURATION", 0, 0, "TOAST_WITH_LINK_DURATION", 0, 0, "buildReviewClipUri", 0, (_v0, _v1) => `/reviews/${_v1}/videos/${_v0}`, "computeAnalyticsProps", 0, ({
    pathname: _v0,
    location: _v1,
    resourceId: _v2,
    resourceType: _v3,
    isPrivate: _v4,
    mode: _v5
  }) => {
    let _v6 = (_v0 => {
        switch (_v0) {
          case "create":
            return "create link";
          case "copy":
            return "copy review link";
          case "edit":
            return "save review link";
          case "delete":
            return "delete review link";
          case "enable":
            return "enable review link";
          case "disable":
            return "disable review link";
          default:
            return null;
        }
      })(_v5),
      _v7 = {
        webContextFields: {
          page_name: _v4(_v0, _v4),
          copy: _v6
        },
        productContextFields: {
          copy: _v6,
          location: _v1
        }
      };
    return "folder" === _v3 && _v2 && (_v7.folderContextFields = {
      folder_id: _v2
    }, _v7.productContextFields = {
      ..._v7.productContextFields,
      entity_type: "folder"
    }), "clip" === _v3 && _v2 && (_v7.videoContextFields = {
      video_id: _v2
    }, _v7.productContextFields = {
      ..._v7.productContextFields,
      entity_type: "video"
    }), _v7;
  }, "formClipManageUri", 0, (_v0, _v1) => _v1 ? `/manage/videos/${_v0}/${_v1}` : `/manage/videos/${_v0}`, "formVersionRedirectUri", 0, (_v0, _v1, _v2, _v3, _v4) => _v4 && _v3 ? `/reviews/${_v3}/videos/${_v1}` : _v3 ? `/reviews/${_v3}/videos/${_v1}/versions/${_v0}` : _v2 ? `/videos/${_v1}/${_v2}/versions/${_v0}` : `/videos/${_v1}/versions/${_v0}`, "formatDate", 0, (_v0, _v1) => {
    let _v2 = "u" > typeof navigator ? navigator.language : "en-US",
      _v3 = new Date(_v0).getTime(),
      _v4 = new Intl.DateTimeFormat(_v2, {
        hour: "numeric",
        minute: "numeric",
        hour12: !0
      }).format(_v3).toLowerCase(),
      _v5 = new Intl.DateTimeFormat(_v2, {
        month: "short",
        day: "numeric"
      }).format(_v3),
      _v6 = new Date(_v0),
      _v7 = new Date(),
      _v8 = new Date();
    _v8.setDate(_v7.getDate() + 1);
    let _v9 = (_v0, _v1) => _v0.getFullYear() === _v1.getFullYear() && _v0.getMonth() === _v1.getMonth() && _v0.getDate() === _v1.getDate();
    return _v9(_v6, _v7) && !_v1 ? (0, _v2.translate)({
      singular: "Today at {TIME}",
      replacements: {
        TIME: _v4
      },
      dictionary: {
        es: {
          singular: "Hoy a las {TIME}"
        },
        "de-DE": {
          singular: "Heute um {TIME}"
        },
        "fr-FR": {
          singular: "Aujourd'hui à {TIME}"
        },
        "ja-JP": {
          singular: "今日 {TIME}"
        },
        "ko-KR": {
          singular: "오늘 {TIME}"
        },
        "pt-BR": {
          singular: "Hoje às {TIME}"
        },
        "zh-CN": {
          singular: "今天 {TIME}"
        }
      }
    }) : _v9(_v6, _v8) && !_v1 ? (0, _v2.translate)({
      singular: "Tomorrow at {TIME}",
      replacements: {
        TIME: _v4
      },
      dictionary: {
        es: {
          singular: "Mañana a las {TIME}"
        },
        "de-DE": {
          singular: "Morgen um {TIME}"
        },
        "fr-FR": {
          singular: "Demain à {TIME}"
        },
        "ja-JP": {
          singular: "明日 {TIME}"
        },
        "ko-KR": {
          singular: "내일 {TIME}"
        },
        "pt-BR": {
          singular: "Amanhã às {TIME}"
        },
        "zh-CN": {
          singular: "明天 {TIME}"
        }
      }
    }) : (0, _v2.translate)({
      singular: "{DATE} at {TIME}",
      replacements: {
        DATE: _v5,
        TIME: _v4
      },
      dictionary: {
        es: {
          singular: "{DATE} a las {TIME}"
        },
        "de-DE": {
          singular: "{DATE} am {TIME}"
        },
        "fr-FR": {
          singular: "Le {DATE} à {TIME}"
        },
        "ja-JP": {
          singular: "{DATE} {TIME}"
        },
        "ko-KR": {
          singular: "{DATE} {TIME}"
        },
        "pt-BR": {
          singular: "Em {DATE} às {TIME}"
        },
        "zh-CN": {
          singular: "{DATE} {TIME}"
        }
      }
    });
  }, "getAnalyticsPageName", 0, _v4, "getFolderReviewPageUrl", 0, (_v0, _v1, _v2) => `${window.location.origin}/reviews/${_v3(_v0)}/users/${_v2}/folders/${_v1}`, "getPermissionToFolder", 0, _v0 => _v0?.delete?.uri ? "manage" : _v0?.edit?.uri ? "edit" : _v0?.canComment ? "comment" : _v0?.view?.uri ? "view" : null, "getReviewPasswordHashFromCookie", 0, _v0 => {
    if (_v0) {
      let _v0 = `${_v0}_password`;
      return (0, _v1.loadCookie)(_v0) ?? void 0;
    }
  }, "getVideoReviewPageUrl", 0, (_v0, _v1) => `${window.location.origin}/reviews/${_v3(_v0)}/videos/${_v1}`, "idFromUri", 0, _v0 => {
    if (!_v0) return 0;
    let _v1 = _v0.split("/").pop();
    return isNaN(Number(_v1)) ? 0 : Number(_v1);
  }, "reviewIdFromUri", 0, _v3, "videoIdFromUri", 0, _v0 => {
    if (!_v0) return 0;
    let _v1 = Number(_v0.split("/").at(2));
    return isNaN(_v1) ? 0 : _v1;
  }]);
}