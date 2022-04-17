import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import env from '../env.json';

export default function Note() {
  const [noteText, setNoteText] = useState('');
  const [lineClass, setLineClass] = useState('hide');
  const [formClass, setFormClass] = useState('hide');
  const [errorClass, setErrorClass] = useState('hide');
  const [warningClass, setWarningClass] = useState('hide');

  let {noteURL} = useParams();

  useEffect(() => {
    if (noteURL !== undefined) {
      fetch(env.urlBackend, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify({"url": noteURL})
        })
        .then(response => response.json())
        .then(response => {
          if (response.result) {
            setNoteText(response.note);
            setLineClass('');
            setFormClass('hide');
            setErrorClass('hide');
          } else if (!response.result) {
            setLineClass('hide');
            setFormClass('hide');
            setErrorClass('');
          }
        })
    } else {
      setLineClass('hide');
      setFormClass('');
      setErrorClass('hide');
    }
  }, []);

  const getNote = (e) => {
    e.preventDefault();
    let url = e.target.elements.url.value;
    url = url.trim();
    if (url === '') {
      setWarningClass('');
      return;
    }
    noteURL = url;
    window.location.href = env.url + '/' + url;
  };

  const searchNote = () => {
    window.location.href = env.url;
  }

  return (
    <div className="note text-center p-5">
      <div className={lineClass}>
        <h4>Note:</h4>
        <div className="mb-5">{noteText}</div>
        <div><button onClick={searchNote} className="btn btn-primary">Смотреть еще один note</button></div>
      </div>
      <div className={errorClass}>
        <p className="fs-4 mb-4"> &#9940; Произошла ошибка, такой note не найден!</p>
        <div><button onClick={searchNote} className="btn btn-secondary">Попробуйте еще</button></div>
      </div>
      <div className={formClass}>
        <form onSubmit = {getNote} >
          <label htmlFor="url" className="fs-4 mb-2">Введите hash заметки</label>
          <input type="text" name="url" id="url" className="form-control m-auto mb-3" />
          <div className={`alert alert-warning ${warningClass}`} role="alert">Напишите hash!</div>
          <button type="submit" className="btn btn-primary">Искать Note</button>
        </form>
      </div>
    </div>
  )
}
