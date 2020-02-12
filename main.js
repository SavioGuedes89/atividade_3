var input = document.querySelector('input');
var butao = document.querySelector('button');
var br = document.createElement('br');
function buscar(){
    axios.get('https://api.github.com/users/'+input.value)
    .then(function(response){
      var imagem = document.createElement('img');
      imagem.setAttribute('src', response.data.avatar_url);
      var pagina = document.querySelector('div');
      pagina.appendChild(imagem);
      pagina.appendChild(br);

      var h1 = document.createElement('h1');
      var text = document.createTextNode(response.data.name);
      h1.appendChild(text);
      pagina.appendChild(h1);
      pagina.appendChild(br);
      

    })
    .catch(function(error){
        var h3 = document.createElement('h3');
        var text = document.createTextNode('Usuario Não Incontrado');
        h3.appendChild(text);
        var pagina = document.querySelector('div');
        pagina.appendChild(h3);
    })
   
}

function buscarRepo(users){
    axios.get('https://api.github.com/users/'+users+'/repos')
    .then(function(test){
        test.array.forEach(e => {
            console.log(e.data.name)
        });
    })
    .catch(function(error){
      console.log(error)
    })
}

butao.onclick= buscar;