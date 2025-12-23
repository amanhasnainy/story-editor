const ANIMATIONS = [
  "none",
  "fade",
  "slide-up",
  "slide-down",
  "slide-left",
  "slide-right",
  "zoom-in",
  "zoom-out",
];

export default function AnimationSection({ element }: any) {
  const enter = element.animations?.enter || {};
  const exit = element.animations?.exit || {};

  const setEnter = (data: any) => {
    element.setAnimations({
      enter: { ...enter, ...data },
      exit,
    });
  };

  const setExit = (data: any) => {
    element.setAnimations({
      enter,
      exit: { ...exit, ...data },
    });
  };

  return (
    <div className="section">
      <h3>Animation</h3>

      {/* ENTER */}
      <label>Enter</label>
      <select
        value={enter.type || "none"}
        onChange={(e) =>
          setEnter({
            type: e.target.value === "none" ? null : e.target.value,
          })
        }
      >
        {ANIMATIONS.map((a) => (
          <option key={a} value={a}>
            {a.replace("-", " ")}
          </option>
        ))}
      </select>

      <div className="row">
        <input
          type="number"
          placeholder="Duration (ms)"
          value={enter.duration || 600}
          onChange={(e) =>
            setEnter({ duration: Number(e.target.value) })
          }
        />
        <input
          type="number"
          placeholder="Delay (ms)"
          value={enter.delay || 0}
          onChange={(e) =>
            setEnter({ delay: Number(e.target.value) })
          }
        />
      </div>

      <hr />

      {/* EXIT */}
      <label>Exit</label>
      <select
        value={exit.type || "none"}
        onChange={(e) =>
          setExit({
            type: e.target.value === "none" ? null : e.target.value,
          })
        }
      >
        {ANIMATIONS.map((a) => (
          <option key={a} value={a}>
            {a.replace("-", " ")}
          </option>
        ))}
      </select>

      <div className="row">
        <input
          type="number"
          placeholder="Duration (ms)"
          value={exit.duration || 600}
          onChange={(e) =>
            setExit({ duration: Number(e.target.value) })
          }
        />
        <input
          type="number"
          placeholder="Delay (ms)"
          value={exit.delay || 0}
          onChange={(e) =>
            setExit({ delay: Number(e.target.value) })
          }
        />
      </div>
    </div>
  );
}
