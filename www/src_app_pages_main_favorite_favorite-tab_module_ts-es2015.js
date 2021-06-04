(self["webpackChunkspotify_test"] = self["webpackChunkspotify_test"] || []).push([["src_app_pages_main_favorite_favorite-tab_module_ts"],{

/***/ 32351:
/*!********************************************************************!*\
  !*** ./src/app/pages/main/favorite/favorite-tab-routing.module.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavoriteTabPageRoutingModule": function() { return /* binding */ FavoriteTabPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _favorite_tab_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favorite-tab.page */ 83224);




const routes = [
    {
        path: '',
        component: _favorite_tab_page__WEBPACK_IMPORTED_MODULE_0__.FavoriteTabPage,
    }
];
let FavoriteTabPageRoutingModule = class FavoriteTabPageRoutingModule {
};
FavoriteTabPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], FavoriteTabPageRoutingModule);



/***/ }),

/***/ 2271:
/*!************************************************************!*\
  !*** ./src/app/pages/main/favorite/favorite-tab.module.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavoriteTabPageModule": function() { return /* binding */ FavoriteTabPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _favorite_tab_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favorite-tab.page */ 83224);
/* harmony import */ var _favorite_tab_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favorite-tab-routing.module */ 32351);
/* harmony import */ var src_app_components_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/component.module */ 78443);
/* harmony import */ var src_app_components_molecules_list_list_molecule_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/molecules/list/list.molecule.component */ 50905);









let FavoriteTabPageModule = class FavoriteTabPageModule {
};
FavoriteTabPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            src_app_components_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
            _favorite_tab_routing_module__WEBPACK_IMPORTED_MODULE_1__.FavoriteTabPageRoutingModule
        ],
        entryComponents: [src_app_components_molecules_list_list_molecule_component__WEBPACK_IMPORTED_MODULE_3__.ListMolecule],
        declarations: [_favorite_tab_page__WEBPACK_IMPORTED_MODULE_0__.FavoriteTabPage]
    })
], FavoriteTabPageModule);



/***/ }),

/***/ 83224:
/*!**********************************************************!*\
  !*** ./src/app/pages/main/favorite/favorite-tab.page.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavoriteTabPage": function() { return /* binding */ FavoriteTabPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_favorite_tab_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./favorite-tab.page.html */ 98357);
/* harmony import */ var _favorite_tab_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favorite-tab.page.scss */ 27980);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let FavoriteTabPage = class FavoriteTabPage {
    constructor() {
        this.title = "Favorite";
        this.listData = [];
    }
    ngOnInit() {
        console.log('Favorite component.');
    }
};
FavoriteTabPage.ctorParameters = () => [];
FavoriteTabPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-favorite-tab',
        template: _raw_loader_favorite_tab_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_favorite_tab_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FavoriteTabPage);



/***/ }),

/***/ 27980:
/*!************************************************************!*\
  !*** ./src/app/pages/main/favorite/favorite-tab.page.scss ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYXZvcml0ZS10YWIucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 98357:
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/main/favorite/favorite-tab.page.html ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header [title]=\"'title'\"></app-header>\n<ion-content>\n  <ion-content class=\"ion-padding\">\n    Hola mundo\n   <app-list></app-list>\n  </ion-content>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_main_favorite_favorite-tab_module_ts-es2015.js.map