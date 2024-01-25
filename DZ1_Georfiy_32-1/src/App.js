import './App.css';
import Component from './components/component/Component';
import Component2 from './components/component2/Component2';
import Button from './components/button/Button';
import Example from './components/Example';
import Header from './components/header/Header';
import User from './components/user/User';

function App() {
  const navbar = ['Главная', 'О нас', 'Контакты'];
  const userContent = 'Данные о пользователе: Имя, Фамилия, Возраст и т.д.';

  return (
    <div>
      <Header navbar={navbar}/>
      <h1>Hello</h1>
      <Component text={'Bakyt'}/>
      <Component2 age={18}/>
      <Button text={'Delete'}/>
      <Button text={'add'}/>
      <Button text={'update'}/>
      <Example>
        <p style={{
          color: "green",
          fontSize: "20px"
        }}>
        </p>
      </Example>
      <User content={userContent} />
      <h2>Hi</h2>
      <Example>
        <p style={{
          color: "red",
          fontSize: "20px"
        }}>
          World
        </p>
      </Example>
    </div>
  );
}

export default App;

