import config from "./config.js";
import server from "./app.js";
import connectDb from "./config/db.js";

const start = async () => {
	try {
		await connectDb();

		server.listen(config.PORT, () =>
			console.log(`Server is listening on port ${config.PORT}...`)
		);
	} catch (error) {
		console.log(error);
	}
};

start();
