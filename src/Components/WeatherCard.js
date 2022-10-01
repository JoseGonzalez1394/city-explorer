import React from "react";
import Card from 'react-bootstrap/Card';

class WeatherCard extends React.Component {
	render() {
		return (
			<Card style={{ width: '18rem' }}>
				<Card.Body>
					<Card.Text>
						{this.props.Date}
					</Card.Text>
					<Card.Text>
						{this.props.Forecast}
					</Card.Text>
				</Card.Body>
			</Card>
		)
	}
}

export default WeatherCard;