import requests

def fetch_random_question():
  url = "https://opentdb.com/api.php?amount=1&type=multiple"
  try:
    response = requests.get(url)
    response.raise_for_status()
    data = response.json()
    question = data["results"][0]
    return {
      "question": question["question"],
      "correct_answer": question["correct_answer"],
      "options": question["incorrect_answers"] + [question["correct_answer"]],
    }
  except Exception as e:
    return {"error": f"Failed to fetch question:{str(e)}"}