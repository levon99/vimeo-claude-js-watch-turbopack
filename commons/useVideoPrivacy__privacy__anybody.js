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
  _v0.s(["useVideoPrivacy", 0, (_v0, _v1, _v2, _v3, _v4) => {
    var _v5, _v6, _v7, _v8, _v9;
    let _v10,
      _v11,
      _v12,
      _v13,
      _v14,
      {
        data: _v15,
        isLoading: _v16
      } = (_v5 = _v0, _v6 = _v1, _v7 = _v2, _v8 = _v3, _v9 = _v4, _v10 = (0, _v7.useViewer)(), _v11 = ["privacy"], _v12 = (0, _v2.useGetVideo)(() => {
        if (!_v10 || !_v5 || !_v7 && !_v8 || _v6) return null;
        let _v0 = _v7 ? (0, _v8.getReviewPasswordHashFromCookie)(_v7) : void 0;
        return {
          where: {
            videoId: _v5
          },
          select: _v11,
          query: {
            reviewId: _v7,
            password: _v0,
            ...(0, _v8.getFolderShareQuery)(_v8, _v9)
          }
        };
      }, {
        revalidateOnFocus: !1
      }), _v13 = (0, _v4.useGetAlbumVideoData)(_v6 || null, Number((0, _v8.getVideoIdFromClipRequestId)(_v5)), (0, _v8.mapToClipFields)(_v11), !_v6), _v14 = (0, _v5.useGetUnlockedVideo)(() => !_v10 || _v6 || _v7 || _v8 ? null : {
        where: {
          videoId: _v5
        },
        select: _v11
      }, {
        revalidateOnFocus: !1
      }), _v7 || _v8 ? _v12 : _v6 ? {
        data: (0, _v8.extractClipData)(_v13.data),
        isLoading: _v13.isLoading
      } : _v14),
      _v17 = (0, _v1.useToast)(),
      [_v18] = (0, _v6.usePatchUnlockedVideo)(),
      _v19 = async _v0 => {
        await _v18({
          where: {
            videoId: _v0
          },
          select: ["privacy"],
          variables: {
            privacy: {
              comments: _v0 ? "anybody" : "nobody"
            }
          }
        }).then(() => {
          _v17({
            duration: 0,
            title: (0, _v3.translate)({
              singular: "Preferences updated",
              dictionary: {
                es: {
                  singular: "Preferencias actualizadas"
                },
                "de-DE": {
                  singular: "Einstellungen wurden aktualisiert"
                },
                "fr-FR": {
                  singular: "Préférences mises à jour"
                },
                "ja-JP": {
                  singular: "設定が更新されました"
                },
                "ko-KR": {
                  singular: "기본 설정이 업데이트되었습니다."
                },
                "pt-BR": {
                  singular: "Preferências atualizadas"
                },
                "zh-CN": {
                  singular: "偏好设置已更新"
                }
              }
            })
          });
        });
      };
    return {
      privacy: _v15?.privacy,
      isLoading: _v16,
      saveViewerCommentsSetting: _v19
    };
  }]);
}