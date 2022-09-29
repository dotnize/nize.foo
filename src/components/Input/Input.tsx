import { useNavigate } from '@solidjs/router';
import { Component, JSX, onMount } from 'solid-js';
import handleCommand from './command';
import './Input.css';

const Input: Component<JSX.InputHTMLAttributes<HTMLInputElement>> = (props) => {
  const navigate = useNavigate();

  function handleBlur(e: FocusEvent) {
    (e.target as HTMLInputElement).focus({ preventScroll: true });
  }

  let input: HTMLInputElement | undefined;

  function handleInput(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      const input = (e.target as HTMLInputElement).value;

      if (input.length === 0) return;

      if (handleCommand(input, navigate)) {
        (e.target as HTMLInputElement).value = '';
      }
    }
  }

  onMount(() => {
    if (input !== undefined) {
      input.focus({ preventScroll: true });
    }
  });

  return (
    <span class="cmd">
      <input
        ref={input}
        class="space-top"
        maxlength={128}
        spellcheck={false}
        type="text"
        onBlur={handleBlur}
        onKeyUp={handleInput}
        {...props}
        autofocus={true}
        autocomplete="off"
      />
    </span>
  );
};

export default Input;
