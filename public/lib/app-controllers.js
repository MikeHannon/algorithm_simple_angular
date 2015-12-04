app.controller('MasterController', ['$scope', function ($scope) {
  $scope.current_time = Date.now();
 }]);
app.controller('algorithmController', ['$scope','algorithmFactory','algorithmFactoryJSON', function ($scope, algorithmFactory, algorithmFactoryJSON) {
  algorithmFactory.set_path('algorithms');
  algorithmFactoryJSON.set_path('algorithms');
  // $scope.y = {name: "mike"};
  $scope.data_set = algorithmFactory.return_data;
  $scope.data_setJSON = algorithmFactoryJSON.return_dataJSON;
  var edit_dataSet = function(data){
    console.log(data);
    // for (element in data){
    //   console.log(data[element]);
    //   var new_element = data[element].split("↵").join('');
    //   console.log(new_element);
    // }
  }
  $scope.index_button = function(){algorithmFactory.index();}
  $scope.create_button = function(algorithm){
    algorithmFactory.create(algorithm);
    
  }
  $scope.new_button = function(){algorithmFactory.new();}
  $scope.update_button = function(algorithm){algorithmFactory.update(algorithm);}
  $scope.edit_button = function(id){algorithmFactory.edit(id);}
  $scope.delete_button = function(id){algorithmFactory.delete(id);}
  $scope.show_button = function(id){
    algorithmFactoryJSON.show(id);
    algorithmFactory.show(id);
    }

  $scope.index_buttonJSON = function(){algorithmFactoryJSON.index();}
  $scope.create_buttonJSON = function(algorithm){algorithmFactoryJSON.create(algorithm);}
  $scope.new_buttonJSON = function(){algorithmFactoryJSON.new();}
  $scope.update_buttonJSON = function(algorithm){algorithmFactoryJSON.update(algorithm);}
  $scope.edit_buttonJSON = function(id){algorithmFactoryJSON.edit(id);}
  $scope.delete_buttonJSON = function(id){algorithmFactoryJSON.delete(id);}
  $scope.show_buttonJSON = function(id){algorithmFactoryJSON.show(id);}

  $scope.index_button();
  $scope.index_buttonJSON();
 }]);

//
