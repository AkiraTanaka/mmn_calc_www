webpackJsonp([0],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Kantsu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__kotsu__ = __webpack_require__(29);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 *  槓子クラス
 */
var Kantsu = /** @class */ (function (_super) {
    __extends(Kantsu, _super);
    function Kantsu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /* 上がり形取得 */
    Kantsu.prototype.getAgariType = function () {
        return "";
    };
    /* 牌数取得 */
    Kantsu.prototype.getHaiCount = function () {
        return 3;
    };
    return Kantsu;
}(__WEBPACK_IMPORTED_MODULE_0__kotsu__["a" /* Kotsu */]));

//# sourceMappingURL=kantsu.js.map

/***/ }),

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YakuMan; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_yaku__ = __webpack_require__(287);

/**
 *  役管理クラス
 */
var YakuMan = /** @class */ (function () {
    function YakuMan() {
    }
    /** 1飜 */
    YakuMan.TANYAO = new __WEBPACK_IMPORTED_MODULE_0__models_yaku__["a" /* Yaku */]("断么九", "タンヤオ", 1, false);
    YakuMan.PINHU = new __WEBPACK_IMPORTED_MODULE_0__models_yaku__["a" /* Yaku */]("平和", "ピンフ", 1, false);
    YakuMan.I_PECO = new __WEBPACK_IMPORTED_MODULE_0__models_yaku__["a" /* Yaku */]("一盃口", "イーペーコー", 1, false);
    YakuMan.YAKU_HAI = new __WEBPACK_IMPORTED_MODULE_0__models_yaku__["a" /* Yaku */]("役牌", "ヤクハイ", 1, false);
    /** 2飜 */
    YakuMan.CHI_TOI = new __WEBPACK_IMPORTED_MODULE_0__models_yaku__["a" /* Yaku */]("七対子", "チートイツ", 2, false); // 未
    YakuMan.ITSUU = new __WEBPACK_IMPORTED_MODULE_0__models_yaku__["a" /* Yaku */]("一気通貫", "イッキツウカン", 2, true);
    YakuMan.TOI_TOI = new __WEBPACK_IMPORTED_MODULE_0__models_yaku__["a" /* Yaku */]("対々和", "トイトイホー", 2, false);
    YakuMan.SAN_ANKO = new __WEBPACK_IMPORTED_MODULE_0__models_yaku__["a" /* Yaku */]("三暗刻", "サンアンコウ", 2, false);
    YakuMan.SAN_KANTSU = new __WEBPACK_IMPORTED_MODULE_0__models_yaku__["a" /* Yaku */]("三槓子", "サンカンツ", 2, false);
    YakuMan.SHOU_SAN_GEN = new __WEBPACK_IMPORTED_MODULE_0__models_yaku__["a" /* Yaku */]("小三元", "ショウサンゲン", 2, false);
    YakuMan.SANSHIKI_DOUJUN = new __WEBPACK_IMPORTED_MODULE_0__models_yaku__["a" /* Yaku */]("三色同順", "サンショクドウジュン", 2, true);
    YakuMan.SANSHIKI_DOUKO = new __WEBPACK_IMPORTED_MODULE_0__models_yaku__["a" /* Yaku */]("三色同刻", "サンショクドウコウ", 2, true);
    YakuMan.TYANTA = new __WEBPACK_IMPORTED_MODULE_0__models_yaku__["a" /* Yaku */]("混全帯幺九", "チャンタ", 2, true);
    /** 3飜 */
    YakuMan.RYAN_PECO = new __WEBPACK_IMPORTED_MODULE_0__models_yaku__["a" /* Yaku */]("二盃口", "リャンペーコー", 3, false);
    YakuMan.JUN_TYAN = new __WEBPACK_IMPORTED_MODULE_0__models_yaku__["a" /* Yaku */]("純全帯公九", "ジュンチャン", 3, true);
    /** 4飜 */
    YakuMan.HON_ROUTOU = new __WEBPACK_IMPORTED_MODULE_0__models_yaku__["a" /* Yaku */]("混老頭", "ホンロウトウ", 4, true);
    YakuMan.HONNITSU = new __WEBPACK_IMPORTED_MODULE_0__models_yaku__["a" /* Yaku */]("混一色", "ホンイーソー", 4, true);
    /** 6飜 */
    YakuMan.CHINITSU = new __WEBPACK_IMPORTED_MODULE_0__models_yaku__["a" /* Yaku */]("清一色", "チンイーソー", 6, true);
    /** 13飜 */
    YakuMan.KOKUSHI = new __WEBPACK_IMPORTED_MODULE_0__models_yaku__["a" /* Yaku */]("国士無双", "コクシムソウ", 13, false);
    YakuMan.SU_ANKO = new __WEBPACK_IMPORTED_MODULE_0__models_yaku__["a" /* Yaku */]("四暗刻", "スーアンコウ", 13, false);
    YakuMan.DAI_SAN_GEN = new __WEBPACK_IMPORTED_MODULE_0__models_yaku__["a" /* Yaku */]("大三元", "ダイサンゲン", 13, false);
    YakuMan.CHIN_ROUTOU = new __WEBPACK_IMPORTED_MODULE_0__models_yaku__["a" /* Yaku */]("清老頭", "チンロウトウ", 13, true);
    YakuMan.TSU_I_SO = new __WEBPACK_IMPORTED_MODULE_0__models_yaku__["a" /* Yaku */]("字一色", "ツーイーソー", 13, true);
    YakuMan.RYU_I_SO = new __WEBPACK_IMPORTED_MODULE_0__models_yaku__["a" /* Yaku */]("緑一色", "リューイーソウ", 13, false);
    YakuMan.SHOU_SUU_SHI = new __WEBPACK_IMPORTED_MODULE_0__models_yaku__["a" /* Yaku */]("小四喜", "ショウスーシー", 13, false);
    YakuMan.DAI_SUU_SHI = new __WEBPACK_IMPORTED_MODULE_0__models_yaku__["a" /* Yaku */]("大四喜", "ダイスーシー", 13, false);
    YakuMan.CHUREN = new __WEBPACK_IMPORTED_MODULE_0__models_yaku__["a" /* Yaku */]("九蓮宝燈", "チュウレンポウトウ", 13, false); // 未
    YakuMan.CHI_HO = new __WEBPACK_IMPORTED_MODULE_0__models_yaku__["a" /* Yaku */]("地和", "チーホウ", 13, false); // 未
    YakuMan.TEN_HO = new __WEBPACK_IMPORTED_MODULE_0__models_yaku__["a" /* Yaku */]("天和", "テンホウ", 13, false); // 未
    /** 古役 */
    YakuMan.BENI_KUJAKU = new __WEBPACK_IMPORTED_MODULE_0__models_yaku__["a" /* Yaku */]("紅孔雀", "ベニクジャク", 13, false);
    YakuMan.DAI_CHI_SEI = new __WEBPACK_IMPORTED_MODULE_0__models_yaku__["a" /* Yaku */]("大七星", "ダイチーセイ", 13, false); // 未
    /** 26飜 */
    YakuMan.SU_TAN = new __WEBPACK_IMPORTED_MODULE_0__models_yaku__["a" /* Yaku */]("四暗刻単騎", "スーアンコウタンキ", 26, false);
    YakuMan.SU_KANTSU = new __WEBPACK_IMPORTED_MODULE_0__models_yaku__["a" /* Yaku */]("四槓子", "スーカンツ", 26, false);
    YakuMan.JUNSEI_CHUREN = new __WEBPACK_IMPORTED_MODULE_0__models_yaku__["a" /* Yaku */]("純正九蓮宝燈", "ジュンセイチュウレンポウトウ", 26, false); // 未
    /** 役一覧 */
    YakuMan.ALL_YAKU_LIST = [
        YakuMan.PINHU
    ];
    return YakuMan;
}());

//# sourceMappingURL=yakuMan.js.map

/***/ }),

/***/ 116:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseYakuJudge; });
/**
 *  ベース役判定クラス
 */
var BaseYakuJudge = /** @class */ (function () {
    function BaseYakuJudge() {
    }
    /**
     * 役判定
     * @param combMentsu 組み合わせメンツ
     * @return 判定回数
     */
    BaseYakuJudge.prototype.judge = function (combMentsu) {
        var yakuList = this.judgeYaku(combMentsu);
        combMentsu.addYakuList(yakuList);
    };
    return BaseYakuJudge;
}());

//# sourceMappingURL=baseYakuJudge.js.map

/***/ }),

/***/ 157:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 157;

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalcTehaiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_HaiMan__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_models_hai__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_tehai__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__selectNakiMentsu_selectNakiMentsu__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CalcTehaiPage = /** @class */ (function () {
    function CalcTehaiPage(navCtrl, alertCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.selectHaiMap = new Array();
        // 画面制御
        this.nakiFlg = false;
        this.tehai = new __WEBPACK_IMPORTED_MODULE_4__common_tehai__["a" /* Tehai */]();
        this.haiTypeList = ["萬子", "筒子", "索子"];
    }
    CalcTehaiPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        // 数牌
        this.haiTypeList.forEach(function (haiType) {
            var haiList = __WEBPACK_IMPORTED_MODULE_2__common_HaiMan__["a" /* HaiMan */].getHaiListByTypeName(haiType);
            _this.selectHaiMap.push(__WEBPACK_IMPORTED_MODULE_2__common_HaiMan__["a" /* HaiMan */].getHaiListByTypeName(haiType));
        });
        // 字牌
        this.selectHaiMap.push(__WEBPACK_IMPORTED_MODULE_2__common_HaiMan__["a" /* HaiMan */].getJihaiList());
    };
    CalcTehaiPage.prototype.selectHai = function (selectedHai) {
        var newHai = __WEBPACK_IMPORTED_MODULE_3__common_models_hai__["a" /* Hai */].deepCopy(selectedHai);
        if (this.nakiFlg) {
            this.addNakiMentsu(newHai);
        }
        else {
            this.addHai(newHai);
        }
        ;
    };
    CalcTehaiPage.prototype.addNakiMentsu = function (selectedHai) {
        var _this = this;
        // 候補一覧をモーダルで表示して選択する
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__selectNakiMentsu_selectNakiMentsu__["a" /* SelectNakiMentsuPage */], { "selectedHai": selectedHai });
        modal.onDidDismiss(function (mentsu) {
            if (mentsu != null) {
                var message = _this.tehai.canAddMentsu(mentsu);
                if (message != null) {
                    _this.alertMessage(message);
                }
                else {
                    _this.tehai.addDekiMentsuList(mentsu);
                }
            }
        });
        modal.present();
    };
    CalcTehaiPage.prototype.addHai = function (selectedHai) {
        var message = this.tehai.canAddHai([selectedHai]);
        if (message != null) {
            this.alertMessage(message);
        }
        else {
            this.tehai.addHai(selectedHai);
        }
    };
    CalcTehaiPage.prototype.alertMessage = function (message) {
        if (message != null) {
            var alert_1 = this.alertCtrl.create({
                title: message,
                buttons: ['OK']
            });
            alert_1.present();
        }
    };
    CalcTehaiPage.prototype.deleteHai = function (selectedHai) {
        this.tehai.deleteHai(selectedHai);
    };
    CalcTehaiPage.prototype.deleteMentsu = function (selectedMentsu) {
        this.tehai.deleteDekiMentsu(selectedMentsu);
    };
    CalcTehaiPage.prototype.clearList = function () {
        this.tehai.clearHaiList();
    };
    CalcTehaiPage.prototype.setNakiFlg = function () {
        this.nakiFlg = !this.nakiFlg;
    };
    CalcTehaiPage.prototype.setDetail = function () {
    };
    CalcTehaiPage.prototype.getNakiButtonValue = function () {
        return this.nakiFlg ? "牌選択モード" : "鳴きモード";
    };
    CalcTehaiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-calcTehai',template:/*ion-inline-start:"/Users/tanaka/Desktop/cordova_working/mmn_calc/src/pages/calcTehai/calcTehai.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>点数計算</ion-title>\n    </ion-navbar>  \n</ion-header>\n\n<ion-content class="grid-basic-page">\n    <p padding>牌を選択してください。</p>\n    <ion-grid>\n        <ion-row *ngFor="let row of selectHaiMap">\n            <ion-col *ngFor="let hai of row" >\n                <ion-img src="{{hai.getPngPath()}}" alt="{{hai.getName()}}" (click)="selectHai(hai)"></ion-img>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n    <p padding>【手牌】</p>\n    <ion-grid>\n        <ion-row justify-content-start>\n            <ion-col *ngFor="let hai of tehai.getHaiListWithOutAgariHai()">\n                <img src="{{hai.getPngPath()}}" alt="{{hai.getName()}}" (click)="deleteHai(hai)">\n            </ion-col>\n            <ng-container *ngIf="tehai.getAgariHai() != null">\n                <ion-col>\n                    <img class="yoko" src="{{tehai.getAgariHai().getPngPath()}}" alt="{{tehai.getAgariHai().getName()}}" (click)="deleteHai(tehai.getAgariHai())">\n                </ion-col>\n            </ng-container>\n            <ion-col col-3></ion-col>\n            <ng-container *ngFor="let dekiMentsu of tehai.getDekiMentsuList()">\n                <ion-col *ngFor="let dekiMentusHai of dekiMentsu.getHaiList()">\n                    <img class="{{dekiMentusHai.getVisualClass()}}" src="{{dekiMentusHai.getPngPath()}}" alt="{{dekiMentusHai.getName()}}" (click)="deleteMentsu(dekiMentsu)">\n                </ion-col>\n            </ng-container>\n        </ion-row>\n        <ion-row>\n            <button ion-button (click)="clearList()">Clear</button>\n            <button ion-button (click)="setNakiFlg()">{{ getNakiButtonValue() }}</button>\n            <button ion-button (click)="setDetail()">詳細</button>\n        </ion-row>\n    </ion-grid>\n\n    <p padding>【メンツ】</p>\n    <ion-grid>\n        <ion-row class="mentsu" *ngFor="let combMentsu of tehai.getCombMentsuList()">\n            <ion-col *ngFor="let mentsu of combMentsu.getMentsuList()">\n                <ion-grid>\n                    <ion-row>\n                        <ion-col *ngFor="let hai of mentsu.getHaiList()">\n                            <img class="{{hai.getVisualClass()}}" src="{{hai.getPngPath()}}" alt="{{hai.getName()}}">\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n    <p padding>【点数】</p>\n    <ion-grid class="score">\n        <ion-row padding>\n            <ion-col *ngFor="let yaku of tehai.getYakuList()" col-1>\n                <div>{{yaku.getName()}}</div>\n            </ion-col>\n        </ion-row>\n        <ion-row padding>\n            <ion-col col-1><div>{{tehai.getTotalHan()}}飜</div></ion-col>\n            <ion-col col-1><div>{{tehai.getTotalHu()}}符</div></ion-col>\n        </ion-row>\n        <ion-row padding>\n            <ion-col col-1><div>{{tehai.getTotal()}}</div></ion-col>\n            <ion-col col-1><div>{{tehai.getScore()}}点</div></ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/tanaka/Desktop/cordova_working/mmn_calc/src/pages/calcTehai/calcTehai.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], CalcTehaiPage);
    return CalcTehaiPage;
}());

