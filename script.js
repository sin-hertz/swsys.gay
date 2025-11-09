let cover = document.getElementById("cover")
let song = document.getElementById("song")
let timeout

function fadeAndPlay() {
    cover.animate(
        [
            {
                opacity: 1,

            },
            {
                opacity: 0,

            }
        ], 500
        
    )
    cover.style.opacity = 0;
    setTimeout(function() {
        cover.remove()
        song.volume = 0.03 
        song.play()
    }, 500)

    
}

cover.onclick = function() {fadeAndPlay()}