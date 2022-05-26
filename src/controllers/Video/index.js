import fs from "fs";
import { formatErrorResponse } from "helpers/formatResponse";

const Video = async (req, res) => {
  const range = req.headers.range;
  const videoPath = `${__dirname}/test.mp4`;
  const videoSize = fs.statSync(videoPath).size;

  const chunkSize = 1e+6;
  const start = Number(range.replace(/\D/g, ""));
  const end = Math.min(start + chunkSize, videoSize - 1);

  const contentLength = end - start + 1;

  const headers = {
    "Content-Range": `bytes ${start}-${end}/${videoSize}`,
    "Accept-Ranges": "bytes",
    "Content-Length": contentLength,
    "Content-Type": "video/mp4",
  };

  try {
    res.writeHead(206, headers);
    const stream = fs.createReadStream(videoPath, { start, end });
    stream.pipe(res);
  } catch (error) {
    console.log(error);
    res.json(formatErrorResponse(error));
  }
};

export default Video;
export { default as validations } from "./validations";