//# sourceMappingURL=calcTehai.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Anko; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__kotsu__ = __webpack_require__(29);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 *  暗刻クラス
 */
var Anko = /** @class */ (function (_super) {
    __extends(Anko, _super);
    function Anko() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /* 符取得 */
    Anko.prototype.getHu = function () {
        return this.isYaochu() ? 8 : 4;
    };
    return Anko;
}(__WEBPACK_IMPORTED_MODULE_0__kotsu__["a" /* Kotsu */]));

//# sourceMappingURL=anko.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnShun; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shuntsu__ = __webpack_require__(56);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 *  暗順クラス
 */
var AnShun = /** @class */ (function (_super) {
    __extends(AnShun, _super);
    function AnShun() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AnShun;
}(__WEBPACK_IMPORTED_MODULE_0__shuntsu__["a" /* Shuntsu */]));

//# sourceMappingURL=anshun.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Toitsu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mentsu__ = __webpack_require__(36);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 *  対子クラス
 */
var Toitsu = /** @class */ (function (_super) {
    __extends(Toitsu, _super);
    function Toitsu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /* 符取得 */
    Toitsu.prototype.getHu = function () {
        var hu = 0;
        if (this.isJihai()) {
            // 蓮風対子?1
            hu = 2;
        }
        if (this.getAgariType() == __WEBPACK_IMPORTED_MODULE_0__mentsu__["a" /* Mentsu */].TANKI) {
            hu += 2;
        }
        return hu;
    };
    /* 上がり形取得 */
    Toitsu.prototype.getAgariType = function () {
        if (this.isAgari()) {
            return __WEBPACK_IMPORTED_MODULE_0__mentsu__["a" /* Mentsu */].TANKI;
        }
        return "";
    };
    return Toitsu;
}(__WEBPACK_IMPORTED_MODULE_0__mentsu__["a" /* Mentsu */]));

//# sourceMappingURL=toitsu.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Minko; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__kotsu__ = __webpack_require__(29);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 *  明刻クラス
 */
var Minko = /** @class */ (function (_super) {
    __extends(Minko, _super);
    function Minko() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /* 符取得 */
    Minko.prototype.getHu = function () {
        return this.isYaochu() ? 4 : 2;
    };
    return Minko;
}(__WEBPACK_IMPORTED_MODULE_0__kotsu__["a" /* Kotsu */]));

//# sourceMappingURL=minko.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MinShun; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shuntsu__ = __webpack_require__(56);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 *  明順クラス
 */
var MinShun = /** @class */ (function (_super) {
    __extends(MinShun, _super);
    function MinShun() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MinShun;
}(__WEBPACK_IMPORTED_MODULE_0__shuntsu__["a" /* Shuntsu */]));

//# sourceMappingURL=minshun.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectNakiMentsuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_models_hai__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_HaiMan__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_models_mentsu_minshun__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_models_mentsu_minko__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_models_mentsu_minkan__ = __webpack_require__(305);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SelectNakiMentsuPage = /** @class */ (function () {
    function SelectNakiMentsuPage(platform, params, viewCtrl) {
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
        var selectedHai = this.params.get('selectedHai');
        var nakiMentsuList = new Array();
        var baseHai = __WEBPACK_IMPORTED_MODULE_2__common_models_hai__["a" /* Hai */].deepCopy(selectedHai);
        selectedHai.setNakiFlg(true);
        // 明順
        if (selectedHai.isJihai() == false) {
            var haiType = baseHai.getType();
            var haiCode = Number.parseInt(baseHai.getCode());
            if (haiCode >= 3) {
                var shunHaiListR = new Array();
                shunHaiListR.push(selectedHai);
                shunHaiListR.push(__WEBPACK_IMPORTED_MODULE_3__common_HaiMan__["a" /* HaiMan */].getHaiByTypeCode(haiType, (haiCode - 2).toString()));
                shunHaiListR.push(__WEBPACK_IMPORTED_MODULE_3__common_HaiMan__["a" /* HaiMan */].getHaiByTypeCode(haiType, (haiCode - 1).toString()));
                nakiMentsuList.push(new __WEBPACK_IMPORTED_MODULE_4__common_models_mentsu_minshun__["a" /* MinShun */](shunHaiListR, new Array()));
            }
            if (haiCode >= 2 && haiCode <= 8) {
                var minshunHaiListC = new Array();
                minshunHaiListC.push(selectedHai);
                minshunHaiListC.push(__WEBPACK_IMPORTED_MODULE_3__common_HaiMan__["a" /* HaiMan */].getHaiByTypeCode(haiType, (haiCode - 1).toString()));
                minshunHaiListC.push(__WEBPACK_IMPORTED_MODULE_3__common_HaiMan__["a" /* HaiMan */].getHaiByTypeCode(haiType, (haiCode + 1).toString()));
                nakiMentsuList.push(new __WEBPACK_IMPORTED_MODULE_4__common_models_mentsu_minshun__["a" /* MinShun */](minshunHaiListC, new Array()));
            }
            if (haiCode <= 7) {
                var minshunHaiListL = new Array();
                minshunHaiListL.push(selectedHai);
                minshunHaiListL.push(__WEBPACK_IMPORTED_MODULE_3__common_HaiMan__["a" /* HaiMan */].getHaiByTypeCode(haiType, (haiCode + 1).toString()));
                minshunHaiListL.push(__WEBPACK_IMPORTED_MODULE_3__common_HaiMan__["a" /* HaiMan */].getHaiByTypeCode(haiType, (haiCode + 2).toString()));
                nakiMentsuList.push(new __WEBPACK_IMPORTED_MODULE_4__common_models_mentsu_minshun__["a" /* MinShun */](minshunHaiListL, new Array()));
            }
        }
        // 明刻
        var minkoHaiList = new Array();
        minkoHaiList.push(selectedHai);
        for (var index = 1; index < 3; index++) {
            minkoHaiList.push(__WEBPACK_IMPORTED_MODULE_2__common_models_hai__["a" /* Hai */].deepCopy(baseHai));
        }
        nakiMentsuList.push(new __WEBPACK_IMPORTED_MODULE_5__common_models_mentsu_minko__["a" /* Minko */](minkoHaiList, new Array()));
        // 明槓
        var minkanHaiList = new Array();
        minkanHaiList.push(selectedHai);
        for (var index = 1; index < 4; index++) {
            minkanHaiList.push(__WEBPACK_IMPORTED_MODULE_2__common_models_hai__["a" /* Hai */].deepCopy(baseHai));
        }
        nakiMentsuList.push(new __WEBPACK_IMPORTED_MODULE_6__common_models_mentsu_minkan__["a" /* Minkan */](minkanHaiList, new Array()));
        this.nakiMentsuList = nakiMentsuList;
    }
    SelectNakiMentsuPage.prototype.selectMentsu = function (mentsu) {
        this.viewCtrl.dismiss(mentsu);
    };
    SelectNakiMentsuPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    SelectNakiMentsuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-selectNakiMentsu',template:/*ion-inline-start:"/Users/tanaka/Desktop/cordova_working/mmn_calc/src/pages/selectNakiMentsu/selectNakiMentsu.html"*/'<ion-header>\n    <ion-toolbar>\n        <ion-title>\n        鳴きメンツ選択\n        </ion-title>\n        <ion-buttons start>\n        <button ion-button (click)="dismiss()">\n            <span ion-text color="primary" showWhen="ios">Cancel</span>\n            <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n        </button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class="grid-basic-page">\n    <p padding>鳴きメンツを選択してください。</p>\n    <ion-grid>\n        <ion-row class="mentsu" *ngFor="let mentsu of nakiMentsuList">\n            <ion-col *ngFor="let hai of mentsu.getHaiList()"  (click)="selectMentsu(mentsu)">\n                <ion-img class="{{hai.getVisualClass()}}" src="{{hai.getPngPath()}}" alt="{{hai.getName()}}"></ion-img>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/tanaka/Desktop/cordova_working/mmn_calc/src/pages/selectNakiMentsu/selectNakiMentsu.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */]])
    ], SelectNakiMentsuPage);
    return SelectNakiMentsuPage;
}());

//# sourceMappingURL=selectNakiMentsu.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(231);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_calcTehai_calcTehai__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_selectNakiMentsu_selectNakiMentsu__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_calcTehai_calcTehai__["a" /* CalcTehaiPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_selectNakiMentsu_selectNakiMentsu__["a" /* SelectNakiMentsuPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_calcTehai_calcTehai__["a" /* CalcTehaiPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_selectNakiMentsu_selectNakiMentsu__["a" /* SelectNakiMentsuPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_calcTehai_calcTehai__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { TabsPage } from '../pages/tabs/tabs';

