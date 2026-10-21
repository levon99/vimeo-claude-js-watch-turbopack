{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = {
      Error: "ERROR",
      InProgress: "IN_PROGRESS",
      Success: "SUCCESS",
      None: "NONE"
    },
    _v3 = {
      None: 0,
      NewSuccess: 1,
      RenewSuccess: 2,
      NewFail: 3,
      RenewFail: 4,
      NewCheckSuccess: 5,
      RenewCheckSuccess: 6,
      NewCheckFail: 7,
      RenewCheckFail: 8
    },
    _v4 = new Set([_v3.NewCheckSuccess, _v3.RenewCheckSuccess]),
    _v5 = new Set([_v3.NewSuccess, _v3.RenewSuccess]),
    _v6 = {
      ValidARecord: 1,
      ValidASubdomainRecord: 2,
      ValidCnameRecord: 3,
      InvalidDomainFormat: 10,
      InvalidUsingCname: 11,
      HostNotFound: 12,
      FailedARecord: 13,
      FailedCName: 14,
      NoValidRecords: 15,
      DomainTaken: 16
    },
    _v7 = {
      CustomDomain: "customDomain",
      VimeoLink: "vimeoLink"
    };
  _v0.s(["CustomizeInputType", 0, _v7, "DOMAIN_CERT_IN_PROGRESS_CODES", 0, _v5, "DOMAIN_CERT_SUCCESS_CODES", 0, _v4, "DomainCertCodes", 0, _v3, "DomainCertUiStates", 0, _v2, "DomainCheckCodes", 0, _v6], 0);
  var _v8 = _v0.i(0);
  let _v9 = (_v0, _v1) => {
    switch (_v0) {
      case _v7.CustomDomain:
        return {
          initialError: 0,
          responseParam: "mode",
          error: Number(_v1?.message)
        };
      case _v7.VimeoLink:
        return {
          initialError: null,
          responseParam: "is_available",
          error: _v1
        };
    }
  };
  _v0.s(["formatCertCodeToUiState", 0, _v0 => _v0 === _v3.None || null === _v0 ? _v2.None : _v4.has(_v0) ? _v2.Success : _v5.has(_v0) ? _v2.InProgress : _v2.Error, "generateCustomDomainErrorMessage", 0, _v0 => {
    let _v1 = "";
    switch (_v0) {
      case _v6.DomainTaken:
        _v1 = (0, _v8.translate)({
          singular: "Another showcase is already using this domain",
          dictionary: {
            es: {
              singular: "Otra presentación ya usa este dominio"
            },
            "de-DE": {
              singular: "Eine andere Präsentation nutzt diese Domain bereits"
            },
            "fr-FR": {
              singular: "Une autre présentation utilise déjà ce domaine."
            },
            "ja-JP": {
              singular: "別のショーケースがすでにこのドメインを使用しています"
            },
            "ko-KR": {
              singular: "다른 쇼케이에서 이미 이 도메인을 사용하고 있습니다."
            },
            "pt-BR": {
              singular: "Outra vitrine já está usando este domínio"
            },
            "zh-CN": {
              singular: "另一个展示已在使用这个域"
            }
          }
        });
        break;
      case _v6.HostNotFound:
        _v1 = (0, _v8.translate)({
          singular: "This domain does not exist",
          dictionary: {
            es: {
              singular: "Este dominio no existe"
            },
            "de-DE": {
              singular: "Diese Domain ist unbekannt"
            },
            "fr-FR": {
              singular: "Ce domaine n'existe pas."
            },
            "ja-JP": {
              singular: "このドメインは存在しません"
            },
            "ko-KR": {
              singular: "존재하지 않는 도메인입니다."
            },
            "pt-BR": {
              singular: "Este domínio não existe"
            },
            "zh-CN": {
              singular: "此域不存在"
            }
          }
        });
        break;
      case _v6.FailedARecord:
      case _v6.InvalidUsingCname:
      case _v6.FailedCName:
        _v1 = (0, _v8.translate)({
          singular: "This domain is not configured yet",
          dictionary: {
            es: {
              singular: "Este dominio aún no está configurado"
            },
            "de-DE": {
              singular: "Diese Domain ist noch nicht konfiguriert"
            },
            "fr-FR": {
              singular: "Ce domaine n'est pas encore configuré"
            },
            "ja-JP": {
              singular: "このドメインはまだ設定されていません"
            },
            "ko-KR": {
              singular: "이 도메인은 아직 구성되지 않았습니다."
            },
            "pt-BR": {
              singular: "Este domínio ainda não está configurado"
            },
            "zh-CN": {
              singular: "此域尚未配置"
            }
          }
        });
        break;
      case _v6.ValidARecord:
        _v1 = (0, _v8.translate)({
          singular: "If you don't see your album on your home page when you visit the domain, the DNS record might need more time to do its thing. This process may take up to 72 hours.",
          dictionary: {
            es: {
              singular: "Si no ves tu álbum en tu página de inicio cuando visitas el dominio, puede que el registro de DNS necesite más tiempo para terminar de procesar la información. Esto puede demorar hasta 72 horas."
            },
            "de-DE": {
              singular: "Wenn du beim Aufrufen der Domain dein Album nicht direkt auf der Startseite siehst, kann es sein, dass der DNS-Eintrag noch etwas Zeit braucht. Das kann mitunter bis zu 72 Stunden dauern."
            },
            "fr-FR": {
              singular: "Si vous ne voyez pas votre album sur votre page d'accueil lorsque vous visitez le domaine, c'est peut-être que l'enregistrement DNS nécessite plus de temps. Ce processus peut prendre jusqu'à 72 heures."
            },
            "ja-JP": {
              singular: "ドメインアクセス時にあなたのホームページにアルバムが表示されていない場合、DNS レコードが反映されるまでに少し時間を要することがあります。処理には最大で 72 時間かかります。"
            },
            "ko-KR": {
              singular: "도메인에 접속했을 때 메인 페이지에 내 앨범이 나타나지 않는다면 DNS 레코드가 작업을 수행하는 데 시간이 더 필요한 경우일 수 있습니다. 이 프로세스는 최대 72시간이 소요될 수 있습니다."
            },
            "pt-BR": {
              singular: "Caso não veja seu álbum na sua página inicial quando visitar o domínio, o registro do DNS deve precisar de mais tempo para funcionar. Esse processo pode demorar até 72 horas."
            },
            "zh-CN": {
              singular: "如果您在访问域时没有在主页上看到您的专辑，则 DNS 记录可能需要更多时间来处理。这一过程最长可能需要 72 小时。"
            }
          }
        });
        break;
      case _v6.InvalidDomainFormat:
        _v1 = (0, _v8.translate)({
          singular: "Enter a valid domain",
          dictionary: {
            es: {
              singular: "Ingresar un dominio válido"
            },
            "de-DE": {
              singular: "Geben Sie eine gültige Domain ein"
            },
            "fr-FR": {
              singular: "Saisissez un domaine valide"
            },
            "ja-JP": {
              singular: "有効なドメインを入力してください"
            },
            "ko-KR": {
              singular: "유효한 도메인 입력"
            },
            "pt-BR": {
              singular: "Insira um domínio válido"
            },
            "zh-CN": {
              singular: "输入有效的域"
            }
          }
        });
        break;
      default:
        _v1 = (0, _v8.translate)({
          singular: "Something went wrong. Try again later.",
          dictionary: {
            es: {
              singular: "Se produjo un error. Vuelve a intentarlo más tarde."
            },
            "de-DE": {
              singular: "Hier ist etwas schiefgelaufen. Versuche es später noch einmal."
            },
            "fr-FR": {
              singular: "Une erreur s'est produite. Veuillez réessayer plus tard."
            },
            "ja-JP": {
              singular: "エラーが発生しました。しばらくしてから、再試行してください。"
            },
            "ko-KR": {
              singular: "문제가 발생했습니다. 나중에 다시 시도하세요."
            },
            "pt-BR": {
              singular: "Algo deu errado. Tente novamente mais tarde."
            },
            "zh-CN": {
              singular: "出错了。请稍后再试。"
            }
          }
        });
    }
    return _v1;
  }, "validateInputValues", 0, _v9], 0), _v0.s(["default", 0, (_v0, _v1, _v2) => {
    let _v3 = _v2 ? _v7.CustomDomain : _v7.VimeoLink,
      {
        initialError: _v4,
        responseParam: _v5
      } = _v9(_v3),
      [_v6, _v7] = (0, _v1.useState)({
        data: !1,
        called: !1,
        loading: !1,
        error: _v4
      });
    return [(0, _v1.useCallback)(async _v0 => {
      _v7(_v0 => ({
        ..._v0,
        called: !0,
        loading: !0
      }));
      try {
        let _v0 = await fetch(_v0(_v0), {
            method: "GET",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
              "X-Requested-With": "XMLHttpRequest"
            }
          }),
          _v1 = await _v0.json();
        if (_v2?.(!!_v1.is_https), _v1(_v1[_v5])) _v7({
          data: !0,
          called: !0,
          loading: !1,
          error: _v4
        });else throw Error(_v1[_v5]);
      } catch (_v0) {
        _v7({
          data: !1,
          called: !0,
          loading: !1,
          error: _v9(_v3, _v0).error
        });
      }
    }, [_v0, _v4, _v5, _v2, _v1, _v3]), _v6];
  }], 0);
}