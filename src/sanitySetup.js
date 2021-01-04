import sanityClient from "@sanity/client"

export default sanityClient({
    projectId: "ue0tyy33",
    dataset: "production",
    useCdn: true
});

