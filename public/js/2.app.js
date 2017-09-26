webpackJsonp([2],{21:function(t,e,n){var s,i;n(283),s=n(254);var a=n(274);i=s=s||{},"object"!=typeof s["default"]&&"function"!=typeof s["default"]||(i=s=s["default"]),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,t.exports=s},254:function(t,e,n){"use strict";function s(t){return l.ref("events").orderByChild("url_slug").startAt(t).endAt(t).limitToFirst(1)}var i=n(19),a=n.n(i),o=n(271),c=n.n(o),_=this,l=a.a.database();e["default"]={name:"EventPage",components:{GMap:c.a},created:function(){var t=this;s(this.$route.params.slug).on("child_changed",function(e){var n=e.val();n.id=e.key,t.setEvent(n)})},beforeRouteEnter:function(t,e,n){var i=t.params.slug;s(i).once("value").then(function(t){var e=t.val();if(e){var s=Object.keys(e)[0],i=e[s];i.id=s,n(function(t){t.setEvent(i)})}else n({path:"/meetups"})})},beforeRouteUpdate:function(t,e,n){_.event=null;var i=t.params.slug;s(i).once("value").then(function(t){var e=t.val();if(e){var s=Object.keys(e)[0],i=e[s];i.id=s,_.setEvent(i),n()}else n({path:"/meetups"})})},data:function(){return{isAttendant:!1,showConfirmModal:!1,user:{},email:"",event:null}},methods:{setEvent:function(t){this.event=t},attendEvent:function(){var t=this,e=new a.a.auth.TwitterAuthProvider;e.setCustomParameters({screen_name:"forLoopNigeria"}),a.a.auth().signInWithPopup(e).then(function(e){var n=e.user;t.user=n,t.$root.$emit("show::modal","confirmModal")})["catch"](function(t){alert("Please try again: "+t.message)})},confirmAttendance:function(){this.addAttendee()},addAttendee:function(){var t=this.user,e=t.uid;if(!this.event.attendees||Object.keys(this.event.attendees).indexOf(e)===-1){var n="events/"+this.event.id+"/attendees/"+e,s=l.ref(n),i={name:t.displayName,profile_image:t.photoURL.replace(/_normal/,""),uid:e,email:this.email};s.set(i);var a=new FormData;a.append("email",this.email);var o="/api/subscribe";this.$http.post(o,a).then(function(t){})["catch"](function(t){})}this.isAttendant=!0},close:function(){this.email="",this.$root.$emit("hide::modal","confirmModal")}},computed:{eventTime:function(){var t=this.event.when.from.h+":"+this.event.when.from.mm+" "+this.event.when.from.A,e=this.event.when.to.h+":"+this.event.when.to.mm+" "+this.event.when.to.A;return t+" - "+e},headerAttendees:function(){var t=this.event.attendees,e=t?Object.keys(t).length:0;return 1==e?e+" Attendee":e+" Attendees"},contentAttendees:function(){var t=this.event.attendees,e=t?Object.keys(t).length:0;return 1==e?e+" PERSON IS ":e+" PEOPLE ARE "}},watch:{event:function(t){if(t&&t.background_image_url){var e="url('"+t.background_image_url+"')";Vue.nextTick(function(){$(".hero--3").css("background-image",e),twttr.widgets.load()})}}}}},256:function(t,e,n){"use strict";e["default"]={name:"Gmap",props:["location"],mounted:function(){var t={lat:this.location.lat,lng:this.location.lng},e=new google.maps.Map(document.getElementById("map"),{zoom:16,center:t});new google.maps.Marker({position:t,map:e})}}},260:function(t,e,n){e=t.exports=n(9)(),e.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},262:function(t,e,n){e=t.exports=n(9)(),e.push([t.i,"\n.info__list {\n  justify-content: center;\n}\n",""])},271:function(t,e,n){var s,i;n(281),s=n(256);var a=n(272);i=s=s||{},"object"!=typeof s["default"]&&"function"!=typeof s["default"]||(i=s=s["default"]),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,t.exports=s},272:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"venue"},[n("div",{staticClass:"venue__map",attrs:{id:"map"}}),t._v(" "),n("div",{staticClass:"venue__tool"},[n("div",{staticClass:"container"},[n("div",{staticClass:"venue__info-cell"},[n("div",{staticClass:"venue__info-cell__icon"},[n("svg",{staticClass:"icon-pin icon-md"},[n("use",{attrs:{"xlink:href":"/img/icons.svg#icon-pin"}})])]),t._v(" "),n("p",{staticClass:"venue__info-cell__content"},[t._v(t._s(t.location.name)+" "+t._s(t.location.address))])])])])])},staticRenderFns:[]}},274:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.event?n("div",[n("div",{staticClass:"hero__container"},[n("section",{staticClass:"hero hero--3"},[n("div",{staticClass:"container"},[n("div",{staticClass:"hero__content"},[n("h1",{staticClass:"hero__title text-center"},[t._v(t._s(t.event.title))])])])]),t._v(" "),n("div",{staticClass:"hero__absolute"},[n("div",{staticClass:"hero__absolute__container"},[n("div",{staticClass:"hero__event"},[n("div",{staticClass:"hero__event__item"},[n("div",{staticClass:"hero__event__item__icon"},[n("svg",{staticClass:"icon-calendar"},[n("use",{attrs:{"xlink:href":"/img/icons.svg#icon-calendar"}})])]),t._v(" "),n("div",{staticClass:"hero__event__item__content"},[n("p",{staticClass:"hero__event__item__content__text"},[t._v(t._s(t._f("dateFormat")(t.event.when.date)))]),t._v(" "),n("p",{staticClass:"hero__event__item__content__text"},[t._v(t._s(t.eventTime))])])]),t._v(" "),n("div",{staticClass:"hero__event__item"},[n("div",{staticClass:"hero__event__item__icon"},[n("svg",{staticClass:"icon-pin"},[n("use",{attrs:{"xlink:href":"/img/icons.svg#icon-pin"}})])]),t._v(" "),n("div",{staticClass:"hero__event__item__content"},[n("p",{staticClass:"hero__event__item__content__text"},[t._v(t._s(t.event.location.name))]),t._v(" "),n("p",{staticClass:"hero__event__item__content__text"},[t._v(t._s(t.event.location.address))])])]),t._v(" "),n("div",{staticClass:"hero__event__item"},[n("div",{staticClass:"hero__event__item__icon"},[n("svg",{staticClass:"icon-capacity-icon"},[n("use",{attrs:{"xlink:href":"/img/icons.svg#icon-capacity-icon"}})])]),t._v(" "),n("div",{staticClass:"hero__event__item__content"},[n("p",{staticClass:"hero__event__item__content__text"},[t._v(t._s(t.headerAttendees))]),t._v(" "),n("a",{staticClass:"hero__event__item__content__text"},[t._v("View All")])])]),t._v(" "),n("div",{staticClass:"hero__event__item hero__event__item--margin-10 mobile-float"},[n("button",{staticClass:"btn btn--primary btn--flex btn--sm--100",attrs:{disabled:t.isAttendant},on:{click:t.attendEvent}},[n("span",{staticClass:"btn--icon"},[n("svg",{staticClass:"icon-add icon-md"},[n("use",{attrs:{"xlink:href":"/img/icons.svg#icon-add"}})])]),t._v(" "),n("span",{staticClass:"btn--text"},[t._v("I Want To Attend")])])])])])])]),t._v(" "),n("section",{staticClass:"reasons"},[n("div",{staticClass:"container"},[n("h2",{staticClass:"section__title section__title--2"},[t._v(t._s(t.event.title))]),t._v(" "),n("p",{staticClass:"section__caption"},[t._v(t._s(t.event.description))])])]),t._v(" "),t.event.sponsors?n("section",{staticClass:"info info--2"},[n("div",{staticClass:"container"},[n("div",{staticClass:"info__title text-center"},[t._v("Sponsor(s)")]),t._v(" "),n("div",{staticClass:"info__list"},t._l(t.event.sponsors,function(t,e){return n("div",{key:e,staticClass:"info__list__item"},[n("img",{staticClass:"img img-block",attrs:{src:t.image,alt:"",height:"150"}})])}))])]):t._e(),t._v(" "),t._m(0),t._v(" "),n("section",{staticClass:"info"},[n("div",{staticClass:"container"},[n("div",{staticClass:"info__title text-center"},[t._v("SPEAKERS")]),t._v(" "),t._l(t.event.speakers,function(e){return n("div",{key:e.screen_name,staticClass:"info__item"},[n("div",{staticClass:"info__item__left"},[n("div",{staticClass:"info__item__avatar"},[n("img",{staticClass:"img-circle img-block",attrs:{src:e.profile_image,alt:"",height:"98",width:"98"}})]),t._v(" "),n("div",{staticClass:"info__item__content"},[n("div",{staticClass:"info__item__content__name"},[t._v(t._s(e.name))]),t._v(" "),n("div",{staticClass:"info__item__content__detail"},[t._v(t._s(e.description))]),t._v(" "),n("div",{staticClass:"info__item__content__topic"},[t._v("Speaking on:\n              "),n("span",{staticClass:"talk-topic"},[t._v(t._s(e.topic))])])])]),t._v(" "),n("div",{staticClass:"info__item__right"},[n("a",{staticClass:"btn btn--flex btn--primary",attrs:{href:"https://twitter.com/intent/follow?screen_name="+e.screen_name}},[n("span",{staticClass:"btn--icon"},[n("svg",{staticClass:"icon-social-twitter icon-sm"},[n("use",{attrs:{"xlink:href":"/img/icons.svg#icon-social-twitter"}})])]),t._v(" "),n("span",{staticClass:"btn--text"},[t._v("Follow")])])])])})],2)]),t._v(" "),n("section",{staticClass:"info"},[n("div",{staticClass:"container"},[n("div",{staticClass:"info__title text-center"},[t._v("HOST(s)")]),t._v(" "),t._l(t.event.hosts,function(e){return n("div",{key:e.screen_name,staticClass:"info__item"},[n("div",{staticClass:"info__item__left"},[n("div",{staticClass:"info__item__avatar"},[n("img",{staticClass:"img-circle img-block",attrs:{src:e.profile_image,alt:"",height:"98",width:"98"}})]),t._v(" "),n("div",{staticClass:"info__item__content"},[n("div",{staticClass:"info__item__content__name"},[t._v(t._s(e.name))]),t._v(" "),n("div",{staticClass:"info__item__content__detail",staticStyle:{"padding-right":"5px"}},[t._v(t._s(e.description))])])]),t._v(" "),n("div",{staticClass:"info__item__right"},[n("a",{staticClass:"btn btn--flex btn--primary",attrs:{href:"https://twitter.com/intent/follow?screen_name="+e.screen_name}},[n("span",{staticClass:"btn--icon"},[n("svg",{staticClass:"icon-social-twitter icon-sm"},[n("use",{attrs:{"xlink:href":"/img/icons.svg#icon-social-twitter"}})])]),t._v(" "),n("span",{staticClass:"btn--text"},[t._v("Follow")])])])])})],2)]),t._v(" "),n("section",{staticClass:"info info--2"},[n("div",{staticClass:"container"},[n("div",{staticClass:"info__title text-center"},[t._v(t._s(t.contentAttendees)+"ATTENDING")]),t._v(" "),n("div",{staticClass:"info__list"},t._l(t.event.attendees,function(t){return n("div",{staticClass:"info__list__item"},[n("img",{staticClass:"img-circle img-block",attrs:{src:t.profile_image,alt:"",height:"90",width:"90"}})])})),t._v(" "),t._m(1)])]),t._v(" "),n("g-map",{attrs:{location:t.event.location}}),t._v(" "),n("b-modal",{attrs:{closeOnBackdrop:!1,id:"confirmModal"}},[n("div",{slot:"modal-header"},[n("h4",{staticClass:"modal-title",staticStyle:{"text-align":"center"},attrs:{id:"myModalLabel"}},[t._v("Confirm Attendance")])]),t._v(" "),n("div",{slot:"modal-body"},[n("transition",{attrs:{name:"custom-leave","leave-active-class":"animated bounceOutRight"}},[t.isAttendant?t._e():n("form",{staticClass:"form-horizontal form-label-left",on:{submit:function(e){e.preventDefault(),t.confirmAttendance(e)}}},[n("div",{staticClass:"form-group"},[n("label",{staticClass:"control-label col-md-3 col-sm-3 col-xs-12"},[t._v("Email")]),t._v(" "),n("div",{staticClass:"col-md-9 col-sm-9 col-xs-12"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Email",required:""},domProps:{value:t._s(t.email)},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})])])])]),t._v(" "),n("transition",{attrs:{name:"custom-enter","enter-active-class":"animated tada"}},[t.isAttendant?n("div",{staticClass:"jumbotron__action jumbotron__action--maxsize",staticStyle:{"text-align":"center"}},[n("h2",[t._v("Successfully registered for event")])]):t._e()])],1),t._v(" "),n("div",{slot:"modal-footer"},[t.isAttendant?t._e():n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.confirmAttendance}},[t._v("Save")]),t._v(" "),t.isAttendant?n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.close}},[t._v("Dismiss")]):t._e()])])],1):t._e()},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"line"},[n("div",{staticClass:"container"},[n("hr",{staticClass:"line--seperator"})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"show-more text-center"},[n("button",{staticClass:"btn btn--primary"},[t._v("Show More")])])}]}},281:function(t,e,n){var s=n(260);"string"==typeof s&&(s=[[t.i,s,""]]);n(10)(s,{});s.locals&&(t.exports=s.locals)},283:function(t,e,n){var s=n(262);"string"==typeof s&&(s=[[t.i,s,""]]);n(10)(s,{});s.locals&&(t.exports=s.locals)}});