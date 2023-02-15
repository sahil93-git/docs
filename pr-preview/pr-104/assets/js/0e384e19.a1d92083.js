"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[671],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>m});var i=o(7294);function l(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){l(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function n(e,t){if(null==e)return{};var o,i,l=function(e,t){if(null==e)return{};var o,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)o=a[i],t.indexOf(o)>=0||(l[o]=e[o]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)o=a[i],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(l[o]=e[o])}return l}var s=i.createContext({}),u=function(e){var t=i.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},p=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var o=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,p=n(e,["components","mdxType","originalType","parentName"]),c=u(o),h=l,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||a;return o?i.createElement(m,r(r({ref:t},p),{},{components:o})):i.createElement(m,r({ref:t},p))}));function m(e,t){var o=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=o.length,r=new Array(a);r[0]=h;var n={};for(var s in t)hasOwnProperty.call(t,s)&&(n[s]=t[s]);n.originalType=e,n[c]="string"==typeof e?e:l,r[1]=n;for(var u=2;u<a;u++)r[u]=o[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,o)}h.displayName="MDXCreateElement"},9881:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>n,toc:()=>u});var i=o(7462),l=(o(7294),o(3905));const a={sidebar_position:1,sidebar_label:"Introduction",description:"Intro to Rollkit, a modular framework for rollups."},r="Introduction to Rollkit",n={unversionedId:"intro",id:"intro",title:"Introduction to Rollkit",description:"Intro to Rollkit, a modular framework for rollups.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/pr-preview/pr-104/docs/intro",draft:!1,editUrl:"https://github.com/rollkit/docs/tree/main/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Introduction",description:"Intro to Rollkit, a modular framework for rollups."},sidebar:"tutorialSidebar",next:{title:"Rollkit Stack",permalink:"/pr-preview/pr-104/docs/rollkit-stack"}},s={},u=[{value:"What is Rollkit?",id:"what-is-rollkit",level:2},{value:"What problems is Rollkit solving?",id:"what-problems-is-rollkit-solving",level:2},{value:"1. Scalability and Customizability",id:"1-scalability-and-customizability",level:3},{value:"2. Security and Time to Market",id:"2-security-and-time-to-market",level:3},{value:"Why Rollkit?",id:"why-rollkit",level:2},{value:"How can you use Rollkit?",id:"how-can-you-use-rollkit",level:2},{value:"Roll with Any Virtual Machine",id:"roll-with-any-virtual-machine",level:3},{value:"App-Specific Rollup with Cosmos-SDK",id:"app-specific-rollup-with-cosmos-sdk",level:3},{value:"Build a Settlement Layer",id:"build-a-settlement-layer",level:3},{value:"When can you use Rollkit?",id:"when-can-you-use-rollkit",level:2}],p={toc:u};function c(e){let{components:t,...o}=e;return(0,l.kt)("wrapper",(0,i.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"introduction-to-rollkit"},"Introduction to Rollkit"),(0,l.kt)("p",null,"Welcome to Rollkit docs. We're happy you made it here!"),(0,l.kt)("p",null,"Our mission is to empower developers to quickly innovate and create entire new classes of rollups with minimal tradeoffs."),(0,l.kt)("p",null,"We're setting the bar high for developers' flexibility and ability to customize rollups however they see fit."),(0,l.kt)("admonition",{title:"Tip",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"If you're familiar with Rollkit, you may want to skip to the ",(0,l.kt)("a",{parentName:"p",href:"../category/tutorials"},"tutorials section"))),(0,l.kt)("h2",{id:"what-is-rollkit"},"What is Rollkit?"),(0,l.kt)("p",null,"Rollkit is a rollup framework that gives developers the freedom to deploy rollups throughout the modular stack, opening new possibilities for rapid experimentation and innovation."),(0,l.kt)("p",null,"The Rollkit framework features a modular node that can run rollups and expose an ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"https://github.com/informalsystems/tendermint/tree/main/abci"},"ABCI")),"-compatible client interface, which can be used as a substitute for Tendermint in any ABCI-compatible blockchain application.\nBy default, the node utilizes Celestia as the Data Availability (DA) layer. In the future, the node will be able to connect to any DA layer of choice."),(0,l.kt)("p",null,"In addition to deploying sovereign app-rollups, Rollkit can also be used to deploy rollups on existing settlement and execution layers, or even to create a new settlement layer.\nThe framework's strength lies in its flexibility, allowing developers to customize their rollups as per their requirements."),(0,l.kt)("p",null,"Rollkit is built as an open-source framework, so that developers could easily import existing modules into their applications.\nWe encourage developers to contribute to the development of Rollkit modules by adding new ones or improving existing ones."),(0,l.kt)("p",null,"Our goal is to empower developers to quickly innovate and create new classes of rollups with minimal trade-offs."),(0,l.kt)("p",null,"We\u2019re making deploying a new chain as easy as deploying a smart contract!"),(0,l.kt)("h2",{id:"what-problems-is-rollkit-solving"},"What problems is Rollkit solving?"),(0,l.kt)("h3",{id:"1-scalability-and-customizability"},"1. Scalability and Customizability"),(0,l.kt)("p",null,"Deploying your decentralized application as a smart contract on a shared blockchain has many limitations. Your smart contract has to share computational resources with every other application, so scalability is limited."),(0,l.kt)("p",null,"Plus, you\u2019re restricted to the execution environment that shared blockchain uses, so developer flexibility is limited."),(0,l.kt)("h3",{id:"2-security-and-time-to-market"},"2. Security and Time to Market"),(0,l.kt)("p",null,"App-chains might sound like the perfect solution for the problems listed above. While it\u2019s somehow true, deploying a new layer 1 chain presents a complex set of challenges and trade-offs for developers looking to build blockchain products."),(0,l.kt)("p",null,"Deploying a new layer 1 requires significant resources, including time, capital, and expertise, which can be a barrier to entry for some developers."),(0,l.kt)("p",null,"In order to secure the network, developers must bootstrap a sufficiently secure set of validators, incurring the overhead of managing a full consensus network. This requires paying validators with inflationary tokens, putting the business sustainability of the network at risk. A strong community and network effect are also critical for success, but can be challenging to achieve as the network must gain widespread adoption to be secure and valuable."),(0,l.kt)("p",null,"Also, in a potential future with millions of app-chains, it\u2019s highly unlikely all of those chains will be able to sustainably attract a sufficiently secure and decentralized validator set."),(0,l.kt)("h2",{id:"why-rollkit"},"Why Rollkit?"),(0,l.kt)("p",null,"Rollkit solves the challenges encountered during the deployment of a smart contract or a new layer 1, by minimizing these tradeoffs through the implementation of rollups."),(0,l.kt)("p",null,"With Rollkit, developers can benefit from:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Security"),":\nRollups inherit security by posting blocks on a secure DA layer. Rollkit reduces the trust assumptions placed on sequencers by allowing full nodes to fetch and compare the blocks posted by the sequencer to the blocks gossiped by the sequencer. In case of fraudulent blocks, full nodes can generate fraud proofs, which they can share with the rest of the network, including light nodes. Our roadmap includes the ability for light clients to receive and verify fraud proofs, so that everyday users can enjoy high security guarantees.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Scalability:"),"\nRollkit rollups are deployed on specialized data availability layers like Celestia, which directly leverages the scalability of the DA layer. As more users join the network and run light nodes, modular blockchains like Celestia become more scalable, eliminating the risk of decreased scalability with increased adoption.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Customizability:"),"\nRollkit is built as an open-source, modular framework, to make it easier for developers to use existing modules and customize their rollups. There are no constraints on the type of virtual machine that can be used, the programming language for creating applications, the state proof type (zk- vs. fraud-proofs), or any other part of the stack. Making Rollkit rollups fully customizable. We're currently working on further abstractions and enhancing the ABCI compatibilities.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Faster Time to Market:"),"\nRollkit eliminates the need to bootstrap a validator set, manage a consensus network, incur high economic costs, and face other trade-offs that come with deploying a new layer 1. Deploying a rollup is as easy as deploying a smart contract, cutting the time it takes to bring blockchain products to market from months or even years to just minutes.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Sovereignty"),": Rollkit also enables developers to build sovereign app-rollups for cases where communities require sovereignty. This possibility is provided to meet these needs."))),(0,l.kt)("h2",{id:"how-can-you-use-rollkit"},"How can you use Rollkit?"),(0,l.kt)("p",null,"As briefly mentioned above, Rollkit could be used in many different ways. From sovereign app-rollups, to settlement layers, and even to L3!  "),(0,l.kt)("h3",{id:"roll-with-any-virtual-machine"},"Roll with Any Virtual Machine"),(0,l.kt)("p",null,"Rollkit gives developers the flexibility to use pre-existing ABCI-compatible state machines or create a custom virtual machine tailored to their rollup needs. Rollkit does not restrict the use of any specific virtual machine, allowing developers to experiment and bring innovative dapps to life."),(0,l.kt)("h3",{id:"app-specific-rollup-with-cosmos-sdk"},"App-Specific Rollup with Cosmos-SDK"),(0,l.kt)("p",null,"Similarly to how developers utilize the Cosmos-SDK to build a sovereign L1, the Cosmos-SDK could be utilized to create a Rollkit-compatible app-rollup.\nCosmos-SDK has great ",(0,l.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/main"},"documentation")," and tooling that developers can leverage to learn."),(0,l.kt)("p",null,"Another possibility is taking an existing L1 built with the Cosmos-SDK and deploying it as a Rollkit rollup. This can provide a great opportunity for experimentation and growth."),(0,l.kt)("h3",{id:"build-a-settlement-layer"},"Build a Settlement Layer"),(0,l.kt)("p",null,"Settlement layers are ideal for developers who want to avoid deploying sovereign app-rollups. They provide a platform for rollups to verify proofs and resolve disputes.\nAdditionally, they act as a hub for rollups to facilitate token transfers and liquidity sharing between rollups that share the same settlement layer.\nThink of settlement layers as a special type of execution layer."),(0,l.kt)("p",null,"For more information on how they work, check out this ",(0,l.kt)("a",{parentName:"p",href:"https://celestia.org/learn/modular-settlement-layers/settlement-in-the-modular-stack"},"page")," on settlement layers by Celestia Labs."),(0,l.kt)("h2",{id:"when-can-you-use-rollkit"},"When can you use Rollkit?"),(0,l.kt)("p",null,"As of today, Rollkit is still in the MVP stages. The framework currently provides a centralized sequencer, an execution VM (ABCI and Cosmos SDK) and a connection to a data availability layer (Celestia)."),(0,l.kt)("p",null,"We\u2019re currently working on implementing many new and exciting features like light nodes and state fraud proofs."),(0,l.kt)("p",null,"Head down to the next section (",(0,l.kt)("a",{parentName:"p",href:"/pr-preview/pr-104/docs/rollkit-stack"},"Rollkit Stack"),") to learn more about what\u2019s coming for Rollkit. If you're ready to start building, you can skip to the ",(0,l.kt)("a",{parentName:"p",href:"../category/tutorials"},"Tutorials")," section."),(0,l.kt)("p",null,"Spoiler alert, whichever you choose, it\u2019s going to be a great rabbit hole!"))}c.isMDXComponent=!0}}]);