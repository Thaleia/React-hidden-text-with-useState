import './App.css';
import HiddenText from './HiddenText';
import Test from './Test';

function App() {
  return (
    <div className="App">
      <h1>Hidden Text</h1>
      <HiddenText text={'Consistency is the key to my success! Hope you enjoy using my projects and discovering them on Github! Please reach out to me to find out more about how to put my skills work for your company!'} maxLength={36} />
      <br />
      <br />
      <Test text1={'A Full Stack Developer who\'s passionate developing new projects daily! I love learning and improving my skills, which combined with my existing experience, makes me a valuable team member!'} maxLength1={36} />
      </div>
  );
}

export default App;
