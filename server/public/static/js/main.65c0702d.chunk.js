(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{136:function(e,t,a){},140:function(e,t,a){},144:function(e,t,a){},148:function(e,t,a){},152:function(e,t,a){},156:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(27),i=a.n(l),c=(a(42),a(9)),s=a(3),m=a(5),o=a(7),u=a(6),d=a(8),h=(a(44),a(157)),p=(a(48),function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"portada"},r.a.createElement("div",{className:"imagen-portada-div"},r.a.createElement("img",{className:"imagen-portada",src:"https://res.cloudinary.com/deosqppvg/image/upload/v1545132784/Canguro/Logo.png",alt:""})),r.a.createElement("div",{className:"botonera"},r.a.createElement(h.a,{to:"/login"},r.a.createElement("button",{className:"Rectangle-14",type:"button"},"LOGIN")),r.a.createElement(h.a,{to:"/signup"},r.a.createElement("button",{className:"Rectangle-14-Copy",type:"button"},"SIGNUP"))))}}]),t}(n.Component)),f=a(11),E=a(23),g=a.n(E),v=function e(){var t=this;Object(s.a)(this,e),this.signup=function(e){return t.service.post("/signup",e).then(function(e){return e.data})},this.login=function(e){return t.service.post("/login",e).then(function(e){return e.data})},this.loggedin=function(){return t.service.get("/loggedin").then(function(e){return e.data})},this.logout=function(){return t.service.get("/logout").then(function(e){return e.data})},this.editpro=function(e){return t.service.post("/edit",e).then(function(e){return e.data})},this.editproimg=function(e){var a=new FormData;return Object.keys(e).forEach(function(t){return a.append(t,e[t])}),t.service.post("/editimg",a).then(function(e){return e.data})},this.mail=function(e,a){return t.mailService.post("/sendMail",{mail:e,token:a}).then(function(e){return e.data})},this.invitedSignup=function(e){return t.mailService.post("/confirm/:token",{user:e}).then(function(e){return e.data})},this.newKid=function(e){return t.elementsService.post("/newKid",{kid:e}).then(function(e){return e.data})},this.getKid=function(e){return t.elementsService.post("/getKid",{kid:e}).then(function(e){return e.data})},this.addAlle=function(e){return t.elementsService.post("/addAlle",e).then(function(e){return e.data})},this.addVac=function(e){return t.elementsService.post("/addVac",e).then(function(e){return e.data})},this.addInt=function(e){return t.elementsService.post("/addInt",e).then(function(e){return e.data})},this.editkidimg=function(e){var a=new FormData;return Object.keys(e).forEach(function(t){return a.append(t,e[t])}),t.elementsService.post("/editkidimg",a).then(function(e){return e.data})},this.newTask=function(e){return t.elementsService.post("/newTask",e).then(function(e){return e.data})},this.newReminder=function(e){return t.elementsService.post("/newReminder",e).then(function(e){return e.data})},this.checkTask=function(e){return t.elementsService.post("/checkTask",e).then(function(e){return e.data})},this.newPhoto=function(e){var a=new FormData;return Object.keys(e).forEach(function(t){return a.append(t,e[t])}),t.service.post("/newPhoto",a).then(function(e){return e.data})},this.service=g.a.create({baseURL:"".concat("https://ourus.herokuapp.com/api","/auth"),withCredentials:!0}),this.mailService=g.a.create({baseURL:"".concat("https://ourus.herokuapp.com/api","/mail"),withCredentials:!0}),this.elementsService=g.a.create({baseURL:"".concat("https://ourus.herokuapp.com/api","/elements"),withCredentials:!0})},b=a(159),S=(a(73),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).handleFormSubmit=function(t){t.preventDefault();var a=e.state,n=a.username,r=a.password;e.authService.login({username:n,password:r}).then(function(t){e.setState({username:"",password:"",user:t.user,redirect:!0}),e.props.getUser(t)})},e.handlerState=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(f.a)({},n,r))},e.state={user:null,username:"",password:"",redirect:!1},e.authService=new v,e}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return console.log(this.state.user),this.state.redirect?(console.log("TPM"),r.a.createElement(b.a,{to:"/main"})):r.a.createElement("div",{className:"ironprofile"},r.a.createElement("div",{className:"imagen-login-div"},r.a.createElement("img",{className:"imagen-login",src:"https://res.cloudinary.com/deosqppvg/image/upload/v1545132784/Canguro/Logo.png",alt:""})),r.a.createElement("div",{className:"form-login"},r.a.createElement("form",{action:"submit",onSubmit:this.handleFormSubmit},r.a.createElement("label",null,"USERNAME"),r.a.createElement("input",{type:"text",name:"username",id:"username",placeholder:"Username",onChange:function(t){return e.handlerState(t)}}),r.a.createElement("label",null,"PASSWORD"),r.a.createElement("input",{type:"password",name:"password",id:"password",placeholder:"Password",onChange:function(t){return e.handlerState(t)}}),r.a.createElement("div",{className:"login-button"},r.a.createElement("input",{className:"submitbutton-login",type:"submit"})))))}}]),t}(n.Component)),y=(a(78),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=a.state,n=t.username,r=t.password,l=t.email,i=t.family;a.authService.signup({username:n,password:r,email:l,family:i}).then(function(e){a.props.getUser(e),a.setState({username:"",password:"",email:"",family:"",redirect:!0})})},a.handlerState=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(f.a)({},n,r))},a.state={username:"",password:"",family:"",redirect:!1},a.authService=new v,a.user={},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return this.state&&this.state.redirect?r.a.createElement(b.a,{to:"/"}):r.a.createElement("div",{className:"ironprofile"},r.a.createElement("div",{className:"imagen-signup-div"},r.a.createElement("img",{className:"imagen-singnup",src:"https://res.cloudinary.com/deosqppvg/image/upload/v1545132784/Canguro/Logo.png",alt:""})),r.a.createElement("div",{className:"form-signup"},r.a.createElement("form",{action:"submit",onSubmit:this.handleFormSubmit},r.a.createElement("label",null,"USERNAME"),r.a.createElement("input",{type:"text",name:"username",id:"name",onChange:function(t){return e.handlerState(t)}}),r.a.createElement("label",null,"PASSWORD"),r.a.createElement("input",{type:"password",name:"password",id:"pass",onChange:function(t){return e.handlerState(t)}}),r.a.createElement("label",null,"MAIL"),r.a.createElement("input",{type:"email",name:"email",id:"email",onChange:function(t){return e.handlerState(t)}}),r.a.createElement("label",null,"FAMILY NAME"),r.a.createElement("label",{htmlFor:""}),r.a.createElement("input",{type:"text",name:"family",id:"family",onChange:function(t){return e.handlerState(t)}}),r.a.createElement("input",{className:"submitbutton",type:"submit"}))))}}]),t}(n.Component)),N=(a(82),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).logout=function(){a.authService.logout().then(function(){return a.setState(Object(c.a)({},a.state,{user:null,family:null,redirect:!0}))})},a.handleFormEdit=function(){var e=!a.state.edit;a.setState({edit:e})},a.handlerState=function(e){var t=e.target,n=t.name,r=t.value;"photo"===n?a.setState(Object(c.a)({},a.state,{photo:e.target.files[0]})):a.setState(Object(c.a)({},a.state,Object(f.a)({},n,r)))},a.handleFormSubmitImage=function(e){e.preventDefault();var t=a.state.photo;a.authService.editproimg({user:a.data._id,photo:t}).then(function(e){a.props.getUser(e),a.setState({photo:e.user.photo,redirect:!0})})},a.handleFormSubmit=function(e){e.preventDefault();var t=a.state,n=t.username,r=t.email;a.authService.editpro({user:a.data._id,username:n,email:r}).then(function(e){a.props.getUser(e),a.setState({username:e.user.username,email:e.user.email,redirect:!0})})},a.data=a.props.user.user,a.state={username:a.data.username,family:a.data.family,email:a.data.email,rol:a.data.rol,photo:a.data.photo,edit:!1,redirect:!1},a.authService=new v,a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.state.edit?r.a.createElement("input",{type:"text",name:"username",value:this.state.username,onChange:function(t){return e.handlerState(t)}}):r.a.createElement("div",null),a=this.state.edit?r.a.createElement("input",{type:"text",name:"email",value:this.state.email,onChange:function(t){return e.handlerState(t)}}):r.a.createElement("div",null),n=this.state.edit?r.a.createElement("input",{className:"submitbutton-profile",type:"submit"}):r.a.createElement("div",null),l=this.state.edit?r.a.createElement("input",{type:"file",name:"photo",onChange:function(t){return e.handlerState(t)}}):r.a.createElement("div",null);return this.state.redirect?r.a.createElement(b.a,{to:"/main"}):r.a.createElement("div",{className:"ironprofile"},r.a.createElement("form",{className:"profile-user",action:"",onSubmit:this.handleFormSubmitImage},r.a.createElement("div",{className:"img-edit-profile"},r.a.createElement("img",{className:"img-profile",src:this.data.photo,alt:""})),l,n),r.a.createElement("form",{className:"profile-form",action:"",onSubmit:this.handleFormSubmit},r.a.createElement("label",{htmlFor:""},"USERNAME"),r.a.createElement("h2",null,this.data.username),t,r.a.createElement("label",{htmlFor:""},"FAMILY"),r.a.createElement("h2",null,this.data.family),r.a.createElement("label",{htmlFor:""},"ROL"),r.a.createElement("h2",null,this.data.rol),r.a.createElement("label",{htmlFor:""},"EMAIL"),r.a.createElement("h2",null,this.data.email),a,n,r.a.createElement("input",{className:"submitbutton-profile",type:"button",value:"EDIT",onClick:this.handleFormEdit})),r.a.createElement("button",{className:"btn-logout",onClick:this.logout},"LOGOUT"))}}]),t}(n.Component)),k=(a(86),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state=null,a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.elem.type?r.a.createElement("div",{className:"member-kid-div"},r.a.createElement("div",{className:"member-div"},r.a.createElement("div",{className:"img-edit"},r.a.createElement("img",{className:"img-profile",src:this.props.elem.photo,alt:""})),r.a.createElement("h1",null,this.props.elem.username)),r.a.createElement(h.a,{to:"/editkid/".concat(this.props.elem._id)},r.a.createElement("button",{className:"btn-kid",type:"button"},"EDTI KID"))):r.a.createElement("div",{className:"member-div"},r.a.createElement("div",{className:"img-edit"},r.a.createElement("img",{className:"img-profile",src:this.props.elem.photo,alt:""})),r.a.createElement("h1",null,this.props.elem.username));return r.a.createElement("div",null,e)}}]),t}(n.Component)),O=(a(90),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).ifLoggedIn=function(){a.authService.loggedin().then(function(e){a.setState(Object(c.a)({},a.state,{family:e.family}))})},a.handleFormEdit=function(){var e=!a.state.newMemberState;a.setState({newMemberState:e})},a.state={family:null,newMemberState:!1,redirect:!1},a.authService=new v,a.ifLoggedIn(),a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.setState(Object(c.a)({},this.state,{family:this.props.user.family}))}},{key:"render",value:function(){return this.state&&this.state.redirect?r.a.createElement(b.a,{to:"/"}):this.state.family?r.a.createElement("div",{className:"family"},r.a.createElement("div",{className:"tutors-div"},r.a.createElement("h1",null,"TUTORS"),this.state.family.tutors.map(function(e,t){return r.a.createElement(k,{key:t,elem:e})}),r.a.createElement(h.a,{to:"/newmember",family:this.state.family},r.a.createElement("button",{className:"btn-family",type:"button"},"ADD MEMBER"))),r.a.createElement("div",{className:"kids-div"},r.a.createElement("h1",null,"KIDS"),this.state.family.kids.map(function(e,t){return r.a.createElement(k,{key:t,elem:e})}),r.a.createElement(h.a,{to:"/newkid"},r.a.createElement("button",{className:"btn-family",type:"button"},"ADD KID")))):r.a.createElement("h1",null,"LOADING...")}}]),t}(n.Component)),j=(a(94),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=a.state,n=t.name,r=t.age,l=t.family;a.authService.newKid({name:n,age:r,family:l}).then(function(e){a.props.ifLoggedIn(),a.setState({name:"",age:"",family:"",redirect:!0})})},a.handlerState=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(f.a)({},n,r))},a.state={name:"",family:a.props.user.family.name,age:0,redirect:!1},a.authService=new v,a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return this.state.redirect?r.a.createElement(b.a,{to:"/"}):r.a.createElement("div",{className:"ironprofile"},r.a.createElement("h1",null,"ADD NEW KID"),r.a.createElement("form",{className:"form-newkid",action:"submit",onSubmit:this.handleFormSubmit},r.a.createElement("label",{htmlFor:""},"NAME"),r.a.createElement("input",{type:"text",name:"name",id:"name",onChange:function(t){return e.handlerState(t)}}),r.a.createElement("label",{htmlFor:""},"AGE"),r.a.createElement("input",{type:"number",name:"age",id:"age",onChange:function(t){return e.handlerState(t)}}),r.a.createElement("input",{className:"submitbutton-newkid",type:"submit"})))}}]),t}(n.Component)),w=a(4),C=(a(136),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).ifLoggedIn=function(){a.authService.loggedin().then(function(e){a.setState(Object(c.a)({},a.state,{user:e.user,family:e.family}))})},a.dateChange=function(e){var t,a,n=[],r=!0,l="";e=e.toISOString().split("");for(var i=0;i<e.length;i++)"T"===e[i]&&(r=!1),r&&n.push(e[i]);return a=(n=n.join("").split("-"))[0].toString(),t=n[2].toString(),"1"===n[1]&&(l="January"),"2"===n[1]&&(l="February"),"3"===n[1]&&(l="March"),"4"===n[1]&&(l="April"),"5"===n[1]&&(l="May"),"6"===n[1]&&(l="June"),"7"===n[1]&&(l="July"),"8"===n[1]&&(l="August"),"9"===n[1]&&(l="September"),"10"===n[1]&&(l="October"),"11"===n[1]&&(l="November"),"12"===n[1]&&(l="December"),n=t+" "+l+", "+a},a.ifLoggedIn=function(){a.authService.loggedin().then(function(e){a.setState(Object(c.a)({},a.state,{user:e.user,family:e.family}))})},a.handlerState=function(e){var t=e.target,n=t.name,r=t.value,l=Object(c.a)({},a.state.newTask,Object(f.a)({},n,r));a.setState({newTask:l})},a.handlerStateCheckTask=function(e,t){a.authService.checkTask({status:e,id:t}).then(function(e){a.ifLoggedIn()})},a.handlerStateReminder=function(e){var t=e.target,n=t.name,r=t.value,l=Object(c.a)({},a.state.newReminder,Object(f.a)({},n,r));a.setState({newReminder:l})},a.handleFormSubmit=function(e){e.preventDefault();var t=a.state.newTask,n=t.kid,r=t.description,l=t.tutor,i=t.type,c=t.text,s=t.status,m=t.place,o=t.date,u=t.family_name;a.authService.newTask({kid:n,description:r,tutor:l,type:i,text:c,date:o,status:s,place:m,family_name:u}).then(function(e){var t={kid:null,description:null,tutor:null,type:"Education",text:null,status:!0,date:null,place:null,family_name:e.family_name};a.setState({newTask:t}),a.ifLoggedIn()})},a.handleFormSubmitReminder=function(e){e.preventDefault();var t=a.state.newReminder,n=t.kid,r=t.description,l=t.text,i=t.status,c=t.date,s=t.family_name;a.authService.newReminder({kid:n,description:r,text:l,status:i,date:c,family_name:s}).then(function(e){var t={kid:null,description:null,text:null,status:!0,date:null,family_name:e.family_name};a.setState({newTask:t}),a.ifLoggedIn()})},a.handlerNewPhotoState=function(e){a.setState(Object(c.a)({},a.state,{photo:e.target.files[0]}))},a.handlerSetPhoto=function(e){a.setState(Object(c.a)({},a.state,{photo:null})),a.ifLoggedIn()},a.handlerNewPhoto=function(e){e.preventDefault();var t=e.target.files[0];a.authService.newPhoto({photo:t,family:a.state.family._id}).then(function(e){})},a.state={user:a.props.user.user,family:a.props.user.family,newTask:{kid:null,description:null,tutor:null,type:"Education",text:null,status:!0,date:null,place:null,family_name:a.props.user.family.name},newReminder:{kid:null,description:null,text:null,status:!0,date:null,family_name:a.props.user.family.name},photo:null},a.authService=new v,a.today=new Date,a.today=a.dateChange(a.today),a.ifLoggedIn(),a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=[];this.state.family.tasks.forEach(function(a,n){a.date===e.today&&a.tutor===e.state.user._id&&t.push(a)});var a=[];t.map(function(t){return e.state.family.tutors.forEach(function(e){e._id===t.tutor&&(t.tutor=e,a.push(t))})}),t=a,a=[],t.map(function(t){return e.state.family.kids.forEach(function(e){e._id===t.kid&&(t.kid=e,a.push(t))})});var n=[];return this.state.family.reminders.forEach(function(t){return e.state.family.kids.forEach(function(e){e._id===t.kid&&(t.kid=e,n.push(t))})}),r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"sec-family"},r.a.createElement("div",{className:"sec-family-user"},r.a.createElement(h.a,{to:"/profile"},r.a.createElement("img",{className:"sec-family-user-photo",src:this.state.user.photo,alt:""}))),r.a.createElement("div",{className:"sec-family-family"},r.a.createElement(h.a,{to:"/family"},r.a.createElement("h6",null,this.state.family.name)),this.state.family.tutors.map(function(e,t){return r.a.createElement("img",{key:t,className:"sec-family-family-photo",src:e.photo,alt:""})}))),r.a.createElement("h2",null,"KIDS"),r.a.createElement("div",{className:"sec-kids"},this.state.family.kids.map(function(e,t){return r.a.createElement("div",{key:t,className:"sec-kids-card"},r.a.createElement("div",{className:"sec-kid-card-photo-container"},r.a.createElement("img",{className:"sec-kids-card-photo",src:e.photo,alt:""})),r.a.createElement("h5",null,e.username))})),r.a.createElement("h2",null,"TODO LIST"),r.a.createElement("div",{className:"taskList-container"},a.map(function(t,a){return r.a.createElement("div",{key:a,className:"todo-task"},r.a.createElement(w.Input,{className:"task-tik",name:"status",type:"checkbox",value:"red",label:"-",checked:!t.status,onChange:function(a){return e.handlerStateCheckTask(t.status,t._id)}}),r.a.createElement(w.Modal,{header:t.description,fixedFooter:!0,trigger:r.a.createElement("div",{className:"task-info"},r.a.createElement("div",{className:"task-info-des"},r.a.createElement("h5",null,t.description)),r.a.createElement("div",{className:"task-info-images"},r.a.createElement("img",{className:"task-info-image",src:t.kid.photo,alt:""}),r.a.createElement("img",{className:"task-info-image",src:t.tutor.photo,alt:""})))},r.a.createElement("div",{className:"task-modal"},r.a.createElement("div",{className:"task-modal-images"},r.a.createElement("img",{className:"task-modal-image",src:t.tutor.photo,alt:""}),r.a.createElement("img",{className:"task-modal-image",src:t.kid.photo,alt:""})),r.a.createElement("label",{htmlFor:""},"TEXT"),r.a.createElement("p",null,t.text),r.a.createElement("label",{htmlFor:""},"DATE"),r.a.createElement("p",null,t.date),r.a.createElement("label",{htmlFor:""},"PLACE"),r.a.createElement("p",null,t.place),r.a.createElement("label",{htmlFor:""},"TASK TYPE"),r.a.createElement("p",null,t.type))))})),r.a.createElement("h2",null,"REMINDERS"),r.a.createElement("div",{className:"remindersList-container"},n.map(function(e,t){return r.a.createElement(w.Modal,{key:t,header:e.description,fixedFooter:!0,trigger:r.a.createElement("div",{className:"listed-reminder"},r.a.createElement("div",{className:"reminder-image-cont"},r.a.createElement("img",{className:"reminder-image",src:e.kid.photo,alt:""})),r.a.createElement("div",{className:"reminder-info"},r.a.createElement("h4",null,e.date),r.a.createElement("h4",null,e.description)))},r.a.createElement("div",{className:"task-modal"},r.a.createElement("div",{className:"task-modal-images"},r.a.createElement("img",{className:"task-modal-image",src:e.kid.photo,alt:""})),r.a.createElement("label",{htmlFor:""},"TEXT"),r.a.createElement("p",null,e.text),r.a.createElement("label",{htmlFor:""},"DATE"),r.a.createElement("p",null,e.date)))})),r.a.createElement("h2",null,"NOTICES"),r.a.createElement("div",{className:"taskNotices-container"},this.state.family.tasks.filter(function(t){return!1===t.status&&t.date===e.today}).map(function(e,t){return r.a.createElement(w.Modal,{key:t,header:e.description,fixedFooter:!0,trigger:r.a.createElement("div",{className:"notice"},r.a.createElement("div",{className:"notice-images"},r.a.createElement("img",{className:"notice-image",src:e.tutor.photo,alt:""}),r.a.createElement("img",{className:"notice-image",src:e.kid.photo,alt:""})),r.a.createElement("div",{className:"notice-text"},r.a.createElement("h4",null,e.description)))},r.a.createElement("div",{className:"task-modal"},r.a.createElement("div",{className:"task-modal-images"},r.a.createElement("img",{className:"task-modal-image",src:e.tutor.photo,alt:""}),r.a.createElement("img",{className:"task-modal-image",src:e.kid.photo,alt:""})),r.a.createElement("label",{htmlFor:""},"TEXT"),r.a.createElement("p",null,e.text),r.a.createElement("label",{htmlFor:""},"DATE"),r.a.createElement("p",null,e.date),r.a.createElement("label",{htmlFor:""},"PLACE"),r.a.createElement("p",null,e.place),r.a.createElement("label",{htmlFor:""},"TASK TYPE"),r.a.createElement("p",null,e.type)))})),r.a.createElement("h2",null,"PHOTO GALERY"),r.a.createElement("div",null,r.a.createElement(w.Carousel,{images:this.state.family.photos.map(function(e,t){return r.a.createElement("div",{key:t},r.a.createElement(w.MediaBox,{src:e,width:"350"}))})})),r.a.createElement("div",null,r.a.createElement(w.Modal,{header:"Modal Header",trigger:r.a.createElement("div",{className:"a-photo"})},r.a.createElement("form",{action:"",onChange:function(t){return e.handlerNewPhoto(t)}},r.a.createElement(w.Input,{name:"newphoto",type:"file",label:"File",s:12,onChange:function(t){return e.handlerNewPhotoState(t)}}),null===this.state.photo?r.a.createElement("div",null):r.a.createElement(w.Button,{className:"modal-close",onChange:function(t){return e.handlerSetPhoto(t)}},"DONE!")))),r.a.createElement(w.Modal,{header:"ADD TASK",fixedFooter:!0,trigger:r.a.createElement("div",{className:"a-task"})},r.a.createElement("form",{action:"submit",onSubmit:this.handleFormSubmit},r.a.createElement(w.Input,{type:"text",label:"description",name:"description",s:12,onChange:function(t){return e.handlerState(t)}}),r.a.createElement(w.Input,{type:"textarea",name:"text",onChange:function(t){return e.handlerState(t)}}),r.a.createElement(w.Input,{name:"date",type:"date",onChange:function(t){return e.handlerState(t)}}),r.a.createElement(w.Input,{type:"text",label:"Place",name:"place",s:12,onChange:function(t){return e.handlerState(t)}}),r.a.createElement(w.Input,{s:12,type:"select",name:"type",label:"Select",defaultValue:"Select Type of Task",onChange:function(t){return e.handlerState(t)}},r.a.createElement("option",{value:"Education"},"Education"),r.a.createElement("option",{value:"Home"},"Home")),r.a.createElement(w.Input,{s:12,type:"select",name:"tutor",label:"Select",onChange:function(t){return e.handlerState(t)}},r.a.createElement("option",{value:""},"Choose tutor"),this.state.family.tutors.map(function(e,t){return r.a.createElement("option",{key:t,value:e._id},e.username)})),r.a.createElement(w.Input,{s:12,type:"select",name:"kid",label:"Select",onChange:function(t){return e.handlerState(t)}},r.a.createElement("option",{value:""},"Choose a kid"),this.state.family.kids.map(function(e,t){return r.a.createElement("option",{key:t,value:e._id}," ",e.username)})),r.a.createElement(w.Button,{className:"modal-close",waves:"light",type:"submit"},"Create"))),r.a.createElement(w.Modal,{header:"ADD REMINDER",fixedFooter:!0,trigger:r.a.createElement("div",{className:"a-reminder"})},r.a.createElement("form",{action:"submit",onSubmit:this.handleFormSubmitReminder},r.a.createElement(w.Input,{type:"text",label:"description",name:"description",s:12,onChange:function(t){return e.handlerStateReminder(t)}}),r.a.createElement(w.Input,{type:"textarea",name:"text",onChange:function(t){return e.handlerStateReminder(t)}}),r.a.createElement(w.Input,{name:"date",type:"date",onChange:function(t){return e.handlerStateReminder(t)}}),r.a.createElement(w.Input,{s:12,type:"select",name:"kid",label:"Select",onChange:function(t){return e.handlerStateReminder(t)}},r.a.createElement("option",{value:""},"Choose a kid"),this.state.family.kids.map(function(e,t){return r.a.createElement("option",{key:t,value:e._id}," ",e.username)})),r.a.createElement(w.Button,{className:"modal-close",waves:"light",type:"submit"},"Create"))))}}]),t}(n.Component)),I=(a(140),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=a.state,n=t.username,r=t.password,l=t.email,i=a.props.match.params.token;a.authService.invitedSignup({username:n,password:r,email:l,token:i}).then(function(e){a.setState({username:"",password:"",email:"",family:"",redirect:!0})})},a.handlerState=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(f.a)({},n,r))},a.state={username:"",password:"",email:"",redirect:!1},a.authService=new v,a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return this.state.redirect?r.a.createElement(b.a,{to:"/"}):r.a.createElement("div",{className:"ironprofile"},r.a.createElement("div",{className:"imagen-invite-div"},r.a.createElement("img",{className:"imagen-invite",src:"https://res.cloudinary.com/deosqppvg/image/upload/v1545132784/Canguro/Logo.png",alt:""})),r.a.createElement("div",{className:"form-invite"},r.a.createElement("form",{action:"submit",onSubmit:this.handleFormSubmit},r.a.createElement("label",null,"USERNAME"),r.a.createElement("input",{type:"text",name:"username",id:"name",onChange:function(t){return e.handlerState(t)}}),r.a.createElement("label",null,"PASSWORD"),r.a.createElement("input",{type:"password",name:"password",id:"pass",onChange:function(t){return e.handlerState(t)}}),r.a.createElement("label",null,"EMAIL"),r.a.createElement("input",{type:"email",name:"email",id:"email",onChange:function(t){return e.handlerState(t)}}),r.a.createElement("label",{htmlFor:""}),r.a.createElement("input",{className:"submitbutton-invite",type:"submit"}))))}}]),t}(n.Component)),F=a(161),A=a(160),D=(a(144),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).ifLoggedIn=function(){a.authService.loggedin().then(function(e){a.setState(Object(c.a)({},a.state,{family:e.family}))})},a.handleFormEdit=function(){var e=!a.state.edit;a.setState({edit:e})},a.handlerState=function(e){var t=e.target,n=t.name,r=t.value;"photo"===n?a.setState(Object(c.a)({},a.state,{photo:e.target.files[0]})):a.setState(Object(c.a)({},a.state,Object(f.a)({},n,r)))},a.getIdKid=function(e){a.authService.getKid(e).then(function(e){a.dataKid=e;var t=Object(c.a)({},a.state);t.id=e._id,t.age=e.age,t.allergies=e.allergies,t.family=e.family,t.intolerances=e.intolerances,t.photo=e.photo,t.type=e.type,t.username=e.username,t.vaccinations=e.vaccinations,a.setState(t),a.dataKid=t})},a.handleFormSubmitAllergie=function(e){e.preventDefault();var t=a.state.addAllergie;a.authService.addAlle({alle:t,id:a.state.id}).then(function(e){a.setState({allergies:e.allergies,addAllergie:""})})},a.handleFormSubmitVaccinations=function(e){e.preventDefault();var t=a.state.addVaccination;a.authService.addVac({vac:t,id:a.state.id}).then(function(e){a.setState({vaccinations:e.vaccinations,addVaccination:""})})},a.handleFormSubmitIntolerances=function(e){e.preventDefault();var t=a.state.addIntolerance;a.authService.addInt({int:t,id:a.state.id}).then(function(e){a.setState({intolerances:e.intolerances,addIntolerance:""})})},a.handleFormSubmitImage=function(e){e.preventDefault();var t=a.state.photo;a.authService.editkidimg({kid:a.state.id,photo:t}).then(function(e){a.setState({photo:e.photo,edit:!1,redirect:!0})})},a.state={id:null,username:null,type:null,family:null,photo:null,age:null,allergies:null,intolerances:null,vaccinations:null,edit:!1,redirect:!1,addAllergie:"",addIntolerance:"",addVaccinations:""},a.authService=new v,a.getIdKid(a.props.match.params.id),a.dataKid={},a.ifLoggedIn(),a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;if(this.state.redirect)return r.a.createElement(b.a,{to:"/family"});if(this.state.username){var t=this.state.edit?r.a.createElement("input",{className:"box",type:"file",name:"photo",onChange:function(t){return e.handlerState(t)}}):r.a.createElement("div",null),a=this.state.edit?r.a.createElement("input",{className:"submitbutton",type:"submit"}):r.a.createElement("div",null),n=this.state.edit?r.a.createElement("input",{type:"text",name:"username",value:this.state.username,onChange:function(t){return e.handlerState(t)}}):r.a.createElement("div",null),l=this.state.edit?r.a.createElement("input",{type:"text",name:"age",value:this.state.age,onChange:function(t){return e.handlerState(t)}}):r.a.createElement("div",null),i=this.state.edit?r.a.createElement("form",{className:"form-editkid",action:"submit",value:"",onSubmit:this.handleFormSubmitAllergie},r.a.createElement("input",{type:"text",name:"addAllergie",onChange:function(t){return e.handlerState(t)}}),r.a.createElement("input",{className:"submitbutton-editkid",type:"submit"})):r.a.createElement("div",null),c=this.state.edit?r.a.createElement("form",{className:"form-editkid",action:"submit",onSubmit:this.handleFormSubmitVaccinations},r.a.createElement("input",{type:"text",name:"addVaccination",onChange:function(t){return e.handlerState(t)}}),r.a.createElement("input",{className:"submitbutton-editkid",type:"submit"})):r.a.createElement("div",null),s=this.state.edit?r.a.createElement("form",{className:"form-editkid",action:"submit",onSubmit:this.handleFormSubmitIntolerances},r.a.createElement("input",{type:"text",name:"addIntolerance",onChange:function(t){return e.handlerState(t)}}),r.a.createElement("input",{className:"submitbutton-editkid",type:"submit"})):r.a.createElement("div",null);return r.a.createElement("div",{className:"ironprofile"},r.a.createElement("div",{className:"image-profile form-editkid"},r.a.createElement("form",{className:"image-form",action:"",onSubmit:this.handleFormSubmitImage},r.a.createElement("img",{className:"img-kid-profile",src:this.state.photo,alt:""}),t,a),r.a.createElement("h2",null,this.dataKid.username),n,r.a.createElement("h3",null,this.dataKid.age," YEARS"),l),r.a.createElement("div",{className:"form-editkid"},r.a.createElement("div",{className:"editable-element"},r.a.createElement("h4",null,"ALLERGIES"),r.a.createElement("ul",null,this.state.allergies.map(function(e,t){return r.a.createElement("li",{key:t},e)}))),r.a.createElement("div",null,i),r.a.createElement("h4",null,"INTOLERANCES"),r.a.createElement("ul",null,this.state.vaccinations.map(function(e,t){return r.a.createElement("li",{key:t},e)})),c,r.a.createElement("h4",null,"VACCINATIONS"),r.a.createElement("ul",null,this.state.intolerances.map(function(e,t){return r.a.createElement("li",{key:t},e)})),s),r.a.createElement("input",{className:"submitbutton-editkid edit-button",type:"button",value:"EDIT",onClick:this.handleFormEdit}))}return r.a.createElement("h1",null,"LOADING...")}}]),t}(n.Component)),x=(a(148),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handlerStateMail=function(e){var t=e.target.value;a.setState({newmail:t})},a.handlerStateRol=function(e){var t=e.target.value;a.setState({newrol:t})},a.handleFormSubmit=function(e){e.preventDefault();var t=a.state.newmail,n=a.state.family.token;n="Admin"===a.state.newRol?"A"+n:"N"+n,a.authService.mail(t,n),a.setState({redirect:!0})},a.state={family:a.props.user.family,newmail:null,newRol:null},a.authService=new v,a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return this.state.redirect?r.a.createElement(w.Redirect,{to:"/main"}):r.a.createElement("div",{className:"ironprofile"},r.a.createElement("div",{className:"form-newmember"},r.a.createElement("form",{action:"submit",onSubmit:function(t){return e.handleFormSubmit(t)}},r.a.createElement("label",{htmlFor:""},"EMAIL"),r.a.createElement("input",{type:"text",name:"family",id:"family",onChange:function(t){return e.handlerStateMail(t)}}),r.a.createElement("label",{htmlFor:""},"ROL?"),r.a.createElement(w.Input,{s:12,type:"select",defaultValue:"Select Rol",onChange:function(t){return e.handlerStateRol(t)}},r.a.createElement("option",{value:""},"Select Rol"),r.a.createElement("option",{value:"Admin"},"Administrator"),r.a.createElement("option",{value:"Nany"},"Nany")),r.a.createElement("div",{className:"submitbutton-newmember"},r.a.createElement("input",{type:"submit",value:"SEND INVITATION"})))))}}]),t}(n.Component)),R=(a(152),function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"aboutus"},r.a.createElement("img",{className:"logo-img",src:"https://res.cloudinary.com/deosqppvg/image/upload/v1545206516/Canguro/Logo.png.png",alt:""}),r.a.createElement("h3",null,"OurUs"),r.a.createElement("h4",null,"Ver 0.1"),r.a.createElement("div",{className:"us-content"},r.a.createElement("h4",null,"ORIGINAL IDEA"),r.a.createElement("img",{className:"img-about",src:"https://res.cloudinary.com/deosqppvg/image/upload/v1545340438/Canguro/elementos/maribel_opt.jpg",alt:""}),r.a.createElement("h3",null,"MARIBEL"),r.a.createElement("h3",null,"UX/UI DESIGNER")),r.a.createElement("div",{className:"us-content"},r.a.createElement("h4",null,"CODED BY"),r.a.createElement("img",{className:"img-about",src:"https://res.cloudinary.com/deosqppvg/image/upload/v1545340438/Canguro/elementos/sito_opt.jpg",alt:""}),r.a.createElement("h3",null,"SITO"),r.a.createElement("h3",null,"WEB DEVELOPER")))}}]),t}(n.Component)),L=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).getUser=function(e){var t=Object(c.a)({},a.state);t.user=e.user,t.family=e.family,a.setState(t)},a.logout=function(){a.authService.logout().then(function(){return a.setState(Object(c.a)({},a.state,{user:null,family:null,redirect:!0}))})},a.ifLoggedIn=function(){a.authService.loggedin().then(function(e){a.setState(Object(c.a)({},a.state,{user:e.user,family:e.family}))})},a.state={user:null,family:null},a.authService=new v,a.ifLoggedIn(),a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;if(console.log(this.state),this.state.redirect)return r.a.createElement(b.a,{to:"/"});var t=this.state.user?r.a.createElement("div",null,r.a.createElement(F.a,null,r.a.createElement(A.a,{exact:!0,path:"/profile",render:function(){return r.a.createElement(N,{getUser:e.getUser,user:e.state})}}),r.a.createElement(A.a,{exact:!0,path:"/family",render:function(){return r.a.createElement(O,{user:e.state})}}),r.a.createElement(A.a,{exact:!0,path:"/newkid",render:function(){return r.a.createElement(j,{user:e.state,ifLoggedIn:e.ifLoggedIn})}}),r.a.createElement(A.a,{exact:!0,path:"/editkid/:id",render:function(e){return r.a.createElement(D,e)}}),r.a.createElement(A.a,{exact:!0,path:"/main",render:function(){return r.a.createElement(C,{user:e.state})}}),r.a.createElement(A.a,{exact:!0,path:"/newmember",render:function(){return r.a.createElement(x,{user:e.state})}}),r.a.createElement(A.a,{exact:!0,path:"/about",render:function(){return r.a.createElement(R,null)}})),r.a.createElement("div",{className:"botton-bar"},r.a.createElement(h.a,{className:"a-home",to:"/main"},r.a.createElement("img",{className:"footer-img-home",src:"https://res.cloudinary.com/deosqppvg/image/upload/v1545315280/Canguro/elementos/home-icon-silhouette.png",alt:""})),r.a.createElement("img",{className:"footer-img-alarm",src:"https://res.cloudinary.com/deosqppvg/image/upload/v1545315279/Canguro/elementos/alarm.png",alt:""}),r.a.createElement("img",{className:"footer-img-center",src:"https://res.cloudinary.com/deosqppvg/image/upload/v1545325506/Canguro/elementos/calendar-day-15.png",alt:""}),r.a.createElement("img",{className:"footer-img",src:"https://res.cloudinary.com/deosqppvg/image/upload/v1545315280/Canguro/elementos/camera.png",alt:""}),r.a.createElement(h.a,{className:"a-about",to:"/about"},r.a.createElement("img",{className:"footer-img-about",src:"https://res.cloudinary.com/deosqppvg/image/upload/v1545315280/Canguro/elementos/multiple-users-silhouette.png",alt:""})))):r.a.createElement("div",null,r.a.createElement(F.a,null,r.a.createElement(A.a,{exact:!0,path:"/",component:p}),r.a.createElement(A.a,{exact:!0,path:"/login",render:function(){return r.a.createElement(S,{getUser:e.getUser})}}),r.a.createElement(A.a,{exact:!0,path:"/signup",render:function(){return r.a.createElement(y,{getUser:e.getUser})}}),r.a.createElement(A.a,{path:"/mail/confirm/:token",render:function(e){return r.a.createElement(I,e)}})));return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"text-box"},t))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var T=a(158);i.a.render(r.a.createElement(T.a,null,r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},36:function(e,t,a){e.exports=a(156)},42:function(e,t,a){},44:function(e,t,a){},48:function(e,t,a){},73:function(e,t,a){},78:function(e,t,a){},82:function(e,t,a){},86:function(e,t,a){},90:function(e,t,a){},94:function(e,t,a){}},[[36,2,1]]]);
//# sourceMappingURL=main.65c0702d.chunk.js.map