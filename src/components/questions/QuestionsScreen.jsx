import { motion } from "framer-motion"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { startChangePage, startStopChangePage} from "../../actions/game";
import { startAnswerUser } from "../../actions/questions";
import { useForm } from "../../hooks/useForm";

export const QuestionsScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, handleChange] = useForm({ userAnswer: ''})

  const [nextPage, setNextPage] = useState(0);
  const { questions } = useSelector(state => state.questions);
  const { changePage } = useSelector(state => state.game);
  const { userAnswer } = form;

  //funcion para pasar a la siguiente pregunta
  const handleNextPage = () => {
    const { _id } = questions[nextPage];
    dispatch(startChangePage(nextPage));

    if (questions.length - 1 === nextPage) {
      navigate('/result', { replace: true });
    }
    // enviando la respuesta del usuario
    dispatch(startAnswerUser({ _id, userAnswer }));
    
    //esperando 1 segundo para cambiar de pagina y pregunta
    setTimeout(() => { 
      dispatch(startStopChangePage(nextPage));
    },200)
    
    setNextPage(nextPage + 1)
  }
  
  return (changePage ? (
    <>
    </>
  ) :
    (
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="py-20"
      >
        <div>
          <h1 className="text-5xl text-center text-white">{questions[nextPage].title}</h1>
        </div>
        <div className="flex justify-center mt-20">
          <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 gap-7">
            {
              questions[nextPage].options.map(option => (
                <div key={option} className="w-52 h-24 bg-white shadow-md shadow-white/50 rounded-lg flex items-center p-4">
                  <input
                    onChange={handleChange}
                    type="radio"
                    name="userAnswer"
                    value={option} />
                  <p className="text-2xl ml-3 text-gray-600">{option}</p>
                </div>
              ))
            }
          </div>
        </div>
        <div className="flex justify-center">
          <motion.button
            onClick={handleNextPage}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="text-xl rounded-full font-bold px-10 py-3 bg-green-500 mt-10 text-white shadow-md shadow-green-500/50">
            Enviar
          </motion.button>
        </div>
      </motion.div>
    )
  )
}
