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
    _v10 = _v0.i(0);
  _v0.s(["EnhancedFolderCard", 0, ({
    backgroundColor: _v0,
    href: _v1,
    title: _v2,
    subtitle: _v3,
    ownerId: _v4,
    folderId: _v5,
    actionsMenu: _v6,
    hoverActions: _v7
  }) => {
    let {
        data: _v8,
        isLoading: _v9
      } = (0, _v8.useGetUserProjectItems)({
        query: {
          perPage: 4,
          sizes: "640x360",
          noPadding: !0
        },
        select: ["type", "folder.settings.color", "video.pictures.sizes.link", "folder.uri", "video.uri"],
        where: {
          userId: _v4,
          projectId: _v5
        },
        headers: {
          Accept: "application/vnd.vimeo.*+json;version=3.4.13"
        }
      }, {
        revalidateOnFocus: !1
      }),
      _v10 = [...Array(4 - (_v8?.data.length || 0))].fill((0, _v1.jsx)(_v6.Box, {
        borderRadius: "md",
        aspectRatio: "16 / 9",
        bgColor: "fill-component"
      }));
    return (0, _v1.jsxs)(_v10.ContentCard, {
      href: _v1,
      width: "286px",
      children: [(0, _v1.jsxs)(_v10.ContentCard.Body, {
        children: [(0, _v1.jsx)(_v10.ContentCard.DefaultThumbnail, {
          background: _v0,
          _groupHover: {
            opacity: 0
          },
          _groupFocusWithin: {
            opacity: 0
          },
          border: "none",
          children: (0, _v1.jsx)(_v7.FolderFilled, {
            color: _v0 ? (0, _v4.readableColor)(_v0) : "text-tertiary",
            boxSize: "lg"
          })
        }), !_v9 && (0, _v1.jsxs)(_v3.Grid, {
          gap: "0.5rem",
          templateColumns: "1fr 1fr",
          opacity: 0,
          _groupHover: {
            opacity: 1
          },
          _groupFocusWithin: {
            opacity: 1
          },
          children: [_v8?.data.map(({
            type: _v0,
            video: _v1,
            folder: _v2
          }) => "video" === _v0 ? (0, _v1.jsx)(_v10.ContentCard.Thumbnail, {
            src: _v1?.pictures?.sizes[0]?.link,
            alt: ""
          }, _v1?.uri) : (0, _v1.jsx)(_v2.Center, {
            backgroundColor: _v2?.settings?.color || "fill-component",
            borderRadius: "md",
            aspectRatio: "16 / 9",
            children: (0, _v1.jsx)(_v7.FolderFilled, {
              boxSize: (0, _v5.rem)(28),
              color: _v2?.settings?.color ? (0, _v4.readableColor)(_v2?.settings?.color) : "text-secondary"
            })
          }, _v2?.uri)), 4 > (_v8?.data.length || 0) ? _v10 : null]
        }), _v9 && (0, _v1.jsx)(_v3.Grid, {
          gap: "0.5rem",
          templateColumns: "1fr 1fr",
          opacity: 0,
          _groupHover: {
            opacity: 1
          },
          _groupFocusWithin: {
            opacity: 1
          },
          children: [void 0, void 0, void 0, void 0].fill((0, _v1.jsx)(_v9.BokehSkeleton, {
            height: "72px",
            borderRadius: "md"
          }))
        }), _v7]
      }), (0, _v1.jsx)(_v10.ContentCard.Footer, {
        actions: _v6,
        title: _v2,
        subtitle: _v3
      })]
    });
  }]);
}