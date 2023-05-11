import React from 'react';

export const Success = ({ count }) => {
  return (
    <div className='main margin__success'>
      <div class="success-block">
        <img src="/assets/success.svg" alt="Success" />
        <h3>Успешно!</h3>
        <p>Всем {count} пользователям отправлено приглашение.</p>
        <button onClick={() => window.location.reload()} className="send-invite-btn">Назад</button>
      </div>
    </div>
  );
};
