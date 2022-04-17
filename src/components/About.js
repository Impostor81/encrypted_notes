import pic from '../img/lock.png';

export default function About() {
  return (
    <>
      <div className="p-5 fs-5 text-center">
        <b>EncryptedNotes</b> - проект на Реакте для портфолио, созданный на функциональных компонентах, использует роутинг, fetch, базу данных и node server. Автор: Мальцев Александр, в рамках курса ReactJS.
      </div>
      <div>
        <img src={pic} alt="lock" className="img-lock" />
      </div>
    </>
  )
}



