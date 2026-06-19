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
    _v14 = _v0.i(0);
  _v0.s(["EventMenu", 0, function ({
    liveEvent: _v0,
    eventLink: _v1,
    folder: _v2,
    ownerId: _v3,
    onDelete: _v4,
    onMoveSuccess: _v5,
    onRename: _v6,
    analytics: _v7
  }) {
    let _v8 = (0, _v2.useContext)(_v6.ViewerContext),
      {
        title: _v9,
        embed: _v10,
        eventType: _v11,
        metadata: _v12,
        uri: _v13
      } = _v0,
      _v14 = (0, _v11.useNotification)(),
      {
        notifyItemMoveSuccess: _v15,
        notifyItemMoveToWorkspaceSuccess: _v16
      } = (0, _v11.useNotifications)(),
      {
        capabilities: {
          hasContentSpaceEnabled: _v17
        }
      } = (0, _v3.useCapability)(["hasContentSpaceEnabled"], _v3),
      _v18 = _v17 ? (0, _v4.translate)({
        singular: "Team library",
        dictionary: {
          es: {
            singular: "Biblioteca del equipo"
          },
          "de-DE": {
            singular: "Teambibliothek"
          },
          "fr-FR": {
            singular: "Bibliothèque de l'équipe"
          },
          "ja-JP": {
            singular: "チームライブラリ"
          },
          "ko-KR": {
            singular: "팀 라이브러리"
          },
          "pt-BR": {
            singular: "Biblioteca da equipe"
          },
          "zh-CN": {
            singular: "团队视频库"
          }
        }
      }) : (0, _v4.translate)({
        singular: "Library",
        dictionary: {
          es: {
            singular: "Biblioteca"
          },
          "de-DE": {
            singular: "Bibliothek"
          },
          "fr-FR": {
            singular: "Bibliothèque"
          },
          "ja-JP": {
            singular: "ライブラリ"
          },
          "ko-KR": {
            singular: "라이브러리"
          },
          "pt-BR": {
            singular: "Biblioteca"
          },
          "zh-CN": {
            singular: "视频库"
          }
        }
      }),
      _v19 = (0, _v9.useLiveEventDeleteModal)(),
      {
        openMoveModal: _v20
      } = (0, _v10.useMoveModal)(),
      _v21 = _v0 => {
        _v14({
          content: _v0
        });
      },
      _v22 = (0, _v8.useDeleteLiveEvent)({
        onFailure: () => {
          _v19.setIsLoading(!1);
        },
        onSuccess: () => {
          _v4?.(), _v14({
            content: (0, _v4.translate)({
              singular: "This event has been deleted",
              dictionary: {
                es: {
                  singular: "Se ha eliminado este evento"
                },
                "de-DE": {
                  singular: "Dieses Event wurde gelöscht"
                },
                "fr-FR": {
                  singular: "Cet événement a été supprimé"
                },
                "ja-JP": {
                  singular: "このイベントは削除されました"
                },
                "ko-KR": {
                  singular: "이 이벤트는 삭제되었습니다."
                },
                "pt-BR": {
                  singular: "Este vídeo foi excluído"
                },
                "zh-CN": {
                  singular: "此活动已被删除"
                }
              }
            })
          }), _v19.setIsLoading(!1), _v19.close();
        }
      });
    return (0, _v1.jsx)(_v5.EventMenu, {
      type: _v11,
      onClick: () => {
        _v7.EventActionAnalytics.clickEventMenu(_v7.pageName.toUpperCase(), _v7.target, _v7.AnalyticsLocations.EVENT_LIST);
      },
      onCopyLink: () => {
        _v21(_v12.linkCopySuccess), _v7.EventActionAnalytics.clickCopyEventLink(_v7.pageName.toUpperCase(), _v7.target, _v7.AnalyticsLocations.EVENT_LIST);
      },
      onCopyEmbedLink: () => {
        _v21(_v12.embedCodeCopySuccess), _v7.EventActionAnalytics.clickCopyEventEmbedCode(_v7.pageName.toUpperCase(), _v7.target, _v7.AnalyticsLocations.EVENT_LIST);
      },
      canDelete: !!_v12?.interactions?.delete,
      onDelete: () => {
        _v19.open({
          onConfirm: () => {
            _v19.setIsLoading(!0), _v22({
              title: _v9,
              uri: _v13,
              ownerId: _v3
            });
          },
          onDismiss: () => {
            _v19.close();
          },
          name: _v9
        }), _v7.EventActionAnalytics.clickDeleteEvent(_v7.pageName.toUpperCase(), _v7.target, _v7.AnalyticsLocations.EVENT_LIST);
      },
      canEdit: !!_v12?.interactions?.edit,
      onMove: () => {
        _v7.EventActionAnalytics.clickMoveEvent(_v7.pageName.toUpperCase(), _v7.target, _v7.AnalyticsLocations.EVENT_LIST), _v20({
          activeFolderURI: _v2.uri,
          feature: _v7.AnalyticsFeatures.VIDEO_LIBRARY,
          location: _v7.AnalyticsLocations.LIVE_EVENT_CARD_MENU,
          items: [{
            name: _v9,
            type: "live_event",
            uri: _v13,
            parentFolder: _v2?.uri ? {
              uri: _v2.uri,
              isPrivateToUser: _v2.isPrivateToUser
            } : void 0
          }],
          onMoveSuccess: ({
            selectedDestination: _v0,
            destinationWorkspaceId: _v1,
            destinationWorkspaceName: _v2
          }) => {
            if (_v5?.(), _v1 && _v2) {
              let _v0 = "root" === _v0 ? _v18 : _v0.name,
                _v1 = "root" === _v0 ? "/library" : (0, _v13.getFolderPageUriFromApiUri)(_v0.uri);
              _v16(_v9, {
                label: _v0,
                workspaceName: _v2
              }, () => {
                _v8 && (0, _v14.switchTeam)(_v1, _v8.xsrft).finally(() => {
                  window.location.href = _v1;
                });
              });
            } else "root" !== _v0 && _v15(_v9, {
              label: _v0.name,
              link: (0, _v13.getFolderPageUriFromApiUri)(_v0.uri)
            });
          },
          teamOwnerId: _v3
        });
      },
      onClickViewEventLink: () => {
        _v7.EventActionAnalytics.clickViewEventPage(_v7.pageName.toUpperCase(), _v7.target, _v7.AnalyticsLocations.EVENT_LIST);
      },
      onRename: _v6,
      eventLink: _v1,
      embedCode: _v10.html,
      viewPrivacy: _v0.streamPrivacy?.view,
      title: _v0.title
    });
  }]);
}