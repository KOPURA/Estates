webpackJsonp([7],{

/***/ 175:
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
webpackEmptyAsyncContext.id = 175;

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/estate-home/estate-home.module": [
		711,
		6
	],
	"../pages/estate-map/estate-map.module": [
		712,
		5
	],
	"../pages/estate-overview/estate-overview.module": [
		713,
		4
	],
	"../pages/estates/estates.module": [
		714,
		3
	],
	"../pages/locations/locations.module": [
		715,
		2
	],
	"../pages/my-estates/my-estates.module": [
		716,
		1
	],
	"../pages/similar-estates/similar-estates.module": [
		717,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 221;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstateHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the EstateHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EstateHomePage = /** @class */ (function () {
    function EstateHomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.estateData = this.navParams.data;
        this.overviewPage = __WEBPACK_IMPORTED_MODULE_2__pages__["c" /* EstateOverviewPage */];
        this.mapPage = __WEBPACK_IMPORTED_MODULE_2__pages__["b" /* EstateMapPage */];
        this.similarEstatesPage = __WEBPACK_IMPORTED_MODULE_2__pages__["g" /* SimilarEstatesPage */];
    }
    EstateHomePage.prototype.ionViewDidLoad = function () {
    };
    EstateHomePage.prototype.goHome = function () {
        this.navCtrl.popToRoot();
    };
    EstateHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-estate-home',template:/*ion-inline-start:"/app/src/pages/estate-home/estate-home.html"*/'<!--\n  Generated template for the EstateHomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color="primary">\n    <ion-title>Ref. No {{estateData.estate.refNumber}}</ion-title>\n        <ion-buttons end> \n            <button icon-only ion-button (click)="goHome()">\n                <ion-icon name="home"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-tabs>\n    <ion-tab [root]="overviewPage" [rootParams]="estateData" tabTitle="Overview" tabIcon="information-circle"></ion-tab>\n    <ion-tab [root]="mapPage" [rootParams]="estateData" tabTitle="Map" tabIcon="map"></ion-tab>\n    <ion-tab [root]="similarEstatesPage" [rootParams]="estateData" tabTitle="Similar" tabIcon="photos"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/app/src/pages/estate-home/estate-home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], EstateHomePage);
    return EstateHomePage;
}());

//# sourceMappingURL=estate-home.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstatesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_estates_estates__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the EstatesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EstatesPage = /** @class */ (function () {
    function EstatesPage(navCtrl, navParams, loadingCtrl, estatesService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.estatesService = estatesService;
    }
    EstatesPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var location = this.navParams.data;
        var loadingInstance = this.loadingCtrl.create({
            content: "Fetching estates for location '" + location.name + "'..."
        });
        loadingInstance
            .present()
            .then(function () {
            _this.estatesService.getEstates(location.id).subscribe(function (estates) {
                _this.location = location;
                _this.regions = __WEBPACK_IMPORTED_MODULE_4_lodash__["uniq"](__WEBPACK_IMPORTED_MODULE_4_lodash__["map"](estates, function (estate) { return estate.region; }));
                _this.estatesByRegion = __WEBPACK_IMPORTED_MODULE_4_lodash__["groupBy"](estates, 'region');
                loadingInstance.dismiss();
            });
        });
    };
    EstatesPage.prototype.toEstate = function (estate) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages__["a" /* EstateHomePage */], {
            location: this.location,
            estate: estate
        });
    };
    EstatesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-estates',template:/*ion-inline-start:"/app/src/pages/estates/estates.html"*/'<!--\n  Generated template for the EstatesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Estates</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-item-group *ngFor="let region of regions">\n        <ion-item-divider color="secondary">\n            <ion-label>{{region}}</ion-label>\n        </ion-item-divider>\n        <ion-item *ngFor="let estate of estatesByRegion[region]">\n          <ion-thumbnail item-left>\n              <img [src]="estate.image">\n          </ion-thumbnail>\n          <h2>Ref No. {{estate.refNumber}}</h2>\n          <p text-wrap>{{estate.type}}, {{estate.bedrooms}} Bedrooms</p>\n          <p padding-top text-wrap>{{location.name}}, {{estate.region}}</p>\n          <a item-right (click)="toEstate(estate)">View</a>\n        </ion-item>\n    </ion-item-group>\n</ion-content>\n'/*ion-inline-end:"/app/src/pages/estates/estates.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_estates_estates__["a" /* EstatesProvider */]])
    ], EstatesPage);
    return EstatesPage;
}());

