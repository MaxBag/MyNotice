webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-common/about/about.component.css":
/***/ (function(module, exports) {

module.exports = ".about {\r\n    margin: 100px auto 10px;\r\n    text-align: center;\r\n    font-size: 20px;\r\n}"

/***/ }),

/***/ "./src/app/app-common/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"about\">Non commercial use. Сreated for the portfolio.</div>\n"

/***/ }),

/***/ "./src/app/app-common/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("./src/app/app-common/about/about.component.html"),
            styles: [__webpack_require__("./src/app/app-common/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-common/app-common.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppCommonModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header_header_component__ = __webpack_require__("./src/app/app-common/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_menu_component__ = __webpack_require__("./src/app/app-common/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__page_not_found_page_not_found_component__ = __webpack_require__("./src/app/app-common/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__about_about_component__ = __webpack_require__("./src/app/app-common/about/about.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppCommonModule = /** @class */ (function () {
    function AppCommonModule() {
    }
    AppCommonModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forChild([]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_3__menu_menu_component__["a" /* MenuComponent */],
                __WEBPACK_IMPORTED_MODULE_5__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_6__about_about_component__["a" /* AboutComponent */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_3__menu_menu_component__["a" /* MenuComponent */],
                __WEBPACK_IMPORTED_MODULE_5__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_6__about_about_component__["a" /* AboutComponent */]
            ]
        })
    ], AppCommonModule);
    return AppCommonModule;
}());



/***/ }),

/***/ "./src/app/app-common/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ".header-holder {\r\n    background: royalblue;\r\n    width: 100%;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 2;\r\n}\r\n\r\nheader {\r\n    padding: 8px;\r\n    height: 48px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n    margin: 0 auto;\r\n    width: 80%;\r\n}\r\n\r\n.header-color {\r\n    background: brown;\r\n}\r\n\r\n.menu-holder, .list-view {\r\n    border-radius: 50%;\r\n    margin: 0 8px;\r\n    padding: 12px;\r\n    cursor: pointer;\r\n    height: 24px;\r\n    width: 24px;\r\n}\r\n\r\n.menu-holder:hover {\r\n  background: rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.logo {\r\n    cursor: pointer;\r\n    margin: 0 50px 0 0;\r\n}\r\n\r\n.logo-bold {\r\n    font-weight: bold;\r\n    margin: 0 4px 0 0;\r\n}\r\n\r\n.notice-search {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    background: #fff;\r\n    border-radius: 2px;\r\n}\r\n\r\n.btn-search, .btn-close {\r\n    background: none;\r\n    border: none;\r\n    cursor: pointer;\r\n    outline: none;\r\n    padding: 0 4px;\r\n    line-height: 0;\r\n}\r\n\r\n.btn-search {\r\n    float: left;\r\n}\r\n\r\n.btn-close {\r\n    -webkit-transition: opacity 250ms ease-out;\r\n    transition: opacity 250ms ease-out;\r\n    visibility: hidden;\r\n    border-radius: 50%;\r\n}\r\n\r\n.visible {\r\n    visibility: visible;\r\n}\r\n\r\n.field-search {\r\n    min-width: 550px;\r\n}\r\n\r\n.input-search {\r\n    border: none;\r\n    background: none;\r\n    margin: 0;\r\n    overflow: hidden;\r\n    outline: none;\r\n    font: normal 16px Roboto,sans-serif;\r\n    padding: 11px 16px 11px 16px;\r\n    width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/app-common/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header-holder\" [ngClass]= \"{ 'header-color': isFocused }\">\n  <header>\n    <div class=\"menu-holder\" (click)=\"onBtnMenuClick()\">\n      <svg focusable=\"false\" viewBox=\"0 0 24 24\">\n        <path d=\"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z\"></path>\n      </svg>\n    </div>\n    <div class=\"logo\"><span class=\"logo-bold\">My</span>Notice</div>\n    <div class=\"search-form-holder\">\n      <form class=\"notice-search\">\n          <button class=\"btn-search\" (click)=\"searchIssue($event, searchIssueField)\">\n            <svg focusable=\"false\" height=\"24px\" viewBox=\"0 0 24 24\" width=\"24px\" xmlns=\"http://www.w3.org/2000/svg\">\n              <path d=\"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z\"></path>\n              <path d=\"M0 0h24v24H0z\" fill=\"none\"></path>\n            </svg>\n          </button>\n          <div class=\"field-search\">\n            <input type=\"text\" autocomplete=\"off\" class=\"input-search\" placeholder=\"Search of title\" name=\"search\" #searchIssueField (input)=\"showBtnClose()\" (focus)=\"headerChangeColor()\" (blur)=\"headerChangeColor()\"/>\n          </div>\n          <button class=\"btn-close\" type=\"button\" [class.visible]=\"isBtnShown\" (click)=\"hideBtnClose(searchIssueField)\">\n            <svg focusable=\"false\" height=\"24px\" viewBox=\"0 0 24 24\" width=\"24px\" xmlns=\"http://www.w3.org/2000/svg\">\n              <path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"></path><path d=\"M0 0h24v24H0z\" fill=\"none\"></path>\n            </svg>\n          </button>\n      </form>\n    </div>\n    <div class=\"list-view\" *ngIf=\"isListView\" (click)=\"onChangeBtnView()\">\n      <svg focusable=\"false\" viewBox=\"0 0 24 24\"xmlns=\"http://www.w3.org/2000/svg\">\n        <g>\n        <rect height=\"24\" width=\"24\" y=\"-1\" x=\"-1\" fill=\"transparent\"/>\n        </g>\n        <g>\n        <rect height=\"6\" width=\"24\" y=\"0\" x=\"0\" fill=\"#4c4c4c\"/>\n        <rect height=\"6\" width=\"24\" y=\"9\" x=\"0\" fill=\"#4c4c4c\"/>\n        <rect height=\"6\" width=\"24\" y=\"18\" x=\"0\" fill=\"#4c4c4c\"/>\n        </g>\n      </svg>\n    </div>\n    <div class=\"list-view\" *ngIf=\"!isListView\" (click)=\"onChangeBtnView()\">\n      <svg focusable=\"false\" viewBox=\"0 0 24 24\"xmlns=\"http://www.w3.org/2000/svg\">\n        <g>\n        <rect height=\"24\" width=\"24\" y=\"-1\" x=\"-1\" fill=\"transparent\"/>\n        </g>\n        <g>\n        <rect height=\"11\" width=\"11\" y=\"0\" x=\"0\" fill=\"#4c4c4c\"/>\n        <rect height=\"11\" width=\"11\" y=\"0\" x=\"12\" fill=\"#4c4c4c\"/>\n        <rect height=\"11\" width=\"11\" y=\"12\" x=\"0\" fill=\"#4c4c4c\"/>\n        <rect height=\"11\" width=\"11\" y=\"12\" x=\"12\" fill=\"#4c4c4c\"/>\n        </g>\n      </svg>\n    </div>\n  </header>\n  </div>"

/***/ }),

