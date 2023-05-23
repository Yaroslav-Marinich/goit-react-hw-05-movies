import './styles.css';

export const SearchBar = ({ onSubmit }) => {
  return (
    <div className="serchBarContainer">
      <form className='searchBarForm' action="" onSubmit={onSubmit}>
        <input
          className="searchBarInput"
          type="text"
          name="search"
          placeholder="Enter movie name"
          autoFocus
          autoComplete="off"
        />
        <button
          className="searchBarBtn"
          type="submit"
          aria-label="Search movies"
        >
          Search
        </button>
      </form>
    </div>
  );
};
