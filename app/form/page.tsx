import { redirectHome } from "../../lib/actions";
import Button from "./Button";

export default function FormPage() {
  return (
    <form action={redirectHome}>
      <Button />
    </form>
  );
}
