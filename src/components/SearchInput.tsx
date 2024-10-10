import { useState } from "react";
import { 
    //Form, 
    useNavigate } from "react-router-dom";

export default function SearchInput() {
    // Traditional programmatic routing
    const [term, setTerm] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        navigate(`/search?term=${term}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input value={term} onChange={(e) => setTerm(e.target.value)} />
        </form>
    );

    // Using the browser router to handle form submission
    // NOTE: Would comment out useNavigate ref in imports and add Form import
    /* Keeping this code as a reference
    return (
        <Form action="/search">
            <input name="term" />
        </Form>
    );
    */
}
