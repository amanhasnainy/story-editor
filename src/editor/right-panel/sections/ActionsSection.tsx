export default function ActionsSection({ element }: any) {
  return (
    <button
      className="delete-btn"
      onClick={() => element.remove()}
    >
      🗑 Delete
    </button>
  );
}
