(this.webpackJsonpabout=this.webpackJsonpabout||[]).push([[6],{27:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(2),r=a(4),l=a(3),s=a(7),i=a(5),o=a(0),u=a.n(o),m=a(34),p=(a(27),function(e){var t=e.name,a=e.status,n=e.demourl,c=e.repourl,r=e.technologies,l=e.pictures,s=e.projectPreviewClick;return u.a.createElement("div",{className:"projectBoxWrapper"},u.a.createElement("div",{className:"innerProjectBox"},u.a.createElement("div",{className:"innerProjectWrapper"},u.a.createElement("div",{className:"projectHeadline"},t),u.a.createElement("div",{className:"projectStatus ".concat(a.cssclass)},a.label),"online"===a.label&&u.a.createElement("div",{className:"projectURLs"},u.a.createElement("div",{className:"projectDemoURLs"},u.a.createElement("img",{draggable:"false",className:"iconURL",alt:"Project Demo Icon",src:"./icons/demo.png"}),u.a.createElement("p",{onClick:function(){return window.open(n.url,"_blank")}},n.label)),u.a.createElement("div",{className:"projectRepoURLs"},u.a.createElement("img",{draggable:"false",className:"iconURL",alt:"Project Repo Icon",src:"./icons/repo.png"}),u.a.createElement("p",{onClick:function(){return window.open(c.url,"_blank")}},c.label))),u.a.createElement("div",{className:"projectTechnologies"},u.a.createElement("div",{className:"projectTechnologyList"},r.map((function(e,t){return u.a.createElement("p",{key:t}," ",e.name)})))),"coming soon"===a.label&&l.length>0&&u.a.createElement("div",{className:"projectPictures"},l.map((function(e,t){return u.a.createElement("div",{style:{display:"block",marginBottom:"20px",textAlign:"center"},key:t},u.a.createElement("p",null,e.name),u.a.createElement("img",{draggable:"false",alt:e.name,src:e.src,className:"projectPreviewPicture",onClick:function(){return s(e.src,e.name)}}))}))))))}),d=[{name:"Evening Routine",status:{cssclass:"online",label:"online"},demourl:{label:"Live Demo",url:"https://cscheffauer.github.io/evening_routine/"},repourl:{label:"Repository",url:"https://github.com/cscheffauer/evening_routine"},technologies:[{name:"React"},{name:"React.lazy"},{name:"Redux"},{name:"Redux-Thunk"},{name:"Material-UI"}],pictures:[]},{name:"Star Wars Figures",status:{cssclass:"online",label:"online"},demourl:{label:"Live Demo",url:"https://cscheffauer.github.io/starwars/"},repourl:{label:"Repository",url:"https://github.com/cscheffauer/starwars"},technologies:[{name:"React"},{name:"React.lazy"},{name:"Redux"},{name:"Redux-Thunk"},{name:"Tachyons"}],pictures:[]},{name:"Newsroom Control System",status:{cssclass:"inwork",label:"coming soon"},demourl:{label:"coming soon",url:""},repourl:{label:"coming soon",url:""},technologies:[{name:"React.js"},{name:"React.lazy"},{name:"Redux"}],pictures:[{name:"Rundown Mockup",src:"pictures/nrcs_preview1.png"},{name:"Story Editor Mockup",src:"pictures/nrcs_preview2.png"}]}],h=function(e){function t(e,a){var c;return Object(n.a)(this,t),(c=Object(r.a)(this,Object(l.a)(t).call(this,e,a))).projectPreviewClick=function(e,t){c.setState({displayPictureModal:!0,displayPicturesSRC:e,displayPicturesCaption:t})},c.projectPictureOnClose=function(){c.setState({displayPictureModal:!1})},c.handleSelect=c.handleSelect.bind(Object(s.a)(c)),c.state={index:0,direction:null,fade:!0,interval:null,touch:!0,projects:d,displayPictureModal:!1,displayPicturesSRC:"",displayPicturesCaption:""},c}return Object(i.a)(t,e),Object(c.a)(t,[{key:"handleSelect",value:function(e,t){this.setState({index:e,direction:t.direction})}},{key:"componentDidMount",value:function(){this.setState({projects:d})}},{key:"render",value:function(){var e=this,t=this.state,a=t.index,n=t.direction,c=t.fade,r=t.interval,l=t.touch,s=t.projects;return u.a.createElement(o.Fragment,null,this.state.displayPictureModal&&u.a.createElement("div",{className:"projectPictureModal"},u.a.createElement("span",{className:"projectPictureClose",onClick:function(){return e.projectPictureOnClose()}},"\xd7"),u.a.createElement("img",{draggable:"false",src:this.state.displayPicturesSRC,alt:this.state.displayPicturesCaption,className:"projectPicture"}),u.a.createElement("div",{className:"projectPictureCaption"},this.state.displayPicturesCaption)),u.a.createElement("div",{className:"projectOuterBox"},u.a.createElement(m.a,{activeIndex:a,direction:n,fade:c,interval:r,onSelect:this.handleSelect,touch:l},s.map((function(t,a){return u.a.createElement(m.a.Item,{key:a},u.a.createElement(p,{name:t.name,status:t.status,demourl:t.demourl,repourl:t.repourl,technologies:t.technologies,pictures:t.pictures,projectPreviewClick:e.projectPreviewClick}))})))))}}]),t}(o.Component);t.default=h}}]);
//# sourceMappingURL=6.2a8baae6.chunk.js.map