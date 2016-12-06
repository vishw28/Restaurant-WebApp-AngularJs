
        var app = angular.module('confusionApp');
        
        app.controller('MenuController',['$scope', 'menuFactory', function($scope, menuFactory){
       
         $scope.dishes = menuFactory.getDishes();
            
         console.log($scope.dishes);
            
         $scope.tab=1;
         $scope.showDetails = false;
        
        $scope.toggleDetails = function(){
            $scope.showDetails = !$scope.showDetails;
        }
        
        
        $scope.isSelected = function (checkTab) {
                return ($scope.tab === checkTab);
            }
        
        $scope.filtText = '';
        
         $scope.select = function(setTab) {
                $scope.tab = setTab;

                if (setTab === 2)
                    $scope.filtText = "appetizer";
                else if (setTab === 3)
                    $scope.filtText = "mains";
                else if (setTab === 4)
                    $scope.filtText = "dessert";
                else
                    $scope.filtText = "";
            }
        
    }]);

    app.controller('DishDetailController', ['$scope', '$stateParams', 'menuFactory', function($scope, $stateParams, menuFactory) {

            
            
            var dish= menuFactory.getDish(parseInt($stateParams.id,10));
            $scope.dish = dish;
            
            $scope.sort = '';
            
        }]);

    app.controller('IndexController',['$scope', '$stateParams', 'menuFactory', function($scope, $stateParams, menuFactory) {

            
            var promotions = menuFactory.getPromotion();
           $scope.promotions=promotions;
           console.log($scope.promotions);
            
        }]);


    app.controller('AboutController',['$scope', '$stateParams', 'corporateFactory', function($scope, $stateParams, corporateFactory) {

            
            var leadership = corporateFactory.getLeaders();
            $scope.leadership = leadership;
        
            var leader= corporateFactory.getLeader(3);
            $scope.leader = leader;
        
            console.log($scope.leader);
            console.log($scope.leadership);
            
        }]);

     app.controller('DishCommentController', ['$scope', function($scope) {
            
                 $scope.review = {};
            
            //Step 1: Create a JavaScript object to hold the comment from the form
                console.log(typeof $scope.review.comment);
               
            $scope.submitComment = function () {
                
                //Step 2: This is how you record the date
               $scope.review.date = new Date().toISOString();
                 
                // Step 3: Push your comment into the dish's comment array
                $scope.dish.comments.push($scope.review);
                
               
                
                //Step 4: reset your form to pristine
                $scope.commentForm.$setPristine();
                
                //Step 5: reset your JavaScript object that holds your comment
                $scope.review= {};
            }
        }]);

 app.controller('ContactController', ['$scope', function($scope) {
            $scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:"" };
                        var channels = [{value:"tel", label:"Tel."}, {value:"Email",label:"Email"}];
                        $scope.channels = channels;
            $scope.invalidChannelSelection = false;
                                }])
        
app.controller('FeedbackController', ['$scope', function($scope) {
                        
              $scope.sendFeedback = function() {
                                console.log($scope.feedback);
                                if ($scope.feedback.agree && ($scope.feedback.mychannel == "")&& !$scope.feedback.mychannel) {
                                    $scope.invalidChannelSelection = true;
                    console.log('incorrect');
                }
                else {
                    $scope.invalidChannelSelection = false;
                    $scope.feedback = {mychannel:"", firstName:"", lastName:"",
                                       agree:false, email:"", areacode:"" };
                    $scope.feedback.mychannel="";

                    $scope.feedbackForm.$setPristine();
                    console.log($scope.feedback);
                }
            };
        }])

;