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
    

$scope.IsVisible=false;
$scope.ShowHide = function () {
    if($scope.myForm.$invalid){
      
        alert("Some fields are invalid");
        
    }
    else
    $scope.IsVisible = $scope.IsVisible ? false : true;
}
$scope.Submit = function(){
   
if($scope.SubForm.$invalid)
{
   alert("Some fields are invalid");
    }
else{
    alert("Successfully submitted");
    
}
}
$scope.HidePopup=function (){
    $scope.IsVisible=false;
}
});


    const json1=localStorage.getItem('form');
     const obj1=JSON.parse(json1)
    
    
        
     

    
      
    const form = document.querySelector('form');
     form.addEventListener('submit',(e)=>{
        e.preventDefault();
        const fd=new FormData(myForm);
        const obj=Object.fromEntries(fd);
       const json=JSON.stringify(obj);
        
        const obj2=JSON.parse(json)
         console.log(typeof(obj2))
     



    var obj3 = Object.assign({},obj1,obj2);

    console.log(obj3);
    const json3=JSON.stringify(obj3)
    localStorage.setItem('form',json3)

    


    

})
 