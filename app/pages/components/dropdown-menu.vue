<script setup lang="ts">
import { Circle, LogOut, Plus, Settings, User } from "lucide-vue-next";

definePageMeta({
  title: "Dropdown Menu",
  description: "Accessible compound dropdown menu with trigger, content, items and keyboard navigation",
});

const componentExamples = {
  basic: `<DropdownMenu>
  <DropdownMenuTrigger>
    Open Menu
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Settings</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem destructive>Logout</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`,
  states: `<DropdownMenu>
  <DropdownMenuTrigger>States Demo</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Normal Items</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
      <Circle class="size-2 fill-current" />
      Active Item
    </DropdownMenuItem>
    <DropdownMenuItem disabled>
      <Circle class="size-2" />
      Disabled Item
    </DropdownMenuItem>
    <DropdownMenuItem destructive>
      <LogOut class="size-4" />
      Destructive Item
    </DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem inset>
      Inset Item (no icon)
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`,
  withIcons: `<DropdownMenu>
  <DropdownMenuTrigger>
    <User class="size-4" />
    Account
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
      <User class="size-4" />
      Profile
      <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
    </DropdownMenuItem>
    <DropdownMenuItem>
      <Settings class="size-4" />
      Settings
      <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
    </DropdownMenuItem>
    <DropdownMenuItem>
      <Plus class="size-4" />
      New Item
    </DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem destructive>
      <LogOut class="size-4" />
      Logout
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`,
  positioning: `<div class="flex gap-4">
  <DropdownMenu>
    <DropdownMenuTrigger>Bottom Start</DropdownMenuTrigger>
    <DropdownMenuContent side="bottom" align="start">
      <DropdownMenuItem>Item 1</DropdownMenuItem>
      <DropdownMenuItem>Item 2</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
  
  <DropdownMenu>
    <DropdownMenuTrigger>Top Center</DropdownMenuTrigger>
    <DropdownMenuContent side="top" align="center">
      <DropdownMenuItem>Item 1</DropdownMenuItem>
      <DropdownMenuItem>Item 2</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
  
  <DropdownMenu>
    <DropdownMenuTrigger>Right End</DropdownMenuTrigger>
    <DropdownMenuContent side="right" align="end">
      <DropdownMenuItem>Item 1</DropdownMenuItem>
      <DropdownMenuItem>Item 2</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</div>`,
};
</script>

