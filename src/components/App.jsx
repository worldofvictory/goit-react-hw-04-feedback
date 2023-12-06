import { Component } from "react";
import Section  from "./Section/section";
import FeedbackOp from "./feedback/feedback";
import  Statistics  from "./statistics/statistics";
import  Notification  from "./Notification/notificatiom";

export class App  extends Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }

    leaveFeed = ({ target: { name } }) => {
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
    
  };

  countTotalFeed = () => {
    return Object.values(this.state).reduce((total, curr) => (total + curr));
  };

  countPositiveFeedPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeed();

    if (total === 0) {
      return 0; 
    }

    let positivePercentage = (good / total) * 100;
    positivePercentage = Math.round(positivePercentage);
    return positivePercentage;
  };
  render() {
    
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeed();
     const positivePercentage = this.countPositiveFeedPercentage();
    return (
    <>
   
 <Section title="Please Leave Feedback"> 
      <FeedbackOp options={Object.keys(this.state)} leaveFeed={this.leaveFeed} />
      </Section> 
<Section title="Statistics">
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            /> ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
    </>
 
  );

}
}


export default App;