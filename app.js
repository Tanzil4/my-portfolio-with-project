let projuct = [
    {
        code : 'https://github.com/Tanzil4/shopping-card',
        link : 'https://tanzil4.github.io/shopping-card/',
        name: 'Shopping card'
    },
    {
        code : 'https://github.com/Tanzil4/login-notes',
        link : 'https://tanzil4.github.io/login-notes/',
        name: 'login notes'
    },
    {
        code : 'https://github.com/Tanzil4/my-poetry-original-app',
        link : 'https://tanzil4.github.io/my-poetry-original-app/',
        name: 'poetry app'
    },
    {
        code : 'https://github.com/Tanzil4/Text-editor-original-',
        link : 'https://tanzil4.github.io/Text-editor-original-/',
        name: 'text editor'
    },
    {
        code : 'https://github.com/Tanzil4/ECOMMERCE-SHOPING-WEBSITE-COMPLETE-',
        link : 'https://tanzil4.github.io/ECOMMERCE-SHOPING-WEBSITE-COMPLETE-/',
        name: 'SHOPING WEBSITE'
    },
    {
        code : 'https://github.com/Tanzil4/ATTENDANCE-SHIT',
        link : 'https://attendaceshit.surge.sh',
        name: 'Attendance Shit'
    },
    {
        code : 'https://github.com/Tanzil4/stop_watch',
        link : 'https://stopwatch.tanzil.surge.sh',
        name: 'Stop watch'
    },
    {
        code : 'https://github.com/Tanzil4/digital_clock',
        link : 'https://quiet-biscuit-5d1927.netlify.app',
        name : 'Digital clock'
    },
    {
        code : 'https://github.com/Tanzil4/age-calculator',
        link : 'https://animated-toffee-7f7bc1.netlify.app',
        name : 'Age calculator'
    },
    {
        code : 'https://github.com/Tanzil4/Digital-Clock',
        link : 'https://resilient-llama-10295a.netlify.app',
        name : 'Digital clock'
    },
    {
        code : 'https://github.com/Tanzil4/namaz-timing',
        link : 'https://tanzil4.github.io/namaz-timing/',
        name : 'Namaz timing API'
    },
    {
        code : 'https://github.com/Tanzil4/rock-paper-secissor-building-game',
        link : 'https://remarkable-raindrop-7a341e.netlify.app',
        name : 'Rock, Paper, Secissor'
    },
   
   
]
let serv = document.getElementById('ser')

projuct.forEach(function (d,i) {
    


    let div = `
     <div class="services-box">
         <a href=${d.code}> <i class='bx bx-code-alt'></i> </a>
        <h3>${d.name.toUpperCase()}</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia sint
          explicabo illum autem iusto ipsa quos blanditiis ullam maiores neque!</p>
        <a href=${d.link} class="btn">Hosting Link</a>
      </div>`

      serv.innerHTML += div
})

let myinp = document.getElementById('inp')
function btn() {
    serv.innerHTML = ''
    let fil = projuct.filter( (d) => d.name.toUpperCase().includes(myinp.value.toUpperCase()) )
        
    fil.forEach(function (d,i) {
    


        let div = `
         <div class="services-box">
             <a href=${d.code}> <i class='bx bx-code-alt'></i> </a>
            <h3>${d.name.toUpperCase()}</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia sint
              explicabo illum autem iusto ipsa quos blanditiis ullam maiores neque!</p>
            <a href=${d.link} class="btn">Hosting Link</a>
          </div>`
    
          serv.innerHTML += div
    })

}






console.log('hajsf');
var typed = new Typed(".auto-type",{
    strings : ["programmer", "Designer", ],
    typeSpeed : 150,
    backSpeed : 150,
    loop : true
});  

