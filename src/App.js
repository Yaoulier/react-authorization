const App = () => {
  return (
    <div className="loginUser">
      <form>
        <h1 className="textLogin">Вход в систему</h1>
        <div className="loginText">Логин</div>
        <input className="login" name="login" type="text" placeholder="Введите логин"/>
        <div className="passwordText">Пароль</div>
        <input className="password" name="password" type="password" placeholder="Введите пароль"/>
        
        <input type="checkbox" className="checkForget"></input>
        <div className="dontForget">Запомнить меня на этом компьютере</div>
        
        <button className="loginButton" name="loginButton" type="submit">Войти</button>

        <div className = "infoAllIslam"><span className="mainAllIslam">AllIslam</span> - Lorem ipsum dolor sit amet consectetur. Habitasse cras mauris volutpat odio ut parturient. Lacus commodo nunc in sapien morbi sed mauris. In at morbi commodo integer et id vitae auctor ultrices.</div>
        <img className = "main" src = "/img/main.svg" alt = "mac"/>
        <img className = "shadow" src = "/img/shadow.svg" alt = "shadow"/>
        <img className = "tasksPage" src = "/img/Macbook-Pro-Tilted-Screen-Mockup-label.svg" alt = "tasks"/>
      </form>
    </div>
  );
};

export default App;