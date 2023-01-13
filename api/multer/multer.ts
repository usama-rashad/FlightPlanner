import multer, {diskStorage, ErrorCode} from "multer";

export const multerStorage = diskStorage({
	destination(req, file, callback) {
		callback(null, "./icons/");
	},
	filename(req, file, callback) {
		callback(null, file.originalname);
		{
			let mimeType = file.mimetype.split("/")[0];
			if (mimeType !== "image") {
				console.log("Please upload a picture with *.jpg/*.ico/*.bmp ");
			}
		}
	},
});

export const multerMiddleWare = multer({storage: multerStorage});
