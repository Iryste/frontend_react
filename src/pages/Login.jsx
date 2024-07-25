import React from 'react';
import { useState, useEffect } from 'react';

const Login = () => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [usernameError, setUsernameError] = useState();
    const [passwordError, setPasswordError] = useState();

    const onButtonClick = () => {
        if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(username)) {
            setUsernameError('Veuillez saisir une adresse mail valide, ex:john.doeuf@monsite.fr');
            return;
        }
        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$.!%*?&])[A-Za-z\d@$!%*.?&]{9,}$/.test(password)) {
            setPasswordError('Veuillez saisir un mot de passe valide');
            return;
        }
        // loginCheck()
    }

    return (
<form className={'mainContainer'}>
    <div className={'titleContainer'}>
        <p>Connexion</p>
    </div>
    <br />
    <div className={'inputContainer'}>
        <input  type="text" placeholder="Saisir votre adresse mail" className={'inputBox'} autoComplete="username" onChange={(e) => setUsername(e.target.value)} />
        <label className="errorLabel">{usernameError}</label>
    </div>
    <br />
    <div className={'inputContainer'}>
        <input type="password" placeholder="Saisir votre mot de passe" className={'inputBox'} autoComplete="current-password" onChange={(e) => setPassword(e.target.value)} />
        <label className="errorLabel">{passwordError}</label>
    </div>
    <br />
    <div className={'inputContainer'}>
        <input className={'inputButton'} onClick={onButtonClick} type="button" value={'Se connecter'} />
    </div>
    </form>
    );
};

export default Login;