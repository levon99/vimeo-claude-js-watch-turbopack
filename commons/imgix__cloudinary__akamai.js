{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  });
  var _v3 = {
    VALID_LOADERS: function () {
      return _v5;
    },
    imageConfigDefault: function () {
      return _v6;
    }
  };
  for (var _v4 in _v3) Object.defineProperty(_v2, _v4, {
    enumerable: !0,
    get: _v3[_v4]
  });
  let _v5 = ["default", "imgix", "cloudinary", "akamai", "custom"],
    _v6 = {
      deviceSizes: [640, 750, 828, 0, 0, 0, 0, 0],
      imageSizes: [32, 48, 64, 96, 128, 256, 384],
      path: "/_next/image",
      loader: "default",
      loaderFile: "",
      domains: [],
      disableStaticImages: !1,
      minimumCacheTTL: 0,
      formats: ["image/webp"],
      maximumDiskCacheSize: void 0,
      maximumRedirects: 3,
      maximumResponseBody: 0,
      dangerouslyAllowLocalIP: !1,
      dangerouslyAllowSVG: !1,
      contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
      contentDispositionType: "attachment",
      localPatterns: void 0,
      remotePatterns: [],
      qualities: [75],
      unoptimized: !1,
      customCacheHandler: !1
    };
}