var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_calcTehai_calcTehai__["a" /* CalcTehaiPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/tanaka/Desktop/cordova_working/mmn_calc/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/tanaka/Desktop/cordova_working/mmn_calc/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tehai; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_hai__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_combMentsu__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mentsuMan__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_mentsu_kokushi__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__yakuMan__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_mentsu_toitsu__ = __webpack_require__(204);






/**
 *  手牌クラス
 */
var Tehai = /** @class */ (function () {
    function Tehai() {
        this.haiList = new Array(); //  手牌
        this.dekiMentsuList = new Array(); //  出来メンツ一覧
    }
    /**
     * 手牌追加
     * @param hai 牌
     */
    Tehai.prototype.addHai = function (hai) {
        var addHai = __WEBPACK_IMPORTED_MODULE_0__models_hai__["a" /* Hai */].deepCopy(hai);
        if (this.getAllHaiCount() == 13) {
            addHai.setAgariFlg(true);
        }
        this.haiList.push(addHai);
        this.afterChangeHai();
    };
    /**
     * 手牌削除
     * @param hai 牌
     */
    Tehai.prototype.deleteHai = function (hai) {
        var index = this.haiList.indexOf(hai);
        this.haiList.splice(index, 1);
        this.haiList.forEach(function (hai) { return hai.setAgariFlg(false); });
        this.afterChangeHai();
    };
    /* 手牌取得 */
    Tehai.prototype.getHaiList = function () {
        return this.haiList;
    };
    /* 手牌取得 */
    Tehai.prototype.getHaiListWithOutAgariHai = function () {
        return this.haiList.filter(function (hai) { return !hai.isAgari(); });
    };
    /* 手牌クリア */
    Tehai.prototype.clearHaiList = function () {
        this.haiList = new Array();
        this.dekiMentsuList = new Array();
        this.combMentsuList = new Array();
    };
    /* メンツ組み合わせ一覧取得 */
    Tehai.prototype.getCombMentsuList = function () {
        return this.combMentsuList;
    };
    /* 出来メンツ一覧取得 */
    Tehai.prototype.getDekiMentsuList = function () {
        return this.dekiMentsuList;
    };
    /* 出来メンツ追加 */
    Tehai.prototype.addDekiMentsuList = function (mentsu) {
        this.dekiMentsuList.push(mentsu);
        this.afterChangeHai();
    };
    /**
     * 出来メンツ削除
     * @param mentsu 出来メンツ
     */
    Tehai.prototype.deleteDekiMentsu = function (mentsu) {
        var index = this.dekiMentsuList.indexOf(mentsu);
        this.dekiMentsuList.splice(index, 1);
        this.haiList.forEach(function (hai) { return hai.setAgariFlg(false); });
        this.afterChangeHai();
    };
    /* 上がり牌取得 */
    Tehai.prototype.getAgariHai = function () {
        var agariHai = null;
        this.haiList.forEach(function (hai) {
            if (hai.isAgari()) {
                agariHai = hai;
            }
        });
        return agariHai;
    };
    /* 役一覧取得 */
    Tehai.prototype.getYakuList = function () {
        var yakuList = new Array();
        if (this.maxCombMentsu != null) {
            yakuList = this.maxCombMentsu.getYakuList();
        }
        return yakuList;
    };
    /* 飜合計取得 */
    Tehai.prototype.getTotalHan = function () {
        var totalHan = 0;
        if (this.maxCombMentsu != null) {
            totalHan = this.maxCombMentsu.getTotalHan();
        }
        return totalHan;
    };
    /* 符合計取得 */
    Tehai.prototype.getTotalHu = function () {
        var totalHu = 0;
        if (this.maxCombMentsu != null) {
            totalHu = this.maxCombMentsu.getTotalHu();
        }
        return totalHu;
    };
    /* 合計取得 */
    Tehai.prototype.getTotal = function () {
        var total = "";
        if (this.maxCombMentsu != null) {
            total = this.maxCombMentsu.getTotal();
        }
        return total;
    };
    /* 点数取得 */
    Tehai.prototype.getScore = function () {
        var score = 0;
        if (this.maxCombMentsu != null) {
            score = this.maxCombMentsu.getScore();
        }
        return score;
    };
    /**
     * 牌追加可能判定
     * @param addHaiList 追加牌一覧
     * @returns 判定メッセージ
     */
    Tehai.prototype.canAddHai = function (addHaiList) {
        return this.getErrorMessage(addHaiList.length, addHaiList);
    };
    /**
     * メンツ追加可能判定
     * @param addMentsu 追加メンツ
     * @returns 判定メッセージ
     */
    Tehai.prototype.canAddMentsu = function (addMentsu) {
        return this.getErrorMessage(addMentsu.getHaiCount(), addMentsu.getHaiList());
    };
    Tehai.prototype.getErrorMessage = function (addHaiCount, haiList) {
        var _this = this;
        var haiMap = new Map();
        haiList.forEach(function (hai) {
            var haiId = hai.getId();
            if (haiMap.has(haiId) == false) {
                haiMap.set(haiId, []);
            }
            haiMap.get(haiId).push(hai);
        });
        var message = null;
        if (this.getAllHaiCount() + addHaiCount > 14) {
            message = "14牌以上選択できません。";
        }
        else {
            haiMap.forEach(function (haiList, haiId) {
                if (_this.getTeHaiCountById(haiId) + haiList.length > 4) {
                    message = "同一牌は４つまでしか選択できません。";
                }
            });
        }
        return message;
    };
    /* 全ての牌一覧取得 */
    Tehai.prototype.getAllHaiList = function () {
        var allHaiList = new Array();
        this.haiList.forEach(function (hai) { return allHaiList.push(hai); });
        this.dekiMentsuList.forEach(function (mentsu) {
            mentsu.getHaiList().forEach(function (hai) { return allHaiList.push(hai); });
        });
        return allHaiList;
    };
    /* 全ての牌数取得(槓子考慮) */
    Tehai.prototype.getAllHaiCount = function () {
        var allHaiCount = 0;
        this.haiList.forEach(function (hai) { return allHaiCount++; });
        this.dekiMentsuList.forEach(function (mentsu) { return allHaiCount += mentsu.getHaiCount(); });
        return allHaiCount;
    };
    Tehai.prototype.getTeHaiCountById = function (haiId) {
        return this.getHaiCountById(this.getAllHaiList(), haiId);
    };
    Tehai.prototype.getHaiCountById = function (haiList, haiId) {
        return haiList.filter(function (hai) { return hai.getId() == haiId; }).length;
    };
    /** 牌変更後処理 */
    Tehai.prototype.afterChangeHai = function () {
        var _this = this;
        this.sortList();
        if (this.getAllHaiCount() == 14) {
            // 国士のメンツ判定
            var kokushiMentsu = this.checkKokushi(this.haiList);
            if (kokushiMentsu != null) {
                this.combMentsuList.push(kokushiMentsu);
            }
            else {
                // 通常の組み合わせ判定(3,3,3,3,2)
                this.combMentsuList = this.combMain(this.haiList);
                //  チートイ組み合わせ追加
                var chitoiMentsu = this.checkChitoi(this.haiList);
                if (chitoiMentsu != null) {
                    this.combMentsuList.push(chitoiMentsu);
                }
            }
            // 役有無判定
            this.combMentsuList.forEach(function (combMentsu) {
                if (_this.maxCombMentsu == null || _this.maxCombMentsu.getScore() < combMentsu.getScore()) {
                    _this.maxCombMentsu = combMentsu;
                }
            });
        }
        else {
            this.combMentsuList = new Array();
            this.maxCombMentsu = null;
        }
    };
    /** 国士無双判定処理 */
    Tehai.prototype.checkKokushi = function (haiList) {
        var kokushiMentsu = new __WEBPACK_IMPORTED_MODULE_1__models_combMentsu__["a" /* CombMentsu */]([new __WEBPACK_IMPORTED_MODULE_3__models_mentsu_kokushi__["a" /* Kokushi */](haiList, null)]);
        var isKokushi = kokushiMentsu.getYakuList().some(function (yaku) { return yaku == __WEBPACK_IMPORTED_MODULE_4__yakuMan__["a" /* YakuMan */].KOKUSHI; });
        return isKokushi ? kokushiMentsu : null;
    };
    /** 七対子判定処理 */
    Tehai.prototype.checkChitoi = function (haiList) {
        var haiMap = new Map();
        if (haiList.some(function (hai) { return hai.isNaki(); }) == false) {
            haiList.forEach(function (hai) {
                var haiId = hai.getId();
                if (haiMap.has(haiId) == false) {
                    haiMap.set(haiId, new Array());
                }
                haiMap.get(haiId).push(hai);
            });
            var chitoiFlg_1 = true;
            var combMentsu_1 = new Array();
            haiMap.forEach(function (haiList) {
                var mentsu = __WEBPACK_IMPORTED_MODULE_2__mentsuMan__["a" /* MentsuMan */].getInstance(haiList, null);
                if (mentsu instanceof __WEBPACK_IMPORTED_MODULE_5__models_mentsu_toitsu__["a" /* Toitsu */]) {
                    combMentsu_1.push(mentsu);
                }
                else {
                    chitoiFlg_1 = false;
                }
            });
            if (chitoiFlg_1) {
                return new __WEBPACK_IMPORTED_MODULE_1__models_combMentsu__["a" /* CombMentsu */](combMentsu_1);
            }
            return null;
        }
        var kokushiMentsu = new __WEBPACK_IMPORTED_MODULE_1__models_combMentsu__["a" /* CombMentsu */]([new __WEBPACK_IMPORTED_MODULE_3__models_mentsu_kokushi__["a" /* Kokushi */](haiList, null)]);
        var isKokushi = kokushiMentsu.getYakuList().some(function (yaku) { return yaku == __WEBPACK_IMPORTED_MODULE_4__yakuMan__["a" /* YakuMan */].KOKUSHI; });
        return isKokushi ? kokushiMentsu : null;
    };
    /** 牌組み合わせ処理 */
    Tehai.prototype.combMain = function (haiList) {
        // let typeHaiMap = new Map<string, Array<Hai>>();
        // haiList.forEach(hai => {
        //   let type = hai.getTypeName();
        //   if (typeHaiMap.get(type) == undefined) {
        //     typeHaiMap.set(type, new Array<Hai>());
        //   }
        //   typeHaiMap.get(type).push(hai);
        // });
        // 牌組み合わせ一覧生成
        var combList = this.comb(haiList, 3);
        // 面子変換
        var mentsuList = new Array();
        combList.forEach(function (haiNumList) {
            var mentsuHaiList = haiNumList.map(function (haiNum) { return haiList[haiNum]; });
            var mentsu = __WEBPACK_IMPORTED_MODULE_2__mentsuMan__["a" /* MentsuMan */].getInstance(mentsuHaiList, haiNumList);
            if (mentsu != null) {
                mentsuList.push(mentsu);
            }
        });
        return this.combMentsu(mentsuList, haiList);
    };
    Tehai.prototype.comb = function (haiList, combMax) {
        var combList = new Array();
        var max = haiList.length;
        for (var i = 0; i < haiList.length; i++) {
            var list = new Array();
            list.push(i);
            for (var j = i + 1; j < haiList.length; j++) {
                this.combSub(j, max, combMax, list.map(function (x) { return x; }), combList);
            }
        }
        return combList;
    };
    Tehai.prototype.combSub = function (start, max, combMax, list, combList) {
        if (list.length < combMax) {
            list.push(start);
            if (list.length == combMax) {
                combList.push(list);
            }
        }
        for (var i = start + 1; i < max; i++) {
            this.combSub(i, max, combMax, list.map(function (x) { return x; }), combList);
        }
    };
    Tehai.prototype.combMentsu = function (baseMentsuList, haiList) {
        var _this = this;
        // 面子組み合わせ作成
        var haiLength = haiList.length;
        var combMax = Math.floor(haiLength / 3);
        var tempCombMentsuList = new Array();
        for (var i = 0; i < baseMentsuList.length; i++) {
            var list = new Array();
            // list.push(baseMentsuList[i]);
            // this.combMentsuSub(i+1, combMax, list, baseMentsuList, tempCombMentsuList);
            this.combMentsuSub(i, combMax, list, baseMentsuList, tempCombMentsuList);
        }
        // 重複削除
        var combMentsuSet = new Set();
        var combMentsuList = new Array();
        tempCombMentsuList.forEach(function (combMentsu) {
            var combId = combMentsu.map(function (mentsu) { return mentsu.getMentsuId(); }).join("");
            if (combMentsuSet.has(combId) == false) {
                combMentsuSet.add(combId);
                combMentsuList.push(combMentsu);
            }
        });
        // 余りを頭にする
        var fixedMentsuList = new Array();
        if (haiList.length == 2) {
            var mentsu = __WEBPACK_IMPORTED_MODULE_2__mentsuMan__["a" /* MentsuMan */].getInstance(haiList, [0, 1]);
            if (mentsu != null) {
                var combMentsu_2 = new Array();
                combMentsu_2.push(mentsu);
                // 出来メンツを追加する
                this.dekiMentsuList.forEach(function (dekiMentsu) { return combMentsu_2.push(dekiMentsu); });
                fixedMentsuList.push(new __WEBPACK_IMPORTED_MODULE_1__models_combMentsu__["a" /* CombMentsu */](combMentsu_2));
            }
        }
        else {
            combMentsuList.forEach(function (combMentsu) {
                var numListList = new Array();
                combMentsu.forEach(function (mentsu) {
                    mentsu.getHaiNumList().forEach(function (haiNum) {
                        numListList.push(haiNum);
                    });
                });
                var restNumList = new Array();
                var _loop_1 = function (i) {
                    if (numListList.some(function (num) { return num == i; }) == false) {
                        restNumList.push(i);
                    }
                };
                for (var i = 0; i < haiLength; i++) {
                    _loop_1(i);
                }
                var mentsuHaiList = restNumList.map(function (haiNum) { return haiList[haiNum]; });
                var mentsu = __WEBPACK_IMPORTED_MODULE_2__mentsuMan__["a" /* MentsuMan */].getInstance(mentsuHaiList, restNumList);
                if (mentsu != null) {
                    combMentsu.push(mentsu);
                    // 出来メンツを追加する
                    _this.dekiMentsuList.forEach(function (dekiMentsu) { return combMentsu.push(dekiMentsu); });
                    fixedMentsuList.push(new __WEBPACK_IMPORTED_MODULE_1__models_combMentsu__["a" /* CombMentsu */](combMentsu));
                }
            });
        }
        return fixedMentsuList;
    };
    Tehai.prototype.combMentsuSub = function (start, combMax, list, baseMentsuList, combMentsuList) {
        if (list.length < combMax) {
            var newMentsu = baseMentsuList[start];
            if (newMentsu != null) {
                var isNotContainsNum = newMentsu.getHaiNumList().every(function (haiNum) {
                    return list.every(function (mentsu) {
                        return (mentsu.getHaiNumList().some(function (subHaiNum) { return subHaiNum == haiNum; }) == false);
                    });
                });
                if (isNotContainsNum) {
                    list.push(newMentsu);
                }
            }
        }
        if (list.length == combMax) {
            combMentsuList.push(list);
        }
        if (start + 1 < baseMentsuList.length) {
            this.combMentsuSub(start + 1, combMax, list.map(function (x) { return x; }), baseMentsuList, combMentsuList);
        }
    };
    /*  ソート */
    Tehai.prototype.sortList = function () {
        this.haiList.sort(function (a, b) {
            return (a.getId() < b.getId()) == true ? -1 : 1;
        });
    };
    return Tehai;
}());

//# sourceMappingURL=tehai.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CombMentsu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__calculator__ = __webpack_require__(285);

/**
 *  面子組み合わせクラス
 */
var CombMentsu = /** @class */ (function () {
    function CombMentsu(combMentsu) {
        var _this = this;
        this.combMentsu = new Array(); //  メンツ組み合わせ一覧
        this.haiList = new Array(); // 牌一覧
        this.yakuList = new Array(); //  役一覧
        this.score = 0; // 点数
        this.total = ""; // 合計
        this.totalHu = 0; // 符合計
        this.combMentsu = combMentsu;
        combMentsu.forEach(function (mentsu) { return mentsu.getHaiList().forEach(function (hai) { return _this.haiList.push(hai); }); });
        __WEBPACK_IMPORTED_MODULE_0__calculator__["a" /* Calculator */].calculate(this);
        this.calculateHu();
        this.afterCalculate();
    }
    /* 鳴き判定 */
    CombMentsu.prototype.isNaki = function () {
        return this.haiList.some(function (hai) { return hai.isNaki(); });
    };
    /* 上がり形取得 */
    CombMentsu.prototype.getAgariMentsu = function () {
        return this.combMentsu.find(function (mentsu) { return mentsu.getAgariType() != ""; });
    };
    /* メンツ組み合わせ一覧取得 */
    CombMentsu.prototype.getMentsuList = function () {
        return this.combMentsu;
    };
    CombMentsu.prototype.getMentsuListByClass = function (clz) {
        return this.combMentsu.filter(function (mentsu) { return mentsu instanceof clz; });
    };
    /* 牌一覧取得 */
    CombMentsu.prototype.getHaiList = function () {
        return this.haiList;
    };
    /* 役一覧取得 */
    CombMentsu.prototype.getYakuList = function () {
        return this.yakuList;
    };
    /* 役一覧追加 */
    CombMentsu.prototype.addYakuList = function (yakuList) {
        var _this = this;
        if (yakuList != null) {
            yakuList.forEach(function (yaku) { return _this.yakuList.push(yaku); });
        }
    };
    /* 役一覧設定 */
    CombMentsu.prototype.setYakuList = function (yakuList) {
        this.yakuList = yakuList;
    };
    /* 合計取得 */
    CombMentsu.prototype.getScore = function () {
        return this.score;
    };
    /* 飜合計取得 */
    CombMentsu.prototype.getTotalHan = function () {
        var totalHan = 0;
        var isNaki = this.haiList.some(function (hai) { return hai.isNaki(); });
        this.yakuList.forEach(function (yaku) { return totalHan += yaku.getHan(isNaki); });
        return totalHan;
    };
    /* 符合計取得 */
    CombMentsu.prototype.getTotalHu = function () {
        return this.totalHu;
    };
    /* 合計取得 */
    CombMentsu.prototype.getTotal = function () {
        return this.total;
    };
    /** 符計算 */
    CombMentsu.prototype.calculateHu = function () {
        var totalHu = 20; // 底
        // ロン上がりは+10
        totalHu += this.combMentsu.map(function (mentsu) { return mentsu.getHu(); }).reduce(function (x, y) { return x + y; });
        // 小数点以下に変換し、切り上げをし、元の桁数に戻す
        var base = 10 ^ (Math.log10(totalHu) - 1);
        this.totalHu = Math.ceil(totalHu / base) * base;
    };
    /** 点数計算 */
    CombMentsu.prototype.afterCalculate = function () {
        var totalHanNum = this.getTotalHan();
        if (totalHanNum >= 13) {
            this.score = 48000;
            this.total = "役満";
        }
        else if (totalHanNum >= 11) {
            this.score = 36000;
            this.total = "三倍満";
        }
        else if (totalHanNum >= 8) {
            this.score = 24000;
            this.total = "倍満";
        }
        else if (totalHanNum >= 6) {
            this.score = 18000;
            this.total = "跳満";
        }
        else if (totalHanNum >= 4) {
            this.score = 12000;
            this.total = "満貫";
        }
        else if (totalHanNum == 3) {
            this.score = 7700;
        }
        else if (totalHanNum == 2) {
            this.score = 3900;
        }
        else if (totalHanNum == 1) {
            this.score = 2000;
        }
        else {
            this.score = 0;
            this.total = "役なし";
        }
    };
    return CombMentsu;
}());

//# sourceMappingURL=combMentsu.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Calculator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__yakuJudge_kokushiJudge__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__yakuJudge_chitoiJudge__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__yakuJudge_tanyaoJudge__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__yakuJudge_yakuhaiJudge__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__yakuJudge_kotsuJudge__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__yakuJudge_pecoJudge__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__yakuJudge_someteJudge__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__yakuJudge_sanshikiJudge__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__yakuJudge_souzuJudge__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__yakuJudge_sangenJudge__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__yakuJudge_suushiJudge__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__yakuJudge_tyantaJudge__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__yakuJudge_routouJudge__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__yakuJudge_ittsuuJudge__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__yakuJudge_pinhuJudge__ = __webpack_require__(302);















/**
 *  点数計算クラス
 */
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.calculate = function (combMentsu) {
        var haiList = combMentsu.getHaiList();
        if (haiList.length >= 14) {
            // ①特殊形の合致
            this.specialYakuJudgeList.forEach(function (yakuJudge) { return yakuJudge.judge(combMentsu); });
            if (combMentsu.getYakuList().length == 0) {
                // ②基本役の合致
                this.basicYakuJudgeList.forEach(function (yakuJudge) { return yakuJudge.judge(combMentsu); });
            }
        }
        // 役満がある場合、役満以下の役は切り捨て
        var yakuList = combMentsu.getYakuList();
        var yakumanList = yakuList.filter(function (yaku) { return yaku.isYakuman(); });
        if (yakumanList.length > 0) {
            combMentsu.setYakuList(yakumanList);
        }
    };
    Calculator.specialYakuJudgeList = [
        new __WEBPACK_IMPORTED_MODULE_0__yakuJudge_kokushiJudge__["a" /* KokushiJudge */]()
    ];
    Calculator.basicYakuJudgeList = [
        new __WEBPACK_IMPORTED_MODULE_1__yakuJudge_chitoiJudge__["a" /* ChitoiJudge */](),
        new __WEBPACK_IMPORTED_MODULE_13__yakuJudge_ittsuuJudge__["a" /* IttsuuJudge */](),
        new __WEBPACK_IMPORTED_MODULE_4__yakuJudge_kotsuJudge__["a" /* KotsuJudge */](),
        new __WEBPACK_IMPORTED_MODULE_5__yakuJudge_pecoJudge__["a" /* PecoJudge */](),
        new __WEBPACK_IMPORTED_MODULE_14__yakuJudge_pinhuJudge__["a" /* PinhuJudge */](),
        new __WEBPACK_IMPORTED_MODULE_12__yakuJudge_routouJudge__["a" /* RoutouJudge */](),
        new __WEBPACK_IMPORTED_MODULE_7__yakuJudge_sanshikiJudge__["a" /* SanshikiJudge */](),
        new __WEBPACK_IMPORTED_MODULE_9__yakuJudge_sangenJudge__["a" /* SangenJudge */](),
        new __WEBPACK_IMPORTED_MODULE_6__yakuJudge_someteJudge__["a" /* SometeJudge */](),
        new __WEBPACK_IMPORTED_MODULE_8__yakuJudge_souzuJudge__["a" /* SouzuJudge */](),
        new __WEBPACK_IMPORTED_MODULE_10__yakuJudge_suushiJudge__["a" /* SuushiJudge */](),
        new __WEBPACK_IMPORTED_MODULE_2__yakuJudge_tanyaoJudge__["a" /* TanyaoJudge */](),
        new __WEBPACK_IMPORTED_MODULE_11__yakuJudge_tyantaJudge__["a" /* TyantaJudge */](),
        new __WEBPACK_IMPORTED_MODULE_3__yakuJudge_yakuhaiJudge__["a" /* YakuhaiJudge */]()
    ];
    return Calculator;
}());

