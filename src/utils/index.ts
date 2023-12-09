// handles setting letter choices for options list
export function handleLetter(option: number) {
  switch (option) {
    case 0:
      return 'A';
    case 1:
      return 'B';
    case 2:
      return 'C';
    case 3:
      return 'D';
  }
}

export function backgroundColor(quizType: string) {
  if (quizType === 'html') {
    return 'bg-light-orange';
  } else if (quizType === 'css') {
    return 'bg-light-green';
  } else if (quizType === 'javascript') {
    return 'bg-light-blue';
  } else if (quizType === 'accessibility') {
    return 'bg-light-purple';
  }
}
