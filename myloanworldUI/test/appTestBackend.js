var testApp = angular.module('myappTestBackend', ['myapp', 'ngMockE2E']);

testApp.run(['$httpBackend', function ($httpBackend) {
    //$httpBackend.whenGET(new RegExp('app\/albums\/albums.html')).passThrough();
    $httpBackend.whenGET(new RegExp('api\/getApplicationType')).respond(function (method, url) {
        console.log("application Types picked from test Backend");
        var request = new XMLHttpRequest();
        request.open('GET', 'test/applicationType.js', false);
        request.send(null);
        return [200, request.response, {}];
    });

    $httpBackend.whenGET(new RegExp('api\/validatePassword')).respond(function (method, url) {
        console.log("validatePassword from backend.");
        var request = new XMLHttpRequest();
        request.open('GET', 'test/user-profile.js', false);
        request.send(null);
        //request.response = {"userName": "Manya", "age": 9,"address":"U 106 81 King William Street"};
        return [200, request.response, {}];
    });

    $httpBackend.whenGET(new RegExp('api\/getAfterLoginMenus')).respond(function (method, url) {
        console.log("getAfterLoginMenus from backend.");
        var request = new XMLHttpRequest();
        request.open('GET', 'test/afterLoginMenu.js', false);
        request.send(null);
        return [200, request.response, {}];
    });

    $httpBackend.whenGET(new RegExp('api\/getAllApplications')).respond(function (method, url) {
        console.log("get All Applications from backend.");
        var request = new XMLHttpRequest();
        request.open('GET', 'test/applications.js', false);
        request.send(null);
        return [200, request.response, {}];
    });
    //
    $httpBackend.whenGET(new RegExp('app\/.*')).passThrough();
}]);