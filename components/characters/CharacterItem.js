import { memo } from 'react';
import Link from "next/link";
import styles from '../../components/styles/characters.module.scss';
import colors from '../../components/styles/colors.module.scss';

const CharacterItem = ({ character }) => {

    const name = character.name.length < 17 ? character.name : `${character.name.substr(0, 17)} ...`;

    return (
        <div className={styles.content}>
            <div>
                <img src={character.image} alt=""/>
            </div>
            <div>
                <h4>{name}</h4>
                <p>{character.species}</p>
                <p>{character.gender}</p>
                <div className="text-center">
                    <Link href="/characters/[id]" as={`/characters/${character.id}`}>
                        <a className={["btn btn-sm text-white", colors.bgRickAndMorty].join(" ")}>
                            Read more
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default memo(CharacterItem);