import './style.css'

const user = {
    name: 'Diego Matos',
    photo: null
}

function getInitials(name) {
    const names = name.trim().split(' ')

    const firstInitial = names[0][0]
    const lastInitial = names[names.length - 1][0]

    return firstInitial + lastInitial
}

function createAvatar(user) {
    if (user.photo) {
        return `
            <img
                src="${user.photo}"
                alt="Foto de ${user.name}"
            >
        `
    }

    return getInitials(user.name)
}

document.querySelector('#app').innerHTML = `
    <div class="perfil-card">

        <div class="perfil-image">
            ${createAvatar(user)}
        </div>

        <h1>${user.name}</h1>

        <p class="perfil-role">Desenvolvedor Backend</p>

        <p class="perfil-description">
            Estudante de Sistemas de Informação interessado em desenvolvimento
            backend e tecnologias Java.
        </p>

        <div class="perfil-date"></div>

        <div class="perfil-info">
            <span>Ceará, Brasil</span>
        </div>

        <button>
            <a href="https://www.linkedin.com/in/diegodmatos/" class="perfil-link">
                Ver Perfil
            </a>
        </button>

    </div>
`

const date = document.querySelector('.perfil-date')

function updateDate() {
    const now = new Date()

    date.textContent = now.toLocaleString('pt-BR')
}

updateDate()

setInterval(updateDate, 1000)