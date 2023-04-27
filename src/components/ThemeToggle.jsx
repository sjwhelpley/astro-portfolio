import React, { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light");

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={handleClick}
      style={{
        border: "none",
        backgroundColor: "inherit",
        fontSize: "1.5rem",
      }}
    >
      {theme === "light" ? (
        <img
          alt="svgImg"
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjQiIGhlaWdodD0iMjQiCnZpZXdCb3g9IjAgMCAyNCAyNCI+CiAgICA8cGF0aCBkPSJNIDEyIDAgQyAxMS40IDAgMTEgMC40IDExIDEgTCAxMSAyIEMgMTEgMi42IDExLjQgMyAxMiAzIEMgMTIuNiAzIDEzIDIuNiAxMyAyIEwgMTMgMSBDIDEzIDAuNCAxMi42IDAgMTIgMCB6IE0gNC4xOTkyMTg4IDMuMTk5MjE4OCBDIDMuOTQ5MjE4OCAzLjE5OTIxODcgMy43IDMuMyAzLjUgMy41IEMgMy4xIDMuOSAzLjEgNC41MDAzOTA2IDMuNSA0LjkwMDM5MDYgTCA0LjE5OTIxODggNS41OTk2MDk0IEMgNC41OTkyMTg3IDUuOTk5NjA5NCA1LjE5OTYwOTQgNS45OTk2MDk0IDUuNTk5NjA5NCA1LjU5OTYwOTQgQyA1Ljk5OTYwOTQgNS4xOTk2MDk0IDUuOTk5NjA5NCA0LjU5OTIxODggNS41OTk2MDk0IDQuMTk5MjE4OCBMIDQuOTAwMzkwNiAzLjUgQyA0LjcwMDM5MDYgMy4zIDQuNDQ5MjE4OCAzLjE5OTIxODggNC4xOTkyMTg4IDMuMTk5MjE4OCB6IE0gMTkuODAwNzgxIDMuMTk5MjE4OCBDIDE5LjU1MDc4MSAzLjE5OTIxODggMTkuMjk5NjA5IDMuMyAxOS4wOTk2MDkgMy41IEwgMTguNDAwMzkxIDQuMTk5MjE4OCBDIDE4LjAwMDM5MSA0LjU5OTIxODcgMTguMDAwMzkxIDUuMTk5NjA5NCAxOC40MDAzOTEgNS41OTk2MDk0IEMgMTguODAwMzkxIDUuOTk5NjA5NCAxOS40MDA3ODEgNS45OTk2MDk0IDE5LjgwMDc4MSA1LjU5OTYwOTQgTCAyMC41IDQuOTAwMzkwNiBDIDIwLjkgNC41MDAzOTA2IDIwLjkgMy45IDIwLjUgMy41IEMgMjAuMyAzLjMgMjAuMDUwNzgxIDMuMTk5MjE4OCAxOS44MDA3ODEgMy4xOTkyMTg4IHogTSAxMiA1IEEgNyA3IDAgMCAwIDUgMTIgQSA3IDcgMCAwIDAgMTIgMTkgQSA3IDcgMCAwIDAgMTkgMTIgQSA3IDcgMCAwIDAgMTIgNSB6IE0gMSAxMSBDIDAuNCAxMSAwIDExLjQgMCAxMiBDIDAgMTIuNiAwLjQgMTMgMSAxMyBMIDIgMTMgQyAyLjYgMTMgMyAxMi42IDMgMTIgQyAzIDExLjQgMi42IDExIDIgMTEgTCAxIDExIHogTSAyMiAxMSBDIDIxLjQgMTEgMjEgMTEuNCAyMSAxMiBDIDIxIDEyLjYgMjEuNCAxMyAyMiAxMyBMIDIzIDEzIEMgMjMuNiAxMyAyNCAxMi42IDI0IDEyIEMgMjQgMTEuNCAyMy42IDExIDIzIDExIEwgMjIgMTEgeiBNIDQuOTAwMzkwNiAxOC4wOTk2MDkgQyA0LjY1MDM5MDYgMTguMDk5NjA5IDQuMzk5MjE4OCAxOC4yMDAzOTEgNC4xOTkyMTg4IDE4LjQwMDM5MSBMIDMuNSAxOS4wOTk2MDkgQyAzLjEgMTkuNDk5NjA5IDMuMSAyMC4xIDMuNSAyMC41IEMgMy45IDIwLjkgNC41MDAzOTA2IDIwLjkgNC45MDAzOTA2IDIwLjUgTCA1LjU5OTYwOTQgMTkuODAwNzgxIEMgNS45OTk2MDk0IDE5LjQwMDc4MSA1Ljk5OTYwOTQgMTguODAwMzkxIDUuNTk5NjA5NCAxOC40MDAzOTEgQyA1LjM5OTYwOTQgMTguMjAwMzkxIDUuMTUwMzkwNiAxOC4wOTk2MDkgNC45MDAzOTA2IDE4LjA5OTYwOSB6IE0gMTkuMDk5NjA5IDE4LjA5OTYwOSBDIDE4Ljg0OTYwOSAxOC4wOTk2MDkgMTguNjAwMzkxIDE4LjIwMDM5MSAxOC40MDAzOTEgMTguNDAwMzkxIEMgMTguMDAwMzkxIDE4LjgwMDM5MSAxOC4wMDAzOTEgMTkuNDAwNzgxIDE4LjQwMDM5MSAxOS44MDA3ODEgTCAxOS4wOTk2MDkgMjAuNSBDIDE5LjQ5OTYwOSAyMC45IDIwLjEgMjAuOSAyMC41IDIwLjUgQyAyMC45IDIwLjEgMjAuOSAxOS40OTk2MDkgMjAuNSAxOS4wOTk2MDkgTCAxOS44MDA3ODEgMTguNDAwMzkxIEMgMTkuNjAwNzgxIDE4LjIwMDM5MSAxOS4zNDk2MDkgMTguMDk5NjA5IDE5LjA5OTYwOSAxOC4wOTk2MDkgeiBNIDEyIDIxIEMgMTEuNCAyMSAxMSAyMS40IDExIDIyIEwgMTEgMjMgQyAxMSAyMy42IDExLjQgMjQgMTIgMjQgQyAxMi42IDI0IDEzIDIzLjYgMTMgMjMgTCAxMyAyMiBDIDEzIDIxLjQgMTIuNiAyMSAxMiAyMSB6Ij48L3BhdGg+Cjwvc3ZnPg=="
        />
      ) : (
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABlklEQVR4nO2Yu0oDQRSGv6iNoL6AEbUR7ETwggSx1TKCCNbWPoCI+gyKL2LhBYyaYGMhVt6wUwuvYExjtXJgAiGsay6zszNmPvi7YeHj7Jw9e8Dj8XhaiTOgwD8gUHG6EkFVnKxMIUQkj8MErr9alZVxuhItyRSwBhwAL0AGh0gBS8BFSFNI4wj9wFGIQDmdOEAG+IyQkHRjOTNA6Q8JyZDNs1Qf8F6DhGSWBMeQQsS5NuC0RgnJNgmOIfmIcwt1SEgegA4s+3KngMs6RSTLWMZEAxKSJ9u610aDIpI9oB1LOGlCRLKlmkXi3DcpItkFepIWKWkQkbwCK0l0szJFTSLlPAI7wBwwDHSp2Sytxh/pkrFwq1kkiMgzMZIzKLIfp8imQZHVOEVGDYqMxykil+/GgMQ5Bpg3ILJoQiT1y+ZRVw7jbLvVDKgNiW6JD/XTZpRp4FujRBGYNC1RKaOjMm/qWYky2OSdyQG9WIJczixwVYeALPOytoz1YYwA62ppdw18qan5DjhW69Qxk53J4/F4PJ5/yw87o+iwCGWh5AAAAABJRU5ErkJggg==" />
      )}
    </button>
  );
}
