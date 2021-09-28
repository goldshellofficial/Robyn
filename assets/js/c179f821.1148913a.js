"use strict";(self.webpackChunkmmm_for_all=self.webpackChunkmmm_for_all||[]).push([[699],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3919:function(e,t,r){function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return a}})},4996:function(e,t,r){r.d(t,{C:function(){return i},Z:function(){return o}});var n=r(2263),a=r(3919);function i(){var e=(0,n.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var i=void 0===n?{}:n,o=i.forcePrependBaseUrl,l=void 0!==o&&o,s=i.absolute,u=void 0!==s&&s;if(!r)return r;if(r.startsWith("#"))return r;if((0,a.b)(r))return r;if(l)return t+r;var c=r.startsWith(t)?r:t+r.replace(/^\//,"");return u?e+c:c}(i,r,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},5260:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=r(4996),l=["components"],s={id:"quick-start",title:"Quick Start"},u=void 0,c={unversionedId:"quick-start",id:"quick-start",isDocsHomePage:!1,title:"Quick Start",description:"---",source:"@site/docs/quick-start.mdx",sourceDirName:".",slug:"/quick-start",permalink:"/Robyn/docs/quick-start",editUrl:"https://github.com/facebookexperimental/Robyn/docs/quick-start.mdx",version:"current",frontMatter:{id:"quick-start",title:"Quick Start"},sidebar:"someSidebar",next:{title:"Step-by-step Demo",permalink:"/Robyn/docs/demo-R-script"}},p=[{value:"1. Downloading the latest R version",id:"1-downloading-the-latest-r-version",children:[]},{value:"2. Installing the package",id:"2-installing-the-package",children:[]},{value:"3. Getting started with the demo.R script",id:"3-getting-started-with-the-demor-script",children:[]}],d={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"1-downloading-the-latest-r-version"},"1. Downloading the latest R version"),(0,i.kt)("p",null,"It is necessary to have the ",(0,i.kt)("a",{parentName:"p",href:"https://www.r-project.org/"},(0,i.kt)("strong",{parentName:"a"},"R 4.0.5 version (or higher)"))," installed in order to be able to run this code. R is a free software environment for statistical computing and graphics. It compiles and runs on a wide variety of UNIX platforms, Windows and MacOS. To\n",(0,i.kt)("a",{parentName:"p",href:"https://cran.r-project.org/mirrors.html"},"download R."),", please choose your\npreferred ",(0,i.kt)("a",{parentName:"p",href:"https://cran.r-project.org/mirrors.html"},"CRAN mirror."),". ",(0,i.kt)("strong",{parentName:"p"},"Please make sure you have restarted your R session once you have installed the latest R version.")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"2-installing-the-package"},"2. Installing the package"),(0,i.kt)("p",null,"Please run ",(0,i.kt)("inlineCode",{parentName:"p"},'remotes::install_github("facebookexperimental/Robyn/R")')," to install the package. If you haven't installed the ",(0,i.kt)("inlineCode",{parentName:"p"},"remotes")," package previously, run ",(0,i.kt)("inlineCode",{parentName:"p"},"install.packages('remotes')"),"first."),(0,i.kt)("p",null,"Robyn requires the Python library ",(0,i.kt)("a",{parentName:"p",href:"https://facebookresearch.github.io/nevergrad/"},"Nevergrad"),".\nYou must install it once for the code to work properly.\nPlease find ",(0,i.kt)("a",{parentName:"p",href:"https://rstudio.github.io/reticulate/articles/python_packages.html"},"here")," more info about installing Python packages via reticulate."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"First step is to install the ",(0,i.kt)("a",{parentName:"li",href:"https://rstudio.github.io/reticulate/"},"reticulate package")," via the following command: ",(0,i.kt)("inlineCode",{parentName:"li"},"install.packages(\u2018reticulate\u2019)")),(0,i.kt)("li",{parentName:"ol"},"Load the package using: ",(0,i.kt)("inlineCode",{parentName:"li"},"library(reticulate)")),(0,i.kt)("li",{parentName:"ol"},"Install nevergrad. You have 2 options:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Option 1: nevergrad installation via PIP"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'virtualenv_create("r-reticulate")\npy_install("nevergrad", pip = TRUE)\nuse_virtualenv("r-reticulate", required = TRUE)\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Option 2: nevergrad installation via conda"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'conda_create("r-reticulate") # must run this line once\nconda_install("r-reticulate", "nevergrad", pip=TRUE)\nuse_condaenv("r-reticulate")\n')),(0,i.kt)("p",null,"In case nevergrad still cannot be imported after installation, please locate your python file and run this line using your path:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'use_python("~/Library/r-miniconda/envs/r-reticulate/bin/python")\n')),(0,i.kt)("p",null,"For Windows, if you get openssl error, please see instructions ",(0,i.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/54558389/how-to-solve-this-error-while-installing-python-packages-in-rstudio/54566647"},"here")," and ",(0,i.kt)("a",{parentName:"p",href:"https://dev.to/danilovieira/installing-openssl-on-windows-and-adding-to-path-3mbf"},"here")," to install and update openssl."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"3-getting-started-with-the-demor-script"},"3. Getting started with the ",(0,i.kt)("a",{parentName:"h2",href:"https://github.com/facebookexperimental/Robyn/blob/main/demo/demo.R"},"demo.R")," script"),(0,i.kt)("p",null,"Open the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebookexperimental/Robyn/blob/main/demo/demo.R"},"demo.R")," script in the inst folder as a quick start guide that aims to cover most common use-cases.\nThe demo will allow you to test the package using a simulated dataset."),(0,i.kt)("p",null,"Please follow our Demo.R script walkthrough within this website for extra guidance"),(0,i.kt)("img",{alt:"inst folder",src:(0,o.Z)("/img/inst_folder.png")}),(0,i.kt)("hr",null))}m.isMDXComponent=!0}}]);