(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, license, scripts, private, dependencies, devDependencies, default */
/***/ (function(module) {

module.exports = {"name":"swap-baby-gear","version":"0.0.1","license":"MIT","scripts":{"ng":"ng","dev":"ng serve --open","start":"node server.js","build":"ng build","test":"npm run lint && ng test --configuration=test","lint":"ng lint","e2e":"ng e2e","watch":"ng test --configuration=test --browsers ChromeHeadless --watch","build:prod":"ng build --prod --build-optimizer --vendor-chunk --common-chunk","clean":"rimraf ./dist/","server":"cd dist && http-server","prod":"npm run clean && npm run build:prod && npm run server","ci":"npm run clean && npm run prettier:ci && ng lint && ng test --configuration=test --browsers ChromeTravisCi && ng e2e && npm run build:prod -- --deploy-url /angular-ngrx-material-starter/ --base-href /angular-ngrx-material-starter","release":"standard-version && git push --follow-tags origin master","prettier":"prettier {src,e2e}/**/*.{ts,json,md,scss} --write","prettier:ci":"prettier {src,e2e}/**/*.{ts,json,md,scss} --list-different","analyze":"npm run clean && npm run build:prod -- --stats-json && webpack-bundle-analyzer ./dist/stats.json","postinstall":"ng build --aot -prod"},"private":true,"dependencies":{"@angular/animations":"6.0.6","@angular/cdk":"^6.2.0","@angular/common":"^6.0.0","@angular/compiler":"^6.0.0","@angular/core":"^6.0.0","@angular/flex-layout":"^6.0.0-beta.15","@angular/forms":"6.0.0","@angular/http":"6.0.0","@angular/material":"^6.2.0","@angular/platform-browser":"^6.0.0","@angular/platform-browser-dynamic":"6.0.0","@angular/router":"6.0.0","@fortawesome/fontawesome-free-webfonts":"^1.0.9","@ngrx/effects":"^6.0.0-beta.1","@ngrx/store":"^6.0.0-beta.1","bootstrap":"^4.0.0","browser-detect":"^0.2.27","core-js":"^2.4.1","hoek":"^5.0.3","material-design-icons":"^3.0.1","rxjs":"^6.0.0","uuid":"^3.1.0","web-animations-js":"^2.2.5","zone.js":"^0.8.20"},"devDependencies":{"@angular-devkit/build-angular":"~0.6.0","@angular/cli":"^6.0.0","@angular/compiler-cli":"6.0.0","@angular/language-service":"6.0.0","@types/jasmine":"~2.8.3","@types/node":"~9.4.0","codelyzer":"~4.1.0","enhanced-resolve":"~3.4.1","jasmine-core":"~2.99.1","jasmine-spec-reporter":"~4.2.1","karma":"~1.7.1","karma-chrome-launcher":"~2.2.0","karma-coverage-istanbul-reporter":"~1.4.2","karma-jasmine":"~1.1.0","karma-jasmine-html-reporter":"~0.2.2","karma-spec-reporter":"~0.0.31","ngrx-store-freeze":"^0.2.1","prettier":"^1.7.4","protractor":"^5.3.2","rimraf":"^2.6.2","standard-version":"^4.2.0","ts-node":"~5.0.0","tslint":"~5.9.1","typescript":"~2.7.2","webpack-bundle-analyzer":"^2.11.1"}};

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/examples/examples.module": [
		"./src/app/examples/examples.module.ts",
		"app-examples-examples-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings */ "./src/app/settings/index.ts");
/* harmony import */ var _components_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/shopping-cart/shopping-cart.component */ "./src/app/components/shopping-cart/shopping-cart.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        redirectTo: 'about',
        pathMatch: 'full'
    },
    {
        path: 'settings',
        component: _settings__WEBPACK_IMPORTED_MODULE_2__["SettingsComponent"],
        data: {
            title: 'Settings'
        }
    },
    {
        path: 'shopping-cart',
        component: _components_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_3__["ShoppingCartComponent"],
        data: {
            title: 'Shopping Cart'
        }
    },
    {
        path: 'examples',
        loadChildren: 'app/examples/examples.module#ExamplesModule'
    },
    {
        path: '**',
        redirectTo: 'about'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            // useHash supports github.io demo page, remove in your app
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\n\n  <!-- Side Nav for Mobile -->\n  <mat-sidenav #sidenav mode=\"push\">\n    <div class=\"branding\">\n      <img [src]=\"logo\"/>\n      <span>Brand Name</span>\n    </div>\n\n    <mat-nav-list>\n      <a mat-list-item\n        *ngFor=\"let item of navigationSideMenu\"\n        (click)=\"sidenav.close()\"\n        [routerLink]=\"[item.link]\"\n        routerLinkActive=\"active\">\n          {{item.label}}\n      </a>\n    </mat-nav-list>\n  </mat-sidenav>\n\n  <div class=\"toolbar\">\n    <mat-toolbar color=\"\">\n      <button mat-icon-button\n        (click)=\"sidenav.open()\">\n        <mat-icon fontSet=\"fas\" fontIcon=\"fa-bars\"></mat-icon>\n      </button>\n\n      <!-- <span routerLink=\"\"\n        class=\"branding spacer d-none d-md-inline\">\n        <img [src]=\"logo\"/>\n        Brand Name\n      </span> -->\n\n      <!-- nav items -->\n      <!-- <span class=\"d-none d-md-inline\">\n        <button mat-button class=\"nav-button\"\n          *ngFor=\"let item of navigation\"\n          [routerLink]=\"[item.link]\"\n          routerLinkActive=\"active\">\n            {{item.label}}\n        </button>\n      </span> -->\n\n      <span class=\"branding spacer center d-inline\"></span>\n      <button mat-button\n        class=\"sign-in-button \"\n        *ngIf=\"!isAuthenticated\"\n        (click)=\"onLoginClick()\">\n        Sign in\n      </button>\n\n      <!-- Show logged icon when user logged in  -->\n      <button *ngIf=\"isAuthenticated\"\n        mat-icon-button\n        [matMenuTriggerFor]=\"toolbarUserMenu\">\n        <mat-icon fontSet=\"fas\" fontIcon=\"fa-user-circle\"></mat-icon>\n      </button>\n\n      <mat-menu #toolbarUserMenu=\"matMenu\">\n        <button mat-menu-item (click)=\"onLogoutClick()\">\n          <mat-icon fontSet=\"fas\" fontIcon=\"fa-power-off\"></mat-icon>\n          <span>Logout</span>\n        </button>\n      </mat-menu>\n\n      <!-- Shopping Cart -->\n      <button class=\"d-md-inline\" mat-icon-button routerLink=\"shopping-cart\">\n        <mat-icon fontSet=\"fas\" fontIcon=\"fa-shopping-cart\"></mat-icon>\n      </button>\n\n      <!-- Settings Gear Icon  -->\n      <button mat-icon-button routerLink=\"settings\">\n        <mat-icon fontSet=\"fas\" fontIcon=\"fa-cog\"></mat-icon>\n      </button>\n    </mat-toolbar>\n  </div>\n\n  <div class=\"wrapper\">\n    <div class=\"content\"\n      [@routeAnimations]=\"o.isActivated && o.activatedRoute.routeConfig.path\">\n      <router-outlet #o=\"outlet\"></router-outlet>\n    </div>\n\n    <div class=\"footer\">\n      <div class=\"row\">\n        <div class=\"col-sm-12 links\">\n          <a href=\"https://www.twitter.com/tomastrajan\" target=\"_blank\">\n            <mat-icon fontSet=\"fab\" fontIcon=\"fa-twitter\"></mat-icon>\n            <span>Twitter</span>\n          </a>\n          <a href=\"https://www.youtube.com/channel/UC7XgRHIVoqnh3U5Vmly9ofQ\"\n             target=\"_blank\">\n            <mat-icon fontSet=\"fab\" fontIcon=\"fa-youtube\"></mat-icon>\n            <span>Youtube</span>\n          </a>\n          <a href=\"https://www.instagram.com/tomastrajan\" target=\"_blank\">\n            <mat-icon fontSet=\"fab\" fontIcon=\"fa-instagram\"></mat-icon>\n            <span>Instagram</span>\n          </a>\n          <a href=\"https://www.slides.com/tomastrajan\" target=\"_blank\">\n            <mat-icon fontSet=\"fas\" fontIcon=\"fa-play-circle\"></mat-icon>\n            <span>Slides</span>\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-sidenav-container {\n  height: 100%;\n  width: 100%; }\n  mat-sidenav-container .toolbar {\n    position: fixed;\n    width: 100%;\n    display: -ms-flexbox;\n    display: flex; }\n  mat-sidenav-container .toolbar .nav-button {\n      margin: 0 10px 0 0; }\n  mat-sidenav-container .toolbar mat-icon {\n      font-size: 24px; }\n  mat-sidenav-container .toolbar .branding {\n      cursor: pointer;\n      padding-top: 4px; }\n  mat-sidenav-container .toolbar .branding.center {\n        text-align: center; }\n  mat-sidenav-container .toolbar .branding img {\n        position: relative;\n        top: -2px;\n        width: 48px;\n        height: 48px; }\n  mat-sidenav-container .toolbar .sign-in-button {\n      line-height: 35px;\n      margin-right: 10px; }\n  mat-sidenav-container .toolbar .spacer {\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto; }\n  @media (max-width: 992px) {\n      mat-sidenav-container .toolbar .nav-button {\n        min-width: 0;\n        padding: 0 10px; }\n      mat-sidenav-container .toolbar .sign-in-button {\n        min-width: 0;\n        padding: 0 10px;\n        margin: 0 5px 0 0; } }\n  mat-sidenav-container .wrapper {\n    position: absolute;\n    top: 64px;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column;\n    overflow-y: auto;\n    overflow-x: hidden; }\n  mat-sidenav-container .wrapper .content {\n      position: relative;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto; }\n  mat-sidenav-container .wrapper .footer {\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n      padding: 0 15px;\n      text-align: center; }\n  mat-sidenav-container .wrapper .footer .row {\n        padding: 10px 0; }\n  mat-sidenav-container .wrapper .footer .row .links a {\n          transition: padding 0.5s;\n          display: inline-block;\n          padding: 20px 5px; }\n  mat-sidenav-container .wrapper .footer .row .links a:hover {\n            text-decoration: none; }\n  mat-sidenav-container .wrapper .footer .row .links a mat-icon {\n            font-size: 30px;\n            width: 35px; }\n  mat-sidenav-container .wrapper .footer .row .links a span {\n            display: inline-block;\n            width: 75px;\n            padding: 0 0 0 3px;\n            overflow: hidden;\n            text-align: left;\n            white-space: nowrap;\n            transition: width 0.5s; }\n  @media (min-width: 992px) {\n          mat-sidenav-container .wrapper .footer .row .links a {\n            padding: 20px 10px; } }\n  @media (max-width: 768px) {\n          mat-sidenav-container .wrapper .footer .row .links a {\n            padding: 20px; }\n            mat-sidenav-container .wrapper .footer .row .links a span {\n              width: 0;\n              padding: 0; } }\n  @media (max-width: 576px) {\n          mat-sidenav-container .wrapper .footer .row .links a {\n            padding: 20px 5px; } }\n  @media (min-width: 576px) {\n          mat-sidenav-container .wrapper .footer .row .signature {\n            position: relative; }\n            mat-sidenav-container .wrapper .footer .row .signature a {\n              position: absolute;\n              right: 15px; } }\n  @media (max-width: 576px) {\n    mat-sidenav-container .wrapper {\n      top: 56px; } }\n  mat-sidenav {\n  width: 250px; }\n  mat-sidenav .branding {\n    height: 64px;\n    padding: 8px 10px;\n    font-size: 20px;\n    font-weight: 500; }\n  mat-sidenav .branding img {\n      height: 48px;\n      margin: 2px 10px 0 0; }\n  mat-sidenav .branding span {\n      position: relative;\n      top: 3px; }\n  mat-sidenav .mat-nav-list {\n    padding-top: 0; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var browser_detect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! browser-detect */ "./node_modules/browser-detect/dist/browser-detect.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./settings */ "./src/app/settings/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AppComponent = /** @class */ (function () {
    function AppComponent(overlayContainer, store, router, titleService, animationService) {
        this.overlayContainer = overlayContainer;
        this.store = store;
        this.router = router;
        this.titleService = titleService;
        this.animationService = animationService;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.isProd = _env_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].production;
        this.envName = _env_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].envName;
        this.version = _env_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].versions.app;
        this.year = new Date().getFullYear();
        this.logo = __webpack_require__(/*! ../assets/baby2.png */ "./src/assets/baby2.png");
        this.navigation = [
            { link: 'about', label: 'About' },
            { link: 'features', label: 'Shop' },
        ];
        this.navigationSideMenu = this.navigation.concat([
            { link: 'settings', label: 'Settings' }
        ]);
    }
    AppComponent_1 = AppComponent;
    AppComponent.trackPageView = function (event) {
        window.ga('set', 'page', event.urlAfterRedirects);
        window.ga('send', 'pageview');
    };
    AppComponent.isIEorEdge = function () {
        return ['ie', 'edge'].includes(Object(browser_detect__WEBPACK_IMPORTED_MODULE_0__["default"])().name);
    };
    AppComponent.prototype.ngOnInit = function () {
        this.subscribeToSettings();
        this.subscribeToIsAuthenticated();
        this.subscribeToRouterEvents();
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    AppComponent.prototype.onLoginClick = function () {
        this.store.dispatch(new _app_core__WEBPACK_IMPORTED_MODULE_8__["ActionAuthLogin"]());
    };
    AppComponent.prototype.onLogoutClick = function () {
        this.store.dispatch(new _app_core__WEBPACK_IMPORTED_MODULE_8__["ActionAuthLogout"]());
    };
    AppComponent.prototype.subscribeToIsAuthenticated = function () {
        var _this = this;
        this.store
            .select(_app_core__WEBPACK_IMPORTED_MODULE_8__["selectorAuth"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.unsubscribe$))
            .subscribe(function (auth) { return (_this.isAuthenticated = auth.isAuthenticated); });
    };
    AppComponent.prototype.subscribeToSettings = function () {
        var _this = this;
        if (AppComponent_1.isIEorEdge()) {
            this.store.dispatch(new _settings__WEBPACK_IMPORTED_MODULE_10__["ActionSettingsChangeAnimationsPageDisabled"]({
                pageAnimationsDisabled: true
            }));
        }
        this.store
            .select(_settings__WEBPACK_IMPORTED_MODULE_10__["selectorSettings"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.unsubscribe$))
            .subscribe(function (settings) {
            _this.setTheme(settings);
            _this.animationService.updateRouteAnimationType(settings.pageAnimations, settings.elementsAnimations);
        });
    };
    AppComponent.prototype.setTheme = function (settings) {
        var theme = settings.theme, autoNightMode = settings.autoNightMode;
        var hours = new Date().getHours();
        var effectiveTheme = (autoNightMode && (hours >= 20 || hours <= 6)
            ? _settings__WEBPACK_IMPORTED_MODULE_10__["NIGHT_MODE_THEME"]
            : theme).toLowerCase();
        this.componentCssClass = effectiveTheme;
        var classList = this.overlayContainer.getContainerElement().classList;
        var toRemove = Array.from(classList).filter(function (item) {
            return item.includes('-theme');
        });
        if (toRemove.length) {
            classList.remove.apply(classList, toRemove);
        }
        classList.add(effectiveTheme);
    };
    AppComponent.prototype.subscribeToRouterEvents = function () {
        var _this = this;
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(function (event) {
            return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivationEnd"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"];
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.unsubscribe$))
            .subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivationEnd"]) {
                _this.setPageTitle(event);
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
                AppComponent_1.trackPageView(event);
            }
        });
    };
    AppComponent.prototype.setPageTitle = function (event) {
        var lastChild = event.snapshot;
        while (lastChild.children.length) {
            lastChild = lastChild.children[0];
        }
        var title = lastChild.data.title;
        this.titleService.setTitle(title ? title + " - " + _env_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].appName : _env_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].appName);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"])('class'),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "componentCssClass", void 0);
    AppComponent = AppComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'anms-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")],
            animations: [_app_core__WEBPACK_IMPORTED_MODULE_8__["routeAnimations"]]
        }),
        __metadata("design:paramtypes", [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayContainer"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"],
            _app_core__WEBPACK_IMPORTED_MODULE_8__["AnimationsService"]])
    ], AppComponent);
    return AppComponent;
    var AppComponent_1;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings */ "./src/app/settings/index.ts");