/***/ "./src/app/app-common/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__notice_Services_data_and_flags_service__ = __webpack_require__("./src/app/notice/Services/data-and-flags.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(dataAndFlagsService, router) {
        this.dataAndFlagsService = dataAndFlagsService;
        this.router = router;
        this.isBtnShown = false;
        this.isListView = true;
        this.isBtnShowMenuClicked = false;
        this.isFocused = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.searchIssue = function ($event, searchIssueField) {
        $event.preventDefault();
        if (searchIssueField.value.trim() !== '') {
            this.dataAndFlagsService.setBtnSearchClicked(true);
            // this.dataAndFlagsService.setSearchableText(searchIssueField.value);
            this.router.navigate(['..', 'notices', 'search'], { queryParams: { input: searchIssueField.value } });
        }
    };
    HeaderComponent.prototype.onBtnMenuClick = function () {
        this.isBtnShowMenuClicked = !this.isBtnShowMenuClicked;
        this.dataAndFlagsService.setBtnShowMenu(this.isBtnShowMenuClicked);
    };
    HeaderComponent.prototype.showBtnClose = function () {
        this.isBtnShown = true;
        this.isFocused = true;
    };
    HeaderComponent.prototype.hideBtnClose = function (searchIssueField) {
        searchIssueField.value = '';
        this.isBtnShown = false;
        this.dataAndFlagsService.setBtnSearchClicked(false);
        this.router.navigate(['notices']);
    };
    HeaderComponent.prototype.headerChangeColor = function () {
        this.isFocused = !this.isFocused;
    };
    HeaderComponent.prototype.onChangeBtnView = function () {
        this.isListView = !this.isListView;
        this.dataAndFlagsService.setListView(this.isListView);
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/app-common/header/header.component.html"),
            styles: [__webpack_require__("./src/app/app-common/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__notice_Services_data_and_flags_service__["a" /* DataAndFlagsService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/app-common/menu/menu.component.css":
/***/ (function(module, exports) {

module.exports = ".menu {\r\n  border-right: 1px solid rgba(0, 0, 0, 0.1);\r\n  -webkit-transform: translateX(-100%);\r\n          transform: translateX(-100%);\r\n  font-size: 14px;\r\n  font-weight: bold;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  margin: 64px 0 0;\r\n  width: 320px;\r\n  height: 100%;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n  -webkit-transition: -webkit-transform 150ms ease-out;\r\n  transition: -webkit-transform 150ms ease-out;\r\n  transition: transform 150ms ease-out;\r\n  transition: transform 150ms ease-out, -webkit-transform 150ms ease-out;\r\n}\r\n\r\n.menu-visible {\r\n  -webkit-transform: translateX(0);\r\n          transform: translateX(0);\r\n}\r\n\r\n.holder-item {\r\n  padding: 5px 10px 5px;\r\n  cursor: pointer;\r\n  font: 16px/2.36em 'Roboto Slab', 'Times New Roman', serif;\r\n}\r\n\r\n.holder-item a {\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  width: 100%;\r\n}\r\n\r\nul li a:hover, .all-notes:hover, .all-labels:hover, .all-deleted:hover, .about:hover {\r\n  opacity: 0.8;\r\n}\r\n\r\n.all-notes, .all-labels, .all-deleted, .about {\r\n  text-align: center;\r\n  margin: 0;\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\r\n  min-height: 40px;\r\n}\r\n\r\n.all-notes {\r\n  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAPUlEQVR4AWMY/qABiP8D8QEgfgBik4AbMAyCsck1iHIX0QI4gEwmEztgeA0quIBMr1FuEPW8RhiMJsjhDQD8DH/hlEmD0QAAAABJRU5ErkJggg==') no-repeat 0 50%;\r\n}\r\n\r\n.all-labels {\r\n  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAQAAAD8x0bcAAAATklEQVR4AWMYGGDD4IAGxdCVFDP8x4DfGCxRFe0DCmLCRwy8yIoOgAUx4Rp8ihAwjRhF3xnUiFGkTVhRBmHrthIOgscMAiQEJuFooT8AAHxof8lzaZIuAAAAAElFTkSuQmCC') no-repeat 0 50%;\r\n}\r\n\r\n.all-deleted {\r\n  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAV0lEQVR4AWMYUsAIiPcB8QEQhrK1idXsAMT/icQO+AxSAOIGIrECIVclgLxCACcQ9BvUtv+4DIHKNRBvEA4w3A0aNSiHiHSUQ4xBnEC8Eo9BK8FqBj0AAN+CQ3pi59wGAAAAAElFTkSuQmCC') no-repeat 0 50%;\r\n}\r\n\r\n.about {\r\n  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAQAAAD8x0bcAAAAjUlEQVR4AZXStxUCMRAA0d8BF2Fy6EMtYLrAm4bw0Be0gUj1zt9MIm92V3cywcpKkCll6Ckmvg3lmPiIOT8mEka+YolfIwBuycTOLuldAXp+lYt+esBMrHEOHMXKk6IjcBITgyDtn4BF7aJF/uH5RcnDuVS+6dImmAMJ49K0jOUYeOUSPKgulbW1INOVP5yxploOSSbQAAAAAElFTkSuQmCC') no-repeat 0 50%;\r\n}"

/***/ }),

/***/ "./src/app/app-common/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<aside class=\"menu\" [class.menu-visible]=\"getBtnShowMenuClicked()\">\n  <div class=\"holder-item\">\n    <p class=\"all-notes\"><a [routerLink]=\"['..', 'notices']\">All Notices</a></p>\n  </div>\n  <div class=\"holder-item\">\n    <p class=\"all-labels\">Labels (No available)</p>\n  </div>\n  <div class=\"holder-item\">\n    <p class=\"all-deleted\">Deleted (No available)</p>\n  </div>\n  <div class=\"holder-item\">\n    <p class=\"about\"><a routerLink=\"../about\">About</a></p>\n  </div>\n</aside>\n"

/***/ }),

/***/ "./src/app/app-common/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__notice_Services_data_and_flags_service__ = __webpack_require__("./src/app/notice/Services/data-and-flags.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuComponent = /** @class */ (function () {
    function MenuComponent(dataAndFlagsService) {
        this.dataAndFlagsService = dataAndFlagsService;
    }
    MenuComponent.prototype.ngOnInit = function () {
        this.getBtnShowMenuClicked();
    };
    MenuComponent.prototype.getBtnShowMenuClicked = function () {
        var _this = this;
        this.subscription = this.dataAndFlagsService.getBtnShowMenuClicked().subscribe(function (condition) { return _this.isBtnShowMenuClicked = condition; });
        return this.isBtnShowMenuClicked;
    };
    MenuComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    MenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-menu',
            template: __webpack_require__("./src/app/app-common/menu/menu.component.html"),
            styles: [__webpack_require__("./src/app/app-common/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__notice_Services_data_and_flags_service__["a" /* DataAndFlagsService */]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/app-common/page-not-found/page-not-found.component.css":
/***/ (function(module, exports) {

module.exports = ".text-holder {\r\n    margin: 100px auto 0;\r\n    font-size: 20px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.btn-go-back {\r\n    background: royalblue;\r\n    color: #fff;\r\n    cursor: pointer;\r\n    margin: 25px auto;\r\n    width: 115px;\r\n    font-size: 19px;\r\n    padding: 8px;\r\n    border-radius: 4px;\r\n}"

/***/ }),

/***/ "./src/app/app-common/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"text-holder\">Page not found &#9785;<br/>\n  <div class=\"btn-go-back\" [routerLink]=\"['..']\">Go back</div>\n</div>\n"

/***/ }),

/***/ "./src/app/app-common/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-not-found',
            template: __webpack_require__("./src/app/app-common/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("./src/app/app-common/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<app-menu></app-menu>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_common_app_common_module__ = __webpack_require__("./src/app/app-common/app-common.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notice_notice_module__ = __webpack_require__("./src/app/notice/notice.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__routing_routing_module__ = __webpack_require__("./src/app/routing/routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_common_app_common_module__["a" /* AppCommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__notice_notice_module__["a" /* NoticeModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_6__routing_routing_module__["a" /* RoutingModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/notice/Directives/horizontal-scroll-field.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HorizontalScrollFieldDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HorizontalScrollFieldDirective = /** @class */ (function () {
    function HorizontalScrollFieldDirective(el) {
        this.el = el;
    }
    HorizontalScrollFieldDirective.prototype.resizeOnInput = function () {
        this.resizeField();
    };
    HorizontalScrollFieldDirective.prototype.resizeOnFocus = function () {
        this.resizeField();
    };
    HorizontalScrollFieldDirective.prototype.resizeField = function () {
        if (this.el.nativeElement.value === '') {
            this.el.nativeElement.style.height = '';
        }
        else {
            this.el.nativeElement.style.height = this.el.nativeElement.scrollHeight + 'px';
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('input'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HorizontalScrollFieldDirective.prototype, "resizeOnInput", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('focus'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HorizontalScrollFieldDirective.prototype, "resizeOnFocus", null);
    HorizontalScrollFieldDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[appHorizontalScrollField]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
    ], HorizontalScrollFieldDirective);
    return HorizontalScrollFieldDirective;
}());



/***/ }),

/***/ "./src/app/notice/Directives/selected-color.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectedColorDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SelectedColorDirective = /** @class */ (function () {
    function SelectedColorDirective(elem) {
        this.elem = elem;
    }
    SelectedColorDirective.prototype.onClickCurrent = function () {
        var target = this.elem.nativeElement;
        var children = target.parentNode.children;
        for (var i = 0; i < children.length; i++) {
            children[i].style.border = '';
        }
        target.style.border = '1px solid blue';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SelectedColorDirective.prototype, "onClickCurrent", null);
    SelectedColorDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[appSelectedColor]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
    ], SelectedColorDirective);
    return SelectedColorDirective;
}());



/***/ }),

/***/ "./src/app/notice/Directives/set-coord.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetCoordDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_data_and_flags_service__ = __webpack_require__("./src/app/notice/Services/data-and-flags.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SetCoordDirective = /** @class */ (function () {
    function SetCoordDirective(dataAndFlagService, elem) {
        this.dataAndFlagService = dataAndFlagService;
        this.elem = elem;
    }
    SetCoordDirective.prototype.onClickBtn = function () {
        var targetStyleHeight = this.elem.nativeElement.offsetHeight + 'px';
        this.dataAndFlagService.setCoordsBtn(targetStyleHeight);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SetCoordDirective.prototype, "onClickBtn", null);
    SetCoordDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[appSetCoord]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Services_data_and_flags_service__["a" /* DataAndFlagsService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
    ], SetCoordDirective);
    return SetCoordDirective;
}());



/***/ }),

/***/ "./src/app/notice/Services/data-and-flags.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataAndFlagsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_service__ = __webpack_require__("./src/app/notice/Services/http.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataAndFlagsService = /** @class */ (function () {
    function DataAndFlagsService(http) {
        this.http = http;
        // searchableText: string;
        this.isListView = true;
        this.isBtnShowMenuClicked = false;
        this.isAddedNewNotice = false;
        this.isBtnSearchClicked = false;
    }
    DataAndFlagsService.prototype.setBtnShowMenu = function (condition) {
        this.isBtnShowMenuClicked = condition;
    };
    DataAndFlagsService.prototype.getBtnShowMenuClicked = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(this.isBtnShowMenuClicked);
    };
    DataAndFlagsService.prototype.setCoordsBtn = function (coord) {
        this.coordsBtn = coord;
    };
    DataAndFlagsService.prototype.setListView = function (isListView) {
        this.isListView = isListView;
    };
    DataAndFlagsService.prototype.getListViewVal = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(this.isListView);
    };
    DataAndFlagsService.prototype.addedNewNotice = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(this.isAddedNewNotice);
    };
    DataAndFlagsService.prototype.setBtnSearchClicked = function (condition) {
        this.isBtnSearchClicked = condition;
    };
    // setSearchableText(text: string): void {
    //   this.searchableText = text;
    // }
    DataAndFlagsService.prototype.getBtnSearchClicked = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(this.isBtnSearchClicked);
    };
    DataAndFlagsService.prototype.getAllNotes = function () {
        return this.http.getAllNotices();
    };
    DataAndFlagsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */]])
    ], DataAndFlagsService);
    return DataAndFlagsService;
}());



