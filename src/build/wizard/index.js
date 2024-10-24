(()=>{"use strict";var e={338:(e,t,n)=>{var l=n(795);t.H=l.createRoot,l.hydrateRoot},795:e=>{e.exports=window.ReactDOM}},t={};function n(l){var a=t[l];if(void 0!==a)return a.exports;var o=t[l]={exports:{}};return e[l](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var l in t)n.o(t,l)&&!n.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var l=t.getElementsByTagName("script");if(l.length)for(var a=l.length-1;a>-1&&(!e||!/^http(s?):/.test(e));)e=l[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e+"../"})();var l={};n.r(l),n.d(l,{default:()=>f});var a={};n.r(a),n.d(a,{default:()=>L});var o={};n.r(o),n.d(o,{default:()=>y});var r={};n.r(r),n.d(r,{default:()=>N});var c={};n.r(c),n.d(c,{default:()=>F});var i={};n.r(i),n.d(i,{default:()=>k});const d=window.React,s=window.wp.domReady;var m=n.n(s),v=n(338);const u=window.wp.element,p=window.wp.components,h=window.wp.i18n,E=({moveToNextTab:e})=>(0,d.createElement)(p.Button,{variant:"primary",onClick:e},(0,h.__)("Set up my calendar","the-events-calendar")),b=({closeModal:e})=>(0,d.createElement)(p.Button,{variant:"secondary",onClick:e},(0,h.__)("Skip guided setup","the-events-calendar")),g=()=>{const[e,t]=(0,u.useState)(!1);return(0,d.createElement)("div",{alignment:"top",justify:"center",spacing:0,className:"tec-events-onboarding__opt-in-checkbox--wrapper"},(0,d.createElement)(p.CheckboxControl,{__nextHasNoMarginBottom:!0,"aria-describedby":"tec-events-opt-in-checkbox-description",checked:e,id:"tec-events-opt-in-checkbox",onChange:()=>{}}),(0,d.createElement)("div",{className:"tec-events-onboarding__opt-in-checkbox--description"},(0,d.createElement)("label",{htmlFor:"tec-events-opt-in-checkbox"},"Yes, I’d like to share basic information and have access to the TEC chatbot."),(0,d.createElement)("div",{id:"tec-events-opt-in-checkbox-description",style:{fontSize:13}},(0,d.createElement)("a",{href:"#",target:"_blank"},"What permissions are being granted?"))))},C=n.p+"images/wizard-intro-illo.c3798c4a.png",f=({closeModal:e,moveToNextTab:t})=>(0,d.createElement)(d.Fragment,null,(0,d.createElement)("img",{src:C,className:"tec-events-onboarding__intro-header",alt:"Welcome"}),(0,d.createElement)("h1",null,(0,h.__)("Welcome to The Events Calendar","the-events-calendar")),(0,d.createElement)("p",null,(0,h.__)("Congratulations on installing the best event management solution for WordPress. Let’s tailor your experience to your needs.","the-events-calendar")),(0,d.createElement)("p",null,(0,d.createElement)(E,{moveToNextTab:t})),(0,d.createElement)("p",null,(0,d.createElement)(b,{closeModal:e})),(0,d.createElement)(g,null)),_=({moveToNextTab:e})=>(0,d.createElement)(p.Button,{variant:"primary",onClick:e},(0,h.__)("Continue","the-events-calendar")),w=({moveToNextTab:e})=>(0,d.createElement)(p.Button,{variant:"secondary",onClick:e},(0,h.__)("Skip step","the-events-calendar")),L=({closeModal:e,moveToNextTab:t})=>(0,d.createElement)(d.Fragment,null,(0,d.createElement)("h1",null,(0,h.__)("How do you want people to view your calendar?","the-events-calendar")),(0,d.createElement)("p",null,(0,h.__)("Select how you want to display your events on your site. You can choose more than one.","the-events-calendar")),(0,d.createElement)("div",null,"Icons go here"),(0,d.createElement)("p",null,(0,d.createElement)(_,{moveToNextTab:t})),(0,d.createElement)("p",null,(0,d.createElement)(w,{moveToNextTab:t}))),T=()=>(0,d.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 37 36",className:"tec-events-onboarding__header-icon"},(0,d.createElement)("path",{fill:"#C3C4C7",fillRule:"evenodd",d:"M14.761 11.415a3.622 3.622 0 1 1 7.244 0 3.622 3.622 0 0 1-7.244 0ZM18.383 4.5a6.915 6.915 0 1 0 0 13.83 6.915 6.915 0 0 0 0-13.83Zm-5.268 15.805A6.915 6.915 0 0 0 6.2 27.22v2.634a1.646 1.646 0 0 0 3.293 0V27.22a3.622 3.622 0 0 1 3.622-3.622H23.65a3.622 3.622 0 0 1 3.622 3.622v2.634a1.646 1.646 0 0 0 3.293 0V27.22a6.915 6.915 0 0 0-6.915-6.915H13.115Z",clipRule:"evenodd"})),y=({closeModal:e,moveToNextTab:t})=>(0,d.createElement)(d.Fragment,null,(0,d.createElement)(T,null),(0,d.createElement)("h1",null,(0,h.__)("Add your first event organizer.","the-events-calendar")),(0,d.createElement)("p",null,(0,h.__)("Add an event organizer for your events. You can display this information for your event attendees on your website.","the-events-calendar")),(0,d.createElement)("div",null,"Form goes here"),(0,d.createElement)("p",null,(0,d.createElement)(_,{moveToNextTab:t})),(0,d.createElement)("p",null,(0,d.createElement)(w,{moveToNextTab:t}))),x=()=>(0,d.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 31 30",className:"tec-events-onboarding__header-icon"},(0,d.createElement)("g",{stroke:"#C3C4C7",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"3",clipPath:"url(#a)"},(0,d.createElement)("path",{d:"M15.5 18.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"}),(0,d.createElement)("path",{d:"M24.5 18.75a2.062 2.062 0 0 0 .413 2.275l.075.075a2.5 2.5 0 1 1-3.538 3.537l-.075-.075a2.062 2.062 0 0 0-2.275-.412 2.063 2.063 0 0 0-1.25 1.888v.212a2.5 2.5 0 0 1-5 0v-.113a2.062 2.062 0 0 0-1.35-1.887 2.062 2.062 0 0 0-2.275.413l-.075.075A2.5 2.5 0 1 1 5.612 21.2l.075-.075A2.063 2.063 0 0 0 6.1 18.85a2.063 2.063 0 0 0-1.887-1.25H4a2.5 2.5 0 0 1 0-5h.112A2.062 2.062 0 0 0 6 11.25a2.062 2.062 0 0 0-.412-2.275L5.513 8.9A2.5 2.5 0 0 1 7.28 4.63a2.5 2.5 0 0 1 1.769.732l.075.075a2.063 2.063 0 0 0 2.275.413h.1a2.063 2.063 0 0 0 1.25-1.887V3.75a2.5 2.5 0 0 1 5 0v.112A2.062 2.062 0 0 0 19 5.75a2.062 2.062 0 0 0 2.275-.412l.075-.075A2.5 2.5 0 1 1 24.887 8.8l-.075.075a2.062 2.062 0 0 0-.412 2.275v.1a2.063 2.063 0 0 0 1.888 1.25h.212a2.5 2.5 0 0 1 0 5h-.113a2.063 2.063 0 0 0-1.887 1.25Z"})),(0,d.createElement)("defs",null,(0,d.createElement)("clipPath",{id:"a"},(0,d.createElement)("path",{fill:"#fff",d:"M0 0h30v30H0z",transform:"translate(.5)"})))),N=({closeModal:e,moveToNextTab:t})=>(0,d.createElement)(d.Fragment,null,(0,d.createElement)(x,null),(0,d.createElement)("h1",null,(0,h.__)("Event Settings","the-events-calendar")),(0,d.createElement)("p",null,(0,h.__)("Let’s get your events with the correct basic settings.","the-events-calendar")),(0,d.createElement)("div",null,"Form goes here"),(0,d.createElement)("p",null,(0,d.createElement)(_,{moveToNextTab:t})),(0,d.createElement)("p",null,(0,d.createElement)(w,{moveToNextTab:t}))),M=()=>(0,d.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 37 36",className:"tec-events-onboarding__header-icon"},(0,d.createElement)("path",{fill:"#C3C4C7",fillRule:"evenodd",d:"M18.342 7.275a8.487 8.487 0 0 0-8.487 8.487c0 3.28 2.147 6.53 4.6 9.12a32.464 32.464 0 0 0 3.887 3.471 32.464 32.464 0 0 0 3.887-3.472c2.453-2.59 4.6-5.84 4.6-9.12a8.487 8.487 0 0 0-8.487-8.486Zm0 23.026-.877 1.314v-.001l-.003-.002-.009-.005-.027-.019a21.117 21.117 0 0 1-.441-.31 35.59 35.59 0 0 1-4.822-4.224c-2.58-2.723-5.466-6.743-5.466-11.292a11.645 11.645 0 1 1 23.29 0c0 4.549-2.887 8.569-5.466 11.291a35.59 35.59 0 0 1-4.822 4.225 21.117 21.117 0 0 1-.441.31l-.027.018-.009.006-.002.002h-.001s-.001.001-.877-1.313Zm0 0 .876 1.314a1.58 1.58 0 0 1-1.752 0l.876-1.314Zm.877-1.313Zm-1.754 0Z",clipRule:"evenodd"}),(0,d.createElement)("path",{fill:"#C3C4C7",fillRule:"evenodd",d:"M18.342 13.986a1.776 1.776 0 1 0 0 3.553 1.776 1.776 0 0 0 0-3.553Zm-4.934 1.776a4.934 4.934 0 1 1 9.869 0 4.934 4.934 0 0 1-9.869 0Z",clipRule:"evenodd"})),F=({closeModal:e,moveToNextTab:t})=>(0,d.createElement)(d.Fragment,null,(0,d.createElement)(M,null),(0,d.createElement)("h1",null,(0,h.__)("Add your first event venue.","the-events-calendar")),(0,d.createElement)("p",null,(0,h.__)("Add an event organizer for your events. You can display this information for your event attendees on your website.","the-events-calendar")),(0,d.createElement)("div",null,"Form goes here"),(0,d.createElement)("p",null,(0,d.createElement)(_,{moveToNextTab:t})),(0,d.createElement)("p",null,(0,d.createElement)(w,{moveToNextTab:t}))),R=()=>(0,d.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 47 35",className:"tec-events-onboarding__header-icon tec-events-onboarding__header-icon--brand"},(0,d.createElement)("path",{fill:"#fff",d:"m8.36.278.053.043 4.81 4.363a.572.572 0 0 1 .034.817 3.315 3.315 0 0 0-.898 2.272c0 1.85 1.515 3.35 3.382 3.35.965 0 1.862-.402 2.5-1.094.219-.238.637.273.877.491l3.925 3.858s5.612-4.799 6.541-6.172c.189-.279.328-.675.595-.48l.051.041 4.442 4.061c.25.229.25.617.001.846l-.119.113a4.226 4.226 0 1 0 6.32 5.582.596.596 0 0 1 .817-.116l.053.043 4.431 4.052c.21.192.249.503.094.739-3.564 5.41-12.863 10.833-17.943 11.325-4.456.431-7.52-.161-10.959-2.376l-.22-.144c-2.34-1.547-6.633-5.031-12.897-10.466l-.8-.695C1.566 19.77.5 17.818.587 14.729.716 10.223 3.206 5.105 7.577.36a.596.596 0 0 1 .782-.08Z"}),(0,d.createElement)("path",{fill:"#334AFF",fillRule:"evenodd",d:"M34.166 32.417c3.383-1.373 9.74-5.891 12.25-9.59l-5.067-4.433a4.854 4.854 0 0 1-3.8 1.806c-2.655 0-4.808-2.085-4.808-4.656 0-1.286 1.408-3.292 1.408-3.292l-4.3-4.06c-1.153 1.652-3.533 4.366-6.572 6.553-1.399 1.007-2.938 1.902-4.561 2.531",clipRule:"evenodd"}),(0,d.createElement)("path",{fill:"#0F1031",fillRule:"evenodd",d:"M8.413.321 8.359.278a.596.596 0 0 0-.782.08C3.206 5.105.717 10.223.588 14.73c-.088 3.09.979 5.043 2.861 6.002l.8.695c6.265 5.435 10.557 8.92 12.898 10.466l.22.144c3.439 2.215 6.503 2.807 10.959 2.376 5.08-.492 14.38-5.915 17.943-11.325a.572.572 0 0 0-.093-.739l-4.432-4.052-.053-.043a.596.596 0 0 0-.816.116 4.226 4.226 0 1 1-6.32-5.582l.118-.113a.572.572 0 0 0-.002-.846l-4.44-4.06-.052-.043a.595.595 0 0 0-.84.145c-1.407 2.08-3.496 4.043-6.58 6.42l-.271.2c-5.994 4.37-11.475 6.498-16.855 5.71-2.528-.37-3.967-1.975-3.868-5.438l.009-.23c.19-3.994 2.383-8.57 6.225-12.899l.055-.062 3.967 3.598-.053.074a4.452 4.452 0 0 0-.786 2.53c0 2.488 2.04 4.507 4.56 4.507l.161-.003a4.573 4.573 0 0 0 2.753-1.038l.03-.026 2.06 1.868a.596.596 0 0 0 .831-.033.572.572 0 0 0-.033-.818l-2.468-2.238a.596.596 0 0 0-.836.037 3.384 3.384 0 0 1-2.499 1.093c-1.867 0-3.382-1.499-3.382-3.35 0-.854.324-1.657.898-2.271a.572.572 0 0 0-.034-.817L8.413.32Zm21.454 8.827.058-.08 3.51 3.21-.076.09a5.355 5.355 0 0 0-1.223 3.41c0 2.972 2.417 5.384 5.402 5.384l.175-.003a5.392 5.392 0 0 0 3.647-1.577l.029-.03 3.616 3.306-.106.148c-3.62 4.93-12.13 9.812-16.689 10.254-4.294.416-7.12-.157-10.406-2.328l-.336-.227c-2.027-1.389-5.384-4.09-10.06-8.096L6.02 21.417c5.483.613 10.973-1.539 16.883-5.791l.573-.418.314-.243c2.708-2.109 4.658-3.918 6.076-5.817Z",clipRule:"evenodd"}),(0,d.createElement)("path",{fill:"#fff",fillRule:"evenodd",d:"M34.855 25.84a1.494 1.494 0 0 0 .09 2.14 1.567 1.567 0 0 0 2.182-.089 1.492 1.492 0 0 0-.09-2.14 1.567 1.567 0 0 0-2.182.089ZM30.221 21.801a1.493 1.493 0 0 0 .09 2.139 1.566 1.566 0 0 0 2.182-.088 1.493 1.493 0 0 0-.09-2.14 1.567 1.567 0 0 0-2.182.089ZM25.587 17.766a1.494 1.494 0 0 0 .09 2.14 1.567 1.567 0 0 0 2.183-.09 1.493 1.493 0 0 0-.09-2.139 1.567 1.567 0 0 0-2.183.089Z",clipRule:"evenodd"})),k=({closeModal:e,moveToNextTab:t})=>(0,d.createElement)(d.Fragment,null,(0,d.createElement)(R,null),(0,d.createElement)("h1",null,(0,h.__)("Event Tickets","the-events-calendar")),(0,d.createElement)("p",null,(0,h.__)("Will you be selling tickets or providing attendees the ability to RSVP to your events?","the-events-calendar")),(0,d.createElement)("div",null,"Form goes here"),(0,d.createElement)("p",null,(0,d.createElement)(_,{moveToNextTab:t})),(0,d.createElement)("p",null,(0,d.createElement)(w,{moveToNextTab:e}))),Z=({closeModal:e})=>{const t=[{name:"intro",title:(0,h.__)("Intro","the-events-calendar"),className:"tec-events-onboarding__tab--intro",disabled:!1,content:l},{name:"display",title:(0,h.__)("Display","the-events-calendar"),className:"tec-events-onboarding__tab--display",disabled:!0,content:a},{name:"settings",title:(0,h.__)("Settings","the-events-calendar"),className:"tec-events-onboarding__tab--settings",disabled:!0,content:r},{name:"organizer",title:(0,h.__)("Organizer","the-events-calendar"),className:"tec-events-onboarding__tab--organizer",disabled:!0,content:o},{name:"venue",title:(0,h.__)("Venue","the-events-calendar"),className:"tec-events-onboarding__tab--venue",disabled:!0,content:c},{name:"tickets",title:(0,h.__)("Tickets","the-events-calendar"),className:"tec-events-onboarding__tab--tickets",disabled:!0,content:i}],[n,s]=(0,u.useState)(t),[m,v]=(0,u.useState)("intro"),E=()=>{const e=n.findIndex((e=>e.name===m)),t=e+1<n.length?e+1:0,l=n[t];if(l.disabled){const e=n.map(((e,n)=>n===t?{...e,disabled:!1}:e));s(e)}v(l.name)};return(0,d.createElement)(p.TabPanel,{activeClass:"active-tab",initialTabName:"intro",className:"tec-events-onboarding__tab-panel",onSelect:v,tabs:n},(t=>{const l=n.find((e=>e.name===m));return(0,d.createElement)(d.Fragment,null,(0,d.createElement)(p.VisuallyHidden,null,(0,d.createElement)("h2",null,l.title)),l.content.default({closeModal:e,moveToNextTab:E}))}))},S=()=>{const[e,t]=(0,u.useState)(!0),n=()=>t(!1);return(0,d.createElement)(d.Fragment,null,e&&(0,d.createElement)(p.Modal,{overlayClassName:"tec-events-onboarding__modal-overlay",className:"tec-events-onboarding__modal",contentLabel:"TEC Onboarding Wizard",icon:(0,d.createElement)(d.Fragment,null,(0,d.createElement)("svg",{width:"31",height:"33",viewBox:"0 0 31 33",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,d.createElement)("g",{id:"EventsCalendar-icon"},(0,d.createElement)("path",{id:"white fill",d:"M1.46839 12.3425C0.887005 10.8 1.6987 9.08841 3.2763 8.53026L21.8859 1.94624C23.4936 1.37744 25.2619 2.22892 25.7859 3.82414L29.5145 15.1769C29.5775 15.369 29.6178 15.5673 29.6254 15.7689C29.7646 19.4824 27.9442 24.9168 22.3104 27.5588L17.2766 29.5331L9.43319 32.0966C9.17544 32.1809 8.89602 32.0494 8.80183 31.7995L1.46839 12.3425Z",fill:"white"}),(0,d.createElement)("path",{id:"fill",fillRule:"evenodd",clipRule:"evenodd",d:"M26.8824 6.58311L26.0339 4.15491C25.4462 2.48383 23.5743 1.61099 21.8814 2.21808L3.90795 8.66568C2.24865 9.26038 1.38768 11.0556 1.97895 12.6888L2.82935 14.9721L26.8824 6.58311Z",fill:"#334AFF"}),(0,d.createElement)("path",{id:"Combined Shape",fillRule:"evenodd",clipRule:"evenodd",d:"M18.6651 0.559771C18.5391 0.308651 18.2378 0.185743 17.9635 0.283638C17.6696 0.388526 17.518 0.707166 17.625 0.995341L18.2862 2.77658L6.48262 7.01087L5.83661 5.27052L5.81238 5.21479C5.68645 4.96367 5.38507 4.84076 5.11077 4.93865C4.81687 5.04354 4.66533 5.36218 4.7723 5.65036L5.41896 7.39243L3.45367 8.09744L3.33774 8.14108C1.46279 8.88107 0.504308 10.946 1.18556 12.8278L8.14535 32.0517L8.17344 32.1214C8.39606 32.6215 8.97873 32.8746 9.51126 32.6893L17.1745 29.9405C17.2072 29.9288 17.2382 29.9144 17.2673 29.8976C17.3201 29.8858 17.3721 29.8663 17.4216 29.8386C19.2333 28.8267 20.5916 27.0233 21.7298 24.544C21.9719 24.0167 22.1973 23.4741 22.4319 22.8661L22.4852 22.7272L23.039 21.2443C23.1356 20.9914 23.2097 20.8092 23.2732 20.6707L23.3253 20.562L23.3408 20.5313L23.4798 20.5359C25.7077 20.5952 27.5449 20.1023 28.716 19.2139C27.9027 22.7581 25.3271 25.8338 21.5914 27.1736C21.2977 27.279 21.1466 27.5979 21.2541 27.8859C21.3615 28.1739 21.6867 28.322 21.9805 28.2166C28.413 25.9095 31.72 18.9258 29.367 12.6183L26.3096 3.92706L26.2681 3.81477C25.534 1.92357 23.3795 0.949699 21.4272 1.6498L19.3499 2.39501L18.6893 0.615511L18.6651 0.559771ZM18.6736 3.82015L19.3239 5.57223L19.3482 5.62797C19.4741 5.87909 19.7755 6.002 20.0498 5.90411C20.3437 5.79922 20.4952 5.48058 20.3882 5.1924L19.7372 3.43859L21.8163 2.69276L21.9186 2.65832C23.2863 2.22787 24.7663 2.94553 25.2389 4.28916L28.2998 12.9901L28.3625 13.1625C28.7413 14.2312 28.9432 15.3191 28.9832 16.3951C28.9781 16.428 28.976 16.4619 28.9772 16.4963C29.037 18.2978 26.7696 19.6062 23.159 19.4116C22.6296 19.3832 22.4826 19.5439 22.076 20.5971L21.8913 21.0856L21.5883 21.9032L21.3725 22.4731C21.1455 23.0615 20.9286 23.5837 20.697 24.0881C19.6482 26.3727 18.4207 28.0025 16.861 28.8736L16.854 28.8776C16.831 28.8828 16.8081 28.8894 16.7853 28.8976L9.19141 31.6215L2.25292 12.4563L2.21778 12.3525C1.80243 11.035 2.51018 9.618 3.84266 9.14044L5.80634 8.43601L6.47124 10.2272L6.49547 10.283C6.62141 10.5341 6.92278 10.657 7.19708 10.5591C7.49098 10.4542 7.64252 10.1356 7.53555 9.84742L6.87 8.05444L18.6736 3.82015Z",fill:"#0F1031"}),(0,d.createElement)("path",{id:"Fill 5",fillRule:"evenodd",clipRule:"evenodd",d:"M21.4009 13.6287C21.6645 14.3355 22.4627 14.6986 23.1835 14.4401C23.9044 14.1816 24.2752 13.3992 24.0114 12.692C23.7478 11.9852 22.9498 11.6216 22.2286 11.8802C21.5079 12.1391 21.1372 12.9219 21.4009 13.6287Z",fill:"#334AFF"}),(0,d.createElement)("path",{id:"Fill 7",fillRule:"evenodd",clipRule:"evenodd",d:"M15.1743 15.8627C15.4379 16.5695 16.2363 16.933 16.9571 16.6745C17.678 16.4159 18.0488 15.6335 17.785 14.9263C17.5213 14.2195 16.7234 13.8559 16.0022 14.1146C15.2813 14.3731 14.9106 15.1559 15.1743 15.8627Z",fill:"#334AFF"}),(0,d.createElement)("path",{id:"Fill 9",fillRule:"evenodd",clipRule:"evenodd",d:"M8.94783 18.0952C9.21148 18.802 10.0098 19.1655 10.7307 18.907C11.4514 18.6481 11.8222 17.8657 11.5584 17.1585C11.2945 16.4522 10.4966 16.0886 9.77534 16.3473C9.05448 16.6058 8.68417 17.3884 8.94783 18.0952Z",fill:"#334AFF"}),(0,d.createElement)("path",{id:"Fill 11",fillRule:"evenodd",clipRule:"evenodd",d:"M17.3859 21.1481C17.6496 21.8549 18.4477 22.218 19.1686 21.9595C19.8895 21.701 20.2599 20.9187 19.9961 20.2115C19.7325 19.5047 18.9345 19.1411 18.2133 19.3997C17.4926 19.6586 17.1219 20.4414 17.3859 21.1481Z",fill:"#334AFF"}),(0,d.createElement)("path",{id:"Fill 13",fillRule:"evenodd",clipRule:"evenodd",d:"M11.0337 23.4251C11.2974 24.1319 12.0957 24.4954 12.8164 24.2365C13.5373 23.978 13.9081 23.1956 13.6439 22.4885C13.3803 21.7817 12.5825 21.4185 11.8612 21.6771C11.1404 21.9357 10.7701 22.7183 11.0337 23.4251Z",fill:"#334AFF"})))),isDismissible:!1,isFullScreen:!0,initialTabName:"intro",onRequestClose:n,selectOnMove:!1,shouldCloseOnClickOutside:!1},(0,d.createElement)(Z,{closeModal:n})))};m()((()=>{document.querySelectorAll(".tec-events-onboarding-wizard").forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault(),(e=>{const{containerElement:t}=e;(0,v.H)(t).render((0,d.createElement)(S,null))})({containerElement:document.getElementById(e.dataset.containerElement)})}))}))}))})();