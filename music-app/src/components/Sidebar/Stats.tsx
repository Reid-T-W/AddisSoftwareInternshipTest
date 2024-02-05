import React, { useEffect } from 'react'
import { StatsStyled } from '../styled/StatsStyled';
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../state/store"
import { Text } from "rebass"

/**
 * Stats Component, upon loading this component dispatches
 * an action that makes an api call to get stats related to 
 * songs, albums, artits, and genres
 * 
 * @component
 * 
 * @returns {JSX.Element} The rendered component
 */
export const Stats = () => {
  const stats = useSelector((state: RootState) => state.songs.stats)
  const dispatch = useDispatch();

  // Dispatch action
  useEffect(()=>{
    dispatch({type: 'GET_STATS_REQUESTED'})
  }, [dispatch])
  
  return (
    <StatsStyled>
        <div>
          <Text style={{ display: 'inline' }} color={'black'}>{stats.songsCount}</Text> Songs
        </div>
        <div>
          <Text style={{ display: 'inline' }} color={'black'}>{stats.albumsCount}</Text> Albums
        </div>
        <div>
          <Text style={{ display: 'inline' }} color={'black'}>{stats.artistsCount}</Text> Artists
        </div>
        <div>
          <Text style={{ display: 'inline' }} color={'black'}>{stats.genersCount}</Text> Genres
        </div>          
    </StatsStyled>
  )
}

export default Stats