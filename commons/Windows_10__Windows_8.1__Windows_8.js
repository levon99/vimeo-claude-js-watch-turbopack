{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.parseUserAgent = void 0;
  var _v3 = _v0.r(0);
  _v2.parseUserAgent = function () {
    var _v0 = "-",
      _v1 = [{
        s: "Windows 10",
        r: /(Windows 10.0|Windows NT 10.0)/
      }, {
        s: "Windows 8.1",
        r: /(Windows 8.1|Windows NT 6.3)/
      }, {
        s: "Windows 8",
        r: /(Windows 8|Windows NT 6.2)/
      }, {
        s: "Windows 7",
        r: /(Windows 7|Windows NT 6.1)/
      }, {
        s: "Windows Vista",
        r: /Windows NT 6.0/
      }, {
        s: "Windows Server 2003",
        r: /Windows NT 5.2/
      }, {
        s: "Windows XP",
        r: /(Windows NT 5.1|Windows XP)/
      }, {
        s: "Windows 2000",
        r: /(Windows NT 5.0|Windows 2000)/
      }, {
        s: "Windows ME",
        r: /(Win 9x 4.90|Windows ME)/
      }, {
        s: "Windows 98",
        r: /(Windows 98|Win98)/
      }, {
        s: "Windows 95",
        r: /(Windows 95|Win95|Windows_95)/
      }, {
        s: "Windows NT 4.0",
        r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/
      }, {
        s: "Windows CE",
        r: /Windows CE/
      }, {
        s: "Windows 3.11",
        r: /Win16/
      }, {
        s: "Android",
        r: /Android/
      }, {
        s: "Open BSD",
        r: /OpenBSD/
      }, {
        s: "Sun OS",
        r: /SunOS/
      }, {
        s: "Chrome OS",
        r: /CrOS/
      }, {
        s: "Linux",
        r: /(Linux|X11(?!.*CrOS))/
      }, {
        s: "iOS",
        r: /(iPhone|iPad|iPod)/
      }, {
        s: "Mac OS X",
        r: /Mac OS X/
      }, {
        s: "Mac OS",
        r: /(Mac OS|MacPPC|MacIntel|Mac_PowerPC|Macintosh)/
      }, {
        s: "QNX",
        r: /QNX/
      }, {
        s: "UNIX",
        r: /UNIX/
      }, {
        s: "BeOS",
        r: /BeOS/
      }, {
        s: "OS/2",
        r: /OS\/2/
      }, {
        s: "Search Bot",
        r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/
      }];
    for (var _v2 in _v1) {
      var _v3 = _v1[_v2];
      if (_v3.r.test(navigator.userAgent)) {
        _v0 = _v3.s;
        break;
      }
    }
    var _v4 = "-";
    if (/Windows/.test(_v0)) {
      var _v5 = /Windows (.*)/.exec(_v0);
      _v4 = (null == _v5 ? void 0 : _v5.length) ? _v5[1] : "", _v0 = "Windows";
    }
    switch (_v0) {
      case "Mac OS":
      case "Mac OS X":
      case "Android":
        var _v6 = /(?:Android|Mac OS|Mac OS X|MacPPC|MacIntel|Mac_PowerPC|Macintosh) ([\.\_\d]+)/.exec(navigator.userAgent);
        _v4 = (null == _v6 ? void 0 : _v6.length) ? _v6[1] : "";
        break;
      case "iOS":
        var _v7 = /OS (\d+)_(\d+)_?(\d+)?/.exec(navigator.appVersion);
        _v4 = (null == _v7 ? void 0 : _v7.length) ? _v7[1] + "." + _v7[2] + "." + (_v7[3] || 0) : "";
    }
    var _v8 = _v3.__read(_v4.split("_"), 3),
      _v9 = _v8[0],
      _v10 = _v8[1],
      _v11 = _v8[2];
    return {
      screen: {
        dpi: screen.pixelDepth,
        height: screen.height,
        width: screen.width,
        size: screen.width + " x " + screen.height
      },
      os: {
        version: {
          full: _v4,
          major: void 0 === _v9 ? "" : _v9,
          minor: void 0 === _v10 ? "" : _v10,
          patch: void 0 === _v11 ? "" : _v11
        },
        family: _v0
      }
    };
  };
}