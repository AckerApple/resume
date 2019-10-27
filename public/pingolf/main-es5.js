(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$": 
        /*!*******************************************************!*\
          !*** ./node_modules/moment-mini/locale sync ^\.\/.*$ ***!
          \*******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            var map = {
                "./locale": "./node_modules/moment-mini/locale/locale.js",
                "./locale.js": "./node_modules/moment-mini/locale/locale.js"
            };
            function webpackContext(req) {
                var id = webpackContextResolve(req);
                return __webpack_require__(id);
            }
            function webpackContextResolve(req) {
                if (!__webpack_require__.o(map, req)) {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                }
                return map[req];
            }
            webpackContext.keys = function webpackContextKeys() {
                return Object.keys(map);
            };
            webpackContext.resolve = webpackContextResolve;
            module.exports = webpackContext;
            webpackContext.id = "./node_modules/moment-mini/locale sync recursive ^\\.\\/.*$";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!---[debug] = \"AppData.debug\"--->\n<ack-app-stage\n  class=\"block height-full width-full\"\n  id=\"top\" name=\"top\"\n  [@fadeInOutUp] = \"1\"\n>\n  <ng-template #headerPrepend>\n  </ng-template>\n  \n    <route-reporter [(activated)]=\"activateRoute\"></route-reporter>\n    {{ activateRoute | typeof }}\n    {{activateRoute}}\n  <ng-template #headerAppend>\n    <ng-container *ngIf=\"AppData.user\">\n      <ng-container *ngIf=\"AppData.user.photoURL; else userLabel\">\n        <img class=\"inlin-block width-40 height-40 radius-half\"\n          *ngIf = \"AppData.user\"\n          [src] = \"AppData.user.photoURL\"\n          [title] = \"AppData.user.displayName || AppData.user.email + ' : ' + AppData.user.uid\"\n        />\n      </ng-container>\n      <ng-template #userLabel>\n        <span class=\"text-smx\">{{ AppData.user.displayName || AppData.user.email}}</span>\n      </ng-template>\n    </ng-container>\n  </ng-template>\n</ack-app-stage>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ScoreCard/ScoreCard.component.html": 
        /*!*****************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/ScoreCard/ScoreCard.component.html ***!
          \*****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ack-modal *ngIf=\"editPlayerHole\" (close)=\"editPlayerHole=null\">\n  <div class=\"radius-10 bg-white pad\">\n    <h3>Edit {{ editPlayerHole.coursePlayer.player.name }} Score</h3>\n    <div class=\"text-center\">\n      <button\n        class = \"flex-1 pad-v pad-h-2x\"\n        type = \"button\" \n        [disabled] = \"!editPlayerHole.playerHoleScore.balls\"\n        (click) = \"editPlayerHole.playerHoleScore.balls=editPlayerHole.playerHoleScore.balls - 1;savePlayerStrokes(editPlayerHole.coursePlayer.playerId)\"\n      > - </button>\n      <button\n        class = \"flex-1 pad-v pad-h-2x\"\n        type = \"button\" \n        [disabled] = \"editPlayerHole.playerHoleScore.balls > 5\"\n        (click) = \"editPlayerHole.playerHoleScore.balls=editPlayerHole.playerHoleScore.balls + 1;savePlayerStrokes(editPlayerHole.coursePlayer.playerId)\"\n      > + </button>\n      <br />\n      <div *ngIf=\"editPlayerHole.playerHoleScore.balls\" class=\"text-smx opacity-half cursor-pointer\">\n        <div class=\"pad\">\n          <span style=\"font-size:4em;\" *ngFor=\"let item of 's'.repeat(editPlayerHole.playerHoleScore.balls - 1).split('s')\">&bull;</span>\n        </div>\n\n        <span *ngIf=\"editPlayerHole.playerHoleScore.balls > editPlayerHole.hole.par\">\n          + {{editPlayerHole.playerHoleScore.balls - editPlayerHole.hole.par}}\n        </span>\n        <span *ngIf=\"editPlayerHole.playerHoleScore.balls < editPlayerHole.hole.par\">\n          - {{editPlayerHole.hole.par - editPlayerHole.playerHoleScore.balls}}\n        </span>\n        <span *ngIf=\"editPlayerHole.playerHoleScore.balls == editPlayerHole.hole.par\">par</span>\n    </div>\n    </div>\n  </div>\n</ack-modal>\n\n<ack-modal *ngIf=\"editCoursePlayer\" (close)=\"editCoursePlayer=null\">\n  <div class=\"radius-10 bg-white pad text-center\">\n    <h3>Edit {{ editCoursePlayer.player.name }}</h3>\n    <div class=\"flex-wrap child-pad\">\n      <span *ngFor=\"let item of parTypes\">\n        <input type=\"radio\" [checked]=\"editCoursePlayer.parTypeId === item.uuid\" (change)=\"editCoursePlayer.parTypeId=item.uuid;saveCourseRoundPlayer(editCoursePlayer)\" /> {{item.name}}\n      </span>\n    </div>\n    <img class=\"inline-block width-80 height-80 radius-half\"\n      *ngIf = \"editCoursePlayer.player.photoURL\"\n      [src] = \"editCoursePlayer.player.photoURL\"\n      [title] = \"editCoursePlayer.player.name\"\n    />\n    \n    <div class=\"flex-wrap\">\n      <a\n        class=\"text-white bg-energized block pad flex-1\"\n        (click)=\"resetCoursePlayer(editCoursePlayer);editCoursePlayer=null\"\n      >reset all scores</a>\n      <a\n        class=\"text-white bg-assertive block pad flex-1\"\n        (click)=\"deleteCourseRoundPlayer(editCoursePlayer);editCoursePlayer=null\"\n      >remove from course</a>    \n    </div>\n\n  </div>\n</ack-modal>\n\n<table cellPadding=\"0\" cellSpacing=\"0\" border=\"0\" class=\"width-full height-full bg-white\">\n  <tHead>\n    <tr>\n      <th class=\"text-right bg-warning text-black pad-xs\" *ngIf=\"appUserInGame===false\">\n        <a class=\"text-smx bg-balanced inline-block pad-xxs radius-5 pad-h\" (click)=\"joinAppUser()\">join game</a>\n      </th>\n    </tr>\n  </tHead>\n  <tr>\n    <td class=\"height-full width-full\">\n      <div class=\"pos-rel height-full width-full\">\n        <div class=\"pos-abs height-full width-full overflow-x\">\n          <table class=\"table-striped-success table-lines\" id=\"app\" cellPadding=\"10\" cellSpacing=\"0\" border=\"1\" style=\"width:100%;height:100%\">\n            <tHead>\n              <tr class=\"bg-green text-white\">\n                <th class=\"text-right\">HOLE</th>\n                <ng-container *ngFor=\"let p of course && course.holes;let index = index\">\n                  <th>{{index+1}}</th>\n                  <th class=\"bg-info border-0 text-black\" *ngIf=\"index===course.halfIndex\">HALF</th>\n                </ng-container>\n                <th class=\"bg-info border-0 text-black\">TOTAL</th>\n              </tr>\n              <tr class=\"bg-royal text-white text-sm\">\n                <th class=\"text-right\">MACHINE</th>\n                <ng-container *ngFor=\"let p of course && course.holes;let index = index\">\n                  <th>{{p.machine.name}}</th>\n                  <th class=\"bg-info border-0\" *ngIf=\"index===course.halfIndex\"></th>\n                </ng-container>\n                <th class=\"bg-info border-0\"></th>\n              </tr>\n              <tr class=\"bg-blue text-white\" *ngFor=\"let parType of course && course.parTypes; let last = last\" [class.text-xs]=\"!last\">\n                <th class=\"text-right\">{{parType.name}} SCORE</th>\n                <ng-container *ngFor=\"let p of course.holes;let index = index\">\n                  <th>\n                    {{p.pars[parType.uuid].score | number}}\n                  </th>\n                  <th class=\"bg-info border-0\" *ngIf=\"index===course.halfIndex\"></th>\n                </ng-container>\n                <th class=\"bg-info border-0\"></th>\n              </tr>\n            </tHead>\n            <tBody>\n              <ng-container *ngFor=\"let player of course && course.players;let rowIndex=index\">\n                <tr>\n                  <td\n                    class=\"text-right\"\n                    (click)=\"(AppData.user.uid === player.playerId || roundEditor) && editCoursePlayer=player\"\n                    [class.cursor-pointer] = \"AppData.user.uid === player.playerId || roundEditor\"\n                  >\n                    <div class=\"text-right\">\n                      <img class=\"inline-block width-40 height-40 radius-half\"\n                        *ngIf = \"player.player.photoURL\"\n                        [src] = \"player.player.photoURL\"\n                        [title] = \"player.player.name\"\n                      />\n                    </div>\n                    <span [title]=\"player.playerId\">{{player.player.name}}</span>\n                    <div class=\"text-xs opacity-half\">({{player.parType.name}})</div>\n                  </td>\n                  <ng-container *ngFor=\"let hole of course.holes;let index = index\">\n                    <th>\n                      <div\n                        class=\"width-full height-full flex-valign-center flex-center\"\n                        (click)=\"(AppData.user.uid === player.playerId || roundEditor) && editPlayerHole={playerHoleScore:hole.players[player.playerId], coursePlayer:player, hole:hole}\"\n                        [class.cursor-pointer] = \"AppData.user.uid === player.playerId || roundEditor\"\n                      >\n                        <div>              \n                          {{hole.players[player.playerId].balls}}\n                          <div *ngIf=\"hole.players[player.playerId].balls\">\n                            <span style=\"font-size:4em;\" *ngFor=\"let item of 's'.repeat(hole.players[player.playerId].balls-1).split('s')\">&bull;</span>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"pos-rel\">\n                        <div class=\"pos-abs bottom-0 width-full\">\n                          <div *ngIf=\"hole.players[player.playerId].balls\" class=\"text-smx opacity-half cursor-pointer\">\n                            <span *ngIf=\"hole.players[player.playerId].balls > hole.par\">\n                              + {{hole.players[player.playerId].balls - hole.par}}\n                            </span>\n                            <span *ngIf=\"hole.players[player.playerId].balls < hole.par\">\n                              - {{hole.par - hole.players[player.playerId].balls}}\n                            </span>\n                            <span *ngIf=\"hole.players[player.playerId].balls == hole.par\">par</span>\n                          </div>\n                        </div>\n                      </div>\n                    </th>\n                    <th class=\"bg-info border-0\" *ngIf=\"index===course.halfIndex\">\n                      <div class=\"flex-stacked flex-valign-center height-full\" *ngIf=\"player.totalStats.sum\">\n                        <div class=\"flex-1 flex-valign-center\">\n                          {{player.halfStats.sum}}\n                        </div>\n                        <div class=\"text-smx opacity-half\">\n                          {{course.halfPar - player.halfStats.sum}}\n                          <span *ngIf=\"course.halfPar < player.halfStats.sum\">over</span>\n                          <span *ngIf=\"course.halfPar > player.halfStats.sum\">under</span>\n                          par\n                        </div>\n                      </div>\n                    </th>\n                  </ng-container>\n                  <th class=\"bg-info border-0\">\n                    <div class=\"flex-stacked flex-valign-center height-full\" *ngIf=\"player.totalStats.sum\">\n                      <div class=\"flex-1 flex-valign-center\">\n                        {{player.totalStats.sum}}\n                      </div>\n                      <div class=\"text-smx opacity-half\">\n                        {{course.totalPar - player.totalStats.sum}}\n                        <span *ngIf=\"course.totalPar < player.totalStats.sum\">over</span>\n                        <span *ngIf=\"course.totalPar > player.totalStats.sum\">under</span>\n                        par\n                      </div>\n                    </div>\n                  </th>\n                </tr>\n              </ng-container>\n            </tBody>\n            <tFoot>\n              <tr class=\"bg-blue text-white\">\n                <th class=\"text-right\">PAR</th>\n                <ng-container *ngFor=\"let p of course && course.holes;let index = index\">\n                  <th>{{p.par}}</th>\n                  <th class=\"bg-info border-0 text-dark\" *ngIf=\"index===course.halfIndex\">{{course.halfPar}}</th>\n                </ng-container>\n                <th class=\"bg-info border-0 text-dark\">{{course && course.totalPar}}</th>\n              </tr>\n            </tFoot>\n          </table>\n        </div>\n      </div>\n    </td>\n  </tr>\n</table>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main.component.html": 
        /*!*******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main.component.html ***!
          \*******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!--[(email)] = \"FamilyApp.AppData.offline.user.email\"-->\n<div class=\"height-full width-full flex-valign-center flex-center\">\n  <div *ngIf=\"AppData.user; else loginArea\">\n    <div class=\"flex-center flex-stacked child-margin child-pad\">\n      <a class=\"bg-calm flex-1\" [routerLink]=\"'/score-card'\">Score Card</a>\n      <!---\n      <a class=\"bg-calm flex-1\" [routerLink]=\"'/score-card'\">Your Score</a>\n      -->\n      <a class=\"bg-darl text-white flex-1\" (click)=\"AppData.logout()\">Logout</a>\n    </div>\n  </div>\n\n  <ng-template #loginArea=\"\">\n    <firebase-ui></firebase-ui>\n    <!--<ack-fire-login-form></ack-fire-login-form>-->\n  </ng-template>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/AppData.class.ts": 
        /*!**********************************!*\
          !*** ./src/app/AppData.class.ts ***!
          \**********************************/
        /*! exports provided: AppData */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppData", function () { return AppData; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var ack_angular_fire__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ack-angular-fire */ "./node_modules/ack-angular-fire/dist/index.js");
            /* harmony import */ var ack_angular_fire__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(ack_angular_fire__WEBPACK_IMPORTED_MODULE_4__);
            /* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./db */ "./src/app/db.ts");
            var AppData = /** @class */ (function () {
                function AppData(db, Router, FireUser) {
                    var _this = this;
                    this.db = db;
                    this.Router = Router;
                    this.FireUser = FireUser;
                    this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
                    this.load = new Promise(function (res, rej) {
                        _this.initResolver = res;
                    });
                    this.subs.add(this.FireUser.login.subscribe(function (user) {
                        _this.user = user;
                        console.log("user", user);
                        // TIP: must come before loadPlayer to prevent never ending loop of updates      
                        _this.updatePlayerByUser(_this.user);
                        _this.subs.add(_this.db.loadPlayer(_this.user.uid).subscribe(function (player) {
                            _this.player = player;
                        }));
                        _this.resolveInit();
                    }))
                        .add(this.FireUser.logout.subscribe(function (user) {
                        delete _this.user;
                        _this.logout();
                        _this.resolveInit();
                    }));
                }
                AppData.prototype.ngOnDestroy = function () {
                    this.subs.unsubscribe();
                };
                AppData.prototype.resolveInit = function () {
                    if (this.initResolver) {
                        this.initResolver();
                        delete this.initResolver;
                    }
                };
                AppData.prototype.logout = function () {
                    this.Router.navigate(["/"]);
                    this.FireUser.logoutNow();
                };
                AppData.prototype.updatePlayerByUser = function (user) {
                    var _this = this;
                    var sub = this.db.loadPlayer(this.user.uid).subscribe(function (player) {
                        sub.unsubscribe();
                        var up = _this.db.userToPlayer(_this.user);
                        _this.player = Object.assign({}, player, up);
                        _this.db.savePlayer(_this.player); // updated save data
                    });
                };
                return AppData;
            }());
            AppData.ctorParameters = function () { return [
                { type: _db__WEBPACK_IMPORTED_MODULE_5__["db"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: ack_angular_fire__WEBPACK_IMPORTED_MODULE_4__["FireUser"] }
            ]; };
            AppData = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])()
            ], AppData);
            /***/ 
        }),
        /***/ "./src/app/app.component.scss": 
        /*!************************************!*\
          !*** ./src/app/app.component.scss ***!
          \************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _AppData_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppData.class */ "./src/app/AppData.class.ts");
            /* harmony import */ var ack_angular_fx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ack-angular-fx */ "./node_modules/ack-angular-fx/dist/index.js");
            /* harmony import */ var ack_angular_fx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(ack_angular_fx__WEBPACK_IMPORTED_MODULE_3__);
            var AppComponent = /** @class */ (function () {
                function AppComponent(AppData) {
                    this.AppData = AppData;
                }
                return AppComponent;
            }());
            AppComponent.ctorParameters = function () { return [
                { type: _AppData_class__WEBPACK_IMPORTED_MODULE_2__["AppData"] }
            ]; };
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    animations: ack_angular_fx__WEBPACK_IMPORTED_MODULE_3__["animations"],
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
            /* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
            /* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
            /* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");
            /* harmony import */ var firebaseui_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! firebaseui-angular */ "./node_modules/firebaseui-angular/fesm2015/firebaseui-angular.js");
            /* harmony import */ var ack_angular_AckModule__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ack-angular/AckModule */ "./node_modules/ack-angular/AckModule.js");
            /* harmony import */ var ack_angular_AckModule__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/ __webpack_require__.n(ack_angular_AckModule__WEBPACK_IMPORTED_MODULE_11__);
            /* harmony import */ var ack_angular_fire__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ack-angular-fire */ "./node_modules/ack-angular-fire/dist/index.js");
            /* harmony import */ var ack_angular_fire__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/ __webpack_require__.n(ack_angular_fire__WEBPACK_IMPORTED_MODULE_12__);
            /* harmony import */ var ack_angular_fx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ack-angular-fx */ "./node_modules/ack-angular-fx/dist/index.js");
            /* harmony import */ var ack_angular_fx__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/ __webpack_require__.n(ack_angular_fx__WEBPACK_IMPORTED_MODULE_13__);
            /* harmony import */ var ack_angular_modules_router_AckRouterModule__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ack-angular/modules/router/AckRouterModule */ "./node_modules/ack-angular/modules/router/AckRouterModule.js");
            /* harmony import */ var ack_angular_modules_router_AckRouterModule__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/ __webpack_require__.n(ack_angular_modules_router_AckRouterModule__WEBPACK_IMPORTED_MODULE_14__);
            /* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./db */ "./src/app/db.ts");
            /* harmony import */ var _firebaseConfig__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./firebaseConfig */ "./src/app/firebaseConfig.ts");
            /* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
            /* harmony import */ var _AppData_class__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./AppData.class */ "./src/app/AppData.class.ts");
            /* harmony import */ var _firebaseUiAuthConfig__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./firebaseUiAuthConfig */ "./src/app/firebaseUiAuthConfig.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _app_routing__WEBPACK_IMPORTED_MODULE_17__["AppRoutingModule"],
                        ack_angular_fire__WEBPACK_IMPORTED_MODULE_12__["Module"],
                        ack_angular_fx__WEBPACK_IMPORTED_MODULE_13__["AckFxModule"],
                        ack_angular_AckModule__WEBPACK_IMPORTED_MODULE_11__["AckModule"].forRoot(),
                        ack_angular_modules_router_AckRouterModule__WEBPACK_IMPORTED_MODULE_14__["AckRouterModule"].forRoot(),
                        _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(_firebaseConfig__WEBPACK_IMPORTED_MODULE_16__["firebaseConfig"], 'ackerapple'),
                        firebaseui_angular__WEBPACK_IMPORTED_MODULE_10__["FirebaseUIModule"].forRoot(_firebaseUiAuthConfig__WEBPACK_IMPORTED_MODULE_19__["firebaseUiAuthConfig"]),
                        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuthModule"],
                        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestoreModule"].enablePersistence(),
                        _angular_fire_storage__WEBPACK_IMPORTED_MODULE_9__["AngularFireStorageModule"]
                    ],
                    providers: [_db__WEBPACK_IMPORTED_MODULE_15__["db"], _AppData_class__WEBPACK_IMPORTED_MODULE_18__["AppData"]],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/app.routing.ts": 
        /*!********************************!*\
          !*** ./src/app/app.routing.ts ***!
          \********************************/
        /*! exports provided: routeConfig, AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routeConfig", function () { return routeConfig; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _firebaseUiAuthConfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./firebaseUiAuthConfig */ "./src/app/firebaseUiAuthConfig.ts");
            /* harmony import */ var firebaseui_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebaseui-angular */ "./node_modules/firebaseui-angular/fesm2015/firebaseui-angular.js");
            /* harmony import */ var ack_angular_fire__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ack-angular-fire */ "./node_modules/ack-angular-fire/dist/index.js");
            /* harmony import */ var ack_angular_fire__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(ack_angular_fire__WEBPACK_IMPORTED_MODULE_9__);
            /* harmony import */ var ack_angular_AckModule__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ack-angular/AckModule */ "./node_modules/ack-angular/AckModule.js");
            /* harmony import */ var ack_angular_AckModule__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/ __webpack_require__.n(ack_angular_AckModule__WEBPACK_IMPORTED_MODULE_10__);
            /* harmony import */ var ack_angular_fx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ack-angular-fx */ "./node_modules/ack-angular-fx/dist/index.js");
            /* harmony import */ var ack_angular_fx__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/ __webpack_require__.n(ack_angular_fx__WEBPACK_IMPORTED_MODULE_11__);
            /* harmony import */ var _declarations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./declarations */ "./src/app/declarations.ts");
            /* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./routes */ "./src/app/routes.ts");
            /* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./db */ "./src/app/db.ts");
            //import { AckRouterModule } from "ack-angular/AckRouterModule"
            var routeConfig = {
                useHash: false //,
                //initialNavigation:true,
                //enableTracing:false
            };
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                        _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                        ack_angular_AckModule__WEBPACK_IMPORTED_MODULE_10__["AckModule"],
                        ack_angular_fire__WEBPACK_IMPORTED_MODULE_9__["Module"],
                        //AckRouterModule,
                        ack_angular_fx__WEBPACK_IMPORTED_MODULE_11__["AckFxModule"],
                        firebaseui_angular__WEBPACK_IMPORTED_MODULE_8__["FirebaseUIModule"].forRoot(_firebaseUiAuthConfig__WEBPACK_IMPORTED_MODULE_7__["firebaseUiAuthConfig"]),
                        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_13__["routes"], routeConfig)
                    ],
                    providers: [_db__WEBPACK_IMPORTED_MODULE_14__["db"]],
                    declarations: _declarations__WEBPACK_IMPORTED_MODULE_12__["declarations"],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/components/ScoreCard/ScoreCard.component.ts": 
        /*!*************************************************************!*\
          !*** ./src/app/components/ScoreCard/ScoreCard.component.ts ***!
          \*************************************************************/
        /*! exports provided: ScoreCard */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreCard", function () { return ScoreCard; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var app_root_marryCourseData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app-root/marryCourseData */ "./src/app/marryCourseData.ts");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var app_root_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app-root/db */ "./src/app/db.ts");
            /* harmony import */ var app_root_AppData_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app-root/AppData.class */ "./src/app/AppData.class.ts");
            var ScoreCard = /** @class */ (function () {
                function ScoreCard(db, AppData) {
                    var _this = this;
                    // displayName: "Acker Apple"
                    // email: "acker.dawn.apple@gmail.com"
                    // uid
                    // photoURL
                    this.db = db;
                    this.AppData = AppData;
                    this.parTypes = [{
                            uuid: "new",
                            name: "Easy"
                        }, {
                            uuid: "pro",
                            name: "Pro"
                        }];
                    this.dbData = {};
                    //courseHalfStats:{[playerId:string]: number} = {}
                    this.courseId = "halloweenBash";
                    this.roundId = "1571494159104";
                    this.AppData.load
                        .then(function () { return _this.createDataSubs(); });
                }
                ScoreCard.prototype.checkAppUserInGame = function () {
                    var _this = this;
                    this.appUserInGame = this.course && this.course.players.find(function (player) { return player.playerId === _this.AppData.user.uid; }) ? true : false;
                };
                ScoreCard.prototype.joinAppUser = function () {
                    var player = this.db.userToPlayer(this.AppData.user);
                    var dbPlayerRound = {
                        player: player,
                        courseId: this.course.uuid,
                        roundId: this.roundId,
                        playerId: this.AppData.user.uid,
                        parTypeId: 'new',
                        holes: []
                    };
                    this.db.saveCourseRoundPlayer(dbPlayerRound);
                };
                ScoreCard.prototype.createDataSubs = function () {
                    var _this = this;
                    this.db.loadCourse(this.courseId).subscribe(function (data) {
                        _this.dbData.course = data;
                        _this.reMarryCourseData();
                    });
                    this.db.loadCourseRoundPlayers(this.courseId, this.roundId).subscribe(function (data) {
                        _this.dbData.courseRoundPlayers = data;
                        _this.reMarryCourseData();
                        _this.checkAppUserInGame();
                        // console.log("courseRoundPlayers", data)
                        var matchedCoursePlayer = data.find(function (player) { return player.playerId === _this.AppData.user.uid; });
                        _this.roundEditor = matchedCoursePlayer && matchedCoursePlayer.roundEditor;
                        _this.checkEditPlayerHole();
                    });
                    this.db.loadMachines().subscribe(function (data) {
                        _this.dbData.machines = data;
                        _this.reMarryCourseData();
                    });
                };
                ScoreCard.prototype.checkEditPlayerHole = function () {
                    var _this = this;
                    if (!this.editPlayerHole || !this.course || !this.course.holes) {
                        return;
                    }
                    var hole = this.course.holes.find(function (hole) { return hole.uuid === _this.editPlayerHole.hole.uuid; });
                    var coursePlayer = this.course.players.find(function (coursePlayer) { return coursePlayer.playerId === _this.editPlayerHole.coursePlayer.playerId; });
                    var playerHoleScore = coursePlayer.holes.find(function (playerScore) { return playerScore.holeId === hole.uuid; });
                    this.editPlayerHole.hole = hole;
                    this.editPlayerHole.coursePlayer = coursePlayer;
                    this.editPlayerHole.playerHoleScore = playerHoleScore;
                };
                ScoreCard.prototype.reMarryCourseData = function () {
                    var _a = this.dbData, course = _a.course, courseRoundPlayers = _a.courseRoundPlayers, machines = _a.machines
                    // , players
                    ;
                    if (course && courseRoundPlayers && machines // && players
                    ) {
                        this.course = Object(app_root_marryCourseData__WEBPACK_IMPORTED_MODULE_1__["marryCourseData"])(course, courseRoundPlayers, machines, []);
                        //console.log(this.course)
                    }
                };
                ScoreCard.prototype.resetCoursePlayer = function (courseRoundPlayer) {
                    var playerId = courseRoundPlayer.playerId;
                    var dbCoursePlayer = this.getDbCourseRoundPlayer(playerId);
                    dbCoursePlayer.holes.length = 0;
                    this.saveCourseRoundPlayer(dbCoursePlayer);
                };
                ScoreCard.prototype.getDbCourseRoundPlayer = function (playerId) {
                    return this.dbData.courseRoundPlayers.find(function (crp) { return crp.playerId === playerId; });
                };
                ScoreCard.prototype.getPlayerRoundMeta = function (playerId) {
                    return this.course.players.find(function (crp) { return crp.playerId === playerId; });
                };
                ScoreCard.prototype.saveCourseRoundPlayer = function (courseRoundPlayer) {
                    var playerId = courseRoundPlayer.playerId;
                    var dbCoursePlayer = this.getDbCourseRoundPlayer(playerId);
                    // data that could be edited
                    dbCoursePlayer.holes = courseRoundPlayer.holes;
                    dbCoursePlayer.parTypeId = courseRoundPlayer.parTypeId;
                    this.db.saveCourseRoundPlayer(dbCoursePlayer);
                };
                ScoreCard.prototype.savePlayerStrokes = function (playerId) {
                    this.saveCourseRoundPlayerById(playerId);
                };
                ScoreCard.prototype.saveCourseRoundPlayerById = function (playerId) {
                    var courseRoundPlayer = this.getPlayerRoundMeta(playerId);
                    this.saveCourseRoundPlayer(courseRoundPlayer);
                };
                ScoreCard.prototype.deleteCourseRoundPlayer = function (courseRoundPlayer) {
                    this.db.deleteCourseRoundPlayer(courseRoundPlayer);
                };
                return ScoreCard;
            }());
            ScoreCard.ctorParameters = function () { return [
                { type: app_root_db__WEBPACK_IMPORTED_MODULE_3__["db"] },
                { type: app_root_AppData_class__WEBPACK_IMPORTED_MODULE_4__["AppData"] }
            ]; };
            ScoreCard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ScoreCard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ScoreCard/ScoreCard.component.html")).default
                })
            ], ScoreCard);
            /***/ 
        }),
        /***/ "./src/app/components/main/main.component.ts": 
        /*!***************************************************!*\
          !*** ./src/app/components/main/main.component.ts ***!
          \***************************************************/
        /*! exports provided: Main */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Main", function () { return Main; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var app_root_AppData_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app-root/AppData.class */ "./src/app/AppData.class.ts");
            var Main = /** @class */ (function () {
                function Main(AppData) {
                    this.AppData = AppData;
                }
                return Main;
            }());
            Main.ctorParameters = function () { return [
                { type: app_root_AppData_class__WEBPACK_IMPORTED_MODULE_2__["AppData"] }
            ]; };
            Main = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main.component.html")).default
                })
            ], Main);
            /***/ 
        }),
        /***/ "./src/app/db.ts": 
        /*!***********************!*\
          !*** ./src/app/db.ts ***!
          \***********************/
        /*! exports provided: db */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "db", function () { return db; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
            /* harmony import */ var ack_angular_fire_dist_joins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ack-angular-fire/dist/joins */ "./node_modules/ack-angular-fire/dist/joins.js");
            /* harmony import */ var ack_angular_fire_dist_joins__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(ack_angular_fire_dist_joins__WEBPACK_IMPORTED_MODULE_3__);
            var db = /** @class */ (function () {
                function db(AngularFirestore) {
                    this.AngularFirestore = AngularFirestore;
                }
                db.prototype.getPinGolf = function () {
                    return this.AngularFirestore.collection("Apps").doc("PinGolf");
                };
                db.prototype.getMachines = function () {
                    return this.getPinGolf().collection("machines");
                };
                db.prototype.getPlayer = function (uid) {
                    return this.getPlayers().doc(uid);
                };
                db.prototype.getPlayers = function () {
                    return this.getPinGolf().collection("players");
                };
                db.prototype.getCourseDoc = function (uid) {
                    return this.getPinGolf().collection("courses").doc(uid);
                };
                db.prototype.getCourseRoundPlayers = function (courseId, roundId) {
                    return this.getPinGolf().collection("coursePlayers").doc(courseId).collection(roundId);
                };
                db.prototype.loadCourse = function (uid) {
                    return this.getCourseDoc(uid).valueChanges();
                };
                db.prototype.loadCourseRoundPlayers = function (courseId, roundId) {
                    var collect = this.getCourseRoundPlayers(courseId, roundId);
                    var vc = collect.valueChanges();
                    return vc.pipe(Object(ack_angular_fire_dist_joins__WEBPACK_IMPORTED_MODULE_3__["leftJoinDocument"])(this.AngularFirestore, 'playerId', 'Apps/PinGolf/players', 'player'));
                };
                db.prototype.loadPlayer = function (uid) {
                    return this.getPlayer(uid).valueChanges();
                };
                /* admin only */
                db.prototype.loadPlayers = function () {
                    return this.getPlayers().valueChanges();
                };
                db.prototype.loadMachines = function () {
                    return this.getMachines().valueChanges();
                };
                db.prototype.saveCourseRoundPlayer = function (coursePlayer) {
                    var courseId = coursePlayer.courseId, roundId = coursePlayer.roundId, playerId = coursePlayer.playerId;
                    return this.getCourseRoundPlayers(courseId, roundId).doc(playerId).set(coursePlayer);
                };
                db.prototype.deleteCourseRoundPlayer = function (coursePlayer) {
                    var courseId = coursePlayer.courseId, roundId = coursePlayer.roundId, playerId = coursePlayer.playerId;
                    return this.getCourseRoundPlayers(courseId, roundId).doc(playerId).delete();
                };
                db.prototype.userToPlayer = function (user) {
                    return {
                        uuid: user.uid,
                        name: (user.displayName || user.email),
                        email: user.email,
                        photoURL: user.photoURL
                    };
                };
                db.prototype.savePlayer = function (player) {
                    return this.getPlayer(player.uuid).set(player);
                };
                db.prototype.saveUserAsPlayer = function (user) {
                    return this.getPlayer(user.uid).set(this.userToPlayer(user));
                };
                return db;
            }());
            db.ctorParameters = function () { return [
                { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
            ]; };
            db = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], db);
            /***/ 
        }),
        /***/ "./src/app/declarations.ts": 
        /*!*********************************!*\
          !*** ./src/app/declarations.ts ***!
          \*********************************/
        /*! exports provided: declarations */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "declarations", function () { return declarations; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/components/main/main.component.ts");
            /* harmony import */ var _components_ScoreCard_ScoreCard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ScoreCard/ScoreCard.component */ "./src/app/components/ScoreCard/ScoreCard.component.ts");
            var declarations = [
                _components_main_main_component__WEBPACK_IMPORTED_MODULE_1__["Main"], _components_ScoreCard_ScoreCard_component__WEBPACK_IMPORTED_MODULE_2__["ScoreCard"]
            ];
            /***/ 
        }),
        /***/ "./src/app/firebaseConfig.ts": 
        /*!***********************************!*\
          !*** ./src/app/firebaseConfig.ts ***!
          \***********************************/
        /*! exports provided: firebaseConfig */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firebaseConfig", function () { return firebaseConfig; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var firebaseConfig = {
                "apiKey": "AIzaSyCBkKZ1Ha84wF5MGwaoin31bwtMbrck6iM",
                "authDomain": "acker-apple.firebaseapp.com",
                "databaseURL": "https://acker-apple.firebaseio.com",
                "projectId": "acker-apple",
                "storageBucket": "acker-apple.appspot.com",
                "messagingSenderId": "600414342075",
                "appId": "1:600414342075:web:2f66c941de722da0"
            };
            /***/ 
        }),
        /***/ "./src/app/firebaseUiAuthConfig.ts": 
        /*!*****************************************!*\
          !*** ./src/app/firebaseUiAuthConfig.ts ***!
          \*****************************************/
        /*! exports provided: firebaseUiAuthConfig */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firebaseUiAuthConfig", function () { return firebaseUiAuthConfig; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var firebaseui_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebaseui-angular */ "./node_modules/firebaseui-angular/fesm2015/firebaseui-angular.js");
            var firebaseUiAuthConfig = {
                signInFlow: 'popup',
                signInOptions: [
                    firebaseui_angular__WEBPACK_IMPORTED_MODULE_1__["firebase"].auth.GoogleAuthProvider.PROVIDER_ID,
                    /*
                    {
                      scopes: [
                        'public_profile',
                        'email',
                        'user_likes',
                        'user_friends'
                      ],
                      customParameters: {
                        'auth_type': 'reauthenticate'
                      },
                      provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID
                    },
                    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
                    firebase.auth.GithubAuthProvider.PROVIDER_ID,
                    */
                    // firebase.auth.PhoneAuthProvider.PROVIDER_ID,
                    //firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
                    {
                        requireDisplayName: false,
                        provider: firebaseui_angular__WEBPACK_IMPORTED_MODULE_1__["firebase"].auth.EmailAuthProvider.PROVIDER_ID
                    }
                ],
                tosUrl: 'https://ackerapple.com/assets/docs/TERMSOFUSE.txt',
                privacyPolicyUrl: 'https://ackerapple.com/assets/docs/app-privacy.txt',
                credentialHelper: firebaseui_angular__WEBPACK_IMPORTED_MODULE_1__["firebaseui"].auth.CredentialHelper.ACCOUNT_CHOOSER_COM
            };
            /***/ 
        }),
        /***/ "./src/app/marryCourseData.ts": 
        /*!************************************!*\
          !*** ./src/app/marryCourseData.ts ***!
          \************************************/
        /*! exports provided: marryCourseData */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "marryCourseData", function () { return marryCourseData; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            function marryCourseData(course, coursePlayers, machines, players) {
                // this function stuck within due to gameCourse.players constraint
                function joinCoursePlayersToHole(coursePlayers, hole) {
                    /* join coursePlayers to holes */
                    var holePlayers = {};
                    //default courseScore for all players
                    coursePlayers.forEach(function (coursePlayer, cpIndex) {
                        var found = false;
                        // param player on hole
                        var holeScore = {
                            holeId: hole.uuid,
                            balls: null
                        };
                        holePlayers[coursePlayer.playerId] = holeScore;
                        // integrate existing scores
                        coursePlayer.holes.forEach(function (playerScore, index) {
                            if (playerScore.holeId === hole.uuid) {
                                holePlayers[coursePlayer.playerId] = playerScore;
                                found = true;
                            }
                        });
                        if (!found) {
                            gameCourse.players[cpIndex].holes.push(holeScore);
                        }
                    });
                    hole.players = holePlayers;
                    /* end */
                }
                var gameCourse = Object.assign({}, course);
                gameCourse.players = coursePlayers.map(function (coursePlayer) { return (Object.assign({ parType: gameCourse.parTypes.find(function (parType) { return coursePlayer.parTypeId == parType.uuid; }), player: players.find(function (p) { return p.uuid === coursePlayer.playerId; }) }, coursePlayer)); });
                gameCourse.halfIndex = Math.floor((gameCourse.holes.length - 1) / 2);
                gameCourse.halfPar = 0;
                gameCourse.totalPar = 0;
                gameCourse.holes = gameCourse.holes.map(function (hole, holeIndex) {
                    /* course par totals */
                    gameCourse.totalPar = gameCourse.totalPar + hole.par;
                    if (holeIndex <= gameCourse.halfIndex) {
                        gameCourse.halfPar = gameCourse.halfPar + hole.par;
                    }
                    /* end */
                    var holeClone = Object.assign({ machine: machines.find(function (machine) { return machine.uuid === hole.machineId; }) }, hole);
                    joinCoursePlayersToHole(coursePlayers, holeClone);
                    var _loop_1 = function (mPar) {
                        holeClone.pars[mPar].parType = gameCourse.parTypes.find(function (parType) { return parType.uuid === mPar; });
                    };
                    // add parType to pars
                    for (var mPar in hole.pars) {
                        _loop_1(mPar);
                    }
                    return holeClone;
                });
                gameCourse.players.forEach(function (player) {
                    var halfSum = 0;
                    for (var x = 0; x <= gameCourse.halfIndex; ++x) {
                        var hole = gameCourse.holes[x];
                        halfSum = halfSum + (hole.players[player.playerId] && hole.players[player.playerId].balls || 0);
                    }
                    var fullSum = halfSum;
                    for (var x = gameCourse.halfIndex + 1; x <= gameCourse.holes.length - 1; ++x) {
                        var hole = gameCourse.holes[x];
                        fullSum = fullSum + (hole.players[player.playerId] && hole.players[player.playerId].balls || 0);
                    }
                    player.halfStats = { sum: halfSum };
                    player.totalStats = { sum: fullSum };
                });
                return gameCourse;
            }
            /***/ 
        }),
        /***/ "./src/app/routes.ts": 
        /*!***************************!*\
          !*** ./src/app/routes.ts ***!
          \***************************/
        /*! exports provided: routes */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function () { return routes; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/components/main/main.component.ts");
            /* harmony import */ var _components_ScoreCard_ScoreCard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ScoreCard/ScoreCard.component */ "./src/app/components/ScoreCard/ScoreCard.component.ts");
            var routes = [{
                    path: '',
                    data: { back: false, title: "PinGolf by Acker" },
                    component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_1__["Main"]
                }, {
                    path: 'score-card',
                    data: { back: true, title: "Score Card" },
                    component: _components_ScoreCard_ScoreCard_component__WEBPACK_IMPORTED_MODULE_2__["ScoreCard"]
                }];
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! /Users/acker/Projects/PinGolf/angular-app/src/main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map