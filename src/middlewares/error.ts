import { NextFunction, Request, Response } from "express";
import AppLogger from "./logger-error";

export default function (
	err: Error,
	req: Request,
	res: Response,
	next: NextFunction
) {
	AppLogger.error(err.message);
	res.status(500).send("Something failed");
};
