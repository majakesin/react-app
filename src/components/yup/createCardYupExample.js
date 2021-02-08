import CardShema from "./yupValidation";


const CreateCardYupExample = () => {
  const createCard = async (event) => {
    event.preventDefault();
    let formCard = {
      title: event.target[0].value,
      subtitle: event.target[1].value,
      description: event.target[2].value,
    };
    const isValid = await CardShema.isValid(formCard);
    console.log(isValid)
  };

  return (
    <form onSubmit={createCard}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                type="text"
                name="title"
                className="form-control"
                placeholder="Title"
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="text"
                name="subtitle"
                className="form-control"
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="text"
                name="description"
                className="form-control"
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              <input className="button btn-danger" type="submit">
              </input>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}; export default CreateCardYupExample;
