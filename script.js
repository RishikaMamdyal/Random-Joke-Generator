var loader = document.querySelector('.container .loader')
var reaction = document.querySelector('.container .reaction')
var play = document.querySelector('.container .play')
var standUp = document.querySelector('.container .standUp')
var actionButton = document.querySelector('button')
var joke = document.querySelector('#joke')
var setup = document.querySelector('#setup')
var delivery = document.querySelector('#delivery')

actionButton.addEventListener('click',() =>{
    if(reaction.style.display === 'none'){
        play.style.display ='none'
        standUp.style.display = 'none'
    }

    reaction.style.display='none'
    loader.style.display='flex'
    setTimeout(async() => {
        const res = await fetch('https://v2.jokeapi.dev/joke/Any')
        const data = await res.json()
        console.log(data)
        if(data){
            loader.style.display='none'

            let jokeType = data.type

            if(jokeType === 'single'){
                standUp.style.display = 'flex'
                joke.innerText = data.joke
            }
            else if(jokeType === 'twopart'){
                play.style.display = 'flex'
                setup.innerText = data.setup
                delivery.innerText = data.delivery
            }
        }
        
    },2000);
})