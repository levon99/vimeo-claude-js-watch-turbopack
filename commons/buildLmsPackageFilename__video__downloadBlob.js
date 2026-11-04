{
  "use strict";

  _v0.s(["buildLmsPackageFilename", 0, (_v0, _v1, _v2) => {
    let _v3;
    return `${"" === (_v3 = (_v0 ?? "").toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")) ? "video" : _v3.slice(0, 80).replace(/-+$/, "")}_${_v1}_${_v2}.zip`;
  }, "downloadBlob", 0, (_v0, _v1) => {
    let _v2 = window.URL.createObjectURL(_v0),
      _v3 = document.createElement("a");
    document.body.appendChild(_v3), _v3.setAttribute("href", _v2), _v3.setAttribute("download", _v1), _v3.click(), _v3.remove(), window.URL.revokeObjectURL(_v2);
  }, "getIdFromUri", 0, _v0 => {
    let _v1 = _v0 && _v0.match(/\d+$/);
    return _v1 ? parseInt(_v1[0], 10) : -1;
  }, "isNumberValid", 0, (_v0, _v1, _v2) => !isNaN(_v0) && !(_v0 < _v1) && !(_v0 > _v2)]);
}