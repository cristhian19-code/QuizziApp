import { useForm } from "../../hooks/useForm";
import { motion } from 'framer-motion'
export const Register = ({ setChangePage }) => {
    const [form, handleChange, reset] = useForm({ email: "", password: "", repeat_password: "", name: "" });

    const { email, password, name, repeat_password } = form;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('handleSubmit');
    }

    const changePage = () => {
        setChangePage(changePage => !changePage);
    }

    return (
        <div className="bg-white shadow-md w-96 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md px-6 py-12">
            <h1 className="text-4xl text-center text-gray-700">Register</h1>
            <motion.form initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} onSubmit={handleSubmit} className="mt-7">
                <div>
                    <label className="block text-md font-bold text-gray-600" htmlFor="name">Name</label>
                    <input className="py-2 px-3 border border-gray-300 w-full mt-1 rounded-md outline-none" onChange={handleChange} value={name} type="text" id="name" name="name" />
                </div>
                <div className="mt-4">
                    <label className="block text-md font-bold text-gray-600" htmlFor="email">Email</label>
                    <input className="py-2 px-3 border border-gray-300 w-full mt-1 rounded-md outline-none" onChange={handleChange} value={email} type="email" id="email" name="email" />
                </div>
                <div className="mt-4">
                    <label className="block text-md font-bold text-gray-600" htmlFor="password">Password</label>
                    <input className="py-2 px-3 border border-gray-300 w-full mt-1 rounded-md outline-none" onChange={handleChange} value={password} type="password" id="password" name="password" />
                    {
                        (password !== repeat_password)
                        && (
                            <span className="text-xs text-red-500 font-bold">Las contraseñas no coinciden</span>
                        )
                    }
                </div>
                <div className="mt-4">
                    <label className="block text-md font-bold text-gray-600" htmlFor="repeat_password">Repeat Password</label>
                    <input className="py-2 px-3 border border-gray-300 w-full mt-1 rounded-md outline-none" onChange={handleChange} value={repeat_password} type="password" id="repeat_password" name="repeat_password" />
                    {
                        (password !== repeat_password)
                        && (
                            <span className="text-xs text-red-500 font-bold">Las contraseñas no coinciden</span>
                        )
                    }
                </div>

                <p className="text-center mt-4 font-light text-ms">Do you already have an account? <a className="font-normal text-blue-600 hover:underline" onClick={changePage} href="#">click here</a></p>

                <button type="submit" className="block mx-auto mt-5 bg-gray-800 px-8 py-3 rounded-md text-white">Registrarme</button>
            </motion.form>
        </div>
    )
}
