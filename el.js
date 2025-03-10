export default function el(tagName, children, classList) {
  const el = document.createElement(tagName);

  if (Array.isArray(children)) {
    el.append(...children);
  } else {
    el.append(children);
  }

  if (classList) {
    el.classList.add(...classList);
  }

  return el;
}
