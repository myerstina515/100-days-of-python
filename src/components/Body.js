import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import "./Body.scss";
import Day1 from '../assets/PythonDay1.jpg'
import Day2 from '../assets/PythonDay2.jpg'
import Day3 from '../assets/PythonDay3.jpg'

const Body = () => {
  const images = [Day1, Day2]
  const title = ["Day 1: Band Name Generator", 
    "Day 2: Tip Calculator",
  ]
  const link = [
    "https://replit.com/@TinaFielder/band-name-generator-start#main.py", 
    "https://replit.com/@TinaFielder/tip-calculator-start#main.py"
  ]

  return (
    <div className="container">
        <Card className="root" variant="outlined">
          <CardContent class="backContent">
            <img id="day1" alt="card content" src={Day1} />
            <Typography className="question" color="textSecondary" gutterBottom>
              Day 1: Band Name Generator
            </Typography>
            <Button href="https://replit.com/@TinaFielder/band-name-generator-start?v=1">Go see it!</Button>
          </CardContent>
        </Card>
        <Card className="root" variant="outlined">
          <CardContent class="backContent">
            <img id="day1" alt="card content" src={Day2} />
            <Typography className="question" color="textSecondary" gutterBottom>
              Day 2: Tip Calculator
            </Typography>
            <Button href="https://replit.com/@TinaFielder/tip-calculator-start?v=1">Go see it!</Button>
          </CardContent>
        </Card>
        <Card className="root" variant="outlined">
          <CardContent class="backContent">
            <img id="day1" alt="card content" src={Day3} />
            <Typography className="question" color="textSecondary" gutterBottom>
              Day 23: Choose your Adventure!
            </Typography>
            <Button href="https://replit.com/@TinaFielder/treasure-island-start?v=1">Go see it!</Button>
          </CardContent>
        </Card>
    </div>
  )
}
export default Body;