// App.jsx
import { useState } from "react";
import "./App.css";

function MoodToggle() {
  const [mood, setMood] = useState("ふつう");
  const [count, setCount] = useState(0);

  const moods = ["ふつう", "ちょいしんどい", "まあまあイケてる", "最強モード"];

  const handleClick = () => {
    setCount(prev => prev + 1);

    setMood(prevMood => {
      const currentIndex = moods.indexOf(prevMood);
      const nextIndex = (currentIndex + 1) % moods.length;
      return moods[nextIndex];
    });
  };

  return (
    <div className="mood-card">
      <p className="mood-title">今日の気分トグル</p>
      <p className="mood-text">今の気分：{mood}</p>
      <p className="mood-count">ボタンを押した回数：{count} 回</p>
      <button className="mood-button" onClick={handleClick}>
        気分を切り替える
      </button>
    </div>
  );
}

export default function App() {
  return (
    <div className="app-root">
      <h1 className="app-title">Mini React Component</h1>
      <MoodToggle />
    </div>
  );
}
