/*=====================================
Venkateswaraa Website
script.js
=====================================*/

/* ==========================
Mobile Navigation
========================== */

const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

if (menuBtn && navbar) menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("active");

    if (navbar.classList.contains("active")) {
        menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }

});

/* Close menu after clicking */

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        if (navbar) navbar.classList.remove("active");
        if (menuBtn) menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
});

/* ==========================
Sticky Header
========================== */

const header = document.querySelector(".header");

if (header) window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "#0d0d0d";

        header.style.boxShadow = "0 8px 30px rgba(0,0,0,.35)";

    }

    else {

        header.style.background = "rgba(0,0,0,.45)";

        header.style.boxShadow = "none";

    }

});

/* ==========================
Reveal Animation
========================== */

const reveals = document.querySelectorAll(

    ".section,.service-card,.stat-card,.contact,.cta"

);

function revealSections() {

    reveals.forEach(item => {

        const top = item.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if (top < windowHeight - 120) {

            item.classList.add("fade-up");

        }

    });

}

window.addEventListener("scroll", revealSections);

window.addEventListener("load", revealSections);

/* ==========================
Smooth Scroll
========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(

            this.getAttribute("href")

        );

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

/* ==========================
Active Navigation
========================== */

const navLinks = document.querySelectorAll(".nav-links a");
const currentPage = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();

navLinks.forEach(link => {
    const href = (link.getAttribute("href") || "").toLowerCase();
    link.classList.remove("active");
    if ((currentPage === "index.html" && (href === "index.html" || href === "#home")) || href === currentPage) {
        link.classList.add("active");
    }
});

window.addEventListener("scroll", () => {
    if (currentPage !== "index.html") return;
    let current = "";
    document.querySelectorAll("section[id]").forEach(section => {
        if (window.pageYOffset >= section.offsetTop - 140) current = section.id;
    });
    if (current === "contact") {
        navLinks.forEach(link => link.classList.toggle("active", link.getAttribute("href") === "#contact"));
    }
});

/* ==========================
Counter Animation
========================== */

const counters = document.querySelectorAll(".stat-card h2");

let started = false;

window.addEventListener("scroll", () => {

    const stats = document.querySelector(".stats");

    if (!stats) return;

    const position = stats.getBoundingClientRect().top;

    if (position < window.innerHeight && !started) {

        started = true;

        counters.forEach(counter => {

            const text = counter.innerText;

            const number = parseInt(text);

            const suffix = text.replace(number, "");

            let count = 0;

            const speed = Math.max(10, number / 60);

            const update = () => {

                if (count < number) {

                    count += speed;

                    counter.innerText =
                        Math.ceil(count) + suffix;

                    requestAnimationFrame(update);

                }

                else {

                    counter.innerText =
                        number + suffix;

                }

            };

            update();

        });

    }

});

/* ==========================
Back To Top Button
========================== */

const topButton = document.createElement("button");

topButton.innerHTML =
'<i class="fa-solid fa-arrow-up"></i>';

topButton.id = "topBtn";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.right = "25px";
topButton.style.bottom = "25px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.borderRadius = "50%";
topButton.style.border = "none";
topButton.style.cursor = "pointer";
topButton.style.background = "#d4af37";
topButton.style.color = "#111";
topButton.style.fontSize = "18px";
topButton.style.display = "none";
topButton.style.zIndex = "999";
topButton.style.transition = ".3s";

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topButton.style.display = "block";

    }

    else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/* ==========================
Scroll Progress Bar
========================== */

const progress = document.createElement("div");

progress.id = "progressBar";

document.body.appendChild(progress);

progress.style.position = "fixed";
progress.style.left = "0";
progress.style.top = "0";
progress.style.height = "4px";
progress.style.background = "#d4af37";
progress.style.width = "0";
progress.style.zIndex = "9999";

window.addEventListener("scroll", () => {

    const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progressWidth =
        (window.pageYOffset / totalHeight) * 100;

    progress.style.width = progressWidth + "%";

});

/* ==========================
Typewriter Effect
========================== */

const heroTitle = document.querySelector(".hero-left h2");

if (heroTitle) {

    const text = heroTitle.textContent;

    heroTitle.textContent = "";

    let i = 0;

    function typeWriter() {

        if (i < text.length) {

            heroTitle.textContent += text.charAt(i);

            i++;

            setTimeout(typeWriter, 70);

        }

    }

    window.addEventListener("load", () => {

        setTimeout(typeWriter, 600);

    });

}

