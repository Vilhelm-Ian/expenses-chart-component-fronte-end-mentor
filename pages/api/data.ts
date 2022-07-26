import Data from "../../json/data.json";

export default async function handler(req, res) {
  res.status(200).json(Data);
}
