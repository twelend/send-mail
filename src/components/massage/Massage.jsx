import React, { useState } from 'react'
import "./massage.scss"

export const Massage = ({ sendMassage, openModal }) => {
    const [mailTheme, setMailTheme] = useState('')
    const [mailMessage, setMailMessage] = useState('')

    const onChangeTheme = (e) => {
        setMailTheme(e.target.value)
    }
    const onChangeMessage = (e) => {
        setMailMessage(e.target.value)
    }
    return (
        <div className="massage">
            <div className="wrapper">
                <h1>Письмо</h1>
                <hr />
                <form action="/mail">
                    <div className="mail-theme">
                        <label htmlFor="theme">Тема</label>
                        <input type="text" name="theme" id="theme" placeholder='Введите тему...' value={mailTheme} onChange={onChangeTheme}/>
                    </div>
                    <div className="mail-massage">
                        <label htmlFor="massage">Сообщение</label>
                        <textarea name="massage" id="massage" placeholder='Напишите сообщение...' value={mailMessage} onChange={onChangeMessage}></textarea>
                    </div>
                    <div className="btn">
                        <input id='exit' type="submit" value="Отмена" onClick={() => openModal(false)} />
                        <input id='send-form' type="submit" onClick={() => mailTheme.length < 1 || mailMessage.length < 1 ? alert('Заполните все поля ввода!') : sendMassage(true)} />
                    </div>
                </form>
           </div>
        </div>
    )
}