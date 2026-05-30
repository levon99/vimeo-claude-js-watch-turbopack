{
  "use strict";

  let _v3 = {};
  _v3.generateIdentifier = function () {
    return Math.random().toString(36).substring(2, 12);
  }, _v3.localCName = _v3.generateIdentifier(), _v3.splitLines = function (_v0) {
    return _v0.trim().split("\n").map(_v0 => _v0.trim());
  }, _v3.splitSections = function (_v0) {
    return _v0.split("\nm=").map((_v0, _v1) => (_v1 > 0 ? "m=" + _v0 : _v0).trim() + "\r\n");
  }, _v3.getDescription = function (_v0) {
    let _v1 = _v3.splitSections(_v0);
    return _v1 && _v1[0];
  }, _v3.getMediaSections = function (_v0) {
    let _v1 = _v3.splitSections(_v0);
    return _v1.shift(), _v1;
  }, _v3.matchPrefix = function (_v0, _v1) {
    return _v3.splitLines(_v0).filter(_v0 => 0 === _v0.indexOf(_v1));
  }, _v3.parseCandidate = function (_v0) {
    let _v1,
      _v2 = {
        foundation: (_v1 = 0 === _v0.indexOf("a=candidate:") ? _v0.substring(12).split(" ") : _v0.substring(10).split(" "))[0],
        component: {
          1: "rtp",
          2: "rtcp"
        }[_v1[1]] || _v1[1],
        protocol: _v1[2].toLowerCase(),
        priority: parseInt(_v1[3], 10),
        ip: _v1[4],
        address: _v1[4],
        port: parseInt(_v1[5], 10),
        type: _v1[7]
      };
    for (let _v0 = 8; _v0 < _v1.length; _v0 += 2) switch (_v1[_v0]) {
      case "raddr":
        _v2.relatedAddress = _v1[_v0 + 1];
        break;
      case "rport":
        _v2.relatedPort = parseInt(_v1[_v0 + 1], 10);
        break;
      case "tcptype":
        _v2.tcpType = _v1[_v0 + 1];
        break;
      case "ufrag":
        _v2.ufrag = _v1[_v0 + 1], _v2.usernameFragment = _v1[_v0 + 1];
        break;
      default:
        void 0 === _v2[_v1[_v0]] && (_v2[_v1[_v0]] = _v1[_v0 + 1]);
    }
    return _v2;
  }, _v3.writeCandidate = function (_v0) {
    let _v1 = [];
    _v1.push(_v0.foundation);
    let _v2 = _v0.component;
    "rtp" === _v2 ? _v1.push(1) : "rtcp" === _v2 ? _v1.push(2) : _v1.push(_v2), _v1.push(_v0.protocol.toUpperCase()), _v1.push(_v0.priority), _v1.push(_v0.address || _v0.ip), _v1.push(_v0.port);
    let _v3 = _v0.type;
    return _v1.push("typ"), _v1.push(_v3), "host" !== _v3 && _v0.relatedAddress && void 0 !== _v0.relatedPort && (_v1.push("raddr"), _v1.push(_v0.relatedAddress), _v1.push("rport"), _v1.push(_v0.relatedPort)), _v0.tcpType && "tcp" === _v0.protocol.toLowerCase() && (_v1.push("tcptype"), _v1.push(_v0.tcpType)), (_v0.usernameFragment || _v0.ufrag) && (_v1.push("ufrag"), _v1.push(_v0.usernameFragment || _v0.ufrag)), "candidate:" + _v1.join(" ");
  }, _v3.parseIceOptions = function (_v0) {
    return _v0.substring(14).split(" ");
  }, _v3.parseRtpMap = function (_v0) {
    let _v1 = _v0.substring(9).split(" "),
      _v2 = {
        payloadType: parseInt(_v1.shift(), 10)
      };
    return _v2.name = (_v1 = _v1[0].split("/"))[0], _v2.clockRate = parseInt(_v1[1], 10), _v2.channels = 3 === _v1.length ? parseInt(_v1[2], 10) : 1, _v2.numChannels = _v2.channels, _v2;
  }, _v3.writeRtpMap = function (_v0) {
    let _v1 = _v0.payloadType;
    void 0 !== _v0.preferredPayloadType && (_v1 = _v0.preferredPayloadType);
    let _v2 = _v0.channels || _v0.numChannels || 1;
    return "a=rtpmap:" + _v1 + " " + _v0.name + "/" + _v0.clockRate + (1 !== _v2 ? "/" + _v2 : "") + "\r\n";
  }, _v3.parseExtmap = function (_v0) {
    let _v1 = _v0.substring(9).split(" ");
    return {
      id: parseInt(_v1[0], 10),
      direction: _v1[0].indexOf("/") > 0 ? _v1[0].split("/")[1] : "sendrecv",
      uri: _v1[1],
      attributes: _v1.slice(2).join(" ")
    };
  }, _v3.writeExtmap = function (_v0) {
    return "a=extmap:" + (_v0.id || _v0.preferredId) + (_v0.direction && "sendrecv" !== _v0.direction ? "/" + _v0.direction : "") + " " + _v0.uri + (_v0.attributes ? " " + _v0.attributes : "") + "\r\n";
  }, _v3.parseFmtp = function (_v0) {
    let _v1,
      _v2 = {},
      _v3 = _v0.substring(_v0.indexOf(" ") + 1).split(";");
    for (let _v0 = 0; _v0 < _v3.length; _v0++) _v2[(_v1 = _v3[_v0].trim().split("="))[0].trim()] = _v1[1];
    return _v2;
  }, _v3.writeFmtp = function (_v0) {
    let _v1 = "",
      _v2 = _v0.payloadType;
    if (void 0 !== _v0.preferredPayloadType && (_v2 = _v0.preferredPayloadType), _v0.parameters && Object.keys(_v0.parameters).length) {
      let _v0 = [];
      Object.keys(_v0.parameters).forEach(_v0 => {
        void 0 !== _v0.parameters[_v0] ? _v0.push(_v0 + "=" + _v0.parameters[_v0]) : _v0.push(_v0);
      }), _v1 += "a=fmtp:" + _v2 + " " + _v0.join(";") + "\r\n";
    }
    return _v1;
  }, _v3.parseRtcpFb = function (_v0) {
    let _v1 = _v0.substring(_v0.indexOf(" ") + 1).split(" ");
    return {
      type: _v1.shift(),
      parameter: _v1.join(" ")
    };
  }, _v3.writeRtcpFb = function (_v0) {
    let _v1 = "",
      _v2 = _v0.payloadType;
    return void 0 !== _v0.preferredPayloadType && (_v2 = _v0.preferredPayloadType), _v0.rtcpFeedback && _v0.rtcpFeedback.length && _v0.rtcpFeedback.forEach(_v0 => {
      _v1 += "a=rtcp-fb:" + _v2 + " " + _v0.type + (_v0.parameter && _v0.parameter.length ? " " + _v0.parameter : "") + "\r\n";
    }), _v1;
  }, _v3.parseSsrcMedia = function (_v0) {
    let _v1 = _v0.indexOf(" "),
      _v2 = {
        ssrc: parseInt(_v0.substring(7, _v1), 10)
      },
      _v3 = _v0.indexOf(":", _v1);
    return _v3 > -1 ? (_v2.attribute = _v0.substring(_v1 + 1, _v3), _v2.value = _v0.substring(_v3 + 1)) : _v2.attribute = _v0.substring(_v1 + 1), _v2;
  }, _v3.parseSsrcGroup = function (_v0) {
    let _v1 = _v0.substring(13).split(" ");
    return {
      semantics: _v1.shift(),
      ssrcs: _v1.map(_v0 => parseInt(_v0, 10))
    };
  }, _v3.getMid = function (_v0) {
    let _v1 = _v3.matchPrefix(_v0, "a=mid:")[0];
    if (_v1) return _v1.substring(6);
  }, _v3.parseFingerprint = function (_v0) {
    let _v1 = _v0.substring(14).split(" ");
    return {
      algorithm: _v1[0].toLowerCase(),
      value: _v1[1].toUpperCase()
    };
  }, _v3.getDtlsParameters = function (_v0, _v1) {
    return {
      role: "auto",
      fingerprints: _v3.matchPrefix(_v0 + _v1, "a=fingerprint:").map(_v3.parseFingerprint)
    };
  }, _v3.writeDtlsParameters = function (_v0, _v1) {
    let _v2 = "a=setup:" + _v1 + "\r\n";
    return _v0.fingerprints.forEach(_v0 => {
      _v2 += "a=fingerprint:" + _v0.algorithm + " " + _v0.value + "\r\n";
    }), _v2;
  }, _v3.parseCryptoLine = function (_v0) {
    let _v1 = _v0.substring(9).split(" ");
    return {
      tag: parseInt(_v1[0], 10),
      cryptoSuite: _v1[1],
      keyParams: _v1[2],
      sessionParams: _v1.slice(3)
    };
  }, _v3.writeCryptoLine = function (_v0) {
    return "a=crypto:" + _v0.tag + " " + _v0.cryptoSuite + " " + ("object" == typeof _v0.keyParams ? _v3.writeCryptoKeyParams(_v0.keyParams) : _v0.keyParams) + (_v0.sessionParams ? " " + _v0.sessionParams.join(" ") : "") + "\r\n";
  }, _v3.parseCryptoKeyParams = function (_v0) {
    if (0 !== _v0.indexOf("inline:")) return null;
    let _v1 = _v0.substring(7).split("|");
    return {
      keyMethod: "inline",
      keySalt: _v1[0],
      lifeTime: _v1[1],
      mkiValue: _v1[2] ? _v1[2].split(":")[0] : void 0,
      mkiLength: _v1[2] ? _v1[2].split(":")[1] : void 0
    };
  }, _v3.writeCryptoKeyParams = function (_v0) {
    return _v0.keyMethod + ":" + _v0.keySalt + (_v0.lifeTime ? "|" + _v0.lifeTime : "") + (_v0.mkiValue && _v0.mkiLength ? "|" + _v0.mkiValue + ":" + _v0.mkiLength : "");
  }, _v3.getCryptoParameters = function (_v0, _v1) {
    return _v3.matchPrefix(_v0 + _v1, "a=crypto:").map(_v3.parseCryptoLine);
  }, _v3.getIceParameters = function (_v0, _v1) {
    let _v2 = _v3.matchPrefix(_v0 + _v1, "a=ice-ufrag:")[0],
      _v3 = _v3.matchPrefix(_v0 + _v1, "a=ice-pwd:")[0];
    return _v2 && _v3 ? {
      usernameFragment: _v2.substring(12),
      password: _v3.substring(10)
    } : null;
  }, _v3.writeIceParameters = function (_v0) {
    let _v1 = "a=ice-ufrag:" + _v0.usernameFragment + "\r\na=ice-pwd:" + _v0.password + "\r\n";
    return _v0.iceLite && (_v1 += "a=ice-lite\r\n"), _v1;
  }, _v3.parseRtpParameters = function (_v0) {
    let _v1 = {
        codecs: [],
        headerExtensions: [],
        fecMechanisms: [],
        rtcp: []
      },
      _v2 = _v3.splitLines(_v0)[0].split(" ");
    _v1.profile = _v2[2];
    for (let _v0 = 3; _v0 < _v2.length; _v0++) {
      let _v0 = _v2[_v0],
        _v1 = _v3.matchPrefix(_v0, "a=rtpmap:" + _v0 + " ")[0];
      if (_v1) {
        let _v0 = _v3.parseRtpMap(_v1),
          _v1 = _v3.matchPrefix(_v0, "a=fmtp:" + _v0 + " ");
        switch (_v0.parameters = _v1.length ? _v3.parseFmtp(_v1[0]) : {}, _v0.rtcpFeedback = _v3.matchPrefix(_v0, "a=rtcp-fb:" + _v0 + " ").map(_v3.parseRtcpFb), _v1.codecs.push(_v0), _v0.name.toUpperCase()) {
          case "RED":
          case "ULPFEC":
            _v1.fecMechanisms.push(_v0.name.toUpperCase());
        }
      }
    }
    _v3.matchPrefix(_v0, "a=extmap:").forEach(_v0 => {
      _v1.headerExtensions.push(_v3.parseExtmap(_v0));
    });
    let _v3 = _v3.matchPrefix(_v0, "a=rtcp-fb:* ").map(_v3.parseRtcpFb);
    return _v1.codecs.forEach(_v0 => {
      _v3.forEach(_v0 => {
        _v0.rtcpFeedback.find(_v0 => _v0.type === _v0.type && _v0.parameter === _v0.parameter) || _v0.rtcpFeedback.push(_v0);
      });
    }), _v1;
  }, _v3.writeRtpDescription = function (_v0, _v1) {
    let _v2 = "";
    _v2 += "m=" + _v0 + " ", _v2 += _v1.codecs.length > 0 ? "9" : "0", _v2 += " " + (_v1.profile || "UDP/TLS/RTP/SAVPF") + " ", _v2 += _v1.codecs.map(_v0 => void 0 !== _v0.preferredPayloadType ? _v0.preferredPayloadType : _v0.payloadType).join(" ") + "\r\n", _v2 += "c=IN IP4 0.0.0.0\r\n", _v2 += "a=rtcp:9 IN IP4 0.0.0.0\r\n", _v1.codecs.forEach(_v0 => {
      _v2 += _v3.writeRtpMap(_v0), _v2 += _v3.writeFmtp(_v0), _v2 += _v3.writeRtcpFb(_v0);
    });
    let _v3 = 0;
    return _v1.codecs.forEach(_v0 => {
      _v0.maxptime > _v3 && (_v3 = _v0.maxptime);
    }), _v3 > 0 && (_v2 += "a=maxptime:" + _v3 + "\r\n"), _v1.headerExtensions && _v1.headerExtensions.forEach(_v0 => {
      _v2 += _v3.writeExtmap(_v0);
    }), _v2;
  }, _v3.parseRtpEncodingParameters = function (_v0) {
    let _v1,
      _v2 = [],
      _v3 = _v3.parseRtpParameters(_v0),
      _v4 = -1 !== _v3.fecMechanisms.indexOf("RED"),
      _v5 = -1 !== _v3.fecMechanisms.indexOf("ULPFEC"),
      _v6 = _v3.matchPrefix(_v0, "a=ssrc:").map(_v0 => _v3.parseSsrcMedia(_v0)).filter(_v0 => "cname" === _v0.attribute),
      _v7 = _v6.length > 0 && _v6[0].ssrc,
      _v8 = _v3.matchPrefix(_v0, "a=ssrc-group:FID").map(_v0 => _v0.substring(17).split(" ").map(_v0 => parseInt(_v0, 10)));
    _v8.length > 0 && _v8[0].length > 1 && _v8[0][0] === _v7 && (_v1 = _v8[0][1]), _v3.codecs.forEach(_v0 => {
      if ("RTX" === _v0.name.toUpperCase() && _v0.parameters.apt) {
        let _v0 = {
          ssrc: _v7,
          codecPayloadType: parseInt(_v0.parameters.apt, 10)
        };
        _v7 && _v1 && (_v0.rtx = {
          ssrc: _v1
        }), _v2.push(_v0), _v4 && ((_v0 = JSON.parse(JSON.stringify(_v0))).fec = {
          ssrc: _v7,
          mechanism: _v5 ? "red+ulpfec" : "red"
        }, _v2.push(_v0));
      }
    }), 0 === _v2.length && _v7 && _v2.push({
      ssrc: _v7
    });
    let _v9 = _v3.matchPrefix(_v0, "b=");
    return _v9.length && (_v9 = 0 === _v9[0].indexOf("b=TIAS:") ? parseInt(_v9[0].substring(7), 10) : 0 === _v9[0].indexOf("b=AS:") ? 0 * parseInt(_v9[0].substring(5), 10) * .95 - 0 : void 0, _v2.forEach(_v0 => {
      _v0.maxBitrate = _v9;
    })), _v2;
  }, _v3.parseRtcpParameters = function (_v0) {
    let _v1 = {},
      _v2 = _v3.matchPrefix(_v0, "a=ssrc:").map(_v0 => _v3.parseSsrcMedia(_v0)).filter(_v0 => "cname" === _v0.attribute)[0];
    _v2 && (_v1.cname = _v2.value, _v1.ssrc = _v2.ssrc);
    let _v3 = _v3.matchPrefix(_v0, "a=rtcp-rsize");
    return _v1.reducedSize = _v3.length > 0, _v1.compound = 0 === _v3.length, _v1.mux = _v3.matchPrefix(_v0, "a=rtcp-mux").length > 0, _v1;
  }, _v3.writeRtcpParameters = function (_v0) {
    let _v1 = "";
    return _v0.reducedSize && (_v1 += "a=rtcp-rsize\r\n"), _v0.mux && (_v1 += "a=rtcp-mux\r\n"), void 0 !== _v0.ssrc && _v0.cname && (_v1 += "a=ssrc:" + _v0.ssrc + " cname:" + _v0.cname + "\r\n"), _v1;
  }, _v3.parseMsid = function (_v0) {
    let _v1,
      _v2 = _v3.matchPrefix(_v0, "a=msid:");
    if (1 === _v2.length) return {
      stream: (_v1 = _v2[0].substring(7).split(" "))[0],
      track: _v1[1]
    };
    let _v3 = _v3.matchPrefix(_v0, "a=ssrc:").map(_v0 => _v3.parseSsrcMedia(_v0)).filter(_v0 => "msid" === _v0.attribute);
    if (_v3.length > 0) return {
      stream: (_v1 = _v3[0].value.split(" "))[0],
      track: _v1[1]
    };
  }, _v3.parseSctpDescription = function (_v0) {
    let _v1,
      _v2 = _v3.parseMLine(_v0),
      _v3 = _v3.matchPrefix(_v0, "a=max-message-size:");
    _v3.length > 0 && (_v1 = parseInt(_v3[0].substring(19), 10)), isNaN(_v1) && (_v1 = 0);
    let _v4 = _v3.matchPrefix(_v0, "a=sctp-port:");
    if (_v4.length > 0) return {
      port: parseInt(_v4[0].substring(12), 10),
      protocol: _v2.fmt,
      maxMessageSize: _v1
    };
    let _v5 = _v3.matchPrefix(_v0, "a=sctpmap:");
    if (_v5.length > 0) {
      let _v0 = _v5[0].substring(10).split(" ");
      return {
        port: parseInt(_v0[0], 10),
        protocol: _v0[1],
        maxMessageSize: _v1
      };
    }
  }, _v3.writeSctpDescription = function (_v0, _v1) {
    let _v2 = [];
    return _v2 = "DTLS/SCTP" !== _v0.protocol ? ["m=" + _v0.kind + " 9 " + _v0.protocol + " " + _v1.protocol + "\r\n", "c=IN IP4 0.0.0.0\r\n", "a=sctp-port:" + _v1.port + "\r\n"] : ["m=" + _v0.kind + " 9 " + _v0.protocol + " " + _v1.port + "\r\n", "c=IN IP4 0.0.0.0\r\n", "a=sctpmap:" + _v1.port + " " + _v1.protocol + " 65535\r\n"], void 0 !== _v1.maxMessageSize && _v2.push("a=max-message-size:" + _v1.maxMessageSize + "\r\n"), _v2.join("");
  }, _v3.generateSessionId = function () {
    return Math.random().toString().substr(2, 22);
  }, _v3.writeSessionBoilerplate = function (_v0, _v1, _v2) {
    return "v=0\r\no=" + (_v2 || "thisisadapterortc") + " " + (_v0 || _v3.generateSessionId()) + " " + (void 0 !== _v1 ? _v1 : 2) + " IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\n";
  }, _v3.getDirection = function (_v0, _v1) {
    let _v2 = _v3.splitLines(_v0);
    for (let _v0 = 0; _v0 < _v2.length; _v0++) switch (_v2[_v0]) {
      case "a=sendrecv":
      case "a=sendonly":
      case "a=recvonly":
      case "a=inactive":
        return _v2[_v0].substring(2);
    }
    return _v1 ? _v3.getDirection(_v1) : "sendrecv";
  }, _v3.getKind = function (_v0) {
    return _v3.splitLines(_v0)[0].split(" ")[0].substring(2);
  }, _v3.isRejected = function (_v0) {
    return "0" === _v0.split(" ", 2)[1];
  }, _v3.parseMLine = function (_v0) {
    let _v1 = _v3.splitLines(_v0)[0].substring(2).split(" ");
    return {
      kind: _v1[0],
      port: parseInt(_v1[1], 10),
      protocol: _v1[2],
      fmt: _v1.slice(3).join(" ")
    };
  }, _v3.parseOLine = function (_v0) {
    let _v1 = _v3.matchPrefix(_v0, "o=")[0].substring(2).split(" ");
    return {
      username: _v1[0],
      sessionId: _v1[1],
      sessionVersion: parseInt(_v1[2], 10),
      netType: _v1[3],
      addressType: _v1[4],
      address: _v1[5]
    };
  }, _v3.isValidSDP = function (_v0) {
    if ("string" != typeof _v0 || 0 === _v0.length) return !1;
    let _v1 = _v3.splitLines(_v0);
    for (let _v0 = 0; _v0 < _v1.length; _v0++) if (_v1[_v0].length < 2 || "=" !== _v1[_v0].charAt(1)) return !1;
    return !0;
  }, _v1.exports = _v3;
}