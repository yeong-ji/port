(function(){
    //로딩이후 실행
    function loading(){
        const progress = $(".progress"),
            progressText = progress.find(".progress-text");

        let imgLoad = imagesLoaded("body"),
            imgTotal = imgLoad.images.length,
            imgLoaded = 0,
            imgCurrent = 0,
            progressTimer = setInterval(updateProgress, 500/60);

        imgLoad.on("progress",function(){
            imgLoaded++;
        })

        function updateProgress(){
            let target = (imgLoaded / imgTotal) * 100;

            imgCurrent += (target - imgCurrent) * 0.1;
            progressText.text(Math.floor(imgCurrent) + "%");

            if(imgCurrent >= 100) {
                clearInterval(progressTimer)
                progress.delay(1000).fadeOut(1000)
                setTimeout(function(){
                    //2초후 등장 애니메이션
                    let tl = gsap.timeline();
                    tl.fromTo(".main-img", {scale: 0}, {opacity: 1, scale: 1, duration:1.5, ease: "elastic.out(1.35, 0.75)"})
                    .fromTo(".main-cont h1", {y:-80}, {opacity:1, y:0, duration:1, ease: "back.out(3)"},"-=0.5")
                    .fromTo(".main-t1",{y:10}, {opacity:1, y:0, stagger:0.1})
                    .fromTo(".main-t2",{y:10}, {opacity:1, y:0, stagger:0.1},"-=2.1")
                    .set("#main .main-cont p", {className:"+=show"})
                    .fromTo("#header .logo a", {scale: 0}, {opacity:1, scale: 1, duration:1, ease: "back.out(2)"})
                    .fromTo("#header .sign li", {scale: 0}, {opacity:1, scale: 1, stagger:0.3, ease: "back.out(2)"})
                    .to("#header .menu-line", {x:0, duration:1},"-=1.9");
            
                    // 마우스 방향에 따른 이미지
                    let x = 0,
                        y = 0,
                        mouseX = 0,
                        mouseY = 0,
                        angleX = 0,
                        angleY = 0,
                        fmouseX = 0,
                        fmouseY = 0;
                    
                    const mainImg = document.querySelector('.main-img');
            
                    function handleMove(event) {
                        x = event.pageX;
                        y = event.pageY;
                        //console.log(x, y)
                        //mouseX = window.innerWidth / 2 - x; //마우스 x좌표값 가운데
            
                    // 마우스 위치 최대 50 , 최소 -50
                    mouseX = Math.max(-50, Math.min(50, window.innerWidth / 2 - x ));
                    mouseY = Math.max(-50, Math.min(50, window.innerHeight / 2 - y));
            
                    angleX = (12 * mouseX) / 100; // 계산
                    angleY = (12 * mouseY) / 100;
            
                    fmouseX += (angleX - fmouseX) * 0.1 // = 1 / 10
                    fmouseY += (angleY - fmouseY) * 0.1 // = 1 / 10
                    
                    mainImg.style.transform = `translate(-50%, -50%) perspective(600px) rotateX(${fmouseY}deg) rotateY(${-fmouseX}deg)`// 요소 3D 효과
                    document.querySelector('.main-text-wrap').style.transform = `perspective(1200px) rotateX(${fmouseY}deg) rotateY(${-fmouseX}deg)`
                    }
            
                    window.addEventListener("mousemove", handleMove);
                },2200);
            }
            if(imgCurrent > 99) {
                imgCurrent = 100;
            } 
        }
    }
    loading ();

  
    const cursor = document.querySelector(".cursor");

    // 마우스 움직임 효과
    document.addEventListener("mousemove", e => {
        cursor.style.top = `${e.pageY}px`;
        cursor.style.left = `${e.pageX}px`;
    });
   
      //마우스 오버 효과
    document.querySelectorAll(".mouse").forEach(elem => {
        elem.addEventListener("mouseenter", () => {
            cursor.classList.add("cursor_over");
            document.querySelector("body").classList.add("cursor_over");
        });
        elem.addEventListener("mouseleave", () => {
            cursor.classList.remove("cursor_over");
            document.querySelector("body").classList.remove("cursor_over");
        });
    });


    //메뉴클릭 이벤트
    document.querySelector('#header .menu .hamburger').addEventListener('click', function(){
        document.querySelector('#header .menu').classList.add('close');
        document.querySelector('#header .menu .nav').classList.add('active');
        document.querySelector('#header .menu .nav').classList.remove('not_active');
    });

    //메뉴 애니메이션
    let navLi = document.querySelectorAll('#header .menu .nav ul li')
    navLi[0].firstChild.addEventListener('click',function(){
        setTimeout(function(){
            document.querySelector('#header .menu').classList.remove('close');
        },2200)
            document.querySelector('#header .menu .nav').classList.remove('active');
            document.querySelector('#header .menu .nav').classList.add('not_active');
    })
    navLi[1].firstChild.addEventListener('click',function(e){
        setTimeout(function(){
            document.querySelector('#header .menu').classList.remove('close');
        },2200)
            document.querySelector('#header .menu .nav').classList.remove('active');
            document.querySelector('#header .menu .nav').classList.add('not_active');
    })
    navLi[2].firstChild.addEventListener('click',function(e){
        document.querySelector('#port2').classList.remove('yellow');
        setTimeout(function(){
            document.querySelector('#header .menu').classList.remove('close');
        },2200)
            document.querySelector('#header .menu .nav').classList.remove('active');
            document.querySelector('#header .menu .nav').classList.add('not_active');
    })
    navLi[3].firstChild.addEventListener('click',function(e){
        setTimeout(function(){
            document.querySelector('#header .menu').classList.remove('close');
        },2200)
            document.querySelector('#header .menu .nav').classList.remove('active');
            document.querySelector('#header .menu .nav').classList.add('not_active');
    })

    document.querySelector('#header .menu .hamburger-close').addEventListener('click', function(){
        setTimeout(function(){
            document.querySelector('#header .menu').classList.remove('close');
        },2200)
        document.querySelector('#header .menu .nav').classList.remove('active');
        document.querySelector('#header .menu .nav').classList.add('not_active');
    });

    // 흐르는 글씨

    let speed = 0
    let speed2 = 0
    let speed3 = 0
    let speed4 = 0

    let acc = 0
    let hover = false
    let width
    let width2
    let width3
    let width4

    let times
    let times2
    let times3
    let times4

    let cloned = []
    let cloned2 = []
    let cloned3 = []
    let cloned4 = []

    const item = document.querySelector('.about-text-wrap div:nth-child(2)')
    const word = item.querySelector('span')
    const item2 = document.querySelector('.about-text-wrap div:nth-child(1)')
    const word2 = item2.querySelector('span')
    const item3 = document.querySelector('.contact-text-wrap div:nth-child(2)')
    const word3 = item3.querySelector('span')
    const item4 = document.querySelector('.contact-text-wrap div:nth-child(1)')
    const word4 = item4.querySelector('span')
    

    /* 계산 */
    const calculate = () => {
    // console.log('cloned', cloned)
    cloned.forEach(i => {
        i.parentNode.removeChild(i)
    })
    cloned2.forEach(i => {
        i.parentNode.removeChild(i)
    })
    cloned3.forEach(i => {
        i.parentNode.removeChild(i)
    })
    cloned4.forEach(i => {
        i.parentNode.removeChild(i)
    })
    
    //forEach 배열에 담겨있는 데이터를 각각 한번씩 함수실행  (화면크기에 따라 늘어나는 span 삭제)
    cloned = []
    cloned2 = []
    cloned3 = []
    cloned4 = []
    
    width = Math.ceil(word.clientWidth)  //ceil 올림 , clientWidth테두리를 뺀 엘리먼트의 안쪽 폭
    times = Math.ceil(window.innerWidth / width) // span 추가할 갯수

    width2 = Math.ceil(word2.clientWidth)
    times2 = Math.ceil(window.innerWidth / width2)

    width3 = Math.ceil(word3.clientWidth)
    times3 = Math.ceil(window.innerWidth / width3)

    width4 = Math.ceil(word4.clientWidth)
    times4 = Math.ceil(window.innerWidth / width4)
    
   // item.style.width = `${(times + 1) * width}px`

    for (let i = 0; i < times + 1; i++) {
        const clone = word.cloneNode(true)
        word.parentNode.appendChild(clone)
        cloned.unshift(clone)
    }

    for (let i = 0; i < times2 + 1; i++) {
        const clone2 = word2.cloneNode(true)
        word2.parentNode.appendChild(clone2)
        cloned2.push(clone2)
    }

    for (let i = 0; i < times3 + 1; i++) {
        const clone3 = word3.cloneNode(true)
        word3.parentNode.appendChild(clone3)
        cloned3.push(clone3)
    }

    for (let i = 0; i < times4 + 1; i++) {
        const clone4 = word4.cloneNode(true)
        word4.parentNode.appendChild(clone4)
        cloned4.push(clone4)
    }

    }
    

    /* Listeners 마우스 오버 효과 */
    const handleMouse = bool => hover = bool
    function itemEvent(item){
        item.addEventListener('mouseenter', () => {handleMouse(true)})
        //item.addEventListener('touchstart', () => {handleMouse(true)})
        item.addEventListener('mouseleave', () => {handleMouse(false)})
        item.addEventListener('touchend', () => {handleMouse(false)})
    }
    window.addEventListener('resize', calculate)
    window.addEventListener('load', calculate)
    itemEvent(item);
    itemEvent(item2);
    itemEvent(item3);
    itemEvent(item4);
   

    /* 애니메이션 */
    const animate = () => {
    // 가속도
    acc += 0.1
    if (hover) {
        acc -= 0.35
    }
    
    // 최소/최대 가속도
    acc = Math.min(2, Math.max(0, acc)) 
    
    // 속도변수에 가속도 추가
    speed += acc
    speed2 += acc
    speed3 += acc
    speed4 += acc
    
    // Text Loop
    if (speed >= width) {
        speed = 0
    }
    if (speed2 >= width2) {
        speed2 = 0
    }
    if (speed3 >= width3) {
        speed3 = 0
    }
    if (speed4 >= width4) {
        speed4 = 0
    }
    // CSS Text
    item.style.transform = `translateX(${speed - 7252}px)`    //6620
    item2.style.transform = `translateX(${-speed2}px)`

    
    item3.style.transform = `translateX(${speed3 - 4788}px)`    //6620
    item4.style.transform = `translateX(${-speed4}px)`
    
    
    // 애니메이션이 부드럽게 나오도록 작업  [ 변화된 화면을 그릴 준비가 되었을 때 실행 ]
    requestAnimationFrame(animate)
    }
    animate();


    //이미지 변경

    const aboutImg1 = document.querySelector('.about-cont2 .advan-img1 img');
    const aboutImg2 = document.querySelector('.about-cont3 .advan-img1 img')
   
   
    function advanImg(aboutImg, num) {
        let image = 1;
    setInterval(function(){
        image++;
        if(image>4) {image=1;}
        aboutImg.src = `assets/img/about-img${num}-${image}.png`
    },500)

    }

    advanImg(aboutImg1, 1);
    advanImg(aboutImg2, 2);

    const profileImg = document.querySelector('.profile-img img');
    
    let profileImage = 1;
    setInterval(function(){
        profileImage++;
        if(profileImage>4) {profileImage=1;}
        profileImg.src = `assets/img/profile-img${profileImage}.png`
    },500);

}())