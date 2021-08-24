import { useParams } from 'react-router-dom';

export default function Posts() {
    const { category, topic } = useParams();

    return (
        <div>
            <div>
                This is posts page for js- {category} / {topic}
            </div>
        </div>
    );
}

// export default function Posts({ match }) {
//     const { params } = match;
//     return (
//         <div>
//             <div>
//                 This is posts page for js- {params.category} / {params.topic}
//             </div>
//         </div>
//     );
// }
