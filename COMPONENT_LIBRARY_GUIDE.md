# KIX Component Library Guide

## 🎨 What is the Component Library?

The Component Library is a **dedicated showcase page** where you can view, inspect, and interact with all KIX design system components. It's your visual documentation and testing playground for components.

---

## 🚀 How to Access

### Method 1: URL Hash (Recommended)
Navigate to: **http://localhost:3000/#/component-library**

### Method 2: Direct URL
Navigate to: **http://localhost:3000/component-library**

### Method 3: From the Dashboard
*(Coming soon: Add a dev tools menu with a link to the component library)*

---

## 📚 What's Currently in the Library?

### ✅ Icon Buttons
**Complete showcase of all icon button variants:**
- **3 Styles:** Filled, Outlined, Transparent
- **3 Sizes:** Large (36×36px), Medium (32×32px), Small (24×24px)
- **4 States:** Initial, Hover, Active, Disabled
- **Color specs** and dimensions displayed
- **Interactive examples** with various icons

### ✅ Text Buttons (Preview)
Quick preview of the previously built text buttons with labels and icons.

### 🔜 Coming Soon
- Input fields
- Dropdowns
- Chips
- Badges
- More components as we build them!

---

## 🎯 Features

### Visual Showcase
- **Organized by component type** and variant
- **Live interactive examples** - hover, click, see disabled states
- **Color specifications** - exact hex values and state colors
- **Size dimensions** - pixel-perfect measurements

### Developer-Friendly
- **Code references** - links to Figma specs
- **Usage context** - understand when to use each variant
- **Real icons** - see how Lucide icons render at each size
- **Accessibility info** - states and keyboard navigation

### Navigation
- **Back to App button** in the header
- **Sticky header** for easy navigation
- **Responsive layout** for different screen sizes

---

## 🔧 How to Add New Components

### Step 1: Build Your Component
Create the component in `src/components/ui/[component-name].tsx`

### Step 2: Add to Component Library
Open `src/components/ComponentLibrary.tsx` and add a new section:

```tsx
<section className="space-y-6">
  <div className="space-y-2">
    <h2 className="text-3xl font-bold text-gray-900">Your Component Name</h2>
    <p className="text-gray-600">Brief description</p>
  </div>

  <div className="bg-white rounded-xl p-8 space-y-6 border border-gray-200">
    {/* Your component examples here */}
  </div>
</section>
```

### Step 3: Document It
Create a specs file (e.g., `YOUR_COMPONENT_SPECS.md`) with:
- Overview and purpose
- Variants and sizes
- Colors and states
- Usage examples
- Props API

---

## 📝 Example Workflow

### Inspecting Icon Buttons
1. Navigate to http://localhost:3000/#/component-library
2. Scroll to the "Icon Buttons" section
3. **See all variants:** Filled, Outlined, Transparent
4. **Hover over buttons** to see hover states
5. **Click buttons** to see active states
6. **Check color specs** displayed under each variant
7. **Copy code examples** from the docs

### Testing a New Button
1. Pick the appropriate variant (filled/outlined/transparent)
2. Choose the right size for your use case (lg/md/sm)
3. Test hover/active states in the library
4. Check color contrast and accessibility
5. Implement in your component

---

## 🎨 Design System Integration

### Figma Links
Each component section includes direct links to Figma specs:
- Click "View Figma Specs →" to open the design in Figma
- Compare library implementation with Figma designs
- Verify pixel-perfect accuracy

### Color Tokens
Colors are extracted from Figma and documented:
```css
Initial: #407a3f
Hover: #365528
Active: #24391b
```

### Consistency Checks
Use the library to:
- Ensure all variants follow the same patterns
- Verify state colors are consistent
- Test accessibility (focus states, contrast)
- Document edge cases

---

## 🛠️ Maintenance

### Adding Components
As you build new components, add them to the Component Library. This ensures:
- **Documentation** is always up-to-date
- **Testing** is easy and visual
- **Onboarding** new developers is faster
- **Design QA** can verify implementations

### Updating Components
When you update a component:
1. Update the component file
2. Update the Component Library showcase
3. Update the specs documentation
4. Test all states and variants visually

---

## 💡 Best Practices

### DO ✅
- Add every new component to the library
- Include all variants and sizes
- Show all states (initial, hover, active, disabled)
- Document colors and dimensions
- Link to Figma specs
- Provide usage examples

### DON'T ❌
- Skip documenting states
- Forget to update when components change
- Mix different component versions
- Leave TODO placeholders for too long

---

## 🔗 Quick Links

- **Component Library:** http://localhost:3000/#/component-library
- **Icon Button Specs:** [ICON_BUTTON_SPECS.md](./ICON_BUTTON_SPECS.md)
- **Text Button Specs:** [BUTTON_FIGMA_SPECS.md](./BUTTON_FIGMA_SPECS.md)
- **Figma File:** https://www.figma.com/design/04rBMxy8CfG5SX1pbOGL7D/Vision-UI-v1

---

## 🎯 Future Enhancements

### Planned Features
- [ ] Search and filter components
- [ ] Copy code snippets to clipboard
- [ ] Dark mode preview
- [ ] Accessibility checker
- [ ] Component playground (edit props live)
- [ ] Export component showcase as PDF
- [ ] Keyboard shortcuts
- [ ] Version history

### Component Roadmap
- [ ] Input fields (text, number, email, etc.)
- [ ] Select/Dropdown menus
- [ ] Chips and tags
- [ ] Status badges
- [ ] Priority badges
- [ ] Avatars
- [ ] Cards
- [ ] Tables
- [ ] Modals and dialogs
- [ ] Toast notifications

---

## ❓ FAQ

**Q: Can I access the component library in production?**  
A: The current implementation allows access via URL. You may want to add authentication or remove it in production builds.

**Q: How do I add a new component?**  
A: Build the component, add it to `ComponentLibrary.tsx`, and document it in a specs file.

**Q: The component library isn't loading?**  
A: Ensure the dev server is running at http://localhost:3000 and try clearing your browser cache.

**Q: Can I customize the component library layout?**  
A: Yes! Edit `src/components/ComponentLibrary.tsx` to adjust the layout, styling, or content.

---

## 📬 Feedback

As you use the component library, note:
- Missing components
- Unclear documentation
- Bugs or issues
- Feature requests

This will help improve the library over time!

---

**Happy Building! 🚀**

