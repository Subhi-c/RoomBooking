angular.module('MyApp',[])
.controller('MyCtrl',function($scope){
    $scope.availableoptions=
        ["Male","Female","Transgender"]
$scope.idnames=
["Aadhar card","Voter ID","PAN CARD","Driving Licence"]
$scope.roomsize=
["1 bed room","2 bed room","3 bed room","4 bed room"]


$scope.catering=
["UP TO 5 PERSONS VEG","UP TO 10 PERSONS VEG","UP TO 5 PERSONS NON-VEG","UP TO 10 PERSONS NON-VEG"]
$scope.laundry=
["up to 10 clothes-normal wash","up to 20 clothes-normal wash"," up to 10 clothes-dry wash","up to 20 clothes-dry wash"] 

 

$scope.drop;


  $scope.clicked = function(){
    console.log($scope.drop);
    if (!($scope.username && $scope.age && $scope.mobilenum && $scope.idennum && $scope.drop )) {
        
        alert('Some fields are invalid');
      }
       
       
    
       else{
      window.location = "page2.html";
}
  }



    
    });






    const form = document.querySelector('form');
    form.addEventListener('submit',(e)=>{
        e.preventDefault();
       const fd=new FormData(form);
        const obj=Object.fromEntries(fd);
      const json=JSON.stringify(obj);
       console.log(json)
       localStorage.setItem('form',json)
     })