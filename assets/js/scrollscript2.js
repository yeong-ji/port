(function(){
     

    //Latest &nbsp; work 글자 쪼갬
       const spanElement = document.querySelector('#port2 .publi-title span');
       const spans = spanElement.innerText.split('').map((elem) => `<span>${elem}</span>`).join('');

       spanElement.innerHTML = spans;
   //스킬 흐르는 글씨 생성
       for(let i = 1; i <= 6; i++) {
           const skillBanner = document.querySelector('#skill-banner .skill-banner-cont .skill-banner-text-wrap');
           const skillDiv = document.createElement('div');
         
           skillDiv.innerHTML = `<span aria-hidden="true">HTML</span><span aria-hidden="true">CSS</span><span aria-hidden="true">JAVASCRIPT</span><span aria-hidden="true">JQUERY</span><span aria-hidden="true">PHOTOSHOP</span><span aria-hidden="true">ILLUSTRATOR</span>`;
   
           skillBanner.append(skillDiv);
       }

   //애니메이션, 스크립트 흐르는 글씨 생성
       for(let i = 0; i < 4; i++) {
           const workBanner = document.querySelector('#work-banner .work-banner-cont .work-banner-text-wrap');
           const workDiv = document.createElement('div');
         
           workDiv.innerHTML = `<span aria-hidden="true">ANIMATION</span><span aria-hidden="true">JAVASCRIPT</span><span aria-hidden="true">ANIMATION</span><span aria-hidden="true">JAVASCRIPT</span>`;
   
           workBanner.append(workDiv);
       }
   // 글자 쪼갬
       const port4Ani = document.querySelector('#port4 .ani-title h2 span');
       const port4AniSpan = port4Ani.innerText.split('').map((elem) => `<span>${elem}</span>`).join('');

       port4Ani.innerHTML = port4AniSpan;

       const port4Scr = document.querySelector('#port4 .script-title h2 span');
       const port4ScrSpan = port4Scr.innerText.split('').map((elem) => `<span>${elem}</span>`).join('');

       port4Scr.innerHTML = port4ScrSpan;
   
   //스크롤 등장 gsap
   window.addEventListener("scroll", function(){
       let scroll = window.pageYOffset;

       document.querySelector('.scroll').textContent = parseInt(scroll);

       //$('.scroll').text(scroll);

       // 장단점 등장씬
       if(scroll > $(".about-cont2").offset().top - $(window).height()*0.7){
           gsap.to(".about-cont2 .advan-img1", {duration: 2, scale: 1, rotation:0, opacity:1 ,ease: "expo.out"})
           let about1 = gsap.timeline();
           about1.to(".about-cont2 .advan-text-wrap .advan-t1", {opacity:1, y:0, stagger:0.1, ease: "back.inOut(3)"})
           .set(".about-cont2 .advan-text-wrap h3", {className:"+=show"})
           .to(".about-cont2 .advan-text-wrap>span", {opacity:1, x:0, duration: 0.5},"-=1")
           .to(".about-cont2 .advan-text-wrap div", {opacity:1, x:0, duration:1})
           .to(".about-cont2 .advan-text-wrap div.advan-btn", {y:0, duration:1, ease: "back.out(1.1)"},"-=1");
       }

       if(scroll > $(".about-cont3").offset().top - $(window).height()*0.7){
           gsap.to(".about-cont3 .advan-img1", {duration: 2, scale: 1, rotation:0, opacity:1 ,ease: "expo.out"})
           let about2 = gsap.timeline();
           about2.to(".about-cont3 .advan-text-wrap .advan-t2", {opacity:1, y:0, stagger:0.1, ease: "back.inOut(3)"})
           .set(".about-cont3 .advan-text-wrap h3", {className:"+=show"})
           .to(".about-cont3 .advan-text-wrap>span", {opacity:1, x:0, duration: 0.5},"-=1")
           .to(".about-cont3 .advan-text-wrap div", {opacity:1, x:0, duration:1})
           .to(".about-cont3 .advan-text-wrap div.advan-btn", {y:0, duration:1, ease: "back.out(1.1)"},"-=1");
       }

       if(scroll > $(".about-cont4").offset().top - $(window).height()*0.7){
           gsap.to(".about-cont4 .profile-img", {duration: 2, scale: 1, rotation:0, opacity:1 ,ease: "expo.out"})
           let about3 = gsap.timeline();
           about3.to(".about-cont4 .profile-text-wrap h3 span", {opacity:1, y:0, stagger:0.1, ease: "back.inOut(1)"})
           .set(".about-cont4 .profile-text-wrap h3", {className:"+=show"})
           .to(".about-cont4 .profile-text-wrap>span", {opacity:1, x:0, duration: 0.5},"-=1")
           .to(".about-cont4 .profile-text>ul>li", {x:0, opacity:1, duration: 1})
           .to(".about-cont4 .profile-text li em", {x:0, opacity:1, duration:1},"-=1")
           .to("#about .about-cont4 .profile-btn", {scale:1, opacity:1, duration:1, ease: "back.out(1.7)"})
       }

      
       //스킬 돌기
       if(scroll > $("#skills").offset().top - $(window).height()/2){
           gsap.to("#skills .skills-cont h2", {duration: 1, opacity: 1, scale:1, ease: "back.out(1.7)"})
       }

       let rotate = (scroll - $("#skills .skills-cont").offset().top + ($(window).height() / 2) ) * 0.4;
       
       $("#skills .skills-cont .skills-img img").css("transform","rotate("+rotate+"deg)");
     
       if( rotate > -60 && rotate < 50 ) {
           $("#skills .skills-cont ul li").eq(0).find(".skill-box").addClass("show");
           $("#skills .skills-cont ul li").eq(2).find(".skill-box").removeClass("show");
           $("#skills .skills-cont ul li").eq(4).find(".skill-box").removeClass("show");
       }else if( rotate > 50 && rotate < 90 ) {
           $("#skills .skills-cont ul li").eq(2).find(".skill-box").addClass("show");
           $("#skills .skills-cont ul li").eq(0).find(".skill-box").removeClass("show");
           $("#skills .skills-cont ul li").eq(4).find(".skill-box").removeClass("show");
       }else if(rotate > 90 && rotate < 132) {
           $("#skills .skills-cont ul li").eq(4).find(".skill-box").addClass("show");
           $("#skills .skills-cont ul li").eq(2).find(".skill-box").removeClass("show");
           $("#skills .skills-cont ul li").eq(5).find(".skill-box").removeClass("show");
       }else if(rotate > 132 && rotate < 230) {
           $("#skills .skills-cont ul li").eq(5).find(".skill-box").addClass("show");
           $("#skills .skills-cont ul li").eq(4).find(".skill-box").removeClass("show");
           $("#skills .skills-cont ul li").eq(3).find(".skill-box").removeClass("show");
       } else if(rotate > 230 && rotate < 272) {
           $("#skills .skills-cont ul li").eq(3).find(".skill-box").addClass("show");
           $("#skills .skills-cont ul li").eq(5).find(".skill-box").removeClass("show");
           $("#skills .skills-cont ul li").eq(1).find(".skill-box").removeClass("show");
       } else if(rotate > 272 && rotate < 311) {
           $("#skills .skills-cont ul li").eq(1).find(".skill-box").addClass("show");
           $("#skills .skills-cont ul li").eq(3).find(".skill-box").removeClass("show");
       } else {
           $("#skills .skills-cont ul li").eq(1).find(".skill-box").removeClass("show");
           $("#skills .skills-cont ul li").eq(0).find(".skill-box").removeClass("show");
       }

       //포트폴리오 글씨 커지게
       if(scroll > $('#port1').offset().top && scroll < 7000 ){
          $('#port1').addClass('fixed');
       }
       if(scroll > $('#port2').offset().top + $(window).height()/2 && scroll < $('#port2 .publi-box:last-child').offset().top + $(window).height()*2 ) {
           $('#contents').addClass('black');
       }else {
           $('#contents').removeClass('black');
       }
       
       
       let scale = (scroll - $("#skills").offset().top - $(window).height()) * 0.04
       if(scale >= 1 && scale <= 100 ) {
           $("#port1 .port-title .port-title-wrap h2").css("transform","scale("+scale+") translateX(-4%)");
       } else if(scale > 100) {
           $("#port1 .port-title .port-title-wrap h2").css("transform","scale(100) translateX(-4%)");
       } else {
           $("#port1 .port-title .port-title-wrap h2").css("transform","scale(1)");
       }

       if(scroll > 7001){
           $('#port1').removeClass('fixed');
       }
       if(scroll < $('#skills').offset().top + $(window).height()) {
           $('#port1').removeClass('fixed');
       }

       if(scroll > $('#port2').offset().top + $(window).height()/2) {
           $('#port2').removeClass('yellow');
       }else{
           $('#port2').addClass('yellow');
       }

       
       //포트폴리오 

       if(scroll > $('#port2 .publi-title').offset().top - $(window).height()*0.8){
           let publi1 = gsap.timeline();
           publi1.to("#port2 .publi-title>span span", {opacity:1, rotation:0, y:0, stagger:0.1, ease: "power4.out"})
           .set("#port2 .publi-title>span", {className:"+=show"})
       }

       for(let i = 0; i < $('.publi-box').length; i++) {
           if(scroll > $('.publi-box').eq(i).offset().top - $(window).height()*0.7) {
               let portNum = i+2;
               let port2Box1 = gsap.timeline();
               port2Box1.to("#port2 .publi-box:nth-child("+portNum+") .publi-text-wrap h3 span", {opacity:1, y:0, stagger:0.1, ease: "back.inOut(1)"})
                        .to("#port2 .publi-box:nth-child("+portNum+") .publi-text-wrap>span", {opacity:1, x:0, duration:1, ease: "expo.out"})
                        .to("#port2 .publi-box:nth-child("+portNum+") .publi-text-wrap .publi-text", {opacity:1, x:0, duration:1, ease: "expo.out"},"-=1")
                        .to("#port2 .publi-wrap .publi-box:nth-child("+portNum+") .publi-btn", {y:0, opacity:1, duration:0.5, ease: "back.out(1.1)"})
          }
       }


      function viewed(number){
           if(scroll > $('.publi-box').eq(number).offset().top - $(window).height()*1.3){
               $('.publi-box').eq(number).children('.publi-img').addClass('viewed');
           } 
      }
      viewed(0);
      viewed(1);
      viewed(2);
      viewed(3);
      viewed(4);

      

      //애니메이션 글씨 작아지게

       if(scroll > $('#port2 .publi-box:last-child').offset().top + $(window).height() &&  scroll < $("#port4").offset().top - 1){
           $('#port3').addClass('fixed');
       }
   
       if(scroll < $('#port2 .publi-box:last-child').offset().top + $(window).height() + 1 ){
           $('#port3').removeClass('fixed');
       }
       
       
       let scale2 = -((scroll - $("#port4").offset().top + $(window).height()) * 0.05)
       if(scale2 >= 1) {
           $("#port3 .port3-title-wrap h2").css("transform","scale("+scale2+") translateX(-3%)");
       } else if(scale2 < 0) {
           $("#port3 .port3-title-wrap h2").css("transform","scale(1)");
       }

       if(scroll > $('#port4').offset().top - $(window).height()) {
           $('#port3').removeClass('fixed');
       }

       let port4 = ['ani', 'script'];
       for(let i = 0; i < port4.length; i++){
           //console.log(port4[i])
           if(scroll > $('#port4 .'+port4[i]+'-wrap').offset().top - $(window).height()*0.7){
               let port4Ani = gsap.timeline();
               port4Ani.to("#port4 ."+port4[i]+"-title h2 span span", {y:0, opacity:1, stagger:0.1, ease: "back.inOut(1)"})
                       .set("#port4 ."+port4[i]+"-title h2>span", {className:"+=show"})
                       .set("#port4 ."+port4[i]+"-title h2", {className:"+=show"});
   
               $("#port4 ."+port4[i]+"-cont:nth-child(2), #port4 ."+port4[i]+"-cont:nth-child(3)").addClass('show');
           }
   
           if(scroll > $('#port4 .'+port4[i]+'-wrap').offset().top + $(window).height()/10){
               $("#port4 ."+port4[i]+"-cont:nth-child(4), #port4 ."+port4[i]+"-cont:nth-child(5)").addClass('show');
           }
   
           
       }

       let translate1 = -((scroll - $(".ani-wrap").offset().top) * 0.05)
        //console.log("translate1: "+translate1)
        if(translate1<=0) {
            $("#port4 .ani-cont:nth-child(2n) .ani-img").css("transform", "translateY("+translate1*2+"px)");
            $("#port4 .ani-cont:nth-child(2n+1) .ani-img").css("transform", "translateY("+translate1+"px)");
            $("#port4 .ani-cont:nth-child(2n) .ani-text").css("transform", "translateY("+translate1*2+"px)");
            $("#port4 .ani-cont:nth-child(2n+1) .ani-text").css("transform", "translateY("+translate1+"px)");
        }

        let translate2 = -((scroll - $(".script-wrap").offset().top) * 0.05)
        //console.log("translate2: "+translate2)
        if(translate2<=0) {
        $("#port4 .script-cont:nth-child(2n) .script-img").css("transform", "translateY("+translate2+"px)");
        $("#port4 .script-cont:nth-child(2n+1) .script-img").css("transform", "translateY("+translate2*2+"px)");
        $("#port4 .script-cont:nth-child(2n) .script-text").css("transform", "translateY("+translate2+"px)");
        $("#port4 .script-cont:nth-child(2n+1) .script-text").css("transform", "translateY("+translate2*2+"px)");
        
        }

      
   });
}())