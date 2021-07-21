var div = document.createElement('div')
div.setAttribute("class", "container")
div.style.marginLeft = "10px"
div.style.margin = "0px"
div.style.paddingTop = "280px"
document.body.appendChild(div)

var myinput = document.createElement('input')
myinput.setAttribute("id", "myinput")
myinput.setAttribute("placeholder", "Type Pokemon Names")
myinput.style.textAlign = "center"
myinput.style.width = "310px"
myinput.style.marginTop = "50px"
myinput.style.height = "30px"
myinput.style.marginLeft = "210px"
div.appendChild(myinput)

var Button = document.createElement('button')
Button.setAttribute("onclick", "search()")
Button.style.width = "100px"
Button.style.height = "35px"
Button.innerHTML = "Search"
Button.style.margin = "5px"
div.appendChild(Button)

var Button = document.createElement('button')
Button.setAttribute("onclick", "refresh()")
Button.innerHTML = "Refresh"
Button.style.width = "100px"
Button.style.height = "35px"
Button.style.margin = "0px"
div.appendChild(Button)


var div1 = document.createElement('div')
div1.setAttribute("id", "disp1")
document.body.appendChild(div1)

var div2 = document.createElement('div')
div2.setAttribute("id", "disp")
document.body.appendChild(div2)

function refresh() {
    location.reload()  // to refresh the page
}


//on load display

hi()
function hi() {
    for (let i = 1; i <= 50; i++) {
        hi1(i);
    }
}

async function hi1(i) {
    try {
        var url = "https://pokeapi.co/api/v2/pokemon/" + i + "/"
        var api = await fetch(url)
        var resp = await api.json()
        console.log(resp);

        var container = document.createElement("div")
        container.setAttribute("class", "container")
        container.setAttribute("id", "d1")
        document.getElementById("disp1").append(container)


        var img = document.createElement("img")
        img.src = resp.sprites.front_default
        img.style.width = "150px"
        img.style.height = "250px"
        document.getElementById("d1").append(img)

        var div1 = document.createElement("div")
        div1.innerHTML = "Name : " + resp.name
        document.getElementById("d1").append(div1)

        var len = resp.abilities.length

        for (let i = 0; i < len; i++) {

            const element = resp.abilities[i]

            var div2 = document.createElement("div")
            div2.innerHTML = " * Abilities : " + element.ability.name
            document.getElementById("d1").append(div2)

        }

        for (let i = 0; i < 2; i++) {
            var div3 = document.createElement("div")
            div3.innerHTML = " * Moves : " + resp.moves[i].move.name
            document.getElementById("d1").append(div3)
        }

        var div4 = document.createElement("div")
        div4.innerHTML = "Weight : " + resp.weight + " Kg"
        document.getElementById("d1").append(div4)
    } catch (error) {
        console.error();
    }
    return false;
}

// on search button
function search() {

    document.getElementById("disp1").innerHTML = ""
    document.getElementById("disp").innerHTML = ""

    var val = document.getElementById("myinput").value
    if (val == "" || null) {
        alert("input box empty")
    }
    else {
        viewinfo(val)
    }
}

async function viewinfo(val) {

    try {
        var api = await fetch("https://pokeapi.co/api/v2/pokemon/" + val)
        var resp = await api.json()
        console.log(resp);

        var img = document.createElement("img")
        img.src = resp.sprites.front_default
        document.getElementById("disp").append(img)

        var div1 = document.createElement("div")
        div1.innerHTML = "Name : " + resp.name
        document.getElementById("disp").append(div1)

        var len = resp.abilities.length

        for (let i = 0; i < len; i++) {

            const element = resp.abilities[i]
            var div2 = document.createElement("div")
            div2.innerHTML = " * Abilities : " + element.ability.name
            document.getElementById("disp").append(div2)

        }

        for (let i = 0; i < 2; i++) {
            var div3 = document.createElement("div")
            div3.innerHTML = " * Moves : " + resp.moves[i].move.name
            document.getElementById("disp").append(div3)
        }

        var div4 = document.createElement("div")
        div4.innerHTML = "Weight : " + resp.weight + " Kg"
        document.getElementById("disp").append(div4)

    }

    catch (error) {
        console.error();
    }
}
