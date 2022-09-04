export function hey(message: string): string {
  if (typeof message !== "string" ) {
    return "Whatever."
  }
  
  const trimmedMessage = message.trim();
  if (trimmedMessage === '') {
    return 'Fine. Be that way!';
  }

  if (
    trimmedMessage === trimmedMessage.toUpperCase() &&
    trimmedMessage.endsWith("?") && trimmedMessage.match(/[a-zA-Z]/)
  ) {
    return "Calm down, I know what I'm doing!"
  }

  if (trimmedMessage.endsWith("?")) {
    return "Sure."
  }

  if (trimmedMessage === trimmedMessage.toUpperCase() && trimmedMessage.match(/[a-zA-Z]/)) {
    return 'Whoa, chill out!';
  }
  
  return 'Whatever.';
}
