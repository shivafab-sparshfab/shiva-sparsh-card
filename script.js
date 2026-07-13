// =====================================
// SHIVA FAB | SPARSH FAB
// Premium Digital Business Card
// =====================================

const card = document.getElementById("card");

// Flip Card
card.addEventListener("click", function (e) {

    // Don't flip if a button or link is clicked
    if (e.target.closest("a")) return;

    card.classList.toggle("flip");

});

// Keyboard Support
document.addEventListener("keydown", function (e) {

    if (e.code === "Space") {

        e.preventDefault();
        card.classList.toggle("flip");

    }

});

// =====================================
// Call Button
// =====================================

const callBtn = document.getElementById("callBtn");

if(callBtn){

callBtn.addEventListener("click",function(e){

    e.preventDefault();

    window.location.href="tel:+919081121913";

});

}

// =====================================
// WhatsApp
// =====================================

const whatsappBtn=document.getElementById("whatsappBtn");

if(whatsappBtn){

whatsappBtn.addEventListener("click",function(e){

e.preventDefault();

window.open(
"https://wa.me/919081121913",
"_blank"
);

});

}

// =====================================
// Google Maps
// =====================================

const mapsBtn=document.getElementById("mapsBtn");

if(mapsBtn){

mapsBtn.addEventListener("click",function(e){

e.preventDefault();

window.open(
"https://maps.app.goo.gl/6waHYHqyhm4K5LXR6?g_st=ic",
"_blank"
);

});

}

// =====================================
// Native Share
// =====================================

const shareBtn=document.getElementById("shareBtn");

if(shareBtn){

shareBtn.addEventListener("click",async function(){

if(navigator.share){

try{

await navigator.share({

title:"SHIVA FAB | SPARSH FAB",

text:"Premium Fabric Manufacturers",

url:window.location.href

});

}catch(err){}

}else{

navigator.clipboard.writeText(window.location.href);

alert("Website link copied.");

}

});

}

// =====================================
// Download vCard
// =====================================

const saveBtn=document.getElementById("saveBtn");

if(saveBtn){

saveBtn.addEventListener("click",function(){

const vcard=`BEGIN:VCARD
VERSION:3.0
FN:SHIVA FAB & SPARSH FAB
ORG:SHIVA FAB | SPARSH FAB
TEL:+919081121913
ADR:;;PLOT NO. 2-3-4-5, GOLDEN INDUSTRIAL ESTATE, VIBHAG-1, DELADGAM, SAYAN ROAD, OLPAD, SURAT,GUJARAT,INDIA
URL:${window.location.href}
END:VCARD`;

const blob=new Blob([vcard],{
type:"text/vcard"
});

const url=URL.createObjectURL(blob);

const a=document.createElement("a");

a.href=url;

a.download="SHIVA-SPARSH.vcf";

a.click();

URL.revokeObjectURL(url);

});

}

// =====================================
// Small Fade Animation
// =====================================

window.addEventListener("load",()=>{

document.body.style.opacity="0";

document.body.style.transition="opacity .6s";

setTimeout(()=>{

document.body.style.opacity="1";

},100);

});