/***/ }),

/***/ "./src/app/notice/Services/http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var db = 'http://5aecb385f67ff700145106f4.mockapi.io/noticess';
var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
    }
    HttpService.prototype.ngOnInit = function () {
    };
    HttpService.prototype.getAllNotices = function () {
        return this.http.get(db);
    };
    HttpService.prototype.addNotice = function (note) {
        return this.http.post(db, note);
        // return of(null);
    };
    HttpService.prototype.getNoticeOne = function (id) {
        return this.http.get(db + "/" + id);
    };
    HttpService.prototype.updateNotice = function (notice) {
        return this.http.put(db + "/" + notice.id, notice);
    };
    HttpService.prototype.deleteNotice = function (id) {
        return this.http.delete(db + "/" + id);
    };
    HttpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/notice/color-pallete/color-pallete.component.css":
/***/ (function(module, exports) {

module.exports = ".pallete-block {\r\n    background: #f3eded;\r\n    border-radius: 5px;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n    -webkit-border-radius: 5px;\r\n    box-shadow: 0 0 5px rgba(0,0,0,0.5);\r\n    -webkit-box-shadow: 0 0 5px rgba(0,0,0,0.5); \r\n    display: none;\r\n    height: 86px;\r\n    padding: 5px 5px 0;\r\n    position: absolute;\r\n    overflow: hidden;\r\n    opacity: 0;\r\n    width: 138px;\r\n    -webkit-transition: opacity 0.6s;\r\n    transition: opacity 0.6s;\r\n}\r\n\r\n.color-item-block {\r\n    border-radius: 22px;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n    cursor: pointer;\r\n    -webkit-border-radius: 22px;\r\n    float: left;\r\n    height: 22px;\r\n    margin: 0 5px 5px;\r\n    width: 22px;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n}\r\n\r\n.color-item-block:hover {\r\n    opacity: 0.7;\r\n}\r\n\r\n.visible-pallete {\r\n    display: block;\r\n    opacity: 1;\r\n}\r\n\r\n.selected-color {\r\n    border: 1px solid blue;\r\n}"

/***/ }),

/***/ "./src/app/notice/color-pallete/color-pallete.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pallete-block\" [class.visible-pallete]=\"isShownPallete\" [style.top]=\"posForPallete\" [@showPalleteAnimation]=\"palleteState\">\n  <div class=\"color-item-block\" *ngFor=\"let color of colors\" [style.backgroundColor]=\"color\" [style.border] = \"'1px solid '+ color\" (click)=\"onChangeCurrentColor($event)\" appSelectedColor></div>\n</div>"

/***/ }),

/***/ "./src/app/notice/color-pallete/color-pallete.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorPalleteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_data_and_flags_service__ = __webpack_require__("./src/app/notice/Services/data-and-flags.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var pallete = [
    '#fff',
    '#ff8a80',
    '#ffd180',
    '#ffff8d',
    '#ccff90',
    '#a7ffeb',
    '#80d8ff',
    '#82b1ff',
    '#b388ff',
    '#f8bbd0',
    '#d7ccc8',
    '#cfd8dc'
];
var ColorPalleteComponent = /** @class */ (function () {
    function ColorPalleteComponent(element, rendere, dataAndFlagService) {
        this.element = element;
        this.rendere = rendere;
        this.dataAndFlagService = dataAndFlagService;
        this.colors = pallete;
        this.changedCurrentColor = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    ColorPalleteComponent.prototype.onChangeCurrentColor = function (event) {
        this.currentColor = event.target.style.backgroundColor;
        this.isShownPallete = false;
        var obj = { currentColor: this.currentColor, isShownPallete: this.isShownPallete };
        this.changedCurrentColor.emit(obj);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ColorPalleteComponent.prototype, "isShownPallete", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], ColorPalleteComponent.prototype, "posForPallete", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], ColorPalleteComponent.prototype, "palleteState", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], ColorPalleteComponent.prototype, "changedCurrentColor", void 0);
    ColorPalleteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-color-pallete',
            template: __webpack_require__("./src/app/notice/color-pallete/color-pallete.component.html"),
            styles: [__webpack_require__("./src/app/notice/color-pallete/color-pallete.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* trigger */])('showPalleteAnimation', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* transition */])('inactive <=> active', [
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])(250, Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["f" /* keyframes */])([
                            Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ opacity: 0, transform: 'scale(0)', offset: 0 }),
                            Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ opacity: 1, transform: 'scale(1.3)', offset: 0.3 }),
                            Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ opacity: 1, transform: 'scale(1)', offset: 0.6 }),
                            Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ opacity: 1, transform: 'scale(1.1)', offset: 0.8 }),
                            Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ opacity: 1, transform: 'scale(1)', offset: 1 })
                        ]))
                    ]),
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_1__Services_data_and_flags_service__["a" /* DataAndFlagsService */]])
    ], ColorPalleteComponent);
    return ColorPalleteComponent;
}());



/***/ }),

/***/ "./src/app/notice/container-notices/container-notices.component.css":
/***/ (function(module, exports) {

module.exports = ".notice-holder {    \r\n    width: 44%;\r\n    margin: 50px auto 0;\r\n    font-size: 20px;\r\n}\r\n\r\n.empty-search {\r\n    font-size: 24px;\r\n    text-align: center;\r\n}\r\n\r\n.btn-go-back {\r\n    background: royalblue;\r\n    color: #fff;\r\n    cursor: pointer;\r\n    margin: 25px auto;\r\n    width: 115px;\r\n    font-size: 19px;\r\n    padding: 8px;\r\n    border-radius: 4px;\r\n}"

/***/ }),

/***/ "./src/app/notice/container-notices/container-notices.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"notice-holder\">\r\n    <div *ngIf=\"emptySearch\" class=\"empty-search\">Sorry, no title to your request &#9785;<br />\r\n        Choose another request <br/>\r\n        Or click<br/>\r\n        <div class=\"btn-go-back\" [routerLink]=\"['..']\">Go back</div>\r\n    </div>\r\n    <app-usual-notice  [notes]=\"notes$\"></app-usual-notice>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/notice/container-notices/container-notices.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContainerNoticesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_http_service__ = __webpack_require__("./src/app/notice/Services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_data_and_flags_service__ = __webpack_require__("./src/app/notice/Services/data-and-flags.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContainerNoticesComponent = /** @class */ (function () {
    function ContainerNoticesComponent(httpService, dataAndFlags) {
        this.httpService = httpService;
        this.dataAndFlags = dataAndFlags;
        this.notes$ = [];
        this.onDestroy = false;
        this.addedNewNotice = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    Object.defineProperty(ContainerNoticesComponent.prototype, "addNewNotice", {
        set: function (isAddedNotice) {
            if (isAddedNotice) {
                this.getAllNotices();
            }
        },
        enumerable: true,
        configurable: true
    });
    ContainerNoticesComponent.prototype.ngOnInit = function () {
        // this.getAllNotices();
    };
    ContainerNoticesComponent.prototype.ngOnDestroy = function () {
        if (this.onDestroy) {
            this.subscription.unsubscribe();
        }
    };
    ContainerNoticesComponent.prototype.getAllNotices = function () {
        var _this = this;
        // const conditionSearchOn = this.dataAndFlags.isBtnSearchClicked;
        // const searchableTextRegExp = new RegExp(`${this.dataAndFlags.searchableText}`, 'i');
        this.subscription = this.httpService.getAllNotices().subscribe(function (data) {
            // data.map(obj => obj.changeTime = this.formatTime(obj.changeTime));
            // if (conditionSearchOn) {
            //   this.notes$ = data.filter(obj => obj.title.search(searchableTextRegExp) > -1);
            //   if (this.notes$.length === 0) {
            //     this.emptySearch = true;
            //   }
            //   this.dataAndFlags.isBtnSearchClicked = false;
            // } else {
            _this.notes$ = data.reverse();
            // }
            _this.addedNewNotice.emit(false);
            _this.onDestroy = true;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ContainerNoticesComponent.prototype, "notes$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], ContainerNoticesComponent.prototype, "addNewNotice", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ContainerNoticesComponent.prototype, "emptySearch", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], ContainerNoticesComponent.prototype, "addedNewNotice", void 0);
    ContainerNoticesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-container-notices',
            template: __webpack_require__("./src/app/notice/container-notices/container-notices.component.html"),
            styles: [__webpack_require__("./src/app/notice/container-notices/container-notices.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Services_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_2__Services_data_and_flags_service__["a" /* DataAndFlagsService */]])
    ], ContainerNoticesComponent);
    return ContainerNoticesComponent;
}());



/***/ }),

/***/ "./src/app/notice/general-notices/general-notices.component.css":
/***/ (function(module, exports) {

module.exports = ".holder {\r\n    margin: 100px 0 0;\r\n}"

/***/ }),

/***/ "./src/app/notice/general-notices/general-notices.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"holder\">\n    <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/notice/general-notices/general-notices.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeneralNoticesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GeneralNoticesComponent = /** @class */ (function () {
    function GeneralNoticesComponent() {
    }
    GeneralNoticesComponent.prototype.ngOnInit = function () {
    };
    GeneralNoticesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-general-notices',
            template: __webpack_require__("./src/app/notice/general-notices/general-notices.component.html"),
            styles: [__webpack_require__("./src/app/notice/general-notices/general-notices.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GeneralNoticesComponent);
    return GeneralNoticesComponent;
}());



/***/ }),

