import SearchSpare from "../../components/Layout/search";

const autoeleMitsubishi = () => {
   const handleSearch = (query) => {
      console.log("Buscando...", query);
    }

    return (
        <div>
          <SearchSpare onSearch={handleSearch} />
        </div>
    );
}

export default autoeleMitsubishi;

