
export default function Main() {
  return (
    <>
      <div className="d-flex justify-content-around p-5">
        <div>
          <a href = "/create" className="btn btn-primary">Создать Note</a>
        </div>
        <div>
          <a href = "/note" className="btn btn-primary">Просмотреть Note</a>
        </div>
      </div>
      <div className="px-5">
        <p><b>EncryptedNotes</b> - сервис для обмена заметками. Создайте заметку, отправьте ссылку на заметку, и ваш друг сможет ее просмотреть. Заметка отправляется в зашифрованном виде</p>
        <p><u>Как сделать заметку?</u></p>
        <ul>
          <li>Пройдите по ссылке "Create" или нажмите на кнопку "Создать Note"</li>
          <li>Введите текст сообщения в поле и нажмите "Создать"</li>
          <li>Отправьте сгенерированный адрес другу</li>
        </ul>
        <p>< u > Как прочитать заметку ?</u><br/> Перейдите по присланному URL. Либо перейдите по ссылке "Note"
        или нажмите на кнопку "Просмотреть Note". Введите hash заметки и нажмите "Искать Note" </p>
      </div>
    </>
  )
}
