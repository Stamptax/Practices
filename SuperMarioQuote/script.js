const generator = () => {
    let phrases = [
        "It's a-me, Mario!",
        "Thank you so much for playing my game!",
        "Wa-hoo!",
        "Oh yeah!",
        "Mario time!",
        "A-wa-wa-wa-wa-wa!",
        "Let's-a go!",
        "Here we go!",
        "Luigi!",
        "Niiiiiintendo! Wahoo!",
        "Let's-a go, little guys!",
        "Don't forget to thank Mr. Miyamoto!",
        "Mamma mia!"
    ]
    let index = Math.floor(Math.random() * phrases.length);
    let selected = phrases[index];
    let p = document.querySelector(".placeholder")
    p.textContent = selected;
}