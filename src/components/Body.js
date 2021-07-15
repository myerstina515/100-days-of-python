import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import "./Body.scss";
import Day1 from '../assets/PythonDay1.jpg'
import Day2 from '../assets/PythonDay2.jpg'

const Body = () => {
  return (
    <div className="container">
        <Card className="root" variant="outlined">
          <CardContent class="backContent">
            <img id="day1" alt="card content" src={Day1} />
            <Typography className="question" color="textSecondary" gutterBottom>
              Day 1: Band Name Generator
            </Typography>
            <Button href="https://replit.com/@TinaFielder/band-name-generator-start#main.py">Go see it!</Button>
          </CardContent>
        </Card>
        <Card className="root" variant="outlined">
          <CardContent class="backContent">
            <img id="day1" alt="card content" src={Day2} />
            <Typography className="question" color="textSecondary" gutterBottom>
              Day 2: Tip Calculator
            </Typography>
            <Button href="https://replit.com/@TinaFielder/tip-calculator-start#main.py">Go see it!</Button>
          </CardContent>
        </Card>
    </div>
  )
}
export default Body;