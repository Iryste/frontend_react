import React from 'react';

const Login = () => {
    return (
<form className={'mainContainer'}>
    <div className={'titleContainer'}>
        <p>Connexion</p>
    </div>
    <br />
    <div className={'inputContainer'}>
        <input  type="text" placeholder="Saisir votre adresse mail" className={'inputBox'} autoComplete="username" />
        <label className="errorLabel"></label>
    </div>
    <br />
    <div className={'inputContainer'}>
        <input type="password" placeholder="Saisir votre mot de passe" className={'inputBox'} autoComplete="current-password" />
        <label className="errorLabel"></label>
    </div>
    <br />
    <div className={'inputContainer'}>
        <input className={'inputButton'} type="button" value={'Se connecter'} />
    </div>
    </form>
    );
};

export default Login;