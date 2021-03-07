export class SistemaAutenticacao {
    static login(autenticavel, senha){
        if (autenticavel.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha);
        }

        return false;        
    }

    static ehAutenticavel(autenticavel){
        return "autenticar" in autenticavel && 
            autenticavel.autenticar instanceof Function;
    }
}