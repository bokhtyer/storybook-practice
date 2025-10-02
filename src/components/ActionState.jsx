import { useActionState } from "react";

async function increment(previousState, formData) {
    return previousState + 1;
}

function StatefulForm() {
    const [state, formAction] = useActionState(increment, 1);
    return (
        <form>
            <input type="text" name="count" value={state} readOnly />
            <button formAction={formAction}>Increment</button>
        </form>
    );
}
export default StatefulForm;
