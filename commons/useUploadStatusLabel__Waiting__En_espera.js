{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  _v0.s(["useUploadStatusLabel", 0, _v0 => {
    let {
        uploads: _v1
      } = (0, _v2.useArtifactsUploader)(),
      _v2 = _v1.find(_v0 => _v0.uploadId === _v0);
    switch (_v2?.processStatus) {
      case _v1.UPLOAD_PROCESS_STATUS.IN_QUEUE:
        return (0, _v3.translate)({
          singular: "Waiting",
          dictionary: {
            es: {
              singular: "En espera"
            },
            "de-DE": {
              singular: "Warten"
            },
            "fr-FR": {
              singular: "En attente"
            },
            "ja-JP": {
              singular: "待機中"
            },
            "ko-KR": {
              singular: "대기 중"
            },
            "pt-BR": {
              singular: "Aguardando"
            },
            "zh-CN": {
              singular: "等待中"
            }
          }
        });
      case _v1.UPLOAD_PROCESS_STATUS.FETCHING_LINK:
      case _v1.UPLOAD_PROCESS_STATUS.UPLOADING:
        return (0, _v3.translate)({
          singular: "Uploading {PERCENT}%",
          replacements: {
            PERCENT: Math.round((_v2?.progress ?? 0) * 100)
          },
          dictionary: {
            es: {
              singular: "Subiendo {PERCENT}%"
            },
            "de-DE": {
              singular: "Hochladen {PERCENT}%"
            },
            "fr-FR": {
              singular: "Téléversement {PERCENT}%"
            },
            "ja-JP": {
              singular: "アップロード中 {PERCENT}%"
            },
            "ko-KR": {
              singular: "업로드 중 {PERCENT}%"
            },
            "pt-BR": {
              singular: "Enviando {PERCENT}%"
            },
            "zh-CN": {
              singular: "正在上传 {PERCENT}%"
            }
          }
        });
      case _v1.UPLOAD_PROCESS_STATUS.TRANSCODING:
      case _v1.UPLOAD_PROCESS_STATUS.DONE:
        return (0, _v3.translate)({
          singular: "Optimizing",
          dictionary: {
            es: {
              singular: "Optimizando"
            },
            "de-DE": {
              singular: "Wird optimiert"
            },
            "fr-FR": {
              singular: "Optimisation en cours"
            },
            "ja-JP": {
              singular: "最適化中"
            },
            "ko-KR": {
              singular: "최적화 중"
            },
            "pt-BR": {
              singular: "Otimizando"
            },
            "zh-CN": {
              singular: "优化中"
            }
          }
        });
      case _v1.UPLOAD_PROCESS_STATUS.PAUSED:
      case _v1.UPLOAD_PROCESS_STATUS.CANCELLED:
      case _v1.UPLOAD_PROCESS_STATUS.FAILED:
      default:
        return null;
    }
  }]);
}