//# sourceMappingURL=estates.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_estates_estates__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the LocationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LocationsPage = /** @class */ (function () {
    function LocationsPage(navCtrl, navParams, loadingCtrl, estatesService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.estatesService = estatesService;
    }
    LocationsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loadingInstance = this.loadingCtrl.create({ content: "Fetching locations..." });
        loadingInstance
            .present()
            .then(function () {
            _this.estatesService.getLocations().subscribe(function (locations) {
                _this.locations = locations;
                loadingInstance.dismiss();
            });
        });
    };
    LocationsPage.prototype.openLocation = function (location) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages__["d" /* EstatesPage */], location);
    };
    LocationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-locations',template:/*ion-inline-start:"/app/src/pages/locations/locations.html"*/'<!--\n  Generated template for the LocationsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Locations</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-list>\n        <button ion-item *ngFor="let location of locations" (click)="openLocation(location)">\n            {{location.name}}\n        </button>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/app/src/pages/locations/locations.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_estates_estates__["a" /* EstatesProvider */]])
    ], LocationsPage);
    return LocationsPage;
}());

//# sourceMappingURL=locations.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyEstatesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_pages__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the MyEstatesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyEstatesPage = /** @class */ (function () {
    function MyEstatesPage(navCtrl, navParams, storageService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storageService = storageService;
        this.title = 'Royal Estates';
        this.pageSubtitle = 'My Estates';
        this.savedEstates = [];
    }
    MyEstatesPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storageService.getAllEstates().then(function (estates) {
            _this.savedEstates = estates;
        });
    };
    MyEstatesPage.prototype.ionViewDidLoad = function () {
    };
    MyEstatesPage.prototype.toEstate = function (estate) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_pages__["a" /* EstateHomePage */], {
            location: estate.location,
            estate: estate.estate
        });
    };
    MyEstatesPage.prototype.toLocationsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_pages__["e" /* LocationsPage */]);
    };
    MyEstatesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-my-estates',template:/*ion-inline-start:"/app/src/pages/my-estates/my-estates.html"*/'<!--\n  Generated template for the MyEstatesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- End of header -->\n<ion-header>\n    <ion-navbar color="primary">\n        <button ion-button menuToggle left >\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title text-center>{{title}}</ion-title>\n    </ion-navbar>\n\n    <ion-toolbar color="secondary">\n        <ion-title>{{pageSubtitle}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-card *ngIf="savedEstates.length">\n        <ion-card-header>\n            Saved Estates\n        </ion-card-header>\n\n        <ion-list>\n            <ion-item *ngFor="let estate of savedEstates">\n              <ion-thumbnail item-left>\n                  <img [src]="estate.estate.image">\n              </ion-thumbnail>\n              <h2>Ref No. {{estate.estate.refNumber}}</h2>\n              <p text-wrap>{{estate.estate.type}}, {{estate.estate.bedrooms}} Bedrooms</p>\n              <p padding-top text-wrap>{{estate.location.name}}, {{estate.estate.region}}</p>\n              <a item-right (click)="toEstate(estate)">View</a>\n            </ion-item>\n        </ion-list>\n    \n        <div padding>\n            <button ion-button (click)="toLocationsPage()">\n                <ion-icon padding-right name="search"></ion-icon>\n                Find a Location\n            </button>\n        </div>\n    </ion-card>\n    <ion-card *ngIf="!savedEstates.length">\n        <div padding>\n            <ion-label>\n                To save more estates, select a location, then you can save estates from their overview page.\n            </ion-label>\n            <button ion-button (click)="toLocationsPage()">\n                <ion-icon padding-right name="search"></ion-icon>\n                Find a Location\n            </button>\n        </div>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/app/src/pages/my-estates/my-estates.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */]])
    ], MyEstatesPage);
    return MyEstatesPage;
}());

