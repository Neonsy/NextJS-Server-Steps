export default function Docs({ params }: { params: { slug: string[] } }) {
    if (params.slug?.length === 1) {
        return <h1>Viewing Docs feature {params.slug[0]}</h1>;
    } else if (params.slug?.length === 2) {
        return (
            <h1>
                Viewing Docs Example {params.slug[1]} for feature {params.slug[0]}
            </h1>
        );
    } else {
        return <h1>Docs Home Page</h1>;
    }
}
