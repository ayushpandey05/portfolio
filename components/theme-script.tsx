export function ThemeScript() {
  const code = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark")t="dark";var d=document.documentElement;d.classList.remove("light","dark");d.classList.add(t);}catch(e){document.documentElement.classList.add("dark");}})();`;

  return (
    <script
      dangerouslySetInnerHTML={{ __html: code }}
      suppressHydrationWarning
    />
  );
}