//# sourceMappingURL=my-estates.js.map

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstateOverviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_estates_estates__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the EstateOverviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EstateOverviewPage = /** @class */ (function () {
    function EstateOverviewPage(navCtrl, navParams, alertCtrl, toastCtrl, estatesService, storageService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.estatesService = estatesService;
        this.storageService = storageService;
        this.estate = this.navParams.data.estate;
        this.location = this.navParams.data.location;
    }
    EstateOverviewPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storageService.isSaved(this.estate).then(function (isSaved) { return _this.isSaved = isSaved; });
    };
    EstateOverviewPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.estatesService.getEstates(this.location.id).subscribe(function (estates) {
            _this.estate = __WEBPACK_IMPORTED_MODULE_4_lodash__["first"](__WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](estates, function (estate) { return estate.id === _this.estate.id; }));
            refresher.complete();
        });
    };
    EstateOverviewPage.prototype.saveEstate = function () {
        var _this = this;
        this.storageService.addEstate(this.estate, this.location).then(function () { return _this.isSaved = true; });
    };
    EstateOverviewPage.prototype.removeEstate = function () {
        var _this = this;
        this.alertCtrl.create({
            title: 'Remove Estate',
            message: 'Are you sure you want to remove from saved estates?',
            buttons: [{
                    text: 'No',
                    role: 'cancel',
                    handler: function () { }
                }, {
                    text: 'Yes',
                    handler: function () {
                        _this.storageService.removeEstate(_this.estate).then(function () {
                            _this.isSaved = false;
                            _this.showSuccessfulEstateRemovalToast();
                        });
                    }
                }]
        }).present();
    };
    EstateOverviewPage.prototype.showSuccessfulEstateRemovalToast = function () {
        this.toastCtrl.create({
            message: 'Estate was removed successfully!',
            duration: 2000,
            position: 'bottom'
        }).present();
    };
    EstateOverviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-estate-overview',template:/*ion-inline-start:"/app/src/pages/estate-overview/estate-overview.html"*/'<!--\n  Generated template for the EstateOverviewPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n        <ion-title>EstateOverview</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles" refreshingText="Refreshing...">\n        </ion-refresher-content>\n    </ion-refresher>\n\n    <ion-card>\n        <img [src]="estate.image" />\n    </ion-card>\n    <ion-card-content>\n        <div *ngIf="isSaved;then remove_button else save_button"></div>\n        <ng-template #save_button>\n            <button ion-button outline (click)="saveEstate()">\n                <ion-icon padding-right name="bookmark"></ion-icon>\n                Save To My Estates\n            </button>\n        </ng-template>\n        <ng-template #remove_button>\n            <button ion-button outline color="danger" (click)="removeEstate()">\n                <ion-icon padding-right name="close"></ion-icon>\n                Remove from my estates\n            </button>\n        </ng-template>\n        <ion-grid padding-top>\n            <ion-row>\n                <ion-col>{{estate.type}}</ion-col>\n                <ion-col>{{estate.area}} m<sup>2</sup></ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col><ion-badge>{{estate.bedrooms}}</ion-badge> Bedrooms</ion-col>\n                <ion-col>{{estate.price | currency:\'USD\':\'symbol\':\'1.2-2\'}}</ion-col>\n            </ion-row>\n            <p padding-top>{{estate.address}}</p>\n        </ion-grid>\n    </ion-card-content>\n</ion-content>\n'/*ion-inline-end:"/app/src/pages/estate-overview/estate-overview.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_estates_estates__["a" /* EstatesProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__["a" /* StorageProvider */]])
    ], EstateOverviewPage);
    return EstateOverviewPage;
}());

