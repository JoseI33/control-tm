import SearchSpare from "../../components/layout/search"

const Tractores = () => {
    const handleSearch = (query) => {
        console.log(query);
        }
       return (
        <div>
          <SearchSpare onSearch={handleSearch} />
        </div>
    );
}

export default Tractores;