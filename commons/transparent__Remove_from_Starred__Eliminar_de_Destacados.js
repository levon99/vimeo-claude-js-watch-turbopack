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
  let _v9 = ({
    markItemAsStarred: _v0,
    removeItemAsStarred: _v1,
    isFavorite: _v2,
    buttonVariant: _v3 = "transparent",
    buttonSize: _v4 = "sm"
  }) => {
    let _v5 = _v2 ? (0, _v8.translate)({
      singular: "Remove from Starred",
      dictionary: {
        es: {
          singular: "Eliminar de Destacados"
        },
        "de-DE": {
          singular: "Aus Favoriten entfernen"
        },
        "fr-FR": {
          singular: "Supprimer des favoris"
        },
        "ja-JP": {
          singular: "スター付きから削除"
        },
        "ko-KR": {
          singular: '"별점 평가 완료"에서 삭제'
        },
        "pt-BR": {
          singular: "Remover dos favoritos"
        },
        "zh-CN": {
          singular: "从星标中移除"
        }
      }
    }) : (0, _v8.translate)({
      singular: "Add to Starred",
      dictionary: {
        es: {
          singular: "Agregar a Destacados"
        },
        "de-DE": {
          singular: "Zu Favoriten hinzufügen"
        },
        "fr-FR": {
          singular: "Ajouter aux favoris"
        },
        "ja-JP": {
          singular: "スター付きに追加"
        },
        "ko-KR": {
          singular: '"별점 평가 완료"에 추가'
        },
        "pt-BR": {
          singular: "Adicionar aos favoritos"
        },
        "zh-CN": {
          singular: "添加到带星标内容"
        }
      }
    });
    return (0, _v1.jsx)(_v4.Tooltip, {
      label: _v5,
      variant: "simple",
      placement: "top",
      children: (0, _v1.jsx)(_v5.IconButton, {
        "aria-label": _v5,
        icon: _v2 ? (0, _v1.jsx)(_v7.StarFilled, {
          boxSize: "2xs"
        }) : (0, _v1.jsx)(_v6.Star, {
          boxSize: "2xs"
        }),
        size: _v4,
        variant: _v3,
        onClick: _v0 => {
          _v0.currentTarget.blur(), _v2 ? _v1(_v0) : _v0(_v0);
        },
        opacity: _v2 ? "1" : "0",
        _groupHover: {
          opacity: 1
        },
        transition: "opacity 200ms ease-in-out"
      })
    });
  };
  var _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0);
  _v0.s(["StarredIconContainer", 0, ({
    type: _v0,
    uri: _v1,
    entity: _v2,
    shouldUpdateSideNav: _v3,
    buttonVariant: _v4 = "transparent",
    buttonSize: _v5 = "sm",
    onBeforeAction: _v6
  }) => {
    let {
        markItemAsStarred: _v7,
        removeItemAsStarred: _v8
      } = (0, _v11.useStarredItem)(),
      _v9 = (0, _v2.useViewer)(),
      {
        starredItemsUri: _v10
      } = (0, _v12.useStarredItemUriContext)(),
      _v11 = (_v0, _v1, _v2) => {
        if (!_v2) return;
        let _v3 = _v0 === _v10.ItemType.Video ? _v10.ItemType.Video : _v10.ItemType.Folder,
          _v4 = "video" === _v0 ? (0, _v3.getVideoBpProps)(_v2) : (0, _v3.getFolderBpProps)(_v2);
        "mark" == _v1 ? (_v6?.("mark"), _v7(_v2, _v0, _v2, _v3), (0, _v3.trackAddRemoveStarredEntity)("vimeo.add_content_to_starred", _v3, _v4, _v9, "add"), _v0.stopPropagation(), _v0.preventDefault()) : "remove" == _v1 && (_v6?.("remove"), _v10?.[_v0]?.has(_v2) && (_v8(_v2, _v10?.[_v0]?.get(_v2), _v0, _v3), (0, _v3.trackAddRemoveStarredEntity)("vimeo.remove_from_starred", _v3, _v4, _v9, "remove")), _v0.preventDefault(), _v0.stopPropagation());
      };
    return (0, _v1.jsx)(_v9, {
      markItemAsStarred: _v0 => _v11(_v0, "mark", _v1),
      removeItemAsStarred: _v0 => _v11(_v0, "remove", _v1),
      isFavorite: !!_v1 && _v10?.[_v0]?.has(_v1),
      buttonVariant: _v4,
      buttonSize: _v5
    });
  }], 0);
}