//# sourceMappingURL=calculator.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KokushiJudge; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseYakuJudge__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__HaiMan__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__yakuMan__ = __webpack_require__(11);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



/**
 *  国士無双判定クラス
 */
var KokushiJudge = /** @class */ (function (_super) {
    __extends(KokushiJudge, _super);
    function KokushiJudge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 役判定
     * @param combMentsu 組み合わせメンツ
     * @return 役一覧
     */
    KokushiJudge.prototype.judgeYaku = function (combMentsu) {
        var yakuList = new Array();
        var haiList = combMentsu.getHaiList();
        var agariFlg = true;
        __WEBPACK_IMPORTED_MODULE_1__HaiMan__["a" /* HaiMan */].YAOCHU_HAI_LIST.forEach(function (yaoHai) {
            if (haiList.some(function (hai) { return hai.getId() == yaoHai.getId(); }) == false) {
                agariFlg = false;
            }
        });
        if (haiList.every(function (hai) { return hai.isYaoChu(); }) == false) {
            agariFlg = false;
        }
        if (agariFlg) {
            yakuList.push(__WEBPACK_IMPORTED_MODULE_2__yakuMan__["a" /* YakuMan */].KOKUSHI);
        }
        return yakuList;
    };
    return KokushiJudge;
}(__WEBPACK_IMPORTED_MODULE_0__baseYakuJudge__["a" /* BaseYakuJudge */]));

