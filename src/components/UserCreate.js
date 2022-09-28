import Button from "./Button";
import ButtonConsumer from "./ButtonConsumer";
import Field from "./Field";

function UserCreate() {
  return (
    <div className="ui form">
      <Field />
      ----- this.context -----
      <Button />
      <br />
      <br />
      ----- Consumer button ----
      <ButtonConsumer />
    </div>
  );
}

export default UserCreate;
