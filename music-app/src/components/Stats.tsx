import React, { useEffect } from 'react'
import { StatsStyled } from './styled/StatsStyled';
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../state/store"
import { Text } from "rebass"

const Stats = () => {
  const stats = useSelector((state: RootState) => state.songs.stats)
  const dispatch = useDispatch();

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