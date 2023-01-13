import fs from "fs";

const filePath = __dirname + "/sessionErrorLog.txt";

console.log("Error logging is enabled...");
process.on("unhandledRejection", (reason: Error | any, promise: Promise<any>) => {
	console.log("Unhandled Rejection at:", promise, "reason:", reason);
	let errorLogFile = fs.appendFileSync(filePath, `Unhandled Rejection at:, ${promise}, "reason:", ${reason}`);
});
