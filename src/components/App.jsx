import { useState } from "react";
import Section  from "./Section/section";
import FeedbackOp from "./feedback/feedback";
import  Statistics  from "./statistics/statistics";
import  Notification  from "./Notification/notificatiom";


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const options = ['good', 'neutral', 'bad'];


    const leaveFeed = (event) => {
    let option = event.currentTarget.id;
    
    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      
      default:
        return;         
    }
  }
    
 
   function countTotalFeed () {
     const total = good + neutral + bad; 
    return total; 
  };

   function positivePercentage(total) {
    return Math.round(good * 100 / total) || 0;     
  
 };
 
    
   
    const total = countTotalFeed();
    const positive = positivePercentage(total);
   


  return (
    <>
   
 <Section title="Please Leave Feedback"> 
      <FeedbackOp options={options} leaveFeed={leaveFeed} />
      </Section> 
<Section title="Statistics">
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positive}
            /> ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
    </>
  )

}
export default App



    

  
  



