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

  const leaveFeed = (options) => {
    switch (options) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        return
    }
  }
 
   const countTotalFeed = () => {
    return good + neutral + bad; 
   
  };
  const positivePercentage = () => {
    const total = countTotalFeed();

    if (total === 0) {
      return 0; // Щоб уникнути ділення на нуль
    }

    let positivePercentage = (good / total) * 100;
    positivePercentage = Math.round(positivePercentage);
    return positivePercentage;
  };  
  

 
    
   
    const total = countTotalFeed();
    const positive = positivePercentage();
   


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



    

  
  



