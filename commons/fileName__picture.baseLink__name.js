{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  let _v6 = ["fileName", "picture.baseLink", "name", "uri"],
    _v7 = ["png", "jpeg", "jpg", "webp"];
  _v0.s(["ALLOWED_FILE_TYPES", 0, _v7, "useBrandLogoUpload", 0, function (_v0) {
    let _v1 = (0, _v1.useContext)(_v4.ViewerContext),
      _v2 = _v0 || _v1?.teamUser?.ownerId || _v1?.user?.id,
      _v3 = (0, _v1.useMemo)(() => ({
        baseUrl: `//${_v1?.apiUrl}`,
        headers: {
          Authorization: `jwt ${_v1?.jwt}`,
          "Content-Type": "application/json"
        }
      }), [_v1?.apiUrl, _v1?.jwt]);
    return {
      uploadLogoToBrandKit: async ({
        file: _v0,
        brandKitId: _v1,
        isDefault: _v2 = !0
      }) => {
        if (_v0 && _v2) {
          let _v0;
          if (_v0 = _v0.type.split("/")[1], !_v7.includes(_v0)) throw Object.assign(Error("Invalid file type. Only PNG and JPEG are allowed."), {
            code: 415
          });
          if (_v0.size > 0) throw Object.assign(Error("File too large. Maximum size is 10 MB."), {
            code: 413
          });
          try {
            let {
                uploadLink: _v0
              } = await (0, _v3.postUserBrandkitsUploadAsset)({
                ..._v3,
                variables: {
                  assetType: "logo",
                  fileName: _v0.name,
                  fileSize: _v0.size?.toString()
                },
                select: ["uploadLink"],
                where: {
                  userId: _v2
                }
              }),
              _v1 = await fetch(_v0, {
                method: "PUT",
                body: _v0,
                headers: {
                  "Content-Type": _v0.type
                }
              }),
              _v2 = await _v1.json().catch(() => null);
            if (!_v2 || !_v2.Path) throw Error("Failed to upload the file.");
            let _v3 = _v2?.Path.split("/").pop();
            return await (0, _v2.postUserBrandkitLogos)({
              ..._v3,
              variables: {
                name: (0, _v5.generateFileName)(_v0.name, _v0.type.split("/")[1]),
                fileName: _v0.name,
                isDefault: _v2,
                storageAssetId: _v3
              },
              select: _v6,
              where: {
                userId: _v2,
                kitUuid: _v1
              }
            });
          } catch (_v0) {
            throw Error("Failed to upload logo to brand kit");
          }
        }
      }
    };
  }]);
}