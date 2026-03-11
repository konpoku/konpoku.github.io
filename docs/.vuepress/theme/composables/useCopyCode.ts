import { onMounted, onUpdated, nextTick } from "vue";

function addCopyButtons() {
  const codeBlocks = document.querySelectorAll<HTMLElement>(
    'div[class*="language-"]',
  );

  codeBlocks.forEach((block) => {
    if (block.querySelector(".copy-btn")) return;

    const button = document.createElement("button");
    button.className = "copy-btn";
    button.setAttribute("aria-label", "复制代码");
    button.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
      </svg>
    `;

    button.addEventListener("click", async () => {
      const codeEl = block.querySelector("pre code");
      if (!codeEl) return;

      const text = codeEl.textContent ?? "";

      try {
        await navigator.clipboard.writeText(text);
        button.classList.add("copied");
        setTimeout(() => {
          button.classList.remove("copied");
        }, 2000);
      } catch {
        // Fallback for browsers that don't support clipboard API
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);

        button.classList.add("copied");
        setTimeout(() => {
          button.classList.remove("copied");
        }, 2000);
      }
    });

    block.appendChild(button);
  });
}

export function useCopyCode() {
  onMounted(() => {
    nextTick(addCopyButtons);
  });

  onUpdated(() => {
    nextTick(addCopyButtons);
  });
}