/* harmony import */ var _static__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./static */ "./src/app/static/index.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                // angular
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                // core & shared
                _app_core__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
                _app_shared__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                // features
                _static__WEBPACK_IMPORTED_MODULE_7__["StaticModule"],
                _settings__WEBPACK_IMPORTED_MODULE_6__["SettingsModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
                // app
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"]
            ],
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shopping-cart/shopping-cart.component */ "./src/app/components/shopping-cart/shopping-cart.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import { CommonModule } from '@angular/common';
var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_2__["ShoppingCartComponent"]
            ],
            imports: [_app_shared__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]],
            exports: [],
            providers: [],
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/shopping-cart/shopping-cart.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/shopping-cart/shopping-cart.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row align-items-end\">\n    <div class=\"col-md-6 col-lg-4\"\n      [ngClass]=\"routeAnimationsElements\"\n      *ngFor=\"let item of selectedItems\">\n      <mat-card>\n        <mat-card-title>{{item.name}}</mat-card-title>\n        <div class=\"d-flex flex-row justify-content-between align-items-center\">\n          <mat-card-subtitle>\n            {{item.description}}\n          </mat-card-subtitle>\n          <img mat-card-sm-image src=\"{{item.img}}\" alt=\"\">\n        </div>\n\n        <mat-icon fontSet=\"fas\"\n          fontIcon=\"fa-trash-alt\"\n          class=\"icon sz-24\"\n          color=\"warn\"\n          (click)=\"handleDeletItem(item)\">\n        </mat-icon>\n      </mat-card>\n    </div>\n  </div>\n\n  <div class=\"d-flex justify-content-center align-items-center\"\n    *ngIf=\"!selectedItems.length\">\n    <i class=\"material-icons\">\n      sentiment_very_dissatisfied\n    </i> \n    <span>No items in your shopping chart</span>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/shopping-cart/shopping-cart.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/shopping-cart/shopping-cart.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/shopping-cart/shopping-cart.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/shopping-cart/shopping-cart.component.ts ***!
  \*********************************************************************/
