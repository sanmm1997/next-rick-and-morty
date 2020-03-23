import { memo } from 'react';
import styles from '../../components/styles/characters.module.scss';
import styleEpisode from '../../components/styles/episodes.module.scss';

const EpisodeItem = ({ episode }) => {

    return (
        <div className={[styleEpisode.episode, styles.content].join(" ")}>
            <div className={[styleEpisode.img_content].join(" ")}>
                <img src="/episode-bg.jpeg" alt=""/>
            </div>
            <div className={[styleEpisode.text_content].join(" ")}>
                <h4>{episode.name}</h4>
                <p>{episode.episode}</p>
                <p>{episode.air_date}</p>
            </div>
        </div>
    )
};

export default memo(EpisodeItem);