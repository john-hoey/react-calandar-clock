import React, { useEffect, useState } from "react";
import "./Clock.css";
import ghlogo from "../images/github-logo.png";

function Clock() {
  const [currentDateAndTime, setCurrentDateAndTime] = useState(new Date());
  const [hourFormat12, setHourFormat12] = useState(true);
  function getUpdatedDateAndTime() {
    setCurrentDateAndTime(new Date());
  }
  useEffect(() => {
    setInterval(getUpdatedDateAndTime, 1000);
  }, []);
  return (
    <section className="date-time-container">
      <div className="date-container">
        <img
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSIyNCIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTEwMjguNCkiPjxwYXRoIGQ9Im01IDEwMzIuNGMtMS4xMDQ2IDAtMiAwLjktMiAydjE0YzAgMS4xIDAuODk1NCAyIDIgMmg2IDIgNmMxLjEwNSAwIDItMC45IDItMnYtMTRjMC0xLjEtMC44OTUtMi0yLTJoLTYtMi02eiIgZmlsbD0iI2JkYzNjNyIvPjxwYXRoIGQ9Im01IDNjLTEuMTA0NiAwLTIgMC44OTU0LTIgMnYxNGMwIDEuMTA1IDAuODk1NCAyIDIgMmg2IDIgNmMxLjEwNSAwIDItMC44OTUgMi0ydi0xNGMwLTEuMTA0Ni0wLjg5NS0yLTItMmgtNi0yLTZ6IiBmaWxsPSIjZWNmMGYxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDEwMjguNCkiLz48cGF0aCBkPSJtNSAxMDMxLjRjLTEuMTA0NiAwLTIgMC45LTIgMnYzaDE4di0zYzAtMS4xLTAuODk1LTItMi0yaC02LTItNnoiIGZpbGw9IiNlNzRjM2MiLz48cGF0aCBkPSJtNyA1LjVhMS41IDEuNSAwIDEgMSAtMyAwIDEuNSAxLjUgMCAxIDEgMyAweiIgZmlsbD0iI2MwMzkyYiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLjUgMTAyOC40KSIvPjxwYXRoIGQ9Im02IDFjLTAuNTUyMyAwLTEgMC40NDc3LTEgMXYzYzAgMC41NTIzIDAuNDQ3NyAxIDEgMXMxLTAuNDQ3NyAxLTF2LTNjMC0wLjU1MjMtMC40NDc3LTEtMS0xeiIgZmlsbD0iI2JkYzNjNyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAxMDI4LjQpIi8+PHBhdGggZD0ibTcgNS41YTEuNSAxLjUgMCAxIDEgLTMgMCAxLjUgMS41IDAgMSAxIDMgMHoiIGZpbGw9IiNjMDM5MmIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyLjUgMTAyOC40KSIvPjxnIGZpbGw9IiNiZGMzYzciPjxwYXRoIGQ9Im0xOCAxMDI5LjRjLTAuNTUyIDAtMSAwLjQtMSAxdjNjMCAwLjUgMC40NDggMSAxIDFzMS0wLjUgMS0xdi0zYzAtMC42LTAuNDQ4LTEtMS0xeiIvPjxwYXRoIGQ9Im01IDEwMzkuNHYyaDJ2LTJoLTJ6bTMgMHYyaDJ2LTJoLTJ6bTMgMHYyaDJ2LTJoLTJ6bTMgMHYyaDJ2LTJoLTJ6bTMgMHYyaDJ2LTJoLTJ6Ii8+PHBhdGggZD0ibTUgMTA0Mi40djJoMnYtMmgtMnptMyAwdjJoMnYtMmgtMnptMyAwdjJoMnYtMmgtMnptMyAwdjJoMnYtMmgtMnptMyAwdjJoMnYtMmgtMnoiLz48cGF0aCBkPSJtNSAxMDQ1LjR2Mmgydi0yaC0yem0zIDB2Mmgydi0yaC0yem0zIDB2Mmgydi0yaC0yem0zIDB2Mmgydi0yaC0yem0zIDB2Mmgydi0yaC0yeiIvPjwvZz48cmVjdCBmaWxsPSIjYzAzOTJiIiBoZWlnaHQ9IjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMTAyOC40KSIgd2lkdGg9IjE4IiB4PSIzIiB5PSI4Ii8+PC9nPjwvc3ZnPg=="
          className="calandar-svg"
          alt="calandar icon"
        />
        {currentDateAndTime.toLocaleString("en-US", {
          weekday: "long",
          month: "long",
          day: "numeric",
          year: "numeric",
        })}
      </div>
      <div className="clock-container">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAYAAADhu0ooAAAABmJLR0QA/wD/AP+gvaeTAAAK1UlEQVRogc1bfXBU1RX/nfvebnaT3ZCAJiE0AeRDPqLlK3YQRBClX4ooTQUtBoLTzmj50Gpwpjq1HVuRcXTwozI6EEAFLBZIQJAOqK1fw2ci2lgIhAAhkhDYZL+zb987/WNJTNj3dt9uNo6/v/adc+6557z77r3nnnuW0AfgB5ZkQqYFkKQ7IYlhLEQeCWGHIAlEBCJA0xjMKlQtAE27AE07hbC6C2F+i955xZ1qmyhVirisPB8U+jPL8j1ksQwAJamaGVCUVoTCO5BGz9Cal86nwr5eO8oLlv2U0+TVlGa9HiJl7+2KcgYCwRpcbJ9HVeuO90ZV0pZx6fIpbBGbyW4r6I0BpvpqbmUOKluFLMpp29ozyehI2FEuK3cCoW1It9+e9OeZaJ+tLsAfAAA/gZ+H1b+Stm4NJaIjIUt58SPT2Jq+m2RLRiLtegVFAV9ojXzGnSAcpTDm0a71dWbVmHaUy5athN1eDmFyIgoBf1EROkaPgpaXC8p0QqRZQJIAM+C/7IWvvhFpLc1I+/YCHCdPIP18Y8QiISEy3wkIhXo6+R3cxFhEVeu3pcxRLnt0MzLs88zI+oqL0TH1ZsgDr4UsxVZ/0afiolfrepa9XmRXH0H/wwfgOHXSTHcqAUupcv3f4wnGdZQXLf8XHOl3xNZCaJ81C9rUnyAtPc2MgQCAYJhRfymsy8s4cxp5e/cg61hNXD3E9DRVVTwbUyYWkxct3wRH+vxYMoGxYxEsuQdpTntcg0KhEFa/uBqyxYIly5YgpAk0uPQd7YSz7jgK/rEZ9m+bYsoReBlVbnjZmG8AXrhsFZwZTxhqFgKu+fNgHT/W1OLLzHj+b6vw2aefAQBunTEdcx9agoASvy1pKvI+2I38PbuM5isAqASthCo3btfVoWtU2dIZsKfvN1p4NHs62pb/HrZr+sW38greXPMmqip39qBNnvlzzFnwkGkd2UePYMhb6yAUo7fDXhI8kbZvPHE1R0SJlpU7YbXtMnIy7HSifcVjCTm56/29qKrcCdli7aLJFiu+2L8Hh/6z37Qe14SJqFvyKFSb0TQhB2tiE5eUWK/mRDkKUrbDIqfrqdHsdngeX2ZqPgKAP8RouByGKyiQnuHA/Q8/1sW7/+HHkJ7hgCTJpnR1wnvdcJx8eCm0NMNFbyKUjBVXE3uMGj+4fDIy7Z/rTjohcLn8D7BdmxXXmLAKXPCocHdoUbwVC+cCAJ5f/8+4emIh++gRXFfxhtGcDRBhDO1Y39BJ6DGibBXvGq0srvvnm3LS3aHh1GVF18lUwjVhIppn3G7EtmuM57oTuhzl3yy7g2xpugF6YORIWMaNidt5i1dFY5sKtW997ML52fcgkDdQl0fAr/nOhSM6n79z1Ca9qjuaRAg8cF/MExgDaHKraPXF9lCEw3hqUCFW5BeANDWOG/HBsoxz8x4w7E4T9HjXAwDwb5cPJJt1pJ60+7YZsDlsMTtsalfRFogzjMwY+v42zOjXD7OysjBk945Ye6JpeIaPRHvRjbo8Il7As8ucQOeIKngWFL0AA4A245aYHbX4VLQH43+rhR9+gOzjtV3PA2q/QuG+PXHbmUHTL+8yYtkhtDlA54ha5bv1pHyTJsJqj9qSuuDpYLR64zt5zbGjyDlyAJr83VaiyTJyqg/immNH47aPB3/BYPgGD9XlMWMeAAguK3eSbBmgJxScNtVQuaIxzrtjx6ldnQkB1WZH/eySLlr97BKoNjtYkkzpiIdLN08xYk3nkhKrjHCgFMIZzRYC1rxrDRU3uzVoJlfXS0XjcKloXA9a2/DrUb00al9PGm033IjCLaQ379MRckwSkKVf6DX0jS2CZHCe9IW4z/fJRKFkZsFfYJC+Yp4iWJJG6PFCRcb7Zou391tDX8BXOESXrgmMEiREri4zN0e3kT/ECCiJbwuapqHq7bV4qLkZjzY14uC/94FTsL10R+BHhbp0YoyQIUm6EbrIdOg2csXbL3WgaRpefaYcSjAISBIuKSEcq3gdtTWHULr0SVCKsomh/tlGrAIBsO6yJ2zR2woz4Elibr6/aV3ESQDBQAAebzsA4Jvqwzj8yYcJ6zOC4jQ8OjqF0bnzrBeobVZQ26zggicyJ30hhpbE13amLpJkDwYCcHvawN2U1FYfTFxhN3iCKlrcClrcCpoyDXcJp344ZAC/ktxKa7HbEOwIwuONvjui1F3/RIJuA46Apj9GBRnAmFwLxuRakOeMfN2BcHKLx/jJt8Ld7gJz9IsaPeGmpHR2wmmTkJNpQU6mBfneViMxrwBBd6/Q/MEommIuEIpC8bSZGD1+UhR9zPhJmDR1RnJKdWBpcxmxPDKHtQBZpejQyO0B+vckK8lMUABEhNKlT+LwJx/im+pDAIDR44sx6ZbbUrbiAoDVZejoWRma1gwgylFqOAcMye96Zu7dqYqIUDxtJoqnzUxeSRzYG8/q0plRJ0jTdHP/1kNHegqn3q6UI6PhtC5dAMcFFHW3HtNeXYNwt5yIov6wXbW425DeZHA5LmmfCsi29XrfJGkqvJ/XIKgw/Aqjyf3DjG87kf1ljdHc8kMOHBG0bpUHihK9LksSnLv2oP5yGA2Xw0nFt98n+h/4woj1EW3dGrqSSlEqo9hCwFF/Ehmn6/vOuhTBcfqU4fwk5s1AZ87IKv5ktKTm7tvbR+alDrl7DXNPfkCqAq44SmteOs+Bjq+72KoGhCIXOdlfVsN54n99a2kv4Kw7jqyvj+nymHkDVa3zAN3yutTquo8vXmZ2tYMvtKB7nqTgvXdBapJhUR9CKCEUbtlkxFYF5Be7ZDt/UGVFLYLB9+Dx4epUu73pPAbtMFUq8L0iv2o7bM3f6vIY2EJVa7tihB6nF1K1xwH49Brmfrwf2TXVqbSzV+h/5BByPzY8y/qFJP2xO6Gnozs3niXwKt2mzBiyYS2cJ6PuWL93OOpPYvDbGwxjUgL+enXhVfR5NDftOQAH9BQIJYRha16D45Tp8p6Uw3nyBEa8thpCMaqn4sOw+l64mqp/tT+ndBgzHQWQqcfXLBY0PLgYrvETkrc4CfQ/fBCD39kYy0nDq33jYo3ZC+9lwlbojToAEKHl1tvQOGcuWE7s1jpRCCWE/KodyP1oXywxlTSaSzsrooMfxCu/uXvR7xi8JpZMYGA+zv1qHjzXj4pvMSI5HiCSGTADZ91xFG55G7bm5phyRFhKO9a/YsiP1xHPWfg0M/4ST67thh+jedbP4B06LKZcizsSiORkWmLKZZxpwMDdO9Hvv1/F67r3BVWd4LtLH2HQyzD6jLvBO3QYXMU3wTVuApTM6PRjLEct7e3IOlaDAV98ioyzpqpVVSJaQjsqXo8naL7oMTJnK2CwQEVrJgTyBsJ73XAEBw1CR/8BCGf2w/nMHIAI+e4WWNrbYHW5YG88i4wzDZGiR/NpjHbSqNRoTkaZY1YrAPC9iwezqm0GeHIi7VIPPkwsz+8e+cRDQnld2rb2DFm904npaQD+hO3rPXwEfoqs/imJOAn0ptT8rgcLNaKVRHQfEnxhSUBl4F0BepIqK84lo6D3fx6YvXi4Bu0JIl4AwFxJmXkEGNgoWHoh0RG8Gqn7O8jsMieENudKzcB0ALpldibgB/ARMW0BqLLzPNlb9En1P5eUWNGRXgzQzZrAKGIMB1AAIAuAA5HsqQ8MFwiNzKgTwHEQfYZcyyF64w0Txa2J4f+GWCExXCbZ4QAAAABJRU5ErkJggg=="
          className="clock-svg"
          alt="clock icon"
        />
        {hourFormat12 === true && (
          <div className="clock-display-12">
            {currentDateAndTime.toLocaleTimeString()}{" "}
            <button
              className="hour-format-btn"
              onClick={() => setHourFormat12(false)}
            >
              Change to 24-hour Format
            </button>
          </div>
        )}
        {hourFormat12 === false && (
          <div className="clock-display-24">
            {currentDateAndTime.toLocaleTimeString("en-GB")}{" "}
            <button
              className="hour-format-btn"
              onClick={() => setHourFormat12(true)}
            >
              Change to 12-hour Format
            </button>
          </div>
        )}
      </div>
      <a
        href="https://github.com/john-hoey/react-calandar-clock"
        target="_blank"
        rel="noreferrer"
        className="gh-link"
      >
        <img src={ghlogo} alt="github icon and link" />
        &nbsp;Browse the Source
      </a>
    </section>
  );
}

export default Clock;
