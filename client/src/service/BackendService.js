export async function getSurveys() {
  const response = await fetch("/api/surveys");
  return await response.json();
}

export async function storeSurvey(survey) {
  const response = await fetch("/api/postSurvey", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ survey: survey }),
  });

  return await response.json();
}
