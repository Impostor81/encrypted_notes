import { useState } from 'react';
import env from '../env.json';

export default function Create() {
  const [url, setUrl] = useState('');
  const [lineClass, setLineClass] = useState('hide');
  const [formClass, setFormClass] = useState('');
  const [warningClass, setWarningClass] = useState('hide');

  const sendData = (obj) => {
    setFormClass('hide');
    setLineClass('');
    fetch(env.urlBackend, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(obj)
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        if (response.result) {
          setUrl(env.url + '/' + response.url);
        }
      })
  }

  const loadDataFromForm = (e) => {
    e.preventDefault();
    let note = e.target.elements.note.value;
    note = note.trim();
    if (note === '') {
      setWarningClass('');
      return;
    }
    sendData({'note': note});
  }

  // или можно было бы в кнопку "Создать новую заметку" передавать такую функцию, которая просто бы меняла классы у формы и ссылки, вместо перезагрузки страницы как делает сейчас window.location.reload()
  // const newNote = () => {
  //   setFormClass('');
  //   setLineClass('hide');
  // }

  return (
    <div className="text-center p-5">
      <form onSubmit={loadDataFromForm} className={formClass}>
        <label htmlFor="" className="fs-4 mb-2">Введите заметку</label>
        <textarea rows="4" name="note" id="note" placeholder="Введите текст" className="mb-3"></textarea>
        <div className={`alert alert-warning ${warningClass}`} role="alert">Сперва введите текст заметки!</div>
        <button type='submit' className="btn btn-primary">Создать</button>
      </form>
      <div className={lineClass}>
        <div className="mb-4 fs-5">{url}</div>
        <div><button onClick={() => window.location.reload()} className="btn btn-primary">Создать новую заметку</button></div>
      </div>
    </div>
  )
}