//# sourceMappingURL=estate-overview.js.map

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstateMapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agm_core__ = __webpack_require__(318);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the EstateMapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EstateMapPage = /** @class */ (function () {
    function EstateMapPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.zoom = 18;
        this.estate = navParams.data.estate;
    }
    EstateMapPage.prototype.ionViewDidLoad = function () {
    };
    EstateMapPage.prototype.startNavigation = function () {
        console.log("Starting navigation...");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__agm_core__["b" /* AgmMap */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__agm_core__["b" /* AgmMap */])
    ], EstateMapPage.prototype, "agmMap", void 0);
    EstateMapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-estate-map',template:/*ion-inline-start:"/app/src/pages/estate-map/estate-map.html"*/'<!--\n  Generated template for the EstateMapPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>EstateMap</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <agm-map\n        [longitude]="estate.longitude"\n        [latitude]="estate.latitude"\n        [zoom]="zoom">\n        <agm-marker [longitude]="estate.longitude" [latitude]="estate.latitude"></agm-marker>\n\n    </agm-map>\n    <ion-fab left bottom>\n        <button ion-fab click (click)="startNavigation()">\n            <ion-icon name="navigate"></ion-icon>\n        </button>\n    </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/app/src/pages/estate-map/estate-map.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], EstateMapPage);
    return EstateMapPage;
}());

//# sourceMappingURL=estate-map.js.map

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimilarEstatesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_estates_estates__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_pages__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the SimilarEstatesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SimilarEstatesPage = /** @class */ (function () {
    function SimilarEstatesPage(navCtrl, navParams, loadingCtrl, estatesService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.estatesService = estatesService;
        this.types = ['Apartment', 'House', 'Studio'];
        this.estate = navParams.data.estate;
        this.location = navParams.data.location;
        this.region = "all";
        this.selectedType = 'Apartment';
        this.filteringEnabled = false;
    }
    SimilarEstatesPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loadingInstance = this.loadingCtrl.create({ content: "Fetching similar estates..." });
        loadingInstance
            .present()
            .then(function () {
            _this.estatesService.getEstates(_this.location.id).subscribe(function (estates) {
                _this.estatesByRegion = __WEBPACK_IMPORTED_MODULE_4_lodash__["groupBy"](estates, 'region');
                _this.allRegions = __WEBPACK_IMPORTED_MODULE_4_lodash__["uniq"](__WEBPACK_IMPORTED_MODULE_4_lodash__["map"](estates, function (estate) { return estate.region; }));
                _this.filteredRegions = _this.getFilteredRegions(_this.region);
                loadingInstance.dismiss();
            });
        });
    };
    SimilarEstatesPage.prototype.segmentChanged = function (event) {
        this.filteredRegions = this.getFilteredRegions(this.region);
    };
    SimilarEstatesPage.prototype.getFilteredRegions = function (region) {
        var _this = this;
        return region === 'all'
            ? this.allRegions
            : __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](this.allRegions, function (r) { return r === _this.estate.region; });
    };
    SimilarEstatesPage.prototype.shouldShowRegion = function (region) {
        var _this = this;
        if (!this.filteringEnabled) {
            return true;
        }
        var filteredEstates = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](this.estatesByRegion[region], function (e) { return e.type === _this.selectedType; });
        return filteredEstates.length > 0;
    };
    SimilarEstatesPage.prototype.toEstate = function (estate) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_pages__["a" /* EstateHomePage */], {
            location: this.location,
            estate: estate
        });
    };
    SimilarEstatesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-similar-estates',template:/*ion-inline-start:"/app/src/pages/similar-estates/similar-estates.html"*/'<!--\n  Generated template for the SimilarEstatesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>SimilarEstates</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-segment [(ngModel)]="region" (ionChange)="segmentChanged($event)">\n    <ion-segment-button value="all">\n      All\n    </ion-segment-button>\n    <ion-segment-button value="region">\n      Region\n    </ion-segment-button>\n  </ion-segment>\n\n  <ion-card padding>\n    <ion-item>\n      <ion-label item-left>Filter By Type:</ion-label>\n      <ion-select [(ngModel)]="selectedType">\n        <ion-option *ngFor="let type of types">{{type}}</ion-option>\n      </ion-select>\n      <ion-toggle [(ngModel)]="filteringEnabled"></ion-toggle>\n    </ion-item>\n  </ion-card>\n\n  <ng-container *ngFor="let region of filteredRegions">\n    <ion-item-group *ngIf="shouldShowRegion(region)">\n      <ion-item-divider color="secondary">\n          <ion-label>{{region}}</ion-label>\n      </ion-item-divider>\n\n      <ng-container *ngFor="let estate of estatesByRegion[region]">\n        <ion-item *ngIf="!filteringEnabled || estate.type === selectedType">\n          <ion-thumbnail item-left>\n              <img [src]="estate.image">\n          </ion-thumbnail>\n          <h2>Ref No. {{estate.refNumber}}</h2>\n          <p text-wrap>{{estate.type}}, {{estate.bedrooms}} Bedrooms</p>\n          <p padding-top text-wrap>{{location.name}}, {{estate.region}}</p>\n          <a item-right (click)="toEstate(estate)">View</a>\n        </ion-item>\n      </ng-container>\n    </ion-item-group>\n  </ng-container>\n</ion-content>\n'/*ion-inline-end:"/app/src/pages/similar-estates/similar-estates.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_estates_estates__["a" /* EstatesProvider */]])
    ], SimilarEstatesPage);
    return SimilarEstatesPage;
}());

