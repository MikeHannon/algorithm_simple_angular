app.controller('MasterController', ['$scope', function ($scope) {
  $scope.current_time = Date.now();
 }]);
app.controller('algorithmController', ['$scope','algorithmFactory','algorithmFactoryJSON', function ($scope, algorithmFactory, algorithmFactoryJSON) {
  algorithmFactory.set_path('algorithms');
  algorithmFactoryJSON.set_path('algorithms');
  $scope.show_new = 'False';
  $scope.show_show = 'False';
  $scope.data_set = algorithmFactory.return_data;
  $scope.data_setJSON = algorithmFactoryJSON.return_dataJSON;

  $scope.index_button = function()
  {
    algorithmFactory.index();
    $scope.show_show = 'False';
  }

  $scope.create_button = function(algorithm)
  {
    algorithmFactory.create(algorithm);
    $scope.show_new = 'False';
    $scope.show_show = 'False';
    algorithm = {};
    $scope.index_buttonJSON();
  }

  $scope.new_button = function()
  {
    $scope.show_new = 'True';
    $scope.show_show = 'False';
    algorithmFactory.new();
  }

  $scope.update_button = function(algorithm)
  {
    algorithmFactory.update(algorithm);
  }

  $scope.edit_button = function(id){algorithmFactory.edit(id);}
  $scope.delete_button = function(id){algorithmFactory.delete(id);}
  $scope.show_button = function(id){
    algorithmFactoryJSON.show(id);
    algorithmFactory.show(id);
    $scope.show_show = 'True';
    $scope.show_new = 'False';
    }

  $scope.index_buttonJSON = function()
  {
    algorithmFactoryJSON.index();
    $scope.show_show = 'False';
    $scope.show_new = 'False';
  }
  $scope.create_buttonJSON = function(algorithm){
    algorithmFactoryJSON.create(algorithm);
    $scope.show_show = 'False';
    $scope.show_new = 'False';
  }
  $scope.new_buttonJSON = function(){algorithmFactoryJSON.new();}
  $scope.update_buttonJSON = function(algorithm){algorithmFactoryJSON.update(algorithm);}
  $scope.edit_buttonJSON = function(id){algorithmFactoryJSON.edit(id);}
  $scope.delete_buttonJSON = function(id){algorithmFactoryJSON.delete(id);}
  $scope.show_buttonJSON = function(id){algorithmFactoryJSON.show(id);}

  $scope.index_button();
  $scope.index_buttonJSON();
 }]);

//
