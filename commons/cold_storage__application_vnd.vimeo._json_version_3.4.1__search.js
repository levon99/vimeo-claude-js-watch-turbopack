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
    _v18 = _v0.i(0);
  let _v19 = ({
      folderName: _v0,
      folderId: _v1,
      isOpen: _v2,
      location: _v3,
      parentFolderUri: _v4,
      ownerId: _v5,
      closeModal: _v6,
      isPrivateToUser: _v7,
      hasContentSpaceEnabled: _v8,
      onDelete: _v9
    }) => {
      let _v10 = (0, _v10.useHasMounted)(),
        {
          revalidateRootItems: _v11
        } = (0, _v13.useRevalidate)(),
        {
          settings: _v12
        } = (0, _v9.useOrionSettings)(),
        {
          data: _v13,
          isLoading: _v14
        } = (0, _v7.useGetUserVideos)(() => _v5 ? {
          where: {
            userId: _v5
          },
          select: ["uri"],
          query: {
            filter: "cold_storage",
            perPage: 1
          },
          headers: {
            Accept: "application/vnd.vimeo.*+json;version=3.4.1"
          }
        } : null, {
          revalidateOnFocus: !1
        }),
        _v15 = (_v13?.total ?? 0) > 0,
        [_v16, {
          error: _v17,
          loading: _v18
        }] = (0, _v6.useDeleteUserProject)(),
        _v19 = (0, _v5.useMatchMutate)(),
        _v20 = (0, _v4.useRouter)(),
        _v21 = (0, _v11.useAnalyticsEvent)(),
        _v22 = (0, _v12.usePageName)(),
        _v23 = _v22 === _v14.PAGE.VLS || _v22 === _v14.PAGE.SEARCH ? "search" : "video_library",
        _v24 = async () => {
          await _v16({
            where: {
              projectId: _v1,
              userId: _v5
            },
            variables: {
              shouldDeleteClips: !0,
              sendToRecentlyDeleted: _v12.has_recently_deleted
            },
            headers: {
              Accept: "application/vnd.vimeo.*+json;version=3.4.2"
            }
          }), _v17 || (_v21((0, _v3.deleteFolder)({
            product: _v3.AnalyticsProducts.WORKFLOW,
            path: window.location.pathname,
            location: _v3,
            folder_id: _v1,
            is_subfolder: !!_v4,
            feature: _v23,
            target_object_location_type: _v7 ? "private folder" : "team folder",
            actor_team_role: null,
            is_my_videos: _v7 && _v8
          })), _v19(_v4 ? `.*${_v4}/items.*` : `.*/users/${_v5}/projects.*topLevelOnly=true.*`), "/library" === _v20.pathname && _v11(), _v6(), _v20.query.folderId === `${_v1}` && _v20.push(_v4 ? (0, _v15.getFolderPageUriFromApiUri)(_v4) : _v14.Path.Home), _v9?.());
        };
      return _v10 ? (0, _v1.jsx)(_v16.DeleteModal, {
        bodyContent: (0, _v1.jsxs)(_v1.Fragment, {
          children: [_v12.has_recently_deleted ? (0, _v8.translate)({
            singular: "Permanently delete this folder. Its contents will be sent to Recently deleted.",
            dictionary: {
              es: {
                singular: "Eliminar esta carpeta de forma permanente. Su contenido se enviará a Eliminados recientemente."
              },
              "de-DE": {
                singular: "Diesen Ordner dauerhaft löschen. Seine Inhalte werden in Zuletzt gelöscht verschoben."
              },
              "fr-FR": {
                singular: "Supprimer définitivement ce dossier. Son contenu sera envoyé dans Récemment supprimés."
              },
              "ja-JP": {
                singular: "このフォルダを完全に削除します。 中身は「最近削除した項目」に移動されます。"
              },
              "ko-KR": {
                singular: "이 폴더를 영구적으로 삭제합니다. 해당 폴더의 내용은 최근 삭제된 항목으로 이동됩니다."
              },
              "pt-BR": {
                singular: "Excluir permanentemente esta pasta. O conteúdo dela será enviado para Excluídos recentemente."
              },
              "zh-CN": {
                singular: "永久删除此文件夹。其内容将被移至“最近删除”。"
              }
            }
          }) : (0, _v8.translate)({
            singular: "Permanently delete this folder and all of its content.",
            dictionary: {
              es: {
                singular: "Elimine esta carpeta y todo su contenido de forma permanente."
              },
              "de-DE": {
                singular: "Diesen Ordner und seinen gesamten Inhalt dauerhaft löschen."
              },
              "fr-FR": {
                singular: "Supprimez définitivement ce dossier et tout son contenu."
              },
              "ja-JP": {
                singular: "このフォルダーとそのすべてのコンテンツを完全に削除します。"
              },
              "ko-KR": {
                singular: "이 폴더와 폴더의 모든 콘텐츠를 영구적으로 삭제합니다."
              },
              "pt-BR": {
                singular: "Apague permanentemente esta pasta e todo o conteúdo."
              },
              "zh-CN": {
                singular: "永久删除此文件夹及其所有内容。"
              }
            }
          }), _v12.has_recently_deleted && _v15 && (0, _v1.jsx)(_v18.ColdStorageWarning, {
            children: (0, _v8.translate)({
              singular: "Any videos which are locked will be permanently deleted. This action cannot be undone.",
              dictionary: {
                es: {
                  singular: "Los videos que estén bloqueados se eliminarán permanentemente. Esta acción no se puede deshacer."
                },
                "de-DE": {
                  singular: "Alle Videos, die gesperrt sind, werden dauerhaft gelöscht. Diese Aktion kann nicht rückgängig gemacht werden."
                },
                "fr-FR": {
                  singular: "Toutes les vidéos verrouillées seront définitivement supprimées. Cette action est irréversible."
                },
                "ja-JP": {
                  singular: "ロックされた動画はすべて永久に削除されます。この操作は取り消せません。"
                },
                "ko-KR": {
                  singular: "잠긴 동영상은 모두 영구적으로 삭제됩니다. 이 작업은 취소할 수 없습니다."
                },
                "pt-BR": {
                  singular: "Quaisquer vídeos que estiverem bloqueados serão excluídos permanentemente. Esta ação não pode ser desfeita."
                },
                "zh-CN": {
                  singular: "任何被锁定的视频将被永久删除。此操作无法撤销。"
                }
              }
            })
          })]
        }),
        headerContent: (0, _v1.jsx)(_v17.TruncatedDeleteModalHeader, {
          name: _v0
        }),
        isDisabled: _v14,
        isLoading: _v18,
        isOpen: _v2,
        onClose: () => {
          _v6(), _v21((0, _v3.genericClick)({
            copy: "Cancel",
            feature: _v23,
            location: _v3,
            name: "cancel_delete_folder",
            page: _v22.toUpperCase(),
            target: null,
            target_path: null,
            type: "general"
          }));
        },
        onConfirm: _v24
      }) : null;
    },
    _v20 = {
      folderName: "",
      folderId: -1,
      isOpen: !1,
      location: _v3.AnalyticsLocations.SIDE_NAV,
      parentFolderUri: null,
      ownerId: -1,
      isPrivateToUser: !1,
      hasContentSpaceEnabled: !1,
      onDelete: void 0
    },
    _v21 = _v2.default.createContext({
      state: _v20,
      openDeleteFolderModal: () => Promise.reject(Error("not implemented yet"))
    });
  _v0.s(["DeleteFolderModalContext", 0, _v21, "default", 0, function ({
    children: _v0
  }) {
    let [_v1, _v2] = (0, _v2.useState)(_v20),
      _v3 = (_v0, _v1, _v2, _v3, _v4, _v5, _v6, _v7) => {
        _v2({
          folderName: _v0,
          folderId: _v1,
          isOpen: !0,
          location: _v2,
          parentFolderUri: _v3,
          ownerId: _v4,
          isPrivateToUser: _v5,
          hasContentSpaceEnabled: _v6,
          onDelete: _v7
        });
      },
      _v4 = _v2.default.useMemo(() => ({
        state: _v1,
        openDeleteFolderModal: _v3
      }), [_v1]);
    return (0, _v1.jsxs)(_v21.Provider, {
      value: _v4,
      children: [_v0, _v1.isOpen && (0, _v1.jsx)(_v19, {
        folderName: _v1.folderName,
        folderId: _v1.folderId,
        isOpen: _v1.isOpen,
        location: _v1.location,
        parentFolderUri: _v1.parentFolderUri,
        ownerId: _v1.ownerId,
        closeModal: () => {
          _v2(_v20);
        },
        isPrivateToUser: _v1.isPrivateToUser,
        hasContentSpaceEnabled: _v1.hasContentSpaceEnabled,
        onDelete: _v1.onDelete
      })]
    });
  }], 0);
}