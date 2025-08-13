export function useClipboard() {
  const copied = ref(false);
  let timeoutId: NodeJS.Timeout | null = null;

  const copy = async (text: string) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      }
      else {
        // Fallback for older browsers
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "absolute";
        textArea.style.left = "-999999px";
        document.body.prepend(textArea);
        textArea.select();
        document.execCommand("copy");
        textArea.remove();
      }

      copied.value = true;

      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      timeoutId = setTimeout(() => {
        copied.value = false;
      }, 2000);

      return true;
    }
    catch (error) {
      console.error("Failed to copy text:", error);
      return false;
    }
  };

  // Cleanup timeout on unmount
  onUnmounted(() => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  });

  return {
    copy,
    copied: readonly(copied),
  };
}