//# sourceMappingURL=kokushiJudge.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Yaku; });
/**
 *  役クラス
 */
var Yaku = /** @class */ (function () {
    function Yaku(name, yomi, han, isKuisagri) {
        this.name = name;
        this.yomi = yomi;
        this.han = han;
        this.isKuisagri = isKuisagri;
    }
    /* 役名取得 */
    Yaku.prototype.getName = function () {
        return this.name;
    };
    /* 役読み仮名取得 */
    Yaku.prototype.getYomi = function () {
        return this.yomi;
    };
    /* 飜数取得 */
    Yaku.prototype.getHan = function (isNaki) {
        var han = this.han;
        if (this.isKuisagri && isNaki) {
            han--;
        }
        return han;
    };
    /* 点数取得 */
    Yaku.prototype.getScore = function () {
        return 48000;
    };
    /* 役満判定 */
    Yaku.prototype.isYakuman = function () {
        return this.han >= 13;
    };
    return Yaku;
}());

//# sourceMappingURL=yaku.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChitoiJudge; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseYakuJudge__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__yakuMan__ = __webpack_require__(11);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


/**
 *  七対子判定クラス
 */
var ChitoiJudge = /** @class */ (function (_super) {
    __extends(ChitoiJudge, _super);
    function ChitoiJudge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 役判定
     * @param combMentsu 組み合わせメンツ
     * @return 役一覧
     */
    ChitoiJudge.prototype.judgeYaku = function (combMentsu) {
        var yakuList = new Array();
        var mentsuList = combMentsu.getMentsuList();
        if (mentsuList.every(function (mentsu) { return mentsu.getHaiList().length == 2; })) {
            if (mentsuList.every(function (mentsu) { return mentsu.isJihai(); })) {
                yakuList.push(__WEBPACK_IMPORTED_MODULE_1__yakuMan__["a" /* YakuMan */].DAI_CHI_SEI);
            }
            else {
                yakuList.push(__WEBPACK_IMPORTED_MODULE_1__yakuMan__["a" /* YakuMan */].CHI_TOI);
            }
        }
        return yakuList;
    };
    return ChitoiJudge;
}(__WEBPACK_IMPORTED_MODULE_0__baseYakuJudge__["a" /* BaseYakuJudge */]));

//# sourceMappingURL=chitoiJudge.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TanyaoJudge; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseYakuJudge__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__yakuMan__ = __webpack_require__(11);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


/**
 *  断么九判定クラス
 */
var TanyaoJudge = /** @class */ (function (_super) {
    __extends(TanyaoJudge, _super);
    function TanyaoJudge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 役判定
     * @param combMentsu 組み合わせメンツ
     * @return 役一覧
     */
    TanyaoJudge.prototype.judgeYaku = function (combMentsu) {
        var yakuList = new Array();
        var haiList = combMentsu.getHaiList();
        if (haiList.some(function (hai) { return hai.isYaoChu(); }) == false) {
            yakuList.push(__WEBPACK_IMPORTED_MODULE_1__yakuMan__["a" /* YakuMan */].TANYAO);
        }
        return yakuList;
    };
    return TanyaoJudge;
}(__WEBPACK_IMPORTED_MODULE_0__baseYakuJudge__["a" /* BaseYakuJudge */]));

//# sourceMappingURL=tanyaoJudge.js.map

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Kotsu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mentsu__ = __webpack_require__(36);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 *  刻子クラス
 */
var Kotsu = /** @class */ (function (_super) {
    __extends(Kotsu, _super);
    function Kotsu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /* 上がり形取得 */
    Kotsu.prototype.getAgariType = function () {
        if (this.isAgari()) {
            return __WEBPACK_IMPORTED_MODULE_0__mentsu__["a" /* Mentsu */].SYABO;
        }
        return "";
    };
    return Kotsu;
}(__WEBPACK_IMPORTED_MODULE_0__mentsu__["a" /* Mentsu */]));

//# sourceMappingURL=kotsu.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YakuhaiJudge; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseYakuJudge__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_mentsu_kotsu__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__yakuMan__ = __webpack_require__(11);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



/**
 *  役牌判定クラス
 */
var YakuhaiJudge = /** @class */ (function (_super) {
    __extends(YakuhaiJudge, _super);
    function YakuhaiJudge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 役判定
     * @param combMentsu 組み合わせメンツ
     * @return 役一覧
     */
    YakuhaiJudge.prototype.judgeYaku = function (combMentsu) {
        var yakuList = new Array();
        var kotsuList = combMentsu.getMentsuListByClass(__WEBPACK_IMPORTED_MODULE_1__models_mentsu_kotsu__["a" /* Kotsu */]);
        kotsuList.forEach(function (kotsu) {
            if (kotsu.isJihai()) {
                yakuList.push(__WEBPACK_IMPORTED_MODULE_2__yakuMan__["a" /* YakuMan */].YAKU_HAI);
            }
        });
        return yakuList;
    };
    return YakuhaiJudge;
}(__WEBPACK_IMPORTED_MODULE_0__baseYakuJudge__["a" /* BaseYakuJudge */]));

//# sourceMappingURL=yakuhaiJudge.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KotsuJudge; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseYakuJudge__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_mentsu__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_mentsu_anko__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_mentsu_ankan__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_mentsu_kantsu__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_mentsu_kotsu__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__yakuMan__ = __webpack_require__(11);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();







/**
 *  刻子判定クラス
 */
var KotsuJudge = /** @class */ (function (_super) {
    __extends(KotsuJudge, _super);
    function KotsuJudge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 役判定
     * @param combMentsu 組み合わせメンツ
     * @return 役一覧
     */
    KotsuJudge.prototype.judgeYaku = function (combMentsu) {
        var yakuList = new Array();
        // 槓子判定
        var kantsuList = combMentsu.getMentsuListByClass(__WEBPACK_IMPORTED_MODULE_4__models_mentsu_kantsu__["a" /* Kantsu */]);
        switch (kantsuList.length) {
            case 4:
                yakuList.push(__WEBPACK_IMPORTED_MODULE_6__yakuMan__["a" /* YakuMan */].SU_KANTSU);
                return yakuList;
            case 3:
                yakuList.push(__WEBPACK_IMPORTED_MODULE_6__yakuMan__["a" /* YakuMan */].SAN_KANTSU);
                break;
            default:
                break;
        }
        // 暗刻判定
        var ankoList = combMentsu.getMentsuListByClass(__WEBPACK_IMPORTED_MODULE_2__models_mentsu_anko__["a" /* Anko */]);
        ankoList.concat(combMentsu.getMentsuListByClass(__WEBPACK_IMPORTED_MODULE_3__models_mentsu_ankan__["a" /* Ankan */]));
        switch (ankoList.length) {
            case 4:
                if (combMentsu.getAgariMentsu().getAgariType() == __WEBPACK_IMPORTED_MODULE_1__models_mentsu__["a" /* Mentsu */].TANKI) {
                    yakuList.push(__WEBPACK_IMPORTED_MODULE_6__yakuMan__["a" /* YakuMan */].SU_TAN);
                }
                else {
                    yakuList.push(__WEBPACK_IMPORTED_MODULE_6__yakuMan__["a" /* YakuMan */].SU_ANKO);
                }
                // 四暗刻はトイトイと重複しないため、リターン
                return yakuList;
            case 3:
                yakuList.push(__WEBPACK_IMPORTED_MODULE_6__yakuMan__["a" /* YakuMan */].SAN_ANKO);
                break;
            default:
                break;
        }
        // トイトイ判定
        var kotsuList = combMentsu.getMentsuListByClass(__WEBPACK_IMPORTED_MODULE_5__models_mentsu_kotsu__["a" /* Kotsu */]);
        if (kotsuList.length == 4) {
            yakuList.push(__WEBPACK_IMPORTED_MODULE_6__yakuMan__["a" /* YakuMan */].TOI_TOI);
        }
        return yakuList;
    };
    return KotsuJudge;
}(__WEBPACK_IMPORTED_MODULE_0__baseYakuJudge__["a" /* BaseYakuJudge */]));

//# sourceMappingURL=kotsuJudge.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ankan; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__kantsu__ = __webpack_require__(106);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 *  暗槓クラス
 */
var Ankan = /** @class */ (function (_super) {
    __extends(Ankan, _super);
    function Ankan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /* 符取得 */
    Ankan.prototype.getHu = function () {
        return this.isYaochu() ? 16 : 8;
    };
    return Ankan;
}(__WEBPACK_IMPORTED_MODULE_0__kantsu__["a" /* Kantsu */]));

//# sourceMappingURL=ankan.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PecoJudge; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseYakuJudge__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_mentsu_anshun__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__yakuMan__ = __webpack_require__(11);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



/**
 *  盃口判定クラス
 */
var PecoJudge = /** @class */ (function (_super) {
    __extends(PecoJudge, _super);
    function PecoJudge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 役判定
     * @param combMentsu 組み合わせメンツ
     * @return 役一覧
     */
    PecoJudge.prototype.judgeYaku = function (combMentsu) {
        var yakuList = new Array();
        var shuntsuList = combMentsu.getMentsuListByClass(__WEBPACK_IMPORTED_MODULE_1__models_mentsu_anshun__["a" /* AnShun */]);
        if (shuntsuList.length > 0) {
            var mentsuIdMap_1 = new Map();
            shuntsuList.forEach(function (shuntsu) {
                var mentsuId = shuntsu.getMentsuId();
                if (mentsuIdMap_1.has(mentsuId)) {
                    mentsuIdMap_1.get(mentsuId).push(shuntsu);
                }
                else {
                    var mentsuList = new Array();
                    mentsuList.push(shuntsu);
                    mentsuIdMap_1.set(mentsuId, mentsuList);
                }
            });
            var pecoCount_1 = 0;
            mentsuIdMap_1.forEach(function (mentsuList) {
                if (mentsuList.length == 2) {
                    pecoCount_1++;
                }
            });
            // 役設定
            switch (pecoCount_1) {
                case 1:
                    yakuList.push(__WEBPACK_IMPORTED_MODULE_2__yakuMan__["a" /* YakuMan */].I_PECO);
                    break;
                case 2:
                    yakuList.push(__WEBPACK_IMPORTED_MODULE_2__yakuMan__["a" /* YakuMan */].RYAN_PECO);
                    break;
                default:
                    break;
            }
        }
        return yakuList;
    };
    return PecoJudge;
}(__WEBPACK_IMPORTED_MODULE_0__baseYakuJudge__["a" /* BaseYakuJudge */]));

//# sourceMappingURL=pecoJudge.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SometeJudge; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseYakuJudge__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__yakuMan__ = __webpack_require__(11);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