//# sourceMappingURL=similar-estates.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(382);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__agm_core__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(710);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_estates_estates__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_storage_storage__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_pages__ = __webpack_require__(43);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_pages__["f" /* MyEstatesPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_pages__["e" /* LocationsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_pages__["d" /* EstatesPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_pages__["a" /* EstateHomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_pages__["c" /* EstateOverviewPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_pages__["b" /* EstateMapPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_pages__["g" /* SimilarEstatesPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/estate-home/estate-home.module#EstateHomePageModule', name: 'EstateHomePage', segment: 'estate-home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/estate-map/estate-map.module#EstateMapPageModule', name: 'EstateMapPage', segment: 'estate-map', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/estate-overview/estate-overview.module#EstateOverviewPageModule', name: 'EstateOverviewPage', segment: 'estate-overview', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/estates/estates.module#EstatesPageModule', name: 'EstatesPage', segment: 'estates', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/locations/locations.module#LocationsPageModule', name: 'LocationsPage', segment: 'locations', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my-estates/my-estates.module#MyEstatesPageModule', name: 'MyEstatesPage', segment: 'my-estates', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/similar-estates/similar-estates.module#SimilarEstatesPageModule', name: 'SimilarEstatesPage', segment: 'similar-estates', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyApDyHfVZbbCjO0O1nf_pgv4YZf8RVqfmA'
                }),
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_pages__["f" /* MyEstatesPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_pages__["e" /* LocationsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_pages__["d" /* EstatesPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_pages__["a" /* EstateHomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_pages__["c" /* EstateOverviewPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_pages__["b" /* EstateMapPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_pages__["g" /* SimilarEstatesPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_9__providers_estates_estates__["a" /* EstatesProvider */],
                __WEBPACK_IMPORTED_MODULE_10__providers_storage_storage__["a" /* StorageProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__estate_home_estate_home__ = __webpack_require__(370);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__estate_home_estate_home__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__estates_estates__ = __webpack_require__(371);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__estates_estates__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__locations_locations__ = __webpack_require__(372);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__locations_locations__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__my_estates_my_estates__ = __webpack_require__(373);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_3__my_estates_my_estates__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__estate_overview_estate_overview__ = __webpack_require__(374);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_4__estate_overview_estate_overview__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__estate_map_estate_map__ = __webpack_require__(375);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_5__estate_map_estate_map__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__similar_estates_similar_estates__ = __webpack_require__(376);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_6__similar_estates_similar_estates__["a"]; });







//# sourceMappingURL=pages.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstatesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the EstatesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var EstatesProvider = /** @class */ (function () {
    function EstatesProvider(http) {
        this.http = http;
        this.baseApiUrl = "https://royal-estates-2e75e.firebaseio.com";
    }
    EstatesProvider.prototype.getLocations = function () {
        return this.http.get(this.baseApiUrl + "/locations.json").pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleHttpError));
    };
    EstatesProvider.prototype.getEstates = function (locationId) {
        return this.http.get(this.baseApiUrl + "/locations-data.json").pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (response) {
            if (!(locationId in response)) {
                throw new Error("Unknown location id " + locationId);
            }
            return response[locationId].estates;
        }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleHttpError));
    };
    EstatesProvider.prototype.handleHttpError = function (e) {
        console.error(e);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(new Error("Failed to fetch estates info: " + e.message));
    };
    EstatesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], EstatesProvider);
    return EstatesProvider;
}());

