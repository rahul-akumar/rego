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
            <h3 class="text-lg font-semibold mb-4 text-primary">
              DropdownMenu
            </h3>
            <div class="overflow-x-auto">
              <table class="w-full text-sm">
                <thead>
                  <tr class="border-b">
                    <th class="text-left p-2 text-primary">
                      Prop
                    </th>
                    <th class="text-left p-2 text-primary">
                      Type
                    </th>
                    <th class="text-left p-2 text-primary">
                      Default
                    </th>
                    <th class="text-left p-2 text-primary">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b">
                    <td class="p-2 text-primary">
                      <code>defaultOpen</code>
                    </td>
                    <td class="p-2 text-primary">
                      <code>boolean</code>
                    </td>
                    <td class="p-2 text-primary">
                      <code>false</code>
                    </td>
                    <td class="p-2 text-primary">
                      Whether the dropdown is open by default
                    </td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-2 text-primary">
                      <code>disabled</code>
                    </td>
                    <td class="p-2 text-primary">
                      <code>boolean</code>
                    </td>
                    <td class="p-2 text-primary">
                      <code>false</code>
                    </td>
                    <td class="p-2 text-primary">
                      Whether the dropdown is disabled
                    </td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-2 text-primary">
                      <code>onOpenChange</code>
                    </td>
                    <td class="p-2 text-primary">
                      <code>(open: boolean) => void</code>
                    </td>
                    <td class="p-2 text-primary">
                      -
                    </td>
                    <td class="p-2 text-primary">
                      Callback when open state changes
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 class="text-lg font-semibold mb-4 text-primary">
              DropdownMenuTrigger
            </h3>
            <div class="overflow-x-auto">
              <table class="w-full text-sm">
                <thead>
                  <tr class="border-b">
                    <th class="text-left p-2 text-primary">
                      Prop
                    </th>
                    <th class="text-left p-2 text-primary">
                      Type
                    </th>
                    <th class="text-left p-2 text-primary">
                      Default
                    </th>
                    <th class="text-left p-2 text-primary">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b">
                    <td class="p-2 text-primary">
                      <code>asChild</code>
                    </td>
                    <td class="p-2 text-primary">
                      <code>boolean</code>
                    </td>
                    <td class="p-2 text-primary">
                      <code>false</code>
                    </td>
                    <td class="p-2 text-primary">
                      Render as slot content instead of button
                    </td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-2 text-primary">
                      <code>disabled</code>
                    </td>
                    <td class="p-2 text-primary">
                      <code>boolean</code>
                    </td>
                    <td class="p-2 text-primary">
                      <code>false</code>
                    </td>
                    <td class="p-2 text-primary">
                      Whether the trigger is disabled
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 class="text-lg font-semibold mb-4 text-primary">
              DropdownMenuContent
            </h3>
            <div class="overflow-x-auto">
              <table class="w-full text-sm">
                <thead>
                  <tr class="border-b">
                    <th class="text-left p-2 text-primary">
                      Prop
                    </th>
                    <th class="text-left p-2 text-primary">
                      Type
                    </th>
                    <th class="text-left p-2 text-primary">
                      Default
                    </th>
                    <th class="text-left p-2 text-primary">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b">
                    <td class="p-2 text-primary">
                      <code>side</code>
                    </td>
                    <td class="p-2 text-primary">
                      <code>"top" | "right" | "bottom" | "left"</code>
                    </td>
                    <td class="p-2 text-primary">
                      <code>"bottom"</code>
                    </td>
                    <td class="p-2 text-primary">
                      Side relative to trigger
                    </td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-2 text-primary">
                      <code>align</code>
                    </td>
                    <td class="p-2 text-primary">
                      <code>"start" | "center" | "end"</code>
                    </td>
                    <td class="p-2 text-primary">
                      <code>"start"</code>
                    </td>
                    <td class="p-2 text-primary">
                      Alignment relative to trigger
                    </td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-2 text-primary">
                      <code>sideOffset</code>
                    </td>
                    <td class="p-2 text-primary">
                      <code>number</code>
                    </td>
                    <td class="p-2 text-primary">
                      <code>4</code>
                    </td>
                    <td class="p-2">
                      Distance from trigger in pixels
                    </td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-2 text-primary">
                      <code>alignOffset</code>
                    </td>
                    <td class="p-2 text-primary">
                      <code>number</code>
                    </td>
                    <td class="p-2 text-primary">
                      <code>0</code>
                    </td>
                    <td class="p-2 text-primary">
                      Offset along alignment axis
                    </td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-2 text-primary">
                      <code>avoidCollisions</code>
                    </td>
                    <td class="p-2 text-primary">
                      <code>boolean</code>
                    </td>
                    <td class="p-2 text-primary">
                      <code>true</code>
                    </td>
                    <td class="p-2 text-primary">
                      Prevent content from overflowing viewport
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 class="text-lg font-semibold mb-4 text-primary">
              DropdownMenuItem
            </h3>
            <div class="overflow-x-auto">
              <table class="w-full text-sm">
                <thead>
                  <tr class="border-b">
                    <th class="text-left p-2 text-primary">
                      Prop
                    </th>
                    <th class="text-left p-2 text-primary">
                      Type
                    </th>
                    <th class="text-left p-2 text-primary">
                      Default
                    </th>
                    <th class="text-left p-2 text-primary">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b">
                    <td class="p-2 text-primary">
                      <code>disabled</code>
                    </td>
                    <td class="p-2 text-primary">
                      <code>boolean</code>
                    </td>
                    <td class="p-2 text-primary">
                      <code>false</code>
                    </td>
                    <td class="p-2 text-primary">
                      Whether the item is disabled
                    </td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-2 text-primary">
                      <code>destructive</code>
                    </td>
                    <td class="p-2 text-primary">
                      <code>boolean</code>
                    </td>
                    <td class="p-2 text-primary">
                      <code>false</code>
                    </td>
                    <td class="p-2 text-primary">
                      Show destructive styling
                    </td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-2 text-primary">
                      <code>inset</code>
                    </td>
                    <td class="p-2 text-primary">
                      <code>boolean</code>
                    </td>
                    <td class="p-2 text-primary">
                      <code>false</code>
                    </td>
                    <td class="p-2 text-primary">
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
        <h2 class="text-2xl font-medium text-primary">
          Accessibility
        </h2>
        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-primary">
            Keyboard Navigation
          </h3>
          <ul class="space-y-2 text-sm">
            <li class="text-primary">
              <DsBadge>Enter</DsBadge> or <DsBadge size="sm">
                Space
              </DsBadge> - Open/close menu or activate item
            </li>
            <li class="text-primary">
              <DsBadge size="sm">
                ArrowDown
              </DsBadge> - Move to next item or open menu
            </li>
            <li class="text-primary">
              <DsBadge size="sm">
                ArrowUp
              </DsBadge> - Move to previous item
            </li>
            <li class="text-primary">
              <DsBadge size="sm">
                Home
              </DsBadge> - Move to first item
            </li>
            <li class="text-primary">
              <DsBadge size="sm">
                End
              </DsBadge> - Move to last item
            </li>
            <li class="text-primary">
              <DsBadge size="sm">
                Escape
              </DsBadge> - Close menu
            </li>
          </ul>

          <h3 class="text-lg font-semibold mt-6 text-primary">
            ARIA Features
          </h3>
          <ul class="space-y-2 text-sm">
            <li class="text-primary">
              • Proper <code>role="menu"</code> and <code>role="menuitem"</code> attributes
            </li>
            <li class="text-primary">
              • <code>aria-expanded</code> state on trigger
            </li>
            <li class="text-primary">
              • <code>aria-haspopup</code> for menu indication
            </li>
            <li class="text-primary">
              • <code>aria-labelledby</code> connecting content to trigger
            </li>
            <li class="text-primary">
              • Focus management and tab trapping
            </li>
            <li class="text-primary">
              • Screen reader announcements
            </li>
          </ul>
        </div>
      </section>
    </div>
  </UiDocs>
</template>
