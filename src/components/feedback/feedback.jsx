import css from './feedback.module.css'

function FeedbackOp ({ options, leaveFeed }) {
     
    return (

        <ul className={css.Feedlist}>
        
        {options.map((option) => {
            return (
                <li key={option} className={css.option}>
                    <button name={option} onClick={leaveFeed} type='button' className={css.btnFeed}>
                        {option}
                    </button>
                </li>
                
            );
       
        })
            }
            </ul>
        )

    
 } 

export default FeedbackOp;