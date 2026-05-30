{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  async function _v3({
    baseUrl: _v0,
    select: _v1,
    where: {
      userId: _v2,
      kitUuid: _v3
    },
    ..._v4
  }) {
    return (0, _v1.measureLatency)("getUserBrandkit", "GET", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/brandkits/${_v3}?fields=${_v1.map(_v2.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "GET"
      });
      if (!_v0.ok) throw new _v2.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v2.deepCamelCase)(_v1);
    });
  }
  async function _v4({
    baseUrl: _v0,
    where: {
      userId: _v1,
      kitUuid: _v2
    },
    ..._v3
  }) {
    return (0, _v1.measureLatency)("deleteUserBrandkit", "DELETE", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v1}/brandkits/${_v2}`, {
        ..._v3,
        method: "DELETE"
      });
      if (!_v0.ok) throw new _v2.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v2.deepCamelCase)(_v1);
    });
  }
  async function _v5({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      userId: _v3,
      kitUuid: _v4
    },
    ..._v5
  }) {
    return (0, _v1.measureLatency)("patchUserBrandkit", "PATCH", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v3}/brandkits/${_v4}?fields=${_v1.map(_v2.intoSnakeCase).join(",")}`, {
        ..._v5,
        method: "PATCH",
        body: JSON.stringify((0, _v2.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v2.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v2.deepCamelCase)(_v1);
    });
  }
  async function _v6({
    baseUrl: _v0,
    where: {
      userId: _v1,
      kitUuid: _v2,
      colorId: _v3
    },
    ..._v4
  }) {
    return (0, _v1.measureLatency)("deleteUserBrandkitColor", "DELETE", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v1}/brandkits/${_v2}/colors/${_v3}`, {
        ..._v4,
        method: "DELETE"
      });
      if (!_v0.ok) throw new _v2.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v2.deepCamelCase)(_v1);
    });
  }
  async function _v7({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      userId: _v3,
      kitUuid: _v4,
      colorId: _v5
    },
    ..._v6
  }) {
    return (0, _v1.measureLatency)("patchUserBrandkitColor", "PATCH", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v3}/brandkits/${_v4}/colors/${_v5}?fields=${_v1.map(_v2.intoSnakeCase).join(",")}`, {
        ..._v6,
        method: "PATCH",
        body: JSON.stringify((0, _v2.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v2.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v2.deepCamelCase)(_v1);
    });
  }
  var _v8 = _v0.i(0);
  async function _v9({
    baseUrl: _v0,
    where: {
      userId: _v1,
      kitUuid: _v2,
      logoId: _v3
    },
    ..._v4
  }) {
    return (0, _v1.measureLatency)("deleteUserBrandkitLogo", "DELETE", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v1}/brandkits/${_v2}/logos/${_v3}`, {
        ..._v4,
        method: "DELETE"
      });
      if (!_v0.ok) throw new _v2.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v2.deepCamelCase)(_v1);
    });
  }
  async function _v10({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      userId: _v3,
      kitUuid: _v4,
      logoId: _v5
    },
    ..._v6
  }) {
    return (0, _v1.measureLatency)("patchUserBrandkitLogo", "PATCH", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v3}/brandkits/${_v4}/logos/${_v5}?fields=${_v1.map(_v2.intoSnakeCase).join(",")}`, {
        ..._v6,
        method: "PATCH",
        body: JSON.stringify((0, _v2.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v2.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v2.deepCamelCase)(_v1);
    });
  }
  var _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0);
  let _v15 = ["name", "isDefault", "colors", "logos", "uri", "previewLogoUrl", "isLocked", "isOrganization"],
    _v16 = ["name", "colors", "logos", "uri", "previewLogoUrl", "isLocked", "isOrganization"];
  _v0.s(["useBrandkitsApi", 0, function ({
    userId: _v0,
    brandkitId: _v1
  }) {
    let _v2 = (({
        userId: _v0,
        brandkitId: _v1
      }) => {
        let _v2 = (0, _v14.useViewer)();
        return {
          kitUuid: _v1?.toString() || "",
          userId: _v0,
          baseUrl: `//${_v2.apiUrl}`,
          headers: {
            Authorization: `jwt ${_v2.jwt}`,
            "Content-Type": "application/json"
          }
        };
      })({
        userId: _v0,
        brandkitId: _v1
      }),
      {
        uploadLogoToBrandKit: _v3
      } = (0, _v13.useBrandLogoUpload)(_v0);
    return {
      postUserBrandkitColorsApi: function (_v0) {
        let {
          kitUuid: _v1,
          userId: _v2,
          headers: _v3,
          baseUrl: _v4
        } = _v0;
        return function ({
          selectedColor: _v0,
          name: _v1
        }) {
          return (0, _v8.postUserBrandkitColors)({
            baseUrl: _v4,
            headers: _v3,
            variables: {
              name: _v1,
              hex: _v0
            },
            select: ["hex", "name", "uri"],
            where: {
              kitUuid: _v1,
              userId: _v2
            }
          });
        };
      }(_v2),
      patchUserBrandkitColorApi: function (_v0) {
        let {
          kitUuid: _v1,
          userId: _v2,
          headers: _v3,
          baseUrl: _v4
        } = _v0;
        return function ({
          colorId: _v0,
          name: _v1
        }) {
          return _v7({
            baseUrl: _v4,
            headers: _v3,
            variables: {
              name: _v1
            },
            select: ["hex", "name", "uri"],
            where: {
              userId: _v2,
              kitUuid: _v1,
              colorId: _v0
            }
          });
        };
      }(_v2),
      postUserBrandkitsUploadAssetApi: function (_v0) {
        let {
          userId: _v1,
          headers: _v2,
          baseUrl: _v3
        } = _v0;
        return function ({
          fileName: _v0,
          fileSize: _v1
        }) {
          return (0, _v12.postUserBrandkitsUploadAsset)({
            baseUrl: _v3,
            headers: _v2,
            variables: {
              assetType: "logo",
              fileName: _v0,
              fileSize: _v1
            },
            select: ["uploadLink"],
            where: {
              userId: _v1
            }
          });
        };
      }(_v2),
      uploadBrandkitLogoApi: _v3,
      deleteUserBrandkitColorApi: function (_v0) {
        let {
          kitUuid: _v1,
          userId: _v2,
          headers: _v3,
          baseUrl: _v4
        } = _v0;
        return function ({
          colorId: _v0
        }) {
          return _v6({
            baseUrl: _v4,
            headers: _v3,
            where: {
              userId: _v2,
              kitUuid: _v1,
              colorId: _v0
            }
          });
        };
      }(_v2),
      getUserBrandkitsApi: function (_v0) {
        let {
          userId: _v1,
          headers: _v2,
          baseUrl: _v3
        } = _v0;
        return function () {
          return (0, _v11.getUserBrandkits)({
            baseUrl: _v3,
            headers: _v2,
            select: _v15,
            where: {
              userId: _v1
            }
          });
        };
      }(_v2),
      getUserBrandkitApi: function (_v0) {
        let {
          kitUuid: _v1,
          userId: _v2,
          headers: _v3,
          baseUrl: _v4
        } = _v0;
        return function () {
          return _v3({
            baseUrl: _v4,
            headers: _v3,
            select: _v16,
            where: {
              userId: _v2,
              kitUuid: _v1
            }
          });
        };
      }(_v2),
      postUserBrandkitsApi: function (_v0) {
        let {
          userId: _v1,
          headers: _v2,
          baseUrl: _v3
        } = _v0;
        return function ({
          brandkitName: _v0
        }) {
          return (0, _v11.postUserBrandkits)({
            baseUrl: _v3,
            headers: _v2,
            variables: {
              name: _v0,
              isDefault: !1
            },
            select: ["name", "uri"],
            where: {
              userId: _v1
            }
          });
        };
      }(_v2),
      patchUserBrandkitApi: function (_v0) {
        let {
          headers: _v1,
          baseUrl: _v2
        } = _v0;
        return function ({
          brandkitName: _v0,
          kitUuid: _v1 = _v0.kitUuid,
          userId: _v2 = _v0.userId
        }) {
          return _v5({
            baseUrl: _v2,
            headers: _v1,
            variables: {
              name: _v0
            },
            select: ["name"],
            where: {
              userId: _v2,
              kitUuid: _v1
            }
          });
        };
      }(_v2),
      deleteUserBrandkitApi: function (_v0) {
        let {
          headers: _v1,
          baseUrl: _v2
        } = _v0;
        return function ({
          kitUuid: _v0 = _v0.kitUuid,
          userId: _v1 = _v0.userId
        }) {
          return _v4({
            baseUrl: _v2,
            headers: _v1,
            where: {
              userId: _v1,
              kitUuid: _v0
            }
          });
        };
      }(_v2),
      deleteUserBrandkitLogoApi: function (_v0) {
        let {
          kitUuid: _v1,
          userId: _v2,
          headers: _v3,
          baseUrl: _v4
        } = _v0;
        return function ({
          logoId: _v0
        }) {
          return _v9({
            baseUrl: _v4,
            headers: _v3,
            where: {
              userId: _v2,
              logoId: _v0,
              kitUuid: _v1
            }
          });
        };
      }(_v2),
      patchUserBrandkitLogoApi: function (_v0) {
        let {
          headers: _v1,
          baseUrl: _v2
        } = _v0;
        return function ({
          logoId: _v0,
          name: _v1,
          isDefault: _v2,
          kitUuid: _v3 = _v0.kitUuid,
          userId: _v4 = _v0.userId
        }) {
          return _v10({
            baseUrl: _v2,
            headers: _v1,
            variables: {
              name: _v1,
              isDefault: _v2
            },
            select: ["fileName", "name", "picture.baseLink", "uri"],
            where: {
              userId: _v4,
              logoId: _v0,
              kitUuid: _v3
            }
          });
        };
      }(_v2)
    };
  }], 0);
  var _v17 = _v0.i(0);
  let _v18 = (0, _v17.translate)({
      singular: "characters",
      dictionary: {
        es: {
          singular: "caracteres"
        },
        "de-DE": {
          singular: "Zeichen"
        },
        "fr-FR": {
          singular: "caractères"
        },
        "ja-JP": {
          singular: "文字"
        },
        "ko-KR": {
          singular: "자"
        },
        "pt-BR": {
          singular: "caracteres"
        },
        "zh-CN": {
          singular: "字符"
        }
      }
    }),
    _v19 = (0, _v17.translate)({
      singular: "Create",
      dictionary: {
        es: {
          singular: "Crear"
        },
        "de-DE": {
          singular: "Erstellen"
        },
        "fr-FR": {
          singular: "Créer"
        },
        "ja-JP": {
          singular: "作成"
        },
        "ko-KR": {
          singular: "만들기"
        },
        "pt-BR": {
          singular: "Criar"
        },
        "zh-CN": {
          singular: "创建"
        }
      }
    }),
    _v20 = (0, _v17.translate)({
      singular: "Save",
      dictionary: {
        es: {
          singular: "Guardar"
        },
        "de-DE": {
          singular: "Speichern"
        },
        "fr-FR": {
          singular: "Enregistrer"
        },
        "ja-JP": {
          singular: "保存"
        },
        "ko-KR": {
          singular: "저장"
        },
        "pt-BR": {
          singular: "Salvar"
        },
        "zh-CN": {
          singular: "保存"
        }
      }
    }),
    _v21 = (0, _v17.translate)({
      singular: "Cancel",
      dictionary: {
        es: {
          singular: "Cancelar"
        },
        "de-DE": {
          singular: "Abbrechen"
        },
        "fr-FR": {
          singular: "Annuler"
        },
        "ja-JP": {
          singular: "キャンセル"
        },
        "ko-KR": {
          singular: "취소"
        },
        "pt-BR": {
          singular: "Cancelar"
        },
        "zh-CN": {
          singular: "取消"
        }
      }
    }),
    _v22 = (0, _v17.translate)({
      singular: "Delete",
      dictionary: {
        es: {
          singular: "Eliminar"
        },
        "de-DE": {
          singular: "Löschen"
        },
        "fr-FR": {
          singular: "Supprimer"
        },
        "ja-JP": {
          singular: "削除"
        },
        "ko-KR": {
          singular: "삭제"
        },
        "pt-BR": {
          singular: "Excluir"
        },
        "zh-CN": {
          singular: "删除"
        }
      }
    }),
    _v23 = (0, _v17.translate)({
      singular: "Save",
      dictionary: {
        es: {
          singular: "Guardar"
        },
        "de-DE": {
          singular: "Speichern"
        },
        "fr-FR": {
          singular: "Enregistrer"
        },
        "ja-JP": {
          singular: "保存"
        },
        "ko-KR": {
          singular: "저장"
        },
        "pt-BR": {
          singular: "Salvar"
        },
        "zh-CN": {
          singular: "保存"
        }
      }
    }),
    _v24 = (0, _v17.translate)({
      singular: "New brand kit",
      dictionary: {
        es: {
          singular: "Nuevo kit de marca"
        },
        "de-DE": {
          singular: "Neues Markenkit"
        },
        "fr-FR": {
          singular: "Nouveau kit de marque"
        },
        "ja-JP": {
          singular: "新しいブランドキット"
        },
        "ko-KR": {
          singular: "새 브랜드 키트"
        },
        "pt-BR": {
          singular: "Novo kit de marca"
        },
        "zh-CN": {
          singular: "新品牌工具包"
        }
      }
    }),
    _v25 = (0, _v17.translate)({
      singular: "Add color",
      dictionary: {
        es: {
          singular: "Agregar color"
        },
        "de-DE": {
          singular: "Farbe hinzufügen"
        },
        "fr-FR": {
          singular: "Ajouter une couleur"
        },
        "ja-JP": {
          singular: "色を追加"
        },
        "ko-KR": {
          singular: "색상 추가"
        },
        "pt-BR": {
          singular: "Adicionar cor"
        },
        "zh-CN": {
          singular: "添加颜色"
        }
      }
    }),
    _v26 = (0, _v17.translate)({
      singular: "Brand kits",
      dictionary: {
        es: {
          singular: "Kits de su marca"
        },
        "de-DE": {
          singular: "Markenkits"
        },
        "fr-FR": {
          singular: "Kits de marque"
        },
        "ja-JP": {
          singular: "ブランドキット"
        },
        "ko-KR": {
          singular: "브랜드 키트"
        },
        "pt-BR": {
          singular: "Kits de marca"
        },
        "zh-CN": {
          singular: "品牌工具包"
        }
      }
    }),
    _v27 = (0, _v17.translate)({
      singular: "Brandkit Logo",
      dictionary: {
        es: {
          singular: "Logotipo del kit de marca"
        },
        "de-DE": {
          singular: "Markenkit Logo"
        },
        "fr-FR": {
          singular: "Logo Brandkit"
        },
        "ja-JP": {
          singular: "ブランドキットのロゴ"
        },
        "ko-KR": {
          singular: "Brandkit 로고"
        },
        "pt-BR": {
          singular: "Logotipo do kit de marca"
        },
        "zh-CN": {
          singular: "Brandkit 徽标"
        }
      }
    }),
    _v28 = (0, _v17.translate)({
      singular: "Brandkit Center Card",
      dictionary: {
        es: {
          singular: "Tarjeta central del kit de marca"
        },
        "de-DE": {
          singular: "Markenkit Center-Karte"
        },
        "fr-FR": {
          singular: "Carte centrale Brandkit"
        },
        "ja-JP": {
          singular: "ブランドキットセンターカード"
        },
        "ko-KR": {
          singular: "Brandkit 센터 카드"
        },
        "pt-BR": {
          singular: "Cartão central de kit de marca"
        },
        "zh-CN": {
          singular: "Brandkit 中心卡片"
        }
      }
    }),
    _v29 = (0, _v17.translate)({
      singular: "Create new brand kit",
      dictionary: {
        es: {
          singular: "Crear un nuevo kit de marca"
        },
        "de-DE": {
          singular: "Neues Markenkit erstellen"
        },
        "fr-FR": {
          singular: "Créer un nouveau kit de marque"
        },
        "ja-JP": {
          singular: "新しいブランドキットを作成"
        },
        "ko-KR": {
          singular: "새로운 브랜드 키트 생성"
        },
        "pt-BR": {
          singular: "Criar novo kit de marca"
        },
        "zh-CN": {
          singular: "新建品牌工具包"
        }
      }
    }),
    _v30 = (0, _v17.translate)({
      singular: "Rename Brand kit",
      dictionary: {
        es: {
          singular: "Cambiar el nombre del kit de marca"
        },
        "de-DE": {
          singular: "Markenkit umbenennen"
        },
        "fr-FR": {
          singular: "Renommer le kit de marque"
        },
        "ja-JP": {
          singular: "ブランドキットの名前を変更"
        },
        "ko-KR": {
          singular: "브랜드 키트 이름 변경"
        },
        "pt-BR": {
          singular: "Renomear kit de marca"
        },
        "zh-CN": {
          singular: "重命名品牌工具包"
        }
      }
    }),
    _v31 = (0, _v17.translate)({
      singular: "Brand kit name",
      dictionary: {
        es: {
          singular: "Nombre del kit de marca"
        },
        "de-DE": {
          singular: "Markenkit-Name"
        },
        "fr-FR": {
          singular: "Nom du kit de marque"
        },
        "ja-JP": {
          singular: "ブランドキット名"
        },
        "ko-KR": {
          singular: "브랜드 키트 이름"
        },
        "pt-BR": {
          singular: "Nome do Kit de marca"
        },
        "zh-CN": {
          singular: "品牌工具包名称"
        }
      }
    }),
    _v32 = (0, _v17.translate)({
      singular: "Edit brand kit",
      dictionary: {
        es: {
          singular: "Editar kit de marca"
        },
        "de-DE": {
          singular: "Markenkit bearbeiten"
        },
        "fr-FR": {
          singular: "Modifier le kit de marque"
        },
        "ja-JP": {
          singular: "ブランドキットを編集"
        },
        "ko-KR": {
          singular: "브랜드 키트 편집"
        },
        "pt-BR": {
          singular: "Editar kit de marca"
        },
        "zh-CN": {
          singular: "编辑品牌工具包"
        }
      }
    }),
    _v33 = (0, _v17.translate)({
      singular: "Your brand, effortlessly applied",
      dictionary: {
        es: {
          singular: "Su marca, aplicada sin esfuerzo"
        },
        "de-DE": {
          singular: "Ihre Marke, mühelos angewendet"
        },
        "fr-FR": {
          singular: "Appliquez facilement l'identité visuelle de votre marque"
        },
        "ja-JP": {
          singular: "ブランドの要素を手軽に反映"
        },
        "ko-KR": {
          singular: "손쉽게 적용하는 브랜드"
        },
        "pt-BR": {
          singular: "Um jeito fácil de aplicar a sua marca"
        },
        "zh-CN": {
          singular: "轻松应用您的品牌"
        }
      }
    }),
    _v34 = (0, _v17.translate)({
      singular: "Make it easier to reuse the right logos and colors across videos",
      dictionary: {
        es: {
          singular: "Facilite la reutilización de los logotipos y colores correctos en los videos"
        },
        "de-DE": {
          singular: "Erleichtern Sie die Wiederverwendung der richtigen Logos und Farben in allen Videos"
        },
        "fr-FR": {
          singular: "Facilitez la réutilisation des logos et couleurs appropriés dans toutes vos vidéos"
        },
        "ja-JP": {
          singular: "動画全体で適切なロゴや色を簡単に再利用できるようにします。"
        },
        "ko-KR": {
          singular: "여러 동영상에서 올바른 로고와 색상을 더 쉽게 재사용하세요."
        },
        "pt-BR": {
          singular: "Facilite a reutilização dos logotipos e cores certos em todos os vídeos"
        },
        "zh-CN": {
          singular: "方便您在多个视频中重复使用正确的徽标和颜色"
        }
      }
    }),
    _v35 = (0, _v17.translate)({
      singular: "This brand kit will no longer be available. The logos and colors will still appear in any videos where they have been used before.",
      dictionary: {
        es: {
          singular: "Este kit de marca ya no estará disponible. Los logotipos y colores seguirán apareciendo en todos los videos en los que se hayan utilizado antes."
        },
        "de-DE": {
          singular: "Dieses Markenkit wird nicht mehr verfügbar sein. Die Logos und Farben werden weiterhin in allen Videos angezeigt, in denen sie zuvor verwendet wurden."
        },
        "fr-FR": {
          singular: "Ce kit de marque ne sera plus disponible. Les logos et les couleurs continueront d'apparaître dans toutes les vidéos où ils ont déjà été utilisés."
        },
        "ja-JP": {
          singular: "このブランドキットは今後ご利用いただけなくなります。ただし、ロゴと色は、以前これらが使用された動画には引き続き表示されます。"
        },
        "ko-KR": {
          singular: "이 브랜드 키트는 더 이상 사용할 수 없습니다. 기존에 해당 로고와 색상을 사용한 동영상에는 계속 표시됩니다."
        },
        "pt-BR": {
          singular: "Este kit de marca não estará mais disponível. Os logotipos e as cores continuarão aparecendo nos vídeos em que já tenham sido usados."
        },
        "zh-CN": {
          singular: "此品牌套件将不再可用。徽标和颜色仍将在之前使用过它们的任何视频中显示。"
        }
      }
    }),
    _v36 = (0, _v17.translate)({
      singular: "This logo will still appear in any videos where it has been used before",
      dictionary: {
        es: {
          singular: "Este logotipo seguirá apareciendo en todos los videos en los que se haya utilizado antes."
        },
        "de-DE": {
          singular: "Dieses Logo wird weiterhin in allen Videos erscheinen, in denen es zuvor verwendet wurde"
        },
        "fr-FR": {
          singular: "Ce logo continuera d'apparaître dans toutes les vidéos où il a déjà été utilisé"
        },
        "ja-JP": {
          singular: "このロゴは、以前これが使用されたすべての動画に引き続き表示されます。"
        },
        "ko-KR": {
          singular: "이 로고는 이전에 사용된 모든 동영상에 계속 표시됩니다."
        },
        "pt-BR": {
          singular: "Este logotipo continuará aparecendo em todos os vídeos em que tenha sido usado"
        },
        "zh-CN": {
          singular: "该徽标仍会出现在之前使用过它的所有视频中"
        }
      }
    }),
    _v37 = (0, _v17.translate)({
      singular: "This color will still appear in any videos where it has been used before",
      dictionary: {
        es: {
          singular: "Este color seguirá apareciendo en todos los videos en los que se haya utilizado antes."
        },
        "de-DE": {
          singular: "Diese Farbe wird weiterhin in allen Videos erscheinen, in denen sie zuvor verwendet wurde"
        },
        "fr-FR": {
          singular: "Cette couleur continuera d'apparaître dans toutes les vidéos où elle a déjà été utilisée"
        },
        "ja-JP": {
          singular: "この色は、以前この色が使用された動画には引き続き表示されます。"
        },
        "ko-KR": {
          singular: "이 색상은 이전에 사용된 모든 동영상에 계속 표시됩니다."
        },
        "pt-BR": {
          singular: "Esta cor continuará aparecendo em todos os vídeos em que tenha sido usada"
        },
        "zh-CN": {
          singular: "此颜色仍会出现在之前使用过它的所有视频中"
        }
      }
    });
  (0, _v17.translate)({
    singular: "Switching to Organization Brand Kits",
    dictionary: {
      es: {
        singular: "Cambiar a los kits de marca de la organización"
      },
      "de-DE": {
        singular: "Wechsel zu den Organisations-Markenkits"
      },
      "fr-FR": {
        singular: "Passage aux kits de marque de l'organisation"
      },
      "ja-JP": {
        singular: "組織のブランドキットへの切り替え"
      },
      "ko-KR": {
        singular: "조직 브랜드 키트로 전환하기"
      },
      "pt-BR": {
        singular: "Mudar para kits de marca da organização"
      },
      "zh-CN": {
        singular: "切换到组织品牌工具包"
      }
    }
  });
  let _v38 = _v0 => (0, _v17.translate)({
      singular: 'Delete "{ITEM}"',
      replacements: {
        ITEM: _v0
      },
      dictionary: {
        es: {
          singular: 'Eliminar "{ITEM}"'
        },
        "de-DE": {
          singular: "„{ITEM}“ löschen"
        },
        "fr-FR": {
          singular: "Supprimer « {ITEM} »"
        },
        "ja-JP": {
          singular: "「{ITEM}」を削除"
        },
        "ko-KR": {
          singular: '"{ITEM}" 삭제'
        },
        "pt-BR": {
          singular: 'Excluir "{ITEM}"'
        },
        "zh-CN": {
          singular: "删除“{ITEM}”"
        }
      }
    }),
    _v39 = (0, _v17.translate)({
      singular: "Brand kit created",
      dictionary: {
        es: {
          singular: "Kit de marca creado"
        },
        "de-DE": {
          singular: "Markenkit wurde erstellt"
        },
        "fr-FR": {
          singular: "Kit de marque créé"
        },
        "ja-JP": {
          singular: "ブランドキットが作成されました"
        },
        "ko-KR": {
          singular: "브랜드 키트가 생성되었습니다."
        },
        "pt-BR": {
          singular: "Kit de marca criado"
        },
        "zh-CN": {
          singular: "品牌工具包已创建"
        }
      }
    }),
    _v40 = (0, _v17.translate)({
      singular: "Brand kit deleted",
      dictionary: {
        es: {
          singular: "Kit de marca eliminado"
        },
        "de-DE": {
          singular: "Markenkit gelöscht"
        },
        "fr-FR": {
          singular: "Kit de marque supprimé"
        },
        "ja-JP": {
          singular: "ブランドキットが削除されました"
        },
        "ko-KR": {
          singular: "브랜드 키트가 삭제되었습니다."
        },
        "pt-BR": {
          singular: "Kit de marca excluído"
        },
        "zh-CN": {
          singular: "品牌工具包已删除"
        }
      }
    }),
    _v41 = (0, _v17.translate)({
      singular: "Failed to create brand kit",
      dictionary: {
        es: {
          singular: "Error al crear el kit de marca"
        },
        "de-DE": {
          singular: "Markenkit konnte nicht erstellt werden"
        },
        "fr-FR": {
          singular: "Échec de la création du kit de marque"
        },
        "ja-JP": {
          singular: "ブランドキットを作成できませんでした"
        },
        "ko-KR": {
          singular: "브랜드 키트를 생성하지 못했습니다."
        },
        "pt-BR": {
          singular: "Não foi possível criar o kit de marca"
        },
        "zh-CN": {
          singular: "无法创建品牌工具包"
        }
      }
    }),
    _v42 = (0, _v17.translate)({
      singular: "Failed to delete brand kit",
      dictionary: {
        es: {
          singular: "Error al eliminar el kit de marca"
        },
        "de-DE": {
          singular: "Markenkit konnte nicht gelöscht werden"
        },
        "fr-FR": {
          singular: "Échec de la suppression du kit de marque"
        },
        "ja-JP": {
          singular: "ブランドキットを削除できませんでした"
        },
        "ko-KR": {
          singular: "브랜드 키트를 삭제하지 못했습니다."
        },
        "pt-BR": {
          singular: "Não foi possível excluir o kit de marca"
        },
        "zh-CN": {
          singular: "无法删除品牌工具包"
        }
      }
    }),
    _v43 = (0, _v17.translate)({
      singular: "Failed to update brand kit",
      dictionary: {
        es: {
          singular: "Error al actualizar el kit de marca"
        },
        "de-DE": {
          singular: "Aktualisierung des Markenkits fehlgeschlagen"
        },
        "fr-FR": {
          singular: "Impossible de mettre à jour le kit de marque"
        },
        "ja-JP": {
          singular: "ブランドキットを更新できませんでした"
        },
        "ko-KR": {
          singular: "브랜드 키트를 업데이트하지 못했습니다."
        },
        "pt-BR": {
          singular: "Não foi possível atualizar o kit de marca"
        },
        "zh-CN": {
          singular: "无法更新品牌工具包"
        }
      }
    }),
    _v44 = (0, _v17.translate)({
      singular: "Failed to fetch brand kits",
      dictionary: {
        es: {
          singular: "Error al recuperar los kits de marca"
        },
        "de-DE": {
          singular: "Markenkits konnten nicht abgerufen werden"
        },
        "fr-FR": {
          singular: "Échec de la récupération des kits de marque"
        },
        "ja-JP": {
          singular: "ブランドキットを取得できませんでした"
        },
        "ko-KR": {
          singular: "브랜드 키트를 가져오지 못했습니다."
        },
        "pt-BR": {
          singular: "Não foi possível buscar kits de marca"
        },
        "zh-CN": {
          singular: "无法获取品牌工具包"
        }
      }
    }),
    _v45 = (0, _v17.translate)({
      singular: "Logo added",
      dictionary: {
        es: {
          singular: "Logotipo agregado"
        },
        "de-DE": {
          singular: "Logo hinzugefügt"
        },
        "fr-FR": {
          singular: "Logo ajouté"
        },
        "ja-JP": {
          singular: "ロゴが追加されました"
        },
        "ko-KR": {
          singular: "로고가 추가되었습니다."
        },
        "pt-BR": {
          singular: "Logotipo adicionado"
        },
        "zh-CN": {
          singular: "徽标已添加"
        }
      }
    }),
    _v46 = (0, _v17.translate)({
      singular: "Logo deleted",
      dictionary: {
        es: {
          singular: "Logotipo eliminado"
        },
        "de-DE": {
          singular: "Logo gelöscht"
        },
        "fr-FR": {
          singular: "Logo supprimé"
        },
        "ja-JP": {
          singular: "ロゴが削除されました"
        },
        "ko-KR": {
          singular: "로고가 삭제되었습니다."
        },
        "pt-BR": {
          singular: "Logotipo excluído"
        },
        "zh-CN": {
          singular: "徽标已删除"
        }
      }
    }),
    _v47 = (0, _v17.translate)({
      singular: "Failed to rename logo",
      dictionary: {
        es: {
          singular: "Error al cambiar el nombre del logotipo"
        },
        "de-DE": {
          singular: "Logoumbenennung fehlgeschlagen"
        },
        "fr-FR": {
          singular: "Impossible de renommer le logo"
        },
        "ja-JP": {
          singular: "ロゴ名を変更できませんでした"
        },
        "ko-KR": {
          singular: "로고 이름을 변경하지 못했습니다."
        },
        "pt-BR": {
          singular: "Não foi possível renomear o logotipo"
        },
        "zh-CN": {
          singular: "无法重命名徽标"
        }
      }
    }),
    _v48 = (0, _v17.translate)({
      singular: "Failed to delete logo",
      dictionary: {
        es: {
          singular: "Error al eliminar el logotipo"
        },
        "de-DE": {
          singular: "Logo konnte nicht gelöscht werden"
        },
        "fr-FR": {
          singular: "Impossible de supprimer le logo"
        },
        "ja-JP": {
          singular: "ロゴを削除できませんでした"
        },
        "ko-KR": {
          singular: "로고를 삭제하지 못했습니다."
        },
        "pt-BR": {
          singular: "Não foi possível excluir o logotipo"
        },
        "zh-CN": {
          singular: "无法删除徽标"
        }
      }
    }),
    _v49 = (0, _v17.translate)({
      singular: "Logo upload failed",
      dictionary: {
        es: {
          singular: "Error al subir el logotipo"
        },
        "de-DE": {
          singular: "Logo-Upload fehlgeschlagen"
        },
        "fr-FR": {
          singular: "La mise en ligne du logo a échoué"
        },
        "ja-JP": {
          singular: "ロゴをアップロードできませんでした"
        },
        "ko-KR": {
          singular: "로고를 업로드하지 못했습니다."
        },
        "pt-BR": {
          singular: "Não foi possível carregar o logotipo"
        },
        "zh-CN": {
          singular: "徽标上传失败"
        }
      }
    }),
    _v50 = (0, _v17.translate)({
      singular: "Logo download failed",
      dictionary: {
        es: {
          singular: "Error al descargar el logotipo"
        },
        "de-DE": {
          singular: "Logo-Download ist fehlgeschlagen."
        },
        "fr-FR": {
          singular: "Le téléchargement du logo a échoué"
        },
        "ja-JP": {
          singular: "ロゴをダウンロードできませんでした"
        },
        "ko-KR": {
          singular: "로고를 다운로드하지 못했습니다."
        },
        "pt-BR": {
          singular: "Não foi possível baixar o logotipo"
        },
        "zh-CN": {
          singular: "徽标下载失败"
        }
      }
    });
  (0, _v17.translate)({
    singular: "Color added",
    dictionary: {
      es: {
        singular: "Color agregado"
      },
      "de-DE": {
        singular: "Farbe hinzugefügt"
      },
      "fr-FR": {
        singular: "Couleur ajoutée"
      },
      "ja-JP": {
        singular: "色が追加されました"
      },
      "ko-KR": {
        singular: "색상이 추가되었습니다."
      },
      "pt-BR": {
        singular: "Cor adicionada"
      },
      "zh-CN": {
        singular: "已添加颜色"
      }
    }
  });
  let _v51 = (0, _v17.translate)({
      singular: "Color deleted",
      dictionary: {
        es: {
          singular: "Color eliminado"
        },
        "de-DE": {
          singular: "Farbe wurde gelöscht"
        },
        "fr-FR": {
          singular: "Couleur supprimée"
        },
        "ja-JP": {
          singular: "色が削除されました"
        },
        "ko-KR": {
          singular: "색상이 삭제되었습니다."
        },
        "pt-BR": {
          singular: "Cor excluída"
        },
        "zh-CN": {
          singular: "已删除颜色"
        }
      }
    }),
    _v52 = (0, _v17.translate)({
      singular: "Failed to add color",
      dictionary: {
        es: {
          singular: "Error al agregar el color"
        },
        "de-DE": {
          singular: "Farbe konnte nicht hinzugefügt werden"
        },
        "fr-FR": {
          singular: "Échec de l'ajout de la couleur"
        },
        "ja-JP": {
          singular: "色を追加できませんでした"
        },
        "ko-KR": {
          singular: "색상을 추가하지 못했습니다."
        },
        "pt-BR": {
          singular: "Não foi possível adicionar a cor"
        },
        "zh-CN": {
          singular: "无法添加颜色"
        }
      }
    }),
    _v53 = (0, _v17.translate)({
      singular: "Failed to rename color",
      dictionary: {
        es: {
          singular: "Error al cambiar el nombre del color"
        },
        "de-DE": {
          singular: "Farbe konnte nicht umbenannt werden"
        },
        "fr-FR": {
          singular: "Impossible de renommer la couleur"
        },
        "ja-JP": {
          singular: "色名を変更できませんでした"
        },
        "ko-KR": {
          singular: "색상 이름을 변경하지 못했습니다."
        },
        "pt-BR": {
          singular: "Não foi possível renomear a cor"
        },
        "zh-CN": {
          singular: "无法重命名颜色"
        }
      }
    }),
    _v54 = (0, _v17.translate)({
      singular: "Failed to delete color",
      dictionary: {
        es: {
          singular: "Error al eliminar el color"
        },
        "de-DE": {
          singular: "Farbe konnte nicht gelöscht werden"
        },
        "fr-FR": {
          singular: "Impossible de supprimer la couleur"
        },
        "ja-JP": {
          singular: "色を削除できませんでした"
        },
        "ko-KR": {
          singular: "색상을 삭제하지 못했습니다."
        },
        "pt-BR": {
          singular: "Não foi possível excluir a cor"
        },
        "zh-CN": {
          singular: "无法删除颜色"
        }
      }
    }),
    _v55 = (0, _v17.translate)({
      singular: "Rename color",
      dictionary: {
        es: {
          singular: "Cambiar el nombre del color"
        },
        "de-DE": {
          singular: "Farbe umbenennen"
        },
        "fr-FR": {
          singular: "Renommer la couleur"
        },
        "ja-JP": {
          singular: "色の名前を変更"
        },
        "ko-KR": {
          singular: "색상 이름 변경"
        },
        "pt-BR": {
          singular: "Renomear cor"
        },
        "zh-CN": {
          singular: "重命名颜色"
        }
      }
    }),
    _v56 = (0, _v17.translate)({
      singular: "Rename logo",
      dictionary: {
        es: {
          singular: "Cambiar el nombre del logotipo"
        },
        "de-DE": {
          singular: "Logo umbenennen"
        },
        "fr-FR": {
          singular: "Renommer le logo"
        },
        "ja-JP": {
          singular: "ロゴの名前を変更"
        },
        "ko-KR": {
          singular: "로고 이름 변경"
        },
        "pt-BR": {
          singular: "Renomear logotipo"
        },
        "zh-CN": {
          singular: "重命名徽标"
        }
      }
    }),
    _v57 = (0, _v17.translate)({
      singular: "Logo name",
      dictionary: {
        es: {
          singular: "Nombre del logo"
        },
        "de-DE": {
          singular: "Logo-Name"
        },
        "fr-FR": {
          singular: "Nom du logo"
        },
        "ja-JP": {
          singular: "ロゴ名"
        },
        "ko-KR": {
          singular: "로고 이름"
        },
        "pt-BR": {
          singular: "Nome do logo"
        },
        "zh-CN": {
          singular: "徽标名称"
        }
      }
    }),
    _v58 = (0, _v17.translate)({
      singular: "Color name",
      dictionary: {
        es: {
          singular: "Nombre del color"
        },
        "de-DE": {
          singular: "Farbname"
        },
        "fr-FR": {
          singular: "Nom de la couleur"
        },
        "ja-JP": {
          singular: "色名"
        },
        "ko-KR": {
          singular: "색상 이름"
        },
        "pt-BR": {
          singular: "Nome da cor"
        },
        "zh-CN": {
          singular: "颜色名称"
        }
      }
    }),
    _v59 = (0, _v17.translate)({
      singular: "Logo downloaded",
      dictionary: {
        es: {
          singular: "Logotipo descargado"
        },
        "de-DE": {
          singular: "Logo heruntergeladen"
        },
        "fr-FR": {
          singular: "Logo téléchargé"
        },
        "ja-JP": {
          singular: "ロゴがダウンロードされました"
        },
        "ko-KR": {
          singular: "로고가 다운로드되었습니다."
        },
        "pt-BR": {
          singular: "Logotipo baixado"
        },
        "zh-CN": {
          singular: "徽标已下载"
        }
      }
    }),
    _v60 = (0, _v17.translate)({
      singular: "Select a thumbnail",
      dictionary: {
        es: {
          singular: "Seleccionar una miniatura"
        },
        "de-DE": {
          singular: "Miniaturansicht auswählen"
        },
        "fr-FR": {
          singular: "Sélectionner une vignette"
        },
        "ja-JP": {
          singular: "サムネイルの選択"
        },
        "ko-KR": {
          singular: "섬네일 선택"
        },
        "pt-BR": {
          singular: "Selecionar uma miniatura"
        },
        "zh-CN": {
          singular: "选择缩略图"
        }
      }
    }),
    _v61 = (0, _v17.translate)({
      singular: "You have view access",
      dictionary: {
        es: {
          singular: "Tiene acceso de vista"
        },
        "de-DE": {
          singular: "Sie haben Ansichtszugriff"
        },
        "fr-FR": {
          singular: "Vous avez un accès de visualisation"
        },
        "ja-JP": {
          singular: "閲覧アクセス権を所有しています"
        },
        "ko-KR": {
          singular: "보기 권한이 있습니다."
        },
        "pt-BR": {
          singular: "Você tem acesso para ver"
        },
        "zh-CN": {
          singular: "您具有查看权限"
        }
      }
    }),
    _v62 = (0, _v17.translate)({
      singular: "You have manage access",
      dictionary: {
        es: {
          singular: "Tiene acceso de administrador"
        },
        "de-DE": {
          singular: "Sie haben Verwaltungszugriff"
        },
        "fr-FR": {
          singular: "Vous avez un accès de gestion"
        },
        "ja-JP": {
          singular: "管理アクセス権を所有しています"
        },
        "ko-KR": {
          singular: "관리 액세스 권한이 있습니다."
        },
        "pt-BR": {
          singular: "Você tem permissão para gerenciar"
        },
        "zh-CN": {
          singular: "您拥有管理权限"
        }
      }
    }),
    _v63 = (0, _v17.translate)({
      singular: "This brand kit can only be modified by an organization admin",
      dictionary: {
        es: {
          singular: "Solo un administrador de la organización puede modificar este kit de marca"
        },
        "de-DE": {
          singular: "Dieses Markenkit kann nur von einem Organisationsadmin geändert werden."
        },
        "fr-FR": {
          singular: "Ce kit de marque ne peut être modifié que par un administrateur de l'organisation"
        },
        "ja-JP": {
          singular: "このブランドキットは組織の管理者のみが変更できます"
        },
        "ko-KR": {
          singular: "이 브랜드 키트는 조직 관리자만 수정할 수 있습니다."
        },
        "pt-BR": {
          singular: "Este kit de marca só pode ser modificado por um administrador da organização"
        },
        "zh-CN": {
          singular: "此品牌工具包只能由组织管理员修改"
        }
      }
    }),
    _v64 = (0, _v17.translate)({
      singular: "Brand kit options",
      dictionary: {
        es: {
          singular: "Opciones del kit de marca"
        },
        "de-DE": {
          singular: "Optionen für Markenkits"
        },
        "fr-FR": {
          singular: "Options de kit de marque"
        },
        "ja-JP": {
          singular: "ブランドキットのオプション"
        },
        "ko-KR": {
          singular: "브랜드 키트 옵션"
        },
        "pt-BR": {
          singular: "Opções do kit de marca"
        },
        "zh-CN": {
          singular: "品牌工具包选项"
        }
      }
    }),
    _v65 = (0, _v17.translate)({
      singular: "Change Thumbnail",
      dictionary: {
        es: {
          singular: "Cambiar miniatura"
        },
        "de-DE": {
          singular: "Miniaturansicht ändern"
        },
        "fr-FR": {
          singular: "Changer la vignette"
        },
        "ja-JP": {
          singular: "サムネイルを変更"
        },
        "ko-KR": {
          singular: "섬네일 변경"
        },
        "pt-BR": {
          singular: "Alterar miniatura"
        },
        "zh-CN": {
          singular: "更改缩略图"
        }
      }
    }),
    _v66 = (0, _v17.translate)({
      singular: "Rename",
      dictionary: {
        es: {
          singular: "Cambiar de nombre"
        },
        "de-DE": {
          singular: "Neu benennen"
        },
        "fr-FR": {
          singular: "Renommer"
        },
        "ja-JP": {
          singular: "名前を変更"
        },
        "ko-KR": {
          singular: "이름 변경"
        },
        "pt-BR": {
          singular: "Renomear"
        },
        "zh-CN": {
          singular: "重新命名"
        }
      }
    }),
    _v67 = (0, _v17.translate)({
      singular: "Download",
      dictionary: {
        es: {
          singular: "Descargar"
        },
        "de-DE": {
          singular: "Herunterladen"
        },
        "fr-FR": {
          singular: "Télécharger "
        },
        "ja-JP": {
          singular: "ダウンロード"
        },
        "ko-KR": {
          singular: "다운로드"
        },
        "pt-BR": {
          singular: "Baixar"
        },
        "zh-CN": {
          singular: "下载"
        }
      }
    }),
    _v68 = (0, _v17.translate)({
      singular: "Delete",
      dictionary: {
        es: {
          singular: "Eliminar"
        },
        "de-DE": {
          singular: "Löschen"
        },
        "fr-FR": {
          singular: "Supprimer"
        },
        "ja-JP": {
          singular: "削除"
        },
        "ko-KR": {
          singular: "삭제"
        },
        "pt-BR": {
          singular: "Excluir"
        },
        "zh-CN": {
          singular: "删除"
        }
      }
    }),
    _v69 = (0, _v17.translate)({
      singular: "Thumbnail updated",
      dictionary: {
        es: {
          singular: "Se actualizó la miniatura"
        },
        "de-DE": {
          singular: "Vorschaubild aktualisiert"
        },
        "fr-FR": {
          singular: "Vignette mise à jour"
        },
        "ja-JP": {
          singular: "サムネイルが更新されました"
        },
        "ko-KR": {
          singular: "썸네일 업데이트 완료"
        },
        "pt-BR": {
          singular: "Miniatura atualizada"
        },
        "zh-CN": {
          singular: "缩略图已更新"
        }
      }
    }),
    _v70 = (0, _v17.translate)({
      singular: "Failed to update thumbnail",
      dictionary: {
        es: {
          singular: "No se pudo actualizar la miniatura"
        },
        "de-DE": {
          singular: "Aktualisierung des Vorschaubildes fehlgeschlagen"
        },
        "fr-FR": {
          singular: "Échec de mise à jour de la vignette"
        },
        "ja-JP": {
          singular: "サムネイルを更新できませんでした"
        },
        "ko-KR": {
          singular: "썸네일 업데이트 실패"
        },
        "pt-BR": {
          singular: "Não foi possível atualizar a miniatura"
        },
        "zh-CN": {
          singular: "无法更新缩略图"
        }
      }
    });
  _v0.s(["ADD_COLOR_TEXT", 0, _v25, "BRANDKITS_COLOR_DELETE_MESSAGE", 0, _v37, "BRANDKITS_DELETE_HEADER", 0, _v38, "BRANDKITS_DELETE_MESSAGE", 0, _v35, "BRANDKITS_EMPTY_STATE_FIRST_LINE", 0, _v33, "BRANDKITS_EMPTY_STATE_SECOND_LINE", 0, _v34, "BRANDKITS_LOGO_DELETE_MESSAGE", 0, _v36, "BRANDKITS_PAGE_NAME", 0, _v26, "BRANDKIT_CENTER_CARD", 0, _v28, "BRANDKIT_CREATED_SUCCESSFULLY", 0, _v39, "BRANDKIT_DELETED_SUCCESSFULLY", 0, _v40, "BRANDKIT_LOCKED_TOOLTIP", 0, _v64, "BRANDKIT_LOGO", 0, _v27, "BRANDKIT_NAME_LABEL", 0, _v31, "BRANDKIT_UPDATED_SUCCESSFULLY", 0, _v0 => (0, _v17.translate)({
    singular: "Brand kit updated {ITEM}",
    replacements: {
      ITEM: _v0
    },
    dictionary: {
      es: {
        singular: "Kit de marca actualizado {ITEM}"
      },
      "de-DE": {
        singular: "Markenkit aktualisiert {ITEM}"
      },
      "fr-FR": {
        singular: "Kit de marque mis à jour {ITEM}"
      },
      "ja-JP": {
        singular: "ブランドキットが更新されました（{ITEM}）"
      },
      "ko-KR": {
        singular: "브랜드 키트의 {ITEM}이(가) 업데이트되었습니다."
      },
      "pt-BR": {
        singular: "Kit de marca atualizado {ITEM}"
      },
      "zh-CN": {
        singular: "品牌工具包已更新 {ITEM}"
      }
    }
  }), "CANCEL_BUTTON_TEXT", 0, _v21, "CHANGE_THUMBNAIL", 0, _v65, "CHARACTERS", 0, _v18, "CHARACTER_COUNT_WARNING_THRESHOLD", 0, 27, "COLOR_NAME", 0, _v58, "COLOR_PALLETE_HEIGHT", 0, "1.5rem", "COLOR_SUCCESSFULLY_DELETED", 0, _v51, "COLOR_SUCCESSFULLY_RENAMED", 0, _v0 => (0, _v17.translate)({
    singular: "Color renamed to {ITEM}",
    replacements: {
      ITEM: _v0
    },
    dictionary: {
      es: {
        singular: "Se cambió el nombre del color a {ITEM}"
      },
      "de-DE": {
        singular: "Farbe in {ITEM} umbenannt"
      },
      "fr-FR": {
        singular: "Couleur renommée {ITEM}"
      },
      "ja-JP": {
        singular: "色名が{ITEM}に変更されました"
      },
      "ko-KR": {
        singular: "색상 이름이 {ITEM}(으)로 변경되었습니다."
      },
      "pt-BR": {
        singular: "Cor renomeada para {ITEM}"
      },
      "zh-CN": {
        singular: "颜色重命名为 {ITEM}"
      }
    }
  }), "CONFIRM_BUTTON_TEXT", 0, _v20, "CREATE_BUTTON_TEXT", 0, _v19, "DEFAULT_COLOR", 0, "#000000", "DELETE", 0, _v68, "DELETE_BUTTON_TEXT", 0, _v22, "DOWNLOAD", 0, _v67, "EDIT_BRANDKIT_NAME", 0, _v30, "EDIT_BRANDKIT_TITLE", 0, _v32, "EMPTY_ARIA_LABEL", 0, "", "EMPTY_LINK", 0, "#", "ENTER_KEY", 0, "Enter", "FAILED_TO_ADD_COLOR", 0, _v52, "FAILED_TO_CREATE_BRANDKIT", 0, _v41, "FAILED_TO_DELETE_BRANDKIT", 0, _v42, "FAILED_TO_DELETE_COLOR", 0, _v54, "FAILED_TO_DELETE_LOGO", 0, _v48, "FAILED_TO_FETCH_BRANDKITS", 0, _v44, "FAILED_TO_RENAME_COLOR", 0, _v53, "FAILED_TO_RENAME_LOGO", 0, _v47, "FAILED_TO_UPDATE_BRANDKIT", 0, _v43, "FAILED_TO_UPDATE_THUMBNAIL", 0, _v70, "HEADER_MIN_HEIGHT_VALUE", 0, "60px", "HEADER_MIN_WIDTH_VALUE", 0, "300px", "LOCKED_BY_ADMIN", 0, _v63, "LOGO_DOWNLOAD_FAILED", 0, _v50, "LOGO_DOWNLOAD_SUCCESS", 0, _v59, "LOGO_NAME", 0, _v57, "LOGO_SUCCESSFULLY_ADDED", 0, _v45, "LOGO_SUCCESSFULLY_DELETED", 0, _v46, "LOGO_SUCCESSFULLY_RENAMED", 0, _v0 => (0, _v17.translate)({
    singular: "Logo renamed to {ITEM}",
    replacements: {
      ITEM: _v0
    },
    dictionary: {
      es: {
        singular: "Se cambió el nombre del logotipo a {ITEM}"
      },
      "de-DE": {
        singular: "Logo wurde zu {ITEM} umbenannt"
      },
      "fr-FR": {
        singular: "Logo renommé {ITEM}"
      },
      "ja-JP": {
        singular: "ロゴ名が{ITEM}に変更されました"
      },
      "ko-KR": {
        singular: "로고의 이름이 {ITEM}(으)로 변경되었습니다."
      },
      "pt-BR": {
        singular: "Logotipo renomeado para {ITEM}"
      },
      "zh-CN": {
        singular: "徽标已重命名为 {ITEM}"
      }
    }
  }), "LOGO_UPLOAD_FAILED", 0, _v49, "MANAGE_ACCESS", 0, _v62, "MAX_BRANDKIT_NAME_LENGTH", 0, 32, "MAX_COLORS_IN_BRANDKIT", 0, 8, "NEW_BRANDKIT_BUTTON_TEXT", 0, _v24, "NEW_BRANDKIT_NAME", 0, _v29, "RENAME", 0, _v66, "RENAME_COLOR", 0, _v55, "RENAME_LOGO", 0, _v56, "SAVE_BUTTON_TEXT", 0, _v23, "SELECT_THUMBNAIL", 0, _v60, "THUMBNAIL_UPDATED_SUCCESSFULLY", 0, _v69, "VIEW_ACCESS", 0, _v61], 0);
  var _v71 = _v0.i(0),
    _v72 = _v0.i(0),
    _v73 = _v0.i(0),
    _v74 = _v0.i(0),
    _v75 = _v0.i(0),
    _v76 = _v0.i(0),
    _v77 = _v0.i(0),
    _v78 = _v0.i(0),
    _v79 = _v0.i(0),
    _v80 = _v0.i(0);
  _v0.s(["BrandkitDeleteDialog", 0, ({
    deleteMessage: _v0 = "",
    item: _v1 = {
      name: ""
    },
    isOpen: _v2 = !1,
    onDelete: _v3,
    onCancel: _v4,
    isProcessing: _v5 = !1
  }) => {
    let _v6 = _v38(_v1?.name);
    return (0, _v71.jsxs)(_v72.Modal, {
      isOpen: _v2,
      onClose: _v4,
      children: [(0, _v71.jsx)(_v73.ModalOverlay, {}), (0, _v71.jsxs)(_v74.ModalContent, {
        children: [(0, _v71.jsx)(_v75.ModalHeader, {
          maxWidth: "calc(100% - px)",
          children: _v6
        }), (0, _v71.jsx)(_v76.ModalCloseButton, {}), (0, _v71.jsx)(_v77.ModalBody, {
          children: (0, _v71.jsx)(_v78.Paragraph, {
            size: "md",
            children: _v0
          })
        }), (0, _v71.jsxs)(_v79.ModalFooter, {
          children: [(0, _v71.jsx)(_v80.Button, {
            variant: "secondary",
            size: "md",
            onClick: _v4,
            children: _v21
          }), (0, _v71.jsx)(_v80.Button, {
            variant: "destructive",
            size: "md",
            onClick: _v3,
            isLoading: _v5,
            children: _v22
          })]
        })]
      })]
    });
  }], 0);
}