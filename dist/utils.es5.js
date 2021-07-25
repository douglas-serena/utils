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
***************************************************************************** */
function t(t,e,n,r){return new(n||(n=Promise))((function(i,u){function o(t){try{a(r.next(t))}catch(t){u(t)}}function s(t){try{a(r.throw(t))}catch(t){u(t)}}function a(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,s)}a((r=r.apply(t,e||[])).next())}))}function e(t,e){var n,r,i,u,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return u={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function s(u){return function(s){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&u[0]?r.return:u[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,u[1])).done)return i;switch(r=0,i&&(u=[2&u[0],i.value]),u[0]){case 0:case 1:i=u;break;case 4:return o.label++,{value:u[1],done:!1};case 5:o.label++,r=u[1],u=[0];continue;case 7:u=o.ops.pop(),o.trys.pop();continue;default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==u[0]&&2!==u[0])){o=0;continue}if(3===u[0]&&(!i||u[1]>i[0]&&u[1]<i[3])){o.label=u[1];break}if(6===u[0]&&o.label<i[1]){o.label=i[1],i=u;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(u);break}i[2]&&o.ops.pop(),o.trys.pop();continue}u=e.call(t,o)}catch(t){u=[6,t],r=0}finally{n=i=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,s])}}}function n(t,e){for(var n=0,r=e.length,i=t.length;n<r;n++,i++)t[i]=e[n];return t}function r(t){if(!t)return!1;if(t=t.replace(/\D/g,""),n(n(n([],["00000000000000","11111111111111","22222222222222","33333333333333"]),["44444444444444","55555555555555","66666666666666","77777777777777"]),["88888888888888","99999999999999"]).includes(t)||14!==t.length)return!1;var e=t.substr(0,12).split("");if(Number.parseInt(t.charAt(12))!==i(e,5))return!1;var r=t.substr(0,13).split("");return Number.parseInt(t.charAt(13))===i(r,6)}function i(t,e){var n;return(n=t.reduce((function(t,n){return t+=Number.parseInt(n)*e--,e<2&&(e=9),t}),0))%11<2?0:11-n%11}function u(t){if(!t)return!1;if(t=t.replace(/\D/g,""),n(n(n([],["00000000000","11111111111","22222222222","33333333333"]),["44444444444","55555555555","66666666666","77777777777"]),["88888888888","99999999999"]).includes(t)||11!==t.length)return!1;var e=t.substr(0,9).split("");if(Number.parseInt(t.charAt(9))!==o(e,10))return!1;var r=t.substr(0,10).split("");return Number.parseInt(t.charAt(10))===o(r,11)}function o(t,e){var n=0;return(n=11-t.reduce((function(t,n){return t+Number.parseInt(n)*e--}),0)%11)>9&&(n=0),n}function s(t){var e;return!t||(t instanceof Array?0===(null==t?void 0:t.length):"string"==typeof t?0===t.length:"number"==typeof t?0===t:0===(null===(e=Object.keys(t))||void 0===e?void 0:e.length))}var a=function(t,e){return t===e},c=function(t,e){return t!==e},l=function(t,e){return t==e},f=function(t,e){return t!=e},h=function(t){return!s(t)},d=function(t,e){return typeof t===e},v=function(t,e){return t instanceof e},p=function(t,e){return!v(t,e)},m=function(t){return!t},y=function(t){return!!t},g=function(t){return"string"==typeof t},b=function(t){return"object"==typeof t},w=function(t){return"function"==typeof t},$=function(t){return"boolean"==typeof t},S=function(t){return null===t},D=function(t){return void 0===t},M=function(t){return(t=t.replace(/\D/g,"")).length<=11?u(t):r(t)},O=function(t,e){return t===e},N=function(t,e){return t!==e},x=function(t){return!isNaN(parseInt(t))&&isFinite(t)},A=function(t){return!isNaN(parseInt(t))&&isFinite(t)&&"number"==typeof t},I=function(t){return x(t)&&!Number.isInteger(t)},_=function(t,e){return t>e},T=function(t,e){return t>=e},E=function(t,e){return t<e},F=function(t,e){return t<=e},C=function(t,e){return(t=Number.parseInt(t.toString()))>=(e.start||0)&&t<=e.end},L={decimal:",",thousands:".",error:!1};function B(t,e){if(e=Object.assign({},L,e),!x(t)&&g(t)){var n=new RegExp("\\"+(null==e?void 0:e.decimal),"g"),r=new RegExp("\\"+(null==e?void 0:e.thousands),"g");t=t.toString().replace(r,"").replace(n,"."),t=Number(t)||0}else null==e||e.error;return Number(t)}var j=function(t,e){return[t=B(t),e=B(e)]},U=function(t,e){var n=j(t,e);return n[0]+n[1]},H=function(t,e){var n=j(t,e);return n[0]-n[1]},R=function(t,e){var n=j(t,e);return n[0]*n[1]},k=function(t,e){var n=j(t,e);return n[0]/n[1]},Y=function(t,e){var n=j(t,e),r=n[0],i=n[1];return i>0?Math.round(r/i)*i:r},P=function(t,e){for(var n=j(t,e),r=n[0],i=n[1],u=[],o=i,s=k(r,e);o>0;o--)1===o?u.push(H(r,R(s,i-1))):u.push(s);return u},z={B:1,KB:1024,MB:1048576,GB:1073741824,TB:1099511627776},W={HD:1280,HD_MORE:1366,FULL_HD:1920,QUAD_HD:2560,UHD:3840},q={HD:720,HD_MORE:768,FULL_HD:1080,QUAD_HD:1440,UHD:2160},Z=function(t){return v(t,File)};function V(t,e){for(var n,r,i=null==t?void 0:t.split(","),u=(null===(r=null===(n=i[0])||void 0===n?void 0:n.match(/:(.*?);/))||void 0===r?void 0:r[1])||"image/png",o=atob(i[1]||i[0]),s=o.length,a=new Uint8Array(s);s--;)a[s]=o.charCodeAt(s);return new File([a],e,{type:u})}function J(n){return t(this,void 0,void 0,(function(){return e(this,(function(t){return[2,new Promise((function(t,e){var r=new FileReader;r.onerror=e,r.onload=function(){return t(r.result)},r.readAsDataURL(n)}))]}))}))}var K=function(n){return t(void 0,void 0,void 0,(function(){var t,r,i;return e(this,(function(e){switch(e.label){case 0:if(t=n.type.split("/"),!Z(n)&&g(n)&&(n=V(n,"unnamed.png")),c(t[0],"image"))throw new Error("File is not image");return r=new Image,[4,J(n)];case 1:return i=e.sent(),[2,new Promise((function(t,e){r.onerror=function(t){e(t)},r.onload=function(){t({height:r.height,width:r.width})},r.src=i}))]}}))}))};function Q(t){var e={"â":"a","Â":"A","à":"a","À":"A","á":"a","Á":"A","ã":"a","Ã":"A","ê":"e","Ê":"E","è":"e","È":"E","é":"e","É":"E","î":"i","Î":"I","ì":"i","Ì":"I","í":"i","Í":"I","õ":"o","Õ":"O","ô":"o","Ô":"O","ò":"o","Ò":"O","ó":"o","Ó":"O","ü":"u","Ü":"U","û":"u","Û":"U","ú":"u","Ú":"U","ù":"u","Ù":"U","ç":"c","Ç":"C"};return null==t?void 0:t.replace(/[\W\[\] ]/g,(function(t){return e[t]||t}))}function G(t,e,n){return!!t&&((null==(n=Object.assign({},{removeSpace:!0,removeAccents:!0,caseSensitive:!1},n))?void 0:n.removeAccents)&&(t=Q(t),"string"==typeof e&&(e=Q(e))),(null==n?void 0:n.caseSensitive)||(t=t.toLowerCase(),"string"==typeof e&&(e=e.toLowerCase())),(null==n?void 0:n.removeSpace)&&(t=t.replace(/ +/g,""),"string"==typeof e&&(e=e.replace(/ +/g,""))),null!==(null==t?void 0:t.match(e)))}var X=/(\W)/g,tt=/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/,et=/(^\d{3}\.\d{3}\.\d{3}-\d{2}$)|(^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$)/,nt=/^\d{3}\.\d{3}\.\d{3}-\d{2}$/,rt=/^[-\w.%+]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,it=/(\d)/g,ut=/^((\()?(\d{2})?(\))?( )?(9)?( )?\d{4}(-)?\d{4})$/,ot=/^([0-1][0-9]|[2][0-3]):([0-5][0-9])(:([0-5][0-9]))?$/g,st=/([A-Z])/g,at=/^((((http[s]?):\/{2})?)+(([0-9a-z_-]+\.)+([a-z]{2,3}))(:[0-9]+)?((\/([~0-9a-zA-Z\#\+\%@\.\/_-]+))?(\?[0-9a-zA-Z\+\%@\/&\[\];=_-]+)?)?)/;function ct(t,e,n){if(void 0===n&&(n=9),!t)return!1;var r=(null==e?void 0:e.charUpperCase)||G(t,st,{caseSensitive:!0}),i=(null==t?void 0:t.length)>=n,u=(null==e?void 0:e.charSpecial)||G(t,X),o=(null==e?void 0:e.number)||G(t,it);return r&&i&&u&&o}function lt(t,e){return!!t&&(g(e)&&(e=new RegExp(e)),e.test(t))}"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;function ft(t,e){return t(e={exports:{}},e.exports),e.exports}var ht=ft((function(t,e){t.exports=function(){var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",u="minute",o="hour",s="day",a="week",c="month",l="quarter",f="year",h="date",d="Invalid Date",v=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},y=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},g={s:y,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+y(r,2,"0")+":"+y(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),u=n-i<0,o=e.clone().add(r+(u?-1:1),c);return+(-(r+(n-i)/(u?i-o:o-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:f,w:a,d:s,D:h,h:o,m:u,s:i,ms:r,Q:l}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},b="en",w={};w[b]=m;var $=function(t){return t instanceof O},S=function(t,e,n){var r;if(!t)return b;if("string"==typeof t)w[t]&&(r=t),e&&(w[t]=e,r=t);else{var i=t.name;w[i]=t,r=i}return!n&&r&&(b=r),r||!n&&b},D=function(t,e){if($(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new O(n)},M=g;M.l=S,M.i=$,M.w=function(t,e){return D(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var O=function(){function m(t){this.$L=S(t.locale,null,!0),this.parse(t)}var y=m.prototype;return y.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(M.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(v);if(r){var i=r[2]-1||0,u=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,u)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,u)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},y.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},y.$utils=function(){return M},y.isValid=function(){return!(this.$d.toString()===d)},y.isSame=function(t,e){var n=D(t);return this.startOf(e)<=n&&n<=this.endOf(e)},y.isAfter=function(t,e){return D(t)<this.startOf(e)},y.isBefore=function(t,e){return this.endOf(e)<D(t)},y.$g=function(t,e,n){return M.u(t)?this[e]:this.set(n,t)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(t,e){var n=this,r=!!M.u(e)||e,l=M.p(t),d=function(t,e){var i=M.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(s)},v=function(t,e){return M.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},p=this.$W,m=this.$M,y=this.$D,g="set"+(this.$u?"UTC":"");switch(l){case f:return r?d(1,0):d(31,11);case c:return r?d(1,m):d(0,m+1);case a:var b=this.$locale().weekStart||0,w=(p<b?p+7:p)-b;return d(r?y-w:y+(6-w),m);case s:case h:return v(g+"Hours",0);case o:return v(g+"Minutes",1);case u:return v(g+"Seconds",2);case i:return v(g+"Milliseconds",3);default:return this.clone()}},y.endOf=function(t){return this.startOf(t,!1)},y.$set=function(t,e){var n,a=M.p(t),l="set"+(this.$u?"UTC":""),d=(n={},n[s]=l+"Date",n[h]=l+"Date",n[c]=l+"Month",n[f]=l+"FullYear",n[o]=l+"Hours",n[u]=l+"Minutes",n[i]=l+"Seconds",n[r]=l+"Milliseconds",n)[a],v=a===s?this.$D+(e-this.$W):e;if(a===c||a===f){var p=this.clone().set(h,1);p.$d[d](v),p.init(),this.$d=p.set(h,Math.min(this.$D,p.daysInMonth())).$d}else d&&this.$d[d](v);return this.init(),this},y.set=function(t,e){return this.clone().$set(t,e)},y.get=function(t){return this[M.p(t)]()},y.add=function(r,l){var h,d=this;r=Number(r);var v=M.p(l),p=function(t){var e=D(d);return M.w(e.date(e.date()+Math.round(t*r)),d)};if(v===c)return this.set(c,this.$M+r);if(v===f)return this.set(f,this.$y+r);if(v===s)return p(1);if(v===a)return p(7);var m=(h={},h[u]=e,h[o]=n,h[i]=t,h)[v]||1,y=this.$d.getTime()+r*m;return M.w(y,this)},y.subtract=function(t,e){return this.add(-1*t,e)},y.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||d;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=M.z(this),u=this.$H,o=this.$m,s=this.$M,a=n.weekdays,c=n.months,l=function(t,n,i,u){return t&&(t[n]||t(e,r))||i[n].substr(0,u)},f=function(t){return M.s(u%12||12,t,"0")},h=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},v={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:M.s(s+1,2,"0"),MMM:l(n.monthsShort,s,c,3),MMMM:l(c,s),D:this.$D,DD:M.s(this.$D,2,"0"),d:String(this.$W),dd:l(n.weekdaysMin,this.$W,a,2),ddd:l(n.weekdaysShort,this.$W,a,3),dddd:a[this.$W],H:String(u),HH:M.s(u,2,"0"),h:f(1),hh:f(2),a:h(u,o,!0),A:h(u,o,!1),m:String(o),mm:M.s(o,2,"0"),s:String(this.$s),ss:M.s(this.$s,2,"0"),SSS:M.s(this.$ms,3,"0"),Z:i};return r.replace(p,(function(t,e){return e||v[t]||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,h,d){var v,p=M.p(h),m=D(r),y=(m.utcOffset()-this.utcOffset())*e,g=this-m,b=M.m(this,m);return b=(v={},v[f]=b/12,v[c]=b,v[l]=b/3,v[a]=(g-y)/6048e5,v[s]=(g-y)/864e5,v[o]=g/n,v[u]=g/e,v[i]=g/t,v)[p]||g,d?b:M.a(b)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return w[this.$L]},y.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},y.clone=function(){return M.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),N=O.prototype;return D.prototype=N,[["$ms",r],["$s",i],["$m",u],["$H",o],["$W",s],["$M",c],["$y",f],["$D",h]].forEach((function(t){N[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),D.extend=function(t,e){return t.$i||(t(e,O,D),t.$i=!0),D},D.locale=S,D.isDayjs=$,D.unix=function(t){return D(1e3*t)},D.en=w[b],D.Ls=w,D.p={},D}()})),dt=ft((function(t,e){t.exports=function(t,e,n){e.prototype.isBetween=function(t,e,r,i){var u=n(t),o=n(e),s="("===(i=i||"()")[0],a=")"===i[1];return(s?this.isAfter(u,r):!this.isBefore(u,r))&&(a?this.isBefore(o,r):!this.isAfter(o,r))||(s?this.isBefore(u,r):!this.isAfter(u,r))&&(a?this.isAfter(o,r):!this.isBefore(o,r))}}})),vt=ft((function(t,e){t.exports=function(t,e){e.prototype.isSameOrAfter=function(t,e){return this.isSame(t,e)||this.isAfter(t,e)}}})),pt=ft((function(t,e){t.exports=function(t,e){e.prototype.isSameOrBefore=function(t,e){return this.isSame(t,e)||this.isBefore(t,e)}}}));ht.extend(dt),ht.extend(vt),ht.extend(pt);var mt=function(t){return ht(t).isValid()},yt=function(t,e,n){return ht(t).isAfter(ht(e),n)},gt=function(t,e,n){return ht(t).isBefore(ht(e),n)},bt=function(t,e,n,r){return ht(t).isBetween(ht((null==e?void 0:e.start)||new Date),ht((null==e?void 0:e.end)||new Date),n,r)},wt=function(t,e){var n,r,i;return(null==e?void 0:e.max)?(e.max=Number.parseInt(null===(r=null==e?void 0:e.max)||void 0===r?void 0:r.toString()),e.min=Number.parseInt(null===(i=null==e?void 0:e.min)||void 0===i?void 0:i.toString()),ht(t).isSameOrAfter(ht().subtract(e.max,"years"))&&ht(t).isSameOrBefore(ht().subtract(e.min||0,"years"))):(e.min=Number.parseInt(null===(n=null==e?void 0:e.min)||void 0===n?void 0:n.toString()),ht(t).isSameOrBefore(ht().subtract(e.min,"years")))},$t=function(t,e,n){return ht(t).isSame(ht(e),n)},St=function(t,e,n){return!$t(t,e,n)},Dt=function(t,e){var n=[];v(t=t||[],File)&&(t=[t]);for(var r=0,i=Array.from(t);r<i.length;r++){var u=i[r],o=[];p(u,File)&&n.push({error:"NOT_FILE"});for(var a=0,l=e;a<l.length;a++){var f=l[a];o=u.name.split("."),E(o.length,2)&&n.push({filename:u.name,mimeType:u.type,error:"WITHOUT_EXTENSION"}),c(f,o[o.length-1])&&n.push({filename:u.name,mimeType:u.type,extension:o[o.length-1],error:null})}}return{allowedExtensions:e,valid:s(n),filesInvalid:n}},Mt=function(t,e,n){void 0===n&&(n="KB");var r=[],i=z[n]||z.B;i*=e,v(t=t||[],File)&&(t=[t]);for(var u=0,o=Array.from(t);u<o.length;u++){var a=o[u];Z(a)||r.push({error:"NOT_FILE"}),_(a.size,i)&&r.push({filename:a.name,fileSizeInBytes:a.size,mimeType:a.type,error:"SIZE"})}return{maxSize:i,typeDefined:n,valid:s(r),filesInvalid:r}},Ot=function(t,e,n){void 0===n&&(n="KB");var r=[],i=z[n]||z.B;i*=e,v(t=t||[],File)&&(t=[t]);for(var u=0,o=Array.from(t);u<o.length;u++){var a=o[u];Z(a)||r.push({error:"NOT_FILE"}),E(a.size,i)&&r.push({filename:a.name,fileSizeInBytes:a.size,mimeType:a.type,error:"SIZE"})}return{minSize:i,typeDefined:n,valid:s(r),filesInvalid:r}};function Nt(t){return new xt(t)}var xt=function(n){var i=this;this.value=n,this.contains=function(t,e){return G(i.value,t,e)},this.testPattern=function(t){return lt(i.value,t)},this.isPassword=function(t,e){return ct(i.value,t,e)},this.isTypeof=function(t){return d(i.value,t)},this.isFalse=function(){return m(i.value)},this.isTrue=function(){return y(i.value)},this.isEqual=function(t){return a(i.value,t)},this.isDifferent=function(t){return c(i.value,t)},this.isEqualNotStrict=function(t){return l(i.value,t)},this.isDifferentNotStrict=function(t){return f(i.value,t)},this.isFill=function(){return h(i.value)},this.isEmpty=function(){return s(i.value)},this.isInstanceof=function(t){return v(i.value,t)},this.notIsInstanceOf=function(t){return p(i.value,t)},this.isString=function(){return g(i.value)},this.isObject=function(){return b(i.value)},this.isFunction=function(){return w(i.value)},this.isBoolean=function(){return $(i.value)},this.isNull=function(){return S(i.value)},this.isUndefined=function(){return D(i.value)},this.isCnpj=function(){return r(i.value)},this.isCpf=function(){return u(i.value)},this.isCpfOrCnpj=function(){return M(i.value)},this.isFile=function(){return Z(i.value)},this.maxHeightFile=function(n){return t(i,void 0,void 0,(function(){var t;return e(this,(function(e){switch(e.label){case 0:return t=T,[4,K(this.value)];case 1:return[2,t.apply(void 0,[e.sent().height,n])]}}))}))},this.minHeightFile=function(n){return t(i,void 0,void 0,(function(){var t;return e(this,(function(e){switch(e.label){case 0:return t=F,[4,K(this.value)];case 1:return[2,t.apply(void 0,[e.sent().height,n])]}}))}))},this.maxWidthFile=function(n){return t(i,void 0,void 0,(function(){var t;return e(this,(function(e){switch(e.label){case 0:return t=T,[4,K(this.value)];case 1:return[2,t.apply(void 0,[e.sent().width,n])]}}))}))},this.minWidthFile=function(n){return t(i,void 0,void 0,(function(){var t;return e(this,(function(e){switch(e.label){case 0:return t=F,[4,K(this.value)];case 1:return[2,t.apply(void 0,[e.sent().width,n])]}}))}))},this.maxSizeFile=function(t,e){return Mt(i.value,t,e).valid},this.minSizeFile=function(t,e){return Ot(i.value,t,e).valid},this.isAllowExtensionsFile=function(t){return Dt(i.value,t).valid},this.isNumeric=function(){return x(i.value)},this.isNumber=function(){return A(i.value)},this.isFloat=function(){return I(i.value)},this.isEqualNumber=function(t){return O(i.value,t)},this.isDifferentNumber=function(t){return N(i.value,t)},this.isBeforeNumber=function(t){return C(i.value,t)},this.isLessOrEqual=function(t){return F(i.value,t)},this.isLess=function(t){return E(i.value,t)},this.isMore=function(t){return _(i.value,t)},this.isMoreOrEqual=function(t){return T(i.value,t)},this.isDate=function(){return mt(i.value)},this.isAfterDate=function(t,e){return yt(i.value,t,e)},this.isBeforeDate=function(t,e){return gt(i.value,t,e)},this.isBetweenDate=function(t,e,n){return bt(i.value,t,e,n)},this.isBirthDateValidation=function(t){return wt(i.value,t)},this.isEqualDate=function(t,e){return $t(i.value,t,e)},this.isDifferentDate=function(t,e){return St(i.value,t,e)}},At={decimal:",",thousands:".",error:!1,precision:2,increment:0,round:"round"};function It(t,e){return new _t(t,e)}var _t=function(){function t(t,e){var n;this.config=Object.assign({},At,e),this.precision=Math.pow(10,null===(n=this.config)||void 0===n?void 0:n.precision),this.save(t)}return t.prototype.parse=function(e){return e=Nt(e).isInstanceof(t)?e.valueRaw:B(e,this.config)},t.prototype.save=function(e){Nt(e).isInstanceof(t)?this.valueRaw=e.valueRaw:this.valueRaw=B(e,this.config),this.value=this.roundingNumber(this.valueRaw)},t.prototype.roundingNumber=function(t){t=Number(t)*this.precision,t=Number(t.toFixed(4));var e=Math[this.config.round];return t=e(t)/this.precision,this.config.increment&&(t=e(t=Y(t,this.config.increment)*this.precision)/this.precision),t},t.prototype.add=function(t){return this.valueRaw=U(this.valueRaw,this.parse(t)),this.value=this.roundingNumber(this.valueRaw),this},t.prototype.subtract=function(t){return this.valueRaw=H(this.valueRaw,this.parse(t)),this.value=this.roundingNumber(this.valueRaw),this},t.prototype.multiply=function(t){return this.valueRaw=R(this.valueRaw,this.parse(t)),this.value=this.roundingNumber(this.valueRaw),this},t.prototype.divide=function(t){return this.valueRaw=k(this.valueRaw,this.parse(t)),this.value=this.roundingNumber(this.valueRaw),this},t.prototype.distribute=function(t){var e=this,r=P(this.valueRaw,this.parse(t)).map((function(t){return e.roundingNumber(t)})),i=this.roundingNumber(H(this.valueRaw,R(r.pop(),r.length)));return n(n([],r),[i])},t}();function Tt(t,e){if("string"==typeof e&&(e=null==e?void 0:e.split(".")),0===(null==(e=null==e?void 0:e.filter((function(t){return t})))?void 0:e.length))return t;var n=e[0];return null==e||e.shift(),0===(null==e?void 0:e.length)?null==t?void 0:t[n]:Tt(null==t?void 0:t[n],e)}function Et(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return Nt(e).isFill()&&e.forEach((function(e){Nt(e).isFill()&&Ft(t,e)})),t}function Ft(t,e){return Object.keys(e).reduce((function(t,n){return Nt(e[n]).isObject()&&Nt(e[n].name).isUndefined()?t[n]=Ft(t[n],e[n]):t[n]=e[n],t}),t||{})}It.config=function(t){Object.assign(At,t)},It.isCalc=function(t){return Nt(t).isInstanceof(_t)};var Ct,Lt,Bt=function(){return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"},jt={},Ut={prefix:"color",use:Bt()||"light",disableSystemBasedColorShift:!1,_element:document.createElement("style")};function Ht(t,e){return new Rt(t,e)}null===(Lt=null===(Ct=null===window||void 0===window?void 0:window.matchMedia)||void 0===Ct?void 0:Ct.call(window,"(prefers-color-scheme: dark)"))||void 0===Lt||Lt.addEventListener("change",(function(t){Nt(Ut.disableSystemBasedColorShift).isFalse()&&Ht().change(Bt()||"light")}));var Rt=function(){function t(t,e){Et(jt,t),Et(Ut,e),document.head.contains(this.element)||document.head.appendChild(this.element)}return Object.defineProperty(t.prototype,"themes",{get:function(){return jt},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"prefix",{get:function(){return Ut.prefix},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"style",{get:function(){return Ut._style},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"use",{get:function(){return Ut.use},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"config",{get:function(){return Ut},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"element",{get:function(){return Ut._element},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"themeSystem",{get:function(){return Bt()||"light"},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"isDark",{get:function(){return Nt(this.use).isEqual("dark")},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"isLight",{get:function(){return Nt(this.use).isEqual("light")},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"isNoPreference",{get:function(){return Nt(this.use).isEqual("no-preference")},enumerable:!1,configurable:!0}),t.prototype.reset=function(){jt={},Ut={use:this.themeSystem,_style:"",prefix:"color",disableChangeScheme:!1,_element:Ut._element}},t.prototype.change=function(t){Ut.use=t,this.createStyle()},t.prototype.createStyle=function(){Ut._style=this.generatorStyle(),Ut._element.innerHTML=this.style,document.body.classList.remove("theme-dark","theme-light","theme-no-preference"),document.body.classList.add("theme-"+Ut.use)},t.prototype.getColor=function(t,e){void 0===e&&(e=!0);var n=t.split(".");e&&n.unshift(this.use);var r=Tt(this.themes,n);return Nt(r).isObject()?r.default:r},t.prototype.generatorStyle=function(){var t=["color-scheme: "+this.use],e=jt[this.use];return Nt(jt.global).isObject()&&(t=t.concat(this.generatorStyleContent(jt.global))),Nt(e).isObject()&&(t=t.concat(this.generatorStyleContent(e))),":root{"+t.join(";")+";}"},t.prototype.generatorStyleContent=function(t){var e=this;return Object.keys(t).reduce((function(n,r){return Nt(t[r]).isString()?n.push("--"+e.prefix+"-"+r+": "+t[r]):Object.keys(t[r]).forEach((function(i){var u=t[r][i];Nt(i).isEqual("default")?n.push("--"+e.prefix+"-"+r+": "+u):n.push("--"+e.prefix+"-"+r+"-"+i+": "+u)})),n}),[])},t}();function kt(t,e){var n=null==e?void 0:e.split("|");return n[1],e=n[0],t.sort((function(t,n){var r=Tt(t,null==e?void 0:e.split(".")),i=Tt(n,null==e?void 0:e.split("."));if("number"==typeof r&&"number"==typeof i)return r-i;if("string"==typeof r){if(r.toLocaleUpperCase()<i.toLocaleUpperCase())return-1;if(i.toLocaleUpperCase()<r.toLocaleUpperCase())return 1}return 0}))}function Yt(t,e){var n=null==e?void 0:e.split("|");return n[1],e=n[0],t.sort((function(t,n){var r=Tt(t,null==e?void 0:e.split(".")),i=Tt(n,null==e?void 0:e.split("."));if("number"==typeof r&&"number"==typeof i){var u=r-i;return u>0?-1:0==u?0:1}if("string"==typeof r){if(r.toLocaleUpperCase()>i.toLocaleUpperCase())return-1;if(i.toLocaleUpperCase()>r.toLocaleUpperCase())return 1}return 0}))}Ht.config=function(t){Et(Ut,t)},Ht.theme=function(t){Et(jt,t)},Ht.isTheme=function(t){return Nt(t).isInstanceof(Rt)};var Pt=document.querySelector.bind(document),zt=document.querySelectorAll.bind(document);function Wt(n){return t(this,void 0,void 0,(function(){var t;return e(this,(function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),t=n.toPromise(),D(t)||(n=n.toPromise()),[4,n];case 1:return[2,[e.sent(),null]];case 2:return[2,[null,e.sent()]];case 3:return[2]}}))}))}var qt=ft((function(t,e){t.exports=function(t,e,n){t=t||{};var r=e.prototype,i={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function u(t,e,n,i){return r.fromToBase(t,e,n,i)}n.en.relativeTime=i,r.fromToBase=function(e,r,u,o,s){for(var a,c,l,f=u.$locale().relativeTime||i,h=t.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],d=h.length,v=0;v<d;v+=1){var p=h[v];p.d&&(a=o?n(e).diff(u,p.d,!0):u.diff(e,p.d,!0));var m=(t.rounding||Math.round)(Math.abs(a));if(l=a>0,m<=p.r||!p.r){m<=1&&v>0&&(p=h[v-1]);var y=f[p.l];s&&(m=s(""+m)),c="string"==typeof y?y.replace("%d",m):y(m,r,p.l,l);break}}if(r)return c;var g=l?f.future:f.past;return"function"==typeof g?g(c):g.replace("%s",c)},r.to=function(t,e){return u(t,e,this,!0)},r.from=function(t,e){return u(t,e,this)};var o=function(t){return t.$u?n.utc():n()};r.toNow=function(t){return this.to(o(this),t)},r.fromNow=function(t){return this.from(o(this),t)}}}));function Zt(t,e){return void 0===e&&(e="future"),t=ht(t),"future"===e?ht(Date.now()).to(t):ht(t).to(Date.now())}function Vt(t){return t?null!==t.match(ot)?ht().format("YYYY-MM-DDT"+t+"Z"):ht().format("YYYY-MM-DDTHH:mm:ssZ"):t}function Jt(t){if(!t)return!1;var e=(t=t.replace(/\D/g,"")).substr(0,8).split("");return Number(t.charAt(8))===function(t,e){void 0===e&&(e=9);var n=0,r=0;r=t.reduce((function(t,n){return t+Number.parseInt(n)*e--}),0),(n=r%11)>9&&(n=0);return n}(e)}ht.extend(qt);export{Pt as $,zt as $$,z as BIT_SIZES,_t as Calc,X as REGEX_CHAR_SPECIAL,tt as REGEX_CNPJ,nt as REGEX_CPF,et as REGEX_CPF_CNPJ,rt as REGEX_EMAIL,it as REGEX_NUMBER,ut as REGEX_PHONE_BR,ot as REGEX_TIME,st as REGEX_UPPER_CASE,at as REGEX_URL,q as RESOLUTION_HEIGHT,W as RESOLUTION_WIDTH,Rt as Theme,xt as Validate,U as add,V as base64toFile,It as calc,G as contains,P as distribute,k as divide,J as fileToBase64,Tt as getNode,K as getSizeImage,Wt as handleTry,Y as increment,yt as isAfterDate,Dt as isAllowExtensions,gt as isBeforeDate,C as isBeforeNumber,bt as isBetweenDate,wt as isBirthDateValidation,$ as isBoolean,r as isCnpj,u as isCpf,M as isCpfOrCnpj,mt as isDate,c as isDifferent,St as isDifferentDate,f as isDifferentNotStrict,N as isDifferentNumber,s as isEmpty,a as isEqual,$t as isEqualDate,l as isEqualNotStrict,O as isEqualNumber,m as isFalse,Z as isFile,h as isFill,I as isFloat,w as isFunction,v as isInstanceof,E as isLess,F as isLessOrEqual,_ as isMore,T as isMoreOrEqual,S as isNull,A as isNumber,x as isNumeric,b as isObject,ct as isPassword,Jt as isRgSp,g as isString,y as isTrue,d as isTypeof,D as isUndefined,Mt as maxSize,Ft as merge,Et as mergeObject,Ot as minSize,R as multiply,p as notIsInstanceof,B as parseNumber,Zt as relativeTime,Q as removeAccents,kt as sortAsc,Yt as sortDesc,H as subtract,lt as testPattern,Ht as theme,Bt as themeSystem,Vt as timeToDate,Nt as validate};
//# sourceMappingURL=utils.es5.js.map