/*! exports provided: ShoppingCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartComponent", function() { return ShoppingCartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShoppingCartComponent = /** @class */ (function () {
    function ShoppingCartComponent() {
        this.routeAnimationsElements = _app_core__WEBPACK_IMPORTED_MODULE_1__["ROUTE_ANIMATIONS_ELEMENTS"];
        this.selectedItems = [
            {
                id: 1,
                name: 'Sleeveless Jersey Dress',
                description: 'Sleeveless dresses in jersey with a printed design. Seam at waist and flared skirt.',
                points: 450,
                img: 'http://lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FG00%200553873%20022%2099%201d6e98a66038f41dad8db68c38b0816514d634df.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BXL%5D%2Cquality%5BH%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D'
            },
            {
                id: 2,
                name: 'Fine-knit Bolero',
                description: 'Bolero in fine-knit cotton with a faceted, heart-shaped button. Long-sleeves with ribbed cuffs.',
                points: 850,
                img: 'http://lp.hm.com/hmprod?set=source%5B%2Fmodel%2F2018%2FG00%200619158%20001%2099%202020cb585dd9b9fc18a1033dda22cb475757661f.jpg%5D%2Cmedia_type%5BDESCRIPTIVE_STILL_LIFE%5D%2Ctshirt_size%5BL%5D%2Cquality%5BH%5D%2Chmver%5B0%5D&call=url%5Bfile%3A%2Fstudio2%2Fv1%2Fproduct.chain%5D'
            },
        ];
    }
    ShoppingCartComponent.prototype.ngOnInit = function () {
    };
    ShoppingCartComponent.prototype.ngOnDestroy = function () {
    };
    ShoppingCartComponent.prototype.handleDeletItem = function (item) {
        console.log(item);
        this.selectedItems = this.selectedItems
            .filter(function (selecteditem) { return selecteditem.id !== item.id; });
    };
    ShoppingCartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'anms-shopping-cart',
            template: __webpack_require__(/*! ./shopping-cart.component.html */ "./src/app/components/shopping-cart/shopping-cart.component.html"),
            styles: [__webpack_require__(/*! ./shopping-cart.component.scss */ "./src/app/components/shopping-cart/shopping-cart.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ShoppingCartComponent);
    return ShoppingCartComponent;
}());



/***/ }),

/***/ "./src/app/core/animations/animations.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/animations/animations.service.ts ***!
  \*******************************************************/
/*! exports provided: AnimationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationsService", function() { return AnimationsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AnimationsService = /** @class */ (function () {
    function AnimationsService() {
    }
    AnimationsService_1 = AnimationsService;
    AnimationsService.isRouteAnimationsType = function (type) {
        return AnimationsService_1.routeAnimationType === type;
    };
    AnimationsService.prototype.updateRouteAnimationType = function (pageAnimations, elementsAnimations) {
        AnimationsService_1.routeAnimationType =
            pageAnimations && elementsAnimations
                ? 'ALL'
                : pageAnimations ? 'PAGE' : elementsAnimations ? 'ELEMENTS' : 'NONE';
    };
    AnimationsService.routeAnimationType = 'NONE';
    AnimationsService = AnimationsService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AnimationsService);
    return AnimationsService;
    var AnimationsService_1;
}());



/***/ }),

/***/ "./src/app/core/animations/route.animations.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/animations/route.animations.ts ***!
  \*****************************************************/
/*! exports provided: ROUTE_ANIMATIONS_ELEMENTS, routeAnimations, isRouteAnimationsAll, isRouteAnimationsNone, isRouteAnimationsPage, isRouteAnimationsElements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTE_ANIMATIONS_ELEMENTS", function() { return ROUTE_ANIMATIONS_ELEMENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routeAnimations", function() { return routeAnimations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRouteAnimationsAll", function() { return isRouteAnimationsAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRouteAnimationsNone", function() { return isRouteAnimationsNone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRouteAnimationsPage", function() { return isRouteAnimationsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRouteAnimationsElements", function() { return isRouteAnimationsElements; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _animations_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animations.service */ "./src/app/core/animations/animations.service.ts");


var ROUTE_ANIMATIONS_ELEMENTS = 'route-animations-elements';
var STEPS_ALL = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter > *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, position: 'fixed' }), {
        optional: true
    }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter .' + ROUTE_ANIMATIONS_ELEMENTS, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }), {
        optional: true
    }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["sequence"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave > *', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)', opacity: 1 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(-3%)', opacity: 0 })),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed' })
        ], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter > *', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                transform: 'translateY(-3%)',
                opacity: 0,
                position: 'static'
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)', opacity: 1 }))
        ], { optional: true })
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter .' + ROUTE_ANIMATIONS_ELEMENTS, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])(100, [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(15%)', opacity: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)', opacity: 1 }))
    ]), { optional: true })
];
var STEPS_NONE = [];
var STEPS_PAGE = [STEPS_ALL[0], STEPS_ALL[2]];
var STEPS_ELEMENTS = [STEPS_ALL[1], STEPS_ALL[3]];
var routeAnimations = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(isRouteAnimationsAll, STEPS_ALL),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(isRouteAnimationsNone, STEPS_NONE),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(isRouteAnimationsPage, STEPS_PAGE),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(isRouteAnimationsElements, STEPS_ELEMENTS)
]);
function isRouteAnimationsAll() {
    return _animations_service__WEBPACK_IMPORTED_MODULE_1__["AnimationsService"].isRouteAnimationsType('ALL');
}
function isRouteAnimationsNone() {
    return _animations_service__WEBPACK_IMPORTED_MODULE_1__["AnimationsService"].isRouteAnimationsType('NONE');
}
function isRouteAnimationsPage() {
    return _animations_service__WEBPACK_IMPORTED_MODULE_1__["AnimationsService"].isRouteAnimationsType('PAGE');
}
function isRouteAnimationsElements() {
    return _animations_service__WEBPACK_IMPORTED_MODULE_1__["AnimationsService"].isRouteAnimationsType('ELEMENTS');
}


/***/ }),

/***/ "./src/app/core/auth/auth-guard.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/auth/auth-guard.service.ts ***!
  \*************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _auth_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.reducer */ "./src/app/core/auth/auth.reducer.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(store) {
        var _this = this;
        this.store = store;
        this.isAuthenticated = false;
        this.store
            .select(_auth_reducer__WEBPACK_IMPORTED_MODULE_2__["selectorAuth"])
            .subscribe(function (auth) { return (_this.isAuthenticated = auth.isAuthenticated); });
    }
    AuthGuardService.prototype.canActivate = function () {
        return this.isAuthenticated;
    };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/core/auth/auth.effects.ts":
/*!*******************************************!*\
  !*** ./src/app/core/auth/auth.effects.ts ***!
  \*******************************************/
