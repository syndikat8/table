import React, {ChangeEvent, useState} from "react";
import styles from './Search.module.css';

type PropsType = {
    search: string
    onSearch: (e:string) => void
}

const Search: React.FC<PropsType> = ({onSearch, search}) => {

    const [description, setDescription] = useState(search)

    const onDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
        setDescription(e.target.value)
    }

    const onButtonClick = () => {
        onSearch(description)
        setDescription("")
    }

    return (
        <div className={styles.search}>
            <div className="input-group mb-3 mt-2">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter the title"
                    value={description}
                    onChange={onDescriptionChange}
                />
                <div className="input-group-prepend">
                    <button
                        onClick={onButtonClick}
                        className="btn btn-outline-secondary">
                        Search
                    </button>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Search);
