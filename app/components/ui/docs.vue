<script setup lang="ts">
import { ChevronDown, Copy } from "lucide-vue-next";

type Props = {
  title: string;
  description?: string;
  category?: string;
  isNew?: boolean;
};

const props = defineProps<Props>();

// const route = useRoute();
const { copy, copied } = useClipboard();

// Get the current page URL for copying
const currentUrl = computed(() => {
  if (import.meta.client) {
    return window.location.href;
  }
  return "";
});

// Get the page source (could be enhanced to fetch actual source)
const pageSource = computed(() => {
  return `# ${props.title}\n\n${props.description || ""}\n\nView at: ${currentUrl.value}`;
});

// Breadcrumb items
const breadcrumbItems = computed(() => [
  { label: "Components", href: "/components" },
  { label: props.title || "Component", href: "#", current: true },
]);

async function copyPage() {
  await copy(pageSource.value);
}

function openUrl(url: string) {
  window.open(url, "_blank", "noopener,noreferrer");
}

// Generate prompt URLs for AI assistants
function getPromptUrl(baseURL: string, url: string) {
  const prompt = `I'm looking at this REGO component documentation: ${url}. Help me understand how to use it. Be ready to explain concepts, give examples, or help debug based on it.`;
  return `${baseURL}?q=${encodeURIComponent(prompt)}`;
}

const menuItems = [
  {
    key: "v0",
    name: "Open in v0",
    icon: "M56 50.203V14h14v46.156C70 65.593 65.593 70 60.156 70c-2.596 0-5.158-1-7-2.843L0 14h19.797L56 50.203ZM147 56h-14V23.953L100.953 56H133v14H96.687C85.814 70 77 61.186 77 50.312V14h14v32.156L123.156 14H91V0h36.312C138.186 0 147 8.814 147 19.688V56Z",
    viewBox: "0 0 147 70",
    url: () => getPromptUrl("https://v0.dev", currentUrl.value),
  },
  {
    key: "chatgpt",
    name: "Open in ChatGPT",
    icon: "M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08-4.778 2.758a.795.795 0 0 0-.393.681zm1.097-2.365 2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5Z",
    viewBox: "0 0 24 24",
    url: () => getPromptUrl("https://chatgpt.com", currentUrl.value),
  },
  {
    key: "claude",
    name: "Open in Claude",
    icon: "m4.714 15.956 4.718-2.648.079-.23-.08-.128h-.23l-.79-.048-2.695-.073-2.337-.097-2.265-.122-.57-.121-.535-.704.055-.353.48-.321.685.06 1.518.104 2.277.157 1.651.098 2.447.255h.389l.054-.158-.133-.097-.103-.098-2.356-1.596-2.55-1.688-1.336-.972-.722-.491L2 6.223l-.158-1.008.655-.722.88.06.225.061.893.686 1.906 1.476 2.49 1.833.364.304.146-.104.018-.072-.164-.274-1.354-2.446-1.445-2.49-.644-1.032-.17-.619a2.972 2.972 0 0 1-.103-.729L6.287.133 6.7 0l.995.134.42.364.619 1.415L9.735 4.14l1.555 3.03.455.898.243.832.09.255h.159V9.01l.127-1.706.237-2.095.23-2.695.08-.76.376-.91.747-.492.583.28.48.685-.067.444-.286 1.851-.558 2.903-.365 1.942h.213l.243-.242.983-1.306 1.652-2.064.728-.82.85-.904.547-.431h1.032l.759 1.129-.34 1.166-1.063 1.347-.88 1.142-1.263 1.7-.79 1.36.074.11.188-.02 2.853-.606 1.542-.28 1.84-.315.832.388.09.395-.327.807-1.967.486-2.307.462-3.436.813-.043.03.049.061 1.548.146.662.036h1.62l3.018.225.79.522.473.638-.08.485-1.213.62-1.64-.389-3.825-.91-1.31-.329h-.183v.11l1.093 1.068 2.003 1.81 2.508 2.33.127.578-.321.455-.34-.049-2.204-1.657-.85-.747-1.925-1.62h-.127v.17l.443.649 2.343 3.521.122 1.08-.17.353-.607.213-.668-.122-1.372-1.924-1.415-2.168-1.141-1.943-.14.08-.674 7.254-.316.37-.728.28-.607-.461-.322-.747.322-1.476.388-1.924.316-1.53.285-1.9.17-.632-.012-.042-.14.018-1.432 1.967-2.18 2.945-1.724 1.845-.413.164-.716-.37.066-.662.401-.589 2.386-3.036 1.439-1.882.929-1.086-.006-.158h-.055L4.138 18.56l-1.13.146-.485-.456.06-.746.231-.243 1.907-1.312Z",
    viewBox: "0 0 24 24",
    url: () => getPromptUrl("https://claude.ai/new", currentUrl.value),
  },
];
</script>

<template>
  <div class="w-full">
    <!-- Header with copy actions -->
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-4">
        <div class="mb-10 space-y-4">
          <DsBreadcrumb :items="breadcrumbItems" />
          <div class="space-y-2">
            <h1 class="text-3xl font-bold tracking-tight text-foreground">
              {{ title }}
            </h1>
            <p class="text-md text-foreground-secondary">
              {{ description }}
            </p>
          </div>
        </div>
        <DsBadge v-if="isNew" variant="secondary" class="text-xs">
          New
        </DsBadge>
      </div>

      <!-- Copy Actions -->
      <div class="flex items-center gap-2 shrink-0">
        <DropdownMenu>
          <DropdownMenuTrigger class="inline-flex items-center justify-center gap-1 px-3 py-1.5 text-xs font-medium rounded-md bg-secondary text-foreground-secondary hover:bg-secondary/80 transition-colors">
            <Copy class="size-4" />
            {{ copied ? 'Copied!' : 'Copy Page' }}
            <ChevronDown class="size-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent side="bottom" align="end" class="w-48">
            <DropdownMenuItem @click="copyPage">
              Copy Page Link
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              v-for="item in menuItems"
              :key="item.key"
              @click="openUrl(item.url())"
            >
              <svg
                :viewBox="item.viewBox"
                class="mr-2 h-4 w-4"
                fill="currentColor"
              >
                <path :d="item.icon" />
              </svg>
              {{ item.name }}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>

    <!-- Content area -->
    <div class="flex flex-col gap-2">
      <!-- Documentation content -->
      <slot />
    </div>
  </div>
</template>