/*! exports provided: AuthEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthEffects", function() { return AuthEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../local-storage/local-storage.service */ "./src/app/core/local-storage/local-storage.service.ts");
/* harmony import */ var _auth_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth.reducer */ "./src/app/core/auth/auth.reducer.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthEffects = /** @class */ (function () {
    function AuthEffects(actions$, localStorageService, router) {
        this.actions$ = actions$;
        this.localStorageService = localStorageService;
        this.router = router;
    }
    AuthEffects.prototype.login = function () {
        var _this = this;
        return this.actions$
            .ofType(_auth_reducer__WEBPACK_IMPORTED_MODULE_6__["AuthActionTypes"].LOGIN)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (action) {
            return _this.localStorageService.setItem(_auth_reducer__WEBPACK_IMPORTED_MODULE_6__["AUTH_KEY"], { isAuthenticated: true });
        }));
    };
    AuthEffects.prototype.logout = function () {
        var _this = this;
        return this.actions$.ofType(_auth_reducer__WEBPACK_IMPORTED_MODULE_6__["AuthActionTypes"].LOGOUT).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (action) {
            _this.router.navigate(['']);
            _this.localStorageService.setItem(_auth_reducer__WEBPACK_IMPORTED_MODULE_6__["AUTH_KEY"], { isAuthenticated: false });
        }));
    };
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], AuthEffects.prototype, "login", null);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], AuthEffects.prototype, "logout", null);
    AuthEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthEffects);
    return AuthEffects;
}());



/***/ }),

/***/ "./src/app/core/auth/auth.reducer.ts":
/*!*******************************************!*\
  !*** ./src/app/core/auth/auth.reducer.ts ***!
  \*******************************************/
/*! exports provided: AUTH_KEY, AuthActionTypes, ActionAuthLogin, ActionAuthLogout, initialState, selectorAuth, authReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_KEY", function() { return AUTH_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthActionTypes", function() { return AuthActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionAuthLogin", function() { return ActionAuthLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionAuthLogout", function() { return ActionAuthLogout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectorAuth", function() { return selectorAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authReducer", function() { return authReducer; });
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var AUTH_KEY = 'AUTH';
var AuthActionTypes;
(function (AuthActionTypes) {
    AuthActionTypes["LOGIN"] = "[Auth] Login";
    AuthActionTypes["LOGOUT"] = "[Auth] Logout";
})(AuthActionTypes || (AuthActionTypes = {}));
var ActionAuthLogin = /** @class */ (function () {
    function ActionAuthLogin() {
        this.type = AuthActionTypes.LOGIN;
    }
    return ActionAuthLogin;
}());

var ActionAuthLogout = /** @class */ (function () {
    function ActionAuthLogout() {
        this.type = AuthActionTypes.LOGOUT;
    }
    return ActionAuthLogout;
}());

var initialState = {
    isAuthenticated: false
};
var selectorAuth = function (state) { return state.auth; };
function authReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case AuthActionTypes.LOGIN:
            return __assign({}, state, { isAuthenticated: true });
        case AuthActionTypes.LOGOUT:
            return __assign({}, state, { isAuthenticated: false });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: metaReducers, CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var ngrx_store_freeze__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngrx-store-freeze */ "./node_modules/ngrx-store-freeze/index.js");
/* harmony import */ var ngrx_store_freeze__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ngrx_store_freeze__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _meta_reducers_debug_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./meta-reducers/debug.reducer */ "./src/app/core/meta-reducers/debug.reducer.ts");
/* harmony import */ var _meta_reducers_init_state_from_local_storage_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./meta-reducers/init-state-from-local-storage.reducer */ "./src/app/core/meta-reducers/init-state-from-local-storage.reducer.ts");
/* harmony import */ var _local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./local-storage/local-storage.service */ "./src/app/core/local-storage/local-storage.service.ts");
/* harmony import */ var _auth_auth_reducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth/auth.reducer */ "./src/app/core/auth/auth.reducer.ts");
/* harmony import */ var _auth_auth_effects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth/auth.effects */ "./src/app/core/auth/auth.effects.ts");
/* harmony import */ var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth/auth-guard.service */ "./src/app/core/auth/auth-guard.service.ts");
/* harmony import */ var _animations_animations_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./animations/animations.service */ "./src/app/core/animations/animations.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};














var metaReducers = [_meta_reducers_init_state_from_local_storage_reducer__WEBPACK_IMPORTED_MODULE_8__["initStateFromLocalStorage"]];
if (!_env_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production) {
    metaReducers.unshift(ngrx_store_freeze__WEBPACK_IMPORTED_MODULE_5__["storeFreeze"]);
    if (!_env_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].test) {
        metaReducers.unshift(_meta_reducers_debug_reducer__WEBPACK_IMPORTED_MODULE_7__["debug"]);
    }
}
var CoreModule = /** @class */ (function () {
    function CoreModule(parentModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import only in AppModule');
        }
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                // angular
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                // ngrx
                _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forRoot({
                    auth: _auth_auth_reducer__WEBPACK_IMPORTED_MODULE_10__["authReducer"]
                }, { metaReducers: metaReducers }),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forRoot([_auth_auth_effects__WEBPACK_IMPORTED_MODULE_11__["AuthEffects"]])
            ],
            declarations: [],
            providers: [_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_9__["LocalStorageService"], _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__["AuthGuardService"], _animations_animations_service__WEBPACK_IMPORTED_MODULE_13__["AnimationsService"]]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"])()),
        __metadata("design:paramtypes", [CoreModule])
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/index.ts":
/*!*******************************!*\
  !*** ./src/app/core/index.ts ***!
  \*******************************/
/*! exports provided: LocalStorageService, ROUTE_ANIMATIONS_ELEMENTS, routeAnimations, isRouteAnimationsAll, isRouteAnimationsNone, isRouteAnimationsPage, isRouteAnimationsElements, AnimationsService, AUTH_KEY, AuthActionTypes, ActionAuthLogin, ActionAuthLogout, initialState, selectorAuth, authReducer, AuthGuardService, metaReducers, CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./local-storage/local-storage.service */ "./src/app/core/local-storage/local-storage.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return _local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_0__["LocalStorageService"]; });

/* harmony import */ var _animations_route_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animations/route.animations */ "./src/app/core/animations/route.animations.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ROUTE_ANIMATIONS_ELEMENTS", function() { return _animations_route_animations__WEBPACK_IMPORTED_MODULE_1__["ROUTE_ANIMATIONS_ELEMENTS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "routeAnimations", function() { return _animations_route_animations__WEBPACK_IMPORTED_MODULE_1__["routeAnimations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRouteAnimationsAll", function() { return _animations_route_animations__WEBPACK_IMPORTED_MODULE_1__["isRouteAnimationsAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRouteAnimationsNone", function() { return _animations_route_animations__WEBPACK_IMPORTED_MODULE_1__["isRouteAnimationsNone"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRouteAnimationsPage", function() { return _animations_route_animations__WEBPACK_IMPORTED_MODULE_1__["isRouteAnimationsPage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRouteAnimationsElements", function() { return _animations_route_animations__WEBPACK_IMPORTED_MODULE_1__["isRouteAnimationsElements"]; });

/* harmony import */ var _animations_animations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animations/animations.service */ "./src/app/core/animations/animations.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnimationsService", function() { return _animations_animations_service__WEBPACK_IMPORTED_MODULE_2__["AnimationsService"]; });

/* harmony import */ var _auth_auth_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/auth.reducer */ "./src/app/core/auth/auth.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AUTH_KEY", function() { return _auth_auth_reducer__WEBPACK_IMPORTED_MODULE_3__["AUTH_KEY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthActionTypes", function() { return _auth_auth_reducer__WEBPACK_IMPORTED_MODULE_3__["AuthActionTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionAuthLogin", function() { return _auth_auth_reducer__WEBPACK_IMPORTED_MODULE_3__["ActionAuthLogin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionAuthLogout", function() { return _auth_auth_reducer__WEBPACK_IMPORTED_MODULE_3__["ActionAuthLogout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return _auth_auth_reducer__WEBPACK_IMPORTED_MODULE_3__["initialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectorAuth", function() { return _auth_auth_reducer__WEBPACK_IMPORTED_MODULE_3__["selectorAuth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "authReducer", function() { return _auth_auth_reducer__WEBPACK_IMPORTED_MODULE_3__["authReducer"]; });

/* harmony import */ var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/auth-guard.service */ "./src/app/core/auth/auth-guard.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]; });

/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core.module */ "./src/app/core/core.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return _core_module__WEBPACK_IMPORTED_MODULE_5__["metaReducers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return _core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"]; });









/***/ }),

/***/ "./src/app/core/local-storage/local-storage.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/local-storage/local-storage.service.ts ***!
  \*************************************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var APP_PREFIX = 'ANMS-';
var LocalStorageService = /** @class */ (function () {
    function LocalStorageService() {
    }
    LocalStorageService.loadInitialState = function () {
        return Object.keys(localStorage).reduce(function (state, storageKey) {
            if (storageKey.includes(APP_PREFIX)) {
                state = state || {};
                var stateKey_1 = storageKey
                    .replace(APP_PREFIX, '')
                    .toLowerCase()
                    .split('.');
                var currentStateRef_1 = state;
                stateKey_1.forEach(function (key, index) {
                    if (index === stateKey_1.length - 1) {
                        currentStateRef_1[key] = JSON.parse(localStorage.getItem(storageKey));
                        return;
                    }
                    currentStateRef_1[key] = currentStateRef_1[key] || {};
                    currentStateRef_1 = currentStateRef_1[key];
                });
            }
            return state;
        }, undefined);
    };
    LocalStorageService.prototype.setItem = function (key, value) {
        localStorage.setItem("" + APP_PREFIX + key, JSON.stringify(value));
    };
    LocalStorageService.prototype.getItem = function (key) {
        return JSON.parse(localStorage.getItem("" + APP_PREFIX + key));
    };
    LocalStorageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], LocalStorageService);
    return LocalStorageService;
}());



/***/ }),

/***/ "./src/app/core/meta-reducers/debug.reducer.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/meta-reducers/debug.reducer.ts ***!
  \*****************************************************/
/*! exports provided: debug */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debug", function() { return debug; });
function debug(reducer) {
    return function (state, action) {
        var newState = reducer(state, action);
        console.log("[DEBUG] action: " + action.type, {
            payload: action.payload,
            oldState: state,
            newState: newState
        });
        return newState;
    };
}


/***/ }),

/***/ "./src/app/core/meta-reducers/init-state-from-local-storage.reducer.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/core/meta-reducers/init-state-from-local-storage.reducer.ts ***!
  \*****************************************************************************/
/*! exports provided: initStateFromLocalStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initStateFromLocalStorage", function() { return initStateFromLocalStorage; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../local-storage/local-storage.service */ "./src/app/core/local-storage/local-storage.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


function initStateFromLocalStorage(reducer) {
    return function (state, action) {
        var newState = reducer(state, action);
        if ([_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["INIT"].toString(), _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["UPDATE"].toString()].includes(action.type)) {
            return __assign({}, newState, _local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"].loadInitialState());
        }
        return newState;
    };
}


/***/ }),

/***/ "./src/app/settings/index.ts":
/*!***********************************!*\
  !*** ./src/app/settings/index.ts ***!
  \***********************************/
/*! exports provided: SettingsModule, SETTINGS_KEY, SettingsActionTypes, ActionSettingsChangeTheme, ActionSettingsChangeAutoNightMode, ActionSettingsChangeAnimationsPage, ActionSettingsChangeAnimationsPageDisabled, ActionSettingsChangeAnimationsElements, ActionSettingsPersist, NIGHT_MODE_THEME, initialState, selectorSettings, settingsReducer, SettingsEffects, SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _settings_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.module */ "./src/app/settings/settings.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SettingsModule", function() { return _settings_module__WEBPACK_IMPORTED_MODULE_0__["SettingsModule"]; });

