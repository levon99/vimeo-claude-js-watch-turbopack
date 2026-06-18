{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = "true" === _v1.default.env.IS_STAGING,
    _v4 = ["'self'", "https://i.vimeocdn.com", "https://f.vimeocdn.com"],
    _v5 = ["'self'", "blob:", "data:", "ws:", "wss:", "*.6sc.co", "*.6sense.com", "*.agora.io", "*.akamaized.net", "clientassets.sightera.com.s3.amazonaws.com", "https://d263mgllkjh2k2.cloudfront.net", "http://d1ripsxh7es2qp.cloudfront.net", "https://d3fclmoge30w0w.cloudfront.net", "cognito-identity.us-east-1.amazonaws.com", "cognito-identity.us-west-1.amazonaws.com", "https://s3.amazonaws.com/beast.branding.sightera.com", "https://s3.amazonaws.com/beast.business.sightera.com", "https://s3.amazonaws.com/beast.business.sightera.com/", "https://s3.amazonaws.com/beast.branding.sightera.com/", "https://s3.amazonaws.com/test.sightera.com/", "https://s3.amazonaws.com/business.sightera.com/", "https://s3.amazonaws.com/sound.sightera.com/", "sqs.us-east-1.amazonaws.com", "sqs.us-west-1.amazonaws.com", "wirewax.s3.eu-west-1.amazonaws.com", "*.amplitude.com", "vimeo.bynder.com", "bat.bing-int.com", "bat.bing.com", "bat.bing.net", "www.bing.com", "api.branch.io", "cdn.builder.io", "https://d1ripsxh7es2qp.cloudfront.net", "http://d1oca24q5dwo6d.cloudfront.net", "media.gettyimages.com", "d2by6sxflmuwyq.cloudfront.net", "duysrfiajusdh.cloudfront.net", "dv7a7fjpjy29e.cloudfront.net", "cdn.cookielaw.org", "https://browser-intake-datadoghq.com", "ad.doubleclick.net", "*.g.doubleclick.net", "*.elfsight.com", "fp.service.expressplay.com", "pr.service.expressplay.com", "wv.service.expressplay.com", "www.facebook.com", "api.figma.com", "*.firebaseio.com", "tracking-api.g2.com", "*.getsmartling.com", "*.google.ae", "*.google.com", "*.google.ca", "*.google.ch", "*.google.es", "*.google.fr", "*.google.ge", "*.google.iq", "*.google.is", "*.google.it", "*.google.pl", "*.google.se", "*.google.si", "*.google.rs", "*.google.co.jp", "*.google.co.kr", "*.google.co.nz", "*.google.co.th", "*.google.co.uk", "*.google.com.ar", "*.google.com.au", "*.google.com.br", "*.google.com.mx", "*.google.com.pk", "*.google.com.sa", "*.google.com.tr", "*.google.com.uk", "*.google.de", "*.analytics.google.com", "*.google-analytics.com", "www.googleadservices.com", "*.googleapis.com", "*.googleusercontent.com", "csi.gstatic.com", "pagead2.googlesyndication.com", "*.googletagmanager.com", "api.greenhouse.io", "*.hivestreaming.com", "117151225.intellimizeio.com", "*.intellimize.co", "*.kollective.app", "*.kollective.app:31015", "*.kollectivecd.com", "leatherback-dot-vimeo-prod.appspot.com", "snap.licdn.com", "px.ads.linkedin.com", "linkedin.com", "*.litix.io", "*.cdn.magisto.com", "vimeo.magisto.com", "*.maze.co", "582-gou-684.mktoresp.com", "js-agent.newrelic.com", "t.paypal.com", "https://data.pendo.io", "*.pndsn.com", "privacyportal.onetrust.com", "privacyportal-cdn.onetrust.com", "app.qualified.com", "*.qualtrics.com", "pixel-config.reddit.com", "www.redditstatic.com", "*.riskified.com", "*.statscollector.ap.sd-rtn.com", "*.ap.sd-rtn.com", "*.sd-rtn.com", "o209747.ingest.us.sentry.io", "o6787.ingest.us.sentry.io", "simonsignal.com", "static.simonsignal.com", "sdk-api-v1.singular.net", "web-sdk-cdn.singular.net", "https://telemetry.transcend.io", "transcend-cdn.com", "https://drm.vhx.com/v2/fairplay/cert", "collector.vhx.tv", "*.cloud.vimeo.com", "interactive.create.vimeo.com", "*.vimeo.com", "https://vimeo.com", "*.vimeo.work", "https://*.vimeocdn.com", "cdn.widerfunnel.com", "appds8093.blob.core.windows.net", "*.wirewax.com", "*.wirewax.tv", "*.wirewax.video", "*.zdassets.com", "https://vimeosupport.zendesk.com", "*.zoom.us", "zoom.us", "ws.zoominfo.com", "api.box.com", "public.boxcloud.com", "us-central1-vimeo-record-prod.cloudfunctions.net", "https://record-logs-consumer-b3wyf77jyq-uc.a.run.app", "https://api.picox.bendingspoons.com", "https://orion.bendingspoons.com"],
    _v6 = ["'self'", "data:", "d2by6sxflmuwyq.cloudfront.net", "dv7a7fjpjy29e.cloudfront.net", "fonts.gstatic.com", "*.cdn.magisto.com", "privacyportal-cdn.onetrust.com", "www.paypalobjects.com", "cf-st.sc-cdn.net", "use.typekit.net", "https://f.vimeocdn.com", "edge-assets.wirewax.com", "edge-assets.wirewax.video", "cdn01.boxcdn.net"],
    _v7 = ["'self'", "blob:", "data:", "*.akamaized.net", "https://d263mgllkjh2k2.cloudfront.net", "http://d1oca24q5dwo6d.cloudfront.net", "duysrfiajusdh.cloudfront.net", "media.gettyimages.com", "*.gvt1.com", "*.cdn.magisto.com", "*.eu.cloud.vimeo.com", "live-api.cloud.vimeo.com", "captions.vimeo.com", "captions.eu.vimeo.com", "player.vimeo.com", "https://*.vimeocdn.com", "app.qualified.com", "https://s3.amazonaws.com/sound.sightera.com/", "https://s3.amazonaws.com/test.sightera.com/", "https://s3.amazonaws.com/beast.business.sightera.com/", "https://s3.amazonaws.com/beast.business.sightera.com", "https://s3.amazonaws.com/beast.branding.sightera.com/", "https://storage.googleapis.com/vimeo-create-prod-files/", "http://d1ripsxh7es2qp.cloudfront.net", "https://d3fclmoge30w0w.cloudfront.net", "https://storage.googleapis.com/vimeo-prod-upload-create-us-east1/", "https://storage.googleapis.com/vimeo-prod-upload-create-europe-west1/", "https://storage.googleapis.com/vimeo-storage-dev-upload-create-us-east1/", "https://storage.googleapis.com/vimeo-storage-dev-upload-create-europe-west1/", "https://captions.vimeo.com", "https://captions-eu.vimeo.com"],
    _v8 = ["'self'", "player.vimeo.com", "*.vimeocdn.com", "*.akamaized.net"],
    _v9 = ["'unsafe-inline'", "'unsafe-eval'", "'self'", "data:", "ws:", "wss:", "https://s0.2mdn.net/instream/video/", "*.6sc.co", "wirewax.s3.eu-west-1.amazonaws.com", "app.link", "https://bat.bing-int.com", "https://bat.bing.com", "cdnjs.cloudflare.com", "challenges.cloudflare.com", "https://d3pvxrmcry8qui.cloudfront.net", "https://browser-intake.datadoghq.com", "https://www.datadoghq-browser-agent.com", "https://*.g.doubleclick.net", "www.dropbox.com", "static.elfsight.com", "*.elfsightcdn.com", "connect.facebook.net", "*.firebaseio.com", "tracking.g2crowd.com", "*.google.com", "www.googleadservices.com", "www.gstatic.com", "*.google-analytics.com", "ajax.googleapis.com", "maps.googleapis.com", "pendo-io-static.storage.googleapis.com", "pendo-static-6633483048714240.storage.googleapis.com", "pagead2.googlesyndication.com", "https://www.googletagmanager.com", "www.googletagservices.com", "cdn.intellimize.co", "*.kollective.app", "snap.licdn.com", "src.litix.io", "lp.livestream.com", "munchkin.marketo.net", "snippet.maze.co", "privacyportal-cdn.onetrust.com", "www.paypalobjects.com", "cdn.pendo.io", "js.qualified.com", "https://data.pendo.io", "*.qualtrics.com", "www.redditstatic.com", "beacon.riskified.com", "secured-pixel.com", "static.simonsignal.com", "js.stripe.com", "web-sdk-cdn.singular.net", "transcend-cdn.com", "vimeo.com", "*.vimeo.com", "*.vimeocdn.com", "https://*.vimeocdn.com", "cdn.widerfunnel.com", "edge-assets.wirewax.com", "edge-assets.wirewax.video", "embedder-sdk.wirewax.com", "embedder-sdk.wirewax.tv", "embedder-sdk.wirewax.video", "origin-4.xtlo.net", "static.zdassets.com", "*.zoom.us", "zoom.us", "ws.zoominfo.com", "static.zuora.com", "https://www.dropbox.com/static/api/2/dropins.js", "cdn01.boxcdn.net"],
    _v10 = ["'self'", "'unsafe-inline'", "*.6sc.co", "cdn01.boxcdn.net", "cdnjs.cloudflare.com", "accounts.google.com", "fonts.googleapis.com", "pendo-static-6633483048714240.storage.googleapis.com", "www.gstatic.com", "lp.livestream.com", "privacyportal-cdn.onetrust.com", "www.paypalobjects.com", "*.vimeo.com", "*.vimeocdn.com", "https://*.vimeocdn.com", "vimeopro.com", "transcend-cdn.com", "cdn.widerfunnel.com", "edge-assets.wirewax.com", "edge-assets.wirewax.video", "edge-player5.wirewax.com", "edge-player5.wirewax.video", "origin-4.xtlo.net"],
    _v11 = ["https://browser-intake-datadoghq.com/api/v2/logs?dd-api-key=puba92ed04ee7cceea44335c3d8c1ccc173&dd-evp-origin=content-security-policy&ddsource=csp-report&ddtags=service%3Acspreport%2Cenv%3Aproduction"];
  _v3 && (_v4.push("fstaging1.vimeocdn.com"), _v5.push("*.vimeo.magisto.com"), _v5.push("*.vimeows.com"), _v5.push("*.ci.vimeows.com"), _v5.push("collector.vhxstaging.com"), _v6.push("fstaging1.vimeocdn.com"), _v7.push("*.vimeows.com"), _v7.push("*.ci.vimeows.com"), _v8.push("*.akamaized-staging.net"), _v9.push("*.vimeows.com"), _v9.push("*.ci.vimeows.com"), _v10.push("*.vimeows.com"), _v10.push("*.ci.vimeows.com"), _v5.push("*.akamaized-staging.net"), _v5.push("*.appsflyer.com"), _v5.push("ct.pinterest.com"), _v5.push("vimeosupport1729152093.zendesk.com"), _v7.push("*.akamaized-staging.net"), _v9.push("*.appsflyer.com"), _v9.push("static.ads-twitter.com"), _v9.push("script.crazyegg.com"), _v9.push("s.pinimg.com"), _v9.push("ct.pinterest.com"), _v9.push("secure.quantserve.com"), _v9.push("pixel.quantcount.com"), _v9.push("rules.quantcount.com"), _v9.push("*.smooch.io"), _v11 = ["https://browser-intake-datadoghq.com/api/v2/logs?dd-api-key=pub9c520e7af792df968e75b61f7b9de645&dd-evp-origin=content-security-policy&ddsource=csp-report&ddtags=service%3Acspreport%2Cenv%3Aci"]);
  let _v12 = {
    "default-src": _v4,
    "connect-src": _v5,
    "font-src": _v6,
    "frame-src": ["*"],
    "img-src": ["*", "blob:", "data:"],
    "media-src": _v7,
    "object-src": _v8,
    "script-src": _v9,
    "style-src": _v10,
    "worker-src": ["'self'", "blob:"],
    "report-to": ["csp-endpoint"],
    "report-uri": _v11
  };
  function _v13(_v0, _v1 = !0) {
    let _v2 = {
      ..._v12
    };
    return _v0 && Object.entries(_v0).forEach(([_v0, _v1]) => {
      _v0 in _v2 && Array.isArray(_v1) && (_v2[_v0] = _v1 ? [..._v2[_v0], ..._v1] : _v1);
    }), Object.entries(_v2).map(([_v0, _v1]) => `${_v0} ${_v1.join(" ")}`).join("; ");
  }
  function _v14(_v0) {
    let _v1 = (0, _v2.isNextMiddlewareRequest)(_v0) ? _v0.headers.get("host") : _v0.headers.host,
      _v2 = `player.${_v1}`;
    return {
      "connect-src": [`api.${_v1}`],
      "frame-src": [_v2],
      "script-src": [_v2]
    };
  }
  _v0.s(["CSP_HEADER", 0, _v3 ? "Content-Security-Policy" : "Content-Security-Policy-Report-Only", "getCSPValue", 0, _v13, "getChinaCSPValue", 0, function (_v0) {
    let _v1;
    return _v13({
      ...(_v1 = _v14(_v0)),
      "connect-src": ["*.videoji.cn", ..._v1["connect-src"]],
      "script-src": ["*.videoji.cn", ..._v1["script-src"]],
      "default-src": ["f.videoji.cn"],
      "font-src": ["*.videoji.cn"],
      "style-src": ["*.videoji.cn"]
    });
  }, "getEnterpriseCSPValue", 0, function (_v0) {
    return _v13(_v14(_v0));
  }, "getOverrideCSPValue", 0, function (_v0) {
    return _v13(_v0, !1);
  }]);
}