{
  "use strict";

  _v0.s(["isVideoMetadataLocked", 0, function (_v0) {
    let _v1 = _v0?.customMetadata;
    return !!_v1 && 0 !== _v1.length && _v1.some(_v0 => {
      var _v1;
      let _v2;
      return (!0 === (_v2 = _v0.mandatory) || 1 === _v2) && (null == (_v1 = _v0.fieldValue) || (Array.isArray(_v1) ? 0 === _v1.length : "bool" === _v0.type ? "" === _v1 : "string" == typeof _v1 && "" === _v1.trim()));
    });
  }]);
}