/* harmony import */ var _settings_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.reducer */ "./src/app/settings/settings.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SETTINGS_KEY", function() { return _settings_reducer__WEBPACK_IMPORTED_MODULE_1__["SETTINGS_KEY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SettingsActionTypes", function() { return _settings_reducer__WEBPACK_IMPORTED_MODULE_1__["SettingsActionTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionSettingsChangeTheme", function() { return _settings_reducer__WEBPACK_IMPORTED_MODULE_1__["ActionSettingsChangeTheme"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionSettingsChangeAutoNightMode", function() { return _settings_reducer__WEBPACK_IMPORTED_MODULE_1__["ActionSettingsChangeAutoNightMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionSettingsChangeAnimationsPage", function() { return _settings_reducer__WEBPACK_IMPORTED_MODULE_1__["ActionSettingsChangeAnimationsPage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionSettingsChangeAnimationsPageDisabled", function() { return _settings_reducer__WEBPACK_IMPORTED_MODULE_1__["ActionSettingsChangeAnimationsPageDisabled"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionSettingsChangeAnimationsElements", function() { return _settings_reducer__WEBPACK_IMPORTED_MODULE_1__["ActionSettingsChangeAnimationsElements"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionSettingsPersist", function() { return _settings_reducer__WEBPACK_IMPORTED_MODULE_1__["ActionSettingsPersist"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NIGHT_MODE_THEME", function() { return _settings_reducer__WEBPACK_IMPORTED_MODULE_1__["NIGHT_MODE_THEME"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return _settings_reducer__WEBPACK_IMPORTED_MODULE_1__["initialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectorSettings", function() { return _settings_reducer__WEBPACK_IMPORTED_MODULE_1__["selectorSettings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "settingsReducer", function() { return _settings_reducer__WEBPACK_IMPORTED_MODULE_1__["settingsReducer"]; });

/* harmony import */ var _settings_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.effects */ "./src/app/settings/settings.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SettingsEffects", function() { return _settings_effects__WEBPACK_IMPORTED_MODULE_2__["SettingsEffects"]; });

/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings/settings.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return _settings_settings_component__WEBPACK_IMPORTED_MODULE_3__["SettingsComponent"]; });







/***/ }),

/***/ "./src/app/settings/settings.effects.ts":
/*!**********************************************!*\
  !*** ./src/app/settings/settings.effects.ts ***!
  \**********************************************/
/*! exports provided: SettingsEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsEffects", function() { return SettingsEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var _settings_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings.reducer */ "./src/app/settings/settings.reducer.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SettingsEffects = /** @class */ (function () {
    function SettingsEffects(actions$, localStorageService, animationsService) {
        this.actions$ = actions$;
        this.localStorageService = localStorageService;
        this.animationsService = animationsService;
    }
    SettingsEffects.prototype.persistSettings = function () {
        var _this = this;
        return this.actions$.ofType(_settings_reducer__WEBPACK_IMPORTED_MODULE_5__["SettingsActionTypes"].PERSIST).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (action) {
            var settings = action.payload.settings;
            var pageAnimations = settings.pageAnimations, elementsAnimations = settings.elementsAnimations;
            _this.localStorageService.setItem(_settings_reducer__WEBPACK_IMPORTED_MODULE_5__["SETTINGS_KEY"], settings);
            _this.animationsService.updateRouteAnimationType(pageAnimations, elementsAnimations);
        }));
    };
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])({ dispatch: false }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], SettingsEffects.prototype, "persistSettings", null);
    SettingsEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"],
            _app_core__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"],
            _app_core__WEBPACK_IMPORTED_MODULE_4__["AnimationsService"]])
    ], SettingsEffects);
    return SettingsEffects;
}());



/***/ }),

/***/ "./src/app/settings/settings.module.ts":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.module.ts ***!
  \*********************************************/
/*! exports provided: SettingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModule", function() { return SettingsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _settings_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings.reducer */ "./src/app/settings/settings.reducer.ts");
/* harmony import */ var _settings_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings.effects */ "./src/app/settings/settings.effects.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings/settings.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SettingsModule = /** @class */ (function () {
    function SettingsModule() {
    }
    SettingsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["StoreModule"].forFeature('settings', _settings_reducer__WEBPACK_IMPORTED_MODULE_4__["settingsReducer"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["EffectsModule"].forFeature([_settings_effects__WEBPACK_IMPORTED_MODULE_5__["SettingsEffects"]])
            ],
            declarations: [_settings_settings_component__WEBPACK_IMPORTED_MODULE_6__["SettingsComponent"]]
        })
    ], SettingsModule);
    return SettingsModule;
}());



/***/ }),

/***/ "./src/app/settings/settings.reducer.ts":
/*!**********************************************!*\
  !*** ./src/app/settings/settings.reducer.ts ***!
  \**********************************************/
