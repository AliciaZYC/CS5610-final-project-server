import Database from "../Database/index.js";
export function findAllScores() {
  return Database.scores;
}
export function newScore(userId, quizId, scoreValue) {
  const { scores } = Database;
  const newScore = {
    _id: Date.now().toString(),
    student: userId,
    quiz: quizId,
    score: scoreValue,
  };
  scores.push(newScore);
  return newScore;
}
export function updateScore(userId, quizId, updatescore) {
  const { scores } = Database;
  const score = scores.find(
    (score) => score.student === userId && score.quiz === quizId
  );
  if (score) {
    Object.assign(score, updatescore);
    return score;
  } else {
    return null;
  }
}
export function findScore(userId, quizId) {
  const { scores } = Database;
  return scores.find(
    (score) => score.student === userId && score.quiz === quizId
  );
}
