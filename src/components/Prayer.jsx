import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import moment from "moment";

export default function MediaCard({ name, time, image }) {
	const formattedTime = moment(time, "HH:mm").format("hh:mm A");

	return (
		<Card sx={{ width: "14vw" }}>
			<CardMedia
				sx={{ height: 140 }}
				image={image}
				title="green iguana"
			/>
			<CardContent>
				<h2>{name}</h2>

				<Typography variant="h4" color="text.secondary">
					{formattedTime}
				</Typography>
			</CardContent>
		</Card>
	);
}
