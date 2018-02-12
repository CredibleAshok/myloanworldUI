(function () {
    var myapp = angular.module('myapp', ['ui.router', 'ui.bootstrap', 'ngSanitize', 'ui.select']);

    myapp.config(function ($stateProvider, $urlRouterProvider, $rootScopeProvider) {
        $urlRouterProvider.otherwise('/home');
        $stateProvider
            // HOME STATES AND NESTED VIEWS ========================================
            .state('personalloan', {
                url: '/personal',
                templateUrl: 'app/pages/personal.html',  // This needs to serve from localhost otherwise it will give you access error.
                data: {
                    "managementScreen": false
                }
            })
            // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
            .state('homeloan', {
                url: '/home-loan',
                templateUrl: 'app/pages/home-loan.html',
                data: {
                    "managementScreen": false
                }
            })
            .state('educationloan', {
                url: '/education',
                templateUrl: 'app/pages/education.html',
                data: {
                    "managementScreen": false
                }
            })
            .state('autoloan', {
                url: '/auto',
                templateUrl: 'app/pages/auto.html',
                data: {
                    "managementScreen": false
                }
            })
            .state('businessloan', {
                url: '/business',
                templateUrl: 'app/pages/business.html',
                data: {
                    "managementScreen": false
                }
            })
            // top links
            .state('home', {
                url: '/home',
                templateUrl: 'app/pages/home.html',
                data: {
                    "managementScreen": false
                }
            })
            .state('aboutUs', {
                url: '/AboutUs',
                templateUrl: 'app/pages/about-us.html',
                data: {
                    "managementScreen": false
                }
            })
            .state('team', {
                url: '/team',
                templateUrl: 'app/pages/teamDetail.html',
                data: {
                    "managementScreen": false
                }
            })
            .state('applyNow', {
                url: '/apply-now ? loanAmt',
                templateUrl: 'app/pages/apply-now.html',
                data: {
                    "managementScreen": false
                }
            })
            .state('profile', {
                url: '/profile',
                templateUrl: 'app/pages/Profile.html',
                data: {
                    "managementScreen": true
                }
            })
            .state('allApplications', {
                url: '/all-applications',
                templateUrl: 'app/pages/all-applications.html',
                data: {
                    "managementScreen": true
                }
            })
            .state('logOff', {
                url: '/',
                templateUrl: 'app/pages/home.html',
                data: {
                    "managementScreen": false
                }
            })
            .state('unauthorisedAccess', {
                url: '/',
                templateUrl: 'app/pages/unauthorised-access.html',
                data: {
                    "managementScreen": false
                }
            })
            .state('enquiries', {
                url: '/enquiries',
                templateUrl: 'app/pages/enquiry.html',
                data: {
                    "managementScreen": true
                }
            })
            .state('createPassword', {
                url: '/create-password',
                templateUrl: 'app/pages/create-password.html',
                data: {
                    "managementScreen": false
                }
            })
            .state('forgotPassword', {
                url: '/forgot-password',
                templateUrl: 'app/pages/create-password.html',
                data: {
                    "managementScreen": false
                }
            })
            .state('applicationHistory', {
                url: '/applicationHistory:applicationId',
                templateUrl: 'app/pages/application-history.html',
                data: {
                    "managementScreen": true
                }
            })
            .state('knowYourCustomer', {
                url: '/kyc/:fname/:contactNumber/:enquiryId',
                templateUrl: 'app/pages/KYC-details.html',
                data: {
                    "managementScreen": true
                }
            })
        //
        
        $urlRouterProvider.when('', 'home');
        $urlRouterProvider.when('#!/', '/home');
    });

    myapp.controller('mainController', function ($scope, $rootScope, $state, authenticationService) {
        var vm = this;
        vm.commentry = "na hum badmass hai. na hum tao ko piche hatate." +
            "saath main bula ke nache.aisa koi field nahi jaha hum na ho.Chaye wo hawai jahaz udana ho ya phir engineering ya phir sports." +
            "ladkiyo hum maarte nahi, log badnaam karte hai.";
        var checkUrl = $scope.$on('$locationChangeStart', function () {
            if ($state.$current.self.name =='logOff') {
                authenticationService.setLogOffUser();
                $rootScope.$broadcast('noManagementMenus');
                $state.go('home');
            }
            if ($state.$current.data != undefined && $state.$current.data.managementScreen) {
                if (!authenticationService.isUserLoggedIn()) { //if user is not logged in
                    $state.go('unauthorisedAccess');    
                }
            }
        });
        $scope.$on('$destroy', function () {
            checkUrl();
        });
    })
})();