{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = (0, _v0.i(0).translate)({
    singular: "Untitled showcase",
    dictionary: {
      es: {
        singular: "Presentación sin título"
      },
      "de-DE": {
        singular: "Unbetitelte Präsentation"
      },
      "fr-FR": {
        singular: "Présentation sans titre"
      },
      "ja-JP": {
        singular: "無題のショーケース"
      },
      "ko-KR": {
        singular: "제목 없는 쇼케이스"
      },
      "pt-BR": {
        singular: "Vitrine sem título"
      },
      "zh-CN": {
        singular: "无标题展示"
      }
    }
  });
  _v0.s(["useCreateShowcase", 0, ({
    onFailure: _v0,
    onSuccess: _v1,
    teamOwnerId: _v2
  }) => {
    let [_v3, {
      called: _v4,
      data: _v5,
      error: _v6,
      loading: _v7
    }] = (0, _v2.usePostUserAlbums)();
    return (0, _v1.useEffect)(() => {
      _v4 && !_v7 && (_v5 && _v1?.({
        uri: _v5.uri
      }), _v6 && _v0?.());
    }, [_v4, _v5, _v6, _v7, _v0, _v1]), [() => {
      _v2 && _v3({
        where: {
          userId: _v2
        },
        select: ["uri"],
        variables: {
          name: _v3
        }
      });
    }, {
      loading: _v7
    }];
  }]);
}