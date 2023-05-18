import React, { useEffect, useState } from 'react';
import { getSpeciesList } from '../../src/usecases/GetSpeciesListUseCase';

function SpeciesPage() {
  const [speciesList, setSpeciesList] = useState([]);

  useEffect(() => {
    fetchSpeciesList();
  }, []);

  const fetchSpeciesList = async () => {
    try {
      const list = await getSpeciesList();
      setSpeciesList(list);
    } catch (error) {
      console.error('Failed to fetch species list', error);
    }
  };

  const renderSpeciesList = () => {
    if (speciesList.length === 0) {
      return <p>Loading species list...</p>;
    }

    return (
      <ul>
        {speciesList.map(species => (
          <li key={species.id}>{species.name}</li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <h1>Species Page</h1>
      {renderSpeciesList()}
    </div>
  );
}

export default SpeciesPage;
