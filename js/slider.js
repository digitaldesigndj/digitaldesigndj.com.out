require.config({baseUrl:"js",paths:{cycle:"../bower/cycle/index"},shim:{cycle:{deps:["../bower/jquery/index"]}}}),define(["require","cycle"],function(e){return function(){e("cycle"),$(".cycle-slideshow").on("cycle-before",function(e,t,n,r,i){console.log(e,n)})}});