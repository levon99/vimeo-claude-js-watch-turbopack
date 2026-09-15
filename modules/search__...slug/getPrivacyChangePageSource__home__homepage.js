{
  "use strict";

  _v0.s(["getPrivacyChangePageSource", 0, _v0 => {
    switch (_v0) {
      case "/home":
      case "/wayfinder-home":
        return "homepage";
      case "/library":
      case "/library-search":
      case "/search/[[...slug]]":
      case "/user/[userId]/folder/[folderId]":
      case "/reviews/[reviewId]/users/[userId]/folders/[folderId]":
        return "library";
      default:
        return;
    }
  }]);
}