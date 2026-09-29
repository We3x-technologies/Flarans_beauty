import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "../../lib/utils";

export const Navbar = ({ children, className }) => {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 100);
  });

  return (
    <motion.div
      ref={ref}
      className={cn("fixed inset-x-0 top-0 z-50 w-full px-4 pt-4", className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child, { visible })
          : child
      )}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible }) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(14px)" : "blur(0px)",
        boxShadow: visible
          ? "0 12px 40px rgba(83,9,120,0.14), 0 1px 0 rgba(255,255,255,0.65) inset"
          : "0 0 0 rgba(0,0,0,0)",
        width: visible ? "78%" : "100%",
        y: visible ? 8 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 30,
      }}
      className={cn(
        "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between rounded-full border border-white/60 bg-transparent px-5 py-3 shadow-[0_8px_30px_rgba(83,9,120,0.08)] lg:flex",
        visible && "border-[#E7BDE6] bg-transparent shadow-[0_12px_40px_rgba(83,9,120,0.16)]",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({ items, className, onItemClick }) => {
  const [hovered, setHovered] = useState(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "absolute inset-0 hidden flex-1 flex-row items-center justify-center gap-1 text-sm font-medium text-ink/60 lg:flex",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className="relative px-4 py-2 text-ink/65 transition-colors hover:text-rose-600"
          key={`link-${idx}`}
          to={item.link}
        >
          {hovered === idx && (
            <motion.div
              layoutId="navbar-hover"
              className="absolute inset-0 h-full w-full rounded-full bg-rose-50"
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
            />
          )}
          <span className="relative z-20">{item.name}</span>
        </Link>
      ))}
    </motion.div>
  );
};

export const MobileNav = ({ children, className, visible }) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(14px)" : "blur(0px)",
        boxShadow: visible
          ? "0 12px 40px rgba(83,9,120,0.14)"
          : "0 0 0 rgba(0,0,0,0)",
        width: visible ? "94%" : "100%",
        y: visible ? 8 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 30,
      }}
      className={cn(
        "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between rounded-2xl border border-white/60 bg-transparent px-4 py-3 shadow-[0_8px_30px_rgba(83,9,120,0.08)] lg:hidden",
        visible && "border-[#E7BDE6] bg-transparent shadow-[0_12px_40px_rgba(83,9,120,0.16)]",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({ children, className }) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between",
        className
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -12, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -12, scale: 0.98 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-2 rounded-2xl border border-[#E7BDE6] bg-[#FFF9FF]/95 p-4 shadow-soft backdrop-blur-md",
            className
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({ isOpen, onClick }) => {
  const Icon = isOpen ? X : Menu;

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      className="relative z-30 grid h-10 w-10 place-items-center rounded-full text-rose-600 transition hover:bg-rose-50"
    >
      <Icon size={22} />
    </button>
  );
};

export const NavbarLogo = () => {
  return (
    <Link
      to="/"
      className="relative z-20 flex items-center gap-3 text-primary"
      aria-label="Flarans Beauty Parlour home"
    >
      <div className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/50 bg-rose-100 text-rose-600 shadow-sm">
        <span className="great-vibes-regular text-2xl leading-none">F</span>
      </div>
      <span className="great-vibes-regular text-3xl leading-none text-rose-600">Flarans</span>
    </Link>
  );
};

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}) => {
  const baseStyles =
    "relative inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition duration-200 hover:-translate-y-0.5";

  const variantStyles = {
    primary:
      "bg-rose-500 text-white shadow-[0_8px_24px_rgba(83,9,120,0.22)] hover:bg-rose-600",
    secondary:
      "bg-transparent text-rose-600 shadow-none hover:bg-rose-50",
    dark:
      "bg-ink text-white hover:bg-rose-700",
    gradient:
      "bg-gradient-to-b from-rose-400 to-rose-600 text-white",
  };

  return (
    <Tag
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
};
