import * as dao from "./dao.js";

export default function QuizRoutes(app) {
  app.get("/api/quizzes/:qid", (req, res) => {
    const { qid } = req.params;
    const quiz = dao.findQuizById(qid);
    res.json(quiz);
  });

  app.put("/api/quizzes/:qid", (req, res) => {
    const { qid } = req.params;
    const quizUpdates = req.body;
    dao.updateQuiz(qid, quizUpdates);
    res.sendStatus(204);
  });
  app.delete("/api/quizzes/:qid", (req, res) => {
    const { qid } = req.params;
    dao.deleteQuiz(qid);
    res.sendStatus(204);
  });
}
