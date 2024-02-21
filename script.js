let acesso = "diretor"
acesso = acesso.toLowerCase()
switch (acesso) {
    case 1:
        console.log(`O usuário tem permissão comum`)
        break;
    case 2:
        console.log(`O usuário tem permissão gerente`)
        break;
    case 3:
        console.log(`O usuário tem permissão diretor`)
        break;
        default:
            console.log(`O usuário não tem permissão`)
}