/*! exports provided: SETTINGS_KEY, SettingsActionTypes, ActionSettingsChangeTheme, ActionSettingsChangeAutoNightMode, ActionSettingsChangeAnimationsPage, ActionSettingsChangeAnimationsPageDisabled, ActionSettingsChangeAnimationsElements, ActionSettingsPersist, NIGHT_MODE_THEME, initialState, selectorSettings, settingsReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SETTINGS_KEY", function() { return SETTINGS_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsActionTypes", function() { return SettingsActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSettingsChangeTheme", function() { return ActionSettingsChangeTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSettingsChangeAutoNightMode", function() { return ActionSettingsChangeAutoNightMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSettingsChangeAnimationsPage", function() { return ActionSettingsChangeAnimationsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSettingsChangeAnimationsPageDisabled", function() { return ActionSettingsChangeAnimationsPageDisabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSettingsChangeAnimationsElements", function() { return ActionSettingsChangeAnimationsElements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSettingsPersist", function() { return ActionSettingsPersist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NIGHT_MODE_THEME", function() { return NIGHT_MODE_THEME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectorSettings", function() { return selectorSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settingsReducer", function() { return settingsReducer; });
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var SETTINGS_KEY = 'SETTINGS';
var SettingsActionTypes;
(function (SettingsActionTypes) {
    SettingsActionTypes["CHANGE_THEME"] = "[Settings] Change Theme";
    SettingsActionTypes["CHANGE_AUTO_NIGHT_AUTO_MODE"] = "[Settings] Change Auto Night Mode";
    SettingsActionTypes["CHANGE_ANIMATIONS_PAGE"] = "[Settings] Change Animations Page";
    SettingsActionTypes["CHANGE_ANIMATIONS_PAGE_DISABLED"] = "[Settings] Change Animations Page Disabled";
    SettingsActionTypes["CHANGE_ANIMATIONS_ELEMENTS"] = "[Settings] Change Animations Elements";
    SettingsActionTypes["PERSIST"] = "[Settings] Persist";
})(SettingsActionTypes || (SettingsActionTypes = {}));
var ActionSettingsChangeTheme = /** @class */ (function () {
    function ActionSettingsChangeTheme(payload) {
        this.payload = payload;
        this.type = SettingsActionTypes.CHANGE_THEME;
    }
    return ActionSettingsChangeTheme;
}());

var ActionSettingsChangeAutoNightMode = /** @class */ (function () {
    function ActionSettingsChangeAutoNightMode(payload) {
        this.payload = payload;
        this.type = SettingsActionTypes.CHANGE_AUTO_NIGHT_AUTO_MODE;
    }
    return ActionSettingsChangeAutoNightMode;
}());

var ActionSettingsChangeAnimationsPage = /** @class */ (function () {
    function ActionSettingsChangeAnimationsPage(payload) {
        this.payload = payload;
        this.type = SettingsActionTypes.CHANGE_ANIMATIONS_PAGE;
    }
    return ActionSettingsChangeAnimationsPage;
}());

var ActionSettingsChangeAnimationsPageDisabled = /** @class */ (function () {
    function ActionSettingsChangeAnimationsPageDisabled(payload) {
        this.payload = payload;
        this.type = SettingsActionTypes.CHANGE_ANIMATIONS_PAGE_DISABLED;
    }
    return ActionSettingsChangeAnimationsPageDisabled;
}());

var ActionSettingsChangeAnimationsElements = /** @class */ (function () {
    function ActionSettingsChangeAnimationsElements(payload) {
        this.payload = payload;
        this.type = SettingsActionTypes.CHANGE_ANIMATIONS_ELEMENTS;
    }
    return ActionSettingsChangeAnimationsElements;
}());

var ActionSettingsPersist = /** @class */ (function () {
    function ActionSettingsPersist(payload) {
        this.payload = payload;
        this.type = SettingsActionTypes.PERSIST;
    }
    return ActionSettingsPersist;
}());

var NIGHT_MODE_THEME = 'BLACK-THEME';
var initialState = {
    theme: 'DEFAULT-THEME',
    autoNightMode: false,
    pageAnimations: true,
    pageAnimationsDisabled: false,
    elementsAnimations: true
};
var selectorSettings = function (state) {
    return (state.settings || { theme: '' });
};
function settingsReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case SettingsActionTypes.CHANGE_THEME:
            return __assign({}, state, { theme: action.payload.theme });
        case SettingsActionTypes.CHANGE_AUTO_NIGHT_AUTO_MODE:
            return __assign({}, state, { autoNightMode: action.payload.autoNightMode });
        case SettingsActionTypes.CHANGE_ANIMATIONS_PAGE:
            return __assign({}, state, { pageAnimations: action.payload.pageAnimations });
        case SettingsActionTypes.CHANGE_ANIMATIONS_ELEMENTS:
            return __assign({}, state, { elementsAnimations: action.payload.elementsAnimations });
        case SettingsActionTypes.CHANGE_ANIMATIONS_PAGE_DISABLED:
            return __assign({}, state, { pageAnimations: false, pageAnimationsDisabled: action.payload.pageAnimationsDisabled });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/settings/settings/settings.component.html":
/*!***********************************************************!*\
  !*** ./src/app/settings/settings/settings.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-12\"><h1>Settings</h1></div>\n  </div>\n  <br>\n  <div class=\"row\">\n    <div class=\"col-md-6 group\">\n      <h2>Themes</h2>\n      <div class=\"icon-form-field\">\n        <mat-icon fontSet=\"fas\" fontIcon=\"fa-paint-brush\" color=\"accent\"></mat-icon>\n        <mat-form-field>\n          <mat-select placeholder=\"Color theme\"\n                      [ngModel]=\"settings?.theme\"\n                      (selectionChange)=\"onThemeSelect($event)\">\n            <mat-option *ngFor=\"let t of themes\" [value]=\"t.value\">\n              {{t.label}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n      <div class=\"icon-form-field\">\n        <mat-icon fontSet=\"fas\" fontIcon=\"fa-lightbulb\" color=\"accent\"></mat-icon>\n        <mat-placeholder>Auto night mode (from 21:00 to 7:00)</mat-placeholder>\n        <mat-slide-toggle\n          [checked]=\"settings?.autoNightMode\"\n          (change)=\"onAutoNightModeToggle($event)\">\n        </mat-slide-toggle>\n      </div>\n    </div>\n    <div class=\"col-md-6 group\">\n      <h2>Animations</h2>\n      <div class=\"icon-form-field\">\n        <mat-icon fontSet=\"fas\" fontIcon=\"fa-window-maximize\" color=\"accent\"></mat-icon>\n        <mat-placeholder>Navigation whole page transition</mat-placeholder>\n        <mat-slide-toggle\n          matTooltip=\"Sorry, this feature is disabled in IE and EDGE\"\n          matTooltipPosition=\"before\"\n          *ngIf=\"settings?.pageAnimationsDisabled\"\n          disabled>\n        </mat-slide-toggle>\n        <mat-slide-toggle\n          *ngIf=\"!settings?.pageAnimationsDisabled\"\n          [checked]=\"settings?.pageAnimations\"\n          (change)=\"onPageAnimationsToggle($event)\">\n        </mat-slide-toggle>\n      </div>\n      <div class=\"icon-form-field\">\n        <mat-icon fontSet=\"fas\" fontIcon=\"fa-stream\" color=\"accent\"></mat-icon>\n        <mat-placeholder>Navigation page elements slide up</mat-placeholder>\n        <mat-slide-toggle\n          [checked]=\"settings?.elementsAnimations\"\n          (change)=\"onElementsAnimationsToggle($event)\">\n        </mat-slide-toggle>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/settings/settings/settings.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/settings/settings/settings.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-top: 20px; }\n\nh1 {\n  margin: 0 0 20px 0;\n  text-transform: uppercase; }\n\nh2 {\n  margin: 0 0 10px 0;\n  text-transform: uppercase; }\n\n.group {\n  margin: 0 0 40px 0; }\n\n.icon-form-field {\n  position: relative;\n  display: -ms-flexbox;\n  display: flex;\n  height: 65.5px;\n  -ms-flex-align: center;\n      align-items: center; }\n\n.icon-form-field mat-placeholder {\n    -ms-flex: 2 1 auto;\n        flex: 2 1 auto; }\n\nmat-icon {\n  margin: 5px 5px 0 0;\n  font-size: 20px; }\n\nmat-form-field {\n  -ms-flex: 1 0 auto;\n      flex: 1 0 auto; }\n"

/***/ }),