/* ==========================
Image Hover Rotation
========================== */

const founderImage = document.querySelector(".hero-right img");

if (founderImage) {

    founderImage.addEventListener("mousemove", (e) => {

        const rect = founderImage.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateY = (x - rect.width / 2) / 25;
        const rotateX = (rect.height / 2 - y) / 25;

        founderImage.style.transform =
            `perspective(800px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             scale(1.03)`;

    });

    founderImage.addEventListener("mouseleave", () => {

        founderImage.style.transform =
            "perspective(800px) rotateX(0) rotateY(0) scale(1)";

    });

}

/* ==========================
Console Message
========================== */

console.log(
    "%cWelcome to Sree Venkateswaraa Regular Service",
    "color:#d4af37;font-size:18px;font-weight:bold;"
);

console.log(
    "%cDesigned with ❤️ using HTML, CSS & JavaScript",
    "color:white;font-size:14px;"
);
/* =====================================
   VRS CMS / ADMIN-CONTROLLED CONTENT
   Frontend-only data is shared through localStorage.
===================================== */
(function(){
  const DB_KEY='vrs_admin_db_v2';
  const fallback={
    site:{brand:'VENKATESWARAA',footer:'© 2026 Sree Venkateswaraa Regular Service. All Rights Reserved.',phone:'+91 6382210003',email:'info@venkateswaraa.com',address:'Salem, Tamil Nadu',whatsapp:'916382210003',nav:{home:'Home',about:'About',branches:'Branches',services:'Services',track:'Track Order',contact:'Contact',admin:'Admin'}},
    home:{welcome:'Welcome To',name:'Venkatasalam G',role:'Founder & Managing Director',intro:'I founded Sree Venkateswaraa Regular Service in 2018 with one vision—not just to build a company, but to build trust, create opportunities, and leave behind a legacy of excellence.',heroImage:'images/founder/founder.png',knowText:'Know More',knowLink:'about.html',contactText:'Contact Us',contactLink:'contact.html',ctaTitle:'Where Others Stop,',ctaHighlight:'We Deliver.',ctaDescription:'Your trusted partner in manpower & facility management.',ctaButton:'Get Started',ctaLink:'contact.html'},
    about:{title:'About Company',subtitle:'Building Trust Since 2018',company:'Sree Venkateswaraa Regular Service',paragraph1:'We provide professional manpower, facility management, housekeeping, industrial support, and security solutions across Tamil Nadu with a commitment to quality and reliability.',paragraph2:'Our mission is to deliver excellence through skilled manpower, disciplined execution, and customer satisfaction.',stats:[['20+','Years Experience'],['10+','Employees'],['100+','Clients'],['100%','Commitment']]},
    contact:{title:'Contact Us',subtitle:"Let's Build Together",officeTitle:'Office Information',address:'Salem, Tamil Nadu',phone:'+91 6382210003',email:'info@venkateswaraa.com',button:'View All Office Details'},
    services:{title:'Our Delivery Locations',subtitle:'Places covered across Salem, Dharmapuri and Krishnagiri districts',note:'Delivery may be available, or shipments can be transferred to connecting transport services.'},
    track:{title:'Track Your Order',subtitle:'Enter your Order ID below.',assignedTeam:'Operations Team',completion:'Within 24 Hours'},
    partners:[1,2,3,4,5,6].map(i=>({name:'Partner '+i,image:`images/partners/partner-${i}.png`})),
    theme:{gold:'#d4af37',background:'#111111',card:'#1a1a1a',text:'#ffffff',muted:'#bbbbbb'}
  };
  const seedBranches=[
    {id:'BR-DHARMAPURI',name:'Dharmapuri Office (Head Office)',city:'Dharmapuri',phone:'+91 6381847231',address:'RC RiceMill, 47, Dharmapuri - Pennagaram Main Rd, Kumarasamypettai, Dharmapuri, Tamil Nadu - 636701',email:'dharmapuri@venkateswaraa.com',map:'https://maps.google.com/'},
    {id:'BR-SALEM',name:'Salem Office',city:'Salem',phone:'+91 63822 10003',address:'M524+CJQ, Riverside Road, Agraharam, Salem, Tamil Nadu - 636001',email:'salem@venkateswaraa.com',map:'https://maps.google.com/'},
    {id:'BR-HOSUR',name:'Hosur Office',city:'Hosur',phone:'+91 97869 57249',address:'78, Junction Main Road, Hosur, Tamil Nadu - 636004',email:'hosur@venkateswaraa.com',map:'https://maps.google.com/'}
  ];
  function deepMerge(a,b){const o=JSON.parse(JSON.stringify(a));if(!b)return o;for(const k in b){if(b[k]&&typeof b[k]==='object'&&!Array.isArray(b[k])&&o[k])o[k]=deepMerge(o[k],b[k]);else o[k]=b[k]}return o}
  function getData(){try{const raw=JSON.parse(localStorage.getItem(DB_KEY)||'{}');return {...raw,content:deepMerge(fallback,raw.content||{}),branches:Array.isArray(raw.branches)&&raw.branches.length?raw.branches:seedBranches,locations:Array.isArray(raw.locations)?raw.locations:[]}}catch(e){return {content:fallback,branches:seedBranches,locations:[]}}}
  const data=getData(), c=data.content;
  const esc=s=>String(s??'').replace(/[&<>'"]/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[ch]));
  const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);

  function applyTheme(){
    const t=c.theme||fallback.theme;const style=document.createElement('style');style.id='vrs-cms-theme';style.textContent=`:root{--vrs-gold:${t.gold};--vrs-bg:${t.background};--vrs-card:${t.card};--vrs-text:${t.text};--vrs-muted:${t.muted}} body{background:var(--vrs-bg);color:var(--vrs-text)} .header{border-color:${t.gold}33} .gold,.section-title h2,.branch-title h1,.branch-card h2,.track-box h1,.district-title-wrap h3,.hero-left h3{color:${t.gold}!important}.btn-primary,.district-icon,.branch-card i{background:${t.gold}!important;color:${t.background}!important}.btn-outline,.office-btn,.back{border-color:${t.gold}!important;color:${t.gold}!important}.about,.contact,.services,.branch-section,.track-page{background:var(--vrs-bg)} .about-grid,.contact-grid,.branch-card,.track-box,.location-card,.stat-card{background:var(--vrs-card)} footer{background:${t.background}} .hero-left h1 span,.cta h2 span{color:${t.gold}}`;document.head.appendChild(style)
  }
  function setText(sel,v){const e=$(sel);if(e)e.textContent=v||''}
  function setHTML(sel,v){const e=$(sel);if(e)e.innerHTML=v||''}
  function applySite(){
    document.title=(document.title.split('|')[0].trim()||c.site.brand)+' | '+c.site.brand;
    $$('.logo').forEach(e=>e.innerHTML='<span class="gold">'+esc((c.site.brand||'V').charAt(0))+'</span>'+esc((c.site.brand||'VENKATESWARAA').slice(1)));
    const navMap={index:'home',about:'about',branch:'branches',services:'services','track-order':'track',contact:'contact',admin:'admin'};
    $$('.nav-links a').forEach(a=>{const href=(a.getAttribute('href')||'').split('/').pop().split('.')[0];const key=navMap[href]||'';if(key&&c.site.nav[key])a.textContent=c.site.nav[key]});
    $$('footer .footer p').forEach(e=>e.textContent=c.site.footer);$$('footer .footer h2').forEach(e=>e.textContent=c.site.brand);
    $$('.whatsapp-float').forEach(a=>a.href='https://wa.me/'+String(c.site.whatsapp||'').replace(/\D/g,''));
  }
  function applyHome(){
    if(!$('.hero'))return;
    setText('.hero-left h3',c.home.welcome);setText('.hero-left h1 span',c.home.name);setText('.hero-left h2',c.home.role);setText('.hero-left p',c.home.intro);
    const img=$('.hero-right img');if(img)img.src=c.home.heroImage;
    const buttons=$$('.hero-buttons a');if(buttons[0]){buttons[0].textContent=c.home.knowText;buttons[0].href=c.home.knowLink}if(buttons[1]){buttons[1].textContent=c.home.contactText;buttons[1].href=c.home.contactLink}
    const ctaTitle=$('.cta h2');if(ctaTitle)ctaTitle.innerHTML=esc(c.home.ctaTitle)+' <span>'+esc(c.home.ctaHighlight)+'</span>';setText('.cta p',c.home.ctaDescription);const cb=$('.cta a');if(cb){cb.textContent=c.home.ctaButton;cb.href=c.home.ctaLink}
    const cards=$$('.partner-card');c.partners.forEach((p,i)=>{const card=cards[i];if(!card)return;const img=card.querySelector('img');if(img){img.src=p.image;img.alt=p.name}});
  }
  function applyAbout(){if(!$('.about'))return;setText('.about .section-title h2',c.about.title);setText('.about .section-title p',c.about.subtitle);setText('.about-grid h3',c.about.company);const ps=$$('.about-grid>div:first-child p');if(ps[0])ps[0].textContent=c.about.paragraph1;if(ps[1])ps[1].textContent=c.about.paragraph2;c.about.stats.forEach((s,i)=>{const card=$$('.stat-card')[i];if(card){const h=card.querySelector('h2');const p=card.querySelector('p');if(h)h.textContent=s[0];if(p)p.textContent=s[1]}})}
  function applyContact(){if(!$('.contact'))return;setText('.contact .section-title h2',c.contact.title);setText('.contact .section-title p',c.contact.subtitle);setText('.contact-info h3',c.contact.officeTitle);const ps=$$('.contact-info>p');if(ps[0])ps[0].lastChild.textContent=' '+c.contact.address;if(ps[1])ps[1].lastChild.textContent=' '+c.contact.phone;if(ps[2])ps[2].lastChild.textContent=' '+c.contact.email;const b=$('.office-btn');if(b)b.textContent=' '+c.contact.button}
  function applyServices(){if(!$('.services'))return;setText('.services .section-title h2',c.services.title);setText('.services .section-title p',c.services.subtitle);const grid=$('.services');if(!data.locations.length)return;const active=data.locations.filter(x=>x.status!=='Inactive');const groups={};active.forEach(x=>(groups[x.city]??=[]).push(x));const html=Object.entries(groups).map(([city,rows])=>`<div class="district-section"><div class="district-heading"><div class="district-title-wrap"><span class="district-icon"><i class="fa-solid fa-location-dot"></i></span><div><h3>${esc(city)}</h3><p>Delivery locations across ${esc(city)} district</p></div></div><span class="district-note"><i class="fa-solid fa-truck"></i> ${esc(c.services.note)}</span></div><div class="location-grid">${rows.map(x=>`<div class="location-card"><i class="fa-solid fa-location-dot"></i><div><h4>${esc(x.area)}</h4><span>${esc(x.pin)}</span></div></div>`).join('')}</div></div>`).join('');const container=$('.services .container');if(container){const old=container.querySelectorAll('.district-section');old.forEach(x=>x.remove());container.insertAdjacentHTML('beforeend',html)} }
  function applyBranches(){const grid=$('.branch-grid');if(!grid||!data.branches.length)return;grid.innerHTML=data.branches.map(b=>`<div class="branch-card"><i class="fa-solid fa-building"></i><h2>${esc(b.name)}</h2><p><strong>Address</strong></p><p>${esc(b.address).replace(/, /g,',<br>')}</p><p><strong>Phone</strong></p><p>${esc(b.phone)}</p><p><strong>Email</strong></p><p>${esc(b.email||'')}</p><a href="${esc(b.map||'https://maps.google.com/') }" target="_blank" rel="noopener">View on Google Maps</a></div>`).join('')}
  function applyTrack(){if(!$('.track-page'))return;setText('.track-box h1',c.track.title);setText('.track-box>p',c.track.subtitle);const team=$('#result p:nth-of-type(3)');if(team)team.innerHTML='<strong>Assigned Team :</strong> '+esc(c.track.assignedTeam);const comp=$('#result p:nth-of-type(4)');if(comp)comp.innerHTML='<strong>Estimated Completion :</strong> '+esc(c.track.completion)}
  window.trackOrder=function(){const input=$('#orderId');const id=(input?.value||'').trim();if(!id){alert('Please enter Order ID');return}const result=$('#result');const order=(data.orders||[]).find(o=>String(o.id).toLowerCase()===id.toLowerCase());if(!order){if(result){result.style.display='block';setText('#id',id);setText('#status','Order not found');const st=$('#status');if(st)st.style.color=c.theme.gold}return}result.style.display='block';setText('#id',order.id);setText('#status',order.status);const p3=$('#result p:nth-of-type(3)');const p4=$('#result p:nth-of-type(4)');if(p3)p3.innerHTML='<strong>Assigned Team :</strong> '+esc(c.track.assignedTeam);if(p4)p4.innerHTML='<strong>Estimated Completion :</strong> '+esc(c.track.completion)};
  applyTheme();applySite();applyHome();applyAbout();applyContact();applyServices();applyBranches();applyTrack();
})();