/***/ "./src/app/notice/label/label.component.css":
/***/ (function(module, exports) {

module.exports = ".search-label-form {\r\n    background: #fff;\r\n    border-radius: 5px;\r\n    box-shadow: 0 0 5px rgba(0,0,0,0.5);\r\n    -webkit-box-shadow: 0 0 5px rgba(0,0,0,0.5); \r\n    color: #000;\r\n    display: none;\r\n    font-size: 14px;\r\n    margin: 7px 0 0;\r\n    width: 230px;\r\n    padding: 10px;\r\n    position: absolute;\r\n    left: 250px;\r\n}\r\n\r\n::ng-deep .mat-form-field-placeholder{\r\n    color:#000;\r\n}\r\n\r\n::ng-deep .mat-focused .mat-form-field-placeholder{\r\n    color:#000;\r\n}\r\n\r\n::ng-deep .mat-form-field-underline .mat-form-field-ripple{ \r\n    color:#000;\r\n    background-color: #000;\r\n}\r\n\r\n::ng-deep .mat-form-field-underline{\r\n    color:#000;\r\n    background-color: #000;\r\n}\r\n\r\n.visible-block-label {\r\n    display: block;\r\n}"

/***/ }),

/***/ "./src/app/notice/label/label.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"search-label-form\" [style.top]=\"posForLabel\" [class.visible-block-label]=\"isShownLabel\">\n    <mat-form-field class=\"input-lable\">\n        <input matInput placeholder=\"Search lable\">\n      </mat-form-field>\n  <div >\n    <!-- <mat-checkbox matCheckbox></mat-checkbox> -->\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/notice/label/label.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LabelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LabelComponent = /** @class */ (function () {
    function LabelComponent() {
    }
    LabelComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], LabelComponent.prototype, "posForLabel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], LabelComponent.prototype, "isShownLabel", void 0);
    LabelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-label',
            template: __webpack_require__("./src/app/notice/label/label.component.html"),
            styles: [__webpack_require__("./src/app/notice/label/label.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LabelComponent);
    return LabelComponent;
}());



/***/ }),

/***/ "./src/app/notice/notice-container-wrapper/notice-container-wrapper.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/notice/notice-container-wrapper/notice-container-wrapper.component.html":
/***/ (function(module, exports) {

module.exports = "<app-container-notices [notes$]=\"notes$\" [emptySearch]=\"emptySearch\"></app-container-notices>\n\n"

/***/ }),

/***/ "./src/app/notice/notice-container-wrapper/notice-container-wrapper.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticeContainerWrapperComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_data_and_flags_service__ = __webpack_require__("./src/app/notice/Services/data-and-flags.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_http_service__ = __webpack_require__("./src/app/notice/Services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NoticeContainerWrapperComponent = /** @class */ (function () {
    function NoticeContainerWrapperComponent(dataAndFlags, httpService, route) {
        this.dataAndFlags = dataAndFlags;
        this.httpService = httpService;
        this.route = route;
        this.emptySearch = false;
    }
    NoticeContainerWrapperComponent.prototype.ngOnInit = function () {
        this.getNotesFromSearch();
    };
    NoticeContainerWrapperComponent.prototype.ngOnDestroy = function () {
        this.emptySearch = false;
        this.subscription.unsubscribe();
    };
    NoticeContainerWrapperComponent.prototype.getNotesFromSearch = function () {
        var _this = this;
        var searchableTextRegExp;
        this.subscription = this.route.queryParams.switchMap(function (params) {
            searchableTextRegExp = new RegExp("" + params['input'], 'i');
            return _this.httpService.getAllNotices();
        }).subscribe(function (data) {
            _this.notes$ = data.filter(function (obj) { return obj.title.search(searchableTextRegExp) > -1; });
            if (_this.notes$.length === 0) {
                _this.emptySearch = true;
            }
            _this.dataAndFlags.isBtnSearchClicked = false;
        });
    };
    NoticeContainerWrapperComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-notice-container-wrapper',
            template: __webpack_require__("./src/app/notice/notice-container-wrapper/notice-container-wrapper.component.html"),
            styles: [__webpack_require__("./src/app/notice/notice-container-wrapper/notice-container-wrapper.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Services_data_and_flags_service__["a" /* DataAndFlagsService */], __WEBPACK_IMPORTED_MODULE_2__Services_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], NoticeContainerWrapperComponent);
    return NoticeContainerWrapperComponent;
}());



/***/ }),

/***/ "./src/app/notice/notice-creator/notice-creator.component.css":
/***/ (function(module, exports) {

module.exports = ".wrapper {\r\n    width: 80%;\r\n    margin: 0 auto;\r\n}\r\n.main-editor {\r\n    box-shadow: 0 0 5px rgba(0,0,0,0.5);\r\n    -webkit-box-shadow: 0 0 5px rgba(0,0,0,0.5); \r\n    background: #fff;\r\n    border-radius: 8px;\r\n    min-height: 200px;\r\n    width: 570px;\r\n    margin: 0 auto 30px;\r\n    padding: 15px 0 0;\r\n}\r\n.tiles {\r\n    width: 200px;\r\n    padding: 0 0 0 20px;\r\n}\r\n.title, .notice {\r\n    padding: 10px 15px;\r\n    outline: none;\r\n    margin: 0 0 10px;\r\n}\r\n.title textarea, .notice textarea {\r\n    border: none; \r\n    background: transparent;\r\n    width: 100% !important;\r\n    outline: none;\r\n    resize: none;\r\n    height: auto;\r\n    padding: 0;\r\n    overflow: hidden;\r\n}\r\n.title textarea{\r\n  font: bold 17px/1.35em 'Roboto Condensed', arial, sans-serif;\r\n}\r\n.notice textarea{\r\n    font: 16px/1.36em 'Roboto Slab', 'Times New Roman', serif;\r\n}\r\n.error {\r\n    color: red;\r\n}\r\n.toolbar {\r\n\tpadding: 0 20px;\r\n\tposition: relative;\r\n}\r\n.toolbar:after {\r\n\tcontent: '';\r\n\tdisplay: block;\r\n\tclear: both;\r\n}\r\n.btn-change-color {\r\n    float: left;\r\n    cursor: pointer;\r\n    height: 32px;\r\n    width: 32px;\r\n    background: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjE4cHgiIHdpZHRoPSIxOHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0iIzAwMDAwMCI+CiA8cGF0aCBkPSJtMjQgNmMtOS45NCAwLTE4IDguMDYtMTggMThzOC4wNiAxOCAxOCAxOGMxLjY2IDAgMy0xLjM0IDMtMyAwLTAuNzgtMC4yOS0xLjQ4LTAuNzgtMi4wMS0wLjQ3LTAuNTMtMC43NS0xLjIyLTAuNzUtMS45OSAwLTEuNjYgMS4zNC0zIDMtM2gzLjUzYzUuNTIgMCAxMC00LjQ4IDEwLTEwIDAtOC44NC04LjA2LTE2LTE4LTE2em0tMTEgMThjLTEuNjYgMC0zLTEuMzQtMy0zczEuMzQtMyAzLTMgMyAxLjM0IDMgMy0xLjM0IDMtMyAzem02LThjLTEuNjYgMC0zLTEuMzQtMy0zczEuMzQtMyAzLTMgMyAxLjM0IDMgMy0xLjM0IDMtMyAzem0xMCAwYy0xLjY2IDAtMy0xLjM0LTMtM3MxLjM0LTMgMy0zIDMgMS4zNCAzIDMtMS4zNCAzLTMgM3ptNiA4Yy0xLjY2IDAtMy0xLjM0LTMtM3MxLjM0LTMgMy0zIDMgMS4zNCAzIDMtMS4zNCAzLTMgM3oiLz4KIDxwYXRoIGQ9Im0wIDBoNDh2NDhoLTQ4eiIgZmlsbD0ibm9uZSIvPgo8L3N2Zz4K) center no-repeat;\r\n    opacity: 0.7;\r\n}\r\n.btn-change-color:hover {\r\n    opacity: 1;\r\n}\r\n.btn-save, .btn-reset, .btn-label, .btn-edit, .btn-delete {\r\n    cursor: pointer;\r\n    float: right;\r\n    border-radius: 3px;\r\n    font: 13px/1.31em 'Roboto',arial,sans-serif;;\r\n    text-transform: uppercase;\r\n    padding: 8px 14px;\r\n    position: relative;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n}\r\n.btn-save:hover, .btn-reset:hover, .btn-label:hover, .btn-edit:hover, .btn-delete:hover {\r\n    background: rgba(0, 0, 0, 0.08);\r\n}"

/***/ }),

