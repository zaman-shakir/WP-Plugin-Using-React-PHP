
import { useSelect } from '@wordpress/data';
import { store as coreDataStore } from '@wordpress/core-data';
import { decodeEntities } from '@wordpress/html-entities';

const MyFirstApp = () => {
     const pages = useSelect(
        select =>
            select( coreDataStore ).getEntityRecords( 'postType', 'page' ),
        []
    );

    return (
        <div>
            <h2>Hello from react! test</h2>
            <ul>
            { pages?.map( page => (
                <li key={ page.id }>
                    { page.title.rendered }
                </li>
            ) ) }
            </ul>
        </div>
    );
};

export default MyFirstApp;