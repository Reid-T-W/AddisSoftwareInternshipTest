import React, { useEffect } from 'react'
import { StatsStyled } from './styled/StatsStyled';
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../state/store"

const Stats = () => {
  const stats = useSelector((state: RootState) => state.songs.stats)
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch({type: 'GET_STATS_REQUESTED'})
  }, [dispatch])
  return (
    <StatsStyled>
        <div>
            {stats.songsCount} Songs
        </div>
        <div>
            {stats.albumsCount} Albums
        </div>
        <div>
            {stats.artistsCount} Artists
        </div>
        <div>
            {stats.genersCount} Geners
        </div>          
    </StatsStyled>
  )
}

export default Stats