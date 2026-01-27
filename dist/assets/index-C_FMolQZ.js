(function(){const S=document.createElement("link").relList;if(S&&S.supports&&S.supports("modulepreload"))return;for(const N of document.querySelectorAll('link[rel="modulepreload"]'))o(N);new MutationObserver(N=>{for(const D of N)if(D.type==="childList")for(const O of D.addedNodes)O.tagName==="LINK"&&O.rel==="modulepreload"&&o(O)}).observe(document,{childList:!0,subtree:!0});function h(N){const D={};return N.integrity&&(D.integrity=N.integrity),N.referrerPolicy&&(D.referrerPolicy=N.referrerPolicy),N.crossOrigin==="use-credentials"?D.credentials="include":N.crossOrigin==="anonymous"?D.credentials="omit":D.credentials="same-origin",D}function o(N){if(N.ep)return;N.ep=!0;const D=h(N);fetch(N.href,D)}})();var fo={exports:{}},Al={};var Cp;function hv(){if(Cp)return Al;Cp=1;var v=Symbol.for("react.transitional.element"),S=Symbol.for("react.fragment");function h(o,N,D){var O=null;if(D!==void 0&&(O=""+D),N.key!==void 0&&(O=""+N.key),"key"in N){D={};for(var Z in N)Z!=="key"&&(D[Z]=N[Z])}else D=N;return N=D.ref,{$$typeof:v,type:o,key:O,ref:N!==void 0?N:null,props:D}}return Al.Fragment=S,Al.jsx=h,Al.jsxs=h,Al}var Ep;function yv(){return Ep||(Ep=1,fo.exports=hv()),fo.exports}var M=yv(),po={exports:{}},Y={};var xp;function Sv(){if(xp)return Y;xp=1;var v=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),h=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),O=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),T=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),L=Symbol.for("react.activity"),de=Symbol.iterator;function Je(f){return f===null||typeof f!="object"?null:(f=de&&f[de]||f["@@iterator"],typeof f=="function"?f:null)}var He={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ze=Object.assign,_n={};function Ke(f,x,_){this.props=f,this.context=x,this.refs=_n,this.updater=_||He}Ke.prototype.isReactComponent={},Ke.prototype.setState=function(f,x){if(typeof f!="object"&&typeof f!="function"&&f!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,f,x,"setState")},Ke.prototype.forceUpdate=function(f){this.updater.enqueueForceUpdate(this,f,"forceUpdate")};function Pn(){}Pn.prototype=Ke.prototype;function je(f,x,_){this.props=f,this.context=x,this.refs=_n,this.updater=_||He}var on=je.prototype=new Pn;on.constructor=je,ze(on,Ke.prototype),on.isPureReactComponent=!0;var En=Array.isArray;function Le(){}var F={H:null,A:null,T:null,S:null},Qe=Object.prototype.hasOwnProperty;function xn(f,x,_){var z=_.ref;return{$$typeof:v,type:f,key:x,ref:z!==void 0?z:null,props:_}}function Vt(f,x){return xn(f.type,x,f.props)}function Tn(f){return typeof f=="object"&&f!==null&&f.$$typeof===v}function Ge(f){var x={"=":"=0",":":"=2"};return"$"+f.replace(/[=:]/g,function(_){return x[_]})}var Ct=/\/+/g;function On(f,x){return typeof f=="object"&&f!==null&&f.key!=null?Ge(""+f.key):x.toString(36)}function Sn(f){switch(f.status){case"fulfilled":return f.value;case"rejected":throw f.reason;default:switch(typeof f.status=="string"?f.then(Le,Le):(f.status="pending",f.then(function(x){f.status==="pending"&&(f.status="fulfilled",f.value=x)},function(x){f.status==="pending"&&(f.status="rejected",f.reason=x)})),f.status){case"fulfilled":return f.value;case"rejected":throw f.reason}}throw f}function A(f,x,_,z,V){var w=typeof f;(w==="undefined"||w==="boolean")&&(f=null);var te=!1;if(f===null)te=!0;else switch(w){case"bigint":case"string":case"number":te=!0;break;case"object":switch(f.$$typeof){case v:case S:te=!0;break;case G:return te=f._init,A(te(f._payload),x,_,z,V)}}if(te)return V=V(f),te=z===""?"."+On(f,0):z,En(V)?(_="",te!=null&&(_=te.replace(Ct,"$&/")+"/"),A(V,x,_,"",function(Ma){return Ma})):V!=null&&(Tn(V)&&(V=Vt(V,_+(V.key==null||f&&f.key===V.key?"":(""+V.key).replace(Ct,"$&/")+"/")+te)),x.push(V)),1;te=0;var Be=z===""?".":z+":";if(En(f))for(var he=0;he<f.length;he++)z=f[he],w=Be+On(z,he),te+=A(z,x,_,w,V);else if(he=Je(f),typeof he=="function")for(f=he.call(f),he=0;!(z=f.next()).done;)z=z.value,w=Be+On(z,he++),te+=A(z,x,_,w,V);else if(w==="object"){if(typeof f.then=="function")return A(Sn(f),x,_,z,V);throw x=String(f),Error("Objects are not valid as a React child (found: "+(x==="[object Object]"?"object with keys {"+Object.keys(f).join(", ")+"}":x)+"). If you meant to render a collection of children, use an array instead.")}return te}function R(f,x,_){if(f==null)return f;var z=[],V=0;return A(f,z,"","",function(w){return x.call(_,w,V++)}),z}function Q(f){if(f._status===-1){var x=f._result;x=x(),x.then(function(_){(f._status===0||f._status===-1)&&(f._status=1,f._result=_)},function(_){(f._status===0||f._status===-1)&&(f._status=2,f._result=_)}),f._status===-1&&(f._status=0,f._result=x)}if(f._status===1)return f._result.default;throw f._result}var ie=typeof reportError=="function"?reportError:function(f){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var x=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof f=="object"&&f!==null&&typeof f.message=="string"?String(f.message):String(f),error:f});if(!window.dispatchEvent(x))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",f);return}console.error(f)},re={map:R,forEach:function(f,x,_){R(f,function(){x.apply(this,arguments)},_)},count:function(f){var x=0;return R(f,function(){x++}),x},toArray:function(f){return R(f,function(x){return x})||[]},only:function(f){if(!Tn(f))throw Error("React.Children.only expected to receive a single React element child.");return f}};return Y.Activity=L,Y.Children=re,Y.Component=Ke,Y.Fragment=h,Y.Profiler=N,Y.PureComponent=je,Y.StrictMode=o,Y.Suspense=j,Y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,Y.__COMPILER_RUNTIME={__proto__:null,c:function(f){return F.H.useMemoCache(f)}},Y.cache=function(f){return function(){return f.apply(null,arguments)}},Y.cacheSignal=function(){return null},Y.cloneElement=function(f,x,_){if(f==null)throw Error("The argument must be a React element, but you passed "+f+".");var z=ze({},f.props),V=f.key;if(x!=null)for(w in x.key!==void 0&&(V=""+x.key),x)!Qe.call(x,w)||w==="key"||w==="__self"||w==="__source"||w==="ref"&&x.ref===void 0||(z[w]=x[w]);var w=arguments.length-2;if(w===1)z.children=_;else if(1<w){for(var te=Array(w),Be=0;Be<w;Be++)te[Be]=arguments[Be+2];z.children=te}return xn(f.type,V,z)},Y.createContext=function(f){return f={$$typeof:O,_currentValue:f,_currentValue2:f,_threadCount:0,Provider:null,Consumer:null},f.Provider=f,f.Consumer={$$typeof:D,_context:f},f},Y.createElement=function(f,x,_){var z,V={},w=null;if(x!=null)for(z in x.key!==void 0&&(w=""+x.key),x)Qe.call(x,z)&&z!=="key"&&z!=="__self"&&z!=="__source"&&(V[z]=x[z]);var te=arguments.length-2;if(te===1)V.children=_;else if(1<te){for(var Be=Array(te),he=0;he<te;he++)Be[he]=arguments[he+2];V.children=Be}if(f&&f.defaultProps)for(z in te=f.defaultProps,te)V[z]===void 0&&(V[z]=te[z]);return xn(f,w,V)},Y.createRef=function(){return{current:null}},Y.forwardRef=function(f){return{$$typeof:Z,render:f}},Y.isValidElement=Tn,Y.lazy=function(f){return{$$typeof:G,_payload:{_status:-1,_result:f},_init:Q}},Y.memo=function(f,x){return{$$typeof:T,type:f,compare:x===void 0?null:x}},Y.startTransition=function(f){var x=F.T,_={};F.T=_;try{var z=f(),V=F.S;V!==null&&V(_,z),typeof z=="object"&&z!==null&&typeof z.then=="function"&&z.then(Le,ie)}catch(w){ie(w)}finally{x!==null&&_.types!==null&&(x.types=_.types),F.T=x}},Y.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},Y.use=function(f){return F.H.use(f)},Y.useActionState=function(f,x,_){return F.H.useActionState(f,x,_)},Y.useCallback=function(f,x){return F.H.useCallback(f,x)},Y.useContext=function(f){return F.H.useContext(f)},Y.useDebugValue=function(){},Y.useDeferredValue=function(f,x){return F.H.useDeferredValue(f,x)},Y.useEffect=function(f,x){return F.H.useEffect(f,x)},Y.useEffectEvent=function(f){return F.H.useEffectEvent(f)},Y.useId=function(){return F.H.useId()},Y.useImperativeHandle=function(f,x,_){return F.H.useImperativeHandle(f,x,_)},Y.useInsertionEffect=function(f,x){return F.H.useInsertionEffect(f,x)},Y.useLayoutEffect=function(f,x){return F.H.useLayoutEffect(f,x)},Y.useMemo=function(f,x){return F.H.useMemo(f,x)},Y.useOptimistic=function(f,x){return F.H.useOptimistic(f,x)},Y.useReducer=function(f,x,_){return F.H.useReducer(f,x,_)},Y.useRef=function(f){return F.H.useRef(f)},Y.useState=function(f){return F.H.useState(f)},Y.useSyncExternalStore=function(f,x,_){return F.H.useSyncExternalStore(f,x,_)},Y.useTransition=function(){return F.H.useTransition()},Y.version="19.2.3",Y}var Tp;function So(){return Tp||(Tp=1,po.exports=Sv()),po.exports}var sn=So(),mo={exports:{}},Cl={},vo={exports:{}},go={};var Np;function bv(){return Np||(Np=1,(function(v){function S(A,R){var Q=A.length;A.push(R);e:for(;0<Q;){var ie=Q-1>>>1,re=A[ie];if(0<N(re,R))A[ie]=R,A[Q]=re,Q=ie;else break e}}function h(A){return A.length===0?null:A[0]}function o(A){if(A.length===0)return null;var R=A[0],Q=A.pop();if(Q!==R){A[0]=Q;e:for(var ie=0,re=A.length,f=re>>>1;ie<f;){var x=2*(ie+1)-1,_=A[x],z=x+1,V=A[z];if(0>N(_,Q))z<re&&0>N(V,_)?(A[ie]=V,A[z]=Q,ie=z):(A[ie]=_,A[x]=Q,ie=x);else if(z<re&&0>N(V,Q))A[ie]=V,A[z]=Q,ie=z;else break e}}return R}function N(A,R){var Q=A.sortIndex-R.sortIndex;return Q!==0?Q:A.id-R.id}if(v.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var D=performance;v.unstable_now=function(){return D.now()}}else{var O=Date,Z=O.now();v.unstable_now=function(){return O.now()-Z}}var j=[],T=[],G=1,L=null,de=3,Je=!1,He=!1,ze=!1,_n=!1,Ke=typeof setTimeout=="function"?setTimeout:null,Pn=typeof clearTimeout=="function"?clearTimeout:null,je=typeof setImmediate<"u"?setImmediate:null;function on(A){for(var R=h(T);R!==null;){if(R.callback===null)o(T);else if(R.startTime<=A)o(T),R.sortIndex=R.expirationTime,S(j,R);else break;R=h(T)}}function En(A){if(ze=!1,on(A),!He)if(h(j)!==null)He=!0,Le||(Le=!0,Ge());else{var R=h(T);R!==null&&Sn(En,R.startTime-A)}}var Le=!1,F=-1,Qe=5,xn=-1;function Vt(){return _n?!0:!(v.unstable_now()-xn<Qe)}function Tn(){if(_n=!1,Le){var A=v.unstable_now();xn=A;var R=!0;try{e:{He=!1,ze&&(ze=!1,Pn(F),F=-1),Je=!0;var Q=de;try{n:{for(on(A),L=h(j);L!==null&&!(L.expirationTime>A&&Vt());){var ie=L.callback;if(typeof ie=="function"){L.callback=null,de=L.priorityLevel;var re=ie(L.expirationTime<=A);if(A=v.unstable_now(),typeof re=="function"){L.callback=re,on(A),R=!0;break n}L===h(j)&&o(j),on(A)}else o(j);L=h(j)}if(L!==null)R=!0;else{var f=h(T);f!==null&&Sn(En,f.startTime-A),R=!1}}break e}finally{L=null,de=Q,Je=!1}R=void 0}}finally{R?Ge():Le=!1}}}var Ge;if(typeof je=="function")Ge=function(){je(Tn)};else if(typeof MessageChannel<"u"){var Ct=new MessageChannel,On=Ct.port2;Ct.port1.onmessage=Tn,Ge=function(){On.postMessage(null)}}else Ge=function(){Ke(Tn,0)};function Sn(A,R){F=Ke(function(){A(v.unstable_now())},R)}v.unstable_IdlePriority=5,v.unstable_ImmediatePriority=1,v.unstable_LowPriority=4,v.unstable_NormalPriority=3,v.unstable_Profiling=null,v.unstable_UserBlockingPriority=2,v.unstable_cancelCallback=function(A){A.callback=null},v.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Qe=0<A?Math.floor(1e3/A):5},v.unstable_getCurrentPriorityLevel=function(){return de},v.unstable_next=function(A){switch(de){case 1:case 2:case 3:var R=3;break;default:R=de}var Q=de;de=R;try{return A()}finally{de=Q}},v.unstable_requestPaint=function(){_n=!0},v.unstable_runWithPriority=function(A,R){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var Q=de;de=A;try{return R()}finally{de=Q}},v.unstable_scheduleCallback=function(A,R,Q){var ie=v.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?ie+Q:ie):Q=ie,A){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=Q+re,A={id:G++,callback:R,priorityLevel:A,startTime:Q,expirationTime:re,sortIndex:-1},Q>ie?(A.sortIndex=Q,S(T,A),h(j)===null&&A===h(T)&&(ze?(Pn(F),F=-1):ze=!0,Sn(En,Q-ie))):(A.sortIndex=re,S(j,A),He||Je||(He=!0,Le||(Le=!0,Ge()))),A},v.unstable_shouldYield=Vt,v.unstable_wrapCallback=function(A){var R=de;return function(){var Q=de;de=R;try{return A.apply(this,arguments)}finally{de=Q}}}})(go)),go}var Dp;function Av(){return Dp||(Dp=1,vo.exports=bv()),vo.exports}var ho={exports:{}},Ue={};var Mp;function Cv(){if(Mp)return Ue;Mp=1;var v=So();function S(j){var T="https://react.dev/errors/"+j;if(1<arguments.length){T+="?args[]="+encodeURIComponent(arguments[1]);for(var G=2;G<arguments.length;G++)T+="&args[]="+encodeURIComponent(arguments[G])}return"Minified React error #"+j+"; visit "+T+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function h(){}var o={d:{f:h,r:function(){throw Error(S(522))},D:h,C:h,L:h,m:h,X:h,S:h,M:h},p:0,findDOMNode:null},N=Symbol.for("react.portal");function D(j,T,G){var L=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:N,key:L==null?null:""+L,children:j,containerInfo:T,implementation:G}}var O=v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Z(j,T){if(j==="font")return"";if(typeof T=="string")return T==="use-credentials"?T:""}return Ue.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,Ue.createPortal=function(j,T){var G=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!T||T.nodeType!==1&&T.nodeType!==9&&T.nodeType!==11)throw Error(S(299));return D(j,T,null,G)},Ue.flushSync=function(j){var T=O.T,G=o.p;try{if(O.T=null,o.p=2,j)return j()}finally{O.T=T,o.p=G,o.d.f()}},Ue.preconnect=function(j,T){typeof j=="string"&&(T?(T=T.crossOrigin,T=typeof T=="string"?T==="use-credentials"?T:"":void 0):T=null,o.d.C(j,T))},Ue.prefetchDNS=function(j){typeof j=="string"&&o.d.D(j)},Ue.preinit=function(j,T){if(typeof j=="string"&&T&&typeof T.as=="string"){var G=T.as,L=Z(G,T.crossOrigin),de=typeof T.integrity=="string"?T.integrity:void 0,Je=typeof T.fetchPriority=="string"?T.fetchPriority:void 0;G==="style"?o.d.S(j,typeof T.precedence=="string"?T.precedence:void 0,{crossOrigin:L,integrity:de,fetchPriority:Je}):G==="script"&&o.d.X(j,{crossOrigin:L,integrity:de,fetchPriority:Je,nonce:typeof T.nonce=="string"?T.nonce:void 0})}},Ue.preinitModule=function(j,T){if(typeof j=="string")if(typeof T=="object"&&T!==null){if(T.as==null||T.as==="script"){var G=Z(T.as,T.crossOrigin);o.d.M(j,{crossOrigin:G,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0})}}else T==null&&o.d.M(j)},Ue.preload=function(j,T){if(typeof j=="string"&&typeof T=="object"&&T!==null&&typeof T.as=="string"){var G=T.as,L=Z(G,T.crossOrigin);o.d.L(j,G,{crossOrigin:L,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0,type:typeof T.type=="string"?T.type:void 0,fetchPriority:typeof T.fetchPriority=="string"?T.fetchPriority:void 0,referrerPolicy:typeof T.referrerPolicy=="string"?T.referrerPolicy:void 0,imageSrcSet:typeof T.imageSrcSet=="string"?T.imageSrcSet:void 0,imageSizes:typeof T.imageSizes=="string"?T.imageSizes:void 0,media:typeof T.media=="string"?T.media:void 0})}},Ue.preloadModule=function(j,T){if(typeof j=="string")if(T){var G=Z(T.as,T.crossOrigin);o.d.m(j,{as:typeof T.as=="string"&&T.as!=="script"?T.as:void 0,crossOrigin:G,integrity:typeof T.integrity=="string"?T.integrity:void 0})}else o.d.m(j)},Ue.requestFormReset=function(j){o.d.r(j)},Ue.unstable_batchedUpdates=function(j,T){return j(T)},Ue.useFormState=function(j,T,G){return O.H.useFormState(j,T,G)},Ue.useFormStatus=function(){return O.H.useHostTransitionStatus()},Ue.version="19.2.3",Ue}var Rp;function Ev(){if(Rp)return ho.exports;Rp=1;function v(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v)}catch(S){console.error(S)}}return v(),ho.exports=Cv(),ho.exports}var _p;function xv(){if(_p)return Cl;_p=1;var v=Av(),S=So(),h=Ev();function o(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function N(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function D(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function O(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Z(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function j(e){if(D(e)!==e)throw Error(o(188))}function T(e){var n=e.alternate;if(!n){if(n=D(e),n===null)throw Error(o(188));return n!==e?null:e}for(var t=e,a=n;;){var l=t.return;if(l===null)break;var i=l.alternate;if(i===null){if(a=l.return,a!==null){t=a;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===t)return j(l),e;if(i===a)return j(l),n;i=i.sibling}throw Error(o(188))}if(t.return!==a.return)t=l,a=i;else{for(var u=!1,s=l.child;s;){if(s===t){u=!0,t=l,a=i;break}if(s===a){u=!0,a=l,t=i;break}s=s.sibling}if(!u){for(s=i.child;s;){if(s===t){u=!0,t=i,a=l;break}if(s===a){u=!0,a=i,t=l;break}s=s.sibling}if(!u)throw Error(o(189))}}if(t.alternate!==a)throw Error(o(190))}if(t.tag!==3)throw Error(o(188));return t.stateNode.current===t?e:n}function G(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=G(e),n!==null)return n;e=e.sibling}return null}var L=Object.assign,de=Symbol.for("react.element"),Je=Symbol.for("react.transitional.element"),He=Symbol.for("react.portal"),ze=Symbol.for("react.fragment"),_n=Symbol.for("react.strict_mode"),Ke=Symbol.for("react.profiler"),Pn=Symbol.for("react.consumer"),je=Symbol.for("react.context"),on=Symbol.for("react.forward_ref"),En=Symbol.for("react.suspense"),Le=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),Qe=Symbol.for("react.lazy"),xn=Symbol.for("react.activity"),Vt=Symbol.for("react.memo_cache_sentinel"),Tn=Symbol.iterator;function Ge(e){return e===null||typeof e!="object"?null:(e=Tn&&e[Tn]||e["@@iterator"],typeof e=="function"?e:null)}var Ct=Symbol.for("react.client.reference");function On(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ct?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ze:return"Fragment";case Ke:return"Profiler";case _n:return"StrictMode";case En:return"Suspense";case Le:return"SuspenseList";case xn:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case He:return"Portal";case je:return e.displayName||"Context";case Pn:return(e._context.displayName||"Context")+".Consumer";case on:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return n=e.displayName||null,n!==null?n:On(e.type)||"Memo";case Qe:n=e._payload,e=e._init;try{return On(e(n))}catch{}}return null}var Sn=Array.isArray,A=S.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,R=h.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q={pending:!1,data:null,method:null,action:null},ie=[],re=-1;function f(e){return{current:e}}function x(e){0>re||(e.current=ie[re],ie[re]=null,re--)}function _(e,n){re++,ie[re]=e.current,e.current=n}var z=f(null),V=f(null),w=f(null),te=f(null);function Be(e,n){switch(_(w,n),_(V,e),_(z,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Zf(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Zf(n),e=wf(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}x(z),_(z,e)}function he(){x(z),x(V),x(w)}function Ma(e){e.memoizedState!==null&&_(te,e);var n=z.current,t=wf(n,e.type);n!==t&&(_(V,e),_(z,t))}function xl(e){V.current===e&&(x(z),x(V)),te.current===e&&(x(te),hl._currentValue=Q)}var Ii,bo;function Et(e){if(Ii===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Ii=n&&n[1]||"",bo=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ii+e+bo}var Ji=!1;function Ki(e,n){if(!e||Ji)return"";Ji=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(n){var E=function(){throw Error()};if(Object.defineProperty(E.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(E,[])}catch(y){var g=y}Reflect.construct(e,[],E)}else{try{E.call()}catch(y){g=y}e.call(E.prototype)}}else{try{throw Error()}catch(y){g=y}(E=e())&&typeof E.catch=="function"&&E.catch(function(){})}}catch(y){if(y&&g&&typeof y.stack=="string")return[y.stack,g.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),u=i[0],s=i[1];if(u&&s){var r=u.split(`
`),m=s.split(`
`);for(l=a=0;a<r.length&&!r[a].includes("DetermineComponentFrameRoot");)a++;for(;l<m.length&&!m[l].includes("DetermineComponentFrameRoot");)l++;if(a===r.length||l===m.length)for(a=r.length-1,l=m.length-1;1<=a&&0<=l&&r[a]!==m[l];)l--;for(;1<=a&&0<=l;a--,l--)if(r[a]!==m[l]){if(a!==1||l!==1)do if(a--,l--,0>l||r[a]!==m[l]){var b=`
`+r[a].replace(" at new "," at ");return e.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",e.displayName)),b}while(1<=a&&0<=l);break}}}finally{Ji=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?Et(t):""}function Jp(e,n){switch(e.tag){case 26:case 27:case 5:return Et(e.type);case 16:return Et("Lazy");case 13:return e.child!==n&&n!==null?Et("Suspense Fallback"):Et("Suspense");case 19:return Et("SuspenseList");case 0:case 15:return Ki(e.type,!1);case 11:return Ki(e.type.render,!1);case 1:return Ki(e.type,!0);case 31:return Et("Activity");default:return""}}function Ao(e){try{var n="",t=null;do n+=Jp(e,t),t=e,e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Pi=Object.prototype.hasOwnProperty,Fi=v.unstable_scheduleCallback,ki=v.unstable_cancelCallback,Kp=v.unstable_shouldYield,Pp=v.unstable_requestPaint,Pe=v.unstable_now,Fp=v.unstable_getCurrentPriorityLevel,Co=v.unstable_ImmediatePriority,Eo=v.unstable_UserBlockingPriority,Tl=v.unstable_NormalPriority,kp=v.unstable_LowPriority,xo=v.unstable_IdlePriority,Wp=v.log,ed=v.unstable_setDisableYieldValue,Ra=null,Fe=null;function Fn(e){if(typeof Wp=="function"&&ed(e),Fe&&typeof Fe.setStrictMode=="function")try{Fe.setStrictMode(Ra,e)}catch{}}var ke=Math.clz32?Math.clz32:ad,nd=Math.log,td=Math.LN2;function ad(e){return e>>>=0,e===0?32:31-(nd(e)/td|0)|0}var Nl=256,Dl=262144,Ml=4194304;function xt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Rl(e,n,t){var a=e.pendingLanes;if(a===0)return 0;var l=0,i=e.suspendedLanes,u=e.pingedLanes;e=e.warmLanes;var s=a&134217727;return s!==0?(a=s&~i,a!==0?l=xt(a):(u&=s,u!==0?l=xt(u):t||(t=s&~e,t!==0&&(l=xt(t))))):(s=a&~i,s!==0?l=xt(s):u!==0?l=xt(u):t||(t=a&~e,t!==0&&(l=xt(t)))),l===0?0:n!==0&&n!==l&&(n&i)===0&&(i=l&-l,t=n&-n,i>=t||i===32&&(t&4194048)!==0)?n:l}function _a(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ld(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function To(){var e=Ml;return Ml<<=1,(Ml&62914560)===0&&(Ml=4194304),e}function Wi(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Oa(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function id(e,n,t,a,l,i){var u=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var s=e.entanglements,r=e.expirationTimes,m=e.hiddenUpdates;for(t=u&~t;0<t;){var b=31-ke(t),E=1<<b;s[b]=0,r[b]=-1;var g=m[b];if(g!==null)for(m[b]=null,b=0;b<g.length;b++){var y=g[b];y!==null&&(y.lane&=-536870913)}t&=~E}a!==0&&No(e,a,0),i!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=i&~(u&~n))}function No(e,n,t){e.pendingLanes|=n,e.suspendedLanes&=~n;var a=31-ke(n);e.entangledLanes|=n,e.entanglements[a]=e.entanglements[a]|1073741824|t&261930}function Do(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var a=31-ke(t),l=1<<a;l&n|e[a]&n&&(e[a]|=n),t&=~l}}function Mo(e,n){var t=n&-n;return t=(t&42)!==0?1:eu(t),(t&(e.suspendedLanes|n))!==0?0:t}function eu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function nu(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ro(){var e=R.p;return e!==0?e:(e=window.event,e===void 0?32:vp(e.type))}function _o(e,n){var t=R.p;try{return R.p=e,n()}finally{R.p=t}}var kn=Math.random().toString(36).slice(2),De="__reactFiber$"+kn,Ye="__reactProps$"+kn,$t="__reactContainer$"+kn,tu="__reactEvents$"+kn,ud="__reactListeners$"+kn,sd="__reactHandles$"+kn,Oo="__reactResources$"+kn,ja="__reactMarker$"+kn;function au(e){delete e[De],delete e[Ye],delete e[tu],delete e[ud],delete e[sd]}function Xt(e){var n=e[De];if(n)return n;for(var t=e.parentNode;t;){if(n=t[$t]||t[De]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Wf(e);e!==null;){if(t=e[De])return t;e=Wf(e)}return n}e=t,t=e.parentNode}return null}function Zt(e){if(e=e[De]||e[$t]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Ua(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(o(33))}function wt(e){var n=e[Oo];return n||(n=e[Oo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Te(e){e[ja]=!0}var jo=new Set,Uo={};function Tt(e,n){It(e,n),It(e+"Capture",n)}function It(e,n){for(Uo[e]=n,e=0;e<n.length;e++)jo.add(n[e])}var od=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),zo={},Bo={};function rd(e){return Pi.call(Bo,e)?!0:Pi.call(zo,e)?!1:od.test(e)?Bo[e]=!0:(zo[e]=!0,!1)}function _l(e,n,t){if(rd(n))if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var a=n.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+t)}}function Ol(e,n,t){if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+t)}}function jn(e,n,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(n,t,""+a)}}function rn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function qo(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function cd(e,n,t){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var l=a.get,i=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(u){t=""+u,i.call(this,u)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return t},setValue:function(u){t=""+u},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function lu(e){if(!e._valueTracker){var n=qo(e)?"checked":"value";e._valueTracker=cd(e,n,""+e[n])}}function Ho(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),a="";return e&&(a=qo(e)?e.checked?"true":"false":e.value),e=a,e!==t?(n.setValue(e),!0):!1}function jl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var fd=/[\n"\\]/g;function cn(e){return e.replace(fd,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function iu(e,n,t,a,l,i,u,s){e.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.type=u:e.removeAttribute("type"),n!=null?u==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+rn(n)):e.value!==""+rn(n)&&(e.value=""+rn(n)):u!=="submit"&&u!=="reset"||e.removeAttribute("value"),n!=null?uu(e,u,rn(n)):t!=null?uu(e,u,rn(t)):a!=null&&e.removeAttribute("value"),l==null&&i!=null&&(e.defaultChecked=!!i),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.name=""+rn(s):e.removeAttribute("name")}function Lo(e,n,t,a,l,i,u,s){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),n!=null||t!=null){if(!(i!=="submit"&&i!=="reset"||n!=null)){lu(e);return}t=t!=null?""+rn(t):"",n=n!=null?""+rn(n):t,s||n===e.value||(e.value=n),e.defaultValue=n}a=a??l,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=s?e.checked:!!a,e.defaultChecked=!!a,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.name=u),lu(e)}function uu(e,n,t){n==="number"&&jl(e.ownerDocument)===e||e.defaultValue===""+t||(e.defaultValue=""+t)}function Jt(e,n,t,a){if(e=e.options,n){n={};for(var l=0;l<t.length;l++)n["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=n.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&a&&(e[t].defaultSelected=!0)}else{for(t=""+rn(t),n=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,a&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function Qo(e,n,t){if(n!=null&&(n=""+rn(n),n!==e.value&&(e.value=n),t==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=t!=null?""+rn(t):""}function Go(e,n,t,a){if(n==null){if(a!=null){if(t!=null)throw Error(o(92));if(Sn(a)){if(1<a.length)throw Error(o(93));a=a[0]}t=a}t==null&&(t=""),n=t}t=rn(n),e.defaultValue=t,a=e.textContent,a===t&&a!==""&&a!==null&&(e.value=a),lu(e)}function Kt(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var pd=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Yo(e,n,t){var a=n.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?a?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":a?e.setProperty(n,t):typeof t!="number"||t===0||pd.has(n)?n==="float"?e.cssFloat=t:e[n]=(""+t).trim():e[n]=t+"px"}function Vo(e,n,t){if(n!=null&&typeof n!="object")throw Error(o(62));if(e=e.style,t!=null){for(var a in t)!t.hasOwnProperty(a)||n!=null&&n.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var l in n)a=n[l],n.hasOwnProperty(l)&&t[l]!==a&&Yo(e,l,a)}else for(var i in n)n.hasOwnProperty(i)&&Yo(e,i,n[i])}function su(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),md=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ul(e){return md.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Un(){}var ou=null;function ru(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Pt=null,Ft=null;function $o(e){var n=Zt(e);if(n&&(e=n.stateNode)){var t=e[Ye]||null;e:switch(e=n.stateNode,n.type){case"input":if(iu(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+cn(""+n)+'"][type="radio"]'),n=0;n<t.length;n++){var a=t[n];if(a!==e&&a.form===e.form){var l=a[Ye]||null;if(!l)throw Error(o(90));iu(a,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(n=0;n<t.length;n++)a=t[n],a.form===e.form&&Ho(a)}break e;case"textarea":Qo(e,t.value,t.defaultValue);break e;case"select":n=t.value,n!=null&&Jt(e,!!t.multiple,n,!1)}}}var cu=!1;function Xo(e,n,t){if(cu)return e(n,t);cu=!0;try{var a=e(n);return a}finally{if(cu=!1,(Pt!==null||Ft!==null)&&(bi(),Pt&&(n=Pt,e=Ft,Ft=Pt=null,$o(n),e)))for(n=0;n<e.length;n++)$o(e[n])}}function za(e,n){var t=e.stateNode;if(t===null)return null;var a=t[Ye]||null;if(a===null)return null;t=a[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(o(231,n,typeof t));return t}var zn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fu=!1;if(zn)try{var Ba={};Object.defineProperty(Ba,"passive",{get:function(){fu=!0}}),window.addEventListener("test",Ba,Ba),window.removeEventListener("test",Ba,Ba)}catch{fu=!1}var Wn=null,pu=null,zl=null;function Zo(){if(zl)return zl;var e,n=pu,t=n.length,a,l="value"in Wn?Wn.value:Wn.textContent,i=l.length;for(e=0;e<t&&n[e]===l[e];e++);var u=t-e;for(a=1;a<=u&&n[t-a]===l[i-a];a++);return zl=l.slice(e,1<a?1-a:void 0)}function Bl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ql(){return!0}function wo(){return!1}function Ve(e){function n(t,a,l,i,u){this._reactName=t,this._targetInst=l,this.type=a,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ql:wo,this.isPropagationStopped=wo,this}return L(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ql)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ql)},persist:function(){},isPersistent:ql}),n}var Nt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hl=Ve(Nt),qa=L({},Nt,{view:0,detail:0}),vd=Ve(qa),du,mu,Ha,Ll=L({},qa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ha&&(Ha&&e.type==="mousemove"?(du=e.screenX-Ha.screenX,mu=e.screenY-Ha.screenY):mu=du=0,Ha=e),du)},movementY:function(e){return"movementY"in e?e.movementY:mu}}),Io=Ve(Ll),gd=L({},Ll,{dataTransfer:0}),hd=Ve(gd),yd=L({},qa,{relatedTarget:0}),vu=Ve(yd),Sd=L({},Nt,{animationName:0,elapsedTime:0,pseudoElement:0}),bd=Ve(Sd),Ad=L({},Nt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Cd=Ve(Ad),Ed=L({},Nt,{data:0}),Jo=Ve(Ed),xd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Td={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Dd(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Nd[e])?!!n[e]:!1}function gu(){return Dd}var Md=L({},qa,{key:function(e){if(e.key){var n=xd[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Bl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Td[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gu,charCode:function(e){return e.type==="keypress"?Bl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Bl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Rd=Ve(Md),_d=L({},Ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ko=Ve(_d),Od=L({},qa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gu}),jd=Ve(Od),Ud=L({},Nt,{propertyName:0,elapsedTime:0,pseudoElement:0}),zd=Ve(Ud),Bd=L({},Ll,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),qd=Ve(Bd),Hd=L({},Nt,{newState:0,oldState:0}),Ld=Ve(Hd),Qd=[9,13,27,32],hu=zn&&"CompositionEvent"in window,La=null;zn&&"documentMode"in document&&(La=document.documentMode);var Gd=zn&&"TextEvent"in window&&!La,Po=zn&&(!hu||La&&8<La&&11>=La),Fo=" ",ko=!1;function Wo(e,n){switch(e){case"keyup":return Qd.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function er(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var kt=!1;function Yd(e,n){switch(e){case"compositionend":return er(n);case"keypress":return n.which!==32?null:(ko=!0,Fo);case"textInput":return e=n.data,e===Fo&&ko?null:e;default:return null}}function Vd(e,n){if(kt)return e==="compositionend"||!hu&&Wo(e,n)?(e=Zo(),zl=pu=Wn=null,kt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Po&&n.locale!=="ko"?null:n.data;default:return null}}var $d={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nr(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!$d[e.type]:n==="textarea"}function tr(e,n,t,a){Pt?Ft?Ft.push(a):Ft=[a]:Pt=a,n=Di(n,"onChange"),0<n.length&&(t=new Hl("onChange","change",null,t,a),e.push({event:t,listeners:n}))}var Qa=null,Ga=null;function Xd(e){Qf(e,0)}function Ql(e){var n=Ua(e);if(Ho(n))return e}function ar(e,n){if(e==="change")return n}var lr=!1;if(zn){var yu;if(zn){var Su="oninput"in document;if(!Su){var ir=document.createElement("div");ir.setAttribute("oninput","return;"),Su=typeof ir.oninput=="function"}yu=Su}else yu=!1;lr=yu&&(!document.documentMode||9<document.documentMode)}function ur(){Qa&&(Qa.detachEvent("onpropertychange",sr),Ga=Qa=null)}function sr(e){if(e.propertyName==="value"&&Ql(Ga)){var n=[];tr(n,Ga,e,ru(e)),Xo(Xd,n)}}function Zd(e,n,t){e==="focusin"?(ur(),Qa=n,Ga=t,Qa.attachEvent("onpropertychange",sr)):e==="focusout"&&ur()}function wd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ql(Ga)}function Id(e,n){if(e==="click")return Ql(n)}function Jd(e,n){if(e==="input"||e==="change")return Ql(n)}function Kd(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var We=typeof Object.is=="function"?Object.is:Kd;function Ya(e,n){if(We(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),a=Object.keys(n);if(t.length!==a.length)return!1;for(a=0;a<t.length;a++){var l=t[a];if(!Pi.call(n,l)||!We(e[l],n[l]))return!1}return!0}function or(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function rr(e,n){var t=or(e);e=0;for(var a;t;){if(t.nodeType===3){if(a=e+t.textContent.length,e<=n&&a>=n)return{node:t,offset:n-e};e=a}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=or(t)}}function cr(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?cr(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function fr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=jl(e.document);n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=jl(e.document)}return n}function bu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Pd=zn&&"documentMode"in document&&11>=document.documentMode,Wt=null,Au=null,Va=null,Cu=!1;function pr(e,n,t){var a=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Cu||Wt==null||Wt!==jl(a)||(a=Wt,"selectionStart"in a&&bu(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Va&&Ya(Va,a)||(Va=a,a=Di(Au,"onSelect"),0<a.length&&(n=new Hl("onSelect","select",null,n,t),e.push({event:n,listeners:a}),n.target=Wt)))}function Dt(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var ea={animationend:Dt("Animation","AnimationEnd"),animationiteration:Dt("Animation","AnimationIteration"),animationstart:Dt("Animation","AnimationStart"),transitionrun:Dt("Transition","TransitionRun"),transitionstart:Dt("Transition","TransitionStart"),transitioncancel:Dt("Transition","TransitionCancel"),transitionend:Dt("Transition","TransitionEnd")},Eu={},dr={};zn&&(dr=document.createElement("div").style,"AnimationEvent"in window||(delete ea.animationend.animation,delete ea.animationiteration.animation,delete ea.animationstart.animation),"TransitionEvent"in window||delete ea.transitionend.transition);function Mt(e){if(Eu[e])return Eu[e];if(!ea[e])return e;var n=ea[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in dr)return Eu[e]=n[t];return e}var mr=Mt("animationend"),vr=Mt("animationiteration"),gr=Mt("animationstart"),Fd=Mt("transitionrun"),kd=Mt("transitionstart"),Wd=Mt("transitioncancel"),hr=Mt("transitionend"),yr=new Map,xu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");xu.push("scrollEnd");function bn(e,n){yr.set(e,n),Tt(n,[e])}var Gl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},fn=[],na=0,Tu=0;function Yl(){for(var e=na,n=Tu=na=0;n<e;){var t=fn[n];fn[n++]=null;var a=fn[n];fn[n++]=null;var l=fn[n];fn[n++]=null;var i=fn[n];if(fn[n++]=null,a!==null&&l!==null){var u=a.pending;u===null?l.next=l:(l.next=u.next,u.next=l),a.pending=l}i!==0&&Sr(t,l,i)}}function Vl(e,n,t,a){fn[na++]=e,fn[na++]=n,fn[na++]=t,fn[na++]=a,Tu|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Nu(e,n,t,a){return Vl(e,n,t,a),$l(e)}function Rt(e,n){return Vl(e,null,null,n),$l(e)}function Sr(e,n,t){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t);for(var l=!1,i=e.return;i!==null;)i.childLanes|=t,a=i.alternate,a!==null&&(a.childLanes|=t),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(l=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,l&&n!==null&&(l=31-ke(t),e=i.hiddenUpdates,a=e[l],a===null?e[l]=[n]:a.push(n),n.lane=t|536870912),i):null}function $l(e){if(50<cl)throw cl=0,Bs=null,Error(o(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var ta={};function em(e,n,t,a){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function en(e,n,t,a){return new em(e,n,t,a)}function Du(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Bn(e,n){var t=e.alternate;return t===null?(t=en(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&65011712,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function br(e,n){e.flags&=65011714;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,n=t.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Xl(e,n,t,a,l,i){var u=0;if(a=e,typeof e=="function")Du(e)&&(u=1);else if(typeof e=="string")u=iv(e,t,z.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case xn:return e=en(31,t,n,l),e.elementType=xn,e.lanes=i,e;case ze:return _t(t.children,l,i,n);case _n:u=8,l|=24;break;case Ke:return e=en(12,t,n,l|2),e.elementType=Ke,e.lanes=i,e;case En:return e=en(13,t,n,l),e.elementType=En,e.lanes=i,e;case Le:return e=en(19,t,n,l),e.elementType=Le,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case je:u=10;break e;case Pn:u=9;break e;case on:u=11;break e;case F:u=14;break e;case Qe:u=16,a=null;break e}u=29,t=Error(o(130,e===null?"null":typeof e,"")),a=null}return n=en(u,t,n,l),n.elementType=e,n.type=a,n.lanes=i,n}function _t(e,n,t,a){return e=en(7,e,a,n),e.lanes=t,e}function Mu(e,n,t){return e=en(6,e,null,n),e.lanes=t,e}function Ar(e){var n=en(18,null,null,0);return n.stateNode=e,n}function Ru(e,n,t){return n=en(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Cr=new WeakMap;function pn(e,n){if(typeof e=="object"&&e!==null){var t=Cr.get(e);return t!==void 0?t:(n={value:e,source:n,stack:Ao(n)},Cr.set(e,n),n)}return{value:e,source:n,stack:Ao(n)}}var aa=[],la=0,Zl=null,$a=0,dn=[],mn=0,et=null,Nn=1,Dn="";function qn(e,n){aa[la++]=$a,aa[la++]=Zl,Zl=e,$a=n}function Er(e,n,t){dn[mn++]=Nn,dn[mn++]=Dn,dn[mn++]=et,et=e;var a=Nn;e=Dn;var l=32-ke(a)-1;a&=~(1<<l),t+=1;var i=32-ke(n)+l;if(30<i){var u=l-l%5;i=(a&(1<<u)-1).toString(32),a>>=u,l-=u,Nn=1<<32-ke(n)+l|t<<l|a,Dn=i+e}else Nn=1<<i|t<<l|a,Dn=e}function _u(e){e.return!==null&&(qn(e,1),Er(e,1,0))}function Ou(e){for(;e===Zl;)Zl=aa[--la],aa[la]=null,$a=aa[--la],aa[la]=null;for(;e===et;)et=dn[--mn],dn[mn]=null,Dn=dn[--mn],dn[mn]=null,Nn=dn[--mn],dn[mn]=null}function xr(e,n){dn[mn++]=Nn,dn[mn++]=Dn,dn[mn++]=et,Nn=n.id,Dn=n.overflow,et=e}var Me=null,fe=null,k=!1,nt=null,vn=!1,ju=Error(o(519));function tt(e){var n=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Xa(pn(n,e)),ju}function Tr(e){var n=e.stateNode,t=e.type,a=e.memoizedProps;switch(n[De]=e,n[Ye]=a,t){case"dialog":J("cancel",n),J("close",n);break;case"iframe":case"object":case"embed":J("load",n);break;case"video":case"audio":for(t=0;t<pl.length;t++)J(pl[t],n);break;case"source":J("error",n);break;case"img":case"image":case"link":J("error",n),J("load",n);break;case"details":J("toggle",n);break;case"input":J("invalid",n),Lo(n,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":J("invalid",n);break;case"textarea":J("invalid",n),Go(n,a.value,a.defaultValue,a.children)}t=a.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||n.textContent===""+t||a.suppressHydrationWarning===!0||$f(n.textContent,t)?(a.popover!=null&&(J("beforetoggle",n),J("toggle",n)),a.onScroll!=null&&J("scroll",n),a.onScrollEnd!=null&&J("scrollend",n),a.onClick!=null&&(n.onclick=Un),n=!0):n=!1,n||tt(e,!0)}function Nr(e){for(Me=e.return;Me;)switch(Me.tag){case 5:case 31:case 13:vn=!1;return;case 27:case 3:vn=!0;return;default:Me=Me.return}}function ia(e){if(e!==Me)return!1;if(!k)return Nr(e),k=!0,!1;var n=e.tag,t;if((t=n!==3&&n!==27)&&((t=n===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||Ps(e.type,e.memoizedProps)),t=!t),t&&fe&&tt(e),Nr(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));fe=kf(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));fe=kf(e)}else n===27?(n=fe,gt(e.type)?(e=no,no=null,fe=e):fe=n):fe=Me?hn(e.stateNode.nextSibling):null;return!0}function Ot(){fe=Me=null,k=!1}function Uu(){var e=nt;return e!==null&&(we===null?we=e:we.push.apply(we,e),nt=null),e}function Xa(e){nt===null?nt=[e]:nt.push(e)}var zu=f(null),jt=null,Hn=null;function at(e,n,t){_(zu,n._currentValue),n._currentValue=t}function Ln(e){e._currentValue=zu.current,x(zu)}function Bu(e,n,t){for(;e!==null;){var a=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,a!==null&&(a.childLanes|=n)):a!==null&&(a.childLanes&n)!==n&&(a.childLanes|=n),e===t)break;e=e.return}}function qu(e,n,t,a){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var i=l.dependencies;if(i!==null){var u=l.child;i=i.firstContext;e:for(;i!==null;){var s=i;i=l;for(var r=0;r<n.length;r++)if(s.context===n[r]){i.lanes|=t,s=i.alternate,s!==null&&(s.lanes|=t),Bu(i.return,t,e),a||(u=null);break e}i=s.next}}else if(l.tag===18){if(u=l.return,u===null)throw Error(o(341));u.lanes|=t,i=u.alternate,i!==null&&(i.lanes|=t),Bu(u,t,e),u=null}else u=l.child;if(u!==null)u.return=l;else for(u=l;u!==null;){if(u===e){u=null;break}if(l=u.sibling,l!==null){l.return=u.return,u=l;break}u=u.return}l=u}}function ua(e,n,t,a){e=null;for(var l=n,i=!1;l!==null;){if(!i){if((l.flags&524288)!==0)i=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var u=l.alternate;if(u===null)throw Error(o(387));if(u=u.memoizedProps,u!==null){var s=l.type;We(l.pendingProps.value,u.value)||(e!==null?e.push(s):e=[s])}}else if(l===te.current){if(u=l.alternate,u===null)throw Error(o(387));u.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(hl):e=[hl])}l=l.return}e!==null&&qu(n,e,t,a),n.flags|=262144}function wl(e){for(e=e.firstContext;e!==null;){if(!We(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ut(e){jt=e,Hn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Re(e){return Dr(jt,e)}function Il(e,n){return jt===null&&Ut(e),Dr(e,n)}function Dr(e,n){var t=n._currentValue;if(n={context:n,memoizedValue:t,next:null},Hn===null){if(e===null)throw Error(o(308));Hn=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Hn=Hn.next=n;return t}var nm=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(t,a){e.push(a)}};this.abort=function(){n.aborted=!0,e.forEach(function(t){return t()})}},tm=v.unstable_scheduleCallback,am=v.unstable_NormalPriority,be={$$typeof:je,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Hu(){return{controller:new nm,data:new Map,refCount:0}}function Za(e){e.refCount--,e.refCount===0&&tm(am,function(){e.controller.abort()})}var wa=null,Lu=0,sa=0,oa=null;function lm(e,n){if(wa===null){var t=wa=[];Lu=0,sa=Ys(),oa={status:"pending",value:void 0,then:function(a){t.push(a)}}}return Lu++,n.then(Mr,Mr),n}function Mr(){if(--Lu===0&&wa!==null){oa!==null&&(oa.status="fulfilled");var e=wa;wa=null,sa=0,oa=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function im(e,n){var t=[],a={status:"pending",value:null,reason:null,then:function(l){t.push(l)}};return e.then(function(){a.status="fulfilled",a.value=n;for(var l=0;l<t.length;l++)(0,t[l])(n)},function(l){for(a.status="rejected",a.reason=l,l=0;l<t.length;l++)(0,t[l])(void 0)}),a}var Rr=A.S;A.S=function(e,n){df=Pe(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&lm(e,n),Rr!==null&&Rr(e,n)};var zt=f(null);function Qu(){var e=zt.current;return e!==null?e:ce.pooledCache}function Jl(e,n){n===null?_(zt,zt.current):_(zt,n.pool)}function _r(){var e=Qu();return e===null?null:{parent:be._currentValue,pool:e}}var ra=Error(o(460)),Gu=Error(o(474)),Kl=Error(o(542)),Pl={then:function(){}};function Or(e){return e=e.status,e==="fulfilled"||e==="rejected"}function jr(e,n,t){switch(t=e[t],t===void 0?e.push(n):t!==n&&(n.then(Un,Un),n=t),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,zr(e),e;default:if(typeof n.status=="string")n.then(Un,Un);else{if(e=ce,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=n,e.status="pending",e.then(function(a){if(n.status==="pending"){var l=n;l.status="fulfilled",l.value=a}},function(a){if(n.status==="pending"){var l=n;l.status="rejected",l.reason=a}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,zr(e),e}throw qt=n,ra}}function Bt(e){try{var n=e._init;return n(e._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(qt=t,ra):t}}var qt=null;function Ur(){if(qt===null)throw Error(o(459));var e=qt;return qt=null,e}function zr(e){if(e===ra||e===Kl)throw Error(o(483))}var ca=null,Ia=0;function Fl(e){var n=Ia;return Ia+=1,ca===null&&(ca=[]),jr(ca,e,n)}function Ja(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function kl(e,n){throw n.$$typeof===de?Error(o(525)):(e=Object.prototype.toString.call(n),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Br(e){function n(p,c){if(e){var d=p.deletions;d===null?(p.deletions=[c],p.flags|=16):d.push(c)}}function t(p,c){if(!e)return null;for(;c!==null;)n(p,c),c=c.sibling;return null}function a(p){for(var c=new Map;p!==null;)p.key!==null?c.set(p.key,p):c.set(p.index,p),p=p.sibling;return c}function l(p,c){return p=Bn(p,c),p.index=0,p.sibling=null,p}function i(p,c,d){return p.index=d,e?(d=p.alternate,d!==null?(d=d.index,d<c?(p.flags|=67108866,c):d):(p.flags|=67108866,c)):(p.flags|=1048576,c)}function u(p){return e&&p.alternate===null&&(p.flags|=67108866),p}function s(p,c,d,C){return c===null||c.tag!==6?(c=Mu(d,p.mode,C),c.return=p,c):(c=l(c,d),c.return=p,c)}function r(p,c,d,C){var q=d.type;return q===ze?b(p,c,d.props.children,C,d.key):c!==null&&(c.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===Qe&&Bt(q)===c.type)?(c=l(c,d.props),Ja(c,d),c.return=p,c):(c=Xl(d.type,d.key,d.props,null,p.mode,C),Ja(c,d),c.return=p,c)}function m(p,c,d,C){return c===null||c.tag!==4||c.stateNode.containerInfo!==d.containerInfo||c.stateNode.implementation!==d.implementation?(c=Ru(d,p.mode,C),c.return=p,c):(c=l(c,d.children||[]),c.return=p,c)}function b(p,c,d,C,q){return c===null||c.tag!==7?(c=_t(d,p.mode,C,q),c.return=p,c):(c=l(c,d),c.return=p,c)}function E(p,c,d){if(typeof c=="string"&&c!==""||typeof c=="number"||typeof c=="bigint")return c=Mu(""+c,p.mode,d),c.return=p,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Je:return d=Xl(c.type,c.key,c.props,null,p.mode,d),Ja(d,c),d.return=p,d;case He:return c=Ru(c,p.mode,d),c.return=p,c;case Qe:return c=Bt(c),E(p,c,d)}if(Sn(c)||Ge(c))return c=_t(c,p.mode,d,null),c.return=p,c;if(typeof c.then=="function")return E(p,Fl(c),d);if(c.$$typeof===je)return E(p,Il(p,c),d);kl(p,c)}return null}function g(p,c,d,C){var q=c!==null?c.key:null;if(typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint")return q!==null?null:s(p,c,""+d,C);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Je:return d.key===q?r(p,c,d,C):null;case He:return d.key===q?m(p,c,d,C):null;case Qe:return d=Bt(d),g(p,c,d,C)}if(Sn(d)||Ge(d))return q!==null?null:b(p,c,d,C,null);if(typeof d.then=="function")return g(p,c,Fl(d),C);if(d.$$typeof===je)return g(p,c,Il(p,d),C);kl(p,d)}return null}function y(p,c,d,C,q){if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return p=p.get(d)||null,s(c,p,""+C,q);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case Je:return p=p.get(C.key===null?d:C.key)||null,r(c,p,C,q);case He:return p=p.get(C.key===null?d:C.key)||null,m(c,p,C,q);case Qe:return C=Bt(C),y(p,c,d,C,q)}if(Sn(C)||Ge(C))return p=p.get(d)||null,b(c,p,C,q,null);if(typeof C.then=="function")return y(p,c,d,Fl(C),q);if(C.$$typeof===je)return y(p,c,d,Il(c,C),q);kl(c,C)}return null}function U(p,c,d,C){for(var q=null,W=null,B=c,X=c=0,P=null;B!==null&&X<d.length;X++){B.index>X?(P=B,B=null):P=B.sibling;var ee=g(p,B,d[X],C);if(ee===null){B===null&&(B=P);break}e&&B&&ee.alternate===null&&n(p,B),c=i(ee,c,X),W===null?q=ee:W.sibling=ee,W=ee,B=P}if(X===d.length)return t(p,B),k&&qn(p,X),q;if(B===null){for(;X<d.length;X++)B=E(p,d[X],C),B!==null&&(c=i(B,c,X),W===null?q=B:W.sibling=B,W=B);return k&&qn(p,X),q}for(B=a(B);X<d.length;X++)P=y(B,p,X,d[X],C),P!==null&&(e&&P.alternate!==null&&B.delete(P.key===null?X:P.key),c=i(P,c,X),W===null?q=P:W.sibling=P,W=P);return e&&B.forEach(function(At){return n(p,At)}),k&&qn(p,X),q}function H(p,c,d,C){if(d==null)throw Error(o(151));for(var q=null,W=null,B=c,X=c=0,P=null,ee=d.next();B!==null&&!ee.done;X++,ee=d.next()){B.index>X?(P=B,B=null):P=B.sibling;var At=g(p,B,ee.value,C);if(At===null){B===null&&(B=P);break}e&&B&&At.alternate===null&&n(p,B),c=i(At,c,X),W===null?q=At:W.sibling=At,W=At,B=P}if(ee.done)return t(p,B),k&&qn(p,X),q;if(B===null){for(;!ee.done;X++,ee=d.next())ee=E(p,ee.value,C),ee!==null&&(c=i(ee,c,X),W===null?q=ee:W.sibling=ee,W=ee);return k&&qn(p,X),q}for(B=a(B);!ee.done;X++,ee=d.next())ee=y(B,p,X,ee.value,C),ee!==null&&(e&&ee.alternate!==null&&B.delete(ee.key===null?X:ee.key),c=i(ee,c,X),W===null?q=ee:W.sibling=ee,W=ee);return e&&B.forEach(function(gv){return n(p,gv)}),k&&qn(p,X),q}function oe(p,c,d,C){if(typeof d=="object"&&d!==null&&d.type===ze&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case Je:e:{for(var q=d.key;c!==null;){if(c.key===q){if(q=d.type,q===ze){if(c.tag===7){t(p,c.sibling),C=l(c,d.props.children),C.return=p,p=C;break e}}else if(c.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===Qe&&Bt(q)===c.type){t(p,c.sibling),C=l(c,d.props),Ja(C,d),C.return=p,p=C;break e}t(p,c);break}else n(p,c);c=c.sibling}d.type===ze?(C=_t(d.props.children,p.mode,C,d.key),C.return=p,p=C):(C=Xl(d.type,d.key,d.props,null,p.mode,C),Ja(C,d),C.return=p,p=C)}return u(p);case He:e:{for(q=d.key;c!==null;){if(c.key===q)if(c.tag===4&&c.stateNode.containerInfo===d.containerInfo&&c.stateNode.implementation===d.implementation){t(p,c.sibling),C=l(c,d.children||[]),C.return=p,p=C;break e}else{t(p,c);break}else n(p,c);c=c.sibling}C=Ru(d,p.mode,C),C.return=p,p=C}return u(p);case Qe:return d=Bt(d),oe(p,c,d,C)}if(Sn(d))return U(p,c,d,C);if(Ge(d)){if(q=Ge(d),typeof q!="function")throw Error(o(150));return d=q.call(d),H(p,c,d,C)}if(typeof d.then=="function")return oe(p,c,Fl(d),C);if(d.$$typeof===je)return oe(p,c,Il(p,d),C);kl(p,d)}return typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint"?(d=""+d,c!==null&&c.tag===6?(t(p,c.sibling),C=l(c,d),C.return=p,p=C):(t(p,c),C=Mu(d,p.mode,C),C.return=p,p=C),u(p)):t(p,c)}return function(p,c,d,C){try{Ia=0;var q=oe(p,c,d,C);return ca=null,q}catch(B){if(B===ra||B===Kl)throw B;var W=en(29,B,null,p.mode);return W.lanes=C,W.return=p,W}}}var Ht=Br(!0),qr=Br(!1),lt=!1;function Yu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Vu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function it(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ut(e,n,t){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(ne&2)!==0){var l=a.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),a.pending=n,n=$l(e),Sr(e,null,t),n}return Vl(e,a,n,t),$l(e)}function Ka(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194048)!==0)){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,Do(e,t)}}function $u(e,n){var t=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,t===a)){var l=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var u={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};i===null?l=i=u:i=i.next=u,t=t.next}while(t!==null);i===null?l=i=n:i=i.next=n}else l=i=n;t={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}var Xu=!1;function Pa(){if(Xu){var e=oa;if(e!==null)throw e}}function Fa(e,n,t,a){Xu=!1;var l=e.updateQueue;lt=!1;var i=l.firstBaseUpdate,u=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var r=s,m=r.next;r.next=null,u===null?i=m:u.next=m,u=r;var b=e.alternate;b!==null&&(b=b.updateQueue,s=b.lastBaseUpdate,s!==u&&(s===null?b.firstBaseUpdate=m:s.next=m,b.lastBaseUpdate=r))}if(i!==null){var E=l.baseState;u=0,b=m=r=null,s=i;do{var g=s.lane&-536870913,y=g!==s.lane;if(y?(K&g)===g:(a&g)===g){g!==0&&g===sa&&(Xu=!0),b!==null&&(b=b.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{var U=e,H=s;g=n;var oe=t;switch(H.tag){case 1:if(U=H.payload,typeof U=="function"){E=U.call(oe,E,g);break e}E=U;break e;case 3:U.flags=U.flags&-65537|128;case 0:if(U=H.payload,g=typeof U=="function"?U.call(oe,E,g):U,g==null)break e;E=L({},E,g);break e;case 2:lt=!0}}g=s.callback,g!==null&&(e.flags|=64,y&&(e.flags|=8192),y=l.callbacks,y===null?l.callbacks=[g]:y.push(g))}else y={lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},b===null?(m=b=y,r=E):b=b.next=y,u|=g;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;y=s,s=y.next,y.next=null,l.lastBaseUpdate=y,l.shared.pending=null}}while(!0);b===null&&(r=E),l.baseState=r,l.firstBaseUpdate=m,l.lastBaseUpdate=b,i===null&&(l.shared.lanes=0),ft|=u,e.lanes=u,e.memoizedState=E}}function Hr(e,n){if(typeof e!="function")throw Error(o(191,e));e.call(n)}function Lr(e,n){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)Hr(t[e],n)}var fa=f(null),Wl=f(0);function Qr(e,n){e=In,_(Wl,e),_(fa,n),In=e|n.baseLanes}function Zu(){_(Wl,In),_(fa,fa.current)}function wu(){In=Wl.current,x(fa),x(Wl)}var nn=f(null),gn=null;function st(e){var n=e.alternate;_(ye,ye.current&1),_(nn,e),gn===null&&(n===null||fa.current!==null||n.memoizedState!==null)&&(gn=e)}function Iu(e){_(ye,ye.current),_(nn,e),gn===null&&(gn=e)}function Gr(e){e.tag===22?(_(ye,ye.current),_(nn,e),gn===null&&(gn=e)):ot()}function ot(){_(ye,ye.current),_(nn,nn.current)}function tn(e){x(nn),gn===e&&(gn=null),x(ye)}var ye=f(0);function ei(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||Ws(t)||eo(t)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Qn=0,$=null,ue=null,Ae=null,ni=!1,pa=!1,Lt=!1,ti=0,ka=0,da=null,um=0;function ve(){throw Error(o(321))}function Ju(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!We(e[t],n[t]))return!1;return!0}function Ku(e,n,t,a,l,i){return Qn=i,$=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,A.H=e===null||e.memoizedState===null?Ec:cs,Lt=!1,i=t(a,l),Lt=!1,pa&&(i=Vr(n,t,a,l)),Yr(e),i}function Yr(e){A.H=nl;var n=ue!==null&&ue.next!==null;if(Qn=0,Ae=ue=$=null,ni=!1,ka=0,da=null,n)throw Error(o(300));e===null||Ce||(e=e.dependencies,e!==null&&wl(e)&&(Ce=!0))}function Vr(e,n,t,a){$=e;var l=0;do{if(pa&&(da=null),ka=0,pa=!1,25<=l)throw Error(o(301));if(l+=1,Ae=ue=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}A.H=xc,i=n(t,a)}while(pa);return i}function sm(){var e=A.H,n=e.useState()[0];return n=typeof n.then=="function"?Wa(n):n,e=e.useState()[0],(ue!==null?ue.memoizedState:null)!==e&&($.flags|=1024),n}function Pu(){var e=ti!==0;return ti=0,e}function Fu(e,n,t){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~t}function ku(e){if(ni){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}ni=!1}Qn=0,Ae=ue=$=null,pa=!1,ka=ti=0,da=null}function qe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ae===null?$.memoizedState=Ae=e:Ae=Ae.next=e,Ae}function Se(){if(ue===null){var e=$.alternate;e=e!==null?e.memoizedState:null}else e=ue.next;var n=Ae===null?$.memoizedState:Ae.next;if(n!==null)Ae=n,ue=e;else{if(e===null)throw $.alternate===null?Error(o(467)):Error(o(310));ue=e,e={memoizedState:ue.memoizedState,baseState:ue.baseState,baseQueue:ue.baseQueue,queue:ue.queue,next:null},Ae===null?$.memoizedState=Ae=e:Ae=Ae.next=e}return Ae}function ai(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Wa(e){var n=ka;return ka+=1,da===null&&(da=[]),e=jr(da,e,n),n=$,(Ae===null?n.memoizedState:Ae.next)===null&&(n=n.alternate,A.H=n===null||n.memoizedState===null?Ec:cs),e}function li(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Wa(e);if(e.$$typeof===je)return Re(e)}throw Error(o(438,String(e)))}function Wu(e){var n=null,t=$.updateQueue;if(t!==null&&(n=t.memoCache),n==null){var a=$.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(n={data:a.data.map(function(l){return l.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),t===null&&(t=ai(),$.updateQueue=t),t.memoCache=n,t=n.data[n.index],t===void 0)for(t=n.data[n.index]=Array(e),a=0;a<e;a++)t[a]=Vt;return n.index++,t}function Gn(e,n){return typeof n=="function"?n(e):n}function ii(e){var n=Se();return es(n,ue,e)}function es(e,n,t){var a=e.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=t;var l=e.baseQueue,i=a.pending;if(i!==null){if(l!==null){var u=l.next;l.next=i.next,i.next=u}n.baseQueue=l=i,a.pending=null}if(i=e.baseState,l===null)e.memoizedState=i;else{n=l.next;var s=u=null,r=null,m=n,b=!1;do{var E=m.lane&-536870913;if(E!==m.lane?(K&E)===E:(Qn&E)===E){var g=m.revertLane;if(g===0)r!==null&&(r=r.next={lane:0,revertLane:0,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null}),E===sa&&(b=!0);else if((Qn&g)===g){m=m.next,g===sa&&(b=!0);continue}else E={lane:0,revertLane:m.revertLane,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},r===null?(s=r=E,u=i):r=r.next=E,$.lanes|=g,ft|=g;E=m.action,Lt&&t(i,E),i=m.hasEagerState?m.eagerState:t(i,E)}else g={lane:E,revertLane:m.revertLane,gesture:m.gesture,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},r===null?(s=r=g,u=i):r=r.next=g,$.lanes|=E,ft|=E;m=m.next}while(m!==null&&m!==n);if(r===null?u=i:r.next=s,!We(i,e.memoizedState)&&(Ce=!0,b&&(t=oa,t!==null)))throw t;e.memoizedState=i,e.baseState=u,e.baseQueue=r,a.lastRenderedState=i}return l===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function ns(e){var n=Se(),t=n.queue;if(t===null)throw Error(o(311));t.lastRenderedReducer=e;var a=t.dispatch,l=t.pending,i=n.memoizedState;if(l!==null){t.pending=null;var u=l=l.next;do i=e(i,u.action),u=u.next;while(u!==l);We(i,n.memoizedState)||(Ce=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,a]}function $r(e,n,t){var a=$,l=Se(),i=k;if(i){if(t===void 0)throw Error(o(407));t=t()}else t=n();var u=!We((ue||l).memoizedState,t);if(u&&(l.memoizedState=t,Ce=!0),l=l.queue,ls(wr.bind(null,a,l,e),[e]),l.getSnapshot!==n||u||Ae!==null&&Ae.memoizedState.tag&1){if(a.flags|=2048,ma(9,{destroy:void 0},Zr.bind(null,a,l,t,n),null),ce===null)throw Error(o(349));i||(Qn&127)!==0||Xr(a,n,t)}return t}function Xr(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=$.updateQueue,n===null?(n=ai(),$.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Zr(e,n,t,a){n.value=t,n.getSnapshot=a,Ir(n)&&Jr(e)}function wr(e,n,t){return t(function(){Ir(n)&&Jr(e)})}function Ir(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!We(e,t)}catch{return!0}}function Jr(e){var n=Rt(e,2);n!==null&&Ie(n,e,2)}function ts(e){var n=qe();if(typeof e=="function"){var t=e;if(e=t(),Lt){Fn(!0);try{t()}finally{Fn(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gn,lastRenderedState:e},n}function Kr(e,n,t,a){return e.baseState=t,es(e,ue,typeof a=="function"?a:Gn)}function om(e,n,t,a,l){if(oi(e))throw Error(o(485));if(e=n.action,e!==null){var i={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};A.T!==null?t(!0):i.isTransition=!1,a(i),t=n.pending,t===null?(i.next=n.pending=i,Pr(n,i)):(i.next=t.next,n.pending=t.next=i)}}function Pr(e,n){var t=n.action,a=n.payload,l=e.state;if(n.isTransition){var i=A.T,u={};A.T=u;try{var s=t(l,a),r=A.S;r!==null&&r(u,s),Fr(e,n,s)}catch(m){as(e,n,m)}finally{i!==null&&u.types!==null&&(i.types=u.types),A.T=i}}else try{i=t(l,a),Fr(e,n,i)}catch(m){as(e,n,m)}}function Fr(e,n,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(a){kr(e,n,a)},function(a){return as(e,n,a)}):kr(e,n,t)}function kr(e,n,t){n.status="fulfilled",n.value=t,Wr(n),e.state=t,n=e.pending,n!==null&&(t=n.next,t===n?e.pending=null:(t=t.next,n.next=t,Pr(e,t)))}function as(e,n,t){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do n.status="rejected",n.reason=t,Wr(n),n=n.next;while(n!==a)}e.action=null}function Wr(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function ec(e,n){return n}function nc(e,n){if(k){var t=ce.formState;if(t!==null){e:{var a=$;if(k){if(fe){n:{for(var l=fe,i=vn;l.nodeType!==8;){if(!i){l=null;break n}if(l=hn(l.nextSibling),l===null){l=null;break n}}i=l.data,l=i==="F!"||i==="F"?l:null}if(l){fe=hn(l.nextSibling),a=l.data==="F!";break e}}tt(a)}a=!1}a&&(n=t[0])}}return t=qe(),t.memoizedState=t.baseState=n,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ec,lastRenderedState:n},t.queue=a,t=bc.bind(null,$,a),a.dispatch=t,a=ts(!1),i=rs.bind(null,$,!1,a.queue),a=qe(),l={state:n,dispatch:null,action:e,pending:null},a.queue=l,t=om.bind(null,$,l,i,t),l.dispatch=t,a.memoizedState=e,[n,t,!1]}function tc(e){var n=Se();return ac(n,ue,e)}function ac(e,n,t){if(n=es(e,n,ec)[0],e=ii(Gn)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var a=Wa(n)}catch(u){throw u===ra?Kl:u}else a=n;n=Se();var l=n.queue,i=l.dispatch;return t!==n.memoizedState&&($.flags|=2048,ma(9,{destroy:void 0},rm.bind(null,l,t),null)),[a,i,e]}function rm(e,n){e.action=n}function lc(e){var n=Se(),t=ue;if(t!==null)return ac(n,t,e);Se(),n=n.memoizedState,t=Se();var a=t.queue.dispatch;return t.memoizedState=e,[n,a,!1]}function ma(e,n,t,a){return e={tag:e,create:t,deps:a,inst:n,next:null},n=$.updateQueue,n===null&&(n=ai(),$.updateQueue=n),t=n.lastEffect,t===null?n.lastEffect=e.next=e:(a=t.next,t.next=e,e.next=a,n.lastEffect=e),e}function ic(){return Se().memoizedState}function ui(e,n,t,a){var l=qe();$.flags|=e,l.memoizedState=ma(1|n,{destroy:void 0},t,a===void 0?null:a)}function si(e,n,t,a){var l=Se();a=a===void 0?null:a;var i=l.memoizedState.inst;ue!==null&&a!==null&&Ju(a,ue.memoizedState.deps)?l.memoizedState=ma(n,i,t,a):($.flags|=e,l.memoizedState=ma(1|n,i,t,a))}function uc(e,n){ui(8390656,8,e,n)}function ls(e,n){si(2048,8,e,n)}function cm(e){$.flags|=4;var n=$.updateQueue;if(n===null)n=ai(),$.updateQueue=n,n.events=[e];else{var t=n.events;t===null?n.events=[e]:t.push(e)}}function sc(e){var n=Se().memoizedState;return cm({ref:n,nextImpl:e}),function(){if((ne&2)!==0)throw Error(o(440));return n.impl.apply(void 0,arguments)}}function oc(e,n){return si(4,2,e,n)}function rc(e,n){return si(4,4,e,n)}function cc(e,n){if(typeof n=="function"){e=e();var t=n(e);return function(){typeof t=="function"?t():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function fc(e,n,t){t=t!=null?t.concat([e]):null,si(4,4,cc.bind(null,n,e),t)}function is(){}function pc(e,n){var t=Se();n=n===void 0?null:n;var a=t.memoizedState;return n!==null&&Ju(n,a[1])?a[0]:(t.memoizedState=[e,n],e)}function dc(e,n){var t=Se();n=n===void 0?null:n;var a=t.memoizedState;if(n!==null&&Ju(n,a[1]))return a[0];if(a=e(),Lt){Fn(!0);try{e()}finally{Fn(!1)}}return t.memoizedState=[a,n],a}function us(e,n,t){return t===void 0||(Qn&1073741824)!==0&&(K&261930)===0?e.memoizedState=n:(e.memoizedState=t,e=vf(),$.lanes|=e,ft|=e,t)}function mc(e,n,t,a){return We(t,n)?t:fa.current!==null?(e=us(e,t,a),We(e,n)||(Ce=!0),e):(Qn&42)===0||(Qn&1073741824)!==0&&(K&261930)===0?(Ce=!0,e.memoizedState=t):(e=vf(),$.lanes|=e,ft|=e,n)}function vc(e,n,t,a,l){var i=R.p;R.p=i!==0&&8>i?i:8;var u=A.T,s={};A.T=s,rs(e,!1,n,t);try{var r=l(),m=A.S;if(m!==null&&m(s,r),r!==null&&typeof r=="object"&&typeof r.then=="function"){var b=im(r,a);el(e,n,b,un(e))}else el(e,n,a,un(e))}catch(E){el(e,n,{then:function(){},status:"rejected",reason:E},un())}finally{R.p=i,u!==null&&s.types!==null&&(u.types=s.types),A.T=u}}function fm(){}function ss(e,n,t,a){if(e.tag!==5)throw Error(o(476));var l=gc(e).queue;vc(e,l,n,Q,t===null?fm:function(){return hc(e),t(a)})}function gc(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Q,baseState:Q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gn,lastRenderedState:Q},next:null};var t={};return n.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gn,lastRenderedState:t},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function hc(e){var n=gc(e);n.next===null&&(n=e.alternate.memoizedState),el(e,n.next.queue,{},un())}function os(){return Re(hl)}function yc(){return Se().memoizedState}function Sc(){return Se().memoizedState}function pm(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var t=un();e=it(t);var a=ut(n,e,t);a!==null&&(Ie(a,n,t),Ka(a,n,t)),n={cache:Hu()},e.payload=n;return}n=n.return}}function dm(e,n,t){var a=un();t={lane:a,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},oi(e)?Ac(n,t):(t=Nu(e,n,t,a),t!==null&&(Ie(t,e,a),Cc(t,n,a)))}function bc(e,n,t){var a=un();el(e,n,t,a)}function el(e,n,t,a){var l={lane:a,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(oi(e))Ac(n,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var u=n.lastRenderedState,s=i(u,t);if(l.hasEagerState=!0,l.eagerState=s,We(s,u))return Vl(e,n,l,0),ce===null&&Yl(),!1}catch{}if(t=Nu(e,n,l,a),t!==null)return Ie(t,e,a),Cc(t,n,a),!0}return!1}function rs(e,n,t,a){if(a={lane:2,revertLane:Ys(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},oi(e)){if(n)throw Error(o(479))}else n=Nu(e,t,a,2),n!==null&&Ie(n,e,2)}function oi(e){var n=e.alternate;return e===$||n!==null&&n===$}function Ac(e,n){pa=ni=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Cc(e,n,t){if((t&4194048)!==0){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,Do(e,t)}}var nl={readContext:Re,use:li,useCallback:ve,useContext:ve,useEffect:ve,useImperativeHandle:ve,useLayoutEffect:ve,useInsertionEffect:ve,useMemo:ve,useReducer:ve,useRef:ve,useState:ve,useDebugValue:ve,useDeferredValue:ve,useTransition:ve,useSyncExternalStore:ve,useId:ve,useHostTransitionStatus:ve,useFormState:ve,useActionState:ve,useOptimistic:ve,useMemoCache:ve,useCacheRefresh:ve};nl.useEffectEvent=ve;var Ec={readContext:Re,use:li,useCallback:function(e,n){return qe().memoizedState=[e,n===void 0?null:n],e},useContext:Re,useEffect:uc,useImperativeHandle:function(e,n,t){t=t!=null?t.concat([e]):null,ui(4194308,4,cc.bind(null,n,e),t)},useLayoutEffect:function(e,n){return ui(4194308,4,e,n)},useInsertionEffect:function(e,n){ui(4,2,e,n)},useMemo:function(e,n){var t=qe();n=n===void 0?null:n;var a=e();if(Lt){Fn(!0);try{e()}finally{Fn(!1)}}return t.memoizedState=[a,n],a},useReducer:function(e,n,t){var a=qe();if(t!==void 0){var l=t(n);if(Lt){Fn(!0);try{t(n)}finally{Fn(!1)}}}else l=n;return a.memoizedState=a.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},a.queue=e,e=e.dispatch=dm.bind(null,$,e),[a.memoizedState,e]},useRef:function(e){var n=qe();return e={current:e},n.memoizedState=e},useState:function(e){e=ts(e);var n=e.queue,t=bc.bind(null,$,n);return n.dispatch=t,[e.memoizedState,t]},useDebugValue:is,useDeferredValue:function(e,n){var t=qe();return us(t,e,n)},useTransition:function(){var e=ts(!1);return e=vc.bind(null,$,e.queue,!0,!1),qe().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,t){var a=$,l=qe();if(k){if(t===void 0)throw Error(o(407));t=t()}else{if(t=n(),ce===null)throw Error(o(349));(K&127)!==0||Xr(a,n,t)}l.memoizedState=t;var i={value:t,getSnapshot:n};return l.queue=i,uc(wr.bind(null,a,i,e),[e]),a.flags|=2048,ma(9,{destroy:void 0},Zr.bind(null,a,i,t,n),null),t},useId:function(){var e=qe(),n=ce.identifierPrefix;if(k){var t=Dn,a=Nn;t=(a&~(1<<32-ke(a)-1)).toString(32)+t,n="_"+n+"R_"+t,t=ti++,0<t&&(n+="H"+t.toString(32)),n+="_"}else t=um++,n="_"+n+"r_"+t.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:os,useFormState:nc,useActionState:nc,useOptimistic:function(e){var n=qe();n.memoizedState=n.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=t,n=rs.bind(null,$,!0,t),t.dispatch=n,[e,n]},useMemoCache:Wu,useCacheRefresh:function(){return qe().memoizedState=pm.bind(null,$)},useEffectEvent:function(e){var n=qe(),t={impl:e};return n.memoizedState=t,function(){if((ne&2)!==0)throw Error(o(440));return t.impl.apply(void 0,arguments)}}},cs={readContext:Re,use:li,useCallback:pc,useContext:Re,useEffect:ls,useImperativeHandle:fc,useInsertionEffect:oc,useLayoutEffect:rc,useMemo:dc,useReducer:ii,useRef:ic,useState:function(){return ii(Gn)},useDebugValue:is,useDeferredValue:function(e,n){var t=Se();return mc(t,ue.memoizedState,e,n)},useTransition:function(){var e=ii(Gn)[0],n=Se().memoizedState;return[typeof e=="boolean"?e:Wa(e),n]},useSyncExternalStore:$r,useId:yc,useHostTransitionStatus:os,useFormState:tc,useActionState:tc,useOptimistic:function(e,n){var t=Se();return Kr(t,ue,e,n)},useMemoCache:Wu,useCacheRefresh:Sc};cs.useEffectEvent=sc;var xc={readContext:Re,use:li,useCallback:pc,useContext:Re,useEffect:ls,useImperativeHandle:fc,useInsertionEffect:oc,useLayoutEffect:rc,useMemo:dc,useReducer:ns,useRef:ic,useState:function(){return ns(Gn)},useDebugValue:is,useDeferredValue:function(e,n){var t=Se();return ue===null?us(t,e,n):mc(t,ue.memoizedState,e,n)},useTransition:function(){var e=ns(Gn)[0],n=Se().memoizedState;return[typeof e=="boolean"?e:Wa(e),n]},useSyncExternalStore:$r,useId:yc,useHostTransitionStatus:os,useFormState:lc,useActionState:lc,useOptimistic:function(e,n){var t=Se();return ue!==null?Kr(t,ue,e,n):(t.baseState=e,[e,t.queue.dispatch])},useMemoCache:Wu,useCacheRefresh:Sc};xc.useEffectEvent=sc;function fs(e,n,t,a){n=e.memoizedState,t=t(a,n),t=t==null?n:L({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var ps={enqueueSetState:function(e,n,t){e=e._reactInternals;var a=un(),l=it(a);l.payload=n,t!=null&&(l.callback=t),n=ut(e,l,a),n!==null&&(Ie(n,e,a),Ka(n,e,a))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var a=un(),l=it(a);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=ut(e,l,a),n!==null&&(Ie(n,e,a),Ka(n,e,a))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=un(),a=it(t);a.tag=2,n!=null&&(a.callback=n),n=ut(e,a,t),n!==null&&(Ie(n,e,t),Ka(n,e,t))}};function Tc(e,n,t,a,l,i,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,u):n.prototype&&n.prototype.isPureReactComponent?!Ya(t,a)||!Ya(l,i):!0}function Nc(e,n,t,a){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,a),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,a),n.state!==e&&ps.enqueueReplaceState(n,n.state,null)}function Qt(e,n){var t=n;if("ref"in n){t={};for(var a in n)a!=="ref"&&(t[a]=n[a])}if(e=e.defaultProps){t===n&&(t=L({},t));for(var l in e)t[l]===void 0&&(t[l]=e[l])}return t}function Dc(e){Gl(e)}function Mc(e){console.error(e)}function Rc(e){Gl(e)}function ri(e,n){try{var t=e.onUncaughtError;t(n.value,{componentStack:n.stack})}catch(a){setTimeout(function(){throw a})}}function _c(e,n,t){try{var a=e.onCaughtError;a(t.value,{componentStack:t.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function ds(e,n,t){return t=it(t),t.tag=3,t.payload={element:null},t.callback=function(){ri(e,n)},t}function Oc(e){return e=it(e),e.tag=3,e}function jc(e,n,t,a){var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var i=a.value;e.payload=function(){return l(i)},e.callback=function(){_c(n,t,a)}}var u=t.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(e.callback=function(){_c(n,t,a),typeof l!="function"&&(pt===null?pt=new Set([this]):pt.add(this));var s=a.stack;this.componentDidCatch(a.value,{componentStack:s!==null?s:""})})}function mm(e,n,t,a,l){if(t.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(n=t.alternate,n!==null&&ua(n,t,l,!0),t=nn.current,t!==null){switch(t.tag){case 31:case 13:return gn===null?Ai():t.alternate===null&&ge===0&&(ge=3),t.flags&=-257,t.flags|=65536,t.lanes=l,a===Pl?t.flags|=16384:(n=t.updateQueue,n===null?t.updateQueue=new Set([a]):n.add(a),Ls(e,a,l)),!1;case 22:return t.flags|=65536,a===Pl?t.flags|=16384:(n=t.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([a])},t.updateQueue=n):(t=n.retryQueue,t===null?n.retryQueue=new Set([a]):t.add(a)),Ls(e,a,l)),!1}throw Error(o(435,t.tag))}return Ls(e,a,l),Ai(),!1}if(k)return n=nn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=l,a!==ju&&(e=Error(o(422),{cause:a}),Xa(pn(e,t)))):(a!==ju&&(n=Error(o(423),{cause:a}),Xa(pn(n,t))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,a=pn(a,t),l=ds(e.stateNode,a,l),$u(e,l),ge!==4&&(ge=2)),!1;var i=Error(o(520),{cause:a});if(i=pn(i,t),rl===null?rl=[i]:rl.push(i),ge!==4&&(ge=2),n===null)return!0;a=pn(a,t),t=n;do{switch(t.tag){case 3:return t.flags|=65536,e=l&-l,t.lanes|=e,e=ds(t.stateNode,a,e),$u(t,e),!1;case 1:if(n=t.type,i=t.stateNode,(t.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(pt===null||!pt.has(i))))return t.flags|=65536,l&=-l,t.lanes|=l,l=Oc(l),jc(l,e,t,a),$u(t,l),!1}t=t.return}while(t!==null);return!1}var ms=Error(o(461)),Ce=!1;function _e(e,n,t,a){n.child=e===null?qr(n,null,t,a):Ht(n,e.child,t,a)}function Uc(e,n,t,a,l){t=t.render;var i=n.ref;if("ref"in a){var u={};for(var s in a)s!=="ref"&&(u[s]=a[s])}else u=a;return Ut(n),a=Ku(e,n,t,u,i,l),s=Pu(),e!==null&&!Ce?(Fu(e,n,l),Yn(e,n,l)):(k&&s&&_u(n),n.flags|=1,_e(e,n,a,l),n.child)}function zc(e,n,t,a,l){if(e===null){var i=t.type;return typeof i=="function"&&!Du(i)&&i.defaultProps===void 0&&t.compare===null?(n.tag=15,n.type=i,Bc(e,n,i,a,l)):(e=Xl(t.type,null,a,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!Cs(e,l)){var u=i.memoizedProps;if(t=t.compare,t=t!==null?t:Ya,t(u,a)&&e.ref===n.ref)return Yn(e,n,l)}return n.flags|=1,e=Bn(i,a),e.ref=n.ref,e.return=n,n.child=e}function Bc(e,n,t,a,l){if(e!==null){var i=e.memoizedProps;if(Ya(i,a)&&e.ref===n.ref)if(Ce=!1,n.pendingProps=a=i,Cs(e,l))(e.flags&131072)!==0&&(Ce=!0);else return n.lanes=e.lanes,Yn(e,n,l)}return vs(e,n,t,a,l)}function qc(e,n,t,a){var l=a.children,i=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((n.flags&128)!==0){if(i=i!==null?i.baseLanes|t:t,e!==null){for(a=n.child=e.child,l=0;a!==null;)l=l|a.lanes|a.childLanes,a=a.sibling;a=l&~i}else a=0,n.child=null;return Hc(e,n,i,t,a)}if((t&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Jl(n,i!==null?i.cachePool:null),i!==null?Qr(n,i):Zu(),Gr(n);else return a=n.lanes=536870912,Hc(e,n,i!==null?i.baseLanes|t:t,t,a)}else i!==null?(Jl(n,i.cachePool),Qr(n,i),ot(),n.memoizedState=null):(e!==null&&Jl(n,null),Zu(),ot());return _e(e,n,l,t),n.child}function tl(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Hc(e,n,t,a,l){var i=Qu();return i=i===null?null:{parent:be._currentValue,pool:i},n.memoizedState={baseLanes:t,cachePool:i},e!==null&&Jl(n,null),Zu(),Gr(n),e!==null&&ua(e,n,a,!0),n.childLanes=l,null}function ci(e,n){return n=pi({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Lc(e,n,t){return Ht(n,e.child,null,t),e=ci(n,n.pendingProps),e.flags|=2,tn(n),n.memoizedState=null,e}function vm(e,n,t){var a=n.pendingProps,l=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(k){if(a.mode==="hidden")return e=ci(n,a),n.lanes=536870912,tl(null,e);if(Iu(n),(e=fe)?(e=Ff(e,vn),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:et!==null?{id:Nn,overflow:Dn}:null,retryLane:536870912,hydrationErrors:null},t=Ar(e),t.return=n,n.child=t,Me=n,fe=null)):e=null,e===null)throw tt(n);return n.lanes=536870912,null}return ci(n,a)}var i=e.memoizedState;if(i!==null){var u=i.dehydrated;if(Iu(n),l)if(n.flags&256)n.flags&=-257,n=Lc(e,n,t);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(o(558));else if(Ce||ua(e,n,t,!1),l=(t&e.childLanes)!==0,Ce||l){if(a=ce,a!==null&&(u=Mo(a,t),u!==0&&u!==i.retryLane))throw i.retryLane=u,Rt(e,u),Ie(a,e,u),ms;Ai(),n=Lc(e,n,t)}else e=i.treeContext,fe=hn(u.nextSibling),Me=n,k=!0,nt=null,vn=!1,e!==null&&xr(n,e),n=ci(n,a),n.flags|=4096;return n}return e=Bn(e.child,{mode:a.mode,children:a.children}),e.ref=n.ref,n.child=e,e.return=n,e}function fi(e,n){var t=n.ref;if(t===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(o(284));(e===null||e.ref!==t)&&(n.flags|=4194816)}}function vs(e,n,t,a,l){return Ut(n),t=Ku(e,n,t,a,void 0,l),a=Pu(),e!==null&&!Ce?(Fu(e,n,l),Yn(e,n,l)):(k&&a&&_u(n),n.flags|=1,_e(e,n,t,l),n.child)}function Qc(e,n,t,a,l,i){return Ut(n),n.updateQueue=null,t=Vr(n,a,t,l),Yr(e),a=Pu(),e!==null&&!Ce?(Fu(e,n,i),Yn(e,n,i)):(k&&a&&_u(n),n.flags|=1,_e(e,n,t,i),n.child)}function Gc(e,n,t,a,l){if(Ut(n),n.stateNode===null){var i=ta,u=t.contextType;typeof u=="object"&&u!==null&&(i=Re(u)),i=new t(a,i),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ps,n.stateNode=i,i._reactInternals=n,i=n.stateNode,i.props=a,i.state=n.memoizedState,i.refs={},Yu(n),u=t.contextType,i.context=typeof u=="object"&&u!==null?Re(u):ta,i.state=n.memoizedState,u=t.getDerivedStateFromProps,typeof u=="function"&&(fs(n,t,u,a),i.state=n.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&ps.enqueueReplaceState(i,i.state,null),Fa(n,a,i,l),Pa(),i.state=n.memoizedState),typeof i.componentDidMount=="function"&&(n.flags|=4194308),a=!0}else if(e===null){i=n.stateNode;var s=n.memoizedProps,r=Qt(t,s);i.props=r;var m=i.context,b=t.contextType;u=ta,typeof b=="object"&&b!==null&&(u=Re(b));var E=t.getDerivedStateFromProps;b=typeof E=="function"||typeof i.getSnapshotBeforeUpdate=="function",s=n.pendingProps!==s,b||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s||m!==u)&&Nc(n,i,a,u),lt=!1;var g=n.memoizedState;i.state=g,Fa(n,a,i,l),Pa(),m=n.memoizedState,s||g!==m||lt?(typeof E=="function"&&(fs(n,t,E,a),m=n.memoizedState),(r=lt||Tc(n,t,r,a,g,m,u))?(b||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(n.flags|=4194308)):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=a,n.memoizedState=m),i.props=a,i.state=m,i.context=u,a=r):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),a=!1)}else{i=n.stateNode,Vu(e,n),u=n.memoizedProps,b=Qt(t,u),i.props=b,E=n.pendingProps,g=i.context,m=t.contextType,r=ta,typeof m=="object"&&m!==null&&(r=Re(m)),s=t.getDerivedStateFromProps,(m=typeof s=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==E||g!==r)&&Nc(n,i,a,r),lt=!1,g=n.memoizedState,i.state=g,Fa(n,a,i,l),Pa();var y=n.memoizedState;u!==E||g!==y||lt||e!==null&&e.dependencies!==null&&wl(e.dependencies)?(typeof s=="function"&&(fs(n,t,s,a),y=n.memoizedState),(b=lt||Tc(n,t,b,a,g,y,r)||e!==null&&e.dependencies!==null&&wl(e.dependencies))?(m||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,y,r),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,y,r)),typeof i.componentDidUpdate=="function"&&(n.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&g===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&g===e.memoizedState||(n.flags|=1024),n.memoizedProps=a,n.memoizedState=y),i.props=a,i.state=y,i.context=r,a=b):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&g===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&g===e.memoizedState||(n.flags|=1024),a=!1)}return i=a,fi(e,n),a=(n.flags&128)!==0,i||a?(i=n.stateNode,t=a&&typeof t.getDerivedStateFromError!="function"?null:i.render(),n.flags|=1,e!==null&&a?(n.child=Ht(n,e.child,null,l),n.child=Ht(n,null,t,l)):_e(e,n,t,l),n.memoizedState=i.state,e=n.child):e=Yn(e,n,l),e}function Yc(e,n,t,a){return Ot(),n.flags|=256,_e(e,n,t,a),n.child}var gs={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function hs(e){return{baseLanes:e,cachePool:_r()}}function ys(e,n,t){return e=e!==null?e.childLanes&~t:0,n&&(e|=ln),e}function Vc(e,n,t){var a=n.pendingProps,l=!1,i=(n.flags&128)!==0,u;if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(ye.current&2)!==0),u&&(l=!0,n.flags&=-129),u=(n.flags&32)!==0,n.flags&=-33,e===null){if(k){if(l?st(n):ot(),(e=fe)?(e=Ff(e,vn),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:et!==null?{id:Nn,overflow:Dn}:null,retryLane:536870912,hydrationErrors:null},t=Ar(e),t.return=n,n.child=t,Me=n,fe=null)):e=null,e===null)throw tt(n);return eo(e)?n.lanes=32:n.lanes=536870912,null}var s=a.children;return a=a.fallback,l?(ot(),l=n.mode,s=pi({mode:"hidden",children:s},l),a=_t(a,l,t,null),s.return=n,a.return=n,s.sibling=a,n.child=s,a=n.child,a.memoizedState=hs(t),a.childLanes=ys(e,u,t),n.memoizedState=gs,tl(null,a)):(st(n),Ss(n,s))}var r=e.memoizedState;if(r!==null&&(s=r.dehydrated,s!==null)){if(i)n.flags&256?(st(n),n.flags&=-257,n=bs(e,n,t)):n.memoizedState!==null?(ot(),n.child=e.child,n.flags|=128,n=null):(ot(),s=a.fallback,l=n.mode,a=pi({mode:"visible",children:a.children},l),s=_t(s,l,t,null),s.flags|=2,a.return=n,s.return=n,a.sibling=s,n.child=a,Ht(n,e.child,null,t),a=n.child,a.memoizedState=hs(t),a.childLanes=ys(e,u,t),n.memoizedState=gs,n=tl(null,a));else if(st(n),eo(s)){if(u=s.nextSibling&&s.nextSibling.dataset,u)var m=u.dgst;u=m,a=Error(o(419)),a.stack="",a.digest=u,Xa({value:a,source:null,stack:null}),n=bs(e,n,t)}else if(Ce||ua(e,n,t,!1),u=(t&e.childLanes)!==0,Ce||u){if(u=ce,u!==null&&(a=Mo(u,t),a!==0&&a!==r.retryLane))throw r.retryLane=a,Rt(e,a),Ie(u,e,a),ms;Ws(s)||Ai(),n=bs(e,n,t)}else Ws(s)?(n.flags|=192,n.child=e.child,n=null):(e=r.treeContext,fe=hn(s.nextSibling),Me=n,k=!0,nt=null,vn=!1,e!==null&&xr(n,e),n=Ss(n,a.children),n.flags|=4096);return n}return l?(ot(),s=a.fallback,l=n.mode,r=e.child,m=r.sibling,a=Bn(r,{mode:"hidden",children:a.children}),a.subtreeFlags=r.subtreeFlags&65011712,m!==null?s=Bn(m,s):(s=_t(s,l,t,null),s.flags|=2),s.return=n,a.return=n,a.sibling=s,n.child=a,tl(null,a),a=n.child,s=e.child.memoizedState,s===null?s=hs(t):(l=s.cachePool,l!==null?(r=be._currentValue,l=l.parent!==r?{parent:r,pool:r}:l):l=_r(),s={baseLanes:s.baseLanes|t,cachePool:l}),a.memoizedState=s,a.childLanes=ys(e,u,t),n.memoizedState=gs,tl(e.child,a)):(st(n),t=e.child,e=t.sibling,t=Bn(t,{mode:"visible",children:a.children}),t.return=n,t.sibling=null,e!==null&&(u=n.deletions,u===null?(n.deletions=[e],n.flags|=16):u.push(e)),n.child=t,n.memoizedState=null,t)}function Ss(e,n){return n=pi({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function pi(e,n){return e=en(22,e,null,n),e.lanes=0,e}function bs(e,n,t){return Ht(n,e.child,null,t),e=Ss(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function $c(e,n,t){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n),Bu(e.return,n,t)}function As(e,n,t,a,l,i){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:a,tail:t,tailMode:l,treeForkCount:i}:(u.isBackwards=n,u.rendering=null,u.renderingStartTime=0,u.last=a,u.tail=t,u.tailMode=l,u.treeForkCount=i)}function Xc(e,n,t){var a=n.pendingProps,l=a.revealOrder,i=a.tail;a=a.children;var u=ye.current,s=(u&2)!==0;if(s?(u=u&1|2,n.flags|=128):u&=1,_(ye,u),_e(e,n,a,t),a=k?$a:0,!s&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&$c(e,t,n);else if(e.tag===19)$c(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(t=n.child,l=null;t!==null;)e=t.alternate,e!==null&&ei(e)===null&&(l=t),t=t.sibling;t=l,t===null?(l=n.child,n.child=null):(l=t.sibling,t.sibling=null),As(n,!1,l,t,i,a);break;case"backwards":case"unstable_legacy-backwards":for(t=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&ei(e)===null){n.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}As(n,!0,t,null,i,a);break;case"together":As(n,!1,null,null,void 0,a);break;default:n.memoizedState=null}return n.child}function Yn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),ft|=n.lanes,(t&n.childLanes)===0)if(e!==null){if(ua(e,n,t,!1),(t&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(o(153));if(n.child!==null){for(e=n.child,t=Bn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Bn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Cs(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&wl(e)))}function gm(e,n,t){switch(n.tag){case 3:Be(n,n.stateNode.containerInfo),at(n,be,e.memoizedState.cache),Ot();break;case 27:case 5:Ma(n);break;case 4:Be(n,n.stateNode.containerInfo);break;case 10:at(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Iu(n),null;break;case 13:var a=n.memoizedState;if(a!==null)return a.dehydrated!==null?(st(n),n.flags|=128,null):(t&n.child.childLanes)!==0?Vc(e,n,t):(st(n),e=Yn(e,n,t),e!==null?e.sibling:null);st(n);break;case 19:var l=(e.flags&128)!==0;if(a=(t&n.childLanes)!==0,a||(ua(e,n,t,!1),a=(t&n.childLanes)!==0),l){if(a)return Xc(e,n,t);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),_(ye,ye.current),a)break;return null;case 22:return n.lanes=0,qc(e,n,t,n.pendingProps);case 24:at(n,be,e.memoizedState.cache)}return Yn(e,n,t)}function Zc(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps)Ce=!0;else{if(!Cs(e,t)&&(n.flags&128)===0)return Ce=!1,gm(e,n,t);Ce=(e.flags&131072)!==0}else Ce=!1,k&&(n.flags&1048576)!==0&&Er(n,$a,n.index);switch(n.lanes=0,n.tag){case 16:e:{var a=n.pendingProps;if(e=Bt(n.elementType),n.type=e,typeof e=="function")Du(e)?(a=Qt(e,a),n.tag=1,n=Gc(null,n,e,a,t)):(n.tag=0,n=vs(null,n,e,a,t));else{if(e!=null){var l=e.$$typeof;if(l===on){n.tag=11,n=Uc(null,n,e,a,t);break e}else if(l===F){n.tag=14,n=zc(null,n,e,a,t);break e}}throw n=On(e)||e,Error(o(306,n,""))}}return n;case 0:return vs(e,n,n.type,n.pendingProps,t);case 1:return a=n.type,l=Qt(a,n.pendingProps),Gc(e,n,a,l,t);case 3:e:{if(Be(n,n.stateNode.containerInfo),e===null)throw Error(o(387));a=n.pendingProps;var i=n.memoizedState;l=i.element,Vu(e,n),Fa(n,a,null,t);var u=n.memoizedState;if(a=u.cache,at(n,be,a),a!==i.cache&&qu(n,[be],t,!0),Pa(),a=u.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:u.cache},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){n=Yc(e,n,a,t);break e}else if(a!==l){l=pn(Error(o(424)),n),Xa(l),n=Yc(e,n,a,t);break e}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,fe=hn(e.firstChild),Me=n,k=!0,nt=null,vn=!0,t=qr(n,null,a,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Ot(),a===l){n=Yn(e,n,t);break e}_e(e,n,a,t)}n=n.child}return n;case 26:return fi(e,n),e===null?(t=ap(n.type,null,n.pendingProps,null))?n.memoizedState=t:k||(t=n.type,e=n.pendingProps,a=Mi(w.current).createElement(t),a[De]=n,a[Ye]=e,Oe(a,t,e),Te(a),n.stateNode=a):n.memoizedState=ap(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Ma(n),e===null&&k&&(a=n.stateNode=ep(n.type,n.pendingProps,w.current),Me=n,vn=!0,l=fe,gt(n.type)?(no=l,fe=hn(a.firstChild)):fe=l),_e(e,n,n.pendingProps.children,t),fi(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&k&&((l=a=fe)&&(a=wm(a,n.type,n.pendingProps,vn),a!==null?(n.stateNode=a,Me=n,fe=hn(a.firstChild),vn=!1,l=!0):l=!1),l||tt(n)),Ma(n),l=n.type,i=n.pendingProps,u=e!==null?e.memoizedProps:null,a=i.children,Ps(l,i)?a=null:u!==null&&Ps(l,u)&&(n.flags|=32),n.memoizedState!==null&&(l=Ku(e,n,sm,null,null,t),hl._currentValue=l),fi(e,n),_e(e,n,a,t),n.child;case 6:return e===null&&k&&((e=t=fe)&&(t=Im(t,n.pendingProps,vn),t!==null?(n.stateNode=t,Me=n,fe=null,e=!0):e=!1),e||tt(n)),null;case 13:return Vc(e,n,t);case 4:return Be(n,n.stateNode.containerInfo),a=n.pendingProps,e===null?n.child=Ht(n,null,a,t):_e(e,n,a,t),n.child;case 11:return Uc(e,n,n.type,n.pendingProps,t);case 7:return _e(e,n,n.pendingProps,t),n.child;case 8:return _e(e,n,n.pendingProps.children,t),n.child;case 12:return _e(e,n,n.pendingProps.children,t),n.child;case 10:return a=n.pendingProps,at(n,n.type,a.value),_e(e,n,a.children,t),n.child;case 9:return l=n.type._context,a=n.pendingProps.children,Ut(n),l=Re(l),a=a(l),n.flags|=1,_e(e,n,a,t),n.child;case 14:return zc(e,n,n.type,n.pendingProps,t);case 15:return Bc(e,n,n.type,n.pendingProps,t);case 19:return Xc(e,n,t);case 31:return vm(e,n,t);case 22:return qc(e,n,t,n.pendingProps);case 24:return Ut(n),a=Re(be),e===null?(l=Qu(),l===null&&(l=ce,i=Hu(),l.pooledCache=i,i.refCount++,i!==null&&(l.pooledCacheLanes|=t),l=i),n.memoizedState={parent:a,cache:l},Yu(n),at(n,be,l)):((e.lanes&t)!==0&&(Vu(e,n),Fa(n,null,null,t),Pa()),l=e.memoizedState,i=n.memoizedState,l.parent!==a?(l={parent:a,cache:a},n.memoizedState=l,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=l),at(n,be,a)):(a=i.cache,at(n,be,a),a!==l.cache&&qu(n,[be],t,!0))),_e(e,n,n.pendingProps.children,t),n.child;case 29:throw n.pendingProps}throw Error(o(156,n.tag))}function Vn(e){e.flags|=4}function Es(e,n,t,a,l){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(Sf())e.flags|=8192;else throw qt=Pl,Gu}else e.flags&=-16777217}function wc(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!op(n))if(Sf())e.flags|=8192;else throw qt=Pl,Gu}function di(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?To():536870912,e.lanes|=n,ya|=n)}function al(e,n){if(!k)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function pe(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,a=0;if(n)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,a|=l.subtreeFlags&65011712,a|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=a,e.childLanes=t,n}function hm(e,n,t){var a=n.pendingProps;switch(Ou(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pe(n),null;case 1:return pe(n),null;case 3:return t=n.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ln(be),he(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(ia(n)?Vn(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Uu())),pe(n),null;case 26:var l=n.type,i=n.memoizedState;return e===null?(Vn(n),i!==null?(pe(n),wc(n,i)):(pe(n),Es(n,l,null,a,t))):i?i!==e.memoizedState?(Vn(n),pe(n),wc(n,i)):(pe(n),n.flags&=-16777217):(e=e.memoizedProps,e!==a&&Vn(n),pe(n),Es(n,l,e,a,t)),null;case 27:if(xl(n),t=w.current,l=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==a&&Vn(n);else{if(!a){if(n.stateNode===null)throw Error(o(166));return pe(n),null}e=z.current,ia(n)?Tr(n):(e=ep(l,a,t),n.stateNode=e,Vn(n))}return pe(n),null;case 5:if(xl(n),l=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==a&&Vn(n);else{if(!a){if(n.stateNode===null)throw Error(o(166));return pe(n),null}if(i=z.current,ia(n))Tr(n);else{var u=Mi(w.current);switch(i){case 1:i=u.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:i=u.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":i=u.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":i=u.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":i=u.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?u.createElement("select",{is:a.is}):u.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?u.createElement(l,{is:a.is}):u.createElement(l)}}i[De]=n,i[Ye]=a;e:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break e;for(;u.sibling===null;){if(u.return===null||u.return===n)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=i;e:switch(Oe(i,l,a),l){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&Vn(n)}}return pe(n),Es(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,t),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==a&&Vn(n);else{if(typeof a!="string"&&n.stateNode===null)throw Error(o(166));if(e=w.current,ia(n)){if(e=n.stateNode,t=n.memoizedProps,a=null,l=Me,l!==null)switch(l.tag){case 27:case 5:a=l.memoizedProps}e[De]=n,e=!!(e.nodeValue===t||a!==null&&a.suppressHydrationWarning===!0||$f(e.nodeValue,t)),e||tt(n,!0)}else e=Mi(e).createTextNode(a),e[De]=n,n.stateNode=e}return pe(n),null;case 31:if(t=n.memoizedState,e===null||e.memoizedState!==null){if(a=ia(n),t!==null){if(e===null){if(!a)throw Error(o(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(557));e[De]=n}else Ot(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;pe(n),e=!1}else t=Uu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=t),e=!0;if(!e)return n.flags&256?(tn(n),n):(tn(n),null);if((n.flags&128)!==0)throw Error(o(558))}return pe(n),null;case 13:if(a=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=ia(n),a!==null&&a.dehydrated!==null){if(e===null){if(!l)throw Error(o(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(o(317));l[De]=n}else Ot(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;pe(n),l=!1}else l=Uu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return n.flags&256?(tn(n),n):(tn(n),null)}return tn(n),(n.flags&128)!==0?(n.lanes=t,n):(t=a!==null,e=e!==null&&e.memoizedState!==null,t&&(a=n.child,l=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(l=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==l&&(a.flags|=2048)),t!==e&&t&&(n.child.flags|=8192),di(n,n.updateQueue),pe(n),null);case 4:return he(),e===null&&Zs(n.stateNode.containerInfo),pe(n),null;case 10:return Ln(n.type),pe(n),null;case 19:if(x(ye),a=n.memoizedState,a===null)return pe(n),null;if(l=(n.flags&128)!==0,i=a.rendering,i===null)if(l)al(a,!1);else{if(ge!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(i=ei(e),i!==null){for(n.flags|=128,al(a,!1),e=i.updateQueue,n.updateQueue=e,di(n,e),n.subtreeFlags=0,e=t,t=n.child;t!==null;)br(t,e),t=t.sibling;return _(ye,ye.current&1|2),k&&qn(n,a.treeForkCount),n.child}e=e.sibling}a.tail!==null&&Pe()>yi&&(n.flags|=128,l=!0,al(a,!1),n.lanes=4194304)}else{if(!l)if(e=ei(i),e!==null){if(n.flags|=128,l=!0,e=e.updateQueue,n.updateQueue=e,di(n,e),al(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!k)return pe(n),null}else 2*Pe()-a.renderingStartTime>yi&&t!==536870912&&(n.flags|=128,l=!0,al(a,!1),n.lanes=4194304);a.isBackwards?(i.sibling=n.child,n.child=i):(e=a.last,e!==null?e.sibling=i:n.child=i,a.last=i)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=Pe(),e.sibling=null,t=ye.current,_(ye,l?t&1|2:t&1),k&&qn(n,a.treeForkCount),e):(pe(n),null);case 22:case 23:return tn(n),wu(),a=n.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(n.flags|=8192):a&&(n.flags|=8192),a?(t&536870912)!==0&&(n.flags&128)===0&&(pe(n),n.subtreeFlags&6&&(n.flags|=8192)):pe(n),t=n.updateQueue,t!==null&&di(n,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),a=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),a!==t&&(n.flags|=2048),e!==null&&x(zt),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),n.memoizedState.cache!==t&&(n.flags|=2048),Ln(be),pe(n),null;case 25:return null;case 30:return null}throw Error(o(156,n.tag))}function ym(e,n){switch(Ou(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ln(be),he(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return xl(n),null;case 31:if(n.memoizedState!==null){if(tn(n),n.alternate===null)throw Error(o(340));Ot()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(tn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(o(340));Ot()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return x(ye),null;case 4:return he(),null;case 10:return Ln(n.type),null;case 22:case 23:return tn(n),wu(),e!==null&&x(zt),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Ln(be),null;case 25:return null;default:return null}}function Ic(e,n){switch(Ou(n),n.tag){case 3:Ln(be),he();break;case 26:case 27:case 5:xl(n);break;case 4:he();break;case 31:n.memoizedState!==null&&tn(n);break;case 13:tn(n);break;case 19:x(ye);break;case 10:Ln(n.type);break;case 22:case 23:tn(n),wu(),e!==null&&x(zt);break;case 24:Ln(be)}}function ll(e,n){try{var t=n.updateQueue,a=t!==null?t.lastEffect:null;if(a!==null){var l=a.next;t=l;do{if((t.tag&e)===e){a=void 0;var i=t.create,u=t.inst;a=i(),u.destroy=a}t=t.next}while(t!==l)}}catch(s){le(n,n.return,s)}}function rt(e,n,t){try{var a=n.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var i=l.next;a=i;do{if((a.tag&e)===e){var u=a.inst,s=u.destroy;if(s!==void 0){u.destroy=void 0,l=n;var r=t,m=s;try{m()}catch(b){le(l,r,b)}}}a=a.next}while(a!==i)}}catch(b){le(n,n.return,b)}}function Jc(e){var n=e.updateQueue;if(n!==null){var t=e.stateNode;try{Lr(n,t)}catch(a){le(e,e.return,a)}}}function Kc(e,n,t){t.props=Qt(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(a){le(e,n,a)}}function il(e,n){try{var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof t=="function"?e.refCleanup=t(a):t.current=a}}catch(l){le(e,n,l)}}function Mn(e,n){var t=e.ref,a=e.refCleanup;if(t!==null)if(typeof a=="function")try{a()}catch(l){le(e,n,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(l){le(e,n,l)}else t.current=null}function Pc(e){var n=e.type,t=e.memoizedProps,a=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":t.autoFocus&&a.focus();break e;case"img":t.src?a.src=t.src:t.srcSet&&(a.srcset=t.srcSet)}}catch(l){le(e,e.return,l)}}function xs(e,n,t){try{var a=e.stateNode;Gm(a,e.type,t,n),a[Ye]=n}catch(l){le(e,e.return,l)}}function Fc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&gt(e.type)||e.tag===4}function Ts(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Fc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&gt(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ns(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(e,n):(n=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.appendChild(e),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Un));else if(a!==4&&(a===27&&gt(e.type)&&(t=e.stateNode,n=null),e=e.child,e!==null))for(Ns(e,n,t),e=e.sibling;e!==null;)Ns(e,n,t),e=e.sibling}function mi(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(a!==4&&(a===27&&gt(e.type)&&(t=e.stateNode),e=e.child,e!==null))for(mi(e,n,t),e=e.sibling;e!==null;)mi(e,n,t),e=e.sibling}function kc(e){var n=e.stateNode,t=e.memoizedProps;try{for(var a=e.type,l=n.attributes;l.length;)n.removeAttributeNode(l[0]);Oe(n,a,t),n[De]=e,n[Ye]=t}catch(i){le(e,e.return,i)}}var $n=!1,Ee=!1,Ds=!1,Wc=typeof WeakSet=="function"?WeakSet:Set,Ne=null;function Sm(e,n){if(e=e.containerInfo,Js=Bi,e=fr(e),bu(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var a=t.getSelection&&t.getSelection();if(a&&a.rangeCount!==0){t=a.anchorNode;var l=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var u=0,s=-1,r=-1,m=0,b=0,E=e,g=null;n:for(;;){for(var y;E!==t||l!==0&&E.nodeType!==3||(s=u+l),E!==i||a!==0&&E.nodeType!==3||(r=u+a),E.nodeType===3&&(u+=E.nodeValue.length),(y=E.firstChild)!==null;)g=E,E=y;for(;;){if(E===e)break n;if(g===t&&++m===l&&(s=u),g===i&&++b===a&&(r=u),(y=E.nextSibling)!==null)break;E=g,g=E.parentNode}E=y}t=s===-1||r===-1?null:{start:s,end:r}}else t=null}t=t||{start:0,end:0}}else t=null;for(Ks={focusedElem:e,selectionRange:t},Bi=!1,Ne=n;Ne!==null;)if(n=Ne,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Ne=e;else for(;Ne!==null;){switch(n=Ne,i=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(t=0;t<e.length;t++)l=e[t],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,t=n,l=i.memoizedProps,i=i.memoizedState,a=t.stateNode;try{var U=Qt(t.type,l);e=a.getSnapshotBeforeUpdate(U,i),a.__reactInternalSnapshotBeforeUpdate=e}catch(H){le(t,t.return,H)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,t=e.nodeType,t===9)ks(e);else if(t===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ks(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=n.sibling,e!==null){e.return=n.return,Ne=e;break}Ne=n.return}}function ef(e,n,t){var a=t.flags;switch(t.tag){case 0:case 11:case 15:Zn(e,t),a&4&&ll(5,t);break;case 1:if(Zn(e,t),a&4)if(e=t.stateNode,n===null)try{e.componentDidMount()}catch(u){le(t,t.return,u)}else{var l=Qt(t.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(l,n,e.__reactInternalSnapshotBeforeUpdate)}catch(u){le(t,t.return,u)}}a&64&&Jc(t),a&512&&il(t,t.return);break;case 3:if(Zn(e,t),a&64&&(e=t.updateQueue,e!==null)){if(n=null,t.child!==null)switch(t.child.tag){case 27:case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}try{Lr(e,n)}catch(u){le(t,t.return,u)}}break;case 27:n===null&&a&4&&kc(t);case 26:case 5:Zn(e,t),n===null&&a&4&&Pc(t),a&512&&il(t,t.return);break;case 12:Zn(e,t);break;case 31:Zn(e,t),a&4&&af(e,t);break;case 13:Zn(e,t),a&4&&lf(e,t),a&64&&(e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(t=Mm.bind(null,t),Jm(e,t))));break;case 22:if(a=t.memoizedState!==null||$n,!a){n=n!==null&&n.memoizedState!==null||Ee,l=$n;var i=Ee;$n=a,(Ee=n)&&!i?wn(e,t,(t.subtreeFlags&8772)!==0):Zn(e,t),$n=l,Ee=i}break;case 30:break;default:Zn(e,t)}}function nf(e){var n=e.alternate;n!==null&&(e.alternate=null,nf(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&au(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var me=null,$e=!1;function Xn(e,n,t){for(t=t.child;t!==null;)tf(e,n,t),t=t.sibling}function tf(e,n,t){if(Fe&&typeof Fe.onCommitFiberUnmount=="function")try{Fe.onCommitFiberUnmount(Ra,t)}catch{}switch(t.tag){case 26:Ee||Mn(t,n),Xn(e,n,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:Ee||Mn(t,n);var a=me,l=$e;gt(t.type)&&(me=t.stateNode,$e=!1),Xn(e,n,t),ml(t.stateNode),me=a,$e=l;break;case 5:Ee||Mn(t,n);case 6:if(a=me,l=$e,me=null,Xn(e,n,t),me=a,$e=l,me!==null)if($e)try{(me.nodeType===9?me.body:me.nodeName==="HTML"?me.ownerDocument.body:me).removeChild(t.stateNode)}catch(i){le(t,n,i)}else try{me.removeChild(t.stateNode)}catch(i){le(t,n,i)}break;case 18:me!==null&&($e?(e=me,Kf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.stateNode),Na(e)):Kf(me,t.stateNode));break;case 4:a=me,l=$e,me=t.stateNode.containerInfo,$e=!0,Xn(e,n,t),me=a,$e=l;break;case 0:case 11:case 14:case 15:rt(2,t,n),Ee||rt(4,t,n),Xn(e,n,t);break;case 1:Ee||(Mn(t,n),a=t.stateNode,typeof a.componentWillUnmount=="function"&&Kc(t,n,a)),Xn(e,n,t);break;case 21:Xn(e,n,t);break;case 22:Ee=(a=Ee)||t.memoizedState!==null,Xn(e,n,t),Ee=a;break;default:Xn(e,n,t)}}function af(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Na(e)}catch(t){le(n,n.return,t)}}}function lf(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Na(e)}catch(t){le(n,n.return,t)}}function bm(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Wc),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Wc),n;default:throw Error(o(435,e.tag))}}function vi(e,n){var t=bm(e);n.forEach(function(a){if(!t.has(a)){t.add(a);var l=Rm.bind(null,e,a);a.then(l,l)}})}function Xe(e,n){var t=n.deletions;if(t!==null)for(var a=0;a<t.length;a++){var l=t[a],i=e,u=n,s=u;e:for(;s!==null;){switch(s.tag){case 27:if(gt(s.type)){me=s.stateNode,$e=!1;break e}break;case 5:me=s.stateNode,$e=!1;break e;case 3:case 4:me=s.stateNode.containerInfo,$e=!0;break e}s=s.return}if(me===null)throw Error(o(160));tf(i,u,l),me=null,$e=!1,i=l.alternate,i!==null&&(i.return=null),l.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)uf(n,e),n=n.sibling}var An=null;function uf(e,n){var t=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Xe(n,e),Ze(e),a&4&&(rt(3,e,e.return),ll(3,e),rt(5,e,e.return));break;case 1:Xe(n,e),Ze(e),a&512&&(Ee||t===null||Mn(t,t.return)),a&64&&$n&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?a:t.concat(a))));break;case 26:var l=An;if(Xe(n,e),Ze(e),a&512&&(Ee||t===null||Mn(t,t.return)),a&4){var i=t!==null?t.memoizedState:null;if(a=e.memoizedState,t===null)if(a===null)if(e.stateNode===null){e:{a=e.type,t=e.memoizedProps,l=l.ownerDocument||l;n:switch(a){case"title":i=l.getElementsByTagName("title")[0],(!i||i[ja]||i[De]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=l.createElement(a),l.head.insertBefore(i,l.querySelector("head > title"))),Oe(i,a,t),i[De]=e,Te(i),a=i;break e;case"link":var u=up("link","href",l).get(a+(t.href||""));if(u){for(var s=0;s<u.length;s++)if(i=u[s],i.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&i.getAttribute("rel")===(t.rel==null?null:t.rel)&&i.getAttribute("title")===(t.title==null?null:t.title)&&i.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){u.splice(s,1);break n}}i=l.createElement(a),Oe(i,a,t),l.head.appendChild(i);break;case"meta":if(u=up("meta","content",l).get(a+(t.content||""))){for(s=0;s<u.length;s++)if(i=u[s],i.getAttribute("content")===(t.content==null?null:""+t.content)&&i.getAttribute("name")===(t.name==null?null:t.name)&&i.getAttribute("property")===(t.property==null?null:t.property)&&i.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&i.getAttribute("charset")===(t.charSet==null?null:t.charSet)){u.splice(s,1);break n}}i=l.createElement(a),Oe(i,a,t),l.head.appendChild(i);break;default:throw Error(o(468,a))}i[De]=e,Te(i),a=i}e.stateNode=a}else sp(l,e.type,e.stateNode);else e.stateNode=ip(l,a,e.memoizedProps);else i!==a?(i===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):i.count--,a===null?sp(l,e.type,e.stateNode):ip(l,a,e.memoizedProps)):a===null&&e.stateNode!==null&&xs(e,e.memoizedProps,t.memoizedProps)}break;case 27:Xe(n,e),Ze(e),a&512&&(Ee||t===null||Mn(t,t.return)),t!==null&&a&4&&xs(e,e.memoizedProps,t.memoizedProps);break;case 5:if(Xe(n,e),Ze(e),a&512&&(Ee||t===null||Mn(t,t.return)),e.flags&32){l=e.stateNode;try{Kt(l,"")}catch(U){le(e,e.return,U)}}a&4&&e.stateNode!=null&&(l=e.memoizedProps,xs(e,l,t!==null?t.memoizedProps:l)),a&1024&&(Ds=!0);break;case 6:if(Xe(n,e),Ze(e),a&4){if(e.stateNode===null)throw Error(o(162));a=e.memoizedProps,t=e.stateNode;try{t.nodeValue=a}catch(U){le(e,e.return,U)}}break;case 3:if(Oi=null,l=An,An=Ri(n.containerInfo),Xe(n,e),An=l,Ze(e),a&4&&t!==null&&t.memoizedState.isDehydrated)try{Na(n.containerInfo)}catch(U){le(e,e.return,U)}Ds&&(Ds=!1,sf(e));break;case 4:a=An,An=Ri(e.stateNode.containerInfo),Xe(n,e),Ze(e),An=a;break;case 12:Xe(n,e),Ze(e);break;case 31:Xe(n,e),Ze(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,vi(e,a)));break;case 13:Xe(n,e),Ze(e),e.child.flags&8192&&e.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(hi=Pe()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,vi(e,a)));break;case 22:l=e.memoizedState!==null;var r=t!==null&&t.memoizedState!==null,m=$n,b=Ee;if($n=m||l,Ee=b||r,Xe(n,e),Ee=b,$n=m,Ze(e),a&8192)e:for(n=e.stateNode,n._visibility=l?n._visibility&-2:n._visibility|1,l&&(t===null||r||$n||Ee||Gt(e)),t=null,n=e;;){if(n.tag===5||n.tag===26){if(t===null){r=t=n;try{if(i=r.stateNode,l)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{s=r.stateNode;var E=r.memoizedProps.style,g=E!=null&&E.hasOwnProperty("display")?E.display:null;s.style.display=g==null||typeof g=="boolean"?"":(""+g).trim()}}catch(U){le(r,r.return,U)}}}else if(n.tag===6){if(t===null){r=n;try{r.stateNode.nodeValue=l?"":r.memoizedProps}catch(U){le(r,r.return,U)}}}else if(n.tag===18){if(t===null){r=n;try{var y=r.stateNode;l?Pf(y,!0):Pf(r.stateNode,!1)}catch(U){le(r,r.return,U)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;t===n&&(t=null),n=n.return}t===n&&(t=null),n.sibling.return=n.return,n=n.sibling}a&4&&(a=e.updateQueue,a!==null&&(t=a.retryQueue,t!==null&&(a.retryQueue=null,vi(e,t))));break;case 19:Xe(n,e),Ze(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,vi(e,a)));break;case 30:break;case 21:break;default:Xe(n,e),Ze(e)}}function Ze(e){var n=e.flags;if(n&2){try{for(var t,a=e.return;a!==null;){if(Fc(a)){t=a;break}a=a.return}if(t==null)throw Error(o(160));switch(t.tag){case 27:var l=t.stateNode,i=Ts(e);mi(e,i,l);break;case 5:var u=t.stateNode;t.flags&32&&(Kt(u,""),t.flags&=-33);var s=Ts(e);mi(e,s,u);break;case 3:case 4:var r=t.stateNode.containerInfo,m=Ts(e);Ns(e,m,r);break;default:throw Error(o(161))}}catch(b){le(e,e.return,b)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function sf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;sf(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Zn(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)ef(e,n.alternate,n),n=n.sibling}function Gt(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:rt(4,n,n.return),Gt(n);break;case 1:Mn(n,n.return);var t=n.stateNode;typeof t.componentWillUnmount=="function"&&Kc(n,n.return,t),Gt(n);break;case 27:ml(n.stateNode);case 26:case 5:Mn(n,n.return),Gt(n);break;case 22:n.memoizedState===null&&Gt(n);break;case 30:Gt(n);break;default:Gt(n)}e=e.sibling}}function wn(e,n,t){for(t=t&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var a=n.alternate,l=e,i=n,u=i.flags;switch(i.tag){case 0:case 11:case 15:wn(l,i,t),ll(4,i);break;case 1:if(wn(l,i,t),a=i,l=a.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(m){le(a,a.return,m)}if(a=i,l=a.updateQueue,l!==null){var s=a.stateNode;try{var r=l.shared.hiddenCallbacks;if(r!==null)for(l.shared.hiddenCallbacks=null,l=0;l<r.length;l++)Hr(r[l],s)}catch(m){le(a,a.return,m)}}t&&u&64&&Jc(i),il(i,i.return);break;case 27:kc(i);case 26:case 5:wn(l,i,t),t&&a===null&&u&4&&Pc(i),il(i,i.return);break;case 12:wn(l,i,t);break;case 31:wn(l,i,t),t&&u&4&&af(l,i);break;case 13:wn(l,i,t),t&&u&4&&lf(l,i);break;case 22:i.memoizedState===null&&wn(l,i,t),il(i,i.return);break;case 30:break;default:wn(l,i,t)}n=n.sibling}}function Ms(e,n){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&Za(t))}function Rs(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Za(e))}function Cn(e,n,t,a){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)of(e,n,t,a),n=n.sibling}function of(e,n,t,a){var l=n.flags;switch(n.tag){case 0:case 11:case 15:Cn(e,n,t,a),l&2048&&ll(9,n);break;case 1:Cn(e,n,t,a);break;case 3:Cn(e,n,t,a),l&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Za(e)));break;case 12:if(l&2048){Cn(e,n,t,a),e=n.stateNode;try{var i=n.memoizedProps,u=i.id,s=i.onPostCommit;typeof s=="function"&&s(u,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(r){le(n,n.return,r)}}else Cn(e,n,t,a);break;case 31:Cn(e,n,t,a);break;case 13:Cn(e,n,t,a);break;case 23:break;case 22:i=n.stateNode,u=n.alternate,n.memoizedState!==null?i._visibility&2?Cn(e,n,t,a):ul(e,n):i._visibility&2?Cn(e,n,t,a):(i._visibility|=2,va(e,n,t,a,(n.subtreeFlags&10256)!==0||!1)),l&2048&&Ms(u,n);break;case 24:Cn(e,n,t,a),l&2048&&Rs(n.alternate,n);break;default:Cn(e,n,t,a)}}function va(e,n,t,a,l){for(l=l&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var i=e,u=n,s=t,r=a,m=u.flags;switch(u.tag){case 0:case 11:case 15:va(i,u,s,r,l),ll(8,u);break;case 23:break;case 22:var b=u.stateNode;u.memoizedState!==null?b._visibility&2?va(i,u,s,r,l):ul(i,u):(b._visibility|=2,va(i,u,s,r,l)),l&&m&2048&&Ms(u.alternate,u);break;case 24:va(i,u,s,r,l),l&&m&2048&&Rs(u.alternate,u);break;default:va(i,u,s,r,l)}n=n.sibling}}function ul(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var t=e,a=n,l=a.flags;switch(a.tag){case 22:ul(t,a),l&2048&&Ms(a.alternate,a);break;case 24:ul(t,a),l&2048&&Rs(a.alternate,a);break;default:ul(t,a)}n=n.sibling}}var sl=8192;function ga(e,n,t){if(e.subtreeFlags&sl)for(e=e.child;e!==null;)rf(e,n,t),e=e.sibling}function rf(e,n,t){switch(e.tag){case 26:ga(e,n,t),e.flags&sl&&e.memoizedState!==null&&uv(t,An,e.memoizedState,e.memoizedProps);break;case 5:ga(e,n,t);break;case 3:case 4:var a=An;An=Ri(e.stateNode.containerInfo),ga(e,n,t),An=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=sl,sl=16777216,ga(e,n,t),sl=a):ga(e,n,t));break;default:ga(e,n,t)}}function cf(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function ol(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var a=n[t];Ne=a,pf(a,e)}cf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)ff(e),e=e.sibling}function ff(e){switch(e.tag){case 0:case 11:case 15:ol(e),e.flags&2048&&rt(9,e,e.return);break;case 3:ol(e);break;case 12:ol(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,gi(e)):ol(e);break;default:ol(e)}}function gi(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var a=n[t];Ne=a,pf(a,e)}cf(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:rt(8,n,n.return),gi(n);break;case 22:t=n.stateNode,t._visibility&2&&(t._visibility&=-3,gi(n));break;default:gi(n)}e=e.sibling}}function pf(e,n){for(;Ne!==null;){var t=Ne;switch(t.tag){case 0:case 11:case 15:rt(8,t,n);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var a=t.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Za(t.memoizedState.cache)}if(a=t.child,a!==null)a.return=t,Ne=a;else e:for(t=e;Ne!==null;){a=Ne;var l=a.sibling,i=a.return;if(nf(a),a===t){Ne=null;break e}if(l!==null){l.return=i,Ne=l;break e}Ne=i}}}var Am={getCacheForType:function(e){var n=Re(be),t=n.data.get(e);return t===void 0&&(t=e(),n.data.set(e,t)),t},cacheSignal:function(){return Re(be).controller.signal}},Cm=typeof WeakMap=="function"?WeakMap:Map,ne=0,ce=null,I=null,K=0,ae=0,an=null,ct=!1,ha=!1,_s=!1,In=0,ge=0,ft=0,Yt=0,Os=0,ln=0,ya=0,rl=null,we=null,js=!1,hi=0,df=0,yi=1/0,Si=null,pt=null,xe=0,dt=null,Sa=null,Jn=0,Us=0,zs=null,mf=null,cl=0,Bs=null;function un(){return(ne&2)!==0&&K!==0?K&-K:A.T!==null?Ys():Ro()}function vf(){if(ln===0)if((K&536870912)===0||k){var e=Dl;Dl<<=1,(Dl&3932160)===0&&(Dl=262144),ln=e}else ln=536870912;return e=nn.current,e!==null&&(e.flags|=32),ln}function Ie(e,n,t){(e===ce&&(ae===2||ae===9)||e.cancelPendingCommit!==null)&&(ba(e,0),mt(e,K,ln,!1)),Oa(e,t),((ne&2)===0||e!==ce)&&(e===ce&&((ne&2)===0&&(Yt|=t),ge===4&&mt(e,K,ln,!1)),Rn(e))}function gf(e,n,t){if((ne&6)!==0)throw Error(o(327));var a=!t&&(n&127)===0&&(n&e.expiredLanes)===0||_a(e,n),l=a?Tm(e,n):Hs(e,n,!0),i=a;do{if(l===0){ha&&!a&&mt(e,n,0,!1);break}else{if(t=e.current.alternate,i&&!Em(t)){l=Hs(e,n,!1),i=!1;continue}if(l===2){if(i=n,e.errorRecoveryDisabledLanes&i)var u=0;else u=e.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){n=u;e:{var s=e;l=rl;var r=s.current.memoizedState.isDehydrated;if(r&&(ba(s,u).flags|=256),u=Hs(s,u,!1),u!==2){if(_s&&!r){s.errorRecoveryDisabledLanes|=i,Yt|=i,l=4;break e}i=we,we=l,i!==null&&(we===null?we=i:we.push.apply(we,i))}l=u}if(i=!1,l!==2)continue}}if(l===1){ba(e,0),mt(e,n,0,!0);break}e:{switch(a=e,i=l,i){case 0:case 1:throw Error(o(345));case 4:if((n&4194048)!==n)break;case 6:mt(a,n,ln,!ct);break e;case 2:we=null;break;case 3:case 5:break;default:throw Error(o(329))}if((n&62914560)===n&&(l=hi+300-Pe(),10<l)){if(mt(a,n,ln,!ct),Rl(a,0,!0)!==0)break e;Jn=n,a.timeoutHandle=If(hf.bind(null,a,t,we,Si,js,n,ln,Yt,ya,ct,i,"Throttled",-0,0),l);break e}hf(a,t,we,Si,js,n,ln,Yt,ya,ct,i,null,-0,0)}}break}while(!0);Rn(e)}function hf(e,n,t,a,l,i,u,s,r,m,b,E,g,y){if(e.timeoutHandle=-1,E=n.subtreeFlags,E&8192||(E&16785408)===16785408){E={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Un},rf(n,i,E);var U=(i&62914560)===i?hi-Pe():(i&4194048)===i?df-Pe():0;if(U=sv(E,U),U!==null){Jn=i,e.cancelPendingCommit=U(Tf.bind(null,e,n,i,t,a,l,u,s,r,b,E,null,g,y)),mt(e,i,u,!m);return}}Tf(e,n,i,t,a,l,u,s,r)}function Em(e){for(var n=e;;){var t=n.tag;if((t===0||t===11||t===15)&&n.flags&16384&&(t=n.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var a=0;a<t.length;a++){var l=t[a],i=l.getSnapshot;l=l.value;try{if(!We(i(),l))return!1}catch{return!1}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function mt(e,n,t,a){n&=~Os,n&=~Yt,e.suspendedLanes|=n,e.pingedLanes&=~n,a&&(e.warmLanes|=n),a=e.expirationTimes;for(var l=n;0<l;){var i=31-ke(l),u=1<<i;a[i]=-1,l&=~u}t!==0&&No(e,t,n)}function bi(){return(ne&6)===0?(fl(0),!1):!0}function qs(){if(I!==null){if(ae===0)var e=I.return;else e=I,Hn=jt=null,ku(e),ca=null,Ia=0,e=I;for(;e!==null;)Ic(e.alternate,e),e=e.return;I=null}}function ba(e,n){var t=e.timeoutHandle;t!==-1&&(e.timeoutHandle=-1,$m(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),Jn=0,qs(),ce=e,I=t=Bn(e.current,null),K=n,ae=0,an=null,ct=!1,ha=_a(e,n),_s=!1,ya=ln=Os=Yt=ft=ge=0,we=rl=null,js=!1,(n&8)!==0&&(n|=n&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=n;0<a;){var l=31-ke(a),i=1<<l;n|=e[l],a&=~i}return In=n,Yl(),t}function yf(e,n){$=null,A.H=nl,n===ra||n===Kl?(n=Ur(),ae=3):n===Gu?(n=Ur(),ae=4):ae=n===ms?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,an=n,I===null&&(ge=1,ri(e,pn(n,e.current)))}function Sf(){var e=nn.current;return e===null?!0:(K&4194048)===K?gn===null:(K&62914560)===K||(K&536870912)!==0?e===gn:!1}function bf(){var e=A.H;return A.H=nl,e===null?nl:e}function Af(){var e=A.A;return A.A=Am,e}function Ai(){ge=4,ct||(K&4194048)!==K&&nn.current!==null||(ha=!0),(ft&134217727)===0&&(Yt&134217727)===0||ce===null||mt(ce,K,ln,!1)}function Hs(e,n,t){var a=ne;ne|=2;var l=bf(),i=Af();(ce!==e||K!==n)&&(Si=null,ba(e,n)),n=!1;var u=ge;e:do try{if(ae!==0&&I!==null){var s=I,r=an;switch(ae){case 8:qs(),u=6;break e;case 3:case 2:case 9:case 6:nn.current===null&&(n=!0);var m=ae;if(ae=0,an=null,Aa(e,s,r,m),t&&ha){u=0;break e}break;default:m=ae,ae=0,an=null,Aa(e,s,r,m)}}xm(),u=ge;break}catch(b){yf(e,b)}while(!0);return n&&e.shellSuspendCounter++,Hn=jt=null,ne=a,A.H=l,A.A=i,I===null&&(ce=null,K=0,Yl()),u}function xm(){for(;I!==null;)Cf(I)}function Tm(e,n){var t=ne;ne|=2;var a=bf(),l=Af();ce!==e||K!==n?(Si=null,yi=Pe()+500,ba(e,n)):ha=_a(e,n);e:do try{if(ae!==0&&I!==null){n=I;var i=an;n:switch(ae){case 1:ae=0,an=null,Aa(e,n,i,1);break;case 2:case 9:if(Or(i)){ae=0,an=null,Ef(n);break}n=function(){ae!==2&&ae!==9||ce!==e||(ae=7),Rn(e)},i.then(n,n);break e;case 3:ae=7;break e;case 4:ae=5;break e;case 7:Or(i)?(ae=0,an=null,Ef(n)):(ae=0,an=null,Aa(e,n,i,7));break;case 5:var u=null;switch(I.tag){case 26:u=I.memoizedState;case 5:case 27:var s=I;if(u?op(u):s.stateNode.complete){ae=0,an=null;var r=s.sibling;if(r!==null)I=r;else{var m=s.return;m!==null?(I=m,Ci(m)):I=null}break n}}ae=0,an=null,Aa(e,n,i,5);break;case 6:ae=0,an=null,Aa(e,n,i,6);break;case 8:qs(),ge=6;break e;default:throw Error(o(462))}}Nm();break}catch(b){yf(e,b)}while(!0);return Hn=jt=null,A.H=a,A.A=l,ne=t,I!==null?0:(ce=null,K=0,Yl(),ge)}function Nm(){for(;I!==null&&!Kp();)Cf(I)}function Cf(e){var n=Zc(e.alternate,e,In);e.memoizedProps=e.pendingProps,n===null?Ci(e):I=n}function Ef(e){var n=e,t=n.alternate;switch(n.tag){case 15:case 0:n=Qc(t,n,n.pendingProps,n.type,void 0,K);break;case 11:n=Qc(t,n,n.pendingProps,n.type.render,n.ref,K);break;case 5:ku(n);default:Ic(t,n),n=I=br(n,In),n=Zc(t,n,In)}e.memoizedProps=e.pendingProps,n===null?Ci(e):I=n}function Aa(e,n,t,a){Hn=jt=null,ku(n),ca=null,Ia=0;var l=n.return;try{if(mm(e,l,n,t,K)){ge=1,ri(e,pn(t,e.current)),I=null;return}}catch(i){if(l!==null)throw I=l,i;ge=1,ri(e,pn(t,e.current)),I=null;return}n.flags&32768?(k||a===1?e=!0:ha||(K&536870912)!==0?e=!1:(ct=e=!0,(a===2||a===9||a===3||a===6)&&(a=nn.current,a!==null&&a.tag===13&&(a.flags|=16384))),xf(n,e)):Ci(n)}function Ci(e){var n=e;do{if((n.flags&32768)!==0){xf(n,ct);return}e=n.return;var t=hm(n.alternate,n,In);if(t!==null){I=t;return}if(n=n.sibling,n!==null){I=n;return}I=n=e}while(n!==null);ge===0&&(ge=5)}function xf(e,n){do{var t=ym(e.alternate,e);if(t!==null){t.flags&=32767,I=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!n&&(e=e.sibling,e!==null)){I=e;return}I=e=t}while(e!==null);ge=6,I=null}function Tf(e,n,t,a,l,i,u,s,r){e.cancelPendingCommit=null;do Ei();while(xe!==0);if((ne&6)!==0)throw Error(o(327));if(n!==null){if(n===e.current)throw Error(o(177));if(i=n.lanes|n.childLanes,i|=Tu,id(e,t,i,u,s,r),e===ce&&(I=ce=null,K=0),Sa=n,dt=e,Jn=t,Us=i,zs=l,mf=a,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,_m(Tl,function(){return _f(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||a){a=A.T,A.T=null,l=R.p,R.p=2,u=ne,ne|=4;try{Sm(e,n,t)}finally{ne=u,R.p=l,A.T=a}}xe=1,Nf(),Df(),Mf()}}function Nf(){if(xe===1){xe=0;var e=dt,n=Sa,t=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||t){t=A.T,A.T=null;var a=R.p;R.p=2;var l=ne;ne|=4;try{uf(n,e);var i=Ks,u=fr(e.containerInfo),s=i.focusedElem,r=i.selectionRange;if(u!==s&&s&&s.ownerDocument&&cr(s.ownerDocument.documentElement,s)){if(r!==null&&bu(s)){var m=r.start,b=r.end;if(b===void 0&&(b=m),"selectionStart"in s)s.selectionStart=m,s.selectionEnd=Math.min(b,s.value.length);else{var E=s.ownerDocument||document,g=E&&E.defaultView||window;if(g.getSelection){var y=g.getSelection(),U=s.textContent.length,H=Math.min(r.start,U),oe=r.end===void 0?H:Math.min(r.end,U);!y.extend&&H>oe&&(u=oe,oe=H,H=u);var p=rr(s,H),c=rr(s,oe);if(p&&c&&(y.rangeCount!==1||y.anchorNode!==p.node||y.anchorOffset!==p.offset||y.focusNode!==c.node||y.focusOffset!==c.offset)){var d=E.createRange();d.setStart(p.node,p.offset),y.removeAllRanges(),H>oe?(y.addRange(d),y.extend(c.node,c.offset)):(d.setEnd(c.node,c.offset),y.addRange(d))}}}}for(E=[],y=s;y=y.parentNode;)y.nodeType===1&&E.push({element:y,left:y.scrollLeft,top:y.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<E.length;s++){var C=E[s];C.element.scrollLeft=C.left,C.element.scrollTop=C.top}}Bi=!!Js,Ks=Js=null}finally{ne=l,R.p=a,A.T=t}}e.current=n,xe=2}}function Df(){if(xe===2){xe=0;var e=dt,n=Sa,t=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||t){t=A.T,A.T=null;var a=R.p;R.p=2;var l=ne;ne|=4;try{ef(e,n.alternate,n)}finally{ne=l,R.p=a,A.T=t}}xe=3}}function Mf(){if(xe===4||xe===3){xe=0,Pp();var e=dt,n=Sa,t=Jn,a=mf;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?xe=5:(xe=0,Sa=dt=null,Rf(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(pt=null),nu(t),n=n.stateNode,Fe&&typeof Fe.onCommitFiberRoot=="function")try{Fe.onCommitFiberRoot(Ra,n,void 0,(n.current.flags&128)===128)}catch{}if(a!==null){n=A.T,l=R.p,R.p=2,A.T=null;try{for(var i=e.onRecoverableError,u=0;u<a.length;u++){var s=a[u];i(s.value,{componentStack:s.stack})}}finally{A.T=n,R.p=l}}(Jn&3)!==0&&Ei(),Rn(e),l=e.pendingLanes,(t&261930)!==0&&(l&42)!==0?e===Bs?cl++:(cl=0,Bs=e):cl=0,fl(0)}}function Rf(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Za(n)))}function Ei(){return Nf(),Df(),Mf(),_f()}function _f(){if(xe!==5)return!1;var e=dt,n=Us;Us=0;var t=nu(Jn),a=A.T,l=R.p;try{R.p=32>t?32:t,A.T=null,t=zs,zs=null;var i=dt,u=Jn;if(xe=0,Sa=dt=null,Jn=0,(ne&6)!==0)throw Error(o(331));var s=ne;if(ne|=4,ff(i.current),of(i,i.current,u,t),ne=s,fl(0,!1),Fe&&typeof Fe.onPostCommitFiberRoot=="function")try{Fe.onPostCommitFiberRoot(Ra,i)}catch{}return!0}finally{R.p=l,A.T=a,Rf(e,n)}}function Of(e,n,t){n=pn(t,n),n=ds(e.stateNode,n,2),e=ut(e,n,2),e!==null&&(Oa(e,2),Rn(e))}function le(e,n,t){if(e.tag===3)Of(e,e,t);else for(;n!==null;){if(n.tag===3){Of(n,e,t);break}else if(n.tag===1){var a=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(pt===null||!pt.has(a))){e=pn(t,e),t=Oc(2),a=ut(n,t,2),a!==null&&(jc(t,a,n,e),Oa(a,2),Rn(a));break}}n=n.return}}function Ls(e,n,t){var a=e.pingCache;if(a===null){a=e.pingCache=new Cm;var l=new Set;a.set(n,l)}else l=a.get(n),l===void 0&&(l=new Set,a.set(n,l));l.has(t)||(_s=!0,l.add(t),e=Dm.bind(null,e,n,t),n.then(e,e))}function Dm(e,n,t){var a=e.pingCache;a!==null&&a.delete(n),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,ce===e&&(K&t)===t&&(ge===4||ge===3&&(K&62914560)===K&&300>Pe()-hi?(ne&2)===0&&ba(e,0):Os|=t,ya===K&&(ya=0)),Rn(e)}function jf(e,n){n===0&&(n=To()),e=Rt(e,n),e!==null&&(Oa(e,n),Rn(e))}function Mm(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),jf(e,t)}function Rm(e,n){var t=0;switch(e.tag){case 31:case 13:var a=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(o(314))}a!==null&&a.delete(n),jf(e,t)}function _m(e,n){return Fi(e,n)}var xi=null,Ca=null,Qs=!1,Ti=!1,Gs=!1,vt=0;function Rn(e){e!==Ca&&e.next===null&&(Ca===null?xi=Ca=e:Ca=Ca.next=e),Ti=!0,Qs||(Qs=!0,jm())}function fl(e,n){if(!Gs&&Ti){Gs=!0;do for(var t=!1,a=xi;a!==null;){if(e!==0){var l=a.pendingLanes;if(l===0)var i=0;else{var u=a.suspendedLanes,s=a.pingedLanes;i=(1<<31-ke(42|e)+1)-1,i&=l&~(u&~s),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(t=!0,qf(a,i))}else i=K,i=Rl(a,a===ce?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||_a(a,i)||(t=!0,qf(a,i));a=a.next}while(t);Gs=!1}}function Om(){Uf()}function Uf(){Ti=Qs=!1;var e=0;vt!==0&&Vm()&&(e=vt);for(var n=Pe(),t=null,a=xi;a!==null;){var l=a.next,i=zf(a,n);i===0?(a.next=null,t===null?xi=l:t.next=l,l===null&&(Ca=t)):(t=a,(e!==0||(i&3)!==0)&&(Ti=!0)),a=l}xe!==0&&xe!==5||fl(e),vt!==0&&(vt=0)}function zf(e,n){for(var t=e.suspendedLanes,a=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var u=31-ke(i),s=1<<u,r=l[u];r===-1?((s&t)===0||(s&a)!==0)&&(l[u]=ld(s,n)):r<=n&&(e.expiredLanes|=s),i&=~s}if(n=ce,t=K,t=Rl(e,e===n?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,t===0||e===n&&(ae===2||ae===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&ki(a),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||_a(e,t)){if(n=t&-t,n===e.callbackPriority)return n;switch(a!==null&&ki(a),nu(t)){case 2:case 8:t=Eo;break;case 32:t=Tl;break;case 268435456:t=xo;break;default:t=Tl}return a=Bf.bind(null,e),t=Fi(t,a),e.callbackPriority=n,e.callbackNode=t,n}return a!==null&&a!==null&&ki(a),e.callbackPriority=2,e.callbackNode=null,2}function Bf(e,n){if(xe!==0&&xe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var t=e.callbackNode;if(Ei()&&e.callbackNode!==t)return null;var a=K;return a=Rl(e,e===ce?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(gf(e,a,n),zf(e,Pe()),e.callbackNode!=null&&e.callbackNode===t?Bf.bind(null,e):null)}function qf(e,n){if(Ei())return null;gf(e,n,!0)}function jm(){Xm(function(){(ne&6)!==0?Fi(Co,Om):Uf()})}function Ys(){if(vt===0){var e=sa;e===0&&(e=Nl,Nl<<=1,(Nl&261888)===0&&(Nl=256)),vt=e}return vt}function Hf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ul(""+e)}function Lf(e,n){var t=n.ownerDocument.createElement("input");return t.name=n.name,t.value=n.value,e.id&&t.setAttribute("form",e.id),n.parentNode.insertBefore(t,n),e=new FormData(e),t.parentNode.removeChild(t),e}function Um(e,n,t,a,l){if(n==="submit"&&t&&t.stateNode===l){var i=Hf((l[Ye]||null).action),u=a.submitter;u&&(n=(n=u[Ye]||null)?Hf(n.formAction):u.getAttribute("formAction"),n!==null&&(i=n,u=null));var s=new Hl("action","action",null,a,l);e.push({event:s,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(vt!==0){var r=u?Lf(l,u):new FormData(l);ss(t,{pending:!0,data:r,method:l.method,action:i},null,r)}}else typeof i=="function"&&(s.preventDefault(),r=u?Lf(l,u):new FormData(l),ss(t,{pending:!0,data:r,method:l.method,action:i},i,r))},currentTarget:l}]})}}for(var Vs=0;Vs<xu.length;Vs++){var $s=xu[Vs],zm=$s.toLowerCase(),Bm=$s[0].toUpperCase()+$s.slice(1);bn(zm,"on"+Bm)}bn(mr,"onAnimationEnd"),bn(vr,"onAnimationIteration"),bn(gr,"onAnimationStart"),bn("dblclick","onDoubleClick"),bn("focusin","onFocus"),bn("focusout","onBlur"),bn(Fd,"onTransitionRun"),bn(kd,"onTransitionStart"),bn(Wd,"onTransitionCancel"),bn(hr,"onTransitionEnd"),It("onMouseEnter",["mouseout","mouseover"]),It("onMouseLeave",["mouseout","mouseover"]),It("onPointerEnter",["pointerout","pointerover"]),It("onPointerLeave",["pointerout","pointerover"]),Tt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Tt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Tt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Tt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Tt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Tt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qm=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(pl));function Qf(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var a=e[t],l=a.event;a=a.listeners;e:{var i=void 0;if(n)for(var u=a.length-1;0<=u;u--){var s=a[u],r=s.instance,m=s.currentTarget;if(s=s.listener,r!==i&&l.isPropagationStopped())break e;i=s,l.currentTarget=m;try{i(l)}catch(b){Gl(b)}l.currentTarget=null,i=r}else for(u=0;u<a.length;u++){if(s=a[u],r=s.instance,m=s.currentTarget,s=s.listener,r!==i&&l.isPropagationStopped())break e;i=s,l.currentTarget=m;try{i(l)}catch(b){Gl(b)}l.currentTarget=null,i=r}}}}function J(e,n){var t=n[tu];t===void 0&&(t=n[tu]=new Set);var a=e+"__bubble";t.has(a)||(Gf(n,e,2,!1),t.add(a))}function Xs(e,n,t){var a=0;n&&(a|=4),Gf(t,e,a,n)}var Ni="_reactListening"+Math.random().toString(36).slice(2);function Zs(e){if(!e[Ni]){e[Ni]=!0,jo.forEach(function(t){t!=="selectionchange"&&(qm.has(t)||Xs(t,!1,e),Xs(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Ni]||(n[Ni]=!0,Xs("selectionchange",!1,n))}}function Gf(e,n,t,a){switch(vp(n)){case 2:var l=cv;break;case 8:l=fv;break;default:l=uo}t=l.bind(null,n,t,e),l=void 0,!fu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),a?l!==void 0?e.addEventListener(n,t,{capture:!0,passive:l}):e.addEventListener(n,t,!0):l!==void 0?e.addEventListener(n,t,{passive:l}):e.addEventListener(n,t,!1)}function ws(e,n,t,a,l){var i=a;if((n&1)===0&&(n&2)===0&&a!==null)e:for(;;){if(a===null)return;var u=a.tag;if(u===3||u===4){var s=a.stateNode.containerInfo;if(s===l)break;if(u===4)for(u=a.return;u!==null;){var r=u.tag;if((r===3||r===4)&&u.stateNode.containerInfo===l)return;u=u.return}for(;s!==null;){if(u=Xt(s),u===null)return;if(r=u.tag,r===5||r===6||r===26||r===27){a=i=u;continue e}s=s.parentNode}}a=a.return}Xo(function(){var m=i,b=ru(t),E=[];e:{var g=yr.get(e);if(g!==void 0){var y=Hl,U=e;switch(e){case"keypress":if(Bl(t)===0)break e;case"keydown":case"keyup":y=Rd;break;case"focusin":U="focus",y=vu;break;case"focusout":U="blur",y=vu;break;case"beforeblur":case"afterblur":y=vu;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Io;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=hd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=jd;break;case mr:case vr:case gr:y=bd;break;case hr:y=zd;break;case"scroll":case"scrollend":y=vd;break;case"wheel":y=qd;break;case"copy":case"cut":case"paste":y=Cd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Ko;break;case"toggle":case"beforetoggle":y=Ld}var H=(n&4)!==0,oe=!H&&(e==="scroll"||e==="scrollend"),p=H?g!==null?g+"Capture":null:g;H=[];for(var c=m,d;c!==null;){var C=c;if(d=C.stateNode,C=C.tag,C!==5&&C!==26&&C!==27||d===null||p===null||(C=za(c,p),C!=null&&H.push(dl(c,C,d))),oe)break;c=c.return}0<H.length&&(g=new y(g,U,null,t,b),E.push({event:g,listeners:H}))}}if((n&7)===0){e:{if(g=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",g&&t!==ou&&(U=t.relatedTarget||t.fromElement)&&(Xt(U)||U[$t]))break e;if((y||g)&&(g=b.window===b?b:(g=b.ownerDocument)?g.defaultView||g.parentWindow:window,y?(U=t.relatedTarget||t.toElement,y=m,U=U?Xt(U):null,U!==null&&(oe=D(U),H=U.tag,U!==oe||H!==5&&H!==27&&H!==6)&&(U=null)):(y=null,U=m),y!==U)){if(H=Io,C="onMouseLeave",p="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(H=Ko,C="onPointerLeave",p="onPointerEnter",c="pointer"),oe=y==null?g:Ua(y),d=U==null?g:Ua(U),g=new H(C,c+"leave",y,t,b),g.target=oe,g.relatedTarget=d,C=null,Xt(b)===m&&(H=new H(p,c+"enter",U,t,b),H.target=d,H.relatedTarget=oe,C=H),oe=C,y&&U)n:{for(H=Hm,p=y,c=U,d=0,C=p;C;C=H(C))d++;C=0;for(var q=c;q;q=H(q))C++;for(;0<d-C;)p=H(p),d--;for(;0<C-d;)c=H(c),C--;for(;d--;){if(p===c||c!==null&&p===c.alternate){H=p;break n}p=H(p),c=H(c)}H=null}else H=null;y!==null&&Yf(E,g,y,H,!1),U!==null&&oe!==null&&Yf(E,oe,U,H,!0)}}e:{if(g=m?Ua(m):window,y=g.nodeName&&g.nodeName.toLowerCase(),y==="select"||y==="input"&&g.type==="file")var W=ar;else if(nr(g))if(lr)W=Jd;else{W=wd;var B=Zd}else y=g.nodeName,!y||y.toLowerCase()!=="input"||g.type!=="checkbox"&&g.type!=="radio"?m&&su(m.elementType)&&(W=ar):W=Id;if(W&&(W=W(e,m))){tr(E,W,t,b);break e}B&&B(e,g,m),e==="focusout"&&m&&g.type==="number"&&m.memoizedProps.value!=null&&uu(g,"number",g.value)}switch(B=m?Ua(m):window,e){case"focusin":(nr(B)||B.contentEditable==="true")&&(Wt=B,Au=m,Va=null);break;case"focusout":Va=Au=Wt=null;break;case"mousedown":Cu=!0;break;case"contextmenu":case"mouseup":case"dragend":Cu=!1,pr(E,t,b);break;case"selectionchange":if(Pd)break;case"keydown":case"keyup":pr(E,t,b)}var X;if(hu)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else kt?Wo(e,t)&&(P="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(P="onCompositionStart");P&&(Po&&t.locale!=="ko"&&(kt||P!=="onCompositionStart"?P==="onCompositionEnd"&&kt&&(X=Zo()):(Wn=b,pu="value"in Wn?Wn.value:Wn.textContent,kt=!0)),B=Di(m,P),0<B.length&&(P=new Jo(P,e,null,t,b),E.push({event:P,listeners:B}),X?P.data=X:(X=er(t),X!==null&&(P.data=X)))),(X=Gd?Yd(e,t):Vd(e,t))&&(P=Di(m,"onBeforeInput"),0<P.length&&(B=new Jo("onBeforeInput","beforeinput",null,t,b),E.push({event:B,listeners:P}),B.data=X)),Um(E,e,m,t,b)}Qf(E,n)})}function dl(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Di(e,n){for(var t=n+"Capture",a=[];e!==null;){var l=e,i=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||i===null||(l=za(e,t),l!=null&&a.unshift(dl(e,l,i)),l=za(e,n),l!=null&&a.push(dl(e,l,i))),e.tag===3)return a;e=e.return}return[]}function Hm(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Yf(e,n,t,a,l){for(var i=n._reactName,u=[];t!==null&&t!==a;){var s=t,r=s.alternate,m=s.stateNode;if(s=s.tag,r!==null&&r===a)break;s!==5&&s!==26&&s!==27||m===null||(r=m,l?(m=za(t,i),m!=null&&u.unshift(dl(t,m,r))):l||(m=za(t,i),m!=null&&u.push(dl(t,m,r)))),t=t.return}u.length!==0&&e.push({event:n,listeners:u})}var Lm=/\r\n?/g,Qm=/\u0000|\uFFFD/g;function Vf(e){return(typeof e=="string"?e:""+e).replace(Lm,`
`).replace(Qm,"")}function $f(e,n){return n=Vf(n),Vf(e)===n}function se(e,n,t,a,l,i){switch(t){case"children":typeof a=="string"?n==="body"||n==="textarea"&&a===""||Kt(e,a):(typeof a=="number"||typeof a=="bigint")&&n!=="body"&&Kt(e,""+a);break;case"className":Ol(e,"class",a);break;case"tabIndex":Ol(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Ol(e,t,a);break;case"style":Vo(e,a,i);break;case"data":if(n!=="object"){Ol(e,"data",a);break}case"src":case"href":if(a===""&&(n!=="a"||t!=="href")){e.removeAttribute(t);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(t);break}a=Ul(""+a),e.setAttribute(t,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(t==="formAction"?(n!=="input"&&se(e,n,"name",l.name,l,null),se(e,n,"formEncType",l.formEncType,l,null),se(e,n,"formMethod",l.formMethod,l,null),se(e,n,"formTarget",l.formTarget,l,null)):(se(e,n,"encType",l.encType,l,null),se(e,n,"method",l.method,l,null),se(e,n,"target",l.target,l,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(t);break}a=Ul(""+a),e.setAttribute(t,a);break;case"onClick":a!=null&&(e.onclick=Un);break;case"onScroll":a!=null&&J("scroll",e);break;case"onScrollEnd":a!=null&&J("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(o(61));if(t=a.__html,t!=null){if(l.children!=null)throw Error(o(60));e.innerHTML=t}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}t=Ul(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,""+a):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":a===!0?e.setAttribute(t,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,a):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(t,a):e.removeAttribute(t);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(t):e.setAttribute(t,a);break;case"popover":J("beforetoggle",e),J("toggle",e),_l(e,"popover",a);break;case"xlinkActuate":jn(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":jn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":jn(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":jn(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":jn(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":jn(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":jn(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":jn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":jn(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":_l(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=dd.get(t)||t,_l(e,t,a))}}function Is(e,n,t,a,l,i){switch(t){case"style":Vo(e,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(o(61));if(t=a.__html,t!=null){if(l.children!=null)throw Error(o(60));e.innerHTML=t}}break;case"children":typeof a=="string"?Kt(e,a):(typeof a=="number"||typeof a=="bigint")&&Kt(e,""+a);break;case"onScroll":a!=null&&J("scroll",e);break;case"onScrollEnd":a!=null&&J("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Un);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Uo.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(l=t.endsWith("Capture"),n=t.slice(2,l?t.length-7:void 0),i=e[Ye]||null,i=i!=null?i[t]:null,typeof i=="function"&&e.removeEventListener(n,i,l),typeof a=="function")){typeof i!="function"&&i!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(n,a,l);break e}t in e?e[t]=a:a===!0?e.setAttribute(t,""):_l(e,t,a)}}}function Oe(e,n,t){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":J("error",e),J("load",e);var a=!1,l=!1,i;for(i in t)if(t.hasOwnProperty(i)){var u=t[i];if(u!=null)switch(i){case"src":a=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,n));default:se(e,n,i,u,t,null)}}l&&se(e,n,"srcSet",t.srcSet,t,null),a&&se(e,n,"src",t.src,t,null);return;case"input":J("invalid",e);var s=i=u=l=null,r=null,m=null;for(a in t)if(t.hasOwnProperty(a)){var b=t[a];if(b!=null)switch(a){case"name":l=b;break;case"type":u=b;break;case"checked":r=b;break;case"defaultChecked":m=b;break;case"value":i=b;break;case"defaultValue":s=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(o(137,n));break;default:se(e,n,a,b,t,null)}}Lo(e,i,s,r,m,u,l,!1);return;case"select":J("invalid",e),a=u=i=null;for(l in t)if(t.hasOwnProperty(l)&&(s=t[l],s!=null))switch(l){case"value":i=s;break;case"defaultValue":u=s;break;case"multiple":a=s;default:se(e,n,l,s,t,null)}n=i,t=u,e.multiple=!!a,n!=null?Jt(e,!!a,n,!1):t!=null&&Jt(e,!!a,t,!0);return;case"textarea":J("invalid",e),i=l=a=null;for(u in t)if(t.hasOwnProperty(u)&&(s=t[u],s!=null))switch(u){case"value":a=s;break;case"defaultValue":l=s;break;case"children":i=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(o(91));break;default:se(e,n,u,s,t,null)}Go(e,a,l,i);return;case"option":for(r in t)t.hasOwnProperty(r)&&(a=t[r],a!=null)&&(r==="selected"?e.selected=a&&typeof a!="function"&&typeof a!="symbol":se(e,n,r,a,t,null));return;case"dialog":J("beforetoggle",e),J("toggle",e),J("cancel",e),J("close",e);break;case"iframe":case"object":J("load",e);break;case"video":case"audio":for(a=0;a<pl.length;a++)J(pl[a],e);break;case"image":J("error",e),J("load",e);break;case"details":J("toggle",e);break;case"embed":case"source":case"link":J("error",e),J("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(m in t)if(t.hasOwnProperty(m)&&(a=t[m],a!=null))switch(m){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,n));default:se(e,n,m,a,t,null)}return;default:if(su(n)){for(b in t)t.hasOwnProperty(b)&&(a=t[b],a!==void 0&&Is(e,n,b,a,t,void 0));return}}for(s in t)t.hasOwnProperty(s)&&(a=t[s],a!=null&&se(e,n,s,a,t,null))}function Gm(e,n,t,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,i=null,u=null,s=null,r=null,m=null,b=null;for(y in t){var E=t[y];if(t.hasOwnProperty(y)&&E!=null)switch(y){case"checked":break;case"value":break;case"defaultValue":r=E;default:a.hasOwnProperty(y)||se(e,n,y,null,a,E)}}for(var g in a){var y=a[g];if(E=t[g],a.hasOwnProperty(g)&&(y!=null||E!=null))switch(g){case"type":i=y;break;case"name":l=y;break;case"checked":m=y;break;case"defaultChecked":b=y;break;case"value":u=y;break;case"defaultValue":s=y;break;case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(o(137,n));break;default:y!==E&&se(e,n,g,y,a,E)}}iu(e,u,s,r,m,b,i,l);return;case"select":y=u=s=g=null;for(i in t)if(r=t[i],t.hasOwnProperty(i)&&r!=null)switch(i){case"value":break;case"multiple":y=r;default:a.hasOwnProperty(i)||se(e,n,i,null,a,r)}for(l in a)if(i=a[l],r=t[l],a.hasOwnProperty(l)&&(i!=null||r!=null))switch(l){case"value":g=i;break;case"defaultValue":s=i;break;case"multiple":u=i;default:i!==r&&se(e,n,l,i,a,r)}n=s,t=u,a=y,g!=null?Jt(e,!!t,g,!1):!!a!=!!t&&(n!=null?Jt(e,!!t,n,!0):Jt(e,!!t,t?[]:"",!1));return;case"textarea":y=g=null;for(s in t)if(l=t[s],t.hasOwnProperty(s)&&l!=null&&!a.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:se(e,n,s,null,a,l)}for(u in a)if(l=a[u],i=t[u],a.hasOwnProperty(u)&&(l!=null||i!=null))switch(u){case"value":g=l;break;case"defaultValue":y=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(o(91));break;default:l!==i&&se(e,n,u,l,a,i)}Qo(e,g,y);return;case"option":for(var U in t)g=t[U],t.hasOwnProperty(U)&&g!=null&&!a.hasOwnProperty(U)&&(U==="selected"?e.selected=!1:se(e,n,U,null,a,g));for(r in a)g=a[r],y=t[r],a.hasOwnProperty(r)&&g!==y&&(g!=null||y!=null)&&(r==="selected"?e.selected=g&&typeof g!="function"&&typeof g!="symbol":se(e,n,r,g,a,y));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var H in t)g=t[H],t.hasOwnProperty(H)&&g!=null&&!a.hasOwnProperty(H)&&se(e,n,H,null,a,g);for(m in a)if(g=a[m],y=t[m],a.hasOwnProperty(m)&&g!==y&&(g!=null||y!=null))switch(m){case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(o(137,n));break;default:se(e,n,m,g,a,y)}return;default:if(su(n)){for(var oe in t)g=t[oe],t.hasOwnProperty(oe)&&g!==void 0&&!a.hasOwnProperty(oe)&&Is(e,n,oe,void 0,a,g);for(b in a)g=a[b],y=t[b],!a.hasOwnProperty(b)||g===y||g===void 0&&y===void 0||Is(e,n,b,g,a,y);return}}for(var p in t)g=t[p],t.hasOwnProperty(p)&&g!=null&&!a.hasOwnProperty(p)&&se(e,n,p,null,a,g);for(E in a)g=a[E],y=t[E],!a.hasOwnProperty(E)||g===y||g==null&&y==null||se(e,n,E,g,a,y)}function Xf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Ym(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,t=performance.getEntriesByType("resource"),a=0;a<t.length;a++){var l=t[a],i=l.transferSize,u=l.initiatorType,s=l.duration;if(i&&s&&Xf(u)){for(u=0,s=l.responseEnd,a+=1;a<t.length;a++){var r=t[a],m=r.startTime;if(m>s)break;var b=r.transferSize,E=r.initiatorType;b&&Xf(E)&&(r=r.responseEnd,u+=b*(r<s?1:(s-m)/(r-m)))}if(--a,n+=8*(i+u)/(l.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Js=null,Ks=null;function Mi(e){return e.nodeType===9?e:e.ownerDocument}function Zf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function wf(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Ps(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Fs=null;function Vm(){var e=window.event;return e&&e.type==="popstate"?e===Fs?!1:(Fs=e,!0):(Fs=null,!1)}var If=typeof setTimeout=="function"?setTimeout:void 0,$m=typeof clearTimeout=="function"?clearTimeout:void 0,Jf=typeof Promise=="function"?Promise:void 0,Xm=typeof queueMicrotask=="function"?queueMicrotask:typeof Jf<"u"?function(e){return Jf.resolve(null).then(e).catch(Zm)}:If;function Zm(e){setTimeout(function(){throw e})}function gt(e){return e==="head"}function Kf(e,n){var t=n,a=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"||t==="/&"){if(a===0){e.removeChild(l),Na(n);return}a--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")a++;else if(t==="html")ml(e.ownerDocument.documentElement);else if(t==="head"){t=e.ownerDocument.head,ml(t);for(var i=t.firstChild;i;){var u=i.nextSibling,s=i.nodeName;i[ja]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&i.rel.toLowerCase()==="stylesheet"||t.removeChild(i),i=u}}else t==="body"&&ml(e.ownerDocument.body);t=l}while(t);Na(n)}function Pf(e,n){var t=e;e=0;do{var a=t.nextSibling;if(t.nodeType===1?n?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(n?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),a&&a.nodeType===8)if(t=a.data,t==="/$"){if(e===0)break;e--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||e++;t=a}while(t)}function ks(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var t=n;switch(n=n.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":ks(t),au(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function wm(e,n,t,a){for(;e.nodeType===1;){var l=t;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[ja])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var i=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=hn(e.nextSibling),e===null)break}return null}function Im(e,n,t){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=hn(e.nextSibling),e===null))return null;return e}function Ff(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=hn(e.nextSibling),e===null))return null;return e}function Ws(e){return e.data==="$?"||e.data==="$~"}function eo(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Jm(e,n){var t=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||t.readyState!=="loading")n();else{var a=function(){n(),t.removeEventListener("DOMContentLoaded",a)};t.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function hn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var no=null;function kf(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"||t==="/&"){if(n===0)return hn(e.nextSibling);n--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||n++}e=e.nextSibling}return null}function Wf(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(n===0)return e;n--}else t!=="/$"&&t!=="/&"||n++}e=e.previousSibling}return null}function ep(e,n,t){switch(n=Mi(t),e){case"html":if(e=n.documentElement,!e)throw Error(o(452));return e;case"head":if(e=n.head,!e)throw Error(o(453));return e;case"body":if(e=n.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function ml(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);au(e)}var yn=new Map,np=new Set;function Ri(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Kn=R.d;R.d={f:Km,r:Pm,D:Fm,C:km,L:Wm,m:ev,X:tv,S:nv,M:av};function Km(){var e=Kn.f(),n=bi();return e||n}function Pm(e){var n=Zt(e);n!==null&&n.tag===5&&n.type==="form"?hc(n):Kn.r(e)}var Ea=typeof document>"u"?null:document;function tp(e,n,t){var a=Ea;if(a&&typeof n=="string"&&n){var l=cn(n);l='link[rel="'+e+'"][href="'+l+'"]',typeof t=="string"&&(l+='[crossorigin="'+t+'"]'),np.has(l)||(np.add(l),e={rel:e,crossOrigin:t,href:n},a.querySelector(l)===null&&(n=a.createElement("link"),Oe(n,"link",e),Te(n),a.head.appendChild(n)))}}function Fm(e){Kn.D(e),tp("dns-prefetch",e,null)}function km(e,n){Kn.C(e,n),tp("preconnect",e,n)}function Wm(e,n,t){Kn.L(e,n,t);var a=Ea;if(a&&e&&n){var l='link[rel="preload"][as="'+cn(n)+'"]';n==="image"&&t&&t.imageSrcSet?(l+='[imagesrcset="'+cn(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(l+='[imagesizes="'+cn(t.imageSizes)+'"]')):l+='[href="'+cn(e)+'"]';var i=l;switch(n){case"style":i=xa(e);break;case"script":i=Ta(e)}yn.has(i)||(e=L({rel:"preload",href:n==="image"&&t&&t.imageSrcSet?void 0:e,as:n},t),yn.set(i,e),a.querySelector(l)!==null||n==="style"&&a.querySelector(vl(i))||n==="script"&&a.querySelector(gl(i))||(n=a.createElement("link"),Oe(n,"link",e),Te(n),a.head.appendChild(n)))}}function ev(e,n){Kn.m(e,n);var t=Ea;if(t&&e){var a=n&&typeof n.as=="string"?n.as:"script",l='link[rel="modulepreload"][as="'+cn(a)+'"][href="'+cn(e)+'"]',i=l;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Ta(e)}if(!yn.has(i)&&(e=L({rel:"modulepreload",href:e},n),yn.set(i,e),t.querySelector(l)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(gl(i)))return}a=t.createElement("link"),Oe(a,"link",e),Te(a),t.head.appendChild(a)}}}function nv(e,n,t){Kn.S(e,n,t);var a=Ea;if(a&&e){var l=wt(a).hoistableStyles,i=xa(e);n=n||"default";var u=l.get(i);if(!u){var s={loading:0,preload:null};if(u=a.querySelector(vl(i)))s.loading=5;else{e=L({rel:"stylesheet",href:e,"data-precedence":n},t),(t=yn.get(i))&&to(e,t);var r=u=a.createElement("link");Te(r),Oe(r,"link",e),r._p=new Promise(function(m,b){r.onload=m,r.onerror=b}),r.addEventListener("load",function(){s.loading|=1}),r.addEventListener("error",function(){s.loading|=2}),s.loading|=4,_i(u,n,a)}u={type:"stylesheet",instance:u,count:1,state:s},l.set(i,u)}}}function tv(e,n){Kn.X(e,n);var t=Ea;if(t&&e){var a=wt(t).hoistableScripts,l=Ta(e),i=a.get(l);i||(i=t.querySelector(gl(l)),i||(e=L({src:e,async:!0},n),(n=yn.get(l))&&ao(e,n),i=t.createElement("script"),Te(i),Oe(i,"link",e),t.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(l,i))}}function av(e,n){Kn.M(e,n);var t=Ea;if(t&&e){var a=wt(t).hoistableScripts,l=Ta(e),i=a.get(l);i||(i=t.querySelector(gl(l)),i||(e=L({src:e,async:!0,type:"module"},n),(n=yn.get(l))&&ao(e,n),i=t.createElement("script"),Te(i),Oe(i,"link",e),t.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(l,i))}}function ap(e,n,t,a){var l=(l=w.current)?Ri(l):null;if(!l)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(n=xa(t.href),t=wt(l).hoistableStyles,a=t.get(n),a||(a={type:"style",instance:null,count:0,state:null},t.set(n,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=xa(t.href);var i=wt(l).hoistableStyles,u=i.get(e);if(u||(l=l.ownerDocument||l,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,u),(i=l.querySelector(vl(e)))&&!i._p&&(u.instance=i,u.state.loading=5),yn.has(e)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},yn.set(e,t),i||lv(l,e,t,u.state))),n&&a===null)throw Error(o(528,""));return u}if(n&&a!==null)throw Error(o(529,""));return null;case"script":return n=t.async,t=t.src,typeof t=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Ta(t),t=wt(l).hoistableScripts,a=t.get(n),a||(a={type:"script",instance:null,count:0,state:null},t.set(n,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function xa(e){return'href="'+cn(e)+'"'}function vl(e){return'link[rel="stylesheet"]['+e+"]"}function lp(e){return L({},e,{"data-precedence":e.precedence,precedence:null})}function lv(e,n,t,a){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?a.loading=1:(n=e.createElement("link"),a.preload=n,n.addEventListener("load",function(){return a.loading|=1}),n.addEventListener("error",function(){return a.loading|=2}),Oe(n,"link",t),Te(n),e.head.appendChild(n))}function Ta(e){return'[src="'+cn(e)+'"]'}function gl(e){return"script[async]"+e}function ip(e,n,t){if(n.count++,n.instance===null)switch(n.type){case"style":var a=e.querySelector('style[data-href~="'+cn(t.href)+'"]');if(a)return n.instance=a,Te(a),a;var l=L({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Te(a),Oe(a,"style",l),_i(a,t.precedence,e),n.instance=a;case"stylesheet":l=xa(t.href);var i=e.querySelector(vl(l));if(i)return n.state.loading|=4,n.instance=i,Te(i),i;a=lp(t),(l=yn.get(l))&&to(a,l),i=(e.ownerDocument||e).createElement("link"),Te(i);var u=i;return u._p=new Promise(function(s,r){u.onload=s,u.onerror=r}),Oe(i,"link",a),n.state.loading|=4,_i(i,t.precedence,e),n.instance=i;case"script":return i=Ta(t.src),(l=e.querySelector(gl(i)))?(n.instance=l,Te(l),l):(a=t,(l=yn.get(i))&&(a=L({},t),ao(a,l)),e=e.ownerDocument||e,l=e.createElement("script"),Te(l),Oe(l,"link",a),e.head.appendChild(l),n.instance=l);case"void":return null;default:throw Error(o(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(a=n.instance,n.state.loading|=4,_i(a,t.precedence,e));return n.instance}function _i(e,n,t){for(var a=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=a.length?a[a.length-1]:null,i=l,u=0;u<a.length;u++){var s=a[u];if(s.dataset.precedence===n)i=s;else if(i!==l)break}i?i.parentNode.insertBefore(e,i.nextSibling):(n=t.nodeType===9?t.head:t,n.insertBefore(e,n.firstChild))}function to(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function ao(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Oi=null;function up(e,n,t){if(Oi===null){var a=new Map,l=Oi=new Map;l.set(t,a)}else l=Oi,a=l.get(t),a||(a=new Map,l.set(t,a));if(a.has(e))return a;for(a.set(e,null),t=t.getElementsByTagName(e),l=0;l<t.length;l++){var i=t[l];if(!(i[ja]||i[De]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(n)||"";u=e+u;var s=a.get(u);s?s.push(i):a.set(u,[i])}}return a}function sp(e,n,t){e=e.ownerDocument||e,e.head.insertBefore(t,n==="title"?e.querySelector("head > title"):null)}function iv(e,n,t){if(t===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function op(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function uv(e,n,t,a){if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var l=xa(a.href),i=n.querySelector(vl(l));if(i){n=i._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=ji.bind(e),n.then(e,e)),t.state.loading|=4,t.instance=i,Te(i);return}i=n.ownerDocument||n,a=lp(a),(l=yn.get(l))&&to(a,l),i=i.createElement("link"),Te(i);var u=i;u._p=new Promise(function(s,r){u.onload=s,u.onerror=r}),Oe(i,"link",a),t.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(t,n),(n=t.state.preload)&&(t.state.loading&3)===0&&(e.count++,t=ji.bind(e),n.addEventListener("load",t),n.addEventListener("error",t))}}var lo=0;function sv(e,n){return e.stylesheets&&e.count===0&&zi(e,e.stylesheets),0<e.count||0<e.imgCount?function(t){var a=setTimeout(function(){if(e.stylesheets&&zi(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+n);0<e.imgBytes&&lo===0&&(lo=62500*Ym());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&zi(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>lo?50:800)+n);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(l)}}:null}function ji(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)zi(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ui=null;function zi(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ui=new Map,n.forEach(ov,e),Ui=null,ji.call(e))}function ov(e,n){if(!(n.state.loading&4)){var t=Ui.get(e);if(t)var a=t.get(null);else{t=new Map,Ui.set(e,t);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<l.length;i++){var u=l[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(t.set(u.dataset.precedence,u),a=u)}a&&t.set(null,a)}l=n.instance,u=l.getAttribute("data-precedence"),i=t.get(u)||a,i===a&&t.set(null,l),t.set(u,l),this.count++,a=ji.bind(this),l.addEventListener("load",a),l.addEventListener("error",a),i?i.parentNode.insertBefore(l,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),n.state.loading|=4}}var hl={$$typeof:je,Provider:null,Consumer:null,_currentValue:Q,_currentValue2:Q,_threadCount:0};function rv(e,n,t,a,l,i,u,s,r){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Wi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wi(0),this.hiddenUpdates=Wi(null),this.identifierPrefix=a,this.onUncaughtError=l,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=r,this.incompleteTransitions=new Map}function rp(e,n,t,a,l,i,u,s,r,m,b,E){return e=new rv(e,n,t,u,r,m,b,E,s),n=1,i===!0&&(n|=24),i=en(3,null,null,n),e.current=i,i.stateNode=e,n=Hu(),n.refCount++,e.pooledCache=n,n.refCount++,i.memoizedState={element:a,isDehydrated:t,cache:n},Yu(i),e}function cp(e){return e?(e=ta,e):ta}function fp(e,n,t,a,l,i){l=cp(l),a.context===null?a.context=l:a.pendingContext=l,a=it(n),a.payload={element:t},i=i===void 0?null:i,i!==null&&(a.callback=i),t=ut(e,a,n),t!==null&&(Ie(t,e,n),Ka(t,e,n))}function pp(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function io(e,n){pp(e,n),(e=e.alternate)&&pp(e,n)}function dp(e){if(e.tag===13||e.tag===31){var n=Rt(e,67108864);n!==null&&Ie(n,e,67108864),io(e,67108864)}}function mp(e){if(e.tag===13||e.tag===31){var n=un();n=eu(n);var t=Rt(e,n);t!==null&&Ie(t,e,n),io(e,n)}}var Bi=!0;function cv(e,n,t,a){var l=A.T;A.T=null;var i=R.p;try{R.p=2,uo(e,n,t,a)}finally{R.p=i,A.T=l}}function fv(e,n,t,a){var l=A.T;A.T=null;var i=R.p;try{R.p=8,uo(e,n,t,a)}finally{R.p=i,A.T=l}}function uo(e,n,t,a){if(Bi){var l=so(a);if(l===null)ws(e,n,a,qi,t),gp(e,a);else if(dv(l,e,n,t,a))a.stopPropagation();else if(gp(e,a),n&4&&-1<pv.indexOf(e)){for(;l!==null;){var i=Zt(l);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=xt(i.pendingLanes);if(u!==0){var s=i;for(s.pendingLanes|=2,s.entangledLanes|=2;u;){var r=1<<31-ke(u);s.entanglements[1]|=r,u&=~r}Rn(i),(ne&6)===0&&(yi=Pe()+500,fl(0))}}break;case 31:case 13:s=Rt(i,2),s!==null&&Ie(s,i,2),bi(),io(i,2)}if(i=so(a),i===null&&ws(e,n,a,qi,t),i===l)break;l=i}l!==null&&a.stopPropagation()}else ws(e,n,a,null,t)}}function so(e){return e=ru(e),oo(e)}var qi=null;function oo(e){if(qi=null,e=Xt(e),e!==null){var n=D(e);if(n===null)e=null;else{var t=n.tag;if(t===13){if(e=O(n),e!==null)return e;e=null}else if(t===31){if(e=Z(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return qi=e,null}function vp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Fp()){case Co:return 2;case Eo:return 8;case Tl:case kp:return 32;case xo:return 268435456;default:return 32}default:return 32}}var ro=!1,ht=null,yt=null,St=null,yl=new Map,Sl=new Map,bt=[],pv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function gp(e,n){switch(e){case"focusin":case"focusout":ht=null;break;case"dragenter":case"dragleave":yt=null;break;case"mouseover":case"mouseout":St=null;break;case"pointerover":case"pointerout":yl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sl.delete(n.pointerId)}}function bl(e,n,t,a,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:a,nativeEvent:i,targetContainers:[l]},n!==null&&(n=Zt(n),n!==null&&dp(n)),e):(e.eventSystemFlags|=a,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function dv(e,n,t,a,l){switch(n){case"focusin":return ht=bl(ht,e,n,t,a,l),!0;case"dragenter":return yt=bl(yt,e,n,t,a,l),!0;case"mouseover":return St=bl(St,e,n,t,a,l),!0;case"pointerover":var i=l.pointerId;return yl.set(i,bl(yl.get(i)||null,e,n,t,a,l)),!0;case"gotpointercapture":return i=l.pointerId,Sl.set(i,bl(Sl.get(i)||null,e,n,t,a,l)),!0}return!1}function hp(e){var n=Xt(e.target);if(n!==null){var t=D(n);if(t!==null){if(n=t.tag,n===13){if(n=O(t),n!==null){e.blockedOn=n,_o(e.priority,function(){mp(t)});return}}else if(n===31){if(n=Z(t),n!==null){e.blockedOn=n,_o(e.priority,function(){mp(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Hi(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=so(e.nativeEvent);if(t===null){t=e.nativeEvent;var a=new t.constructor(t.type,t);ou=a,t.target.dispatchEvent(a),ou=null}else return n=Zt(t),n!==null&&dp(n),e.blockedOn=t,!1;n.shift()}return!0}function yp(e,n,t){Hi(e)&&t.delete(n)}function mv(){ro=!1,ht!==null&&Hi(ht)&&(ht=null),yt!==null&&Hi(yt)&&(yt=null),St!==null&&Hi(St)&&(St=null),yl.forEach(yp),Sl.forEach(yp)}function Li(e,n){e.blockedOn===n&&(e.blockedOn=null,ro||(ro=!0,v.unstable_scheduleCallback(v.unstable_NormalPriority,mv)))}var Qi=null;function Sp(e){Qi!==e&&(Qi=e,v.unstable_scheduleCallback(v.unstable_NormalPriority,function(){Qi===e&&(Qi=null);for(var n=0;n<e.length;n+=3){var t=e[n],a=e[n+1],l=e[n+2];if(typeof a!="function"){if(oo(a||t)===null)continue;break}var i=Zt(t);i!==null&&(e.splice(n,3),n-=3,ss(i,{pending:!0,data:l,method:t.method,action:a},a,l))}}))}function Na(e){function n(r){return Li(r,e)}ht!==null&&Li(ht,e),yt!==null&&Li(yt,e),St!==null&&Li(St,e),yl.forEach(n),Sl.forEach(n);for(var t=0;t<bt.length;t++){var a=bt[t];a.blockedOn===e&&(a.blockedOn=null)}for(;0<bt.length&&(t=bt[0],t.blockedOn===null);)hp(t),t.blockedOn===null&&bt.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(a=0;a<t.length;a+=3){var l=t[a],i=t[a+1],u=l[Ye]||null;if(typeof i=="function")u||Sp(t);else if(u){var s=null;if(i&&i.hasAttribute("formAction")){if(l=i,u=i[Ye]||null)s=u.formAction;else if(oo(l)!==null)continue}else s=u.action;typeof s=="function"?t[a+1]=s:(t.splice(a,3),a-=3),Sp(t)}}}function bp(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return l=u})},focusReset:"manual",scroll:"manual"})}function n(){l!==null&&(l(),l=null),a||setTimeout(t,20)}function t(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(t,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),l!==null&&(l(),l=null)}}}function co(e){this._internalRoot=e}Gi.prototype.render=co.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(o(409));var t=n.current,a=un();fp(t,a,e,n,null,null)},Gi.prototype.unmount=co.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;fp(e.current,2,null,e,null,null),bi(),n[$t]=null}};function Gi(e){this._internalRoot=e}Gi.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ro();e={blockedOn:null,target:e,priority:n};for(var t=0;t<bt.length&&n!==0&&n<bt[t].priority;t++);bt.splice(t,0,e),t===0&&hp(e)}};var Ap=S.version;if(Ap!=="19.2.3")throw Error(o(527,Ap,"19.2.3"));R.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=T(n),e=e!==null?G(e):null,e=e===null?null:e.stateNode,e};var vv={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:A,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yi.isDisabled&&Yi.supportsFiber)try{Ra=Yi.inject(vv),Fe=Yi}catch{}}return Cl.createRoot=function(e,n){if(!N(e))throw Error(o(299));var t=!1,a="",l=Dc,i=Mc,u=Rc;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(i=n.onCaughtError),n.onRecoverableError!==void 0&&(u=n.onRecoverableError)),n=rp(e,1,!1,null,null,t,a,null,l,i,u,bp),e[$t]=n.current,Zs(e),new co(n)},Cl.hydrateRoot=function(e,n,t){if(!N(e))throw Error(o(299));var a=!1,l="",i=Dc,u=Mc,s=Rc,r=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError),t.formState!==void 0&&(r=t.formState)),n=rp(e,1,!0,n,t??null,a,l,r,i,u,s,bp),n.context=cp(null),t=n.current,a=un(),a=eu(a),l=it(a),l.callback=null,ut(t,l,a),t=a,n.current.lanes=t,Oa(n,t),Rn(n),e[$t]=n.current,Zs(e),new Gi(n)},Cl.version="19.2.3",Cl}var Op;function Tv(){if(Op)return mo.exports;Op=1;function v(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v)}catch(S){console.error(S)}}return v(),mo.exports=xv(),mo.exports}var Nv=Tv();const Dv=`# Documentation API pour MCP - Cours, Menu, Categorie, Exercice, QCM

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
`,Mv=`# Configuration de l'URL SPA

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
`,Rv="# Installation du projet et démarrage\n\n## Objectif\nInstaller le projet sur une nouvelle machine et le démarrer rapidement.\n\n## Prérequis\n- Git\n- Docker + Docker Compose (plugin `docker compose`)\n- Accès au dépôt (URL du repo)\n\n## 1) Cloner le projet\n```bash\ngit clone <url-du-repo>\ncd devdoc-local\n```\n\n## 2) Configurer l'environnement\nCopier la configuration locale :\n```bash\ncp .env.local.example .env.local\n```\n\nDans `.env.local`, ajuster :\n- `N8N_API_KEY`\n- `API_ADMIN_USER_EMAIL`\n\nVérifier la base de données :\n- Le service `db` est défini dans `compose.yaml` avec `MYSQL_DATABASE: courTotal`.\n- Le fichier `.env` pointe actuellement vers `DATABASE_URL=.../courto`.\n\n👉 **Important** : aligner `DATABASE_URL` dans `.env` avec `MYSQL_DATABASE` dans `compose.yaml` (même nom de base).\n\n## 3) Démarrer les conteneurs (allumage)\n```bash\ndocker compose up -d --build\n```\n\nLes services principaux :\n- Symfony + Nginx : `http://localhost:8080`\n- Front Vite : `http://localhost:5173`\n- PhpMyAdmin : `http://localhost:8081`\n\n## 4) Installer les dépendances PHP\n```bash\ndocker compose exec php composer install\n```\n\n## 5) Base de données\nCréer la base et lancer les migrations :\n```bash\ndocker compose exec php php bin/console doctrine:database:create\n\ndocker compose exec php php bin/console doctrine:migrations:migrate\n```\n\n### (Optionnel) Restaurer un backup\nSi vous avez un fichier SQL :\n```bash\n./restore-db.sh <fichier_backup.sql>\n```\n\n## 6) Vérifier que tout tourne\n```bash\ndocker compose ps\n```\n\n## Commandes utiles (allumage / extinction)\n```bash\n# Démarrer\ndocker compose up -d\n\n# Arrêter\ndocker compose down\n\n# Logs\ndocker compose logs -f\n\n# Rebuild complet\ndocker compose up -d --build\n```\n\n## Dépannage rapide\n- **Ports déjà pris** : modifier les ports dans `compose.yaml`.\n- **DB inaccessible** : vérifier `DATABASE_URL` et `MYSQL_DATABASE`.\n- **Symfony affiche une page blanche** : `docker compose logs -f php` et `docker compose logs -f nginx`.\n",_v=`# 📄 Système de Pages Dynamiques - DevDoc

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

