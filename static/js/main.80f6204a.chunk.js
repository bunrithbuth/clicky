(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,name:"SpongeBob",image:"https://upload.wikimedia.org/wikipedia/en/thumb/4/47/Spongebob-squarepants.svg/666px-Spongebob-squarepants.svg.png"},{id:2,name:"Mr. Krabs",image:"https://vignette3.wikia.nocookie.net/vsbattles/images/8/80/Mr._Krabs.png/revision/latest?cb=20150919162131"},{id:3,name:"Squidward",image:"https://vignette2.wikia.nocookie.net/fictionalcharacters/images/a/ac/Squidward.png/revision/latest?cb=20131121012626"},{id:4,name:"Dexter",image:"https://s-media-cache-ak0.pinimg.com/originals/fe/32/49/fe32495d45283cd6860ae122f0aeaad9.png"},{id:5,name:"Courage",image:"https://vignette4.wikia.nocookie.net/vsbattles/images/3/39/Courage-0.png/revision/latest?cb=20160719055423"},{id:6,name:"Doug Funnie",image:"https://vignette1.wikia.nocookie.net/doug/images/3/3b/Doug001.gif/revision/latest?cb=20110807170511"},{id:7,name:"Bugs Bunny",image:"https://vignette2.wikia.nocookie.net/deathbattlefanon/images/2/2b/Bugs_Bunny.png/revision/latest?cb=20151206010607"},{id:8,name:"Johnny Bravo",image:"http://vignette3.wikia.nocookie.net/p__/images/9/9a/Johnny_Bravo.png/revision/latest?cb=20131031233339&path-prefix=protagonist"},{id:9,name:"Tommy Pickles",image:"https://vignette4.wikia.nocookie.net/uncyclopedia/images/e/e4/Tommy_Pickles.png/revision/latest?cb=20110530102641"},{id:10,name:"Rocko",image:"http://vignette3.wikia.nocookie.net/rockosmodernlife/images/9/9e/Rockos-modern-life-4e582a8f06a41.png/revision/latest?cb=20130522173416"},{id:11,name:"Captain Planet",image:"http://vignette2.wikia.nocookie.net/dragon-rap-battles/images/b/b6/Captain_Planet.png/revision/latest?cb=20160911200836"},{id:12,name:"Ickis",image:"http://static.tvtropes.org/pmwiki/pub/images/ickis.png"}]},,,,,,,,function(e,t,a){e.exports=a(25)},,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(3),r=a.n(o),s=a(4),c=a(5),m=a(7),g=a(6),l=a(8),d=(a(15),function(e){return i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{alt:e.name,src:e.image})),i.a.createElement("span",{onClick:function(){return e.removeFriend(e.id)},className:"remove"},"\ud835\ude05"))}),p=(a(17),function(e){return i.a.createElement("div",{className:"wrapper"},e.children)}),u=(a(19),function(e){return i.a.createElement("h1",{className:"title"},e.children)}),h=a(1),v=(a(21),h.length);var f=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(i)))).state={friends:h,score:0,maxScore:0},a.removeFriend=function(e){var t=a.state.friends.filter(function(t){return t.id!==e});v-a.state.score===t.length?a.state.maxScore<a.state.score?a.setState({friends:h,score:0,maxScore:a.state.score}):a.setState({friends:h,score:0}):a.state.maxScore<v-t.length?a.setState({friends:t,score:v-t.length,maxScore:v-t.length}):a.setState({friends:t,score:v-t.length})},a}return Object(l.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(p,null,i.a.createElement(u,null,"Clicky Game"),i.a.createElement("h1",{className:"subtitle"},"score: ",this.state.score,"/12 max-score: ",this.state.maxScore),12===this.state.score?i.a.createElement("h1",{className:"subtitle"}," You Win"):function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}return e}(h).map(function(t){return i.a.createElement(d,{removeFriend:e.removeFriend,id:t.id,key:t.id,name:t.name,image:t.image})}))}}]),t}(n.Component);a(23);r.a.render(i.a.createElement(f,null),document.getElementById("root"))}],[[9,2,1]]]);
//# sourceMappingURL=main.80f6204a.chunk.js.map