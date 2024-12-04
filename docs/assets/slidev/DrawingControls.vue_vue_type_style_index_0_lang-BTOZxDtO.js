import{j as Y,k as G,l as I,m as J,n as O,o as X,p as Z,q as ee,r as ne,s as te,t as se,u as oe}from"../modules/unplugin-icons-CmOUiD-x.js";import{d as V,t as h,H as le,V as ae,o as g,b as z,f as re,h as B,A as e,c as x,k as o,l as t,i as l,e as u,x as ie,P as m,Q as ue,F as ce,T as de,W as k,g as L}from"../modules/vue-8sTeOszy.js";import{L as pe}from"../modules/shiki-CthHAa_Q.js";import{u as _e}from"./SlideWrapper-Dd8S8Zav.js";import{_ as a}from"./IconButton.vue_vue_type_script_setup_true_lang-CdlbiNy2.js";import{V as D}from"./shortcuts-DqR4q6Oo.js";const me=V({__name:"Draggable",props:{storageKey:{},initial:{}},setup($){const c=$,w=h(null),f=c.initial??{x:0,y:0},b=c.storageKey?le(c.storageKey,f):h(f),{style:y}=ae(w,{initialValue:b});return(v,d)=>(g(),z("div",{ref_key:"el",ref:w,class:"fixed",style:B(e(y))},[re(v.$slots,"default")],4))}}),ge={class:"flex bg-main p-2"},we={class:"inline-block w-7 text-center"},fe={class:"pt-.5"},$e=V({__name:"DrawingControls",setup($){const{brush:c,canClear:w,canRedo:f,canUndo:b,clear:y,drauu:v,drawingEnabled:d,drawingMode:r,drawingPinned:i,brushColors:M}=_e();function S(){v.undo()}function U(){v.redo()}let C="stylus";function p(_){r.value=_,d.value=!0,_!=="eraseLine"&&(C=_)}function A(_){c.color=_,d.value=!0,r.value=C}return(_,n)=>{const E=Y,K=G,N=I,P=J,R=O,j=X,F=Z,T=ee,q=ne,H=te,Q=se,W=oe;return e(d)||e(i)?(g(),x(me,{key:0,class:l(["flex flex-wrap text-xl p-2 gap-1 rounded-md bg-main shadow transition-opacity duration-200 z-20 border border-main",!e(d)&&e(i)?"opacity-40 hover:opacity-90":""]),"storage-key":"slidev-drawing-pos","initial-x":10,"initial-y":10},{default:o(()=>[t(a,{title:"Draw with stylus",class:l({shallow:e(r)!=="stylus"}),onClick:n[0]||(n[0]=s=>p("stylus"))},{default:o(()=>[t(E)]),_:1},8,["class"]),t(a,{title:"Draw a line",class:l({shallow:e(r)!=="line"}),onClick:n[1]||(n[1]=s=>p("line"))},{default:o(()=>n[13]||(n[13]=[u("svg",{width:"1em",height:"1em",class:"-mt-0.5",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},[u("path",{d:"M21.71 3.29a1 1 0 0 0-1.42 0l-18 18a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l18-18a1 1 0 0 0 0-1.42z",fill:"currentColor"})],-1)])),_:1},8,["class"]),t(a,{title:"Draw an arrow",class:l({shallow:e(r)!=="arrow"}),onClick:n[2]||(n[2]=s=>p("arrow"))},{default:o(()=>[t(K)]),_:1},8,["class"]),t(a,{title:"Draw an ellipse",class:l({shallow:e(r)!=="ellipse"}),onClick:n[3]||(n[3]=s=>p("ellipse"))},{default:o(()=>[t(N)]),_:1},8,["class"]),t(a,{title:"Draw a rectangle",class:l({shallow:e(r)!=="rectangle"}),onClick:n[4]||(n[4]=s=>p("rectangle"))},{default:o(()=>[t(P)]),_:1},8,["class"]),t(a,{title:"Erase",class:l({shallow:e(r)!=="eraseLine"}),onClick:n[5]||(n[5]=s=>p("eraseLine"))},{default:o(()=>[t(R)]),_:1},8,["class"]),t(D),t(e(pe),null,{popper:o(()=>[u("div",ge,[u("div",we,ie(e(c).size),1),u("div",fe,[m(u("input",{"onUpdate:modelValue":n[6]||(n[6]=s=>e(c).size=s),type:"range",min:"1",max:"15",onChange:n[7]||(n[7]=s=>r.value=e(C))},null,544),[[ue,e(c).size]])])])]),default:o(()=>[t(a,{title:"Adjust stroke width",class:l({shallow:e(r)==="eraseLine"})},{default:o(()=>n[14]||(n[14]=[u("svg",{viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},[u("line",{x1:"2",y1:"15",x2:"22",y2:"4",stroke:"currentColor","stroke-width":"1","stroke-linecap":"round"}),u("line",{x1:"2",y1:"24",x2:"28",y2:"10",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"}),u("line",{x1:"7",y1:"31",x2:"29",y2:"19",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round"})],-1)])),_:1},8,["class"])]),_:1}),(g(!0),z(ce,null,de(e(M),s=>(g(),x(a,{key:s,title:"Set brush color",class:l(e(c).color===s&&e(r)!=="eraseLine"?"active":"shallow"),onClick:ve=>A(s)},{default:o(()=>[u("div",{class:l(["w-6 h-6 transition-all transform border",e(c).color!==s?"rounded-1/2 scale-85 border-white":"rounded-md border-gray-300/50"]),style:B(e(d)?{background:s}:{borderColor:s})},null,6)]),_:2},1032,["class","onClick"]))),128)),t(D),t(a,{title:"Undo",class:l({disabled:!e(b)}),onClick:n[8]||(n[8]=s=>S())},{default:o(()=>[t(j)]),_:1},8,["class"]),t(a,{title:"Redo",class:l({disabled:!e(f)}),onClick:n[9]||(n[9]=s=>U())},{default:o(()=>[t(F)]),_:1},8,["class"]),t(a,{title:"Delete",class:l({disabled:!e(w)}),onClick:n[10]||(n[10]=s=>e(y)())},{default:o(()=>[t(T)]),_:1},8,["class"]),t(D),t(a,{title:e(i)?"Unpin drawing":"Pin drawing",class:l({shallow:!e(i)}),onClick:n[11]||(n[11]=s=>i.value=!e(i))},{default:o(()=>[m(t(q,{class:"transform -rotate-45"},null,512),[[k,e(i)]]),m(t(H,null,null,512),[[k,!e(i)]])]),_:1},8,["title","class"]),e(d)?(g(),x(a,{key:0,title:e(i)?"Drawing pinned":"Drawing unpinned",class:l({shallow:!e(d)}),onClick:n[12]||(n[12]=s=>d.value=!e(d))},{default:o(()=>[m(t(Q,null,null,512),[[k,e(i)]]),m(t(W,null,null,512),[[k,!e(i)]])]),_:1},8,["title","class"])):L("v-if",!0)]),_:1},8,["class"])):L("v-if",!0)}}});export{$e as _};