/**
 *   染め手判定クラス
 */
var SometeJudge = /** @class */ (function (_super) {
    __extends(SometeJudge, _super);
    function SometeJudge() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.CHUREN_HAI_CODE_LIST = [
            "1", "1", "1", "2", "3", "4", "5", "6", "7", "8", "9", "9", "9"
        ];
        return _this;
    }
    /**
     * 役判定
     * @param combMentsu 組み合わせメンツ
     * @return 役一覧
     */
    SometeJudge.prototype.judgeYaku = function (combMentsu) {
        var haiList = combMentsu.getHaiList();
        var typeSet = new Set();
        // 牌種別を分ける
        haiList.forEach(function (hai) {
            var type = hai.isJihai() ? "字牌" : hai.getType();
            if (typeSet.has(type) == false) {
                typeSet.add(type);
            }
        });
        var yakuList = new Array();
        switch (typeSet.size) {
            case 1:
                if (typeSet.has("字牌")) {
                    yakuList.push(__WEBPACK_IMPORTED_MODULE_1__yakuMan__["a" /* YakuMan */].TSU_I_SO);
                }
                else {
                    // チュウレン判定
                    // if (condition) {
                    // } else {
                    yakuList.push(__WEBPACK_IMPORTED_MODULE_1__yakuMan__["a" /* YakuMan */].CHINITSU);
                    // }
                }
                break;
            case 2:
                if (typeSet.has("字牌")) {
                    yakuList.push(__WEBPACK_IMPORTED_MODULE_1__yakuMan__["a" /* YakuMan */].HONNITSU);
                }
                break;
            default:
                break;
        }
        return yakuList;
    };
    return SometeJudge;
}(__WEBPACK_IMPORTED_MODULE_0__baseYakuJudge__["a" /* BaseYakuJudge */]));

//# sourceMappingURL=someteJudge.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SanshikiJudge; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseYakuJudge__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__yakuMan__ = __webpack_require__(11);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


/**
 *  三色判定クラス
 */
var SanshikiJudge = /** @class */ (function (_super) {
    __extends(SanshikiJudge, _super);
    function SanshikiJudge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 役判定
     * @param combMentsu 組み合わせメンツ
     * @return 役一覧
     */
    SanshikiJudge.prototype.judgeYaku = function (combMentsu) {
        var yakuList = new Array();
        var haiCodeMap = new Map();
        combMentsu.getMentsuList().forEach(function (mentsu) {
            var haiCodeStr = mentsu.getHaiList().map(function (hai) { return hai.getCode(); }).join("");
            if (haiCodeMap.has(haiCodeStr) == false) {
                var typeSet = new Set();
                haiCodeMap.set(haiCodeStr, typeSet);
            }
            var haiType = mentsu.getHaiType();
            if (haiCodeMap.get(haiCodeStr).has(haiType) == false) {
                haiCodeMap.get(haiCodeStr).add(haiType);
            }
        });
        haiCodeMap.forEach(function (typeList, haiCode) {
            if (typeList.size == 3) {
                if (haiCode[0] == haiCode[1]) {
                    yakuList.push(__WEBPACK_IMPORTED_MODULE_1__yakuMan__["a" /* YakuMan */].SANSHIKI_DOUKO);
                }
                else {
                    yakuList.push(__WEBPACK_IMPORTED_MODULE_1__yakuMan__["a" /* YakuMan */].SANSHIKI_DOUJUN);
                }
            }
        });
        return yakuList;
    };
    return SanshikiJudge;
}(__WEBPACK_IMPORTED_MODULE_0__baseYakuJudge__["a" /* BaseYakuJudge */]));

//# sourceMappingURL=sanshikiJudge.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SouzuJudge; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseYakuJudge__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__HaiMan__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__yakuMan__ = __webpack_require__(11);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



/**
 *  索子判定クラス
 */
var SouzuJudge = /** @class */ (function (_super) {
    __extends(SouzuJudge, _super);
    function SouzuJudge() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.BENI_HAI_LIST = [
            __WEBPACK_IMPORTED_MODULE_1__HaiMan__["a" /* HaiMan */].SOU1, __WEBPACK_IMPORTED_MODULE_1__HaiMan__["a" /* HaiMan */].SOU5, __WEBPACK_IMPORTED_MODULE_1__HaiMan__["a" /* HaiMan */].SOU7, __WEBPACK_IMPORTED_MODULE_1__HaiMan__["a" /* HaiMan */].SOU9, __WEBPACK_IMPORTED_MODULE_1__HaiMan__["a" /* HaiMan */].TYUN
        ];
        _this.RYU_HAI_LIST = [
            __WEBPACK_IMPORTED_MODULE_1__HaiMan__["a" /* HaiMan */].SOU2, __WEBPACK_IMPORTED_MODULE_1__HaiMan__["a" /* HaiMan */].SOU3, __WEBPACK_IMPORTED_MODULE_1__HaiMan__["a" /* HaiMan */].SOU4, __WEBPACK_IMPORTED_MODULE_1__HaiMan__["a" /* HaiMan */].SOU6, __WEBPACK_IMPORTED_MODULE_1__HaiMan__["a" /* HaiMan */].SOU8, __WEBPACK_IMPORTED_MODULE_1__HaiMan__["a" /* HaiMan */].HATSU
        ];
        return _this;
    }
    /**
     * 役判定
     * @param combMentsu 組み合わせメンツ
     * @return 役一覧
     */
    SouzuJudge.prototype.judgeYaku = function (combMentsu) {
        var _this = this;
        var yakuList = new Array();
        var haiList = combMentsu.getHaiList();
        if (haiList.every(function (hai) { return _this.BENI_HAI_LIST.some(function (beni) { return beni.getName() == hai.getName(); }); })) {
            yakuList.push(__WEBPACK_IMPORTED_MODULE_2__yakuMan__["a" /* YakuMan */].BENI_KUJAKU);
        }
        if (haiList.every(function (hai) { return _this.RYU_HAI_LIST.some(function (beni) { return beni.getName() == hai.getName(); }); })) {
            yakuList.push(__WEBPACK_IMPORTED_MODULE_2__yakuMan__["a" /* YakuMan */].RYU_I_SO);
        }
        return yakuList;
    };
    return SouzuJudge;
}(__WEBPACK_IMPORTED_MODULE_0__baseYakuJudge__["a" /* BaseYakuJudge */]));

//# sourceMappingURL=souzuJudge.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SangenJudge; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseYakuJudge__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_hai__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_mentsu_kotsu__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__yakuMan__ = __webpack_require__(11);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




/**
 *  三元判定クラス
 */
var SangenJudge = /** @class */ (function (_super) {
    __extends(SangenJudge, _super);
    function SangenJudge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 役判定
     * @param combMentsu 組み合わせメンツ
     * @return 役一覧
     */
    SangenJudge.prototype.judgeYaku = function (combMentsu) {
        var yakuList = new Array();
        var sangenMentsuList = combMentsu.getMentsuList().filter(function (mentsu) { return mentsu.getHaiType() == __WEBPACK_IMPORTED_MODULE_1__models_hai__["a" /* Hai */].TYPE_SANGEN; });
        if (sangenMentsuList.length == 3) {
            var ankoLength = sangenMentsuList.filter(function (mentsu) { return mentsu instanceof __WEBPACK_IMPORTED_MODULE_2__models_mentsu_kotsu__["a" /* Kotsu */]; }).length;
            // 役設定
            switch (ankoLength) {
                case 3:
                    yakuList.push(__WEBPACK_IMPORTED_MODULE_3__yakuMan__["a" /* YakuMan */].DAI_SAN_GEN);
                    break;
                case 2:
                    yakuList.push(__WEBPACK_IMPORTED_MODULE_3__yakuMan__["a" /* YakuMan */].SHOU_SAN_GEN);
                    break;
                default:
                    break;
            }
        }
        return yakuList;
    };
    return SangenJudge;
}(__WEBPACK_IMPORTED_MODULE_0__baseYakuJudge__["a" /* BaseYakuJudge */]));

//# sourceMappingURL=sangenJudge.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuushiJudge; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseYakuJudge__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_hai__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_mentsu_kotsu__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__yakuMan__ = __webpack_require__(11);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




/**
 *  四喜判定クラス
 */
var SuushiJudge = /** @class */ (function (_super) {
    __extends(SuushiJudge, _super);
    function SuushiJudge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 役判定
     * @param combMentsu 組み合わせメンツ
     * @return 役一覧
     */
    SuushiJudge.prototype.judgeYaku = function (combMentsu) {
        var yakuList = new Array();
        var kazeMentsuList = combMentsu.getMentsuList().filter(function (mentsu) { return mentsu.getHaiType() == __WEBPACK_IMPORTED_MODULE_1__models_hai__["a" /* Hai */].TYPE_KAZEHAI; });
        if (kazeMentsuList.length == 4) {
            var ankoLength = kazeMentsuList.filter(function (mentsu) { return mentsu instanceof __WEBPACK_IMPORTED_MODULE_2__models_mentsu_kotsu__["a" /* Kotsu */]; }).length;
            // 役設定
            switch (ankoLength) {
                case 4:
                    yakuList.push(__WEBPACK_IMPORTED_MODULE_3__yakuMan__["a" /* YakuMan */].DAI_SUU_SHI);
                    break;
                case 3:
                    yakuList.push(__WEBPACK_IMPORTED_MODULE_3__yakuMan__["a" /* YakuMan */].SHOU_SUU_SHI);
                    break;
                default:
                    break;
            }
        }
        return yakuList;
    };
    return SuushiJudge;
}(__WEBPACK_IMPORTED_MODULE_0__baseYakuJudge__["a" /* BaseYakuJudge */]));

//# sourceMappingURL=suushiJudge.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TyantaJudge; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseYakuJudge__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__yakuMan__ = __webpack_require__(11);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


/**
 *  全帯幺九判定クラス
 */
var TyantaJudge = /** @class */ (function (_super) {
    __extends(TyantaJudge, _super);
    function TyantaJudge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 役判定
     * @param combMentsu 組み合わせメンツ
     * @return 役一覧
     */
    TyantaJudge.prototype.judgeYaku = function (combMentsu) {
        var yakuList = new Array();
        var tyantaFlg = combMentsu.getMentsuList().every(function (mentsu) {
            return mentsu.getHaiList().some(function (hai) { return hai.isYaoChu(); });
        });
        if (tyantaFlg) {
            if (combMentsu.getHaiList().some(function (hai) { return hai.isJihai(); })) {
                yakuList.push(__WEBPACK_IMPORTED_MODULE_1__yakuMan__["a" /* YakuMan */].TYANTA);
            }
            else {
                yakuList.push(__WEBPACK_IMPORTED_MODULE_1__yakuMan__["a" /* YakuMan */].JUN_TYAN);
            }
        }
        return yakuList;
    };
    return TyantaJudge;
}(__WEBPACK_IMPORTED_MODULE_0__baseYakuJudge__["a" /* BaseYakuJudge */]));

//# sourceMappingURL=tyantaJudge.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutouJudge; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseYakuJudge__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__yakuMan__ = __webpack_require__(11);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


/**
 *  老頭判定クラス
 */
var RoutouJudge = /** @class */ (function (_super) {
    __extends(RoutouJudge, _super);
    function RoutouJudge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 役判定
     * @param combMentsu 組み合わせメンツ
     * @return 役一覧
     */
    RoutouJudge.prototype.judgeYaku = function (combMentsu) {
        var yakuList = new Array();
        var haiList = combMentsu.getHaiList();
        if (haiList.every(function (hai) { return hai.isYaoChu(); })) {
            if (combMentsu.getHaiList().some(function (hai) { return hai.isJihai(); })) {
                yakuList.push(__WEBPACK_IMPORTED_MODULE_1__yakuMan__["a" /* YakuMan */].HON_ROUTOU);
            }
            else {
                yakuList.push(__WEBPACK_IMPORTED_MODULE_1__yakuMan__["a" /* YakuMan */].CHIN_ROUTOU);
            }
        }
        return yakuList;
    };
    return RoutouJudge;
}(__WEBPACK_IMPORTED_MODULE_0__baseYakuJudge__["a" /* BaseYakuJudge */]));

