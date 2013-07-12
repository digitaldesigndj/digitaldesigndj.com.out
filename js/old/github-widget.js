/*
	 * JavaScript Pretty Date
	 * Copyright (c) 2011 John Resig (ejohn.org)
	 * Licensed under the MIT and GPL licenses.
	 */

define(["underscore","jquery","hbs!hb/github-recent"],function(e,t,n){return function r(){var i="DigitalDesignDj",s="digitaldesigndj.com",o="https://api.github.com/repos/"+i+"/"+s+"/commits",r=t(".github-commits");r.length&&t.ajax({url:o,dataType:"json",success:function(t){t?r.html(n(e.first(t,10))).addClass("widget"):console.log(t)}})}});