Cette architecture permet de créer facilement des centaines de pages de documentation technique avec une interface utilisateur moderne et une administration simple !`,Ov=`# Système de Recherche - Mobile et Desktop

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
`,jv=`# Sécurité HTML API - Backend Symfony

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
`,Uv=`# Utilisation du backoffice (EasyAdmin)

## Accès
- Connexion : \`http://localhost:8080/login\`
- Backoffice : \`http://localhost:8080/admin\`

⚠️ L'utilisateur doit avoir le rôle \`ROLE_ADMIN\` pour accéder à l'admin.

## Sections principales
Dans le menu EasyAdmin :
- **Navigation** : Categories, Menus, Pages, Positions, SuperMenus
- **Cours** : PageContents
- **SEO** : SEO (si besoin)
- **Config** : Config globale

## Workflow conseillé : ajouter une page + menu
### 1) (Optionnel) Créer une Position de menu
Menu : **Navigation → Positions**
- Exemple : \`Header\`, \`Sidebar\`, \`Footer\`

### 2) (Optionnel) Créer un SuperMenu
Menu : **Navigation → SuperMenus**
- Permet de regrouper plusieurs catégories.

### 3) Créer une Category
Menu : **Navigation → Categories**
Champs utiles :
- **Name** : nom de la catégorie (ex: "Symfony")
- **PositionMenus** : position d'affichage
- **SuperMenu** : regroupement (si utilisé)
- **Visible** : afficher/masquer
- **Couleur / Description** : optionnel

### 4) Créer un Menu
Menu : **Navigation → Menus**
Champs utiles :
- **Label** : libellé du menu (ex: "Installation")
- **Category** : la catégorie parent
- **PositionMenus** : position d'affichage
- **NiveauCours** : si utilisé

### 5) Créer une Page
Menu : **Navigation → Pages**
Champs utiles :
- **Slug** : URL de la page (ex: \`/symfony/installation\`)
- **Menus** : associer le menu créé

### 6) Ajouter le contenu (PageContent)
Menu : **Cours → PageContents**
Champs utiles :
- **Title** : titre affiché
- **Page** : la page créée
- **Category** : la catégorie
- **Menu** : le menu
- **Content** : texte HTML (sanitisé automatiquement)
- **Code** : blocs de code HTML (sanitisé automatiquement)
- **Visible** : afficher/masquer
- **Type / NiveauCours** : optionnel

✅ La page apparaît automatiquement côté front.

## Bonnes pratiques
- Toujours renseigner **Category + Menu + Page** pour éviter les pages orphelines.
- Garder un **slug unique** et commencer par \`/\`.
- Utiliser **Visible = false** pour préparer du contenu sans publication.
- En cas de souci d'affichage, vérifier les logs : \`docker compose logs -f php\`.
`,zv=`# Filtrage des Catégories/Menus/PageContents par Niveau de Cours

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
`,Bv=`# Architecture Hexagonale - Plan de Migration

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
`,qv=`# Architecture Pragmatique Vue.js - Plan de Migration

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
`,Hv='# Documentation des Composants UI\n\nCette documentation décrit l\'utilisation des composants UI réutilisables de l\'application.\n\n---\n\n## Table des matières\n\n1. [AppButton](#appbutton)\n2. [AppInput](#appinput)\n3. [AppSelect](#appselect)\n4. [AppCard](#appcard)\n5. [AppModal](#appmodal)\n6. [AppAlert](#appalert)\n7. [AppBadge](#appbadge)\n8. [NiveauFilter](#niveaufilter)\n9. [SafeHtml](#safehtml)\n\n---\n\n## AppButton\n\nBouton réutilisable avec plusieurs variantes et états.\n\n### Import\n\n```javascript\nimport AppButton from \'@/components/ui/AppButton.vue\'\n```\n\n### Props\n\n| Prop | Type | Défaut | Description |\n|------|------|--------|-------------|\n| `type` | `String` | `\'button\'` | Type HTML : `button`, `submit`, `reset` |\n| `variant` | `String` | `\'primary\'` | Style : `primary`, `secondary`, `danger`, `success`, `warning`, `ghost`, `outline`, `profile`, `auth`, `favorite`, `unfavorite`, `neutral` |\n| `size` | `String` | `\'md\'` | Taille : `xs`, `sm`, `md`, `lg`, `xl` |\n| `icon` | `String` | `null` | Classe d\'icône (PrimeIcons ou FontAwesome) |\n| `iconPosition` | `String` | `\'left\'` | Position de l\'icône : `left`, `right` |\n| `textContent` | `String` | `null` | Texte du bouton |\n| `disabled` | `Boolean` | `false` | État désactivé |\n| `loading` | `Boolean` | `false` | Affiche un spinner |\n| `fullWidth` | `Boolean` | `false` | Pleine largeur |\n| `rounded` | `String` | `\'md\'` | Arrondi : `none`, `sm`, `md`, `lg`, `full` |\n| `bgHover` | `String` | `\'\'` | Classes Tailwind pour le hover |\n| `hoverBgColor` | `String` | `\'\'` | Couleur hex pour le hover |\n\n### Events\n\n| Event | Description |\n|-------|-------------|\n| `@click` | Émis au clic |\n\n### Exemples\n\n```vue\n<!-- Bouton simple -->\n<AppButton text-content="Cliquer" />\n\n<!-- Avec icône -->\n<AppButton\n  variant="success"\n  icon="pi pi-check"\n  text-content="Valider"\n/>\n\n<!-- État loading -->\n<AppButton\n  :loading="isLoading"\n  text-content="Enregistrer"\n/>\n\n<!-- Outline avec taille -->\n<AppButton\n  variant="outline"\n  size="lg"\n  text-content="En savoir plus"\n/>\n\n<!-- Bouton danger pleine largeur -->\n<AppButton\n  variant="danger"\n  full-width\n  text-content="Supprimer"\n/>\n```\n\n---\n\n## AppInput\n\nChamp de saisie polyvalent (texte, password, textarea, select).\n\n### Import\n\n```javascript\nimport AppInput from \'@/components/ui/AppInput.vue\'\n```\n\n### Props\n\n| Prop | Type | Défaut | Description |\n|------|------|--------|-------------|\n| `v-model` | `String/Number/Array` | `\'\'` | Valeur liée |\n| `type` | `String` | `\'text\'` | Type : `text`, `password`, `email`, `number`, `textarea`, `select` |\n| `label` | `String` | `null` | Label du champ |\n| `placeholder` | `String` | `\'\'` | Placeholder |\n| `size` | `String` | `\'default\'` | Taille : `large`, `default`, `small` |\n| `disabled` | `Boolean` | `false` | Désactivé |\n| `readonly` | `Boolean` | `false` | Lecture seule |\n| `required` | `Boolean` | `false` | Affiche un astérisque rouge |\n| `clearable` | `Boolean` | `false` | Bouton pour effacer |\n| `maxlength` | `Number` | `null` | Longueur maximale |\n| `prefixIcon` | `String` | `null` | Icône avant |\n| `suffixIcon` | `String` | `null` | Icône après |\n| `error` | `String` | `null` | Message d\'erreur |\n| `helpText` | `String` | `null` | Texte d\'aide |\n| `options` | `Array` | `[]` | Options pour select |\n| `multiple` | `Boolean` | `false` | Select multiple |\n| `filterable` | `Boolean` | `false` | Select filtrable |\n| `rows` | `Number` | `3` | Lignes pour textarea |\n| `autosize` | `Boolean/Object` | `false` | Auto-redimensionnement textarea |\n| `showWordLimit` | `Boolean` | `false` | Affiche le compteur de caractères |\n\n### Events\n\n| Event | Description |\n|-------|-------------|\n| `@update:modelValue` | Mise à jour de la valeur |\n| `@change` | Changement de valeur |\n| `@input` | Saisie en cours |\n| `@blur` | Perte de focus |\n| `@focus` | Obtention du focus |\n\n### Exemples\n\n```vue\n<!-- Input texte avec label -->\n<AppInput\n  v-model="email"\n  type="email"\n  label="Email"\n  placeholder="votre@email.com"\n  required\n/>\n\n<!-- Password -->\n<AppInput\n  v-model="password"\n  type="password"\n  label="Mot de passe"\n/>\n\n<!-- Textarea avec compteur -->\n<AppInput\n  v-model="description"\n  type="textarea"\n  label="Description"\n  :maxlength="500"\n  show-word-limit\n/>\n\n<!-- Input avec erreur -->\n<AppInput\n  v-model="username"\n  label="Nom d\'utilisateur"\n  error="Ce nom est déjà pris"\n/>\n\n<!-- Select -->\n<AppInput\n  v-model="country"\n  type="select"\n  label="Pays"\n  :options="[\n    { label: \'France\', value: \'FR\' },\n    { label: \'Belgique\', value: \'BE\' }\n  ]"\n/>\n```\n\n---\n\n## AppSelect\n\nSélecteur avancé avec support cascader.\n\n### Import\n\n```javascript\nimport AppSelect from \'@/components/ui/AppSelect.vue\'\n```\n\n### Props\n\n| Prop | Type | Défaut | Description |\n|------|------|--------|-------------|\n| `v-model` | `String/Number/Array/Boolean` | `null` | Valeur sélectionnée |\n| `options` | `Array` | `[]` | Options disponibles |\n| `optionLabel` | `String` | `\'label\'` | Clé pour le label |\n| `optionValue` | `String` | `\'value\'` | Clé pour la valeur |\n| `placeholder` | `String` | `\'Sélectionnez\'` | Placeholder |\n| `label` | `String` | `null` | Label du champ |\n| `size` | `String` | `\'default\'` | Taille : `large`, `default`, `small` |\n| `multiple` | `Boolean` | `false` | Sélection multiple |\n| `filterable` | `Boolean` | `false` | Filtrage des options |\n| `clearable` | `Boolean` | `false` | Bouton effacer |\n| `disabled` | `Boolean` | `false` | Désactivé |\n| `required` | `Boolean` | `false` | Requis |\n| `cascader` | `Boolean` | `false` | Mode cascader |\n| `cascaderProps` | `Object` | `{value, label, children}` | Configuration cascader |\n| `collapseTags` | `Boolean` | `false` | Réduire les tags (multiple) |\n| `showAllLevels` | `Boolean` | `true` | Afficher tous les niveaux (cascader) |\n| `error` | `String` | `null` | Message d\'erreur |\n| `helpText` | `String` | `null` | Texte d\'aide |\n\n### Events\n\n| Event | Description |\n|-------|-------------|\n| `@update:modelValue` | Mise à jour |\n| `@change` | Changement |\n| `@blur` | Perte de focus |\n| `@focus` | Obtention du focus |\n\n### Exemples\n\n```vue\n<!-- Select simple -->\n<AppSelect\n  v-model="niveau"\n  :options="niveaux"\n  option-label="name"\n  option-value="id"\n  placeholder="Choisir un niveau"\n/>\n\n<!-- Select multiple filtrable -->\n<AppSelect\n  v-model="categories"\n  :options="categoryList"\n  multiple\n  filterable\n  clearable\n  placeholder="Sélectionner les catégories"\n/>\n\n<!-- Cascader -->\n<AppSelect\n  v-model="location"\n  :options="locationTree"\n  cascader\n  placeholder="Région > Ville"\n/>\n```\n\n---\n\n## AppCard\n\nCarte pour afficher des listes d\'items.\n\n### Import\n\n```javascript\nimport AppCard from \'@/components/ui/AppCard.vue\'\n```\n\n### Props\n\n| Prop | Type | Défaut | Description |\n|------|------|--------|-------------|\n| `title` | `String` | **requis** | Titre de la carte |\n| `icon` | `String` | `\'fas fa-code\'` | Icône du header |\n| `items` | `Array` | `[]` | Liste d\'items |\n| `clickable` | `Boolean` | `false` | Items cliquables |\n| `showFooter` | `Boolean` | `false` | Afficher le footer |\n| `showTopBorder` | `Boolean` | `false` | Bordure décorative en haut |\n| `footerText` | `String` | `\'items\'` | Texte du footer |\n| `footerIcon` | `String` | `\'fas fa-list\'` | Icône du footer |\n| `borderClass` | `String` | `\'border-l-pink-500\'` | Classe bordure gauche |\n\n### Slots\n\n| Slot | Description |\n|------|-------------|\n| `default` | Contenu principal |\n| `header` | Header personnalisé |\n| `item` | Template pour chaque item (props: `item`, `index`) |\n| `footer` | Footer personnalisé |\n\n### Events\n\n| Event | Description |\n|-------|-------------|\n| `@item-click` | Clic sur un item |\n\n### Exemples\n\n```vue\n<!-- Carte simple -->\n<AppCard\n  title="Mes cours"\n  icon="fas fa-book"\n  :items="courses"\n  show-footer\n  footer-text="cours"\n/>\n\n<!-- Avec slot item personnalisé -->\n<AppCard title="Utilisateurs" :items="users">\n  <template #item="{ item }">\n    <div class="flex items-center gap-2">\n      <img :src="item.avatar" class="w-8 h-8 rounded-full" />\n      <span>{{ item.name }}</span>\n    </div>\n  </template>\n</AppCard>\n```\n\n---\n\n## AppModal\n\nModal (popup) avec gestion complète.\n\n### Import\n\n```javascript\nimport AppModal from \'@/components/ui/AppModal.vue\'\n```\n\n### Props\n\n| Prop | Type | Défaut | Description |\n|------|------|--------|-------------|\n| `v-model` | `Boolean` | `false` | Visibilité |\n| `title` | `String` | `\'\'` | Titre |\n| `icon` | `String` | `null` | Icône du titre |\n| `size` | `String` | `\'md\'` | Taille : `xs`, `sm`, `md`, `lg`, `xl`, `full` |\n| `position` | `String` | `\'center\'` | Position : `center`, `top`, `bottom` |\n| `closable` | `Boolean` | `true` | Bouton fermer visible |\n| `closeOnBackdrop` | `Boolean` | `true` | Ferme au clic sur le fond |\n| `closeOnEscape` | `Boolean` | `true` | Ferme avec Escape |\n| `persistent` | `Boolean` | `false` | Empêche la fermeture |\n| `showHeader` | `Boolean` | `true` | Afficher le header |\n| `showFooter` | `Boolean` | `false` | Afficher le footer |\n| `bodyPadding` | `String` | `\'md\'` | Padding : `none`, `sm`, `md`, `lg`, `xl` |\n| `backdropBlur` | `Boolean` | `true` | Flou sur le fond |\n| `showCancelButton` | `Boolean` | `false` | Bouton annuler |\n| `showConfirmButton` | `Boolean` | `false` | Bouton confirmer |\n| `cancelText` | `String` | `\'Annuler\'` | Texte annuler |\n| `confirmText` | `String` | `\'Confirmer\'` | Texte confirmer |\n| `confirmVariant` | `String` | `\'primary\'` | Variante du bouton confirmer |\n| `loading` | `Boolean` | `false` | État loading du bouton confirmer |\n\n### Slots\n\n| Slot | Description |\n|------|-------------|\n| `default` | Contenu du body |\n| `header` | Header personnalisé |\n| `footer` | Footer personnalisé |\n\n### Events\n\n| Event | Description |\n|-------|-------------|\n| `@update:modelValue` | Changement de visibilité |\n| `@open` | Ouverture |\n| `@close` | Fermeture |\n| `@confirm` | Clic sur confirmer |\n| `@cancel` | Clic sur annuler |\n\n### Exemples\n\n```vue\n<!-- Modal simple -->\n<AppModal v-model="showModal" title="Confirmation">\n  <p>Êtes-vous sûr de vouloir continuer ?</p>\n</AppModal>\n\n<!-- Modal avec footer -->\n<AppModal\n  v-model="showDelete"\n  title="Supprimer"\n  icon="pi pi-trash"\n  show-footer\n  show-cancel-button\n  show-confirm-button\n  confirm-text="Supprimer"\n  confirm-variant="danger"\n  @confirm="handleDelete"\n>\n  <p>Cette action est irréversible.</p>\n</AppModal>\n\n<!-- Modal persistante (ne peut être fermée qu\'avec le bouton) -->\n<AppModal\n  v-model="showForced"\n  title="Action requise"\n  persistent\n  :closable="false"\n>\n  <p>Veuillez compléter cette action.</p>\n</AppModal>\n```\n\n---\n\n## AppAlert\n\nAlertes et notifications.\n\n### Import\n\n```javascript\nimport AppAlert from \'@/components/ui/AppAlert.vue\'\n```\n\n### Props\n\n| Prop | Type | Défaut | Description |\n|------|------|--------|-------------|\n| `v-model` | `Boolean` | `false` | Visibilité |\n| `show` | `Boolean` | `false` | Alternative à v-model |\n| `type` | `String` | `\'info\'` | Type : `success`, `error`, `warning`, `info` |\n| `variant` | `String` | `\'solid\'` | Style : `solid`, `light`, `outline` |\n| `title` | `String` | `null` | Titre de l\'alerte |\n| `message` | `String` | `null` | Message |\n| `dismissible` | `Boolean` | `true` | Peut être fermée |\n\n### Slots\n\n| Slot | Description |\n|------|-------------|\n| `default` | Contenu personnalisé |\n\n### Events\n\n| Event | Description |\n|-------|-------------|\n| `@update:modelValue` | Changement de visibilité |\n| `@close` | Fermeture |\n\n### Exemples\n\n```vue\n<!-- Alerte succès -->\n<AppAlert\n  type="success"\n  title="Succès !"\n  message="Votre modification a été enregistrée."\n  show\n/>\n\n<!-- Alerte erreur avec v-model -->\n<AppAlert\n  v-model="showError"\n  type="error"\n  title="Erreur"\n  message="Une erreur est survenue."\n/>\n\n<!-- Alerte light -->\n<AppAlert\n  type="warning"\n  variant="light"\n  message="Attention, cette action est risquée."\n  show\n/>\n\n<!-- Alerte non fermable -->\n<AppAlert\n  type="info"\n  :dismissible="false"\n  message="Information importante."\n  show\n/>\n```\n\n---\n\n## AppBadge\n\nBadge/Tag pour afficher des statuts ou labels.\n\n### Import\n\n```javascript\nimport AppBadge from \'@/components/ui/AppBadge.vue\'\n```\n\n### Props\n\n| Prop | Type | Défaut | Description |\n|------|------|--------|-------------|\n| `variant` | `String` | `\'default\'` | Couleur : `default`, `primary`, `secondary`, `success`, `warning`, `danger`, `info`, `dark` |\n| `size` | `String` | `\'md\'` | Taille : `xs`, `sm`, `md`, `lg`, `xl` |\n| `icon` | `String` | `null` | Icône |\n| `dot` | `Boolean` | `false` | Affiche un point indicateur |\n| `removable` | `Boolean` | `false` | Bouton supprimer |\n| `rounded` | `String` | `\'md\'` | Arrondi : `none`, `sm`, `md`, `lg`, `full` |\n| `clickable` | `Boolean` | `false` | Cliquable |\n| `outline` | `Boolean` | `false` | Style outline |\n\n### Slots\n\n| Slot | Description |\n|------|-------------|\n| `default` | Contenu du badge |\n| `icon` | Icône personnalisée |\n\n### Events\n\n| Event | Description |\n|-------|-------------|\n| `@click` | Clic (si clickable) |\n| `@remove` | Clic sur supprimer |\n\n### Exemples\n\n```vue\n<!-- Badge simple -->\n<AppBadge variant="success">Actif</AppBadge>\n\n<!-- Badge avec icône -->\n<AppBadge variant="primary" icon="fas fa-star">\n  Premium\n</AppBadge>\n\n<!-- Badge supprimable -->\n<AppBadge\n  variant="info"\n  removable\n  @remove="handleRemove"\n>\n  Tag supprimable\n</AppBadge>\n\n<!-- Badge outline avec dot -->\n<AppBadge variant="warning" outline dot>\n  En attente\n</AppBadge>\n\n<!-- Badge pill (full rounded) -->\n<AppBadge variant="danger" rounded="full">\n  3 erreurs\n</AppBadge>\n```\n\n---\n\n## NiveauFilter\n\nFiltre par niveau de cours avec boutons.\n\n### Import\n\n```javascript\nimport NiveauFilter from \'@/components/ui/NiveauFilter.vue\'\n```\n\n### Props\n\n| Prop | Type | Défaut | Description |\n|------|------|--------|-------------|\n| `v-model` | `String` | `null` | Niveau sélectionné |\n| `niveaux` | `Array` | **requis** | Liste des niveaux (objets avec `id` et `name`) |\n\n### Events\n\n| Event | Description |\n|-------|-------------|\n| `@update:modelValue` | Changement de niveau |\n\n### Exemple\n\n```vue\n<script setup>\nimport { useNiveauStore } from \'@/stores/niveauCoursStore\'\nimport { storeToRefs } from \'pinia\'\n\nconst niveauStore = useNiveauStore()\nconst { niveaux, selectedNiveau } = storeToRefs(niveauStore)\n<\/script>\n\n<template>\n  <NiveauFilter\n    v-model="selectedNiveau"\n    :niveaux="niveaux"\n  />\n</template>\n```\n\n---\n\n## SafeHtml\n\nAffichage sécurisé de contenu HTML (protection XSS).\n\n### Import\n\n```javascript\nimport SafeHtml from \'@/components/ui/SafeHtml.vue\'\n```\n\n### Props\n\n| Prop | Type | Défaut | Description |\n|------|------|--------|-------------|\n| `html` | `String` | `\'\'` | Contenu HTML à afficher |\n| `class` | `String` | `\'\'` | Classes CSS |\n\n### Tags autorisés\n\n`h1-h6`, `p`, `br`, `hr`, `strong`, `em`, `u`, `s`, `mark`, `small`, `ul`, `ol`, `li`, `blockquote`, `pre`, `code`, `span`, `div`, `main`, `table`, `thead`, `tbody`, `tr`, `th`, `td`, `a`, `details`, `summary`\n\n### Attributs autorisés\n\n`href`, `title`, `target`, `rel`, `class`\n\n### Exemple\n\n```vue\n<!-- Affichage sécurisé de contenu de l\'API -->\n<SafeHtml :html="article.content" class="prose" />\n\n<!-- Le contenu malveillant est automatiquement nettoyé -->\n<SafeHtml :html="userInput" />\n<!-- Les scripts, iframes, onclick, etc. sont supprimés -->\n```\n\n---\n\n## Bonnes pratiques\n\n1. **Toujours utiliser `SafeHtml`** pour afficher du contenu HTML provenant de l\'utilisateur ou de l\'API\n2. **Préférer `AppButton`** aux balises `<button>` natives pour une cohérence visuelle\n3. **Utiliser les variantes** appropriées selon le contexte (danger pour supprimer, success pour valider, etc.)\n4. **Gérer les états loading** sur les boutons lors des appels API\n5. **Valider les formulaires** côté client avec les props `error` et `required`\n',Lv=Object.assign({"/documentations/API_MCP_DOCUMENTATION.md":Dv,"/documentations/CONFIGURATION_URL_SPA.md":Mv,"/documentations/INSTALLATION_.md":Rv,"/documentations/PAGES_DYNAMIQUES_README.md":_v,"/documentations/RECHERCHE_MOBILE_DESKTOP.md":Ov,"/documentations/SECURITE_HTML_API_SYMFONY.md":jv,"/documentations/USAGE_BACKOFFICE.md":Uv,"/documentations/filtrage-niveau-cours.md":zv,"/documentations/plan-migration-hexa.md":Bv,"/documentations/plan-migration.md":qv,"/documentations/utilisation des appUI.md":Hv}),Qv={front:"Front",back:"Back",devops:"DevOps",outils:"Outils"},Yp="Autres",Gv=new Set(["installation_","usage_backoffice"]);function Vp(v){return v.replace(/^\/documentation\//,"").replace(/^\/documentations\//,"").replace(/\.md$/,"")}function Yv(v){const S=Vp(v);return S.endsWith("/index")?S.replace(/\/index$/,""):S||"index"}function Vv(v,S){const h=v.match(/^#\s+(.+)$/m);return h?.[1]?h[1].trim():(Vp(S).split("/").pop()??"Documentation").replace(/[-_]/g," ")}function $v(v){const S=v.split("/")[0];return Qv[S?.toLowerCase()]??Yp}function Xv(v){return v.toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_+|_+$/g,"")}function Zv(v){const S=Xv(v);return Gv.has(S)?null:S.includes("migration")?"Migration":S.includes("configuration")||S.startsWith("config")?"Config":S.includes("ux")||S.includes("ui")||S.includes("recherche")||S.includes("filtrage")?"UX":S.includes("securite")?"Sécurité":S.includes("pages_dynamiques")?"Sous-menu":null}function wv(v,S){const h=v.split("/").filter(Boolean);return S!==Yp?h.slice(1):h}function Iv(){return Object.entries(Lv).map(([v,S])=>{const h=Yv(v),o=$v(h),N=Zv(h);return{slug:h,title:Vv(S,v),category:o,path:v,content:S,segments:N?[N]:wv(h,o)}})}const $i=["Front","Back","DevOps","Outils","Autres"],Xi=["INSTALLATION_","USAGE_BACKOFFICE"],jp=new Set(Xi),Up=new Map(Xi.map((v,S)=>[v.toLowerCase(),S]));function $p(v,S){const h=jp.has(v.slug),o=jp.has(S.slug);return h||o?h&&o?Xi.indexOf(v.slug)-Xi.indexOf(S.slug):h?-1:1:v.segments.length!==S.segments.length?v.segments.length-S.segments.length:v.title.localeCompare(S.title,"fr")}function yo(v,S,h){if(S.length===0){v.push({type:"doc",title:h.title,slug:h.slug});return}const[o,...N]=S,D=v.find(Z=>Z.type==="section"&&Z.label===o);if(D&&D.type==="section"){yo(D.children,N,h);return}const O={type:"section",label:o,children:[]};yo(O.children,N,h),v.push(O)}function zp(v){return v.type==="doc"?Up.get(v.slug.toLowerCase())??Number.POSITIVE_INFINITY:Up.get(v.label.toLowerCase())??Number.POSITIVE_INFINITY}function Xp(v){v.sort((S,h)=>{const o=zp(S),N=zp(h);if(o!==N)return o-N;if(S.type!==h.type)return S.type==="section"?-1:1;const D=S.type==="section"?S.label:S.title,O=h.type==="section"?h.label:h.title;return D.localeCompare(O,"fr")}),v.forEach(S=>{S.type==="section"&&Xp(S.children)})}function Jv(v){const S=v.reduce((h,o)=>(h[o.category]??=[],h[o.category].push(o),h),{});return Object.entries(S).sort((h,o)=>{const N=$i.indexOf(h[0]),D=$i.indexOf(o[0]);return N===-1||D===-1?h[0].localeCompare(o[0],"fr"):N-D}).map(([h,o])=>{const N=[];return o.sort($p).forEach(D=>{yo(N,D.segments,D)}),Xp(N),{id:h.toLowerCase(),label:h,items:N}})}function Kv(v,S){return S?v.find(h=>h.slug===S)??null:null}function Pv(v){return[...v].sort((h,o)=>{const N=$i.indexOf(h.category),D=$i.indexOf(o.category);return N!==D?N-D:$p(h,o)})[0]?.slug??null}function Fv(v,S){if(!S.trim())return v;const h=S.trim().toLowerCase(),o=D=>D.type==="doc"?D.title.toLowerCase().includes(h):D.children.some(o),N=D=>D.filter(o).map(O=>O.type==="doc"?O:{...O,children:N(O.children)});return v.map(D=>({...D,items:N(D.items)})).filter(D=>D.items.length>0)}function wi(...v){return v.filter(Boolean).join(" ")}const Vi={INSTALLATION_:{base:"border-l-4 border-[var(--doc-feature-install-line)]",active:"bg-[var(--doc-feature-install-bg)] text-[var(--doc-feature-install-ink)]",inactive:"bg-[var(--doc-feature-install-soft)] text-[var(--doc-feature-install-ink)] hover:bg-[var(--doc-feature-install-bg)]"},USAGE_BACKOFFICE:{base:"border-l-4 border-[var(--doc-feature-backoffice-line)]",active:"bg-[var(--doc-feature-backoffice-bg)] text-[var(--doc-feature-backoffice-ink)]",inactive:"bg-[var(--doc-feature-backoffice-soft)] text-[var(--doc-feature-backoffice-ink)] hover:bg-[var(--doc-feature-backoffice-bg)]"}};function Zp({nodes:v,activeSlug:S,onNavigate:h}){return M.jsx("ul",{className:"space-y-2",children:v.map(o=>o.type==="section"?M.jsxs("li",{className:"space-y-2",children:[M.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.2em] text-[var(--doc-muted)]",children:o.label}),M.jsx(Zp,{nodes:o.children,activeSlug:S,onNavigate:h})]},o.label):M.jsx("li",{children:M.jsx("button",{type:"button",onClick:()=>h(o.slug),className:wi("w-full rounded-xl px-3 py-2 text-left text-sm transition",Vi[o.slug]?.base,Vi[o.slug]?S===o.slug?Vi[o.slug].active:Vi[o.slug].inactive:S===o.slug?"bg-[var(--doc-accent-soft)] text-[var(--doc-accent-strong)]":"text-[var(--doc-ink)] hover:bg-[var(--doc-surface-muted)]"),children:o.title})},o.slug))})}function Bp({categories:v,activeSlug:S,onNavigate:h}){return M.jsx("div",{className:"space-y-6",children:v.map(o=>M.jsxs("div",{className:"space-y-3",children:[o.label!=="Autres"?M.jsxs("div",{className:"space-y-2",children:[M.jsx("h2",{className:"text-sm font-bold uppercase tracking-[0.35em] text-[var(--doc-accent-strong)] underline decoration-[var(--doc-accent-strong)] decoration-2 underline-offset-4",children:o.label}),M.jsx("div",{className:"h-[2px] w-10 rounded-full bg-[var(--doc-accent)]"})]}):null,M.jsx(Zp,{nodes:o.items,activeSlug:S,onNavigate:h})]},o.id))})}function kv({hasError:v,className:S,...h}){return M.jsx("input",{className:wi("h-11 w-full rounded-xl border bg-white px-4 text-sm text-[var(--doc-ink)] placeholder:text-[var(--doc-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--doc-accent)]",v?"border-[var(--doc-danger)]":"border-[var(--doc-line)]",S),...h})}function qp({value:v,onChange:S}){return M.jsx("div",{className:"rounded-2xl bg-[var(--doc-surface)] p-3 shadow-sm",children:M.jsx(kv,{value:v,onChange:h=>S(h.target.value),placeholder:"Rechercher un document...","aria-label":"Rechercher un document"})})}function wp(v){return v.toLowerCase().replace(/[^a-z0-9\s-]/g,"").trim().replace(/\s+/g,"-")}function El(v){const S=[];let h=v;const o=[{regex:/\[([^\]]+)\]\(([^)]+)\)/,render:N=>M.jsx("a",{href:N[2],className:"text-[var(--doc-accent-strong)] underline-offset-4 hover:underline",target:"_blank",rel:"noreferrer",children:N[1]})},{regex:/`([^`]+)`/,render:N=>M.jsx("code",{className:"rounded bg-[var(--doc-surface-muted)] px-1.5 py-0.5 text-sm",children:N[1]})},{regex:/\*\*([^*]+)\*\*/,render:N=>M.jsx("strong",{children:N[1]})},{regex:/\*([^*]+)\*/,render:N=>M.jsx("em",{children:N[1]})}];for(;h.length>0;){let N=null,D=null,O=-1;for(const Z of o){const j=Z.regex.exec(h);j&&(N===null||j.index<O)&&(N=j,D=Z,O=j.index)}if(!N||!D){S.push(h);break}O>0&&S.push(h.slice(0,O)),S.push(D.render(N)),h=h.slice(O+N[0].length)}return S}function Hp(v){return v.trim().replace(/^\||\|$/g,"").split("|").map(S=>S.trim())}function Ip(v){const S=[],h=v.split(`
`);let o=0;for(;o<h.length;){const N=h[o];if(/^```/.test(N)){const O=N.replace(/```/,"").trim()||null,Z=[];for(o+=1;o<h.length&&!/^```/.test(h[o]);)Z.push(h[o]),o+=1;S.push({type:"code",lang:O,text:Z.join(`
`)}),o+=1;continue}if(/^#{1,6}\s+/.test(N)){const O=N.match(/^#{1,6}/)[0].length;S.push({type:"heading",depth:O,text:N.replace(/^#{1,6}\s+/,"")}),o+=1;continue}if(/^>\s+/.test(N)){S.push({type:"blockquote",text:N.replace(/^>\s+/,"")}),o+=1;continue}if(/^---$/.test(N.trim())){S.push({type:"rule"}),o+=1;continue}if(/^\s*[-*+]\s+/.test(N)){const O=[];for(;o<h.length&&/^\s*[-*+]\s+/.test(h[o]);)O.push(h[o].replace(/^\s*[-*+]\s+/,"")),o+=1;S.push({type:"list",ordered:!1,items:O});continue}if(/^\s*\d+\.\s+/.test(N)){const O=[];for(;o<h.length&&/^\s*\d+\.\s+/.test(h[o]);)O.push(h[o].replace(/^\s*\d+\.\s+/,"")),o+=1;S.push({type:"list",ordered:!0,items:O});continue}if(/^\|.*\|$/.test(N.trim())){const O=[];for(;o<h.length&&/^\|.*\|$/.test(h[o].trim());)O.push(h[o]),o+=1;if(O.length>=2){const Z=Hp(O[0]),j=O.slice(2).map(Hp);S.push({type:"table",header:Z,rows:j})}continue}if(!N.trim()){o+=1;continue}const D=[];for(;o<h.length&&h[o].trim();)D.push(h[o]),o+=1;S.push({type:"paragraph",text:D.join(" ")})}return S}function Wv(v){return Ip(v).map((h,o)=>{switch(h.type){case"heading":{const N=wp(h.text),D=`h${h.depth}`,O=h.depth===1?"text-3xl font-semibold tracking-tight":h.depth===2?"text-2xl font-semibold tracking-tight":"text-xl font-semibold";return M.jsx(D,{id:N,className:O,children:h.text},`${h.type}-${o}`)}case"paragraph":return M.jsx("p",{className:"text-base leading-7 text-[var(--doc-ink)]",children:El(h.text)},`${h.type}-${o}`);case"code":return M.jsx("pre",{className:"overflow-x-auto rounded-2xl border border-[var(--doc-line)] bg-[var(--doc-surface-muted)] p-4 text-sm",children:M.jsx("code",{children:h.text})},`${h.type}-${o}`);case"list":{const N=h.ordered?"ol":"ul";return M.jsx(N,{className:h.ordered?"list-decimal pl-6":"list-disc pl-6",children:h.items.map((D,O)=>M.jsx("li",{className:"mb-2",children:El(D)},`${h.type}-${o}-${O}`))},`${h.type}-${o}`)}case"blockquote":return M.jsx("blockquote",{className:"border-l-4 border-[var(--doc-accent)] bg-[var(--doc-surface-muted)] px-4 py-3 text-[var(--doc-muted)]",children:El(h.text)},`${h.type}-${o}`);case"table":return M.jsx("div",{className:"overflow-x-auto",children:M.jsxs("table",{className:"w-full border-collapse text-left text-sm",children:[M.jsx("thead",{className:"bg-[var(--doc-surface-muted)]",children:M.jsx("tr",{children:h.header.map((N,D)=>M.jsx("th",{className:"border border-[var(--doc-line)] px-3 py-2 font-semibold",children:El(N)},`${h.type}-${o}-head-${D}`))})}),M.jsx("tbody",{children:h.rows.map((N,D)=>M.jsx("tr",{children:N.map((O,Z)=>M.jsx("td",{className:"border border-[var(--doc-line)] px-3 py-2",children:El(O)},`${h.type}-${o}-cell-${D}-${Z}`))},`${h.type}-${o}-row-${D}`))})]})},`${h.type}-${o}`);case"rule":return M.jsx("hr",{className:"border-[var(--doc-line)]"},`${h.type}-${o}`);default:return M.jsx(sn.Fragment,{},`block-${o}`)}})}function eg(v){return Ip(v).filter(S=>S.type==="heading").filter(S=>S.depth>=2&&S.depth<=3).map(S=>({depth:S.depth,text:S.text,id:wp(S.text)}))}function ng({content:v}){return M.jsx("div",{className:"space-y-6",children:Wv(v)})}const tg="inline-flex items-center justify-center gap-2 rounded-full font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed",ag={primary:"bg-[var(--doc-accent)] text-white hover:bg-[var(--doc-accent-strong)] focus-visible:outline-[var(--doc-accent)]",secondary:"bg-[var(--doc-surface)] text-[var(--doc-ink)] border border-[var(--doc-line)] hover:border-[var(--doc-accent)] focus-visible:outline-[var(--doc-accent)]",ghost:"bg-transparent text-[var(--doc-ink)] hover:bg-[var(--doc-surface-muted)] focus-visible:outline-[var(--doc-accent)]",danger:"bg-[var(--doc-danger)] text-white hover:bg-[var(--doc-danger-strong)] focus-visible:outline-[var(--doc-danger)]"},lg={sm:"h-9 px-3 text-sm",md:"h-11 px-4 text-sm",lg:"h-12 px-5 text-base"};function Lp({variant:v="primary",size:S="md",isLoading:h,leftIcon:o,rightIcon:N,className:D,children:O,disabled:Z,...j}){return M.jsxs("button",{className:wi(tg,ag[v],lg[S],D),disabled:Z||h,...j,children:[h?M.jsx("span",{className:"h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"}):o,O,N]})}function Qp({className:v,...S}){return M.jsx("hr",{className:wi("border-[var(--doc-line)]",v),...S})}const Da="/docs";function ig(v){return v.split("/").filter(Boolean).map(S=>decodeURIComponent(S)).join("/")}function ug(v){return v.split("/").filter(Boolean).map(S=>encodeURIComponent(S)).join("/")}function Gp(v){if(!v.startsWith(Da))return null;const h=v.slice(Da.length).replace(/^\/+/,"");return h?ig(h):null}function Zi(v){const S=v.replace(/^\/+/,""),h=ug(S);return`${Da}/${h}`}function sg(v,S){return v===Da||v===`${Da}/`||!v.startsWith(Da)?Zi(S):null}function og(){const v=sn.useMemo(()=>Iv(),[]),S=sn.useMemo(()=>Jv(v),[v]),h=sn.useMemo(()=>Pv(v),[v]),[o,N]=sn.useState(""),[D,O]=sn.useState(()=>Gp(window.location.pathname));sn.useEffect(()=>{if(!h)return;const G=sg(window.location.pathname,h);if(G){window.history.replaceState({},"",G),O(h);return}D||(window.history.replaceState({},"",Zi(h)),O(h))},[h,D]),sn.useEffect(()=>{const G=()=>{O(Gp(window.location.pathname))};return window.addEventListener("popstate",G),()=>window.removeEventListener("popstate",G)},[]);const Z=G=>{window.history.pushState({},"",Zi(G)),O(G)},j=sn.useMemo(()=>Kv(v,D),[v,D]),T=sn.useMemo(()=>Fv(S,o),[S,o]);return{docs:v,index:T,activeDoc:j,navigate:Z,slug:D,search:o,setSearch:N}}function rg(){const{index:v,activeDoc:S,navigate:h,slug:o,search:N,setSearch:D}=og(),[O,Z]=sn.useState(!1),j=sn.useMemo(()=>S?eg(S.content):[],[S]),T=G=>{h(G),Z(!1)};return M.jsxs("div",{className:"min-h-screen bg-[var(--doc-bg)] text-[var(--doc-ink)]",children:[M.jsxs("div",{className:"flex",children:[M.jsx("aside",{className:"hidden h-screen w-80 border-r border-[var(--doc-line)] bg-[var(--doc-surface)] lg:block",children:M.jsxs("div",{className:"flex h-full flex-col gap-6 overflow-y-auto px-6 py-8",children:[M.jsxs("div",{className:"space-y-3",children:[M.jsx("p",{className:"text-xs uppercase tracking-[0.3em] text-[var(--doc-muted)]",children:"Documentation"}),M.jsx("h1",{className:"text-2xl font-semibold",children:"DocDev"})]}),M.jsx(qp,{value:N,onChange:D}),M.jsx(Qp,{}),M.jsx(Bp,{categories:v,activeSlug:o,onNavigate:T})]})}),M.jsxs("div",{className:"flex min-h-screen flex-1 flex-col",children:[M.jsxs("header",{className:"sticky top-0 z-20 flex items-center justify-between gap-4 border-b border-[var(--doc-line)] bg-[var(--doc-surface)] px-4 py-4 lg:hidden",children:[M.jsx(Lp,{variant:"secondary",size:"sm",onClick:()=>Z(!0),children:"Menu"}),M.jsxs("div",{children:[M.jsx("p",{className:"text-xs uppercase tracking-[0.3em] text-[var(--doc-muted)]",children:"DocDev"}),M.jsx("h1",{className:"text-lg font-semibold",children:"Documentation"})]})]}),M.jsxs("div",{className:"flex flex-1 gap-8 px-6 py-8 lg:px-12",children:[M.jsx("main",{className:"flex-1",children:S?M.jsx("div",{className:"space-y-6",children:M.jsx(ng,{content:S.content})}):M.jsx("div",{className:"rounded-2xl border border-dashed border-[var(--doc-line)] p-8 text-center text-[var(--doc-muted)]",children:"Selectionnez un document dans la sidebar."})}),M.jsxs("aside",{className:"sticky top-24 hidden h-fit w-64 flex-shrink-0 space-y-4 rounded-2xl border border-[var(--doc-line)] bg-[var(--doc-surface)] p-5 xl:block",children:[M.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.2em] text-[var(--doc-muted)]",children:"Sur cette page"}),j.length?M.jsx("ul",{className:"space-y-2 text-sm",children:j.map(G=>M.jsx("li",{className:G.depth===3?"pl-3":"",children:M.jsx("a",{href:`#${G.id}`,className:"text-[var(--doc-muted)] transition hover:text-[var(--doc-ink)]",children:G.text})},G.id))}):M.jsx("p",{className:"text-sm text-[var(--doc-muted)]",children:"Aucun titre detecte."})]})]})]})]}),O?M.jsx("div",{className:"fixed inset-0 z-30 bg-black/30 lg:hidden",onClick:()=>Z(!1)}):null,M.jsx("aside",{className:`fixed left-0 top-0 z-40 h-full w-80 transform bg-[var(--doc-surface)] p-6 transition-transform lg:hidden ${O?"translate-x-0":"-translate-x-full"}`,children:M.jsxs("div",{className:"flex h-full flex-col gap-6",children:[M.jsxs("div",{className:"flex items-center justify-between",children:[M.jsxs("div",{children:[M.jsx("p",{className:"text-xs uppercase tracking-[0.3em] text-[var(--doc-muted)]",children:"DocDev"}),M.jsx("h2",{className:"text-lg font-semibold",children:"Navigation"})]}),M.jsx(Lp,{variant:"ghost",size:"sm",onClick:()=>Z(!1),children:"Fermer"})]}),M.jsx(qp,{value:N,onChange:D}),M.jsx(Qp,{}),M.jsx("div",{className:"flex-1 overflow-y-auto",children:M.jsx(Bp,{categories:v,activeSlug:o,onNavigate:T})})]})})]})}function cg(){return M.jsx(rg,{})}Nv.createRoot(document.getElementById("root")).render(M.jsx(sn.StrictMode,{children:M.jsx(cg,{})}));
