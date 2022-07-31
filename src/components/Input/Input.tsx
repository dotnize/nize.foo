import { Component, JSX, onMount } from 'solid-js';
import './Input.css';

const Input: Component<JSX.InputHTMLAttributes<HTMLInputElement>> = (props) => {
  function handleBlur(e: FocusEvent) {
    // @ts-expect-error e.target is an EventTarget instead of HTMLInputElement
    e.target.focus({ preventScroll: true });
  }

  let input: HTMLInputElement | undefined;

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
        {...props}
        autofocus={true}
      />
    </span>
  );
};

export default Input;
