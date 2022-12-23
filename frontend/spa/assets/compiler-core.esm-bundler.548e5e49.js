import{c,h as f,u as T,b as E,d as I}from"./QBtn.60fede63.js";import{c as i,h as u,g as b,r as h,b as $,s as p}from"./index.6a5ebf8d.js";const m={dark:{type:Boolean,default:null}};function q(e,a){return i(()=>e.dark===null?a.dark.isActive:e.dark)}const R=["horizontal","vertical","cell","none"];var F=c({name:"QMarkupTable",props:{...m,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,wrapCells:Boolean,separator:{type:String,default:"horizontal",validator:e=>R.includes(e)}},setup(e,{slots:a}){const t=b(),n=q(e,t.proxy.$q),r=i(()=>`q-markup-table q-table__container q-table__card q-table--${e.separator}-separator`+(n.value===!0?" q-table--dark q-table__card--dark q-dark":"")+(e.dense===!0?" q-table--dense":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")+(e.square===!0?" q-table--square":"")+(e.wrapCells===!1?" q-table--no-wrap":""));return()=>u("div",{class:r.value},[u("table",{class:"q-table"},f(a.default))])}}),N=c({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:a}){const t=i(()=>parseInt(e.lines,10)),n=i(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(t.value===1?" ellipsis":"")),r=i(()=>e.lines!==void 0&&t.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":t.value}:null);return()=>u("div",{style:r.value,class:n.value},f(a.default))}}),O=c({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:a}){const t=i(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>u("div",{class:t.value},f(a.default))}}),P=c({name:"QItem",props:{...m,...T,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:a,emit:t}){const{proxy:{$q:n}}=b(),r=q(e,n),{hasLink:s,linkAttrs:w,linkClass:B,linkTag:S,navigateOnClick:x}=E(),d=h(null),v=h(null),g=i(()=>e.clickable===!0||s.value===!0||e.tag==="label"),o=i(()=>e.disable!==!0&&g.value===!0),L=i(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(r.value===!0?" q-item--dark":"")+(s.value===!0&&e.active===null?B.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(o.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),D=i(()=>{if(e.insetLevel===void 0)return null;const l=n.lang.rtl===!0?"Right":"Left";return{["padding"+l]:16+e.insetLevel*56+"px"}});function C(l){o.value===!0&&(v.value!==null&&(l.qKeyEvent!==!0&&document.activeElement===d.value?v.value.focus():document.activeElement===v.value&&d.value.focus()),x(l))}function Q(l){if(o.value===!0&&$(l,13)===!0){p(l),l.qKeyEvent=!0;const k=new MouseEvent("click",l);k.qKeyEvent=!0,d.value.dispatchEvent(k)}t("keyup",l)}function M(){const l=I(a.default,[]);return o.value===!0&&l.unshift(u("div",{class:"q-focus-helper",tabindex:-1,ref:v})),l}return()=>{const l={ref:d,class:L.value,style:D.value,role:"listitem",onClick:C,onKeyup:Q};return o.value===!0?(l.tabindex=e.tabindex||"0",Object.assign(l,w.value)):g.value===!0&&(l["aria-disabled"]="true"),u(S.value,l,M())}}}),z=c({name:"QList",props:{...m,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:a}){const t=b(),n=q(e,t.proxy.$q),r=i(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(n.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>u(e.tag,{class:r.value},f(a.default))}});function A(e){const a=e.getFullYear(),t=e.getMonth()+1;var n=""+t;t<10&&(n="0"+t);const r=e.getDate();var s=""+r;return r<10&&(s="0"+r),a+"."+n+"."+s}function y(e){const a=e.getHours();var t=""+a;a<10&&(t="0"+a);const n=e.getMinutes();var r=""+n;return n<10&&(r="0"+n),t+":"+r}function _(e,a){var t=(e.getTime()-a.getTime())/1e3;return Math.abs(Math.round(t))}function W(e){const a=new Date,t=new Date(e);if(a.toLocaleDateString()==t.toLocaleDateString()){const n=_(a,t);return n<60?n+" sec ago":n<60*5?Math.abs(Math.round(n/60))+" min ago":y(t)}return A(t)+" "+y(t)}function H(e){const a=new Date,t=new Date(e);return _(a,t)<60}new RegExp("\\b"+"do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments,typeof,void".split(",").join("\\b|\\b")+"\\b");export{F as Q,q as a,N as b,z as c,P as d,O as e,H as i,W as l,m as u};
