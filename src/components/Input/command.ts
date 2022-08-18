import { Navigator } from '@solidjs/router';

export default function handleCommand(command: string, navigate: Navigator): boolean {
  if (command.includes('home')) {
    navigate('/');
  } else if (command.includes('chat')) {
    navigate('/chat');
  } else if (command.includes('project')) {
    navigate('/projects');
  } else {
    return false; // invalid command
  }

  return true;
}
