var form = document.getElementById("myForm")

form.addEventListener('submit', function(e){

    e.preventDefault();

    var search = document.getElementById("search").value

//    alert(search)
    var originalName = search.split(' ').join('')

    document.getElementById("result").innerHTML = ""

    fetch("https://api.github.com/users/"+originalName)
    .then((result) => result.json())
    .then((data) => {
        console.log(data)

        document.getElementById("result").innerHTML = `
            <img src="${data.avatar_url})"/> 
            <p>${data.name}</p>
            <p>${data.login}</p>
            <p>Company: ${data.company}</p>
            <p>Localização: ${data.location}</p>
            <p>Stars: ${data.repos_url}</p>
            <p>Repositórios: ${data.public_repos}</p>
            <p>Seguidores: ${data.followers}</p>


        ` 
        var vet = data.repos_url.map()

        document.getElementById("result2").innerHTML = `
            <ul>
            
                <li>${vet[1]}</li>
            </ul>
        ` 
    })

})