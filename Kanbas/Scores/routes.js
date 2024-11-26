import * as dao from "./dao.js";
export default function ScoreRoutes(app) {
  app.get("/api/scores", (req, res) => {
    const scores = dao.findAllScores();
    res.send(scores);
  });
  app.get("/api/scores/:uid/:qid", (req, res) => {
    const { uid, qid } = req.params;
    const score = dao.findScore(uid, qid);
    res.send(score);
  });
  app.post("/api/scores/:uid/:qid", (req, res) => {
    const { uid, qid } = req.params;
    const { score } = req.body; // Assuming the score value is sent in the body
    const newScore = dao.newScore(uid, qid, score);
    res.send(newScore);
  });
  app.put("/api/scores/:uid/:qid", (req, res) => {
    const { uid, qid } = req.params;
    const scoreUpdates = req.body;
    const updatedScore = dao.updateScore(uid, qid, scoreUpdates);
    if (updatedScore) {
      res.send(updatedScore);
    } else {
      res.status(404).send("Score not found");
    }
  });
}
