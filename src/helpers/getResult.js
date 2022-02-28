export const getResult = async(questions) => { 
    const result = {
        correct: 0,
        total: questions.length,
        porcentage: 0,
    }

    await questions.forEach(question => { 
        if (question.answer === question.userAnswer) {
            result.correct++;
        }
    })

    result.porcentage = ((result.correct * 100) / result.total).toFixed(1);

    return result;
}