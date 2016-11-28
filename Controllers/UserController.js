/*
UserController.js
Author:Satish Sahani
*/
NodeApp.controller('UserController', function($scope, NodeAppService) {
    $scope.userEmail = "";
    $scope.userPassword = "";

    $scope.isUserFormShown = false;
    $scope.isEmailShown = false;
    $scope.isPasswordShown = false;
    $scope.isUserListShown = false;
    $scope.isUserDrpdwnShown = false;

    $scope.showCreateBtn = false;
	$scope.showUpdateBtn = false;
	$scope.showDeleteBtn = false;

	$scope.message = "";
    $scope.showUserForm = function(params){
    	$scope.message = "";
    	if(params == 'create'){

    		$scope.showCreateBtn = true;
    		$scope.showUpdateBtn = false;
    		$scope.showDeleteBtn = false;

    		$scope.isUserFormShown = true;
	    	$scope.isEmailShown = true;
	    	$scope.isPasswordShown = true;

	    	$scope.isUserDrpdwnShown = false;
    	}else if(params == 'update'){
    		$scope.action='update'
    		$scope.showCreateBtn = false;
    		$scope.showUpdateBtn = true;
    		$scope.showDeleteBtn = false;

    		$scope.isUserDrpdwnShown = true;
    		$scope.isUserFormShown = true;
	    	$scope.isEmailShown = true;
	    	$scope.isPasswordShown = true;
    	}else if(params == 'delete'){
    		$scope.action='delete'
    		$scope.showCreateBtn = false;
    		$scope.showUpdateBtn = false;
    		$scope.showDeleteBtn = true;

    		$scope.isUserFormShown = true;
    		$scope.isEmailShown = false;
	    	$scope.isPasswordShown = false;
    		$scope.isUserDrpdwnShown = true;
    	}
    	
    }
    $scope.CreateUser = function function_name(userEmail, userPassword) {
    	if(userEmail == "" || userPassword == ""){
    		alert("Please enter both username and password.");
    		return;
    	}
    	var userData = {
            "email": userEmail,
            "password": userPassword
        };
    	NodeAppService.createUser(userData).then(function (response) {
    		$scope.isUserFormShown = false;
    		$scope.userEmail = "";
    		$scope.userPassword = "";

    		$scope.message = "User is Created successfully.";
            console.log("user is created successfully.")
            $scope.ShowAllUser();
            return true;
        }, function (error) {
            console.log("Error!!! Cannot creat user.")
        });
    }

    $scope.ShowAllUser = function () {
    	$scope.isUserFormShown = false;
    	$scope.isUserListShown = true;
    	$scope.isUserDrpdwnShown = false;

    	NodeAppService.getAllUser().then(function (response) {
    		$scope.userList = response.message;
            console.log("Success.")
            return true;
        }, function (error) {
            console.log("Error!!! .")
        });
    }

    $scope.UpdateUser = function(userEmail,userPassword){
    	if(userEmail == "" || userPassword == ""){
    		alert("Please enter both username and password.");
    		return;
    	}
    	$scope.message = "";
    	var selectedUserId = $scope.selectedName._id;
    	var userData = {
            "userEmail": userEmail,
            "userPassword": userPassword
        };

        NodeAppService.updateUser(selectedUserId, userData).then(function (response) {
        	$scope.userEmail = "";
    		$scope.userPassword = "";

    		$scope.message = "User is upated successfully.";
            console.log("user is updated successfully.");
            $scope.ShowAllUser();
            return true;
        }, function (error) {
            console.log("Error!!! Cannot update user.")
        });
    }

    $scope.DeleteUser = function(){
    	var selectedUserId = $scope.selectedName._id;
        NodeAppService.deleteUser(selectedUserId).then(function (response) {
        	$scope.userEmail = "";
		    $scope.userPassword = "";

    		$scope.message = "User is delete successfully.";
            console.log("user is deleted successfully.");
            $scope.ShowAllUser();
            return true;
        }, function (error) {
            console.log("Error!!! Cannot deleted user.")
        });
    }

    $scope.updateUserInfo = function(){
    	$scope.userEmail = $scope.selectedName.userEmail;
    	$scope.userPassword = $scope.selectedName.userPassword;
    }
    $scope.ShowAllUser();
});