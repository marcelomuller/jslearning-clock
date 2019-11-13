function load() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('picture')
    var footmsg= window.document.getElementById('footmsg')
    var date = new Date()
    var time = date.getHours()
    msg.innerHTML = `It is ${time} hours.`

    //var time = 18

    if (time >= 4 && time < 12) {
        // morning
        img.src = 'morningpic.png'
        document.body.style.background = '#ab9e91'
        footmsg.innerHTML = `Credits: @dariaobymaha`

    } else if (time >= 12 && time < 18){
        // afternoon
        img.src = 'afternoonpic.png'
        document.body.style.background = '#66738b'
        footmsg.innerHTML = `Credits: @pixabay`
    } else {
        // night
        img.src = 'nightpic.png'
        document.body.style.background = '#01222e'
        footmsg.innerHTML = `Credits: @ekamelev`
    }
}

