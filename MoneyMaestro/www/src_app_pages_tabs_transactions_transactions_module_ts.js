"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tabs_transactions_transactions_module_ts"],{

/***/ 7973:
/*!************************************************************************!*\
  !*** ./src/app/pages/tabs/transactions/transactions-routing.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransactionsPageRoutingModule": () => (/* binding */ TransactionsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _transactions_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transactions.page */ 9934);




const routes = [
    {
        path: '',
        component: _transactions_page__WEBPACK_IMPORTED_MODULE_0__.TransactionsPage
    }
];
let TransactionsPageRoutingModule = class TransactionsPageRoutingModule {
};
TransactionsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TransactionsPageRoutingModule);



/***/ }),

/***/ 9122:
/*!****************************************************************!*\
  !*** ./src/app/pages/tabs/transactions/transactions.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransactionsPageModule": () => (/* binding */ TransactionsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _transactions_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transactions-routing.module */ 7973);
/* harmony import */ var _transactions_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transactions.page */ 9934);







let TransactionsPageModule = class TransactionsPageModule {
};
TransactionsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _transactions_routing_module__WEBPACK_IMPORTED_MODULE_0__.TransactionsPageRoutingModule
        ],
        declarations: [_transactions_page__WEBPACK_IMPORTED_MODULE_1__.TransactionsPage]
    })
], TransactionsPageModule);



/***/ }),

/***/ 9934:
/*!**************************************************************!*\
  !*** ./src/app/pages/tabs/transactions/transactions.page.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransactionsPage": () => (/* binding */ TransactionsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _transactions_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transactions.page.html?ngResource */ 9863);
/* harmony import */ var _transactions_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transactions.page.scss?ngResource */ 1515);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let TransactionsPage = class TransactionsPage {
    constructor() {
        this.allTransactions = [];
        this.transactions = [];
        this.segmentValue = 'in';
    }
    ngOnInit() {
        this.allTransactions = [
            { id: 1, to: 'Piyush Ag.', date: '2022-05-22', amount: 5000 },
            { id: 2, to: 'Avinash', date: '2022-03-02', amount: 7000 },
            { id: 3, to: 'Catherine', date: '2022-07-28', amount: -3250 },
            { id: 4, to: 'Akhil Ag.', date: '2022-01-09', amount: 1000 },
            { id: 5, to: 'Prem Ag.', date: '2022-04-13', amount: -800 },
        ];
        this.filterTransactions();
    }
    filterTransactions() {
        if (this.segmentValue == 'in') {
            this.transactions = this.allTransactions.filter(x => x.amount >= 0);
        }
        else {
            this.transactions = this.allTransactions.filter(x => x.amount < 0);
        }
    }
    segmentChanged(event) {
        console.log(event);
        this.segmentValue = event.detail.value;
        this.filterTransactions();
    }
};
TransactionsPage.ctorParameters = () => [];
TransactionsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-transactions',
        template: _transactions_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_transactions_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TransactionsPage);



/***/ }),

/***/ 1515:
/*!***************************************************************************!*\
  !*** ./src/app/pages/tabs/transactions/transactions.page.scss?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = ".md ion-segment {\n  width: 60%;\n  margin: auto;\n}\n\nion-header ion-toolbar {\n  --background: var(--ion-color-secondary);\n}\n\nion-header ion-toolbar ion-segment {\n  --background: var(--ion-color-primary);\n}\n\nion-header ion-toolbar ion-segment ion-segment-button {\n  --color: var(--ion-color-white);\n  --color-checked: var(--ion-color-primary);\n}\n\nion-content ion-list {\n  margin-top: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zYWN0aW9ucy5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXElOR0UlMjA0XFxTRU0lMjAxXFxNT0JJTEUlMjBERVZFTE9QTUVOVFxcU2VtZXN0ZXJfUHJvamVjdFxcLWlzaTQtZGV2LW1vYmlsZS0tZ3A2LXRoZW1lMi1Nb25leU1hZXN0cm9cXE1vbmV5TWFlc3Ryb1xcc3JjXFxhcHBcXHBhZ2VzXFx0YWJzXFx0cmFuc2FjdGlvbnNcXHRyYW5zYWN0aW9ucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxVQUFBO0VBQ0EsWUFBQTtBQ0FSOztBREtJO0VBQ0ksd0NBQUE7QUNGUjs7QURHUTtFQUNJLHNDQUFBO0FDRFo7O0FERVk7RUFDSSwrQkFBQTtFQUNBLHlDQUFBO0FDQWhCOztBRE9JO0VBQ0ksZ0JBQUE7QUNKUiIsImZpbGUiOiJ0cmFuc2FjdGlvbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1kIHtcclxuICAgIGlvbi1zZWdtZW50IHtcclxuICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH1cclxufVxyXG5cclxuaW9uLWhlYWRlciB7XHJcbiAgICBpb24tdG9vbGJhciB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgICBpb24tc2VnbWVudCB7XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgICAgICBpb24tc2VnbWVudC1idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuICAgICAgICAgICAgICAgIC0tY29sb3ItY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgICBpb24tbGlzdCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICAgIH1cclxufSIsIi5tZCBpb24tc2VnbWVudCB7XG4gIHdpZHRoOiA2MCU7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuaW9uLWhlYWRlciBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi1zZWdtZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG4gIC0tY29sb3ItY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tY29udGVudCBpb24tbGlzdCB7XG4gIG1hcmdpbi10b3A6IDJyZW07XG59Il19 */";

/***/ }),

/***/ 9863:
/*!***************************************************************************!*\
  !*** ./src/app/pages/tabs/transactions/transactions.page.html?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\" translucent>\r\n  <ion-toolbar>\r\n    <ion-title color=\"primary\" mode=\"ios\">Transactions</ion-title>\r\n  </ion-toolbar>\r\n  <ion-toolbar>\r\n    <ion-segment mode=\"ios\" [value]=\"segmentValue\" (ionChange)=\"segmentChanged($event)\">\r\n      <ion-segment-button value=\"in\">\r\n        <ion-label>In-flow</ion-label>\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"out\">\r\n        <ion-label>Out-flow</ion-label>\r\n      </ion-segment-button>\r\n    </ion-segment>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content color=\"secondary\" fullscreen>\r\n\r\n  <ion-list class=\"transactions\" *ngIf=\"transactions?.length > 0\">\r\n    <ion-item-group>\r\n      <ion-item lines=\"full\" *ngFor=\"let transaction of transactions\">\r\n        <ion-thumbnail slot=\"start\" class=\"ion-text-center\">\r\n          <img [src]=\"'assets/imgs/' + (transaction?.amount >= 0 ? 'up-right.png' : 'down-left-arrow.png')\" />\r\n        </ion-thumbnail>\r\n        <ion-label>\r\n          <ion-text color=\"primary\">{{transaction?.to}}</ion-text>\r\n          <p>\r\n            <ion-text>\r\n              {{transaction?.date | date: 'MMM d, y'}}\r\n            </ion-text>\r\n          </p>\r\n        </ion-label>\r\n        <ion-text slot=\"end\" color=\"primary\">\r\n          {{transaction?.amount >= 0 ? '₹' + transaction?.amount : '-₹' + (transaction?.amount * (-1))}}\r\n        </ion-text>\r\n      </ion-item>\r\n    </ion-item-group>\r\n  </ion-list>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tabs_transactions_transactions_module_ts.js.map