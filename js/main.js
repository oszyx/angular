/**
 * Created by Administrator on 2016/5/7 0007.
 */
'use strict';
angular.module('app').controller('AppCtrl', ['$scope', '$translate', '$localStorage', '$window',
    function(              $scope,   $translate,   $localStorage,   $window ) {
        var isIE = !!navigator.userAgent.match(/MSIE/i);
        isIE && angular.element($window.document.body).addClass('ie');
        isSmartDevice( $window ) && angular.element($window.document.body).addClass('smart');
        $scope.app = {name: '信息管理系统', version: '1.0.0'}
    $scope.resetPassword = function (){
        alert("模块还在开发中，请等待....");
    }
    function isSmartDevice( $window )
        {
            var ua = $window['navigator']['userAgent'] || $window['navigator']['vendor'] || $window['opera'];
            // 设备类型
            return (/iPhone|iPod|iPad|Silk|Android|BlackBerry|Opera Mini|IEMobile/).test(ua);
        }
    }]);