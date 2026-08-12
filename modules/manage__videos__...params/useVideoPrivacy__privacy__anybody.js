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
    _v9 = _v0.i(0);
  _v0.s(["useVideoPrivacy", 0, (_v0, _v1, _v2) => {
    var _v3, _v4, _v5;
    let _v6,
      _v7,
      _v8,
      _v9,
      _v10,
      _v11 = (0, _v7.useViewer)(),
      {
        data: _v12,
        isLoading: _v13
      } = (_v3 = _v0, _v4 = _v1, _v5 = _v2, _v6 = (0, _v7.useViewer)(), _v7 = ["privacy"], _v8 = (0, _v2.useGetVideo)(() => {
        if (!_v6 || !_v3 || !_v5 || _v4) return null;
        let _v0 = (0, _v9.getReviewPasswordHashFromCookie)(_v5);
        return {
          where: {
            videoId: _v3
          },
          select: _v7,
          query: {
            reviewId: _v5,
            password: _v0
          }
        };
      }, {
        revalidateOnFocus: !1
      }), _v9 = (0, _v4.useGetAlbumVideoData)(_v4 || null, Number((0, _v9.getVideoIdFromClipRequestId)(_v3)), (0, _v9.mapToClipFields)(_v7), !_v4), _v10 = (0, _v5.useGetUnlockedVideo)(() => !_v6 || _v4 || _v5 ? null : {
        where: {
          videoId: _v3
        },
        select: _v7
      }, {
        revalidateOnFocus: !1
      }), _v5 ? _v8 : _v4 ? {
        data: (0, _v9.extractClipData)(_v9.data),
        isLoading: _v9.isLoading
      } : _v10),
      _v14 = (0, _v1.useToast)(),
      [_v15] = (0, _v6.usePatchUnlockedVideo)(),
      _v16 = async _v0 => {
        await _v15({
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
          (0, _v8.bpAllowViewerComments)(_v0, "Allow Viewer Comments", _v0, !1, _v12?.privacy?.view, {
            webContextFields: {
              page_name: "single_video_view_manage"
            }
          }, _v12?.user?.uri, _v11), _v14({
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
      privacy: _v12?.privacy,
      isLoading: _v13,
      saveViewerCommentsSetting: _v16
    };
  }]);
}