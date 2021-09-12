import React, { useMemo } from 'react'
import queryString from 'query-string'
import { useHistory, useLocation } from 'react-router';

import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../hero/HeroCard';
import { getHeroByName } from '../../selectors/getHeroByName';

export const SearchScreen = () => {

    const history = useHistory();
    const location = useLocation();
    
    const { q = "" } = queryString.parse(location.search)
   

    const [formValues, handleInputChange] = useForm({
        searchText: q
    });

    const { searchText } = formValues;
    const heroFiltered = useMemo(() => getHeroByName(q), [q])

    

    const handleSearch = (e) => {
        e.preventDefault()
        history.push(`?q=${searchText}`);
    }

    return (
        <div>
            <h1>Search Screen</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr />
                    <form>
                        <input type="text" placeholder="Find your hero" className="form-control" autoComplete="off"
                            name="searchText" value={searchText} onChange={handleInputChange}
                        />
                        <button type="submit" className="btn m-1 btn-block btn-outline-primary" onClick={handleSearch}>
                            Search...
                        </button>
                    </form>
                </div>

                <div className="col-7">

                    <h4>Results</h4>
                    <hr />

                    {
                        (q === '')
                        && <div className="alert alert-info">
                            Search a hero
                        </div>
                    }
                    
                    {
                        (q !== '' && heroFiltered.length === 0)
                        && <div className="alert alert-danger">
                            There is no a hero with {q}
                        </div>
                    }


                    {
                        heroFiltered.map(hero => (
                            <HeroCard
                                key={hero.id}
                                {...hero}

                            />
                        ))
                    }


                </div>

            </div>
        </div>
    )
}
