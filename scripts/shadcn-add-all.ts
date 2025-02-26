import { execSync } from 'child_process'
import path from 'path'

const components = [
  'accordion',
  'alert',
  'alert-dialog',
  'aspect-ratio',
  'avatar',
  'badge',
  'button',
  'calendar',
  'card',
  'carousel',
  'checkbox',
  'collapsible',
  'command',
  'context-menu',
  'dialog',
  'drawer',
  'dropdown-menu',
  'form',
  'hover-card',
  'input',
  'label',
  'menubar',
  'navigation-menu',
  'popover',
  'progress',
  'radio-group',
  'scroll-area',
  'select',
  'separator',
  'sheet',
  'skeleton',
  'slider',
  'switch',
  'table',
  'tabs',
  'textarea',
  'toast',
  'toggle',
  'tooltip'
]

function addComponent(component: string) {
  try {
    execSync(`npx shadcn-ui@latest add ${component}`, { stdio: 'inherit' })
    console.log(`✅ Added ${component}`)
  } catch (error) {
    console.error(`❌ Failed to add ${component}:`, error)
  }
}

async function main() {
  console.log('🚀 Adding all shadcn components...')
  
  for (const component of components) {
    addComponent(component)
  }
  
  console.log('✨ Finished adding all components')
}

main().catch(console.error) 