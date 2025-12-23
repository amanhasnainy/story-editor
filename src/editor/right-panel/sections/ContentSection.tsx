export default function ContentSection({ element }: any) {
  return (
    <div className="section">
      <h3>Content</h3>

      <label>Text</label>
      <div className="input-box">
        <textarea
          value={element.text || ""}
          onChange={(e) => element.set({ text: e.target.value })}
          placeholder="Add a subtitle"
        />
        <button className="icon-btn">{`{}`}</button>
      </div>

      <label>
        Tracking ID <span className="info">ⓘ</span>
      </label>
      <input placeholder="(Optional) Enter your Tracking ID" />
    </div>
  );
}
