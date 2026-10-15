{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["getContentTypeLabel", 0, _v0 => {
    switch (_v0) {
      case "video":
        return (0, _v1.translate)({
          singular: "Video",
          dictionary: {
            "fr-FR": {
              singular: "Vidéo"
            },
            "ja-JP": {
              singular: "動画"
            },
            "ko-KR": {
              singular: "동영상"
            },
            "pt-BR": {
              singular: "Vídeo"
            },
            "zh-CN": {
              singular: "视频"
            }
          }
        });
      case "document":
        return (0, _v1.translate)({
          singular: "Document",
          dictionary: {
            es: {
              singular: "Documento"
            },
            "de-DE": {
              singular: "Dokument"
            },
            "ja-JP": {
              singular: "ドキュメント"
            },
            "ko-KR": {
              singular: "문서"
            },
            "pt-BR": {
              singular: "Documento"
            },
            "zh-CN": {
              singular: "文档"
            }
          }
        });
      case "image":
        return (0, _v1.translate)({
          singular: "Image",
          dictionary: {
            es: {
              singular: "Imagen"
            },
            "de-DE": {
              singular: "Bild"
            },
            "ja-JP": {
              singular: "画像"
            },
            "ko-KR": {
              singular: "이미지"
            },
            "pt-BR": {
              singular: "Imagem"
            },
            "zh-CN": {
              singular: "图片"
            }
          }
        });
      case "audio":
        return (0, _v1.translate)({
          singular: "Audio",
          dictionary: {
            "ja-JP": {
              singular: "オーディオ"
            },
            "ko-KR": {
              singular: "오디오"
            },
            "pt-BR": {
              singular: "Áudio"
            },
            "zh-CN": {
              singular: "音频"
            }
          }
        });
      default:
        throw Error(`Unhandled content type category: ${_v0}`);
    }
  }]);
}