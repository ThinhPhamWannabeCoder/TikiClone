import { Form, useActionData } from "react-router-dom";

export default function LoginForm(){

    const data = useActionData();

    return (
        <div className="bg-slate-400">
            <h3>This is  Login Form</h3>
            <Form method = "post" action="/login" >
                <label>
                    <span>Email</span>
                    <input type="email" name="email" required />
                </label>
                <label>
                    <span>Password</span>
                    <input type="password" name="password" required />
                </label>
                <button>Submit</button>

            </Form>
            {data && data.error && (<p className="text-red-500">Login again</p>)} 
        </div>
    )
}