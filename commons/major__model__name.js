{
  !function (_v0) {
    "use strict";

    var _v1 = "function",
      _v2 = "undefined",
      _v3 = "object",
      _v4 = "string",
      _v5 = "major",
      _v6 = "model",
      _v7 = "name",
      _v8 = "type",
      _v9 = "vendor",
      _v10 = "version",
      _v11 = "architecture",
      _v12 = "console",
      _v13 = "mobile",
      _v14 = "tablet",
      _v15 = "smarttv",
      _v16 = "wearable",
      _v17 = "embedded",
      _v18 = "Amazon",
      _v19 = "Apple",
      _v20 = "ASUS",
      _v21 = "BlackBerry",
      _v22 = "Browser",
      _v23 = "Chrome",
      _v24 = "Firefox",
      _v25 = "Google",
      _v26 = "Honor",
      _v27 = "Huawei",
      _v28 = "Microsoft",
      _v29 = "Motorola",
      _v30 = "Nvidia",
      _v31 = "OnePlus",
      _v32 = "Opera",
      _v33 = "OPPO",
      _v34 = "Samsung",
      _v35 = "Sharp",
      _v36 = "Sony",
      _v37 = "Xiaomi",
      _v38 = "Zebra",
      _v39 = "Facebook",
      _v40 = "Chromium OS",
      _v41 = "Mac OS",
      _v42 = " Browser",
      _v43 = function (_v0, _v1) {
        var _v2 = {};
        for (var _v3 in _v0) _v1[_v3] && _v1[_v3].length % 2 == 0 ? _v2[_v3] = _v1[_v3].concat(_v0[_v3]) : _v2[_v3] = _v0[_v3];
        return _v2;
      },
      _v44 = function (_v0) {
        for (var _v1 = {}, _v2 = 0; _v2 < _v0.length; _v2++) _v1[_v0[_v2].toUpperCase()] = _v0[_v2];
        return _v1;
      },
      _v45 = function (_v0, _v1) {
        return typeof _v0 === _v4 && -1 !== _v46(_v1).indexOf(_v46(_v0));
      },
      _v46 = function (_v0) {
        return _v0.toLowerCase();
      },
      _v47 = function (_v0, _v1) {
        if (typeof _v0 === _v4) return _v0 = _v0.replace(/^\s\s*/, ""), typeof _v1 === _v2 ? _v0 : _v0.substring(0, 500);
      },
      _v48 = function (_v0, _v1) {
        for (var _v2, _v3, _v4, _v5, _v6, _v7, _v8 = 0; _v8 < _v1.length && !_v6;) {
          var _v9 = _v1[_v8],
            _v10 = _v1[_v8 + 1];
          for (_v2 = _v3 = 0; _v2 < _v9.length && !_v6 && _v9[_v2];) if (_v6 = _v9[_v2++].exec(_v0)) for (_v4 = 0; _v4 < _v10.length; _v4++) _v7 = _v6[++_v3], typeof (_v5 = _v10[_v4]) === _v3 && _v5.length > 0 ? 2 === _v5.length ? typeof _v5[1] == _v1 ? this[_v5[0]] = _v5[1].call(this, _v7) : this[_v5[0]] = _v5[1] : 3 === _v5.length ? typeof _v5[1] !== _v1 || _v5[1].exec && _v5[1].test ? this[_v5[0]] = _v7 ? _v7.replace(_v5[1], _v5[2]) : void 0 : this[_v5[0]] = _v7 ? _v5[1].call(this, _v7, _v5[2]) : void 0 : 4 === _v5.length && (this[_v5[0]] = _v7 ? _v5[3].call(this, _v7.replace(_v5[1], _v5[2])) : void 0) : this[_v5] = _v7 || void 0;
          _v8 += 2;
        }
      },
      _v49 = function (_v0, _v1) {
        for (var _v2 in _v1) if (typeof _v1[_v2] === _v3 && _v1[_v2].length > 0) {
          for (var _v3 = 0; _v3 < _v1[_v2].length; _v3++) if (_v45(_v1[_v2][_v3], _v0)) return "?" === _v2 ? void 0 : _v2;
        } else if (_v45(_v1[_v2], _v0)) return "?" === _v2 ? void 0 : _v2;
        return _v1.hasOwnProperty("*") ? _v1["*"] : _v0;
      },
      _v50 = {
        ME: "4.90",
        "NT 3.11": "NT3.51",
        "NT 4.0": "NT4.0",
        0: "NT 5.0",
        XP: ["NT 5.1", "NT 5.2"],
        Vista: "NT 6.0",
        7: "NT 6.1",
        8: "NT 6.2",
        "8.1": "NT 6.3",
        10: ["NT 6.4", "NT 10.0"],
        RT: "ARM"
      },
      _v51 = {
        browser: [[/\b(?:crmo|crios)\/([\w\.]+)/i], [_v10, [_v7, "Chrome"]], [/edg(?:e|ios|a)?\/([\w\.]+)/i], [_v10, [_v7, "Edge"]], [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i], [_v7, _v10], [/opios[\/ ]+([\w\.]+)/i], [_v10, [_v7, _v32 + " Mini"]], [/\bop(?:rg)?x\/([\w\.]+)/i], [_v10, [_v7, _v32 + " GX"]], [/\bopr\/([\w\.]+)/i], [_v10, [_v7, _v32]], [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i], [_v10, [_v7, "Baidu"]], [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i], [_v10, [_v7, "Maxthon"]], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i, /(heytap|ovi|115)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i], [_v7, _v10], [/quark(?:pc)?\/([-\w\.]+)/i], [_v10, [_v7, "Quark"]], [/\bddg\/([\w\.]+)/i], [_v10, [_v7, "DuckDuckGo"]], [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i], [_v10, [_v7, "UC" + _v22]], [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i], [_v10, [_v7, "WeChat"]], [/konqueror\/([\w\.]+)/i], [_v10, [_v7, "Konqueror"]], [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i], [_v10, [_v7, "IE"]], [/ya(?:search)?browser\/([\w\.]+)/i], [_v10, [_v7, "Yandex"]], [/slbrowser\/([\w\.]+)/i], [_v10, [_v7, "Smart Lenovo " + _v22]], [/(avast|avg)\/([\w\.]+)/i], [[_v7, /(.+)/, "$1 Secure " + _v22], _v10], [/\bfocus\/([\w\.]+)/i], [_v10, [_v7, _v24 + " Focus"]], [/\bopt\/([\w\.]+)/i], [_v10, [_v7, _v32 + " Touch"]], [/coc_coc\w+\/([\w\.]+)/i], [_v10, [_v7, "Coc Coc"]], [/dolfin\/([\w\.]+)/i], [_v10, [_v7, "Dolphin"]], [/coast\/([\w\.]+)/i], [_v10, [_v7, _v32 + " Coast"]], [/miuibrowser\/([\w\.]+)/i], [_v10, [_v7, "MIUI" + _v42]], [/fxios\/([\w\.-]+)/i], [_v10, [_v7, _v24]], [/\bqihoobrowser\/?([\w\.]*)/i], [_v10, [_v7, "360"]], [/\b(qq)\/([\w\.]+)/i], [[_v7, /(.+)/, "$1Browser"], _v10], [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i], [[_v7, /(.+)/, "$1" + _v42], _v10], [/samsungbrowser\/([\w\.]+)/i], [_v10, [_v7, _v34 + " Internet"]], [/metasr[\/ ]?([\d\.]+)/i], [_v10, [_v7, "Sogou Explorer"]], [/(sogou)mo\w+\/([\d\.]+)/i], [[_v7, "Sogou Mobile"], _v10], [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i], [_v7, _v10], [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i], [_v7], [/ome\/([\w\.]+) \w* ?(iron) saf/i, /ome\/([\w\.]+).+qihu (360)[es]e/i], [_v10, _v7], [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i], [[_v7, _v39], _v10], [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /(daum)apps[\/ ]([\w\.]+)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i], [_v7, _v10], [/\bgsa\/([\w\.]+) .*safari\//i], [_v10, [_v7, "GSA"]], [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i], [_v10, [_v7, "TikTok"]], [/headlesschrome(?:\/([\w\.]+)| )/i], [_v10, [_v7, _v23 + " Headless"]], [/ wv\).+(chrome)\/([\w\.]+)/i], [[_v7, _v23 + " WebView"], _v10], [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i], [_v10, [_v7, "Android " + _v22]], [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i], [_v7, _v10], [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i], [_v10, [_v7, "Mobile Safari"]], [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i], [_v10, _v7], [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i], [_v7, [_v10, _v49, {
          "1.0": "/8",
          "1.2": "/1",
          "1.3": "/3",
          "2.0": "/412",
          "2.0.2": "/416",
          "2.0.3": "/417",
          "2.0.4": "/419",
          "?": "/"
        }]], [/(webkit|khtml)\/([\w\.]+)/i], [_v7, _v10], [/(navigator|netscape\d?)\/([-\w\.]+)/i], [[_v7, "Netscape"], _v10], [/(wolvic|librewolf)\/([\w\.]+)/i], [_v7, _v10], [/mobile vr; rv:([\w\.]+)\).+firefox/i], [_v10, [_v7, _v24 + " Reality"]], [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /\b(links) \(([\w\.]+)/i], [_v7, [_v10, /_/g, "."]], [/(cobalt)\/([\w\.]+)/i], [_v7, [_v10, /master.|lts./, ""]]],
        cpu: [[/\b((amd|x|x86[-_]?|wow|win)64)\b/i], [[_v11, "amd64"]], [/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i], [[_v11, "ia32"]], [/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i], [[_v11, "arm64"]], [/\b(arm(v[67])?ht?n?[fl]p?)\b/i], [[_v11, "armhf"]], [/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i], [[_v11, "arm"]], [/((ppc|powerpc)(64)?)( mac|;|\))/i], [[_v11, /ower/, "", _v46]], [/ sun4\w[;\)]/i], [[_v11, "sparc"]], [/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i], [[_v11, _v46]]],
        device: [[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i], [_v6, [_v9, _v34], [_v8, _v14]], [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr])[-\w]+)/i, /sec-(sgh\w+)/i], [_v6, [_v9, _v34], [_v8, _v13]], [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i], [_v6, [_v9, _v19], [_v8, _v13]], [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i], [_v6, [_v9, _v19], [_v8, _v14]], [/(macintosh);/i], [_v6, [_v9, _v19]], [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i], [_v6, [_v9, _v35], [_v8, _v13]], [/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i], [_v6, [_v9, _v26], [_v8, _v14]], [/honor([-\w ]+)[;\)]/i], [_v6, [_v9, _v26], [_v8, _v13]], [/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i], [_v6, [_v9, _v27], [_v8, _v14]], [/(?:huawei)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i], [_v6, [_v9, _v27], [_v8, _v13]], [/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i, /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i], [[_v6, /_/g, " "], [_v9, _v37], [_v8, _v14]], [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i, / ([\w ]+) miui\/v?\d/i], [[_v6, /_/g, " "], [_v9, _v37], [_v8, _v13]], [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i], [_v6, [_v9, _v33], [_v8, _v13]], [/\b(opd2(\d{3}a?))(?: bui|\))/i], [_v6, [_v9, _v49, {
          OnePlus: ["304", "403", "203"],
          "*": _v33
        }], [_v8, _v14]], [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i], [_v6, [_v9, "Vivo"], [_v8, _v13]], [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i], [_v6, [_v9, "Realme"], [_v8, _v13]], [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i], [_v6, [_v9, _v29], [_v8, _v13]], [/\b(mz60\d|xoom[2 ]{0,2}) build\//i], [_v6, [_v9, _v29], [_v8, _v14]], [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i], [_v6, [_v9, "LG"], [_v8, _v14]], [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i, /\blg-?([\d\w]+) bui/i], [_v6, [_v9, "LG"], [_v8, _v13]], [/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i, /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i], [_v6, [_v9, "Lenovo"], [_v8, _v14]], [/(nokia) (t[12][01])/i], [_v9, _v6, [_v8, _v14]], [/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i, /nokia[-_ ]?(([-\w\. ]*))/i], [[_v6, /_/g, " "], [_v8, _v13], [_v9, "Nokia"]], [/(pixel (c|tablet))\b/i], [_v6, [_v9, _v25], [_v8, _v14]], [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i], [_v6, [_v9, _v25], [_v8, _v13]], [/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [_v6, [_v9, _v36], [_v8, _v13]], [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i], [[_v6, "Xperia Tablet"], [_v9, _v36], [_v8, _v14]], [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i], [_v6, [_v9, _v31], [_v8, _v13]], [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i], [_v6, [_v9, _v18], [_v8, _v14]], [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i], [[_v6, /(.+)/g, "Fire Phone $1"], [_v9, _v18], [_v8, _v13]], [/(playbook);[-\w\),; ]+(rim)/i], [_v6, _v9, [_v8, _v14]], [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i], [_v6, [_v9, _v21], [_v8, _v13]], [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i], [_v6, [_v9, _v20], [_v8, _v14]], [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i], [_v6, [_v9, _v20], [_v8, _v13]], [/(nexus 9)/i], [_v6, [_v9, "HTC"], [_v8, _v14]], [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i], [_v9, [_v6, /_/g, " "], [_v8, _v13]], [/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i], [_v6, [_v9, "TCL"], [_v8, _v14]], [/(itel) ((\w+))/i], [[_v9, _v46], _v6, [_v8, _v49, {
          tablet: ["p10001l", "w7001"],
          "*": "mobile"
        }]], [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i], [_v6, [_v9, "Acer"], [_v8, _v14]], [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i], [_v6, [_v9, "Meizu"], [_v8, _v13]], [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i], [_v6, [_v9, "Ulefone"], [_v8, _v13]], [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i], [_v6, [_v9, "Energizer"], [_v8, _v13]], [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i], [_v6, [_v9, "Cat"], [_v8, _v13]], [/((?:new )?andromax[\w- ]+)(?: bui|\))/i], [_v6, [_v9, "Smartfren"], [_v8, _v13]], [/droid.+; (a(?:015|06[35]|142p?))/i], [_v6, [_v9, "Nothing"], [_v8, _v13]], [/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i, /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i], [_v6, [_v9, "Archos"], [_v8, _v14]], [/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i], [_v6, [_v9, "Archos"], [_v8, _v13]], [/(imo) (tab \w+)/i, /(infinix) (x1101b?)/i], [_v9, _v6, [_v8, _v14]], [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i, /; (hmd|imo) ([\w ]+?)(?: bui|\))/i, /(hp) ([\w ]+\w)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i, /(oppo) ?([\w ]+) bui/i], [_v9, _v6, [_v8, _v13]], [/(kobo)\s(ereader|touch)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i], [_v9, _v6, [_v8, _v14]], [/(surface duo)/i], [_v6, [_v9, _v28], [_v8, _v14]], [/droid [\d\.]+; (fp\du?)(?: b|\))/i], [_v6, [_v9, "Fairphone"], [_v8, _v13]], [/(u304aa)/i], [_v6, [_v9, "AT&T"], [_v8, _v13]], [/\bsie-(\w*)/i], [_v6, [_v9, "Siemens"], [_v8, _v13]], [/\b(rct\w+) b/i], [_v6, [_v9, "RCA"], [_v8, _v14]], [/\b(venue[\d ]{2,7}) b/i], [_v6, [_v9, "Dell"], [_v8, _v14]], [/\b(q(?:mv|ta)\w+) b/i], [_v6, [_v9, "Verizon"], [_v8, _v14]], [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i], [_v6, [_v9, "Barnes & Noble"], [_v8, _v14]], [/\b(tm\d{3}\w+) b/i], [_v6, [_v9, "NuVision"], [_v8, _v14]], [/\b(k88) b/i], [_v6, [_v9, "ZTE"], [_v8, _v14]], [/\b(nx\d{3}j) b/i], [_v6, [_v9, "ZTE"], [_v8, _v13]], [/\b(gen\d{3}) b.+49h/i], [_v6, [_v9, "Swiss"], [_v8, _v13]], [/\b(zur\d{3}) b/i], [_v6, [_v9, "Swiss"], [_v8, _v14]], [/\b((zeki)?tb.*\b) b/i], [_v6, [_v9, "Zeki"], [_v8, _v14]], [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i], [[_v9, "Dragon Touch"], _v6, [_v8, _v14]], [/\b(ns-?\w{0,9}) b/i], [_v6, [_v9, "Insignia"], [_v8, _v14]], [/\b((nxa|next)-?\w{0,9}) b/i], [_v6, [_v9, "NextBook"], [_v8, _v14]], [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i], [[_v9, "Voice"], _v6, [_v8, _v13]], [/\b(lvtel\-)?(v1[12]) b/i], [[_v9, "LvTel"], _v6, [_v8, _v13]], [/\b(ph-1) /i], [_v6, [_v9, "Essential"], [_v8, _v13]], [/\b(v(100md|700na|7011|917g).*\b) b/i], [_v6, [_v9, "Envizen"], [_v8, _v14]], [/\b(trio[-\w\. ]+) b/i], [_v6, [_v9, "MachSpeed"], [_v8, _v14]], [/\btu_(1491) b/i], [_v6, [_v9, "Rotor"], [_v8, _v14]], [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i], [_v6, [_v9, _v30], [_v8, _v14]], [/(sprint) (\w+)/i], [_v9, _v6, [_v8, _v13]], [/(kin\.[onetw]{3})/i], [[_v6, /\./g, " "], [_v9, _v28], [_v8, _v13]], [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i], [_v6, [_v9, _v38], [_v8, _v14]], [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i], [_v6, [_v9, _v38], [_v8, _v13]], [/smart-tv.+(samsung)/i], [_v9, [_v8, _v15]], [/hbbtv.+maple;(\d+)/i], [[_v6, /^/, "SmartTV"], [_v9, _v34], [_v8, _v15]], [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i], [[_v9, "LG"], [_v8, _v15]], [/(apple) ?tv/i], [_v9, [_v6, _v19 + " TV"], [_v8, _v15]], [/crkey/i], [[_v6, _v23 + "cast"], [_v9, _v25], [_v8, _v15]], [/droid.+aft(\w+)( bui|\))/i], [_v6, [_v9, _v18], [_v8, _v15]], [/(shield \w+ tv)/i], [_v6, [_v9, _v30], [_v8, _v15]], [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i], [_v6, [_v9, _v35], [_v8, _v15]], [/(bravia[\w ]+)( bui|\))/i], [_v6, [_v9, _v36], [_v8, _v15]], [/(mi(tv|box)-?\w+) bui/i], [_v6, [_v9, _v37], [_v8, _v15]], [/Hbbtv.*(technisat) (.*);/i], [_v9, _v6, [_v8, _v15]], [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i], [[_v9, _v47], [_v6, _v47], [_v8, _v15]], [/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i], [_v6, [_v8, _v15]], [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i], [[_v8, _v15]], [/(ouya)/i, /(nintendo) ([wids3utch]+)/i], [_v9, _v6, [_v8, _v12]], [/droid.+; (shield)( bui|\))/i], [_v6, [_v9, _v30], [_v8, _v12]], [/(playstation \w+)/i], [_v6, [_v9, _v36], [_v8, _v12]], [/\b(xbox(?: one)?(?!; xbox))[\); ]/i], [_v6, [_v9, _v28], [_v8, _v12]], [/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i], [_v6, [_v9, _v34], [_v8, _v16]], [/((pebble))app/i, /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i], [_v9, _v6, [_v8, _v16]], [/(ow(?:19|20)?we?[1-3]{1,3})/i], [_v6, [_v9, _v33], [_v8, _v16]], [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i], [_v6, [_v9, _v19], [_v8, _v16]], [/(opwwe\d{3})/i], [_v6, [_v9, _v31], [_v8, _v16]], [/(moto 360)/i], [_v6, [_v9, _v29], [_v8, _v16]], [/(smartwatch 3)/i], [_v6, [_v9, _v36], [_v8, _v16]], [/(g watch r)/i], [_v6, [_v9, "LG"], [_v8, _v16]], [/droid.+; (wt63?0{2,3})\)/i], [_v6, [_v9, _v38], [_v8, _v16]], [/droid.+; (glass) \d/i], [_v6, [_v9, _v25], [_v8, _v16]], [/(pico) (4|neo3(?: link|pro)?)/i], [_v9, _v6, [_v8, _v16]], [/; (quest( \d| pro)?)/i], [_v6, [_v9, _v39], [_v8, _v16]], [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i], [_v9, [_v8, _v17]], [/(aeobc)\b/i], [_v6, [_v9, _v18], [_v8, _v17]], [/(homepod).+mac os/i], [_v6, [_v9, _v19], [_v8, _v17]], [/windows iot/i], [[_v8, _v17]], [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i], [_v6, [_v8, _v13]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i], [_v6, [_v8, _v14]], [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i], [[_v8, _v14]], [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i], [[_v8, _v13]], [/droid .+?; ([\w\. -]+)( bui|\))/i], [_v6, [_v9, "Generic"]]],
        engine: [[/windows.+ edge\/([\w\.]+)/i], [_v10, [_v7, "EdgeHTML"]], [/(arkweb)\/([\w\.]+)/i], [_v7, _v10], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], [_v10, [_v7, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i], [_v7, _v10], [/ladybird\//i], [[_v7, "LibWeb"]], [/rv\:([\w\.]{1,9})\b.+(gecko)/i], [_v10, _v7]],
        os: [[/microsoft (windows) (vista|xp)/i], [_v7, _v10], [/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i], [_v7, [_v10, _v49, _v50]], [/windows nt 6\.2; (arm)/i, /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i], [[_v10, _v49, _v50], [_v7, "Windows"]], [/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i], [[_v10, /_/g, "."], [_v7, "iOS"]], [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i], [[_v7, _v41], [_v10, /_/g, "."]], [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i], [_v10, _v7], [/(ubuntu) ([\w\.]+) like android/i], [[_v7, /(.+)/, "$1 Touch"], _v10], [/(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i], [_v7, _v10], [/\(bb(10);/i], [_v10, [_v7, _v21]], [/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i], [_v10, [_v7, "Symbian"]], [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i], [_v10, [_v7, _v24 + " OS"]], [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i], [_v10, [_v7, "webOS"]], [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i], [_v10, [_v7, "watchOS"]], [/crkey\/([\d\.]+)/i], [_v10, [_v7, _v23 + "cast"]], [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i], [[_v7, _v40], _v10], [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i], [_v7, _v10], [/(sunos) ?([\w\.\d]*)/i], [[_v7, "Solaris"], _v10], [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i], [_v7, _v10]]
      },
      _v52 = function (_v0, _v1) {
        if (typeof _v0 === _v3 && (_v1 = _v0, _v0 = void 0), !(this instanceof _v52)) return new _v52(_v0, _v1).getResult();
        var _v2 = typeof _v0 !== _v2 && _v0.navigator ? _v0.navigator : void 0,
          _v3 = _v0 || (_v2 && _v2.userAgent ? _v2.userAgent : ""),
          _v4 = _v2 && _v2.userAgentData ? _v2.userAgentData : void 0,
          _v5 = _v1 ? _v43(_v51, _v1) : _v51,
          _v6 = _v2 && _v2.userAgent == _v3;
        return this.getBrowser = function () {
          var _v0,
            _v1 = {};
          return _v1[_v7] = void 0, _v1[_v10] = void 0, _v48.call(_v1, _v3, _v5.browser), _v1[_v5] = typeof (_v0 = _v1[_v10]) === _v4 ? _v0.replace(/[^\d\.]/g, "").split(".")[0] : void 0, _v6 && _v2 && _v2.brave && typeof _v2.brave.isBrave == _v1 && (_v1[_v7] = "Brave"), _v1;
        }, this.getCPU = function () {
          var _v0 = {};
          return _v0[_v11] = void 0, _v48.call(_v0, _v3, _v5.cpu), _v0;
        }, this.getDevice = function () {
          var _v0 = {};
          return _v0[_v9] = void 0, _v0[_v6] = void 0, _v0[_v8] = void 0, _v48.call(_v0, _v3, _v5.device), _v6 && !_v0[_v8] && _v4 && _v4.mobile && (_v0[_v8] = _v13), _v6 && "Macintosh" == _v0[_v6] && _v2 && typeof _v2.standalone !== _v2 && _v2.maxTouchPoints && _v2.maxTouchPoints > 2 && (_v0[_v6] = "iPad", _v0[_v8] = _v14), _v0;
        }, this.getEngine = function () {
          var _v0 = {};
          return _v0[_v7] = void 0, _v0[_v10] = void 0, _v48.call(_v0, _v3, _v5.engine), _v0;
        }, this.getOS = function () {
          var _v0 = {};
          return _v0[_v7] = void 0, _v0[_v10] = void 0, _v48.call(_v0, _v3, _v5.os), _v6 && !_v0[_v7] && _v4 && _v4.platform && "Unknown" != _v4.platform && (_v0[_v7] = _v4.platform.replace(/chrome os/i, _v40).replace(/macos/i, _v41)), _v0;
        }, this.getResult = function () {
          return {
            ua: this.getUA(),
            browser: this.getBrowser(),
            engine: this.getEngine(),
            os: this.getOS(),
            device: this.getDevice(),
            cpu: this.getCPU()
          };
        }, this.getUA = function () {
          return _v3;
        }, this.setUA = function (_v0) {
          return _v3 = typeof _v0 === _v4 && _v0.length > 500 ? _v47(_v0, 500) : _v0, this;
        }, this.setUA(_v3), this;
      };
    _v52.VERSION = "1.0.41", _v52.BROWSER = _v44([_v7, _v10, _v5]), _v52.CPU = _v44([_v11]), _v52.DEVICE = _v44([_v6, _v9, _v8, _v12, _v13, _v15, _v14, _v16, _v17]), _v52.ENGINE = _v52.OS = _v44([_v7, _v10]), _v1.exports && (_v2 = _v1.exports = _v52), _v2.UAParser = _v52;
    var _v53 = typeof _v0 !== _v2 && (_v0.jQuery || _v0.Zepto);
    if (_v53 && !_v53.ua) {
      var _v54 = new _v52();
      _v53.ua = _v54.getResult(), _v53.ua.get = function () {
        return _v54.getUA();
      }, _v53.ua.set = function (_v0) {
        _v54.setUA(_v0);
        var _v1 = _v54.getResult();
        for (var _v2 in _v1) _v53.ua[_v2] = _v1[_v2];
      };
    }
  }("object" == typeof window ? window : _v0.e);
}