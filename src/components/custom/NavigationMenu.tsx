const NavigationMenu = () => {
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <nav className="bg-secondary border-b border-border">
      <div className="max-w-2xl mx-auto">
        <ul className="flex items-center justify-center gap-8 py-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm font-medium text-secondary-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default NavigationMenu