/***/ "./src/app/notice/notice-creator/notice-creator.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"main-editor\" [style.backgroundColor]=\"currentColor\">\n    <div class=\"title\">\n      <textarea type=\"text\"  spellcheck=\"false\" [class.error]=\"isErrorText\" #titleField [value]='title' (input)=\"setTitle(titleField.value)\" (focus)=\"onFocusField('title', titleField.value)\" (blur)=\"onBlurField('title', titleField.value)\" appHorizontalScrollField></textarea>\n    </div>\n    <div class=\"notice\">\n      <textarea type=\"text\" spellcheck=\"false\" [class.error]=\"isErrorText\" #noticeField [value]='notice' (input)=\"setNotice(noticeField.value)\" (focus)=\"onFocusField('notice', noticeField.value)\" (blur)=\"onBlurField('notice', noticeField.value)\" appHorizontalScrollField></textarea>\n    </div>\n    <div class=\"toolbar\">\n      <div class=\"btn-change-color\" (click)=\"showPallete()\" appSetCoord></div>\n      <div class=\"btn-save\" (click)=\"onClickBtnSave($event)\">Save</div>\n      <div class=\"btn-reset\" (click)=\"onClickBtnReset()\">Reset</div>\n      <!-- <div class=\"btn-label\" (click)=\"showLabels()\" appSetCoord>Add Label</div> -->\n      <app-color-pallete [palleteState]='palleteState' [posForPallete]=\"posForPallete\" [isShownPallete]=\"isShownPallete\" (changedCurrentColor)=\"setColor($event)\"></app-color-pallete>\n      <app-label [posForLabel]=\"posForLabel\" [isShownLabel]=\"isShownLabel\"></app-label>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/notice/notice-creator/notice-creator.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticeCreatorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_data_and_flags_service__ = __webpack_require__("./src/app/notice/Services/data-and-flags.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_http_service__ = __webpack_require__("./src/app/notice/Services/http.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var titleText = 'Enter a title';
var noticeText = 'Notice...';
var NoticeCreatorComponent = /** @class */ (function () {
    function NoticeCreatorComponent(dataAndFlagService, http) {
        this.dataAndFlagService = dataAndFlagService;
        this.http = http;
        this.clickedBtnSave = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.currentColor = '#fff';
        this.isShownPallete = false;
        this.isShownLabel = false;
        this.isErrorText = false;
        this.palleteState = 'inactive';
        this.title = titleText;
        this.notice = noticeText;
    }
    NoticeCreatorComponent.prototype.ngOnInit = function () {
    };
    NoticeCreatorComponent.prototype.ngOnDestroy = function () {
        if (this.destroyIt) {
            this.subscriptionOnAddedNewNotice.unsubscribe();
        }
    };
    NoticeCreatorComponent.prototype.setTitle = function (title) {
        this.title = title;
    };
    NoticeCreatorComponent.prototype.setNotice = function (notice) {
        this.notice = notice;
    };
    NoticeCreatorComponent.prototype.onFocusField = function (fieldName, value) {
        if (fieldName === 'title') {
            this.isErrorText = false;
            if (value === titleText) {
                this.title = '';
            }
        }
        else if (fieldName === 'notice') {
            this.isErrorText = false;
            if (value === noticeText) {
                this.notice = '';
            }
        }
    };
    NoticeCreatorComponent.prototype.onBlurField = function (fieldName, value) {
        if (fieldName === 'title') {
            if (value === '') {
                this.title = titleText;
            }
        }
        else if (fieldName === 'notice') {
            if (value === '') {
                this.notice = noticeText;
            }
        }
    };
    NoticeCreatorComponent.prototype.showPallete = function () {
        this.isShownPallete = !this.isShownPallete;
        this.posForPallete = this.dataAndFlagService.coordsBtn;
        this.palleteState = this.isShownPallete ? 'active' : 'inactive';
        this.isShownLabel = false;
    };
    NoticeCreatorComponent.prototype.setColor = function (obj) {
        this.currentColor = obj.currentColor;
        this.isShownPallete = obj.isShownPallete;
        this.palleteState = 'inactive';
    };
    NoticeCreatorComponent.prototype.showLabels = function () {
        this.isShownLabel = !this.isShownLabel;
        this.posForLabel = this.dataAndFlagService.coordsBtn;
        this.isShownPallete = false;
        this.palleteState = 'inactive';
    };
    NoticeCreatorComponent.prototype.onClickBtnReset = function () {
        this.title = titleText;
        this.notice = noticeText;
        this.currentColor = '';
        this.isErrorText = false;
        this.isShownPallete = false;
    };
    NoticeCreatorComponent.prototype.onClickBtnSave = function (event) {
        var _this = this;
        if (this.title === titleText || this.title === ''
            || this.notice === noticeText || this.notice === '') {
            event.preventDefault();
            this.isErrorText = true;
        }
        else {
            var note = {
                id: (new Date()).getTime(),
                title: this.title,
                notice: this.notice,
                color: this.currentColor,
                label: this.label,
                changeTime: (new Date().getTime())
            };
            this.destroyIt = true;
            this.subscriptionOnAddedNewNotice = this.http.addNotice(note).
                subscribe(function (data) {
                _this.clickedBtnSave.emit(true);
                _this.dataAndFlagService.isAddedNewNotice = true;
                _this.onClickBtnReset();
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], NoticeCreatorComponent.prototype, "clickedBtnSave", void 0);
    NoticeCreatorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-notice-creator',
            template: __webpack_require__("./src/app/notice/notice-creator/notice-creator.component.html"),
            styles: [__webpack_require__("./src/app/notice/notice-creator/notice-creator.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Services_data_and_flags_service__["a" /* DataAndFlagsService */], __WEBPACK_IMPORTED_MODULE_2__Services_http_service__["a" /* HttpService */]])
    ], NoticeCreatorComponent);
    return NoticeCreatorComponent;
}());



/***/ }),

/***/ "./src/app/notice/notice-editor-container/notice-editor-container.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/notice/notice-editor-container/notice-editor-container.component.html":
/***/ (function(module, exports) {

module.exports = "<app-notice-editor></app-notice-editor>\n"

/***/ }),

/***/ "./src/app/notice/notice-editor-container/notice-editor-container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticeEditorContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NoticeEditorContainerComponent = /** @class */ (function () {
    function NoticeEditorContainerComponent() {
    }
    NoticeEditorContainerComponent.prototype.ngOnInit = function () {
    };
    NoticeEditorContainerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-notice-editor-container',
            template: __webpack_require__("./src/app/notice/notice-editor-container/notice-editor-container.component.html"),
            styles: [__webpack_require__("./src/app/notice/notice-editor-container/notice-editor-container.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NoticeEditorContainerComponent);
    return NoticeEditorContainerComponent;
}());



/***/ }),

