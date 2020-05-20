(this["webpackJsonppokedex-app"]=this["webpackJsonppokedex-app"]||[]).push([[0],[,,,,,,,function(e,a,t){},,function(e,a,t){},,,function(e,a,t){e.exports=t(22)},,,,,function(e,a,t){},,function(e,a,t){},function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(10),c=t.n(s),l=(t(17),t(3)),m=t(4),o=t(6),i=t(5),p=(t(7),function(e){var a=e.pokemonInfo,t=e.onRouteChange,n=e.onPokemonDetail,s=a.name,c=a.url.trim().split("/")[6];return r.a.createElement("div",{className:"tc w4 bg-lightest-blue dib br2 pa1 ma2 grow bw2 shadow-5",onClick:function(){return function(){var e={id:c,name:a.name,url:a.url};n(e),t("detail")}()}},r.a.createElement("img",{src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(c,".png"),alt:s}),r.a.createElement("h3",{className:"ttc"},s))}),u=function(e){var a=e.pokemonList,t=e.onRouteChange,n=e.onPokemonDetail;return r.a.createElement("div",null,a.map((function(e,s){return r.a.createElement(p,{pokemonInfo:a[s],key:s,onRouteChange:t,onPokemonDetail:n})})))},h=t(1),f=t.n(h),d=t(2),g=t(11),E=function(e){var a=e.genderInfo,t=function(){switch(a.rate){case-1:return{male:"0%",female:"0%"};case 0:return{male:"100%",female:"0%"};case 1:return{male:"87.5%",female:"12.5%"};case 2:return{male:"75%",female:"25%"};case 4:return{male:"50%",female:"50%"};case 6:return{male:"25%",female:"75%"};case 7:return{male:"12.5%",female:"87.5%"};case 8:return{male:"0%",female:"100%"};default:return{male:"0%",female:"0%"}}}();return r.a.createElement("div",{id:"gender"},r.a.createElement("h3",{className:"mt3 mb1 underline"},"Gender Ratio"),r.a.createElement("div",{className:"list pl0 ma0"},r.a.createElement("p",{className:"ma0"},t.male," ",r.a.createElement("span",{className:"male-symbol"},"\u2642")),r.a.createElement("p",{className:"ma0"},t.female," ",r.a.createElement("span",{className:"female-symbol"},"\u2640"))))},b=function(e){var a=e.speciesInfo,t=e.height,n=e.weight,s=e.base_experience;return r.a.createElement("div",{id:"profile"},r.a.createElement("h3",{className:"mt4 mb2 underline"},"Species Profile"),r.a.createElement("div",{className:"list pl0"},r.a.createElement("div",{className:"cf ph2-ns flex justify-center"},r.a.createElement("div",{className:"flex flex-column w-50 mb3"},r.a.createElement("p",null,r.a.createElement("strong",null,"Height:")," ",(.1*t).toFixed(1)," m"),r.a.createElement("p",null,r.a.createElement("strong",null,"Weight:")," ",(.1*n).toFixed(1)," kg"),r.a.createElement("p",null,r.a.createElement("strong",null,"Capture Rate:")," ",(a.capture_rate/255*100).toFixed(0),"%"),r.a.createElement("p",null,r.a.createElement("strong",null,"Base Exp:")," ",s),r.a.createElement("p",null,r.a.createElement("strong",null,"Base Happiness:")," ",a.base_happiness)),r.a.createElement("div",{className:"flex flex-column w-50 mb3"},r.a.createElement("p",null,r.a.createElement("strong",null,"Color:")," ",a.color.name),r.a.createElement("p",null,r.a.createElement("strong",null,"Hatch Steps:")," ",255*a.hatch_counter),r.a.createElement("p",null,r.a.createElement("strong",null,"Growtht Rate:")," ",a.growth_rate.name),r.a.createElement("p",null,r.a.createElement("strong",null,"Habitat:")," ",a.habitat.name)))))},v=function(e){var a=e.evolutionChain,t=e.handleClick,n=function(e){return e.trim().split("/")[6]},s=function(){var e=[],t=a.chain.species,r=a.chain.evolves_to,s=null;if(t){var c=n(t.url);if(e.push({id:c,name:t.name,url:t.url}),r.length>0){var l=n(r[0].species.url);if(e.push({id:l,name:r[0].species.name,url:r[0].species.url}),(s=a.chain.evolves_to[0].evolves_to).length>0){var m=n(s[0].species.url);e.push({id:m,name:s[0].species.name,url:s[0].species.url})}}}return e}();return r.a.createElement("div",{id:"evolution-chain",className:"mb1"},r.a.createElement("h3",{className:"mt4 mb2 underline"},"Evolution Chain"),s.map((function(e,a){return r.a.createElement("div",{key:a,className:"dib"},r.a.createElement("div",{className:"br4 ma1 pa1 grow pointer shadow-4 bg-near-white",onClick:function(){return t(e.id)}},r.a.createElement("img",{src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(e.id,".png"),alt:"pokemon"}),r.a.createElement("h4",{className:"ttc"},e.name)))})))},w=function(e){var a=e.speciesInfo,t=a.flavor_text_entries.find((function(e){return"y"===e.version.name&&"en"===e.language.name})).flavor_text;return r.a.createElement("div",{id:"genus"},r.a.createElement("h3",{className:"mt4 mb1 underline"},a.genera.find((function(e){return"en"===e.language.name})).genus),r.a.createElement("p",{className:"mt1"},t))},k=function(e){var a=e.speciesInfo;return r.a.createElement("div",{id:"egg-group"},r.a.createElement("h3",{className:"mt4 mb1 underline"},"Egg Group"),r.a.createElement("ul",{className:"list pl0 ma0"},a.egg_groups.map((function(e,a){return r.a.createElement("li",{key:a,className:"ttc"},e.name)}))))},N=function(e){var a=e.stats,t=function(e){var t=a.find((function(a){return a.stat.name===e})).base_stat;return t=Math.floor(t/200*100)},n=function(e){return a.find((function(a){return a.stat.name===e})).base_stat};return r.a.createElement("div",{id:"stats"},r.a.createElement("h3",{className:"mt3 mt4 mb1 underline"},"Base Stats"),r.a.createElement("div",{className:"list pl0 ma0"},r.a.createElement("div",{className:"w-70 center flex items-center"},r.a.createElement("div",{className:"f6 w-30 pa2 tr"},"HP:"),r.a.createElement("div",{className:"progress flex items-center shadow-4"},r.a.createElement("div",{className:"w-70 pa3 mr2 bar",style:{width:"".concat(t("hp"),"%")}},r.a.createElement("p",{className:"percent"},n("hp"))))),r.a.createElement("div",{className:"w-70 center flex items-center"},r.a.createElement("div",{className:"f6 w-30 pa2 tr"},"Attack:"),r.a.createElement("div",{className:"progress flex items-center shadow-4"},r.a.createElement("div",{className:"w-70 pa3 mr2 bar",style:{width:"".concat(t("attack"),"%")}},r.a.createElement("p",{className:"percent"},n("attack"))))),r.a.createElement("div",{className:"w-70 center flex items-center"},r.a.createElement("div",{className:"f6 w-30 pa2 tr"},"Defense:"),r.a.createElement("div",{className:"progress flex items-center shadow-4"},r.a.createElement("div",{className:"w-70 pa3 mr2 bar",style:{width:"".concat(t("defense"),"%")}},r.a.createElement("p",{className:"percent"},n("defense"))))),r.a.createElement("div",{className:"w-70 center flex items-center"},r.a.createElement("div",{className:"f6 w-30 pa2 tr"},"Speed:"),r.a.createElement("div",{className:"progress flex items-center shadow-4"},r.a.createElement("div",{className:"w-70 pa3 mr2 bar",style:{width:"".concat(t("speed"),"%")}},r.a.createElement("p",{className:"percent"},n("speed"))))),r.a.createElement("div",{className:"w-70 center flex items-center"},r.a.createElement("div",{className:"f6 w-30 pa2 tr"},"Sp Atk:"),r.a.createElement("div",{className:"progress flex items-center shadow-4"},r.a.createElement("div",{className:"w-70 pa3 mr2 bar",style:{width:"".concat(t("special-attack"),"%")}},r.a.createElement("p",{className:"percent"},n("special-attack"))))),r.a.createElement("div",{className:"w-70 center flex items-center"},r.a.createElement("div",{className:"f6 w-30 pa2 tr"},"Sp Def:"),r.a.createElement("div",{className:"progress flex items-center shadow-4"},r.a.createElement("div",{className:"w-70 pa3 mr2 bar",style:{width:"".concat(t("special-defense"),"%")}},r.a.createElement("p",{className:"percent"},n("special-defense")))))))},y=(t(9),function(e){var a=e.types;return r.a.createElement("div",{id:"types"},r.a.createElement("h3",{className:"mt3 mb2 underline"},"Type(s)"),r.a.createElement("div",{className:"list pl0 ma0"},a.map((function(e,a){return r.a.createElement("div",{key:a,className:"ttc w4 f6 center br-pill ph3 pv2 mb2  white ".concat(e.type.name,"-color shadow-4")},e.type.name)}))))}),x=function(e){var a=e.moves;return r.a.createElement("div",{id:"moves"},r.a.createElement("h3",{className:"mt4 mb1 underline"},"Level-Up Moves"),r.a.createElement("ul",{className:"list pl0 ma0"},a.map((function(e,a){return"level-up"===e.version_group_details[0].move_learn_method.name?r.a.createElement("li",{key:a,className:"ttc"},e.move.name):null}))))},_=function(e,a){var t={bug:1,dragon:1,electric:1,fairy:1,fighting:1,fire:1,flying:1,ghost:1,grass:1,ground:1,ice:1,normal:1,poison:1,psychic:1,rock:1,steel:1,water:1},n=[],r=[],s=[];return e.forEach((function(e){e.damage_relations.double_damage_from.forEach((function(e){n.includes(e.name)||(n.push(e.name),a(t,e.name,2))}))})),e.forEach((function(e){e.damage_relations.half_damage_from.forEach((function(e){r.includes(e.name)||(r.push(e.name),a(t,e.name,.5))}))})),e.forEach((function(e){e.damage_relations.no_damage_from.forEach((function(e){s.includes(e.name)||(s.push(e.name),a(t,e.name,0))}))})),t},C=function(e,a){var t={bug:1,dragon:1,electric:1,fairy:1,fighting:1,fire:1,flying:1,ghost:1,grass:1,ground:1,ice:1,normal:1,poison:1,psychic:1,rock:1,steel:1,water:1},n=[],r=[],s=[];return e.forEach((function(e){e.damage_relations.double_damage_to.forEach((function(e){n.includes(e.name)||(n.push(e.name),a(t,e.name,2))}))})),e.forEach((function(e){e.damage_relations.half_damage_to.forEach((function(e){r.includes(e.name)||(r.push(e.name),a(t,e.name,.5))}))})),e.forEach((function(e){e.damage_relations.no_damage_to.forEach((function(e){s.includes(e.name)||(s.push(e.name),a(t,e.name,0))}))})),t},j=(t(19),function(e){var a=e.damage,t=function(e,a,t){switch(a){case"bug":e.bug*=t;break;case"dragon":e.dragon*=t;break;case"electric":e.electric*=t;break;case"fairy":e.fairy*=t;break;case"fighting":e.fighting*=t;break;case"fire":e.fire*=t;break;case"flying":e.flying*=t;break;case"ghost":e.ghost*=t;break;case"grass":e.grass*=t;break;case"ground":e.ground*=t;break;case"ice":e.ice*=t;break;case"normal":e.normal*=t;break;case"poison":e.poison*=t;break;case"psychic":e.psychic*=t;break;case"rock":e.rock*=t;break;case"steel":e.steel*=t;break;case"water":e.water*=t}},n=function(e){var a=e.toString().length-2,t=Math.pow(10,a),n=e*t,s=function e(a,t){return t<1e-7?a:e(t,Math.floor(a%t))}(n,t);return n/=s,1===(t/=s)?r.a.createElement("span",{className:"w3 f6 br-pill ba ph3 pv2 mb2 dib dark-gray"},"x ",e):r.a.createElement("span",{className:"w3 f6 br-pill ba ph3 pv2 mb2 dib dark-gray"},"x ",r.a.createElement("sup",null,Math.floor(n)),"/",r.a.createElement("sub",null,Math.floor(t)))},s=_(a,t),c=C(a,t);return r.a.createElement("div",{id:"moves"},r.a.createElement("h3",{className:"mt4 mb1 tc"},r.a.createElement("span",{className:"w3 f6 br-pill ba ph3 pv2 mb2 dib dark-gray"},"from"),r.a.createElement("span",{className:"right-arrow mr2 ml2"},"\u21e2"),r.a.createElement("span",{className:"underline"},"Damage"),r.a.createElement("span",{className:"right-arrow mr2 ml2"},"\u21e2"),r.a.createElement("span",{className:"w3 f6 br-pill ba ph3 pv2 mb2 dib dark-gray"},"to")),r.a.createElement("div",{className:"list pl0 ma0"},r.a.createElement("p",{className:"ma0"},n(s.bug),r.a.createElement("span",{className:"right-arrow mr2 ml2"},"\u21e2"),r.a.createElement("span",{className:"ttc w4 f6 br-pill ph3 pv2 mb2 dib white bug-color shadow-4"},"bug"),r.a.createElement("span",{className:"right-arrow mr2 ml2"},"\u21e2"),n(c.bug)),r.a.createElement("p",{className:"ma0"},n(s.dragon),r.a.createElement("span",{className:"right-arrow mr2 ml2"},"\u21e2"),r.a.createElement("span",{className:"ttc w4 f6 br-pill ph3 pv2 mb2 dib white dragon-color shadow-4"},"dragon"),r.a.createElement("span",{className:"right-arrow mr2 ml2"},"\u21e2"),n(c.dragon)),r.a.createElement("p",{className:"ma0"},n(c.electric),r.a.createElement("span",{className:"right-arrow mr2 ml2"},"\u21e2"),r.a.createElement("span",{className:"ttc w4 f6 br-pill ph3 pv2 mb2 dib white electric-color shadow-4"},"electric"),r.a.createElement("span",{className:"right-arrow mr2 ml2"},"\u21e2"),n(c.electric)),r.a.createElement("p",{className:"ma0"},n(s.fairy),r.a.createElement("span",{className:"right-arrow mr2 ml2"},"\u21e2"),r.a.createElement("span",{className:"ttc w4 f6 br-pill ph3 pv2 mb2 dib white fairy-color shadow-4"},"fairy"),r.a.createElement("span",{className:"right-arrow mr2 ml2"},"\u21e2"),n(c.fairy)),r.a.createElement("p",{className:"ma0"},n(s.fighting),r.a.createElement("span",{className:"right-arrow mr2 ml2"},"\u21e2"),r.a.createElement("span",{className:"ttc w4 f6 br-pill ph3 pv2 mb2 dib white fighting-color shadow-4"},"fighting"),r.a.createElement("span",{className:"right-arrow mr2 ml2"},"\u21e2"),n(c.fighting)),r.a.createElement("p",{className:"ma0"},n(s.fire),r.a.createElement("span",{className:"right-arrow mr2 ml2"},"\u21e2"),r.a.createElement("span",{className:"ttc w4 f6 br-pill ph3 pv2 mb2 dib white fire-color shadow-4"},"fire"),r.a.createElement("span",{className:"right-arrow mr2 ml2"},"\u21e2"),n(c.fire)),r.a.createElement("p",{className:"ma0"},n(s.flying),r.a.createElement("span",{className:"right-arrow mr2 ml2"},"\u21e2"),r.a.createElement("span",{className:"ttc w4 f6 br-pill ph3 pv2 mb2 dib white flying-color shadow-4"},"flying"),r.a.createElement("span",{className:"right-arrow mr2 ml2"},"\u21e2"),n(c.flying)),r.a.createElement("p",{className:"ma0"},n(s.ghost),r.a.createElement("span",{className:"right-arrow mr2 ml2"},"\u21e2"),r.a.createElement("span",{className:"ttc w4 f6 br-pill ph3 pv2 mb2 dib white ghost-color shadow-4"},"ghost"),r.a.createElement("span",{className:"right-arrow mr2 ml2"},"\u21e2"),n(c.ghost)),r.a.createElement("p",{className:"ma0"},n(s.grass),r.a.createElement("span",{className:"right-arrow mr2 ml2"},"\u21e2"),r.a.createElement("span",{className:"ttc w4 f6 br-pill ph3 pv2 mb2 dib white grass-color shadow-4"},"grass"),r.a.createElement("span",{className:"right-arrow mr2 ml2"},"\u21e2"),n(c.grass)),r.a.createElement("p",{className:"ma0"},n(s.ground),r.a.createElement("span",{className:"right-arrow mr2 ml2"},"\u21e2"),r.a.createElement("span",{className:"ttc w4 f6 br-pill ph3 pv2 mb2 dib white ground-color shadow-4"},"ground"),r.a.createElement("span",{className:"right-arrow mr2 ml2"},"\u21e2"),n(c.ground)),r.a.createElement("p",{className:"ma0"},n(s.normal),r.a.createElement("span",{className:"right-arrow mr2 ml2"},"\u21e2"),r.a.createElement("span",{className:"ttc w4 f6 br-pill ph3 pv2 mb2 dib white normal-color shadow-4"},"normal"),r.a.createElement("span",{className:"right-arrow mr2 ml2"},"\u21e2"),n(c.normal)),r.a.createElement("p",{className:"ma0"},n(s.poison),r.a.createElement("span",{className:"right-arrow mr2 ml2"},"\u21e2"),r.a.createElement("span",{className:"ttc w4 f6 br-pill ph3 pv2 mb2 dib white poison-color shadow-4"},"poison"),r.a.createElement("span",{className:"right-arrow mr2 ml2"},"\u21e2"),n(c.poison)),r.a.createElement("p",{className:"ma0"},n(s.psychic),r.a.createElement("span",{className:"right-arrow mr2 ml2"},"\u21e2"),r.a.createElement("span",{className:"ttc w4 f6 br-pill ph3 pv2 mb2 dib white psychic-color shadow-4"},"psychic"),r.a.createElement("span",{className:"right-arrow mr2 ml2"},"\u21e2"),n(c.psychic)),r.a.createElement("p",{className:"ma0"},n(s.rock),r.a.createElement("span",{className:"right-arrow mr2 ml2"},"\u21e2"),r.a.createElement("span",{className:"ttc w4 f6 br-pill ph3 pv2 mb2 dib white rock-color shadow-4"},"rock"),r.a.createElement("span",{className:"right-arrow mr2 ml2"},"\u21e2"),n(c.rock)),r.a.createElement("p",{className:"ma0"},n(s.steel),r.a.createElement("span",{className:"right-arrow mr2 ml2"},"\u21e2"),r.a.createElement("span",{className:"ttc w4 f6 br-pill ph3 pv2 mb2 dib white steel-color shadow-4"},"steel"),r.a.createElement("span",{className:"right-arrow mr2 ml2"},"\u21e2"),n(c.steel)),r.a.createElement("p",{className:"ma0"},n(s.water),r.a.createElement("span",{className:"right-arrow mr2 ml2"},"\u21e2"),r.a.createElement("span",{className:"ttc w4 f6 br-pill ph3 pv2 mb2 dib white water-color shadow-4"},"water"),r.a.createElement("span",{className:"right-arrow mr2 ml2"},"\u21e2"),n(c.water))))}),I=(t(20),function(){return r.a.createElement("div",{id:"pokeball"},r.a.createElement("svg",{className:"fetching",viewBox:"0 0 100 100",width:"150",height:"150"},r.a.createElement("g",{transform:"translate(50 50) scale(0.8)"},r.a.createElement("g",{className:"stars",transform:"scale(0)"},r.a.createElement("path",{fill:"#303030",stroke:"#303030",strokeWidth:"3",strokeLinejoin:"round",strokeLinecap:"round",d:"M -50 -50 l 4.5 0 l 2.5 -4.5 l 2.5 4.5 l 4.5 0 l -3.5 3.5 l 1.5 5 l -5 -2.5 l -5 2.5 l 1.5 -5 l -3.5 -3.5"}),r.a.createElement("path",{fill:"#303030",stroke:"#303030",strokeWidth:"3",strokeLinejoin:"round",strokeLinecap:"round",d:"M 36 -50 l 4.5 0 l 2.5 -4.5 l 2.5 4.5 l 4.5 0 l -3.5 3.5 l 1.5 5 l -5 -2.5 l -5 2.5 l 1.5 -5 l -3.5 -3.5"})),r.a.createElement("g",{transform:"translate(0 50)"},r.a.createElement("g",{className:"gravity"},r.a.createElement("g",{transform:"translate(0 -50)"},r.a.createElement("g",{className:"ball",transform:"scale(1 1)"},r.a.createElement("g",{className:"bottom"},r.a.createElement("path",{fill:"#ffffff",stroke:"#303030",strokeWidth:"5",d:"M -47.5 0 a 47.5 47.5 0 0 0 95 0z"})),r.a.createElement("g",{className:"top"},r.a.createElement("path",{fill:"#f15d5f",d:"M -47.5 0 a 47.5 47.5 0 0 1 95 0"}),r.a.createElement("path",{fill:"none",stroke:"#ffffff",strokeWidth:"5",strokeLinecap:"round",strokeDasharray:"0 15 9 9 20 100",d:"M -38 -0 a 38 38 0 0 1 76 0"}),r.a.createElement("path",{fill:"none",stroke:"#303030",strokeWidth:"5",d:"M -47.5 0 a 47.5 47.5 0 0 1 95 0z"})),r.a.createElement("g",{className:"open",transform:"scale(1 0)"},r.a.createElement("path",{fill:"#303030",stroke:"#303030",strokeWidth:"5",strokeLinejoin:"round",d:"M -47.5 -10 a 190 190 0 0 1 95 0 a 190 190 0 0 1 -95 0"}),r.a.createElement("path",{fill:"#303030",stroke:"#303030",strokeWidth:"5",strokeLinejoin:"round",d:"M -47.5 5 a 160 160 0 0 0 95 0 a 180 180 0 0 0 -95 0"})),r.a.createElement("g",{className:"center"},r.a.createElement("circle",{fill:"#ffffff",stroke:"#303030",strokeWidth:"5",cx:"0",cy:"0",r:"12"}),r.a.createElement("circle",{fill:"#ffffff",stroke:"#303030",strokeWidth:"3",cx:"0",cy:"0",r:"6"}),r.a.createElement("g",{className:"inner",opacity:"0"},r.a.createElement("circle",{fill:"#f15d5f",cx:"0",cy:"0",r:"4.5"}))))))))))}),L=function(e){var a=e.abilities;return r.a.createElement("div",{id:"moves"},r.a.createElement("h3",{className:"mt3 mb1 underline"},"Abilities"),r.a.createElement("ul",{className:"list pl0 ma0"},a.map((function(e,a){return r.a.createElement("li",{key:a,className:"ttc"},e.ability.name)}))))},S=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(){var e;return Object(l.a)(this,t),(e=a.call(this)).gatherPokemonInfo=function(){var a=Object(d.a)(f.a.mark((function a(t){var n,r,s,c,l;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(t===e.state.pokemon.id){a.next=17;break}return a.next=3,e.getPokemonDetails("https://pokeapi.co/api/v2/pokemon/".concat(t));case 3:return n=a.sent,a.next=6,e.getSpeciesJson(n.species.url);case 6:return r=a.sent,a.next=9,e.getGenderJson(n.name);case 9:return s=a.sent,a.next=12,e.getEvolutionChainJson(r.evolution_chain.url);case 12:return c=a.sent,a.next=15,e.getDamageJson(n);case 15:l=a.sent,e.setState({pokemon:n,species:n.species,speciesInfo:r,genderInfo:s,evolutionChain:c,abilities:n.abilities,damage:l,moves:n.moves,stats:n.stats,types:n.types,isLoading:!1});case 17:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),e.getPokemonDetails=function(){var e=Object(d.a)(f.a.mark((function e(a){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(a));case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),e.getSpeciesJson=function(){var e=Object(d.a)(f.a.mark((function e(a){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(a));case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),e.getGenderJson=function(){var e=Object(d.a)(f.a.mark((function e(a){var t,n,r,s,c,l,m;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeapi.co/api/v2/gender/1");case 2:return t=e.sent,e.next=5,t.json();case 5:if(n=e.sent,r=n.pokemon_species_details.find((function(e){return e.pokemon_species.name===a}))){e.next=15;break}return e.next=10,fetch("https://pokeapi.co/api/v2/gender/2");case 10:return s=e.sent,e.next=13,s.json();case 13:c=e.sent,r=c.pokemon_species_details.find((function(e){return e.pokemon_species.name===a}));case 15:if(r){e.next=23;break}return e.next=18,fetch("https://pokeapi.co/api/v2/gender/3");case 18:return l=e.sent,e.next=21,l.json();case 21:m=e.sent,r=m.pokemon_species_details.find((function(e){return e.pokemon_species.name===a}));case 23:return e.abrupt("return",r);case 24:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),e.getEvolutionChainJson=function(){var e=Object(d.a)(f.a.mark((function e(a){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(a));case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),e.getDamageJson=function(){var e=Object(d.a)(f.a.mark((function e(a){var t,n,r,s,c,l,m,o,i,p,u;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,a.types.forEach(function(){var e=Object(d.a)(f.a.mark((function e(a){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.push(a.type.url);case 1:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}());case 3:return e.next=5,t.map((function(e){return fetch(e)}));case 5:n=e.sent,r=[],s=!0,c=!1,e.prev=9,m=Object(g.a)(n);case 11:return e.next=13,m.next();case 13:return o=e.sent,s=o.done,e.next=17,o.value;case 17:if(i=e.sent,s){e.next=27;break}return p=i,e.next=22,p.json();case 22:u=e.sent,r.push(u);case 24:s=!0,e.next=11;break;case 27:e.next=33;break;case 29:e.prev=29,e.t0=e.catch(9),c=!0,l=e.t0;case 33:if(e.prev=33,e.prev=34,s||null==m.return){e.next=38;break}return e.next=38,m.return();case 38:if(e.prev=38,!c){e.next=41;break}throw l;case 41:return e.finish(38);case 42:return e.finish(33);case 43:return e.abrupt("return",r);case 44:case"end":return e.stop()}}),e,null,[[9,29,33,43],[34,,38,42]])})));return function(a){return e.apply(this,arguments)}}(),e.state={pokemon:[],species:[],speciesInfo:[],genderInfo:[],evolutionChain:[],abilities:[],damage:[],moves:[],stats:[],types:[],isLoading:!0},e}return Object(m.a)(t,[{key:"shouldComponentUpdate",value:function(e,a){return this.state.pokemon.id!==a.pokemon.id&&(window.scrollTo(0,0),!0)}},{key:"componentDidMount",value:function(){var e=Object(d.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.gatherPokemonInfo(this.props.pokemonDetail.id);case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;if(this.state.isLoading)return r.a.createElement(I,null);var a=this.state,t=a.pokemon,n=a.speciesInfo,s=a.genderInfo,c=a.evolutionChain,l=a.abilities,m=a.moves,o=a.stats,i=a.damage,p=a.types,u=t.name,h=t.base_experience,f=t.height,d=t.weight,g=t.id;return r.a.createElement("div",{className:"mw6 center pa3 tc bg-lightest-blue br2 pa1 ma2 bw2 shadow-5"},r.a.createElement("button",{className:"f6 link dim br3 ph3 pv2 mb2 dib white bg-red",onClick:function(){return e.props.onRouteChange("home")}},"Home"),r.a.createElement("h1",{className:"ttc"},u),r.a.createElement("img",{src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(g,".png"),alt:u}),r.a.createElement(y,{types:p}),r.a.createElement(w,{speciesInfo:n}),r.a.createElement("div",{className:"mt3 flex justify-around"},r.a.createElement(L,{abilities:l}),r.a.createElement(E,{genderInfo:s,name:u})),r.a.createElement(b,{speciesInfo:n,height:f,weight:d,base_experience:h}),r.a.createElement(N,{stats:o}),r.a.createElement(j,{damage:i}),r.a.createElement(v,{handleClick:this.gatherPokemonInfo,evolutionChain:c}),r.a.createElement(k,{speciesInfo:n}),r.a.createElement(x,{moves:m}))}}]),t}(n.Component),D=function(e){var a=e.onSearchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{onChange:a,className:"pa3 ba bg-lightest-blue",type:"search",placeholder:"search pokemon"}))},P=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(){var e;return Object(l.a)(this,t),(e=a.call(this)).getPokemonList=function(){fetch("https://pokeapi.co/api/v2/pokemon?limit=".concat("151")).then((function(e){return e.json()})).then((function(a){e.setState({pokemonList:a.results,isLoading:!1})})).catch(console.log)},e.onRouteChange=function(a){e.setState({route:a})},e.onPokemonDetail=function(a){e.setState({pokemonDetail:a})},e.onSearchChange=function(a){e.setState({pokemonSearch:a.target.value})},e.state={isLoading:!0,route:"home",pokemonSearch:"",pokemonList:[],pokemonDetail:[]},e}return Object(m.a)(t,[{key:"componentDidMount",value:function(){this.getPokemonList()}},{key:"render",value:function(){var e=this,a=this.state.pokemonList.filter((function(a){return a.name.toLowerCase().includes(e.state.pokemonSearch.toLowerCase())}));return this.state.isLoading?r.a.createElement(I,null):"home"===this.state.route?r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("h1",{className:"tc ttc red f-subheadline lh-title mb3"},"pok\xe9dex app"),r.a.createElement(D,{onSearchChange:this.onSearchChange})),r.a.createElement(u,{pokemonList:a,onRouteChange:this.onRouteChange,onPokemonDetail:this.onPokemonDetail})):"detail"===this.state.route?r.a.createElement("section",{className:""},r.a.createElement(S,{pokemonDetail:this.state.pokemonDetail,onRouteChange:this.onRouteChange})):void 0}}]),t}(n.Component);t(21),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[12,1,2]]]);
//# sourceMappingURL=main.44e2b588.chunk.js.map