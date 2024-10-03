import React, { useState } from 'react';

const Answer = ({ onSubmit }) => {
  const [userAnswer, setUserAnswer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(userAnswer);
    setUserAnswer('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        placeholder="Введите ответ"
        required
      />
      <button type="submit">Отправить</button>
    </form>
  );
};

export default Answer;