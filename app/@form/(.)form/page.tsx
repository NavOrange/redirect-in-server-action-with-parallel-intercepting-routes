import { redirectHome } from "../../../lib/actions";
import Button from "../../form/Button";
import Dialog from "./dialog";

export default function FormPage() {
  return (
    <Dialog>
      <form action={redirectHome}>
        <Button />
      </form>
    </Dialog>
  );
}
