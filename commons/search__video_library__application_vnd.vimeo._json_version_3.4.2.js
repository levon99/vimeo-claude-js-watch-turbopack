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
    _v15 = _v0.i(0);
  let _v16 = ({
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
      let _v10 = (0, _v7.useHasMounted)(),
        {
          revalidateRootItems: _v11
        } = (0, _v11.useRevalidate)(),
        [_v12, {
          error: _v13,
          loading: _v14
        }] = (0, _v5.useDeleteUserProject)(),
        _v15 = (0, _v9.default)(),
        _v16 = (0, _v4.useRouter)(),
        _v17 = (0, _v8.useAnalyticsEvent)(),
        _v18 = (0, _v10.usePageName)(),
        _v19 = _v18 === _v12.PAGE.VLS || _v18 === _v12.PAGE.SEARCH ? "search" : "video_library",
        _v20 = async () => {
          await _v12({
            where: {
              projectId: _v1,
              userId: _v5
            },
            variables: {
              shouldDeleteClips: !0
            },
            headers: {
              Accept: "application/vnd.vimeo.*+json;version=3.4.2"
            }
          }), _v13 || (_v17((0, _v3.deleteFolder)({
            product: _v3.AnalyticsProducts.WORKFLOW,
            path: window.location.pathname,
            location: _v3,
            folder_id: _v1,
            is_subfolder: !!_v4,
            feature: _v19,
            target_object_location_type: _v7 ? "private folder" : "team folder",
            actor_team_role: null,
            is_my_videos: _v7 && _v8
          })), _v15(_v4 ? `.*${_v4}/items.*` : `.*/users/${_v5}/projects.*topLevelOnly=true.*`), "/library" === _v16.pathname && _v11(), _v6(), _v16.query.folderId === `${_v1}` && _v16.push(_v4 ? (0, _v13.getFolderPageUriFromApiUri)(_v4) : _v12.Path.Home), _v9?.());
        };
      return _v10 ? (0, _v1.jsx)(_v14.DeleteModal, {
        bodyContent: (0, _v6.translate)({
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
        }),
        headerContent: (0, _v1.jsx)(_v15.TruncatedDeleteModalHeader, {
          name: _v0
        }),
        isLoading: _v14,
        isOpen: _v2,
        onClose: () => {
          _v6(), _v17((0, _v3.genericClick)({
            copy: "Cancel",
            feature: _v19,
            location: _v3,
            name: "cancel_delete_folder",
            page: _v18.toUpperCase(),
            target: null,
            target_path: null,
            type: "general"
          }));
        },
        onConfirm: _v20
      }) : null;
    },
    _v17 = {
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
    _v18 = _v2.default.createContext({
      state: _v17,
      openDeleteFolderModal: () => Promise.reject("not implemented yet")
    });
  _v0.s(["DeleteFolderModalContext", 0, _v18, "default", 0, function ({
    children: _v0
  }) {
    let [_v1, _v2] = (0, _v2.useState)(_v17),
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
    return (0, _v1.jsxs)(_v18.Provider, {
      value: _v4,
      children: [_v0, _v1.isOpen && (0, _v1.jsx)(_v16, {
        folderName: _v1.folderName,
        folderId: _v1.folderId,
        isOpen: _v1.isOpen,
        location: _v1.location,
        parentFolderUri: _v1.parentFolderUri,
        ownerId: _v1.ownerId,
        closeModal: () => {
          _v2(_v17);
        },
        isPrivateToUser: _v1.isPrivateToUser,
        hasContentSpaceEnabled: _v1.hasContentSpaceEnabled,
        onDelete: _v1.onDelete
      })]
    });
  }], 0);
}