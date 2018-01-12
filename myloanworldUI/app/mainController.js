(function () {
    var myapp = angular.module('myapp', ['ui.router', 'ui.bootstrap']);

myapp.config(function ($stateProvider, $urlRouterProvider, $rootScopeProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        // HOME STATES AND NESTED VIEWS ========================================
        .state('personalloan', {
            url: '/personal',
            templateUrl: 'app/pages/personal.html' // This needs to serve from localhost otherwise it will give you access error.
        })
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('homeloan', {
            url: '/home-loan',
            templateUrl: 'app/pages/home-loan.html'
        })
        .state('educationloan', {
            url: '/education',
            templateUrl: 'app/pages/education.html'
        })
        .state('autoloan', {
            url: '/auto',
            templateUrl: 'app/pages/auto.html'
        })
        .state('businessloan', {
            url: '/business',
            templateUrl: 'app/pages/business.html'
        })
        // top links
        .state('home', {
            url: '/home',
            templateUrl: 'app/pages/home.html'
        })
        .state('aboutUs', {
            url: '/AboutUs',
            templateUrl: 'app/pages/about-us.html'
        })
        .state('team', {
            url: '/team',
            templateUrl: 'app/pages/teamDetail.html'
        })
        .state('applyNow', {
            url: '/apply-now ? loanAmt',
            templateUrl: 'app/pages/apply-now.html'
        })
    $urlRouterProvider.when('', 'home');
   $urlRouterProvider.when('#!/', '/home');
});

myapp.controller('mainController', function ($state) {
    var vm = this;
    vm.commentry = "na hum badmass hai. na hum tao ko piche hatate." +
        "saath main bula ke nache.aisa koi field nahi jaha hum na ho.Chaye wo hawai jahaz udana ho ya phir engineering ya phir sports." +
        "ladkiyo hum maarte nahi, log badnaam karte hai.";
})
})();