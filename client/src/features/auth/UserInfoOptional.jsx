import { Input } from "../../components/Input";

function UserInfoOptional() {
  return (
    <form>
      <div>
        <h1>Select avatar</h1>
      </div>
      <div>
        <h1>Select Cover Image</h1>
      </div>
      <Input label={"Bio"} size={"large"} name={"bio"} />
      <Input label={"Username"} size={"large"} name={"username"} />
    </form>
  );
}
