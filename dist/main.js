(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.template */ "./src/app/app.template.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'resume-app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: _app_template__WEBPACK_IMPORTED_MODULE_2__["string"]
            //templateUrl: './app.component.html',
            //styleUrls: ['./app.component.scss']
        })
    ], AppComponent);
    return AppComponent;
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.template.ts":
/*!*********************************!*\
  !*** ./src/app/app.template.ts ***!
  \*********************************/
/*! exports provided: string */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "string", function() { return string; });
var string = "<div class=\"flex-center\"><div class=\"max-width-900 border-h border-grey-3x\"><div class=\"flex-center\"><div class=\"pad text-4x\"><a class=\"block no-a-style pad border-2 border-positive text-positive text-center hover-bg-positive hover-text-white\" href=\"Acker Apple Resume.pdf\">Download the Resume of Acker Dawn Apple</a></div></div><div class=\"pad-h-2x\"><h1>The Highlights of Acker Apple</h1><h2 class=\"margin-bottom-0\">OBJECTIVE:</h2><div class=\"flex\"><div style=\"width:20%\"></div><div class=\"max-width-700\"><p>To apply my advanced knowledge and experience in software engineering at a stimulating and rewarding organization. To work with a team where my skills can be effectively utilized to improve the operations, reliability and efficiency of a company.</p></div></div><br/><h2 class=\"margin-bottom-0\">PASSION:</h2><div class=\"flex\"><div style=\"width:20%\"></div><div class=\"max-width-700\"><p>I maintain popular open source code packages for several different programming platforms. My publicly available code receives free quality assurance by adopters whom report problems and issue updates. This has led to communications and collaborations with other advanced developers from all over the world, which has been a very enriching enjoyable experience that I want to continue to develop.</p></div></div><br/><h2 class=\"margin-bottom-0\">QUALIFICATIONS:</h2><div class=\"flex\"><div style=\"width:20%\"></div><div class=\"max-width-700\"><style>.logo-reflect{" +
    "\n  -webkit-box-reflect: below 0px -webkit-gradient(linear, left top, left bottom, from(transparent), to(rgba(250, 250, 250, 0.1)));" +
    "\n}" +
    "\n" +
    "\n</style><p>Extremely well experienced with trouble-shooting and rooting out the cause of programmatic bugs and issues by using investigation techniques by applying relative knowledge to separate the symptoms of an issue from the actual cause. Highly detail oriented; analytical; and have an in-depth knowledge of information management. On the job experience of implementing highly scaleable applications.</p><div class=\"flex-wrap flex-apart\"><img class=\"logo-reflect\" src=\"assets/logos/favicon-32x32.png\"/><img class=\"logo-reflect\" src=\"assets/logos/firebase-32x32.png\"/><img class=\"logo-reflect\" src=\"assets/logos/github-32x32.ico\"/><img class=\"logo-reflect\" src=\"assets/logos/mongodb-32x32.ico\"/><img class=\"logo-reflect\" src=\"assets/logos/npm-32x32.png\"/></div><p><i>Specific Technical Knowledge Includes, but not limited to:</i></p><ul><li>NodeJs <span class=\"opacity-60\">(very proficient)</span></li><ul><li>Packages used: Sequelize; Loopback; Webpack; Pug / Jade; TypeScript; Express</li><li>Packages created: path-reader, pdf-cli-wrap, ack-x</li></ul><li>Database Technologies</li><ul><li>MS SQL <span class=\"opacity-60\">(very proficient)</span></li><li>MySQL <span class=\"opacity-60\">(very proficient)</span></li><li>MongoDB <span class=\"opacity-60\">(known very well)</span></li><li>Oracle <span class=\"opacity-60\">(known very well)</span></li><li>Postgres <span class=\"opacity-60\">(known well)</span></li></ul><li>Front-end Technologies</li><ul><li>Angular <span class=\"opacity-60\">(very proficient)</span></li><ul><li>Packages created: angular-file, agm-overlays, stripe-angular, ack-angular-fx</li></ul><li>SASS <span class=\"opacity-60\">(known well)</span></li><li>DHTML ( HTML / CSS / JAVASCRIPT )</li><ul><li>Web Workers</li><li>Web-apps</li><ul><li>Cordova <span class=\"opacity-60\">(known very well)</span></li><li>Ionic <span class=\"opacity-60\">(known well)</span></li><li>PhoneGap <span class=\"opacity-60\">(known well)</span></li><li>native-scripting <span class=\"opacity-60\">(known lightly)</span></li></ul></ul></ul><li>Third Party Software</li><ul><li>Twilio</li><li>Firebase</li><li>Tableau</li><li>Github</li><li>NPM</li><li>Amazon Web Services</li><li>Payment Gateways</li><ul><li>Stripe, FirstData, Auth.net</li></ul></ul><li>Java <span class=\"opacity-60\">(known fairly well)</span></li><ul><li>Know Maven well</li><li>I maintain a few PDFBox related packages</li><li>PDF document management specialist</li></ul><li>XML / SOAP / WDDX</li><li>Versioning Systems Used</li><ul><li>GIT, Subversion (SVN), Source Safe, Concurrent Versioning System (CVS)</li></ul></ul></div></div></div></div></div>";


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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    hmr: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/hmr.ts":
/*!********************!*\
  !*** ./src/hmr.ts ***!
  \********************/
/*! exports provided: hmrBootstrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hmrBootstrap", function() { return hmrBootstrap; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angularclass_hmr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angularclass/hmr */ "./node_modules/@angularclass/hmr/dist/index.js");
/* harmony import */ var _angularclass_hmr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angularclass_hmr__WEBPACK_IMPORTED_MODULE_1__);


var hmrBootstrap = function (module, bootstrap) {
    var ngModule;
    module.hot.accept();
    bootstrap().then(function (mod) { return (ngModule = mod); });
    module.hot.dispose(function () {
        var appRef = ngModule.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]);
        var elements = appRef.components.map(function (c) { return c.location.nativeElement; });
        var makeVisible = Object(_angularclass_hmr__WEBPACK_IMPORTED_MODULE_1__["createNewHosts"])(elements);
        ngModule.destroy();
        makeVisible();
    });
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
/* harmony import */ var _hmr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hmr */ "./src/hmr.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
//platformBrowserDynamic().bootstrapModule(AppModule)
//  .catch(err => console.error(err));
var bootstrap = function () { return Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]); };
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].hmr) {
    if (false) {}
    else {
        console.error("HMR is not enabled for webpack-dev-server!");
        console.log("Are you using the --hmr flag for ng serve?");
    }
}
else {
    bootstrap().catch(function (err) { return console.log(err); });
}


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/adminapple/projects/Ack/resume/master/resume-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map