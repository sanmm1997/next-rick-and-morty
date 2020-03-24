import {useRouter} from "next/router";

const Pager = ({ info }) => {
    const { pages, next, prev } = info;
    const router = useRouter();

    const handleClick = (type) => {
        const page = (type === 'prev') ? prev : next;
        router.push(`/characters?page=${page}`)
    };

    return (
        <>
            <div className="row">
                <div className="col-12">
                    <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-center">
                            { prev &&
                            <li className="page-item">
                                <a className="page-link" onClick={() => handleClick('prev')}>
                                    <i className="fas fa-step-backward"/>
                                </a>
                            </li>
                            }
                            {/*<li className="page-item"><a className="page-link" href="#">1</a></li>*/}
                            { next &&
                            <li className="page-item">
                                <a className="page-link" onClick={() => handleClick('next')}>
                                    <i className="fas fa-step-forward"/>
                                </a>
                            </li>
                            }
                        </ul>
                    </nav>
                </div>
            </div>
            <style jsx>
                {`
                    a {
                      cursor: pointer;
                    }
                `}
            </style>
        </>
    );
};

export default Pager;