import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import "./Body.scss";
import {days} from './days.js';

const Body = () => {

  

  return (
    <div className="container">
      {days.map((x) => (
        <Card key={x.id} className="root" variant="outlined">
          <CardContent className="backContent">
            <img id="day1" alt="card content" src={x.images} />
            <Typography className="question" color="textSecondary">
              {x.title}
            </Typography>
            <Button className="button" href={x.link}>Go see it!</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
export default Body;