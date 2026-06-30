{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  _v0.s(["EventCard", 0, ({
    title: _v0,
    subtitle: _v1,
    thumbnailSrc: _v2,
    href: _v3,
    actionsMenu: _v4,
    editableTitle: _v5,
    isEditingContentTitle: _v6,
    isSelected: _v7,
    onClick: _v8,
    onMouseEnter: _v9,
    onToggleSelected: _v10,
    selectionType: _v11 = "checkbox",
    tagText: _v12,
    isLive: _v13 = !1,
    titleStyles: _v14,
    defaultIconProps: _v15,
    tabIndex: _v16
  }) => (0, _v1.jsxs)(_v4.ContentCard, {
    isSelected: _v7,
    onClick: _v8,
    onMouseEnter: _v9,
    onToggleSelected: _v10,
    href: _v3,
    tabIndex: _v16,
    shouldUseNextLink: !1,
    isEditingContentTitle: _v6,
    children: [(0, _v1.jsxs)(_v4.ContentCard.Body, {
      children: [_v2 ? (0, _v1.jsx)(_v4.ContentCard.Thumbnail, {
        alt: "",
        src: _v2
      }) : (0, _v1.jsx)(_v4.ContentCard.DefaultThumbnail, {
        children: (0, _v1.jsx)(_v3.CameraOnFilled, {
          color: "text-tertiary",
          boxSize: "xl",
          ..._v15
        })
      }), (0, _v1.jsx)(_v2.Flex, {
        position: "absolute",
        top: "8px",
        left: "8px",
        onClick: _v0 => {
          _v0.stopPropagation();
        },
        children: "checkbox" === _v11 ? (0, _v1.jsx)(_v4.ContentCard.SelectCheckbox, {
          size: "md"
        }) : (0, _v1.jsx)(_v4.ContentCard.SelectRadio, {
          size: "lg"
        })
      }), _v12 && (0, _v1.jsx)(_v4.ContentCard.Badge, {
        variant: _v13 ? "mature" : "default",
        children: _v12
      })]
    }), (0, _v1.jsx)(_v4.ContentCard.Footer, {
      actions: _v4,
      title: _v0,
      subtitle: _v1,
      titleStyles: _v14,
      editableTitle: _v5,
      isEditingContentTitle: _v6
    })]
  })]);
}