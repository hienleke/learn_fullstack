import { useState } from 'react'
function QuestionForm() {
    const [inputValue, setInputValue] = useState('Ask your question here')
    return (
        <div>
            <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
        </div>
    )
}

export default QuestionForm