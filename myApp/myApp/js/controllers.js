var myController = angular.module('myController', ['angularModalService']);


//projectsController
myController.controller('projectsController', function($scope,ModalService,$rootScope, $location, $http) {
     
     $scope.specificProject = [];

    $http.get("data/projects.json").then(function(response) { //ajax call
        console.log("Success" + response);
        if(response.data){
            $scope.mydetails = response.data;
        }else{
            $scope.mydetails = response;
        }
        console.log($scope.mydetails);
        $scope.showDetails();
    }, function errorCallback(response) {
        alert("Status :" + response.statusText);
    });




    
	    	





    $scope.showDetails = function() {
        
        for (var i = 0; i < $scope.mydetails.length; i++) {
            $scope.specificProject.push($scope.mydetails[i])
        }

    }



    // console.log($scope.specificProject)	;
    //Insert each entry from a loop, using push function
    $scope.start = function() {
        console.log("In start");
        if ($scope.name == undefined || $scope.projectId == undefined) {
            alert("Please fill the required fields and try again.Thank you");
        } else {


            var newProject = function(projectId, name, projectDescription) {
                this.projectId = projectId;
                this.name = name;
                this.projectDescription = projectDescription;
            }
            // use constructor/prototype to initialize the new project object property

            //instantiate the new project object and push it into specificProject[]
            var project = new newProject($scope.projectId, $scope.name, $scope.projectDescription);
            $scope.specificProject.push(project);
            /*$scope.$apply(function(){
                $scope.specificProject;
            });*/
            alert("Adding new project Success.");
            console.log(project)
            console.log($scope.specificProject)

        }
    }

});
//logincontroller
myController.controller('loginController', function($scope,ModalService,$rootScope, $location, $http) {
    console.log("login");
    $scope.validate = function() {

    
    	alert("username and password entered")
    
	    			$location.path("/projects");
	    			return;
	    		}
});


//inputsController
myController.controller('inputsController', function($scope, $rootScope, $location, $http) {
    $http.get("partials/inputs.html").then(function(response) { //ajax call
        console.log("Success" + response);
        $scope.mydetails = response.data;
        console.log($scope.mydetails);
    }, function errorCallback(response) {
        alert("Status :" + response.statusText);
    });


    console.log($scope.specificProject);
    //Insert each entry from a loop, using push function

});


//outputsController


myController.controller('outputsController', function($scope, $rootScope, $location, $http) {
    $http.get("partials/outputs.html").then(function(response) { //ajax call
        console.log("Success" + response);
        $scope.names = ["Project1", "Project2", "Project3", "Project4", "Project5", "Project6"];
        $scope.mydetails = response.data;

    }, function errorCallback(response) {
        alert("Status :" + response.statusText);
    });


    console.log($scope.specificProject);
    //Insert each entry from a loop, using push function

});