import SearchSpare from "../../components/Layout/search";

const AutoeleDoosan= () => {
   const handleSearch = (query) => {
      console.log("Buscando...", query);
    }

    return (
        <div>
          <SearchSpare onSearch={handleSearch} />
        </div>
    );
}

export default AutoeleDoosan;

