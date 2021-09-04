import { Form } from 'react-bootstrap';
import { useState } from 'react';
import countries from './utils/countries';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredResults, setFilteredResults] = useState(countries);

  const handleInputChange = (event) => {
    const searchValue = event.target.value;
    const pattern = new RegExp(searchValue, 'gi');
    setSearchTerm(searchValue);
    setFilteredResults(
      countries
        .filter((country) =>
          country.toLowerCase().includes(searchValue.toLowerCase())
        )
        .map((country) =>
          country.replace(pattern, (match) => {
            return `<mark>${match}</mark>`;
          })
        )
    );
  };

  return (
    <div className="container">
      <Form>
        <Form.Group controlId="searchTerm">
          <Form.Control
            type="search"
            name="searchTerm"
            placeholder="Search country"
            value={searchTerm}
            onChange={handleInputChange}
          />
        </Form.Group>
      </Form>
      <ul className="list">
        {filteredResults.map((country) => (
          <li key={country} dangerouslySetInnerHTML={{ __html: country }}></li>
        ))}
      </ul>
    </div>
  );
}
