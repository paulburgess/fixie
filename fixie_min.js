var fixie=function(){function o(a){if(!document.querySelectorAll){return false}try{d(document.querySelectorAll(a));return true}catch(b){return false}}function n(){var a,b=Math.random()*4+4,c=[];for(a=0;a<b;a++){c.push(j())}return"<li>"+c.join("</li><li>")+"</li>"}function m(){var a=h(3,7);var b="";for(var c=0;c<a-1;c++){b+="<p>"+l()+"</p>"}return b}function l(){return i(3,7,k)}function k(){return i(4,9,g)+"."}function j(){return i(3,5,g)}function i(a,b,c){var d=h(a,b);var e=[];for(var g=0;g<d;g++){e.push(c())}return f(e.join(" "))}function h(a,b){return Math.round(Math.random()*(b-a)+a)}function g(){return e[h(0,e.length-1)]}function f(a){return a.charAt(0).toUpperCase()+a.slice(1)}function d(a){for(var b=0;b<a.length;b++){c(a[b])}}function c(a){if(!/^\s*$/.test(a.innerHTML)){var d=a.children;if(d.length){for(var e=0;e<d.length;e++){c(d[e])}}return}switch(a.nodeName.toLowerCase()){case"b":case"em":case"strong":case"button":case"th":case"td":case"title":case"tr":a.innerHTML=g();break;case"header":case"cite":case"caption":case"mark":case"q":case"s":case"u":case"small":case"span":case"code":case"pre":case"li":case"dt":case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":a.innerHTML=j();break;case"footer":case"aside":case"summary":case"blockquote":case"p":a.innerHTML=l();break;case"article":case"section":a.innerHTML=m();break;case"a":a.href="http://ryhan.me/";a.innerHTML="www."+g()+f(g())+".com";break;case"img":var h=a.getAttribute("width")||a.width||(a.width=250);var i=a.getAttribute("height")||a.height||(a.height=100);a.src=b.replace("${w}",h).replace("${h}",i);break;case"ol":case"ul":a.innerHTML=n();break;default:a.innerHTML=k()}}var a;var b="http://placehold.it/${w}x${h}";if(typeof window.getElementsByClassName!="function"){document.getElementsByClassName=function(a){var b=[];var c=new RegExp("\\b"+a+"\\b");var d=this.getElementsByTagName("*");for(var e=0;e<d.length;e++){var f=d[e].className;if(c.test(f))b.push(d[e])}return b}}var e=["I","8-bit","ethical","reprehenderit","delectus","non","latte","fixie","mollit","authentic","1982","moon","helvetica","dreamcatcher","esse","vinyl","nulla","Carles","bushwick","bronson","clothesline","fin","frado","jug","kale","organic","local","fresh","tassel","liberal","art","the","of","bennie","chowder","daisy","gluten","hog","capitalism","is","vegan","ut","farm-to-table","etsy","incididunt","sunt","twee","yr","before","gentrify","whatever","wes","Anderson","chillwave","dubstep","sriracha","voluptate","pour-over","esse","trust-fund","Pinterest","Instagram","DSLR","vintage","dumpster","totally","selvage","gluten-free","brooklyn","placeat","delectus","sint","magna","brony","pony","party","beer","shot","narwhal","salvia","letterpress","art","party","street-art","seitan","anime","wayfarers","non-ethical","viral","iphone","anim","polaroid","gastropub","city","classy","original","brew"];d(document.getElementsByClassName("fixie"));return{init:function(){if(a){o(a)}else{d(document.getElementsByClassName("fixie"))}},setImagePlaceholder:function(a){b=a;return this},setSelector:function(b){if(typeof b==="object"){a=b.join(",")}else if(b){a=b}return this}}}()