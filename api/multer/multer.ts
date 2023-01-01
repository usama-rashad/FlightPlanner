import multer, {diskStorage} from "multer";

export const multerStorage = diskStorage({
	destination(req, file, callback) {
		callback(null, "./icons/");
	},
	filename(req, file, callback) {
		callback(null, file.originalname);
	},
});

export const multerMiddleWare = multer({storage: multerStorage});