/***/ "./src/app/notice/notice-editor/notice-editor.component.css":
/***/ (function(module, exports) {

module.exports = ".wrapper {\r\n    width: 80%;\r\n    margin: 100px auto 0;\r\n}\r\n\r\n.title-edit {\r\n    font-size: 24px;\r\n    text-transform: capitalize;\r\n    text-align: center;\r\n    margin: 0 0 20px;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n}\r\n\r\n.main-editor {\r\n    box-shadow: 0 0 5px rgba(0,0,0,0.5);\r\n    -webkit-box-shadow: 0 0 5px rgba(0,0,0,0.5); \r\n    background: #fff;\r\n    border-radius: 8px;\r\n    min-height: 200px;\r\n    width: 570px;\r\n    margin: 0 auto 30px;\r\n    padding: 15px 0 0;\r\n}\r\n\r\n.title, .notice {\r\n    padding: 10px 15px;\r\n    outline: none;\r\n    margin: 0 0 10px;\r\n    min-height: 44px;\r\n}\r\n\r\n.title textarea, .notice textarea {\r\n    border: none; \r\n    background: transparent;\r\n    width: 100% !important;\r\n    outline: none;\r\n    resize: none;\r\n    height: auto;\r\n    padding: 0;\r\n    overflow: hidden;\r\n}\r\n\r\n.title textarea {\r\n    font: bold 17px/1.35em 'Roboto Condensed', arial, sans-serif;\r\n    height: 45px;\r\n}\r\n\r\n.notice textarea {\r\n    font: 16px/1.36em 'Roboto Slab', 'Times New Roman', serif;\r\n    height: 85px;\r\n}\r\n\r\n.error {\r\n    color: red;\r\n}\r\n\r\n.toolbar {\r\n\tpadding: 0 20px;\r\n\tposition: relative;\r\n}\r\n\r\n.toolbar:after {\r\n\tcontent: '';\r\n\tdisplay: block;\r\n\tclear: both;\r\n}\r\n\r\n.btn-change-color {\r\n    float: left;\r\n    cursor: pointer;\r\n    height: 32px;\r\n    width: 32px;\r\n    background: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjE4cHgiIHdpZHRoPSIxOHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0iIzAwMDAwMCI+CiA8cGF0aCBkPSJtMjQgNmMtOS45NCAwLTE4IDguMDYtMTggMThzOC4wNiAxOCAxOCAxOGMxLjY2IDAgMy0xLjM0IDMtMyAwLTAuNzgtMC4yOS0xLjQ4LTAuNzgtMi4wMS0wLjQ3LTAuNTMtMC43NS0xLjIyLTAuNzUtMS45OSAwLTEuNjYgMS4zNC0zIDMtM2gzLjUzYzUuNTIgMCAxMC00LjQ4IDEwLTEwIDAtOC44NC04LjA2LTE2LTE4LTE2em0tMTEgMThjLTEuNjYgMC0zLTEuMzQtMy0zczEuMzQtMyAzLTMgMyAxLjM0IDMgMy0xLjM0IDMtMyAzem02LThjLTEuNjYgMC0zLTEuMzQtMy0zczEuMzQtMyAzLTMgMyAxLjM0IDMgMy0xLjM0IDMtMyAzem0xMCAwYy0xLjY2IDAtMy0xLjM0LTMtM3MxLjM0LTMgMy0zIDMgMS4zNCAzIDMtMS4zNCAzLTMgM3ptNiA4Yy0xLjY2IDAtMy0xLjM0LTMtM3MxLjM0LTMgMy0zIDMgMS4zNCAzIDMtMS4zNCAzLTMgM3oiLz4KIDxwYXRoIGQ9Im0wIDBoNDh2NDhoLTQ4eiIgZmlsbD0ibm9uZSIvPgo8L3N2Zz4K) center no-repeat;\r\n    opacity: 0.7;\r\n}\r\n\r\n.btn-change-color:hover {\r\n    opacity: 1;\r\n}\r\n\r\n.btn-save, .btn-reset, .btn-label, .btn-edit, .btn-back, .btn-delete {\r\n    cursor: pointer;\r\n    float: right;\r\n    border-radius: 3px;\r\n    font: 13px/1.31em 'Roboto',arial,sans-serif;;\r\n    text-transform: uppercase;\r\n    padding: 8px 14px;\r\n    position: relative;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n}\r\n\r\n.btn-save:hover, .btn-reset:hover, .btn-label:hover, .btn-edit:hover, .btn-back:hover, .btn-delete:hover {\r\n    background: rgba(0, 0, 0, 0.08);\r\n}"

/***/ }),

/***/ "./src/app/notice/notice-editor/notice-editor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" *ngIf=\"noticeOne\"  [@flyInOut]=\"in\">\n  <div class=\"title-edit\">Edit note</div>\n  <div class=\"main-editor\" [style.backgroundColor]=\"currentColor\">\n    <div class=\"title\">\n      <textarea spellcheck=\"false\" [class.error]=\"isErrorText\" #titleField [value]='title' (input)=\"setTitle(titleField.value)\" (focus)=\"onFocusField('title', titleField.value)\" (blur)=\"onBlurField('title', titleField.value)\" appHorizontalScrollField></textarea>\n    </div>\n    <div class=\"notice\">\n      <textarea spellcheck=\"false\" [class.error]=\"isErrorText\" #noticeField [value]='notice' (input)=\"setNotice(noticeField.value)\" (focus)=\"onFocusField('notice', noticeField.value)\" (blur)=\"onBlurField('notice', noticeField.value)\" appHorizontalScrollField></textarea>\n    </div>\n    <div class=\"toolbar\">\n      <div class=\"btn-change-color\" (click)=\"showPallete()\" appSetCoord></div>\n      <div class=\"btn-save\" (click)=\"onClickBtnSave($event)\">Save</div>\n      <div class=\"btn-reset\" (click)=\"onClickBtnReset()\">Reset</div>\n      <!-- <div class=\"btn-label\" (click)=\"showLabels()\" appSetCoord>Change Label</div> -->\n      <div class=\"btn-delete\" (click)=\"onClickBtnDelete()\">Delete</div>\n      <div class=\"btn-back\" (click)=\"goBack()\">Back</div>\n      <app-color-pallete [palleteState]='palleteState' [posForPallete]=\"posForPallete\" [isShownPallete]=\"isShownPallete\" (changedCurrentColor)=\"setColor($event)\"></app-color-pallete>\n      <app-label [posForLabel]=\"posForLabel\" [isShownLabel]=\"isShownLabel\"></app-label>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/notice/notice-editor/notice-editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticeEditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__notice_creator_notice_creator_component__ = __webpack_require__("./src/app/notice/notice-creator/notice-creator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_data_and_flags_service__ = __webpack_require__("./src/app/notice/Services/data-and-flags.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Services_http_service__ = __webpack_require__("./src/app/notice/Services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var titleText = 'Enter a title';
var noticeText = 'Notice...';
var NoticeEditorComponent = /** @class */ (function (_super) {
    __extends(NoticeEditorComponent, _super);
    function NoticeEditorComponent(dataAndFlagsService, http, route, router) {
        var _this = _super.call(this, dataAndFlagsService, http) || this;
        _this.dataAndFlagsService = dataAndFlagsService;
        _this.http = http;
        _this.route = route;
        _this.router = router;
        return _this;
    }
    NoticeEditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.paramMap.switchMap(function (params) {
            var id = +params.get('id');
            return _this.http.getNoticeOne(id);
        }).subscribe(function (data) {
            _this.noticeOne = data;
            _this.title = _this.noticeOne.title;
            _this.notice = _this.noticeOne.notice;
            _this.currentColor = _this.noticeOne.color;
        });
    };
    NoticeEditorComponent.prototype.ngOnDestroy = function () {
        if (this.isOnDeleteDestroy) {
            this.subscriptionOnDelete.unsubscribe();
        }
        else if (this.isOnSaveDestroy) {
            this.subscriptionOnSave.unsubscribe();
        }
        this.subscription.unsubscribe();
    };
    NoticeEditorComponent.prototype.onClickBtnDelete = function () {
        var _this = this;
        this.subscriptionOnDelete = this.route.paramMap.switchMap(function (params) {
            var id = +params.get('id');
            return _this.http.deleteNotice(id);
        }).subscribe(function () {
            _this.isOnDeleteDestroy = true;
            _this.goBack();
        });
    };
    NoticeEditorComponent.prototype.onClickBtnSave = function (event) {
        var _this = this;
        if (this.title === titleText || this.title === ''
            || this.notice === noticeText || this.notice === '') {
            event.preventDefault();
            this.isErrorText = true;
        }
        else {
            var updatedNotice = {
                notice: this.notice,
                title: this.title,
                color: this.currentColor,
                id: this.noticeOne.id,
                label: '',
                changeTime: (new Date().getTime())
            };
            this.subscriptionOnSave = this.http.updateNotice(updatedNotice)
                .subscribe(function () {
                _this.isOnSaveDestroy = true;
                _this.goBack();
            });
        }
    };
    NoticeEditorComponent.prototype.goBack = function () {
        this.router.navigate(['../']);
    };
    NoticeEditorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-notice-editor',
            template: __webpack_require__("./src/app/notice/notice-editor/notice-editor.component.html"),
            styles: [__webpack_require__("./src/app/notice/notice-editor/notice-editor.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["k" /* trigger */])('flyInOut', [
                    Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["h" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["i" /* style */])({ opacity: 1, transform: 'translateY(0)' })),
                    Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["j" /* transition */])('void => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["i" /* style */])({
                            opacity: 0,
                            transform: 'translateY(100%)'
                        }),
                        Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["e" /* animate */])('0.15s ease-in')
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["j" /* transition */])('* => void', [
                        Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["e" /* animate */])('0.2s 0.1s ease-out', Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["i" /* style */])({
                            opacity: 0,
                            transform: 'translateY(100%)'
                        }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__Services_data_and_flags_service__["a" /* DataAndFlagsService */], __WEBPACK_IMPORTED_MODULE_3__Services_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], NoticeEditorComponent);
    return NoticeEditorComponent;
}(__WEBPACK_IMPORTED_MODULE_1__notice_creator_notice_creator_component__["a" /* NoticeCreatorComponent */]));



/***/ }),

