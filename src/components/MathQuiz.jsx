import React, { useState, useEffect } from 'react';
import Answer from './Answer';

const MathQuiz = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    generateNumbers();
  }, []);

  const generateNumbers = () => {
    setA(Math.floor(Math.random() * 100));
    setB(Math.floor(Math.random() * 100));
  };

  const updatePoints = (userAnswer) => {
    const correctAnswer = a + b;
    if (parseInt(userAnswer) === correctAnswer) {
      setScore(score + 1);
    } else {
      setScore(score - 1);
    }
    generateNumbers();
  };

  return (
    <div className="math-quiz">
      <h1>Math Quiz</h1>
      <p>Решите задачу: {a} + {b} = ?</p>
      <Answer onSubmit={updatePoints} />
      <p>Текущий счёт: {score}</p>
    </div>
  );
};

export default MathQuiz;