//# sourceMappingURL=routouJudge.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IttsuuJudge; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseYakuJudge__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_mentsu_shuntsu__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__yakuMan__ = __webpack_require__(11);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



/**
 *  一通判定クラス
 */
var IttsuuJudge = /** @class */ (function (_super) {
    __extends(IttsuuJudge, _super);
    function IttsuuJudge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 役判定
     * @param combMentsu 組み合わせメンツ
     * @return 役一覧
     */
    IttsuuJudge.prototype.judgeYaku = function (combMentsu) {
        var yakuList = new Array();
        var shuntsuList = combMentsu.getMentsuListByClass(__WEBPACK_IMPORTED_MODULE_1__models_mentsu_shuntsu__["a" /* Shuntsu */]);
        if (shuntsuList.length > 0) {
            var haiTypeMap_1 = new Map();
            shuntsuList.forEach(function (shuntsu) {
                var haiType = shuntsu.getHaiType();
                var mentsuCodeId = shuntsu.getHaiList().map(function (hai) { return hai.getCode(); }).join("");
                if (mentsuCodeId == "123" || mentsuCodeId == "456" || mentsuCodeId == "789") {
                    if (haiTypeMap_1.has(haiType) == false) {
                        var mentsuIdList = new Array();
                        haiTypeMap_1.set(haiType, mentsuIdList);
                    }
                    if (haiTypeMap_1.get(haiType).some(function (id) { return id == mentsuCodeId; }) == false) {
                        haiTypeMap_1.get(haiType).push(mentsuCodeId);
                    }
                }
            });
            haiTypeMap_1.forEach(function (mentsuIdList) {
                if (mentsuIdList.length == 3) {
                    yakuList.push(__WEBPACK_IMPORTED_MODULE_2__yakuMan__["a" /* YakuMan */].ITSUU);
                }
            });
        }
        return yakuList;
    };
    return IttsuuJudge;
}(__WEBPACK_IMPORTED_MODULE_0__baseYakuJudge__["a" /* BaseYakuJudge */]));

//# sourceMappingURL=ittsuuJudge.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PinhuJudge; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseYakuJudge__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_mentsu_shuntsu__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__yakuMan__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_mentsu__ = __webpack_require__(36);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




/**
 *  平和判定クラス
 */
var PinhuJudge = /** @class */ (function (_super) {
    __extends(PinhuJudge, _super);
    function PinhuJudge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 役判定
     * @param combMentsu 組み合わせメンツ
     * @return 役一覧
     */
    PinhuJudge.prototype.judgeYaku = function (combMentsu) {
        var yakuList = new Array();
        if (combMentsu.isNaki() == false) {
            var shuntsuList = combMentsu.getMentsuListByClass(__WEBPACK_IMPORTED_MODULE_1__models_mentsu_shuntsu__["a" /* Shuntsu */]);
            var isPinhu = shuntsuList.some(function (mentsu) { return mentsu.getAgariType() == __WEBPACK_IMPORTED_MODULE_3__models_mentsu__["a" /* Mentsu */].RYANMEN; });
            if (shuntsuList.length == 4 && isPinhu) {
                yakuList.push(__WEBPACK_IMPORTED_MODULE_2__yakuMan__["a" /* YakuMan */].PINHU);
            }
        }
        return yakuList;
    };
    return PinhuJudge;
}(__WEBPACK_IMPORTED_MODULE_0__baseYakuJudge__["a" /* BaseYakuJudge */]));

//# sourceMappingURL=pinhuJudge.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MentsuMan; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_mentsu_toitsu__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_mentsu_minko__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_mentsu_anko__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_mentsu_minshun__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_mentsu_anshun__ = __webpack_require__(203);





/**
 *  面子管理クラス
 */
var MentsuMan = /** @class */ (function () {
    function MentsuMan() {
    }
    /**
     * インスタンス取得
     * @param haiList 牌一覧
     * @param haiNumList 牌順序一覧
     * @returns メンツクラスインスタンス
     */
    MentsuMan.getInstance = function (haiList, haiNumList) {
        if (haiList != null) {
            var nakiFlg = haiList.some(function (hai) { return hai.isNaki(); });
            if (this.isShuntsu(haiList)) {
                if (nakiFlg) {
                    return new __WEBPACK_IMPORTED_MODULE_3__models_mentsu_minshun__["a" /* MinShun */](haiList, haiNumList);
                }
                else {
                    return new __WEBPACK_IMPORTED_MODULE_4__models_mentsu_anshun__["a" /* AnShun */](haiList, haiNumList);
                }
            }
            else if (this.isKotsu(haiList)) {
                if (nakiFlg) {
                    return new __WEBPACK_IMPORTED_MODULE_1__models_mentsu_minko__["a" /* Minko */](haiList, haiNumList);
                }
                else {
                    return new __WEBPACK_IMPORTED_MODULE_2__models_mentsu_anko__["a" /* Anko */](haiList, haiNumList);
                }
            }
            else if (this.isToitsu(haiList)) {
                return new __WEBPACK_IMPORTED_MODULE_0__models_mentsu_toitsu__["a" /* Toitsu */](haiList, haiNumList);
            }
        }
        return null;
    };
    /**
     * 順子判定処理
     * @param haiList 牌一覧
     * @returns 判定結果
     */
    MentsuMan.isShuntsu = function (haiList) {
        var result = false;
        if (haiList.every(function (hai) { return hai.isJihai() == false; }) && haiList.length == 3) {
            var type_1 = haiList[0].getTypeName();
            if (haiList.every(function (hai) { return hai.getTypeName() == type_1; })) {
                result = true;
                var oldHaiNum_1 = -1;
                haiList.forEach(function (hai) {
                    var haiNum = parseInt(hai.getCode());
                    if (oldHaiNum_1 != -1 && (haiNum - oldHaiNum_1) != 1) {
                        result = false;
                    }
                    oldHaiNum_1 = haiNum;
                });
            }
        }
        return result;
    };
    /**
     * 刻子判定処理
     * @param haiList 牌一覧
     * @returns 判定結果
     */
    MentsuMan.isKotsu = function (haiList) {
        var result = false;
        if (haiList.length == 3) {
            var type_2 = haiList[0].getTypeName();
            if (haiList.every(function (hai) { return hai.getTypeName() == type_2; })) {
                result = true;
                var oldHaiCode_1 = null;
                haiList.forEach(function (hai) {
                    if (oldHaiCode_1 != null && hai.getCode() != oldHaiCode_1) {
                        result = false;
                    }
                    oldHaiCode_1 = hai.getCode();
                });
            }
        }
        return result;
    };
    /**
     * 対子判定処理
     * @param haiList 牌一覧
     * @returns 判定結果
     */
    MentsuMan.isToitsu = function (haiList) {
        var result = false;
        if (haiList.length == 2) {
            var type_3 = haiList[0].getTypeName();
            if (haiList.every(function (hai) { return hai.getTypeName() == type_3; })) {
                result = true;
                var oldHaiCode_2 = null;
                haiList.forEach(function (hai) {
                    if (oldHaiCode_2 != null && hai.getCode() != oldHaiCode_2) {
                        result = false;
                    }
                    oldHaiCode_2 = hai.getCode();
                });
            }
        }
        return result;
    };
    return MentsuMan;
}());

//# sourceMappingURL=mentsuMan.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Kokushi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mentsu__ = __webpack_require__(36);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 *  国士クラス
 */
var Kokushi = /** @class */ (function (_super) {
    __extends(Kokushi, _super);
    function Kokushi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /* 符取得 */
    Kokushi.prototype.getHu = function () {
        return 0;
    };
    /* 上がり形取得 */
    Kokushi.prototype.getAgariType = function () {
        return "";
    };
    return Kokushi;
}(__WEBPACK_IMPORTED_MODULE_0__mentsu__["a" /* Mentsu */]));

//# sourceMappingURL=kokushi.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Minkan; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__kantsu__ = __webpack_require__(106);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 *  明槓クラス
 */
var Minkan = /** @class */ (function (_super) {
    __extends(Minkan, _super);
    function Minkan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /* 符取得 */
    Minkan.prototype.getHu = function () {
        return this.isYaochu() ? 8 : 4;
    };
    return Minkan;
}(__WEBPACK_IMPORTED_MODULE_0__kantsu__["a" /* Kantsu */]));

//# sourceMappingURL=minkan.js.map

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Hai; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__HaiMan__ = __webpack_require__(44);

/**
 *  牌クラス
 */
var Hai = /** @class */ (function () {
    function Hai(id, name) {
        this.agariFlg = false; // 上がり牌フラグ
        this.nakiFlg = false; // 鳴き牌フラグ
        this.id = id;
        this.name = name;
    }
    /* クローン作成 */
    Hai.deepCopy = function (hai) {
        return new Hai(hai.getId(), hai.getName());
    };
    /* 牌ID取得 */
    Hai.prototype.getId = function () {
        return this.id;
    };
    /* 牌名取得 */
    Hai.prototype.getName = function () {
        return this.name;
    };
    /* 上がり牌フラグ取得 */
    Hai.prototype.isAgari = function () {
        return this.agariFlg;
    };
    /* 上がり牌フラグ設定 */
    Hai.prototype.setAgariFlg = function (agariFlg) {
        this.agariFlg = agariFlg;
    };
    /* 鳴き牌フラグ取得 */
    Hai.prototype.isNaki = function () {
        return this.nakiFlg;
    };
    /* 鳴き牌フラグ設定 */
    Hai.prototype.setNakiFlg = function (nakiFlg) {
        this.nakiFlg = nakiFlg;
    };
    /* 牌コード取得 */
    Hai.prototype.getCode = function () {
        return this.id.substr(2, 1);
    };
    /* 字牌フラグ取得 */
    Hai.prototype.isJihai = function () {
        var jihaiFlg = false;
        if (this.id.substr(0, 1) == "1") {
            jihaiFlg = true;
        }
        return jihaiFlg;
    };
    /* 么九牌フラグ取得 */
    Hai.prototype.isYaoChu = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_0__HaiMan__["a" /* HaiMan */].YAOCHU_HAI_LIST.some(function (hai) { return hai.getId() == _this.id; });
    };
    /* 牌タイプ取得 */
    Hai.prototype.getType = function () {
        return this.id.substr(1, 1);
    };
    /* 牌タイプ名取得 */
    Hai.prototype.getTypeName = function () {
        var type = "";
        switch (this.getType()) {
            case "1":
                type = Hai.TYPE_MANZU;
                break;
            case "2":
                type = Hai.TYPE_PINZU;
                break;
            case "3":
                type = Hai.TYPE_SOUZU;
                break;
            case "a":
                type = Hai.TYPE_KAZEHAI;
                break;
            case "b":
                type = Hai.TYPE_SANGEN;
                break;
        }
        return type;
    };
    /* 牌画像パス取得 */
    Hai.prototype.getPngPath = function () {
        return "assets/imgs/hai/" + this.id + ".png";
    };
    /* 画面表示用クラス名取得 */
    Hai.prototype.getVisualClass = function () {
        return this.nakiFlg ? "yoko" : "";
    };
    /* 表示文字列取得 */
    Hai.prototype.toString = function () {
        return this.name;
    };
    Hai.TYPE_MANZU = "萬子";
    Hai.TYPE_PINZU = "筒子";
    Hai.TYPE_SOUZU = "索子";
    Hai.TYPE_KAZEHAI = "風牌";
    Hai.TYPE_SANGEN = "三元";
    return Hai;
}());

//# sourceMappingURL=hai.js.map

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Mentsu; });
/**
 *  面子クラス
 */
