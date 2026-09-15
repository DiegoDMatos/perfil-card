import './style.css'

const user = {
    name: 'Diego Matos',
    photo: null
}

document.querySelector('#app').innerHTML = `
  <div class="perfil-card">

    <div class="perfil-image">
      DM
    </div>

    <h1>Diego Matos</h1>

    <p>Desenvolvedor Backend</p>

    <p>
      Estudante de Sistemas de Informação interessado em desenvolvimento
      backend e tecnologias Java.
    </p>

    <div>
      <span>Ceará, Brasil</span>
      <span>Java</span>
    </div>

    <button>
      Ver perfil
    </button>

  </div>
`