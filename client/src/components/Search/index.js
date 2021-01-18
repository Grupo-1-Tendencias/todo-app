import "./styles.css";

function Search({ onChange }) {
  return (
    <div className="search">
      <input placeholder="Search" onChange={onChange} />
      <button></button>
    </div>
  );
}

export default Search;
