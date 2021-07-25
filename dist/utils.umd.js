!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).utils={})}(this,(function(t){"use strict";
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */function e(t,e,n,r){return new(n||(n=Promise))((function(i,u){function o(t){try{a(r.next(t))}catch(t){u(t)}}function s(t){try{a(r.throw(t))}catch(t){u(t)}}function a(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,s)}a((r=r.apply(t,e||[])).next())}))}function n(t,e){var n,r,i,u,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return u={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function s(u){return function(s){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&u[0]?r.return:u[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,u[1])).done)return i;switch(r=0,i&&(u=[2&u[0],i.value]),u[0]){case 0:case 1:i=u;break;case 4:return o.label++,{value:u[1],done:!1};case 5:o.label++,r=u[1],u=[0];continue;case 7:u=o.ops.pop(),o.trys.pop();continue;default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==u[0]&&2!==u[0])){o=0;continue}if(3===u[0]&&(!i||u[1]>i[0]&&u[1]<i[3])){o.label=u[1];break}if(6===u[0]&&o.label<i[1]){o.label=i[1],i=u;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(u);break}i[2]&&o.ops.pop(),o.trys.pop();continue}u=e.call(t,o)}catch(t){u=[6,t],r=0}finally{n=i=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,s])}}}function r(t,e){for(var n=0,r=e.length,i=t.length;n<r;n++,i++)t[i]=e[n];return t}function i(t,e){for(var n,r,i=null==t?void 0:t.split(","),u=(null===(r=null===(n=i[0])||void 0===n?void 0:n.match(/:(.*?);/))||void 0===r?void 0:r[1])||"image/png",o=atob(i[1]||i[0]),s=o.length,a=new Uint8Array(s);s--;)a[s]=o.charCodeAt(s);return new File([a],e,{type:u})}function u(t){return e(this,void 0,void 0,(function(){return n(this,(function(e){return[2,new Promise((function(e,n){var r=new FileReader;r.onerror=n,r.onload=function(){return e(r.result)},r.readAsDataURL(t)}))]}))}))}function o(t){if(!t)return!1;if(t=t.replace(/\D/g,""),r(r(r([],["00000000000000","11111111111111","22222222222222","33333333333333"]),["44444444444444","55555555555555","66666666666666","77777777777777"]),["88888888888888","99999999999999"]).includes(t)||14!==t.length)return!1;var e=t.substr(0,12).split("");if(Number.parseInt(t.charAt(12))!==s(e,5))return!1;var n=t.substr(0,13).split("");return Number.parseInt(t.charAt(13))===s(n,6)}function s(t,e){var n;return(n=t.reduce((function(t,n){return t+=Number.parseInt(n)*e--,e<2&&(e=9),t}),0))%11<2?0:11-n%11}function a(t){if(!t)return!1;if(t=t.replace(/\D/g,""),r(r(r([],["00000000000","11111111111","22222222222","33333333333"]),["44444444444","55555555555","66666666666","77777777777"]),["88888888888","99999999999"]).includes(t)||11!==t.length)return!1;var e=t.substr(0,9).split("");if(Number.parseInt(t.charAt(9))!==l(e,10))return!1;var n=t.substr(0,10).split("");return Number.parseInt(t.charAt(10))===l(n,11)}function l(t,e){var n=0;return(n=11-t.reduce((function(t,n){return t+Number.parseInt(n)*e--}),0)%11)>9&&(n=0),n}function f(t){var e;return!t||(t instanceof Array?0===(null==t?void 0:t.length):"string"==typeof t?0===t.length:"number"==typeof t?0===t:0===(null===(e=Object.keys(t))||void 0===e?void 0:e.length))}var c=function(t,e){return t===e},h=function(t,e){return t!==e},d=function(t,e){return t==e},p=function(t,e){return t!=e},v=function(t,e){return typeof t===e},m=function(t,e){return t instanceof e},y=function(t,e){return!m(t,e)},g=function(t){return!t},b=function(t){return!!t},w=function(t){return"string"==typeof t},S=function(t){return"object"==typeof t},$=function(t){return"function"==typeof t},D=function(t){return"boolean"==typeof t},O=function(t){return null===t},E=function(t){return void 0===t},M=function(t){return(t=t.replace(/\D/g,"")).length<=11?a(t):o(t)},N={B:1,KB:1024,MB:1048576,GB:1073741824,TB:1099511627776},_=function(t){return m(t,File)},I=function(t,e){return t===e},x=function(t,e){return t!==e},A=function(t){return!isNaN(parseInt(t))&&isFinite(t)},T=function(t){return!isNaN(parseInt(t))&&isFinite(t)&&"number"==typeof t},C=function(t){return A(t)&&!Number.isInteger(t)},F=function(t,e){return t>e},R=function(t,e){return t>=e},B=function(t,e){return t<e},L=function(t,e){return t<=e},j=function(t,e){return(t=Number.parseInt(t.toString()))>=(e.start||0)&&t<=e.end},U=/(\W)/g,H=/(\d)/g,P=/^([0-1][0-9]|[2][0-3]):([0-5][0-9])(:([0-5][0-9]))?$/g,z=/([A-Z])/g;function Y(t,e,n){return!!t&&((null==(n=Object.assign({},{removeSpace:!0,removeAccents:!0,caseSensitive:!1},n))?void 0:n.removeAccents)&&(t=mt(t),"string"==typeof e&&(e=mt(e))),(null==n?void 0:n.caseSensitive)||(t=t.toLowerCase(),"string"==typeof e&&(e=e.toLowerCase())),(null==n?void 0:n.removeSpace)&&(t=t.replace(/ +/g,""),"string"==typeof e&&(e=e.replace(/ +/g,""))),null!==(null==t?void 0:t.match(e)))}function k(t,e,n){if(void 0===n&&(n=9),!t)return!1;var r=(null==e?void 0:e.charUpperCase)||Y(t,z,{caseSensitive:!0}),i=(null==t?void 0:t.length)>=n,u=(null==e?void 0:e.charSpecial)||Y(t,U),o=(null==e?void 0:e.number)||Y(t,H);return r&&i&&u&&o}var q=function(t,e){var n=[];m(t=t||[],File)&&(t=[t]);for(var r=0,i=Array.from(t);r<i.length;r++){var u=i[r],o=[];y(u,File)&&n.push({error:"NOT_FILE"});for(var s=0,a=e;s<a.length;s++){var l=a[s];o=u.name.split("."),B(o.length,2)&&n.push({filename:u.name,mimeType:u.type,error:"WITHOUT_EXTENSION"}),h(l,o[o.length-1])&&n.push({filename:u.name,mimeType:u.type,extension:o[o.length-1],error:null})}}return{allowedExtensions:e,valid:f(n),filesInvalid:n}},W=function(t,e,n){void 0===n&&(n="KB");var r=[],i=N[n]||N.B;i*=e,m(t=t||[],File)&&(t=[t]);for(var u=0,o=Array.from(t);u<o.length;u++){var s=o[u];_(s)||r.push({error:"NOT_FILE"}),F(s.size,i)&&r.push({filename:s.name,fileSizeInBytes:s.size,mimeType:s.type,error:"SIZE"})}return{maxSize:i,typeDefined:n,valid:f(r),filesInvalid:r}},Z=function(t,e,n){void 0===n&&(n="KB");var r=[],i=N[n]||N.B;i*=e,m(t=t||[],File)&&(t=[t]);for(var u=0,o=Array.from(t);u<o.length;u++){var s=o[u];_(s)||r.push({error:"NOT_FILE"}),B(s.size,i)&&r.push({filename:s.name,fileSizeInBytes:s.size,mimeType:s.type,error:"SIZE"})}return{minSize:i,typeDefined:n,valid:f(r),filesInvalid:r}};"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;function G(t,e){return t(e={exports:{}},e.exports),e.exports}var X=G((function(t,e){t.exports=function(){var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",u="minute",o="hour",s="day",a="week",l="month",f="quarter",c="year",h="date",d="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,v=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},y=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},g={s:y,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+y(r,2,"0")+":"+y(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,l),u=n-i<0,o=e.clone().add(r+(u?-1:1),l);return+(-(r+(n-i)/(u?i-o:o-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:l,y:c,w:a,d:s,D:h,h:o,m:u,s:i,ms:r,Q:f}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},b="en",w={};w[b]=m;var S=function(t){return t instanceof E},$=function(t,e,n){var r;if(!t)return b;if("string"==typeof t)w[t]&&(r=t),e&&(w[t]=e,r=t);else{var i=t.name;w[i]=t,r=i}return!n&&r&&(b=r),r||!n&&b},D=function(t,e){if(S(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new E(n)},O=g;O.l=$,O.i=S,O.w=function(t,e){return D(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var E=function(){function m(t){this.$L=$(t.locale,null,!0),this.parse(t)}var y=m.prototype;return y.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(p);if(r){var i=r[2]-1||0,u=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,u)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,u)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},y.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},y.$utils=function(){return O},y.isValid=function(){return!(this.$d.toString()===d)},y.isSame=function(t,e){var n=D(t);return this.startOf(e)<=n&&n<=this.endOf(e)},y.isAfter=function(t,e){return D(t)<this.startOf(e)},y.isBefore=function(t,e){return this.endOf(e)<D(t)},y.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(t,e){var n=this,r=!!O.u(e)||e,f=O.p(t),d=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(s)},p=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},v=this.$W,m=this.$M,y=this.$D,g="set"+(this.$u?"UTC":"");switch(f){case c:return r?d(1,0):d(31,11);case l:return r?d(1,m):d(0,m+1);case a:var b=this.$locale().weekStart||0,w=(v<b?v+7:v)-b;return d(r?y-w:y+(6-w),m);case s:case h:return p(g+"Hours",0);case o:return p(g+"Minutes",1);case u:return p(g+"Seconds",2);case i:return p(g+"Milliseconds",3);default:return this.clone()}},y.endOf=function(t){return this.startOf(t,!1)},y.$set=function(t,e){var n,a=O.p(t),f="set"+(this.$u?"UTC":""),d=(n={},n[s]=f+"Date",n[h]=f+"Date",n[l]=f+"Month",n[c]=f+"FullYear",n[o]=f+"Hours",n[u]=f+"Minutes",n[i]=f+"Seconds",n[r]=f+"Milliseconds",n)[a],p=a===s?this.$D+(e-this.$W):e;if(a===l||a===c){var v=this.clone().set(h,1);v.$d[d](p),v.init(),this.$d=v.set(h,Math.min(this.$D,v.daysInMonth())).$d}else d&&this.$d[d](p);return this.init(),this},y.set=function(t,e){return this.clone().$set(t,e)},y.get=function(t){return this[O.p(t)]()},y.add=function(r,f){var h,d=this;r=Number(r);var p=O.p(f),v=function(t){var e=D(d);return O.w(e.date(e.date()+Math.round(t*r)),d)};if(p===l)return this.set(l,this.$M+r);if(p===c)return this.set(c,this.$y+r);if(p===s)return v(1);if(p===a)return v(7);var m=(h={},h[u]=e,h[o]=n,h[i]=t,h)[p]||1,y=this.$d.getTime()+r*m;return O.w(y,this)},y.subtract=function(t,e){return this.add(-1*t,e)},y.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||d;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),u=this.$H,o=this.$m,s=this.$M,a=n.weekdays,l=n.months,f=function(t,n,i,u){return t&&(t[n]||t(e,r))||i[n].substr(0,u)},c=function(t){return O.s(u%12||12,t,"0")},h=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:O.s(s+1,2,"0"),MMM:f(n.monthsShort,s,l,3),MMMM:f(l,s),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:f(n.weekdaysMin,this.$W,a,2),ddd:f(n.weekdaysShort,this.$W,a,3),dddd:a[this.$W],H:String(u),HH:O.s(u,2,"0"),h:c(1),hh:c(2),a:h(u,o,!0),A:h(u,o,!1),m:String(o),mm:O.s(o,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:i};return r.replace(v,(function(t,e){return e||p[t]||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,h,d){var p,v=O.p(h),m=D(r),y=(m.utcOffset()-this.utcOffset())*e,g=this-m,b=O.m(this,m);return b=(p={},p[c]=b/12,p[l]=b,p[f]=b/3,p[a]=(g-y)/6048e5,p[s]=(g-y)/864e5,p[o]=g/n,p[u]=g/e,p[i]=g/t,p)[v]||g,d?b:O.a(b)},y.daysInMonth=function(){return this.endOf(l).$D},y.$locale=function(){return w[this.$L]},y.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=$(t,e,!0);return r&&(n.$L=r),n},y.clone=function(){return O.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),M=E.prototype;return D.prototype=M,[["$ms",r],["$s",i],["$m",u],["$H",o],["$W",s],["$M",l],["$y",c],["$D",h]].forEach((function(t){M[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),D.extend=function(t,e){return t.$i||(t(e,E,D),t.$i=!0),D},D.locale=$,D.isDayjs=S,D.unix=function(t){return D(1e3*t)},D.en=w[b],D.Ls=w,D.p={},D}()})),V=G((function(t,e){t.exports=function(t,e,n){e.prototype.isBetween=function(t,e,r,i){var u=n(t),o=n(e),s="("===(i=i||"()")[0],a=")"===i[1];return(s?this.isAfter(u,r):!this.isBefore(u,r))&&(a?this.isBefore(o,r):!this.isAfter(o,r))||(s?this.isBefore(u,r):!this.isAfter(u,r))&&(a?this.isAfter(o,r):!this.isBefore(o,r))}}})),J=G((function(t,e){t.exports=function(t,e){e.prototype.isSameOrAfter=function(t,e){return this.isSame(t,e)||this.isAfter(t,e)}}})),K=G((function(t,e){t.exports=function(t,e){e.prototype.isSameOrBefore=function(t,e){return this.isSame(t,e)||this.isBefore(t,e)}}}));X.extend(V),X.extend(J),X.extend(K);var Q=function(t){return X(t).isValid()},tt=function(t,e,n){return X(t).isAfter(X(e),n)},et=function(t,e,n){return X(t).isBefore(X(e),n)},nt=function(t,e,n,r){return X(t).isBetween(X((null==e?void 0:e.start)||new Date),X((null==e?void 0:e.end)||new Date),n,r)},rt=function(t,e){var n,r,i;return(null==e?void 0:e.max)?(e.max=Number.parseInt(null===(r=null==e?void 0:e.max)||void 0===r?void 0:r.toString()),e.min=Number.parseInt(null===(i=null==e?void 0:e.min)||void 0===i?void 0:i.toString()),X(t).isSameOrAfter(X().subtract(e.max,"years"))&&X(t).isSameOrBefore(X().subtract(e.min||0,"years"))):(e.min=Number.parseInt(null===(n=null==e?void 0:e.min)||void 0===n?void 0:n.toString()),X(t).isSameOrBefore(X().subtract(e.min,"years")))},it=function(t,e,n){return X(t).isSame(X(e),n)},ut=function(t,e,n){return!it(t,e,n)};function ot(t){return new st(t)}var st=function(t){var r=this;this.value=t,this.contains=function(t,e){return Y(r.value,t,e)},this.testPattern=function(t){return function(t,e){return!!t&&(w(e)&&(e=new RegExp(e)),e.test(t))}(r.value,t)},this.isPassword=function(t,e){return k(r.value,t,e)},this.isTypeof=function(t){return v(r.value,t)},this.isFalse=function(){return g(r.value)},this.isTrue=function(){return b(r.value)},this.isEqual=function(t){return c(r.value,t)},this.isDifferent=function(t){return h(r.value,t)},this.isEqualNotStrict=function(t){return d(r.value,t)},this.isDifferentNotStrict=function(t){return p(r.value,t)},this.isFill=function(){return!f(r.value)},this.isEmpty=function(){return f(r.value)},this.isInstanceOf=function(t){return m(r.value,t)},this.notIsInstanceOf=function(t){return y(r.value,t)},this.isString=function(){return w(r.value)},this.isObject=function(){return S(r.value)},this.isFunction=function(){return $(r.value)},this.isBoolean=function(){return D(r.value)},this.isNull=function(){return O(r.value)},this.isUndefined=function(){return E(r.value)},this.isCnpj=function(){return o(r.value)},this.isCpf=function(){return a(r.value)},this.isCpfOrCnpj=function(){return M(r.value)},this.isFile=function(){return _(r.value)},this.maxHeightFile=function(t){return e(r,void 0,void 0,(function(){var e;return n(this,(function(n){switch(n.label){case 0:return e=R,[4,at(this.value)];case 1:return[2,e.apply(void 0,[n.sent().height,t])]}}))}))},this.minHeightFile=function(t){return e(r,void 0,void 0,(function(){var e;return n(this,(function(n){switch(n.label){case 0:return e=L,[4,at(this.value)];case 1:return[2,e.apply(void 0,[n.sent().height,t])]}}))}))},this.maxWidthFile=function(t){return e(r,void 0,void 0,(function(){var e;return n(this,(function(n){switch(n.label){case 0:return e=R,[4,at(this.value)];case 1:return[2,e.apply(void 0,[n.sent().width,t])]}}))}))},this.minWidthFile=function(t){return e(r,void 0,void 0,(function(){var e;return n(this,(function(n){switch(n.label){case 0:return e=L,[4,at(this.value)];case 1:return[2,e.apply(void 0,[n.sent().width,t])]}}))}))},this.maxSizeFile=function(t,e){return W(r.value,t,e).valid},this.minSizeFile=function(t,e){return Z(r.value,t,e).valid},this.isAllowExtensionsFile=function(t){return q(r.value,t).valid},this.isNumeric=function(){return A(r.value)},this.isNumber=function(){return T(r.value)},this.isFloat=function(){return C(r.value)},this.isEqualNumber=function(t){return I(r.value,t)},this.isDifferentNumber=function(t){return x(r.value,t)},this.isBeforeNumber=function(t){return j(r.value,t)},this.isLessOrEqual=function(t){return L(r.value,t)},this.isLess=function(t){return B(r.value,t)},this.isMore=function(t){return F(r.value,t)},this.isMoreOrEqual=function(t){return R(r.value,t)},this.isDate=function(){return Q(r.value)},this.isAfterDate=function(t,e){return tt(r.value,t,e)},this.isBeforeDate=function(t,e){return et(r.value,t,e)},this.isBetweenDate=function(t,e,n){return nt(r.value,t,e,n)},this.isBirthDateValidation=function(t){return rt(r.value,t)},this.isEqualDate=function(t,e){return it(r.value,t,e)},this.isDifferentDate=function(t,e){return ut(r.value,t,e)}},at=function(t){return e(void 0,void 0,void 0,(function(){var e,r,o;return n(this,(function(n){switch(n.label){case 0:if(e=t.type.split("/"),!ot(t).isFile()&&ot(t).isString()&&(t=i(t,"unnamed.png")),ot(e[0]).isDifferent("image"))throw new Error("File is not image");return r=new Image,[4,u(t)];case 1:return o=n.sent(),[2,new Promise((function(t,e){r.onerror=function(t){e(t)},r.onload=function(){t({height:r.height,width:r.width})},r.src=o}))]}}))}))};function lt(t,e){if("string"==typeof e&&(e=null==e?void 0:e.split(".")),0===(null==(e=null==e?void 0:e.filter((function(t){return t})))?void 0:e.length))return t;var n=e[0];return null==e||e.shift(),0===(null==e?void 0:e.length)?null==t?void 0:t[n]:lt(null==t?void 0:t[n],e)}function ft(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return ot(e).isFill()&&e.forEach((function(e){ot(e).isFill()&&ct(t,e)})),t}function ct(t,e){return Object.keys(e).reduce((function(t,n){return ot(e[n]).isObject()&&ot(e[n].name).isUndefined()?t[n]=ct(t[n],e[n]):t[n]=e[n],t}),t||{})}var ht=function(){return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"};var dt={decimal:",",thousands:".",error:!1};function pt(t,e){if(e=Object.assign({},dt,e),!A(t)&&w(t)){var n=new RegExp("\\"+(null==e?void 0:e.decimal),"g"),r=new RegExp("\\"+(null==e?void 0:e.thousands),"g");t=t.toString().replace(r,"").replace(n,"."),t=Number(t)||0}else null==e||e.error;return Number(t)}var vt=G((function(t,e){t.exports=function(t,e,n){t=t||{};var r=e.prototype,i={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function u(t,e,n,i){return r.fromToBase(t,e,n,i)}n.en.relativeTime=i,r.fromToBase=function(e,r,u,o,s){for(var a,l,f,c=u.$locale().relativeTime||i,h=t.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],d=h.length,p=0;p<d;p+=1){var v=h[p];v.d&&(a=o?n(e).diff(u,v.d,!0):u.diff(e,v.d,!0));var m=(t.rounding||Math.round)(Math.abs(a));if(f=a>0,m<=v.r||!v.r){m<=1&&p>0&&(v=h[p-1]);var y=c[v.l];s&&(m=s(""+m)),l="string"==typeof y?y.replace("%d",m):y(m,r,v.l,f);break}}if(r)return l;var g=f?c.future:c.past;return"function"==typeof g?g(l):g.replace("%s",l)},r.to=function(t,e){return u(t,e,this,!0)},r.from=function(t,e){return u(t,e,this)};var o=function(t){return t.$u?n.utc():n()};r.toNow=function(t){return this.to(o(this),t)},r.fromNow=function(t){return this.from(o(this),t)}}}));function mt(t){var e={"â":"a","Â":"A","à":"a","À":"A","á":"a","Á":"A","ã":"a","Ã":"A","ê":"e","Ê":"E","è":"e","È":"E","é":"e","É":"E","î":"i","Î":"I","ì":"i","Ì":"I","í":"i","Í":"I","õ":"o","Õ":"O","ô":"o","Ô":"O","ò":"o","Ò":"O","ó":"o","Ó":"O","ü":"u","Ü":"U","û":"u","Û":"U","ú":"u","Ú":"U","ù":"u","Ù":"U","ç":"c","Ç":"C"};return null==t?void 0:t.replace(/[\W\[\] ]/g,(function(t){return e[t]||t}))}X.extend(vt);var yt=function(t,e){return[t=pt(t),e=pt(e)]},gt=function(t,e){var n=yt(t,e);return n[0]+n[1]},bt=function(t,e){var n=yt(t,e);return n[0]-n[1]},wt=function(t,e){var n=yt(t,e);return n[0]*n[1]},St=function(t,e){var n=yt(t,e);return n[0]/n[1]},$t=function(t,e){var n=yt(t,e),r=n[0],i=n[1];return i>0?Math.round(r/i)*i:r},Dt=function(t,e){for(var n=yt(t,e),r=n[0],i=n[1],u=[],o=i,s=St(r,e);o>0;o--)1===o?u.push(bt(r,wt(s,i-1))):u.push(s);return u},Ot={decimal:",",thousands:".",error:!1,precision:2,increment:0,round:"round"};function Et(t,e){return new _t(t,e)}var Mt,Nt,_t=function(){function t(t,e){var n;this.config=Object.assign({},Ot,e),this.precision=Math.pow(10,null===(n=this.config)||void 0===n?void 0:n.precision),this.save(t)}return t.prototype.parse=function(e){return e=m(e,t)?e.valueRaw:pt(e,this.config)},t.prototype.save=function(e){m(e,t)?this.valueRaw=e.valueRaw:this.valueRaw=pt(e,this.config),this.value=this.roundingNumber(this.valueRaw)},t.prototype.roundingNumber=function(t){t=Number(t)*this.precision,t=Number(t.toFixed(4));var e=Math[this.config.round];return t=e(t)/this.precision,this.config.increment&&(t=e(t=$t(t,this.config.increment)*this.precision)/this.precision),t},t.prototype.add=function(t){return this.valueRaw=gt(this.valueRaw,this.parse(t)),this.value=this.roundingNumber(this.valueRaw),this},t.prototype.subtract=function(t){return this.valueRaw=bt(this.valueRaw,this.parse(t)),this.value=this.roundingNumber(this.valueRaw),this},t.prototype.multiply=function(t){return this.valueRaw=wt(this.valueRaw,this.parse(t)),this.value=this.roundingNumber(this.valueRaw),this},t.prototype.divide=function(t){return this.valueRaw=St(this.valueRaw,this.parse(t)),this.value=this.roundingNumber(this.valueRaw),this},t.prototype.distribute=function(t){var e=this,n=Dt(this.valueRaw,this.parse(t)).map((function(t){return e.roundingNumber(t)})),i=this.roundingNumber(bt(this.valueRaw,wt(n.pop(),n.length)));return r(r([],n),[i])},t}();Et.config=function(t){Object.assign(Ot,t)},Et.isCalc=function(t){return ot(t).isInstanceOf(_t)};var It={},xt={prefix:"color",use:ht()||"light",disableSystemBasedColorShift:!1,_element:document.createElement("style")};function At(t,e){return new Tt(t,e)}null===(Nt=null===(Mt=null===window||void 0===window?void 0:window.matchMedia)||void 0===Mt?void 0:Mt.call(window,"(prefers-color-scheme: dark)"))||void 0===Nt||Nt.addEventListener("change",(function(t){ot(xt.disableSystemBasedColorShift).isFalse()&&At().change(ht()||"light")}));var Tt=function(){function t(t,e){ft(It,t),ft(xt,e),document.head.contains(this.element)||document.head.appendChild(this.element)}return Object.defineProperty(t.prototype,"themes",{get:function(){return It},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"prefix",{get:function(){return xt.prefix},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"style",{get:function(){return xt._style},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"use",{get:function(){return xt.use},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"config",{get:function(){return xt},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"element",{get:function(){return xt._element},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"themeSystem",{get:function(){return ht()||"light"},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"isDark",{get:function(){return ot(this.use).isEqual("dark")},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"isLight",{get:function(){return ot(this.use).isEqual("light")},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"isNoPreference",{get:function(){return ot(this.use).isEqual("no-preference")},enumerable:!1,configurable:!0}),t.prototype.reset=function(){It={},xt={use:this.themeSystem,_style:"",prefix:"color",disableChangeScheme:!1,_element:xt._element}},t.prototype.change=function(t){xt.use=t,this.createStyle()},t.prototype.createStyle=function(){xt._style=this.generatorStyle(),xt._element.innerHTML=this.style},t.prototype.getColor=function(t,e){void 0===e&&(e=!0);var n=t.split(".");e&&n.unshift(this.use);var r=lt(this.themes,n);return ot(r).isObject()?r.default:r},t.prototype.generatorStyle=function(){var t=["color-scheme: "+this.use],e=It[this.use];return ot(It.global).isObject()&&(t=t.concat(this.generatorStyleContent(It.global))),ot(e).isObject()&&(t=t.concat(this.generatorStyleContent(e))),":root{"+t.join(";")+";}"},t.prototype.generatorStyleContent=function(t){var e=this;return Object.keys(t).reduce((function(n,r){return ot(t[r]).isString()?n.push("--"+e.prefix+"-"+r+": "+t[r]):Object.keys(t[r]).forEach((function(i){var u=t[r][i];ot(i).isEqual("default")?n.push("--"+e.prefix+"-"+r+": "+u):n.push("--"+e.prefix+"-"+r+"-"+i+": "+u)})),n}),[])},t}();At.config=function(t){ft(xt,t)},At.theme=function(t){ft(It,t)},At.isTheme=function(t){return ot(t).isInstanceOf(Tt)};var Ct=document.querySelector.bind(document),Ft=document.querySelectorAll.bind(document);t.$=Ct,t.$$=Ft,t.BIT_SIZES=N,t.Calc=_t,t.REGEX_CHAR_SPECIAL=U,t.REGEX_CNPJ=/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/,t.REGEX_CPF=/^\d{3}\.\d{3}\.\d{3}-\d{2}$/,t.REGEX_CPF_CNPJ=/(^\d{3}\.\d{3}\.\d{3}-\d{2}$)|(^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$)/,t.REGEX_EMAIL=/^[-\w.%+]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,t.REGEX_NUMBER=H,t.REGEX_PHONE_BR=/^((\()?(\d{2})?(\))?( )?(9)?( )?\d{4}(-)?\d{4})$/,t.REGEX_TIME=P,t.REGEX_UPPER_CASE=z,t.REGEX_URL=/^((((http[s]?):\/{2})?)+(([0-9a-z_-]+\.)+([a-z]{2,3}))(:[0-9]+)?((\/([~0-9a-zA-Z\#\+\%@\.\/_-]+))?(\?[0-9a-zA-Z\+\%@\/&\[\];=_-]+)?)?)/,t.RESOLUTION_HEIGHT={HD:720,HD_MORE:768,FULL_HD:1080,QUAD_HD:1440,UHD:2160},t.RESOLUTION_WIDTH={HD:1280,HD_MORE:1366,FULL_HD:1920,QUAD_HD:2560,UHD:3840},t.Theme=Tt,t.Validate=st,t.add=gt,t.base64toFile=i,t.calc=Et,t.contains=Y,t.distribute=Dt,t.divide=St,t.fileToBase64=u,t.getNode=lt,t.getSizeImage=at,t.handleTry=function(t){return e(this,void 0,void 0,(function(){var e;return n(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),e=t.toPromise(),E(e)||(t=t.toPromise()),[4,t];case 1:return[2,[n.sent(),null]];case 2:return[2,[null,n.sent()]];case 3:return[2]}}))}))},t.increment=$t,t.isAfterDate=tt,t.isAllowExtensions=q,t.isBeforeDate=et,t.isBeforeNumber=j,t.isBetweenDate=nt,t.isBirthDateValidation=rt,t.isBoolean=D,t.isCnpj=o,t.isCpf=a,t.isCpfOrCnpj=M,t.isDate=Q,t.isDifferent=h,t.isDifferentDate=ut,t.isDifferentNotStrict=p,t.isDifferentNumber=x,t.isEmpty=f,t.isEqual=c,t.isEqualDate=it,t.isEqualNotStrict=d,t.isEqualNumber=I,t.isFalse=g,t.isFile=_,t.isFill=function(t){return!f(t)},t.isFloat=C,t.isFunction=$,t.isInstanceof=m,t.isLess=B,t.isLessOrEqual=L,t.isMore=F,t.isMoreOrEqual=R,t.isNull=O,t.isNumber=T,t.isNumeric=A,t.isObject=S,t.isPassword=k,t.isRgSp=function(t){if(!t)return!1;var e=(t=t.replace(/\D/g,"")).substr(0,8).split("");return Number(t.charAt(8))===function(t,e){void 0===e&&(e=9);var n=0,r=0;r=t.reduce((function(t,n){return t+Number.parseInt(n)*e--}),0),(n=r%11)>9&&(n=0);return n}(e)},t.isString=w,t.isTrue=b,t.isTypeof=v,t.isUndefined=E,t.maxSize=W,t.merge=ct,t.mergeObject=ft,t.minSize=Z,t.multiply=wt,t.notIsInstanceof=y,t.parseNumber=pt,t.relativeTime=function(t,e){return void 0===e&&(e="future"),t=X(t),"future"===e?X(Date.now()).to(t):X(t).to(Date.now())},t.removeAccents=mt,t.sortAsc=function(t,e){var n=null==e?void 0:e.split("|");return n[1],e=n[0],t.sort((function(t,n){var r=lt(t,null==e?void 0:e.split(".")),i=lt(n,null==e?void 0:e.split("."));if("number"==typeof r&&"number"==typeof i)return r-i;if("string"==typeof r){if(r.toLocaleUpperCase()<i.toLocaleUpperCase())return-1;if(i.toLocaleUpperCase()<r.toLocaleUpperCase())return 1}return 0}))},t.sortDesc=function(t,e){var n=null==e?void 0:e.split("|");return n[1],e=n[0],t.sort((function(t,n){var r=lt(t,null==e?void 0:e.split(".")),i=lt(n,null==e?void 0:e.split("."));if("number"==typeof r&&"number"==typeof i){var u=r-i;return u>0?-1:0==u?0:1}if("string"==typeof r){if(r.toLocaleUpperCase()>i.toLocaleUpperCase())return-1;if(i.toLocaleUpperCase()>r.toLocaleUpperCase())return 1}return 0}))},t.subtract=bt,t.theme=At,t.themeSystem=ht,t.timeToDate=function(t){return t?null!==t.match(P)?X().format("YYYY-MM-DDT"+t+"Z"):X().format("YYYY-MM-DDTHH:mm:ssZ"):t},t.validate=ot,Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=utils.umd.js.map
