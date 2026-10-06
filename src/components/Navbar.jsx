import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import {
  Navbar,
  NavBody,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "./ui/resizable-navbar";

export default function NavbarDemo() {
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/services" },
    { name: "About", link: "/about" },
    { name: "Gallery", link: "/gallery" },
    { name: "Blogs", link: "/blogs" },
    { name: "Contact", link: "/contact" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Navbar >
      <NavBody>
        <NavbarLogo />

        <div className="flex items-center gap-1 ">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.link}
              className={({ isActive }) =>
                `
                rounded-lg
                px-4
                py-2
                text-sm
                font-medium
                transition-all
                ${
                  isActive
                    ? "bg-accent-soft/70 text-primary"
                    : "text-text-muted hover:bg-accent-soft/40 hover:text-primary"
                }
                `
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        <div className="relative z-20 flex items-center gap-3">
          <NavbarButton
            variant="primary"
            onClick={() => navigate("/contact")}
          >
            Get Started
          </NavbarButton>
        </div>
      </NavBody>

      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />

          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() =>
              setIsMobileMenuOpen((prev) => !prev)
            }
          />
        </MobileNavHeader>

        <MobileNavMenu isOpen={isMobileMenuOpen}>
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                `
                w-full
                rounded-xl
                px-3
                py-3
                text-sm
                font-medium
                transition
                ${
                  isActive
                    ? "bg-accent-soft/70 text-primary"
                    : "text-text-muted hover:bg-accent-soft/40 hover:text-primary"
                }
                `
              }
            >
              {item.name}
            </NavLink>
          ))}

          <NavbarButton
            variant="primary"
            className="mt-2 w-full"
            onClick={() => {
              setIsMobileMenuOpen(false);
              navigate("/contact");
            }}
          >
            Get Started
          </NavbarButton>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}