export const User = (props) => {
  return (
    <div className="row">
      <div className="col-sm-11">
        <div className="card">
          <div className="card-body">
            <h4> {props.user.name}</h4>
            <h5 className="card-subtitle"> {props.user.username} </h5>
            <p className="card-text">
              {" "}
              {props.user.email} {props.user.phone}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