/***/ "./src/app/notice/notice.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notice_creator_notice_creator_component__ = __webpack_require__("./src/app/notice/notice-creator/notice-creator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__color_pallete_color_pallete_component__ = __webpack_require__("./src/app/notice/color-pallete/color-pallete.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Directives_set_coord_directive__ = __webpack_require__("./src/app/notice/Directives/set-coord.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Services_data_and_flags_service__ = __webpack_require__("./src/app/notice/Services/data-and-flags.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Directives_selected_color_directive__ = __webpack_require__("./src/app/notice/Directives/selected-color.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_select__ = __webpack_require__("./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__label_label_component__ = __webpack_require__("./src/app/notice/label/label.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_checkbox__ = __webpack_require__("./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material_input__ = __webpack_require__("./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__usual_notice_usual_notice_component__ = __webpack_require__("./src/app/notice/usual-notice/usual-notice.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__container_notices_container_notices_component__ = __webpack_require__("./src/app/notice/container-notices/container-notices.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Directives_horizontal_scroll_field_directive__ = __webpack_require__("./src/app/notice/Directives/horizontal-scroll-field.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__general_notices_general_notices_component__ = __webpack_require__("./src/app/notice/general-notices/general-notices.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__wrapper_notices_wrapper_notices_component__ = __webpack_require__("./src/app/notice/wrapper-notices/wrapper-notices.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__Services_http_service__ = __webpack_require__("./src/app/notice/Services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__notice_editor_notice_editor_component__ = __webpack_require__("./src/app/notice/notice-editor/notice-editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__notice_editor_container_notice_editor_container_component__ = __webpack_require__("./src/app/notice/notice-editor-container/notice-editor-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__notice_container_wrapper_notice_container_wrapper_component__ = __webpack_require__("./src/app/notice/notice-container-wrapper/notice-container-wrapper.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pipes_format_date_pipe__ = __webpack_require__("./src/app/notice/pipes/format-date.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var NoticeModule = /** @class */ (function () {
    function NoticeModule() {
    }
    NoticeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_select__["a" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material_checkbox__["a" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material_input__["a" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_router__["c" /* RouterModule */].forChild([]),
                __WEBPACK_IMPORTED_MODULE_17__angular_common_http__["b" /* HttpClientModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__notice_creator_notice_creator_component__["a" /* NoticeCreatorComponent */],
                __WEBPACK_IMPORTED_MODULE_3__color_pallete_color_pallete_component__["a" /* ColorPalleteComponent */],
                __WEBPACK_IMPORTED_MODULE_4__Directives_set_coord_directive__["a" /* SetCoordDirective */],
                __WEBPACK_IMPORTED_MODULE_6__Directives_selected_color_directive__["a" /* SelectedColorDirective */],
                __WEBPACK_IMPORTED_MODULE_8__label_label_component__["a" /* LabelComponent */],
                __WEBPACK_IMPORTED_MODULE_8__label_label_component__["a" /* LabelComponent */],
                __WEBPACK_IMPORTED_MODULE_11__usual_notice_usual_notice_component__["a" /* UsualNoticeComponent */],
                __WEBPACK_IMPORTED_MODULE_12__container_notices_container_notices_component__["a" /* ContainerNoticesComponent */],
                __WEBPACK_IMPORTED_MODULE_13__Directives_horizontal_scroll_field_directive__["a" /* HorizontalScrollFieldDirective */],
                __WEBPACK_IMPORTED_MODULE_14__general_notices_general_notices_component__["a" /* GeneralNoticesComponent */],
                __WEBPACK_IMPORTED_MODULE_16__wrapper_notices_wrapper_notices_component__["a" /* WrapperNoticesComponent */],
                __WEBPACK_IMPORTED_MODULE_19__notice_editor_notice_editor_component__["a" /* NoticeEditorComponent */],
                __WEBPACK_IMPORTED_MODULE_20__notice_editor_container_notice_editor_container_component__["a" /* NoticeEditorContainerComponent */],
                __WEBPACK_IMPORTED_MODULE_21__notice_container_wrapper_notice_container_wrapper_component__["a" /* NoticeContainerWrapperComponent */],
                __WEBPACK_IMPORTED_MODULE_22__pipes_format_date_pipe__["a" /* FormatDatePipe */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__notice_creator_notice_creator_component__["a" /* NoticeCreatorComponent */],
                __WEBPACK_IMPORTED_MODULE_3__color_pallete_color_pallete_component__["a" /* ColorPalleteComponent */],
                __WEBPACK_IMPORTED_MODULE_4__Directives_set_coord_directive__["a" /* SetCoordDirective */],
                __WEBPACK_IMPORTED_MODULE_8__label_label_component__["a" /* LabelComponent */],
                __WEBPACK_IMPORTED_MODULE_11__usual_notice_usual_notice_component__["a" /* UsualNoticeComponent */],
                __WEBPACK_IMPORTED_MODULE_12__container_notices_container_notices_component__["a" /* ContainerNoticesComponent */],
                __WEBPACK_IMPORTED_MODULE_14__general_notices_general_notices_component__["a" /* GeneralNoticesComponent */],
                __WEBPACK_IMPORTED_MODULE_19__notice_editor_notice_editor_component__["a" /* NoticeEditorComponent */],
                __WEBPACK_IMPORTED_MODULE_20__notice_editor_container_notice_editor_container_component__["a" /* NoticeEditorContainerComponent */],
                __WEBPACK_IMPORTED_MODULE_21__notice_container_wrapper_notice_container_wrapper_component__["a" /* NoticeContainerWrapperComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__Services_data_and_flags_service__["a" /* DataAndFlagsService */], __WEBPACK_IMPORTED_MODULE_18__Services_http_service__["a" /* HttpService */]
            ]
        })
    ], NoticeModule);
    return NoticeModule;
}());



/***/ }),

/***/ "./src/app/notice/pipes/format-date.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormatDatePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FormatDatePipe = /** @class */ (function () {
    function FormatDatePipe() {
    }
    FormatDatePipe.prototype.transform = function (prop) {
        var date = new Date(prop);
        var month = '' + date.getMonth();
        var hour = '' + date.getHours();
        if (+month < 10) {
            month = "0" + (+month + 1);
        }
        if (+hour < 10) {
            hour = "0" + hour;
        }
        return date.getDate() + "/" + month + "/" + date.getFullYear() + " " + hour + ":" + date.getMinutes();
    };
    FormatDatePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Pipe */])({
            name: 'formatDate'
        })
    ], FormatDatePipe);
    return FormatDatePipe;
}());



/***/ }),

/***/ "./src/app/notice/usual-notice/usual-notice.component.css":
/***/ (function(module, exports) {

module.exports = ".notices-holder {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n    -ms-flex-pack: distribute;\r\n        justify-content: space-around;\r\n}\r\n\r\n.usual-notice:hover {\r\n\t-webkit-transform: scale(1.006);\r\n\t        transform: scale(1.006);\r\n}\r\n\r\n.usual-notice {\r\n    box-shadow: 0 0 5px rgba(0,0,0,0.5);\r\n    -webkit-box-shadow: 0 0 5px rgba(0,0,0,0.5); \r\n    background: #fff;\r\n    border-radius: 8px;\r\n    cursor: pointer;\r\n    min-height: 50px;\r\n    width: 100%;\r\n    padding: 15px 0 30px;\r\n    margin: 0 0 20px;\r\n    position: relative;\r\n}\r\n\r\n.title-holder, .notice-holder {\r\n    padding: 10px 15px;\r\n    outline: none;\r\n    margin: 0 0 10px;\r\n}\r\n\r\n.title-content, .notice-content {\r\n    border: none;\r\n    word-wrap: break-word;\r\n}\r\n\r\n.title-content {\r\n  font: bold 17px/1.35em 'Roboto Condensed', arial, sans-serif;\r\n}\r\n\r\n.notice-content {\r\n    font: 16px/1.36em 'Roboto Slab', 'Times New Roman', serif;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n.error {\r\n    color: red;\r\n}\r\n\r\n.time-holder {\r\n    font-size: 12px;\r\n    font-style: italic;\r\n    padding: 0 25px;\r\n    text-align: right;\r\n}\r\n\r\n.text-bold {\r\n    font-weight: bold;\r\n}\r\n\r\n.toolbar {\r\n    padding: 0 20px;\r\n    position: absolute;\r\n    bottom: 0;\r\n    z-index: 1;\r\n }\r\n\r\n/*\r\n.toolbar:after {\r\n\tcontent: '';\r\n\tdisplay: block;\r\n\tclear: both;\r\n} */\r\n\r\n.btn-change-color {\r\n    float: left;\r\n    cursor: pointer;\r\n    height: 32px;\r\n    width: 32px;\r\n    background: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjE4cHgiIHdpZHRoPSIxOHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0iIzAwMDAwMCI+CiA8cGF0aCBkPSJtMjQgNmMtOS45NCAwLTE4IDguMDYtMTggMThzOC4wNiAxOCAxOCAxOGMxLjY2IDAgMy0xLjM0IDMtMyAwLTAuNzgtMC4yOS0xLjQ4LTAuNzgtMi4wMS0wLjQ3LTAuNTMtMC43NS0xLjIyLTAuNzUtMS45OSAwLTEuNjYgMS4zNC0zIDMtM2gzLjUzYzUuNTIgMCAxMC00LjQ4IDEwLTEwIDAtOC44NC04LjA2LTE2LTE4LTE2em0tMTEgMThjLTEuNjYgMC0zLTEuMzQtMy0zczEuMzQtMyAzLTMgMyAxLjM0IDMgMy0xLjM0IDMtMyAzem02LThjLTEuNjYgMC0zLTEuMzQtMy0zczEuMzQtMyAzLTMgMyAxLjM0IDMgMy0xLjM0IDMtMyAzem0xMCAwYy0xLjY2IDAtMy0xLjM0LTMtM3MxLjM0LTMgMy0zIDMgMS4zNCAzIDMtMS4zNCAzLTMgM3ptNiA4Yy0xLjY2IDAtMy0xLjM0LTMtM3MxLjM0LTMgMy0zIDMgMS4zNCAzIDMtMS4zNCAzLTMgM3oiLz4KIDxwYXRoIGQ9Im0wIDBoNDh2NDhoLTQ4eiIgZmlsbD0ibm9uZSIvPgo8L3N2Zz4K) center no-repeat;\r\n    opacity: 0.7;\r\n}\r\n\r\n.btn-change-color:hover {\r\n    opacity: 1;\r\n}\r\n\r\n.btn-save, .btn-reset, .btn-label, .btn-edit, .btn-delete {\r\n    cursor: pointer;\r\n    float: right;\r\n    border-radius: 3px;\r\n    font: 13px/1.31em 'Roboto',arial,sans-serif;;\r\n    text-transform: uppercase;\r\n    padding: 8px 14px;\r\n    position: relative;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n}\r\n\r\n.btn-save:hover, .btn-reset:hover, .btn-label:hover, .btn-edit:hover, .btn-delete:hover {\r\n    background: rgba(0, 0, 0, 0.08);\r\n}\r\n\r\n.tiles {\r\n    width: 254px;\r\n    margin: 0 0 20px 20px;\r\n}\r\n\r\n.tiles .btn-delete,\r\n.tiles .btn-save,\r\n.tiles .btn.btn-reset {\r\n    padding: 8px 5px;\r\n}"

/***/ }),