/***/ "./src/app/settings/settings/settings.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/settings/settings/settings.component.ts ***!
  \*********************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _settings_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../settings.reducer */ "./src/app/settings/settings.reducer.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(store) {
        var _this = this;
        this.store = store;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.themes = [
            { value: 'DEFAULT-THEME', label: 'Blue' },
            { value: 'LIGHT-THEME', label: 'Light' },
            { value: 'NATURE-THEME', label: 'Nature' },
            { value: 'BLACK-THEME', label: 'Dark' }
        ];
        store
            .select(_settings_reducer__WEBPACK_IMPORTED_MODULE_4__["selectorSettings"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscribe$))
            .subscribe(function (settings) { return (_this.settings = settings); });
    }
    SettingsComponent.prototype.ngOnInit = function () { };
    SettingsComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    SettingsComponent.prototype.onThemeSelect = function (_a) {
        var theme = _a.value;
        this.store.dispatch(new _settings_reducer__WEBPACK_IMPORTED_MODULE_4__["ActionSettingsChangeTheme"]({ theme: theme }));
        this.store.dispatch(new _settings_reducer__WEBPACK_IMPORTED_MODULE_4__["ActionSettingsPersist"]({ settings: this.settings }));
    };
    SettingsComponent.prototype.onAutoNightModeToggle = function (_a) {
        var autoNightMode = _a.checked;
        this.store.dispatch(new _settings_reducer__WEBPACK_IMPORTED_MODULE_4__["ActionSettingsChangeAutoNightMode"]({ autoNightMode: autoNightMode }));
        this.store.dispatch(new _settings_reducer__WEBPACK_IMPORTED_MODULE_4__["ActionSettingsPersist"]({ settings: this.settings }));
    };
    SettingsComponent.prototype.onPageAnimationsToggle = function (_a) {
        var pageAnimations = _a.checked;
        this.store.dispatch(new _settings_reducer__WEBPACK_IMPORTED_MODULE_4__["ActionSettingsChangeAnimationsPage"]({ pageAnimations: pageAnimations }));
        this.store.dispatch(new _settings_reducer__WEBPACK_IMPORTED_MODULE_4__["ActionSettingsPersist"]({ settings: this.settings }));
    };
    SettingsComponent.prototype.onElementsAnimationsToggle = function (_a) {
        var elementsAnimations = _a.checked;
        this.store.dispatch(new _settings_reducer__WEBPACK_IMPORTED_MODULE_4__["ActionSettingsChangeAnimationsElements"]({ elementsAnimations: elementsAnimations }));
        this.store.dispatch(new _settings_reducer__WEBPACK_IMPORTED_MODULE_4__["ActionSettingsPersist"]({ settings: this.settings }));
    };
    SettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'anms-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/settings/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.scss */ "./src/app/settings/settings/settings.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/shared/big-input/big-input-action.component.html":
/*!******************************************************************!*\
  !*** ./src/app/shared/big-input/big-input-action.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-raised-button color=\"color\" [disabled]=\"disabled\" (click)=\"onClick()\">\n  <mat-icon *ngIf=\"fontSet && fontIcon\" [fontSet]=\"fontSet\"\n            [fontIcon]=\"fontIcon\"></mat-icon>\n  <span *ngIf=\"label\">{{label}}</span>\n</button>\n"

/***/ }),

/***/ "./src/app/shared/big-input/big-input-action.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/shared/big-input/big-input-action.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  padding: 0;\n  min-width: 36px;\n  margin-left: 10px; }\n  button mat-icon {\n    position: relative;\n    top: 2px;\n    font-size: 18px; }\n"

/***/ }),

/***/ "./src/app/shared/big-input/big-input-action.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/big-input/big-input-action.component.ts ***!
  \****************************************************************/
/*! exports provided: BigInputActionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BigInputActionComponent", function() { return BigInputActionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BigInputActionComponent = /** @class */ (function () {
    function BigInputActionComponent() {
        this.disabled = false;
        this.fontSet = '';
        this.fontIcon = '';
        this.label = '';
        this.color = '';
        this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.hasFocus = false;
    }
    BigInputActionComponent.prototype.onClick = function () {
        this.action.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BigInputActionComponent.prototype, "disabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BigInputActionComponent.prototype, "fontSet", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BigInputActionComponent.prototype, "fontIcon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BigInputActionComponent.prototype, "label", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BigInputActionComponent.prototype, "color", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BigInputActionComponent.prototype, "action", void 0);
    BigInputActionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'anms-big-input-action',
            template: __webpack_require__(/*! ./big-input-action.component.html */ "./src/app/shared/big-input/big-input-action.component.html"),
            styles: [__webpack_require__(/*! ./big-input-action.component.scss */ "./src/app/shared/big-input/big-input-action.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        })
    ], BigInputActionComponent);
    return BigInputActionComponent;
}());



/***/ }),

/***/ "./src/app/shared/big-input/big-input.component.html":
/*!***********************************************************!*\
  !*** ./src/app/shared/big-input/big-input.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"big-input\" [ngClass]=\"{ 'has-focus': hasFocus }\">\n  <input (focus)=\"hasFocus = true\" (blur)=\"hasFocus = false\"\n         [value]=\"value\"\n         [placeholder]=\"placeholder\"\n         [disabled]=\"disabled\" />\n  <ng-content></ng-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/shared/big-input/big-input.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/shared/big-input/big-input.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".big-input {\n  width: 100%;\n  transition: all 0.5s;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 10px 10px 10px 20px; }\n  .big-input input {\n    -ms-flex-positive: 1;\n        flex-grow: 1;\n    border: 0;\n    font-size: 20px;\n    min-width: 100px; }\n"

/***/ }),

/***/ "./src/app/shared/big-input/big-input.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/big-input/big-input.component.ts ***!
  \*********************************************************/
/*! exports provided: BigInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BigInputComponent", function() { return BigInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BigInputComponent = /** @class */ (function () {
    function BigInputComponent() {
        this.value = '';
        this.disabled = false;
        this.hasFocus = false;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BigInputComponent.prototype, "placeholder", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BigInputComponent.prototype, "value", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BigInputComponent.prototype, "disabled", void 0);
    BigInputComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'anms-big-input',
            template: __webpack_require__(/*! ./big-input.component.html */ "./src/app/shared/big-input/big-input.component.html"),
            styles: [__webpack_require__(/*! ./big-input.component.scss */ "./src/app/shared/big-input/big-input.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        })
    ], BigInputComponent);
    return BigInputComponent;
}());



/***/ }),

/***/ "./src/app/shared/index.ts":
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared.module */ "./src/app/shared/shared.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return _shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]; });




/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _big_input_big_input_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./big-input/big-input.component */ "./src/app/shared/big-input/big-input.component.ts");
/* harmony import */ var _big_input_big_input_action_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./big-input/big-input-action.component */ "./src/app/shared/big-input/big-input-action.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltipModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__["MatSnackBarModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_18__["MatSlideToggleModule"]
            ],
            declarations: [_big_input_big_input_component__WEBPACK_IMPORTED_MODULE_19__["BigInputComponent"], _big_input_big_input_action_component__WEBPACK_IMPORTED_MODULE_20__["BigInputActionComponent"]],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltipModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__["MatSnackBarModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_18__["MatSlideToggleModule"],
                _big_input_big_input_component__WEBPACK_IMPORTED_MODULE_19__["BigInputComponent"],
                _big_input_big_input_action_component__WEBPACK_IMPORTED_MODULE_20__["BigInputActionComponent"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/static/about/about.component.html":
/*!***************************************************!*\
  !*** ./src/app/static/about/about.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background\">\n  <div class=\"gradient\">\n    <div class=\"container\">\n      <h1>Children's Clothing Exchange.</h1>\n      <div class=\"actions\">\n        <a [ngClass]=\"routeAnimationsElements\"\n           mat-raised-button class=\"actions-main\" color=\"primary\" routerLink=\"../features\">\n          Shop\n        </a>\n        <!-- <a mat-raised-button class=\"actions-main\" color=\"accent\" routerLink=\"../examples\"\n           [ngClass]=\"routeAnimationsElements\">\n          Examples\n        </a> -->\n        <a mat-raised-button class=\"actions-main\" color=\"warn\" routerLink=\"../settings\"\n           [ngClass]=\"routeAnimationsElements\">\n          Change Theme\n        </a>\n      </div>\n    \n    </div>\n  </div>\n</div>\n\n<div class=\"container\">\n  <h2>Bottom container</h2>\n</div>\n"

/***/ }),

