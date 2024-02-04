import React, {useState} from 'react'
import { SearchStyled } from '../styled/SearchStyled'
import { FaSearch } from "react-icons/fa";
import { InputSearchStyled } from '../styled/InputSearchStyled';
import { SelectStyled } from '../styled/SelectStyled';
import { ButtonLogoStyled } from '../styled/ButtonLogoStyled';
import { useDispatch } from "react-redux";
import { RootState } from "../../state/store"
import { useNavigate } from 'react-router-dom';

const Search = () => {

  const [selectedFilter, setSelectedFilter] = useState('genere')
  const [searchTerm, setSearchterm] = useState('')
  const dispatch = useDispatch();

  const navigate = useNavigate()

  const navigateToSongs = () => {
    return new Promise(resolve => {
      resolve(navigate('/'));
    });
  }

  const search = () => {
    navigateToSongs()
    .then(()=>{
      switch(selectedFilter) {
        case 'album':
          dispatch({
            type: 'SEARCH_SONG_REQUESTED',
            payload: {album: searchTerm}
          });
          break;
        case 'genere':
          dispatch({
            type: 'SEARCH_SONG_REQUESTED',
            payload: {genere: searchTerm}
          });
          break;
        case 'artist':
          dispatch({
            type: 'SEARCH_SONG_REQUESTED',
            payload: {artist: searchTerm}
          });
          break;
        case 'title':
          dispatch({
            type: 'SEARCH_SONG_REQUESTED',
            payload: {title: searchTerm}
          });
          break;
        default:
          break;
      }
    })
    setSearchterm('')
  }

  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      search();
    }
  };

  return (
    <>
    <SearchStyled>

      <InputSearchStyled name='genere' type='text' 
                         placeholder={selectedFilter} 
                         className='other-song-details'
                         value={searchTerm}
                         onChange={(event) => {
                          setSearchterm(event.target.value)
                         }}
                         onKeyDown={handleKeyDown}
                        />
      
      <ButtonLogoStyled 
        onClick={(e) => search() }>
        <FaSearch color='black' size={23}/>
      </ButtonLogoStyled>
      
      <SelectStyled 
        name="filters" 
        id="filters" 
        form="filterform"
        onChange={(event) => setSelectedFilter(event.target.value)}>
        <option value="genere">Genre</option>
        <option value="album">Album</option>
        <option value="artist">Artist</option>
        <option value="title">Title</option>
      </SelectStyled>
      
    </SearchStyled>
    </>
  )
}

export default Search