import { Button, Grid, TextField } from "@mui/material";

export default function ContactForm() {
	async function handleSubmit(e) {
		e.preventDefault();
		const data = new FormData(e.currentTarget);
		// console.log(data);
		try {
			const response = await fetch("/api/contact", {
				method: "post",
				body: new URLSearchParams(data),
			});
			if (!response.ok) {
				throw new Error(`Invalid response: ${response.status}`);
			}
			// alert(
			// 	"Thanks for your message! We will be in touch as soon as possible."
			// );
		} catch (err) {
			console.log(err);
			// alert("There was a problem with your submission. Please try again.");
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<Grid container maxWidth="lg" spacing={2}>
				<Grid item xs={12} sm={6} className="name block">
					<TextField
						id="contact-first"
						type="text"
						name="first"
						placeholder="First Name"
						required
						fullWidth
					/>
				</Grid>
				<Grid item xs={12} sm={6} className="">
					<TextField
						id="contact-last"
						type="text"
						name="last"
						placeholder="Surname"
						required
						fullWidth
					/>
				</Grid>
				<Grid item xs={12} sm={6} className="email block">
					<TextField
						id="contact-email"
						type="email"
						name="email"
						required
						placeholder="Email Address"
						fullWidth
					/>
				</Grid>
				<Grid item xs={12} sm={6} className="block phone">
					<TextField
						id="contact-phone"
						type="text"
						name="phone"
						placeholder="Telephone"
						fullWidth
					/>
				</Grid>

				<Grid item xs={12} className="message block">
					<textarea
						minRows={2}
						placeholder="Please leave a message to let us know how we can assist with your enquiry..."
						style={{ width: "100%", minHeight: "3rem" }}
					/>
				</Grid>
				<Grid item xs={12} className="button block">
					<Button variant="contained" size="large" type="submit">
						Submit
					</Button>
				</Grid>
			</Grid>
		</form>
	);
}
