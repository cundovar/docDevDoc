(function(){const A=document.createElement("link").relList;if(A&&A.supports&&A.supports("modulepreload"))return;for(const N of document.querySelectorAll('link[rel="modulepreload"]'))c(N);new MutationObserver(N=>{for(const M of N)if(M.type==="childList")for(const j of M.addedNodes)j.tagName==="LINK"&&j.rel==="modulepreload"&&c(j)}).observe(document,{childList:!0,subtree:!0});function g(N){const M={};return N.integrity&&(M.integrity=N.integrity),N.referrerPolicy&&(M.referrerPolicy=N.referrerPolicy),N.crossOrigin==="use-credentials"?M.credentials="include":N.crossOrigin==="anonymous"?M.credentials="omit":M.credentials="same-origin",M}function c(N){if(N.ep)return;N.ep=!0;const M=g(N);fetch(N.href,M)}})();var oc={exports:{}},Cl={};var bp;function pv(){if(bp)return Cl;bp=1;var h=Symbol.for("react.transitional.element"),A=Symbol.for("react.fragment");function g(c,N,M){var j=null;if(M!==void 0&&(j=""+M),N.key!==void 0&&(j=""+N.key),"key"in N){M={};for(var Z in N)Z!=="key"&&(M[Z]=N[Z])}else M=N;return N=M.ref,{$$typeof:h,type:c,key:j,ref:N!==void 0?N:null,props:M}}return Cl.Fragment=A,Cl.jsx=g,Cl.jsxs=g,Cl}var Cp;function dv(){return Cp||(Cp=1,oc.exports=pv()),oc.exports}var D=dv(),rc={exports:{}},Y={};var Ap;function mv(){if(Ap)return Y;Ap=1;var h=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),g=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),M=Symbol.for("react.consumer"),j=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),T=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),B=Symbol.for("react.activity"),de=Symbol.iterator;function Ke(f){return f===null||typeof f!="object"?null:(f=de&&f[de]||f["@@iterator"],typeof f=="function"?f:null)}var Le={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ze=Object.assign,_n={};function Ie(f,x,_){this.props=f,this.context=x,this.refs=_n,this.updater=_||Le}Ie.prototype.isReactComponent={},Ie.prototype.setState=function(f,x){if(typeof f!="object"&&typeof f!="function"&&f!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,f,x,"setState")},Ie.prototype.forceUpdate=function(f){this.updater.enqueueForceUpdate(this,f,"forceUpdate")};function Pn(){}Pn.prototype=Ie.prototype;function je(f,x,_){this.props=f,this.context=x,this.refs=_n,this.updater=_||Le}var cn=je.prototype=new Pn;cn.constructor=je,ze(cn,Ie.prototype),cn.isPureReactComponent=!0;var En=Array.isArray;function Be(){}var F={H:null,A:null,T:null,S:null},Qe=Object.prototype.hasOwnProperty;function xn(f,x,_){var z=_.ref;return{$$typeof:h,type:f,key:x,ref:z!==void 0?z:null,props:_}}function $t(f,x){return xn(f.type,x,f.props)}function Tn(f){return typeof f=="object"&&f!==null&&f.$$typeof===h}function Ge(f){var x={"=":"=0",":":"=2"};return"$"+f.replace(/[=:]/g,function(_){return x[_]})}var At=/\/+/g;function On(f,x){return typeof f=="object"&&f!==null&&f.key!=null?Ge(""+f.key):x.toString(36)}function Sn(f){switch(f.status){case"fulfilled":return f.value;case"rejected":throw f.reason;default:switch(typeof f.status=="string"?f.then(Be,Be):(f.status="pending",f.then(function(x){f.status==="pending"&&(f.status="fulfilled",f.value=x)},function(x){f.status==="pending"&&(f.status="rejected",f.reason=x)})),f.status){case"fulfilled":return f.value;case"rejected":throw f.reason}}throw f}function b(f,x,_,z,$){var w=typeof f;(w==="undefined"||w==="boolean")&&(f=null);var te=!1;if(f===null)te=!0;else switch(w){case"bigint":case"string":case"number":te=!0;break;case"object":switch(f.$$typeof){case h:case A:te=!0;break;case G:return te=f._init,b(te(f._payload),x,_,z,$)}}if(te)return $=$(f),te=z===""?"."+On(f,0):z,En($)?(_="",te!=null&&(_=te.replace(At,"$&/")+"/"),b($,x,_,"",function(Ma){return Ma})):$!=null&&(Tn($)&&($=$t($,_+($.key==null||f&&f.key===$.key?"":(""+$.key).replace(At,"$&/")+"/")+te)),x.push($)),1;te=0;var qe=z===""?".":z+":";if(En(f))for(var ge=0;ge<f.length;ge++)z=f[ge],w=qe+On(z,ge),te+=b(z,x,_,w,$);else if(ge=Ke(f),typeof ge=="function")for(f=ge.call(f),ge=0;!(z=f.next()).done;)z=z.value,w=qe+On(z,ge++),te+=b(z,x,_,w,$);else if(w==="object"){if(typeof f.then=="function")return b(Sn(f),x,_,z,$);throw x=String(f),Error("Objects are not valid as a React child (found: "+(x==="[object Object]"?"object with keys {"+Object.keys(f).join(", ")+"}":x)+"). If you meant to render a collection of children, use an array instead.")}return te}function R(f,x,_){if(f==null)return f;var z=[],$=0;return b(f,z,"","",function(w){return x.call(_,w,$++)}),z}function Q(f){if(f._status===-1){var x=f._result;x=x(),x.then(function(_){(f._status===0||f._status===-1)&&(f._status=1,f._result=_)},function(_){(f._status===0||f._status===-1)&&(f._status=2,f._result=_)}),f._status===-1&&(f._status=0,f._result=x)}if(f._status===1)return f._result.default;throw f._result}var ie=typeof reportError=="function"?reportError:function(f){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var x=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof f=="object"&&f!==null&&typeof f.message=="string"?String(f.message):String(f),error:f});if(!window.dispatchEvent(x))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",f);return}console.error(f)},oe={map:R,forEach:function(f,x,_){R(f,function(){x.apply(this,arguments)},_)},count:function(f){var x=0;return R(f,function(){x++}),x},toArray:function(f){return R(f,function(x){return x})||[]},only:function(f){if(!Tn(f))throw Error("React.Children.only expected to receive a single React element child.");return f}};return Y.Activity=B,Y.Children=oe,Y.Component=Ie,Y.Fragment=g,Y.Profiler=N,Y.PureComponent=je,Y.StrictMode=c,Y.Suspense=O,Y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,Y.__COMPILER_RUNTIME={__proto__:null,c:function(f){return F.H.useMemoCache(f)}},Y.cache=function(f){return function(){return f.apply(null,arguments)}},Y.cacheSignal=function(){return null},Y.cloneElement=function(f,x,_){if(f==null)throw Error("The argument must be a React element, but you passed "+f+".");var z=ze({},f.props),$=f.key;if(x!=null)for(w in x.key!==void 0&&($=""+x.key),x)!Qe.call(x,w)||w==="key"||w==="__self"||w==="__source"||w==="ref"&&x.ref===void 0||(z[w]=x[w]);var w=arguments.length-2;if(w===1)z.children=_;else if(1<w){for(var te=Array(w),qe=0;qe<w;qe++)te[qe]=arguments[qe+2];z.children=te}return xn(f.type,$,z)},Y.createContext=function(f){return f={$$typeof:j,_currentValue:f,_currentValue2:f,_threadCount:0,Provider:null,Consumer:null},f.Provider=f,f.Consumer={$$typeof:M,_context:f},f},Y.createElement=function(f,x,_){var z,$={},w=null;if(x!=null)for(z in x.key!==void 0&&(w=""+x.key),x)Qe.call(x,z)&&z!=="key"&&z!=="__self"&&z!=="__source"&&($[z]=x[z]);var te=arguments.length-2;if(te===1)$.children=_;else if(1<te){for(var qe=Array(te),ge=0;ge<te;ge++)qe[ge]=arguments[ge+2];$.children=qe}if(f&&f.defaultProps)for(z in te=f.defaultProps,te)$[z]===void 0&&($[z]=te[z]);return xn(f,w,$)},Y.createRef=function(){return{current:null}},Y.forwardRef=function(f){return{$$typeof:Z,render:f}},Y.isValidElement=Tn,Y.lazy=function(f){return{$$typeof:G,_payload:{_status:-1,_result:f},_init:Q}},Y.memo=function(f,x){return{$$typeof:T,type:f,compare:x===void 0?null:x}},Y.startTransition=function(f){var x=F.T,_={};F.T=_;try{var z=f(),$=F.S;$!==null&&$(_,z),typeof z=="object"&&z!==null&&typeof z.then=="function"&&z.then(Be,ie)}catch(w){ie(w)}finally{x!==null&&_.types!==null&&(x.types=_.types),F.T=x}},Y.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},Y.use=function(f){return F.H.use(f)},Y.useActionState=function(f,x,_){return F.H.useActionState(f,x,_)},Y.useCallback=function(f,x){return F.H.useCallback(f,x)},Y.useContext=function(f){return F.H.useContext(f)},Y.useDebugValue=function(){},Y.useDeferredValue=function(f,x){return F.H.useDeferredValue(f,x)},Y.useEffect=function(f,x){return F.H.useEffect(f,x)},Y.useEffectEvent=function(f){return F.H.useEffectEvent(f)},Y.useId=function(){return F.H.useId()},Y.useImperativeHandle=function(f,x,_){return F.H.useImperativeHandle(f,x,_)},Y.useInsertionEffect=function(f,x){return F.H.useInsertionEffect(f,x)},Y.useLayoutEffect=function(f,x){return F.H.useLayoutEffect(f,x)},Y.useMemo=function(f,x){return F.H.useMemo(f,x)},Y.useOptimistic=function(f,x){return F.H.useOptimistic(f,x)},Y.useReducer=function(f,x,_){return F.H.useReducer(f,x,_)},Y.useRef=function(f){return F.H.useRef(f)},Y.useState=function(f){return F.H.useState(f)},Y.useSyncExternalStore=function(f,x,_){return F.H.useSyncExternalStore(f,x,_)},Y.useTransition=function(){return F.H.useTransition()},Y.version="19.2.3",Y}var Ep;function hc(){return Ep||(Ep=1,rc.exports=mv()),rc.exports}var sn=hc(),fc={exports:{}},Al={},pc={exports:{}},dc={};var xp;function vv(){return xp||(xp=1,(function(h){function A(b,R){var Q=b.length;b.push(R);e:for(;0<Q;){var ie=Q-1>>>1,oe=b[ie];if(0<N(oe,R))b[ie]=R,b[Q]=oe,Q=ie;else break e}}function g(b){return b.length===0?null:b[0]}function c(b){if(b.length===0)return null;var R=b[0],Q=b.pop();if(Q!==R){b[0]=Q;e:for(var ie=0,oe=b.length,f=oe>>>1;ie<f;){var x=2*(ie+1)-1,_=b[x],z=x+1,$=b[z];if(0>N(_,Q))z<oe&&0>N($,_)?(b[ie]=$,b[z]=Q,ie=z):(b[ie]=_,b[x]=Q,ie=x);else if(z<oe&&0>N($,Q))b[ie]=$,b[z]=Q,ie=z;else break e}}return R}function N(b,R){var Q=b.sortIndex-R.sortIndex;return Q!==0?Q:b.id-R.id}if(h.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var M=performance;h.unstable_now=function(){return M.now()}}else{var j=Date,Z=j.now();h.unstable_now=function(){return j.now()-Z}}var O=[],T=[],G=1,B=null,de=3,Ke=!1,Le=!1,ze=!1,_n=!1,Ie=typeof setTimeout=="function"?setTimeout:null,Pn=typeof clearTimeout=="function"?clearTimeout:null,je=typeof setImmediate<"u"?setImmediate:null;function cn(b){for(var R=g(T);R!==null;){if(R.callback===null)c(T);else if(R.startTime<=b)c(T),R.sortIndex=R.expirationTime,A(O,R);else break;R=g(T)}}function En(b){if(ze=!1,cn(b),!Le)if(g(O)!==null)Le=!0,Be||(Be=!0,Ge());else{var R=g(T);R!==null&&Sn(En,R.startTime-b)}}var Be=!1,F=-1,Qe=5,xn=-1;function $t(){return _n?!0:!(h.unstable_now()-xn<Qe)}function Tn(){if(_n=!1,Be){var b=h.unstable_now();xn=b;var R=!0;try{e:{Le=!1,ze&&(ze=!1,Pn(F),F=-1),Ke=!0;var Q=de;try{n:{for(cn(b),B=g(O);B!==null&&!(B.expirationTime>b&&$t());){var ie=B.callback;if(typeof ie=="function"){B.callback=null,de=B.priorityLevel;var oe=ie(B.expirationTime<=b);if(b=h.unstable_now(),typeof oe=="function"){B.callback=oe,cn(b),R=!0;break n}B===g(O)&&c(O),cn(b)}else c(O);B=g(O)}if(B!==null)R=!0;else{var f=g(T);f!==null&&Sn(En,f.startTime-b),R=!1}}break e}finally{B=null,de=Q,Ke=!1}R=void 0}}finally{R?Ge():Be=!1}}}var Ge;if(typeof je=="function")Ge=function(){je(Tn)};else if(typeof MessageChannel<"u"){var At=new MessageChannel,On=At.port2;At.port1.onmessage=Tn,Ge=function(){On.postMessage(null)}}else Ge=function(){Ie(Tn,0)};function Sn(b,R){F=Ie(function(){b(h.unstable_now())},R)}h.unstable_IdlePriority=5,h.unstable_ImmediatePriority=1,h.unstable_LowPriority=4,h.unstable_NormalPriority=3,h.unstable_Profiling=null,h.unstable_UserBlockingPriority=2,h.unstable_cancelCallback=function(b){b.callback=null},h.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Qe=0<b?Math.floor(1e3/b):5},h.unstable_getCurrentPriorityLevel=function(){return de},h.unstable_next=function(b){switch(de){case 1:case 2:case 3:var R=3;break;default:R=de}var Q=de;de=R;try{return b()}finally{de=Q}},h.unstable_requestPaint=function(){_n=!0},h.unstable_runWithPriority=function(b,R){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var Q=de;de=b;try{return R()}finally{de=Q}},h.unstable_scheduleCallback=function(b,R,Q){var ie=h.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?ie+Q:ie):Q=ie,b){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=Q+oe,b={id:G++,callback:R,priorityLevel:b,startTime:Q,expirationTime:oe,sortIndex:-1},Q>ie?(b.sortIndex=Q,A(T,b),g(O)===null&&b===g(T)&&(ze?(Pn(F),F=-1):ze=!0,Sn(En,Q-ie))):(b.sortIndex=oe,A(O,b),Le||Ke||(Le=!0,Be||(Be=!0,Ge()))),b},h.unstable_shouldYield=$t,h.unstable_wrapCallback=function(b){var R=de;return function(){var Q=de;de=R;try{return b.apply(this,arguments)}finally{de=Q}}}})(dc)),dc}var Tp;function hv(){return Tp||(Tp=1,pc.exports=vv()),pc.exports}var mc={exports:{}},Ue={};var Np;function gv(){if(Np)return Ue;Np=1;var h=hc();function A(O){var T="https://react.dev/errors/"+O;if(1<arguments.length){T+="?args[]="+encodeURIComponent(arguments[1]);for(var G=2;G<arguments.length;G++)T+="&args[]="+encodeURIComponent(arguments[G])}return"Minified React error #"+O+"; visit "+T+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function g(){}var c={d:{f:g,r:function(){throw Error(A(522))},D:g,C:g,L:g,m:g,X:g,S:g,M:g},p:0,findDOMNode:null},N=Symbol.for("react.portal");function M(O,T,G){var B=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:N,key:B==null?null:""+B,children:O,containerInfo:T,implementation:G}}var j=h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Z(O,T){if(O==="font")return"";if(typeof T=="string")return T==="use-credentials"?T:""}return Ue.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,Ue.createPortal=function(O,T){var G=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!T||T.nodeType!==1&&T.nodeType!==9&&T.nodeType!==11)throw Error(A(299));return M(O,T,null,G)},Ue.flushSync=function(O){var T=j.T,G=c.p;try{if(j.T=null,c.p=2,O)return O()}finally{j.T=T,c.p=G,c.d.f()}},Ue.preconnect=function(O,T){typeof O=="string"&&(T?(T=T.crossOrigin,T=typeof T=="string"?T==="use-credentials"?T:"":void 0):T=null,c.d.C(O,T))},Ue.prefetchDNS=function(O){typeof O=="string"&&c.d.D(O)},Ue.preinit=function(O,T){if(typeof O=="string"&&T&&typeof T.as=="string"){var G=T.as,B=Z(G,T.crossOrigin),de=typeof T.integrity=="string"?T.integrity:void 0,Ke=typeof T.fetchPriority=="string"?T.fetchPriority:void 0;G==="style"?c.d.S(O,typeof T.precedence=="string"?T.precedence:void 0,{crossOrigin:B,integrity:de,fetchPriority:Ke}):G==="script"&&c.d.X(O,{crossOrigin:B,integrity:de,fetchPriority:Ke,nonce:typeof T.nonce=="string"?T.nonce:void 0})}},Ue.preinitModule=function(O,T){if(typeof O=="string")if(typeof T=="object"&&T!==null){if(T.as==null||T.as==="script"){var G=Z(T.as,T.crossOrigin);c.d.M(O,{crossOrigin:G,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0})}}else T==null&&c.d.M(O)},Ue.preload=function(O,T){if(typeof O=="string"&&typeof T=="object"&&T!==null&&typeof T.as=="string"){var G=T.as,B=Z(G,T.crossOrigin);c.d.L(O,G,{crossOrigin:B,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0,type:typeof T.type=="string"?T.type:void 0,fetchPriority:typeof T.fetchPriority=="string"?T.fetchPriority:void 0,referrerPolicy:typeof T.referrerPolicy=="string"?T.referrerPolicy:void 0,imageSrcSet:typeof T.imageSrcSet=="string"?T.imageSrcSet:void 0,imageSizes:typeof T.imageSizes=="string"?T.imageSizes:void 0,media:typeof T.media=="string"?T.media:void 0})}},Ue.preloadModule=function(O,T){if(typeof O=="string")if(T){var G=Z(T.as,T.crossOrigin);c.d.m(O,{as:typeof T.as=="string"&&T.as!=="script"?T.as:void 0,crossOrigin:G,integrity:typeof T.integrity=="string"?T.integrity:void 0})}else c.d.m(O)},Ue.requestFormReset=function(O){c.d.r(O)},Ue.unstable_batchedUpdates=function(O,T){return O(T)},Ue.useFormState=function(O,T,G){return j.H.useFormState(O,T,G)},Ue.useFormStatus=function(){return j.H.useHostTransitionStatus()},Ue.version="19.2.3",Ue}var Dp;function yv(){if(Dp)return mc.exports;Dp=1;function h(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(h)}catch(A){console.error(A)}}return h(),mc.exports=gv(),mc.exports}var Mp;function Sv(){if(Mp)return Al;Mp=1;var h=hv(),A=hc(),g=yv();function c(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function N(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function M(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function j(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Z(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function O(e){if(M(e)!==e)throw Error(c(188))}function T(e){var n=e.alternate;if(!n){if(n=M(e),n===null)throw Error(c(188));return n!==e?null:e}for(var t=e,a=n;;){var l=t.return;if(l===null)break;var i=l.alternate;if(i===null){if(a=l.return,a!==null){t=a;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===t)return O(l),e;if(i===a)return O(l),n;i=i.sibling}throw Error(c(188))}if(t.return!==a.return)t=l,a=i;else{for(var u=!1,s=l.child;s;){if(s===t){u=!0,t=l,a=i;break}if(s===a){u=!0,a=l,t=i;break}s=s.sibling}if(!u){for(s=i.child;s;){if(s===t){u=!0,t=i,a=l;break}if(s===a){u=!0,a=i,t=l;break}s=s.sibling}if(!u)throw Error(c(189))}}if(t.alternate!==a)throw Error(c(190))}if(t.tag!==3)throw Error(c(188));return t.stateNode.current===t?e:n}function G(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=G(e),n!==null)return n;e=e.sibling}return null}var B=Object.assign,de=Symbol.for("react.element"),Ke=Symbol.for("react.transitional.element"),Le=Symbol.for("react.portal"),ze=Symbol.for("react.fragment"),_n=Symbol.for("react.strict_mode"),Ie=Symbol.for("react.profiler"),Pn=Symbol.for("react.consumer"),je=Symbol.for("react.context"),cn=Symbol.for("react.forward_ref"),En=Symbol.for("react.suspense"),Be=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),Qe=Symbol.for("react.lazy"),xn=Symbol.for("react.activity"),$t=Symbol.for("react.memo_cache_sentinel"),Tn=Symbol.iterator;function Ge(e){return e===null||typeof e!="object"?null:(e=Tn&&e[Tn]||e["@@iterator"],typeof e=="function"?e:null)}var At=Symbol.for("react.client.reference");function On(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===At?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ze:return"Fragment";case Ie:return"Profiler";case _n:return"StrictMode";case En:return"Suspense";case Be:return"SuspenseList";case xn:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Le:return"Portal";case je:return e.displayName||"Context";case Pn:return(e._context.displayName||"Context")+".Consumer";case cn:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return n=e.displayName||null,n!==null?n:On(e.type)||"Memo";case Qe:n=e._payload,e=e._init;try{return On(e(n))}catch{}}return null}var Sn=Array.isArray,b=A.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,R=g.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q={pending:!1,data:null,method:null,action:null},ie=[],oe=-1;function f(e){return{current:e}}function x(e){0>oe||(e.current=ie[oe],ie[oe]=null,oe--)}function _(e,n){oe++,ie[oe]=e.current,e.current=n}var z=f(null),$=f(null),w=f(null),te=f(null);function qe(e,n){switch(_(w,n),_($,e),_(z,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Vf(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Vf(n),e=Xf(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}x(z),_(z,e)}function ge(){x(z),x($),x(w)}function Ma(e){e.memoizedState!==null&&_(te,e);var n=z.current,t=Xf(n,e.type);n!==t&&(_($,e),_(z,t))}function Tl(e){$.current===e&&(x(z),x($)),te.current===e&&(x(te),gl._currentValue=Q)}var Zi,gc;function Et(e){if(Zi===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Zi=n&&n[1]||"",gc=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Zi+e+gc}var wi=!1;function Ji(e,n){if(!e||wi)return"";wi=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(n){var E=function(){throw Error()};if(Object.defineProperty(E.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(E,[])}catch(y){var v=y}Reflect.construct(e,[],E)}else{try{E.call()}catch(y){v=y}e.call(E.prototype)}}else{try{throw Error()}catch(y){v=y}(E=e())&&typeof E.catch=="function"&&E.catch(function(){})}}catch(y){if(y&&v&&typeof y.stack=="string")return[y.stack,v.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),u=i[0],s=i[1];if(u&&s){var o=u.split(`
`),m=s.split(`
`);for(l=a=0;a<o.length&&!o[a].includes("DetermineComponentFrameRoot");)a++;for(;l<m.length&&!m[l].includes("DetermineComponentFrameRoot");)l++;if(a===o.length||l===m.length)for(a=o.length-1,l=m.length-1;1<=a&&0<=l&&o[a]!==m[l];)l--;for(;1<=a&&0<=l;a--,l--)if(o[a]!==m[l]){if(a!==1||l!==1)do if(a--,l--,0>l||o[a]!==m[l]){var S=`
`+o[a].replace(" at new "," at ");return e.displayName&&S.includes("<anonymous>")&&(S=S.replace("<anonymous>",e.displayName)),S}while(1<=a&&0<=l);break}}}finally{wi=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?Et(t):""}function Vp(e,n){switch(e.tag){case 26:case 27:case 5:return Et(e.type);case 16:return Et("Lazy");case 13:return e.child!==n&&n!==null?Et("Suspense Fallback"):Et("Suspense");case 19:return Et("SuspenseList");case 0:case 15:return Ji(e.type,!1);case 11:return Ji(e.type.render,!1);case 1:return Ji(e.type,!0);case 31:return Et("Activity");default:return""}}function yc(e){try{var n="",t=null;do n+=Vp(e,t),t=e,e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Ki=Object.prototype.hasOwnProperty,Ii=h.unstable_scheduleCallback,Pi=h.unstable_cancelCallback,Xp=h.unstable_shouldYield,Zp=h.unstable_requestPaint,Pe=h.unstable_now,wp=h.unstable_getCurrentPriorityLevel,Sc=h.unstable_ImmediatePriority,bc=h.unstable_UserBlockingPriority,Nl=h.unstable_NormalPriority,Jp=h.unstable_LowPriority,Cc=h.unstable_IdlePriority,Kp=h.log,Ip=h.unstable_setDisableYieldValue,Ra=null,Fe=null;function Fn(e){if(typeof Kp=="function"&&Ip(e),Fe&&typeof Fe.setStrictMode=="function")try{Fe.setStrictMode(Ra,e)}catch{}}var ke=Math.clz32?Math.clz32:kp,Pp=Math.log,Fp=Math.LN2;function kp(e){return e>>>=0,e===0?32:31-(Pp(e)/Fp|0)|0}var Dl=256,Ml=262144,Rl=4194304;function xt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function _l(e,n,t){var a=e.pendingLanes;if(a===0)return 0;var l=0,i=e.suspendedLanes,u=e.pingedLanes;e=e.warmLanes;var s=a&134217727;return s!==0?(a=s&~i,a!==0?l=xt(a):(u&=s,u!==0?l=xt(u):t||(t=s&~e,t!==0&&(l=xt(t))))):(s=a&~i,s!==0?l=xt(s):u!==0?l=xt(u):t||(t=a&~e,t!==0&&(l=xt(t)))),l===0?0:n!==0&&n!==l&&(n&i)===0&&(i=l&-l,t=n&-n,i>=t||i===32&&(t&4194048)!==0)?n:l}function _a(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Wp(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ac(){var e=Rl;return Rl<<=1,(Rl&62914560)===0&&(Rl=4194304),e}function Fi(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Oa(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ed(e,n,t,a,l,i){var u=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var s=e.entanglements,o=e.expirationTimes,m=e.hiddenUpdates;for(t=u&~t;0<t;){var S=31-ke(t),E=1<<S;s[S]=0,o[S]=-1;var v=m[S];if(v!==null)for(m[S]=null,S=0;S<v.length;S++){var y=v[S];y!==null&&(y.lane&=-536870913)}t&=~E}a!==0&&Ec(e,a,0),i!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=i&~(u&~n))}function Ec(e,n,t){e.pendingLanes|=n,e.suspendedLanes&=~n;var a=31-ke(n);e.entangledLanes|=n,e.entanglements[a]=e.entanglements[a]|1073741824|t&261930}function xc(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var a=31-ke(t),l=1<<a;l&n|e[a]&n&&(e[a]|=n),t&=~l}}function Tc(e,n){var t=n&-n;return t=(t&42)!==0?1:ki(t),(t&(e.suspendedLanes|n))!==0?0:t}function ki(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Wi(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Nc(){var e=R.p;return e!==0?e:(e=window.event,e===void 0?32:dp(e.type))}function Dc(e,n){var t=R.p;try{return R.p=e,n()}finally{R.p=t}}var kn=Math.random().toString(36).slice(2),De="__reactFiber$"+kn,Ye="__reactProps$"+kn,Vt="__reactContainer$"+kn,eu="__reactEvents$"+kn,nd="__reactListeners$"+kn,td="__reactHandles$"+kn,Mc="__reactResources$"+kn,ja="__reactMarker$"+kn;function nu(e){delete e[De],delete e[Ye],delete e[eu],delete e[nd],delete e[td]}function Xt(e){var n=e[De];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Vt]||t[De]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Ff(e);e!==null;){if(t=e[De])return t;e=Ff(e)}return n}e=t,t=e.parentNode}return null}function Zt(e){if(e=e[De]||e[Vt]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Ua(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(c(33))}function wt(e){var n=e[Mc];return n||(n=e[Mc]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Te(e){e[ja]=!0}var Rc=new Set,_c={};function Tt(e,n){Jt(e,n),Jt(e+"Capture",n)}function Jt(e,n){for(_c[e]=n,e=0;e<n.length;e++)Rc.add(n[e])}var ad=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Oc={},jc={};function ld(e){return Ki.call(jc,e)?!0:Ki.call(Oc,e)?!1:ad.test(e)?jc[e]=!0:(Oc[e]=!0,!1)}function Ol(e,n,t){if(ld(n))if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var a=n.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+t)}}function jl(e,n,t){if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+t)}}function jn(e,n,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(n,t,""+a)}}function on(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Uc(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function id(e,n,t){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var l=a.get,i=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(u){t=""+u,i.call(this,u)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return t},setValue:function(u){t=""+u},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function tu(e){if(!e._valueTracker){var n=Uc(e)?"checked":"value";e._valueTracker=id(e,n,""+e[n])}}function zc(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),a="";return e&&(a=Uc(e)?e.checked?"true":"false":e.value),e=a,e!==t?(n.setValue(e),!0):!1}function Ul(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ud=/[\n"\\]/g;function rn(e){return e.replace(ud,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function au(e,n,t,a,l,i,u,s){e.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.type=u:e.removeAttribute("type"),n!=null?u==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+on(n)):e.value!==""+on(n)&&(e.value=""+on(n)):u!=="submit"&&u!=="reset"||e.removeAttribute("value"),n!=null?lu(e,u,on(n)):t!=null?lu(e,u,on(t)):a!=null&&e.removeAttribute("value"),l==null&&i!=null&&(e.defaultChecked=!!i),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.name=""+on(s):e.removeAttribute("name")}function qc(e,n,t,a,l,i,u,s){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),n!=null||t!=null){if(!(i!=="submit"&&i!=="reset"||n!=null)){tu(e);return}t=t!=null?""+on(t):"",n=n!=null?""+on(n):t,s||n===e.value||(e.value=n),e.defaultValue=n}a=a??l,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=s?e.checked:!!a,e.defaultChecked=!!a,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.name=u),tu(e)}function lu(e,n,t){n==="number"&&Ul(e.ownerDocument)===e||e.defaultValue===""+t||(e.defaultValue=""+t)}function Kt(e,n,t,a){if(e=e.options,n){n={};for(var l=0;l<t.length;l++)n["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=n.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&a&&(e[t].defaultSelected=!0)}else{for(t=""+on(t),n=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,a&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function Hc(e,n,t){if(n!=null&&(n=""+on(n),n!==e.value&&(e.value=n),t==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=t!=null?""+on(t):""}function Lc(e,n,t,a){if(n==null){if(a!=null){if(t!=null)throw Error(c(92));if(Sn(a)){if(1<a.length)throw Error(c(93));a=a[0]}t=a}t==null&&(t=""),n=t}t=on(n),e.defaultValue=t,a=e.textContent,a===t&&a!==""&&a!==null&&(e.value=a),tu(e)}function It(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var sd=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Bc(e,n,t){var a=n.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?a?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":a?e.setProperty(n,t):typeof t!="number"||t===0||sd.has(n)?n==="float"?e.cssFloat=t:e[n]=(""+t).trim():e[n]=t+"px"}function Qc(e,n,t){if(n!=null&&typeof n!="object")throw Error(c(62));if(e=e.style,t!=null){for(var a in t)!t.hasOwnProperty(a)||n!=null&&n.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var l in n)a=n[l],n.hasOwnProperty(l)&&t[l]!==a&&Bc(e,l,a)}else for(var i in n)n.hasOwnProperty(i)&&Bc(e,i,n[i])}function iu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),od=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function zl(e){return od.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Un(){}var uu=null;function su(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Pt=null,Ft=null;function Gc(e){var n=Zt(e);if(n&&(e=n.stateNode)){var t=e[Ye]||null;e:switch(e=n.stateNode,n.type){case"input":if(au(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+rn(""+n)+'"][type="radio"]'),n=0;n<t.length;n++){var a=t[n];if(a!==e&&a.form===e.form){var l=a[Ye]||null;if(!l)throw Error(c(90));au(a,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(n=0;n<t.length;n++)a=t[n],a.form===e.form&&zc(a)}break e;case"textarea":Hc(e,t.value,t.defaultValue);break e;case"select":n=t.value,n!=null&&Kt(e,!!t.multiple,n,!1)}}}var cu=!1;function Yc(e,n,t){if(cu)return e(n,t);cu=!0;try{var a=e(n);return a}finally{if(cu=!1,(Pt!==null||Ft!==null)&&(Ci(),Pt&&(n=Pt,e=Ft,Ft=Pt=null,Gc(n),e)))for(n=0;n<e.length;n++)Gc(e[n])}}function za(e,n){var t=e.stateNode;if(t===null)return null;var a=t[Ye]||null;if(a===null)return null;t=a[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(c(231,n,typeof t));return t}var zn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ou=!1;if(zn)try{var qa={};Object.defineProperty(qa,"passive",{get:function(){ou=!0}}),window.addEventListener("test",qa,qa),window.removeEventListener("test",qa,qa)}catch{ou=!1}var Wn=null,ru=null,ql=null;function $c(){if(ql)return ql;var e,n=ru,t=n.length,a,l="value"in Wn?Wn.value:Wn.textContent,i=l.length;for(e=0;e<t&&n[e]===l[e];e++);var u=t-e;for(a=1;a<=u&&n[t-a]===l[i-a];a++);return ql=l.slice(e,1<a?1-a:void 0)}function Hl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Ll(){return!0}function Vc(){return!1}function $e(e){function n(t,a,l,i,u){this._reactName=t,this._targetInst=l,this.type=a,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ll:Vc,this.isPropagationStopped=Vc,this}return B(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Ll)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Ll)},persist:function(){},isPersistent:Ll}),n}var Nt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bl=$e(Nt),Ha=B({},Nt,{view:0,detail:0}),rd=$e(Ha),fu,pu,La,Ql=B({},Ha,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==La&&(La&&e.type==="mousemove"?(fu=e.screenX-La.screenX,pu=e.screenY-La.screenY):pu=fu=0,La=e),fu)},movementY:function(e){return"movementY"in e?e.movementY:pu}}),Xc=$e(Ql),fd=B({},Ql,{dataTransfer:0}),pd=$e(fd),dd=B({},Ha,{relatedTarget:0}),du=$e(dd),md=B({},Nt,{animationName:0,elapsedTime:0,pseudoElement:0}),vd=$e(md),hd=B({},Nt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gd=$e(hd),yd=B({},Nt,{data:0}),Zc=$e(yd),Sd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ad(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Cd[e])?!!n[e]:!1}function mu(){return Ad}var Ed=B({},Ha,{key:function(e){if(e.key){var n=Sd[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Hl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?bd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mu,charCode:function(e){return e.type==="keypress"?Hl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Hl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),xd=$e(Ed),Td=B({},Ql,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wc=$e(Td),Nd=B({},Ha,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mu}),Dd=$e(Nd),Md=B({},Nt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Rd=$e(Md),_d=B({},Ql,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Od=$e(_d),jd=B({},Nt,{newState:0,oldState:0}),Ud=$e(jd),zd=[9,13,27,32],vu=zn&&"CompositionEvent"in window,Ba=null;zn&&"documentMode"in document&&(Ba=document.documentMode);var qd=zn&&"TextEvent"in window&&!Ba,Jc=zn&&(!vu||Ba&&8<Ba&&11>=Ba),Kc=" ",Ic=!1;function Pc(e,n){switch(e){case"keyup":return zd.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var kt=!1;function Hd(e,n){switch(e){case"compositionend":return Fc(n);case"keypress":return n.which!==32?null:(Ic=!0,Kc);case"textInput":return e=n.data,e===Kc&&Ic?null:e;default:return null}}function Ld(e,n){if(kt)return e==="compositionend"||!vu&&Pc(e,n)?(e=$c(),ql=ru=Wn=null,kt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Jc&&n.locale!=="ko"?null:n.data;default:return null}}var Bd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Bd[e.type]:n==="textarea"}function Wc(e,n,t,a){Pt?Ft?Ft.push(a):Ft=[a]:Pt=a,n=Mi(n,"onChange"),0<n.length&&(t=new Bl("onChange","change",null,t,a),e.push({event:t,listeners:n}))}var Qa=null,Ga=null;function Qd(e){Lf(e,0)}function Gl(e){var n=Ua(e);if(zc(n))return e}function eo(e,n){if(e==="change")return n}var no=!1;if(zn){var hu;if(zn){var gu="oninput"in document;if(!gu){var to=document.createElement("div");to.setAttribute("oninput","return;"),gu=typeof to.oninput=="function"}hu=gu}else hu=!1;no=hu&&(!document.documentMode||9<document.documentMode)}function ao(){Qa&&(Qa.detachEvent("onpropertychange",lo),Ga=Qa=null)}function lo(e){if(e.propertyName==="value"&&Gl(Ga)){var n=[];Wc(n,Ga,e,su(e)),Yc(Qd,n)}}function Gd(e,n,t){e==="focusin"?(ao(),Qa=n,Ga=t,Qa.attachEvent("onpropertychange",lo)):e==="focusout"&&ao()}function Yd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Gl(Ga)}function $d(e,n){if(e==="click")return Gl(n)}function Vd(e,n){if(e==="input"||e==="change")return Gl(n)}function Xd(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var We=typeof Object.is=="function"?Object.is:Xd;function Ya(e,n){if(We(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),a=Object.keys(n);if(t.length!==a.length)return!1;for(a=0;a<t.length;a++){var l=t[a];if(!Ki.call(n,l)||!We(e[l],n[l]))return!1}return!0}function io(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function uo(e,n){var t=io(e);e=0;for(var a;t;){if(t.nodeType===3){if(a=e+t.textContent.length,e<=n&&a>=n)return{node:t,offset:n-e};e=a}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=io(t)}}function so(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?so(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function co(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Ul(e.document);n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Ul(e.document)}return n}function yu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Zd=zn&&"documentMode"in document&&11>=document.documentMode,Wt=null,Su=null,$a=null,bu=!1;function oo(e,n,t){var a=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;bu||Wt==null||Wt!==Ul(a)||(a=Wt,"selectionStart"in a&&yu(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),$a&&Ya($a,a)||($a=a,a=Mi(Su,"onSelect"),0<a.length&&(n=new Bl("onSelect","select",null,n,t),e.push({event:n,listeners:a}),n.target=Wt)))}function Dt(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var ea={animationend:Dt("Animation","AnimationEnd"),animationiteration:Dt("Animation","AnimationIteration"),animationstart:Dt("Animation","AnimationStart"),transitionrun:Dt("Transition","TransitionRun"),transitionstart:Dt("Transition","TransitionStart"),transitioncancel:Dt("Transition","TransitionCancel"),transitionend:Dt("Transition","TransitionEnd")},Cu={},ro={};zn&&(ro=document.createElement("div").style,"AnimationEvent"in window||(delete ea.animationend.animation,delete ea.animationiteration.animation,delete ea.animationstart.animation),"TransitionEvent"in window||delete ea.transitionend.transition);function Mt(e){if(Cu[e])return Cu[e];if(!ea[e])return e;var n=ea[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in ro)return Cu[e]=n[t];return e}var fo=Mt("animationend"),po=Mt("animationiteration"),mo=Mt("animationstart"),wd=Mt("transitionrun"),Jd=Mt("transitionstart"),Kd=Mt("transitioncancel"),vo=Mt("transitionend"),ho=new Map,Au="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Au.push("scrollEnd");function bn(e,n){ho.set(e,n),Tt(n,[e])}var Yl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},fn=[],na=0,Eu=0;function $l(){for(var e=na,n=Eu=na=0;n<e;){var t=fn[n];fn[n++]=null;var a=fn[n];fn[n++]=null;var l=fn[n];fn[n++]=null;var i=fn[n];if(fn[n++]=null,a!==null&&l!==null){var u=a.pending;u===null?l.next=l:(l.next=u.next,u.next=l),a.pending=l}i!==0&&go(t,l,i)}}function Vl(e,n,t,a){fn[na++]=e,fn[na++]=n,fn[na++]=t,fn[na++]=a,Eu|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function xu(e,n,t,a){return Vl(e,n,t,a),Xl(e)}function Rt(e,n){return Vl(e,null,null,n),Xl(e)}function go(e,n,t){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t);for(var l=!1,i=e.return;i!==null;)i.childLanes|=t,a=i.alternate,a!==null&&(a.childLanes|=t),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(l=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,l&&n!==null&&(l=31-ke(t),e=i.hiddenUpdates,a=e[l],a===null?e[l]=[n]:a.push(n),n.lane=t|536870912),i):null}function Xl(e){if(50<rl)throw rl=0,Us=null,Error(c(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var ta={};function Id(e,n,t,a){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function en(e,n,t,a){return new Id(e,n,t,a)}function Tu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function qn(e,n){var t=e.alternate;return t===null?(t=en(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&65011712,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function yo(e,n){e.flags&=65011714;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,n=t.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Zl(e,n,t,a,l,i){var u=0;if(a=e,typeof e=="function")Tu(e)&&(u=1);else if(typeof e=="string")u=ev(e,t,z.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case xn:return e=en(31,t,n,l),e.elementType=xn,e.lanes=i,e;case ze:return _t(t.children,l,i,n);case _n:u=8,l|=24;break;case Ie:return e=en(12,t,n,l|2),e.elementType=Ie,e.lanes=i,e;case En:return e=en(13,t,n,l),e.elementType=En,e.lanes=i,e;case Be:return e=en(19,t,n,l),e.elementType=Be,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case je:u=10;break e;case Pn:u=9;break e;case cn:u=11;break e;case F:u=14;break e;case Qe:u=16,a=null;break e}u=29,t=Error(c(130,e===null?"null":typeof e,"")),a=null}return n=en(u,t,n,l),n.elementType=e,n.type=a,n.lanes=i,n}function _t(e,n,t,a){return e=en(7,e,a,n),e.lanes=t,e}function Nu(e,n,t){return e=en(6,e,null,n),e.lanes=t,e}function So(e){var n=en(18,null,null,0);return n.stateNode=e,n}function Du(e,n,t){return n=en(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var bo=new WeakMap;function pn(e,n){if(typeof e=="object"&&e!==null){var t=bo.get(e);return t!==void 0?t:(n={value:e,source:n,stack:yc(n)},bo.set(e,n),n)}return{value:e,source:n,stack:yc(n)}}var aa=[],la=0,wl=null,Va=0,dn=[],mn=0,et=null,Nn=1,Dn="";function Hn(e,n){aa[la++]=Va,aa[la++]=wl,wl=e,Va=n}function Co(e,n,t){dn[mn++]=Nn,dn[mn++]=Dn,dn[mn++]=et,et=e;var a=Nn;e=Dn;var l=32-ke(a)-1;a&=~(1<<l),t+=1;var i=32-ke(n)+l;if(30<i){var u=l-l%5;i=(a&(1<<u)-1).toString(32),a>>=u,l-=u,Nn=1<<32-ke(n)+l|t<<l|a,Dn=i+e}else Nn=1<<i|t<<l|a,Dn=e}function Mu(e){e.return!==null&&(Hn(e,1),Co(e,1,0))}function Ru(e){for(;e===wl;)wl=aa[--la],aa[la]=null,Va=aa[--la],aa[la]=null;for(;e===et;)et=dn[--mn],dn[mn]=null,Dn=dn[--mn],dn[mn]=null,Nn=dn[--mn],dn[mn]=null}function Ao(e,n){dn[mn++]=Nn,dn[mn++]=Dn,dn[mn++]=et,Nn=n.id,Dn=n.overflow,et=e}var Me=null,fe=null,k=!1,nt=null,vn=!1,_u=Error(c(519));function tt(e){var n=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Xa(pn(n,e)),_u}function Eo(e){var n=e.stateNode,t=e.type,a=e.memoizedProps;switch(n[De]=e,n[Ye]=a,t){case"dialog":K("cancel",n),K("close",n);break;case"iframe":case"object":case"embed":K("load",n);break;case"video":case"audio":for(t=0;t<pl.length;t++)K(pl[t],n);break;case"source":K("error",n);break;case"img":case"image":case"link":K("error",n),K("load",n);break;case"details":K("toggle",n);break;case"input":K("invalid",n),qc(n,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":K("invalid",n);break;case"textarea":K("invalid",n),Lc(n,a.value,a.defaultValue,a.children)}t=a.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||n.textContent===""+t||a.suppressHydrationWarning===!0||Yf(n.textContent,t)?(a.popover!=null&&(K("beforetoggle",n),K("toggle",n)),a.onScroll!=null&&K("scroll",n),a.onScrollEnd!=null&&K("scrollend",n),a.onClick!=null&&(n.onclick=Un),n=!0):n=!1,n||tt(e,!0)}function xo(e){for(Me=e.return;Me;)switch(Me.tag){case 5:case 31:case 13:vn=!1;return;case 27:case 3:vn=!0;return;default:Me=Me.return}}function ia(e){if(e!==Me)return!1;if(!k)return xo(e),k=!0,!1;var n=e.tag,t;if((t=n!==3&&n!==27)&&((t=n===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||Ks(e.type,e.memoizedProps)),t=!t),t&&fe&&tt(e),xo(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));fe=Pf(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));fe=Pf(e)}else n===27?(n=fe,ht(e.type)?(e=Ws,Ws=null,fe=e):fe=n):fe=Me?gn(e.stateNode.nextSibling):null;return!0}function Ot(){fe=Me=null,k=!1}function Ou(){var e=nt;return e!==null&&(we===null?we=e:we.push.apply(we,e),nt=null),e}function Xa(e){nt===null?nt=[e]:nt.push(e)}var ju=f(null),jt=null,Ln=null;function at(e,n,t){_(ju,n._currentValue),n._currentValue=t}function Bn(e){e._currentValue=ju.current,x(ju)}function Uu(e,n,t){for(;e!==null;){var a=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,a!==null&&(a.childLanes|=n)):a!==null&&(a.childLanes&n)!==n&&(a.childLanes|=n),e===t)break;e=e.return}}function zu(e,n,t,a){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var i=l.dependencies;if(i!==null){var u=l.child;i=i.firstContext;e:for(;i!==null;){var s=i;i=l;for(var o=0;o<n.length;o++)if(s.context===n[o]){i.lanes|=t,s=i.alternate,s!==null&&(s.lanes|=t),Uu(i.return,t,e),a||(u=null);break e}i=s.next}}else if(l.tag===18){if(u=l.return,u===null)throw Error(c(341));u.lanes|=t,i=u.alternate,i!==null&&(i.lanes|=t),Uu(u,t,e),u=null}else u=l.child;if(u!==null)u.return=l;else for(u=l;u!==null;){if(u===e){u=null;break}if(l=u.sibling,l!==null){l.return=u.return,u=l;break}u=u.return}l=u}}function ua(e,n,t,a){e=null;for(var l=n,i=!1;l!==null;){if(!i){if((l.flags&524288)!==0)i=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var u=l.alternate;if(u===null)throw Error(c(387));if(u=u.memoizedProps,u!==null){var s=l.type;We(l.pendingProps.value,u.value)||(e!==null?e.push(s):e=[s])}}else if(l===te.current){if(u=l.alternate,u===null)throw Error(c(387));u.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(gl):e=[gl])}l=l.return}e!==null&&zu(n,e,t,a),n.flags|=262144}function Jl(e){for(e=e.firstContext;e!==null;){if(!We(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ut(e){jt=e,Ln=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Re(e){return To(jt,e)}function Kl(e,n){return jt===null&&Ut(e),To(e,n)}function To(e,n){var t=n._currentValue;if(n={context:n,memoizedValue:t,next:null},Ln===null){if(e===null)throw Error(c(308));Ln=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Ln=Ln.next=n;return t}var Pd=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(t,a){e.push(a)}};this.abort=function(){n.aborted=!0,e.forEach(function(t){return t()})}},Fd=h.unstable_scheduleCallback,kd=h.unstable_NormalPriority,be={$$typeof:je,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function qu(){return{controller:new Pd,data:new Map,refCount:0}}function Za(e){e.refCount--,e.refCount===0&&Fd(kd,function(){e.controller.abort()})}var wa=null,Hu=0,sa=0,ca=null;function Wd(e,n){if(wa===null){var t=wa=[];Hu=0,sa=Qs(),ca={status:"pending",value:void 0,then:function(a){t.push(a)}}}return Hu++,n.then(No,No),n}function No(){if(--Hu===0&&wa!==null){ca!==null&&(ca.status="fulfilled");var e=wa;wa=null,sa=0,ca=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function em(e,n){var t=[],a={status:"pending",value:null,reason:null,then:function(l){t.push(l)}};return e.then(function(){a.status="fulfilled",a.value=n;for(var l=0;l<t.length;l++)(0,t[l])(n)},function(l){for(a.status="rejected",a.reason=l,l=0;l<t.length;l++)(0,t[l])(void 0)}),a}var Do=b.S;b.S=function(e,n){ff=Pe(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Wd(e,n),Do!==null&&Do(e,n)};var zt=f(null);function Lu(){var e=zt.current;return e!==null?e:re.pooledCache}function Il(e,n){n===null?_(zt,zt.current):_(zt,n.pool)}function Mo(){var e=Lu();return e===null?null:{parent:be._currentValue,pool:e}}var oa=Error(c(460)),Bu=Error(c(474)),Pl=Error(c(542)),Fl={then:function(){}};function Ro(e){return e=e.status,e==="fulfilled"||e==="rejected"}function _o(e,n,t){switch(t=e[t],t===void 0?e.push(n):t!==n&&(n.then(Un,Un),n=t),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,jo(e),e;default:if(typeof n.status=="string")n.then(Un,Un);else{if(e=re,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=n,e.status="pending",e.then(function(a){if(n.status==="pending"){var l=n;l.status="fulfilled",l.value=a}},function(a){if(n.status==="pending"){var l=n;l.status="rejected",l.reason=a}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,jo(e),e}throw Ht=n,oa}}function qt(e){try{var n=e._init;return n(e._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(Ht=t,oa):t}}var Ht=null;function Oo(){if(Ht===null)throw Error(c(459));var e=Ht;return Ht=null,e}function jo(e){if(e===oa||e===Pl)throw Error(c(483))}var ra=null,Ja=0;function kl(e){var n=Ja;return Ja+=1,ra===null&&(ra=[]),_o(ra,e,n)}function Ka(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Wl(e,n){throw n.$$typeof===de?Error(c(525)):(e=Object.prototype.toString.call(n),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Uo(e){function n(p,r){if(e){var d=p.deletions;d===null?(p.deletions=[r],p.flags|=16):d.push(r)}}function t(p,r){if(!e)return null;for(;r!==null;)n(p,r),r=r.sibling;return null}function a(p){for(var r=new Map;p!==null;)p.key!==null?r.set(p.key,p):r.set(p.index,p),p=p.sibling;return r}function l(p,r){return p=qn(p,r),p.index=0,p.sibling=null,p}function i(p,r,d){return p.index=d,e?(d=p.alternate,d!==null?(d=d.index,d<r?(p.flags|=67108866,r):d):(p.flags|=67108866,r)):(p.flags|=1048576,r)}function u(p){return e&&p.alternate===null&&(p.flags|=67108866),p}function s(p,r,d,C){return r===null||r.tag!==6?(r=Nu(d,p.mode,C),r.return=p,r):(r=l(r,d),r.return=p,r)}function o(p,r,d,C){var H=d.type;return H===ze?S(p,r,d.props.children,C,d.key):r!==null&&(r.elementType===H||typeof H=="object"&&H!==null&&H.$$typeof===Qe&&qt(H)===r.type)?(r=l(r,d.props),Ka(r,d),r.return=p,r):(r=Zl(d.type,d.key,d.props,null,p.mode,C),Ka(r,d),r.return=p,r)}function m(p,r,d,C){return r===null||r.tag!==4||r.stateNode.containerInfo!==d.containerInfo||r.stateNode.implementation!==d.implementation?(r=Du(d,p.mode,C),r.return=p,r):(r=l(r,d.children||[]),r.return=p,r)}function S(p,r,d,C,H){return r===null||r.tag!==7?(r=_t(d,p.mode,C,H),r.return=p,r):(r=l(r,d),r.return=p,r)}function E(p,r,d){if(typeof r=="string"&&r!==""||typeof r=="number"||typeof r=="bigint")return r=Nu(""+r,p.mode,d),r.return=p,r;if(typeof r=="object"&&r!==null){switch(r.$$typeof){case Ke:return d=Zl(r.type,r.key,r.props,null,p.mode,d),Ka(d,r),d.return=p,d;case Le:return r=Du(r,p.mode,d),r.return=p,r;case Qe:return r=qt(r),E(p,r,d)}if(Sn(r)||Ge(r))return r=_t(r,p.mode,d,null),r.return=p,r;if(typeof r.then=="function")return E(p,kl(r),d);if(r.$$typeof===je)return E(p,Kl(p,r),d);Wl(p,r)}return null}function v(p,r,d,C){var H=r!==null?r.key:null;if(typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint")return H!==null?null:s(p,r,""+d,C);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Ke:return d.key===H?o(p,r,d,C):null;case Le:return d.key===H?m(p,r,d,C):null;case Qe:return d=qt(d),v(p,r,d,C)}if(Sn(d)||Ge(d))return H!==null?null:S(p,r,d,C,null);if(typeof d.then=="function")return v(p,r,kl(d),C);if(d.$$typeof===je)return v(p,r,Kl(p,d),C);Wl(p,d)}return null}function y(p,r,d,C,H){if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return p=p.get(d)||null,s(r,p,""+C,H);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case Ke:return p=p.get(C.key===null?d:C.key)||null,o(r,p,C,H);case Le:return p=p.get(C.key===null?d:C.key)||null,m(r,p,C,H);case Qe:return C=qt(C),y(p,r,d,C,H)}if(Sn(C)||Ge(C))return p=p.get(d)||null,S(r,p,C,H,null);if(typeof C.then=="function")return y(p,r,d,kl(C),H);if(C.$$typeof===je)return y(p,r,d,Kl(r,C),H);Wl(r,C)}return null}function U(p,r,d,C){for(var H=null,W=null,q=r,X=r=0,P=null;q!==null&&X<d.length;X++){q.index>X?(P=q,q=null):P=q.sibling;var ee=v(p,q,d[X],C);if(ee===null){q===null&&(q=P);break}e&&q&&ee.alternate===null&&n(p,q),r=i(ee,r,X),W===null?H=ee:W.sibling=ee,W=ee,q=P}if(X===d.length)return t(p,q),k&&Hn(p,X),H;if(q===null){for(;X<d.length;X++)q=E(p,d[X],C),q!==null&&(r=i(q,r,X),W===null?H=q:W.sibling=q,W=q);return k&&Hn(p,X),H}for(q=a(q);X<d.length;X++)P=y(q,p,X,d[X],C),P!==null&&(e&&P.alternate!==null&&q.delete(P.key===null?X:P.key),r=i(P,r,X),W===null?H=P:W.sibling=P,W=P);return e&&q.forEach(function(Ct){return n(p,Ct)}),k&&Hn(p,X),H}function L(p,r,d,C){if(d==null)throw Error(c(151));for(var H=null,W=null,q=r,X=r=0,P=null,ee=d.next();q!==null&&!ee.done;X++,ee=d.next()){q.index>X?(P=q,q=null):P=q.sibling;var Ct=v(p,q,ee.value,C);if(Ct===null){q===null&&(q=P);break}e&&q&&Ct.alternate===null&&n(p,q),r=i(Ct,r,X),W===null?H=Ct:W.sibling=Ct,W=Ct,q=P}if(ee.done)return t(p,q),k&&Hn(p,X),H;if(q===null){for(;!ee.done;X++,ee=d.next())ee=E(p,ee.value,C),ee!==null&&(r=i(ee,r,X),W===null?H=ee:W.sibling=ee,W=ee);return k&&Hn(p,X),H}for(q=a(q);!ee.done;X++,ee=d.next())ee=y(q,p,X,ee.value,C),ee!==null&&(e&&ee.alternate!==null&&q.delete(ee.key===null?X:ee.key),r=i(ee,r,X),W===null?H=ee:W.sibling=ee,W=ee);return e&&q.forEach(function(fv){return n(p,fv)}),k&&Hn(p,X),H}function ce(p,r,d,C){if(typeof d=="object"&&d!==null&&d.type===ze&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case Ke:e:{for(var H=d.key;r!==null;){if(r.key===H){if(H=d.type,H===ze){if(r.tag===7){t(p,r.sibling),C=l(r,d.props.children),C.return=p,p=C;break e}}else if(r.elementType===H||typeof H=="object"&&H!==null&&H.$$typeof===Qe&&qt(H)===r.type){t(p,r.sibling),C=l(r,d.props),Ka(C,d),C.return=p,p=C;break e}t(p,r);break}else n(p,r);r=r.sibling}d.type===ze?(C=_t(d.props.children,p.mode,C,d.key),C.return=p,p=C):(C=Zl(d.type,d.key,d.props,null,p.mode,C),Ka(C,d),C.return=p,p=C)}return u(p);case Le:e:{for(H=d.key;r!==null;){if(r.key===H)if(r.tag===4&&r.stateNode.containerInfo===d.containerInfo&&r.stateNode.implementation===d.implementation){t(p,r.sibling),C=l(r,d.children||[]),C.return=p,p=C;break e}else{t(p,r);break}else n(p,r);r=r.sibling}C=Du(d,p.mode,C),C.return=p,p=C}return u(p);case Qe:return d=qt(d),ce(p,r,d,C)}if(Sn(d))return U(p,r,d,C);if(Ge(d)){if(H=Ge(d),typeof H!="function")throw Error(c(150));return d=H.call(d),L(p,r,d,C)}if(typeof d.then=="function")return ce(p,r,kl(d),C);if(d.$$typeof===je)return ce(p,r,Kl(p,d),C);Wl(p,d)}return typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint"?(d=""+d,r!==null&&r.tag===6?(t(p,r.sibling),C=l(r,d),C.return=p,p=C):(t(p,r),C=Nu(d,p.mode,C),C.return=p,p=C),u(p)):t(p,r)}return function(p,r,d,C){try{Ja=0;var H=ce(p,r,d,C);return ra=null,H}catch(q){if(q===oa||q===Pl)throw q;var W=en(29,q,null,p.mode);return W.lanes=C,W.return=p,W}}}var Lt=Uo(!0),zo=Uo(!1),lt=!1;function Qu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Gu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function it(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ut(e,n,t){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(ne&2)!==0){var l=a.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),a.pending=n,n=Xl(e),go(e,null,t),n}return Vl(e,a,n,t),Xl(e)}function Ia(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194048)!==0)){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,xc(e,t)}}function Yu(e,n){var t=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,t===a)){var l=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var u={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};i===null?l=i=u:i=i.next=u,t=t.next}while(t!==null);i===null?l=i=n:i=i.next=n}else l=i=n;t={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}var $u=!1;function Pa(){if($u){var e=ca;if(e!==null)throw e}}function Fa(e,n,t,a){$u=!1;var l=e.updateQueue;lt=!1;var i=l.firstBaseUpdate,u=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var o=s,m=o.next;o.next=null,u===null?i=m:u.next=m,u=o;var S=e.alternate;S!==null&&(S=S.updateQueue,s=S.lastBaseUpdate,s!==u&&(s===null?S.firstBaseUpdate=m:s.next=m,S.lastBaseUpdate=o))}if(i!==null){var E=l.baseState;u=0,S=m=o=null,s=i;do{var v=s.lane&-536870913,y=v!==s.lane;if(y?(I&v)===v:(a&v)===v){v!==0&&v===sa&&($u=!0),S!==null&&(S=S.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{var U=e,L=s;v=n;var ce=t;switch(L.tag){case 1:if(U=L.payload,typeof U=="function"){E=U.call(ce,E,v);break e}E=U;break e;case 3:U.flags=U.flags&-65537|128;case 0:if(U=L.payload,v=typeof U=="function"?U.call(ce,E,v):U,v==null)break e;E=B({},E,v);break e;case 2:lt=!0}}v=s.callback,v!==null&&(e.flags|=64,y&&(e.flags|=8192),y=l.callbacks,y===null?l.callbacks=[v]:y.push(v))}else y={lane:v,tag:s.tag,payload:s.payload,callback:s.callback,next:null},S===null?(m=S=y,o=E):S=S.next=y,u|=v;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;y=s,s=y.next,y.next=null,l.lastBaseUpdate=y,l.shared.pending=null}}while(!0);S===null&&(o=E),l.baseState=o,l.firstBaseUpdate=m,l.lastBaseUpdate=S,i===null&&(l.shared.lanes=0),ft|=u,e.lanes=u,e.memoizedState=E}}function qo(e,n){if(typeof e!="function")throw Error(c(191,e));e.call(n)}function Ho(e,n){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)qo(t[e],n)}var fa=f(null),ei=f(0);function Lo(e,n){e=Jn,_(ei,e),_(fa,n),Jn=e|n.baseLanes}function Vu(){_(ei,Jn),_(fa,fa.current)}function Xu(){Jn=ei.current,x(fa),x(ei)}var nn=f(null),hn=null;function st(e){var n=e.alternate;_(ye,ye.current&1),_(nn,e),hn===null&&(n===null||fa.current!==null||n.memoizedState!==null)&&(hn=e)}function Zu(e){_(ye,ye.current),_(nn,e),hn===null&&(hn=e)}function Bo(e){e.tag===22?(_(ye,ye.current),_(nn,e),hn===null&&(hn=e)):ct()}function ct(){_(ye,ye.current),_(nn,nn.current)}function tn(e){x(nn),hn===e&&(hn=null),x(ye)}var ye=f(0);function ni(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||Fs(t)||ks(t)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Qn=0,V=null,ue=null,Ce=null,ti=!1,pa=!1,Bt=!1,ai=0,ka=0,da=null,nm=0;function ve(){throw Error(c(321))}function wu(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!We(e[t],n[t]))return!1;return!0}function Ju(e,n,t,a,l,i){return Qn=i,V=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,b.H=e===null||e.memoizedState===null?Cr:cs,Bt=!1,i=t(a,l),Bt=!1,pa&&(i=Go(n,t,a,l)),Qo(e),i}function Qo(e){b.H=nl;var n=ue!==null&&ue.next!==null;if(Qn=0,Ce=ue=V=null,ti=!1,ka=0,da=null,n)throw Error(c(300));e===null||Ae||(e=e.dependencies,e!==null&&Jl(e)&&(Ae=!0))}function Go(e,n,t,a){V=e;var l=0;do{if(pa&&(da=null),ka=0,pa=!1,25<=l)throw Error(c(301));if(l+=1,Ce=ue=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}b.H=Ar,i=n(t,a)}while(pa);return i}function tm(){var e=b.H,n=e.useState()[0];return n=typeof n.then=="function"?Wa(n):n,e=e.useState()[0],(ue!==null?ue.memoizedState:null)!==e&&(V.flags|=1024),n}function Ku(){var e=ai!==0;return ai=0,e}function Iu(e,n,t){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~t}function Pu(e){if(ti){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}ti=!1}Qn=0,Ce=ue=V=null,pa=!1,ka=ai=0,da=null}function He(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ce===null?V.memoizedState=Ce=e:Ce=Ce.next=e,Ce}function Se(){if(ue===null){var e=V.alternate;e=e!==null?e.memoizedState:null}else e=ue.next;var n=Ce===null?V.memoizedState:Ce.next;if(n!==null)Ce=n,ue=e;else{if(e===null)throw V.alternate===null?Error(c(467)):Error(c(310));ue=e,e={memoizedState:ue.memoizedState,baseState:ue.baseState,baseQueue:ue.baseQueue,queue:ue.queue,next:null},Ce===null?V.memoizedState=Ce=e:Ce=Ce.next=e}return Ce}function li(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Wa(e){var n=ka;return ka+=1,da===null&&(da=[]),e=_o(da,e,n),n=V,(Ce===null?n.memoizedState:Ce.next)===null&&(n=n.alternate,b.H=n===null||n.memoizedState===null?Cr:cs),e}function ii(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Wa(e);if(e.$$typeof===je)return Re(e)}throw Error(c(438,String(e)))}function Fu(e){var n=null,t=V.updateQueue;if(t!==null&&(n=t.memoCache),n==null){var a=V.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(n={data:a.data.map(function(l){return l.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),t===null&&(t=li(),V.updateQueue=t),t.memoCache=n,t=n.data[n.index],t===void 0)for(t=n.data[n.index]=Array(e),a=0;a<e;a++)t[a]=$t;return n.index++,t}function Gn(e,n){return typeof n=="function"?n(e):n}function ui(e){var n=Se();return ku(n,ue,e)}function ku(e,n,t){var a=e.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=t;var l=e.baseQueue,i=a.pending;if(i!==null){if(l!==null){var u=l.next;l.next=i.next,i.next=u}n.baseQueue=l=i,a.pending=null}if(i=e.baseState,l===null)e.memoizedState=i;else{n=l.next;var s=u=null,o=null,m=n,S=!1;do{var E=m.lane&-536870913;if(E!==m.lane?(I&E)===E:(Qn&E)===E){var v=m.revertLane;if(v===0)o!==null&&(o=o.next={lane:0,revertLane:0,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null}),E===sa&&(S=!0);else if((Qn&v)===v){m=m.next,v===sa&&(S=!0);continue}else E={lane:0,revertLane:m.revertLane,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},o===null?(s=o=E,u=i):o=o.next=E,V.lanes|=v,ft|=v;E=m.action,Bt&&t(i,E),i=m.hasEagerState?m.eagerState:t(i,E)}else v={lane:E,revertLane:m.revertLane,gesture:m.gesture,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},o===null?(s=o=v,u=i):o=o.next=v,V.lanes|=E,ft|=E;m=m.next}while(m!==null&&m!==n);if(o===null?u=i:o.next=s,!We(i,e.memoizedState)&&(Ae=!0,S&&(t=ca,t!==null)))throw t;e.memoizedState=i,e.baseState=u,e.baseQueue=o,a.lastRenderedState=i}return l===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Wu(e){var n=Se(),t=n.queue;if(t===null)throw Error(c(311));t.lastRenderedReducer=e;var a=t.dispatch,l=t.pending,i=n.memoizedState;if(l!==null){t.pending=null;var u=l=l.next;do i=e(i,u.action),u=u.next;while(u!==l);We(i,n.memoizedState)||(Ae=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,a]}function Yo(e,n,t){var a=V,l=Se(),i=k;if(i){if(t===void 0)throw Error(c(407));t=t()}else t=n();var u=!We((ue||l).memoizedState,t);if(u&&(l.memoizedState=t,Ae=!0),l=l.queue,ts(Xo.bind(null,a,l,e),[e]),l.getSnapshot!==n||u||Ce!==null&&Ce.memoizedState.tag&1){if(a.flags|=2048,ma(9,{destroy:void 0},Vo.bind(null,a,l,t,n),null),re===null)throw Error(c(349));i||(Qn&127)!==0||$o(a,n,t)}return t}function $o(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=V.updateQueue,n===null?(n=li(),V.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Vo(e,n,t,a){n.value=t,n.getSnapshot=a,Zo(n)&&wo(e)}function Xo(e,n,t){return t(function(){Zo(n)&&wo(e)})}function Zo(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!We(e,t)}catch{return!0}}function wo(e){var n=Rt(e,2);n!==null&&Je(n,e,2)}function es(e){var n=He();if(typeof e=="function"){var t=e;if(e=t(),Bt){Fn(!0);try{t()}finally{Fn(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gn,lastRenderedState:e},n}function Jo(e,n,t,a){return e.baseState=t,ku(e,ue,typeof a=="function"?a:Gn)}function am(e,n,t,a,l){if(oi(e))throw Error(c(485));if(e=n.action,e!==null){var i={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};b.T!==null?t(!0):i.isTransition=!1,a(i),t=n.pending,t===null?(i.next=n.pending=i,Ko(n,i)):(i.next=t.next,n.pending=t.next=i)}}function Ko(e,n){var t=n.action,a=n.payload,l=e.state;if(n.isTransition){var i=b.T,u={};b.T=u;try{var s=t(l,a),o=b.S;o!==null&&o(u,s),Io(e,n,s)}catch(m){ns(e,n,m)}finally{i!==null&&u.types!==null&&(i.types=u.types),b.T=i}}else try{i=t(l,a),Io(e,n,i)}catch(m){ns(e,n,m)}}function Io(e,n,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(a){Po(e,n,a)},function(a){return ns(e,n,a)}):Po(e,n,t)}function Po(e,n,t){n.status="fulfilled",n.value=t,Fo(n),e.state=t,n=e.pending,n!==null&&(t=n.next,t===n?e.pending=null:(t=t.next,n.next=t,Ko(e,t)))}function ns(e,n,t){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do n.status="rejected",n.reason=t,Fo(n),n=n.next;while(n!==a)}e.action=null}function Fo(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function ko(e,n){return n}function Wo(e,n){if(k){var t=re.formState;if(t!==null){e:{var a=V;if(k){if(fe){n:{for(var l=fe,i=vn;l.nodeType!==8;){if(!i){l=null;break n}if(l=gn(l.nextSibling),l===null){l=null;break n}}i=l.data,l=i==="F!"||i==="F"?l:null}if(l){fe=gn(l.nextSibling),a=l.data==="F!";break e}}tt(a)}a=!1}a&&(n=t[0])}}return t=He(),t.memoizedState=t.baseState=n,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ko,lastRenderedState:n},t.queue=a,t=yr.bind(null,V,a),a.dispatch=t,a=es(!1),i=ss.bind(null,V,!1,a.queue),a=He(),l={state:n,dispatch:null,action:e,pending:null},a.queue=l,t=am.bind(null,V,l,i,t),l.dispatch=t,a.memoizedState=e,[n,t,!1]}function er(e){var n=Se();return nr(n,ue,e)}function nr(e,n,t){if(n=ku(e,n,ko)[0],e=ui(Gn)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var a=Wa(n)}catch(u){throw u===oa?Pl:u}else a=n;n=Se();var l=n.queue,i=l.dispatch;return t!==n.memoizedState&&(V.flags|=2048,ma(9,{destroy:void 0},lm.bind(null,l,t),null)),[a,i,e]}function lm(e,n){e.action=n}function tr(e){var n=Se(),t=ue;if(t!==null)return nr(n,t,e);Se(),n=n.memoizedState,t=Se();var a=t.queue.dispatch;return t.memoizedState=e,[n,a,!1]}function ma(e,n,t,a){return e={tag:e,create:t,deps:a,inst:n,next:null},n=V.updateQueue,n===null&&(n=li(),V.updateQueue=n),t=n.lastEffect,t===null?n.lastEffect=e.next=e:(a=t.next,t.next=e,e.next=a,n.lastEffect=e),e}function ar(){return Se().memoizedState}function si(e,n,t,a){var l=He();V.flags|=e,l.memoizedState=ma(1|n,{destroy:void 0},t,a===void 0?null:a)}function ci(e,n,t,a){var l=Se();a=a===void 0?null:a;var i=l.memoizedState.inst;ue!==null&&a!==null&&wu(a,ue.memoizedState.deps)?l.memoizedState=ma(n,i,t,a):(V.flags|=e,l.memoizedState=ma(1|n,i,t,a))}function lr(e,n){si(8390656,8,e,n)}function ts(e,n){ci(2048,8,e,n)}function im(e){V.flags|=4;var n=V.updateQueue;if(n===null)n=li(),V.updateQueue=n,n.events=[e];else{var t=n.events;t===null?n.events=[e]:t.push(e)}}function ir(e){var n=Se().memoizedState;return im({ref:n,nextImpl:e}),function(){if((ne&2)!==0)throw Error(c(440));return n.impl.apply(void 0,arguments)}}function ur(e,n){return ci(4,2,e,n)}function sr(e,n){return ci(4,4,e,n)}function cr(e,n){if(typeof n=="function"){e=e();var t=n(e);return function(){typeof t=="function"?t():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function or(e,n,t){t=t!=null?t.concat([e]):null,ci(4,4,cr.bind(null,n,e),t)}function as(){}function rr(e,n){var t=Se();n=n===void 0?null:n;var a=t.memoizedState;return n!==null&&wu(n,a[1])?a[0]:(t.memoizedState=[e,n],e)}function fr(e,n){var t=Se();n=n===void 0?null:n;var a=t.memoizedState;if(n!==null&&wu(n,a[1]))return a[0];if(a=e(),Bt){Fn(!0);try{e()}finally{Fn(!1)}}return t.memoizedState=[a,n],a}function ls(e,n,t){return t===void 0||(Qn&1073741824)!==0&&(I&261930)===0?e.memoizedState=n:(e.memoizedState=t,e=df(),V.lanes|=e,ft|=e,t)}function pr(e,n,t,a){return We(t,n)?t:fa.current!==null?(e=ls(e,t,a),We(e,n)||(Ae=!0),e):(Qn&42)===0||(Qn&1073741824)!==0&&(I&261930)===0?(Ae=!0,e.memoizedState=t):(e=df(),V.lanes|=e,ft|=e,n)}function dr(e,n,t,a,l){var i=R.p;R.p=i!==0&&8>i?i:8;var u=b.T,s={};b.T=s,ss(e,!1,n,t);try{var o=l(),m=b.S;if(m!==null&&m(s,o),o!==null&&typeof o=="object"&&typeof o.then=="function"){var S=em(o,a);el(e,n,S,un(e))}else el(e,n,a,un(e))}catch(E){el(e,n,{then:function(){},status:"rejected",reason:E},un())}finally{R.p=i,u!==null&&s.types!==null&&(u.types=s.types),b.T=u}}function um(){}function is(e,n,t,a){if(e.tag!==5)throw Error(c(476));var l=mr(e).queue;dr(e,l,n,Q,t===null?um:function(){return vr(e),t(a)})}function mr(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Q,baseState:Q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gn,lastRenderedState:Q},next:null};var t={};return n.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gn,lastRenderedState:t},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function vr(e){var n=mr(e);n.next===null&&(n=e.alternate.memoizedState),el(e,n.next.queue,{},un())}function us(){return Re(gl)}function hr(){return Se().memoizedState}function gr(){return Se().memoizedState}function sm(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var t=un();e=it(t);var a=ut(n,e,t);a!==null&&(Je(a,n,t),Ia(a,n,t)),n={cache:qu()},e.payload=n;return}n=n.return}}function cm(e,n,t){var a=un();t={lane:a,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},oi(e)?Sr(n,t):(t=xu(e,n,t,a),t!==null&&(Je(t,e,a),br(t,n,a)))}function yr(e,n,t){var a=un();el(e,n,t,a)}function el(e,n,t,a){var l={lane:a,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(oi(e))Sr(n,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var u=n.lastRenderedState,s=i(u,t);if(l.hasEagerState=!0,l.eagerState=s,We(s,u))return Vl(e,n,l,0),re===null&&$l(),!1}catch{}if(t=xu(e,n,l,a),t!==null)return Je(t,e,a),br(t,n,a),!0}return!1}function ss(e,n,t,a){if(a={lane:2,revertLane:Qs(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},oi(e)){if(n)throw Error(c(479))}else n=xu(e,t,a,2),n!==null&&Je(n,e,2)}function oi(e){var n=e.alternate;return e===V||n!==null&&n===V}function Sr(e,n){pa=ti=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function br(e,n,t){if((t&4194048)!==0){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,xc(e,t)}}var nl={readContext:Re,use:ii,useCallback:ve,useContext:ve,useEffect:ve,useImperativeHandle:ve,useLayoutEffect:ve,useInsertionEffect:ve,useMemo:ve,useReducer:ve,useRef:ve,useState:ve,useDebugValue:ve,useDeferredValue:ve,useTransition:ve,useSyncExternalStore:ve,useId:ve,useHostTransitionStatus:ve,useFormState:ve,useActionState:ve,useOptimistic:ve,useMemoCache:ve,useCacheRefresh:ve};nl.useEffectEvent=ve;var Cr={readContext:Re,use:ii,useCallback:function(e,n){return He().memoizedState=[e,n===void 0?null:n],e},useContext:Re,useEffect:lr,useImperativeHandle:function(e,n,t){t=t!=null?t.concat([e]):null,si(4194308,4,cr.bind(null,n,e),t)},useLayoutEffect:function(e,n){return si(4194308,4,e,n)},useInsertionEffect:function(e,n){si(4,2,e,n)},useMemo:function(e,n){var t=He();n=n===void 0?null:n;var a=e();if(Bt){Fn(!0);try{e()}finally{Fn(!1)}}return t.memoizedState=[a,n],a},useReducer:function(e,n,t){var a=He();if(t!==void 0){var l=t(n);if(Bt){Fn(!0);try{t(n)}finally{Fn(!1)}}}else l=n;return a.memoizedState=a.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},a.queue=e,e=e.dispatch=cm.bind(null,V,e),[a.memoizedState,e]},useRef:function(e){var n=He();return e={current:e},n.memoizedState=e},useState:function(e){e=es(e);var n=e.queue,t=yr.bind(null,V,n);return n.dispatch=t,[e.memoizedState,t]},useDebugValue:as,useDeferredValue:function(e,n){var t=He();return ls(t,e,n)},useTransition:function(){var e=es(!1);return e=dr.bind(null,V,e.queue,!0,!1),He().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,t){var a=V,l=He();if(k){if(t===void 0)throw Error(c(407));t=t()}else{if(t=n(),re===null)throw Error(c(349));(I&127)!==0||$o(a,n,t)}l.memoizedState=t;var i={value:t,getSnapshot:n};return l.queue=i,lr(Xo.bind(null,a,i,e),[e]),a.flags|=2048,ma(9,{destroy:void 0},Vo.bind(null,a,i,t,n),null),t},useId:function(){var e=He(),n=re.identifierPrefix;if(k){var t=Dn,a=Nn;t=(a&~(1<<32-ke(a)-1)).toString(32)+t,n="_"+n+"R_"+t,t=ai++,0<t&&(n+="H"+t.toString(32)),n+="_"}else t=nm++,n="_"+n+"r_"+t.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:us,useFormState:Wo,useActionState:Wo,useOptimistic:function(e){var n=He();n.memoizedState=n.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=t,n=ss.bind(null,V,!0,t),t.dispatch=n,[e,n]},useMemoCache:Fu,useCacheRefresh:function(){return He().memoizedState=sm.bind(null,V)},useEffectEvent:function(e){var n=He(),t={impl:e};return n.memoizedState=t,function(){if((ne&2)!==0)throw Error(c(440));return t.impl.apply(void 0,arguments)}}},cs={readContext:Re,use:ii,useCallback:rr,useContext:Re,useEffect:ts,useImperativeHandle:or,useInsertionEffect:ur,useLayoutEffect:sr,useMemo:fr,useReducer:ui,useRef:ar,useState:function(){return ui(Gn)},useDebugValue:as,useDeferredValue:function(e,n){var t=Se();return pr(t,ue.memoizedState,e,n)},useTransition:function(){var e=ui(Gn)[0],n=Se().memoizedState;return[typeof e=="boolean"?e:Wa(e),n]},useSyncExternalStore:Yo,useId:hr,useHostTransitionStatus:us,useFormState:er,useActionState:er,useOptimistic:function(e,n){var t=Se();return Jo(t,ue,e,n)},useMemoCache:Fu,useCacheRefresh:gr};cs.useEffectEvent=ir;var Ar={readContext:Re,use:ii,useCallback:rr,useContext:Re,useEffect:ts,useImperativeHandle:or,useInsertionEffect:ur,useLayoutEffect:sr,useMemo:fr,useReducer:Wu,useRef:ar,useState:function(){return Wu(Gn)},useDebugValue:as,useDeferredValue:function(e,n){var t=Se();return ue===null?ls(t,e,n):pr(t,ue.memoizedState,e,n)},useTransition:function(){var e=Wu(Gn)[0],n=Se().memoizedState;return[typeof e=="boolean"?e:Wa(e),n]},useSyncExternalStore:Yo,useId:hr,useHostTransitionStatus:us,useFormState:tr,useActionState:tr,useOptimistic:function(e,n){var t=Se();return ue!==null?Jo(t,ue,e,n):(t.baseState=e,[e,t.queue.dispatch])},useMemoCache:Fu,useCacheRefresh:gr};Ar.useEffectEvent=ir;function os(e,n,t,a){n=e.memoizedState,t=t(a,n),t=t==null?n:B({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var rs={enqueueSetState:function(e,n,t){e=e._reactInternals;var a=un(),l=it(a);l.payload=n,t!=null&&(l.callback=t),n=ut(e,l,a),n!==null&&(Je(n,e,a),Ia(n,e,a))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var a=un(),l=it(a);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=ut(e,l,a),n!==null&&(Je(n,e,a),Ia(n,e,a))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=un(),a=it(t);a.tag=2,n!=null&&(a.callback=n),n=ut(e,a,t),n!==null&&(Je(n,e,t),Ia(n,e,t))}};function Er(e,n,t,a,l,i,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,u):n.prototype&&n.prototype.isPureReactComponent?!Ya(t,a)||!Ya(l,i):!0}function xr(e,n,t,a){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,a),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,a),n.state!==e&&rs.enqueueReplaceState(n,n.state,null)}function Qt(e,n){var t=n;if("ref"in n){t={};for(var a in n)a!=="ref"&&(t[a]=n[a])}if(e=e.defaultProps){t===n&&(t=B({},t));for(var l in e)t[l]===void 0&&(t[l]=e[l])}return t}function Tr(e){Yl(e)}function Nr(e){console.error(e)}function Dr(e){Yl(e)}function ri(e,n){try{var t=e.onUncaughtError;t(n.value,{componentStack:n.stack})}catch(a){setTimeout(function(){throw a})}}function Mr(e,n,t){try{var a=e.onCaughtError;a(t.value,{componentStack:t.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function fs(e,n,t){return t=it(t),t.tag=3,t.payload={element:null},t.callback=function(){ri(e,n)},t}function Rr(e){return e=it(e),e.tag=3,e}function _r(e,n,t,a){var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var i=a.value;e.payload=function(){return l(i)},e.callback=function(){Mr(n,t,a)}}var u=t.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(e.callback=function(){Mr(n,t,a),typeof l!="function"&&(pt===null?pt=new Set([this]):pt.add(this));var s=a.stack;this.componentDidCatch(a.value,{componentStack:s!==null?s:""})})}function om(e,n,t,a,l){if(t.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(n=t.alternate,n!==null&&ua(n,t,l,!0),t=nn.current,t!==null){switch(t.tag){case 31:case 13:return hn===null?Ai():t.alternate===null&&he===0&&(he=3),t.flags&=-257,t.flags|=65536,t.lanes=l,a===Fl?t.flags|=16384:(n=t.updateQueue,n===null?t.updateQueue=new Set([a]):n.add(a),Hs(e,a,l)),!1;case 22:return t.flags|=65536,a===Fl?t.flags|=16384:(n=t.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([a])},t.updateQueue=n):(t=n.retryQueue,t===null?n.retryQueue=new Set([a]):t.add(a)),Hs(e,a,l)),!1}throw Error(c(435,t.tag))}return Hs(e,a,l),Ai(),!1}if(k)return n=nn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=l,a!==_u&&(e=Error(c(422),{cause:a}),Xa(pn(e,t)))):(a!==_u&&(n=Error(c(423),{cause:a}),Xa(pn(n,t))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,a=pn(a,t),l=fs(e.stateNode,a,l),Yu(e,l),he!==4&&(he=2)),!1;var i=Error(c(520),{cause:a});if(i=pn(i,t),ol===null?ol=[i]:ol.push(i),he!==4&&(he=2),n===null)return!0;a=pn(a,t),t=n;do{switch(t.tag){case 3:return t.flags|=65536,e=l&-l,t.lanes|=e,e=fs(t.stateNode,a,e),Yu(t,e),!1;case 1:if(n=t.type,i=t.stateNode,(t.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(pt===null||!pt.has(i))))return t.flags|=65536,l&=-l,t.lanes|=l,l=Rr(l),_r(l,e,t,a),Yu(t,l),!1}t=t.return}while(t!==null);return!1}var ps=Error(c(461)),Ae=!1;function _e(e,n,t,a){n.child=e===null?zo(n,null,t,a):Lt(n,e.child,t,a)}function Or(e,n,t,a,l){t=t.render;var i=n.ref;if("ref"in a){var u={};for(var s in a)s!=="ref"&&(u[s]=a[s])}else u=a;return Ut(n),a=Ju(e,n,t,u,i,l),s=Ku(),e!==null&&!Ae?(Iu(e,n,l),Yn(e,n,l)):(k&&s&&Mu(n),n.flags|=1,_e(e,n,a,l),n.child)}function jr(e,n,t,a,l){if(e===null){var i=t.type;return typeof i=="function"&&!Tu(i)&&i.defaultProps===void 0&&t.compare===null?(n.tag=15,n.type=i,Ur(e,n,i,a,l)):(e=Zl(t.type,null,a,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!bs(e,l)){var u=i.memoizedProps;if(t=t.compare,t=t!==null?t:Ya,t(u,a)&&e.ref===n.ref)return Yn(e,n,l)}return n.flags|=1,e=qn(i,a),e.ref=n.ref,e.return=n,n.child=e}function Ur(e,n,t,a,l){if(e!==null){var i=e.memoizedProps;if(Ya(i,a)&&e.ref===n.ref)if(Ae=!1,n.pendingProps=a=i,bs(e,l))(e.flags&131072)!==0&&(Ae=!0);else return n.lanes=e.lanes,Yn(e,n,l)}return ds(e,n,t,a,l)}function zr(e,n,t,a){var l=a.children,i=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((n.flags&128)!==0){if(i=i!==null?i.baseLanes|t:t,e!==null){for(a=n.child=e.child,l=0;a!==null;)l=l|a.lanes|a.childLanes,a=a.sibling;a=l&~i}else a=0,n.child=null;return qr(e,n,i,t,a)}if((t&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Il(n,i!==null?i.cachePool:null),i!==null?Lo(n,i):Vu(),Bo(n);else return a=n.lanes=536870912,qr(e,n,i!==null?i.baseLanes|t:t,t,a)}else i!==null?(Il(n,i.cachePool),Lo(n,i),ct(),n.memoizedState=null):(e!==null&&Il(n,null),Vu(),ct());return _e(e,n,l,t),n.child}function tl(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function qr(e,n,t,a,l){var i=Lu();return i=i===null?null:{parent:be._currentValue,pool:i},n.memoizedState={baseLanes:t,cachePool:i},e!==null&&Il(n,null),Vu(),Bo(n),e!==null&&ua(e,n,a,!0),n.childLanes=l,null}function fi(e,n){return n=di({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Hr(e,n,t){return Lt(n,e.child,null,t),e=fi(n,n.pendingProps),e.flags|=2,tn(n),n.memoizedState=null,e}function rm(e,n,t){var a=n.pendingProps,l=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(k){if(a.mode==="hidden")return e=fi(n,a),n.lanes=536870912,tl(null,e);if(Zu(n),(e=fe)?(e=If(e,vn),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:et!==null?{id:Nn,overflow:Dn}:null,retryLane:536870912,hydrationErrors:null},t=So(e),t.return=n,n.child=t,Me=n,fe=null)):e=null,e===null)throw tt(n);return n.lanes=536870912,null}return fi(n,a)}var i=e.memoizedState;if(i!==null){var u=i.dehydrated;if(Zu(n),l)if(n.flags&256)n.flags&=-257,n=Hr(e,n,t);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(c(558));else if(Ae||ua(e,n,t,!1),l=(t&e.childLanes)!==0,Ae||l){if(a=re,a!==null&&(u=Tc(a,t),u!==0&&u!==i.retryLane))throw i.retryLane=u,Rt(e,u),Je(a,e,u),ps;Ai(),n=Hr(e,n,t)}else e=i.treeContext,fe=gn(u.nextSibling),Me=n,k=!0,nt=null,vn=!1,e!==null&&Ao(n,e),n=fi(n,a),n.flags|=4096;return n}return e=qn(e.child,{mode:a.mode,children:a.children}),e.ref=n.ref,n.child=e,e.return=n,e}function pi(e,n){var t=n.ref;if(t===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(c(284));(e===null||e.ref!==t)&&(n.flags|=4194816)}}function ds(e,n,t,a,l){return Ut(n),t=Ju(e,n,t,a,void 0,l),a=Ku(),e!==null&&!Ae?(Iu(e,n,l),Yn(e,n,l)):(k&&a&&Mu(n),n.flags|=1,_e(e,n,t,l),n.child)}function Lr(e,n,t,a,l,i){return Ut(n),n.updateQueue=null,t=Go(n,a,t,l),Qo(e),a=Ku(),e!==null&&!Ae?(Iu(e,n,i),Yn(e,n,i)):(k&&a&&Mu(n),n.flags|=1,_e(e,n,t,i),n.child)}function Br(e,n,t,a,l){if(Ut(n),n.stateNode===null){var i=ta,u=t.contextType;typeof u=="object"&&u!==null&&(i=Re(u)),i=new t(a,i),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=rs,n.stateNode=i,i._reactInternals=n,i=n.stateNode,i.props=a,i.state=n.memoizedState,i.refs={},Qu(n),u=t.contextType,i.context=typeof u=="object"&&u!==null?Re(u):ta,i.state=n.memoizedState,u=t.getDerivedStateFromProps,typeof u=="function"&&(os(n,t,u,a),i.state=n.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&rs.enqueueReplaceState(i,i.state,null),Fa(n,a,i,l),Pa(),i.state=n.memoizedState),typeof i.componentDidMount=="function"&&(n.flags|=4194308),a=!0}else if(e===null){i=n.stateNode;var s=n.memoizedProps,o=Qt(t,s);i.props=o;var m=i.context,S=t.contextType;u=ta,typeof S=="object"&&S!==null&&(u=Re(S));var E=t.getDerivedStateFromProps;S=typeof E=="function"||typeof i.getSnapshotBeforeUpdate=="function",s=n.pendingProps!==s,S||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s||m!==u)&&xr(n,i,a,u),lt=!1;var v=n.memoizedState;i.state=v,Fa(n,a,i,l),Pa(),m=n.memoizedState,s||v!==m||lt?(typeof E=="function"&&(os(n,t,E,a),m=n.memoizedState),(o=lt||Er(n,t,o,a,v,m,u))?(S||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(n.flags|=4194308)):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=a,n.memoizedState=m),i.props=a,i.state=m,i.context=u,a=o):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),a=!1)}else{i=n.stateNode,Gu(e,n),u=n.memoizedProps,S=Qt(t,u),i.props=S,E=n.pendingProps,v=i.context,m=t.contextType,o=ta,typeof m=="object"&&m!==null&&(o=Re(m)),s=t.getDerivedStateFromProps,(m=typeof s=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==E||v!==o)&&xr(n,i,a,o),lt=!1,v=n.memoizedState,i.state=v,Fa(n,a,i,l),Pa();var y=n.memoizedState;u!==E||v!==y||lt||e!==null&&e.dependencies!==null&&Jl(e.dependencies)?(typeof s=="function"&&(os(n,t,s,a),y=n.memoizedState),(S=lt||Er(n,t,S,a,v,y,o)||e!==null&&e.dependencies!==null&&Jl(e.dependencies))?(m||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,y,o),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,y,o)),typeof i.componentDidUpdate=="function"&&(n.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&v===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&v===e.memoizedState||(n.flags|=1024),n.memoizedProps=a,n.memoizedState=y),i.props=a,i.state=y,i.context=o,a=S):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&v===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&v===e.memoizedState||(n.flags|=1024),a=!1)}return i=a,pi(e,n),a=(n.flags&128)!==0,i||a?(i=n.stateNode,t=a&&typeof t.getDerivedStateFromError!="function"?null:i.render(),n.flags|=1,e!==null&&a?(n.child=Lt(n,e.child,null,l),n.child=Lt(n,null,t,l)):_e(e,n,t,l),n.memoizedState=i.state,e=n.child):e=Yn(e,n,l),e}function Qr(e,n,t,a){return Ot(),n.flags|=256,_e(e,n,t,a),n.child}var ms={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function vs(e){return{baseLanes:e,cachePool:Mo()}}function hs(e,n,t){return e=e!==null?e.childLanes&~t:0,n&&(e|=ln),e}function Gr(e,n,t){var a=n.pendingProps,l=!1,i=(n.flags&128)!==0,u;if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(ye.current&2)!==0),u&&(l=!0,n.flags&=-129),u=(n.flags&32)!==0,n.flags&=-33,e===null){if(k){if(l?st(n):ct(),(e=fe)?(e=If(e,vn),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:et!==null?{id:Nn,overflow:Dn}:null,retryLane:536870912,hydrationErrors:null},t=So(e),t.return=n,n.child=t,Me=n,fe=null)):e=null,e===null)throw tt(n);return ks(e)?n.lanes=32:n.lanes=536870912,null}var s=a.children;return a=a.fallback,l?(ct(),l=n.mode,s=di({mode:"hidden",children:s},l),a=_t(a,l,t,null),s.return=n,a.return=n,s.sibling=a,n.child=s,a=n.child,a.memoizedState=vs(t),a.childLanes=hs(e,u,t),n.memoizedState=ms,tl(null,a)):(st(n),gs(n,s))}var o=e.memoizedState;if(o!==null&&(s=o.dehydrated,s!==null)){if(i)n.flags&256?(st(n),n.flags&=-257,n=ys(e,n,t)):n.memoizedState!==null?(ct(),n.child=e.child,n.flags|=128,n=null):(ct(),s=a.fallback,l=n.mode,a=di({mode:"visible",children:a.children},l),s=_t(s,l,t,null),s.flags|=2,a.return=n,s.return=n,a.sibling=s,n.child=a,Lt(n,e.child,null,t),a=n.child,a.memoizedState=vs(t),a.childLanes=hs(e,u,t),n.memoizedState=ms,n=tl(null,a));else if(st(n),ks(s)){if(u=s.nextSibling&&s.nextSibling.dataset,u)var m=u.dgst;u=m,a=Error(c(419)),a.stack="",a.digest=u,Xa({value:a,source:null,stack:null}),n=ys(e,n,t)}else if(Ae||ua(e,n,t,!1),u=(t&e.childLanes)!==0,Ae||u){if(u=re,u!==null&&(a=Tc(u,t),a!==0&&a!==o.retryLane))throw o.retryLane=a,Rt(e,a),Je(u,e,a),ps;Fs(s)||Ai(),n=ys(e,n,t)}else Fs(s)?(n.flags|=192,n.child=e.child,n=null):(e=o.treeContext,fe=gn(s.nextSibling),Me=n,k=!0,nt=null,vn=!1,e!==null&&Ao(n,e),n=gs(n,a.children),n.flags|=4096);return n}return l?(ct(),s=a.fallback,l=n.mode,o=e.child,m=o.sibling,a=qn(o,{mode:"hidden",children:a.children}),a.subtreeFlags=o.subtreeFlags&65011712,m!==null?s=qn(m,s):(s=_t(s,l,t,null),s.flags|=2),s.return=n,a.return=n,a.sibling=s,n.child=a,tl(null,a),a=n.child,s=e.child.memoizedState,s===null?s=vs(t):(l=s.cachePool,l!==null?(o=be._currentValue,l=l.parent!==o?{parent:o,pool:o}:l):l=Mo(),s={baseLanes:s.baseLanes|t,cachePool:l}),a.memoizedState=s,a.childLanes=hs(e,u,t),n.memoizedState=ms,tl(e.child,a)):(st(n),t=e.child,e=t.sibling,t=qn(t,{mode:"visible",children:a.children}),t.return=n,t.sibling=null,e!==null&&(u=n.deletions,u===null?(n.deletions=[e],n.flags|=16):u.push(e)),n.child=t,n.memoizedState=null,t)}function gs(e,n){return n=di({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function di(e,n){return e=en(22,e,null,n),e.lanes=0,e}function ys(e,n,t){return Lt(n,e.child,null,t),e=gs(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Yr(e,n,t){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n),Uu(e.return,n,t)}function Ss(e,n,t,a,l,i){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:a,tail:t,tailMode:l,treeForkCount:i}:(u.isBackwards=n,u.rendering=null,u.renderingStartTime=0,u.last=a,u.tail=t,u.tailMode=l,u.treeForkCount=i)}function $r(e,n,t){var a=n.pendingProps,l=a.revealOrder,i=a.tail;a=a.children;var u=ye.current,s=(u&2)!==0;if(s?(u=u&1|2,n.flags|=128):u&=1,_(ye,u),_e(e,n,a,t),a=k?Va:0,!s&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Yr(e,t,n);else if(e.tag===19)Yr(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(t=n.child,l=null;t!==null;)e=t.alternate,e!==null&&ni(e)===null&&(l=t),t=t.sibling;t=l,t===null?(l=n.child,n.child=null):(l=t.sibling,t.sibling=null),Ss(n,!1,l,t,i,a);break;case"backwards":case"unstable_legacy-backwards":for(t=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&ni(e)===null){n.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}Ss(n,!0,t,null,i,a);break;case"together":Ss(n,!1,null,null,void 0,a);break;default:n.memoizedState=null}return n.child}function Yn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),ft|=n.lanes,(t&n.childLanes)===0)if(e!==null){if(ua(e,n,t,!1),(t&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(c(153));if(n.child!==null){for(e=n.child,t=qn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=qn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function bs(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Jl(e)))}function fm(e,n,t){switch(n.tag){case 3:qe(n,n.stateNode.containerInfo),at(n,be,e.memoizedState.cache),Ot();break;case 27:case 5:Ma(n);break;case 4:qe(n,n.stateNode.containerInfo);break;case 10:at(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Zu(n),null;break;case 13:var a=n.memoizedState;if(a!==null)return a.dehydrated!==null?(st(n),n.flags|=128,null):(t&n.child.childLanes)!==0?Gr(e,n,t):(st(n),e=Yn(e,n,t),e!==null?e.sibling:null);st(n);break;case 19:var l=(e.flags&128)!==0;if(a=(t&n.childLanes)!==0,a||(ua(e,n,t,!1),a=(t&n.childLanes)!==0),l){if(a)return $r(e,n,t);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),_(ye,ye.current),a)break;return null;case 22:return n.lanes=0,zr(e,n,t,n.pendingProps);case 24:at(n,be,e.memoizedState.cache)}return Yn(e,n,t)}function Vr(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps)Ae=!0;else{if(!bs(e,t)&&(n.flags&128)===0)return Ae=!1,fm(e,n,t);Ae=(e.flags&131072)!==0}else Ae=!1,k&&(n.flags&1048576)!==0&&Co(n,Va,n.index);switch(n.lanes=0,n.tag){case 16:e:{var a=n.pendingProps;if(e=qt(n.elementType),n.type=e,typeof e=="function")Tu(e)?(a=Qt(e,a),n.tag=1,n=Br(null,n,e,a,t)):(n.tag=0,n=ds(null,n,e,a,t));else{if(e!=null){var l=e.$$typeof;if(l===cn){n.tag=11,n=Or(null,n,e,a,t);break e}else if(l===F){n.tag=14,n=jr(null,n,e,a,t);break e}}throw n=On(e)||e,Error(c(306,n,""))}}return n;case 0:return ds(e,n,n.type,n.pendingProps,t);case 1:return a=n.type,l=Qt(a,n.pendingProps),Br(e,n,a,l,t);case 3:e:{if(qe(n,n.stateNode.containerInfo),e===null)throw Error(c(387));a=n.pendingProps;var i=n.memoizedState;l=i.element,Gu(e,n),Fa(n,a,null,t);var u=n.memoizedState;if(a=u.cache,at(n,be,a),a!==i.cache&&zu(n,[be],t,!0),Pa(),a=u.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:u.cache},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){n=Qr(e,n,a,t);break e}else if(a!==l){l=pn(Error(c(424)),n),Xa(l),n=Qr(e,n,a,t);break e}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,fe=gn(e.firstChild),Me=n,k=!0,nt=null,vn=!0,t=zo(n,null,a,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Ot(),a===l){n=Yn(e,n,t);break e}_e(e,n,a,t)}n=n.child}return n;case 26:return pi(e,n),e===null?(t=np(n.type,null,n.pendingProps,null))?n.memoizedState=t:k||(t=n.type,e=n.pendingProps,a=Ri(w.current).createElement(t),a[De]=n,a[Ye]=e,Oe(a,t,e),Te(a),n.stateNode=a):n.memoizedState=np(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Ma(n),e===null&&k&&(a=n.stateNode=kf(n.type,n.pendingProps,w.current),Me=n,vn=!0,l=fe,ht(n.type)?(Ws=l,fe=gn(a.firstChild)):fe=l),_e(e,n,n.pendingProps.children,t),pi(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&k&&((l=a=fe)&&(a=Ym(a,n.type,n.pendingProps,vn),a!==null?(n.stateNode=a,Me=n,fe=gn(a.firstChild),vn=!1,l=!0):l=!1),l||tt(n)),Ma(n),l=n.type,i=n.pendingProps,u=e!==null?e.memoizedProps:null,a=i.children,Ks(l,i)?a=null:u!==null&&Ks(l,u)&&(n.flags|=32),n.memoizedState!==null&&(l=Ju(e,n,tm,null,null,t),gl._currentValue=l),pi(e,n),_e(e,n,a,t),n.child;case 6:return e===null&&k&&((e=t=fe)&&(t=$m(t,n.pendingProps,vn),t!==null?(n.stateNode=t,Me=n,fe=null,e=!0):e=!1),e||tt(n)),null;case 13:return Gr(e,n,t);case 4:return qe(n,n.stateNode.containerInfo),a=n.pendingProps,e===null?n.child=Lt(n,null,a,t):_e(e,n,a,t),n.child;case 11:return Or(e,n,n.type,n.pendingProps,t);case 7:return _e(e,n,n.pendingProps,t),n.child;case 8:return _e(e,n,n.pendingProps.children,t),n.child;case 12:return _e(e,n,n.pendingProps.children,t),n.child;case 10:return a=n.pendingProps,at(n,n.type,a.value),_e(e,n,a.children,t),n.child;case 9:return l=n.type._context,a=n.pendingProps.children,Ut(n),l=Re(l),a=a(l),n.flags|=1,_e(e,n,a,t),n.child;case 14:return jr(e,n,n.type,n.pendingProps,t);case 15:return Ur(e,n,n.type,n.pendingProps,t);case 19:return $r(e,n,t);case 31:return rm(e,n,t);case 22:return zr(e,n,t,n.pendingProps);case 24:return Ut(n),a=Re(be),e===null?(l=Lu(),l===null&&(l=re,i=qu(),l.pooledCache=i,i.refCount++,i!==null&&(l.pooledCacheLanes|=t),l=i),n.memoizedState={parent:a,cache:l},Qu(n),at(n,be,l)):((e.lanes&t)!==0&&(Gu(e,n),Fa(n,null,null,t),Pa()),l=e.memoizedState,i=n.memoizedState,l.parent!==a?(l={parent:a,cache:a},n.memoizedState=l,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=l),at(n,be,a)):(a=i.cache,at(n,be,a),a!==l.cache&&zu(n,[be],t,!0))),_e(e,n,n.pendingProps.children,t),n.child;case 29:throw n.pendingProps}throw Error(c(156,n.tag))}function $n(e){e.flags|=4}function Cs(e,n,t,a,l){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(gf())e.flags|=8192;else throw Ht=Fl,Bu}else e.flags&=-16777217}function Xr(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!up(n))if(gf())e.flags|=8192;else throw Ht=Fl,Bu}function mi(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ac():536870912,e.lanes|=n,ya|=n)}function al(e,n){if(!k)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function pe(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,a=0;if(n)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,a|=l.subtreeFlags&65011712,a|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=a,e.childLanes=t,n}function pm(e,n,t){var a=n.pendingProps;switch(Ru(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pe(n),null;case 1:return pe(n),null;case 3:return t=n.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Bn(be),ge(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(ia(n)?$n(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Ou())),pe(n),null;case 26:var l=n.type,i=n.memoizedState;return e===null?($n(n),i!==null?(pe(n),Xr(n,i)):(pe(n),Cs(n,l,null,a,t))):i?i!==e.memoizedState?($n(n),pe(n),Xr(n,i)):(pe(n),n.flags&=-16777217):(e=e.memoizedProps,e!==a&&$n(n),pe(n),Cs(n,l,e,a,t)),null;case 27:if(Tl(n),t=w.current,l=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==a&&$n(n);else{if(!a){if(n.stateNode===null)throw Error(c(166));return pe(n),null}e=z.current,ia(n)?Eo(n):(e=kf(l,a,t),n.stateNode=e,$n(n))}return pe(n),null;case 5:if(Tl(n),l=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==a&&$n(n);else{if(!a){if(n.stateNode===null)throw Error(c(166));return pe(n),null}if(i=z.current,ia(n))Eo(n);else{var u=Ri(w.current);switch(i){case 1:i=u.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:i=u.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":i=u.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":i=u.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":i=u.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?u.createElement("select",{is:a.is}):u.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?u.createElement(l,{is:a.is}):u.createElement(l)}}i[De]=n,i[Ye]=a;e:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break e;for(;u.sibling===null;){if(u.return===null||u.return===n)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=i;e:switch(Oe(i,l,a),l){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&$n(n)}}return pe(n),Cs(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,t),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==a&&$n(n);else{if(typeof a!="string"&&n.stateNode===null)throw Error(c(166));if(e=w.current,ia(n)){if(e=n.stateNode,t=n.memoizedProps,a=null,l=Me,l!==null)switch(l.tag){case 27:case 5:a=l.memoizedProps}e[De]=n,e=!!(e.nodeValue===t||a!==null&&a.suppressHydrationWarning===!0||Yf(e.nodeValue,t)),e||tt(n,!0)}else e=Ri(e).createTextNode(a),e[De]=n,n.stateNode=e}return pe(n),null;case 31:if(t=n.memoizedState,e===null||e.memoizedState!==null){if(a=ia(n),t!==null){if(e===null){if(!a)throw Error(c(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(557));e[De]=n}else Ot(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;pe(n),e=!1}else t=Ou(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=t),e=!0;if(!e)return n.flags&256?(tn(n),n):(tn(n),null);if((n.flags&128)!==0)throw Error(c(558))}return pe(n),null;case 13:if(a=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=ia(n),a!==null&&a.dehydrated!==null){if(e===null){if(!l)throw Error(c(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(c(317));l[De]=n}else Ot(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;pe(n),l=!1}else l=Ou(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return n.flags&256?(tn(n),n):(tn(n),null)}return tn(n),(n.flags&128)!==0?(n.lanes=t,n):(t=a!==null,e=e!==null&&e.memoizedState!==null,t&&(a=n.child,l=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(l=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==l&&(a.flags|=2048)),t!==e&&t&&(n.child.flags|=8192),mi(n,n.updateQueue),pe(n),null);case 4:return ge(),e===null&&Vs(n.stateNode.containerInfo),pe(n),null;case 10:return Bn(n.type),pe(n),null;case 19:if(x(ye),a=n.memoizedState,a===null)return pe(n),null;if(l=(n.flags&128)!==0,i=a.rendering,i===null)if(l)al(a,!1);else{if(he!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(i=ni(e),i!==null){for(n.flags|=128,al(a,!1),e=i.updateQueue,n.updateQueue=e,mi(n,e),n.subtreeFlags=0,e=t,t=n.child;t!==null;)yo(t,e),t=t.sibling;return _(ye,ye.current&1|2),k&&Hn(n,a.treeForkCount),n.child}e=e.sibling}a.tail!==null&&Pe()>Si&&(n.flags|=128,l=!0,al(a,!1),n.lanes=4194304)}else{if(!l)if(e=ni(i),e!==null){if(n.flags|=128,l=!0,e=e.updateQueue,n.updateQueue=e,mi(n,e),al(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!k)return pe(n),null}else 2*Pe()-a.renderingStartTime>Si&&t!==536870912&&(n.flags|=128,l=!0,al(a,!1),n.lanes=4194304);a.isBackwards?(i.sibling=n.child,n.child=i):(e=a.last,e!==null?e.sibling=i:n.child=i,a.last=i)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=Pe(),e.sibling=null,t=ye.current,_(ye,l?t&1|2:t&1),k&&Hn(n,a.treeForkCount),e):(pe(n),null);case 22:case 23:return tn(n),Xu(),a=n.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(n.flags|=8192):a&&(n.flags|=8192),a?(t&536870912)!==0&&(n.flags&128)===0&&(pe(n),n.subtreeFlags&6&&(n.flags|=8192)):pe(n),t=n.updateQueue,t!==null&&mi(n,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),a=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),a!==t&&(n.flags|=2048),e!==null&&x(zt),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),n.memoizedState.cache!==t&&(n.flags|=2048),Bn(be),pe(n),null;case 25:return null;case 30:return null}throw Error(c(156,n.tag))}function dm(e,n){switch(Ru(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Bn(be),ge(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Tl(n),null;case 31:if(n.memoizedState!==null){if(tn(n),n.alternate===null)throw Error(c(340));Ot()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(tn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(c(340));Ot()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return x(ye),null;case 4:return ge(),null;case 10:return Bn(n.type),null;case 22:case 23:return tn(n),Xu(),e!==null&&x(zt),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Bn(be),null;case 25:return null;default:return null}}function Zr(e,n){switch(Ru(n),n.tag){case 3:Bn(be),ge();break;case 26:case 27:case 5:Tl(n);break;case 4:ge();break;case 31:n.memoizedState!==null&&tn(n);break;case 13:tn(n);break;case 19:x(ye);break;case 10:Bn(n.type);break;case 22:case 23:tn(n),Xu(),e!==null&&x(zt);break;case 24:Bn(be)}}function ll(e,n){try{var t=n.updateQueue,a=t!==null?t.lastEffect:null;if(a!==null){var l=a.next;t=l;do{if((t.tag&e)===e){a=void 0;var i=t.create,u=t.inst;a=i(),u.destroy=a}t=t.next}while(t!==l)}}catch(s){le(n,n.return,s)}}function ot(e,n,t){try{var a=n.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var i=l.next;a=i;do{if((a.tag&e)===e){var u=a.inst,s=u.destroy;if(s!==void 0){u.destroy=void 0,l=n;var o=t,m=s;try{m()}catch(S){le(l,o,S)}}}a=a.next}while(a!==i)}}catch(S){le(n,n.return,S)}}function wr(e){var n=e.updateQueue;if(n!==null){var t=e.stateNode;try{Ho(n,t)}catch(a){le(e,e.return,a)}}}function Jr(e,n,t){t.props=Qt(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(a){le(e,n,a)}}function il(e,n){try{var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof t=="function"?e.refCleanup=t(a):t.current=a}}catch(l){le(e,n,l)}}function Mn(e,n){var t=e.ref,a=e.refCleanup;if(t!==null)if(typeof a=="function")try{a()}catch(l){le(e,n,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(l){le(e,n,l)}else t.current=null}function Kr(e){var n=e.type,t=e.memoizedProps,a=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":t.autoFocus&&a.focus();break e;case"img":t.src?a.src=t.src:t.srcSet&&(a.srcset=t.srcSet)}}catch(l){le(e,e.return,l)}}function As(e,n,t){try{var a=e.stateNode;qm(a,e.type,t,n),a[Ye]=n}catch(l){le(e,e.return,l)}}function Ir(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ht(e.type)||e.tag===4}function Es(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ir(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ht(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function xs(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(e,n):(n=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.appendChild(e),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Un));else if(a!==4&&(a===27&&ht(e.type)&&(t=e.stateNode,n=null),e=e.child,e!==null))for(xs(e,n,t),e=e.sibling;e!==null;)xs(e,n,t),e=e.sibling}function vi(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(a!==4&&(a===27&&ht(e.type)&&(t=e.stateNode),e=e.child,e!==null))for(vi(e,n,t),e=e.sibling;e!==null;)vi(e,n,t),e=e.sibling}function Pr(e){var n=e.stateNode,t=e.memoizedProps;try{for(var a=e.type,l=n.attributes;l.length;)n.removeAttributeNode(l[0]);Oe(n,a,t),n[De]=e,n[Ye]=t}catch(i){le(e,e.return,i)}}var Vn=!1,Ee=!1,Ts=!1,Fr=typeof WeakSet=="function"?WeakSet:Set,Ne=null;function mm(e,n){if(e=e.containerInfo,ws=Hi,e=co(e),yu(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var a=t.getSelection&&t.getSelection();if(a&&a.rangeCount!==0){t=a.anchorNode;var l=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var u=0,s=-1,o=-1,m=0,S=0,E=e,v=null;n:for(;;){for(var y;E!==t||l!==0&&E.nodeType!==3||(s=u+l),E!==i||a!==0&&E.nodeType!==3||(o=u+a),E.nodeType===3&&(u+=E.nodeValue.length),(y=E.firstChild)!==null;)v=E,E=y;for(;;){if(E===e)break n;if(v===t&&++m===l&&(s=u),v===i&&++S===a&&(o=u),(y=E.nextSibling)!==null)break;E=v,v=E.parentNode}E=y}t=s===-1||o===-1?null:{start:s,end:o}}else t=null}t=t||{start:0,end:0}}else t=null;for(Js={focusedElem:e,selectionRange:t},Hi=!1,Ne=n;Ne!==null;)if(n=Ne,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Ne=e;else for(;Ne!==null;){switch(n=Ne,i=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(t=0;t<e.length;t++)l=e[t],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,t=n,l=i.memoizedProps,i=i.memoizedState,a=t.stateNode;try{var U=Qt(t.type,l);e=a.getSnapshotBeforeUpdate(U,i),a.__reactInternalSnapshotBeforeUpdate=e}catch(L){le(t,t.return,L)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,t=e.nodeType,t===9)Ps(e);else if(t===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ps(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=n.sibling,e!==null){e.return=n.return,Ne=e;break}Ne=n.return}}function kr(e,n,t){var a=t.flags;switch(t.tag){case 0:case 11:case 15:Zn(e,t),a&4&&ll(5,t);break;case 1:if(Zn(e,t),a&4)if(e=t.stateNode,n===null)try{e.componentDidMount()}catch(u){le(t,t.return,u)}else{var l=Qt(t.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(l,n,e.__reactInternalSnapshotBeforeUpdate)}catch(u){le(t,t.return,u)}}a&64&&wr(t),a&512&&il(t,t.return);break;case 3:if(Zn(e,t),a&64&&(e=t.updateQueue,e!==null)){if(n=null,t.child!==null)switch(t.child.tag){case 27:case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}try{Ho(e,n)}catch(u){le(t,t.return,u)}}break;case 27:n===null&&a&4&&Pr(t);case 26:case 5:Zn(e,t),n===null&&a&4&&Kr(t),a&512&&il(t,t.return);break;case 12:Zn(e,t);break;case 31:Zn(e,t),a&4&&nf(e,t);break;case 13:Zn(e,t),a&4&&tf(e,t),a&64&&(e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(t=Em.bind(null,t),Vm(e,t))));break;case 22:if(a=t.memoizedState!==null||Vn,!a){n=n!==null&&n.memoizedState!==null||Ee,l=Vn;var i=Ee;Vn=a,(Ee=n)&&!i?wn(e,t,(t.subtreeFlags&8772)!==0):Zn(e,t),Vn=l,Ee=i}break;case 30:break;default:Zn(e,t)}}function Wr(e){var n=e.alternate;n!==null&&(e.alternate=null,Wr(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&nu(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var me=null,Ve=!1;function Xn(e,n,t){for(t=t.child;t!==null;)ef(e,n,t),t=t.sibling}function ef(e,n,t){if(Fe&&typeof Fe.onCommitFiberUnmount=="function")try{Fe.onCommitFiberUnmount(Ra,t)}catch{}switch(t.tag){case 26:Ee||Mn(t,n),Xn(e,n,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:Ee||Mn(t,n);var a=me,l=Ve;ht(t.type)&&(me=t.stateNode,Ve=!1),Xn(e,n,t),ml(t.stateNode),me=a,Ve=l;break;case 5:Ee||Mn(t,n);case 6:if(a=me,l=Ve,me=null,Xn(e,n,t),me=a,Ve=l,me!==null)if(Ve)try{(me.nodeType===9?me.body:me.nodeName==="HTML"?me.ownerDocument.body:me).removeChild(t.stateNode)}catch(i){le(t,n,i)}else try{me.removeChild(t.stateNode)}catch(i){le(t,n,i)}break;case 18:me!==null&&(Ve?(e=me,Jf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.stateNode),Na(e)):Jf(me,t.stateNode));break;case 4:a=me,l=Ve,me=t.stateNode.containerInfo,Ve=!0,Xn(e,n,t),me=a,Ve=l;break;case 0:case 11:case 14:case 15:ot(2,t,n),Ee||ot(4,t,n),Xn(e,n,t);break;case 1:Ee||(Mn(t,n),a=t.stateNode,typeof a.componentWillUnmount=="function"&&Jr(t,n,a)),Xn(e,n,t);break;case 21:Xn(e,n,t);break;case 22:Ee=(a=Ee)||t.memoizedState!==null,Xn(e,n,t),Ee=a;break;default:Xn(e,n,t)}}function nf(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Na(e)}catch(t){le(n,n.return,t)}}}function tf(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Na(e)}catch(t){le(n,n.return,t)}}function vm(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Fr),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Fr),n;default:throw Error(c(435,e.tag))}}function hi(e,n){var t=vm(e);n.forEach(function(a){if(!t.has(a)){t.add(a);var l=xm.bind(null,e,a);a.then(l,l)}})}function Xe(e,n){var t=n.deletions;if(t!==null)for(var a=0;a<t.length;a++){var l=t[a],i=e,u=n,s=u;e:for(;s!==null;){switch(s.tag){case 27:if(ht(s.type)){me=s.stateNode,Ve=!1;break e}break;case 5:me=s.stateNode,Ve=!1;break e;case 3:case 4:me=s.stateNode.containerInfo,Ve=!0;break e}s=s.return}if(me===null)throw Error(c(160));ef(i,u,l),me=null,Ve=!1,i=l.alternate,i!==null&&(i.return=null),l.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)af(n,e),n=n.sibling}var Cn=null;function af(e,n){var t=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Xe(n,e),Ze(e),a&4&&(ot(3,e,e.return),ll(3,e),ot(5,e,e.return));break;case 1:Xe(n,e),Ze(e),a&512&&(Ee||t===null||Mn(t,t.return)),a&64&&Vn&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?a:t.concat(a))));break;case 26:var l=Cn;if(Xe(n,e),Ze(e),a&512&&(Ee||t===null||Mn(t,t.return)),a&4){var i=t!==null?t.memoizedState:null;if(a=e.memoizedState,t===null)if(a===null)if(e.stateNode===null){e:{a=e.type,t=e.memoizedProps,l=l.ownerDocument||l;n:switch(a){case"title":i=l.getElementsByTagName("title")[0],(!i||i[ja]||i[De]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=l.createElement(a),l.head.insertBefore(i,l.querySelector("head > title"))),Oe(i,a,t),i[De]=e,Te(i),a=i;break e;case"link":var u=lp("link","href",l).get(a+(t.href||""));if(u){for(var s=0;s<u.length;s++)if(i=u[s],i.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&i.getAttribute("rel")===(t.rel==null?null:t.rel)&&i.getAttribute("title")===(t.title==null?null:t.title)&&i.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){u.splice(s,1);break n}}i=l.createElement(a),Oe(i,a,t),l.head.appendChild(i);break;case"meta":if(u=lp("meta","content",l).get(a+(t.content||""))){for(s=0;s<u.length;s++)if(i=u[s],i.getAttribute("content")===(t.content==null?null:""+t.content)&&i.getAttribute("name")===(t.name==null?null:t.name)&&i.getAttribute("property")===(t.property==null?null:t.property)&&i.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&i.getAttribute("charset")===(t.charSet==null?null:t.charSet)){u.splice(s,1);break n}}i=l.createElement(a),Oe(i,a,t),l.head.appendChild(i);break;default:throw Error(c(468,a))}i[De]=e,Te(i),a=i}e.stateNode=a}else ip(l,e.type,e.stateNode);else e.stateNode=ap(l,a,e.memoizedProps);else i!==a?(i===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):i.count--,a===null?ip(l,e.type,e.stateNode):ap(l,a,e.memoizedProps)):a===null&&e.stateNode!==null&&As(e,e.memoizedProps,t.memoizedProps)}break;case 27:Xe(n,e),Ze(e),a&512&&(Ee||t===null||Mn(t,t.return)),t!==null&&a&4&&As(e,e.memoizedProps,t.memoizedProps);break;case 5:if(Xe(n,e),Ze(e),a&512&&(Ee||t===null||Mn(t,t.return)),e.flags&32){l=e.stateNode;try{It(l,"")}catch(U){le(e,e.return,U)}}a&4&&e.stateNode!=null&&(l=e.memoizedProps,As(e,l,t!==null?t.memoizedProps:l)),a&1024&&(Ts=!0);break;case 6:if(Xe(n,e),Ze(e),a&4){if(e.stateNode===null)throw Error(c(162));a=e.memoizedProps,t=e.stateNode;try{t.nodeValue=a}catch(U){le(e,e.return,U)}}break;case 3:if(ji=null,l=Cn,Cn=_i(n.containerInfo),Xe(n,e),Cn=l,Ze(e),a&4&&t!==null&&t.memoizedState.isDehydrated)try{Na(n.containerInfo)}catch(U){le(e,e.return,U)}Ts&&(Ts=!1,lf(e));break;case 4:a=Cn,Cn=_i(e.stateNode.containerInfo),Xe(n,e),Ze(e),Cn=a;break;case 12:Xe(n,e),Ze(e);break;case 31:Xe(n,e),Ze(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,hi(e,a)));break;case 13:Xe(n,e),Ze(e),e.child.flags&8192&&e.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(yi=Pe()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,hi(e,a)));break;case 22:l=e.memoizedState!==null;var o=t!==null&&t.memoizedState!==null,m=Vn,S=Ee;if(Vn=m||l,Ee=S||o,Xe(n,e),Ee=S,Vn=m,Ze(e),a&8192)e:for(n=e.stateNode,n._visibility=l?n._visibility&-2:n._visibility|1,l&&(t===null||o||Vn||Ee||Gt(e)),t=null,n=e;;){if(n.tag===5||n.tag===26){if(t===null){o=t=n;try{if(i=o.stateNode,l)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{s=o.stateNode;var E=o.memoizedProps.style,v=E!=null&&E.hasOwnProperty("display")?E.display:null;s.style.display=v==null||typeof v=="boolean"?"":(""+v).trim()}}catch(U){le(o,o.return,U)}}}else if(n.tag===6){if(t===null){o=n;try{o.stateNode.nodeValue=l?"":o.memoizedProps}catch(U){le(o,o.return,U)}}}else if(n.tag===18){if(t===null){o=n;try{var y=o.stateNode;l?Kf(y,!0):Kf(o.stateNode,!1)}catch(U){le(o,o.return,U)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;t===n&&(t=null),n=n.return}t===n&&(t=null),n.sibling.return=n.return,n=n.sibling}a&4&&(a=e.updateQueue,a!==null&&(t=a.retryQueue,t!==null&&(a.retryQueue=null,hi(e,t))));break;case 19:Xe(n,e),Ze(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,hi(e,a)));break;case 30:break;case 21:break;default:Xe(n,e),Ze(e)}}function Ze(e){var n=e.flags;if(n&2){try{for(var t,a=e.return;a!==null;){if(Ir(a)){t=a;break}a=a.return}if(t==null)throw Error(c(160));switch(t.tag){case 27:var l=t.stateNode,i=Es(e);vi(e,i,l);break;case 5:var u=t.stateNode;t.flags&32&&(It(u,""),t.flags&=-33);var s=Es(e);vi(e,s,u);break;case 3:case 4:var o=t.stateNode.containerInfo,m=Es(e);xs(e,m,o);break;default:throw Error(c(161))}}catch(S){le(e,e.return,S)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function lf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;lf(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Zn(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)kr(e,n.alternate,n),n=n.sibling}function Gt(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:ot(4,n,n.return),Gt(n);break;case 1:Mn(n,n.return);var t=n.stateNode;typeof t.componentWillUnmount=="function"&&Jr(n,n.return,t),Gt(n);break;case 27:ml(n.stateNode);case 26:case 5:Mn(n,n.return),Gt(n);break;case 22:n.memoizedState===null&&Gt(n);break;case 30:Gt(n);break;default:Gt(n)}e=e.sibling}}function wn(e,n,t){for(t=t&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var a=n.alternate,l=e,i=n,u=i.flags;switch(i.tag){case 0:case 11:case 15:wn(l,i,t),ll(4,i);break;case 1:if(wn(l,i,t),a=i,l=a.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(m){le(a,a.return,m)}if(a=i,l=a.updateQueue,l!==null){var s=a.stateNode;try{var o=l.shared.hiddenCallbacks;if(o!==null)for(l.shared.hiddenCallbacks=null,l=0;l<o.length;l++)qo(o[l],s)}catch(m){le(a,a.return,m)}}t&&u&64&&wr(i),il(i,i.return);break;case 27:Pr(i);case 26:case 5:wn(l,i,t),t&&a===null&&u&4&&Kr(i),il(i,i.return);break;case 12:wn(l,i,t);break;case 31:wn(l,i,t),t&&u&4&&nf(l,i);break;case 13:wn(l,i,t),t&&u&4&&tf(l,i);break;case 22:i.memoizedState===null&&wn(l,i,t),il(i,i.return);break;case 30:break;default:wn(l,i,t)}n=n.sibling}}function Ns(e,n){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&Za(t))}function Ds(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Za(e))}function An(e,n,t,a){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)uf(e,n,t,a),n=n.sibling}function uf(e,n,t,a){var l=n.flags;switch(n.tag){case 0:case 11:case 15:An(e,n,t,a),l&2048&&ll(9,n);break;case 1:An(e,n,t,a);break;case 3:An(e,n,t,a),l&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Za(e)));break;case 12:if(l&2048){An(e,n,t,a),e=n.stateNode;try{var i=n.memoizedProps,u=i.id,s=i.onPostCommit;typeof s=="function"&&s(u,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(o){le(n,n.return,o)}}else An(e,n,t,a);break;case 31:An(e,n,t,a);break;case 13:An(e,n,t,a);break;case 23:break;case 22:i=n.stateNode,u=n.alternate,n.memoizedState!==null?i._visibility&2?An(e,n,t,a):ul(e,n):i._visibility&2?An(e,n,t,a):(i._visibility|=2,va(e,n,t,a,(n.subtreeFlags&10256)!==0||!1)),l&2048&&Ns(u,n);break;case 24:An(e,n,t,a),l&2048&&Ds(n.alternate,n);break;default:An(e,n,t,a)}}function va(e,n,t,a,l){for(l=l&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var i=e,u=n,s=t,o=a,m=u.flags;switch(u.tag){case 0:case 11:case 15:va(i,u,s,o,l),ll(8,u);break;case 23:break;case 22:var S=u.stateNode;u.memoizedState!==null?S._visibility&2?va(i,u,s,o,l):ul(i,u):(S._visibility|=2,va(i,u,s,o,l)),l&&m&2048&&Ns(u.alternate,u);break;case 24:va(i,u,s,o,l),l&&m&2048&&Ds(u.alternate,u);break;default:va(i,u,s,o,l)}n=n.sibling}}function ul(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var t=e,a=n,l=a.flags;switch(a.tag){case 22:ul(t,a),l&2048&&Ns(a.alternate,a);break;case 24:ul(t,a),l&2048&&Ds(a.alternate,a);break;default:ul(t,a)}n=n.sibling}}var sl=8192;function ha(e,n,t){if(e.subtreeFlags&sl)for(e=e.child;e!==null;)sf(e,n,t),e=e.sibling}function sf(e,n,t){switch(e.tag){case 26:ha(e,n,t),e.flags&sl&&e.memoizedState!==null&&nv(t,Cn,e.memoizedState,e.memoizedProps);break;case 5:ha(e,n,t);break;case 3:case 4:var a=Cn;Cn=_i(e.stateNode.containerInfo),ha(e,n,t),Cn=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=sl,sl=16777216,ha(e,n,t),sl=a):ha(e,n,t));break;default:ha(e,n,t)}}function cf(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function cl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var a=n[t];Ne=a,rf(a,e)}cf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)of(e),e=e.sibling}function of(e){switch(e.tag){case 0:case 11:case 15:cl(e),e.flags&2048&&ot(9,e,e.return);break;case 3:cl(e);break;case 12:cl(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,gi(e)):cl(e);break;default:cl(e)}}function gi(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var a=n[t];Ne=a,rf(a,e)}cf(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:ot(8,n,n.return),gi(n);break;case 22:t=n.stateNode,t._visibility&2&&(t._visibility&=-3,gi(n));break;default:gi(n)}e=e.sibling}}function rf(e,n){for(;Ne!==null;){var t=Ne;switch(t.tag){case 0:case 11:case 15:ot(8,t,n);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var a=t.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Za(t.memoizedState.cache)}if(a=t.child,a!==null)a.return=t,Ne=a;else e:for(t=e;Ne!==null;){a=Ne;var l=a.sibling,i=a.return;if(Wr(a),a===t){Ne=null;break e}if(l!==null){l.return=i,Ne=l;break e}Ne=i}}}var hm={getCacheForType:function(e){var n=Re(be),t=n.data.get(e);return t===void 0&&(t=e(),n.data.set(e,t)),t},cacheSignal:function(){return Re(be).controller.signal}},gm=typeof WeakMap=="function"?WeakMap:Map,ne=0,re=null,J=null,I=0,ae=0,an=null,rt=!1,ga=!1,Ms=!1,Jn=0,he=0,ft=0,Yt=0,Rs=0,ln=0,ya=0,ol=null,we=null,_s=!1,yi=0,ff=0,Si=1/0,bi=null,pt=null,xe=0,dt=null,Sa=null,Kn=0,Os=0,js=null,pf=null,rl=0,Us=null;function un(){return(ne&2)!==0&&I!==0?I&-I:b.T!==null?Qs():Nc()}function df(){if(ln===0)if((I&536870912)===0||k){var e=Ml;Ml<<=1,(Ml&3932160)===0&&(Ml=262144),ln=e}else ln=536870912;return e=nn.current,e!==null&&(e.flags|=32),ln}function Je(e,n,t){(e===re&&(ae===2||ae===9)||e.cancelPendingCommit!==null)&&(ba(e,0),mt(e,I,ln,!1)),Oa(e,t),((ne&2)===0||e!==re)&&(e===re&&((ne&2)===0&&(Yt|=t),he===4&&mt(e,I,ln,!1)),Rn(e))}function mf(e,n,t){if((ne&6)!==0)throw Error(c(327));var a=!t&&(n&127)===0&&(n&e.expiredLanes)===0||_a(e,n),l=a?bm(e,n):qs(e,n,!0),i=a;do{if(l===0){ga&&!a&&mt(e,n,0,!1);break}else{if(t=e.current.alternate,i&&!ym(t)){l=qs(e,n,!1),i=!1;continue}if(l===2){if(i=n,e.errorRecoveryDisabledLanes&i)var u=0;else u=e.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){n=u;e:{var s=e;l=ol;var o=s.current.memoizedState.isDehydrated;if(o&&(ba(s,u).flags|=256),u=qs(s,u,!1),u!==2){if(Ms&&!o){s.errorRecoveryDisabledLanes|=i,Yt|=i,l=4;break e}i=we,we=l,i!==null&&(we===null?we=i:we.push.apply(we,i))}l=u}if(i=!1,l!==2)continue}}if(l===1){ba(e,0),mt(e,n,0,!0);break}e:{switch(a=e,i=l,i){case 0:case 1:throw Error(c(345));case 4:if((n&4194048)!==n)break;case 6:mt(a,n,ln,!rt);break e;case 2:we=null;break;case 3:case 5:break;default:throw Error(c(329))}if((n&62914560)===n&&(l=yi+300-Pe(),10<l)){if(mt(a,n,ln,!rt),_l(a,0,!0)!==0)break e;Kn=n,a.timeoutHandle=Zf(vf.bind(null,a,t,we,bi,_s,n,ln,Yt,ya,rt,i,"Throttled",-0,0),l);break e}vf(a,t,we,bi,_s,n,ln,Yt,ya,rt,i,null,-0,0)}}break}while(!0);Rn(e)}function vf(e,n,t,a,l,i,u,s,o,m,S,E,v,y){if(e.timeoutHandle=-1,E=n.subtreeFlags,E&8192||(E&16785408)===16785408){E={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Un},sf(n,i,E);var U=(i&62914560)===i?yi-Pe():(i&4194048)===i?ff-Pe():0;if(U=tv(E,U),U!==null){Kn=i,e.cancelPendingCommit=U(Ef.bind(null,e,n,i,t,a,l,u,s,o,S,E,null,v,y)),mt(e,i,u,!m);return}}Ef(e,n,i,t,a,l,u,s,o)}function ym(e){for(var n=e;;){var t=n.tag;if((t===0||t===11||t===15)&&n.flags&16384&&(t=n.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var a=0;a<t.length;a++){var l=t[a],i=l.getSnapshot;l=l.value;try{if(!We(i(),l))return!1}catch{return!1}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function mt(e,n,t,a){n&=~Rs,n&=~Yt,e.suspendedLanes|=n,e.pingedLanes&=~n,a&&(e.warmLanes|=n),a=e.expirationTimes;for(var l=n;0<l;){var i=31-ke(l),u=1<<i;a[i]=-1,l&=~u}t!==0&&Ec(e,t,n)}function Ci(){return(ne&6)===0?(fl(0),!1):!0}function zs(){if(J!==null){if(ae===0)var e=J.return;else e=J,Ln=jt=null,Pu(e),ra=null,Ja=0,e=J;for(;e!==null;)Zr(e.alternate,e),e=e.return;J=null}}function ba(e,n){var t=e.timeoutHandle;t!==-1&&(e.timeoutHandle=-1,Bm(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),Kn=0,zs(),re=e,J=t=qn(e.current,null),I=n,ae=0,an=null,rt=!1,ga=_a(e,n),Ms=!1,ya=ln=Rs=Yt=ft=he=0,we=ol=null,_s=!1,(n&8)!==0&&(n|=n&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=n;0<a;){var l=31-ke(a),i=1<<l;n|=e[l],a&=~i}return Jn=n,$l(),t}function hf(e,n){V=null,b.H=nl,n===oa||n===Pl?(n=Oo(),ae=3):n===Bu?(n=Oo(),ae=4):ae=n===ps?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,an=n,J===null&&(he=1,ri(e,pn(n,e.current)))}function gf(){var e=nn.current;return e===null?!0:(I&4194048)===I?hn===null:(I&62914560)===I||(I&536870912)!==0?e===hn:!1}function yf(){var e=b.H;return b.H=nl,e===null?nl:e}function Sf(){var e=b.A;return b.A=hm,e}function Ai(){he=4,rt||(I&4194048)!==I&&nn.current!==null||(ga=!0),(ft&134217727)===0&&(Yt&134217727)===0||re===null||mt(re,I,ln,!1)}function qs(e,n,t){var a=ne;ne|=2;var l=yf(),i=Sf();(re!==e||I!==n)&&(bi=null,ba(e,n)),n=!1;var u=he;e:do try{if(ae!==0&&J!==null){var s=J,o=an;switch(ae){case 8:zs(),u=6;break e;case 3:case 2:case 9:case 6:nn.current===null&&(n=!0);var m=ae;if(ae=0,an=null,Ca(e,s,o,m),t&&ga){u=0;break e}break;default:m=ae,ae=0,an=null,Ca(e,s,o,m)}}Sm(),u=he;break}catch(S){hf(e,S)}while(!0);return n&&e.shellSuspendCounter++,Ln=jt=null,ne=a,b.H=l,b.A=i,J===null&&(re=null,I=0,$l()),u}function Sm(){for(;J!==null;)bf(J)}function bm(e,n){var t=ne;ne|=2;var a=yf(),l=Sf();re!==e||I!==n?(bi=null,Si=Pe()+500,ba(e,n)):ga=_a(e,n);e:do try{if(ae!==0&&J!==null){n=J;var i=an;n:switch(ae){case 1:ae=0,an=null,Ca(e,n,i,1);break;case 2:case 9:if(Ro(i)){ae=0,an=null,Cf(n);break}n=function(){ae!==2&&ae!==9||re!==e||(ae=7),Rn(e)},i.then(n,n);break e;case 3:ae=7;break e;case 4:ae=5;break e;case 7:Ro(i)?(ae=0,an=null,Cf(n)):(ae=0,an=null,Ca(e,n,i,7));break;case 5:var u=null;switch(J.tag){case 26:u=J.memoizedState;case 5:case 27:var s=J;if(u?up(u):s.stateNode.complete){ae=0,an=null;var o=s.sibling;if(o!==null)J=o;else{var m=s.return;m!==null?(J=m,Ei(m)):J=null}break n}}ae=0,an=null,Ca(e,n,i,5);break;case 6:ae=0,an=null,Ca(e,n,i,6);break;case 8:zs(),he=6;break e;default:throw Error(c(462))}}Cm();break}catch(S){hf(e,S)}while(!0);return Ln=jt=null,b.H=a,b.A=l,ne=t,J!==null?0:(re=null,I=0,$l(),he)}function Cm(){for(;J!==null&&!Xp();)bf(J)}function bf(e){var n=Vr(e.alternate,e,Jn);e.memoizedProps=e.pendingProps,n===null?Ei(e):J=n}function Cf(e){var n=e,t=n.alternate;switch(n.tag){case 15:case 0:n=Lr(t,n,n.pendingProps,n.type,void 0,I);break;case 11:n=Lr(t,n,n.pendingProps,n.type.render,n.ref,I);break;case 5:Pu(n);default:Zr(t,n),n=J=yo(n,Jn),n=Vr(t,n,Jn)}e.memoizedProps=e.pendingProps,n===null?Ei(e):J=n}function Ca(e,n,t,a){Ln=jt=null,Pu(n),ra=null,Ja=0;var l=n.return;try{if(om(e,l,n,t,I)){he=1,ri(e,pn(t,e.current)),J=null;return}}catch(i){if(l!==null)throw J=l,i;he=1,ri(e,pn(t,e.current)),J=null;return}n.flags&32768?(k||a===1?e=!0:ga||(I&536870912)!==0?e=!1:(rt=e=!0,(a===2||a===9||a===3||a===6)&&(a=nn.current,a!==null&&a.tag===13&&(a.flags|=16384))),Af(n,e)):Ei(n)}function Ei(e){var n=e;do{if((n.flags&32768)!==0){Af(n,rt);return}e=n.return;var t=pm(n.alternate,n,Jn);if(t!==null){J=t;return}if(n=n.sibling,n!==null){J=n;return}J=n=e}while(n!==null);he===0&&(he=5)}function Af(e,n){do{var t=dm(e.alternate,e);if(t!==null){t.flags&=32767,J=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!n&&(e=e.sibling,e!==null)){J=e;return}J=e=t}while(e!==null);he=6,J=null}function Ef(e,n,t,a,l,i,u,s,o){e.cancelPendingCommit=null;do xi();while(xe!==0);if((ne&6)!==0)throw Error(c(327));if(n!==null){if(n===e.current)throw Error(c(177));if(i=n.lanes|n.childLanes,i|=Eu,ed(e,t,i,u,s,o),e===re&&(J=re=null,I=0),Sa=n,dt=e,Kn=t,Os=i,js=l,pf=a,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Tm(Nl,function(){return Mf(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||a){a=b.T,b.T=null,l=R.p,R.p=2,u=ne,ne|=4;try{mm(e,n,t)}finally{ne=u,R.p=l,b.T=a}}xe=1,xf(),Tf(),Nf()}}function xf(){if(xe===1){xe=0;var e=dt,n=Sa,t=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||t){t=b.T,b.T=null;var a=R.p;R.p=2;var l=ne;ne|=4;try{af(n,e);var i=Js,u=co(e.containerInfo),s=i.focusedElem,o=i.selectionRange;if(u!==s&&s&&s.ownerDocument&&so(s.ownerDocument.documentElement,s)){if(o!==null&&yu(s)){var m=o.start,S=o.end;if(S===void 0&&(S=m),"selectionStart"in s)s.selectionStart=m,s.selectionEnd=Math.min(S,s.value.length);else{var E=s.ownerDocument||document,v=E&&E.defaultView||window;if(v.getSelection){var y=v.getSelection(),U=s.textContent.length,L=Math.min(o.start,U),ce=o.end===void 0?L:Math.min(o.end,U);!y.extend&&L>ce&&(u=ce,ce=L,L=u);var p=uo(s,L),r=uo(s,ce);if(p&&r&&(y.rangeCount!==1||y.anchorNode!==p.node||y.anchorOffset!==p.offset||y.focusNode!==r.node||y.focusOffset!==r.offset)){var d=E.createRange();d.setStart(p.node,p.offset),y.removeAllRanges(),L>ce?(y.addRange(d),y.extend(r.node,r.offset)):(d.setEnd(r.node,r.offset),y.addRange(d))}}}}for(E=[],y=s;y=y.parentNode;)y.nodeType===1&&E.push({element:y,left:y.scrollLeft,top:y.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<E.length;s++){var C=E[s];C.element.scrollLeft=C.left,C.element.scrollTop=C.top}}Hi=!!ws,Js=ws=null}finally{ne=l,R.p=a,b.T=t}}e.current=n,xe=2}}function Tf(){if(xe===2){xe=0;var e=dt,n=Sa,t=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||t){t=b.T,b.T=null;var a=R.p;R.p=2;var l=ne;ne|=4;try{kr(e,n.alternate,n)}finally{ne=l,R.p=a,b.T=t}}xe=3}}function Nf(){if(xe===4||xe===3){xe=0,Zp();var e=dt,n=Sa,t=Kn,a=pf;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?xe=5:(xe=0,Sa=dt=null,Df(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(pt=null),Wi(t),n=n.stateNode,Fe&&typeof Fe.onCommitFiberRoot=="function")try{Fe.onCommitFiberRoot(Ra,n,void 0,(n.current.flags&128)===128)}catch{}if(a!==null){n=b.T,l=R.p,R.p=2,b.T=null;try{for(var i=e.onRecoverableError,u=0;u<a.length;u++){var s=a[u];i(s.value,{componentStack:s.stack})}}finally{b.T=n,R.p=l}}(Kn&3)!==0&&xi(),Rn(e),l=e.pendingLanes,(t&261930)!==0&&(l&42)!==0?e===Us?rl++:(rl=0,Us=e):rl=0,fl(0)}}function Df(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Za(n)))}function xi(){return xf(),Tf(),Nf(),Mf()}function Mf(){if(xe!==5)return!1;var e=dt,n=Os;Os=0;var t=Wi(Kn),a=b.T,l=R.p;try{R.p=32>t?32:t,b.T=null,t=js,js=null;var i=dt,u=Kn;if(xe=0,Sa=dt=null,Kn=0,(ne&6)!==0)throw Error(c(331));var s=ne;if(ne|=4,of(i.current),uf(i,i.current,u,t),ne=s,fl(0,!1),Fe&&typeof Fe.onPostCommitFiberRoot=="function")try{Fe.onPostCommitFiberRoot(Ra,i)}catch{}return!0}finally{R.p=l,b.T=a,Df(e,n)}}function Rf(e,n,t){n=pn(t,n),n=fs(e.stateNode,n,2),e=ut(e,n,2),e!==null&&(Oa(e,2),Rn(e))}function le(e,n,t){if(e.tag===3)Rf(e,e,t);else for(;n!==null;){if(n.tag===3){Rf(n,e,t);break}else if(n.tag===1){var a=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(pt===null||!pt.has(a))){e=pn(t,e),t=Rr(2),a=ut(n,t,2),a!==null&&(_r(t,a,n,e),Oa(a,2),Rn(a));break}}n=n.return}}function Hs(e,n,t){var a=e.pingCache;if(a===null){a=e.pingCache=new gm;var l=new Set;a.set(n,l)}else l=a.get(n),l===void 0&&(l=new Set,a.set(n,l));l.has(t)||(Ms=!0,l.add(t),e=Am.bind(null,e,n,t),n.then(e,e))}function Am(e,n,t){var a=e.pingCache;a!==null&&a.delete(n),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,re===e&&(I&t)===t&&(he===4||he===3&&(I&62914560)===I&&300>Pe()-yi?(ne&2)===0&&ba(e,0):Rs|=t,ya===I&&(ya=0)),Rn(e)}function _f(e,n){n===0&&(n=Ac()),e=Rt(e,n),e!==null&&(Oa(e,n),Rn(e))}function Em(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),_f(e,t)}function xm(e,n){var t=0;switch(e.tag){case 31:case 13:var a=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(c(314))}a!==null&&a.delete(n),_f(e,t)}function Tm(e,n){return Ii(e,n)}var Ti=null,Aa=null,Ls=!1,Ni=!1,Bs=!1,vt=0;function Rn(e){e!==Aa&&e.next===null&&(Aa===null?Ti=Aa=e:Aa=Aa.next=e),Ni=!0,Ls||(Ls=!0,Dm())}function fl(e,n){if(!Bs&&Ni){Bs=!0;do for(var t=!1,a=Ti;a!==null;){if(e!==0){var l=a.pendingLanes;if(l===0)var i=0;else{var u=a.suspendedLanes,s=a.pingedLanes;i=(1<<31-ke(42|e)+1)-1,i&=l&~(u&~s),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(t=!0,zf(a,i))}else i=I,i=_l(a,a===re?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||_a(a,i)||(t=!0,zf(a,i));a=a.next}while(t);Bs=!1}}function Nm(){Of()}function Of(){Ni=Ls=!1;var e=0;vt!==0&&Lm()&&(e=vt);for(var n=Pe(),t=null,a=Ti;a!==null;){var l=a.next,i=jf(a,n);i===0?(a.next=null,t===null?Ti=l:t.next=l,l===null&&(Aa=t)):(t=a,(e!==0||(i&3)!==0)&&(Ni=!0)),a=l}xe!==0&&xe!==5||fl(e),vt!==0&&(vt=0)}function jf(e,n){for(var t=e.suspendedLanes,a=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var u=31-ke(i),s=1<<u,o=l[u];o===-1?((s&t)===0||(s&a)!==0)&&(l[u]=Wp(s,n)):o<=n&&(e.expiredLanes|=s),i&=~s}if(n=re,t=I,t=_l(e,e===n?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,t===0||e===n&&(ae===2||ae===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Pi(a),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||_a(e,t)){if(n=t&-t,n===e.callbackPriority)return n;switch(a!==null&&Pi(a),Wi(t)){case 2:case 8:t=bc;break;case 32:t=Nl;break;case 268435456:t=Cc;break;default:t=Nl}return a=Uf.bind(null,e),t=Ii(t,a),e.callbackPriority=n,e.callbackNode=t,n}return a!==null&&a!==null&&Pi(a),e.callbackPriority=2,e.callbackNode=null,2}function Uf(e,n){if(xe!==0&&xe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var t=e.callbackNode;if(xi()&&e.callbackNode!==t)return null;var a=I;return a=_l(e,e===re?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(mf(e,a,n),jf(e,Pe()),e.callbackNode!=null&&e.callbackNode===t?Uf.bind(null,e):null)}function zf(e,n){if(xi())return null;mf(e,n,!0)}function Dm(){Qm(function(){(ne&6)!==0?Ii(Sc,Nm):Of()})}function Qs(){if(vt===0){var e=sa;e===0&&(e=Dl,Dl<<=1,(Dl&261888)===0&&(Dl=256)),vt=e}return vt}function qf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:zl(""+e)}function Hf(e,n){var t=n.ownerDocument.createElement("input");return t.name=n.name,t.value=n.value,e.id&&t.setAttribute("form",e.id),n.parentNode.insertBefore(t,n),e=new FormData(e),t.parentNode.removeChild(t),e}function Mm(e,n,t,a,l){if(n==="submit"&&t&&t.stateNode===l){var i=qf((l[Ye]||null).action),u=a.submitter;u&&(n=(n=u[Ye]||null)?qf(n.formAction):u.getAttribute("formAction"),n!==null&&(i=n,u=null));var s=new Bl("action","action",null,a,l);e.push({event:s,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(vt!==0){var o=u?Hf(l,u):new FormData(l);is(t,{pending:!0,data:o,method:l.method,action:i},null,o)}}else typeof i=="function"&&(s.preventDefault(),o=u?Hf(l,u):new FormData(l),is(t,{pending:!0,data:o,method:l.method,action:i},i,o))},currentTarget:l}]})}}for(var Gs=0;Gs<Au.length;Gs++){var Ys=Au[Gs],Rm=Ys.toLowerCase(),_m=Ys[0].toUpperCase()+Ys.slice(1);bn(Rm,"on"+_m)}bn(fo,"onAnimationEnd"),bn(po,"onAnimationIteration"),bn(mo,"onAnimationStart"),bn("dblclick","onDoubleClick"),bn("focusin","onFocus"),bn("focusout","onBlur"),bn(wd,"onTransitionRun"),bn(Jd,"onTransitionStart"),bn(Kd,"onTransitionCancel"),bn(vo,"onTransitionEnd"),Jt("onMouseEnter",["mouseout","mouseover"]),Jt("onMouseLeave",["mouseout","mouseover"]),Jt("onPointerEnter",["pointerout","pointerover"]),Jt("onPointerLeave",["pointerout","pointerover"]),Tt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Tt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Tt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Tt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Tt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Tt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Om=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(pl));function Lf(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var a=e[t],l=a.event;a=a.listeners;e:{var i=void 0;if(n)for(var u=a.length-1;0<=u;u--){var s=a[u],o=s.instance,m=s.currentTarget;if(s=s.listener,o!==i&&l.isPropagationStopped())break e;i=s,l.currentTarget=m;try{i(l)}catch(S){Yl(S)}l.currentTarget=null,i=o}else for(u=0;u<a.length;u++){if(s=a[u],o=s.instance,m=s.currentTarget,s=s.listener,o!==i&&l.isPropagationStopped())break e;i=s,l.currentTarget=m;try{i(l)}catch(S){Yl(S)}l.currentTarget=null,i=o}}}}function K(e,n){var t=n[eu];t===void 0&&(t=n[eu]=new Set);var a=e+"__bubble";t.has(a)||(Bf(n,e,2,!1),t.add(a))}function $s(e,n,t){var a=0;n&&(a|=4),Bf(t,e,a,n)}var Di="_reactListening"+Math.random().toString(36).slice(2);function Vs(e){if(!e[Di]){e[Di]=!0,Rc.forEach(function(t){t!=="selectionchange"&&(Om.has(t)||$s(t,!1,e),$s(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Di]||(n[Di]=!0,$s("selectionchange",!1,n))}}function Bf(e,n,t,a){switch(dp(n)){case 2:var l=iv;break;case 8:l=uv;break;default:l=lc}t=l.bind(null,n,t,e),l=void 0,!ou||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),a?l!==void 0?e.addEventListener(n,t,{capture:!0,passive:l}):e.addEventListener(n,t,!0):l!==void 0?e.addEventListener(n,t,{passive:l}):e.addEventListener(n,t,!1)}function Xs(e,n,t,a,l){var i=a;if((n&1)===0&&(n&2)===0&&a!==null)e:for(;;){if(a===null)return;var u=a.tag;if(u===3||u===4){var s=a.stateNode.containerInfo;if(s===l)break;if(u===4)for(u=a.return;u!==null;){var o=u.tag;if((o===3||o===4)&&u.stateNode.containerInfo===l)return;u=u.return}for(;s!==null;){if(u=Xt(s),u===null)return;if(o=u.tag,o===5||o===6||o===26||o===27){a=i=u;continue e}s=s.parentNode}}a=a.return}Yc(function(){var m=i,S=su(t),E=[];e:{var v=ho.get(e);if(v!==void 0){var y=Bl,U=e;switch(e){case"keypress":if(Hl(t)===0)break e;case"keydown":case"keyup":y=xd;break;case"focusin":U="focus",y=du;break;case"focusout":U="blur",y=du;break;case"beforeblur":case"afterblur":y=du;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Xc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=pd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Dd;break;case fo:case po:case mo:y=vd;break;case vo:y=Rd;break;case"scroll":case"scrollend":y=rd;break;case"wheel":y=Od;break;case"copy":case"cut":case"paste":y=gd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=wc;break;case"toggle":case"beforetoggle":y=Ud}var L=(n&4)!==0,ce=!L&&(e==="scroll"||e==="scrollend"),p=L?v!==null?v+"Capture":null:v;L=[];for(var r=m,d;r!==null;){var C=r;if(d=C.stateNode,C=C.tag,C!==5&&C!==26&&C!==27||d===null||p===null||(C=za(r,p),C!=null&&L.push(dl(r,C,d))),ce)break;r=r.return}0<L.length&&(v=new y(v,U,null,t,S),E.push({event:v,listeners:L}))}}if((n&7)===0){e:{if(v=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",v&&t!==uu&&(U=t.relatedTarget||t.fromElement)&&(Xt(U)||U[Vt]))break e;if((y||v)&&(v=S.window===S?S:(v=S.ownerDocument)?v.defaultView||v.parentWindow:window,y?(U=t.relatedTarget||t.toElement,y=m,U=U?Xt(U):null,U!==null&&(ce=M(U),L=U.tag,U!==ce||L!==5&&L!==27&&L!==6)&&(U=null)):(y=null,U=m),y!==U)){if(L=Xc,C="onMouseLeave",p="onMouseEnter",r="mouse",(e==="pointerout"||e==="pointerover")&&(L=wc,C="onPointerLeave",p="onPointerEnter",r="pointer"),ce=y==null?v:Ua(y),d=U==null?v:Ua(U),v=new L(C,r+"leave",y,t,S),v.target=ce,v.relatedTarget=d,C=null,Xt(S)===m&&(L=new L(p,r+"enter",U,t,S),L.target=d,L.relatedTarget=ce,C=L),ce=C,y&&U)n:{for(L=jm,p=y,r=U,d=0,C=p;C;C=L(C))d++;C=0;for(var H=r;H;H=L(H))C++;for(;0<d-C;)p=L(p),d--;for(;0<C-d;)r=L(r),C--;for(;d--;){if(p===r||r!==null&&p===r.alternate){L=p;break n}p=L(p),r=L(r)}L=null}else L=null;y!==null&&Qf(E,v,y,L,!1),U!==null&&ce!==null&&Qf(E,ce,U,L,!0)}}e:{if(v=m?Ua(m):window,y=v.nodeName&&v.nodeName.toLowerCase(),y==="select"||y==="input"&&v.type==="file")var W=eo;else if(kc(v))if(no)W=Vd;else{W=Yd;var q=Gd}else y=v.nodeName,!y||y.toLowerCase()!=="input"||v.type!=="checkbox"&&v.type!=="radio"?m&&iu(m.elementType)&&(W=eo):W=$d;if(W&&(W=W(e,m))){Wc(E,W,t,S);break e}q&&q(e,v,m),e==="focusout"&&m&&v.type==="number"&&m.memoizedProps.value!=null&&lu(v,"number",v.value)}switch(q=m?Ua(m):window,e){case"focusin":(kc(q)||q.contentEditable==="true")&&(Wt=q,Su=m,$a=null);break;case"focusout":$a=Su=Wt=null;break;case"mousedown":bu=!0;break;case"contextmenu":case"mouseup":case"dragend":bu=!1,oo(E,t,S);break;case"selectionchange":if(Zd)break;case"keydown":case"keyup":oo(E,t,S)}var X;if(vu)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else kt?Pc(e,t)&&(P="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(P="onCompositionStart");P&&(Jc&&t.locale!=="ko"&&(kt||P!=="onCompositionStart"?P==="onCompositionEnd"&&kt&&(X=$c()):(Wn=S,ru="value"in Wn?Wn.value:Wn.textContent,kt=!0)),q=Mi(m,P),0<q.length&&(P=new Zc(P,e,null,t,S),E.push({event:P,listeners:q}),X?P.data=X:(X=Fc(t),X!==null&&(P.data=X)))),(X=qd?Hd(e,t):Ld(e,t))&&(P=Mi(m,"onBeforeInput"),0<P.length&&(q=new Zc("onBeforeInput","beforeinput",null,t,S),E.push({event:q,listeners:P}),q.data=X)),Mm(E,e,m,t,S)}Lf(E,n)})}function dl(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Mi(e,n){for(var t=n+"Capture",a=[];e!==null;){var l=e,i=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||i===null||(l=za(e,t),l!=null&&a.unshift(dl(e,l,i)),l=za(e,n),l!=null&&a.push(dl(e,l,i))),e.tag===3)return a;e=e.return}return[]}function jm(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Qf(e,n,t,a,l){for(var i=n._reactName,u=[];t!==null&&t!==a;){var s=t,o=s.alternate,m=s.stateNode;if(s=s.tag,o!==null&&o===a)break;s!==5&&s!==26&&s!==27||m===null||(o=m,l?(m=za(t,i),m!=null&&u.unshift(dl(t,m,o))):l||(m=za(t,i),m!=null&&u.push(dl(t,m,o)))),t=t.return}u.length!==0&&e.push({event:n,listeners:u})}var Um=/\r\n?/g,zm=/\u0000|\uFFFD/g;function Gf(e){return(typeof e=="string"?e:""+e).replace(Um,`
`).replace(zm,"")}function Yf(e,n){return n=Gf(n),Gf(e)===n}function se(e,n,t,a,l,i){switch(t){case"children":typeof a=="string"?n==="body"||n==="textarea"&&a===""||It(e,a):(typeof a=="number"||typeof a=="bigint")&&n!=="body"&&It(e,""+a);break;case"className":jl(e,"class",a);break;case"tabIndex":jl(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":jl(e,t,a);break;case"style":Qc(e,a,i);break;case"data":if(n!=="object"){jl(e,"data",a);break}case"src":case"href":if(a===""&&(n!=="a"||t!=="href")){e.removeAttribute(t);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(t);break}a=zl(""+a),e.setAttribute(t,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(t==="formAction"?(n!=="input"&&se(e,n,"name",l.name,l,null),se(e,n,"formEncType",l.formEncType,l,null),se(e,n,"formMethod",l.formMethod,l,null),se(e,n,"formTarget",l.formTarget,l,null)):(se(e,n,"encType",l.encType,l,null),se(e,n,"method",l.method,l,null),se(e,n,"target",l.target,l,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(t);break}a=zl(""+a),e.setAttribute(t,a);break;case"onClick":a!=null&&(e.onclick=Un);break;case"onScroll":a!=null&&K("scroll",e);break;case"onScrollEnd":a!=null&&K("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(t=a.__html,t!=null){if(l.children!=null)throw Error(c(60));e.innerHTML=t}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}t=zl(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,""+a):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":a===!0?e.setAttribute(t,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,a):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(t,a):e.removeAttribute(t);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(t):e.setAttribute(t,a);break;case"popover":K("beforetoggle",e),K("toggle",e),Ol(e,"popover",a);break;case"xlinkActuate":jn(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":jn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":jn(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":jn(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":jn(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":jn(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":jn(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":jn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":jn(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Ol(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=cd.get(t)||t,Ol(e,t,a))}}function Zs(e,n,t,a,l,i){switch(t){case"style":Qc(e,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(t=a.__html,t!=null){if(l.children!=null)throw Error(c(60));e.innerHTML=t}}break;case"children":typeof a=="string"?It(e,a):(typeof a=="number"||typeof a=="bigint")&&It(e,""+a);break;case"onScroll":a!=null&&K("scroll",e);break;case"onScrollEnd":a!=null&&K("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Un);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!_c.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(l=t.endsWith("Capture"),n=t.slice(2,l?t.length-7:void 0),i=e[Ye]||null,i=i!=null?i[t]:null,typeof i=="function"&&e.removeEventListener(n,i,l),typeof a=="function")){typeof i!="function"&&i!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(n,a,l);break e}t in e?e[t]=a:a===!0?e.setAttribute(t,""):Ol(e,t,a)}}}function Oe(e,n,t){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":K("error",e),K("load",e);var a=!1,l=!1,i;for(i in t)if(t.hasOwnProperty(i)){var u=t[i];if(u!=null)switch(i){case"src":a=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,n));default:se(e,n,i,u,t,null)}}l&&se(e,n,"srcSet",t.srcSet,t,null),a&&se(e,n,"src",t.src,t,null);return;case"input":K("invalid",e);var s=i=u=l=null,o=null,m=null;for(a in t)if(t.hasOwnProperty(a)){var S=t[a];if(S!=null)switch(a){case"name":l=S;break;case"type":u=S;break;case"checked":o=S;break;case"defaultChecked":m=S;break;case"value":i=S;break;case"defaultValue":s=S;break;case"children":case"dangerouslySetInnerHTML":if(S!=null)throw Error(c(137,n));break;default:se(e,n,a,S,t,null)}}qc(e,i,s,o,m,u,l,!1);return;case"select":K("invalid",e),a=u=i=null;for(l in t)if(t.hasOwnProperty(l)&&(s=t[l],s!=null))switch(l){case"value":i=s;break;case"defaultValue":u=s;break;case"multiple":a=s;default:se(e,n,l,s,t,null)}n=i,t=u,e.multiple=!!a,n!=null?Kt(e,!!a,n,!1):t!=null&&Kt(e,!!a,t,!0);return;case"textarea":K("invalid",e),i=l=a=null;for(u in t)if(t.hasOwnProperty(u)&&(s=t[u],s!=null))switch(u){case"value":a=s;break;case"defaultValue":l=s;break;case"children":i=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(c(91));break;default:se(e,n,u,s,t,null)}Lc(e,a,l,i);return;case"option":for(o in t)t.hasOwnProperty(o)&&(a=t[o],a!=null)&&(o==="selected"?e.selected=a&&typeof a!="function"&&typeof a!="symbol":se(e,n,o,a,t,null));return;case"dialog":K("beforetoggle",e),K("toggle",e),K("cancel",e),K("close",e);break;case"iframe":case"object":K("load",e);break;case"video":case"audio":for(a=0;a<pl.length;a++)K(pl[a],e);break;case"image":K("error",e),K("load",e);break;case"details":K("toggle",e);break;case"embed":case"source":case"link":K("error",e),K("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(m in t)if(t.hasOwnProperty(m)&&(a=t[m],a!=null))switch(m){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,n));default:se(e,n,m,a,t,null)}return;default:if(iu(n)){for(S in t)t.hasOwnProperty(S)&&(a=t[S],a!==void 0&&Zs(e,n,S,a,t,void 0));return}}for(s in t)t.hasOwnProperty(s)&&(a=t[s],a!=null&&se(e,n,s,a,t,null))}function qm(e,n,t,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,i=null,u=null,s=null,o=null,m=null,S=null;for(y in t){var E=t[y];if(t.hasOwnProperty(y)&&E!=null)switch(y){case"checked":break;case"value":break;case"defaultValue":o=E;default:a.hasOwnProperty(y)||se(e,n,y,null,a,E)}}for(var v in a){var y=a[v];if(E=t[v],a.hasOwnProperty(v)&&(y!=null||E!=null))switch(v){case"type":i=y;break;case"name":l=y;break;case"checked":m=y;break;case"defaultChecked":S=y;break;case"value":u=y;break;case"defaultValue":s=y;break;case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(c(137,n));break;default:y!==E&&se(e,n,v,y,a,E)}}au(e,u,s,o,m,S,i,l);return;case"select":y=u=s=v=null;for(i in t)if(o=t[i],t.hasOwnProperty(i)&&o!=null)switch(i){case"value":break;case"multiple":y=o;default:a.hasOwnProperty(i)||se(e,n,i,null,a,o)}for(l in a)if(i=a[l],o=t[l],a.hasOwnProperty(l)&&(i!=null||o!=null))switch(l){case"value":v=i;break;case"defaultValue":s=i;break;case"multiple":u=i;default:i!==o&&se(e,n,l,i,a,o)}n=s,t=u,a=y,v!=null?Kt(e,!!t,v,!1):!!a!=!!t&&(n!=null?Kt(e,!!t,n,!0):Kt(e,!!t,t?[]:"",!1));return;case"textarea":y=v=null;for(s in t)if(l=t[s],t.hasOwnProperty(s)&&l!=null&&!a.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:se(e,n,s,null,a,l)}for(u in a)if(l=a[u],i=t[u],a.hasOwnProperty(u)&&(l!=null||i!=null))switch(u){case"value":v=l;break;case"defaultValue":y=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(c(91));break;default:l!==i&&se(e,n,u,l,a,i)}Hc(e,v,y);return;case"option":for(var U in t)v=t[U],t.hasOwnProperty(U)&&v!=null&&!a.hasOwnProperty(U)&&(U==="selected"?e.selected=!1:se(e,n,U,null,a,v));for(o in a)v=a[o],y=t[o],a.hasOwnProperty(o)&&v!==y&&(v!=null||y!=null)&&(o==="selected"?e.selected=v&&typeof v!="function"&&typeof v!="symbol":se(e,n,o,v,a,y));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var L in t)v=t[L],t.hasOwnProperty(L)&&v!=null&&!a.hasOwnProperty(L)&&se(e,n,L,null,a,v);for(m in a)if(v=a[m],y=t[m],a.hasOwnProperty(m)&&v!==y&&(v!=null||y!=null))switch(m){case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(c(137,n));break;default:se(e,n,m,v,a,y)}return;default:if(iu(n)){for(var ce in t)v=t[ce],t.hasOwnProperty(ce)&&v!==void 0&&!a.hasOwnProperty(ce)&&Zs(e,n,ce,void 0,a,v);for(S in a)v=a[S],y=t[S],!a.hasOwnProperty(S)||v===y||v===void 0&&y===void 0||Zs(e,n,S,v,a,y);return}}for(var p in t)v=t[p],t.hasOwnProperty(p)&&v!=null&&!a.hasOwnProperty(p)&&se(e,n,p,null,a,v);for(E in a)v=a[E],y=t[E],!a.hasOwnProperty(E)||v===y||v==null&&y==null||se(e,n,E,v,a,y)}function $f(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Hm(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,t=performance.getEntriesByType("resource"),a=0;a<t.length;a++){var l=t[a],i=l.transferSize,u=l.initiatorType,s=l.duration;if(i&&s&&$f(u)){for(u=0,s=l.responseEnd,a+=1;a<t.length;a++){var o=t[a],m=o.startTime;if(m>s)break;var S=o.transferSize,E=o.initiatorType;S&&$f(E)&&(o=o.responseEnd,u+=S*(o<s?1:(s-m)/(o-m)))}if(--a,n+=8*(i+u)/(l.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var ws=null,Js=null;function Ri(e){return e.nodeType===9?e:e.ownerDocument}function Vf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Xf(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Ks(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Is=null;function Lm(){var e=window.event;return e&&e.type==="popstate"?e===Is?!1:(Is=e,!0):(Is=null,!1)}var Zf=typeof setTimeout=="function"?setTimeout:void 0,Bm=typeof clearTimeout=="function"?clearTimeout:void 0,wf=typeof Promise=="function"?Promise:void 0,Qm=typeof queueMicrotask=="function"?queueMicrotask:typeof wf<"u"?function(e){return wf.resolve(null).then(e).catch(Gm)}:Zf;function Gm(e){setTimeout(function(){throw e})}function ht(e){return e==="head"}function Jf(e,n){var t=n,a=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"||t==="/&"){if(a===0){e.removeChild(l),Na(n);return}a--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")a++;else if(t==="html")ml(e.ownerDocument.documentElement);else if(t==="head"){t=e.ownerDocument.head,ml(t);for(var i=t.firstChild;i;){var u=i.nextSibling,s=i.nodeName;i[ja]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&i.rel.toLowerCase()==="stylesheet"||t.removeChild(i),i=u}}else t==="body"&&ml(e.ownerDocument.body);t=l}while(t);Na(n)}function Kf(e,n){var t=e;e=0;do{var a=t.nextSibling;if(t.nodeType===1?n?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(n?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),a&&a.nodeType===8)if(t=a.data,t==="/$"){if(e===0)break;e--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||e++;t=a}while(t)}function Ps(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var t=n;switch(n=n.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":Ps(t),nu(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function Ym(e,n,t,a){for(;e.nodeType===1;){var l=t;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[ja])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var i=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=gn(e.nextSibling),e===null)break}return null}function $m(e,n,t){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=gn(e.nextSibling),e===null))return null;return e}function If(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=gn(e.nextSibling),e===null))return null;return e}function Fs(e){return e.data==="$?"||e.data==="$~"}function ks(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Vm(e,n){var t=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||t.readyState!=="loading")n();else{var a=function(){n(),t.removeEventListener("DOMContentLoaded",a)};t.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function gn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Ws=null;function Pf(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"||t==="/&"){if(n===0)return gn(e.nextSibling);n--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||n++}e=e.nextSibling}return null}function Ff(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(n===0)return e;n--}else t!=="/$"&&t!=="/&"||n++}e=e.previousSibling}return null}function kf(e,n,t){switch(n=Ri(t),e){case"html":if(e=n.documentElement,!e)throw Error(c(452));return e;case"head":if(e=n.head,!e)throw Error(c(453));return e;case"body":if(e=n.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function ml(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);nu(e)}var yn=new Map,Wf=new Set;function _i(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var In=R.d;R.d={f:Xm,r:Zm,D:wm,C:Jm,L:Km,m:Im,X:Fm,S:Pm,M:km};function Xm(){var e=In.f(),n=Ci();return e||n}function Zm(e){var n=Zt(e);n!==null&&n.tag===5&&n.type==="form"?vr(n):In.r(e)}var Ea=typeof document>"u"?null:document;function ep(e,n,t){var a=Ea;if(a&&typeof n=="string"&&n){var l=rn(n);l='link[rel="'+e+'"][href="'+l+'"]',typeof t=="string"&&(l+='[crossorigin="'+t+'"]'),Wf.has(l)||(Wf.add(l),e={rel:e,crossOrigin:t,href:n},a.querySelector(l)===null&&(n=a.createElement("link"),Oe(n,"link",e),Te(n),a.head.appendChild(n)))}}function wm(e){In.D(e),ep("dns-prefetch",e,null)}function Jm(e,n){In.C(e,n),ep("preconnect",e,n)}function Km(e,n,t){In.L(e,n,t);var a=Ea;if(a&&e&&n){var l='link[rel="preload"][as="'+rn(n)+'"]';n==="image"&&t&&t.imageSrcSet?(l+='[imagesrcset="'+rn(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(l+='[imagesizes="'+rn(t.imageSizes)+'"]')):l+='[href="'+rn(e)+'"]';var i=l;switch(n){case"style":i=xa(e);break;case"script":i=Ta(e)}yn.has(i)||(e=B({rel:"preload",href:n==="image"&&t&&t.imageSrcSet?void 0:e,as:n},t),yn.set(i,e),a.querySelector(l)!==null||n==="style"&&a.querySelector(vl(i))||n==="script"&&a.querySelector(hl(i))||(n=a.createElement("link"),Oe(n,"link",e),Te(n),a.head.appendChild(n)))}}function Im(e,n){In.m(e,n);var t=Ea;if(t&&e){var a=n&&typeof n.as=="string"?n.as:"script",l='link[rel="modulepreload"][as="'+rn(a)+'"][href="'+rn(e)+'"]',i=l;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Ta(e)}if(!yn.has(i)&&(e=B({rel:"modulepreload",href:e},n),yn.set(i,e),t.querySelector(l)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(hl(i)))return}a=t.createElement("link"),Oe(a,"link",e),Te(a),t.head.appendChild(a)}}}function Pm(e,n,t){In.S(e,n,t);var a=Ea;if(a&&e){var l=wt(a).hoistableStyles,i=xa(e);n=n||"default";var u=l.get(i);if(!u){var s={loading:0,preload:null};if(u=a.querySelector(vl(i)))s.loading=5;else{e=B({rel:"stylesheet",href:e,"data-precedence":n},t),(t=yn.get(i))&&ec(e,t);var o=u=a.createElement("link");Te(o),Oe(o,"link",e),o._p=new Promise(function(m,S){o.onload=m,o.onerror=S}),o.addEventListener("load",function(){s.loading|=1}),o.addEventListener("error",function(){s.loading|=2}),s.loading|=4,Oi(u,n,a)}u={type:"stylesheet",instance:u,count:1,state:s},l.set(i,u)}}}function Fm(e,n){In.X(e,n);var t=Ea;if(t&&e){var a=wt(t).hoistableScripts,l=Ta(e),i=a.get(l);i||(i=t.querySelector(hl(l)),i||(e=B({src:e,async:!0},n),(n=yn.get(l))&&nc(e,n),i=t.createElement("script"),Te(i),Oe(i,"link",e),t.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(l,i))}}function km(e,n){In.M(e,n);var t=Ea;if(t&&e){var a=wt(t).hoistableScripts,l=Ta(e),i=a.get(l);i||(i=t.querySelector(hl(l)),i||(e=B({src:e,async:!0,type:"module"},n),(n=yn.get(l))&&nc(e,n),i=t.createElement("script"),Te(i),Oe(i,"link",e),t.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(l,i))}}function np(e,n,t,a){var l=(l=w.current)?_i(l):null;if(!l)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(n=xa(t.href),t=wt(l).hoistableStyles,a=t.get(n),a||(a={type:"style",instance:null,count:0,state:null},t.set(n,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=xa(t.href);var i=wt(l).hoistableStyles,u=i.get(e);if(u||(l=l.ownerDocument||l,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,u),(i=l.querySelector(vl(e)))&&!i._p&&(u.instance=i,u.state.loading=5),yn.has(e)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},yn.set(e,t),i||Wm(l,e,t,u.state))),n&&a===null)throw Error(c(528,""));return u}if(n&&a!==null)throw Error(c(529,""));return null;case"script":return n=t.async,t=t.src,typeof t=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Ta(t),t=wt(l).hoistableScripts,a=t.get(n),a||(a={type:"script",instance:null,count:0,state:null},t.set(n,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function xa(e){return'href="'+rn(e)+'"'}function vl(e){return'link[rel="stylesheet"]['+e+"]"}function tp(e){return B({},e,{"data-precedence":e.precedence,precedence:null})}function Wm(e,n,t,a){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?a.loading=1:(n=e.createElement("link"),a.preload=n,n.addEventListener("load",function(){return a.loading|=1}),n.addEventListener("error",function(){return a.loading|=2}),Oe(n,"link",t),Te(n),e.head.appendChild(n))}function Ta(e){return'[src="'+rn(e)+'"]'}function hl(e){return"script[async]"+e}function ap(e,n,t){if(n.count++,n.instance===null)switch(n.type){case"style":var a=e.querySelector('style[data-href~="'+rn(t.href)+'"]');if(a)return n.instance=a,Te(a),a;var l=B({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Te(a),Oe(a,"style",l),Oi(a,t.precedence,e),n.instance=a;case"stylesheet":l=xa(t.href);var i=e.querySelector(vl(l));if(i)return n.state.loading|=4,n.instance=i,Te(i),i;a=tp(t),(l=yn.get(l))&&ec(a,l),i=(e.ownerDocument||e).createElement("link"),Te(i);var u=i;return u._p=new Promise(function(s,o){u.onload=s,u.onerror=o}),Oe(i,"link",a),n.state.loading|=4,Oi(i,t.precedence,e),n.instance=i;case"script":return i=Ta(t.src),(l=e.querySelector(hl(i)))?(n.instance=l,Te(l),l):(a=t,(l=yn.get(i))&&(a=B({},t),nc(a,l)),e=e.ownerDocument||e,l=e.createElement("script"),Te(l),Oe(l,"link",a),e.head.appendChild(l),n.instance=l);case"void":return null;default:throw Error(c(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(a=n.instance,n.state.loading|=4,Oi(a,t.precedence,e));return n.instance}function Oi(e,n,t){for(var a=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=a.length?a[a.length-1]:null,i=l,u=0;u<a.length;u++){var s=a[u];if(s.dataset.precedence===n)i=s;else if(i!==l)break}i?i.parentNode.insertBefore(e,i.nextSibling):(n=t.nodeType===9?t.head:t,n.insertBefore(e,n.firstChild))}function ec(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function nc(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var ji=null;function lp(e,n,t){if(ji===null){var a=new Map,l=ji=new Map;l.set(t,a)}else l=ji,a=l.get(t),a||(a=new Map,l.set(t,a));if(a.has(e))return a;for(a.set(e,null),t=t.getElementsByTagName(e),l=0;l<t.length;l++){var i=t[l];if(!(i[ja]||i[De]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(n)||"";u=e+u;var s=a.get(u);s?s.push(i):a.set(u,[i])}}return a}function ip(e,n,t){e=e.ownerDocument||e,e.head.insertBefore(t,n==="title"?e.querySelector("head > title"):null)}function ev(e,n,t){if(t===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function up(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function nv(e,n,t,a){if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var l=xa(a.href),i=n.querySelector(vl(l));if(i){n=i._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Ui.bind(e),n.then(e,e)),t.state.loading|=4,t.instance=i,Te(i);return}i=n.ownerDocument||n,a=tp(a),(l=yn.get(l))&&ec(a,l),i=i.createElement("link"),Te(i);var u=i;u._p=new Promise(function(s,o){u.onload=s,u.onerror=o}),Oe(i,"link",a),t.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(t,n),(n=t.state.preload)&&(t.state.loading&3)===0&&(e.count++,t=Ui.bind(e),n.addEventListener("load",t),n.addEventListener("error",t))}}var tc=0;function tv(e,n){return e.stylesheets&&e.count===0&&qi(e,e.stylesheets),0<e.count||0<e.imgCount?function(t){var a=setTimeout(function(){if(e.stylesheets&&qi(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+n);0<e.imgBytes&&tc===0&&(tc=62500*Hm());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&qi(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>tc?50:800)+n);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(l)}}:null}function Ui(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)qi(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var zi=null;function qi(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,zi=new Map,n.forEach(av,e),zi=null,Ui.call(e))}function av(e,n){if(!(n.state.loading&4)){var t=zi.get(e);if(t)var a=t.get(null);else{t=new Map,zi.set(e,t);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<l.length;i++){var u=l[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(t.set(u.dataset.precedence,u),a=u)}a&&t.set(null,a)}l=n.instance,u=l.getAttribute("data-precedence"),i=t.get(u)||a,i===a&&t.set(null,l),t.set(u,l),this.count++,a=Ui.bind(this),l.addEventListener("load",a),l.addEventListener("error",a),i?i.parentNode.insertBefore(l,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),n.state.loading|=4}}var gl={$$typeof:je,Provider:null,Consumer:null,_currentValue:Q,_currentValue2:Q,_threadCount:0};function lv(e,n,t,a,l,i,u,s,o){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Fi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fi(0),this.hiddenUpdates=Fi(null),this.identifierPrefix=a,this.onUncaughtError=l,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function sp(e,n,t,a,l,i,u,s,o,m,S,E){return e=new lv(e,n,t,u,o,m,S,E,s),n=1,i===!0&&(n|=24),i=en(3,null,null,n),e.current=i,i.stateNode=e,n=qu(),n.refCount++,e.pooledCache=n,n.refCount++,i.memoizedState={element:a,isDehydrated:t,cache:n},Qu(i),e}function cp(e){return e?(e=ta,e):ta}function op(e,n,t,a,l,i){l=cp(l),a.context===null?a.context=l:a.pendingContext=l,a=it(n),a.payload={element:t},i=i===void 0?null:i,i!==null&&(a.callback=i),t=ut(e,a,n),t!==null&&(Je(t,e,n),Ia(t,e,n))}function rp(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function ac(e,n){rp(e,n),(e=e.alternate)&&rp(e,n)}function fp(e){if(e.tag===13||e.tag===31){var n=Rt(e,67108864);n!==null&&Je(n,e,67108864),ac(e,67108864)}}function pp(e){if(e.tag===13||e.tag===31){var n=un();n=ki(n);var t=Rt(e,n);t!==null&&Je(t,e,n),ac(e,n)}}var Hi=!0;function iv(e,n,t,a){var l=b.T;b.T=null;var i=R.p;try{R.p=2,lc(e,n,t,a)}finally{R.p=i,b.T=l}}function uv(e,n,t,a){var l=b.T;b.T=null;var i=R.p;try{R.p=8,lc(e,n,t,a)}finally{R.p=i,b.T=l}}function lc(e,n,t,a){if(Hi){var l=ic(a);if(l===null)Xs(e,n,a,Li,t),mp(e,a);else if(cv(l,e,n,t,a))a.stopPropagation();else if(mp(e,a),n&4&&-1<sv.indexOf(e)){for(;l!==null;){var i=Zt(l);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=xt(i.pendingLanes);if(u!==0){var s=i;for(s.pendingLanes|=2,s.entangledLanes|=2;u;){var o=1<<31-ke(u);s.entanglements[1]|=o,u&=~o}Rn(i),(ne&6)===0&&(Si=Pe()+500,fl(0))}}break;case 31:case 13:s=Rt(i,2),s!==null&&Je(s,i,2),Ci(),ac(i,2)}if(i=ic(a),i===null&&Xs(e,n,a,Li,t),i===l)break;l=i}l!==null&&a.stopPropagation()}else Xs(e,n,a,null,t)}}function ic(e){return e=su(e),uc(e)}var Li=null;function uc(e){if(Li=null,e=Xt(e),e!==null){var n=M(e);if(n===null)e=null;else{var t=n.tag;if(t===13){if(e=j(n),e!==null)return e;e=null}else if(t===31){if(e=Z(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Li=e,null}function dp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(wp()){case Sc:return 2;case bc:return 8;case Nl:case Jp:return 32;case Cc:return 268435456;default:return 32}default:return 32}}var sc=!1,gt=null,yt=null,St=null,yl=new Map,Sl=new Map,bt=[],sv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function mp(e,n){switch(e){case"focusin":case"focusout":gt=null;break;case"dragenter":case"dragleave":yt=null;break;case"mouseover":case"mouseout":St=null;break;case"pointerover":case"pointerout":yl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sl.delete(n.pointerId)}}function bl(e,n,t,a,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:a,nativeEvent:i,targetContainers:[l]},n!==null&&(n=Zt(n),n!==null&&fp(n)),e):(e.eventSystemFlags|=a,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function cv(e,n,t,a,l){switch(n){case"focusin":return gt=bl(gt,e,n,t,a,l),!0;case"dragenter":return yt=bl(yt,e,n,t,a,l),!0;case"mouseover":return St=bl(St,e,n,t,a,l),!0;case"pointerover":var i=l.pointerId;return yl.set(i,bl(yl.get(i)||null,e,n,t,a,l)),!0;case"gotpointercapture":return i=l.pointerId,Sl.set(i,bl(Sl.get(i)||null,e,n,t,a,l)),!0}return!1}function vp(e){var n=Xt(e.target);if(n!==null){var t=M(n);if(t!==null){if(n=t.tag,n===13){if(n=j(t),n!==null){e.blockedOn=n,Dc(e.priority,function(){pp(t)});return}}else if(n===31){if(n=Z(t),n!==null){e.blockedOn=n,Dc(e.priority,function(){pp(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Bi(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=ic(e.nativeEvent);if(t===null){t=e.nativeEvent;var a=new t.constructor(t.type,t);uu=a,t.target.dispatchEvent(a),uu=null}else return n=Zt(t),n!==null&&fp(n),e.blockedOn=t,!1;n.shift()}return!0}function hp(e,n,t){Bi(e)&&t.delete(n)}function ov(){sc=!1,gt!==null&&Bi(gt)&&(gt=null),yt!==null&&Bi(yt)&&(yt=null),St!==null&&Bi(St)&&(St=null),yl.forEach(hp),Sl.forEach(hp)}function Qi(e,n){e.blockedOn===n&&(e.blockedOn=null,sc||(sc=!0,h.unstable_scheduleCallback(h.unstable_NormalPriority,ov)))}var Gi=null;function gp(e){Gi!==e&&(Gi=e,h.unstable_scheduleCallback(h.unstable_NormalPriority,function(){Gi===e&&(Gi=null);for(var n=0;n<e.length;n+=3){var t=e[n],a=e[n+1],l=e[n+2];if(typeof a!="function"){if(uc(a||t)===null)continue;break}var i=Zt(t);i!==null&&(e.splice(n,3),n-=3,is(i,{pending:!0,data:l,method:t.method,action:a},a,l))}}))}function Na(e){function n(o){return Qi(o,e)}gt!==null&&Qi(gt,e),yt!==null&&Qi(yt,e),St!==null&&Qi(St,e),yl.forEach(n),Sl.forEach(n);for(var t=0;t<bt.length;t++){var a=bt[t];a.blockedOn===e&&(a.blockedOn=null)}for(;0<bt.length&&(t=bt[0],t.blockedOn===null);)vp(t),t.blockedOn===null&&bt.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(a=0;a<t.length;a+=3){var l=t[a],i=t[a+1],u=l[Ye]||null;if(typeof i=="function")u||gp(t);else if(u){var s=null;if(i&&i.hasAttribute("formAction")){if(l=i,u=i[Ye]||null)s=u.formAction;else if(uc(l)!==null)continue}else s=u.action;typeof s=="function"?t[a+1]=s:(t.splice(a,3),a-=3),gp(t)}}}function yp(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return l=u})},focusReset:"manual",scroll:"manual"})}function n(){l!==null&&(l(),l=null),a||setTimeout(t,20)}function t(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(t,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),l!==null&&(l(),l=null)}}}function cc(e){this._internalRoot=e}Yi.prototype.render=cc.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(c(409));var t=n.current,a=un();op(t,a,e,n,null,null)},Yi.prototype.unmount=cc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;op(e.current,2,null,e,null,null),Ci(),n[Vt]=null}};function Yi(e){this._internalRoot=e}Yi.prototype.unstable_scheduleHydration=function(e){if(e){var n=Nc();e={blockedOn:null,target:e,priority:n};for(var t=0;t<bt.length&&n!==0&&n<bt[t].priority;t++);bt.splice(t,0,e),t===0&&vp(e)}};var Sp=A.version;if(Sp!=="19.2.3")throw Error(c(527,Sp,"19.2.3"));R.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=T(n),e=e!==null?G(e):null,e=e===null?null:e.stateNode,e};var rv={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:b,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $i=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$i.isDisabled&&$i.supportsFiber)try{Ra=$i.inject(rv),Fe=$i}catch{}}return Al.createRoot=function(e,n){if(!N(e))throw Error(c(299));var t=!1,a="",l=Tr,i=Nr,u=Dr;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(i=n.onCaughtError),n.onRecoverableError!==void 0&&(u=n.onRecoverableError)),n=sp(e,1,!1,null,null,t,a,null,l,i,u,yp),e[Vt]=n.current,Vs(e),new cc(n)},Al.hydrateRoot=function(e,n,t){if(!N(e))throw Error(c(299));var a=!1,l="",i=Tr,u=Nr,s=Dr,o=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError),t.formState!==void 0&&(o=t.formState)),n=sp(e,1,!0,n,t??null,a,l,o,i,u,s,yp),n.context=cp(null),t=n.current,a=un(),a=ki(a),l=it(a),l.callback=null,ut(t,l,a),t=a,n.current.lanes=t,Oa(n,t),Rn(n),e[Vt]=n.current,Vs(e),new Yi(n)},Al.version="19.2.3",Al}var Rp;function bv(){if(Rp)return fc.exports;Rp=1;function h(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(h)}catch(A){console.error(A)}}return h(),fc.exports=Sv(),fc.exports}var Cv=bv();const Av=`# Documentation API pour MCP - Cours, Menu, Categorie, Exercice, QCM

Cette documentation decrit l'API REST disponible pour un serveur MCP (Model Context Protocol) permettant d'interagir avec les ressources educatives.

## Base URL

\`\`\`
/api
\`\`\`

---

## Table des matieres

1. [Categories](#categories)
2. [Menus](#menus)
3. [Exercices (Exo)](#exercices)
4. [Contenu des Exercices (ExoContent)](#contenu-des-exercices)
5. [QCM](#qcm)
6. [Relations entre entites](#relations-entre-entites)

---

## Categories

Les categories organisent le contenu en groupes thematiques.

### Endpoints

| Methode | Endpoint | Description |
|---------|----------|-------------|
| GET | \`/api/categories\` | Liste toutes les categories |
| GET | \`/api/categories/{id}\` | Recupere une categorie par ID |
| POST | \`/api/categories\` | Cree une nouvelle categorie |
| PUT | \`/api/categories/{id}\` | Met a jour une categorie |
| DELETE | \`/api/categories/{id}\` | Supprime une categorie |

### Champs

| Champ | Type | Description |
|-------|------|-------------|
| \`id\` | integer | Identifiant unique |
| \`name\` | string | Nom de la categorie |
| \`couleur\` | string | Code couleur (ex: #FF5733) |
| \`description\` | text | Description de la categorie |
| \`visible\` | boolean | Visibilite (default: true) |
| \`logo\` | object | Logo associe |
| \`seo\` | object | Donnees SEO |
| \`menus\` | array | Menus associes |
| \`exoMenus\` | array | Menus d'exercices associes |

### Exemple de reponse

\`\`\`json
{
  "@context": "/api/contexts/Category",
  "@id": "/api/categories/1",
  "@type": "Category",
  "id": 1,
  "name": "PHP",
  "couleur": "#8892BF",
  "description": "Cours et exercices PHP",
  "visible": true,
  "logo": {
    "@id": "/api/logos/1",
    "url": "/uploads/logos/php.png"
  },
  "menus": [
    "/api/menus/1",
    "/api/menus/2"
  ],
  "exoMenus": [
    "/api/exo_menus/1"
  ]
}
\`\`\`

---

## Menus

Les menus permettent de structurer la navigation dans une categorie.

### Endpoints

| Methode | Endpoint | Description |
|---------|----------|-------------|
| GET | \`/api/menus\` | Liste tous les menus |
| GET | \`/api/menus/{id}\` | Recupere un menu par ID |
| POST | \`/api/menus\` | Cree un nouveau menu |
| PUT | \`/api/menus/{id}\` | Met a jour un menu |
| DELETE | \`/api/menus/{id}\` | Supprime un menu |

### Champs

| Champ | Type | Description |
|-------|------|-------------|
| \`id\` | integer | Identifiant unique |
| \`label\` | string | Libelle du menu |
| \`category\` | object/IRI | Categorie parente |
| \`positionMenus\` | object/IRI | Position d'affichage |
| \`pages\` | array | Pages associees |
| \`pageContents\` | array | Contenus de pages associes |

### Exemple de reponse

\`\`\`json
{
  "@context": "/api/contexts/Menus",
  "@id": "/api/menus/1",
  "@type": "Menus",
  "id": 1,
  "label": "Les bases",
  "category": "/api/categories/1",
  "positionMenus": "/api/position_menus/1",
  "pages": [
    "/api/pages/1",
    "/api/pages/2"
  ]
}
\`\`\`

---

## Exercices

### ExoMenu (Menu d'exercices)

Les menus d'exercices regroupent les exercices par theme.

#### Endpoints

| Methode | Endpoint | Description |
|---------|----------|-------------|
| GET | \`/api/exo_menus\` | Liste tous les menus d'exercices |
| GET | \`/api/exo_menus/{id}\` | Recupere un menu d'exercice |
| POST | \`/api/exo_menus\` | Cree un menu d'exercice |
| PUT | \`/api/exo_menus/{id}\` | Met a jour un menu d'exercice |
| DELETE | \`/api/exo_menus/{id}\` | Supprime un menu d'exercice |

#### Champs ExoMenu

| Champ | Type | Description |
|-------|------|-------------|
| \`id\` | integer | Identifiant unique |
| \`label\` | string | Libelle du menu |
| \`category\` | object/IRI | Categorie parente |
| \`exos\` | array | Exercices associes |
| \`exoContents\` | array | Contenus d'exercices |

### Exo (Exercice)

Les exercices individuels.

#### Endpoints

| Methode | Endpoint | Description |
|---------|----------|-------------|
| GET | \`/api/exos\` | Liste tous les exercices |
| GET | \`/api/exos/{id}\` | Recupere un exercice |
| POST | \`/api/exos\` | Cree un exercice |
| PUT | \`/api/exos/{id}\` | Met a jour un exercice |
| DELETE | \`/api/exos/{id}\` | Supprime un exercice |

#### Champs Exo

| Champ | Type | Description |
|-------|------|-------------|
| \`id\` | integer | Identifiant unique |
| \`slug\` | string | Identifiant URL-friendly |
| \`exoMenu\` | object/IRI | Menu d'exercice parent |
| \`exoContents\` | array | Contenus de l'exercice |

#### Exemple de reponse

\`\`\`json
{
  "@context": "/api/contexts/Exo",
  "@id": "/api/exos/1",
  "@type": "Exo",
  "id": 1,
  "slug": "exercice-boucles-php",
  "exoMenu": "/api/exo_menus/1",
  "exoContents": [
    "/api/exo_contents/1",
    "/api/exo_contents/2"
  ]
}
\`\`\`

---

## Contenu des Exercices

### ExoContent

Le contenu detaille d'un exercice.

#### Endpoints

| Methode | Endpoint | Description |
|---------|----------|-------------|
| GET | \`/api/exo_contents\` | Liste tous les contenus |
| GET | \`/api/exo_contents/{id}\` | Recupere un contenu |
| GET | \`/api/exo_contents?exo.slug={slug}\` | Filtre par slug d'exercice |
| POST | \`/api/exo_contents\` | Cree un contenu |
| PUT | \`/api/exo_contents/{id}\` | Met a jour un contenu |
| DELETE | \`/api/exo_contents/{id}\` | Supprime un contenu |

#### Champs ExoContent

| Champ | Type | Description |
|-------|------|-------------|
| \`id\` | integer | Identifiant unique |
| \`title\` | string | Titre du contenu |
| \`type\` | string | Type de contenu |
| \`content\` | text | Contenu textuel |
| \`code\` | text | Code source |
| \`exo\` | object/IRI | Exercice parent |
| \`category\` | object/IRI | Categorie |
| \`exoMenu\` | object/IRI | Menu d'exercice |
| \`exoBlocks\` | array | Blocs de contenu |

### ExoBlock

Blocs de contenu pour structurer un exercice.

#### Endpoints

| Methode | Endpoint | Description |
|---------|----------|-------------|
| GET | \`/api/exo_blocks\` | Liste tous les blocs |
| GET | \`/api/exo_blocks/{id}\` | Recupere un bloc |
| POST | \`/api/exo_blocks\` | Cree un bloc |
| PUT | \`/api/exo_blocks/{id}\` | Met a jour un bloc |
| DELETE | \`/api/exo_blocks/{id}\` | Supprime un bloc |

#### Champs ExoBlock

| Champ | Type | Description |
|-------|------|-------------|
| \`id\` | integer | Identifiant unique |
| \`content\` | text | Contenu du bloc |
| \`code\` | text | Code source |
| \`type\` | string | Type de bloc |
| \`exoContent\` | object/IRI | Contenu parent |

#### Exemple de reponse ExoContent

\`\`\`json
{
  "@context": "/api/contexts/ExoContent",
  "@id": "/api/exo_contents/1",
  "@type": "ExoContent",
  "id": 1,
  "title": "Exercice 1 - Les boucles",
  "type": "exercice",
  "content": "Ecrire une boucle for qui affiche les nombres de 1 a 10",
  "code": "<?php\\nfor ($i = 1; $i <= 10; $i++) {\\n    echo $i;\\n}\\n?>",
  "exo": "/api/exos/1",
  "exoBlocks": [
    {
      "@id": "/api/exo_blocks/1",
      "content": "Indice: utilisez la structure for",
      "type": "hint"
    }
  ]
}
\`\`\`

---

## QCM

Les QCM (Questions a Choix Multiples) pour evaluer les connaissances.

### Endpoints Standard

| Methode | Endpoint | Description |
|---------|----------|-------------|
| GET | \`/api/q_c_ms\` | Liste tous les QCM |
| GET | \`/api/q_c_ms/{id}\` | Recupere un QCM |
| POST | \`/api/q_c_ms\` | Cree un QCM |
| PUT | \`/api/q_c_ms/{id}\` | Met a jour un QCM |
| DELETE | \`/api/q_c_ms/{id}\` | Supprime un QCM |

### Endpoints Personnalises

| Methode | Endpoint | Description |
|---------|----------|-------------|
| GET | \`/api/qcm\` | Liste tous les QCM (format simplifie) |
| GET | \`/api/qcm/{id}\` | Recupere un QCM par ID |
| GET | \`/api/qcm/language/{language}\` | Filtre par langage (ex: PHP, JavaScript) |
| GET | \`/api/qcm/difficulty/{difficulty}\` | Filtre par difficulte |
| GET | \`/api/qcm/language/{lang}/difficulty/{diff}\` | Filtre combine |

### Filtres disponibles

\`\`\`
GET /api/q_c_ms?languageQCM.name=PHP           # Par langage (insensible a la casse)
GET /api/q_c_ms?niveauQCM.titre=Debutant       # Par niveau (insensible a la casse)
\`\`\`

### Champs QCM

| Champ | Type | Description |
|-------|------|-------------|
| \`id\` | integer | Identifiant unique |
| \`titre\` | string | Titre/Question du QCM |
| \`solution\` | text | Explication de la solution |
| \`languageQCM\` | object/IRI | Langage de programmation |
| \`niveauQCM\` | object/IRI | Niveau de difficulte |
| \`choicesQCMs\` | array | Choix de reponses |

### ChoicesQCM (Choix de reponse)

| Champ | Type | Description |
|-------|------|-------------|
| \`id\` | integer | Identifiant unique |
| \`question\` | string | Texte du choix |
| \`isCorrect\` | boolean | Si c'est la bonne reponse |
| \`explication\` | text | Explication du choix |
| \`qcm\` | object/IRI | QCM parent |

### LanguageQCM

| Champ | Type | Description |
|-------|------|-------------|
| \`id\` | integer | Identifiant unique |
| \`name\` | string | Nom du langage (PHP, JavaScript, Python...) |

### NiveauQCM

| Champ | Type | Description |
|-------|------|-------------|
| \`id\` | integer | Identifiant unique |
| \`titre\` | string | Niveau (Debutant, Intermediaire, Avance) |

### Exemple de reponse QCM

\`\`\`json
{
  "@context": "/api/contexts/QCM",
  "@id": "/api/q_c_ms/1",
  "@type": "QCM",
  "id": 1,
  "titre": "Quelle fonction PHP permet de compter les elements d'un tableau?",
  "solution": "La fonction count() retourne le nombre d'elements dans un tableau.",
  "languageQCM": {
    "@id": "/api/language_q_c_ms/1",
    "name": "PHP"
  },
  "niveauQCM": {
    "@id": "/api/niveau_q_c_ms/1",
    "titre": "Debutant"
  },
  "choicesQCMs": [
    {
      "@id": "/api/choices_q_c_ms/1",
      "question": "count()",
      "isCorrect": true,
      "explication": "count() est la fonction standard pour compter les elements"
    },
    {
      "@id": "/api/choices_q_c_ms/2",
      "question": "length()",
      "isCorrect": false,
      "explication": "length() n'existe pas en PHP, c'est JavaScript"
    },
    {
      "@id": "/api/choices_q_c_ms/3",
      "question": "size()",
      "isCorrect": false,
      "explication": "size() n'existe pas en PHP"
    }
  ]
}
\`\`\`

### Reponse format simplifie (endpoint custom)

\`\`\`json
{
  "title": "Quelle fonction PHP permet de compter les elements d'un tableau?",
  "language": "PHP",
  "difficulty": "Debutant",
  "solution": "La fonction count() retourne le nombre d'elements dans un tableau.",
  "choices": [
    {
      "label": "count()",
      "isCorrect": true,
      "explanation": "count() est la fonction standard pour compter les elements"
    },
    {
      "label": "length()",
      "isCorrect": false,
      "explanation": "length() n'existe pas en PHP, c'est JavaScript"
    }
  ]
}
\`\`\`

---

## Relations entre entites

\`\`\`
Category
    |
    +-- 1:n --> Menus
    |              |
    |              +-- 1:n --> Pages
    |              +-- 1:n --> PageContents
    |
    +-- 1:n --> ExoMenu
    |              |
    |              +-- 1:n --> Exo
    |              |            |
    |              |            +-- 1:n --> ExoContent
    |              |                           |
    |              |                           +-- 1:n --> ExoBlock
    |              |
    |              +-- 1:n --> ExoContent
    |
    +-- 1:1 --> Logo
    +-- 1:1 --> Seo

QCM
    |
    +-- n:1 --> LanguageQCM
    +-- n:1 --> NiveauQCM
    +-- 1:n --> ChoicesQCM
\`\`\`

---

## Pagination

### Configuration globale

- **Items par page par defaut**: 1000
- **Pagination activee**: Oui
- **Client peut modifier**: Oui

### Parametres de pagination

\`\`\`
GET /api/categories?page=1                    # Page specifique
GET /api/categories?itemsPerPage=50           # Nombre d'items par page
\`\`\`

### Exceptions

| Entite | Configuration |
|--------|---------------|
| QCM | 200 items/page (max 300) |
| ExoContent | Pagination desactivee |

---

## Groupes de serialisation

Les groupes controlent les champs exposes dans les reponses.

| Groupe | Utilise par | Description |
|--------|------------|-------------|
| \`page_content:read\` | Category, Menus, Page | Lecture contenu pages |
| \`page_content:write\` | Category, Menus, Page | Ecriture contenu pages |
| \`exo_content:read\` | Category, ExoMenu, Exo, ExoContent | Lecture exercices |
| \`exo_content:write\` | Category, ExoMenu, Exo, ExoContent | Ecriture exercices |
| \`qcm:read\` | QCM, LanguageQCM, NiveauQCM, ChoicesQCM | Lecture QCM |
| \`qcm:write\` | QCM | Ecriture QCM |
| \`exo:read\` | Exo | Lecture exercice |
| \`exo_block:read\` | ExoBlock | Lecture blocs |

---

## Exemples d'utilisation MCP

### Recuperer tous les QCM PHP niveau debutant

\`\`\`bash
curl -X GET "https://api.example.com/api/qcm/language/PHP/difficulty/Debutant"
\`\`\`

### Recuperer le contenu d'un exercice par slug

\`\`\`bash
curl -X GET "https://api.example.com/api/exo_contents?exo.slug=exercice-boucles-php"
\`\`\`

### Recuperer toutes les categories visibles

\`\`\`bash
curl -X GET "https://api.example.com/api/categories?visible=true"
\`\`\`

### Creer un nouveau QCM

\`\`\`bash
curl -X POST "https://api.example.com/api/q_c_ms" \\
  -H "Content-Type: application/ld+json" \\
  -d '{
    "titre": "Question sur les tableaux",
    "solution": "Explication de la solution",
    "languageQCM": "/api/language_q_c_ms/1",
    "niveauQCM": "/api/niveau_q_c_ms/1"
  }'
\`\`\`

---

## Codes de reponse HTTP

| Code | Description |
|------|-------------|
| 200 | Succes (GET, PUT) |
| 201 | Cree avec succes (POST) |
| 204 | Supprime avec succes (DELETE) |
| 400 | Requete invalide |
| 404 | Ressource non trouvee |
| 422 | Erreur de validation |
| 500 | Erreur serveur |

---

## Notes importantes

1. **Format de donnees**: L'API utilise JSON-LD avec le contexte Hydra
2. **IRI vs Objets**: Les relations peuvent etre retournees comme IRI (\`/api/categories/1\`) ou objets selon les groupes de serialisation
3. **Cascade Delete**: La suppression d'un QCM supprime automatiquement ses ChoicesQCM
4. **Visibilite**: Le champ \`visible\` permet de filtrer le contenu affiche en frontend
`,Ev=`# Configuration de l'URL SPA

## Objectif

Centraliser le chemin \`/spa\` pour pouvoir le modifier facilement sans changer tout le code.

---

## Architecture

\`\`\`
┌─────────────────────────────────────────────────────────────┐
│                    URL actuelle: /spa                       │
│                                                             │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │
│  │   Frontend  │  │   Backend   │  │    Assets   │         │
│  │  Vue/Vite   │  │   Symfony   │  │     PWA     │         │
│  └─────────────┘  └─────────────┘  └─────────────┘         │
│         │                │                │                 │
│         ▼                ▼                ▼                 │
│  vite.config.js    routes.yaml      public/spa/            │
│  base2.html.twig   services.yaml                           │
└─────────────────────────────────────────────────────────────┘
\`\`\`

---

## Fichiers de configuration

### 1. Frontend - vite.config.js

**Fichier** : \`front/vite.config.js\`

\`\`\`javascript
// Ligne 25 - Chemin PWA
const PWA_PATH = '/spa';
\`\`\`

Ce paramètre contrôle :
- \`outDir\` : Dossier de sortie PWA (\`public/spa\`)
- \`start_url\` : URL de démarrage PWA
- \`scope\` : Portée de la PWA
- \`icons.src\` : Chemins des icônes
- \`screenshots.src\` : Chemins des screenshots
- \`globDirectory\` : Dossier de cache Workbox

### 2. Frontend - base2.html.twig

**Fichier** : \`templates/base2.html.twig\`

\`\`\`twig
{# Ligne 2 - Chemin PWA #}
{% set pwaPath = '/spa' %}
\`\`\`

Ce paramètre contrôle :
- Lien du manifest PWA
- Liens des icônes Apple Touch
- Lien du splash screen iOS

### 3. Backend - services.yaml

**Fichier** : \`config/services.yaml\`

\`\`\`yaml
parameters:
    # Ligne 6
    app.spa_path: '/spa'
\`\`\`

Ce paramètre est utilisé par :
- \`SitemapController\` : URLs dans le sitemap.xml

### 4. Backend - routes.yaml

**Fichier** : \`config/routes.yaml\`

\`\`\`yaml
# Ligne 15
spa_routes:
    resource: ../src/Controller/SpaController.php
    type: attribute
    prefix: /spa
\`\`\`

Ce paramètre contrôle :
- Le préfixe de toutes les routes du SpaController
- L'URL d'accès à l'application Vue.js

---

## Procédure de modification

### Étape 1 : Modifier les 4 fichiers

Remplacer \`/spa\` par le nouveau chemin (ex: \`/app\`) dans :

| Fichier | Rechercher | Remplacer par |
|---------|------------|---------------|
| \`front/vite.config.js\` | \`const PWA_PATH = '/spa'\` | \`const PWA_PATH = '/app'\` |
| \`templates/base2.html.twig\` | \`{% set pwaPath = '/spa' %}\` | \`{% set pwaPath = '/app' %}\` |
| \`config/services.yaml\` | \`app.spa_path: '/spa'\` | \`app.spa_path: '/app'\` |
| \`config/routes.yaml\` | \`prefix: /spa\` | \`prefix: /app\` |

### Étape 2 : Renommer le dossier public

\`\`\`bash
mv public/spa public/app
\`\`\`

### Étape 3 : Rebuild et restart

\`\`\`bash
# Build frontend
./build-front.sh

# Restart Docker
docker compose restart

# Vider le cache Symfony
docker compose exec php php bin/console cache:clear
\`\`\`

### Étape 4 : Vérifier

\`\`\`bash
# Vérifier la route
docker compose exec php php bin/console debug:router | grep spa_app

# Résultat attendu :
# spa_app    ANY    ANY    ANY    /app/{vueRouting}
\`\`\`

---

## Détails techniques

### SpaController.php

Le contrôleur utilise maintenant une route relative :

\`\`\`php
// Note: Le préfixe est défini dans config/routes.yaml (spa_routes)
#[Route('/{vueRouting}', name: 'spa_app', requirements: ['vueRouting' => '.*'], defaults: ['vueRouting' => ''])]
public function index(string $vueRouting = ''): Response
\`\`\`

Le préfixe \`/spa\` est ajouté par \`routes.yaml\`, pas dans le contrôleur.

### SitemapController.php

Le contrôleur récupère le chemin depuis les paramètres :

\`\`\`php
$spaPath = $this->getParameter('app.spa_path') ?? '/spa';

$urls[] = [
    'loc' => $hostname . $spaPath,
    // ...
];
\`\`\`

### Vite PWA Plugin

Le plugin VitePWA utilise \`PWA_PATH\` pour générer :
- \`public{PWA_PATH}/manifest.webmanifest\`
- \`public{PWA_PATH}/sw.js\`
- \`public{PWA_PATH}/workbox-*.js\`

---

## Fichiers concernés

| Fichier | Rôle |
|---------|------|
| \`front/vite.config.js\` | Configuration Vite/PWA |
| \`templates/base2.html.twig\` | Template HTML principal |
| \`config/services.yaml\` | Paramètres Symfony |
| \`config/routes.yaml\` | Routes Symfony |
| \`src/Controller/SpaController.php\` | Contrôleur SPA |
| \`src/Controller/SitemapController.php\` | Génération sitemap |
| \`public/spa/\` | Assets PWA (icônes, SW, manifest) |

---

## Notes

### Service Worker

Le fichier \`public/service-worker.js\` contient des références hardcodées à \`/spa\`. Ce fichier est probablement obsolète car VitePWA génère son propre service worker dans \`public/spa/sw.js\`.

### Cache navigateur

Après modification du chemin, les utilisateurs devront :
- Vider leur cache navigateur
- Ou désinstaller/réinstaller la PWA

### SEO

Les URLs dans le sitemap seront automatiquement mises à jour grâce au paramètre \`app.spa_path\`.
`,xv=`# 📄 Système de Pages Dynamiques - DevDoc

Ce README explique le fonctionnement du système de génération de pages dynamiques basé sur une architecture API REST avec Vue.js.

## 🏗️ Architecture Générale

Le système utilise une architecture **API-First** avec Symfony comme backend et Vue.js comme frontend :

\`\`\`
┌─────────────────┐    API REST    ┌─────────────────┐
│   Vue.js SPA    │◄──────────────►│  Symfony API    │
│   (Frontend)    │                │   (Backend)     │
└─────────────────┘                └─────────────────┘
                                            │
                                   ┌─────────────────┐
                                   │   Base MySQL    │
                                   │   (Données)     │
                                   └─────────────────┘
\`\`\`

## 🗄️ Structure des Données

### Entités Principales

#### 1. **Category** (Catégories)
\`\`\`php
- id: int (ID unique)
- name: string (Nom de la catégorie)
\`\`\`
**Exemple :** Vue.js, React, PHP, JavaScript

#### 2. **Menus** (Sous-menus)
\`\`\`php
- id: int
- label: string (Label du menu)
- category: Category (Relation ManyToOne)
\`\`\`
**Exemple :** Composants, Routing, State Management

#### 3. **Page** (Pages)
\`\`\`php
- id: int
- slug: string (URL slug, ex: "/vue/composants")
- menus: Menus (Relation ManyToOne)
\`\`\`

#### 4. **PageContent** (Contenu des pages)
\`\`\`php
- id: int
- title: string (Titre de la page)
- type: string (Type de contenu)
- content: text (Contenu HTML/Markdown)
- code: text (Code source avec coloration syntaxique)
- page: Page (Relation ManyToOne)
- category: Category (Relation ManyToOne)
- menu: Menus (Relation ManyToOne)
- pageBlocks: Collection<PageBlock> (Blocs additionnels)
\`\`\`

### Hiérarchie des Données
\`\`\`
Category (Vue.js)
├── Menu (Composants)
│   ├── Page (/vue/composants-base)
│   │   └── PageContent (Titre, contenu, code...)
│   └── Page (/vue/composants-avances)
│       └── PageContent (Titre, contenu, code...)
└── Menu (Routing)
    ├── Page (/vue/routing-basic)
    └── Page (/vue/routing-advanced)
\`\`\`

## 🔄 Flux de Données

### 1. **Génération du Menu Dynamique**

\`\`\`javascript
// Dans App.vue - Récupération des données
const { menus, user, cats, fetchMenus, fetchUser } = useData()

// Structure générée automatiquement :
menusByCategory = {
  "Vue.js": [
    {
      label: "Composants",
      items: [
        { title: "Composants de base", page: { slug: "/vue/composants-base" } },
        { title: "Composants avancés", page: { slug: "/vue/composants-avances" } }
      ]
    }
  ]
}
\`\`\`

### 2. **Routing Dynamique**

\`\`\`javascript
// Dans Vue Router
{
  path: '/pages/:slug*',
  name: 'DynamicPage',
  component: PageComponent,
  props: route => ({ slug: route.params.slug })
}
\`\`\`

### 3. **Chargement du Contenu**

\`\`\`javascript
// Dans PageComponent.vue
async fetchPageContent() {
  const res = await axios.get(
    \`/api/page_contents?page.slug=/\${encodeURIComponent(this.slug)}\`
  );
  this.pageContent = res.data.member[0];
}
\`\`\`

## 🚀 APIs Disponibles

### Endpoints Principaux

#### 1. **Pages API** (\`/api/\`)
\`\`\`
GET /api/                    - Liste toutes les pages
GET /api/{id}               - Page par ID
GET /api/menus              - Liste tous les menus
\`\`\`

#### 2. **PageContent API** (API Platform)
\`\`\`
GET /api/page_contents                     - Tous les contenus
GET /api/page_contents?page.slug=/slug     - Contenu par slug de page
\`\`\`

#### 3. **Categories API**
\`\`\`
GET /api/categories         - Toutes les catégories
\`\`\`

## 🎨 Rendu des Pages

### Template Principal
\`\`\`vue
<template>
  <div class="page-container">
    <!-- Breadcrumb dynamique -->
    <div v-html="'accueil/' + pageContent.menu.label"></div>
    
    <!-- Titre avec bouton favoris -->
    <h1>{{ pageContent.title }}</h1>
    <FavoriteButton :pageId="getPageId(pageContent.page)" />
    
    <!-- Contenu principal -->
    <div v-html="pageContent.content"></div>
    
    <!-- Code avec coloration syntaxique -->
    <div v-html="pageContent.code"></div>
  </div>
</template>
\`\`\`

### Coloration Syntaxique
Le système utilise **Prism.js** pour la coloration automatique :

\`\`\`javascript
// Auto-détection et application
document.querySelectorAll("pre code").forEach((el) => {
  if (!el.className.includes("language-")) {
    el.classList.add("language-js"); // Défaut JavaScript
  }
  el.innerHTML = el.innerHTML.replace(/^\\s+/gm, ""); // Nettoyage
});
Prism.highlightAll(); // Application des styles
\`\`\`

## 🔍 Fonctionnalités Avancées

### 1. **Recherche Dynamique**
\`\`\`javascript
// Recherche en temps réel dans tous les contenus
searchResults = menus.filter((menu) => {
  const searchableText = [
    menu.title, menu.content, menu.code,
    menu.category?.name, menu.menu?.label
  ].join(" ");
  return searchableText.toLowerCase().includes(query);
});
\`\`\`

### 2. **Système de Favoris**
- Chaque page peut être mise en favoris
- Stockage persistant par utilisateur
- Interface dédiée pour gérer les favoris

### 3. **Navigation Intelligente**
- Menu généré automatiquement à partir des données
- Breadcrumb contextuel
- Navigation responsive (mobile/desktop)

## 📱 Interface Utilisateur

### Navigation Adaptive
\`\`\`vue
<!-- Desktop : Menu latéral fixe -->
<nav class="xl:w-1/6 xl:fixed">
  <div v-for="cat in cats" :key="cat.id">
    <h1>{{ cat.name }}</h1>
    <div v-for="group in menusByCategory[cat.name]">
      <div>{{ group.label }}</div>
      <router-link v-for="menu in group.items" 
                   :to="\`/pages\${menu.page.slug}\`">
        {{ menu.title }}
      </router-link>
    </div>
  </div>
</nav>

<!-- Mobile : Menu hamburger -->
<div class="xl:hidden">
  <button @click="toggleMenu">☰</button>
  <!-- Menu mobile similaire -->
</div>
\`\`\`

## 🔧 Administration (EasyAdmin)

### Gestion du Contenu
L'administration permet de gérer facilement :

1. **Catégories** - Ajout/modification des grandes sections
2. **Menus** - Organisation des sous-sections
3. **Pages** - Création des URLs et structure
4. **PageContent** - Rédaction du contenu, code, etc.

### Workflow de Création
\`\`\`
1. Créer une Category (ex: "Node.js")
2. Créer des Menus liés (ex: "Express", "API")
3. Créer des Pages avec slugs (ex: "/nodejs/express-basics")
4. Rédiger le PageContent associé
5. ✅ La page apparaît automatiquement dans l'interface !
\`\`\`

## 🚀 Avantages du Système

### ✅ **Pour les Développeurs**
- **Extensible** : Ajout facile de nouvelles fonctionnalités
- **Maintenir** : Code organisé et séparation des responsabilités
- **Performance** : Vue.js avec Vite pour un dev rapide

### ✅ **Pour les Rédacteurs**
- **Interface simple** : EasyAdmin pour la gestion de contenu
- **Aperçu en temps réel** : Modifications visibles immédiatement
- **Organisation logique** : Structure hiérarchique claire

### ✅ **Pour les Utilisateurs**
- **Navigation intuitive** : Menu généré automatiquement
- **Recherche puissante** : Dans tous les contenus
- **Responsive** : Parfait sur mobile et desktop
- **Performance** : SPA rapide avec cache intelligent

## 🛠️ Technologies Utilisées

- **Backend** : Symfony 6+ avec API Platform
- **Frontend** : Vue.js 3 avec Vue Router
- **Base de données** : MySQL avec Doctrine ORM
- **Build** : Vite pour Vue.js, Webpack pour EasyAdmin
- **Styles** : Tailwind CSS
- **Icons** : PrimeIcons
- **Syntax Highlighting** : Prism.js

Cette architecture permet de créer facilement des centaines de pages de documentation technique avec une interface utilisateur moderne et une administration simple !`,Tv=`# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 \`<script setup>\` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).
`,Nv=`# Système de Recherche - Mobile et Desktop

## Architecture

Le système de recherche utilise une architecture basée sur des composables Vue.js pour gérer la logique métier et des composants séparés pour l'affichage mobile et desktop.

\`\`\`
┌─────────────────────────────────────────────────────────────┐
│                        App.vue                              │
│                                                             │
│  ┌─────────────────┐    ┌─────────────────┐                │
│  │  useSearch()    │◄───│ useNavigation() │                │
│  │                 │    │                 │                │
│  │  - search       │    │  - modalIsOpen  │                │
│  │  - searchResults│    │  - openModal()  │                │
│  │  - launchSearch │    │  - closeModal() │                │
│  └────────┬────────┘    └─────────────────┘                │
│           │                                                 │
│           ▼                                                 │
│  ┌─────────────────────────────────────────┐               │
│  │         Affichage conditionnel          │               │
│  │                                         │               │
│  │  Desktop: SearchResults.vue             │               │
│  │  Mobile:  SearchResultsMobile.vue       │               │
│  └─────────────────────────────────────────┘               │
└─────────────────────────────────────────────────────────────┘
\`\`\`

---

## Composables

### useSearch.js

Gère toute la logique de recherche.

**Fichier** : \`front/src/composables/useSearch.js\`

\`\`\`javascript
export function useSearch(menus, user, isMobile, onSearchComplete = null) {
  const search = ref('');
  const searchResults = ref([]);
  const searchAnalysis = ref(null);

  const launchSearch = async () => {
    // Logique de recherche...

    // Sur mobile, toujours ouvrir le modal (avec ou sans résultats)
    if (isMobile.value && onSearchComplete) {
      onSearchComplete();
    }

    // Sur desktop, scroller vers les résultats si présents
    if (searchResults.value.length > 0 && !isMobile.value) {
      scrollToResults();
    }
  };

  return { search, searchResults, searchAnalysis, launchSearch, closeSearchResults };
}
\`\`\`

**Paramètres** :
| Paramètre | Type | Description |
|-----------|------|-------------|
| menus | Ref | Liste des menus/pages à rechercher |
| user | Ref | Utilisateur connecté (pour recherche IA) |
| isMobile | Ref | Indique si on est sur mobile |
| onSearchComplete | Function | Callback appelé après recherche sur mobile |

### useNavigation.js

Gère l'état du modal de recherche mobile.

**Fichier** : \`front/src/composables/useNavigation.js\`

\`\`\`javascript
export function useNavigation() {
  const modalIsOpen = ref(false);

  const openModal = () => {
    modalIsOpen.value = true;
  };

  const closeModal = () => {
    modalIsOpen.value = false;
  };

  return { modalIsOpen, openModal, closeModal, /* ... */ };
}
\`\`\`

---

## Composants

### SearchResults.vue (Desktop)

Affiche les résultats en dropdown sous la barre de recherche.

**Fichier** : \`front/src/components/search/SearchResults.vue\`

**Caractéristiques** :
- Affichage en liste déroulante
- Visible uniquement sur desktop (\`hidden md:block\`)
- Fermeture au clic extérieur
- Scroll automatique vers les résultats

### SearchResultsMobile.vue (Mobile)

Affiche les résultats dans un modal plein écran.

**Fichier** : \`front/src/components/search/SearchResultsMobile.vue\`

**Caractéristiques** :
- Modal plein écran
- Visible uniquement sur mobile (\`md:hidden\`)
- Contrôlé par \`modalIsOpen\` prop
- Bouton de fermeture dans le header

\`\`\`vue
<AppModal
  v-if="searchResults.length"
  :model-value="modalIsOpen"
  size="md"
  class="md:hidden"
  @close="$emit('close')"
>
  <!-- Contenu des résultats -->
</AppModal>
\`\`\`

---

## Flux de recherche

### Desktop

\`\`\`
1. Utilisateur tape dans la barre de recherche
       │
       ▼
2. launchSearch() déclenché (Enter ou clic)
       │
       ▼
3. Recherche effectuée (IA ou classique)
       │
       ▼
4. searchResults.value mis à jour
       │
       ▼
5. SearchResults.vue affiche les résultats (dropdown)
       │
       ▼
6. Scroll automatique vers les résultats
\`\`\`

### Mobile

\`\`\`
1. Utilisateur tape dans la barre de recherche
       │
       ▼
2. launchSearch() déclenché
       │
       ▼
3. Recherche effectuée (IA ou classique)
       │
       ▼
4. searchResults.value mis à jour
       │
       ▼
5. onSearchComplete() appelé → openModal()
   (toujours appelé, avec ou sans résultats)
       │
       ▼
6. modalIsOpen = true
       │
       ▼
7. SearchResultsMobile.vue affiche le modal
       │
       ├─── Résultats trouvés → Liste des résultats
       │
       └─── Aucun résultat → Message "Aucun résultat trouvé"
\`\`\`

---

## Types de recherche

### Recherche Intelligente (IA)

Disponible uniquement pour les utilisateurs connectés.

\`\`\`javascript
if (isUserConnected) {
  const isServiceAvailable = await IntelligentSearchService.checkServiceHealth();

  if (isServiceAvailable) {
    const result = await IntelligentSearchService.search(search.value, 15);
    searchResults.value = IntelligentSearchService.formatResults(result.results);
    searchAnalysis.value = result.analysis;
  }
}
\`\`\`

**Fonctionnalités** :
- Analyse sémantique de la requête
- Extraction de mots-clés et technologies
- Détection d'intention
- Résultats plus pertinents

### Recherche Classique (Fallback)

Utilisée quand :
- Utilisateur non connecté
- Service IA indisponible
- Erreur du service IA

\`\`\`javascript
const keywords = query
  .split(/\\s+/)
  .filter(word => word.length > 2 && !stopWords.includes(word));

searchResults.value = menus.value.filter((menu) => {
  const searchableText = [title, content, label, code, slug, category].join(" ");
  return keywords.some(keyword => searchableText.includes(keyword));
});
\`\`\`

**Fonctionnalités** :
- Recherche par mots-clés
- Filtrage des stop words (comment, faire, une, le, la...)
- Scoring par pertinence (titre > catégorie > contenu)

---

## Scoring et tri des résultats

Les résultats sont triés par score de pertinence :

| Critère | Points |
|---------|--------|
| Mot-clé dans le titre | +3 |
| Mot-clé dans la catégorie | +2 |
| Mot-clé dans le contenu | +1 |

\`\`\`javascript
searchResults.value.sort((a, b) => {
  let scoreA = 0, scoreB = 0;

  keywords.forEach(keyword => {
    if (aTitle.includes(keyword)) scoreA += 3;
    if (aCategory.includes(keyword)) scoreA += 2;
    if (aContent.includes(keyword)) scoreA += 1;
    // idem pour B
  });

  return scoreB - scoreA;
});
\`\`\`

---

## Intégration dans App.vue

\`\`\`javascript
// Composables
const { isMobile } = useResponsive();
const { modalIsOpen, openModal, closeModal } = useNavigation();
const { search, searchResults, searchAnalysis, launchSearch } = useSearch(
  menus,
  user,
  isMobile,
  openModal  // Callback pour ouvrir le modal sur mobile
);
\`\`\`

\`\`\`vue
<!-- Desktop -->
<SearchResults
  :searchResults="searchResults"
  :searchAnalysis="searchAnalysis"
  :search="search"
  @close="closeSearchResults"
/>

<!-- Mobile -->
<SearchResultsMobile
  :modalIsOpen="modalIsOpen"
  :searchResults="searchResults"
  :searchAnalysis="searchAnalysis"
  :search="search"
  @close="closeModal"
/>
\`\`\`

---

## Affichage des résultats

### Informations affichées

| Champ | Description |
|-------|-------------|
| title | Titre de la page |
| category | Catégorie de la page |
| hasCode | Badge si contient du code |
| summary | Résumé tronqué (120 caractères sur mobile) |

### Badges d'analyse IA

Affichés si recherche IA utilisée :

\`\`\`vue
<AppBadge v-for="keyword in searchAnalysis.keywords?.slice(0, 2)" variant="primary">
  {{ keyword }}
</AppBadge>
<AppBadge v-for="tech in searchAnalysis.technologies?.slice(0, 1)" variant="success">
  {{ tech }}
</AppBadge>
\`\`\`

---

## Gestion des cas particuliers

### Aucun résultat (Mobile)

Le modal s'ouvre toujours sur mobile, même sans résultats :

\`\`\`vue
<!-- Modal avec résultats -->
<AppModal v-if="searchResults.length" :model-value="modalIsOpen">
  <ul><!-- Liste des résultats --></ul>
</AppModal>

<!-- Modal sans résultats -->
<AppModal v-else-if="modalIsOpen && search && search.trim()">
  <div class="italic text-gray-500 text-center">
    Aucun résultat trouvé pour "{{ search }}".
  </div>
</AppModal>
\`\`\`

### Aucun résultat (Desktop)

Pas de scroll, les résultats vides sont gérés par le composant SearchResults.

### Recherche vide ou trop courte

La recherche n'est pas lancée si moins de 2 caractères :

\`\`\`javascript
if (!search.value.trim() || search.value.trim().length < 2) {
  searchResults.value = [];
  return;  // Pas de modal ouvert, pas de recherche
}
\`\`\`

---

## Fichiers concernés

| Fichier | Rôle |
|---------|------|
| \`composables/useSearch.js\` | Logique de recherche |
| \`composables/useNavigation.js\` | État du modal |
| \`composables/useResponsive.js\` | Détection mobile/desktop |
| \`components/search/SearchResults.vue\` | Affichage desktop |
| \`components/search/SearchResultsMobile.vue\` | Affichage mobile |
| \`services/intelligentSearchService.js\` | Service de recherche IA |
| \`App.vue\` | Orchestration |
`,Dv=`# Sécurité HTML API - Backend Symfony

## Le problème

Le contenu HTML stocké en base de données peut contenir du code malveillant qui sera exécuté côté client (attaques XSS).

\`\`\`
Utilisateur malveillant → Formulaire → HTML dangereux → BDD → API → Frontend → Exécution XSS
\`\`\`

---

## La solution : HTMLPurifier

### Installation

\`\`\`bash
composer require ezyang/htmlpurifier
\`\`\`

---

## Architecture

### 1. Service HtmlSanitizerService

**Fichier** : \`src/Service/HtmlSanitizerService.php\`

\`\`\`php
<?php

namespace App\\Service;

use HTMLPurifier;
use HTMLPurifier_Config;

class HtmlSanitizerService
{
    private HTMLPurifier $purifier;

    public function __construct()
    {
        $config = HTMLPurifier_Config::createDefault();

        // Tags et attributs autorisés
        $config->set('HTML.Allowed', implode(',', [
            'h1[class|id]', 'h2[class|id]', 'h3[class|id]', 'h4[class|id]', 'h5[class|id]', 'h6[class|id]',
            'p[class]', 'br', 'hr',
            'strong', 'em', 'u', 's', 'mark', 'small', 'sub', 'sup',
            'ul[class]', 'ol[class]', 'li[class]',
            'blockquote[class]', 'pre[class]', 'code[class]',
            'span[class]', 'div[class]',
            'table[class]', 'thead', 'tbody', 'tfoot', 'tr', 'th[class|colspan|rowspan]', 'td[class|colspan|rowspan]',
            'a[href|title|target|rel|class]',
            'details[class]', 'summary[class]',
            'img[src|alt|class|width|height]',
            'style',
        ]));

        // Protocoles URL autorisés
        $config->set('URI.AllowedSchemes', [
            'http'   => true,
            'https'  => true,
            'mailto' => true,
        ]);

        // Sécurité des liens externes
        $config->set('HTML.TargetBlank', true);
        $config->set('Attr.AllowedRel', [
            'noopener'    => true,
            'noreferrer'  => true,
            'nofollow'    => true,
        ]);

        // CSS autorisé (optionnel)
        $config->set('CSS.AllowedProperties', [
            'color', 'background-color', 'font-weight', 'font-style',
            'text-align', 'text-decoration', 'margin', 'padding',
            'border', 'width', 'height', 'max-width', 'max-height',
        ]);

        // Encodage
        $config->set('Core.Encoding', 'UTF-8');
        $config->set('Cache.DefinitionImpl', null);
        $config->set('Attr.EnableID', true);

        $this->purifier = new HTMLPurifier($config);
    }

    public function sanitize(?string $html): string
    {
        if (empty($html)) {
            return '';
        }

        $cleanHtml = $this->purifier->purify($html);
        return $this->secureExternalLinks($cleanHtml);
    }

    private function secureExternalLinks(string $html): string
    {
        return preg_replace_callback(
            '/<a\\s+([^>]*target=["\\']_blank["\\'][^>]*)>/i',
            function ($matches) {
                $attributes = $matches[1];
                if (!preg_match('/\\brel\\s*=/i', $attributes)) {
                    return '<a ' . $attributes . ' rel="noopener noreferrer">';
                }
                return $matches[0];
            },
            $html
        );
    }
}
\`\`\`

---

### 2. Entity Listener (Nettoyage automatique)

**Fichier** : \`src/EventListener/PageContentSanitizerListener.php\`

\`\`\`php
<?php

namespace App\\EventListener;

use App\\Entity\\PageContent;
use App\\Service\\HtmlSanitizerService;
use Doctrine\\Bundle\\DoctrineBundle\\Attribute\\AsEntityListener;
use Doctrine\\ORM\\Events;
use Doctrine\\ORM\\Event\\PrePersistEventArgs;
use Doctrine\\ORM\\Event\\PreUpdateEventArgs;

#[AsEntityListener(event: Events::prePersist, entity: PageContent::class)]
#[AsEntityListener(event: Events::preUpdate, entity: PageContent::class)]
class PageContentSanitizerListener
{
    public function __construct(
        private HtmlSanitizerService $sanitizer
    ) {}

    public function prePersist(PageContent $entity, PrePersistEventArgs $event): void
    {
        $this->sanitizeEntity($entity);
    }

    public function preUpdate(PageContent $entity, PreUpdateEventArgs $event): void
    {
        $this->sanitizeEntity($entity);
    }

    private function sanitizeEntity(PageContent $entity): void
    {
        if ($entity->getCode() !== null) {
            $entity->setCode($this->sanitizer->sanitize($entity->getCode()));
        }

        if ($entity->getContent() !== null) {
            $entity->setContent($this->sanitizer->sanitize($entity->getContent()));
        }
    }
}
\`\`\`

---

## Flux de sécurisation

\`\`\`
┌─────────────────────────────────────────────────────────────┐
│  ÉCRITURE (EasyAdmin / API)                                 │
│                                                             │
│  Utilisateur soumet du HTML                                 │
│       │                                                     │
│       ▼                                                     │
│  Doctrine Event: prePersist / preUpdate                     │
│       │                                                     │
│       ▼                                                     │
│  PageContentSanitizerListener                               │
│       │                                                     │
│       ▼                                                     │
│  HtmlSanitizerService->sanitize()                           │
│       │                                                     │
│       ▼                                                     │
│  HTML nettoyé → Base de données                             │
└─────────────────────────────────────────────────────────────┘
\`\`\`

---

## Exemple de nettoyage

### Entrée (malveillante)
\`\`\`html
<div class="principal">
  <h1>Mon titre</h1>
  <p onclick="stealCookies()">Texte normal</p>
  <script>alert('XSS')<\/script>
  <a href="javascript:hack()">Lien piégé</a>
  <img src="x" onerror="malware()">
  <iframe src="https://hacker.com"></iframe>
</div>
\`\`\`

### Sortie (nettoyée)
\`\`\`html
<div class="principal">
  <h1>Mon titre</h1>
  <p>Texte normal</p>

  <a>Lien piégé</a>


</div>
\`\`\`

---

## Configuration

### Tags autorisés

| Catégorie | Tags |
|-----------|------|
| Titres | h1-h6 |
| Texte | p, br, hr, strong, em, u, s, mark, small |
| Listes | ul, ol, li |
| Blocs | blockquote, pre, code, span, div |
| Tables | table, thead, tbody, tr, th, td |
| Liens | a |
| Images | img |
| Interactif | details, summary |
| Styles | style |

### Protocoles URL autorisés

- \`http://\`
- \`https://\`
- \`mailto:\`

### Protocoles bloqués

- \`javascript:\`
- \`data:\`
- \`vbscript:\`

---

## Défense en profondeur

\`\`\`
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   Backend (Symfony + HTMLPurifier)                          │
│   ════════════════════════════════                          │
│   → Nettoie à l'écriture                                    │
│   → Données propres en BDD                                  │
│   → Protection contre injection directe en BDD              │
│                                                             │
└─────────────────────────────────────────────────────────────┘
                              +
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   Frontend (Vue.js + DOMPurify)                             │
│   ═════════════════════════════                             │
│   → Nettoie à l'affichage                                   │
│   → Protection contre bypass du backend                     │
│   → Défense en profondeur                                   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
\`\`\`

| Situation | Backend seul | Frontend seul | Les deux |
|-----------|:------------:|:-------------:|:--------:|
| Attaque via formulaire | ✓ | ✓ | ✓✓ |
| Injection SQL/BDD | ✗ | ✓ | ✓ |
| Bug dans sanitizer | ✗ | ✗ | ✓ |
| Import données externes | ✗ | ✓ | ✓ |
| Performance | ✓ | ✗ | ✓ |
| BDD propre | ✓ | ✗ | ✓ |

---

## Commandes utiles

\`\`\`bash
# Installer HTMLPurifier
composer require ezyang/htmlpurifier

# Vider le cache après modification
php bin/console cache:clear
\`\`\`

---

## Ressources

- [HTMLPurifier Documentation](http://htmlpurifier.org/docs)
- [Symfony Security](https://symfony.com/doc/current/security.html)
- [OWASP XSS Prevention](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html)
`,Mv=`# Filtrage des Catégories/Menus/PageContents par Niveau de Cours

## Objectif

Ajouter des boutons "Junior" / "Intermédiaire" / "Tous" réutilisables sur plusieurs pages pour filtrer les données selon leur niveau.

---

## Architecture globale

\`\`\`
┌─────────────────────────────────────────────────────────────┐
│                         BACKEND                              │
│                                                              │
│  NiveauCours.php → Ajouter Groups sur id et name            │
│                                                              │
│  API Response:                                               │
│  GET /api/categories   → { niveauCours: { name: "Junior" }} │
│  GET /api/menus        → { niveauCours: { name: "Junior" }} │
│  GET /api/page_contents→ { niveauCours: { name: "Junior" }} │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                         FRONTEND                             │
│                                                              │
│  composables/api/useNiveauApi.js  ← Appels API centralisés  │
│              ↓                                               │
│  stores/niveauStore.js            ← État Pinia partagé      │
│              ↓                                               │
│  components/ui/NiveauFilter.vue   ← Composant UI (AppButton)│
│              ↓                                               │
│  Pages (HomePage, CategoryPage...)← Filtrent leurs données  │
└─────────────────────────────────────────────────────────────┘
\`\`\`

---

## 1. Backend (Symfony)

### Modification à faire

**Fichier :** \`src/Entity/NiveauCours.php\`

Ajouter les groupes de sérialisation sur \`id\` et \`name\` :

\`\`\`php
<?php

namespace App\\Entity;

use Symfony\\Component\\Serializer\\Annotation\\Groups; // ← Ajouter cet import

// ... autres imports ...

class NiveauCours
{
    #[ORM\\Id]
    #[ORM\\GeneratedValue]
    #[ORM\\Column]
    #[Groups(['page_content:read'])]  // ← Ajouter
    private ?int $id = null;

    #[ORM\\Column(length: 255, nullable: true)]
    #[Groups(['page_content:read'])]  // ← Ajouter
    private ?string $name = null;

    // ... reste du code ...
}
\`\`\`

### Résultat API

Avant :
\`\`\`json
{
  "id": 1,
  "name": "JavaScript",
  "niveauCours": {}
}
\`\`\`

Après :
\`\`\`json
{
  "id": 1,
  "name": "JavaScript",
  "niveauCours": {
    "id": 1,
    "name": "Junior"
  }
}
\`\`\`

### Toutes les entités concernées

\`\`\`json
// GET /api/categories
{
  "name": "JavaScript",
  "niveauCours": { "id": 1, "name": "Junior" }
}

// GET /api/menus
{
  "label": "Les bases JS",
  "niveauCours": { "id": 1, "name": "Junior" }
}

// GET /api/page_contents
{
  "title": "Variables",
  "niveauCours": { "id": 2, "name": "Intermédiaire" }
}
\`\`\`

---

## 2. Frontend - Structure des fichiers

\`\`\`
front/src/
├── services/
│   └── api.js                   ← Instance axios (déjà existant)
│
├── composables/
│   └── api/
│       └── useNiveauCoursApi.js ← Appel API centralisé
│
├── stores/
│   └── niveauStore.js           ← État Pinia (niveaux + selectedNiveau)
│
└── components/
    └── ui/
        └── NiveauFilter.vue     ← Composant UI (utilise AppButton)
\`\`\`

---

## 3. Frontend - Composable API

**Fichier :** \`front/src/composables/api/useNiveauCoursApi.js\`

\`\`\`javascript
import api from '@/services/api'  // ← Instance axios configurée

export function useNiveauCoursApi() {

  const getNiveaux = async () => {
    const response = await api.get('/niveau_cours')  // baseURL déjà /api
    return response.data['hydra:member'] || response.data
  }

  return {
    getNiveaux
  }
}
\`\`\`

> **Note :** \`api\` est l'instance axios définie dans \`services/api.js\` avec :
> - \`baseURL: '/api'\` → pas besoin de répéter \`/api\`
> - Headers JSON-LD pour API Platform
> - Intercepteurs pour le token et les erreurs

---

## 4. Frontend - Store Pinia

**Fichier :** \`front/src/stores/niveauStore.js\`

\`\`\`javascript
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useNiveauCoursApi } from '@/composables/api/useNiveauCoursApi'

export const useNiveauStore = defineStore('niveau', () => {
  // État
  const niveaux = ref([])
  const selectedNiveau = ref(null)  // null = tous, "Junior", "Intermédiaire"
  const loading = ref(false)

  // API
  const { getNiveaux } = useNiveauCoursApi()

  // Actions
  async function fetchNiveaux() {
    if (niveaux.value.length > 0) return  // Déjà chargé

    loading.value = true
    try {
      niveaux.value = await getNiveaux()
    } catch (error) {
      console.error('Erreur chargement niveaux:', error)
    } finally {
      loading.value = false
    }
  }

  function setNiveau(niveau) {
    selectedNiveau.value = selectedNiveau.value === niveau ? null : niveau
  }

  function resetNiveau() {
    selectedNiveau.value = null
  }

  return {
    // État
    niveaux,
    selectedNiveau,
    loading,
    // Actions
    fetchNiveaux,
    setNiveau,
    resetNiveau
  }
})
\`\`\`

---

## 5. Frontend - Composant UI

**Fichier :** \`front/src/components/ui/NiveauFilter.vue\`

\`\`\`vue
<template>
  <div class="niveau-filter flex gap-2">
    <!-- Bouton "Tous" -->
    <AppButton
      :variant="modelValue === null ? 'primary' : 'outline'"
      size="sm"
      @click="$emit('update:modelValue', null)"
    >
      Tous
    </AppButton>

    <!-- Boutons dynamiques pour chaque niveau -->
    <AppButton
      v-for="niveau in niveaux"
      :key="niveau.id"
      :variant="modelValue === niveau.name ? 'primary' : 'outline'"
      size="sm"
      @click="$emit('update:modelValue', niveau.name)"
    >
      {{ niveau.name }}
    </AppButton>
  </div>
</template>

<script setup>
import AppButton from '@/components/ui/AppButton.vue'

defineProps({
  // Liste des niveaux disponibles
  niveaux: {
    type: Array,
    required: true
  },
  // Niveau actuellement sélectionné (v-model)
  modelValue: {
    type: String,
    default: null
  }
})

defineEmits(['update:modelValue'])
<\/script>
\`\`\`

### Logique visuelle des boutons

| État | Variante AppButton | Apparence |
|------|-------------------|-----------|
| Sélectionné | \`primary\` | Bleu plein |
| Non sélectionné | \`outline\` | Bordure bleue, fond transparent |

\`\`\`
Exemple avec "Intermédiaire" sélectionné :

[ Tous ]  [ Junior ]  [ Intermédiaire ]
 outline    outline       primary
                        (sélectionné)
\`\`\`

---

## 6. Frontend - Utilisation dans les pages

### HomePage.vue

\`\`\`vue
<template>
  <div>
    <!-- Filtre par niveau -->
    <NiveauFilter
      :niveaux="niveauStore.niveaux"
      v-model="niveauStore.selectedNiveau"
    />

    <!-- Grille de catégories filtrées -->
    <div class="categories-grid">
      <div v-for="category in filteredCats" :key="category.id">
        <!-- ... contenu ... -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useNiveauStore } from '@/stores/niveauStore'
import { useData } from '@/utils/fetchDataPwa'
import NiveauFilter from '@/components/ui/NiveauFilter.vue'

const niveauStore = useNiveauStore()
const { cats } = useData()

// Charger les niveaux au montage
onMounted(() => {
  niveauStore.fetchNiveaux()
})

// Catégories filtrées par niveau
const filteredCats = computed(() => {
  if (!niveauStore.selectedNiveau) {
    return cats.value
  }
  return cats.value.filter(c => c.niveauCours?.name === niveauStore.selectedNiveau)
})
<\/script>
\`\`\`

### CategoryPage.vue

\`\`\`vue
<script setup>
import { computed, onMounted } from 'vue'
import { useNiveauStore } from '@/stores/niveauStore'

const niveauStore = useNiveauStore()

onMounted(() => {
  niveauStore.fetchNiveaux()
})

// Menus filtrés par niveau
const filteredMenus = computed(() => {
  if (!niveauStore.selectedNiveau) {
    return menus.value
  }
  return menus.value.filter(m => m.niveauCours?.name === niveauStore.selectedNiveau)
})
<\/script>
\`\`\`

### Autre page avec PageContents

\`\`\`javascript
// Filtrer les pageContents
const filteredContents = computed(() => {
  if (!niveauStore.selectedNiveau) {
    return contents.value
  }
  return contents.value.filter(p => p.niveauCours?.name === niveauStore.selectedNiveau)
})
\`\`\`

---

## 7. Flux des données

\`\`\`
1. Page monte
   └─→ niveauStore.fetchNiveaux()
       └─→ useNiveauCoursApi().getNiveaux()
           └─→ GET /api/niveau_cours
               └─→ niveauStore.niveaux = [{ id: 1, name: "Junior" }, ...]

2. User clique "Junior"
   └─→ NiveauFilter émet update:modelValue("Junior")
       └─→ niveauStore.selectedNiveau = "Junior"
           └─→ Toutes les pages voient le changement (réactif Pinia)

3. Chaque page filtre ses données
   └─→ computed filteredXXX recalculé automatiquement
       └─→ Affichage mis à jour
\`\`\`

---

## 8. Avantages de cette architecture

| Couche | Responsabilité | Avantage |
|--------|----------------|----------|
| \`useNiveauApi\` | Appels HTTP | Un seul endroit pour l'endpoint |
| \`niveauStore\` | État global Pinia | Partagé entre toutes les pages |
| \`NiveauFilter\` | Affichage boutons | Réutilisable, utilise AppButton |
| Pages | Filtrage des données | Chaque page filtre ses propres données |

### Séparation des responsabilités

\`\`\`
NiveauFilter (UI)
├── Ne connaît PAS les données à filtrer
├── Affiche juste des boutons
└── Émet la sélection

Page (Logique métier)
├── Connaît SES données (cats, menus, contents)
├── Utilise selectedNiveau du store
└── Filtre avec un computed
\`\`\`

---

## 9. Checklist d'implémentation

### Backend
- [ ] Ajouter \`use Symfony\\Component\\Serializer\\Annotation\\Groups;\` dans NiveauCours.php
- [ ] Ajouter \`#[Groups(['page_content:read'])]\` sur \`$id\`
- [ ] Ajouter \`#[Groups(['page_content:read'])]\` sur \`$name\`
- [ ] Vider le cache (\`php bin/console cache:clear\`)
- [ ] Tester l'API : \`GET /api/categories\` doit retourner \`niveauCours.name\`

### Frontend
- [ ] Compléter \`composables/api/useNiveauCoursApi.js\`
- [ ] Créer \`stores/niveauStore.js\`
- [ ] Créer \`components/ui/NiveauFilter.vue\`
- [ ] Intégrer dans HomePage.vue
- [ ] Intégrer dans autres pages si nécessaire
- [ ] Tester le filtrage

---

## 10. Persistance avec Pinia Plugin

### Pourquoi un plugin ?

Le store Pinia est en mémoire → le choix de l'utilisateur est perdu au rechargement.
Avec le plugin, les données sont sauvegardées dans localStorage automatiquement.

### Installation

\`\`\`bash
npm install pinia-plugin-persistedstate
\`\`\`

### Configuration (une seule fois)

**Fichier :** \`front/src/main.js\`

\`\`\`javascript
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)  // ← Ajouter

app.use(pinia)
\`\`\`

### Utilisation dans les stores

\`\`\`javascript
// stores/niveauStore.js
export const useNiveauStore = defineStore('niveau', () => {
  const niveaux = ref([])
  const selectedNiveau = ref(null)
  // ...
}, {
  persist: true  // ← Ajouter pour activer la persistance
})
\`\`\`

### Stores multiples

\`\`\`javascript
// Store persisté
export const useNiveauStore = defineStore('niveau', () => {
  // ...
}, {
  persist: true  // ✅ Sauvegardé dans localStorage
})

// Store non persisté
export const useTempStore = defineStore('temp', () => {
  // ...
})  // ❌ Pas de persist = perdu au refresh
\`\`\`

### Options avancées

\`\`\`javascript
{
  persist: {
    key: 'niveau-filter',        // Nom personnalisé dans localStorage
    storage: sessionStorage,      // sessionStorage au lieu de localStorage
    pick: ['selectedNiveau'],     // Persister seulement certains champs
  }
}
\`\`\`

### Durée de stockage

| Stockage | Durée | Supprimé quand... |
|----------|-------|-------------------|
| localStorage (défaut) | **Illimitée** | User vide le cache, ou code le supprime |
| sessionStorage | Session | User ferme l'onglet/navigateur |

### Store complet avec persistance

**Fichier :** \`front/src/stores/niveauStore.js\`

\`\`\`javascript
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useNiveauCoursApi } from '@/composables/api/useNiveauCoursApi'

export const useNiveauStore = defineStore('niveau', () => {
  // État
  const niveaux = ref([])
  const selectedNiveau = ref(null)
  const loading = ref(false)

  // API
  const { getNiveaux } = useNiveauCoursApi()

  // Actions
  async function fetchNiveaux() {
    if (niveaux.value.length > 0) return

    loading.value = true
    try {
      niveaux.value = await getNiveaux()
    } catch (error) {
      console.error('Erreur chargement niveaux:', error)
    } finally {
      loading.value = false
    }
  }

  function setNiveau(niveau) {
    selectedNiveau.value = selectedNiveau.value === niveau ? null : niveau
  }

  function resetNiveau() {
    selectedNiveau.value = null
  }

  return {
    niveaux,
    selectedNiveau,
    loading,
    fetchNiveaux,
    setNiveau,
    resetNiveau
  }
}, {
  persist: {
    pick: ['selectedNiveau']  // Persister seulement la sélection, pas la liste
  }
})
\`\`\`

---

## 11. Pour aller plus loin (optionnel)

### Fonction utilitaire de filtrage

Si la logique de filtrage devient répétitive, créer une fonction :

**Fichier :** \`front/src/utils/filters.js\`

\`\`\`javascript
/**
 * Filtre un tableau par niveau de cours
 * @param {Array} items - Tableau à filtrer
 * @param {string|null} niveau - Niveau sélectionné
 * @param {string} path - Chemin vers niveauCours (défaut: "niveauCours")
 */
export const filterByNiveau = (items, niveau, path = 'niveauCours') => {
  if (!niveau) return items

  return items.filter(item => {
    const niveauCours = path.split('.').reduce((obj, key) => obj?.[key], item)
    return niveauCours?.name === niveau
  })
}
\`\`\`

**Utilisation :**

\`\`\`javascript
import { filterByNiveau } from '@/utils/filters'

const filteredCats = computed(() =>
  filterByNiveau(cats.value, niveauStore.selectedNiveau)
)
\`\`\`
`,Rv=`# Architecture Hexagonale - Plan de Migration

## Table des matières

1. [Introduction](#introduction)
2. [Analyse du projet actuel](#analyse-du-projet-actuel)
3. [Logique métier dispersée](#logique-métier-dispersée)
4. [Structure cible](#structure-cible)
5. [Plan de migration progressif](#plan-de-migration-progressif)
6. [Exemple concret : Domaine Note](#exemple-concret--domaine-note)
7. [Configuration Symfony](#configuration-symfony)
8. [Bonnes pratiques](#bonnes-pratiques)

---

## Introduction

### Qu'est-ce que l'architecture hexagonale ?

L'architecture hexagonale (ou "Ports & Adapters") sépare l'application en 3 couches :

\`\`\`
┌─────────────────────────────────────────────────┐
│                  Infrastructure                  │
│  (Controllers, Doctrine, API externes, CLI...)  │
│                                                  │
│    ┌───────────────────────────────────────┐    │
│    │            Application                 │    │
│    │   (Use Cases, Command/Query Handlers) │    │
│    │                                        │    │
│    │    ┌─────────────────────────────┐    │    │
│    │    │          Domain             │    │    │
│    │    │  (Entities, Value Objects,  │    │    │
│    │    │   Repositories interfaces)  │    │    │
│    │    └─────────────────────────────┘    │    │
│    └───────────────────────────────────────┘    │
└─────────────────────────────────────────────────┘
\`\`\`

### Principes clés

| Couche | Responsabilité | Dépendances |
|--------|---------------|-------------|
| **Domain** | Logique métier pure | Aucune (POPO) |
| **Application** | Orchestration des use cases | Domain uniquement |
| **Infrastructure** | Implémentations techniques | Application + Domain |

**Règle d'or** : Les dépendances vont toujours de l'extérieur vers l'intérieur. Le Domain ne connaît ni Symfony, ni Doctrine.

---

## Analyse du projet actuel

### Métriques globales

| Catégorie | Quantité | Détail |
|-----------|----------|--------|
| Controllers | 41 | 20 CRUD Admin + 10 API + 11 Standard |
| Entités Doctrine | 26 | Relations complexes |
| Repositories | 30 | 97 méthodes total |
| Services | 5 | 19 méthodes métier |
| Routes API | 90 | Endpoints disponibles |
| Lignes PHP | ~7 000 | Source uniquement |

### Domaines fonctionnels identifiés

1. **Gestion des Pages** : \`Page\`, \`PageContent\`, \`PageBlock\`, \`Seo\`
2. **Système QCM** : \`QCM\`, \`ChoicesQCM\`, \`LanguageQCM\`, \`NiveauQCM\`
3. **Gestion des Exercices** : \`Exo\`, \`ExoContent\`, \`ExoBlock\`, \`ExoMenu\`, \`ExoCategorie\`
4. **Gestion des Utilisateurs** : \`User\`, \`UserCustomization\`, \`UserPageVisit\`
5. **Système de Favoris** : \`Favorite\`
6. **Notes Utilisateur** : \`Note\` (chiffrées)
7. **Menus** : \`Menus\`, \`SuperMenu\`, \`PositionMenus\`
8. **SEO** : \`Seo\`, \`SeoService\`
9. **Documentation IA** : \`DocDeCode\`, \`PropositionIA\`
10. **Configuration** : \`SiteConfiguration\`, \`Logo\`

### État actuel - Diagnostic

| Couche | Fichiers | Problèmes identifiés |
|--------|----------|---------------------|
| **Controllers** | 41 | Logique métier mélangée avec HTTP |
| **Entities** | 26 | Couplées à Doctrine (annotations ORM) |
| **Services** | 5 | Bien isolés, bon point de départ |
| **Repositories** | 30 | Implémentations Doctrine directes |

---

## Logique métier dispersée

### NoteController.php (lignes 33-72)

**Problèmes :**
- Validation (pageId + content requis) dans le controller
- Règle métier "créer ou mettre à jour" dans le controller
- Chiffrement avant sauvegarde mélangé avec la réponse HTTP

\`\`\`php
// AVANT - Logique dans le controller
public function createOrUpdate(Request $request): JsonResponse
{
    $data = json_decode($request->getContent(), true);

    if (!isset($data['pageId']) || !isset($data['content'])) {
        return $this->json(['error' => 'pageId et content requis'], 400);
    }

    $page = $this->pageRepository->find($data['pageId']);

    // Logique métier mélangée...
    $note = $this->noteRepository->findOneBy(['user' => $user, 'page' => $page]);
    if (!$note) {
        $note = new Note();
        $note->setUser($user);
        $note->setPage($page);
    }

    $encryptedContent = $this->encryptionService->encrypt($data['content']);
    $note->setContent($encryptedContent);
    // ...
}
\`\`\`

### FavoriteController.php (lignes 163-205)

**Problèmes :**
- Logique toggle (ajouter/supprimer) dans le controller
- Vérification unicité user+page

### PropositionIAController.php (lignes 43-99)

**Problèmes :**
- Logique complexe d'acceptation IA
- Création/mise à jour de PageContent
- Plusieurs repositories manipulés directement

### CustomizationController.php (lignes 46-57)

**Problèmes :**
- Merge des settings user + defaults dans le controller

### QCMApiController.php (lignes 41-76)

**Problèmes :**
- Requêtes QueryBuilder directement dans le controller
- Filtrage par language/difficulty devrait être dans le repository

---

## Structure cible

\`\`\`
src/
├── Domain/                         # Coeur métier (aucune dépendance)
│   ├── Note/
│   │   ├── Entity/
│   │   │   └── Note.php            # Entity pure (sans annotations ORM)
│   │   ├── Repository/
│   │   │   └── NoteRepositoryInterface.php
│   │   ├── Service/
│   │   │   └── NoteEncryption.php
│   │   └── Exception/
│   │       └── NoteNotFoundException.php
│   │
│   ├── Favorite/
│   │   ├── Entity/
│   │   │   └── Favorite.php
│   │   ├── Repository/
│   │   │   └── FavoriteRepositoryInterface.php
│   │   └── Service/
│   │       └── FavoriteToggler.php
│   │
│   ├── QCM/
│   │   ├── Entity/
│   │   │   ├── QCM.php
│   │   │   ├── Choice.php
│   │   │   └── Language.php
│   │   └── Repository/
│   │       └── QCMRepositoryInterface.php
│   │
│   ├── User/
│   │   ├── Entity/
│   │   │   └── User.php
│   │   └── Repository/
│   │       └── UserRepositoryInterface.php
│   │
│   └── Shared/
│       ├── ValueObject/
│       │   ├── Email.php
│       │   └── Slug.php
│       └── Exception/
│           └── DomainException.php
│
├── Application/                    # Use Cases / Handlers
│   ├── Note/
│   │   ├── Command/
│   │   │   ├── CreateOrUpdateNoteCommand.php
│   │   │   └── DeleteNoteCommand.php
│   │   ├── Query/
│   │   │   ├── GetUserNotesQuery.php
│   │   │   └── GetNoteByPageQuery.php
│   │   ├── Handler/
│   │   │   ├── CreateOrUpdateNoteHandler.php
│   │   │   ├── DeleteNoteHandler.php
│   │   │   └── GetUserNotesHandler.php
│   │   └── DTO/
│   │       └── NoteDTO.php
│   │
│   ├── Favorite/
│   │   ├── Command/
│   │   │   └── ToggleFavoriteCommand.php
│   │   └── Handler/
│   │       └── ToggleFavoriteHandler.php
│   │
│   └── QCM/
│       ├── Query/
│       │   ├── GetQCMByLanguageQuery.php
│       │   └── GetQCMByDifficultyQuery.php
│       └── Handler/
│           └── GetQCMHandler.php
│
├── Infrastructure/                 # Implémentations techniques
│   ├── Persistence/
│   │   └── Doctrine/
│   │       ├── Entity/             # Entities avec annotations ORM
│   │       │   ├── Note.php
│   │       │   ├── Favorite.php
│   │       │   └── ...
│   │       ├── Repository/
│   │       │   ├── DoctrineNoteRepository.php
│   │       │   ├── DoctrineFavoriteRepository.php
│   │       │   └── ...
│   │       └── Mapping/            # Fichiers XML/YAML si besoin
│   │
│   ├── Http/
│   │   ├── Controller/
│   │   │   ├── Api/
│   │   │   │   ├── NoteController.php
│   │   │   │   ├── FavoriteController.php
│   │   │   │   └── ...
│   │   │   └── Admin/              # EasyAdmin (reste tel quel)
│   │   │       └── ...
│   │   └── Request/
│   │       └── CreateNoteRequest.php
│   │
│   ├── Security/
│   │   ├── ApiKeyAuthenticator.php
│   │   └── AuthAuthenticator.php
│   │
│   └── EventListener/
│       ├── UserPageVisitListener.php
│       └── PageContentSanitizerListener.php
│
├── Entity/                         # EXISTANT (phase transition)
├── Controller/                     # EXISTANT (phase transition)
├── Repository/                     # EXISTANT (phase transition)
└── Service/                        # EXISTANT (phase transition)
\`\`\`

---

## Plan de migration progressif

### Ordre de priorité

| Priorité | Domaine | Raison | Complexité | Fichiers impactés |
|----------|---------|--------|------------|-------------------|
| 1 | **Note** | Service déjà isolé, peu de dépendances | Faible | 3 |
| 2 | **Favorite** | Logique simple toggle/CRUD | Faible | 3 |
| 3 | **Customization** | Validation déjà en service | Moyenne | 4 |
| 4 | **QCM** | Requêtes à déplacer dans repository | Moyenne | 5 |
| 5 | **PropositionIA** | Logique complexe, plusieurs entities | Élevée | 6+ |
| 6 | **Page/Content** | Coeur de l'application | Élevée | 10+ |

### Phase 1 : Mise en place de la structure

1. Créer les dossiers \`Domain/\`, \`Application/\`, \`Infrastructure/\`
2. Configurer l'autoloading dans \`composer.json\`
3. Configurer Symfony Messenger pour les Command/Query buses
4. Créer les premières interfaces de repository

### Phase 2 : Migration du domaine Note (exemple)

1. Créer \`NoteRepositoryInterface\` dans Domain
2. Créer \`CreateOrUpdateNoteHandler\` dans Application
3. Implémenter \`DoctrineNoteRepository\` dans Infrastructure
4. Alléger le controller existant
5. Tester

### Phase 3 : Migration des autres domaines

Répéter le processus pour chaque domaine dans l'ordre de priorité.

### Phase 4 : Nettoyage

1. Supprimer les anciens fichiers migrés
2. Réorganiser les imports
3. Mettre à jour la documentation

---

## Exemple concret : Domaine Note

### Étape 1 : Interface Repository (Domain)

\`\`\`php
<?php
// src/Domain/Note/Repository/NoteRepositoryInterface.php

namespace App\\Domain\\Note\\Repository;

use App\\Domain\\Note\\Entity\\Note;
use App\\Domain\\User\\Entity\\User;

interface NoteRepositoryInterface
{
    public function findById(int $id): ?Note;

    public function findByUserAndPage(User $user, int $pageId): ?Note;

    public function findAllByUser(User $user): array;

    public function save(Note $note): void;

    public function delete(Note $note): void;
}
\`\`\`

### Étape 2 : Entity Domain (pure PHP)

\`\`\`php
<?php
// src/Domain/Note/Entity/Note.php

namespace App\\Domain\\Note\\Entity;

use App\\Domain\\User\\Entity\\User;

class Note
{
    private ?int $id = null;
    private User $user;
    private int $pageId;
    private string $encryptedContent;
    private \\DateTimeImmutable $createdAt;
    private \\DateTimeImmutable $updatedAt;

    public function __construct(User $user, int $pageId, string $encryptedContent)
    {
        $this->user = $user;
        $this->pageId = $pageId;
        $this->encryptedContent = $encryptedContent;
        $this->createdAt = new \\DateTimeImmutable();
        $this->updatedAt = new \\DateTimeImmutable();
    }

    public function updateContent(string $encryptedContent): void
    {
        $this->encryptedContent = $encryptedContent;
        $this->updatedAt = new \\DateTimeImmutable();
    }

    // Getters...
    public function getId(): ?int { return $this->id; }
    public function getUser(): User { return $this->user; }
    public function getPageId(): int { return $this->pageId; }
    public function getEncryptedContent(): string { return $this->encryptedContent; }
    public function getCreatedAt(): \\DateTimeImmutable { return $this->createdAt; }
    public function getUpdatedAt(): \\DateTimeImmutable { return $this->updatedAt; }
}
\`\`\`

### Étape 3 : Command (Application)

\`\`\`php
<?php
// src/Application/Note/Command/CreateOrUpdateNoteCommand.php

namespace App\\Application\\Note\\Command;

use App\\Domain\\User\\Entity\\User;

final class CreateOrUpdateNoteCommand
{
    public function __construct(
        public readonly User $user,
        public readonly int $pageId,
        public readonly string $content  // Contenu en clair
    ) {}
}
\`\`\`

### Étape 4 : Handler (Application)

\`\`\`php
<?php
// src/Application/Note/Handler/CreateOrUpdateNoteHandler.php

namespace App\\Application\\Note\\Handler;

use App\\Application\\Note\\Command\\CreateOrUpdateNoteCommand;
use App\\Application\\Note\\DTO\\NoteDTO;
use App\\Domain\\Note\\Entity\\Note;
use App\\Domain\\Note\\Repository\\NoteRepositoryInterface;
use App\\Domain\\Note\\Service\\NoteEncryption;

final class CreateOrUpdateNoteHandler
{
    public function __construct(
        private NoteRepositoryInterface $noteRepository,
        private NoteEncryption $encryption
    ) {}

    public function handle(CreateOrUpdateNoteCommand $command): NoteDTO
    {
        $encryptedContent = $this->encryption->encrypt($command->content);

        $note = $this->noteRepository->findByUserAndPage(
            $command->user,
            $command->pageId
        );

        if ($note === null) {
            $note = new Note(
                $command->user,
                $command->pageId,
                $encryptedContent
            );
        } else {
            $note->updateContent($encryptedContent);
        }

        $this->noteRepository->save($note);

        return NoteDTO::fromEntity($note, $command->content);
    }
}
\`\`\`

### Étape 5 : DTO (Application)

\`\`\`php
<?php
// src/Application/Note/DTO/NoteDTO.php

namespace App\\Application\\Note\\DTO;

use App\\Domain\\Note\\Entity\\Note;

final class NoteDTO
{
    public function __construct(
        public readonly int $id,
        public readonly int $pageId,
        public readonly string $content,  // Contenu déchiffré
        public readonly string $createdAt,
        public readonly string $updatedAt
    ) {}

    public static function fromEntity(Note $note, string $decryptedContent): self
    {
        return new self(
            id: $note->getId(),
            pageId: $note->getPageId(),
            content: $decryptedContent,
            createdAt: $note->getCreatedAt()->format('Y-m-d H:i:s'),
            updatedAt: $note->getUpdatedAt()->format('Y-m-d H:i:s')
        );
    }
}
\`\`\`

### Étape 6 : Implémentation Doctrine (Infrastructure)

\`\`\`php
<?php
// src/Infrastructure/Persistence/Doctrine/Repository/DoctrineNoteRepository.php

namespace App\\Infrastructure\\Persistence\\Doctrine\\Repository;

use App\\Domain\\Note\\Entity\\Note;
use App\\Domain\\Note\\Repository\\NoteRepositoryInterface;
use App\\Domain\\User\\Entity\\User;
use Doctrine\\ORM\\EntityManagerInterface;

final class DoctrineNoteRepository implements NoteRepositoryInterface
{
    public function __construct(
        private EntityManagerInterface $em
    ) {}

    public function findById(int $id): ?Note
    {
        return $this->em->find(Note::class, $id);
    }

    public function findByUserAndPage(User $user, int $pageId): ?Note
    {
        return $this->em->createQueryBuilder()
            ->select('n')
            ->from(Note::class, 'n')
            ->where('n.user = :user')
            ->andWhere('n.pageId = :pageId')
            ->setParameter('user', $user)
            ->setParameter('pageId', $pageId)
            ->getQuery()
            ->getOneOrNullResult();
    }

    public function findAllByUser(User $user): array
    {
        return $this->em->createQueryBuilder()
            ->select('n')
            ->from(Note::class, 'n')
            ->where('n.user = :user')
            ->orderBy('n.updatedAt', 'DESC')
            ->setParameter('user', $user)
            ->getQuery()
            ->getResult();
    }

    public function save(Note $note): void
    {
        $this->em->persist($note);
        $this->em->flush();
    }

    public function delete(Note $note): void
    {
        $this->em->remove($note);
        $this->em->flush();
    }
}
\`\`\`

### Étape 7 : Controller allégé (Infrastructure)

\`\`\`php
<?php
// src/Infrastructure/Http/Controller/Api/NoteController.php

namespace App\\Infrastructure\\Http\\Controller\\Api;

use App\\Application\\Note\\Command\\CreateOrUpdateNoteCommand;
use App\\Application\\Note\\Handler\\CreateOrUpdateNoteHandler;
use Symfony\\Bundle\\FrameworkBundle\\Controller\\AbstractController;
use Symfony\\Component\\HttpFoundation\\JsonResponse;
use Symfony\\Component\\HttpFoundation\\Request;
use Symfony\\Component\\HttpFoundation\\Response;
use Symfony\\Component\\Routing\\Attribute\\Route;
use Symfony\\Component\\Security\\Http\\Attribute\\IsGranted;

#[Route('/api/notes')]
#[IsGranted('ROLE_USER')]
final class NoteController extends AbstractController
{
    #[Route('', name: 'api_note_create', methods: ['POST'])]
    public function create(
        Request $request,
        CreateOrUpdateNoteHandler $handler
    ): JsonResponse {
        $data = json_decode($request->getContent(), true);

        if (!isset($data['pageId'], $data['content'])) {
            return $this->json(
                ['error' => 'pageId et content requis'],
                Response::HTTP_BAD_REQUEST
            );
        }

        $command = new CreateOrUpdateNoteCommand(
            user: $this->getUser(),
            pageId: (int) $data['pageId'],
            content: $data['content']
        );

        $noteDTO = $handler->handle($command);

        return $this->json($noteDTO, Response::HTTP_CREATED);
    }
}
\`\`\`

---

## Configuration Symfony

### services.yaml

\`\`\`yaml
# config/services.yaml
services:
    _defaults:
        autowire: true
        autoconfigure: true

    # Domain Services
    App\\Domain\\:
        resource: '../src/Domain/'
        exclude:
            - '../src/Domain/**/Entity/'

    # Application Handlers
    App\\Application\\:
        resource: '../src/Application/'

    # Infrastructure
    App\\Infrastructure\\:
        resource: '../src/Infrastructure/'
        exclude:
            - '../src/Infrastructure/Persistence/Doctrine/Entity/'

    # Bind interfaces to implementations
    App\\Domain\\Note\\Repository\\NoteRepositoryInterface:
        class: App\\Infrastructure\\Persistence\\Doctrine\\Repository\\DoctrineNoteRepository

    App\\Domain\\Favorite\\Repository\\FavoriteRepositoryInterface:
        class: App\\Infrastructure\\Persistence\\Doctrine\\Repository\\DoctrineFavoriteRepository
\`\`\`

### messenger.yaml (optionnel, pour CQRS complet)

\`\`\`yaml
# config/packages/messenger.yaml
framework:
    messenger:
        default_bus: command.bus

        buses:
            command.bus:
                middleware:
                    - doctrine_transaction
            query.bus: ~

        routing:
            'App\\Application\\*\\Command\\*': command.bus
            'App\\Application\\*\\Query\\*': query.bus
\`\`\`

### doctrine.yaml (mapping des entities)

\`\`\`yaml
# config/packages/doctrine.yaml
doctrine:
    orm:
        mappings:
            Domain:
                is_bundle: false
                type: attribute
                dir: '%kernel.project_dir%/src/Domain'
                prefix: 'App\\Domain'
                alias: Domain
\`\`\`

---

## Bonnes pratiques

### Ce qu'il faut faire

- **Commencer petit** : migrer un domaine simple (Note, Favorite) pour valider l'approche
- **Faire cohabiter** : l'ancien et le nouveau code pendant la transition
- **Tester** : chaque handler doit être testable unitairement
- **Documenter** : mettre à jour cette doc au fur et à mesure

### Ce qu'il ne faut pas faire

- **Tout migrer d'un coup** : risque de régression majeure
- **Dupliquer les entities** : utiliser le mapping Doctrine sur les entities Domain
- **Ignorer EasyAdmin** : les controllers CRUD admin restent dans Infrastructure, pas besoin de les migrer
- **Sur-architecturer** : pas besoin de CQRS complet pour un projet de cette taille

### Tests recommandés

\`\`\`php
// tests/Application/Note/Handler/CreateOrUpdateNoteHandlerTest.php

class CreateOrUpdateNoteHandlerTest extends TestCase
{
    public function testCreateNewNote(): void
    {
        $noteRepository = $this->createMock(NoteRepositoryInterface::class);
        $encryption = $this->createMock(NoteEncryption::class);

        $noteRepository->expects($this->once())
            ->method('findByUserAndPage')
            ->willReturn(null);

        $noteRepository->expects($this->once())
            ->method('save');

        $encryption->expects($this->once())
            ->method('encrypt')
            ->with('Mon contenu')
            ->willReturn('encrypted_content');

        $handler = new CreateOrUpdateNoteHandler($noteRepository, $encryption);

        $command = new CreateOrUpdateNoteCommand(
            user: $this->createMock(User::class),
            pageId: 1,
            content: 'Mon contenu'
        );

        $result = $handler->handle($command);

        $this->assertInstanceOf(NoteDTO::class, $result);
    }
}
\`\`\`

---

## Implémentation réalisée

### Comment ça marche ? (Explication détaillée)

#### Le problème initial

Dans une architecture classique Symfony, le **Controller** fait tout :
- Reçoit la requête HTTP
- Valide les données
- Exécute la logique métier (créer, modifier, supprimer)
- Appelle Doctrine directement
- Retourne la réponse

**Problème** : Si tu veux réutiliser la logique ailleurs (CLI, autre API, tests), tu dois dupliquer le code.

#### La solution hexagonale : séparer les responsabilités

\`\`\`
┌─────────────────────────────────────────────────────────────────────────┐
│                         CE QUI ENTRE (Ports d'entrée)                   │
│                                                                         │
│   API REST          CLI Command         Tests          Autre service    │
│      │                  │                 │                  │          │
│      └──────────────────┴─────────────────┴──────────────────┘          │
│                                   │                                     │
│                                   ▼                                     │
│                         ┌─────────────────┐                             │
│                         │    HANDLER      │  ← Logique métier           │
│                         │  (Application)  │    (le "cerveau")           │
│                         └─────────────────┘                             │
│                                   │                                     │
│                    Utilise des INTERFACES (contrats)                    │
│                                   │                                     │
│      ┌──────────────────┬─────────────────┬──────────────────┐          │
│      ▼                  ▼                 ▼                  ▼          │
│ ┌─────────┐      ┌─────────────┐   ┌───────────┐     ┌───────────┐     │
│ │Doctrine │      │ Encryption  │   │  Mailer   │     │ External  │     │
│ │Repository│     │  Service    │   │  Service  │     │   API     │     │
│ └─────────┘      └─────────────┘   └───────────┘     └───────────┘     │
│                                                                         │
│                      CE QUI SORT (Ports de sortie)                      │
│                         Infrastructure technique                         │
└─────────────────────────────────────────────────────────────────────────┘
\`\`\`

#### Les 3 couches expliquées

| Couche | Rôle | Connaît | Ne connaît PAS |
|--------|------|---------|----------------|
| **Controller** | Traduit HTTP → Command/Query | Application | Doctrine, BDD |
| **Handler** | Exécute la logique métier | Interfaces Domain | Implémentations |
| **Infrastructure** | Implémente les interfaces | Doctrine, services externes | Rien d'autre |

---

### Liens entre les fichiers (exemple Note)

#### 1. L'utilisateur appelle l'API

\`\`\`
POST /api/me-notes/create-or-update
Content-Type: application/json

{
    "pageId": 42,
    "content": "Ma note sur cette page"
}
\`\`\`

#### 2. Le Controller reçoit la requête

📁 \`src/Controller/Api/NoteController.php\`

\`\`\`php
#[Route('/api/me-notes')]
class NoteController extends AbstractController
{
    // Le handler est injecté par Symfony (autowiring)
    public function __construct(
        private CreateOrUpdateNoteHandler $handler  // ← Injection
    ) {}

    #[Route('/create-or-update', methods: ['POST'])]
    public function createOrUpdate(Request $request): JsonResponse
    {
        // 1. Extraire les données JSON
        $data = json_decode($request->getContent(), true);

        // 2. Créer un objet Command (simple conteneur de données)
        $command = new CreateOrUpdateNoteCommand(
            user: $this->getUser(),      // User connecté
            pageId: (int) $data['pageId'],
            content: $data['content']     // Contenu en clair
        );

        // 3. Déléguer au Handler (toute la logique est là-bas)
        $noteDTO = $this->handler->handle($command);

        // 4. Retourner la réponse JSON
        return $this->json($noteDTO->toArray(), Response::HTTP_CREATED);
    }
}
\`\`\`

**Le Controller ne sait PAS** :
- Comment la note est sauvegardée (MySQL ? MongoDB ? Fichier ?)
- Comment le contenu est chiffré
- Si c'est une création ou une mise à jour

#### 3. Le Command transporte les données

📁 \`src/Application/Note/Command/CreateOrUpdateNoteCommand.php\`

\`\`\`php
final class CreateOrUpdateNoteCommand
{
    public function __construct(
        public readonly User $user,    // Qui fait l'action
        public readonly int $pageId,   // Sur quelle page
        public readonly string $content // Le contenu à sauvegarder
    ) {}
}
\`\`\`

**C'est juste un "sac" de données** - aucune logique dedans.

#### 4. Le Handler exécute la logique métier

📁 \`src/Application/Note/Handler/CreateOrUpdateNoteHandler.php\`

\`\`\`php
final class CreateOrUpdateNoteHandler
{
    public function __construct(
        // Injection d'INTERFACES, pas d'implémentations !
        private NoteRepositoryInterface $noteRepository,    // ← Interface
        private NoteEncryptionInterface $encryptionService, // ← Interface
        private PageRepository $pageRepository
    ) {}

    public function handle(CreateOrUpdateNoteCommand $command): NoteDTO
    {
        // 1. Vérifier que la page existe
        $page = $this->pageRepository->find($command->pageId);
        if (!$page) {
            throw new \\InvalidArgumentException('Page non trouvée');
        }

        // 2. Chiffrer le contenu (via l'interface)
        $encryptedContent = $this->encryptionService->encrypt($command->content);

        // 3. Chercher si une note existe déjà (via l'interface)
        $note = $this->noteRepository->findByUserAndPage($command->user, $page);

        // 4. Logique métier : créer ou mettre à jour
        if ($note === null) {
            $note = new Note();
            $note->setUser($command->user);
            $note->setPage($page);
        }
        $note->setContent($encryptedContent);

        // 5. Sauvegarder (via l'interface)
        $this->noteRepository->save($note);

        // 6. Retourner un DTO (pas l'entité directement)
        return NoteDTO::fromEntity($note, $command->content);
    }
}
\`\`\`

**Le Handler ne sait PAS** :
- Que c'est Doctrine qui persiste (il utilise une interface)
- Quel algorithme de chiffrement est utilisé
- Qu'il y a une requête HTTP derrière

#### 5. Les Interfaces définissent les contrats

📁 \`src/Domain/Note/Repository/NoteRepositoryInterface.php\`

\`\`\`php
interface NoteRepositoryInterface
{
    public function findById(int $id): ?Note;
    public function findByUserAndPage(User $user, Page $page): ?Note;
    public function findAllByUser(User $user): array;
    public function save(Note $note): void;
    public function delete(Note $note): void;
}
\`\`\`

📁 \`src/Domain/Note/Service/NoteEncryptionInterface.php\`

\`\`\`php
interface NoteEncryptionInterface
{
    public function encrypt(string $content): string;
    public function decrypt(string $encryptedContent): string;
}
\`\`\`

**Les interfaces sont des "contrats"** : elles disent CE QUE l'on peut faire, pas COMMENT.

#### 6. L'Infrastructure implémente les interfaces

📁 \`src/Infrastructure/Note/Repository/DoctrineNoteRepository.php\`

\`\`\`php
final class DoctrineNoteRepository implements NoteRepositoryInterface
{
    public function __construct(
        private EntityManagerInterface $em  // ← Doctrine ici !
    ) {}

    public function findByUserAndPage(User $user, Page $page): ?Note
    {
        return $this->em->getRepository(Note::class)
            ->createQueryBuilder('n')
            ->andWhere('n.user = :user')
            ->andWhere('n.page = :page')
            ->setParameter('user', $user)
            ->setParameter('page', $page)
            ->getQuery()
            ->getOneOrNullResult();
    }

    public function save(Note $note): void
    {
        $this->em->persist($note);
        $this->em->flush();
    }
    // ... autres méthodes
}
\`\`\`

📁 \`src/Infrastructure/Note/Service/NoteEncryptionService.php\`

\`\`\`php
final class NoteEncryptionService implements NoteEncryptionInterface
{
    public function __construct(
        private string $appSecret  // ← Clé de chiffrement
    ) {}

    public function encrypt(string $content): string
    {
        // Implémentation technique avec OpenSSL
        $iv = random_bytes(16);
        $encrypted = openssl_encrypt($content, 'aes-256-cbc', $this->appSecret, 0, $iv);
        return base64_encode($iv . $encrypted);
    }
    // ...
}
\`\`\`

#### 7. Symfony lie Interface → Implémentation

📁 \`config/services.yaml\`

\`\`\`yaml
services:
    # 1. Déclarer l'implémentation avec ses arguments
    App\\Infrastructure\\Note\\Service\\NoteEncryptionService:
        arguments:
            $appSecret: '%kernel.secret%'

    App\\Infrastructure\\Note\\Repository\\DoctrineNoteRepository: ~

    # 2. Dire à Symfony : "Quand on demande l'interface, donne l'implémentation"
    App\\Domain\\Note\\Repository\\NoteRepositoryInterface:
        '@App\\Infrastructure\\Note\\Repository\\DoctrineNoteRepository'

    App\\Domain\\Note\\Service\\NoteEncryptionInterface:
        '@App\\Infrastructure\\Note\\Service\\NoteEncryptionService'
\`\`\`

**Quand le Handler demande \`NoteRepositoryInterface\`**, Symfony injecte automatiquement \`DoctrineNoteRepository\`.

---

### Schéma récapitulatif des liens

\`\`\`
┌─────────────────────────────────────────────────────────────────────────────┐
│                              REQUÊTE HTTP                                    │
│                    POST /api/me-notes/create-or-update                       │
│                    { "pageId": 42, "content": "Ma note" }                    │
└─────────────────────────────────────────────────────────────────────────────┘
                                      │
                                      ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│  CONTROLLER (src/Controller/Api/NoteController.php)                         │
│                                                                              │
│  • Reçoit Request HTTP                                                       │
│  • Crée CreateOrUpdateNoteCommand                                            │
│  • Appelle Handler->handle()                                                 │
│  • Retourne JsonResponse                                                     │
└─────────────────────────────────────────────────────────────────────────────┘
                                      │
                    new CreateOrUpdateNoteCommand(user, 42, "Ma note")
                                      │
                                      ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│  HANDLER (src/Application/Note/Handler/CreateOrUpdateNoteHandler.php)       │
│                                                                              │
│  Dépendances injectées :                                                     │
│  ┌──────────────────────────────┐  ┌──────────────────────────────┐         │
│  │ NoteRepositoryInterface     │  │ NoteEncryptionInterface      │         │
│  │ (interface Domain)          │  │ (interface Domain)           │         │
│  └──────────────────────────────┘  └──────────────────────────────┘         │
│                │                                  │                          │
│                │ services.yaml                    │ services.yaml            │
│                │ fait le lien                     │ fait le lien             │
│                ▼                                  ▼                          │
│  ┌──────────────────────────────┐  ┌──────────────────────────────┐         │
│  │ DoctrineNoteRepository      │  │ NoteEncryptionService        │         │
│  │ (implémentation Infra)      │  │ (implémentation Infra)       │         │
│  │                              │  │                              │         │
│  │ Utilise EntityManager       │  │ Utilise openssl_encrypt      │         │
│  │ pour MySQL/PostgreSQL       │  │ avec APP_SECRET              │         │
│  └──────────────────────────────┘  └──────────────────────────────┘         │
└─────────────────────────────────────────────────────────────────────────────┘
                                      │
                                      ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│  DOCTRINE (Entity Manager)                                                   │
│                                                                              │
│  • persist($note) → Prépare l'INSERT/UPDATE                                 │
│  • flush() → Exécute la requête SQL                                         │
│                                                                              │
│  INSERT INTO appy_note (user_id, page_id, content, created_at)              │
│  VALUES (1, 42, 'base64_encrypted_content...', NOW())                       │
└─────────────────────────────────────────────────────────────────────────────┘
                                      │
                                      ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│  BASE DE DONNÉES MySQL                                                       │
│                                                                              │
│  Table: appy_note                                                            │
│  ┌────┬─────────┬─────────┬──────────────────────────┬─────────────────────┐│
│  │ id │ user_id │ page_id │ content                  │ created_at          ││
│  ├────┼─────────┼─────────┼──────────────────────────┼─────────────────────┤│
│  │ 1  │ 1       │ 42      │ YWJjZGVm...              │ 2026-01-05 16:30:00 ││
│  └────┴─────────┴─────────┴──────────────────────────┴─────────────────────┘│
└─────────────────────────────────────────────────────────────────────────────┘
\`\`\`

---

### Pourquoi ces interfaces ?

#### Sans interface (couplage fort)

\`\`\`php
class CreateOrUpdateNoteHandler
{
    public function __construct(
        private DoctrineNoteRepository $noteRepository  // ← Couplé à Doctrine !
    ) {}
}
\`\`\`

**Problèmes** :
- Pour tester, tu dois avoir une BDD
- Pour changer de BDD (MongoDB), tu dois modifier le Handler
- Le Handler "sait" qu'il utilise Doctrine

#### Avec interface (couplage faible)

\`\`\`php
class CreateOrUpdateNoteHandler
{
    public function __construct(
        private NoteRepositoryInterface $noteRepository  // ← Juste un contrat
    ) {}
}
\`\`\`

**Avantages** :
- Pour tester, tu peux créer un FakeNoteRepository en mémoire
- Pour changer de BDD, tu crées MongoNoteRepository qui implémente l'interface
- Le Handler ne sait pas (et s'en fiche) comment c'est stocké

---

### Vue d'ensemble

Deux domaines ont été migrés vers l'architecture hexagonale : **Note** et **Favorite**.

\`\`\`
src/
├── Domain/                          # Couche métier (INTERFACES)
│   ├── Note/
│   │   ├── Repository/
│   │   │   └── NoteRepositoryInterface.php    # Contrat pour la persistance
│   │   ├── Service/
│   │   │   └── NoteEncryptionInterface.php    # Contrat pour le chiffrement
│   │   └── Exception/
│   │       ├── NoteNotFoundException.php      # Exception métier
│   │       └── UnauthorizedNoteAccessException.php
│   │
│   └── Favorite/
│       ├── Repository/
│       │   └── FavoriteRepositoryInterface.php
│       └── Exception/
│           ├── FavoriteNotFoundException.php
│           ├── FavoriteAlreadyExistsException.php
│           └── UnauthorizedFavoriteAccessException.php
│
├── Application/                     # Couche use-cases (ORCHESTRATION)
│   ├── Note/
│   │   ├── Command/                 # Actions qui modifient l'état
│   │   │   ├── CreateOrUpdateNoteCommand.php
│   │   │   └── DeleteNoteCommand.php
│   │   ├── Query/                   # Lectures sans effet de bord
│   │   │   ├── GetUserNotesQuery.php
│   │   │   └── GetNoteByPageQuery.php
│   │   ├── Handler/                 # Logique métier
│   │   │   ├── CreateOrUpdateNoteHandler.php
│   │   │   ├── DeleteNoteHandler.php
│   │   │   ├── GetUserNotesHandler.php
│   │   │   └── GetNoteByPageHandler.php
│   │   └── DTO/
│   │       └── NoteDTO.php          # Objet de transfert vers le controller
│   │
│   └── Favorite/
│       ├── Command/
│       │   ├── AddFavoriteCommand.php
│       │   ├── RemoveFavoriteCommand.php
│       │   └── ToggleFavoriteCommand.php
│       ├── Query/
│       │   ├── GetUserFavoritesQuery.php
│       │   ├── GetFavoriteByIdQuery.php
│       │   └── CheckFavoriteQuery.php
│       ├── Handler/
│       │   ├── AddFavoriteHandler.php
│       │   ├── RemoveFavoriteHandler.php
│       │   ├── ToggleFavoriteHandler.php
│       │   ├── GetUserFavoritesHandler.php
│       │   ├── GetFavoriteByIdHandler.php
│       │   └── CheckFavoriteHandler.php
│       └── DTO/
│           └── FavoriteDTO.php
│
└── Infrastructure/                  # Couche technique (IMPLÉMENTATIONS)
    ├── Note/
    │   ├── Repository/
    │   │   └── DoctrineNoteRepository.php    # Implémente NoteRepositoryInterface
    │   └── Service/
    │       └── NoteEncryptionService.php     # Implémente NoteEncryptionInterface
    │
    └── Favorite/
        └── Repository/
            └── DoctrineFavoriteRepository.php
\`\`\`

### Flux de données

\`\`\`
┌─────────────────────────────────────────────────────────────────────────────┐
│                              REQUÊTE HTTP                                    │
│                    POST /api/notes { pageId: 1, content: "..." }            │
└─────────────────────────────────────────────────────────────────────────────┘
                                      │
                                      ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                             CONTROLLER                                       │
│  src/Controller/Api/NoteController.php                                      │
│                                                                              │
│  1. Extrait les données JSON de la requête                                  │
│  2. Valide la présence des champs requis                                    │
│  3. Crée un Command avec les données                                        │
│  4. Appelle le Handler                                                      │
│  5. Retourne la réponse JSON                                                │
└─────────────────────────────────────────────────────────────────────────────┘
                                      │
                    new CreateOrUpdateNoteCommand(user, pageId, content)
                                      │
                                      ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                             HANDLER (Application)                            │
│  src/Application/Note/Handler/CreateOrUpdateNoteHandler.php                 │
│                                                                              │
│  LOGIQUE MÉTIER :                                                           │
│  1. Chiffre le contenu via NoteEncryptionInterface                          │
│  2. Cherche une note existante via NoteRepositoryInterface                  │
│  3. Crée ou met à jour la note                                              │
│  4. Sauvegarde via le repository                                            │
│  5. Retourne un NoteDTO                                                     │
└─────────────────────────────────────────────────────────────────────────────┘
                          │                          │
        NoteEncryptionInterface           NoteRepositoryInterface
                          │                          │
                          ▼                          ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                          INFRASTRUCTURE                                      │
│                                                                              │
│  NoteEncryptionService              DoctrineNoteRepository                  │
│  ┌─────────────────────┐            ┌─────────────────────┐                 │
│  │ encrypt($content)   │            │ findByUserAndPage() │                 │
│  │ decrypt($encrypted) │            │ save($note)         │                 │
│  │                     │            │ delete($note)       │                 │
│  │ Utilise APP_SECRET  │            │ Utilise Doctrine    │                 │
│  └─────────────────────┘            └─────────────────────┘                 │
└─────────────────────────────────────────────────────────────────────────────┘
\`\`\`

### Configuration services.yaml

\`\`\`yaml
# config/services.yaml

# 1. Déclarer les services Infrastructure AVANT les bindings
App\\Infrastructure\\Note\\Service\\NoteEncryptionService:
    arguments:
        $appSecret: '%kernel.secret%'

App\\Infrastructure\\Note\\Repository\\DoctrineNoteRepository: ~
App\\Infrastructure\\Favorite\\Repository\\DoctrineFavoriteRepository: ~

# 2. Lier les interfaces Domain aux implémentations Infrastructure
App\\Domain\\Note\\Repository\\NoteRepositoryInterface: '@App\\Infrastructure\\Note\\Repository\\DoctrineNoteRepository'
App\\Domain\\Note\\Service\\NoteEncryptionInterface: '@App\\Infrastructure\\Note\\Service\\NoteEncryptionService'
App\\Domain\\Favorite\\Repository\\FavoriteRepositoryInterface: '@App\\Infrastructure\\Favorite\\Repository\\DoctrineFavoriteRepository'
\`\`\`

**Important** : Utiliser la syntaxe \`'@Service'\` (alias) et non \`class: Service\` pour les bindings d'interfaces.

### Exemple concret : Toggle Favorite

**Avant (logique dans le controller) :**
\`\`\`php
public function toggle(int $pageId): JsonResponse
{
    $page = $this->pageRepository->find($pageId);
    if (!$page) {
        return $this->json(['error' => 'Page non trouvée'], 404);
    }

    $favorite = $this->favoriteRepository->findOneBy([
        'user' => $this->getUser(),
        'page' => $page
    ]);

    if ($favorite) {
        $this->em->remove($favorite);
        $this->em->flush();
        return $this->json(['isFavorite' => false, 'message' => 'Retiré']);
    }

    $favorite = new Favorite();
    $favorite->setUser($this->getUser());
    $favorite->setPage($page);
    $this->em->persist($favorite);
    $this->em->flush();

    return $this->json(['isFavorite' => true, 'message' => 'Ajouté']);
}
\`\`\`

**Après (controller délègue au handler) :**
\`\`\`php
// Controller
public function toggle(int $pageId): JsonResponse
{
    $command = new ToggleFavoriteCommand(
        user: $this->getUser(),
        pageId: $pageId
    );

    $result = $this->toggleFavoriteHandler->handle($command);

    return $this->json($result);
}

// Handler (toute la logique métier)
public function handle(ToggleFavoriteCommand $command): array
{
    $page = $this->pageRepository->find($command->pageId);

    if (!$page) {
        throw new \\InvalidArgumentException('Page non trouvée');
    }

    $favorite = $this->favoriteRepository->findByUserAndPage($command->user, $page);

    if ($favorite !== null) {
        $this->favoriteRepository->delete($favorite);
        return ['isFavorite' => false, 'message' => 'Favori retiré'];
    }

    $favorite = new Favorite();
    $favorite->setUser($command->user);
    $favorite->setPage($page);
    $this->favoriteRepository->save($favorite);

    return ['isFavorite' => true, 'message' => 'Favori ajouté'];
}
\`\`\`

### Avantages obtenus

| Aspect | Avant | Après |
|--------|-------|-------|
| **Testabilité** | Controller difficile à tester (dépendances HTTP) | Handler testable unitairement avec mocks |
| **Réutilisation** | Logique dupliquée si autre point d'entrée | Handler appelable depuis CLI, API, etc. |
| **Lisibilité** | Controller 200+ lignes | Controller 50-100 lignes, handlers focalisés |
| **Maintenance** | Changement métier = modifier controller | Changement métier = modifier handler uniquement |

### Résumé des migrations

| Domaine | Handlers | Lignes avant | Lignes après | Réduction |
|---------|----------|--------------|--------------|-----------|
| Note | 4 | ~163 | ~107 | -34% |
| Favorite | 6 | ~230 | ~147 | -36% |

---

## Prochaines étapes

1. [x] Créer la structure de dossiers
2. [x] Migrer le domaine **Note** (priorité 1)
3. [x] Migrer le domaine **Favorite** (priorité 2)
4. [ ] Migrer le domaine **Customization** (priorité 3)
5. [ ] Migrer le domaine **QCM** (priorité 4)
6. [ ] Migrer les autres domaines progressivement
7. [ ] Nettoyer les anciens fichiers si nécessaire

---

*Document généré le 5 janvier 2026 - Mis à jour après implémentation Note + Favorite*
`,_v=`# Architecture Pragmatique Vue.js - Plan de Migration

## Table des matières

1. [Analyse de l'existant](#analyse-de-lexistant)
2. [Architecture PWA Cache-First (Point fort)](#architecture-pwa-cache-first-point-fort)
3. [Problèmes identifiés](#problèmes-identifiés)
4. [Architecture cible](#architecture-cible)
5. [Plan de migration](#plan-de-migration)
6. [Standards de code](#standards-de-code)
7. [Exemples concrets](#exemples-concrets)
8. [Configuration recommandée](#configuration-recommandée)
9. [Checklist de migration](#checklist-de-migration)

---

## Analyse de l'existant

### Stack technologique actuelle

| Technologie | Version | État |
|-------------|---------|------|
| Vue.js | 3.5.13 | Moderne |
| Vue Router | 4.5.1 | OK |
| Pinia | 3.0.3 | OK (état session) |
| Vite | 6.3.5 | Moderne |
| Tailwind CSS | 4.1.10 | Moderne |
| Axios | 1.10.0 | OK |
| Element Plus | 2.11.4 | Lourd |
| VueUse | 14.1.0 | OK |
| **idb (IndexedDB)** | 8.0.3 | **Store principal PWA** |

### Structure actuelle

\`\`\`
front/src/
├── components/           # 45 composants (mélangé)
│   ├── layout/          # Header, Footer, Navigation
│   ├── commun/          # Composants réutilisables
│   ├── search/          # Recherche
│   ├── profile/         # Profil utilisateur
│   ├── QCM/             # Questionnaires
│   ├── exercices/       # Exercices
│   ├── table-of-contents/
│   └── security-html-bdd/
├── composables/         # 10 composables
├── views/               # Pages principales
├── router/              # Vue Router
├── stores/              # Pinia (VIDE)
├── store/               # Ancien dossier (1 store QCM)
├── services/            # Services API
├── config/              # Configuration
├── assets/              # Ressources
├── data/                # Données statiques
├── utlis/               # Utilitaires (TYPO dans le nom)
│   └── fetchDataPwa.js  # COMPOSABLE PRINCIPAL - IndexedDB + API
└── style.css            # Tailwind
\`\`\`

### Métriques

| Catégorie | Quantité |
|-----------|----------|
| Composants Vue | 45 |
| Composables | 10 |
| Services | 4 |
| Stores Pinia | 1 (état session QCM) |
| Stores IndexedDB | 7 (données offline) |
| Views/Pages | 5 |
| Tests | 1 (vide) |

### Score par aspect

| Aspect | Score | Commentaire |
|--------|-------|-------------|
| Infrastructure | 8/10 | Vite, PWA, Tailwind, IndexedDB = solide |
| Organisation code | 5/10 | Incohérente |
| State management | 7/10 | IndexedDB + refs globaux bien pensé |
| Appels API | 6/10 | Cache-first avec fallback offline |
| Tests | 2/10 | Quasi inexistants |
| Documentation | 2/10 | Manquante |

---

## Architecture PWA Cache-First (Point fort)

### Vue d'ensemble

L'application utilise une architecture **Cache-First PWA** bien conçue où IndexedDB est le store principal pour les données, permettant un fonctionnement offline complet.

\`\`\`
┌─────────────────────────────────────────────────────────────┐
│                    Vue Components                            │
│                   (Consomment les refs)                      │
├─────────────────────────────────────────────────────────────┤
│                 useData() composable                         │
│        (Refs globaux = Store réactif en mémoire)            │
│   menus | cats | user | exoMenus | exoContents | seoData    │
├─────────────────────────────────────────────────────────────┤
│                      IndexedDB (idb)                         │
│           (Store persistant offline - 7 stores)              │
│  ┌─────────┬────────────┬──────┬───────┬─────────────────┐  │
│  │ menus   │ categories │ user │ pages │ api_cache (TTL) │  │
│  ├─────────┼────────────┼──────┼───────┼─────────────────┤  │
│  │exoMenus │exoContents │ seo  │docDeCodes               │  │
│  └─────────┴────────────┴──────┴───────┴─────────────────┘  │
├─────────────────────────────────────────────────────────────┤
│                      API Symfony                             │
│                  (Source de vérité)                          │
└─────────────────────────────────────────────────────────────┘
\`\`\`

### Flux de données

\`\`\`javascript
// Pattern Cache-First implémenté dans fetchDataPwa.js

async function fetchMenus() {
  try {
    // 1. Tente l'API (source de vérité)
    const response = await axios.get("/api/categories")
    cats.value = filterByVisibility(response.data.member)

    // 2. Sauvegarde dans IndexedDB (cache)
    await saveToDB('categories', cats.value)

  } catch (error) {
    // 3. Fallback: charge depuis IndexedDB
    console.warn("Mode offline")
    cats.value = await loadFromDB('categories')
  }
}
\`\`\`

### Stores IndexedDB

| Store | Contenu | TTL |
|-------|---------|-----|
| \`menus\` | Contenus de pages | Permanent |
| \`categories\` | Liste des catégories | Permanent |
| \`user\` | Utilisateur connecté | Permanent |
| \`pages\` | Pages individuelles | Permanent |
| \`exoMenus\` | Menus d'exercices | Permanent |
| \`exoContents\` | Contenus exercices | Permanent |
| \`seo\` | Données SEO | Permanent |
| \`docDeCodes\` | Liens documentation | Permanent |
| \`api_cache\` | Réponses API | **1 heure** |

### Rôle de Pinia vs IndexedDB

| Technologie | Rôle | Données |
|-------------|------|---------|
| **IndexedDB** | Store persistant (offline) | Données métier (pages, menus, user...) |
| **Refs globaux** | Store réactif (mémoire) | Même données, version réactive |
| **Pinia** | État session/UI | QCM answers, filtres, préférences temporaires |

**Pinia n'est pas sous-utilisé** - il est volontairement réservé à l'état de session (QCM) car les données métier sont gérées par IndexedDB pour le support offline.

### Points forts de cette architecture

1. **Offline-first** : L'app fonctionne sans connexion
2. **Performance** : Données en cache, moins d'appels API
3. **Résilience** : Fallback gracieux en cas d'erreur réseau
4. **TTL intelligent** : Cache API avec expiration (1h)
5. **Séparation claire** : IndexedDB = données, Pinia = UI state

---

## Problèmes identifiés

### 1. Mélange Composition API / Options API

**Fichier problématique : \`PageComponent.vue\`**

\`\`\`javascript
// ❌ MAUVAIS - Mélange des deux patterns
export default {
  setup() {
    const contentRef = ref(null)
    const { toc } = useToc(contentRef)
    return { contentRef, toc }
  },
  data() {
    return {
      pageContent: null,
      isLoading: true
    }
  },
  methods: {
    async fetchPageContent() {
      // ...
    }
  },
  watch: {
    '$route.params.slug': {
      handler() { this.fetchPageContent() },
      immediate: true
    }
  }
}
\`\`\`

**Impact :**
- Code difficile à lire et maintenir
- Impossible de tester unitairement
- Réactivité mixte (ref vs data)

### 2. Confusion store/ vs stores/

\`\`\`
├── stores/              # Dossier Pinia officiel (VIDE!)
├── store/               # Ancien dossier avec QCMStore
\`\`\`

**Impact :**
- Confusion pour les développeurs
- Import paths incohérents

### 3. Appels API inconsistants

\`\`\`javascript
// services/qcmService.js - utilise fetch
const response = await fetch('/api/qcm')

// composables/fetchDataPwa.js - utilise axios
const response = await axios.get('/api/categories')
\`\`\`

**Impact :**
- Gestion d'erreurs différente
- Configuration headers dupliquée
- Pas d'intercepteurs globaux

### 4. Pas de gestion d'erreurs globale

\`\`\`javascript
// ❌ Try-catch basique sans retry ni notification
try {
  const response = await axios.get('/api/data')
} catch (error) {
  console.warn("Mode offline")
}
\`\`\`

### 5. Routes non protégées

\`\`\`javascript
// ❌ Pas de guard sur /profile
{ path: '/profile', name: 'profile', component: Profile }
\`\`\`

### 6. Typo dans le nom de dossier

\`\`\`
├── utlis/               # ❌ Devrait être "utils"
\`\`\`

---

## Architecture cible

### Structure recommandée

\`\`\`
front/src/
│
├── components/
│   ├── ui/                     # Composants atomiques réutilisables
│   │   ├── BaseButton.vue
│   │   ├── BaseInput.vue
│   │   ├── BaseModal.vue
│   │   ├── BaseCard.vue
│   │   ├── BaseLoader.vue
│   │   └── index.js            # Export barrel
│   │
│   ├── layout/                 # Layout de l'application
│   │   ├── AppHeader.vue
│   │   ├── AppSidebar.vue
│   │   ├── AppFooter.vue
│   │   └── AppLayout.vue
│   │
│   └── features/               # Composants métier par domaine
│       ├── qcm/
│       │   ├── QCMCard.vue
│       │   ├── QCMQuestion.vue
│       │   └── QCMResults.vue
│       ├── exercices/
│       │   ├── ExoEditor.vue
│       │   └── ExoResult.vue
│       ├── notes/
│       │   ├── NoteEditor.vue
│       │   └── NoteList.vue
│       ├── favorites/
│       │   └── FavoriteButton.vue
│       └── search/
│           ├── SearchBar.vue
│           └── SearchResults.vue
│
├── composables/                # Logique réutilisable
│   ├── api/                    # Composables liés aux API
│   │   ├── useData.js          # Données principales + cache
│   │   ├── useNotes.js
│   │   ├── useFavorites.js
│   │   └── useQCM.js
│   │
│   ├── ui/                     # Logique UI
│   │   ├── useResponsive.js
│   │   ├── useToast.js
│   │   ├── useModal.js
│   │   └── useToc.js
│   │
│   └── domain/                 # Logique métier
│       ├── useAuth.js
│       ├── useSearch.js
│       ├── useSeo.js
│       └── usePageTracking.js
│
├── stores/                     # Pinia stores (UNIQUE dossier)
│   ├── user.js                 # État utilisateur + auth
│   ├── ui.js                   # État UI (sidebar, theme, toasts)
│   ├── qcm.js                  # État QCM (migré depuis store/)
│   └── index.js                # Export + configuration Pinia
│
├── services/                   # Couche API pure
│   ├── api.js                  # Instance Axios configurée
│   ├── noteService.js
│   ├── favoriteService.js
│   ├── qcmService.js
│   ├── customizationService.js
│   └── searchService.js
│
├── views/                      # Pages (lazy-loaded)
│   ├── HomePage.vue
│   ├── CategoryPage.vue
│   ├── PageView.vue
│   ├── ProfilePage.vue
│   ├── QCMPage.vue
│   └── ExercicePage.vue
│
├── router/
│   ├── index.js                # Configuration principale
│   ├── routes.js               # Définition des routes
│   └── guards.js               # Navigation guards
│
├── utils/                      # Utilitaires purs (RENOMMÉ)
│   ├── formatters.js           # Formatage dates, nombres
│   ├── validators.js           # Validation
│   ├── storage.js              # LocalStorage/IndexedDB helpers
│   └── constants.js            # Constantes globales
│
├── config/
│   └── app.config.js           # Configuration application
│
├── assets/
│   ├── images/
│   └── fonts/
│
├── App.vue
├── main.js
└── style.css
\`\`\`

### Principes de l'architecture

\`\`\`
┌─────────────────────────────────────────────────────────────┐
│                         Views                                │
│                    (Pages/Routes)                            │
├─────────────────────────────────────────────────────────────┤
│                       Components                             │
│              (UI + Features + Layout)                        │
├─────────────────────────────────────────────────────────────┤
│                      Composables                             │
│              (Logique réutilisable)                          │
├──────────────────────┬──────────────────────────────────────┤
│   Pinia Stores       │          useData()                    │
│   (UI/Session)       │    (Données + IndexedDB)              │
├──────────────────────┼──────────────────────────────────────┤
│                      │            Services                   │
│                      │         (API calls)                   │
├──────────────────────┴──────────────────────────────────────┤
│                      IndexedDB                               │
│              (Persistance offline)                           │
├─────────────────────────────────────────────────────────────┤
│                        Utils                                 │
│              (Helpers, formatters)                           │
└─────────────────────────────────────────────────────────────┘
\`\`\`

**Séparation des responsabilités :**

| Couche | Responsabilité | Exemples |
|--------|---------------|----------|
| **Pinia** | État UI/Session | Sidebar open, theme, QCM answers |
| **useData() + refs** | Données métier réactives | menus, cats, user, pages |
| **IndexedDB** | Persistance offline | Cache des données API |
| **Services** | Appels API purs | noteService, favoriteService |

**Règles de dépendances :**
- Views → Components, Composables, Stores
- Components → Composables, Stores, Utils
- Composables → Services, Stores, IndexedDB, Utils
- Services → Utils (API pure, pas de Vue)
- Pinia Stores → Utils (état UI uniquement)
- useData() → IndexedDB, Services
- Utils → Rien (fonctions pures)

---

## Plan de migration

### Phase 1 : Corrections rapides (1-2h)

| Action | Fichiers | Temps |
|--------|----------|-------|
| Renommer \`utlis/\` → \`utils/\` | 1 dossier + imports | 15 min |
| Supprimer \`store/\`, déplacer dans \`stores/\` | 2 fichiers | 15 min |
| Créer \`services/api.js\` | 1 fichier | 30 min |
| Mettre à jour les imports | ~10 fichiers | 30 min |

### Phase 2 : Centralisation API (2-3h)

| Action | Fichiers | Temps |
|--------|----------|-------|
| Créer instance Axios centralisée | 1 fichier | 30 min |
| Migrer \`qcmService.js\` vers Axios | 1 fichier | 30 min |
| Créer \`noteService.js\` | 1 fichier | 30 min |
| Créer \`favoriteService.js\` | 1 fichier | 30 min |
| Ajouter intercepteurs globaux | 1 fichier | 30 min |

### Phase 3 : Migration Composition API (3-4h)

| Action | Fichiers | Temps |
|--------|----------|-------|
| Migrer \`PageComponent.vue\` | 1 fichier | 1h |
| Migrer autres composants Options API | ~5 fichiers | 2h |
| Ajouter route guards | 1 fichier | 30 min |

### Phase 4 : Stores Pinia - UI/Session uniquement (1-2h)

> **Note** : Les données métier (menus, pages, user) restent dans \`useData()\` + IndexedDB.
> Pinia est réservé à l'état UI et session.

| Action | Fichiers | Temps |
|--------|----------|-------|
| Créer \`stores/ui.js\` (sidebar, theme, toasts) | 1 fichier | 45 min |
| Garder \`stores/qcm.js\` (état session QCM) | Déjà existant | 15 min |
| Éventuellement \`stores/preferences.js\` | 1 fichier | 30 min |

### Phase 5 : Réorganisation composants (2-3h)

| Action | Fichiers | Temps |
|--------|----------|-------|
| Créer dossier \`components/ui/\` | 5-10 fichiers | 1h |
| Créer dossier \`components/features/\` | Organisation | 1h |
| Créer barrel exports (\`index.js\`) | 3 fichiers | 30 min |

---

## Standards de code

### Naming conventions

| Type | Convention | Exemple |
|------|------------|---------|
| Composants | PascalCase | \`BaseButton.vue\` |
| Composables | camelCase avec \`use\` | \`useAuth.js\` |
| Services | camelCase avec \`Service\` | \`noteService.js\` |
| Stores | camelCase | \`user.js\` |
| Utils | camelCase | \`formatters.js\` |
| Constantes | SCREAMING_SNAKE_CASE | \`API_BASE_URL\` |

### Structure d'un composant (Composition API)

\`\`\`vue
<script setup>
// 1. Imports
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useUserStore } from '@/stores/user'
import BaseButton from '@/components/ui/BaseButton.vue'

// 2. Props & Emits
const props = defineProps({
  pageId: {
    type: Number,
    required: true
  }
})

const emit = defineEmits(['save', 'cancel'])

// 3. Composables & Stores
const route = useRoute()
const userStore = useUserStore()

// 4. State (refs)
const isLoading = ref(false)
const content = ref('')

// 5. Computed
const isValid = computed(() => content.value.length > 0)

// 6. Methods
const handleSave = async () => {
  isLoading.value = true
  try {
    await saveContent()
    emit('save')
  } finally {
    isLoading.value = false
  }
}

// 7. Watchers
watch(() => props.pageId, (newId) => {
  fetchContent(newId)
})

// 8. Lifecycle
onMounted(() => {
  fetchContent(props.pageId)
})
<\/script>

<template>
  <!-- Template -->
</template>

<style scoped>
/* Styles scopés */
</style>
\`\`\`

### Structure d'un store Pinia

\`\`\`javascript
// stores/user.js
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { userService } from '@/services/userService'

export const useUserStore = defineStore('user', () => {
  // State
  const user = ref(null)
  const isLoading = ref(false)

  // Getters
  const isAuthenticated = computed(() => user.value !== null)
  const isAdmin = computed(() => user.value?.roles?.includes('ROLE_ADMIN'))

  // Actions
  async function fetchUser() {
    isLoading.value = true
    try {
      user.value = await userService.getMe()
    } catch (error) {
      user.value = null
    } finally {
      isLoading.value = false
    }
  }

  function logout() {
    user.value = null
  }

  return {
    // State
    user,
    isLoading,
    // Getters
    isAuthenticated,
    isAdmin,
    // Actions
    fetchUser,
    logout
  }
}, {
  persist: {
    storage: sessionStorage,
    paths: ['user']
  }
})
\`\`\`

### Structure d'un service

\`\`\`javascript
// services/noteService.js
import api from './api'

export const noteService = {
  /**
   * Récupère toutes les notes de l'utilisateur
   */
  async getMyNotes() {
    const { data } = await api.get('/notes/my-notes')
    return data
  },

  /**
   * Récupère la note d'une page
   */
  async getNoteByPage(pageId) {
    const { data } = await api.get(\`/notes/page/\${pageId}\`)
    return data
  },

  /**
   * Crée ou met à jour une note
   */
  async createOrUpdate(pageId, content) {
    const { data } = await api.post('/notes', { pageId, content })
    return data
  },

  /**
   * Supprime une note
   */
  async delete(id) {
    await api.delete(\`/notes/\${id}\`)
  }
}
\`\`\`

### Structure d'un composable

\`\`\`javascript
// composables/api/useNotes.js
import { ref, readonly } from 'vue'
import { noteService } from '@/services/noteService'
import { useToast } from '@/composables/ui/useToast'

export function useNotes() {
  const notes = ref([])
  const isLoading = ref(false)
  const error = ref(null)

  const { showError, showSuccess } = useToast()

  async function fetchNotes() {
    isLoading.value = true
    error.value = null
    try {
      notes.value = await noteService.getMyNotes()
    } catch (err) {
      error.value = err.message
      showError('Erreur lors du chargement des notes')
    } finally {
      isLoading.value = false
    }
  }

  async function saveNote(pageId, content) {
    try {
      const note = await noteService.createOrUpdate(pageId, content)
      showSuccess('Note sauvegardée')
      return note
    } catch (err) {
      showError('Erreur lors de la sauvegarde')
      throw err
    }
  }

  async function deleteNote(id) {
    try {
      await noteService.delete(id)
      notes.value = notes.value.filter(n => n.id !== id)
      showSuccess('Note supprimée')
    } catch (err) {
      showError('Erreur lors de la suppression')
      throw err
    }
  }

  return {
    // State (readonly pour éviter mutations externes)
    notes: readonly(notes),
    isLoading: readonly(isLoading),
    error: readonly(error),
    // Actions
    fetchNotes,
    saveNote,
    deleteNote
  }
}
\`\`\`

---

## Exemples concrets

### 1. Instance Axios centralisée

\`\`\`javascript
// services/api.js
import axios from 'axios'

const api = axios.create({
  baseURL: '/api',
  withCredentials: true,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})

// Intercepteur requêtes
api.interceptors.request.use(
  (config) => {
    // Ajouter token si présent
    const token = sessionStorage.getItem('token')
    if (token) {
      config.headers.Authorization = \`Bearer \${token}\`
    }
    return config
  },
  (error) => Promise.reject(error)
)

// Intercepteur réponses
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response } = error

    // Erreur réseau
    if (!response) {
      console.warn('Erreur réseau - Mode offline possible')
      return Promise.reject(new Error('Erreur réseau'))
    }

    // Non authentifié
    if (response.status === 401) {
      sessionStorage.removeItem('token')
      window.location.href = '/login'
    }

    // Forbidden
    if (response.status === 403) {
      console.error('Accès refusé')
    }

    // Erreur serveur
    if (response.status >= 500) {
      console.error('Erreur serveur')
    }

    return Promise.reject(error)
  }
)

export default api
\`\`\`

### 2. Migration PageComponent.vue

\`\`\`vue
<!-- AVANT (Options API + setup mixé) -->
<script>
export default {
  setup() {
    const contentRef = ref(null)
    const { toc } = useToc(contentRef)
    return { contentRef, toc }
  },
  data() {
    return { pageContent: null, isLoading: true }
  },
  methods: {
    async fetchPageContent() { /* ... */ }
  },
  watch: {
    '$route.params.slug': {
      handler() { this.fetchPageContent() },
      immediate: true
    }
  }
}
<\/script>
\`\`\`

\`\`\`vue
<!-- APRÈS (Composition API pure) -->
<script setup>
import { ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useData } from '@/composables/api/useData'
import { useToc } from '@/composables/ui/useToc'
import { useSeo } from '@/composables/domain/useSeo'
import BaseLoader from '@/components/ui/BaseLoader.vue'
import TableOfContents from '@/components/features/TableOfContents.vue'

// Route
const route = useRoute()

// Composables
const { fetchPageBySlug } = useData()
const { updateSeo } = useSeo()

// State
const contentRef = ref(null)
const pageContent = ref(null)
const isLoading = ref(true)
const error = ref(null)

// TOC (dépend de contentRef)
const { toc } = useToc(contentRef)

// Methods
async function fetchContent(slug) {
  isLoading.value = true
  error.value = null

  try {
    pageContent.value = await fetchPageBySlug(slug)
    if (pageContent.value) {
      updateSeo(pageContent.value)
    }
  } catch (err) {
    error.value = 'Erreur lors du chargement de la page'
    console.error(err)
  } finally {
    isLoading.value = false
  }
}

// Watch route changes
watch(
  () => route.params.slug,
  (newSlug) => {
    if (newSlug) {
      fetchContent(newSlug)
    }
  },
  { immediate: true }
)
<\/script>

<template>
  <div class="page-component">
    <!-- Loading -->
    <BaseLoader v-if="isLoading" />

    <!-- Error -->
    <div v-else-if="error" class="error-message">
      {{ error }}
    </div>

    <!-- Content -->
    <template v-else-if="pageContent">
      <aside class="toc-sidebar">
        <TableOfContents :toc="toc" />
      </aside>

      <article ref="contentRef" class="page-content">
        <h1>{{ pageContent.title }}</h1>
        <div v-html="pageContent.content"></div>
      </article>
    </template>
  </div>
</template>

<style scoped>
.page-component {
  @apply flex gap-8;
}

.toc-sidebar {
  @apply w-64 flex-shrink-0;
}

.page-content {
  @apply flex-1;
}

.error-message {
  @apply text-red-500 p-4 bg-red-50 rounded;
}
</style>
\`\`\`

### 3. Route Guards

\`\`\`javascript
// router/guards.js
import { useUserStore } from '@/stores/user'

export function authGuard(to, from, next) {
  const userStore = useUserStore()

  if (!userStore.isAuthenticated) {
    // Sauvegarder la destination
    sessionStorage.setItem('redirectAfterLogin', to.fullPath)
    next({ name: 'login' })
  } else {
    next()
  }
}

export function adminGuard(to, from, next) {
  const userStore = useUserStore()

  if (!userStore.isAdmin) {
    next({ name: 'home' })
  } else {
    next()
  }
}

export function guestGuard(to, from, next) {
  const userStore = useUserStore()

  if (userStore.isAuthenticated) {
    next({ name: 'home' })
  } else {
    next()
  }
}
\`\`\`

\`\`\`javascript
// router/routes.js
import { authGuard, adminGuard } from './guards'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomePage.vue')
  },
  {
    path: '/pages/:slug',
    name: 'page',
    component: () => import('@/views/PageView.vue')
  },
  {
    path: '/category/:category',
    name: 'category',
    component: () => import('@/views/CategoryPage.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('@/views/ProfilePage.vue'),
    beforeEnter: authGuard  // Protection
  },
  {
    path: '/qcm/:index?',
    name: 'qcm',
    component: () => import('@/views/QCMPage.vue')
  },
  {
    path: '/exercices/:slug',
    name: 'exercice',
    component: () => import('@/views/ExercicePage.vue')
  }
]
\`\`\`

\`\`\`javascript
// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'
import { useUserStore } from '@/stores/user'

const router = createRouter({
  history: createWebHistory('/spa'),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0 }
  }
})

// Guard global pour charger l'utilisateur
router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore()

  // Charger l'utilisateur si pas encore fait
  if (!userStore.user && !userStore.isLoading) {
    await userStore.fetchUser()
  }

  next()
})

export default router
\`\`\`

### 4. Store UI (recommandé)

> **Note** : Ce store gère uniquement l'état UI. Les données utilisateur restent dans \`useData()\` + IndexedDB.

\`\`\`javascript
// stores/ui.js
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useUIStore = defineStore('ui', () => {
  // State
  const sidebarOpen = ref(true)
  const theme = ref('light')
  const toasts = ref([])

  // Getters
  const isDarkMode = computed(() => theme.value === 'dark')

  // Actions
  function toggleSidebar() {
    sidebarOpen.value = !sidebarOpen.value
  }

  function setTheme(newTheme) {
    theme.value = newTheme
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
  }

  function showToast(type, message, duration = 5000) {
    const id = Date.now()
    toasts.value.push({ id, type, message })
    setTimeout(() => {
      toasts.value = toasts.value.filter(t => t.id !== id)
    }, duration)
  }

  return {
    sidebarOpen, theme, toasts,
    isDarkMode,
    toggleSidebar, setTheme, showToast
  }
}, {
  persist: {
    storage: localStorage,
    paths: ['theme', 'sidebarOpen']
  }
})
\`\`\`

### 5. Store User (optionnel - alternative à useData)

> **Note** : Cet exemple montre comment créer un store Pinia pour l'utilisateur SI vous souhaitez migrer depuis \`useData()\`.
> L'architecture actuelle avec IndexedDB est valide et ne nécessite pas cette migration.

\`\`\`javascript
// stores/user.js (OPTIONNEL)
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import api from '@/services/api'

export const useUserStore = defineStore('user', () => {
  // State
  const user = ref(null)
  const isLoading = ref(false)
  const error = ref(null)

  // Getters
  const isAuthenticated = computed(() => user.value !== null)

  const isAdmin = computed(() =>
    user.value?.roles?.includes('ROLE_ADMIN') ?? false
  )

  const username = computed(() => user.value?.username ?? 'Invité')

  // Actions
  async function fetchUser() {
    if (isLoading.value) return

    isLoading.value = true
    error.value = null

    try {
      const { data } = await api.get('/user-api/me')
      user.value = data
    } catch (err) {
      user.value = null
      // 401 = non connecté (normal)
      if (err.response?.status !== 401) {
        error.value = 'Erreur lors du chargement du profil'
      }
    } finally {
      isLoading.value = false
    }
  }

  async function updateProfile(profileData) {
    isLoading.value = true
    try {
      const { data } = await api.patch('/user-api/me', profileData)
      user.value = { ...user.value, ...data }
      return true
    } catch (err) {
      error.value = 'Erreur lors de la mise à jour'
      return false
    } finally {
      isLoading.value = false
    }
  }

  function logout() {
    user.value = null
    sessionStorage.clear()
    window.location.href = '/logout'
  }

  function $reset() {
    user.value = null
    isLoading.value = false
    error.value = null
  }

  return {
    // State
    user,
    isLoading,
    error,
    // Getters
    isAuthenticated,
    isAdmin,
    username,
    // Actions
    fetchUser,
    updateProfile,
    logout,
    $reset
  }
}, {
  persist: {
    storage: sessionStorage,
    paths: ['user']
  }
})
\`\`\`

---

## Configuration recommandée

### vite.config.js - Alias de chemins

\`\`\`javascript
// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@composables': path.resolve(__dirname, './src/composables'),
      '@stores': path.resolve(__dirname, './src/stores'),
      '@services': path.resolve(__dirname, './src/services'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@views': path.resolve(__dirname, './src/views')
    }
  }
})
\`\`\`

### jsconfig.json - IntelliSense

\`\`\`json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@components/*": ["src/components/*"],
      "@composables/*": ["src/composables/*"],
      "@stores/*": ["src/stores/*"],
      "@services/*": ["src/services/*"],
      "@utils/*": ["src/utils/*"],
      "@views/*": ["src/views/*"]
    }
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
\`\`\`

### .eslintrc.js - Règles recommandées

\`\`\`javascript
module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'prettier'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/require-default-prop': 'off',
    'vue/no-v-html': 'warn',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }]
  }
}
\`\`\`

---

## Checklist de migration

### Phase 1 : Quick fixes

- [ ] Renommer \`utlis/\` → \`utils/\`
- [ ] Supprimer dossier \`store/\`
- [ ] Déplacer \`QCMStore\` vers \`stores/qcm.js\`
- [ ] Mettre à jour tous les imports

### Phase 2 : API Layer

- [ ] Créer \`services/api.js\` (instance Axios)
- [ ] Ajouter intercepteurs (auth, erreurs)
- [ ] Migrer \`qcmService.js\` vers Axios
- [ ] Créer \`noteService.js\`
- [ ] Créer \`favoriteService.js\`
- [ ] Créer \`customizationService.js\`

### Phase 3 : Stores Pinia (UI/Session uniquement)

- [ ] Créer \`stores/ui.js\` (sidebar, theme, toasts)
- [ ] Garder \`useData()\` pour les données métier (ne pas migrer vers Pinia)
- [ ] Déplacer QCMStore dans \`stores/qcm.js\`
- [ ] Configurer persistance Pinia (sessionStorage pour QCM)

### Phase 4 : Composition API

- [ ] Migrer \`PageComponent.vue\`
- [ ] Migrer autres composants Options API
- [ ] Standardiser structure des composants

### Phase 5 : Router

- [ ] Créer \`router/guards.js\`
- [ ] Créer \`router/routes.js\`
- [ ] Ajouter lazy-loading sur toutes les views
- [ ] Protéger route \`/profile\`

### Phase 6 : Organisation

- [ ] Créer \`components/ui/\` avec composants de base
- [ ] Créer \`components/features/\` par domaine
- [ ] Créer barrel exports (\`index.js\`)
- [ ] Configurer alias Vite (\`@/\`)

### Phase 7 : Documentation

- [ ] Ajouter JSDoc aux services
- [ ] Ajouter JSDoc aux composables
- [ ] Documenter les stores

---

## Ressources

- [Vue 3 Composition API](https://vuejs.org/guide/extras/composition-api-faq.html)
- [Pinia Documentation](https://pinia.vuejs.org/)
- [Vue Router Guards](https://router.vuejs.org/guide/advanced/navigation-guards.html)
- [VueUse](https://vueuse.org/)

---

*Document généré le 5 janvier 2026*
*Mis à jour pour refléter l'architecture PWA Cache-First avec IndexedDB*
`,Ov=Object.assign({"/documentations/API_MCP_DOCUMENTATION.md":Av,"/documentations/CONFIGURATION_URL_SPA.md":Ev,"/documentations/PAGES_DYNAMIQUES_README.md":xv,"/documentations/README-front.md":Tv,"/documentations/RECHERCHE_MOBILE_DESKTOP.md":Nv,"/documentations/SECURITE_HTML_API_SYMFONY.md":Dv,"/documentations/filtrage-niveau-cours.md":Mv,"/documentations/plan-migration-hexa.md":Rv,"/documentations/plan-migration.md":_v}),jv={front:"Front",back:"Back",devops:"DevOps",outils:"Outils"},Hp="Autres";function Lp(h){return h.replace(/^\/documentation\//,"").replace(/^\/documentations\//,"").replace(/\.md$/,"")}function Uv(h){const A=Lp(h);return A.endsWith("/index")?A.replace(/\/index$/,""):A||"index"}function zv(h,A){const g=h.match(/^#\s+(.+)$/m);return g?.[1]?g[1].trim():(Lp(A).split("/").pop()??"Documentation").replace(/[-_]/g," ")}function qv(h){const A=h.split("/")[0];return jv[A?.toLowerCase()]??Hp}function Hv(h,A){const g=h.split("/").filter(Boolean);return A!==Hp?g.slice(1):g}function Lv(){return Object.entries(Ov).map(([h,A])=>{const g=Uv(h),c=qv(g);return{slug:g,title:zv(A,h),category:c,path:h,content:A,segments:Hv(g,c)}})}const Vi=["Front","Back","DevOps","Outils","Autres"];function Bp(h,A){return h.segments.length!==A.segments.length?h.segments.length-A.segments.length:h.title.localeCompare(A.title,"fr")}function vc(h,A,g){if(A.length===0){h.push({type:"doc",title:g.title,slug:g.slug});return}const[c,...N]=A,M=h.find(Z=>Z.type==="section"&&Z.label===c);if(M&&M.type==="section"){vc(M.children,N,g);return}const j={type:"section",label:c,children:[]};vc(j.children,N,g),h.push(j)}function Qp(h){h.sort((A,g)=>{if(A.type!==g.type)return A.type==="section"?-1:1;const c=A.type==="section"?A.label:A.title,N=g.type==="section"?g.label:g.title;return c.localeCompare(N,"fr")}),h.forEach(A=>{A.type==="section"&&Qp(A.children)})}function Bv(h){const A=h.reduce((g,c)=>(g[c.category]??=[],g[c.category].push(c),g),{});return Object.entries(A).sort((g,c)=>{const N=Vi.indexOf(g[0]),M=Vi.indexOf(c[0]);return N===-1||M===-1?g[0].localeCompare(c[0],"fr"):N-M}).map(([g,c])=>{const N=[];return c.sort(Bp).forEach(M=>{vc(N,M.segments,M)}),Qp(N),{id:g.toLowerCase(),label:g,items:N}})}function Qv(h,A){return A?h.find(g=>g.slug===A)??null:null}function Gv(h){return[...h].sort((g,c)=>{const N=Vi.indexOf(g.category),M=Vi.indexOf(c.category);return N!==M?N-M:Bp(g,c)})[0]?.slug??null}function Yv(h,A){if(!A.trim())return h;const g=A.trim().toLowerCase(),c=M=>M.type==="doc"?M.title.toLowerCase().includes(g):M.children.some(c),N=M=>M.filter(c).map(j=>j.type==="doc"?j:{...j,children:N(j.children)});return h.map(M=>({...M,items:N(M.items)})).filter(M=>M.items.length>0)}function xl(...h){return h.filter(Boolean).join(" ")}function Gp({nodes:h,activeSlug:A,onNavigate:g}){return D.jsx("ul",{className:"space-y-2",children:h.map(c=>c.type==="section"?D.jsxs("li",{className:"space-y-2",children:[D.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.2em] text-[var(--doc-muted)]",children:c.label}),D.jsx(Gp,{nodes:c.children,activeSlug:A,onNavigate:g})]},c.label):D.jsx("li",{children:D.jsx("button",{type:"button",onClick:()=>g(c.slug),className:xl("w-full rounded-xl px-3 py-2 text-left text-sm transition",A===c.slug?"bg-[var(--doc-accent-soft)] text-[var(--doc-accent-strong)]":"text-[var(--doc-ink)] hover:bg-[var(--doc-surface-muted)]"),children:c.title})},c.slug))})}function _p({categories:h,activeSlug:A,onNavigate:g}){return D.jsx("div",{className:"space-y-6",children:h.map(c=>D.jsxs("div",{className:"space-y-3",children:[D.jsx("h2",{className:"text-sm font-semibold uppercase tracking-[0.25em] text-[var(--doc-muted)]",children:c.label}),D.jsx(Gp,{nodes:c.items,activeSlug:A,onNavigate:g})]},c.id))})}function $v({hasError:h,className:A,...g}){return D.jsx("input",{className:xl("h-11 w-full rounded-xl border bg-white px-4 text-sm text-[var(--doc-ink)] placeholder:text-[var(--doc-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--doc-accent)]",h?"border-[var(--doc-danger)]":"border-[var(--doc-line)]",A),...g})}function Op({value:h,onChange:A}){return D.jsx("div",{className:"rounded-2xl bg-[var(--doc-surface)] p-3 shadow-sm",children:D.jsx($v,{value:h,onChange:g=>A(g.target.value),placeholder:"Rechercher un document...","aria-label":"Rechercher un document"})})}function Yp(h){return h.toLowerCase().replace(/[^a-z0-9\s-]/g,"").trim().replace(/\s+/g,"-")}function El(h){const A=[];let g=h;const c=[{regex:/\[([^\]]+)\]\(([^)]+)\)/,render:N=>D.jsx("a",{href:N[2],className:"text-[var(--doc-accent-strong)] underline-offset-4 hover:underline",target:"_blank",rel:"noreferrer",children:N[1]})},{regex:/`([^`]+)`/,render:N=>D.jsx("code",{className:"rounded bg-[var(--doc-surface-muted)] px-1.5 py-0.5 text-sm",children:N[1]})},{regex:/\*\*([^*]+)\*\*/,render:N=>D.jsx("strong",{children:N[1]})},{regex:/\*([^*]+)\*/,render:N=>D.jsx("em",{children:N[1]})}];for(;g.length>0;){let N=null,M=null,j=-1;for(const Z of c){const O=Z.regex.exec(g);O&&(N===null||O.index<j)&&(N=O,M=Z,j=O.index)}if(!N||!M){A.push(g);break}j>0&&A.push(g.slice(0,j)),A.push(M.render(N)),g=g.slice(j+N[0].length)}return A}function jp(h){return h.trim().replace(/^\||\|$/g,"").split("|").map(A=>A.trim())}function $p(h){const A=[],g=h.split(`
`);let c=0;for(;c<g.length;){const N=g[c];if(/^```/.test(N)){const j=N.replace(/```/,"").trim()||null,Z=[];for(c+=1;c<g.length&&!/^```/.test(g[c]);)Z.push(g[c]),c+=1;A.push({type:"code",lang:j,text:Z.join(`
`)}),c+=1;continue}if(/^#{1,6}\s+/.test(N)){const j=N.match(/^#{1,6}/)[0].length;A.push({type:"heading",depth:j,text:N.replace(/^#{1,6}\s+/,"")}),c+=1;continue}if(/^>\s+/.test(N)){A.push({type:"blockquote",text:N.replace(/^>\s+/,"")}),c+=1;continue}if(/^---$/.test(N.trim())){A.push({type:"rule"}),c+=1;continue}if(/^\s*[-*+]\s+/.test(N)){const j=[];for(;c<g.length&&/^\s*[-*+]\s+/.test(g[c]);)j.push(g[c].replace(/^\s*[-*+]\s+/,"")),c+=1;A.push({type:"list",ordered:!1,items:j});continue}if(/^\s*\d+\.\s+/.test(N)){const j=[];for(;c<g.length&&/^\s*\d+\.\s+/.test(g[c]);)j.push(g[c].replace(/^\s*\d+\.\s+/,"")),c+=1;A.push({type:"list",ordered:!0,items:j});continue}if(/^\|.*\|$/.test(N.trim())){const j=[];for(;c<g.length&&/^\|.*\|$/.test(g[c].trim());)j.push(g[c]),c+=1;if(j.length>=2){const Z=jp(j[0]),O=j.slice(2).map(jp);A.push({type:"table",header:Z,rows:O})}continue}if(!N.trim()){c+=1;continue}const M=[];for(;c<g.length&&g[c].trim();)M.push(g[c]),c+=1;A.push({type:"paragraph",text:M.join(" ")})}return A}function Vv(h){return $p(h).map((g,c)=>{switch(g.type){case"heading":{const N=Yp(g.text),M=`h${g.depth}`,j=g.depth===1?"text-3xl font-semibold tracking-tight":g.depth===2?"text-2xl font-semibold tracking-tight":"text-xl font-semibold";return D.jsx(M,{id:N,className:j,children:g.text},`${g.type}-${c}`)}case"paragraph":return D.jsx("p",{className:"text-base leading-7 text-[var(--doc-ink)]",children:El(g.text)},`${g.type}-${c}`);case"code":return D.jsx("pre",{className:"overflow-x-auto rounded-2xl border border-[var(--doc-line)] bg-[var(--doc-surface-muted)] p-4 text-sm",children:D.jsx("code",{children:g.text})},`${g.type}-${c}`);case"list":{const N=g.ordered?"ol":"ul";return D.jsx(N,{className:g.ordered?"list-decimal pl-6":"list-disc pl-6",children:g.items.map((M,j)=>D.jsx("li",{className:"mb-2",children:El(M)},`${g.type}-${c}-${j}`))},`${g.type}-${c}`)}case"blockquote":return D.jsx("blockquote",{className:"border-l-4 border-[var(--doc-accent)] bg-[var(--doc-surface-muted)] px-4 py-3 text-[var(--doc-muted)]",children:El(g.text)},`${g.type}-${c}`);case"table":return D.jsx("div",{className:"overflow-x-auto",children:D.jsxs("table",{className:"w-full border-collapse text-left text-sm",children:[D.jsx("thead",{className:"bg-[var(--doc-surface-muted)]",children:D.jsx("tr",{children:g.header.map((N,M)=>D.jsx("th",{className:"border border-[var(--doc-line)] px-3 py-2 font-semibold",children:El(N)},`${g.type}-${c}-head-${M}`))})}),D.jsx("tbody",{children:g.rows.map((N,M)=>D.jsx("tr",{children:N.map((j,Z)=>D.jsx("td",{className:"border border-[var(--doc-line)] px-3 py-2",children:El(j)},`${g.type}-${c}-cell-${M}-${Z}`))},`${g.type}-${c}-row-${M}`))})]})},`${g.type}-${c}`);case"rule":return D.jsx("hr",{className:"border-[var(--doc-line)]"},`${g.type}-${c}`);default:return D.jsx(sn.Fragment,{},`block-${c}`)}})}function Xv(h){return $p(h).filter(A=>A.type==="heading").filter(A=>A.depth>=2&&A.depth<=3).map(A=>({depth:A.depth,text:A.text,id:Yp(A.text)}))}function Zv({content:h}){return D.jsx("div",{className:"space-y-6",children:Vv(h)})}const wv={primary:"bg-[var(--doc-accent-soft)] text-[var(--doc-accent-strong)]",success:"bg-[var(--doc-success-soft)] text-[var(--doc-success-strong)]",neutral:"bg-[var(--doc-surface-muted)] text-[var(--doc-muted)]"};function Jv({variant:h="neutral",className:A,...g}){return D.jsx("span",{className:xl("inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide",wv[h],A),...g})}const Kv="inline-flex items-center justify-center gap-2 rounded-full font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed",Iv={primary:"bg-[var(--doc-accent)] text-white hover:bg-[var(--doc-accent-strong)] focus-visible:outline-[var(--doc-accent)]",secondary:"bg-[var(--doc-surface)] text-[var(--doc-ink)] border border-[var(--doc-line)] hover:border-[var(--doc-accent)] focus-visible:outline-[var(--doc-accent)]",ghost:"bg-transparent text-[var(--doc-ink)] hover:bg-[var(--doc-surface-muted)] focus-visible:outline-[var(--doc-accent)]",danger:"bg-[var(--doc-danger)] text-white hover:bg-[var(--doc-danger-strong)] focus-visible:outline-[var(--doc-danger)]"},Pv={sm:"h-9 px-3 text-sm",md:"h-11 px-4 text-sm",lg:"h-12 px-5 text-base"};function Up({variant:h="primary",size:A="md",isLoading:g,leftIcon:c,rightIcon:N,className:M,children:j,disabled:Z,...O}){return D.jsxs("button",{className:xl(Kv,Iv[h],Pv[A],M),disabled:Z||g,...O,children:[g?D.jsx("span",{className:"h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"}):c,j,N]})}function zp({className:h,...A}){return D.jsx("hr",{className:xl("border-[var(--doc-line)]",h),...A})}const Da="/docs";function qp(h){return h.startsWith(Da)&&h.slice(Da.length).replace(/^\/+/,"")||null}function Xi(h){const A=h.replace(/^\/+/,"");return`${Da}/${A}`}function Fv(h,A){return h===Da||h===`${Da}/`||!h.startsWith(Da)?Xi(A):null}function kv(){const h=sn.useMemo(()=>Lv(),[]),A=sn.useMemo(()=>Bv(h),[h]),g=sn.useMemo(()=>Gv(h),[h]),[c,N]=sn.useState(""),[M,j]=sn.useState(()=>qp(window.location.pathname));sn.useEffect(()=>{if(!g)return;const G=Fv(window.location.pathname,g);if(G){window.history.replaceState({},"",G),j(g);return}M||(window.history.replaceState({},"",Xi(g)),j(g))},[g,M]),sn.useEffect(()=>{const G=()=>{j(qp(window.location.pathname))};return window.addEventListener("popstate",G),()=>window.removeEventListener("popstate",G)},[]);const Z=G=>{window.history.pushState({},"",Xi(G)),j(G)},O=sn.useMemo(()=>Qv(h,M),[h,M]),T=sn.useMemo(()=>Yv(A,c),[A,c]);return{docs:h,index:T,activeDoc:O,navigate:Z,slug:M,search:c,setSearch:N}}function Wv(){const{index:h,activeDoc:A,navigate:g,slug:c,search:N,setSearch:M}=kv(),[j,Z]=sn.useState(!1),O=sn.useMemo(()=>A?Xv(A.content):[],[A]),T=G=>{g(G),Z(!1)};return D.jsxs("div",{className:"min-h-screen bg-[var(--doc-bg)] text-[var(--doc-ink)]",children:[D.jsxs("div",{className:"flex",children:[D.jsx("aside",{className:"hidden h-screen w-80 border-r border-[var(--doc-line)] bg-[var(--doc-surface)] lg:block",children:D.jsxs("div",{className:"flex h-full flex-col gap-6 overflow-y-auto px-6 py-8",children:[D.jsxs("div",{className:"space-y-3",children:[D.jsx("p",{className:"text-xs uppercase tracking-[0.3em] text-[var(--doc-muted)]",children:"Documentation"}),D.jsx("h1",{className:"text-2xl font-semibold",children:"DocDev"}),D.jsx(Jv,{variant:"primary",children:"Vercel inspired"})]}),D.jsx(Op,{value:N,onChange:M}),D.jsx(zp,{}),D.jsx(_p,{categories:h,activeSlug:c,onNavigate:T})]})}),D.jsxs("div",{className:"flex min-h-screen flex-1 flex-col",children:[D.jsxs("header",{className:"sticky top-0 z-20 flex items-center justify-between gap-4 border-b border-[var(--doc-line)] bg-[var(--doc-surface)] px-4 py-4 lg:hidden",children:[D.jsx(Up,{variant:"secondary",size:"sm",onClick:()=>Z(!0),children:"Menu"}),D.jsxs("div",{children:[D.jsx("p",{className:"text-xs uppercase tracking-[0.3em] text-[var(--doc-muted)]",children:"DocDev"}),D.jsx("h1",{className:"text-lg font-semibold",children:"Documentation"})]})]}),D.jsxs("div",{className:"flex flex-1 gap-8 px-6 py-8 lg:px-12",children:[D.jsx("main",{className:"flex-1",children:A?D.jsxs("div",{className:"space-y-6",children:[D.jsxs("div",{className:"space-y-2",children:[D.jsx("p",{className:"text-sm uppercase tracking-[0.3em] text-[var(--doc-muted)]",children:A.category}),D.jsx("h1",{className:"text-3xl font-semibold leading-tight",children:A.title})]}),D.jsx(Zv,{content:A.content})]}):D.jsx("div",{className:"rounded-2xl border border-dashed border-[var(--doc-line)] p-8 text-center text-[var(--doc-muted)]",children:"Selectionnez un document dans la sidebar."})}),D.jsxs("aside",{className:"sticky top-24 hidden h-fit w-64 flex-shrink-0 space-y-4 rounded-2xl border border-[var(--doc-line)] bg-[var(--doc-surface)] p-5 xl:block",children:[D.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.2em] text-[var(--doc-muted)]",children:"Sur cette page"}),O.length?D.jsx("ul",{className:"space-y-2 text-sm",children:O.map(G=>D.jsx("li",{className:G.depth===3?"pl-3":"",children:D.jsx("a",{href:`#${G.id}`,className:"text-[var(--doc-muted)] transition hover:text-[var(--doc-ink)]",children:G.text})},G.id))}):D.jsx("p",{className:"text-sm text-[var(--doc-muted)]",children:"Aucun titre detecte."})]})]})]})]}),j?D.jsx("div",{className:"fixed inset-0 z-30 bg-black/30 lg:hidden",onClick:()=>Z(!1)}):null,D.jsx("aside",{className:`fixed left-0 top-0 z-40 h-full w-80 transform bg-[var(--doc-surface)] p-6 transition-transform lg:hidden ${j?"translate-x-0":"-translate-x-full"}`,children:D.jsxs("div",{className:"flex h-full flex-col gap-6",children:[D.jsxs("div",{className:"flex items-center justify-between",children:[D.jsxs("div",{children:[D.jsx("p",{className:"text-xs uppercase tracking-[0.3em] text-[var(--doc-muted)]",children:"DocDev"}),D.jsx("h2",{className:"text-lg font-semibold",children:"Navigation"})]}),D.jsx(Up,{variant:"ghost",size:"sm",onClick:()=>Z(!1),children:"Fermer"})]}),D.jsx(Op,{value:N,onChange:M}),D.jsx(zp,{}),D.jsx("div",{className:"flex-1 overflow-y-auto",children:D.jsx(_p,{categories:h,activeSlug:c,onNavigate:T})})]})})]})}function eh(){return D.jsx(Wv,{})}Cv.createRoot(document.getElementById("root")).render(D.jsx(sn.StrictMode,{children:D.jsx(eh,{})}));
