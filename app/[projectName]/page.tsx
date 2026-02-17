type Params = {
    projectName: string;
}

export default async function ProjectNamePage({ params }: { params: Promise<Params> }) {
    const { projectName } = await params;

    return (
        <p>This page features project &quot;{ projectName }&quot;</p>
    );
}