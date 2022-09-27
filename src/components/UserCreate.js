import Button from "./Button";
import ButtonConsumer from "./ButtonConsumer";
import Field from "./Field";

function UserCreate() {
  return (
    <div className="ui form">
      <Field />
      ----- this.context -----
      <Button />
      ----- Consumer button ----
      <ButtonConsumer />
    </div>
  );
}

export default UserCreate;