/***/ "./src/app/static/about/about.component.scss":
/*!***************************************************!*\
  !*** ./src/app/static/about/about.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  text-align: center;\n  font-size: 3em;\n  text-transform: uppercase; }\n\nh2 {\n  font-size: 1.5em;\n  text-transform: uppercase; }\n\n.background {\n  padding: 80px 0 0 0;\n  position: relative; }\n\n.background .actions {\n    text-align: center;\n    margin: 50px;\n    z-index: 1; }\n\n.background .actions span {\n      display: inline-block;\n      font-weight: bold;\n      padding: 20px 10px 30px 10px; }\n\n.background .actions a {\n      margin: 0 5px 10px 0; }\n\n.background .actions a.actions-main {\n        text-transform: uppercase;\n        padding: 3px 24px; }\n\n.background .actions a mat-icon {\n        position: relative;\n        top: 4px; }\n\n.background .get-started {\n    max-width: 700px;\n    margin: 50px auto;\n    letter-spacing: 0.01px;\n    overflow-wrap: break-word;\n    z-index: 1;\n    overflow: hidden; }\n\n.background .get-started code {\n      font-size: 0.9em;\n      display: inline-block;\n      word-wrap: break-word;\n      white-space: normal;\n      margin: 0 0 10px 0; }\n\n.background::before {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    background: url('intro.jpg') no-repeat center top;\n    background-size: cover;\n    opacity: 0.7;\n    content: '';\n    z-index: 0; }\n\n.background .gradient::before {\n    position: absolute;\n    top: 50%;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    content: '';\n    z-index: 0; }\n\n.background .container {\n    position: relative; }\n\n.follow-releases {\n  max-width: 700px;\n  margin: 0 auto 80px auto; }\n\n.follow-releases p {\n    line-height: 40px; }\n\n.follow-releases p a {\n      border-bottom: 3px solid; }\n\n.follow-releases img {\n    display: block;\n    max-width: 80%;\n    margin: 20px auto 0 auto;\n    border-radius: 5px;\n    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12); }\n\n@media (max-width: 768px) {\n  .background .actions {\n    margin: 50px 0; }\n  .background .get-started {\n    width: auto; }\n  .follow-releases {\n    width: auto; }\n    .follow-releases img {\n      max-width: 100%; } }\n\n@media (max-width: 576px) {\n  .background {\n    padding: 40px 0 0 0; }\n    .background h1 {\n      line-height: 1em; }\n    .background .actions {\n      margin: 40px 0 0 0; }\n      .background .actions span {\n        padding: 10px 0 20px 0; }\n      .background .actions a {\n        width: 100%; }\n    .background .get-started {\n      width: auto;\n      margin: 40px auto 40px auto; }\n  .follow-releases {\n    margin: 0 auto 40px auto; } }\n"

/***/ }),

/***/ "./src/app/static/about/about.component.ts":
/*!*************************************************!*\
  !*** ./src/app/static/about/about.component.ts ***!
  \*************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
        this.routeAnimationsElements = _app_core__WEBPACK_IMPORTED_MODULE_1__["ROUTE_ANIMATIONS_ELEMENTS"];
        this.releaseButler = __webpack_require__(/*! ../../../assets/release-butler.png */ "./src/assets/release-butler.png");
    }
    AboutComponent.prototype.ngOnInit = function () { };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'anms-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/static/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/static/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/static/features/features.component.html":
/*!*********************************************************!*\
  !*** ./src/app/static/features/features.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row align-items-end\">\n    <div class=\"col-md-6 col-lg-4\"\n      [ngClass]=\"routeAnimationsElements\"\n      *ngFor=\"let product of products\">\n      <mat-card>\n          \n        <mat-card-title>{{product.name}}</mat-card-title>\n        <mat-card-subtitle>\n          {{product.description}}\n        </mat-card-subtitle>\n        <img mat-card-image src=\"{{product.img}}\" alt=\"\">\n\n        <mat-card-actions class=\"d-flex justify-content-between align-items-center\">\n          <button mat-raised-button color=\"warn\">ADD TO BAG</button>\n          <i class=\"fab fa-creative-commons icon sz-18\">\n            <span> {{product.points}}</span>\n          </i>\n        </mat-card-actions>\n      </mat-card>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/static/features/features.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/static/features/features.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/static/features/features.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/static/features/features.component.ts ***!
  \*******************************************************/
/*! exports provided: FeaturesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesComponent", function() { return FeaturesComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FeaturesComponent = /** @class */ (function () {
    function FeaturesComponent(http) {
        this.http = http;
        this.routeAnimationsElements = _app_core__WEBPACK_IMPORTED_MODULE_3__["ROUTE_ANIMATIONS_ELEMENTS"];
        this.versions = _env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].versions;
    }
    FeaturesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('./assets/mock/products.json')
            .subscribe(function (response) {
            _this.products = response.data;
        });
    };
    FeaturesComponent.prototype.openLink = function (link) {
        window.open(link, '_blank');
    };
    FeaturesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'anms-features',
            template: __webpack_require__(/*! ./features.component.html */ "./src/app/static/features/features.component.html"),
            styles: [__webpack_require__(/*! ./features.component.scss */ "./src/app/static/features/features.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], FeaturesComponent);
    return FeaturesComponent;
}());



/***/ }),

/***/ "./src/app/static/index.ts":
/*!*********************************!*\
  !*** ./src/app/static/index.ts ***!
  \*********************************/
/*! exports provided: StaticRoutingModule, StaticModule, AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _static_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./static-routing.module */ "./src/app/static/static-routing.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StaticRoutingModule", function() { return _static_routing_module__WEBPACK_IMPORTED_MODULE_0__["StaticRoutingModule"]; });

/* harmony import */ var _static_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./static.module */ "./src/app/static/static.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StaticModule", function() { return _static_module__WEBPACK_IMPORTED_MODULE_1__["StaticModule"]; });

/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about/about.component */ "./src/app/static/about/about.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return _about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"]; });






/***/ }),

/***/ "./src/app/static/static-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/static/static-routing.module.ts ***!
  \*************************************************/
/*! exports provided: StaticRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticRoutingModule", function() { return StaticRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about/about.component */ "./src/app/static/about/about.component.ts");
/* harmony import */ var _features_features_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./features/features.component */ "./src/app/static/features/features.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'about',
        component: _about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"],
        data: { title: 'About' }
    },
    {
        path: 'features',
        component: _features_features_component__WEBPACK_IMPORTED_MODULE_3__["FeaturesComponent"],
        data: { title: 'Shop' }
    }
];
var StaticRoutingModule = /** @class */ (function () {
    function StaticRoutingModule() {
    }
    StaticRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], StaticRoutingModule);
    return StaticRoutingModule;
}());



/***/ }),

/***/ "./src/app/static/static.module.ts":
/*!*****************************************!*\
  !*** ./src/app/static/static.module.ts ***!
  \*****************************************/
/*! exports provided: StaticModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticModule", function() { return StaticModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var _static_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./static-routing.module */ "./src/app/static/static-routing.module.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about/about.component */ "./src/app/static/about/about.component.ts");
/* harmony import */ var _features_features_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./features/features.component */ "./src/app/static/features/features.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var StaticModule = /** @class */ (function () {
    function StaticModule() {
    }
    StaticModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _app_shared__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
                _static_routing_module__WEBPACK_IMPORTED_MODULE_2__["StaticRoutingModule"]
            ],
            declarations: [
                _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"],
                _features_features_component__WEBPACK_IMPORTED_MODULE_4__["FeaturesComponent"]
            ]
        })
    ], StaticModule);
    return StaticModule;
}());



/***/ }),

/***/ "./src/assets/baby2.png":
/*!******************************!*\
  !*** ./src/assets/baby2.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/release-butler.png":
/*!***************************************!*\
  !*** ./src/assets/release-butler.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "release-butler.png";

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var packageJson = __webpack_require__(/*! ../../package.json */ "./package.json");
var environment = {
    appName: 'Brand Name',
    envName: 'DEV',
    production: false,
    test: false,
    versions: {
        app: packageJson.version,
        angular: packageJson.dependencies['@angular/core'],
        ngrx: packageJson.dependencies['@ngrx/store'],
        material: packageJson.dependencies['@angular/material'],
        bootstrap: packageJson.dependencies.bootstrap,
        rxjs: packageJson.dependencies.rxjs,
        fontAwesome: packageJson.dependencies['@fortawesome/fontawesome-free-webfonts'],
        angularCli: packageJson.devDependencies['@angular/cli'],
        typescript: packageJson.devDependencies['typescript']
    }
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Frank/Documents/work/ng5_app1/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map