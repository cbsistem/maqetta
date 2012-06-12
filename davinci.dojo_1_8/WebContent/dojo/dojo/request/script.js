/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/request/script",["module","require","./watch","./util","../_base/array","../_base/lang","../on","../dom","../dom-construct","../has","../_base/window"],function(_1,_2,_3,_4,_5,_6,on,_7,_8,_9,_a){_9.add("script-readystatechange",function(_b,_c){var _d=_c.createElement("script");return typeof _d["onreadystatechange"]!=="undefined"&&(typeof _b["opera"]==="undefined"||_b["opera"].toString()!=="[object Opera]");});var _e=_1.id.replace(/[\/\.\-]/g,"_"),_f=0,_10=_9("script-readystatechange")?"readystatechange":"load",_11=/complete|loaded/,_12=this[_e+"_callbacks"]={},_13=[];var _14={_jsonpCallback:function(){}};function _15(_16){this.response.data=_16;};function _17(id,url,_18){var doc=(_18||_a.doc),_19=doc.createElement("script");_19.type="text/javascript";_19.src=url;_19.id=id;_19.async=true;_19.charset="utf-8";return doc.getElementsByTagName("head")[0].appendChild(_19);};function _1a(id,_1b,_1c){_8.destroy(_7.byId(_e+id,_1b));if(_12[id]){if(_1c){_12[id]=_14;}else{delete _12[id];}}};function _1d(dfd){var _1e=dfd.response;_13.push({id:dfd.id,frameDoc:_1e.options.frameDoc});_1e.options.frameDoc=null;};function _1f(dfd,_20){if(dfd.canDelete){_21._remove(dfd.id,_20.options.frameDoc,true);}};function _22(_23){if(_13&&_13.length){_5.forEach(_13,function(_24){_21._remove(_24.id,_24.frameDoc);_24.frameDoc=null;});_13=[];}return true;};function _25(_26){return !!_26.data;};function _27(_28){return !!this.scriptLoaded;};function _29(_2a){var _2b=_2a.options.checkString;return _2b&&eval("typeof("+_2b+") !== \"undefined\"");};function _2c(_2d){if(this.canDelete){_1d(this);}if(_2d.error){this.reject(_2d.error);}else{this.resolve(_2d);}};function _21(url,_2e,_2f){var _30=_4.parseArgs(url,_4.deepCopy({},_2e));url=_30.url;_2e=_30.options;var dfd=_4.deferred(_30,_1f,_22,_2e.jsonp?_25:(_2e.checkString?_29:_27),_2c);_6.mixin(dfd,{id:_f++,canDelete:false});dfd.scriptId=_e+dfd.id;if(_2e.jsonp){url+=(~url.indexOf("?")?"&":"?")+_2e.jsonp+"="+(_2e.frameDoc?"parent.":"")+_e+"_callbacks["+dfd.id+"]._jsonpCallback";dfd.canDelete=true;_12[dfd.id]={_jsonpCallback:_15,response:_30};}try{var _31=_2("./notify");_31.send(_30);}catch(e){}var _32=_21._attach(dfd.scriptId,url,_2e.frameDoc);if(!_2e.jsonp&&!_2e.checkString){var _33=on(_32,_10,function(evt){if(evt.type==="load"||_11.test(_32.readyState)){_33.remove();dfd.scriptLoaded=evt;}});}_3(dfd);return _2f?dfd:dfd.promise;};_21.get=_21;_21._attach=_17;_21._remove=_1a;return _21;});