//# sourceMappingURL=estates.js.map

/***/ }),

/***/ 710:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_pages__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_storage_storage__ = __webpack_require__(85);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, storageService, events) {
        var _this = this;
        this.storageService = storageService;
        this.events = events;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_pages__["f" /* MyEstatesPage */];
        this.storedEstates = [];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.loadStoredEstates();
            _this.listenForStoredEventsChanges();
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.toFindLocation = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__pages_pages__["e" /* LocationsPage */]);
    };
    MyApp.prototype.toStoredEstate = function (estate) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__pages_pages__["a" /* EstateHomePage */], estate);
    };
    MyApp.prototype.listenForStoredEventsChanges = function () {
        var _this = this;
        this.events.subscribe('estates:changed', function (estates) {
            _this.storedEstates = estates;
        });
    };
    MyApp.prototype.loadStoredEstates = function () {
        var _this = this;
        this.storageService.getAllEstates().then(function (estates) {
            _this.storedEstates = estates;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/app/src/app/app.html"*/'<ion-menu [content]="content" type="overlay">\n    <ion-header>\n        <ion-toolbar color="tertiary">\n            <ion-title>Menu</ion-title>\n        </ion-toolbar>\n    </ion-header>\n    <ion-content>\n        <button padding-bottom menuClose ion-item (click)="toFindLocation()">Find a Location</button>\n        <button *ngFor="let estate of storedEstates" menuClose ion-item (click)="toStoredEstate(estate)">\n            {{estate.location.name}}, {{estate.estate.region}}, Ref. No. {{estate.estate.refNumber}}\n        </button>\n    </ion-content>\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/app/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__providers_storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the StorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var StorageProvider = /** @class */ (function () {
    function StorageProvider(storage, events) {
        this.storage = storage;
        this.events = events;
        this.storageKey = "estates";
    }
    StorageProvider.prototype.addEstate = function (estate, location) {
        var _this = this;
        return this.getEstatesAsMap().then(function (estates) {
            estates[estate.id] = { estate: estate, location: location };
            return _this.saveEstates(estates);
        });
    };
    StorageProvider.prototype.getAllEstates = function () {
        return this.getEstatesAsMap().then(function (estates) {
            return Promise.resolve(__WEBPACK_IMPORTED_MODULE_3_lodash__["values"](estates || {}));
        });
    };
    StorageProvider.prototype.isSaved = function (estate) {
        return this.getEstatesAsMap()
            .then(function (estates) { return Promise.resolve(estate.id in estates); })
            .catch(function (error) { return Promise.resolve(false); });
    };
    StorageProvider.prototype.removeEstate = function (estate) {
        var _this = this;
        return this.getEstatesAsMap().then(function (estates) {
            delete estates[estate.id];
            return _this.saveEstates(estates);
        });
    };
    StorageProvider.prototype.saveEstates = function (estates) {
        var _this = this;
        return this.storage.set(this.storageKey, estates)
            .then(function (success) { return _this.events.publish('estates:changed', __WEBPACK_IMPORTED_MODULE_3_lodash__["values"](estates || {})); })
            .then(function (success) { return Promise.resolve(true); })
            .catch(function (error) { return Promise.resolve(false); });
    };
    StorageProvider.prototype.getEstatesAsMap = function () {
        var _this = this;
        return this.storage.ready()
            .then(function () {
            return _this.storage.get(_this.storageKey)
                .then(function (estates) { return Promise.resolve(estates || {}); })
                .catch(function (error) { return Promise.resolve({}); });
        });
    };
    StorageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], StorageProvider);
    return StorageProvider;
}());

//# sourceMappingURL=storage.js.map

/***/ })

},[377]);
//# sourceMappingURL=main.js.map