/***/ "./src/app/notice/usual-notice/usual-notice.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"notices-holder\">\n  <div class=\"usual-notice\" [attr.data-id]=\"note.id\" [class.tiles]=\"getListViewVal()\" *ngFor=\"let note of notes\"  [style.backgroundColor]=\"note.color\" [routerLink]=\"['..', 'edit', note.id]\">\n    <div class=\"title-holder\">\n      <div class=\"title-content\">{{note.title}}</div>\n    </div>\n    <div class=\"notice-holder\">\n      <div class=\"notice-content\">{{note.notice}}</div>\n    </div>\n    <div class=\"time-holder\">\n      <span><span class=\"text-bold\">Changed:</span> {{note.changeTime | formatDate}}</span>\n    </div>\n    <div class=\"toolbar\">\n      <div class=\"btn-change-color\"></div>\n      <div class=\"btn-save\">Save</div>\n      <div class=\"btn-reset\">Reset</div>\n      <!-- <div class=\"btn-label\">Add Label</div> -->\n      <div class=\"btn-delete\">Delete</div>\n      <app-color-pallete></app-color-pallete>\n      <app-label></app-label>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/notice/usual-notice/usual-notice.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsualNoticeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__notice_creator_notice_creator_component__ = __webpack_require__("./src/app/notice/notice-creator/notice-creator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_data_and_flags_service__ = __webpack_require__("./src/app/notice/Services/data-and-flags.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Services_http_service__ = __webpack_require__("./src/app/notice/Services/http.service.ts");
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UsualNoticeComponent = /** @class */ (function (_super) {
    __extends(UsualNoticeComponent, _super);
    function UsualNoticeComponent(dataAndFlagsService, http) {
        var _this = _super.call(this, dataAndFlagsService, http) || this;
        _this.dataAndFlagsService = dataAndFlagsService;
        _this.http = http;
        return _this;
    }
    UsualNoticeComponent.prototype.ngOnInit = function () {
        this.getListViewVal();
    };
    UsualNoticeComponent.prototype.getListViewVal = function () {
        var _this = this;
        this.subscription = this.dataAndFlagsService.getListViewVal().map(function (val) { return _this.isListView = val; }).subscribe();
        return this.isListView;
    };
    UsualNoticeComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], UsualNoticeComponent.prototype, "notes", void 0);
    UsualNoticeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-usual-notice',
            template: __webpack_require__("./src/app/notice/usual-notice/usual-notice.component.html"),
            styles: [__webpack_require__("./src/app/notice/usual-notice/usual-notice.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__Services_data_and_flags_service__["a" /* DataAndFlagsService */], __WEBPACK_IMPORTED_MODULE_4__Services_http_service__["a" /* HttpService */]])
    ], UsualNoticeComponent);
    return UsualNoticeComponent;
}(__WEBPACK_IMPORTED_MODULE_1__notice_creator_notice_creator_component__["a" /* NoticeCreatorComponent */]));



/***/ }),

/***/ "./src/app/notice/wrapper-notices/wrapper-notices.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/notice/wrapper-notices/wrapper-notices.component.html":
/***/ (function(module, exports) {

module.exports = "<app-notice-creator (clickedBtnSave)=\"renderAllNotices($event)\"></app-notice-creator>\n<app-container-notices [addNewNotice]=\"isAddedNotice\" (addedNewNotice)=\"reRenderAllNotices($event)\" [notes$]=\"notes\"></app-container-notices>\n\n"

/***/ }),

/***/ "./src/app/notice/wrapper-notices/wrapper-notices.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WrapperNoticesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_data_and_flags_service__ = __webpack_require__("./src/app/notice/Services/data-and-flags.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WrapperNoticesComponent = /** @class */ (function () {
    function WrapperNoticesComponent(dataAndFlags) {
        this.dataAndFlags = dataAndFlags;
        this.isAddedNotice = false;
        this.notes = [];
    }
    WrapperNoticesComponent.prototype.ngOnInit = function () {
        this.getAllNotice();
    };
    WrapperNoticesComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    WrapperNoticesComponent.prototype.renderAllNotices = function (data) {
        this.isAddedNotice = data;
    };
    WrapperNoticesComponent.prototype.reRenderAllNotices = function (data) {
        this.isAddedNotice = data;
    };
    WrapperNoticesComponent.prototype.getAllNotice = function () {
        var _this = this;
        this.subscription = this.dataAndFlags.getAllNotes().subscribe(function (data) {
            _this.notes = data.reverse();
        });
    };
    WrapperNoticesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-wrapper-notices',
            template: __webpack_require__("./src/app/notice/wrapper-notices/wrapper-notices.component.html"),
            styles: [__webpack_require__("./src/app/notice/wrapper-notices/wrapper-notices.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Services_data_and_flags_service__["a" /* DataAndFlagsService */]])
    ], WrapperNoticesComponent);
    return WrapperNoticesComponent;
}());



/***/ }),

/***/ "./src/app/routing/routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notice_general_notices_general_notices_component__ = __webpack_require__("./src/app/notice/general-notices/general-notices.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notice_wrapper_notices_wrapper_notices_component__ = __webpack_require__("./src/app/notice/wrapper-notices/wrapper-notices.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__notice_notice_editor_container_notice_editor_container_component__ = __webpack_require__("./src/app/notice/notice-editor-container/notice-editor-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__notice_notice_container_wrapper_notice_container_wrapper_component__ = __webpack_require__("./src/app/notice/notice-container-wrapper/notice-container-wrapper.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_common_page_not_found_page_not_found_component__ = __webpack_require__("./src/app/app-common/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_common_about_about_component__ = __webpack_require__("./src/app/app-common/about/about.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', redirectTo: 'notices', pathMatch: 'full' },
    { path: 'notices', component: __WEBPACK_IMPORTED_MODULE_3__notice_general_notices_general_notices_component__["a" /* GeneralNoticesComponent */], children: [
            { path: '', redirectTo: 'all-notices', pathMatch: 'full' },
            { path: 'all-notices', component: __WEBPACK_IMPORTED_MODULE_4__notice_wrapper_notices_wrapper_notices_component__["a" /* WrapperNoticesComponent */] },
            { path: 'search', component: __WEBPACK_IMPORTED_MODULE_6__notice_notice_container_wrapper_notice_container_wrapper_component__["a" /* NoticeContainerWrapperComponent */] },
            { path: 'edit/:id', component: __WEBPACK_IMPORTED_MODULE_5__notice_notice_editor_container_notice_editor_container_component__["a" /* NoticeEditorContainerComponent */] }
        ] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_8__app_common_about_about_component__["a" /* AboutComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_7__app_common_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] }
];
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(routes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]
            ],
            declarations: []
        })
    ], RoutingModule);
    return RoutingModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map