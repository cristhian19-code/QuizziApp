import { useForm } from "../../hooks/useForm";
import { motion } from 'framer-motion';
import { useDispatch } from "react-redux";
import { startLogin } from "../../actions/auth";

export const Login = ({ setChangePage }) => {
    const [form, handleChange, reset] = useForm({ email: "", password: "" });

    const { email, password } = form;
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(startLogin(email, password));
    }

    const changePage = () => {
        setChangePage(changePage => !changePage);
    }

    return (
        <div className="bg-white shadow-md w-96 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md px-6 py-12">
            <h1 className="text-4xl text-center text-gray-700">Login</h1>
            <motion.form initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} onSubmit={handleSubmit} className="mt-7">
                <div>
                    <label className="block text-md font-bold text-gray-600" htmlFor="email">Email</label>
                    <input className="py-2 px-3 border border-gray-300 w-full mt-1 rounded-md outline-none" onChange={handleChange} value={email} type="email" id="email" name="email" />
                </div>
                <div className="mt-4">
                    <label className="block text-md font-bold text-gray-600" htmlFor="password">Password</label>
                    <input className="py-2 px-3 border border-gray-300 w-full mt-1 rounded-md outline-none" onChange={handleChange} value={password} type="password" id="password" name="password" />
                </div>
                <p className="text-center mt-4 font-light text-lg">You are new? <a className="font-normal text-blue-600 hover:underline" onClick={changePage} href="#">click here</a></p>
                <button type="submit" className="block mx-auto mt-5 bg-gray-800 px-8 py-3 rounded-md text-white">Ingresar</button>
            </motion.form>
        </div>
    )
}