var Mentsu = /** @class */ (function () {
    /**
     * コンストラクタ
     * @param haiList 牌一覧
     * @param haiNumList 牌順序一覧
     */
    function Mentsu(haiList, haiNumList) {
        this.haiList = haiList;
        this.haiNumList = haiNumList;
        this.nakiFlg = this.haiList.some(function (hai) { return hai.isNaki(); });
    }
    /* 字牌判定 */
    Mentsu.prototype.isJihai = function () {
        return this.haiList.every(function (hai) { return hai.isJihai(); });
    };
    /* 么九牌判定 */
    Mentsu.prototype.isYaochu = function () {
        return this.haiList.some(function (hai) { return hai.isYaoChu(); });
    };
    /* 上がり判定 */
    Mentsu.prototype.isAgari = function () {
        return this.haiList.some(function (hai) { return hai.isAgari(); });
    };
    /* 牌タイプ取得 */
    Mentsu.prototype.getHaiType = function () {
        return this.haiList[0].getTypeName();
    };
    /* メンツID取得 */
    Mentsu.prototype.getMentsuId = function () {
        return this.haiList.join("");
    };
    /* 牌一覧取得 */
    Mentsu.prototype.getHaiList = function () {
        return this.haiList;
    };
    /* 牌順序一覧取得 */
    Mentsu.prototype.getHaiNumList = function () {
        return this.haiNumList;
    };
    /* 牌数取得 */
    Mentsu.prototype.getHaiCount = function () {
        return this.haiList.length;
    };
    Mentsu.TANKI = "単騎";
    Mentsu.SYABO = "シャボ";
    Mentsu.PENTYAN = "ペンチャン";
    Mentsu.KANTYAN = "カンチャン";
    Mentsu.RYANMEN = "リャンメン";
    return Mentsu;
}());

//# sourceMappingURL=mentsu.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HaiMan; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_hai__ = __webpack_require__(35);

/**
 *  牌管理クラス
 */
var HaiMan = /** @class */ (function () {
    function HaiMan() {
        // private ALL_HAI_TYPE_LIST: Array<Hai> = new Array<Hai>();
        this.ALL_HAI_LIST = new Array();
        this.init();
    }
    /* public */
    /**
     * 牌IDから牌を取得
     * @param id 牌ID
     */
    HaiMan.getHaiById = function (id) {
        return HaiMan.ALL_HAI_TYPE_LIST.find(function (hai) { return hai.getId() == id; });
    };
    /**
     * 牌タイプ・コードから牌を取得
     * @param type 牌タイプ
     * @param code 牌コード
     */
    HaiMan.getHaiByTypeCode = function (type, code) {
        return HaiMan.ALL_HAI_TYPE_LIST.find(function (hai) { return (hai.getType() == type && hai.getCode() == code); });
    };
    /**
     * 牌タイプ名ごとの牌一覧を取得
     * @param typeName 牌タイプ名
     */
    HaiMan.getHaiListByTypeName = function (typeName) {
        var haiList = HaiMan.ALL_HAI_TYPE_LIST.filter(function (hai) {
            return hai.getTypeName() == typeName;
        });
        return haiList;
    };
    /**
     * 字牌タイプ一覧を取得
     */
    HaiMan.getJihaiList = function () {
        var haiList = HaiMan.ALL_HAI_TYPE_LIST.filter(function (hai) {
            return hai.isJihai() == true;
        });
        return haiList;
    };
    /* private */
    HaiMan.prototype.init = function () {
        var _this = this;
        // 4枚ずつ
        HaiMan.ALL_HAI_TYPE_LIST.forEach(function (hai) {
            for (var i = 0; i < 4; i++) {
                _this.ALL_HAI_LIST.push(hai);
            }
        });
    };
    HaiMan.MAN1 = new __WEBPACK_IMPORTED_MODULE_0__models_hai__["a" /* Hai */]("011", "１萬");
    HaiMan.MAN2 = new __WEBPACK_IMPORTED_MODULE_0__models_hai__["a" /* Hai */]("012", "２萬");
    HaiMan.MAN3 = new __WEBPACK_IMPORTED_MODULE_0__models_hai__["a" /* Hai */]("013", "３萬");
    HaiMan.MAN4 = new __WEBPACK_IMPORTED_MODULE_0__models_hai__["a" /* Hai */]("014", "４萬");
    HaiMan.MAN5 = new __WEBPACK_IMPORTED_MODULE_0__models_hai__["a" /* Hai */]("015", "５萬");
    HaiMan.MAN6 = new __WEBPACK_IMPORTED_MODULE_0__models_hai__["a" /* Hai */]("016", "６萬");
    HaiMan.MAN7 = new __WEBPACK_IMPORTED_MODULE_0__models_hai__["a" /* Hai */]("017", "７萬");
    HaiMan.MAN8 = new __WEBPACK_IMPORTED_MODULE_0__models_hai__["a" /* Hai */]("018", "８萬");
    HaiMan.MAN9 = new __WEBPACK_IMPORTED_MODULE_0__models_hai__["a" /* Hai */]("019", "９萬");
    HaiMan.PIN1 = new __WEBPACK_IMPORTED_MODULE_0__models_hai__["a" /* Hai */]("021", "１筒");
    HaiMan.PIN2 = new __WEBPACK_IMPORTED_MODULE_0__models_hai__["a" /* Hai */]("022", "２筒");
    HaiMan.PIN3 = new __WEBPACK_IMPORTED_MODULE_0__models_hai__["a" /* Hai */]("023", "３筒");
    HaiMan.PIN4 = new __WEBPACK_IMPORTED_MODULE_0__models_hai__["a" /* Hai */]("024", "４筒");
    HaiMan.PIN5 = new __WEBPACK_IMPORTED_MODULE_0__models_hai__["a" /* Hai */]("025", "５筒");
    HaiMan.PIN6 = new __WEBPACK_IMPORTED_MODULE_0__models_hai__["a" /* Hai */]("026", "６筒");
    HaiMan.PIN7 = new __WEBPACK_IMPORTED_MODULE_0__models_hai__["a" /* Hai */]("027", "７筒");
    HaiMan.PIN8 = new __WEBPACK_IMPORTED_MODULE_0__models_hai__["a" /* Hai */]("028", "８筒");
    HaiMan.PIN9 = new __WEBPACK_IMPORTED_MODULE_0__models_hai__["a" /* Hai */]("029", "９筒");
    HaiMan.SOU1 = new __WEBPACK_IMPORTED_MODULE_0__models_hai__["a" /* Hai */]("031", "１索");
    HaiMan.SOU2 = new __WEBPACK_IMPORTED_MODULE_0__models_hai__["a" /* Hai */]("032", "２索");
    HaiMan.SOU3 = new __WEBPACK_IMPORTED_MODULE_0__models_hai__["a" /* Hai */]("033", "３索");
    HaiMan.SOU4 = new __WEBPACK_IMPORTED_MODULE_0__models_hai__["a" /* Hai */]("034", "４索");
    HaiMan.SOU5 = new __WEBPACK_IMPORTED_MODULE_0__models_hai__["a" /* Hai */]("035", "５索");
    HaiMan.SOU6 = new __WEBPACK_IMPORTED_MODULE_0__models_hai__["a" /* Hai */]("036", "６索");
    HaiMan.SOU7 = new __WEBPACK_IMPORTED_MODULE_0__models_hai__["a" /* Hai */]("037", "７索");
    HaiMan.SOU8 = new __WEBPACK_IMPORTED_MODULE_0__models_hai__["a" /* Hai */]("038", "８索");
    HaiMan.SOU9 = new __WEBPACK_IMPORTED_MODULE_0__models_hai__["a" /* Hai */]("039", "９索");
    HaiMan.TON = new __WEBPACK_IMPORTED_MODULE_0__models_hai__["a" /* Hai */]("1aA", "東");
    HaiMan.NAN = new __WEBPACK_IMPORTED_MODULE_0__models_hai__["a" /* Hai */]("1aB", "西");
    HaiMan.SYA = new __WEBPACK_IMPORTED_MODULE_0__models_hai__["a" /* Hai */]("1aC", "南");
    HaiMan.PE = new __WEBPACK_IMPORTED_MODULE_0__models_hai__["a" /* Hai */]("1aD", "北");
    HaiMan.HAKU = new __WEBPACK_IMPORTED_MODULE_0__models_hai__["a" /* Hai */]("1bE", "白");
    HaiMan.HATSU = new __WEBPACK_IMPORTED_MODULE_0__models_hai__["a" /* Hai */]("1bF", "發");
    HaiMan.TYUN = new __WEBPACK_IMPORTED_MODULE_0__models_hai__["a" /* Hai */]("1bG", "中");
    /** 么九牌一覧 */
    HaiMan.YAOCHU_HAI_LIST = [
        HaiMan.MAN1, HaiMan.MAN9, HaiMan.PIN1, HaiMan.PIN9, HaiMan.SOU1, HaiMan.SOU9,
        HaiMan.TON, HaiMan.NAN, HaiMan.SYA, HaiMan.PE, HaiMan.HAKU, HaiMan.HATSU, HaiMan.TYUN
    ];
    /** 牌タイプ一覧 */
    HaiMan.ALL_HAI_TYPE_LIST = [
        HaiMan.MAN1, HaiMan.MAN2, HaiMan.MAN3, HaiMan.MAN4, HaiMan.MAN5,
        HaiMan.MAN6, HaiMan.MAN7, HaiMan.MAN8, HaiMan.MAN9 // 1:萬
        ,
        HaiMan.PIN1, HaiMan.PIN2, HaiMan.PIN3, HaiMan.PIN4, HaiMan.PIN5,
        HaiMan.PIN6, HaiMan.PIN7, HaiMan.PIN8, HaiMan.PIN9 // 2:筒
        ,
        HaiMan.SOU1, HaiMan.SOU2, HaiMan.SOU3, HaiMan.SOU4, HaiMan.SOU5,
        HaiMan.SOU6, HaiMan.SOU7, HaiMan.SOU8, HaiMan.SOU9 // 3:索
        ,
        HaiMan.TON, HaiMan.NAN, HaiMan.SYA, HaiMan.PE // a:風牌
        ,
        HaiMan.HAKU, HaiMan.HATSU, HaiMan.TYUN // b:三元牌
    ];
    return HaiMan;
}());

//# sourceMappingURL=HaiMan.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Shuntsu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mentsu__ = __webpack_require__(36);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 *  順子クラス
 */
var Shuntsu = /** @class */ (function (_super) {
    __extends(Shuntsu, _super);
    function Shuntsu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /* 符取得 */
    Shuntsu.prototype.getHu = function () {
        var hu = 0;
        var agariType = this.getAgariType();
        if (agariType == __WEBPACK_IMPORTED_MODULE_0__mentsu__["a" /* Mentsu */].KANTYAN || agariType == __WEBPACK_IMPORTED_MODULE_0__mentsu__["a" /* Mentsu */].PENTYAN) {
            hu += 2;
        }
        return hu;
    };
    /* 上がり形取得 */
    Shuntsu.prototype.getAgariType = function () {
        if (this.isAgari()) {
            var haiList = this.haiList;
            if (haiList[1].isAgari()) {
                return __WEBPACK_IMPORTED_MODULE_0__mentsu__["a" /* Mentsu */].KANTYAN;
            }
            else if (haiList.some(function (hai) { return hai.isAgari() == false && hai.isYaoChu(); })) {
                return __WEBPACK_IMPORTED_MODULE_0__mentsu__["a" /* Mentsu */].PENTYAN;
            }
            else {
                return __WEBPACK_IMPORTED_MODULE_0__mentsu__["a" /* Mentsu */].RYANMEN;
            }
        }
        return "";
    };
    return Shuntsu;
}(__WEBPACK_IMPORTED_MODULE_0__mentsu__["a" /* Mentsu */]));

//# sourceMappingURL=shuntsu.js.map

/***/ })

},[208]);
//# sourceMappingURL=main.js.map