// color-consolidator - v0.0.1 - 2014-01-03 14:01:32

function hw(){return"Hello World"}var myAppModule=angular.module("myApp",[]);myAppModule.controller("myController",function($scope){$scope.showOnLoad=!0});var d=new Date,epoch=d.getTime()/1e3;WebFontConfig={custom:{families:["DobraMedium","DobraSlabMedium"],urls:["/src/css/fonts.css?epoch="+Math.floor(epoch)]}},function(){var wf=document.createElement("script");wf.src=("https:"==document.location.protocol?"https":"http")+"://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js",wf.type="text/javascript",wf.async="true";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(wf,s)}();