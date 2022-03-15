import { motion } from "framer-motion";
import { Circle, Square, Donut, Diamond } from "react-awesome-shapes";
import { useDispatch } from "react-redux";
import { startListQuestions } from "../../actions/questions";
import { LetterAnimate } from "../ui/LetterAnimate";
import { useNavigate } from 'react-router-dom';

export const HomeScreen = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChangePage = async () => {
        await dispatch(startListQuestions());
        navigate('/questions');
    }

    return (
        <div className="relative overflow-x-hidden h-screen">
            <motion.div
                initial={{ y: 150 }}
                animate={{ y: 200 }}
                transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
            >
                <Circle
                    color="linear-gradient(135deg, #a5b4fc, #6366f1)"
                    size="150px"
                    className="absolute left-10 top-10"
                    zIndex={2}
                />
            </motion.div>

            <Circle
                color="#58D68D"
                className="absolute left-1/2 bottom-[50px]"
                size="40px"
                zIndex={2}
            />

            <Diamond
                className="absolute left-1/4 bottom-10"
                color="linear-gradient(135deg, #93c5fd, #3b82f6)"
                size="100px"
                zIndex={2}
            />

            <Donut
                color="#F7DC6F"
                size="100px"
                className="absolute left-[100px] top-5 h-32 w-32"
                width={["15px", "15x", "35px", "35px"]}
                zIndex={2}
            />

            <motion.div
                initial={{ y: 10 }}
                animate={{ y: 100 }}
                transition={{
                    delay: 2,
                    duration: 7,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
                className="absolute right-1/4 top-20"
            >
                <Square
                    color="linear-gradient(135deg, #fdba74, #f97316)"
                    size="120px"
                    zIndex={2}
                />
            </motion.div>
            <Donut
                color="#f43f5e"
                size="150px"
                className="absolute -right-10 bottom-5 h-32 w-32"
                width={["20px", "20px", "40px", "40px"]}
                zIndex={2}
            />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <LetterAnimate />
                <motion.button
                    onClick={handleChangePage}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-xl rounded-full font-bold px-10 py-3 bg-cyan-600 mt-8 text-white shadow-md shadow-cyan-600/50">
                    Jugar
                </motion.button>
            </div>
        </div>
    );
};