<template>
  <UiDocs
    title="Dropdown Menu"
    description="Accessible compound dropdown menu with trigger, content, items and keyboard navigation"
    category="navigation"
    :is-new="true"
  >
    <div class="space-y-8">
      <!-- Basic Example -->
      <section class="space-y-4">
        <h2 class="text-2xl font-medium text-black dark:text-white">
          Basic Usage
        </h2>
        <UiComponentPreviewTabs
          title="Basic Dropdown"
          :code="componentExamples.basic"
        >
          <DropdownMenu>
            <DropdownMenuTrigger>
              Open Menu
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem destructive>
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </UiComponentPreviewTabs>
      </section>

      <!-- With Icons Example -->
      <section class="space-y-4">
        <h2 class="text-2xl font-medium text-black dark:text-white">
          With Icons and Shortcuts
        </h2>
        <UiComponentPreviewTabs
          title="With Icons and Shortcuts"
          :code="componentExamples.withIcons"
        >
          <DropdownMenu>
            <DropdownMenuTrigger>
              <User class="size-4" />
              Account
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User class="size-4" />
                Profile
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings class="size-4" />
                Settings
                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Plus class="size-4" />
                New Item
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem destructive>
                <LogOut class="size-4" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </UiComponentPreviewTabs>
      </section>

      <!-- Positioning Example -->
      <section class="space-y-4">
        <h2 class="text-2xl font-medium text-black dark:text-white">
          Positioning
        </h2>
        <UiComponentPreviewTabs
          title="Positioning"
          :code="componentExamples.positioning"
        >
          <div class="flex gap-4 items-center justify-center h-32">
            <DropdownMenu>
              <DropdownMenuTrigger>Bottom Start</DropdownMenuTrigger>
              <DropdownMenuContent side="bottom" align="start">
                <DropdownMenuItem>Item 1</DropdownMenuItem>
                <DropdownMenuItem>Item 2</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger>Top Center</DropdownMenuTrigger>
              <DropdownMenuContent side="top" align="center">
                <DropdownMenuItem>Item 1</DropdownMenuItem>
                <DropdownMenuItem>Item 2</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger>Right End</DropdownMenuTrigger>
              <DropdownMenuContent side="right" align="end">
                <DropdownMenuItem>Item 1</DropdownMenuItem>
                <DropdownMenuItem>Item 2</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </UiComponentPreviewTabs>
      </section>

      <!-- Status Examples -->
      <section class="space-y-4">
        <h2 class="text-2xl font-medium text-black dark:text-white">
          Item States
        </h2>
        <UiComponentPreviewTabs
          title="Item States"
          :code="componentExamples.states"
        >
          <DropdownMenu>
            <DropdownMenuTrigger>States Demo</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Normal Items</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Circle class="size-2 fill-current" />
                Active Item
              </DropdownMenuItem>
              <DropdownMenuItem disabled>
                <Circle class="size-2" />
                Disabled Item
              </DropdownMenuItem>
              <DropdownMenuItem destructive>
                <LogOut class="size-4" />
                Destructive Item
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem inset>
                Inset Item (no icon)
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </UiComponentPreviewTabs>
      </section>

      <!-- Props Documentation -->
      <section class="space-y-4">
        <h2 class="text-2xl font-medium text-black dark:text-white">
          API Reference
        </h2>
        <div class="space-y-8">
          <div>
            <h3 class="text-lg font-semibold mb-4">
              DropdownMenu
            </h3>
            <div class="overflow-x-auto">
              <table class="w-full text-sm">
                <thead>
                  <tr class="border-b">
                    <th class="text-left p-2">
                      Prop
                    </th>
                    <th class="text-left p-2">
                      Type
                    </th>
                    <th class="text-left p-2">
                      Default
                    </th>
                    <th class="text-left p-2">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b">
                    <td class="p-2">
                      <code>defaultOpen</code>
                    </td>
                    <td class="p-2">
                      <code>boolean</code>
                    </td>
                    <td class="p-2">
                      <code>false</code>
                    </td>
                    <td class="p-2">
                      Whether the dropdown is open by default
                    </td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-2">
                      <code>disabled</code>
                    </td>
                    <td class="p-2">
                      <code>boolean</code>
                    </td>
                    <td class="p-2">
                      <code>false</code>
                    </td>
                    <td class="p-2">
                      Whether the dropdown is disabled
                    </td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-2">
                      <code>onOpenChange</code>
                    </td>
                    <td class="p-2">
                      <code>(open: boolean) => void</code>
                    </td>
                    <td class="p-2">
                      -
                    </td>
                    <td class="p-2">
                      Callback when open state changes
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 class="text-lg font-semibold mb-4">
              DropdownMenuTrigger
            </h3>
            <div class="overflow-x-auto">
              <table class="w-full text-sm">
                <thead>
                  <tr class="border-b">
                    <th class="text-left p-2">
                      Prop
                    </th>
                    <th class="text-left p-2">
                      Type
                    </th>
                    <th class="text-left p-2">
                      Default
                    </th>
                    <th class="text-left p-2">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b">
                    <td class="p-2">
                      <code>asChild</code>
                    </td>
                    <td class="p-2">
                      <code>boolean</code>
                    </td>
                    <td class="p-2">
                      <code>false</code>
                    </td>
                    <td class="p-2">
                      Render as slot content instead of button
                    </td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-2">
                      <code>disabled</code>
                    </td>
                    <td class="p-2">
                      <code>boolean</code>
                    </td>
                    <td class="p-2">
                      <code>false</code>
                    </td>
                    <td class="p-2">
                      Whether the trigger is disabled
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 class="text-lg font-semibold mb-4">
              DropdownMenuContent
            </h3>
            <div class="overflow-x-auto">
              <table class="w-full text-sm">
                <thead>
                  <tr class="border-b">
                    <th class="text-left p-2">
                      Prop
                    </th>
                    <th class="text-left p-2">
                      Type
                    </th>
                    <th class="text-left p-2">
                      Default
                    </th>
                    <th class="text-left p-2">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b">
                    <td class="p-2">
                      <code>side</code>
                    </td>
                    <td class="p-2">
                      <code>"top" | "right" | "bottom" | "left"</code>
                    </td>
                    <td class="p-2">
                      <code>"bottom"</code>
                    </td>
                    <td class="p-2">
                      Side relative to trigger
                    </td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-2">
                      <code>align</code>
                    </td>
                    <td class="p-2">
                      <code>"start" | "center" | "end"</code>
                    </td>
                    <td class="p-2">
                      <code>"start"</code>
                    </td>
                    <td class="p-2">
                      Alignment relative to trigger
                    </td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-2">
                      <code>sideOffset</code>
                    </td>
                    <td class="p-2">
                      <code>number</code>
                    </td>
                    <td class="p-2">
                      <code>4</code>
                    </td>
                    <td class="p-2">
                      Distance from trigger in pixels
                    </td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-2">
                      <code>alignOffset</code>
                    </td>
                    <td class="p-2">
                      <code>number</code>
                    </td>
                    <td class="p-2">
                      <code>0</code>
                    </td>
                    <td class="p-2">
                      Offset along alignment axis
                    </td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-2">
                      <code>avoidCollisions</code>
                    </td>
                    <td class="p-2">
                      <code>boolean</code>
                    </td>
                    <td class="p-2">
                      <code>true</code>
                    </td>
                    <td class="p-2">
                      Prevent content from overflowing viewport
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 class="text-lg font-semibold mb-4">
              DropdownMenuItem
            </h3>
            <div class="overflow-x-auto">
              <table class="w-full text-sm">
                <thead>
                  <tr class="border-b">
                    <th class="text-left p-2">
                      Prop
                    </th>
                    <th class="text-left p-2">
                      Type
                    </th>
                    <th class="text-left p-2">
                      Default
                    </th>
                    <th class="text-left p-2">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b">
                    <td class="p-2">
                      <code>disabled</code>
                    </td>
                    <td class="p-2">
                      <code>boolean</code>
                    </td>
                    <td class="p-2">
                      <code>false</code>
                    </td>
                    <td class="p-2">
                      Whether the item is disabled
                    </td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-2">
                      <code>destructive</code>
                    </td>
                    <td class="p-2">
                      <code>boolean</code>
                    </td>
                    <td class="p-2">
                      <code>false</code>
                    </td>
                    <td class="p-2">
                      Show destructive styling
                    </td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-2">
                      <code>inset</code>
                    </td>
                    <td class="p-2">
                      <code>boolean</code>
                    </td>
                    <td class="p-2">
                      <code>false</code>
                    </td>
                    <td class="p-2">
                      Add left padding for alignment
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <!-- Accessibility Section -->
      <section class="space-y-4">
        <h2 class="text-2xl font-medium text-black dark:text-white">
          Accessibility
        </h2>
        <div class="space-y-4">
          <h3 class="text-lg font-semibold">
            Keyboard Navigation
          </h3>
          <ul class="space-y-2 text-sm">
            <li><kbd class="px-1.5 py-0.5 text-xs font-mono bg-muted rounded">Enter</kbd> or <kbd class="px-1.5 py-0.5 text-xs font-mono bg-muted rounded">Space</kbd> - Open/close menu or activate item</li>
            <li><kbd class="px-1.5 py-0.5 text-xs font-mono bg-muted rounded">ArrowDown</kbd> - Move to next item or open menu</li>
            <li><kbd class="px-1.5 py-0.5 text-xs font-mono bg-muted rounded">ArrowUp</kbd> - Move to previous item</li>
            <li><kbd class="px-1.5 py-0.5 text-xs font-mono bg-muted rounded">Home</kbd> - Move to first item</li>
            <li><kbd class="px-1.5 py-0.5 text-xs font-mono bg-muted rounded">End</kbd> - Move to last item</li>
            <li><kbd class="px-1.5 py-0.5 text-xs font-mono bg-muted rounded">Escape</kbd> - Close menu</li>
          </ul>

          <h3 class="text-lg font-semibold mt-6">
            ARIA Features
          </h3>
          <ul class="space-y-2 text-sm">
            <li>• Proper <code>role="menu"</code> and <code>role="menuitem"</code> attributes</li>
            <li>• <code>aria-expanded</code> state on trigger</li>
            <li>• <code>aria-haspopup</code> for menu indication</li>
            <li>• <code>aria-labelledby</code> connecting content to trigger</li>
            <li>• Focus management and tab trapping</li>
            <li>• Screen reader announcements</li>
          </ul>
        </div>
      </section>
    </div>
  </UiDocs>
</template>
