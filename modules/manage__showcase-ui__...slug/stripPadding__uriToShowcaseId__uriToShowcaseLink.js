{
  "use strict";

  let _v1 = _v0 => {
    let _v1,
      _v2 = _v0.match(/albums\/\d+/g);
    return _v2 && (_v1 = _v2[0].split("/").pop()), _v1;
  };
  _v0.s(["stripPadding", 0, function (_v0) {
    let _v1 = new URL(_v0);
    return _v1.searchParams.delete("r"), _v1.toString();
  }, "uriToShowcaseId", 0, _v1, "uriToShowcaseLink", 0, (_v0, _v1) => {
    let _v2 = _v1(_v0);
    return _v2 ? _v1 ? `/manage/showcases/${_v2}` : `/showcase/${_v2}` : "/library/showcases";
  }, "uriToUserId", 0, _v0 => {
    let _v1,
      _v2 = _v0.match(/users\/\d+/g);
    return _v2 && (_v1 = _v2[0].split("/").pop()), _v1;
  }]);
}