import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="profile-card">

    <img 
      src="./src/assets/hero.png" 
      alt="Foto de perfil"
    >

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